import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpModule } from '@angular/http';
import { Activity } from './activity';
import { ActivityService } from './activity.service';

@Component({
  selector: 'public-activities',
  templateUrl: 'public-activities.component.html',
  //providers: [...HTTP_PROVIDERS, ActivityService],
  styleUrls: ['public-activities.component.css']
})




export class PublicActivitiesComponent {

 
 activityData = {
   name: '',
   venue: '',
   price: '',
   date: '',
   time: ''

 };

private publicActivities: Array<Activity> = [];

  constructor(
    public activityService: ActivityService,
    private authService: AuthService) {

    activityService.getPublicActivities()
    .subscribe((res)=> {
      this.publicActivities = res;
    });
  }

 createActivity() {
   this.activityService.createActivity(this.activityData)
   .subscribe((res) => {
     this.publicActivities = res;
     //reset inputs to empty strings
     this.activityData.name = '';
     this.activityData.venue = '';
     this.activityData.price = '';
     this.activityData.date = '';
     this.activityData.time = '';
   });
 }
 deleteActivity(id) {
   this.activityService.deleteActivity(id)
   .subscribe((res)=> {
     this.publicActivities = res;
   });
 }
 
}