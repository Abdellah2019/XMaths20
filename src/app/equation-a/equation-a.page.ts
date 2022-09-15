import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equation-a',
  templateUrl: './equation-a.page.html',
  styleUrls: ['./equation-a.page.scss'],
})
export class EquationAPage implements OnInit {

  a:number;
  b:number;
  c:number;
  s:number=0;
  a1:number;
  b1:number;
  c1:number;

  s1:number;
  s2:number;
  sd:number[];
  sd1:number;
  sd2:number;
  sp1:number;
  sp2:number;

  clickeq1:boolean=false;
  clickeq2:boolean=false;
  clickeq3:boolean=false;

  constructor() { }

  ngOnInit() {
  }
  equation1(){
    if(this.a!=0){
      var res=(this.c-this.b)/this.a;
      this.s=Math.round(res*100)/100;
      //return (this.c-this.b)/this.a;

    }
  }
  pgcd(c,d){
    var t:number;
    var res:number;
    if( c>0&&d){
      
      if(c>d){
        t=c;
        c=d;
        d=t;
      }
      do{
        
        res=c % d;
        c=d;
        d=res;
        console.log(c);
        console.log(d);
        console.log(res);
      }
      while(res!=0)
    return c;
  }
}
equation2(){
  if(this.a1==0){
    var res=-this.c1/this.b1;
    this.s1=Math.round(res*100)/100;;
  }
  else{
  var delta=Math.floor(this.b1*this.b1-4*this.a1*this.c1);
  console.log(delta)
  if(delta>0){
    var res1=(-this.b1-Math.sqrt(delta))/(2*this.a1);
    var res2=(-this.b1+Math.sqrt(delta))/(2*this.a1);
    this.s1=Math.round(res1*100)/100;
    this.s2=Math.round(res2*100)/100;;
  }
  if(delta==0){
    this.s1=-this.b1/(2*this.a1);
  }
}

}
haveSolution(a,b,c){
  if(c%this.pgcd(a,b)==0){
    return true;
  }
  else
    return false;
}
verification(a,b,c,u,v){
  if(a*u+b*v==c){
    return true;
  }
  else
    return false;
}

bezout(a,b,c,N){
  this.sp1=-b/this.pgcd(a,b);
  this.sp2=a/this.pgcd(a,b);
  for(var u=-N;u<N+1;u++){
    for(var v=-N;v<N+1;v++){
      if(this.verification(a,b,c,u,v)){
        this.sd1=u;
        this.sd2=v;

      }
    }
  }
}






}
