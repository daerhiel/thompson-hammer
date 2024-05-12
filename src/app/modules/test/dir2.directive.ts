import { Directive, inject } from '@angular/core';

import { Dir1Directive } from './dir1.directive';

@Directive({
  selector: '[appDir2]'
})
export class Dir2Directive {
  readonly dir1 = inject(Dir1Directive, { optional: true });

  constructor() {
    console.log('dir1', this.dir1);
  }
}
