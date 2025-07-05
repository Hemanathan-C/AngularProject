import { Component } from '@angular/core';
import { DUMMY_USERS } from './user/dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false
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
