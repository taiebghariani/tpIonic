import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EndroitDetailsPageRoutingModule } from './endroit-details-routing.module';

import { EndroitDetailsPage } from './endroit-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EndroitDetailsPageRoutingModule
  ],
  declarations: [EndroitDetailsPage]
})
export class EndroitDetailsPageModule {}
