import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GlobalService } from 'src/app/core/services/global/global.service';
import { AuthService } from 'src/app/core/services/global/auth.service';
import { CandidateService } from 'src/app/core/services/crud/candidate.service';
import { Response } from 'src/app/core/models/interfaces/response';
import { ToastService } from 'src/app/core/services/addapters/toast.service';
import { TransService } from 'src/app/core/services/addapters/trans.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-skils-condidate',
  templateUrl: './skils-condidate.component.html',
  styleUrls: ['./skils-condidate.component.scss']
})
export class SkilsCondidateComponent implements OnInit {

  form: FormGroup;

  constructor(public modalController: ModalController, public globalService: GlobalService, private transService: TransService,
              private authService: AuthService, private candidateService: CandidateService, private toastService: ToastService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      values: new FormControl(this.candidateService.candidate['values'] ? this.candidateService.candidate['values'] : []),
      skills: new FormControl(this.candidateService.candidate['skills'] ? this.candidateService.candidate['skills'] : [])
    });
  }

  /**
   * update soft skills
   */
  onSave() {
    this.candidateService.updateSoftSkills(this.form.value).subscribe((response: Response) => {
      this.authService.user = Object.assign(this.authService.user, this.form.value);
      this.toastService.success('Enregistré avec succès');
      this.modalController.dismiss();
    });
  }

}
