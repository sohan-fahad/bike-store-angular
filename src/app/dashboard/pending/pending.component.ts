import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {

  pendingOrders: any = []

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.allOrders()
  }

  allOrders() {
    this.productsService.getOrder("PENDING").subscribe(res => this.pendingOrders = res)
  }

  handleApprove(data: any) {
    data.status = "APPROVED"
    console.log(data)
    this.productsService.updateOrderStatus(data._id, data).subscribe(res => this.allOrders())
  }

  handleDeleteOrder(id: string) {
    this.productsService.cancelOrder(id).subscribe(res => this.allOrders())
  }

}
