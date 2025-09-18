import {
  UserService
} from "./chunk-6NFBHM2A.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
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
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-PY442ZFB.js";
import "./chunk-ASLTLD6L.js";

// src/app/user-portal/pages/user-profile/user-profile.component.ts
var _c0 = ["successToast"];
var _c1 = ["errorToast"];
function UserProfileComponent_div_14_div_21_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Password is required.");
    \u0275\u0275elementEnd();
  }
}
function UserProfileComponent_div_14_div_21_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Minimum 8 characters required.");
    \u0275\u0275elementEnd();
  }
}
function UserProfileComponent_div_14_div_21_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Must include uppercase, number, and special character. ");
    \u0275\u0275elementEnd();
  }
}
function UserProfileComponent_div_14_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275template(1, UserProfileComponent_div_14_div_21_span_1_Template, 2, 0, "span", 40)(2, UserProfileComponent_div_14_div_21_span_2_Template, 2, 0, "span", 40)(3, UserProfileComponent_div_14_div_21_span_3_Template, 2, 0, "span", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r1.changepassword.get("newPassword")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx_r1.changepassword.get("newPassword")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["minlength"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_6_0 = ctx_r1.changepassword.get("newPassword")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["pattern"]);
  }
}
function UserProfileComponent_div_14_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1, " Passwords do not match. ");
    \u0275\u0275elementEnd();
  }
}
function UserProfileComponent_div_14_div_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "span");
    \u0275\u0275text(2, "State: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h5");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((ctx_r1.user.doptOfficer == null ? null : ctx_r1.user.doptOfficer.placeOfDomicile) || "Not Provided");
  }
}
function UserProfileComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "h1");
    \u0275\u0275text(3, "Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 11)(5, "button", 12);
    \u0275\u0275text(6, "Edit Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 13);
    \u0275\u0275text(8, "Change password");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 14)(10, "div", 15)(11, "h5", 16);
    \u0275\u0275text(12, "Change Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "button", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 18)(15, "form", 19);
    \u0275\u0275listener("ngSubmit", function UserProfileComponent_div_14_Template_form_ngSubmit_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(16, "div", 20)(17, "div", 21)(18, "label", 22);
    \u0275\u0275text(19, "New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 23);
    \u0275\u0275template(21, UserProfileComponent_div_14_div_21_Template, 4, 3, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 21)(23, "label", 22);
    \u0275\u0275text(24, "Confirm Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 25);
    \u0275\u0275template(26, UserProfileComponent_div_14_div_26_Template, 2, 0, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 26);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(28, "svg", 27);
    \u0275\u0275element(29, "path", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(30, "p");
    \u0275\u0275text(31, " Once your password is changed, you will need to log in again with the new password. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 29)(33, "button", 30);
    \u0275\u0275text(34, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 31);
    \u0275\u0275text(36, "Submit");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(37, "div", 32)(38, "div", 33)(39, "div", 34)(40, "h2");
    \u0275\u0275text(41, "Personal Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 35)(43, "div", 36)(44, "span");
    \u0275\u0275text(45, "Name: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "h5");
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 36)(49, "span");
    \u0275\u0275text(50, "Gender: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "h5");
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 36)(54, "span");
    \u0275\u0275text(55, "DOB: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "h5");
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(58, "div", 34)(59, "h2");
    \u0275\u0275text(60, "Contact Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 35)(62, "div", 37)(63, "span");
    \u0275\u0275text(64, "E- Mail: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "h5");
    \u0275\u0275text(66);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 36)(68, "span");
    \u0275\u0275text(69, "Mobile No: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "h5");
    \u0275\u0275text(71);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(72, "div", 34)(73, "h2");
    \u0275\u0275text(74, "Place Of Domicile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "div", 35);
    \u0275\u0275template(76, UserProfileComponent_div_14_div_76_Template, 5, 1, "div", 38);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275property("formGroup", ctx_r1.changepassword);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx_r1.changepassword.get("newPassword")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx_r1.changepassword.get("newPassword")) == null ? null : tmp_4_0.invalid));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.changepassword.hasError("passwordMismatch") && ((tmp_5_0 = ctx_r1.changepassword.get("confirmPassword")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(21);
    \u0275\u0275textInterpolate(ctx_r1.user.doptOfficer == null ? null : ctx_r1.user.doptOfficer.englishName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.user.doptOfficer == null ? null : ctx_r1.user.doptOfficer.gender);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.user.doptOfficer == null ? null : ctx_r1.user.doptOfficer.dob);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.user.email || "Not provided");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.user.mobileNumber || "Not Provided");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.user.doptOfficer == null ? null : ctx_r1.user.doptOfficer.placeOfDomicile);
  }
}
var UserProfileComponent = class _UserProfileComponent {
  constructor(fb, userService, http) {
    this.fb = fb;
    this.userService = userService;
    this.http = http;
    this.user = null;
    this.passwordsMatchValidator = (group) => {
      const newPassword = group.get("newPassword")?.value;
      const confirmPassword = group.get("confirmPassword")?.value;
      return newPassword === confirmPassword ? null : { passwordMismatch: true };
    };
  }
  ngOnInit() {
    this.userService.getUser().subscribe((user) => {
      this.user = user;
    });
    this.changepassword = this.fb.group({
      newPassword: [
        "",
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)
        ]
      ],
      confirmPassword: ["", Validators.required]
    }, { validators: this.passwordsMatchValidator });
  }
  showSuccessToast() {
    const toast = new bootstrap.Toast(this.successToast.nativeElement);
    toast.show();
  }
  showErrorToast() {
    const toast = new bootstrap.Toast(this.errorToast.nativeElement);
    toast.show();
  }
  onSubmit() {
    if (this.changepassword.invalid) {
      this.showErrorToast();
      return;
    }
    const { newPassword, confirmPassword } = this.changepassword.value;
    const token = localStorage.getItem("authToken");
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    const body = {
      password: newPassword,
      confirmPassword
    };
    this.http.post(`${environment.apiUrl}/accounts/setup-password`, body, { headers }).subscribe({
      next: () => {
        this.showSuccessToast();
        setTimeout(() => {
          localStorage.clear();
          window.location.href = "/login";
        }, 2e3);
      },
      error: (err) => {
        console.error("Error setting up password:", err);
        this.showErrorToast();
      }
    });
  }
  static {
    this.\u0275fac = function UserProfileComponent_Factory(t) {
      return new (t || _UserProfileComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserProfileComponent, selectors: [["app-user-profile"]], viewQuery: function UserProfileComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 7);
        \u0275\u0275viewQuery(_c1, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.successToast = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.errorToast = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 1, consts: [["successToast", ""], ["errorToast", ""], [1, "toast-container", "position-fixed", "top-0", "end-0", "p-3"], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "align-items-center", "text-bg-success", "border-0"], [1, "d-flex"], [1, "toast-body"], ["type", "button", "data-bs-dismiss", "toast", 1, "btn-close", "btn-close-white", "me-2", "m-auto"], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "align-items-center", "text-bg-danger", "border-0"], ["class", "main-profile-info", 4, "ngIf"], [1, "main-profile-info"], [1, "main-page-heading", "d-flex", "align-items-center", "justify-content-between", "mb-4"], [1, "buttonss", "d-flex", "gap-3"], [1, "btn", "btn-donate"], ["data-bs-toggle", "offcanvas", "data-bs-target", "#addNewsDrawer", 1, "btn", "btn-donate"], ["tabindex", "-1", "id", "addNewsDrawer", "aria-labelledby", "addNewsDrawerLabel", 1, "offcanvas", "offcanvas-end"], [1, "offcanvas-header"], ["id", "addNewsDrawerLabel"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "text-reset"], [1, "offcanvas-body"], [1, "d-flex", "flex-column", "justify-content-between", "h-100", 3, "ngSubmit", "formGroup"], [1, "inner-fields"], [1, "mb-3"], [1, "form-label"], ["type", "password", "placeholder", "Enter new password", "formControlName", "newPassword", 1, "form-control"], ["class", "text-danger small mt-1", 4, "ngIf"], ["type", "password", "placeholder", "Re-enter new password", "formControlName", "confirmPassword", 1, "form-control"], [1, "warning-box"], ["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none"], ["d", "M6.33325 10.3333H7.66658V6.33331H6.33325V10.3333ZM6.99992 4.99998C7.18881 4.99998 7.34714 4.93609 7.47492 4.80831C7.6027 4.68053 7.66658 4.5222 7.66658 4.33331C7.66658 4.14442 7.6027 3.98609 7.47492 3.85831C7.34714 3.73054 7.18881 3.66665 6.99992 3.66665C6.81103 3.66665 6.6527 3.73054 6.52492 3.85831C6.39714 3.98609 6.33325 4.14442 6.33325 4.33331C6.33325 4.5222 6.39714 4.68053 6.52492 4.80831C6.6527 4.93609 6.81103 4.99998 6.99992 4.99998ZM6.99992 13.6666C6.0777 13.6666 5.21103 13.4916 4.39992 13.1416C3.58881 12.7916 2.88325 12.3166 2.28325 11.7166C1.68325 11.1166 1.20825 10.4111 0.858252 9.59998C0.508252 8.78887 0.333252 7.9222 0.333252 6.99998C0.333252 6.07776 0.508252 5.21109 0.858252 4.39998C1.20825 3.58887 1.68325 2.88331 2.28325 2.28331C2.88325 1.68331 3.58881 1.20831 4.39992 0.858313C5.21103 0.508313 6.0777 0.333313 6.99992 0.333313C7.92214 0.333313 8.78881 0.508313 9.59992 0.858313C10.411 1.20831 11.1166 1.68331 11.7166 2.28331C12.3166 2.88331 12.7916 3.58887 13.1416 4.39998C13.4916 5.21109 13.6666 6.07776 13.6666 6.99998C13.6666 7.9222 13.4916 8.78887 13.1416 9.59998C12.7916 10.4111 12.3166 11.1166 11.7166 11.7166C11.1166 12.3166 10.411 12.7916 9.59992 13.1416C8.78881 13.4916 7.92214 13.6666 6.99992 13.6666ZM6.99992 12.3333C8.48881 12.3333 9.74992 11.8166 10.7833 10.7833C11.8166 9.74998 12.3333 8.48887 12.3333 6.99998C12.3333 5.51109 11.8166 4.24998 10.7833 3.21665C9.74992 2.18331 8.48881 1.66665 6.99992 1.66665C5.51103 1.66665 4.24992 2.18331 3.21659 3.21665C2.18325 4.24998 1.66659 5.51109 1.66659 6.99998C1.66659 8.48887 2.18325 9.74998 3.21659 10.7833C4.24992 11.8166 5.51103 12.3333 6.99992 12.3333Z", "fill", "#A16800"], [1, "d-flex", "justify-content-end", "gap-3", "mt-3"], ["type", "button", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-secondary"], ["type", "submit", 1, "btn", "btn-prime"], [1, "all-user-deatils-div"], [1, "info-div"], [1, "info-heading-div"], [1, "inner-info", "d-flex", "flex-column", "gap-3"], [1, "inf"], [1, "inf", "d-flex", "align-items-center"], ["class", "inf", 4, "ngIf"], [1, "text-danger", "small", "mt-1"], [4, "ngIf"]], template: function UserProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3, 0)(3, "div", 4)(4, "div", 5);
        \u0275\u0275text(5, " \u2705 Password changed successfully. Logging out... ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "button", 6);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 2)(8, "div", 7, 1)(10, "div", 4)(11, "div", 5);
        \u0275\u0275text(12, " \u274C Failed to change password. Please try again. ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(13, "button", 6);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(14, UserProfileComponent_div_14_Template, 77, 9, "div", 8);
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275property("ngIf", ctx.user);
      }
    }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.main-profile-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--Text, #211B3A);\n  font-family: Urbanist;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 28px;\n}\n.main-profile-info[_ngcontent-%COMP%]   .all-user-deatils-div[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  background: #FFF;\n  padding: 30px;\n}\n.info-div[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n.info-heading-div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--Text, #211B3A);\n  font-family: Urbanist;\n  font-size: 22px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 28px;\n  margin-bottom: 30px;\n}\n.inf[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.inf[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #000;\n  font-family: Urbanist;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 28px;\n  width: 100px;\n}\n.inf[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.78);\n  font-family: Urbanist;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 28px;\n  margin: 0px;\n}\n.inf[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: rgba(11, 56, 161, 0.78);\n  font-family: Urbanist;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 28px;\n  margin: 0px;\n  cursor: pointer;\n}\n.warning-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background-color: #fff4db;\n  border-radius: 8px;\n  padding: 12px;\n  gap: 8px;\n  color: #333;\n}\n.warning-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #A16800;\n  font-family: Urbanist;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 18px;\n  margin: 0;\n}\n.form-label[_ngcontent-%COMP%] {\n  color: var(--Text-Dark, #212121);\n  font-family: Urbanist;\n  font-size: var(--Font-Size-2, 14px);\n  font-style: normal;\n  font-weight: 500;\n  line-height: var(--Line-Heights-10, 20px);\n  letter-spacing: var(--Letter-Spacing-2, 0.1px);\n}\n/*# sourceMappingURL=user-profile.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserProfileComponent, { className: "UserProfileComponent", filePath: "src/app/user-portal/pages/user-profile/user-profile.component.ts", lineNumber: 16 });
})();
export {
  UserProfileComponent
};
//# sourceMappingURL=chunk-ZZ4BIEJS.js.map
