import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CandidateService } from 'src/app/core/services/crud/candidate.service';
import { Response } from 'src/app/core/models/interfaces';
import { Redirection, Helper } from 'src/app/core/utils';
import { AuthService } from 'src/app/core/services/global/auth.service';

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.scss']
})
export class UploadVideoComponent implements OnInit {

  form: FormGroup;
  file;
  value;
  videoSizeError;
  oldPercentage = 0;

  constructor(private candidateService: CandidateService, public authService: AuthService) {
    this.initForm();
  }

  ngOnInit() {
    console.log(this.candidateService.candidate);
    this.value = { file: this.candidateService.candidate['video'] ? this.candidateService.candidate['video'] : null, type: 'video' };
    if (this.value.file) {
      this.oldPercentage = 1.96;
    }
  }

  /**
   * init form
   */
  private initForm(): void {
    this.form = new FormGroup({
      video: new FormControl(this.candidateService.candidate['video'])
    });
  }

  /**
   * 
   * @param value 
   */
  fileChanges(value) {
    this.form.setValue({'video': value})
  }

  /**
   * on save
   */
  onSave() {
    let value = this.form.value;
    let percentage = Helper.calculePercentage(value, (this.authService.user.percentage ? Number(this.authService.user.percentage) : 0) - Number(this.oldPercentage), 1.96);
    value = Object.assign(value, { 'percentage': (Math.round(percentage * 100) / 100).toFixed(2), 'currentStep': 7 });
    console.log('New percent : ', percentage);
    this.candidateService.changeInfos(value).subscribe(res => {
      console.log(res);
      this.candidateService.candidate = res;
      this.authService.user = res;
      this.candidateService.setPercentage(this.authService.user.percentage);
      Redirection.finalStep();
    });
  }

}
