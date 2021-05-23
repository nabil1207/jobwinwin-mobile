import { Component, OnInit, NgZone } from '@angular/core';
import { ActionSheetController, LoadingController } from '@ionic/angular';
import { ToastService } from 'src/app/core/services/addapters/toast.service';
import { FileService } from 'src/app/core/services/crud/file.service';
import { CandidateService } from 'src/app/core/services/crud/candidate.service';
import { TransService } from 'src/app/core/services/addapters/trans.service';
import { PictureUtilsService } from 'src/app/core/services/global/picture-utils.service';
import { AuthService } from 'src/app/core/services/global/auth.service';
import { Redirection, Helper } from 'src/app/core/utils';

@Component({
  selector: 'app-add-profil',
  templateUrl: './add-profil.component.html',
  styleUrls: ['./add-profil.component.scss'],
})
export class AddProfilComponent implements OnInit {

  hasChanged = false;
  userPicture;
  oldPercentage = 0;

  constructor(public authService: AuthService, private actionSheetController: ActionSheetController, private loadingController: LoadingController,
              private pictureUtilsService: PictureUtilsService, private zone: NgZone, private toastService: ToastService,
              private fileService: FileService, public candidateService: CandidateService, private trans: TransService) { }

  ngOnInit() {
    const value = { picture: this.authService.user.picture };
    this.oldPercentage = Helper.calculePercentage(value, 0, 1.96);
  }

  /**
   * add image
   */
  async addImageAction() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Image',
      // cssClass: 'my-actionSheet',
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
                    this.candidateService.candidate['picture'] = res.file;
                    this.authService.user.picture = res.file;
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
                    this.candidateService.candidate['picture'] = res.file;
                    this.authService.user.picture = res.file;
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

  /**
   * save picture
   */
  onSave() {
    let value = { picture: this.authService.user.picture };
    let percentage = Helper.calculePercentage(value, (this.authService.user.percentage ? Number(this.authService.user.percentage) : 0) - Number(this.oldPercentage), 1.96);
    console.log('New percent : ', percentage);
    this.candidateService.changeInfos(Object.assign(value, {
      percentage: (Math.round(percentage * 100) / 100).toFixed(2),
      currentStep: 2
    })).subscribe(res => {
      console.log(res);
      this.candidateService.candidate = res;
      this.authService.user = res;
      this.candidateService.setPercentage(this.candidateService.candidate.percentage);
      Redirection.jobInfo();
    });
    // if (this.authService.user.picture) {
    //   let value = { picture: this.authService.user.picture };
    //   let percentage = Helper.calculePercentage(value, (this.authService.user.percentage ? Number(this.authService.user.percentage) : 0) - Number(this.oldPercentage), 1.96);
    //   console.log('New percent : ', percentage);
    //   this.candidateService.changeInfos(Object.assign(value, {
    //     percentage: (Math.round(percentage * 100) / 100).toFixed(2),
    //     currentStep: 2
    //   })).subscribe(res => {
    //     console.log(res);
    //     this.candidateService.candidate = res;
    //     this.authService.user = res;
    //     this.candidateService.setPercentage(this.candidateService.candidate.percentage);
    //     Redirection.jobInfo();
    //   });
    // } else {
    //   Redirection.jobInfo();
    // }
  }

}
