import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TalksService } from '../talks.service';
import { Talks } from '../model/talks';
import { DomSanitizer} from '@angular/platform-browser';
import { MatIconRegistry, MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component'

@Component({
  selector: 'app-talks-detail',
  templateUrl: './talks-detail.component.html',
  styleUrls: ['./talks-detail.component.scss']
})
export class TalksDetailComponent implements OnInit {

  talk: Talks = { id: null, year: null, event: '', location: '', title: '', talk_date: ''};
  isLoadingResults = true;

  constructor(private route: ActivatedRoute, private http: TalksService, private router: Router, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, public dialog: MatDialog) {
    iconRegistry.addSvgIcon(
      'back',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/baseline-navigate_before-24px.svg')); 
    iconRegistry.addSvgIcon(
      'edit',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/baseline-edit-24px.svg'));  
    iconRegistry.addSvgIcon(
      'delete',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/baseline-delete-24px.svg')); 
   } 

  ngOnInit() {
    this.getTalkById(this.route.snapshot.params['id']);
  }

  getTalkById(id: number) {
    console.log('Get By Id invoked');
    this.http.getTalks()
    .subscribe((res: Talks[]) => 
                {
                  this.talk = res.find(item => item.id == id);
                  this.isLoadingResults = false;
                });
  }

  deleteTalkById(id: number) {
    // this.isLoadingResults = true;
    // this.http.deleteTalkById(id)
    // .subscribe((res: Talks) => {
    //   this.isLoadingResults = false;
    //   this.router.navigate(['/talks']);
    // }, (err) => {
    //   console.log(err);
    //   this.isLoadingResults = false;
    // });
    this.isLoadingResults = false;
  }

  openConfirmationDialog() {
    console.log('Confirmation invoked');
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {message: "Are you sure you want to delete this talk?"}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == true) {
        console.log('Delete invoked');
        this.deleteTalkById(this.talk.id);
      }
    });
  }
}
