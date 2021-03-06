import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import Swal from 'sweetalert2'

import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model'
import { FileUploadService } from '../../services/file-upload.service'



@Component({
	selector: 'app-perfil',
	templateUrl: './perfil.component.html',
	styles: []
})
export class PerfilComponent implements OnInit {
	public formSubmitted = false

	public perfilForm: FormBuilder | any

	public usuario?: Usuario
	public imagenSubir!: File
	public imgTemp: any = ''

	constructor(
		private fb: FormBuilder,
		private usuarioService: UsuarioService,
		private fileUploadService: FileUploadService
	) {
		this.usuario = this.usuarioService.usuario
	}

	ngOnInit(): void {
		this.perfilForm = this.fb.group({
			nombre: [this.usuario?.nombre, [Validators.required]],
			email: [this.usuario?.email, [Validators.required, Validators.email]]
		})
	}

	actualizarPerfil() {
		// las pasamos a constantes por que el this en la funcion no funciona por no ser una funcion de flecha
		this.formSubmitted = true

		if (!this.perfilForm.valid) return
		else
			this.usuarioService.actualizarUsuario(this.perfilForm.value).subscribe({
				next: (resp) => {
					console.log(resp)
					this.usuario!.nombre = this.perfilForm.value.nombre
					this.usuario!.email = this.perfilForm.value.email
					Swal.fire({
						title: 'Success!',
						text: `${this.usuario!.nombre} USUARIOS`,
						icon: 'success',
						confirmButtonText: 'ok'
					})
				},
				error: (err) => {
					Swal.fire({
						title: 'Error!',
						text: `${err.error.msg} USUARIOS`,
						icon: 'error',
						confirmButtonText: 'ok'
					})
				}
			})
	}

	cambiarImagen(event) {

		if (event?.target?.files[0]) this.imagenSubir = event.target.files[0]

		if (!this.imagenSubir) {
			this.imgTemp = ''
			return;	
		} 
		const reader = new FileReader()

		reader.onloadend = () => {
			console.log(reader.result)
			this.imgTemp = reader.result
		}
	}

	subirImagen() {
		console.log(this.imagenSubir)

		this.fileUploadService
			.actializarFoto(this.imagenSubir, 'usuarios', this.usuario!.uid || '')
			.then((img) => {
				this.usuario!.img = img
				Swal.fire({
					title: 'Success!',
					text: `${this.usuario!.nombre} USUARIOS`,
					icon: 'success',
					confirmButtonText: 'ok'
				})
			})
			.catch((err) => {
				Swal.fire({
					title: 'Error!',
					text: `${err.error.msg} USUARIOS`,
					icon: 'error',
					confirmButtonText: 'ok'
				})
			})
	}
}
