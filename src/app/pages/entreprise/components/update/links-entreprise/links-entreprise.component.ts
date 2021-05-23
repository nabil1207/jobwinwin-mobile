import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl } from '@angular/forms';
import { CompanyService } from 'src/app/core/services/crud/company.service';
import { ToastService } from 'src/app/core/services/addapters/toast.service';
import { TransService } from 'src/app/core/services/addapters/trans.service';
import { AuthService } from 'src/app/core/services/global/auth.service';
import { Response } from 'src/app/core/models/interfaces';

@Component({
  selector: 'app-links-entreprise',
  templateUrl: './links-entreprise.component.html',
  styleUrls: ['./links-entreprise.component.scss']
})
export class LinksEntrepriseComponent {

  form: FormGroup;

  constructor(public modalController: ModalController, private authService: AuthService,
    private companyService: CompanyService, private toastService: ToastService,
    private transService: TransService) {
    this.initForm();
  }

  ionViewDidEnter(): void {
  }

  /**
   * init links form
   */
  private initForm(): void {
    this.form = new FormGroup({
      webSite: new FormControl(this.authService.user.company.webSite),
      linkedin: new FormControl(this.authService.user.company.linkedin),
      facebook: new FormControl(this.authService.user.company.facebook),
      twitter: new FormControl(this.authService.user.company.twitter),
      instagram: new FormControl(this.authService.user.company.instagram)
    });
  }

  /**
   * on save
   */
  onSave() {
    this.companyService.updateSocialNetwork(this.form.value).subscribe((response: Response) => {
      this.authService.user.company = Object.assign(this.authService.user.company, this.form.value);
      this.toastService.success(this.transService.translate(response.message));
      this.modalController.dismiss();
    });
  }

}
