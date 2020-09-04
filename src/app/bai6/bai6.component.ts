import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai6',
  templateUrl: './bai6.component.html',
  styleUrls: ['./bai6.component.sass']
})
export class Bai6Component implements OnInit {

  constructor() { }
  public tongduong(n:number[]){
    let S=0;
  for(let i=0; i<n.length;i++){
  if(n[i]>=0){
    S+=n[i];
  } else continue;
  }return S;
  }
  title="Bài 6: Tính tổng các phần tử là các số dương có trong một dãy số.";
  tong=0;
  dayso=[-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10]
  ngOnInit(): void {
    this.tong=this.tongduong(this.dayso);
  }

}
