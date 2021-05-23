import { Injectable } from '@angular/core';
import { ApiService } from '../global/api.service';
import { Observable } from 'rxjs';
import { Response } from '../../models/interfaces';
import { Contact } from '../../models/classes';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private apiService: ApiService) { }

  /**
   * contact admin
   * @param contact
   */
  contact(contact: Contact): Observable<Response> {
    return this.apiService.post('contact-ms/contacts', contact);
  }

}
