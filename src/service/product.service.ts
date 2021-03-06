import { Injectable } from '@angular/core';
import { productList } from 'src/dummy/data'

@Injectable(
    { providedIn: 'root' }
)
export class ProductService {
    getProductList = () => {
        return productList.map((item) => {
            const star = Math.floor(Math.random() * (5 - 1) + 1)
            return { ...item, star }
        });
    }
    getDetail = (id: number) => {
        return productList.find((item) => item.id === id);
    }
    getProductCate = (id: number) => {
        return productList.find((item) => {
            item.category === id
        })
    }
}