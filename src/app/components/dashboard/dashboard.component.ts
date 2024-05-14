import {Component, ViewChild} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../share/models/product";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @ViewChild('dv') dataView: DataView | undefined;
  product!: Product[];
  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.productService.getJsonData().subscribe(data => {
      this.product = data;
      console.log(data)
    });
  }
  applyGlobalFilter(event: any) {
    const keyword = event.target.value.toLowerCase();
    if (keyword === '') {
      this.loadInitialProductList();
    } else {
      this.product = this.product.filter(item =>
        (item.name && item.name.toLowerCase().includes(keyword))
      );
    }
  }
  loadInitialProductList() {
    this.productService.getJsonData().subscribe(data => {
      this.product = data;
    });
  }
}
