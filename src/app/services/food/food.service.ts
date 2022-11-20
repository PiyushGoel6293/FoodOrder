import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():string[]{
    return[
      '/assets/dish_1.jpg',
      '/assets/dish_2.jpg',
      '/assets/dish_3.jpg',
      '/assets/dish_4.jpg',
      '/assets/dish_5.jpg',
      '/assets/dish_6.jpg',
      '/assets/dish_7.jpg',
      '/assets/dish_8.jpg'
    ]
  }
}
