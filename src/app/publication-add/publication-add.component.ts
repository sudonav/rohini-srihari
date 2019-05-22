import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { PublicationService } from '../publication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer} from '@angular/platform-browser';
import { MatIconRegistry, MatDialog } from '@angular/material';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-publication-add',
  templateUrl: './publication-add.component.html',
  styleUrls: ['./publication-add.component.scss']
})
export class PublicationAddComponent implements OnInit {

  matcher = new ErrorStateMatcher();
  publicationForm: FormGroup;
  id: number = null;
  title:string = "";
  author: string = "";
  published_date:string = "";
  year: number = null;
  published_at:string = "";
  isLoadingResults = false;
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private router: Router, private route: ActivatedRoute, private http: PublicationService, private formBuilder: FormBuilder) {
    iconRegistry.addSvgIcon(
      'back',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/baseline-navigate_before-24px.svg'));
    iconRegistry.addSvgIcon(
      'save',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/baseline-save-24px.svg')); 
   }

  ngOnInit() {
    this.publicationForm = this.formBuilder.group({
      'title' : [null, Validators.required],
      'author' : [null, Validators.required],
      'published_date' : [null, Validators.required],
      'year' : [null, Validators.required],
      'published_at' : [null, Validators.required]
    });
  }

  onFormSubmit(form:NgForm) {
    // this.isLoadingResults = true;
    // this.http.addPublication(form)
    //   .subscribe(res => {
    //       let id = res['id'];
    //       this.isLoadingResults = false;
    //       this.router.navigate(['/publication-detail', id]);
    //     }, (err) => {
    //       console.log(err);
    //       this.isLoadingResults = false;
    //     }
    //   );
    this.isLoadingResults = false;
  }
}
