import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CSSVariableService } from '../../../../app/shared/sass-helper/css-variable.service';
import { MenuService } from '../../../../app/shared/menu/menu.service';
import { HostWindowService } from '../../../../app/shared/host-window.service';
import { AuthService } from '../../../../app/core/auth/auth.service';
import { slideSidebarPadding } from '../../../../app/shared/animations/slide';
import { RootComponent as BaseComponent } from '../../../../app/root/root.component';

@Component({
  selector: 'ds-root',
  // styleUrls: ['./root.component.scss'],
  styleUrls: ['./root.component.scss'],
  // templateUrl: './root.component.html',
  templateUrl: './root.component.html',
  animations: [slideSidebarPadding],
})
export class RootComponent extends BaseComponent {
  isAuthenticated$: Observable<boolean>;

  constructor(
    router: Router,
    cssService: CSSVariableService,
    menuService: MenuService,
    windowService: HostWindowService,
    private authService: AuthService,
  ) {
    super(router, cssService, menuService, windowService);
    this.isAuthenticated$ = this.authService.isAuthenticated();
  }
}
