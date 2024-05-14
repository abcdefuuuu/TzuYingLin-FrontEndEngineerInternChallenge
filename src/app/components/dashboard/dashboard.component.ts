import { Component } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../share/models/product";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  product!: Product[];
  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.productService.getJsonData().subscribe(data => {
      this.product = data;
      console.log(data)
    });
  }
}
