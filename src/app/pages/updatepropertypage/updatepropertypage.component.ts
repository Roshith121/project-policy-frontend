import { _fixedSizeVirtualScrollStrategyFactory } from '@angular/cdk/scrolling';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Businessproperty } from 'src/app/classes/businessproperty';
import { BusinesspropertyService } from 'src/app/services/businessproperty.service';

@Component({
  selector: 'app-updatepropertypage',
  templateUrl: './updatepropertypage.component.html',
  styleUrls: ['./updatepropertypage.component.css'],
})
export class UpdatepropertypageComponent implements OnInit {
  property = new Businessproperty();
  id!: number;
  msg: any = '';
  alert: boolean = false;
  constructor(
    private service: BusinesspropertyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getConsumerPropertyDetails(this.id).subscribe(
      (data) => {
        this.property = data;
        console.log('Update' + this.id);
      },
      (error) => {
        console.log('Error occured');
        this.alert = true;
        this.msg = error.error;
      }
    );
  }
  doUpdateBusinessProperty(property: Businessproperty) {
    this.service
      .updateConsumerPropertyDetails(this.id, this.property)
      .subscribe(
        (data) => {
          console.log('Updated, Response received');
          console.log('Property' + property);
          alert(data.message);
        },
        (error) => {
          console.log('error');
          this.alert = true;
          this.msg = error.error;
        }
      );
  }
}
