import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResearchComponent } from './research/research.component';
import { TeachingComponent } from './teaching/teaching.component';
import { PublicationComponent } from './publication/publication.component';
import { PublicationAddComponent } from './publication-add/publication-add.component';
import { PublicationEditComponent } from './publication-edit/publication-edit.component';


const routes: Routes = [ {
  path: '', redirectTo: '/rohini', pathMatch: 'full'
  },
  {
    path: 'rohini',
    component: HomeComponent
  },{
    path: 'research',
    component: ResearchComponent
  },{
    path: 'teaching',
    component:TeachingComponent
  },{
    path: 'publication',
    component:PublicationComponent
  },{
    path: 'publication-add',
    component:PublicationComponent
  },{
    path: 'publication-edit/:id',
    component:PublicationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
