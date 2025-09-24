import {
  ActivatedRoute,
  RouterLink
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
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PY442ZFB.js";
import "./chunk-ASLTLD6L.js";

// src/app/website/pages/resources/readmore-news/readmore-news.component.ts
function ReadmoreNewsComponent_div_21_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "p", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "small", 24);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "hr", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const blog_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(blog_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Published On ", \u0275\u0275pipeBind2(5, 2, blog_r1.createdAt, "dd MMM, yyyy"), " ");
  }
}
function ReadmoreNewsComponent_div_21_main_7_a_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 33)(2, "mask", 34);
    \u0275\u0275element(3, "rect", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "g", 36);
    \u0275\u0275element(5, "path", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("href", ctx_r1.mainBlog.newsLink, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.mainBlog.newsLink, " ");
  }
}
function ReadmoreNewsComponent_div_21_main_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 26);
    \u0275\u0275element(1, "img", 27);
    \u0275\u0275elementStart(2, "p", 28);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2", 29);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ReadmoreNewsComponent_div_21_main_7_a_7_Template, 7, 2, "a", 30);
    \u0275\u0275element(8, "p", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.mainBlog.bannerImage, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Published On ", \u0275\u0275pipeBind2(4, 5, ctx_r1.mainBlog.createdAt, "dd MMMM, yyyy"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.mainBlog.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.mainBlog.newsLink);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r1.mainBlog.description || ctx_r1.mainBlog.content, \u0275\u0275sanitizeHtml);
  }
}
function ReadmoreNewsComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "aside", 16)(2, "div", 17)(3, "h5", 18);
    \u0275\u0275text(4, "Latest News");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ReadmoreNewsComponent_div_21_div_6_Template, 7, 5, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ReadmoreNewsComponent_div_21_main_7_Template, 9, 8, "main", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r1.latestBlogs);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.mainBlog);
  }
}
function ReadmoreNewsComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1, "Loading news...");
    \u0275\u0275elementEnd();
  }
}
var ReadmoreNewsComponent = class _ReadmoreNewsComponent {
  constructor(http, route) {
    this.http = http;
    this.route = route;
    this.mainBlog = null;
    this.latestBlogs = [];
    this.loading = true;
  }
  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      const id = params.get("id");
      if (id) {
        this.fetchNews(id);
      }
    });
  }
  fetchNews(id) {
    this.http.get(`${environment.apiUrl}/news`).subscribe({
      next: (res) => {
        if (res?.success && res.data?.data) {
          const allNews = res.data.data;
          this.mainBlog = allNews.find((n) => String(n.id) === id);
          this.latestBlogs = allNews.filter((n) => String(n.id) !== id).slice(0, 3);
        }
        this.loading = false;
      },
      error: (err) => {
        console.error("Error fetching news:", err);
        this.loading = false;
      }
    });
  }
  static {
    this.\u0275fac = function ReadmoreNewsComponent_Factory(t) {
      return new (t || _ReadmoreNewsComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReadmoreNewsComponent, selectors: [["app-readmore-news"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 24, vars: 3, consts: [["loadingTpl", ""], [1, "main-allmembers-section"], [1, "main-gradient"], [1, "container"], [1, "heading-div"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "d-flex", "align-items-center"], [1, "breadcrumb-item", "m-0"], ["href", "/homepage"], [3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active", "m-0"], [1, "coming-soon-di"], [1, "container", "common-text-style"], [1, "py-4"], ["class", "row", 4, "ngIf", "ngIfElse"], [1, "row"], [1, "col-12", "col-lg-3", "order-1", "order-lg-2", "mb-4", "mb-lg-0"], [1, "d-flex", "align-items-center", "mb-3", "latest-news-header"], [1, "mb-0", "me-3", "read-more-heading"], [1, "latest-news-line", "flex-grow-1"], ["class", "mb-5", 4, "ngFor", "ngForOf"], ["class", "col-12 col-lg-9 order-2 order-lg-1", 4, "ngIf"], [1, "mb-5"], [1, "fw-medium", "font-size"], [1, "published-date", "common-text-style"], [1, "mt-4"], [1, "col-12", "col-lg-9", "order-2", "order-lg-1"], ["alt", "blog image", 1, "img-fluid", "rounded", "mb-3", "blog-img", 3, "src"], [1, "mb-1", "published-date", "card-text-news"], [1, "fw-bold", "mb-3", "heading-content", "mt-3"], ["target", "_blank", "class", "text-decoration-underline news-link truncate mb-5 link:hover", 3, "href", 4, "ngIf"], [1, "main-text-content", 3, "innerHTML"], ["target", "_blank", 1, "text-decoration-underline", "news-link", "truncate", "mb-5", "link:hover", 3, "href"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", 1, "me-1"], ["id", "mask0", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "24", "height", "24", 2, "mask-type", "alpha"], ["width", "24", "height", "24", "fill", "#D9D9D9"], ["mask", "url(#mask0)"], ["d", "M11 17H7C5.61667 17 4.4375 16.5125 3.4625 15.5375C2.4875 14.5625 2 13.3833 2 12C2 10.6167 2.4875 9.4375 3.4625 8.4625C4.4375 7.4875 5.61667 7 7 7H11V9H7C6.16667 9 5.45833 9.29167 4.875 9.875C4.29167 10.4583 4 11.1667 4 12C4 12.8333 4.29167 13.5417 4.875 14.125C5.45833 14.7083 6.16667 15 7 15H11V17ZM8 13V11H16V13H8ZM13 17V15H17C17.8333 15 18.5417 14.7083 19.125 14.125C19.7083 13.5417 20 12.8333 20 12C20 11.1667 19.7083 10.4583 19.125 9.875C18.5417 9.29167 17.8333 9 17 9H13V7H17C18.3833 7 19.5625 7.4875 20.5375 8.4625C21.5125 9.4375 22 10.6167 22 12C22 13.3833 21.5125 14.5625 20.5375 15.5375C19.5625 16.5125 18.3833 17 17 17H13Z", "fill", "white"], [1, "text-center", "py-5"]], template: function ReadmoreNewsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "nav", 5)(5, "ol", 6)(6, "li", 7)(7, "a", 8);
        \u0275\u0275text(8, "Home");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "li", 7)(10, "a", 9);
        \u0275\u0275text(11, "News");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "li", 10);
        \u0275\u0275text(13, "News reader");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "h1");
        \u0275\u0275text(15, "Latest News");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "p");
        \u0275\u0275text(17, "Get the latest updates from IAS associations and official sources.");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(18, "div", 11)(19, "div", 12)(20, "div", 13);
        \u0275\u0275template(21, ReadmoreNewsComponent_div_21_Template, 8, 2, "div", 14)(22, ReadmoreNewsComponent_ng_template_22_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        const loadingTpl_r3 = \u0275\u0275reference(23);
        \u0275\u0275advance(10);
        \u0275\u0275property("routerLink", "/homepage/news-blogs");
        \u0275\u0275advance(11);
        \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", loadingTpl_r3);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, HttpClientModule, RouterLink], styles: ['\n\n.main-allmembers-section[_ngcontent-%COMP%] {\n  background-color: #150f22;\n  padding-bottom: 120px;\n}\n.main-gradient[_ngcontent-%COMP%] {\n  background-image: url("./media/internalpages-bg.png");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100% 100%;\n}\n.heading-div[_ngcontent-%COMP%] {\n  padding: 93px 0px;\n}\n.heading-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 48px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: normal;\n}\n.heading-div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-style: normal;\n  line-height: normal;\n}\n.bottom-margin[_ngcontent-%COMP%] {\n  margin-bottom: 100px;\n}\n.read-more-heading[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n}\n.news-video[_ngcontent-%COMP%] {\n  max-width: 553px;\n  max-height: 340px;\n  width: auto;\n  height: auto;\n  border-radius: 16px;\n}\n.truncate[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  width: 100%;\n}\n.common-text-style[_ngcontent-%COMP%] {\n  font-style: normal;\n  line-height: normal;\n  text-transform: capitalize;\n  font-family: "Urbanist";\n  color: #FFFFFF;\n}\n.news-link[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: #bbb !important;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-family: "Urbanist";\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  text-transform: lowercase;\n}\n.published-date[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  margin-bottom: 16px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  color: #fff !important;\n}\n.news-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n  color: rgb(76, 76, 248) !important;\n}\n.blog-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  max-width: 819px;\n  max-height: 392px;\n}\n@media (min-width: 768px) {\n  .blog-img[_ngcontent-%COMP%] {\n    min-width: 600px;\n  }\n}\n.font-size[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n}\n.heading-content[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: 600;\n}\n.main-text-content[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n  color: #fff !important;\n}\n.latest-news-line[_ngcontent-%COMP%] {\n  height: 4px;\n  max-width: 222px;\n  flex-grow: 1;\n  background:\n    linear-gradient(\n      130deg,\n      #492FB2 -1.74%,\n      rgba(73, 47, 178, 0.61) 125.81%);\n  border-radius: 4px;\n}\n@media (max-width: 576px) {\n  .latest-news-line[_ngcontent-%COMP%] {\n    max-width: 120px;\n  }\n}\n.latest-divide-line[_ngcontent-%COMP%] {\n  height: 1px;\n  max-width: 373px;\n  flex-grow: 1;\n  background:\n    linear-gradient(\n      0deg,\n      rgba(101, 130, 255, 0.18) 0%,\n      rgba(192, 91, 218, 0.18) 100%);\n  border-radius: 4px;\n}\n/*# sourceMappingURL=readmore-news.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReadmoreNewsComponent, { className: "ReadmoreNewsComponent", filePath: "src/app/website/pages/resources/readmore-news/readmore-news.component.ts", lineNumber: 14 });
})();
export {
  ReadmoreNewsComponent
};
//# sourceMappingURL=chunk-SWI7KTEF.js.map
