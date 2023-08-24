import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-basicelements',
  templateUrl: './basicelements.component.html',
  styleUrls: ['./basicelements.component.scss']
})
export class BasicelementsComponent implements OnInit {
    simpleSlider = 40;
    isDesktopDevice: any;
    doubleSlider = [20, 60];
    state = true;
    view = [];
    saleData = [
      { name: "2018", value: 75200000 },
      { name: "2019", value: 74300000 },
      { name: "2020", value: 28000000 },
      { name: "2021", value: 44800000 },
      { name: "2022", value: 71820000 }
    ];

    flightData = [
      { name: "2018", value: 460000},
      { name: "2019", value: 480000},
      { name: "2020", value: 250000},
      { name: "2021", value: 350000},
      { name: "2022", value: 400000}
    ];

    tagItems = ['Minimal', 'Light', 'New', 'Friends'];

    dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};

    dropdownList1 = [];
    selectedItems1 = [];
    dropdownSettings1 = {};

    focus;
    focus1;

    constructor(private deviceService: DeviceDetectorService) { }

    ngOnInit() {
        this.isDesktopDevice = this.deviceService.isDesktop();
        this.dropdownList = [
                              {"id":1,"itemName":"Roman"},
                              {"id":2,"itemName":"Paris"},
                              {"id":3,"itemName":"Bucharest"},
                              {"id":4,"itemName":"Rome"},
                              {"id":5,"itemName":"New York"},
                              {"id":6,"itemName":"Miami"},
                              {"id":7,"itemName":"Piatra Neamt"},
                              {"id":8,"itemName":"Paris"},
                              {"id":9,"itemName":"Bucharest"},
                              {"id":10,"itemName":"Rome"},
                              {"id":11,"itemName":"New York"},
                              {"id":12,"itemName":"Miami"},
                              {"id":13,"itemName":"Piatra Neamt"}
                            ];
        this.selectedItems = [
                            ];
        this.dropdownSettings = {
                                  singleSelection: false,
                                  text:"Multiple Select",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:""
                                };

        this.dropdownList1 = [
                              {"id":1,"itemName":"Roman"},
                              {"id":2,"itemName":"Paris"},
                              {"id":3,"itemName":"Bucharest"},
                              {"id":4,"itemName":"Rome"},
                              {"id":5,"itemName":"New York"},
                              {"id":6,"itemName":"Miami"},
                              {"id":7,"itemName":"Piatra Neamt"},
                              {"id":8,"itemName":"Paris"},
                              {"id":9,"itemName":"Bucharest"},
                              {"id":10,"itemName":"Rome"},
                              {"id":11,"itemName":"New York"},
                              {"id":12,"itemName":"Miami"},
                              {"id":13,"itemName":"Piatra Neamt"}
                            ];
        this.selectedItems1 = [
                            ];
        this.dropdownSettings1 = {
                                  singleSelection: true,
                                  text:"Single Select",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:""
                                };
    }
    onItemSelect(item:any){
        console.log(item);
        console.log(this.selectedItems);
    }
    OnItemDeSelect(item:any){
        console.log(item);
        console.log(this.selectedItems);
    }
    onSelectAll(items: any){
        console.log(items);
    }
    onDeSelectAll(items: any){
        console.log(items);
    }
}
