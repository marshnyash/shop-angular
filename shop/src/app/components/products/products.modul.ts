import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list-component/product-list-component.component';
import { ProductsService } from './products.service';
import { ProductComponent } from './product-component/product-component.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProductListComponent, ProductComponent],
  providers: [ProductsService],
  exports: [ProductListComponent],
})
export class ProductsModule {}
