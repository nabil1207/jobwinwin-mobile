import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GlobalService } from 'src/app/core/services/global/global.service';
import { RecruiterService } from 'src/app/core/services/crud/recruiter.service';
import { ToastService } from 'src/app/core/services/addapters/toast.service';
import { Redirection } from 'src/app/core/utils';
import { Subscription } from 'rxjs';
import { Recruiter } from 'src/app/core/models/classes';
import { ModalController } from '@ionic/angular';
import { TransService } from 'src/app/core/services/addapters/trans.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  form: FormGroup;
  subscription: Subscription;
  value = { file: null, type: 'photo' };
  constructor(public globalService: GlobalService, private recruiterService: RecruiterService, private toast: ToastService,
    public modalCtrl: ModalController, private transService: TransService) {
    this.initForm();
  }

  ionViewDidEnter(): void {
    this.subscription = this.recruiterService.recruiter.subscribe((recruiter: Recruiter) => {
      if (recruiter) {
        this.form.patchValue(recruiter.getValues());
        this.value = { file: recruiter.picture ? recruiter.picture : null, type: 'photo' };
      }
    });
  }

  /**
   * init recruiter form
   */
  private initForm(): void {
    this.form = new FormGroup({
      _id: new FormControl(null),
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      firstPhoneNumber: new FormControl(null, Validators.required),
      secondPhoneNumber: new FormControl(null),
      email: new FormControl(null, Validators.compose([Validators.required, Validators.email])),
      picture: new FormControl(null),
      civility: new FormControl(null, Validators.required),
      function: new FormControl(null, Validators.required),
    });
  }

  /**
   * 
   * @param value 
   */
  fileChanges(value) {
    this.form.patchValue({
      picture: value
    });
  }

  /**
   * create candidate
   */
  onSave() {
    if (this.form.get('_id').value) {
      this.recruiterService.update(this.form.value).subscribe(res => {
        this.toast.success(this.transService.translate('update_success'));
        this.dismiss();
      });
    } else {
      this.recruiterService.create(this.form.value).subscribe(res => {
        this.toast.success(this.transService.translate('create_success'));
        this.dismiss();
        Redirection.recruiters();
      });
    }
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
