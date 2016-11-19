import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

import 'rxjs/add/operator/toPromise';

import { Activity } from './activity';

@Injectable()
export class ActivityService {
	private publicActivitiesUrl = 'http://localhost:3001/api/activities/public';
	private privateActivitiesUrl = 'http://localhost:3001/api/activities/private';
										
	constructor(private http: Http, private authHttp: AuthHttp){ }

	getPublicActivities() {
		return this.http
		.get(this.publicActivitiesUrl)
		.toPromise()
		.then(response=>response.json() as Activity[])
		.catch(this.handleError);
	}

	getPrivateActivities() {
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