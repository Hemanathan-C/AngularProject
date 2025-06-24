import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../user/dummy-users'; 

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'] 
})
export class TasksComponent {
  @Input() id: string = '';
  userId = DUMMY_USERS[Number(this.id)];
}
