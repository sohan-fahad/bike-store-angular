import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseURL: string = "https://secret-ocean-30546.herokuapp.com"

  constructor(private _http: HttpClient) { }

  getAllProducts() {
    return this._http.get(`${this.baseURL}/products`).pipe(map(res => {
      return res
    }))
  }

  getOneItem(id: string) {
    return this._http.get(`${this.baseURL}/details/${id}`).pipe(map(res => res))
  }

  order(data: any) {
    return this._http.post(`${this.baseURL}/orders`, data).pipe(map(res => res))
  }

  getOrder(action: string) {
    return this._http.get(`${this.baseURL}/orders/${action}`).pipe(map(res => res))
  }

  updateOrderStatus(id: string, data: any) {
    return this._http.put(`${this.baseURL}/orders/${id}`, data).pipe(map(res => res))
  }

  addProduct(data: any) {
    return this._http.post(`${this.baseURL}/products`, data).pipe(map(res => res))
  }

  deleteProduct(id: string) {
    return this._http.delete(`${this.baseURL}/products/${id}`).pipe(map(res => res))
  }
  cancelOrder(id: string) {
    return this._http.delete(`${this.baseURL}/orders/${id}`).pipe(map(res => res))
  }

}
