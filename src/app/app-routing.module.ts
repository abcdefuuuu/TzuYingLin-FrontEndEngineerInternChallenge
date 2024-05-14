import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {SignComponent} from "./components/sign/sign.component";
import {GetstartComponent} from "./components/getstart/getstart.component";


const routes: Routes = [
  { path: '', redirectTo: 'getstart', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'sign', component: SignComponent},
  { path: 'getstart', component: GetstartComponent},
  { path: '', loadChildren: () => import('./components/container/container.module').then(m => m.ContainerModule)},
  // { path: '', redirectTo: '/your-default-route', pathMatch: 'full', canActivate: [AuthGuard] },
  // { path: '**', redirectTo: '/page-not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
