import { AfterViewInit, Component, ElementRef, Inject, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { LoggerService } from './logger.service';
import { RoomsComponent } from './rooms/rooms.component';
import {LocalStorageToken} from './localstorage.token';
@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  constructor(@Optional() private loggerService : LoggerService, @Inject(LocalStorageToken) private localStorage : Storage){

  }

  ngOnInit(): void {
    this.loggerService?.log('AppComponent.ngOnInit()');
    this.name.nativeElement.innerText = "Hilton Hotel";
    this.name.nativeElement.innerText = "Hilton hotels";
    this.localStorage.setItem('name', 'Hilton Hotel');
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
