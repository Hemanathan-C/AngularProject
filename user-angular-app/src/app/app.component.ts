import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './user/dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,UserComponent,TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'user-angular-app';
  users = DUMMY_USERS;
  userId = '';

  get selectedUser(){
    console.log('APP Selected USER :',this.users.find((user) => user.id === this.userId)!);
    return this.users.find((user) => user.id === this.userId)!;
  }

  onSelectUser(id: string) {
  console.log('APP User selected:', id);
    this.userId = id;
  }

}
