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
  filteredProducts: any[] = [];
  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.productService.getJsonData().subscribe(data => {
      this.product = data;
      console.log(data)
    });
  }
  //get資料
  loadInitialProductList() {
    this.productService.getJsonData().subscribe(data => {
      this.product = data;
    });
  }
  //依照name搜尋
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
	//依照category分類
  filterProducts(category: string) {
    this.productService.getJsonData().subscribe(data => {
      this.product = data;
      this.filteredProducts = this.product.filter(product => product.category === category);
      this.product = this.filteredProducts;
      console.log(this.filteredProducts)
    });
  }
}
