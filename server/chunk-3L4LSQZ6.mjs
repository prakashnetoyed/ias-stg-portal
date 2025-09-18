import './polyfills.server.mjs';
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart
} from "./chunk-QKHTRG4V.mjs";

// src/app/common/ias-loader/ias-loader.component.ts
var IasLoaderComponent = class _IasLoaderComponent {
  static {
    this.\u0275fac = function IasLoaderComponent_Factory(t) {
      return new (t || _IasLoaderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IasLoaderComponent, selectors: [["app-ias-loader"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 0, consts: [[1, "loader-overlay"], [1, "loader-container"], [1, "bg-image"], [1, "spinner"]], template: function IasLoaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "div", 2)(3, "div", 3);
        \u0275\u0275elementEnd()();
      }
    }, styles: ["\n\n.loader-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.439);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n}\n.loader-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 120px;\n  height: 120px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.loader-image[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  object-fit: contain;\n}\n.spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 120px;\n  height: 120px;\n  border: 6px solid rgba(255, 255, 255, 0);\n  border-top: 6px solid #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=ias-loader.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IasLoaderComponent, { className: "IasLoaderComponent", filePath: "src/app/common/ias-loader/ias-loader.component.ts", lineNumber: 10 });
})();

export {
  IasLoaderComponent
};
//# sourceMappingURL=chunk-3L4LSQZ6.mjs.map
