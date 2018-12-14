import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { fadeInAnimation } from '../../shared/animations/fade-in.animation';

@Component({
  selector: 'app-not-authorized',
  templateUrl: './not-authorized.component.html',
  styleUrls: ['./not-authorized.component.css'],
  animations: [fadeInAnimation]
})
export class NotAuthorizedComponent {
  constructor(private titleService: Title) {
    this.setTitle();
  }

  private setTitle() {
    this.titleService.setTitle('Not Authorized');
  }
}
