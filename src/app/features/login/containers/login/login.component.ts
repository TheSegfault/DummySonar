import { ChangeDetectionStrategy, Component, OnInit, } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { RootState } from '@rootStore/state';
import { User } from '@models/User';
import { LoginStoreActions, LoginStoreSelectors } from '@features/login/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  public $error: Observable<string>;
  public $isLoading: Observable<boolean>;
  public $user: Observable<User>;

  constructor(private $store: Store<RootState>) {
  }

  ngOnInit(): void {
    this.$error = this.$store.select(LoginStoreSelectors.selectLoginError);
    this.$isLoading = this.$store.select(LoginStoreSelectors.selectLoginIsLoading);
    this.$user = this.$store.select(LoginStoreSelectors.selectUser);
  }

  login(userName: string, password: string): void {
    this.$store.dispatch(new LoginStoreActions.LoginRequestAction({ userName, password }));
  }
}
