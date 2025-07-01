import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../user/dummy-users'; 
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from './task/dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent,NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'] 
})
export class TasksComponent {
  @Input() name!: string;
  @Input() id!: string;
  tasks = DUMMY_TASKS;
  isAddTask = false;
  
  get selectedUserTask(){
    console.log('APP Selected USER :',this.tasks.find((user) => user.id === this.id)!);
    const t = this.tasks.filter((task) => task.userId === this.id)!;
    if (!t) console.warn('Task not found for ID:', this.id);
    return t;
  }

  onTaskCompleted(taskId: string) {
    console.log('Task completed:', taskId);
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  onAddTask() {
    this.isAddTask = true;
  }

  onCancelAddTask() {
    this.isAddTask = false;
  }
}
