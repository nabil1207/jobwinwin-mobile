import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';

import { WinsRoutingModule } from './wins-routing.module';
import { WinsComponent } from './wins.component';


@NgModule({
  declarations: [WinsComponent],
  imports: [
    SharedModule,
    WinsRoutingModule
  ]
})
export class WinsModule { }
