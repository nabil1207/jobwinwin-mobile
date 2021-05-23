import { Directive, ElementRef, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { AuthService } from 'src/app/core/services/global/auth.service';

@Directive({
  selector: '[appCanChangeStatus]'
})
export class CanChangeStatusDirective {

  private isHidden = true;
  constructor(private element: ElementRef, private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef,
    private authService: AuthService) { }

  ngOnInit() {}

  @Input()
  set appCanChangeStatus(val) {
    if ((this.authService.user.userRole === 'recruiter' && this.authService.user.userRole.includes(val)) || val === this.authService.user._id) {
      if (this.isHidden) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.isHidden = false;
      }
    } else {
      this.isHidden = true;
      this.viewContainer.clear();
    }
  }

}
