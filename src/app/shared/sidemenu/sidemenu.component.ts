import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent {
  
  constructor(private sharedService: SharedService) {
    this.menuItems = this.sharedService.menu;
  }

  menuItems?: any[];
}
