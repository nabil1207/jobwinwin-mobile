import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessengerRoutingModule } from './messenger-routing.module';
import { MessagesListingComponent } from './components/messages-listing/messages-listing.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MessagesFormComponent } from './components/messages-form/messages-form.component';


@NgModule({
  declarations: [MessagesListingComponent, MessagesFormComponent],
  imports: [
    SharedModule,
    MessengerRoutingModule
  ]
})
export class MessengerModule { }
