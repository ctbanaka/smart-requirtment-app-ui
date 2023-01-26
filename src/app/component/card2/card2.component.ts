import { Component } from '@angular/core';
import { OfferService } from 'src/app/shared/services/offer.service';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component {
  joiningBonusData: any;

  constructor(private offerService: OfferService) {}
  async ngOnInit() {
    this.joiningBonusData = await this.offerService.getBonusApproval();
  }
}
