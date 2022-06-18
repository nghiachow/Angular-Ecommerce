import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: any
  constructor(private token: AuthService) { }

  ngOnInit(): void {
  }
  getToken() {
    this.token.getToken().subscribe((user: any) => {
        this.user = user;
        console.log(this.user);
      })
    }
}
