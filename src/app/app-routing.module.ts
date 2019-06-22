import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'cadastrar', loadChildren: './cadastrar/cadastrar.module#CadastrarPageModule' },
  { path: 'novasenha', loadChildren: './novasenha/novasenha.module#NovasenhaPageModule' },
  { path: 'cadastro-questao', loadChildren: './cadastro-questao/cadastro-questao.module#CadastroQuestaoPageModule' },
  { path: 'ranking', loadChildren: './ranking/ranking.module#RankingPageModule' },
  { path: 'playquizz', loadChildren: './playquizz/playquizz.module#PlayquizzPageModule' },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
