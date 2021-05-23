import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AdvertisementService } from 'src/app/core/services/crud/advertisement.service';
import { AuthService } from 'src/app/core/services/global/auth.service';
import { Redirection } from 'src/app/core/utils';
import { StatusComponent } from '../update/status/status.component';

@Component({
  selector: 'app-listes',
  templateUrl: './listes.component.html',
  styleUrls: ['./listes.component.scss']
})
export class ListesComponent implements OnInit{

  search: string;

  constructor(public advertisementService: AdvertisementService, public authService: AuthService, public modalController: ModalController) {
  }

  ionViewDidEnter(): void {
    this.advertisementService.read().subscribe();
  }

  ngOnInit(): void {
  }

  async changeStatus(id){
    console.log(id);
    const modal = await this.modalController.create({
      component: StatusComponent,
      componentProps : { idAdvertissement: id }
    });
    return await modal.present();
  }

  /**
   * search recruiter
   */
  onSearch() {
    this.advertisementService.read(this.search).subscribe();
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
