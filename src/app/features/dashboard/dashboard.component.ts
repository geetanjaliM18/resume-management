import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../../shared/highlight.directive';  // adjust path as needed

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HighlightDirective],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  totalEmployees: number = 42;
  activeProjects: number = 7;
  pendingTasks: number = 15;
}
