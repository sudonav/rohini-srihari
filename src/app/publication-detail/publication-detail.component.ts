import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicationService } from '../publication.service';
import { Publication } from '../model/publication';
import { DomSanitizer} from '@angular/platform-browser';
import { MatIconRegistry, MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component'


export interface DialogData {
  message: string;
}

@Component({
  selector: 'app-publication-detail',
  templateUrl: './publication-detail.component.html',
  styleUrls: ['./publication-detail.component.scss']
})
export class PublicationDetailComponent implements OnInit {

  publication: Publication = { id: null, year: null, published_date: '', published_at: '', title: '', author: ''};
  isLoadingResults = true;

  constructor(private route: ActivatedRoute, private http: PublicationService, private router: Router, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, public dialog: MatDialog) {
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
    this.getPublicationById(this.route.snapshot.params['id']);
  }

  getPublicationById(id: number) {
    console.log('Get By Id invoked');
    this.http.getPublicationById(id)
    .subscribe((res: Publication) => 
                {
                  this.publication = res;
                  this.isLoadingResults = false;
                });
  }

  deletePublicationById(id: number) {
    this.isLoadingResults = true;
    this.http.deletePublicationById(id)
    .subscribe((res: Publication) => {
      this.isLoadingResults = false;
      this.router.navigate(['/publication']);
    }, (err) => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  openConfirmationDialog() {
    console.log('Confirmation invoked');
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {message: "Are you sure you want to delete this publication?"}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == true) {
        console.log('Delete invoked');
        this.deletePublicationById(this.publication.id);
      }
    });
  }
}