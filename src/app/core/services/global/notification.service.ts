import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notifications = [];
  countNotif = 0;

  constructor(private apiService: ApiService) { }


  notificationShowing(): Observable<Response> {
    return this.apiService.put('realtime-ms/notifications/view');
  }

}
