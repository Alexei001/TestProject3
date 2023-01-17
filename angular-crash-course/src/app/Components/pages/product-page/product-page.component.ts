import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/models/products';
import { ModalService } from 'src/app/services/modal.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  title = 'Angular-Crash-Course';
  loading = false;
  products$: Observable<IProduct[]>;
  term = '';

  constructor(public productService: ProductsService, public modalService: ModalService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.productService.getAll().subscribe(() => {
      this.loading = false
    })
  };
}
