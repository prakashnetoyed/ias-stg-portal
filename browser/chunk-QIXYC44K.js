import {
  IasSidebarComponent,
  IasUserHeaderComponent
} from "./chunk-FCDEKULK.js";
import "./chunk-YP5P36PQ.js";
import "./chunk-UKQX5KCK.js";
import {
  RouterModule,
  RouterOutlet
} from "./chunk-NZQ6EF6T.js";
import "./chunk-KC2EVZ25.js";
import "./chunk-WYW2S4QW.js";
import "./chunk-7VYRPV2J.js";
import "./chunk-SFG4SZVN.js";
import "./chunk-G2HLXPCJ.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart
} from "./chunk-2RXJFVL4.js";
import "./chunk-ASLTLD6L.js";

// src/app/IAS-portal/dashboard-layout/dashboard-layout.component.ts
var DashboardLayoutComponent = class _DashboardLayoutComponent {
  static {
    this.\u0275fac = function DashboardLayoutComponent_Factory(t) {
      return new (t || _DashboardLayoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardLayoutComponent, selectors: [["app-dashboard-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 0, consts: [[1, "main-after-login-layout"], [1, "side-bar-div"], [1, "view-div", "w-100"], [1, "header-division"], [1, "router-outlet-div", "m-4"]], template: function DashboardLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-ias-sidebar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "div", 3);
        \u0275\u0275element(5, "app-ias-user-header");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 4);
        \u0275\u0275element(7, "router-outlet");
        \u0275\u0275elementEnd()()();
      }
    }, dependencies: [RouterModule, RouterOutlet, IasSidebarComponent, IasUserHeaderComponent], styles: ["\n\n.main-after-login-layout[_ngcontent-%COMP%] {\n  background: #F5F7FF;\n  display: flex;\n  width: 100%;\n}\n.side-bar-div[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  align-self: flex-start;\n  height: 100vh;\n}\n.header-division[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0px;\n  z-index: 999;\n}\n@media (max-width: 1235px) {\n  .side-bar-div[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .router-outlet-div[_ngcontent-%COMP%] {\n    height: 100vh;\n  }\n}\n/*# sourceMappingURL=dashboard-layout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardLayoutComponent, { className: "DashboardLayoutComponent", filePath: "src/app/IAS-portal/dashboard-layout/dashboard-layout.component.ts", lineNumber: 13 });
})();
export {
  DashboardLayoutComponent
};
//# sourceMappingURL=chunk-QIXYC44K.js.map
