import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/core/services/global/notification.service';
import { AuthService } from 'src/app/core/services/global/auth.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  constructor(public notifService: NotificationService, public authService: AuthService) {
  }

  ngOnInit(): void {
  }

}
