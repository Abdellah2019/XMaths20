import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {title: 'Home', url: '/home' },
    {title: 'Complex Numbers', url: '/complex' },
    {title:'Algebric Equations',url:'/equation-a'},
    {title:'Arithmetic',url:'/pgcd'},
    {title:'Matrix Determinant 3x3',url:'/matrix'},
    {title:'Equation Systems ',url:'/systemes'}
    
   
  ];
  
  constructor() {
     
  }
}
