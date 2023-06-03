import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/_services/auth.service';
import { User } from '../auth/_models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: User | null = new User;
  constructor(
    private authSvc: AuthService
  ) {
  }

  ngOnInit(): void {
    this.user = this.authSvc.userValue;
  }

}
