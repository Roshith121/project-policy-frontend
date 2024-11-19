import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Businessproperty } from 'src/app/classes/businessproperty';

@Component({
  selector: 'app-viewproperty',
  templateUrl: './viewproperty.component.html',
  styleUrls: ['./viewproperty.component.css'],
})
export class ViewpropertyComponent implements OnInit {
  property = new Businessproperty();
  constructor(private router: Router) {}

  ngOnInit(): void {}
  getConsumerProperty(id: number) {
    this.router.navigate(['/viewpropertypage', id]);
  }
}
