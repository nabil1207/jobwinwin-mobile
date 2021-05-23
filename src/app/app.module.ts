import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, Router } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { AuthComponent } from './layouts/auth/auth.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { Redirection } from './core/utils';
import { AppService } from './core/services/global/app.service';
import { HttpTokenInterceptor } from './core/services/interceptors';
import { AuthorizedGuard, LoggedInGuard } from './core/services/guards';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { AboutJobwinwinComponent } from './pages/about-jobwinwin/about-jobwinwin.component';
import { LoaderService } from './core/services/addapters/loader.service';
import { LoaderInterceptorService } from './core/services/interceptors/loader-interceptor.service';
import { FormContactComponent } from './pages/form-contact/form-contact.component';
import { AutosizeModule } from 'ngx-autosize';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { NotificationService } from './core/services/global/notification.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

export const createTranslateLoader = (http: HttpClient) => {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

export const app_init = (appService: AppService) => {
  return () => appService.initializeApp();
}

@NgModule({
  declarations: [AppComponent, AuthComponent, DashboardComponent, AboutJobwinwinComponent, FormContactComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    AutosizeModule,
    IonicModule.forRoot({ scrollAssist: false }),
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      },
      defaultLanguage: 'fr'
    }),
  ],
  providers: [
    AndroidPermissions,
    StatusBar,
    LoaderService,
    NotificationService,
    LocalNotifications,
    Camera,
    File,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Keyboard,
    AuthorizedGuard,
    LoggedInGuard,
    { provide: APP_INITIALIZER, useFactory: app_init, deps: [AppService], multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private router: Router) {
    Redirection.router = this.router;
  }

}
