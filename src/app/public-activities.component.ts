import { Component, ViewChild, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpModule } from '@angular/http';
<<<<<<< HEAD
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

<<<<<<< HEAD
export class PublicActivitiesComponent  implements OnInit {


=======



export class PublicActivitiesComponent {

// @ViewChild('activityForm') form;

//    ngAfterViewInit(){
//     Observable.combineLatest(
//       this.form.statusChange,
//       this.form.valueChanges,
//       (status, value)=>({status, value})
//     )
  
//   }

>>>>>>> 5208f1f5dc8ab596e8663c68a029a5c367578c0a
 activityData = {
   name: '',
   venue: '',
   price: '',
   date: '',
   time: '',
   category: ''
  
 };

<<<<<<< HEAD
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
=======
private publicActivities: Array<Activity> = [];

  
  constructor(
    public activityService: ActivityService,
    private authService: AuthService) { 



    activityService.getPublicActivities()
    .subscribe((res)=> {
      this.publicActivities = res;
    });
  }
>>>>>>> 5208f1f5dc8ab596e8663c68a029a5c367578c0a

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
 
<<<<<<< HEAD

// ngOnInit(): void {
//   this.getPublicActivites();
// }
=======
>>>>>>> 5208f1f5dc8ab596e8663c68a029a5c367578c0a
}