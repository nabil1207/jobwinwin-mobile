import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, ModalController } from '@ionic/angular';
import { SocketService } from 'src/app/core/services/global/socket.service';
import { AuthService } from 'src/app/core/services/global/auth.service';

@Component({
  selector: 'app-messages-form',
  templateUrl: './messages-form.component.html',
  styleUrls: ['./messages-form.component.scss']
})
export class MessagesFormComponent implements OnInit {

  matchingId;
  sender;
  receiver;
  messages = [];
  newMsg: string;
  @ViewChild('content') private content: any;

  constructor(public modalController: ModalController, private socketService: SocketService, public authService: AuthService) { }

  ngOnInit(): void {
    this.socketService.emit('getDiscussion', { matchingId: this.matchingId });
    this.socketService.on('matchingMessage').subscribe(resp => {
      console.log(resp)
      // todo this.messages = resp.messages
      this.sender = this.authService.user._id === resp.matching.candidate._id ? resp.matching.candidate : resp.matching.recruiter;
      this.receiver = this.sender._id === resp.matching.candidate._id ? resp.matching.recruiter : resp.matching.candidate;
      this.messages = resp.messages;
    });
    this.socketService.on('getNewMessage').subscribe(resp => {
      if (resp.matching === this.matchingId) {
        this.messages.push(Object.assign(resp, {
          sender: this.authService.user._id === resp.sender && this.sender._id === resp.sender ? this.sender :  this.receiver ,
          receiver: this.authService.user._id === resp.sender && this.sender._id === resp.sender  ? this.sender :  this.receiver
        }));
      }
    });
    
  }

  /**
   * send message
   */
  sendMessage() {
    this.socketService.emit('newMessage', {
      matching: this.matchingId,
      message: this.newMsg,
      sender: this.sender._id,
      receiver: this.receiver._id
    });
    this.newMsg = '';
    this.scrollToBottomOnInit();
  }

  ionViewDidEnter() {
    this.scrollToBottomOnInit();
  }

  scrollToBottomOnInit() {
    setTimeout(() => {
      this.content.scrollToBottom(300);
    });
  }

}
