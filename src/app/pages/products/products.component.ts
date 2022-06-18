import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/service/cart.service';
import { CategoryService } from 'src/service/category.service';
import { ProductService } from 'src/service/product.service';
import { CategoryListComponent } from '../home/components/category-list/category-list.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productList!: any[]
  cateList!: any[]
  productFilter!: any[]

  constructor(private products: ProductService, private categories: CategoryService, private cartService: CartService) { }

  ngOnInit(): void {
    this.productList = this.products.getProductList();
    this.cateList = this.categories.getCategoryList(); 
    this.productFilter = this.productList   
  }

  getProdByCate(cateId: any) {
    let data: any = this.productList.filter(function (item) {
      return item.category == cateId;
    })
    this.productFilter = data
  }

  click() {
    this.productFilter = this.productList
  }
  getActiveStar(range: number){
    return new Array(range);
  }
  getInActiveStar(range: number) {
    return new Array(5-range);
  }

  addToCart(product: any) {
    console.log(product);
    this.cartService.addtoCart(product)
  }
}
