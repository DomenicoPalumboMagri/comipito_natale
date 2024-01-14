import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SecondoComponent } from './secondo/secondo.component';
import { SampleComponent } from './sample/sample.component';
import { TerzoComponenteComponent } from './terzo-componente/terzo-componente.component';


@NgModule({
  declarations: [
    AppComponent,
    SecondoComponent,
    SampleComponent,
    TerzoComponenteComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
