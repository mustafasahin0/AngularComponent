import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products = [
    {id: 1, name: 'Minimalist Analog Watch', price: '109', color: 'Black', available: 'Available', image: '/assets/products/watch.jpg'},
    {id: 2, name: 'Minimalist Analog Watch', price: '209', color: 'Black', available: 'Not Available', image: '/assets/products/watch.jpg'},
    {id: 3, name: 'Minimalist Analog Watch', price: '309', color: 'Black', available: 'Available', image: '/assets/products/watch.jpg'},
    {id: 4, name: 'Minimalist Analog Watch', price: '409', color: 'Black', available: 'Not Available', image: '/assets/products/watch.jpg'},
    {id: 5, name: 'Minimalist Analog Watch', price: '509', color: 'Black', available: 'Available', image: '/assets/products/watch.jpg'},
    {id: 6, name: 'Minimalist Analog Watch', price: '609', color: 'Black', available: 'Not Available', image: '/assets/products/watch.jpg'}
  ];
}
