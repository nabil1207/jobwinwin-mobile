import { Component, OnInit } from '@angular/core';
import { RecruiterService } from 'src/app/core/services/crud/recruiter.service';
import { Redirection } from 'src/app/core/utils';
import { AuthService } from 'src/app/core/services/global/auth.service';
import { ModalController } from '@ionic/angular';
import { CreateComponent } from '../create/create.component';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent {

  search: string;

  constructor(public recruiterService: RecruiterService, private authService: AuthService, private modalController: ModalController) { }

  ionViewDidEnter(): void {
    this.readRecruteur();
  }

  readRecruteur(){
    this.recruiterService.read().subscribe();
  }

  /**
   * search recruiter
   */
  onSearch() {
    this.recruiterService.read(this.search).subscribe();
  } 

  onAdd() {
    this.addRecruiter();
    this.recruiterService.unSubscribe();
  }

  async addRecruiter() {
    const modal = await this.modalController.create({
      component: CreateComponent
    });
    modal.onWillDismiss().then(() => {
      this.readRecruteur();
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
