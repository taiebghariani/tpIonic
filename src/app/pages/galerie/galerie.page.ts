import { Component, OnInit } from '@angular/core';
import { GalerieService } from 'src/app/services/galerie.service';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.page.html',
  styleUrls: ['./galerie.page.scss'],
})
export class GaleriePage implements OnInit {
  public motCle: string;
  public pageActuelle: number = 1;
  public imagesPerPage: number = 10;
  public totalPages: number;
  private dataImages: any = [];

  constructor(private galServ: GalerieService) { }

  ngOnInit() {
  }
  resetImages() {
    this.dataImages = [];
  }
  chargerImages() {
    this.resetImages();
    this.chargerImagesSuivantes();

  }
  chargerImagesSuivantes() {
    this.galServ.getImages(this.motCle, this.pageActuelle, this.imagesPerPage)
      .subscribe(data => {
        console.log(data);
        console.log(this.motCle);
        data["hits"].forEach(image => {
          this.dataImages.push(image)
        });
        this.totalPages = data["totalHits"] / this.imagesPerPage;
      }, error => {
        console.log(error);
      }
      );
  }
  pageSuivante(event){
    if(this.pageActuelle < this.totalPages){
      this.pageActuelle ++;
      this.chargerImagesSuivantes();
      event.target.complete();
    }else{
      event.target.disabled = true;
    }
  }

}
