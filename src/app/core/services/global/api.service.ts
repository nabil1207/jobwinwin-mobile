import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { ToastService } from '../addapters/toast.service';
import { TransService } from '../addapters/trans.service';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient, private toastService: ToastService, private transService: TransService) { }

  /**
   * throw exception
   * @param error
   */
  private formatErrors = (response): any => {
    // //global error message
    this.toastService.error(this.transService.translate(response.error.message));
    return throwError(response);
  }

  /**
   * call ws via method post
   * @param path
   * @param body
   */
  post(path: string, body: any = {}): Observable<any> {
    return this.http.post(`${environment.api_url}${path}`, body, { observe: 'response' }).pipe(map((response: any) => {
      return response.body;
    }), catchError(this.formatErrors));
  }

  /**
   * call ws via method patch
   * @param path
   * @param body
   */
  patch(path: string, body: any = {}): Observable<any> {
    return this.http.patch(`${environment.api_url}${path}`, body, { observe: 'response' }).pipe(map(response => {
      return response.body;
    }), catchError(this.formatErrors));
  }

  /**
   * call ws via method put
   * @param path
   * @param body
   */
  put(path: string, body: any = {}): Observable<any> {
    delete body['id'];
    return this.http.put(`${environment.api_url}${path}`, body, { observe: 'response' }).pipe(map(response => {
      return response.body;
    }), catchError(this.formatErrors));
  }

  /**
   * call ws via method delete
   * @param path
   */
  delete(path): Observable<any> {
    return this.http.delete(`${environment.api_url}${path}`, { observe: 'response' }).pipe(map(response => {
      return response.body;
    }), catchError(this.formatErrors));
  }

  /**
   * call ws via method get
   * @param path
   * @param params
   */
  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    let option = {};
    if (params) {
      option = { params };
    }
    return this.http.get(`${environment.api_url}${path}`, option);
  }

}
