import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service'

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {

  research: any;
  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.getResearch().subscribe(data => 
      {
        this.research = data;
      })
  }

}
