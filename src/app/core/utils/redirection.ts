import { Router } from '@angular/router';

export class Redirection {
    static router: Router;

    /**
     * redirect to login page
     */
    static login(): void {
        Redirection.router.navigate(['/auth/sign-in']);
    }

    /**
     * redirect to verification page
     */
    static verification(): void {
        Redirection.router.navigate(['/auth/verification']);
    }

    /**
     * redirect to congratulation page
     */
    static congratulation(): void {
        Redirection.router.navigate(['/auth/congratulation']);
    }

    /**
     * redirect to reset password page
     */
    static resetPassword(): void {
        Redirection.router.navigate(['/auth/reset-password']);
    }

    /**
     * redirect to dashboard page
     */
    static dashboard(): void {
        Redirection.router.navigate(['/dashboard']);
    }

    /**
     * candidate dashboard
     */
    static candidateDashboard(): void {
        Redirection.router.navigate(['/dashboard/plug-recruiter']);
    }

    /**
     * redirect to dashboard page
     */
    static profile(): void {
        Redirection.router.navigate(['/dashboard/profile']);
    }

    /**
     * redirect to dashboard page
     */
    static addProfile(): void {
        Redirection.router.navigate(['/dashboard/profile/add-profil']);
    }

    /**
     * redirect to profile experiences page
     */
    static profileExperiences(): void {
        Redirection.router.navigate(['/dashboard/profile/experience']);
    }

    /**
     * redirect to profile video page
     */
    static profileVideo(): void {
        Redirection.router.navigate(['/dashboard/profile/upload-video']);
    }

    /**
     * redirect to info plus page
     */
    static infoPlus(): void {
        Redirection.router.navigate(['/dashboard/profile/info-plus']);
    }

    /**
     * redirect to final step page
     */
    static finalStep(): void {
        Redirection.router.navigate(['/dashboard/profile/final-steps']);
    }

    /**
     * redirect to recruiters page
     */
    static recruiters(): void {
        Redirection.router.navigate(['/dashboard/recruiter']);
    }

    /**
     * redirect to recruiters page
     */
    static advertisementExperiences(): void {
        Redirection.router.navigate(['/dashboard/advertisement/form/experience-required']);
    }

    /**
     * redirect to validate advertisement
     */
    static validateAdvertisement(): void {
        Redirection.router.navigate(['/dashboard/advertisement/form/validate-advertisement']);
    }

    /**
     * redirect to advertisements
     */
    static advertisements(): void {
        Redirection.router.navigate(['/dashboard/advertisement']);
    }

    /**
     * redirect to advertisements
     */
    static values(): void {
        Redirection.router.navigate(['/dashboard/profile/values']);
    }
    /**
     * redirect to job infos
     */
    static jobInfo(): void {
        Redirection.router.navigate(['/dashboard/profile/job-info']);
    }
    /**
     * redirect to about
     */
    static about(): void {
        Redirection.router.navigate(['/dashboard/about']);
    }

    /**
     * redirect to step by number
     * @param stepNumber 
     */
    static profileByStep(stepNumber: number): void {
        switch (stepNumber) {
            // case 1:
            //     this.profile();
            //     break;
            case 1:
                this.addProfile();
                break;
            case 2:
                this.jobInfo();
                break;
            case 3:
                this.profileExperiences();
                break;
            case 4:
                this.infoPlus();
                break;
            case 5:
                this.values();
                break;
            case 6:
                this.profileVideo();
                break;
            case 7:
                this.finalStep();
                break;
            default:
                this.profile();
                break;
        }
    }



}