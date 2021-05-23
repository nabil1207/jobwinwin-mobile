import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AdvertisementService } from 'src/app/core/services/crud/advertisement.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements OnInit {

  form: FormGroup;
  @Input() idAdvertissement: any;

  constructor(private advertisementService: AdvertisementService, private modalController: ModalController) {
    this.initForm();
  }

  ngOnInit() {
    if (this.idAdvertissement) {
      this.advertisementService.readOne(this.idAdvertissement);
      console.log(this.advertisementService.advertisement.status)
      this.initForm();
    }
  }

  /**
   * init status form
   */
  private initForm() {
    this.form = new FormGroup({
      status: new FormControl(this.advertisementService.advertisement.status, Validators.required)
    });
  }

  /**
   * change status
   */
  changeStatus() {
    const value = this.form.value;
    this.advertisementService.updateStatus(this.advertisementService.advertisement._id, value).subscribe(res => {
      this.advertisementService.advertisement = Object.assign(this.advertisementService.advertisement, value);
      this.advertisementService.setChanges();
      this.modalController.dismiss();
    });
  }

  close() {
    this.modalController.dismiss();
  }

}
