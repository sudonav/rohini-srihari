import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassService } from '../class.service';
import { Class } from '../model/class';
import { DomSanitizer} from '@angular/platform-browser';
import { MatIconRegistry, MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

export interface DialogData {
  message: string;
}

@Component({
  selector: 'app-teaching-detail',
  templateUrl: './teaching-detail.component.html',
  styleUrls: ['./teaching-detail.component.scss']
})
export class TeachingDetailComponent implements OnInit {

  teaching : Class = {id: null, title: '', location: '', time: '', office_hours: '', semester: null, description: ''} 
  isLoadingResults = true;
  
  constructor(private route: ActivatedRoute, private http: ClassService, private router: Router, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, public dialog: MatDialog) {
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
    this.getTeachingById(this.route.snapshot.params['id']);
  }

  getTeachingById(id: number) {
    console.log('Get By Id invoked');
    this.http.getClassById(id)
    .subscribe((res: Class) => 
    {
      this.teaching = res;
      this.isLoadingResults = false;
    });
  }

  deleteTeachingById(id: number) {
    this.isLoadingResults = true;
    this.http.deleteClassById(id)
    .subscribe((res: Class) => {
      this.isLoadingResults = false;
      this.router.navigate(['/teaching']);
    }, (err) => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  openConfirmationDialog() {
    console.log('Confirmation invoked');
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {message: "Are you sure you want to delete this class?"}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == true) {
        console.log('Delete invoked');
        this.deleteTeachingById(this.teaching.id);
      }
    });
  }

}
