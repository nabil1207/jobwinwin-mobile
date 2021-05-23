import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CandidateService } from 'src/app/core/services/crud/candidate.service';
import { Response } from 'src/app/core/models/interfaces';
import { AuthService } from 'src/app/core/services/global/auth.service';
import { ToastService } from 'src/app/core/services/addapters/toast.service';
import { TransService } from 'src/app/core/services/addapters/trans.service';
import { Helper } from 'src/app/core/utils';

@Component({
  selector: 'app-video-condidate',
  templateUrl: './video-condidate.component.html',
  styleUrls: ['./video-condidate.component.scss']
})
export class VideoCondidateComponent implements OnInit {

  form: FormGroup;
  file;
  value;
  oldPercentage = 0;

  constructor(public modalController: ModalController, private candidateService: CandidateService,
    private authService: AuthService, private toastService: ToastService, private trans: TransService) {
    this.initForm();
  }

  ngOnInit() {
    this.value = { file: this.authService.user['video'] ? this.authService.user['video'] : null, type: 'video' };
    if (this.value.file) {
      this.oldPercentage = 1.96;
    }
  }

  /**
   * init form
   */
  private initForm(): void {
    this.form = new FormGroup({
      video: new FormControl(null, Validators.required)
    });
  }

  /**
   * 
   * @param value
   */
  fileChanges(value) {
    this.form.setValue({ video: value });
    this.file = value;
  }

  /**
   * on save
   */
  onSave() {
    let value = this.form.value;
    let percentage = Helper.calculePercentage(value, (this.authService.user.percentage ? Number(this.authService.user.percentage) : 0) - Number(this.oldPercentage), 1.96);
    value = Object.assign(value, {
      percentage: (Math.round(percentage * 100) / 100).toFixed(2)
    });
    this.authService.user['video'] = null;
    this.candidateService.updateVideo(value).subscribe((response: Response) => {
      this.authService.user['video'] = value.video;
      this.candidateService.candidate['video'] = value.video;
      this.candidateService.candidate.percentage = Math.round(value.percentage);
      this.candidateService.setPercentage(this.candidateService.candidate.percentage);
      this.toastService.success('Enregistré avec succès');
      this.modalController.dismiss();
    });
  }

}
