import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { JsonWebToken } from '../../utils';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (request.url.includes(environment.api_url)) {
      const headersConfig: any = { 'Access-Control-Allow-Origin': '*' };
      const token = JsonWebToken.getToken();
      if (token) {
        headersConfig['Authorization'] = `Bearer ${token}`;
      }
      request = request.clone({ setHeaders: headersConfig });
    }

    return next.handle(request).pipe(
      catchError(error => {
        switch (error.status) {
          case 401:
            //todo if ! auth module
            console.log('todo : refresh token');
            break;
        }
        throw error;
      })
    );

  }

}
