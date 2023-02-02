import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  ngOnInit(): void {
    this.name.nativeElement.innerText = "Hilton hotels";
  }
 
  title = 'hotelinventoryapp';
  //role = 'Admin'
  /* 
  ngAfterViewInit(): void {
    const componentRef = this.vcr.createComponent(RoomsComponent);
    componentRef.instance.numberOfRooms = 50;
  }

  @ViewChild('user', {read : ViewContainerRef}) vcr! : ViewContainerRef; */

  @ViewChild('name', {static : true}) name! : ElementRef;

}
