import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/global/auth.service';
import { Redirection } from 'src/app/core/utils';
import { Response } from 'src/app/core/models/interfaces';
import { ToastService } from 'src/app/core/services/addapters/toast.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss'],
})
export class VerificationComponent implements OnInit {

  form: FormGroup;
  sendTimer = false;

  constructor(public authService: AuthService, private toastService: ToastService) {
    this.initForm();
  }

  ngOnInit() {
    setTimeout(() => {
      this.sendTimer = true;
    }, 120000);
  }

  /**
   * init verification form
   */
  private initForm(): void {
    this.form = new FormGroup({
      one: new FormControl(null, Validators.required),
      two: new FormControl(null, Validators.required),
      three: new FormControl(null, Validators.required),
      four: new FormControl(null, Validators.required)
    });
  }

  moveFocus(event, nextElement) {
    if (event.code !== 'Backspace' && event.code !== 'Space' && event.code !== 'CapsLock' && event.code !== 'ShiftLeft'
      && event.code !== 'ShiftRight' && event.keyCode !== 16 && event.keyCode !== 8)
      nextElement.focus();
  }

  resendCode() {
    if (this.authService.verificationEmail) {
      this.authService.forgotPassword({ email: this.authService.verificationEmail }).subscribe((response: Response) => {
        this.toastService.success('Le code a été bien renvoyé');
        this.sendTimer = false;
        setTimeout(() => {
          this.sendTimer = true;
        }, 120000);
      });
    }
  }

  /**
   * on save
   */
  onSave(): void {
    let verificationCode = '';
    Object.keys(this.form.value).forEach(key => {
      verificationCode += this.form.get(key).value.toLowerCase();
    });
    if (this.authService.fromPage === 'sign-up') {
      this.authService.verification({ verificationCode, email: this.authService.verificationEmail }).subscribe(res => {
        Redirection.congratulation();
      });
    } else {
      this.authService.verification({ verificationCode, email: this.authService.verificationEmail }).subscribe(res => {
        this.authService.verificationCode = verificationCode;
        Redirection.resetPassword();
      });
    }
    localStorage.removeItem('email');
  }

}
