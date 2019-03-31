import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResearchComponent } from './research/research.component';
import { TeachingComponent } from './teaching/teaching.component';
import { PublicationComponent } from './publication/publication.component';
var routes = [{
        path: '', redirectTo: '/rohini', pathMatch: 'full'
    },
    {
        path: 'rohini',
        component: HomeComponent
    }, {
        path: 'research',
        component: ResearchComponent
    }, {
        path: 'teaching',
        component: TeachingComponent
    }, {
        path: 'publication',
        component: PublicationComponent
    }, {
        path: 'publication-add',
        component: PublicationComponent
    }, {
        path: 'publication-edit/:id',
        component: PublicationComponent
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map