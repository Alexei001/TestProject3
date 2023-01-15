import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http'
import { IProduct } from '../models/products'
import { Observable } from 'rxjs/internal/Observable'
import { catchError, delay } from 'rxjs/operators'
import { throwError } from 'rxjs/internal/observable/throwError'
import { ErrorService } from './error.service'

@Injectable({
    providedIn: 'root'
})

export class ProductsService {

    constructor(
        private http: HttpClient,
        private errorService: ErrorService
    ) {
    }

    getAll(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
            params: new HttpParams({
                fromObject: { limit: 5 }
            })
        }).pipe(
            catchError(this.errorHandler.bind(this))
        )
    }

    errorHandler(error: HttpErrorResponse) {
        this.errorService.handle(error.message)
        return throwError(() => error.message)
    }
}