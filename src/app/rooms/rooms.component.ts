import { AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './rooms';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, AfterViewInit{
  
  hotelName : string = 'Hotel';

  numberOfRooms : number = 10;

  hideRooms : boolean = false;

  selectedRoom? : RoomList;

  rooms : Room = {
    totalRooms : 20,
    availableRooms : 10,
    bookedRooms : 5 
  }
  title : string = 'Room List'; 

  @ViewChild(HeaderComponent) headerComponent! : HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent! : QueryList<HeaderComponent>;


  constructor(private roomsService : RoomsService) {
    this.roomList = this.roomsService.getRooms();
  }
  
  ngAfterViewInit(): void {
    this.headerComponent.title = "Rooms View";
    this.headerChildrenComponent.last.title = "Last Title";
  }

  roomList : RoomList[] = [];
  ngOnInit(): void {
    //console.log(this.headerComponent);
  
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "New Room Title";
  }
  selectRoom(room : RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room : RoomList = {
      roomNumber : 214,
        roomType : 'Deluxe Room',
        amenities : 'Air conditioner, Free Wi-fi, TV, Bathroom, Kitchen',
        price : 1500,
        photos : 'https://unsplash.com/es/fotos/DGa0LQ0yDPc',
        checkinTime: new Date('31-Jan-2023'),
        checkoutTime : new Date('07-Feb-2023'),
        rating : 5.3
    }
    //this.roomList.push(room);
    this.roomList = [...this.roomList, room]; //Keep the previous data and add a new one
  }


}
