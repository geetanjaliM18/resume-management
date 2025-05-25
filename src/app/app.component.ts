import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav style="padding: 16px; background: #e0e0e0;">
      <a routerLink="/dashboard" routerLinkActive="active" style="margin-right: 10px;">Dashboard</a>
      <a routerLink="/employees" routerLinkActive="active">Employees</a>
    </nav>
    <main style="padding: 16px;">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    a.active {
      font-weight: bold;
      color: #1976d2;
    }
    nav a {
      text-decoration: none;
      color: #333;
    }
  `]
})
export class AppComponent {}