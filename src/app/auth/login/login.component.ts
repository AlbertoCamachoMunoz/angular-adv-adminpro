import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import Swal from 'sweetalert2'

import { UsuarioService } from '../../services/usuario.service'
declare const gapi:any;

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	public formSubmitted = false
	public auth2: any

	public loginForm = this.fb.group({
		email: [localStorage.getItem('email') || '', [Validators.required, Validators.email]],
		password: ['', [Validators.required]],
		remember: [localStorage.getItem('remember') || false]
	})

	constructor(
		private router: Router,
		private fb: FormBuilder,
		private usuarioService: UsuarioService,
		private ngZone: NgZone
	) {}

	ngOnInit(): void {
		this.renderButton()
	}

	login() {
		// las pasamos a constantes por que el this en la funcion no funciona por no ser una funcion de flecha
		const loginForm_ = this.loginForm
		const router_ = this.router
		if (!this.loginForm.valid) return
		else
			this.usuarioService.loginUsuario(this.loginForm.value).subscribe({
				next(resp) {
					if (loginForm_.get('remember')?.value)
						localStorage.setItem('email', loginForm_.get('email')?.value),
							localStorage.setItem('remember', loginForm_.get('remember')?.value)
					else localStorage.removeItem('email')

					// navegar al dashboard
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

	renderButton() {
		gapi.signin2.render('my-signin2', {
			scope: 'profile email',
			width: 240,
			height: 50,
			longtitle: true,
			theme: 'dark'
		})

		this.startApp()
	}

	async startApp() {
		await this.usuarioService.googleInit();
		this.auth2 = this.usuarioService.auth2;
		this.attachSignin(document.getElementById('my-signin2'))
	}

	attachSignin(element) {
		this.auth2.attachClickHandler(
			element,
			{},
			(googleUser) => {
				const id_token = googleUser.getAuthResponse().id_token
				this.usuarioService.loginGoogle(id_token).subscribe((resp) => {
					
					this.ngZone.run(() => {
						this.router.navigateByUrl('/')
					})
				}) 
					
			},
			(error) => {
				alert(JSON.stringify(error, undefined, 2))
			}
		)
	}
}
