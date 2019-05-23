import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { TalksService } from '../talks.service';
import { Talks } from '../model/talks';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer} from '@angular/platform-browser';
import { MatIconRegistry, MatDialog } from '@angular/material';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-talks-edit',
  templateUrl: './talks-edit.component.html',
  styleUrls: ['./talks-edit.component.scss']
})
export class TalksEditComponent implements OnInit {

  matcher = new ErrorStateMatcher();
  talkForm: FormGroup;
  id: number = null;
  title:string = "";
  author: string = "";
  published_date:string = "";
  year: number = null;
  published_at:string = "";
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
    this.fetchTalks(this.route.snapshot.params['id']);
    this.talkForm = this.formBuilder.group({
      'title' : [null, Validators.required],
      'event' : [null, Validators.required],
      'location' : [null, Validators.required],
      'year' : [null, Validators.required],
      'talk_date' : [null, Validators.required]
    });
  }

  fetchTalks(id: number) {
    this.http.getTalks().subscribe((talks: Talks[])=> {
      var data = talks.find(item => item.id == id)
      this.id = data.id;
      this.talkForm.setValue({
        title: data.title,
        event: data.event,
        talk_date: data.talk_date,
        year: data.year,
        location: data.location
      });
    });
  }

  onFormSubmit(form:NgForm) {
    // this.isLoadingResults = true;
    // this.http.updateTalkById(this.id, form)
    //   .subscribe(res => {
    //       let id = res['id'];
    //       this.isLoadingResults = false;
    //       this.router.navigate(['/talks-detail', id]);
    //     }, (err) => {
    //       console.log(err);
    //       this.isLoadingResults = false;
    //     }
    //   );
    this.isLoadingResults = false;
  }

  talkDetails() {
    this.router.navigate(['/talks-detail', this.id]);
  }

}
