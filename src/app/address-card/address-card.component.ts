import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  @Input('userParameter') userObj: User;
  isAvailableVar: boolean = true;

  constructor() { 
  }

  isAvailable() {
    this.isAvailableVar = !this.isAvailableVar;
  }

  ngOnInit() {
  }

}
