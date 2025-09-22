import './polyfills.server.mjs';
import {
  AccountActivityStatus
} from "./chunk-VMUPGJFB.mjs";
import "./chunk-3L4LSQZ6.mjs";
import "./chunk-IHV4JKV6.mjs";
import "./chunk-AXKU23Q2.mjs";
import {
  environment
} from "./chunk-SJMEGSB4.mjs";
import {
  HttpClient,
  HttpHeaders
} from "./chunk-PY5YUHCX.mjs";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-YQCUS5I7.mjs";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-QKHTRG4V.mjs";
import "./chunk-24VIC3GD.mjs";

// src/app/IAS-portal/pages/approved-user/approved-user.component.ts
var _c0 = ["toastElement"];
var _c1 = () => [];
function ApprovedUserComponent_table_26_tr_20_a_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 46);
    \u0275\u0275listener("click", function ApprovedUserComponent_table_26_tr_20_a_22_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const user_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.approveUser(user_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 47);
    \u0275\u0275element(2, "path", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "Approve User");
    \u0275\u0275elementEnd();
  }
}
function ApprovedUserComponent_table_26_tr_20_a_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 40);
    \u0275\u0275listener("click", function ApprovedUserComponent_table_26_tr_20_a_24_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const user_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.rejectUser(user_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 41)(2, "mask", 42);
    \u0275\u0275element(3, "rect", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "g", 44);
    \u0275\u0275element(5, "path", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(6, "Reject");
    \u0275\u0275elementEnd();
  }
}
function ApprovedUserComponent_table_26_tr_20_Template(rf, ctx) {
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
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 34);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "div", 35)(18, "button", 36);
    \u0275\u0275text(19, " \u22EE ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "ul", 37)(21, "li");
    \u0275\u0275template(22, ApprovedUserComponent_table_26_tr_20_a_22_Template, 4, 0, "a", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "li");
    \u0275\u0275template(24, ApprovedUserComponent_table_26_tr_20_a_24_Template, 7, 0, "a", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "li")(26, "a", 40);
    \u0275\u0275listener("click", function ApprovedUserComponent_table_26_tr_20_Template_a_click_26_listener() {
      const user_r4 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.openDeleteModal(user_r4.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 41)(28, "mask", 42);
    \u0275\u0275element(29, "rect", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "g", 44);
    \u0275\u0275element(31, "path", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(32, "Deactivate account");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const user_r4 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r4.currentPage - 1) * ctx_r4.pageSize + i_r7 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((user_r4.doptOfficer == null ? null : user_r4.doptOfficer.englishName) || "Not Found");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((user_r4.doptOfficer == null ? null : user_r4.doptOfficer.cadre == null ? null : user_r4.doptOfficer.cadre.name) || "Not Found");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((user_r4.doptOfficer == null ? null : user_r4.doptOfficer.allotmentYear) || "Not Found");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r4.mobileNumber || "Not Found");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", user_r4.status === ctx_r4.AccountActivityStatus.APPROVED ? "Approved" : "Unapproved");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r4.status === ctx_r4.AccountActivityStatus.APPROVED ? "Approved" : "Pending for Approval", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r4.email || "Not Found");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", user_r4.status !== "approved");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", user_r4.status == "approved");
  }
}
function ApprovedUserComponent_table_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 32)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "S.no");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Cadre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Batch");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Mobile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "User Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275template(20, ApprovedUserComponent_table_26_tr_20_Template, 33, 10, "tr", 33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(20);
    \u0275\u0275property("ngForOf", ctx_r4.users);
  }
}
function ApprovedUserComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275element(1, "img", 50);
    \u0275\u0275elementEnd();
  }
}
function ApprovedUserComponent_li_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 24)(1, "a", 25);
    \u0275\u0275listener("click", function ApprovedUserComponent_li_35_Template_a_click_1_listener() {
      const i_r9 = \u0275\u0275restoreView(_r8).index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.changePage(i_r9 + 1));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r9 = ctx.index;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("active", i_r9 + 1 === ctx_r4.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r9 + 1);
  }
}
var ApprovedUserComponent = class _ApprovedUserComponent {
  constructor(http) {
    this.http = http;
    this.users = [];
    this.allApprovedUsers = [];
    this.AccountActivityStatus = AccountActivityStatus;
    this.searchText = "";
    this.pageSize = 5;
    this.currentPage = 1;
    this.toastMessage = "";
    this.toastType = "success";
    this.userIdToDelete = null;
    this.pagination = {
      total: 0,
      page: 1,
      limit: 8
    };
  }
  ngOnInit() {
    this.loadUsers();
  }
  // ✅ fetch once, filter approved
  loadUsers() {
    const token = localStorage.getItem("authToken");
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    this.http.get(`${environment.apiUrl}/admin/users?limit=10000&isActive=true`, { headers }).subscribe({
      next: (res) => {
        this.allApprovedUsers = res.data.data.filter((user) => user.status === this.AccountActivityStatus.APPROVED);
        this.pagination.total = this.allApprovedUsers.length;
        this.pagination.limit = this.pageSize;
        this.updatePage();
      },
      error: (err) => {
        console.error("Error fetching users:", err);
      }
    });
  }
  // ✅ slice approved data according to pagination
  updatePage() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.users = this.allApprovedUsers.slice(start, end);
  }
  get totalPages() {
    return Math.ceil(this.pagination.total / this.pageSize);
  }
  changePage(page) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePage();
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
    this.updatePage();
  }
  approveUser(user) {
    const token = localStorage.getItem("authToken");
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    const body = {
      users: [{ id: user.id }],
      status: "created"
    };
    this.http.put(`${environment.apiUrl}/admin/users`, body, { headers }).subscribe({
      next: () => {
        this.showToast(`User ${user.doptOfficer?.englishName} approved successfully`, "success");
        this.loadUsers();
      },
      error: (err) => {
        console.error("Error approving user:", err);
        this.showToast("Failed to approve user", "danger");
      }
    });
  }
  rejectUser(user) {
    const token = localStorage.getItem("authToken");
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    const body = {
      users: [{ id: user.id }],
      status: "created"
    };
    this.http.put(`${environment.apiUrl}/admin/users`, body, { headers }).subscribe({
      next: () => {
        this.showToast(`User ${user.doptOfficer?.englishName} Moved to pending list`, "warning");
        this.loadUsers();
      },
      error: (err) => {
        console.error("Error approving user:", err);
        this.showToast("Failed to approve user", "danger");
      }
    });
  }
  openDeleteModal(userId) {
    this.userIdToDelete = userId;
    const modalEl = document.getElementById("confirmDeleteModal");
    if (modalEl) {
      const modal = new bootstrap.Modal(modalEl);
      modal.show();
    }
  }
  // Called when "Deactivate" in modal is clicked
  confirmDelete() {
    if (!this.userIdToDelete)
      return;
    const token = localStorage.getItem("authToken");
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    const body = {
      isActive: false,
      account: { id: this.userIdToDelete }
    };
    this.http.patch(`${environment.apiUrl}/admin/user`, body, { headers }).subscribe({
      next: () => {
        this.showToast("User Account Deactivated successfully", "success");
        this.loadUsers();
      },
      error: (err) => {
        this.showToast("Error Deactivating account", "danger");
      }
    });
    const modalEl = document.getElementById("confirmDeleteModal");
    if (modalEl) {
      const modal = bootstrap.Modal.getInstance(modalEl);
      modal?.hide();
    }
    this.userIdToDelete = null;
  }
  showToast(message, type) {
    this.toastMessage = message;
    this.toastType = type;
    const toastBootstrap = new bootstrap.Toast(this.toastElement.nativeElement);
    toastBootstrap.show();
  }
  static {
    this.\u0275fac = function ApprovedUserComponent_Factory(t) {
      return new (t || _ApprovedUserComponent)(\u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApprovedUserComponent, selectors: [["app-approved-user"]], viewQuery: function ApprovedUserComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.toastElement = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 47, vars: 15, consts: [["toastElement", ""], ["noUsers", ""], [1, "toast-container", "position-fixed", "top-0", "end-0", "p-3"], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true"], [1, "d-flex"], [1, "toast-body"], ["type", "button", "data-bs-dismiss", "toast", "aria-label", "Close", 1, "btn-close", "btn-close-white", "me-2", "m-auto"], ["id", "confirmDeleteModal", "tabindex", "-1", "aria-labelledby", "confirmDeleteLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "confirmDeleteLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-prime", 3, "click"], [1, "tableheading"], [1, "d-flex", "justify-content-between", "align-items-center", "flex-wrap", "mb-3"], [1, "mb-1"], [1, "table-responsive", "custom-table", "overflow-visible"], ["class", "table align-middle mb-0", 4, "ngIf", "ngIfElse"], [1, "d-flex", "justify-content-end", "align-items-center", "gap-2", "mt-3"], [1, "pagination", "modern-pagination", "mb-0"], [1, "page-item"], [1, "page-link", 3, "click"], ["class", "page-item", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center"], [1, "form-select", "form-select-sm", "w-auto", 3, "change"], ["value", "5", 3, "selected"], ["value", "10", 3, "selected"], ["value", "20", 3, "selected"], [1, "table", "align-middle", "mb-0"], [4, "ngFor", "ngForOf"], [1, "badge", 3, "ngClass"], [1, "dropdown"], ["type", "button", "data-bs-toggle", "dropdown", 1, "btn"], [1, "dropdown-menu", "shadow"], ["class", "dropdown-item blue", 3, "click", 4, "ngIf"], ["class", "dropdown-item red", 3, "click", 4, "ngIf"], [1, "dropdown-item", "red", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none"], ["id", "mask0_50905_5148", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "20", "height", "20", 2, "mask-type", "alpha"], ["width", "20", "height", "20", "fill", "#D9D9D9"], ["mask", "url(#mask0_50905_5148)"], ["d", "M14.5002 10.8335L13.3335 9.66683L15.0627 7.91683L13.3335 6.18766L14.5002 5.00016L16.2502 6.75016L17.9793 5.00016L19.1668 6.18766L17.4168 7.91683L19.1668 9.66683L17.9793 10.8335L16.2502 9.10433L14.5002 10.8335ZM7.50016 10.0002C6.5835 10.0002 5.79877 9.67377 5.146 9.021C4.49322 8.36822 4.16683 7.5835 4.16683 6.66683C4.16683 5.75016 4.49322 4.96544 5.146 4.31266C5.79877 3.65989 6.5835 3.3335 7.50016 3.3335C8.41683 3.3335 9.20155 3.65989 9.85433 4.31266C10.5071 4.96544 10.8335 5.75016 10.8335 6.66683C10.8335 7.5835 10.5071 8.36822 9.85433 9.021C9.20155 9.67377 8.41683 10.0002 7.50016 10.0002ZM0.833496 16.6668V14.3335C0.833496 13.8613 0.955024 13.4272 1.19808 13.0314C1.44114 12.6356 1.76405 12.3335 2.16683 12.1252C3.02794 11.6946 3.90294 11.3717 4.79183 11.1564C5.68072 10.9411 6.5835 10.8335 7.50016 10.8335C8.41683 10.8335 9.31961 10.9411 10.2085 11.1564C11.0974 11.3717 11.9724 11.6946 12.8335 12.1252C13.2363 12.3335 13.5592 12.6356 13.8022 13.0314C14.0453 13.4272 14.1668 13.8613 14.1668 14.3335V16.6668H0.833496ZM2.50016 15.0002H12.5002V14.3335C12.5002 14.1807 12.462 14.0418 12.3856 13.9168C12.3092 13.7918 12.2085 13.6946 12.0835 13.6252C11.3335 13.2502 10.5766 12.9689 9.81266 12.7814C9.04877 12.5939 8.27794 12.5002 7.50016 12.5002C6.72239 12.5002 5.95155 12.5939 5.18766 12.7814C4.42377 12.9689 3.66683 13.2502 2.91683 13.6252C2.79183 13.6946 2.69114 13.7918 2.61475 13.9168C2.53836 14.0418 2.50016 14.1807 2.50016 14.3335V15.0002ZM7.50016 8.3335C7.9585 8.3335 8.35086 8.1703 8.67725 7.84391C9.00364 7.51752 9.16683 7.12516 9.16683 6.66683C9.16683 6.2085 9.00364 5.81613 8.67725 5.48975C8.35086 5.16336 7.9585 5.00016 7.50016 5.00016C7.04183 5.00016 6.64947 5.16336 6.32308 5.48975C5.99669 5.81613 5.8335 6.2085 5.8335 6.66683C5.8335 7.12516 5.99669 7.51752 6.32308 7.84391C6.64947 8.1703 7.04183 8.3335 7.50016 8.3335Z", "fill", "#B7131A"], [1, "dropdown-item", "blue", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "14", "viewBox", "0 0 18 14", "fill", "none"], ["d", "M0.666504 13.6668V11.3335C0.666504 10.8752 0.784559 10.4446 1.02067 10.0418C1.25678 9.63905 1.58317 9.3335 1.99984 9.12516C2.70817 8.76405 3.50678 8.4585 4.39567 8.2085C5.28456 7.9585 6.26373 7.8335 7.33317 7.8335C7.74984 7.8335 8.15609 7.85433 8.55192 7.896C8.94775 7.93766 9.33317 8.00016 9.70817 8.0835L8.24984 9.54183C8.09706 9.51405 7.94775 9.50016 7.80192 9.50016H7.33317C6.34706 9.50016 5.46164 9.61822 4.67692 9.85433C3.8922 10.0904 3.24984 10.3474 2.74984 10.6252C2.62484 10.6946 2.52414 10.7918 2.44775 10.9168C2.37137 11.0418 2.33317 11.1807 2.33317 11.3335V12.0002H7.5415L9.20817 13.6668H0.666504ZM11.9582 14.0002L9.08317 11.1252L10.2498 9.9585L11.9582 11.6668L16.1665 7.4585L17.3332 8.62516L11.9582 14.0002ZM7.33317 7.00016C6.4165 7.00016 5.63178 6.67377 4.979 6.021C4.32623 5.36822 3.99984 4.5835 3.99984 3.66683C3.99984 2.75016 4.32623 1.96544 4.979 1.31266C5.63178 0.659885 6.4165 0.333496 7.33317 0.333496C8.24984 0.333496 9.03456 0.659885 9.68734 1.31266C10.3401 1.96544 10.6665 2.75016 10.6665 3.66683C10.6665 4.5835 10.3401 5.36822 9.68734 6.021C9.03456 6.67377 8.24984 7.00016 7.33317 7.00016ZM7.33317 5.3335C7.7915 5.3335 8.18387 5.1703 8.51025 4.84391C8.83664 4.51752 8.99984 4.12516 8.99984 3.66683C8.99984 3.2085 8.83664 2.81613 8.51025 2.48975C8.18387 2.16336 7.7915 2.00016 7.33317 2.00016C6.87484 2.00016 6.48248 2.16336 6.15609 2.48975C5.8297 2.81613 5.6665 3.2085 5.6665 3.66683C5.6665 4.12516 5.8297 4.51752 6.15609 4.84391C6.48248 5.1703 6.87484 5.3335 7.33317 5.3335Z", "fill", "#3C9718"], [1, "text-center", "p-4", "d-flex", "align-items-center", "justify-content-center"], ["src", "../../../../assets/icons/empty-state.png", "alt", "empty state"]], template: function ApprovedUserComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3, 0)(3, "div", 4)(4, "div", 5);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "button", 6);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "h5", 11);
        \u0275\u0275text(12, "Confirm Deactivation");
        \u0275\u0275elementEnd();
        \u0275\u0275element(13, "button", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 13);
        \u0275\u0275text(15, " Are you sure you want to deactivate this user account? ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 14)(17, "button", 15);
        \u0275\u0275text(18, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "button", 16);
        \u0275\u0275listener("click", function ApprovedUserComponent_Template_button_click_19_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.confirmDelete());
        });
        \u0275\u0275text(20, "Deactivate");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(21, "div", 17)(22, "div", 18)(23, "h5", 19);
        \u0275\u0275text(24, "Approved Users");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 20);
        \u0275\u0275template(26, ApprovedUserComponent_table_26_Template, 21, 1, "table", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275template(27, ApprovedUserComponent_ng_template_27_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(29, "div", 22)(30, "nav")(31, "ul", 23)(32, "li", 24)(33, "a", 25);
        \u0275\u0275listener("click", function ApprovedUserComponent_Template_a_click_33_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.goPrevious());
        });
        \u0275\u0275text(34, "\u2039");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(35, ApprovedUserComponent_li_35_Template, 3, 3, "li", 26);
        \u0275\u0275elementStart(36, "li", 24)(37, "a", 25);
        \u0275\u0275listener("click", function ApprovedUserComponent_Template_a_click_37_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.goNext());
        });
        \u0275\u0275text(38, "\u203A");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(39, "div", 27)(40, "select", 28);
        \u0275\u0275listener("change", function ApprovedUserComponent_Template_select_change_40_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onPageSizeChange($event));
        });
        \u0275\u0275elementStart(41, "option", 29);
        \u0275\u0275text(42, "5 /Page");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "option", 30);
        \u0275\u0275text(44, "10 /Page");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "option", 31);
        \u0275\u0275text(46, "20 /Page");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        const noUsers_r10 = \u0275\u0275reference(28);
        \u0275\u0275advance();
        \u0275\u0275classMapInterpolate1("toast align-items-center text-bg-", ctx.toastType, " border-0");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", ctx.toastMessage, " ");
        \u0275\u0275advance(21);
        \u0275\u0275property("ngIf", ctx.users && ctx.users.length)("ngIfElse", noUsers_r10);
        \u0275\u0275advance(6);
        \u0275\u0275classProp("disabled", ctx.currentPage === 1);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(14, _c1).constructor(ctx.totalPages));
        \u0275\u0275advance();
        \u0275\u0275classProp("disabled", ctx.currentPage === ctx.totalPages);
        \u0275\u0275advance(5);
        \u0275\u0275property("selected", ctx.pageSize === 5);
        \u0275\u0275advance(2);
        \u0275\u0275property("selected", ctx.pageSize === 10);
        \u0275\u0275advance(2);
        \u0275\u0275property("selected", ctx.pageSize === 20);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf], styles: ['\n\n.main-dashboard-component[_ngcontent-%COMP%] {\n  margin-bottom: 60px;\n}\n.main-dashboard-component[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--Text, #211b3a);\n  font-family: Urbanist;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 28px;\n}\n.cards-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n.cards-grid[_ngcontent-%COMP%]   .stats-card[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background: #fff;\n  padding: 16px;\n  height: 110px;\n}\n.cards-grid[_ngcontent-%COMP%]   .stats-card[_ngcontent-%COMP%]   .card-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.cards-grid[_ngcontent-%COMP%]   .stats-card[_ngcontent-%COMP%]   .card-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--Text, #211b3a);\n  font-family: Urbanist;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: 0.15px;\n  margin: 0px;\n}\n.tableheading[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #211b3a;\n  font-family: Urbanist;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 28px;\n}\n.tableheading[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%] {\n  max-width: 300px;\n  border-radius: 8px;\n  padding: 8px 12px;\n  overflow: hidden;\n  color: #868686;\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 20px;\n  letter-spacing: 0.25px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-family: Urbanist;\n  color: #492fb2;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 16px;\n  letter-spacing: 0.07px;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #333;\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 150%;\n  letter-spacing: 0.25px;\n}\n.custom-table[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n}\n.custom-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #eee;\n  padding: 12px;\n}\n.badge[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  font-family: "Noto Sans";\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: var(--Line-Heights-10, 20px);\n  letter-spacing: var(--Letter-Spacing-4, 0.25px);\n  padding: 6px 12px;\n}\n.Approved[_ngcontent-%COMP%] {\n  color: #3C9718;\n  background: #EDF7E6;\n}\n.Unapproved[_ngcontent-%COMP%] {\n  color: #B77224;\n  background: #FEF1E7;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid #c6c6c6;\n  background: #fff;\n  cursor: pointer;\n  padding: 8px 0px;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .blue[_ngcontent-%COMP%] {\n  color: #3C9718;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .black[_ngcontent-%COMP%] {\n  color: #211b3a;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%] {\n  color: #b7131a;\n}\n.btn-check[_ngcontent-%COMP%]:checked    + .btn[_ngcontent-%COMP%], .btn.active[_ngcontent-%COMP%], .btn.show[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:first-child:active, [_ngcontent-%COMP%]:not(.btn-check)    + .btn[_ngcontent-%COMP%]:active {\n  border-color: transparent;\n}\n.count-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--Text-Dark, #212121);\n  font-family: Urbanist;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 28px;\n  margin: 0px;\n  width: 50px;\n}\n.percentage[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  font-family: "Noto Sans";\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 16px;\n  letter-spacing: 0.5px;\n  display: flex;\n  align-items: center;\n}\n.success[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  background: var(--Success-50, #EDF7E6);\n  color: var(--Success-Default---Success, #3C9718);\n}\n.danger[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  color: var(--Danger-Default---Danger, #B7131A);\n  background: var(--Danger-50, #FFEEEA);\n}\n.modern-pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%] {\n  margin: 0 3px;\n}\n.modern-pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  border-radius: 8px !important;\n  border: 1px solid #ddd;\n  padding: 6px 12px;\n  color: #444;\n  background-color: #fff;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.modern-pagination[_ngcontent-%COMP%]   .page-link.active[_ngcontent-%COMP%] {\n  background-color: #f5f0ff;\n  border: 1px solid #7c3aed;\n  color: #7c3aed;\n  font-weight: 600;\n}\n.modern-pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:hover {\n  background-color: #f2f2f2;\n  color: #000;\n}\n.modern-pagination[_ngcontent-%COMP%]   .page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n}\n.form-select[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 2.25rem 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--bs-body-color);\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background-color: var(--bs-body-bg);\n  background-image: var(--bs-form-select-bg-img), var(--bs-form-select-bg-icon, none);\n  background-repeat: no-repeat;\n  background-position: right 0.75rem center;\n  background-size: 16px 12px;\n  border: var(--bs-border-width) solid var(--bs-border-color);\n  border-radius: var(--bs-border-radius);\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  cursor: pointer;\n}\n/*# sourceMappingURL=approved-user.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApprovedUserComponent, { className: "ApprovedUserComponent", filePath: "src/app/IAS-portal/pages/approved-user/approved-user.component.ts", lineNumber: 15 });
})();
export {
  ApprovedUserComponent
};
//# sourceMappingURL=chunk-MJAYSI5Z.mjs.map
