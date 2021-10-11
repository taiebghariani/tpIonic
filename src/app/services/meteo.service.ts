import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {
  private  openWeatherID= '0fcd9d8c8fac5c0f07e2f887a7f1f65c';
  constructor(private httpClient: HttpClient) { }
  getMeteo1jour(ville: string) {
    console.log(this.openWeatherID);
    return this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${this.openWeatherID}`);
    };
  getMeteo5jours(ville: string) {
    return this.httpClient.get(`http://api.openweathermap.org/data/2.5/forecast?q=${ville}&appid=${this.openWeatherID}`);
    };

}
