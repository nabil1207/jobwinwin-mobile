import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/global/auth.service';
import { Redirection } from 'src/app/core/utils';

@Component({
  selector: 'app-about-jobwinwin',
  templateUrl: './about-jobwinwin.component.html',
  styleUrls: ['./about-jobwinwin.component.scss']
})
export class AboutJobwinwinComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  goBack() {
    if (this.authService.user.role.name === 'candidate') {
      Redirection.candidateDashboard();
    } else {
      Redirection.dashboard();
    }
  }

}
