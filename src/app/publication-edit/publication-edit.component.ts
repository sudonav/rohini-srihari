import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { PublicationService } from '../publication.service';
import { Publication } from '../model/publication';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer} from '@angular/platform-browser';
import { MatIconRegistry, MatDialog } from '@angular/material';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-publication-edit',
  templateUrl: './publication-edit.component.html',
  styleUrls: ['./publication-edit.component.scss']
})
export class PublicationEditComponent implements OnInit {

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
    this.fetchPublication(this.route.snapshot.params['id']);
    this.publicationForm = this.formBuilder.group({
      'title' : [null, Validators.required],
      'author' : [null, Validators.required],
      'published_date' : [null, Validators.required],
      'year' : [null, Validators.required],
      'published_at' : [null, Validators.required]
    });
  }

  fetchPublication(id: number) {
    this.http.getPublications().subscribe((publications: Publication[])=> {
      var data: Publication = publications.find(item => item.id == id);
      this.id = data.id;
      this.publicationForm.setValue({
        title: data.title,
        author: data.author,
        published_date: data.published_date,
        year: data.year,
        published_at: data.published_at
      });
    });
  }

  onFormSubmit(form:NgForm) {
    // this.isLoadingResults = true;
    // this.http.updatePublicationById(this.id, form)
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

  publicationDetails() {
    this.router.navigate(['/publication-detail', this.id]);
  }
}
