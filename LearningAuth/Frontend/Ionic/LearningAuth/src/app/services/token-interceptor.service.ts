import { Injectable } from "@angular/core";
import { HttpInterceptor } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class TokenInterceptorService {
  constructor() {}

  intercept = (req, next): any => {
    const requestedTokenAdd = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.getToken()}`,
      },
    });
    return next.handle(requestedTokenAdd);
  };

  getToken = (): string => {
    return sessionStorage.getItem("token");
  };
}
