import {
  UserService
} from "./chunk-6NFBHM2A.js";
import {
  ToastService
} from "./chunk-SHX5MJZM.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-7ZIVIMRB.js";
import "./chunk-WYW2S4QW.js";
import "./chunk-X4DCRH7W.js";
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PY442ZFB.js";
import "./chunk-ASLTLD6L.js";

// src/app/common/user-sidebar/user-sidebar.component.ts
var _c0 = () => ({ exact: true });
var UserSidebarComponent = class _UserSidebarComponent {
  constructor(router, toastService) {
    this.router = router;
    this.toastService = toastService;
  }
  goHome() {
    if (this.router.url === "/user-home") {
      this.toastService.showToast("You are already on Home page", "success");
    } else {
      this.router.navigateByUrl("/user-home");
    }
  }
  static {
    this.\u0275fac = function UserSidebarComponent_Factory(t) {
      return new (t || _UserSidebarComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserSidebarComponent, selectors: [["app-user-sidebar"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 53, vars: 15, consts: [[1, "main-side-bar-component", "d-flex", "flex-column", "justify-content-between"], [1, "top-div"], ["data-bs-toggle", "tooltip", "title", "Click to go Home", 1, "left-logo-div", "d-flex", "align-items-center", "gap-2", "mb-4", 3, "click"], ["src", "../../../assets/logo/ias-small-logo.png", "alt", "epfo-logo", 1, "ll"], [1, "epfo-name-text", "w-100"], [1, "epfo-text", "w-100"], [1, "navigation-div", "mt-2"], [1, "p-0"], ["routerLinkActive", "active", 1, "d-flex", "align-items-center", "gap-2", "nav-option", 3, "routerLink", "routerLinkActiveOptions"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", 1, "dash"], ["d", "M10 3H3V10H10V3Z", "stroke", "#211B3A", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M21 3H14V10H21V3Z", "stroke", "#211B3A", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M21 14H14V21H21V14Z", "stroke", "#211B3A", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M10 14H3V21H10V14Z", "stroke", "#211B3A", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "navigation-text"], ["routerLinkActive", "active", 1, "d-flex", "align-items-center", "gap-2", "mt-2", "nav-option", 3, "routerLink", "routerLinkActiveOptions"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", 1, "nav-svg"], ["clip-path", "url(#clip0_50872_3818)"], ["d", "M12 5.9C13.16 5.9 14.1 6.84 14.1 8C14.1 9.16 13.16 10.1 12 10.1C10.84 10.1 9.9 9.16 9.9 8C9.9 6.84 10.84 5.9 12 5.9ZM12 14.9C14.97 14.9 18.1 16.36 18.1 17V18.1H5.9V17C5.9 16.36 9.03 14.9 12 14.9ZM12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM12 13C9.33 13 4 14.34 4 17V20H20V17C20 14.34 14.67 13 12 13Z", "fill", "#211B3A"], ["id", "clip0_50872_3818"], ["width", "24", "height", "24", "fill", "white"], ["id", "mask0_50872_3825", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "24", "height", "24", 2, "mask-type", "alpha"], ["width", "24", "height", "24", "fill", "#D9D9D9"], ["mask", "url(#mask0_50872_3825)"], ["d", "M5 19V5V9.475V9V19ZM7 13H12.525C12.5583 12.6333 12.6417 12.2833 12.775 11.95C12.9083 11.6167 13.075 11.3 13.275 11H7V13ZM7 17H10.925C11.2083 16.6667 11.5333 16.3958 11.9 16.1875C12.2667 15.9792 12.65 15.8083 13.05 15.675C12.9833 15.575 12.925 15.4667 12.875 15.35C12.825 15.2333 12.7833 15.1167 12.75 15H7V17ZM7 9H17V7H7V9ZM5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V11.45C20.7667 11.0167 20.4833 10.6333 20.15 10.3C19.8167 9.96667 19.4333 9.69167 19 9.475V5H5V19H10.05C10.0333 19.1 10.0208 19.2 10.0125 19.3C10.0042 19.4 10 19.5 10 19.6V21H5ZM17 16C16.3 16 15.7083 15.7583 15.225 15.275C14.7417 14.7917 14.5 14.2 14.5 13.5C14.5 12.8 14.7417 12.2083 15.225 11.725C15.7083 11.2417 16.3 11 17 11C17.7 11 18.2917 11.2417 18.775 11.725C19.2583 12.2083 19.5 12.8 19.5 13.5C19.5 14.2 19.2583 14.7917 18.775 15.275C18.2917 15.7583 17.7 16 17 16ZM12 21V19.6C12 19.2 12.1042 18.8292 12.3125 18.4875C12.5208 18.1458 12.8167 17.9 13.2 17.75C13.8 17.5 14.4208 17.3125 15.0625 17.1875C15.7042 17.0625 16.35 17 17 17C17.65 17 18.2958 17.0625 18.9375 17.1875C19.5792 17.3125 20.2 17.5 20.8 17.75C21.1833 17.9 21.4792 18.1458 21.6875 18.4875C21.8958 18.8292 22 19.2 22 19.6V21H12Z", "fill", "#211B3A"], ["clip-path", "url(#clip0_50872_3834)"], ["d", "M4 6H2V20C2 21.1 2.9 22 4 22H18V20H4V6ZM20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H8V4H20V16ZM10 9H18V11H10V9ZM10 12H14V14H10V12ZM10 6H18V8H10V6Z", "fill", "#211B3A"], ["id", "clip0_50872_3834"], ["id", "mask0_50872_3868", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "24", "height", "24", 2, "mask-type", "alpha"], ["mask", "url(#mask0_50872_3868)"], ["d", "M17.275 20.25L20.75 16.8L19.7 15.75L17.275 18.125L16.3 17.15L15.25 18.225L17.275 20.25ZM6 9H18V7H6V9ZM18 23C16.6167 23 15.4375 22.5125 14.4625 21.5375C13.4875 20.5625 13 19.3833 13 18C13 16.6167 13.4875 15.4375 14.4625 14.4625C15.4375 13.4875 16.6167 13 18 13C19.3833 13 20.5625 13.4875 21.5375 14.4625C22.5125 15.4375 23 16.6167 23 18C23 19.3833 22.5125 20.5625 21.5375 21.5375C20.5625 22.5125 19.3833 23 18 23ZM3 22V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V11.675C20.6833 11.525 20.3583 11.4 20.025 11.3C19.6917 11.2 19.35 11.125 19 11.075V5H5V19.05H11.075C11.1583 19.5667 11.2875 20.0583 11.4625 20.525C11.6375 20.9917 11.8667 21.4333 12.15 21.85L12 22L10.5 20.5L9 22L7.5 20.5L6 22L4.5 20.5L3 22ZM6 17H11.075C11.125 16.65 11.2 16.3083 11.3 15.975C11.4 15.6417 11.525 15.3167 11.675 15H6V17ZM6 13H13.1C13.7333 12.3833 14.4708 11.8958 15.3125 11.5375C16.1542 11.1792 17.05 11 18 11H6V13Z", "fill", "#211B3A"]], template: function UserSidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275listener("click", function UserSidebarComponent_Template_div_click_2_listener() {
          return ctx.goHome();
        });
        \u0275\u0275element(3, "img", 3);
        \u0275\u0275elementStart(4, "div", 4)(5, "h1", 5);
        \u0275\u0275text(6, "Indian Administrative Service ");
        \u0275\u0275element(7, "br");
        \u0275\u0275text(8, "Central Association");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 6)(10, "ul", 7)(11, "li", 8);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(12, "svg", 9);
        \u0275\u0275element(13, "path", 10)(14, "path", 11)(15, "path", 12)(16, "path", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(17, "h1", 14);
        \u0275\u0275text(18, "Home");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "li", 15);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(20, "svg", 16)(21, "g", 17);
        \u0275\u0275element(22, "path", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "defs")(24, "clipPath", 19);
        \u0275\u0275element(25, "rect", 20);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(26, "h1", 14);
        \u0275\u0275text(27, "Events");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "li", 15);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(29, "svg", 16)(30, "mask", 21);
        \u0275\u0275element(31, "rect", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "g", 23);
        \u0275\u0275element(33, "path", 24);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(34, "h1", 14);
        \u0275\u0275text(35, "Membership");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "li", 15);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(37, "svg", 16)(38, "g", 25);
        \u0275\u0275element(39, "path", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "defs")(41, "clipPath", 27);
        \u0275\u0275element(42, "rect", 20);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(43, "h1", 14);
        \u0275\u0275text(44, "Members");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "li", 15);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(46, "svg", 16)(47, "mask", 28);
        \u0275\u0275element(48, "rect", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "g", 29);
        \u0275\u0275element(50, "path", 30);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(51, "h1", 14);
        \u0275\u0275text(52, "My Transactions");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275property("routerLink", "/user-home")("routerLinkActiveOptions", \u0275\u0275pureFunction0(10, _c0));
        \u0275\u0275advance(8);
        \u0275\u0275property("routerLink", "user-events")("routerLinkActiveOptions", \u0275\u0275pureFunction0(11, _c0));
        \u0275\u0275advance(9);
        \u0275\u0275property("routerLink", "user-membership")("routerLinkActiveOptions", \u0275\u0275pureFunction0(12, _c0));
        \u0275\u0275advance(8);
        \u0275\u0275property("routerLink", "user-members")("routerLinkActiveOptions", \u0275\u0275pureFunction0(13, _c0));
        \u0275\u0275advance(9);
        \u0275\u0275property("routerLink", "user-transactions")("routerLinkActiveOptions", \u0275\u0275pureFunction0(14, _c0));
      }
    }, dependencies: [RouterLink, RouterLinkActive, RouterModule], styles: ['\n\n.main-side-bar-component[_ngcontent-%COMP%] {\n  background: var(--White, #FFF);\n  padding: 15px 16px;\n  height: 100vh;\n  min-width: 300px;\n}\n.left-logo-div[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.navigation-text[_ngcontent-%COMP%] {\n  color: var(--Gray-700, #414651);\n  font-family: "Noto Sans";\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 24px;\n  margin-bottom: 0px;\n  transition: all 0.3s ease-in-out;\n}\n.name-text[_ngcontent-%COMP%] {\n  color: var(--Gray-900, #181D27);\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 20px;\n  margin: 0px;\n}\n.uan-number[_ngcontent-%COMP%] {\n  color: var(--Gray-600, #535862);\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 20px;\n  margin: 0px;\n}\n.epfo-text[_ngcontent-%COMP%] {\n  color: #000;\n  font-family: Urbanist;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 22.393px;\n  margin: 0px;\n}\n.nav-option[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n}\n.nav-option[_ngcontent-%COMP%]:hover {\n  border-radius: 4px;\n  background:\n    linear-gradient(\n      130deg,\n      rgba(73, 47, 178, 0.12) -1.74%,\n      rgba(73, 47, 178, 0.07) 125.81%);\n}\n.nav-option[_ngcontent-%COMP%]:hover   .navigation-text[_ngcontent-%COMP%] {\n  background: var(--1, linear-gradient(130deg, #492FB2 -1.74%, rgba(73, 47, 178, 0.61) 125.81%));\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  font-weight: 600;\n}\n.nav-option[_ngcontent-%COMP%]:hover   .nav-svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #492FB2;\n}\n.nav-option[_ngcontent-%COMP%]:hover   .dash[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  stroke: #492FB2;\n}\n.active[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  background:\n    linear-gradient(\n      130deg,\n      rgba(73, 47, 178, 0.12) -1.74%,\n      rgba(73, 47, 178, 0.07) 125.81%);\n}\n.active[_ngcontent-%COMP%]   .navigation-text[_ngcontent-%COMP%] {\n  background: var(--1, linear-gradient(130deg, #492FB2 -1.74%, rgba(73, 47, 178, 0.61) 125.81%));\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  font-weight: 600;\n}\n.active[_ngcontent-%COMP%]   .nav-svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #492FB2;\n}\n.active[_ngcontent-%COMP%]   .dash[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  stroke: #492FB2;\n}\n/*# sourceMappingURL=user-sidebar.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserSidebarComponent, { className: "UserSidebarComponent", filePath: "src/app/common/user-sidebar/user-sidebar.component.ts", lineNumber: 12 });
})();

// src/app/common/user-header/user-header.component.ts
function UserHeaderComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r1.user.doptOfficer == null ? null : ctx_r1.user.doptOfficer.englishName) || "Guest");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.user.role || "Guest");
  }
}
function UserHeaderComponent_ng_container_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "img", 18);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.user.doptOfficer == null ? null : ctx_r1.user.doptOfficer.profilePic, \u0275\u0275sanitizeUrl);
  }
}
function UserHeaderComponent_ng_container_8_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials(ctx_r1.user), " ");
  }
}
function UserHeaderComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, UserHeaderComponent_ng_container_8_ng_container_1_Template, 2, 1, "ng-container", 17)(2, UserHeaderComponent_ng_container_8_ng_template_2_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const initialsBlock_r3 = \u0275\u0275reference(3);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.user.doptOfficer == null ? null : ctx_r1.user.doptOfficer.profilePic)("ngIfElse", initialsBlock_r3);
  }
}
var UserHeaderComponent = class _UserHeaderComponent {
  ngOnInit() {
    this.userService.getUser().subscribe((user) => {
      this.user = user;
    });
  }
  constructor(router, userService) {
    this.router = router;
    this.userService = userService;
    this.dropdownOpen = false;
    this.user = null;
  }
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
  logout() {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }
  getInitials(user) {
    if (!user?.doptOfficer?.englishName)
      return "NA";
    const ignoreList = ["shri", "mr", "mrs", "ms", "dr", "prof", "sir"];
    const names = user.doptOfficer.englishName.trim().split(/\s+/).filter((n) => !ignoreList.includes(n.toLowerCase()));
    if (names.length === 0)
      return "NA";
    let initials = "";
    if (names.length === 1) {
      initials = names[0].substring(0, 2).toUpperCase();
    } else {
      initials = names[0][0].toUpperCase() + names[names.length - 1][0].toUpperCase();
    }
    return initials;
  }
  static {
    this.\u0275fac = function UserHeaderComponent_Factory(t) {
      return new (t || _UserHeaderComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(UserService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserHeaderComponent, selectors: [["app-user-header"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 4, consts: [["toastContainer", ""], ["initialsBlock", ""], [1, "position-fixed", "top-0", "end-0", "p-3", 2, "z-index", "1100"], [1, "main-epfo-header"], [1, "right-side", "d-flex", "align-items-center", "gap-3"], [1, "dropdown"], ["type", "button", "id", "profileDropdown", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "dropdown-toggle", "user-profile", "d-flex", "align-items-center"], ["class", "user-info text-end me-2", 4, "ngIf"], [1, "avatar"], [4, "ngIf"], ["aria-labelledby", "profileDropdown", 1, "dropdown-menu", "dropdown-menu-end"], [1, "dropdown-item", 3, "routerLink"], [1, "dropdown-divider"], [1, "dropdown-item", "text-danger", 2, "cursor", "pointer", 3, "click"], [1, "user-info", "text-end", "me-2"], [1, "name"], [1, "role"], [4, "ngIf", "ngIfElse"], ["alt", "Avatar", "draggable", "false", 3, "src"]], template: function UserHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275element(0, "div", 2, 0);
        \u0275\u0275elementStart(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "button", 6);
        \u0275\u0275template(6, UserHeaderComponent_div_6_Template, 5, 2, "div", 7);
        \u0275\u0275elementStart(7, "div", 8);
        \u0275\u0275template(8, UserHeaderComponent_ng_container_8_Template, 4, 2, "ng-container", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "ul", 10)(10, "li")(11, "a", 11);
        \u0275\u0275text(12, "Profile");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "li")(14, "a", 11);
        \u0275\u0275text(15, "Website");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "li");
        \u0275\u0275element(17, "hr", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "li")(19, "a", 13);
        \u0275\u0275listener("click", function UserHeaderComponent_Template_a_click_19_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.logout());
        });
        \u0275\u0275text(20, "Logout");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.user);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.user);
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLink", "user-profile");
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLink", "");
      }
    }, dependencies: [CommonModule, NgIf, RouterModule, RouterLink], styles: ["\n\n.main-epfo-header[_ngcontent-%COMP%] {\n  background: #FFF;\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  width: 100%;\n  box-shadow: 18px -6px 6px 6px rgb(163, 163, 163);\n}\n.user-info[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  text-align: right;\n}\n.name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #2c2c2c;\n}\n.role[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9e9e9e;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background-color: rgba(126, 87, 194, 0.1);\n  color: #673ab7;\n  font-size: 14px;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  margin-left: 8px;\n  overflow: hidden;\n}\n.avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: top;\n  display: block;\n  border-radius: 50%;\n}\n.btn-check[_ngcontent-%COMP%]:checked    + .btn[_ngcontent-%COMP%], .btn.active[_ngcontent-%COMP%], .btn.show[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:first-child:active, [_ngcontent-%COMP%]:not(.btn-check)    + .btn[_ngcontent-%COMP%]:active {\n  color: var(--bs-btn-active-color);\n  background-color: var(--bs-btn-active-bg);\n  border-color: rgba(255, 255, 255, 0);\n}\n/*# sourceMappingURL=user-header.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserHeaderComponent, { className: "UserHeaderComponent", filePath: "src/app/common/user-header/user-header.component.ts", lineNumber: 14 });
})();

// src/app/user-portal/user-dashboard/user-dashboard.component.ts
var UserDashboardComponent = class _UserDashboardComponent {
  static {
    this.\u0275fac = function UserDashboardComponent_Factory(t) {
      return new (t || _UserDashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserDashboardComponent, selectors: [["app-user-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 0, consts: [[1, "main-after-login-layout"], [1, "side-bar-div"], [1, "view-div", "w-100"], [1, "router-outlet-div", "m-4"]], template: function UserDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-user-sidebar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2);
        \u0275\u0275element(4, "app-user-header");
        \u0275\u0275elementStart(5, "div", 3);
        \u0275\u0275element(6, "router-outlet");
        \u0275\u0275elementEnd()()();
      }
    }, dependencies: [RouterOutlet, UserSidebarComponent, UserHeaderComponent], styles: ["\n\n.main-after-login-layout[_ngcontent-%COMP%] {\n  background: #F4F1FF;\n  display: flex;\n  width: 100%;\n}\n.side-bar-div[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  align-self: flex-start;\n  height: 100vh;\n}\n/*# sourceMappingURL=user-dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserDashboardComponent, { className: "UserDashboardComponent", filePath: "src/app/user-portal/user-dashboard/user-dashboard.component.ts", lineNumber: 15 });
})();
export {
  UserDashboardComponent
};
//# sourceMappingURL=chunk-Z67UDOGI.js.map
