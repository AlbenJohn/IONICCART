import { Component } from '@angular/core';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public avatars:any =[{name:"A",image:'',index:""},
  {name:"",image:'',index:""},{name:"",image:'',index:""},{name:"",image:'',index:""},
  {name:"A",image:'',index:""},
  {name:"",image:'',index:""},{name:"",image:'',index:""},{name:"",image:'',index:""}];
  options: GeolocationOptions;
    currentPos: Geoposition;
    slideOptsOne = {
      initialSlide: 0,
      slidesPerView: 1,
      autoplay:true
     }
  constructor(private geolocation: Geolocation) {
    this.getUserPosition();
  }


  getUserPosition() {
    this.options = {
        enableHighAccuracy: true,
    };

    this.geolocation.getCurrentPosition(this.options).then((pos: Geoposition) => {
        this.currentPos = pos;
        console.log(pos);
     
    }, (err: PositionError) => {

        console.log("error : " + err.message);
    });
}

}
