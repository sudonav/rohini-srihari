import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ClassService } from '../class.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer} from '@angular/platform-browser';
import { MatIconRegistry, MatDialog } from '@angular/material';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-teaching-add',
  templateUrl: './teaching-add.component.html',
  styleUrls: ['./teaching-add.component.scss']
})
export class TeachingAddComponent implements OnInit {

  matcher = new ErrorStateMatcher();
  teachingForm: FormGroup;
  id: number = null;
  title:string = "";
  office_hours: string = "";
  location: string = "";
  time:string = "";
  semester: string[];
  desc: string = "";
  isLoadingResults = false;
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private router: Router, private route: ActivatedRoute, private http: ClassService, private formBuilder: FormBuilder) {
    iconRegistry.addSvgIcon(
      'back',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/baseline-navigate_before-24px.svg'));
    iconRegistry.addSvgIcon(
      'save',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/baseline-save-24px.svg')); 
  }

  ngOnInit() {
    this.teachingForm = this.formBuilder.group({
      'title' : [null, Validators.required],
      'office_hours' : [null, Validators.required],
      'time' : [null, Validators.required],
      'location' : [null, Validators.required],
      'semester' : [null, Validators.required],
      'description' : [null, Validators.required]
    });
  }

  onFormSubmit(form:NgForm) {
    // this.isLoadingResults = true;
    // this.http.addClass(form)
    //   .subscribe(res => {
    //       let id = res['id'];
    //       this.isLoadingResults = false;
    //       this.router.navigate(['/teaching']);
    //     }, (err) => {
    //       console.log(err);
    //       this.isLoadingResults = false;
    //     }
    //   );
    this.isLoadingResults = false;
  }
}
