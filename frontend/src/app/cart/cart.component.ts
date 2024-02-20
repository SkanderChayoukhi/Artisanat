// cart.component.ts
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

// Define the Product interface directly here
interface Product {
  name: string;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Product[] = [
    { name: 'Product 1', price: 10, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/800px-Angular_full_color_logo.svg.png' },
    { name: 'Product 2', price: 20, imageUrl: 'assets/1.jpg' },
    { name: 'Product 3', price: 30, imageUrl: 'assets/1.jpg' },
    { name: 'Product 4', price: 10, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/800px-Angular_full_color_logo.svg.png' },
    { name: 'Product 5', price: 20, imageUrl: 'assets/1.jpg' },
    { name: 'Product 6', price: 30, imageUrl: 'assets/1.jpg' },
    { name: 'Product 7', price: 20, imageUrl: 'assets/1.jpg' },
    { name: 'Product 8', price: 30, imageUrl: 'assets/1.jpg' },
    { name: 'Product 9', price: 10, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/800px-Angular_full_color_logo.svg.png' },
    { name: 'Product 10', price: 20, imageUrl: 'assets/1.jpg' }
  ];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  removeProduct(product: Product): void {
    // Logic to remove the product from the cart
    const index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  getTotal(): number {
    // Logic to calculate the total price of all products in the cart
    return this.products.reduce((acc, product) => acc + product.price, 0);
  }

  checkout(): void {
    // Logic to initiate the checkout process
    // You can implement payment gateway integration or any other checkout process here
    console.log('Initiating checkout...');
  }
}
