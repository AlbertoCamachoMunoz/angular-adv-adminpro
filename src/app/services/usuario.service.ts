import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators'
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';

import { RegisterForm } from '../interfaces/register-form.interface';
import { LoginForm } from '../interfaces/login-form.interface';
import { Observable, of } from 'rxjs';

import { Usuario } from '../models/usuario.model';

const base_url = environment.base_url; 
declare const gapi: any

@Injectable({
	providedIn: 'root'
})
export class UsuarioService {
	public auth2: any;
	public usuario: Usuario | undefined;

	constructor(private http: HttpClient, private router: Router, private ngZone: NgZone) {
		this.googleInit()
	}

	googleInit() {

		return new Promise<void>( ( resolve ) => {
			gapi.load('auth2', () => {
				// Retrieve the singleton for the GoogleAuth library and set up the client.
				this.auth2 = gapi.auth2.init({
					client_id:
						'281197617357-0cngl2agoo9d5997pjl4j26i6btldk5b.apps.googleusercontent.com',
					cookiepolicy: 'single_host_origin'
				});
				resolve();
			})
		});


	}

	logOut() {
		localStorage.removeItem('token')
		this.auth2.signOut().then(() => {
			this.ngZone.run(() => {
				this.router.navigateByUrl('/login')
			})
		})
	}

	validarToken(): Observable<boolean> {
		const token = localStorage.getItem('token') || ''

		return this.http
			.get(`${base_url}/login/renew`, {
				headers: {
					'x-token': token
				}
			})
			.pipe(
				tap((resp: any) => {
					console.log(resp.usuarioDb)
					const { nombre, email, img, google, rol } = resp.usuarioDb.object

					localStorage.setItem('token', resp.token)
					
					this.usuario = new Usuario(
						nombre,
						email,
						'',
						img,
						google,
						rol,
						resp.usuarioDb._id
					)
					console.log(this.usuario)
				}),
				map((resp) => true),
				catchError((error) => of(false))
			)
	}

	crearUsuario(formData: RegisterForm) {
		console.log('creando Usuario')
		console.log(formData)

		return this.http.post(`${base_url}/usuarios`, formData).pipe(
			tap((resp: any) => {
				localStorage.setItem('token', resp.token)
			})
		)
	}

	loginUsuario(formData: LoginForm) {
		console.log('login Usuario')
		console.log(formData)

		return this.http.post(`${base_url}/login`, formData).pipe(
			tap((resp: any) => {
				console.log(resp)
				localStorage.setItem('token', resp.token)
			})
		)
	}

	loginGoogle(token) {
		return this.http.post(`${base_url}/login/google`, { token }).pipe(
			tap((resp: any) => {
				console.log(resp)
				localStorage.setItem('token', resp.token)
			})
		)
	}
}
