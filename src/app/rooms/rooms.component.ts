import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit{
  
  hotelName : string = 'Gran Bilbao Hotel';

  numberOfRooms : number = 10;

  hideRooms : boolean = false;

  rooms : Room = {
    totalRooms : 20,
    availableRooms : 10,
    bookedRooms : 5 
  }

  roomList : RoomList[] = [
    {
      roomNumber : 211,
      roomType : 'Deluxe Room',
      amenities : 'Air conditioner, Free Wi-fi, TV, Bathroom, Kitchen',
      price : 1500,
      photos : 'https://unsplash.com/es/fotos/DGa0LQ0yDPc',
      checkinTime: new Date('31-Jan-2023'),
      checkoutTime : new Date('07-Feb-2023'),
      rating : 4.3
    },
    {
      roomNumber : 212,
      roomType : 'Standard Room',
      amenities : 'Air conditioner, Free Wi-fi, TV, Bathroom, Kitchen',
      price : 1000,
      photos : 'https://unsplash.com/es/fotos/DGa0LQ0yDPc',
      checkinTime: new Date('31-Jan-2023'),
      checkoutTime : new Date('07-Feb-2023'),
      rating : 7.5
    },
    {
      roomNumber : 213,
      roomType : 'Private Room',
      amenities : 'Air conditioner, Free Wi-fi, TV, Bathroom, Kitchen',
      price : 2500,
      photos : 'https://unsplash.com/es/fotos/DGa0LQ0yDPc',
      checkinTime: new Date('05-Feb-2023'),
      checkoutTime : new Date('15-Feb-2023'),
      rating : 7.8
    }
  ]
  
  
  constructor() {

  }

  ngOnInit(): void {
    
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
 
}
