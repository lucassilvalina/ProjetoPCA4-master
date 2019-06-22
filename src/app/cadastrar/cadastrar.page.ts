import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage {

  constructor(private navCtrl : NavController) { }

  registrar() {
    this.navCtrl.navigateForward('home');
  }

}
