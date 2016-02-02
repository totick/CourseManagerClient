import {Component} from "angular2/core";

@Component({
    selector: 'cm-header',
    template: `
        <div class="row">
            <header>
                <div class="headerGroup">
                    <div class="row">
                        <div class="col-lg-6">
                            <a href="http://www.lexicon.se/"><img src="../resources/img/logo-lexicon.gif" alt="Lexicon Logo"></a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    `
})
export class HeaderComponent{
    
}