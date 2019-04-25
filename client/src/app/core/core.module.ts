import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from '../reducers';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from '../app.effects';
import { environment as env } from '../../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  imports: [
    EffectsModule.forRoot([ AppEffects ]),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 10,
      logOnly: env.production,
    }),
    StoreRouterConnectingModule.forRoot(),
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
})

export class CoreModule {
  constructor(@Optional()
              @SkipSelf()
                parentModule: CoreModule,
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}

function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (parentModule) {
    throw new Error(
      `${
        moduleName
        } has already been loaded. Import Core modules in the AppModule only.`,
    );
  }
}
