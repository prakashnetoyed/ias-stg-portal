import './polyfills.server.mjs';
import {
  environment
} from "./chunk-SJMEGSB4.mjs";
import {
  HttpClient,
  HttpHeaders
} from "./chunk-36N2KB5Q.mjs";
import {
  CommonModule,
  NgForOf
} from "./chunk-2GLKF4UT.mjs";
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-QKHTRG4V.mjs";
import "./chunk-24VIC3GD.mjs";

// src/app/user-portal/pages/user-members/user-members.component.ts
var _c0 = () => [];
function UserMembersComponent_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275element(6, "img", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r2.currentPage - 1) * ctx_r2.pageSize + i_r2 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r1.doptOfficer == null ? null : user_r1.doptOfficer.englishName);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", user_r1.doptOfficer == null ? null : user_r1.doptOfficer.profilePic, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r1 == null ? null : user_r1.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r1.mobileNumber ? user_r1.mobileNumber : "NA");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r1.doptOfficer == null ? null : user_r1.doptOfficer.allotmentYear);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r1.doptOfficer == null ? null : user_r1.doptOfficer.cadre.name);
  }
}
function UserMembersComponent_li_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 8)(1, "a", 9);
    \u0275\u0275listener("click", function UserMembersComponent_li_30_Template_a_click_1_listener() {
      const i_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.changePage(i_r5 + 1));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r5 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("active", i_r5 + 1 === ctx_r2.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r5 + 1);
  }
}
var UserMembersComponent = class _UserMembersComponent {
  constructor(http) {
    this.http = http;
    this.toastMessage = "";
    this.users = [];
    this.pageSize = 5;
    this.currentPage = 1;
    this.pagination = {
      total: 0,
      page: 1,
      limit: 10
    };
  }
  ngOnInit() {
    this.loadUsers();
  }
  loadUsers(page = this.currentPage, limit = this.pageSize) {
    const token = localStorage.getItem("authToken");
    console.log(token);
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    });
    this.http.get(`${environment.apiUrl}/admin/users?page=${page}&limit=${limit}`, { headers }).subscribe({
      next: (res) => {
        console.log(res);
        this.users = res.data.data;
        this.pagination.total = res.data.pagination.total;
        this.pagination.limit = limit;
        this.pagination.page = page;
        console.log(this.users);
      },
      error: (err) => {
        console.error("Error fetching Users:", err);
      }
    });
  }
  get totalPages() {
    return Math.ceil(this.pagination.total / this.pagination.limit);
  }
  changePage(page) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadUsers(this.currentPage, this.pageSize);
    }
  }
  // 👈 previous
  goPrevious() {
    this.changePage(this.currentPage - 1);
  }
  // 👈 next
  goNext() {
    this.changePage(this.currentPage + 1);
  }
  onPageSizeChange(event) {
    this.pageSize = +event.target.value;
    this.currentPage = 1;
    this.loadUsers(this.currentPage, this.pageSize);
  }
  static {
    this.\u0275fac = function UserMembersComponent_Factory(t) {
      return new (t || _UserMembersComponent)(\u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserMembersComponent, selectors: [["app-user-members"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 42, vars: 8, consts: [[1, "tableheading"], [1, "d-flex", "justify-content-between", "align-items-center", "flex-wrap", "mb-3"], [1, "mb-1"], [1, "table-responsive", "custom-table"], [1, "table", "align-middle", "mb-0"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-end", "align-items-center", "gap-2", "mt-3"], [1, "pagination", "modern-pagination", "mb-0"], [1, "page-item"], [1, "page-link", 3, "click"], ["class", "page-item", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center"], [1, "form-select", "form-select-sm", "w-auto", 3, "change"], ["value", "5", 3, "selected"], ["value", "10", 3, "selected"], ["value", "20", 3, "selected"], ["alt", "profile pic", 1, "tableprofile", 3, "src"]], template: function UserMembersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h5", 2);
        \u0275\u0275text(3, "Members");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 3)(5, "table", 4)(6, "thead")(7, "tr")(8, "th");
        \u0275\u0275text(9, "S.no");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "th");
        \u0275\u0275text(11, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "th");
        \u0275\u0275text(13, "Photo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "th");
        \u0275\u0275text(15, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "th");
        \u0275\u0275text(17, "Mobile");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "th");
        \u0275\u0275text(19, "Batch Year");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "th");
        \u0275\u0275text(21, "Cadre");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "tbody");
        \u0275\u0275template(23, UserMembersComponent_tr_23_Template, 15, 7, "tr", 5);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "div", 6)(25, "nav")(26, "ul", 7)(27, "li", 8)(28, "a", 9);
        \u0275\u0275listener("click", function UserMembersComponent_Template_a_click_28_listener() {
          return ctx.goPrevious();
        });
        \u0275\u0275text(29, "\u2039");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(30, UserMembersComponent_li_30_Template, 3, 3, "li", 10);
        \u0275\u0275elementStart(31, "li", 8)(32, "a", 9);
        \u0275\u0275listener("click", function UserMembersComponent_Template_a_click_32_listener() {
          return ctx.goNext();
        });
        \u0275\u0275text(33, "\u203A");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(34, "div", 11)(35, "select", 12);
        \u0275\u0275listener("change", function UserMembersComponent_Template_select_change_35_listener($event) {
          return ctx.onPageSizeChange($event);
        });
        \u0275\u0275elementStart(36, "option", 13);
        \u0275\u0275text(37, "5 /Page");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "option", 14);
        \u0275\u0275text(39, "10 /Page");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "option", 15);
        \u0275\u0275text(41, "20 /Page");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(23);
        \u0275\u0275property("ngForOf", ctx.users);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("disabled", ctx.currentPage === 1);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(7, _c0).constructor(ctx.totalPages));
        \u0275\u0275advance(6);
        \u0275\u0275property("selected", ctx.pageSize === 5);
        \u0275\u0275advance(2);
        \u0275\u0275property("selected", ctx.pageSize === 10);
        \u0275\u0275advance(2);
        \u0275\u0275property("selected", ctx.pageSize === 20);
      }
    }, dependencies: [CommonModule, NgForOf], styles: ['\n\n.tableheading[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #211b3a;\n  font-family: Urbanist;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 28px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-family: Urbanist;\n  color: #492fb2;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 16px;\n  letter-spacing: 0.07px;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #333;\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 150%;\n  letter-spacing: 0.25px;\n}\n.custom-table[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n}\n.custom-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #eee;\n  padding: 12px;\n}\n.tableprofile[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  object-fit: cover;\n  object-position: top;\n}\n.badge[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  font-family: "Noto Sans";\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: var(--Line-Heights-10, 20px);\n  letter-spacing: var(--Letter-Spacing-4, 0.25px);\n  padding: 6px 12px;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid #c6c6c6;\n  background: #fff;\n  cursor: pointer;\n  padding: 8px 0px;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .blue[_ngcontent-%COMP%] {\n  color: #3C9718;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .black[_ngcontent-%COMP%] {\n  color: #211b3a;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%] {\n  color: #b7131a;\n}\n.btn-check[_ngcontent-%COMP%]:checked    + .btn[_ngcontent-%COMP%], .btn.active[_ngcontent-%COMP%], .btn.show[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:first-child:active, [_ngcontent-%COMP%]:not(.btn-check)    + .btn[_ngcontent-%COMP%]:active {\n  border-color: transparent;\n}\n.modern-pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%] {\n  margin: 0 3px;\n}\n.modern-pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  border-radius: 8px !important;\n  border: 1px solid #ddd;\n  padding: 6px 12px;\n  color: #444;\n  background-color: #fff;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.modern-pagination[_ngcontent-%COMP%]   .page-link.active[_ngcontent-%COMP%] {\n  background-color: #f5f0ff;\n  border: 1px solid #7c3aed;\n  color: #7c3aed;\n  font-weight: 600;\n}\n.modern-pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:hover {\n  background-color: #f2f2f2;\n  color: #000;\n}\n.modern-pagination[_ngcontent-%COMP%]   .page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n}\n.form-select[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 2.25rem 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--bs-body-color);\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background-color: var(--bs-body-bg);\n  background-image: var(--bs-form-select-bg-img), var(--bs-form-select-bg-icon, none);\n  background-repeat: no-repeat;\n  background-position: right 0.75rem center;\n  background-size: 16px 12px;\n  border: var(--bs-border-width) solid var(--bs-border-color);\n  border-radius: var(--bs-border-radius);\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  cursor: pointer;\n}\n/*# sourceMappingURL=user-members.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserMembersComponent, { className: "UserMembersComponent", filePath: "src/app/user-portal/pages/user-members/user-members.component.ts", lineNumber: 13 });
})();
export {
  UserMembersComponent
};
//# sourceMappingURL=chunk-7EK7IOWG.mjs.map
