import { Injectable } from '@angular/core';
import { SignIn, Auth, Response } from '../../models/interfaces';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { ApiService } from './api.service';
import { Candidate, Manager, Recruiter, User } from '../../models/classes';
import { map, tap, catchError, distinctUntilChanged } from 'rxjs/operators';
import { JsonWebToken, Redirection } from '../../utils';
import { CandidateService } from '../crud/candidate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User | Candidate | Recruiter | Manager;
  isLoged = new BehaviorSubject(false);
  verificationEmail: string;
  verificationCode: string;
  signUpPassword: string;
  fromPage: string;
  permissionsSubject = new BehaviorSubject<any>({});
  permissions = this.permissionsSubject.asObservable().pipe(distinctUntilChanged());

  constructor(private apiService: ApiService, private candidateService: CandidateService) { }

  /**
   * change current user value
   * @param values
   */
  setUser(values): void {
    this.user = new User(values);
    this.candidateService.setPercentage(this.user.percentage ? this.user.percentage : 0);
  }

  /**
   * login
   * @param credentials
   */
  signIn(credentials: SignIn): Observable<Auth> {
    return this.apiService.post('account-ms/auth/sign-in', credentials).pipe(map((auth: Auth) => {
      this.user = auth.user;
      if (auth.user.userRole === 'Candidate') {
        this.candidateService.candidate = auth.user as Candidate;
      } 
      this.isLoged.next(true);
      this.permissionsSubject.next(this.user.role.rights);
      JsonWebToken.setCredentials(auth.token, auth.refreshToken);
      return auth;
    }));
  }

  /**
   * sign up
   * @param value
   */
  signUp(value): Observable<Response> {
    return this.apiService.post('account-ms/auth/sign-up', value);
  }

  /**
   * forgot password
   * @param value
   */
  forgotPassword(value): Observable<Response> {
    return this.apiService.post('account-ms/auth/forgot-password', value);
  }

  /**
   * forgot password
   * @param password 
   */
  resetPassword(password: string): Observable<Response> {
    return this.apiService.post('account-ms/auth/reset-password', {
      email: this.verificationEmail,
      verificationCode: this.verificationCode,
      password
    });
  }

  /**
   * forgot password
   * @param password
   * @param token
   */
  verification(value): Observable<Response> {
    return this.apiService.post('account-ms/auth/verification', value);
  }

  /**
   * forgot password
   * @param password
   * @param token
   */
  verifyCode(value): Observable<Response> {
    return this.apiService.post('account-ms/auth/verify-code', value);
  }

  /**
   * check if authorized and get user info
   */
  isLoggedIn(): any {
    return this.apiService.get('account-ms/auth/is-authorized').pipe(
      tap((user: User) => {
        console.log('From Service : ', user)
        this.setUser(user);
        this.permissionsSubject.next(user.role.rights);
        this.isLoged.next(true);
      }),
      catchError(err => {
        this.isLoged.next(false);
        return throwError(false);
      })
    );
  }

  /**
   *  update profile infos
   * @param values
   */
  updateProfile(values) {
    return this.apiService.put('account-ms/auth/change-password', values).pipe(tap(x => {
      this.user.email = values.email;
    }));
  }

  /**
   * update identity
   * @param values
   */
  updateIdentity(values) {
    return this.apiService.put('account-ms/auth/identity', values).pipe(tap(x => {
      this.user.firstName = values.firstName;
      this.user.lastName = values.lastName;
      this.user = Object.assign(this.user, {
        firstPhoneNumber: values.firstPhoneNumber,
        secondPhoneNumber: values.secondPhoneNumber
      });
    }));
  }

  /**
   * logout
   */
  logout() {
    JsonWebToken.destroyToken();
    this.candidateService.clearCandidate();
    this.isLoged.next(false);
    Redirection.login();
  }

}
