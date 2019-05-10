import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '@shared/shared.module';

import { loginReducer } from './login.reducer';
import { LoginStoreEffects } from './login.effects';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    StoreModule.forFeature('Login', loginReducer),
    EffectsModule.forFeature([ LoginStoreEffects ])
  ],
  providers: [ LoginStoreEffects ]
})
export class LoginStoreModule {
}
