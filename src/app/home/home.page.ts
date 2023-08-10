import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public popularFoodItems: any[] = [];

  constructor(private http: HttpClient) {
    this.loadMenuData();
  }

  loadMenuData() {
    this.http.get('assets/menu.json').subscribe((data: any) => {
      // Filter food items with rating >= 4.5
      this.popularFoodItems = data.filter((item: any) => item.rating >= 4.5);
    });
  }
}