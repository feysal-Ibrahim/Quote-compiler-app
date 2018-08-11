import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuotesDetailsComponent } from './quotes-details/quotes-details.component';
@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuotesDetailsComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
