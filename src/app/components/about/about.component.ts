import { Component, OnInit } from '@angular/core';
import { InformacionService } from '../..//services/informacion.service'
import 'rxjs/Rx'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {

  constructor(private informacionService:InformacionService) {
    this.informacionService.carga_sobre_nosotros;
   }

  ngOnInit() {
  }

}
