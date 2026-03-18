import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { HomeComponent } from './componentes/home/home.component';
import { CriarVinylComponent } from './componentes/vinyls/criar-vinyl/criar-vinyl.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarVinylComponent } from './componentes/vinyls/listar-vinyl/listar-vinyl.component';
import { VinylComponent } from './componentes/vinyls/vinyl/vinyl.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ExcluirVinylComponent } from './componentes/vinyls/excluir-vinyl/excluir-vinyl.component';
import { EditarVinylComponent } from './componentes/vinyls/editar-vinyl/editar-vinyl.component';
import { BotaoCarregarMaisComponent } from './componentes/vinyls/listar-vinyl/botao-carregar-mais/botao-carregar-mais.component';

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
    EditarVinylComponent,
    BotaoCarregarMaisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
