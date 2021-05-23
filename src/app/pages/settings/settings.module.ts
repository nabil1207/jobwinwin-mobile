import { NgModule } from '@angular/core';
import { SettingsRoutingModule } from './settings-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AccountComponent } from './components/account/account.component';
import { IdentityComponent } from './components/identity/identity.component';
import { SettingsComponent } from './components/settings/settings.component';
import { EntrepriseComponent } from './components/entreprise/entreprise.component';


@NgModule({
  declarations: [SettingsComponent, AccountComponent, IdentityComponent, EntrepriseComponent],
  imports: [
    SharedModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
