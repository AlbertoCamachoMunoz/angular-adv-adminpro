import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const base_url = environment.base_url 

@Injectable({
	providedIn: 'root'
})
    
export class FileUploadService {

    constructor() { }



    async actializarFoto(
        archivo: File,
        tipo: 'usuarios' | 'medicos' | 'hospitales',
        id: string
    ): Promise<any> {
        try {
            const url = `${base_url}/uploads/${tipo}/${id}`

            const formData = new FormData();
            formData.append('imagen', archivo);

            console.log('uplading image')
            console.log(formData)
            

            const resp = await fetch(url, {
                method: 'PUT',
                headers: {
                    'x-token': localStorage.getItem('token') || ''
                },
                body: formData
            })

            const data = await resp.json();
            console.log(data);
            
            


        } catch (error) {
            return false;
        }
    }

}
