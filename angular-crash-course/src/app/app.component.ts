import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/products';
import { ProductsService } from './services/products.service';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private productService: ProductsService) {
  }
  title = 'Angular-Crash-Course'
  //products: IProduct[] = []
  loading = false;
  products$: Observable<IProduct[]>;

  ngOnInit(): void {
    this.loading = true;
    /*     this.productService.getAll().subscribe((products) => {
          this.products = products
          this.loading = false;
        }); */
    this.products$ = this.productService.getAll().pipe(
      tap(() => this.loading = false)
    )
  }
}
