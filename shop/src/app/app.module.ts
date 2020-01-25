import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first-component/first-component/first-component.component';
import { CartComponent } from './components/cart/cart/cart.component';
import { ProductsService } from './components/products/products.service';
import { ProductsModule } from './components/products/products.modul';
import { CartService } from './components/cart/cart.service';

@NgModule({
  declarations: [AppComponent, FirstComponent, CartComponent],
  imports: [BrowserModule, AppRoutingModule, ProductsModule],
  providers: [ProductsService, CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
