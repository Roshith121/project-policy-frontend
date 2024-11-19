import { Component, OnInit } from '@angular/core';
import { Policy } from 'src/app/classes/policy';
import { ConsumerpolicyService } from 'src/app/services/consumerpolicy.service';

@Component({
  selector: 'app-createpolicy',
  templateUrl: './createpolicy.component.html',
  styleUrls: ['./createpolicy.component.css'],
})
export class CreatepolicyComponent implements OnInit {
  consumerPolicy = new Policy();
  msg = '';
  alert = false;
  constructor(private service: ConsumerpolicyService) {}

  ngOnInit(): void {}

  createPolicy(consumerPolicy: Policy) {
    this.service.createConsumerPolicy(this.consumerPolicy).subscribe(
      (data) => {
        console.log('Response Received');

        consumerPolicy = data;
        this.alert = true;
        this.msg = 'Policy Status : Initiated';
        alert(data.message);
      },
      (error) => {
        console.log('Error Occured');
        this.alert = true;
        this.msg = 'No Consumer Found';
      }
    );
  }
}
