import { Component } from '@angular/core';
import { ActivatedRoute }  from '@angular/router'
import { ProductosService } from "../../services/productos.service";

@Component({
  selector: 'app-portafolio-item',
  templateUrl: './portafolio-item.component.html'
})
export class PortafolioItemComponent {
  producto:any=undefined
  cod:string=undefined
  constructor(private route:ActivatedRoute,
      private productosService:ProductosService) { 
    route.params.subscribe(parametros=>{
      this.cod = parametros['id']
      productosService.cargar_producto(parametros['id']).subscribe(res=>{
        this.producto = res.json();
      })
    })
  }


}
