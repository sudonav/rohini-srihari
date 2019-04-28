import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactWallComponent } from './contact-wall/contact-wall.component';
import { HomeComponent } from './home/home.component';
import { ResearchComponent } from './research/research.component';
import { TeachingComponent } from './teaching/teaching.component';

import { PublicationComponent } from './publication/publication.component';
import { PublicationService } from './publication.service'
import { PublicationDetailComponent } from './publication-detail/publication-detail.component';
import { PublicationAddComponent } from './publication-add/publication-add.component';
import { PublicationEditComponent } from './publication-edit/publication-edit.component';

import { TalksComponent } from './talks/talks.component';
import { TalksService } from './talks.service'

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
  MatDialogModule} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { TalksAddComponent } from './talks-add/talks-add.component';
import { TalksEditComponent } from './talks-edit/talks-edit.component';
import { TalksDetailComponent } from './talks-detail/talks-detail.component';

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
    PublicationDetailComponent,
    PublicationAddComponent,
    PublicationEditComponent,
    TalksComponent,
    ConfirmationDialogComponent,
    TalksAddComponent,
    TalksEditComponent,
    TalksDetailComponent
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
    MatDialogModule
  ],
  providers: [
    PublicationService,
    TalksService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationDialogComponent]
})
export class AppModule { }
