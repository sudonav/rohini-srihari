import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactWallComponent } from './contact-wall/contact-wall.component';
import { HomeComponent } from './home/home.component';
import { ResearchComponent } from './research/research.component';
import { SeminarComponent } from './seminar/seminar.component';
import { CommonService } from './common.service'

import { TeachingComponent } from './teaching/teaching.component';
import { ClassService } from './class.service'
import { TeachingAddComponent } from './teaching-add/teaching-add.component';
import { TeachingEditComponent } from './teaching-edit/teaching-edit.component';
import { TeachingDetailComponent } from './teaching-detail/teaching-detail.component';

import { PublicationComponent } from './publication/publication.component';
import { PublicationService } from './publication.service'
import { PublicationAddComponent } from './publication-add/publication-add.component';
import { PublicationEditComponent } from './publication-edit/publication-edit.component';

import { TalksComponent } from './talks/talks.component';
import { TalksService } from './talks.service'
import { TalksAddComponent } from './talks-add/talks-add.component';
import { TalksEditComponent } from './talks-edit/talks-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatSelectModule, 
  MatDialogModule,
  MatRadioModule,
  MatTabsModule} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { LoginComponent } from './auth/login/login.component';
import { TokenInterceptor } from './interceptor/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactWallComponent,
    HomeComponent,
    ResearchComponent,
    TeachingComponent,
    PublicationComponent,
    PublicationAddComponent,
    PublicationEditComponent,
    TalksComponent,
    ConfirmationDialogComponent,
    TalksAddComponent,
    TalksEditComponent,
    SeminarComponent,
    TeachingAddComponent,
    TeachingEditComponent,
    TeachingDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatRadioModule,
    MatSelectModule,
    MatTabsModule,
  ],
  providers: [
    PublicationService,
    TalksService,
    ClassService,
    CommonService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationDialogComponent]
})
export class AppModule { }
