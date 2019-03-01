import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './rdw/search/search.component';
import { KentekenLijstComponent } from './rdw/kenteken-lijst/kenteken-lijst.component';
import { HttpClientModule } from '@angular/common/http';
import { RdwsearchService } from './rdwsearch.service';
import { KentekenDetailsComponent } from './rdw/kenteken-details/kenteken-details.component';
import { HeaderComponent } from './rdw/header/header.component';

@NgModule({
  declarations: [
    AppComponent, KentekenLijstComponent,
    SearchComponent,
    KentekenDetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RdwsearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
