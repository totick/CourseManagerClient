import {Component} from "angular2/core";
import {HeaderComponent} from "./header.component"
import {TeachersComponent} from "./teachers.component"

@Component({
    selector: 'main-app',
    template: `
        <cm-header></cm-header>
        <teachers-view></teachers-view>
    `,
    directives: [HeaderComponent, TeachersComponent]
})

export class AppComponent{
    
}