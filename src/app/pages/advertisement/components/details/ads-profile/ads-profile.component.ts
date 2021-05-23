import { Component, OnDestroy, OnInit } from '@angular/core';
import { AdvertisementService } from 'src/app/core/services/crud/advertisement.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/global/auth.service';
import { Subscription } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ads-profile',
  templateUrl: './ads-profile.component.html',
  styleUrls: ['./ads-profile.component.scss']
})
export class AdsProfileComponent implements OnInit, OnDestroy {

  subscribe: Subscription;
  isChecked = true;
  constructor(public advertisementService: AdvertisementService, private activatedRoute: ActivatedRoute, public authService: AuthService, private alertController: AlertController) { }

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    if (id) {
      this.subscribe = this.advertisementService.readDetails(id).subscribe(res =>
        console.log(res)
      );
    }
  }

  ngOnDestroy(){
    this.advertisementService.advertisement = null;
    this.subscribe.unsubscribe();
  }

  async changeStatus() {
    const alert = await this.alertController.create({
      header: 'Confirmation!',
      message: 'Etes-vous sûr de vouloir clôturer cette annonce?',
      buttons: [
        {
          text: 'Non',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Oui',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

}
