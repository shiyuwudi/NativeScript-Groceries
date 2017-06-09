import { Component, Input } from "@angular/core";

@Component({
    selector: "list",
    templateUrl: "pages/list/list.html",
    styleUrls: ["pages/list/list.css", "pages/list/list-common.css"],
})
export class ListComponent {
    @Input() private idx;
}
