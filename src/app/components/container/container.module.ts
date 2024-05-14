import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule} from "../../share/share.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContainerComponent } from './container.component';
import { ContainerRoutingModule } from './container-routing.module';
import {DashboardComponent} from "../dashboard/dashboard.component";
import {SidebarComponent} from "../sidebar/sidebar.component";
import {DataViewModule} from "primeng/dataview";
import {IconFieldModule} from "primeng/iconfield";
import {InputIconModule} from "primeng/inputicon";

@NgModule({
  declarations: [
    ContainerComponent,
    DashboardComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    ContainerRoutingModule,
    ShareModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DataViewModule,
    IconFieldModule,
    InputIconModule,
  ]
})
export class ContainerModule { }
