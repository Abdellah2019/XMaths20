import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-systemes',
  templateUrl: './systemes.page.html',
  styleUrls: ['./systemes.page.scss'],
})
export class SystemesPage implements OnInit {
 a:number;
 b:number;
 e:number;
 c:number;
 d:number;
 f:number;
 sx1:number;
 sy1:number;


 a1:number;
 a2:number;
 a3:number;

 b1:number;
 b2:number;
 b3:number;

 c1:number;
 c2:number;
 c3:number;

 d1:number;
 d2:number;
 d3:number;

 sx2:number;
 sy2:number;
 sz2:number;
 click1:boolean=false;
 click2:boolean=false;

  constructor() { }

  ngOnInit() {
  }
  solution1(){
    this.sx1=(this.e*this.d-this.b*this.f)/(this.a*this.d-this.b*this.c)
    this.sy1=(this.a*this.f-this.e*this.c)/(this.a*this.d-this.b*this.c)
   
  }
  detA(){
    return this.a1*(this.b2*this.c3-this.c2*this.b3)-this.b1*(this.a2*this.c3-this.a3*this.c2)+this.c1*(this.a2*this.b3-this.a3*this.b2)
  }
  detA1(){
    return this.d1*(this.b2*this.c3-this.b3*this.c2)-this.b1*(this.d2*this.c3-this.c2*this.d3)+this.c1*(this.d2*this.b3-this.d3*this.b2)
  }
  detA2(){
    return this.a1*(this.d2*this.c3-this.c2*this.d3)-this.d1*(this.a2*this.c3-this.a3*this.c2)+this.c1*(this.a2*this.d3-this.a3*this.d2)
  }
  detA3(){
    return this.a1*(this.b2*this.d3-this.b3*this.d2)-this.b1*(this.a2*this.d3-this.a3*this.d2)+this.d1*(this.a2*this.b3-this.a3*this.b2)
  }
  solution2(){
    this.sx2=this.detA1()/this.detA();
    this.sy2=this.detA2()/this.detA();
    this.sz2=this.detA3()/this.detA();
  }

}
