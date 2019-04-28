import { ChangeDetectionStrategy, Component, OnInit, } from '@angular/core';
import { Store } from '@ngrx/store';
import { HomeStoreActions, HomeStoreSelectors, RootStoreState } from '../../../../root-store';
import { Observable } from 'rxjs';
import { User } from '../../../../services/auth.service';

@Component({
  selector: 'app-home2',
  templateUrl: './home-test.component.html',
  styleUrls: [ './home-test.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeTestComponent implements OnInit {
  public $error: Observable<string>;
  public $isLoading: Observable<boolean>;
  public $user: Observable<User>;

  constructor(private $store: Store<RootStoreState.RootState>) {
  }

  ngOnInit(): void {
    this.$error = this.$store.select(HomeStoreSelectors.selectHomeError);
    this.$isLoading = this.$store.select(HomeStoreSelectors.selectHomeIsLoading);
    this.$user = this.$store.select(HomeStoreSelectors.selectHomeUser);

    // TODO: Put this out of the ngOnInit
    // TODO: Dont forget to use a guard in order to check if connected for each route
    this.$store.dispatch(new HomeStoreActions.LoginRequestAction({ userName: 'coucou', password: 'coucou' }));
  }
}
