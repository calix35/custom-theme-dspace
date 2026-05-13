import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../app/app.reducer';
import { LogOutAction } from '../../../../../../app/core/auth/auth.actions';
import { AuthService } from '../../../../../../app/core/auth/auth.service';
import { DSONameService } from '../../../../../../app/core/breadcrumbs/dso-name.service';
import { UserMenuComponent as BaseComponent } from '../../../../../../app/shared/auth-nav-menu/user-menu/user-menu.component';

/**
 * Component representing the {@link UserMenuComponent} of a page
 */
@Component({
  selector: 'ds-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent extends BaseComponent {
  constructor(
    protected storeRef: Store<AppState>,
    protected authServiceRef: AuthService,
    protected dsoNameServiceRef: DSONameService,
  ) {
    super(storeRef, authServiceRef, dsoNameServiceRef);
  }

  doLogout(): void {
    this.storeRef.dispatch(new LogOutAction());
  }
}
