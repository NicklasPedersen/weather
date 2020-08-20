import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  url = 'https://icanhazdadjoke.com/';
  constructor(private http: HttpClient) { }
  data;
  getData(a) {
    a(this.exampleData);
    return;
    if (this.data) {
      a(this.data);
      return;
    }
    this.http.get(this.url, {headers: {'Accept': 'application/json'}}).subscribe(b => {
      this.data = b;
      a(b);
    });
  }
  exampleData = {"coord":{"lon":11.79,"lat":55.44},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"base":"stations","main":{"temp":21.29,"feels_like":21.59,"temp_min":19,"temp_max":22.22,"pressure":1010,"humidity":60},"visibility":10000,"wind":{"speed":1,"deg":0},"clouds":{"all":46},"dt":1597826127,"sys":{"type":1,"id":9710,"country":"DK","sunrise":1597809253,"sunset":1597862334},"timezone":7200,"id":2614764,"name":"Ringsted","cod":200};
  exampleData1 = {
    "coord": {
      "lon": -122.08,
      "lat": 37.39
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 282.55,
      "feels_like": 281.86,
      "temp_min": 280.37,
      "temp_max": 284.26,
      "pressure": 1023,
      "humidity": 100
    },
    "visibility": 16093,
    "wind": {
      "speed": 1.5,
      "deg": 350
    },
    "clouds": {
      "all": 1
    },
    "dt": 1560350645,
    "sys": {
      "type": 1,
      "id": 5122,
      "message": 0.0139,
      "country": "US",
      "sunrise": 1560343627,
      "sunset": 1560396563
    },
    "timezone": -25200,
    "id": 420006353,
    "name": "Mountain View",
    "cod": 200
  };
}
