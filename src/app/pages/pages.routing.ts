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
			{ path: '', component: DashboardComponent, data:{titulo: 'Dashboard'} },
			{ path: 'progress', component: ProgressComponent, data:{titulo: 'Progress'} },
			{ path: 'grafica1', component: Grafica1Component, data:{titulo: 'Grafica1'} },
			{ path: 'account-settings', component: AccountSettingsComponent, data:{titulo: 'AccountSettings'} },
			{ path: 'promesas', component: PromesasComponent, data:{titulo: 'Promesas'} },
			{ path: 'rxjs', component: RxjsComponent, data:{titulo: 'Rxjs'} }
		]
	}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
