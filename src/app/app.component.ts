import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [

    {
      title: 'Turmas',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'md-contacts',
    },
    {
      title: 'Quizz',
      url: '/playquizz',
      icon: 'md-play'
    },
    {
      title: 'Cadastrar Usuário',
      url: '/cadastrar',
      icon: 'person-add'
    },
    {
      title: 'Cadastrar Questão',
      url: '/cadastro-questao',
      icon: 'md-bulb'
    },
    {
      title: 'Ranking de Usuarios',
      url: '/ranking',
      icon: 'md-trophy'
    }
 
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
