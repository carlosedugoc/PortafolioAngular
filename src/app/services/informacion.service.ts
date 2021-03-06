import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/Rx'

@Injectable()
export class InformacionService {
  info:any = {}
  equipo:any[] = []
  cargada:boolean = false
  cargada_about:boolean = false
  constructor(public http:Http) { 
    this.carga_info();
    this.carga_sobre_nosotros();
  }



  public carga_info(){
    
    this.http.get("assets/data/info.pagina.json")
    .subscribe( data =>{
      this.cargada=true;
      this.info = data.json();
    }
    )
  }

  // public carga_sobre_nosotros(){
  //   this.http.get("https://webtemplate-ac160.firebaseio.com/equipo.json")
  //   .subscribe( data =>{
  //     console.log(data.json());
  //     this.cargada_about=true;
  //     this.equipo = data.json();
  //   }
  //   )
  // }

  public carga_sobre_nosotros(){
    return this.http.get("https://webtemplate-ac160.firebaseio.com/equipo.json").map(
data =>{
      this.cargada_about=true;
      this.equipo = data.json();
    }
    )
  }

}  

