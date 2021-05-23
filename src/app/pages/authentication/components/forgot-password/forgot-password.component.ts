import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/global/auth.service';
import { Redirection } from 'src/app/core/utils';
import { ToastService } from 'src/app/core/services/addapters/toast.service';
import { Response } from 'src/app/core/models/interfaces';
import { TransService } from 'src/app/core/services/addapters/trans.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {

  form: FormGroup;

  constructor(private authService: AuthService, private toastService: ToastService, private transService: TransService) {
    this.initForm();
  }

  ngOnInit() { }

  /**
   * init forgot password form
   */
  private initForm(): void {
    this.form = new FormGroup({
      email: new FormControl(null, Validators.compose([Validators.required, Validators.email]))
    });
  }

  /**
   * forgot your password
   */
  onSave(): void {
    this.authService.forgotPassword(this.form.value).subscribe((response: Response) => {
      this.authService.fromPage = 'forgot-password';
      this.authService.verificationEmail = this.form.get('email').value;
      this.toastService.success(this.transService.translate(response.message));
      Redirection.verification();
    });
  }

}
