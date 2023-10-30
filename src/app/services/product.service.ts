import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private readonly http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    const path = 'https://api.escuelajs.co/api/v1/products';
    return this.http.get<Product[]>(path);
  }
}
