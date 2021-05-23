import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { GlobalService } from 'src/app/core/services/global/global.service';
import { ToastService } from 'src/app/core/services/addapters/toast.service';
import { TransService } from 'src/app/core/services/addapters/trans.service';
import { CandidateService } from 'src/app/core/services/crud/candidate.service';
import { Response } from 'src/app/core/models/interfaces';
import { AuthService } from 'src/app/core/services/global/auth.service';
import { Helper } from 'src/app/core/utils';
import { Candidate } from 'src/app/core/models/classes';

@Component({
  selector: 'app-formation-condidate',
  templateUrl: './formation-condidate.component.html',
  styleUrls: ['./formation-condidate.component.scss']
})
export class FormationCondidateComponent implements OnInit {

  form: FormGroup;
  oldPercentage = 0;

  constructor(public modalController: ModalController, private fb: FormBuilder,
    public globalService: GlobalService, private toastService: ToastService,
    private transService: TransService, private candidateService: CandidateService,
    private authService: AuthService) {

    this.initForm();

  }

  ngOnInit(): void {
    this.oldPercentage = Helper.calculePercentage(this.form.value, 0, 1.96);
    this.setValues('trainings');
  }

  private initForm(): void {
    this.form = this.fb.group({
      levelOfStudies: new FormControl(this.candidateService.candidate['levelOfStudies']),
      trainings: this.fb.array([this.getTrainings()]),
    });
  }

  /**
   * get study fields
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
    control.push(this.getTrainings());
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
   * update trainings
   */
  onSave() {
    const value = this.form.value;
    for (let training of value['trainings']) {
      training.yearOfGraduation = typeof training.yearOfGraduation === 'number' ? training.yearOfGraduation :
        new Date(training.yearOfGraduation).getFullYear();
    }
    const calc = Math.round(this.authService.user.percentage - Number(this.oldPercentage));
    const percentage = Helper.calculePercentage(value, calc, 1.96);
    if (this.candidateService.candidate['experiences'].length <= 0) {
      this.candidateService.updateTraining(Object.assign(value, {
        percentage: (Math.round(percentage * 100) / 100).toFixed(2)
      })).subscribe((response: Response) => {
        this.authService.user = Object.assign(this.authService.user, this.form.value);
        this.candidateService.candidate = this.authService.user as Candidate;
        this.candidateService.setPercentage(this.candidateService.candidate.percentage);
        this.toastService.success('Enregistré avec succès');
        this.modalController.dismiss();
      });
    } else {
      this.candidateService.updateTraining(value).subscribe((response: Response) => {
        this.authService.user = Object.assign(this.authService.user, this.form.value);
        this.candidateService.candidate = this.authService.user as Candidate;;
        this.candidateService.setPercentage(this.candidateService.candidate.percentage);
        this.toastService.success('Enregistré avec succès');
        this.modalController.dismiss();
      });
    }
  }


}
