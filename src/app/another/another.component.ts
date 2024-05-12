import { Component } from '@angular/core';

import { TestModule } from '../modules/test/test.module';

@Component({
  selector: 'app-another',
  standalone: true,
  imports: [
    TestModule
  ],
  providers: [],
  templateUrl: './another.component.html',
  styleUrl: './another.component.scss'
})
export class AnotherComponent {
}
