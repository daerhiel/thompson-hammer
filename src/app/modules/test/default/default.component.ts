import { Component, EventEmitter, HostListener, Output, inject } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrl: './default.component.scss'
})
export class DefaultComponent {
  readonly parent = inject(DefaultComponent, { skipSelf: true, optional: true});

  @HostListener('click')
  onClick() {
    this.expanded.emit(true);
  }

  @Output()
  readonly expanded = new EventEmitter<boolean>();

  constructor() {
    console.log('parent', this.parent);
  }

  killMe() {
    console.log('I am dead');
  }
}
