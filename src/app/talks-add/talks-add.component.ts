import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { TalksService } from '../talks.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer} from '@angular/platform-browser';
import { MatIconRegistry, MatDialog } from '@angular/material';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-talks-add',
  templateUrl: './talks-add.component.html',
  styleUrls: ['./talks-add.component.scss']
})
export class TalksAddComponent implements OnInit {

  matcher = new ErrorStateMatcher();
  talkForm: FormGroup;
  id: number = null;
  title:string = "";
  event: string = "";
  talk_date:string = "";
  year: number = null;
  location:string = "";
  isLoadingResults = false;
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private router: Router, private route: ActivatedRoute, private http: TalksService, private formBuilder: FormBuilder) {
    iconRegistry.addSvgIcon(
      'back',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/baseline-navigate_before-24px.svg'));
    iconRegistry.addSvgIcon(
      'save',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/baseline-save-24px.svg')); 
   }

  ngOnInit() {
    this.talkForm = this.formBuilder.group({
      'title' : [null, Validators.required],
      'event' : [null, Validators.required],
      'talk_date' : [null, Validators.required],
      'year' : [null, Validators.required],
      'location' : [null, Validators.required]
    });
  }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.http.addTalk(form)
      .subscribe(res => {
          let id = res['id'];
          this.isLoadingResults = false;
          this.router.navigate(['/talks-detail', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }
}
