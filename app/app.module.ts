import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Material */
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

/* application component */
import { AppComponent } from './app.component';
import { HeroImgComponent } from './header/hero-img/hero-img.component';
import { TrainingListComponent } from './body/training-list/training-list.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { CourseListComponent } from './body/course-list/course-list.component';
import { ExperienceListComponent } from './body/experience-list/experience-list.component';
import { FooterComponent } from './footer/footer.component';
import { TopNavComponent } from './header/top-nav/top-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroImgComponent,
    TrainingListComponent,
    BodyComponent,
    HeaderComponent,
    CourseListComponent,
    ExperienceListComponent,
    FooterComponent,
    TopNavComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatGridListModule,
    AngularFontAwesomeModule,
    MatTooltipModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
