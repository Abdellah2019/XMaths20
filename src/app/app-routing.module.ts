import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
  {
    path: 'complex',
    loadChildren: () => import('./complex/complex.module').then( m => m.ComplexPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'equation-a',
    loadChildren: () => import('./equation-a/equation-a.module').then( m => m.EquationAPageModule)
  },
  {
    path: 'pgcd',
    loadChildren: () => import('./pgcd/pgcd.module').then( m => m.PgcdPageModule)
  },
  {
    path: 'matrix',
    loadChildren: () => import('./matrix/matrix.module').then( m => m.MatrixPageModule)
  },
  {
    path: 'systemes',
    loadChildren: () => import('./systemes/systemes.module').then( m => m.SystemesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
