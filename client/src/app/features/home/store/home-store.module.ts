import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '@shared/shared.module';

import { homeReducer } from './home.reducer';
import { HomeStoreEffects } from './home.effects';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    StoreModule.forFeature('home', homeReducer),
    EffectsModule.forFeature([ HomeStoreEffects ])
  ],
  providers: [ HomeStoreEffects ]
})
export class HomeStoreModule {
}
