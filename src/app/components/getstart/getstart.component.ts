import { Component } from '@angular/core';
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-getstart',
  templateUrl: './getstart.component.html',
  styleUrls: ['./getstart.component.scss']
})
export class GetstartComponent {
  constructor(private router: Router) {

  }

  ngOnInit() {

  }
  login() {
    Swal.fire({
      title: "正在跳轉登入頁面",
      html: "I will close automatically.",
      timerProgressBar: true,
      timer: 1500,
      didOpen: () => {
        Swal.showLoading();
      }
    }).then((result) => {
      this.router.navigate(['/login']);
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
  }
  sign() {
    Swal.fire({
      title: "正在跳轉註冊頁面",
      html: "I will close automatically.",
      timerProgressBar: true,
      timer: 1500,
      didOpen: () => {
        Swal.showLoading();
      }
    }).then((result) => {
      this.router.navigate(['/sign']);
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
  }
}
