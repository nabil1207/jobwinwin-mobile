import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { GlobalService } from 'src/app/core/services/global/global.service';
import { AuthService } from 'src/app/core/services/global/auth.service';
import { CandidateService } from 'src/app/core/services/crud/candidate.service';
import { Response } from 'src/app/core/models/interfaces';
import { ToastService } from 'src/app/core/services/addapters/toast.service';
import { TransService } from 'src/app/core/services/addapters/trans.service';
import { Helper } from 'src/app/core/utils';
import { Candidate } from 'src/app/core/models/classes';

@Component({
  selector: 'app-objectif-condidate',
  templateUrl: './objectif-condidate.component.html',
  styleUrls: ['./objectif-condidate.component.scss']
})
export class ObjectifCondidateComponent implements OnInit {

  form: FormGroup;
  oldPercentage = 0;

  constructor(private fb: FormBuilder, private candidateService: CandidateService, public globalService: GlobalService, private transService: TransService,
    public authService: AuthService, private toastService: ToastService, public modalController: ModalController) {
    this.initForm();
  }

  ngOnInit(): void {
    this.oldPercentage = Helper.calculePercentage(this.form.value, 0, 1.96);
  }

  /**
   * init job infos form
   */
  private initForm(): void {
    this.form = this.fb.group({
      jobType: new FormControl(this.candidateService.candidate['jobType'], Validators.required),
      searchedPost: new FormControl(this.candidateService.candidate['searchedPost'], Validators.required),
      jobMode: new FormControl(this.candidateService.candidate['jobMode'], Validators.required),
      supposedSalaryMin: new FormControl(this.candidateService.candidate['supposedSalaryMin'], Validators.required),
      supposedSalaryMax: new FormControl(this.candidateService.candidate['supposedSalaryMax'], Validators.required),
      usageTitles: new FormControl(this.candidateService.candidate['usageTitles'] ? this.candidateService.candidate['usageTitles'] : []),
      functions: new FormControl(this.candidateService.candidate['functions'] ? this.candidateService.candidate['functions'] : []),
      activitySector: new FormControl(this.candidateService.candidate['activitySector'] ? this.candidateService.candidate['activitySector'] : [], Validators.required),
      locations: new FormControl(this.candidateService.candidate['locations'] ? this.candidateService.candidate['locations'] : [], Validators.required),
      contracts: new FormControl(this.candidateService.candidate['contracts'] ? this.candidateService.candidate['contracts'] : [], Validators.required),
    }, { validator: this.checkSupposedSalary });
  }

  checkSupposedSalary(group: FormGroup) {
    const min = group.controls.supposedSalaryMin.value;
    const max = group.controls.supposedSalaryMax.value;
    return min < max ? null : { salaryErreur: true };
  }

  /**
   * on save
   */
  onSave(): void {
    const value = this.form.value;
    const calc = Math.round(this.authService.user.percentage - Number(this.oldPercentage));
    const percentage = Helper.calculePercentage(value, calc, 1.96);

    this.candidateService.updateGoals(Object.assign(value, {
      percentage: (Math.round(percentage * 100) / 100).toFixed(2)
    })).subscribe((response: Response) => {
      this.authService.user = Object.assign(this.authService.user, value);
      this.candidateService.candidate = this.authService.user as Candidate;
      this.candidateService.setPercentage(this.candidateService.candidate.percentage);
      this.candidateService.setChanges(true);
      this.toastService.success('Enregistré avec succès');
      this.modalController.dismiss();
    });
  }
}
