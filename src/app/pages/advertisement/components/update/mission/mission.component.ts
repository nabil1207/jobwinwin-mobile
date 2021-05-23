import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdvertisementService } from 'src/app/core/services/crud/advertisement.service';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss']
})
export class MissionComponent implements OnInit{

  form: FormGroup;
  constructor(public modalController: ModalController, private advertisementService: AdvertisementService) { }

  ngOnInit(): void {
    this.initForm();
  }

  close() {
    this.modalController.dismiss();
  }

  /**
   * init Form
   */
  private initForm(): void {
    this.form = new FormGroup({
      missions: new FormControl(this.advertisementService.advertisement.missions, Validators.required)
    });
  }

  /**
   * on save
   */
  onSave() {
    this.advertisementService.updateMissions(this.advertisementService.advertisement._id, this.form.value).subscribe(res => {
      this.close();
    });
  }

}
