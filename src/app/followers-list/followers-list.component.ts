import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-followers-list',
  templateUrl: './followers-list.component.html'
})
export class FollowersListComponent {
  @Input() followers: any[] = [];

  ngOnChanges() {
    console.log("Followers updated:", this.followers); // Проверка
  }
}