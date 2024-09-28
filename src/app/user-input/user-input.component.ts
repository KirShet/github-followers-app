import { Component, EventEmitter, Output } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html'
})
export class UserInputComponent {
  userName: string = '';

  // Создаем событие для передачи списка фолловеров
  @Output() followersLoaded = new EventEmitter<any[]>();

  constructor(private githubService: GithubService) {}

  getFollowers() {
    console.log("Fetching followers for:", this.userName); // Проверка
    this.githubService.getFollowers(this.userName)
      .subscribe(followers => {
        console.log(followers); // Проверка, что данные получены
        this.followersLoaded.emit(followers);
      });
  }
}

