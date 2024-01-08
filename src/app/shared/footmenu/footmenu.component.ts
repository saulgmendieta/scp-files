import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-footmenu',
  templateUrl: './footmenu.component.html',
  styleUrls: ['./footmenu.component.css']
})
export class FootmenuComponent implements OnInit{

  constructor(private sharedService: SharedService) {;
  }

  bottomMenuItems?: any[];

  ngOnInit(): void {

    setInterval(()=>{this.updateTime()},1000);
    this.updateTime();

  }

  updateTime(){
    var now = new Date();
    
    var yyyy = now.getFullYear();
    var ss_str = this.setTo2Digit(now.getSeconds());
    var MM_str = this.setTo2Digit(now.getMinutes());
    var hh_str = this.setTo2Digit(now.getHours());
    var dd_str = this.setTo2Digit(now.getDate());
    var mm_str = this.setTo2Digit(now.getMonth()+1);

    this.currentTime = `${dd_str}/${mm_str}/${yyyy} ${hh_str}:${MM_str}:${ss_str}`;
  }

  setTo2Digit(num: number){
    var num_str = '';

    if(num < 10){      
      num_str = '0' + num;
    }
    else{
      num_str = num.toString();
    }

    return num_str;
  }

  activeSection: string;
  currentTime: string = '';

}
