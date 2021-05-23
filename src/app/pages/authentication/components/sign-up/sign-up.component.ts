import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatchPassword } from 'src/app/core/models/interfaces';
import { AuthService } from 'src/app/core/services/global/auth.service';
import { Redirection } from 'src/app/core/utils';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.initForm();
  }

  ngOnInit() { }

  /**
   * init sign up form
   */
  private initForm(): void {
    this.form = this.fb.group({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.compose([Validators.email, Validators.required])),
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
   * on save
   */
  onSave() {
    const value = this.form.value;
    let getLocalEmail = localStorage.getItem('email');
    if (getLocalEmail === value.email) {
      Redirection.verification();
    } else {
      this.authService.signUp(value).subscribe(res => {
        console.log(res);
        this.authService.fromPage = 'sign-up';
        this.authService.verificationEmail = value.email;
        this.authService.signUpPassword = value.password;
        localStorage.setItem('email', value.email);
        Redirection.verification();
      });
    }
  }

}
