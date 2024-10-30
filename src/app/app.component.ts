import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TitleService } from './services/title.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <header class="header">
      <h1>{{ title }}</h1>
      <nav>
        <a routerLink="/">Home</a>
      </nav>
    </header>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    .header {
      padding: 1rem;
      background: #f8f9fa;
      margin-bottom: 1rem;
    }
    h1 {
      margin: 0;
      font-size: 1.5rem;
    }
    nav {
      margin-top: 1rem;
    }
    nav a {
      color: #0066cc;
      text-decoration: none;
    }
    main {
      padding: 1rem;
    }
  `]
})
export class AppComponent implements OnInit {
  title = 'Angular App';

  constructor(private titleService: TitleService) {}

  ngOnInit() {
    this.titleService.getTitle$().subscribe(title => {
      this.title = title;
    });
  }
}