import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnotherComponent } from './another/another.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AnotherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
