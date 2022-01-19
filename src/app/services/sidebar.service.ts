import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SidebarService {
	menu: any[] = [
		{
			titulo: 'Dashboard!!!!',
			icon: 'mdi mdi-gauge',
			submenu: [
				{ titulo: 'Main', url: '/dashboard' },
				{ titulo: 'ProgresBar', url: '/dashboard/progress' },
				{ titulo: 'Gráficas', url: '/dashboard/grafica1' },
				{ titulo: 'Promesas', url: '/dashboard/promesas' }
			]
		}
	]

	constructor() {}
}
