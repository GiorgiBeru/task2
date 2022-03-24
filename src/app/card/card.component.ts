import { Component, Input, OnInit } from '@angular/core';
import { User } from '../app.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() user!: User;
  cardColor!: string;
  statusColor!: string;
  
  constructor() {}

  ngOnInit(): void {
    if (this.user.status === 'active') {
      this.cardColor = 'green';
      this.statusColor = 'chartreuse';
    }
    if (this.user.status === 'inactive') {
      this.cardColor = 'blue';
      this.statusColor = 'cornflowerblue';
    }
    if (this.user.status === 'deleted') {
      this.cardColor = 'red';
      this.statusColor = 'crimson';
    }
  }
}
