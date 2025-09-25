import './polyfills.server.mjs';
import {
  isPlatformBrowser
} from "./chunk-TCHJBQHP.mjs";
import {
  PLATFORM_ID,
  inject,
  signal,
  ɵɵdefineInjectable
} from "./chunk-VCJFYSIH.mjs";

// src/app/services/auth.service.ts
var AuthService = class _AuthService {
  constructor() {
    this.isLoggedIn = signal(null);
    this.platformId = inject(PLATFORM_ID);
    this.checkAuth();
  }
  checkAuth() {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem("authToken");
      this.isLoggedIn.set(!!token);
      console.log("login value", this.isLoggedIn());
    } else {
      this.isLoggedIn.set(null);
    }
  }
  static {
    this.\u0275fac = function AuthService_Factory(t) {
      return new (t || _AuthService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};

export {
  AuthService
};
//# sourceMappingURL=chunk-MNSYU6XL.mjs.map
