import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, FormArray, FormControl } from '@angular/forms';
import { ClassService } from '../class.service';
import { Class } from '../model/class';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer} from '@angular/platform-browser';
import { MatIconRegistry, MatDialog, MatRadioButton } from '@angular/material';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-teaching-edit',
  templateUrl: './teaching-edit.component.html',
  styleUrls: ['./teaching-edit.component.scss']
})
export class TeachingEditComponent implements OnInit {

  matcher = new ErrorStateMatcher();
  teachingForm: FormGroup;
  id: number = null;
  title:string = "";
  location:string = "";
  time:string = "";
  office_hours: string = "";
  semester: string = "";
  description:string = "";
  isLoadingResults = false;

  currentYear: any;
  startYear: any;
  semesterPeriod = ["Spring", "Summer", "Fall", "Winter"];
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private router: Router, private route: ActivatedRoute, private http: ClassService, private formBuilder: FormBuilder) {
    iconRegistry.addSvgIcon(
      'back',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/baseline-navigate_before-24px.svg'));
    iconRegistry.addSvgIcon(
      'save',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/baseline-save-24px.svg')); 
   }

  ngOnInit() {
    this.fetchClass(this.route.snapshot.params['id']);
    this.teachingForm = this.formBuilder.group({
      'title' : [null, Validators.required],
      'location' : [null, Validators.required],
      'time' : [null, Validators.required],
      'office_hours' : [null, Validators.required],
      'semester' : [null, Validators.required],
      'description' : [null, Validators.required]
    });
  }

  fetchClass(id: number) {
    this.http.getClassById(id).subscribe((data: Class)=> {
      this.id = data.id;
      this.teachingForm.setValue({
        title: data.title,
        location: data.location,
        time: data.time,
        office_hours: data.office_hours,
        semester: data.semester,
        description: data.description
      });
    });
  }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.http.updateClassById(this.id, form)
      .subscribe(res => {
          let id = res['id'];
          this.isLoadingResults = false;
          this.router.navigate(['/teaching-detail', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  teachingDetails() {
    this.router.navigate(['/teaching-detail', this.id]);
  }
}
