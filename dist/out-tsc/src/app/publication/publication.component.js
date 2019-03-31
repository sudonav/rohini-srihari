import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PublicationService } from '../publication.service';
// import publicationList from '../../assets/data/publications.json'
var PublicationComponent = /** @class */ (function () {
    function PublicationComponent(publicationService) {
        this.publicationService = publicationService;
        this.displayedColumns = ['published_date', 'title', 'author', 'published_at'];
        this.isLoadingResults = true;
    }
    PublicationComponent.prototype.ngOnInit = function () {
        this.getPublicationList();
    };
    PublicationComponent.prototype.getPublicationList = function () {
        var _this = this;
        this.publicationService.getPublications()
            .subscribe(function (res) {
            _this.publicationList = res;
            _this.isLoadingResults = false;
        }, function (err) {
            console.log(err);
            _this.isLoadingResults = false;
        });
    };
    PublicationComponent = tslib_1.__decorate([
        Component({
            selector: 'app-publication',
            templateUrl: './publication.component.html',
            styleUrls: ['./publication.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [PublicationService])
    ], PublicationComponent);
    return PublicationComponent;
}());
export { PublicationComponent };
//# sourceMappingURL=publication.component.js.map