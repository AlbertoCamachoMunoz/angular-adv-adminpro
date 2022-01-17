import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  linkTheme : any = document.querySelector("#theme");
  constructor() { }

  ngOnInit(): void {
  }

  changeTheme(theme: string) {
    // console.log(theme);
    console.log(this.linkTheme);

    let url = `./assets/css/colors/${theme}.css`;
    console.log(url);
    
    this.linkTheme.setAttribute('href', url);
    localStorage.setItem('theme', url);
    
  }

}
