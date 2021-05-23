import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { GlobalService } from 'src/app/core/services/global/global.service';
import { CandidateService } from 'src/app/core/services/crud/candidate.service';
import { ToastService } from 'src/app/core/services/addapters/toast.service';
import { TransService } from 'src/app/core/services/addapters/trans.service';
import { AuthService } from 'src/app/core/services/global/auth.service';
import { Response } from 'src/app/core/models/interfaces';
import { Helper } from 'src/app/core/utils';

@Component({
  selector: 'app-langue-condidate',
  templateUrl: './langue-condidate.component.html',
  styleUrls: ['./langue-condidate.component.scss']
})
export class LangueCondidateComponent implements OnInit {

  form: FormGroup;
  languagesList = [];
  oldPercentage = 0;

  constructor(public modalController: ModalController, public globalService: GlobalService, private fb: FormBuilder,
    private candidateService: CandidateService, private toastService: ToastService, private transService: TransService,
    private authService: AuthService) {
    this.initForm();
  }

  ngOnInit(): void {
    if (this.candidateService.candidate['languages'] && this.candidateService.candidate['languages'].length > 0) {
      this.candidateService.candidate['languages'].forEach(item => {
        const languageIndex = this.globalService.languages.findIndex(x => x._id === item.language);
        const languageLevelIndex = this.globalService.languagesLevels.findIndex(x => x._id === item.languageLevel);
        this.languagesList.push({
          language: this.globalService.languages[languageIndex],
          languageLevel: this.globalService.languagesLevels[languageLevelIndex]
        });
      });
    }
    this.oldPercentage = Helper.calculePercentage(this.form.value, 0, 1.96);
  }

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

  /**
   * update soft skills
   */
  onSave() {
    const value = this.form.value;
    delete value['languages'];
    value.languages = this.languagesList.map(x => ({
      language: x.language._id,
      languageLevel: x.languageLevel._id
    }));

    this.candidateService.updateLanguage(value).subscribe((response: Response) => {
      this.authService.user = Object.assign(this.authService.user, value);
      this.toastService.success('Enregistré avec succès');
      this.candidateService.setChanges(true);
      this.modalController.dismiss();
    });
  }

}
