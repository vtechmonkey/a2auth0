import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

import { Activity } from './activity';
import { ActivityService } from './activity.service';

@Component({
  selector: 'public-activities',
  templateUrl: 'public-activities.component.html',
  styleUrls: ['public-activities.component.css']
})
export class PublicActivitiesComponent implements OnInit {
  publicActivities: Activity[];

  constructor(
    private activityService: ActivityService,
    private authService: AuthService) {
  }

  ngOnInit(): void {
    this.activityService.getPublicActivities()
      .then(activities => this.publicActivities = activities);
  }
  
  attend(item){
    alert("You bought the: " + item.name);
  }
}