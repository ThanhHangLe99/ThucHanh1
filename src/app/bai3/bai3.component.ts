import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai3',
  templateUrl: './bai3.component.html',
  styleUrls: ['./bai3.component.sass']
})
export class Bai3Component implements OnInit {

  constructor() { }
  title="Bài 3: Sắp xếp tên theo thứ tự bảng chữ cái";
  sinhvien=[{hoten: 'Le Thi Hang', quequan: 'Hung Yen', diemthi:9}, {hoten: 'Tran Van An', quequan: 'Ha Tinh', diemthi:8.5},{ hoten: 'Nguyen Thi Nhunng', quequan: 'Hai Phong', diemthi:8.3}];
  ngOnInit(): void {
  }
}
  let catten = (s) => {
    let n =  s.lastIndexOf(' ');
    return s.substr(n+1) + ' ' + s.substr(0,n);
  }
  let s =[{hoten: 'Le Thi Hang', quequan: 'Hung Yen', diemthi:9}, {hoten: 'Tran Van An', quequan: 'Ha Tinh', diemthi:8.5},{ hoten: 'Nguyen Thi Nhunng', quequan: 'Hai Phong', diemthi:8.3}].sort((a,b)=> {
  if(catten(a.hoten)>catten(b.hoten)) return 1;
  else if(catten(a.hoten)<catten(b.hoten)) return -1;
  return 0;
  });
  console.log(s);

