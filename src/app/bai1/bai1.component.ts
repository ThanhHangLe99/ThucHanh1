import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai1',
  templateUrl: './bai1.component.html',
  styleUrls: ['./bai1.component.sass']
})
export class Bai1Component implements OnInit {

  constructor() { }
  title="Bai 1: tinh S(n)=x+x^2+x^3+...+x^n";
  x=10;
  n=10;
  S=0;
  ngOnInit(): void {
    for (let i=1;i<=(this.n);i++){
      this.S=this.S+Math.pow((this.x),i);
    }
    console.log(this.S)
  }

}
