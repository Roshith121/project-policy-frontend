import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quotes } from 'src/app/classes/quotes';
import { ConsumerpolicyService } from 'src/app/services/consumerpolicy.service';

@Component({
  selector: 'app-viewquotes',
  templateUrl: './viewquotes.component.html',
  styleUrls: ['./viewquotes.component.css'],
})
export class ViewquotesComponent implements OnInit {
  quotes = new Quotes();
  businessValue!: number;
  propertyValue!: number;
  propertyType!: string;
  msg: any = '';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ConsumerpolicyService
  ) {}

  ngOnInit(): void {
    this.businessValue = this.route.snapshot.params['businessValue'];
    this.propertyValue = this.route.snapshot.params['propertyValue'];
    this.propertyType = this.route.snapshot.params['propertyType'];
    this.quotes = new Quotes();
    this.service
      .getQuotes(this.businessValue, this.propertyValue, this.propertyType)
      .subscribe(
        (data) => {
          console.log('Response Received');
          this.quotes = data;
          this.msg = data.quotes;
        },
        (error) => {
          console.log('Error Occured');
        }
      );
  }
  viewQuotes(
    businessValue: number,
    propertyValue: number,
    propertyType: string
  ) {
    this.router.navigate([
      '/viewquotes',
      businessValue,
      propertyValue,
      propertyType,
    ]);
  }

  // getQuotes() {
  //   this.service
  //     .getQuotes(this.businessValue, this.propertyValue, this.propertyType)
  //     .subscribe(
  //       (data) => {
  //         console.log('Response Received');
  //         this.quotes = data;
  //       },
  //       (error) => {
  //         console.log('Error Occured');
  //       }
  //     );
  // }
}
