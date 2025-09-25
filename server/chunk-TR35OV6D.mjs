import './polyfills.server.mjs';
import {
  ActivatedRoute
} from "./chunk-6ATHX5LA.mjs";
import "./chunk-7CCGWKBH.mjs";
import {
  FormsModule
} from "./chunk-R5BAAMIV.mjs";
import {
  environment
} from "./chunk-SJMEGSB4.mjs";
import {
  HttpClient
} from "./chunk-LKXSFKPG.mjs";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-TCHJBQHP.mjs";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-VCJFYSIH.mjs";
import "./chunk-24VIC3GD.mjs";

// src/app/website/pages/resources/readmore-blogs/readmore-blogs.component.ts
function ReadmoreBlogsComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "p", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "small", 22);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "hr", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const blog_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(blog_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Published On ", blog_r1.createdAt, "");
  }
}
function ReadmoreBlogsComponent_main_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 24);
    \u0275\u0275element(1, "img", 25);
    \u0275\u0275elementStart(2, "p", 26);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 27);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "p", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.mainBlog.bannerImage, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Published On ", ctx_r1.mainBlog.createdAt, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.mainBlog.title);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r1.mainBlog.description, \u0275\u0275sanitizeHtml);
  }
}
var ReadmoreBlogsComponent = class _ReadmoreBlogsComponent {
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
    this.http.get(`${environment.apiUrl}/blogs`).subscribe({
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
    this.\u0275fac = function ReadmoreBlogsComponent_Factory(t) {
      return new (t || _ReadmoreBlogsComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReadmoreBlogsComponent, selectors: [["app-readmore-blogs"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 32, vars: 2, consts: [[1, "main-allmembers-section"], [1, "main-gradient"], [1, "container"], [1, "heading-div"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "d-flex", "align-items-center"], [1, "breadcrumb-item", "m-0"], ["href", "/"], ["href", "/news-blogs"], ["aria-current", "page", 1, "breadcrumb-item", "active", "m-0"], [1, "coming-soon-di"], [1, "container", "common-text-style"], [1, "py-4"], [1, "row"], [1, "col-12", "col-lg-3", "order-1", "order-lg-2", "mb-4", "mb-lg-0"], [1, "d-flex", "align-items-center", "mb-3", "latest-news-header"], [1, "mb-0", "me-3", "read-more-heading"], [1, "latest-news-line", "flex-grow-1"], ["class", "mb-5", 4, "ngFor", "ngForOf"], ["class", "col-12 col-lg-9 order-2 order-lg-1", 4, "ngIf"], [1, "mb-5"], [1, "fw-medium", "font-size"], [1, "published-date", "common-text-style"], [1, "mt-4"], [1, "col-12", "col-lg-9", "order-2", "order-lg-1"], ["alt", "blog image", 1, "img-fluid", "rounded", "mb-3", "blog-img", 3, "src"], [1, "mb-1", "published-date", "card-text-news"], [1, "fw-bold", "mb-3", "heading-content", "mt-3"], [1, "main-text-content", 3, "innerHTML"]], template: function ReadmoreBlogsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "nav", 4)(5, "ol", 5)(6, "li", 6)(7, "a", 7);
        \u0275\u0275text(8, "Home");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "li", 6)(10, "a", 7);
        \u0275\u0275text(11, "Resources");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "li", 6)(13, "a", 8);
        \u0275\u0275text(14, "News & Blogs");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "li", 9);
        \u0275\u0275text(16, "Blog reader");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "h1");
        \u0275\u0275text(18, "Latest News & Blogs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "p");
        \u0275\u0275text(20, "Get the latest updates from IAS associations and official sources.");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(21, "div", 10)(22, "div", 11)(23, "div", 12)(24, "div", 13)(25, "aside", 14)(26, "div", 15)(27, "h5", 16);
        \u0275\u0275text(28, "Latest Blogs");
        \u0275\u0275elementEnd();
        \u0275\u0275element(29, "div", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275template(30, ReadmoreBlogsComponent_div_30_Template, 6, 2, "div", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275template(31, ReadmoreBlogsComponent_main_31_Template, 7, 4, "main", 19);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(30);
        \u0275\u0275property("ngForOf", ctx.latestBlogs);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mainBlog);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule], styles: ['\n\n.main-allmembers-section[_ngcontent-%COMP%] {\n  background-color: #150f22;\n  padding-bottom: 120px;\n}\n.main-gradient[_ngcontent-%COMP%] {\n  background-image: url("./media/internalpages-bg.png");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100% 100%;\n}\n.heading-div[_ngcontent-%COMP%] {\n  padding: 93px 0px;\n}\n.heading-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 48px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: normal;\n}\n.heading-div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-style: normal;\n  line-height: normal;\n}\n.bottom-margin[_ngcontent-%COMP%] {\n  margin-bottom: 100px;\n}\n.read-more-heading[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n}\n.news-video[_ngcontent-%COMP%] {\n  max-width: 553px;\n  max-height: 340px;\n  width: auto;\n  height: auto;\n  border-radius: 16px;\n}\n.truncate[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  width: 100%;\n}\n.common-text-style[_ngcontent-%COMP%] {\n  font-style: normal;\n  line-height: normal;\n  text-transform: capitalize;\n  font-family: "Urbanist";\n  color: #FFFFFF;\n}\n.news-link[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: #bbb !important;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-family: "Urbanist";\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  text-transform: lowercase;\n}\n.published-date[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  margin-bottom: 16px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  color: #fff !important;\n}\n.news-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n  color: rgb(76, 76, 248) !important;\n}\n.blog-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  max-width: 819px;\n  max-height: 392px;\n}\n@media (min-width: 768px) {\n  .blog-img[_ngcontent-%COMP%] {\n    min-width: 600px;\n  }\n}\n.font-size[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n}\n.heading-content[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: 600;\n}\n.main-text-content[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n  color: #fff !important;\n}\n.latest-news-line[_ngcontent-%COMP%] {\n  height: 4px;\n  max-width: 222px;\n  flex-grow: 1;\n  background:\n    linear-gradient(\n      130deg,\n      #492FB2 -1.74%,\n      rgba(73, 47, 178, 0.61) 125.81%);\n  border-radius: 4px;\n}\n@media (max-width: 576px) {\n  .latest-news-line[_ngcontent-%COMP%] {\n    max-width: 120px;\n  }\n}\n.latest-divide-line[_ngcontent-%COMP%] {\n  height: 1px;\n  max-width: 373px;\n  flex-grow: 1;\n  background:\n    linear-gradient(\n      0deg,\n      rgba(101, 130, 255, 0.18) 0%,\n      rgba(192, 91, 218, 0.18) 100%);\n  border-radius: 4px;\n}\n/*# sourceMappingURL=readmore-blogs.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReadmoreBlogsComponent, { className: "ReadmoreBlogsComponent", filePath: "src/app/website/pages/resources/readmore-blogs/readmore-blogs.component.ts", lineNumber: 15 });
})();
export {
  ReadmoreBlogsComponent
};
//# sourceMappingURL=chunk-TR35OV6D.mjs.map
