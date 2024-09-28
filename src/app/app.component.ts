import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  followers: any[] = [];

  onFollowersLoaded(followers: any[]) {
    this.followers = followers;
  }
}