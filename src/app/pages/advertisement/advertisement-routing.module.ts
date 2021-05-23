import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAdvertisementComponent } from './components/create/create-advertisement/create-advertisement.component';
import { ExperienceRequiredComponent } from './components/create/experience-required/experience-required.component';
import { FormAdvertissementComponent } from './components/create/form-advertissement/form-advertissement.component';
import { SliderAdvertisementComponent } from './components/create/slider-advertisement/slider-advertisement.component';
import { ValidateAdvertisementComponent } from './components/create/validate-advertisement/validate-advertisement.component';
import { AdsDetailsComponent } from './components/details/ads-details/ads-details.component';
import { AdsProfileComponent } from './components/details/ads-profile/ads-profile.component';
import { ListesComponent } from './components/listes/listes.component';
const routes: Routes = [
  {
    path: '',
    component: ListesComponent
  },
  {
    path: 'slider-advertisement',
    component: SliderAdvertisementComponent
  },
  {
    path: 'form',
    component: FormAdvertissementComponent,
    children: [
      {
        path: 'create-advertisement',
        component: CreateAdvertisementComponent,
        data: { pagelink: '/dashboard/advertisement' }
      },
      {
        path: 'experience-required',
        component: ExperienceRequiredComponent,
        data: { pagelink: '/dashboard/advertisement/form/create-advertisement' }
      },
      {
        path: 'validate-advertisement',
        component: ValidateAdvertisementComponent,
        data: { pagelink: '/dashboard/advertisement/form/experience-required' }
      },
    ]
  },
  {
    path: 'detail-annonce/:id',
    component: AdsDetailsComponent
  },
  {
    path: 'detail-profile/:id',
    component: AdsProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvertisementRoutingModule { }
