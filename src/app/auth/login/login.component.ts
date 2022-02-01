import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import Swal from 'sweetalert2'

import { UsuarioService } from '../../services/usuario.service'

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent {
	public formSubmitted = false

	public loginForm = this.fb.group({
		email: ['test@gmail.com', [Validators.required, Validators.email]],
		password: ['123456', [Validators.required]],
		remember:[false]
	});

	constructor(
		private router: Router,
		private fb: FormBuilder,
		private usuarioService: UsuarioService
	) {}

	login() {
		console.log(this.loginForm.valid)
		// this.router.navigateByUrl('/')
		if (!this.loginForm.valid) return
		else
			this.usuarioService.loginUsuario(this.loginForm.value).subscribe({
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
