import { Component } from '@angular/core';

@Component({
  selector: 'app-houses-component',
  templateUrl: './houses.component.html',
})

export class HousesComponent {
  viewTitle: string = 'Table';
  houses: any[] = [
    {
      "HouseId": 1,
      "Title": "Good house",
      "Descruption": "Good location",
      "Price": 100,
      "ImageUrl": "assets/images/cloud.png"
    },
    {
      "HouseId": 2,
      "Title": "Bad house",
      "Descruption": "Bad location",
      "Price": 10,
      "ImageUrl": "assets/images/coding.png"
    }
  ];
}
