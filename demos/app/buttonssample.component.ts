import { Component } from "@angular/core";
import { ButtonModule } from "../../src/button/button";

@Component({
    selector: "button-sample",
    template: `
        <h3>Buttons</h3>
        <div style="width: 120px; margin: 10px">
            <span igButton="flat" igRipple>Flat</span>
        </div>
        <br>
        <div style="width: 120px; margin: 10px">
            <span igButton="raised" igRipple>Raised</span>  
        </div>
        <br>
        <div style="width: 120px; margin: 10px">
            <span igButton="gradient" igRipple>Gradient</span>
        </div>
        <br>
        <div style="width: 120px; margin: 10px">
            <span igButton="raised" disabled>Disabled</span>
        </div>
        <br>
        <div style="margin: 10px; margin: 10px">
            <span igButton="fab" igRipple="black">
                <i class="material-icons">alarm_add</i>
            </span>
        </div>
        <div style="display: flex; flex-wrap: row; padding: 10px 0">
            <span igButton="icon" igRipple igRippleCentered="true">
                <i class="material-icons">search</i>
            </span>
            <span igButton="icon" igRipple="#E41C77" igRippleCentered="true">
                <i class="material-icons">favorite</i>
            </span>
            <span igButton="icon" igRipple igRippleCentered="true">
                <i class="material-icons">more_vert</i>
            </span>
        </div>
    `
})

export class ButtonsSampleComponent { }