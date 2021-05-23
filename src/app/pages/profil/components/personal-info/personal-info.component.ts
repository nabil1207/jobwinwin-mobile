import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CandidateService } from 'src/app/core/services/crud/candidate.service';
import { Redirection, Helper } from 'src/app/core/utils';
import { GlobalService } from 'src/app/core/services/global/global.service';
import { AuthService } from 'src/app/core/services/global/auth.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
})
export class PersonalInfoComponent implements OnInit {

  form: FormGroup;
  oldPercentage = 0;
  constructor(private candidateService: CandidateService, public authService: AuthService, public globalService: GlobalService) {
    this.initForm();
  }

  private initForm() {
    this.form = new FormGroup({
      firstName: new FormControl(this.candidateService.candidate['firstName'] ? this.candidateService.candidate['firstName'] : null, Validators.required),
      lastName: new FormControl(this.candidateService.candidate['lastName'] ? this.candidateService.candidate['lastName'] : null, Validators.required),
      birthday: new FormControl(this.candidateService.candidate['birthday'] ? this.candidateService.candidate['birthday'] : null, Validators.required),
      gender: new FormControl(this.candidateService.candidate['gender'] ? this.candidateService.candidate['gender'] : null, Validators.required),
      phoneNumber: new FormControl(this.candidateService.candidate['phoneNumber'] ? this.candidateService.candidate['phoneNumber'] : null, Validators.required),
      availability: new FormControl(this.candidateService.candidate['availability'] ? this.candidateService.candidate['availability'] : null, Validators.required),
      experienceYears: new FormControl(this.candidateService.candidate['experienceYears'] ? this.candidateService.candidate['experienceYears'] : null, Validators.required),
      currentJob: new FormControl(this.candidateService.candidate['currentJob'] ? this.candidateService.candidate['currentJob'] : null, Validators.required),
      currentSalary: new FormControl(this.candidateService.candidate['currentSalary']  ? this.candidateService.candidate['currentSalary'] : null, Validators.required),
      managerialLevel: new FormControl(this.candidateService.candidate['managerialLevel'] ? this.candidateService.candidate['managerialLevel'] : null, Validators.required),
      effective: new FormControl(this.candidateService.candidate['effective'] ? this.candidateService.candidate['effective'] : null, Validators.required),
      goal: new FormControl(this.candidateService.candidate['goal'] ? this.candidateService.candidate['goal'] : null, Validators.required),
    });
  }

  ngOnInit(): void {
    if (this.authService.user.currentStep >= 0) {
      this.oldPercentage = Helper.calculePercentage(this.form.value, 0, 1.96);
      console.log(this.oldPercentage);
      console.log(this.authService.user.percentage);
    }
  }

  /**
   * on save
   */
  onSave(): void {
    let value = this.form.value;
    let percentage = Helper.calculePercentage(value, (Number(this.authService.user.percentage) ? Number(this.authService.user.percentage) : 0) - Number(this.oldPercentage), 1.96);
    console.log('New percent : ', percentage = (Math.round(percentage * 100) / 100 + 3.92).toFixed(2));
    this.candidateService.changeInfos(Object.assign(value, {
      percentage: (Math.round(percentage * 100) / 100).toFixed(2),
      currentStep: 1
    })).subscribe(res => {
      if (res) {
        console.log(res);
        this.authService.user = res;
        this.candidateService.candidate = res;
        this.candidateService.setPercentage(this.authService.user.percentage);
        Redirection.addProfile();
      }
    });
  }

}
