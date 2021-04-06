import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/product';
import { ProductResponseModel } from '../Models/productResponseModel';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  apiUrl="https://fakestoreapi.com/products"
  //apiUrl="https://jsonplaceholder.typicode.com/todos"

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.apiUrl)
  }
}
