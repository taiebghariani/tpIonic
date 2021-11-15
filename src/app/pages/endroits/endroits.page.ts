import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Endroit } from 'src/app/model/endroit.model';
import { EndroitsService } from 'src/app/services/endroits.service';

@Component({
  selector: 'app-endroits',
  templateUrl: './endroits.page.html',
  styleUrls: ['./endroits.page.scss'],
})
export class EndroitsPage implements OnInit {
  public locations: Array<Endroit>;

  constructor(private locationService: EndroitsService, private router: Router, private alertCtrlr: AlertController) { }


  ngOnInit() {
  }
  ionViewWillEnter() {
    this.onGetLocations();
  }
  onNewLocation() { this.router.navigateByUrl('/endroit-nouveau') };
  private onGetLocations() {
    this.locationService.getLocations().then(data => {
      this.locations = data;
    });
  }
  async onRemove(p: Endroit) {
    const alert = await this.alertCtrlr.create({
      header: 'Suppression',
      message: 'Etes vous sure de vouloir supprimer?',
      subHeader: 'Confirmation',
      buttons: [
        {
          text: 'OUI',
          handler: () => {
            this.removeLocation(p);
          }
        },
        {
          text: 'NON',
          handler: () => { }
        }
      ]
    });
    await alert.present();
  }
  private removeLocation(p: Endroit) {
    const index = this.locations.indexOf(p);
    this.locations.splice(index, 1);
    this.locationService.updateLocations(this.locations);
   }
   

}
