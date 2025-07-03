import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../new-task/new-task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  constructor(private tasksService: TasksService) {}
  @Input() task!: Task;
  
  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
