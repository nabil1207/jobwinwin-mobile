import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/core/services/global/api.service';
import { Response } from 'src/app/core/models/interfaces';
import { ToastService } from 'src/app/core/services/addapters/toast.service';
import { Redirection } from 'src/app/core/utils';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html'
})
export class FormContactComponent implements OnInit {

  form: FormGroup;

  constructor(public modalController: ModalController, private apiService: ApiService, private toastService: ToastService) { 
    this.initForm();
  }

  ngOnInit(): void {
  }

  /**
   * init contact form
   */
  initForm() {
    this.form = new FormGroup({
      subject: new FormControl(null),
      message: new FormControl(null)
    });
  }

  /**
   * send message to support
   */
  onSave() {
    this.apiService.post('contact-ms/users-contacts', this.form.value).subscribe((response: Response) => {
      this.toastService.success('Merci de nous avoir contacté');
      Redirection.about();
    });
  }
}
