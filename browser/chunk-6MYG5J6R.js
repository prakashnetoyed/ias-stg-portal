import {
  FormsModule,
  NgSelectOption,
  ɵNgSelectMultipleOption
} from "./chunk-W36CPE6Z.js";
import {
  environment
} from "./chunk-WYW2S4QW.js";
import {
  CommonModule,
  DatePipe,
  NgForOf,
  NgIf
} from "./chunk-HMLSYQRE.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
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
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PY442ZFB.js";
import {
  __async
} from "./chunk-ASLTLD6L.js";

// src/app/IAS-portal/pages/feedbacks/feedbacks.component.ts
var _c0 = () => [];
function FeedbacksComponent_table_5_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4, "Guest");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span", 18);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "div", 19)(19, "button", 20);
    \u0275\u0275text(20, " \u22EE ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "ul", 21)(22, "li")(23, "a", 22);
    \u0275\u0275listener("click", function FeedbacksComponent_table_5_tr_20_Template_a_click_23_listener() {
      const user_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.deleteUser(user_r3.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 23)(25, "mask", 24);
    \u0275\u0275element(26, "rect", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "g", 26);
    \u0275\u0275element(28, "path", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(29, " Delete");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const user_r3 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r3.currentPage - 1) * ctx_r3.pageSize + i_r5 + 1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(user_r3.firstName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 6, user_r3.createdAt, "short"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r3.mobileNumber);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", user_r3.message, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r3.email);
  }
}
function FeedbacksComponent_table_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 16)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "S.no");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "User Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Created At");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Mobile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Feedback");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275template(20, FeedbacksComponent_table_5_tr_20_Template, 30, 9, "tr", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(20);
    \u0275\u0275property("ngForOf", ctx_r3.users);
  }
}
function FeedbacksComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275element(1, "img", 29);
    \u0275\u0275elementEnd();
  }
}
function FeedbacksComponent_li_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 8)(1, "a", 9);
    \u0275\u0275listener("click", function FeedbacksComponent_li_14_Template_a_click_1_listener() {
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
var FeedbacksComponent = class _FeedbacksComponent {
  constructor() {
    this.users = [];
    this.searchText = "";
    this.pageSize = 5;
    this.currentPage = 1;
    this.pagination = {
      total: 0,
      page: 1,
      limit: this.pageSize
    };
  }
  ngOnInit() {
    this.loadUsers(this.currentPage, this.pageSize);
  }
  loadUsers() {
    return __async(this, arguments, function* (page = 1, limit = this.pageSize) {
      try {
        const token = localStorage.getItem("authToken");
        if (!token)
          throw new Error("Auth token not found in localStorage");
        const response = yield fetch(`${environment.apiUrl}/contact-us?page=${page}&limit=${limit}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        });
        if (!response.ok)
          throw new Error("Failed to fetch data");
        const result = yield response.json();
        this.users = result.data?.data || [];
        this.pagination = result.data?.pagination || { total: 0, page, limit };
        this.currentPage = page;
        this.pageSize = limit;
        console.log("Fetched Users:", this.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    });
  }
  // total pages (from API response)
  get totalPages() {
    return Math.ceil(this.pagination.total / this.pagination.limit);
  }
  changePage(page) {
    if (page >= 1 && page <= this.totalPages) {
      this.loadUsers(page, this.pageSize);
    }
  }
  goPrevious() {
    if (this.currentPage > 1) {
      this.changePage(this.currentPage - 1);
    }
  }
  goNext() {
    if (this.currentPage < this.totalPages) {
      this.changePage(this.currentPage + 1);
    }
  }
  onPageSizeChange(event) {
    this.pageSize = +event.target.value;
    this.currentPage = 1;
    this.loadUsers(this.currentPage, this.pageSize);
  }
  deleteUser(userId) {
    return __async(this, null, function* () {
      try {
        const token = localStorage.getItem("authToken");
        if (!token)
          throw new Error("Auth token not found in localStorage");
        const response = yield fetch(
          `${environment.apiUrl}/contact-us/${userId}`,
          // ✅ correct URL
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json"
            }
          }
        );
        if (!response.ok)
          throw new Error("Failed to delete user");
        const result = yield response.json();
        console.log("User deleted:", result);
        this.loadUsers(this.currentPage, this.pageSize);
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    });
  }
  static {
    this.\u0275fac = function FeedbacksComponent_Factory(t) {
      return new (t || _FeedbacksComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeedbacksComponent, selectors: [["app-feedbacks"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 26, vars: 11, consts: [["noUsers", ""], [1, "mt-4", "tableheading"], [1, "d-flex", "justify-content-between", "align-items-center", "flex-wrap", "mb-3"], [1, "mb-1"], [1, "table-responsive", "custom-table", "overflow-visible"], ["class", "table align-middle mb-0", 4, "ngIf", "ngIfElse"], [1, "d-flex", "justify-content-end", "align-items-center", "gap-2", "mt-3"], [1, "pagination", "modern-pagination", "mb-0"], [1, "page-item"], [1, "page-link", 3, "click"], ["class", "page-item", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center"], [1, "form-select", "form-select-sm", "w-auto", 3, "change"], ["value", "5", 3, "selected"], ["value", "10", 3, "selected"], ["value", "20", 3, "selected"], [1, "table", "align-middle", "mb-0"], [4, "ngFor", "ngForOf"], [1, "badge"], [1, "dropdown"], ["type", "button", "data-bs-toggle", "dropdown", 1, "btn"], [1, "dropdown-menu", "shadow"], [1, "dropdown-item", "red", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none"], ["id", "mask0_50905_5148", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "20", "height", "20", 2, "mask-type", "alpha"], ["width", "20", "height", "20", "fill", "#D9D9D9"], ["mask", "url(#mask0_50905_5148)"], ["d", "M14.5002 10.8335L13.3335 9.66683L15.0627 7.91683L13.3335 6.18766L14.5002 5.00016L16.2502 6.75016L17.9793 5.00016L19.1668 6.18766L17.4168 7.91683L19.1668 9.66683L17.9793 10.8335L16.2502 9.10433L14.5002 10.8335ZM7.50016 10.0002C6.5835 10.0002 5.79877 9.67377 5.146 9.021C4.49322 8.36822 4.16683 7.5835 4.16683 6.66683C4.16683 5.75016 4.49322 4.96544 5.146 4.31266C5.79877 3.65989 6.5835 3.3335 7.50016 3.3335C8.41683 3.3335 9.20155 3.65989 9.85433 4.31266C10.5071 4.96544 10.8335 5.75016 10.8335 6.66683C10.8335 7.5835 10.5071 8.36822 9.85433 9.021C9.20155 9.67377 8.41683 10.0002 7.50016 10.0002ZM0.833496 16.6668V14.3335C0.833496 13.8613 0.955024 13.4272 1.19808 13.0314C1.44114 12.6356 1.76405 12.3335 2.16683 12.1252C3.02794 11.6946 3.90294 11.3717 4.79183 11.1564C5.68072 10.9411 6.5835 10.8335 7.50016 10.8335C8.41683 10.8335 9.31961 10.9411 10.2085 11.1564C11.0974 11.3717 11.9724 11.6946 12.8335 12.1252C13.2363 12.3335 13.5592 12.6356 13.8022 13.0314C14.0453 13.4272 14.1668 13.8613 14.1668 14.3335V16.6668H0.833496ZM2.50016 15.0002H12.5002V14.3335C12.5002 14.1807 12.462 14.0418 12.3856 13.9168C12.3092 13.7918 12.2085 13.6946 12.0835 13.6252C11.3335 13.2502 10.5766 12.9689 9.81266 12.7814C9.04877 12.5939 8.27794 12.5002 7.50016 12.5002C6.72239 12.5002 5.95155 12.5939 5.18766 12.7814C4.42377 12.9689 3.66683 13.2502 2.91683 13.6252C2.79183 13.6946 2.69114 13.7918 2.61475 13.9168C2.53836 14.0418 2.50016 14.1807 2.50016 14.3335V15.0002ZM7.50016 8.3335C7.9585 8.3335 8.35086 8.1703 8.67725 7.84391C9.00364 7.51752 9.16683 7.12516 9.16683 6.66683C9.16683 6.2085 9.00364 5.81613 8.67725 5.48975C8.35086 5.16336 7.9585 5.00016 7.50016 5.00016C7.04183 5.00016 6.64947 5.16336 6.32308 5.48975C5.99669 5.81613 5.8335 6.2085 5.8335 6.66683C5.8335 7.12516 5.99669 7.51752 6.32308 7.84391C6.64947 8.1703 7.04183 8.3335 7.50016 8.3335Z", "fill", "#B7131A"], [1, "text-center", "p-4", "d-flex", "align-items-center", "justify-content-center"], ["src", "../../../../assets/icons/empty-state.png", "alt", "empty state"]], template: function FeedbacksComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h5", 3);
        \u0275\u0275text(3, "Feedbacks");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 4);
        \u0275\u0275template(5, FeedbacksComponent_table_5_Template, 21, 1, "table", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, FeedbacksComponent_ng_template_6_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(8, "div", 6)(9, "nav")(10, "ul", 7)(11, "li", 8)(12, "a", 9);
        \u0275\u0275listener("click", function FeedbacksComponent_Template_a_click_12_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.goPrevious());
        });
        \u0275\u0275text(13, "\u2039");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(14, FeedbacksComponent_li_14_Template, 3, 3, "li", 10);
        \u0275\u0275elementStart(15, "li", 8)(16, "a", 9);
        \u0275\u0275listener("click", function FeedbacksComponent_Template_a_click_16_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.goNext());
        });
        \u0275\u0275text(17, "\u203A");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(18, "div", 11)(19, "select", 12);
        \u0275\u0275listener("change", function FeedbacksComponent_Template_select_change_19_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onPageSizeChange($event));
        });
        \u0275\u0275elementStart(20, "option", 13);
        \u0275\u0275text(21, "5 /Page");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "option", 14);
        \u0275\u0275text(23, "10 /Page");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "option", 15);
        \u0275\u0275text(25, "20 /Page");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        const noUsers_r8 = \u0275\u0275reference(7);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ctx.users && ctx.users.length)("ngIfElse", noUsers_r8);
        \u0275\u0275advance(6);
        \u0275\u0275classProp("disabled", ctx.currentPage === 1);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(10, _c0).constructor(ctx.totalPages));
        \u0275\u0275advance();
        \u0275\u0275classProp("disabled", ctx.currentPage === ctx.totalPages);
        \u0275\u0275advance(5);
        \u0275\u0275property("selected", ctx.pageSize === 5);
        \u0275\u0275advance(2);
        \u0275\u0275property("selected", ctx.pageSize === 10);
        \u0275\u0275advance(2);
        \u0275\u0275property("selected", ctx.pageSize === 20);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption], styles: ["\n\n.main-dashboard-component[_ngcontent-%COMP%] {\n  margin-bottom: 60px;\n}\n.main-dashboard-component[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--Text, #211b3a);\n  font-family: Urbanist;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 28px;\n}\n.tableheading[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #211b3a;\n  font-family: Urbanist;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 28px;\n}\n.tableheading[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%] {\n  max-width: 300px;\n  border-radius: 8px;\n  padding: 8px 12px;\n  overflow: hidden;\n  color: #868686;\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 20px;\n  letter-spacing: 0.25px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-family: Urbanist;\n  color: #492fb2;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 16px;\n  letter-spacing: 0.07px;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #333;\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 150%;\n  letter-spacing: 0.25px;\n}\n.custom-table[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n}\n.custom-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #eee;\n  padding: 12px;\n}\n.badge[_ngcontent-%COMP%] {\n  color: #333;\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 150%;\n  letter-spacing: 0.25px;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid #c6c6c6;\n  background: #fff;\n  cursor: pointer;\n  padding: 8px 0px;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .blue[_ngcontent-%COMP%] {\n  color: #492fb2;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .black[_ngcontent-%COMP%] {\n  color: #211b3a;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%] {\n  color: #b7131a;\n}\n.btn-check[_ngcontent-%COMP%]:checked    + .btn[_ngcontent-%COMP%], .btn.active[_ngcontent-%COMP%], .btn.show[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:first-child:active, [_ngcontent-%COMP%]:not(.btn-check)    + .btn[_ngcontent-%COMP%]:active {\n  border-color: transparent;\n}\n/*# sourceMappingURL=feedbacks.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeedbacksComponent, { className: "FeedbacksComponent", filePath: "src/app/IAS-portal/pages/feedbacks/feedbacks.component.ts", lineNumber: 13 });
})();
export {
  FeedbacksComponent
};
//# sourceMappingURL=chunk-6MYG5J6R.js.map
