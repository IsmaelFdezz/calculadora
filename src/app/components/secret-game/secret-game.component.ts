import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-secret-game',
  templateUrl: './secret-game.component.html',
  styleUrls: ['./secret-game.component.scss']
})
export class SecretGameComponent {

  jumping: boolean = false;

  @HostListener('document:keydown.space', ['$event'])
  handleSpaceKey(event: KeyboardEvent) {
    if (event.keyCode === 32) {
      this.jumping = true
      setTimeout(() => {
        this.jumping = false;
      }, 500)
    }
  }

}
