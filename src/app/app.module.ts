import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FireModule } from './fire/fire.module';
import { HomeComponent } from './components/home/home.component';
import { FotoComponent } from './components/foto/foto.component';
import { CargarComponent } from './components/cargar/cargar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FotoComponent,
    CargarComponent
  ],
  imports: [
    BrowserModule,
    FireModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
