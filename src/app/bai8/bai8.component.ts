import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai8',
  templateUrl: './bai8.component.html',
  styleUrls: ['./bai8.component.sass']
})
export class Bai8Component implements OnInit {

  constructor() { }
  V=1;
  a=3;b=6;c=4;h=12;
  title="Bài 8: Tính thể tích của hình chóp khi biết diện tích đáy và chiều cao";
  ngOnInit(): void {
    var n=new HinhChop(this.a,this.b,this.c,this.h);
    if(n.kiemtratamgiac()==true){
      this.V=Math.round(n.thetich());
    }
  }
}
export class HinhTamGiac{
 protected a:number;
 protected b:number;
 protected c:number;
  constructor(a:number,b:number,c:number){
    this.a=a;
    this.b=b;
    this.c=c;
  }
  public kiemtratamgiac(){
    if(this.a+this.b>this.c&&this.b+this.c>this.a){
      if(this.a+this.c>this.b){
        return true;
      }else return false;
    }else return false;
  }
  public dientich():number{
    return Math.sqrt((this.a+ this.b+ this.c)*( this.b+ this.c- this.a)*( this.a+ this.b- this.c)*( this.a+ this.c-this.b));
  }

}
export class HinhChop extends HinhTamGiac{
protected h:number;
constructor(a:number,b:number,c:number,h:number){
  super(a,b,c);
  this.h=h;
}
public thetich():number{
  return this.dientich()*this.h/3;
}
}

