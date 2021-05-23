import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatchPassword } from 'src/app/core/models/interfaces';
import { ToastService } from 'src/app/core/services/addapters/toast.service';
import { TransService } from 'src/app/core/services/addapters/trans.service';
import { AuthService } from 'src/app/core/services/global/auth.service';
import { Redirection } from 'src/app/core/utils';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private toastService: ToastService, private transService: TransService) {
    this.initForm();
  }

  ngOnInit() { }

  /**
   * init form
   */
  private initForm(): void {
    this.form = this.fb.group({
      password: new FormControl(null, Validators.compose([Validators.required, Validators.minLength(5)])),
      confirmPassword: new FormControl(null, Validators.compose([Validators.required, Validators.minLength(5)])),
    }, { validator: this.checkPasswords });
  }

  /**
   * check match passwords
   * @param group
   */
  checkPasswords(group: FormGroup): MatchPassword {
    return group.controls.password.value === group.controls.confirmPassword.value ? null : { passwordsDoNotMatch: true };
  }

  /**
   * reset password
   */
  onSave(): void {
    this.authService.resetPassword(this.form.get('password').value).subscribe(res => {
      this.toastService.success(this.transService.translate(res.message));
      Redirection.login();
    })
  }

}
