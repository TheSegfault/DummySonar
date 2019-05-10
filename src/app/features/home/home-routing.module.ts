import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { AuthGuard } from '@services/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuard ],
  },
  {
    path: 'home-test',
    loadChildren: 'src/app/features/home-test/home-test.module#HomeTestModule',
    canActivate: [ AuthGuard ],
  },
  {
    path: 'login',
    loadChildren: 'src/app/features/login/login.module#LoginModule',
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class HomeRoutingModule {
}

