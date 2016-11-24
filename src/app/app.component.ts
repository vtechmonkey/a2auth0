import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Activity } from './activity';
import { ActivityService } from './activity.service';
import { QuestionService } from './question.service';

@Component({
  selector: 'daily-activities',
  template: `
	<div class="container">
		<nav class="navbar navbar-default">
			<div class="navbar-header">
				<a class="navbar-brand" routerLink="/dashboard">{{title}}</a>
			</div>
			<ul class="nav navbar-nav">
				<li>
					<a routerLink="/activities" *ngIf="authService.loggedIn()" routerLinkActive="active">Public Activities</a>
				</li>
				<li>
					<a routerLink="/special" *ngIf="authService.loggedIn()" routerLinkActive="active">Private Activities</a>
				</li>
			</ul>
			<ul class="nav navbar-nav navbar-right">
				<li>
					<a (click)=authService.login() *ngIf="!authService.loggedIn()">Log in</a>
				</li>
				<li>
				<a (click)=authService.logout() *ngIf="authService.loggedIn()">Log out</a>
				</li>
			</ul>
		</nav>
		<div>
		<h2>Add your activity</h2>
		<dynamic-form [questions] ="questions"></dynamic-form>
	
	</div>

		<div class="col-sm-12">
			<router-outlet></router-outlet>
		</div>
	</div>
 `,
  styleUrls: [`.navbar-right { margin-right: 0px !important }`],
  providers: [QuestionService]
})
export class AppComponent {
  title = 'Bubblbook';
  activities: Activity[];
  questions: any[];

  constructor(
  	private router: Router,
  	private activityService: ActivityService,
  	private authService: AuthService,
  	private questionService: QuestionService 
  	) {
  	this.questions = questionService.getQuestions();
  }

  	

  add(name: string): void {
		name = name.trim();
		if (!name) { return; }
		this.activityService.create(name)
		.then(activity => {
			this.activities.push(activity);
		});
	}
}
