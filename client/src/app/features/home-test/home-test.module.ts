import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { HomeTestRoutingModule } from '@features/home-test/home-test-routing.module';
import { HomeTestComponent } from '@features/home-test/containers/home-test/home-test.component';

@NgModule({
  imports: [
    HomeTestRoutingModule,
    SharedModule
  ],
  declarations: [ HomeTestComponent ]
})
export class HomeTestModule {
}
