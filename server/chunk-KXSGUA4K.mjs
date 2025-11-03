import './polyfills.server.mjs';
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-QTAPZRLW.mjs";
import {
  ToastService
} from "./chunk-A2UBZQQG.mjs";
import {
  environment
} from "./chunk-SJMEGSB4.mjs";
import {
  HttpClient
} from "./chunk-DVOKZFMG.mjs";
import {
  CommonModule,
  NgIf
} from "./chunk-JUVOLG3M.mjs";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IXD3JOLX.mjs";
import "./chunk-24VIC3GD.mjs";

// src/app/state-dashboard/pages/state-about-us/state-about-us.component.ts
function StateAboutUsComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "span");
    \u0275\u0275text(2, "Preview (Banner)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "img", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r0.selectedImages["aboutBanner"], \u0275\u0275sanitizeUrl);
  }
}
function StateAboutUsComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "span");
    \u0275\u0275text(2, "Preview (Image)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "img", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r0.selectedImages["bannerPic"], \u0275\u0275sanitizeUrl);
  }
}
var StateAboutUsComponent = class _StateAboutUsComponent {
  constructor(fb, http, toastService) {
    this.fb = fb;
    this.http = http;
    this.toastService = toastService;
    this.selectedImages = {};
  }
  ngOnInit() {
    this.aboutForm = this.fb.group({
      stateAssociationTitle: [""],
      aboutDescription: [""]
    });
    this.fetchAboutData();
  }
  // ✅ Fetch data with toast notifications
  fetchAboutData() {
    this.toastService.showToast("\u23F3 Fetching State Association details...", "info");
    this.http.get(`${environment.apiUrl}/state-associations/about`).subscribe({
      next: (res) => {
        this.aboutData = res?.data?.data;
        this.aboutForm.patchValue({
          stateAssociationTitle: this.aboutData?.["stateAssociationTitle"] || "",
          aboutDescription: this.aboutData?.["aboutDescription"] || ""
        });
        this.selectedImages["aboutBanner"] = this.aboutData?.["aboutBanner"] || "";
        this.selectedImages["bannerPic"] = this.aboutData?.["bannerPic"] || "";
        this.toastService.showToast("\u2705 State Association details loaded successfully!", "success");
      },
      error: (err) => {
        console.error("Error fetching data:", err);
        this.toastService.showToast("\u274C Failed to fetch State Association details.", "danger");
      }
    });
  }
  // ✅ Handle image selection
  onImageSelected(event, field) {
    const file = event.target.files[0];
    if (!file)
      return;
    const reader = new FileReader();
    reader.onload = () => {
      this.selectedImages[field] = reader.result;
    };
    reader.readAsDataURL(file);
  }
  // ✅ Update form submission with toast flow
  onSubmit() {
    const payload = {
      bannerPic: this.selectedImages["bannerPic"],
      stateAssociationTitle: this.aboutForm.value.stateAssociationTitle,
      aboutBanner: this.selectedImages["aboutBanner"],
      aboutDescription: this.aboutForm.value.aboutDescription
    };
    this.toastService.showToast("\u23F3 Updating State Association details...", "info");
    this.http.patch(`${environment.apiUrl}/state-associations/about`, payload).subscribe({
      next: (res) => {
        this.toastService.showToast("\u2705 State Association details updated successfully!", "success");
        this.fetchAboutData();
      },
      error: (err) => {
        console.error("Error updating details:", err);
        this.toastService.showToast(err.error?.message || "\u274C Failed to update details.", "danger");
      }
    });
  }
  // ✅ Image base64 helper
  getImageUrl(base64String) {
    if (!base64String)
      return "";
    if (base64String.startsWith("data:image")) {
      return base64String;
    }
    return `data:image/jpeg;base64,${base64String}`;
  }
  static {
    this.\u0275fac = function StateAboutUsComponent_Factory(t) {
      return new (t || _StateAboutUsComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ToastService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StateAboutUsComponent, selectors: [["app-state-about-us"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 67, vars: 9, consts: [["tabindex", "-1", "id", "aboutusDrawer", "aria-labelledby", "aboutusDrawerLabel", 1, "offcanvas", "offcanvas-end"], [1, "offcanvas-header"], ["id", "aboutusDrawerLabel"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "text-reset"], [1, "offcanvas-body"], [1, "d-flex", "flex-column", "justify-content-between", "h-100", 3, "ngSubmit", "formGroup"], [1, "inner-fields"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", "formControlName", "stateAssociationTitle", 1, "form-control"], ["rows", "3", "formControlName", "aboutDescription", 1, "form-control"], [1, "upload-wrapper", "mb-3"], ["type", "file", "accept", "image/*", 1, "form-control", 3, "change"], ["class", "file-box mt-3", 4, "ngIf"], [1, "upload-wrapper"], [1, "d-flex", "justify-content-end", "gap-3", "mt-3"], ["type", "button", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-secondary"], ["type", "submit", 1, "btn", "btn-prime"], [1, "main-aboutsection"], [1, "main-heading-div"], [1, "m-0"], ["data-bs-toggle", "offcanvas", "data-bs-target", "#aboutusDrawer", 1, "btn", "btn-prime"], [1, "about-content-div", "mt-5"], [1, "hero-banner-div"], ["alt", "about-image", 1, "rounded-3", "w-100", 3, "src"], [1, "cont-div", "d-flex", "align-content-start", "gap-5", "mt-4"], [1, "image-div"], ["alt", "about-image", 1, "rounded-3", 3, "src"], [1, "title-desc-div", "w-50"], [1, "title-div"], [1, "desc-div"], [1, "file-box", "mt-3"], ["alt", "Banner Preview", 1, "rounded", "mt-2", 2, "width", "150px", 3, "src"], ["alt", "Image Preview", 1, "rounded", "mt-2", 2, "width", "150px", 3, "src"]], template: function StateAboutUsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h5", 2);
        \u0275\u0275text(3, "Edit About");
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "button", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 4)(6, "form", 5);
        \u0275\u0275listener("ngSubmit", function StateAboutUsComponent_Template_form_ngSubmit_6_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "label", 8);
        \u0275\u0275text(10, "Title ");
        \u0275\u0275elementStart(11, "span", 9);
        \u0275\u0275text(12, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(13, "input", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 7)(15, "label", 8);
        \u0275\u0275text(16, "About Description ");
        \u0275\u0275elementStart(17, "span", 9);
        \u0275\u0275text(18, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(19, "textarea", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 12)(21, "label", 8);
        \u0275\u0275text(22, "Upload Banner ");
        \u0275\u0275elementStart(23, "span", 9);
        \u0275\u0275text(24, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "input", 13);
        \u0275\u0275listener("change", function StateAboutUsComponent_Template_input_change_25_listener($event) {
          return ctx.onImageSelected($event, "aboutBanner");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(26, StateAboutUsComponent_div_26_Template, 4, 1, "div", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 15)(28, "label", 8);
        \u0275\u0275text(29, "Upload Image ");
        \u0275\u0275elementStart(30, "span", 9);
        \u0275\u0275text(31, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "input", 13);
        \u0275\u0275listener("change", function StateAboutUsComponent_Template_input_change_32_listener($event) {
          return ctx.onImageSelected($event, "bannerPic");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(33, StateAboutUsComponent_div_33_Template, 4, 1, "div", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "div", 16)(35, "button", 17);
        \u0275\u0275text(36, "Back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "button", 18);
        \u0275\u0275text(38, "Submit");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(39, "div", 19)(40, "div", 20)(41, "h1", 21);
        \u0275\u0275text(42);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "button", 22);
        \u0275\u0275text(44, "Edit About");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "div", 23)(46, "h1");
        \u0275\u0275text(47, "Hero banner image");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "div", 24);
        \u0275\u0275element(49, "img", 25);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "div", 23)(51, "h1");
        \u0275\u0275text(52);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "div", 26)(54, "div", 27);
        \u0275\u0275element(55, "img", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "div", 29)(57, "div", 30)(58, "h3");
        \u0275\u0275text(59, "Title: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "p");
        \u0275\u0275text(61);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(62, "div", 31)(63, "h3");
        \u0275\u0275text(64, "Content: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "p");
        \u0275\u0275text(66);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275property("formGroup", ctx.aboutForm);
        \u0275\u0275advance(20);
        \u0275\u0275property("ngIf", ctx.selectedImages["aboutBanner"]);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.selectedImages["bannerPic"]);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate1("About IAS Association ", ctx.aboutData.name, "");
        \u0275\u0275advance(7);
        \u0275\u0275property("src", ctx.getImageUrl(ctx.aboutData.aboutBanner), \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("About Indian Administrative Service Association, ", ctx.aboutData.name, "");
        \u0275\u0275advance(3);
        \u0275\u0275property("src", ctx.getImageUrl(ctx.aboutData.bannerPic), \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.aboutData.stateAssociationTitle);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.aboutData.aboutDescription);
      }
    }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ['\n\n.main-heading-div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.main-heading-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--Text, #211B3A);\n  font-family: Urbanist;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 28px;\n  margin: 0px;\n}\n.about-content-div[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  background: #FFF;\n  padding: 23px;\n}\n.about-content-div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--Color-Neutral-neutral-darker, #222);\n  font-family: Urbanist;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 28px;\n}\n.title-desc-div[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #000;\n  font-family: Urbanist;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 28px;\n}\n.title-desc-div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #212121;\n  font-family: Urbanist;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n}\n.image-div[_ngcontent-%COMP%] {\n  width: 551px;\n  height: 365px;\n  overflow: hidden;\n}\n.image-div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 8px;\n}\n.hero-banner-div[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 490px;\n  overflow: hidden;\n}\n.hero-banner-div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 8px;\n}\n.file-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #dbe3ff;\n  padding: 12px 20px;\n  border-radius: 12px;\n  max-width: 100%;\n  font-family: Arial, sans-serif;\n}\n.file-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: #0b1e4a;\n  font-weight: 500;\n}\n.radio-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid #0b1e4a;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.radio-icon[_ngcontent-%COMP%]::before {\n  content: "";\n  width: 8px;\n  height: 8px;\n  background-color: #0b1e4a;\n  border-radius: 50%;\n}\n.view-icon[_ngcontent-%COMP%] {\n  color: #0b1e4a;\n  font-size: 18px;\n  cursor: pointer;\n}\n.upload-wrapper[_ngcontent-%COMP%]   .upload-box[_ngcontent-%COMP%] {\n  display: block;\n  border: 2px dashed #AFAFAF;\n  border-radius: 10px;\n  padding: 40px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  background-color: #f8f9fa;\n}\n.upload-wrapper[_ngcontent-%COMP%]   .upload-box[_ngcontent-%COMP%]:hover {\n  background-color: #e9f3ff;\n}\n.upload-wrapper[_ngcontent-%COMP%]   .upload-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: #6c757d;\n  justify-content: space-between;\n}\n.upload-wrapper[_ngcontent-%COMP%]   .preview-box[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.upload-wrapper[_ngcontent-%COMP%]   .preview-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 200px;\n  border-radius: 10px;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=state-about-us.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StateAboutUsComponent, { className: "StateAboutUsComponent", filePath: "src/app/state-dashboard/pages/state-about-us/state-about-us.component.ts", lineNumber: 15 });
})();
export {
  StateAboutUsComponent
};
//# sourceMappingURL=chunk-KXSGUA4K.mjs.map
