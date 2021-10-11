import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private authServ: AuthentificationService) {};
  deconnecter() {
    this.authServ.deconnecter();
    this.router.navigateByUrl('/authentification');
  }


}
