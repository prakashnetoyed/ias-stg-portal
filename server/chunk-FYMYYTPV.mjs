import './polyfills.server.mjs';
import {
  RouterLink,
  RouterModule
} from "./chunk-6NZEUJZT.mjs";
import "./chunk-GT2DVIBE.mjs";
import "./chunk-WMJX6FG3.mjs";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-7SOKK2ZZ.mjs";
import "./chunk-24VIC3GD.mjs";

// src/app/common/route-error/route-error.component.ts
var RouteErrorComponent = class _RouteErrorComponent {
  static {
    this.\u0275fac = function RouteErrorComponent_Factory(t) {
      return new (t || _RouteErrorComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RouteErrorComponent, selectors: [["app-route-error"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 1, consts: [[1, "not-found-container"], [1, "not-found-content"], [1, "error-code"], [1, "error-title"], [1, "error-message"], [1, "actions"], [1, "btn-donate", 3, "routerLink"]], template: function RouteErrorComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "404");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h2", 3);
        \u0275\u0275text(5, "Oops! Page not found");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275text(7, " The page you are looking for doesn\u2019t exist or has been moved. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 5)(9, "button", 6);
        \u0275\u0275text(10, "Go Back Home");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275property("routerLink", "");
      }
    }, dependencies: [RouterModule, RouterLink], styles: ["\n\n.not-found-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background: #f4f7fb;\n  text-align: center;\n  padding: 20px;\n}\n.not-found-content[_ngcontent-%COMP%] {\n  max-width: 500px;\n}\n.error-code[_ngcontent-%COMP%] {\n  font-size: 8rem;\n  font-weight: 800;\n  color: #492fb2;\n  margin-bottom: 10px;\n}\n.error-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 15px;\n}\n.error-message[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #666;\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=route-error.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RouteErrorComponent, { className: "RouteErrorComponent", filePath: "src/app/common/route-error/route-error.component.ts", lineNumber: 11 });
})();
export {
  RouteErrorComponent
};
//# sourceMappingURL=chunk-FYMYYTPV.mjs.map
