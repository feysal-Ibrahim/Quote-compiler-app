import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote = new Quote('', '', '', 0, 0, new Date());
  @Output() createQuote = new EventEmitter<Quote>();

  submitQuote() {
    this.createQuote.emit(this.newQuote);
  }

  constructor() { }

  ngOnInit() {
  }

}
