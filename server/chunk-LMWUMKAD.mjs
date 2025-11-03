import './polyfills.server.mjs';
import {
  IasUserHeaderComponent
} from "./chunk-QUFU3L4P.mjs";
import "./chunk-7DE343FO.mjs";
import "./chunk-YLAG4H64.mjs";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-UI6ESX43.mjs";
import {
  ToastService
} from "./chunk-A2UBZQQG.mjs";
import "./chunk-SJMEGSB4.mjs";
import "./chunk-NFXFD3SX.mjs";
import "./chunk-DO7CA2WQ.mjs";
import {
  CommonModule
} from "./chunk-3RYB6XRG.mjs";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext
} from "./chunk-IXD3JOLX.mjs";
import "./chunk-24VIC3GD.mjs";

// src/app/common/state-sidebar/state-sidebar.component.ts
var _c0 = () => ({ exact: true });
var StateSidebarComponent = class _StateSidebarComponent {
  constructor(router, toastService) {
    this.router = router;
    this.toastService = toastService;
  }
  goHome() {
    if (this.router.url === "/homepage") {
      this.toastService.showToast("You are already on Home page", "success");
    } else {
      this.router.navigateByUrl("/homepage");
    }
  }
  static {
    this.\u0275fac = function StateSidebarComponent_Factory(t) {
      return new (t || _StateSidebarComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StateSidebarComponent, selectors: [["app-state-sidebar"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 45, vars: 12, consts: [[1, "main-side-bar-component", "d-flex", "flex-column", "justify-content-between"], [1, "top-div"], ["data-bs-toggle", "tooltip", "title", "Click to go Home", 1, "left-logo-div", "d-flex", "align-items-center", "gap-2", "mb-4", 3, "click"], ["src", "../../../assets/logo/ias-small-logo.png", "alt", "epfo-logo", 1, "ll"], [1, "epfo-name-text", "w-100"], [1, "epfo-text", "w-100"], [1, "navigation-div", "mt-2"], [1, "p-0"], ["routerLinkActive", "active", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "d-flex", "align-items-center", "gap-2", "nav-option", 3, "routerLink", "routerLinkActiveOptions"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", 1, "dash"], ["d", "M10 3H3V10H10V3Z", "stroke", "#211B3A", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M21 3H14V10H21V3Z", "stroke", "#211B3A", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M21 14H14V21H21V14Z", "stroke", "#211B3A", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M10 14H3V21H10V14Z", "stroke", "#211B3A", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "navigation-text"], ["routerLinkActive", "active", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "d-flex", "align-items-center", "gap-2", "mt-2", "nav-option", 3, "routerLink", "routerLinkActiveOptions"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", 1, "nav-svg"], ["clip-path", "url(#clip0_50872_3818)"], ["d", "M12 5.9C13.16 5.9 14.1 6.84 14.1 8C14.1 9.16 13.16 10.1 12 10.1C10.84 10.1 9.9 9.16 9.9 8C9.9 6.84 10.84 5.9 12 5.9ZM12 14.9C14.97 14.9 18.1 16.36 18.1 17V18.1H5.9V17C5.9 16.36 9.03 14.9 12 14.9ZM12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM12 13C9.33 13 4 14.34 4 17V20H20V17C20 14.34 14.67 13 12 13Z", "fill", "#211B3A"], ["id", "clip0_50872_3818"], ["width", "24", "height", "24", "fill", "white"], ["id", "mask0_50872_3825", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "24", "height", "24", 2, "mask-type", "alpha"], ["width", "24", "height", "24", "fill", "#D9D9D9"], ["mask", "url(#mask0_50872_3825)"], ["d", "M5 19V5V9.475V9V19ZM7 13H12.525C12.5583 12.6333 12.6417 12.2833 12.775 11.95C12.9083 11.6167 13.075 11.3 13.275 11H7V13ZM7 17H10.925C11.2083 16.6667 11.5333 16.3958 11.9 16.1875C12.2667 15.9792 12.65 15.8083 13.05 15.675C12.9833 15.575 12.925 15.4667 12.875 15.35C12.825 15.2333 12.7833 15.1167 12.75 15H7V17ZM7 9H17V7H7V9ZM5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V11.45C20.7667 11.0167 20.4833 10.6333 20.15 10.3C19.8167 9.96667 19.4333 9.69167 19 9.475V5H5V19H10.05C10.0333 19.1 10.0208 19.2 10.0125 19.3C10.0042 19.4 10 19.5 10 19.6V21H5ZM17 16C16.3 16 15.7083 15.7583 15.225 15.275C14.7417 14.7917 14.5 14.2 14.5 13.5C14.5 12.8 14.7417 12.2083 15.225 11.725C15.7083 11.2417 16.3 11 17 11C17.7 11 18.2917 11.2417 18.775 11.725C19.2583 12.2083 19.5 12.8 19.5 13.5C19.5 14.2 19.2583 14.7917 18.775 15.275C18.2917 15.7583 17.7 16 17 16ZM12 21V19.6C12 19.2 12.1042 18.8292 12.3125 18.4875C12.5208 18.1458 12.8167 17.9 13.2 17.75C13.8 17.5 14.4208 17.3125 15.0625 17.1875C15.7042 17.0625 16.35 17 17 17C17.65 17 18.2958 17.0625 18.9375 17.1875C19.5792 17.3125 20.2 17.5 20.8 17.75C21.1833 17.9 21.4792 18.1458 21.6875 18.4875C21.8958 18.8292 22 19.2 22 19.6V21H12Z", "fill", "#211B3A"], ["clip-path", "url(#clip0_50872_3834)"], ["d", "M4 6H2V20C2 21.1 2.9 22 4 22H18V20H4V6ZM20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H8V4H20V16ZM10 9H18V11H10V9ZM10 12H14V14H10V12ZM10 6H18V8H10V6Z", "fill", "#211B3A"], ["id", "clip0_50872_3834"]], template: function StateSidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275listener("click", function StateSidebarComponent_Template_div_click_2_listener() {
          return ctx.goHome();
        });
        \u0275\u0275element(3, "img", 3);
        \u0275\u0275elementStart(4, "div", 4)(5, "h1", 5);
        \u0275\u0275text(6, "Indian Administrative Service ");
        \u0275\u0275element(7, "br");
        \u0275\u0275text(8, "Central Association");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 6)(10, "ul", 7)(11, "li", 8);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(12, "svg", 9);
        \u0275\u0275element(13, "path", 10)(14, "path", 11)(15, "path", 12)(16, "path", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(17, "h1", 14);
        \u0275\u0275text(18, "About us");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "li", 15);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(20, "svg", 16)(21, "g", 17);
        \u0275\u0275element(22, "path", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "defs")(24, "clipPath", 19);
        \u0275\u0275element(25, "rect", 20);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(26, "h1", 14);
        \u0275\u0275text(27, "Office Bearers");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "li", 15);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(29, "svg", 16)(30, "mask", 21);
        \u0275\u0275element(31, "rect", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "g", 23);
        \u0275\u0275element(33, "path", 24);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(34, "h1", 14);
        \u0275\u0275text(35, "Events");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "li", 15);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(37, "svg", 16)(38, "g", 25);
        \u0275\u0275element(39, "path", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "defs")(41, "clipPath", 27);
        \u0275\u0275element(42, "rect", 20);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(43, "h1", 14);
        \u0275\u0275text(44, "Gallery");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275property("routerLink", "/state-dashboard")("routerLinkActiveOptions", \u0275\u0275pureFunction0(8, _c0));
        \u0275\u0275advance(8);
        \u0275\u0275property("routerLink", "state-office-bearers")("routerLinkActiveOptions", \u0275\u0275pureFunction0(9, _c0));
        \u0275\u0275advance(9);
        \u0275\u0275property("routerLink", "state-events")("routerLinkActiveOptions", \u0275\u0275pureFunction0(10, _c0));
        \u0275\u0275advance(8);
        \u0275\u0275property("routerLink", "state-gallery")("routerLinkActiveOptions", \u0275\u0275pureFunction0(11, _c0));
      }
    }, dependencies: [CommonModule, RouterModule, RouterLink, RouterLinkActive], styles: ['\n\n.main-side-bar-component[_ngcontent-%COMP%] {\n  background: var(--White, #FFF);\n  padding: 15px 16px;\n  height: 100vh;\n  min-width: 300px;\n}\n.left-logo-div[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.navigation-text[_ngcontent-%COMP%] {\n  color: var(--Gray-700, #414651);\n  font-family: "Noto Sans";\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 24px;\n  margin-bottom: 0px;\n  transition: all 0.3s ease-in-out;\n}\n.name-text[_ngcontent-%COMP%] {\n  color: var(--Gray-900, #181D27);\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 20px;\n  margin: 0px;\n}\n.uan-number[_ngcontent-%COMP%] {\n  color: var(--Gray-600, #535862);\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 20px;\n  margin: 0px;\n}\n.epfo-text[_ngcontent-%COMP%] {\n  color: #000;\n  font-family: Urbanist;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 22.393px;\n  margin: 0px;\n}\n.nav-option[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n}\n.nav-option[_ngcontent-%COMP%]:hover {\n  border-radius: 4px;\n  background:\n    linear-gradient(\n      130deg,\n      rgba(73, 47, 178, 0.12) -1.74%,\n      rgba(73, 47, 178, 0.07) 125.81%);\n}\n.nav-option[_ngcontent-%COMP%]:hover   .navigation-text[_ngcontent-%COMP%] {\n  background: var(--1, linear-gradient(130deg, #492FB2 -1.74%, rgba(73, 47, 178, 0.61) 125.81%));\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  font-weight: 600;\n}\n.nav-option[_ngcontent-%COMP%]:hover   .nav-svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #492FB2;\n}\n.nav-option[_ngcontent-%COMP%]:hover   .dash[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  stroke: #492FB2;\n}\n.active[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  background:\n    linear-gradient(\n      130deg,\n      rgba(73, 47, 178, 0.12) -1.74%,\n      rgba(73, 47, 178, 0.07) 125.81%);\n}\n.active[_ngcontent-%COMP%]   .navigation-text[_ngcontent-%COMP%] {\n  background: var(--1, linear-gradient(130deg, #492FB2 -1.74%, rgba(73, 47, 178, 0.61) 125.81%));\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  font-weight: 600;\n}\n.active[_ngcontent-%COMP%]   .nav-svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #492FB2;\n}\n.active[_ngcontent-%COMP%]   .dash[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  stroke: #492FB2;\n}\n/*# sourceMappingURL=state-sidebar.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StateSidebarComponent, { className: "StateSidebarComponent", filePath: "src/app/common/state-sidebar/state-sidebar.component.ts", lineNumber: 13 });
})();

// src/app/state-dashboard/state-dashboard-layout/state-dashboard-layout.component.ts
var StateDashboardLayoutComponent = class _StateDashboardLayoutComponent {
  static {
    this.\u0275fac = function StateDashboardLayoutComponent_Factory(t) {
      return new (t || _StateDashboardLayoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StateDashboardLayoutComponent, selectors: [["app-state-dashboard-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 0, consts: [[1, "main-after-login-layout"], [1, "side-bar-div"], [1, "view-div", "w-100"], [1, "header-division"], [1, "router-outlet-div", "m-4"]], template: function StateDashboardLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-state-sidebar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "div", 3);
        \u0275\u0275element(5, "app-ias-user-header");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 4);
        \u0275\u0275element(7, "router-outlet");
        \u0275\u0275elementEnd()()();
      }
    }, dependencies: [IasUserHeaderComponent, RouterOutlet, StateSidebarComponent], styles: ["\n\n.main-after-login-layout[_ngcontent-%COMP%] {\n  background: #F4F1FF;\n  display: flex;\n  width: 100%;\n}\n.side-bar-div[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  align-self: flex-start;\n  height: 100vh;\n}\n@media (max-width: 1235px) {\n  .side-bar-div[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=state-dashboard-layout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StateDashboardLayoutComponent, { className: "StateDashboardLayoutComponent", filePath: "src/app/state-dashboard/state-dashboard-layout/state-dashboard-layout.component.ts", lineNumber: 14 });
})();
export {
  StateDashboardLayoutComponent
};
//# sourceMappingURL=chunk-LMWUMKAD.mjs.map
