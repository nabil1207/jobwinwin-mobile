import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';

import { AdvertisementRoutingModule } from './advertisement-routing.module';
import { CreateAdvertisementComponent } from './components/create/create-advertisement/create-advertisement.component';
import { ExperienceRequiredComponent } from './components/create/experience-required/experience-required.component';
import { SliderAdvertisementComponent } from './components/create/slider-advertisement/slider-advertisement.component';
import { ValidateAdvertisementComponent } from './components/create/validate-advertisement/validate-advertisement.component';
import { AdsDetailsComponent } from './components/details/ads-details/ads-details.component';
import { AdsProfileComponent } from './components/details/ads-profile/ads-profile.component';
import { ListesComponent } from './components/listes/listes.component';
import { DateComponent } from './components/update/date/date.component';
import { MissionComponent } from './components/update/mission/mission.component';
import { ProfilComponent } from './components/update/profil/profil.component';
import { TaskComponent } from './components/update/task/task.component';
import { OtherInfoComponent } from './components/update/other-info/other-info.component';
import { StatusComponent } from './components/update/status/status.component';
import { FormAdvertissementComponent } from './components/create/form-advertissement/form-advertissement.component';


@NgModule({
  declarations: [CreateAdvertisementComponent, ValidateAdvertisementComponent,
                  ExperienceRequiredComponent,
                  MissionComponent,
                  TaskComponent,
                  ProfilComponent,
                  DateComponent,
                  ListesComponent,
                  AdsProfileComponent,
                  AdsDetailsComponent,
                  SliderAdvertisementComponent,
                  OtherInfoComponent,
                  StatusComponent,
                  FormAdvertissementComponent
                ],
  imports: [
    SharedModule,
    AdvertisementRoutingModule
  ]
})
export class AdvertisementModule { }
