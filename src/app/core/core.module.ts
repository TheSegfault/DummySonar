import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { RootStoreModule } from '@rootStore/root-store.module';

@NgModule({
  imports: [
    RouterModule,
    RootStoreModule,
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
