import { LoaderComponent } from './components/loader/loader.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule } from '@angular/router';
import { MatStepperModule } from '@angular/material/stepper';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import {
  UserImageComponent, PreviewAdvertisementComponent,
  PreviewCandidateComponent, FileUploaderComponent, MultiSelectComponent
} from './components';
import { TranslateModule } from '@ngx-translate/core';
import { HasPermissionDirective } from './directives/has-permission.directive';
import { EnvPipe } from './pipes/env.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LanguagesPipe } from './pipes/languages.pipe';
import { CanChangeStatusDirective } from './directives/can-change-status.directive';
import { ScrollToTopDirective } from './directives/scroll-to-top.directive';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    UserImageComponent,
    PreviewAdvertisementComponent,
    PreviewCandidateComponent,
    HasPermissionDirective,
    EnvPipe,
    FileUploaderComponent,
    MultiSelectComponent,
    LanguagesPipe,
    CanChangeStatusDirective,
    LoaderComponent,
    ScrollToTopDirective,
    FilterPipe
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatExpansionModule,
    MatStepperModule,
    MatMenuModule,
    TranslateModule,
    FlexLayoutModule,
    MatSlideToggleModule,
    NgMultiSelectDropDownModule
  ],
  exports: [
    RouterModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatExpansionModule,
    MatStepperModule,
    MatMenuModule,
    TranslateModule,
    HasPermissionDirective,
    EnvPipe,
    UserImageComponent,
    PreviewAdvertisementComponent,
    PreviewCandidateComponent,
    FileUploaderComponent,
    FlexLayoutModule,
    MultiSelectComponent,
    LanguagesPipe,
    CanChangeStatusDirective,
    MatSlideToggleModule,
    LoaderComponent,
    ScrollToTopDirective,
    NgMultiSelectDropDownModule,
    FilterPipe
  ]
})
export class SharedModule { }
