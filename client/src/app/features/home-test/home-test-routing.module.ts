import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTestComponent } from '@features/home2/containers/home-test/home-test.component';


const routes: Routes = [
  {
    path: '',
    component: HomeTestComponent,
    children: [],
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class HomeTestRoutingModule {
}

