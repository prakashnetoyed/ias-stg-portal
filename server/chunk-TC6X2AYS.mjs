import './polyfills.server.mjs';
import {
  UserService
} from "./chunk-SC5GVEYG.mjs";
import {
  TimeAgoPipe
} from "./chunk-Z2EFOKLZ.mjs";
import {
  RouterLink
} from "./chunk-YYEOBGKU.mjs";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-BHQ7AL52.mjs";
import {
  ToastService
} from "./chunk-TUOTYXST.mjs";
import {
  environment
} from "./chunk-SJMEGSB4.mjs";
import {
  HttpClient,
  HttpHeaders
} from "./chunk-36N2KB5Q.mjs";
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-2GLKF4UT.mjs";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
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
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-QKHTRG4V.mjs";
import "./chunk-24VIC3GD.mjs";

// src/app/user-portal/pages/user-home/user-home.component.ts
var _c0 = ["offcanvasEl"];
var _c1 = ["errorToast"];
function UserHomeComponent_div_7_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "img", 74);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.user.doptOfficer == null ? null : ctx_r1.user.doptOfficer.profilePic, \u0275\u0275sanitizeUrl);
  }
}
function UserHomeComponent_div_7_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials(ctx_r1.user), " ");
  }
}
function UserHomeComponent_div_7_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275text(1, " Membership Status Active ");
    \u0275\u0275elementEnd();
  }
}
function UserHomeComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "div", 70);
    \u0275\u0275elementContainerStart(2);
    \u0275\u0275template(3, UserHomeComponent_div_7_ng_container_3_Template, 2, 1, "ng-container", 71)(4, UserHomeComponent_div_7_ng_template_4_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h1", 72);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, UserHomeComponent_div_7_div_8_Template, 2, 0, "div", 73);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const initialsBlock_r3 = \u0275\u0275reference(5);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.user.doptOfficer == null ? null : ctx_r1.user.doptOfficer.profilePic)("ngIfElse", initialsBlock_r3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Hi, ", ctx_r1.user.doptOfficer == null ? null : ctx_r1.user.doptOfficer.englishName, "!");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasSubscription);
  }
}
function UserHomeComponent_div_21_div_6_ng_container_1_img_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 93);
  }
  if (rf & 2) {
    const file_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r1.s3Url + file_r5, \u0275\u0275sanitizeUrl);
  }
}
function UserHomeComponent_div_21_div_6_ng_container_1_video_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "video", 94);
  }
  if (rf & 2) {
    const file_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r1.s3Url + file_r5, \u0275\u0275sanitizeUrl);
  }
}
function UserHomeComponent_div_21_div_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, UserHomeComponent_div_21_div_6_ng_container_1_img_1_Template, 1, 1, "img", 91)(2, UserHomeComponent_div_21_div_6_ng_container_1_video_2_Template, 1, 1, "video", 92);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const file_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", file_r5.endsWith(".jpg") || file_r5.endsWith(".jpeg") || file_r5.endsWith(".png"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", file_r5.endsWith(".mp4"));
  }
}
function UserHomeComponent_div_21_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275template(1, UserHomeComponent_div_21_div_6_ng_container_1_Template, 3, 2, "ng-container", 90);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.userposts.mediaFile);
  }
}
function UserHomeComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 76)(1, "div", 77)(2, "div")(3, "small", 62);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "timeAgo");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(6, UserHomeComponent_div_21_div_6_Template, 2, 1, "div", 78);
    \u0275\u0275elementStart(7, "p", 76);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "hr", 79);
    \u0275\u0275elementStart(10, "div", 80)(11, "div", 81)(12, "div", 82);
    \u0275\u0275listener("click", function UserHomeComponent_div_21_Template_div_click_12_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleLike(ctx_r1.userposts));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 83);
    \u0275\u0275element(14, "path", 84);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "span", 85);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 86);
    \u0275\u0275listener("click", function UserHomeComponent_div_21_Template_div_click_17_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copyPostLink(ctx_r1.userposts.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 87);
    \u0275\u0275element(19, "path", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, "Copy Link ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 8, ctx_r1.userposts == null ? null : ctx_r1.userposts.createdAt));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r1.userposts == null ? null : ctx_r1.userposts.mediaFile == null ? null : ctx_r1.userposts.mediaFile.length) > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.userposts == null ? null : ctx_r1.userposts.caption);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("liked", ctx_r1.userposts == null ? null : ctx_r1.userposts.isLiked)("animate", ctx_r1.userposts == null ? null : ctx_r1.userposts.animate);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.userposts == null ? null : ctx_r1.userposts.likes, " Likes");
  }
}
function UserHomeComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76)(1, "p", 76);
    \u0275\u0275text(2, "No recent posts available.");
    \u0275\u0275elementEnd()();
  }
}
function UserHomeComponent_div_29_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 108);
    \u0275\u0275listener("click", function UserHomeComponent_div_29_button_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const event_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(event_r7.url && ctx_r1.openEvent(event_r7.url));
    });
    \u0275\u0275text(1, "Join Event Online");
    \u0275\u0275elementEnd();
  }
}
function UserHomeComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 95)(1, "div", 96)(2, "div", 97);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 98);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 99)(9, "h6", 100);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 101);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 102)(13, "mask", 103);
    \u0275\u0275element(14, "rect", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "g", 105);
    \u0275\u0275element(16, "path", 106);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, UserHomeComponent_div_29_button_18_Template, 2, 0, "button", 107);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", i_r8 % 2 === 0 ? "bg-purple" : "bg-teal");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 6, event_r7.date, "MMM"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 9, event_r7.date, "dd"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(event_r7.title);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", event_r7.location, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", event_r7.url);
  }
}
function UserHomeComponent_div_30_p_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ctx_r1.validTill, "dd MMM yyyy"), " ");
  }
}
function UserHomeComponent_div_30_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p")(1, "span");
    \u0275\u0275text(2, "Valid Till: ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, UserHomeComponent_div_30_p_4_ng_container_3_Template, 3, 4, "ng-container", 71);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const lifetimeTpl_r9 = \u0275\u0275reference(54);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.validTill !== "lifetime")("ngIfElse", lifetimeTpl_r9);
  }
}
function UserHomeComponent_div_30_p_52_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ctx_r1.validTill, "dd MMM yyyy"), " ");
  }
}
function UserHomeComponent_div_30_p_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p")(1, "span");
    \u0275\u0275text(2, "Valid Till: ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, UserHomeComponent_div_30_p_52_ng_container_3_Template, 3, 4, "ng-container", 71);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const lifetimeTpl_r9 = \u0275\u0275reference(54);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.validTill !== "lifetime")("ngIfElse", lifetimeTpl_r9);
  }
}
function UserHomeComponent_div_30_ng_template_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Valid Till:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Lifetime ");
  }
}
function UserHomeComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109)(1, "h1");
    \u0275\u0275text(2, "Membership Expiring in ");
    \u0275\u0275elementStart(3, "span", 40);
    \u0275\u0275template(4, UserHomeComponent_div_30_p_4_Template, 4, 2, "p", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "hr");
    \u0275\u0275elementStart(6, "div", 110)(7, "div", 111)(8, "div", 112);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 113);
    \u0275\u0275element(10, "path", 114);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "p")(12, "span");
    \u0275\u0275text(13, "Membership Type:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 115);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "div", 116)(17, "div", 112);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 102)(19, "mask", 117);
    \u0275\u0275element(20, "rect", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "g", 118);
    \u0275\u0275element(22, "path", 119);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(23, "p")(24, "span");
    \u0275\u0275text(25, "Fee Paid: ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 120)(27, "title", 121);
    \u0275\u0275text(28, "Success");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "desc", 122);
    \u0275\u0275text(30, "Green circle with small white tick");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "circle", 123)(32, "path", 124);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(33, "div", 111)(34, "div", 112);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(35, "svg", 102)(36, "mask", 125);
    \u0275\u0275element(37, "rect", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "g", 126);
    \u0275\u0275element(39, "path", 127);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(40, "p")(41, "span");
    \u0275\u0275text(42, "Member Since:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 116)(46, "div", 112);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(47, "svg", 102)(48, "mask", 128);
    \u0275\u0275element(49, "rect", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "g", 129);
    \u0275\u0275element(51, "path", 130);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(52, UserHomeComponent_div_30_p_52_Template, 4, 2, "p", 30)(53, UserHomeComponent_div_30_ng_template_53_Template, 3, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.validTill);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", ctx_r1.user == null ? null : ctx_r1.user.subscriptionType, "");
    \u0275\u0275advance(28);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(44, 4, ctx_r1.user == null ? null : ctx_r1.user.memberShipStartedAt, "dd MMM yyyy"), " ");
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r1.validTill);
  }
}
function UserHomeComponent_ng_container_39_div_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 137);
  }
  if (rf & 2) {
    const post_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", post_r11 == null ? null : post_r11.createdBy == null ? null : post_r11.createdBy.doptOfficer == null ? null : post_r11.createdBy.doptOfficer.profilePic, \u0275\u0275sanitizeUrl);
  }
}
function UserHomeComponent_ng_container_39_div_1_div_9_ng_container_1_img_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 93);
  }
  if (rf & 2) {
    const file_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("src", ctx_r1.s3Url + file_r12, \u0275\u0275sanitizeUrl);
  }
}
function UserHomeComponent_ng_container_39_div_1_div_9_ng_container_1_video_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "video", 94);
  }
  if (rf & 2) {
    const file_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("src", ctx_r1.s3Url + file_r12, \u0275\u0275sanitizeUrl);
  }
}
function UserHomeComponent_ng_container_39_div_1_div_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, UserHomeComponent_ng_container_39_div_1_div_9_ng_container_1_img_1_Template, 1, 1, "img", 91)(2, UserHomeComponent_ng_container_39_div_1_div_9_ng_container_1_video_2_Template, 1, 1, "video", 92);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const file_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", file_r12.endsWith(".jpg") || file_r12.endsWith(".jpeg") || file_r12.endsWith(".png"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", file_r12.endsWith(".mp4"));
  }
}
function UserHomeComponent_ng_container_39_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 138);
    \u0275\u0275template(1, UserHomeComponent_ng_container_39_div_1_div_9_ng_container_1_Template, 3, 2, "ng-container", 90);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const post_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", post_r11.mediaFile);
  }
}
function UserHomeComponent_ng_container_39_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 132)(1, "div", 77);
    \u0275\u0275template(2, UserHomeComponent_ng_container_39_div_1_img_2_Template, 1, 1, "img", 133);
    \u0275\u0275elementStart(3, "div")(4, "h6", 134);
    \u0275\u0275text(5);
    \u0275\u0275elementStart(6, "small", 62);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "timeAgo");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(9, UserHomeComponent_ng_container_39_div_1_div_9_Template, 2, 1, "div", 135);
    \u0275\u0275elementStart(10, "p", 136);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "hr", 79);
    \u0275\u0275elementStart(13, "div", 80)(14, "div", 81)(15, "div", 82);
    \u0275\u0275listener("click", function UserHomeComponent_ng_container_39_div_1_Template_div_click_15_listener() {
      const post_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleLike(post_r11));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 83);
    \u0275\u0275element(17, "path", 84);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(19, "div", 86);
    \u0275\u0275listener("click", function UserHomeComponent_ng_container_39_div_1_Template_div_click_19_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.copyPostLink(ctx_r1.userposts.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 87);
    \u0275\u0275element(21, "path", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, "Copy Link ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const post_r11 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", post_r11 == null ? null : post_r11.createdBy == null ? null : post_r11.createdBy.doptOfficer == null ? null : post_r11.createdBy.doptOfficer.profilePic);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", (post_r11 == null ? null : post_r11.createdBy == null ? null : post_r11.createdBy.doptOfficer == null ? null : post_r11.createdBy.doptOfficer.englishName) || "Unknown User", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 10, post_r11.createdAt));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (post_r11.mediaFile == null ? null : post_r11.mediaFile.length) > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(post_r11.caption);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("liked", post_r11 == null ? null : post_r11.isLiked)("animate", post_r11 == null ? null : post_r11.animate);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", post_r11 == null ? null : post_r11.likes, " Likes ");
  }
}
function UserHomeComponent_ng_container_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, UserHomeComponent_ng_container_39_div_1_Template, 23, 12, "div", 131);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.posts);
  }
}
function UserHomeComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76)(1, "p", 76);
    \u0275\u0275text(2, "No recent posts available.");
    \u0275\u0275elementEnd()();
  }
}
function UserHomeComponent_small_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 40);
    \u0275\u0275text(1, " Caption must be less than 100 characters. ");
    \u0275\u0275elementEnd();
  }
}
function UserHomeComponent_option_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 139);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r13 = ctx.$implicit;
    \u0275\u0275property("value", tag_r13.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tag_r13.name, " ");
  }
}
function UserHomeComponent_div_94_ng_container_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 145);
  }
  if (rf & 2) {
    const preview_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", preview_r15, \u0275\u0275sanitizeUrl);
  }
}
function UserHomeComponent_div_94_ng_container_1_video_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "video", 146);
  }
  if (rf & 2) {
    const preview_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", preview_r15, \u0275\u0275sanitizeUrl);
  }
}
function UserHomeComponent_div_94_ng_container_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r16 = \u0275\u0275nextContext().index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Progress: ", ctx_r1.uploadProgress[i_r16], "%");
  }
}
function UserHomeComponent_div_94_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 141);
    \u0275\u0275template(2, UserHomeComponent_div_94_ng_container_1_img_2_Template, 1, 1, "img", 142)(3, UserHomeComponent_div_94_ng_container_1_video_3_Template, 1, 1, "video", 143)(4, UserHomeComponent_div_94_ng_container_1_div_4_Template, 3, 1, "div", 30);
    \u0275\u0275elementStart(5, "button", 144);
    \u0275\u0275listener("click", function UserHomeComponent_div_94_ng_container_1_Template_button_click_5_listener() {
      const i_r16 = \u0275\u0275restoreView(_r14).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeFile(i_r16));
    });
    \u0275\u0275text(6, " \u2715 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const i_r16 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.selectedFiles[i_r16].type.startsWith("image/"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedFiles[i_r16].type.startsWith("video/"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.uploadProgress[i_r16] >= 0);
  }
}
function UserHomeComponent_div_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 140);
    \u0275\u0275template(1, UserHomeComponent_div_94_ng_container_1_Template, 7, 3, "ng-container", 90);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.previewUrls);
  }
}
function UserHomeComponent_div_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 147)(1, "div", 148);
    \u0275\u0275element(2, "div", 149);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "small");
    \u0275\u0275text(4, "Uploading media...");
    \u0275\u0275elementEnd()();
  }
}
var UserHomeComponent = class _UserHomeComponent {
  toggleLike(post) {
    if (!post)
      return;
    post.animate = true;
    const prevLiked = post.isLiked;
    post.isLiked = !prevLiked;
    post.likes += post.isLiked ? 1 : -1;
    this.http.post(`${environment.apiUrl}/communities/likes`, { communityId: post.id }).subscribe({
      next: (res) => {
        console.log("Like API success:", res);
        if (this.user?.id) {
          this.communityuseridposts(this.user.id);
        }
        this.communityposts();
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
  ngOnInit() {
    this.userService.getUser().subscribe((user) => {
      this.user = user;
      console.log("user in home", this.user);
      this.hasSubscription = user?.hasSubscription || false;
      if (this.user?.subscriptionType === "annual" && this.user?.memberShipStartedAt) {
        const start = new Date(this.user.memberShipStartedAt);
        const expiry = new Date(start);
        expiry.setFullYear(start.getFullYear() + 1);
        this.validTill = expiry.toISOString();
      } else if (this.user?.subscriptionType === "lifetime") {
        this.validTill = "lifetime";
      } else {
        this.validTill = null;
      }
      if (this.user?.id) {
        this.communityuseridposts(this.user.id);
      }
    });
    this.loadEvents();
    this.loadtags();
    this.communityposts();
  }
  ngOnDestroy() {
    if (this.socket)
      this.socket.disconnect();
  }
  ngAfterViewChecked() {
    const left = document.querySelector(".left-side-modules");
    const right = document.querySelector(".right-side-modules");
    if (left && right) {
      right.style.height = left.offsetHeight + "px";
      right.style.overflowY = "auto";
    }
  }
  constructor(userService, http, fb, toastService) {
    this.userService = userService;
    this.http = http;
    this.fb = fb;
    this.toastService = toastService;
    this.liked = false;
    this.uploadedUrls = [];
    this.previewUrls = [];
    this.selectedFiles = [];
    this.toastType = "primary";
    this.mediaupload = false;
    this.user = null;
    this.hasSubscription = false;
    this.toastMessage = "";
    this.eventsList = [];
    this.tagsList = [];
    this.uploadProgress = [];
    this.uploadId = Date.now().toString();
    this.posts = [];
    this.userposts = null;
    this.s3Url = environment.s3Url;
    this.postForm = this.fb.group({
      caption: ["", [Validators.required, Validators.maxLength(100)]],
      description: [""],
      postTagId: [0, [Validators.required, this.nonZeroValidator]],
      mediaFile: [[]]
    });
  }
  nonZeroValidator(control) {
    return control.value && control.value !== 0 ? null : { nonZero: true };
  }
  loadEvents() {
    const token = localStorage.getItem("authToken");
    console.log(token);
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    });
    this.http.get(`${environment.apiUrl}/events?isActive=true&limit=2`, { headers }).subscribe({
      next: (res) => {
        console.log(res);
        this.eventsList = res.data.data;
        console.log(this.eventsList);
      },
      error: (err) => {
        console.error("Error fetching Events:", err);
      }
    });
  }
  loadtags() {
    const token = localStorage.getItem("authToken");
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    });
    this.http.get(`${environment.apiUrl}/post-tags?limit=0`, { headers }).subscribe({
      next: (res) => {
        console.log(res);
        this.tagsList = res.data.data;
        console.log(this.tagsList);
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
  communityposts() {
    const token = localStorage.getItem("authToken");
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${token}`
    });
    this.http.get(`${environment.apiUrl}/communities/users?populate=createdBy&limit=50`, { headers }).subscribe({
      next: (res) => {
        console.log(res);
        this.posts = res.data.data;
        console.log("postsssss", this.posts);
      },
      error: (err) => {
        console.error("Error fetching posts:", err);
      }
    });
  }
  communityuseridposts(id) {
    const token = localStorage.getItem("authToken");
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${token}`
    });
    console.log("id", id);
    this.http.get(`${environment.apiUrl}/communities/users?populate=postTag&populate=createdBy&createdBy=${id}&limit=1`, { headers }).subscribe({
      next: (res) => {
        console.log(res);
        this.userposts = res.data.data[0];
        console.log("userrr posts", this.userposts);
      },
      error: (err) => {
        console.error("Error fetching posts:", err);
      }
    });
  }
  getInitials(user) {
    if (!user?.doptOfficer?.englishName)
      return "NA";
    const ignoreList = ["shri", "mr", "mrs", "ms", "dr", "prof", "sir"];
    const names = user.doptOfficer.englishName.trim().split(/\s+/).filter((n) => !ignoreList.includes(n.toLowerCase()));
    if (names.length === 0)
      return "NA";
    let initials = "";
    if (names.length === 1) {
      initials = names[0].substring(0, 2).toUpperCase();
    } else {
      initials = names[0][0].toUpperCase() + names[names.length - 1][0].toUpperCase();
    }
    return initials;
  }
  onFileSelected(event) {
    const input = event.target;
    const files = input.files;
    if (!files || files.length === 0)
      return;
    Array.from(files).forEach((file) => {
      if (!(file.type.startsWith("image/") || file.type.startsWith("video/"))) {
        this.toastService.showToast(`Only images and videos are accepted.`, "danger");
        return;
      }
      if (file.size > 256 * 1024 * 1024) {
        this.toastService.showToast(`"${file.name}" exceeds 256MB, Failed to upload.`, "danger");
        return;
      }
      if (this.selectedFiles.some((f) => f.name === file.name && f.size === file.size)) {
        this.toastService.showToast(`"${file.name}" is already selected.`, "warning");
        return;
      }
      this.selectedFiles.push(file);
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrls.push(reader.result);
      };
      reader.readAsDataURL(file);
      this.uploadFile(file);
    });
    input.value = "";
  }
  removeFile(index) {
    this.selectedFiles.splice(index, 1);
    this.previewUrls.splice(index, 1);
    this.uploadProgress.splice(index, 1);
    this.uploadedUrls.splice(index, 1);
    this.postForm.patchValue({ mediaFile: [...this.uploadedUrls] });
  }
  uploadFile(file) {
    if (!file)
      return;
    const formData = new FormData();
    formData.append("file", file);
    this.mediaupload = true;
    const token = localStorage.getItem("authToken");
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${token}`
    });
    this.http.post(`${environment.apiUrl}/upload`, formData, { headers }).subscribe({
      next: (result) => {
        console.log("\u2705 File Uploaded:", result);
        if (result.success && result.data?.url) {
          this.mediaupload = false;
          this.uploadedUrls.push(result.data.url);
          this.postForm.patchValue({ mediaFile: [...this.uploadedUrls] });
        }
      },
      error: (err) => {
        console.error("\u274C Upload failed:", err);
      }
    });
  }
  // ✅ Submit
  onSubmit() {
    if (this.postForm.invalid) {
      this.postForm.markAllAsTouched();
      return;
    }
    const desc = this.postForm.get("description")?.value;
    const payload = {
      isActive: true,
      caption: this.postForm.get("caption")?.value,
      description: desc && desc.trim() !== "" ? desc.trim() : null,
      postTagId: Number(this.postForm.get("postTagId")?.value),
      mediaFile: this.postForm.get("mediaFile")?.value
      // array of file names
    };
    console.log("Form submitted \u2705", payload);
    const token = localStorage.getItem("authToken");
    console.log(token);
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    });
    this.http.post(`${environment.apiUrl}/communities`, payload, { headers }).subscribe({
      next: (res) => {
        console.log(res);
        this.postForm.reset();
        this.selectedFiles = [];
        this.previewUrls = [];
        this.uploadedUrls = [];
        this.postForm.get("postTagId")?.setValue(0);
        this.showToast("\u2705 Post Submitted Successfully", "success");
        this.communityposts();
        if (this.user?.id) {
          this.communityuseridposts(this.user.id);
        }
        const offcanvas = bootstrap.Offcanvas.getInstance(this.offcanvasEl.nativeElement);
        offcanvas?.hide();
      },
      error: (err) => {
        console.error("Error fetching communities:", err);
        this.showToast(err.error.message, "danger");
      }
    });
  }
  showToast(message, type = "primary") {
    this.toastMessage = message;
    this.toastType = type;
    const toastEl = document.getElementById("liveToast");
    if (toastEl) {
      const toast = new bootstrap.Toast(toastEl, { delay: 3e3 });
      toast.show();
    }
  }
  openEvent(url) {
    window.open(url, "_blank");
  }
  showErrorToast(message) {
    this.toastMessage = message;
    const toastElement = this.errorToast.nativeElement;
    const toast = new bootstrap.Toast(toastElement);
    toast.show();
  }
  static {
    this.\u0275fac = function UserHomeComponent_Factory(t) {
      return new (t || _UserHomeComponent)(\u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ToastService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserHomeComponent, selectors: [["app-user-home"]], viewQuery: function UserHomeComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.offcanvasEl = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.errorToast = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 101, vars: 18, consts: [["offcanvasEl", ""], ["initialsBlock", ""], ["lifetimeTpl", ""], [1, "toast-container", "position-fixed", "top-0", "end-0", "p-3"], ["id", "liveToast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true"], [1, "d-flex"], [1, "toast-body"], ["type", "button", "data-bs-dismiss", "toast", "aria-label", "Close", 1, "btn-close", "btn-close-white", "me-2", "m-auto"], [1, "main-user-home-div"], ["class", "name-image-div d-flex align-items-center gap-3", 4, "ngIf"], [1, "other-content-div", "mt-4"], [1, "left-side-modules"], [1, "recent-post-module"], [1, "head", "d-flex", "align-items-center", "justify-content-between"], ["data-bs-toggle", "offcanvas", "data-bs-target", "#postFormCanvas", 1, "btn", "btn-donate", "d-flex", "align-items-center", "py-2"], ["xmlns", "http://www.w3.org/2000/svg", "width", "25", "height", "24", "viewBox", "0 0 25 24", "fill", "none"], ["id", "mask0_51469_6408", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "25", "height", "24", 2, "mask-type", "alpha"], ["x", "0.5", "width", "24", "height", "24", "fill", "#D9D9D9"], ["mask", "url(#mask0_51469_6408)"], ["d", "M11.5 13H5.5V11H11.5V5H13.5V11H19.5V13H13.5V19H11.5V13Z", "fill", "white"], ["class", "mb-2", 4, "ngIf"], [1, "upcoming-events-module", "mt-4"], [1, "head", "d-flex", "align-items-center", "justify-content-between", "mb-4", "mt-2"], ["routerLink", "/user-home/user-events", 1, "cursur-pointer"], ["class", "meeting-card d-flex align-items-center shadow-sm mb-3 p-3 rounded", 4, "ngFor", "ngForOf"], ["class", "recent-post-module mt-4 pt-4", 4, "ngIf"], [1, "right-side-modules"], [1, "all-post-component"], ["routerLink", "/community"], [1, "community", "my-4"], [4, "ngIf"], ["tabindex", "-1", "id", "postFormCanvas", "aria-labelledby", "postFormCanvasLabel", 1, "offcanvas", "offcanvas-end"], [1, "offcanvas-header"], ["id", "postFormCanvasLabel"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "text-reset"], [1, "offcanvas-body"], [1, "d-flex", "flex-column", "justify-content-between", "h-100", 3, "ngSubmit", "formGroup"], [1, "inner-fields"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", "placeholder", "Enter your title here", "formControlName", "caption", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["rows", "3", "placeholder", "Enter your description here.", "formControlName", "description", 1, "form-control"], ["formControlName", "postTagId", 1, "form-select"], ["value", "0", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "upload-wrapper"], ["for", "fileUpload", 1, "upload-box"], [1, "upload-content"], ["xmlns", "http://www.w3.org/2000/svg", "width", "49", "height", "48", "viewBox", "0 0 49 48", "fill", "none"], ["cx", "24.7529", "cy", "24", "r", "24", "fill", "url(#paint0_linear_50912_4491)", "fill-opacity", "0.12"], ["id", "mask0_50912_4491", "maskUnits", "userSpaceOnUse", "x", "12", "y", "12", "width", "25", "height", "24", 2, "mask-type", "alpha"], ["x", "12.7529", "y", "12", "width", "24", "height", "24", "fill", "#D9D9D9"], ["mask", "url(#mask0_50912_4491)"], ["d", "M23.7529 31H25.7529V26.825L27.3529 28.425L28.7529 27L24.7529 23L20.7529 27L22.1779 28.4L23.7529 26.825V31ZM18.7529 34C18.2029 34 17.7321 33.8042 17.3404 33.4125C16.9488 33.0208 16.7529 32.55 16.7529 32V16C16.7529 15.45 16.9488 14.9792 17.3404 14.5875C17.7321 14.1958 18.2029 14 18.7529 14H26.7529L32.7529 20V32C32.7529 32.55 32.5571 33.0208 32.1654 33.4125C31.7738 33.8042 31.3029 34 30.7529 34H18.7529ZM25.7529 21V16H18.7529V32H30.7529V21H25.7529Z", "fill", "url(#paint1_linear_50912_4491)"], ["id", "paint0_linear_50912_4491", "x1", "5.25293", "y1", "-7.2", "x2", "71.3372", "y2", "48.2327", "gradientUnits", "userSpaceOnUse"], ["stop-color", "#492FB2"], ["offset", "1", "stop-color", "#492FB2", "stop-opacity", "0.61"], ["id", "paint1_linear_50912_4491", "x1", "18.2529", "y1", "11", "x2", "44.1283", "y2", "28.3638", "gradientUnits", "userSpaceOnUse"], [1, ""], [1, "m-0"], [1, "text-muted"], ["type", "file", "id", "fileUpload", "hidden", "", "accept", "image/*,video/*", 3, "change", "disabled"], ["class", "preview-box mt-3 d-flex flex-wrap gap-3", 4, "ngIf"], ["class", "mt-4", 4, "ngIf"], [1, "d-flex", "justify-content-end", "gap-3", "mt-3"], ["type", "button", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-secondary"], ["type", "submit", 1, "btn", "btn-prime", 3, "disabled"], [1, "name-image-div", "d-flex", "align-items-center", "gap-3"], [1, "avatar"], [4, "ngIf", "ngIfElse"], [1, "invite-text"], ["class", "membership-status", 4, "ngIf"], ["alt", "Avatar", 3, "src"], [1, "membership-status"], [1, "mb-2"], [1, "d-flex", "align-items-center", "mb-2"], ["class", "position-relative imgcontainer overflow-auto d-flex gap-2 w-100 pb-2", 4, "ngIf"], [1, "my-1"], [1, "like-share-div", "my-3", "z-1", "d-flex", "align-items-center", "gap-3"], [1, "like-div", "d-flex", "align-items-center"], [1, "like-button", "overflow-visible", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "21", "height", "19", "viewBox", "0 0 21 19", "fill", "none"], ["d", "M10.293 19L8.84297 17.7C7.15964 16.1834 5.76797 14.875 4.66797 13.775C3.56797 12.675 2.69297 11.6875 2.04297 10.8125C1.39297 9.93752 0.938802 9.13336 0.680469 8.40002C0.422135 7.66669 0.292969 6.91669 0.292969 6.15002C0.292969 4.58336 0.817969 3.27502 1.86797 2.22502C2.91797 1.17502 4.2263 0.650024 5.79297 0.650024C6.65964 0.650024 7.48464 0.833358 8.26797 1.20002C9.0513 1.56669 9.7263 2.08336 10.293 2.75002C10.8596 2.08336 11.5346 1.56669 12.318 1.20002C13.1013 0.833358 13.9263 0.650024 14.793 0.650024C16.3596 0.650024 17.668 1.17502 18.718 2.22502C19.768 3.27502 20.293 4.58336 20.293 6.15002C20.293 6.91669 20.1638 7.66669 19.9055 8.40002C19.6471 9.13336 19.193 9.93752 18.543 10.8125C17.893 11.6875 17.018 12.675 15.918 13.775C14.818 14.875 13.4263 16.1834 11.743 17.7L10.293 19ZM10.293 16.3C11.893 14.8667 13.2096 13.6375 14.243 12.6125C15.2763 11.5875 16.093 10.6959 16.693 9.93752C17.293 9.17919 17.7096 8.50419 17.943 7.91252C18.1763 7.32086 18.293 6.73336 18.293 6.15002C18.293 5.15002 17.9596 4.31669 17.293 3.65002C16.6263 2.98336 15.793 2.65002 14.793 2.65002C14.0096 2.65002 13.2846 2.87086 12.618 3.31252C11.9513 3.75419 11.493 4.31669 11.243 5.00002H9.34297C9.09297 4.31669 8.63464 3.75419 7.96797 3.31252C7.3013 2.87086 6.5763 2.65002 5.79297 2.65002C4.79297 2.65002 3.95964 2.98336 3.29297 3.65002C2.6263 4.31669 2.29297 5.15002 2.29297 6.15002C2.29297 6.73336 2.40964 7.32086 2.64297 7.91252C2.8763 8.50419 3.29297 9.17919 3.89297 9.93752C4.49297 10.6959 5.30964 11.5875 6.34297 12.6125C7.3763 13.6375 8.69297 14.8667 10.293 16.3Z", "fill", "black"], [1, "like-count"], [1, "share-div", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "19", "height", "14", "viewBox", "0 0 19 14", "fill", "none"], ["d", "M2.29297 14V10C2.29297 9.16667 2.58464 8.45833 3.16797 7.875C3.7513 7.29167 4.45964 7 5.29297 7H14.468L10.868 10.6L12.293 12L18.293 6L12.293 0L10.868 1.4L14.468 5H5.29297C3.90964 5 2.73047 5.4875 1.75547 6.4625C0.780468 7.4375 0.292969 8.61667 0.292969 10V14H2.29297Z", "fill", "black"], [1, "position-relative", "imgcontainer", "overflow-auto", "d-flex", "gap-2", "w-100", "pb-2"], [4, "ngFor", "ngForOf"], ["class", "img-fluid rounded", "alt", "Post Image", 3, "src", 4, "ngIf"], ["class", "img-fluid rounded", "controls", "", 3, "src", 4, "ngIf"], ["alt", "Post Image", 1, "img-fluid", "rounded", 3, "src"], ["controls", "", 1, "img-fluid", "rounded", 3, "src"], [1, "meeting-card", "d-flex", "align-items-center", "shadow-sm", "mb-3", "p-3", "rounded"], [1, "date-badge", "bg-purple", "me-3", 3, "ngClass"], [1, "month"], [1, "day"], [1, "flex-grow-1"], [1, "mb-1"], [1, "mb-0"], ["xmlns", "http://www.w3.org/2000/svg", "width", "22", "height", "22", "viewBox", "0 0 22 22", "fill", "none"], ["id", "mask0_51656_5189", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "22", "height", "22", 2, "mask-type", "alpha"], ["width", "22", "height", "22", "fill", "#D9D9D9"], ["mask", "url(#mask0_51656_5189)"], ["d", "M10.9997 18.3181C9.38023 18.3181 8.0587 18.0637 7.03509 17.5549C6.01148 17.0461 5.49967 16.3891 5.49967 15.5841C5.49967 15.2196 5.61044 14.8816 5.83197 14.5702C6.05349 14.2589 6.36287 13.9893 6.76009 13.7614L8.20384 15.1057C8.06634 15.1664 7.91738 15.2348 7.75697 15.3107C7.59655 15.3867 7.47051 15.4778 7.37884 15.5841C7.57745 15.8271 8.03579 16.0398 8.75384 16.222C9.4719 16.4043 10.2205 16.4954 10.9997 16.4954C11.7788 16.4954 12.5313 16.4043 13.257 16.222C13.9827 16.0398 14.4448 15.8271 14.6434 15.5841C14.5365 15.4626 14.399 15.3639 14.2309 15.2879C14.0629 15.212 13.9025 15.1436 13.7497 15.0829L15.1705 13.7159C15.5983 13.9589 15.9268 14.2361 16.1559 14.5475C16.3851 14.8588 16.4997 15.2044 16.4997 15.5841C16.4997 16.3891 15.9879 17.0461 14.9643 17.5549C13.9406 18.0637 12.6191 18.3181 10.9997 18.3181ZM11.0226 13.3058C12.5351 12.197 13.6733 11.0844 14.4372 9.96797C15.2011 8.85157 15.583 7.73138 15.583 6.6074C15.583 5.05812 15.0865 3.88856 14.0934 3.09873C13.1004 2.30891 12.0691 1.91399 10.9997 1.91399C9.93023 1.91399 8.89898 2.30891 7.90592 3.09873C6.91287 3.88856 6.41634 5.05812 6.41634 6.6074C6.41634 7.62506 6.79065 8.68449 7.53926 9.7857C8.28787 10.8869 9.44898 12.0603 11.0226 13.3058ZM10.9997 15.5841C8.84551 14.0044 7.23752 12.4704 6.17572 10.9818C5.11391 9.49331 4.58301 8.03516 4.58301 6.6074C4.58301 5.52898 4.7778 4.58346 5.16738 3.77085C5.55697 2.95824 6.05731 2.27853 6.66842 1.73172C7.27954 1.18492 7.96704 0.774814 8.73092 0.501412C9.49481 0.22801 10.2511 0.0913086 10.9997 0.0913086C11.7483 0.0913086 12.5045 0.22801 13.2684 0.501412C14.0323 0.774814 14.7198 1.18492 15.3309 1.73172C15.942 2.27853 16.4424 2.95824 16.832 3.77085C17.2215 4.58346 17.4163 5.52898 17.4163 6.6074C17.4163 8.03516 16.8854 9.49331 15.8236 10.9818C14.7618 12.4704 13.1538 14.0044 10.9997 15.5841ZM10.9997 8.29338C11.5038 8.29338 11.9354 8.11491 12.2945 7.75797C12.6535 7.40102 12.833 6.97193 12.833 6.4707C12.833 5.96946 12.6535 5.54037 12.2945 5.18343C11.9354 4.82649 11.5038 4.64801 10.9997 4.64801C10.4955 4.64801 10.0639 4.82649 9.70488 5.18343C9.34585 5.54037 9.16634 5.96946 9.16634 6.4707C9.16634 6.97193 9.34585 7.40102 9.70488 7.75797C10.0639 8.11491 10.4955 8.29338 10.9997 8.29338Z", "fill", "#6B6B6B"], ["class", "btn btn-prime me-3", 3, "click", 4, "ngIf"], [1, "btn", "btn-prime", "me-3", 3, "click"], [1, "recent-post-module", "mt-4", "pt-4"], [1, "row", "mt-4", "membership"], [1, "col-lg-7", "mb-3"], [1, "d-flex", "align-items-center", "gap-2"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "21", "viewBox", "0 0 20 21", "fill", "none"], ["d", "M2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V4C0 3.45 0.195833 2.97917 0.5875 2.5875C0.979167 2.19583 1.45 2 2 2H3V0H5V2H13V0H15V2H16C16.55 2 17.0208 2.19583 17.4125 2.5875C17.8042 2.97917 18 3.45 18 4V10.375L16 12.375V8H2V18H8.2L10.2 20H2ZM2 6H16V4H2V6ZM13.55 20.5L10 16.95L11.4 15.55L13.525 17.675L17.775 13.425L19.175 14.85L13.55 20.5Z", "fill", "black"], [1, "Camelcase"], [1, "col-lg-5", "mb-3"], ["id", "mask0_51787_6416", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "22", "height", "22", 2, "mask-type", "alpha"], ["mask", "url(#mask0_51787_6416)"], ["d", "M12.5813 19.25L6.41667 12.8333V11H9.625C10.4347 11 11.1337 10.7365 11.7219 10.2094C12.3101 9.68229 12.6653 9.02917 12.7875 8.25H5.5V6.41667H12.5125C12.2528 5.88194 11.867 5.44271 11.3552 5.09896C10.8434 4.75521 10.2667 4.58333 9.625 4.58333H5.5V2.75H16.5V4.58333H13.5208C13.7347 4.84306 13.9257 5.12569 14.0938 5.43125C14.2618 5.73681 14.3917 6.06528 14.4833 6.41667H16.5V8.25H14.6438C14.5215 9.54861 13.9868 10.6372 13.0396 11.5156C12.0924 12.3941 10.9542 12.8333 9.625 12.8333H8.96042L15.125 19.25H12.5813Z", "fill", "#1C1B1F"], ["xmlns", "http://www.w3.org/2000/svg", "width", "32", "height", "32", "viewBox", "0 0 48 48", "role", "img", "aria-labelledby", "checkTitle checkDesc"], ["id", "checkTitle"], ["id", "checkDesc"], ["cx", "24", "cy", "24", "r", "22", "fill", "#28a745"], ["d", "M18 24l4 4 10-10", "fill", "none", "stroke", "#ffffff", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "mask0_51782_6389", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "22", "height", "22", 2, "mask-type", "alpha"], ["mask", "url(#mask0_51782_6389)"], ["d", "M1.83325 18.3334V15.7667C1.83325 15.2626 1.96311 14.789 2.22284 14.3459C2.48256 13.9029 2.84159 13.5667 3.29992 13.3376C4.07909 12.9404 4.95756 12.6042 5.93534 12.3292C6.91311 12.0542 7.9902 11.9167 9.16659 11.9167C9.62492 11.9167 10.0718 11.9397 10.5072 11.9855C10.9426 12.0313 11.3666 12.1001 11.7791 12.1917L10.1749 13.7959C10.0069 13.7654 9.84263 13.7501 9.68221 13.7501H9.16659C8.08186 13.7501 7.1079 13.8799 6.24471 14.1397C5.38152 14.3994 4.67492 14.682 4.12492 14.9876C3.98742 15.064 3.87665 15.1709 3.79263 15.3084C3.7086 15.4459 3.66659 15.5987 3.66659 15.7667V16.5001H9.39575L11.2291 18.3334H1.83325ZM14.2541 18.7001L11.0916 15.5376L12.3749 14.2542L14.2541 16.1334L18.8833 11.5042L20.1666 12.7876L14.2541 18.7001ZM9.16659 11.0001C8.15825 11.0001 7.29506 10.6411 6.577 9.923C5.85895 9.20494 5.49992 8.34175 5.49992 7.33341C5.49992 6.32508 5.85895 5.46189 6.577 4.74383C7.29506 4.02578 8.15825 3.66675 9.16659 3.66675C10.1749 3.66675 11.0381 4.02578 11.7562 4.74383C12.4742 5.46189 12.8333 6.32508 12.8333 7.33341C12.8333 8.34175 12.4742 9.20494 11.7562 9.923C11.0381 10.6411 10.1749 11.0001 9.16659 11.0001ZM9.16659 9.16675C9.67075 9.16675 10.1023 8.98723 10.4614 8.62821C10.8204 8.26918 10.9999 7.83758 10.9999 7.33341C10.9999 6.82925 10.8204 6.39765 10.4614 6.03862C10.1023 5.6796 9.67075 5.50008 9.16659 5.50008C8.66242 5.50008 8.23082 5.6796 7.87179 6.03862C7.51277 6.39765 7.33325 6.82925 7.33325 7.33341C7.33325 7.83758 7.51277 8.26918 7.87179 8.62821C8.23082 8.98723 8.66242 9.16675 9.16659 9.16675Z", "fill", "#1C1B1F"], ["id", "mask0_51782_6378", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "22", "height", "22", 2, "mask-type", "alpha"], ["mask", "url(#mask0_51782_6378)"], ["d", "M9.18958 22.0001C7.92153 22.0001 6.72986 21.7595 5.61458 21.2783C4.49931 20.797 3.52535 20.1401 2.69271 19.3074C1.86007 18.4748 1.20312 17.5008 0.721875 16.3856C0.240625 15.2703 0 14.0863 0 12.8335C0 11.5654 0.240625 10.3738 0.721875 9.25848C1.20312 8.1432 1.86007 7.16924 2.69271 6.3366C3.52535 5.50397 4.49931 4.84702 5.61458 4.36577C6.72986 3.88452 7.92153 3.6439 9.18958 3.6439C9.34236 3.6439 9.49132 3.64772 9.63646 3.65535C9.7816 3.66299 9.93056 3.67445 10.0833 3.68973V5.52306C9.93056 5.50778 9.7816 5.49633 9.63646 5.48869C9.49132 5.48105 9.34236 5.47723 9.18958 5.47723C7.14236 5.47723 5.40451 6.19147 3.97604 7.61994C2.54757 9.04841 1.83333 10.7863 1.83333 12.8335C1.83333 14.8654 2.54757 16.5956 3.97604 18.0241C5.40451 19.4526 7.14236 20.1668 9.18958 20.1668C11.2215 20.1668 12.9517 19.4526 14.3802 18.0241C15.8087 16.5956 16.5229 14.8654 16.5229 12.8335H18.3562C18.3562 14.0863 18.1156 15.2703 17.6344 16.3856C17.1531 17.5008 16.4962 18.4748 15.6635 19.3074C14.8309 20.1401 13.8608 20.797 12.7531 21.2783C11.6455 21.7595 10.4576 22.0001 9.18958 22.0001ZM12.1917 17.1418L8.25 13.2001V8.25015H10.0833V12.4668L13.475 15.8585L12.1917 17.1418ZM20.0292 11.0001C19.6778 8.8307 18.7611 6.94772 17.2792 5.35119C15.7972 3.75466 14.0097 2.68904 11.9167 2.15431V0.275146C14.5292 0.840424 16.7483 2.10084 18.574 4.0564C20.3997 6.01195 21.5035 8.32654 21.8854 11.0001H20.0292ZM16.2937 11.0001C16.0035 9.85431 15.4726 8.84598 14.701 7.97515C13.9295 7.10431 13.0014 6.44737 11.9167 6.00431V4.0564C13.4903 4.54529 14.8424 5.4123 15.9729 6.65744C17.1035 7.90258 17.8368 9.35015 18.1729 11.0001H16.2937Z", "fill", "#1C1B1F"], ["class", "mb-5", 4, "ngFor", "ngForOf"], [1, "mb-5"], ["class", "rounded-circle me-2", "alt", "User", 3, "src", 4, "ngIf"], [1, "mb-0", "fw-semibold"], ["class", "position-relative imgpostscontainer overflow-auto d-flex gap-2 w-100 pb-2", 4, "ngIf"], [1, "mb-2", "overflow-auto"], ["alt", "User", 1, "rounded-circle", "me-2", 3, "src"], [1, "position-relative", "imgpostscontainer", "overflow-auto", "d-flex", "gap-2", "w-100", "pb-2"], [3, "value"], [1, "preview-box", "mt-3", "d-flex", "flex-wrap", "gap-3"], [1, "position-relative"], ["class", "img-thumbnail", "style", "width: 120px; height: auto;", 3, "src", 4, "ngIf"], ["controls", "", "class", "img-thumbnail", "style", "width: 200px; height: auto;", 3, "src", 4, "ngIf"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", "position-absolute", "top-0", "end-0", 3, "click"], [1, "img-thumbnail", 2, "width", "120px", "height", "auto", 3, "src"], ["controls", "", 1, "img-thumbnail", 2, "width", "200px", "height", "auto", 3, "src"], [1, "mt-4"], [1, "progress", 2, "height", "6px"], ["role", "progressbar", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", "bg-primary", 2, "width", "100%"]], template: function UserHomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275element(5, "button", 7);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "div", 8);
        \u0275\u0275template(7, UserHomeComponent_div_7_Template, 9, 4, "div", 9);
        \u0275\u0275elementStart(8, "div", 10)(9, "div", 11)(10, "div", 12)(11, "div", 13)(12, "h1");
        \u0275\u0275text(13, "Recent Posts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "button", 14);
        \u0275\u0275text(15, "Add Post ");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(16, "svg", 15)(17, "mask", 16);
        \u0275\u0275element(18, "rect", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "g", 18);
        \u0275\u0275element(20, "path", 19);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(21, UserHomeComponent_div_21_Template, 21, 10, "div", 20)(22, UserHomeComponent_div_22_Template, 3, 0, "div", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(23, "div", 21)(24, "div", 22)(25, "h1");
        \u0275\u0275text(26, "Upcoming Events");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "h4", 23);
        \u0275\u0275text(28, "View All Events");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(29, UserHomeComponent_div_29_Template, 19, 12, "div", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275template(30, UserHomeComponent_div_30_Template, 55, 7, "div", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 26)(32, "div", 27)(33, "div", 13)(34, "h1");
        \u0275\u0275text(35, "Community Highlights");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "h4", 28);
        \u0275\u0275text(37, "View All Posts");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "div", 29);
        \u0275\u0275template(39, UserHomeComponent_ng_container_39_Template, 2, 1, "ng-container", 30)(40, UserHomeComponent_div_40_Template, 3, 0, "div", 20);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(41, "div", 31, 0)(43, "div", 32)(44, "h5", 33);
        \u0275\u0275text(45, "Add Post");
        \u0275\u0275elementEnd();
        \u0275\u0275element(46, "button", 34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "div", 35)(48, "form", 36);
        \u0275\u0275listener("ngSubmit", function UserHomeComponent_Template_form_ngSubmit_48_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSubmit());
        });
        \u0275\u0275elementStart(49, "div", 37)(50, "div", 38)(51, "label", 39);
        \u0275\u0275text(52, "Caption");
        \u0275\u0275elementStart(53, "span", 40);
        \u0275\u0275text(54, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(55, "input", 41);
        \u0275\u0275template(56, UserHomeComponent_small_56_Template, 2, 0, "small", 42);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "div", 38)(58, "label", 39);
        \u0275\u0275text(59, "Description");
        \u0275\u0275elementEnd();
        \u0275\u0275element(60, "textarea", 43);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "div", 38)(62, "label", 39);
        \u0275\u0275text(63, "Post Tag");
        \u0275\u0275elementStart(64, "span", 40);
        \u0275\u0275text(65, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(66, "select", 44)(67, "option", 45);
        \u0275\u0275text(68, "Select tag");
        \u0275\u0275elementEnd();
        \u0275\u0275template(69, UserHomeComponent_option_69_Template, 2, 2, "option", 46);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(70, "div", 47)(71, "label", 39);
        \u0275\u0275text(72, "Upload Media");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "label", 48)(74, "div", 49);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(75, "svg", 50);
        \u0275\u0275element(76, "circle", 51);
        \u0275\u0275elementStart(77, "mask", 52);
        \u0275\u0275element(78, "rect", 53);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "g", 54);
        \u0275\u0275element(80, "path", 55);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "defs")(82, "linearGradient", 56);
        \u0275\u0275element(83, "stop", 57)(84, "stop", 58);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "linearGradient", 59);
        \u0275\u0275element(86, "stop", 57)(87, "stop", 58);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(88, "div", 60)(89, "p", 61);
        \u0275\u0275text(90, "Click to upload");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "small", 62);
        \u0275\u0275text(92, "Max size: 256MB each");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(93, "input", 63);
        \u0275\u0275listener("change", function UserHomeComponent_Template_input_change_93_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onFileSelected($event));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(94, UserHomeComponent_div_94_Template, 2, 1, "div", 64)(95, UserHomeComponent_div_95_Template, 5, 0, "div", 65);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(96, "div", 66)(97, "button", 67);
        \u0275\u0275text(98, "Back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "button", 68);
        \u0275\u0275text(100, "Submit");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        let tmp_11_0;
        \u0275\u0275advance();
        \u0275\u0275classMapInterpolate1("toast align-items-center text-bg-", ctx.toastType, " border-0");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.toastMessage, " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.user);
        \u0275\u0275advance(14);
        \u0275\u0275property("ngIf", ctx.userposts !== void 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.userposts === null);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngForOf", ctx.eventsList);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.hasSubscription);
        \u0275\u0275advance(9);
        \u0275\u0275property("ngIf", ctx.posts && ctx.posts.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.posts == null ? null : ctx.posts.length) === 0);
        \u0275\u0275advance(8);
        \u0275\u0275property("formGroup", ctx.postForm);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngIf", (tmp_11_0 = ctx.postForm.get("caption")) == null ? null : tmp_11_0.errors == null ? null : tmp_11_0.errors["maxlength"]);
        \u0275\u0275advance(13);
        \u0275\u0275property("ngForOf", ctx.tagsList);
        \u0275\u0275advance(24);
        \u0275\u0275property("disabled", ctx.mediaupload);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.previewUrls.length > 0 && !ctx.mediaupload);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mediaupload);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.postForm.invalid);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DatePipe, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TimeAgoPipe, RouterLink], styles: ["\n\n.avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background-color: rgba(126, 87, 194, 0.1);\n  color: #673ab7;\n  font-size: 14px;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  margin-left: 8px;\n  overflow: hidden;\n}\n.avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: top;\n  display: block;\n  border-radius: 50%;\n}\n.invite-text[_ngcontent-%COMP%] {\n  color: var(--Text, #211b3a);\n  font-family: Urbanist;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 28px;\n  margin: 0px;\n}\n.membership-status[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  border: 1px solid #3c9718;\n  background: #fff;\n  border-radius: 6px;\n  padding: 6px 12px;\n  color: var(--Success-Source, #3c9718);\n  font-family: Urbanist;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: var(--Line-Heights-10, 20px);\n  letter-spacing: var(--Letter-Spacing-4, 0.25px);\n}\n.recent-post-module[_ngcontent-%COMP%], .upcoming-events-module[_ngcontent-%COMP%], .all-post-component[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  background: #fff;\n  padding: 20px;\n}\n.recent-post-module[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .upcoming-events-module[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .all-post-component[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--Text, #211b3a);\n  font-family: Urbanist;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 28px;\n  margin: 0px;\n}\n.recent-post-module[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .upcoming-events-module[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .all-post-component[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #007bff;\n  font-family: Urbanist;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 162%;\n  margin: 0px;\n  cursor: pointer;\n}\n.left-side-modules[_ngcontent-%COMP%] {\n  width: 60%;\n}\n.right-side-modules[_ngcontent-%COMP%] {\n  width: 40%;\n}\n.offcanvas[_ngcontent-%COMP%] {\n  width: 420px;\n}\n.upload-box[_ngcontent-%COMP%] {\n  border-style: dashed;\n  cursor: pointer;\n  transition: background 0.3s;\n}\n.upload-box[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.form-label[_ngcontent-%COMP%] {\n  color: var(--Text-Dark, #212121);\n  font-family: Urbanist;\n  font-size: var(--Font-Size-2, 14px);\n  font-style: normal;\n  font-weight: 500;\n  line-height: var(--Line-Heights-10, 20px);\n  letter-spacing: var(--Letter-Spacing-2, 0.1px);\n}\n.upload-wrapper[_ngcontent-%COMP%]   .upload-box[_ngcontent-%COMP%] {\n  display: block;\n  border: 2px dashed #afafaf;\n  border-radius: 10px;\n  padding: 40px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  background-color: #f8f9fa;\n}\n.upload-wrapper[_ngcontent-%COMP%]   .upload-box[_ngcontent-%COMP%]:hover {\n  background-color: #e9f3ff;\n}\n.upload-wrapper[_ngcontent-%COMP%]   .upload-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: #6c757d;\n  justify-content: space-between;\n}\n.upload-wrapper[_ngcontent-%COMP%]   .preview-box[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.upload-wrapper[_ngcontent-%COMP%]   .preview-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 200px;\n  border-radius: 10px;\n  margin-top: 10px;\n}\n.meeting-card[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  background: rgba(90, 67, 185, 0.07);\n}\n.date-badge[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  padding: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n}\n.bg-purple[_ngcontent-%COMP%] {\n  background-color: rgba(73, 47, 178, 0.61);\n}\n.month[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 300;\n  line-height: 102.5%;\n  text-transform: uppercase;\n}\n.day[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Urbanist;\n  font-size: 32px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 1;\n}\n.meeting-card[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: #000;\n  font-family: Urbanist;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 102.5%;\n}\n.meeting-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.58);\n  font-family: Urbanist;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 162%;\n}\n.membership[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  color: rgba(0, 0, 0, 0.78);\n  font-family: Urbanist;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 28px;\n}\n.membership[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #000;\n  font-family: Urbanist;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 28px;\n}\n.community[_ngcontent-%COMP%]   img.rounded-circle[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  object-fit: cover;\n}\n.like-share-div[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.like-share-div[_ngcontent-%COMP%]   .share-div[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.5);\n  font-family: Urbanist;\n  font-size: 13.753px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 19.647px;\n  margin: 0px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n}\n.like-share-div[_ngcontent-%COMP%]   .like-div[_ngcontent-%COMP%] {\n  color: #000;\n  font-family: Urbanist;\n  font-size: 13.753px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 19.647px;\n}\n.imgcontainer[_ngcontent-%COMP%] {\n  height: 220px;\n}\n.imgcontainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: auto;\n}\n.imgpostscontainer[_ngcontent-%COMP%] {\n  padding-bottom: 16px;\n  height: 200px;\n}\n.imgpostscontainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: auto;\n}\n.other-content-div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1.5rem;\n}\n.right-side-modules[_ngcontent-%COMP%] {\n  flex: 1;\n  max-height: 100%;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=user-home.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserHomeComponent, { className: "UserHomeComponent", filePath: "src/app/user-portal/pages/user-home/user-home.component.ts", lineNumber: 20 });
})();
export {
  UserHomeComponent
};
//# sourceMappingURL=chunk-TC6X2AYS.mjs.map
