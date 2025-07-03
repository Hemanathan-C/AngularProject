import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from './new-task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input() id!: string;
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();

  tasksService = inject(TasksService);
  enteredTaskTitle = '';
  enteredTaskSummary = '';
  enteredTaskDueDate = '';
  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.tasksService.onSubmit({
      title: this.enteredTaskTitle,
      summary: this.enteredTaskSummary,
      dueDate: this.enteredTaskDueDate
    },this.id);
  }
}
