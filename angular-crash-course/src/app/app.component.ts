import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/products';
import { ProductsService } from './services/products.service';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/operators';
import { ModalService } from './services/modal.service';
import { products } from './data/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
