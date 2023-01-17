import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http'
import { IProduct } from '../models/products'
import { Observable } from 'rxjs/internal/Observable'
import { catchError, delay, retry, tap } from 'rxjs/operators'
import { throwError } from 'rxjs/internal/observable/throwError'
import { ErrorService } from './error.service'

@Injectable({
    providedIn: 'root'
})

export class ProductsService {
    private productsUrl: string = 'https://fakestoreapi.com/products';
    products: IProduct[] = [];
    constructor(
        private http: HttpClient,
        private errorService: ErrorService
    ) {
    }

    getAll(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productsUrl, {
            params: new HttpParams({
                fromObject: { limit: 5 }
            })
        }).pipe(
            retry(2),
            tap(products => this.products = products),
            catchError(this.errorHandler.bind(this))
        )
    }

    errorHandler(error: HttpErrorResponse) {
        this.errorService.handle(error.message)
        return throwError(() => error.message)
    }

    create(product: IProduct): Observable<IProduct> {
        return this.http.post<IProduct>(this.productsUrl, product)
            .pipe(
                tap(prod => this.products.push(prod))
            )
    }
}