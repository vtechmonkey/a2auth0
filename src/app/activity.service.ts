import { Injectable } from '@angular/core';
import { Headers, Http, Response, JsonpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthHttp } from 'angular2-jwt';
import { Activity } from './activity';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class ActivityService {

	private headers = new Headers({'Content-Type': 'application/json'});
	private activitiesUrl = 'http://localhost:3000/api/activities';
	private publicActivitiesUrl = 'http://localhost:3000/api/activities/public';
	private privateActivitiesUrl = 'http://localhost:3000/api/activities/private';
								
	constructor(public http: Http, private authHttp: AuthHttp){ }

	getActivities(): Promise<Activity[]> {
		return this.http
		.get(this.activitiesUrl)
		.toPromise()
		.then(response => response.json().data as Activity[])
		.catch(this.handleError);
	}

	getActivity(id: number): Promise<Activity> {
		const url = `${this.activitiesUrl}/${id}`;
		return this.http.get(url)
		.toPromise()
		.then(response => response.json().data as Activity)
		.catch(this.handleError);
		//.then(activities => activities.filter(activity => activity.id === id)[0]);
	}
	
	// getPublicActivities() : Observable<Activity[]>{
	// 	return this.http
	// 	.get(this.publicActivitiesUrl)
	// 	.map(res=>res.json())
	// 	.catch((error:any) => Observable.throw(error.json().error || 'Server error'))
	// }
// =======
	
// 	getPublicActivities() : Observable<Activity[]>{
// 		return this.http
// 		.get(this.publicActivitiesUrl)
// 		.map(res=>res.json())
// 		.catch((error:any) => Observable.throw(error.json().error || 'Server error'))
// 	}
// >>>>>>> 5208f1f5dc8ab596e8663c68a029a5c367578c0a
	createActivity(data) : Observable<Activity[]>{
		return this.http.post(this.activitiesUrl, JSON.stringify(data),
			{headers: this.headers})
		.map(res => res.json());
	}
	deleteActivity(id) : Observable<Activity[]> {
		return this.http.delete(`${this.activitiesUrl}/${id}`)
		.map(res => res.json());
	}
	editActivity(data) : Observable<Activity[]> {
		const url = `${this.activitiesUrl}/${data.id}`;
		return this.http
		.put(url, JSON.stringify(data), {headers: this.headers})
		.map(res => res.json());
	}

<<<<<<< HEAD
	

	// getActivity(id) : Observable<Activity[]> {
	// 	return this.http
	// 	.get(this.publicActivitiesUrl)
	// 	.map(res=>res.json())
	// 	.filter(a => a.id === id)[0];
		
	// }


	getPublicActivities() : Promise<Activity[]> {
		return this.http
		.get(this.publicActivitiesUrl)
		.toPromise()
		.then(response=>response.json() as Activity[])
		.catch(this.handleError);
	}

=======

	// getPublicActivities() : Promise<Activity[]> {
	// 	return this.http
	// 	.get(this.publicActivitiesUrl)
	// 	.toPromise()
	// 	.then(response=>response.json() as Activity[])
	// 	.catch(this.handleError);
	// }

>>>>>>> 5208f1f5dc8ab596e8663c68a029a5c367578c0a
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