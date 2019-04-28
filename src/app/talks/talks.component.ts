import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { TalksService } from '../talks.service'
import { Talks } from '../model/talks';
import { MatPaginator, MatTableDataSource, MatTable, MatIconRegistry } from '@angular/material';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.scss']
})
export class TalksComponent implements OnInit {

  @Input() displayedColumns: string[] = ['talk_date', 'title', 'event', 'location'];
  @Input() talks: Talks[];
  isLoadingResults = true;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<any>;
  talksDataSource: any;
  talkYears: number[];
  selected: number = null;
  

  constructor(private talksService: TalksService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) { 
    iconRegistry.addSvgIcon(
      'add',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/baseline-add_box-24px.svg')); 
  }

  ngOnInit() {
    this.talksService.getTalks()
    .subscribe((res: Talks[]) => 
                {
                  this.talks = res;
                  this.isLoadingResults = false;
                  this.talkYears = Array.from(new Set(res.map(item => item.year)));
                  this.talksDataSource = new MatTableDataSource<Talks>(this.talks);
                  this.talksDataSource.paginator = this.paginator;
                });
  }

  filterTalks(year: number) {
    if(year != undefined) {
      this.selected = year;
      this.talksDataSource = new MatTableDataSource<Talks>(this.talks.filter((talk) => talk.year == this.selected));
    } else {
      this.selected = null;
      this.talksDataSource = new MatTableDataSource<Talks>(this.talks);
    }
    this.talksDataSource.paginator = this.paginator;
    this.table.renderRows();
  }
}
