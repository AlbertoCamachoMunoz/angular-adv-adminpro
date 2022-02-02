import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import Swal from 'sweetalert2'

import { UsuarioService } from '../../services/usuario.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent {
	public formSubmitted = false

	public registerForm = this.fb.group(
		{
			nombre: ['Alberto', [Validators.required]],
			email: ['test@gmail.com', [Validators.required, Validators.email]],
			password: ['123456', [Validators.required]],
			password2: ['123456', [Validators.required]],
			terminos: [true, [Validators.required]]
		},
		{
			validators: this.passwordIguales('password', 'password2')
		}
	)

	constructor(
		private fb: FormBuilder,
		private usuarioService: UsuarioService,
		private router: Router
	) {}

	crearUsuario() {
		this.formSubmitted = true
		const router_ = this.router

		if (!this.registerForm.valid) return
		else
			this.usuarioService.crearUsuario(this.registerForm.value).subscribe({
				next(resp) {
					router_.navigateByUrl('/')
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

	aceptaTerminos(campo: string): boolean {
		return !this.registerForm.get(campo)?.value && this.formSubmitted
	}

	campoNoValido(campo: string): boolean {
		if (this.registerForm.get(campo)?.invalid && this.formSubmitted) return true
		else return false
	}

	contrasenasNoValidas() {
		const pass1 = this.registerForm.get('password')?.value
		const pass2 = this.registerForm.get('password2')?.value

		if (pass1 !== pass2 && this.formSubmitted) return true
		else return false
	}

	passwordIguales(password: string, password2: string) {
		return (formGroup: FormGroup) => {
			const pass1Control = formGroup.get(password)
			const pass2Control = formGroup.get(password2)

			if (pass1Control?.value === pass2Control?.value) {
				pass2Control?.setErrors(null)
			} else {
				pass2Control?.setErrors({ noEsIgual: true })
			}
		}
	}
}
