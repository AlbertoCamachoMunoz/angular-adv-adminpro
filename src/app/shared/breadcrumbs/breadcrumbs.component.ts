import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
	selector: 'app-breadcrumbs',
	templateUrl: './breadcrumbs.component.html',
	styles: []
})
export class BreadcrumbsComponent implements OnDestroy {

	public titulo!: any;
	public tituloSubs$: Subscription;

	constructor(private router: Router) {
		this.tituloSubs$ = this.getParamUrl()
			.subscribe(({ titulo }) => {
				this.titulo = titulo
				document.title = `AdminPro - ${titulo}`
				console.log(this.titulo)
			})
	}

	getParamUrl() {
		// extraer data de las rutas
		return this.router.events
			.pipe(
				filter<any>((event) => event instanceof ActivationEnd),
				// filter<any>((event): event is ActivationEnd => event instanceof ActivationEnd),
				filter((event: ActivationEnd) => event.snapshot.firstChild === null),
				map((event: ActivationEnd) => event.snapshot.data)
			)
			// // usamos la destructuracion del objeto para acceder directamente a la clave que queremos
			// .subscribe(({ titulo }) => {
			// 	this.titulo = titulo
			// 	document.title = `AdminPro - ${titulo}`
			// 	console.log(this.titulo)
			// })
	}

	ngOnDestroy(): void {
		this.tituloSubs$.unsubscribe();
	}
}
