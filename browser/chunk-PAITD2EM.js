import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵtext
} from "./chunk-J3GGQSN2.js";
import "./chunk-ASLTLD6L.js";

// src/app/website/pages/membership/welfare-membership/welfare-membership.component.ts
var WelfareMembershipComponent = class _WelfareMembershipComponent {
  static {
    this.\u0275fac = function WelfareMembershipComponent_Factory(t) {
      return new (t || _WelfareMembershipComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WelfareMembershipComponent, selectors: [["app-welfare-membership"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 82, vars: 0, consts: [[1, "main-allmembers-section"], [1, "main-gradient"], [1, "container"], [1, "heading-div"], [1, "inner-content-div"], [1, "dear-all", "container"], [1, "list-div", "container", "mt-5"], [1, "list-unstyled", "d-flex", "flex-column", "gap-4"], ["xmlns", "http://www.w3.org/2000/svg", "width", "32", "height", "32", "viewBox", "0 0 32 32", "fill", "none"], ["id", "mask0_50803_1708", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "32", "height", "32", 2, "mask-type", "alpha"], ["width", "32", "height", "32", "fill", "#D9D9D9"], ["mask", "url(#mask0_50803_1708)"], ["d", "M14.1327 22.1334L23.5327 12.7334L21.666 10.8667L14.1327 18.4L10.3327 14.6L8.46602 16.4667L14.1327 22.1334ZM15.9993 29.3334C14.1549 29.3334 12.4216 28.9834 10.7993 28.2834C9.17713 27.5834 7.76602 26.6334 6.56602 25.4334C5.36602 24.2334 4.41602 22.8222 3.71602 21.2C3.01602 19.5778 2.66602 17.8445 2.66602 16C2.66602 14.1556 3.01602 12.4222 3.71602 10.8C4.41602 9.1778 5.36602 7.76669 6.56602 6.56669C7.76602 5.36669 9.17713 4.41669 10.7993 3.71669C12.4216 3.01669 14.1549 2.66669 15.9993 2.66669C17.8438 2.66669 19.5771 3.01669 21.1993 3.71669C22.8216 4.41669 24.2327 5.36669 25.4327 6.56669C26.6327 7.76669 27.5827 9.1778 28.2827 10.8C28.9827 12.4222 29.3327 14.1556 29.3327 16C29.3327 17.8445 28.9827 19.5778 28.2827 21.2C27.5827 22.8222 26.6327 24.2334 25.4327 25.4334C24.2327 26.6334 22.8216 27.5834 21.1993 28.2834C19.5771 28.9834 17.8438 29.3334 15.9993 29.3334Z", "fill", "white"], ["id", "mask0_50803_1713", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "32", "height", "32", 2, "mask-type", "alpha"], ["mask", "url(#mask0_50803_1713)"], [1, "container", "mt-5"], [1, "important"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "25", "viewBox", "0 0 24 25", "fill", "none"], ["d", "M11 17.5H13V11.5H11V17.5ZM12 9.5C12.2833 9.5 12.5208 9.40417 12.7125 9.2125C12.9042 9.02083 13 8.78333 13 8.5C13 8.21667 12.9042 7.97917 12.7125 7.7875C12.5208 7.59583 12.2833 7.5 12 7.5C11.7167 7.5 11.4792 7.59583 11.2875 7.7875C11.0958 7.97917 11 8.21667 11 8.5C11 8.78333 11.0958 9.02083 11.2875 9.2125C11.4792 9.40417 11.7167 9.5 12 9.5ZM12 22.5C10.6167 22.5 9.31667 22.2375 8.1 21.7125C6.88333 21.1875 5.825 20.475 4.925 19.575C4.025 18.675 3.3125 17.6167 2.7875 16.4C2.2625 15.1833 2 13.8833 2 12.5C2 11.1167 2.2625 9.81667 2.7875 8.6C3.3125 7.38333 4.025 6.325 4.925 5.425C5.825 4.525 6.88333 3.8125 8.1 3.2875C9.31667 2.7625 10.6167 2.5 12 2.5C13.3833 2.5 14.6833 2.7625 15.9 3.2875C17.1167 3.8125 18.175 4.525 19.075 5.425C19.975 6.325 20.6875 7.38333 21.2125 8.6C21.7375 9.81667 22 11.1167 22 12.5C22 13.8833 21.7375 15.1833 21.2125 16.4C20.6875 17.6167 19.975 18.675 19.075 19.575C18.175 20.475 17.1167 21.1875 15.9 21.7125C14.6833 22.2375 13.3833 22.5 12 22.5ZM12 20.5C14.2333 20.5 16.125 19.725 17.675 18.175C19.225 16.625 20 14.7333 20 12.5C20 10.2667 19.225 8.375 17.675 6.825C16.125 5.275 14.2333 4.5 12 4.5C9.76667 4.5 7.875 5.275 6.325 6.825C4.775 8.375 4 10.2667 4 12.5C4 14.7333 4.775 16.625 6.325 18.175C7.875 19.725 9.76667 20.5 12 20.5Z", "fill", "white"], [1, "fund-info"], [1, "d-flex", "flex-column", "gap-4"], [1, "inner-font", "mt-3", "d-flex", "flex-column", "gap-4"], [1, "mt-3", "list-gstyle"], [1, "contactus-section"], [1, "btn", "btn-black", "z-1"]], template: function WelfareMembershipComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        \u0275\u0275text(5, "Welfare Membership");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "span");
        \u0275\u0275text(9, "Dear All,");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "p");
        \u0275\u0275text(11, "This is to inform that a separate account for Welfare Fund has been opened as per resolution of the Executive Committee of the Indian Civil and Administrative Service (Central) Association, New Delhi. The Fund will be utilized to help officers and their family members at the time of distress. Those Members desirous of contributing may do so using the National Electronic Fund Transfer (NEFT) facility offered by Banks.\xA0 The amount may be sent to the following account:");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 6)(13, "ul", 7)(14, "li");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(15, "svg", 8)(16, "mask", 9);
        \u0275\u0275element(17, "rect", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "g", 11);
        \u0275\u0275element(19, "path", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(20, "span");
        \u0275\u0275text(21, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275text(22, " : IC&AS (Central) Welfare Fund ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "li");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(24, "svg", 8)(25, "mask", 13);
        \u0275\u0275element(26, "rect", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "g", 14);
        \u0275\u0275element(28, "path", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(29, "span");
        \u0275\u0275text(30, "Account No");
        \u0275\u0275elementEnd();
        \u0275\u0275text(31, " : 65240107059");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "li");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(33, "svg", 8)(34, "mask", 13);
        \u0275\u0275element(35, "rect", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "g", 14);
        \u0275\u0275element(37, "path", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(38, "span");
        \u0275\u0275text(39, "IFSC Code");
        \u0275\u0275elementEnd();
        \u0275\u0275text(40, " : SBIN0050203");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(41, "div", 15)(42, "div", 16);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(43, "svg", 17);
        \u0275\u0275element(44, "path", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275text(45, "Important Info for Fund transfer ");
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(46, "div", 15)(47, "div", 19)(48, "ol", 20)(49, "li");
        \u0275\u0275text(50, "In order for us to match the member details with transaction for transfer of funds, it is requested that:- ");
        \u0275\u0275elementStart(51, "ol", 21)(52, "li")(53, "span");
        \u0275\u0275text(54, "At the time of the NEFT transfer, the Name, Batch, Cadre may be indicated in the Remarks field included in the transaction. In case there is insufficient space, please mention your ID No., e.g. 01NL005200. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "li");
        \u0275\u0275text(56, "Following details may be sent to the E-Mail ID\xA0iasassociation@gmail.com\xA0on successful completion of NEFT transfer: ");
        \u0275\u0275elementStart(57, "ul", 22)(58, "li");
        \u0275\u0275text(59, "UTR No. (of the confirmed transaction):");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "li");
        \u0275\u0275text(61, "Amount deposited:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "li");
        \u0275\u0275text(63, "Name:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "li");
        \u0275\u0275text(65, "Cadre:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "li");
        \u0275\u0275text(67, "Batch:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "li");
        \u0275\u0275text(69, "Mobile No.:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "li");
        \u0275\u0275text(71, "E-Mail ID:");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(72, "li");
        \u0275\u0275text(73, "Please do not use any other mode of digital/online payment as it becomes that much more difficult for us to reconcile.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "li");
        \u0275\u0275text(75, "In case of non-receipt of E-Mail or confirmation of transfer, acknowledgment of the membership contribution will not be sent.");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(76, "div", 15)(77, "div", 23)(78, "p");
        \u0275\u0275text(79, "For more information about membership benefits, Get in touch with us.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "button", 24);
        \u0275\u0275text(81, "Contact Us");
        \u0275\u0275elementEnd()()()()();
      }
    }, styles: ['\n\n.main-allmembers-section[_ngcontent-%COMP%] {\n  background-color: #150f22;\n  padding-bottom: 120px;\n}\n.main-gradient[_ngcontent-%COMP%] {\n  background-image: url("./media/internalpages-bg.png");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100% 100%;\n}\n.heading-div[_ngcontent-%COMP%] {\n  padding: 93px 0px;\n}\n.heading-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 48px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: normal;\n}\n.heading-div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n}\n.dear-all[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.dear-all[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #FFF;\n  font-family: Urbanist;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 150%;\n}\n.dear-all[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #FFF;\n  font-family: Urbanist;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 150%;\n}\n.list-div[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #FFF;\n  font-family: Urbanist;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 150%;\n  margin: 0px;\n}\n.list-div[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin: 0px;\n}\n.important[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid #FFF;\n  background: var(--new, linear-gradient(130deg, #492FB2 -1.74%, #ADADAD 108.02%));\n  padding: 10px;\n  color: #FFF;\n  font-family: Urbanist;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 150%;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.fund-info[_ngcontent-%COMP%] {\n  color: #FFF;\n  font-family: Urbanist;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 150%;\n  padding: 32px 0px;\n}\n.fund-info[_ngcontent-%COMP%]   .inner-font[_ngcontent-%COMP%] {\n  color: #FFF;\n  font-family: Urbanist;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 300;\n  line-height: 150%;\n}\n.list-gstyle[_ngcontent-%COMP%] {\n  list-style-type: disc;\n  padding-left: 1.5rem;\n}\n.contactus-section[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 24px;\n  background: var(--new, linear-gradient(130deg, #492FB2 -1.74%, #ADADAD 108.02%));\n  padding: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  overflow: hidden;\n}\n.contactus-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #FFF;\n  font-family: Urbanist;\n  font-size: 28px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 150%;\n  margin: 0px;\n  width: 50%;\n}\n.contactus-section[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 50%;\n  background: url("./media/ias-contact-rings.png") no-repeat center right;\n  background-size: cover;\n  border-top-right-radius: 24px;\n  border-bottom-right-radius: 24px;\n}\n/*# sourceMappingURL=welfare-membership.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WelfareMembershipComponent, { className: "WelfareMembershipComponent", filePath: "src/app/website/pages/membership/welfare-membership/welfare-membership.component.ts", lineNumber: 10 });
})();
export {
  WelfareMembershipComponent
};
//# sourceMappingURL=chunk-PAITD2EM.js.map
