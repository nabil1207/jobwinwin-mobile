import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationRoutingModule } from './notification-routing.module';
import { NotificationsComponent } from './notifications.component';


@NgModule({
  declarations: [NotificationsComponent],
  imports: [
    SharedModule,
    NotificationRoutingModule
  ]
})
export class NotificationModule { }
