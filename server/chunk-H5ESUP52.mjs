import './polyfills.server.mjs';
import {
  RouterLink
} from "./chunk-BE6K35NY.mjs";
import {
  ToastService
} from "./chunk-AE4AKEDV.mjs";
import {
  environment
} from "./chunk-SJMEGSB4.mjs";
import "./chunk-4YWQRQCE.mjs";
import {
  HttpClient
} from "./chunk-HLCGF54J.mjs";
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-G22F5CZJ.mjs";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-NA5KQ7PN.mjs";
import "./chunk-24VIC3GD.mjs";

// src/app/user-portal/pages/consultation/consultation.component.ts
var _c0 = (a0) => ({ id: a0 });
function ConsultationComponent_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "div", 7);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 8);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 9)(9, "div", 10)(10, "h6", 11);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 12);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 13)(14, "mask", 14);
    \u0275\u0275element(15, "rect", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "g", 16);
    \u0275\u0275element(17, "path", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(19, "button", 18);
    \u0275\u0275text(20, " Open ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const event_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", i_r2 % 2 === 0 ? "bg-purple" : "bg-teal");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 7, event_r1.date, "MMM"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 10, event_r1.date, "dd"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(event_r1.title);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", event_r1.location, " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", "/user-home/view-consultation/")("queryParams", \u0275\u0275pureFunction1(13, _c0, event_r1.id));
  }
}
function ConsultationComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, ConsultationComponent_div_4_div_1_Template, 21, 15, "div", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.eventsList);
  }
}
function ConsultationComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "h5");
    \u0275\u0275text(2, "No Data Found");
    \u0275\u0275elementEnd()();
  }
}
var ConsultationComponent = class _ConsultationComponent {
  constructor(http, toastService) {
    this.http = http;
    this.toastService = toastService;
    this.eventsList = [];
  }
  ngOnInit() {
    this.getConsultations();
  }
  getConsultations() {
    this.http.get(`${environment.apiUrl}/consultation`).subscribe({
      next: (res) => {
        const consultations = res.data;
        this.eventsList = consultations.map((event) => ({
          id: event.id,
          title: event.name,
          date: event.launchAt,
          location: "Online",
          endDate: event.endAt,
          hasDocument: event.hasDocument
        }));
        this.toastService.showToast("Data retrieved", "success");
      },
      error: (err) => {
        this.toastService.showToast(err, "danger");
      }
    });
  }
  openEvent(url) {
    window.open(url, "_blank");
  }
  static {
    this.\u0275fac = function ConsultationComponent_Factory(t) {
      return new (t || _ConsultationComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ToastService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConsultationComponent, selectors: [["app-consultation"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 2, consts: [["noevent", ""], [1, "mt-5", "mb-4"], [1, "headingmembership"], [4, "ngIf", "ngIfElse"], ["class", "meeting-card d-flex align-items-center shadow-sm mb-3 p-2 rounded", 4, "ngFor", "ngForOf"], [1, "meeting-card", "d-flex", "align-items-center", "shadow-sm", "mb-3", "p-2", "rounded"], [1, "date-badge", "text-center", "text-white", "fw-bold", "me-3", 3, "ngClass"], [1, "month"], [1, "day"], [1, "flex-grow-1", "d-flex", "justify-content-between", "align-items-center", "flex-wrap", "gap-3"], [1, ""], [1, "mb-1"], [1, "mb-0"], ["xmlns", "http://www.w3.org/2000/svg", "width", "22", "height", "22", "viewBox", "0 0 22 22", "fill", "none"], ["id", "mask0_51656_5189", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "22", "height", "22", 2, "mask-type", "alpha"], ["width", "22", "height", "22", "fill", "#D9D9D9"], ["mask", "url(#mask0_51656_5189)"], ["d", "M10.9997 18.3181C9.38023 18.3181 8.0587 18.0637 7.03509 17.5549C6.01148 17.0461 5.49967 16.3891 5.49967 15.5841C5.49967 15.2196 5.61044 14.8816 5.83197 14.5702C6.05349 14.2589 6.36287 13.9893 6.76009 13.7614L8.20384 15.1057C8.06634 15.1664 7.91738 15.2348 7.75697 15.3107C7.59655 15.3867 7.47051 15.4778 7.37884 15.5841C7.57745 15.8271 8.03579 16.0398 8.75384 16.222C9.4719 16.4043 10.2205 16.4954 10.9997 16.4954C11.7788 16.4954 12.5313 16.4043 13.257 16.222C13.9827 16.0398 14.4448 15.8271 14.6434 15.5841C14.5365 15.4626 14.399 15.3639 14.2309 15.2879C14.0629 15.212 13.9025 15.1436 13.7497 15.0829L15.1705 13.7159C15.5983 13.9589 15.9268 14.2361 16.1559 14.5475C16.3851 14.8588 16.4997 15.2044 16.4997 15.5841C16.4997 16.3891 15.9879 17.0461 14.9643 17.5549C13.9406 18.0637 12.6191 18.3181 10.9997 18.3181ZM11.0226 13.3058C12.5351 12.197 13.6733 11.0844 14.4372 9.96797C15.2011 8.85157 15.583 7.73138 15.583 6.6074C15.583 5.05812 15.0865 3.88856 14.0934 3.09873C13.1004 2.30891 12.0691 1.91399 10.9997 1.91399C9.93023 1.91399 8.89898 2.30891 7.90592 3.09873C6.91287 3.88856 6.41634 5.05812 6.41634 6.6074C6.41634 7.62506 6.79065 8.68449 7.53926 9.7857C8.28787 10.8869 9.44898 12.0603 11.0226 13.3058ZM10.9997 15.5841C8.84551 14.0044 7.23752 12.4704 6.17572 10.9818C5.11391 9.49331 4.58301 8.03516 4.58301 6.6074C4.58301 5.52898 4.7778 4.58346 5.16738 3.77085C5.55697 2.95824 6.05731 2.27853 6.66842 1.73172C7.27954 1.18492 7.96704 0.774814 8.73092 0.501412C9.49481 0.22801 10.2511 0.0913086 10.9997 0.0913086C11.7483 0.0913086 12.5045 0.22801 13.2684 0.501412C14.0323 0.774814 14.7198 1.18492 15.3309 1.73172C15.942 2.27853 16.4424 2.95824 16.832 3.77085C17.2215 4.58346 17.4163 5.52898 17.4163 6.6074C17.4163 8.03516 16.8854 9.49331 15.8236 10.9818C14.7618 12.4704 13.1538 14.0044 10.9997 15.5841ZM10.9997 8.29338C11.5038 8.29338 11.9354 8.11491 12.2945 7.75797C12.6535 7.40102 12.833 6.97193 12.833 6.4707C12.833 5.96946 12.6535 5.54037 12.2945 5.18343C11.9354 4.82649 11.5038 4.64801 10.9997 4.64801C10.4955 4.64801 10.0639 4.82649 9.70488 5.18343C9.34585 5.54037 9.16634 5.96946 9.16634 6.4707C9.16634 6.97193 9.34585 7.40102 9.70488 7.75797C10.0639 8.11491 10.4955 8.29338 10.9997 8.29338Z", "fill", "#6B6B6B"], [1, "btn", "btn-prime", "me-3", 3, "routerLink", "queryParams"], [1, "text-center", "my-5"]], template: function ConsultationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h5");
        \u0275\u0275text(3, "Feedback & Consultations");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(4, ConsultationComponent_div_4_Template, 2, 1, "div", 3)(5, ConsultationComponent_ng_template_5_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const noevent_r4 = \u0275\u0275reference(6);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.eventsList.length !== 0)("ngIfElse", noevent_r4);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DatePipe, RouterLink], styles: ["\n\n.headingmembership[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #211b3a;\n  font-family: Urbanist;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 28px;\n  margin-bottom: 0;\n}\n.meeting-card[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  background: #FFF;\n}\n.date-badge[_ngcontent-%COMP%] {\n  width: 75px;\n  height: 75px;\n  padding: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 12px;\n}\n.bg-purple[_ngcontent-%COMP%] {\n  background-color: #8c6ef7;\n}\n.bg-teal[_ngcontent-%COMP%] {\n  background-color: #56cfe1;\n}\n.month[_ngcontent-%COMP%] {\n  color: #FFF;\n  font-family: Urbanist;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 300;\n  line-height: 102.5%;\n  text-transform: uppercase;\n}\n.day[_ngcontent-%COMP%] {\n  color: #FFF;\n  font-family: Urbanist;\n  font-size: 46px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 1;\n}\n.meeting-card[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: #000;\n  font-family: Urbanist;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 102.5%;\n}\n.meeting-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.58);\n  font-family: Urbanist;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 162%;\n}\n/*# sourceMappingURL=consultation.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConsultationComponent, { className: "ConsultationComponent", filePath: "src/app/user-portal/pages/consultation/consultation.component.ts", lineNumber: 15 });
})();
export {
  ConsultationComponent
};
//# sourceMappingURL=chunk-H5ESUP52.mjs.map
