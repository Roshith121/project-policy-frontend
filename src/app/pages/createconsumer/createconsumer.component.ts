import { Component, OnInit } from '@angular/core';
import { Consumerbusiness } from 'src/app/classes/consumerbusiness';
import { ConsumerService } from 'src/app/services/consumer.service';

@Component({
  selector: 'app-createconsumer',
  templateUrl: './createconsumer.component.html',
  styleUrls: ['./createconsumer.component.css'],
})
export class CreateconsumerComponent implements OnInit {
  consumer = new Consumerbusiness();
  msg: any = '';
  alert: boolean = false;

  constructor(private service: ConsumerService) {}

  ngOnInit(): void {}

  doSubmitConsumer() {
    this.service.doSubmitConsumerDetails(this.consumer).subscribe(
      (data) => {
        console.log('Response received');
        console.log(this.consumer);
        console.log(data);
        this.consumer = data;
        alert(data.message);
      },

      (error) => {
        console.log('Error Occured');
        console.log(this.consumer);
        this.alert = true;
        this.msg = error.error;
      }
    );
  }
}
