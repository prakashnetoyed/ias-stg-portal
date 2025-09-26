import './polyfills.server.mjs';
import {
  E
} from "./chunk-XHZ5YG4K.mjs";
import "./chunk-DPV27543.mjs";
import {
  FormBuilder,
  FormsModule,
  NgSelectOption,
  ReactiveFormsModule,
  Validators,
  ɵNgSelectMultipleOption
} from "./chunk-VTTRVRAU.mjs";
import {
  environment
} from "./chunk-SJMEGSB4.mjs";
import {
  HttpClient
} from "./chunk-324F4CRK.mjs";
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf
} from "./chunk-6GREAR27.mjs";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-KVDSLLK3.mjs";
import "./chunk-24VIC3GD.mjs";

// src/app/IAS-portal/pages/my-transaction/my-transaction.component.ts
var _c0 = ["errorToast"];
var _c1 = () => [];
function MyTransactionComponent_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 23);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "div", 24)(19, "button", 25);
    \u0275\u0275listener("click", function MyTransactionComponent_tr_33_Template_button_click_19_listener() {
      const user_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.downloadReceipt(user_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 26)(21, "mask", 27);
    \u0275\u0275element(22, "rect", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "g", 29);
    \u0275\u0275element(24, "path", 30);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const user_r3 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r3.currentPage - 1) * ctx_r3.pageSize + i_r5 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("IASCA", user_r3.userOrderDetails.orderNumber == null ? null : user_r3.userOrderDetails.orderNumber.slice(-10), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r3.createdBy == null ? null : user_r3.createdBy.doptOfficer == null ? null : user_r3.createdBy.doptOfficer.englishName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", user_r3.status === "Success" ? "Success" : "Failed");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r3.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r3.txnAmount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r3.txnDate ? \u0275\u0275pipeBind2(14, 8, user_r3.txnDate, "dd-MM-yyyy") : "Not found");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r3.userOrderDetails.memberShip);
  }
}
function MyTransactionComponent_li_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 15)(1, "a", 16);
    \u0275\u0275listener("click", function MyTransactionComponent_li_40_Template_a_click_1_listener() {
      const i_r7 = \u0275\u0275restoreView(_r6).index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.changePage(i_r7 + 1));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r7 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("active", i_r7 + 1 === ctx_r3.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r7 + 1);
  }
}
var MyTransactionComponent = class _MyTransactionComponent {
  constructor(fb, http) {
    this.fb = fb;
    this.http = http;
    this.users = [];
    this.searchText = "";
    this.pageSize = 5;
    this.currentPage = 1;
    this.previewUrl = null;
    this.toastMessage = "";
    this.base64Image = null;
    this.pagination = {
      total: 0,
      page: 1,
      limit: this.pageSize
    };
    this.newsForm = this.fb.group({
      title: ["", [Validators.required]],
      // required
      newsLink: ["", [Validators.required]],
      // required
      description: ["", [Validators.required]]
      // required
    });
  }
  ngOnInit() {
    this.fetchtransactions();
  }
  // ✅ Fetch news with pagination
  fetchtransactions(page = 1, limit = this.pageSize) {
    this.http.get(`${environment.apiUrl}/orders?populate=userOrderDetails&populate=createdBy&page=${page}&limit=${limit}`).subscribe({
      next: (res) => {
        if (res.success && res.data?.data) {
          this.users = res.data.data;
          this.pagination = res.data.pagination;
          this.currentPage = page;
        }
      },
      error: (err) => {
        console.error("Error fetching news:", err);
        this.showErrorToast("Failed to fetch news");
      }
    });
  }
  // ✅ Pagination controls
  get totalPages() {
    return Math.ceil(this.pagination.total / this.pagination.limit);
  }
  changePage(page) {
    if (page >= 1 && page <= this.totalPages) {
      this.fetchtransactions(page, this.pageSize);
    }
  }
  goPrevious() {
    this.changePage(this.currentPage - 1);
  }
  goNext() {
    this.changePage(this.currentPage + 1);
  }
  onPageSizeChange(event) {
    this.pageSize = +event.target.value;
    this.currentPage = 1;
    this.fetchtransactions(this.currentPage, this.pageSize);
  }
  downloadReceipt(tx) {
    const doc = new E();
    const primaryColor = [44, 62, 80];
    const secondaryColor = [100, 100, 100];
    const borderColor = [220, 220, 220];
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Indian Administrative", 14, 15);
    doc.text("Service Central Association", 14, 22);
    doc.setDrawColor(borderColor[0], borderColor[1], borderColor[2]);
    doc.setLineWidth(0.2);
    doc.roundedRect(10, 30, 190, 50, 3, 3);
    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    doc.text("Billed to", 14, 38);
    doc.setFontSize(10);
    doc.text(`${tx?.createdBy?.doptOfficer?.englishName || "N/A"}`, 14, 45);
    doc.text(`${tx?.createdBy?.email || "N/A"}`, 14, 51);
    doc.text(`${tx?.createdBy?.mobileNumber || "N/A"}`, 14, 57);
    const startX = 120;
    doc.setFontSize(10);
    doc.text(`Bank Ref ID: ${tx?.bankTxnId || "N/A"}`, startX, 38);
    doc.text(`Payment Time: ${tx?.txnDate || "N/A"}`, startX, 45);
    doc.text(`Payment Method: ${tx?.paymentMode || "N/A"}`, startX, 51);
    doc.text(`Bank Name: ${tx?.bankName || "N/A"}`, startX, 57);
    doc.setFontSize(9);
    doc.text(`Transaction ID: ${tx?.txnId || "N/A"}`, 14, 72);
    let posY = 90;
    doc.setFillColor(245, 245, 245);
    doc.rect(10, posY, 190, 10, "F");
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.text("ITEM DETAIL", 14, posY + 7);
    doc.text("AMOUNT", 180, posY + 7, { align: "right" });
    posY += 15;
    doc.setFont("helvetica", "normal");
    doc.text("Membership Fees", 14, posY);
    doc.text(`Rs ${tx?.txnAmount || 0}`, 180, posY, { align: "right" });
    doc.setFontSize(9);
    doc.setTextColor(120);
    doc.text("Annual Membership", 14, posY + 6);
    posY += 20;
    doc.setDrawColor(200, 200, 200);
    doc.line(10, posY, 200, posY);
    posY += 10;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text("Total :", 150, posY);
    doc.text(`Rs ${tx?.txnAmount || 0}`, 180, posY, { align: "right" });
    posY += 100;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text("Treasurer", 180, posY, { align: "right" });
    doc.setFontSize(8);
    doc.text("Indian Administrative", 180, posY + 6, { align: "right" });
    doc.text("Service Central Association", 180, posY + 12, { align: "right" });
    doc.setFontSize(9);
    doc.setTextColor(120);
    doc.text("This is a system generated invoice, in case of any query contact us.", 105, 285, { align: "center" });
    doc.save(`Receipt_${tx?.bankTxnId || "txn"}.pdf`);
  }
  // ✅ Toast methods
  showErrorToast(message) {
    this.toastMessage = message;
    const toastElement = this.errorToast.nativeElement;
    toastElement.classList.remove("bg-success");
    toastElement.classList.add("bg-danger");
    const toast = new bootstrap.Toast(toastElement);
    toast.show();
  }
  showSuccessToast(message) {
    this.toastMessage = message;
    const toastElement = this.errorToast.nativeElement;
    toastElement.classList.remove("bg-danger");
    toastElement.classList.add("bg-success");
    const toast = new bootstrap.Toast(toastElement);
    toast.show();
  }
  static {
    this.\u0275fac = function MyTransactionComponent_Factory(t) {
      return new (t || _MyTransactionComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyTransactionComponent, selectors: [["app-my-transaction"]], viewQuery: function MyTransactionComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.errorToast = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 52, vars: 11, consts: [["errorToast", ""], [1, "toast-container", "position-fixed", "top-0", "end-0", "p-3"], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "align-items-center", "text-bg-danger", "border-0"], [1, "d-flex"], [1, "toast-body"], ["type", "button", "data-bs-dismiss", "toast", "aria-label", "Close", 1, "btn-close", "btn-close-white", "me-2", "m-auto"], [1, "mt-4", "tableheading"], [1, "d-flex", "justify-content-between", "align-items-center", "flex-wrap", "mb-3"], [1, "mb-1"], [1, "search-add-div", "d-flex", "align-items-center", "gap-3"], [1, "table-responsive", "custom-table", "overflow-visible"], [1, "table", "align-middle", "mb-0"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-end", "align-items-center", "gap-2", "mt-3"], [1, "pagination", "modern-pagination", "mb-0"], [1, "page-item"], [1, "page-link", 3, "click"], ["class", "page-item", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center"], [1, "form-select", "form-select-sm", "w-auto", 3, "change"], ["value", "5", 3, "selected"], ["value", "10", 3, "selected"], ["value", "20", 3, "selected"], [1, "badge", 3, "ngClass"], [1, "dropdown"], ["type", "button", 1, "btn", 2, "cursor", "pointer", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "25", "height", "25", "viewBox", "0 0 25 25", "fill", "none"], ["id", "mask0_52081_7010", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "25", "height", "25", 2, "mask-type", "alpha"], ["x", "0.5", "y", "0.5", "width", "24", "height", "24", "fill", "#D9D9D9"], ["mask", "url(#mask0_52081_7010)"], ["d", "M12.5 16.5L7.5 11.5L8.9 10.05L11.5 12.65V4.5H13.5V12.65L16.1 10.05L17.5 11.5L12.5 16.5ZM6.5 20.5C5.95 20.5 5.47917 20.3042 5.0875 19.9125C4.69583 19.5208 4.5 19.05 4.5 18.5V15.5H6.5V18.5H18.5V15.5H20.5V18.5C20.5 19.05 20.3042 19.5208 19.9125 19.9125C19.5208 20.3042 19.05 20.5 18.5 20.5H6.5Z", "fill", "#1C1B1F"]], template: function MyTransactionComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2, 0)(3, "div", 3)(4, "div", 4);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "button", 5);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "h5", 8);
        \u0275\u0275text(10, "Member Transactions");
        \u0275\u0275elementEnd();
        \u0275\u0275element(11, "div", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 10)(13, "table", 11)(14, "thead")(15, "tr")(16, "th");
        \u0275\u0275text(17, "S.no");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "th");
        \u0275\u0275text(19, "Membership ID");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "th");
        \u0275\u0275text(21, "Full Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "th");
        \u0275\u0275text(23, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "th");
        \u0275\u0275text(25, "Amount");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "th");
        \u0275\u0275text(27, "Transaction Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "th");
        \u0275\u0275text(29, "Membership");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "th");
        \u0275\u0275text(31, "Action");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(32, "tbody");
        \u0275\u0275template(33, MyTransactionComponent_tr_33_Template, 25, 11, "tr", 12);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "div", 13)(35, "nav")(36, "ul", 14)(37, "li", 15)(38, "a", 16);
        \u0275\u0275listener("click", function MyTransactionComponent_Template_a_click_38_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.goPrevious());
        });
        \u0275\u0275text(39, "\u2039");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(40, MyTransactionComponent_li_40_Template, 3, 3, "li", 17);
        \u0275\u0275elementStart(41, "li", 15)(42, "a", 16);
        \u0275\u0275listener("click", function MyTransactionComponent_Template_a_click_42_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.goNext());
        });
        \u0275\u0275text(43, "\u203A");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(44, "div", 18)(45, "select", 19);
        \u0275\u0275listener("change", function MyTransactionComponent_Template_select_change_45_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onPageSizeChange($event));
        });
        \u0275\u0275elementStart(46, "option", 20);
        \u0275\u0275text(47, "5 /Page");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "option", 21);
        \u0275\u0275text(49, "10 /Page");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "option", 22);
        \u0275\u0275text(51, "20 /Page");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", ctx.toastMessage, " ");
        \u0275\u0275advance(28);
        \u0275\u0275property("ngForOf", ctx.users);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("disabled", ctx.currentPage === 1);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(10, _c1).constructor(ctx.totalPages));
        \u0275\u0275advance();
        \u0275\u0275classProp("disabled", ctx.currentPage === ctx.totalPages);
        \u0275\u0275advance(5);
        \u0275\u0275property("selected", ctx.pageSize === 5);
        \u0275\u0275advance(2);
        \u0275\u0275property("selected", ctx.pageSize === 10);
        \u0275\u0275advance(2);
        \u0275\u0275property("selected", ctx.pageSize === 20);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, ReactiveFormsModule], styles: ['\n\n.main-dashboard-component[_ngcontent-%COMP%] {\n  margin-bottom: 60px;\n}\n.main-dashboard-component[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--Text, #211b3a);\n  font-family: Urbanist;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 28px;\n}\n.cards-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n.cards-grid[_ngcontent-%COMP%]   .stats-card[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background: #fff;\n  padding: 16px;\n}\n.cards-grid[_ngcontent-%COMP%]   .stats-card[_ngcontent-%COMP%]   .card-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.cards-grid[_ngcontent-%COMP%]   .stats-card[_ngcontent-%COMP%]   .card-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--Text, #211b3a);\n  font-family: Urbanist;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: 0.15px;\n  margin: 0px;\n}\n.tableheading[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #211b3a;\n  font-family: Urbanist;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 28px;\n}\n.tableheading[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%] {\n  min-width: 300px;\n  border-radius: 8px;\n  padding: 8px 12px;\n  overflow: hidden;\n  color: #868686;\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 20px;\n  letter-spacing: 0.25px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-family: Urbanist;\n  color: #492fb2;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 16px;\n  letter-spacing: 0.07px;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #333;\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 150%;\n  letter-spacing: 0.25px;\n}\n.custom-table[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n}\n.custom-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #eee;\n  padding: 12px;\n}\n.badge[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  font-family: "Noto Sans";\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: var(--Line-Heights-10, 20px);\n  letter-spacing: var(--Letter-Spacing-4, 0.25px);\n  padding: 6px 12px;\n}\n.Success[_ngcontent-%COMP%] {\n  color: #3C9718;\n  background: #EDF7E6;\n}\n.Failed[_ngcontent-%COMP%] {\n  color: #b72424;\n  background: #fee7e7;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid #c6c6c6;\n  background: #fff;\n  cursor: pointer;\n  padding: 8px 0px;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .blue[_ngcontent-%COMP%] {\n  color: #492fb2;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .black[_ngcontent-%COMP%] {\n  color: #211b3a;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%] {\n  color: #b7131a;\n}\n.btn-check[_ngcontent-%COMP%]:checked    + .btn[_ngcontent-%COMP%], .btn.active[_ngcontent-%COMP%], .btn.show[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:first-child:active, [_ngcontent-%COMP%]:not(.btn-check)    + .btn[_ngcontent-%COMP%]:active {\n  border-color: transparent;\n}\n.offcanvas[_ngcontent-%COMP%] {\n  width: 520px;\n}\n.click-here[_ngcontent-%COMP%] {\n  color: var(--gov-in-purple, #290874);\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px;\n}\n.upload-box[_ngcontent-%COMP%] {\n  border-style: dashed;\n  cursor: pointer;\n  transition: background 0.3s;\n}\n.upload-box[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.form-label[_ngcontent-%COMP%] {\n  color: var(--Text-Dark, #212121);\n  font-family: Urbanist;\n  font-size: var(--Font-Size-2, 14px);\n  font-style: normal;\n  font-weight: 500;\n  line-height: var(--Line-Heights-10, 20px);\n  letter-spacing: var(--Letter-Spacing-2, 0.1px);\n}\n.upload-wrapper[_ngcontent-%COMP%]   .upload-box[_ngcontent-%COMP%] {\n  display: block;\n  border: 2px dashed #AFAFAF;\n  border-radius: 10px;\n  padding: 40px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  background-color: #f8f9fa;\n}\n.upload-wrapper[_ngcontent-%COMP%]   .upload-box[_ngcontent-%COMP%]:hover {\n  background-color: #e9f3ff;\n}\n.upload-wrapper[_ngcontent-%COMP%]   .upload-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: #6c757d;\n  justify-content: space-between;\n}\n.upload-wrapper[_ngcontent-%COMP%]   .preview-box[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.upload-wrapper[_ngcontent-%COMP%]   .preview-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 200px;\n  border-radius: 10px;\n  margin-top: 10px;\n}\n.modern-pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%] {\n  margin: 0 3px;\n}\n.modern-pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  border-radius: 8px !important;\n  border: 1px solid #ddd;\n  padding: 6px 12px;\n  color: #444;\n  background-color: #fff;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.modern-pagination[_ngcontent-%COMP%]   .page-link.active[_ngcontent-%COMP%] {\n  background-color: #f5f0ff;\n  border: 1px solid #7c3aed;\n  color: #7c3aed;\n  font-weight: 600;\n}\n.modern-pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:hover {\n  background-color: #f2f2f2;\n  color: #000;\n}\n.modern-pagination[_ngcontent-%COMP%]   .page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n}\n.file-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #dbe3ff;\n  padding: 12px 20px;\n  border-radius: 12px;\n  max-width: 100%;\n  font-family: Arial, sans-serif;\n}\n.file-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: #0b1e4a;\n  font-weight: 500;\n}\n.radio-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid #0b1e4a;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.radio-icon[_ngcontent-%COMP%]::before {\n  content: "";\n  width: 8px;\n  height: 8px;\n  background-color: #0b1e4a;\n  border-radius: 50%;\n}\n.view-icon[_ngcontent-%COMP%] {\n  color: #0b1e4a;\n  font-size: 18px;\n  cursor: pointer;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  z-index: 1040 !important;\n}\n.modal[_ngcontent-%COMP%] {\n  z-index: 1055 !important;\n}\n/*# sourceMappingURL=my-transaction.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyTransactionComponent, { className: "MyTransactionComponent", filePath: "src/app/IAS-portal/pages/my-transaction/my-transaction.component.ts", lineNumber: 15 });
})();
export {
  MyTransactionComponent
};
//# sourceMappingURL=chunk-QCEBNTSX.mjs.map
