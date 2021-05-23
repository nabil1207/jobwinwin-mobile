import { Component, OnInit } from '@angular/core';
import { ChildActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AdvertisementService } from 'src/app/core/services/crud/advertisement.service';

@Component({
  selector: 'app-form-advertissement',
  templateUrl: './form-advertissement.component.html'
})
export class FormAdvertissementComponent implements OnInit {

  pageLink: string;
  subscription: Subscription;

  constructor(public advertisementService: AdvertisementService, private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.router.events.subscribe(event => {
      if (event instanceof ChildActivationEnd) {
        if (event.snapshot.firstChild.data.pagelink) {
          this.pageLink = event.snapshot.firstChild.data.pagelink;
        }
      }
    });
  }

}
