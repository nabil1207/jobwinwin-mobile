import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { ActionSheetController, LoadingController, ModalController } from '@ionic/angular';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/core/services/global/auth.service';
import { Response } from 'src/app/core/models/interfaces';
import { ToastService } from 'src/app/core/services/addapters/toast.service';
import { TransService } from 'src/app/core/services/addapters/trans.service';
import { RecruiterService } from 'src/app/core/services/crud/recruiter.service';
import { Subscription } from 'rxjs';
import { Recruiter } from 'src/app/core/models/classes';
import { PictureUtilsService } from 'src/app/core/services/global/picture-utils.service';
import { FileService } from 'src/app/core/services/crud/file.service';

@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.scss']
})
export class IdentityComponent implements OnInit, OnDestroy {

  formCandidate: FormGroup;
  formRecruiter: FormGroup;
  hasChanged = false;
  subscription: Subscription;
  value = { file: null, type: 'photo' };

  constructor(public modalController: ModalController, public authService: AuthService,
    private toastService: ToastService, private transService: TransService, public recruiterService: RecruiterService,
    private actionSheetController: ActionSheetController, private loadingController: LoadingController,
    private pictureUtilsService: PictureUtilsService, private zone: NgZone, private fileService: FileService) {
    this.initForm();
  }

  ngOnInit(): void {
    this.subscription = this.recruiterService.recruiter.subscribe((recruiter: Recruiter) => {
      console.log(this.authService.user);
      if (recruiter) {
        console.log(recruiter.getValues());
        this.value = { file: recruiter.picture ? recruiter.picture : null, type: 'edit-image' };
      }
    });
  }

  async addImageAction() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Image',
      cssClass: 'my-actionSheet',
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
                    this.authService.user.picture = res.file;
                    this.recruiterService.updatePicture({
                      picture: res.file
                    }).subscribe(response => {
                      this.authService.user.picture = res.file;
                      this.toastService.success(this.transService.translate('picture_updated'));
                    });
                  });
                });
                syncing = false;
                loading.dismiss();
              },
              error => {
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
                    this.recruiterService.updatePicture({
                      picture: res.file
                    }).subscribe(response => {
                      this.authService.user.picture = res.file;
                      this.toastService.success(this.transService.translate('picture_updated'));
                    });
                  });
                });
                syncing = false;
                loading.dismiss();
              },
              error => {
                alert(error);
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

  ionViewDidEnter(): void {
  }

  /**
   * init form
   */
  private initForm() {
    if (this.authService.user.role.name === 'recruiter' || this.authService.user.role.name === 'Responsable délégué' || this.authService.user.role.name === 'Responsable principale') {
      this.formRecruiter = new FormGroup({
        firstName: new FormControl(this.authService.user.firstName, Validators.required),
        lastName: new FormControl(this.authService.user.lastName, Validators.required),
        firstPhoneNumber: new FormControl(this.authService.user['firstPhoneNumber']),
        secondPhoneNumber: new FormControl(this.authService.user['secondPhoneNumber'])
      });
    } else if (this.authService.user.role.name === 'candidate') {
      this.formCandidate = new FormGroup({
        firstName: new FormControl(this.authService.user.firstName, Validators.required),
        lastName: new FormControl(this.authService.user.lastName, Validators.required),
        email: new FormControl(this.authService.user.email),
        gender: new FormControl(this.authService.user['gender'], Validators.required),
        phoneNumber: new FormControl(this.authService.user.phoneNumber, Validators.required),
      });
    }
  }

  /**
   * on save
   */
  onSave() {
    if (this.authService.user.role.name === 'candidate') {
      console.log(this.formCandidate.value);
      this.authService.updateIdentity(this.formCandidate.value).subscribe((response: Response) => {
        this.authService.user = Object.assign(this.authService.user, this.formCandidate.value);
        this.authService.user = Object.assign(this.authService.user, this.formCandidate.value);
        this.toastService.success(this.transService.translate(response.message));
        this.modalController.dismiss();
      });
    }
    else {
      console.log(this.formRecruiter.value);
      this.authService.updateIdentity(this.formRecruiter.value).subscribe((response: Response) => {
        this.toastService.success(this.transService.translate(response.message));
        this.modalController.dismiss();
      });
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
