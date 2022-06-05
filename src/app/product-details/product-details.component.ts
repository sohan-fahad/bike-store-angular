import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  activeId: any = "";
  item: any = {}
  orderDetails: any = {}
  formValue!: FormGroup
  userStringify: any;
  userInfo: any = {}

  constructor(private route: ActivatedRoute, private productService: ProductsService, private router: Router) {

    this.userStringify = localStorage.getItem("user");
    this.userInfo = JSON.parse(this.userStringify)
  }

  ngOnInit(): void {
    this.activeId = this.route.snapshot.paramMap.get("id")
    this.getItemDetails(this.activeId)
  }

  getItemDetails(id: string) {
    this.productService.getOneItem(id).subscribe(res => this.item = res)
  }

  handlePlaceOrder(name: string, email: string, product: string, number: string, address: string, price: string) {
    let obj = { name, email, product, number, price, address, status: "PENDING" }
    this.productService.order(obj).subscribe(res => {
      if (res) {
        this.router.navigate([""])
        alert("order placed")
      }
    })
  }

}
