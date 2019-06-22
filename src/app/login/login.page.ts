import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(private navCtrl: NavController) { }

  login() {
    this.navCtrl.navigateForward('home');
  }

  cadastro(){
    this.navCtrl.navigateForward('cadastrar');
  }
}
