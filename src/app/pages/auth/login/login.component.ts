import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: any
  form!: FormGroup;
  message = "Sai email hoặc mật khẩu"
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private token: AuthService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    })
  }

  submit(): void {
    this.http.post('http://localhost:5050/authenticate', this.form.getRawValue()).subscribe(
      (res: any) => {
        if (res.success == true) {
          this.token.setToken(res.accessToken)
          this.router.navigate(['/']);
        } else if (res.success == false) {
          console.log(res.message);
          alert(res.message)
        }
      },err => {
        console.log(err);
      }
    )
  }

  
  getToken() {
    this.token.getToken().subscribe((user: any) => {
        this.user = user;
        this.ngOnInit();
        console.log(this.user);
      })
    }
  }

