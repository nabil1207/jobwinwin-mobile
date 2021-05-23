import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AdvertisementService } from 'src/app/core/services/crud/advertisement.service';
import { GlobalService } from 'src/app/core/services/global/global.service';

@Component({
  selector: 'app-other-info',
  templateUrl: './other-info.component.html',
  styleUrls: ['./other-info.component.scss']
})
export class OtherInfoComponent implements OnInit {

  form: FormGroup;
  locations = [];
  constructor(public modalController: ModalController, private advertisementService: AdvertisementService,
              public globalService: GlobalService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  close() {
    this.modalController.dismiss();
  }

  /**
   * init date form
   */
  private initForm(): void {
    this.form = new FormGroup({
      contract: new FormControl(this.advertisementService.advertisement['contract'], Validators.required),
      jobType: new FormControl(this.advertisementService.advertisement['jobType'], Validators.required),
      jobMode: new FormControl(this.advertisementService.advertisement['jobMode'], Validators.required),
      managerialLevel: new FormControl(this.advertisementService.advertisement['managerialLevel'], Validators.required),
      location: new FormControl(this.advertisementService.advertisement['location'], Validators.required),
      effective: new FormControl(this.advertisementService.advertisement['effective'], Validators.required),
      supposedSalaryMin: new FormControl(this.advertisementService.advertisement['supposedSalaryMin'], Validators.required),
      supposedSalaryMax: new FormControl(this.advertisementService.advertisement['supposedSalaryMax'], Validators.required),
      otherAdvantage: new FormControl(this.advertisementService.advertisement['otherAdvantage'], Validators.required),
    });
  }

  /**
   * on save
   */
  onSave() {
    const value = this.form.value;
    this.advertisementService.updateStartedDate(this.advertisementService.advertisement._id, value).subscribe(res => {
      this.advertisementService.advertisement = Object.assign(this.advertisementService.advertisement, value);
      this.advertisementService.setChanges();
      this.close();
    });
  }

}
