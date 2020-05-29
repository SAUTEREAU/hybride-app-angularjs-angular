import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UpgradeModule} from "@angular/upgrade/static";
import { UserAndRoleComponent } from './user-and-role-component/user-and-role.component';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    UserAndRoleComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    UpgradeModule
  ],

  entryComponents: [
    UserAndRoleComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
