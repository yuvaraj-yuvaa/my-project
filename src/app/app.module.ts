import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { CustomdirectiveComponent } from './myowndirective/customdirective/customdirective.component';
import { HighlightDirective } from './myowndirective/highlight.directive';
import { InputformatDirective } from './myowndirective/inputformat.directive';


@NgModule({
  declarations: [
    AppComponent,
    AddtocartComponent,
    AddproductsComponent,
    CustomdirectiveComponent,
    HighlightDirective,
    InputformatDirective,
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
