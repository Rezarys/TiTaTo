import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pion',
  templateUrl: './pion.component.html',
  styleUrls: ['./pion.component.css']
})
export class PionComponent implements OnInit {
  
  player: number;
  
  constructor() { }

  ngOnInit() {
    this.player = 0;
  }

}
