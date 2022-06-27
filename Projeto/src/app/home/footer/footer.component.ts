import { Component, OnInit } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import {faFacebook}from '@fortawesome/free-brands-svg-icons';
import {faInstagram}from '@fortawesome/free-brands-svg-icons';
import {faYoutube}from '@fortawesome/free-brands-svg-icons';
import {faPinterest}from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faYoutube = faYoutube; 
  faPinterest= faPinterest;

  constructor() { }

  ngOnInit(): void {
  }

}
