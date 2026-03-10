import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarVinylComponent } from './componentes/vinyls/criar-vinyl/criar-vinyl.component';
import { HomeComponent } from './componentes/home/home.component';
import { ExcluirVinylComponent } from './componentes/vinyls/excluir-vinyl/excluir-vinyl.component';
import { EditarVinylComponent } from './componentes/vinyls/editar-vinyl/editar-vinyl.component';

const routes: Routes = [
   {
    path: '',
    component: HomeComponent
  },
  {
    path: 'criarVinyl',
    component: CriarVinylComponent
  },
  {
    path: 'editarVinyl/:id',
    component: EditarVinylComponent
  },
  {
    path: 'excluirVinyl/:id',
    component: ExcluirVinylComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
