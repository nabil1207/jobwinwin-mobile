import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { ApiService } from './api.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  socket;
  userId;

  constructor(private authService: AuthService, private apiService: ApiService) { }

  /**
   * connection ws
   */
  connection() {
    this.socket = io(environment.SOCKET_ENDPOINT, {
      query: {
        userId: this.authService.user._id
      }
    });
  }

  deconnexion() {
    this.socket.disconnect();
  }

  // signaler(userId) {
  //   return this.apiService.put(`matching-ms/black-lists/${userId}`);
  // }

  /**
   * send new event
   * @param event 
   * @param data 
   */
  emit(event: string, data: any) {
    this.userId = data.userId;
    console.log(this.userId);
    this.socket.emit(event, data);
  }

  /**
   * listen to event
   * @param event
   */
  on(event: string) {
    return Observable.create(observer => {
      this.socket.on(event, data => {
        observer.next(data);
      });
    })
  }

}
