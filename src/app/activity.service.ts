import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

import 'rxjs/add/operator/toPromise';

import { Activity } from './activity';

@Injectable()
export class ActivityService {

	private headers = new Headers({'Content-Type': 'application/json'});
	private activitiesUrl = 'http://localhost:3000/api/activities';
	private publicActivitiesUrl = 'http://localhost:3000/api/activities/public';
	private privateActivitiesUrl = 'http://localhost:3000/api/activities/private';
								
	constructor(private http: Http, private authHttp: AuthHttp){ }

	getActivities(): Promise<Activity[]> {
		return this.http
		.get(this.activitiesUrl)
		.toPromise()
		.then(response => response.json().data as Activity[])
		.catch(this.handleError);
	}

	create(name:string): Promise<Activity> {
		return this.http
			.post(this.activitiesUrl, JSON.stringify({name: name}), {headers: this.headers})
			.toPromise()
			.then(res => res.json().data)
			.catch(this.handleError);
	}

	getPublicActivities() : Promise<Activity[]> {
		return this.http
		.get(this.publicActivitiesUrl)
		.toPromise()
		.then(response=>response.json() as Activity[])
		.catch(this.handleError);
	}

	getPrivateActivities() : Promise<Activity[]> {
		return this.authHttp
		.get(this.privateActivitiesUrl)
		.toPromise()
		.then(response=>response.json() as Activity[])
		.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('Damn you all to hell', error);
		return Promise.reject(error.message || error);
	
	}
}