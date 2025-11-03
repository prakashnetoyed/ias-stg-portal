import './polyfills.server.mjs';
import {
  Router
} from "./chunk-UI6ESX43.mjs";
import {
  environment
} from "./chunk-SJMEGSB4.mjs";
import {
  HttpClient,
  HttpHeaders
} from "./chunk-DO7CA2WQ.mjs";
import {
  BehaviorSubject,
  catchError,
  map,
  of,
  throwError,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-IXD3JOLX.mjs";

// src/app/services/user.service.ts
var UserService = class _UserService {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.apiUrl = `${environment.apiUrl}/accounts/whoami`;
    this.userSubject = new BehaviorSubject(null);
    this.user$ = this.userSubject.asObservable();
    this.autoFetchUser();
  }
  getUser() {
    const token = localStorage.getItem("authToken");
    if (!token) {
      return of(null);
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.get(this.apiUrl, { headers }).pipe(map((response) => {
      let parsed;
      if (typeof response.data === "string") {
        parsed = JSON.parse(response.data);
      } else {
        parsed = response.data;
      }
      this.userSubject.next(parsed);
      return parsed;
    }), catchError((err) => {
      this.logout("Your session has expired. Please login again.");
      return throwError(() => err);
    }));
  }
  refreshUser() {
    return this.getUser();
  }
  getCurrentUser() {
    return this.userSubject.value;
  }
  autoFetchUser() {
    const token = localStorage.getItem("authToken");
    if (token) {
      this.getUser().subscribe({
        error: () => {
        }
      });
    }
  }
  logout(message) {
    this.userSubject.next(null);
    localStorage.clear();
    sessionStorage.clear();
    this.userSubject.next(null);
    if (message) {
      alert(message);
    }
    this.router.navigate([""]);
  }
  static {
    this.\u0275fac = function UserService_Factory(t) {
      return new (t || _UserService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserService, factory: _UserService.\u0275fac, providedIn: "root" });
  }
};

export {
  UserService
};
//# sourceMappingURL=chunk-7DE343FO.mjs.map
