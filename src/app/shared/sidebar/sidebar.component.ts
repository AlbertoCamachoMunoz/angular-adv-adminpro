import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { UsuarioService } from '../../services/usuario.service'
import { Usuario } from '../../models/usuario.model';


@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styles: []
})
export class SidebarComponent implements OnInit {
	public menuItems: any[] | undefined
	public menuPerfil: any[] | undefined
  	public usuario?: Usuario;

	constructor(private sidebarService: SidebarService, private usuarioService: UsuarioService) {
		this.menuItems = sidebarService.menu;
		this.menuPerfil = sidebarService.menu_profile
		this.usuario = this.usuarioService.usuario;
	}

	ngOnInit(): void {}
}
