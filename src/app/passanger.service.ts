import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, switchMap } from 'rxjs';
import { Ipassengers } from './passengers';

@Injectable({
  providedIn: 'root'
})
export class PassangerService {
  url = 'https://api.instantwebtools.net/v1/passenger'
  constructor(private _http: HttpClient) { }

  currentPage$ = new BehaviorSubject<number>(1)

  currentPagedata$ = this.currentPage$.pipe(
    switchMap((currentpage: number) => {
      return this.getPAssengerData(currentpage)
    }),
    map((res: any) => {
      return res
    })
  )
  getPAssengerData(page: number): Observable<Ipassengers[]> {
    return this._http.get<Ipassengers[]>(`${this.url}?page=${page}&size=10`)
  }

  getNext() {
    this.currentPage$.next(this.currentPage$.value + 1)
  }

  getPrev() {
    this.currentPage$.next(this.currentPage$.value - 1)
  }

}


