import { Component, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/core/services/crud/candidate.service';
import { Redirection, Helper } from 'src/app/core/utils';
import { AuthService } from 'src/app/core/services/global/auth.service';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.scss']
})
export class ValuesComponent implements OnInit {

  form: FormGroup;
  oldPercentage = 0;

  constructor(private candidateService: CandidateService,
    public authService: AuthService, public modalController: ModalController) {
    this.initForm();
  }

  ngOnInit() {
    this.oldPercentage = Helper.calculePercentage(this.form.value, 0, 1.96);
  }

  /**
   * init form
   */
  initForm(): void {
    this.form = new FormGroup({
      values: new FormControl(this.candidateService.candidate['values'] ? this.candidateService.candidate['values'] : []),
      skills: new FormControl(this.candidateService.candidate['skills'] ? this.candidateService.candidate['skills'] : [])
    });
  }

  /**
   * on save
   */
  onSave(): void {
    const val = this.form.value;
    const percentage = Helper.calculePercentage(val, (this.authService.user.percentage ? Number(this.authService.user.percentage) : 0) - Number(this.oldPercentage), 1.96);
    // console.log('New percent : ', percentage);
    this.candidateService.changeInfos(Object.assign(val, {
      percentage: (Math.round(percentage * 100) / 100).toFixed(2),
      currentStep: 6
    })).subscribe(res => {
      console.log(res);
      this.candidateService.candidate = res;
      this.authService.user = res;
      this.candidateService.setPercentage(this.authService.user.percentage);
      Redirection.profileVideo();
    });
  }

}
