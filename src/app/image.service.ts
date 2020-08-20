import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  constructor(private http: HttpClient) { }
  getImage(image: string): Observable<Blob> {
    return this.http.get("http://openweathermap.org/img/wn/" + image + "@2x.png", { responseType: 'blob' });
  }
}
