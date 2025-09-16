import {
  Router,
  RouterModule
} from "./chunk-HLKJWW3L.js";
import "./chunk-SF3QATI4.js";
import "./chunk-DDS5LGCN.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵtext
} from "./chunk-TPVSKZNW.js";
import "./chunk-ASLTLD6L.js";

// src/app/common/user-not-approved-layout/user-not-approved-layout.component.ts
var UserNotApprovedLayoutComponent = class _UserNotApprovedLayoutComponent {
  constructor(router) {
    this.router = router;
  }
  logout() {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userStatus");
    localStorage.clear();
    this.router.navigate([""]);
  }
  static {
    this.\u0275fac = function UserNotApprovedLayoutComponent_Factory(t) {
      return new (t || _UserNotApprovedLayoutComponent)(\u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserNotApprovedLayoutComponent, selectors: [["app-user-not-approved-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 0, consts: [[1, "not-found-container"], [1, "not-found-content"], [1, "error-code"], [1, "error-title"], [1, "error-message"], [1, "actions"], [1, "btn-donate", 3, "click"]], template: function UserNotApprovedLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Welcome");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h2", 3);
        \u0275\u0275text(5, "Admin approval pending");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275text(7, " Please wait for admin approval");
        \u0275\u0275element(8, "br");
        \u0275\u0275text(9, " Need help contact at association.ias@gmail.com ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 5)(11, "button", 6);
        \u0275\u0275listener("click", function UserNotApprovedLayoutComponent_Template_button_click_11_listener() {
          return ctx.logout();
        });
        \u0275\u0275text(12, "Go Back Home");
        \u0275\u0275elementEnd()()()();
      }
    }, dependencies: [RouterModule], styles: ["\n\n.not-found-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background: #f4f7fb;\n  text-align: center;\n  padding: 20px;\n}\n.not-found-content[_ngcontent-%COMP%] {\n  max-width: 500px;\n}\n.error-code[_ngcontent-%COMP%] {\n  font-size: 8rem;\n  font-weight: 800;\n  color: #492fb2;\n  margin-bottom: 10px;\n}\n.error-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 15px;\n}\n.error-message[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #666;\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=user-not-approved-layout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserNotApprovedLayoutComponent, { className: "UserNotApprovedLayoutComponent", filePath: "src/app/common/user-not-approved-layout/user-not-approved-layout.component.ts", lineNumber: 11 });
})();
export {
  UserNotApprovedLayoutComponent
};
//# sourceMappingURL=chunk-24DLR6SM.js.map
