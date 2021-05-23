import { Component, ElementRef, OnInit, QueryList, ViewChildren, AfterViewChecked } from '@angular/core';
import { AlertController, Gesture, GestureController, Platform, PopoverController } from '@ionic/angular';
import { MatchingService } from 'src/app/core/services/crud/matching.service';
import { GlobalService } from 'src/app/core/services/global/global.service';
import { AdvertisementService } from 'src/app/core/services/crud/advertisement.service';
import { ToastService } from 'src/app/core/services/addapters/toast.service';
import { TransService } from 'src/app/core/services/addapters/trans.service';
import { NotificationsComponent } from 'src/app/pages/notifications/notifications.component';
import { NotificationService } from 'src/app/core/services/global/notification.service';
import { AuthService } from 'src/app/core/services/global/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-files-recruiter',
  templateUrl: './files-recruiter.component.html',
  styleUrls: ['./files-recruiter.component.scss']
})
export class FilesRecruiterComponent implements AfterViewChecked, OnInit {

  @ViewChildren('matchingCard') matchingCard: QueryList<ElementRef>;
  longPressActive = false;
  candidates = [];
  advertisements;
  advertisementId;
  annonceFind = false;

  constructor(private matchingService: MatchingService, private globalService: GlobalService, private transService: TransService, private authService: AuthService,
    public advertisementService: AdvertisementService, private gestureCtrl: GestureController, public NotificationController: PopoverController,
    private platform: Platform, public alertController: AlertController, private toastService: ToastService, public notifService: NotificationService,
    private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const { advertismentId } = this.activedRoute.snapshot.queryParams;
    if (advertismentId) {
      this.advertisementId = advertismentId;
      this.getCandidate();
      this.annonceFind = true;
    } else {
      this.getCandidates();
    }
  }

  ionViewWillEnter() {
    this.getCandidates();
  }

  /**
   * get candidate
   */
  private getCandidates() {
    this.advertisementService.getAdvetissementByCreator().subscribe(res => {
      this.advertisements = res;
      console.log(res);
    });
    // this.advertisementService.read().subscribe(res => {
    //   this.advertisements = res.data.filter(x => x.status === 'Ouverte');
    // });
  }

  async presentNotification(ev: any) {
    const notif = await this.NotificationController.create({
      component: NotificationsComponent,
      cssClass: 'notification-class',
      event: ev,
      translucent: true,
      animated: true,
      backdropDismiss: true,
      keyboardClose: true,
      showBackdrop: true,

    });
    this.notifService.notificationShowing().subscribe(res => {
      this.notifService.countNotif = res['count'];
    });
    return await notif.present();
  }

  ngAfterViewChecked(): void {
    const cardArray = this.matchingCard.toArray();
    this.swipe(cardArray);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Jobwinwin',
      subHeader: 'Information',
      message: 'Aucun candidat ne match avec vos critères',
      buttons: ['OK']
    });

    await alert.present();
  }

  /**
   * Action swipe
   * @param cardArray
   */
  swipe(cardArray) {
    for (let i = 0; i < cardArray.length; i++) {
      const card = cardArray[i];
      const gesture: Gesture = this.gestureCtrl.create({
        el: card.nativeElement,
        gestureName: 'swipe-gesture',
        onStart: ev => {
          // console.log('debut diyal action');
        },
        onMove: ev => {
          card.nativeElement.style.transform = `translateX(${ev.deltaX}px) rotate(${ev.deltaX / 10}deg)`;
        },
        onEnd: ev => {
          card.nativeElement.style.transition = `.5s ease-out`;
          if (ev.deltaX > 150) {
            card.nativeElement.style.transform = `translateX(${+this.platform.width() * 2}px) rotate(${ev.deltaX / 2}deg)`;
            this.addWin(this.candidates[i]._id);
          } else if (ev.deltaX < -150) {
            card.nativeElement.style.transform = `translateX(-${+this.platform.width() * 2}px) rotate(${ev.deltaX / 2}deg)`;
            this.addToBlackList(this.candidates[i]._id);
          }
          else {
            card.nativeElement.style.transform = ``;
            // console.log('la fin diyal action ');
          }
        }
      }, true);
      gesture.enable(true);
    }
  }

  valueChanges(value) {
    this.advertisementId = value;
    this.getCandidate();
    this.annonceFind = true;
  }

  resteView() {
    this.advertisementId = null;
    this.getCandidate();
    this.annonceFind = false;
  }

  getCandidate() {
    this.matchingService.getPlug(this.advertisementId).subscribe(candidate => {
      this.candidates = candidate;
      if (this.candidates) {
        if (this.candidates.length <= 0 && this.annonceFind) {
          this.presentAlert();
          this.annonceFind = false;
        }
        this.candidates = this.candidates.map(element => {
          const trainings = element.candidate.trainings.map(x => ({
            typeOfTraining: this.getRepertoire(x, 'typeOfTraining'),
            year: x.yearOfGraduation
          }));
          const languages = element.candidate.languages.map(x => ({
            language: this.getRepertoire(x, 'language'),
            languageLevel: this.getRepertoire(x, 'languageLevel')
          }));
          const values = element.candidate.values.map(x => this.getRepertoire(x, 'value'));
          const skills = element.candidate.skills.map(x => this.getRepertoire(x, 'skill'));
          return {
            fullName: `${element.candidate.user.firstName} ${element.candidate.user.lastName}`,
            goal: element.candidate.goal,
            currentJob: element.candidate.currentJob,
            searchedPost: element.candidate.searchedPost,
            salary: `${element.candidate.supposedSalaryMax} MAD`,
            location: this.getRepertoire(element.candidate, 'locations'),
            experienceYears: `${this.getRepertoire(element.candidate, 'experienceYears')} D'experience`,
            experiences: element.candidate.experiences,
            trainings,
            languages,
            values,
            skills,
            webSite: element.candidate.webSite,
            blog: element.candidate.blog,
            instagram: element.candidate.instagram,
            linkedin: element.candidate.linkedin,
            twitter: element.candidate.twitter,
            facebook: element.candidate.facebook,
            picture: element.candidate.user.picture,
            video: element.candidate.video,
            cv: element.candidate.cv,
            _id: element.candidate._id
          };
        });
      }
    });
  }

  /**
   * add to black list
   */
  addToBlackList(candidateId) {
    this.matchingService.addToBlackList({ candidate: candidateId, advertisement: this.advertisementId }).subscribe((response: Response) => {
      this.getCandidate();
      this.refreshCandidate(candidateId);
    });
  }

  /**
   * add new iwn
   */
  addWin(candidateId) {
    this.matchingService.createWin({ candidate: candidateId, advertisement: this.advertisementId }).subscribe((response) => {
      // this.toastService.success(this.transService.translate(response.message));
      this.toastService.success('Vous avez bien matché');
      this.refreshCandidate(candidateId);
    });
  }

  /**
   * refresh candidate
   */
  private refreshCandidate(candidateId) {
    const index = this.candidates.findIndex(x => x._id === candidateId);
    if (index !== -1) {
      this.candidates.splice(index, 1);
      if (this.candidates.length === 1) {
        this.getCandidate();
      }
    }
  }

  /**
   * get repertoires
   * @param key
   */
  private getRepertoire(candidate, key: string) {
    let val;
    switch (key) {
      case 'contract':
        val = this.globalService.contracts.find(x => x._id === candidate[key]);
        break;
      case 'value':
        val = this.globalService.values.find(x => x._id === candidate);
        break;
      case 'jobType':
        val = this.globalService.jobTypes.find(x => x._id === candidate[key]);
        break;
      case 'jobMode':
        val = this.globalService.jobModes.find(x => x._id === candidate[key]);
        break;
      case 'managerialLevel':
        val = this.globalService.managerialLevels.find(x => x._id === candidate[key]);
        break;
      case 'effective':
        val = this.globalService.effectives.find(x => x._id === candidate[key]);
        break;
      case 'experienceYears':
        val = this.globalService.experiences.find(x => x._id === candidate[key]);
        break;
      case 'locations':
        val = this.globalService.locations.find(x => x._id === candidate[key][0]);
        break;
      case 'typeOfTraining':
        val = this.globalService.typeOfTrainings.find(x => x._id === candidate[key]);
        break;
      case 'language':
        val = this.globalService.languages.find(x => x._id === candidate[key]);
        break;
      case 'languageLevel':
        val = this.globalService.languagesLevels.find(x => x._id === candidate[key]);
        break;
      case 'skill':
        val = this.globalService.softSkills.find(x => x._id === candidate);
        break;
    }
    if (val) {
      return val.name;
    }
  }

}
