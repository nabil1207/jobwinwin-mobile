import { environment } from './../../../../environments/environment.prod';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ModalController } from '@ionic/angular';
import { GlobalService } from 'src/app/core/services/global/global.service';
import { AuthService } from 'src/app/core/services/global/auth.service';
import { CandidateService } from 'src/app/core/services/crud/candidate.service';

@Component({
  selector: 'app-preview-candidate',
  templateUrl: './preview-candidate.component.html',
  styleUrls: ['./preview-candidate.component.scss'],
})
export class PreviewCandidateComponent {

  candidateId;
  @ViewChild(IonSlides) theSlides: IonSlides;
  candidate;
  locaction: string;

  constructor(public authService: AuthService, public candidateService: CandidateService, private globalService: GlobalService, public modalController: ModalController) { }

  ionViewDidEnter(): void {
    this.getCandidate();
  }

  public nextSlide() {
    this.theSlides.slideNext();
  }

  public previousSlide() {
    this.theSlides.slidePrev();
  }

  /**
   * get candidate
   */
  getCandidate() {
    if (this.candidateId) {
      this.candidateService.shwoProfil(this.candidateId).subscribe( async(res) => {
        this.candidate = await res;
        console.log('From Show Profile', this.candidate);
        this.checkCandidate();
      });
    } else {
      this.candidate = JSON.parse(JSON.stringify(this.candidateService.candidate));
      console.log('From preview', this.candidate);
      this.checkCandidate();
    }
  }

  checkCandidate(){
    if (this.candidate) {
      const experienceYearsIndex = this.globalService.experiences.findIndex(x => (x._id === this.candidate.experienceYears));
      if (experienceYearsIndex !== -1) {
        this.candidate['experienceYears'] = this.globalService.experiences[experienceYearsIndex].name;
      }
      const locationIndex = this.globalService.locations.findIndex(x => (x._id === this.candidate.locations[0]));
      if (locationIndex !== -1) {
        this.candidate['location'] = this.globalService.locations[locationIndex].name;
      }
      if (this.candidate['languages']) {
        this.candidate['languages'] = this.candidate.languages.map(x => {
          const langIndex = this.globalService.languages.findIndex(val => val._id === x.language);
          const langLevelIndex = this.globalService.languagesLevels.findIndex(val => val._id === x.languageLevel);
          return {
            language: langIndex !== -1 ? this.globalService.languages[langIndex].name : null,
            languageLevel: langLevelIndex !== -1 ? this.globalService.languagesLevels[langLevelIndex].name : null
          };
        });
      }
      if (this.candidate['programingLanguages']) {
        this.candidate['programingLanguages'].language = this.candidate['programingLanguages'].language.map(x => {
          const languageIndex = this.globalService.programmingLanguages.find(val => val._id === x);
          return languageIndex !== null ? languageIndex.name : null;
        });
        this.candidate['programingLanguages'].logiciel = this.candidate['programingLanguages'].logiciel.map(x => {
          const logicielsIndex = this.globalService.logiciels.find(val => val._id === x);
          return logicielsIndex !== null ? logicielsIndex.name : null;
        });
      }
      if (this.candidate['skills']) {
        this.candidate['skills'] = this.candidate.skills.map(x => {
          const softSkillsIndex = this.globalService.softSkills.findIndex(val => val._id === x);
          return softSkillsIndex !== -1 ? this.globalService.softSkills[softSkillsIndex].name : null;
        });
      }
      if (this.candidate['values']) {
        this.candidate['values'] = this.candidate.values.map(x => {
          const valueIndex = this.globalService.values.findIndex(val => val._id === x);
          return valueIndex !== -1 ? this.globalService.values[valueIndex].name : null;
        });
      }
    }
  }

  redirectTo(url: string) {
    window.open(environment.backend_url + url, '_blank');
  }

}
