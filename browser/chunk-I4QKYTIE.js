import {
  FormsModule
} from "./chunk-7MH5K4O5.js";
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
  NgForOf,
  NgIf
} from "./chunk-EWZKLZHI.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-664KIS5M.js";
import "./chunk-ASLTLD6L.js";

// src/app/state-dashboard/pages/state-gallery/state-gallery.component.ts
var _c0 = ["galleryOffcanvas"];
function StateGalleryComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "img", 26);
    \u0275\u0275elementStart(2, "button", 27);
    \u0275\u0275listener("click", function StateGalleryComponent_div_8_Template_button_click_2_listener() {
      const i_r3 = \u0275\u0275restoreView(_r2).index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeImage(i_r3));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const img_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", img_r5, \u0275\u0275sanitizeUrl);
  }
}
function StateGalleryComponent_div_35_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function StateGalleryComponent_div_35_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const item_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.deleteImage(item_r8.id));
    });
    \u0275\u0275elementEnd();
  }
}
function StateGalleryComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275element(1, "img", 29);
    \u0275\u0275template(2, StateGalleryComponent_div_35_button_2_Template, 1, 0, "button", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", item_r8.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.deleteMode);
  }
}
var StateGalleryComponent = class _StateGalleryComponent {
  constructor(http, toast) {
    this.http = http;
    this.toast = toast;
    this.selectedImages = [];
    this.apiUrl = `${environment.apiUrl}/gallery`;
    this.bulkUrl = `${environment.apiUrl}/gallery/bulk`;
    this.galleryImages = [];
    this.deleteMode = false;
  }
  ngOnInit() {
    this.loadGallery();
  }
  openOffcanvas() {
    const offcanvas = new bootstrap.Offcanvas(this.galleryOffcanvas.nativeElement);
    offcanvas.show();
  }
  onFileSelected(event) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.size > 5 * 1024 * 1024) {
        alert(`${file.name} exceeds 5MB and will not be uploaded.`);
        continue;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        this.selectedImages.push(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }
  loadGallery() {
    this.http.get(this.apiUrl).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.galleryImages = res.data;
        }
      },
      error: (err) => {
        console.error("Error loading gallery:", err);
      }
    });
  }
  removeImage(index) {
    this.selectedImages.splice(index, 1);
  }
  onSubmit() {
    if (this.selectedImages.length === 0) {
      this.toast.showToast("Please upload at least one image", "error");
      return;
    }
    const payload = {
      images: this.selectedImages.map((img) => ({ image: img }))
    };
    this.http.post(this.bulkUrl, payload).subscribe({
      next: (res) => {
        this.toast.showToast("Images uploaded successfully!", "success");
        this.selectedImages = [];
        this.loadGallery();
        const offcanvas = bootstrap.Offcanvas.getInstance(this.galleryOffcanvas.nativeElement);
        offcanvas?.hide();
      },
      error: (err) => {
        console.error(err);
        this.toast.showToast("Upload failed", "error");
      }
    });
  }
  deleteImage(id) {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe({
      next: () => {
        this.toast.showToast("Image deleted successfully!", "success");
        this.loadGallery();
      },
      error: () => this.toast.showToast("Failed to delete image", "danger")
    });
  }
  /** Toggle delete mode */
  toggleDeleteMode() {
    this.deleteMode = !this.deleteMode;
  }
  static {
    this.\u0275fac = function StateGalleryComponent_Factory(t) {
      return new (t || _StateGalleryComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ToastService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StateGalleryComponent, selectors: [["app-state-gallery"]], viewQuery: function StateGalleryComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.galleryOffcanvas = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 36, vars: 3, consts: [["galleryOffcanvas", ""], ["fileInput", ""], ["tabindex", "-1", "aria-labelledby", "galleryOffcanvasLabel", 1, "offcanvas", "offcanvas-end"], [1, "offcanvas-header"], ["id", "galleryOffcanvasLabel"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "text-reset"], [1, "offcanvas-body"], [1, "d-flex", "flex-wrap", "gap-2", "mb-3"], ["class", "position-relative", 4, "ngFor", "ngForOf"], [1, "upload-box", "border", "rounded", "p-3", "text-center", "mb-4", 2, "cursor", "pointer", 3, "click"], [1, "form-label", "d-block"], ["type", "file", "multiple", "", "hidden", "", "accept", ".jpg,.jpeg,.png", 3, "change"], [1, ""], [1, "text-muted"], [1, "d-flex", "justify-content-end"], ["type", "button", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-secondary", "me-2"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "tableheading"], [1, "d-flex", "justify-content-between", "align-items-center", "flex-wrap", "mb-3"], [1, "filter-options", "d-flex", "align-items-center", "gap-2", "flex-wrap", "flex-sm-nowrap", "w-md-75"], [1, "btn", "btn-prime", "text-nowrap", 3, "click"], [1, "btn", "btn-danger", "text-nowrap", 3, "click"], [1, "uploaded-photos-div"], [1, "images-grid", "mt-4"], ["class", "image-wrapper position-relative", 4, "ngFor", "ngForOf"], [1, "position-relative"], ["width", "100", "height", "80", 1, "rounded", "border", 3, "src"], ["type", "button", 1, "btn-close", "position-absolute", "top-0", "end-0", 3, "click"], [1, "image-wrapper", "position-relative"], ["alt", "Gallery", 1, "rounded-2", "w-100", 3, "src"], ["type", "button", "class", "delete-btn btn-close position-absolute", 3, "click", 4, "ngIf"], ["type", "button", 1, "delete-btn", "btn-close", "position-absolute", 3, "click"]], template: function StateGalleryComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2, 0)(2, "div", 3)(3, "h5", 4);
        \u0275\u0275text(4, "Upload Gallery Images");
        \u0275\u0275elementEnd();
        \u0275\u0275element(5, "button", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 6)(7, "div", 7);
        \u0275\u0275template(8, StateGalleryComponent_div_8_Template, 3, 1, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 9);
        \u0275\u0275listener("click", function StateGalleryComponent_Template_div_click_9_listener() {
          \u0275\u0275restoreView(_r1);
          const fileInput_r6 = \u0275\u0275reference(12);
          return \u0275\u0275resetView(fileInput_r6.click());
        });
        \u0275\u0275elementStart(10, "label", 10)(11, "input", 11, 1);
        \u0275\u0275listener("change", function StateGalleryComponent_Template_input_change_11_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onFileSelected($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "span", 12);
        \u0275\u0275text(14, " Click here to upload your image ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "small", 13);
        \u0275\u0275text(16, "Supported format: .jpg, .png. Max size: 5 MB");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 14)(18, "button", 15);
        \u0275\u0275text(19, "Back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "button", 16);
        \u0275\u0275listener("click", function StateGalleryComponent_Template_button_click_20_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSubmit());
        });
        \u0275\u0275text(21, "Submit");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(22, "div", 17)(23, "div", 18)(24, "h5", 12);
        \u0275\u0275text(25, "Gallery");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 19)(27, "button", 20);
        \u0275\u0275listener("click", function StateGalleryComponent_Template_button_click_27_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.openOffcanvas());
        });
        \u0275\u0275text(28, "Add Image");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "button", 21);
        \u0275\u0275listener("click", function StateGalleryComponent_Template_button_click_29_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleDeleteMode());
        });
        \u0275\u0275text(30);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "div", 22)(32, "h1");
        \u0275\u0275text(33, "Uploaded Photos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 23);
        \u0275\u0275template(35, StateGalleryComponent_div_35_Template, 3, 2, "div", 24);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("ngForOf", ctx.selectedImages);
        \u0275\u0275advance(22);
        \u0275\u0275textInterpolate1(" ", ctx.deleteMode ? "Cancel" : "Delete Image", " ");
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.galleryImages);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule], styles: ["\n\n.tableheading[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #211b3a;\n  font-family: Urbanist;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 28px;\n  margin: 0px;\n}\n.uploaded-photos-div[_ngcontent-%COMP%] {\n  padding: 24px 29px;\n  border-radius: 12px;\n  background: #FFF;\n}\n.uploaded-photos-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--Color-Neutral-neutral-darker, #222);\n  font-family: Urbanist;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 28px;\n}\n.uploaded-photos-div[_ngcontent-%COMP%]   .images-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));\n  gap: 1rem;\n}\n.uploaded-photos-div[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.uploaded-photos-div[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%] {\n  background-color: rgba(255, 0, 0, 0.75);\n  border-radius: 50%;\n  padding: 0.4rem;\n  top: -10px;\n  right: -10px;\n}\n.uploaded-photos-div[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgb(255, 0, 0);\n}\n.upload-box[_ngcontent-%COMP%] {\n  border: 2px dashed #ccc !important;\n  transition: border-color 0.3s ease;\n}\n.upload-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--gov-in-purple, #290874);\n  font-family: Urbanist;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px;\n}\n.upload-box[_ngcontent-%COMP%]:hover {\n  border-color: #6c63ff !important;\n}\n/*# sourceMappingURL=state-gallery.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StateGalleryComponent, { className: "StateGalleryComponent", filePath: "src/app/state-dashboard/pages/state-gallery/state-gallery.component.ts", lineNumber: 16 });
})();
export {
  StateGalleryComponent
};
//# sourceMappingURL=chunk-I4QKYTIE.js.map
