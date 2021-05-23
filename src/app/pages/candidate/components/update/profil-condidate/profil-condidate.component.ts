import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GlobalService } from 'src/app/core/services/global/global.service';
import { CandidateService } from 'src/app/core/services/crud/candidate.service';
import { AuthService } from 'src/app/core/services/global/auth.service';
import { ToastService } from 'src/app/core/services/addapters/toast.service';
import { TransService } from 'src/app/core/services/addapters/trans.service';
import { Response } from 'src/app/core/models/interfaces';
import { Helper } from 'src/app/core/utils';
import { Candidate } from 'src/app/core/models/classes';

@Component({
  selector: 'app-profil-condidate',
  templateUrl: './profil-condidate.component.html',
  styleUrls: ['./profil-condidate.component.scss']
})
export class ProfilCondidateComponent implements OnInit {

  form: FormGroup;
  oldPercentage = 0;

  constructor(public modalController: ModalController, public globalService: GlobalService,
    private candidateService: CandidateService, private authService: AuthService,
    private toastService: ToastService, private transService: TransService) {
    this.initForm();
  }

  ngOnInit(): void {
    this.oldPercentage = Helper.calculePercentage(this.form.value, 0, 1.96);
    console.log(this.candidateService.candidate);
    // this.formPercentage = Object.keys(this.form.controls).length * 1.96;
    // Number(this.candidateService.percentage.forEach(element => {
    //   this.currentPercentage = element;
    // }));
    // this.newPercentage = (Math.trunc(this.currentPercentage) - Math.trunc(this.formPercentage));
  }

  private initForm() {
    this.form = new FormGroup({
      firstName: new FormControl(this.authService.user.firstName, Validators.required),
      lastName: new FormControl(this.authService.user.lastName, Validators.required),
      birthday: new FormControl( (this.candidateService.candidate ? this.candidateService.candidate['birthday'] : null ), Validators.required),
      gender: new FormControl(this.candidateService.candidate['gender'], Validators.required),
      phoneNumber: new FormControl(this.authService.user['phoneNumber'], Validators.required),
      availability: new FormControl(this.candidateService.candidate['availability'], Validators.required),
      currentJob: new FormControl(this.candidateService.candidate['currentJob'], Validators.required),
      currentSalary: new FormControl(this.candidateService.candidate['currentSalary'], Validators.required),
      managerialLevel: new FormControl(this.candidateService.candidate['managerialLevel'], Validators.required),
      effective: new FormControl(this.candidateService.candidate['effective'], Validators.required),
      goal: new FormControl(this.candidateService.candidate['goal'], Validators.required),
      experienceYears: new FormControl(this.candidateService.candidate['experienceYears'], Validators.required),
    });
  }

  /**
   * on save
   */
  onSave() {
    const value = this.form.value;
    const calc = Math.round(this.authService.user.percentage - Number(this.oldPercentage));
    const percentage = Helper.calculePercentage(value, calc, 1.96);

    this.candidateService.updateInfos(Object.assign(value, {
      percentage: (Math.round(percentage * 100) / 100).toFixed(2)
    })).subscribe((response: Response) => {
      this.authService.user = Object.assign(this.authService.user, value);
      this.authService.user = Object.assign(this.authService.user, {
        firstName: value.firstName,
        lastName: value.lastName
      });
      this.candidateService.candidate = this.authService.user as Candidate;
      this.candidateService.setPercentage(this.candidateService.candidate.percentage);
      this.toastService.success('Enregistré avec succès');
      this.modalController.dismiss();
    });
  }

}
