import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AccountComponent } from '../account/account.component';
import { EntrepriseComponent } from '../entreprise/entreprise.component';
import { IdentityComponent } from '../identity/identity.component';
import { AuthService } from 'src/app/core/services/global/auth.service';
import { Redirection } from 'src/app/core/utils';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  constructor(public modalController: ModalController, public authService: AuthService) { }

  ionViewDidEnter(): void {
  }

  async openAccount() {
    const modal = await this.modalController.create({
      component: AccountComponent
    });
    return await modal.present();
  }

  async openIdentity() {
    const modal = await this.modalController.create({
      component: IdentityComponent
    });
    return await modal.present();
  }

  async editEntreprise() {
    const modal = await this.modalController.create({
      component: EntrepriseComponent
    });
    return await modal.present();
  }

  /**
   * go back
   */
  goBack() {
    if (this.authService.user.role.name === 'candidate') {
      Redirection.candidateDashboard();
    } else {
      Redirection.dashboard();
    }
  }

}
