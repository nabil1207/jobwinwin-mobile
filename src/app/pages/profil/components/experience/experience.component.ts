import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { CandidateService } from 'src/app/core/services/crud/candidate.service';
import { GlobalService } from 'src/app/core/services/global/global.service';
import { Redirection, Helper } from 'src/app/core/utils';
import { AuthService } from 'src/app/core/services/global/auth.service';
import { DatePipe, formatDate } from '@angular/common';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  providers: [DatePipe]
})
export class ExperienceComponent implements OnInit {

  form: FormGroup;
  oldPercentage = 0;
  inWork = [];
  checkDate = false;

  constructor(private fb: FormBuilder, private candidateService: CandidateService, public globalService: GlobalService,
    public authService: AuthService) {
    this.initForm();
  }

  ngOnInit(): void {
    this.setValues('experiences');
    this.setValues('trainings');
    this.oldPercentage = Helper.calculePercentage(this.form.value, 0, 1.96);
  }

  /**
   * init form controls
   */
  private initForm(): void {
    this.form = this.fb.group({
      levelOfStudies: new FormControl(this.candidateService.candidate['levelOfStudies'] ? this.candidateService.candidate['levelOfStudies'] : null),
      experiences: this.fb.array([this.getExperienceFields()]),
      trainings: this.fb.array([this.getTrainings()])
    });
  }

  inWorkChange(i, event) {
    if (this.inWork[i]) {
      this.inWork[i] = false;
      this.form.get('experiences')['controls'][i].get('endDate').value = null;
    } else {
      this.inWork[i] = true;
    }
  }

  // inWorkChange(i) {
  //   const end = this.form.get('experiences')['controls'][i].get('endDate').value.getTime();
  //   const start = this.form.get('experiences')['controls'][i].get('startedDate').value.getTime();
  //   return end <= start ? this.inWork = true : this.inWork = false;
  // }

  /**
   * get experiences fields
   */
  private getExperienceFields(): FormGroup {
    return this.fb.group({
      job: new FormControl(null, Validators.required),
      function: new FormControl(null, Validators.required),
      startedDate: new FormControl(null, Validators.required),
      endDate: new FormControl(null),
      company: new FormControl(null, Validators.required),
      activitySector: new FormControl(null, Validators.required),
      location: new FormControl(null, Validators.required)
    }, { validator: this.checkDates });
  }

  checkDates(group: FormGroup) {
    if (!group.controls.endDate.value) {
      return false;
    }
    const min = new Date(group.controls.startedDate.value).setHours(0, 0, 0, 0);
    const max = new Date(group.controls.endDate.value).setHours(0, 0, 0, 0);
    if (min === max || min > max) {
      return { dateError: true };
    }
  }

  /**
   * get Trainings
   */
  private getTrainings(): FormGroup {
    return this.fb.group({
      name: new FormControl(null, Validators.required),
      studyLevel: new FormControl(null, Validators.required),
      typeOfTraining: new FormControl(null, Validators.required),
      yearOfGraduation: new FormControl(null, Validators.required),
      school: new FormControl(null, Validators.required),
      location: new FormControl(null, Validators.required)
    });
  }

  /**
   * set values
   * @param control
   */
  private setValues(control: string) {
    if (this.candidateService.candidate[control] && this.candidateService.candidate[control].length > 0) {
      let fields = <FormArray>this.form.controls[control];
      fields.controls.splice(0);
      fields.controls = [];
      this.candidateService.candidate[control].forEach((val) => {
        // this.inWork.push();
        // console.log(val.experiences);
        this.inWork = this.candidateService.candidate.experiences.map(x => {
          return x.endDate ? true : false;
        });
        console.log(this.inWork);
        fields.push(this.fb.group(val));
      });
    }
  }

  /**
   * add field to form array
   * @param ctrl
   */
  addField(ctrl: string): void {
    const control = this.form.get(ctrl) as FormArray;
    control.push(ctrl === 'experiences' ? this.getExperienceFields() : this.getTrainings());
  }

  /**
   * remove field from form array
   * @param index
   * @param ctrl
   */
  removeField(index: number, ctrl: string): void {
    const control = this.form.get(ctrl) as FormArray;
    control.removeAt(index);
  }

  /**
   * on save
   */
  onSave(): void {
    let value = this.form.value;
    for (let val of value['experiences']) {
      if (!val.endDate) {
        val.endDate === null;
      }
    }
    for (let training of value['trainings']) {
      training.yearOfGraduation = typeof training.yearOfGraduation === 'number' ? training.yearOfGraduation :
        new Date(training.yearOfGraduation).getFullYear();
    }
    const percentage = Helper.calculePercentage(value, (this.authService.user.percentage ? Number(this.authService.user.percentage) : 0) - Number(this.oldPercentage), 1.96);
    console.log(percentage);
    console.log(value);
    this.candidateService.changeInfos(Object.assign(value, {
      currentStep: 4,
      percentage: (Math.round(percentage * 100) / 100).toFixed(2)
    })).subscribe(res => {
      this.candidateService.candidate = res;
      this.authService.user = res;
      this.candidateService.setPercentage(this.authService.user.percentage);
      Redirection.infoPlus();
    });

  }

}
