import { Component, Input } from "@angular/core";

@Component ({
    selector: 'vans-shopby1',
    templateUrl: 'shopBy1.component.html',
    styleUrls: ['shopBy1.component.css']
})
export class shopBy1Component {
    @Input() img: string;
    @Input() title: string;
    @Input() link1: string;
    @Input() link2: string;
    @Input() link3: string;
    @Input() link4: string;
    @Input() link5: string;
    @Input() link6: string;

    constructor() {
        this.img = "";
        this.title = "";
        this.link1 = "";
        this.link2 = "";
        this.link3 = "";
        this.link4 = "";
        this.link5 = "";
        this.link6 = "";
    }
}