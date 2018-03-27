import { Component, OnInit } from '@angular/core';

import { PionComponent } from '../pion/pion.component';
import { log } from 'util';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  plateau: PionComponent[] = new Array(9);
  turn: number;

  constructor() { }

  ngOnInit() {
    this.turn = 1;
    for (let index = 0; index < 9; index++) {
      this.plateau[index] = new PionComponent;
      this.plateau[index].player = 0;
    }
    console.log('init');
  }


  addPion(cell: number): void {
    // console.log('before click case value : ' + this.plateau[cell].player);
    if (this.plateau[cell].player === 0) {
      this.plateau[cell].player = this.turn;
      this.turn = -this.turn;
      console.log('addPion @ ' + cell);
      console.log('after click case value : ' + this.plateau[cell].player);
    }
  }
}
