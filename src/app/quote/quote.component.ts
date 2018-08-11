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
    new Quote('PASSION LEAD US HERE', 'FEYSAL IBRAHIM', 0, 120, new Date (10 / 8 / 2018))
    ];


  constructor() { }

  ngOnInit() {
  }

}
