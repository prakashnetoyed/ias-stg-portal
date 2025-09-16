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
} from "./chunk-HUQG7EPZ.js";
import {
  environment
} from "./chunk-WYW2S4QW.js";
import {
  HttpClient,
  HttpHeaders
} from "./chunk-SF3QATI4.js";
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-DDS5LGCN.js";
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
  ɵɵnamespaceHTML,
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
} from "./chunk-TPVSKZNW.js";
import "./chunk-ASLTLD6L.js";

// src/app/IAS-portal/pages/blogs/blogs.component.ts
var _c0 = ["errorToast"];
var _c1 = () => [];
function BlogsComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 60);
    \u0275\u0275element(2, "div", 61);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Uploaded Image");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "i", 62);
    \u0275\u0275listener("click", function BlogsComponent_div_73_Template_i_click_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openImagePreviewModal());
    });
    \u0275\u0275elementEnd()();
  }
}
function BlogsComponent_table_80_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6, "Admin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "span", 65);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td")(17, "div", 66)(18, "button", 67);
    \u0275\u0275text(19, " \u22EE ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "ul", 68)(21, "li")(22, "a", 69);
    \u0275\u0275listener("click", function BlogsComponent_table_80_tr_18_Template_a_click_22_listener() {
      const user_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openEditDrawer(user_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(23, "svg", 70)(24, "mask", 71);
    \u0275\u0275element(25, "rect", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "g", 73);
    \u0275\u0275element(27, "path", 74);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(28, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(29, "li")(30, "a", 75);
    \u0275\u0275listener("click", function BlogsComponent_table_80_tr_18_Template_a_click_30_listener() {
      const user_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteBlog(user_r5.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(31, "svg", 70)(32, "mask", 76);
    \u0275\u0275element(33, "rect", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "g", 77);
    \u0275\u0275element(35, "path", 78);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(36, " Delete");
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
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 6, user_r5.createdAt, "dd-MM-yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 9, user_r5.updatedAt, "dd-MM-yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", user_r5.isActive ? "Approved" : "Unapproved");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r5.isActive ? "Approved" : "Pending for approval", " ");
  }
}
function BlogsComponent_table_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 63)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "S.no");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Created At");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Last Updated");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "User Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275template(18, BlogsComponent_table_80_tr_18_Template, 37, 12, "tr", 64);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r2.blogs);
  }
}
function BlogsComponent_ng_template_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275element(1, "img", 80);
    \u0275\u0275elementEnd();
  }
}
function BlogsComponent_li_89_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 51)(1, "a", 52);
    \u0275\u0275listener("click", function BlogsComponent_li_89_Template_a_click_1_listener() {
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
var BlogsComponent = class _BlogsComponent {
  constructor(fb, http) {
    this.fb = fb;
    this.http = http;
    this.previewUrl = null;
    this.base64Image = null;
    this.searchText = "";
    this.pageSize = 5;
    this.currentPage = 1;
    this.totalPages = 1;
    this.toastMessage = "";
    this.blogs = [];
    this.selectedEventId = null;
    this.blogForm = this.fb.group({
      title: ["", [Validators.required]],
      description: ["", [Validators.required]],
      image: [null, [Validators.required]]
    });
  }
  ngOnInit() {
    this.loadBlogs();
    this.editEventForm = this.fb.group({
      title: ["", [Validators.required]],
      description: ["", [Validators.required]]
    });
  }
  openEditDrawer(blog) {
    this.selectedEventId = blog.id;
    this.editEventForm.patchValue({
      title: blog.title,
      description: blog.description
    });
    const offcanvasElement = document.getElementById("editEventDrawer");
    if (offcanvasElement) {
      const bsOffcanvas = new bootstrap.Offcanvas(offcanvasElement);
      bsOffcanvas.show();
    }
  }
  // onUpdateEvent(): void {
  //   if (this.editEventForm.invalid || !this.selectedEventId) return;
  //   const token = localStorage.getItem('authToken');
  //   const headers = new HttpHeaders({
  //     Authorization: `Bearer ${token}`
  //   });
  //   this.http.patch(
  //     `${environment.apiUrl}/blogs/${this.selectedEventId}`,
  //     this.editEventForm.value,
  //     { headers }
  //   ).subscribe({
  //     next: (res) => {
  //       console.log('Event updated:', res);
  //       this.showSuccessToast('Blog updated successfully!');
  //       this.loadBlogs(); // 🔹 Refresh list
  //       const offcanvasEl = document.getElementById('editEventDrawer');
  //       if (offcanvasEl) {
  //         const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);
  //         bsOffcanvas.hide();
  //         setTimeout(() => {
  //           document.querySelectorAll('.offcanvas-backdrop')
  //             .forEach(el => el.remove());
  //           document.body.classList.remove('offcanvas-backdrop', 'show'); // just in case
  //         }, 100); // wait for animation
  //       }
  //     },
  //     error: (err) => {
  //       console.error('Failed to update Blog:', err);
  //       this.showErrorToast('Failed to update Blog');
  //     }
  //   });
  // }
  onUpdateEvent() {
    if (this.editEventForm.invalid || !this.selectedEventId)
      return;
    this.http.patch(`${environment.apiUrl}/blogs/${this.selectedEventId}`, this.editEventForm.value).subscribe({
      next: (res) => {
        console.log("Event updated:", res);
        this.showSuccessToast("Blog updated successfully!");
        this.loadBlogs();
        const offcanvasEl = document.getElementById("editEventDrawer");
        if (offcanvasEl) {
          const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);
          bsOffcanvas.hide();
          setTimeout(() => {
            document.querySelectorAll(".offcanvas-backdrop").forEach((el) => el.remove());
            document.body.classList.remove("offcanvas-backdrop", "show");
          }, 100);
        }
      },
      error: (err) => {
        console.error("Failed to update Blog:", err);
        this.showErrorToast("Failed to update Blog");
      }
    });
  }
  loadBlogs() {
    const token = localStorage.getItem("authToken");
    if (!token) {
      this.showErrorToast("Auth token not found");
      return;
    }
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    });
    this.http.get(`${environment.apiUrl}/blogs?page=${this.currentPage}&limit=${this.pageSize}`, { headers }).subscribe({
      next: (res) => {
        this.blogs = res.data.data;
        this.totalPages = res.data.pagination?.total ? Math.ceil(res.data.pagination.total / this.pageSize) : 1;
      },
      error: (err) => {
        console.error(err);
        this.showErrorToast("Failed to load blogs");
      }
    });
  }
  changePage(page) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadBlogs();
    }
  }
  goPrevious() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadBlogs();
    }
  }
  goNext() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadBlogs();
    }
  }
  onPageSizeChange(event) {
    this.pageSize = +event.target.value;
    this.currentPage = 1;
    this.loadBlogs();
  }
  // 🔹 Filter blogs
  get filteredBlogs() {
    const term = this.searchText.toLowerCase();
    let filtered = this.blogs.filter((blog) => blog.title.toLowerCase().includes(term) || blog.description.toLowerCase().includes(term) || blog.createdAt.toLowerCase().includes(term) || blog.updatedAt.toLowerCase().includes(term));
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return filtered.slice(start, end);
  }
  onFileSelected(event) {
    const file = event.target.files?.[0];
    if (!file)
      return;
    if (file.size > 5 * 1024 * 1024) {
      this.showErrorToast("File size exceeds 5MB");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      this.previewUrl = reader.result;
      this.base64Image = reader.result;
      this.blogForm.get("image")?.setValue(this.base64Image);
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
  onSubmit() {
    if (this.blogForm.invalid || !this.base64Image) {
      this.showErrorToast("Please fill all fields and upload an image");
      return;
    }
    const token = localStorage.getItem("authToken");
    if (!token) {
      this.showErrorToast("Auth token not found");
      return;
    }
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    });
    const payload = {
      title: this.blogForm.value.title,
      description: this.blogForm.value.description,
      bannerImage: this.base64Image
    };
    this.http.post(`${environment.apiUrl}/blogs`, payload, { headers }).subscribe({
      next: () => {
        this.showSuccessToast("Blog submitted successfully!");
        this.blogForm.reset();
        this.previewUrl = null;
        this.base64Image = null;
        this.loadBlogs();
      },
      error: (err) => {
        console.error(err);
        this.showErrorToast("Failed to submit blog");
      }
    });
  }
  deleteBlog(blogId) {
    const token = localStorage.getItem("authToken");
    if (!token) {
      this.showErrorToast("Auth token not found");
      return;
    }
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${token}`
    });
    this.http.delete(`${environment.apiUrl}/blogs/${blogId}`, { headers }).subscribe({
      next: () => {
        this.showSuccessToast("Blog deleted successfully!");
        this.loadBlogs();
      },
      error: (err) => {
        console.error("Failed to delete blog:", err);
        this.showErrorToast(err.error?.message || "Failed to delete blog");
      }
    });
  }
  closeOffcanvas(id) {
    const el = document.getElementById(id);
    if (el) {
      const instance = bootstrap.Offcanvas.getInstance(el) || new bootstrap.Offcanvas(el);
      instance.hide();
    }
    document.querySelectorAll(".offcanvas-backdrop").forEach((backdrop) => backdrop.remove());
  }
  showErrorToast(message) {
    this.toastMessage = message;
    if (!this.errorToast) {
      console.warn("errorToast element is not available");
      return;
    }
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
  static {
    this.\u0275fac = function BlogsComponent_Factory(t) {
      return new (t || _BlogsComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogsComponent, selectors: [["app-blogs"]], viewQuery: function BlogsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.errorToast = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 101, vars: 17, consts: [["errorToast", ""], ["noUsers", ""], [1, "toast-container", "position-fixed", "top-0", "end-0", "p-3"], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "align-items-center", "text-bg-danger", "border-0"], [1, "d-flex"], [1, "toast-body"], ["type", "button", "data-bs-dismiss", "toast", "aria-label", "Close", 1, "btn-close", "btn-close-white", "me-2", "m-auto"], ["tabindex", "-1", "id", "editEventDrawer", "aria-labelledby", "editEventDrawerLabel", 1, "offcanvas", "offcanvas-end"], [1, "offcanvas-header"], ["id", "editEventDrawerLabel"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "text-reset", 3, "click"], [1, "offcanvas-body"], [3, "ngSubmit", "formGroup"], [1, "mb-3"], [1, "form-label"], ["type", "text", "formControlName", "title", "placeholder", "Enter event title", 1, "form-control"], ["formControlName", "description", "rows", "3", "placeholder", "Enter description", 1, "form-control"], [1, "d-flex", "justify-content-end", "gap-3", "mt-3"], ["type", "button", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-prime"], ["id", "imagePreviewModal", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header", "border-0"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body", "text-center"], ["alt", "Image Preview", 1, "img-fluid", "rounded", 3, "src"], [1, "mt-4", "tableheading"], [1, "d-flex", "justify-content-between", "align-items-center", "flex-wrap", "mb-3"], [1, "mb-1"], [1, "search-add-div", "d-flex", "align-items-center", "gap-3"], ["data-bs-toggle", "offcanvas", "data-bs-target", "#addNewsDrawer", 1, "btn", "btn-prime", "w-100"], ["tabindex", "-1", "id", "addNewsDrawer", "aria-labelledby", "addNewsDrawerLabel", 1, "offcanvas", "offcanvas-end"], ["id", "addNewsDrawerLabel"], [1, "d-flex", "flex-column", "justify-content-between", "h-100", 3, "ngSubmit", "formGroup"], [1, "inner-fields"], [1, "text-danger"], ["type", "text", "formControlName", "title", "placeholder", "Enter your title here", 1, "form-control"], ["formControlName", "description", "rows", "3", "placeholder", "Enter your description here.", 1, "form-control"], [1, "upload-wrapper"], ["for", "fileUpload", 1, "upload-box"], [1, "upload-content"], [1, "m-0"], [1, "text-muted"], ["type", "file", "id", "fileUpload", "hidden", "", "accept", "image/*", 3, "change"], ["class", "file-box mt-3", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-prime", 3, "disabled"], [1, "table-responsive", "custom-table", "overflow-visible"], ["class", "table align-middle mb-0", 4, "ngIf", "ngIfElse"], [1, "d-flex", "justify-content-end", "align-items-center", "gap-2", "mt-3"], [1, "pagination", "modern-pagination", "mb-0"], [1, "page-item"], [1, "page-link", 3, "click"], ["class", "page-item", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center"], [1, "form-select", "form-select-sm", "w-auto", 3, "change"], ["value", "5", 3, "selected"], ["value", "10", 3, "selected"], ["value", "20", 3, "selected"], [1, "file-box", "mt-3"], [1, "file-info"], [1, "radio-icon"], [1, "fas", "fa-eye", "view-icon", 3, "click"], [1, "table", "align-middle", "mb-0"], [4, "ngFor", "ngForOf"], [1, "badge", 3, "ngClass"], [1, "dropdown"], ["type", "button", "data-bs-toggle", "dropdown", 1, "btn"], [1, "dropdown-menu", "shadow"], ["data-bs-toggle", "offcanvas", "href", "#editEventDrawer", 1, "dropdown-item", "black", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none"], ["id", "mask0_51714_10019", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "20", "height", "20", 2, "mask-type", "alpha"], ["width", "20", "height", "20", "fill", "#D9D9D9"], ["mask", "url(#mask0_51714_10019)"], ["d", "M4.16667 15.8333H5.35417L13.5 7.6875L12.3125 6.5L4.16667 14.6458V15.8333ZM2.5 17.5V13.9583L13.5 2.97917C13.6667 2.82639 13.8507 2.70833 14.0521 2.625C14.2535 2.54167 14.4653 2.5 14.6875 2.5C14.9097 2.5 15.125 2.54167 15.3333 2.625C15.5417 2.70833 15.7222 2.83333 15.875 3L17.0208 4.16667C17.1875 4.31944 17.309 4.5 17.3854 4.70833C17.4618 4.91667 17.5 5.125 17.5 5.33333C17.5 5.55556 17.4618 5.76736 17.3854 5.96875C17.309 6.17014 17.1875 6.35417 17.0208 6.52083L6.04167 17.5H2.5ZM12.8958 7.10417L12.3125 6.5L13.5 7.6875L12.8958 7.10417Z", "fill", "#211B3A"], [1, "dropdown-item", "red", 3, "click"], ["id", "mask0_50905_5148", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "20", "height", "20", 2, "mask-type", "alpha"], ["mask", "url(#mask0_50905_5148)"], ["d", "M14.5002 10.8335L13.3335 9.66683L15.0627 7.91683L13.3335 6.18766L14.5002 5.00016L16.2502 6.75016L17.9793 5.00016L19.1668 6.18766L17.4168 7.91683L19.1668 9.66683L17.9793 10.8335L16.2502 9.10433L14.5002 10.8335ZM7.50016 10.0002C6.5835 10.0002 5.79877 9.67377 5.146 9.021C4.49322 8.36822 4.16683 7.5835 4.16683 6.66683C4.16683 5.75016 4.49322 4.96544 5.146 4.31266C5.79877 3.65989 6.5835 3.3335 7.50016 3.3335C8.41683 3.3335 9.20155 3.65989 9.85433 4.31266C10.5071 4.96544 10.8335 5.75016 10.8335 6.66683C10.8335 7.5835 10.5071 8.36822 9.85433 9.021C9.20155 9.67377 8.41683 10.0002 7.50016 10.0002ZM0.833496 16.6668V14.3335C0.833496 13.8613 0.955024 13.4272 1.19808 13.0314C1.44114 12.6356 1.76405 12.3335 2.16683 12.1252C3.02794 11.6946 3.90294 11.3717 4.79183 11.1564C5.68072 10.9411 6.5835 10.8335 7.50016 10.8335C8.41683 10.8335 9.31961 10.9411 10.2085 11.1564C11.0974 11.3717 11.9724 11.6946 12.8335 12.1252C13.2363 12.3335 13.5592 12.6356 13.8022 13.0314C14.0453 13.4272 14.1668 13.8613 14.1668 14.3335V16.6668H0.833496ZM2.50016 15.0002H12.5002V14.3335C12.5002 14.1807 12.462 14.0418 12.3856 13.9168C12.3092 13.7918 12.2085 13.6946 12.0835 13.6252C11.3335 13.2502 10.5766 12.9689 9.81266 12.7814C9.04877 12.5939 8.27794 12.5002 7.50016 12.5002C6.72239 12.5002 5.95155 12.5939 5.18766 12.7814C4.42377 12.9689 3.66683 13.2502 2.91683 13.6252C2.79183 13.6946 2.69114 13.7918 2.61475 13.9168C2.53836 14.0418 2.50016 14.1807 2.50016 14.3335V15.0002ZM7.50016 8.3335C7.9585 8.3335 8.35086 8.1703 8.67725 7.84391C9.00364 7.51752 9.16683 7.12516 9.16683 6.66683C9.16683 6.2085 9.00364 5.81613 8.67725 5.48975C8.35086 5.16336 7.9585 5.00016 7.50016 5.00016C7.04183 5.00016 6.64947 5.16336 6.32308 5.48975C5.99669 5.81613 5.8335 6.2085 5.8335 6.66683C5.8335 7.12516 5.99669 7.51752 6.32308 7.84391C6.64947 8.1703 7.04183 8.3335 7.50016 8.3335Z", "fill", "#B7131A"], [1, "text-center", "p-4", "d-flex", "align-items-center", "justify-content-center"], ["src", "../../../../assets/icons/empty-state.png", "alt", "empty state"]], template: function BlogsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3, 0)(3, "div", 4)(4, "div", 5);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "button", 6);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 7)(8, "div", 8)(9, "h5", 9);
        \u0275\u0275text(10, "Edit Blog");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "button", 10);
        \u0275\u0275listener("click", function BlogsComponent_Template_button_click_11_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.closeOffcanvas("editEventDrawer"));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 11)(13, "form", 12);
        \u0275\u0275listener("ngSubmit", function BlogsComponent_Template_form_ngSubmit_13_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onUpdateEvent());
        });
        \u0275\u0275elementStart(14, "div", 13)(15, "label", 14);
        \u0275\u0275text(16, "Title");
        \u0275\u0275elementEnd();
        \u0275\u0275element(17, "input", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 13)(19, "label", 14);
        \u0275\u0275text(20, "Description");
        \u0275\u0275elementEnd();
        \u0275\u0275element(21, "textarea", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 17)(23, "button", 18);
        \u0275\u0275listener("click", function BlogsComponent_Template_button_click_23_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.closeOffcanvas("editEventDrawer"));
        });
        \u0275\u0275text(24, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "button", 19);
        \u0275\u0275text(26, "Update");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(27, "div", 20)(28, "div", 21)(29, "div", 22)(30, "div", 23);
        \u0275\u0275element(31, "button", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 25);
        \u0275\u0275element(33, "img", 26);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(34, "div", 27)(35, "div", 28)(36, "h5", 29);
        \u0275\u0275text(37, "Blog");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "div", 30)(39, "button", 31);
        \u0275\u0275text(40, " Post Blog ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(41, "div", 32)(42, "div", 8)(43, "h5", 33);
        \u0275\u0275text(44, "Post a Blog");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "button", 10);
        \u0275\u0275listener("click", function BlogsComponent_Template_button_click_45_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.closeOffcanvas("addNewsDrawer"));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "div", 11)(47, "form", 34);
        \u0275\u0275listener("ngSubmit", function BlogsComponent_Template_form_ngSubmit_47_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSubmit());
        });
        \u0275\u0275elementStart(48, "div", 35)(49, "div", 13)(50, "label", 14);
        \u0275\u0275text(51, "Title ");
        \u0275\u0275elementStart(52, "span", 36);
        \u0275\u0275text(53, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(54, "input", 37);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "div", 13)(56, "label", 14);
        \u0275\u0275text(57, "Description ");
        \u0275\u0275elementStart(58, "span", 36);
        \u0275\u0275text(59, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(60, "textarea", 38);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "div", 39)(62, "label", 14);
        \u0275\u0275text(63, "Upload Image");
        \u0275\u0275elementStart(64, "span", 36);
        \u0275\u0275text(65, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(66, "label", 40)(67, "div", 41)(68, "p", 42);
        \u0275\u0275text(69, "Click to upload");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "small", 43);
        \u0275\u0275text(71, "Max size: 5MB");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(72, "input", 44);
        \u0275\u0275listener("change", function BlogsComponent_Template_input_change_72_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onFileSelected($event));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(73, BlogsComponent_div_73_Template, 6, 0, "div", 45);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(74, "div", 17)(75, "button", 18);
        \u0275\u0275listener("click", function BlogsComponent_Template_button_click_75_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.closeOffcanvas("addNewsDrawer"));
        });
        \u0275\u0275text(76, "Back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "button", 46);
        \u0275\u0275text(78, "Submit");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(79, "div", 47);
        \u0275\u0275template(80, BlogsComponent_table_80_Template, 19, 1, "table", 48);
        \u0275\u0275elementEnd();
        \u0275\u0275template(81, BlogsComponent_ng_template_81_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(83, "div", 49)(84, "nav")(85, "ul", 50)(86, "li", 51)(87, "a", 52);
        \u0275\u0275listener("click", function BlogsComponent_Template_a_click_87_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.goPrevious());
        });
        \u0275\u0275text(88, "\u2039");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(89, BlogsComponent_li_89_Template, 3, 3, "li", 53);
        \u0275\u0275elementStart(90, "li", 51)(91, "a", 52);
        \u0275\u0275listener("click", function BlogsComponent_Template_a_click_91_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.goNext());
        });
        \u0275\u0275text(92, "\u203A");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(93, "div", 54)(94, "select", 55);
        \u0275\u0275listener("change", function BlogsComponent_Template_select_change_94_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onPageSizeChange($event));
        });
        \u0275\u0275elementStart(95, "option", 56);
        \u0275\u0275text(96, "5 /Page");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "option", 57);
        \u0275\u0275text(98, "10 /Page");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "option", 58);
        \u0275\u0275text(100, "20 /Page");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        const noUsers_r9 = \u0275\u0275reference(82);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", ctx.toastMessage, " ");
        \u0275\u0275advance(8);
        \u0275\u0275property("formGroup", ctx.editEventForm);
        \u0275\u0275advance(20);
        \u0275\u0275property("src", ctx.previewUrl, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(14);
        \u0275\u0275property("formGroup", ctx.blogForm);
        \u0275\u0275advance(26);
        \u0275\u0275property("ngIf", ctx.previewUrl);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.blogForm.invalid);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.blogs && ctx.blogs.length)("ngIfElse", noUsers_r9);
        \u0275\u0275advance(6);
        \u0275\u0275classProp("disabled", ctx.currentPage === 1);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(16, _c1).constructor(ctx.totalPages));
        \u0275\u0275advance();
        \u0275\u0275classProp("disabled", ctx.currentPage === ctx.totalPages);
        \u0275\u0275advance(5);
        \u0275\u0275property("selected", ctx.pageSize === 5);
        \u0275\u0275advance(2);
        \u0275\u0275property("selected", ctx.pageSize === 10);
        \u0275\u0275advance(2);
        \u0275\u0275property("selected", ctx.pageSize === 20);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DatePipe, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName], styles: ['\n\n.main-dashboard-component[_ngcontent-%COMP%] {\n  margin-bottom: 60px;\n}\n.main-dashboard-component[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--Text, #211b3a);\n  font-family: Urbanist;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 28px;\n}\n.cards-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n.cards-grid[_ngcontent-%COMP%]   .stats-card[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background: #fff;\n  padding: 16px;\n}\n.cards-grid[_ngcontent-%COMP%]   .stats-card[_ngcontent-%COMP%]   .card-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.cards-grid[_ngcontent-%COMP%]   .stats-card[_ngcontent-%COMP%]   .card-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--Text, #211b3a);\n  font-family: Urbanist;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: 0.15px;\n  margin: 0px;\n}\n.tableheading[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #211b3a;\n  font-family: Urbanist;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 28px;\n}\n.tableheading[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%] {\n  min-width: 300px;\n  border-radius: 8px;\n  padding: 8px 12px;\n  overflow: hidden;\n  color: #868686;\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 20px;\n  letter-spacing: 0.25px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-family: Urbanist;\n  color: #492fb2;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 16px;\n  letter-spacing: 0.07px;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #333;\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 150%;\n  letter-spacing: 0.25px;\n}\n.custom-table[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n}\n.custom-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #eee;\n  padding: 12px;\n}\n.badge[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  font-family: "Noto Sans";\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: var(--Line-Heights-10, 20px);\n  letter-spacing: var(--Letter-Spacing-4, 0.25px);\n  padding: 6px 12px;\n}\n.Approved[_ngcontent-%COMP%] {\n  color: #3C9718;\n  background: #EDF7E6;\n}\n.Unapproved[_ngcontent-%COMP%] {\n  color: #B77224;\n  background: #FEF1E7;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid #c6c6c6;\n  background: #fff;\n  cursor: pointer;\n  padding: 8px 0px;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .blue[_ngcontent-%COMP%] {\n  color: #492fb2;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .black[_ngcontent-%COMP%] {\n  color: #211b3a;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%] {\n  color: #b7131a;\n}\n.btn-check[_ngcontent-%COMP%]:checked    + .btn[_ngcontent-%COMP%], .btn.active[_ngcontent-%COMP%], .btn.show[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:first-child:active, [_ngcontent-%COMP%]:not(.btn-check)    + .btn[_ngcontent-%COMP%]:active {\n  border-color: transparent;\n}\n.offcanvas[_ngcontent-%COMP%] {\n  width: 420px;\n}\n.upload-box[_ngcontent-%COMP%] {\n  border-style: dashed;\n  cursor: pointer;\n  transition: background 0.3s;\n}\n.upload-box[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.form-label[_ngcontent-%COMP%] {\n  color: var(--Text-Dark, #212121);\n  font-family: Urbanist;\n  font-size: var(--Font-Size-2, 14px);\n  font-style: normal;\n  font-weight: 500;\n  line-height: var(--Line-Heights-10, 20px);\n  letter-spacing: var(--Letter-Spacing-2, 0.1px);\n}\n.upload-wrapper[_ngcontent-%COMP%]   .upload-box[_ngcontent-%COMP%] {\n  display: block;\n  border: 2px dashed #AFAFAF;\n  border-radius: 10px;\n  padding: 40px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  background-color: #f8f9fa;\n}\n.upload-wrapper[_ngcontent-%COMP%]   .upload-box[_ngcontent-%COMP%]:hover {\n  background-color: #e9f3ff;\n}\n.upload-wrapper[_ngcontent-%COMP%]   .upload-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: #6c757d;\n  justify-content: space-between;\n}\n.upload-wrapper[_ngcontent-%COMP%]   .preview-box[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.upload-wrapper[_ngcontent-%COMP%]   .preview-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 200px;\n  border-radius: 10px;\n  margin-top: 10px;\n}\n.modern-pagination[_ngcontent-%COMP%]   .page-link.active[_ngcontent-%COMP%] {\n  background-color: #f5f0ff;\n  border: 1px solid #7c3aed;\n  color: #7c3aed;\n  font-weight: 600;\n}\n.modern-pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:hover {\n  background-color: #f2f2f2;\n  color: #000;\n}\n.modern-pagination[_ngcontent-%COMP%]   .page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n}\n.file-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #dbe3ff;\n  padding: 12px 20px;\n  border-radius: 12px;\n  max-width: 400px;\n  font-family: Arial, sans-serif;\n}\n.file-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: #0b1e4a;\n  font-weight: 500;\n}\n.radio-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid #0b1e4a;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.radio-icon[_ngcontent-%COMP%]::before {\n  content: "";\n  width: 8px;\n  height: 8px;\n  background-color: #0b1e4a;\n  border-radius: 50%;\n}\n.view-icon[_ngcontent-%COMP%] {\n  color: #0b1e4a;\n  font-size: 18px;\n  cursor: pointer;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  z-index: 1040 !important;\n}\n.modal[_ngcontent-%COMP%] {\n  z-index: 1055 !important;\n}\n/*# sourceMappingURL=blogs.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogsComponent, { className: "BlogsComponent", filePath: "src/app/IAS-portal/pages/blogs/blogs.component.ts", lineNumber: 25 });
})();
export {
  BlogsComponent
};
//# sourceMappingURL=chunk-P4QDZIJ5.js.map
