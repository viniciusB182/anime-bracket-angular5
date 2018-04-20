import { Http } from '@angular/http';
import { Injectable } from "@angular/core";
import { Headers } from "@angular/http/src/headers";

@Injectable()
export class AnimeService {
    public animeList;

    constructor(private http: Http) {
    }

    public get() {
        return this.http.get('https://us-central1-animebracke.cloudfunctions.net/getAllAnime');
    }

    public pushWinner(winnerName: string) {
        return this.http.get('https://us-central1-animebracke.cloudfunctions.net/pushWinner?text=' + winnerName);
    }
}