import { EventEmitter, Output } from '@angular/core';
import { User } from '../shared/user.model';

export class UserListService {
    userAdded = new EventEmitter<User[]>();

    private users: User[] = [];
    //     new User(
    //         'Bill Gates',
    //         'Male',
    //         'bill@gates.com',
    //         '9876543210'
    //     ),
    //     new User(
    //         'Dennis Ritchie',
    //         'Male',
    //         'dennis@ritchie.com',
    //         '0321654987'
    //     )
    // ];

    getUsers() {
        return this.users.slice();
    }

    addUser(user: User) {
        this.users.push(user);
        this.userAdded.emit(this.users);
        // console.log(this.users);
    }
}