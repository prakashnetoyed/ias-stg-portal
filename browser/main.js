import {
  ToastService
} from "./chunk-6VOPMYOA.js";
import {
  IasLoaderComponent
} from "./chunk-7YBSCFQJ.js";
import {
  UserService
} from "./chunk-2SS6KKRZ.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-HUQG7EPZ.js";
import {
  DomRendererFactory2,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  bootstrapApplication,
  provideClientHydration,
  provideRouter,
  withInMemoryScrolling
} from "./chunk-OWY7W7RG.js";
import {
  environment
} from "./chunk-WYW2S4QW.js";
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
  provideHttpClient,
  withFetch,
  withInterceptors
} from "./chunk-SF3QATI4.js";
import {
  CommonModule,
  DOCUMENT,
  DatePipe,
  NgForOf,
  NgIf,
  isPlatformBrowser
} from "./chunk-DDS5LGCN.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionScheduler,
  Injectable,
  NgZone,
  PLATFORM_ID,
  RendererFactory2,
  RuntimeError,
  catchError,
  from,
  inject,
  makeEnvironmentProviders,
  performanceMarkFeature,
  setClassMetadata,
  switchMap,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-TPVSKZNW.js";
import "./chunk-ASLTLD6L.js";

// src/app/common/ias-header/ias-header.component.ts
var _c0 = () => ({ exact: true });
function IasHeaderComponent_ng_container_51_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "img", 38);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.user == null ? null : ctx_r1.user.doptOfficer == null ? null : ctx_r1.user.doptOfficer.profilePic, \u0275\u0275sanitizeUrl);
  }
}
function IasHeaderComponent_ng_container_51_div_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getUserInitials(), " ");
  }
}
function IasHeaderComponent_ng_container_51_div_1_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li")(2, "a", 21);
    \u0275\u0275text(3, "Admin Profile");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "li")(5, "a", 21);
    \u0275\u0275text(6, "Admin Dashboard");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", "/home/profile");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", "/home");
  }
}
function IasHeaderComponent_ng_container_51_div_1_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 21);
    \u0275\u0275text(2, "User Profile");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "li")(4, "a", 21);
    \u0275\u0275text(5, "User Dashboard");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", "/user-home/user-profile");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", "/user-home");
  }
}
function IasHeaderComponent_ng_container_51_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "button", 32)(2, "div", 33);
    \u0275\u0275template(3, IasHeaderComponent_ng_container_51_div_1_ng_container_3_Template, 2, 1, "ng-container", 34)(4, IasHeaderComponent_ng_container_51_div_1_ng_template_4_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "ul", 35);
    \u0275\u0275template(7, IasHeaderComponent_ng_container_51_div_1_ng_container_7_Template, 7, 2, "ng-container", 34)(8, IasHeaderComponent_ng_container_51_div_1_ng_template_8_Template, 6, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(10, "li");
    \u0275\u0275element(11, "hr", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li")(13, "a", 37);
    \u0275\u0275listener("click", function IasHeaderComponent_ng_container_51_div_1_Template_a_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275text(14, "Logout");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const initials_r3 = \u0275\u0275reference(5);
    const userMenu_r4 = \u0275\u0275reference(9);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.user == null ? null : ctx_r1.user.doptOfficer == null ? null : ctx_r1.user.doptOfficer.profilePic)("ngIfElse", initials_r3);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.userRole === "admin")("ngIfElse", userMenu_r4);
  }
}
function IasHeaderComponent_ng_container_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, IasHeaderComponent_ng_container_51_div_1_Template, 15, 4, "div", 30);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoggedIn);
  }
}
function IasHeaderComponent_ng_container_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 39);
    \u0275\u0275text(2, "Log in / Sign up");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", "/login");
  }
}
var IasHeaderComponent = class _IasHeaderComponent {
  constructor(router, userService, toastService, platformId) {
    this.router = router;
    this.userService = userService;
    this.toastService = toastService;
    this.platformId = platformId;
    this.dropdownOpen = false;
    this.user = null;
    this.isLoggedIn = null;
    this.userRole = null;
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
  logout() {
    if (this.isBrowser) {
      localStorage.removeItem("authToken");
      this.isLoggedIn = false;
    }
    this.router.navigate([""]);
  }
  ngOnInit() {
    if (this.isBrowser) {
      const token = localStorage.getItem("authToken");
      this.userRole = localStorage.getItem("userRole") ? atob(localStorage.getItem("userRole")) : null;
      this.isLoggedIn = !!token;
      if (this.isLoggedIn) {
        this.userService.getUser().subscribe({
          next: (user) => this.user = user,
          error: () => this.user = null
        });
      }
    }
  }
  getUserInitials() {
    if (!this.user?.doptOfficer?.englishName)
      return "NA";
    const honorifics = ["shri", "mr", "ms", "mrs", "dr", "prof"];
    const names = this.user.doptOfficer.englishName.trim().split(/\s+/).filter((n) => !honorifics.includes(n.toLowerCase()));
    if (names.length === 0)
      return "NA";
    if (names.length === 1) {
      return names[0].substring(0, 2).toUpperCase();
    }
    const first = names[0].charAt(0).toUpperCase();
    const last = names[names.length - 1].charAt(0).toUpperCase();
    return first + last;
  }
  goHome() {
    if (this.router.url === "/") {
      this.toastService.showToast("You are already on Home page", "success");
    } else {
      this.router.navigateByUrl("/");
    }
  }
  static {
    this.\u0275fac = function IasHeaderComponent_Factory(t) {
      return new (t || _IasHeaderComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(PLATFORM_ID));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IasHeaderComponent, selectors: [["app-ias-header"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 53, vars: 30, consts: [["initials", ""], ["userMenu", ""], [1, "main-ncs-header-div"], [1, "container", "d-flex", "align-items-center", "justify-content-between"], [1, "logo-div", 2, "cursor", "pointer", 3, "click"], ["src", "../../../assets/logo/ias-small-logo.png", "alt", "ias-logo", "draggable", "false"], [1, "navigationmenu", "d-flex", "align-items-center"], [1, "navbar", "navbar-expand-lg"], [1, "container-fluid"], ["type", "button", "data-bs-toggle", "offcanvas", "data-bs-target", "#offcanvasNavbar", "aria-controls", "offcanvasNavbar", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse", "d-none", "d-lg-flex"], [1, "navbar-nav", "ms-auto"], ["routerLinkActive", "active-link", 1, "nav-link", 3, "routerLink", "routerLinkActiveOptions"], [1, "nav-item", "dropdown"], ["data-bs-toggle", "dropdown", "aria-expanded", "false", "id", "dropdownMenuButton", 1, "d-flex", "align-items-center", "text-decoration-none", "nav-link"], [1, "me-2"], [1, "arrow-icon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "10", "fill", "none"], ["d", "M12.6 0.8L14 2.2 7 9.2 0 2.2 1.4 0.8 7 6.375 12.6 0.8Z", "fill", "#222"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu", "dropdown-menu-dark"], [1, "dropdown-item", 3, "routerLink"], ["tabindex", "-1", "id", "offcanvasNavbar", "aria-labelledby", "offcanvasNavbarLabel", 1, "offcanvas", "offcanvas-start", "d-lg-none"], [1, "offcanvas-header"], ["id", "offcanvasNavbarLabel", 1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "text-reset"], [1, "offcanvas-body"], [1, "navbar-nav"], ["routerLinkActive", "active-link", "data-bs-dismiss", "offcanvas", 1, "nav-link", 3, "routerLink", "routerLinkActiveOptions"], [4, "ngIf"], ["class", "dropdown", 4, "ngIf"], [1, "dropdown"], ["type", "button", "id", "profileDropdown", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "dropdown-toggle", "user-profile", "d-flex", "align-items-center", "p-0"], [1, "avatar"], [4, "ngIf", "ngIfElse"], ["aria-labelledby", "profileDropdown", 1, "dropdown-menu", "dropdown-menu-end"], [1, "dropdown-divider"], [1, "dropdown-item", "text-danger", 2, "cursor", "pointer", 3, "click"], ["alt", "User Avatar", 3, "src"], [1, "btn", "btn-prime", 3, "routerLink"]], template: function IasHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
        \u0275\u0275listener("click", function IasHeaderComponent_Template_div_click_2_listener() {
          return ctx.goHome();
        });
        \u0275\u0275element(3, "img", 5);
        \u0275\u0275elementStart(4, "h1");
        \u0275\u0275text(5, "Indian Administrative Service ");
        \u0275\u0275element(6, "br");
        \u0275\u0275text(7, "Central Association");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 6)(9, "nav", 7)(10, "div", 8)(11, "button", 9);
        \u0275\u0275element(12, "span", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 11)(14, "div", 12)(15, "a", 13);
        \u0275\u0275text(16, "About us");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "a", 13);
        \u0275\u0275text(18, "Membership");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "a", 13);
        \u0275\u0275text(20, "Community");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "li", 14)(22, "a", 15)(23, "span", 16);
        \u0275\u0275text(24, "Resources");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "i", 17);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(26, "svg", 18);
        \u0275\u0275element(27, "path", 19);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(28, "ul", 20)(29, "li")(30, "a", 21);
        \u0275\u0275text(31, "News & Blogs");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(32, "a", 13);
        \u0275\u0275text(33, "Contact us");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "div", 22)(35, "div", 23)(36, "h5", 24);
        \u0275\u0275text(37, "Menu");
        \u0275\u0275elementEnd();
        \u0275\u0275element(38, "button", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div", 26)(40, "div", 27)(41, "a", 28);
        \u0275\u0275text(42, "About us");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "a", 28);
        \u0275\u0275text(44, "Membership");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "a", 28);
        \u0275\u0275text(46, "Community");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "a", 28);
        \u0275\u0275text(48, "News & Blogs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "a", 28);
        \u0275\u0275text(50, "Contact us");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275template(51, IasHeaderComponent_ng_container_51_Template, 2, 1, "ng-container", 29)(52, IasHeaderComponent_ng_container_52_Template, 3, 1, "ng-container", 29);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(15);
        \u0275\u0275property("routerLink", "/about-us")("routerLinkActiveOptions", \u0275\u0275pureFunction0(21, _c0));
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", "membership")("routerLinkActiveOptions", \u0275\u0275pureFunction0(22, _c0));
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", "community")("routerLinkActiveOptions", \u0275\u0275pureFunction0(23, _c0));
        \u0275\u0275advance(11);
        \u0275\u0275property("routerLink", "news-blogs");
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", "/contact-us")("routerLinkActiveOptions", \u0275\u0275pureFunction0(24, _c0));
        \u0275\u0275advance(9);
        \u0275\u0275property("routerLink", "/about-us")("routerLinkActiveOptions", \u0275\u0275pureFunction0(25, _c0));
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", "membership")("routerLinkActiveOptions", \u0275\u0275pureFunction0(26, _c0));
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", "community")("routerLinkActiveOptions", \u0275\u0275pureFunction0(27, _c0));
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", "news-blogs")("routerLinkActiveOptions", \u0275\u0275pureFunction0(28, _c0));
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", "/contact-us")("routerLinkActiveOptions", \u0275\u0275pureFunction0(29, _c0));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.isLoggedIn && ctx.isLoggedIn !== null);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoggedIn && ctx.isLoggedIn !== null);
      }
    }, dependencies: [CommonModule, NgIf, RouterModule, RouterLink, RouterLinkActive], styles: ["\n\n.main-ncs-header-div[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 12px 0px;\n  position: sticky;\n  top: 0px;\n  z-index: 10;\n  display: block;\n}\n.logo-div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.logo-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #000;\n  font-family: Urbanist;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 22.393px;\n  margin: 0px;\n}\n@media (max-width: 900px) {\n  .logo-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n}\n.nav-link[_ngcontent-%COMP%] {\n  color: #000;\n  font-family: Urbanist;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 22.393px;\n  text-decoration: none !important;\n}\n.active-link[_ngcontent-%COMP%] {\n  color: #000;\n  font-weight: bold;\n}\n.arrow-icon[_ngcontent-%COMP%] {\n  display: flex;\n  transition: transform 0.3s ease;\n}\n.show[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.nav-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.main-epfo-header[_ngcontent-%COMP%] {\n  background: #FFF;\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  width: 100%;\n  box-shadow: 18px -6px 6px 6px rgb(163, 163, 163);\n}\n.user-info[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  text-align: right;\n}\n.name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #2c2c2c;\n}\n.role[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9e9e9e;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  background-color: rgba(126, 87, 194, 0.1);\n  color: #673ab7;\n  font-size: 14px;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  margin-left: 8px;\n  overflow: hidden;\n  text-transform: uppercase;\n}\n.avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n  border-radius: 50%;\n  display: block;\n}\n.btn-check[_ngcontent-%COMP%]:checked    + .btn[_ngcontent-%COMP%], .btn.active[_ngcontent-%COMP%], .btn.show[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:first-child:active, [_ngcontent-%COMP%]:not(.btn-check)    + .btn[_ngcontent-%COMP%]:active {\n  color: var(--bs-btn-active-color);\n  background-color: var(--bs-btn-active-bg);\n  border-color: rgba(255, 255, 255, 0);\n}\n.dropdown-menu-dark[_ngcontent-%COMP%] {\n  --bs-dropdown-color: #dee2e6;\n  --bs-dropdown-bg: #fff;\n  --bs-dropdown-border-color: var(--bs-border-color-translucent);\n  --bs-dropdown-box-shadow: ;\n  --bs-dropdown-link-color: #000;\n  --bs-dropdown-link-hover-color:#000;\n  --bs-dropdown-divider-bg: var(--bs-border-color-translucent);\n  --bs-dropdown-link-hover-bg: rgba(73, 47, 178, 0.20);\n  --bs-dropdown-link-active-color: #fff;\n  --bs-dropdown-link-active-bg: #0d6efd;\n  --bs-dropdown-link-disabled-color: #adb5bd;\n  --bs-dropdown-header-color: #adb5bd;\n  padding: 10px;\n  border-radius: 8px;\n}\n/*# sourceMappingURL=ias-header.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IasHeaderComponent, { className: "IasHeaderComponent", filePath: "src/app/common/ias-header/ias-header.component.ts", lineNumber: 14 });
})();

// src/app/common/ias-footer/ias-footer.component.ts
var IasFooterComponent = class _IasFooterComponent {
  static {
    this.\u0275fac = function IasFooterComponent_Factory(t) {
      return new (t || _IasFooterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IasFooterComponent, selectors: [["app-ias-footer"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 73, vars: 6, consts: [[1, "footer"], [1, "container"], [1, "footer-top"], [1, "footer-logo"], [1, "sbvhs", "d-flex", "align-items-center", "gap-2"], ["src", "../../../assets/logo/ias-small-logo.png", "alt", "IAS Association Logo"], [1, "org-name", "m-0", "p-0"], [1, "last-updated"], [1, "footer-links"], [3, "routerLink"], [1, "footer-contact"], [1, "social-icons"], ["href", "https://x.com/iasassociation", "target", "_blank"], [1, "fab", "fa-x-twitter"], ["href", "https://www.facebook.com/IASassociation/", "target", "_blank"], [1, "fab", "fa-facebook-f"], [1, "contact-info"], [1, "d-flex", "gap-2"], ["xmlns", "http://www.w3.org/2000/svg", "width", "17", "height", "18", "viewBox", "0 0 17 18", "fill", "none"], ["id", "mask0_52081_3854", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "17", "height", "18", 2, "mask-type", "alpha"], ["width", "17", "height", "18", "fill", "#D9D9D9"], ["mask", "url(#mask0_52081_3854)"], ["d", "M8.50742 9C8.92164 9 9.27624 8.85313 9.57121 8.55938C9.86618 8.26563 10.0137 7.9125 10.0137 7.5C10.0137 7.0875 9.86618 6.73438 9.57121 6.44063C9.27624 6.14687 8.92164 6 8.50742 6C8.0932 6 7.73861 6.14687 7.44363 6.44063C7.14866 6.73438 7.00117 7.0875 7.00117 7.5C7.00117 7.9125 7.14866 8.26563 7.44363 8.55938C7.73861 8.85313 8.0932 9 8.50742 9ZM8.50742 14.5125C10.0388 13.1125 11.1747 11.8406 11.9153 10.6969C12.6559 9.55312 13.0262 8.5375 13.0262 7.65C13.0262 6.2875 12.59 5.17188 11.7176 4.30312C10.8452 3.43438 9.77518 3 8.50742 3C7.23966 3 6.1696 3.43438 5.29723 4.30312C4.42486 5.17188 3.98867 6.2875 3.98867 7.65C3.98867 8.5375 4.35896 9.55312 5.09953 10.6969C5.8401 11.8406 6.97607 13.1125 8.50742 14.5125ZM8.50742 16.5C6.48654 14.7875 4.97715 13.1969 3.97926 11.7281C2.98137 10.2594 2.48242 8.9 2.48242 7.65C2.48242 5.775 3.08806 4.28125 4.29934 3.16875C5.51061 2.05625 6.91331 1.5 8.50742 1.5C10.1015 1.5 11.5042 2.05625 12.7155 3.16875C13.9268 4.28125 14.5324 5.775 14.5324 7.65C14.5324 8.9 14.0335 10.2594 13.0356 11.7281C12.0377 13.1969 10.5283 14.7875 8.50742 16.5Z", "fill", "#1C1B1F"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "viewBox", "0 0 18 18", "fill", "none"], ["id", "mask0_52081_3844", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "18", "height", "18", 2, "mask-type", "alpha"], ["width", "18", "height", "18", "fill", "#D9D9D9"], ["mask", "url(#mask0_52081_3844)"], ["d", "M8.25 12.75H9.75V8.25H8.25V12.75ZM9 6.75C9.2125 6.75 9.39063 6.67812 9.53438 6.53438C9.67813 6.39062 9.75 6.2125 9.75 6C9.75 5.7875 9.67813 5.60938 9.53438 5.46562C9.39063 5.32187 9.2125 5.25 9 5.25C8.7875 5.25 8.60938 5.32187 8.46563 5.46562C8.32188 5.60938 8.25 5.7875 8.25 6C8.25 6.2125 8.32188 6.39062 8.46563 6.53438C8.60938 6.67812 8.7875 6.75 9 6.75ZM9 16.5C7.9625 16.5 6.9875 16.3031 6.075 15.9094C5.1625 15.5156 4.36875 14.9813 3.69375 14.3063C3.01875 13.6313 2.48438 12.8375 2.09063 11.925C1.69687 11.0125 1.5 10.0375 1.5 9C1.5 7.9625 1.69687 6.9875 2.09063 6.075C2.48438 5.1625 3.01875 4.36875 3.69375 3.69375C4.36875 3.01875 5.1625 2.48438 6.075 2.09063C6.9875 1.69687 7.9625 1.5 9 1.5C10.0375 1.5 11.0125 1.69687 11.925 2.09063C12.8375 2.48438 13.6313 3.01875 14.3063 3.69375C14.9813 4.36875 15.5156 5.1625 15.9094 6.075C16.3031 6.9875 16.5 7.9625 16.5 9C16.5 10.0375 16.3031 11.0125 15.9094 11.925C15.5156 12.8375 14.9813 13.6313 14.3063 14.3063C13.6313 14.9813 12.8375 15.5156 11.925 15.9094C11.0125 16.3031 10.0375 16.5 9 16.5ZM9 15C10.675 15 12.0938 14.4187 13.2563 13.2563C14.4187 12.0938 15 10.675 15 9C15 7.325 14.4187 5.90625 13.2563 4.74375C12.0938 3.58125 10.675 3 9 3C7.325 3 5.90625 3.58125 4.74375 4.74375C3.58125 5.90625 3 7.325 3 9C3 10.675 3.58125 12.0938 4.74375 13.2563C5.90625 14.4187 7.325 15 9 15Z", "fill", "#1C1B1F"], [1, "text-muted"], [1, "mt-2", "needlink"], ["href", "tel:+919876543210", 1, "d-block", "text-primary"], ["href", "mailto:association.ias@gmail.com", 1, "d-block", "text-primary"], [1, "footer-bottom"], [1, "container", "d-flex", "align-items-center", "justify-content-between"], [1, "m-0"], [1, "footer-policies"], ["routerLink", "/Refund-Cancellation-Policy"], ["routerLink", "/Terms-Conditions"], ["routerLink", "/Privacy-Policy"]], template: function IasFooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275element(5, "img", 5);
        \u0275\u0275elementStart(6, "p", 6);
        \u0275\u0275text(7, "Indian Administrative Service ");
        \u0275\u0275element(8, "br");
        \u0275\u0275text(9, "Central Association");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 7);
        \u0275\u0275text(11, "Last updated: 22-08-2025");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 8)(13, "h4");
        \u0275\u0275text(14, "Important Links");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "a", 9);
        \u0275\u0275text(16, "About Us");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "a", 9);
        \u0275\u0275text(18, "Community");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "a", 9);
        \u0275\u0275text(20, "Membership");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "a", 9);
        \u0275\u0275text(22, "Contact Us");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 8)(24, "h4");
        \u0275\u0275text(25, "Resources");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "a", 9);
        \u0275\u0275text(27, "In the News");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "a", 9);
        \u0275\u0275text(29, "Blogs");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 10)(31, "div", 11)(32, "a", 12);
        \u0275\u0275element(33, "i", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "a", 14);
        \u0275\u0275element(35, "i", 15);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "div", 16)(37, "p", 17);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(38, "svg", 18)(39, "mask", 19);
        \u0275\u0275element(40, "rect", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "g", 21);
        \u0275\u0275element(42, "path", 22);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(43, "span");
        \u0275\u0275text(44, "Indian Administrative Service ");
        \u0275\u0275element(45, "br");
        \u0275\u0275text(46, "Central Association, New Delhi");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "div", 17);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(48, "svg", 23)(49, "mask", 24);
        \u0275\u0275element(50, "rect", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "g", 26);
        \u0275\u0275element(52, "path", 27);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(53, "div");
        \u0275\u0275text(54, " Need help?");
        \u0275\u0275elementStart(55, "span", 28);
        \u0275\u0275text(56, " Contact Help Desk:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "div", 29)(58, "a", 30);
        \u0275\u0275text(59, "[+91 9910659965]");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "a", 31);
        \u0275\u0275text(61, "[association.ias@gmail.com]");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(62, "div", 32)(63, "div", 33)(64, "p", 34);
        \u0275\u0275text(65, "\xA9 2024 - Copyright Ministry of Electronics and Information Technology. All rights reserved.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "div", 35)(67, "a", 36);
        \u0275\u0275text(68, "Refund & Cancellation Policy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "a", 37);
        \u0275\u0275text(70, "Terms & Conditions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "a", 38);
        \u0275\u0275text(72, "Privacy Policy");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(15);
        \u0275\u0275property("routerLink", "about-us");
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", "community");
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", "membership");
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", "contact-us");
        \u0275\u0275advance(5);
        \u0275\u0275property("routerLink", "/news-blogs");
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", "/news-blogs");
      }
    }, dependencies: [RouterLink], styles: ['\n\n.footer[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #000;\n  font-family: "Urbanist", sans-serif;\n}\n.footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.5fr 1fr 1fr 1.5fr;\n  gap: 30px;\n  padding: 40px 0px;\n}\n@media (max-width: 1024px) {\n  .footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.footer[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 80px;\n}\n.footer[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%]   .org-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-top: 8px;\n}\n.footer[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%]   .last-updated[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #f0f0f0;\n  border-radius: 20px;\n  padding: 10px 20px;\n  font-size: 12px;\n  margin-top: 28px;\n}\n.footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n.footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  color: inherit;\n  text-decoration: none;\n  margin-bottom: 8px;\n  font-size: 14px;\n}\n.footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.footer[_ngcontent-%COMP%]   .footer-contact[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n@media (max-width: 600px) {\n  .footer[_ngcontent-%COMP%]   .footer-contact[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%] {\n    justify-content: start;\n  }\n}\n.footer[_ngcontent-%COMP%]   .footer-contact[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  background: #f5f5f5;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #000;\n  font-size: 14px;\n  transition: 0.2s;\n  text-decoration: none;\n  opacity: 0.7;\n}\n.footer[_ngcontent-%COMP%]   .footer-contact[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #ddd;\n  opacity: 1;\n}\n.footer[_ngcontent-%COMP%]   .footer-contact[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  font-size: 14px;\n  line-height: 20px;\n}\n.footer[_ngcontent-%COMP%]   .footer-contact[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%] {\n  background: #000;\n  color: #fff;\n  font-size: 12px;\n  padding: 10px 0px;\n  flex-wrap: wrap;\n}\n@media (max-width: 600px) {\n  .footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n    text-align: center;\n  }\n}\n.footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   .footer-policies[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n}\n.footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   .footer-policies[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n}\n.footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   .footer-policies[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.footer[_ngcontent-%COMP%]   .needlink[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: rgba(0, 97, 188, 0.92);\n}\n/*# sourceMappingURL=ias-footer.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IasFooterComponent, { className: "IasFooterComponent", filePath: "src/app/common/ias-footer/ias-footer.component.ts", lineNumber: 11 });
})();

// src/app/common/accessibility-header/accessibility-header.component.ts
var AccessibilityHeaderComponent = class _AccessibilityHeaderComponent {
  constructor() {
    this.isMirrored = false;
  }
  toggleDarkMode() {
    this.isMirrored = !this.isMirrored;
  }
  sendMail() {
    window.location.href = "mailto:association.ias@gmail.com?subject=Help%20Desk%20Support&body=Hello,%0D%0A%0D%0AI am contacting the Help Desk for assistance.%0D%0A%0D%0ARegards,";
  }
  scrollToContent() {
    const element = document.getElementById("mainContent");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
  static {
    this.\u0275fac = function AccessibilityHeaderComponent_Factory(t) {
      return new (t || _AccessibilityHeaderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccessibilityHeaderComponent, selectors: [["app-accessibility-header"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 0, consts: [[1, "main-access-header-div"], [1, "inner-access", "container", "d-flex", "align-items-center", "justify-content-end"], [1, "right-access-div", "d-flex", "align-items-center", "justify-content-between", "gap-4"], [1, "skip-text", 3, "click"], [1, "social-icons"], ["href", "https://x.com/iasassociation", "target", "_blank"], [1, "fab", "fa-x-twitter"], ["href", "https://www.facebook.com/IASassociation/", "target", "_blank"], [1, "fab", "fa-facebook-f"], [1, "skip-text", "d-flex", "align-items-center", "gap-2", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "viewBox", "0 0 18 18", "fill", "none"], ["_ngcontent-ng-c2485631207", "", "id", "mask0_8942_12501", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "18", "height", "18", 2, "mask-type", "alpha"], ["_ngcontent-ng-c2485631207", "", "width", "18", "height", "18", "fill", "white"], ["_ngcontent-ng-c2485631207", "", "mask", "url(#mask0_8942_12501)"], ["_ngcontent-ng-c2485631207", "", "d", "M14.9625 15.75C13.4 15.75 11.8563 15.4094 10.3313 14.7281C8.80625 14.0469 7.41875 13.0813 6.16875 11.8313C4.91875 10.5813 3.95312 9.19375 3.27188 7.66875C2.59063 6.14375 2.25 4.6 2.25 3.0375C2.25 2.8125 2.325 2.625 2.475 2.475C2.625 2.325 2.8125 2.25 3.0375 2.25H6.075C6.25 2.25 6.40625 2.30937 6.54375 2.42812C6.68125 2.54688 6.7625 2.6875 6.7875 2.85L7.275 5.475C7.3 5.675 7.29375 5.84375 7.25625 5.98125C7.21875 6.11875 7.15 6.2375 7.05 6.3375L5.23125 8.175C5.48125 8.6375 5.77812 9.08437 6.12187 9.51562C6.46562 9.94688 6.84375 10.3625 7.25625 10.7625C7.64375 11.15 8.05 11.5094 8.475 11.8406C8.9 12.1719 9.35 12.475 9.825 12.75L11.5875 10.9875C11.7 10.875 11.8469 10.7906 12.0281 10.7344C12.2094 10.6781 12.3875 10.6625 12.5625 10.6875L15.15 11.2125C15.325 11.2625 15.4688 11.3531 15.5812 11.4844C15.6937 11.6156 15.75 11.7625 15.75 11.925V14.9625C15.75 15.1875 15.675 15.375 15.525 15.525C15.375 15.675 15.1875 15.75 14.9625 15.75Z", "fill", "white"]], template: function AccessibilityHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        \u0275\u0275listener("click", function AccessibilityHeaderComponent_Template_h1_click_3_listener() {
          return ctx.scrollToContent();
        });
        \u0275\u0275text(4, "Skip to Main Content ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 4)(6, "a", 5);
        \u0275\u0275element(7, "i", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "a", 7);
        \u0275\u0275element(9, "i", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "h1", 9);
        \u0275\u0275listener("click", function AccessibilityHeaderComponent_Template_h1_click_10_listener() {
          return ctx.sendMail();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(11, "svg", 10)(12, "mask", 11);
        \u0275\u0275element(13, "rect", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "g", 13);
        \u0275\u0275element(15, "path", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275text(16, " Contact Help Desk");
        \u0275\u0275elementEnd()()()();
      }
    }, dependencies: [RouterModule], styles: ["\n\n.main-access-header-div[_ngcontent-%COMP%] {\n  background: var(--material-theme-sys-light-on-background, #1F1F1F);\n  padding: 5px 0px;\n}\n.gov-text[_ngcontent-%COMP%] {\n  color: #EBEBEB;\n  font-family: var(--roboto-font);\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n}\n.skip-text[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Roboto;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  margin: 0px;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n}\n.skip-text[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  text-decoration: underline;\n}\n.screen-reader-div[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.dark-mode[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n}\n.inc-div[_ngcontent-%COMP%] {\n  padding: 8px;\n  transition: all 0.3s ease-in-out;\n  cursor: pointer;\n}\n.inc-div[_ngcontent-%COMP%]:hover {\n  border-radius: 4px;\n  background: rgba(255, 255, 255, 0.15);\n}\n.accessibility-header[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n}\n.language-selector[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  margin-top: 20px;\n}\n.language-selector[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  border: 1px solid #ccc;\n  background: #f1f1f1;\n  cursor: povar(--roboto-font);\n  transition: 0.3s;\n}\n.language-selector[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #ddd;\n}\n.text-content[_ngcontent-%COMP%] {\n  text-align: center;\n  transition: font-size 0.3s;\n}\n.text-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .text-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .text-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .text-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .text-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .text-content[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .text-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .text-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  transition: font-size 0.3s;\n}\n.level-popup[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 40px;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 9999;\n  background: rgba(0, 0, 0, 0.631372549);\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);\n  border-radius: 12px;\n  padding: 30px;\n  transition: opacity 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: _ngcontent-%COMP%_fadeIn 0.5s ease;\n}\n.popup-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.text-icon-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.text-icon-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n}\n.text-icon-container[_ngcontent-%COMP%]   .bigger-text-label[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n  color: var(--primary-white);\n  margin-top: 10px;\n}\n.level-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  margin-top: 10px;\n}\n.level-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 6px;\n  background: var(--brand-color);\n  border-radius: 4px;\n  transition: background 0.3s ease;\n}\n.level-indicator[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%] {\n  background: var(--primary-white);\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateX(-60%);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(-50%);\n  }\n}\n.mirrored[_ngcontent-%COMP%] {\n  transform: scaleX(-1);\n}\n.social-icons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n@media (max-width: 600px) {\n  .social-icons[_ngcontent-%COMP%] {\n    justify-content: start;\n  }\n}\n.social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  background: #ffffff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #000;\n  font-size: 14px;\n  transition: 0.2s;\n  text-decoration: none;\n  opacity: 0.7;\n}\n.social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #ddd;\n  opacity: 1;\n}\n@media screen and (max-width: 768px) {\n  .skip-text[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .screen-reader-div[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .font-inc-dec[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=accessibility-header.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccessibilityHeaderComponent, { className: "AccessibilityHeaderComponent", filePath: "src/app/common/accessibility-header/accessibility-header.component.ts", lineNumber: 11 });
})();

// src/app/website/pages/main-page/main-page.component.ts
var MainPageComponent = class _MainPageComponent {
  static {
    this.\u0275fac = function MainPageComponent_Factory(t) {
      return new (t || _MainPageComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainPageComponent, selectors: [["app-main-page"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 0, consts: [[1, "layout-wrapper"]], template: function MainPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-accessibility-header")(2, "app-ias-header")(3, "router-outlet")(4, "app-ias-footer");
        \u0275\u0275elementEnd();
      }
    }, dependencies: [RouterOutlet, IasHeaderComponent, IasFooterComponent, AccessibilityHeaderComponent], styles: ["\n\n.layout-wrapper[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n/*# sourceMappingURL=main-page.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainPageComponent, { className: "MainPageComponent", filePath: "src/app/website/pages/main-page/main-page.component.ts", lineNumber: 14 });
})();

// src/app/authmodule/ias-login/ias-login.component.ts
function IasLoginComponent_app_ias_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-ias-loader");
  }
}
function IasLoginComponent_div_10_div_7_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Email is required.");
    \u0275\u0275elementEnd();
  }
}
function IasLoginComponent_div_10_div_7_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Enter a Valid Email Id");
    \u0275\u0275elementEnd();
  }
}
function IasLoginComponent_div_10_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275template(1, IasLoginComponent_div_10_div_7_small_1_Template, 2, 0, "small", 0)(2, IasLoginComponent_div_10_div_7_small_2_Template, 2, 0, "small", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.email == null ? null : ctx_r1.email.errors == null ? null : ctx_r1.email.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.email == null ? null : ctx_r1.email.errors == null ? null : ctx_r1.email.errors["pattern"]);
  }
}
function IasLoginComponent_div_10__svg_svg_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 29)(1, "g", 30);
    \u0275\u0275element(2, "path", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "defs")(4, "clipPath", 32);
    \u0275\u0275element(5, "rect", 33);
    \u0275\u0275elementEnd()()();
  }
}
function IasLoginComponent_div_10__svg_svg_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 29)(1, "g", 34);
    \u0275\u0275element(2, "path", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "defs")(4, "clipPath", 36);
    \u0275\u0275element(5, "rect", 33);
    \u0275\u0275elementEnd()()();
  }
}
function IasLoginComponent_div_10_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "small");
    \u0275\u0275text(2, "Password is required.");
    \u0275\u0275elementEnd()();
  }
}
function IasLoginComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "h1");
    \u0275\u0275text(2, "Login to your account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 12);
    \u0275\u0275listener("ngSubmit", function IasLoginComponent_div_10_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(4, "label", 13);
    \u0275\u0275text(5, "Email ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 14);
    \u0275\u0275template(7, IasLoginComponent_div_10_div_7_Template, 3, 2, "div", 15);
    \u0275\u0275elementStart(8, "label", 16);
    \u0275\u0275text(9, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 17);
    \u0275\u0275element(11, "input", 18);
    \u0275\u0275elementStart(12, "button", 19);
    \u0275\u0275listener("click", function IasLoginComponent_div_10_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.togglePasswordVisibility());
    });
    \u0275\u0275template(13, IasLoginComponent_div_10__svg_svg_13_Template, 6, 0, "svg", 20)(14, IasLoginComponent_div_10__svg_svg_14_Template, 6, 0, "svg", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, IasLoginComponent_div_10_div_15_Template, 3, 0, "div", 15);
    \u0275\u0275elementStart(16, "div", 21)(17, "a", 22);
    \u0275\u0275text(18, "Forgot Password?");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "button", 23);
    \u0275\u0275text(20, "Login");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 24);
    \u0275\u0275text(22, " Don\u2019t have an account? ");
    \u0275\u0275elementStart(23, "a", 22);
    \u0275\u0275text(24, "Sign up");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 25);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 26);
    \u0275\u0275element(27, "path", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(28, "p");
    \u0275\u0275text(29, " This facility is strictly for serving and retired IAS officers only. Unauthorized access is prohibited. ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.emailForm);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", (ctx_r1.email == null ? null : ctx_r1.email.touched) && (ctx_r1.email == null ? null : ctx_r1.email.invalid));
    \u0275\u0275advance(4);
    \u0275\u0275property("type", ctx_r1.showPassword ? "text" : "password");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.showPassword);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showPassword);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.password == null ? null : ctx_r1.password.touched) && (ctx_r1.password == null ? null : ctx_r1.password.invalid));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", "/forget-password");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.emailForm.invalid);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", "/signup");
  }
}
function IasLoginComponent_div_11_input_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 44);
    \u0275\u0275listener("input", function IasLoginComponent_div_11_input_7_Template_input_input_0_listener($event) {
      const i_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onOtpInput($event, i_r5));
    })("keydown", function IasLoginComponent_div_11_input_7_Template_input_keydown_0_listener($event) {
      const i_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.handleKeyDown($event, i_r5));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctrl_r6 = ctx.$implicit;
    \u0275\u0275property("formControlName", ctrl_r6);
  }
}
function IasLoginComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "h1");
    \u0275\u0275text(2, "Enter OTP to Verify");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "form", 12);
    \u0275\u0275listener("ngSubmit", function IasLoginComponent_div_11_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitOtp());
    });
    \u0275\u0275elementStart(6, "div", 38);
    \u0275\u0275template(7, IasLoginComponent_div_11_input_7_Template, 1, 1, "input", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 23);
    \u0275\u0275text(9, "Continue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 40)(11, "p", 41);
    \u0275\u0275text(12, "Did not get the OTP?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 42);
    \u0275\u0275listener("click", function IasLoginComponent_div_11_Template_span_click_13_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(!ctx_r1.isResendDisabled && ctx_r1.onResendOtp());
    });
    \u0275\u0275text(14, " Resend OTP ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " in ");
    \u0275\u0275elementStart(16, "span", 43);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "date");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("An OTP has been sent to ", ctx_r1.emailForm.value.email, "");
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.otpForm);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.otpControls);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.otpForm.invalid);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("disabled", ctx_r1.isResendDisabled);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(18, 7, ctx_r1.countdown * 1e3, "mm:ss", "UTC"), "");
  }
}
var IasLoginComponent = class _IasLoginComponent {
  constructor(fb, http, router) {
    this.fb = fb;
    this.http = http;
    this.router = router;
    this.showPassword = false;
    this.loading = false;
    this.errorMessage = "";
    this.showOtpStep = false;
    this.otpControls = ["d1", "d2", "d3", "d4", "d5", "d6"];
    this.isResendDisabled = false;
    this.tempToken = "";
    this.toastMessage = "";
    this.toastType = "primary";
    this.emailForm = this.fb.group({
      email: ["", [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/)]],
      password: ["", Validators.required]
    });
    this.otpForm = this.fb.group({});
    this.otpControls.forEach((ctrl) => this.otpForm.addControl(ctrl, new FormControl("", [Validators.required, Validators.pattern("[0-9]")])));
  }
  get email() {
    return this.emailForm.get("email");
  }
  get password() {
    return this.emailForm.get("password");
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  // Step 1: Login
  onSubmit() {
    if (this.emailForm.valid) {
      this.loading = true;
      const payload = {
        email: this.email?.value,
        password: this.password?.value
      };
      this.http.post(`${environment.apiUrl}/accounts/login`, payload).subscribe({
        next: (res) => {
          this.loading = false;
          const token = res?.data?.token;
          if (token) {
            this.tempToken = token;
            this.showOtpStep = true;
            this.showToast("\u2705 Login successful, please verify OTP.", "success");
            this.startCountdown(59);
          } else {
            this.showToast("\u26A0\uFE0F No access token received.", "warning");
          }
        },
        error: (err) => {
          this.loading = false;
          this.showToast(err.error?.message || "\u274C Invalid email or password.", "danger");
        }
      });
    } else {
      this.emailForm.markAllAsTouched();
      this.showToast("\u26A0\uFE0F Please fill in all required fields.", "warning");
    }
  }
  showToast(message, type = "primary") {
    this.toastMessage = message;
    this.toastType = type;
    const toastEl = document.getElementById("liveToast");
    if (toastEl) {
      const toast = new bootstrap.Toast(toastEl, { delay: 3e3 });
      toast.show();
    }
  }
  startCountdown(seconds) {
    this.countdown = seconds;
    this.isResendDisabled = true;
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
      } else {
        this.isResendDisabled = false;
        clearInterval(this.intervalId);
      }
    }, 1e3);
  }
  onResendOtp() {
    this.startCountdown(59);
  }
  handleKeyDown(event, index) {
    const input = event.target;
    const allowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"];
    if (allowedKeys.includes(event.key)) {
      if (event.key === "Backspace" && !input.value && index > 0) {
        const prev = input.parentElement?.children[index - 1];
        prev?.focus();
      }
      return;
    }
    if (!/^[0-9]$/.test(event.key)) {
      event.preventDefault();
    }
  }
  // OTP Field Navigation
  onOtpInput(event, index) {
    const input = event.target;
    if (input.value && index < this.otpControls.length - 1) {
      const next = document.querySelectorAll(".otp-inputs input")[index + 1];
      next?.focus();
    }
  }
  // Step 2: Verify OTP
  submitOtp() {
    if (this.otpForm.valid) {
      this.loading = true;
      const otpValue = this.otpControls.map((ctrl) => this.otpForm.get(ctrl)?.value).join("");
      const otpPayload = {
        otp: otpValue,
        action: "login",
        token: this.tempToken
      };
      this.http.patch(`${environment.apiUrl}/accounts/otpverify`, otpPayload).subscribe({
        next: (res) => {
          this.loading = false;
          const { sessionToken, userDetails } = res?.data || {};
          const { email, role, status } = userDetails || {};
          if (sessionToken) {
            localStorage.setItem("authToken", res.data.sessionToken);
            localStorage.setItem("refreshToken", res.data.refreshToken);
            localStorage.setItem("expireAt", res.data.expireAt);
            if (email)
              localStorage.setItem("userEmail", btoa(email));
            if (role)
              localStorage.setItem("userRole", btoa(role));
            if (status)
              localStorage.setItem("userStatus", btoa(status));
            const redirectUrl = localStorage.getItem("redirectUrl");
            if (redirectUrl) {
              localStorage.removeItem("redirectUrl");
              this.router.navigateByUrl(redirectUrl);
            } else {
              if (role === "admin") {
                this.router.navigate(["home"]);
              } else if (role === "user" && status === "approved") {
                this.router.navigate(["user-home"]);
              } else if (role === "user" && status === "created") {
                this.router.navigate(["/user-not-aproved"]);
              } else {
                this.router.navigate(["home"]);
              }
            }
          } else {
            this.errorMessage = "No session token received after OTP verification.";
          }
        },
        error: (err) => {
          this.loading = false;
          this.showToast(err.error?.message || "\u274C Invalid OTP. Please try again.", "danger");
          this.errorMessage = err.error?.message || "Invalid OTP. Please try again.";
        }
      });
    } else {
      this.otpForm.markAllAsTouched();
    }
  }
  static {
    this.\u0275fac = function IasLoginComponent_Factory(t) {
      return new (t || _IasLoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IasLoginComponent, selectors: [["app-ias-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 8, consts: [[4, "ngIf"], [1, "toast-container", "position-fixed", "top-0", "end-0", "p-3"], ["id", "liveToast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true"], [1, "d-flex"], [1, "toast-body"], ["type", "button", "data-bs-dismiss", "toast", "aria-label", "Close", 1, "btn-close", "btn-close-white", "me-2", "m-auto"], [1, "main-login-component", "d-flex", "align-items-center"], [1, "intro-image-div", "position-relative", 3, "routerLink"], [1, "login-form-div", "d-flex", "flex-column", "align-items-center"], ["class", "inneradjustment", 4, "ngIf"], ["class", "second-step", 4, "ngIf"], [1, "inneradjustment"], [3, "ngSubmit", "formGroup"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "Enter Valid Email Id"], ["class", "error-message", 4, "ngIf"], ["for", "password"], [1, "password-input"], ["id", "password", "formControlName", "password", "placeholder", "Enter your password", 3, "type"], ["type", "button", 1, "eye-button", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "19", "height", "19", "viewBox", "0 0 19 19", "fill", "none", 4, "ngIf"], [1, "forgot"], [3, "routerLink"], ["type", "submit", 1, "login-btn", 3, "disabled"], [1, "signup-text"], [1, "warning-box"], ["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none"], ["d", "M6.33325 10.3333H7.66658V6.33331H6.33325V10.3333ZM6.99992 4.99998C7.18881 4.99998 7.34714 4.93609 7.47492 4.80831C7.6027 4.68053 7.66658 4.5222 7.66658 4.33331C7.66658 4.14442 7.6027 3.98609 7.47492 3.85831C7.34714 3.73054 7.18881 3.66665 6.99992 3.66665C6.81103 3.66665 6.6527 3.73054 6.52492 3.85831C6.39714 3.98609 6.33325 4.14442 6.33325 4.33331C6.33325 4.5222 6.39714 4.68053 6.52492 4.80831C6.6527 4.93609 6.81103 4.99998 6.99992 4.99998ZM6.99992 13.6666C6.0777 13.6666 5.21103 13.4916 4.39992 13.1416C3.58881 12.7916 2.88325 12.3166 2.28325 11.7166C1.68325 11.1166 1.20825 10.4111 0.858252 9.59998C0.508252 8.78887 0.333252 7.9222 0.333252 6.99998C0.333252 6.07776 0.508252 5.21109 0.858252 4.39998C1.20825 3.58887 1.68325 2.88331 2.28325 2.28331C2.88325 1.68331 3.58881 1.20831 4.39992 0.858313C5.21103 0.508313 6.0777 0.333313 6.99992 0.333313C7.92214 0.333313 8.78881 0.508313 9.59992 0.858313C10.411 1.20831 11.1166 1.68331 11.7166 2.28331C12.3166 2.88331 12.7916 3.58887 13.1416 4.39998C13.4916 5.21109 13.6666 6.07776 13.6666 6.99998C13.6666 7.9222 13.4916 8.78887 13.1416 9.59998C12.7916 10.4111 12.3166 11.1166 11.7166 11.7166C11.1166 12.3166 10.411 12.7916 9.59992 13.1416C8.78881 13.4916 7.92214 13.6666 6.99992 13.6666ZM6.99992 12.3333C8.48881 12.3333 9.74992 11.8166 10.7833 10.7833C11.8166 9.74998 12.3333 8.48887 12.3333 6.99998C12.3333 5.51109 11.8166 4.24998 10.7833 3.21665C9.74992 2.18331 8.48881 1.66665 6.99992 1.66665C5.51103 1.66665 4.24992 2.18331 3.21659 3.21665C2.18325 4.24998 1.66659 5.51109 1.66659 6.99998C1.66659 8.48887 2.18325 9.74998 3.21659 10.7833C4.24992 11.8166 5.51103 12.3333 6.99992 12.3333Z", "fill", "#A16800"], [1, "error-message"], ["xmlns", "http://www.w3.org/2000/svg", "width", "19", "height", "19", "viewBox", "0 0 19 19", "fill", "none"], ["clip-path", "url(#clip0_50828_258)"], ["d", "M9.49996 4.75002C12.5004 4.75002 15.1762 6.43627 16.4825 9.10419C15.1762 11.7721 12.5004 13.4584 9.49996 13.4584C6.49954 13.4584 3.82371 11.7721 2.51746 9.10419C3.82371 6.43627 6.49954 4.75002 9.49996 4.75002ZM9.49996 3.16669C5.54163 3.16669 2.16121 5.62877 0.791626 9.10419C2.16121 12.5796 5.54163 15.0417 9.49996 15.0417C13.4583 15.0417 16.8387 12.5796 18.2083 9.10419C16.8387 5.62877 13.4583 3.16669 9.49996 3.16669ZM9.49996 7.12502C10.5925 7.12502 11.4791 8.01169 11.4791 9.10419C11.4791 10.1967 10.5925 11.0834 9.49996 11.0834C8.40746 11.0834 7.52079 10.1967 7.52079 9.10419C7.52079 8.01169 8.40746 7.12502 9.49996 7.12502ZM9.49996 5.54169C7.53663 5.54169 5.93746 7.14085 5.93746 9.10419C5.93746 11.0675 7.53663 12.6667 9.49996 12.6667C11.4633 12.6667 13.0625 11.0675 13.0625 9.10419C13.0625 7.14085 11.4633 5.54169 9.49996 5.54169Z", "fill", "#A9ACB1"], ["id", "clip0_50828_258"], ["width", "19", "height", "19", "fill", "white"], ["clip-path", "url(#clip0_50828_300)"], ["d", "M9.50008 4.74999C12.5005 4.74999 15.1763 6.43624 16.4826 9.10416C16.0155 10.07 15.3584 10.9012 14.5747 11.5742L15.6909 12.6904C16.7913 11.7167 17.6622 10.4975 18.2084 9.10416C16.8388 5.62874 13.4584 3.16666 9.50008 3.16666C8.49467 3.16666 7.52883 3.32499 6.61841 3.61791L7.92467 4.92416C8.43925 4.82124 8.96175 4.74999 9.50008 4.74999ZM8.653 5.65249L10.2917 7.29124C10.743 7.48916 11.1072 7.85333 11.3051 8.30458L12.9438 9.94333C13.0072 9.67416 13.0547 9.38916 13.0547 9.09624C13.0626 7.13291 11.4634 5.54166 9.50008 5.54166C9.20717 5.54166 8.93008 5.58124 8.653 5.65249ZM1.59133 3.06374L3.713 5.18541C2.42258 6.19874 1.40133 7.54458 0.791748 9.10416C2.16133 12.5796 5.54175 15.0417 9.50008 15.0417C10.7034 15.0417 11.8592 14.8121 12.9201 14.3925L15.6276 17.1L16.7438 15.9837L2.70758 1.93958L1.59133 3.06374ZM7.52883 9.00124L9.59508 11.0675C9.56342 11.0754 9.53175 11.0833 9.50008 11.0833C8.40758 11.0833 7.52092 10.1967 7.52092 9.10416C7.52092 9.06458 7.52883 9.04083 7.52883 9.00124ZM4.83717 6.30958L6.22258 7.69499C6.0405 8.13041 5.93758 8.60541 5.93758 9.10416C5.93758 11.0675 7.53675 12.6667 9.50008 12.6667C9.99883 12.6667 10.4738 12.5637 10.9013 12.3817L11.6772 13.1575C10.9805 13.3475 10.2522 13.4583 9.50008 13.4583C6.49967 13.4583 3.82383 11.7721 2.51758 9.10416C3.07175 7.97208 3.87925 7.03791 4.83717 6.30958Z", "fill", "#222222"], ["id", "clip0_50828_300"], [1, "second-step"], [1, "otp-inputs"], ["type", "text", "maxlength", "1", "autocomplete", "off", 3, "formControlName", "input", "keydown", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "gap-2", "mt-2"], [1, "m-0"], [1, "resend-text", 3, "click"], [1, "timer", "m-0"], ["type", "text", "maxlength", "1", "autocomplete", "off", 3, "input", "keydown", "formControlName"]], template: function IasLoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, IasLoginComponent_app_ias_loader_0_Template, 1, 0, "app-ias-loader", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "button", 5);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 6);
        \u0275\u0275element(8, "div", 7);
        \u0275\u0275elementStart(9, "div", 8);
        \u0275\u0275template(10, IasLoginComponent_div_10_Template, 30, 9, "div", 9)(11, IasLoginComponent_div_11_Template, 19, 11, "div", 10);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance(2);
        \u0275\u0275classMapInterpolate1("toast align-items-center text-bg-", ctx.toastType, " border-0");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.toastMessage, " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLink", "");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.showOtpStep);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showOtpStep);
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      DatePipe,
      FormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      MaxLengthValidator,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName,
      RouterModule,
      RouterLink,
      HttpClientModule,
      IasLoaderComponent
    ], styles: ['@charset "UTF-8";\n\n\n\n.main-login-component[_ngcontent-%COMP%] {\n  height: 100%;\n  min-height: 100vh;\n}\n.intro-image-div[_ngcontent-%COMP%] {\n  border-radius: 0px 20px 20px 0px;\n  background: var(--new, linear-gradient(130deg, #492FB2 -1.74%, #ADADAD 108.02%));\n  background-image: url("./media/new-banner.png");\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100vh;\n  width: 40%;\n}\n.login-form-div[_ngcontent-%COMP%] {\n  width: 60%;\n  padding: 20px;\n}\n.login-form-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: Urbanist;\n  font-size: 40px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 130%;\n  background: var(--2, linear-gradient(90deg, #222 0%, #424242 100%));\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.inneradjustment[_ngcontent-%COMP%], .second-step[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 500px;\n}\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-top: 48px;\n}\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--Text-Dark, #212121);\n  font-family: Urbanist;\n  font-size: var(--Font-Size-2, 14px);\n  font-style: normal;\n  font-weight: 500;\n  line-height: var(--Line-Heights-10, 20px);\n  letter-spacing: var(--Letter-Spacing-2, 0.1px);\n  margin-bottom: 4px;\n}\nform[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], form[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%], form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  padding: 12px;\n  border-radius: 8px;\n  border: 1px solid #ccc;\n  font-size: 14px;\n  width: 100%;\n  box-sizing: border-box;\n}\nform[_ngcontent-%COMP%]   .password-input[_ngcontent-%COMP%] {\n  position: relative;\n}\nform[_ngcontent-%COMP%]   .password-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-right: 40px;\n}\nform[_ngcontent-%COMP%]   .password-input[_ngcontent-%COMP%]   .eye-button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n}\nform[_ngcontent-%COMP%]   .password-input[_ngcontent-%COMP%]   .eye-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n}\nform[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-top: -8px;\n}\nform[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #3b27b9;\n  font-size: 14px;\n  text-decoration: none;\n}\nform[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid;\n  background: #222;\n  color: var(--Text-Light, #FFF);\n  text-align: center;\n  font-family: Urbanist;\n  font-size: var(--Font-Size-3, 16px);\n  font-style: normal;\n  font-weight: 500;\n  line-height: var(--Line-Heights-9, 24px);\n  letter-spacing: var(--Letter-Spacing-1, 0.15px);\n  padding: 12px;\n}\nform[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: red;\n}\nform[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]:disabled {\n  padding: 12px;\n  border: none;\n  border-radius: 8px;\n  background-color: #a0a0a0 !important;\n  color: #fff;\n  font-size: 16px;\n  cursor: not-allowed;\n}\nform[_ngcontent-%COMP%]   .signup-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: center;\n}\nform[_ngcontent-%COMP%]   .signup-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #3b27b9;\n  text-decoration: none;\n  font-weight: 500;\n}\nform[_ngcontent-%COMP%]   .warning-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background-color: #fff4db;\n  border-radius: 8px;\n  padding: 12px;\n  gap: 8px;\n  color: #333;\n}\nform[_ngcontent-%COMP%]   .warning-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #A16800;\n  font-family: Urbanist;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 18px;\n  margin: 0;\n}\n.second-step[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: Urbanist;\n  font-size: 40px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 130%;\n  background: var(--2, linear-gradient(90deg, #222 0%, #424242 100%));\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.second-step[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--Neutral-700, #7E838B);\n  font-family: Inter;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n}\n.otp-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.otp-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin: 20px 0;\n}\n.otp-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  font-size: 1.5rem;\n  text-align: center;\n  border: 2px solid #ccc;\n  border-radius: 8px;\n  outline: none;\n  transition: border-color 0.2s;\n}\n.otp-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: black;\n}\n.password-strength[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  font-weight: 600;\n  font-size: 0.85rem;\n  text-transform: uppercase;\n}\n.password-strength.poor[_ngcontent-%COMP%] {\n  color: red;\n}\n.password-strength.good[_ngcontent-%COMP%] {\n  color: #b8860b;\n}\n.password-strength.best[_ngcontent-%COMP%] {\n  color: green;\n}\n@media (max-width: 992px) {\n  .intro-image-div[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n  .login-form-div[_ngcontent-%COMP%] {\n    width: 50%;\n    padding: 40px 20px;\n  }\n  .login-form-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n}\n@media (max-width: 768px) {\n  .main-login-component[_ngcontent-%COMP%] {\n    flex-direction: column;\n    justify-content: flex-start;\n  }\n  .intro-image-div[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 520px;\n    border-radius: 0 0 20px 20px;\n    background-position: center;\n  }\n  .login-form-div[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 30px 20px;\n  }\n  .login-form-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 28px;\n    line-height: 120%;\n    text-align: center;\n  }\n  form[_ngcontent-%COMP%] {\n    margin-top: 32px;\n    gap: 12px;\n  }\n  form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], form[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%], form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n    padding: 10px;\n    font-size: 14px;\n  }\n  .login-btn[_ngcontent-%COMP%] {\n    font-size: 15px;\n    padding: 10px;\n  }\n  .signup-text[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .warning-box[_ngcontent-%COMP%] {\n    padding: 10px;\n    font-size: 12px;\n    align-items: flex-start;\n  }\n  .warning-box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n    margin-top: 2px;\n  }\n}\n@media (max-width: 480px) {\n  .intro-image-div[_ngcontent-%COMP%] {\n    height: 520px;\n    border-radius: 0;\n  }\n  .login-form-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .otp-inputs[_ngcontent-%COMP%] {\n    gap: 6px;\n  }\n  .otp-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 42px;\n    height: 42px;\n    font-size: 1.2rem;\n  }\n  .login-btn[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 8px;\n  }\n}\n/*# sourceMappingURL=ias-login.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IasLoginComponent, { className: "IasLoginComponent", filePath: "src/app/authmodule/ias-login/ias-login.component.ts", lineNumber: 31 });
})();

// src/app/authmodule/ias-forgotpassword/ias-forgotpassword.component.ts
function IasForgotpasswordComponent_div_8_div_9_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Email is required.");
    \u0275\u0275elementEnd();
  }
}
function IasForgotpasswordComponent_div_8_div_9_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Enter a valid email.");
    \u0275\u0275elementEnd();
  }
}
function IasForgotpasswordComponent_div_8_div_9_small_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Enter a Valid Email Id");
    \u0275\u0275elementEnd();
  }
}
function IasForgotpasswordComponent_div_8_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275template(1, IasForgotpasswordComponent_div_8_div_9_small_1_Template, 2, 0, "small", 20)(2, IasForgotpasswordComponent_div_8_div_9_small_2_Template, 2, 0, "small", 20)(3, IasForgotpasswordComponent_div_8_div_9_small_3_Template, 2, 0, "small", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r1.emailForm.get("email")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r1.emailForm.get("email")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["email"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r1.emailForm.get("email")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["pattern"]);
  }
}
function IasForgotpasswordComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "h1");
    \u0275\u0275text(2, "Forgot Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4, "Reset your password securely using your registered IAS email. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "form", 13);
    \u0275\u0275listener("ngSubmit", function IasForgotpasswordComponent_div_8_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitEmail());
    });
    \u0275\u0275elementStart(6, "label", 14);
    \u0275\u0275text(7, "IAS Email ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 15);
    \u0275\u0275template(9, IasForgotpasswordComponent_div_8_div_9_Template, 4, 3, "div", 16);
    \u0275\u0275elementStart(10, "button", 17);
    \u0275\u0275text(11, "Continue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 18)(13, "p");
    \u0275\u0275text(14, " This facility is strictly for serving and retired IAS officers only. A password reset link or OTP will be sent to your registered personal email, if already added. ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx_r1.emailForm);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx_r1.emailForm.get("email")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx_r1.emailForm.get("email")) == null ? null : tmp_2_0.invalid));
  }
}
function IasForgotpasswordComponent_div_9_input_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 27);
    \u0275\u0275listener("input", function IasForgotpasswordComponent_div_9_input_7_Template_input_input_0_listener($event) {
      const i_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onOtpInput($event, i_r5));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctrl_r6 = ctx.$implicit;
    \u0275\u0275property("formControlName", ctrl_r6);
  }
}
function IasForgotpasswordComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "h1");
    \u0275\u0275text(2, "Enter OTP to Verify");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "form", 13);
    \u0275\u0275listener("ngSubmit", function IasForgotpasswordComponent_div_9_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitOtp());
    });
    \u0275\u0275elementStart(6, "div", 22);
    \u0275\u0275template(7, IasForgotpasswordComponent_div_9_input_7_Template, 1, 1, "input", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 17);
    \u0275\u0275text(9, "Continue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 24)(11, "p", 25);
    \u0275\u0275text(12, "Did not get the OTP?");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Resend OTP in ");
    \u0275\u0275elementStart(14, "span", 26);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("OTP has been sent to your registered email ID- ", ctx_r1.emailForm.value.email, "");
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.otpForm);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.otpControls);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 4, ctx_r1.countdown, "mm:ss"));
  }
}
function IasForgotpasswordComponent_div_10__svg_svg_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 36)(1, "g", 37);
    \u0275\u0275element(2, "path", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "defs")(4, "clipPath", 39);
    \u0275\u0275element(5, "rect", 40);
    \u0275\u0275elementEnd()()();
  }
}
function IasForgotpasswordComponent_div_10__svg_svg_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 36)(1, "g", 41);
    \u0275\u0275element(2, "path", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "defs")(4, "clipPath", 43);
    \u0275\u0275element(5, "rect", 40);
    \u0275\u0275elementEnd()()();
  }
}
function IasForgotpasswordComponent_div_10__svg_svg_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 36)(1, "g", 37);
    \u0275\u0275element(2, "path", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "defs")(4, "clipPath", 39);
    \u0275\u0275element(5, "rect", 40);
    \u0275\u0275elementEnd()()();
  }
}
function IasForgotpasswordComponent_div_10__svg_svg_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 36)(1, "g", 41);
    \u0275\u0275element(2, "path", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "defs")(4, "clipPath", 43);
    \u0275\u0275element(5, "rect", 40);
    \u0275\u0275elementEnd()()();
  }
}
function IasForgotpasswordComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "h1");
    \u0275\u0275text(2, "Reset Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 13);
    \u0275\u0275listener("ngSubmit", function IasForgotpasswordComponent_div_10_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitPassword());
    });
    \u0275\u0275elementStart(4, "label", 29);
    \u0275\u0275text(5, "New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 30);
    \u0275\u0275element(7, "input", 31);
    \u0275\u0275elementStart(8, "button", 32);
    \u0275\u0275listener("click", function IasForgotpasswordComponent_div_10_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.togglePassword("new"));
    });
    \u0275\u0275template(9, IasForgotpasswordComponent_div_10__svg_svg_9_Template, 6, 0, "svg", 33)(10, IasForgotpasswordComponent_div_10__svg_svg_10_Template, 6, 0, "svg", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "label", 34);
    \u0275\u0275text(12, "Confirm Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 30);
    \u0275\u0275element(14, "input", 35);
    \u0275\u0275elementStart(15, "button", 32);
    \u0275\u0275listener("click", function IasForgotpasswordComponent_div_10_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.togglePassword("confirm"));
    });
    \u0275\u0275template(16, IasForgotpasswordComponent_div_10__svg_svg_16_Template, 6, 0, "svg", 33)(17, IasForgotpasswordComponent_div_10__svg_svg_17_Template, 6, 0, "svg", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "button", 17);
    \u0275\u0275text(19, "Reset password");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.passwordForm);
    \u0275\u0275advance(4);
    \u0275\u0275property("type", ctx_r1.showNewPassword ? "text" : "password");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.showNewPassword);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showNewPassword);
    \u0275\u0275advance(4);
    \u0275\u0275property("type", ctx_r1.showConfirmPassword ? "text" : "password");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.showConfirmPassword);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showConfirmPassword);
  }
}
function IasForgotpasswordComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 45);
    \u0275\u0275element(2, "circle", 46)(3, "circle", 47)(4, "circle", 48)(5, "path", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h1", 50);
    \u0275\u0275text(7, "Your password has been successfully reset.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h4", 51);
    \u0275\u0275text(9, "You can now login using your IAS email and new password.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 52);
    \u0275\u0275text(11, "Return to Login");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(10);
    \u0275\u0275property("routerLink", "/login");
  }
}
var IasForgotpasswordComponent = class _IasForgotpasswordComponent {
  constructor(fb, http) {
    this.fb = fb;
    this.http = http;
    this.currentStep = 1;
    this.otpControls = ["d1", "d2", "d3", "d4", "d5", "d6"];
    this.countdown = new Date(0, 0, 0, 0, 0, 53);
    this.showNewPassword = false;
    this.showConfirmPassword = false;
    this.emailForm = this.fb.group({
      email: ["", [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/)]]
    });
    const otpGroup = {};
    this.otpControls.forEach((ctrl) => {
      otpGroup[ctrl] = ["", Validators.required];
    });
    this.otpForm = this.fb.group(otpGroup);
    this.passwordForm = this.fb.group({
      newPassword: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", [Validators.required]]
    });
  }
  showToast(message, type = "success") {
    const toastEl = document.getElementById("appToast");
    const toastMsg = document.getElementById("toastMessage");
    if (toastEl && toastMsg) {
      toastMsg.textContent = message;
      toastEl.classList.remove("text-bg-success", "text-bg-danger");
      toastEl.classList.add(type === "success" ? "text-bg-success" : "text-bg-danger");
      const toast = new bootstrap.Toast(toastEl);
      toast.show();
    }
  }
  submitEmail() {
    if (this.emailForm.valid) {
      const payload = { email: this.emailForm.value.email };
      this.http.post(`${environment.apiUrl}/accounts/forgot-password`, payload).subscribe({
        next: (res) => {
          if (res.success) {
            this.token = res.data.token;
            this.action = res.data.action;
            this.currentStep = 2;
            this.showToast("\u2705 Email sent successfully!", "success");
          }
        },
        error: (err) => {
          const msg = err.error?.message || "\u274C Failed to send email";
          this.showToast(`\u274C ${msg}`, "error");
        }
      });
    }
  }
  onOtpInput(event, index) {
    const input = event.target;
    if (input.value && index < this.otpControls.length - 1) {
      const next = input.parentElement?.children[index + 1];
      next?.focus();
    }
  }
  submitOtp() {
    if (this.otpForm.valid) {
      const otp = this.otpControls.map((ctrl) => this.otpForm.get(ctrl)?.value).join("");
      console.log("OTP entered:", otp);
      if (!this.token || !this.action) {
        console.error("Token or action not found. Did you call forgot-password first?");
        return;
      }
      const payload = {
        otp,
        action: this.action,
        token: this.token
      };
      this.http.patch(`${environment.apiUrl}/accounts/otpverify`, payload).subscribe({
        next: (res) => {
          if (res.success) {
            this.sessionToken = res.data?.sessionToken;
            this.currentStep = 3;
            this.showToast("\u2705 OTP verified successfully!", "success");
          }
        },
        error: (err) => {
          const msg = err.error?.message || "\u274C Invalid OTP. Try again.";
          this.showToast(`\u274C ${msg}`, "error");
        }
      });
    }
  }
  togglePassword(field) {
    if (field === "new") {
      this.showNewPassword = !this.showNewPassword;
    } else {
      this.showConfirmPassword = !this.showConfirmPassword;
    }
  }
  submitPassword() {
    if (this.passwordForm.valid) {
      const password = this.passwordForm.value.newPassword;
      const confirmPassword = this.passwordForm.value.confirmPassword;
      if (password !== confirmPassword) {
        this.showToast("\u274C Passwords do not match", "error");
        return;
      }
      if (!this.sessionToken) {
        console.error("Session token missing. OTP verification must be done first.");
        return;
      }
      const payload = {
        password,
        confirmPassword
      };
      this.http.post(`${environment.apiUrl}/accounts/setup-password`, payload, {
        headers: {
          Authorization: `Bearer ${this.sessionToken}`
        }
      }).subscribe({
        next: (res) => {
          if (res.success) {
            this.currentStep = 4;
            this.showToast("\u2705 Password set successfully!", "success");
          }
        },
        error: (err) => {
          const msg = err.error?.message || "\u274C Failed to set password";
          this.showToast(`\u274C ${msg}`, "error");
        }
      });
    }
  }
  static {
    this.\u0275fac = function IasForgotpasswordComponent_Factory(t) {
      return new (t || _IasForgotpasswordComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IasForgotpasswordComponent, selectors: [["app-ias-forgotpassword"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 5, consts: [[1, "toast-container", "position-fixed", "top-0", "end-0", "p-3", 2, "z-index", "1100"], ["id", "appToast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "align-items-center", "border-0"], [1, "d-flex"], ["id", "toastMessage", 1, "toast-body"], ["type", "button", "data-bs-dismiss", "toast", "aria-label", "Close", 1, "btn-close", "me-2", "m-auto"], [1, "main-login-component", "d-flex", "align-items-center"], [1, "intro-image-div", "position-relative", 3, "routerLink"], [1, "login-form-div", "d-flex", "flex-column", "align-items-center", "px-5"], ["class", "first-step w-75", 4, "ngIf"], ["class", "second-step w-75", 4, "ngIf"], ["class", "third-step w-75", 4, "ngIf"], ["class", "fourth-step w-75", 4, "ngIf"], [1, "first-step", "w-75"], [3, "ngSubmit", "formGroup"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "Enter Valid Email Id"], ["class", "error-message", 4, "ngIf"], ["type", "submit", 1, "login-btn"], [1, "warning-box"], [1, "error-message"], [4, "ngIf"], [1, "second-step", "w-75"], [1, "otp-inputs"], ["type", "text", "maxlength", "1", "autocomplete", "off", 3, "formControlName", "input", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "gap-2"], [1, "m-0"], [1, "timer", "m-0"], ["type", "text", "maxlength", "1", "autocomplete", "off", 3, "input", "formControlName"], [1, "third-step", "w-75"], ["for", "newPassword"], [1, "password-wrapper"], ["id", "newPassword", "formControlName", "newPassword", 3, "type"], ["type", "button", 1, "eye-btn", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "19", "height", "19", "viewBox", "0 0 19 19", "fill", "none", 4, "ngIf"], ["for", "confirmPassword"], ["id", "confirmPassword", "formControlName", "confirmPassword", 3, "type"], ["xmlns", "http://www.w3.org/2000/svg", "width", "19", "height", "19", "viewBox", "0 0 19 19", "fill", "none"], ["clip-path", "url(#clip0_50828_258)"], ["d", "M9.49996 4.75002C12.5004 4.75002 15.1762 6.43627 16.4825 9.10419C15.1762 11.7721 12.5004 13.4584 9.49996 13.4584C6.49954 13.4584 3.82371 11.7721 2.51746 9.10419C3.82371 6.43627 6.49954 4.75002 9.49996 4.75002ZM9.49996 3.16669C5.54163 3.16669 2.16121 5.62877 0.791626 9.10419C2.16121 12.5796 5.54163 15.0417 9.49996 15.0417C13.4583 15.0417 16.8387 12.5796 18.2083 9.10419C16.8387 5.62877 13.4583 3.16669 9.49996 3.16669ZM9.49996 7.12502C10.5925 7.12502 11.4791 8.01169 11.4791 9.10419C11.4791 10.1967 10.5925 11.0834 9.49996 11.0834C8.40746 11.0834 7.52079 10.1967 7.52079 9.10419C7.52079 8.01169 8.40746 7.12502 9.49996 7.12502ZM9.49996 5.54169C7.53663 5.54169 5.93746 7.14085 5.93746 9.10419C5.93746 11.0675 7.53663 12.6667 9.49996 12.6667C11.4633 12.6667 13.0625 11.0675 13.0625 9.10419C13.0625 7.14085 11.4633 5.54169 9.49996 5.54169Z", "fill", "#A9ACB1"], ["id", "clip0_50828_258"], ["width", "19", "height", "19", "fill", "white"], ["clip-path", "url(#clip0_50828_300)"], ["d", "M9.50008 4.74999C12.5005 4.74999 15.1763 6.43624 16.4826 9.10416C16.0155 10.07 15.3584 10.9012 14.5747 11.5742L15.6909 12.6904C16.7913 11.7167 17.6622 10.4975 18.2084 9.10416C16.8388 5.62874 13.4584 3.16666 9.50008 3.16666C8.49467 3.16666 7.52883 3.32499 6.61841 3.61791L7.92467 4.92416C8.43925 4.82124 8.96175 4.74999 9.50008 4.74999ZM8.653 5.65249L10.2917 7.29124C10.743 7.48916 11.1072 7.85333 11.3051 8.30458L12.9438 9.94333C13.0072 9.67416 13.0547 9.38916 13.0547 9.09624C13.0626 7.13291 11.4634 5.54166 9.50008 5.54166C9.20717 5.54166 8.93008 5.58124 8.653 5.65249ZM1.59133 3.06374L3.713 5.18541C2.42258 6.19874 1.40133 7.54458 0.791748 9.10416C2.16133 12.5796 5.54175 15.0417 9.50008 15.0417C10.7034 15.0417 11.8592 14.8121 12.9201 14.3925L15.6276 17.1L16.7438 15.9837L2.70758 1.93958L1.59133 3.06374ZM7.52883 9.00124L9.59508 11.0675C9.56342 11.0754 9.53175 11.0833 9.50008 11.0833C8.40758 11.0833 7.52092 10.1967 7.52092 9.10416C7.52092 9.06458 7.52883 9.04083 7.52883 9.00124ZM4.83717 6.30958L6.22258 7.69499C6.0405 8.13041 5.93758 8.60541 5.93758 9.10416C5.93758 11.0675 7.53675 12.6667 9.50008 12.6667C9.99883 12.6667 10.4738 12.5637 10.9013 12.3817L11.6772 13.1575C10.9805 13.3475 10.2522 13.4583 9.50008 13.4583C6.49967 13.4583 3.82383 11.7721 2.51758 9.10416C3.07175 7.97208 3.87925 7.03791 4.83717 6.30958Z", "fill", "#222222"], ["id", "clip0_50828_300"], [1, "fourth-step", "w-75"], ["xmlns", "http://www.w3.org/2000/svg", "width", "100", "height", "100", "viewBox", "0 0 100 100", "fill", "none"], ["cx", "50", "cy", "50", "r", "50", "fill", "#4B9700", "fill-opacity", "0.3"], ["cx", "50", "cy", "50", "r", "45", "fill", "#4B9700", "fill-opacity", "0.3"], ["cx", "49.5", "cy", "49.5", "r", "39.5", "fill", "#4B9700"], ["d", "M30 51.5L40.2267 62.1713C40.9464 62.9223 42.1216 62.9963 42.9298 62.3414L70.5 40", "stroke", "white", "stroke-width", "5", "stroke-linecap", "round"], [1, "mt-3"], [1, "my-4"], ["type", "button", 1, "login-btn", 3, "routerLink"]], template: function IasForgotpasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275element(3, "div", 3)(4, "button", 4);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(5, "div", 5);
        \u0275\u0275element(6, "div", 6);
        \u0275\u0275elementStart(7, "div", 7);
        \u0275\u0275template(8, IasForgotpasswordComponent_div_8_Template, 15, 2, "div", 8)(9, IasForgotpasswordComponent_div_9_Template, 17, 7, "div", 9)(10, IasForgotpasswordComponent_div_10_Template, 20, 7, "div", 10)(11, IasForgotpasswordComponent_div_11_Template, 12, 1, "div", 11);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275property("routerLink", "");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.currentStep === 1);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentStep === 2);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentStep === 3);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentStep === 4);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName, RouterModule, RouterLink], styles: ['\n\n.main-login-component[_ngcontent-%COMP%] {\n  height: 100%;\n  min-height: 100vh;\n}\n.intro-image-div[_ngcontent-%COMP%] {\n  border-radius: 0px 20px 20px 0px;\n  background: var(--new, linear-gradient(130deg, #492fb2 -1.74%, #adadad 108.02%));\n  background-image: url("./media/new-banner.png");\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100vh;\n  width: 40%;\n}\n.login-form-div[_ngcontent-%COMP%] {\n  width: 60%;\n}\n.login-form-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: Urbanist;\n  font-size: 40px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 130%;\n  background: var(--2, linear-gradient(90deg, #222 0%, #424242 100%));\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.login-form-div[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--Neutral-700, #7e838b);\n  font-family: Urbanist;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  margin: 0;\n}\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-top: 20px;\n}\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--Text-Dark, #212121);\n  font-family: Urbanist;\n  font-size: var(--Font-Size-2, 14px);\n  font-style: normal;\n  font-weight: 500;\n  line-height: var(--Line-Heights-10, 20px);\n  letter-spacing: var(--Letter-Spacing-2, 0.1px);\n  margin-bottom: 4px;\n}\nform[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], form[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%], form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  padding: 12px;\n  border-radius: 8px;\n  border: 1px solid #ccc;\n  font-size: 14px;\n  width: 100%;\n  box-sizing: border-box;\n}\nform[_ngcontent-%COMP%]   .password-input[_ngcontent-%COMP%] {\n  position: relative;\n}\nform[_ngcontent-%COMP%]   .password-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-right: 40px;\n}\nform[_ngcontent-%COMP%]   .password-input[_ngcontent-%COMP%]   .eye-button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n}\nform[_ngcontent-%COMP%]   .password-input[_ngcontent-%COMP%]   .eye-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n}\nform[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-top: -8px;\n}\nform[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #3b27b9;\n  font-size: 14px;\n  text-decoration: none;\n}\nform[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid;\n  background: #222;\n  color: var(--Text-Light, #fff);\n  text-align: center;\n  font-family: Urbanist;\n  font-size: var(--Font-Size-3, 16px);\n  font-style: normal;\n  font-weight: 500;\n  line-height: var(--Line-Heights-9, 24px);\n  letter-spacing: var(--Letter-Spacing-1, 0.15px);\n  padding: 12px;\n}\nform[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: red;\n}\nform[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]:disabled {\n  padding: 12px;\n  border: none;\n  border-radius: 8px;\n  background-color: #a0a0a0 !important;\n  color: #fff;\n  font-size: 16px;\n  cursor: not-allowed;\n}\nform[_ngcontent-%COMP%]   .signup-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: center;\n}\nform[_ngcontent-%COMP%]   .signup-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #3b27b9;\n  text-decoration: none;\n  font-weight: 500;\n}\nform[_ngcontent-%COMP%]   .warning-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background-color: #fff4db;\n  border-radius: 8px;\n  padding: 12px;\n  gap: 8px;\n  color: #333;\n}\nform[_ngcontent-%COMP%]   .warning-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #a16800;\n  font-family: Urbanist;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 18px;\n  margin: 0;\n}\n.otp-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.otp-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin: 20px 0;\n}\n.otp-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  font-size: 1.5rem;\n  text-align: center;\n  border: 2px solid #ccc;\n  border-radius: 8px;\n  outline: none;\n  transition: border-color 0.2s;\n}\n.otp-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: black;\n}\n.login-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  background: black;\n  color: white;\n  padding: 10px;\n  border: none;\n  font-size: 1rem;\n  border-radius: 8px;\n  cursor: pointer;\n}\n.timer[_ngcontent-%COMP%] {\n  color: #3366ff;\n}\n.password-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.password-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-right: 40px;\n}\n.eye-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  background: none;\n  border: none;\n  font-size: 1.2rem;\n  cursor: pointer;\n}\n@media (max-width: 991px) {\n  .main-login-component[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .intro-image-div[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 60vh;\n    border-radius: 0 0 20px 20px;\n  }\n  .login-form-div[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 30px 0px !important;\n  }\n  .login-form-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n  .login-form-div[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  form[_ngcontent-%COMP%] {\n    gap: 12px;\n  }\n  .otp-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    font-size: 1.2rem;\n  }\n}\n@media (max-width: 576px) {\n  .intro-image-div[_ngcontent-%COMP%] {\n    height: 60vh;\n    border-radius: 0 0 15px 15px;\n  }\n  .login-form-div[_ngcontent-%COMP%] {\n    padding: 20px 0px !important;\n  }\n  .login-form-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 26px;\n    text-align: center;\n  }\n  .login-form-div[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 13px;\n    text-align: center;\n  }\n  input[type=email][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%] {\n    padding: 10px;\n    font-size: 13px;\n  }\n  .login-btn[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 10px;\n  }\n  .otp-inputs[_ngcontent-%COMP%] {\n    gap: 6px;\n  }\n  .otp-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n    font-size: 1rem;\n  }\n  .warning-box[_ngcontent-%COMP%] {\n    font-size: 11px;\n    padding: 10px;\n  }\n  .password-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    padding-right: 35px;\n  }\n  .eye-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 16px;\n    height: 16px;\n  }\n}\n/*# sourceMappingURL=ias-forgotpassword.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IasForgotpasswordComponent, { className: "IasForgotpasswordComponent", filePath: "src/app/authmodule/ias-forgotpassword/ias-forgotpassword.component.ts", lineNumber: 17 });
})();

// src/app/authmodule/ias-signup/ias-signup.component.ts
function IasSignupComponent_app_ias_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-ias-loader");
  }
}
function IasSignupComponent_div_27_div_7_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Email is required.");
    \u0275\u0275elementEnd();
  }
}
function IasSignupComponent_div_27_div_7_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Enter a Valid Email Id");
    \u0275\u0275elementEnd();
  }
}
function IasSignupComponent_div_27_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275template(1, IasSignupComponent_div_27_div_7_small_1_Template, 2, 0, "small", 0)(2, IasSignupComponent_div_27_div_7_small_2_Template, 2, 0, "small", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r1.emailForm.get("email")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r1.emailForm.get("email")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["pattern"]);
  }
}
function IasSignupComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "h1", 23);
    \u0275\u0275text(2, "Create Account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 24);
    \u0275\u0275listener("ngSubmit", function IasSignupComponent_div_27_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitEmail());
    });
    \u0275\u0275elementStart(4, "label", 25);
    \u0275\u0275text(5, "Email ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 26);
    \u0275\u0275template(7, IasSignupComponent_div_27_div_7_Template, 3, 2, "div", 27);
    \u0275\u0275elementStart(8, "button", 28);
    \u0275\u0275text(9, "Sign up");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 29)(11, "span");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 30);
    \u0275\u0275element(13, "path", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "p");
    \u0275\u0275text(15, " Impersonating an IAS officer or providing false information to obtain IAS Association membership is a criminal offence under Section 170 of the Indian Penal Code (IPC) - Personating a public servant ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.emailForm);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx_r1.emailForm.get("email")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx_r1.emailForm.get("email")) == null ? null : tmp_2_0.invalid));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.emailForm.invalid);
  }
}
function IasSignupComponent_div_28_input_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 40);
    \u0275\u0275listener("input", function IasSignupComponent_div_28_input_7_Template_input_input_0_listener($event) {
      const i_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onOtpInput($event, i_r5));
    })("keydown", function IasSignupComponent_div_28_input_7_Template_input_keydown_0_listener($event) {
      const i_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.handleKeyDown($event, i_r5));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctrl_r6 = ctx.$implicit;
    \u0275\u0275property("formControlName", ctrl_r6);
  }
}
function IasSignupComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "h1");
    \u0275\u0275text(2, "Enter OTP to Verify");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "form", 24);
    \u0275\u0275listener("ngSubmit", function IasSignupComponent_div_28_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitOtp());
    });
    \u0275\u0275elementStart(6, "div", 33);
    \u0275\u0275template(7, IasSignupComponent_div_28_input_7_Template, 1, 1, "input", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 35);
    \u0275\u0275text(9, "Continue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 36)(11, "p", 37);
    \u0275\u0275text(12, "Did not get the OTP?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 38);
    \u0275\u0275listener("click", function IasSignupComponent_div_28_Template_span_click_13_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(!ctx_r1.isResendDisabled && ctx_r1.onResendOtp());
    });
    \u0275\u0275text(14, " Resend OTP ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " in ");
    \u0275\u0275elementStart(16, "span", 39);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "date");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("OTP has been sent to your registered email ID- ", ctx_r1.emailForm.value.email, "");
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.otpForm);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.otpControls);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.otpForm.invalid);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("disabled", ctx_r1.isResendDisabled);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(18, 7, ctx_r1.countdown * 1e3, "mm:ss", "UTC"), "");
  }
}
function IasSignupComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "h1", 23);
    \u0275\u0275text(2, "Sign up your account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 41);
    \u0275\u0275listener("click", function IasSignupComponent_div_29_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.currentStep = 4);
    });
    \u0275\u0275text(4, "Get Details from DOPT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 42);
    \u0275\u0275text(6, "or");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 43);
    \u0275\u0275listener("click", function IasSignupComponent_div_29_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.currentStep = 5);
    });
    \u0275\u0275text(8, "Fill Details Manually");
    \u0275\u0275elementEnd()();
  }
}
function IasSignupComponent_div_30_div_11_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Only letters are allowed. ");
    \u0275\u0275elementEnd();
  }
}
function IasSignupComponent_div_30_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275template(1, IasSignupComponent_div_30_div_11_small_1_Template, 2, 0, "small", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r1.memberidForm.get("name")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["pattern"]);
  }
}
function IasSignupComponent_div_30_div_17_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Identity Number is required. ");
    \u0275\u0275elementEnd();
  }
}
function IasSignupComponent_div_30_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275template(1, IasSignupComponent_div_30_div_17_small_1_Template, 2, 0, "small", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r1.memberidForm.get("identityNumber")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
  }
}
function IasSignupComponent_div_30_div_23_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Enter a valid email ");
    \u0275\u0275elementEnd();
  }
}
function IasSignupComponent_div_30_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275template(1, IasSignupComponent_div_30_div_23_small_1_Template, 2, 0, "small", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r1.memberidForm.get("alternateEmail")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["pattern"]);
  }
}
function IasSignupComponent_div_30_div_28_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Enter a valid Mobile Number ");
    \u0275\u0275elementEnd();
  }
}
function IasSignupComponent_div_30_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275template(1, IasSignupComponent_div_30_div_28_small_1_Template, 2, 0, "small", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r1.memberidForm.get("mobilenumber")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["pattern"]);
  }
}
function IasSignupComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "p")(2, "span", 44);
    \u0275\u0275listener("click", function IasSignupComponent_div_30_Template_span_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.currentStep = 3);
    });
    \u0275\u0275element(3, "i", 45);
    \u0275\u0275text(4, " back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h1", 23);
    \u0275\u0275text(6, "Get Details from DOPT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "form", 24);
    \u0275\u0275listener("ngSubmit", function IasSignupComponent_div_30_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitMemberId());
    });
    \u0275\u0275elementStart(8, "label", 46);
    \u0275\u0275text(9, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 47);
    \u0275\u0275listener("keypress", function IasSignupComponent_div_30_Template_input_keypress_10_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.allowOnlyLetters($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, IasSignupComponent_div_30_div_11_Template, 2, 1, "div", 27);
    \u0275\u0275elementStart(12, "label", 48);
    \u0275\u0275text(13, "Identity No.");
    \u0275\u0275elementStart(14, "span", 49);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(16, "input", 50);
    \u0275\u0275template(17, IasSignupComponent_div_30_div_17_Template, 2, 1, "div", 27);
    \u0275\u0275elementStart(18, "div", 51)(19, "div", 52)(20, "label", 53);
    \u0275\u0275text(21, "Alternate Email ID ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 54);
    \u0275\u0275template(23, IasSignupComponent_div_30_div_23_Template, 2, 1, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 52)(25, "label", 55);
    \u0275\u0275text(26, " Mobile Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 56);
    \u0275\u0275listener("keypress", function IasSignupComponent_div_30_Template_input_keypress_27_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.allow10Numbers($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, IasSignupComponent_div_30_div_28_Template, 2, 1, "div", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "button", 57);
    \u0275\u0275text(30, "Continue");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("formGroup", ctx_r1.memberidForm);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r1.memberidForm.get("name")) == null ? null : tmp_2_0.invalid);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r1.memberidForm.get("identityNumber")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx_r1.memberidForm.get("identityNumber")) == null ? null : tmp_3_0.invalid));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx_r1.memberidForm.get("alternateEmail")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx_r1.memberidForm.get("alternateEmail")) == null ? null : tmp_4_0.invalid));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r1.memberidForm.get("mobilenumber")) == null ? null : tmp_5_0.touched) && ((tmp_5_0 = ctx_r1.memberidForm.get("mobilenumber")) == null ? null : tmp_5_0.invalid));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.memberidForm.invalid);
  }
}
function IasSignupComponent_div_31_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cadre_r10 = ctx.$implicit;
    \u0275\u0275property("value", cadre_r10.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cadre_r10.name);
  }
}
function IasSignupComponent_div_31_div_70_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Enter a valid email ");
    \u0275\u0275elementEnd();
  }
}
function IasSignupComponent_div_31_div_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275template(1, IasSignupComponent_div_31_div_70_small_1_Template, 2, 0, "small", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r1.memberdetailsForm.get("alternateEmail")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["pattern"]);
  }
}
function IasSignupComponent_div_31_div_75_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Enter a valid Mobile Number ");
    \u0275\u0275elementEnd();
  }
}
function IasSignupComponent_div_31_div_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275template(1, IasSignupComponent_div_31_div_75_small_1_Template, 2, 0, "small", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r1.memberdetailsForm.get("mobilenumber")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["pattern"]);
  }
}
function IasSignupComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "p")(2, "span", 44);
    \u0275\u0275listener("click", function IasSignupComponent_div_31_Template_span_click_2_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.currentStep = 3);
    });
    \u0275\u0275element(3, "i", 45);
    \u0275\u0275text(4, " back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h1", 23);
    \u0275\u0275text(6, "Fill You Details Manually");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "form", 24);
    \u0275\u0275listener("ngSubmit", function IasSignupComponent_div_31_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitmemberdetails());
    });
    \u0275\u0275elementStart(8, "label", 58);
    \u0275\u0275text(9, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 59);
    \u0275\u0275listener("keypress", function IasSignupComponent_div_31_Template_input_keypress_10_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.allowOnlyLetters($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 60)(12, "div", 52)(13, "label", 61);
    \u0275\u0275text(14, "Cadre");
    \u0275\u0275elementStart(15, "span", 49);
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "select", 62)(18, "option", 63);
    \u0275\u0275text(19, "Enter Cadre");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(20, IasSignupComponent_div_31_For_21_Template, 2, 2, "option", 64, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 52)(23, "label", 65);
    \u0275\u0275text(24, "Allotment Year");
    \u0275\u0275elementStart(25, "span", 49);
    \u0275\u0275text(26, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "input", 66);
    \u0275\u0275listener("input", function IasSignupComponent_div_31_Template_input_input_27_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.validateYear($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 52)(29, "label", 67);
    \u0275\u0275text(30, "Gender");
    \u0275\u0275elementStart(31, "span", 49);
    \u0275\u0275text(32, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "select", 68)(34, "option", 69);
    \u0275\u0275text(35, "Select Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "option", 70);
    \u0275\u0275text(37, "Male");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "option", 71);
    \u0275\u0275text(39, "Female");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "option", 72);
    \u0275\u0275text(41, "Other");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "div", 52)(43, "label", 73);
    \u0275\u0275text(44, "Date of Birth");
    \u0275\u0275elementStart(45, "span", 49);
    \u0275\u0275text(46, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(47, "input", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 52)(49, "label", 75);
    \u0275\u0275text(50, "Mother Tongue");
    \u0275\u0275elementStart(51, "span", 49);
    \u0275\u0275text(52, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "input", 76);
    \u0275\u0275listener("keypress", function IasSignupComponent_div_31_Template_input_keypress_53_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.allowOnlyLetters($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 52)(55, "label", 77);
    \u0275\u0275text(56, "Retirement Status");
    \u0275\u0275elementStart(57, "span", 49);
    \u0275\u0275text(58, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "select", 78)(60, "option", 69);
    \u0275\u0275text(61, "Select Reason");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "option", 79);
    \u0275\u0275text(63, "Serving");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "option", 80);
    \u0275\u0275text(65, "Superannuated");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(66, "div", 52)(67, "label", 81);
    \u0275\u0275text(68, "Alternate Email ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(69, "input", 82);
    \u0275\u0275template(70, IasSignupComponent_div_31_div_70_Template, 2, 1, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div", 52)(72, "label", 83);
    \u0275\u0275text(73, "Mobile Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "input", 84);
    \u0275\u0275listener("keypress", function IasSignupComponent_div_31_Template_input_keypress_74_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.allow10Numbers($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(75, IasSignupComponent_div_31_div_75_Template, 2, 1, "div", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "button", 85);
    \u0275\u0275text(77, "Continue");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("formGroup", ctx_r1.memberdetailsForm);
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r1.cadrelist);
    \u0275\u0275advance(27);
    \u0275\u0275property("max", ctx_r1.maxDOB);
    \u0275\u0275advance(23);
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx_r1.memberdetailsForm.get("alternateEmail")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx_r1.memberdetailsForm.get("alternateEmail")) == null ? null : tmp_4_0.invalid));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r1.memberdetailsForm.get("mobilenumber")) == null ? null : tmp_5_0.touched) && ((tmp_5_0 = ctx_r1.memberdetailsForm.get("mobilenumber")) == null ? null : tmp_5_0.invalid));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.memberdetailsForm.invalid);
  }
}
function IasSignupComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "h1", 23);
    \u0275\u0275text(2, "Your Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 86)(4, "div", 87);
    \u0275\u0275element(5, "img", 88);
    \u0275\u0275elementStart(6, "div")(7, "h3", 10);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 89)(10, "span");
    \u0275\u0275text(11, "IAS Batch Year:");
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "span", 90);
    \u0275\u0275text(15, "|");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17, "Cadre Domicile: ");
    \u0275\u0275elementStart(18, "strong");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(20, "button", 91);
    \u0275\u0275listener("click", function IasSignupComponent_div_32_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitdetails());
    });
    \u0275\u0275text(21, "Continue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p", 92);
    \u0275\u0275text(23, "Wrong profile or incorrect information? ");
    \u0275\u0275elementStart(24, "span", 93);
    \u0275\u0275listener("click", function IasSignupComponent_div_32_Template_span_click_24_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.currentStep = 3);
    });
    \u0275\u0275text(25, " Retry.");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("src", ctx_r1.iasprofilePic, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.iasname);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.iasbatch, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.iascadre);
  }
}
function IasSignupComponent_div_33__svg_svg_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 102)(1, "g", 103);
    \u0275\u0275element(2, "path", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "defs")(4, "clipPath", 105);
    \u0275\u0275element(5, "rect", 106);
    \u0275\u0275elementEnd()()();
  }
}
function IasSignupComponent_div_33__svg_svg_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 102)(1, "g", 107);
    \u0275\u0275element(2, "path", 108);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "defs")(4, "clipPath", 109);
    \u0275\u0275element(5, "rect", 106);
    \u0275\u0275elementEnd()()();
  }
}
function IasSignupComponent_div_33_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1, " Password must have 8 characters, contain at least one uppercase letter, one lowercase letter, one number, and one special character. ");
    \u0275\u0275elementEnd();
  }
}
function IasSignupComponent_div_33__svg_svg_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 102)(1, "g", 103);
    \u0275\u0275element(2, "path", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "defs")(4, "clipPath", 105);
    \u0275\u0275element(5, "rect", 106);
    \u0275\u0275elementEnd()()();
  }
}
function IasSignupComponent_div_33__svg_svg_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 102)(1, "g", 107);
    \u0275\u0275element(2, "path", 108);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "defs")(4, "clipPath", 109);
    \u0275\u0275element(5, "rect", 106);
    \u0275\u0275elementEnd()()();
  }
}
function IasSignupComponent_div_33_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1, " Passwords do not match. ");
    \u0275\u0275elementEnd();
  }
}
function IasSignupComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "h1", 23);
    \u0275\u0275text(2, "Create Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 24);
    \u0275\u0275listener("ngSubmit", function IasSignupComponent_div_33_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitPassword());
    });
    \u0275\u0275elementStart(4, "label", 94);
    \u0275\u0275text(5, "Create Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 95);
    \u0275\u0275element(7, "input", 96);
    \u0275\u0275elementStart(8, "button", 97);
    \u0275\u0275listener("click", function IasSignupComponent_div_33_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.togglePassword("new"));
    });
    \u0275\u0275template(9, IasSignupComponent_div_33__svg_svg_9_Template, 6, 0, "svg", 98)(10, IasSignupComponent_div_33__svg_svg_10_Template, 6, 0, "svg", 98);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, IasSignupComponent_div_33_div_11_Template, 2, 0, "div", 27);
    \u0275\u0275elementStart(12, "label", 99);
    \u0275\u0275text(13, "Confirm Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 95);
    \u0275\u0275element(15, "input", 100);
    \u0275\u0275elementStart(16, "button", 97);
    \u0275\u0275listener("click", function IasSignupComponent_div_33_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.togglePassword("confirm"));
    });
    \u0275\u0275template(17, IasSignupComponent_div_33__svg_svg_17_Template, 6, 0, "svg", 98)(18, IasSignupComponent_div_33__svg_svg_18_Template, 6, 0, "svg", 98);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, IasSignupComponent_div_33_div_19_Template, 2, 0, "div", 27);
    \u0275\u0275elementStart(20, "button", 101);
    \u0275\u0275text(21, "Create password");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.passwordForm);
    \u0275\u0275advance(4);
    \u0275\u0275property("type", ctx_r1.showNewPassword ? "text" : "password");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.showNewPassword);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showNewPassword);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r1.passwordForm.get("newPassword")) == null ? null : tmp_5_0.touched) && ((tmp_5_0 = ctx_r1.passwordForm.get("newPassword")) == null ? null : tmp_5_0.hasError("pattern")));
    \u0275\u0275advance(4);
    \u0275\u0275property("type", ctx_r1.showConfirmPassword ? "text" : "password");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.showConfirmPassword);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showConfirmPassword);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.passwordnotmatch);
  }
}
function IasSignupComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 110);
    \u0275\u0275element(2, "circle", 111)(3, "circle", 112)(4, "circle", 113)(5, "path", 114);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h1", 92);
    \u0275\u0275text(7, "You have successfully signed up");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h4", 23);
    \u0275\u0275text(9, "You can now login using your IAS email and password.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 115);
    \u0275\u0275text(11, "Return to Login");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(10);
    \u0275\u0275property("routerLink", "/login");
  }
}
var IasSignupComponent = class _IasSignupComponent {
  constructor(fb, http, datePipe) {
    this.fb = fb;
    this.http = http;
    this.datePipe = datePipe;
    this.currentStep = 1;
    this.token = null;
    this.sessionid = null;
    this.otpControls = ["d1", "d2", "d3", "d4", "d5", "d6"];
    this.isResendDisabled = false;
    this.showNewPassword = false;
    this.showConfirmPassword = false;
    this.passwordnotmatch = false;
    this.action = "";
    this.loading = false;
    this.mobilenumber = null;
    this.alternateemail = null;
    this.iasid = null;
    this.iasname = null;
    this.iasbatch = null;
    this.iascadre = null;
    this.iasprofilePic = null;
    this.toastMessage = "";
    this.toastType = "primary";
    this.cadrelist = [];
    this.emailForm = this.fb.group({
      email: ["", [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/)]]
    });
    this.memberidForm = this.fb.group({
      name: ["", [Validators.pattern(/^[A-Za-z\s]+$/)]],
      identityNumber: ["", [Validators.required]],
      alternateEmail: [null, [Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/)]],
      mobilenumber: [null, [Validators.pattern(/^[0-9]{10}$/)]]
    });
    this.memberdetailsForm = this.fb.group({
      fullname: [""],
      cadre: [0, [Validators.required]],
      allotmentyear: ["", [Validators.required, Validators.pattern(/^[0-9]{4}$/)]],
      gender: ["", [Validators.required]],
      dateofbirth: ["", [Validators.required]],
      mothertongue: ["", [Validators.required]],
      retirementreason: ["", [Validators.required]],
      mobilenumber: [null, [Validators.pattern(/^[0-9]{10}$/)]],
      alternateEmail: [null, [Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/)]]
    });
    const controls = {};
    this.otpControls.forEach((ctrl) => {
      controls[ctrl] = new FormControl("", [Validators.required, Validators.pattern(/^[0-9]$/)]);
    });
    this.otpForm = this.fb.group(controls);
    this.passwordForm = this.fb.group({
      newPassword: [
        "",
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/)
        ]
      ],
      confirmPassword: ["", [Validators.required]]
    });
  }
  startCountdown(seconds) {
    this.countdown = seconds;
    this.isResendDisabled = true;
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
      } else {
        this.isResendDisabled = false;
        clearInterval(this.intervalId);
      }
    }, 1e3);
  }
  onResendOtp() {
    this.startCountdown(59);
  }
  ngOnInit() {
    const url = `${environment.apiUrl}/dopt/cadres?limit=0`;
    this.http.get(url).subscribe({
      next: (response) => {
        console.log("cadeeeeessss", response);
        this.loading = false;
        this.cadrelist = response.data.data;
        console.log("Cadre List:", this.cadrelist);
      }
    });
    const today = /* @__PURE__ */ new Date();
    today.setFullYear(today.getFullYear() - 21);
    this.maxDOB = today.toISOString().split("T")[0];
  }
  ngAfterViewInit() {
    const modalEl = document.getElementById("Warning");
    if (modalEl) {
      this.myModal = new bootstrap.Modal(modalEl, {
        backdrop: "static",
        keyboard: false
      });
      this.myModal.show();
    }
  }
  ngOnDestroy() {
    if (this.myModal) {
      this.myModal.hide();
      this.myModal.dispose();
      this.myModal = null;
    }
  }
  // Step 1 - Submit email
  submitMemberId() {
    if (this.memberidForm.valid) {
      console.log("Member ID submitted:", this.memberidForm.value);
      this.loading = true;
      const url = `${environment.apiUrl}/dopt/officers?limit=1&identityNo=` + this.memberidForm.value.identityNumber;
      this.http.get(url).subscribe({
        next: (response) => {
          console.log("user details", response);
          this.iasid = response.data.data[0]?.id;
          this.iasname = response.data.data[0]?.englishName;
          this.iasbatch = response.data.data[0]?.allotmentYear;
          this.iascadre = response.data.data[0]?.cadreDomicile;
          this.iasprofilePic = response.data.data[0]?.profilePic;
          console.log("IAS ID:", this.iasid);
          this.loading = false;
          if (this.iasid !== void 0 && this.iasid !== null) {
            console.log("Valid IAS ID found:", this.iasid);
            this.mobilenumber = this.memberidForm.value.mobilenumber || null;
            this.alternateemail = this.memberidForm.value.alternateEmail || null;
            this.showToast("\u2705 IAS Details Found", "success");
            this.currentStep = 6;
          } else {
            this.loading = false;
            this.showToast("IAS Details Not Found", "danger");
          }
        },
        error: (err) => {
          this.loading = false;
          this.showToast("Error fetching IAS details", "danger");
        }
      });
    }
  }
  showToast(message, type = "primary") {
    this.toastMessage = message;
    this.toastType = type;
    const toastEl = document.getElementById("liveToast");
    if (toastEl) {
      const toast = new bootstrap.Toast(toastEl, { delay: 3e3 });
      toast.show();
    }
  }
  allow10Numbers(event) {
    const charCode = event.key;
    if (!/^[0-9]$/.test(charCode)) {
      event.preventDefault();
    }
    const input = event.target;
    if (input.value.length >= 10) {
      event.preventDefault();
    }
  }
  allowOnlyLetters(event) {
    const charCode = event.key.charCodeAt(0);
    if (!/[a-zA-Z\s]/.test(event.key)) {
      event.preventDefault();
    }
  }
  validateYear(event) {
    const input = event.target;
    let value = input.value;
    if (value.length > 4) {
      value = value.slice(0, 4);
    }
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    if (+value > currentYear) {
      value = currentYear.toString();
    }
    input.value = value;
  }
  submitmemberdetails() {
    if (this.memberdetailsForm.valid) {
      console.log("Member ID submitted:", this.memberdetailsForm.value);
      this.loading = true;
      console.log("Date of Birth:", this.memberdetailsForm.value.dateofbirth);
      const formatted = this.datePipe.transform(this.memberdetailsForm.value.dateofbirth, "dd/MM/yyyy");
      console.log("Formatted Date of Birth:", formatted);
      const url = `${environment.apiUrl}/dopt/officers?limit=1&englishName=` + this.memberdetailsForm.value.fullname + "&populate=cadre&cadre=" + this.memberdetailsForm.value.cadre + "&allotmentYear=" + this.memberdetailsForm.value.allotmentyear + "&gender=" + this.memberdetailsForm.value.gender + "&dob=" + formatted + "&mothertongue=" + this.memberdetailsForm.value.mothertongue + "&retirementreason=" + this.memberdetailsForm.value.retirementreason;
      this.http.get(url).subscribe({
        next: (response) => {
          console.log("user details", response);
          this.iasid = response.data.data[0]?.id;
          this.iasname = response.data.data[0]?.englishName;
          this.iasbatch = response.data.data[0]?.allotmentYear;
          this.iascadre = response.data.data[0]?.cadreDomicile;
          this.iasprofilePic = response.data.data[0]?.profilePic;
          console.log("IAS ID:", this.iasid);
          this.loading = false;
          if (this.iasid !== void 0 && this.iasid !== null) {
            console.log("Valid IAS ID found:", this.iasid);
            this.mobilenumber = this.memberdetailsForm.value.mobilenumber || null;
            this.alternateemail = this.memberdetailsForm.value.alternateEmail || null;
            this.showToast("\u2705 IAS Details Found", "success");
            this.currentStep = 6;
          } else {
            this.loading = false;
            this.showToast("IAS Details Not Found", "danger");
          }
        },
        error: (err) => {
          this.loading = false;
          this.showToast("Error fetching IAS details", "danger");
        }
      });
    }
  }
  submitdetails() {
    const url = `${environment.apiUrl}/accounts/details`;
    const payload = {
      identityNumber: {
        id: this.iasid
      },
      alternateEmail: this.alternateemail !== "" ? this.alternateemail : null,
      mobileNumber: this.mobilenumber !== "" && this.mobilenumber != null ? String(this.mobilenumber) : null
    };
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${this.sessionid}`,
      "Content-Type": "application/json"
    });
    this.http.post(url, payload, { headers }).subscribe({
      next: (response) => {
        console.log("user details", response);
        console.log("message", response.data.message);
        this.loading = false;
        this.showToast("\u2705 IAS Details submitted successful", "success");
        this.currentStep = 7;
      },
      error: (err) => {
        this.loading = false;
        this.showToast("This Dopt officer is already linked to another user", "danger");
      }
    });
  }
  submitEmail() {
    if (this.emailForm.valid) {
      this.loading = true;
      const url = `${environment.apiUrl}/accounts/signup`;
      const payload = {
        email: this.emailForm.value.email
      };
      this.http.post(url, payload).subscribe({
        next: (response) => {
          console.log("Signup successful", response);
          this.token = response.data.token;
          this.action = response.data.action;
          this.loading = false;
          this.showToast("\u2705 Please check your email for OTP.", "success");
          this.currentStep = 2;
          this.startCountdown(59);
        },
        error: (err) => {
          this.loading = false;
          this.showToast("Email is already registered.", "danger");
        }
      });
    }
  }
  onOtpInput(event, index) {
    const input = event.target;
    if (input.value && index < this.otpControls.length - 1) {
      const next = input.parentElement?.children[index + 1];
      next?.focus();
    }
  }
  handleKeyDown(event, index) {
    const input = event.target;
    const allowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"];
    if (allowedKeys.includes(event.key)) {
      if (event.key === "Backspace" && !input.value && index > 0) {
        const prev = input.parentElement?.children[index - 1];
        prev?.focus();
      }
      return;
    }
    if (!/^[0-9]$/.test(event.key)) {
      event.preventDefault();
    }
  }
  togglePassword(field) {
    if (field === "new") {
      this.showNewPassword = !this.showNewPassword;
    } else {
      this.showConfirmPassword = !this.showConfirmPassword;
    }
  }
  submitOtp() {
    if (this.otpForm.valid) {
      this.loading = true;
      const otp = this.otpControls.map((ctrl) => this.otpForm.get(ctrl)?.value).join("");
      console.log("OTP entered:", otp);
      const url = `${environment.apiUrl}/accounts/otpverify`;
      const token = this.token;
      const headers = new HttpHeaders({
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      });
      const payload = {
        otp,
        action: this.action,
        // Use the action stored from the signup response
        token: this.token
        // Include the token in the payload
      };
      console.log("otp payload", payload);
      this.http.patch(url, payload, { headers }).subscribe({
        next: (response) => {
          console.log("otp verified ", response);
          this.sessionid = response.data.sessionToken;
          this.loading = false;
          this.showToast("\u2705 OTP verified successfully", "success");
          this.currentStep = 3;
        },
        error: (err) => {
          this.loading = false;
          this.showToast("Failed to verify OTP", "danger");
        }
      });
    }
  }
  submitPassword() {
    if (this.passwordForm.valid) {
      if (this.passwordForm.value.newPassword !== this.passwordForm.value.confirmPassword) {
        this.passwordnotmatch = true;
        return;
      }
      console.log("Password created:", this.passwordForm.value);
      const formdata = this.passwordForm.value;
      const url = `${environment.apiUrl}/accounts/setup-password`;
      const headers = new HttpHeaders({
        "Authorization": `Bearer ${this.sessionid}`,
        "Content-Type": "application/json"
      });
      const payload = {
        password: formdata.newPassword,
        confirmPassword: formdata.confirmPassword
      };
      console.log("payload", payload);
      this.http.post(url, payload, { headers }).subscribe({
        next: (response) => {
          console.log("Signup successful:", response);
          this.showToast("\u2705 Password setup successfully", "success");
          this.currentStep = 8;
        },
        error: (err) => {
          this.loading = false;
          this.showToast("Failed to set Password", "danger");
        }
      });
    }
  }
  static {
    this.\u0275fac = function IasSignupComponent_Factory(t) {
      return new (t || _IasSignupComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(DatePipe));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IasSignupComponent, selectors: [["app-ias-signup"]], standalone: true, features: [\u0275\u0275ProvidersFeature([DatePipe]), \u0275\u0275StandaloneFeature], decls: 35, vars: 14, consts: [[4, "ngIf"], [1, "toast-container", "position-fixed", "top-0", "end-0", "p-3"], ["id", "liveToast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true"], [1, "d-flex"], [1, "toast-body"], ["type", "button", "data-bs-dismiss", "toast", "aria-label", "Close", 1, "btn-close", "btn-close-white", "me-2", "m-auto"], ["id", "Warning", "tabindex", "-1", "aria-labelledby", "WarningLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", "p-4", "text-center"], [1, "modal-body"], [1, "mb-3"], ["xmlns", "http://www.w3.org/2000/svg", "width", "44", "height", "43", "viewBox", "0 0 44 43", "fill", "none"], ["id", "mask0_51050_5200", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "44", "height", "43", 2, "mask-type", "alpha"], ["x", "0.5", "width", "43", "height", "43", "fill", "#D9D9D9"], ["mask", "url(#mask0_51050_5200)"], ["d", "M22.0002 30.4584C22.5078 30.4584 22.9333 30.2867 23.2767 29.9433C23.6201 29.5999 23.7918 29.1743 23.7918 28.6667C23.7918 28.1591 23.6201 27.7335 23.2767 27.3901C22.9333 27.0467 22.5078 26.875 22.0002 26.875C21.4925 26.875 21.067 27.0467 20.7236 27.3901C20.3802 27.7335 20.2085 28.1591 20.2085 28.6667C20.2085 29.1743 20.3802 29.5999 20.7236 29.9433C21.067 30.2867 21.4925 30.4584 22.0002 30.4584ZM20.2085 23.2917H23.7918V12.5417H20.2085V23.2917ZM22.0002 39.4167C19.5217 39.4167 17.1925 38.9464 15.0127 38.0058C12.8328 37.0651 10.9366 35.7886 9.32412 34.1761C7.71162 32.5636 6.43506 30.6674 5.49443 28.4875C4.55381 26.3077 4.0835 23.9785 4.0835 21.5C4.0835 19.0216 4.55381 16.6924 5.49443 14.5125C6.43506 12.3327 7.71162 10.4365 9.32412 8.824C10.9366 7.2115 12.8328 5.93494 15.0127 4.99431C17.1925 4.05369 19.5217 3.58337 22.0002 3.58337C24.4786 3.58337 26.8078 4.05369 28.9877 4.99431C31.1675 5.93494 33.0637 7.2115 34.6762 8.824C36.2887 10.4365 37.5653 12.3327 38.5059 14.5125C39.4465 16.6924 39.9168 19.0216 39.9168 21.5C39.9168 23.9785 39.4465 26.3077 38.5059 28.4875C37.5653 30.6674 36.2887 32.5636 34.6762 34.1761C33.0637 35.7886 31.1675 37.0651 28.9877 38.0058C26.8078 38.9464 24.4786 39.4167 22.0002 39.4167ZM22.0002 35.8334C26.0016 35.8334 29.3908 34.4448 32.1679 31.6677C34.945 28.8907 36.3335 25.5014 36.3335 21.5C36.3335 17.4987 34.945 14.1094 32.1679 11.3323C29.3908 8.55525 26.0016 7.16671 22.0002 7.16671C17.9988 7.16671 14.6095 8.55525 11.8325 11.3323C9.05537 14.1094 7.66683 17.4987 7.66683 21.5C7.66683 25.5014 9.05537 28.8907 11.8325 31.6677C14.6095 34.4448 17.9988 35.8334 22.0002 35.8334Z", "fill", "#C82F2F"], [1, "mb-2"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "login-btn", "w-75", "mx-auto", "mb-4"], [1, "main-login-component", "d-flex", "align-items-center"], [1, "intro-image-div", "position-relative", 3, "routerLink"], [1, "login-form-div", "d-flex", "flex-column", "align-items-center", "px-5"], ["class", "stepcontainer", 4, "ngIf"], [1, "stepcontainer"], [1, "mb-4"], [3, "ngSubmit", "formGroup"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "Enter Valid Email Id", 1, "mb-1"], ["class", "error-message", 4, "ngIf"], ["type", "submit", 1, "login-btn", "my-4", 3, "disabled"], [1, "warning-box"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none"], ["d", "M7.3335 11.3333H8.66683V7.33331H7.3335V11.3333ZM8.00016 5.99998C8.18905 5.99998 8.34738 5.93609 8.47516 5.80831C8.60294 5.68053 8.66683 5.5222 8.66683 5.33331C8.66683 5.14442 8.60294 4.98609 8.47516 4.85831C8.34738 4.73054 8.18905 4.66665 8.00016 4.66665C7.81127 4.66665 7.65294 4.73054 7.52516 4.85831C7.39738 4.98609 7.3335 5.14442 7.3335 5.33331C7.3335 5.5222 7.39738 5.68053 7.52516 5.80831C7.65294 5.93609 7.81127 5.99998 8.00016 5.99998ZM8.00016 14.6666C7.07794 14.6666 6.21127 14.4916 5.40016 14.1416C4.58905 13.7916 3.8835 13.3166 3.2835 12.7166C2.6835 12.1166 2.2085 11.4111 1.8585 10.6C1.5085 9.78887 1.3335 8.9222 1.3335 7.99998C1.3335 7.07776 1.5085 6.21109 1.8585 5.39998C2.2085 4.58887 2.6835 3.88331 3.2835 3.28331C3.8835 2.68331 4.58905 2.20831 5.40016 1.85831C6.21127 1.50831 7.07794 1.33331 8.00016 1.33331C8.92238 1.33331 9.78905 1.50831 10.6002 1.85831C11.4113 2.20831 12.1168 2.68331 12.7168 3.28331C13.3168 3.88331 13.7918 4.58887 14.1418 5.39998C14.4918 6.21109 14.6668 7.07776 14.6668 7.99998C14.6668 8.9222 14.4918 9.78887 14.1418 10.6C13.7918 11.4111 13.3168 12.1166 12.7168 12.7166C12.1168 13.3166 11.4113 13.7916 10.6002 14.1416C9.78905 14.4916 8.92238 14.6666 8.00016 14.6666ZM8.00016 13.3333C9.48905 13.3333 10.7502 12.8166 11.7835 11.7833C12.8168 10.75 13.3335 9.48887 13.3335 7.99998C13.3335 6.51109 12.8168 5.24998 11.7835 4.21665C10.7502 3.18331 9.48905 2.66665 8.00016 2.66665C6.51127 2.66665 5.25016 3.18331 4.21683 4.21665C3.1835 5.24998 2.66683 6.51109 2.66683 7.99998C2.66683 9.48887 3.1835 10.75 4.21683 11.7833C5.25016 12.8166 6.51127 13.3333 8.00016 13.3333Z", "fill", "#A16800"], [1, "error-message"], [1, "otp-inputs"], ["type", "text", "maxlength", "1", "autocomplete", "off", 3, "formControlName", "input", "keydown", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "login-btn", 3, "disabled"], [1, "d-flex", "align-items-center", "gap-2", "mt-2"], [1, "m-0"], [1, "resend-text", 3, "click"], [1, "timer", "m-0"], ["type", "text", "maxlength", "1", "autocomplete", "off", 3, "input", "keydown", "formControlName"], ["type", "submit", 1, "login-btn", "mt-4", 3, "click"], [1, "text-center", "my-3"], ["type", "button", 1, "white-btn", 3, "click"], [1, "cursor-pointer", "fs-5", "fw-bold", 3, "click"], [1, "fas", "fa-arrow-left"], ["for", "name"], ["type", "text", "id", "name", "formControlName", "name", "maxlength", "80", "placeholder", "Enter Your Name", 3, "keypress"], ["for", "identityNumber", 1, "mt-3"], [1, "redstar"], ["type", "text", "id", "identityNumber", "formControlName", "identityNumber", "placeholder", "Enter Your Identity No."], [1, "row"], [1, "col-md-6"], ["for", "alternateEmail", 1, "mt-3"], ["type", "email", "id", "alternateEmail", "formControlName", "alternateEmail", "placeholder", "Enter Email ID", "maxlength", "100"], ["for", "mobilenumber ", 1, "mt-3"], ["type", "number", "id", "mobilenumber", "formControlName", "mobilenumber", "placeholder", "Enter Mobile Number", 3, "keypress"], ["type", "submit", 1, "login-btn", "my-3", "mt-4", 3, "disabled"], ["for", "FullName"], ["type", "text", "id", "FullName", "formControlName", "fullname", "maxlength", "80", "placeholder", "Enter Your Name", 3, "keypress"], [1, "row", "mt-3"], ["for", "Cadre"], ["id", "Cadre", "aria-label", "Default select example", "formControlName", "cadre", 1, "form-select"], ["value", "0", "disabled", ""], [3, "value"], ["for", "allotmentyear"], ["type", "number", "id", "allotmentyear", "formControlName", "allotmentyear", "placeholder", "Enter Allotment Year", 1, "mb-3", 3, "input"], ["for", "Gender"], ["id", "Gender", "formControlName", "gender", 1, "form-select"], ["value", "", "disabled", ""], ["value", "Male"], ["value", "Female"], ["value", ""], ["for", "dob"], ["type", "date", "id", "dob", "formControlName", "dateofbirth", "placeholder", "Select Date of Birth", 1, "mb-3", 3, "max"], ["for", "mothertongue"], ["type", "text", "id", "mothertongue", "formControlName", "mothertongue", "placeholder", "Enter Language", "maxlength", "40", 1, "mb-3", 3, "keypress"], ["for", "retirementreason"], ["id", "retirementreason", "formControlName", "retirementreason", 1, "form-select"], ["value", "Serving"], ["value", "Superannuated"], ["for", "alternateEmail"], ["type", "text", "id", "alternateEmail", "formControlName", "alternateEmail", "placeholder", "Enter your Email ID", "maxlength", "100", 1, "mb-1"], ["for", "mobilenumber"], ["type", "number", "id", "mobilenumber", "formControlName", "mobilenumber", "placeholder", "Enter Your Number", 1, "mb-1", 3, "keypress"], ["type", "submit", 1, "login-btn", "mt-4", 3, "disabled"], [1, "detailscard", "shadow-sm", "border", "rounded-4"], [1, "d-flex", "align-items-center"], ["alt", "Profile Image", 1, "rounded-circle", "me-4", 2, "width", "80px", "height", "80px", "object-fit", "cover", "object-position", "center", 3, "src"], [1, "d-flex", "flex-wrap", "gap-2", "text-muted"], [1, "mx-2"], [1, "login-btn", "mt-4", 3, "click"], [1, "mt-3"], [1, "text-danger", "cursor-pointer", 3, "click"], ["for", "newPassword"], [1, "password-wrapper", "my-1"], ["id", "newPassword", "formControlName", "newPassword", 3, "type"], ["type", "button", 1, "eye-btn", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "19", "height", "19", "viewBox", "0 0 19 19", "fill", "none", 4, "ngIf"], ["for", "confirmPassword", 1, "mt-3"], ["id", "confirmPassword", "formControlName", "confirmPassword", 3, "type"], ["type", "submit", 1, "login-btn", "mt-4"], ["xmlns", "http://www.w3.org/2000/svg", "width", "19", "height", "19", "viewBox", "0 0 19 19", "fill", "none"], ["clip-path", "url(#clip0_50828_258)"], ["d", "M9.49996 4.75002C12.5004 4.75002 15.1762 6.43627 16.4825 9.10419C15.1762 11.7721 12.5004 13.4584 9.49996 13.4584C6.49954 13.4584 3.82371 11.7721 2.51746 9.10419C3.82371 6.43627 6.49954 4.75002 9.49996 4.75002ZM9.49996 3.16669C5.54163 3.16669 2.16121 5.62877 0.791626 9.10419C2.16121 12.5796 5.54163 15.0417 9.49996 15.0417C13.4583 15.0417 16.8387 12.5796 18.2083 9.10419C16.8387 5.62877 13.4583 3.16669 9.49996 3.16669ZM9.49996 7.12502C10.5925 7.12502 11.4791 8.01169 11.4791 9.10419C11.4791 10.1967 10.5925 11.0834 9.49996 11.0834C8.40746 11.0834 7.52079 10.1967 7.52079 9.10419C7.52079 8.01169 8.40746 7.12502 9.49996 7.12502ZM9.49996 5.54169C7.53663 5.54169 5.93746 7.14085 5.93746 9.10419C5.93746 11.0675 7.53663 12.6667 9.49996 12.6667C11.4633 12.6667 13.0625 11.0675 13.0625 9.10419C13.0625 7.14085 11.4633 5.54169 9.49996 5.54169Z", "fill", "#A9ACB1"], ["id", "clip0_50828_258"], ["width", "19", "height", "19", "fill", "white"], ["clip-path", "url(#clip0_50828_300)"], ["d", "M9.50008 4.74999C12.5005 4.74999 15.1763 6.43624 16.4826 9.10416C16.0155 10.07 15.3584 10.9012 14.5747 11.5742L15.6909 12.6904C16.7913 11.7167 17.6622 10.4975 18.2084 9.10416C16.8388 5.62874 13.4584 3.16666 9.50008 3.16666C8.49467 3.16666 7.52883 3.32499 6.61841 3.61791L7.92467 4.92416C8.43925 4.82124 8.96175 4.74999 9.50008 4.74999ZM8.653 5.65249L10.2917 7.29124C10.743 7.48916 11.1072 7.85333 11.3051 8.30458L12.9438 9.94333C13.0072 9.67416 13.0547 9.38916 13.0547 9.09624C13.0626 7.13291 11.4634 5.54166 9.50008 5.54166C9.20717 5.54166 8.93008 5.58124 8.653 5.65249ZM1.59133 3.06374L3.713 5.18541C2.42258 6.19874 1.40133 7.54458 0.791748 9.10416C2.16133 12.5796 5.54175 15.0417 9.50008 15.0417C10.7034 15.0417 11.8592 14.8121 12.9201 14.3925L15.6276 17.1L16.7438 15.9837L2.70758 1.93958L1.59133 3.06374ZM7.52883 9.00124L9.59508 11.0675C9.56342 11.0754 9.53175 11.0833 9.50008 11.0833C8.40758 11.0833 7.52092 10.1967 7.52092 9.10416C7.52092 9.06458 7.52883 9.04083 7.52883 9.00124ZM4.83717 6.30958L6.22258 7.69499C6.0405 8.13041 5.93758 8.60541 5.93758 9.10416C5.93758 11.0675 7.53675 12.6667 9.50008 12.6667C9.99883 12.6667 10.4738 12.5637 10.9013 12.3817L11.6772 13.1575C10.9805 13.3475 10.2522 13.4583 9.50008 13.4583C6.49967 13.4583 3.82383 11.7721 2.51758 9.10416C3.07175 7.97208 3.87925 7.03791 4.83717 6.30958Z", "fill", "#222222"], ["id", "clip0_50828_300"], ["xmlns", "http://www.w3.org/2000/svg", "width", "100", "height", "100", "viewBox", "0 0 100 100", "fill", "none"], ["cx", "50", "cy", "50", "r", "50", "fill", "#4B9700", "fill-opacity", "0.3"], ["cx", "50", "cy", "50", "r", "45", "fill", "#4B9700", "fill-opacity", "0.3"], ["cx", "49.5", "cy", "49.5", "r", "39.5", "fill", "#4B9700"], ["d", "M30 51.5L40.2267 62.1713C40.9464 62.9223 42.1216 62.9963 42.9298 62.3414L70.5 40", "stroke", "white", "stroke-width", "5", "stroke-linecap", "round"], ["type", "button", 1, "login-btn", 3, "routerLink"]], template: function IasSignupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, IasSignupComponent_app_ias_loader_0_Template, 1, 0, "app-ias-loader", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "button", 5);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "h5", 10);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(12, "svg", 11)(13, "mask", 12);
        \u0275\u0275element(14, "rect", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "g", 14);
        \u0275\u0275element(16, "path", 15);
        \u0275\u0275elementEnd()();
        \u0275\u0275text(17, " Impersonation Warning");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(18, "h6", 16);
        \u0275\u0275text(19, " Impersonating an IAS officer or providing false information to obtain IAS Association membership is a criminal offence under: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "p");
        \u0275\u0275text(21, " Section 170 of the Indian Penal Code (IPC) - Personating a public servant ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "button", 17);
        \u0275\u0275text(23, "Continue");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(24, "div", 18);
        \u0275\u0275element(25, "div", 19);
        \u0275\u0275elementStart(26, "div", 20);
        \u0275\u0275template(27, IasSignupComponent_div_27_Template, 16, 3, "div", 21)(28, IasSignupComponent_div_28_Template, 19, 11, "div", 21)(29, IasSignupComponent_div_29_Template, 9, 0, "div", 21)(30, IasSignupComponent_div_30_Template, 31, 6, "div", 21)(31, IasSignupComponent_div_31_Template, 78, 5, "div", 21)(32, IasSignupComponent_div_32_Template, 26, 4, "div", 21)(33, IasSignupComponent_div_33_Template, 22, 9, "div", 21)(34, IasSignupComponent_div_34_Template, 12, 1, "div", 21);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance(2);
        \u0275\u0275classMapInterpolate1("toast align-items-center text-bg-", ctx.toastType, " border-0");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.toastMessage, " ");
        \u0275\u0275advance(20);
        \u0275\u0275property("routerLink", "");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.currentStep === 1);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentStep === 2);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentStep === 3);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentStep === 4);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentStep === 5);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentStep === 6);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentStep === 7);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentStep === 8);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName, RouterModule, RouterLink, IasLoaderComponent], styles: ['@charset "UTF-8";\n\n\n\n.main-login-component[_ngcontent-%COMP%] {\n  height: 100%;\n  min-height: 100vh;\n}\n#Warning[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #C82F2F;\n  text-align: center;\n  font-family: Urbanist;\n  font-size: 32px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 51.189px;\n  letter-spacing: 0.32px;\n}\n#Warning[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: #000;\n  text-align: center;\n  font-family: Urbanist;\n  font-size: 22px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 31px;\n  letter-spacing: 0.32px;\n}\n#Warning[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.61);\n  text-align: center;\n  font-family: Urbanist;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 31px;\n  letter-spacing: 0.32px;\n}\n@media (min-width: 576px) {\n  .modal-dialog[_ngcontent-%COMP%] {\n    max-width: 640px;\n  }\n}\n.intro-image-div[_ngcontent-%COMP%] {\n  border-radius: 0px 20px 20px 0px;\n  background: var(--new, linear-gradient(130deg, #492fb2 -1.74%, #adadad 108.02%));\n  background-image: url("./media/new-banner.png");\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100vh;\n  width: 40%;\n}\n.login-form-div[_ngcontent-%COMP%] {\n  width: 60%;\n}\n.login-form-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: Urbanist;\n  font-size: 40px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 130%;\n  background: var(--2, linear-gradient(90deg, #222 0%, #424242 100%));\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.login-form-div[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--Neutral-700, #7e838b);\n  font-family: Urbanist;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  margin: 0;\n}\n.stepcontainer[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 600px;\n}\nform[_ngcontent-%COMP%] {\n}\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--Text-Dark, #212121);\n  font-family: Urbanist;\n  font-size: var(--Font-Size-2, 14px);\n  font-style: normal;\n  font-weight: 500;\n  line-height: var(--Line-Heights-10, 20px);\n  letter-spacing: var(--Letter-Spacing-2, 0.1px);\n  margin-bottom: 4px;\n}\nform[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], form[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%], form[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%], form[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%], form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-radius: 8px;\n  border: 1px solid #ccc;\n  font-size: 14px;\n  width: 100%;\n  box-sizing: border-box;\n}\nform[_ngcontent-%COMP%]   .redstar[_ngcontent-%COMP%] {\n  color: red;\n}\nform[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button, form[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\nform[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\nform[_ngcontent-%COMP%]   .password-input[_ngcontent-%COMP%] {\n  position: relative;\n}\nform[_ngcontent-%COMP%]   .password-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-right: 40px;\n}\nform[_ngcontent-%COMP%]   .password-input[_ngcontent-%COMP%]   .eye-button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n}\nform[_ngcontent-%COMP%]   .password-input[_ngcontent-%COMP%]   .eye-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n}\nform[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-top: -8px;\n}\nform[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #3b27b9;\n  font-size: 14px;\n  text-decoration: none;\n}\nform[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid;\n  background: #222;\n  color: var(--Text-Light, #fff);\n  text-align: center;\n  font-family: Urbanist;\n  font-size: var(--Font-Size-3, 16px);\n  font-style: normal;\n  font-weight: 500;\n  line-height: var(--Line-Heights-9, 24px);\n  letter-spacing: var(--Letter-Spacing-1, 0.15px);\n  padding: 12px;\n}\nform[_ngcontent-%COMP%]   .resend-text[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #715CC3;\n  text-decoration: underline;\n}\nform[_ngcontent-%COMP%]   .resend-text.disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n  color: #aaa;\n}\nform[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 13px;\n}\nform[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]:disabled {\n  padding: 12px;\n  border: none;\n  border-radius: 8px;\n  background-color: #a0a0a0 !important;\n  color: #fff;\n  font-size: 16px;\n  cursor: not-allowed;\n}\nform[_ngcontent-%COMP%]   .signup-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: center;\n}\nform[_ngcontent-%COMP%]   .signup-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #3b27b9;\n  text-decoration: none;\n  font-weight: 500;\n}\nform[_ngcontent-%COMP%]   .warning-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: start;\n  background-color: #fff4db;\n  border-radius: 8px;\n  padding: 12px;\n  gap: 8px;\n  color: #333;\n}\nform[_ngcontent-%COMP%]   .warning-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #a16800;\n  font-family: Urbanist;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 18px;\n  margin: 0;\n}\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.white-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 8px;\n  border: 1px solid #000;\n  color: #222;\n  background: #fff;\n  text-align: center;\n  font-family: Urbanist;\n  font-size: var(--Font-Size-3, 16px);\n  font-style: normal;\n  font-weight: 500;\n  line-height: var(--Line-Heights-9, 24px);\n  letter-spacing: var(--Letter-Spacing-1, 0.15px);\n  padding: 12px;\n}\n.otp-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.otp-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin: 20px 0;\n}\n.otp-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  font-size: 1.5rem;\n  text-align: center;\n  border: 2px solid #ccc;\n  border-radius: 8px;\n  outline: none;\n  transition: border-color 0.2s;\n}\n.otp-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: black;\n}\n.login-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  background: black;\n  color: white;\n  padding: 10px;\n  border: none;\n  font-size: 1rem;\n  border-radius: 8px;\n  cursor: pointer;\n}\n.timer[_ngcontent-%COMP%] {\n  color: #3366ff;\n}\n.password-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.password-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-right: 40px;\n}\n.eye-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  background: none;\n  border: none;\n  font-size: 1.2rem;\n  cursor: pointer;\n}\n.detailscard[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid #c6c6c6;\n  padding: 10px;\n}\n.detailscard[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #211b3a;\n  font-family: Urbanist;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: normal;\n}\n.detailscard[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #211B3A;\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n}\n@media (max-width: 992px) {\n  .intro-image-div[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n  .login-form-div[_ngcontent-%COMP%] {\n    width: 50%;\n    padding: 40px 20px;\n  }\n  .login-form-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n}\n@media (max-width: 768px) {\n  .main-login-component[_ngcontent-%COMP%] {\n    flex-direction: column;\n    justify-content: flex-start;\n  }\n  .intro-image-div[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 520px;\n    border-radius: 0 0 20px 20px;\n    background-position: center;\n  }\n  .login-form-div[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 30px 20px;\n  }\n  .login-form-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 28px;\n    line-height: 120%;\n    text-align: center;\n  }\n  form[_ngcontent-%COMP%] {\n    margin-top: 32px;\n    gap: 12px;\n  }\n  form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], form[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%], form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n    padding: 10px;\n    font-size: 14px;\n  }\n  .login-btn[_ngcontent-%COMP%] {\n    font-size: 15px;\n    padding: 10px;\n  }\n  .signup-text[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .warning-box[_ngcontent-%COMP%] {\n    padding: 10px;\n    font-size: 12px;\n    align-items: flex-start;\n  }\n  .warning-box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n    margin-top: 2px;\n  }\n}\n@media (max-width: 480px) {\n  .intro-image-div[_ngcontent-%COMP%] {\n    height: 350px;\n    border-radius: 0;\n  }\n  .login-form-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .otp-inputs[_ngcontent-%COMP%] {\n    gap: 6px;\n  }\n  .otp-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 42px;\n    height: 42px;\n    font-size: 1.2rem;\n  }\n  .login-btn[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 8px;\n  }\n}\n/*# sourceMappingURL=ias-signup.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IasSignupComponent, { className: "IasSignupComponent", filePath: "src/app/authmodule/ias-signup/ias-signup.component.ts", lineNumber: 18 });
})();

// src/app/authmodule/auth.guard.ts
var authGuard = (route, state) => {
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);
  if (isPlatformBrowser(platformId)) {
    const token = localStorage.getItem("authToken");
    const role = localStorage.getItem("userRole") ? atob(localStorage.getItem("userRole")) : "";
    const status = localStorage.getItem("userStatus") ? atob(localStorage.getItem("userStatus")) : "";
    const toastService = inject(ToastService);
    if (token) {
      const expectedRoles = route.data?.["roles"];
      const expectedStatuses = route.data?.["statuses"];
      if (expectedRoles && !expectedRoles.includes(role)) {
        if (role === "admin" && expectedRoles.includes("user")) {
          toastService.showToast("You are logged in as admin. To visit this page, login with member credentials.", "danger");
        } else {
          router.navigateByUrl("/unauthorized", { replaceUrl: true });
        }
        return false;
      }
      if (expectedStatuses && !expectedStatuses.includes(status)) {
        if (status === "created") {
          router.navigateByUrl("/user-not-aproved", { replaceUrl: true });
        } else {
          router.navigateByUrl("/unauthorized", { replaceUrl: true });
        }
        return false;
      }
      return true;
    }
    localStorage.setItem("redirectUrl", state.url);
    router.navigateByUrl("/login", { replaceUrl: true });
    return false;
  }
  return false;
};

// src/app/authmodule/guards/no-auth.guard.ts
var noAuthGuard = (route, state) => {
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);
  if (isPlatformBrowser(platformId)) {
    const token = localStorage.getItem("authToken");
    const role = atob(localStorage.getItem("userRole") || "");
    if (token) {
      if (role === "admin") {
        router.navigateByUrl("/home", { replaceUrl: true });
      } else if (role === "user") {
        router.navigateByUrl("/user-home", { replaceUrl: true });
      } else {
        router.navigateByUrl("/", { replaceUrl: true });
      }
      return false;
    }
    return true;
  }
  return false;
};

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    component: MainPageComponent,
    children: [
      {
        path: "",
        // component:IasHomepageComponent,
        loadComponent: () => import("./chunk-XNPUILDZ.js").then((m) => m.IasHomepageComponent)
      },
      {
        path: "about-us",
        // component:IasHomepageComponent,
        loadComponent: () => import("./chunk-GDY7J5G6.js").then((m) => m.IasAboutusComponent)
      },
      {
        path: "contact-us",
        // component:IasHomepageComponent,
        loadComponent: () => import("./chunk-OVIBTUJD.js").then((m) => m.IasContactusComponent)
      },
      {
        path: "community",
        // component:IasHomepageComponent,
        loadComponent: () => import("./chunk-PYK6X5FO.js").then((m) => m.IasCommunityComponent)
      },
      {
        path: "post",
        // component:IasHomepageComponent,
        loadComponent: () => import("./chunk-TUDXLYN2.js").then((m) => m.PostComponent)
      },
      {
        path: "caruna",
        loadComponent: () => import("./chunk-G2MBV33J.js").then((m) => m.IasCarunaComponent)
      },
      {
        path: "all-members",
        // component:IasHomepageComponent,
        loadComponent: () => import("./chunk-DGOLD7UI.js").then((m) => m.AllMembersComponent)
      },
      {
        path: "news-blogs",
        // component:IasHomepageComponent,
        loadComponent: () => import("./chunk-MYPOYRHJ.js").then((m) => m.NewsBlogsComponent)
      },
      {
        path: "caruna",
        // component:IasHomepageComponent,
        loadComponent: () => import("./chunk-G2MBV33J.js").then((m) => m.IasCarunaComponent)
      },
      {
        path: "welfare-membership",
        // component:IasHomepageComponent,
        loadComponent: () => import("./chunk-Z2YPRF6Z.js").then((m) => m.WelfareMembershipComponent)
      },
      {
        path: "lifetime-membership",
        // component:IasHomepageComponent,
        loadComponent: () => import("./chunk-6EEYW7ZN.js").then((m) => m.LifetimeMembershipComponent)
      },
      {
        path: "readmorenews",
        // component:IasHomepageComponent,
        loadComponent: () => import("./chunk-S4VRH7UI.js").then((m) => m.ReadmoreNewsComponent)
      },
      {
        path: "readmoreblogs",
        // component:IasHomepageComponent,
        loadComponent: () => import("./chunk-EZKLBW5E.js").then((m) => m.ReadmoreBlogsComponent)
      },
      {
        path: "membership",
        // component:IasHomepageComponent,
        loadComponent: () => import("./chunk-EOQGM5GD.js").then((m) => m.CombinedMemberPageComponent)
      },
      {
        path: "Terms-Conditions",
        // component:IasHomepageComponent,
        loadComponent: () => import("./chunk-X6T5WR24.js").then((m) => m.TermsConditionsComponent)
      },
      {
        path: "Refund-Cancellation-Policy",
        // component:IasHomepageComponent,
        loadComponent: () => import("./chunk-RKQXLAMT.js").then((m) => m.RefundCancellationPolicyComponent)
      },
      {
        path: "Privacy-Policy",
        // component:IasHomepageComponent,
        loadComponent: () => import("./chunk-2LHOZ6EY.js").then((m) => m.PrivacyPolicyComponent)
      }
    ]
  },
  {
    path: "login",
    canActivate: [noAuthGuard],
    component: IasLoginComponent
  },
  {
    path: "signup",
    canActivate: [noAuthGuard],
    component: IasSignupComponent
  },
  {
    path: "forget-password",
    canActivate: [noAuthGuard],
    component: IasForgotpasswordComponent
  },
  {
    path: "home",
    canActivate: [authGuard],
    data: { roles: ["admin"] },
    loadComponent: () => import("./chunk-CZXHI4XQ.js").then((m) => m.DashboardLayoutComponent),
    children: [
      {
        path: "",
        loadComponent: () => import("./chunk-D4EJPBLV.js").then((m) => m.DashboardComponent)
      },
      {
        path: "profile",
        loadComponent: () => import("./chunk-LNSRFSP6.js").then((m) => m.ProfileInfoComponent)
      },
      {
        path: "publications",
        loadComponent: () => import("./chunk-N2SOEXG5.js").then((m) => m.PublicationsComponent)
      },
      {
        path: "blogs",
        loadComponent: () => import("./chunk-P4QDZIJ5.js").then((m) => m.BlogsComponent)
      },
      {
        path: "news",
        loadComponent: () => import("./chunk-I2BGR4VO.js").then((m) => m.NewsComponent)
      },
      {
        path: "feedbacks",
        loadComponent: () => import("./chunk-L3HGU2JJ.js").then((m) => m.FeedbacksComponent)
      },
      {
        path: "my-transaction",
        loadComponent: () => import("./chunk-NS5CHL44.js").then((m) => m.MyTransactionComponent)
      },
      {
        path: "approved-user",
        loadComponent: () => import("./chunk-7NPHXYGY.js").then((m) => m.ApprovedUserComponent)
      },
      {
        path: "pending-approval-user",
        loadComponent: () => import("./chunk-ZHLESRGX.js").then((m) => m.NotApprovedUserComponent)
      },
      {
        path: "rejected-user",
        loadComponent: () => import("./chunk-UYYAIBDL.js").then((m) => m.RejectedUsersComponent)
      }
    ]
  },
  {
    path: "user-home",
    canActivate: [authGuard],
    data: { roles: ["user"], statuses: ["approved"] },
    loadComponent: () => import("./chunk-HWFJCWEW.js").then((m) => m.UserDashboardComponent),
    children: [
      {
        path: "",
        loadComponent: () => import("./chunk-AKDHLFCQ.js").then((m) => m.UserHomeComponent)
      },
      {
        path: "user-profile",
        loadComponent: () => import("./chunk-YBZEBGHW.js").then((m) => m.UserProfileComponent)
      },
      {
        path: "user-events",
        loadComponent: () => import("./chunk-ENADLOYK.js").then((m) => m.UserEventsComponent)
      },
      {
        path: "user-membership",
        loadComponent: () => import("./chunk-ZDECEBE5.js").then((m) => m.UserMembershipComponent)
      },
      {
        path: "user-members",
        loadComponent: () => import("./chunk-VRGJC5JM.js").then((m) => m.UserMembersComponent)
      },
      {
        path: "user-transactions",
        loadComponent: () => import("./chunk-ECPQDHIW.js").then((m) => m.MyTransactionsComponent)
      },
      {
        path: "payment-status",
        loadComponent: () => import("./chunk-U54OKKKZ.js").then((m) => m.PaymentStatusComponent)
      }
    ]
  },
  {
    path: "user-not-aproved",
    data: { statuses: ["created"] },
    loadComponent: () => import("./chunk-R3FPTTZX.js").then((m) => m.UserNotApprovedLayoutComponent)
  },
  {
    path: "**",
    // wildcard → catch all unknown routes
    loadComponent: () => import("./chunk-YV66BLZK.js").then((m) => m.RouteErrorComponent)
  }
];

// src/app/interceptors/auth.interceptor.ts
var authInterceptor = (req, next) => {
  const platformId = inject(PLATFORM_ID);
  const router = inject(Router);
  const http = inject(HttpClient);
  let token = null;
  let expireAt = null;
  let refreshToken = null;
  if (isPlatformBrowser(platformId)) {
    token = localStorage.getItem("authToken");
    expireAt = localStorage.getItem("expireAt");
    refreshToken = localStorage.getItem("refreshToken");
  }
  if (token) {
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
  }
  if (expireAt && new Date(expireAt) <= /* @__PURE__ */ new Date() && refreshToken) {
    return from(http.post(`${environment.apiUrl}/auth/refresh`, { refreshToken }).toPromise()).pipe(switchMap((res) => {
      if (res?.success && res.data?.sessionToken) {
        localStorage.setItem("authToken", res.data.sessionToken);
        localStorage.setItem("expireAt", res.data.expireAt);
        localStorage.setItem("refreshToken", res.data.refreshToken);
        const clonedReq = req.clone({
          setHeaders: { Authorization: `Bearer ${res.data.sessionToken}` }
        });
        return next(clonedReq);
      } else {
        localStorage.clear();
        router.navigateByUrl("/login");
        return throwError(() => new Error("Refresh token failed"));
      }
    }), catchError(() => {
      localStorage.clear();
      router.navigateByUrl("/login");
      return throwError(() => new Error("Refresh token failed"));
    }));
  }
  return next(req).pipe(catchError((error) => {
    if (error.status === 401) {
      localStorage.clear();
      router.navigateByUrl("/login");
    }
    return throwError(() => error);
  }));
};

// node_modules/@angular/platform-browser/fesm2022/animations/async.mjs
var ANIMATION_PREFIX = "@";
var AsyncAnimationRendererFactory = class _AsyncAnimationRendererFactory {
  /**
   *
   * @param moduleImpl allows to provide a mock implmentation (or will load the animation module)
   */
  constructor(doc, delegate, zone, animationType, moduleImpl) {
    this.doc = doc;
    this.delegate = delegate;
    this.zone = zone;
    this.animationType = animationType;
    this.moduleImpl = moduleImpl;
    this._rendererFactoryPromise = null;
    this.scheduler = inject(ChangeDetectionScheduler, {
      optional: true
    });
  }
  /** @nodoc */
  ngOnDestroy() {
    this._engine?.flush();
  }
  /**
   * @internal
   */
  loadImpl() {
    const moduleImpl = this.moduleImpl ?? import("./chunk-NZ622QNA.js");
    return moduleImpl.catch((e) => {
      throw new RuntimeError(5300, (typeof ngDevMode === "undefined" || ngDevMode) && "Async loading for animations package was enabled, but loading failed. Angular falls back to using regular rendering. No animations will be displayed and their styles won't be applied.");
    }).then(({
      \u0275createEngine,
      \u0275AnimationRendererFactory
    }) => {
      this._engine = \u0275createEngine(this.animationType, this.doc, this.scheduler);
      const rendererFactory = new \u0275AnimationRendererFactory(this.delegate, this._engine, this.zone);
      this.delegate = rendererFactory;
      return rendererFactory;
    });
  }
  /**
   * This method is delegating the renderer creation to the factories.
   * It uses default factory while the animation factory isn't loaded
   * and will rely on the animation factory once it is loaded.
   *
   * Calling this method will trigger as side effect the loading of the animation module
   * if the renderered component uses animations.
   */
  createRenderer(hostElement, rendererType) {
    const renderer = this.delegate.createRenderer(hostElement, rendererType);
    if (renderer.\u0275type === 0) {
      return renderer;
    }
    if (typeof renderer.throwOnSyntheticProps === "boolean") {
      renderer.throwOnSyntheticProps = false;
    }
    const dynamicRenderer = new DynamicDelegationRenderer(renderer);
    if (rendererType?.data?.["animation"] && !this._rendererFactoryPromise) {
      this._rendererFactoryPromise = this.loadImpl();
    }
    this._rendererFactoryPromise?.then((animationRendererFactory) => {
      const animationRenderer = animationRendererFactory.createRenderer(hostElement, rendererType);
      dynamicRenderer.use(animationRenderer);
    }).catch((e) => {
      dynamicRenderer.use(renderer);
    });
    return dynamicRenderer;
  }
  begin() {
    this.delegate.begin?.();
  }
  end() {
    this.delegate.end?.();
  }
  whenRenderingDone() {
    return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
  }
  static {
    this.\u0275fac = function AsyncAnimationRendererFactory_Factory(t) {
      \u0275\u0275invalidFactory();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _AsyncAnimationRendererFactory,
      factory: _AsyncAnimationRendererFactory.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsyncAnimationRendererFactory, [{
    type: Injectable
  }], () => [{
    type: Document
  }, {
    type: RendererFactory2
  }, {
    type: NgZone
  }, {
    type: void 0
  }, {
    type: Promise
  }], null);
})();
var DynamicDelegationRenderer = class {
  constructor(delegate) {
    this.delegate = delegate;
    this.replay = [];
    this.\u0275type = 1;
  }
  use(impl) {
    this.delegate = impl;
    if (this.replay !== null) {
      for (const fn of this.replay) {
        fn(impl);
      }
      this.replay = null;
    }
  }
  get data() {
    return this.delegate.data;
  }
  destroy() {
    this.replay = null;
    this.delegate.destroy();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  get destroyNode() {
    return this.delegate.destroyNode;
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
  }
  insertBefore(parent, newChild, refChild, isMove) {
    this.delegate.insertBefore(parent, newChild, refChild, isMove);
  }
  removeChild(parent, oldChild, isHostElement) {
    this.delegate.removeChild(parent, oldChild, isHostElement);
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style, value, flags) {
    this.delegate.setStyle(el, style, value, flags);
  }
  removeStyle(el, style, flags) {
    this.delegate.removeStyle(el, style, flags);
  }
  setProperty(el, name, value) {
    if (this.shouldReplay(name)) {
      this.replay.push((renderer) => renderer.setProperty(el, name, value));
    }
    this.delegate.setProperty(el, name, value);
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback) {
    if (this.shouldReplay(eventName)) {
      this.replay.push((renderer) => renderer.listen(target, eventName, callback));
    }
    return this.delegate.listen(target, eventName, callback);
  }
  shouldReplay(propOrEventName) {
    return this.replay !== null && propOrEventName.startsWith(ANIMATION_PREFIX);
  }
};
function provideAnimationsAsync(type = "animations") {
  performanceMarkFeature("NgAsyncAnimations");
  return makeEnvironmentProviders([{
    provide: RendererFactory2,
    useFactory: (doc, renderer, zone) => {
      return new AsyncAnimationRendererFactory(doc, renderer, zone, type);
    },
    deps: [DOCUMENT, DomRendererFactory2, NgZone]
  }, {
    provide: ANIMATION_MODULE_TYPE,
    useValue: type === "noop" ? "NoopAnimations" : "BrowserAnimations"
  }]);
}

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideRouter(routes, withInMemoryScrolling({
      scrollPositionRestoration: "enabled",
      anchorScrolling: "enabled"
    })),
    provideClientHydration(),
    provideHttpClient(
      withInterceptors([authInterceptor]),
      withFetch()
      // ✅ enable Fetch API for SSR
    ),
    provideAnimationsAsync()
    // ✅ keep only once
  ]
};

// src/app/common/common-toast/common-toast.component.ts
var _c02 = ["errorToast"];
var CommonToastComponent = class _CommonToastComponent {
  constructor(toastService) {
    this.toastService = toastService;
    this.toastMessage = "";
    this.toastType = "danger";
  }
  ngOnInit() {
    this.toastService.toastMessage$.subscribe(({ message, type }) => {
      this.toastMessage = message;
      this.toastType = type || "danger";
      const toastEl = this.errorToast.nativeElement;
      const toast = new bootstrap.Toast(toastEl);
      toast.show();
    });
  }
  static {
    this.\u0275fac = function CommonToastComponent_Factory(t) {
      return new (t || _CommonToastComponent)(\u0275\u0275directiveInject(ToastService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommonToastComponent, selectors: [["app-common-toast"]], viewQuery: function CommonToastComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.errorToast = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 4, consts: [["errorToast", ""], [1, "toast-container", "position-fixed", "top-0", "end-0", "p-3"], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true"], [1, "d-flex"], [1, "toast-body"], ["type", "button", "data-bs-dismiss", "toast", "aria-label", "Close", 1, "btn-close", "btn-close-white", "me-2", "m-auto"]], template: function CommonToastComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2, 0)(3, "div", 3)(4, "div", 4);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "button", 5);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275classMapInterpolate1("toast align-items-center text-bg-", ctx.toastType, " border-0");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", ctx.toastMessage, " ");
      }
    } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommonToastComponent, { className: "CommonToastComponent", filePath: "src/app/common/common-toast/common-toast.component.ts", lineNumber: 12 });
})();

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  constructor() {
    this.title = "ISDirectory";
  }
  static {
    this.\u0275fac = function AppComponent_Factory(t) {
      return new (t || _AppComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "router-outlet")(1, "app-common-toast");
      }
    }, dependencies: [RouterOutlet, CommonToastComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 12 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
/*! Bundled license information:

@angular/platform-browser/fesm2022/animations/async.mjs:
  (**
   * @license Angular v17.3.12
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=main.js.map
