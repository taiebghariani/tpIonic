import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   {
//     path: 'home',
//     loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
//   },
//   {
//     path: '',
//     redirectTo: 'menu',
//     pathMatch: 'full'
//   },
//   {
//     path: 'authentification',
//     loadChildren: () => import('./pages/authentification/authentification.module').then( m => m.AuthentificationPageModule)
//   },
//   {
//     path: 'inscription',
//     loadChildren: () => import('./pages/inscription/inscription.module').then( m => m.InscriptionPageModule)
//   },
//   {
//     path: 'meteo',
//     loadChildren: () => import('./pages/meteo/meteo.module').then( m => m.MeteoPageModule)
//   },
//   {
//     path: 'priere',
//     loadChildren: () => import('./pages/priere/priere.module').then( m => m.PrierePageModule)
//   },
//   {
//     path: 'galerie',
//     loadChildren: () => import('./pages/galerie/galerie.module').then( m => m.GaleriePageModule)
//   },
//   {
//     path: 'endroits',
//     loadChildren: () => import('./pages/endroits/endroits.module').then( m => m.EndroitsPageModule)
//   },
//   {
//     path: 'contacts',
//     loadChildren: () => import('./pages/contacts/contacts.module').then( m => m.ContactsPageModule)
//   },
//   {
//     path: 'menu',
//     loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
//   },
// ];

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then(m =>
      m.MenuPageModule)
  },
  {
    path: 'authentification',
    loadChildren: () => import('./pages/authentification/authentification.module').then(
      m => m.AuthentificationPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./pages/inscription/inscription.module').then(m =>
      m.InscriptionPageModule)
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
