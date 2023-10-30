import { Component, OnInit, signal } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Product } from '../interfaces/product';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-shopping-card',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, NgFor],
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.css']
})
export class ShoppingCardComponent implements OnInit{
  products = signal<Product[]>([]);

  ngOnInit(): void {
    let cart = JSON.parse(localStorage.getItem('cart')!) || [];
    this.products.set(cart);
  }
}
