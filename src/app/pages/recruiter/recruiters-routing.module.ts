import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { DetailsComponent } from './components/details/details.component';
import { ListingComponent } from './components/listing/listing.component';

const routes: Routes = [
  {
    path: '',
    component: ListingComponent
  },
  {
    path: 'create-recruiter',
    component: CreateComponent
  },
  {
    path: 'detail-recruiter/:id',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruitersRoutingModule { }
