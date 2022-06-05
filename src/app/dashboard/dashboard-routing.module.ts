import { AddProductsComponent } from './add-products/add-products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageOrderComponent } from './manage-order/manage-order.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageProductsComponent } from './manage-products/manage-products.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      {
        path: "",
        component: ManageOrderComponent
      },
      {
        path: "add",
        component: AddProductsComponent
      },
      {
        path: "manage-products",
        component: ManageProductsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
