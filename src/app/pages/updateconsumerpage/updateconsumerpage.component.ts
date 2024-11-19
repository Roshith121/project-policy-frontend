import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Consumerbusiness } from 'src/app/classes/consumerbusiness';
import { ConsumerService } from 'src/app/services/consumer.service';
import { UpdateconsumerService } from 'src/app/services/updateconsumer.service';

@Component({
  selector: 'app-updateconsumerpage',
  templateUrl: './updateconsumerpage.component.html',
  styleUrls: ['./updateconsumerpage.component.css'],
})
export class UpdateconsumerpageComponent implements OnInit {
  consumer = new Consumerbusiness();
  id!: number;
  msg: any = '';
  alert: boolean = false;

  constructor(
    private service: UpdateconsumerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.updateConsumerById(this.id).subscribe(
      (data) => {
        console.log('Updated');
        this.consumer = data;
        console.log(data);
        console.log(this.id);
      },

      (error) => {
        console.log('Error occured');
        console.log(error);
        this.alert = true;
        this.msg = error.error;
        console.log(this.msg);
      }
    );
  }

  doUpdateConsumer() {
    this.service.doUpdateConsumerDetails(this.id, this.consumer).subscribe(
      (data) => {
        console.log('Response received');
        console.log('Consumer' + this.consumer);
        console.log('Data' + data);
        this.consumer = data;
        alert(data.message);
      },

      (error) => {
        console.log('Error Occured');
        console.log(this.consumer);
        this.msg = error.error;
      }
    );
  }
}
