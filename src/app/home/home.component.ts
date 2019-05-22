import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bio : any;
  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.getBio().subscribe(data => 
      {
        this.bio = data;
        console.log(this.bio);
      })
  }

}
