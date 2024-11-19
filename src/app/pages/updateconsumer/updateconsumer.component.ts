import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Consumerbusiness } from 'src/app/classes/consumerbusiness';

@Component({
  selector: 'app-updateconsumer',
  templateUrl: './updateconsumer.component.html',
  styleUrls: ['./updateconsumer.component.css'],
})
export class UpdateconsumerComponent implements OnInit {
  consumer = new Consumerbusiness();
  constructor(private router: Router) {}

  ngOnInit(): void {}

  updateConsumer(id: number) {
    this.router.navigate(['updateconsumerpage', id]);
  }
}
