import './polyfills.server.mjs';
import {
  ɵɵdefinePipe
} from "./chunk-KVDSLLK3.mjs";

// src/app/common/time-ago.pipe.ts
var TimeAgoPipe = class _TimeAgoPipe {
  transform(value) {
    if (!value)
      return "";
    const givenDate = new Date(value);
    const now = /* @__PURE__ */ new Date();
    const diffMs = now.getTime() - givenDate.getTime();
    const diffMinutes = Math.floor(diffMs / (1e3 * 60));
    const diffHours = Math.floor(diffMs / (1e3 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1e3 * 60 * 60 * 24));
    if (diffMinutes < 1) {
      return "Just now";
    } else if (diffMinutes < 60) {
      return `${diffMinutes} minute${diffMinutes > 1 ? "s" : ""} ago`;
    } else if (diffHours < 24) {
      return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
    } else if (diffDays === 1) {
      return "Yesterday";
    } else {
      return `${diffDays} days ago`;
    }
  }
  static {
    this.\u0275fac = function TimeAgoPipe_Factory(t) {
      return new (t || _TimeAgoPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "timeAgo", type: _TimeAgoPipe, pure: true, standalone: true });
  }
};

export {
  TimeAgoPipe
};
//# sourceMappingURL=chunk-R2TLOVHR.mjs.map
