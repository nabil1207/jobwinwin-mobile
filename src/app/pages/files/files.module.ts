import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';

import { FilesRoutingModule } from './files-routing.module';
import { FilesCondidateComponent } from './components/files-condidate/files-condidate.component';
import { FilesRecruiterComponent } from './components/files-recruiter/files-recruiter.component';


@NgModule({
  declarations: [FilesCondidateComponent, FilesRecruiterComponent],
  imports: [
    SharedModule,
    FilesRoutingModule
  ]
})
export class FilesModule { }
