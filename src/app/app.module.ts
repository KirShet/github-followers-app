import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserInputComponent } from './user-input/user-input.component';
import { FollowersListComponent } from './followers-list/followers-list.component';

@NgModule({
  declarations: [
    AppComponent, 
    UserInputComponent, 
    FollowersListComponent 
  ],
  imports: [
    BrowserModule, 
    FormsModule, // с формы
    HttpClientModule //  HTTP-запросы
  ],
  providers: [],
  bootstrap: [AppComponent] //с корневым компонентом AppComponent
})
export class AppModule {}