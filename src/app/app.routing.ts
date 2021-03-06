import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuard } from './auth-guard.service';

import { PublicActivitiesComponent } from './public-activities.component';
import { PrivateActivitiesComponent } from './private-activities.component';
import { ActivityDetailComponent } from './activity-detail.component';


const appRoutes: Routes = [
{
	path: '',
	redirectTo: '/activities',
	pathMatch: 'full'

},
{
	path: 'activities',
	component: PublicActivitiesComponent
},
{
	path: 'special',
	component: PrivateActivitiesComponent,
	canActivate: [AuthGuard]

},
{	path: 'detail/:id',
	component: ActivityDetailComponent
}

];

export const routing = RouterModule.forRoot(appRoutes);
export const routedComponents = [PublicActivitiesComponent, PrivateActivitiesComponent, ActivityDetailComponent]
