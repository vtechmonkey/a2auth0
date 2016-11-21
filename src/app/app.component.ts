import { Component } from '@angular/core';
import { AuthService } from './auth.service';


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
		<div class="col-sm-12">
			<router-outlet></router-outlet>
		</div>
	</div>
 `,
  styleUrls: [`.navbar-right { margin-right: 0px !important }`]
})
export class AppComponent {
  title = 'Bubblbook';

  constructor(private authService: AuthService) {}
}
