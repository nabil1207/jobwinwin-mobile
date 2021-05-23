import { NgModule } from '@angular/core';

import { CandidateRoutingModule } from './candidate-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardCondidateComponent } from './components/card-condidate/card-condidate.component';
import { CvCondidateComponent } from './components/update/cv-condidate/cv-condidate.component';
import { ExperienceCondidateComponent } from './components/update/experience-condidate/experience-condidate.component';
import { FormationCondidateComponent } from './components/update/formation-condidate/formation-condidate.component';
import { LangueCondidateComponent } from './components/update/langue-condidate/langue-condidate.component';
import { LinksCondidateComponent } from './components/update/links-condidate/links-condidate.component';
import { ObjectifCondidateComponent } from './components/update/objectif-condidate/objectif-condidate.component';
import { ProfilCondidateComponent } from './components/update/profil-condidate/profil-condidate.component';
import { SkilsCondidateComponent } from './components/update/skils-condidate/skils-condidate.component';
import { VideoCondidateComponent } from './components/update/video-condidate/video-condidate.component';


@NgModule({
  declarations: [CardCondidateComponent,
    ProfilCondidateComponent,
    ObjectifCondidateComponent,
    VideoCondidateComponent,
    CvCondidateComponent,
    ExperienceCondidateComponent,
    FormationCondidateComponent,
    LangueCondidateComponent,
    LinksCondidateComponent,
    SkilsCondidateComponent],
  imports: [
    SharedModule,
    CandidateRoutingModule
  ]
})
export class CandidateModule { }
