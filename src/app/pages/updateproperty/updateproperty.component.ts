import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Businessproperty } from 'src/app/classes/businessproperty';

@Component({
  selector: 'app-updateproperty',
  templateUrl: './updateproperty.component.html',
  styleUrls: ['./updateproperty.component.css'],
})
export class UpdatepropertyComponent implements OnInit {
  property = new Businessproperty();

  constructor(private router: Router) {}

  ngOnInit(): void {}
  updateBusinessProperty(id: number) {
    this.router.navigate(['/updatepropertypage', id]);
  }
}
