import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ContainerComponent} from './container.component';
import {AuthGuard} from "../login/login.guard";
import {DashboardComponent} from "../dashboard/dashboard.component";



const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {
    path: '', component: ContainerComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerRoutingModule {
}
