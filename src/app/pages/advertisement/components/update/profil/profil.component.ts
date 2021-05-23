import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { GlobalService } from 'src/app/core/services/global/global.service';
import { AdvertisementService } from 'src/app/core/services/crud/advertisement.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  form: FormGroup;
  softSkills = [];
  maxLenght = false;
  languagesList = [];
  programingLanguages = [];
  programs = [];

  constructor(public modalController: ModalController, private fb: FormBuilder, public globalService: GlobalService,
    private advertisementService: AdvertisementService) {
    this.initForm();
  }

  ngOnInit(): void {
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
    if (this.advertisementService.advertisement['programingLanguages']) {
      this.advertisementService.advertisement['programingLanguages']['language'].forEach(item => {
        const index = this.programingLanguages.findIndex(x => x._id === item);
        if (index !== -1) {
          this.programingLanguages[index]['checked'] = true;
        }
      });
      this.advertisementService.advertisement['programingLanguages']['logiciel'].forEach(item => {
        const index = this.programs.findIndex(x => x._id === item);
        if (index !== -1) {
          this.programs[index]['checked'] = true;
        }
      });
    }
    if (this.advertisementService.advertisement['skills'] && this.advertisementService.advertisement['skills'].length > 0) {
      this.advertisementService.advertisement['skills'].forEach(item => {
        const index = this.softSkills.findIndex(x => x._id === item);
        if (index !== -1) {
          this.softSkills[index]['checked'] = true;
        }
      });
    }
  }

  ionViewDidEnter(): void {
    this.form.patchValue(this.advertisementService.advertisement);
  }

  close() {
    this.modalController.dismiss();
  }

  /**
   * init profile form
   */
  private initForm(): void {
    this.form = this.fb.group({
      prerequisite: new FormControl(this.advertisementService.advertisement.prerequisite, Validators.required),
      skills: new FormControl(this.advertisementService.advertisement.skills ? this.advertisementService.advertisement.skills : []),
      languages: new FormGroup({
        language: new FormControl(null),
        languageLevel: new FormControl(null)
      }),
      programingLanguages: new FormGroup({
        language: new FormControl(this.advertisementService.advertisement.programingLanguages ? this.advertisementService.advertisement.programingLanguages['language'] : []),
        logiciel: new FormControl(this.advertisementService.advertisement.programingLanguages ? this.advertisementService.advertisement.programingLanguages['logiciel'] : [])
      }),
      typeOfTraining: new FormControl(this.advertisementService.advertisement.typeOfTraining ? this.advertisementService.advertisement.typeOfTraining : []),
      levelOfStudies: new FormControl(this.advertisementService.advertisement.levelOfStudies ? this.advertisementService.advertisement.levelOfStudies : null),
      experienceYears: new FormControl(this.advertisementService.advertisement.experienceYears)
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
    const value = this.form.value;
    value['languages'] = this.languagesList.map(x => ({
      language: x.language._id,
      languageLevel: x.languageLevel._id
    }));
    this.advertisementService.updateProfile(this.advertisementService.advertisement._id, value).subscribe(res => {
      this.advertisementService.advertisement = Object.assign(this.advertisementService.advertisement, value);
      this.advertisementService.setChanges();
      this.close();
    });
  }
}
