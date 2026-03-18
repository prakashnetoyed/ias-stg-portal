import './polyfills.server.mjs';
import {
  RouterLink,
  RouterModule
} from "./chunk-BE6K35NY.mjs";
import "./chunk-4YWQRQCE.mjs";
import "./chunk-HLCGF54J.mjs";
import "./chunk-G22F5CZJ.mjs";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-NA5KQ7PN.mjs";
import "./chunk-24VIC3GD.mjs";

// src/app/common/coming-soon/coming-soon.component.ts
var ComingSoonComponent = class _ComingSoonComponent {
  static {
    this.\u0275fac = function ComingSoonComponent_Factory(t) {
      return new (t || _ComingSoonComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComingSoonComponent, selectors: [["app-coming-soon"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 1, consts: [[1, "not-found-container"], [1, "not-found-content"], [1, "error-code"], [1, "error-title"], [1, "actions"], [1, "btn-donate", 3, "routerLink"]], template: function ComingSoonComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Coming Soon");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h2", 3);
        \u0275\u0275text(5, "This feature will go live soon");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 4)(7, "button", 5);
        \u0275\u0275text(8, "Go Back Home");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("routerLink", "");
      }
    }, dependencies: [RouterModule, RouterLink], styles: ["\n\n.not-found-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background: #f4f7fb;\n  text-align: center;\n  padding: 20px;\n}\n.not-found-content[_ngcontent-%COMP%] {\n  max-width: 500px;\n}\n.error-code[_ngcontent-%COMP%] {\n  font-size: 8rem;\n  font-weight: 800;\n  color: #492fb2;\n  margin-bottom: 10px;\n}\n.error-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 15px;\n}\n.error-message[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #666;\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=coming-soon.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComingSoonComponent, { className: "ComingSoonComponent", filePath: "src/app/common/coming-soon/coming-soon.component.ts", lineNumber: 11 });
})();
export {
  ComingSoonComponent
};
//# sourceMappingURL=chunk-S75N2EMA.mjs.map
