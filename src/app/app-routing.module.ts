import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'all',
    loadChildren: () => import('./pages/all/all.module').then( m => m.AllPageModule)
  },
  {
    path: 'seafood',
    loadChildren: () => import('./pages/seafood/seafood.module').then( m => m.SeafoodPageModule)
  },
  {
    path: 'fastfood',
    loadChildren: () => import('./pages/fastfood/fastfood.module').then( m => m.FastfoodPageModule)
  },
  { path: 'detail/:id',
    loadChildren: () => import('./pages/detail/detail.module').then(m => m.DetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
