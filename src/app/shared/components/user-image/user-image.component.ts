import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrls: ['./user-image.component.scss'],
})
export class UserImageComponent {

  @Input('firstName') firstName: string;
  @Input('lastName') lastName: string;
  @Input('image') image: string;
  @Input('large') large = false;

  constructor() { }

  ionViewDidEnter(): void {
  }

}
