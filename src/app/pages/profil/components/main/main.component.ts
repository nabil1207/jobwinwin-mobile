import { AlertController } from '@ionic/angular';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/core/services/global/auth.service';
import { ChildActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Redirection } from 'src/app/core/utils';
import { CandidateService } from 'src/app/core/services/crud/candidate.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  pageTitle: string;
  subscription: Subscription;

  constructor(public authService: AuthService, private router: Router, public candidateService: CandidateService, private alertController: AlertController) { }

  ngOnInit(): void {
    this.subscription = this.router.events.subscribe(event => {
      if (event instanceof ChildActivationEnd) {
        if (event.snapshot.firstChild.data.title) {
          this.pageTitle = event.snapshot.firstChild.data.title;
        }
      }
    });
  }

  back(): void {
    let step = this.authService.user.currentStep ? this.authService.user.currentStep : 0;
    switch (step) {
      case 1:
        Redirection.profile();
        break;
      case 2:
        Redirection.addProfile();
        break;
      case 3:
        Redirection.jobInfo();
        break;
      case 4:
        Redirection.profileExperiences();
        break;
      case 5:
        Redirection.infoPlus();
        break;
      case 6:
        Redirection.values();
        break;
      case 7:
        Redirection.profileVideo();
        break;
    }
    console.log(step);
    this.authService.user.currentStep = --step;
  }

  async desconnect() {
    const alertSave = await this.alertController.create({
      header: 'Confirmation!',
      message: 'Souhaitez-vous enregistrer les données et continuez l\'inscription plus tard ?',
      buttons: [
        {
          text: 'NON',
          role: 'cancel'
        }, {
          text: 'OUI',
          handler: async () => {
            const desconnect = await this.alertController.create({
              header: 'Confirmation!',
              message: 'Souhaitez-vous vous déconnecter ? ',
              buttons: [
                {
                  text: 'NON',
                  role: 'cancel'
                }, {
                  text: 'OUI',
                  handler: () => {
                    this.authService.logout();
                  }
                }
              ]
            });
            await desconnect.present();
          }
        }
      ]
    });
    await alertSave.present();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
