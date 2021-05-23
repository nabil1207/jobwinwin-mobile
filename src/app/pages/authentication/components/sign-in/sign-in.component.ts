import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/global/auth.service';
import { Response, Auth } from 'src/app/core/models/interfaces';
import { Redirection } from 'src/app/core/utils';
import { CandidateService } from 'src/app/core/services/crud/candidate.service';
import { Candidate } from 'src/app/core/models/classes';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {

  visibility = false;

  form: FormGroup;
  code: string;

  constructor(private authService: AuthService, private candidateService: CandidateService) {
    this.initForm();
  }

  ngOnInit() { }

  /**
   * init sign in form
   */
  private initForm(): void {
    this.form = new FormGroup({
      email: new FormControl(null, Validators.compose([Validators.required, Validators.email])),
      password: new FormControl(null, Validators.compose([Validators.required, Validators.minLength(5)]))
    });
  }

  /**
   * singn in
   */
  onSave(): void {
    this.authService.signIn(this.form.value).subscribe((response: Auth) => {
      if (Object.keys(response.user).length !== 0) {
        this.candidateService.candidate = response.user as Candidate;
        if (response.user.userRole === 'Candidate') {
          if (!response.user || Object.keys(response.user).length === 0 || response.user.currentStep <= 6) {
            this.authService.isLoggedIn()
              .toPromise()
              .then(res => {
                console.log(res);
                this.candidateService.candidate = res;
                Redirection.profileByStep(res.currentStep);
              });
          } else {
            Redirection.candidateDashboard();
          }
        } else {
          Redirection.dashboard();
        }
      }
    });
  }

}
