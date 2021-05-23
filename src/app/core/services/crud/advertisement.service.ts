import { Injectable } from '@angular/core';
import { Advertisement } from '../../models/classes';
import { Observable, BehaviorSubject } from 'rxjs';
import { ApiService } from '../global/api.service';
import { tap } from 'rxjs/operators';
import { Response } from '../../models/interfaces';
import { HttpParams } from '@angular/common/http';
import { ToastService } from '../addapters/toast.service';
import { TransService } from '../addapters/trans.service';
import { AuthService } from '../global/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {

  advertisements = [];
  advertisement: Advertisement = new Advertisement({});
  private $percentage = new BehaviorSubject(0);
  percentage = this.$percentage.asObservable();
  private $changed = new BehaviorSubject(false);
  changed = this.$changed.asObservable();

  constructor(private apiService: ApiService, private toastService: ToastService, private transService: TransService, private authService: AuthService) { }

  setPercentage(percentage) {
    this.$percentage.next(percentage);
  }

  getPercentage() {
    return this.$percentage.value;
  }

  setChanges() {
    this.$changed.next(true);
  }

  /**
   * add advetisement
   */
  addAdvertisement(): Observable<Response> {
    return this.apiService.post('matching-ms/advertisements', this.advertisement.toJson()).pipe(tap(x => {
      this.toastService.success('Annonce créée avec succès');
    }));
  }

  /**
   * get advertisements
   * @param search
   */
  read(search?: string, limit: number = null): Observable<Response> {
    let params = new HttpParams;
    if (search) {
      params = params.append('search', search);
    }
    if (limit > 0) {
      params = params.append('limit', limit.toString());
    }
    return this.apiService.get('matching-ms/advertisements', params).pipe(tap(x => {
      this.advertisements = x.data;
      console.log(x.data);
    }));
  }

  /**
   * get only advertissement by his creator
   * @param id 
   * @returns
   */
  getAdvetissementByCreator() {
    return this.apiService.get('matching-ms/advertisements/all/active');
  }

  /**
   * get preview advertissement
   * @param id 
   * @returns
   */
  shwoAdvertissement(advertissementId) {
    return this.apiService.get(`matching-ms/advertisements/${advertissementId}`);
  }

  /**
   * get advertisements
   * @param search
   */
  readOne(id: string): Observable<Advertisement> {
    return this.apiService.get(`matching-ms/advertisements/${id}`).pipe(tap(x => {
      this.advertisement = x;
    }))
  }
  /**
   * get advertisements
   * @param search
   */
  readDetails(id: string): Observable<Advertisement> {
    return this.apiService.get(`matching-ms/advertisements/${id}/details`).pipe(tap(x => {
      this.advertisement = x;
    }))
  }

  /**
   * update missions
   * @param advertisementId 
   * @param missions 
   */
  updateMissions(advertisementId: string, values): Observable<Response> {
    return this.apiService.put(`matching-ms/advertisements/${advertisementId}/missions`, values).pipe(tap(x => {
      this.advertisement = Object.assign(this.advertisement, values);
      this.toastService.success(this.transService.translate('update_success'));
    }));
  }

  /**
   *  update started date
   * @param advertisementId 
   * @param startedDate 
   */
  updateStartedDate(advertisementId: string, values): Observable<Response> {
    return this.apiService.put(`matching-ms/advertisements/${advertisementId}/started-date`, values).pipe(tap(x => {
      this.advertisement = Object.assign(this.advertisement, values);
      this.toastService.success(this.transService.translate('update_success'));
    }));
  }

  updateStatus(advertisementId: string, values): Observable<Response> {
    return this.apiService.put(`matching-ms/advertisements/${advertisementId}/status`, values).pipe(tap(x => {
      this.advertisement = Object.assign(this.advertisement, values);
      this.toastService.success(this.transService.translate('update_success'));
    }));
  }

  /**
   *  update tasks
   * @param advertisementId 
   * @param startedDate 
   */
  updateTasks(advertisementId: string, values): Observable<Response> {
    return this.apiService.put(`matching-ms/advertisements/${advertisementId}/tasks`, values).pipe(tap(x => {
      this.advertisement = Object.assign(this.advertisement, values);
      this.toastService.success(this.transService.translate('update_success'));
    }));
  }

  /**
   *  update profile
   * @param advertisementId 
   * @param startedDate 
   */
  updateProfile(advertisementId: string, values): Observable<Response> {
    return this.apiService.put(`matching-ms/advertisements/${advertisementId}/profile`, values).pipe(tap(x => {
      this.advertisement = Object.assign(this.advertisement, values);
      this.toastService.success(this.transService.translate('update_success'));
    }));
  }

}
