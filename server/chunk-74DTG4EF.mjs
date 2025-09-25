import './polyfills.server.mjs';
import {
  RouterLink
} from "./chunk-6ATHX5LA.mjs";
import "./chunk-7CCGWKBH.mjs";
import "./chunk-LKXSFKPG.mjs";
import "./chunk-TCHJBQHP.mjs";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-VCJFYSIH.mjs";
import "./chunk-24VIC3GD.mjs";

// src/app/website/pages/ias-aboutus/ias-aboutus.component.ts
var IasAboutusComponent = class _IasAboutusComponent {
  static {
    this.\u0275fac = function IasAboutusComponent_Factory(t) {
      return new (t || _IasAboutusComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IasAboutusComponent, selectors: [["app-ias-aboutus"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 90, vars: 1, consts: [[1, "main-aboutus-page"], [1, "main-gradient"], [1, "container"], [1, "heading-div"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "d-flex", "align-items-center"], [1, "breadcrumb-item", "m-0"], ["href", "/"], ["aria-current", "page", 1, "breadcrumb-item", "active", "m-0"], [1, "whatwedo"], [1, "row"], [1, "col-lg-6", "mb-4"], [1, "image-wrapper"], ["src", "../../../../assets/images/whatwedo.png", "alt", "whatwedo", "draggable", "false", 1, "img-fluid", "w-100"], [1, "membercard"], [1, "col-lg-6", "ps-lg-5"], [1, "main-heading-div"], [1, "section-text"], [1, "other-sections"], [1, "future-vision"], [1, "vision-cards"], [1, "vision"], [1, "white-circle"], ["xmlns", "http://www.w3.org/2000/svg", "width", "50", "height", "50", "viewBox", "0 0 50 50", "fill", "none"], ["id", "mask0_500_861", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "50", "height", "50", 2, "mask-type", "alpha"], ["width", "50", "height", "50", "fill", "#D9D9D9"], ["mask", "url(#mask0_500_861)"], ["id", "mask1_500_861", "maskUnits", "userSpaceOnUse", "x", "-1", "y", "-1", "width", "51", "height", "51", 2, "mask-type", "alpha"], ["x", "-0.00195312", "y", "-0.00012207", "width", "50", "height", "50", "fill", "#D9D9D9"], ["mask", "url(#mask1_500_861)"], ["d", "M4.16406 41.6666V35.8332C4.16406 34.6874 4.4592 33.611 5.04948 32.6041C5.63976 31.5971 6.45573 30.8333 7.4974 30.3124C9.26823 29.4096 11.2648 28.6458 13.487 28.0208C15.7092 27.3958 18.1571 27.0833 20.8307 27.0833C21.8724 27.0833 22.888 27.1353 23.8776 27.2395C24.8672 27.3437 25.8307 27.4999 26.7682 27.7083L23.1224 31.3541C22.7405 31.2846 22.3672 31.2499 22.0026 31.2499H20.8307C18.3655 31.2499 16.1519 31.5451 14.1901 32.1353C12.2283 32.7256 10.6224 33.368 9.3724 34.0624C9.0599 34.236 8.80816 34.4791 8.61719 34.7916C8.42622 35.1041 8.33073 35.4513 8.33073 35.8332V37.4999H21.3516L25.5182 41.6666H4.16406ZM32.3932 42.4999L25.2057 35.3124L28.1224 32.3958L32.3932 36.6666L42.9141 26.1458L45.8307 29.0624L32.3932 42.4999ZM20.8307 24.9999C18.5391 24.9999 16.5773 24.1839 14.9453 22.552C13.3134 20.9201 12.4974 18.9583 12.4974 16.6666C12.4974 14.3749 13.3134 12.4131 14.9453 10.7812C16.5773 9.14922 18.5391 8.33325 20.8307 8.33325C23.1224 8.33325 25.0842 9.14922 26.7161 10.7812C28.3481 12.4131 29.1641 14.3749 29.1641 16.6666C29.1641 18.9583 28.3481 20.9201 26.7161 22.552C25.0842 24.1839 23.1224 24.9999 20.8307 24.9999ZM20.8307 20.8333C21.9766 20.8333 22.9575 20.4253 23.7734 19.6093C24.5894 18.7933 24.9974 17.8124 24.9974 16.6666C24.9974 15.5208 24.5894 14.5398 23.7734 13.7239C22.9575 12.9079 21.9766 12.4999 20.8307 12.4999C19.6849 12.4999 18.704 12.9079 17.888 13.7239C17.0721 14.5398 16.6641 15.5208 16.6641 16.6666C16.6641 17.8124 17.0721 18.7933 17.888 19.6093C18.704 20.4253 19.6849 20.8333 20.8307 20.8333Z", "fill", "#1C1B1F"], ["xmlns", "http://www.w3.org/2000/svg", "width", "42", "height", "42", "viewBox", "0 0 42 42", "fill", "none"], ["d", "M16.0938 27.7604L33.6458 10.2083C33.2639 9.79167 32.8819 9.38368 32.5 8.98438C32.1181 8.58507 31.7014 8.21181 31.25 7.86458L14.9479 24.2188C15.0868 24.8438 15.2431 25.4427 15.4167 26.0156C15.5903 26.5885 15.816 27.1701 16.0938 27.7604ZM33.6979 31.4063C34.7049 30.191 35.5208 28.8715 36.1458 27.4479C36.7708 26.0243 37.1701 24.5313 37.3438 22.9688L24.3229 35.9896C24.6007 36.0938 24.8872 36.2153 25.1823 36.3542C25.4774 36.4931 25.7639 36.5972 26.0417 36.6667C27.5694 36.1806 28.9757 35.4861 30.2604 34.5833C31.5451 33.6806 32.691 32.6215 33.6979 31.4063ZM4.16667 20.8333C4.16667 25.0694 5.5382 28.7413 8.28125 31.849C11.0243 34.9566 14.4444 36.7882 18.5417 37.3438C16.0417 35.434 14.0625 33.0469 12.6042 30.1823C11.1458 27.3177 10.4167 24.2014 10.4167 20.8333C10.4167 17.4653 11.1458 14.349 12.6042 11.4844C14.0625 8.61979 16.0417 6.23264 18.5417 4.32292C14.4444 4.87847 11.0243 6.71007 8.28125 9.81771C5.5382 12.9253 4.16667 16.5972 4.16667 20.8333ZM20.6771 33.6979L37.0833 17.3438C36.9445 16.7188 36.7882 16.1111 36.6146 15.5208C36.441 14.9306 36.2153 14.3576 35.9375 13.8021L18.3333 31.3542C18.7153 31.8056 19.0799 32.2135 19.4271 32.5781C19.7743 32.9427 20.191 33.316 20.6771 33.6979ZM20.8333 41.6667C17.9514 41.6667 15.2431 41.1198 12.7083 40.026C10.1736 38.9323 7.96875 37.4479 6.09375 35.5729C4.21875 33.6979 2.73438 31.4931 1.64063 28.9583C0.546875 26.4236 0 23.7153 0 20.8333C0 17.9514 0.546875 15.2431 1.64063 12.7083C2.73438 10.1736 4.21875 7.96875 6.09375 6.09375C7.96875 4.21875 10.1736 2.73438 12.7083 1.64063C15.2431 0.546875 17.9514 0 20.8333 0C23.7153 0 26.4236 0.546875 28.9583 1.64063C31.4931 2.73438 33.6979 4.21875 35.5729 6.09375C37.4479 7.96875 38.9323 10.1736 40.026 12.7083C41.1198 15.2431 41.6667 17.9514 41.6667 20.8333C41.6667 23.7153 41.1198 26.4236 40.026 28.9583C38.9323 31.4931 37.4479 33.6979 35.5729 35.5729C33.6979 37.4479 31.4931 38.9323 28.9583 40.026C26.4236 41.1198 23.7153 41.6667 20.8333 41.6667ZM14.7396 18.4896L27.6042 5.625C27.3264 5.52083 27.0747 5.40799 26.849 5.28646C26.6233 5.16493 26.3715 5.06945 26.0938 5C23.1076 5.97222 20.5816 7.66493 18.5156 10.0781C16.4497 12.4913 15.191 15.2951 14.7396 18.4896Z", "fill", "#1C1B1F"], ["id", "mask0_50659_2004", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "50", "height", "50", 2, "mask-type", "alpha"], ["mask", "url(#mask0_50659_2004)"], ["d", "M24.7396 41.6666C24.8785 41.6666 25.0174 41.6319 25.1562 41.5625C25.2951 41.493 25.3993 41.4236 25.4687 41.3541L42.5521 24.2708C42.9688 23.8541 43.2726 23.3854 43.4635 22.8645C43.6545 22.3437 43.75 21.8229 43.75 21.302C43.75 20.7465 43.6545 20.217 43.4635 19.7135C43.2726 19.21 42.9688 18.7673 42.5521 18.3854L33.6979 9.53121C33.316 9.11454 32.8733 8.81072 32.3698 8.61975C31.8663 8.42878 31.3368 8.33329 30.7812 8.33329C30.2604 8.33329 29.7396 8.42878 29.2188 8.61975C28.6979 8.81072 28.2292 9.11454 27.8125 9.53121L27.2396 10.1041L31.0938 14.0104C31.6146 14.4965 31.9965 15.052 32.2396 15.677C32.4826 16.302 32.6042 16.9618 32.6042 17.6562C32.6042 19.1145 32.1094 20.3385 31.1198 21.3281C30.1302 22.3177 28.9062 22.8125 27.4479 22.8125C26.7535 22.8125 26.0851 22.6909 25.4427 22.4479C24.8003 22.2048 24.2361 21.8402 23.75 21.3541L19.8437 17.5L10.7292 26.6145C10.625 26.7187 10.5469 26.8316 10.4948 26.9531C10.4427 27.0746 10.4167 27.2048 10.4167 27.3437C10.4167 27.6215 10.5208 27.8732 10.7292 28.0989C10.9375 28.3246 11.1806 28.4375 11.4583 28.4375C11.5972 28.4375 11.7361 28.4027 11.875 28.3333C12.0139 28.2639 12.1181 28.1944 12.1875 28.125L19.2708 21.0416L22.1875 23.9583L15.1562 31.0416C15.0521 31.1458 14.974 31.2586 14.9219 31.3802C14.8698 31.5017 14.8437 31.6319 14.8437 31.7708C14.8437 32.0486 14.9479 32.2916 15.1562 32.5C15.3646 32.7083 15.6076 32.8125 15.8854 32.8125C16.0243 32.8125 16.1632 32.7777 16.3021 32.7083C16.441 32.6388 16.5451 32.5694 16.6146 32.5L23.6979 25.4687L26.6146 28.3854L19.5833 35.4687C19.4792 35.5382 19.401 35.6423 19.349 35.7812C19.2969 35.9201 19.2708 36.059 19.2708 36.1979C19.2708 36.4757 19.375 36.7187 19.5833 36.927C19.7917 37.1354 20.0347 37.2395 20.3125 37.2395C20.4514 37.2395 20.5816 37.2135 20.7031 37.1614C20.8247 37.1093 20.9375 37.0312 21.0417 36.927L28.125 29.8958L31.0417 32.8125L23.9583 39.8958C23.8542 40 23.776 40.1128 23.724 40.2343C23.6719 40.3559 23.6458 40.4861 23.6458 40.625C23.6458 40.9027 23.7587 41.1458 23.9844 41.3541C24.2101 41.5625 24.4618 41.6666 24.7396 41.6666ZM24.6875 45.8333C23.4028 45.8333 22.2656 45.408 21.276 44.5573C20.2865 43.7066 19.7049 42.6389 19.5312 41.3541C18.3507 41.1805 17.3611 40.6944 16.5625 39.8958C15.7639 39.0972 15.2778 38.1076 15.1042 36.927C13.9236 36.7534 12.9427 36.2586 12.1615 35.4427C11.3802 34.6267 10.9028 33.6458 10.7292 32.5C9.40972 32.3264 8.33333 31.7534 7.5 30.7812C6.66667 29.809 6.25 28.6632 6.25 27.3437C6.25 26.6493 6.38021 25.9809 6.64062 25.3385C6.90104 24.6961 7.27431 24.1319 7.76042 23.6458L19.8437 11.6145L26.6667 18.4375C26.7361 18.5416 26.8403 18.6198 26.9792 18.6718C27.1181 18.7239 27.2569 18.75 27.3958 18.75C27.7083 18.75 27.9687 18.6545 28.1771 18.4635C28.3854 18.2725 28.4896 18.0208 28.4896 17.7083C28.4896 17.5694 28.4635 17.4305 28.4115 17.2916C28.3594 17.1527 28.2812 17.0486 28.1771 16.9791L20.7292 9.53121C20.3472 9.11454 19.9045 8.81072 19.401 8.61975C18.8976 8.42878 18.3681 8.33329 17.8125 8.33329C17.2917 8.33329 16.7708 8.42878 16.25 8.61975C15.7292 8.81072 15.2604 9.11454 14.8437 9.53121L7.5 16.927C7.1875 17.2395 6.92708 17.6041 6.71875 18.0208C6.51042 18.4375 6.37153 18.8541 6.30208 19.2708C6.23264 19.6875 6.23264 20.1128 6.30208 20.5468C6.37153 20.9809 6.51042 21.3888 6.71875 21.7708L3.69792 24.7916C3.10764 23.993 2.67361 23.1163 2.39583 22.1614C2.11806 21.2066 2.01389 20.243 2.08333 19.2708C2.15278 18.2986 2.39583 17.3524 2.8125 16.4323C3.22917 15.5121 3.80208 14.6875 4.53125 13.9583L11.875 6.61454C12.7083 5.81593 13.6372 5.20829 14.6615 4.79163C15.6858 4.37496 16.7361 4.16663 17.8125 4.16663C18.8889 4.16663 19.9392 4.37496 20.9635 4.79163C21.9878 5.20829 22.8993 5.81593 23.6979 6.61454L24.2708 7.18746L24.8438 6.61454C25.6771 5.81593 26.6059 5.20829 27.6302 4.79163C28.6545 4.37496 29.7049 4.16663 30.7812 4.16663C31.8576 4.16663 32.908 4.37496 33.9323 4.79163C34.9566 5.20829 35.8681 5.81593 36.6667 6.61454L45.4688 15.4166C46.2674 16.2152 46.875 17.1354 47.2917 18.177C47.7083 19.2187 47.9167 20.2777 47.9167 21.3541C47.9167 22.4305 47.7083 23.4809 47.2917 24.5052C46.875 25.5295 46.2674 26.4409 45.4688 27.2395L28.3854 44.2708C27.8993 44.7569 27.3351 45.1389 26.6927 45.4166C26.0503 45.6944 25.3819 45.8333 24.6875 45.8333Z", "fill", "#1C1B1F"], [1, "future-vision", "text-center"], ["src", "../../../../assets/images/about-shaping.svg", "alt", " our foundation image", "draggable", "false", 1, "w-100"], [1, "join-us-section"], [1, "joincomunity-div"], [1, "btn", "btn-black", 3, "routerLink"]], template: function IasAboutusComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "nav", 4)(5, "ol", 5)(6, "li", 6)(7, "a", 7);
        \u0275\u0275text(8, "Home");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "li", 8);
        \u0275\u0275text(10, "About Us");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "h1");
        \u0275\u0275text(12, "About Us");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "p");
        \u0275\u0275text(14, "Discover Who We Are, What Drives Us, and the Values That Shape Our Journey.");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(15, "section", 9)(16, "div", 2)(17, "div", 10)(18, "div", 11)(19, "div", 12);
        \u0275\u0275element(20, "img", 13);
        \u0275\u0275elementStart(21, "div", 14)(22, "h3");
        \u0275\u0275text(23, "1000+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "p");
        \u0275\u0275text(25, "Active Members");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(26, "div", 15)(27, "div", 16)(28, "h1");
        \u0275\u0275text(29, "What we do");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "p", 17);
        \u0275\u0275text(31, " The Indian Administrative Service Central Association is dedicated to strengthening governance, empowering communities, and fostering trust between citizens and public institutions. Rooted in the values of integrity, transparency, and service, we work across sectors to bridge the gap between policy and people. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "p", 17);
        \u0275\u0275text(33, " Our mission is simple yet powerful \u2014 to serve with purpose, lead with vision, and create lasting change for a stronger, better India. ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(34, "div", 18)(35, "div", 2)(36, "div", 19)(37, "h4");
        \u0275\u0275text(38, "Indian Administrative Service Central Association");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "h1");
        \u0275\u0275text(40, "Vision for the Future, Mission for Today");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div", 20)(42, "div", 21)(43, "div", 22);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(44, "svg", 23)(45, "mask", 24);
        \u0275\u0275element(46, "rect", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "g", 26)(48, "mask", 27);
        \u0275\u0275element(49, "rect", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "g", 29);
        \u0275\u0275element(51, "path", 30);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(52, "h1");
        \u0275\u0275text(53, "Integrity First, Always.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "p");
        \u0275\u0275text(55, "Upholding the highest standards of ethics and transparency, we works with integrity, accountability.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(56, "div", 21)(57, "div", 22);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(58, "svg", 31);
        \u0275\u0275element(59, "path", 32);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(60, "h1");
        \u0275\u0275text(61, "Transparency in Action");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "p");
        \u0275\u0275text(63, "Ensuring openness and accountability in every decision, building trust through clear and honest governance");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(64, "div", 21)(65, "div", 22);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(66, "svg", 23)(67, "mask", 33);
        \u0275\u0275element(68, "rect", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "g", 34);
        \u0275\u0275element(70, "path", 35);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(71, "h1");
        \u0275\u0275text(72, "Unity for Progress");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "p");
        \u0275\u0275text(74, "Bringing people and institutions together to achieve common goals, fostering collaboration for lasting progress.");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(75, "div", 18)(76, "div", 2)(77, "div", 36)(78, "h1");
        \u0275\u0275text(79, "Shaping Change Through Clear Objectives");
        \u0275\u0275elementEnd();
        \u0275\u0275element(80, "img", 37);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(81, "div", 38)(82, "div", 2)(83, "div", 39)(84, "h1");
        \u0275\u0275text(85, "Join Our Community");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "p");
        \u0275\u0275text(87, "Be part of a transformative journey towards administrative excellence. Connect with fellow changemakers and drive meaningful impact in public service.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "button", 40);
        \u0275\u0275text(89, "Become a Member");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(88);
        \u0275\u0275property("routerLink", "/signup");
      }
    }, dependencies: [RouterLink], styles: ['\n\n.main-aboutus-page[_ngcontent-%COMP%] {\n  background-color: #150f22;\n  padding-bottom: 120px;\n}\n.whatwedo[_ngcontent-%COMP%] {\n  background-color: #150f22;\n  padding-bottom: 20px;\n  padding-top: 120px;\n}\n.main-gradient[_ngcontent-%COMP%] {\n  background-image: url("./media/internalpages-bg.png");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100% 100%;\n}\n.main-heading-div[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 12px;\n  font-weight: 400;\n}\n@media (max-width: 768px) {\n  .main-heading-div[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.main-heading-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 40px;\n  font-weight: 500;\n}\n@media (max-width: 1024px) {\n  .main-heading-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n}\n@media (max-width: 768px) {\n  .main-heading-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 28px;\n    text-align: center;\n  }\n}\n@media (max-width: 480px) {\n  .main-heading-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n.whatwedo[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  letter-spacing: 1px;\n  color: #ccc;\n  text-transform: uppercase;\n}\n.whatwedo[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 2rem;\n}\n.whatwedo[_ngcontent-%COMP%]   .section-text[_ngcontent-%COMP%] {\n  color: #fff;\n  text-align: justify;\n  font-family: Urbanist;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 24.482px;\n  margin-top: 20px;\n}\n.image-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.image-wrapper[_ngcontent-%COMP%]   .membercard[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -12px;\n  right: -20px;\n  background: #321D44;\n  border: 5px solid #150F22;\n  border-radius: 10px;\n  padding: 20px 25px;\n  text-align: center;\n}\n.image-wrapper[_ngcontent-%COMP%]   .membercard[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #FFF;\n  text-align: center;\n  font-family: Urbanist;\n  font-size: 32.3px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  margin-bottom: 0;\n}\n.image-wrapper[_ngcontent-%COMP%]   .membercard[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.66);\n  text-align: center;\n  font-family: Urbanist;\n  font-size: 18.7px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  margin-bottom: 0;\n}\n.stats-row[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  background: #6450b1;\n  text-align: center;\n  color: #fff;\n  top: -120px;\n  padding: 30px 25px;\n  box-shadow: 0px 0px 50px rgba(255, 255, 255, 0.3);\n}\n@media (min-width: 1200px) {\n  .stats-row[_ngcontent-%COMP%] {\n    position: relative !important;\n  }\n}\n.stats-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #FFF;\n  text-align: center;\n  font-family: Urbanist;\n  font-size: 38px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n}\n.stats-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.66);\n  text-align: center;\n  font-family: Urbanist;\n  font-size: 22px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  margin-bottom: 0;\n}\n.divider-col[_ngcontent-%COMP%] {\n  border-left: 1px solid rgba(255, 255, 255, 0.5);\n  border-right: 1px solid rgba(255, 255, 255, 0.5);\n}\n@media (max-width: 767px) {\n  .divider-col[_ngcontent-%COMP%] {\n    border-top: 1px solid rgba(255, 255, 255, 0.5);\n    border-bottom: 1px solid rgba(255, 255, 255, 0.5);\n    border-left: none;\n    border-right: none;\n    margin: 20px 0;\n    padding: 20px 0;\n  }\n}\n.heading-div[_ngcontent-%COMP%] {\n  padding: 93px 0px;\n}\n.heading-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 48px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: normal;\n}\n.heading-div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n}\n.future-vision[_ngcontent-%COMP%] {\n  margin: 60px 0px 120px 0px;\n}\n.future-vision[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 200;\n  line-height: 22.393px;\n  text-transform: uppercase;\n}\n.future-vision[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 40px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 60px;\n  letter-spacing: -0.1px;\n  margin: 0px;\n}\n.future-vision[_ngcontent-%COMP%]   .vision-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 43px;\n  margin-top: 50px;\n}\n.future-vision[_ngcontent-%COMP%]   .vision[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 102px 16px 75px;\n  height: max-content;\n  border-radius: 37px;\n  border: 1.5px solid var(--1, #6582ff);\n  background: var(--1, linear-gradient(0deg, rgba(101, 130, 255, 0.18) 0%, rgba(192, 91, 218, 0.18) 100%));\n  overflow: hidden;\n}\n.future-vision[_ngcontent-%COMP%]   .vision[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 26px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 60px;\n  letter-spacing: -0.1px;\n  margin-top: 18px;\n}\n.future-vision[_ngcontent-%COMP%]   .vision[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #a6a6a6;\n  font-family: Urbanist;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 141.048%;\n}\n.future-vision[_ngcontent-%COMP%]   .vision[_ngcontent-%COMP%]:nth-of-type(2) {\n  margin-top: 90px;\n}\n.future-vision[_ngcontent-%COMP%]   .vision[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  width: 271px;\n  height: 271px;\n  background: url("./media/vision-rings.png");\n  top: 0px;\n  right: 0px;\n  background-position: right top;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n.future-vision[_ngcontent-%COMP%]   .white-circle[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 13px;\n  border-radius: 999px;\n  width: min-content;\n}\n.joincomunity-div[_ngcontent-%COMP%] {\n  border-radius: 24px;\n  background: var(--new, linear-gradient(130deg, #492fb2 -1.74%, #adadad 108.02%));\n  padding: 47px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.joincomunity-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n  text-align: center;\n  font-family: Urbanist;\n  font-size: 40px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 60px;\n  letter-spacing: -0.1px;\n}\n.joincomunity-div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  text-align: center;\n  font-family: Urbanist;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 32px;\n  letter-spacing: -0.1px;\n  width: 60%;\n}\n.impact-story[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 32px;\n  margin-bottom: 120px;\n}\n.story[_ngcontent-%COMP%]:hover   .icon-circle[_ngcontent-%COMP%] {\n  transform: scale(1.07);\n}\n.story[_ngcontent-%COMP%]:hover   .story-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -20px;\n  right: -20px;\n}\n.story[_ngcontent-%COMP%] {\n  border-radius: 15.41px;\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n}\n.story[_ngcontent-%COMP%]   .icon-circle[_ngcontent-%COMP%] {\n  background-color: rgba(99, 80, 176, 0.09);\n  width: 69.346px;\n  height: 69.346px;\n  position: relative;\n  border-radius: 9999px;\n  transition: all 0.3s ease-in-out;\n}\n.story[_ngcontent-%COMP%]   .story-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -15px;\n  right: -15px;\n  transition: all 0.3s ease-in-out;\n}\n.story[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #272725;\n  text-align: center;\n  font-family: Urbanist;\n  font-size: 22px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: normal;\n  margin-top: 35px;\n}\n@media (max-width: 1000px) {\n  .vision-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n  .vision[_ngcontent-%COMP%]:nth-of-type(2) {\n    margin-top: 0px !important;\n  }\n  .joincomunity-div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n}\n/*# sourceMappingURL=ias-aboutus.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IasAboutusComponent, { className: "IasAboutusComponent", filePath: "src/app/website/pages/ias-aboutus/ias-aboutus.component.ts", lineNumber: 11 });
})();
export {
  IasAboutusComponent
};
//# sourceMappingURL=chunk-74DTG4EF.mjs.map
