import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Platform, AlertController, IonRouterOutlet } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { AuthService } from './core/services/global/auth.service';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  currentPageTitle = 'Swipe and match';
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;

  lastTimeBackPress = 0;
  timePeriodToExit = 2000;

  appPages = [
    {
      title: 'Wins',
      url: '/dashboard/wins',
      icon: './assets/icon/win.svg',
      right: 'read_win'
    },
    {
      title: 'Annonces',
      url: '/dashboard/advertisement',
      icon: './assets/icon/ads.svg',
      right: 'read_advertisement'
    },
    {
      title: 'Recruteurs',
      url: '/dashboard/recruiter',
      icon: './assets/icon/recruteurs.svg',
      right: 'read_recruiter'
    },
    {
      title: 'Profil candidat',
      url: '/dashboard/condidate',
      icon: './assets/icon/matching.svg',
      right: 'read_fiche_candidate'
    },
    {
      title: 'Fiche Entreprise',
      url: '/dashboard/entreprise',
      icon: './assets/icon/matching.svg',
      right: 'read_fiche_company'
    },
    {
      title: 'Paramètres',
      url: '/dashboard/settings',
      icon: './assets/icon/parametre.svg',
      right: 'read_params'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private keyboard: Keyboard,
    public authService: AuthService,
    private permissions: AndroidPermissions
  ) {
    this.initializeApp();
  }

  async ngOnInit() {
    // await this.localNotifications.requestPermission();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString('#405A98');
      this.splashScreen.hide();
      this.permissions.checkPermission(this.permissions.PERMISSION.CAMERA).then(result => {
        if (!result.hasPermission) {
          this.permissions.requestPermission(this.permissions.PERMISSION.CAMERA);
        }
        this.permissions.checkPermission(this.permissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(res => {
          if (!result.hasPermission) {
            this.permissions.requestPermission(this.permissions.PERMISSION.WRITE_EXTERNAL_STORAGE);
          }
        }, (error) => {
          this.permissions.requestPermission(this.permissions.PERMISSION.WRITE_EXTERNAL_STORAGE);
        });
      }, (error) => {
        this.permissions.requestPermission(this.permissions.PERMISSION.CAMERA);
      });
    });
  }

  ionViewDidEnter() {
    this.platform.ready().then(() => {
      this.keyboard.disableScroll(true);
    });
  }

  ionViewWillLeave() {
    this.platform.ready().then(() => {
      this.keyboard.disableScroll(false);
    });
  }

  redirectTo(url: string) {
    window.open(url, '_blank');
  }

  getNativeAudio() {
  }

}
