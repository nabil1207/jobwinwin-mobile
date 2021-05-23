import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, QueryList, ViewChildren, AfterViewChecked } from '@angular/core';
import { MatchingService } from 'src/app/core/services/crud/matching.service';
import { GlobalService } from 'src/app/core/services/global/global.service';
import { Response } from 'src/app/core/models/interfaces';
import { ToastService } from 'src/app/core/services/addapters/toast.service';
import { TransService } from 'src/app/core/services/addapters/trans.service';
import { AuthService } from 'src/app/core/services/global/auth.service';
import { Gesture, GestureController, Platform, PopoverController } from '@ionic/angular';
import { NotificationService } from 'src/app/core/services/global/notification.service';
import { NotificationsComponent } from 'src/app/pages/notifications/notifications.component';

@Component({
  selector: 'app-files-condidate',
  templateUrl: './files-condidate.component.html',
  styleUrls: ['./files-condidate.component.scss']
})
export class FilesCondidateComponent implements OnInit, AfterViewChecked {

  advertisements;
  @ViewChildren('matchingCard') matchingCard: QueryList<ElementRef>;
  longPressActive = false;

  constructor(private matchingService: MatchingService, private globalService: GlobalService, public notifService: NotificationService, public NotificationController: PopoverController,
              private toastService: ToastService, private transService: TransService, private gestureCtrl: GestureController, private platform: Platform) {
  }

  ngOnInit() {
    this.getAdvertisement();
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
      console.log(res);
      this.notifService.countNotif = res['count'];
    });
    return await notif.present();
  }

  ngAfterViewChecked(): void {
    const cardArray = this.matchingCard.toArray();
    this.swipe(cardArray);
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
            this.addWin(this.advertisements[i]._id, this.advertisements[i].recruiter);
          } else if (ev.deltaX < -150) {
            card.nativeElement.style.transform = `translateX(-${+this.platform.width() * 2}px) rotate(${ev.deltaX / 2}deg)`;
            this.addToBlackList(this.advertisements[i]._id, this.advertisements[i].recruiter);
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

  /**
   * refresh candidate
   */
  private refreshAdvertisement(advertisementId) {
    const index = this.advertisements.findIndex(x => x._id === advertisementId);
    if (index !== -1) {
      this.advertisements.splice(index, 1);
      if (this.advertisements.length === 0) {
        this.getAdvertisement();
      }
    }
  }

  /**
   * get Advertisement
   */
  getAdvertisement() {
    this.matchingService.getPlug().subscribe(advertisement => {
      this.advertisements = advertisement;
      if (this.advertisements) {
        this.advertisements = this.advertisements.map(element => {
          const activitySector = this.globalService.activitySectors.find(x => x._id === element.advertisement.company.activitySector);
          if (element.advertisement.languages) {
            element.advertisement.languages = element.advertisement.languages.map(x => {
              const langIndex = this.globalService.languages.findIndex(val => val._id === x.language);
              const langLevelIndex = this.globalService.languagesLevels.findIndex(val => val._id === x.languageLevel);
              return {
                language: langIndex !== -1 ? this.globalService.languages[langIndex].name : null,
                languageLevel: langLevelIndex !== -1 ? this.globalService.languagesLevels[langLevelIndex].name : null
              };
            });
          }

          if (element.advertisement.programingLanguages) {
            element.advertisement.programingLanguages.language = element.advertisement.programingLanguages.language.map(lg => {
              const language = this.globalService.programmingLanguages.find(x => x._id === lg);
              return language ? language.name : null;
            });
            element.advertisement.programingLanguages.logiciel = element.advertisement.programingLanguages.logiciel.map(lg => {
              const logiciel = this.globalService.logiciels.find(x => x._id === lg);
              return logiciel ? logiciel.name : null;
            });
          }

          return {
            logo: element.advertisement.company.logo.name,
            companyName: element.advertisement.company.name,
            companyTitle: element.advertisement.company.title,
            companyDescription: element.advertisement.company.description,
            companyValues: element.advertisement.company.values,
            companyWebSite: element.advertisement.company.webSite,
            companyLinkedin: element.advertisement.company.linkedin,
            companyFacebook: element.advertisement.company.facebook,
            companyInstagram: element.advertisement.company.instagram,
            companyTwitter: element.advertisement.company.twitter,
            desiredJob: element.advertisement.desiredJob,
            experienceYears: this.getRepertoire(element.advertisement, 'experienceYears'),
            location: this.getRepertoire(element.advertisement, 'location'),
            contract: this.getRepertoire(element.advertisement, 'contract'),
            jobType: this.getRepertoire(element.advertisement, 'jobType'),
            jobMode: this.getRepertoire(element.advertisement, 'jobMode'),
            managerialLevel: this.getRepertoire(element.advertisement, 'managerialLevel'),
            effective: this.getRepertoire(element.advertisement, 'effective'),
            activitySector: activitySector ? activitySector.name : '',
            salary: `${element.advertisement.supposedSalaryMax} MAD`,
            prerequisite: element.advertisement.prerequisite,
            missions: element.advertisement.missions,
            descriptions : element.advertisement.descriptions,
            startedDate: element.advertisement.startedDate,
            programingLanguages: element.advertisement.programingLanguages,
            languages: element.advertisement.languages,
            recruiter: element.advertisement.recruiter,
            _id: element.advertisement._id
          };
        });
      }
    });
  }

  /**
   * add to black list
   */
  addToBlackList(advertisementId, recruiter) {
    this.matchingService.addToBlackList({
      advertisement: advertisementId,
      recruiter
    }).subscribe((response: Response) => {
      this.getAdvertisement();
      this.refreshAdvertisement(advertisementId);
    })
  }

  /**
   * add new iwn
   */
  addWin(advertisementId, recruiter) {
    this.matchingService.createWin({
      advertisement: advertisementId,
      recruiter
    }).subscribe((response: Response) => {
      // this.toastService.success(this.transService.translate(response.message));
      console.log(response.message);
      this.toastService.success('Vous avez bien matché');
      this.refreshAdvertisement(advertisementId);
    });
  }

  /**
   * get repertoires
   * @param key
   */
  private getRepertoire(advertisement, key: string) {
    let val;
    switch (key) {
      case 'contract':
        val = this.globalService.contracts.find(x => x._id === advertisement[key]);
        break;
      case 'jobType':
        val = this.globalService.jobTypes.find(x => x._id === advertisement[key]);
        break;
      case 'jobMode':
        val = this.globalService.jobModes.find(x => x._id === advertisement[key]);
        break;
      case 'managerialLevel':
        val = this.globalService.managerialLevels.find(x => x._id === advertisement[key]);
        break;
      case 'effective':
        val = this.globalService.effectives.find(x => x._id === advertisement[key]);
        break;
      case 'experienceYears':
        val = this.globalService.experiences.find(x => x._id === advertisement[key]);
        break;
      case 'location':
        val = this.globalService.locations.find(x => x._id === advertisement[key]);
        break;
    }
    if (val) {
      return val.name;
    }
  }

}
