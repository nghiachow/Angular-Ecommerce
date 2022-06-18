import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { IProduct } from 'src/interface/product/product';
import { ProductService } from 'src/service/product.service';
import { CartService } from 'src/service/cart.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  id!: number
  relatedProductList!: any[]
  constructor(private service : ProductService, private route: ActivatedRoute, private cartService: CartService) { }
  @Input() 
  public product! : IProduct;
  public cartItems: any = [];
  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.route.params.subscribe((param : Params) => {
      this.id = +param['id'];
      this.product = this.service.getDetail(this.id)!;
    })
    this.relatedProductList = this.service.getProductList().slice(1,4);

   this.cartService.getProducts().subscribe(res => {
     this.cartItems = res;
   }) 
  }

  addToCart() {
    this.cartService.addtoCart(this.product)
  }
}
