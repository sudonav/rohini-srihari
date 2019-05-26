import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { PublicationService } from '../publication.service'
import { Publication } from '../model/publication';
import { MatPaginator, MatTableDataSource, MatTable, MatIconRegistry } from '@angular/material';
import { DomSanitizer} from '@angular/platform-browser';

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
  @ViewChild(MatTable) table: MatTable<any>;
  publicationDataSource: any;
  selected: number = null;
  publicationYears: number[];

  constructor(private publicationService: PublicationService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'add',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/baseline-add_box-24px.svg')); 
   }

  ngOnInit() {
    this.publicationService.getPublications()
    .subscribe((res: Publication[]) => 
                {
                  this.publications = res;
                  this.isLoadingResults = false;
                  this.publicationYears = Array.from(new Set(res.map(item => item.year)));
                  this.publicationDataSource = new MatTableDataSource<Publication>(this.publications);
                  this.publicationDataSource.paginator = this.paginator;
                });
  }

  filterPublications(year: number) {
    if(year != undefined) {
      this.selected = year;
      this.publicationDataSource = new MatTableDataSource<Publication>(this.publications.filter((publication) => publication.year == this.selected));  
    } else {
      this.selected = null;
      this.publicationDataSource = new MatTableDataSource<Publication>(this.publications);
    }
    this.publicationDataSource.paginator = this.paginator;
    this.table.renderRows();
  }

  navigateTo(row: any) {
    var url: string = row.url;
    if(url != "") {
      window.location.href = url;
    }
  }
}
