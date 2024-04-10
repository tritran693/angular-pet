import { Component } from '@angular/core';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-raider';
  users: User[] = [
    new User(1,'Tri Tran', 23),
    new User(2,'Phuoc Lam', 69),
    new User(3,'The Do', 100),
    new User(4,'Tuoi Dinh', 25),
    new User(5,'Tu Nguyen', 150),
    new User(6,'Van Luong', 24),
    new User(7,'Tri Huynh', 35),
    new User(8,'Tai Vu', 200),
    new User(9,'Thanh Nguyen', 40)
  ];
  user = {
    name: 'Tri Tran',
    age: 23
  }
  name="siuuu"
  flag=true
  progress=30;
  currentUser: User = this.users[0];
  checked=false;
  counter = 1;
  links = ['Active', 'Link1', 'Link3'];

  // function

  handler() {
    console.log("ahihi");
  }

  increase(){
    this.progress += 1;
  }

  handleSelectUser(user: User){
    this.currentUser = user;
  }

  handleDeleteUser(id: number){
    this.users = this.users.filter(user => user.id !== id);
    if(this.currentUser.id === id){
      this.currentUser = this.users[0];
    }
  }
}
