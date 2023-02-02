import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'hinv-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit, AfterContentInit {
  
  @ContentChild(EmployeeComponent) employe! : EmployeeComponent;

  constructor(){

  }

  ngAfterContentInit(): void {
    console.log(this.employe);
    this.employe.empName = 'Rick';
  }
  ngOnInit(): void {
    
  }

}
