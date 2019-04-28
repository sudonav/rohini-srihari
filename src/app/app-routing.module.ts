import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResearchComponent } from './research/research.component';
import { TeachingComponent } from './teaching/teaching.component';
import { PublicationComponent } from './publication/publication.component';
import { PublicationAddComponent } from './publication-add/publication-add.component';
import { PublicationEditComponent } from './publication-edit/publication-edit.component';
import { TalksComponent } from './talks/talks.component'
import { PublicationDetailComponent } from './publication-detail/publication-detail.component';
import { TalksAddComponent } from './talks-add/talks-add.component';
import { TalksEditComponent } from './talks-edit/talks-edit.component';
import { TalksDetailComponent } from './talks-detail/talks-detail.component';

const routes: Routes = [ {
  path: '', redirectTo: '/rohini', pathMatch: 'full'
  },
  {
    path: 'rohini',
    component: HomeComponent
  },{
    path: 'research',
    component: ResearchComponent
  },  {
    path: 'teaching',
    component:TeachingComponent
  },{
    path: 'publication',
    component:PublicationComponent
  },{
    path: 'publication-add',
    component:PublicationAddComponent
  },{
    path: 'publication-edit/:id',
    component:PublicationEditComponent
  },{
    path: 'publication-detail/:id',
    component:PublicationDetailComponent
  },{
    path: 'talks',
    component:TalksComponent
  },{
    path: 'talks-add',
    component:TalksAddComponent
  },{
    path: 'talks-edit/:id',
    component:TalksEditComponent
  },{
    path: 'talks-detail/:id',
    component:TalksDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
