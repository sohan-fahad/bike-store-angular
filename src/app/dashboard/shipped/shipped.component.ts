import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipped',
  templateUrl: './shipped.component.html',
  styleUrls: ['./shipped.component.css']
})
export class ShippedComponent implements OnInit {

  shippedOrders: any = []

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getAllShipped()
  }

  getAllShipped() {
    this.productService.getOrder("SHIPPED").subscribe(res => this.shippedOrders = res)
  }
  handleDeleteOrder(id: string) {
    this.productService.cancelOrder(id).subscribe(res => this.getAllShipped())
  }

}
