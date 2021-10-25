import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalerieService {
  private apiKey:string = "24027022-78addcfc69cf830677eb2683b";

  constructor(private httpClient:HttpClient) { }

  getImages(motCle:string, pageActuelle:number, imagesPerPages:number){
    
    return this.httpClient.get(`https://pixabay.com/api/?key=${this.apiKey}&q=${motCle}&per_page=${imagesPerPages}&page=${pageActuelle}`);
  }
}
