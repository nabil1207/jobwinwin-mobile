import { Injectable } from '@angular/core';
import { ApiService } from '../global/api.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ToastService } from '../addapters/toast.service';
import { TransService } from '../addapters/trans.service';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private apiService: ApiService, private toastService: ToastService) { }

   /**
   * create file
   * @param file
   */
  create(file: any, isBase64 = false): Observable<any> {
    let data;
    if (isBase64) {
      data = { file: file };
    } else {
      data = new FormData();
      data.append('file', file);
    }
    return this.apiService.post('setting-ms/files?base64=' + isBase64, data).pipe(map(x => {
      return { file: x.file, message: x.message };
    }));
  }

  /**
   * delete file by id
   * @param id
   */
  delete(id: number): Observable<any> {
    return this.apiService.delete(`files/${id}`);
  }

}
