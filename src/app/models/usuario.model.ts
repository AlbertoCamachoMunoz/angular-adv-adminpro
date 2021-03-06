import { environment } from "../../environments/environment";

const base_url = environment.base_url;


export class Usuario {
	constructor(
		public nombre: string,
		public email: string,
		public password?: string,
		public img?: string,
		public google?: boolean,
		public rol?: string,
		public uid?: string
	) {}

	get imagenUrl() {
		//localhost:3000/api/uploads/usuarios/ba1883fa-ce9d-4dee-8ede-c063251b3525.jpg

		if (this.img?.includes('https')) return `${this.img}`

		if (this.img) return `${base_url}/uploads/usuarios/${this.img}`
		else return `${base_url}/uploads/usuarios/no-image`
	}
}