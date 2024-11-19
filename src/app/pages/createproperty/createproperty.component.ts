import { Component, OnInit } from '@angular/core';
import { Businessproperty } from 'src/app/classes/businessproperty';
import { BusinesspropertyService } from 'src/app/services/businessproperty.service';

@Component({
  selector: 'app-createproperty',
  templateUrl: './createproperty.component.html',
  styleUrls: ['./createproperty.component.css'],
})
export class CreatepropertyComponent implements OnInit {
  property = new Businessproperty();
  constructor(private service: BusinesspropertyService) {}

  ngOnInit(): void {}

  doSubmitBusinessProperty(property: Businessproperty) {
    this.service.saveConsumerPropertyDetails(this.property).subscribe(
      (data) => {
        console.log('Response received');
        property = data;
        alert(data.message);
      },
      (error) => {
        console.log('Error occured');
        console.log(error);
      }
    );
  }
}
