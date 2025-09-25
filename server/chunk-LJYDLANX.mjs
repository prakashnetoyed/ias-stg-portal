import './polyfills.server.mjs';
import {
  ActivatedRoute
} from "./chunk-6ATHX5LA.mjs";
import "./chunk-7CCGWKBH.mjs";
import "./chunk-LKXSFKPG.mjs";
import {
  CommonModule,
  NgIf
} from "./chunk-TCHJBQHP.mjs";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-VCJFYSIH.mjs";
import "./chunk-24VIC3GD.mjs";

// src/app/user-portal/pages/payment-status/payment-status.component.ts
function PaymentStatusComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "h3");
    \u0275\u0275text(3, "\u2705 Payment Successful");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "hr");
    \u0275\u0275elementStart(7, "p")(8, "strong");
    \u0275\u0275text(9, "Transaction Amount:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p")(12, "strong");
    \u0275\u0275text(13, "Bank Transaction ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p")(16, "strong");
    \u0275\u0275text(17, "Date:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.paymentDetails.message);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" \u20B9", ctx_r0.paymentDetails.txnAmount, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.paymentDetails.bankTxnId, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.paymentDetails.txnDate, "");
  }
}
function PaymentStatusComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "h3");
    \u0275\u0275text(3, "\u274C Payment Failed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "hr");
    \u0275\u0275elementStart(7, "p")(8, "strong");
    \u0275\u0275text(9, "Transaction Amount:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p")(12, "strong");
    \u0275\u0275text(13, "Date:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.paymentDetails.message || "Your payment could not be processed.");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" \u20B9", ctx_r0.paymentDetails.txnAmount, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.paymentDetails.txnDate, "");
  }
}
function PaymentStatusComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "h3");
    \u0275\u0275text(3, "\u23F3 Payment Pending");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "hr");
    \u0275\u0275elementStart(7, "p")(8, "strong");
    \u0275\u0275text(9, "Transaction Amount:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p")(12, "strong");
    \u0275\u0275text(13, "Date:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.paymentDetails.message || "Your transaction is being processed.");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" \u20B9", ctx_r0.paymentDetails.txnAmount, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.paymentDetails.txnDate, "");
  }
}
var PaymentStatusComponent = class _PaymentStatusComponent {
  constructor(route) {
    this.route = route;
    this.status = null;
    this.paymentDetails = {};
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.status = params["status"] || null;
      this.paymentDetails = {
        txnAmount: params["txnAmount"],
        bankTxnId: params["bankTxnId"],
        txnDate: params["txnDate"],
        message: params["message"]
      };
    });
  }
  static {
    this.\u0275fac = function PaymentStatusComponent_Factory(t) {
      return new (t || _PaymentStatusComponent)(\u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentStatusComponent, selectors: [["app-payment-status"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 3, consts: [[1, "container", "py-5"], ["class", "card shadow border-success mb-4", 4, "ngIf"], ["class", "card shadow border-danger mb-4", 4, "ngIf"], ["class", "card shadow border-warning mb-4", 4, "ngIf"], [1, "card", "shadow", "border-success", "mb-4"], [1, "card-body", "text-center", "text-success"], [1, "card", "shadow", "border-danger", "mb-4"], [1, "card-body", "text-center", "text-danger"], [1, "card", "shadow", "border-warning", "mb-4"], [1, "card-body", "text-center", "text-warning"]], template: function PaymentStatusComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, PaymentStatusComponent_div_1_Template, 19, 4, "div", 1)(2, PaymentStatusComponent_div_2_Template, 15, 3, "div", 2)(3, PaymentStatusComponent_div_3_Template, 15, 3, "div", 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.status === "SUCCESS");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.status === "FAILED");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.status === "PENDING");
      }
    }, dependencies: [CommonModule, NgIf], styles: ["\n\n.card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  padding: 3vw;\n  max-width: 600px;\n  margin: 60px auto 0;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1.6;\n}\n/*# sourceMappingURL=payment-status.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentStatusComponent, { className: "PaymentStatusComponent", filePath: "src/app/user-portal/pages/payment-status/payment-status.component.ts", lineNumber: 12 });
})();
export {
  PaymentStatusComponent
};
//# sourceMappingURL=chunk-LJYDLANX.mjs.map
