import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
	
export class SettingsService {

	private linkTheme: any = document.querySelector("#theme");
	
	constructor() { 
	  
		console.log('Settings Service INIT');
		const theme = localStorage.getItem('theme') || "./assets/css/colors/default-dark.css";
		this.linkTheme.setAttribute('href', theme);    
	}

	changeTheme(theme:string) {
		// console.log(theme);
		console.log(this.linkTheme);

		const url = `./assets/css/colors/${theme}.css`;

		this.linkTheme.setAttribute('href', url);
		localStorage.setItem('theme', url);
		this.checkCurrentTheme();
	}

	checkCurrentTheme() {
		const links: NodeListOf<Element> = document.querySelectorAll('.selector');
		console.log(links); 
		links.forEach(element => {
		element.classList.remove('working');   
		const btnTheme = element.getAttribute('data-theme');
		const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
		const currentTheme = this.linkTheme.getAttribute('href');

		if(btnThemeUrl === currentTheme) element.classList.add('working');
		if(btnThemeUrl === currentTheme) element.classList.add('working');

	})
}
}
 