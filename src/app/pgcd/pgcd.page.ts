import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pgcd',
  templateUrl: './pgcd.page.html',
  styleUrls: ['./pgcd.page.scss'],
})
export class PgcdPage implements OnInit {
  a:number;
  b:number;
  a1:number;
  b1:number;

  clickpgcd:boolean=false;
  clickppcm:boolean=false;
  clickprime:boolean=false;

  constructor() { }

  ngOnInit() {
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
        console.log("hello");
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
ppcm(p1,p2){
  return (p1*p2)/this.pgcd(p1,p2);
}
isprime(n){
  var prime:boolean=true;
  if(n<=1){
    prime=false;
  }
  for(var i=2;i<=n/2;i++){
    if(n%i==0){
      prime=false;
    }
  }
  return prime;
}


}
