import { Component, OnInit, OnDestroy } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { NotificationService } from 'src/app/core/services/global/notification.service';
import { SocketService } from 'src/app/core/services/global/socket.service';
import { AuthService } from 'src/app/core/services/global/auth.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  constructor(private socketService: SocketService, private notifService: NotificationService,
    private authService: AuthService, private localNotifications: LocalNotifications, public platform: Platform) {
    socketService.connection();
  }

  ngOnInit(): void {
    this.socketService.on('advertisementNotifications').subscribe(res => {
      this.notifService.countNotif = res.count;
      console.log(res);
      this.notifService.notifications = res.notifications.map((x: any) => {
        if (x.type === 'match') {
          const userName = this.authService.user._id === x.candidate._id ? {
            firstName: x.recruiter.firstName,
            lastName: x.recruiter.lastName,
          } : {
            firstName: x.candidate.firstName,
            lastName: x.candidate.lastName,
          };
          return Object.assign(userName, {
            time: x.time, type: x.type, _id: x._id
          });
        }
        this.platform.ready().then(() => {
            if (!x.viewed) {
              this.localNotifications.schedule({
                id: x._id,
                title: 'Jobwinwin',
                text: 'Le statut de votre annonce a été modifier',
                sound: this.setSound(),
              });
            }
          });
        return x;
      });
    }, (err) => {
      console.log(err);
    });
    this.socketService.on('newUserNotifications').subscribe(res => {
      this.platform.ready().then(() => {
        if (!res.viewed) {
          this.localNotifications.schedule({
            id: res._id,
            title: 'Jobwinwin',
            text: 'Une nouvelle annonce a été créée',
            sound: this.setSound(),
          });
        }
      });
      // this.localNotifications.schedule({
      //   id: res._id,
      //   title: 'Jobwinwin',
      //   text: `Votre annonce de DEV a été validée vous pouvez commencer à matcher avec des candidats`,
      //   sound: this.setSound(),
      // });
      console.log('push notifications');
    }, (err) => {
      console.log(err);
    });
  }

  setSound() {
    if (this.platform.is('android')) {
      return 'file://assets/sounds/shame.mp3'
    } else {
      return 'file://assets/sounds/shame.mp3'
    }
  }

  // delayed_notification() {
  //   this.localNotifications.schedule({
  //     id: 1,
  //     title: 'Local ILocalNotification Example',
  //     text: 'Single ILocalNotification',
  //     sound: 'file://assets/mp3/goes-without-saying-608.mp3',
  //   });
  // }

  ngOnDestroy() {
    this.socketService.deconnexion();
  }

}
