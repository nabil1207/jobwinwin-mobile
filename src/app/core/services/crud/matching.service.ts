import { Injectable } from '@angular/core';
import { Matching } from '../../models/classes/matching';
import { Observable } from 'rxjs';
import { ApiService } from '../global/api.service';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatchingService {

  matching: Matching[] = [];

  constructor(private apiService: ApiService) { }

  /**
   * get wins
   */
  getPlug(advertisementId = null) {
    let httpParams = new HttpParams();
    if (advertisementId) {
      httpParams = httpParams.append('advertisementId', advertisementId);
    }
    return this.apiService.get('matching-ms/matchings/plug/show', httpParams);
  }

  /**
   * create win
   * @param value
   */
  createWin(value) {
    console.log(value);
    return this.apiService.post('matching-ms/matchings', value);
  }

  /**
   * get wins
   */
  getWins(): Observable<Matching> {
    return this.apiService.get('matching-ms/matchings');
  }

  /**
   * delete wins
   * @param matchingId
   */
  deleteWin(matchingId): Observable<Response> {
    return this.apiService.delete(`matching-ms/matchings/${matchingId}`);
  }

  /**
   * add to blacklist
   * @param value
   */
  addToBlackList(value) {
    return this.apiService.post(`matching-ms/black-lists`, value);
  }

}
