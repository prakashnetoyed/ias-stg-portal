import './polyfills.server.mjs';
import {
  ɵɵdefinePipe
} from "./chunk-IXD3JOLX.mjs";

// src/app/common/time-ago.pipe.ts
var TimeAgoPipe = class _TimeAgoPipe {
  transform(value) {
    if (!value)
      return "";
    const givenDate = new Date(value);
    const now = /* @__PURE__ */ new Date();
    if (givenDate > now)
      return "In the future";
    let years = now.getFullYear() - givenDate.getFullYear();
    let months = now.getMonth() - givenDate.getMonth();
    let days = now.getDate() - givenDate.getDate();
    if (days < 0) {
      const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
      days += previousMonth;
      months--;
    }
    if (months < 0) {
      months += 12;
      years--;
    }
    const diffMs = now.getTime() - givenDate.getTime();
    const diffMinutes = Math.floor(diffMs / (1e3 * 60));
    const diffHours = Math.floor(diffMs / (1e3 * 60 * 60));
    if (diffMinutes < 1) {
      return "Just now";
    } else if (diffMinutes < 60) {
      return `${diffMinutes} minute${diffMinutes > 1 ? "s" : ""} ago`;
    } else if (diffHours < 24) {
      return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
    }
    let result = [];
    if (years > 0) {
      result.push(`${years} year${years > 1 ? "s" : ""}`);
    }
    if (months > 0) {
      result.push(`${months} month${months > 1 ? "s" : ""}`);
    }
    if (days > 0) {
      result.push(`${days} day${days > 1 ? "s" : ""}`);
    }
    return result.join(" ") + " ago";
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
//# sourceMappingURL=chunk-CTQATEU6.mjs.map
