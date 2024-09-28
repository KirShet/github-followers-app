import { Component } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html'
})
export class UserInputComponent {
  userName: string = '';

  constructor(private githubService: GithubService) {}

  getFollowers() {
    this.githubService.getFollowers(this.userName)
      .subscribe(followers => {
        console.log(followers);
      });
  }
}
