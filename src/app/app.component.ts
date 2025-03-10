import { Component } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather';
  data;
  imgsrc;
  temp;
  weather;
  pretty;
  clouds;
  visibility;
  constructor(private test: TestService) {
    test.getData(data => {
      this.data = data;
      this.pretty = JSON.stringify(data, null, 2);
      this.imgsrc = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
      this.temp = data.main.temp;
      this.weather = data.weather[0].main;
      this.clouds = data.clouds.all;
      this.visibility = data.visibility;
    });
  }
}
