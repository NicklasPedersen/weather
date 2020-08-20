import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pie-bar',
  templateUrl: './pie-bar.component.html',
  styleUrls: ['./pie-bar.component.css'],
})
export class PieBarComponent implements OnInit {

  constructor() { }
  @Input() rotation;

  ngOnInit(): void {
  }
}
