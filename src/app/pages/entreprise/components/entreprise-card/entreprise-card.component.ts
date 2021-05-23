import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ValuesComponent } from 'src/app/pages/profil/components/values/values.component';
import { LinksEntrepriseComponent } from '../update/links-entreprise/links-entreprise.component';
import { PresentationComponent } from '../update/presentation/presentation.component';
import { SloganComponent } from '../update/slogan/slogan.component';
import { ValuesEntrepriseComponent } from '../update/values-entreprise/values-entreprise.component';
import { AuthService } from 'src/app/core/services/global/auth.service';
import { GlobalService } from 'src/app/core/services/global/global.service';
import { AdvertisementService } from 'src/app/core/services/crud/advertisement.service';
import { Response } from 'src/app/core/models/interfaces';
import { CompanyService } from 'src/app/core/services/crud/company.service';
import { Redirection } from 'src/app/core/utils';

@Component({
  selector: 'app-entreprise-card',
  templateUrl: './entreprise-card.component.html',
  styleUrls: ['./entreprise-card.component.scss']
})
export class EntrepriseCardComponent {

  activitySector;
  advertisements = [];
  value;

  constructor(private modalController: ModalController, public authService: AuthService,
    private globalService: GlobalService, private advertisementService: AdvertisementService,
    private companyService: CompanyService) { }

  ionViewDidEnter(): void {
    const index = this.globalService.activitySectors.findIndex(x => x._id === this.authService.user.company.activitySector);
    if (index !== -1) {
      this.activitySector = this.globalService.activitySectors[index].name;
    }
    this.advertisementService.read(null, 2).subscribe((response: Response) => {
      this.advertisements = response.data;
    });
    this.value = {
      file: this.authService.user.company.logo ? this.authService.user.company.logo : null,
      type: 'edit-image'
    };
    console.log(this.authService.user);
  }

  async openSlogan() {
    const modal = await this.modalController.create({
      component: SloganComponent
    });
    return await modal.present();
  }

  async openPresentation() {
    const modal = await this.modalController.create({
      component: PresentationComponent
    });
    return await modal.present();
  }

  async openValues() {
    const modal = await this.modalController.create({
      component: ValuesEntrepriseComponent
    });
    return await modal.present();
  }

  async openLinks() {
    const modal = await this.modalController.create({
      component: LinksEntrepriseComponent
    });
    return await modal.present();
  }

  /**
   * file changes
   * @param value 
   */
  fileChanges(value) {
    this.companyService.updateLogo(value).subscribe(res => {
      this.authService.user.company['logo'] = value;
    });
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
