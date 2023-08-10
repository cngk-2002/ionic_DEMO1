import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-seafood',
  templateUrl: './seafood.page.html',
  styleUrls: ['./seafood.page.scss'],
})
export class SeafoodPage implements OnInit {
  public seafoodItems: any[] = [];

  constructor(private http: HttpClient) {
    this.loadMenuData();
  }

  ngOnInit() {}

  loadMenuData() {
    this.http.get('assets/menu.json').subscribe((data: any) => {
      this.seafoodItems = data.filter((item: any) => item.category === 'seafood');
    });
  }
}
