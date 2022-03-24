import { Component, OnInit } from '@angular/core';
import { User } from './app.model';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService]
})
export class AppComponent implements OnInit {
  title = 'task2';
  users!: User[];
  firstTask: boolean = false;
  count: number[] = [1, 2, 3, 4, 5];
  
  constructor(private usersService: UsersService){}
  
  async loadUsers(){
    this.users = await this.usersService.getUsers();
  }

  ngOnInit() {
    this.loadUsers();
  }
}
