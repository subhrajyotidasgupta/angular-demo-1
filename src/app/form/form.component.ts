import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../shared/user.model';
import { UserListService } from '../user-list/user-list.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @ViewChild('f') userForm: NgForm;
  genders = ['Male', 'Female', 'Others'];
  user: User;

  constructor(private userService: UserListService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(this.userForm);
    this.user = new User(
      this.userForm.value.name,
      this.userForm.value.gender,
      this.userForm.value.phone,
      this.userForm.value.email
    );
    this.userService.addUser(this.user);
  }

}
