import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FootmenuComponent } from './shared/footmenu/footmenu.component';
import { SidemenuComponent } from './shared/sidemenu/sidemenu.component';
import { TopmenuComponent } from './shared/topmenu/topmenu.component';
import { PagesComponent } from './pages/pages/pages.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FootmenuComponent,
    SidemenuComponent,
    TopmenuComponent,
    PagesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
