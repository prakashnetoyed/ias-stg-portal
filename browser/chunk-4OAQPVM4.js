import {
  E
} from "./chunk-IM5VGJHP.js";
import "./chunk-7YWLATDR.js";
import {
  environment
} from "./chunk-WYW2S4QW.js";
import {
  HttpClient
} from "./chunk-X4DCRH7W.js";
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-HMLSYQRE.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PY442ZFB.js";
import "./chunk-ASLTLD6L.js";

// src/app/user-portal/pages/my-transactions/my-transactions.component.ts
var _c0 = (a0, a1) => ({ "Success": a0, "Failed": a1 });
function MyTransactionsComponent_tbody_20_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 11);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 5)(14, "p", 12);
    \u0275\u0275listener("click", function MyTransactionsComponent_tbody_20_tr_1_Template_p_click_14_listener() {
      const tx_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.downloadReceipt(tx_r2));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 13)(16, "mask", 14);
    \u0275\u0275element(17, "rect", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "g", 16);
    \u0275\u0275element(19, "path", 17);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const tx_r2 = ctx.$implicit;
    const i_r4 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r4 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tx_r2 == null ? null : tx_r2.userOrderDetails == null ? null : tx_r2.userOrderDetails.memberShip);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(9, _c0, tx_r2.status === "Success", tx_r2.status === "Failed" || tx_r2.status === "Pending"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tx_r2 == null ? null : tx_r2.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Rs ", tx_r2 == null ? null : tx_r2.txnAmount, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 6, tx_r2 == null ? null : tx_r2.txnDate, "dd-MM-yyyy HH:mm"));
  }
}
function MyTransactionsComponent_tbody_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tbody", 8);
    \u0275\u0275template(1, MyTransactionsComponent_tbody_20_tr_1_Template, 20, 12, "tr", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.transactions);
  }
}
function MyTransactionsComponent_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 5)(1, "td", 18);
    \u0275\u0275text(2, "No transaction data");
    \u0275\u0275elementEnd()();
  }
}
var MyTransactionsComponent = class _MyTransactionsComponent {
  constructor(http) {
    this.http = http;
    this.transactions = [];
  }
  ngOnInit() {
    this.mytransactions();
  }
  mytransactions() {
    this.http.get(`${environment.apiUrl}/orders?populate=userOrderDetails&populate=createdBy&limit=0`).subscribe({
      next: (res) => {
        console.log(res);
        this.transactions = res.data.data;
        console.log(this.transactions);
      },
      error: (err) => {
        console.error("Error fetching transactions:", err);
      }
    });
  }
  downloadReceipt(tx) {
    const doc = new E();
    doc.setFontSize(18);
    doc.text("Payment Receipt", 105, 15, { align: "center" });
    doc.setFontSize(12);
    doc.text("User Details", 14, 30);
    doc.setFontSize(10);
    doc.text(`Name: ${tx?.createdBy?.doptOfficer?.englishName || "N/A"}`, 14, 38);
    doc.text(`Email: ${tx?.createdBy?.email || "N/A"}`, 14, 44);
    doc.text(`Mobile: ${tx?.createdBy?.mobileNumber || "N/A"}`, 14, 50);
    doc.setFontSize(12);
    doc.text("Transaction Details", 14, 65);
    doc.setFontSize(10);
    doc.text(`Transaction ID: ${tx?.txnId || "N/A"}`, 14, 79);
    doc.text(`Bank Ref ID: ${tx?.bankTxnId || "N/A"}`, 14, 85);
    doc.text(`Bank Name: ${tx?.bankName || "N/A"}`, 14, 91);
    doc.text(`Amount: Rs ${tx?.txnAmount || 0}`, 14, 97);
    doc.text(`Date: ${tx?.txnDate || "N/A"}`, 14, 103);
    doc.text(`Payment Mode: ${tx?.paymentMode || "N/A"}`, 14, 109);
    doc.text(`Status: ${tx?.status || "N/A"}`, 14, 115);
    doc.setFontSize(12);
    doc.text("Membership", 14, 130);
    doc.setFontSize(10);
    doc.text(`Type: ${tx?.userOrderDetails?.memberShip || "N/A"}`, 14, 138);
    doc.setFontSize(9);
    doc.text("This is a system generated receipt.", 105, 280, { align: "center" });
    doc.save(`Receipt_${tx?.bankTxnId || "txn"}.pdf`);
  }
  static {
    this.\u0275fac = function MyTransactionsComponent_Factory(t) {
      return new (t || _MyTransactionsComponent)(\u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyTransactionsComponent, selectors: [["app-my-transactions"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 23, vars: 2, consts: [[1, "tableheading"], [1, "d-flex", "justify-content-between", "align-items-center", "flex-wrap", "mb-3"], [1, "mb-1"], [1, "table-responsive", "custom-table"], [1, "table", "align-middle", "mb-0"], [1, "text-center"], ["div", "", 4, "ngIf"], ["class", "text-center", 4, "ngIf"], ["div", ""], [4, "ngFor", "ngForOf"], [1, "membership"], [1, "badge", "px-3", "py-1", 3, "ngClass"], [1, "btn", "btn-link", "p-0", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "25", "height", "25", "viewBox", "0 0 25 25", "fill", "none"], ["id", "mask0_51821_5387", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "25", "height", "25", 2, "mask-type", "alpha"], ["x", "0.5", "y", "0.5", "width", "24", "height", "24", "fill", "#D9D9D9"], ["mask", "url(#mask0_51821_5387)"], ["d", "M12.5 16.5L7.5 11.5L8.9 10.05L11.5 12.65V4.5H13.5V12.65L16.1 10.05L17.5 11.5L12.5 16.5ZM6.5 20.5C5.95 20.5 5.47917 20.3042 5.0875 19.9125C4.69583 19.5208 4.5 19.05 4.5 18.5V15.5H6.5V18.5H18.5V15.5H20.5V18.5C20.5 19.05 20.3042 19.5208 19.9125 19.9125C19.5208 20.3042 19.05 20.5 18.5 20.5H6.5Z", "fill", "#1C1B1F"], ["colspan", "6", 1, "py-4", "fs-4"]], template: function MyTransactionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h5", 2);
        \u0275\u0275text(3, "My Transactions");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 3)(5, "table", 4)(6, "thead")(7, "tr")(8, "th");
        \u0275\u0275text(9, "S.no");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "th");
        \u0275\u0275text(11, "Membership");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "th");
        \u0275\u0275text(13, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "th");
        \u0275\u0275text(15, "Amount");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "th");
        \u0275\u0275text(17, "Transaction Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "th", 5);
        \u0275\u0275text(19, "Receipts");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(20, MyTransactionsComponent_tbody_20_Template, 2, 1, "tbody", 6);
        \u0275\u0275elementStart(21, "tbody");
        \u0275\u0275template(22, MyTransactionsComponent_tr_22_Template, 3, 0, "tr", 7);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(20);
        \u0275\u0275property("ngIf", ctx.transactions.length !== 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.transactions.length === 0);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DatePipe], styles: ['\n\n.tableheading[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #211b3a;\n  font-family: Urbanist;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 28px;\n}\n.tableheading[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%] {\n  max-width: 300px;\n  border-radius: 8px;\n  padding: 8px 12px;\n  overflow: hidden;\n  color: #868686;\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 20px;\n  letter-spacing: 0.25px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-family: Urbanist;\n  color: #492fb2;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 16px;\n  letter-spacing: 0.07px;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #333;\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 150%;\n  padding: 8px 12px;\n  letter-spacing: 0.25px;\n}\n.custom-table[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n}\n.custom-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #eee;\n  padding: 12px;\n}\n.badge[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  font-family: "Noto Sans";\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: var(--Line-Heights-10, 20px);\n  letter-spacing: var(--Letter-Spacing-4, 0.25px);\n  padding: 6px 12px;\n}\n.Success[_ngcontent-%COMP%] {\n  color: #2D9A08;\n  background: #E4FFDB;\n}\n.Failed[_ngcontent-%COMP%] {\n  color: #B20505;\n  background: #FFDBDB;\n}\n.membership[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid #c6c6c6;\n  background: #fff;\n  cursor: pointer;\n  padding: 8px 0px;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .blue[_ngcontent-%COMP%] {\n  color: #3C9718;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .black[_ngcontent-%COMP%] {\n  color: #211b3a;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%] {\n  color: #b7131a;\n}\n.btn-check[_ngcontent-%COMP%]:checked    + .btn[_ngcontent-%COMP%], .btn.active[_ngcontent-%COMP%], .btn.show[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:first-child:active, [_ngcontent-%COMP%]:not(.btn-check)    + .btn[_ngcontent-%COMP%]:active {\n  border-color: transparent;\n}\n.count-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--Text-Dark, #212121);\n  font-family: Urbanist;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 28px;\n  margin: 0px;\n  width: 50px;\n}\n.percentage[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  font-family: "Noto Sans";\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 16px;\n  letter-spacing: 0.5px;\n  display: flex;\n  align-items: center;\n}\n.success[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  background: var(--Success-50, #EDF7E6);\n  color: var(--Success-Default---Success, #3C9718);\n}\n.danger[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  color: var(--Danger-Default---Danger, #B7131A);\n  background: var(--Danger-50, #FFEEEA);\n}\n.modern-pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%] {\n  margin: 0 3px;\n}\n.modern-pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  border-radius: 8px !important;\n  border: 1px solid #ddd;\n  padding: 6px 12px;\n  color: #444;\n  background-color: #fff;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.modern-pagination[_ngcontent-%COMP%]   .page-link.active[_ngcontent-%COMP%] {\n  background-color: #f5f0ff;\n  border: 1px solid #7c3aed;\n  color: #7c3aed;\n  font-weight: 600;\n}\n.modern-pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:hover {\n  background-color: #f2f2f2;\n  color: #000;\n}\n.modern-pagination[_ngcontent-%COMP%]   .page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n}\n.form-select[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 2.25rem 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--bs-body-color);\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background-color: var(--bs-body-bg);\n  background-image: var(--bs-form-select-bg-img), var(--bs-form-select-bg-icon, none);\n  background-repeat: no-repeat;\n  background-position: right 0.75rem center;\n  background-size: 16px 12px;\n  border: var(--bs-border-width) solid var(--bs-border-color);\n  border-radius: var(--bs-border-radius);\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  cursor: pointer;\n}\n/*# sourceMappingURL=my-transactions.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyTransactionsComponent, { className: "MyTransactionsComponent", filePath: "src/app/user-portal/pages/my-transactions/my-transactions.component.ts", lineNumber: 15 });
})();
export {
  MyTransactionsComponent
};
//# sourceMappingURL=chunk-4OAQPVM4.js.map
