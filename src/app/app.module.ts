import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTablesModule } from "angular-datatables";
import { NavigationGeneraleComponentComponent } from './composants/navigation-generale-component/navigation-generale-component.component';
import { CorpsPageComponentComponent } from './composants/corps-page-component/corps-page-component.component';
import { EnteteCorpsComponentComponent } from './composants/entete-corps-component/entete-corps-component.component';
import { SousMenuPageComponentComponent } from './composants/sous-menu-page-component/sous-menu-page-component.component';
import { TitrePageComponentComponent } from './composants/titre-page-component/titre-page-component.component';
import { ContenuPageComponentComponent } from './composants/contenu-page-component/contenu-page-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationGeneraleComponentComponent,
    CorpsPageComponentComponent,
    EnteteCorpsComponentComponent,
    SousMenuPageComponentComponent,
    TitrePageComponentComponent,
    ContenuPageComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
