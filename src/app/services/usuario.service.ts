import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { RegisterForm } from '../interfaces/register-form.interface';
import { LoginForm } from '../interfaces/login-form.interface';

const base_url = environment.base_url; 

@Injectable({
	providedIn: 'root'
})
export class UsuarioService {
	constructor(private http: HttpClient) {}

	crearUsuario(formData: RegisterForm) {
		console.log('creando Usuario')
		console.log(formData)

		return this.http.post(`${base_url}/usuarios`, formData).pipe(
			tap((resp: any) => {
				console.log(resp)
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

		return this.http.post(`${base_url}/login/google`, {token}).pipe(
			tap((resp: any) => {
				console.log(resp)
				localStorage.setItem('token', resp.token)
			})
		)
	}
}
