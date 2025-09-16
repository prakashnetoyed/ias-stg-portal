import './polyfills.server.mjs';
import {
  Subject,
  ɵɵdefineInjectable
} from "./chunk-7SOKK2ZZ.mjs";

// src/app/common/toast.service.ts
var ToastService = class _ToastService {
  constructor() {
    this.toastMessageSource = new Subject();
    this.toastMessage$ = this.toastMessageSource.asObservable();
  }
  showToast(message, type = "danger") {
    this.toastMessageSource.next({ message, type });
  }
  static {
    this.\u0275fac = function ToastService_Factory(t) {
      return new (t || _ToastService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ToastService, factory: _ToastService.\u0275fac, providedIn: "root" });
  }
};

export {
  ToastService
};
//# sourceMappingURL=chunk-N2YMWGGF.mjs.map
