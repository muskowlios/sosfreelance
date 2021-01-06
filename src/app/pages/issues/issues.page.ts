import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.page.html',
  styleUrls: ['./issues.page.scss'],
})
export class IssuesPage implements OnInit {
  issueslist : string = 'newIssues';

  constructor(private router :Router) { }

  ngOnInit() {
  }

  segmentChanged(data: any){
    this.issueslist = data.target.value;
  }
  addIssue(){
    this.router.navigate(['/add-issue']);
  }
  goToDetail(){
    this.router.navigate(['/issue-details']);

  }
}
