import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/global/auth.service';
import { CandidateService } from 'src/app/core/services/crud/candidate.service';
import { Response } from 'src/app/core/models/interfaces';
import { ToastService } from 'src/app/core/services/addapters/toast.service';
import { TransService } from 'src/app/core/services/addapters/trans.service';

@Component({
  selector: 'app-cv-condidate',
  templateUrl: './cv-condidate.component.html',
  styleUrls: ['./cv-condidate.component.scss']
})
export class CvCondidateComponent {

  form: FormGroup;
  file;
  value;
  constructor( public modalController: ModalController, private authService: AuthService,
    private candidateService: CandidateService, private toastService: ToastService, private trans: TransService ) {
  }

  ionViewDidEnter(): void {
    this.value = { file: this.authService.user['cv'] ? this.authService.user['cv'] : null, type: 'cv' };
  }

  /**
  * 
  * @param value 
  */
  fileChanges(value) {
    this.file = value;
  }

  /**
   * on save
   */
  onSave() {
    this.candidateService.updateCV(this.file._id).subscribe((response: Response) => {
      this.authService.user['cv'] = this.file;
      this.toastService.success('Enregistré avec succès');
      this.modalController.dismiss();
    });
  }

}
