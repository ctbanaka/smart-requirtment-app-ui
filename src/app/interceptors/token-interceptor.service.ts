import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TokenInterceptorService {
  token: any
  constructor() { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    this.token = localStorage.getItem("bearer_token")
    request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + this.token) }); request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

    return next.handle(request).pipe(

      catchError((err) => {
        if (err.status === 401) {
        }

        const error = err.error.message || err.statusText;
        return throwError(error);

      })
    );
  }
}