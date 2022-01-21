import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { retry } from 'rxjs/operators'

@Component({
	selector: 'app-rxjs',
	templateUrl: './rxjs.component.html',
	styles: []
})
export class RxjsComponent implements OnDestroy{
	//Called once, before the instance is destroyed.
	//Add 'implements OnDestroy' to the class.
	public varObserbable: Subscription;

  	constructor() {
    
		this.varObserbable = this.retornaObservable()
			.pipe(
				// aunque tengamos un error continua con la operacion
				// import { retry } from 'rxjs/operators'
				// arg number 1, numero de intentos, para intentos ilimitados quitar el numero retry()
				retry(1)
			)
			.subscribe({
				next(valor) {
					console.log('Current Position: ', valor)
				},
				error(error) {
					console.log('Error Getting Location: ', error)
				},
				complete() {
					console.log('Observer got a complete notification')
				}
			})
		}
	
	// destruye el observable para que al cambiar de página lo destruya
	ngOnDestroy(): void {
		//Called once, before the instance is destroyed.
		//Add 'implements OnDestroy' to the class.
		this.varObserbable.unsubscribe();
		
	}

	retornaObservable() {
		let i = -1
		const obs2$ = new Observable((observer) => {
			const intervalo = setInterval(() => {
				i++
				// para retornar el valor
				observer.next(i)

				if (i == 2) observer.error()

				if (i >= 4) {
					// cancelar o parar el intervalo indicandole el nombre de este
					clearInterval(intervalo)
					observer.complete()
				}

				// para indicar error
				// observer.error()
			}, 2000)
		})
		return obs2$;
  	}
  

}


