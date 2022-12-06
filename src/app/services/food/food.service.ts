import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAllFoodByTag(tag:string):Foods[]{
    return tag == 'All' ? this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
    
    // if(tag == 'All')
    // return this.getAll()
    // else
    // return this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAllTag():Tag[]{
    return[
    {name : 'All' , count: 14},
    {name : 'French' , count: 1},
    {name : 'Italian' , count: 2},
    {name : 'Georgian' , count: 1},
    {name : 'Ukranian' , count: 1},
    {name : 'Japanese' , count: 1},
    {name : 'Russian' , count: 1},
    {name : 'Lunch' , count: 6},
    {name : 'Dessert' , count: 2},
    {name : 'Chocolate' , count: 1},
    {name : 'Meat' , count: 1},
    {name : 'Apples' , count: 1},
    {name : 'Eggs' , count: 3},
    {name : 'Soup' , count: 1},
  ];
  }
  getAll():Foods[]{
    return[
      {
        id: 1,
        name: 'Little Pleasure',
        cookTime: '25-30',
        price: 23,
        favourite: true,
        origins: ['France'],
        star: 4.7,
        imageUrl: '/assets/dish_1.jpg',
        tags: ['French','Main','Lunch'],
      },
      {
        id: 2,
        name: 'Jewel',
        cookTime: '10-15',
        price: 13,
        favourite: false,
        origins: ['Italy'],
        star: 4.2,
        imageUrl: '/assets/dish_2.jpg',
        tags: ['Italian','Chocolate','Dessert'],
      },      {
        id: 3,
        name: 'Wild Boar',
        cookTime: '35-40',
        price: 31,
        favourite: true,
        origins: ['Georgia'],
        star: 4.9,
        imageUrl: '/assets/dish_3.jpg',
        tags: ['Georgian','Meat','Lunch'],
      },      {
        id: 4,
        name: 'Charlotte',
        cookTime: '25-30',
        price: 15,
        favourite: false,
        origins: ['Russia'],
        star: 4.9,
        imageUrl: '/assets/dish_4.jpg',
        tags: ['Russian','Apples','Dessert'],
      },      {
        id: 5,
        name: 'Jija ',
        cookTime: '15-20',
        price: 16,
        favourite: false,
        origins: ['Italy'],
        star: 4.5,
        imageUrl: '/assets/dish_5.jpg',
        tags: ['Italian','Eggs','Lunch'],
      },      {
        id: 6,
        name: 'Dragon Eggs',
        cookTime: '10-15',
        price: 12,
        favourite: false,
        origins: ['China'],
        star: 4.4,
        imageUrl: '/assets/dish_6.jpg',
        tags: ['Chinese','Eggs','Lunch'],
        
      },
      {
        id: 7,
        name: 'Omlet',
        cookTime: '25-30',
        price: 18,
        favourite: false,
        origins: ['Ukraine'],
        star: 4.7,
        imageUrl: '/assets/dish_7.jpg',
        tags: ['Ukranian','Eggs','Lunch'],
      },      {
        id: 8,
        name: 'Ramen',
        cookTime: '25-35',
        price: 22,
        favourite: false,
        origins: ['Japan'],
        star: 4.6,
        imageUrl: '/assets/dish_8.jpg',
        tags: ['Japanese','Soup','Lunch'],
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

