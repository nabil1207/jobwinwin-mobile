import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from 'src/app/core/services/crud/contact.service';
import { Contact } from 'src/app/core/models/classes';
import { Redirection } from 'src/app/core/utils';
import { AuthService } from 'src/app/core/services/global/auth.service';

@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.scss']
})
export class RecruiterComponent implements OnInit {

  form: FormGroup;

  constructor(private contactService: ContactService, private authService: AuthService) {
    this.initForm();
  }

  ngOnInit(): void {
  }

  /**
   * init contact form
   */
  private initForm(): void {
    this.form = new FormGroup({
      companyName: new FormControl(null, Validators.required),
      function: new FormControl(null, Validators.required),
      fullName: new FormControl(null, Validators.required),
      phoneNumber: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.compose([Validators.required, Validators.email])),
      message: new FormControl(null, Validators.required)
    });
  }

  /**
   * contact
   */
  onSave() {
    this.contactService.contact(this.form.value).subscribe(res => {
      this.authService.fromPage = 'contact';
      Redirection.congratulation();
    });
  }

}
