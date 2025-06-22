import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-header',
  imports: [RouterOutlet,UserComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = 'HELLO WORLD FROM HEADER COMPONENT';
}
