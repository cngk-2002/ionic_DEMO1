import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all',
  templateUrl: './all.page.html',
  styleUrls: ['./all.page.scss'],
})
export class AllPage implements OnInit {
  
  public allFoodItems: any[] = [];

  constructor(private http: HttpClient) {
    this.loadMenuData();
   }
  ngOnInit() {
  }
  
  loadMenuData() {
    this.http.get('assets/menu.json').subscribe((data: any) => {
      this.allFoodItems = data;
    });
  }
}
