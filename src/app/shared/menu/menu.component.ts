import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  menuList: any[] = [
    {
      name: 'Home',
      path: 'home',
      icon: 'home-outline'
    },
    {
      name: 'Astronomy',
      path: 'astronomy',
      icon: 'planet-outline'
    }
  ]

}
