import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  sliceProducts: any = []

  constructor(private products: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.products.getAllProducts().subscribe((res: any = []) => this.sliceProducts = res.slice(0, 6))
  }

}
