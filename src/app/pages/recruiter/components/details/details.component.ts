import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RecruiterService } from 'src/app/core/services/crud/recruiter.service';
import { ActivatedRoute } from '@angular/router';
import { Recruiter } from 'src/app/core/models/classes';
import { Subscription } from 'rxjs';
import { CreateComponent } from '../create/create.component';
import { Response } from 'src/app/core/models/interfaces';
import { ToastService } from 'src/app/core/services/addapters/toast.service';
import { TransService } from 'src/app/core/services/addapters/trans.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnDestroy {

  private subscription: Subscription;
  recruiter;
  value;
  constructor(private modalController: ModalController, private toastService: ToastService,
    private trans: TransService, public recruiterService: RecruiterService,
    private activtedRoute: ActivatedRoute) { }

  ionViewDidEnter(): void {
    this.getRecruteur();
  }

  getRecruteur() {
    const { id } = this.activtedRoute.snapshot.params;
    console.log('qqqqqqqq');
    if (id) {
      this.recruiterService.readOne(id).subscribe();
      this.subscription = this.recruiterService.recruiter.subscribe((recruiter: Recruiter) => {
        if (recruiter) {
          this.value = { file: recruiter.picture ? recruiter.picture : null, type: 'update-picture' };
          return this.recruiter = recruiter;
        }
      });
    }
  }

  async editRecruiter() {
    const modal = await this.modalController.create({
      component: CreateComponent
    });
    modal.onWillDismiss().then(() => {
      this.getRecruteur();
    });
    return await modal.present();
  }

  /**
   * 
   * @param value 
   */
  fileChanges(value) {
    this.recruiterService.updatePicture({
      _id: this.recruiter.user,
      picture: value
    }).subscribe((response: Response) => {
      this.recruiter.picture = value;
      this.toastService.success(this.trans.translate('update_success'));
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
