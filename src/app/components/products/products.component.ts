import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ParseService } from '../../core/services/parse.service';
import { Product } from '../../core/models/product-model';

import { fadeInAnimation } from '../../shared/animations/fade-in.animation';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  animations: [fadeInAnimation]
})
export class ProductsComponent implements OnInit {

  public products: Product[] = [];

  constructor(private titleService: Title, private parseService: ParseService) {
    this.setTitle();
  }

  ngOnInit() {

    this.getAllProducts();
  }

  private getAllProducts() {

    this.parseService.getAllProducts()
      .subscribe(response => {

        // generate list of sample products
        for (var i = 0; i < 12; i++) {
          this.products.push(response[0].attributes);
        }

      },
        error => { console.log(error) }
      );

  }

  private setTitle() {
    this.titleService.setTitle('Not Found');
  }
}
