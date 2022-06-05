import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approved',
  templateUrl: './approved.component.html',
  styleUrls: ['./approved.component.css']
})
export class ApprovedComponent implements OnInit {

  approvedOrders: any = []

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getApprovedOrders()
  }

  getApprovedOrders() {
    this.productService.getOrder("APPROVED").subscribe(res => this.approvedOrders = res)
  }

  handleShipped(data: any) {
    data.status = "SHIPPED"
    this.productService.updateOrderStatus(data._id, data).subscribe(res => this.getApprovedOrders())
  }

  handleDeleteOrder(id: string) {
    this.productService.cancelOrder(id).subscribe(res => this.getApprovedOrders())
  }

}
