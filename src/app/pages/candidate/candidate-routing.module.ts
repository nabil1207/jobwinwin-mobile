import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardCondidateComponent } from './components/card-condidate/card-condidate.component';

const routes: Routes = [
  {
    path: '',
    component: CardCondidateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateRoutingModule { }
