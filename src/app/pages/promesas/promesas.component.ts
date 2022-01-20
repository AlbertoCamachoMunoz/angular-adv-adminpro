import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-promesas',
	templateUrl: './promesas.component.html',
	styles: []
})
export class PromesasComponent implements OnInit {
	public prom1 = new Promise((resolve, reject) => {
		setTimeout(() => {
			let result = 1 + 1
			resolve(`${result} desde setTimeOut`)
		})
	})

	constructor() {
		// this.prom1
		// .then((mensaje) => {
		// 	console.log(mensaje)
		// })
		// .catch((err) => {
		// 	console.warn(err)
		// })
		console.log('contructor')
	}

	ngOnInit(): void {
		console.log('ngOnInit')
		this.getPromesas().then((usuarios) => {
			console.log(usuarios)
		})
	}

	getPromesas() {
		return new Promise((resolve, reject) => {
			fetch('https://reqres.in/api/users?page=2')
				.then((resp) => resp.json())
				.then((body) => resolve(body))
		})
	}

}
