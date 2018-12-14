import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { fadeInAnimation } from '../../shared/animations/fade-in.animation';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  animations: [fadeInAnimation]
})
export class ProductsComponent implements OnInit {
  constructor(private titleService: Title) {
    this.setTitle();
  }

  ngOnInit() {
    // todo load products
  }

  private setTitle() {
    this.titleService.setTitle('Not Found');
  }
}
