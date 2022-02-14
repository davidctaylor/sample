import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddressBookListComponent } from './address-book-list/address-book-list.component';
import { AddressBookDetailComponent } from './address-book-detail/address-book-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/list', pathMatch: 'full'},

  {path: 'list', component: AddressBookListComponent},
  {path: 'detail', component: AddressBookDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
