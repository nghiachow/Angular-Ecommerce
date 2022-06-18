import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    })
  }

  submit(): void {
    this.http.post('http://localhost:5050/users', this.form.getRawValue())
    .subscribe((res: any) => {
      if (res.success == true){
        this.router.navigate(['/login'])
      } else {
        alert(res.message)
      }
    })
  }
}
