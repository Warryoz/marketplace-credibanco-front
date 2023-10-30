import { Component, OnInit, signal } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Product } from '../interfaces/product';
import { ProductService } from '../services/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, NgFor, RouterLink],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title = 'marketplace-front';
  products = signal<Product[]>([]);
  constructor(private readonly productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((p) => this.products.set(p));
  }

  addToShoppingCart(product: Product){
    let cart = JSON.parse(localStorage.getItem('cart')!) || [];

    const existingProduct = cart.find((item: Product) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  }
}
