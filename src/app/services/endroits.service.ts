import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Endroit } from '../model/endroit.model';

@Injectable({
  providedIn: 'root'
})
export class EndroitsService {
  private locations:Array<Endroit> = []
  constructor(private storage: Storage) {
    this.locations.push({title:"A"});
    this.locations.push({title:"B"});
    this.locations.push({title:"C"});
    this.storage.create();
    this.storage.set('locations', this.locations)
   }
   /**
    * getLocations
    */
   public getLocations() {
     return this.storage.get('location').then(data=>{
       this.locations = data!= null ? data:[];
       return this.locations.slice();
     });
   }
   /**
    * addLocations
    */
   public addLocations(endroit:Endroit) {
     this.locations.push(endroit);
     this.storage.set('locations', this.locations);
     
   }
   public updateLocations(locations) {
    this.storage.set('locations', locations);
    this.locations = locations;
    }
}
