import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent {

  constructor() {

    // // los observables funcionan aunque estemos en otra página, no solo en este componente ya que se almacena en memoria
    // const obs$ = new Observable(observer => {

    //   let i = -1;
    //   const intervalo = setInterval(() => {
		// 	  i++
		// 	  // para retornar el valor
    //     observer.next(i)
        
    //     if (i >= 4) {
    //       // cancelar o parar el intervalo indicandole el nombre de este
    //       clearInterval(intervalo)
    //       // para indicar que el observable esta completado
    //       observer.complete()
    //     }
    //     // para indicar error
    //     // observer.error()
		//   }, 2000)

      
    // })

    // obs$.subscribe({
    //   next(valor) { console.log('Current Position: ', valor) },
    //   error(error) { console.log('Error Getting Location: ', error) },
    //   complete() { console.log('Observer got a complete notification') }
    // })

    const obs2$ = new Observable(observer => {
        let i = -1;
            const intervalo = setInterval(() => {
                i++
                // para retornar el valor
                observer.next(i)
                if (i >= 4) {
                    // cancelar o parar el intervalo indicandole el nombre de este
                    clearInterval(intervalo)
                    observer.complete()
                }
                // para indicar error
                // observer.error()
            }, 2000)
    });

    obs2$.subscribe({
        next(valor)  { console.log('Current Position: ', valor) },
        error(error) { console.log('Error Getting Location: ', error) },
        complete()   { console.log('Observer got a complete notification') }
    });

  }
}


