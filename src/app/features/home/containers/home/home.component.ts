import { ChangeDetectionStrategy, Component, OnInit, } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { RootState } from '@rootStore/state';
import { User } from '@models/User';
import { LoginStoreSelectors } from '@features/login/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  public $user: Observable<User>;

  constructor(private $store: Store<RootState>) {
  }

  ngOnInit(): void {
    this.$user = this.$store.select(LoginStoreSelectors.selectUser);
  }
}
