import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.page.html',
  styleUrls: ['./matrix.page.scss'],
})
export class MatrixPage implements OnInit {
  a1:number=0;
  a2:number=0;
  a3:number=0;

  b1:number=0;
  b2:number=0;
  b3:number=0;

  c1:number=0;
  c2:number=0;
  c3:number=0;
  n1:number=2;

  clickd:boolean=false;
  
  
  T=[
    [this.a1,this.a2,this.a3],
    [this.b1,this.b2,this.b3],
    [this.c1,this.c2,this.c3]
];

  constructor() { }

  ngOnInit() {
  }
  getCofactor(Temp:number[][],p,q,n){
    var i,j;
    i=j=0;
    for(var row=0;row<n;row++){
      for(var col=0;col<n;col++){
        if(row!=p && col!=q){

          Temp[i][j++]=this.T[row][col];
        }
        if(j == n-1){
          j=0;
          i++;
        }
      }
    }

  }

  determinantOfMatrix(n:number){
    var D:number=0;
    if(n == 1){
      return this.T[0][0]
    }
    var Temp:number[][];
    var sign:number=1;

    for(var f=0;f<n;f++){
      this.getCofactor(Temp,0,f,this.n1);
      D+=sign*this.T[0][f]*this.determinantOfMatrix(this.n1-1);
      sign=-sign;
    }
    return D;
  }

  detM3(){

    
    return ((this.a1*this.b2*this.c3+this.a2*this.b3*this.c1+this.a3*this.b1*this.c2)-(this.a3*this.b2*this.c1+this.a2*this.b1*this.c3+this.a1*this.b3*this.c2))
  }

}
