import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  userInstance: User;

  constructor() {
    this.userInstance = new User();
    this.userInstance.name = 'Kinjal Mistry';
    this.userInstance.designation = 'Software Engineer';
    this.userInstance.address = '123 Same street City State USA'
    this.userInstance.phone = [
      '123-456-7890',
      '222-444-5564'
    ]
  }
}
