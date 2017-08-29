import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class ProductosService {
  productos:any[] = []
  cargando:boolean = true
  constructor(public http:Http) {
    this.cargar_productos()
   }


public cargar_productos(){
  this.http.get("https://webtemplate-ac160.firebaseio.com/productos_idx.json")
  .subscribe(data=>{
    console.log(data.json())
    this.cargando = false
    this.productos = data.json()
  })
}

}

