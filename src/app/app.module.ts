import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CepService } from '../Service/cep-service.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
     HttpClientModule,
  ],
  providers: [CepService],
  bootstrap: [AppComponent]
})
export class AppModule { }
