import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import{NavbarComponent}from'./navbar/navbar.component';




@Component({
    selector: 'app-landingPage',
    standalone: true,
    imports: [CommonModule,NavbarComponent],
    styleUrls: ['./landingPageComponent.scss'],
    template: `<section>
        <div>
            <app-navbar></app-navbar>
        </div>
        <h1 class="fontRaleway">Sakura Ramen</h1>
        <h2 class="fontRaleway">BEST RAMEN IN TOWN</h2>
    </section>`,
})
export class LandingPageComponent {


}