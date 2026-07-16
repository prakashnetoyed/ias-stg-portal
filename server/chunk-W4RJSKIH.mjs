import './polyfills.server.mjs';
import {
  IasLoaderComponent
} from "./chunk-YGRMO6BY.mjs";
import {
  ImageCropperComponent
} from "./chunk-UQIFM5BZ.mjs";
import {
  UserService
} from "./chunk-CSPNFJ4P.mjs";
import {
  provideServerRendering
} from "./chunk-TXOA7O3Q.mjs";
import {
  AuthService
} from "./chunk-YVD4BM6T.mjs";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  provideRouter,
  withInMemoryScrolling
} from "./chunk-BE6K35NY.mjs";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MaxLengthValidator,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-72SVRZB2.mjs";
import {
  ToastService
} from "./chunk-AE4AKEDV.mjs";
import {
  environment
} from "./chunk-SJMEGSB4.mjs";
import {
  DomRendererFactory2,
  Meta,
  Title,
  bootstrapApplication,
  provideClientHydration
} from "./chunk-4YWQRQCE.mjs";
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
  provideHttpClient,
  withFetch,
  withInterceptors
} from "./chunk-HLCGF54J.mjs";
import {
  CommonModule,
  DOCUMENT,
  DatePipe,
  NgForOf,
  NgIf,
  NgStyle,
  isPlatformBrowser,
  isPlatformServer
} from "./chunk-G22F5CZJ.mjs";
import {
  ANIMATION_MODULE_TYPE,
  APP_INITIALIZER,
  ApplicationRef,
  ChangeDetectionScheduler,
  Component,
  Directive,
  ElementRef,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NEVER,
  NgModule,
  NgZone,
  PLATFORM_ID,
  Renderer2,
  RendererFactory2,
  RuntimeError,
  Subject,
  catchError,
  concat,
  defer,
  delay,
  filter,
  forwardRef,
  from,
  fromEvent,
  inject,
  isDevMode,
  makeEnvironmentProviders,
  map,
  merge,
  mergeApplicationConfig,
  of,
  output,
  performanceMarkFeature,
  publish,
  setClassMetadata,
  switchMap,
  take,
  tap,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-NA5KQ7PN.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-24VIC3GD.mjs";

// src/app/common/common-toast/common-toast.component.ts
var _c0 = ["errorToast"];
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
        \u0275\u0275viewQuery(_c0, 7);
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

// src/app/common/ias-header/ias-header.component.ts
var _c02 = () => ({ exact: true });
function IasHeaderComponent_ng_container_52_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "img", 37);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.userRole === "admin" || ctx_r1.userRole === "state_association_admin" ? ctx_r1.user == null ? null : ctx_r1.user.profilePic : ctx_r1.user == null ? null : ctx_r1.user.doptOfficer == null ? null : ctx_r1.user.doptOfficer.profilePic, \u0275\u0275sanitizeUrl);
  }
}
function IasHeaderComponent_ng_container_52_div_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getUserInitials(), " ");
  }
}
function IasHeaderComponent_ng_container_52_div_1_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li")(2, "a", 20);
    \u0275\u0275text(3, "Admin Profile");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "li")(5, "a", 20);
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
function IasHeaderComponent_ng_container_52_div_1_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li")(2, "a", 20);
    \u0275\u0275text(3, "State Admin Dashboard");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", "/state-dashboard");
  }
}
function IasHeaderComponent_ng_container_52_div_1_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li")(2, "a", 20);
    \u0275\u0275text(3, "User Profile");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "li")(5, "a", 20);
    \u0275\u0275text(6, "User Dashboard");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", "/user-home/user-profile");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", "/user-home");
  }
}
function IasHeaderComponent_ng_container_52_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "button", 31)(2, "div", 32);
    \u0275\u0275template(3, IasHeaderComponent_ng_container_52_div_1_ng_container_3_Template, 2, 1, "ng-container", 33)(4, IasHeaderComponent_ng_container_52_div_1_ng_template_4_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "ul", 34);
    \u0275\u0275template(7, IasHeaderComponent_ng_container_52_div_1_ng_container_7_Template, 7, 2, "ng-container", 28)(8, IasHeaderComponent_ng_container_52_div_1_ng_container_8_Template, 4, 1, "ng-container", 28)(9, IasHeaderComponent_ng_container_52_div_1_ng_container_9_Template, 7, 2, "ng-container", 28);
    \u0275\u0275elementStart(10, "li");
    \u0275\u0275element(11, "hr", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li")(13, "a", 36);
    \u0275\u0275listener("click", function IasHeaderComponent_ng_container_52_div_1_Template_a_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275text(14, "Logout");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const initials_r3 = \u0275\u0275reference(5);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.userRole === "admin" || ctx_r1.userRole === "state_association_admin" ? ctx_r1.user == null ? null : ctx_r1.user.profilePic : ctx_r1.user == null ? null : ctx_r1.user.doptOfficer == null ? null : ctx_r1.user.doptOfficer.profilePic)("ngIfElse", initials_r3);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.userRole === "admin");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.userRole === "state_association_admin");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.userRole === "user");
  }
}
function IasHeaderComponent_ng_container_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, IasHeaderComponent_ng_container_52_div_1_Template, 15, 5, "div", 29);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoggedIn);
  }
}
function IasHeaderComponent_ng_container_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 38);
    \u0275\u0275text(2, "Log in / Sign up");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", "");
  }
}
var IasHeaderComponent = class _IasHeaderComponent {
  constructor(router, userService, toastService, platformId) {
    this.router = router;
    this.userService = userService;
    this.toastService = toastService;
    this.platformId = platformId;
    this.auth = inject(AuthService);
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
      localStorage.clear();
      this.auth.checkAuth();
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
    if (this.router.url === "/homepage") {
      this.toastService.showToast("You are already on Webpage", "success");
    } else {
      this.router.navigateByUrl("/homepage");
    }
  }
  static {
    this.\u0275fac = function IasHeaderComponent_Factory(t) {
      return new (t || _IasHeaderComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(PLATFORM_ID));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IasHeaderComponent, selectors: [["app-ias-header"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 54, vars: 28, consts: [["initials", ""], [1, "main-ncs-header-div"], [1, "container", "d-flex", "align-items-center", "justify-content-between"], [1, "logo-div", 2, "cursor", "pointer", 3, "click"], ["src", "../../../assets/logo/ias-small-logo.png", "alt", "ias-logo", "draggable", "false"], [1, "navigationmenu", "d-flex", "align-items-center"], [1, "navbar", "navbar-expand-lg"], [1, "container-fluid"], ["type", "button", "data-bs-toggle", "offcanvas", "data-bs-target", "#offcanvasNavbar", "aria-controls", "offcanvasNavbar", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse", "d-none", "d-lg-flex"], [1, "navbar-nav", "ms-auto"], ["routerLinkActive", "active-link", 1, "nav-link", 3, "routerLink", "routerLinkActiveOptions"], [1, "nav-item", "dropdown"], ["data-bs-toggle", "dropdown", "aria-expanded", "false", "id", "dropdownMenuButton", 1, "d-flex", "align-items-center", "text-decoration-none", "nav-link"], [1, "me-2"], [1, "arrow-icon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "10", "fill", "none"], ["d", "M12.6 0.8L14 2.2 7 9.2 0 2.2 1.4 0.8 7 6.375 12.6 0.8Z", "fill", "#222"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu", "dropdown-menu-dark"], [1, "dropdown-item", 3, "routerLink"], ["tabindex", "-1", "id", "offcanvasNavbar", "aria-labelledby", "offcanvasNavbarLabel", 1, "offcanvas", "offcanvas-start", "d-lg-none"], [1, "offcanvas-header"], ["id", "offcanvasNavbarLabel", 1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "text-reset"], [1, "offcanvas-body"], [1, "navbar-nav"], ["routerLinkActive", "active-link", "data-bs-dismiss", "offcanvas", 1, "nav-link", 3, "routerLink", "routerLinkActiveOptions"], [4, "ngIf"], ["class", "dropdown", 4, "ngIf"], [1, "dropdown"], ["type", "button", "id", "profileDropdown", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "dropdown-toggle", "user-profile", "d-flex", "align-items-center", "p-0"], [1, "avatar"], [4, "ngIf", "ngIfElse"], ["aria-labelledby", "profileDropdown", 1, "dropdown-menu", "dropdown-menu-end"], [1, "dropdown-divider"], [1, "dropdown-item", "text-danger", 2, "cursor", "pointer", 3, "click"], ["alt", "User Avatar", 3, "src"], [1, "btn", "btn-prime", 3, "routerLink"]], template: function IasHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
        \u0275\u0275listener("click", function IasHeaderComponent_Template_div_click_2_listener() {
          return ctx.goHome();
        });
        \u0275\u0275element(3, "img", 4);
        \u0275\u0275elementStart(4, "h1");
        \u0275\u0275text(5, "Indian Administrative Service ");
        \u0275\u0275element(6, "br");
        \u0275\u0275text(7, "Central Association");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 5)(9, "nav", 6)(10, "div", 7)(11, "button", 8);
        \u0275\u0275element(12, "span", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 10)(14, "div", 11)(15, "a", 12);
        \u0275\u0275text(16, "Membership");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "a", 12);
        \u0275\u0275text(18, "Community");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "li", 13)(20, "a", 14)(21, "span", 15);
        \u0275\u0275text(22, "Resources");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "i", 16);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(24, "svg", 17);
        \u0275\u0275element(25, "path", 18);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(26, "ul", 19)(27, "li")(28, "a", 20);
        \u0275\u0275text(29, "News & Blogs");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "li")(31, "a", 20);
        \u0275\u0275text(32, "Good Governance Initiatives");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(33, "a", 12);
        \u0275\u0275text(34, "Contact us");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(35, "div", 21)(36, "div", 22)(37, "h5", 23);
        \u0275\u0275text(38, "Menu");
        \u0275\u0275elementEnd();
        \u0275\u0275element(39, "button", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 25)(41, "div", 26)(42, "a", 27);
        \u0275\u0275text(43, "Membership");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "a", 27);
        \u0275\u0275text(45, "Community");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "a", 27);
        \u0275\u0275text(47, "News");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "a", 27);
        \u0275\u0275text(49, "Good Governance Initiatives");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "a", 27);
        \u0275\u0275text(51, "Contact us");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275template(52, IasHeaderComponent_ng_container_52_Template, 2, 1, "ng-container", 28)(53, IasHeaderComponent_ng_container_53_Template, 3, 1, "ng-container", 28);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(15);
        \u0275\u0275property("routerLink", "membership")("routerLinkActiveOptions", \u0275\u0275pureFunction0(20, _c02));
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", "community")("routerLinkActiveOptions", \u0275\u0275pureFunction0(21, _c02));
        \u0275\u0275advance(11);
        \u0275\u0275property("routerLink", "news-blogs");
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLink", "good-governance-initiatives");
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", "contact-us")("routerLinkActiveOptions", \u0275\u0275pureFunction0(22, _c02));
        \u0275\u0275advance(9);
        \u0275\u0275property("routerLink", "membership")("routerLinkActiveOptions", \u0275\u0275pureFunction0(23, _c02));
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", "community")("routerLinkActiveOptions", \u0275\u0275pureFunction0(24, _c02));
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", "news-blogs")("routerLinkActiveOptions", \u0275\u0275pureFunction0(25, _c02));
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", "good-governance-initiatives")("routerLinkActiveOptions", \u0275\u0275pureFunction0(26, _c02));
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", "contact-us")("routerLinkActiveOptions", \u0275\u0275pureFunction0(27, _c02));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.isLoggedIn && ctx.isLoggedIn !== null);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoggedIn && ctx.isLoggedIn !== null);
      }
    }, dependencies: [CommonModule, NgIf, RouterModule, RouterLink, RouterLinkActive], styles: ["\n\n.main-ncs-header-div[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 12px 0px;\n  position: sticky;\n  top: 0px;\n  z-index: 10;\n  display: block;\n  box-shadow: 10px 2px 26px -6px black;\n}\n.logo-div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.logo-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #000;\n  font-family: Urbanist;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 22.393px;\n  margin: 0px;\n}\n@media (max-width: 900px) {\n  .logo-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n}\n.nav-link[_ngcontent-%COMP%] {\n  color: #000;\n  font-family: Urbanist;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 22.393px;\n  text-decoration: none !important;\n}\n.active-link[_ngcontent-%COMP%] {\n  color: #000;\n  font-weight: bold;\n}\n.arrow-icon[_ngcontent-%COMP%] {\n  display: flex;\n  transition: transform 0.3s ease;\n}\n.show[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.nav-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.main-epfo-header[_ngcontent-%COMP%] {\n  background: #FFF;\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  width: 100%;\n  box-shadow: 18px -6px 6px 6px rgb(163, 163, 163);\n}\n.user-info[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  text-align: right;\n}\n.name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #2c2c2c;\n}\n.role[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9e9e9e;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  background-color: rgba(126, 87, 194, 0.1);\n  color: #673ab7;\n  font-size: 14px;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  margin-left: 8px;\n  overflow: hidden;\n  text-transform: uppercase;\n}\n.avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n  border-radius: 50%;\n  display: block;\n}\n.btn-check[_ngcontent-%COMP%]:checked    + .btn[_ngcontent-%COMP%], .btn.active[_ngcontent-%COMP%], .btn.show[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:first-child:active, [_ngcontent-%COMP%]:not(.btn-check)    + .btn[_ngcontent-%COMP%]:active {\n  color: var(--bs-btn-active-color);\n  background-color: var(--bs-btn-active-bg);\n  border-color: rgba(255, 255, 255, 0);\n}\n.dropdown-menu-dark[_ngcontent-%COMP%] {\n  --bs-dropdown-color: #dee2e6;\n  --bs-dropdown-bg: #fff;\n  --bs-dropdown-border-color: var(--bs-border-color-translucent);\n  --bs-dropdown-box-shadow: ;\n  --bs-dropdown-link-color: #000;\n  --bs-dropdown-link-hover-color:#000;\n  --bs-dropdown-divider-bg: var(--bs-border-color-translucent);\n  --bs-dropdown-link-hover-bg: rgba(73, 47, 178, 0.20);\n  --bs-dropdown-link-active-color: #fff;\n  --bs-dropdown-link-active-bg: #0d6efd;\n  --bs-dropdown-link-disabled-color: #adb5bd;\n  --bs-dropdown-header-color: #adb5bd;\n  padding: 10px;\n  border-radius: 8px;\n}\n/*# sourceMappingURL=ias-header.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IasHeaderComponent, { className: "IasHeaderComponent", filePath: "src/app/common/ias-header/ias-header.component.ts", lineNumber: 15 });
})();

// src/app/common/ias-footer/ias-footer.component.ts
var IasFooterComponent = class _IasFooterComponent {
  constructor() {
    const today = /* @__PURE__ */ new Date();
    const formattedDate = today.toLocaleDateString("en-GB");
    this.finalDate = formattedDate.replace(/\//g, "-");
  }
  static {
    this.\u0275fac = function IasFooterComponent_Factory(t) {
      return new (t || _IasFooterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IasFooterComponent, selectors: [["app-ias-footer"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 71, vars: 6, consts: [[1, "footer"], [1, "container"], [1, "footer-top"], [1, "footer-logo"], [1, "sbvhs", "d-flex", "align-items-center", "gap-2"], ["src", "../../../assets/logo/ias-small-logo.png", "alt", "IAS Association Logo"], [1, "org-name", "m-0", "p-0"], [1, "last-updated"], [1, "footer-links"], [3, "routerLink"], [1, "footer-contact"], [1, "social-icons"], ["href", "https://x.com/iasassociation", "target", "_blank"], [1, "fab", "fa-x-twitter"], ["href", "https://www.facebook.com/IASassociation/", "target", "_blank"], [1, "fab", "fa-facebook-f"], [1, "contact-info"], [1, "d-flex", "gap-2"], ["xmlns", "http://www.w3.org/2000/svg", "width", "17", "height", "18", "viewBox", "0 0 17 18", "fill", "none"], ["id", "mask0_52081_3854", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "17", "height", "18", 2, "mask-type", "alpha"], ["width", "17", "height", "18", "fill", "#D9D9D9"], ["mask", "url(#mask0_52081_3854)"], ["d", "M8.50742 9C8.92164 9 9.27624 8.85313 9.57121 8.55938C9.86618 8.26563 10.0137 7.9125 10.0137 7.5C10.0137 7.0875 9.86618 6.73438 9.57121 6.44063C9.27624 6.14687 8.92164 6 8.50742 6C8.0932 6 7.73861 6.14687 7.44363 6.44063C7.14866 6.73438 7.00117 7.0875 7.00117 7.5C7.00117 7.9125 7.14866 8.26563 7.44363 8.55938C7.73861 8.85313 8.0932 9 8.50742 9ZM8.50742 14.5125C10.0388 13.1125 11.1747 11.8406 11.9153 10.6969C12.6559 9.55312 13.0262 8.5375 13.0262 7.65C13.0262 6.2875 12.59 5.17188 11.7176 4.30312C10.8452 3.43438 9.77518 3 8.50742 3C7.23966 3 6.1696 3.43438 5.29723 4.30312C4.42486 5.17188 3.98867 6.2875 3.98867 7.65C3.98867 8.5375 4.35896 9.55312 5.09953 10.6969C5.8401 11.8406 6.97607 13.1125 8.50742 14.5125ZM8.50742 16.5C6.48654 14.7875 4.97715 13.1969 3.97926 11.7281C2.98137 10.2594 2.48242 8.9 2.48242 7.65C2.48242 5.775 3.08806 4.28125 4.29934 3.16875C5.51061 2.05625 6.91331 1.5 8.50742 1.5C10.1015 1.5 11.5042 2.05625 12.7155 3.16875C13.9268 4.28125 14.5324 5.775 14.5324 7.65C14.5324 8.9 14.0335 10.2594 13.0356 11.7281C12.0377 13.1969 10.5283 14.7875 8.50742 16.5Z", "fill", "#1C1B1F"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "viewBox", "0 0 18 18", "fill", "none"], ["id", "mask0_52081_3844", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "18", "height", "18", 2, "mask-type", "alpha"], ["width", "18", "height", "18", "fill", "#D9D9D9"], ["mask", "url(#mask0_52081_3844)"], ["d", "M8.25 12.75H9.75V8.25H8.25V12.75ZM9 6.75C9.2125 6.75 9.39063 6.67812 9.53438 6.53438C9.67813 6.39062 9.75 6.2125 9.75 6C9.75 5.7875 9.67813 5.60938 9.53438 5.46562C9.39063 5.32187 9.2125 5.25 9 5.25C8.7875 5.25 8.60938 5.32187 8.46563 5.46562C8.32188 5.60938 8.25 5.7875 8.25 6C8.25 6.2125 8.32188 6.39062 8.46563 6.53438C8.60938 6.67812 8.7875 6.75 9 6.75ZM9 16.5C7.9625 16.5 6.9875 16.3031 6.075 15.9094C5.1625 15.5156 4.36875 14.9813 3.69375 14.3063C3.01875 13.6313 2.48438 12.8375 2.09063 11.925C1.69687 11.0125 1.5 10.0375 1.5 9C1.5 7.9625 1.69687 6.9875 2.09063 6.075C2.48438 5.1625 3.01875 4.36875 3.69375 3.69375C4.36875 3.01875 5.1625 2.48438 6.075 2.09063C6.9875 1.69687 7.9625 1.5 9 1.5C10.0375 1.5 11.0125 1.69687 11.925 2.09063C12.8375 2.48438 13.6313 3.01875 14.3063 3.69375C14.9813 4.36875 15.5156 5.1625 15.9094 6.075C16.3031 6.9875 16.5 7.9625 16.5 9C16.5 10.0375 16.3031 11.0125 15.9094 11.925C15.5156 12.8375 14.9813 13.6313 14.3063 14.3063C13.6313 14.9813 12.8375 15.5156 11.925 15.9094C11.0125 16.3031 10.0375 16.5 9 16.5ZM9 15C10.675 15 12.0938 14.4187 13.2563 13.2563C14.4187 12.0938 15 10.675 15 9C15 7.325 14.4187 5.90625 13.2563 4.74375C12.0938 3.58125 10.675 3 9 3C7.325 3 5.90625 3.58125 4.74375 4.74375C3.58125 5.90625 3 7.325 3 9C3 10.675 3.58125 12.0938 4.74375 13.2563C5.90625 14.4187 7.325 15 9 15Z", "fill", "#1C1B1F"], [1, "text-muted"], [1, "mt-2", "needlink"], ["href", "tel:+919876543210", 1, "d-block", "text-primary"], ["href", "mailto:iasca.helpdesk@zohomail.in", 1, "d-block", "text-primary"], [1, "footer-bottom"], [1, "container", "d-flex", "align-items-center", "justify-content-between"], [1, "m-0"], [1, "footer-policies"], ["routerLink", "Refund-Cancellation-Policy"], ["routerLink", "/Terms-Conditions"], ["routerLink", "/Privacy-Policy"]], template: function IasFooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275element(5, "img", 5);
        \u0275\u0275elementStart(6, "p", 6);
        \u0275\u0275text(7, "Indian Administrative Service ");
        \u0275\u0275element(8, "br");
        \u0275\u0275text(9, "Central Association");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 7);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 8)(13, "h4");
        \u0275\u0275text(14, "Important Links");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "a", 9);
        \u0275\u0275text(16, "Community");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "a", 9);
        \u0275\u0275text(18, "Membership");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "a", 9);
        \u0275\u0275text(20, "Contact Us");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 8)(22, "h4");
        \u0275\u0275text(23, "Resources");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "a", 9);
        \u0275\u0275text(25, "News");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "a", 9);
        \u0275\u0275text(27, "Good Governance Initiatives");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 10)(29, "div", 11)(30, "a", 12);
        \u0275\u0275element(31, "i", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "a", 14);
        \u0275\u0275element(33, "i", 15);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "div", 16)(35, "p", 17);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(36, "svg", 18)(37, "mask", 19);
        \u0275\u0275element(38, "rect", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "g", 21);
        \u0275\u0275element(40, "path", 22);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(41, "span");
        \u0275\u0275text(42, "Indian Administrative Service ");
        \u0275\u0275element(43, "br");
        \u0275\u0275text(44, "Central Association, New Delhi");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "div", 17);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(46, "svg", 23)(47, "mask", 24);
        \u0275\u0275element(48, "rect", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "g", 26);
        \u0275\u0275element(50, "path", 27);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(51, "div");
        \u0275\u0275text(52, " Need help?");
        \u0275\u0275elementStart(53, "span", 28);
        \u0275\u0275text(54, " Contact Help Desk:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "div", 29)(56, "a", 30);
        \u0275\u0275text(57, "[+91 9910659965]");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "a", 31);
        \u0275\u0275text(59, "[iasca.helpdesk@zohomail.in]");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(60, "div", 32)(61, "div", 33)(62, "p", 34);
        \u0275\u0275text(63, "\xA9 2024 - Indian Administrative Service Central Association. All rights reserved.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "div", 35)(65, "a", 36);
        \u0275\u0275text(66, "Refund & Cancellation Policy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "a", 37);
        \u0275\u0275text(68, "Terms & Conditions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "a", 38);
        \u0275\u0275text(70, "Privacy Policy");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate1("Last updated: ", ctx.finalDate, "");
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", "community");
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", "membership");
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", "contact-us");
        \u0275\u0275advance(5);
        \u0275\u0275property("routerLink", "news-blogs");
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", "good-governance-initiatives");
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
    window.location.href = "mailto:iasca.helpdesk@zohomail.in?subject=Help%20Desk%20Support&body=Hello,%0D%0A%0D%0AI am contacting the Help Desk for assistance.%0D%0A%0D%0ARegards,";
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccessibilityHeaderComponent, selectors: [["app-accessibility-header"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 23, vars: 0, consts: [[1, "main-access-header-div"], [1, "inner-access", "container", "d-flex", "align-items-center", "justify-content-end"], [1, "right-access-div", "d-flex", "align-items-center", "justify-content-between", "gap-4"], [1, "social-icons"], ["href", "https://x.com/iasassociation", "target", "_blank"], [1, "fab", "fa-x-twitter"], ["href", "https://www.facebook.com/IASassociation/", "target", "_blank"], [1, "fab", "fa-facebook-f"], [1, "skip-text", "d-flex", "align-items-center", "gap-2"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "viewBox", "0 0 18 18", "fill", "none"], ["_ngcontent-ng-c2485631207", "", "id", "mask0_8942_12501", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "18", "height", "18", 2, "mask-type", "alpha"], ["_ngcontent-ng-c2485631207", "", "width", "18", "height", "18", "fill", "white"], ["_ngcontent-ng-c2485631207", "", "mask", "url(#mask0_8942_12501)"], ["_ngcontent-ng-c2485631207", "", "d", "M14.9625 15.75C13.4 15.75 11.8563 15.4094 10.3313 14.7281C8.80625 14.0469 7.41875 13.0813 6.16875 11.8313C4.91875 10.5813 3.95312 9.19375 3.27188 7.66875C2.59063 6.14375 2.25 4.6 2.25 3.0375C2.25 2.8125 2.325 2.625 2.475 2.475C2.625 2.325 2.8125 2.25 3.0375 2.25H6.075C6.25 2.25 6.40625 2.30937 6.54375 2.42812C6.68125 2.54688 6.7625 2.6875 6.7875 2.85L7.275 5.475C7.3 5.675 7.29375 5.84375 7.25625 5.98125C7.21875 6.11875 7.15 6.2375 7.05 6.3375L5.23125 8.175C5.48125 8.6375 5.77812 9.08437 6.12187 9.51562C6.46562 9.94688 6.84375 10.3625 7.25625 10.7625C7.64375 11.15 8.05 11.5094 8.475 11.8406C8.9 12.1719 9.35 12.475 9.825 12.75L11.5875 10.9875C11.7 10.875 11.8469 10.7906 12.0281 10.7344C12.2094 10.6781 12.3875 10.6625 12.5625 10.6875L15.15 11.2125C15.325 11.2625 15.4688 11.3531 15.5812 11.4844C15.6937 11.6156 15.75 11.7625 15.75 11.925V14.9625C15.75 15.1875 15.675 15.375 15.525 15.525C15.375 15.675 15.1875 15.75 14.9625 15.75Z", "fill", "white"], ["href", "tel:+919910659965", 1, "text-white", "text-decoration-none"], [1, "skip-text", "d-flex", "align-items-center", "gap-2", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "25", "height", "24", "viewBox", "0 0 25 24", "fill", "none"], ["id", "mask0_52583_330", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "25", "height", "24", 2, "mask-type", "alpha"], ["x", "0.5", "width", "24", "height", "24", "fill", "#fff"], ["mask", "url(#mask0_52583_330)"], ["d", "M12.5 1L21.55 6.4C21.85 6.58333 22.0833 6.83333 22.25 7.15C22.4167 7.46667 22.5 7.8 22.5 8.15V19C22.5 19.55 22.3042 20.0208 21.9125 20.4125C21.5208 20.8042 21.05 21 20.5 21H4.5C3.95 21 3.47917 20.8042 3.0875 20.4125C2.69583 20.0208 2.5 19.55 2.5 19V8.15C2.5 7.8 2.58333 7.46667 2.75 7.15C2.91667 6.83333 3.15 6.58333 3.45 6.4L12.5 1ZM12.5 12.65L20.3 8L12.5 3.35L4.7 8L12.5 12.65ZM12.5 15L4.5 10.2V19H20.5V10.2L12.5 15Z", "fill", "#1C1B1F"]], template: function AccessibilityHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
        \u0275\u0275element(5, "i", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "a", 6);
        \u0275\u0275element(7, "i", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "h1", 8);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(9, "svg", 9)(10, "mask", 10);
        \u0275\u0275element(11, "rect", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "g", 12);
        \u0275\u0275element(13, "path", 13);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(14, "a", 14);
        \u0275\u0275text(15, " +91\xA09910659965 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "h1", 15);
        \u0275\u0275listener("click", function AccessibilityHeaderComponent_Template_h1_click_16_listener() {
          return ctx.sendMail();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(17, "svg", 16)(18, "mask", 17);
        \u0275\u0275element(19, "rect", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "g", 19);
        \u0275\u0275element(21, "path", 20);
        \u0275\u0275elementEnd()();
        \u0275\u0275text(22, "Contact Help Desk");
        \u0275\u0275elementEnd()()()();
      }
    }, dependencies: [RouterModule], styles: ["\n\n.main-access-header-div[_ngcontent-%COMP%] {\n  background: var(--material-theme-sys-light-on-background, #1F1F1F);\n  padding: 5px 0px;\n}\n.gov-text[_ngcontent-%COMP%] {\n  color: #EBEBEB;\n  font-family: var(--roboto-font);\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n}\n.skip-text[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Roboto;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  margin: 0px;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n}\n.skip-text[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #fff;\n}\n.skip-text[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  text-decoration: underline;\n}\n.screen-reader-div[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.dark-mode[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n}\n.inc-div[_ngcontent-%COMP%] {\n  padding: 8px;\n  transition: all 0.3s ease-in-out;\n  cursor: pointer;\n}\n.inc-div[_ngcontent-%COMP%]:hover {\n  border-radius: 4px;\n  background: rgba(255, 255, 255, 0.15);\n}\n.accessibility-header[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n}\n.language-selector[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  margin-top: 20px;\n}\n.language-selector[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  border: 1px solid #ccc;\n  background: #f1f1f1;\n  cursor: povar(--roboto-font);\n  transition: 0.3s;\n}\n.language-selector[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #ddd;\n}\n.text-content[_ngcontent-%COMP%] {\n  text-align: center;\n  transition: font-size 0.3s;\n}\n.text-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .text-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .text-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .text-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .text-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .text-content[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .text-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .text-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  transition: font-size 0.3s;\n}\n.level-popup[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 40px;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 9999;\n  background: rgba(0, 0, 0, 0.631372549);\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);\n  border-radius: 12px;\n  padding: 30px;\n  transition: opacity 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: _ngcontent-%COMP%_fadeIn 0.5s ease;\n}\n.popup-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.text-icon-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.text-icon-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n}\n.text-icon-container[_ngcontent-%COMP%]   .bigger-text-label[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n  color: var(--primary-white);\n  margin-top: 10px;\n}\n.level-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  margin-top: 10px;\n}\n.level-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 6px;\n  background: var(--brand-color);\n  border-radius: 4px;\n  transition: background 0.3s ease;\n}\n.level-indicator[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%] {\n  background: var(--primary-white);\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateX(-60%);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(-50%);\n  }\n}\n.mirrored[_ngcontent-%COMP%] {\n  transform: scaleX(-1);\n}\n.social-icons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n@media (max-width: 600px) {\n  .social-icons[_ngcontent-%COMP%] {\n    justify-content: start;\n  }\n}\n.social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  background: #ffffff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #000;\n  font-size: 14px;\n  transition: 0.2s;\n  text-decoration: none;\n  opacity: 0.7;\n}\n.social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #ddd;\n  opacity: 1;\n}\n@media screen and (max-width: 768px) {\n  .skip-text[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .screen-reader-div[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .font-inc-dec[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=accessibility-header.component.css.map */"] });
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
function IasLoginComponent_div_10_div_12_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.activeTab === "mobile" ? "Mobile number is required" : "Email is required", " ");
  }
}
function IasLoginComponent_div_10_div_12_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.activeTab === "mobile" ? "Enter valid 10-digit mobile number" : "Enter valid email address", " ");
  }
}
function IasLoginComponent_div_10_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275template(1, IasLoginComponent_div_10_div_12_small_1_Template, 2, 1, "small", 0)(2, IasLoginComponent_div_10_div_12_small_2_Template, 2, 1, "small", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.email == null ? null : ctx_r1.email.errors == null ? null : ctx_r1.email.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.email == null ? null : ctx_r1.email.errors == null ? null : ctx_r1.email.errors["invalidInput"]);
  }
}
function IasLoginComponent_div_10_div_13__svg_svg_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 31)(1, "g", 32);
    \u0275\u0275element(2, "path", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "defs")(4, "clipPath", 34);
    \u0275\u0275element(5, "rect", 35);
    \u0275\u0275elementEnd()()();
  }
}
function IasLoginComponent_div_10_div_13__svg_svg_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 31)(1, "g", 36);
    \u0275\u0275element(2, "path", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "defs")(4, "clipPath", 38);
    \u0275\u0275element(5, "rect", 35);
    \u0275\u0275elementEnd()()();
  }
}
function IasLoginComponent_div_10_div_13_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "small");
    \u0275\u0275text(2, "Password is required.");
    \u0275\u0275elementEnd()();
  }
}
function IasLoginComponent_div_10_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 26);
    \u0275\u0275text(2, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 27);
    \u0275\u0275element(4, "input", 28);
    \u0275\u0275elementStart(5, "button", 29);
    \u0275\u0275listener("click", function IasLoginComponent_div_10_div_13_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.togglePasswordVisibility());
    });
    \u0275\u0275template(6, IasLoginComponent_div_10_div_13__svg_svg_6_Template, 6, 0, "svg", 30)(7, IasLoginComponent_div_10_div_13__svg_svg_7_Template, 6, 0, "svg", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, IasLoginComponent_div_10_div_13_div_8_Template, 3, 0, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("type", ctx_r1.showPassword ? "text" : "password");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.showPassword);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showPassword);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.password == null ? null : ctx_r1.password.touched) && (ctx_r1.password == null ? null : ctx_r1.password.invalid));
  }
}
function IasLoginComponent_div_10_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "a", 21);
    \u0275\u0275text(2, "Forgot Password?");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", "/forget-password");
  }
}
function IasLoginComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "h1");
    \u0275\u0275text(2, "Login to your account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12)(4, "div", 13);
    \u0275\u0275listener("click", function IasLoginComponent_div_10_Template_div_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchTab("email"));
    });
    \u0275\u0275text(5, " Email Login ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 13);
    \u0275\u0275listener("click", function IasLoginComponent_div_10_Template_div_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchTab("mobile"));
    });
    \u0275\u0275text(7, " Mobile Login ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "form", 14);
    \u0275\u0275listener("ngSubmit", function IasLoginComponent_div_10_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(9, "label", 15);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 16);
    \u0275\u0275listener("input", function IasLoginComponent_div_10_Template_input_input_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onInputChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, IasLoginComponent_div_10_div_12_Template, 3, 2, "div", 17)(13, IasLoginComponent_div_10_div_13_Template, 9, 4, "div", 0)(14, IasLoginComponent_div_10_div_14_Template, 3, 1, "div", 18);
    \u0275\u0275elementStart(15, "button", 19);
    \u0275\u0275text(16, " Continue ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 20);
    \u0275\u0275text(18, " Don\u2019t have an account? ");
    \u0275\u0275elementStart(19, "a", 21);
    \u0275\u0275text(20, "Sign up");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 22);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 23);
    \u0275\u0275element(23, "path", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "p");
    \u0275\u0275text(25, " This facility is strictly for serving and retired IAS officers only. Unauthorized access is prohibited. ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "email");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "mobile");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r1.emailForm);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.activeTab === "mobile" ? "Mobile Number" : "Email Address", " ");
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", ctx_r1.activeTab === "mobile" ? "Enter Mobile Number" : "Enter Email Address");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.email == null ? null : ctx_r1.email.touched) && (ctx_r1.email == null ? null : ctx_r1.email.invalid));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isMobileLogin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isMobileLogin);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.activeTab === "email" ? (ctx_r1.email == null ? null : ctx_r1.email.invalid) || (ctx_r1.password == null ? null : ctx_r1.password.invalid) : ctx_r1.email == null ? null : ctx_r1.email.invalid);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", "/signup");
  }
}
function IasLoginComponent_div_11_input_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 48);
    \u0275\u0275listener("input", function IasLoginComponent_div_11_input_7_Template_input_input_0_listener($event) {
      const i_r6 = \u0275\u0275restoreView(_r5).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onOtpInput($event, i_r6));
    })("keydown", function IasLoginComponent_div_11_input_7_Template_input_keydown_0_listener($event) {
      const i_r6 = \u0275\u0275restoreView(_r5).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.handleKeyDown($event, i_r6));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctrl_r7 = ctx.$implicit;
    \u0275\u0275property("formControlName", ctrl_r7);
  }
}
function IasLoginComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "h1");
    \u0275\u0275text(2, "Enter OTP to Verify");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "form", 14);
    \u0275\u0275listener("ngSubmit", function IasLoginComponent_div_11_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitOtp());
    });
    \u0275\u0275elementStart(6, "div", 41);
    \u0275\u0275template(7, IasLoginComponent_div_11_input_7_Template, 1, 1, "input", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 43);
    \u0275\u0275text(9, "Continue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 44)(11, "p", 45);
    \u0275\u0275text(12, "Did not get the OTP?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 46);
    \u0275\u0275listener("click", function IasLoginComponent_div_11_Template_span_click_13_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(!ctx_r1.isResendDisabled && ctx_r1.onResendOtp());
    });
    \u0275\u0275text(14, " Resend OTP ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " in ");
    \u0275\u0275elementStart(16, "span", 47);
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
    \u0275\u0275advance(6);
    \u0275\u0275classProp("disabled", ctx_r1.isResendDisabled);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(18, 6, ctx_r1.countdown * 1e3, "mm:ss", "UTC"));
  }
}
var IasLoginComponent = class _IasLoginComponent {
  constructor(fb, http, router, route, toastService, title, meta) {
    this.fb = fb;
    this.http = http;
    this.router = router;
    this.route = route;
    this.toastService = toastService;
    this.title = title;
    this.meta = meta;
    this.showPassword = false;
    this.isMobileLogin = false;
    this.loading = false;
    this.errorMessage = "";
    this.showOtpStep = false;
    this.otpControls = ["d1", "d2", "d3", "d4", "d5", "d6"];
    this.isResendDisabled = false;
    this.tempToken = "";
    this.toastMessage = "";
    this.toastType = "primary";
    this.activeTab = "email";
    this.emailOrMobileValidator = (control) => {
      const value = control.value?.trim();
      if (!value)
        return { required: true };
      if (this.isMobileLogin) {
        return /^[6-9]\d{9}$/.test(value) ? null : { invalidInput: true };
      } else {
        return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value) ? null : { invalidInput: true };
      }
    };
    this.emailForm = this.fb.group({
      email: ["", [Validators.required, this.emailOrMobileValidator]],
      password: ["", Validators.required]
    });
    this.otpForm = this.fb.group({});
    this.otpControls.forEach((ctrl) => this.otpForm.addControl(ctrl, new FormControl("", [Validators.required, Validators.pattern("[0-9]")])));
  }
  ngOnInit() {
    this.title.setTitle("IASCA Portal - Login");
    this.route.queryParams.subscribe((params) => {
      const token = params["token"];
      const refreshToken = params["refreshToken"];
      const error = params["error"];
      const intent = params["intent"];
      if (token && refreshToken) {
        this.handleSsoCallback(token, refreshToken, intent);
      } else if (error) {
        this.showToast(decodeURIComponent(error), "danger");
      }
    });
  }
  // ✅ TAB SWITCH
  switchTab(tab) {
    this.activeTab = tab;
    this.emailForm.reset();
    if (tab === "mobile") {
      this.isMobileLogin = true;
      this.password?.clearValidators();
      this.password?.setValue("");
    } else {
      this.isMobileLogin = false;
      this.password?.setValidators([Validators.required]);
    }
    this.email?.updateValueAndValidity();
    this.password?.updateValueAndValidity();
  }
  // ✅ MOBILE INPUT CONTROL
  onInputChange(event) {
    let value = event.target.value;
    if (this.activeTab === "mobile") {
      value = value.replace(/[^0-9]/g, "").slice(0, 10);
      this.email?.setValue(value, { emitEvent: false });
    }
  }
  loginWithGoogle() {
    window.location.href = `${environment.apiUrl}/accounts/google/login?intent=login`;
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
  onSubmit() {
    if (this.emailForm.invalid) {
      this.emailForm.markAllAsTouched();
      return;
    }
    this.loading = true;
    const inputValue = this.email?.value?.trim();
    let payload = {};
    if (this.isMobileLogin) {
      payload.mobile = inputValue;
    } else {
      payload.email = inputValue;
      payload.password = this.password?.value;
    }
    this.http.post(`${environment.apiUrl}/accounts/login`, payload).subscribe({
      next: (res) => {
        this.loading = false;
        const token = res?.data?.token;
        if (token) {
          this.tempToken = token;
          this.showOtpStep = true;
          this.startCountdown(59);
          this.showToast("\u2705 Login successful, please verify OTP.", "success");
        }
      },
      error: (err) => {
        this.loading = false;
        this.showToast(err.error?.message || "\u274C Invalid credentials.", "danger");
      }
    });
  }
  // ✅ OTP INPUT HANDLING
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
    if (!/^[0-9]$/.test(event.key))
      event.preventDefault();
  }
  onOtpInput(event, index) {
    const input = event.target;
    if (input.value && index < this.otpControls.length - 1) {
      const next = document.querySelectorAll(".otp-inputs input")[index + 1];
      next?.focus();
    }
  }
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
            localStorage.setItem("isLoggedIn", "true");
            if (email)
              localStorage.setItem("userEmail", btoa(email));
            if (role)
              localStorage.setItem("userRole", btoa(role));
            if (status)
              localStorage.setItem("userStatus", btoa(status));
            this.toastService.showToast("Welcome to IASCA portal", "success");
            this.router.navigate(["homepage"]);
          }
        },
        error: (err) => {
          this.loading = false;
          this.showToast(err.error?.message || "\u274C Invalid OTP.", "danger");
        }
      });
    } else {
      this.otpForm.markAllAsTouched();
    }
  }
  startCountdown(seconds) {
    this.countdown = seconds;
    this.isResendDisabled = true;
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {
      if (this.countdown > 0)
        this.countdown--;
      else {
        this.isResendDisabled = false;
        clearInterval(this.intervalId);
      }
    }, 1e3);
  }
  onResendOtp() {
    if (this.isResendDisabled)
      return;
    this.onSubmit();
  }
  handleSsoCallback(sessionToken, refreshToken, intent) {
    this.loading = true;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${sessionToken}`
    });
    this.http.get(`${environment.apiUrl}/accounts/whoami`, { headers }).subscribe({
      next: (res) => {
        this.loading = false;
        const user = res?.data;
        if (!user) {
          this.showToast("Invalid user data", "danger");
          return;
        }
        localStorage.setItem("authToken", sessionToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("isLoggedIn", "true");
        if (user.email)
          localStorage.setItem("userEmail", btoa(user.email));
        if (user.role)
          localStorage.setItem("userRole", btoa(user.role));
        if (user.status)
          localStorage.setItem("userStatus", btoa(user.status));
        this.toastService.showToast("Welcome to IASCA portal", "success");
        if (intent) {
          this.router.navigate(["homepage"]);
        } else {
          this.router.navigate([intent]);
        }
      },
      error: (err) => {
        this.loading = false;
        console.error(err);
        this.showToast("SSO Login Failed", "danger");
      }
    });
  }
  showToast(message, type = "primary") {
    this.toastMessage = message;
    this.toastType = type;
    const toastEl = document.getElementById("liveToast");
    if (toastEl)
      new bootstrap.Toast(toastEl, { delay: 3e3 }).show();
  }
  static {
    this.\u0275fac = function IasLoginComponent_Factory(t) {
      return new (t || _IasLoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(Meta));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IasLoginComponent, selectors: [["app-ias-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 8, consts: [[4, "ngIf"], [1, "toast-container", "position-fixed", "top-0", "end-0", "p-3"], ["id", "liveToast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true"], [1, "d-flex"], [1, "toast-body"], ["type", "button", "data-bs-dismiss", "toast", "aria-label", "Close", 1, "btn-close", "btn-close-white", "me-2", "m-auto"], [1, "main-login-component", "d-flex", "align-items-center"], [1, "intro-image-div", "position-relative", 2, "cursor", "pointer", 3, "routerLink"], [1, "login-form-div", "d-flex", "flex-column", "align-items-center"], ["class", "inneradjustment", 4, "ngIf"], ["class", "second-step", 4, "ngIf"], [1, "inneradjustment"], [1, "tabs-div", "mt-4"], [1, "formstab", 3, "click"], [3, "ngSubmit", "formGroup"], ["for", "email"], ["type", "text", "id", "email", "formControlName", "email", 3, "input", "placeholder"], ["class", "error-message", 4, "ngIf"], ["class", "forgot", 4, "ngIf"], ["type", "submit", 1, "login-btn", 3, "disabled"], [1, "signup-text"], [3, "routerLink"], [1, "warning-box"], ["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none"], ["d", "M6.33325 10.3333H7.66658V6.33331H6.33325V10.3333ZM6.99992 4.99998C7.18881 4.99998 7.34714 4.93609 7.47492 4.80831C7.6027 4.68053 7.66658 4.5222 7.66658 4.33331C7.66658 4.14442 7.6027 3.98609 7.47492 3.85831C7.34714 3.73054 7.18881 3.66665 6.99992 3.66665C6.81103 3.66665 6.6527 3.73054 6.52492 3.85831C6.39714 3.98609 6.33325 4.14442 6.33325 4.33331C6.33325 4.5222 6.39714 4.68053 6.52492 4.80831C6.6527 4.93609 6.81103 4.99998 6.99992 4.99998ZM6.99992 13.6666C6.0777 13.6666 5.21103 13.4916 4.39992 13.1416C3.58881 12.7916 2.88325 12.3166 2.28325 11.7166C1.68325 11.1166 1.20825 10.4111 0.858252 9.59998C0.508252 8.78887 0.333252 7.9222 0.333252 6.99998C0.333252 6.07776 0.508252 5.21109 0.858252 4.39998C1.20825 3.58887 1.68325 2.88331 2.28325 2.28331C2.88325 1.68331 3.58881 1.20831 4.39992 0.858313C5.21103 0.508313 6.0777 0.333313 6.99992 0.333313C7.92214 0.333313 8.78881 0.508313 9.59992 0.858313C10.411 1.20831 11.1166 1.68331 11.7166 2.28331C12.3166 2.88331 12.7916 3.58887 13.1416 4.39998C13.4916 5.21109 13.6666 6.07776 13.6666 6.99998C13.6666 7.9222 13.4916 8.78887 13.1416 9.59998C12.7916 10.4111 12.3166 11.1166 11.7166 11.7166C11.1166 12.3166 10.411 12.7916 9.59992 13.1416C8.78881 13.4916 7.92214 13.6666 6.99992 13.6666ZM6.99992 12.3333C8.48881 12.3333 9.74992 11.8166 10.7833 10.7833C11.8166 9.74998 12.3333 8.48887 12.3333 6.99998C12.3333 5.51109 11.8166 4.24998 10.7833 3.21665C9.74992 2.18331 8.48881 1.66665 6.99992 1.66665C5.51103 1.66665 4.24992 2.18331 3.21659 3.21665C2.18325 4.24998 1.66659 5.51109 1.66659 6.99998C1.66659 8.48887 2.18325 9.74998 3.21659 10.7833C4.24992 11.8166 5.51103 12.3333 6.99992 12.3333Z", "fill", "#A16800"], [1, "error-message"], ["for", "password"], [1, "password-input"], ["id", "password", "formControlName", "password", "placeholder", "Enter your password", 3, "type"], ["type", "button", 1, "eye-button", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "19", "height", "19", "viewBox", "0 0 19 19", "fill", "none", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "width", "19", "height", "19", "viewBox", "0 0 19 19", "fill", "none"], ["clip-path", "url(#clip0_50828_258)"], ["d", "M9.49996 4.75002C12.5004 4.75002 15.1762 6.43627 16.4825 9.10419C15.1762 11.7721 12.5004 13.4584 9.49996 13.4584C6.49954 13.4584 3.82371 11.7721 2.51746 9.10419C3.82371 6.43627 6.49954 4.75002 9.49996 4.75002ZM9.49996 3.16669C5.54163 3.16669 2.16121 5.62877 0.791626 9.10419C2.16121 12.5796 5.54163 15.0417 9.49996 15.0417C13.4583 15.0417 16.8387 12.5796 18.2083 9.10419C16.8387 5.62877 13.4583 3.16669 9.49996 3.16669ZM9.49996 7.12502C10.5925 7.12502 11.4791 8.01169 11.4791 9.10419C11.4791 10.1967 10.5925 11.0834 9.49996 11.0834C8.40746 11.0834 7.52079 10.1967 7.52079 9.10419C7.52079 8.01169 8.40746 7.12502 9.49996 7.12502ZM9.49996 5.54169C7.53663 5.54169 5.93746 7.14085 5.93746 9.10419C5.93746 11.0675 7.53663 12.6667 9.49996 12.6667C11.4633 12.6667 13.0625 11.0675 13.0625 9.10419C13.0625 7.14085 11.4633 5.54169 9.49996 5.54169Z", "fill", "#A9ACB1"], ["id", "clip0_50828_258"], ["width", "19", "height", "19", "fill", "white"], ["clip-path", "url(#clip0_50828_300)"], ["d", "M9.50008 4.74999C12.5005 4.74999 15.1763 6.43624 16.4826 9.10416C16.0155 10.07 15.3584 10.9012 14.5747 11.5742L15.6909 12.6904C16.7913 11.7167 17.6622 10.4975 18.2084 9.10416C16.8388 5.62874 13.4584 3.16666 9.50008 3.16666C8.49467 3.16666 7.52883 3.32499 6.61841 3.61791L7.92467 4.92416C8.43925 4.82124 8.96175 4.74999 9.50008 4.74999ZM8.653 5.65249L10.2917 7.29124C10.743 7.48916 11.1072 7.85333 11.3051 8.30458L12.9438 9.94333C13.0072 9.67416 13.0547 9.38916 13.0547 9.09624C13.0626 7.13291 11.4634 5.54166 9.50008 5.54166C9.20717 5.54166 8.93008 5.58124 8.653 5.65249ZM1.59133 3.06374L3.713 5.18541C2.42258 6.19874 1.40133 7.54458 0.791748 9.10416C2.16133 12.5796 5.54175 15.0417 9.50008 15.0417C10.7034 15.0417 11.8592 14.8121 12.9201 14.3925L15.6276 17.1L16.7438 15.9837L2.70758 1.93958L1.59133 3.06374ZM7.52883 9.00124L9.59508 11.0675C9.56342 11.0754 9.53175 11.0833 9.50008 11.0833C8.40758 11.0833 7.52092 10.1967 7.52092 9.10416C7.52092 9.06458 7.52883 9.04083 7.52883 9.00124ZM4.83717 6.30958L6.22258 7.69499C6.0405 8.13041 5.93758 8.60541 5.93758 9.10416C5.93758 11.0675 7.53675 12.6667 9.50008 12.6667C9.99883 12.6667 10.4738 12.5637 10.9013 12.3817L11.6772 13.1575C10.9805 13.3475 10.2522 13.4583 9.50008 13.4583C6.49967 13.4583 3.82383 11.7721 2.51758 9.10416C3.07175 7.97208 3.87925 7.03791 4.83717 6.30958Z", "fill", "#222222"], ["id", "clip0_50828_300"], [1, "forgot"], [1, "second-step"], [1, "otp-inputs"], ["type", "text", "maxlength", "1", 3, "formControlName", "input", "keydown", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "login-btn"], [1, "d-flex", "align-items-center", "gap-2", "mt-2"], [1, "m-0"], [1, "resend-text", 3, "click"], [1, "timer", "m-0"], ["type", "text", "maxlength", "1", 3, "input", "keydown", "formControlName"]], template: function IasLoginComponent_Template(rf, ctx) {
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
        \u0275\u0275template(10, IasLoginComponent_div_10_Template, 26, 12, "div", 9)(11, IasLoginComponent_div_11_Template, 19, 10, "div", 10);
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
    ], styles: ['@charset "UTF-8";\n\n\n\n.main-login-component[_ngcontent-%COMP%] {\n  height: 100%;\n  min-height: 100vh;\n}\n.intro-image-div[_ngcontent-%COMP%] {\n  border-radius: 0px 20px 20px 0px;\n  background: var(--new, linear-gradient(130deg, #492FB2 -1.74%, #ADADAD 108.02%));\n  background-image: url("./media/new-banner.png");\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100vh;\n  width: 40%;\n}\n.tabs-div[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n.tabs-div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n  padding: 10px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 14px;\n  border: 1px solid #ccc;\n  background: #fff;\n  color: #222;\n  transition: 0.3s all ease-in-out;\n}\n.tabs-div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover {\n  background: #3c3c3c;\n  color: #fff;\n}\n.tabs-div[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background: #222;\n  color: #fff;\n  border-color: #222;\n}\n.tabs-div[_ngcontent-%COMP%]   .googletab[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n}\n.tabs-div[_ngcontent-%COMP%]   .googletab[_ngcontent-%COMP%]:hover {\n  background: #eaeaea;\n  color: #222;\n}\n.login-form-div[_ngcontent-%COMP%] {\n  width: 60%;\n  padding: 20px;\n}\n.login-form-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: Urbanist;\n  font-size: 40px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 130%;\n  background: var(--2, linear-gradient(90deg, #222 0%, #424242 100%));\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.inneradjustment[_ngcontent-%COMP%], .second-step[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 500px;\n}\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-top: 32px;\n}\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--Text-Dark, #212121);\n  font-family: Urbanist;\n  font-size: var(--Font-Size-2, 14px);\n  font-style: normal;\n  font-weight: 500;\n  line-height: var(--Line-Heights-10, 20px);\n  letter-spacing: var(--Letter-Spacing-2, 0.1px);\n  margin-bottom: 4px;\n}\nform[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], form[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%], form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  padding: 12px;\n  border-radius: 8px;\n  border: 1px solid #ccc;\n  font-size: 14px;\n  width: 100%;\n  box-sizing: border-box;\n}\nform[_ngcontent-%COMP%]   .password-input[_ngcontent-%COMP%] {\n  position: relative;\n}\nform[_ngcontent-%COMP%]   .password-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-right: 40px;\n}\nform[_ngcontent-%COMP%]   .password-input[_ngcontent-%COMP%]   .eye-button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n}\nform[_ngcontent-%COMP%]   .password-input[_ngcontent-%COMP%]   .eye-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n}\nform[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-top: -8px;\n}\nform[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #3b27b9;\n  font-size: 14px;\n  text-decoration: none;\n}\nform[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid;\n  background: #222;\n  color: var(--Text-Light, #FFF);\n  text-align: center;\n  font-family: Urbanist;\n  font-size: var(--Font-Size-3, 16px);\n  font-style: normal;\n  font-weight: 500;\n  line-height: var(--Line-Heights-9, 24px);\n  letter-spacing: var(--Letter-Spacing-1, 0.15px);\n  padding: 12px;\n}\nform[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: red;\n}\nform[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]:disabled {\n  padding: 12px;\n  border: none;\n  border-radius: 8px;\n  background-color: #a0a0a0 !important;\n  color: #fff;\n  font-size: 16px;\n  cursor: not-allowed;\n}\nform[_ngcontent-%COMP%]   .signup-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: center;\n}\nform[_ngcontent-%COMP%]   .signup-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #3b27b9;\n  text-decoration: none;\n  font-weight: 500;\n}\nform[_ngcontent-%COMP%]   .warning-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background-color: #fff4db;\n  border-radius: 8px;\n  padding: 12px;\n  gap: 8px;\n  color: #333;\n}\nform[_ngcontent-%COMP%]   .warning-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #A16800;\n  font-family: Urbanist;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 18px;\n  margin: 0;\n}\n.second-step[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: Urbanist;\n  font-size: 40px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 130%;\n  background: var(--2, linear-gradient(90deg, #222 0%, #424242 100%));\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.second-step[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--Neutral-700, #7E838B);\n  font-family: Inter;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n}\n.otp-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.otp-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin: 20px 0;\n}\n.otp-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  font-size: 1.5rem;\n  text-align: center;\n  border: 2px solid #ccc;\n  border-radius: 8px;\n  outline: none;\n  transition: border-color 0.2s;\n}\n.otp-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: black;\n}\n.password-strength[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  font-weight: 600;\n  font-size: 0.85rem;\n  text-transform: uppercase;\n}\n.password-strength.poor[_ngcontent-%COMP%] {\n  color: red;\n}\n.password-strength.good[_ngcontent-%COMP%] {\n  color: #b8860b;\n}\n.password-strength.best[_ngcontent-%COMP%] {\n  color: green;\n}\n.resend-text[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #715CC3;\n  text-decoration: underline;\n  font-weight: 600;\n}\n.resend-text.disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n  color: #aaa;\n}\n.timer[_ngcontent-%COMP%] {\n  color: #492FB2;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n}\n@media (max-width: 1240px) {\n  .login-form-div[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .intro-image-div[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 1056px) {\n  .intro-image-div[_ngcontent-%COMP%] {\n    background-image: url("./media/mobile-bg.png");\n  }\n  .main-login-component[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .intro-image-div[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 500px;\n  }\n  .login-form-div[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 40px 20px;\n    height: 400px;\n  }\n  .login-form-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n}\n@media (max-width: 768px) {\n  .intro-image-div[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 520px;\n    border-radius: 0 0 20px 20px;\n    background-position: top;\n  }\n  .login-form-div[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 30px 20px;\n  }\n  .login-form-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 28px;\n    line-height: 120%;\n    text-align: center;\n  }\n  form[_ngcontent-%COMP%] {\n    margin-top: 32px;\n    gap: 12px;\n  }\n  form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], form[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%], form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n    padding: 10px;\n    font-size: 14px;\n  }\n  .login-btn[_ngcontent-%COMP%] {\n    font-size: 15px;\n    padding: 10px;\n  }\n  .signup-text[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .warning-box[_ngcontent-%COMP%] {\n    padding: 10px;\n    font-size: 12px;\n    align-items: flex-start;\n  }\n  .warning-box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n    margin-top: 2px;\n  }\n  .tabs-div[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 10px;\n    margin-bottom: 20px;\n  }\n  .tabs-div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n@media (max-width: 480px) {\n  .intro-image-div[_ngcontent-%COMP%] {\n    height: 520px;\n    border-radius: 0;\n  }\n  .login-form-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .otp-inputs[_ngcontent-%COMP%] {\n    gap: 6px;\n  }\n  .otp-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 42px;\n    height: 42px;\n    font-size: 1.2rem;\n  }\n  .login-btn[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 8px;\n  }\n}\n@media only screen and (min-device-width: 1366px) and (max-device-width: 1366px) and (min-device-height: 1024px) and (max-device-height: 1024px) and (-webkit-min-device-pixel-ratio: 2) {\n  .intro-image-div[_ngcontent-%COMP%] {\n    border-radius: 0px 20px 20px 0px;\n    background: var(--new, linear-gradient(130deg, #492FB2 -1.74%, #ADADAD 108.02%));\n    background-image: url("./media/new-banner.png");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: left;\n    height: 100vh;\n    width: 80%;\n  }\n}\n/*# sourceMappingURL=ias-login.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IasLoginComponent, { className: "IasLoginComponent", filePath: "src/app/authmodule/ias-login/ias-login.component.ts", lineNumber: 36 });
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
    \u0275\u0275text(4, "Reset your password securely using your registered email ID. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "form", 13);
    \u0275\u0275listener("ngSubmit", function IasForgotpasswordComponent_div_8_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitEmail());
    });
    \u0275\u0275elementStart(6, "label", 14);
    \u0275\u0275text(7, "Registered Email ID");
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
    \u0275\u0275elementStart(0, "input", 29);
    \u0275\u0275listener("input", function IasForgotpasswordComponent_div_9_input_7_Template_input_input_0_listener($event) {
      const i_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onOtpInput($event, i_r5));
    })("keydown", function IasForgotpasswordComponent_div_9_input_7_Template_input_keydown_0_listener($event) {
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
    \u0275\u0275elementStart(8, "button", 24);
    \u0275\u0275text(9, "Continue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 25)(11, "p", 26);
    \u0275\u0275text(12, "Did not get the OTP?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 27);
    \u0275\u0275listener("click", function IasForgotpasswordComponent_div_9_Template_span_click_13_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(!ctx_r1.isResendDisabled && ctx_r1.onResendOtp());
    });
    \u0275\u0275text(14, " Resend OTP ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " in ");
    \u0275\u0275elementStart(16, "span", 28);
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
function IasForgotpasswordComponent_div_10__svg_svg_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 38)(1, "g", 39);
    \u0275\u0275element(2, "path", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "defs")(4, "clipPath", 41);
    \u0275\u0275element(5, "rect", 42);
    \u0275\u0275elementEnd()()();
  }
}
function IasForgotpasswordComponent_div_10__svg_svg_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 38)(1, "g", 43);
    \u0275\u0275element(2, "path", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "defs")(4, "clipPath", 45);
    \u0275\u0275element(5, "rect", 42);
    \u0275\u0275elementEnd()()();
  }
}
function IasForgotpasswordComponent_div_10_div_11_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function IasForgotpasswordComponent_div_10_div_11_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Must be at least 8 characters");
    \u0275\u0275elementEnd();
  }
}
function IasForgotpasswordComponent_div_10_div_11_small_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Must include uppercase, lowercase, number & special character ");
    \u0275\u0275elementEnd();
  }
}
function IasForgotpasswordComponent_div_10_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275template(1, IasForgotpasswordComponent_div_10_div_11_small_1_Template, 2, 0, "small", 20)(2, IasForgotpasswordComponent_div_10_div_11_small_2_Template, 2, 0, "small", 20)(3, IasForgotpasswordComponent_div_10_div_11_small_3_Template, 2, 0, "small", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r1.passwordForm.get("newPassword")) == null ? null : tmp_2_0.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r1.passwordForm.get("newPassword")) == null ? null : tmp_3_0.hasError("minlength"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r1.passwordForm.get("newPassword")) == null ? null : tmp_4_0.hasError("pattern"));
  }
}
function IasForgotpasswordComponent_div_10__svg_svg_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 38)(1, "g", 39);
    \u0275\u0275element(2, "path", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "defs")(4, "clipPath", 41);
    \u0275\u0275element(5, "rect", 42);
    \u0275\u0275elementEnd()()();
  }
}
function IasForgotpasswordComponent_div_10__svg_svg_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 38)(1, "g", 43);
    \u0275\u0275element(2, "path", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "defs")(4, "clipPath", 45);
    \u0275\u0275element(5, "rect", 42);
    \u0275\u0275elementEnd()()();
  }
}
function IasForgotpasswordComponent_div_10_div_19_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Confirm Password is required");
    \u0275\u0275elementEnd();
  }
}
function IasForgotpasswordComponent_div_10_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275template(1, IasForgotpasswordComponent_div_10_div_19_small_1_Template, 2, 0, "small", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r1.passwordForm.get("confirmPassword")) == null ? null : tmp_2_0.hasError("required"));
  }
}
function IasForgotpasswordComponent_div_10_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "small");
    \u0275\u0275text(2, "Passwords do not match");
    \u0275\u0275elementEnd()();
  }
}
function IasForgotpasswordComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "h1");
    \u0275\u0275text(2, "Reset Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 13);
    \u0275\u0275listener("ngSubmit", function IasForgotpasswordComponent_div_10_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitPassword());
    });
    \u0275\u0275elementStart(4, "label", 31);
    \u0275\u0275text(5, "New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 32);
    \u0275\u0275element(7, "input", 33);
    \u0275\u0275elementStart(8, "button", 34);
    \u0275\u0275listener("click", function IasForgotpasswordComponent_div_10_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.togglePassword("new"));
    });
    \u0275\u0275template(9, IasForgotpasswordComponent_div_10__svg_svg_9_Template, 6, 0, "svg", 35)(10, IasForgotpasswordComponent_div_10__svg_svg_10_Template, 6, 0, "svg", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, IasForgotpasswordComponent_div_10_div_11_Template, 4, 3, "div", 16);
    \u0275\u0275elementStart(12, "label", 36);
    \u0275\u0275text(13, "Confirm Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 32);
    \u0275\u0275element(15, "input", 37);
    \u0275\u0275elementStart(16, "button", 34);
    \u0275\u0275listener("click", function IasForgotpasswordComponent_div_10_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.togglePassword("confirm"));
    });
    \u0275\u0275template(17, IasForgotpasswordComponent_div_10__svg_svg_17_Template, 6, 0, "svg", 35)(18, IasForgotpasswordComponent_div_10__svg_svg_18_Template, 6, 0, "svg", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, IasForgotpasswordComponent_div_10_div_19_Template, 2, 1, "div", 16)(20, IasForgotpasswordComponent_div_10_div_20_Template, 3, 0, "div", 16);
    \u0275\u0275elementStart(21, "button", 24);
    \u0275\u0275text(22, "Reset password");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_9_0;
    let tmp_10_0;
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
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r1.passwordForm.get("newPassword")) == null ? null : tmp_5_0.touched) && ((tmp_5_0 = ctx_r1.passwordForm.get("newPassword")) == null ? null : tmp_5_0.errors));
    \u0275\u0275advance(4);
    \u0275\u0275property("type", ctx_r1.showConfirmPassword ? "text" : "password");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.showConfirmPassword);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showConfirmPassword);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_9_0 = ctx_r1.passwordForm.get("confirmPassword")) == null ? null : tmp_9_0.touched) && ((tmp_9_0 = ctx_r1.passwordForm.get("confirmPassword")) == null ? null : tmp_9_0.errors));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.passwordForm.errors == null ? null : ctx_r1.passwordForm.errors["passwordMismatch"]) && ((tmp_10_0 = ctx_r1.passwordForm.get("confirmPassword")) == null ? null : tmp_10_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.passwordForm.invalid);
  }
}
function IasForgotpasswordComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 47);
    \u0275\u0275element(2, "circle", 48)(3, "circle", 49)(4, "circle", 50)(5, "path", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h1", 52);
    \u0275\u0275text(7, "Your password has been successfully reset.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h4", 53);
    \u0275\u0275text(9, "You can now login using your registered email Id and new password.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 54);
    \u0275\u0275text(11, "Return to Login");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(10);
    \u0275\u0275property("routerLink", "");
  }
}
var IasForgotpasswordComponent = class _IasForgotpasswordComponent {
  constructor(fb, http) {
    this.fb = fb;
    this.http = http;
    this.currentStep = 1;
    this.otpControls = ["d1", "d2", "d3", "d4", "d5", "d6"];
    this.showNewPassword = false;
    this.showConfirmPassword = false;
    this.isResendDisabled = false;
    this.emailForm = this.fb.group({
      email: ["", [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/)]]
    });
    const otpGroup = {};
    this.otpControls.forEach((ctrl) => {
      otpGroup[ctrl] = ["", Validators.required];
    });
    this.otpForm = this.fb.group(otpGroup);
    this.passwordForm = this.fb.group({
      newPassword: ["", [Validators.required, Validators.minLength(6), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/)]],
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
            this.startCountdown(59);
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
    this.submitEmail();
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
  submitOtp() {
    if (this.otpForm.valid) {
      const otp = this.otpControls.map((ctrl) => this.otpForm.get(ctrl)?.value).join("");
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IasForgotpasswordComponent, selectors: [["app-ias-forgotpassword"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 5, consts: [[1, "toast-container", "position-fixed", "top-0", "end-0", "p-3", 2, "z-index", "1100"], ["id", "appToast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "align-items-center", "border-0"], [1, "d-flex"], ["id", "toastMessage", 1, "toast-body"], ["type", "button", "data-bs-dismiss", "toast", "aria-label", "Close", 1, "btn-close", "me-2", "m-auto"], [1, "main-login-component", "d-flex", "align-items-center"], [1, "intro-image-div", "position-relative", 3, "routerLink"], [1, "login-form-div", "d-flex", "flex-column", "align-items-center", "px-5"], ["class", "first-step w-75", 4, "ngIf"], ["class", "second-step w-75", 4, "ngIf"], ["class", "third-step w-75", 4, "ngIf"], ["class", "fourth-step w-75", 4, "ngIf"], [1, "first-step", "w-75"], [3, "ngSubmit", "formGroup"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "Enter Valid Email Id"], ["class", "error-message", 4, "ngIf"], ["type", "submit", 1, "login-btn"], [1, "warning-box"], [1, "error-message"], [4, "ngIf"], [1, "second-step", "w-75"], [1, "otp-inputs"], ["type", "text", "maxlength", "1", "autocomplete", "off", 3, "formControlName", "input", "keydown", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "login-btn", 3, "disabled"], [1, "d-flex", "align-items-center", "gap-2", "mt-2"], [1, "m-0"], [1, "resend-text", 3, "click"], [1, "timer", "m-0"], ["type", "text", "maxlength", "1", "autocomplete", "off", 3, "input", "keydown", "formControlName"], [1, "third-step", "w-75"], ["for", "newPassword"], [1, "password-wrapper"], ["id", "newPassword", "formControlName", "newPassword", 3, "type"], ["type", "button", 1, "eye-btn", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "19", "height", "19", "viewBox", "0 0 19 19", "fill", "none", 4, "ngIf"], ["for", "confirmPassword"], ["id", "confirmPassword", "formControlName", "confirmPassword", 3, "type"], ["xmlns", "http://www.w3.org/2000/svg", "width", "19", "height", "19", "viewBox", "0 0 19 19", "fill", "none"], ["clip-path", "url(#clip0_50828_258)"], ["d", "M9.49996 4.75002C12.5004 4.75002 15.1762 6.43627 16.4825 9.10419C15.1762 11.7721 12.5004 13.4584 9.49996 13.4584C6.49954 13.4584 3.82371 11.7721 2.51746 9.10419C3.82371 6.43627 6.49954 4.75002 9.49996 4.75002ZM9.49996 3.16669C5.54163 3.16669 2.16121 5.62877 0.791626 9.10419C2.16121 12.5796 5.54163 15.0417 9.49996 15.0417C13.4583 15.0417 16.8387 12.5796 18.2083 9.10419C16.8387 5.62877 13.4583 3.16669 9.49996 3.16669ZM9.49996 7.12502C10.5925 7.12502 11.4791 8.01169 11.4791 9.10419C11.4791 10.1967 10.5925 11.0834 9.49996 11.0834C8.40746 11.0834 7.52079 10.1967 7.52079 9.10419C7.52079 8.01169 8.40746 7.12502 9.49996 7.12502ZM9.49996 5.54169C7.53663 5.54169 5.93746 7.14085 5.93746 9.10419C5.93746 11.0675 7.53663 12.6667 9.49996 12.6667C11.4633 12.6667 13.0625 11.0675 13.0625 9.10419C13.0625 7.14085 11.4633 5.54169 9.49996 5.54169Z", "fill", "#A9ACB1"], ["id", "clip0_50828_258"], ["width", "19", "height", "19", "fill", "white"], ["clip-path", "url(#clip0_50828_300)"], ["d", "M9.50008 4.74999C12.5005 4.74999 15.1763 6.43624 16.4826 9.10416C16.0155 10.07 15.3584 10.9012 14.5747 11.5742L15.6909 12.6904C16.7913 11.7167 17.6622 10.4975 18.2084 9.10416C16.8388 5.62874 13.4584 3.16666 9.50008 3.16666C8.49467 3.16666 7.52883 3.32499 6.61841 3.61791L7.92467 4.92416C8.43925 4.82124 8.96175 4.74999 9.50008 4.74999ZM8.653 5.65249L10.2917 7.29124C10.743 7.48916 11.1072 7.85333 11.3051 8.30458L12.9438 9.94333C13.0072 9.67416 13.0547 9.38916 13.0547 9.09624C13.0626 7.13291 11.4634 5.54166 9.50008 5.54166C9.20717 5.54166 8.93008 5.58124 8.653 5.65249ZM1.59133 3.06374L3.713 5.18541C2.42258 6.19874 1.40133 7.54458 0.791748 9.10416C2.16133 12.5796 5.54175 15.0417 9.50008 15.0417C10.7034 15.0417 11.8592 14.8121 12.9201 14.3925L15.6276 17.1L16.7438 15.9837L2.70758 1.93958L1.59133 3.06374ZM7.52883 9.00124L9.59508 11.0675C9.56342 11.0754 9.53175 11.0833 9.50008 11.0833C8.40758 11.0833 7.52092 10.1967 7.52092 9.10416C7.52092 9.06458 7.52883 9.04083 7.52883 9.00124ZM4.83717 6.30958L6.22258 7.69499C6.0405 8.13041 5.93758 8.60541 5.93758 9.10416C5.93758 11.0675 7.53675 12.6667 9.50008 12.6667C9.99883 12.6667 10.4738 12.5637 10.9013 12.3817L11.6772 13.1575C10.9805 13.3475 10.2522 13.4583 9.50008 13.4583C6.49967 13.4583 3.82383 11.7721 2.51758 9.10416C3.07175 7.97208 3.87925 7.03791 4.83717 6.30958Z", "fill", "#222222"], ["id", "clip0_50828_300"], [1, "fourth-step", "w-75"], ["xmlns", "http://www.w3.org/2000/svg", "width", "100", "height", "100", "viewBox", "0 0 100 100", "fill", "none"], ["cx", "50", "cy", "50", "r", "50", "fill", "#4B9700", "fill-opacity", "0.3"], ["cx", "50", "cy", "50", "r", "45", "fill", "#4B9700", "fill-opacity", "0.3"], ["cx", "49.5", "cy", "49.5", "r", "39.5", "fill", "#4B9700"], ["d", "M30 51.5L40.2267 62.1713C40.9464 62.9223 42.1216 62.9963 42.9298 62.3414L70.5 40", "stroke", "white", "stroke-width", "5", "stroke-linecap", "round"], [1, "mt-3"], [1, "my-4"], ["type", "button", 1, "login-btn", 3, "routerLink"]], template: function IasForgotpasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275element(3, "div", 3)(4, "button", 4);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(5, "div", 5);
        \u0275\u0275element(6, "div", 6);
        \u0275\u0275elementStart(7, "div", 7);
        \u0275\u0275template(8, IasForgotpasswordComponent_div_8_Template, 15, 2, "div", 8)(9, IasForgotpasswordComponent_div_9_Template, 19, 11, "div", 9)(10, IasForgotpasswordComponent_div_10_Template, 23, 11, "div", 10)(11, IasForgotpasswordComponent_div_11_Template, 12, 1, "div", 11);
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
    }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName, RouterModule, RouterLink], styles: ['\n\n.main-login-component[_ngcontent-%COMP%] {\n  height: 100%;\n  min-height: 100vh;\n}\n.intro-image-div[_ngcontent-%COMP%] {\n  border-radius: 0px 20px 20px 0px;\n  background: var(--new, linear-gradient(130deg, #492fb2 -1.74%, #adadad 108.02%));\n  background-image: url("./media/new-banner.png");\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100vh;\n  width: 40%;\n}\n.login-form-div[_ngcontent-%COMP%] {\n  width: 60%;\n}\n.login-form-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: Urbanist;\n  font-size: 40px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 130%;\n  background: var(--2, linear-gradient(90deg, #222 0%, #424242 100%));\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.login-form-div[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--Neutral-700, #7e838b);\n  font-family: Urbanist;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  margin: 0;\n}\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-top: 20px;\n}\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--Text-Dark, #212121);\n  font-family: Urbanist;\n  font-size: var(--Font-Size-2, 14px);\n  font-style: normal;\n  font-weight: 500;\n  line-height: var(--Line-Heights-10, 20px);\n  letter-spacing: var(--Letter-Spacing-2, 0.1px);\n  margin-bottom: 4px;\n}\nform[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], form[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%], form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  padding: 12px;\n  border-radius: 8px;\n  border: 1px solid #ccc;\n  font-size: 14px;\n  width: 100%;\n  box-sizing: border-box;\n}\nform[_ngcontent-%COMP%]   .password-input[_ngcontent-%COMP%] {\n  position: relative;\n}\nform[_ngcontent-%COMP%]   .password-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-right: 40px;\n}\nform[_ngcontent-%COMP%]   .password-input[_ngcontent-%COMP%]   .eye-button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n}\nform[_ngcontent-%COMP%]   .password-input[_ngcontent-%COMP%]   .eye-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n}\nform[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-top: -8px;\n}\nform[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #3b27b9;\n  font-size: 14px;\n  text-decoration: none;\n}\nform[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid;\n  background: #222;\n  color: var(--Text-Light, #fff);\n  text-align: center;\n  font-family: Urbanist;\n  font-size: var(--Font-Size-3, 16px);\n  font-style: normal;\n  font-weight: 500;\n  line-height: var(--Line-Heights-9, 24px);\n  letter-spacing: var(--Letter-Spacing-1, 0.15px);\n  padding: 12px;\n}\nform[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: red;\n}\nform[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]:disabled {\n  padding: 12px;\n  border: none;\n  border-radius: 8px;\n  background-color: #a0a0a0 !important;\n  color: #fff;\n  font-size: 16px;\n  cursor: not-allowed;\n}\nform[_ngcontent-%COMP%]   .signup-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: center;\n}\nform[_ngcontent-%COMP%]   .signup-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #3b27b9;\n  text-decoration: none;\n  font-weight: 500;\n}\nform[_ngcontent-%COMP%]   .warning-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background-color: #fff4db;\n  border-radius: 8px;\n  padding: 12px;\n  gap: 8px;\n  color: #333;\n}\nform[_ngcontent-%COMP%]   .warning-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #a16800;\n  font-family: Urbanist;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 18px;\n  margin: 0;\n}\n.otp-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.otp-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin: 20px 0;\n}\n.otp-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  font-size: 1.5rem;\n  text-align: center;\n  border: 2px solid #ccc;\n  border-radius: 8px;\n  outline: none;\n  transition: border-color 0.2s;\n}\n.otp-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: black;\n}\n.resend-text[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #715CC3;\n  text-decoration: underline;\n  font-weight: 600;\n}\n.resend-text.disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n  color: #aaa;\n}\n.login-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  background: black;\n  color: white;\n  padding: 10px;\n  border: none;\n  font-size: 1rem;\n  border-radius: 8px;\n  cursor: pointer;\n}\n.timer[_ngcontent-%COMP%] {\n  color: #3366ff;\n}\n.password-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.password-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-right: 40px;\n}\n.eye-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  background: none;\n  border: none;\n  font-size: 1.2rem;\n  cursor: pointer;\n}\n@media (max-width: 991px) {\n  .main-login-component[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .intro-image-div[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 60vh;\n    border-radius: 0 0 20px 20px;\n  }\n  .login-form-div[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 30px 0px !important;\n  }\n  .login-form-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n  .login-form-div[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  form[_ngcontent-%COMP%] {\n    gap: 12px;\n  }\n  .otp-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    font-size: 1.2rem;\n  }\n}\n@media (max-width: 576px) {\n  .intro-image-div[_ngcontent-%COMP%] {\n    height: 60vh;\n    border-radius: 0 0 15px 15px;\n  }\n  .login-form-div[_ngcontent-%COMP%] {\n    padding: 20px 0px !important;\n  }\n  .login-form-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 26px;\n    text-align: center;\n  }\n  .login-form-div[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 13px;\n    text-align: center;\n  }\n  input[type=email][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%] {\n    padding: 10px;\n    font-size: 13px;\n  }\n  .login-btn[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 10px;\n  }\n  .otp-inputs[_ngcontent-%COMP%] {\n    gap: 6px;\n  }\n  .otp-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n    font-size: 1rem;\n  }\n  .warning-box[_ngcontent-%COMP%] {\n    font-size: 11px;\n    padding: 10px;\n  }\n  .password-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    padding-right: 35px;\n  }\n  .eye-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 16px;\n    height: 16px;\n  }\n}\n/*# sourceMappingURL=ias-forgotpassword.component.css.map */'] });
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
function IasSignupComponent_image_cropper_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "image-cropper", 22);
    \u0275\u0275listener("imageCropped", function IasSignupComponent_image_cropper_16_Template_image_cropper_imageCropped_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.imageCropped($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("imageChangedEvent", ctx_r1.imageChangedEvent)("maintainAspectRatio", true)("aspectRatio", 1 / 1)("resizeToWidth", 200)("roundCropper", true)("backgroundColor", "rgba(0,0,0,0.6)");
  }
}
function IasSignupComponent_div_25_div_7_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Email or mobile number is required. ");
    \u0275\u0275elementEnd();
  }
}
function IasSignupComponent_div_25_div_7_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Enter a valid email or mobile number. ");
    \u0275\u0275elementEnd();
  }
}
function IasSignupComponent_div_25_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275template(1, IasSignupComponent_div_25_div_7_small_1_Template, 2, 0, "small", 0)(2, IasSignupComponent_div_25_div_7_small_2_Template, 2, 0, "small", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r1.emailForm.get("email")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r1.emailForm.get("email")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["invalidContact"]);
  }
}
function IasSignupComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "h1", 24);
    \u0275\u0275text(2, "Create Account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 25);
    \u0275\u0275listener("ngSubmit", function IasSignupComponent_div_25_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitEmail());
    });
    \u0275\u0275elementStart(4, "label", 26);
    \u0275\u0275text(5, "Email ID or Mobile Number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 27);
    \u0275\u0275template(7, IasSignupComponent_div_25_div_7_Template, 3, 2, "div", 28);
    \u0275\u0275elementStart(8, "button", 29);
    \u0275\u0275text(9, "Sign up");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 30)(11, "span");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 31);
    \u0275\u0275element(13, "path", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "p");
    \u0275\u0275text(15, " This facility is strictly for serving and retired IAS officers only. Unauthorized access is prohibited. ");
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
function IasSignupComponent_div_26_input_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 41);
    \u0275\u0275listener("input", function IasSignupComponent_div_26_input_7_Template_input_input_0_listener($event) {
      const i_r6 = \u0275\u0275restoreView(_r5).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onOtpInput($event, i_r6));
    })("keydown", function IasSignupComponent_div_26_input_7_Template_input_keydown_0_listener($event) {
      const i_r6 = \u0275\u0275restoreView(_r5).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.handleKeyDown($event, i_r6));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctrl_r7 = ctx.$implicit;
    \u0275\u0275property("formControlName", ctrl_r7);
  }
}
function IasSignupComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "h1");
    \u0275\u0275text(2, "Enter OTP to Verify");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "form", 25);
    \u0275\u0275listener("ngSubmit", function IasSignupComponent_div_26_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitOtp());
    });
    \u0275\u0275elementStart(6, "div", 34);
    \u0275\u0275template(7, IasSignupComponent_div_26_input_7_Template, 1, 1, "input", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 36);
    \u0275\u0275text(9, "Continue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 37)(11, "p", 38);
    \u0275\u0275text(12, "Did not get the OTP?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 39);
    \u0275\u0275listener("click", function IasSignupComponent_div_26_Template_span_click_13_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(!ctx_r1.isResendDisabled && ctx_r1.onResendOtp());
    });
    \u0275\u0275text(14, " Resend OTP ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " in ");
    \u0275\u0275elementStart(16, "span", 40);
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
function IasSignupComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "h1", 24);
    \u0275\u0275text(2, "Sign up your account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 42);
    \u0275\u0275listener("click", function IasSignupComponent_div_27_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.currentStep = 4);
    });
    \u0275\u0275text(4, "Get Details from DoPT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 43);
    \u0275\u0275text(6, "or");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 44);
    \u0275\u0275listener("click", function IasSignupComponent_div_27_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.currentStep = 5);
    });
    \u0275\u0275text(8, "Fill Details Manually");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 43);
    \u0275\u0275text(10, "or");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 44);
    \u0275\u0275listener("click", function IasSignupComponent_div_27_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.currentStep = 6);
    });
    \u0275\u0275text(12, "Retired Member Signup");
    \u0275\u0275elementEnd()();
  }
}
function IasSignupComponent_div_28_div_13_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Only letters are allowed. ");
    \u0275\u0275elementEnd();
  }
}
function IasSignupComponent_div_28_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275template(1, IasSignupComponent_div_28_div_13_small_1_Template, 2, 0, "small", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r1.memberidForm.get("name")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["pattern"]);
  }
}
function IasSignupComponent_div_28_div_19_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Identity Number is required. ");
    \u0275\u0275elementEnd();
  }
}
function IasSignupComponent_div_28_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275template(1, IasSignupComponent_div_28_div_19_small_1_Template, 2, 0, "small", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r1.memberidForm.get("identityNumber")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
  }
}
function IasSignupComponent_div_28_div_21_div_6_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Mobile number required ");
    \u0275\u0275elementEnd();
  }
}
function IasSignupComponent_div_28_div_21_div_6_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Enter valid mobile number ");
    \u0275\u0275elementEnd();
  }
}
function IasSignupComponent_div_28_div_21_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275template(1, IasSignupComponent_div_28_div_21_div_6_small_1_Template, 2, 0, "small", 0)(2, IasSignupComponent_div_28_div_21_div_6_small_2_Template, 2, 0, "small", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r1.memberidForm.get("mobilenumber")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r1.memberidForm.get("mobilenumber")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["pattern"]);
  }
}
function IasSignupComponent_div_28_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "label", 58);
    \u0275\u0275text(2, " Mobile Number ");
    \u0275\u0275elementStart(3, "span", 48);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "input", 59);
    \u0275\u0275template(6, IasSignupComponent_div_28_div_21_div_6_Template, 3, 2, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx_r1.memberidForm.get("mobilenumber")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx_r1.memberidForm.get("mobilenumber")) == null ? null : tmp_2_0.invalid));
  }
}
function IasSignupComponent_div_28_div_22_div_6_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Email required ");
    \u0275\u0275elementEnd();
  }
}
function IasSignupComponent_div_28_div_22_div_6_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Enter valid email ");
    \u0275\u0275elementEnd();
  }
}
function IasSignupComponent_div_28_div_22_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275template(1, IasSignupComponent_div_28_div_22_div_6_small_1_Template, 2, 0, "small", 0)(2, IasSignupComponent_div_28_div_22_div_6_small_2_Template, 2, 0, "small", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r1.memberidForm.get("email")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r1.memberidForm.get("email")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["pattern"]);
  }
}
function IasSignupComponent_div_28_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "label", 58);
    \u0275\u0275text(2, " Email ID ");
    \u0275\u0275elementStart(3, "span", 48);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "input", 60);
    \u0275\u0275template(6, IasSignupComponent_div_28_div_22_div_6_Template, 3, 2, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx_r1.memberidForm.get("email")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx_r1.memberidForm.get("email")) == null ? null : tmp_2_0.invalid));
  }
}
function IasSignupComponent_div_28_div_27_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Enter a valid email ");
    \u0275\u0275elementEnd();
  }
}
function IasSignupComponent_div_28_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275template(1, IasSignupComponent_div_28_div_27_small_1_Template, 2, 0, "small", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r1.memberidForm.get("alternateEmail")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["pattern"]);
  }
}
function IasSignupComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "p")(2, "span", 45);
    \u0275\u0275listener("click", function IasSignupComponent_div_28_Template_span_click_2_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.currentStep = 3);
    });
    \u0275\u0275element(3, "i", 46);
    \u0275\u0275text(4, " back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h1", 24);
    \u0275\u0275text(6, "Get Details from DoPT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "form", 25);
    \u0275\u0275listener("ngSubmit", function IasSignupComponent_div_28_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitMemberId());
    });
    \u0275\u0275elementStart(8, "label", 47);
    \u0275\u0275text(9, "Full Name");
    \u0275\u0275elementStart(10, "span", 48);
    \u0275\u0275text(11, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "input", 49);
    \u0275\u0275listener("keypress", function IasSignupComponent_div_28_Template_input_keypress_12_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.allowOnlyLetters($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, IasSignupComponent_div_28_div_13_Template, 2, 1, "div", 28);
    \u0275\u0275elementStart(14, "label", 50);
    \u0275\u0275text(15, "Identity No.");
    \u0275\u0275elementStart(16, "span", 48);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(18, "input", 51);
    \u0275\u0275template(19, IasSignupComponent_div_28_div_19_Template, 2, 1, "div", 28);
    \u0275\u0275elementStart(20, "div", 52);
    \u0275\u0275template(21, IasSignupComponent_div_28_div_21_Template, 7, 1, "div", 53)(22, IasSignupComponent_div_28_div_22_Template, 7, 1, "div", 53);
    \u0275\u0275elementStart(23, "div", 54)(24, "label", 55);
    \u0275\u0275text(25, "Alternate Email ID ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 56);
    \u0275\u0275template(27, IasSignupComponent_div_28_div_27_Template, 2, 1, "div", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "button", 57);
    \u0275\u0275text(29, "Continue");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("formGroup", ctx_r1.memberidForm);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r1.memberidForm.get("name")) == null ? null : tmp_2_0.invalid);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r1.memberidForm.get("identityNumber")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx_r1.memberidForm.get("identityNumber")) == null ? null : tmp_3_0.invalid));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.contactType === "email");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.contactType === "mobile");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ((tmp_6_0 = ctx_r1.memberidForm.get("alternateEmail")) == null ? null : tmp_6_0.touched) && ((tmp_6_0 = ctx_r1.memberidForm.get("alternateEmail")) == null ? null : tmp_6_0.invalid));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.memberidForm.invalid);
  }
}
function IasSignupComponent_div_29_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cadre_r11 = ctx.$implicit;
    \u0275\u0275property("value", cadre_r11.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cadre_r11.name);
  }
}
function IasSignupComponent_div_29_div_68_div_6_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Mobile required ");
    \u0275\u0275elementEnd();
  }
}
function IasSignupComponent_div_29_div_68_div_6_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Enter valid mobile number ");
    \u0275\u0275elementEnd();
  }
}
function IasSignupComponent_div_29_div_68_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275template(1, IasSignupComponent_div_29_div_68_div_6_small_1_Template, 2, 0, "small", 0)(2, IasSignupComponent_div_29_div_68_div_6_small_2_Template, 2, 0, "small", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r1.memberdetailsForm.get("mobilenumber")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r1.memberdetailsForm.get("mobilenumber")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["pattern"]);
  }
}
function IasSignupComponent_div_29_div_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "label");
    \u0275\u0275text(2, "Mobile Number ");
    \u0275\u0275elementStart(3, "span", 48);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "input", 87);
    \u0275\u0275template(6, IasSignupComponent_div_29_div_68_div_6_Template, 3, 2, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx_r1.memberdetailsForm.get("mobilenumber")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx_r1.memberdetailsForm.get("mobilenumber")) == null ? null : tmp_2_0.invalid));
  }
}
function IasSignupComponent_div_29_div_69_div_6_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Email required ");
    \u0275\u0275elementEnd();
  }
}
function IasSignupComponent_div_29_div_69_div_6_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Enter valid email ");
    \u0275\u0275elementEnd();
  }
}
function IasSignupComponent_div_29_div_69_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275template(1, IasSignupComponent_div_29_div_69_div_6_small_1_Template, 2, 0, "small", 0)(2, IasSignupComponent_div_29_div_69_div_6_small_2_Template, 2, 0, "small", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r1.memberdetailsForm.get("email")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r1.memberdetailsForm.get("email")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["pattern"]);
  }
}
function IasSignupComponent_div_29_div_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "label");
    \u0275\u0275text(2, "Email ID ");
    \u0275\u0275elementStart(3, "span", 48);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "input", 60);
    \u0275\u0275template(6, IasSignupComponent_div_29_div_69_div_6_Template, 3, 2, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx_r1.memberdetailsForm.get("email")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx_r1.memberdetailsForm.get("email")) == null ? null : tmp_2_0.invalid));
  }
}
function IasSignupComponent_div_29_div_74_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Enter a valid email ");
    \u0275\u0275elementEnd();
  }
}
function IasSignupComponent_div_29_div_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275template(1, IasSignupComponent_div_29_div_74_small_1_Template, 2, 0, "small", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r1.memberdetailsForm.get("alternateEmail")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["pattern"]);
  }
}
function IasSignupComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "p")(2, "span", 45);
    \u0275\u0275listener("click", function IasSignupComponent_div_29_Template_span_click_2_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.currentStep = 3);
    });
    \u0275\u0275element(3, "i", 46);
    \u0275\u0275text(4, " back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h1", 24);
    \u0275\u0275text(6, "Fill Your Details Manually");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "form", 25);
    \u0275\u0275listener("ngSubmit", function IasSignupComponent_div_29_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitmemberdetails());
    });
    \u0275\u0275elementStart(8, "label", 61);
    \u0275\u0275text(9, "Full Name");
    \u0275\u0275elementStart(10, "span", 48);
    \u0275\u0275text(11, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "input", 62);
    \u0275\u0275listener("keypress", function IasSignupComponent_div_29_Template_input_keypress_12_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.allowOnlyLetters($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 63)(14, "div", 54)(15, "label", 64);
    \u0275\u0275text(16, "Cadre");
    \u0275\u0275elementStart(17, "span", 48);
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "select", 65)(20, "option", 66);
    \u0275\u0275text(21, "Enter Cadre");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(22, IasSignupComponent_div_29_For_23_Template, 2, 2, "option", 67, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 54)(25, "label", 68);
    \u0275\u0275text(26, "Allotment Year");
    \u0275\u0275elementStart(27, "span", 48);
    \u0275\u0275text(28, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "input", 69);
    \u0275\u0275listener("input", function IasSignupComponent_div_29_Template_input_input_29_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.validateYear($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 54)(31, "label", 70);
    \u0275\u0275text(32, "Gender");
    \u0275\u0275elementStart(33, "span", 48);
    \u0275\u0275text(34, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "select", 71)(36, "option", 72);
    \u0275\u0275text(37, "Select Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "option", 73);
    \u0275\u0275text(39, "Male");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "option", 74);
    \u0275\u0275text(41, "Female");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "option", 75);
    \u0275\u0275text(43, "Other");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 54)(45, "label", 76);
    \u0275\u0275text(46, "Date of Birth");
    \u0275\u0275elementStart(47, "span", 48);
    \u0275\u0275text(48, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(49, "input", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 54)(51, "label", 78);
    \u0275\u0275text(52, "Mother Tongue");
    \u0275\u0275elementStart(53, "span", 48);
    \u0275\u0275text(54, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "input", 79);
    \u0275\u0275listener("keypress", function IasSignupComponent_div_29_Template_input_keypress_55_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.allowOnlyLetters($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 54)(57, "label", 80);
    \u0275\u0275text(58, "Service Status");
    \u0275\u0275elementStart(59, "span", 48);
    \u0275\u0275text(60, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "select", 81)(62, "option", 72);
    \u0275\u0275text(63, "Select Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "option", 82);
    \u0275\u0275text(65, "Serving");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "option", 83);
    \u0275\u0275text(67, "Superannuated");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(68, IasSignupComponent_div_29_div_68_Template, 7, 1, "div", 53)(69, IasSignupComponent_div_29_div_69_Template, 7, 1, "div", 53);
    \u0275\u0275elementStart(70, "div", 54)(71, "label", 84);
    \u0275\u0275text(72, "Alternate Email ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(73, "input", 85);
    \u0275\u0275template(74, IasSignupComponent_div_29_div_74_Template, 2, 1, "div", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "button", 86);
    \u0275\u0275text(76, "Continue");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("formGroup", ctx_r1.memberdetailsForm);
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r1.cadrelist);
    \u0275\u0275advance(27);
    \u0275\u0275property("max", ctx_r1.maxDOB);
    \u0275\u0275advance(19);
    \u0275\u0275property("ngIf", ctx_r1.contactType === "email");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.contactType === "mobile");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ((tmp_6_0 = ctx_r1.memberdetailsForm.get("alternateEmail")) == null ? null : tmp_6_0.touched) && ((tmp_6_0 = ctx_r1.memberdetailsForm.get("alternateEmail")) == null ? null : tmp_6_0.invalid));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.memberdetailsForm.invalid);
  }
}
function IasSignupComponent_div_30_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "small", 93);
    \u0275\u0275text(2, "Profile picture is required.");
    \u0275\u0275elementEnd()();
  }
}
function IasSignupComponent_div_30_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94);
    \u0275\u0275element(1, "img", 95);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.finalImage, \u0275\u0275sanitizeUrl);
  }
}
function IasSignupComponent_div_30_div_23_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Only letters are allowed. ");
    \u0275\u0275elementEnd();
  }
}
function IasSignupComponent_div_30_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275template(1, IasSignupComponent_div_30_div_23_small_1_Template, 2, 0, "small", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r1.retiredForm.get("name")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["pattern"]);
  }
}
function IasSignupComponent_div_30_div_29_div_1_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Identity Number is required. ");
    \u0275\u0275elementEnd();
  }
}
function IasSignupComponent_div_30_div_29_div_1_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Enter a valid Identity Number. ");
    \u0275\u0275elementEnd();
  }
}
function IasSignupComponent_div_30_div_29_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275template(1, IasSignupComponent_div_30_div_29_div_1_small_1_Template, 2, 0, "small", 0)(2, IasSignupComponent_div_30_div_29_div_1_small_2_Template, 2, 0, "small", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r1.retiredForm.get("identityNumber")) == null ? null : tmp_3_0.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx_r1.retiredForm.get("identityNumber")) == null ? null : tmp_4_0.hasError("pattern")) || ((tmp_4_0 = ctx_r1.retiredForm.get("identityNumber")) == null ? null : tmp_4_0.hasError("minlength")) || ((tmp_4_0 = ctx_r1.retiredForm.get("identityNumber")) == null ? null : tmp_4_0.hasError("maxlength")));
  }
}
function IasSignupComponent_div_30_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275template(1, IasSignupComponent_div_30_div_29_div_1_Template, 3, 2, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx_r1.retiredForm.get("identityNumber")) == null ? null : tmp_2_0.touched) || ((tmp_2_0 = ctx_r1.retiredForm.get("identityNumber")) == null ? null : tmp_2_0.dirty));
  }
}
function IasSignupComponent_div_30_For_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cadre_r13 = ctx.$implicit;
    \u0275\u0275property("value", cadre_r13.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cadre_r13.name);
  }
}
function IasSignupComponent_div_30_div_53_div_6_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Mobile required ");
    \u0275\u0275elementEnd();
  }
}
function IasSignupComponent_div_30_div_53_div_6_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Enter valid mobile number ");
    \u0275\u0275elementEnd();
  }
}
function IasSignupComponent_div_30_div_53_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275template(1, IasSignupComponent_div_30_div_53_div_6_small_1_Template, 2, 0, "small", 0)(2, IasSignupComponent_div_30_div_53_div_6_small_2_Template, 2, 0, "small", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r1.retiredForm.get("mobilenumber")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r1.retiredForm.get("mobilenumber")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["pattern"]);
  }
}
function IasSignupComponent_div_30_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "label");
    \u0275\u0275text(2, "Mobile Number ");
    \u0275\u0275elementStart(3, "span", 48);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "input", 87);
    \u0275\u0275template(6, IasSignupComponent_div_30_div_53_div_6_Template, 3, 2, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx_r1.retiredForm.get("mobilenumber")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx_r1.retiredForm.get("mobilenumber")) == null ? null : tmp_2_0.invalid));
  }
}
function IasSignupComponent_div_30_div_54_div_6_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Email required ");
    \u0275\u0275elementEnd();
  }
}
function IasSignupComponent_div_30_div_54_div_6_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, " Enter valid email ");
    \u0275\u0275elementEnd();
  }
}
function IasSignupComponent_div_30_div_54_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275template(1, IasSignupComponent_div_30_div_54_div_6_small_1_Template, 2, 0, "small", 0)(2, IasSignupComponent_div_30_div_54_div_6_small_2_Template, 2, 0, "small", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r1.retiredForm.get("email")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r1.retiredForm.get("email")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["pattern"]);
  }
}
function IasSignupComponent_div_30_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "label");
    \u0275\u0275text(2, "Email ID ");
    \u0275\u0275elementStart(3, "span", 48);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "input", 60);
    \u0275\u0275template(6, IasSignupComponent_div_30_div_54_div_6_Template, 3, 2, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx_r1.retiredForm.get("email")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx_r1.retiredForm.get("email")) == null ? null : tmp_2_0.invalid));
  }
}
function IasSignupComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "p")(2, "span", 45);
    \u0275\u0275listener("click", function IasSignupComponent_div_30_Template_span_click_2_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.currentStep = 3);
    });
    \u0275\u0275element(3, "i", 46);
    \u0275\u0275text(4, " back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h1", 24);
    \u0275\u0275text(6, "Fill Your Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "form", 25);
    \u0275\u0275listener("ngSubmit", function IasSignupComponent_div_30_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitRetired());
    });
    \u0275\u0275elementStart(8, "div", 88)(9, "div", 54)(10, "label", 89);
    \u0275\u0275text(11, "Profile Picture ");
    \u0275\u0275elementStart(12, "span", 48);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "input", 90);
    \u0275\u0275listener("click", function IasSignupComponent_div_30_Template_input_click_14_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, IasSignupComponent_div_30_div_15_Template, 3, 0, "div", 28);
    \u0275\u0275elementStart(16, "div", 54);
    \u0275\u0275template(17, IasSignupComponent_div_30_div_17_Template, 2, 1, "div", 91);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "label", 47);
    \u0275\u0275text(19, "Full Name");
    \u0275\u0275elementStart(20, "span", 48);
    \u0275\u0275text(21, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "input", 49);
    \u0275\u0275listener("keypress", function IasSignupComponent_div_30_Template_input_keypress_22_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.allowOnlyLetters($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, IasSignupComponent_div_30_div_23_Template, 2, 1, "div", 28);
    \u0275\u0275elementStart(24, "label", 50);
    \u0275\u0275text(25, "Identity No. ");
    \u0275\u0275elementStart(26, "small");
    \u0275\u0275text(27, "(DoPT-allotted ID as shown on your ER Sheet)");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(28, "input", 92);
    \u0275\u0275template(29, IasSignupComponent_div_30_div_29_Template, 2, 1, "div", 28);
    \u0275\u0275elementStart(30, "div", 63)(31, "div", 54)(32, "label", 76);
    \u0275\u0275text(33, "Date of Birth");
    \u0275\u0275elementStart(34, "span", 48);
    \u0275\u0275text(35, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(36, "input", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 54)(38, "label", 64);
    \u0275\u0275text(39, "Cadre");
    \u0275\u0275elementStart(40, "span", 48);
    \u0275\u0275text(41, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "select", 65)(43, "option", 66);
    \u0275\u0275text(44, "Enter Cadre");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(45, IasSignupComponent_div_30_For_46_Template, 2, 2, "option", 67, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 54)(48, "label", 68);
    \u0275\u0275text(49, "Allotment Year");
    \u0275\u0275elementStart(50, "span", 48);
    \u0275\u0275text(51, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "input", 69);
    \u0275\u0275listener("input", function IasSignupComponent_div_30_Template_input_input_52_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.validateYear($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(53, IasSignupComponent_div_30_div_53_Template, 7, 1, "div", 53)(54, IasSignupComponent_div_30_div_54_Template, 7, 1, "div", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "button", 57);
    \u0275\u0275text(56, "Continue");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("formGroup", ctx_r1.retiredForm);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx_r1.retiredForm.get("profilePic")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.retiredForm.get("profilePic")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.finalImage);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r1.retiredForm.get("name")) == null ? null : tmp_4_0.invalid);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r1.retiredForm.get("identityNumber")) == null ? null : tmp_5_0.touched) && ((tmp_5_0 = ctx_r1.retiredForm.get("identityNumber")) == null ? null : tmp_5_0.invalid));
    \u0275\u0275advance(7);
    \u0275\u0275property("max", ctx_r1.maxDOB);
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx_r1.cadrelist);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.contactType === "email");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.contactType === "mobile");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.retiredForm.invalid);
  }
}
function IasSignupComponent_div_31_img_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 104);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.iasprofilePic, \u0275\u0275sanitizeUrl);
  }
}
function IasSignupComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "h1", 24);
    \u0275\u0275text(2, "Your Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 96)(4, "div", 97);
    \u0275\u0275template(5, IasSignupComponent_div_31_img_5_Template, 1, 1, "img", 98);
    \u0275\u0275elementStart(6, "div")(7, "h3", 99);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 100)(10, "span");
    \u0275\u0275text(11, "IAS Batch Year:");
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "span", 101);
    \u0275\u0275text(15, "|");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17, "Cadre Domicile: ");
    \u0275\u0275elementStart(18, "strong");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(20, "button", 102);
    \u0275\u0275listener("click", function IasSignupComponent_div_31_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitdetails());
    });
    \u0275\u0275text(21, "Continue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p", 58);
    \u0275\u0275text(23, "Wrong profile or incorrect information? ");
    \u0275\u0275elementStart(24, "span", 103);
    \u0275\u0275listener("click", function IasSignupComponent_div_31_Template_span_click_24_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.currentStep = 3);
    });
    \u0275\u0275text(25, " Retry.");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.iasprofilePic);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.iasname);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.iasbatch, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.iascadre);
  }
}
function IasSignupComponent_div_32__svg_svg_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 113)(1, "g", 114);
    \u0275\u0275element(2, "path", 115);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "defs")(4, "clipPath", 116);
    \u0275\u0275element(5, "rect", 117);
    \u0275\u0275elementEnd()()();
  }
}
function IasSignupComponent_div_32__svg_svg_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 113)(1, "g", 118);
    \u0275\u0275element(2, "path", 119);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "defs")(4, "clipPath", 120);
    \u0275\u0275element(5, "rect", 117);
    \u0275\u0275elementEnd()()();
  }
}
function IasSignupComponent_div_32_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1, " Password must have 8 characters, contain at least one uppercase letter, one lowercase letter, one number, and one special character. ");
    \u0275\u0275elementEnd();
  }
}
function IasSignupComponent_div_32__svg_svg_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 113)(1, "g", 114);
    \u0275\u0275element(2, "path", 115);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "defs")(4, "clipPath", 116);
    \u0275\u0275element(5, "rect", 117);
    \u0275\u0275elementEnd()()();
  }
}
function IasSignupComponent_div_32__svg_svg_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 113)(1, "g", 118);
    \u0275\u0275element(2, "path", 119);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "defs")(4, "clipPath", 120);
    \u0275\u0275element(5, "rect", 117);
    \u0275\u0275elementEnd()()();
  }
}
function IasSignupComponent_div_32_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1, " Passwords do not match. ");
    \u0275\u0275elementEnd();
  }
}
function IasSignupComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "h1", 24);
    \u0275\u0275text(2, "Create Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 25);
    \u0275\u0275listener("ngSubmit", function IasSignupComponent_div_32_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitPassword());
    });
    \u0275\u0275elementStart(4, "label", 105);
    \u0275\u0275text(5, "Create Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 106);
    \u0275\u0275element(7, "input", 107);
    \u0275\u0275elementStart(8, "button", 108);
    \u0275\u0275listener("click", function IasSignupComponent_div_32_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.togglePassword("new"));
    });
    \u0275\u0275template(9, IasSignupComponent_div_32__svg_svg_9_Template, 6, 0, "svg", 109)(10, IasSignupComponent_div_32__svg_svg_10_Template, 6, 0, "svg", 109);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, IasSignupComponent_div_32_div_11_Template, 2, 0, "div", 28);
    \u0275\u0275elementStart(12, "label", 110);
    \u0275\u0275text(13, "Confirm Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 106);
    \u0275\u0275element(15, "input", 111);
    \u0275\u0275elementStart(16, "button", 108);
    \u0275\u0275listener("click", function IasSignupComponent_div_32_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.togglePassword("confirm"));
    });
    \u0275\u0275template(17, IasSignupComponent_div_32__svg_svg_17_Template, 6, 0, "svg", 109)(18, IasSignupComponent_div_32__svg_svg_18_Template, 6, 0, "svg", 109);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, IasSignupComponent_div_32_div_19_Template, 2, 0, "div", 28);
    \u0275\u0275elementStart(20, "button", 112);
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
function IasSignupComponent_div_33_h4_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 24);
    \u0275\u0275text(1, "You can now login using your email and password.");
    \u0275\u0275elementEnd();
  }
}
function IasSignupComponent_div_33_h4_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 24);
    \u0275\u0275text(1, "You can now continue using your Google Account.");
    \u0275\u0275elementEnd();
  }
}
function IasSignupComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 121);
    \u0275\u0275element(2, "circle", 122)(3, "circle", 123)(4, "circle", 124)(5, "path", 125);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h1", 58);
    \u0275\u0275text(7, "You have successfully signed up");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, IasSignupComponent_div_33_h4_8_Template, 2, 0, "h4", 126)(9, IasSignupComponent_div_33_h4_9_Template, 2, 0, "h4", 126);
    \u0275\u0275elementStart(10, "button", 127);
    \u0275\u0275text(11, "Return to Login");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", !ctx_r1.isSso);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSso);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", "");
  }
}
var IasSignupComponent = class _IasSignupComponent {
  constructor(fb, http, datePipe, route) {
    this.fb = fb;
    this.http = http;
    this.datePipe = datePipe;
    this.route = route;
    this.currentStep = 1;
    this.isSso = false;
    this.token = null;
    this.sessionid = null;
    this.otpControls = ["d1", "d2", "d3", "d4", "d5", "d6"];
    this.isResendDisabled = false;
    this.showNewPassword = false;
    this.showConfirmPassword = false;
    this.passwordnotmatch = false;
    this.action = "";
    this.loading = false;
    this.email = null;
    this.mobilenumber = null;
    this.alternateemail = null;
    this.iasid = null;
    this.iasname = null;
    this.iasbatch = null;
    this.iascadre = null;
    this.iasprofilePic = null;
    this.toastMessage = "";
    this.toastType = "primary";
    this.imageChangedEvent = "";
    this.croppedImage = null;
    this.finalImage = null;
    this.contactType = null;
    this.cadrelist = [];
    this.emailForm = this.fb.group({
      email: ["", [Validators.required, this.contactValidator()]]
    });
    this.memberidForm = this.fb.group({
      name: ["", [Validators.pattern(/^[A-Za-z\s]+$/)]],
      identityNumber: ["", [Validators.required]],
      mobilenumber: [""],
      email: [""],
      alternateEmail: [null, [Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/)]]
    });
    this.retiredForm = this.fb.group({
      profilePic: ["", [Validators.required]],
      name: ["", [Validators.pattern(/^[A-Za-z\s]+$/)]],
      identityNumber: ["", [
        Validators.pattern(/^[0-9]{2}[A-Za-z]{2}[0-9]{6}$/),
        Validators.minLength(10),
        Validators.maxLength(10)
      ]],
      dateofbirth: ["", [Validators.required]],
      cadre: [0, [Validators.required]],
      allotmentyear: ["", [Validators.required, Validators.pattern(/^[0-9]{4}$/)]],
      mobilenumber: [""],
      email: [""]
    });
    this.memberdetailsForm = this.fb.group({
      fullname: [""],
      cadre: [0, [Validators.required]],
      allotmentyear: ["", [Validators.required, Validators.pattern(/^[0-9]{4}$/)]],
      gender: ["", [Validators.required]],
      dateofbirth: ["", [Validators.required]],
      mothertongue: ["", [Validators.required]],
      retirementreason: ["", [Validators.required]],
      mobilenumber: [""],
      email: [""],
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
  contactValidator() {
    return (control) => {
      const value = control.value?.trim();
      if (!value)
        return null;
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
      const mobileRegex = /^[6-9]\d{9}$/;
      if (emailRegex.test(value) || mobileRegex.test(value)) {
        return null;
      }
      return { invalidContact: true };
    };
  }
  updateContactValidators(form) {
    const mobileCtrl = form.get("mobilenumber");
    const emailCtrl = form.get("email");
    if (!mobileCtrl || !emailCtrl)
      return;
    mobileCtrl.clearValidators();
    emailCtrl.clearValidators();
    if (this.contactType === "email") {
      mobileCtrl.setValidators([
        Validators.required,
        Validators.pattern(/^[6-9]\d{9}$/)
      ]);
    }
    if (this.contactType === "mobile") {
      emailCtrl.setValidators([
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/)
      ]);
    }
    mobileCtrl.updateValueAndValidity();
    emailCtrl.updateValueAndValidity();
  }
  assignContactValues(form) {
    const emailVal = form.get("email")?.value || null;
    const mobileVal = form.get("mobilenumber")?.value || null;
    if (this.contactType === "mobile") {
      this.email = emailVal;
      this.mobilenumber = null;
    }
    if (this.contactType === "email") {
      this.mobilenumber = mobileVal;
      this.email = null;
    }
  }
  onResendOtp() {
    this.startCountdown(59);
  }
  signupWithGoogle() {
    window.location.href = `${environment.apiUrl}/accounts/google/login?intent=signup`;
  }
  ngOnInit() {
    const url = `${environment.apiUrl}/dopt/cadres?limit=0`;
    this.http.get(url).subscribe({
      next: (response) => {
        this.loading = false;
        this.cadrelist = response.data.data;
      }
    });
    const today = /* @__PURE__ */ new Date();
    today.setFullYear(today.getFullYear() - 21);
    this.maxDOB = today.toISOString().split("T")[0];
    this.route.queryParams.subscribe((params) => {
      if (params["sso"] && params["sessionToken"]) {
        this.isSso = true;
        this.sessionid = params["sessionToken"];
        this.contactType = "email";
        this.updateContactValidators(this.memberidForm);
        this.updateContactValidators(this.memberdetailsForm);
        this.updateContactValidators(this.retiredForm);
        this.currentStep = 3;
      }
    });
  }
  // ngAfterViewInit(): void {
  //   const modalEl = document.getElementById('Warning');
  //   if (modalEl) {
  //     this.myModal = new bootstrap.Modal(modalEl, {
  //       backdrop: 'static',
  //       keyboard: false
  //     });
  //     this.myModal.show();
  //   }
  // }
  ngOnDestroy() {
    if (this.myModal) {
      this.myModal.hide();
      this.myModal.dispose();
      this.myModal = null;
    }
  }
  submitMemberId() {
    if (this.memberidForm.valid) {
      this.loading = true;
      const url = `${environment.apiUrl}/dopt/officers?limit=1&identityNo=` + this.memberidForm.value.identityNumber;
      this.http.get(url).subscribe({
        next: (response) => {
          this.iasid = response.data.data[0]?.id;
          this.iasname = response.data.data[0]?.englishName;
          this.iasbatch = response.data.data[0]?.allotmentYear;
          this.iascadre = response.data.data[0]?.cadreDomicile;
          this.iasprofilePic = response.data.data[0]?.profilePic;
          this.loading = false;
          if (this.iasid !== void 0 && this.iasid !== null) {
            this.assignContactValues(this.memberidForm);
            this.alternateemail = this.memberidForm.value.alternateEmail || null;
            this.showToast("\u2705 Details Found Successfully", "success");
            this.currentStep = 7;
          } else {
            this.loading = false;
            this.showToast("Details Not Found", "danger");
          }
        },
        error: (err) => {
          this.loading = false;
          this.showToast("Error fetching IAS details", "danger");
        }
      });
    }
  }
  openModal() {
    const modalEl = document.getElementById("uploadModal");
    if (modalEl) {
      this.modalInstance = new bootstrap.Modal(modalEl);
      this.modalInstance.show();
    }
  }
  onFileChange(event) {
    this.imageChangedEvent = event;
    this.croppedImage = null;
    this.finalImage = null;
  }
  // Convert Blob to Base64
  blobToBase64(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }
  imageCropped(event) {
    if (event.blob) {
      this.blobToBase64(event.blob).then((base64) => this.croppedImage = base64).catch((err) => console.error("Blob to Base64 conversion error:", err));
    }
  }
  // Lock the cropped Base64 image
  cropImage() {
    this.finalImage = this.croppedImage;
    this.retiredForm.patchValue({ profilePic: "Uploaded" });
    this.modalInstance.hide();
  }
  submitRetired() {
    if (this.retiredForm.valid) {
      this.assignContactValues(this.retiredForm);
      this.loading = true;
      const headers = new HttpHeaders({
        "Authorization": `Bearer ${this.sessionid}`,
        "Content-Type": "application/json"
      });
      let payload = __spreadValues(__spreadProps(__spreadValues({
        profilePic: this.finalImage || null,
        name: this.retiredForm.value.name || null
      }, this.retiredForm.value.identityNumber != "" && { identityNo: this.retiredForm.value.identityNumber }), {
        dob: this.retiredForm.value.dateofbirth || null,
        cadreId: +this.retiredForm.value.cadre || null,
        batch: String(this.retiredForm.value.allotmentyear) || null
      }), this.contactType === "mobile" ? { email: this.email } : { mobileNo: String(this.mobilenumber) });
      const url = `${environment.apiUrl}/accounts/retired-member-signup`;
      this.http.post(url, payload, { headers }).subscribe({
        next: (response) => {
          this.iasid = response.data.user?.doptOfficer?.id;
          this.iasname = response.data.user?.name;
          this.iasbatch = response.data.user?.doptOfficer?.allotmentYear;
          this.iascadre = response.data.user?.doptOfficer?.cadre?.name;
          this.iasprofilePic = response.data.user?.doptOfficer?.profilePic || null;
          this.alternateemail = this.retiredForm.value.alternateEmail || null;
          this.loading = false;
          this.showToast("Form submitted successfully \u2705", "success");
          this.currentStep = 7;
        },
        error: (err) => {
          this.loading = false;
          this.showToast(err?.error?.message || "Error submitting the form", "danger");
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
      event.preventDefault();
      value = value.slice(0, 4);
      this.retiredForm.patchValue({ allotmentyear: value });
    }
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    if (+value > currentYear) {
      value = currentYear.toString();
    }
    input.value = value;
  }
  submitmemberdetails() {
    if (this.memberdetailsForm.valid) {
      this.loading = true;
      const formatted = this.datePipe.transform(this.memberdetailsForm.value.dateofbirth, "dd/MM/yyyy");
      const url = `${environment.apiUrl}/dopt/officers?limit=1&englishName=` + this.memberdetailsForm.value.fullname + "&populate=cadre&cadre=" + this.memberdetailsForm.value.cadre + "&allotmentYear=" + this.memberdetailsForm.value.allotmentyear + "&gender=" + this.memberdetailsForm.value.gender + "&dob=" + formatted + "&mothertongue=" + this.memberdetailsForm.value.mothertongue + "&retirementreason=" + this.memberdetailsForm.value.retirementreason;
      this.http.get(url).subscribe({
        next: (response) => {
          this.iasid = response.data.data[0]?.id;
          this.iasname = response.data.data[0]?.englishName;
          this.iasbatch = response.data.data[0]?.allotmentYear;
          this.iascadre = response.data.data[0]?.cadreDomicile;
          this.iasprofilePic = response.data.data[0]?.profilePic;
          this.loading = false;
          if (this.iasid !== void 0 && this.iasid !== null) {
            this.assignContactValues(this.memberdetailsForm);
            this.alternateemail = this.memberdetailsForm.value.alternateEmail || null;
            this.showToast("\u2705 Details Found Successfully", "success");
            this.currentStep = 7;
          } else {
            this.loading = false;
            this.showToast("Details Not Found", "danger");
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
    const payload = __spreadProps(__spreadValues({
      identityNumber: {
        id: this.iasid
      }
    }, this.contactType === "mobile" ? { email: this.email } : { mobileNumber: String(this.mobilenumber) }), {
      alternateEmail: this.alternateemail !== "" ? this.alternateemail : null
    });
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${this.sessionid}`,
      "Content-Type": "application/json"
    });
    this.http.post(url, payload, { headers }).subscribe({
      next: (response) => {
        this.loading = false;
        this.showToast("\u2705 IAS Details submitted successful", "success");
        if (this.isSso) {
          this.currentStep = 9;
        } else {
          this.currentStep = 8;
        }
      },
      error: (err) => {
        this.loading = false;
        this.showToast("Details already linked to another registered user", "danger");
      }
    });
  }
  submitEmail() {
    if (!this.emailForm.valid)
      return;
    const value = this.emailForm.value.email.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    const mobileRegex = /^[6-9]\d{9}$/;
    if (emailRegex.test(value)) {
      this.contactType = "email";
      this.updateContactValidators(this.memberidForm);
      this.updateContactValidators(this.memberdetailsForm);
      this.updateContactValidators(this.retiredForm);
    } else if (mobileRegex.test(value)) {
      this.contactType = "mobile";
      this.updateContactValidators(this.memberidForm);
      this.updateContactValidators(this.memberdetailsForm);
      this.updateContactValidators(this.retiredForm);
    }
    this.loading = true;
    const url = `${environment.apiUrl}/accounts/signup`;
    const payload = {
      email: value
    };
    this.http.post(url, payload).subscribe({
      next: (response) => {
        this.token = response.data.token;
        this.action = response.data.action;
        this.loading = false;
        this.showToast("\u2705 OTP sent successfully.", "success");
        console.log("Detected type:", this.contactType);
        this.currentStep = 2;
        this.startCountdown(59);
      },
      error: () => {
        this.loading = false;
        this.showToast("Already registered.", "danger");
      }
    });
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
      this.http.patch(url, payload, { headers }).subscribe({
        next: (response) => {
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
      this.http.post(url, payload, { headers }).subscribe({
        next: (response) => {
          this.showToast("\u2705 Password setup successfully", "success");
          this.currentStep = 9;
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
      return new (t || _IasSignupComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IasSignupComponent, selectors: [["app-ias-signup"]], standalone: true, features: [\u0275\u0275ProvidersFeature([DatePipe]), \u0275\u0275StandaloneFeature], decls: 34, vars: 17, consts: [[4, "ngIf"], [1, "toast-container", "position-fixed", "top-0", "end-0", "p-3"], ["id", "liveToast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true"], [1, "d-flex"], [1, "toast-body"], ["type", "button", "data-bs-dismiss", "toast", "aria-label", "Close", 1, "btn-close", "btn-close-white", "me-2", "m-auto"], ["id", "uploadModal", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", "p-3"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn-close"], [1, "modal-body"], ["type", "file", "accept", "image/*", 1, "form-control", "mb-3", 3, "change"], ["format", "png", 3, "imageChangedEvent", "maintainAspectRatio", "aspectRatio", "resizeToWidth", "roundCropper", "backgroundColor", "imageCropped", 4, "ngIf"], [1, "modal-footer", "d-flex", "justify-content-between"], ["data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], [1, "btn", "btn-dark", 3, "click", "disabled"], [1, "main-login-component", "d-flex", "align-items-center"], [1, "intro-image-div", "position-relative", 3, "routerLink"], [1, "login-form-div", "d-flex", "flex-column", "align-items-center", "px-5"], ["class", "stepcontainer", 4, "ngIf"], ["format", "png", 3, "imageCropped", "imageChangedEvent", "maintainAspectRatio", "aspectRatio", "resizeToWidth", "roundCropper", "backgroundColor"], [1, "stepcontainer"], [1, "mb-4"], [3, "ngSubmit", "formGroup"], ["for", "email"], ["type", "text", "id", "email", "formControlName", "email", "placeholder", "Enter Valid Email Id or Mobile Number", 1, "mb-1"], ["class", "error-message", 4, "ngIf"], ["type", "submit", 1, "login-btn", "my-4", 3, "disabled"], [1, "warning-box"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none"], ["d", "M7.3335 11.3333H8.66683V7.33331H7.3335V11.3333ZM8.00016 5.99998C8.18905 5.99998 8.34738 5.93609 8.47516 5.80831C8.60294 5.68053 8.66683 5.5222 8.66683 5.33331C8.66683 5.14442 8.60294 4.98609 8.47516 4.85831C8.34738 4.73054 8.18905 4.66665 8.00016 4.66665C7.81127 4.66665 7.65294 4.73054 7.52516 4.85831C7.39738 4.98609 7.3335 5.14442 7.3335 5.33331C7.3335 5.5222 7.39738 5.68053 7.52516 5.80831C7.65294 5.93609 7.81127 5.99998 8.00016 5.99998ZM8.00016 14.6666C7.07794 14.6666 6.21127 14.4916 5.40016 14.1416C4.58905 13.7916 3.8835 13.3166 3.2835 12.7166C2.6835 12.1166 2.2085 11.4111 1.8585 10.6C1.5085 9.78887 1.3335 8.9222 1.3335 7.99998C1.3335 7.07776 1.5085 6.21109 1.8585 5.39998C2.2085 4.58887 2.6835 3.88331 3.2835 3.28331C3.8835 2.68331 4.58905 2.20831 5.40016 1.85831C6.21127 1.50831 7.07794 1.33331 8.00016 1.33331C8.92238 1.33331 9.78905 1.50831 10.6002 1.85831C11.4113 2.20831 12.1168 2.68331 12.7168 3.28331C13.3168 3.88331 13.7918 4.58887 14.1418 5.39998C14.4918 6.21109 14.6668 7.07776 14.6668 7.99998C14.6668 8.9222 14.4918 9.78887 14.1418 10.6C13.7918 11.4111 13.3168 12.1166 12.7168 12.7166C12.1168 13.3166 11.4113 13.7916 10.6002 14.1416C9.78905 14.4916 8.92238 14.6666 8.00016 14.6666ZM8.00016 13.3333C9.48905 13.3333 10.7502 12.8166 11.7835 11.7833C12.8168 10.75 13.3335 9.48887 13.3335 7.99998C13.3335 6.51109 12.8168 5.24998 11.7835 4.21665C10.7502 3.18331 9.48905 2.66665 8.00016 2.66665C6.51127 2.66665 5.25016 3.18331 4.21683 4.21665C3.1835 5.24998 2.66683 6.51109 2.66683 7.99998C2.66683 9.48887 3.1835 10.75 4.21683 11.7833C5.25016 12.8166 6.51127 13.3333 8.00016 13.3333Z", "fill", "#A16800"], [1, "error-message"], [1, "otp-inputs"], ["type", "text", "maxlength", "1", "autocomplete", "off", 3, "formControlName", "input", "keydown", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "login-btn", 3, "disabled"], [1, "d-flex", "align-items-center", "gap-2", "mt-2"], [1, "m-0"], [1, "resend-text", 3, "click"], [1, "timer", "m-0"], ["type", "text", "maxlength", "1", "autocomplete", "off", 3, "input", "keydown", "formControlName"], ["type", "submit", 1, "login-btn", "mt-4", 3, "click"], [1, "text-center", "my-3"], ["type", "button", 1, "white-btn", 3, "click"], [1, "cursor-pointer", "fs-5", "fw-bold", 3, "click"], [1, "fas", "fa-arrow-left"], ["for", "name"], [1, "redstar"], ["type", "text", "id", "name", "formControlName", "name", "maxlength", "80", "placeholder", "Enter Your Name", 3, "keypress"], ["for", "identityNumber", 1, "mt-3"], ["type", "text", "id", "identityNumber", "formControlName", "identityNumber", "placeholder", "Enter Your Identity No."], [1, "row"], ["class", "col-md-6", 4, "ngIf"], [1, "col-md-6"], ["for", "alternateEmail", 1, "mt-3"], ["type", "email", "id", "alternateEmail", "formControlName", "alternateEmail", "placeholder", "Enter Email ID", "maxlength", "100"], ["type", "submit", 1, "login-btn", "my-3", "mt-4", 3, "disabled"], [1, "mt-3"], ["type", "text", "formControlName", "mobilenumber", "placeholder", "Enter Mobile Number", "maxlength", "10"], ["type", "email", "formControlName", "email", "placeholder", "Enter Email ID"], ["for", "FullName"], ["type", "text", "id", "FullName", "formControlName", "fullname", "maxlength", "80", "placeholder", "Enter Your Name", 3, "keypress"], [1, "row", "mt-3"], ["for", "Cadre"], ["id", "Cadre", "aria-label", "Default select example", "formControlName", "cadre", 1, "form-select"], ["value", "0", "disabled", ""], [3, "value"], ["for", "allotmentyear"], ["type", "number", "id", "allotmentyear", "formControlName", "allotmentyear", "placeholder", "Enter Allotment Year", 1, "mb-3", 3, "input"], ["for", "Gender"], ["id", "Gender", "formControlName", "gender", 1, "form-select"], ["value", "", "disabled", ""], ["value", "Male"], ["value", "Female"], ["value", ""], ["for", "dob"], ["type", "date", "id", "dob", "formControlName", "dateofbirth", "placeholder", "Select Date of Birth", 1, "mb-3", 3, "max"], ["for", "mothertongue"], ["type", "text", "id", "mothertongue", "formControlName", "mothertongue", "placeholder", "Enter Language", "maxlength", "40", 1, "mb-3", 3, "keypress"], ["for", "retirementreason"], ["id", "retirementreason", "formControlName", "retirementreason", 1, "form-select"], ["value", "Serving"], ["value", "Superannuated"], ["for", "alternateEmail"], ["type", "text", "id", "alternateEmail", "formControlName", "alternateEmail", "placeholder", "Enter your Email ID", "maxlength", "100", 1, "mb-1"], ["type", "submit", 1, "login-btn", "mt-4", 3, "disabled"], ["type", "text", "formControlName", "mobilenumber", "maxlength", "10", "placeholder", "Enter Your Number"], [1, "profile-pic-input", "mb-3", "row"], ["for", "profilePic"], ["type", "text", "id", "profilePic", "formControlName", "profilePic", "placeholder", "Click to upload", "readonly", "", 1, "form-control", "cursor-pointer", "bg-light", 3, "click"], ["class", "d-flex align-items-center justify-content-center h-100", 4, "ngIf"], ["type", "text", "id", "identityNumber", "formControlName", "identityNumber", "maxlength", "10", "placeholder", "Enter Your Identity No."], [1, "text-danger"], [1, "d-flex", "align-items-center", "justify-content-center", "h-100"], ["width", "80", "height", "80", "alt", "Preview", 1, "rounded-circle", "border", "preview-img", "mt-2", 3, "src"], [1, "detailscard", "shadow-sm", "border", "rounded-4"], [1, "d-flex", "align-items-center"], ["class", "rounded-circle me-4", "alt", "", "style", "width:80px; height:80px; object-fit:cover; object-position: center;", 3, "src", 4, "ngIf"], [1, "mb-3"], [1, "d-flex", "flex-wrap", "gap-2", "text-muted"], [1, "mx-2"], [1, "login-btn", "mt-4", 3, "click"], [1, "text-danger", "cursor-pointer", 3, "click"], ["alt", "", 1, "rounded-circle", "me-4", 2, "width", "80px", "height", "80px", "object-fit", "cover", "object-position", "center", 3, "src"], ["for", "newPassword"], [1, "password-wrapper", "my-1"], ["id", "newPassword", "formControlName", "newPassword", 3, "type"], ["type", "button", 1, "eye-btn", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "19", "height", "19", "viewBox", "0 0 19 19", "fill", "none", 4, "ngIf"], ["for", "confirmPassword", 1, "mt-3"], ["id", "confirmPassword", "formControlName", "confirmPassword", 3, "type"], ["type", "submit", 1, "login-btn", "mt-4"], ["xmlns", "http://www.w3.org/2000/svg", "width", "19", "height", "19", "viewBox", "0 0 19 19", "fill", "none"], ["clip-path", "url(#clip0_50828_258)"], ["d", "M9.49996 4.75002C12.5004 4.75002 15.1762 6.43627 16.4825 9.10419C15.1762 11.7721 12.5004 13.4584 9.49996 13.4584C6.49954 13.4584 3.82371 11.7721 2.51746 9.10419C3.82371 6.43627 6.49954 4.75002 9.49996 4.75002ZM9.49996 3.16669C5.54163 3.16669 2.16121 5.62877 0.791626 9.10419C2.16121 12.5796 5.54163 15.0417 9.49996 15.0417C13.4583 15.0417 16.8387 12.5796 18.2083 9.10419C16.8387 5.62877 13.4583 3.16669 9.49996 3.16669ZM9.49996 7.12502C10.5925 7.12502 11.4791 8.01169 11.4791 9.10419C11.4791 10.1967 10.5925 11.0834 9.49996 11.0834C8.40746 11.0834 7.52079 10.1967 7.52079 9.10419C7.52079 8.01169 8.40746 7.12502 9.49996 7.12502ZM9.49996 5.54169C7.53663 5.54169 5.93746 7.14085 5.93746 9.10419C5.93746 11.0675 7.53663 12.6667 9.49996 12.6667C11.4633 12.6667 13.0625 11.0675 13.0625 9.10419C13.0625 7.14085 11.4633 5.54169 9.49996 5.54169Z", "fill", "#A9ACB1"], ["id", "clip0_50828_258"], ["width", "19", "height", "19", "fill", "white"], ["clip-path", "url(#clip0_50828_300)"], ["d", "M9.50008 4.74999C12.5005 4.74999 15.1763 6.43624 16.4826 9.10416C16.0155 10.07 15.3584 10.9012 14.5747 11.5742L15.6909 12.6904C16.7913 11.7167 17.6622 10.4975 18.2084 9.10416C16.8388 5.62874 13.4584 3.16666 9.50008 3.16666C8.49467 3.16666 7.52883 3.32499 6.61841 3.61791L7.92467 4.92416C8.43925 4.82124 8.96175 4.74999 9.50008 4.74999ZM8.653 5.65249L10.2917 7.29124C10.743 7.48916 11.1072 7.85333 11.3051 8.30458L12.9438 9.94333C13.0072 9.67416 13.0547 9.38916 13.0547 9.09624C13.0626 7.13291 11.4634 5.54166 9.50008 5.54166C9.20717 5.54166 8.93008 5.58124 8.653 5.65249ZM1.59133 3.06374L3.713 5.18541C2.42258 6.19874 1.40133 7.54458 0.791748 9.10416C2.16133 12.5796 5.54175 15.0417 9.50008 15.0417C10.7034 15.0417 11.8592 14.8121 12.9201 14.3925L15.6276 17.1L16.7438 15.9837L2.70758 1.93958L1.59133 3.06374ZM7.52883 9.00124L9.59508 11.0675C9.56342 11.0754 9.53175 11.0833 9.50008 11.0833C8.40758 11.0833 7.52092 10.1967 7.52092 9.10416C7.52092 9.06458 7.52883 9.04083 7.52883 9.00124ZM4.83717 6.30958L6.22258 7.69499C6.0405 8.13041 5.93758 8.60541 5.93758 9.10416C5.93758 11.0675 7.53675 12.6667 9.50008 12.6667C9.99883 12.6667 10.4738 12.5637 10.9013 12.3817L11.6772 13.1575C10.9805 13.3475 10.2522 13.4583 9.50008 13.4583C6.49967 13.4583 3.82383 11.7721 2.51758 9.10416C3.07175 7.97208 3.87925 7.03791 4.83717 6.30958Z", "fill", "#222222"], ["id", "clip0_50828_300"], ["xmlns", "http://www.w3.org/2000/svg", "width", "100", "height", "100", "viewBox", "0 0 100 100", "fill", "none"], ["cx", "50", "cy", "50", "r", "50", "fill", "#4B9700", "fill-opacity", "0.3"], ["cx", "50", "cy", "50", "r", "45", "fill", "#4B9700", "fill-opacity", "0.3"], ["cx", "49.5", "cy", "49.5", "r", "39.5", "fill", "#4B9700"], ["d", "M30 51.5L40.2267 62.1713C40.9464 62.9223 42.1216 62.9963 42.9298 62.3414L70.5 40", "stroke", "white", "stroke-width", "5", "stroke-linecap", "round"], ["class", "mb-4", 4, "ngIf"], ["type", "button", 1, "login-btn", 3, "routerLink"]], template: function IasSignupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, IasSignupComponent_app_ias_loader_0_Template, 1, 0, "app-ias-loader", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "button", 5);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "h5", 10);
        \u0275\u0275text(12, "Upload & Crop Image");
        \u0275\u0275elementEnd();
        \u0275\u0275element(13, "button", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 12)(15, "input", 13);
        \u0275\u0275listener("change", function IasSignupComponent_Template_input_change_15_listener($event) {
          return ctx.onFileChange($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(16, IasSignupComponent_image_cropper_16_Template, 1, 6, "image-cropper", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 15)(18, "button", 16);
        \u0275\u0275text(19, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "button", 17);
        \u0275\u0275listener("click", function IasSignupComponent_Template_button_click_20_listener() {
          return ctx.cropImage();
        });
        \u0275\u0275text(21, "Crop");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(22, "div", 18);
        \u0275\u0275element(23, "div", 19);
        \u0275\u0275elementStart(24, "div", 20);
        \u0275\u0275template(25, IasSignupComponent_div_25_Template, 16, 3, "div", 21)(26, IasSignupComponent_div_26_Template, 19, 11, "div", 21)(27, IasSignupComponent_div_27_Template, 13, 0, "div", 21)(28, IasSignupComponent_div_28_Template, 30, 7, "div", 21)(29, IasSignupComponent_div_29_Template, 77, 6, "div", 21)(30, IasSignupComponent_div_30_Template, 57, 9, "div", 21)(31, IasSignupComponent_div_31_Template, 26, 4, "div", 21)(32, IasSignupComponent_div_32_Template, 22, 9, "div", 21)(33, IasSignupComponent_div_33_Template, 12, 3, "div", 21);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance(2);
        \u0275\u0275classMapInterpolate1("toast align-items-center text-bg-", ctx.toastType, " border-0");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.toastMessage, " ");
        \u0275\u0275advance(11);
        \u0275\u0275property("ngIf", ctx.imageChangedEvent);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", !ctx.croppedImage);
        \u0275\u0275advance(3);
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
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentStep === 9);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName, RouterModule, RouterLink, IasLoaderComponent, ImageCropperComponent], styles: ['@charset "UTF-8";\n\n\n\n.main-login-component[_ngcontent-%COMP%] {\n  height: 100%;\n  min-height: 100vh;\n}\n#Warning[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #C82F2F;\n  text-align: center;\n  font-family: Urbanist;\n  font-size: 32px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 51.189px;\n  letter-spacing: 0.32px;\n}\n#Warning[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: #000;\n  text-align: center;\n  font-family: Urbanist;\n  font-size: 22px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 31px;\n  letter-spacing: 0.32px;\n}\n#Warning[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.61);\n  text-align: center;\n  font-family: Urbanist;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 31px;\n  letter-spacing: 0.32px;\n}\n@media (min-width: 576px) {\n  .modal-dialog[_ngcontent-%COMP%] {\n    max-width: 640px;\n  }\n}\n.intro-image-div[_ngcontent-%COMP%] {\n  border-radius: 0px 20px 20px 0px;\n  background: var(--new, linear-gradient(130deg, #492fb2 -1.74%, #adadad 108.02%));\n  background-image: url("./media/new-banner.png");\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100vh;\n  width: 40%;\n}\n.login-form-div[_ngcontent-%COMP%] {\n  width: 60%;\n}\n.login-form-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: Urbanist;\n  font-size: 40px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 130%;\n  background: var(--2, linear-gradient(90deg, #222 0%, #424242 100%));\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.login-form-div[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--Neutral-700, #7e838b);\n  font-family: Urbanist;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  margin: 0;\n}\n.stepcontainer[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 600px;\n}\nform[_ngcontent-%COMP%] {\n}\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--Text-Dark, #212121);\n  font-family: Urbanist;\n  font-size: var(--Font-Size-2, 14px);\n  font-style: normal;\n  font-weight: 500;\n  line-height: var(--Line-Heights-10, 20px);\n  letter-spacing: var(--Letter-Spacing-2, 0.1px);\n  margin-bottom: 4px;\n}\nform[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], form[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%], form[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%], form[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%], form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-radius: 8px;\n  border: 1px solid #ccc;\n  font-size: 14px;\n  width: 100%;\n  box-sizing: border-box;\n}\nform[_ngcontent-%COMP%]   .redstar[_ngcontent-%COMP%] {\n  color: red;\n}\nform[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button, form[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\nform[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\nform[_ngcontent-%COMP%]   .password-input[_ngcontent-%COMP%] {\n  position: relative;\n}\nform[_ngcontent-%COMP%]   .password-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-right: 40px;\n}\nform[_ngcontent-%COMP%]   .password-input[_ngcontent-%COMP%]   .eye-button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n}\nform[_ngcontent-%COMP%]   .password-input[_ngcontent-%COMP%]   .eye-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n}\nform[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-top: -8px;\n}\nform[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #3b27b9;\n  font-size: 14px;\n  text-decoration: none;\n}\nform[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid;\n  background: #222;\n  color: var(--Text-Light, #fff);\n  text-align: center;\n  font-family: Urbanist;\n  font-size: var(--Font-Size-3, 16px);\n  font-style: normal;\n  font-weight: 500;\n  line-height: var(--Line-Heights-9, 24px);\n  letter-spacing: var(--Letter-Spacing-1, 0.15px);\n  padding: 12px;\n}\nform[_ngcontent-%COMP%]   .resend-text[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #715CC3;\n  text-decoration: underline;\n  font-weight: 600;\n}\nform[_ngcontent-%COMP%]   .resend-text.disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n  color: #aaa;\n}\nform[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 13px;\n}\nform[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]:disabled {\n  padding: 12px;\n  border: none;\n  border-radius: 8px;\n  background-color: #a0a0a0 !important;\n  color: #fff;\n  font-size: 16px;\n  cursor: not-allowed;\n}\nform[_ngcontent-%COMP%]   .signup-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: center;\n}\nform[_ngcontent-%COMP%]   .signup-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #3b27b9;\n  text-decoration: none;\n  font-weight: 500;\n}\nform[_ngcontent-%COMP%]   .warning-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: start;\n  background-color: #fff4db;\n  border-radius: 8px;\n  padding: 12px;\n  gap: 8px;\n  color: #333;\n}\nform[_ngcontent-%COMP%]   .warning-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #a16800;\n  font-family: Urbanist;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 18px;\n  margin: 0;\n}\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.white-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 8px;\n  border: 1px solid #000;\n  color: #222;\n  background: #fff;\n  text-align: center;\n  font-family: Urbanist;\n  font-size: var(--Font-Size-3, 16px);\n  font-style: normal;\n  font-weight: 500;\n  line-height: var(--Line-Heights-9, 24px);\n  letter-spacing: var(--Letter-Spacing-1, 0.15px);\n  padding: 12px;\n}\n.otp-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.otp-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin: 20px 0;\n}\n.otp-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  font-size: 1.5rem;\n  text-align: center;\n  border: 2px solid #ccc;\n  border-radius: 8px;\n  outline: none;\n  transition: border-color 0.2s;\n}\n.otp-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: black;\n}\n.login-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  background: black;\n  color: white;\n  padding: 10px;\n  border: none;\n  font-size: 1rem;\n  border-radius: 8px;\n  cursor: pointer;\n}\n.timer[_ngcontent-%COMP%] {\n  color: #3366ff;\n}\n.password-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.password-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-right: 40px;\n}\n.eye-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  background: none;\n  border: none;\n  font-size: 1.2rem;\n  cursor: pointer;\n}\n.detailscard[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid #c6c6c6;\n  padding: 10px;\n}\n.detailscard[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #211b3a;\n  font-family: Urbanist;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: normal;\n}\n.detailscard[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #211B3A;\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n}\n@media (max-width: 1122px) {\n  .main-login-component[_ngcontent-%COMP%] {\n    flex-direction: column;\n    justify-content: flex-start;\n  }\n  .intro-image-div[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .login-form-div[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 40px 20px;\n  }\n  .login-form-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n}\n@media (max-width: 768px) {\n  .main-login-component[_ngcontent-%COMP%] {\n    flex-direction: column;\n    justify-content: flex-start;\n  }\n  .intro-image-div[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 520px;\n    border-radius: 0 0 20px 20px;\n    background-position: center;\n  }\n  .login-form-div[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 30px 20px;\n  }\n  .login-form-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 28px;\n    line-height: 120%;\n    text-align: center;\n  }\n  form[_ngcontent-%COMP%] {\n    margin-top: 32px;\n    gap: 12px;\n  }\n  form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], form[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%], form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n    padding: 10px;\n    font-size: 14px;\n  }\n  .login-btn[_ngcontent-%COMP%] {\n    font-size: 15px;\n    padding: 10px;\n  }\n  .signup-text[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .warning-box[_ngcontent-%COMP%] {\n    padding: 10px;\n    font-size: 12px;\n    align-items: flex-start;\n  }\n  .warning-box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n    margin-top: 2px;\n  }\n}\n@media (max-width: 480px) {\n  .intro-image-div[_ngcontent-%COMP%] {\n    height: 350px;\n    border-radius: 0;\n  }\n  .login-form-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .otp-inputs[_ngcontent-%COMP%] {\n    gap: 6px;\n  }\n  .otp-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 42px;\n    height: 42px;\n    font-size: 1.2rem;\n  }\n  .login-btn[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 8px;\n  }\n}\n.preview-img[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  object-fit: cover;\n}\n  image-cropper {\n  max-width: 200px;\n  height: 200px;\n}\n  image-cropper .cropper-container .cropper-drag-box {\n  background-color: rgb(0, 0, 0) !important;\n}\n/*# sourceMappingURL=ias-signup.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IasSignupComponent, { className: "IasSignupComponent", filePath: "src/app/authmodule/ias-signup/ias-signup.component.ts", lineNumber: 18 });
})();

// src/app/authmodule/auth.guard.ts
var authGuard = (route, state) => {
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);
  const toastService = inject(ToastService);
  if (isPlatformBrowser(platformId)) {
    const token = localStorage.getItem("authToken");
    const role = localStorage.getItem("userRole") ? atob(localStorage.getItem("userRole")) : "";
    const status = localStorage.getItem("userStatus") ? atob(localStorage.getItem("userStatus")) : "";
    if (token) {
      const expectedRoles = route.data?.["roles"];
      const expectedStatuses = route.data?.["statuses"];
      if (expectedRoles && !expectedRoles.includes(role)) {
        if (role === "admin" && expectedRoles.includes("user")) {
          toastService.showToast("You are logged in as admin. Please login with member credentials to access this page.", "danger");
        } else if (role === "state_association_admin" && expectedRoles.includes("user")) {
          toastService.showToast("You are logged in as State Association Admin. Please login with member credentials to access this page.", "danger");
        } else if (role === "user" && expectedRoles.includes("state_association_admin")) {
          toastService.showToast("You are logged in as a Member. Please login with State Association Admin credentials to access this page.", "danger");
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
    toastService.showToast("To visit this page, you need to log in.", "success");
    router.navigateByUrl("", { replaceUrl: true });
    return false;
  }
  return false;
};

// src/app/authmodule/guards/no-auth.guard.ts
var noAuthGuard = (route, state) => {
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);
  const toastService = inject(ToastService);
  if (isPlatformBrowser(platformId)) {
    const token = localStorage.getItem("authToken");
    const role = atob(localStorage.getItem("userRole") || "");
    if (token) {
      if (role === "admin") {
        router.navigateByUrl("/home", { replaceUrl: true });
      } else if (role === "user") {
        router.navigateByUrl("/user-home", { replaceUrl: true });
      } else {
        toastService.showToast("To visit this page you need to Login", "success");
        router.navigateByUrl("", { replaceUrl: true });
      }
      return false;
    }
    return true;
  }
  return false;
};

// src/app/state-website/components/state-header/state-header.component.ts
var StateHeaderComponent = class _StateHeaderComponent {
  constructor(toastService, router) {
    this.toastService = toastService;
    this.router = router;
  }
  goHome() {
    if (this.router.url === "/homepage") {
      this.toastService.showToast("You are already on Webpage", "success");
    } else {
      this.router.navigateByUrl("/homepage");
    }
  }
  static {
    this.\u0275fac = function StateHeaderComponent_Factory(t) {
      return new (t || _StateHeaderComponent)(\u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StateHeaderComponent, selectors: [["app-state-header"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 38, vars: 0, consts: [[1, "main-ncs-header-div"], [1, "container", "d-flex", "align-items-center", "justify-content-between"], [1, "logo-div", 2, "cursor", "pointer", 3, "click"], ["src", "../../../assets/logo/ias-small-logo.png", "alt", "ias-logo", "draggable", "false"], [1, "navigationmenu", "d-flex", "align-items-center"], [1, "navbar", "navbar-expand-lg"], [1, "container-fluid"], ["type", "button", "data-bs-toggle", "offcanvas", "data-bs-target", "#offcanvasNavbar", "aria-controls", "offcanvasNavbar", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse", "d-none", "d-lg-flex"], [1, "navbar-nav", "ms-auto"], [1, "nav-link"], ["tabindex", "-1", "id", "offcanvasNavbar", "aria-labelledby", "offcanvasNavbarLabel", 1, "offcanvas", "offcanvas-start", "d-lg-none"], [1, "offcanvas-header"], ["id", "offcanvasNavbarLabel", 1, "offcanvas-title", 3, "click"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "text-reset"], [1, "offcanvas-body"], [1, "navbar-nav"]], template: function StateHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275listener("click", function StateHeaderComponent_Template_div_click_2_listener() {
          return ctx.goHome();
        });
        \u0275\u0275element(3, "img", 3);
        \u0275\u0275elementStart(4, "h1");
        \u0275\u0275text(5, "Indian Administrative Service ");
        \u0275\u0275element(6, "br");
        \u0275\u0275text(7, "Central Association");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 4)(9, "nav", 5)(10, "div", 6)(11, "button", 7);
        \u0275\u0275element(12, "span", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 9)(14, "div", 10)(15, "a", 11);
        \u0275\u0275text(16, "About Us");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "a", 11);
        \u0275\u0275text(18, "Office Bearers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "a", 11);
        \u0275\u0275text(20, "News & Events");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "a", 11);
        \u0275\u0275text(22, "Gallery");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "div", 12)(24, "div", 13)(25, "h5", 14);
        \u0275\u0275listener("click", function StateHeaderComponent_Template_h5_click_25_listener() {
          return ctx.goHome();
        });
        \u0275\u0275text(26, "Website");
        \u0275\u0275elementEnd();
        \u0275\u0275element(27, "button", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 16)(29, "div", 17)(30, "a", 11);
        \u0275\u0275text(31, "About Us");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "a", 11);
        \u0275\u0275text(33, "Office Bearers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "a", 11);
        \u0275\u0275text(35, "News & Events");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "a", 11);
        \u0275\u0275text(37, "Gallery");
        \u0275\u0275elementEnd()()()()()()()()();
      }
    }, dependencies: [CommonModule, RouterModule], styles: ["\n\n.main-ncs-header-div[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 12px 0px;\n  position: sticky;\n  top: 0px;\n  z-index: 10;\n  display: block;\n  box-shadow: 10px 2px 26px -6px black;\n}\n.logo-div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.logo-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #000;\n  font-family: Urbanist;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 22.393px;\n  margin: 0px;\n}\n@media (max-width: 900px) {\n  .logo-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n}\n/*# sourceMappingURL=state-header.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StateHeaderComponent, { className: "StateHeaderComponent", filePath: "src/app/state-website/components/state-header/state-header.component.ts", lineNumber: 13 });
})();

// src/app/state-website/components/state-footer/state-footer.component.ts
var StateFooterComponent = class _StateFooterComponent {
  constructor() {
    const today = /* @__PURE__ */ new Date();
    const formattedDate = today.toLocaleDateString("en-GB");
    this.finalDate = formattedDate.replace(/\//g, "-");
  }
  static {
    this.\u0275fac = function StateFooterComponent_Factory(t) {
      return new (t || _StateFooterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StateFooterComponent, selectors: [["app-state-footer"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 62, vars: 1, consts: [[1, "footer"], [1, "container"], [1, "footer-top"], ["routerLink", "/homepage", 1, "footer-logo"], [1, "d-flex", "align-items-center", "gap-2"], ["src", "../../../assets/logo/ias-small-logo.png", "alt", "IAS Association Logo"], [1, "org-name", "m-0", "p-0"], [1, "last-updated"], [1, "footer-links"], [1, "mb-4"], ["href", "'community'"], ["href", "'membership'"], ["href", "'contact-us'"], [1, "footer-contact"], [1, "social-icons"], ["href", "https://x.com/iasassociation", "target", "_blank"], [1, "fab", "fa-x-twitter"], ["href", "https://www.facebook.com/IASassociation/", "target", "_blank"], [1, "fab", "fa-facebook-f"], [1, "contact-info"], [1, "d-flex", "gap-2"], ["xmlns", "http://www.w3.org/2000/svg", "width", "17", "height", "18", "viewBox", "0 0 17 18", "fill", "none"], ["id", "mask0_52881_3913", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "17", "height", "18", 2, "mask-type", "alpha"], ["width", "17", "height", "18", "fill", "#D9D9D9"], ["mask", "url(#mask0_52881_3913)"], ["d", "M8.50742 9C8.92164 9 9.27624 8.85313 9.57121 8.55938C9.86618 8.26563 10.0137 7.9125 10.0137 7.5C10.0137 7.0875 9.86618 6.73438 9.57121 6.44063C9.27624 6.14687 8.92164 6 8.50742 6C8.0932 6 7.73861 6.14687 7.44363 6.44063C7.14866 6.73438 7.00117 7.0875 7.00117 7.5C7.00117 7.9125 7.14866 8.26563 7.44363 8.55938C7.73861 8.85313 8.0932 9 8.50742 9ZM8.50742 14.5125C10.0388 13.1125 11.1747 11.8406 11.9153 10.6969C12.6559 9.55312 13.0262 8.5375 13.0262 7.65C13.0262 6.2875 12.59 5.17188 11.7176 4.30312C10.8452 3.43438 9.77518 3 8.50742 3C7.23966 3 6.1696 3.43438 5.29723 4.30312C4.42486 5.17188 3.98867 6.2875 3.98867 7.65C3.98867 8.5375 4.35896 9.55312 5.09953 10.6969C5.8401 11.8406 6.97607 13.1125 8.50742 14.5125ZM8.50742 16.5C6.48654 14.7875 4.97715 13.1969 3.97926 11.7281C2.98137 10.2594 2.48242 8.9 2.48242 7.65C2.48242 5.775 3.08806 4.28125 4.29934 3.16875C5.51061 2.05625 6.91331 1.5 8.50742 1.5C10.1015 1.5 11.5042 2.05625 12.7155 3.16875C13.9268 4.28125 14.5324 5.775 14.5324 7.65C14.5324 8.9 14.0335 10.2594 13.0356 11.7281C12.0377 13.1969 10.5283 14.7875 8.50742 16.5Z", "fill", "white"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "viewBox", "0 0 18 18", "fill", "none"], ["id", "mask0_52881_3903", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "18", "height", "18", 2, "mask-type", "alpha"], ["width", "18", "height", "18", "fill", "#D9D9D9"], ["mask", "url(#mask0_52881_3903)"], ["d", "M8.25 12.75H9.75V8.25H8.25V12.75ZM9 6.75C9.2125 6.75 9.39063 6.67812 9.53438 6.53438C9.67813 6.39062 9.75 6.2125 9.75 6C9.75 5.7875 9.67813 5.60938 9.53438 5.46562C9.39063 5.32187 9.2125 5.25 9 5.25C8.7875 5.25 8.60938 5.32187 8.46563 5.46562C8.32188 5.60938 8.25 5.7875 8.25 6C8.25 6.2125 8.32188 6.39062 8.46563 6.53438C8.60938 6.67812 8.7875 6.75 9 6.75ZM9 16.5C7.9625 16.5 6.9875 16.3031 6.075 15.9094C5.1625 15.5156 4.36875 14.9813 3.69375 14.3063C3.01875 13.6313 2.48438 12.8375 2.09063 11.925C1.69687 11.0125 1.5 10.0375 1.5 9C1.5 7.9625 1.69687 6.9875 2.09063 6.075C2.48438 5.1625 3.01875 4.36875 3.69375 3.69375C4.36875 3.01875 5.1625 2.48438 6.075 2.09063C6.9875 1.69687 7.9625 1.5 9 1.5C10.0375 1.5 11.0125 1.69687 11.925 2.09063C12.8375 2.48438 13.6313 3.01875 14.3063 3.69375C14.9813 4.36875 15.5156 5.1625 15.9094 6.075C16.3031 6.9875 16.5 7.9625 16.5 9C16.5 10.0375 16.3031 11.0125 15.9094 11.925C15.5156 12.8375 14.9813 13.6313 14.3063 14.3063C13.6313 14.9813 12.8375 15.5156 11.925 15.9094C11.0125 16.3031 10.0375 16.5 9 16.5ZM9 15C10.675 15 12.0938 14.4187 13.2563 13.2563C14.4187 12.0938 15 10.675 15 9C15 7.325 14.4187 5.90625 13.2563 4.74375C12.0938 3.58125 10.675 3 9 3C7.325 3 5.90625 3.58125 4.74375 4.74375C3.58125 5.90625 3 7.325 3 9C3 10.675 3.58125 12.0938 4.74375 13.2563C5.90625 14.4187 7.325 15 9 15Z", "fill", "white"], [1, "texthelp"], [1, "mt-2", "needlink"], ["href", "tel:+919876543210", 1, "d-block", "text-primary"], ["href", "mailto:iascahelpdesk@gmail.com", 1, "d-block", "text-primary"], [1, "footer-bottom"], [1, "container", "d-flex", "align-items-center", "justify-content-between"], [1, "m-0"], [1, "footer-policies"], ["routerLink", "Terms-Conditions"], ["routerLink", "Privacy-Policy"]], template: function StateFooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275element(5, "img", 5);
        \u0275\u0275elementStart(6, "p", 6);
        \u0275\u0275text(7, "Indian Administrative Service ");
        \u0275\u0275element(8, "br");
        \u0275\u0275text(9, "Central Association");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 7);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 8)(13, "h4", 9);
        \u0275\u0275text(14, "Important Links");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "a", 10);
        \u0275\u0275text(16, "Community");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "a", 11);
        \u0275\u0275text(18, "Membership");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "a", 12);
        \u0275\u0275text(20, "Contact Us");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 13)(22, "div", 14)(23, "a", 15);
        \u0275\u0275element(24, "i", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "a", 17);
        \u0275\u0275element(26, "i", 18);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 19)(28, "p", 20);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(29, "svg", 21)(30, "mask", 22);
        \u0275\u0275element(31, "rect", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "g", 24);
        \u0275\u0275element(33, "path", 25);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(34, "span");
        \u0275\u0275text(35, "Indian Administrative Service ");
        \u0275\u0275element(36, "br");
        \u0275\u0275text(37, "Central Association, New Delhi");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "div", 20);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(39, "svg", 26)(40, "mask", 27);
        \u0275\u0275element(41, "rect", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "g", 29);
        \u0275\u0275element(43, "path", 30);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(44, "div");
        \u0275\u0275text(45, " Need help?");
        \u0275\u0275elementStart(46, "span", 31);
        \u0275\u0275text(47, " Contact Help Desk:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "div", 32)(49, "a", 33);
        \u0275\u0275text(50, "[+91 9910659965]");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "a", 34);
        \u0275\u0275text(52, "[iascahelpdesk@gmail.com]");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(53, "div", 35)(54, "div", 36)(55, "p", 37);
        \u0275\u0275text(56, "\xA9 2024 - Indian Administrative Service Central Association. All rights reserved.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "div", 38)(58, "a", 39);
        \u0275\u0275text(59, "Terms & Conditions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "a", 40);
        \u0275\u0275text(61, "Privacy Policy");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate1("Last updated: ", ctx.finalDate, "");
      }
    }, dependencies: [RouterLink], styles: ['\n\n.footer[_ngcontent-%COMP%] {\n  background: #000;\n  color: #fff;\n  font-family: "Urbanist", sans-serif;\n}\n.footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.3fr 1.5fr 1fr;\n  gap: 30px;\n  padding: 40px 0px;\n}\n@media (max-width: 1024px) {\n  .footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.footer[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.footer[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 80px;\n}\n.footer[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%]   .org-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-top: 8px;\n}\n.footer[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%]   .last-updated[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: rgba(255, 255, 255, 0.4);\n  border-radius: 20px;\n  padding: 10px 20px;\n  font-size: 12px;\n  margin-top: 28px;\n}\n.footer[_ngcontent-%COMP%]   .texthelp[_ngcontent-%COMP%] {\n  color: #8f8f8f;\n}\n.footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n.footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  color: inherit;\n  text-decoration: none;\n  margin-bottom: 8px;\n  font-size: 14px;\n}\n.footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.footer[_ngcontent-%COMP%]   .footer-contact[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n@media (max-width: 600px) {\n  .footer[_ngcontent-%COMP%]   .footer-contact[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%] {\n    justify-content: start;\n  }\n}\n.footer[_ngcontent-%COMP%]   .footer-contact[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  background: #ffffff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #000;\n  font-size: 14px;\n  transition: 0.2s;\n  text-decoration: none;\n  opacity: 0.7;\n}\n.footer[_ngcontent-%COMP%]   .footer-contact[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #ddd;\n  opacity: 1;\n}\n.footer[_ngcontent-%COMP%]   .footer-contact[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  font-size: 14px;\n  line-height: 20px;\n}\n.footer[_ngcontent-%COMP%]   .footer-contact[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%] {\n  background: #000;\n  color: #fff;\n  font-size: 12px;\n  padding: 15px 0px;\n  flex-wrap: wrap;\n  border-top: 1px solid #ddd;\n}\n@media (max-width: 600px) {\n  .footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n    text-align: center;\n  }\n}\n.footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   .footer-policies[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n}\n.footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   .footer-policies[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n.footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   .footer-policies[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.footer[_ngcontent-%COMP%]   .needlink[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: rgba(0, 97, 188, 0.92);\n}\n/*# sourceMappingURL=state-footer.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StateFooterComponent, { className: "StateFooterComponent", filePath: "src/app/state-website/components/state-footer/state-footer.component.ts", lineNumber: 11 });
})();

// node_modules/ngx-slick-carousel/fesm2022/ngx-slick-carousel.mjs
var _c03 = ["*"];
var SlickCarouselComponent = class _SlickCarouselComponent {
  config;
  afterChange = output();
  beforeChange = output();
  breakpoint = output();
  destroy = output();
  init = output();
  $instance;
  // access from parent component can be a problem with change detection timing. Please use afterChange output
  currentIndex = 0;
  slides = [];
  initialized = false;
  _removedSlides = [];
  _addedSlides = [];
  el = inject(ElementRef);
  zone = inject(NgZone);
  isServer = isPlatformServer(inject(PLATFORM_ID));
  /**
   * On component destroy
   */
  ngOnDestroy() {
    this.unslick();
  }
  ngAfterViewInit() {
    this.ngAfterViewChecked();
  }
  /**
   * On component view checked
   */
  ngAfterViewChecked() {
    if (this.isServer) {
      return;
    }
    if (this._addedSlides.length > 0 || this._removedSlides.length > 0) {
      const nextSlidesLength = this.slides.length - this._removedSlides.length + this._addedSlides.length;
      if (!this.initialized) {
        if (nextSlidesLength > 0) {
          this.initSlick();
        }
      } else if (nextSlidesLength === 0) {
        this.unslick();
      } else {
        this._addedSlides.forEach((slickItem) => {
          this.slides.push(slickItem);
          this.$instance.slick("slickAdd", slickItem.el.nativeElement);
        });
        this._addedSlides = [];
        this._removedSlides.forEach((slickItem) => {
          const idx = this.slides.indexOf(slickItem);
          this.slides = this.slides.filter((s) => s !== slickItem);
          this.$instance.slick("slickRemove", idx);
        });
        this._removedSlides = [];
      }
    }
  }
  /**
   * init slick
   */
  initSlick() {
    this.slides = this._addedSlides;
    this._addedSlides = [];
    this._removedSlides = [];
    this.$instance = jQuery(this.el.nativeElement);
    this.$instance.on("init", (event, slick) => {
      this.zone.run(() => {
        this.init.emit({
          event,
          slick
        });
      });
    });
    this.$instance.slick(this.config);
    this.zone.run(() => {
      this.initialized = true;
      this.currentIndex = this.config?.initialSlide || 0;
    });
    this.$instance.on("afterChange", (event, slick, currentSlide) => {
      this.zone.run(() => {
        this.afterChange.emit({
          event,
          slick,
          currentSlide,
          first: currentSlide === 0,
          last: slick.$slides.length === currentSlide + slick.options.slidesToScroll
        });
        this.currentIndex = currentSlide;
      });
    });
    this.$instance.on("beforeChange", (event, slick, currentSlide, nextSlide) => {
      this.zone.run(() => {
        this.beforeChange.emit({
          event,
          slick,
          currentSlide,
          nextSlide
        });
        this.currentIndex = nextSlide;
      });
    });
    this.$instance.on("breakpoint", (event, slick, breakpoint) => {
      this.zone.run(() => {
        this.breakpoint.emit({
          event,
          slick,
          breakpoint
        });
      });
    });
    this.$instance.on("destroy", (event, slick) => {
      this.zone.run(() => {
        this.destroy.emit({
          event,
          slick
        });
        this.initialized = false;
      });
    });
  }
  addSlide(slickItem) {
    this._addedSlides.push(slickItem);
  }
  removeSlide(slickItem) {
    this._removedSlides.push(slickItem);
  }
  /**
   * Slick Method
   */
  slickGoTo(index) {
    this.$instance.slick("slickGoTo", index);
  }
  slickNext() {
    this.$instance.slick("slickNext");
  }
  slickPrev() {
    this.$instance.slick("slickPrev");
  }
  slickPause() {
    this.$instance.slick("slickPause");
  }
  slickPlay() {
    this.$instance.slick("slickPlay");
  }
  unslick() {
    if (this.$instance) {
      this.$instance.slick("unslick");
      this.$instance = void 0;
    }
    this.initialized = false;
  }
  ngOnChanges(changes) {
    if (this.initialized) {
      const config2 = changes["config"];
      if (config2.previousValue !== config2.currentValue && config2.currentValue !== void 0) {
        const refresh = config2.currentValue["refresh"];
        const newOptions = Object.assign({}, config2.currentValue);
        delete newOptions["refresh"];
        this.$instance.slick("slickSetOption", newOptions, refresh);
      }
    }
  }
  /** @nocollapse */
  static \u0275fac = function SlickCarouselComponent_Factory(t) {
    return new (t || _SlickCarouselComponent)();
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SlickCarouselComponent,
    selectors: [["ngx-slick-carousel"]],
    inputs: {
      config: "config"
    },
    outputs: {
      afterChange: "afterChange",
      beforeChange: "beforeChange",
      breakpoint: "breakpoint",
      destroy: "destroy",
      init: "init"
    },
    exportAs: ["slick-carousel"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _SlickCarouselComponent),
      multi: true
    }]), \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c03,
    decls: 1,
    vars: 0,
    template: function SlickCarouselComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SlickCarouselComponent, [{
    type: Component,
    args: [{
      selector: "ngx-slick-carousel",
      exportAs: "slick-carousel",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SlickCarouselComponent),
        multi: true
      }],
      template: "<ng-content></ng-content>",
      standalone: false
    }]
  }], null, {
    config: [{
      type: Input
    }]
  });
})();
var SlickItemDirective = class _SlickItemDirective {
  carousel = inject(SlickCarouselComponent, {
    host: true
  });
  renderer = inject(Renderer2);
  el = inject(ElementRef);
  isServer = isPlatformServer(inject(PLATFORM_ID));
  ngOnInit() {
    this.carousel.addSlide(this);
    if (this.isServer && this.carousel.slides.length > 0) {
      this.renderer.setStyle(this.el, "display", "none");
    }
  }
  ngOnDestroy() {
    this.carousel.removeSlide(this);
  }
  /** @nocollapse */
  static \u0275fac = function SlickItemDirective_Factory(t) {
    return new (t || _SlickItemDirective)();
  };
  /** @nocollapse */
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _SlickItemDirective,
    selectors: [["", "ngxSlickItem", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SlickItemDirective, [{
    type: Directive,
    args: [{
      selector: "[ngxSlickItem]",
      standalone: false
    }]
  }], null, null);
})();
var SlickCarouselModule = class _SlickCarouselModule {
  /** @nocollapse */
  static \u0275fac = function SlickCarouselModule_Factory(t) {
    return new (t || _SlickCarouselModule)();
  };
  /** @nocollapse */
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _SlickCarouselModule
  });
  /** @nocollapse */
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SlickCarouselModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [SlickCarouselComponent, SlickItemDirective],
      exports: [SlickCarouselComponent, SlickItemDirective]
    }]
  }], null, null);
})();

// src/app/state-website/pages/state-landing-page/state-landing-page.component.ts
var _c04 = (a0) => ({ "background-image": a0 });
function StateLandingPageComponent_app_ias_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-ias-loader");
  }
}
function StateLandingPageComponent_div_37_div_2_div_2_a_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 53);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 54);
    \u0275\u0275element(2, "path", 55)(3, "rect", 56);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bearer_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", bearer_r1 == null ? null : bearer_r1.facebookUrl, \u0275\u0275sanitizeUrl);
  }
}
function StateLandingPageComponent_div_37_div_2_div_2_a_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 53);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 54)(2, "g", 57);
    \u0275\u0275element(3, "path", 58)(4, "path", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "defs")(6, "clipPath", 60);
    \u0275\u0275element(7, "rect", 61);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const bearer_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", bearer_r1 == null ? null : bearer_r1.twitterUrl, \u0275\u0275sanitizeUrl);
  }
}
function StateLandingPageComponent_div_37_div_2_div_2_a_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 53);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 54);
    \u0275\u0275element(2, "path", 62)(3, "rect", 63);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bearer_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", bearer_r1 == null ? null : bearer_r1.instagramUrl, \u0275\u0275sanitizeUrl);
  }
}
function StateLandingPageComponent_div_37_div_2_div_2_a_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 53);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 64);
    \u0275\u0275element(2, "path", 65)(3, "path", 66)(4, "rect", 67);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bearer_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", bearer_r1 == null ? null : bearer_r1.linkedInUrl, \u0275\u0275sanitizeUrl);
  }
}
function StateLandingPageComponent_div_37_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 46)(2, "div", 47);
    \u0275\u0275element(3, "img", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h5", 49);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 50);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 51);
    \u0275\u0275template(9, StateLandingPageComponent_div_37_div_2_div_2_a_9_Template, 4, 1, "a", 52)(10, StateLandingPageComponent_div_37_div_2_div_2_a_10_Template, 8, 1, "a", 52)(11, StateLandingPageComponent_div_37_div_2_div_2_a_11_Template, 4, 1, "a", 52)(12, StateLandingPageComponent_div_37_div_2_div_2_a_12_Template, 5, 1, "a", 52);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const bearer_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", bearer_r1 == null ? null : bearer_r1.bearerProfilePic, \u0275\u0275sanitizeUrl)("alt", bearer_r1 == null ? null : bearer_r1.bearerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bearer_r1 == null ? null : bearer_r1.bearerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bearer_r1 == null ? null : bearer_r1.bearerDesignation);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", bearer_r1 == null ? null : bearer_r1.facebookUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bearer_r1 == null ? null : bearer_r1.twitterUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bearer_r1 == null ? null : bearer_r1.instagramUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bearer_r1 == null ? null : bearer_r1.linkedInUrl);
  }
}
function StateLandingPageComponent_div_37_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43);
    \u0275\u0275template(2, StateLandingPageComponent_div_37_div_2_div_2_Template, 13, 8, "div", 44);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    \u0275\u0275classProp("active", i_r3 === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", group_r2);
  }
}
function StateLandingPageComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35);
    \u0275\u0275template(2, StateLandingPageComponent_div_37_div_2_Template, 3, 3, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 37);
    \u0275\u0275element(4, "span", 38);
    \u0275\u0275elementStart(5, "span", 39);
    \u0275\u0275text(6, "Previous");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 40);
    \u0275\u0275element(8, "span", 41);
    \u0275\u0275elementStart(9, "span", 39);
    \u0275\u0275text(10, "Next");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.groupedBearers);
  }
}
function StateLandingPageComponent_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275element(1, "img", 69);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Upcoming Office Bearers will be published here.");
    \u0275\u0275elementEnd()();
  }
}
function StateLandingPageComponent_div_44_div_1_img_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 78);
  }
}
function StateLandingPageComponent_div_44_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 73)(2, "p", 74);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, StateLandingPageComponent_div_44_div_1_img_5_Template, 1, 0, "img", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h6", 76);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 77);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Published on: ", \u0275\u0275pipeBind2(4, 4, item_r5 == null ? null : item_r5.eventDate, "dd MMMM yyyy"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r5.hasPdf);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r5 == null ? null : item_r5.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5 == null ? null : item_r5.description);
  }
}
function StateLandingPageComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275template(1, StateLandingPageComponent_div_44_div_1_Template, 10, 7, "div", 71);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.filteredItems);
  }
}
function StateLandingPageComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275element(1, "img", 69);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Upcoming events will be published here.");
    \u0275\u0275elementEnd()();
  }
}
function StateLandingPageComponent_div_51_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "div", 82);
    \u0275\u0275element(2, "img", 83);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", item_r6.image, \u0275\u0275sanitizeUrl);
  }
}
function StateLandingPageComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "ngx-slick-carousel", 79, 3);
    \u0275\u0275template(3, StateLandingPageComponent_div_51_div_3_Template, 3, 1, "div", 80);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("config", ctx_r3.galleryslider);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.galleryImages);
  }
}
function StateLandingPageComponent_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275element(1, "img", 69);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Upcoming images will be published here.");
    \u0275\u0275elementEnd()();
  }
}
var StateLandingPageComponent = class _StateLandingPageComponent {
  constructor(http, router, route) {
    this.http = http;
    this.router = router;
    this.route = route;
    this.loading = false;
    this.loading1 = false;
    this.loading2 = false;
    this.officeBearers = [];
    this.groupedBearers = [];
    this.galleryImages = [];
    this.toastMessage = "";
    this.toastType = "primary";
    this.dynamicImageUrl = "assets/images/state-banner.png";
    this.id = null;
    this.activeTab = "event";
    this.allItems = [];
    this.galleryslider = {
      slidesToShow: 3,
      slidesToScroll: 2,
      autoplay: true,
      pauseOnHover: true,
      speed: 600,
      dots: true,
      infinite: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    };
  }
  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      this.id = params.get("id");
      if (this.id) {
        this.loadData(this.id);
        this.loadNews(this.id);
        this.loadGallery(this.id);
      } else {
        this.showToast("Invalid State Association ID", "danger");
        this.router.navigateByUrl("/homepage");
      }
    });
  }
  loadData(id) {
    this.loading = true;
    this.http.get(`${environment.apiUrl}/state-associations/${id}`).subscribe((data) => {
      this.loading = false;
      this.pageData = data.data?.data?.cadre;
      console.log(this.pageData);
      this.officeBearers = (this.pageData?.officeBearer || []).filter((item) => item.isActive === true);
      this.groupItemsByScreenWidth();
      this.filterItems();
    }, (error) => {
      this.loading = false;
      this.showToast("Something Went Wrong", "danger");
      this.router.navigateByUrl("/homepage");
      console.error("Error loading data:", error);
    });
  }
  loadNews(id) {
    this.loading1 = true;
    this.http.get(`${environment.apiUrl}/state-associations/${id}/news`).subscribe((data) => {
      this.loading1 = false;
      this.allItems = (data.data?.data?.latestNewsEvents || []).filter((item) => item.isActive === true);
      this.filterItems();
    }, (error) => {
      this.loading1 = false;
      this.showToast("New Fatch Failed", "danger");
      console.error("Error loading data:", error);
    });
  }
  loadGallery(id) {
    this.loading2 = true;
    this.http.get(`${environment.apiUrl}/state-associations/${id}/gallery`).subscribe((data) => {
      this.loading2 = false;
      this.galleryImages = (data.data?.data?.gallery || []).filter((item) => item.isActive === true);
    }, (error) => {
      this.loading2 = false;
      this.showToast("Gallery Fatch Failed", "danger");
      console.error("Error loading data:", error);
    });
  }
  onResize() {
    this.groupItemsByScreenWidth();
  }
  groupItemsByScreenWidth() {
    const isMobile = window.innerWidth < 992;
    const groupSize = isMobile ? 2 : 4;
    this.groupedBearers = [];
    for (let i = 0; i < this.officeBearers.length; i += groupSize) {
      this.groupedBearers.push(this.officeBearers.slice(i, i + groupSize));
    }
  }
  // setTab(tab: 'news' | 'event') {
  //   this.activeTab = tab;
  //   this.filterItems();
  // }
  filterItems() {
    this.filteredItems = this.allItems.filter((item) => item.eventType === this.activeTab);
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
  static {
    this.\u0275fac = function StateLandingPageComponent_Factory(t) {
      return new (t || _StateLandingPageComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StateLandingPageComponent, selectors: [["app-state-landing-page"]], hostBindings: function StateLandingPageComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("resize", function StateLandingPageComponent_resize_HostBindingHandler() {
          return ctx.onResize();
        }, false, \u0275\u0275resolveWindow);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 55, vars: 17, consts: [["noOffice", ""], ["noEvent", ""], ["noUsers", ""], ["slickModal", "slick-carousel"], [4, "ngIf"], [1, "toast-container", "position-fixed", "top-0", "end-0", "p-3"], ["id", "liveToast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true"], [1, "d-flex"], [1, "toast-body"], ["type", "button", "data-bs-dismiss", "toast", "aria-label", "Close", 1, "btn-close", "btn-close-white", "me-2", "m-auto"], [1, "hero-section", "position-relative", "text-white", 3, "ngStyle"], [1, "overlay"], [1, "container", "py-5"], [1, "row", "align-items-center"], [1, "col-md-8", "col-12", "text-center", "text-md-start", "mb-4", "mb-md-0"], [1, "fw-normal"], [1, "fw-bold"], [1, "mb-0"], [1, "col-md-4", "text-center"], ["src", "../../../../assets/images/microsite_logo.png", "alt", "IAS Logo", 1, "img-fluid"], [1, "about-section"], [1, "container"], [1, "row", "align-items-center", "justify-content-center"], [1, "col-md-9", "text-center"], [1, "mb-4"], [1, "office-bearers-section"], [1, "mb-5"], ["id", "officeBearersCarousel", "class", "carousel slide", "data-bs-ride", "carousel", "data-bs-interval", "6000", 4, "ngIf", "ngIfElse"], [1, "news-events-section", "py-5"], [1, "container", "py-4"], ["class", "cardsrow", 4, "ngIf", "ngIfElse"], [1, "gallery-section", "py-5"], [1, "section-title", "mb-4", "ps-3"], [4, "ngIf", "ngIfElse"], ["id", "officeBearersCarousel", "data-bs-ride", "carousel", "data-bs-interval", "6000", 1, "carousel", "slide"], [1, "carousel-inner"], ["class", "carousel-item", 3, "active", 4, "ngFor", "ngForOf"], ["type", "button", "data-bs-target", "#officeBearersCarousel", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#officeBearersCarousel", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "carousel-item"], [1, "row"], ["class", "col-lg-3 col-6 mb-4 mb-lg-0", 4, "ngFor", "ngForOf"], [1, "col-lg-3", "col-6", "mb-4", "mb-lg-0"], [1, "bearer-card", "text-center", "mx-auto"], [1, "bearer-img", "mb-3"], [1, "img-fluid", "rounded-circle", "shadow", 3, "src", "alt"], [1, "bearer-name"], [1, "bearer-role", "mb-3"], [1, "social-icons", "d-flex", "justify-content-center", "gap-3"], ["target", "_blank", 3, "href", 4, "ngIf"], ["target", "_blank", 3, "href"], ["xmlns", "http://www.w3.org/2000/svg", "width", "29", "height", "29", "viewBox", "0 0 29 29", "fill", "none"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M12.3053 14.5261V19.361C12.3053 19.4313 12.3645 19.4863 12.4401 19.4863H14.371C14.4467 19.4863 14.5059 19.4313 14.5059 19.361V14.4466H15.9072C15.9763 14.4466 16.0355 14.3977 16.0421 14.3305L16.177 12.8512C16.1836 12.7779 16.1211 12.7137 16.0421 12.7137H14.5059V11.6624C14.5059 11.4148 14.7197 11.2162 14.9862 11.2162H16.0651C16.1408 11.2162 16.2 11.1611 16.2 11.0909V9.61163C16.2 9.54134 16.1408 9.48633 16.0651 9.48633H14.2395C13.1704 9.48633 12.302 10.2932 12.302 11.2865V12.7137H11.3349C11.2592 12.7137 11.2 12.7687 11.2 12.839V14.3182C11.2 14.3885 11.2592 14.4435 11.3349 14.4435H12.302V14.523L12.3053 14.5261Z", "fill", "#523AB1"], ["x", "0.699997", "y", "0.986328", "width", "27", "height", "27", "rx", "13.5", "stroke", "#523AB1"], ["clip-path", "url(#clip0_52831_3220)"], ["d", "M14.2 0.986328C21.6556 0.986328 27.7 7.03075 27.7 14.4863C27.7 21.9419 21.6556 27.9863 14.2 27.9863C6.74444 27.9863 0.700012 21.9419 0.700012 14.4863C0.700012 7.03075 6.74444 0.986328 14.2 0.986328Z", "stroke", "#523AB1"], ["d", "M15.1514 13.7206L18.8741 9.48633H17.9919L14.7595 13.1629L12.1777 9.48633H9.20001L13.1041 15.046L9.20001 19.4863H10.0822L13.4958 15.6037L16.2223 19.4863H19.2L15.1514 13.7206ZM10.4001 10.1362H11.7551L17.9923 18.866H16.6373L10.4001 10.1362Z", "fill", "#523AB1"], ["id", "clip0_52831_3220"], ["width", "28", "height", "28", "fill", "white", "transform", "translate(0.200012 0.486328)"], ["d", "M16.8298 11.3261C16.506 11.3261 16.2408 11.5885 16.2408 11.9151C16.2408 12.2418 16.5032 12.5042 16.8298 12.5042C17.1565 12.5042 17.4189 12.2418 17.4189 11.9151C17.4189 11.5885 17.1565 11.3261 16.8298 11.3261ZM14.2168 12.0798C12.8544 12.0798 11.7461 13.1882 11.7461 14.5505C11.7461 15.9129 12.8544 17.0212 14.2168 17.0212C15.5791 17.0212 16.6874 15.9129 16.6874 14.5505C16.6874 13.1882 15.5791 12.0798 14.2168 12.0798ZM14.2168 16.1335C13.3429 16.1335 12.6339 15.4244 12.6339 14.5505C12.6339 13.6767 13.3429 12.9676 14.2168 12.9676C15.0906 12.9676 15.7997 13.6767 15.7997 14.5505C15.7997 15.4244 15.0906 16.1335 14.2168 16.1335ZM19.2 12.4986C19.2 10.8347 17.8516 9.48633 16.1877 9.48633H12.2123C10.5484 9.48633 9.20001 10.8347 9.20001 12.4986V16.4741C9.20001 18.1379 10.5484 19.4863 12.2123 19.4863H16.1877C17.8516 19.4863 19.2 18.1379 19.2 16.4741V12.4986ZM18.2564 16.4741C18.2564 17.6159 17.3295 18.5427 16.1877 18.5427H12.2123C11.0705 18.5427 10.1436 17.6159 10.1436 16.4741V12.4986C10.1436 11.3568 11.0705 10.4299 12.2123 10.4299H16.1877C17.3295 10.4299 18.2564 11.3568 18.2564 12.4986V16.4741Z", "fill", "#523AB1"], ["x", "0.700012", "y", "0.986328", "width", "27", "height", "27", "rx", "13.5", "stroke", "#523AB1"], ["xmlns", "http://www.w3.org/2000/svg", "width", "28", "height", "28", "viewBox", "0 0 28 28", "fill", "none"], ["d", "M19 15.0775V18.8303C19 18.9225 18.9295 19 18.8379 19H16.988C16.8999 19 16.8259 18.9262 16.8259 18.8303V15.3395C16.8259 14.4207 16.5123 13.7934 15.7266 13.7934C15.1276 13.7934 14.7717 14.214 14.6131 14.6236C14.5567 14.7712 14.5426 14.9742 14.5426 15.1771V18.8303C14.5426 18.9225 14.4722 19 14.3806 19H12.5307C12.4426 19 12.3686 18.9262 12.3686 18.8303C12.3721 17.9004 12.3897 13.3911 12.3721 12.3284C12.3721 12.2362 12.4426 12.1587 12.5307 12.1587H14.377C14.4651 12.1587 14.5391 12.2325 14.5391 12.3284V13.1292C14.5391 13.1292 14.5285 13.1439 14.525 13.1513H14.5391V13.1292C14.828 12.6642 15.3425 12 16.4947 12C17.9218 12 18.993 12.9779 18.993 15.0775H19ZM9.16209 19H11.012C11.1001 19 11.1741 18.9262 11.1741 18.8303V12.3284C11.1741 12.2362 11.1036 12.1587 11.012 12.1587H9.16209C9.074 12.1587 9 12.2325 9 12.3284V18.8303C9 18.9225 9.07048 19 9.16209 19Z", "fill", "#523AB1"], ["d", "M10 11C10.5523 11 11 10.5523 11 10C11 9.44772 10.5523 9 10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11Z", "fill", "#523AB1"], ["x", "0.5", "y", "0.5", "width", "27", "height", "27", "rx", "13.5", "stroke", "#523AB1"], [1, "text-center", "p-4", "d-flex", "align-items-center", "justify-content-center", "nouser", "flex-column"], ["src", "../../../../assets/icons/empty-img-gray.png", "alt", "empty state"], [1, "cardsrow"], ["class", "news-card", 4, "ngFor", "ngForOf"], [1, "news-card"], [1, "d-flex", "align-items-center", "justify-content-between", "gap-3", "mb-3"], [1, "Published", "mb-0"], ["src", "../../../../assets/images/pdf.png", "alt", "PDF", "class", "pdf-icon ms-2", 4, "ngIf"], [1, "fw-semibold", "text-primary", "mb-3"], [1, "text-muted", "small", "mb-0"], ["src", "../../../../assets/images/pdf.png", "alt", "PDF", 1, "pdf-icon", "ms-2"], [1, "gallery-slider", 3, "config"], ["ngxSlickItem", "", "class", "px-3", 4, "ngFor", "ngForOf"], ["ngxSlickItem", "", 1, "px-3"], [1, "gallery-card"], [1, "gallery-img", 3, "src"]], template: function StateLandingPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, StateLandingPageComponent_app_ias_loader_0_Template, 1, 0, "app-ias-loader", 4);
        \u0275\u0275element(1, "app-accessibility-header")(2, "app-state-header");
        \u0275\u0275elementStart(3, "div", 5)(4, "div", 6)(5, "div", 7)(6, "div", 8);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd();
        \u0275\u0275element(8, "button", 9);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "main")(10, "section", 10);
        \u0275\u0275element(11, "div", 11);
        \u0275\u0275elementStart(12, "div", 12)(13, "div", 13)(14, "div", 14)(15, "h6", 15);
        \u0275\u0275text(16, "Welcome to");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "h2", 16);
        \u0275\u0275text(18, "Indian Administrative Service");
        \u0275\u0275element(19, "br");
        \u0275\u0275text(20, "Association");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "p", 17);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 18);
        \u0275\u0275element(24, "img", 19);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(25, "section", 20)(26, "div", 21)(27, "div", 22)(28, "div", 23)(29, "h3", 24);
        \u0275\u0275text(30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "p", 17);
        \u0275\u0275text(32);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(33, "section", 25)(34, "div", 21)(35, "h3", 26);
        \u0275\u0275text(36, "Office Bearers");
        \u0275\u0275elementEnd();
        \u0275\u0275template(37, StateLandingPageComponent_div_37_Template, 11, 1, "div", 27)(38, StateLandingPageComponent_ng_template_38_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "section", 28)(41, "div", 29)(42, "h3", 24);
        \u0275\u0275text(43, "Latest Events");
        \u0275\u0275elementEnd();
        \u0275\u0275template(44, StateLandingPageComponent_div_44_Template, 2, 1, "div", 30)(45, StateLandingPageComponent_ng_template_45_Template, 4, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "div", 31)(48, "div", 21)(49, "h3", 32);
        \u0275\u0275text(50, "Gallery");
        \u0275\u0275elementEnd();
        \u0275\u0275template(51, StateLandingPageComponent_div_51_Template, 4, 2, "div", 33)(52, StateLandingPageComponent_ng_template_52_Template, 4, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(54, "app-state-footer");
      }
      if (rf & 2) {
        const noOffice_r7 = \u0275\u0275reference(39);
        const noEvent_r8 = \u0275\u0275reference(46);
        const noUsers_r9 = \u0275\u0275reference(53);
        \u0275\u0275property("ngIf", ctx.loading || ctx.loading1 || ctx.loading2);
        \u0275\u0275advance(4);
        \u0275\u0275classMapInterpolate1("toast align-items-center text-bg-", ctx.toastType, " border-0");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.toastMessage, " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(15, _c04, "url(" + (ctx.pageData == null ? null : ctx.pageData.aboutBanner) + ")"));
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate(ctx.pageData == null ? null : ctx.pageData.name);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1(" Indian Administrative Service Association ", ctx.pageData == null ? null : ctx.pageData.name, " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" The IAS Association ", ctx.pageData == null ? null : ctx.pageData.name, " embodies the spirit of the Indian Administrative Service. It promotes excellence, camaraderie, and good governance through welfare initiatives and community outreach, upholding the standards of public service and integrity. ");
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ctx.groupedBearers && ctx.groupedBearers.length > 0)("ngIfElse", noOffice_r7);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.filteredItems && ctx.filteredItems.length > 0)("ngIfElse", noEvent_r8);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.galleryImages && ctx.galleryImages.length > 0)("ngIfElse", noUsers_r9);
      }
    }, dependencies: [StateHeaderComponent, StateFooterComponent, AccessibilityHeaderComponent, CommonModule, NgForOf, NgIf, NgStyle, DatePipe, SlickCarouselModule, SlickCarouselComponent, SlickItemDirective, IasLoaderComponent], styles: ["\n\n.hero-section[_ngcontent-%COMP%] {\n  background-position: center center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative;\n  min-height: 500px;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n}\n.hero-section[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      115deg,\n      rgba(0, 0, 0, 0.6) 30%,\n      rgba(0, 0, 0, 0.6) 100%);\n  z-index: 1;\n}\n.hero-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n.hero-section[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 32px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n}\n.hero-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 48px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n}\n.hero-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 150%;\n}\n@media (max-width: 768px) {\n  .hero-section[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 2rem 1rem;\n  }\n  .hero-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .hero-logo[_ngcontent-%COMP%] {\n    max-width: 140px;\n    margin-bottom: 3rem;\n  }\n  .hero-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n  .hero-section[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    margin-top: 30px;\n    font-size: 1.2rem;\n  }\n  .hero-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n.about-section[_ngcontent-%COMP%] {\n  padding: 120px 0;\n}\n.about-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #523AB1;\n  text-align: center;\n  font-family: Urbanist;\n  font-size: 40px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: normal;\n}\n.about-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #21242c;\n  font-family: Urbanist;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 36px;\n  letter-spacing: -0.1px;\n}\n@media (max-width: 1000px) {\n  .about-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .about-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.office-bearers-section[_ngcontent-%COMP%] {\n  background-color: #fff;\n  margin-bottom: 100px;\n}\n.office-bearers-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #523ab1;\n  font-family: Urbanist;\n  font-size: 40px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: normal;\n}\n.section-title[_ngcontent-%COMP%] {\n  color: #4636d9;\n  font-weight: 600;\n}\n.bearer-card[_ngcontent-%COMP%] {\n  max-width: 260px;\n}\n.bearer-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 180px;\n  object-fit: cover;\n  border: 5px solid #fff;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);\n  transition: transform 0.5s ease;\n}\n.bearer-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  transform-origin: top;\n}\n.bearer-name[_ngcontent-%COMP%] {\n  color: #4636d9;\n  font-weight: 600;\n  margin-bottom: 0.3rem;\n}\n.bearer-role[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 0.95rem;\n}\n.social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #4636d9;\n  font-size: 1.1rem;\n  transition: color 0.3s ease;\n}\n.social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #231f77;\n}\n.carousel-control-prev-icon[_ngcontent-%COMP%], .carousel-control-next-icon[_ngcontent-%COMP%] {\n  filter: invert(0.4);\n}\n#officeBearersCarousel[_ngcontent-%COMP%] {\n  padding: 0 4rem;\n}\n#officeBearersCarousel[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%], #officeBearersCarousel[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%] {\n  width: 3%;\n}\n@media (max-width: 768px) {\n  .bearer-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 120px;\n    height: 120px;\n  }\n  #officeBearersCarousel[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n  #officeBearersCarousel[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%], #officeBearersCarousel[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%] {\n    width: 6%;\n  }\n}\n.news-events-section[_ngcontent-%COMP%] {\n  background-color: #f0edff;\n}\n.news-events-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #523ab1;\n  font-family: Urbanist;\n  font-size: 40px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: normal;\n}\n.btn[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  padding: 0.4rem 1.2rem;\n  font-weight: 500;\n}\n.tabbtn[_ngcontent-%COMP%] {\n  border-radius: 40px;\n  border: 1px solid #523ab1;\n  background: #fff;\n  color: #523ab1;\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 20px;\n  letter-spacing: 0.1px;\n  padding: 8px 16px;\n}\n.tabactive[_ngcontent-%COMP%] {\n  border-radius: 40px;\n  border: 1px solid #e2e2e2;\n  background: #523ab1;\n  color: #fff;\n  transition: all 0.3s ease;\n}\n.cardsrow[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  position: relative;\n  width: 100%;\n  overflow-x: auto;\n}\n.news-card[_ngcontent-%COMP%] {\n  min-width: 350px;\n  border-radius: 16px;\n  padding: 24px;\n  background: #fff;\n}\n.news-card[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: #523ab1;\n  font-family: Urbanist;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: normal;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.news-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: #61646b;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 20px;\n  letter-spacing: 0.07px;\n}\n.pdf-icon[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n}\n.Published[_ngcontent-%COMP%] {\n  color: #212121;\n  font-family: Urbanist;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 20px;\n  letter-spacing: 0.06px;\n}\n@media (max-width: 768px) {\n  .news-card[_ngcontent-%COMP%] {\n    min-width: 250px;\n    border-radius: 12px;\n    padding: 12px;\n  }\n}\n.gallery-section[_ngcontent-%COMP%] {\n  background-color: #fff;\n  margin-bottom: 60px 0 80px 0;\n}\n.gallery-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #523ab1;\n  font-family: Urbanist;\n  font-size: 40px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: normal;\n}\n.gallery-section[_ngcontent-%COMP%]   .gallery-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 230px;\n  object-fit: cover;\n  border-radius: 8px;\n}\n.gallery-section[_ngcontent-%COMP%]     .slick-dots {\n  bottom: -40px;\n}\n.gallery-section[_ngcontent-%COMP%]     .slick-dots li button:before {\n  font-size: 16px;\n}\n/*# sourceMappingURL=state-landing-page.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StateLandingPageComponent, { className: "StateLandingPageComponent", filePath: "src/app/state-website/pages/state-landing-page/state-landing-page.component.ts", lineNumber: 19 });
})();

// src/app/app.routes.ts
var routes = [
  {
    path: "homepage",
    canActivate: [authGuard],
    component: MainPageComponent,
    children: [
      {
        path: "",
        // component:IasHomepageComponent,
        loadComponent: () => import("./chunk-HBAIP5CE.mjs").then((m) => m.IasHomepageComponent)
      },
      {
        path: "about-us",
        // component:IasHomepageComponent,
        loadComponent: () => import("./chunk-CDF77QLV.mjs").then((m) => m.IasAboutusComponent)
      },
      {
        path: "contact-us",
        // component:IasHomepageComponent,
        loadComponent: () => import("./chunk-VBBQDG4C.mjs").then((m) => m.IasContactusComponent)
      },
      {
        path: "community",
        // component:IasHomepageComponent,
        loadComponent: () => import("./chunk-3VVDJS3M.mjs").then((m) => m.IasCommunityComponent)
      },
      {
        path: "my-posts",
        // component:IasHomepageComponent,
        loadComponent: () => import("./chunk-OQB5BTIJ.mjs").then((m) => m.MyPostsComponent)
      },
      {
        path: "post",
        // component:IasHomepageComponent,
        loadComponent: () => import("./chunk-TPKJNF3O.mjs").then((m) => m.PostComponent)
      },
      {
        path: "caruna",
        loadComponent: () => import("./chunk-TB7CHX4V.mjs").then((m) => m.IasCarunaComponent)
      },
      {
        path: "all-members",
        // component:IasHomepageComponent,
        loadComponent: () => import("./chunk-TFUZ57KC.mjs").then((m) => m.AllMembersComponent)
      },
      {
        path: "news-blogs",
        // component:IasHomepageComponent,
        loadComponent: () => import("./chunk-3U73RUWL.mjs").then((m) => m.NewsBlogsComponent)
      },
      {
        path: "good-governance-initiatives",
        // component:IasHomepageComponent,
        loadComponent: () => import("./chunk-IDWBUDXS.mjs").then((m) => m.CaseStudiesComponent)
      },
      {
        path: "read-good-governance-initiatives",
        // component:IasHomepageComponent,
        loadComponent: () => import("./chunk-LOAXCBKG.mjs").then((m) => m.ReadmoreCaseStudiesComponent)
      },
      {
        path: "caruna",
        // component:IasHomepageComponent,
        loadComponent: () => import("./chunk-TB7CHX4V.mjs").then((m) => m.IasCarunaComponent)
      },
      {
        path: "welfare-membership",
        // component:IasHomepageComponent,
        loadComponent: () => import("./chunk-IVUGZXZH.mjs").then((m) => m.WelfareMembershipComponent)
      },
      {
        path: "lifetime-membership",
        // component:IasHomepageComponent,
        loadComponent: () => import("./chunk-R67JGZYW.mjs").then((m) => m.LifetimeMembershipComponent)
      },
      {
        path: "readmorenews",
        // component:IasHomepageComponent,
        loadComponent: () => import("./chunk-6U2SB2BO.mjs").then((m) => m.ReadmoreNewsComponent)
      },
      {
        path: "readmoreblogs",
        // component:IasHomepageComponent,
        loadComponent: () => import("./chunk-2NB5FVQC.mjs").then((m) => m.ReadmoreBlogsComponent)
      },
      {
        path: "membership",
        // component:IasHomepageComponent,
        loadComponent: () => import("./chunk-MMA2KHYG.mjs").then((m) => m.CombinedMemberPageComponent)
      },
      {
        path: "Refund-Cancellation-Policy",
        // component:IasHomepageComponent,
        loadComponent: () => import("./chunk-KASHU57U.mjs").then((m) => m.RefundCancellationPolicyComponent)
      },
      {
        path: "coming-soon",
        // component:IasHomepageComponent,
        loadComponent: () => import("./chunk-S75N2EMA.mjs").then((m) => m.ComingSoonComponent)
      }
    ]
  },
  {
    path: "microsite",
    canActivate: [authGuard],
    // loadChildren: () => import('../app/state-website/pages/state-landing-page/state-landing-page.component').then(m => m.StateLandingPageComponent),
    component: StateLandingPageComponent
  },
  {
    path: "",
    canActivate: [noAuthGuard],
    component: IasLoginComponent
  },
  {
    path: "auth/callback",
    canActivate: [noAuthGuard],
    component: IasLoginComponent
  },
  {
    path: "airpay-demo",
    loadComponent: () => import("./chunk-7HODO25L.mjs").then((m) => m.AirpayDemoComponent)
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
    loadComponent: () => import("./chunk-3HTCWECV.mjs").then((m) => m.DashboardLayoutComponent),
    children: [
      {
        path: "",
        loadComponent: () => import("./chunk-PLKUSCNH.mjs").then((m) => m.DashboardComponent)
      },
      {
        path: "profile",
        loadComponent: () => import("./chunk-PW2VAQ3D.mjs").then((m) => m.ProfileInfoComponent)
      },
      {
        path: "publications",
        loadComponent: () => import("./chunk-UC5HTS7Y.mjs").then((m) => m.PublicationsComponent)
      },
      {
        path: "blogs",
        loadComponent: () => import("./chunk-64S6HKFK.mjs").then((m) => m.BlogsComponent)
      },
      {
        path: "news",
        loadComponent: () => import("./chunk-ZSXTTZSB.mjs").then((m) => m.NewsComponent)
      },
      {
        path: "case-study",
        loadComponent: () => import("./chunk-QXDJO2I2.mjs").then((m) => m.CaseStudiesComponent)
      },
      {
        path: "mom",
        loadComponent: () => import("./chunk-PZAMGHMH.mjs").then((m) => m.MoMComponent)
      },
      {
        path: "feedbacks",
        loadComponent: () => import("./chunk-4R2VS7L2.mjs").then((m) => m.FeedbacksComponent)
      },
      {
        path: "my-transaction",
        loadComponent: () => import("./chunk-ACLH67O3.mjs").then((m) => m.MyTransactionComponent)
      },
      {
        path: "approved-user",
        loadComponent: () => import("./chunk-KMSQE5KI.mjs").then((m) => m.ApprovedUserComponent)
      },
      {
        path: "pending-approval-user",
        loadComponent: () => import("./chunk-5EWTKGXQ.mjs").then((m) => m.NotApprovedUserComponent)
      },
      {
        path: "rejected-user",
        loadComponent: () => import("./chunk-EBR5IP4T.mjs").then((m) => m.RejectedUsersComponent)
      },
      {
        path: "user-info",
        loadComponent: () => import("./chunk-YI26U42T.mjs").then((m) => m.DetailedUserInfoComponent)
      },
      {
        path: "donation",
        loadComponent: () => import("./chunk-SFYFTNSA.mjs").then((m) => m.DonationsComponent)
      }
    ]
  },
  {
    path: "user-home",
    canActivate: [authGuard],
    data: { roles: ["user"], statuses: ["approved"] },
    loadComponent: () => import("./chunk-7IX6WK54.mjs").then((m) => m.UserDashboardComponent),
    children: [
      {
        path: "",
        loadComponent: () => import("./chunk-U52UJLEG.mjs").then((m) => m.UserHomeComponent)
      },
      {
        path: "user-profile",
        loadComponent: () => import("./chunk-PWINDVQQ.mjs").then((m) => m.UserProfileComponent)
      },
      {
        path: "user-events",
        loadComponent: () => import("./chunk-7NPYAIMS.mjs").then((m) => m.UserEventsComponent)
      },
      {
        path: "user-membership",
        loadComponent: () => import("./chunk-PEIO2PI3.mjs").then((m) => m.UserMembershipComponent)
      },
      {
        path: "user-members",
        loadComponent: () => import("./chunk-YIXBK36O.mjs").then((m) => m.UserMembersComponent)
      },
      {
        path: "user-transactions",
        loadComponent: () => import("./chunk-MGOCJKKB.mjs").then((m) => m.MyTransactionsComponent)
      },
      {
        path: "my-donation",
        loadComponent: () => import("./chunk-ZXI64CJO.mjs").then((m) => m.UserDonationsComponent)
      },
      {
        path: "payment-status",
        loadComponent: () => import("./chunk-5BJPGWTV.mjs").then((m) => m.PaymentStatusComponent)
      },
      {
        path: "feedback-consultation",
        loadComponent: () => import("./chunk-H5ESUP52.mjs").then((m) => m.ConsultationComponent)
      },
      {
        path: "view-consultation",
        loadComponent: () => import("./chunk-AA3OPUO4.mjs").then((m) => m.ViewConsultationComponent)
      }
    ]
  },
  {
    path: "state-dashboard",
    canActivate: [authGuard],
    data: { roles: ["state_association_admin"], statuses: ["approved"] },
    loadComponent: () => import("./chunk-2LPFOLIU.mjs").then((m) => m.StateDashboardLayoutComponent),
    children: [
      {
        path: "",
        loadComponent: () => import("./chunk-32I645QP.mjs").then((m) => m.StateAboutUsComponent)
      },
      {
        path: "state-news",
        loadComponent: () => import("./chunk-NJYCPNST.mjs").then((m) => m.StateNewsComponent)
      },
      {
        path: "state-events",
        loadComponent: () => import("./chunk-S2YBRBW4.mjs").then((m) => m.StateEventsComponent)
      },
      {
        path: "state-office-bearers",
        loadComponent: () => import("./chunk-6RO6SFTN.mjs").then((m) => m.StateOfficeBearersComponent)
      },
      {
        path: "state-gallery",
        loadComponent: () => import("./chunk-JMTZLAXK.mjs").then((m) => m.StateGalleryComponent)
      }
    ]
  },
  {
    path: "user-not-aproved",
    data: { statuses: ["created"] },
    loadComponent: () => import("./chunk-3RT36FDJ.mjs").then((m) => m.UserNotApprovedLayoutComponent)
  },
  {
    path: "Terms-Conditions",
    loadComponent: () => import("./chunk-2IQBK7IC.mjs").then((m) => m.TermsConditionsComponent)
  },
  {
    path: "Privacy-Policy",
    loadComponent: () => import("./chunk-6Q6A46WG.mjs").then((m) => m.PrivacyPolicyComponent)
  },
  {
    path: "login",
    redirectTo: "",
    pathMatch: "full"
  },
  {
    path: "login/",
    redirectTo: "",
    pathMatch: "full"
  },
  {
    path: "**",
    // wildcard → catch all unknown routes
    loadComponent: () => import("./chunk-CYZ4VG56.mjs").then((m) => m.RouteErrorComponent)
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
        router.navigateByUrl("");
        return throwError(() => new Error("Refresh token failed"));
      }
    }), catchError(() => {
      localStorage.clear();
      router.navigateByUrl("");
      return throwError(() => new Error("Refresh token failed"));
    }));
  }
  return next(req).pipe(catchError((error) => {
    if (error.status === 401) {
      localStorage.clear();
      router.navigateByUrl("");
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
    const moduleImpl = this.moduleImpl ?? import("./chunk-QGN7DUCC.mjs");
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

// node_modules/@angular/service-worker/fesm2022/service-worker.mjs
var ERR_SW_NOT_SUPPORTED = "Service workers are disabled or not supported by this browser";
function errorObservable(message) {
  return defer(() => throwError(new Error(message)));
}
var NgswCommChannel = class {
  constructor(serviceWorker) {
    this.serviceWorker = serviceWorker;
    if (!serviceWorker) {
      this.worker = this.events = this.registration = errorObservable(ERR_SW_NOT_SUPPORTED);
    } else {
      const controllerChangeEvents = fromEvent(serviceWorker, "controllerchange");
      const controllerChanges = controllerChangeEvents.pipe(map(() => serviceWorker.controller));
      const currentController = defer(() => of(serviceWorker.controller));
      const controllerWithChanges = concat(currentController, controllerChanges);
      this.worker = controllerWithChanges.pipe(filter((c) => !!c));
      this.registration = this.worker.pipe(switchMap(() => serviceWorker.getRegistration()));
      const rawEvents = fromEvent(serviceWorker, "message");
      const rawEventPayload = rawEvents.pipe(map((event) => event.data));
      const eventsUnconnected = rawEventPayload.pipe(filter((event) => event && event.type));
      const events = eventsUnconnected.pipe(publish());
      events.connect();
      this.events = events;
    }
  }
  postMessage(action, payload) {
    return this.worker.pipe(take(1), tap((sw) => {
      sw.postMessage(__spreadValues({
        action
      }, payload));
    })).toPromise().then(() => void 0);
  }
  postMessageWithOperation(type, payload, operationNonce) {
    const waitForOperationCompleted = this.waitForOperationCompleted(operationNonce);
    const postMessage = this.postMessage(type, payload);
    return Promise.all([postMessage, waitForOperationCompleted]).then(([, result]) => result);
  }
  generateNonce() {
    return Math.round(Math.random() * 1e7);
  }
  eventsOfType(type) {
    let filterFn;
    if (typeof type === "string") {
      filterFn = (event) => event.type === type;
    } else {
      filterFn = (event) => type.includes(event.type);
    }
    return this.events.pipe(filter(filterFn));
  }
  nextEventOfType(type) {
    return this.eventsOfType(type).pipe(take(1));
  }
  waitForOperationCompleted(nonce) {
    return this.eventsOfType("OPERATION_COMPLETED").pipe(filter((event) => event.nonce === nonce), take(1), map((event) => {
      if (event.result !== void 0) {
        return event.result;
      }
      throw new Error(event.error);
    })).toPromise();
  }
  get isEnabled() {
    return !!this.serviceWorker;
  }
};
var SwPush = class _SwPush {
  /**
   * True if the Service Worker is enabled (supported by the browser and enabled via
   * `ServiceWorkerModule`).
   */
  get isEnabled() {
    return this.sw.isEnabled;
  }
  constructor(sw) {
    this.sw = sw;
    this.pushManager = null;
    this.subscriptionChanges = new Subject();
    if (!sw.isEnabled) {
      this.messages = NEVER;
      this.notificationClicks = NEVER;
      this.subscription = NEVER;
      return;
    }
    this.messages = this.sw.eventsOfType("PUSH").pipe(map((message) => message.data));
    this.notificationClicks = this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(map((message) => message.data));
    this.pushManager = this.sw.registration.pipe(map((registration) => registration.pushManager));
    const workerDrivenSubscriptions = this.pushManager.pipe(switchMap((pm) => pm.getSubscription()));
    this.subscription = merge(workerDrivenSubscriptions, this.subscriptionChanges);
  }
  /**
   * Subscribes to Web Push Notifications,
   * after requesting and receiving user permission.
   *
   * @param options An object containing the `serverPublicKey` string.
   * @returns A Promise that resolves to the new subscription object.
   */
  requestSubscription(options) {
    if (!this.sw.isEnabled || this.pushManager === null) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    const pushOptions = {
      userVisibleOnly: true
    };
    let key = this.decodeBase64(options.serverPublicKey.replace(/_/g, "/").replace(/-/g, "+"));
    let applicationServerKey = new Uint8Array(new ArrayBuffer(key.length));
    for (let i = 0; i < key.length; i++) {
      applicationServerKey[i] = key.charCodeAt(i);
    }
    pushOptions.applicationServerKey = applicationServerKey;
    return this.pushManager.pipe(switchMap((pm) => pm.subscribe(pushOptions)), take(1)).toPromise().then((sub) => {
      this.subscriptionChanges.next(sub);
      return sub;
    });
  }
  /**
   * Unsubscribes from Service Worker push notifications.
   *
   * @returns A Promise that is resolved when the operation succeeds, or is rejected if there is no
   *          active subscription or the unsubscribe operation fails.
   */
  unsubscribe() {
    if (!this.sw.isEnabled) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    const doUnsubscribe = (sub) => {
      if (sub === null) {
        throw new Error("Not subscribed to push notifications.");
      }
      return sub.unsubscribe().then((success) => {
        if (!success) {
          throw new Error("Unsubscribe failed!");
        }
        this.subscriptionChanges.next(null);
      });
    };
    return this.subscription.pipe(take(1), switchMap(doUnsubscribe)).toPromise();
  }
  decodeBase64(input) {
    return atob(input);
  }
  static {
    this.\u0275fac = function SwPush_Factory(t) {
      return new (t || _SwPush)(\u0275\u0275inject(NgswCommChannel));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _SwPush,
      factory: _SwPush.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwPush, [{
    type: Injectable
  }], () => [{
    type: NgswCommChannel
  }], null);
})();
var SwUpdate = class _SwUpdate {
  /**
   * True if the Service Worker is enabled (supported by the browser and enabled via
   * `ServiceWorkerModule`).
   */
  get isEnabled() {
    return this.sw.isEnabled;
  }
  constructor(sw) {
    this.sw = sw;
    if (!sw.isEnabled) {
      this.versionUpdates = NEVER;
      this.unrecoverable = NEVER;
      return;
    }
    this.versionUpdates = this.sw.eventsOfType(["VERSION_DETECTED", "VERSION_INSTALLATION_FAILED", "VERSION_READY", "NO_NEW_VERSION_DETECTED"]);
    this.unrecoverable = this.sw.eventsOfType("UNRECOVERABLE_STATE");
  }
  /**
   * Checks for an update and waits until the new version is downloaded from the server and ready
   * for activation.
   *
   * @returns a promise that
   * - resolves to `true` if a new version was found and is ready to be activated.
   * - resolves to `false` if no new version was found
   * - rejects if any error occurs
   */
  checkForUpdate() {
    if (!this.sw.isEnabled) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    const nonce = this.sw.generateNonce();
    return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES", {
      nonce
    }, nonce);
  }
  /**
   * Updates the current client (i.e. browser tab) to the latest version that is ready for
   * activation.
   *
   * In most cases, you should not use this method and instead should update a client by reloading
   * the page.
   *
   * <div class="alert is-important">
   *
   * Updating a client without reloading can easily result in a broken application due to a version
   * mismatch between the [application shell](guide/glossary#app-shell) and other page resources,
   * such as [lazy-loaded chunks](guide/glossary#lazy-loading), whose filenames may change between
   * versions.
   *
   * Only use this method, if you are certain it is safe for your specific use case.
   *
   * </div>
   *
   * @returns a promise that
   *  - resolves to `true` if an update was activated successfully
   *  - resolves to `false` if no update was available (for example, the client was already on the
   *    latest version).
   *  - rejects if any error occurs
   */
  activateUpdate() {
    if (!this.sw.isEnabled) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    const nonce = this.sw.generateNonce();
    return this.sw.postMessageWithOperation("ACTIVATE_UPDATE", {
      nonce
    }, nonce);
  }
  static {
    this.\u0275fac = function SwUpdate_Factory(t) {
      return new (t || _SwUpdate)(\u0275\u0275inject(NgswCommChannel));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _SwUpdate,
      factory: _SwUpdate.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwUpdate, [{
    type: Injectable
  }], () => [{
    type: NgswCommChannel
  }], null);
})();
var SCRIPT = new InjectionToken(ngDevMode ? "NGSW_REGISTER_SCRIPT" : "");
function ngswAppInitializer(injector, script, options, platformId) {
  return () => {
    if (!(isPlatformBrowser(platformId) && "serviceWorker" in navigator && options.enabled !== false)) {
      return;
    }
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (navigator.serviceWorker.controller !== null) {
        navigator.serviceWorker.controller.postMessage({
          action: "INITIALIZE"
        });
      }
    });
    let readyToRegister$;
    if (typeof options.registrationStrategy === "function") {
      readyToRegister$ = options.registrationStrategy();
    } else {
      const [strategy, ...args] = (options.registrationStrategy || "registerWhenStable:30000").split(":");
      switch (strategy) {
        case "registerImmediately":
          readyToRegister$ = of(null);
          break;
        case "registerWithDelay":
          readyToRegister$ = delayWithTimeout(+args[0] || 0);
          break;
        case "registerWhenStable":
          readyToRegister$ = !args[0] ? whenStable(injector) : merge(whenStable(injector), delayWithTimeout(+args[0]));
          break;
        default:
          throw new Error(`Unknown ServiceWorker registration strategy: ${options.registrationStrategy}`);
      }
    }
    const ngZone = injector.get(NgZone);
    ngZone.runOutsideAngular(() => readyToRegister$.pipe(take(1)).subscribe(() => navigator.serviceWorker.register(script, {
      scope: options.scope
    }).catch((err) => console.error("Service worker registration failed with:", err))));
  };
}
function delayWithTimeout(timeout) {
  return of(null).pipe(delay(timeout));
}
function whenStable(injector) {
  const appRef = injector.get(ApplicationRef);
  return appRef.isStable.pipe(filter((stable) => stable));
}
function ngswCommChannelFactory(opts, platformId) {
  return new NgswCommChannel(isPlatformBrowser(platformId) && opts.enabled !== false ? navigator.serviceWorker : void 0);
}
var SwRegistrationOptions = class {
};
function provideServiceWorker(script, options = {}) {
  return makeEnvironmentProviders([SwPush, SwUpdate, {
    provide: SCRIPT,
    useValue: script
  }, {
    provide: SwRegistrationOptions,
    useValue: options
  }, {
    provide: NgswCommChannel,
    useFactory: ngswCommChannelFactory,
    deps: [SwRegistrationOptions, PLATFORM_ID]
  }, {
    provide: APP_INITIALIZER,
    useFactory: ngswAppInitializer,
    deps: [Injector, SCRIPT, SwRegistrationOptions, PLATFORM_ID],
    multi: true
  }]);
}
var ServiceWorkerModule = class _ServiceWorkerModule {
  /**
   * Register the given Angular Service Worker script.
   *
   * If `enabled` is set to `false` in the given options, the module will behave as if service
   * workers are not supported by the browser, and the service worker will not be registered.
   */
  static register(script, options = {}) {
    return {
      ngModule: _ServiceWorkerModule,
      providers: [provideServiceWorker(script, options)]
    };
  }
  static {
    this.\u0275fac = function ServiceWorkerModule_Factory(t) {
      return new (t || _ServiceWorkerModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _ServiceWorkerModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: [SwPush, SwUpdate]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceWorkerModule, [{
    type: NgModule,
    args: [{
      providers: [SwPush, SwUpdate]
    }]
  }], null, null);
})();

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
    provideAnimationsAsync(),
    provideServiceWorker("ngsw-worker.js", {
      enabled: !isDevMode(),
      registrationStrategy: "registerWhenStable:30000"
    })
  ]
};

// src/app/app.config.server.ts
var serverConfig = {
  providers: [
    provideServerRendering()
  ]
};
var config = mergeApplicationConfig(appConfig, serverConfig);

// src/main.server.ts
var bootstrap2 = () => bootstrapApplication(AppComponent, config);
var main_server_default = bootstrap2;

export {
  main_server_default
};
/*! Bundled license information:

@angular/platform-browser/fesm2022/animations/async.mjs:
  (**
   * @license Angular v17.3.12
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)

@angular/service-worker/fesm2022/service-worker.mjs:
  (**
   * @license Angular v17.3.12
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)
  (*!
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   *)
*/
//# sourceMappingURL=chunk-W4RJSKIH.mjs.map
