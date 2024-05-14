import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { AuthService } from './auth.service';
import Swal from "sweetalert2";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login_form!: FormGroup;
  constructor(private fb: FormBuilder,private router: Router, private authService: AuthService) {}
  login() {
    const { user_name, password } = this.login_form.value;
    if (this.authService.login(user_name, password)) {
      Swal.fire({
        title: '登入',
        text: "歡迎您 :)",
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        this.router.navigate(['/dashboard']);
      });
    } else {
      Swal.fire({
        title: '失敗',
        text: "請確認帳密是否正確 :( (密碼是12345哦哦哦哦)",
        icon: 'error',
        showConfirmButton: false,
        timer: 2500
      });
      console.log('登錄失敗');
    }
  }
  ngOnInit() {
    this.login_form = this.fb.group({
      user_name: ['admin', [Validators.required]],
      password: ['12345', [Validators.required]],
      checked: false,
    });
  }

  Forgot() {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "這個功能尚未開啟哦!",
      footer: 'need help?</a>'
    });
  }

}
