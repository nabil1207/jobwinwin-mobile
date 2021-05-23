import { Component, OnInit, NgZone } from '@angular/core';
import { ModalController, ActionSheetController, LoadingController } from '@ionic/angular';
import { CvCondidateComponent } from '../update/cv-condidate/cv-condidate.component';
import { ExperienceCondidateComponent } from '../update/experience-condidate/experience-condidate.component';
import { FormationCondidateComponent } from '../update/formation-condidate/formation-condidate.component';
import { LangueCondidateComponent } from '../update/langue-condidate/langue-condidate.component';
import { LinksCondidateComponent } from '../update/links-condidate/links-condidate.component';
import { ObjectifCondidateComponent } from '../update/objectif-condidate/objectif-condidate.component';
import { ProfilCondidateComponent } from '../update/profil-condidate/profil-condidate.component';
import { SkilsCondidateComponent } from '../update/skils-condidate/skils-condidate.component';
import { VideoCondidateComponent } from '../update/video-condidate/video-condidate.component';
import { AuthService } from 'src/app/core/services/global/auth.service';
import { GlobalService } from 'src/app/core/services/global/global.service';
import { PictureUtilsService } from 'src/app/core/services/global/picture-utils.service';
import { ToastService } from 'src/app/core/services/addapters/toast.service';
import { FileService } from 'src/app/core/services/crud/file.service';
import { CandidateService } from 'src/app/core/services/crud/candidate.service';
import { TransService } from 'src/app/core/services/addapters/trans.service';
import { Helper, Redirection } from 'src/app/core/utils';


@Component({
  selector: 'app-card-condidate',
  templateUrl: './card-condidate.component.html',
  styleUrls: ['./card-condidate.component.scss']
})
export class CardCondidateComponent implements OnInit {

  location: string;
  languages = [];
  objectifLocation: string;
  hasChanged = false;
  disabled = true;
  values = [];
  softSkills = [];
  oldPercentage = 0;

  constructor(public modalController: ModalController, public authService: AuthService,
    private globalService: GlobalService, private actionSheetController: ActionSheetController,
    private loadingController: LoadingController, private pictureUtilsService: PictureUtilsService,
    private zone: NgZone, private toastService: ToastService, private fileService: FileService,
    public candidateService: CandidateService, private trans: TransService) { }

  ngOnInit(): void {
    this.getLanguageCandidate();
    console.log(this.authService.user);
    this.candidateService.setPercentage(this.candidateService.candidate.percentage);
    const value = { picture: this.authService.user.picture };
    this.oldPercentage = Helper.calculePercentage(value, 0, 1.96);
  }

  getLanguageCandidate() {
    this.languages = this.authService.user['languages'].map(lang => {
      const languageIndex = this.globalService.languages.findIndex(x => x._id === lang.language);
      const languageLevelIndex = this.globalService.languagesLevels.findIndex(x => x._id === lang.languageLevel);
      return {
        language: this.globalService.languages[languageIndex],
        languageLevel: this.globalService.languagesLevels[languageLevelIndex]
      };
    });
  }

  ionViewDidEnter(): void {
    const index = this.globalService.locations.findIndex(x => x._id === this.authService.user['location']);
    const objectifLocationIndex = this.globalService.locations.findIndex(x => x._id === this.authService.user['locations'][0]);
    if (index !== -1) {
      this.location = this.globalService.locations[index].name;
    }
    if (objectifLocationIndex !== -1) {
      this.objectifLocation = this.globalService.locations[objectifLocationIndex].name;
    }
    this.candidateService.changes.subscribe(res => {
      this.getLanguageCandidate();
      const index = this.globalService.locations.findIndex(x => x._id === this.authService.user['location']);
      const objectifLocationIndex = this.globalService.locations.findIndex(x => x._id === this.authService.user['locations'][0]);
      if (index !== -1) {
        this.location = this.globalService.locations[index].name;
      }
      if (objectifLocationIndex !== -1) {
        this.objectifLocation = this.globalService.locations[objectifLocationIndex].name;
      }
    });
    console.log(this.authService.user['values']);
  }

  /**
   * add image
   */
  async addImageAction() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Image',
      buttons: [
        {
          text: 'Camera',
          icon: 'camera',
          handler: async () => {
            let syncing = true;
            setTimeout(() => {
              if (syncing) {
                syncing = false;
                loading.dismiss();
                this.toastService.error('Connection error');
                return;
              }
            }, 30000);
            const loading = await this.loadingController.create({});
            await loading.present();
            this.pictureUtilsService.uploadFromCamera().then(
              ({ imageData }) => {
                this.zone.run(() => {
                  this.hasChanged = true;
                  this.fileService.create(imageData, true).subscribe(res => {
                    if (!this.authService.user['picture']) {
                      let value = { picture: res.file };
                      let per = Helper.calculePercentage(value, (this.authService.user.percentage ? Number(this.authService.user.percentage) : 0) - Number(this.oldPercentage), 1.96);
                      value = Object.assign(value, {
                        percentage: (Math.round(per * 100) / 100).toFixed(2)
                      });
                      this.candidateService.updatePicture(value).subscribe(response => {
                        console.log(response);
                        this.candidateService.candidate['picture'] = response['picture'];
                        this.candidateService.candidate.percentage = Math.round(per);
                        this.candidateService.setPercentage(this.candidateService.candidate.percentage);
                        this.authService.user['picture'] = response['picture'];
                        this.candidateService.setChanges(true);
                        this.toastService.success('Modifier avec success');

                      });
                      console.log('makaynach');
                    } else {
                      console.log('kayna');
                      this.candidateService.updatePicture({ picture: res.file }).subscribe(response => {
                        this.authService.user['picture'] = response['picture'];
                        this.candidateService.candidate['picture'] = response['picture'];
                        this.candidateService.setChanges(true);
                        this.toastService.success('Modifier avec success');
                      });
                    }
                  });
                });
                syncing = false;
                loading.dismiss();
              },
              _error => {
                syncing = false;
                loading.dismiss();
              }
            );
            return syncing;
          }
        },
        {
          text: 'Gallery',
          icon: 'image',
          handler: async () => {
            let syncing = true;
            setTimeout(() => {
              if (syncing) {
                syncing = false;
                loading.dismiss();
                this.toastService.error('Connection error');
                return;
              }
            }, 30000);
            const loading = await this.loadingController.create({});
            await loading.present();
            this.pictureUtilsService.uploadFromGallery().then(
              ({ imageData }) => {
                this.zone.run(() => {
                  this.hasChanged = true;
                  this.fileService.create(imageData, true).subscribe(res => {
                    if (!this.authService.user['picture']) {
                      let value = { picture: res.file };
                      let per = Helper.calculePercentage(value, (this.authService.user.percentage ? Number(this.authService.user.percentage) : 0) - Number(this.oldPercentage), 1.96);
                      value = Object.assign(value, {
                        percentage: (Math.round(per * 100) / 100).toFixed(2)
                      });
                      console.log(value);
                      this.candidateService.updatePicture(value).subscribe(response => {
                        this.candidateService.candidate['picture'] = response['picture'];
                        this.candidateService.candidate.percentage = Math.round(per);
                        this.candidateService.setPercentage(this.candidateService.candidate.percentage);
                        this.authService.user['picture'] = response['picture'];
                        this.candidateService.setChanges(true);
                        this.toastService.success('Modifier avec success');
                      });
                      console.log('makaynach');
                    } else {
                      console.log('kayna');
                      this.candidateService.updatePicture({ picture: res.file}).subscribe(response => {
                        console.log(response['picture']);
                        this.authService.user['picture'] = response['picture'];
                        this.candidateService.candidate['picture'] = response['picture'];
                        this.candidateService.setChanges(true);
                        this.toastService.success('Modifier avec success');
                      });
                    }
                  });
                });
                syncing = false;
                loading.dismiss();
              },
              _error => {
                alert(_error);
                syncing = false;
                loading.dismiss();
              }
            );
            return syncing;
          }
        }
      ]
    });
    await actionSheet.present();
  }

  async editProfil() {
    const modal = await this.modalController.create({
      component: ProfilCondidateComponent
    });
    return await modal.present();
  }

  async editObjectif() {
    const modal = await this.modalController.create({
      component: ObjectifCondidateComponent
    });
    return await modal.present();
  }

  async editCV() {
    const modal = await this.modalController.create({
      component: CvCondidateComponent
    });
    return await modal.present();
  }

  async editExperience() {
    const modal = await this.modalController.create({
      component: ExperienceCondidateComponent
    });
    return await modal.present();
  }

  async editFormation() {
    const modal = await this.modalController.create({
      component: FormationCondidateComponent
    });
    return await modal.present();
  }

  async editLangue() {
    const modal = await this.modalController.create({
      component: LangueCondidateComponent
    });
    return await modal.present();
  }

  async editLinks() {
    const modal = await this.modalController.create({
      component: LinksCondidateComponent
    });
    return await modal.present();
  }

  async editSkils() {
    const modal = await this.modalController.create({
      component: SkilsCondidateComponent
    });
    return await modal.present();
  }

  async editVideo() {
    const modal = await this.modalController.create({
      component: VideoCondidateComponent
    });
    return await modal.present();
  }

  /**
   * go back
   */
  goBack() {
    if (this.authService.user.role.name === 'candidate') {
      Redirection.candidateDashboard();
    } else {
      Redirection.dashboard();
    }
  }

  enableButton() {
    const softSkillsSize = this.softSkills.filter(x => (x.checked)).length;
    const valuesSize = this.values.filter(x => (x.checked)).length;
    this.disabled = softSkillsSize === 0 || valuesSize === 0;
  }

}
