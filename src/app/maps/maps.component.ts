import {Component, OnInit} from "@angular/core";
import {} from '@agm/core'
import {position} from "../domain/position";

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  constructor() { }
  //Rider needs a ride or Driver needs a rider.
  searching: boolean = false;

  position: any;

  //Is the user a rider or driver?
  rider: boolean = false;

  labelOptions = {
    color: '#9f00cc',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '18px',
    fontWeight: 'bold',
    text: 'You Are Here',
  }

  x: any;

  //Rider and driver have been assigned and ride is in progress
  rideInProgress: boolean = false;

  lat: number = 51.678418;
  lng: number = 7.809007;

  riderLat: number = 51.688738;
  riderLong: number = 7.819637;

  markerOne: position = new position(51.658228, 7.869417);
  markerTwo: position = new position(51.668608, 7.849527);
  markerThree: position = new position(51.688738, 7.819637);

  test: any[] = [this.markerOne, this.markerTwo, this.markerThree];

  // public lat: Number = 24.799448
  // public lng: Number = 120.979021

  public origin: any
  public destination: any

  ngOnInit() {
    // navigator.geolocation.getCurrentPosition(
    //   position => {
    //     this.position = position;
    //     this.lat = this.position.coords.latitude;
    //     this.lng = this.position.coords.longitude;
    //   }
    // );

    this.getDirection();
  }

  getDirection() {
    this.origin = { lat: 24.799448, lng: 120.979021 }
    this.destination = { lat: 24.799524, lng: 120.975017 }

    // this.origin = 'Taipei Main Station'
    // this.destination = 'Taiwan Presidential Office'
  }
  findRiders() {
    //Set searching
    this.searching = true;

    // navigator.geolocation.getCurrentPosition(
    //   position => {
    //     this.position = position;
    //     this.lat = this.position.coords.latitude;
    //     this.lng = this.position.coords.longitude;
    //   }
    // );
  }

  riderSelected(lat: any, long: any){
    this.riderLat = lat;
    this.riderLong = long;

    this.searching = false;
    this.rideInProgress = true;
  }

  cancelFind() {
    this.searching = false;
  }
}
