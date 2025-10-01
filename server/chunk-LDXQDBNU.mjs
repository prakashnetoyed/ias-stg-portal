import './polyfills.server.mjs';
import {
  UserService
} from "./chunk-VPO5HD3O.mjs";
import {
  TimeAgoPipe
} from "./chunk-R2TLOVHR.mjs";
import {
  AuthService
} from "./chunk-YG7QR4BN.mjs";
import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-6XERLHKS.mjs";
import "./chunk-2JDN2HEQ.mjs";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-VTTRVRAU.mjs";
import {
  ToastService
} from "./chunk-KVWIJTHH.mjs";
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-KVDSLLK3.mjs";
import "./chunk-24VIC3GD.mjs";

// src/app/website/pages/post/post.component.ts
var _c0 = () => ["/homepage/community"];
function PostComponent_div_12_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 40);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.postData.createdBy.doptOfficer.profilePic, \u0275\u0275sanitizeUrl);
  }
}
function PostComponent_div_12_div_9_ng_container_1_img_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 45);
  }
  if (rf & 2) {
    const file_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r1.s3Url + file_r3, \u0275\u0275sanitizeUrl);
  }
}
function PostComponent_div_12_div_9_ng_container_1_video_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "video", 46);
  }
  if (rf & 2) {
    const file_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r1.s3Url + file_r3, \u0275\u0275sanitizeUrl);
  }
}
function PostComponent_div_12_div_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, PostComponent_div_12_div_9_ng_container_1_img_1_Template, 1, 1, "img", 43)(2, PostComponent_div_12_div_9_ng_container_1_video_2_Template, 1, 1, "video", 44);
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
function PostComponent_div_12_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275template(1, PostComponent_div_12_div_9_ng_container_1_Template, 3, 2, "ng-container", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.postData.mediaFile);
  }
}
function PostComponent_div_12_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47)(1, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function PostComponent_div_12_div_35_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newComment, $event) || (ctx_r1.newComment = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 49);
    \u0275\u0275listener("click", function PostComponent_div_12_div_35_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addComment());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 31);
    \u0275\u0275element(4, "path", 50);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newComment);
  }
}
function PostComponent_div_12_div_36_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 59);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r5 == null ? null : c_r5.caption);
  }
}
function PostComponent_div_12_div_36_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60)(1, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function PostComponent_div_12_div_36_ng_template_12_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.editCommentText, $event) || (ctx_r1.editCommentText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 62);
    \u0275\u0275listener("click", function PostComponent_div_12_div_36_ng_template_12_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const c_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateComment(c_r5.id));
    });
    \u0275\u0275text(3, " \u2714 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 63);
    \u0275\u0275listener("click", function PostComponent_div_12_div_36_ng_template_12_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cancelEdit());
    });
    \u0275\u0275text(5, " \u2716 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editCommentText);
  }
}
function PostComponent_div_12_div_36_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 64);
    \u0275\u0275listener("click", function PostComponent_div_12_div_36_ng_container_15_Template_span_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const c_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startEdit(c_r5));
    });
    \u0275\u0275text(2, "\u270F\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 65);
    \u0275\u0275listener("click", function PostComponent_div_12_div_36_ng_container_15_Template_span_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const c_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteComment(c_r5.id));
    });
    \u0275\u0275text(4, "\u{1F5D1}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function PostComponent_div_12_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 52);
    \u0275\u0275element(2, "img", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 54)(4, "div", 55)(5, "div", 54)(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 56);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "timeAgo");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, PostComponent_div_12_div_36_div_11_Template, 3, 1, "div", 57)(12, PostComponent_div_12_div_36_ng_template_12_Template, 6, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div");
    \u0275\u0275template(15, PostComponent_div_12_div_36_ng_container_15_Template, 5, 0, "ng-container", 58);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    const editTpl_r8 = \u0275\u0275reference(13);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", c_r5 == null ? null : c_r5.createdBy == null ? null : c_r5.createdBy.doptOfficer == null ? null : c_r5.createdBy.doptOfficer.profilePic, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(c_r5 == null ? null : c_r5.createdBy == null ? null : c_r5.createdBy.doptOfficer == null ? null : c_r5.createdBy.doptOfficer.englishName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 6, c_r5 == null ? null : c_r5.createdAt));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.editingCommentId !== c_r5.id)("ngIfElse", editTpl_r8);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", (c_r5 == null ? null : c_r5.createdBy == null ? null : c_r5.createdBy.id) === ctx_r1.whoamiId && ctx_r1.editingCommentId !== c_r5.id);
  }
}
function PostComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "div", 16);
    \u0275\u0275template(3, PostComponent_div_12_img_3_Template, 1, 1, "img", 17);
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h4");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "timeAgo");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, PostComponent_div_12_div_9_Template, 2, 1, "div", 18);
    \u0275\u0275elementStart(10, "div", 19)(11, "h1");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(15, "div", 20);
    \u0275\u0275elementStart(16, "div", 21)(17, "div", 22)(18, "div", 23);
    \u0275\u0275listener("click", function PostComponent_div_12_Template_div_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleLike(ctx_r1.postData));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 24);
    \u0275\u0275element(20, "path", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "span", 26);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 27);
    \u0275\u0275listener("click", function PostComponent_div_12_Template_div_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copyPostLink(ctx_r1.postData.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 28);
    \u0275\u0275element(25, "path", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, "Copy Link ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(27, "div", 30);
    \u0275\u0275listener("click", function PostComponent_div_12_Template_div_click_27_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleComments());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(28, "svg", 31)(29, "mask", 32);
    \u0275\u0275element(30, "rect", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "g", 34);
    \u0275\u0275element(32, "path", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(33, " Comment ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(34, "div", 36);
    \u0275\u0275template(35, PostComponent_div_12_div_35_Template, 5, 1, "div", 37)(36, PostComponent_div_12_div_36_Template, 16, 8, "div", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "div", 39);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.postData == null ? null : ctx_r1.postData.createdBy == null ? null : ctx_r1.postData.createdBy.doptOfficer == null ? null : ctx_r1.postData.createdBy.doptOfficer.profilePic);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.postData == null ? null : ctx_r1.postData.createdBy == null ? null : ctx_r1.postData.createdBy.doptOfficer == null ? null : ctx_r1.postData.createdBy.doptOfficer.englishName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 13, ctx_r1.postData.createdAt));
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
    \u0275\u0275advance(13);
    \u0275\u0275property("ngIf", ctx_r1.showComments);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.comments);
  }
}
function PostComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "p", 66);
    \u0275\u0275text(2, "posts unavailable.");
    \u0275\u0275elementEnd()();
  }
}
var PostComponent = class _PostComponent {
  constructor(route, http, toastService, userService) {
    this.route = route;
    this.http = http;
    this.toastService = toastService;
    this.userService = userService;
    this.auth = inject(AuthService);
    this.postData = null;
    this.animate = false;
    this.newComment = "";
    this.editingCommentId = null;
    this.editCommentText = "";
    this.comments = [];
    this.showComments = true;
    this.s3Url = environment.s3Url;
    this.whoamiId = null;
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.postId = params["id"];
      if (this.postId) {
        this.auth.checkAuth();
        this.singleposts(+this.postId);
        this.userService.getUser().subscribe((user) => {
          if (user) {
            this.whoamiId = user?.id;
            console.log("Current User ID:", this.whoamiId);
          } else {
            console.log("No user logged in");
          }
        });
      }
    });
  }
  toggleComments() {
    this.showComments = !this.showComments;
  }
  singleposts(id) {
    let URL;
    if (this.auth.isLoggedIn() === true) {
      URL = `${environment.apiUrl}/communities/users?populate=communityComments&id=${id}`;
    } else {
      URL = `${environment.apiUrl}/communities?populate=postTag&populate=createdBy&id=${id}`;
    }
    this.http.get(URL).subscribe({
      next: (res) => {
        console.log(res);
        this.postData = res.data.data[0];
        this.comments = this.postData?.communityComments?.slice().reverse();
        console.log("postdata", this.postData);
        console.log("comments", this.comments);
      },
      error: (err) => {
        console.error("Error fetching Events:", err);
      }
    });
  }
  copyPostLink(postId) {
    const url = `${window.location.origin}/homepage/post?id=${postId}`;
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
  addComment() {
    if (this.newComment.trim()) {
      const payload = {
        caption: this.newComment,
        communityId: +this.postId
      };
      console.log("comment payload", payload);
      this.http.post(`${environment.apiUrl}/communities/comment`, payload).subscribe({
        next: (res) => {
          this.singleposts(+this.postId);
          this.newComment = "";
          this.toastService.showToast("Comment Added", "success");
        },
        error: (err) => {
          console.error("Error in Comment:", err);
          this.toastService.showToast("Comment Failed", "danger");
        }
      });
    }
  }
  startEdit(comment) {
    this.editingCommentId = comment.id;
    this.editCommentText = comment.caption;
  }
  cancelEdit() {
    this.editingCommentId = null;
    this.editCommentText = "";
  }
  updateComment(commentId) {
    const payload = {
      caption: this.editCommentText,
      commentId
    };
    this.http.put(`${environment.apiUrl}/communities/comment`, payload).subscribe({
      next: () => {
        this.singleposts(+this.postId);
        this.editingCommentId = null;
        this.editCommentText = "";
        this.toastService.showToast("Comment Updated", "success");
      },
      error: (err) => {
        console.error("Error updating comment:", err);
        this.toastService.showToast("Update Failed", "danger");
      }
    });
  }
  deleteComment(commentId) {
    if (!confirm("Are you sure you want to delete this comment?"))
      return;
    this.http.delete(`${environment.apiUrl}/communities/comment/${commentId}`).subscribe({
      next: (res) => {
        this.singleposts(+this.postId);
        this.toastService.showToast("Comment Deleted", "success");
      },
      error: (err) => {
        console.error("Error deleting comment:", err);
        this.toastService.showToast("Delete Failed", "danger");
      }
    });
  }
  static {
    this.\u0275fac = function PostComponent_Factory(t) {
      return new (t || _PostComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(UserService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PostComponent, selectors: [["app-post"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 4, consts: [["editTpl", ""], [1, "singlepost-section"], [1, "container"], [1, "post-tabs-div", "mb-5"], [1, "cursor-pointer", "fs-5", "fw-bold", "text-white", 3, "routerLink"], [1, "fas", "fa-arrow-left"], [1, "featured-heade"], [1, "post-content-div", "d-flex", "align-items-start", "gap-5", "mt-4"], [1, "left-posts", "w-75"], [1, "allpost-div", "d-flex", "flex-column", "gap-5"], ["class", "post", 4, "ngIf"], ["class", "mb-2", 4, "ngIf"], [1, "right-addpost", "w-25"], ["routerLink", "/", 1, "btn", "btn-light"], [1, "post"], [1, "index-3"], [1, "image-name-div", "d-flex", "align-items-center", "gap-2", "mb-3", "z-1"], ["class", "rounded-circle me-2", "alt", "User", 3, "src", 4, "ngIf"], ["class", "position-relative imgcontainer overflow-auto d-flex gap-3 w-100 pb-2", 4, "ngIf"], [1, "post-title-desc", "my-4", "z-1"], [1, "divider", "z-1"], [1, "like-share-div", "my-3", "z-1", "d-flex", "align-items-center", "gap-3"], [1, "like-div", "d-flex", "align-items-center"], [1, "like-button", "overflow-visible", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "21", "height", "19", "viewBox", "0 0 21 19", "fill", "none"], ["d", "M10.293 19L8.84297 17.7C7.15964 16.1834 5.76797 14.875 4.66797 13.775C3.56797 12.675 2.69297 11.6875 2.04297 10.8125C1.39297 9.93752 0.938802 9.13336 0.680469 8.40002C0.422135 7.66669 0.292969 6.91669 0.292969 6.15002C0.292969 4.58336 0.817969 3.27502 1.86797 2.22502C2.91797 1.17502 4.2263 0.650024 5.79297 0.650024C6.65964 0.650024 7.48464 0.833358 8.26797 1.20002C9.0513 1.56669 9.7263 2.08336 10.293 2.75002C10.8596 2.08336 11.5346 1.56669 12.318 1.20002C13.1013 0.833358 13.9263 0.650024 14.793 0.650024C16.3596 0.650024 17.668 1.17502 18.718 2.22502C19.768 3.27502 20.293 4.58336 20.293 6.15002C20.293 6.91669 20.1638 7.66669 19.9055 8.40002C19.6471 9.13336 19.193 9.93752 18.543 10.8125C17.893 11.6875 17.018 12.675 15.918 13.775C14.818 14.875 13.4263 16.1834 11.743 17.7L10.293 19ZM10.293 16.3C11.893 14.8667 13.2096 13.6375 14.243 12.6125C15.2763 11.5875 16.093 10.6959 16.693 9.93752C17.293 9.17919 17.7096 8.50419 17.943 7.91252C18.1763 7.32086 18.293 6.73336 18.293 6.15002C18.293 5.15002 17.9596 4.31669 17.293 3.65002C16.6263 2.98336 15.793 2.65002 14.793 2.65002C14.0096 2.65002 13.2846 2.87086 12.618 3.31252C11.9513 3.75419 11.493 4.31669 11.243 5.00002H9.34297C9.09297 4.31669 8.63464 3.75419 7.96797 3.31252C7.3013 2.87086 6.5763 2.65002 5.79297 2.65002C4.79297 2.65002 3.95964 2.98336 3.29297 3.65002C2.6263 4.31669 2.29297 5.15002 2.29297 6.15002C2.29297 6.73336 2.40964 7.32086 2.64297 7.91252C2.8763 8.50419 3.29297 9.17919 3.89297 9.93752C4.49297 10.6959 5.30964 11.5875 6.34297 12.6125C7.3763 13.6375 8.69297 14.8667 10.293 16.3Z", "fill", "white"], [1, "like-count"], [1, "share-div", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "19", "height", "14", "viewBox", "0 0 19 14", "fill", "none"], ["d", "M2.29297 14V10C2.29297 9.16667 2.58464 8.45833 3.16797 7.875C3.7513 7.29167 4.45964 7 5.29297 7H14.468L10.868 10.6L12.293 12L18.293 6L12.293 0L10.868 1.4L14.468 5H5.29297C3.90964 5 2.73047 5.4875 1.75547 6.4625C0.780468 7.4375 0.292969 8.61667 0.292969 10V14H2.29297Z", "fill", "white"], [1, "share-div", 2, "cursor", "pointer", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none"], ["id", "mask0_52684_2642", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "24", "height", "24", 2, "mask-type", "alpha"], ["width", "24", "height", "24", "fill", "#D9D9D9"], ["mask", "url(#mask0_52684_2642)"], ["d", "M0 22V4C0 3.45 0.195833 2.97917 0.5875 2.5875C0.979167 2.19583 1.45 2 2 2H18C18.55 2 19.0208 2.19583 19.4125 2.5875C19.8042 2.97917 20 3.45 20 4V16C20 16.55 19.8042 17.0208 19.4125 17.4125C19.0208 17.8042 18.55 18 18 18H4L0 22ZM3.15 16H18V4H2V17.125L3.15 16Z", "fill", "white"], [1, "comment-section"], ["class", "comment-input mt-3 position-relative", 4, "ngIf"], ["class", "comment d-flex my-4", 4, "ngFor", "ngForOf"], [1, "gradient-div"], ["alt", "User", 1, "rounded-circle", "me-2", 3, "src"], [1, "position-relative", "imgcontainer", "overflow-auto", "d-flex", "gap-3", "w-100", "pb-2"], [4, "ngFor", "ngForOf"], ["class", "img-fluid rounded", "alt", "Post Image", 3, "src", 4, "ngIf"], ["class", "img-fluid rounded", "controls", "", 3, "src", 4, "ngIf"], ["alt", "Post Image", 1, "img-fluid", "rounded", 3, "src"], ["controls", "", 1, "img-fluid", "rounded", 3, "src"], [1, "comment-input", "mt-3", "position-relative"], ["type", "text", "placeholder", "Write a public comment here...", 1, "form-control", "pe-5", 3, "ngModelChange", "ngModel"], [1, "send-btn", 3, "click"], ["d", "M2.01 21.0005L23 12.0005L2.01 3.00049L2 10.0005L17 12.0005L2 14.0005L2.01 21.0005Z", "fill", "#171717"], [1, "comment", "d-flex", "my-4"], [1, "avatar", "me-2", "mt-1"], ["alt", "user", "draggable", "false", 1, "comment-profilepic", 3, "src"], [1, "flex-grow-1"], [1, "d-flex", "align-items-center", "justify-content-between", "b-1"], [1, "time", "ms-2"], [4, "ngIf", "ngIfElse"], [4, "ngIf"], [1, "mb-0"], [1, "edit-comment", "position-relative"], ["type", "text", 1, "form-control", "pe-10", 3, "ngModelChange", "ngModel"], [1, "icon-btn", "tick-btn", 3, "click"], [1, "icon-btn", "cross-btn", 3, "click"], [2, "cursor", "pointer", "color", "blue", 3, "click"], [2, "cursor", "pointer", "color", "red", "margin-left", "8px", 3, "click"], [1, "mb-2"]], template: function PostComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "p")(4, "span", 4);
        \u0275\u0275element(5, "i", 5);
        \u0275\u0275text(6, " Back to Community ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "h2", 6);
        \u0275\u0275text(8, "Featured Post");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "div", 9);
        \u0275\u0275template(12, PostComponent_div_12_Template, 38, 15, "div", 10)(13, PostComponent_div_13_Template, 3, 0, "div", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 12)(15, "h1");
        \u0275\u0275text(16, "Your Stories Deserve the Spotlight Too.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "h4");
        \u0275\u0275text(18, "Join and Get Featured !");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "button", 13);
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
    }, dependencies: [TimeAgoPipe, RouterModule, RouterLink, CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['@charset "UTF-8";\n\n\n\n.singlepost-section[_ngcontent-%COMP%] {\n  background-color: #150f22;\n  padding: 60px 0 120px 0;\n}\n.featured-heade[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 22px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 19.647px;\n  margin: 0px;\n}\n.left-posts[_ngcontent-%COMP%] {\n  width: 75%;\n}\n.left-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%] {\n  border-radius: 16.7px;\n  padding: 19px 24px;\n  border: 1px solid rgba(192, 192, 192, 0.2862745098);\n  background:\n    linear-gradient(\n      0deg,\n      #150f22 0%,\n      #1b112b 100%);\n  position: relative;\n  overflow: hidden;\n}\n.left-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 30%;\n  left: -100px;\n  width: 457.208px;\n  height: 206.723px;\n  border-radius: 457.208px;\n  opacity: 0.48;\n  background:\n    linear-gradient(\n      270deg,\n      #54008c 13.44%,\n      #fb0 119.38%);\n  filter: blur(62.4px);\n  z-index: 0;\n}\n.left-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .index-3[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 3;\n}\n.left-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .image-name-div[_ngcontent-%COMP%], .left-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .post-title-desc[_ngcontent-%COMP%], .left-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%], .left-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .like-share-div[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.left-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .image-name-div[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 13.753px;\n  font-weight: 500;\n  line-height: 19.647px;\n  margin: 0px;\n}\n.left-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .image-name-div[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.37);\n  font-family: Urbanist;\n  font-size: 13.753px;\n  font-weight: 500;\n  line-height: 19.647px;\n  margin: 0px;\n}\n.left-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .post-title-desc[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 19.647px;\n}\n.left-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .post-title-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.59);\n  font-family: Urbanist;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: normal;\n  letter-spacing: 0.16px;\n}\n.left-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #555;\n  width: 100%;\n}\n.left-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .like-share-div[_ngcontent-%COMP%]   .share-div[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n  font-family: Urbanist;\n  font-size: 13.753px;\n  font-weight: 500;\n  line-height: 19.647px;\n  margin: 0px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n}\n.left-posts[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%]   .like-share-div[_ngcontent-%COMP%]   .like-div[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 13.753px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 19.647px;\n}\nimg.rounded-circle.me-2[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n}\n.right-addpost[_ngcontent-%COMP%] {\n  width: 25%;\n  border-radius: 15px;\n  border: 2px solid rgba(192, 192, 192, 0.2862745098);\n  background:\n    linear-gradient(\n      180deg,\n      #140e22 0%,\n      #503888 100%);\n  height: 239px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n}\n.right-addpost[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n  text-align: center;\n  font-family: Urbanist;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 30px;\n}\n.right-addpost[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #fff;\n  text-align: center;\n  font-family: Urbanist;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 300;\n  line-height: 30px;\n}\n.imgcontainer[_ngcontent-%COMP%] {\n  height: 300px;\n}\n.imgcontainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: auto;\n}\n.comment-profilepic[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.comment[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  letter-spacing: 0.16px;\n}\n.comment[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.37);\n  font-family: Urbanist;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 19.647px;\n}\n.comment[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.59);\n  font-family: Urbanist;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  letter-spacing: 0.16px;\n}\n.comment-input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.comment-input[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-right: 3rem;\n}\n.comment-input[_ngcontent-%COMP%]   .send-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 0.75rem;\n  transform: translateY(-50%);\n  border: none;\n  background: transparent;\n  padding: 0;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.comment-input[_ngcontent-%COMP%]   .send-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.comment-input[_ngcontent-%COMP%]   .send-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #fff;\n}\n.form-control[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #FFF;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background-color: rgba(255, 255, 255, 0.2588235294);\n  background-clip: padding-box;\n  border: var(--bs-border-width) solid var(--bs-border-color);\n  border-radius: var(--bs-border-radius);\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.form-control[_ngcontent-%COMP%]::placeholder {\n  color: #FFF;\n  opacity: 1;\n}\n.edit-comment[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.edit-comment[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-right: 5rem;\n}\n.edit-comment[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  font-size: 1.2rem;\n  padding: 0 0.25rem;\n}\n.edit-comment[_ngcontent-%COMP%]   .tick-btn[_ngcontent-%COMP%] {\n  right: 2.2rem;\n  color: #28a745;\n}\n.edit-comment[_ngcontent-%COMP%]   .cross-btn[_ngcontent-%COMP%] {\n  right: 0.5rem;\n  color: #dc3545;\n}\n.edit-comment[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n@media (max-width: 1000px) {\n  .right-addpost[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .left-posts[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=post.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PostComponent, { className: "PostComponent", filePath: "src/app/website/pages/post/post.component.ts", lineNumber: 19 });
})();
export {
  PostComponent
};
//# sourceMappingURL=chunk-LDXQDBNU.mjs.map
