import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DateComponent } from '../../update/date/date.component';
import { MissionComponent } from '../../update/mission/mission.component';
import { ProfilComponent } from '../../update/profil/profil.component';
import { TaskComponent } from '../../update/task/task.component';
import { AdvertisementService } from 'src/app/core/services/crud/advertisement.service';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/core/services/global/global.service';
import { OtherInfoComponent } from '../../update/other-info/other-info.component';
import { StatusComponent } from '../../update/status/status.component';
import { AuthService } from 'src/app/core/services/global/auth.service';

@Component({
  selector: 'app-ads-details',
  templateUrl: './ads-details.component.html',
  styleUrls: ['./ads-details.component.scss']
})
export class AdsDetailsComponent implements OnDestroy {

  languages = [];
  programingLanguages = [];
  infos = {
    contract: null,
    jobType: null,
    jobMode: null,
    managerialLevel: null,
    effective: null
  };
  constructor(public modalController: ModalController, public advertisementService: AdvertisementService,
              private activatedRoute: ActivatedRoute, private globalService: GlobalService, public authService: AuthService) { }

  ionViewDidEnter(): void {
    const { id } = this.activatedRoute.snapshot.params;
    if (id) {
      this.advertisementService.readOne(id).subscribe(res => {
        this.setData(res);
      });
    }
    // change values in popuo
    this.advertisementService.changed.subscribe(res => {
      this.setData(this.advertisementService.advertisement);
    });
  }

  private setData(res) {
    if (res) {
      if (res.languages) {
        this.languages = [];
        res.languages.forEach((x: any) => {
          const languageIndex = this.globalService.languages.findIndex(val => val._id === x.language);
          const languageLevelIndex = this.globalService.languagesLevels.findIndex(val => val._id === x.languageLevel);
          console.log(languageIndex, languageLevelIndex);
          this.languages.push({
            language: this.globalService.languages[languageIndex],
            languageLevel: this.globalService.languagesLevels[languageLevelIndex],
          });
        });
      }
      if (res.programingLanguages) {
        this.programingLanguages = [];
        res.programingLanguages.language.forEach(item => {
          const val = this.globalService.programmingLanguages.find(x => x._id === item);
          if (val) {
            this.programingLanguages.push(val.name);
          }
        });
        res.programingLanguages.logiciel.forEach(item => {
          const val = this.globalService.logiciels.find(x => x._id === item);
          if (val) {
            this.programingLanguages.push(val.name);
          }
        });
      }

      this.infos = {
        contract: this.globalService.contracts.find(x => x._id === this.advertisementService.advertisement.contract),
        jobType: this.globalService.jobTypes.find(x => x._id === this.advertisementService.advertisement.jobType),
        jobMode: this.globalService.jobModes.find(x => x._id === this.advertisementService.advertisement.jobMode),
        managerialLevel: this.globalService.managerialLevels.find(x => x._id === this.advertisementService.advertisement.managerialLevel),
        effective: this.globalService.effectives.find(x => x._id === this.advertisementService.advertisement.effective)
      };
    }
  }

  async openMission() {
    const modal = await this.modalController.create({
      component: MissionComponent
    });
    return await modal.present();
  }

  async openTasks() {
    const modal = await this.modalController.create({
      component: TaskComponent
    });
    return await modal.present();
  }

  async openProfile() {
    const modal = await this.modalController.create({
      component: ProfilComponent
    });
    return await modal.present();
  }

  async openDate() {
    const modal = await this.modalController.create({
      component: DateComponent
    });
    return await modal.present();
  }

  async openOtherInfo() {
    const modal = await this.modalController.create({
      component: OtherInfoComponent
    });
    return await modal.present();
  }

  async openStatus() {
    const modal = await this.modalController.create({
      component: StatusComponent
    });
    return await modal.present();
  }

  ngOnDestroy() {
    this.advertisementService.advertisement = null;
  }

}
