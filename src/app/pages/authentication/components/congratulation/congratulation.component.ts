import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/global/auth.service';
import { Auth } from 'src/app/core/models/interfaces';
import { Redirection } from 'src/app/core/utils';
import { CandidateService } from 'src/app/core/services/crud/candidate.service';

@Component({
  selector: 'app-congratulation',
  templateUrl: './congratulation.component.html',
  styleUrls: ['./congratulation.component.scss']
})
export class CongratulationComponent implements OnInit {

  constructor(public authService: AuthService, private candidateService: CandidateService) { }

  ngOnInit(): void {
  }

  /**
   * on save
   */
  goTo(): void {
    if (this.authService.fromPage === 'sign-up') {
      const value = { email: this.authService.verificationEmail, password: this.authService.signUpPassword }
      this.authService.signIn(value).subscribe((response: Auth) => {
        if (response.user.userRole === 'Candidate') {
          if (!response.user || Object.keys(response.user).length === 0 || response.user.currentStep <= 8) {
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
      });
    }
    else {
      Redirection.login();
    }
  }

}
