import { Component, ViewChild, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpModule } from '@angular/http';
import { Router } from  '@angular/router';

import { Activity } from './activity';
import { ActivityService } from './activity.service';

//import { ActivityDetailComponent } from './activity-detail.component';

import { Observable} from "rxjs/Observable"
import "rxjs/add/observable/combineLatest";
import "rxjs/add/operator/filter";

@Component({
  selector: 'public-activities',
  templateUrl: 'public-activities.component.html',
  //providers: [...HTTP_PROVIDERS, ActivityService],
  styleUrls: ['public-activities.component.css']
})

export class PublicActivitiesComponent  implements OnInit {


 activityData = {
   name: '',
   venue: '',
   price: '',
   date: '',
   time: '',
   category: ''
  
 };

selectedActivity: Activity;
activities: Activity[];
private publicActivities: Array<Activity> = [];


  

  constructor(
    private activityService: ActivityService,
    private authService: AuthService,
    private router: Router ) { 
    //   activityService
    // .getPublicActivities()
    // .then((res) => {
    //   this.publicActivities = res;
    //   });

  }

  getPublicActivites(): void {
    this.activityService
    .getPublicActivities()
    .then((res) => {
      this.publicActivities = res;
      });
   } 

   ngOnInit(): void {
     this.getPublicActivites();
   }
  // activityService.getPublicActivities()
  //   .then((res)=> {
  //     this.publicActivities = res;
  //   });


  onSelect(activity: Activity): void {
  this.selectedActivity = activity;
}

  gotoDetail(id): void  {
      
  this.router.navigate(['/detail', this.selectedActivity._id]);
}

 createActivity() {
   this.activityService.createActivity(this.activityData)
   .subscribe((res) => {
     this.publicActivities = res;
   //  reset inputs to empty strings
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
  editActivity() {
   this.activityService.editActivity(this.activityData)
   .subscribe((res)=> {
     this.publicActivities = res;
   });
 }
 

// ngOnInit(): void {
//   this.getPublicActivites();
// }
}