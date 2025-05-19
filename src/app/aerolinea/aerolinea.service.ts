import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

import { Observable } from 'rxjs';
import { Aerolinea } from './aerolinea';

@Injectable({
  providedIn: 'root'
})

export class AerolineaService {

  private url: string = "https://raw.githubusercontent.com/NoNameLab/ISIS2603_Parcial2_S6_202510/refs/heads/main/flights.json"



constructor(private http: HttpClient) { }

getAerolineas(): Observable<Aerolinea[]>{
  return this.http.get<Aerolinea[]>(this.url);
}

getAerolinea(id: string): Observable<Aerolinea>{
  return this.http.get<Aerolinea>(environment.baseUrl + id + ".json");
}

}
