import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsTableComponent } from './contacts-table/contacts-table.component';
import { AccountsTableComponent } from './accounts-table/accounts-table.component';
import { InsertContactFormComponent } from './insert-contact-form/insert-contact-form.component';
import { InsertAccountFormComponent } from './insert-account-form/insert-account-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsTableComponent,
    AccountsTableComponent,
    InsertContactFormComponent,
    InsertAccountFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
