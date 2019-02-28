import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './rdw/search/search.component';
import { AppComponent } from './app.component';
import { KentekenDetailsComponent } from './rdw/kenteken-details/kenteken-details.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'search', component: SearchComponent },
  { path: 'details/:kenteken', component: KentekenDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
