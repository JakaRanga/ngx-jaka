import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { JakaAppComponent } from './components/layout/jaka-app/jaka-app.component';
import { JakaSidebarComponent } from './components/layout/jaka-sidebar/jaka-sidebar.component';
import { JakaToolbarComponent } from './components/layout/jaka-toolbar/jaka-toolbar.component';
import { JakaCardComponent } from './components/common/jaka-card/jaka-card.component';
import { JakaToasterComponent } from './components/alert/jaka-toaster/jaka-toaster.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    JakaAppComponent,
    JakaSidebarComponent,
    JakaToolbarComponent,
    JakaCardComponent,
    JakaToasterComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    JakaAppComponent,
    JakaSidebarComponent,
    JakaToolbarComponent,
    JakaCardComponent,
    JakaToasterComponent
  ],
  schemas : [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class NgxJakaModule { }
