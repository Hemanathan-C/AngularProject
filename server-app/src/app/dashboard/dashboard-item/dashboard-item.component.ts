import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {
  @Input() title!: string;
  @Input() altText!: string;
  @Input() iconSrc!: string;
}
