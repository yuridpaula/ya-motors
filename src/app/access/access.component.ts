import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent implements OnInit {
  
  isDisabled: boolean = false;
  clickCounter: number = 0;
  toggleDisable: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
