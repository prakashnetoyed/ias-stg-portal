import './polyfills.server.mjs';
import {
  ActivatedRoute
} from "./chunk-BE6K35NY.mjs";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-72SVRZB2.mjs";
import {
  ToastService
} from "./chunk-AE4AKEDV.mjs";
import {
  environment
} from "./chunk-SJMEGSB4.mjs";
import {
  DomSanitizer
} from "./chunk-4YWQRQCE.mjs";
import {
  HttpClient
} from "./chunk-HLCGF54J.mjs";
import {
  CommonModule,
  NgIf
} from "./chunk-G22F5CZJ.mjs";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NA5KQ7PN.mjs";
import "./chunk-24VIC3GD.mjs";

// src/app/user-portal/pages/view-consultation/view-consultation.component.ts
function ViewConsultationComponent_iframe_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "iframe", 8);
    \u0275\u0275listener("load", function ViewConsultationComponent_iframe_4_Template_iframe_load_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDocumentLoad());
    });
    \u0275\u0275text(1, ' sandbox="allow-same-origin allow-scripts"> ');
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.safeUrl, \u0275\u0275sanitizeResourceUrl);
  }
}
function ViewConsultationComponent_iframe_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "iframe", 9);
    \u0275\u0275listener("load", function ViewConsultationComponent_iframe_5_Template_iframe_load_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDocumentLoad());
    });
    \u0275\u0275text(1, ' sandbox="allow-same-origin allow-scripts"> ');
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.safeUrl, \u0275\u0275sanitizeResourceUrl);
  }
}
function ViewConsultationComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 10)(2, "h5", 11);
    \u0275\u0275text(3, "Submit Your Feedback");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 12)(5, "label");
    \u0275\u0275text(6, "YOUR STANCE ON THE OVERALL NOTE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 13)(8, "button", 14);
    \u0275\u0275listener("click", function ViewConsultationComponent_div_7_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setStance("support"));
    });
    \u0275\u0275text(9, "Support");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 14);
    \u0275\u0275listener("click", function ViewConsultationComponent_div_7_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setStance("oppose"));
    });
    \u0275\u0275text(11, "Oppose");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 14);
    \u0275\u0275listener("click", function ViewConsultationComponent_div_7_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setStance("abstain"));
    });
    \u0275\u0275text(13, "Abstain");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 12)(15, "label");
    \u0275\u0275text(16, "OVERALL REMARKS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "textarea", 15);
    \u0275\u0275twoWayListener("ngModelChange", function ViewConsultationComponent_div_7_Template_textarea_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.overallRemarks, $event) || (ctx_r1.overallRemarks = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 12)(19, "label");
    \u0275\u0275text(20, "PART-SPECIFIC REMARKS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "textarea", 15);
    \u0275\u0275twoWayListener("ngModelChange", function ViewConsultationComponent_div_7_Template_textarea_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.partSpecificRemarks, $event) || (ctx_r1.partSpecificRemarks = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 16)(23, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function ViewConsultationComponent_div_7_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.isEcOnly, $event) || (ctx_r1.isEcOnly = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "label");
    \u0275\u0275text(25, "Mark as EC only");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "button", 18);
    \u0275\u0275listener("click", function ViewConsultationComponent_div_7_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitFeedback());
    });
    \u0275\u0275text(27, " Submit feedback ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275classProp("active", ctx_r1.stance === "support");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.stance === "oppose");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.stance === "abstain");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.overallRemarks);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.partSpecificRemarks);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.isEcOnly);
  }
}
function ViewConsultationComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 10)(2, "h5", 11);
    \u0275\u0275text(3, "Your Feedback");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p")(5, "strong");
    \u0275\u0275text(6, "Stance:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p")(9, "strong");
    \u0275\u0275text(10, "Overall Remarks:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p")(14, "strong");
    \u0275\u0275text(15, "Part Remarks:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p")(19, "strong");
    \u0275\u0275text(20, "EC Only:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 19);
    \u0275\u0275listener("click", function ViewConsultationComponent_div_8_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.enableEdit());
    });
    \u0275\u0275text(23, " Edit Feedback ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.stance, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.overallRemarks);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.partSpecificRemarks);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEcOnly ? "Yes" : "No", "");
  }
}
var ViewConsultationComponent = class _ViewConsultationComponent {
  constructor(http, sanitizer, route, toastService) {
    this.http = http;
    this.sanitizer = sanitizer;
    this.route = route;
    this.toastService = toastService;
    this.consultationId = 0;
    this.fileType = "pdf";
    this.isLoading = true;
    this.isLoaded = false;
    this.documentLoadedOnce = false;
    this.stance = "";
    this.overallRemarks = "";
    this.partSpecificRemarks = "";
    this.isEcOnly = false;
    this.hasFeedback = false;
    this.isEditMode = false;
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.consultationId = +params["id"];
      this.loadConsultation();
    });
  }
  // 🔥 LOAD CONSULTATION
  loadConsultation() {
    this.isLoading = true;
    this.isLoaded = false;
    this.http.get(`${environment.apiUrl}/consultation`).subscribe({
      next: (res) => {
        const data = res.data.find((item) => item.id === this.consultationId);
        if (!data) {
          this.toastService.showToast("Consultation not found", "danger");
          this.isLoading = false;
          return;
        }
        const fileUrl = `${environment.s3Url}${data.document}`;
        this.setViewer(fileUrl);
        this.isLoading = false;
        this.isLoaded = true;
        this.toastService.showToast("Document is loading...", "info");
        this.setViewer(fileUrl);
        this.loadFeedback();
      },
      error: (err) => {
        this.isLoading = false;
        this.toastService.showToast(err, "danger");
      }
    });
  }
  loadFeedback() {
    this.http.get(`${environment.apiUrl}/consultation/${this.consultationId}`).subscribe({
      next: (res) => {
        const feedback = res?.data?.myFeedback;
        if (!feedback) {
          this.hasFeedback = false;
          return;
        }
        this.stance = feedback.stance;
        this.overallRemarks = feedback.overallRemarks;
        this.partSpecificRemarks = feedback.partSpecificRemarks;
        this.isEcOnly = feedback.isEcOnly;
        this.hasFeedback = true;
        this.isEditMode = false;
      },
      error: () => {
        this.hasFeedback = false;
      }
    });
  }
  setViewer(url) {
    if (!url)
      return;
    const ext = url.split(".").pop()?.toLowerCase();
    if (ext === "pdf") {
      this.fileType = "pdf";
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    } else {
      this.fileType = "other";
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://docs.google.com/gview?url=${encodeURIComponent(url)}&embedded=true`);
    }
  }
  onDocumentLoad() {
    if (this.documentLoadedOnce)
      return;
    this.documentLoadedOnce = true;
    this.toastService.showToast("Document loaded successfully", "success");
  }
  // 🔥 STANCE
  setStance(value) {
    this.stance = value;
  }
  // 🔥 ENABLE EDIT
  enableEdit() {
    this.isEditMode = true;
  }
  // 🔥 RESET
  resetForm() {
    this.stance = "";
    this.overallRemarks = "";
    this.partSpecificRemarks = "";
    this.isEcOnly = false;
  }
  // 🔥 SUBMIT / UPDATE
  submitFeedback() {
    if (!this.stance) {
      this.toastService.showToast("Please select stance", "danger");
      return;
    }
    const body = {
      stance: this.stance,
      overallRemarks: this.overallRemarks,
      partSpecificRemarks: this.partSpecificRemarks,
      isEcOnly: this.isEcOnly
    };
    const request = this.hasFeedback ? this.http.post(`${environment.apiUrl}/consultation/${this.consultationId}/feedback`, body) : this.http.post(`${environment.apiUrl}/consultation/${this.consultationId}/feedback`, body);
    request.subscribe({
      next: () => {
        this.toastService.showToast("Feedback saved successfully", "success");
        this.hasFeedback = true;
        this.isEditMode = false;
      },
      error: (err) => {
        this.toastService.showToast(err, "danger");
      }
    });
  }
  static {
    this.\u0275fac = function ViewConsultationComponent_Factory(t) {
      return new (t || _ViewConsultationComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ToastService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewConsultationComponent, selectors: [["app-view-consultation"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 4, consts: [[1, "container-fluid"], [1, "row", "g-4"], [1, "col-md-8"], [1, "doc-viewer", "position-relative"], ["width", "100%", "height", "700px", 3, "src", "load", 4, "ngIf"], ["width", "100%", "height", "700px", "class", "pointe", 3, "src", "load", 4, "ngIf"], [1, "col-md-4"], [4, "ngIf"], ["width", "100%", "height", "700px", 3, "load", "src"], ["width", "100%", "height", "700px", 1, "pointe", 3, "load", "src"], [1, "feedback-card"], [1, "title"], [1, "section"], [1, "stance-group"], [3, "click"], [3, "ngModelChange", "ngModel"], [1, "checkbox-row"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "submit-btn", 3, "click"], [1, "submit-btn", "mt-3", 3, "click"]], template: function ViewConsultationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275template(4, ViewConsultationComponent_iframe_4_Template, 2, 1, "iframe", 4)(5, ViewConsultationComponent_iframe_5_Template, 2, 1, "iframe", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 6);
        \u0275\u0275template(7, ViewConsultationComponent_div_7_Template, 28, 9, "div", 7)(8, ViewConsultationComponent_div_8_Template, 24, 4, "div", 7);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.fileType === "pdf");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.fileType === "other");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.hasFeedback || ctx.isEditMode);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.hasFeedback && !ctx.isEditMode);
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgModel, CommonModule, NgIf], styles: ["\n\n.doc-viewer[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  overflow: hidden;\n  border: 1px solid #e6e8ec;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);\n}\n.feedback-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 20px 18px;\n  border: 1px solid #e6e8ec;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 18px;\n  color: #1f2a37;\n  border-bottom: 2px solid #492FB2;\n  padding-bottom: 8px;\n  margin-bottom: 18px;\n}\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n.section[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #2c3e50;\n  letter-spacing: 0.4px;\n  margin-bottom: 6px;\n  display: block;\n}\n.stance-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.stance-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 9px 10px;\n  border-radius: 6px;\n  border: 1px solid #dcdfe4;\n  background: #f4f6f9;\n  font-size: 13px;\n  font-weight: 500;\n  color: #2c3e50;\n  transition: all 0.25s ease;\n}\n.stance-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #e9edf3;\n}\n.stance-group[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #eef4ff;\n  border: 1px solid #2f6fed;\n  color: #2f6fed;\n}\ntextarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 8px;\n  border: 1px solid #dcdfe4;\n  padding: 10px 12px;\n  font-size: 13px;\n  min-height: 90px;\n  resize: none;\n  transition: all 0.2s ease;\n  background: #fff;\n}\ntextarea[_ngcontent-%COMP%]::placeholder {\n  color: #9aa4af;\n}\ntextarea[_ngcontent-%COMP%]:focus {\n  border-color: #2f6fed;\n  outline: none;\n  box-shadow: 0 0 0 2px rgba(47, 111, 237, 0.08);\n}\n.checkbox-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: flex-start;\n  font-size: 12px;\n  color: #4b5563;\n  margin-bottom: 16px;\n}\n.checkbox-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-top: 3px;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #492FB2;\n  border: none;\n  padding: 11px;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #fff;\n  transition: all 0.25s ease;\n}\n.submit-btn[_ngcontent-%COMP%]:hover {\n  background: #492FB2;\n}\n.autosave[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #2e9d5b;\n  margin-top: 10px;\n}\n@media (max-width: 991px) {\n  .col-md-8[_ngcontent-%COMP%], .col-md-4[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .doc-viewer[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n    height: 500px;\n  }\n  .feedback-card[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n}\n/*# sourceMappingURL=view-consultation.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewConsultationComponent, { className: "ViewConsultationComponent", filePath: "src/app/user-portal/pages/view-consultation/view-consultation.component.ts", lineNumber: 17 });
})();
export {
  ViewConsultationComponent
};
//# sourceMappingURL=chunk-LA24EZY5.mjs.map
