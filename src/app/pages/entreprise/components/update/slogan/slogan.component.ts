import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CompanyService } from 'src/app/core/services/crud/company.service';
import { ToastService } from 'src/app/core/services/addapters/toast.service';
import { TransService } from 'src/app/core/services/addapters/trans.service';
import { Response } from 'src/app/core/models/interfaces';
import { AuthService } from 'src/app/core/services/global/auth.service';

@Component({
  selector: 'app-slogan',
  templateUrl: './slogan.component.html',
  styleUrls: ['./slogan.component.scss']
})
export class SloganComponent {

  form: FormGroup;
  constructor(public modalController: ModalController, private authService: AuthService,
    private companyService: CompanyService, private toastService: ToastService, private transService: TransService) {
    this.initForm();
  }

  ionViewDidEnter(): void {
  }

  /**
   * init title form
   */
  private initForm(): void {
    this.form = new FormGroup({
      title: new FormControl(this.authService.user.company.title, Validators.required)
    });
  }

  /**
   * update title of company
   */
  onSave() {
    this.companyService.updateTitle(this.form.value).subscribe((response: Response) => {
      this.authService.user.company = Object.assign(this.authService.user.company, this.form.value);
      this.toastService.success(this.transService.translate(response.message));
      this.modalController.dismiss();
    });
  }

}
