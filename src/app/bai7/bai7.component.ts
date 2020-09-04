import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai7',
  templateUrl: './bai7.component.html',
  styleUrls: ['./bai7.component.sass']
})
export class Bai7Component implements OnInit {

  constructor() { }
  title="Bài 7: Sử dụng kỹ thuật lập trình hướng đối tượng giải phương trình trùng phương ";
  a=1;b=1;c=-20;
  ng:number[];
  ngOnInit(): void {
    var pttp =new PTTP(this.a,this.b,this.c);
    this.ng=pttp.giaipttp();
  }
}
  export class PTBac2{
    a:number;
    b:number;
    c:number;
    constructor(a:number,b:number,c:number){
      this.a=a;
      this.b=b;
      this.c=c;
    }
    public giaiphuongtrinh(){
      let nghiem:any[];
      if(this.a!=0){
        let delta=Math.pow(this.b,2)-(4*this.a*this.c);
        if(delta>0){
          let x1=(-this.b+Math.sqrt(delta))/(2*this.a);
          let x2=(-this.b-Math.sqrt(delta))/(2*this.a);
          nghiem=[x1,x2];
          return nghiem;
        }
        if(delta==0){
          let x1=(-this.b)/(2*this.a);
          nghiem=[x1];
          return nghiem;
        }else{
          nghiem=null;
          return nghiem;//tương tự return null
        }
      } else{
        return null;
      }
    }
  }
  export class PTTP extends PTBac2{

  constructor(a:number,b:number,c:number){
    super(a,b,c);
  }
  public giaipttp(){
    let nghiem:number[];
    let nghiemcuapt:number[];//đây là nghiệm của pt trùng phương
     nghiem= this.giaiphuongtrinh();//lấy về nghiệm của pt bậc 2
    switch(nghiem.length){
      case 0:{
        return null;
        break;
      }
      case 1:{
        if(nghiem[0]>=0){
           nghiemcuapt=[Math.sqrt(nghiem[0])];
          return nghiemcuapt;
        }else return null;
        break;
      }
      case 2:{
        if(nghiem[0]>=0&&nghiem[1]>0){
          nghiemcuapt=[Math.sqrt(nghiem[0]),Math.sqrt(nghiem[1]),-Math.sqrt(nghiem[0]),-Math.sqrt(nghiem[1])];
          return nghiemcuapt;
        }
        else if(nghiem[0]>=0){
          nghiemcuapt=[Math.sqrt(nghiem[0]),-Math.sqrt(nghiem[0])];
          return nghiemcuapt;
        }
        else if(nghiem[1]>=1){
          nghiemcuapt=[Math.sqrt(nghiem[1]),-Math.sqrt(nghiem[0])];
          return nghiemcuapt;
        } else return null;
        break;
      }
    }
  }
  }
