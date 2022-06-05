import { ProductsService } from 'src/app/services/products.service';
import { AddProductModel } from './add-products.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  addProductModel: AddProductModel = new AddProductModel();

  formValue!: FormGroup;

  constructor(private formBuilder: FormBuilder, private productService: ProductsService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      productName: [""],
      price: [""],
      description: [""],
      productImg: [""]
    })
  }

  handleAddProduct() {
    this.addProductModel.productName = this.formValue.value.productName;
    this.addProductModel.price = this.formValue.value.price;
    this.addProductModel.description = this.formValue.value.description;
    this.addProductModel.productImg = this.formValue.value.productImg;

    this.productService.addProduct(this.addProductModel).subscribe(res => {
      if (res) {
        alert("Product Added");
        this.formValue.reset()
      }
    })
  }

}
