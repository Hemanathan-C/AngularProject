import { Injectable } from "@angular/core";
import { NewTaskData } from "./new-task/new-task.model";

@Injectable({ providedIn: 'root' })
export class TasksService{
  private tasks = [
  {
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary:
      'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2025-12-31',
  },
  {
    id: 't2',
    userId: 'u3',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2024-05-31',
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Prepare issue template',
    summary:
      'Prepare and describe an issue template which will help with project management',
    dueDate: '2024-06-15',
  },]

  selectedUserTasks(id: string){
    console.log('APP Selected USER :',this.tasks.find((user) => user.id === id)!);
    const t = this.tasks.filter((task) => task.userId === id)!;
    if (!t) console.warn('Task not found for ID:', id);
    return t;
  }

  onSubmit(taskData: NewTaskData, id: string) {
    this.tasks.push({
      id: new Date().toISOString(),
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
      userId: id
    });
    console.log('Task added:', taskData);
  }
}