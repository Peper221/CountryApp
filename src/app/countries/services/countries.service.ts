import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of} from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {
  private apiUrl:string = 'https://restcountries.com/v3.1';


  constructor(private http: HttpClient) { }

  searchCountryByAlphaCode (code:string):Observable<Country | null> {
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${ code }`)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        //para en caso de tener error regresar un arreglo vacío
         catchError(() => of(null) )
      );
  }

  searchCapital(term:string):Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/capital/${ term }`)
      .pipe(
        //para en caso de tener error regresar un arreglo vacío
         catchError(() => of([]) )
      );
  }

  searchCountry(term:string ): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/name/${ term }`)
      .pipe(
        //para en caso de tener error regresar un arreglo vacío
         catchError(() => of([]) )
      );
  }

  searchRegion(term:string ): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/region/${ term }`)
      .pipe(
        //para en caso de tener error regresar un arreglo vacío
         catchError(() => of([]) )
      );
  }
}
