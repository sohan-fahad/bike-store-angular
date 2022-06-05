import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ManageOrderComponent } from './manage-order/manage-order.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PendingComponent } from './pending/pending.component';
import { ApprovedComponent } from './approved/approved.component';
import { ShippedComponent } from './shipped/shipped.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';


@NgModule({
  declarations: [
    ManageOrderComponent,
    DashboardComponent,
    PendingComponent,
    ApprovedComponent,
    ShippedComponent,
    AddProductsComponent,
    ManageProductsComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    ManageOrderComponent,
  ]
})
export class DashboardModule { }
