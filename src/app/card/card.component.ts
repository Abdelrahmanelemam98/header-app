import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  user: any;
  constructor(private userServices: UserService) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.userServices.getUser().subscribe((data) => {
      this.user = data;
      console.log(this.user);
    });
  }
}
