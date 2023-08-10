import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fastfood',
  templateUrl: './fastfood.page.html',
  styleUrls: ['./fastfood.page.scss'],
})
export class FastfoodPage implements OnInit {
  public fastfoodItems: any[] = [];

  constructor(private http: HttpClient) {
    this.loadMenuData();
  }

  ngOnInit() {}

  loadMenuData() {
    this.http.get('assets/menu.json').subscribe((data: any) => {
      this.fastfoodItems = data.filter((item: any) => item.category === 'fastfood');
    });
  }
}
