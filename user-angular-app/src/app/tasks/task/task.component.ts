import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../new-task/new-task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';
import { SharedModule } from '../../shared/shared.module';


@Component({
  selector: 'app-task',
  imports: [SharedModule, DatePipe],
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
