import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', component: AppComponent },
  // { path: 'busqueda/pokedex', redirectTo: 'busqueda/pokedex/pikachu', pathMatch: 'full', component: PokedexComponent },
  // { path: 'busqueda/pokedex/:query', component: PokedexComponent,
  //   data: { title: 'Pokedex' }
  // },
  // { path: 'busqueda/digivice', redirectTo: 'busqueda/digivice/agumon', pathMatch: 'full', component: DigiviceComponent },
  // { path: 'busqueda/digivice/:query', component: DigiviceComponent,
  //   data: { title: 'Digivice' }
  // },
  // { path: 'busqueda/tvshows', redirectTo: 'busqueda/tvshows/pokemon', pathMatch: 'full', component: TvshowsComponent },
  // { path: 'busqueda/tvshows/:query', component: TvshowsComponent,
  //   data: { title: 'TV Shows' }
  // },
  // { path: '**', component: Error404 } //error 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
