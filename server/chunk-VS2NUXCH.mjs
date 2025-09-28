import './polyfills.server.mjs';
import {
  environment
} from "./chunk-SJMEGSB4.mjs";
import {
  HttpClient
} from "./chunk-324F4CRK.mjs";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-6GREAR27.mjs";
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresolveWindow,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-KVDSLLK3.mjs";
import "./chunk-24VIC3GD.mjs";

// src/app/website/pages/membership/all-members/all-members.component.ts
function AllMembersComponent_ng_container_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "img", 13);
    \u0275\u0275elementStart(2, "h1", 14);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const member_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", member_r1.doptOfficer.profilePic, \u0275\u0275sanitizeUrl)("alt", member_r1.doptOfficer.englishName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r1.doptOfficer.englishName);
  }
}
function AllMembersComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AllMembersComponent_ng_container_17_div_1_Template, 4, 3, "div", 11);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const member_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", member_r1.doptOfficer == null ? null : member_r1.doptOfficer.profilePic);
  }
}
var AllMembersComponent = class _AllMembersComponent {
  constructor(http) {
    this.http = http;
    this.cadres = [];
    this.page = 1;
    this.limit = 10;
    this.total = 0;
    this.loading = false;
  }
  ngOnInit() {
    this.loadCadres();
  }
  loadCadres() {
    if (this.loading)
      return;
    if (this.total && this.cadres.length >= this.total)
      return;
    this.loading = true;
    this.http.get(`${environment.apiUrl}/admin/users?page=${this.page}&limit=${this.limit}&role=user&sortby=isExecutive`).subscribe({
      next: (res) => {
        const newData = res.data?.data || [];
        this.cadres = [...this.cadres, ...newData];
        this.total = +res.data?.pagination?.total || 0;
        this.page++;
        this.loading = false;
      },
      error: (err) => {
        console.error("Error fetching cadres:", err);
        this.loading = false;
      }
    });
  }
  // Trigger loading when near bottom
  onScroll() {
    const scrollPosition = window.innerHeight + window.scrollY;
    const threshold = document.body.offsetHeight - 100;
    if (scrollPosition >= threshold) {
      this.loadCadres();
    }
  }
  static {
    this.\u0275fac = function AllMembersComponent_Factory(t) {
      return new (t || _AllMembersComponent)(\u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AllMembersComponent, selectors: [["app-all-members"]], hostBindings: function AllMembersComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("scroll", function AllMembersComponent_scroll_HostBindingHandler() {
          return ctx.onScroll();
        }, false, \u0275\u0275resolveWindow);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 18, vars: 1, consts: [[1, "main-allmembers-section", 3, "scroll"], [1, "main-gradient"], [1, "container"], [1, "heading-div"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "d-flex", "align-items-center"], [1, "breadcrumb-item", "m-0"], ["href", "/homepage"], ["aria-current", "page", 1, "breadcrumb-item", "active", "m-0"], [1, "all-members-cards"], [4, "ngFor", "ngForOf"], ["class", "membercards", 4, "ngIf"], [1, "membercards"], ["draggable", "false", 3, "src", "alt"], [1, "mt-2"]], template: function AllMembersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275listener("scroll", function AllMembersComponent_Template_div_scroll_0_listener() {
          return ctx.onScroll();
        }, false, \u0275\u0275resolveWindow);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "nav", 4)(5, "ol", 5)(6, "li", 6)(7, "a", 7);
        \u0275\u0275text(8, "Home");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "li", 8);
        \u0275\u0275text(10, "Members");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "h1");
        \u0275\u0275text(12, "Members\u2019 Directory");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "p");
        \u0275\u0275text(14, "Celebrating the People Behind the Profession \u2014 Sharing Moments, Interests, and Stories that Connect Us.");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "div", 2);
        \u0275\u0275template(17, AllMembersComponent_ng_container_17_Template, 2, 1, "ng-container", 10);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(17);
        \u0275\u0275property("ngForOf", ctx.cadres);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf], styles: ['\n\n.main-allmembers-section[_ngcontent-%COMP%] {\n  background-color: #150f22;\n  padding-bottom: 120px;\n}\n.main-gradient[_ngcontent-%COMP%] {\n  background-image: url("./media/internalpages-bg.png");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100% 100%;\n}\n.heading-div[_ngcontent-%COMP%] {\n  padding: 93px 0px;\n}\n.heading-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 48px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: normal;\n}\n.heading-div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  max-width: 700px;\n}\n.all-members-cards[_ngcontent-%COMP%] {\n  margin-top: 70px;\n}\n.all-members-cards[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 20px;\n}\n@media (max-width: 1200px) {\n  .all-members-cards[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 992px) {\n  .all-members-cards[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 576px) {\n  .all-members-cards[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 15px;\n  }\n}\n.membercards[_ngcontent-%COMP%] {\n  border-left: 0.851px solid rgba(255, 255, 255, 0.1921568627);\n  padding: 0px 14px;\n  text-align: left;\n}\n.membercards[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  width: 100%;\n  height: 289.5px;\n}\n.membercards[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.62);\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 110.59%;\n  text-transform: uppercase;\n  margin-top: 18px;\n}\n.membercards[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 22px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 119.097%;\n}\n.membercards[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 138.056%;\n  margin-top: 20px;\n}\n@media (max-width: 576px) {\n  .membercards[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=all-members.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AllMembersComponent, { className: "AllMembersComponent", filePath: "src/app/website/pages/membership/all-members/all-members.component.ts", lineNumber: 13 });
})();
export {
  AllMembersComponent
};
//# sourceMappingURL=chunk-VS2NUXCH.mjs.map
