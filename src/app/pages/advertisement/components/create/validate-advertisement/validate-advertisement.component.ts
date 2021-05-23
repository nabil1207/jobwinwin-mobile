import { Component, OnInit } from '@angular/core';
import { LocalStorage, Redirection } from 'src/app/core/utils';
import { AdvertisementService } from 'src/app/core/services/crud/advertisement.service';
import { Response } from 'src/app/core/models/interfaces';
import { Advertisement } from 'src/app/core/models/classes';
import { PreviewAdvertisementComponent } from 'src/app/shared/components';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-validate-advertisement',
  templateUrl: './validate-advertisement.component.html',
  styleUrls: ['./validate-advertisement.component.scss']
})
export class ValidateAdvertisementComponent {

  constructor(public advertisementService: AdvertisementService, private modalController: ModalController) { }

  ionViewDidEnter(): void {
  }

  onSave() {
    console.log(this.advertisementService.advertisement);
    this.advertisementService.addAdvertisement().subscribe((response: Response) => {
      this.advertisementService.advertisement = new Advertisement({});
      this.advertisementService.setPercentage(0);
      Redirection.advertisements();
    });

  }

  async previewAdvertisement() {
    const modal = await this.modalController.create({
      component: PreviewAdvertisementComponent
    });
    modal.onWillDismiss().then( () => {
      return this.advertisementService.advertisement;
    });
    return await modal.present();
  }

}
