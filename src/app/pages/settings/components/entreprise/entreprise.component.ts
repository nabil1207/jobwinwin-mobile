import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/core/services/global/auth.service';
import { GlobalService } from 'src/app/core/services/global/global.service';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.scss']
})
export class EntrepriseComponent {

  form: FormGroup;

  constructor(public modalController: ModalController, private authService: AuthService,
    public globalService: GlobalService) {
    this.initForm();
    console.log(this.authService.user.company.phoneNumber);
  }

  ionViewDidEnter(): void { }

  /**
   * init form
   */
  private initForm(): void {
    this.form = new FormGroup({
      name: new FormControl({ value: this.authService.user.company.name, disabled: true }),
      managerFirstName: new FormControl({ value: this.authService.user.company.managerFirstName, disabled: true }),
      managerLastName: new FormControl({ value: this.authService.user.company.managerLastName, disabled: true }),
      title: new FormControl({ value: this.authService.user.company.title, disabled: true }),
      email: new FormControl({ value: this.authService.user.company.email, disabled: true }),
      zipCode: new FormControl({ value: this.authService.user.company.zipCode, disabled: true }),
      city: new FormControl({ value: this.authService.user.company.city, disabled: true }),
      country: new FormControl({ value: this.authService.user.company.country, disabled: true }),
      rc: new FormControl({ value: this.authService.user.company.rc, disabled: true }),
      taxIdentification: new FormControl({ value: this.authService.user.company.taxIdentification, disabled: true }),
      ice: new FormControl({ value: this.authService.user.company.ice, disabled: true }),
      phoneNumber: new FormControl({ value: this.authService.user.company.phoneNumber, disabled: true }),
      activitySector: new FormControl({ value: this.authService.user.company.activitySector, disabled: true })
    });
  }

}
