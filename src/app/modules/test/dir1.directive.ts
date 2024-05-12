import { Directive, HostListener, inject } from '@angular/core';

import { DefaultComponent } from './default/default.component';

@Directive({
  selector: '[appDir1]'
})
export class Dir1Directive {
  readonly default = inject(DefaultComponent, { optional: true });

  constructor() {
    this.default?.expanded.subscribe(expanded => {
      this.default?.killMe();
    });
  }
}
