import { NgModule } from '@angular/core';
import { HomeComponent } from './containers/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [
    HomeRoutingModule,
    SharedModule,
  ],
  declarations: [ HomeComponent ]
})
export class HomeModule {
}
