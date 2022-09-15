import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complex',
  templateUrl: './complex.page.html',
  styleUrls: ['./complex.page.scss'],
})
export class ComplexPage implements OnInit {
  a:number;
  b:number;
  t:boolean =false; 
  radians:number;
  degree:number;
  cr:string;
  cd:string;

  constructor() { }

  ngOnInit() {
  }
  module(){
    let r=(Math.sqrt((this.a*this.a)+(this.b*this.b)))
    return r.toFixed(2)

  }
  
  argument(){
    var pi=Math.PI;
    var ang=Math.acos(this.a/(Math.sqrt((this.a*this.a)+(this.b*this.b))))
    var r=Math.acos(this.a/(Math.sqrt((this.a*this.a)+(this.b*this.b))))*(180/pi);
    var d=r
    var r2=ang
    this.radians=Math.acos(this.a/(Math.sqrt((this.a*this.a)+(this.b*this.b))))
    this.degree=d
    this.radians=r2
    this.cr=d.toFixed(2)
    this.cd=r2.toFixed(2)
  }
}
