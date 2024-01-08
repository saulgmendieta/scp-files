import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  menu: any[] = [{
    title: "General View",
    url: "/home/",
    class: "section-menu",
    id: "general-section",
    imgsrc: "https://e7.pngegg.com/pngimages/1016/542/png-clipart-black-house-house-computer-icons-home-automation-kits-real-estate-home-icon-angle-building.png",
  }];
}
