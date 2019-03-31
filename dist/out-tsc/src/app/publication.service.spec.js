import { TestBed } from '@angular/core/testing';
import { PublicationService } from './publication.service';
describe('PublicationService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(PublicationService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=publication.service.spec.js.map