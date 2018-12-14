import { animate, style, transition, trigger } from '@angular/animations';

export const fadeInAnimation =
  trigger('fadeInAnimation', [
    // route 'enter' transition
    transition(':enter', [

      // styles at start of transition
      style({opacity: 0}),

      // animation and styles at end of transition
      animate('.6s', style({opacity: 1}))
    ]),
  ]);
