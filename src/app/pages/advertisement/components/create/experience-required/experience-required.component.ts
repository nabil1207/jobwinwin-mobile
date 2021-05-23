import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { GlobalService } from 'src/app/core/services/global/global.service';
import { Redirection, Helper } from 'src/app/core/utils';
import { AdvertisementService } from 'src/app/core/services/crud/advertisement.service';
import { ModalController } from '@ionic/angular';
import { Advertisement } from 'src/app/core/models/classes';
import { AuthService } from 'src/app/core/services/global/auth.service';

@Component({
  selector: 'app-experience-required',
  templateUrl: './experience-required.component.html',
  styleUrls: ['./experience-required.component.scss']
})
export class ExperienceRequiredComponent implements OnInit {

  form: FormGroup;
  languagesList = [];
  oldPercentage = 0;

  constructor(private fb: FormBuilder, public globalService: GlobalService, private authService: AuthService,
    public advertisementService: AdvertisementService, public modalController: ModalController) {
    this.initForm();
  }

  ngOnInit() {
    if (this.advertisementService.advertisement['languages'] && this.advertisementService.advertisement['languages'].length > 0) {
      this.advertisementService.advertisement['languages'].forEach(item => {
        const languageIndex = this.globalService.languages.findIndex(x => x._id === item.language);
        const languageLevelIndex = this.globalService.languagesLevels.findIndex(x => x._id === item.languageLevel);
        this.languagesList.push({
          language: this.globalService.languages[languageIndex],
          languageLevel: this.globalService.languagesLevels[languageLevelIndex]
        });
      });
    }
    // this.oldPercentage = Helper.calculePercentage(Object.assign(this.form.value, { languages: this.languagesList }), 0, 4.16);
  }

  /**
   * init experience form
   */
  private initForm(): void {
    this.form = this.fb.group({
      skills: new FormControl(this.advertisementService.advertisement.skills ? this.advertisementService.advertisement.skills : []),
      languages: new FormGroup({
        language: new FormControl(null),
        languageLevel: new FormControl(null)
      }),
      programingLanguages: new FormGroup({
        language: new FormControl(this.advertisementService.advertisement.programingLanguages ? this.advertisementService.advertisement.programingLanguages['language'] : []),
        logiciel: new FormControl(this.advertisementService.advertisement.programingLanguages ? this.advertisementService.advertisement.programingLanguages['logiciel'] : [])
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
   * add experiences
   */
  onSave() {
    let value = this.form.value;
    delete value['languages'];
    value.languages = this.languagesList.map(x => ({
      language: x.language._id,
      languageLevel: x.languageLevel._id
    }));
    const percentage = Helper.calculePercentage(value, (this.advertisementService.getPercentage() ? Number(this.advertisementService.getPercentage()) : 0) - Number(this.oldPercentage), 4.16);
    this.advertisementService.setPercentage(percentage);
    this.advertisementService.advertisement.languages = value.languages;
    this.advertisementService.advertisement.programingLanguages = value.programingLanguages;
    this.advertisementService.advertisement.skills = value.skills;
    this.advertisementService.advertisement.company = this.authService.user.company;
    Redirection.validateAdvertisement();
  }

}
