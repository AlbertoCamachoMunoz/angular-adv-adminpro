import { Component, OnInit } from '@angular/core';
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
	public auth2: any;

	public loginForm = this.fb.group({
		email: [localStorage.getItem('email') || '', [Validators.required, Validators.email]],
		password: ['', [Validators.required]],
		remember: [localStorage.getItem('remember') || false]
	})

	constructor(
		private router: Router,
		private fb: FormBuilder,
		private usuarioService: UsuarioService
	) {}

	ngOnInit(): void {
		this.renderButton()
	}

	login() {
		const formLogin = this.loginForm
		// this.router.navigateByUrl('/')
		if (!this.loginForm.valid) return
		else
			this.usuarioService.loginUsuario(this.loginForm.value).subscribe({
				next(resp){
					if (formLogin.get('remember')?.value)
						localStorage.setItem('email', formLogin.get('email')?.value),
							localStorage.setItem('remember', formLogin.get('remember')?.value)
					else localStorage.removeItem('email')
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

		this.startApp();
	}

	startApp() {
		let auth2_ = this.auth2;
		gapi.load('auth2', () => {
			// Retrieve the singleton for the GoogleAuth library and set up the client.
			this.auth2 = gapi.auth2.init({
				client_id:
					'281197617357-0cngl2agoo9d5997pjl4j26i6btldk5b.apps.googleusercontent.com',
				cookiepolicy: 'single_host_origin'
			})
			console.log('start google');
			
			this.attachSignin(document.getElementById('my-signin2'))
		})
	}

	attachSignin(element) {
		this.auth2.attachClickHandler(element, {},
			(googleUser) => {
				const id_token = googleUser.getAuthResponse().id_token
				console.log('dentro google function');
				console.log(id_token);
				this.usuarioService.loginGoogle(id_token).subscribe()
				// TODO MOVER AL DASHBOARD
				
			}, (error)=> {
				alert(JSON.stringify(error, undefined, 2));
			}
		);
  }
}
