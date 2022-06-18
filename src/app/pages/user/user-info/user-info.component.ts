import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/service/auth.service';
import jwtDecode from 'jwt-decode';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  user: any
  tokenUser: any
  form!: FormGroup;
  constructor(
    private authService: AuthService, 
    private http: HttpClient,
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit(): void {
    this.authService.getToken().subscribe((res: any) => {
      this.user = res;
    })
    this.getToken();
    this.form = this.formBuilder.group({
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      phone: this.user.phone,
      password: ''
    })
  }

  getToken() {
    this.tokenUser = localStorage.getItem("accessToken")
    this.user = jwtDecode(this.tokenUser)
  }

  submit(): void {
    this.http.put<any>(`http://localhost:5050/users/${this.user.userId}`, this.form.getRawValue())
    .subscribe((res: any) => {
      if (res.success == true){
        alert('Cập nhật thông tin thành công')
        localStorage.removeItem("accessToken");
        this.refreshToken();
        window.location.reload();
      } else {
        console.log('else',res);
        alert(res.message)
      }
    },(err: any) => console.log('error',err))
  }

  refreshToken(): void {
    this.http.get(`http://localhost:5050/users/refresh/${this.user.userId}`).subscribe(
      (res: any) => {
        this.authService.setToken(res.refreshToken)
      }
    )
  }
}
