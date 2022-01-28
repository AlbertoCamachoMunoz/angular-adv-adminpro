import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent {
	public formSubmitted = false

	public registerForm = this.fb.group({
		nombre: ['Alberto', [Validators.required]],
		email: ['test_@gmail.com', [Validators.required, Validators.email]],
		password: ['', [Validators.required]],
		password2: ['', [Validators.required]],
		terminos: [false, [Validators.required]]
	})

	constructor(private fb: FormBuilder) {}

	crearUsuario() {
		this.formSubmitted = true

        console.log(this.registerForm.value)
        if (this.registerForm.valid) console.log('posteando formulario');
        else console.log('Formulario no válido');
        
        
	}

    aceptaTerminos(campo: string): boolean {
        return !this.registerForm.get(campo)?.value && this.formSubmitted;
    }

    campoNoValido(campo: string): boolean {
        
        if (this.registerForm.get(campo)?.invalid && this.formSubmitted) return true;
        else return false;
		
	}
}
