import {Component, ViewChild} from '@angular/core';
import {Sidebar} from "primeng/sidebar";
import Swal from "sweetalert2";
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  // @ts-ignore
  closeCallback(e): void {
    this.sidebarRef.close(e);
  }

  checked: boolean = false;
  sidebarVisible: boolean = false;
  constructor(private router: Router) {}
  logout() {
		this.sidebarVisible = false;
    Swal.fire({
      title: '成功登出',
      text: "祝福我 :)",
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      this.router.navigate(['/login']);
    });
  }
}
