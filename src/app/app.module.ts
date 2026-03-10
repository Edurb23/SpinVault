import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { HomeComponent } from './componentes/home/home.component';
import { CriarVinylComponent } from './componentes/vinyls/criar-vinyl/criar-vinyl.component';
import { FormsModule } from '@angular/forms';
import { ListarVinylComponent } from './componentes/vinyls/listar-vinyl/listar-vinyl.component';
import { VinylComponent } from './componentes/vinyls/vinyl/vinyl.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ExcluirVinylComponent } from './componentes/vinyls/excluir-vinyl/excluir-vinyl.component';
import { EditarVinylComponent } from './componentes/vinyls/editar-vinyl/editar-vinyl.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    HomeComponent,
    CriarVinylComponent,
    ListarVinylComponent,
    VinylComponent,
    ExcluirVinylComponent,
    EditarVinylComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
