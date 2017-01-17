import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpModule } from '@angular/http';
import { ActivatedRoute, Params } 	from '@angular/router';
import { Location }					from '@angular/common';
import { Activity } from './activity';
import { ActivityService } from './activity.service';
//import { PublicActivitiesComponent } from './public-activities.component';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'my-activity-detail',
	templateUrl: 'activity-detail.component.html'
	//inputs: ['activity']
})
export class ActivityDetailComponent implements OnInit {
	//@Input()
	activity:Activity;
	
	constructor(
		private activityService : ActivityService,
		private route: ActivatedRoute,
		private location: Location
		){}

		ngOnInit(): void {
			this.route.params
			.switchMap((params: Params) =>
			 this.activityService
            .getActivity(+params['id']))
			.subscribe(activity => this.activity = activity);
		
		console.log(this.route.params
			.switchMap((params: Params) =>
			 this.activityService
            .getActivity(+params['id']))
			.subscribe(activity => this.activity = activity));
		console.log(this.activity.name);
	}
		

}

