import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="home">
      <h2>Welcome to {{ title }}</h2>
      <p>This is a fully configured Angular application with testing capabilities.</p>
    </div>
  `,
  styles: [`
    .home {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
    }
  `]
})
export class HomeComponent {
  title = 'Angular App';
}