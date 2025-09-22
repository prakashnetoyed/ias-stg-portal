import {
  environment
} from "./chunk-WYW2S4QW.js";
import {
  HttpClient,
  HttpHeaders
} from "./chunk-BK4FBNP4.js";
import {
  BehaviorSubject,
  map,
  of,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-PY442ZFB.js";

// src/app/services/user.service.ts
var UserService = class _UserService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/accounts/whoami`;
    this.userSubject = new BehaviorSubject(null);
    this.user$ = this.userSubject.asObservable();
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
    }));
  }
  static {
    this.\u0275fac = function UserService_Factory(t) {
      return new (t || _UserService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserService, factory: _UserService.\u0275fac, providedIn: "root" });
  }
};

export {
  UserService
};
//# sourceMappingURL=chunk-355F23O5.js.map
