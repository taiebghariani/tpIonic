import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Endroit } from 'src/app/model/endroit.model';
import { EndroitsService } from 'src/app/services/endroits.service';

@Component({
  selector: 'app-endroit-nouveau',
  templateUrl: './endroit-nouveau.page.html',
  styleUrls: ['./endroit-nouveau.page.scss'],
})
export class EndroitNouveauPage implements OnInit {
  cliqueFait = false;
  constructor(private geolocation: Geolocation, private locService: EndroitsService,
    private router: Router) { }

  ngOnInit() {
  }
  onAddLocation(value: Endroit) {
    this.cliqueFait = true;
    value.timestamp = new Date().getTime();
    value.photos = [];
    // Utilisation d'une promesse
    this.geolocation.getCurrentPosition({ timeout: 10000 }).then((resp) => {
      value.coordinates = {
        longitude: resp.coords.longitude,
        latitude: resp.coords.latitude
      }
      // console.log(data);
      this.locService.addLocations(value);
      this.router.navigate(['/menu/endroits']);
    }, (error) => {
      console.log(error);
      this.locService.addLocations(value);
      this.router.navigate(['/menu/endroits']);
    });
  }

}

