import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-secret-game',
  templateUrl: './secret-game.component.html',
  styleUrls: ['./secret-game.component.scss']
})
export class SecretGameComponent implements OnInit {

  jumping: boolean = false;

  @Input() game: boolean;
  @Output() gameLost = new EventEmitter<boolean>();

  @HostListener('document:keydown.space', ['$event'])
  handleSpaceKey(event: KeyboardEvent) {
    if (event.keyCode === 32) {
      this.jumping = true
      setTimeout(() => {
        this.jumping = false;
      }, 500)
    }
  }

  ngOnInit(): void {
    this.startGame();
  }

  startGame() {
    requestAnimationFrame(this.updateGame.bind(this));
  }

  loseGame() {
    alert('Perdiste!!')

    this.gameLost.emit(true);
  }

  updateGame() {
    const character = document.getElementById('character');
    const block = document.getElementById('block');

    const characterX = character.offsetLeft;
    const characterY = character.offsetTop;
    const blockX = block.offsetLeft;
    const blockY = block.offsetTop;

    const characterWidth = character.clientWidth;
    const characterHeight = character.clientHeight;
    const blockWidth = block.clientWidth;
    const blockHeight = block.clientHeight;

    if (
      characterX < blockX + blockWidth &&
      characterX + characterWidth > blockX &&
      characterY < blockY + blockHeight &&
      characterY + characterHeight > blockY
    ) {
      this.loseGame()
    }

    requestAnimationFrame(this.updateGame.bind(this));
  }

}
