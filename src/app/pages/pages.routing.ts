import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const routes: Routes = [
	{
		// comentario desde github
		// ruta padre ej http://localhost:4200/dashboard
		// ruta padre ej http://localhost:4200/dashboard
		// ruta padre ej http://localhost:4200/dashboard
		path: 'dashboard',
		component: PagesComponent,
		children: [
			// rutas hijas a partir del padre ej: http://localhost:4200/dashboard/progress
			{ path: '', component: DashboardComponent },
			{ path: 'progress', component: ProgressComponent },
			{ path: 'grafica1', component: Grafica1Component },
			{ path: 'account-settings', component: AccountSettingsComponent },
			{ path: 'promesas', component: PromesasComponent },
			{ path: 'rxjs', component: RxjsComponent }
		]
	}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
