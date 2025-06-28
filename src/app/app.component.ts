import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IonApp, IonRouterOutlet, IonToolbar, IonContent, IonItem, IonList, IonHeader, IonTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
   imports: [IonTitle, IonHeader, IonList, IonItem, IonContent, IonToolbar, IonApp, IonRouterOutlet,RouterLink,RouterOutlet],

})
export class AppComponent {
  constructor() {}
}
