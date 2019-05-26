import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResearchComponent } from './research/research.component';
import { TeachingComponent } from './teaching/teaching.component';
import { PublicationComponent } from './publication/publication.component';
import { PublicationAddComponent } from './publication-add/publication-add.component';
import { PublicationEditComponent } from './publication-edit/publication-edit.component';
import { TalksComponent } from './talks/talks.component'
import { TalksAddComponent } from './talks-add/talks-add.component';
import { TalksEditComponent } from './talks-edit/talks-edit.component';
import { SeminarComponent } from './seminar/seminar.component';
import { TeachingAddComponent } from './teaching-add/teaching-add.component';
import { TeachingEditComponent } from './teaching-edit/teaching-edit.component';
import { TeachingDetailComponent } from './teaching-detail/teaching-detail.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [ 
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'research',
    component: ResearchComponent
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
    path: 'talks',
    component:TalksComponent
  },{
    path: 'talks-add',
    component:TalksAddComponent
  },{
    path: 'talks-edit/:id',
    component:TalksEditComponent
  },{
    path: 'seminar',
    component:SeminarComponent
  },{
    path: 'teaching',
    component:TeachingComponent
  },{
    path: 'teaching-add',
    component:TeachingAddComponent
  },{
    path: 'teaching-edit/:id',
    component:TeachingEditComponent
  },{
    path: 'teaching-detail/:id',
    component:TeachingDetailComponent
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
