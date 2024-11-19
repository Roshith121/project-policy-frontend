import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Consumerbusiness } from 'src/app/classes/consumerbusiness';
import { ViewconsumerService } from 'src/app/services/viewconsumer.service';

@Component({
  selector: 'app-viewconsumerpage',
  templateUrl: './viewconsumerpage.component.html',
  styleUrls: ['./viewconsumerpage.component.css'],
})
export class ViewconsumerpageComponent implements OnInit {
  id!: number;
  alert: boolean = false;
  tableview: boolean = true;
  msg: any = '';
  consumer: any = Consumerbusiness;
  constructor(
    private route: ActivatedRoute,
    private service: ViewconsumerService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.consumer = new Consumerbusiness();
    this.service.getConsumerById(this.id).subscribe(
      (data) => {
        console.log('response recived');
        this.consumer = data;
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
