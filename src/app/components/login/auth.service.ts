import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInStatus: boolean = false;
  constructor() { }

  // 登入
  login(username: string, password: string): boolean {
    if (username == 'admin' && password == '12345') {
      this.isLoggedInStatus = true;
      console.log(this.isLoggedInStatus);
      return true;
    } else {
      console.log(this.isLoggedInStatus);
      return false;
    }
  }

  // 获取登录状态
  isLoggedIn(): boolean {
    return this.isLoggedInStatus;
  }

  //登出
  logout(): void {
    this.isLoggedInStatus = false;
  }

}
