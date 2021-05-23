import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Redirection, Helper } from 'src/app/core/utils';
import { GlobalService } from 'src/app/core/services/global/global.service';
import { CandidateService } from 'src/app/core/services/crud/candidate.service';
import { AuthService } from 'src/app/core/services/global/auth.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-info-plus',
  templateUrl: './info-plus.component.html',
  styleUrls: ['./info-plus.component.scss']
})
export class InfoPlusComponent implements OnInit {

  form: FormGroup;
  languagesList = [];
  value;
  fileUploder = false;
  oldPercentage = 0;

  constructor(private fb: FormBuilder, public globalService: GlobalService, public candidateService: CandidateService,
    public authService: AuthService, private router: Router) {
    this.initForm();
  }

  ngOnInit() {
    this.value = { file: this.candidateService.candidate ? this.candidateService.candidate['cv'] : null, type: 'simple-cv' };
    if (this.candidateService.candidate['languages'] && this.candidateService.candidate['languages'].length > 0) {
      console.log(this.candidateService.candidate['languages']);
      this.candidateService.candidate['languages'].forEach(item => {
        const languageIndex = this.globalService.languages.findIndex(x => x._id === item.language);
        const languageLevelIndex = this.globalService.languagesLevels.findIndex(x => x._id === item.languageLevel);
        this.languagesList.push({
          language: this.globalService.languages[languageIndex],
          languageLevel: this.globalService.languagesLevels[languageLevelIndex]
        });
      });
    }
    if (this.candidateService.candidate['programingLanguages']) {
      console.log(this.candidateService.candidate['programingLanguages']['language']);
    }
    this.oldPercentage = Helper.calculePercentage(Object.assign(this.form.value, { languages: this.languagesList }), 0, 1.96);
  }

  /**
   * init form
   */
  private initForm(): void {
    this.form = this.fb.group({
      languages: new FormGroup({
        language: new FormControl(null),
        languageLevel: new FormControl(null)
      }),
      programingLanguages: new FormGroup({
        language: new FormControl(this.candidateService.candidate['programingLanguages'] ? this.candidateService.candidate['programingLanguages']['language'] : []),
        logiciel: new FormControl(this.candidateService.candidate['programingLanguages'] ? this.candidateService.candidate['programingLanguages']['logiciel'] : [])
      }),
      cv: new FormControl(this.candidateService.candidate['cv'], Validators.required),
      webSite: new FormControl(this.candidateService.candidate['webSite']),
      blog: new FormControl(this.candidateService.candidate['blog']),
      linkedin: new FormControl(this.candidateService.candidate['linkedin']),
      instagram: new FormControl(this.candidateService.candidate['instagram']),
      twitter: new FormControl(this.candidateService.candidate['twitter']),
      facebook: new FormControl(this.candidateService.candidate['facebook'])
    });
  }

  addLanguage() {
    const value = this.form.get('languages').value;
    if (value) {
      const languageIndex = this.globalService.languages.findIndex(x => x._id === value.language);
      const languageLevelIndex = this.globalService.languagesLevels.findIndex(x => x._id === value.languageLevel);
      this.languagesList.push({
        language: this.globalService.languages[languageIndex],
        languageLevel: this.globalService.languagesLevels[languageLevelIndex]
      });
      this.form.get('languages').reset();
    }
  }

  deleteLanguage(i: number) {
    this.languagesList.splice(i, 1);
  }

  fileChanges(value) {
    this.form.patchValue({
      cv: value
    });
    this.fileUploder = true;
  }

  onSave(): void {
    let value = this.form.value;
    delete value['languages'];
    value.languages = this.languagesList.map(x => ({
      language: x.language._id,
      languageLevel: x.languageLevel._id
    }));
    const percentage = Helper.calculePercentage(value, (this.authService.user.percentage ? Number(this.authService.user.percentage) : 0) - Number(this.oldPercentage), 1.96);
    console.log('New percent : ', percentage);
    this.candidateService.changeInfos(Object.assign(value, {
      currentStep: 5,
      percentage: (Math.round(percentage * 100) / 100).toFixed(2)
    })).subscribe(res => {
      console.log(res);
      this.candidateService.candidate = res;
      this.authService.user = res;
      this.candidateService.setPercentage(this.authService.user.percentage);
      Redirection.values();
    });
  }

}
