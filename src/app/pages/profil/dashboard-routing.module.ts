import { MainComponent } from './components/main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProfilComponent } from './components/add-profil/add-profil.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FinalStateComponent } from './components/final-state/final-state.component';
import { InfoPlusComponent } from './components/info-plus/info-plus.component';
import { JobInfoComponent } from './components/job-info/job-info.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { PreviewProfilComponent } from './components/preview-profil/preview-profil.component';
import { UploadVideoComponent } from './components/upload-video/upload-video.component';
import { ValuesComponent } from './components/values/values.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: PersonalInfoComponent,
        data: { title: 'Informations générales' }
      },
      {
        path: 'add-profil',
        component: AddProfilComponent,
        data: { title: 'Photo' }
      },
      {
        path: 'job-info',
        component: JobInfoComponent,
        data: { title: 'Poste souhaité' }
      },
      {
        path: 'experience',
        component: ExperienceComponent,
        data: { title: 'Expériences et formation' }
      },
      {
        path: 'info-plus',
        component: InfoPlusComponent,
        data: { title: 'Compétences' }
      },
      {
        path: 'upload-video',
        component: UploadVideoComponent,
        data: { title: 'Vidéo' }
      },
      {
        path: 'values',
        component: ValuesComponent,
        data: { title: 'Values' }
      },
      {
        path: 'final-steps',
        component: FinalStateComponent,
        data: { title: 'Dernière étape' }
      },
      {
        path: 'preview-profil',
        component: PreviewProfilComponent,
        data: { title: 'Prévisualisation' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
