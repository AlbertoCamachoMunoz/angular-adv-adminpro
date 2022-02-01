import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

		return this.http.post(`${base_url}/usuarios`, formData)
	}

	loginUsuario(formData: LoginForm) {
		console.log('login Usuario')
		console.log(formData)

		return this.http.post(`${base_url}/login`, formData)
	}
}
