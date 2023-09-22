import {Component} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    collapsed:boolean = true;
    constructor() {}

        // this is a lifecycle hook in Angular
        // This code will be executed when the component is initialized.
        // You can perform any initialization tasks here:
    ngOnInti() {}
}