import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';


const randomeIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
    user = DUMMY_USERS[randomeIndex];
    userImg = `assets/users/${this.user.avatar}`;

    get imagePath() {
        return 'assets/users/' + this.user.avatar;
    }
}
