import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdvertisementService } from 'src/app/core/services/crud/advertisement.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent {

  form: FormGroup;
  constructor(public modalController: ModalController, private advertisementService: AdvertisementService) {
    this.initForm();
  }

  ionViewDidEnter(): void {
  }

  close() {
    this.modalController.dismiss();
  }

  /**
   * init date form
   */
  private initForm(): void {
    this.form = new FormGroup({
      startedDate: new FormControl(this.advertisementService.advertisement.startedDate, Validators.required)
    })
  }

  /**
   * on save
   */
  onSave() {
    this.advertisementService.updateStartedDate(this.advertisementService.advertisement._id, this.form.value).subscribe(res => {
      this.close();
    });
  }

}
