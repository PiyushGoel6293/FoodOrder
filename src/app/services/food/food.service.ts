import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  
  getAll():Foods[]{
    return[
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favourite: true,
        origins: ['Italy'],
        star: 4.5,
        imageUrl: '/assets/dish_1.jpg',
        tags: ['FastFood','Pizza','Lunch'],
      },
      {
        id: 2,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favourite: false,
        origins: ['Italy'],
        star: 4.5,
        imageUrl: '/assets/dish_2.jpg',
        tags: ['FastFood','Pizza','Lunch'],
      },      {
        id: 3,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favourite: true,
        origins: ['Italy'],
        star: 4.5,
        imageUrl: '/assets/dish_3.jpg',
        tags: ['FastFood','Pizza','Lunch'],
      },      {
        id: 4,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favourite: false,
        origins: ['Italy'],
        star: 4.5,
        imageUrl: '/assets/dish_4.jpg',
        tags: ['FastFood','Pizza','Lunch'],
      },      {
        id: 5,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favourite: false,
        origins: ['Italy'],
        star: 4.5,
        imageUrl: '/assets/dish_5.jpg',
        tags: ['FastFood','Pizza','Lunch'],
      },      {
        id: 6,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favourite: false,
        origins: ['Italy'],
        star: 4.5,
        imageUrl: '/assets/dish_6.jpg',
        tags: ['FastFood','Pizza','Lunch'],
        
      },
      {
        id: 7,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favourite: false,
        origins: ['Italy'],
        star: 4.5,
        imageUrl: '/assets/dish_7.jpg',
        tags: ['FastFood','Pizza','Lunch'],
      },      {
        id: 8,
        name: 'Plate',
        cookTime: '10-20',
        price: 10,
        favourite: false,
        origins: ['Italy'],
        star: 4.5,
        imageUrl: '/assets/dish_8.jpg',
        tags: ['FastFood','Pizza','Lunch'],
      }

    ];
  }
}      
      
      
      
      
      // '/assets/dish_1.jpg',
      // '/assets/dish_2.jpg',
      // '/assets/dish_3.jpg',
      // '/assets/dish_4.jpg',
      // '/assets/dish_5.jpg',
      // '/assets/dish_6.jpg',
      // '/assets/dish_7.jpg',
      // '/assets/dish_8.jpg'

