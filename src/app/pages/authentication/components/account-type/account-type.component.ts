import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-type',
  templateUrl: './account-type.component.html',
  styleUrls: ['./account-type.component.scss'],
})
export class AccountTypeComponent implements OnInit {

  form: FormGroup;

  constructor(private router: Router) {
    this.initForm();
  }

  ngOnInit(): void { }

  private initForm(): void {
    this.form = new FormGroup({
      type: new FormControl(null, Validators.required)
    });
  }

  choiseType(): void {
    if (this.form.get('type').value === 'candidate') {
      this.router.navigateByUrl('/auth/sign-up');
    } else {
      this.router.navigateByUrl('/auth/recruiter');
    }
  }

}
