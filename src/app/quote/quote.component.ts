import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote('passion brought us here', 'Feysal ibrahim', 'hassan', 0, 0, new Date(2018, 5, 1)),
  ];
  createNewQuote(quote) {
    const quoteLength = this.quotes.length;
    quote.dateCreated = new Date();
    this.quotes.push(quote);
    console.log(this.quotes);
  }
  deleteQuote(complete, index) {
    if (complete) {
      this.quotes.splice(index, 1);
    }
  }
  toggleDetails(index) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
constructor() { }

  ngOnInit() {
  }

}
