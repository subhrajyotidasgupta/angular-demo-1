import { Component, Input, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { UserListService } from './user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[]; 

  constructor(private userService: UserListService) {
    this.userService.userAdded.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    );
   }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

}
