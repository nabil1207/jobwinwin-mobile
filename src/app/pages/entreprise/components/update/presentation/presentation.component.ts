import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/global/auth.service';
import { CompanyService } from 'src/app/core/services/crud/company.service';
import { Response } from 'src/app/core/models/interfaces';
import { ToastService } from 'src/app/core/services/addapters/toast.service';
import { TransService } from 'src/app/core/services/addapters/trans.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent {

  form: FormGroup;
  constructor(public modalController: ModalController, private authService: AuthService,
    private companyService: CompanyService, private toastService: ToastService, private transService: TransService) { 
    this.initForm();
  }

  ionViewDidEnter(): void {
  }

  /**
   * init description form
   */
  private initForm(): void {
    this.form = new FormGroup({
      description: new FormControl(this.authService.user.company.description, Validators.required)
    });
  }

  /**
   * update description
   */
  onSave() {
    this.companyService.updateDescription(this.form.value).subscribe((response: Response) => {
      this.authService.user.company = Object.assign(this.authService.user.company, this.form.value);
      this.toastService.success(this.transService.translate(response.message));
      this.modalController.dismiss();
    });
  }

}
