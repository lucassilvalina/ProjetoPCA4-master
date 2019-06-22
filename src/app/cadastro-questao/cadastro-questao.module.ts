import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastroQuestaoPage } from './cadastro-questao.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroQuestaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroQuestaoPage]
})
export class CadastroQuestaoPageModule {}
