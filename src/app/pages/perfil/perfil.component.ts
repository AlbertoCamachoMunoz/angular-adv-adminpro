import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2'


@Component({
	selector: 'app-perfil',
	templateUrl: './perfil.component.html',
	styles: []
})
export class PerfilComponent implements OnInit {
	public formSubmitted = false

	public perfilForm = this.fb.group({
		nombre: ['Alberto', [Validators.required]],
		email: ['c4max0@gmail.com', [Validators.required, Validators.email]]
	})

	constructor(private fb: FormBuilder, private usuarioService: UsuarioService) {}

	ngOnInit(): void {}

	sendForm() {
		// las pasamos a constantes por que el this en la funcion no funciona por no ser una funcion de flecha
		this.formSubmitted = true

		if (!this.perfilForm.valid) return
		else
			this.usuarioService.actualizarUsuario(this.perfilForm.value).subscribe({
				next(resp) {
					console.log(resp)
				},
				error(err) {
					Swal.fire({
						title: 'Error!',
						text: `${err.error.msg} USUARIOS`,
						icon: 'error',
						confirmButtonText: 'ok'
					})
				}
			})
	}
}
