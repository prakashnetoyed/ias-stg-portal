import './polyfills.server.mjs';
import {
  TimeAgoPipe
} from "./chunk-Z2EFOKLZ.mjs";
import {
  AuthService
} from "./chunk-H545FIBJ.mjs";
import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-IHV4JKV6.mjs";
import {
  ToastService
} from "./chunk-TUOTYXST.mjs";
import {
  environment
} from "./chunk-SJMEGSB4.mjs";
import {
  HttpClient
} from "./chunk-PY5YUHCX.mjs";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-YQCUS5I7.mjs";
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
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-QKHTRG4V.mjs";
import "./chunk-24VIC3GD.mjs";

// src/app/website/pages/post/post.component.ts
var _c0 = () => ["/community"];
function PostComponent_div_12_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 29);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.postData.createdBy.doptOfficer.profilePic, \u0275\u0275sanitizeUrl);
  }
}
function PostComponent_div_12_div_8_ng_container_1_img_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 34);
  }
  if (rf & 2) {
    const file_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r1.s3Url + file_r3, \u0275\u0275sanitizeUrl);
  }
}
function PostComponent_div_12_div_8_ng_container_1_video_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "video", 35);
  }
  if (rf & 2) {
    const file_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r1.s3Url + file_r3, \u0275\u0275sanitizeUrl);
  }
}
function PostComponent_div_12_div_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, PostComponent_div_12_div_8_ng_container_1_img_1_Template, 1, 1, "img", 32)(2, PostComponent_div_12_div_8_ng_container_1_video_2_Template, 1, 1, "video", 33);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const file_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", file_r3.endsWith(".jpg") || file_r3.endsWith(".jpeg") || file_r3.endsWith(".png"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", file_r3.endsWith(".mp4"));
  }
}
function PostComponent_div_12_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275template(1, PostComponent_div_12_div_8_ng_container_1_Template, 3, 2, "ng-container", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.postData.mediaFile);
  }
}
function PostComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275template(2, PostComponent_div_12_img_2_Template, 1, 1, "img", 15);
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "timeAgo");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, PostComponent_div_12_div_8_Template, 2, 1, "div", 16);
    \u0275\u0275elementStart(9, "div", 17)(10, "h1");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(14, "div", 18);
    \u0275\u0275elementStart(15, "div", 19)(16, "div", 20)(17, "div", 21);
    \u0275\u0275listener("click", function PostComponent_div_12_Template_div_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleLike(ctx_r1.postData));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 22);
    \u0275\u0275element(19, "path", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "span", 24);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 25);
    \u0275\u0275listener("click", function PostComponent_div_12_Template_div_click_22_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copyPostLink(ctx_r1.postData.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(23, "svg", 26);
    \u0275\u0275element(24, "path", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, "Copy Link ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(26, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.postData == null ? null : ctx_r1.postData.createdBy == null ? null : ctx_r1.postData.createdBy.doptOfficer == null ? null : ctx_r1.postData.createdBy.doptOfficer.profilePic);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.postData == null ? null : ctx_r1.postData.createdBy == null ? null : ctx_r1.postData.createdBy.doptOfficer == null ? null : ctx_r1.postData.createdBy.doptOfficer.englishName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 11, ctx_r1.postData.createdAt));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.postData.mediaFile.length > 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.postData.caption);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.postData.description);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("liked", ctx_r1.postData == null ? null : ctx_r1.postData.isLiked)("animate", ctx_r1.postData == null ? null : ctx_r1.postData.animate);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.postData == null ? null : ctx_r1.postData.likes, " Likes");
  }
}
function PostComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "p", 36);
    \u0275\u0275text(2, "posts unavailable.");
    \u0275\u0275elementEnd()();
  }
}
var PostComponent = class _PostComponent {
  constructor(route, http, toastService) {
    this.route = route;
    this.http = http;
    this.toastService = toastService;
    this.auth = inject(AuthService);
    this.postData = null;
    this.animate = false;
    this.s3Url = environment.s3Url;
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.postId = params["id"];
      if (this.postId) {
        this.auth.checkAuth();
        this.singleposts(+this.postId);
      }
    });
  }
  singleposts(id) {
    let URL;
    if (this.auth.isLoggedIn() === true) {
      URL = `${environment.apiUrl}/communities/users?populate=postTag&populate=createdBy&id=${id}`;
    } else {
      URL = `${environment.apiUrl}/communities?populate=postTag&populate=createdBy&id=${id}`;
    }
    this.http.get(URL).subscribe({
      next: (res) => {
        console.log(res);
        this.postData = res.data.data[0];
        console.log("postdata", this.postData);
      },
      error: (err) => {
        console.error("Error fetching Events:", err);
      }
    });
  }
  copyPostLink(postId) {
    const url = `${window.location.origin}/post?id=${postId}`;
    navigator.clipboard.writeText(url).then(() => {
      this.toastService.showToast("Link copied to clipboard \u2705", "success");
    }).catch((err) => {
      console.error("Failed to copy link: ", err);
    });
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
  static {
    this.\u0275fac = function PostComponent_Factory(t) {
      return new (t || _PostComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ToastService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PostComponent, selectors: [["app-post"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 4, consts: [[1, "singlepost-section"], [1, "container"], [1, "post-tabs-div", "mb-5"], [1, "cursor-pointer", "fs-5", "fw-bold", "text-white", 3, "routerLink"], [1, "fas", "fa-arrow-left"], [1, "featured-heade"], [1, "post-content-div", "d-flex", "align-items-start", "gap-5", "mt-4"], [1, "left-posts", "w-75"], [1, "allpost-div", "d-flex", "flex-column", "gap-5"], ["class", "post", 4, "ngIf"], ["class", "mb-2", 4, "ngIf"], [1, "right-addpost", "w-25"], ["routerLink", "/", 1, "btn", "btn-light"], [1, "post"], [1, "image-name-div", "d-flex", "align-items-center", "gap-2", "mb-3", "z-1"], ["class", "rounded-circle me-2", "alt", "User", 3, "src", 4, "ngIf"], ["class", "position-relative imgcontainer overflow-auto d-flex gap-3 w-100 pb-2", 4, "ngIf"], [1, "post-title-desc", "my-4", "z-1"], [1, "divider", "z-1"], [1, "like-share-div", "my-3", "z-1", "d-flex", "align-items-center", "gap-3"], [1, "like-div", "d-flex", "align-items-center"], [1, "like-button", "overflow-visible", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "21", "height", "19", "viewBox", "0 0 21 19", "fill", "none"], ["d", "M10.293 19L8.84297 17.7C7.15964 16.1834 5.76797 14.875 4.66797 13.775C3.56797 12.675 2.69297 11.6875 2.04297 10.8125C1.39297 9.93752 0.938802 9.13336 0.680469 8.40002C0.422135 7.66669 0.292969 6.91669 0.292969 6.15002C0.292969 4.58336 0.817969 3.27502 1.86797 2.22502C2.91797 1.17502 4.2263 0.650024 5.79297 0.650024C6.65964 0.650024 7.48464 0.833358 8.26797 1.20002C9.0513 1.56669 9.7263 2.08336 10.293 2.75002C10.8596 2.08336 11.5346 1.56669 12.318 1.20002C13.1013 0.833358 13.9263 0.650024 14.793 0.650024C16.3596 0.650024 17.668 1.17502 18.718 2.22502C19.768 3.27502 20.293 4.58336 20.293 6.15002C20.293 6.91669 20.1638 7.66669 19.9055 8.40002C19.6471 9.13336 19.193 9.93752 18.543 10.8125C17.893 11.6875 17.018 12.675 15.918 13.775C14.818 14.875 13.4263 16.1834 11.743 17.7L10.293 19ZM10.293 16.3C11.893 14.8667 13.2096 13.6375 14.243 12.6125C15.2763 11.5875 16.093 10.6959 16.693 9.93752C17.293 9.17919 17.7096 8.50419 17.943 7.91252C18.1763 7.32086 18.293 6.73336 18.293 6.15002C18.293 5.15002 17.9596 4.31669 17.293 3.65002C16.6263 2.98336 15.793 2.65002 14.793 2.65002C14.0096 2.65002 13.2846 2.87086 12.618 3.31252C11.9513 3.75419 11.493 4.31669 11.243 5.00002H9.34297C9.09297 4.31669 8.63464 3.75419 7.96797 3.31252C7.3013 2.87086 6.5763 2.65002 5.79297 2.65002C4.79297 2.65002 3.95964 2.98336 3.29297 3.65002C2.6263 4.31669 2.29297 5.15002 2.29297 6.15002C2.29297 6.73336 2.40964 7.32086 2.64297 7.91252C2.8763 8.50419 3.29297 9.17919 3.89297 9.93752C4.49297 10.6959 5.30964 11.5875 6.34297 12.6125C7.3763 13.6375 8.69297 14.8667 10.293 16.3Z", "fill", "white"], [1, "like-count"], [1, "share-div", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "19", "height", "14", "viewBox", "0 0 19 14", "fill", "none"], ["d", "M2.29297 14V10C2.29297 9.16667 2.58464 8.45833 3.16797 7.875C3.7513 7.29167 4.45964 7 5.29297 7H14.468L10.868 10.6L12.293 12L18.293 6L12.293 0L10.868 1.4L14.468 5H5.29297C3.90964 5 2.73047 5.4875 1.75547 6.4625C0.780468 7.4375 0.292969 8.61667 0.292969 10V14H2.29297Z", "fill", "white"], [1, "gradient-div"], ["alt", "User", 1, "rounded-circle", "me-2", 3, "src"], [1, "position-relative", "imgcontainer", "overflow-auto", "d-flex", "gap-3", "w-100", "pb-2"], [4, "ngFor", "ngForOf"], ["class", "img-fluid rounded", "alt", "Post Image", 3, "src", 4, "ngIf"], ["class", "img-fluid rounded", "controls", "", 3, "src", 4, "ngIf"], ["alt", "Post Image", 1, "img-fluid", "rounded", 3, "src"], ["controls", "", 1, "img-fluid", "rounded", 3, "src"], [1, "mb-2"]], template: function PostComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p")(4, "span", 3);
        \u0275\u0275element(5, "i", 4);
        \u0275\u0275text(6, " Back to Community ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "h2", 5);
        \u0275\u0275text(8, "Featured Posts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 6)(10, "div", 7)(11, "div", 8);
        \u0275\u0275template(12, PostComponent_div_12_Template, 27, 13, "div", 9)(13, PostComponent_div_13_Template, 3, 0, "div", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 11)(15, "h1");
        \u0275\u0275text(16, "Your Stories Deserve the Spotlight Too.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "h4");
        \u0275\u0275text(18, "Join and Get Featured !");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "button", 12);
        \u0275\u0275text(20, "Submit Now");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(3, _c0));
        \u0275\u0275advance(8);
        \u0275\u0275property("ngIf", ctx.postData !== null);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.postData === null);
      }
    }, dependencies: [TimeAgoPipe, RouterModule, RouterLink, CommonModule, NgForOf, NgIf], styles: ['\n\n.singlepost-section[_ngcontent-%COMP%] {\n  background-color: #150f22;\n  padding: 60px 0 120px 0;\n}\n.featured-heade[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 22px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 19.647px;\n  margin: 0px;\n}\n.left-posts[_ngcontent-%COMP%] {\n  width: 75%;\n}\n.left-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%] {\n  border-radius: 16.7px;\n  padding: 19px 24px;\n  border-image:\n    linear-gradient(\n      to right,\n      rgb(101, 130, 255),\n      rgba(101, 130, 255, 0)) 1;\n  background:\n    linear-gradient(\n      0deg,\n      #150f22 0%,\n      #1b112b 100%);\n  position: relative;\n  overflow: hidden;\n}\n.left-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -30px;\n  left: -142px;\n  width: 457.208px;\n  height: 206.723px;\n  border-radius: 457.208px;\n  opacity: 0.48;\n  background:\n    linear-gradient(\n      270deg,\n      #54008c 13.44%,\n      #fb0 119.38%);\n  filter: blur(62.4px);\n  z-index: 0;\n}\n.left-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .image-name-div[_ngcontent-%COMP%], .left-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .post-title-desc[_ngcontent-%COMP%], .left-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%], .left-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .like-share-div[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.left-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .image-name-div[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 13.753px;\n  font-weight: 500;\n  line-height: 19.647px;\n  margin: 0px;\n}\n.left-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .image-name-div[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.37);\n  font-family: Urbanist;\n  font-size: 13.753px;\n  font-weight: 500;\n  line-height: 19.647px;\n  margin: 0px;\n}\n.left-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .post-title-desc[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 19.647px;\n}\n.left-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .post-title-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.59);\n  font-family: Urbanist;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: normal;\n  letter-spacing: 0.16px;\n}\n.left-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #555;\n  width: 100%;\n}\n.left-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .like-share-div[_ngcontent-%COMP%]   .share-div[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n  font-family: Urbanist;\n  font-size: 13.753px;\n  font-weight: 500;\n  line-height: 19.647px;\n  margin: 0px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n}\n.left-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .like-share-div[_ngcontent-%COMP%]   .like-div[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 13.753px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 19.647px;\n}\n.right-addpost[_ngcontent-%COMP%] {\n  width: 25%;\n  border-radius: 15px;\n  border: 2px solid rgba(192, 192, 192, 0.2862745098);\n  background:\n    linear-gradient(\n      180deg,\n      #140e22 0%,\n      #503888 100%);\n  height: 239px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n}\n.right-addpost[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n  text-align: center;\n  font-family: Urbanist;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 30px;\n}\n.right-addpost[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #fff;\n  text-align: center;\n  font-family: Urbanist;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 300;\n  line-height: 30px;\n}\n.imgcontainer[_ngcontent-%COMP%] {\n  height: 300px;\n}\n.imgcontainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: auto;\n}\n@media (max-width: 1000px) {\n  .right-addpost[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .left-posts[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=post.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PostComponent, { className: "PostComponent", filePath: "src/app/website/pages/post/post.component.ts", lineNumber: 17 });
})();
export {
  PostComponent
};
//# sourceMappingURL=chunk-N3ROP36S.mjs.map
