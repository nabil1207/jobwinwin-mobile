import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ModalController } from '@ionic/angular';
import { GlobalService } from 'src/app/core/services/global/global.service';
import { AdvertisementService } from 'src/app/core/services/crud/advertisement.service';
import { AuthService } from 'src/app/core/services/global/auth.service';

@Component({
  selector: 'app-preview-advertisement',
  templateUrl: './preview-advertisement.component.html',
  styleUrls: ['./preview-advertisement.component.scss'],
})
export class PreviewAdvertisementComponent {

  @ViewChild(IonSlides) theSlides: IonSlides;
  advertisement;
  advertissementId;
  constructor(private globalService: GlobalService, private advertisementService: AdvertisementService, public authService: AuthService, public modalController: ModalController) { }

  ionViewDidEnter(): void {
    this.getAdvertisement();
  }

  getAdvertisement() {
    if (this.advertissementId) {
      this.advertisementService.shwoAdvertissement(this.advertissementId).subscribe(async (res) => {
        this.advertisement = await res;
        console.log('From Show Advertissement', this.advertisement);
        this.checkAdvertissement();
      });
    } else {
      this.advertisement = JSON.parse(JSON.stringify(this.advertisementService.advertisement.toJson()));
      console.log('From preview', this.advertisement);
      this.checkAdvertissement();
    }
  }

  checkAdvertissement() {
    if (this.advertisement) {
      if (this.advertisement['languages']) {
        this.advertisement['languages'] = this.advertisement.languages.map(x => {
          const langIndex = this.globalService.languages.findIndex(val => val._id === x.language);
          const langLevelIndex = this.globalService.languagesLevels.findIndex(val => val._id === x.languageLevel);
          return {
            language: langIndex !== -1 ? this.globalService.languages[langIndex].name : null,
            languageLevel: langLevelIndex !== -1 ? this.globalService.languagesLevels[langLevelIndex].name : null
          };
        });
      }

      if (this.advertisement['programingLanguages']) {
        this.advertisement['programingLanguages'].language = this.advertisement['programingLanguages'].language.map(x => {
          const language = this.globalService.programmingLanguages.find(val => val._id === x);
          return language ? language.name : null;
        });
        this.advertisement['programingLanguages'].logiciel = this.advertisement['programingLanguages'].logiciel.map(x => {
          const logiciel = this.globalService.logiciels.find(val => val._id === x);
          return logiciel ? logiciel.name : null;
        });
      }

      const activitySectorIndex = this.globalService.activitySectors.findIndex(x => x._id === this.advertisement.company.activitySector);
      if (activitySectorIndex !== -1) {
        this.advertisement['activitySector'] = this.globalService.activitySectors[activitySectorIndex].name;
      }

      const levelOfStudie = this.globalService.levelOfStudies.findIndex(x => x._id === this.advertisement.levelOfStudies);
      if (levelOfStudie !== -1) {
        this.advertisement['levelOfStudie'] = this.globalService.levelOfStudies[levelOfStudie].name;
      }

      this.advertisement['typeOfTraining'] = this.advertisement['typeOfTraining'].map(x => {
        const typeOfTraining = this.globalService.typeOfTrainings.find(val => val._id === x);
        return typeOfTraining ? typeOfTraining.name : null;
      });
      // const typeOfTraining = this.globalService.typeOfTrainings.findIndex(x => x._id === this.advertisement.typeOfTraining);
      // if (typeOfTraining !== -1) {
      //   this.advertisement['typeOfTraining'] = this.globalService.typeOfTrainings[typeOfTraining].name;
      // }

      if (this.advertisement.company.values) {
        this.advertisement.company.values = this.advertisement.company.values.map(x => {
          const valueIndex = this.globalService.values.findIndex(val => val._id === x);
          return valueIndex !== -1 ? this.globalService.values[valueIndex].name : null;
        });
        console.log(this.advertisement.company.values);
      }

      this.getRepertoire('experienceYears');
      this.getRepertoire('location');
      this.getRepertoire('contract');
      this.getRepertoire('jobType');
      this.getRepertoire('jobMode');
      this.getRepertoire('managerialLevel');
      this.getRepertoire('effective');
      this.getRepertoire('language');
      this.getRepertoire('logiciel');
    }
  }
  /**
   * get repertoires
   * @param key
   */
  private getRepertoire(key: string) {
    let val;
    switch (key) {
      case 'contract':
        val = this.globalService.contracts.find(x => x._id === this.advertisement[key]);
        break;
      case 'jobType':
        val = this.globalService.jobTypes.find(x => x._id === this.advertisement[key]);
        break;
      case 'jobMode':
        val = this.globalService.jobModes.find(x => x._id === this.advertisement[key]);
        break;
      case 'managerialLevel':
        val = this.globalService.managerialLevels.find(x => x._id === this.advertisement[key]);
        break;
      case 'effective':
        val = this.globalService.effectives.find(x => x._id === this.advertisement[key]);
        break;
      case 'experienceYears':
        val = this.globalService.experiences.find(x => x._id === this.advertisement[key]);
        break;
      case 'location':
        val = this.globalService.locations.find(x => x._id === this.advertisement[key]);
        break;
      case 'levelOfStudies':
        val = this.globalService.levelOfStudies.find(x => x._id === this.advertisement[key]);
        break;
      case 'typeOfTraining':
        val = this.globalService.typeOfTrainings.find(x => x._id === this.advertisement[key]);
        break;
      case 'language':
        val = this.globalService.languages.find(x => x._id === this.advertisement[key]);
        break;
      case 'logiciel':
        val = this.globalService.logiciels.find(x => x._id === this.advertisement[key]);
        break;
    }
    if (val) {
      this.advertisement[key] = val.name;
    }
  }

  redirectTo(url: string) {
    window.open('https://www.facebook.com/' + url, '_blank');
  }

}
