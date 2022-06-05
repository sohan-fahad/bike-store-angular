import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {

  allProducts: any = []
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts() {
    this.productsService.getAllProducts().subscribe(res => this.allProducts = res)
  }

  handleDelete(id: string) {
    this.productsService.deleteProduct(id).subscribe(res => this.getAllProducts())
  }

}
