import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full' }, // Redirect to /products by default
    { path: 'products', component: ProductsComponent },
    { path: 'cart', component: ShoppingCardComponent },
];
