import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource, MatTable, MatIconRegistry } from '@angular/material';
import { DomSanitizer} from '@angular/platform-browser';
import { ClassService } from '../class.service'
import { Class } from '../model/class';

@Component({
  selector: 'app-teaching',
  templateUrl: './teaching.component.html',
  styleUrls: ['./teaching.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TeachingComponent implements OnInit {

  @Input() columnsToDisplay: string[] = ['title']
  @Input() expandedColumnsToDisplay: string[] = ['location', 'time', 'office_hours', 'semester', 'description'];
  @Input() classes: Class[];
  isLoadingResults = true;
  @ViewChild(MatTable) table: MatTable<any>;
  classDataSource: any;
  expandedClass: Class | null;

  constructor(private classService: ClassService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'add',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/baseline-add_box-24px.svg')); 
   }

  ngOnInit() {
    this.classService.getClasses()
    .subscribe((res: Class[]) => 
                {
                  this.classes = res;
                  this.isLoadingResults = false;
                  this.classDataSource = new MatTableDataSource<Class>(this.classes);
                });
  }

}
