import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai4',
  templateUrl: './bai4.component.html',
  styleUrls: ['./bai4.component.sass']
})
export class Bai4Component implements OnInit {

  constructor() { }
  sv=[{hoten: 'Le Thi Hang', quequan: 'Hung Yen', diemthi:9}, {hoten: 'Tran Van An', quequan: 'Ha Tinh', diemthi:8.5},{ hoten: 'Nguyen Thi Nhunng', quequan: 'Hai Phong', diemthi:8.3}];
  kq="";
  ngOnInit(): void {
    let j=0;

    for(let i=0;i<this.sv.length;i++){
      if(this.sv[i].diemthi>8&&this.sv[i].quequan=="Hai Phong"){
        this.kq=this.kq+this.sv[i].hoten+"-"+this.sv[i].quequan+"-"+this.sv[i].diemthi+";";
      }
      }
    }
  }

