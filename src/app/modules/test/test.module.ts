import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultComponent } from './default/default.component';
import { Dir1Directive } from './dir1.directive';
import { Dir2Directive } from './dir2.directive';
import { Dir3Directive } from './dir3.directive';

const declarations = [
  DefaultComponent,
  Dir1Directive,
  Dir2Directive,
  Dir3Directive
];

@NgModule({
  declarations: [
    ...declarations
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...declarations
  ]
})
export class TestModule { }
