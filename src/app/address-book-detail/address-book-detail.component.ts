import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RandomUser } from '../../models/address-book';

@Component({
  selector: 'address-book-detail',
  templateUrl: './address-book-detail.component.html',
  styleUrls: ['./address-book-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressBookDetailComponent {

  public adressEntry: RandomUser = null

  constructor(private router: Router, private route: ActivatedRoute) {
    const state = this.router.getCurrentNavigation().extras.state;
    this.adressEntry = state ? state['address'] as RandomUser : null;
  }
}
