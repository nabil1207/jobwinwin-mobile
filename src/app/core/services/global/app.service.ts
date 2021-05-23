import { Injectable, Injector } from '@angular/core';
import { AuthService } from './auth.service';
import { Redirection } from '../../utils';
import { CandidateService } from '../crud/candidate.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(public injector: Injector) { }

  initializeApp(): Promise<any> {
    return new Promise(((resolve, reject) => {
      const authService = this.injector.get(AuthService);
      const candidateService = this.injector.get(CandidateService);
      authService.isLoggedIn()
        .toPromise()
        .then(res => {
          console.log(res);
          authService.user = res;
          if (res.userRole === 'Candidate') {
            candidateService.candidate = res;
            if (!res.completed) {
              Redirection.profileByStep(res.currentStep);
            }
          }
          resolve();
        })
        .catch(err => {
          resolve();
        })
    }))
  }

}
