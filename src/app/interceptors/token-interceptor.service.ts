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

    this.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiJjaG93ZGFtLXZpamF5YS5rdW1hckBjYXBnZW1pbmkuY29tIiwiaWF0IjoxNjc0NzkxODQ5LCJleHAiOjE2NzQ4MjQyNDl9.qbSYEUEtq6tH9p3nwGSd6_1XSlSKSJDvFzz-fOVfe48"

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