import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardwishlist',
  templateUrl: './cardwishlist.component.html',
  styleUrls: ['./cardwishlist.component.css']
})
export class CardwishlistComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
