import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';

import { environment as env } from '../../environments/environment';

import { HomeStoreModule } from './home-store';

import { RouterEffects } from './router-store/router.effect';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeStoreModule,
    StoreModule.forRoot({
      router: routerReducer
    }),
    EffectsModule.forRoot([ RouterEffects ]),
    StoreDevtoolsModule.instrument({
      maxAge: 10,
      logOnly: env.production,
    }),
    StoreRouterConnectingModule.forRoot(),
  ]
})
export class RootStoreModule {
}
