import { NgModule } from '@angular/core';
import { HomeComponent } from './containers/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '@shared/shared.module';
import { FlexModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    HomeRoutingModule,
    SharedModule,
    FlexModule,
  ],
  declarations: [ HomeComponent ]
})
export class HomeModule {
}
