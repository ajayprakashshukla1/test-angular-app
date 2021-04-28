import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from './services/user/user.service';
import {User} from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-node-test';
  form: FormGroup;
  users: User[];
  addMode = true;
  editMode = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.form = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      age: ['', Validators.required],
    });
    this.users = [];
  }

  ngOnInit(): void {
    this._fetch();
  }

  _fetch(): void {
    this.userService.find()
      .subscribe((data) => {
        console.log('users', data);
        this.users = data;
      });
  }

  updateUser(user: User): void {
    this.form = this.fb.group({
      id: [user?.id],
      name: [user?.name, Validators.required],
      surname: [user?.surname, Validators.required],
      age: [user?.age, Validators.required],
    });
    this.addMode = false;
    this.editMode = true;
  }

  submitForm(): void {
    const formData = this.form.getRawValue();
    if (this.addMode) {
      this.userService.create({
        name: formData?.name,
        surname: formData?.surname,
        age: formData?.age
      })
        .subscribe((data) => {
          console.log('userCreated', data);
          this._fetch();
        });
    } else if (this.editMode) {
      this.userService.update(formData)
        .subscribe((data) => {
          console.log('userUpdate', data);
          this._fetch();
        });
    }
  }

  trackUsers(index: number, user: User): any {
    return user.id;
  }
}
