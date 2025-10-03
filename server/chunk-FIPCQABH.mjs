import './polyfills.server.mjs';
import {
  ActivatedRoute
} from "./chunk-JZ4B5MOV.mjs";
import {
  environment
} from "./chunk-SJMEGSB4.mjs";
import "./chunk-WMPFVPWG.mjs";
import {
  HttpClient,
  HttpHeaders
} from "./chunk-DVOKZFMG.mjs";
import {
  CommonModule,
  NgIf
} from "./chunk-JUVOLG3M.mjs";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-IXD3JOLX.mjs";
import "./chunk-24VIC3GD.mjs";

// src/app/IAS-portal/pages/detailed-user-info/detailed-user-info.component.ts
var _c0 = ["toastElement"];
function DetailedUserInfoComponent_div_21_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function DetailedUserInfoComponent_div_21_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.approveUser(ctx_r2.user));
    });
    \u0275\u0275text(1, "Approve");
    \u0275\u0275elementEnd();
  }
}
function DetailedUserInfoComponent_div_21_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function DetailedUserInfoComponent_div_21_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.rejectUser(ctx_r2.user));
    });
    \u0275\u0275text(1, "Reject");
    \u0275\u0275elementEnd();
  }
}
function DetailedUserInfoComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "h1");
    \u0275\u0275text(3, "User Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 19);
    \u0275\u0275template(5, DetailedUserInfoComponent_div_21_button_5_Template, 2, 0, "button", 20)(6, DetailedUserInfoComponent_div_21_button_6_Template, 2, 0, "button", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 21)(8, "div", 22)(9, "div", 23);
    \u0275\u0275element(10, "img", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 25)(12, "div", 26)(13, "h2");
    \u0275\u0275text(14, "Personal Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 27)(16, "div", 28)(17, "span");
    \u0275\u0275text(18, "Name: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "h5");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 28)(22, "span");
    \u0275\u0275text(23, "Gender: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "h5");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 28)(27, "span");
    \u0275\u0275text(28, "DOB: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "h5");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 29)(32, "span");
    \u0275\u0275text(33, "E- Mail: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "h5");
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 28)(37, "span");
    \u0275\u0275text(38, "Mobile No: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "h5");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(41, "div", 26)(42, "h2");
    \u0275\u0275text(43, "Professional Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 27)(45, "div", 28)(46, "span");
    \u0275\u0275text(47, "Batch: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "h5");
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 28)(51, "span");
    \u0275\u0275text(52, "Cadre: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "h5");
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 28)(56, "span");
    \u0275\u0275text(57, "Discipline: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "h5");
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 28)(61, "span");
    \u0275\u0275text(62, "Languages: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "h5");
    \u0275\u0275text(64);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(65, "div", 26)(66, "h2");
    \u0275\u0275text(67, "Present Posting: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 27)(69, "div", 28)(70, "h5");
    \u0275\u0275text(71);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.user.status !== "approved");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.user.status == "approved");
    \u0275\u0275advance(4);
    \u0275\u0275property("src", (ctx_r2.user == null ? null : ctx_r2.user.doptOfficer == null ? null : ctx_r2.user.doptOfficer.profilePic) || "assets/default-profile.jpg", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r2.user == null ? null : ctx_r2.user.doptOfficer == null ? null : ctx_r2.user.doptOfficer.englishName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.user == null ? null : ctx_r2.user.doptOfficer == null ? null : ctx_r2.user.doptOfficer.gender);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.user == null ? null : ctx_r2.user.doptOfficer == null ? null : ctx_r2.user.doptOfficer.dob);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.user.email || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.user.mobileNumber || "N/A");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate((ctx_r2.user == null ? null : ctx_r2.user.doptOfficer == null ? null : ctx_r2.user.doptOfficer.allotmentYear) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r2.user == null ? null : ctx_r2.user.doptOfficer == null ? null : ctx_r2.user.doptOfficer.cadre == null ? null : ctx_r2.user.doptOfficer.cadre.name) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r2.user == null ? null : ctx_r2.user.doptOfficer == null ? null : ctx_r2.user.doptOfficer.qualifications) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r2.user == null ? null : ctx_r2.user.doptOfficer == null ? null : ctx_r2.user.doptOfficer.languagesKnown) || "N/A");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate((ctx_r2.user == null ? null : ctx_r2.user.doptOfficer == null ? null : ctx_r2.user.doptOfficer.posting) || "N/A");
  }
}
var DetailedUserInfoComponent = class _DetailedUserInfoComponent {
  constructor(http, route) {
    this.http = http;
    this.route = route;
    this.user = null;
    this.loading = true;
    this.error = null;
    this.userIdToDelete = null;
    this.toastMessage = "";
    this.toastType = "success";
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const userId = params["id"];
      if (userId) {
        this.fetchUser(userId);
      }
    });
  }
  fetchUser(id) {
    this.loading = true;
    this.http.get(`${environment.apiUrl}/admin/users/?id=${id}`).subscribe({
      next: (res) => {
        if (Array.isArray(res.data?.data)) {
          this.user = res.data.data[0] || null;
        } else {
          this.user = res.data?.data || null;
        }
        this.loading = false;
      },
      error: (err) => {
        this.error = "Failed to load user";
        this.loading = false;
        console.error(err);
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
  confirmDelete() {
    if (!this.userIdToDelete)
      return;
    const token = localStorage.getItem("authToken") || "";
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    const body = {
      isActive: false,
      account: { id: this.userIdToDelete }
    };
    this.http.patch(`${environment.apiUrl}/admin/user`, body, { headers }).subscribe({
      next: () => {
        this.showToast("User Account Deactivated successfully", "success");
        if (this.user?.id === this.userIdToDelete) {
          this.fetchUser(this.user.id);
        }
      },
      error: (err) => {
        console.error(err);
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
    const token = localStorage.getItem("authToken") || "";
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    const body = {
      users: [{ id: user.id }],
      status: "approved"
    };
    this.http.put(`${environment.apiUrl}/admin/users`, body, { headers }).subscribe({
      next: () => {
        this.showToast(`User ${user.doptOfficer?.englishName} approved successfully`, "success");
        this.fetchUser(user.id);
      },
      error: (err) => {
        console.error(err);
        this.showToast("Failed to approve user", "danger");
      }
    });
  }
  rejectUser(user) {
    const token = localStorage.getItem("authToken") || "";
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    const body = {
      users: [{ id: user.id }],
      status: "created"
    };
    this.http.put(`${environment.apiUrl}/admin/users`, body, { headers }).subscribe({
      next: () => {
        this.showToast(`User ${user.doptOfficer?.englishName} moved to pending list`, "warning");
        this.fetchUser(user.id);
      },
      error: (err) => {
        console.error(err);
        this.showToast("Failed to move user", "danger");
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
    this.\u0275fac = function DetailedUserInfoComponent_Factory(t) {
      return new (t || _DetailedUserInfoComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DetailedUserInfoComponent, selectors: [["app-detailed-user-info"]], viewQuery: function DetailedUserInfoComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.toastElement = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 22, vars: 5, consts: [["toastElement", ""], [1, "toast-container", "position-fixed", "top-0", "end-0", "p-3"], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true"], [1, "d-flex"], [1, "toast-body"], ["type", "button", "data-bs-dismiss", "toast", "aria-label", "Close", 1, "btn-close", "btn-close-white", "me-2", "m-auto"], ["id", "confirmDeleteModal", "tabindex", "-1", "aria-labelledby", "confirmDeleteLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "confirmDeleteLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-prime", 3, "click"], ["class", "main-profile-info", 4, "ngIf"], [1, "main-profile-info"], [1, "main-page-heading", "d-flex", "align-items-center", "justify-content-between", "mb-4"], [1, "buttonss", "d-flex", "gap-3"], ["class", "btn btn-prime", "data-bs-toggle", "offcanvas", "data-bs-target", "#addNewsDrawer", 3, "click", 4, "ngIf"], [1, "all-user-deatils-div"], [1, "profile-photo-div", "p-2"], [1, "inner-profile-div", "position-relative"], ["alt", "profile-image", "draggable", "false", 1, "profile-image", 3, "src"], [1, "info-div"], [1, "info-heading-div"], [1, "inner-info", "d-flex", "flex-column", "gap-3"], [1, "inf"], [1, "inf", "d-flex", "align-items-center"], ["data-bs-toggle", "offcanvas", "data-bs-target", "#addNewsDrawer", 1, "btn", "btn-prime", 3, "click"]], template: function DetailedUserInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2, 0)(3, "div", 3)(4, "div", 4);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "button", 5);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "h5", 10);
        \u0275\u0275text(12, "Confirm Deactivation");
        \u0275\u0275elementEnd();
        \u0275\u0275element(13, "button", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 12);
        \u0275\u0275text(15, " Are you sure you want to deactivate this user account? ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 13)(17, "button", 14);
        \u0275\u0275text(18, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "button", 15);
        \u0275\u0275listener("click", function DetailedUserInfoComponent_Template_button_click_19_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.confirmDelete());
        });
        \u0275\u0275text(20, "Deactivate");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275template(21, DetailedUserInfoComponent_div_21_Template, 72, 13, "div", 16);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275classMapInterpolate1("toast align-items-center text-bg-", ctx.toastType, " border-0");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", ctx.toastMessage, " ");
        \u0275\u0275advance(16);
        \u0275\u0275property("ngIf", ctx.user);
      }
    }, dependencies: [CommonModule, NgIf], styles: ["\n\n.main-profile-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--Text, #211b3a);\n  font-family: Urbanist;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 28px;\n}\n.main-profile-info[_ngcontent-%COMP%]   .all-user-deatils-div[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  background: #fff;\n  padding: 120px 30px 30px 30px;\n  position: relative;\n  margin-top: 90px;\n}\n.info-div[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n.info-heading-div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--Text, #211b3a);\n  font-family: Urbanist;\n  font-size: 22px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 28px;\n  margin-bottom: 30px;\n}\n.inf[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.inf[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #000;\n  font-family: Urbanist;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 28px;\n  width: 100px;\n}\n.inf[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.78);\n  font-family: Urbanist;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 28px;\n  margin: 0px;\n}\n.inf[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: rgba(11, 56, 161, 0.78);\n  font-family: Urbanist;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 28px;\n  margin: 0px;\n  cursor: pointer;\n}\n.warning-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background-color: #fff4db;\n  border-radius: 8px;\n  padding: 12px;\n  gap: 8px;\n  color: #333;\n}\n.warning-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #a16800;\n  font-family: Urbanist;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 18px;\n  margin: 0;\n}\n.form-label[_ngcontent-%COMP%] {\n  color: var(--Text-Dark, #212121);\n  font-family: Urbanist;\n  font-size: var(--Font-Size-2, 14px);\n  font-style: normal;\n  font-weight: 500;\n  line-height: var(--Line-Heights-10, 20px);\n  letter-spacing: var(--Letter-Spacing-2, 0.1px);\n}\n.profile-photo-div[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  box-shadow: 1px -23px 29px -13px rgba(0, 0, 0, 0.216);\n  width: max-content;\n  position: absolute;\n  top: -30%;\n  left: 50%;\n  transform: translate(-50%, 30%);\n}\n.profile-photo-div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  height: 150px;\n  width: 150px;\n}\n.password-input[_ngcontent-%COMP%] {\n  position: relative;\n}\n.password-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-right: 40px;\n}\n.password-input[_ngcontent-%COMP%]   .eye-button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n}\n.password-input[_ngcontent-%COMP%]   .eye-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n}\n.profile-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: top;\n}\n.edit-icon-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 4px;\n  right: -10px;\n  background: rgba(200, 200, 200, 0.6);\n  color: #fff;\n  border: none;\n  border-radius: 50%;\n  height: 50px;\n  width: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n}\n.edit-icon-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.8);\n}\n.edit-icon-btn[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #fff;\n}\n.preview-img[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  object-fit: cover;\n}\n  image-cropper {\n  max-width: 200px;\n  height: 200px;\n}\n  image-cropper .cropper-container .cropper-drag-box {\n  background-color: rgb(0, 0, 0) !important;\n}\n@media (max-width: 850px) {\n  .info-div[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(1, 1fr);\n    gap: 20px;\n  }\n  .inf[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    text-wrap: wrap;\n  }\n  .profile-photo-div[_ngcontent-ng-c4048503756][_ngcontent-%COMP%] {\n    border-radius: 999px;\n    box-shadow: 1px -23px 29px -13px rgba(0, 0, 0, 0.216);\n    width: max-content;\n    position: absolute;\n    top: -30%;\n    left: 50%;\n    transform: translate(-50%, 30%);\n  }\n}\n/*# sourceMappingURL=detailed-user-info.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DetailedUserInfoComponent, { className: "DetailedUserInfoComponent", filePath: "src/app/IAS-portal/pages/detailed-user-info/detailed-user-info.component.ts", lineNumber: 15 });
})();
export {
  DetailedUserInfoComponent
};
//# sourceMappingURL=chunk-FIPCQABH.mjs.map
