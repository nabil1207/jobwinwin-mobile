import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/global/auth.service';
import { CandidateService } from 'src/app/core/services/crud/candidate.service';
import { ToastService } from 'src/app/core/services/addapters/toast.service';
import { TransService } from 'src/app/core/services/addapters/trans.service';
import { Response } from 'src/app/core/models/interfaces';
import { Helper } from 'src/app/core/utils';
import { Candidate } from 'src/app/core/models/classes';

@Component({
  selector: 'app-links-condidate',
  templateUrl: './links-condidate.component.html',
  styleUrls: ['./links-condidate.component.scss']
})
export class LinksCondidateComponent implements OnInit {

  form: FormGroup;
  oldPercentage = 0;

  constructor(public modalController: ModalController, public authService: AuthService,
    private candidateService: CandidateService, private toastService: ToastService, private transService: TransService) {
    this.initForm();
  }

  ngOnInit(): void {
    this.oldPercentage = Helper.calculePercentage(this.form.value, 0, 1.96);
  }

  /**
   * init links
   */
  private initForm(): void {
    this.form = new FormGroup({
      webSite: new FormControl(this.authService.user['webSite']),
      blog: new FormControl(this.authService.user['blog']),
      linkedin: new FormControl(this.authService.user['linkedin']),
      instagram: new FormControl(this.authService.user['instagram']),
      twitter: new FormControl(this.authService.user['twitter']),
      facebook: new FormControl(this.authService.user['facebook'])
    });
  }

  /**
   * update social network
   */
  onSave() {
    const value = this.form.value;
    const calc = Math.round(this.authService.user.percentage - Number(this.oldPercentage));
    const percentage = Helper.calculePercentage(value, calc, 1.96);
    this.candidateService.updateSocialNetworks(Object.assign(value, {
      percentage: (Math.round(percentage * 100) / 100).toFixed(2)
    })).subscribe((response: Response) => {
      this.authService.user = Object.assign(this.authService.user, value);
      this.candidateService.candidate = this.authService.user as Candidate;
      this.candidateService.setPercentage(this.candidateService.candidate.percentage);
      this.toastService.success('Enregistré avec succès');
      this.modalController.dismiss();
    });
  }

}
