import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable(
    { providedIn: 'root' }
)
export class AuthService {
    tokenUser: any 
    // public User = jwtDecode(this.tokenUser)
    userObserver: any = new BehaviorSubject<any>({})
    user: any
    setToken (data: any) {
        localStorage.setItem("accessToken", data);
        this.tokenUser = localStorage.getItem("accessToken")
        this.user = jwtDecode(this.tokenUser)
        this.userObserver.next(this.user)
        console.log(this.userObserver);
    }

    getToken(): any {
        return this.userObserver.asObservable();
    };

    refreshToken(data: any) {
        localStorage.removeItem("accessToken");
        localStorage.setItem("accessToken", data);
        this.tokenUser = localStorage.getItem("accessToken")
        this.user = jwtDecode(this.tokenUser)
        this.userObserver.next(this.user)
        console.log(this.userObserver)
    }
}