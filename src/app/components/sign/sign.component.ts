import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent {
  sign_form!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {

  }

  ngOnInit() {
    this.sign_form = this.fb.group({
      user_name: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      checked: false,
    });
  }

  sign() {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "這個功能尚未開啟哦!",
      footer: 'need help?</a>'
    });
  }
}
