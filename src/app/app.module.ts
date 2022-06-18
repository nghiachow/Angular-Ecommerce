import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductListComponent } from './pages/home/components/product-list/product-list.component';
import { CategoryListComponent } from './pages/home/components/category-list/category-list.component';
import { DetailComponent } from './pages/detail/detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { footerComponent } from './components/footer/footer.component';
import { ProductsComponent } from './pages/products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from 'src/service/auth.service';
import { UserComponent } from './pages/user/user.component';
import { DashboardComponent } from './pages/user/dashboard/dashboard.component';
import { UserInfoComponent } from './pages/user/user-info/user-info.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    footerComponent,
    HomeComponent,
    ProductListComponent,
    CategoryListComponent,
    ProductsComponent,
    DetailComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    ProductsComponent,
    UserComponent,
    DashboardComponent,
    UserInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
