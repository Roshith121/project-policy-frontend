import { Component, OnInit } from '@angular/core';
import { Consumerbusiness } from '../classes/consumerbusiness';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  consumer = new Consumerbusiness();
  constructor() {}

  ngOnInit(): void {}
}
