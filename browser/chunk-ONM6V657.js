import {
  CommonModule,
  NgForOf
} from "./chunk-UGBLWZFH.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-J3GGQSN2.js";
import "./chunk-ASLTLD6L.js";

// src/app/website/pages/membership/all-members/all-members.component.ts
function AllMembersComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "img", 12);
    \u0275\u0275elementStart(2, "h4");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h1");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const member_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", member_r1.img, \u0275\u0275sanitizeUrl)("alt", member_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r1.role);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r1.name);
  }
}
var AllMembersComponent = class _AllMembersComponent {
  constructor() {
    this.members = [
      {
        img: "assets/members/s-krishnan.png",
        role: "President",
        name: "S Krishnan"
      },
      {
        img: "assets/members/sriram.png",
        role: "Vice-President",
        name: "Sriram Taranikanti"
      },
      {
        img: "assets/members/anbarasu.png",
        role: "Vice-President",
        name: "A Anbarasu"
      },
      {
        img: "assets/members/kunal.png",
        role: "Secretary",
        name: "Kunal"
      },
      {
        img: "assets/members/aditi-singh.png",
        role: "Treasurer",
        name: "Aditi Singh"
      },
      {
        img: "assets/members/chinmay-gotmare.png",
        role: "Joint Secretary",
        name: "Chinmay Gotmare"
      },
      {
        img: "assets/members/shelesh-nawal.png",
        role: "Joint Secretary",
        name: "Shelesh Nawal"
      },
      {
        img: "assets/members/sanjay-bandyopadhyay.png",
        role: "Retired Member",
        name: "Sanjay Bandyopadhyay"
      },
      {
        img: "assets/members/sanjay-bhoosreddy.png",
        role: "Retired Member",
        name: "Sanjay Bhoosreddy"
      },
      {
        img: "assets/members/d-thara.png",
        role: "Member",
        name: "D Thara"
      },
      {
        img: "../../../../../assets/members/rahul-singh.png",
        role: "Member",
        name: "Rahul Singh"
      },
      {
        img: "../../../../../assets/members/prasanna.png",
        role: "Member",
        name: "Prasanna R"
      },
      {
        img: "assets/members/nitin-khade.png",
        role: "Member",
        name: "Nitin Khade"
      },
      {
        img: "assets/members/dinesh-kumar.png",
        role: "Member",
        name: "Dinesh Kumar"
      },
      {
        img: "../../../../../assets/members/rohan-chand-thakur.png",
        role: "Member",
        name: "Rohan Chand Thakur"
      },
      {
        img: "../../../../../assets/members/manasi-thakur.png",
        role: "Member",
        name: "Manasi Sahay Thakur"
      },
      {
        img: "../../../../../assets/members/shah-faesal.png",
        role: "Member",
        name: "Shah Faesal"
      },
      {
        img: "../../../../../assets/members/naveen-aggarwal.png",
        role: "Member",
        name: "Naveen Aggarwal"
      }
    ];
  }
  static {
    this.\u0275fac = function AllMembersComponent_Factory(t) {
      return new (t || _AllMembersComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AllMembersComponent, selectors: [["app-all-members"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 18, vars: 1, consts: [[1, "main-allmembers-section"], [1, "main-gradient"], [1, "container"], [1, "heading-div"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "d-flex", "align-items-center"], [1, "breadcrumb-item", "m-0"], ["href", "/homepage"], ["aria-current", "page", 1, "breadcrumb-item", "active", "m-0"], [1, "all-members-cards"], ["class", "membercards", 4, "ngFor", "ngForOf"], [1, "membercards"], [3, "src", "alt"]], template: function AllMembersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "nav", 4)(5, "ol", 5)(6, "li", 6)(7, "a", 7);
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
        \u0275\u0275template(17, AllMembersComponent_div_17_Template, 6, 4, "div", 10);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(17);
        \u0275\u0275property("ngForOf", ctx.members);
      }
    }, dependencies: [CommonModule, NgForOf], styles: ['\n\n.main-allmembers-section[_ngcontent-%COMP%] {\n  background-color: #150f22;\n  padding-bottom: 120px;\n}\n.main-gradient[_ngcontent-%COMP%] {\n  background-image: url("./media/internalpages-bg.png");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100% 100%;\n}\n.heading-div[_ngcontent-%COMP%] {\n  padding: 93px 0px;\n}\n.heading-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 48px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: normal;\n}\n.heading-div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  max-width: 700px;\n}\n.all-members-cards[_ngcontent-%COMP%] {\n  margin-top: 70px;\n}\n.all-members-cards[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 20px;\n}\n@media (max-width: 1200px) {\n  .all-members-cards[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 992px) {\n  .all-members-cards[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 576px) {\n  .all-members-cards[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 15px;\n  }\n}\n.membercards[_ngcontent-%COMP%] {\n  border-left: 0.851px solid rgba(255, 255, 255, 0.1921568627);\n  padding: 0px 14px;\n  text-align: left;\n}\n.membercards[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  width: 100%;\n  height: 289.5px;\n}\n.membercards[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.62);\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 110.59%;\n  text-transform: uppercase;\n  margin-top: 18px;\n}\n.membercards[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 22px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 119.097%;\n}\n.membercards[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 138.056%;\n  margin-top: 20px;\n}\n@media (max-width: 576px) {\n  .membercards[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=all-members.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AllMembersComponent, { className: "AllMembersComponent", filePath: "src/app/website/pages/membership/all-members/all-members.component.ts", lineNumber: 11 });
})();
export {
  AllMembersComponent
};
//# sourceMappingURL=chunk-ONM6V657.js.map
