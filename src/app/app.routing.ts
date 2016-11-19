import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuard } from './auth-guard.service';

import { PublicActivitiesComponent } from './public-activities.component';
import { PrivateActivitiesComponent } from './private-activities.component';

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
}
];

export const routing = RouterModule.forRoot(appRoutes);
export const routedComponents = [PublicActivitiesComponent, PrivateActivitiesComponent];
