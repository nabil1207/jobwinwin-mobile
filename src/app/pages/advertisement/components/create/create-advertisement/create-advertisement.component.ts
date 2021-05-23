import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { GlobalService } from 'src/app/core/services/global/global.service';
import { Redirection, Helper } from 'src/app/core/utils';
import { AdvertisementService } from 'src/app/core/services/crud/advertisement.service';
import { Advertisement } from 'src/app/core/models/classes';
import { AuthService } from 'src/app/core/services/global/auth.service';

@Component({
  selector: 'app-create-advertisement',
  templateUrl: './create-advertisement.component.html',
  styleUrls: ['./create-advertisement.component.scss']
})
export class CreateAdvertisementComponent implements OnInit {

  form: FormGroup;
  descriptions = [];

  constructor(private fb: FormBuilder, public globalService: GlobalService, public advertisementService: AdvertisementService, private authService: AuthService) {
    this.initForm();
  }

  ngOnInit() {
    if (this.advertisementService.advertisement) {
      const val = this.advertisementService.advertisement.toJson();
      console.log(val);
      if (Object.keys(val).length > 0) {
        this.descriptions = val['descriptions'];
        delete val['descriptions'];
        this.form.patchValue(val);
      }
    }
  }

  /**
   * init advertisement form
   */
  private initForm(): void {
    this.form = this.fb.group({
      usageTitles: new FormControl([]),
      location: new FormControl(null, Validators.required),
      desiredJob: new FormControl(null, Validators.required),
      function: new FormControl(null, Validators.required),
      experienceYears: new FormControl(null, Validators.required),
      contract: new FormControl(null, Validators.required),
      jobType: new FormControl(null, Validators.required),
      jobMode: new FormControl(null, Validators.required),
      managerialLevel: new FormControl(null, Validators.required),
      effective: new FormControl(null, Validators.required),
      missions: new FormControl(null, Validators.required),
      descriptions: new FormControl(null),
      prerequisite: new FormControl(null, Validators.required),
      typeOfTraining: new FormControl([]),
      levelOfStudies: new FormControl(null, Validators.required),
      supposedSalaryMin: new FormControl(null, Validators.required),
      supposedSalaryMax: new FormControl(null, Validators.required),
      otherAdvantage: new FormControl(null),
      startedDate: new FormControl(null, Validators.required),
    }, { validator: this.checkSupposedSalary });
  }

  /**
   * check salaries
   * @param group
   */
  checkSupposedSalary(group: FormGroup) {
    const min = group.controls.supposedSalaryMin.value;
    const max = group.controls.supposedSalaryMax.value;
    return min < max ? null : { salaryErreur: true };
  }

  addDescription(element) {
    if (element.value) {
      this.descriptions.push(element.value);
      element.value = null;
    }
  }

  /**
   * delete tasks
   * @param i
   */
  deleteDescription(i: number) {
    this.descriptions.splice(i, 1);
  }

  /**
   * add advertisement infos
   */
  onSave() {
    let value = Object.assign(this.form.value, { 'descriptions': this.descriptions });
    console.log(value);
    const percentage = Helper.calculePercentage(value, 0, 4.16);
    console.log(percentage);
    this.advertisementService.advertisement = new Advertisement(Object.assign(value, this.advertisementService.advertisement ? this.advertisementService.advertisement.toJson() : { company: this.authService.user.company }));
    this.advertisementService.setPercentage((Math.round(percentage * 100) / 100).toFixed(2));
    Redirection.advertisementExperiences();
  }

}
