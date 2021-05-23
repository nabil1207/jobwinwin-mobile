import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, RouteReuseStrategy } from '@angular/router';
import { AuthComponent } from './layouts/auth/auth.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { AuthorizedGuard, LoggedInGuard } from './core/services/guards';
import { DataResolver } from './core/services/resolvers/data.resolver';
import { AboutJobwinwinComponent } from './pages/about-jobwinwin/about-jobwinwin.component';
import { FormContactComponent } from './pages/form-contact/form-contact.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/auth'
  },
  {
    path: 'auth',
    component: AuthComponent,
    canActivate: [LoggedInGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/authentication/authentication.module').then(m => m.AuthenticationModule)
      }
    ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthorizedGuard],
    resolve: { data: DataResolver },
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/files/files.module').then(m => m.FilesModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./pages/profil/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'advertisement',
        loadChildren: () => import('./pages/advertisement/advertisement.module').then(m => m.AdvertisementModule)
      },
      {
        path: 'recruiter',
        loadChildren: () => import('./pages/recruiter/recruiters.module').then(m => m.RecruitersModule)
      },
      {
        path: 'entreprise',
        loadChildren: () => import('./pages/entreprise/entreprise.module').then(m => m.EntrepriseModule)
      },
      {
        path: 'condidate',
        loadChildren: () => import('./pages/candidate/candidate.module').then(m => m.CandidateModule)
      },
      {
        path: 'wins',
        loadChildren: () => import('./pages/wins/wins.module').then(m => m.WinsModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsModule)
      },
      {
        path: 'messenger',
        loadChildren: () => import('./pages/messenger/messenger.module').then(m => m.MessengerModule)
      },
      {
        path: 'notification',
        loadChildren: () => import('./pages/notifications/notification.module').then(m => m.NotificationModule)
      },
      {
        path: 'about',
        component: AboutJobwinwinComponent
      },
      {
        path: 'contact-form',
        component: FormContactComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/auth'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule],
  providers: [DataResolver]
})
export class AppRoutingModule { }
