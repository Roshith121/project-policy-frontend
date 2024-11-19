import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Businessproperty } from 'src/app/classes/businessproperty';
import { BusinesspropertyService } from 'src/app/services/businessproperty.service';

@Component({
  selector: 'app-viewpropertypage',
  templateUrl: './viewpropertypage.component.html',
  styleUrls: ['./viewpropertypage.component.css'],
})
export class ViewpropertypageComponent implements OnInit {
  alert: boolean = false;
  tableview: boolean = true;
  msg: any = '';
  property: any = Businessproperty;
  id!: number;
  constructor(
    private route: ActivatedRoute,
    private service: BusinesspropertyService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.property = new Businessproperty();
    this.service.getConsumerPropertyDetails(this.id).subscribe(
      (data) => {
        console.log('response recived');
        this.property = data;
      },
      (error) => {
        console.log('error occured');
        this.alert = true;
        this.tableview = false;
        this.msg = error.error;
        console.log(this.msg);
      }
    );
  }
}
