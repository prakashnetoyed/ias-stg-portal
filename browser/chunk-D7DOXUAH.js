import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-RZZFQWGX.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-HLKJWW3L.js";
import {
  environment
} from "./chunk-WYW2S4QW.js";
import {
  HttpClient
} from "./chunk-SF3QATI4.js";
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf,
  isPlatformBrowser
} from "./chunk-DDS5LGCN.js";
import {
  PLATFORM_ID,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
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
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-TPVSKZNW.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-ASLTLD6L.js";

// src/app/website/components/hero-section/hero-section.component.ts
var HeroSectionComponent = class _HeroSectionComponent {
  static {
    this.\u0275fac = function HeroSectionComponent_Factory(t) {
      return new (t || _HeroSectionComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeroSectionComponent, selectors: [["app-hero-section"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 28, vars: 2, consts: [[1, "main-hero-div"], [1, "container", "d-flex", "align-items-center"], [1, "left-heading-div"], [1, "btn", "btn-black", 3, "routerLink"], [1, "right-logo-div", "d-flex", "align-items-center", "justify-content-center"], ["src", "../../../../assets/logo/ias-big-logo.png", "alt", "ias-big logo", "draggable", "false"], [1, "aboutus-main-div"], [1, "left-images-div", "w-50", "position-relative"], ["src", "../../../../assets/images/about-1.png", "alt", "group image", "draggable", "false", 1, "image1"], ["src", "../../../../assets/images/about-2.png", "alt", "presentation image", "draggable", "false", 1, "image2"], ["src", "../../../../assets/images/about-3.png", "alt", "meeting image", "draggable", "false", 1, "image3"], [1, "right-content-div", "w-50"], [1, "btn", "btn-read", 3, "routerLink"]], template: function HeroSectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
        \u0275\u0275text(4, "United by");
        \u0275\u0275element(5, "br");
        \u0275\u0275elementStart(6, "span");
        \u0275\u0275text(7, "the Spirit of Service");
        \u0275\u0275elementEnd();
        \u0275\u0275text(8, ".");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p");
        \u0275\u0275text(10, "A dynamic space where future leaders connect with those who\u2019ve led \u2014 to inspire, guide, and serve the nation together.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "button", 3);
        \u0275\u0275text(12, "Become a Member");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 4);
        \u0275\u0275element(14, "img", 5);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 6)(16, "div", 1)(17, "div", 7);
        \u0275\u0275element(18, "img", 8)(19, "img", 9)(20, "img", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 11)(22, "h2");
        \u0275\u0275text(23, "About Us");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "p");
        \u0275\u0275text(25, " We are a vibrant community of IAS officers working together to inspire leadership, exchange knowledge, and contribute to meaningful change in public service and governance. Together, we strive to strengthen institutions, empower citizens, and create lasting impact for a better society. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "button", 12);
        \u0275\u0275text(27, "Read More");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275property("routerLink", "/signup");
        \u0275\u0275advance(15);
        \u0275\u0275property("routerLink", "/about-us");
      }
    }, dependencies: [RouterModule, RouterLink], styles: ['@charset "UTF-8";\n\n\n\n.main-hero-div[_ngcontent-%COMP%] {\n  background: var(--new, linear-gradient(130deg, #492FB2 -1.74%, #ADADAD 108.02%));\n  padding: 92px 0px;\n  position: relative;\n  z-index: 2;\n}\n.main-hero-div[_ngcontent-%COMP%]::before, .main-hero-div[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 100%;\n  height: 100%;\n  z-index: 0;\n}\n.main-hero-div[_ngcontent-%COMP%]::before {\n  background-image: url("./media/left-rings.png");\n  top: 0%;\n  background-position: left top;\n  z-index: 0;\n}\n.main-hero-div[_ngcontent-%COMP%]::after {\n  background-image: url("./media/right-rings.png");\n  background-position: right top;\n  bottom: 10%;\n  z-index: 0;\n}\n.left-heading-div[_ngcontent-%COMP%] {\n  width: 60%;\n  z-index: 2;\n}\n.left-heading-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.59);\n  font-family: Urbanist;\n  font-size: 56px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  margin: 0px;\n}\n.left-heading-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #FFF;\n  font-family: Urbanist;\n  font-size: 56px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n}\n.left-heading-div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #FFF;\n  font-family: Urbanist;\n  font-size: 22px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 35px;\n  letter-spacing: -0.1px;\n  margin: 35px 0px;\n}\n.right-logo-div[_ngcontent-%COMP%] {\n  width: 40%;\n  z-index: 2;\n}\n.aboutus-main-div[_ngcontent-%COMP%] {\n  background: #150f22;\n  padding: 90px 0;\n}\n.aboutus-main-div[_ngcontent-%COMP%]   .left-images-div[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 400px;\n}\n.aboutus-main-div[_ngcontent-%COMP%]   .left-images-div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 4px solid #150f22;\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);\n  filter: grayscale(100%);\n  transition: filter 0.3s ease, transform 0.3s ease;\n}\n.aboutus-main-div[_ngcontent-%COMP%]   .left-images-div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  filter: grayscale(0%);\n  transform: scale(1.1);\n  z-index: 5;\n}\n.aboutus-main-div[_ngcontent-%COMP%]   .left-images-div[_ngcontent-%COMP%]   .image1[_ngcontent-%COMP%] {\n  width: 280px;\n  height: 280px;\n  top: 0;\n  left: 0;\n  z-index: 3;\n  transform-origin: right;\n  transition: filter 0.3s ease, transform 0.3s ease;\n}\n.aboutus-main-div[_ngcontent-%COMP%]   .left-images-div[_ngcontent-%COMP%]   .image2[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 180px;\n  top: 30px;\n  right: 25%;\n  z-index: 2;\n  transform-origin: left;\n  transition: filter 0.3s ease, transform 0.3s ease;\n}\n.aboutus-main-div[_ngcontent-%COMP%]   .left-images-div[_ngcontent-%COMP%]   .image3[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 180px;\n  bottom: 0;\n  left: 35%;\n  z-index: 1;\n  transform-origin: top;\n  transition: filter 0.3s ease, transform 0.3s ease;\n}\n.aboutus-main-div[_ngcontent-%COMP%]   .right-content-div[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 12px;\n  font-weight: 400;\n}\n.aboutus-main-div[_ngcontent-%COMP%]   .right-content-div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 40px;\n  font-weight: 500;\n}\n.aboutus-main-div[_ngcontent-%COMP%]   .right-content-div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #8d8d8d;\n  text-align: justify;\n  font-family: Urbanist;\n  font-size: 22px;\n  font-weight: 400;\n  line-height: 35px;\n  letter-spacing: -0.1px;\n}\n.btn-read[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: 1px solid #FFF;\n  opacity: 0.71;\n  display: inline-flex;\n  padding: 12px 24px;\n  justify-content: center;\n  align-items: center;\n  color: #FFF;\n  text-align: center;\n  font-family: Urbanist;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: 0.15px;\n  gap: 8px;\n  margin-top: 32px;\n}\n.btn-read[_ngcontent-%COMP%]:hover {\n  border-radius: 4px;\n  border: 1px solid #FFF;\n  opacity: 0.71;\n  display: inline-flex;\n  padding: 12px 24px;\n  justify-content: center;\n  align-items: center;\n  color: #150f22;\n  background-color: #fff;\n  text-align: center;\n  font-family: Urbanist;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: 0.15px;\n  gap: 8px;\n}\n@media (max-width: 1400px) {\n  .left-heading-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .left-heading-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 46px !important;\n  }\n  .left-images-div[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n  .left-images-div[_ngcontent-%COMP%]   .image1[_ngcontent-%COMP%] {\n    width: 280px;\n    height: 280px;\n    top: 0;\n    left: 0;\n    z-index: 3;\n    transform-origin: right;\n    transition: filter 0.3s ease, transform 0.3s ease;\n  }\n  .left-images-div[_ngcontent-%COMP%]   .image2[_ngcontent-%COMP%] {\n    width: 180px;\n    height: 180px;\n    top: 30px;\n    right: 15% !important;\n    z-index: 2;\n    transform-origin: left;\n    transition: filter 0.3s ease, transform 0.3s ease;\n  }\n  .left-images-div[_ngcontent-%COMP%]   .image3[_ngcontent-%COMP%] {\n    width: 180px;\n    height: 180px;\n    bottom: 0;\n    left: 41% !important;\n    z-index: 1;\n    transform-origin: top;\n    transition: filter 0.3s ease, transform 0.3s ease;\n  }\n  .right-content-div[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n}\n@media (max-width: 1199.98px) {\n  .left-heading-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 44px;\n  }\n  .left-heading-div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 30px;\n  }\n  .right-logo-div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .aboutus-main-div[_ngcontent-%COMP%]   .left-images-div[_ngcontent-%COMP%]   .image1[_ngcontent-%COMP%] {\n    width: 220px;\n    height: 220px;\n  }\n  .aboutus-main-div[_ngcontent-%COMP%]   .left-images-div[_ngcontent-%COMP%]   .image2[_ngcontent-%COMP%], .aboutus-main-div[_ngcontent-%COMP%]   .left-images-div[_ngcontent-%COMP%]   .image3[_ngcontent-%COMP%] {\n    width: 170px;\n    height: 170px;\n  }\n  .aboutus-main-div[_ngcontent-%COMP%]   .left-images-div[_ngcontent-%COMP%]   .image3[_ngcontent-%COMP%] {\n    left: 29% !important;\n  }\n  .aboutus-main-div[_ngcontent-%COMP%]   .right-content-div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n  .aboutus-main-div[_ngcontent-%COMP%]   .right-content-div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 30px;\n  }\n}\n@media (max-width: 767.98px) {\n  .main-hero-div[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    gap: 30px;\n  }\n  .left-heading-div[_ngcontent-%COMP%] {\n    width: 100%;\n    order: 2;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .left-heading-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .left-heading-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 36px;\n  }\n  .left-heading-div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 28px;\n  }\n  .right-logo-div[_ngcontent-%COMP%] {\n    width: 100%;\n    order: 1 !important;\n  }\n  .right-logo-div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 60%;\n    max-width: 200px;\n  }\n  .aboutus-main-div[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n  .aboutus-main-div[_ngcontent-%COMP%]   .left-images-div[_ngcontent-%COMP%] {\n    width: 100%;\n    min-height: 350px;\n    margin-bottom: 40px;\n  }\n  .aboutus-main-div[_ngcontent-%COMP%]   .left-images-div[_ngcontent-%COMP%]   .image1[_ngcontent-%COMP%] {\n    width: 180px;\n    height: 180px;\n  }\n  .aboutus-main-div[_ngcontent-%COMP%]   .left-images-div[_ngcontent-%COMP%]   .image2[_ngcontent-%COMP%] {\n    top: -10px !important;\n    right: 0px !important;\n  }\n  .aboutus-main-div[_ngcontent-%COMP%]   .left-images-div[_ngcontent-%COMP%]   .image2[_ngcontent-%COMP%], .aboutus-main-div[_ngcontent-%COMP%]   .left-images-div[_ngcontent-%COMP%]   .image3[_ngcontent-%COMP%] {\n    width: 150px !important;\n    height: 150px !important;\n  }\n  .aboutus-main-div[_ngcontent-%COMP%]   .right-content-div[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .aboutus-main-div[_ngcontent-%COMP%]   .right-content-div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .aboutus-main-div[_ngcontent-%COMP%]   .right-content-div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 28px;\n  }\n  .btn-read[_ngcontent-%COMP%] {\n    padding: 10px 20px;\n    font-size: 14px;\n  }\n}\n@media (max-width: 575.98px) {\n  .left-heading-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .left-heading-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .left-heading-div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 24px;\n  }\n  .right-logo-div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 180px;\n  }\n  .aboutus-main-div[_ngcontent-%COMP%]   .left-images-div[_ngcontent-%COMP%] {\n    min-height: 300px;\n  }\n  .aboutus-main-div[_ngcontent-%COMP%]   .left-images-div[_ngcontent-%COMP%]   .image1[_ngcontent-%COMP%] {\n    width: 150px;\n    height: 150px;\n  }\n  .aboutus-main-div[_ngcontent-%COMP%]   .left-images-div[_ngcontent-%COMP%]   .image2[_ngcontent-%COMP%], .aboutus-main-div[_ngcontent-%COMP%]   .left-images-div[_ngcontent-%COMP%]   .image3[_ngcontent-%COMP%] {\n    width: 100px;\n    height: 100px;\n  }\n  .aboutus-main-div[_ngcontent-%COMP%]   .right-content-div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .aboutus-main-div[_ngcontent-%COMP%]   .right-content-div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 24px;\n  }\n  .btn-read[_ngcontent-%COMP%] {\n    padding: 8px 16px;\n    font-size: 13px;\n  }\n}\n/*# sourceMappingURL=hero-section.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeroSectionComponent, { className: "HeroSectionComponent", filePath: "src/app/website/components/hero-section/hero-section.component.ts", lineNumber: 11 });
})();

// src/app/website/components/ias-community-members/ias-community-members.component.ts
var _c0 = (a0) => ({ offset: a0 });
var _c1 = (a0, a1) => ({ value: a0, params: a1 });
function IasCommunityMembersComponent_div_10_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(member_r2.title);
  }
}
function IasCommunityMembersComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275listener("click", function IasCommunityMembersComponent_div_10_Template_div_click_0_listener() {
      const member_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectMember(member_r2));
    });
    \u0275\u0275elementStart(1, "h4");
    \u0275\u0275template(2, IasCommunityMembersComponent_div_10_span_2_Template, 2, 1, "span", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h1")(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const member_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("@listSlide", \u0275\u0275pureFunction2(8, _c1, ctx_r2.startIndex, \u0275\u0275pureFunction1(6, _c0, ctx_r2.direction === "down" ? 100 : -100)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", member_r2 === ctx_r2.selectedMember);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", member_r2 === ctx_r2.selectedMember);
    \u0275\u0275property("@listSlide", \u0275\u0275pureFunction2(13, _c1, ctx_r2.startIndex, \u0275\u0275pureFunction1(11, _c0, ctx_r2.direction === "down" ? 100 : -100)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r2.name);
  }
}
var IasCommunityMembersComponent = class _IasCommunityMembersComponent {
  constructor() {
    this.members = [
      {
        title: "President",
        name: "S Krishnan",
        image: "assets/members/s-krishnan.png",
        email: "skrishnan@gmail.com",
        linkedin: "https://linkedin.com/in/skrishnan"
      },
      {
        title: "Vice-President 1",
        name: "Sriram Taranikanti",
        image: "assets/members/sriram.png",
        email: "sriram.t@gmail.com",
        linkedin: "https://linkedin.com/in/sriram-taranikanti"
      },
      {
        title: "Vice-President 2",
        name: "A Anbarasu",
        image: "assets/members/anbarasu.png",
        email: "anbarasu@gmail.com",
        linkedin: "https://linkedin.com/in/anbarasu"
      },
      {
        title: "Secretary",
        name: "Kunal",
        image: "assets/members/kunal.png",
        email: "kunal@gmail.com",
        linkedin: "https://linkedin.com/in/kunal"
      },
      {
        title: "Treasurer",
        name: "Aditi Singh",
        image: "assets/members/aditi-singh.png",
        email: "aditi.singh@gmail.com",
        linkedin: "https://linkedin.com/in/aditi-singh"
      },
      {
        title: "JT Secretary 1",
        name: "Chinmay Gotmare",
        image: "assets/members/chinmay-gotmare.png",
        email: "chinmay@gmail.com",
        linkedin: "https://linkedin.com/in/chinmay-gotmare"
      },
      {
        title: "JT Secretary 2",
        name: "Shailesh Nawal",
        image: "assets/members/shelesh-nawal.png",
        email: "shailesh@gmail.com",
        linkedin: "https://linkedin.com/in/shailesh-nawal"
      },
      {
        title: "Retired Member",
        name: "Sanjay Bandyopadhyay",
        image: "assets/members/sanjay-bandyopadhyay.png",
        email: "sanjay.bandyopadhyay@gmail.com",
        linkedin: "https://linkedin.com/in/sanjay-bandyopadhyay"
      },
      {
        title: "Retired Member",
        name: "Sanjay Bhosreddy",
        image: "assets/members/sanjay-bhoosreddy.png",
        email: "sanjay.bhosreddy@gmail.com",
        linkedin: "https://linkedin.com/in/sanjay-bhoosreddy"
      },
      {
        title: "Member",
        name: "D Thara",
        image: "assets/members/d-thara.png",
        email: "d.thara@gmail.com",
        linkedin: "https://linkedin.com/in/d-thara"
      },
      {
        title: "Member",
        name: "Rahul Singh",
        image: "assets/members/rahul-singh.png",
        email: "rahul.singh@gmail.com",
        linkedin: "https://linkedin.com/in/rahul-singh"
      },
      {
        title: "Member",
        name: "Prasanna R",
        image: "assets/members/prasanna.png",
        email: "prasanna.r@gmail.com",
        linkedin: "https://linkedin.com/in/prasanna-r"
      },
      {
        title: "Member",
        name: "Nitin Khade",
        image: "assets/members/nitin-khade.png",
        email: "nitin.khade@gmail.com",
        linkedin: "https://linkedin.com/in/nitin-khade"
      },
      {
        title: "Member",
        name: "Dinesh Kumar",
        image: "assets/members/dinesh-kumar.png",
        email: "dinesh.kumar@gmail.com",
        linkedin: "https://linkedin.com/in/dinesh-kumar"
      },
      {
        title: "Member",
        name: "Rohan Chand Thakur",
        image: "assets/members/rohan-chand-thakur.png",
        email: "rohan.chand.thakur@gmail.com",
        linkedin: "https://linkedin.com/in/rohan-chand-thakur"
      },
      {
        title: "Member",
        name: "Manasi Sahay Thakur",
        image: "assets/members/manasi-thakur.png",
        email: "manasi.sahay.thakur@gmail.com",
        linkedin: "https://linkedin.com/in/manasi-sahay-thakur"
      },
      {
        title: "Member",
        name: "Shah Faesal",
        image: "assets/members/shah-faesal.png",
        email: "shah.faesal@gmail.com",
        linkedin: "https://linkedin.com/in/shah-faesal"
      },
      {
        title: "Member",
        name: "Naveen Aggarwal",
        image: "assets/members/naveen-aggarwal.png",
        email: "naveen.aggarwal@gmail.com",
        linkedin: "https://linkedin.com/in/naveen-aggarwal"
      }
    ];
    this.selectedMember = this.members[0];
    this.startIndex = 0;
    this.visibleCount = 6;
    this.direction = "down";
  }
  selectMember(member) {
    this.selectedMember = member;
  }
  scrollUp() {
    if (this.startIndex > 0) {
      this.direction = "up";
      this.startIndex--;
    }
  }
  scrollDown() {
    if (this.startIndex + this.visibleCount < this.members.length) {
      this.direction = "down";
      this.startIndex++;
    }
  }
  sendMail() {
    window.location.href = "mailto:someone@example.com?subject=Hello&body=I want to connect with you.";
  }
  static {
    this.\u0275fac = function IasCommunityMembersComponent_Factory(t) {
      return new (t || _IasCommunityMembersComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IasCommunityMembersComponent, selectors: [["app-ias-community-members"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 36, vars: 5, consts: [[1, "main-ias-community-div"], [1, "container"], [1, "component-heading-div"], [1, "head-button"], [1, "btn", "btn-mem", 3, "routerLink"], [1, "name-image", "d-flex", "align-items-center", "justify-content-between"], [1, "left-name-designation-div", "d-flex", "flex-column"], ["class", "innerdiv", 3, "click", 4, "ngFor", "ngForOf"], [1, "right-image-div", "d-flex", "align-items-center", "justify-content-end", "gap-3"], [1, "navigation-div", "d-flex", "align-items-center", "flex-column", "gap-4"], [1, "arrow-btn", 3, "click", "disabled"], ["xmlns", "http://www.w3.org/2000/svg", "width", "21", "height", "13", "viewBox", "0 0 21 13", "fill", "none"], ["d", "M0.912109 10.8791L10.9669 0.934268L20.9118 10.9891L19.1271 12.7543L10.9474 4.48421L2.67732 12.6639L0.912109 10.8791Z", "fill", "#1C1B1F", "fill-opacity", "0.8"], ["d", "M19.1278 0.263842L10.9563 8.52472L10.9475 8.53356L2.67781 0.354302L0.929687 2.12078L10.9669 12.0482L20.8942 2.01099L19.1278 0.263842Z", "fill", "#1C1B1F", "fill-opacity", "0.8", "stroke", "#5D48B3", "stroke-width", "0.025"], [1, "imagecontact-div"], [1, "inneremail-contttt", "position-relative"], ["alt", "member photo", "draggable", "false", 3, "src"], [1, "email-cont-div", "d-flex", "align-items-center", "justify-content-evenly", "w-100"], [1, "linkdln"], ["xmlns", "http://www.w3.org/2000/svg", "width", "21", "height", "20", "viewBox", "0 0 21 20", "fill", "none"], ["d", "M10.5 0L19.55 5.4C19.85 5.58333 20.0833 5.83333 20.25 6.15C20.4167 6.46667 20.5 6.8 20.5 7.15V18C20.5 18.55 20.3042 19.0208 19.9125 19.4125C19.5208 19.8042 19.05 20 18.5 20H2.5C1.95 20 1.47917 19.8042 1.0875 19.4125C0.695833 19.0208 0.5 18.55 0.5 18V7.15C0.5 6.8 0.583333 6.46667 0.75 6.15C0.916667 5.83333 1.15 5.58333 1.45 5.4L10.5 0ZM10.5 11.65L18.3 7L10.5 2.35L2.7 7L10.5 11.65ZM10.5 14L2.5 9.2V18H18.5V9.2L10.5 14Z", "fill", "#1C1B1F"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none"], ["id", "mask0_50787_86", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "24", "height", "24", 2, "mask-type", "alpha"], ["width", "24", "height", "24", "fill", "#D9D9D9"], ["mask", "url(#mask0_50787_86)"], ["d", "M11 17H7C5.61667 17 4.4375 16.5125 3.4625 15.5375C2.4875 14.5625 2 13.3833 2 12C2 10.6167 2.4875 9.4375 3.4625 8.4625C4.4375 7.4875 5.61667 7 7 7H11V9H7C6.16667 9 5.45833 9.29167 4.875 9.875C4.29167 10.4583 4 11.1667 4 12C4 12.8333 4.29167 13.5417 4.875 14.125C5.45833 14.7083 6.16667 15 7 15H11V17ZM8 13V11H16V13H8ZM13 17V15H17C17.8333 15 18.5417 14.7083 19.125 14.125C19.7083 13.5417 20 12.8333 20 12C20 11.1667 19.7083 10.4583 19.125 9.875C18.5417 9.29167 17.8333 9 17 9H13V7H17C18.3833 7 19.5625 7.4875 20.5375 8.4625C21.5125 9.4375 22 10.6167 22 12C22 13.3833 21.5125 14.5625 20.5375 15.5375C19.5625 16.5125 18.3833 17 17 17H13Z", "fill", "#1C1B1F"], [1, "btn", "btn-connect", "w-100", "mt-3", 3, "click"], [1, "innerdiv", 3, "click"], [4, "ngIf"]], template: function IasCommunityMembersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        \u0275\u0275text(5, "Our Members");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "button", 4);
        \u0275\u0275text(7, "See All Members");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 5)(9, "div", 6);
        \u0275\u0275template(10, IasCommunityMembersComponent_div_10_Template, 6, 16, "div", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 8)(12, "div", 9)(13, "button", 10);
        \u0275\u0275listener("click", function IasCommunityMembersComponent_Template_button_click_13_listener() {
          return ctx.scrollUp();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(14, "svg", 11);
        \u0275\u0275element(15, "path", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(16, "button", 10);
        \u0275\u0275listener("click", function IasCommunityMembersComponent_Template_button_click_16_listener() {
          return ctx.scrollDown();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(17, "svg", 11);
        \u0275\u0275element(18, "path", 13);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(19, "div", 14)(20, "div", 15);
        \u0275\u0275element(21, "img", 16);
        \u0275\u0275elementStart(22, "div", 17)(23, "div", 18);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(24, "svg", 19);
        \u0275\u0275element(25, "path", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275text(26, "Email ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(27, "div", 18);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(28, "svg", 21)(29, "mask", 22);
        \u0275\u0275element(30, "rect", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "g", 24);
        \u0275\u0275element(32, "path", 25);
        \u0275\u0275elementEnd()();
        \u0275\u0275text(33, "LinkedIn ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(34, "button", 26);
        \u0275\u0275listener("click", function IasCommunityMembersComponent_Template_button_click_34_listener() {
          return ctx.sendMail();
        });
        \u0275\u0275text(35, "Connect");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275property("routerLink", "/all-members");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.members.slice(ctx.startIndex, ctx.startIndex + ctx.visibleCount));
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", ctx.startIndex === 0);
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", ctx.startIndex + ctx.visibleCount >= ctx.members.length);
        \u0275\u0275advance(5);
        \u0275\u0275property("src", ctx.selectedMember.image, \u0275\u0275sanitizeUrl);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink], styles: ["\n\n.main-ias-community-div[_ngcontent-%COMP%] {\n  padding: 90px 0px;\n}\n@media (max-width: 1024px) {\n  .main-ias-community-div[_ngcontent-%COMP%] {\n    padding: 60px 0px;\n  }\n}\n@media (max-width: 768px) {\n  .main-ias-community-div[_ngcontent-%COMP%] {\n    padding: 40px 0px;\n  }\n}\n@media (max-width: 480px) {\n  .main-ias-community-div[_ngcontent-%COMP%] {\n    padding: 30px 0px;\n  }\n}\n.component-heading-div[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #211b3a;\n  font-family: Urbanist;\n  font-size: 12px;\n  font-weight: 400;\n}\n@media (max-width: 768px) {\n  .component-heading-div[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n}\n@media (max-width: 480px) {\n  .component-heading-div[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 10px;\n    text-align: center;\n  }\n}\n.head-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n.head-button[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #211b3a;\n  font-family: Urbanist;\n  font-size: 40px;\n  font-weight: 600;\n  margin: 0px;\n}\n@media (max-width: 768px) {\n  .head-button[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 28px;\n    margin-bottom: 10px;\n  }\n}\n@media (max-width: 480px) {\n  .head-button[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 22px;\n    text-align: center;\n    width: 100%;\n  }\n}\n.btn-mem[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: 1px solid #000;\n  opacity: 0.71;\n  padding: 12px 24px;\n  font-size: 16px;\n  font-weight: 500;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n}\n@media (max-width: 768px) {\n  .btn-mem[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 10px 20px;\n  }\n}\n@media (max-width: 480px) {\n  .btn-mem[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n.left-name-designation-div[_ngcontent-%COMP%] {\n  width: 60%;\n  overflow-y: auto;\n}\n@media (max-width: 1024px) {\n  .left-name-designation-div[_ngcontent-%COMP%] {\n    order: 2 !important;\n    width: 100% !important;\n    margin-top: 20px;\n    max-height: 220px;\n    overflow-y: auto;\n    scrollbar-width: thin;\n  }\n}\n@media (max-width: 480px) {\n  .left-name-designation-div[_ngcontent-%COMP%] {\n    max-height: 180px;\n  }\n}\n.right-image-div[_ngcontent-%COMP%] {\n  width: 40%;\n  justify-content: flex-end;\n}\n@media (max-width: 1024px) {\n  .right-image-div[_ngcontent-%COMP%] {\n    order: 1;\n    width: 100% !important;\n    justify-content: center !important;\n  }\n}\n.name-image[_ngcontent-%COMP%] {\n  margin-top: 62px;\n  height: 440px;\n  overflow: hidden;\n}\n@media (max-width: 768px) {\n  .name-image[_ngcontent-%COMP%] {\n    flex-direction: column;\n    margin-top: 40px;\n    height: auto;\n    align-items: center;\n    gap: 20px;\n  }\n}\n@media (max-width: 480px) {\n  .name-image[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    gap: 15px;\n  }\n}\n.innerdiv[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n.innerdiv[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #211b3a;\n  font-family: Urbanist;\n  font-size: 16px;\n  font-weight: 400;\n  text-transform: uppercase;\n  width: 20%;\n}\n@media (max-width: 768px) {\n  .innerdiv[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 13px;\n    margin-bottom: 5px;\n    text-align: center;\n  }\n}\n.innerdiv[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: Urbanist;\n  font-size: 42px;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: #b8b6bf;\n  width: 70%;\n  cursor: pointer;\n  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);\n}\n@media (max-width: 1400px) {\n  .innerdiv[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n}\n@media (max-width: 768px) {\n  .innerdiv[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 28px;\n    width: 100%;\n    text-align: center;\n  }\n}\n@media (max-width: 480px) {\n  .innerdiv[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n.innerdiv[_ngcontent-%COMP%]   h1.active[_ngcontent-%COMP%] {\n  font-weight: 600;\n  background:\n    linear-gradient(\n      130deg,\n      #492fb2 -1.74%,\n      rgba(73, 47, 178, 0.61) 125.81%);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.imagecontact-div[_ngcontent-%COMP%] {\n  max-width: 320px;\n  width: 100%;\n}\n.imagecontact-div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  border-radius: 6px;\n}\n@media (max-width: 480px) {\n  .imagecontact-div[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n.email-cont-div[_ngcontent-%COMP%] {\n  border-radius: 0 0 4px 4px;\n  background: #e3e3e3;\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.email-cont-div[_ngcontent-%COMP%]   .linkdln[_ngcontent-%COMP%] {\n  color: #000;\n  font-family: Urbanist;\n  font-size: 15px;\n  font-weight: 400;\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  cursor: pointer;\n  flex: 1 1 45%;\n  justify-content: center;\n}\n@media (max-width: 768px) {\n  .email-cont-div[_ngcontent-%COMP%]   .linkdln[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n@media (max-width: 480px) {\n  .email-cont-div[_ngcontent-%COMP%]   .linkdln[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n}\n.btn-connect[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: 1px solid #5d48b3;\n  background: #5d48b3;\n  padding: 12px 24px;\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0.15px;\n  width: 100%;\n}\n@media (max-width: 768px) {\n  .btn-connect[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 10px 20px;\n  }\n}\n@media (max-width: 480px) {\n  .btn-connect[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.arrow-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 20px;\n  cursor: pointer;\n  padding: 8px 12px;\n  border-radius: 39px;\n  border: 0.5px solid #b3b3b3;\n  transition: color 0.2s;\n}\n.arrow-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: #5d48b3;\n}\n.arrow-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.3;\n  cursor: not-allowed;\n}\n@media (max-width: 480px) {\n  .arrow-btn[_ngcontent-%COMP%] {\n    padding: 5px 8px;\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=ias-community-members.component.css.map */"], data: { animation: [
      trigger("listSlide", [
        transition("* => *", [
          // initial style
          style({ transform: "translateY({{ offset }}%)" }),
          animate("400ms ease-in-out", style({ transform: "translateY(0)" }))
        ], { params: { offset: 100 } })
      ])
    ] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IasCommunityMembersComponent, { className: "IasCommunityMembersComponent", filePath: "src/app/website/components/ias-community-members/ias-community-members.component.ts", lineNumber: 29 });
})();

// src/app/website/components/ias-privileges/ias-privileges.component.ts
var IasPrivilegesComponent = class _IasPrivilegesComponent {
  static {
    this.\u0275fac = function IasPrivilegesComponent_Factory(t) {
      return new (t || _IasPrivilegesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IasPrivilegesComponent, selectors: [["app-ias-privileges"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 68, vars: 1, consts: [[1, "main-prividleges-div"], [1, "container"], [1, "main-heading-div", "mb-5"], [1, "other-privileges"], [1, "privilege"], ["xmlns", "http://www.w3.org/2000/svg", "width", "50", "height", "50", "viewBox", "0 0 50 50", "fill", "none"], ["id", "mask0_234_491", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "50", "height", "50", 2, "mask-type", "alpha"], ["width", "50", "height", "50", "fill", "#D9D9D9"], ["mask", "url(#mask0_234_491)"], ["d", "M24.9997 24.9999C22.708 24.9999 20.7462 24.1839 19.1143 22.552C17.4823 20.9201 16.6663 18.9583 16.6663 16.6666C16.6663 14.3749 17.4823 12.4131 19.1143 10.7812C20.7462 9.14922 22.708 8.33325 24.9997 8.33325C27.2913 8.33325 29.2531 9.14922 30.8851 10.7812C32.517 12.4131 33.333 14.3749 33.333 16.6666C33.333 18.9583 32.517 20.9201 30.8851 22.552C29.2531 24.1839 27.2913 24.9999 24.9997 24.9999ZM8.33301 41.6666V35.8333C8.33301 34.6527 8.63683 33.5676 9.24447 32.578C9.85211 31.5885 10.6594 30.8333 11.6663 30.3124C13.8191 29.236 16.0066 28.4287 18.2288 27.8905C20.4511 27.3523 22.708 27.0833 24.9997 27.0833C27.2913 27.0833 29.5483 27.3523 31.7705 27.8905C33.9927 28.4287 36.1802 29.236 38.333 30.3124C39.34 30.8333 40.1472 31.5885 40.7549 32.578C41.3625 33.5676 41.6663 34.6527 41.6663 35.8333V41.6666H8.33301ZM12.4997 37.4999H37.4997V35.8333C37.4997 35.4513 37.4042 35.1041 37.2132 34.7916C37.0222 34.4791 36.7705 34.236 36.458 34.0624C34.583 33.1249 32.6906 32.4218 30.7809 31.953C28.8712 31.4843 26.9441 31.2499 24.9997 31.2499C23.0552 31.2499 21.1281 31.4843 19.2184 31.953C17.3087 32.4218 15.4163 33.1249 13.5413 34.0624C13.2288 34.236 12.9771 34.4791 12.7861 34.7916C12.5952 35.1041 12.4997 35.4513 12.4997 35.8333V37.4999ZM24.9997 20.8333C26.1455 20.8333 27.1264 20.4253 27.9424 19.6093C28.7584 18.7933 29.1663 17.8124 29.1663 16.6666C29.1663 15.5208 28.7584 14.5398 27.9424 13.7239C27.1264 12.9079 26.1455 12.4999 24.9997 12.4999C23.8538 12.4999 22.8729 12.9079 22.057 13.7239C21.241 14.5398 20.833 15.5208 20.833 16.6666C20.833 17.8124 21.241 18.7933 22.057 19.6093C22.8729 20.4253 23.8538 20.8333 24.9997 20.8333Z", "fill", "white"], ["id", "mask0_90_99", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "50", "height", "50", 2, "mask-type", "alpha"], ["mask", "url(#mask0_90_99)"], ["d", "M37.4997 43.7501L45.833 35.4167L42.9163 32.5001L39.583 35.8334V27.1355H35.4163V35.8334L32.083 32.5001L29.1663 35.4167L37.4997 43.7501ZM29.1663 50.0001V45.8334H45.833V50.0001H29.1663ZM12.4997 41.6667C11.3538 41.6667 10.3729 41.2588 9.55697 40.4428C8.74099 39.6268 8.33301 38.6459 8.33301 37.5001V8.33341C8.33301 7.18758 8.74099 6.20668 9.55697 5.39071C10.3729 4.57473 11.3538 4.16675 12.4997 4.16675H27.083L39.583 16.6667V22.9688H35.4163V18.7501H24.9997V8.33341H12.4997V37.5001H24.9997V41.6667H12.4997Z", "fill", "white"], ["id", "mask0_90_103", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "50", "height", "50", 2, "mask-type", "alpha"], ["mask", "url(#mask0_90_103)"], ["d", "M24.7396 41.6668C24.8785 41.6668 25.0174 41.632 25.1562 41.5626C25.2951 41.4931 25.3993 41.4237 25.4687 41.3543L42.5521 24.2709C42.9688 23.8542 43.2726 23.3855 43.4635 22.8647C43.6545 22.3438 43.75 21.823 43.75 21.3022C43.75 20.7466 43.6545 20.2171 43.4635 19.7136C43.2726 19.2102 42.9688 18.7674 42.5521 18.3855L33.6979 9.53133C33.316 9.11467 32.8733 8.81085 32.3698 8.61987C31.8663 8.4289 31.3368 8.33342 30.7812 8.33342C30.2604 8.33342 29.7396 8.4289 29.2188 8.61987C28.6979 8.81085 28.2292 9.11467 27.8125 9.53133L27.2396 10.1042L31.0938 14.0105C31.6146 14.4966 31.9965 15.0522 32.2396 15.6772C32.4826 16.3022 32.6042 16.9619 32.6042 17.6563C32.6042 19.1147 32.1094 20.3386 31.1198 21.3282C30.1302 22.3178 28.9062 22.8126 27.4479 22.8126C26.7535 22.8126 26.0851 22.6911 25.4427 22.448C24.8003 22.2049 24.2361 21.8404 23.75 21.3542L19.8437 17.5001L10.7292 26.6147C10.625 26.7188 10.5469 26.8317 10.4948 26.9532C10.4427 27.0747 10.4167 27.2049 10.4167 27.3438C10.4167 27.6216 10.5208 27.8733 10.7292 28.099C10.9375 28.3247 11.1806 28.4376 11.4583 28.4376C11.5972 28.4376 11.7361 28.4029 11.875 28.3334C12.0139 28.264 12.1181 28.1945 12.1875 28.1251L19.2708 21.0417L22.1875 23.9584L15.1562 31.0418C15.0521 31.1459 14.974 31.2588 14.9219 31.3803C14.8698 31.5018 14.8437 31.632 14.8437 31.7709C14.8437 32.0487 14.9479 32.2918 15.1562 32.5001C15.3646 32.7084 15.6076 32.8126 15.8854 32.8126C16.0243 32.8126 16.1632 32.7779 16.3021 32.7084C16.441 32.639 16.5451 32.5695 16.6146 32.5001L23.6979 25.4688L26.6146 28.3855L19.5833 35.4688C19.4792 35.5383 19.401 35.6424 19.349 35.7813C19.2969 35.9202 19.2708 36.0591 19.2708 36.198C19.2708 36.4758 19.375 36.7188 19.5833 36.9272C19.7917 37.1355 20.0347 37.2397 20.3125 37.2397C20.4514 37.2397 20.5816 37.2136 20.7031 37.1615C20.8247 37.1095 20.9375 37.0313 21.0417 36.9272L28.125 29.8959L31.0417 32.8126L23.9583 39.8959C23.8542 40.0001 23.776 40.1129 23.724 40.2345C23.6719 40.356 23.6458 40.4862 23.6458 40.6251C23.6458 40.9029 23.7587 41.1459 23.9844 41.3543C24.2101 41.5626 24.4618 41.6668 24.7396 41.6668ZM24.6875 45.8334C23.4028 45.8334 22.2656 45.4081 21.276 44.5574C20.2865 43.7067 19.7049 42.639 19.5312 41.3543C18.3507 41.1806 17.3611 40.6945 16.5625 39.8959C15.7639 39.0973 15.2778 38.1077 15.1042 36.9272C13.9236 36.7536 12.9427 36.2588 12.1615 35.4428C11.3802 34.6268 10.9028 33.6459 10.7292 32.5001C9.40972 32.3265 8.33333 31.7536 7.5 30.7813C6.66667 29.8091 6.25 28.6633 6.25 27.3438C6.25 26.6494 6.38021 25.981 6.64062 25.3386C6.90104 24.6963 7.27431 24.132 7.76042 23.6459L19.8437 11.6147L26.6667 18.4376C26.7361 18.5417 26.8403 18.6199 26.9792 18.672C27.1181 18.724 27.2569 18.7501 27.3958 18.7501C27.7083 18.7501 27.9687 18.6546 28.1771 18.4636C28.3854 18.2727 28.4896 18.0209 28.4896 17.7084C28.4896 17.5695 28.4635 17.4306 28.4115 17.2917C28.3594 17.1529 28.2812 17.0487 28.1771 16.9792L20.7292 9.53133C20.3472 9.11467 19.9045 8.81085 19.401 8.61987C18.8976 8.4289 18.3681 8.33342 17.8125 8.33342C17.2917 8.33342 16.7708 8.4289 16.25 8.61987C15.7292 8.81085 15.2604 9.11467 14.8437 9.53133L7.5 16.9272C7.1875 17.2397 6.92708 17.6042 6.71875 18.0209C6.51042 18.4376 6.37153 18.8542 6.30208 19.2709C6.23264 19.6876 6.23264 20.1129 6.30208 20.547C6.37153 20.981 6.51042 21.389 6.71875 21.7709L3.69792 24.7917C3.10764 23.9931 2.67361 23.1164 2.39583 22.1615C2.11806 21.2067 2.01389 20.2431 2.08333 19.2709C2.15278 18.2987 2.39583 17.3525 2.8125 16.4324C3.22917 15.5122 3.80208 14.6876 4.53125 13.9584L11.875 6.61467C12.7083 5.81605 13.6372 5.20841 14.6615 4.79175C15.6858 4.37508 16.7361 4.16675 17.8125 4.16675C18.8889 4.16675 19.9392 4.37508 20.9635 4.79175C21.9878 5.20841 22.8993 5.81605 23.6979 6.61467L24.2708 7.18758L24.8438 6.61467C25.6771 5.81605 26.6059 5.20841 27.6302 4.79175C28.6545 4.37508 29.7049 4.16675 30.7812 4.16675C31.8576 4.16675 32.908 4.37508 33.9323 4.79175C34.9566 5.20841 35.8681 5.81605 36.6667 6.61467L45.4688 15.4167C46.2674 16.2154 46.875 17.1355 47.2917 18.1772C47.7083 19.2188 47.9167 20.2779 47.9167 21.3542C47.9167 22.4306 47.7083 23.481 47.2917 24.5053C46.875 25.5296 46.2674 26.4411 45.4688 27.2397L28.3854 44.2709C27.8993 44.757 27.3351 45.139 26.6927 45.4168C26.0503 45.6945 25.3819 45.8334 24.6875 45.8334Z", "fill", "white"], [1, "privilege", "border-end-0"], ["id", "mask0_90_107", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "50", "height", "50", 2, "mask-type", "alpha"], ["mask", "url(#mask0_90_107)"], ["d", "M25.0003 45.8334C22.1531 45.8334 19.4621 45.2865 16.9274 44.1928C14.3927 43.099 12.1791 41.606 10.2868 39.7136C8.39442 37.8213 6.90137 35.6077 5.80762 33.073C4.71387 30.5383 4.16699 27.8473 4.16699 25.0001C4.16699 22.1181 4.71387 19.4185 5.80762 16.9011C6.90137 14.3838 8.39442 12.1789 10.2868 10.2865C12.1791 8.39418 14.3927 6.90112 16.9274 5.80737C19.4621 4.71362 22.1531 4.16675 25.0003 4.16675C27.8823 4.16675 30.5819 4.71362 33.0993 5.80737C35.6166 6.90112 37.8215 8.39418 39.7139 10.2865C41.6062 12.1789 43.0993 14.3838 44.193 16.9011C45.2868 19.4185 45.8337 22.1181 45.8337 25.0001C45.8337 27.8473 45.2868 30.5383 44.193 33.073C43.0993 35.6077 41.6062 37.8213 39.7139 39.7136C37.8215 41.606 35.6166 43.099 33.0993 44.1928C30.5819 45.2865 27.8823 45.8334 25.0003 45.8334ZM25.0003 41.5626C25.9031 40.3126 26.6844 39.0105 27.3441 37.6563C28.0038 36.3022 28.542 34.8612 28.9587 33.3334H21.042C21.4587 34.8612 21.9969 36.3022 22.6566 37.6563C23.3163 39.0105 24.0975 40.3126 25.0003 41.5626ZM19.5837 40.7293C18.9587 39.5834 18.4118 38.3942 17.943 37.1615C17.4743 35.9289 17.0837 34.6529 16.7712 33.3334H10.6253C11.6323 35.0695 12.891 36.5799 14.4014 37.8647C15.9118 39.1494 17.6392 40.1043 19.5837 40.7293ZM30.417 40.7293C32.3614 40.1043 34.0889 39.1494 35.5993 37.8647C37.1097 36.5799 38.3684 35.0695 39.3753 33.3334H33.2295C32.917 34.6529 32.5264 35.9289 32.0576 37.1615C31.5889 38.3942 31.042 39.5834 30.417 40.7293ZM8.85449 29.1667H15.9378C15.8337 28.4723 15.7555 27.7865 15.7035 27.1095C15.6514 26.4324 15.6253 25.7292 15.6253 25.0001C15.6253 24.2709 15.6514 23.5678 15.7035 22.8907C15.7555 22.2136 15.8337 21.5279 15.9378 20.8334H8.85449C8.68088 21.5279 8.55067 22.2136 8.46387 22.8907C8.37706 23.5678 8.33366 24.2709 8.33366 25.0001C8.33366 25.7292 8.37706 26.4324 8.46387 27.1095C8.55067 27.7865 8.68088 28.4723 8.85449 29.1667ZM20.1045 29.1667H29.8962C30.0003 28.4723 30.0785 27.7865 30.1305 27.1095C30.1826 26.4324 30.2087 25.7292 30.2087 25.0001C30.2087 24.2709 30.1826 23.5678 30.1305 22.8907C30.0785 22.2136 30.0003 21.5279 29.8962 20.8334H20.1045C20.0003 21.5279 19.9222 22.2136 19.8701 22.8907C19.818 23.5678 19.792 24.2709 19.792 25.0001C19.792 25.7292 19.818 26.4324 19.8701 27.1095C19.9222 27.7865 20.0003 28.4723 20.1045 29.1667ZM34.0628 29.1667H41.1462C41.3198 28.4723 41.45 27.7865 41.5368 27.1095C41.6236 26.4324 41.667 25.7292 41.667 25.0001C41.667 24.2709 41.6236 23.5678 41.5368 22.8907C41.45 22.2136 41.3198 21.5279 41.1462 20.8334H34.0628C34.167 21.5279 34.2451 22.2136 34.2972 22.8907C34.3493 23.5678 34.3753 24.2709 34.3753 25.0001C34.3753 25.7292 34.3493 26.4324 34.2972 27.1095C34.2451 27.7865 34.167 28.4723 34.0628 29.1667ZM33.2295 16.6667H39.3753C38.3684 14.9306 37.1097 13.4202 35.5993 12.1355C34.0889 10.8508 32.3614 9.89592 30.417 9.27092C31.042 10.4167 31.5889 11.606 32.0576 12.8386C32.5264 14.0713 32.917 15.3473 33.2295 16.6667ZM21.042 16.6667H28.9587C28.542 15.139 28.0038 13.698 27.3441 12.3438C26.6844 10.9897 25.9031 9.68758 25.0003 8.43758C24.0975 9.68758 23.3163 10.9897 22.6566 12.3438C21.9969 13.698 21.4587 15.139 21.042 16.6667ZM10.6253 16.6667H16.7712C17.0837 15.3473 17.4743 14.0713 17.943 12.8386C18.4118 11.606 18.9587 10.4167 19.5837 9.27092C17.6392 9.89592 15.9118 10.8508 14.4014 12.1355C12.891 13.4202 11.6323 14.9306 10.6253 16.6667Z", "fill", "white"], ["id", "mainContent", 1, "login-entry-point", "d-flex", "align-items-center", "justify-content-between", "px-5"], [1, "left-cont-div", "w-50"], [1, "btn", "btn-login", 3, "routerLink"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "viewBox", "0 0 18 18", "fill", "none"], ["clip-path", "url(#clip0_50787_5)"], ["d", "M9 3L7.9425 4.0575L12.1275 8.25H3V9.75H12.1275L7.9425 13.9425L9 15L15 9L9 3Z", "fill", "#063887"], ["id", "clip0_50787_5"], ["width", "18", "height", "18", "fill", "white"], [1, "right-image-divlogin", "w-50", "position-relative", "d-flex", "align-items-center", "justify-content-center"], [1, "innerimage-circle"], ["src", "../../../../assets/images/login-ellipse.png", "alt", "inner ellipse", "draggable", "false"], ["src", "../../../../assets/images/coat-man.png", "alt", "coat man", "draggable", "false", 1, "position-absolute", 2, "bottom", "50px"]], template: function IasPrivilegesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
        \u0275\u0275text(4, "Benifits");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1");
        \u0275\u0275text(6, "Privileges of Being a Member");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 3)(8, "div", 4);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(9, "svg", 5)(10, "mask", 6);
        \u0275\u0275element(11, "rect", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "g", 8);
        \u0275\u0275element(13, "path", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(14, "h1");
        \u0275\u0275text(15, "Expert Mentorship");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "p");
        \u0275\u0275text(17, "Guidance from seasoned officers, mentors, and educators throughout your IAS journey.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 4);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(19, "svg", 5)(20, "mask", 10);
        \u0275\u0275element(21, "rect", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "g", 11);
        \u0275\u0275element(23, "path", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(24, "h1");
        \u0275\u0275text(25, "Curated Resources");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "p");
        \u0275\u0275text(27, "Access curated materials, webinars, and real-world insights on governance.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 4);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(29, "svg", 5)(30, "mask", 13);
        \u0275\u0275element(31, "rect", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "g", 14);
        \u0275\u0275element(33, "path", 15);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(34, "h1");
        \u0275\u0275text(35, "Vibrant Community");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "p");
        \u0275\u0275text(37, "Join a purpose-driven network of aspirants, officers, and changemakers.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "div", 16);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(39, "svg", 5)(40, "mask", 17);
        \u0275\u0275element(41, "rect", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "g", 18);
        \u0275\u0275element(43, "path", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(44, "h1");
        \u0275\u0275text(45, "Real-World Impact");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "p");
        \u0275\u0275text(47, "Opportunities to contribute to real projects and grassroots initiatives that shape society");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(48, "div", 20)(49, "div", 21)(50, "h3");
        \u0275\u0275text(51, "Your Gateway to Knowledge,");
        \u0275\u0275element(52, "br");
        \u0275\u0275text(53, " Connections, and Contribution");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "p");
        \u0275\u0275text(55, "Stay updated on key events, access curated insights, and engage with fellow members through your personalized dashboard.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "button", 22);
        \u0275\u0275text(57, "Login to Member Dashboard ");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(58, "svg", 23)(59, "g", 24);
        \u0275\u0275element(60, "path", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "defs")(62, "clipPath", 26);
        \u0275\u0275element(63, "rect", 27);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(64, "div", 28)(65, "div", 29);
        \u0275\u0275element(66, "img", 30);
        \u0275\u0275elementEnd();
        \u0275\u0275element(67, "img", 31);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(56);
        \u0275\u0275property("routerLink", "/login");
      }
    }, dependencies: [CommonModule, RouterModule, RouterLink], styles: ['\n\n.main-prividleges-div[_ngcontent-%COMP%] {\n  background: #150F22;\n  padding: 100px 0px;\n}\n@media (max-width: 1024px) {\n  .main-prividleges-div[_ngcontent-%COMP%] {\n    padding: 80px 0px;\n  }\n}\n@media (max-width: 768px) {\n  .main-prividleges-div[_ngcontent-%COMP%] {\n    padding: 60px 0px;\n  }\n}\n@media (max-width: 480px) {\n  .main-prividleges-div[_ngcontent-%COMP%] {\n    padding: 40px 0px;\n  }\n}\n.main-heading-div[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 12px;\n  font-weight: 400;\n}\n@media (max-width: 480px) {\n  .main-heading-div[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 11px;\n    text-align: center;\n  }\n}\n.main-heading-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 40px;\n  font-weight: 500;\n}\n@media (max-width: 1024px) {\n  .main-heading-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n}\n@media (max-width: 768px) {\n  .main-heading-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 28px;\n    text-align: center;\n  }\n}\n@media (max-width: 480px) {\n  .main-heading-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n.other-privileges[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n}\n@media (max-width: 1024px) {\n  .other-privileges[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .other-privileges[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.other-privileges[_ngcontent-%COMP%]   .privilege[_ngcontent-%COMP%] {\n  border-top: 1px dashed rgba(255, 255, 255, 0.2);\n  border-right: 1px dashed rgba(255, 255, 255, 0.2);\n  padding: 51px 19px 19px 19px;\n}\n@media (max-width: 480px) {\n  .other-privileges[_ngcontent-%COMP%]   .privilege[_ngcontent-%COMP%] {\n    padding: 30px 15px;\n    text-align: center;\n  }\n}\n.other-privileges[_ngcontent-%COMP%]   .privilege[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 22px;\n  font-weight: 500;\n  margin: 30px 0 20px 0;\n}\n@media (max-width: 1024px) {\n  .other-privileges[_ngcontent-%COMP%]   .privilege[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 20px;\n    margin-top: 60px;\n  }\n}\n@media (max-width: 768px) {\n  .other-privileges[_ngcontent-%COMP%]   .privilege[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n.other-privileges[_ngcontent-%COMP%]   .privilege[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #a6a6a6;\n  font-family: Urbanist;\n  font-size: 18px;\n  font-weight: 400;\n}\n@media (max-width: 1024px) {\n  .other-privileges[_ngcontent-%COMP%]   .privilege[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n@media (max-width: 768px) {\n  .other-privileges[_ngcontent-%COMP%]   .privilege[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n.login-entry-point[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 180px;\n  border-radius: 24px;\n  background:\n    linear-gradient(\n      130deg,\n      #492fb2 -1.74%,\n      #adadad 108.02%);\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 1024px) {\n  .login-entry-point[_ngcontent-%COMP%] {\n    flex-direction: column;\n    margin-top: 100px;\n    padding: 0px !important;\n    overflow: hidden;\n  }\n}\n@media (max-width: 768px) {\n  .login-entry-point[_ngcontent-%COMP%] {\n    margin-top: 80px;\n  }\n}\n@media (max-width: 480px) {\n  .login-entry-point[_ngcontent-%COMP%] {\n    margin-top: 60px;\n  }\n}\n.login-entry-point[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 40%;\n  height: 100%;\n  background-image: url("./media/rings-login.png");\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: left top;\n  border-top-left-radius: 24px;\n  border-bottom-left-radius: 24px;\n  z-index: 1;\n}\n@media (max-width: 1024px) {\n  .login-entry-point[_ngcontent-%COMP%]::before {\n    width: 100%;\n    height: 200px;\n    background-position: center;\n    border-radius: 24px 24px 0 0;\n  }\n}\n.login-entry-point[_ngcontent-%COMP%]   .left-cont-div[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  padding: 40px;\n  flex: 1;\n}\n@media (max-width: 768px) {\n  .login-entry-point[_ngcontent-%COMP%]   .left-cont-div[_ngcontent-%COMP%] {\n    width: 100% !important;\n    padding: 20px;\n    text-align: center;\n  }\n}\n.login-entry-point[_ngcontent-%COMP%]   .left-cont-div[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 30px;\n  font-weight: 500;\n  line-height: 36px;\n}\n@media (max-width: 1024px) {\n  .login-entry-point[_ngcontent-%COMP%]   .left-cont-div[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n}\n@media (max-width: 768px) {\n  .login-entry-point[_ngcontent-%COMP%]   .left-cont-div[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n.login-entry-point[_ngcontent-%COMP%]   .left-cont-div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 18px;\n  font-weight: 400;\n}\n@media (max-width: 1024px) {\n  .login-entry-point[_ngcontent-%COMP%]   .left-cont-div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n@media (max-width: 768px) {\n  .login-entry-point[_ngcontent-%COMP%]   .left-cont-div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n@media (max-width: 1024px) {\n  .login-entry-point[_ngcontent-%COMP%]   .right-image-divlogin[_ngcontent-%COMP%] {\n    margin-top: 30%;\n    width: 100% !important;\n  }\n}\n.btn-login[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 8px;\n  background: #fff;\n  color: #063787;\n  font-family: Urbanist;\n  font-size: 14px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 30px;\n}\n@media (max-width: 480px) {\n  .btn-login[_ngcontent-%COMP%] {\n    justify-content: center;\n    width: 100%;\n  }\n}\n.floating-div[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border-radius: 58px;\n  background: #fff;\n  box-shadow: 0 10px 15px -3px rgba(6, 48, 117, 0.1);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: #111827;\n  font-family: Urbanist;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 20px;\n  position: absolute;\n}\n@media (max-width: 768px) {\n  .floating-div[_ngcontent-%COMP%] {\n    font-size: 13px;\n    padding: 6px 10px;\n  }\n}\n@media (max-width: 480px) {\n  .floating-div[_ngcontent-%COMP%] {\n    font-size: 12px;\n    gap: 6px;\n  }\n}\n.position1[_ngcontent-%COMP%] {\n  left: 0px;\n}\n@media (max-width: 768px) {\n  .position1[_ngcontent-%COMP%] {\n    left: 10px;\n  }\n}\n.position2[_ngcontent-%COMP%] {\n  bottom: 20%;\n  right: 10px;\n}\n@media (max-width: 768px) {\n  .position2[_ngcontent-%COMP%] {\n    right: 10px;\n    bottom: 5%;\n  }\n}\n/*# sourceMappingURL=ias-privileges.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IasPrivilegesComponent, { className: "IasPrivilegesComponent", filePath: "src/app/website/components/ias-privileges/ias-privileges.component.ts", lineNumber: 12 });
})();

// src/app/website/components/ias-foundation/ias-foundation.component.ts
var _c02 = (a0) => ({ "rotate": a0 });
var _c12 = () => ["/user-home/user-membership"];
function IasFoundationComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "h2", 10)(2, "button", 11);
    \u0275\u0275listener("click", function IasFoundationComponent_div_10_Template_button_click_2_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleFaq(i_r2));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "span", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 13);
    \u0275\u0275element(7, "path", 14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 15)(9, "div", 16);
    \u0275\u0275text(10);
    \u0275\u0275elementStart(11, "button", 17);
    \u0275\u0275text(12, "Join Now");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const faq_r4 = ctx.$implicit;
    const i_r2 = ctx.index;
    \u0275\u0275advance();
    \u0275\u0275attribute("id", "heading" + i_r2);
    \u0275\u0275advance();
    \u0275\u0275classProp("collapsed", !faq_r4.isOpen)("ias-accent", faq_r4.isOpen);
    \u0275\u0275attribute("aria-controls", "collapse" + i_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", faq_r4.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", faq_r4.status, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(17, _c02, !faq_r4.isOpen));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("show", faq_r4.isOpen);
    \u0275\u0275property("id", "collapse" + i_r2);
    \u0275\u0275attribute("aria-labelledby", "heading" + i_r2);
    \u0275\u0275advance();
    \u0275\u0275classProp("ias-accent", faq_r4.isOpen);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", faq_r4.description, " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(19, _c12));
  }
}
var IasFoundationComponent = class _IasFoundationComponent {
  constructor() {
    this.faqs = [
      {
        title: "Tenure Membership",
        status: "",
        description: "Members posted in NCT of Delhi shall pay a tenure membership fee of \u20B91000 per posting in Govt. of India.",
        isOpen: true
      },
      {
        title: "Annual Membership",
        status: "",
        description: "Other Members of the association posted in the NCR Delhi shall pay an annual membership free of Rs.200 .",
        isOpen: false
      },
      {
        title: "Lifetime Membership ",
        status: " (Retired Members)",
        description: "Retired members shall pay a one-time life membership fee of Rs.500.",
        isOpen: false
      }
    ];
  }
  toggleFaq(index) {
    this.faqs = this.faqs.map((faq, i) => __spreadProps(__spreadValues({}, faq), {
      isOpen: i === index ? !faq.isOpen : false
      // Only one open at a time
    }));
  }
  static {
    this.\u0275fac = function IasFoundationComponent_Factory(t) {
      return new (t || _IasFoundationComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IasFoundationComponent, selectors: [["app-ias-foundation"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 1, consts: [[1, "ias-bg"], [1, "container"], [1, "row"], [1, "col-md-4"], [1, "ias-label", "mb-1"], [1, "ias-title", "pe-5"], [1, "col-md-8"], ["id", "membershipAccordion", 1, "accordion", "w-100"], ["class", "accordion-item", 4, "ngFor", "ngForOf"], [1, "accordion-item"], [1, "accordion-header"], ["type", "button", 1, "accordion-button", "ias-accordion-btn", 3, "click"], [1, "ias-status"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "chevron-icon", "ms-auto", 3, "ngClass"], ["fill-rule", "evenodd", "d", "M1.646 10.354a.5.5 0 0 0 .708 0L8 4.707l5.646 5.647a.5.5 0 0 0 .708-.708l-6-6a.5.5 0 0 0-.708 0l-6 6a.5.5 0 0 0 0 .708z"], ["data-bs-parent", "#membershipAccordion", 1, "accordion-collapse", "collapse", 3, "id"], [1, "accordion-body", "ias-accordion-body", "pe-5", "d-flex", "flex-column", "align-items-start", "gap-3"], [1, "btn", "btn-join", 3, "routerLink"]], template: function IasFoundationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "p", 4);
        \u0275\u0275text(5, "MEMBERSHIP CATEGORIES");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h2", 5);
        \u0275\u0275text(7, "Select the Membership That Matches You");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 6)(9, "div", 7);
        \u0275\u0275template(10, IasFoundationComponent_div_10_Template, 13, 20, "div", 8);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275property("ngForOf", ctx.faqs);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, RouterLink], styles: ['\n\n.ias-bg[_ngcontent-%COMP%] {\n  background: #15142b;\n  color: #fff;\n  padding-top: 60px;\n  padding-bottom: 60px;\n}\n.ias-label[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: "Urbanist";\n  font-size: 12px;\n  font-weight: 400;\n  line-height: normal;\n  text-transform: uppercase;\n}\n.ias-title[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: "Urbanist";\n  font-size: 40px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n}\n.accordion-item[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n}\n.accordion-button.ias-accordion-btn[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 0px !important;\n  border-bottom: 0.646px solid rgba(255, 255, 255, 0.6);\n  background:\n    linear-gradient(\n      90deg,\n      #150F22 -11.97%,\n      #363539 100%);\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 22px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 39.6px;\n  box-shadow: none;\n  transition: background 0.35s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s;\n}\n.accordion-button.ias-accent[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #492FB2 -1.74%,\n      #ADADAD 108.02%);\n  border-bottom: 0px;\n}\n.ias-status[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.43);\n  font-family: "Urbanist";\n  font-size: 22px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 39.6px;\n}\n.ias-accordion-body[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #fff;\n  text-align: justify;\n  font-family: "Urbanist";\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 25px;\n  border-radius: 0px;\n  transition: background 0.35s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.ias-accent[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #492FB2 -1.74%,\n      #ADADAD 108.02%) !important;\n  color: #fff;\n}\n.accordion-button[_ngcontent-%COMP%]::after {\n  display: none !important;\n}\n.chevron-icon[_ngcontent-%COMP%] {\n  color: #fff;\n  fill: #fff;\n  margin-left: auto;\n  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.chevron-icon.rotate[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.btn-join[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: 1px solid #FFF;\n  background-color: rgba(255, 255, 255, 0);\n  opacity: 0.71;\n  padding: 8px 24px;\n  color: #FFF;\n  text-align: center;\n  font-family: Urbanist;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: 0.15px;\n  transition: all 0.3s ease-in-out;\n}\n.btn-join[_ngcontent-%COMP%]:hover {\n  border-radius: 4px;\n  border: 1px solid #FFF;\n  background-color: #fff;\n  opacity: 0.71;\n  padding: 8px 24px;\n  color: #000;\n  text-align: center;\n  font-family: Urbanist;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: 0.15px;\n}\n/*# sourceMappingURL=ias-foundation.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IasFoundationComponent, { className: "IasFoundationComponent", filePath: "src/app/website/components/ias-foundation/ias-foundation.component.ts", lineNumber: 12 });
})();

// src/app/website/components/ias-monthlymeet/ias-monthlymeet.component.ts
function IasMonthlymeetComponent_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "div", 12)(4, "div", 13)(5, "div", 14);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 15);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 16)(12, "div", 17)(13, "div")(14, "h5");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 18);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 19)(20, "mask", 20);
    \u0275\u0275element(21, "rect", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "g", 22);
    \u0275\u0275element(23, "path", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "p", 24);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const blog_r1 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 5, blog_r1.date, "MMM"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 8, blog_r1.date, "dd"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(blog_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(blog_r1.description);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(blog_r1.location);
  }
}
function IasMonthlymeetComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275template(1, IasMonthlymeetComponent_div_7_div_1_Template, 26, 11, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.blogs);
  }
}
function IasMonthlymeetComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "img", 26);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Content will be published here soon");
    \u0275\u0275elementEnd()();
  }
}
var IasMonthlymeetComponent = class _IasMonthlymeetComponent {
  constructor(http, platformId) {
    this.http = http;
    this.platformId = platformId;
    this.blogs = [];
  }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.loadLatestBlogs();
    }
  }
  loadLatestBlogs() {
    this.http.get(`${environment.apiUrl}/events?page=1&limit=2&isActive=true`).subscribe({
      next: (res) => {
        this.blogs = res.data.data;
      },
      error: (err) => {
        console.error("Failed to load blogs", err);
      }
    });
  }
  static {
    this.\u0275fac = function IasMonthlymeetComponent_Factory(t) {
      return new (t || _IasMonthlymeetComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(PLATFORM_ID));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IasMonthlymeetComponent, selectors: [["app-ias-monthlymeet"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 2, consts: [["noUsers", ""], [1, "ias-bg"], [1, "container", "heading"], [1, "ias-label", "mb-1"], [1, "ias-title", "mb-5"], [1, "container", "my-5"], ["class", "row g-4", 4, "ngIf", "ngIfElse"], [1, "row", "g-4"], ["class", "col-md-6", 4, "ngFor", "ngForOf"], [1, "col-md-6"], [1, "event-card", "event1", "p-3"], [1, "row"], [1, "col-lg-4"], [1, "ms-3"], [1, "event-month", "ps-2"], [1, "event-day"], [1, "col-lg-8"], [1, "event-details"], [1, "d-flex", "align-items-center", "gap-1"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none"], ["id", "mask0_50758_556", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "24", "height", "24", 2, "mask-type", "alpha"], ["width", "24", "height", "24", "fill", "#D9D9D9"], ["mask", "url(#mask0_50758_556)"], ["d", "M12 12C12.55 12 13.0208 11.8042 13.4125 11.4125C13.8042 11.0208 14 10.55 14 10C14 9.45 13.8042 8.97917 13.4125 8.5875C13.0208 8.19583 12.55 8 12 8C11.45 8 10.9792 8.19583 10.5875 8.5875C10.1958 8.97917 10 9.45 10 10C10 10.55 10.1958 11.0208 10.5875 11.4125C10.9792 11.8042 11.45 12 12 12ZM12 19.35C14.0333 17.4833 15.5417 15.7875 16.525 14.2625C17.5083 12.7375 18 11.3833 18 10.2C18 8.38333 17.4208 6.89583 16.2625 5.7375C15.1042 4.57917 13.6833 4 12 4C10.3167 4 8.89583 4.57917 7.7375 5.7375C6.57917 6.89583 6 8.38333 6 10.2C6 11.3833 6.49167 12.7375 7.475 14.2625C8.45833 15.7875 9.96667 17.4833 12 19.35ZM12 22C9.31667 19.7167 7.3125 17.5958 5.9875 15.6375C4.6625 13.6792 4 11.8667 4 10.2C4 7.7 4.80417 5.70833 6.4125 4.225C8.02083 2.74167 9.88333 2 12 2C14.1167 2 15.9792 2.74167 17.5875 4.225C19.1958 5.70833 20 7.7 20 10.2C20 11.8667 19.3375 13.6792 18.0125 15.6375C16.6875 17.5958 14.6833 19.7167 12 22Z", "fill", "white"], [1, "mb-0"], [1, "text-center", "p-4", "d-flex", "align-items-center", "justify-content-center", "nouser", "flex-column"], ["src", "../../../../assets/icons/empty-img-gray.png", "alt", "empty state"]], template: function IasMonthlymeetComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "p", 3);
        \u0275\u0275text(3, "MEETINGS");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h2", 4);
        \u0275\u0275text(5, "Monthly Planning Meet- 2025");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 5);
        \u0275\u0275template(7, IasMonthlymeetComponent_div_7_Template, 2, 1, "div", 6)(8, IasMonthlymeetComponent_ng_template_8_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const noUsers_r3 = \u0275\u0275reference(9);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.blogs && ctx.blogs.length)("ngIfElse", noUsers_r3);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe], styles: ['\n\n.ias-bg[_ngcontent-%COMP%] {\n  background: #15142b;\n  color: #fff;\n  padding-top: 60px;\n  padding-bottom: 60px;\n}\n.ias-label[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: "Urbanist";\n  font-size: 12px;\n  font-weight: 400;\n  line-height: normal;\n  text-transform: uppercase;\n}\n.ias-title[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: "Urbanist";\n  font-size: 40px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n}\n.contribution-banner[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  border-radius: 24px;\n  background:\n    linear-gradient(\n      130deg,\n      #492fb2 -1.74%,\n      #adadad 108.02%);\n}\n.contribution-content[_ngcontent-%COMP%] {\n  padding: 3.5rem;\n}\n.contribution-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 36px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 42px;\n}\n.contribution-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px;\n}\n.nouser[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #FFF;\n  font-family: Urbanist;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 150%;\n}\n.makebg[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  height: 100%;\n  z-index: 1;\n  object-fit: cover;\n}\n.makeimage[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n.badge[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  background: #8c7fc3;\n  display: inline-flex;\n  gap: 3px;\n  align-items: center;\n  padding: 0 6px;\n  margin: 0 4px;\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 24px;\n}\n.make-btn[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  background: #fff;\n  padding: 8px 12px;\n  color: #063787;\n  text-align: center;\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: var(--Letter-Spacing-3, 0.5px);\n}\n.event-card[_ngcontent-%COMP%] {\n  border-radius: 18px;\n  border: 1px solid rgba(101, 130, 255, 0.18);\n  transition: all 0.3s ease;\n  height: 100%;\n}\n.event1[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #1b112b 0%,\n      #2f2a38 100%);\n}\n.event2[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      -90deg,\n      #1b112b 0%,\n      #2f2a38 100%);\n}\n.event-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n.event-month[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 100%;\n}\n.event-day[_ngcontent-%COMP%] {\n  font-family: Urbanist;\n  font-size: 155px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 80%;\n  opacity: 0.2;\n  background:\n    linear-gradient(\n      331deg,\n      rgba(153, 153, 153, 0) -3.74%,\n      rgba(255, 255, 255, 0.69) 89.74%);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.event-details[_ngcontent-%COMP%] {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  justify-content: space-between;\n}\n.event-details[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 22px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 102.5%;\n}\n.event-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 162%;\n  opacity: 0.5;\n}\n@media only screen and (max-width: 767px) {\n  .contribution-content[_ngcontent-%COMP%] {\n    padding: 2rem;\n  }\n}\n@media only screen and (max-width: 991px) {\n  .makebg[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n  .event-day[_ngcontent-%COMP%] {\n    font-size: 132px;\n  }\n}\n/*# sourceMappingURL=ias-monthlymeet.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IasMonthlymeetComponent, { className: "IasMonthlymeetComponent", filePath: "src/app/website/components/ias-monthlymeet/ias-monthlymeet.component.ts", lineNumber: 13 });
})();

// src/app/website/components/ias-initiatives/ias-initiatives.component.ts
function IasInitiativesComponent_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "img", 11);
    \u0275\u0275elementStart(2, "div", 12)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 13);
    \u0275\u0275listener("click", function IasInitiativesComponent_div_5_div_1_Template_button_click_5_listener() {
      const card_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openLink(card_r2.link));
    });
    \u0275\u0275text(6, "Explore more \u2192");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const card_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", card_r2.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(card_r2.title);
  }
}
function IasInitiativesComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275template(1, IasInitiativesComponent_div_5_div_1_Template, 7, 2, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", group_r4);
  }
}
function IasInitiativesComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275listener("click", function IasInitiativesComponent_span_7_Template_span_click_0_listener() {
      const i_r6 = \u0275\u0275restoreView(_r5).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToSlide(i_r6));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r6 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", i_r6 === ctx_r2.currentIndex);
  }
}
var IasInitiativesComponent = class _IasInitiativesComponent {
  constructor(platformId) {
    this.platformId = platformId;
    this.cards = [
      // { title: 'IAS AGMUT Association', image: '../../../../assets/images/ias-agmut.png', link: 'https://example.com/agmut' },
      { title: "IAS Association, AP", image: "assets/images/ias-ap.png", link: "https://x.com/IASAndhraP" },
      // { title: 'Haryana IAS Association', image: 'assets/images/haryana.png', link: 'https://example.com/haryana' },
      { title: "Karnataka IAS Association", image: "assets/images/karnataka.png", link: "https://x.com/IASOAKarnataka" },
      // { title: 'Kerala IAS Association', image: 'assets/images/kerala.png', link: 'https://example.com/kerala' },
      { title: "Odisha IAS Association", image: "assets/images/odisha.png", link: "https://x.com/ias_odisha" },
      { title: "Gujarat IAS Association", image: "../../../../assets/images/gujrat.png", link: "https://x.com/IASGujarat" },
      { title: "Punjab IAS Association", image: "assets/images/punjab.png", link: "https://x.com/iaspunjab" },
      { title: "Rajasthan IAS Association", image: "assets/images/rajasthan.png", link: "https://x.com/RajasthanIAS" },
      { title: "Tamil Nadu IAS Association", image: "assets/images/tamilnadu.png", link: "https://tniasoa.org/" },
      { title: "Telangana IAS Association", image: "assets/images/telangana.png", link: "https://tniasoa.org/" },
      { title: "Bihar IAS Association", image: "assets/images/bihar.png", link: "http://iasbihar.org.in/" },
      { title: "UP IAS Association", image: "assets/images/up.png", link: "https://tniasoa.org/" },
      { title: "West Bengal IAS Association", image: "assets/images/westbengal.png", link: "https://iasassociationwb.in/" }
    ];
    this.groupedCards = [];
    this.currentIndex = 0;
    this.isBrowser = false;
    this.groupCards();
  }
  ngOnInit() {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.startAutoSlide();
    }
  }
  openLink(url) {
    window.open(url, "_blank");
  }
  ngOnDestroy() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }
  groupCards() {
    this.groupedCards = [];
    for (let i = 0; i < this.cards.length; i += 3) {
      this.groupedCards.push(this.cards.slice(i, i + 3));
    }
  }
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.groupedCards.length;
  }
  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.groupedCards.length) % this.groupedCards.length;
  }
  goToSlide(index) {
    this.currentIndex = index;
  }
  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5e3);
  }
  static {
    this.\u0275fac = function IasInitiativesComponent_Factory(t) {
      return new (t || _IasInitiativesComponent)(\u0275\u0275directiveInject(PLATFORM_ID));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IasInitiativesComponent, selectors: [["app-ias-initiatives"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 4, consts: [[1, "main-slider-div"], [1, "container"], [1, "state-slider-container"], [1, "slider-wrapper"], [1, "slider"], ["class", "slide", 4, "ngFor", "ngForOf"], [1, "pagination"], [3, "active", "click", 4, "ngFor", "ngForOf"], [1, "slide"], ["class", "state-card", 4, "ngFor", "ngForOf"], [1, "state-card"], ["alt", "state-image", 3, "src"], [1, "right-div", "d-flex", "flex-column", "justify-content-between", "h-100", "align-items-start"], [1, "btn-explore", "mt-2", 3, "click"], [3, "click"]], template: function IasInitiativesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275template(5, IasInitiativesComponent_div_5_Template, 2, 1, "div", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 6);
        \u0275\u0275template(7, IasInitiativesComponent_span_7_Template, 1, 2, "span", 7);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275styleProp("transform", "translateX(-" + ctx.currentIndex * 100 + "%)");
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.groupedCards);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.groupedCards);
      }
    }, dependencies: [CommonModule, NgForOf], styles: ["\n\n.btn-explore[_ngcontent-%COMP%] {\n  border: 1px solid #fff;\n  border-radius: 4px;\n  background-color: rgba(150, 140, 140, 0);\n  color: #fff;\n  padding: 8px 24px;\n  transition: all 0.3s ease-in-out;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn-explore[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: white;\n}\n.btn-explore[_ngcontent-%COMP%]:hover {\n  border: 1px solid #fff;\n  border-radius: 4px;\n  background-color: #fff;\n  color: #15142b !important;\n  padding: 8px 24px;\n}\n.btn-explore[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  fill: #15142b;\n}\n.main-slider-div[_ngcontent-%COMP%] {\n  background: #150F22;\n}\n.state-slider-container[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n  position: relative;\n  overflow: hidden;\n  min-width: 220px;\n}\n.state-slider-container[_ngcontent-%COMP%]   .slider-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: hidden;\n}\n.state-slider-container[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%] {\n  display: flex;\n  transition: transform 0.6s ease-in-out;\n}\n.state-slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%] {\n  display: grid;\n  flex: 0 0 100%;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 20px;\n}\n.state-slider-container[_ngcontent-%COMP%]   .state-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      148.14deg,\n      rgba(88, 71, 114, 0.55) -33.59%,\n      rgba(47, 42, 56, 0.55) 79.09%);\n  padding: 25px 35px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  height: 100%;\n}\n.state-slider-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  text-transform: capitalize;\n  margin-bottom: 12px;\n}\n.state-slider-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 1rem;\n  gap: 8px;\n}\n.state-slider-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  background: #555;\n  border-radius: 50%;\n  display: inline-block;\n  cursor: pointer;\n  transition: background 0.3s;\n}\n.state-slider-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%] {\n  background: #fff;\n}\n@media (max-width: 1380px) {\n  .state-slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%] {\n    gap: 16px;\n    display: flex !important;\n  }\n  .state-slider-container[_ngcontent-%COMP%]   .state-card[_ngcontent-%COMP%] {\n    padding: 20px 24px;\n    flex: 1 1 45%;\n  }\n  .state-slider-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n@media (max-width: 1200px) {\n  .state-slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%] {\n    gap: 16px;\n    display: flex !important;\n  }\n  .state-slider-container[_ngcontent-%COMP%]   .state-card[_ngcontent-%COMP%] {\n    padding: 20px 24px;\n    flex: 1 1 45%;\n  }\n  .state-slider-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n@media (max-width: 992px) {\n  .state-slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n  .state-slider-container[_ngcontent-%COMP%]   .state-card[_ngcontent-%COMP%] {\n    flex: 1 1 100%;\n    max-width: 90%;\n    height: fit-content;\n  }\n  .state-slider-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 16px;\n    text-align: center;\n  }\n  .state-slider-container[_ngcontent-%COMP%]   .btn-explore[_ngcontent-%COMP%] {\n    margin: 0 auto;\n  }\n}\n@media (max-width: 768px) {\n  .state-slider-container[_ngcontent-%COMP%] {\n    padding: 1.5rem 0;\n  }\n  .state-slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%] {\n    gap: 12px;\n  }\n  .state-slider-container[_ngcontent-%COMP%]   .state-card[_ngcontent-%COMP%] {\n    padding: 16px 20px;\n    border-radius: 6px;\n  }\n  .state-slider-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n@media (max-width: 576px) {\n  .state-slider-container[_ngcontent-%COMP%]   .state-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    padding: 14px 16px;\n  }\n  .state-slider-container[_ngcontent-%COMP%]   .state-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n    max-width: 260px;\n  }\n  .state-slider-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .state-slider-container[_ngcontent-%COMP%]   .btn-explore[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=ias-initiatives.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IasInitiativesComponent, { className: "IasInitiativesComponent", filePath: "src/app/website/components/ias-initiatives/ias-initiatives.component.ts", lineNumber: 11 });
})();

// src/app/website/components/ias-createshare/ias-createshare.component.ts
var _c03 = () => ["/user-home"];
var IasCreateshareComponent = class _IasCreateshareComponent {
  constructor() {
    this.liked = false;
    this.count = 30;
    this.animate = false;
  }
  toggleLike() {
    this.liked = !this.liked;
    this.count += this.liked ? 1 : -1;
    this.animate = true;
    setTimeout(() => {
      this.animate = false;
    }, 300);
  }
  static {
    this.\u0275fac = function IasCreateshareComponent_Factory(t) {
      return new (t || _IasCreateshareComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IasCreateshareComponent, selectors: [["app-ias-createshare"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 106, vars: 7, consts: [[1, "ias-bg"], [1, "container"], [1, "d-flex", "flex-column", "flex-lg-row", "justify-content-start", "justify-content-lg-between", "align-items-start", "align-items-lg-end", "mb-4"], [1, "ias-label", "mb-1"], [1, "ias-title", "pe-5", "mb-3"], [1, "seeall", "me-3", 3, "routerLink"], [1, "add-post-btn", 3, "routerLink"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none"], ["id", "mask0_329_447", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "24", "height", "24", 2, "mask-type", "alpha"], ["width", "24", "height", "24", "fill", "#D9D9D9"], ["mask", "url(#mask0_329_447)"], ["d", "M11 13H5V11H11V5H13V11H19V13H13V19H11V13Z", "fill", "#150F22"], [1, "row"], [1, "col-lg-6"], [1, "card-Featured", "h-100"], ["src", "../../../../assets/images/featurecardbg.png", "alt", "", "srcset", "", 1, "featurecardbg"], [1, "z-1"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "Featured-head"], [1, "badge-trending"], [1, "mb-3", "user"], [1, "profile-avatar"], ["src", "../../../../assets/images/featuredimg.png", "alt", "Camera view by lake", 1, "featured-img", "mb-4"], [1, "mb-3"], [1, "d-flex", "justify-content-end", "align-items-center", "gap-1"], [1, "like-button", "overflow-visible", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "21", "height", "19", "viewBox", "0 0 21 19", "fill", "none"], ["d", "M10.293 19L8.84297 17.7C7.15964 16.1834 5.76797 14.875 4.66797 13.775C3.56797 12.675 2.69297 11.6875 2.04297 10.8125C1.39297 9.93752 0.938802 9.13336 0.680469 8.40002C0.422135 7.66669 0.292969 6.91669 0.292969 6.15002C0.292969 4.58336 0.817969 3.27502 1.86797 2.22502C2.91797 1.17502 4.2263 0.650024 5.79297 0.650024C6.65964 0.650024 7.48464 0.833358 8.26797 1.20002C9.0513 1.56669 9.7263 2.08336 10.293 2.75002C10.8596 2.08336 11.5346 1.56669 12.318 1.20002C13.1013 0.833358 13.9263 0.650024 14.793 0.650024C16.3596 0.650024 17.668 1.17502 18.718 2.22502C19.768 3.27502 20.293 4.58336 20.293 6.15002C20.293 6.91669 20.1638 7.66669 19.9055 8.40002C19.6471 9.13336 19.193 9.93752 18.543 10.8125C17.893 11.6875 17.018 12.675 15.918 13.775C14.818 14.875 13.4263 16.1834 11.743 17.7L10.293 19ZM10.293 16.3C11.893 14.8667 13.2096 13.6375 14.243 12.6125C15.2763 11.5875 16.093 10.6959 16.693 9.93752C17.293 9.17919 17.7096 8.50419 17.943 7.91252C18.1763 7.32086 18.293 6.73336 18.293 6.15002C18.293 5.15002 17.9596 4.31669 17.293 3.65002C16.6263 2.98336 15.793 2.65002 14.793 2.65002C14.0096 2.65002 13.2846 2.87086 12.618 3.31252C11.9513 3.75419 11.493 4.31669 11.243 5.00002H9.34297C9.09297 4.31669 8.63464 3.75419 7.96797 3.31252C7.3013 2.87086 6.5763 2.65002 5.79297 2.65002C4.79297 2.65002 3.95964 2.98336 3.29297 3.65002C2.6263 4.31669 2.29297 5.15002 2.29297 6.15002C2.29297 6.73336 2.40964 7.32086 2.64297 7.91252C2.8763 8.50419 3.29297 9.17919 3.89297 9.93752C4.49297 10.6959 5.30964 11.5875 6.34297 12.6125C7.3763 13.6375 8.69297 14.8667 10.293 16.3Z", "fill", "white"], ["href", "#", 1, "icon-btn"], ["id", "mask0_106_207", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "24", "height", "24", 2, "mask-type", "alpha"], ["mask", "url(#mask0_106_207)"], ["d", "M17 22C16.1667 22 15.4583 21.7083 14.875 21.125C14.2917 20.5417 14 19.8333 14 19C14 18.9 14.025 18.6667 14.075 18.3L7.05 14.2C6.78333 14.45 6.475 14.6458 6.125 14.7875C5.775 14.9292 5.4 15 5 15C4.16667 15 3.45833 14.7083 2.875 14.125C2.29167 13.5417 2 12.8333 2 12C2 11.1667 2.29167 10.4583 2.875 9.875C3.45833 9.29167 4.16667 9 5 9C5.4 9 5.775 9.07083 6.125 9.2125C6.475 9.35417 6.78333 9.55 7.05 9.8L14.075 5.7C14.0417 5.58333 14.0208 5.47083 14.0125 5.3625C14.0042 5.25417 14 5.13333 14 5C14 4.16667 14.2917 3.45833 14.875 2.875C15.4583 2.29167 16.1667 2 17 2C17.8333 2 18.5417 2.29167 19.125 2.875C19.7083 3.45833 20 4.16667 20 5C20 5.83333 19.7083 6.54167 19.125 7.125C18.5417 7.70833 17.8333 8 17 8C16.6 8 16.225 7.92917 15.875 7.7875C15.525 7.64583 15.2167 7.45 14.95 7.2L7.925 11.3C7.95833 11.4167 7.97917 11.5292 7.9875 11.6375C7.99583 11.7458 8 11.8667 8 12C8 12.1333 7.99583 12.2542 7.9875 12.3625C7.97917 12.4708 7.95833 12.5833 7.925 12.7L14.95 16.8C15.2167 16.55 15.525 16.3542 15.875 16.2125C16.225 16.0708 16.6 16 17 16C17.8333 16 18.5417 16.2917 19.125 16.875C19.7083 17.4583 20 18.1667 20 19C20 19.8333 19.7083 20.5417 19.125 21.125C18.5417 21.7083 17.8333 22 17 22ZM17 20C17.2833 20 17.5208 19.9042 17.7125 19.7125C17.9042 19.5208 18 19.2833 18 19C18 18.7167 17.9042 18.4792 17.7125 18.2875C17.5208 18.0958 17.2833 18 17 18C16.7167 18 16.4792 18.0958 16.2875 18.2875C16.0958 18.4792 16 18.7167 16 19C16 19.2833 16.0958 19.5208 16.2875 19.7125C16.4792 19.9042 16.7167 20 17 20ZM5 13C5.28333 13 5.52083 12.9042 5.7125 12.7125C5.90417 12.5208 6 12.2833 6 12C6 11.7167 5.90417 11.4792 5.7125 11.2875C5.52083 11.0958 5.28333 11 5 11C4.71667 11 4.47917 11.0958 4.2875 11.2875C4.09583 11.4792 4 11.7167 4 12C4 12.2833 4.09583 12.5208 4.2875 12.7125C4.47917 12.9042 4.71667 13 5 13ZM17 6C17.2833 6 17.5208 5.90417 17.7125 5.7125C17.9042 5.52083 18 5.28333 18 5C18 4.71667 17.9042 4.47917 17.7125 4.2875C17.5208 4.09583 17.2833 4 17 4C16.7167 4 16.4792 4.09583 16.2875 4.2875C16.0958 4.47917 16 4.71667 16 5C16 5.28333 16.0958 5.52083 16.2875 5.7125C16.4792 5.90417 16.7167 6 17 6Z", "fill", "white"], [1, "col-lg-6", "mt-3", "mt-lg-0"], [1, "col-12"], [1, "card-Featured", "p-4", "mb-3"], ["src", "../../../../assets/images/featureprofilebg.png", "alt", "", "srcset", "", 1, "featureprofilebg"], [1, "d-flex", "align-items-center", "mb-4", "gap-2"], ["id", "mask0_199_674", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "24", "height", "24", 2, "mask-type", "alpha"], ["mask", "url(#mask0_199_674)"], ["d", "M5.85 17.1C6.7 16.45 7.65 15.9375 8.7 15.5625C9.75 15.1875 10.85 15 12 15C13.15 15 14.25 15.1875 15.3 15.5625C16.35 15.9375 17.3 16.45 18.15 17.1C18.7333 16.4167 19.1875 15.6417 19.5125 14.775C19.8375 13.9083 20 12.9833 20 12C20 9.78333 19.2208 7.89583 17.6625 6.3375C16.1042 4.77917 14.2167 4 12 4C9.78333 4 7.89583 4.77917 6.3375 6.3375C4.77917 7.89583 4 9.78333 4 12C4 12.9833 4.1625 13.9083 4.4875 14.775C4.8125 15.6417 5.26667 16.4167 5.85 17.1ZM12 13C11.0167 13 10.1875 12.6625 9.5125 11.9875C8.8375 11.3125 8.5 10.4833 8.5 9.5C8.5 8.51667 8.8375 7.6875 9.5125 7.0125C10.1875 6.3375 11.0167 6 12 6C12.9833 6 13.8125 6.3375 14.4875 7.0125C15.1625 7.6875 15.5 8.51667 15.5 9.5C15.5 10.4833 15.1625 11.3125 14.4875 11.9875C13.8125 12.6625 12.9833 13 12 13ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C12.8833 20 13.7167 19.8708 14.5 19.6125C15.2833 19.3542 16 18.9833 16.65 18.5C16 18.0167 15.2833 17.6458 14.5 17.3875C13.7167 17.1292 12.8833 17 12 17C11.1167 17 10.2833 17.1292 9.5 17.3875C8.71667 17.6458 8 18.0167 7.35 18.5C8 18.9833 8.71667 19.3542 9.5 19.6125C10.2833 19.8708 11.1167 20 12 20ZM12 11C12.4333 11 12.7917 10.8583 13.075 10.575C13.3583 10.2917 13.5 9.93333 13.5 9.5C13.5 9.06667 13.3583 8.70833 13.075 8.425C12.7917 8.14167 12.4333 8 12 8C11.5667 8 11.2083 8.14167 10.925 8.425C10.6417 8.70833 10.5 9.06667 10.5 9.5C10.5 9.93333 10.6417 10.2917 10.925 10.575C11.2083 10.8583 11.5667 11 12 11Z", "fill", "white"], [1, "Featuredtitle"], [1, "col-4"], [1, "d-flex", "flex-column", "gap-2", "align-items-center"], ["src", "../../../../assets/images/dineshkumar.png", "alt", "Profile", 1, "profile-pic"], [1, "profile-details"], [1, "col-8"], [1, "quote"], [1, "col-6"], [1, "card-Featured", "p-0", "overflow-hidden", "h-100"], ["src", "../../../../assets/images/girl.png", "alt", "Girl playing guitar", 1, "girlimg"], [1, "card-Featured", "p-4", "pb-2", "h-100"], ["src", "../../../../assets/images/recentbg.png", "alt", "", "srcset", "", 1, "recentbg"], [1, "d-flex", "align-items-center", "mb-3", "gap-2"], ["id", "mask0_329_397", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "24", "height", "24", 2, "mask-type", "alpha"], ["mask", "url(#mask0_329_397)"], ["d", "M11.0229 16.2L12.3997 14.8L9.25283 11.6V7H7.28606V12.4L11.0229 16.2ZM17.1199 20.5V18.3C18.3328 17.7167 19.2916 16.8583 19.9964 15.725C20.7011 14.5917 21.0535 13.35 21.0535 12C21.0535 10.65 20.7011 9.40833 19.9964 8.275C19.2916 7.14167 18.3328 6.28333 17.1199 5.7V3.5C18.9064 4.13333 20.3364 5.22917 21.41 6.7875C22.4835 8.34583 23.0203 10.0833 23.0203 12C23.0203 13.9167 22.4835 15.6542 21.41 17.2125C20.3364 18.7708 18.9064 19.8667 17.1199 20.5ZM8.26944 21C7.04021 21 5.88882 20.7625 4.81529 20.2875C3.74176 19.8125 2.80754 19.1708 2.01263 18.3625C1.21773 17.5542 0.586719 16.6042 0.11961 15.5125C-0.3475 14.4208 -0.581055 13.25 -0.581055 12C-0.581055 10.75 -0.3475 9.57917 0.11961 8.4875C0.586719 7.39583 1.21773 6.44583 2.01263 5.6375C2.80754 4.82917 3.74176 4.1875 4.81529 3.7125C5.88882 3.2375 7.04021 3 8.26944 3C9.49868 3 10.6501 3.2375 11.7236 3.7125C12.7971 4.1875 13.7313 4.82917 14.5263 5.6375C15.3212 6.44583 15.9522 7.39583 16.4193 8.4875C16.8864 9.57917 17.1199 10.75 17.1199 12C17.1199 13.25 16.8864 14.4208 16.4193 15.5125C15.9522 16.6042 15.3212 17.5542 14.5263 18.3625C13.7313 19.1708 12.7971 19.8125 11.7236 20.2875C10.6501 20.7625 9.49868 21 8.26944 21ZM8.26944 19C10.1871 19 11.8137 18.3208 13.1495 16.9625C14.4853 15.6042 15.1532 13.95 15.1532 12C15.1532 10.05 14.4853 8.39583 13.1495 7.0375C11.8137 5.67917 10.1871 5 8.26944 5C6.35184 5 4.72515 5.67917 3.38938 7.0375C2.05361 8.39583 1.38572 10.05 1.38572 12C1.38572 13.95 2.05361 15.6042 3.38938 16.9625C4.72515 18.3208 6.35184 19 8.26944 19Z", "fill", "white"], [1, "mb-1"]], template: function IasCreateshareComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "p", 3);
        \u0275\u0275text(5, "POSTING");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h2", 4);
        \u0275\u0275text(7, "Create. Share. Connect.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div")(9, "button", 5);
        \u0275\u0275text(10, "See All");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "button", 6);
        \u0275\u0275text(12, "Add Post ");
        \u0275\u0275elementStart(13, "span");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(14, "svg", 7)(15, "mask", 8);
        \u0275\u0275element(16, "rect", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "g", 10);
        \u0275\u0275element(18, "path", 11);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(19, "div", 12)(20, "div", 13)(21, "div", 14);
        \u0275\u0275element(22, "img", 15);
        \u0275\u0275elementStart(23, "div", 16)(24, "div", 17)(25, "span", 18);
        \u0275\u0275text(26, "Featured Post");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "span", 19);
        \u0275\u0275text(28, "Trending");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 20);
        \u0275\u0275element(30, "div", 21);
        \u0275\u0275text(31, "Sarah Chen ");
        \u0275\u0275elementStart(32, "span");
        \u0275\u0275text(33, "2d ago");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(34, "img", 22);
        \u0275\u0275elementStart(35, "h5");
        \u0275\u0275text(36, "My Latest Watercolour Landscape");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "p", 23);
        \u0275\u0275text(38, " Spent the weekend painting this beautiful mountain scene. The morning light was perfect for capturing those subtle color transitions. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div", 24)(40, "div", 25);
        \u0275\u0275listener("click", function IasCreateshareComponent_Template_div_click_40_listener() {
          return ctx.toggleLike();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(41, "svg", 26);
        \u0275\u0275element(42, "path", 27);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(43, "a", 28);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(44, "svg", 7)(45, "mask", 29);
        \u0275\u0275element(46, "rect", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "g", 30);
        \u0275\u0275element(48, "path", 31);
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(49, "div", 32)(50, "div", 12)(51, "div", 33)(52, "div", 34);
        \u0275\u0275element(53, "img", 35);
        \u0275\u0275elementStart(54, "div", 16)(55, "div", 36);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(56, "svg", 7)(57, "mask", 37);
        \u0275\u0275element(58, "rect", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "g", 38);
        \u0275\u0275element(60, "path", 39);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(61, "span", 40);
        \u0275\u0275text(62, "Featured Profile");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(63, "div", 12)(64, "div", 41)(65, "div", 42);
        \u0275\u0275element(66, "img", 43);
        \u0275\u0275elementStart(67, "div", 44)(68, "h6");
        \u0275\u0275text(69, "Dinesh Kumar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "p");
        \u0275\u0275text(71, "Writer");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(72, "div", 45)(73, "div", 46);
        \u0275\u0275text(74, " In quiet hands, great change is born, From village paths to fields of corn. We rise as one, with hearts aligned, To serve, to lead, and lift mankind. ");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(75, "div", 12)(76, "div", 47)(77, "div", 48);
        \u0275\u0275element(78, "img", 49);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(79, "div", 47)(80, "div", 50);
        \u0275\u0275element(81, "img", 51);
        \u0275\u0275elementStart(82, "div", 16)(83, "div", 52);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(84, "svg", 7)(85, "mask", 53);
        \u0275\u0275element(86, "rect", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "g", 54);
        \u0275\u0275element(88, "path", 55);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(89, "span", 40);
        \u0275\u0275text(90, "Recent Activities");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(91, "div")(92, "h5", 56);
        \u0275\u0275text(93, "Arun Verma");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "p", 23);
        \u0275\u0275text(95, "Posted a new poem.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(96, "div")(97, "h5", 56);
        \u0275\u0275text(98, "Arun Verma");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "p", 23);
        \u0275\u0275text(100, "Posted a new poem.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(101, "div")(102, "h5", 56);
        \u0275\u0275text(103, "Arun Verma");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "p", 23);
        \u0275\u0275text(105, "Posted a new poem.");
        \u0275\u0275elementEnd()()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275property("routerLink", "/community");
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(6, _c03));
        \u0275\u0275advance(29);
        \u0275\u0275classProp("liked", ctx.liked)("animate", ctx.animate);
      }
    }, dependencies: [RouterModule, RouterLink], styles: ['\n\n.ias-bg[_ngcontent-%COMP%] {\n  background: #15142b;\n  color: #fff;\n  padding-top: 60px;\n  padding-bottom: 60px;\n}\n.ias-label[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: "Urbanist";\n  font-size: 12px;\n  font-weight: 400;\n  line-height: normal;\n  text-transform: uppercase;\n}\n.seeall[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: 1px solid #fff;\n  color: #fff;\n  background: transparent;\n  padding: 8px 20px;\n  display: inline-flex;\n  padding: 12px 24px;\n  font-family: Urbanist;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: 0.15px;\n}\n.add-post-btn[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: 1px solid #fff;\n  background: #fff;\n  border-radius: 4px;\n  padding: 8px 20px;\n  display: inline-flex;\n  padding: 12px 24px;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  text-align: center;\n  font-family: Urbanist;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: 0.15px;\n}\n.card-Featured[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 16px;\n  border: 1px solid rgba(101, 130, 255, 0.18);\n  background:\n    linear-gradient(\n      0deg,\n      #150f22 0%,\n      #1b112b 100%);\n  color: #fff;\n  overflow: hidden;\n  padding: 15px 15px 30px 15px;\n}\n.card-Featured[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 17.682px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 19.647px;\n}\n.card-Featured[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.52);\n  font-family: Urbanist;\n  font-size: 15.718px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 19.647px;\n}\n.featurecardbg[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  z-index: 0;\n}\n.featureprofilebg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  z-index: 0;\n}\n.recentbg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  z-index: 0;\n}\n.z-1[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.featured-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 275px;\n  object-fit: cover;\n  border-radius: 16px;\n}\n.user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 13.753px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 19.647px;\n}\n.user[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.37);\n  font-family: Urbanist;\n  font-size: 13.753px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 19.647px;\n}\n.profile-avatar[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 1px solid #fff;\n  background: rgba(255, 255, 255, 0.28);\n}\n.Featured-head[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 15.718px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 19.647px;\n}\n.badge-trending[_ngcontent-%COMP%] {\n  border-radius: 18px;\n  border: 1px solid rgba(101, 130, 255, 0.4);\n  background: rgba(255, 255, 255, 0.22);\n  padding: 4px 12px;\n  color: #fff;\n  font-family: "Urbanist";\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n}\n.Featuredtitle[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 22px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 20px;\n}\n.profile-pic[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 110px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.profile-details[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.profile-details[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: #c7c7c7;\n  font-family: Urbanist;\n  font-size: 18px;\n  font-style: normal;\n  margin-bottom: 0;\n  font-weight: 500;\n  line-height: 20px;\n}\n.profile-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.63);\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 20px;\n}\n.quote[_ngcontent-%COMP%] {\n  padding: 14px;\n  font-family: Urbanist;\n  font-size: 20px;\n  font-style: italic;\n  font-weight: 400;\n  line-height: 34.383px;\n  opacity: 0.65;\n  background:\n    linear-gradient(\n      180deg,\n      #fff 0%,\n      #1b112b 100%);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.girlimg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  max-height: 260px;\n  object-fit: cover;\n  object-position: center;\n  border-radius: 16px;\n}\n/*# sourceMappingURL=ias-createshare.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IasCreateshareComponent, { className: "IasCreateshareComponent", filePath: "src/app/website/components/ias-createshare/ias-createshare.component.ts", lineNumber: 11 });
})();

// src/app/website/pages/main-page/ias-homepage/ias-homepage.component.ts
var IasHomepageComponent = class _IasHomepageComponent {
  static {
    this.\u0275fac = function IasHomepageComponent_Factory(t) {
      return new (t || _IasHomepageComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IasHomepageComponent, selectors: [["app-ias-homepage"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 0, template: function IasHomepageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-hero-section")(1, "app-ias-community-members")(2, "app-ias-privileges")(3, "app-ias-foundation")(4, "app-ias-createshare")(5, "app-ias-monthlymeet")(6, "app-ias-initiatives");
      }
    }, dependencies: [HeroSectionComponent, IasCommunityMembersComponent, IasPrivilegesComponent, IasFoundationComponent, IasMonthlymeetComponent, IasInitiativesComponent, IasCreateshareComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IasHomepageComponent, { className: "IasHomepageComponent", filePath: "src/app/website/pages/main-page/ias-homepage/ias-homepage.component.ts", lineNumber: 17 });
})();
export {
  IasHomepageComponent
};
//# sourceMappingURL=chunk-D7DOXUAH.js.map
