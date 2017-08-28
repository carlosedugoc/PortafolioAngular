import { Component } from '@angular/core';
import { InformacionService } from './services/informacion.service'
import 'rxjs/Rx'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public informacionService:InformacionService){
    
  }
}
