import { Component, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/core/services/crud/candidate.service';
import { AuthService } from 'src/app/core/services/global/auth.service';
import { Candidate } from 'src/app/core/models/classes';
import { GlobalService } from 'src/app/core/services/global/global.service';

@Component({
  selector: 'app-preview-profil',
  templateUrl: './preview-profil.component.html',
  styleUrls: ['./preview-profil.component.scss']
})
export class PreviewProfilComponent implements OnInit {

  candidate;
  constructor(public candidateService: CandidateService, public authService: AuthService,
    private globalService: GlobalService) { }

  
  ngOnInit(): void {
    this.candidate = {
      currentJob: this.candidateService.candidate['currentJob'],
      goal: this.candidateService.candidate['goal'],
      currentLocation: this.candidateService.candidate['currentLocation']
    };
    this.setTrainings();
    this.setExperiences();
    this.setSkills();
    this.setValues();
    this.setLanguages();
    console.log(this.candidateService.candidate);
    console.log('aaa');
  }
  ionViewDidEnter(): void { 
    console.log('bbbb');
  }
  /**
   * set training to candidate
   */
  private setTrainings() {
    this.candidate['trainings'] = this.candidateService.candidate['trainings'].map((x: any) => {
      const studyLevelIndex = this.globalService.levelOfStudies.findIndex(s => (s._id === x.studyLevel));
      const typeOfTrainingIndex = this.globalService.typeOfTrainings.findIndex(s => (s._id === x.typeOfTraining));
      return {
        yearOfGraduation: x.yearOfGraduation,
        studyLevel: this.globalService.levelOfStudies[studyLevelIndex].name,
        typeOfTraining: this.globalService.typeOfTrainings[typeOfTrainingIndex].name,
      };
    });
  }

  /**
   * set experience to candidate
   */
  private setExperiences() {
    this.candidate['experiences'] = this.candidateService.candidate['trainings'].map((x: any) => {
      const experienceYearsIndex = this.globalService.experiences.findIndex(s => (s._id === x.experienceYears));
      const locationIndex = this.globalService.locations.findIndex(s => (s._id === x.location));
      return {
        experienceYears: this.globalService.experiences[experienceYearsIndex].name,
        location: this.globalService.locations[locationIndex].name,
      };
    });
  }

  /**
   * set value to candidate
   */
  private setValues() {
    this.candidate['values'] = this.candidateService.candidate['values'].map((x: any) => {
      const valueIndex = this.globalService.values.findIndex(s => (s._id === x.value));
      return {
        value: this.globalService.values[valueIndex].name,
      };
    });
  }

  /**
   * set skills to candidate
   */
  private setSkills() {
    this.candidate['skills'] = this.candidateService.candidate['skills'].map((x: any) => {
      const softSkillIndex = this.globalService.softSkills.findIndex(s => (s._id === x.softSkill));
      const managerialLevelIndex = this.globalService.managerialLevels.findIndex(s => (s._id === x.managerialLevel));
      return {
        softSkill: this.globalService.softSkills[softSkillIndex].name,
        managerialLevel: this.globalService.managerialLevels[managerialLevelIndex].name,
      };
    });
  }

  /**
   * set languages to candidate
   */
  private setLanguages() {
    this.candidate['skills'] = this.candidateService.candidate['skills'].map((x: any) => {
      const languageIndex = this.globalService.languages.findIndex(s => (s._id === x.softSkill));
      const languageLevelIndex = this.globalService.languagesLevels.findIndex(s => (s._id === x.managerialLevel));
      return {
        language: this.globalService.languages[languageIndex].name,
        languageLevel: this.globalService.languagesLevels[languageLevelIndex].name,
      };
    });
  }

}
