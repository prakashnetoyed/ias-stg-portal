import './polyfills.server.mjs';
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-2UIUPUOY.mjs";
import {
  ToastService
} from "./chunk-A2UBZQQG.mjs";
import {
  environment
} from "./chunk-SJMEGSB4.mjs";
import {
  HttpClient
} from "./chunk-DO7CA2WQ.mjs";
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-3RYB6XRG.mjs";
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
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-IXD3JOLX.mjs";
import "./chunk-24VIC3GD.mjs";

// src/app/state-dashboard/pages/state-news/state-news.component.ts
var _c0 = () => [];
function StateNewsComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275element(1, "img", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.selectedImages["editBannerImage"], \u0275\u0275sanitizeUrl);
  }
}
function StateNewsComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275element(1, "img", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.selectedImages["bannerImage"], \u0275\u0275sanitizeUrl);
  }
}
function StateNewsComponent_tbody_111_tr_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 60);
    \u0275\u0275listener("click", function StateNewsComponent_tbody_111_tr_1_ng_container_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const user_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openBannerInNewTab(user_r5.bannerImage));
    });
    \u0275\u0275text(2, " View Banner ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function StateNewsComponent_tbody_111_tr_1_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "No Banner");
    \u0275\u0275elementEnd();
  }
}
function StateNewsComponent_tbody_111_tr_1_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 61);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 62)(3, "mask", 63);
    \u0275\u0275element(4, "rect", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "g", 65);
    \u0275\u0275element(6, "path", 66);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(7, " Link ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const user_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("href", user_r5.newsLink, \u0275\u0275sanitizeUrl);
  }
}
function StateNewsComponent_tbody_111_tr_1_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "No Link");
    \u0275\u0275elementEnd();
  }
}
function StateNewsComponent_tbody_111_tr_1_a_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 67);
    \u0275\u0275listener("click", function StateNewsComponent_tbody_111_tr_1_a_22_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const user_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editNews(user_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 68);
    \u0275\u0275element(2, "path", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "Edit");
    \u0275\u0275elementEnd();
  }
}
function StateNewsComponent_tbody_111_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275template(6, StateNewsComponent_tbody_111_tr_1_ng_container_6_Template, 3, 0, "ng-container", 36)(7, StateNewsComponent_tbody_111_tr_1_ng_template_7_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275template(10, StateNewsComponent_tbody_111_tr_1_ng_container_10_Template, 8, 1, "ng-container", 36)(11, StateNewsComponent_tbody_111_tr_1_ng_template_11_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "div", 50)(18, "button", 51);
    \u0275\u0275text(19, " \u22EE ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "ul", 52)(21, "li");
    \u0275\u0275template(22, StateNewsComponent_tbody_111_tr_1_a_22_Template, 4, 0, "a", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "li")(24, "a", 54);
    \u0275\u0275listener("click", function StateNewsComponent_tbody_111_tr_1_Template_a_click_24_listener() {
      const user_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteNews(user_r5.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(25, "svg", 55)(26, "mask", 56);
    \u0275\u0275element(27, "rect", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "g", 58);
    \u0275\u0275element(29, "path", 59);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(30, "Delete");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const user_r5 = ctx.$implicit;
    const i_r7 = ctx.index;
    const noImage_r8 = \u0275\u0275reference(8);
    const noFacebook_r9 = \u0275\u0275reference(12);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r1.currentPage - 1) * ctx_r1.pageSize + i_r7 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", user_r5.bannerImage)("ngIfElse", noImage_r8);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", user_r5.newsLink)("ngIfElse", noFacebook_r9);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(user_r5.eventDate ? \u0275\u0275pipeBind2(15, 8, user_r5.eventDate, "dd-MM-yyyy") : "Not found");
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", user_r5.status !== "approved");
  }
}
function StateNewsComponent_tbody_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tbody");
    \u0275\u0275template(1, StateNewsComponent_tbody_111_tr_1_Template, 31, 11, "tr", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.users);
  }
}
function StateNewsComponent_ng_template_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tbody")(1, "tr")(2, "td", 70);
    \u0275\u0275text(3, "No news found.");
    \u0275\u0275elementEnd()()();
  }
}
function StateNewsComponent_li_120_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 39)(1, "a", 40);
    \u0275\u0275listener("click", function StateNewsComponent_li_120_Template_a_click_1_listener() {
      const i_r11 = \u0275\u0275restoreView(_r10).index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changePage(i_r11 + 1));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r11 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("active", i_r11 + 1 === ctx_r1.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r11 + 1);
  }
}
var StateNewsComponent = class _StateNewsComponent {
  constructor(http, fb, toastService) {
    this.http = http;
    this.fb = fb;
    this.toastService = toastService;
    this.users = [];
    this.pageSize = 15;
    this.currentPage = 1;
    this.searchText = "";
    this.selectedNewsId = null;
    this.selectedImages = {};
    this.showPreview = {};
    this.pagination = {
      total: 0,
      page: 1,
      limit: 15
    };
    this.addNewsEventForm = this.fb.group({
      title: ["", Validators.required],
      description: ["", Validators.required],
      newsLink: [""],
      eventType: ["news"],
      eventDate: ["", Validators.required]
    });
    this.editNewsEventForm = this.fb.group({
      title: ["", Validators.required],
      description: ["", Validators.required],
      newsLink: [""],
      eventDate: ["", Validators.required]
    });
  }
  ngOnInit() {
    this.loadNewsEvents();
  }
  // -------------------- Load News --------------------
  loadNewsEvents(page = 1, limit = 15) {
    this.toastService.showToast("Loading news/events...", "info");
    let url = `${environment.apiUrl}/latest-news-events?page=${page}&limit=${limit}&eventType=news&isActive=true`;
    if (this.searchText.trim()) {
      url += `&title=${encodeURIComponent(this.searchText.trim())}`;
    }
    this.http.get(url).subscribe({
      next: (res) => {
        this.users = res.data?.data || [];
        this.toastService.showToast("News loaded successfully", "success");
        this.pagination.total = res.data?.pagination?.total || 0;
        this.pagination.limit = limit;
        this.pagination.page = page;
      },
      error: (err) => {
        console.error("Error fetching news/events:", err);
        this.toastService.showToast("Failed to load news/events.", "danger");
      }
    });
  }
  onSearchKeyup() {
    this.loadNewsEvents(1, this.pageSize);
  }
  // -------------------- Pagination --------------------
  get totalPages() {
    return Math.ceil(this.pagination.total / this.pagination.limit);
  }
  changePage(page) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadNewsEvents(this.currentPage, this.pageSize);
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
    this.loadNewsEvents(this.currentPage, this.pageSize);
  }
  // -------------------- Image Handling --------------------
  onImageSelected(event, key) {
    const file = event.target.files[0];
    if (file) {
      this.selectedImages[key] = URL.createObjectURL(file);
      this.selectedImages[key + "File"] = file;
    }
  }
  togglePreview(key) {
    this.showPreview[key] = !this.showPreview[key];
  }
  openBannerInNewTab(base64Image) {
    const newWindow = window.open();
    if (newWindow) {
      newWindow.document.write(`<img src="${base64Image}" style="width:100%"/>`);
      newWindow.document.title = "News/Event Banner";
    }
  }
  // -------------------- Add News --------------------
  openAddNewsDrawer() {
    const drawerEl = document.getElementById("addNewsEventDrawer");
    if (drawerEl) {
      const bsDrawer = new bootstrap.Offcanvas(drawerEl);
      bsDrawer.show();
    }
  }
  onAddNewsEventSubmit() {
    if (this.addNewsEventForm.invalid || !this.selectedImages["bannerImageFile"]) {
      this.toastService.showToast("Please fill all required fields", "danger");
      return;
    }
    this.toastService.showToast("Adding news/event...", "info");
    const reader = new FileReader();
    reader.onload = () => {
      const payload = {
        title: this.addNewsEventForm.value.title?.trim(),
        description: this.addNewsEventForm.value.description?.trim(),
        bannerImage: reader.result,
        eventType: "news",
        eventDate: this.addNewsEventForm.value.eventDate
      };
      const newsLink = this.addNewsEventForm.value.newsLink?.trim();
      if (newsLink) {
        payload.newsLink = newsLink;
      }
      this.http.post(`${environment.apiUrl}/latest-news-events`, payload).subscribe({
        next: () => {
          this.toastService.showToast("News/Event added successfully!", "success");
          this.addNewsEventForm.reset();
          this.selectedImages["bannerImage"] = null;
          this.selectedImages["bannerImageFile"] = null;
          this.loadNewsEvents();
          const drawer = document.getElementById("addNewsEventDrawer");
          if (drawer)
            bootstrap.Offcanvas.getInstance(drawer)?.hide();
        },
        error: (err) => {
          console.error(err);
          this.toastService.showToast("Failed to add News/Event.", "danger");
        }
      });
    };
    reader.readAsDataURL(this.selectedImages["bannerImageFile"]);
  }
  // -------------------- Edit News --------------------
  editNews(user) {
    this.selectedNewsId = user.id;
    this.editNewsEventForm.patchValue({
      title: user.title || "",
      description: user.description || "",
      newsLink: user.newsLink || "",
      eventDate: user.eventDate ? new Date(user.eventDate).toISOString().split("T")[0] : ""
    });
    this.selectedImages["bannerImage"] = user.bannerImage || null;
    this.selectedImages["bannerImageFile"] = null;
    const offcanvasEl = document.getElementById("editNewsDrawer");
    if (offcanvasEl) {
      const bsOffcanvas = new bootstrap.Offcanvas(offcanvasEl);
      bsOffcanvas.show();
    }
  }
  onEditNewsSubmit() {
    if (!this.selectedNewsId || this.editNewsEventForm.invalid)
      return;
    this.toastService.showToast("Updating news/event...", "info");
    const payload = {
      title: this.editNewsEventForm.value.title?.trim(),
      description: this.editNewsEventForm.value.description?.trim(),
      eventDate: this.editNewsEventForm.value.eventDate
    };
    const newsLink = this.editNewsEventForm.value.newsLink?.trim();
    payload.newsLink = newsLink !== "" ? newsLink : null;
    if (this.selectedImages["bannerImageFile"]) {
      const reader = new FileReader();
      reader.onload = () => {
        payload.bannerImage = reader.result;
        this.updateNews(payload);
      };
      reader.readAsDataURL(this.selectedImages["bannerImageFile"]);
    } else {
      this.updateNews(payload);
    }
  }
  updateNews(payload) {
    this.http.patch(`${environment.apiUrl}/latest-news-events/${this.selectedNewsId}`, payload).subscribe({
      next: () => {
        this.toastService.showToast("News updated successfully!", "success");
        this.loadNewsEvents(this.currentPage, this.pageSize);
        this.selectedNewsId = null;
        this.editNewsEventForm.reset();
        this.selectedImages["bannerImage"] = null;
        this.selectedImages["bannerImageFile"] = null;
        this.showPreview["bannerImage"] = false;
        bootstrap.Offcanvas.getInstance(document.getElementById("aboutusDrawer"))?.hide();
      },
      error: (err) => {
        console.error("Error updating News:", err);
        this.toastService.showToast("Failed to update News.", "danger");
      }
    });
  }
  // -------------------- Delete News --------------------
  deleteNews(newsId) {
    if (!confirm("Are you sure you want to delete this News?"))
      return;
    this.toastService.showToast("Deleting news/event...", "info");
    this.http.delete(`${environment.apiUrl}/latest-news-events/${newsId}`).subscribe({
      next: () => {
        this.toastService.showToast("News deleted successfully!", "success");
        this.loadNewsEvents(this.currentPage, this.pageSize);
      },
      error: (err) => {
        console.error("Error deleting News:", err);
        this.toastService.showToast("Failed to delete News.", "danger");
      }
    });
  }
  static {
    this.\u0275fac = function StateNewsComponent_Factory(t) {
      return new (t || _StateNewsComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ToastService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StateNewsComponent, selectors: [["app-state-news"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 132, vars: 19, consts: [["noData", ""], ["noImage", ""], ["noFacebook", ""], ["tabindex", "-1", "id", "editNewsDrawer", "aria-labelledby", "editNewsDrawerLabel", 1, "offcanvas", "offcanvas-end"], [1, "offcanvas-header"], ["id", "editNewsDrawerLabel"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "text-reset"], [1, "offcanvas-body"], [1, "d-flex", "flex-column", "justify-content-between", "h-100", 3, "ngSubmit", "formGroup"], [1, "iner-form"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", "formControlName", "title", 1, "form-control"], ["rows", "4", "formControlName", "description", 1, "form-control"], ["type", "text", "formControlName", "newsLink", 1, "form-control"], [1, "upload-wrapper", "mb-3"], [1, "input-group"], ["type", "file", "accept", "image/*", 1, "form-control", 3, "change"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click", "disabled"], [1, "fas", 3, "ngClass"], ["class", "file-box mt-3", 4, "ngIf"], ["type", "date", "formControlName", "eventDate", 1, "form-control"], [1, "d-flex", "justify-content-end", "gap-3", "mt-3"], ["type", "button", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-secondary"], ["type", "submit", 1, "btn", "btn-prime"], ["tabindex", "-1", "id", "addNewsEventDrawer", "aria-labelledby", "addNewsEventDrawerLabel", 1, "offcanvas", "offcanvas-end"], ["id", "addNewsEventDrawerLabel"], [1, "inner-fields"], [1, "tableheading"], [1, "d-flex", "justify-content-between", "align-items-center", "flex-wrap", "mb-3"], [1, ""], [1, "filter-options", "d-flex", "align-items-center", "gap-2", "flex-wrap", "flex-sm-nowrap", "w-md-75"], [1, "btn", "btn-prime", "text-nowrap", 3, "click"], [1, "table-responsive", "custom-table"], [1, "table", "align-middle", "mb-0"], [4, "ngIf", "ngIfElse"], [1, "d-flex", "justify-content-end", "align-items-center", "gap-2", "mt-3"], [1, "pagination", "modern-pagination", "mb-0"], [1, "page-item"], [1, "page-link", 3, "click"], ["class", "page-item", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center"], [1, "form-select", "form-select-sm", "w-auto", 3, "change"], ["value", "15", 3, "selected"], ["value", "30", 3, "selected"], ["value", "50", 3, "selected"], [1, "file-box", "mt-3"], ["alt", "Banner Preview", 1, "rounded", "mt-2", 2, "height", "80px", "width", "auto", 3, "src"], [4, "ngFor", "ngForOf"], [1, "dropdown"], ["type", "button", "data-bs-toggle", "dropdown", 1, "btn"], [1, "dropdown-menu", "shadow"], ["class", "dropdown-item blue", 3, "click", 4, "ngIf"], [1, "dropdown-item", "red", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none"], ["id", "mask0_50905_5148", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "20", "height", "20", 2, "mask-type", "alpha"], ["width", "20", "height", "20", "fill", "#D9D9D9"], ["mask", "url(#mask0_50905_5148)"], ["d", "M14.5002 10.8335L13.3335 9.66683L15.0627 7.91683L13.3335 6.18766L14.5002 5.00016L16.2502 6.75016L17.9793 5.00016L19.1668 6.18766L17.4168 7.91683L19.1668 9.66683L17.9793 10.8335L16.2502 9.10433L14.5002 10.8335ZM7.50016 10.0002C6.5835 10.0002 5.79877 9.67377 5.146 9.021C4.49322 8.36822 4.16683 7.5835 4.16683 6.66683C4.16683 5.75016 4.49322 4.96544 5.146 4.31266C5.79877 3.65989 6.5835 3.3335 7.50016 3.3335C8.41683 3.3335 9.20155 3.65989 9.85433 4.31266C10.5071 4.96544 10.8335 5.75016 10.8335 6.66683C10.8335 7.5835 10.5071 8.36822 9.85433 9.021C9.20155 9.67377 8.41683 10.0002 7.50016 10.0002ZM0.833496 16.6668V14.3335C0.833496 13.8613 0.955024 13.4272 1.19808 13.0314C1.44114 12.6356 1.76405 12.3335 2.16683 12.1252C3.02794 11.6946 3.90294 11.3717 4.79183 11.1564C5.68072 10.9411 6.5835 10.8335 7.50016 10.8335C8.41683 10.8335 9.31961 10.9411 10.2085 11.1564C11.0974 11.3717 11.9724 11.6946 12.8335 12.1252C13.2363 12.3335 13.5592 12.6356 13.8022 13.0314C14.0453 13.4272 14.1668 13.8613 14.1668 14.3335V16.6668H0.833496ZM2.50016 15.0002H12.5002V14.3335C12.5002 14.1807 12.462 14.0418 12.3856 13.9168C12.3092 13.7918 12.2085 13.6946 12.0835 13.6252C11.3335 13.2502 10.5766 12.9689 9.81266 12.7814C9.04877 12.5939 8.27794 12.5002 7.50016 12.5002C6.72239 12.5002 5.95155 12.5939 5.18766 12.7814C4.42377 12.9689 3.66683 13.2502 2.91683 13.6252C2.79183 13.6946 2.69114 13.7918 2.61475 13.9168C2.53836 14.0418 2.50016 14.1807 2.50016 14.3335V15.0002ZM7.50016 8.3335C7.9585 8.3335 8.35086 8.1703 8.67725 7.84391C9.00364 7.51752 9.16683 7.12516 9.16683 6.66683C9.16683 6.2085 9.00364 5.81613 8.67725 5.48975C8.35086 5.16336 7.9585 5.00016 7.50016 5.00016C7.04183 5.00016 6.64947 5.16336 6.32308 5.48975C5.99669 5.81613 5.8335 6.2085 5.8335 6.66683C5.8335 7.12516 5.99669 7.51752 6.32308 7.84391C6.64947 8.1703 7.04183 8.3335 7.50016 8.3335Z", "fill", "#B7131A"], [1, "btn", "btn-link", "p-0", 3, "click"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "25", "viewBox", "0 0 24 25", "fill", "none"], ["id", "mask0_52088_7150", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "24", "height", "25", 2, "mask-type", "alpha"], ["y", "0.5", "width", "24", "height", "24", "fill", "#D9D9D9"], ["mask", "url(#mask0_52088_7150)"], ["d", "M8.25 18.5C6.51667 18.5 5.04167 17.8917 3.825 16.675C2.60833 15.4583 2 13.9833 2 12.25C2 10.5167 2.60833 9.04167 3.825 7.825C5.04167 6.60833 6.51667 6 8.25 6H17.5C18.75 6 19.8125 6.4375 20.6875 7.3125C21.5625 8.1875 22 9.25 22 10.5C22 11.75 21.5625 12.8125 20.6875 13.6875C19.8125 14.5625 18.75 15 17.5 15H8.75C7.98333 15 7.33333 14.7333 6.8 14.2C6.26667 13.6667 6 13.0167 6 12.25C6 11.4833 6.26667 10.8333 6.8 10.3C7.33333 9.76667 7.98333 9.5 8.75 9.5H18V11.5H8.75C8.53333 11.5 8.35417 11.5708 8.2125 11.7125C8.07083 11.8542 8 12.0333 8 12.25C8 12.4667 8.07083 12.6458 8.2125 12.7875C8.35417 12.9292 8.53333 13 8.75 13H17.5C18.2 12.9833 18.7917 12.7375 19.275 12.2625C19.7583 11.7875 20 11.2 20 10.5C20 9.8 19.7583 9.20833 19.275 8.725C18.7917 8.24167 18.2 8 17.5 8H8.25C7.06667 7.98333 6.0625 8.39167 5.2375 9.225C4.4125 10.0583 4 11.0667 4 12.25C4 13.4167 4.4125 14.4083 5.2375 15.225C6.0625 16.0417 7.06667 16.4667 8.25 16.5H18V18.5H8.25Z", "fill", "#0E8FFF"], [1, "dropdown-item", "blue", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "14", "viewBox", "0 0 18 14", "fill", "none"], ["d", "M0.666504 13.6668V11.3335C0.666504 10.8752 0.784559 10.4446 1.02067 10.0418C1.25678 9.63905 1.58317 9.3335 1.99984 9.12516C2.70817 8.76405 3.50678 8.4585 4.39567 8.2085C5.28456 7.9585 6.26373 7.8335 7.33317 7.8335C7.74984 7.8335 8.15609 7.85433 8.55192 7.896C8.94775 7.93766 9.33317 8.00016 9.70817 8.0835L8.24984 9.54183C8.09706 9.51405 7.94775 9.50016 7.80192 9.50016H7.33317C6.34706 9.50016 5.46164 9.61822 4.67692 9.85433C3.8922 10.0904 3.24984 10.3474 2.74984 10.6252C2.62484 10.6946 2.52414 10.7918 2.44775 10.9168C2.37137 11.0418 2.33317 11.1807 2.33317 11.3335V12.0002H7.5415L9.20817 13.6668H0.666504ZM11.9582 14.0002L9.08317 11.1252L10.2498 9.9585L11.9582 11.6668L16.1665 7.4585L17.3332 8.62516L11.9582 14.0002ZM7.33317 7.00016C6.4165 7.00016 5.63178 6.67377 4.979 6.021C4.32623 5.36822 3.99984 4.5835 3.99984 3.66683C3.99984 2.75016 4.32623 1.96544 4.979 1.31266C5.63178 0.659885 6.4165 0.333496 7.33317 0.333496C8.24984 0.333496 9.03456 0.659885 9.68734 1.31266C10.3401 1.96544 10.6665 2.75016 10.6665 3.66683C10.6665 4.5835 10.3401 5.36822 9.68734 6.021C9.03456 6.67377 8.24984 7.00016 7.33317 7.00016ZM7.33317 5.3335C7.7915 5.3335 8.18387 5.1703 8.51025 4.84391C8.83664 4.51752 8.99984 4.12516 8.99984 3.66683C8.99984 3.2085 8.83664 2.81613 8.51025 2.48975C8.18387 2.16336 7.7915 2.00016 7.33317 2.00016C6.87484 2.00016 6.48248 2.16336 6.15609 2.48975C5.8297 2.81613 5.6665 3.2085 5.6665 3.66683C5.6665 4.12516 5.8297 4.51752 6.15609 4.84391C6.48248 5.1703 6.87484 5.3335 7.33317 5.3335Z", "fill", "#3C9718"], ["colspan", "7", 1, "text-center", "fs-3", "py-4"]], template: function StateNewsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "h5", 5);
        \u0275\u0275text(3, "Edit News");
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "button", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 7)(6, "form", 8);
        \u0275\u0275listener("ngSubmit", function StateNewsComponent_Template_form_ngSubmit_6_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onEditNewsSubmit());
        });
        \u0275\u0275elementStart(7, "div", 9)(8, "div", 10)(9, "label", 11);
        \u0275\u0275text(10, "Title ");
        \u0275\u0275elementStart(11, "span", 12);
        \u0275\u0275text(12, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(13, "input", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 10)(15, "label", 11);
        \u0275\u0275text(16, "Description ");
        \u0275\u0275elementStart(17, "span", 12);
        \u0275\u0275text(18, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(19, "textarea", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 10)(21, "label", 11);
        \u0275\u0275text(22, "News Link");
        \u0275\u0275elementEnd();
        \u0275\u0275element(23, "input", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 16)(25, "label", 11);
        \u0275\u0275text(26, "Banner Image");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 17)(28, "input", 18);
        \u0275\u0275listener("change", function StateNewsComponent_Template_input_change_28_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onImageSelected($event, "editBannerImage"));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "button", 19);
        \u0275\u0275listener("click", function StateNewsComponent_Template_button_click_29_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.togglePreview("editBannerImage"));
        });
        \u0275\u0275element(30, "i", 20);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(31, StateNewsComponent_div_31_Template, 2, 1, "div", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 10)(33, "label", 11);
        \u0275\u0275text(34, "Published On ");
        \u0275\u0275elementStart(35, "span", 12);
        \u0275\u0275text(36, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(37, "input", 22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "div", 23)(39, "button", 24);
        \u0275\u0275text(40, "Back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "button", 25);
        \u0275\u0275text(42, "Update");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(43, "div", 26)(44, "div", 4)(45, "h5", 27);
        \u0275\u0275text(46, "Add News");
        \u0275\u0275elementEnd();
        \u0275\u0275element(47, "button", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "div", 7)(49, "form", 8);
        \u0275\u0275listener("ngSubmit", function StateNewsComponent_Template_form_ngSubmit_49_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onAddNewsEventSubmit());
        });
        \u0275\u0275elementStart(50, "div", 28)(51, "div", 10)(52, "label", 11);
        \u0275\u0275text(53, "Title ");
        \u0275\u0275elementStart(54, "span", 12);
        \u0275\u0275text(55, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(56, "input", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "div", 10)(58, "label", 11);
        \u0275\u0275text(59, "Description ");
        \u0275\u0275elementStart(60, "span", 12);
        \u0275\u0275text(61, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(62, "textarea", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "div", 10)(64, "label", 11);
        \u0275\u0275text(65, "News Link");
        \u0275\u0275elementEnd();
        \u0275\u0275element(66, "input", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "div", 16)(68, "label", 11);
        \u0275\u0275text(69, "Banner Image ");
        \u0275\u0275elementStart(70, "span", 12);
        \u0275\u0275text(71, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(72, "div", 17)(73, "input", 18);
        \u0275\u0275listener("change", function StateNewsComponent_Template_input_change_73_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onImageSelected($event, "bannerImage"));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "button", 19);
        \u0275\u0275listener("click", function StateNewsComponent_Template_button_click_74_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.togglePreview("bannerImage"));
        });
        \u0275\u0275element(75, "i", 20);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(76, StateNewsComponent_div_76_Template, 2, 1, "div", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "div", 10)(78, "label", 11);
        \u0275\u0275text(79, "Published On ");
        \u0275\u0275elementStart(80, "span", 12);
        \u0275\u0275text(81, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(82, "input", 22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(83, "div", 23)(84, "button", 24);
        \u0275\u0275text(85, "Back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "button", 25);
        \u0275\u0275text(87, "Add");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(88, "div", 29)(89, "div", 30)(90, "h5", 31);
        \u0275\u0275text(91, "News");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "div", 32)(93, "button", 33);
        \u0275\u0275listener("click", function StateNewsComponent_Template_button_click_93_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.openAddNewsDrawer());
        });
        \u0275\u0275text(94, "Add News");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(95, "div", 34)(96, "table", 35)(97, "thead")(98, "tr")(99, "th");
        \u0275\u0275text(100, "S.no");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "th");
        \u0275\u0275text(102, "Title");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "th");
        \u0275\u0275text(104, "News Banner");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(105, "th");
        \u0275\u0275text(106, "News Link");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "th");
        \u0275\u0275text(108, "Published On");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(109, "th");
        \u0275\u0275text(110, "Action");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(111, StateNewsComponent_tbody_111_Template, 2, 1, "tbody", 36)(112, StateNewsComponent_ng_template_112_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(114, "div", 37)(115, "nav")(116, "ul", 38)(117, "li", 39)(118, "a", 40);
        \u0275\u0275listener("click", function StateNewsComponent_Template_a_click_118_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.goPrevious());
        });
        \u0275\u0275text(119, "\u2039");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(120, StateNewsComponent_li_120_Template, 3, 3, "li", 41);
        \u0275\u0275elementStart(121, "li", 39)(122, "a", 40);
        \u0275\u0275listener("click", function StateNewsComponent_Template_a_click_122_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.goNext());
        });
        \u0275\u0275text(123, "\u203A");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(124, "div", 42)(125, "select", 43);
        \u0275\u0275listener("change", function StateNewsComponent_Template_select_change_125_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onPageSizeChange($event));
        });
        \u0275\u0275elementStart(126, "option", 44);
        \u0275\u0275text(127, "15 /Page");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(128, "option", 45);
        \u0275\u0275text(129, "30 /Page");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(130, "option", 46);
        \u0275\u0275text(131, "50 /Page");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        const noData_r12 = \u0275\u0275reference(113);
        \u0275\u0275advance(6);
        \u0275\u0275property("formGroup", ctx.editNewsEventForm);
        \u0275\u0275advance(23);
        \u0275\u0275property("disabled", !ctx.selectedImages["editBannerImage"]);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.showPreview["editBannerImage"] ? "fa-eye-slash" : "fa-eye");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showPreview["editBannerImage"] && ctx.selectedImages["editBannerImage"]);
        \u0275\u0275advance(18);
        \u0275\u0275property("formGroup", ctx.addNewsEventForm);
        \u0275\u0275advance(25);
        \u0275\u0275property("disabled", !ctx.selectedImages["bannerImage"]);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.showPreview["bannerImage"] ? "fa-eye-slash" : "fa-eye");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showPreview["bannerImage"] && ctx.selectedImages["bannerImage"]);
        \u0275\u0275advance(35);
        \u0275\u0275property("ngIf", ctx.users && ctx.users.length > 0)("ngIfElse", noData_r12);
        \u0275\u0275advance(6);
        \u0275\u0275classProp("disabled", ctx.currentPage === 1);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(18, _c0).constructor(ctx.totalPages));
        \u0275\u0275advance();
        \u0275\u0275classProp("disabled", ctx.currentPage === ctx.totalPages);
        \u0275\u0275advance(5);
        \u0275\u0275property("selected", ctx.pageSize === 15);
        \u0275\u0275advance(2);
        \u0275\u0275property("selected", ctx.pageSize === 30);
        \u0275\u0275advance(2);
        \u0275\u0275property("selected", ctx.pageSize === 50);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DatePipe, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName], styles: ['\n\n.tableheading[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #211b3a;\n  font-family: Urbanist;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 28px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-family: Urbanist;\n  color: #492fb2;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 16px;\n  letter-spacing: 0.07px;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #333;\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 150%;\n  letter-spacing: 0.25px;\n}\n.custom-table[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n}\n.custom-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #eee;\n  padding: 12px;\n}\n.tableprofile[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  object-fit: cover;\n  object-position: top;\n}\n.badge[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  font-family: "Noto Sans";\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: var(--Line-Heights-10, 20px);\n  letter-spacing: var(--Letter-Spacing-4, 0.25px);\n  padding: 6px 12px;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid #c6c6c6;\n  background: #fff;\n  cursor: pointer;\n  padding: 8px 0px;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .blue[_ngcontent-%COMP%] {\n  color: #3C9718;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .black[_ngcontent-%COMP%] {\n  color: #211b3a;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%] {\n  color: #b7131a;\n}\n.btn-check[_ngcontent-%COMP%]:checked    + .btn[_ngcontent-%COMP%], .btn.active[_ngcontent-%COMP%], .btn.show[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:first-child:active, [_ngcontent-%COMP%]:not(.btn-check)    + .btn[_ngcontent-%COMP%]:active {\n  border-color: transparent;\n}\n.modern-pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%] {\n  margin: 0 3px;\n}\n.modern-pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  border-radius: 8px !important;\n  border: 1px solid #ddd;\n  padding: 6px 12px;\n  color: #444;\n  background-color: #fff;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.modern-pagination[_ngcontent-%COMP%]   .page-link.active[_ngcontent-%COMP%] {\n  background-color: #f5f0ff;\n  border: 1px solid #7c3aed;\n  color: #7c3aed;\n  font-weight: 600;\n}\n.modern-pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:hover {\n  background-color: #f2f2f2;\n  color: #000;\n}\n.modern-pagination[_ngcontent-%COMP%]   .page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n}\n.form-select[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 2.25rem 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--bs-body-color);\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background-color: var(--bs-body-bg);\n  background-image: var(--bs-form-select-bg-img), var(--bs-form-select-bg-icon, none);\n  background-repeat: no-repeat;\n  background-position: right 0.75rem center;\n  background-size: 16px 12px;\n  border: var(--bs-border-width) solid var(--bs-border-color);\n  border-radius: var(--bs-border-radius);\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  cursor: pointer;\n}\n.social-media-links[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n.table-responsive[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n@media (max-width: 1070px) {\n  .table-responsive[_ngcontent-%COMP%] {\n    overflow: scroll !important;\n  }\n}\n/*# sourceMappingURL=state-news.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StateNewsComponent, { className: "StateNewsComponent", filePath: "src/app/state-dashboard/pages/state-news/state-news.component.ts", lineNumber: 16 });
})();
export {
  StateNewsComponent
};
//# sourceMappingURL=chunk-CML4756F.mjs.map
