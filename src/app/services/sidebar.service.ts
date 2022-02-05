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
				{ titulo: 'Promesas', url: '/dashboard/promesas' },
				{ titulo: 'Rxjs', url: '/dashboard/rxjs' }
			]
		}
	]

	menu_profile: any[] = [
		{
			titulo: 'Mi perfil',
			icon: 'mdi mdi-gauge',
			submenu: [
				{ titulo: 'Perfil', url: '/perfil' },
			]
		}
	]

	constructor() {}
}
