import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Activity } from './activity';
import { ActivityService } from './activity.service';

@Component({
	selector: 'private-activities',
	templateUrl: 'private-activities.component.html',
	styleUrls: ['private-activities.component.css']
})
	export class PrivateActivitiesComponent implements OnInit {
	privateActivities: Activity[];
	error: any;

	constructor(
		private router: Router,
		private activityService: ActivityService){ }

	// add(name: string): void {
	// 	name = name.trim();
	// 	if (!name) { return; }
	// 	this.activityService.create(name)
	// 	.then(activity => {
	// 		this.privateActivities.push(activity);
	// 	});
	// }

	getPrivateActivities(): void {
		this.activityService
		.getPrivateActivities()
		.then(activities => this.privateActivities = activities)
		.catch(error => this.error = error);
	}

	ngOnInit(): void {
	this.getPrivateActivities();
	}

	attend(item){
	alert("you're attending " + item.name);
	}

}