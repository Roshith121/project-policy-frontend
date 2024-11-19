import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Policy } from 'src/app/classes/policy';
import { ConsumerpolicyService } from 'src/app/services/consumerpolicy.service';

@Component({
  selector: 'app-viewpolicypage',
  templateUrl: './viewpolicypage.component.html',
  styleUrls: ['./viewpolicypage.component.css'],
})
export class ViewpolicypageComponent implements OnInit {
  consumerpolicy = new Policy();
  msg: any = '';
  alert = false;
  tableview = true;
  pid!: string;
  consumerid!: number;
  constructor(
    private service: ConsumerpolicyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.pid = this.route.snapshot.params['pid'];
    this.consumerid = this.route.snapshot.params['consumerid'];
    this.consumerpolicy = new Policy();
    this.service.getPolicy(this.pid, this.consumerid).subscribe(
      (data) => {
        console.log('Response Received');
        this.consumerpolicy = data;
      },
      (error) => {
        console.log('Error Occured');
        this.alert = true;
        this.tableview = false;
        this.msg = error.error;
      }
    );
  }
}
