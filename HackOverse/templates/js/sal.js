!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.sal = t())
    : (e.sal = t());
})(this, function () {
  return (function (e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var o = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (n.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var o in e)
            n.d(
              r,
              o,
              function (t) {
                return e[t];
              }.bind(null, o)
            );
        return r;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, "a", t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = "dist/"),
      n((n.s = 0))
    );
  })([
    function (e, t, n) {
      "use strict";
      n.r(t);
      n(1);
      function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var i = "Sal was not initialised! Probably it is used in SSR.",
        a =
          "Your browser does not support IntersectionObserver!\nGet a polyfill from here:\nhttps://github.com/w3c/IntersectionObserver/tree/master/polyfill",
        s = {
          rootMargin: "0% 50%",
          threshold: 0.5,
          animateClassName: "sal-animate",
          disabledClassName: "sal-disabled",
          enterEventName: "sal:in",
          exitEventName: "sal:out",
          selector: "[data-sal]",
          once: !0,
          disabled: !1,
        },
        l = [],
        c = null,
        u = function (e) {
          e &&
            e !== s &&
            (s = (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? r(Object(n), !0).forEach(function (t) {
                      o(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : r(Object(n)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t)
                      );
                    });
              }
              return e;
            })({}, s, {}, e));
        },
        f = function (e) {
          e.classList.remove(s.animateClassName);
        },
        d = function (e, t) {
          var n = new CustomEvent(e, { bubbles: !0, detail: t });
          t.target.dispatchEvent(n);
        },
        b = function () {
          document.body.classList.add(s.disabledClassName);
        },
        p = function () {
          c.disconnect(), (c = null);
        },
        m = function () {
          return (
            s.disabled || ("function" == typeof s.disabled && s.disabled())
          );
        },
        y = function (e, t) {
          e.forEach(function (e) {
            e.intersectionRatio >= s.threshold
              ? (!(function (e) {
                  e.target.classList.add(s.animateClassName),
                    d(s.enterEventName, e);
                })(e),
                s.once && t.unobserve(e.target))
              : s.once ||
                (function (e) {
                  f(e.target), d(s.exitEventName, e);
                })(e);
          });
        },
        v = function () {
          b(), p();
        },
        O = function () {
          document.body.classList.remove(s.disabledClassName),
            (c = new IntersectionObserver(y, {
              rootMargin: s.rootMargin,
              threshold: s.threshold,
            })),
            (l = [].filter.call(
              document.querySelectorAll(s.selector),
              function (e) {
                return !(function (e) {
                  return e.classList.contains(s.animateClassName);
                })(e, s.animateClassName);
              }
            )).forEach(function (e) {
              return c.observe(e);
            });
        },
        g = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          p(),
            Array.from(document.querySelectorAll(s.selector)).forEach(f),
            u(e),
            O();
        };
      t.default = function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s;
        if ((u(e), "undefined" == typeof window))
          return (
            console.warn(i), { elements: l, disable: v, enable: O, reset: g }
          );
        if (!window.IntersectionObserver) throw (b(), Error(a));
        return (
          m() ? b() : O(), { elements: l, disable: v, enable: O, reset: g }
        );
      };
    },
    function (e, t, n) {},
  ]).default;
});
//# sourceMappingURL=sal.js.map
