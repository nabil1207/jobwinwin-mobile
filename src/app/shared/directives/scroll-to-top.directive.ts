import { Directive } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Directive({
  selector: '[appScrollToTop]'
})
export class ScrollToTopDirective {

  constructor(private router: Router) {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      document.body.scrollTop = 0;
      console.log('im in the top');
    });
  }

}
