import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Policy } from 'src/app/classes/policy';

@Component({
  selector: 'app-viewpolicy',
  templateUrl: './viewpolicy.component.html',
  styleUrls: ['./viewpolicy.component.css'],
})
export class ViewpolicyComponent implements OnInit {
  consumerPolicy = new Policy();
  pid!: string;
  consumerid!: number;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.viewConsumerPolicyPage(this.pid, this.consumerid);
  }
  viewConsumerPolicyPage(pid: string, consumerid: number) {
    this.router.navigate(['viewpolicypage', pid, consumerid]);
  }
}
