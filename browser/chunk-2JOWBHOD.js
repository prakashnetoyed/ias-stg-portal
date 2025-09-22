import {
  RouterLink,
  RouterModule
} from "./chunk-SNZVCUF6.js";
import {
  environment
} from "./chunk-WYW2S4QW.js";
import {
  HttpClient,
  HttpClientModule
} from "./chunk-BK4FBNP4.js";
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-OG7DO3XM.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PY442ZFB.js";
import "./chunk-ASLTLD6L.js";

// src/app/website/pages/resources/news-blogs/news-blogs.component.ts
var _c0 = (a0) => ({ "active": a0 });
var _c1 = () => ["/readmorenews"];
var _c2 = (a0) => ({ id: a0 });
var _c3 = () => ["/readmoreblogs"];
function NewsBlogsComponent_div_25_div_1_img_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 31);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r0.newsList[0].bannerImage, \u0275\u0275sanitizeUrl);
  }
}
function NewsBlogsComponent_div_25_div_1_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 34);
    \u0275\u0275element(3, "path", 35);
    \u0275\u0275elementEnd()()();
  }
}
function NewsBlogsComponent_div_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "p", 18);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 20);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 21);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 22);
    \u0275\u0275element(11, "path", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "button", 24);
    \u0275\u0275text(14, " Read more ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 25);
    \u0275\u0275element(16, "path", 26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "div", 27)(18, "div", 28);
    \u0275\u0275template(19, NewsBlogsComponent_div_25_div_1_img_19_Template, 1, 1, "img", 29)(20, NewsBlogsComponent_div_25_div_1_div_20_Template, 4, 0, "div", 30);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Published on ", \u0275\u0275pipeBind2(4, 8, ctx_r0.newsList[0].createdAt, "dd MMM, yyyy"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.newsList[0].title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.newsList[0].description, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.newsList[0].newsLink, " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(11, _c1))("queryParams", \u0275\u0275pureFunction1(12, _c2, ctx_r0.newsList[0] == null ? null : ctx_r0.newsList[0].id));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r0.newsList[0].bannerImage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.newsList[0].bannerImage);
  }
}
function NewsBlogsComponent_div_25_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40);
    \u0275\u0275element(2, "img", 41);
    \u0275\u0275elementStart(3, "div", 42)(4, "p", 43);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 44);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 45);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 46)(12, "a", 47);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 48)(14, "mask", 49);
    \u0275\u0275element(15, "rect", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "g", 51);
    \u0275\u0275element(17, "path", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(19, "button", 52);
    \u0275\u0275text(20, " Read more ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 53);
    \u0275\u0275element(22, "path", 54);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const news_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", news_r2.bannerImage, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Published On ", \u0275\u0275pipeBind2(6, 8, news_r2.createdAt, "medium"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", news_r2.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", news_r2.description, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("href", news_r2.newsLink, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", news_r2.newsLink, " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(11, _c1))("queryParams", \u0275\u0275pureFunction1(12, _c2, news_r2.id));
  }
}
function NewsBlogsComponent_div_25_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37);
    \u0275\u0275template(2, NewsBlogsComponent_div_25_div_2_div_2_Template, 23, 14, "div", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.newsList);
  }
}
function NewsBlogsComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, NewsBlogsComponent_div_25_div_1_Template, 21, 14, "div", 14)(2, NewsBlogsComponent_div_25_div_2_Template, 3, 1, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loading && ctx_r0.newsList.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loading && ctx_r0.newsList.length > 0);
  }
}
function NewsBlogsComponent_div_26_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "p", 18);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 20);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 24);
    \u0275\u0275text(10, " Read more ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 25);
    \u0275\u0275element(12, "path", 26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "div", 27)(14, "div", 28)(15, "div", 56);
    \u0275\u0275element(16, "img", 57);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Published on ", \u0275\u0275pipeBind2(4, 6, ctx_r0.blogList[0].createdAt, "dd MMM, yyyy"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.blogList[0].title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.blogList[0].description);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(9, _c3))("queryParams", \u0275\u0275pureFunction1(10, _c2, ctx_r0.blogList[0] == null ? null : ctx_r0.blogList[0].id));
    \u0275\u0275advance(7);
    \u0275\u0275property("src", ctx_r0.blogList[0].bannerImage, \u0275\u0275sanitizeUrl);
  }
}
function NewsBlogsComponent_div_26_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40);
    \u0275\u0275element(2, "img", 41);
    \u0275\u0275elementStart(3, "div", 42)(4, "p", 43);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 44);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 58);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 46);
    \u0275\u0275element(12, "a");
    \u0275\u0275elementStart(13, "button", 59);
    \u0275\u0275text(14, " Read more ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 25);
    \u0275\u0275element(16, "path", 26);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const blog_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", blog_r3.bannerImage, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Published On ", \u0275\u0275pipeBind2(6, 6, blog_r3.createdAt, "medium"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", blog_r3.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", blog_r3.description, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(9, _c3))("queryParams", \u0275\u0275pureFunction1(10, _c2, blog_r3.id));
  }
}
function NewsBlogsComponent_div_26_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37);
    \u0275\u0275template(2, NewsBlogsComponent_div_26_div_2_div_2_Template, 17, 12, "div", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.blogList);
  }
}
function NewsBlogsComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, NewsBlogsComponent_div_26_div_1_Template, 17, 12, "div", 14)(2, NewsBlogsComponent_div_26_div_2_Template, 3, 1, "div", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loading && ctx_r0.blogList.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loading && ctx_r0.blogList.length > 0);
  }
}
var NewsBlogsComponent = class _NewsBlogsComponent {
  constructor(http) {
    this.http = http;
    this.selectedSection = "news";
    this.newsList = [];
    this.blogList = [];
    this.loading = true;
  }
  ngOnInit() {
    this.fetchNews();
    this.fetchBlogs();
  }
  fetchNews() {
    if (this.newsList.length)
      return;
    this.http.get(`${environment.apiUrl}/news`).subscribe({
      next: (res) => {
        if (res?.success && res.data?.data) {
          this.newsList = res.data.data;
        }
        this.loading = false;
      },
      error: (err) => {
        console.error("Error fetching news:", err);
        this.loading = false;
      }
    });
  }
  fetchBlogs() {
    this.http.get(`${environment.apiUrl}/blogs`).subscribe({
      next: (res) => {
        if (res?.success && res.data?.data) {
          this.blogList = res.data.data;
        }
        this.loading = false;
      },
      error: (err) => {
        console.error("Error fetching news:", err);
        this.loading = false;
      }
    });
  }
  showSection(type) {
    this.selectedSection = type;
  }
  static {
    this.\u0275fac = function NewsBlogsComponent_Factory(t) {
      return new (t || _NewsBlogsComponent)(\u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewsBlogsComponent, selectors: [["app-news-blogs"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 27, vars: 8, consts: [[1, "main-allmembers-section"], [1, "main-gradient"], [1, "container"], [1, "heading-div"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "d-flex", "align-items-center"], [1, "breadcrumb-item", "m-0"], ["href", "/"], ["aria-current", "page", 1, "breadcrumb-item", "active", "m-0"], [1, "coming-soon-di"], [1, "d-flex", "mt-5", "bottom-margin"], [1, "nav-btn", "me-3", 3, "click", "ngClass"], [1, "nav-btn", 3, "click", "ngClass"], [4, "ngIf"], ["class", "row margin-bottom-card", 4, "ngIf"], ["class", " mt-4", 4, "ngIf"], [1, "row", "margin-bottom-card"], [1, "col-md-7", "div-color", "left-div"], [1, "news-heading", "common-text-style"], [1, "news-second-heading", "common-text-style"], [1, "truncate", "news-heading", "mb-4"], [1, "truncate-link", "news-link"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", 1, "me-1"], ["d", "M11 17H7C5.61667 17 4.4375 16.5125 3.4625 15.5375C2.4875 14.5625 2 13.3833 2 12C2 10.6167 2.4875 9.4375 3.4625 8.4625C4.4375 7.4875 5.61667 7 7 7H11V9H7C6.16667 9 5.45833 9.29167 4.875 9.875C4.29167 10.4583 4 11.1667 4 12C4 12.8333 4.29167 13.5417 4.875 14.125C5.45833 14.7083 6.16667 15 7 15H11V17ZM8 13V11H16V13H8ZM13 17V15H17C17.8333 15 18.5417 14.7083 19.125 14.125C19.7083 13.5417 20 12.8333 20 12C20 11.1667 19.7083 10.4583 19.125 9.875C18.5417 9.29167 17.8333 9 17 9H13V7H17C18.3833 7 19.5625 7.4875 20.5375 8.4625C21.5125 9.4375 22 10.6167 22 12C22 13.3833 21.5125 14.5625 20.5375 15.5375C19.5625 16.5125 18.3833 17 17 17H13Z", "fill", "white"], [1, "read-more-btn", "mt-5", "mb-2", 3, "routerLink", "queryParams"], ["xmlns", "http://www.w3.org/2000/svg", "width", "12", "height", "12", "viewBox", "0 0 12 12"], ["d", "M6 0L4.9425 1.0575L9.1275 5.25H0V6.75H9.1275L4.9425 10.9425L6 12L12 6L6 0Z"], [1, "col-md-5"], [1, "news-video"], ["alt", "News Banner", "class", "w-100", 3, "src", 4, "ngIf"], ["class", "bg-image", 4, "ngIf"], ["alt", "News Banner", 1, "w-100", 3, "src"], [1, "bg-image"], [1, "svg-overlay"], ["xmlns", "http://www.w3.org/2000/svg", "width", "84", "height", "84", "viewBox", "0 0 84 84", "fill", "none"], ["d", "M33.25 57.75L57.75 42L33.25 26.25V57.75ZM42 77C37.1583 77 32.6083 76.0812 28.35 74.2438C24.0917 72.4062 20.3875 69.9125 17.2375 66.7625C14.0875 63.6125 11.5938 59.9083 9.75625 55.65C7.91875 51.3917 7 46.8417 7 42C7 37.1583 7.91875 32.6083 9.75625 28.35C11.5938 24.0917 14.0875 20.3875 17.2375 17.2375C20.3875 14.0875 24.0917 11.5938 28.35 9.75625C32.6083 7.91875 37.1583 7 42 7C46.8417 7 51.3917 7.91875 55.65 9.75625C59.9083 11.5938 63.6125 14.0875 66.7625 17.2375C69.9125 20.3875 72.4062 24.0917 74.2438 28.35C76.0812 32.6083 77 37.1583 77 42C77 46.8417 76.0812 51.3917 74.2438 55.65C72.4062 59.9083 69.9125 63.6125 66.7625 66.7625C63.6125 69.9125 59.9085 72.4062 55.65 74.2438C51.3917 76.0812 46.8417 77 42 77Z", "fill", "white"], [1, "mt-4"], [1, "row", "g-2"], ["class", "col-12 col-md-4", 4, "ngFor", "ngForOf"], [1, "col-12", "col-md-4"], [1, "card", "news-card", "h-100"], ["alt", "News Image", 1, "card-img-top", 3, "src"], [1, "card-body", "d-flex", "flex-column", "justify-content-between"], [1, "published-date", "common-text-style"], [1, "card-title", "common-text-style"], [1, "truncate", "common-text-style"], [1, "d-flex", "justify-content-between", "align-items-center", "card-top-margin"], ["target", "_blank", 1, "link", "flex-grow-1", "me-2", "text-truncate", 3, "href"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none"], ["id", "mask0_51271_503", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "24", "height", "24", 2, "mask-type", "alpha"], ["width", "24", "height", "24", "fill", "#D9D9D9"], ["mask", "url(#mask0_51271_503)"], [1, "btn", "btn-outline-light", "btn-sm", "card-read-more", 3, "routerLink", "queryParams"], ["xmlns", "http://www.w3.org/2000/svg", "width", "12", "height", "12", "viewBox", "0 0 12 12", "fill", "none"], ["d", "M6 0L4.9425 1.0575L9.1275 5.25H0V6.75H9.1275L4.9425 10.9425L6 12L12 6L6 0Z", "fill", "white"], ["class", "mt-4", 4, "ngIf"], [1, "image-container"], ["alt", "Caruna Image", 1, "img-fluid", "rounded", 3, "src"], [1, "truncate", "common-text-style", "mt-5"], [1, "read-more-btn", "mt-5", "mb-2", "card-read-more", 3, "routerLink", "queryParams"]], template: function NewsBlogsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "nav", 4)(5, "ol", 5)(6, "li", 6)(7, "a", 7);
        \u0275\u0275text(8, "Home");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "li", 6)(10, "a", 7);
        \u0275\u0275text(11, "Resources");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "li", 8);
        \u0275\u0275text(13, "News & Blogs");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "h1");
        \u0275\u0275text(15, "Latest News & Blogs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "p");
        \u0275\u0275text(17, "Get the latest updates from IAS associations and official sources.");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(18, "div", 9)(19, "div", 2)(20, "div", 10)(21, "button", 11);
        \u0275\u0275listener("click", function NewsBlogsComponent_Template_button_click_21_listener() {
          return ctx.showSection("news");
        });
        \u0275\u0275text(22, " News ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "button", 12);
        \u0275\u0275listener("click", function NewsBlogsComponent_Template_button_click_23_listener() {
          return ctx.showSection("blog");
        });
        \u0275\u0275text(24, " Blog ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(25, NewsBlogsComponent_div_25_Template, 3, 2, "div", 13)(26, NewsBlogsComponent_div_26_Template, 3, 2, "div", 13);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(21);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c0, ctx.selectedSection === "news"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(6, _c0, ctx.selectedSection === "blog"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.selectedSection === "news");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedSection === "blog");
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DatePipe, RouterModule, RouterLink, HttpClientModule], styles: ['\n\n.main-allmembers-section[_ngcontent-%COMP%] {\n  background-color: #150f22;\n  padding-bottom: 120px;\n}\n.main-gradient[_ngcontent-%COMP%] {\n  background-image: url("./media/internalpages-bg.png");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100% 100%;\n}\n.heading-div[_ngcontent-%COMP%] {\n  padding: 93px 0px;\n}\n.heading-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 48px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: normal;\n}\n.heading-div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n}\n.nav-btn[_ngcontent-%COMP%] {\n  display: flex;\n  width: 103px;\n  padding: 10px;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  border-radius: 100px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: #ffffff;\n  background: #313131;\n}\n.nav-btn.active[_ngcontent-%COMP%] {\n  background: var(--1, linear-gradient(130deg, #492FB2 -1.74%, rgba(73, 47, 178, 0.61) 125.81%));\n  border: 1px solid var(--1, rgba(73, 47, 178, 0.61));\n}\n.bottom-margin[_ngcontent-%COMP%] {\n  margin-bottom: 100px;\n}\n.div-color[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.news-video[_ngcontent-%COMP%] {\n  max-width: 553px;\n  max-height: 340px;\n  border-radius: 16px;\n  object-fit: cover;\n  object-position: top;\n  overflow: hidden;\n}\n.bg-image[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 553px;\n  max-height: 340px;\n  height: 100%;\n  aspect-ratio: 553/340;\n  background:\n    linear-gradient(\n      0deg,\n      rgba(0, 0, 0, 0.5),\n      rgba(0, 0, 0, 0.5)),\n    url("./media/caruna.png");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  border-radius: 8px;\n}\n.svg-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  pointer-events: none;\n}\n.truncate[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  width: 90%;\n}\n.truncate-link[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  width: 70%;\n}\n.news-heading[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 20px;\n  font-weight: 400;\n}\n.common-text-style[_ngcontent-%COMP%] {\n  font-style: normal;\n  line-height: normal;\n  text-transform: capitalize;\n  font-family: "Urbanist";\n  color: #FFFFFF;\n}\n.news-second-heading[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 600;\n}\n.news-link[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: #FFF;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-family: "Urbanist";\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  text-transform: lowercase;\n}\n.readmore-btn[_ngcontent-%COMP%] {\n  display: flex;\n  height: 48px;\n  padding: 12px 24px;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  border-radius: 4px;\n  border: 1px solid #FFF;\n  background-color: transparent;\n  color: #ffffff;\n}\n.news-card[_ngcontent-%COMP%] {\n  border-radius: 24px;\n  background:\n    linear-gradient(\n      148deg,\n      rgba(88, 71, 114, 0.55) -33.59%,\n      rgba(47, 42, 56, 0.55) 79.09%);\n  color: #fff;\n  overflow: hidden;\n  max-width: 420px;\n  padding: 16px;\n}\n.news-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 200px;\n  object-fit: cover;\n  object-position: top;\n  border-radius: 16px;\n}\n.published-date[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  margin-bottom: 16px;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  margin-bottom: 16px;\n  white-space: normal;\n  overflow: visible;\n  text-overflow: unset;\n}\n.text-truncate-2[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  font-size: 0.9rem;\n  opacity: 0.85;\n}\n.link[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #bbb;\n  text-decoration: none;\n}\n.link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.margin-bottom-card[_ngcontent-%COMP%] {\n  margin-bottom: 60px;\n}\n.text-truncate[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 40%;\n}\n.card-top-margin[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n.card-text-news[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n}\n.second-readmore-btn[_ngcontent-%COMP%] {\n  display: flex;\n  height: 36px;\n  padding: 12px 24px;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  border-radius: 4px;\n  border: 1px solid #FFF;\n  background-color: transparent;\n  color: #ffffff;\n}\n.image-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 553px;\n  max-height: 340px;\n  aspect-ratio: 553/340;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 8px;\n}\n.read-more-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 20px;\n  height: 36px;\n  line-height: 1;\n  cursor: pointer;\n  border: 1px solid #fff;\n  border-radius: 6px;\n  background: transparent;\n  color: #fff;\n  transition:\n    background-color 0.25s ease,\n    border-color 0.25s ease,\n    color 0.25s ease;\n}\n.read-more-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-left: 6px;\n}\n.read-more-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #fff;\n  transition: fill 0.25s ease;\n}\n.read-more-btn[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      130deg,\n      #492FB2 -1.74%,\n      rgba(73, 47, 178, 0.61) 125.81%);\n  border-color: transparent;\n  color: #fff;\n}\n.read-more-btn[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #fff;\n}\n.left-div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  justify-content: space-between;\n}\n.card-read-more[_ngcontent-%COMP%] {\n  color: #fff;\n  cursor: pointer;\n  transition:\n    background-color 0.25s ease,\n    border-color 0.25s ease,\n    color 0.25s ease;\n  background: transparent;\n}\n.card-read-more[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-left: 6px;\n}\n.card-read-more[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #fff;\n  transition: fill 0.25s ease;\n}\n.card-read-more[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      130deg,\n      #492FB2 -1.74%,\n      rgba(73, 47, 178, 0.61) 125.81%);\n  border-color: transparent;\n  color: #fff;\n}\n.card-read-more[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #fff;\n}\n/*# sourceMappingURL=news-blogs.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewsBlogsComponent, { className: "NewsBlogsComponent", filePath: "src/app/website/pages/resources/news-blogs/news-blogs.component.ts", lineNumber: 14 });
})();
export {
  NewsBlogsComponent
};
//# sourceMappingURL=chunk-2JOWBHOD.js.map
