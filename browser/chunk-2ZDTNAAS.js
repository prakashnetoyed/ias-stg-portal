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
} from "./chunk-W36CPE6Z.js";
import {
  environment
} from "./chunk-WYW2S4QW.js";
import {
  HttpClient,
  HttpHeaders
} from "./chunk-X4DCRH7W.js";
import {
  CommonModule,
  DatePipe,
  NgForOf,
  NgIf
} from "./chunk-HMLSYQRE.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
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
} from "./chunk-PY442ZFB.js";
import "./chunk-ASLTLD6L.js";

// src/app/IAS-portal/pages/news/news.component.ts
var _c0 = ["errorToast"];
var _c1 = () => [];
function NewsComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 57);
    \u0275\u0275element(2, "div", 58);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Uploaded Image");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "i", 59);
    \u0275\u0275listener("click", function NewsComponent_div_62_Template_i_click_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openImagePreviewModal());
    });
    \u0275\u0275elementEnd()();
  }
}
function NewsComponent_table_69_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "div", 62)(10, "button", 63);
    \u0275\u0275text(11, " \u22EE ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ul", 64)(13, "li")(14, "a", 65);
    \u0275\u0275listener("click", function NewsComponent_table_69_tr_12_Template_a_click_14_listener() {
      const user_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteNews(user_r5.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 66)(16, "mask", 67);
    \u0275\u0275element(17, "rect", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "g", 69);
    \u0275\u0275element(19, "path", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(20, " Delete ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const user_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r2.currentPage - 1) * ctx_r2.pageSize + i_r6 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r5.createdAt ? \u0275\u0275pipeBind2(7, 3, user_r5.createdAt, "dd-MM-yyyy") : "Not found");
  }
}
function NewsComponent_table_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 60)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "S.no");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Created At");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "tbody");
    \u0275\u0275template(12, NewsComponent_table_69_tr_12_Template, 21, 6, "tr", 61);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275property("ngForOf", ctx_r2.users);
  }
}
function NewsComponent_ng_template_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275element(1, "img", 72);
    \u0275\u0275elementEnd();
  }
}
function NewsComponent_li_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 48)(1, "a", 49);
    \u0275\u0275listener("click", function NewsComponent_li_78_Template_a_click_1_listener() {
      const i_r8 = \u0275\u0275restoreView(_r7).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.changePage(i_r8 + 1));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r8 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("active", i_r8 + 1 === ctx_r2.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r8 + 1);
  }
}
var NewsComponent = class _NewsComponent {
  constructor(fb, http) {
    this.fb = fb;
    this.http = http;
    this.users = [];
    this.searchText = "";
    this.pageSize = 5;
    this.currentPage = 1;
    this.previewUrl = null;
    this.toastMessage = "";
    this.base64Image = null;
    this.pagination = {
      total: 0,
      page: 1,
      limit: this.pageSize
    };
    this.newsForm = this.fb.group({
      title: ["", [Validators.required]],
      // required
      newsLink: ["", [Validators.required]],
      // required
      description: ["", [Validators.required]],
      bannerImage: [null, [Validators.required]]
      // 👈 make image required
      // required
    });
  }
  ngOnInit() {
    this.fetchNews();
  }
  // ✅ Fetch news with pagination
  fetchNews(page = 1, limit = this.pageSize) {
    this.http.get(`${environment.apiUrl}/news?page=${page}&limit=${limit}`).subscribe({
      next: (res) => {
        if (res.success && res.data?.data) {
          this.users = res.data.data;
          this.pagination = res.data.pagination;
          this.currentPage = page;
        }
      },
      error: (err) => {
        console.error("Error fetching news:", err);
        this.showErrorToast("Failed to fetch news");
      }
    });
  }
  // ✅ Pagination controls
  get totalPages() {
    return Math.ceil(this.pagination.total / this.pagination.limit);
  }
  changePage(page) {
    if (page >= 1 && page <= this.totalPages) {
      this.fetchNews(page, this.pageSize);
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
    this.fetchNews(this.currentPage, this.pageSize);
  }
  // ✅ Toast methods
  showErrorToast(message) {
    this.toastMessage = message;
    const toastElement = this.errorToast.nativeElement;
    toastElement.classList.remove("bg-success");
    toastElement.classList.add("bg-danger");
    const toast = new bootstrap.Toast(toastElement);
    toast.show();
  }
  showSuccessToast(message) {
    this.toastMessage = message;
    const toastElement = this.errorToast.nativeElement;
    toastElement.classList.remove("bg-danger");
    toastElement.classList.add("bg-success");
    const toast = new bootstrap.Toast(toastElement);
    toast.show();
  }
  // ✅ Submit news
  onSubmit() {
    if (this.newsForm.invalid)
      return;
    const formValue = this.newsForm.value;
    const token = localStorage.getItem("authToken");
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    });
    const payload = {
      title: formValue.title,
      newsLink: formValue.newsLink,
      description: formValue.description,
      bannerImage: formValue.bannerImage
    };
    this.http.post(`${environment.apiUrl}/news`, payload, { headers }).subscribe({
      next: (res) => {
        this.showSuccessToast("News submitted successfully!");
        this.newsForm.reset();
        this.previewUrl = null;
        this.base64Image = null;
        this.fetchNews(this.currentPage, this.pageSize);
      },
      error: (err) => {
        this.showErrorToast("Failed to submit news. Please try again.");
        this.showErrorToast(err.error.errors);
      }
    });
  }
  // ✅ File preview + Base64 conversion
  onFileSelected(event) {
    const file = event.target.files?.[0];
    if (!file)
      return;
    if (file.size > 5 * 1024 * 1024) {
      this.showErrorToast("File size exceeds 5MB. Please upload a smaller file.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      this.previewUrl = reader.result;
      this.base64Image = reader.result;
      this.newsForm.patchValue({ bannerImage: this.base64Image });
      this.newsForm.get("bannerImage")?.updateValueAndValidity();
    };
    reader.readAsDataURL(file);
  }
  openImagePreviewModal() {
    const modalElement = document.getElementById("imagePreviewModal");
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
  // ✅ Delete news
  deleteNews(id) {
    if (!confirm("Are you sure you want to delete this news item?"))
      return;
    const token = localStorage.getItem("authToken");
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${token}`
    });
    this.http.delete(`${environment.apiUrl}/news/${id}`, { headers }).subscribe({
      next: () => {
        this.showSuccessToast("News deleted successfully!");
        this.users = this.users.filter((user) => user.id !== id);
      },
      error: (err) => {
        console.error("Delete failed:", err);
        this.showErrorToast("Failed to delete news. Please try again.");
      }
    });
  }
  static {
    this.\u0275fac = function NewsComponent_Factory(t) {
      return new (t || _NewsComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewsComponent, selectors: [["app-news"]], viewQuery: function NewsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.errorToast = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 90, vars: 16, consts: [["errorToast", ""], ["noUsers", ""], [1, "toast-container", "position-fixed", "top-0", "end-0", "p-3"], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "align-items-center", "text-bg-danger", "border-0"], [1, "d-flex"], [1, "toast-body"], ["type", "button", "data-bs-dismiss", "toast", "aria-label", "Close", 1, "btn-close", "btn-close-white", "me-2", "m-auto"], ["id", "imagePreviewModal", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header", "border-0"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body", "text-center"], ["alt", "Image Preview", 1, "img-fluid", "rounded", 3, "src"], [1, "mt-4", "tableheading"], [1, "d-flex", "justify-content-between", "align-items-center", "flex-wrap", "mb-3"], [1, "mb-1"], [1, "search-add-div", "d-flex", "align-items-center", "gap-3"], ["data-bs-toggle", "offcanvas", "data-bs-target", "#addNewsDrawer", 1, "btn", "btn-prime", "w-100"], ["tabindex", "-1", "id", "addNewsDrawer", "aria-labelledby", "addNewsDrawerLabel", 1, "offcanvas", "offcanvas-end"], [1, "offcanvas-header"], ["id", "addNewsDrawerLabel"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "text-reset"], [1, "offcanvas-body"], [1, "d-flex", "flex-column", "justify-content-between", "h-100", 3, "ngSubmit", "formGroup"], [1, "inner-fields"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", "placeholder", "Enter your title here", "formControlName", "title", 1, "form-control"], ["type", "text", "placeholder", "Type or paste link", "formControlName", "newsLink", 1, "form-control"], ["rows", "3", "placeholder", "Enter your description here", "formControlName", "description", 1, "form-control"], [1, "upload-wrapper"], ["for", "fileUpload", 1, "upload-box"], [1, "upload-content"], [1, "infs"], [1, "m-0"], [1, "click-here"], [1, "text-muted"], ["type", "file", "id", "fileUpload", "hidden", "", "accept", "image/jpeg, image/png", 3, "change"], ["class", "file-box mt-3", 4, "ngIf"], [1, "d-flex", "justify-content-end", "gap-3", "mt-3"], ["type", "button", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-secondary"], ["type", "submit", 1, "btn", "btn-prime", 3, "disabled"], [1, "table-responsive", "custom-table", "overflow-visible"], ["class", "table align-middle mb-0", 4, "ngIf", "ngIfElse"], [1, "d-flex", "justify-content-end", "align-items-center", "gap-2", "mt-3"], [1, "pagination", "modern-pagination", "mb-0"], [1, "page-item"], [1, "page-link", 3, "click"], ["class", "page-item", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center"], [1, "form-select", "form-select-sm", "w-auto", 3, "change"], ["value", "5", 3, "selected"], ["value", "10", 3, "selected"], ["value", "20", 3, "selected"], [1, "file-box", "mt-3"], [1, "file-info"], [1, "radio-icon"], [1, "fas", "fa-eye", "view-icon", 3, "click"], [1, "table", "align-middle", "mb-0"], [4, "ngFor", "ngForOf"], [1, "dropdown"], ["type", "button", "data-bs-toggle", "dropdown", 1, "btn"], [1, "dropdown-menu", "shadow"], [1, "dropdown-item", "red", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none"], ["id", "mask0_50905_5148", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "20", "height", "20", 2, "mask-type", "alpha"], ["width", "20", "height", "20", "fill", "#D9D9D9"], ["mask", "url(#mask0_50905_5148)"], ["d", "M14.5002 10.8335L13.3335 9.66683L15.0627 7.91683L13.3335 6.18766L14.5002 5.00016L16.2502 6.75016L17.9793 5.00016L19.1668 6.18766L17.4168 7.91683L19.1668 9.66683L17.9793 10.8335L16.2502 9.10433L14.5002 10.8335ZM7.50016 10.0002C6.5835 10.0002 5.79877 9.67377 5.146 9.021C4.49322 8.36822 4.16683 7.5835 4.16683 6.66683C4.16683 5.75016 4.49322 4.96544 5.146 4.31266C5.79877 3.65989 6.5835 3.3335 7.50016 3.3335C8.41683 3.3335 9.20155 3.65989 9.85433 4.31266C10.5071 4.96544 10.8335 5.75016 10.8335 6.66683C10.8335 7.5835 10.5071 8.36822 9.85433 9.021C9.20155 9.67377 8.41683 10.0002 7.50016 10.0002ZM0.833496 16.6668V14.3335C0.833496 13.8613 0.955024 13.4272 1.19808 13.0314C1.44114 12.6356 1.76405 12.3335 2.16683 12.1252C3.02794 11.6946 3.90294 11.3717 4.79183 11.1564C5.68072 10.9411 6.5835 10.8335 7.50016 10.8335C8.41683 10.8335 9.31961 10.9411 10.2085 11.1564C11.0974 11.3717 11.9724 11.6946 12.8335 12.1252C13.2363 12.3335 13.5592 12.6356 13.8022 13.0314C14.0453 13.4272 14.1668 13.8613 14.1668 14.3335V16.6668H0.833496ZM2.50016 15.0002H12.5002V14.3335C12.5002 14.1807 12.462 14.0418 12.3856 13.9168C12.3092 13.7918 12.2085 13.6946 12.0835 13.6252C11.3335 13.2502 10.5766 12.9689 9.81266 12.7814C9.04877 12.5939 8.27794 12.5002 7.50016 12.5002C6.72239 12.5002 5.95155 12.5939 5.18766 12.7814C4.42377 12.9689 3.66683 13.2502 2.91683 13.6252C2.79183 13.6946 2.69114 13.7918 2.61475 13.9168C2.53836 14.0418 2.50016 14.1807 2.50016 14.3335V15.0002ZM7.50016 8.3335C7.9585 8.3335 8.35086 8.1703 8.67725 7.84391C9.00364 7.51752 9.16683 7.12516 9.16683 6.66683C9.16683 6.2085 9.00364 5.81613 8.67725 5.48975C8.35086 5.16336 7.9585 5.00016 7.50016 5.00016C7.04183 5.00016 6.64947 5.16336 6.32308 5.48975C5.99669 5.81613 5.8335 6.2085 5.8335 6.66683C5.8335 7.12516 5.99669 7.51752 6.32308 7.84391C6.64947 8.1703 7.04183 8.3335 7.50016 8.3335Z", "fill", "#B7131A"], [1, "text-center", "p-4", "d-flex", "align-items-center", "justify-content-center"], ["src", "../../../../assets/icons/empty-state.png", "alt", "empty state"]], template: function NewsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3, 0)(3, "div", 4)(4, "div", 5);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "button", 6);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10);
        \u0275\u0275element(11, "button", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 12);
        \u0275\u0275element(13, "img", 13);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(14, "div", 14)(15, "div", 15)(16, "h5", 16);
        \u0275\u0275text(17, "News");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 17)(19, "button", 18);
        \u0275\u0275text(20, " Add News ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "div", 19)(22, "div", 20)(23, "h5", 21);
        \u0275\u0275text(24, "Add News");
        \u0275\u0275elementEnd();
        \u0275\u0275element(25, "button", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 23)(27, "form", 24);
        \u0275\u0275listener("ngSubmit", function NewsComponent_Template_form_ngSubmit_27_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSubmit());
        });
        \u0275\u0275elementStart(28, "div", 25)(29, "div", 26)(30, "label", 27);
        \u0275\u0275text(31, "Title ");
        \u0275\u0275elementStart(32, "span", 28);
        \u0275\u0275text(33, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(34, "input", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 26)(36, "label", 27);
        \u0275\u0275text(37, "News Link ");
        \u0275\u0275elementStart(38, "span", 28);
        \u0275\u0275text(39, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(40, "input", 30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div", 26)(42, "label", 27);
        \u0275\u0275text(43, "Description ");
        \u0275\u0275elementStart(44, "span", 28);
        \u0275\u0275text(45, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(46, "textarea", 31);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "div", 32)(48, "label", 27);
        \u0275\u0275text(49, "Upload Image");
        \u0275\u0275elementStart(50, "span", 28);
        \u0275\u0275text(51, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "label", 33)(53, "div", 34)(54, "div", 35)(55, "p", 36)(56, "span", 37);
        \u0275\u0275text(57, "Click here");
        \u0275\u0275elementEnd();
        \u0275\u0275text(58, " to upload your file");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "small", 38);
        \u0275\u0275text(60, "Supported format (.jpg, .png., jpeg), maximum file size : 5 MB");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(61, "input", 39);
        \u0275\u0275listener("change", function NewsComponent_Template_input_change_61_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onFileSelected($event));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(62, NewsComponent_div_62_Template, 6, 0, "div", 40);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(63, "div", 41)(64, "button", 42);
        \u0275\u0275text(65, "Back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "button", 43);
        \u0275\u0275text(67, "Submit");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(68, "div", 44);
        \u0275\u0275template(69, NewsComponent_table_69_Template, 13, 1, "table", 45);
        \u0275\u0275elementEnd();
        \u0275\u0275template(70, NewsComponent_ng_template_70_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(72, "div", 46)(73, "nav")(74, "ul", 47)(75, "li", 48)(76, "a", 49);
        \u0275\u0275listener("click", function NewsComponent_Template_a_click_76_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.goPrevious());
        });
        \u0275\u0275text(77, "\u2039");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(78, NewsComponent_li_78_Template, 3, 3, "li", 50);
        \u0275\u0275elementStart(79, "li", 48)(80, "a", 49);
        \u0275\u0275listener("click", function NewsComponent_Template_a_click_80_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.goNext());
        });
        \u0275\u0275text(81, "\u203A");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(82, "div", 51)(83, "select", 52);
        \u0275\u0275listener("change", function NewsComponent_Template_select_change_83_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onPageSizeChange($event));
        });
        \u0275\u0275elementStart(84, "option", 53);
        \u0275\u0275text(85, "5 /Page");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "option", 54);
        \u0275\u0275text(87, "10 /Page");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "option", 55);
        \u0275\u0275text(89, "20 /Page");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        const noUsers_r9 = \u0275\u0275reference(71);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", ctx.toastMessage, " ");
        \u0275\u0275advance(8);
        \u0275\u0275property("src", ctx.previewUrl, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(14);
        \u0275\u0275property("formGroup", ctx.newsForm);
        \u0275\u0275advance(35);
        \u0275\u0275property("ngIf", ctx.previewUrl);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.newsForm.invalid);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.users && ctx.users.length)("ngIfElse", noUsers_r9);
        \u0275\u0275advance(6);
        \u0275\u0275classProp("disabled", ctx.currentPage === 1);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(15, _c1).constructor(ctx.totalPages));
        \u0275\u0275advance();
        \u0275\u0275classProp("disabled", ctx.currentPage === ctx.totalPages);
        \u0275\u0275advance(5);
        \u0275\u0275property("selected", ctx.pageSize === 5);
        \u0275\u0275advance(2);
        \u0275\u0275property("selected", ctx.pageSize === 10);
        \u0275\u0275advance(2);
        \u0275\u0275property("selected", ctx.pageSize === 20);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName], styles: ['\n\n.main-dashboard-component[_ngcontent-%COMP%] {\n  margin-bottom: 60px;\n}\n.main-dashboard-component[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--Text, #211b3a);\n  font-family: Urbanist;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 28px;\n}\n.cards-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n.cards-grid[_ngcontent-%COMP%]   .stats-card[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background: #fff;\n  padding: 16px;\n}\n.cards-grid[_ngcontent-%COMP%]   .stats-card[_ngcontent-%COMP%]   .card-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.cards-grid[_ngcontent-%COMP%]   .stats-card[_ngcontent-%COMP%]   .card-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--Text, #211b3a);\n  font-family: Urbanist;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: 0.15px;\n  margin: 0px;\n}\n.tableheading[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #211b3a;\n  font-family: Urbanist;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 28px;\n}\n.tableheading[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%] {\n  min-width: 300px;\n  border-radius: 8px;\n  padding: 8px 12px;\n  overflow: hidden;\n  color: #868686;\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 20px;\n  letter-spacing: 0.25px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-family: Urbanist;\n  color: #492fb2;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 16px;\n  letter-spacing: 0.07px;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #333;\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 150%;\n  letter-spacing: 0.25px;\n}\n.custom-table[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n}\n.custom-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #eee;\n  padding: 12px;\n}\n.badge[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  font-family: "Noto Sans";\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: var(--Line-Heights-10, 20px);\n  letter-spacing: var(--Letter-Spacing-4, 0.25px);\n  padding: 6px 12px;\n}\n.Approved[_ngcontent-%COMP%] {\n  color: #3C9718;\n  background: #EDF7E6;\n}\n.Unapproved[_ngcontent-%COMP%] {\n  color: #B77224;\n  background: #FEF1E7;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid #c6c6c6;\n  background: #fff;\n  cursor: pointer;\n  padding: 8px 0px;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .blue[_ngcontent-%COMP%] {\n  color: #492fb2;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .black[_ngcontent-%COMP%] {\n  color: #211b3a;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%] {\n  color: #b7131a;\n}\n.btn-check[_ngcontent-%COMP%]:checked    + .btn[_ngcontent-%COMP%], .btn.active[_ngcontent-%COMP%], .btn.show[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:first-child:active, [_ngcontent-%COMP%]:not(.btn-check)    + .btn[_ngcontent-%COMP%]:active {\n  border-color: transparent;\n}\n.offcanvas[_ngcontent-%COMP%] {\n  width: 520px;\n}\n.click-here[_ngcontent-%COMP%] {\n  color: var(--gov-in-purple, #290874);\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px;\n}\n.upload-box[_ngcontent-%COMP%] {\n  border-style: dashed;\n  cursor: pointer;\n  transition: background 0.3s;\n}\n.upload-box[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.form-label[_ngcontent-%COMP%] {\n  color: var(--Text-Dark, #212121);\n  font-family: Urbanist;\n  font-size: var(--Font-Size-2, 14px);\n  font-style: normal;\n  font-weight: 500;\n  line-height: var(--Line-Heights-10, 20px);\n  letter-spacing: var(--Letter-Spacing-2, 0.1px);\n}\n.upload-wrapper[_ngcontent-%COMP%]   .upload-box[_ngcontent-%COMP%] {\n  display: block;\n  border: 2px dashed #AFAFAF;\n  border-radius: 10px;\n  padding: 40px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  background-color: #f8f9fa;\n}\n.upload-wrapper[_ngcontent-%COMP%]   .upload-box[_ngcontent-%COMP%]:hover {\n  background-color: #e9f3ff;\n}\n.upload-wrapper[_ngcontent-%COMP%]   .upload-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: #6c757d;\n  justify-content: space-between;\n}\n.upload-wrapper[_ngcontent-%COMP%]   .preview-box[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.upload-wrapper[_ngcontent-%COMP%]   .preview-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 200px;\n  border-radius: 10px;\n  margin-top: 10px;\n}\n.modern-pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%] {\n  margin: 0 3px;\n}\n.modern-pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  border-radius: 8px !important;\n  border: 1px solid #ddd;\n  padding: 6px 12px;\n  color: #444;\n  background-color: #fff;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.modern-pagination[_ngcontent-%COMP%]   .page-link.active[_ngcontent-%COMP%] {\n  background-color: #f5f0ff;\n  border: 1px solid #7c3aed;\n  color: #7c3aed;\n  font-weight: 600;\n}\n.modern-pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:hover {\n  background-color: #f2f2f2;\n  color: #000;\n}\n.modern-pagination[_ngcontent-%COMP%]   .page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n}\n.file-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #dbe3ff;\n  padding: 12px 20px;\n  border-radius: 12px;\n  max-width: 100%;\n  font-family: Arial, sans-serif;\n}\n.file-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: #0b1e4a;\n  font-weight: 500;\n}\n.radio-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid #0b1e4a;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.radio-icon[_ngcontent-%COMP%]::before {\n  content: "";\n  width: 8px;\n  height: 8px;\n  background-color: #0b1e4a;\n  border-radius: 50%;\n}\n.view-icon[_ngcontent-%COMP%] {\n  color: #0b1e4a;\n  font-size: 18px;\n  cursor: pointer;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  z-index: 1040 !important;\n}\n.modal[_ngcontent-%COMP%] {\n  z-index: 1055 !important;\n}\n/*# sourceMappingURL=news.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewsComponent, { className: "NewsComponent", filePath: "src/app/IAS-portal/pages/news/news.component.ts", lineNumber: 15 });
})();
export {
  NewsComponent
};
//# sourceMappingURL=chunk-2ZDTNAAS.js.map
