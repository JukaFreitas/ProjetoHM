import { Component, Input, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() dados : any;
  faStar = faStar;


  constructor() { }

  ngOnInit(): void {
  }

}
