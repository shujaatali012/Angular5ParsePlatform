import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { fadeInAnimation } from '../../shared/animations/fade-in.animation';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
  animations: [fadeInAnimation]
})
export class NotFoundComponent {
  constructor(private titleService: Title) {
    this.setTitle();
  }

  private setTitle() {
    this.titleService.setTitle('Not Found');
  }
}
