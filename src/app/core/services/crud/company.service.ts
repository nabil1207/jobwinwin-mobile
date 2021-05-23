import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Response } from '../../models/interfaces';
import { ApiService } from '../global/api.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private $changes = new BehaviorSubject(false);
  changes = this.$changes.asObservable();

  constructor(private apiService: ApiService) { }

  setChanges(change) {
    this.$changes.next(change);
  }

  /**
   * update company infos
   * @param infos 
   */
  updateInfos(infos): Observable<Response> {
    return this.apiService.put('account-ms/companies/infos', infos);
  }

  /**
   * update company values
   * @param values 
   */
  updateValues(values): Observable<Response> {
    return this.apiService.put('account-ms/companies/provile/values', values);
  }

  /**
   * update social networks
   * @param socialNetwork 
   */
  updateSocialNetwork(socialNetwork): Observable<Response> {
    return this.apiService.put('account-ms/companies/profile/social-network', socialNetwork);
  }

  /**
   * update description
   * @param description 
   */
  updateDescription(description): Observable<Response> {
    return this.apiService.put('account-ms/companies/profile/description', description);
  }

  /**
   * update title
   * @param title 
   */
  updateTitle(title): Observable<Response> {
    return this.apiService.put('account-ms/companies/profile/title', title);
  }

  /**
   * update title
   * @param title 
   */
  updateLogo(logo): Observable<Response> {
    return this.apiService.put('account-ms/companies/profile/logo', { logo });
  }

}
