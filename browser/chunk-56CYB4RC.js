import {
  ActivatedRoute
} from "./chunk-S2TCK2OF.js";
import "./chunk-RJ25BFLR.js";
import "./chunk-PMEJ6XV7.js";
import {
  CommonModule,
  NgIf
} from "./chunk-4WMMRM5H.js";
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
} from "./chunk-KROTWO27.js";
import "./chunk-ASLTLD6L.js";

// src/app/user-portal/pages/payment-status/payment-status.component.ts
function PaymentStatusComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "h3");
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
    \u0275\u0275text(13, "Order ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p")(16, "strong");
    \u0275\u0275text(17, "Bank Transaction ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p")(20, "strong");
    \u0275\u0275text(21, "Mode:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p")(24, "strong");
    \u0275\u0275text(25, "Date:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.paymentDetails.message);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" \u20B9", ctx_r0.paymentDetails.txnAmount, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.paymentDetails.orderID, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.paymentDetails.bankTxnId, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.paymentDetails.txnMode, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.paymentDetails.txnDate, "");
  }
}
function PaymentStatusComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "h3");
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
    \u0275\u0275text(13, "Order ID:");
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
    \u0275\u0275textInterpolate1(" ", ctx_r0.paymentDetails.orderID, "");
  }
}
var PaymentStatusComponent = class _PaymentStatusComponent {
  constructor(route) {
    this.route = route;
    this.statusCode = null;
    this.paymentDetails = {};
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.statusCode = params["transaction_status"], this.paymentDetails = {
        statusCode: params["status"],
        orderID: params["orderId"],
        txnAmount: params["txnAmount"],
        bankTxnId: params["bankTxnId"],
        txnDate: params["txnDate"],
        message: params["message"],
        txnMode: params["txn_mode"]
      };
    });
  }
  static {
    this.\u0275fac = function PaymentStatusComponent_Factory(t) {
      return new (t || _PaymentStatusComponent)(\u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentStatusComponent, selectors: [["app-payment-status"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 2, consts: [[1, "container", "py-5"], ["class", "card shadow border-success mb-4", 4, "ngIf"], ["class", "card shadow border-danger mb-4", 4, "ngIf"], [1, "card", "shadow", "border-success", "mb-4"], [1, "card-body", "text-center", "text-success"], [1, "card", "shadow", "border-danger", "mb-4"], [1, "card-body", "text-center", "text-danger"]], template: function PaymentStatusComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, PaymentStatusComponent_div_1_Template, 27, 6, "div", 1)(2, PaymentStatusComponent_div_2_Template, 15, 3, "div", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.statusCode == "200");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.statusCode != "200");
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
//# sourceMappingURL=chunk-56CYB4RC.js.map
