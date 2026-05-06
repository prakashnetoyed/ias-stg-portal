import './polyfills.server.mjs';
import {
  ActivatedRoute
} from "./chunk-BE6K35NY.mjs";
import "./chunk-4YWQRQCE.mjs";
import "./chunk-HLCGF54J.mjs";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-G22F5CZJ.mjs";
import {
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-NA5KQ7PN.mjs";
import "./chunk-24VIC3GD.mjs";

// src/app/website/pages/airpay-demo/airpay-demo.component.ts
function AirpayDemoComponent_input_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 11);
  }
  if (rf & 2) {
    const field_r1 = ctx.$implicit;
    \u0275\u0275property("name", field_r1.name)("value", field_r1.value);
  }
}
function AirpayDemoComponent_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Please wait while we forward you to the payment page.");
    \u0275\u0275elementEnd();
  }
}
function AirpayDemoComponent_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
var AirpayDemoComponent = class _AirpayDemoComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.formAction = "";
    this.formFields = [];
    this.isSubmitting = false;
    this.errorMessage = "";
  }
  ngOnInit() {
    const params = this.route.snapshot.queryParamMap;
    this.formAction = params.get("url") || "";
    this.formFields = [
      { name: "merchant_id", value: params.get("merchant_id") || "" },
      { name: "privatekey", value: params.get("privatekey") || "" },
      { name: "checksum", value: params.get("checksum") || "" },
      { name: "encdata", value: params.get("encdata") || "" },
      { name: "chmod", value: params.get("chmod") || "" }
    ];
    if (!this.formAction || this.formFields.some((field) => !field.value && field.name !== "chmod")) {
      this.errorMessage = "Missing Airpay form data.";
      return;
    }
    setTimeout(() => this.submitForm(), 150);
  }
  submitForm() {
    if (this.isSubmitting || !this.formAction) {
      return;
    }
    this.isSubmitting = true;
    const form = document.getElementById("airpay-demo-form");
    form?.submit();
  }
  static {
    this.\u0275fac = function AirpayDemoComponent_Factory(t) {
      return new (t || _AirpayDemoComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AirpayDemoComponent, selectors: [["app-airpay-demo"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 4, consts: [[1, "demo-shell"], ["id", "airpay-demo-form", "method", "post", 3, "action"], ["type", "hidden", 3, "name", "value", 4, "ngFor", "ngForOf"], [1, "demo-card"], [1, "spinner"], [4, "ngIf"], ["class", "error-text", 4, "ngIf"], [1, "actions"], ["type", "button", 1, "primary", 3, "click"], ["type", "button", "onclick", "window.location.reload()", 1, "secondary"], [1, "hint"], ["type", "hidden", 3, "name", "value"], [1, "error-text"]], template: function AirpayDemoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "form", 1);
        \u0275\u0275template(2, AirpayDemoComponent_input_2_Template, 1, 2, "input", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 3);
        \u0275\u0275element(4, "div", 4);
        \u0275\u0275elementStart(5, "h1");
        \u0275\u0275text(6, "Redirecting to Airpay");
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, AirpayDemoComponent_p_7_Template, 2, 0, "p", 5)(8, AirpayDemoComponent_p_8_Template, 2, 1, "p", 6);
        \u0275\u0275elementStart(9, "div", 7)(10, "button", 8);
        \u0275\u0275listener("click", function AirpayDemoComponent_Template_button_click_10_listener() {
          return ctx.submitForm();
        });
        \u0275\u0275text(11, "Continue to Airpay");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "button", 9);
        \u0275\u0275text(13, "Retry");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 10);
        \u0275\u0275text(15, " Local demo page rendering the Airpay form from the Angular frontend. ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("action", ctx.formAction, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.formFields);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", !ctx.errorMessage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.errorMessage);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf], styles: ["\n\n.demo-shell[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  background:\n    radial-gradient(\n      circle at top left,\n      #ffffff 0,\n      #ffffff 9%,\n      transparent 10%),\n    linear-gradient(\n      145deg,\n      #eef8ec,\n      #dff1db);\n}\n.demo-card[_ngcontent-%COMP%] {\n  width: min(100%, 420px);\n  background: #fff;\n  border: 1px solid #cde5d3;\n  border-radius: 24px;\n  padding: 30px 24px;\n  text-align: center;\n  box-shadow: 0 20px 50px rgba(1, 50, 55, 0.12);\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  margin: 0 auto 18px;\n  border: 4px solid #d9efe0;\n  border-top-color: #4ca771;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.9s linear infinite;\n}\nh1[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  color: #013237;\n  font-size: 22px;\n}\np[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #5a6d6b;\n}\n.error-text[_ngcontent-%COMP%] {\n  color: #b3261e;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-top: 22px;\n}\nbutton[_ngcontent-%COMP%] {\n  border: 0;\n  border-radius: 14px;\n  padding: 14px 16px;\n  font-size: 15px;\n  font-weight: 700;\n  cursor: pointer;\n}\n.primary[_ngcontent-%COMP%] {\n  background: #4ca771;\n  color: #fff;\n}\n.secondary[_ngcontent-%COMP%] {\n  background: #f4faf2;\n  color: #013237;\n  border: 1px solid #cde5d3;\n}\n.hint[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  font-size: 13px;\n  color: #718582;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=airpay-demo.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AirpayDemoComponent, { className: "AirpayDemoComponent", filePath: "src/app/website/pages/airpay-demo/airpay-demo.component.ts", lineNumber: 12 });
})();
export {
  AirpayDemoComponent
};
//# sourceMappingURL=chunk-MYTE72SD.mjs.map
