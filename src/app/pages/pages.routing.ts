import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';


const routes: Routes = [
    { 
        // comentario desde github
        // ruta padre ej http://localhost:4200/dashboard
        path: 'dashboard', 
        component: PagesComponent,
        children:[
            // rutas hijas a partir del padre ej: http://localhost:4200/dashboard/progress
            { path: '', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'grafica1', component: Grafica1Component },
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
