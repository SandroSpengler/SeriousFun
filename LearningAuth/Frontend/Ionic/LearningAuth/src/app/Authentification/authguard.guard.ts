import { Injectable } from "@angular/core";

import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthguardGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate = (): boolean => {
    if (this.checkforLogin()) {
      return true;
    } else {
      this.router.navigate(["/home"]);
    }
  };

  checkforLogin = (): boolean => {
    if (sessionStorage.getItem("token")) {
      return true;
    } else {
      return false;
    }
  };
}
