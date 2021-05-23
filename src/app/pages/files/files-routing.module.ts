import { FilesRecruiterComponent } from './components/files-recruiter/files-recruiter.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilesCondidateComponent } from './components/files-condidate/files-condidate.component';

const routes: Routes = [
  {
    path: 'plug-recruiter',
    component: FilesCondidateComponent
  },
  {
    path: '',
    component: FilesRecruiterComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilesRoutingModule { }
