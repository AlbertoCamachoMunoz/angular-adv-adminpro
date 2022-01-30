import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterForm } from '../interfaces/register-form.interface';
import { environment } from '../../environments/environment';

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
}
