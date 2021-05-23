import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SignInComponent, SignUpComponent, ForgotPasswordComponent,
  ResetPasswordComponent, VerificationComponent, AccountTypeComponent
} from './components';
import { AuthenticationRoutingModule } from './Authentication-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecruiterComponent } from './components/recruiter/recruiter.component';
import { CongratulationComponent } from './components/congratulation/congratulation.component';

@NgModule({
  declarations: [
    SignInComponent, SignUpComponent, ForgotPasswordComponent, ResetPasswordComponent,
    VerificationComponent, AccountTypeComponent, RecruiterComponent, CongratulationComponent
  ],
  imports: [
    SharedModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
