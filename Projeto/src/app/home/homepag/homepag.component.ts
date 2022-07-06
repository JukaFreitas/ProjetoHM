import { Component, OnInit } from '@angular/core';
import { ServstoreService } from '../../services/servstore.service';



@Component({
  selector: 'app-homepag',
  templateUrl: './homepag.component.html',
  styleUrls: ['./homepag.component.css']
})
export class HomepagComponent implements OnInit {


  

  constructor(private servStore: ServstoreService) { }

  ngOnInit(): void {

  }

  

}
