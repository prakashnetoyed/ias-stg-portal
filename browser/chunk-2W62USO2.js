import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-CTBAGNAW.js";
import {
  ToastService
} from "./chunk-CGBCDAXV.js";
import {
  environment
} from "./chunk-WYW2S4QW.js";
import {
  HttpClient
} from "./chunk-VZD35PY6.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-EWZKLZHI.js";
import {
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-664KIS5M.js";
import "./chunk-ASLTLD6L.js";

// src/app/state-dashboard/pages/state-office-bearers/state-office-bearers.component.ts
var _c0 = () => [];
function StateOfficeBearersComponent_option_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const des_r2 = ctx.$implicit;
    \u0275\u0275property("value", des_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(des_r2);
  }
}
function StateOfficeBearersComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "span");
    \u0275\u0275text(2, "Preview");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "img", 61);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r2.selectedImages["bearerProfilePic"], \u0275\u0275sanitizeUrl);
  }
}
function StateOfficeBearersComponent_option_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const des_r4 = ctx.$implicit;
    \u0275\u0275property("value", des_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(des_r4);
  }
}
function StateOfficeBearersComponent_div_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275element(1, "img", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.selectedImages["addBearerProfilePic"], \u0275\u0275sanitizeUrl);
  }
}
function StateOfficeBearersComponent_tbody_140_tr_1_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 75);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 76)(3, "mask", 77);
    \u0275\u0275element(4, "rect", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "g", 79);
    \u0275\u0275element(6, "path", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(7, " Link ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const user_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("href", user_r6.facebookUrl, \u0275\u0275sanitizeUrl);
  }
}
function StateOfficeBearersComponent_tbody_140_tr_1_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "No Link");
    \u0275\u0275elementEnd();
  }
}
function StateOfficeBearersComponent_tbody_140_tr_1_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 75);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 76)(3, "mask", 77);
    \u0275\u0275element(4, "rect", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "g", 79);
    \u0275\u0275element(6, "path", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(7, " Link ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const user_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("href", user_r6.instagramUrl, \u0275\u0275sanitizeUrl);
  }
}
function StateOfficeBearersComponent_tbody_140_tr_1_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "No Link");
    \u0275\u0275elementEnd();
  }
}
function StateOfficeBearersComponent_tbody_140_tr_1_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 75);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 76)(3, "mask", 77);
    \u0275\u0275element(4, "rect", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "g", 79);
    \u0275\u0275element(6, "path", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(7, " Link ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const user_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("href", user_r6.twitterUrl, \u0275\u0275sanitizeUrl);
  }
}
function StateOfficeBearersComponent_tbody_140_tr_1_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "No Link");
    \u0275\u0275elementEnd();
  }
}
function StateOfficeBearersComponent_tbody_140_tr_1_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 75);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 76)(3, "mask", 77);
    \u0275\u0275element(4, "rect", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "g", 79);
    \u0275\u0275element(6, "path", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(7, " Link ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const user_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("href", user_r6.linkedInUrl, \u0275\u0275sanitizeUrl);
  }
}
function StateOfficeBearersComponent_tbody_140_tr_1_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "No Link");
    \u0275\u0275elementEnd();
  }
}
function StateOfficeBearersComponent_tbody_140_tr_1_a_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 81);
    \u0275\u0275listener("click", function StateOfficeBearersComponent_tbody_140_tr_1_a_31_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const user_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.editBearer(user_r6));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 82);
    \u0275\u0275element(2, "path", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "Edit");
    \u0275\u0275elementEnd();
  }
}
function StateOfficeBearersComponent_tbody_140_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275element(6, "img", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275template(10, StateOfficeBearersComponent_tbody_140_tr_1_ng_container_10_Template, 8, 1, "ng-container", 48)(11, StateOfficeBearersComponent_tbody_140_tr_1_ng_template_11_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275template(14, StateOfficeBearersComponent_tbody_140_tr_1_ng_container_14_Template, 8, 1, "ng-container", 48)(15, StateOfficeBearersComponent_tbody_140_tr_1_ng_template_15_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275template(18, StateOfficeBearersComponent_tbody_140_tr_1_ng_container_18_Template, 8, 1, "ng-container", 48)(19, StateOfficeBearersComponent_tbody_140_tr_1_ng_template_19_Template, 2, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275template(22, StateOfficeBearersComponent_tbody_140_tr_1_ng_container_22_Template, 8, 1, "ng-container", 48)(23, StateOfficeBearersComponent_tbody_140_tr_1_ng_template_23_Template, 2, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td")(26, "div", 65)(27, "button", 66);
    \u0275\u0275text(28, " \u22EE ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "ul", 67)(30, "li");
    \u0275\u0275template(31, StateOfficeBearersComponent_tbody_140_tr_1_a_31_Template, 4, 0, "a", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "li")(33, "a", 69);
    \u0275\u0275listener("click", function StateOfficeBearersComponent_tbody_140_tr_1_Template_a_click_33_listener() {
      const user_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteBearer(user_r6.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(34, "svg", 70)(35, "mask", 71);
    \u0275\u0275element(36, "rect", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "g", 73);
    \u0275\u0275element(38, "path", 74);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(39, "Delete");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const user_r6 = ctx.$implicit;
    const i_r8 = ctx.index;
    const noFacebook_r9 = \u0275\u0275reference(12);
    const noInstagram_r10 = \u0275\u0275reference(16);
    const noTwitter_r11 = \u0275\u0275reference(20);
    const noLinkedIn_r12 = \u0275\u0275reference(24);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r2.currentPage - 1) * ctx_r2.pageSize + i_r8 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r6.bearerName);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", user_r6.bearerProfilePic || "assets/images/avatar.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r6.bearerDesignation);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", user_r6.facebookUrl)("ngIfElse", noFacebook_r9);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", user_r6.instagramUrl)("ngIfElse", noInstagram_r10);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", user_r6.twitterUrl)("ngIfElse", noTwitter_r11);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", user_r6.linkedInUrl)("ngIfElse", noLinkedIn_r12);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", user_r6.status !== "approved");
  }
}
function StateOfficeBearersComponent_tbody_140_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tbody");
    \u0275\u0275template(1, StateOfficeBearersComponent_tbody_140_tr_1_Template, 40, 13, "tr", 63);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.users);
  }
}
function StateOfficeBearersComponent_ng_template_141_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tbody")(1, "tr")(2, "td", 84);
    \u0275\u0275text(3, "No members found.");
    \u0275\u0275elementEnd()()();
  }
}
function StateOfficeBearersComponent_li_149_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 51)(1, "a", 52);
    \u0275\u0275listener("click", function StateOfficeBearersComponent_li_149_Template_a_click_1_listener() {
      const i_r14 = \u0275\u0275restoreView(_r13).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.changePage(i_r14 + 1));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r14 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("active", i_r14 + 1 === ctx_r2.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r14 + 1);
  }
}
var StateOfficeBearersComponent = class _StateOfficeBearersComponent {
  constructor(http, fb, toastService) {
    this.http = http;
    this.fb = fb;
    this.toastService = toastService;
    this.toastMessage = "";
    this.users = [];
    this.pageSize = 15;
    this.currentPage = 1;
    this.cadres = [];
    this.years = [];
    this.selectedCadreId = null;
    this.selectedYear = null;
    this.searchText = "";
    this.selectedBearerId = null;
    this.selectedImages = {};
    this.showPreview = {};
    this.pagination = {
      total: 0,
      page: 1,
      limit: 15
    };
    this.designations = [
      "President",
      "Vice President",
      "Secretary",
      "Joint Secretary",
      "Member",
      "Treasurer",
      "Executive Committee Member",
      "Retired Member"
    ];
    this.aboutForm = this.fb.group({
      bearerName: ["", Validators.required],
      bearerDesignation: ["", Validators.required],
      facebookUrl: [""],
      twitterUrl: [""],
      linkedInUrl: [""],
      instagramUrl: [""]
    });
    this.addBearerForm = this.fb.group({
      bearerName: ["", Validators.required],
      bearerDesignation: ["", Validators.required],
      facebookUrl: [""],
      twitterUrl: [""],
      linkedInUrl: [""],
      instagramUrl: [""]
    });
  }
  ngOnInit() {
    this.loadUsers();
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    for (let y = 1990; y <= currentYear; y++) {
      this.years.push(y);
    }
  }
  // -------------------- User Loading --------------------
  onSearchKeyup() {
    this.loadUsers(1);
  }
  loadUsers(page = this.currentPage, limit = this.pageSize) {
    let url = `${environment.apiUrl}/office-bearers?page=${page}&limit=${limit}`;
    if (this.searchText.trim()) {
      url += `&bearerName=${encodeURIComponent(this.searchText.trim())}`;
    }
    if (this.selectedCadreId) {
      url += `&bearerDesignation=${this.selectedCadreId}`;
    }
    url += `&isActive=true`;
    this.http.get(url).subscribe({
      next: (res) => {
        this.users = res.data?.data || [];
        this.pagination.total = res.data?.pagination?.total || 0;
        this.pagination.limit = limit;
        this.pagination.page = page;
      },
      error: (err) => {
        console.error("Error fetching office bearers:", err);
        this.toastService.showToast("Failed to load office bearers.", "danger");
      }
    });
  }
  // -------------------- Pagination --------------------
  get totalPages() {
    return Math.ceil(this.pagination.total / this.pagination.limit);
  }
  changePage(page) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadUsers(this.currentPage, this.pageSize);
    }
  }
  goPrevious() {
    this.changePage(this.currentPage - 1);
  }
  goNext() {
    this.changePage(this.currentPage + 1);
  }
  onPageSizeChange(event) {
    this.pageSize = +event.target.value;
    this.currentPage = 1;
    this.loadUsers(this.currentPage, this.pageSize);
  }
  // -------------------- Image Handling --------------------
  onImageSelected(event, key) {
    const file = event.target.files[0];
    if (file) {
      this.selectedImages[key] = URL.createObjectURL(file);
      this.selectedImages[key + "File"] = file;
    }
  }
  // -------------------- Edit Bearer --------------------
  editBearer(user) {
    this.selectedBearerId = user.id;
    this.aboutForm.patchValue({
      bearerName: user.bearerName || "",
      bearerDesignation: user.bearerDesignation || "",
      facebookUrl: user.facebookUrl || "",
      twitterUrl: user.twitterUrl || "",
      linkedInUrl: user.linkedInUrl || "",
      instagramUrl: user.instagramUrl || ""
    });
    this.selectedImages["bearerProfilePic"] = user.bearerProfilePic || null;
    this.selectedImages["bearerProfilePicFileName"] = this.extractFileName(user.bearerProfilePic);
    this.selectedImages["bearerProfilePicFile"] = null;
    const offcanvasEl = document.getElementById("aboutusDrawer");
    if (offcanvasEl) {
      const bsOffcanvas = new bootstrap.Offcanvas(offcanvasEl);
      bsOffcanvas.show();
    }
  }
  // Helper: Extract file name from URL
  extractFileName(url) {
    if (!url)
      return "";
    return url.split("/").pop() || "";
  }
  // -------------------- Submit Edit Form --------------------
  // -------------------- Submit Edit Form --------------------
  onSubmit() {
    if (this.aboutForm.invalid)
      return;
    const payload = {
      bearerName: this.aboutForm.value.bearerName?.trim() || null,
      bearerDesignation: this.aboutForm.value.bearerDesignation?.trim() || null,
      facebookUrl: this.aboutForm.value.facebookUrl?.trim() || null,
      twitterUrl: this.aboutForm.value.twitterUrl?.trim() || null,
      linkedInUrl: this.aboutForm.value.linkedInUrl?.trim() || null,
      instagramUrl: this.aboutForm.value.instagramUrl?.trim() || null
    };
    if (this.selectedImages["bearerProfilePicFile"]) {
      const reader = new FileReader();
      reader.onload = () => {
        payload.bearerProfilePic = reader.result;
        this.updateBearer(payload);
      };
      reader.readAsDataURL(this.selectedImages["bearerProfilePicFile"]);
    } else {
      this.updateBearer(payload);
    }
  }
  updateBearer(payload) {
    if (this.selectedBearerId) {
      this.http.patch(`${environment.apiUrl}/office-bearers/${this.selectedBearerId}`, payload).subscribe({
        next: () => {
          this.toastService.showToast("Office bearer updated successfully!", "success");
          this.loadUsers(this.currentPage, this.pageSize);
          this.selectedBearerId = null;
          this.aboutForm.reset();
          this.selectedImages = {};
          this.showPreview["bearerProfilePic"] = false;
          bootstrap.Offcanvas.getInstance(document.getElementById("aboutusDrawer"))?.hide();
        },
        error: (err) => {
          console.error("Error updating bearer:", err);
          this.toastService.showToast("Failed to update bearer.", "danger");
        }
      });
    }
  }
  // -------------------- Add Bearer --------------------
  openAddBearerDrawer() {
    const drawerEl = document.getElementById("addBearerDrawer");
    if (drawerEl) {
      const bsDrawer = new bootstrap.Offcanvas(drawerEl);
      bsDrawer.show();
    }
  }
  onAddBearerSubmit() {
    if (this.addBearerForm.invalid || !this.selectedImages["addBearerProfilePicFile"]) {
      this.toastService.showToast("Please fill all required fields and select a profile picture.", "danger");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const payload = {
        bearerName: this.addBearerForm.value.bearerName?.trim() || null,
        bearerDesignation: this.addBearerForm.value.bearerDesignation?.trim() || null,
        bearerProfilePic: reader.result
      };
      if (this.addBearerForm.value.facebookUrl?.trim()) {
        payload.facebookUrl = this.addBearerForm.value.facebookUrl.trim();
      }
      if (this.addBearerForm.value.twitterUrl?.trim()) {
        payload.twitterUrl = this.addBearerForm.value.twitterUrl.trim();
      }
      if (this.addBearerForm.value.linkedInUrl?.trim()) {
        payload.linkedInUrl = this.addBearerForm.value.linkedInUrl.trim();
      }
      if (this.addBearerForm.value.instagramUrl?.trim()) {
        payload.instagramUrl = this.addBearerForm.value.instagramUrl.trim();
      }
      this.http.post(`${environment.apiUrl}/office-bearers`, payload).subscribe({
        next: () => {
          this.toastService.showToast("Office bearer added successfully!", "success");
          this.addBearerForm.reset();
          this.selectedImages["addBearerProfilePic"] = null;
          this.selectedImages["addBearerProfilePicFile"] = null;
          this.loadUsers(this.currentPage, this.pageSize);
          const drawer = document.getElementById("addBearerDrawer");
          if (drawer) {
            bootstrap.Offcanvas.getInstance(drawer)?.hide();
          }
        },
        error: (err) => {
          console.error(err);
          this.toastService.showToast("Failed to add bearer.", "danger");
        }
      });
    };
    reader.readAsDataURL(this.selectedImages["addBearerProfilePicFile"]);
  }
  // -------------------- Delete Bearer --------------------
  deleteBearer(bearerId) {
    if (!confirm("Are you sure you want to delete this bearer?"))
      return;
    this.http.delete(`${environment.apiUrl}/office-bearers/${bearerId}`).subscribe({
      next: () => {
        this.toastService.showToast("Bearer deleted successfully!", "success");
        this.loadUsers(this.currentPage, this.pageSize);
      },
      error: (err) => {
        console.error("Error deleting bearer:", err);
        this.toastService.showToast("Failed to delete bearer.", "danger");
      }
    });
  }
  // -------------------- Preview Toggle --------------------
  togglePreview(key) {
    this.showPreview[key] = !this.showPreview[key];
  }
  static {
    this.\u0275fac = function StateOfficeBearersComponent_Factory(t) {
      return new (t || _StateOfficeBearersComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ToastService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StateOfficeBearersComponent, selectors: [["app-state-office-bearers"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 161, vars: 22, consts: [["noData", ""], ["noFacebook", ""], ["noInstagram", ""], ["noTwitter", ""], ["noLinkedIn", ""], ["tabindex", "-1", "id", "aboutusDrawer", "aria-labelledby", "aboutusDrawerLabel", 1, "offcanvas", "offcanvas-end"], [1, "offcanvas-header"], ["id", "aboutusDrawerLabel"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "text-reset"], [1, "offcanvas-body"], [1, "d-flex", "flex-column", "justify-content-between", "h-100", 3, "ngSubmit", "formGroup"], [1, "inner-fields"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", "formControlName", "bearerName", 1, "form-control"], ["for", "designation", 1, "form-label"], ["formControlName", "bearerDesignation", "id", "bearerDesignation", 1, "form-select"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "upload-wrapper", "mb-3"], [1, "input-group"], ["type", "file", "accept", "image/*", 1, "form-control", 3, "change"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click", "disabled"], [1, "fas", 3, "ngClass"], ["class", "file-box mt-3", 4, "ngIf"], [1, "social-media-links"], ["type", "text", "formControlName", "facebookUrl", 1, "form-control"], ["type", "text", "formControlName", "twitterUrl", 1, "form-control"], ["type", "text", "formControlName", "linkedInUrl", 1, "form-control"], ["type", "text", "formControlName", "instagramUrl", 1, "form-control"], [1, "d-flex", "justify-content-end", "gap-3", "mt-3"], ["type", "button", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-secondary"], ["type", "submit", 1, "btn", "btn-prime"], ["tabindex", "-1", "id", "addBearerDrawer", "aria-labelledby", "addBearerDrawerLabel", 1, "offcanvas", "offcanvas-end"], ["id", "addBearerDrawerLabel"], [1, "tableheading"], [1, "d-flex", "justify-content-between", "align-items-center", "flex-wrap", "mb-3"], [1, ""], [1, "filter-options", "d-flex", "align-items-center", "gap-2", "flex-wrap", "flex-sm-nowrap", "w-md-75"], [1, "input-group", "w-100", 2, "min-width", "180px"], ["type", "text", "placeholder", "Search by name", 1, "form-control", "border-end-0", 3, "ngModelChange", "keyup", "ngModel"], [1, "input-group-text", "bg-transparent", "border-start-0"], ["xmlns", "http://www.w3.org/2000/svg", "width", "12", "height", "12", "viewBox", "0 0 12 12", "fill", "none"], ["d", "M10.2708 9.08333H9.64542L9.42375 8.86958C10.1996 7.96708 10.6667 6.79542 10.6667 5.52083C10.6667 2.67875 8.36292 0.375 5.52083 0.375C2.67875 0.375 0.375 2.67875 0.375 5.52083C0.375 8.36292 2.67875 10.6667 5.52083 10.6667C6.79542 10.6667 7.96708 10.1996 8.86958 9.42375L9.08333 9.64542V10.2708L13.0417 14.2213L14.2213 13.0417L10.2708 9.08333ZM5.52083 9.08333C3.54958 9.08333 1.95833 7.49208 1.95833 5.52083C1.95833 3.54958 3.54958 1.95833 5.52083 1.95833C7.49208 1.95833 9.08333 3.54958 9.08333 5.52083C9.08333 7.49208 7.49208 9.08333 5.52083 9.08333Z", "fill", "#727272"], [1, "btn", "btn-prime", "text-nowrap", 3, "click"], [1, "table-responsive", "custom-table"], [1, "table", "align-middle", "mb-0"], [4, "ngIf", "ngIfElse"], [1, "d-flex", "justify-content-end", "align-items-center", "gap-2", "mt-3"], [1, "pagination", "modern-pagination", "mb-0"], [1, "page-item"], [1, "page-link", 3, "click"], ["class", "page-item", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center"], [1, "form-select", "form-select-sm", "w-auto", 3, "change"], ["value", "15", 3, "selected"], ["value", "30", 3, "selected"], ["value", "50", 3, "selected"], [3, "value"], [1, "file-box", "mt-3"], ["alt", "Profile Preview", 1, "rounded", "mt-2", 2, "width", "150px", 3, "src"], ["alt", "Profile Preview", 1, "rounded", "mt-2", 2, "height", "50px", 3, "src"], [4, "ngFor", "ngForOf"], ["alt", "profile pic", 1, "tableprofile", 3, "src"], [1, "dropdown"], ["type", "button", "data-bs-toggle", "dropdown", 1, "btn"], [1, "dropdown-menu", "shadow"], ["class", "dropdown-item blue", 3, "click", 4, "ngIf"], [1, "dropdown-item", "red", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none"], ["id", "mask0_50905_5148", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "20", "height", "20", 2, "mask-type", "alpha"], ["width", "20", "height", "20", "fill", "#D9D9D9"], ["mask", "url(#mask0_50905_5148)"], ["d", "M14.5002 10.8335L13.3335 9.66683L15.0627 7.91683L13.3335 6.18766L14.5002 5.00016L16.2502 6.75016L17.9793 5.00016L19.1668 6.18766L17.4168 7.91683L19.1668 9.66683L17.9793 10.8335L16.2502 9.10433L14.5002 10.8335ZM7.50016 10.0002C6.5835 10.0002 5.79877 9.67377 5.146 9.021C4.49322 8.36822 4.16683 7.5835 4.16683 6.66683C4.16683 5.75016 4.49322 4.96544 5.146 4.31266C5.79877 3.65989 6.5835 3.3335 7.50016 3.3335C8.41683 3.3335 9.20155 3.65989 9.85433 4.31266C10.5071 4.96544 10.8335 5.75016 10.8335 6.66683C10.8335 7.5835 10.5071 8.36822 9.85433 9.021C9.20155 9.67377 8.41683 10.0002 7.50016 10.0002ZM0.833496 16.6668V14.3335C0.833496 13.8613 0.955024 13.4272 1.19808 13.0314C1.44114 12.6356 1.76405 12.3335 2.16683 12.1252C3.02794 11.6946 3.90294 11.3717 4.79183 11.1564C5.68072 10.9411 6.5835 10.8335 7.50016 10.8335C8.41683 10.8335 9.31961 10.9411 10.2085 11.1564C11.0974 11.3717 11.9724 11.6946 12.8335 12.1252C13.2363 12.3335 13.5592 12.6356 13.8022 13.0314C14.0453 13.4272 14.1668 13.8613 14.1668 14.3335V16.6668H0.833496ZM2.50016 15.0002H12.5002V14.3335C12.5002 14.1807 12.462 14.0418 12.3856 13.9168C12.3092 13.7918 12.2085 13.6946 12.0835 13.6252C11.3335 13.2502 10.5766 12.9689 9.81266 12.7814C9.04877 12.5939 8.27794 12.5002 7.50016 12.5002C6.72239 12.5002 5.95155 12.5939 5.18766 12.7814C4.42377 12.9689 3.66683 13.2502 2.91683 13.6252C2.79183 13.6946 2.69114 13.7918 2.61475 13.9168C2.53836 14.0418 2.50016 14.1807 2.50016 14.3335V15.0002ZM7.50016 8.3335C7.9585 8.3335 8.35086 8.1703 8.67725 7.84391C9.00364 7.51752 9.16683 7.12516 9.16683 6.66683C9.16683 6.2085 9.00364 5.81613 8.67725 5.48975C8.35086 5.16336 7.9585 5.00016 7.50016 5.00016C7.04183 5.00016 6.64947 5.16336 6.32308 5.48975C5.99669 5.81613 5.8335 6.2085 5.8335 6.66683C5.8335 7.12516 5.99669 7.51752 6.32308 7.84391C6.64947 8.1703 7.04183 8.3335 7.50016 8.3335Z", "fill", "#B7131A"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "25", "viewBox", "0 0 24 25", "fill", "none"], ["id", "mask0_52088_7150", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "24", "height", "25", 2, "mask-type", "alpha"], ["y", "0.5", "width", "24", "height", "24", "fill", "#D9D9D9"], ["mask", "url(#mask0_52088_7150)"], ["d", "M8.25 18.5C6.51667 18.5 5.04167 17.8917 3.825 16.675C2.60833 15.4583 2 13.9833 2 12.25C2 10.5167 2.60833 9.04167 3.825 7.825C5.04167 6.60833 6.51667 6 8.25 6H17.5C18.75 6 19.8125 6.4375 20.6875 7.3125C21.5625 8.1875 22 9.25 22 10.5C22 11.75 21.5625 12.8125 20.6875 13.6875C19.8125 14.5625 18.75 15 17.5 15H8.75C7.98333 15 7.33333 14.7333 6.8 14.2C6.26667 13.6667 6 13.0167 6 12.25C6 11.4833 6.26667 10.8333 6.8 10.3C7.33333 9.76667 7.98333 9.5 8.75 9.5H18V11.5H8.75C8.53333 11.5 8.35417 11.5708 8.2125 11.7125C8.07083 11.8542 8 12.0333 8 12.25C8 12.4667 8.07083 12.6458 8.2125 12.7875C8.35417 12.9292 8.53333 13 8.75 13H17.5C18.2 12.9833 18.7917 12.7375 19.275 12.2625C19.7583 11.7875 20 11.2 20 10.5C20 9.8 19.7583 9.20833 19.275 8.725C18.7917 8.24167 18.2 8 17.5 8H8.25C7.06667 7.98333 6.0625 8.39167 5.2375 9.225C4.4125 10.0583 4 11.0667 4 12.25C4 13.4167 4.4125 14.4083 5.2375 15.225C6.0625 16.0417 7.06667 16.4667 8.25 16.5H18V18.5H8.25Z", "fill", "#0E8FFF"], [1, "dropdown-item", "blue", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "14", "viewBox", "0 0 18 14", "fill", "none"], ["d", "M0.666504 13.6668V11.3335C0.666504 10.8752 0.784559 10.4446 1.02067 10.0418C1.25678 9.63905 1.58317 9.3335 1.99984 9.12516C2.70817 8.76405 3.50678 8.4585 4.39567 8.2085C5.28456 7.9585 6.26373 7.8335 7.33317 7.8335C7.74984 7.8335 8.15609 7.85433 8.55192 7.896C8.94775 7.93766 9.33317 8.00016 9.70817 8.0835L8.24984 9.54183C8.09706 9.51405 7.94775 9.50016 7.80192 9.50016H7.33317C6.34706 9.50016 5.46164 9.61822 4.67692 9.85433C3.8922 10.0904 3.24984 10.3474 2.74984 10.6252C2.62484 10.6946 2.52414 10.7918 2.44775 10.9168C2.37137 11.0418 2.33317 11.1807 2.33317 11.3335V12.0002H7.5415L9.20817 13.6668H0.666504ZM11.9582 14.0002L9.08317 11.1252L10.2498 9.9585L11.9582 11.6668L16.1665 7.4585L17.3332 8.62516L11.9582 14.0002ZM7.33317 7.00016C6.4165 7.00016 5.63178 6.67377 4.979 6.021C4.32623 5.36822 3.99984 4.5835 3.99984 3.66683C3.99984 2.75016 4.32623 1.96544 4.979 1.31266C5.63178 0.659885 6.4165 0.333496 7.33317 0.333496C8.24984 0.333496 9.03456 0.659885 9.68734 1.31266C10.3401 1.96544 10.6665 2.75016 10.6665 3.66683C10.6665 4.5835 10.3401 5.36822 9.68734 6.021C9.03456 6.67377 8.24984 7.00016 7.33317 7.00016ZM7.33317 5.3335C7.7915 5.3335 8.18387 5.1703 8.51025 4.84391C8.83664 4.51752 8.99984 4.12516 8.99984 3.66683C8.99984 3.2085 8.83664 2.81613 8.51025 2.48975C8.18387 2.16336 7.7915 2.00016 7.33317 2.00016C6.87484 2.00016 6.48248 2.16336 6.15609 2.48975C5.8297 2.81613 5.6665 3.2085 5.6665 3.66683C5.6665 4.12516 5.8297 4.51752 6.15609 4.84391C6.48248 5.1703 6.87484 5.3335 7.33317 5.3335Z", "fill", "#3C9718"], ["colspan", "7", 1, "text-center", "fs-3", "py-4"]], template: function StateOfficeBearersComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "h5", 7);
        \u0275\u0275text(3, "Edit Bearer Details");
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "button", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 9)(6, "form", 10);
        \u0275\u0275listener("ngSubmit", function StateOfficeBearersComponent_Template_form_ngSubmit_6_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSubmit());
        });
        \u0275\u0275elementStart(7, "div", 11)(8, "div", 12)(9, "label", 13);
        \u0275\u0275text(10, "Bearer Name ");
        \u0275\u0275elementStart(11, "span", 14);
        \u0275\u0275text(12, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(13, "input", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 12)(15, "label", 16);
        \u0275\u0275text(16, "Designation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "select", 17)(18, "option", 18);
        \u0275\u0275text(19, "Select Designation");
        \u0275\u0275elementEnd();
        \u0275\u0275template(20, StateOfficeBearersComponent_option_20_Template, 2, 2, "option", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 20)(22, "label", 13);
        \u0275\u0275text(23, "Profile Picture ");
        \u0275\u0275elementStart(24, "span", 14);
        \u0275\u0275text(25, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 21)(27, "input", 22);
        \u0275\u0275listener("change", function StateOfficeBearersComponent_Template_input_change_27_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onImageSelected($event, "bearerProfilePic"));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "button", 23);
        \u0275\u0275listener("click", function StateOfficeBearersComponent_Template_button_click_28_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.togglePreview("bearerProfilePic"));
        });
        \u0275\u0275element(29, "i", 24);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(30, StateOfficeBearersComponent_div_30_Template, 4, 1, "div", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 26)(32, "div", 12)(33, "label", 13);
        \u0275\u0275text(34, "Facebook URL");
        \u0275\u0275elementEnd();
        \u0275\u0275element(35, "input", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "div", 12)(37, "label", 13);
        \u0275\u0275text(38, "Twitter URL");
        \u0275\u0275elementEnd();
        \u0275\u0275element(39, "input", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 12)(41, "label", 13);
        \u0275\u0275text(42, "LinkedIn URL");
        \u0275\u0275elementEnd();
        \u0275\u0275element(43, "input", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "div", 12)(45, "label", 13);
        \u0275\u0275text(46, "Instagram URL");
        \u0275\u0275elementEnd();
        \u0275\u0275element(47, "input", 30);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(48, "div", 31)(49, "button", 32);
        \u0275\u0275text(50, "Back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "button", 33);
        \u0275\u0275text(52, "Submit");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(53, "div", 34)(54, "div", 6)(55, "h5", 35);
        \u0275\u0275text(56, "Add Office Bearer");
        \u0275\u0275elementEnd();
        \u0275\u0275element(57, "button", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "div", 9)(59, "form", 10);
        \u0275\u0275listener("ngSubmit", function StateOfficeBearersComponent_Template_form_ngSubmit_59_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onAddBearerSubmit());
        });
        \u0275\u0275elementStart(60, "div", 11)(61, "div", 12)(62, "label", 13);
        \u0275\u0275text(63, "Bearer Name ");
        \u0275\u0275elementStart(64, "span", 14);
        \u0275\u0275text(65, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(66, "input", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "div", 12)(68, "label", 16);
        \u0275\u0275text(69, "Designation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "select", 17)(71, "option", 18);
        \u0275\u0275text(72, "Select Designation");
        \u0275\u0275elementEnd();
        \u0275\u0275template(73, StateOfficeBearersComponent_option_73_Template, 2, 2, "option", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(74, "div", 20)(75, "label", 13);
        \u0275\u0275text(76, "Profile Picture ");
        \u0275\u0275elementStart(77, "span", 14);
        \u0275\u0275text(78, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(79, "div", 21)(80, "input", 22);
        \u0275\u0275listener("change", function StateOfficeBearersComponent_Template_input_change_80_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onImageSelected($event, "addBearerProfilePic"));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "button", 23);
        \u0275\u0275listener("click", function StateOfficeBearersComponent_Template_button_click_81_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.togglePreview("addBearerProfilePic"));
        });
        \u0275\u0275element(82, "i", 24);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(83, StateOfficeBearersComponent_div_83_Template, 2, 1, "div", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "div", 26)(85, "div", 12)(86, "label", 13);
        \u0275\u0275text(87, "Facebook URL");
        \u0275\u0275elementEnd();
        \u0275\u0275element(88, "input", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "div", 12)(90, "label", 13);
        \u0275\u0275text(91, "Twitter URL");
        \u0275\u0275elementEnd();
        \u0275\u0275element(92, "input", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "div", 12)(94, "label", 13);
        \u0275\u0275text(95, "LinkedIn URL");
        \u0275\u0275elementEnd();
        \u0275\u0275element(96, "input", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "div", 12)(98, "label", 13);
        \u0275\u0275text(99, "Instagram URL");
        \u0275\u0275elementEnd();
        \u0275\u0275element(100, "input", 30);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(101, "div", 31)(102, "button", 32);
        \u0275\u0275text(103, "Back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "button", 33);
        \u0275\u0275text(105, "Add");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(106, "div", 36)(107, "div", 37)(108, "h5", 38);
        \u0275\u0275text(109, "Office Bearers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(110, "div", 39)(111, "div", 40)(112, "input", 41);
        \u0275\u0275twoWayListener("ngModelChange", function StateOfficeBearersComponent_Template_input_ngModelChange_112_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("keyup", function StateOfficeBearersComponent_Template_input_keyup_112_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSearchKeyup());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(113, "span", 42);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(114, "svg", 43);
        \u0275\u0275element(115, "path", 44);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(116, "button", 45);
        \u0275\u0275listener("click", function StateOfficeBearersComponent_Template_button_click_116_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.openAddBearerDrawer());
        });
        \u0275\u0275text(117, "Add Office Bearers");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(118, "div", 46)(119, "table", 47)(120, "thead")(121, "tr")(122, "th");
        \u0275\u0275text(123, "S.no");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(124, "th");
        \u0275\u0275text(125, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(126, "th");
        \u0275\u0275text(127, "Photo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(128, "th");
        \u0275\u0275text(129, "Designation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(130, "th");
        \u0275\u0275text(131, "Facebook");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(132, "th");
        \u0275\u0275text(133, "Instagram");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(134, "th");
        \u0275\u0275text(135, "X");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(136, "th");
        \u0275\u0275text(137, "linkedln");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(138, "th");
        \u0275\u0275text(139, "Action");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(140, StateOfficeBearersComponent_tbody_140_Template, 2, 1, "tbody", 48)(141, StateOfficeBearersComponent_ng_template_141_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(143, "div", 49)(144, "nav")(145, "ul", 50)(146, "li", 51)(147, "a", 52);
        \u0275\u0275listener("click", function StateOfficeBearersComponent_Template_a_click_147_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.goPrevious());
        });
        \u0275\u0275text(148, "\u2039");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(149, StateOfficeBearersComponent_li_149_Template, 3, 3, "li", 53);
        \u0275\u0275elementStart(150, "li", 51)(151, "a", 52);
        \u0275\u0275listener("click", function StateOfficeBearersComponent_Template_a_click_151_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.goNext());
        });
        \u0275\u0275text(152, "\u203A");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(153, "div", 54)(154, "select", 55);
        \u0275\u0275listener("change", function StateOfficeBearersComponent_Template_select_change_154_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onPageSizeChange($event));
        });
        \u0275\u0275elementStart(155, "option", 56);
        \u0275\u0275text(156, "15 /Page");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(157, "option", 57);
        \u0275\u0275text(158, "30 /Page");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(159, "option", 58);
        \u0275\u0275text(160, "50 /Page");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        const noData_r15 = \u0275\u0275reference(142);
        \u0275\u0275advance(6);
        \u0275\u0275property("formGroup", ctx.aboutForm);
        \u0275\u0275advance(14);
        \u0275\u0275property("ngForOf", ctx.designations);
        \u0275\u0275advance(8);
        \u0275\u0275property("disabled", !ctx.selectedImages["bearerProfilePic"]);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.showPreview["bearerProfilePic"] ? "fa-eye-slash" : "fa-eye");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showPreview["bearerProfilePic"] && ctx.selectedImages["bearerProfilePic"]);
        \u0275\u0275advance(29);
        \u0275\u0275property("formGroup", ctx.addBearerForm);
        \u0275\u0275advance(14);
        \u0275\u0275property("ngForOf", ctx.designations);
        \u0275\u0275advance(8);
        \u0275\u0275property("disabled", !ctx.selectedImages["addBearerProfilePic"]);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.showPreview["addBearerProfilePic"] ? "fa-eye-slash" : "fa-eye");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showPreview["addBearerProfilePic"] && ctx.selectedImages["addBearerProfilePic"]);
        \u0275\u0275advance(29);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
        \u0275\u0275advance(28);
        \u0275\u0275property("ngIf", ctx.users && ctx.users.length > 0)("ngIfElse", noData_r15);
        \u0275\u0275advance(6);
        \u0275\u0275classProp("disabled", ctx.currentPage === 1);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(21, _c0).constructor(ctx.totalPages));
        \u0275\u0275advance();
        \u0275\u0275classProp("disabled", ctx.currentPage === ctx.totalPages);
        \u0275\u0275advance(5);
        \u0275\u0275property("selected", ctx.pageSize === 15);
        \u0275\u0275advance(2);
        \u0275\u0275property("selected", ctx.pageSize === 30);
        \u0275\u0275advance(2);
        \u0275\u0275property("selected", ctx.pageSize === 50);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName], styles: ['\n\n.tableheading[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #211b3a;\n  font-family: Urbanist;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 28px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-family: Urbanist;\n  color: #492fb2;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 16px;\n  letter-spacing: 0.07px;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #333;\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 150%;\n  letter-spacing: 0.25px;\n}\n.custom-table[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n}\n.custom-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #eee;\n  padding: 12px;\n}\n.tableprofile[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  object-fit: cover;\n  object-position: top;\n}\n.badge[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  font-family: "Noto Sans";\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: var(--Line-Heights-10, 20px);\n  letter-spacing: var(--Letter-Spacing-4, 0.25px);\n  padding: 6px 12px;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid #c6c6c6;\n  background: #fff;\n  cursor: pointer;\n  padding: 8px 0px;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .blue[_ngcontent-%COMP%] {\n  color: #3C9718;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .black[_ngcontent-%COMP%] {\n  color: #211b3a;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%] {\n  color: #b7131a;\n}\n.btn-check[_ngcontent-%COMP%]:checked    + .btn[_ngcontent-%COMP%], .btn.active[_ngcontent-%COMP%], .btn.show[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:first-child:active, [_ngcontent-%COMP%]:not(.btn-check)    + .btn[_ngcontent-%COMP%]:active {\n  border-color: transparent;\n}\n.modern-pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%] {\n  margin: 0 3px;\n}\n.modern-pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  border-radius: 8px !important;\n  border: 1px solid #ddd;\n  padding: 6px 12px;\n  color: #444;\n  background-color: #fff;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.modern-pagination[_ngcontent-%COMP%]   .page-link.active[_ngcontent-%COMP%] {\n  background-color: #f5f0ff;\n  border: 1px solid #7c3aed;\n  color: #7c3aed;\n  font-weight: 600;\n}\n.modern-pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:hover {\n  background-color: #f2f2f2;\n  color: #000;\n}\n.modern-pagination[_ngcontent-%COMP%]   .page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n}\n.form-select[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 2.25rem 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--bs-body-color);\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background-color: var(--bs-body-bg);\n  background-image: var(--bs-form-select-bg-img), var(--bs-form-select-bg-icon, none);\n  background-repeat: no-repeat;\n  background-position: right 0.75rem center;\n  background-size: 16px 12px;\n  border: var(--bs-border-width) solid var(--bs-border-color);\n  border-radius: var(--bs-border-radius);\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  cursor: pointer;\n}\n.social-media-links[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n.table-responsive[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n@media (max-width: 1070px) {\n  .table-responsive[_ngcontent-%COMP%] {\n    overflow: scroll !important;\n  }\n}\n/*# sourceMappingURL=state-office-bearers.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StateOfficeBearersComponent, { className: "StateOfficeBearersComponent", filePath: "src/app/state-dashboard/pages/state-office-bearers/state-office-bearers.component.ts", lineNumber: 16 });
})();
export {
  StateOfficeBearersComponent
};
//# sourceMappingURL=chunk-2W62USO2.js.map
