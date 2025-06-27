import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../user/dummy-users'; 
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from './task/dummy-tasks';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'] 
})
export class TasksComponent {
  @Input() name!: string;
  tasks = DUMMY_TASKS;
}
