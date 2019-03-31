import * as tslib_1 from "tslib";
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
import { PublicationService } from './publication.service';
import { PublicationDetailComponent } from './publication-detail/publication-detail.component';
import { PublicationAddComponent } from './publication-add/publication-add.component';
import { PublicationEditComponent } from './publication-edit/publication-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule, MatIconModule, MatButtonModule, MatCardModule, MatFormFieldModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
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
                PublicationEditComponent
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
                MatFormFieldModule
            ],
            providers: [PublicationService],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map