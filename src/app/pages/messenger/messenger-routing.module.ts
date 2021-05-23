import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessagesListingComponent } from './components/messages-listing/messages-listing.component';

const routes: Routes = [
  {
    path: '',
    component: MessagesListingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessengerRoutingModule { }
