import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Recruiter, Function } from '../../models/classes';
import { ApiService } from '../global/api.service';
import { HttpParams } from '@angular/common/http';
import { Response } from '../../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class RecruiterService {

  recruiters: Recruiter[] = [];

  private $recruiter = new BehaviorSubject(null);
  recruiter = this.$recruiter.asObservable();

  constructor(private apiService: ApiService) { }

  unSubscribe() {
    this.$recruiter.next(null);
  }

  /**
   * create recruiter
   * @param recruiter
   */
  create(recruiter: Recruiter): Observable<Response> {
    return this.apiService.post('account-ms/recruiters', recruiter);
  }

  /**
   * get recruiter
   */
  read(search?: string): Observable<Recruiter[]> {
    let params = new HttpParams();
    if (search) {
      params = params.append('search', search);
    }
    return this.apiService.get('account-ms/recruiters', params).pipe(tap((x: any) => {
      this.recruiters = x.data.map(val => {
        return new Recruiter(val);
      });
    }));
  }

  /**
   * update recruiter by id 
   */
  update(recruiter): Observable<Response> {
    return this.apiService.put(`account-ms/recruiters/${recruiter._id}`, recruiter).pipe(tap(x => {
      this.$recruiter.next(new Recruiter(Object.assign(this.$recruiter.value.getValues(), x)));
    }));
  }

  /**
   * delete recruiter by id
   * @param id
   */
  delete(id: string): Observable<Response> {
    return this.apiService.delete(`account-ms/recruiters/${id}`).pipe(tap(x => {
      const index = this.recruiters.findIndex(x => x._id === id);
      if (index >= 0) {
        this.recruiters.splice(index, 1);
      }
      this.recruiters = [...this.recruiters];
    }));
  }

  /**
   * get recruiter by id
   * @param id
   */
  readOne(id: string): Observable<Recruiter> {
    return this.apiService.get(`account-ms/recruiters/${id}`).pipe(tap(res => {
      this.$recruiter.next(new Recruiter(res));
    }));
  }

  /**
   * update recruiter picture
   * @param languages
   */
  updatePicture(values): Observable<Response> {
    return this.apiService.put('account-ms/auth/picture', { picture: values.picture._id });
  }

  /**
   * set recruiter
   * @param value
   */
  setRecruiter(value) {
    this.$recruiter.next(value);
  }

}
