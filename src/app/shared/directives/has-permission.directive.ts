import { Directive, OnInit, ElementRef, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { AuthService } from 'src/app/core/services/global/auth.service';


@Directive({
  selector: '[appHasPermission]'
})
export class HasPermissionDirective {


  private rights = [];
  private permissions = [];
  private isHidden = true;

  constructor(private element: ElementRef, private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef,
    private authService: AuthService) { }

  ngOnInit() {
    this.authService.permissions.subscribe(p => {
      this.permissions = p;
      this.updateView();
    });
  }

  @Input()
  set appHasPermission(val) {
    this.rights = val;
    this.updateView();
  }

  /**
   * update view
   */
  private updateView() {
    if (this.verifyPermision()) {
      if (this.isHidden) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.isHidden = false;
      }
    } else {
      this.isHidden = true;
      this.viewContainer.clear();
    }
  }

  /**
   * verify user permissions
   */
  private verifyPermision() {
    if (this.permissions.length > 0 && this.rights && this.rights.length > 0) {
      for (const right of this.rights) {
        if (this.permissions.includes(right)) {
          return true;
        }
      }
    }
    return false;
  }

}
