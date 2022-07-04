import { Component, Input, OnInit } from '@angular/core';
import { faStar as faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() dados : any;
  faStar = faStar;
  faStarSolid = faStarSolid;
  toggle:boolean= false;


  constructor() { }

  ngOnInit(): void {
  }

  addWishlist(){
   this.faStar;
   }


  }

