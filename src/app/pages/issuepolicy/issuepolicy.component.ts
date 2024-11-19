import { Component, OnInit } from '@angular/core';
import { Policy } from 'src/app/classes/policy';
import { ConsumerpolicyService } from 'src/app/services/consumerpolicy.service';

@Component({
  selector: 'app-issuepolicy',
  templateUrl: './issuepolicy.component.html',
  styleUrls: ['./issuepolicy.component.css'],
})
export class IssuepolicyComponent implements OnInit {
  consumerPolicy = new Policy();
  constructor(private service: ConsumerpolicyService) {}

  ngOnInit(): void {}

  issuePolicy(consumerpolicy: Policy) {
    this.service.issuePolicy(this.consumerPolicy).subscribe(
      (data) => {
        console.log('Response Received');
        consumerpolicy = data;
        alert('Policy Issued, Successfully!!');
      },
      (error) => {
        console.log('Error Occured');
        console.log(error.error);
      }
    );
  }
}
