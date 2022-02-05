import { Component, Input } from "@angular/core";

@Component ({
    selector: 'vans-newscards',
    templateUrl: 'newsCards.component.html',
    styleUrls: ['newsCards.component.css']
})
export class newsCardsComponent {
    @Input()
    img: string;
    title: string;
    description: string;

    constructor() {
        this.img = "";
        this.title = "";
        this.description = "";
    }
}