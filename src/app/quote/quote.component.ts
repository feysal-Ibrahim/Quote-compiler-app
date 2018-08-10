import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  title = 'Quotes Generating App!';
  quotes = [
    new Quote(1, 'Feysal', 'PASSION LEAD US HERE'),
    new Quote(1, 'Feysal', 'PASSION LEAD US HERE'),
    new Quote(1, 'Feysal', 'PASSION LEAD US HERE'),
    new Quote(1, 'Feysal', 'PASSION LEAD US HERE'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
