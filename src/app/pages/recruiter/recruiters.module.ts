import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { RecruitersRoutingModule } from './recruiters-routing.module';
import { CreateComponent } from './components/create/create.component';
import { DetailsComponent } from './components/details/details.component';
import { ListingComponent } from './components/listing/listing.component';

@NgModule({
  declarations: [ListingComponent, CreateComponent, DetailsComponent],
  imports: [
    SharedModule,
    RecruitersRoutingModule
  ]
})

export class RecruitersModule { }
