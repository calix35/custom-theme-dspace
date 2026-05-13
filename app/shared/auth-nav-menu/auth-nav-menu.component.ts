import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { HostWindowService } from '../../../../../app/shared/host-window.service';
import { AuthService } from '../../../../../app/core/auth/auth.service';
import { AppState } from '../../../../../app/app.reducer';
import { LogOutAction } from '../../../../../app/core/auth/auth.actions';
import {
  AuthNavMenuComponent as BaseComponent,
} from '../../../../../app/shared/auth-nav-menu/auth-nav-menu.component';
import { fadeInOut, fadeOut } from '../../../../../app/shared/animations/fade';

/**
 * Component representing the {@link AuthNavMenuComponent} of a page
 */
@Component({
  selector: 'ds-auth-nav-menu',
  templateUrl: './auth-nav-menu.component.html',
  styleUrls: ['./auth-nav-menu.component.scss'],
  animations: [fadeInOut, fadeOut]
})
export class AuthNavMenuComponent extends BaseComponent {
  constructor(
    protected storeRef: Store<AppState>,
    protected windowServiceRef: HostWindowService,
    protected authServiceRef: AuthService,
  ) {
    super(storeRef, windowServiceRef, authServiceRef);
  }

  doLogout(): void {
    this.storeRef.dispatch(new LogOutAction());
  }
}
