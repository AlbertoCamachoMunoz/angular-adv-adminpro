import { Usuario } from './usuario.model'

export class Hospital {
	constructor(
		public nombre: string,
		public email: string,
		public password?: string,
		public img?: string,
		public google?: boolean,
		public rol?: string,
		public uid?: string
	) {}

	imprimir() {
		console.log(this.nombre)
	}
}
