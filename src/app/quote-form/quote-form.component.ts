import { Component, OnInit } from '@angular/core';
import {FormUser} from '../form-user';
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  userForm = [
    new FormUser('PASSION LEAD US HERE', 'FEYSAL IBRAHIM', 0, 120, new Date (10 / 8 / 2018))
    ];
  constructor() { }

