import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './Components/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { GlobalErrorComponent } from './Components/global-error/global-error.component';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './Components/modal/modal.component';
import { CreateProductComponent } from './Components/create-product/create-product.component';
import { FocusDirective } from './directives/focus.directive';
import { ProductPageComponent } from './components/pages/product-page/product-page.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    GlobalErrorComponent,
    FilterProductsPipe,
    ModalComponent,
    CreateProductComponent,
    FocusDirective,
    ProductPageComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
