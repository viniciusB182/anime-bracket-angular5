import { Winners } from './../../consts/winners';
import { AnimeService } from './../../providers/anime-service';
import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'main-bracket',
  templateUrl: './main-bracket.component.html',
  styleUrls: ['./main-bracket.component.css']
})
export class MainBracketComponent implements OnInit {
  public animeList;
  public title = "Anime Bracket";
  public winner = { name: "", logo: "" };
  public winners1 = new Winners().winners;
  public winners2 = new Winners().winners;
  public winners3 = new Winners().winners;
  public winners4 = new Winners().winners;

  constructor(private animeService: AnimeService,
    private meta: Meta) {
    this.meta.addTag({ property: "og:title", content: this.title });
    this.meta.addTag({ property: "og:image", content: this.winner.logo });
  }

  ngOnInit() {
    this.animeService.get().subscribe((data) => {
      this.animeList = data.json();
      console.log(this.animeList);
    });
  }

  public setWinner(winner: any) {
    this.winner = winner;
    this.title = "My best anime of all time is... " + this.winner.name + "!";

    this.meta.updateTag({ property: "og:title", content: this.title });
    this.meta.updateTag({ property: "og:image", content: this.winner.logo });

    this.animeService.pushWinner(this.winner.name).subscribe((data) => {
      console.log(data);
    });
  }

  public setWinner1(winner: any, position: number) {
    this.winners1[position] = winner;
  }

  public setWinner2(winner: any, position: number) {
    this.winners2[position] = winner;
  }

  public setWinner3(winner: any, position: number) {
    this.winners3[position] = winner;
  }

  public setWinner4(winner: any, position: number) {
    this.winners4[position] = winner;
  }

}
