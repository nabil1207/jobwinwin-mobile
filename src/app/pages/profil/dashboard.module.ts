import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddProfilComponent } from './components/add-profil/add-profil.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FinalStateComponent } from './components/final-state/final-state.component';
import { InfoPlusComponent } from './components/info-plus/info-plus.component';
import { JobInfoComponent } from './components/job-info/job-info.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { PreviewProfilComponent } from './components/preview-profil/preview-profil.component';
import { UploadVideoComponent } from './components/upload-video/upload-video.component';
import { ValuesComponent } from './components/values/values.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    PersonalInfoComponent,
    AddProfilComponent,
    JobInfoComponent,
    ExperienceComponent,
    InfoPlusComponent,
    UploadVideoComponent,
    ValuesComponent,
    FinalStateComponent,
    PreviewProfilComponent,
    MainComponent,
  ],
  imports: [
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
