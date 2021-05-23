import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/core/services/global/auth.service';
import { Redirection } from 'src/app/core/utils';
import { MessagesFormComponent } from '../messages-form/messages-form.component';
import { ActivatedRoute } from '@angular/router';
import { SocketService } from 'src/app/core/services/global/socket.service';
import { Subscription } from 'rxjs';
import { PreviewAdvertisementComponent, PreviewCandidateComponent } from 'src/app/shared/components';

@Component({
  selector: 'app-messages-listing',
  templateUrl: './messages-listing.component.html',
  styleUrls: ['./messages-listing.component.scss']
})
export class MessagesListingComponent implements OnInit, OnDestroy {

  search;
  messages = [];
  subscription: Subscription;

  constructor(public modalController: ModalController, private activatedRoute: ActivatedRoute,
    private socketService: SocketService, public authService: AuthService) { }

  ngOnInit(): void {
    const { matching } = this.activatedRoute.snapshot.queryParams;
    if (matching) {
      this.openConversation(matching);
    }
    this.getLastMsg();
  }

  getLastMsg() {
    this.socketService.emit('lastMessages', { userId: this.authService.user._id });
    this.subscription = this.socketService.on('readLastMessages').subscribe(messages => {
      this.messages = messages;
      console.log(messages);
    });
  }

  /**
   * open conversation popup
   * @param matchingId
   */
  async openConversation(matchingId) {
    const modal = await this.modalController.create({
      component: MessagesFormComponent,
      componentProps: {
        matchingId
      }
    });
    this.modalController.dismiss(this.getLastMsg());
    return await modal.present();
  }

  /**
   * open profile candidate
   */
   async showCandidate(candidateId) {
    const modal = await this.modalController.create({
      component: PreviewCandidateComponent,
      componentProps: {
        candidateId
      }
    });
    this.modalController.dismiss(this.getLastMsg());
    return await modal.present();
  }

  /**
   * open advertissement
   */
  async showAdvertissement(advertissementId){
    const modal = await this.modalController.create({
      component: PreviewAdvertisementComponent,
      componentProps: {
        advertissementId
      }
    });
    this.modalController.dismiss(this.getLastMsg());
    return await modal.present();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  /**
   * go back redirection
   */
  goBack() {
    let role = this.authService.user.userRole;
    role === 'Candidate' ? Redirection.candidateDashboard() : Redirection.dashboard();
  }

}
