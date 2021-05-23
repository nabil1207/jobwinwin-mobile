import { Resolve } from '@angular/router';
import { GlobalService } from '../global/global.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class DataResolver implements Resolve<Observable<any>> {
    constructor(private globalService: GlobalService) { }

    resolve(): Observable<any> {
        return this.globalService.getDirectories();
    }
}