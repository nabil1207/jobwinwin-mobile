import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { GlobalService } from 'src/app/core/services/global/global.service';
import { AuthService } from 'src/app/core/services/global/auth.service';
import { TransService } from 'src/app/core/services/addapters/trans.service';
import { ToastService } from 'src/app/core/services/addapters/toast.service';
import { CandidateService } from 'src/app/core/services/crud/candidate.service';
import { Response } from 'src/app/core/models/interfaces';
import { Helper } from 'src/app/core/utils';

@Component({
  selector: 'app-experience-condidate',
  templateUrl: './experience-condidate.component.html',
  styleUrls: ['./experience-condidate.component.scss']
})
export class ExperienceCondidateComponent implements OnInit {

  form: FormGroup;
  oldPercentage = 0;
  functions = [];
  activitySectors = [];
  inWork = false;

  constructor(public modalController: ModalController, private fb: FormBuilder, public globalService: GlobalService,
    private authService: AuthService, private transService: TransService, private toastService: ToastService,
    private candidateService: CandidateService) {
    this.initForm();
  }

  ngOnInit(): void {
    this.oldPercentage = Helper.calculePercentage(this.form.value, 0, 1.96);
    this.setValues('experiences');
  }

  /**
   * init experience form
   */
  private initForm(): void {
    this.form = this.fb.group({
      experiences: this.fb.array([this.getExperienceFields()]),
    });
  }

  inWordChange() {
    this.inWork = !this.inWork;
  }

  /**
   * get experiences fields
   */
  private getExperienceFields(): FormGroup {
    return this.fb.group({
      job: new FormControl(null, Validators.required),
      function: new FormControl(null, Validators.required),
      startedDate: new FormControl(null, Validators.required),
      endDate: new FormControl(null, Validators.required),
      company: new FormControl(null, Validators.required),
      activitySector: new FormControl(null, Validators.required),
      location: new FormControl(null, Validators.required)
    }, { validator: this.checkDates });
  }

  checkDates(group: FormGroup) {
    const min = new Date(group.controls.startedDate.value).setHours(0, 0, 0, 0);
    const max = new Date(group.controls.endDate.value).setHours(0, 0, 0, 0);
    if (min === max || min > max) {
      return { dateError: true };
    }
    console.log(min, max);
    // return min === max ? null : { dateError: true };
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
    control.push(this.getExperienceFields());
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
  onSave() {
    const value = this.form.value;
    const calc = Math.round(this.authService.user.percentage - Number(this.oldPercentage));
    const percentage = Helper.calculePercentage(value, calc, 1.96);
    if (this.candidateService.candidate['experiences'].length <= 0) {
      this.candidateService.updateExperience(Object.assign(value, {
        percentage: (Math.round(percentage * 100) / 100).toFixed(2)
      })).subscribe((response: Response) => {
        this.authService.user = Object.assign(this.authService.user, this.form.value);
        // this.candidateService.candidate = this.authService.user;
        this.candidateService.setPercentage(this.candidateService.candidate.percentage);
        this.toastService.success('Enregistré avec succès');
        this.modalController.dismiss();
      });
    } else {
      this.candidateService.updateExperience(value).subscribe((response: Response) => {
        this.authService.user = Object.assign(this.authService.user, this.form.value);
        // this.candidateService.candidate = this.authService.user.candidate;
        this.candidateService.setPercentage(this.candidateService.candidate.percentage);
        this.toastService.success('Enregistré avec succès');
        this.modalController.dismiss();
      });
    }
  }

}
