import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../new-task/new-task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task!: Task;
  @Output() taskCompleted = new EventEmitter<string>();
  
  onCompleteTask() {
    this.taskCompleted.emit(this.task.id);
  }
}
