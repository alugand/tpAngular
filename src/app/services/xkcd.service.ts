import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Planche } from '../models/planche';

@Injectable({
  providedIn: 'root'
})
export class XkcdService {
  planches: Map<number, Planche> = new Map<number,
    Planche>()
  constructor(private http: HttpClient) { }

  getPlancheNumero(numero: number): Observable<Planche> {
    const url = `/api/${numero}/info.0.json` // cette ligne est l'équivalent de '/api/'+numero+'/info.o.json' c'est juste un autre syntaxe
    if (this.planches.has(numero)) {
      return of(this.planches.get(numero)!) // on ajoute ! psk le compilateur est bete est il pense que le retour du get à un risque d'etre undefined
    }
    else {
      const obs = this.http.get(url).pipe(map(
        (planche: any) => {
          const p: Planche = new Planche(planche.num, planche.img, new Date(planche.day, planche.month, planche.year), planche.title)
          this.planches.set(p.numero,p)
          return p
         }))
      return obs
    }

  }
}
