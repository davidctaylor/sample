import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; 

import { catchError, of, Observable, Subject} from 'rxjs';
import { map } from 'rxjs/operators';

import { RandomUser } from '../../models/address-book';

const USER_URL = 'https://randomuser.me/api/?results=3';
@Component({
  selector: 'address-book-list',
  templateUrl: './address-book-list.component.html',
  styleUrls: ['./address-book-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressBookListComponent implements OnInit {

  public addressList: Observable<RandomUser[]> = null;
  public addressListError: Subject<string> = new Subject<string>();

  constructor(protected http: HttpClient,
              public router: Router) {}
  
  public ngOnInit(): void {
    this.addressList = this.http.get(USER_URL)
      .pipe(
        map((res: any) => res.results),
        catchError((e: any) => {
          this.addressListError.next(e);
          return of([]);
        })
      );
  }

  public handleClickAddress(addr: RandomUser): void {
    this.router.navigate(['/detail'], { 
      state: { address: addr }
    });
  }
}
