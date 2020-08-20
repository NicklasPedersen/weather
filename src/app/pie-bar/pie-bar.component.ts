import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate, stagger } from '@angular/animations';

@Component({
  selector: 'app-pie-bar',
  templateUrl: './pie-bar.component.html',
  styleUrls: ['./pie-bar.component.css'],
})
export class PieBarComponent implements OnInit {

  constructor() { }
  @Input() rotation;
  @Input() text;
  @Input() color;

  ngOnInit(): void {
  }
}
