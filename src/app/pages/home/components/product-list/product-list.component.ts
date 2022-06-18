import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/interface/product/product';
import { CartService } from 'src/service/cart.service';
import { ProductService } from 'src/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList!: any[]
  constructor(private service: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.productList = this.service.getProductList();
    console.log(this.productList)
  }
  getActiveStar(range: number){
    return new Array(range);
  }
  getInActiveStar(range: number) {
    return new Array(5-range);
  }

  addToCart(product: any) {
    console.log(product.price);
    this.cartService.addtoCart(product)
  }
}
