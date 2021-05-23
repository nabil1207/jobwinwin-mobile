import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Response } from 'src/app/core/models/interfaces';
import { AuthService } from 'src/app/core/services/global/auth.service';
import { ToastService } from 'src/app/core/services/addapters/toast.service';
import { TransService } from 'src/app/core/services/addapters/trans.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  form: FormGroup;

  constructor(public modalController: ModalController, private fb: FormBuilder,
    private authService: AuthService, private toastService: ToastService, private transService: TransService) {
    this.initForm();
  }

  ionViewDidEnter(): void {
  }

  /**
   * init Form
   */
  private initForm(): void {
    this.form = this.fb.group({
      email: new FormControl(this.authService.user.email, Validators.compose([Validators.required, Validators.email])),
      currentPassword: new FormControl(null, Validators.compose([Validators.required, Validators.minLength(5)])),
      newPassword: new FormControl(null, Validators.compose([Validators.required, Validators.minLength(5)])),
      confirmPassword: new FormControl(null, Validators.compose([Validators.required, Validators.minLength(5)])),
    }, { validator: this.checkPasswords });
  }

  /**
   * check match passwords
   * @param group
   */
  checkPasswords(group: FormGroup) {
    return group.controls.newPassword.value === group.controls.confirmPassword.value ? null : { passwordsDoNotMatch: true };
  }

  /**
   * update profile infos
   */
  onSave() {
    let value = this.form.value;
    delete value['confirmPassword'];
    this.authService.updateProfile(value).subscribe((response: Response) => {
      console.log(response.message);
      this.toastService.success(this.transService.translate(response.message));
      this.modalController.dismiss();
    });
  }

}
