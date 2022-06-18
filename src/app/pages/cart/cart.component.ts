import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartList!: any[];
  public grandTotal !: number;
  public cartItems: any = [];
  
  constructor( private cartService: CartService, private route: Router) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res => {
      this.cartItems = res;
      this.grandTotal = this.cartService.getTotalPrice();
      console.log(this.grandTotal);
    }) 
  }

  removeItem(item: any) {
    this.cartService.removeCartItem(item)
  }

  clearCart() {
    this.cartService.removeAllCart();
    this.route.navigate(["/"])
  }
}
