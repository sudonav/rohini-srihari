import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
var httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
var PublicationService = /** @class */ (function () {
    function PublicationService(httpClient) {
        this.httpClient = httpClient;
    }
    PublicationService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return of(result);
        };
    };
    PublicationService.prototype.getPublications = function () {
        return this.httpClient.get('./assets/data/publications.json')
            .pipe(map(function (response) { return response.json(); }), tap(function (publicationsLog) { return console.log('fetched publications'); }), catchError(this.handleError('getPublications', [])));
    };
    PublicationService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], PublicationService);
    return PublicationService;
}());
export { PublicationService };
//# sourceMappingURL=publication.service.js.map