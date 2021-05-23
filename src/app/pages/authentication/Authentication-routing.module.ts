import { CongratulationComponent } from './components/congratulation/congratulation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
    SignInComponent, SignUpComponent, ForgotPasswordComponent,
    ResetPasswordComponent, VerificationComponent, AccountTypeComponent
} from './components';
import { RecruiterComponent } from './components/recruiter/recruiter.component';

export const routes: Routes = [
    {
        path: '',
        component: SignInComponent
    },
    {
        path: 'sign-up',
        component: SignUpComponent
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent
    },
    {
        path: 'reset-password',
        component: ResetPasswordComponent
    },
    {
        path: 'verification',
        component: VerificationComponent
    },
    {
        path: 'account-type',
        component: AccountTypeComponent
    },
    {
        path: 'recruiter',
        component: RecruiterComponent
    },
    {
        path: 'congratulation',
        component: CongratulationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthenticationRoutingModule {
}
