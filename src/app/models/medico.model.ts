import { Usuario } from "./usuario.model"
import { Hospital } from "./hospital.model"

export class Medico {
	constructor(
		public nombre: string,
		public usuario: Usuario,
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
