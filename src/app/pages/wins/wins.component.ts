import { Component, OnInit } from '@angular/core';
import { MatchingService } from 'src/app/core/services/crud/matching.service';
import { ToastService } from 'src/app/core/services/addapters/toast.service';
import { TransService } from 'src/app/core/services/addapters/trans.service';
import { Redirection } from 'src/app/core/utils';
import { AuthService } from 'src/app/core/services/global/auth.service';

@Component({
  selector: 'app-wins',
  templateUrl: './wins.component.html',
  styleUrls: ['./wins.component.scss']
})
export class WinsComponent {

  wins = [];
  constructor(public matchingServices: MatchingService, public authService: AuthService,
    private toastService: ToastService, private transService: TransService) { }

  ionViewDidEnter(): void {
    this.matchingServices.getWins().subscribe((res: any) => {
      this.wins = res.data;
      console.log(this.wins);
    });
  }

  /**
   * remove matching
   * @param id
   */
  onDelete(id: string) {
    this.matchingServices.deleteWin(id).subscribe(res => {
      const index = this.wins.findIndex(x => x._id = id);
      if (index !== -1) {
        this.wins.splice(index, 1);
      }
      this.toastService.success(this.transService.translate('delete_success'));
    });
  }

  /**
   * go back
   */
  goBack() {
    if (this.authService.user.role.name === 'candidate') {
      Redirection.candidateDashboard();
    } else {
      Redirection.dashboard();
    }
  }

  showCandidate(id){

  }

  showAdvertissement(id){

  }

}
