import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponseModel } from '../Models/productResponseModel';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  apiUrl="https://fakestoreapi.com/products"
  //apiUrl="https://jsonplaceholder.typicode.com/todos"

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<ProductResponseModel>{
    return this.httpClient.get<ProductResponseModel>(this.apiUrl)
  }
}
