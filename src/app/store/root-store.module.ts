import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NavigationActionTiming, routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';

import { environment as env } from '@app/env';

import { CustomSerializer } from './custom-route-serializer';

import { LoginStoreModule } from '@features/login/store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginStoreModule,
    StoreModule.forRoot({
      router: routerReducer
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 10,
      logOnly: env.production,
    }),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer,
      navigationActionTiming: NavigationActionTiming.PostActivation, // To use if activation needs to append after a guard
    }),
  ]
})
export class RootStoreModule {
}
