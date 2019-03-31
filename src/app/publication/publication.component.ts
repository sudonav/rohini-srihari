import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { PublicationService } from '../publication.service'
import { Publication } from '../model/publication';
import { MatPaginator, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {

  @Input() displayedColumns: string[] = ['published_date', 'title', 'author', 'published_at'];
  @Input() publications: Publication[];
  isLoadingResults = true;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  publicationDataSource;

  constructor(private publicationService: PublicationService) { }

  ngOnInit() {
    this.publicationService.getPublications()
    .subscribe((res: Publication[]) => 
                {
                  this.publications = res;
                  this.isLoadingResults = false;
                  this.publicationDataSource = new MatTableDataSource<Publication>(this.publications);
                  this.publicationDataSource.paginator = this.paginator;
                });
  }
}
