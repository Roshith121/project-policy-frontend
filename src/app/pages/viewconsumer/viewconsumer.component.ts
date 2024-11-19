import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

import { Consumerbusiness } from 'src/app/classes/consumerbusiness';
import { ConsumerService } from 'src/app/services/consumer.service';
import { ViewconsumerService } from 'src/app/services/viewconsumer.service';

@Component({
  selector: 'app-viewconsumer',
  templateUrl: './viewconsumer.component.html',
  styleUrls: ['./viewconsumer.component.css'],
})
export class ViewconsumerComponent implements OnInit {
  consumer = new Consumerbusiness();
  id!: number;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getConsumer(this.id);
  }

  getConsumer(id: number) {
    this.router.navigate(['viewconsumerpage', id]);
  }
}
