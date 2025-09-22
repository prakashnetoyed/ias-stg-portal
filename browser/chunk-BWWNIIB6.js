import {
  UserService
} from "./chunk-355F23O5.js";
import {
  environment
} from "./chunk-WYW2S4QW.js";
import {
  HttpClient
} from "./chunk-BK4FBNP4.js";
import {
  CommonModule,
  DatePipe,
  NgIf
} from "./chunk-OG7DO3XM.js";
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PY442ZFB.js";
import "./chunk-ASLTLD6L.js";

// src/app/user-portal/pages/user-membership/user-membership.component.ts
function UserMembershipComponent_ng_container_0_p_24_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ctx_r0.validTill, "dd MMM yyyy"), " ");
  }
}
function UserMembershipComponent_ng_container_0_p_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275template(1, UserMembershipComponent_ng_container_0_p_24_ng_container_1_Template, 3, 4, "ng-container", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const lifetimeTpl_r2 = \u0275\u0275reference(26);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.validTill !== "lifetime")("ngIfElse", lifetimeTpl_r2);
  }
}
function UserMembershipComponent_ng_container_0_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Lifetime ");
  }
}
function UserMembershipComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0, 8);
    \u0275\u0275elementStart(1, "div", 9)(2, "h5");
    \u0275\u0275text(3, "Membership");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 10)(5, "div", 11)(6, "h4")(7, "span", 12);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " Membership");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 13);
    \u0275\u0275text(11, "Active");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(12, "hr");
    \u0275\u0275elementStart(13, "div", 14)(14, "div", 15)(15, "div", 16)(16, "p");
    \u0275\u0275text(17, " Member Since: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 16)(22, "p");
    \u0275\u0275text(23, " Valid Till: ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, UserMembershipComponent_ng_container_0_p_24_Template, 2, 2, "p", 17)(25, UserMembershipComponent_ng_container_0_ng_template_25_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 18)(28, "div", 16)(29, "p");
    \u0275\u0275text(30, " Fee Paid : ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(31, "svg", 19)(32, "title", 20);
    \u0275\u0275text(33, "Success");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "desc", 21);
    \u0275\u0275text(35, "Green circle with small white tick");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "circle", 22)(37, "path", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(38, "div", 16)(39, "p");
    \u0275\u0275text(40, " Membership ID: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 24);
    \u0275\u0275text(42, "IASCA8195653213");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r0.user == null ? null : ctx_r0.user.subscriptionType, "");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 3, ctx_r0.user == null ? null : ctx_r0.user.memberShipStartedAt, "dd MMM yyyy"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.validTill);
  }
}
function UserMembershipComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0, 8);
    \u0275\u0275elementStart(1, "div", 26)(2, "h5");
    \u0275\u0275text(3, "Choose Membership");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 27)(5, "div", 28)(6, "div", 29)(7, "div", 30)(8, "h5", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 32)(10, "mask", 33);
    \u0275\u0275element(11, "rect", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "g", 35);
    \u0275\u0275element(13, "path", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(14, " Lifetime Membership ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "p", 37);
    \u0275\u0275text(16, "One-time fee \u20B9500");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "ul", 38)(18, "li");
    \u0275\u0275text(19, "\u2714 Retired members eligible\n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li");
    \u0275\u0275text(21, "\u2714 Permanent association membership");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "li");
    \u0275\u0275text(23, "\u2714 One-time fee only");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "li");
    \u0275\u0275text(25, "\u2714 No renewals required");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "button", 39);
    \u0275\u0275listener("click", function UserMembershipComponent_ng_container_1_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.paymentbtn("lifetime"));
    });
    \u0275\u0275text(27, "Pay Now");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 28)(29, "div", 29)(30, "div", 30)(31, "h5", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(32, "svg", 40)(33, "mask", 41);
    \u0275\u0275element(34, "rect", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "g", 43);
    \u0275\u0275element(36, "path", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "path", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275text(38, " Tenure Membership ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(39, "p", 37);
    \u0275\u0275text(40, "\u20B91,000 per posting");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "ul", 38)(42, "li");
    \u0275\u0275text(43, "\u2714 For NCT Delhi-posted members only");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "li");
    \u0275\u0275text(45, "\u2714 Free from yearly renewal hassle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "li");
    \u0275\u0275text(47, "\u2714 Great for multi-year commitment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "li");
    \u0275\u0275text(49, "\u2714 Valid for chosen period");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "button", 39);
    \u0275\u0275listener("click", function UserMembershipComponent_ng_container_1_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.paymentbtn("tenure"));
    });
    \u0275\u0275text(51, "Pay Now");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "div", 28)(53, "div", 29)(54, "div", 30)(55, "h5", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(56, "svg", 32)(57, "mask", 46);
    \u0275\u0275element(58, "rect", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "g", 48);
    \u0275\u0275element(60, "path", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(61, " Annual Membership ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(62, "p", 37);
    \u0275\u0275text(63, "\u20B9200 Annually");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "ul", 38)(65, "li");
    \u0275\u0275text(66, "\u2714 For members posted in NCR Delhi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "li");
    \u0275\u0275text(68, "\u2714 Renewable every year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "li");
    \u0275\u0275text(70, "\u2714 Affordable way to stay connected");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "li");
    \u0275\u0275text(72, "\u2714 Membership benefits for one full year");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(73, "button", 39);
    \u0275\u0275listener("click", function UserMembershipComponent_ng_container_1_Template_button_click_73_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.paymentbtn("annual"));
    });
    \u0275\u0275text(74, "Pay Now");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
}
var UserMembershipComponent = class _UserMembershipComponent {
  constructor(http, userService) {
    this.http = http;
    this.userService = userService;
    this.user = null;
    this.hasSubscription = null;
  }
  ngOnInit() {
    this.userService.getUser().subscribe((user) => {
      this.user = user;
      console.log("user in home", this.user);
      this.hasSubscription = user?.hasSubscription || false;
      if (this.user?.subscriptionType === "annual" && this.user?.memberShipStartedAt) {
        const start = new Date(this.user.memberShipStartedAt);
        const expiry = new Date(start);
        expiry.setFullYear(start.getFullYear() + 1);
        this.validTill = expiry.toISOString();
      } else if (this.user?.subscriptionType === "lifetime") {
        this.validTill = "lifetime";
      } else {
        this.validTill = null;
      }
    });
  }
  paymentbtn(value) {
    console.log("Button clicked with value:", value);
    const url = `${window.location.origin}/user-home/payment-status`;
    const payload = {
      memberShip: value,
      clientUrl: url
    };
    this.http.post(`${environment.apiUrl}/orders/initiate`, payload).subscribe({
      next: (res) => {
        console.log(res);
        const paymentUrl = res.data.data;
        window.open(paymentUrl, "_self");
      },
      error: (err) => {
        console.error("Error fetching Events:", err);
      }
    });
  }
  static {
    this.\u0275fac = function UserMembershipComponent_Factory(t) {
      return new (t || _UserMembershipComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(UserService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserMembershipComponent, selectors: [["app-user-membership"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 2, consts: [["lifetimeTpl", ""], ["class", "mt-5", 4, "ngIf"], ["id", "paycommingsoon", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", "p-4"], [1, "modal-body"], ["id", "exampleModalLabel", 1, "modal-title", "fs-5", "mb-4"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-custom", "mt-5"], [1, "mt-5"], [1, "d-flex", "flex-wrap", "justify-content-between", "align-items-center", "mb-4", "headingmembership"], [1, "membershipcard"], [1, "d-flex", "align-items-center", "gap-3", "mb-4"], [1, "Camelcase"], [1, "badge"], [1, "row", "details"], [1, "col-lg-6", "col-xl-4"], [1, "d-flex", "align-items-center", "gap-1", "mb-3"], [4, "ngIf"], [1, "col-lg-6", "col-xl-7"], ["xmlns", "http://www.w3.org/2000/svg", "width", "32", "height", "32", "viewBox", "0 0 48 48", "role", "img", "aria-labelledby", "checkTitle checkDesc"], ["id", "checkTitle"], ["id", "checkDesc"], ["cx", "24", "cy", "24", "r", "22", "fill", "#28a745"], ["d", "M18 24l4 4 10-10", "fill", "none", "stroke", "#ffffff", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "ms-1"], [4, "ngIf", "ngIfElse"], [1, "mb-4", "headingmembership"], [1, "row", "g-4", "justify-content-center"], [1, "col-lg-4"], [1, "pricing-card", "p-3"], [1, "p-2", "p-xl-4"], [1, "d-flex", "align-items-center", "gap-2", "mb-2"], ["xmlns", "http://www.w3.org/2000/svg", "width", "26", "height", "26", "viewBox", "0 0 26 26", "fill", "none"], ["id", "mask0_52315_5944", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "26", "height", "26", 2, "mask-type", "alpha"], ["x", "0.380859", "y", "0.462402", "width", "25.2971", "height", "25.2971", "fill", "#D9D9D9"], ["mask", "url(#mask0_52315_5944)"], ["d", "M6.17811 18.908C4.56191 18.908 3.19165 18.3458 2.06733 17.2215C0.943017 16.0972 0.380859 14.7269 0.380859 13.1107C0.380859 11.4945 0.943017 10.1243 2.06733 8.99995C3.19165 7.87563 4.56191 7.31348 6.17811 7.31348C6.82811 7.31348 7.45175 7.42766 8.04904 7.65604C8.64634 7.88442 9.18214 8.20942 9.65646 8.63103L11.4483 10.2648L9.86727 11.6878L8.2335 10.2121C7.95242 9.96616 7.63621 9.77292 7.28486 9.63238C6.93351 9.49184 6.56459 9.42157 6.17811 9.42157C5.1592 9.42157 4.28961 9.7817 3.56935 10.502C2.84908 11.2222 2.48895 12.0918 2.48895 13.1107C2.48895 14.1296 2.84908 14.9992 3.56935 15.7195C4.28961 16.4398 5.1592 16.7999 6.17811 16.7999C6.56459 16.7999 6.93351 16.7296 7.28486 16.5891C7.63621 16.4485 7.95242 16.2553 8.2335 16.0094L16.4024 8.63103C16.8767 8.20942 17.4125 7.88442 18.0098 7.65604C18.6071 7.42766 19.2307 7.31348 19.8807 7.31348C21.4969 7.31348 22.8672 7.87563 23.9915 8.99995C25.1158 10.1243 25.678 11.4945 25.678 13.1107C25.678 14.7269 25.1158 16.0972 23.9915 17.2215C22.8672 18.3458 21.4969 18.908 19.8807 18.908C19.2307 18.908 18.6071 18.7938 18.0098 18.5654C17.4125 18.337 16.8767 18.012 16.4024 17.5904L14.6105 15.9567L16.1915 14.5337L17.8253 16.0094C18.1064 16.2553 18.4226 16.4485 18.774 16.5891C19.1253 16.7296 19.4942 16.7999 19.8807 16.7999C20.8996 16.7999 21.7692 16.4398 22.4895 15.7195C23.2097 14.9992 23.5699 14.1296 23.5699 13.1107C23.5699 12.0918 23.2097 11.2222 22.4895 10.502C21.7692 9.7817 20.8996 9.42157 19.8807 9.42157C19.4942 9.42157 19.1253 9.49184 18.774 9.63238C18.4226 9.77292 18.1064 9.96616 17.8253 10.2121L9.65646 17.5904C9.18214 18.012 8.64634 18.337 8.04904 18.5654C7.45175 18.7938 6.82811 18.908 6.17811 18.908Z", "fill", "black"], [1, "pricing-price", "mb-4"], [1, "text-start"], [1, "btn", "btn-custom", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "29", "height", "29", "viewBox", "0 0 29 29", "fill", "none"], ["id", "mask0_52315_6232", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "29", "height", "29", 2, "mask-type", "alpha"], ["x", "0.354492", "y", "0.462402", "width", "27.6708", "height", "27.6708", "fill", "#D9D9D9"], ["mask", "url(#mask0_52315_6232)"], ["d", "M14.19 24.6743C12.7681 24.6743 11.4278 24.4004 10.1691 23.8528C8.91048 23.3051 7.81037 22.5605 6.8688 21.6189C5.92722 20.6774 5.18261 19.5773 4.63495 18.3186C4.0873 17.06 3.81348 15.7197 3.81348 14.2977C3.81348 13.4522 3.90956 12.6307 4.10171 11.8333C4.29387 11.0358 4.5725 10.2864 4.9376 9.58501C5.3027 8.88364 5.73987 8.2303 6.24909 7.625C6.75831 7.0197 7.32998 6.47685 7.9641 5.99645L15.8042 13.8365L14.19 15.4507L7.9641 9.22472C7.38762 9.91649 6.93605 10.6899 6.60938 11.545C6.28271 12.4001 6.11938 13.3177 6.11938 14.2977C6.11938 16.5267 6.90723 18.4291 8.48293 20.0048C10.0586 21.5805 11.961 22.3684 14.19 22.3684C16.4191 22.3684 18.3214 21.5805 19.8971 20.0048C21.4728 18.4291 22.2607 16.5267 22.2607 14.2977C22.2607 12.2416 21.6025 10.4689 20.2863 8.97971C18.97 7.49049 17.3222 6.61136 15.343 6.34234V8.53295H13.0371V3.92114H14.19C15.612 3.92114 16.9523 4.19497 18.211 4.74262C19.4696 5.29027 20.5697 6.03489 21.5113 6.97646C22.4529 7.91804 23.1975 9.01815 23.7451 10.2768C24.2928 11.5354 24.5666 12.8757 24.5666 14.2977C24.5666 15.7197 24.2928 17.06 23.7451 18.3186C23.1975 19.5773 22.4529 20.6774 21.5113 21.6189C20.5697 22.5605 19.4696 23.3051 18.211 23.8528C16.9523 24.4004 15.612 24.6743 14.19 24.6743ZM8.42528 15.4507C8.09861 15.4507 7.82479 15.3402 7.6038 15.1192C7.38282 14.8982 7.27233 14.6244 7.27233 14.2977C7.27233 13.971 7.38282 13.6972 7.6038 13.4762C7.82479 13.2552 8.09861 13.1447 8.42528 13.1447C8.75195 13.1447 9.02578 13.2552 9.24676 13.4762C9.46774 13.6972 9.57823 13.971 9.57823 14.2977C9.57823 14.6244 9.46774 14.8982 9.24676 15.1192C9.02578 15.3402 8.75195 15.4507 8.42528 15.4507ZM14.19 21.2154C13.8634 21.2154 13.5895 21.1049 13.3686 20.8839C13.1476 20.663 13.0371 20.3891 13.0371 20.0625C13.0371 19.7358 13.1476 19.462 13.3686 19.241C13.5895 19.02 13.8634 18.9095 14.19 18.9095C14.5167 18.9095 14.7905 19.02 15.0115 19.241C15.2325 19.462 15.343 19.7358 15.343 20.0625C15.343 20.3891 15.2325 20.663 15.0115 20.8839C14.7905 21.1049 14.5167 21.2154 14.19 21.2154ZM19.9548 15.4507C19.6281 15.4507 19.3543 15.3402 19.1333 15.1192C18.9123 14.8982 18.8018 14.6244 18.8018 14.2977C18.8018 13.971 18.9123 13.6972 19.1333 13.4762C19.3543 13.2552 19.6281 13.1447 19.9548 13.1447C20.2815 13.1447 20.5553 13.2552 20.7763 13.4762C20.9972 13.6972 21.1077 13.971 21.1077 14.2977C21.1077 14.6244 20.9972 14.8982 20.7763 15.1192C20.5553 15.3402 20.2815 15.4507 19.9548 15.4507Z", "fill", "white"], ["d", "M13.0035 23.4872C11.5815 23.4872 10.2412 23.2134 8.98259 22.6658C7.72396 22.1181 6.62385 21.3735 5.68227 20.4319C4.7407 19.4904 3.99608 18.3902 3.44843 17.1316C2.90078 15.873 2.62695 14.5327 2.62695 13.1107C2.62695 12.2652 2.72303 11.4437 2.91519 10.6463C3.10735 9.8488 3.38598 9.09938 3.75108 8.398C4.11618 7.69662 4.55334 7.04328 5.06256 6.43799C5.57178 5.83269 6.14345 5.28984 6.77758 4.80944L14.6176 12.6495L13.0035 14.2636L6.77758 8.0377C6.2011 8.72948 5.74953 9.50291 5.42286 10.358C5.09619 11.2131 4.93285 12.1307 4.93285 13.1107C4.93285 15.3397 5.7207 17.2421 7.2964 18.8178C8.8721 20.3935 10.7745 21.1813 13.0035 21.1813C15.2325 21.1813 17.1349 20.3935 18.7106 18.8178C20.2863 17.2421 21.0742 15.3397 21.0742 13.1107C21.0742 11.0546 20.416 9.28193 19.0997 7.7927C17.7835 6.30347 16.1357 5.42435 14.1565 5.15533V7.34593H11.8506V2.73413H13.0035C14.4255 2.73413 15.7658 3.00796 17.0244 3.55561C18.2831 4.10326 19.3832 4.84787 20.3247 5.78945C21.2663 6.73103 22.0109 7.83113 22.5586 9.08977C23.1062 10.3484 23.3801 11.6887 23.3801 13.1107C23.3801 14.5327 23.1062 15.873 22.5586 17.1316C22.0109 18.3902 21.2663 19.4904 20.3247 20.4319C19.3832 21.3735 18.2831 22.1181 17.0244 22.6658C15.7658 23.2134 14.4255 23.4872 13.0035 23.4872ZM7.23876 14.2636C6.91209 14.2636 6.63826 14.1531 6.41728 13.9322C6.1963 13.7112 6.08581 13.4374 6.08581 13.1107C6.08581 12.784 6.1963 12.5102 6.41728 12.2892C6.63826 12.0682 6.91209 11.9577 7.23876 11.9577C7.56543 11.9577 7.83925 12.0682 8.06023 12.2892C8.28122 12.5102 8.39171 12.784 8.39171 13.1107C8.39171 13.4374 8.28122 13.7112 8.06023 13.9322C7.83925 14.1531 7.56543 14.2636 7.23876 14.2636ZM13.0035 20.0284C12.6768 20.0284 12.403 19.9179 12.182 19.6969C11.9611 19.4759 11.8506 19.2021 11.8506 18.8754C11.8506 18.5488 11.9611 18.2749 12.182 18.054C12.403 17.833 12.6768 17.7225 13.0035 17.7225C13.3302 17.7225 13.604 17.833 13.825 18.054C14.046 18.2749 14.1565 18.5488 14.1565 18.8754C14.1565 19.2021 14.046 19.4759 13.825 19.6969C13.604 19.9179 13.3302 20.0284 13.0035 20.0284ZM18.7683 14.2636C18.4416 14.2636 18.1678 14.1531 17.9468 13.9322C17.7258 13.7112 17.6153 13.4374 17.6153 13.1107C17.6153 12.784 17.7258 12.5102 17.9468 12.2892C18.1678 12.0682 18.4416 11.9577 18.7683 11.9577C19.0949 11.9577 19.3688 12.0682 19.5897 12.2892C19.8107 12.5102 19.9212 12.784 19.9212 13.1107C19.9212 13.4374 19.8107 13.7112 19.5897 13.9322C19.3688 14.1531 19.0949 14.2636 18.7683 14.2636Z", "fill", "black"], ["id", "mask0_52315_6272", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "26", "height", "26", 2, "mask-type", "alpha"], ["x", "0.328125", "y", "0.612549", "width", "25.2971", "height", "25.2971", "fill", "#D9D9D9"], ["mask", "url(#mask0_52315_6272)"], ["d", "M5.38965 23.0107C4.83965 23.0107 4.36882 22.8149 3.97715 22.4232C3.58548 22.0316 3.38965 21.5607 3.38965 21.0107V7.01074C3.38965 6.46074 3.58548 5.98991 3.97715 5.59824C4.36882 5.20658 4.83965 5.01074 5.38965 5.01074H6.38965V3.01074H8.38965V5.01074H16.3896V3.01074H18.3896V5.01074H19.3897C19.9396 5.01074 20.4105 5.20658 20.8022 5.59824C21.1938 5.98991 21.3897 6.46074 21.3897 7.01074V13.3857L19.3897 15.3857V11.0107H5.38965V21.0107H11.5896L13.5896 23.0107H5.38965ZM5.38965 9.01074H19.3897V7.01074H5.38965V9.01074ZM16.9396 23.5107L13.3896 19.9607L14.7896 18.5607L16.9146 20.6857L21.1646 16.4357L22.5646 17.8607L16.9396 23.5107Z", "fill", "black"]], template: function UserMembershipComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, UserMembershipComponent_ng_container_0_Template, 43, 6, "ng-container", 1)(1, UserMembershipComponent_ng_container_1_Template, 75, 0, "ng-container", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h1", 6);
        \u0275\u0275text(7, "Coming Soon!");
        \u0275\u0275elementEnd();
        \u0275\u0275text(8, " This option isn't live yet, but we're working hard to bring it to you. Check back shortly for updates! ");
        \u0275\u0275elementStart(9, "button", 7);
        \u0275\u0275text(10, "\u2705 Got It");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.hasSubscription === true);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.hasSubscription === false);
      }
    }, dependencies: [CommonModule, NgIf, DatePipe], styles: ["\n\n.headingmembership[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #211b3a;\n  font-family: Urbanist;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 28px;\n}\n.membershipcard[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  background: #fff;\n  padding: 20px;\n  padding-bottom: 60px;\n}\n.membershipcard[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #211b3a;\n  font-family: Urbanist;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 28px;\n  margin-bottom: 0;\n}\n.membershipcard[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  background: #d3ffb3;\n  padding: 4px 12px;\n  color: #3c9718;\n  font-family: Urbanist;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: var(--Line-Heights-10, 20px);\n  letter-spacing: var(--Letter-Spacing-4, 0.25px);\n}\n.membershipcard[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  color: black;\n  opacity: 0.14;\n}\n.details[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.78);\n  font-family: Urbanist;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 28px;\n}\n.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #000;\n  font-family: Urbanist;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 28px;\n  margin-bottom: 0;\n  min-width: 140px;\n}\n.pricing-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.pricing-card[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  min-width: 20px;\n}\n.pricing-card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #000;\n  text-align: center;\n  font-family: Urbanist;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 39.943px;\n  letter-spacing: -0.067px;\n}\n.pricing-price[_ngcontent-%COMP%] {\n  color: #000;\n  font-family: Urbanist;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  letter-spacing: -0.067px;\n}\n.pricing-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin-bottom: 20px;\n  color: rgba(0, 0, 0, 0.78);\n  font-family: Urbanist;\n  font-size: 15px;\n  font-style: normal;\n  font-weight: 400;\n  letter-spacing: -0.067px;\n}\n.pricing-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 12px 0;\n}\n.btn-custom[_ngcontent-%COMP%] {\n  background-color: #715CC3;\n  color: #FFF;\n  text-align: center;\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  width: 100%;\n  border-radius: 4px;\n}\n.btn-custom[_ngcontent-%COMP%]:hover {\n  background-color: #6846db;\n  color: #fff;\n}\n/*# sourceMappingURL=user-membership.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserMembershipComponent, { className: "UserMembershipComponent", filePath: "src/app/user-portal/pages/user-membership/user-membership.component.ts", lineNumber: 14 });
})();
export {
  UserMembershipComponent
};
//# sourceMappingURL=chunk-BWWNIIB6.js.map
