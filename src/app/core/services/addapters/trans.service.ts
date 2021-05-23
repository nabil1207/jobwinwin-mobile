import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TransService {

  constructor(private translateService: TranslateService) { }

  /**
   * translate
   * @param value
   * @param prefix
   */
  translate(value: string, prefix = 'api.'): string {
    return this.translateService.instant(prefix + value);
  }

}
