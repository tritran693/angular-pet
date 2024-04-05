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
    new User('Tri Tran', 23),
    new User('Phuoc Lam', 69),
    new User('The Do', 100)
  ];
  user = {
    name: 'Tri Tran',
    age: 23
  }
  name=""
  flag=true
  progress=30;

  // function

  handler() {
    console.log("ahihi");
  }

  increase(){
    this.progress += 1;
  }
}
