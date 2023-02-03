import { AfterContentInit, Component, OnInit, Self, SkipSelf } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hinv-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers : [RoomsService]
})
export class EmployeeComponent implements OnInit{
  
  empName : string = 'Mega';
  /* 
     constructor(@Self() private roomsService : RoomsService){}
     @Self() decorator tells us that this service(RoomService) should be avalaible here in this particular level.
    Angular will not look up (for his parent)
  */

  constructor(@SkipSelf() private roomsService : RoomsService){ 

  }

  ngOnInit(): void {
    
  }

}
