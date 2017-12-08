import { Component, OnInit } from '@angular/core';
import { Receipe } from '../receipe.model';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
  reciepes : Receipe[] = [
    new Receipe("A Test Receipe","This is simply description","https://assets.epicurious.com/photos/59bc186dbf70cb1b35bc3e22/master/pass/SIMPLE-IS-BEST-DRESSING-RECIPE-07092017.jpg")
  ];
  constructor() { }

  ngOnInit() {
  }

}
