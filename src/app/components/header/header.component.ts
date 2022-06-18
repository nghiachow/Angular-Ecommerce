import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnChanges, SimpleChanges, Input, NgZone } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: any
  tokenUser: any
  constructor(private token:AuthService ) { }
  
  ngOnInit(): void {
    this.token.getToken().subscribe((res: any) => {
      this.user = res;
    })
    this.getToken()
  }

  getToken() {
    this.tokenUser = localStorage.getItem("accessToken")
    this.user = jwtDecode(this.tokenUser)
  }
  
  

  logOut() {
    localStorage.removeItem("accessToken")
    window.location.reload()
  }

}
