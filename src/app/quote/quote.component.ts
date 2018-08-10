import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  title = 'Quotes';
  quotes = [
    new Quote(1., 'feysal', 'PASSION LED US HERE' ),
  ];

  constructor() { }

  ngOnInit() {
  }

}
