import { EntrepriseCardComponent } from './components/entreprise-card/entreprise-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { EntrepriseRoutingModule } from './entreprise-routing.module';
import { SloganComponent } from './components/update/slogan/slogan.component';
import { PresentationComponent } from './components/update/presentation/presentation.component';
import { LinksEntrepriseComponent } from './components/update/links-entreprise/links-entreprise.component';
import { ValuesEntrepriseComponent } from './components/update/values-entreprise/values-entreprise.component';


@NgModule({
  declarations: [EntrepriseCardComponent, SloganComponent, PresentationComponent, LinksEntrepriseComponent, ValuesEntrepriseComponent],
  imports: [
    SharedModule,
    EntrepriseRoutingModule
  ]
})
export class EntrepriseModule { }
