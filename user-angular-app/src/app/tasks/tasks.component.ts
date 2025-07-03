import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../user/dummy-users'; 
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './new-task/new-task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent,NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'] 
})
export class TasksComponent {
  @Input() name!: string;
  @Input() id!: string;
  isAddTask = false;
  
  constructor(private tasksService: TasksService) {}

  get selectedUserTask(){
    return this.tasksService.selectedUserTasks(this.id);
  }

  onTaskCompleted(taskId: string) {
    console.log('Task completed:', taskId);
    // this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  onAddTask() {
    this.isAddTask = true;
  }

  onCancelAddTask() {
    this.isAddTask = false;
  }

  onSubmit(taskData: NewTaskData) {
    // this.tasks.push({
    //   id: new Date().toISOString(),
    //   title: taskData.title,
    //   summary: taskData.summary,
    //   dueDate: taskData.dueDate,
    //   userId: this.id
    // });
    this.isAddTask = false;
    console.log('Task added:', taskData);
  }
}
