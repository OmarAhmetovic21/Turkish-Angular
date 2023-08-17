import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.scss']
})
export class FleetComponent implements OnInit {
  isDesktopDevice: any;

  constructor(private deviceService: DeviceDetectorService) { }

  ngOnInit(): void {
    var rellaxHeader = new Rellax('.rellax-header');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('index-page');
        this.isDesktopDevice = this.deviceService.isDesktop();
  }

  ngOnDestroy(){
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('index-page');
}

}
