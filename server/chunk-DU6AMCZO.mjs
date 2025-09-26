import './polyfills.server.mjs';
import {
  DomSanitizer
} from "./chunk-2JDN2HEQ.mjs";
import {
  CheckboxControlValueAccessor,
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
} from "./chunk-VTTRVRAU.mjs";
import {
  environment
} from "./chunk-SJMEGSB4.mjs";
import {
  HttpClient,
  HttpHeaders
} from "./chunk-324F4CRK.mjs";
import {
  CommonModule,
  DatePipe,
  NgForOf,
  NgIf
} from "./chunk-6GREAR27.mjs";
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
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-KVDSLLK3.mjs";
import "./chunk-24VIC3GD.mjs";

// src/app/IAS-portal/pages/mo-m/mo-m.component.ts
var _c0 = ["errorToast"];
var _c1 = ["fileUploadInput"];
var _c2 = () => [];
function MoMComponent_img_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 80);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.previewUrl, \u0275\u0275sanitizeUrl);
  }
}
function MoMComponent_iframe_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "iframe", 81);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.previewUrl, \u0275\u0275sanitizeResourceUrl);
  }
}
function MoMComponent_span_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function MoMComponent_div_86_i_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "i", 88);
    \u0275\u0275listener("click", function MoMComponent_div_86_i_6_Template_i_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openImagePreviewModal());
    });
    \u0275\u0275elementEnd();
  }
}
function MoMComponent_div_86_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 82)(1, "div", 83);
    \u0275\u0275element(2, "div", 84);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 85);
    \u0275\u0275template(6, MoMComponent_div_86_i_6_Template, 1, 0, "i", 86);
    \u0275\u0275elementStart(7, "i", 87);
    \u0275\u0275listener("click", function MoMComponent_div_86_Template_i_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteFile());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.uploadedFileName || "Uploaded File");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isImageFile || ctx_r1.isPdfFile);
  }
}
function MoMComponent_table_106_tr_16_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 101);
    \u0275\u0275listener("click", function MoMComponent_table_106_tr_16_ng_container_11_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const user_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openMediaFile(user_r7.mediaFile, user_r7.title || "file"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 102);
    \u0275\u0275element(3, "path", 103);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function MoMComponent_table_106_tr_16_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "No link");
  }
}
function MoMComponent_table_106_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
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
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275template(11, MoMComponent_table_106_tr_16_ng_container_11_Template, 4, 0, "ng-container", 91)(12, MoMComponent_table_106_tr_16_ng_template_12_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "div", 92)(16, "button", 93);
    \u0275\u0275text(17, " \u22EE ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "ul", 94)(19, "li")(20, "a", 95);
    \u0275\u0275listener("click", function MoMComponent_table_106_tr_16_Template_a_click_20_listener() {
      const user_r7 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDeleteBlog(user_r7.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 96)(22, "mask", 97);
    \u0275\u0275element(23, "rect", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "g", 99);
    \u0275\u0275element(25, "path", 100);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(26, " Delete");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const user_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const noLink_r9 = \u0275\u0275reference(13);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r1.currentPage - 1) * ctx_r1.pageSize + i_r8 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r7.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 6, user_r7.date, "dd-MM-yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r7.time);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", user_r7.mediaFile)("ngIfElse", noLink_r9);
  }
}
function MoMComponent_table_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 89)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "S.no");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "MOM Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275template(16, MoMComponent_table_106_tr_16_Template, 27, 9, "tr", 90);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r1.blogs);
  }
}
function MoMComponent_ng_template_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104);
    \u0275\u0275element(1, "img", 105);
    \u0275\u0275elementEnd();
  }
}
function MoMComponent_li_115_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 72)(1, "a", 73);
    \u0275\u0275listener("click", function MoMComponent_li_115_Template_a_click_1_listener() {
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
var MoMComponent = class _MoMComponent {
  constructor(fb, http, sanitizer) {
    this.fb = fb;
    this.http = http;
    this.sanitizer = sanitizer;
    this.previewUrl = null;
    this.searchText = "";
    this.pageSize = 5;
    this.currentPage = 1;
    this.totalPages = 1;
    this.toastMessage = "";
    this.blogs = [];
    this.selectedEventId = null;
    this.today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    this.base64Image = null;
    this.uploadedFileName = null;
    this.isImageFile = false;
    this.isPdfFile = false;
    this.fileRequired = false;
    this.blogForm = this.fb.group({
      title: ["", Validators.required],
      date: ["", Validators.required],
      time: ["", Validators.required],
      announcements: [""],
      notifyAll: [false],
      shareWithExecutive: [false],
      bannerImage: [null]
      // file input
    });
    this.fileRequired = false;
  }
  ngOnInit() {
    this.loadBlogs();
    this.editEventForm = this.fb.group({
      title: ["", [Validators.required]]
      // description: ['', [Validators.required]]
    });
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.previewUrl);
  }
  openEditDrawer(blog) {
    this.selectedEventId = blog.id;
    this.editEventForm.patchValue({
      title: blog.title
      // description: blog.description
    });
    const offcanvasElement = document.getElementById("editEventDrawer");
    if (offcanvasElement) {
      const bsOffcanvas = new bootstrap.Offcanvas(offcanvasElement);
      bsOffcanvas.show();
    }
  }
  onHeadingOptionChange(option) {
    const fileControl = this.blogForm.get("bannerImage");
    if (option === "image") {
      this.fileRequired = true;
      fileControl?.setValidators([Validators.required]);
    } else {
      this.fileRequired = false;
      fileControl?.clearValidators();
    }
    fileControl?.updateValueAndValidity();
  }
  onUpdateEvent() {
    if (this.editEventForm.invalid || !this.selectedEventId)
      return;
    const token = localStorage.getItem("authToken");
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    this.http.patch(`${environment.apiUrl}/mom/${this.selectedEventId}`, this.editEventForm.value, { headers }).subscribe({
      next: (res) => {
        console.log("MoM updated:", res);
        this.showToast("MoM updated successfully!", "success");
        this.loadBlogs();
        const offcanvasEl = document.getElementById("editEventDrawer");
        if (offcanvasEl) {
          const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);
          bsOffcanvas.hide();
        }
      },
      error: (err) => {
        console.error("Failed to update MoM:", err);
        this.showToast("Failed to update MoM", "danger");
      }
    });
  }
  loadBlogs() {
    const token = localStorage.getItem("authToken");
    if (!token) {
      this.showToast("Auth token not found", "danger");
      return;
    }
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    });
    this.http.get(`${environment.apiUrl}/mom?page=${this.currentPage}&limit=${this.pageSize}&isActive=true`, { headers }).subscribe({
      next: (res) => {
        this.blogs = res.data.data;
        this.totalPages = res.data.pagination?.total ? Math.ceil(res.data.pagination.total / this.pageSize) : 1;
      },
      error: (err) => {
        console.error(err);
        this.showToast("Failed to load MoM details", "danger");
      }
    });
  }
  onFileSelected(event) {
    const file = event.target.files?.[0];
    if (!file)
      return;
    if (file.size > 5 * 1024 * 1024) {
      this.showToast("File size exceeds 5MB. Please upload a smaller file.", "danger");
      return;
    }
    this.uploadedFileName = file.name;
    this.isImageFile = file.type.startsWith("image/");
    this.isPdfFile = file.type.includes("pdf");
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result;
      this.blogForm.patchValue({ bannerImage: base64String });
      this.previewUrl = this.sanitizer.bypassSecurityTrustResourceUrl(base64String);
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
  deleteFile() {
    this.previewUrl = null;
    this.base64Image = null;
    this.uploadedFileName = null;
    this.isImageFile = false;
    this.isPdfFile = false;
    this.blogForm.patchValue({ bannerImage: null });
    this.blogForm.get("bannerImage")?.updateValueAndValidity();
    if (this.fileUploadInput?.nativeElement) {
      this.fileUploadInput.nativeElement.value = "";
    }
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
  get filteredBlogs() {
    const term = this.searchText.toLowerCase();
    return this.blogs.filter((blog) => blog.title.toLowerCase().includes(term) || blog.createdAt.toLowerCase().includes(term) || blog.updatedAt.toLowerCase().includes(term));
  }
  onSubmit() {
    if (this.blogForm.invalid) {
      this.showToast("Please fill all required fields", "danger");
      return;
    }
    const token = localStorage.getItem("authToken");
    if (!token) {
      this.showToast("Auth token not found", "danger");
      return;
    }
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    });
    const payload = {
      title: this.blogForm.value.title,
      date: this.blogForm.value.date,
      time: this.blogForm.value.time,
      announcement: this.blogForm.value.announcements?.trim() ? this.blogForm.value.announcements : null,
      shareWithAll: this.blogForm.value.notifyAll ? true : false,
      shareWithExecutive: this.blogForm.value.shareWithExecutive ? true : false,
      mediaFile: this.blogForm.value.bannerImage
    };
    this.http.post(`${environment.apiUrl}/mom`, payload, { headers }).subscribe({
      next: () => {
        this.showToast("MoM submitted successfully!", "success");
        this.blogForm.reset();
        this.blogForm.get("bannerImage")?.setValue(null);
        this.previewUrl = null;
        this.uploadedFileName = null;
        this.isImageFile = false;
        this.isPdfFile = false;
        if (this.fileUploadInput?.nativeElement) {
          this.fileUploadInput.nativeElement.value = "";
        }
        this.loadBlogs();
      },
      error: (err) => {
        if (err.error && err.error.errors && Array.isArray(err.error.errors)) {
          err.error.errors.forEach((e) => {
            this.showToast(e.message, "danger");
          });
        } else if (err.error && err.error.message) {
          this.showToast(err.error.message, "danger");
        } else {
          this.showToast("Failed to submit MoM", "danger");
        }
      }
    });
  }
  openMediaFile(base64Data, fileName = "file") {
    if (!base64Data)
      return;
    const isImage = base64Data.startsWith("data:image");
    const isPdf = base64Data.startsWith("data:application/pdf") || base64Data.includes("pdf");
    if (isImage) {
      const newTab = window.open();
      if (newTab) {
        newTab.document.write(`<title>${fileName}</title>`);
        newTab.document.write(`<img src="${base64Data}" style="max-width:100%; height:auto;" />`);
        newTab.document.close();
      }
    } else if (isPdf) {
      const byteString = atob(base64Data.split(",")[1]);
      const arrayBuffer = new ArrayBuffer(byteString.length);
      const intArray = new Uint8Array(arrayBuffer);
      for (let i = 0; i < byteString.length; i++) {
        intArray[i] = byteString.charCodeAt(i);
      }
      const blob = new Blob([intArray], { type: "application/pdf" });
      const blobUrl = URL.createObjectURL(blob);
      const newTab = window.open(blobUrl, "_blank");
      if (newTab) {
        newTab.document.title = fileName;
      }
    } else {
      console.warn("Unsupported file type");
    }
  }
  closeOffcanvas(id) {
    const el = document.getElementById(id);
    if (el) {
      const instance = bootstrap.Offcanvas.getInstance(el) || new bootstrap.Offcanvas(el);
      instance.hide();
    }
  }
  onDeleteBlog(userId) {
    const token = localStorage.getItem("authToken");
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    const payload = { isActive: false };
    this.http.delete(`${environment.apiUrl}/mom/${userId}`).subscribe({
      next: () => {
        this.showToast("MoM deleted successfully!", "success");
        this.loadBlogs();
      },
      error: (err) => {
        console.error("Failed to delete MoM", err);
        this.showToast("Failed to delete MoM", "danger");
      }
    });
  }
  showToast(message, type) {
    this.toastMessage = message;
    const toastElement = this.errorToast.nativeElement;
    toastElement.classList.remove("bg-success", "bg-danger");
    toastElement.classList.add(type === "success" ? "bg-success" : "bg-danger");
    new bootstrap.Toast(toastElement).show();
  }
  static {
    this.\u0275fac = function MoMComponent_Factory(t) {
      return new (t || _MoMComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(DomSanitizer));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MoMComponent, selectors: [["app-mo-m"]], viewQuery: function MoMComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.errorToast = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileUploadInput = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 127, vars: 21, consts: [["errorToast", ""], ["fileUploadInput", ""], ["noUsers", ""], ["noLink", ""], [1, "toast-container", "position-fixed", "top-0", "end-0", "p-3"], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "align-items-center", "text-bg-danger", "border-0"], [1, "d-flex"], [1, "toast-body"], ["type", "button", "data-bs-dismiss", "toast", "aria-label", "Close", 1, "btn-close", "btn-close-white", "me-2", "m-auto"], ["id", "imagePreviewModal", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header", "border-0"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body", "text-center"], ["class", "img-fluid rounded", "alt", "Image Preview", 3, "src", 4, "ngIf"], ["width", "100%", "height", "500px", 3, "src", 4, "ngIf"], ["tabindex", "-1", "id", "editEventDrawer", "aria-labelledby", "editEventDrawerLabel", 1, "offcanvas", "offcanvas-end"], [1, "offcanvas-header"], ["id", "editEventDrawerLabel"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "text-reset", 3, "click"], [1, "offcanvas-body"], [3, "ngSubmit", "formGroup"], [1, "mb-3"], [1, "form-label"], ["type", "text", "formControlName", "title", "placeholder", "Enter event title", 1, "form-control"], [1, "d-flex", "justify-content-end", "gap-3", "mt-3"], ["type", "button", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-prime"], [1, "mt-4", "tableheading"], [1, "d-flex", "justify-content-between", "align-items-center", "flex-wrap", "mb-3"], [1, "mb-1"], [1, "search-add-div", "d-flex", "align-items-center", "gap-3"], ["data-bs-toggle", "offcanvas", "data-bs-target", "#addNewsDrawer", 1, "btn", "btn-prime", "w-100"], ["tabindex", "-1", "id", "addNewsDrawer", "aria-labelledby", "addNewsDrawerLabel", 1, "offcanvas", "offcanvas-end"], [1, "offcanvas-header", "d-flex", "flex-column", "align-items-start"], [1, "d-flex", "justify-content-between", "w-100", "align-items-center"], [1, "mt-2", "d-flex", "gap-2"], [1, "form-check", "form-check-inline"], ["type", "radio", "name", "headingOption", "id", "meetingNotice", 1, "form-check-input", 3, "change", "checked"], ["for", "meetingNotice", 1, "form-check-label"], ["type", "radio", "name", "headingOption", "id", "mom", 1, "form-check-input", 3, "change"], ["for", "mom", 1, "form-check-label"], [1, "d-flex", "flex-column", "justify-content-between", "h-100", 3, "ngSubmit", "formGroup"], [1, "inner-fields"], [1, "text-danger"], ["type", "text", "formControlName", "title", "placeholder", "Enter your title here", 1, "form-control"], [1, "twofields-div", "d-flex", "align-items-center", "gap-2"], [1, "mb-3", "w-100"], ["type", "date", "formControlName", "date", "placeholder", "Enter date", 1, "form-control", 3, "min"], ["type", "time", "formControlName", "time", "placeholder", "Enter meeting time", 1, "form-control"], [1, "upload-wrapper", "mb-3"], ["class", "text-danger", 4, "ngIf"], ["for", "fileUpload", 1, "upload-box"], [1, "upload-content"], [1, "infs"], [1, "m-0"], [1, "click-here"], [1, "text-muted"], ["type", "file", "id", "fileUpload", "hidden", "", "accept", "image/jpeg, image/png, application/pdf", 3, "change"], ["class", "file-box mt-3 d-flex justify-content-between align-items-center", 4, "ngIf"], ["formControlName", "announcements", "rows", "1", "placeholder", "Share updates or comments here....", 1, "form-control"], [1, "form-check"], ["type", "checkbox", "id", "notifyAll", "formControlName", "notifyAll", 1, "form-check-input"], ["for", "notifyAll", 1, "form-check-label"], ["type", "checkbox", "id", "shareWithExecutive", "formControlName", "shareWithExecutive", 1, "form-check-input"], ["for", "shareWithExecutive", 1, "form-check-label"], ["type", "submit", 1, "btn", "btn-prime", 3, "disabled"], [1, "table-responsive", "custom-table", "overflow-visible"], ["class", "table align-middle mb-0", 4, "ngIf", "ngIfElse"], [1, "d-flex", "justify-content-end", "align-items-center", "gap-2", "mt-3"], [1, "pagination", "modern-pagination", "mb-0"], [1, "page-item"], [1, "page-link", 3, "click"], ["class", "page-item", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center"], [1, "form-select", "form-select-sm", "w-auto", 3, "change"], ["value", "5", 3, "selected"], ["value", "10", 3, "selected"], ["value", "20", 3, "selected"], ["alt", "Image Preview", 1, "img-fluid", "rounded", 3, "src"], ["width", "100%", "height", "500px", 3, "src"], [1, "file-box", "mt-3", "d-flex", "justify-content-between", "align-items-center"], [1, "file-info", "d-flex", "align-items-center", "gap-2"], [1, "radio-icon"], [1, "file-actions", "d-flex", "gap-3"], ["class", "fas fa-eye view-icon text-primary", "title", "View", 3, "click", 4, "ngIf"], ["title", "Delete", 1, "fas", "fa-trash-alt", "text-danger", 3, "click"], ["title", "View", 1, "fas", "fa-eye", "view-icon", "text-primary", 3, "click"], [1, "table", "align-middle", "mb-0"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "dropdown"], ["type", "button", "data-bs-toggle", "dropdown", 1, "btn"], [1, "dropdown-menu", "shadow"], [1, "dropdown-item", "red", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none"], ["id", "mask0_50905_5148", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "20", "height", "20", 2, "mask-type", "alpha"], ["width", "20", "height", "20", "fill", "#D9D9D9"], ["mask", "url(#mask0_50905_5148)"], ["d", "M14.5002 10.8335L13.3335 9.66683L15.0627 7.91683L13.3335 6.18766L14.5002 5.00016L16.2502 6.75016L17.9793 5.00016L19.1668 6.18766L17.4168 7.91683L19.1668 9.66683L17.9793 10.8335L16.2502 9.10433L14.5002 10.8335ZM7.50016 10.0002C6.5835 10.0002 5.79877 9.67377 5.146 9.021C4.49322 8.36822 4.16683 7.5835 4.16683 6.66683C4.16683 5.75016 4.49322 4.96544 5.146 4.31266C5.79877 3.65989 6.5835 3.3335 7.50016 3.3335C8.41683 3.3335 9.20155 3.65989 9.85433 4.31266C10.5071 4.96544 10.8335 5.75016 10.8335 6.66683C10.8335 7.5835 10.5071 8.36822 9.85433 9.021C9.20155 9.67377 8.41683 10.0002 7.50016 10.0002ZM0.833496 16.6668V14.3335C0.833496 13.8613 0.955024 13.4272 1.19808 13.0314C1.44114 12.6356 1.76405 12.3335 2.16683 12.1252C3.02794 11.6946 3.90294 11.3717 4.79183 11.1564C5.68072 10.9411 6.5835 10.8335 7.50016 10.8335C8.41683 10.8335 9.31961 10.9411 10.2085 11.1564C11.0974 11.3717 11.9724 11.6946 12.8335 12.1252C13.2363 12.3335 13.5592 12.6356 13.8022 13.0314C14.0453 13.4272 14.1668 13.8613 14.1668 14.3335V16.6668H0.833496ZM2.50016 15.0002H12.5002V14.3335C12.5002 14.1807 12.462 14.0418 12.3856 13.9168C12.3092 13.7918 12.2085 13.6946 12.0835 13.6252C11.3335 13.2502 10.5766 12.9689 9.81266 12.7814C9.04877 12.5939 8.27794 12.5002 7.50016 12.5002C6.72239 12.5002 5.95155 12.5939 5.18766 12.7814C4.42377 12.9689 3.66683 13.2502 2.91683 13.6252C2.79183 13.6946 2.69114 13.7918 2.61475 13.9168C2.53836 14.0418 2.50016 14.1807 2.50016 14.3335V15.0002ZM7.50016 8.3335C7.9585 8.3335 8.35086 8.1703 8.67725 7.84391C9.00364 7.51752 9.16683 7.12516 9.16683 6.66683C9.16683 6.2085 9.00364 5.81613 8.67725 5.48975C8.35086 5.16336 7.9585 5.00016 7.50016 5.00016C7.04183 5.00016 6.64947 5.16336 6.32308 5.48975C5.99669 5.81613 5.8335 6.2085 5.8335 6.66683C5.8335 7.12516 5.99669 7.51752 6.32308 7.84391C6.64947 8.1703 7.04183 8.3335 7.50016 8.3335Z", "fill", "#B7131A"], ["href", "javascript:void(0)", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none"], ["d", "M8 12L3 7L4.4 5.55L7 8.15V0H9V8.15L11.6 5.55L13 7L8 12ZM2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V11H2V14H14V11H16V14C16 14.55 15.8042 15.0208 15.4125 15.4125C15.0208 15.8042 14.55 16 14 16H2Z", "fill", "#1C1B1F"], [1, "text-center", "p-4", "d-flex", "align-items-center", "justify-content-center"], ["src", "../../../../assets/icons/empty-state.png", "alt", "empty state"]], template: function MoMComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 4)(1, "div", 5, 0)(3, "div", 6)(4, "div", 7);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "button", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 9)(8, "div", 10)(9, "div", 11)(10, "div", 12);
        \u0275\u0275element(11, "button", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 14);
        \u0275\u0275template(13, MoMComponent_img_13_Template, 1, 1, "img", 15)(14, MoMComponent_iframe_14_Template, 1, 1, "iframe", 16);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(15, "div", 17)(16, "div", 18)(17, "h5", 19);
        \u0275\u0275text(18, "Edit Event");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "button", 20);
        \u0275\u0275listener("click", function MoMComponent_Template_button_click_19_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.closeOffcanvas("editEventDrawer"));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 21)(21, "form", 22);
        \u0275\u0275listener("ngSubmit", function MoMComponent_Template_form_ngSubmit_21_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onUpdateEvent());
        });
        \u0275\u0275elementStart(22, "div", 23)(23, "label", 24);
        \u0275\u0275text(24, "Title");
        \u0275\u0275elementEnd();
        \u0275\u0275element(25, "input", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 26)(27, "button", 27);
        \u0275\u0275listener("click", function MoMComponent_Template_button_click_27_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.closeOffcanvas("editEventDrawer"));
        });
        \u0275\u0275text(28, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "button", 28);
        \u0275\u0275text(30, "Update");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(31, "div", 29)(32, "div", 30)(33, "h5", 31);
        \u0275\u0275text(34, "Minutes of Meeting");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 32)(36, "button", 33);
        \u0275\u0275text(37, " Add ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(38, "div", 34)(39, "div", 35)(40, "div", 36)(41, "div", 37)(42, "div", 38)(43, "input", 39);
        \u0275\u0275listener("change", function MoMComponent_Template_input_change_43_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onHeadingOptionChange("text"));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "label", 40);
        \u0275\u0275text(45, "Meeting Notice");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "div", 38)(47, "input", 41);
        \u0275\u0275listener("change", function MoMComponent_Template_input_change_47_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onHeadingOptionChange("image"));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "label", 42);
        \u0275\u0275text(49, "Minutes of Meeting");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(50, "button", 20);
        \u0275\u0275listener("click", function MoMComponent_Template_button_click_50_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.closeOffcanvas("addNewsDrawer"));
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(51, "div", 21)(52, "form", 43);
        \u0275\u0275listener("ngSubmit", function MoMComponent_Template_form_ngSubmit_52_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSubmit());
        });
        \u0275\u0275elementStart(53, "div", 44)(54, "div", 23)(55, "label", 24);
        \u0275\u0275text(56, "Title ");
        \u0275\u0275elementStart(57, "span", 45);
        \u0275\u0275text(58, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(59, "input", 46);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "div", 47)(61, "div", 48)(62, "label", 24);
        \u0275\u0275text(63, "Date ");
        \u0275\u0275elementStart(64, "span", 45);
        \u0275\u0275text(65, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(66, "input", 49);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "div", 48)(68, "label", 24);
        \u0275\u0275text(69, "Time");
        \u0275\u0275elementEnd();
        \u0275\u0275element(70, "input", 50);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(71, "div", 51)(72, "label", 24);
        \u0275\u0275text(73, "Upload File ");
        \u0275\u0275template(74, MoMComponent_span_74_Template, 2, 0, "span", 52);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "label", 53)(76, "div", 54)(77, "div", 55)(78, "p", 56)(79, "span", 57);
        \u0275\u0275text(80, "Click here");
        \u0275\u0275elementEnd();
        \u0275\u0275text(81, " to upload your file");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "small", 58);
        \u0275\u0275text(83, " Supported format (.pdf, .jpg, .png), maximum file size : 5 MB ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(84, "input", 59, 1);
        \u0275\u0275listener("change", function MoMComponent_Template_input_change_84_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onFileSelected($event));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(86, MoMComponent_div_86_Template, 8, 2, "div", 60);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "div", 23)(88, "label", 24);
        \u0275\u0275text(89, "Announcements (in any)");
        \u0275\u0275elementEnd();
        \u0275\u0275element(90, "textarea", 61);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "div", 23)(92, "div", 62);
        \u0275\u0275element(93, "input", 63);
        \u0275\u0275elementStart(94, "label", 64);
        \u0275\u0275text(95, " Share document with all members ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(96, "div", 62);
        \u0275\u0275element(97, "input", 65);
        \u0275\u0275elementStart(98, "label", 66);
        \u0275\u0275text(99, " Share document with executive committee members only ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(100, "div", 26)(101, "button", 27);
        \u0275\u0275listener("click", function MoMComponent_Template_button_click_101_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.closeOffcanvas("addNewsDrawer"));
        });
        \u0275\u0275text(102, "Back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "button", 67);
        \u0275\u0275text(104, "Submit");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(105, "div", 68);
        \u0275\u0275template(106, MoMComponent_table_106_Template, 17, 1, "table", 69);
        \u0275\u0275elementEnd();
        \u0275\u0275template(107, MoMComponent_ng_template_107_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(109, "div", 70)(110, "nav")(111, "ul", 71)(112, "li", 72)(113, "a", 73);
        \u0275\u0275listener("click", function MoMComponent_Template_a_click_113_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.goPrevious());
        });
        \u0275\u0275text(114, "\u2039");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(115, MoMComponent_li_115_Template, 3, 3, "li", 74);
        \u0275\u0275elementStart(116, "li", 72)(117, "a", 73);
        \u0275\u0275listener("click", function MoMComponent_Template_a_click_117_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.goNext());
        });
        \u0275\u0275text(118, "\u203A");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(119, "div", 75)(120, "select", 76);
        \u0275\u0275listener("change", function MoMComponent_Template_select_change_120_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onPageSizeChange($event));
        });
        \u0275\u0275elementStart(121, "option", 77);
        \u0275\u0275text(122, "5 /Page");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "option", 78);
        \u0275\u0275text(124, "10 /Page");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(125, "option", 79);
        \u0275\u0275text(126, "20 /Page");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        const noUsers_r12 = \u0275\u0275reference(108);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", ctx.toastMessage, " ");
        \u0275\u0275advance(8);
        \u0275\u0275property("ngIf", ctx.isImageFile);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isPdfFile);
        \u0275\u0275advance(7);
        \u0275\u0275property("formGroup", ctx.editEventForm);
        \u0275\u0275advance(22);
        \u0275\u0275property("checked", true);
        \u0275\u0275advance(9);
        \u0275\u0275property("formGroup", ctx.blogForm);
        \u0275\u0275advance(14);
        \u0275\u0275property("min", ctx.today);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngIf", ctx.fileRequired);
        \u0275\u0275advance(12);
        \u0275\u0275property("ngIf", ctx.previewUrl);
        \u0275\u0275advance(17);
        \u0275\u0275property("disabled", ctx.blogForm.invalid);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.blogs && ctx.blogs.length)("ngIfElse", noUsers_r12);
        \u0275\u0275advance(6);
        \u0275\u0275classProp("disabled", ctx.currentPage === 1);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(20, _c2).constructor(ctx.totalPages));
        \u0275\u0275advance();
        \u0275\u0275classProp("disabled", ctx.currentPage === ctx.totalPages);
        \u0275\u0275advance(5);
        \u0275\u0275property("selected", ctx.pageSize === 5);
        \u0275\u0275advance(2);
        \u0275\u0275property("selected", ctx.pageSize === 10);
        \u0275\u0275advance(2);
        \u0275\u0275property("selected", ctx.pageSize === 20);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName], styles: ['\n\n.main-dashboard-component[_ngcontent-%COMP%] {\n  margin-bottom: 60px;\n}\n.main-dashboard-component[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--Text, #211b3a);\n  font-family: Urbanist;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 28px;\n}\n.cards-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n.cards-grid[_ngcontent-%COMP%]   .stats-card[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background: #fff;\n  padding: 16px;\n}\n.cards-grid[_ngcontent-%COMP%]   .stats-card[_ngcontent-%COMP%]   .card-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.cards-grid[_ngcontent-%COMP%]   .stats-card[_ngcontent-%COMP%]   .card-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--Text, #211b3a);\n  font-family: Urbanist;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: 0.15px;\n  margin: 0px;\n}\n.tableheading[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #211b3a;\n  font-family: Urbanist;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 28px;\n}\n.tableheading[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  padding: 8px 12px;\n  overflow: hidden;\n  color: #868686;\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 20px;\n  letter-spacing: 0.25px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-family: Urbanist;\n  color: #492fb2;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 16px;\n  letter-spacing: 0.07px;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #333;\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 150%;\n  letter-spacing: 0.25px;\n}\n.custom-table[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n}\n.custom-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #eee;\n  padding: 12px;\n}\n.badge[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  font-family: "Noto Sans";\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: var(--Line-Heights-10, 20px);\n  letter-spacing: var(--Letter-Spacing-4, 0.25px);\n  padding: 6px 12px;\n}\n.Approved[_ngcontent-%COMP%] {\n  color: #3C9718;\n  background: #EDF7E6;\n}\n.Unapproved[_ngcontent-%COMP%] {\n  color: #B77224;\n  background: #FEF1E7;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid #c6c6c6;\n  background: #fff;\n  cursor: pointer;\n  padding: 8px 0px;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .blue[_ngcontent-%COMP%] {\n  color: #492fb2;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .black[_ngcontent-%COMP%] {\n  color: #211b3a;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%] {\n  color: #b7131a;\n}\n.btn-check[_ngcontent-%COMP%]:checked    + .btn[_ngcontent-%COMP%], .btn.active[_ngcontent-%COMP%], .btn.show[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:first-child:active, [_ngcontent-%COMP%]:not(.btn-check)    + .btn[_ngcontent-%COMP%]:active {\n  border-color: transparent;\n}\n.offcanvas[_ngcontent-%COMP%] {\n  width: 520px;\n}\n.upload-box[_ngcontent-%COMP%] {\n  border-style: dashed;\n  cursor: pointer;\n  transition: background 0.3s;\n}\n.upload-box[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.form-label[_ngcontent-%COMP%] {\n  color: var(--Text-Dark, #212121);\n  font-family: Urbanist;\n  font-size: var(--Font-Size-2, 14px);\n  font-style: normal;\n  font-weight: 500;\n  line-height: var(--Line-Heights-10, 20px);\n  letter-spacing: var(--Letter-Spacing-2, 0.1px);\n}\n.upload-wrapper[_ngcontent-%COMP%]   .upload-box[_ngcontent-%COMP%] {\n  display: block;\n  border: 2px dashed #AFAFAF;\n  border-radius: 10px;\n  padding: 20px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  background-color: #f8f9fa;\n}\n.upload-wrapper[_ngcontent-%COMP%]   .upload-box[_ngcontent-%COMP%]:hover {\n  background-color: #e9f3ff;\n}\n.upload-wrapper[_ngcontent-%COMP%]   .upload-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: #6c757d;\n  justify-content: space-between;\n}\n.upload-wrapper[_ngcontent-%COMP%]   .preview-box[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.upload-wrapper[_ngcontent-%COMP%]   .preview-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 200px;\n  border-radius: 10px;\n  margin-top: 10px;\n}\n.modern-pagination[_ngcontent-%COMP%]   .page-link.active[_ngcontent-%COMP%] {\n  background-color: #f5f0ff;\n  border: 1px solid #7c3aed;\n  color: #7c3aed;\n  font-weight: 600;\n}\n.modern-pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:hover {\n  background-color: #f2f2f2;\n  color: #000;\n}\n.modern-pagination[_ngcontent-%COMP%]   .page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n}\n.custom-date[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: 1px solid #0d6efd;\n  padding: 10px;\n  font-size: 16px;\n  transition: all 0.3s ease-in-out;\n}\n.custom-date[_ngcontent-%COMP%]:focus {\n  border-color: #0a58ca;\n  box-shadow: 0 0 8px rgba(13, 110, 253, 0.5);\n}\n.custom-date[_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n  background-color: #0d6efd;\n  padding: 4px;\n  border-radius: 50%;\n  cursor: pointer;\n  filter: invert(1);\n}\n.file-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #dbe3ff;\n  padding: 8px 20px;\n  border-radius: 12px;\n  max-width: 100%;\n  font-family: Arial, sans-serif;\n}\n.file-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: #0b1e4a;\n  font-weight: 500;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #B2B2B2;\n  font-family: Urbanist;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px;\n}\n/*# sourceMappingURL=mo-m.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MoMComponent, { className: "MoMComponent", filePath: "src/app/IAS-portal/pages/mo-m/mo-m.component.ts", lineNumber: 28 });
})();
export {
  MoMComponent
};
//# sourceMappingURL=chunk-DU6AMCZO.mjs.map
