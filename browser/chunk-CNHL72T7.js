import {
  TimeAgoPipe
} from "./chunk-UIVVOATD.js";
import {
  AuthService
} from "./chunk-KS6VKFHK.js";
import {
  RouterLink
} from "./chunk-SNZVCUF6.js";
import {
  ToastService
} from "./chunk-SHX5MJZM.js";
import {
  environment
} from "./chunk-WYW2S4QW.js";
import {
  HttpClient
} from "./chunk-BK4FBNP4.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-OG7DO3XM.js";
import {
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵpipeBind1,
  ɵɵproperty,
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

// src/app/website/pages/ias-community/ias-community.component.ts
function IasCommunityComponent_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function IasCommunityComponent_button_26_Template_button_click_0_listener() {
      const cat_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectCategory(cat_r2.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.selectedCategory === cat_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cat_r2.name, " ");
  }
}
function IasCommunityComponent_ng_container_32_div_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 45);
  }
  if (rf & 2) {
    const post_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", post_r5.createdBy.doptOfficer.profilePic, \u0275\u0275sanitizeUrl);
  }
}
function IasCommunityComponent_ng_container_32_div_1_div_8_ng_container_1_img_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 50);
  }
  if (rf & 2) {
    const file_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("src", ctx_r2.s3Url + file_r6, \u0275\u0275sanitizeUrl);
  }
}
function IasCommunityComponent_ng_container_32_div_1_div_8_ng_container_1_video_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "video", 51);
  }
  if (rf & 2) {
    const file_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("src", ctx_r2.s3Url + file_r6, \u0275\u0275sanitizeUrl);
  }
}
function IasCommunityComponent_ng_container_32_div_1_div_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, IasCommunityComponent_ng_container_32_div_1_div_8_ng_container_1_img_1_Template, 1, 1, "img", 48)(2, IasCommunityComponent_ng_container_32_div_1_div_8_ng_container_1_video_2_Template, 1, 1, "video", 49);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const file_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", file_r6.endsWith(".jpg") || file_r6.endsWith(".jpeg") || file_r6.endsWith(".png"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", file_r6.endsWith(".mp4"));
  }
}
function IasCommunityComponent_ng_container_32_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275template(1, IasCommunityComponent_ng_container_32_div_1_div_8_ng_container_1_Template, 3, 2, "ng-container", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const post_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", post_r5.mediaFile);
  }
}
function IasCommunityComponent_ng_container_32_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30);
    \u0275\u0275template(2, IasCommunityComponent_ng_container_32_div_1_img_2_Template, 1, 1, "img", 31);
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "timeAgo");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, IasCommunityComponent_ng_container_32_div_1_div_8_Template, 2, 1, "div", 32);
    \u0275\u0275elementStart(9, "div", 33)(10, "h1");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(14, "div", 34);
    \u0275\u0275elementStart(15, "div", 35)(16, "div", 36)(17, "div", 37);
    \u0275\u0275listener("click", function IasCommunityComponent_ng_container_32_div_1_Template_div_click_17_listener() {
      const post_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleLike(post_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 38);
    \u0275\u0275element(19, "path", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "span", 40);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 41);
    \u0275\u0275listener("click", function IasCommunityComponent_ng_container_32_div_1_Template_div_click_22_listener() {
      const post_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.copyPostLink(post_r5.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(23, "svg", 42);
    \u0275\u0275element(24, "path", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, "Copy Link ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(26, "div", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const post_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", post_r5 == null ? null : post_r5.createdBy == null ? null : post_r5.createdBy.doptOfficer == null ? null : post_r5.createdBy.doptOfficer.profilePic);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((post_r5 == null ? null : post_r5.createdBy == null ? null : post_r5.createdBy.doptOfficer == null ? null : post_r5.createdBy.doptOfficer.englishName) || "Unknown User");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 11, post_r5.createdAt));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (post_r5 == null ? null : post_r5.mediaFile == null ? null : post_r5.mediaFile.length) > 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(post_r5 == null ? null : post_r5.caption);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(post_r5 == null ? null : post_r5.description);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("liked", post_r5 == null ? null : post_r5.isLiked)("animate", post_r5 == null ? null : post_r5.animate);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", post_r5 == null ? null : post_r5.likes, " Likes");
  }
}
function IasCommunityComponent_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, IasCommunityComponent_ng_container_32_div_1_Template, 27, 13, "div", 28);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.posts);
  }
}
function IasCommunityComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "h3");
    \u0275\u0275text(2, "No posts found for this category");
    \u0275\u0275elementEnd()();
  }
}
var IasCommunityComponent = class _IasCommunityComponent {
  constructor(http, toastService) {
    this.http = http;
    this.toastService = toastService;
    this.auth = inject(AuthService);
    this.count = 30;
    this.animate = false;
    this.categories = [];
    this.apiCategories = [];
    this.selectedCategory = 0;
    this.toastMessage = "";
    this.s3Url = environment.s3Url;
  }
  ngOnInit() {
    this.loadtags();
    this.auth.checkAuth();
    this.community();
  }
  toggleLike(post) {
    if (!post)
      return;
    const token = localStorage.getItem("authToken");
    if (!token) {
      this.toastService.showToast("Please login to like the posts.", "success");
      return;
    }
    post.animate = true;
    const prevLiked = post.isLiked;
    post.isLiked = !prevLiked;
    post.likes += post.isLiked ? 1 : -1;
    this.http.post(`${environment.apiUrl}/communities/likes`, { communityId: post.id }).subscribe({
      next: (res) => {
        console.log("Like API success:", res);
      },
      error: (err) => {
        console.error("Error in Like post:", err);
        post.isLiked = prevLiked;
        post.likes += post.isLiked ? 1 : -1;
      }
    });
    setTimeout(() => {
      post.animate = false;
    }, 300);
  }
  loadtags() {
    this.http.get(`${environment.apiUrl}/post-tags?limit=0`).subscribe({
      next: (res) => {
        console.log(res);
        this.categories = res.data.data;
        this.apiCategories = [{ id: 0, name: "All" }, ...this.categories];
        console.log(this.categories);
      },
      error: (err) => {
        console.error("Error fetching Events:", err);
      }
    });
  }
  community() {
    if (this.auth.isLoggedIn() === true) {
      this.communityposts(true);
    } else if (this.auth.isLoggedIn() === false) {
      this.communityposts(false);
    }
  }
  communityposts(forUser) {
    let URL;
    if (forUser) {
      URL = `${environment.apiUrl}/communities/users?populate=createdBy&limit=50`;
    } else {
      URL = `${environment.apiUrl}/communities?populate=createdBy&limit=50`;
    }
    this.http.get(URL).subscribe({
      next: (res) => {
        this.posts = res.data.data;
      },
      error: (err) => {
        console.error("Error fetching Events:", err);
      }
    });
  }
  selectCategory(cat) {
    this.selectedCategory = cat;
    console.log("Selected:", cat);
    if (cat === 0) {
      this.community();
    } else {
      this.http.get(`${environment.apiUrl}/communities?populate=createdBy&postTagId=${cat}`).subscribe({
        next: (res) => {
          this.posts = res.data.data;
          console.log("postsssss", this.posts);
        },
        error: (err) => {
          console.error("Error fetching Events:", err);
        }
      });
    }
  }
  copyPostLink(postId) {
    const url = `${window.location.origin}/post?id=${postId}`;
    navigator.clipboard.writeText(url).then(() => {
      this.toastService.showToast("Link copied to clipboard \u2705", "success");
    }).catch((err) => {
      console.error("Failed to copy link: ", err);
    });
  }
  static {
    this.\u0275fac = function IasCommunityComponent_Factory(t) {
      return new (t || _IasCommunityComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ToastService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IasCommunityComponent, selectors: [["app-ias-community"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 42, vars: 3, consts: [["noPosts", ""], [1, "main-allmembers-section"], [1, "main-gradient"], [1, "container"], [1, "heading-div"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "d-flex", "align-items-center"], [1, "breadcrumb-item", "m-0"], ["href", "/homepage"], ["aria-current", "page", 1, "breadcrumb-item", "active", "m-0"], [1, "my-5"], [1, "d-flex", "flex-wrap", "align-items-center", "gap-3"], [1, "trendingtitle"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none"], ["id", "mask0_50733_2147", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "24", "height", "24", 2, "mask-type", "alpha"], ["width", "24", "height", "24", "fill", "#D9D9D9"], ["mask", "url(#mask0_50733_2147)"], ["d", "M3.4 18L2 16.6L7.3 11.3C7.88333 10.7167 8.59167 10.425 9.425 10.425C10.2583 10.425 10.9667 10.7167 11.55 11.3L12.7 12.45C12.9 12.65 13.1375 12.75 13.4125 12.75C13.6875 12.75 13.925 12.65 14.125 12.45L18.575 8H16V6H22V12H20V9.425L15.525 13.875C14.9417 14.4583 14.2333 14.75 13.4 14.75C12.5667 14.75 11.8583 14.4583 11.275 13.875L10.1 12.7C9.91667 12.5167 9.68333 12.425 9.4 12.425C9.11667 12.425 8.88333 12.5167 8.7 12.7L3.4 18Z", "fill", "white"], [1, "category-tabs", "d-flex", "flex-wrap", "gap-3"], ["class", "btn category-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "featured-heade"], [1, "post-content-div", "d-flex", "align-items-start", "gap-5", "mt-4"], [1, "left-posts"], [1, "allpost-div", "d-flex", "flex-column", "gap-5"], [4, "ngIf", "ngIfElse"], [1, "right-addpost"], ["routerLink", "", 1, "btn", "btn-light"], [1, "btn", "category-btn", 3, "click"], ["class", "post", 4, "ngFor", "ngForOf"], [1, "post"], [1, "image-name-div", "d-flex", "align-items-center", "gap-2", "mb-3", "z-1"], ["class", "rounded-circle me-2", "alt", "User", 3, "src", 4, "ngIf"], ["class", "position-relative imgcontainer overflow-auto d-flex gap-3 w-100 pb-2", 4, "ngIf"], [1, "post-title-desc", "my-4", "z-1"], [1, "divider", "z-1"], [1, "like-share-div", "my-3", "z-1", "d-flex", "align-items-center", "gap-3"], [1, "like-div", "d-flex", "align-items-center"], [1, "like-button", "overflow-visible", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "21", "height", "19", "viewBox", "0 0 21 19", "fill", "none"], ["d", "M10.293 19L8.84297 17.7C7.15964 16.1834 5.76797 14.875 4.66797 13.775C3.56797 12.675 2.69297 11.6875 2.04297 10.8125C1.39297 9.93752 0.938802 9.13336 0.680469 8.40002C0.422135 7.66669 0.292969 6.91669 0.292969 6.15002C0.292969 4.58336 0.817969 3.27502 1.86797 2.22502C2.91797 1.17502 4.2263 0.650024 5.79297 0.650024C6.65964 0.650024 7.48464 0.833358 8.26797 1.20002C9.0513 1.56669 9.7263 2.08336 10.293 2.75002C10.8596 2.08336 11.5346 1.56669 12.318 1.20002C13.1013 0.833358 13.9263 0.650024 14.793 0.650024C16.3596 0.650024 17.668 1.17502 18.718 2.22502C19.768 3.27502 20.293 4.58336 20.293 6.15002C20.293 6.91669 20.1638 7.66669 19.9055 8.40002C19.6471 9.13336 19.193 9.93752 18.543 10.8125C17.893 11.6875 17.018 12.675 15.918 13.775C14.818 14.875 13.4263 16.1834 11.743 17.7L10.293 19ZM10.293 16.3C11.893 14.8667 13.2096 13.6375 14.243 12.6125C15.2763 11.5875 16.093 10.6959 16.693 9.93752C17.293 9.17919 17.7096 8.50419 17.943 7.91252C18.1763 7.32086 18.293 6.73336 18.293 6.15002C18.293 5.15002 17.9596 4.31669 17.293 3.65002C16.6263 2.98336 15.793 2.65002 14.793 2.65002C14.0096 2.65002 13.2846 2.87086 12.618 3.31252C11.9513 3.75419 11.493 4.31669 11.243 5.00002H9.34297C9.09297 4.31669 8.63464 3.75419 7.96797 3.31252C7.3013 2.87086 6.5763 2.65002 5.79297 2.65002C4.79297 2.65002 3.95964 2.98336 3.29297 3.65002C2.6263 4.31669 2.29297 5.15002 2.29297 6.15002C2.29297 6.73336 2.40964 7.32086 2.64297 7.91252C2.8763 8.50419 3.29297 9.17919 3.89297 9.93752C4.49297 10.6959 5.30964 11.5875 6.34297 12.6125C7.3763 13.6375 8.69297 14.8667 10.293 16.3Z", "fill", "white"], [1, "like-count"], [1, "share-div", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "19", "height", "14", "viewBox", "0 0 19 14", "fill", "none"], ["d", "M2.29297 14V10C2.29297 9.16667 2.58464 8.45833 3.16797 7.875C3.7513 7.29167 4.45964 7 5.29297 7H14.468L10.868 10.6L12.293 12L18.293 6L12.293 0L10.868 1.4L14.468 5H5.29297C3.90964 5 2.73047 5.4875 1.75547 6.4625C0.780468 7.4375 0.292969 8.61667 0.292969 10V14H2.29297Z", "fill", "white"], [1, "gradient-div"], ["alt", "User", 1, "rounded-circle", "me-2", 3, "src"], [1, "position-relative", "imgcontainer", "overflow-auto", "d-flex", "gap-3", "w-100", "pb-2"], [4, "ngFor", "ngForOf"], ["class", "img-fluid rounded", "alt", "Post Image", 3, "src", 4, "ngIf"], ["class", "img-fluid rounded", "controls", "", 3, "src", 4, "ngIf"], ["alt", "Post Image", 1, "img-fluid", "rounded", 3, "src"], ["controls", "", 1, "img-fluid", "rounded", 3, "src"], [1, "text-white", "text-center", "py-4"]], template: function IasCommunityComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "nav", 5)(5, "ol", 6)(6, "li", 7)(7, "a", 8);
        \u0275\u0275text(8, "Home");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "li", 9);
        \u0275\u0275text(10, "Community");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "h1");
        \u0275\u0275text(12, "Community");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "p");
        \u0275\u0275text(14, "Celebrating the People Behind the Profession \u2014 Sharing Moments, Interests, and Stories that Connect Us.");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(15, "div", 3)(16, "div", 10)(17, "div", 11)(18, "span", 12);
        \u0275\u0275text(19, " Trending Categories ");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(20, "svg", 13)(21, "mask", 14);
        \u0275\u0275element(22, "rect", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "g", 16);
        \u0275\u0275element(24, "path", 17);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(25, "div", 18);
        \u0275\u0275template(26, IasCommunityComponent_button_26_Template, 2, 3, "button", 19);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "h2", 20);
        \u0275\u0275text(28, "Featured Posts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 21)(30, "div", 22)(31, "div", 23);
        \u0275\u0275template(32, IasCommunityComponent_ng_container_32_Template, 2, 1, "ng-container", 24)(33, IasCommunityComponent_ng_template_33_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "div", 25)(36, "h1");
        \u0275\u0275text(37, "Your Stories Deserve the Spotlight Too.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "h4");
        \u0275\u0275text(39, "Join and Get Featured !");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "button", 26);
        \u0275\u0275text(41, "Submit Now");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        const noPosts_r7 = \u0275\u0275reference(34);
        \u0275\u0275advance(26);
        \u0275\u0275property("ngForOf", ctx.apiCategories);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", (ctx.posts == null ? null : ctx.posts.length) > 0)("ngIfElse", noPosts_r7);
      }
    }, dependencies: [RouterLink, CommonModule, NgForOf, NgIf, TimeAgoPipe], styles: ['@charset "UTF-8";\n\n\n\n.main-allmembers-section[_ngcontent-%COMP%] {\n  background-color: #150f22;\n  padding-bottom: 120px;\n}\n.main-gradient[_ngcontent-%COMP%] {\n  background-image: url("./media/internalpages-bg.png");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100% 100%;\n}\n.heading-div[_ngcontent-%COMP%] {\n  padding: 93px 0px;\n}\n.heading-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 48px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: normal;\n}\n.heading-div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n}\n.featured-heade[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 22px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 19.647px;\n  margin: 0px;\n}\n.category-tabs[_ngcontent-%COMP%]   .category-btn[_ngcontent-%COMP%] {\n  border-radius: 50px;\n  border: 1px solid #5A5A5A;\n  color: #fff;\n  padding: 5px 15px;\n  overflow: hidden;\n  color: rgba(255, 255, 255, 0.93);\n  text-overflow: ellipsis;\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: var(--Line-Heights-9, 24px);\n  letter-spacing: var(--Letter-Spacing-3, 0.5px);\n  transition: all 0.2s ease;\n}\n.category-tabs[_ngcontent-%COMP%]   .category-btn[_ngcontent-%COMP%]:hover {\n  border: 1px solid #5A5A5A;\n  background: #434343;\n}\n.category-tabs[_ngcontent-%COMP%]   .category-btn.active[_ngcontent-%COMP%] {\n  border: 1px solid #5A5A5A;\n  background: #434343;\n}\n.trendingtitle[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: rgba(255, 255, 255, 0.93);\n  text-overflow: ellipsis;\n  font-family: Urbanist;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: var(--Line-Heights-9, 24px);\n  letter-spacing: var(--Letter-Spacing-3, 0.5px);\n}\n.left-posts[_ngcontent-%COMP%] {\n  width: 75%;\n}\n.left-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%] {\n  border-radius: 16.7px;\n  padding: 19px 24px;\n  border-image:\n    linear-gradient(\n      to right,\n      rgb(101, 130, 255),\n      rgba(101, 130, 255, 0)) 1;\n  background:\n    linear-gradient(\n      0deg,\n      #150f22 0%,\n      #1b112b 100%);\n  position: relative;\n  overflow: hidden;\n}\n.left-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -30px;\n  left: -142px;\n  width: 457.208px;\n  height: 206.723px;\n  border-radius: 457.208px;\n  opacity: 0.48;\n  background:\n    linear-gradient(\n      270deg,\n      #54008c 13.44%,\n      #fb0 119.38%);\n  filter: blur(62.4px);\n  z-index: 0;\n}\n.left-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .image-name-div[_ngcontent-%COMP%], .left-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .post-title-desc[_ngcontent-%COMP%], .left-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%], .left-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .like-share-div[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.left-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .image-name-div[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 13.753px;\n  font-weight: 500;\n  line-height: 19.647px;\n  margin: 0px;\n}\n.left-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .image-name-div[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.37);\n  font-family: Urbanist;\n  font-size: 13.753px;\n  font-weight: 500;\n  line-height: 19.647px;\n  margin: 0px;\n}\n.left-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .image-name-div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.left-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .post-title-desc[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 19.647px;\n}\n.left-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .post-title-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.59);\n  font-family: Urbanist;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: normal;\n  letter-spacing: 0.16px;\n}\n.left-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #555;\n  width: 100%;\n}\n.left-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .like-share-div[_ngcontent-%COMP%]   .share-div[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n  font-family: Urbanist;\n  font-size: 13.753px;\n  font-weight: 500;\n  line-height: 19.647px;\n  margin: 0px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n}\n.left-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .like-share-div[_ngcontent-%COMP%]   .like-div[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 13.753px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 19.647px;\n}\n.right-addpost[_ngcontent-%COMP%] {\n  width: 25%;\n  border-radius: 15px;\n  border: 2px solid rgba(192, 192, 192, 0.2862745098);\n  background:\n    linear-gradient(\n      180deg,\n      #140e22 0%,\n      #503888 100%);\n  height: 239px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n}\n.right-addpost[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n  text-align: center;\n  font-family: Urbanist;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 30px;\n}\n.right-addpost[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #fff;\n  text-align: center;\n  font-family: Urbanist;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 300;\n  line-height: 30px;\n}\n.imgcontainer[_ngcontent-%COMP%] {\n  height: 300px;\n}\n.imgcontainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: auto;\n}\n@media (max-width: 1000px) {\n  .right-addpost[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .left-posts[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=ias-community.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IasCommunityComponent, { className: "IasCommunityComponent", filePath: "src/app/website/pages/ias-community/ias-community.component.ts", lineNumber: 17 });
})();
export {
  IasCommunityComponent
};
//# sourceMappingURL=chunk-CNHL72T7.js.map
