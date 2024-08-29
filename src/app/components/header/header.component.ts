import { Component, Input } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() public errorsCount: number;

  constructor(public readonly gameService: GameService) {}
}
