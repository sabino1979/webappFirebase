import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FireModule } from './fire/fire.module';
import { HomeComponent } from './components/home/home.component';
import { FotoComponent } from './components/foto/foto.component';
import { CargarComponent } from './components/cargar/cargar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FotoComponent,
    CargarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FireModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
