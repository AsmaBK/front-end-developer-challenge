import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  allProducts: any
  products
  constructor() { }

  ngOnInit() {
    this.initData();
    this.products = this.allProducts
  }

  filter(event){
    console.log(event.target.value)
    if(event.target.value == '' || event.target.value == ' '){
      this.products = this.allProducts
    }    
    this.products = this.allProducts.filter(p => p.description.toUpperCase().indexOf(event.target.value.toUpperCase()) > -1 
    ||
    p.type.toUpperCase().indexOf(event.target.value.toUpperCase()) > -1)
  }
  initData() {
    this.allProducts = [
      {
        photoLink: 'https://tajrexpress.com/images/thumbs/0000024_apple-macbook-pro-13-inch_550.jpeg',
        description: 'macbook pro',
        type: 'Computer',
        price: '2000.50$',
        quantity: 20
      },
      {
        photoLink: 'https://m.media-amazon.com/images/I/51Y-Dulc3bL._AC_SX569_.jpg',
        description: 'apple TV',
        type: 'Computer',
        price: '1500.50$',
        quantity: 20
      },
      {
        photoLink: 'https://m.media-amazon.com/images/I/41eftAmb8vL._AC_.jpg',
        description: 'iphone 12',
        type: 'Smarthphone',
        price: '1452$',
        quantity: 20
      },
      {
        photoLink: 'https://m.media-amazon.com/images/I/61m1Dot5KCL._AC_SY355_.jpg',
        description: 'Samsung S21',
        type: 'Smarthphone',
        price: '1450$',
        quantity: 20
      },
      {
        photoLink:'https://m.media-amazon.com/images/I/71yrt3+nfkL._AC_SX342_.jpg',
        description: 'Apple watch serie 3',
        type: 'SmartWatch',
        price: '300$',
        quantity: 20
      },
      {
        photoLink:'https://m.media-amazon.com/images/I/71NTi82uBEL._AC_SX342_.jpg',
        description: 'Airpods',
        type: 'Computer',
        price: '250$',
        quantity: 20
      },
      {
        photoLink : 'https://static.fnac-static.com/multimedia/Images/FR/NR/6d/e5/80/8447341/1540-1/tsp20161104142606/Drone-Yuneec-Breeze-Blanc.jpg',
        description: 'Drone yuneec',
        type: 'Drone',
        price: '399,50$',
        quantity: 20
      },
      {
        photoLink : 'https://m.media-amazon.com/images/I/71sNC2+4wIL._AC_SX466_.jpg',
        description: 'Ipad',
        type: 'Tablet',
        price: '879.50$',
        quantity: 20
      },
      {
        photoLink : 'https://5.imimg.com/data5/KJ/QZ/ZL/ANDROID-89781738/product-jpeg-500x500.jpeg',
        description: 'Nikon',
        type: 'Camera',
        price: '500.00$',
        quantity: 20
      },
      {
        photoLink : 'https://gloimg.gbtcdn.com/images/pdm-provider-img/straight-product-img/20190820/T026649/T0266490154/source-img/180327-6270.jpg_500x500.jpg',
        description: 'Mi Band 4',
        type: 'Watchband',
        price: '3.9$',
        quantity: 120
      },
      {
        photoLink : 'https://m.media-amazon.com/images/I/91JPrxbYLeL._AC_SY450_.jpg',
        description: 'JBL Go 2',
        type: 'Speaker',
        price: '130$',
        quantity: 20
      },
      {
        photoLink : 'https://images-na.ssl-images-amazon.com/images/I/51FyYVzPe0L._AC._SR360,460.jpg',
        description: 'Hp Envy Photo',
        type: 'Printer',
        price: '200.50$',
        quantity: 20
      }
    ]
  }
}
