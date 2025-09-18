import {
  IasLoaderComponent
} from "./chunk-BPMHA6KW.js";
import {
  FormsModule,
  NgSelectOption,
  ɵNgSelectMultipleOption
} from "./chunk-W36CPE6Z.js";
import {
  environment
} from "./chunk-WYW2S4QW.js";
import {
  HttpClient,
  HttpHeaders
} from "./chunk-X4DCRH7W.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-HMLSYQRE.js";
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
  ɵɵnamespaceHTML,
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
} from "./chunk-PY442ZFB.js";

// src/app/IAS-portal/pages/dashboard/dashboard.component.ts
var _c0 = ["toastElement"];
var _c1 = () => [];
function DashboardComponent_app_ias_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-ias-loader");
  }
}
function DashboardComponent_table_102_tr_20_a_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 78);
    \u0275\u0275listener("click", function DashboardComponent_table_102_tr_20_a_22_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const user_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.approveUser(user_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 79);
    \u0275\u0275element(2, "path", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "Approve User");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_table_102_tr_20_a_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 73);
    \u0275\u0275listener("click", function DashboardComponent_table_102_tr_20_a_24_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const user_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.rejectUser(user_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 34)(2, "mask", 74);
    \u0275\u0275element(3, "rect", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "g", 76);
    \u0275\u0275element(5, "path", 77);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(6, "Reject");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_table_102_tr_20_Template(rf, ctx) {
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
    \u0275\u0275elementStart(11, "td")(12, "span", 67);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "div", 68)(18, "button", 69);
    \u0275\u0275text(19, " \u22EE ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "ul", 70)(21, "li");
    \u0275\u0275template(22, DashboardComponent_table_102_tr_20_a_22_Template, 4, 0, "a", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "li");
    \u0275\u0275template(24, DashboardComponent_table_102_tr_20_a_24_Template, 7, 0, "a", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "li")(26, "a", 73);
    \u0275\u0275listener("click", function DashboardComponent_table_102_tr_20_Template_a_click_26_listener() {
      const user_r4 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.openDeleteModal(user_r4.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 34)(28, "mask", 74);
    \u0275\u0275element(29, "rect", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "g", 76);
    \u0275\u0275element(31, "path", 77);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(32, " Deactivate account");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const user_r4 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r4.currentPage - 1) * ctx_r4.pageSize + i_r7 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((user_r4.doptOfficer == null ? null : user_r4.doptOfficer.cadre == null ? null : user_r4.doptOfficer.cadre.name) || "Not Found");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((user_r4.doptOfficer == null ? null : user_r4.doptOfficer.allotmentYear) || "Not Found");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((user_r4.doptOfficer == null ? null : user_r4.doptOfficer.englishName) || "Not Found");
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
function DashboardComponent_table_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 65)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "S.no");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Cadre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Batch");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Name");
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
    \u0275\u0275template(20, DashboardComponent_table_102_tr_20_Template, 33, 10, "tr", 66);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(20);
    \u0275\u0275property("ngForOf", ctx_r4.users);
  }
}
function DashboardComponent_ng_template_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275element(1, "img", 82);
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_li_111_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 57)(1, "a", 58);
    \u0275\u0275listener("click", function DashboardComponent_li_111_Template_a_click_1_listener() {
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
var AccountActivityStatus;
(function(AccountActivityStatus2) {
  AccountActivityStatus2["APPROVED"] = "approved";
  AccountActivityStatus2["CREATED"] = "created";
})(AccountActivityStatus || (AccountActivityStatus = {}));
var DashboardComponent = class _DashboardComponent {
  constructor(http) {
    this.http = http;
    this.users = [];
    this.statusCount = [];
    this.AccountActivityStatus = AccountActivityStatus;
    this.searchText = "";
    this.pageSize = 5;
    this.currentPage = 1;
    this.counterUsers = 0;
    this.counterApproved = 0;
    this.counterUnapproved = 0;
    this.duration = 2e3;
    this.toastMessage = "";
    this.totalUsers = 0;
    this.totalApproved = 0;
    this.totalCreated = 0;
    this.userIdToDelete = null;
    this.toastType = "success";
    this.loading = false;
    this.pagination = {
      total: 0,
      page: 1,
      limit: 10
    };
  }
  ngOnInit() {
    this.loadUsers();
  }
  loadUsers(page = 1, limit = this.pageSize) {
    this.loading = true;
    const token = localStorage.getItem("authToken");
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    this.http.get(`${environment.apiUrl}/admin/users?page=${page}&limit=${limit}&isActive=true`, { headers }).subscribe({
      next: (res) => {
        this.users = res.data.data;
        this.pagination = res.data.pagination;
        this.currentPage = page;
        this.totalUsers = res.data.pagination?.total ?? this.users.length;
        this.statusCount = res.data.statusCounts ?? [];
        this.totalApproved = this.statusCount.find((s) => s.status === "approved")?.count ?? 0;
        this.totalCreated = this.statusCount.find((s) => s.status === "created")?.count ?? 0;
        this.startCounters();
        this.loading = false;
      },
      error: (err) => {
        console.error("Error fetching users:", err);
        this.loading = false;
      }
    });
  }
  startCounters() {
    this.animateCounter("counterUsers", this.totalUsers);
    this.animateCounter("counterApproved", this.totalApproved);
    this.animateCounter("counterUnapproved", this.totalCreated);
  }
  animateCounter(counterProp, target) {
    let start = 0;
    const increment = target / (this.duration / 16);
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        this[counterProp] = target;
        clearInterval(interval);
      } else {
        this[counterProp] = Math.floor(start);
      }
    }, 16);
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
  approveUser(user) {
    const token = localStorage.getItem("authToken");
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    const body = {
      users: [{ id: user.id }],
      status: "approved"
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
  showToast(message, type) {
    this.toastMessage = message;
    this.toastType = type;
    const toastBootstrap = new bootstrap.Toast(this.toastElement.nativeElement);
    toastBootstrap.show();
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(t) {
      return new (t || _DashboardComponent)(\u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.toastElement = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 123, vars: 19, consts: [["toastElement", ""], ["noUsers", ""], [4, "ngIf"], [1, "toast-container", "position-fixed", "top-0", "end-0", "p-3"], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true"], [1, "d-flex"], [1, "toast-body"], ["type", "button", "data-bs-dismiss", "toast", "aria-label", "Close", 1, "btn-close", "btn-close-white", "me-2", "m-auto"], ["id", "confirmDeleteModal", "tabindex", "-1", "aria-labelledby", "confirmDeleteLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "confirmDeleteLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-prime", 3, "click"], [1, "main-dashboard-component"], [1, "mb-4"], [1, "cards-grid"], [1, "stats-card", "d-flex", "flex-column", "justify-content-between"], [1, "card-heading"], ["xmlns", "http://www.w3.org/2000/svg", "width", "28", "height", "28", "viewBox", "0 0 28 28", "fill", "none"], ["width", "28", "height", "28", "rx", "4", "fill", "#EEEEEE"], ["id", "mask0_50852_6085", "maskUnits", "userSpaceOnUse", "x", "4", "y", "4", "width", "20", "height", "20", 2, "mask-type", "alpha"], ["x", "4", "y", "4", "width", "20", "height", "20", "fill", "#D9D9D9"], ["mask", "url(#mask0_50852_6085)"], ["d", "M4.8335 20.6666V18.3333C4.8335 17.861 4.95502 17.427 5.19808 17.0312C5.44114 16.6353 5.76405 16.3333 6.16683 16.1249C7.02794 15.6944 7.90294 15.3714 8.79183 15.1562C9.68072 14.9409 10.5835 14.8333 11.5002 14.8333C12.4168 14.8333 13.3196 14.9409 14.2085 15.1562C15.0974 15.3714 15.9724 15.6944 16.8335 16.1249C17.2363 16.3333 17.5592 16.6353 17.8022 17.0312C18.0453 17.427 18.1668 17.861 18.1668 18.3333V20.6666H4.8335ZM19.8335 20.6666V18.1666C19.8335 17.5555 19.6634 16.9687 19.3231 16.4062C18.9828 15.8437 18.5002 15.361 17.8752 14.9583C18.5835 15.0416 19.2502 15.1839 19.8752 15.3853C20.5002 15.5867 21.0835 15.8333 21.6252 16.1249C22.1252 16.4027 22.5071 16.7117 22.771 17.052C23.0349 17.3923 23.1668 17.7638 23.1668 18.1666V20.6666H19.8335ZM11.5002 13.9999C10.5835 13.9999 9.79877 13.6735 9.146 13.0208C8.49322 12.368 8.16683 11.5833 8.16683 10.6666C8.16683 9.74992 8.49322 8.9652 9.146 8.31242C9.79877 7.65964 10.5835 7.33325 11.5002 7.33325C12.4168 7.33325 13.2016 7.65964 13.8543 8.31242C14.5071 8.9652 14.8335 9.74992 14.8335 10.6666C14.8335 11.5833 14.5071 12.368 13.8543 13.0208C13.2016 13.6735 12.4168 13.9999 11.5002 13.9999ZM19.8335 10.6666C19.8335 11.5833 19.5071 12.368 18.8543 13.0208C18.2016 13.6735 17.4168 13.9999 16.5002 13.9999C16.3474 13.9999 16.1529 13.9826 15.9168 13.9478C15.6807 13.9131 15.4863 13.8749 15.3335 13.8333C15.7085 13.3888 15.9967 12.8958 16.1981 12.3541C16.3995 11.8124 16.5002 11.2499 16.5002 10.6666C16.5002 10.0833 16.3995 9.52075 16.1981 8.97909C15.9967 8.43742 15.7085 7.94436 15.3335 7.49992C15.5279 7.43047 15.7224 7.38534 15.9168 7.3645C16.1113 7.34367 16.3057 7.33325 16.5002 7.33325C17.4168 7.33325 18.2016 7.65964 18.8543 8.31242C19.5071 8.9652 19.8335 9.74992 19.8335 10.6666ZM6.50016 18.9999H16.5002V18.3333C16.5002 18.1805 16.462 18.0416 16.3856 17.9166C16.3092 17.7916 16.2085 17.6944 16.0835 17.6249C15.3335 17.2499 14.5766 16.9687 13.8127 16.7812C13.0488 16.5937 12.2779 16.4999 11.5002 16.4999C10.7224 16.4999 9.95155 16.5937 9.18766 16.7812C8.42377 16.9687 7.66683 17.2499 6.91683 17.6249C6.79183 17.6944 6.69114 17.7916 6.61475 17.9166C6.53836 18.0416 6.50016 18.1805 6.50016 18.3333V18.9999ZM11.5002 12.3333C11.9585 12.3333 12.3509 12.1701 12.6772 11.8437C13.0036 11.5173 13.1668 11.1249 13.1668 10.6666C13.1668 10.2083 13.0036 9.81589 12.6772 9.4895C12.3509 9.16311 11.9585 8.99992 11.5002 8.99992C11.0418 8.99992 10.6495 9.16311 10.3231 9.4895C9.99669 9.81589 9.8335 10.2083 9.8335 10.6666C9.8335 11.1249 9.99669 11.5173 10.3231 11.8437C10.6495 12.1701 11.0418 12.3333 11.5002 12.3333Z", "fill", "url(#paint0_linear_50852_6085)"], ["id", "paint0_linear_50852_6085", "x1", "6.55225", "y1", "5.33325", "x2", "25.0051", "y2", "26.6163", "gradientUnits", "userSpaceOnUse"], ["stop-color", "#492FB2"], ["offset", "1", "stop-color", "#492FB2", "stop-opacity", "0.61"], [1, "count-text", "d-flex", "gap-2"], [1, "percentage", "success"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none"], ["clip-path", "url(#clip0_50852_7300)"], ["d", "M5.28631 5.28595L5.28631 6.94766L11.8683 6.95355L4.69705 14.1248L5.87557 15.3033L13.0468 8.13206L13.0527 14.714L14.7144 14.714V5.28595H5.28631Z", "fill", "#3C9718"], ["id", "clip0_50852_7300"], ["width", "20", "height", "20", "fill", "white"], ["id", "mask0_50852_7289", "maskUnits", "userSpaceOnUse", "x", "4", "y", "4", "width", "20", "height", "20", 2, "mask-type", "alpha"], ["mask", "url(#mask0_50852_7289)"], ["d", "M5.6665 20.6666V18.3333C5.6665 17.8749 5.78456 17.4444 6.02067 17.0416C6.25678 16.6388 6.58317 16.3333 6.99984 16.1249C7.70817 15.7638 8.50678 15.4583 9.39567 15.2083C10.2846 14.9583 11.2637 14.8333 12.3332 14.8333C12.7498 14.8333 13.1561 14.8541 13.5519 14.8958C13.9478 14.9374 14.3332 14.9999 14.7082 15.0833L13.2498 16.5416C13.0971 16.5138 12.9478 16.4999 12.8019 16.4999H12.3332C11.3471 16.4999 10.4616 16.618 9.67692 16.8541C8.8922 17.0902 8.24984 17.3471 7.74984 17.6249C7.62484 17.6944 7.52414 17.7916 7.44775 17.9166C7.37137 18.0416 7.33317 18.1805 7.33317 18.3333V18.9999H12.5415L14.2082 20.6666H5.6665ZM16.9582 20.9999L14.0832 18.1249L15.2498 16.9583L16.9582 18.6666L21.1665 14.4583L22.3332 15.6249L16.9582 20.9999ZM12.3332 13.9999C11.4165 13.9999 10.6318 13.6735 9.979 13.0208C9.32623 12.368 8.99984 11.5833 8.99984 10.6666C8.99984 9.74992 9.32623 8.9652 9.979 8.31242C10.6318 7.65964 11.4165 7.33325 12.3332 7.33325C13.2498 7.33325 14.0346 7.65964 14.6873 8.31242C15.3401 8.9652 15.6665 9.74992 15.6665 10.6666C15.6665 11.5833 15.3401 12.368 14.6873 13.0208C14.0346 13.6735 13.2498 13.9999 12.3332 13.9999ZM12.3332 12.3333C12.7915 12.3333 13.1839 12.1701 13.5103 11.8437C13.8366 11.5173 13.9998 11.1249 13.9998 10.6666C13.9998 10.2083 13.8366 9.81589 13.5103 9.4895C13.1839 9.16311 12.7915 8.99992 12.3332 8.99992C11.8748 8.99992 11.4825 9.16311 11.1561 9.4895C10.8297 9.81589 10.6665 10.2083 10.6665 10.6666C10.6665 11.1249 10.8297 11.5173 11.1561 11.8437C11.4825 12.1701 11.8748 12.3333 12.3332 12.3333Z", "fill", "url(#paint0_linear_50852_7289)"], ["id", "paint0_linear_50852_7289", "x1", "7.229", "y1", "5.28325", "x2", "26.3311", "y2", "24.8237", "gradientUnits", "userSpaceOnUse"], ["id", "mask0_50905_20461", "maskUnits", "userSpaceOnUse", "x", "4", "y", "4", "width", "20", "height", "20", 2, "mask-type", "alpha"], ["mask", "url(#mask0_50905_20461)"], ["d", "M18.4997 14.8334L17.333 13.6667L19.0622 11.9167L17.333 10.1875L18.4997 9.00004L20.2497 10.75L21.9788 9.00004L23.1663 10.1875L21.4163 11.9167L23.1663 13.6667L21.9788 14.8334L20.2497 13.1042L18.4997 14.8334ZM11.4997 14C10.583 14 9.79829 13.6737 9.14551 13.0209C8.49273 12.3681 8.16634 11.5834 8.16634 10.6667C8.16634 9.75004 8.49273 8.96532 9.14551 8.31254C9.79829 7.65976 10.583 7.33337 11.4997 7.33337C12.4163 7.33337 13.2011 7.65976 13.8538 8.31254C14.5066 8.96532 14.833 9.75004 14.833 10.6667C14.833 11.5834 14.5066 12.3681 13.8538 13.0209C13.2011 13.6737 12.4163 14 11.4997 14ZM4.83301 20.6667V18.3334C4.83301 17.8612 4.95454 17.4271 5.19759 17.0313C5.44065 16.6355 5.76356 16.3334 6.16634 16.125C7.02745 15.6945 7.90245 15.3716 8.79134 15.1563C9.68023 14.941 10.583 14.8334 11.4997 14.8334C12.4163 14.8334 13.3191 14.941 14.208 15.1563C15.0969 15.3716 15.9719 15.6945 16.833 16.125C17.2358 16.3334 17.5587 16.6355 17.8018 17.0313C18.0448 17.4271 18.1663 17.8612 18.1663 18.3334V20.6667H4.83301ZM6.49967 19H16.4997V18.3334C16.4997 18.1806 16.4615 18.0417 16.3851 17.9167C16.3087 17.7917 16.208 17.6945 16.083 17.625C15.333 17.25 14.5761 16.9688 13.8122 16.7813C13.0483 16.5938 12.2775 16.5 11.4997 16.5C10.7219 16.5 9.95106 16.5938 9.18717 16.7813C8.42329 16.9688 7.66634 17.25 6.91634 17.625C6.79134 17.6945 6.69065 17.7917 6.61426 17.9167C6.53787 18.0417 6.49967 18.1806 6.49967 18.3334V19ZM11.4997 12.3334C11.958 12.3334 12.3504 12.1702 12.6768 11.8438C13.0031 11.5174 13.1663 11.125 13.1663 10.6667C13.1663 10.2084 13.0031 9.81601 12.6768 9.48962C12.3504 9.16324 11.958 9.00004 11.4997 9.00004C11.0413 9.00004 10.649 9.16324 10.3226 9.48962C9.9962 9.81601 9.83301 10.2084 9.83301 10.6667C9.83301 11.125 9.9962 11.5174 10.3226 11.8438C10.649 12.1702 11.0413 12.3334 11.4997 12.3334Z", "fill", "url(#paint0_linear_50905_20461)"], ["id", "paint0_linear_50905_20461", "x1", "6.55176", "y1", "5.33337", "x2", "25.0046", "y2", "26.6164", "gradientUnits", "userSpaceOnUse"], [1, "percentage", "danger"], ["xmlns", "http://www.w3.org/2000/svg", "width", "11", "height", "11", "viewBox", "0 0 11 11", "fill", "none"], ["d", "M1.28582 10.714L1.28582 9.05234L7.86781 9.04645L0.696567 1.87521L1.87508 0.696699L9.04632 7.86794L9.05221 1.28596L10.7139 1.28595V10.714H1.28582Z", "fill", "#B7131A"], [1, "tableheading"], [1, "d-flex", "justify-content-between", "align-items-center", "flex-wrap", "mb-3"], [1, "mb-1"], [1, "table-responsive", "custom-table", "overflow-visible"], ["class", "table align-middle mb-0", 4, "ngIf", "ngIfElse"], [1, "d-flex", "justify-content-end", "align-items-center", "gap-2", "mt-3"], [1, "pagination", "modern-pagination", "mb-0"], [1, "page-item"], [1, "page-link", 3, "click"], ["class", "page-item", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center"], [1, "form-select", "form-select-sm", "w-auto", 3, "change"], ["value", "5", 3, "selected"], ["value", "10", 3, "selected"], ["value", "20", 3, "selected"], [1, "table", "align-middle", "mb-0"], [4, "ngFor", "ngForOf"], [1, "badge", 3, "ngClass"], [1, "dropdown"], ["type", "button", "data-bs-toggle", "dropdown", 1, "btn"], [1, "dropdown-menu", "shadow"], ["class", "dropdown-item blue", 3, "click", 4, "ngIf"], ["class", "dropdown-item red", 3, "click", 4, "ngIf"], [1, "dropdown-item", "red", 3, "click"], ["id", "mask0_50905_5148", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "20", "height", "20", 2, "mask-type", "alpha"], ["width", "20", "height", "20", "fill", "#D9D9D9"], ["mask", "url(#mask0_50905_5148)"], ["d", "M14.5002 10.8335L13.3335 9.66683L15.0627 7.91683L13.3335 6.18766L14.5002 5.00016L16.2502 6.75016L17.9793 5.00016L19.1668 6.18766L17.4168 7.91683L19.1668 9.66683L17.9793 10.8335L16.2502 9.10433L14.5002 10.8335ZM7.50016 10.0002C6.5835 10.0002 5.79877 9.67377 5.146 9.021C4.49322 8.36822 4.16683 7.5835 4.16683 6.66683C4.16683 5.75016 4.49322 4.96544 5.146 4.31266C5.79877 3.65989 6.5835 3.3335 7.50016 3.3335C8.41683 3.3335 9.20155 3.65989 9.85433 4.31266C10.5071 4.96544 10.8335 5.75016 10.8335 6.66683C10.8335 7.5835 10.5071 8.36822 9.85433 9.021C9.20155 9.67377 8.41683 10.0002 7.50016 10.0002ZM0.833496 16.6668V14.3335C0.833496 13.8613 0.955024 13.4272 1.19808 13.0314C1.44114 12.6356 1.76405 12.3335 2.16683 12.1252C3.02794 11.6946 3.90294 11.3717 4.79183 11.1564C5.68072 10.9411 6.5835 10.8335 7.50016 10.8335C8.41683 10.8335 9.31961 10.9411 10.2085 11.1564C11.0974 11.3717 11.9724 11.6946 12.8335 12.1252C13.2363 12.3335 13.5592 12.6356 13.8022 13.0314C14.0453 13.4272 14.1668 13.8613 14.1668 14.3335V16.6668H0.833496ZM2.50016 15.0002H12.5002V14.3335C12.5002 14.1807 12.462 14.0418 12.3856 13.9168C12.3092 13.7918 12.2085 13.6946 12.0835 13.6252C11.3335 13.2502 10.5766 12.9689 9.81266 12.7814C9.04877 12.5939 8.27794 12.5002 7.50016 12.5002C6.72239 12.5002 5.95155 12.5939 5.18766 12.7814C4.42377 12.9689 3.66683 13.2502 2.91683 13.6252C2.79183 13.6946 2.69114 13.7918 2.61475 13.9168C2.53836 14.0418 2.50016 14.1807 2.50016 14.3335V15.0002ZM7.50016 8.3335C7.9585 8.3335 8.35086 8.1703 8.67725 7.84391C9.00364 7.51752 9.16683 7.12516 9.16683 6.66683C9.16683 6.2085 9.00364 5.81613 8.67725 5.48975C8.35086 5.16336 7.9585 5.00016 7.50016 5.00016C7.04183 5.00016 6.64947 5.16336 6.32308 5.48975C5.99669 5.81613 5.8335 6.2085 5.8335 6.66683C5.8335 7.12516 5.99669 7.51752 6.32308 7.84391C6.64947 8.1703 7.04183 8.3335 7.50016 8.3335Z", "fill", "#B7131A"], [1, "dropdown-item", "blue", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "14", "viewBox", "0 0 18 14", "fill", "none"], ["d", "M0.666504 13.6668V11.3335C0.666504 10.8752 0.784559 10.4446 1.02067 10.0418C1.25678 9.63905 1.58317 9.3335 1.99984 9.12516C2.70817 8.76405 3.50678 8.4585 4.39567 8.2085C5.28456 7.9585 6.26373 7.8335 7.33317 7.8335C7.74984 7.8335 8.15609 7.85433 8.55192 7.896C8.94775 7.93766 9.33317 8.00016 9.70817 8.0835L8.24984 9.54183C8.09706 9.51405 7.94775 9.50016 7.80192 9.50016H7.33317C6.34706 9.50016 5.46164 9.61822 4.67692 9.85433C3.8922 10.0904 3.24984 10.3474 2.74984 10.6252C2.62484 10.6946 2.52414 10.7918 2.44775 10.9168C2.37137 11.0418 2.33317 11.1807 2.33317 11.3335V12.0002H7.5415L9.20817 13.6668H0.666504ZM11.9582 14.0002L9.08317 11.1252L10.2498 9.9585L11.9582 11.6668L16.1665 7.4585L17.3332 8.62516L11.9582 14.0002ZM7.33317 7.00016C6.4165 7.00016 5.63178 6.67377 4.979 6.021C4.32623 5.36822 3.99984 4.5835 3.99984 3.66683C3.99984 2.75016 4.32623 1.96544 4.979 1.31266C5.63178 0.659885 6.4165 0.333496 7.33317 0.333496C8.24984 0.333496 9.03456 0.659885 9.68734 1.31266C10.3401 1.96544 10.6665 2.75016 10.6665 3.66683C10.6665 4.5835 10.3401 5.36822 9.68734 6.021C9.03456 6.67377 8.24984 7.00016 7.33317 7.00016ZM7.33317 5.3335C7.7915 5.3335 8.18387 5.1703 8.51025 4.84391C8.83664 4.51752 8.99984 4.12516 8.99984 3.66683C8.99984 3.2085 8.83664 2.81613 8.51025 2.48975C8.18387 2.16336 7.7915 2.00016 7.33317 2.00016C6.87484 2.00016 6.48248 2.16336 6.15609 2.48975C5.8297 2.81613 5.6665 3.2085 5.6665 3.66683C5.6665 4.12516 5.8297 4.51752 6.15609 4.84391C6.48248 5.1703 6.87484 5.3335 7.33317 5.3335Z", "fill", "#3C9718"], [1, "text-center", "p-4", "d-flex", "align-items-center", "justify-content-center"], ["src", "../../../../assets/icons/empty-state.png", "alt", "empty state"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275template(0, DashboardComponent_app_ias_loader_0_Template, 1, 0, "app-ias-loader", 2);
        \u0275\u0275elementStart(1, "div", 3)(2, "div", 4, 0)(4, "div", 5)(5, "div", 6);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275element(7, "button", 7);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "h5", 12);
        \u0275\u0275text(13, "Confirm Deactivation");
        \u0275\u0275elementEnd();
        \u0275\u0275element(14, "button", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 14);
        \u0275\u0275text(16, " Are you sure you want to deactivate this user account? ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 15)(18, "button", 16);
        \u0275\u0275text(19, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "button", 17);
        \u0275\u0275listener("click", function DashboardComponent_Template_button_click_20_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.confirmDelete());
        });
        \u0275\u0275text(21, "Deactivate");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(22, "div", 18)(23, "h1", 19);
        \u0275\u0275text(24, "Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 20)(26, "div", 21)(27, "div", 22);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(28, "svg", 23);
        \u0275\u0275element(29, "rect", 24);
        \u0275\u0275elementStart(30, "mask", 25);
        \u0275\u0275element(31, "rect", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "g", 27);
        \u0275\u0275element(33, "path", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "defs")(35, "linearGradient", 29);
        \u0275\u0275element(36, "stop", 30)(37, "stop", 31);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(38, "h3");
        \u0275\u0275text(39, "Total Users");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "div", 32)(41, "h1");
        \u0275\u0275text(42);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "div", 33);
        \u0275\u0275text(44, "15% ");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(45, "svg", 34)(46, "g", 35);
        \u0275\u0275element(47, "path", 36);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "defs")(49, "clipPath", 37);
        \u0275\u0275element(50, "rect", 38);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(51, "div", 21)(52, "div", 22);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(53, "svg", 23);
        \u0275\u0275element(54, "rect", 24);
        \u0275\u0275elementStart(55, "mask", 39);
        \u0275\u0275element(56, "rect", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "g", 40);
        \u0275\u0275element(58, "path", 41);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "defs")(60, "linearGradient", 42);
        \u0275\u0275element(61, "stop", 30)(62, "stop", 31);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(63, "h3");
        \u0275\u0275text(64, "Approved Users");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(65, "div", 32)(66, "h1");
        \u0275\u0275text(67);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "div", 33);
        \u0275\u0275text(69, "15% ");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(70, "svg", 34)(71, "g", 35);
        \u0275\u0275element(72, "path", 36);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "defs")(74, "clipPath", 37);
        \u0275\u0275element(75, "rect", 38);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(76, "div", 21)(77, "div", 22);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(78, "svg", 23);
        \u0275\u0275element(79, "rect", 24);
        \u0275\u0275elementStart(80, "mask", 43);
        \u0275\u0275element(81, "rect", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "g", 44);
        \u0275\u0275element(83, "path", 45);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "defs")(85, "linearGradient", 46);
        \u0275\u0275element(86, "stop", 30)(87, "stop", 31);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(88, "h3");
        \u0275\u0275text(89, "Unapproved Users");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(90, "div", 32)(91, "h1");
        \u0275\u0275text(92);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "div", 47);
        \u0275\u0275text(94, "15% ");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(95, "svg", 48);
        \u0275\u0275element(96, "path", 49);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(97, "div", 50)(98, "div", 51)(99, "h5", 52);
        \u0275\u0275text(100, "User Management");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(101, "div", 53);
        \u0275\u0275template(102, DashboardComponent_table_102_Template, 21, 1, "table", 54);
        \u0275\u0275elementEnd();
        \u0275\u0275template(103, DashboardComponent_ng_template_103_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(105, "div", 55)(106, "nav")(107, "ul", 56)(108, "li", 57)(109, "a", 58);
        \u0275\u0275listener("click", function DashboardComponent_Template_a_click_109_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.goPrevious());
        });
        \u0275\u0275text(110, "\u2039");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(111, DashboardComponent_li_111_Template, 3, 3, "li", 59);
        \u0275\u0275elementStart(112, "li", 57)(113, "a", 58);
        \u0275\u0275listener("click", function DashboardComponent_Template_a_click_113_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.goNext());
        });
        \u0275\u0275text(114, "\u203A");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(115, "div", 60)(116, "select", 61);
        \u0275\u0275listener("change", function DashboardComponent_Template_select_change_116_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onPageSizeChange($event));
        });
        \u0275\u0275elementStart(117, "option", 62);
        \u0275\u0275text(118, "5 /Page");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(119, "option", 63);
        \u0275\u0275text(120, "10 /Page");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(121, "option", 64);
        \u0275\u0275text(122, "20 /Page");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        const noUsers_r10 = \u0275\u0275reference(104);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance(2);
        \u0275\u0275classMapInterpolate1("toast align-items-center text-bg-", ctx.toastType, " border-0");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", ctx.toastMessage, " ");
        \u0275\u0275advance(36);
        \u0275\u0275textInterpolate(ctx.counterUsers);
        \u0275\u0275advance(25);
        \u0275\u0275textInterpolate(ctx.counterApproved);
        \u0275\u0275advance(25);
        \u0275\u0275textInterpolate(ctx.counterUnapproved);
        \u0275\u0275advance(10);
        \u0275\u0275property("ngIf", ctx.users && ctx.users.length)("ngIfElse", noUsers_r10);
        \u0275\u0275advance(6);
        \u0275\u0275classProp("disabled", ctx.currentPage === 1);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(18, _c1).constructor(ctx.totalPages));
        \u0275\u0275advance();
        \u0275\u0275classProp("disabled", ctx.currentPage === ctx.totalPages);
        \u0275\u0275advance(5);
        \u0275\u0275property("selected", ctx.pageSize === 5);
        \u0275\u0275advance(2);
        \u0275\u0275property("selected", ctx.pageSize === 10);
        \u0275\u0275advance(2);
        \u0275\u0275property("selected", ctx.pageSize === 20);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, IasLoaderComponent], styles: ['\n\n.main-dashboard-component[_ngcontent-%COMP%] {\n  margin-bottom: 60px;\n}\n.main-dashboard-component[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--Text, #211b3a);\n  font-family: Urbanist;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 28px;\n}\n.cards-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n.cards-grid[_ngcontent-%COMP%]   .stats-card[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background: #fff;\n  padding: 16px;\n  height: 110px;\n}\n.cards-grid[_ngcontent-%COMP%]   .stats-card[_ngcontent-%COMP%]   .card-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.cards-grid[_ngcontent-%COMP%]   .stats-card[_ngcontent-%COMP%]   .card-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--Text, #211b3a);\n  font-family: Urbanist;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: 0.15px;\n  margin: 0px;\n}\n.tableheading[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #211b3a;\n  font-family: Urbanist;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 28px;\n}\n.tableheading[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%] {\n  max-width: 300px;\n  border-radius: 8px;\n  padding: 8px 12px;\n  overflow: hidden;\n  color: #868686;\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 20px;\n  letter-spacing: 0.25px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-family: Urbanist;\n  color: #492fb2;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 16px;\n  letter-spacing: 0.07px;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #333;\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 150%;\n  letter-spacing: 0.25px;\n}\n.custom-table[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n}\n.custom-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #eee;\n  padding: 12px;\n}\n.badge[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  font-family: "Noto Sans";\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: var(--Line-Heights-10, 20px);\n  letter-spacing: var(--Letter-Spacing-4, 0.25px);\n  padding: 6px 12px;\n}\n.Approved[_ngcontent-%COMP%] {\n  color: #3C9718;\n  background: #EDF7E6;\n}\n.Unapproved[_ngcontent-%COMP%] {\n  color: #B77224;\n  background: #FEF1E7;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid #c6c6c6;\n  background: #fff;\n  cursor: pointer;\n  padding: 8px 0px;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .blue[_ngcontent-%COMP%] {\n  color: #3C9718;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .black[_ngcontent-%COMP%] {\n  color: #211b3a;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%] {\n  color: #b7131a;\n}\n.btn-check[_ngcontent-%COMP%]:checked    + .btn[_ngcontent-%COMP%], .btn.active[_ngcontent-%COMP%], .btn.show[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:first-child:active, [_ngcontent-%COMP%]:not(.btn-check)    + .btn[_ngcontent-%COMP%]:active {\n  border-color: transparent;\n}\n.count-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--Text-Dark, #212121);\n  font-family: Urbanist;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 28px;\n  margin: 0px;\n  width: 50px;\n}\n.percentage[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  font-family: "Noto Sans";\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 16px;\n  letter-spacing: 0.5px;\n  display: flex;\n  align-items: center;\n}\n.success[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  background: var(--Success-50, #EDF7E6);\n  color: var(--Success-Default---Success, #3C9718);\n}\n.danger[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  color: var(--Danger-Default---Danger, #B7131A);\n  background: var(--Danger-50, #FFEEEA);\n}\n.modern-pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%] {\n  margin: 0 3px;\n}\n.modern-pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  border-radius: 8px !important;\n  border: 1px solid #ddd;\n  padding: 6px 12px;\n  color: #444;\n  background-color: #fff;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.modern-pagination[_ngcontent-%COMP%]   .page-link.active[_ngcontent-%COMP%] {\n  background-color: #f5f0ff;\n  border: 1px solid #7c3aed;\n  color: #7c3aed;\n  font-weight: 600;\n}\n.modern-pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:hover {\n  background-color: #f2f2f2;\n  color: #000;\n}\n.modern-pagination[_ngcontent-%COMP%]   .page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n}\n.form-select[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 2.25rem 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--bs-body-color);\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background-color: var(--bs-body-bg);\n  background-image: var(--bs-form-select-bg-img), var(--bs-form-select-bg-icon, none);\n  background-repeat: no-repeat;\n  background-position: right 0.75rem center;\n  background-size: 16px 12px;\n  border: var(--bs-border-width) solid var(--bs-border-color);\n  border-radius: var(--bs-border-radius);\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  cursor: pointer;\n}\n/*# sourceMappingURL=dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/IAS-portal/pages/dashboard/dashboard.component.ts", lineNumber: 23 });
})();

export {
  AccountActivityStatus,
  DashboardComponent
};
//# sourceMappingURL=chunk-6GHW2PJ2.js.map
