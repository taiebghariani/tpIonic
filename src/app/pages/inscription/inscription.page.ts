import {
  Router
} from '@angular/router';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  AuthentificationService
} from 'src/app/services/authentification.service';
import {
  ToastController
} from '@ionic/angular';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  constructor(private router: Router, private authServ: AuthentificationService,
    private toastController: ToastController) {}

  ngOnInit() {}
  async onCreerUtilisateur(value: any) {
    if (!this.authServ.creerNouvelUtilisateur(value.id, value.pass)) {
      const toast = await this.toastController.create({
        color: 'dark',
        duration: 2000,
        message: 'Id ou mot de passe vides'
      });
      await toast.present();
    } else {
      this.router.navigateByUrl('/menu/home');
    }
  }

  onGoLogin() {
    this.router.navigateByUrl('/menu/home');
  };

}
