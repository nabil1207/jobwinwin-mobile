import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/core/services/crud/candidate.service';
import { AuthService } from 'src/app/core/services/global/auth.service';
import { ModalController } from '@ionic/angular';
import { PreviewCandidateComponent } from 'src/app/shared/components';
import { Candidate } from 'src/app/core/models/classes';
import { Redirection } from 'src/app/core/utils';

@Component({
  selector: 'app-final-state',
  templateUrl: './final-state.component.html',
  styleUrls: ['./final-state.component.scss']
})
export class FinalStateComponent {

  constructor(public candidateService: CandidateService, public authService: AuthService, public modalController: ModalController) {}

  /**
   * preview profil
   */
  async previewProfil() {
    const modal = await this.modalController.create({
      component: PreviewCandidateComponent
    });
    return await modal.present();
  }

  onClear() {
    this.candidateService.changeInfos({
      currentStep: 8,
      completed: true
    }).subscribe(res => {
      this.candidateService.candidate = res;
      this.authService.user = res;
      Redirection.candidateDashboard();
    });
  }

}
