function e(e, t, n, r) {
  Object.defineProperty(e, t, {
    get: n,
    set: r,
    enumerable: !0,
    configurable: !0,
  });
}
function t(e) {
  return e && e.__esModule ? e.default : e;
}
var n =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof self
      ? self
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : {},
  r = {},
  i = {},
  l = n.parcelRequirebe40;
null == l &&
  (((l = function (e) {
    if (e in r) return r[e].exports;
    if (e in i) {
      var t = i[e];
      delete i[e];
      var n = { id: e, exports: {} };
      return (r[e] = n), t.call(n.exports, n, n.exports), n.exports;
    }
    var l = new Error("Cannot find module '" + e + "'");
    throw ((l.code = "MODULE_NOT_FOUND"), l);
  }).register = function (e, t) {
    i[e] = t;
  }),
  (n.parcelRequirebe40 = l)),
  l.register("acw62", function (e, t) {
    e.exports = l("2pUnB");
  }),
  l.register("2pUnB", function (t, n) {
    /** @license React v16.14.0
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var r,
      i,
      o,
      a,
      s,
      u,
      c,
      d,
      p,
      f,
      m,
      h,
      g,
      y,
      v,
      b,
      w,
      E,
      k,
      S,
      x,
      P,
      T,
      _,
      C,
      I,
      M,
      L;
    e(
      t.exports,
      "Children",
      () => r,
      (e) => (r = e)
    ),
      e(
        t.exports,
        "Component",
        () => i,
        (e) => (i = e)
      ),
      e(
        t.exports,
        "Fragment",
        () => o,
        (e) => (o = e)
      ),
      e(
        t.exports,
        "Profiler",
        () => a,
        (e) => (a = e)
      ),
      e(
        t.exports,
        "PureComponent",
        () => s,
        (e) => (s = e)
      ),
      e(
        t.exports,
        "StrictMode",
        () => u,
        (e) => (u = e)
      ),
      e(
        t.exports,
        "Suspense",
        () => c,
        (e) => (c = e)
      ),
      e(
        t.exports,
        "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",
        () => d,
        (e) => (d = e)
      ),
      e(
        t.exports,
        "cloneElement",
        () => p,
        (e) => (p = e)
      ),
      e(
        t.exports,
        "createContext",
        () => f,
        (e) => (f = e)
      ),
      e(
        t.exports,
        "createElement",
        () => m,
        (e) => (m = e)
      ),
      e(
        t.exports,
        "createFactory",
        () => h,
        (e) => (h = e)
      ),
      e(
        t.exports,
        "createRef",
        () => g,
        (e) => (g = e)
      ),
      e(
        t.exports,
        "forwardRef",
        () => y,
        (e) => (y = e)
      ),
      e(
        t.exports,
        "isValidElement",
        () => v,
        (e) => (v = e)
      ),
      e(
        t.exports,
        "lazy",
        () => b,
        (e) => (b = e)
      ),
      e(
        t.exports,
        "memo",
        () => w,
        (e) => (w = e)
      ),
      e(
        t.exports,
        "useCallback",
        () => E,
        (e) => (E = e)
      ),
      e(
        t.exports,
        "useContext",
        () => k,
        (e) => (k = e)
      ),
      e(
        t.exports,
        "useDebugValue",
        () => S,
        (e) => (S = e)
      ),
      e(
        t.exports,
        "useEffect",
        () => x,
        (e) => (x = e)
      ),
      e(
        t.exports,
        "useImperativeHandle",
        () => P,
        (e) => (P = e)
      ),
      e(
        t.exports,
        "useLayoutEffect",
        () => T,
        (e) => (T = e)
      ),
      e(
        t.exports,
        "useMemo",
        () => _,
        (e) => (_ = e)
      ),
      e(
        t.exports,
        "useReducer",
        () => C,
        (e) => (C = e)
      ),
      e(
        t.exports,
        "useRef",
        () => I,
        (e) => (I = e)
      ),
      e(
        t.exports,
        "useState",
        () => M,
        (e) => (M = e)
      ),
      e(
        t.exports,
        "version",
        () => L,
        (e) => (L = e)
      );
    var N = l("8coUR"),
      R = "function" == typeof Symbol && Symbol.for,
      O = R ? Symbol.for("react.element") : 60103,
      A = R ? Symbol.for("react.portal") : 60106,
      F = R ? Symbol.for("react.fragment") : 60107,
      z = R ? Symbol.for("react.strict_mode") : 60108,
      D = R ? Symbol.for("react.profiler") : 60114,
      K = R ? Symbol.for("react.provider") : 60109,
      V = R ? Symbol.for("react.context") : 60110,
      U = R ? Symbol.for("react.forward_ref") : 60112,
      B = R ? Symbol.for("react.suspense") : 60113,
      j = R ? Symbol.for("react.memo") : 60115,
      $ = R ? Symbol.for("react.lazy") : 60116,
      H = "function" == typeof Symbol && Symbol.iterator;
    function W(e) {
      for (
        var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
          n = 1;
        n < arguments.length;
        n++
      )
        t += "&args[]=" + encodeURIComponent(arguments[n]);
      return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    var q = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      G = {};
    function Q(e, t, n) {
      (this.props = e),
        (this.context = t),
        (this.refs = G),
        (this.updater = n || q);
    }
    function Y() {}
    function X(e, t, n) {
      (this.props = e),
        (this.context = t),
        (this.refs = G),
        (this.updater = n || q);
    }
    (Q.prototype.isReactComponent = {}),
      (Q.prototype.setState = function (e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e)
          throw Error(W(85));
        this.updater.enqueueSetState(this, e, t, "setState");
      }),
      (Q.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      }),
      (Y.prototype = Q.prototype);
    var Z = (X.prototype = new Y());
    (Z.constructor = X), N(Z, Q.prototype), (Z.isPureReactComponent = !0);
    var J = { current: null },
      ee = Object.prototype.hasOwnProperty,
      te = { key: !0, ref: !0, __self: !0, __source: !0 };
    function ne(e, t, n) {
      var r,
        i = {},
        l = null,
        o = null;
      if (null != t)
        for (r in (void 0 !== t.ref && (o = t.ref),
        void 0 !== t.key && (l = "" + t.key),
        t))
          ee.call(t, r) && !te.hasOwnProperty(r) && (i[r] = t[r]);
      var a = arguments.length - 2;
      if (1 === a) i.children = n;
      else if (1 < a) {
        for (var s = Array(a), u = 0; u < a; u++) s[u] = arguments[u + 2];
        i.children = s;
      }
      if (e && e.defaultProps)
        for (r in (a = e.defaultProps)) void 0 === i[r] && (i[r] = a[r]);
      return {
        $$typeof: O,
        type: e,
        key: l,
        ref: o,
        props: i,
        _owner: J.current,
      };
    }
    function re(e) {
      return "object" == typeof e && null !== e && e.$$typeof === O;
    }
    var ie = /\/+/g,
      le = [];
    function oe(e, t, n, r) {
      if (le.length) {
        var i = le.pop();
        return (
          (i.result = e),
          (i.keyPrefix = t),
          (i.func = n),
          (i.context = r),
          (i.count = 0),
          i
        );
      }
      return { result: e, keyPrefix: t, func: n, context: r, count: 0 };
    }
    function ae(e) {
      (e.result = null),
        (e.keyPrefix = null),
        (e.func = null),
        (e.context = null),
        (e.count = 0),
        10 > le.length && le.push(e);
    }
    function se(e, t, n, r) {
      var i = typeof e;
      ("undefined" !== i && "boolean" !== i) || (e = null);
      var l = !1;
      if (null === e) l = !0;
      else
        switch (i) {
          case "string":
          case "number":
            l = !0;
            break;
          case "object":
            switch (e.$$typeof) {
              case O:
              case A:
                l = !0;
            }
        }
      if (l) return n(r, e, "" === t ? "." + ce(e, 0) : t), 1;
      if (((l = 0), (t = "" === t ? "." : t + ":"), Array.isArray(e)))
        for (var o = 0; o < e.length; o++) {
          var a = t + ce((i = e[o]), o);
          l += se(i, a, n, r);
        }
      else if (
        (null === e || "object" != typeof e
          ? (a = null)
          : (a =
              "function" == typeof (a = (H && e[H]) || e["@@iterator"])
                ? a
                : null),
        "function" == typeof a)
      )
        for (e = a.call(e), o = 0; !(i = e.next()).done; )
          l += se((i = i.value), (a = t + ce(i, o++)), n, r);
      else if ("object" === i)
        throw (
          ((n = "" + e),
          Error(
            W(
              31,
              "[object Object]" === n
                ? "object with keys {" + Object.keys(e).join(", ") + "}"
                : n,
              ""
            )
          ))
        );
      return l;
    }
    function ue(e, t, n) {
      return null == e ? 0 : se(e, "", t, n);
    }
    function ce(e, t) {
      return "object" == typeof e && null !== e && null != e.key
        ? (function (e) {
            var t = { "=": "=0", ":": "=2" };
            return (
              "$" +
              ("" + e).replace(/[=:]/g, function (e) {
                return t[e];
              })
            );
          })(e.key)
        : t.toString(36);
    }
    function de(e, t) {
      e.func.call(e.context, t, e.count++);
    }
    function pe(e, t, n) {
      var r = e.result,
        i = e.keyPrefix;
      (e = e.func.call(e.context, t, e.count++)),
        Array.isArray(e)
          ? fe(e, r, n, function (e) {
              return e;
            })
          : null != e &&
            (re(e) &&
              (e = (function (e, t) {
                return {
                  $$typeof: O,
                  type: e.type,
                  key: t,
                  ref: e.ref,
                  props: e.props,
                  _owner: e._owner,
                };
              })(
                e,
                i +
                  (!e.key || (t && t.key === e.key)
                    ? ""
                    : ("" + e.key).replace(ie, "$&/") + "/") +
                  n
              )),
            r.push(e));
    }
    function fe(e, t, n, r, i) {
      var l = "";
      null != n && (l = ("" + n).replace(ie, "$&/") + "/"),
        ue(e, pe, (t = oe(t, l, r, i))),
        ae(t);
    }
    var me = { current: null };
    function he() {
      var e = me.current;
      if (null === e) throw Error(W(321));
      return e;
    }
    (r = {
      map: function (e, t, n) {
        if (null == e) return e;
        var r = [];
        return fe(e, r, null, t, n), r;
      },
      forEach: function (e, t, n) {
        if (null == e) return e;
        ue(e, de, (t = oe(null, null, t, n))), ae(t);
      },
      count: function (e) {
        return ue(
          e,
          function () {
            return null;
          },
          null
        );
      },
      toArray: function (e) {
        var t = [];
        return (
          fe(e, t, null, function (e) {
            return e;
          }),
          t
        );
      },
      only: function (e) {
        if (!re(e)) throw Error(W(143));
        return e;
      },
    }),
      (i = Q),
      (o = F),
      (a = D),
      (s = X),
      (u = z),
      (c = B),
      (d = {
        ReactCurrentDispatcher: me,
        ReactCurrentBatchConfig: { suspense: null },
        ReactCurrentOwner: J,
        IsSomeRendererActing: { current: !1 },
        assign: N,
      }),
      (p = function (e, t, n) {
        if (null == e) throw Error(W(267, e));
        var r = N({}, e.props),
          i = e.key,
          l = e.ref,
          o = e._owner;
        if (null != t) {
          if (
            (void 0 !== t.ref && ((l = t.ref), (o = J.current)),
            void 0 !== t.key && (i = "" + t.key),
            e.type && e.type.defaultProps)
          )
            var a = e.type.defaultProps;
          for (s in t)
            ee.call(t, s) &&
              !te.hasOwnProperty(s) &&
              (r[s] = void 0 === t[s] && void 0 !== a ? a[s] : t[s]);
        }
        var s = arguments.length - 2;
        if (1 === s) r.children = n;
        else if (1 < s) {
          a = Array(s);
          for (var u = 0; u < s; u++) a[u] = arguments[u + 2];
          r.children = a;
        }
        return {
          $$typeof: O,
          type: e.type,
          key: i,
          ref: l,
          props: r,
          _owner: o,
        };
      }),
      (f = function (e, t) {
        return (
          void 0 === t && (t = null),
          ((e = {
            $$typeof: V,
            _calculateChangedBits: t,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }).Provider = { $$typeof: K, _context: e }),
          (e.Consumer = e)
        );
      }),
      (m = ne),
      (h = function (e) {
        var t = ne.bind(null, e);
        return (t.type = e), t;
      }),
      (g = function () {
        return { current: null };
      }),
      (y = function (e) {
        return { $$typeof: U, render: e };
      }),
      (v = re),
      (b = function (e) {
        return { $$typeof: $, _ctor: e, _status: -1, _result: null };
      }),
      (w = function (e, t) {
        return { $$typeof: j, type: e, compare: void 0 === t ? null : t };
      }),
      (E = function (e, t) {
        return he().useCallback(e, t);
      }),
      (k = function (e, t) {
        return he().useContext(e, t);
      }),
      (S = function () {}),
      (x = function (e, t) {
        return he().useEffect(e, t);
      }),
      (P = function (e, t, n) {
        return he().useImperativeHandle(e, t, n);
      }),
      (T = function (e, t) {
        return he().useLayoutEffect(e, t);
      }),
      (_ = function (e, t) {
        return he().useMemo(e, t);
      }),
      (C = function (e, t, n) {
        return he().useReducer(e, t, n);
      }),
      (I = function (e) {
        return he().useRef(e);
      }),
      (M = function (e) {
        return he().useState(e);
      }),
      (L = "16.14.0");
  }),
  l.register("8coUR", function (e, t) {
    var n = Object.getOwnPropertySymbols,
      r = Object.prototype.hasOwnProperty,
      i = Object.prototype.propertyIsEnumerable;
    function l(e) {
      if (null == e)
        throw new TypeError(
          "Object.assign cannot be called with null or undefined"
        );
      return Object(e);
    }
    e.exports = (function () {
      try {
        if (!Object.assign) return !1;
        var e = new String("abc");
        if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
          return !1;
        for (var t = {}, n = 0; n < 10; n++)
          t["_" + String.fromCharCode(n)] = n;
        if (
          "0123456789" !==
          Object.getOwnPropertyNames(t)
            .map(function (e) {
              return t[e];
            })
            .join("")
        )
          return !1;
        var r = {};
        return (
          "abcdefghijklmnopqrst".split("").forEach(function (e) {
            r[e] = e;
          }),
          "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        );
      } catch (e) {
        return !1;
      }
    })()
      ? Object.assign
      : function (e, t) {
          for (var o, a, s = l(e), u = 1; u < arguments.length; u++) {
            for (var c in (o = Object(arguments[u])))
              r.call(o, c) && (s[c] = o[c]);
            if (n) {
              a = n(o);
              for (var d = 0; d < a.length; d++)
                i.call(o, a[d]) && (s[a[d]] = o[a[d]]);
            }
          }
          return s;
        };
  }),
  l.register("Xw6Mv", function (t, n) {
    /** @license React v16.14.0
     * react-dom.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var r, i, o, a, s, u, c, d, p, f, m;
    e(
      t.exports,
      "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",
      () => r,
      (e) => (r = e)
    ),
      e(
        t.exports,
        "createPortal",
        () => i,
        (e) => (i = e)
      ),
      e(
        t.exports,
        "findDOMNode",
        () => o,
        (e) => (o = e)
      ),
      e(
        t.exports,
        "flushSync",
        () => a,
        (e) => (a = e)
      ),
      e(
        t.exports,
        "hydrate",
        () => s,
        (e) => (s = e)
      ),
      e(
        t.exports,
        "render",
        () => u,
        (e) => (u = e)
      ),
      e(
        t.exports,
        "unmountComponentAtNode",
        () => c,
        (e) => (c = e)
      ),
      e(
        t.exports,
        "unstable_batchedUpdates",
        () => d,
        (e) => (d = e)
      ),
      e(
        t.exports,
        "unstable_createPortal",
        () => p,
        (e) => (p = e)
      ),
      e(
        t.exports,
        "unstable_renderSubtreeIntoContainer",
        () => f,
        (e) => (f = e)
      ),
      e(
        t.exports,
        "version",
        () => m,
        (e) => (m = e)
      );
    var h = l("acw62"),
      g = l("8coUR"),
      y = l("fO90s");
    function v(e) {
      for (
        var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
          n = 1;
        n < arguments.length;
        n++
      )
        t += "&args[]=" + encodeURIComponent(arguments[n]);
      return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    if (!h) throw Error(v(227));
    function b(e, t, n, r, i, l, o, a, s) {
      var u = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(n, u);
      } catch (e) {
        this.onError(e);
      }
    }
    var w = !1,
      E = null,
      k = !1,
      S = null,
      x = {
        onError: function (e) {
          (w = !0), (E = e);
        },
      };
    function P(e, t, n, r, i, l, o, a, s) {
      (w = !1), (E = null), b.apply(x, arguments);
    }
    var T = null,
      _ = null,
      C = null;
    function I(e, t, n) {
      var r = e.type || "unknown-event";
      (e.currentTarget = C(n)),
        (function (e, t, n, r, i, l, o, a, s) {
          if ((P.apply(this, arguments), w)) {
            if (!w) throw Error(v(198));
            var u = E;
            (w = !1), (E = null), k || ((k = !0), (S = u));
          }
        })(r, t, void 0, e),
        (e.currentTarget = null);
    }
    var M = null,
      L = {};
    function N() {
      if (M)
        for (var e in L) {
          var t = L[e],
            n = M.indexOf(e);
          if (!(-1 < n)) throw Error(v(96, e));
          if (!O[n]) {
            if (!t.extractEvents) throw Error(v(97, e));
            for (var r in ((O[n] = t), (n = t.eventTypes))) {
              var i = void 0,
                l = n[r],
                o = t,
                a = r;
              if (A.hasOwnProperty(a)) throw Error(v(99, a));
              A[a] = l;
              var s = l.phasedRegistrationNames;
              if (s) {
                for (i in s) s.hasOwnProperty(i) && R(s[i], o, a);
                i = !0;
              } else
                l.registrationName
                  ? (R(l.registrationName, o, a), (i = !0))
                  : (i = !1);
              if (!i) throw Error(v(98, r, e));
            }
          }
        }
    }
    function R(e, t, n) {
      if (F[e]) throw Error(v(100, e));
      (F[e] = t), (z[e] = t.eventTypes[n].dependencies);
    }
    var O = [],
      A = {},
      F = {},
      z = {};
    function D(e) {
      var t,
        n = !1;
      for (t in e)
        if (e.hasOwnProperty(t)) {
          var r = e[t];
          if (!L.hasOwnProperty(t) || L[t] !== r) {
            if (L[t]) throw Error(v(102, t));
            (L[t] = r), (n = !0);
          }
        }
      n && N();
    }
    var K = !(
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
      ),
      V = null,
      U = null,
      B = null;
    function j(e) {
      if ((e = _(e))) {
        if ("function" != typeof V) throw Error(v(280));
        var t = e.stateNode;
        t && ((t = T(t)), V(e.stateNode, e.type, t));
      }
    }
    function $(e) {
      U ? (B ? B.push(e) : (B = [e])) : (U = e);
    }
    function H() {
      if (U) {
        var e = U,
          t = B;
        if (((B = U = null), j(e), t)) for (e = 0; e < t.length; e++) j(t[e]);
      }
    }
    function W(e, t) {
      return e(t);
    }
    function q(e, t, n, r, i) {
      return e(t, n, r, i);
    }
    function G() {}
    var Q = W,
      Y = !1,
      X = !1;
    function Z() {
      (null === U && null === B) || (G(), H());
    }
    function J(e, t, n) {
      if (X) return e(t, n);
      X = !0;
      try {
        return Q(e, t, n);
      } finally {
        (X = !1), Z();
      }
    }
    var ee =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      te = Object.prototype.hasOwnProperty,
      ne = {},
      re = {};
    function ie(e, t, n, r, i, l) {
      (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
        (this.attributeName = r),
        (this.attributeNamespace = i),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = l);
    }
    var le = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
      .split(" ")
      .forEach(function (e) {
        le[e] = new ie(e, 0, !1, e, null, !1);
      }),
      [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"],
      ].forEach(function (e) {
        var t = e[0];
        le[t] = new ie(t, 1, !1, e[1], null, !1);
      }),
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
        e
      ) {
        le[e] = new ie(e, 2, !1, e.toLowerCase(), null, !1);
      }),
      [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha",
      ].forEach(function (e) {
        le[e] = new ie(e, 2, !1, e, null, !1);
      }),
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
        .split(" ")
        .forEach(function (e) {
          le[e] = new ie(e, 3, !1, e.toLowerCase(), null, !1);
        }),
      ["checked", "multiple", "muted", "selected"].forEach(function (e) {
        le[e] = new ie(e, 3, !0, e, null, !1);
      }),
      ["capture", "download"].forEach(function (e) {
        le[e] = new ie(e, 4, !1, e, null, !1);
      }),
      ["cols", "rows", "size", "span"].forEach(function (e) {
        le[e] = new ie(e, 6, !1, e, null, !1);
      }),
      ["rowSpan", "start"].forEach(function (e) {
        le[e] = new ie(e, 5, !1, e.toLowerCase(), null, !1);
      });
    var oe = /[\-:]([a-z])/g;
    function ae(e) {
      return e[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(oe, ae);
        le[t] = new ie(t, 1, !1, e, null, !1);
      }),
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
        .split(" ")
        .forEach(function (e) {
          var t = e.replace(oe, ae);
          le[t] = new ie(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1);
        }),
      ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
        var t = e.replace(oe, ae);
        le[t] = new ie(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1);
      }),
      ["tabIndex", "crossOrigin"].forEach(function (e) {
        le[e] = new ie(e, 1, !1, e.toLowerCase(), null, !1);
      }),
      (le.xlinkHref = new ie(
        "xlinkHref",
        1,
        !1,
        "xlink:href",
        "http://www.w3.org/1999/xlink",
        !0
      )),
      ["src", "href", "action", "formAction"].forEach(function (e) {
        le[e] = new ie(e, 1, !1, e.toLowerCase(), null, !0);
      });
    var se = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ue(e, t, n, r) {
      var i = le.hasOwnProperty(t) ? le[t] : null;
      (null !== i
        ? 0 === i.type
        : !r &&
          2 < t.length &&
          ("o" === t[0] || "O" === t[0]) &&
          ("n" === t[1] || "N" === t[1])) ||
        ((function (e, t, n, r) {
          if (
            null == t ||
            (function (e, t, n, r) {
              if (null !== n && 0 === n.type) return !1;
              switch (typeof t) {
                case "function":
                case "symbol":
                  return !0;
                case "boolean":
                  return (
                    !r &&
                    (null !== n
                      ? !n.acceptsBooleans
                      : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                        "aria-" !== e)
                  );
                default:
                  return !1;
              }
            })(e, t, n, r)
          )
            return !0;
          if (r) return !1;
          if (null !== n)
            switch (n.type) {
              case 3:
                return !t;
              case 4:
                return !1 === t;
              case 5:
                return isNaN(t);
              case 6:
                return isNaN(t) || 1 > t;
            }
          return !1;
        })(t, n, i, r) && (n = null),
        r || null === i
          ? (function (e) {
              return (
                !!te.call(re, e) ||
                (!te.call(ne, e) &&
                  (ee.test(e) ? (re[e] = !0) : ((ne[e] = !0), !1)))
              );
            })(t) &&
            (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
          : i.mustUseProperty
          ? (e[i.propertyName] = null === n ? 3 !== i.type && "" : n)
          : ((t = i.attributeName),
            (r = i.attributeNamespace),
            null === n
              ? e.removeAttribute(t)
              : ((n =
                  3 === (i = i.type) || (4 === i && !0 === n) ? "" : "" + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
    }
    se.hasOwnProperty("ReactCurrentDispatcher") ||
      (se.ReactCurrentDispatcher = { current: null }),
      se.hasOwnProperty("ReactCurrentBatchConfig") ||
        (se.ReactCurrentBatchConfig = { suspense: null });
    var ce = /^(.*)[\\\/]/,
      de = "function" == typeof Symbol && Symbol.for,
      pe = de ? Symbol.for("react.element") : 60103,
      fe = de ? Symbol.for("react.portal") : 60106,
      me = de ? Symbol.for("react.fragment") : 60107,
      he = de ? Symbol.for("react.strict_mode") : 60108,
      ge = de ? Symbol.for("react.profiler") : 60114,
      ye = de ? Symbol.for("react.provider") : 60109,
      ve = de ? Symbol.for("react.context") : 60110,
      be = de ? Symbol.for("react.concurrent_mode") : 60111,
      we = de ? Symbol.for("react.forward_ref") : 60112,
      Ee = de ? Symbol.for("react.suspense") : 60113,
      ke = de ? Symbol.for("react.suspense_list") : 60120,
      Se = de ? Symbol.for("react.memo") : 60115,
      xe = de ? Symbol.for("react.lazy") : 60116,
      Pe = de ? Symbol.for("react.block") : 60121,
      Te = "function" == typeof Symbol && Symbol.iterator;
    function _e(e) {
      return null === e || "object" != typeof e
        ? null
        : "function" == typeof (e = (Te && e[Te]) || e["@@iterator"])
        ? e
        : null;
    }
    function Ce(e) {
      if (null == e) return null;
      if ("function" == typeof e) return e.displayName || e.name || null;
      if ("string" == typeof e) return e;
      switch (e) {
        case me:
          return "Fragment";
        case fe:
          return "Portal";
        case ge:
          return "Profiler";
        case he:
          return "StrictMode";
        case Ee:
          return "Suspense";
        case ke:
          return "SuspenseList";
      }
      if ("object" == typeof e)
        switch (e.$$typeof) {
          case ve:
            return "Context.Consumer";
          case ye:
            return "Context.Provider";
          case we:
            var t = e.render;
            return (
              (t = t.displayName || t.name || ""),
              e.displayName ||
                ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
            );
          case Se:
            return Ce(e.type);
          case Pe:
            return Ce(e.render);
          case xe:
            if ((e = 1 === e._status ? e._result : null)) return Ce(e);
        }
      return null;
    }
    function Ie(e) {
      var t = "";
      do {
        e: switch (e.tag) {
          case 3:
          case 4:
          case 6:
          case 7:
          case 10:
          case 9:
            var n = "";
            break e;
          default:
            var r = e._debugOwner,
              i = e._debugSource,
              l = Ce(e.type);
            (n = null),
              r && (n = Ce(r.type)),
              (r = l),
              (l = ""),
              i
                ? (l =
                    " (at " +
                    i.fileName.replace(ce, "") +
                    ":" +
                    i.lineNumber +
                    ")")
                : n && (l = " (created by " + n + ")"),
              (n = "\n    in " + (r || "Unknown") + l);
        }
        (t += n), (e = e.return);
      } while (e);
      return t;
    }
    function Me(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "object":
        case "string":
        case "undefined":
          return e;
        default:
          return "";
      }
    }
    function Le(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        "input" === e.toLowerCase() &&
        ("checkbox" === t || "radio" === t)
      );
    }
    function Ne(e) {
      e._valueTracker ||
        (e._valueTracker = (function (e) {
          var t = Le(e) ? "checked" : "value",
            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            r = "" + e[t];
          if (
            !e.hasOwnProperty(t) &&
            void 0 !== n &&
            "function" == typeof n.get &&
            "function" == typeof n.set
          ) {
            var i = n.get,
              l = n.set;
            return (
              Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                  return i.call(this);
                },
                set: function (e) {
                  (r = "" + e), l.call(this, e);
                },
              }),
              Object.defineProperty(e, t, { enumerable: n.enumerable }),
              {
                getValue: function () {
                  return r;
                },
                setValue: function (e) {
                  r = "" + e;
                },
                stopTracking: function () {
                  (e._valueTracker = null), delete e[t];
                },
              }
            );
          }
        })(e));
    }
    function Re(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = "";
      return (
        e && (r = Le(e) ? (e.checked ? "true" : "false") : e.value),
        (e = r) !== n && (t.setValue(e), !0)
      );
    }
    function Oe(e, t) {
      var n = t.checked;
      return g({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != n ? n : e._wrapperState.initialChecked,
      });
    }
    function Ae(e, t) {
      var n = null == t.defaultValue ? "" : t.defaultValue,
        r = null != t.checked ? t.checked : t.defaultChecked;
      (n = Me(null != t.value ? t.value : n)),
        (e._wrapperState = {
          initialChecked: r,
          initialValue: n,
          controlled:
            "checkbox" === t.type || "radio" === t.type
              ? null != t.checked
              : null != t.value,
        });
    }
    function Fe(e, t) {
      null != (t = t.checked) && ue(e, "checked", t, !1);
    }
    function ze(e, t) {
      Fe(e, t);
      var n = Me(t.value),
        r = t.type;
      if (null != n)
        "number" === r
          ? ((0 === n && "" === e.value) || e.value != n) && (e.value = "" + n)
          : e.value !== "" + n && (e.value = "" + n);
      else if ("submit" === r || "reset" === r)
        return void e.removeAttribute("value");
      t.hasOwnProperty("value")
        ? Ke(e, t.type, n)
        : t.hasOwnProperty("defaultValue") && Ke(e, t.type, Me(t.defaultValue)),
        null == t.checked &&
          null != t.defaultChecked &&
          (e.defaultChecked = !!t.defaultChecked);
    }
    function De(e, t, n) {
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (
          !(
            ("submit" !== r && "reset" !== r) ||
            (void 0 !== t.value && null !== t.value)
          )
        )
          return;
        (t = "" + e._wrapperState.initialValue),
          n || t === e.value || (e.value = t),
          (e.defaultValue = t);
      }
      "" !== (n = e.name) && (e.name = ""),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        "" !== n && (e.name = n);
    }
    function Ke(e, t, n) {
      ("number" === t && e.ownerDocument.activeElement === e) ||
        (null == n
          ? (e.defaultValue = "" + e._wrapperState.initialValue)
          : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
    }
    function Ve(e, t) {
      return (
        (e = g({ children: void 0 }, t)),
        (t = (function (e) {
          var t = "";
          return (
            h.Children.forEach(e, function (e) {
              null != e && (t += e);
            }),
            t
          );
        })(t.children)) && (e.children = t),
        e
      );
    }
    function Ue(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
          (i = t.hasOwnProperty("$" + e[n].value)),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0);
      } else {
        for (n = "" + Me(n), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === n)
            return (
              (e[i].selected = !0), void (r && (e[i].defaultSelected = !0))
            );
          null !== t || e[i].disabled || (t = e[i]);
        }
        null !== t && (t.selected = !0);
      }
    }
    function Be(e, t) {
      if (null != t.dangerouslySetInnerHTML) throw Error(v(91));
      return g({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue,
      });
    }
    function je(e, t) {
      var n = t.value;
      if (null == n) {
        if (((n = t.children), (t = t.defaultValue), null != n)) {
          if (null != t) throw Error(v(92));
          if (Array.isArray(n)) {
            if (!(1 >= n.length)) throw Error(v(93));
            n = n[0];
          }
          t = n;
        }
        null == t && (t = ""), (n = t);
      }
      e._wrapperState = { initialValue: Me(n) };
    }
    function $e(e, t) {
      var n = Me(t.value),
        r = Me(t.defaultValue);
      null != n &&
        ((n = "" + n) !== e.value && (e.value = n),
        null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
        null != r && (e.defaultValue = "" + r);
    }
    function He(e) {
      var t = e.textContent;
      t === e._wrapperState.initialValue &&
        "" !== t &&
        null !== t &&
        (e.value = t);
    }
    var We = "http://www.w3.org/1999/xhtml",
      qe = "http://www.w3.org/2000/svg";
    function Ge(e) {
      switch (e) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function Qe(e, t) {
      return null == e || "http://www.w3.org/1999/xhtml" === e
        ? Ge(t)
        : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
        ? "http://www.w3.org/1999/xhtml"
        : e;
    }
    var Ye,
      Xe,
      Ze =
        ((Xe = function (e, t) {
          if (e.namespaceURI !== qe || "innerHTML" in e) e.innerHTML = t;
          else {
            for (
              (Ye = Ye || document.createElement("div")).innerHTML =
                "<svg>" + t.valueOf().toString() + "</svg>",
                t = Ye.firstChild;
              e.firstChild;

            )
              e.removeChild(e.firstChild);
            for (; t.firstChild; ) e.appendChild(t.firstChild);
          }
        }),
        "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
          ? function (e, t, n, r) {
              MSApp.execUnsafeLocalFunction(function () {
                return Xe(e, t);
              });
            }
          : Xe);
    function Je(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && 3 === n.nodeType)
          return void (n.nodeValue = t);
      }
      e.textContent = t;
    }
    function et(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n["Webkit" + e] = "webkit" + t),
        (n["Moz" + e] = "moz" + t),
        n
      );
    }
    var tt = {
        animationend: et("Animation", "AnimationEnd"),
        animationiteration: et("Animation", "AnimationIteration"),
        animationstart: et("Animation", "AnimationStart"),
        transitionend: et("Transition", "TransitionEnd"),
      },
      nt = {},
      rt = {};
    function it(e) {
      if (nt[e]) return nt[e];
      if (!tt[e]) return e;
      var t,
        n = tt[e];
      for (t in n) if (n.hasOwnProperty(t) && t in rt) return (nt[e] = n[t]);
      return e;
    }
    K &&
      ((rt = document.createElement("div").style),
      "AnimationEvent" in window ||
        (delete tt.animationend.animation,
        delete tt.animationiteration.animation,
        delete tt.animationstart.animation),
      "TransitionEvent" in window || delete tt.transitionend.transition);
    var lt = it("animationend"),
      ot = it("animationiteration"),
      at = it("animationstart"),
      st = it("transitionend"),
      ut =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
          " "
        ),
      ct = new ("function" == typeof WeakMap ? WeakMap : Map)();
    function dt(e) {
      var t = ct.get(e);
      return void 0 === t && ((t = new Map()), ct.set(e, t)), t;
    }
    function pt(e) {
      var t = e,
        n = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do {
          0 != (1026 & (t = e).effectTag) && (n = t.return), (e = t.return);
        } while (e);
      }
      return 3 === t.tag ? n : null;
    }
    function ft(e) {
      if (13 === e.tag) {
        var t = e.memoizedState;
        if (
          (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
          null !== t)
        )
          return t.dehydrated;
      }
      return null;
    }
    function mt(e) {
      if (pt(e) !== e) throw Error(v(188));
    }
    function ht(e) {
      if (
        ((e = (function (e) {
          var t = e.alternate;
          if (!t) {
            if (null === (t = pt(e))) throw Error(v(188));
            return t !== e ? null : e;
          }
          for (var n = e, r = t; ; ) {
            var i = n.return;
            if (null === i) break;
            var l = i.alternate;
            if (null === l) {
              if (null !== (r = i.return)) {
                n = r;
                continue;
              }
              break;
            }
            if (i.child === l.child) {
              for (l = i.child; l; ) {
                if (l === n) return mt(i), e;
                if (l === r) return mt(i), t;
                l = l.sibling;
              }
              throw Error(v(188));
            }
            if (n.return !== r.return) (n = i), (r = l);
            else {
              for (var o = !1, a = i.child; a; ) {
                if (a === n) {
                  (o = !0), (n = i), (r = l);
                  break;
                }
                if (a === r) {
                  (o = !0), (r = i), (n = l);
                  break;
                }
                a = a.sibling;
              }
              if (!o) {
                for (a = l.child; a; ) {
                  if (a === n) {
                    (o = !0), (n = l), (r = i);
                    break;
                  }
                  if (a === r) {
                    (o = !0), (r = l), (n = i);
                    break;
                  }
                  a = a.sibling;
                }
                if (!o) throw Error(v(189));
              }
            }
            if (n.alternate !== r) throw Error(v(190));
          }
          if (3 !== n.tag) throw Error(v(188));
          return n.stateNode.current === n ? e : t;
        })(e)),
        !e)
      )
        return null;
      for (var t = e; ; ) {
        if (5 === t.tag || 6 === t.tag) return t;
        if (t.child) (t.child.return = t), (t = t.child);
        else {
          if (t === e) break;
          for (; !t.sibling; ) {
            if (!t.return || t.return === e) return null;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      }
      return null;
    }
    function gt(e, t) {
      if (null == t) throw Error(v(30));
      return null == e
        ? t
        : Array.isArray(e)
        ? Array.isArray(t)
          ? (e.push.apply(e, t), e)
          : (e.push(t), e)
        : Array.isArray(t)
        ? [e].concat(t)
        : [e, t];
    }
    function yt(e, t, n) {
      Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e);
    }
    var vt = null;
    function bt(e) {
      if (e) {
        var t = e._dispatchListeners,
          n = e._dispatchInstances;
        if (Array.isArray(t))
          for (var r = 0; r < t.length && !e.isPropagationStopped(); r++)
            I(e, t[r], n[r]);
        else t && I(e, t, n);
        (e._dispatchListeners = null),
          (e._dispatchInstances = null),
          e.isPersistent() || e.constructor.release(e);
      }
    }
    function wt(e) {
      if ((null !== e && (vt = gt(vt, e)), (e = vt), (vt = null), e)) {
        if ((yt(e, bt), vt)) throw Error(v(95));
        if (k) throw ((e = S), (k = !1), (S = null), e);
      }
    }
    function Et(e) {
      return (
        (e = e.target || e.srcElement || window).correspondingUseElement &&
          (e = e.correspondingUseElement),
        3 === e.nodeType ? e.parentNode : e
      );
    }
    function kt(e) {
      if (!K) return !1;
      var t = (e = "on" + e) in document;
      return (
        t ||
          ((t = document.createElement("div")).setAttribute(e, "return;"),
          (t = "function" == typeof t[e])),
        t
      );
    }
    var St = [];
    function xt(e) {
      (e.topLevelType = null),
        (e.nativeEvent = null),
        (e.targetInst = null),
        (e.ancestors.length = 0),
        10 > St.length && St.push(e);
    }
    function Pt(e, t, n, r) {
      if (St.length) {
        var i = St.pop();
        return (
          (i.topLevelType = e),
          (i.eventSystemFlags = r),
          (i.nativeEvent = t),
          (i.targetInst = n),
          i
        );
      }
      return {
        topLevelType: e,
        eventSystemFlags: r,
        nativeEvent: t,
        targetInst: n,
        ancestors: [],
      };
    }
    function Tt(e) {
      var t = e.targetInst,
        n = t;
      do {
        if (!n) {
          e.ancestors.push(n);
          break;
        }
        var r = n;
        if (3 === r.tag) r = r.stateNode.containerInfo;
        else {
          for (; r.return; ) r = r.return;
          r = 3 !== r.tag ? null : r.stateNode.containerInfo;
        }
        if (!r) break;
        (5 !== (t = n.tag) && 6 !== t) || e.ancestors.push(n), (n = jn(r));
      } while (n);
      for (n = 0; n < e.ancestors.length; n++) {
        t = e.ancestors[n];
        var i = Et(e.nativeEvent);
        r = e.topLevelType;
        var l = e.nativeEvent,
          o = e.eventSystemFlags;
        0 === n && (o |= 64);
        for (var a = null, s = 0; s < O.length; s++) {
          var u = O[s];
          u && (u = u.extractEvents(r, t, l, i, o)) && (a = gt(a, u));
        }
        wt(a);
      }
    }
    function _t(e, t, n) {
      if (!n.has(e)) {
        switch (e) {
          case "scroll":
            sn(t, "scroll", !0);
            break;
          case "focus":
          case "blur":
            sn(t, "focus", !0),
              sn(t, "blur", !0),
              n.set("blur", null),
              n.set("focus", null);
            break;
          case "cancel":
          case "close":
            kt(e) && sn(t, e, !0);
            break;
          case "invalid":
          case "submit":
          case "reset":
            break;
          default:
            -1 === ut.indexOf(e) && an(e, t);
        }
        n.set(e, null);
      }
    }
    var Ct,
      It,
      Mt,
      Lt = !1,
      Nt = [],
      Rt = null,
      Ot = null,
      At = null,
      Ft = new Map(),
      zt = new Map(),
      Dt = [],
      Kt =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(
          " "
        ),
      Vt =
        "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(
          " "
        );
    function Ut(e, t, n, r, i) {
      return {
        blockedOn: e,
        topLevelType: t,
        eventSystemFlags: 32 | n,
        nativeEvent: i,
        container: r,
      };
    }
    function Bt(e, t) {
      switch (e) {
        case "focus":
        case "blur":
          Rt = null;
          break;
        case "dragenter":
        case "dragleave":
          Ot = null;
          break;
        case "mouseover":
        case "mouseout":
          At = null;
          break;
        case "pointerover":
        case "pointerout":
          Ft.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          zt.delete(t.pointerId);
      }
    }
    function jt(e, t, n, r, i, l) {
      return null === e || e.nativeEvent !== l
        ? ((e = Ut(t, n, r, i, l)),
          null !== t && null !== (t = $n(t)) && It(t),
          e)
        : ((e.eventSystemFlags |= r), e);
    }
    function $t(e) {
      var t = jn(e.target);
      if (null !== t) {
        var n = pt(t);
        if (null !== n)
          if (13 === (t = n.tag)) {
            if (null !== (t = ft(n)))
              return (
                (e.blockedOn = t),
                void y.unstable_runWithPriority(e.priority, function () {
                  Mt(n);
                })
              );
          } else if (3 === t && n.stateNode.hydrate)
            return void (e.blockedOn =
              3 === n.tag ? n.stateNode.containerInfo : null);
      }
      e.blockedOn = null;
    }
    function Ht(e) {
      if (null !== e.blockedOn) return !1;
      var t = pn(
        e.topLevelType,
        e.eventSystemFlags,
        e.container,
        e.nativeEvent
      );
      if (null !== t) {
        var n = $n(t);
        return null !== n && It(n), (e.blockedOn = t), !1;
      }
      return !0;
    }
    function Wt(e, t, n) {
      Ht(e) && n.delete(t);
    }
    function qt() {
      for (Lt = !1; 0 < Nt.length; ) {
        var e = Nt[0];
        if (null !== e.blockedOn) {
          null !== (e = $n(e.blockedOn)) && Ct(e);
          break;
        }
        var t = pn(
          e.topLevelType,
          e.eventSystemFlags,
          e.container,
          e.nativeEvent
        );
        null !== t ? (e.blockedOn = t) : Nt.shift();
      }
      null !== Rt && Ht(Rt) && (Rt = null),
        null !== Ot && Ht(Ot) && (Ot = null),
        null !== At && Ht(At) && (At = null),
        Ft.forEach(Wt),
        zt.forEach(Wt);
    }
    function Gt(e, t) {
      e.blockedOn === t &&
        ((e.blockedOn = null),
        Lt ||
          ((Lt = !0),
          y.unstable_scheduleCallback(y.unstable_NormalPriority, qt)));
    }
    function Qt(e) {
      function t(t) {
        return Gt(t, e);
      }
      if (0 < Nt.length) {
        Gt(Nt[0], e);
        for (var n = 1; n < Nt.length; n++) {
          var r = Nt[n];
          r.blockedOn === e && (r.blockedOn = null);
        }
      }
      for (
        null !== Rt && Gt(Rt, e),
          null !== Ot && Gt(Ot, e),
          null !== At && Gt(At, e),
          Ft.forEach(t),
          zt.forEach(t),
          n = 0;
        n < Dt.length;
        n++
      )
        (r = Dt[n]).blockedOn === e && (r.blockedOn = null);
      for (; 0 < Dt.length && null === (n = Dt[0]).blockedOn; )
        $t(n), null === n.blockedOn && Dt.shift();
    }
    var Yt = {},
      Xt = new Map(),
      Zt = new Map(),
      Jt = [
        "abort",
        "abort",
        lt,
        "animationEnd",
        ot,
        "animationIteration",
        at,
        "animationStart",
        "canplay",
        "canPlay",
        "canplaythrough",
        "canPlayThrough",
        "durationchange",
        "durationChange",
        "emptied",
        "emptied",
        "encrypted",
        "encrypted",
        "ended",
        "ended",
        "error",
        "error",
        "gotpointercapture",
        "gotPointerCapture",
        "load",
        "load",
        "loadeddata",
        "loadedData",
        "loadedmetadata",
        "loadedMetadata",
        "loadstart",
        "loadStart",
        "lostpointercapture",
        "lostPointerCapture",
        "playing",
        "playing",
        "progress",
        "progress",
        "seeking",
        "seeking",
        "stalled",
        "stalled",
        "suspend",
        "suspend",
        "timeupdate",
        "timeUpdate",
        st,
        "transitionEnd",
        "waiting",
        "waiting",
      ];
    function en(e, t) {
      for (var n = 0; n < e.length; n += 2) {
        var r = e[n],
          i = e[n + 1],
          l = "on" + (i[0].toUpperCase() + i.slice(1));
        (l = {
          phasedRegistrationNames: { bubbled: l, captured: l + "Capture" },
          dependencies: [r],
          eventPriority: t,
        }),
          Zt.set(r, t),
          Xt.set(r, l),
          (Yt[i] = l);
      }
    }
    en(
      "blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
        " "
      ),
      0
    ),
      en(
        "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
          " "
        ),
        1
      ),
      en(Jt, 2);
    for (
      var tn =
          "change selectionchange textInput compositionstart compositionend compositionupdate".split(
            " "
          ),
        nn = 0;
      nn < tn.length;
      nn++
    )
      Zt.set(tn[nn], 0);
    var rn = y.unstable_UserBlockingPriority,
      ln = y.unstable_runWithPriority,
      on = !0;
    function an(e, t) {
      sn(t, e, !1);
    }
    function sn(e, t, n) {
      var r = Zt.get(t);
      switch (void 0 === r ? 2 : r) {
        case 0:
          r = un.bind(null, t, 1, e);
          break;
        case 1:
          r = cn.bind(null, t, 1, e);
          break;
        default:
          r = dn.bind(null, t, 1, e);
      }
      n ? e.addEventListener(t, r, !0) : e.addEventListener(t, r, !1);
    }
    function un(e, t, n, r) {
      Y || G();
      var i = dn,
        l = Y;
      Y = !0;
      try {
        q(i, e, t, n, r);
      } finally {
        (Y = l) || Z();
      }
    }
    function cn(e, t, n, r) {
      ln(rn, dn.bind(null, e, t, n, r));
    }
    function dn(e, t, n, r) {
      if (on)
        if (0 < Nt.length && -1 < Kt.indexOf(e))
          (e = Ut(null, e, t, n, r)), Nt.push(e);
        else {
          var i = pn(e, t, n, r);
          if (null === i) Bt(e, r);
          else if (-1 < Kt.indexOf(e)) (e = Ut(i, e, t, n, r)), Nt.push(e);
          else if (
            !(function (e, t, n, r, i) {
              switch (t) {
                case "focus":
                  return (Rt = jt(Rt, e, t, n, r, i)), !0;
                case "dragenter":
                  return (Ot = jt(Ot, e, t, n, r, i)), !0;
                case "mouseover":
                  return (At = jt(At, e, t, n, r, i)), !0;
                case "pointerover":
                  var l = i.pointerId;
                  return Ft.set(l, jt(Ft.get(l) || null, e, t, n, r, i)), !0;
                case "gotpointercapture":
                  return (
                    (l = i.pointerId),
                    zt.set(l, jt(zt.get(l) || null, e, t, n, r, i)),
                    !0
                  );
              }
              return !1;
            })(i, e, t, n, r)
          ) {
            Bt(e, r), (e = Pt(e, r, null, t));
            try {
              J(Tt, e);
            } finally {
              xt(e);
            }
          }
        }
    }
    function pn(e, t, n, r) {
      if (null !== (n = jn((n = Et(r))))) {
        var i = pt(n);
        if (null === i) n = null;
        else {
          var l = i.tag;
          if (13 === l) {
            if (null !== (n = ft(i))) return n;
            n = null;
          } else if (3 === l) {
            if (i.stateNode.hydrate)
              return 3 === i.tag ? i.stateNode.containerInfo : null;
            n = null;
          } else i !== n && (n = null);
        }
      }
      e = Pt(e, r, n, t);
      try {
        J(Tt, e);
      } finally {
        xt(e);
      }
      return null;
    }
    var fn = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      },
      mn = ["Webkit", "ms", "Moz", "O"];
    function hn(e, t, n) {
      return null == t || "boolean" == typeof t || "" === t
        ? ""
        : n ||
          "number" != typeof t ||
          0 === t ||
          (fn.hasOwnProperty(e) && fn[e])
        ? ("" + t).trim()
        : t + "px";
    }
    function gn(e, t) {
      for (var n in ((e = e.style), t))
        if (t.hasOwnProperty(n)) {
          var r = 0 === n.indexOf("--"),
            i = hn(n, t[n], r);
          "float" === n && (n = "cssFloat"),
            r ? e.setProperty(n, i) : (e[n] = i);
        }
    }
    Object.keys(fn).forEach(function (e) {
      mn.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (fn[t] = fn[e]);
      });
    });
    var yn = g(
      { menuitem: !0 },
      {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      }
    );
    function vn(e, t) {
      if (t) {
        if (yn[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
          throw Error(v(137, e, ""));
        if (null != t.dangerouslySetInnerHTML) {
          if (null != t.children) throw Error(v(60));
          if (
            "object" != typeof t.dangerouslySetInnerHTML ||
            !("__html" in t.dangerouslySetInnerHTML)
          )
            throw Error(v(61));
        }
        if (null != t.style && "object" != typeof t.style)
          throw Error(v(62, ""));
      }
    }
    function bn(e, t) {
      if (-1 === e.indexOf("-")) return "string" == typeof t.is;
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var wn = We;
    function En(e, t) {
      var n = dt(
        (e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument)
      );
      t = z[t];
      for (var r = 0; r < t.length; r++) _t(t[r], e, n);
    }
    function kn() {}
    function Sn(e) {
      if (
        void 0 ===
        (e = e || ("undefined" != typeof document ? document : void 0))
      )
        return null;
      try {
        return e.activeElement || e.body;
      } catch (t) {
        return e.body;
      }
    }
    function xn(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function Pn(e, t) {
      var n,
        r = xn(e);
      for (e = 0; r; ) {
        if (3 === r.nodeType) {
          if (((n = e + r.textContent.length), e <= t && n >= t))
            return { node: r, offset: t - e };
          e = n;
        }
        e: {
          for (; r; ) {
            if (r.nextSibling) {
              r = r.nextSibling;
              break e;
            }
            r = r.parentNode;
          }
          r = void 0;
        }
        r = xn(r);
      }
    }
    function Tn(e, t) {
      return (
        !(!e || !t) &&
        (e === t ||
          ((!e || 3 !== e.nodeType) &&
            (t && 3 === t.nodeType
              ? Tn(e, t.parentNode)
              : "contains" in e
              ? e.contains(t)
              : !!e.compareDocumentPosition &&
                !!(16 & e.compareDocumentPosition(t)))))
      );
    }
    function _n() {
      for (var e = window, t = Sn(); t instanceof e.HTMLIFrameElement; ) {
        try {
          var n = "string" == typeof t.contentWindow.location.href;
        } catch (e) {
          n = !1;
        }
        if (!n) break;
        t = Sn((e = t.contentWindow).document);
      }
      return t;
    }
    function Cn(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        (("input" === t &&
          ("text" === e.type ||
            "search" === e.type ||
            "tel" === e.type ||
            "url" === e.type ||
            "password" === e.type)) ||
          "textarea" === t ||
          "true" === e.contentEditable)
      );
    }
    var In = "$?",
      Mn = "$!",
      Ln = null,
      Nn = null;
    function Rn(e, t) {
      switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!t.autoFocus;
      }
      return !1;
    }
    function On(e, t) {
      return (
        "textarea" === e ||
        "option" === e ||
        "noscript" === e ||
        "string" == typeof t.children ||
        "number" == typeof t.children ||
        ("object" == typeof t.dangerouslySetInnerHTML &&
          null !== t.dangerouslySetInnerHTML &&
          null != t.dangerouslySetInnerHTML.__html)
      );
    }
    var An = "function" == typeof setTimeout ? setTimeout : void 0,
      Fn = "function" == typeof clearTimeout ? clearTimeout : void 0;
    function zn(e) {
      for (; null != e; e = e.nextSibling) {
        var t = e.nodeType;
        if (1 === t || 3 === t) break;
      }
      return e;
    }
    function Dn(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (8 === e.nodeType) {
          var n = e.data;
          if ("$" === n || n === Mn || n === In) {
            if (0 === t) return e;
            t--;
          } else "/$" === n && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    var Kn = Math.random().toString(36).slice(2),
      Vn = "__reactInternalInstance$" + Kn,
      Un = "__reactEventHandlers$" + Kn,
      Bn = "__reactContainere$" + Kn;
    function jn(e) {
      var t = e[Vn];
      if (t) return t;
      for (var n = e.parentNode; n; ) {
        if ((t = n[Bn] || n[Vn])) {
          if (
            ((n = t.alternate),
            null !== t.child || (null !== n && null !== n.child))
          )
            for (e = Dn(e); null !== e; ) {
              if ((n = e[Vn])) return n;
              e = Dn(e);
            }
          return t;
        }
        n = (e = n).parentNode;
      }
      return null;
    }
    function $n(e) {
      return !(e = e[Vn] || e[Bn]) ||
        (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
        ? null
        : e;
    }
    function Hn(e) {
      if (5 === e.tag || 6 === e.tag) return e.stateNode;
      throw Error(v(33));
    }
    function Wn(e) {
      return e[Un] || null;
    }
    function qn(e) {
      do {
        e = e.return;
      } while (e && 5 !== e.tag);
      return e || null;
    }
    function Gn(e, t) {
      var n = e.stateNode;
      if (!n) return null;
      var r = T(n);
      if (!r) return null;
      n = r[t];
      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (r = !r.disabled) ||
            (r = !(
              "button" === (e = e.type) ||
              "input" === e ||
              "select" === e ||
              "textarea" === e
            )),
            (e = !r);
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && "function" != typeof n) throw Error(v(231, t, typeof n));
      return n;
    }
    function Qn(e, t, n) {
      (t = Gn(e, n.dispatchConfig.phasedRegistrationNames[t])) &&
        ((n._dispatchListeners = gt(n._dispatchListeners, t)),
        (n._dispatchInstances = gt(n._dispatchInstances, e)));
    }
    function Yn(e) {
      if (e && e.dispatchConfig.phasedRegistrationNames) {
        for (var t = e._targetInst, n = []; t; ) n.push(t), (t = qn(t));
        for (t = n.length; 0 < t--; ) Qn(n[t], "captured", e);
        for (t = 0; t < n.length; t++) Qn(n[t], "bubbled", e);
      }
    }
    function Xn(e, t, n) {
      e &&
        n &&
        n.dispatchConfig.registrationName &&
        (t = Gn(e, n.dispatchConfig.registrationName)) &&
        ((n._dispatchListeners = gt(n._dispatchListeners, t)),
        (n._dispatchInstances = gt(n._dispatchInstances, e)));
    }
    function Zn(e) {
      e && e.dispatchConfig.registrationName && Xn(e._targetInst, null, e);
    }
    function Jn(e) {
      yt(e, Yn);
    }
    var er = null,
      tr = null,
      nr = null;
    function rr() {
      if (nr) return nr;
      var e,
        t,
        n = tr,
        r = n.length,
        i = "value" in er ? er.value : er.textContent,
        l = i.length;
      for (e = 0; e < r && n[e] === i[e]; e++);
      var o = r - e;
      for (t = 1; t <= o && n[r - t] === i[l - t]; t++);
      return (nr = i.slice(e, 1 < t ? 1 - t : void 0));
    }
    function ir() {
      return !0;
    }
    function lr() {
      return !1;
    }
    function or(e, t, n, r) {
      for (var i in ((this.dispatchConfig = e),
      (this._targetInst = t),
      (this.nativeEvent = n),
      (e = this.constructor.Interface)))
        e.hasOwnProperty(i) &&
          ((t = e[i])
            ? (this[i] = t(n))
            : "target" === i
            ? (this.target = r)
            : (this[i] = n[i]));
      return (
        (this.isDefaultPrevented = (
          null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue
        )
          ? ir
          : lr),
        (this.isPropagationStopped = lr),
        this
      );
    }
    function ar(e, t, n, r) {
      if (this.eventPool.length) {
        var i = this.eventPool.pop();
        return this.call(i, e, t, n, r), i;
      }
      return new this(e, t, n, r);
    }
    function sr(e) {
      if (!(e instanceof this)) throw Error(v(279));
      e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e);
    }
    function ur(e) {
      (e.eventPool = []), (e.getPooled = ar), (e.release = sr);
    }
    g(or.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e &&
          (e.preventDefault
            ? e.preventDefault()
            : "unknown" != typeof e.returnValue && (e.returnValue = !1),
          (this.isDefaultPrevented = ir));
      },
      stopPropagation: function () {
        var e = this.nativeEvent;
        e &&
          (e.stopPropagation
            ? e.stopPropagation()
            : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
          (this.isPropagationStopped = ir));
      },
      persist: function () {
        this.isPersistent = ir;
      },
      isPersistent: lr,
      destructor: function () {
        var e,
          t = this.constructor.Interface;
        for (e in t) this[e] = null;
        (this.nativeEvent = this._targetInst = this.dispatchConfig = null),
          (this.isPropagationStopped = this.isDefaultPrevented = lr),
          (this._dispatchInstances = this._dispatchListeners = null);
      },
    }),
      (or.Interface = {
        type: null,
        target: null,
        currentTarget: function () {
          return null;
        },
        eventPhase: null,
        bubbles: null,
        cancelable: null,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: null,
        isTrusted: null,
      }),
      (or.extend = function (e) {
        function t() {}
        function n() {
          return r.apply(this, arguments);
        }
        var r = this;
        t.prototype = r.prototype;
        var i = new t();
        return (
          g(i, n.prototype),
          (n.prototype = i),
          (n.prototype.constructor = n),
          (n.Interface = g({}, r.Interface, e)),
          (n.extend = r.extend),
          ur(n),
          n
        );
      }),
      ur(or);
    var cr = or.extend({ data: null }),
      dr = or.extend({ data: null }),
      pr = [9, 13, 27, 32],
      fr = K && "CompositionEvent" in window,
      mr = null;
    K && "documentMode" in document && (mr = document.documentMode);
    var hr = K && "TextEvent" in window && !mr,
      gr = K && (!fr || (mr && 8 < mr && 11 >= mr)),
      yr = String.fromCharCode(32),
      vr = {
        beforeInput: {
          phasedRegistrationNames: {
            bubbled: "onBeforeInput",
            captured: "onBeforeInputCapture",
          },
          dependencies: ["compositionend", "keypress", "textInput", "paste"],
        },
        compositionEnd: {
          phasedRegistrationNames: {
            bubbled: "onCompositionEnd",
            captured: "onCompositionEndCapture",
          },
          dependencies:
            "blur compositionend keydown keypress keyup mousedown".split(" "),
        },
        compositionStart: {
          phasedRegistrationNames: {
            bubbled: "onCompositionStart",
            captured: "onCompositionStartCapture",
          },
          dependencies:
            "blur compositionstart keydown keypress keyup mousedown".split(" "),
        },
        compositionUpdate: {
          phasedRegistrationNames: {
            bubbled: "onCompositionUpdate",
            captured: "onCompositionUpdateCapture",
          },
          dependencies:
            "blur compositionupdate keydown keypress keyup mousedown".split(
              " "
            ),
        },
      },
      br = !1;
    function wr(e, t) {
      switch (e) {
        case "keyup":
          return -1 !== pr.indexOf(t.keyCode);
        case "keydown":
          return 229 !== t.keyCode;
        case "keypress":
        case "mousedown":
        case "blur":
          return !0;
        default:
          return !1;
      }
    }
    function Er(e) {
      return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
    }
    var kr = !1;
    var Sr = {
        eventTypes: vr,
        extractEvents: function (e, t, n, r) {
          var i;
          if (fr)
            e: {
              switch (e) {
                case "compositionstart":
                  var l = vr.compositionStart;
                  break e;
                case "compositionend":
                  l = vr.compositionEnd;
                  break e;
                case "compositionupdate":
                  l = vr.compositionUpdate;
                  break e;
              }
              l = void 0;
            }
          else
            kr
              ? wr(e, n) && (l = vr.compositionEnd)
              : "keydown" === e &&
                229 === n.keyCode &&
                (l = vr.compositionStart);
          return (
            l
              ? (gr &&
                  "ko" !== n.locale &&
                  (kr || l !== vr.compositionStart
                    ? l === vr.compositionEnd && kr && (i = rr())
                    : ((tr = "value" in (er = r) ? er.value : er.textContent),
                      (kr = !0))),
                (l = cr.getPooled(l, t, n, r)),
                i ? (l.data = i) : null !== (i = Er(n)) && (l.data = i),
                Jn(l),
                (i = l))
              : (i = null),
            (e = hr
              ? (function (e, t) {
                  switch (e) {
                    case "compositionend":
                      return Er(t);
                    case "keypress":
                      return 32 !== t.which ? null : ((br = !0), yr);
                    case "textInput":
                      return (e = t.data) === yr && br ? null : e;
                    default:
                      return null;
                  }
                })(e, n)
              : (function (e, t) {
                  if (kr)
                    return "compositionend" === e || (!fr && wr(e, t))
                      ? ((e = rr()), (nr = tr = er = null), (kr = !1), e)
                      : null;
                  switch (e) {
                    case "paste":
                    default:
                      return null;
                    case "keypress":
                      if (
                        !(t.ctrlKey || t.altKey || t.metaKey) ||
                        (t.ctrlKey && t.altKey)
                      ) {
                        if (t.char && 1 < t.char.length) return t.char;
                        if (t.which) return String.fromCharCode(t.which);
                      }
                      return null;
                    case "compositionend":
                      return gr && "ko" !== t.locale ? null : t.data;
                  }
                })(e, n))
              ? (((t = dr.getPooled(vr.beforeInput, t, n, r)).data = e), Jn(t))
              : (t = null),
            null === i ? t : null === t ? i : [i, t]
          );
        },
      },
      xr = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0,
      };
    function Pr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return "input" === t ? !!xr[e.type] : "textarea" === t;
    }
    var Tr = {
      change: {
        phasedRegistrationNames: {
          bubbled: "onChange",
          captured: "onChangeCapture",
        },
        dependencies:
          "blur change click focus input keydown keyup selectionchange".split(
            " "
          ),
      },
    };
    function _r(e, t, n) {
      return (
        ((e = or.getPooled(Tr.change, e, t, n)).type = "change"), $(n), Jn(e), e
      );
    }
    var Cr = null,
      Ir = null;
    function Mr(e) {
      wt(e);
    }
    function Lr(e) {
      if (Re(Hn(e))) return e;
    }
    function Nr(e, t) {
      if ("change" === e) return t;
    }
    var Rr = !1;
    function Or() {
      Cr && (Cr.detachEvent("onpropertychange", Ar), (Ir = Cr = null));
    }
    function Ar(e) {
      if ("value" === e.propertyName && Lr(Ir))
        if (((e = _r(Ir, e, Et(e))), Y)) wt(e);
        else {
          Y = !0;
          try {
            W(Mr, e);
          } finally {
            (Y = !1), Z();
          }
        }
    }
    function Fr(e, t, n) {
      "focus" === e
        ? (Or(), (Ir = n), (Cr = t).attachEvent("onpropertychange", Ar))
        : "blur" === e && Or();
    }
    function zr(e) {
      if ("selectionchange" === e || "keyup" === e || "keydown" === e)
        return Lr(Ir);
    }
    function Dr(e, t) {
      if ("click" === e) return Lr(t);
    }
    function Kr(e, t) {
      if ("input" === e || "change" === e) return Lr(t);
    }
    K &&
      (Rr =
        kt("input") && (!document.documentMode || 9 < document.documentMode));
    var Vr = {
        eventTypes: Tr,
        _isInputEventSupported: Rr,
        extractEvents: function (e, t, n, r) {
          var i = t ? Hn(t) : window,
            l = i.nodeName && i.nodeName.toLowerCase();
          if ("select" === l || ("input" === l && "file" === i.type))
            var o = Nr;
          else if (Pr(i))
            if (Rr) o = Kr;
            else {
              o = zr;
              var a = Fr;
            }
          else
            (l = i.nodeName) &&
              "input" === l.toLowerCase() &&
              ("checkbox" === i.type || "radio" === i.type) &&
              (o = Dr);
          if (o && (o = o(e, t))) return _r(o, n, r);
          a && a(e, i, t),
            "blur" === e &&
              (e = i._wrapperState) &&
              e.controlled &&
              "number" === i.type &&
              Ke(i, "number", i.value);
        },
      },
      Ur = or.extend({ view: null, detail: null }),
      Br = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
      };
    function jr(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : !!(e = Br[e]) && !!t[e];
    }
    function $r() {
      return jr;
    }
    var Hr = 0,
      Wr = 0,
      qr = !1,
      Gr = !1,
      Qr = Ur.extend({
        screenX: null,
        screenY: null,
        clientX: null,
        clientY: null,
        pageX: null,
        pageY: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        getModifierState: $r,
        button: null,
        buttons: null,
        relatedTarget: function (e) {
          return (
            e.relatedTarget ||
            (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
          );
        },
        movementX: function (e) {
          if ("movementX" in e) return e.movementX;
          var t = Hr;
          return (
            (Hr = e.screenX),
            qr ? ("mousemove" === e.type ? e.screenX - t : 0) : ((qr = !0), 0)
          );
        },
        movementY: function (e) {
          if ("movementY" in e) return e.movementY;
          var t = Wr;
          return (
            (Wr = e.screenY),
            Gr ? ("mousemove" === e.type ? e.screenY - t : 0) : ((Gr = !0), 0)
          );
        },
      }),
      Yr = Qr.extend({
        pointerId: null,
        width: null,
        height: null,
        pressure: null,
        tangentialPressure: null,
        tiltX: null,
        tiltY: null,
        twist: null,
        pointerType: null,
        isPrimary: null,
      }),
      Xr = {
        mouseEnter: {
          registrationName: "onMouseEnter",
          dependencies: ["mouseout", "mouseover"],
        },
        mouseLeave: {
          registrationName: "onMouseLeave",
          dependencies: ["mouseout", "mouseover"],
        },
        pointerEnter: {
          registrationName: "onPointerEnter",
          dependencies: ["pointerout", "pointerover"],
        },
        pointerLeave: {
          registrationName: "onPointerLeave",
          dependencies: ["pointerout", "pointerover"],
        },
      },
      Zr = {
        eventTypes: Xr,
        extractEvents: function (e, t, n, r, i) {
          var l = "mouseover" === e || "pointerover" === e,
            o = "mouseout" === e || "pointerout" === e;
          if (
            (l && 0 == (32 & i) && (n.relatedTarget || n.fromElement)) ||
            (!o && !l)
          )
            return null;
          ((l =
            r.window === r
              ? r
              : (l = r.ownerDocument)
              ? l.defaultView || l.parentWindow
              : window),
          o)
            ? ((o = t),
              null !==
                (t = (t = n.relatedTarget || n.toElement) ? jn(t) : null) &&
                (t !== pt(t) || (5 !== t.tag && 6 !== t.tag)) &&
                (t = null))
            : (o = null);
          if (o === t) return null;
          if ("mouseout" === e || "mouseover" === e)
            var a = Qr,
              s = Xr.mouseLeave,
              u = Xr.mouseEnter,
              c = "mouse";
          else
            ("pointerout" !== e && "pointerover" !== e) ||
              ((a = Yr),
              (s = Xr.pointerLeave),
              (u = Xr.pointerEnter),
              (c = "pointer"));
          if (
            ((e = null == o ? l : Hn(o)),
            (l = null == t ? l : Hn(t)),
            ((s = a.getPooled(s, o, n, r)).type = c + "leave"),
            (s.target = e),
            (s.relatedTarget = l),
            ((n = a.getPooled(u, t, n, r)).type = c + "enter"),
            (n.target = l),
            (n.relatedTarget = e),
            (c = t),
            (r = o) && c)
          )
            e: {
              for (u = c, o = 0, e = a = r; e; e = qn(e)) o++;
              for (e = 0, t = u; t; t = qn(t)) e++;
              for (; 0 < o - e; ) (a = qn(a)), o--;
              for (; 0 < e - o; ) (u = qn(u)), e--;
              for (; o--; ) {
                if (a === u || a === u.alternate) break e;
                (a = qn(a)), (u = qn(u));
              }
              a = null;
            }
          else a = null;
          for (
            u = a, a = [];
            r && r !== u && (null === (o = r.alternate) || o !== u);

          )
            a.push(r), (r = qn(r));
          for (
            r = [];
            c && c !== u && (null === (o = c.alternate) || o !== u);

          )
            r.push(c), (c = qn(c));
          for (c = 0; c < a.length; c++) Xn(a[c], "bubbled", s);
          for (c = r.length; 0 < c--; ) Xn(r[c], "captured", n);
          return 0 == (64 & i) ? [s] : [s, n];
        },
      };
    var Jr =
        "function" == typeof Object.is
          ? Object.is
          : function (e, t) {
              return (
                (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
              );
            },
      ei = Object.prototype.hasOwnProperty;
    function ti(e, t) {
      if (Jr(e, t)) return !0;
      if (
        "object" != typeof e ||
        null === e ||
        "object" != typeof t ||
        null === t
      )
        return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++)
        if (!ei.call(t, n[r]) || !Jr(e[n[r]], t[n[r]])) return !1;
      return !0;
    }
    var ni = K && "documentMode" in document && 11 >= document.documentMode,
      ri = {
        select: {
          phasedRegistrationNames: {
            bubbled: "onSelect",
            captured: "onSelectCapture",
          },
          dependencies:
            "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(
              " "
            ),
        },
      },
      ii = null,
      li = null,
      oi = null,
      ai = !1;
    function si(e, t) {
      var n =
        t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
      return ai || null == ii || ii !== Sn(n)
        ? null
        : ("selectionStart" in (n = ii) && Cn(n)
            ? (n = { start: n.selectionStart, end: n.selectionEnd })
            : (n = {
                anchorNode: (n = (
                  (n.ownerDocument && n.ownerDocument.defaultView) ||
                  window
                ).getSelection()).anchorNode,
                anchorOffset: n.anchorOffset,
                focusNode: n.focusNode,
                focusOffset: n.focusOffset,
              }),
          oi && ti(oi, n)
            ? null
            : ((oi = n),
              ((e = or.getPooled(ri.select, li, e, t)).type = "select"),
              (e.target = ii),
              Jn(e),
              e));
    }
    var ui = {
        eventTypes: ri,
        extractEvents: function (e, t, n, r, i, l) {
          if (
            !(l = !(i =
              l ||
              (r.window === r
                ? r.document
                : 9 === r.nodeType
                ? r
                : r.ownerDocument)))
          ) {
            e: {
              (i = dt(i)), (l = z.onSelect);
              for (var o = 0; o < l.length; o++)
                if (!i.has(l[o])) {
                  i = !1;
                  break e;
                }
              i = !0;
            }
            l = !i;
          }
          if (l) return null;
          switch (((i = t ? Hn(t) : window), e)) {
            case "focus":
              (Pr(i) || "true" === i.contentEditable) &&
                ((ii = i), (li = t), (oi = null));
              break;
            case "blur":
              oi = li = ii = null;
              break;
            case "mousedown":
              ai = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              return (ai = !1), si(n, r);
            case "selectionchange":
              if (ni) break;
            case "keydown":
            case "keyup":
              return si(n, r);
          }
          return null;
        },
      },
      ci = or.extend({
        animationName: null,
        elapsedTime: null,
        pseudoElement: null,
      }),
      di = or.extend({
        clipboardData: function (e) {
          return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        },
      }),
      pi = Ur.extend({ relatedTarget: null });
    function fi(e) {
      var t = e.keyCode;
      return (
        "charCode" in e
          ? 0 === (e = e.charCode) && 13 === t && (e = 13)
          : (e = t),
        10 === e && (e = 13),
        32 <= e || 13 === e ? e : 0
      );
    }
    var mi = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
      },
      hi = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
      },
      gi = Ur.extend({
        key: function (e) {
          if (e.key) {
            var t = mi[e.key] || e.key;
            if ("Unidentified" !== t) return t;
          }
          return "keypress" === e.type
            ? 13 === (e = fi(e))
              ? "Enter"
              : String.fromCharCode(e)
            : "keydown" === e.type || "keyup" === e.type
            ? hi[e.keyCode] || "Unidentified"
            : "";
        },
        location: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        repeat: null,
        locale: null,
        getModifierState: $r,
        charCode: function (e) {
          return "keypress" === e.type ? fi(e) : 0;
        },
        keyCode: function (e) {
          return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
        },
        which: function (e) {
          return "keypress" === e.type
            ? fi(e)
            : "keydown" === e.type || "keyup" === e.type
            ? e.keyCode
            : 0;
        },
      }),
      yi = Qr.extend({ dataTransfer: null }),
      vi = Ur.extend({
        touches: null,
        targetTouches: null,
        changedTouches: null,
        altKey: null,
        metaKey: null,
        ctrlKey: null,
        shiftKey: null,
        getModifierState: $r,
      }),
      bi = or.extend({
        propertyName: null,
        elapsedTime: null,
        pseudoElement: null,
      }),
      wi = Qr.extend({
        deltaX: function (e) {
          return "deltaX" in e
            ? e.deltaX
            : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
        },
        deltaY: function (e) {
          return "deltaY" in e
            ? e.deltaY
            : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
        },
        deltaZ: null,
        deltaMode: null,
      }),
      Ei = {
        eventTypes: Yt,
        extractEvents: function (e, t, n, r) {
          var i = Xt.get(e);
          if (!i) return null;
          switch (e) {
            case "keypress":
              if (0 === fi(n)) return null;
            case "keydown":
            case "keyup":
              e = gi;
              break;
            case "blur":
            case "focus":
              e = pi;
              break;
            case "click":
              if (2 === n.button) return null;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              e = Qr;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              e = yi;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              e = vi;
              break;
            case lt:
            case ot:
            case at:
              e = ci;
              break;
            case st:
              e = bi;
              break;
            case "scroll":
              e = Ur;
              break;
            case "wheel":
              e = wi;
              break;
            case "copy":
            case "cut":
            case "paste":
              e = di;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              e = Yr;
              break;
            default:
              e = or;
          }
          return Jn((t = e.getPooled(i, t, n, r))), t;
        },
      };
    if (M) throw Error(v(101));
    (M = Array.prototype.slice.call(
      "ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(
        " "
      )
    )),
      N(),
      (T = Wn),
      (_ = $n),
      (C = Hn),
      D({
        SimpleEventPlugin: Ei,
        EnterLeaveEventPlugin: Zr,
        ChangeEventPlugin: Vr,
        SelectEventPlugin: ui,
        BeforeInputEventPlugin: Sr,
      });
    var ki = [],
      Si = -1;
    function xi(e) {
      0 > Si || ((e.current = ki[Si]), (ki[Si] = null), Si--);
    }
    function Pi(e, t) {
      Si++, (ki[Si] = e.current), (e.current = t);
    }
    var Ti = {},
      _i = { current: Ti },
      Ci = { current: !1 },
      Ii = Ti;
    function Mi(e, t) {
      var n = e.type.contextTypes;
      if (!n) return Ti;
      var r = e.stateNode;
      if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
      var i,
        l = {};
      for (i in n) l[i] = t[i];
      return (
        r &&
          (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
          (e.__reactInternalMemoizedMaskedChildContext = l)),
        l
      );
    }
    function Li(e) {
      return null != (e = e.childContextTypes);
    }
    function Ni() {
      xi(Ci), xi(_i);
    }
    function Ri(e, t, n) {
      if (_i.current !== Ti) throw Error(v(168));
      Pi(_i, t), Pi(Ci, n);
    }
    function Oi(e, t, n) {
      var r = e.stateNode;
      if (((e = t.childContextTypes), "function" != typeof r.getChildContext))
        return n;
      for (var i in (r = r.getChildContext()))
        if (!(i in e)) throw Error(v(108, Ce(t) || "Unknown", i));
      return g({}, n, {}, r);
    }
    function Ai(e) {
      return (
        (e =
          ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
          Ti),
        (Ii = _i.current),
        Pi(_i, e),
        Pi(Ci, Ci.current),
        !0
      );
    }
    function Fi(e, t, n) {
      var r = e.stateNode;
      if (!r) throw Error(v(169));
      n
        ? ((e = Oi(e, t, Ii)),
          (r.__reactInternalMemoizedMergedChildContext = e),
          xi(Ci),
          xi(_i),
          Pi(_i, e))
        : xi(Ci),
        Pi(Ci, n);
    }
    var zi = y.unstable_runWithPriority,
      Di = y.unstable_scheduleCallback,
      Ki = y.unstable_cancelCallback,
      Vi = y.unstable_requestPaint,
      Ui = y.unstable_now,
      Bi = y.unstable_getCurrentPriorityLevel,
      ji = y.unstable_ImmediatePriority,
      $i = y.unstable_UserBlockingPriority,
      Hi = y.unstable_NormalPriority,
      Wi = y.unstable_LowPriority,
      qi = y.unstable_IdlePriority,
      Gi = {},
      Qi = y.unstable_shouldYield,
      Yi = void 0 !== Vi ? Vi : function () {},
      Xi = null,
      Zi = null,
      Ji = !1,
      el = Ui(),
      tl =
        1e4 > el
          ? Ui
          : function () {
              return Ui() - el;
            };
    function nl() {
      switch (Bi()) {
        case ji:
          return 99;
        case $i:
          return 98;
        case Hi:
          return 97;
        case Wi:
          return 96;
        case qi:
          return 95;
        default:
          throw Error(v(332));
      }
    }
    function rl(e) {
      switch (e) {
        case 99:
          return ji;
        case 98:
          return $i;
        case 97:
          return Hi;
        case 96:
          return Wi;
        case 95:
          return qi;
        default:
          throw Error(v(332));
      }
    }
    function il(e, t) {
      return (e = rl(e)), zi(e, t);
    }
    function ll(e, t, n) {
      return (e = rl(e)), Di(e, t, n);
    }
    function ol(e) {
      return null === Xi ? ((Xi = [e]), (Zi = Di(ji, sl))) : Xi.push(e), Gi;
    }
    function al() {
      if (null !== Zi) {
        var e = Zi;
        (Zi = null), Ki(e);
      }
      sl();
    }
    function sl() {
      if (!Ji && null !== Xi) {
        Ji = !0;
        var e = 0;
        try {
          var t = Xi;
          il(99, function () {
            for (; e < t.length; e++) {
              var n = t[e];
              do {
                n = n(!0);
              } while (null !== n);
            }
          }),
            (Xi = null);
        } catch (t) {
          throw (null !== Xi && (Xi = Xi.slice(e + 1)), Di(ji, al), t);
        } finally {
          Ji = !1;
        }
      }
    }
    function ul(e, t, n) {
      return (
        1073741821 - (1 + (((1073741821 - e + t / 10) / (n /= 10)) | 0)) * n
      );
    }
    function cl(e, t) {
      if (e && e.defaultProps)
        for (var n in ((t = g({}, t)), (e = e.defaultProps)))
          void 0 === t[n] && (t[n] = e[n]);
      return t;
    }
    var dl = { current: null },
      pl = null,
      fl = null,
      ml = null;
    function hl() {
      ml = fl = pl = null;
    }
    function gl(e) {
      var t = dl.current;
      xi(dl), (e.type._context._currentValue = t);
    }
    function yl(e, t) {
      for (; null !== e; ) {
        var n = e.alternate;
        if (e.childExpirationTime < t)
          (e.childExpirationTime = t),
            null !== n &&
              n.childExpirationTime < t &&
              (n.childExpirationTime = t);
        else {
          if (!(null !== n && n.childExpirationTime < t)) break;
          n.childExpirationTime = t;
        }
        e = e.return;
      }
    }
    function vl(e, t) {
      (pl = e),
        (ml = fl = null),
        null !== (e = e.dependencies) &&
          null !== e.firstContext &&
          (e.expirationTime >= t && (Wo = !0), (e.firstContext = null));
    }
    function bl(e, t) {
      if (ml !== e && !1 !== t && 0 !== t)
        if (
          (("number" == typeof t && 1073741823 !== t) ||
            ((ml = e), (t = 1073741823)),
          (t = { context: e, observedBits: t, next: null }),
          null === fl)
        ) {
          if (null === pl) throw Error(v(308));
          (fl = t),
            (pl.dependencies = {
              expirationTime: 0,
              firstContext: t,
              responders: null,
            });
        } else fl = fl.next = t;
      return e._currentValue;
    }
    var wl = !1;
    function El(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        baseQueue: null,
        shared: { pending: null },
        effects: null,
      };
    }
    function kl(e, t) {
      (e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            baseQueue: e.baseQueue,
            shared: e.shared,
            effects: e.effects,
          });
    }
    function Sl(e, t) {
      return ((e = {
        expirationTime: e,
        suspenseConfig: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
      }).next = e);
    }
    function xl(e, t) {
      if (null !== (e = e.updateQueue)) {
        var n = (e = e.shared).pending;
        null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
          (e.pending = t);
      }
    }
    function Pl(e, t) {
      var n = e.alternate;
      null !== n && kl(n, e),
        null === (n = (e = e.updateQueue).baseQueue)
          ? ((e.baseQueue = t.next = t), (t.next = t))
          : ((t.next = n.next), (n.next = t));
    }
    function Tl(e, t, n, r) {
      var i = e.updateQueue;
      wl = !1;
      var l = i.baseQueue,
        o = i.shared.pending;
      if (null !== o) {
        if (null !== l) {
          var a = l.next;
          (l.next = o.next), (o.next = a);
        }
        (l = o),
          (i.shared.pending = null),
          null !== (a = e.alternate) &&
            null !== (a = a.updateQueue) &&
            (a.baseQueue = o);
      }
      if (null !== l) {
        a = l.next;
        var s = i.baseState,
          u = 0,
          c = null,
          d = null,
          p = null;
        if (null !== a)
          for (var f = a; ; ) {
            if ((o = f.expirationTime) < r) {
              var m = {
                expirationTime: f.expirationTime,
                suspenseConfig: f.suspenseConfig,
                tag: f.tag,
                payload: f.payload,
                callback: f.callback,
                next: null,
              };
              null === p ? ((d = p = m), (c = s)) : (p = p.next = m),
                o > u && (u = o);
            } else {
              null !== p &&
                (p = p.next =
                  {
                    expirationTime: 1073741823,
                    suspenseConfig: f.suspenseConfig,
                    tag: f.tag,
                    payload: f.payload,
                    callback: f.callback,
                    next: null,
                  }),
                Ps(o, f.suspenseConfig);
              e: {
                var h = e,
                  y = f;
                switch (((o = t), (m = n), y.tag)) {
                  case 1:
                    if ("function" == typeof (h = y.payload)) {
                      s = h.call(m, s, o);
                      break e;
                    }
                    s = h;
                    break e;
                  case 3:
                    h.effectTag = (-4097 & h.effectTag) | 64;
                  case 0:
                    if (
                      null ==
                      (o =
                        "function" == typeof (h = y.payload)
                          ? h.call(m, s, o)
                          : h)
                    )
                      break e;
                    s = g({}, s, o);
                    break e;
                  case 2:
                    wl = !0;
                }
              }
              null !== f.callback &&
                ((e.effectTag |= 32),
                null === (o = i.effects) ? (i.effects = [f]) : o.push(f));
            }
            if (null === (f = f.next) || f === a) {
              if (null === (o = i.shared.pending)) break;
              (f = l.next = o.next),
                (o.next = a),
                (i.baseQueue = l = o),
                (i.shared.pending = null);
            }
          }
        null === p ? (c = s) : (p.next = d),
          (i.baseState = c),
          (i.baseQueue = p),
          Ts(u),
          (e.expirationTime = u),
          (e.memoizedState = s);
      }
    }
    function _l(e, t, n) {
      if (((e = t.effects), (t.effects = null), null !== e))
        for (t = 0; t < e.length; t++) {
          var r = e[t],
            i = r.callback;
          if (null !== i) {
            if (((r.callback = null), (r = i), (i = n), "function" != typeof r))
              throw Error(v(191, r));
            r.call(i);
          }
        }
    }
    var Cl = se.ReactCurrentBatchConfig,
      Il = new h.Component().refs;
    function Ml(e, t, n, r) {
      (n = null == (n = n(r, (t = e.memoizedState))) ? t : g({}, t, n)),
        (e.memoizedState = n),
        0 === e.expirationTime && (e.updateQueue.baseState = n);
    }
    var Ll = {
      isMounted: function (e) {
        return !!(e = e._reactInternalFiber) && pt(e) === e;
      },
      enqueueSetState: function (e, t, n) {
        e = e._reactInternalFiber;
        var r = ps(),
          i = Cl.suspense;
        ((i = Sl((r = fs(r, e, i)), i)).payload = t),
          null != n && (i.callback = n),
          xl(e, i),
          ms(e, r);
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternalFiber;
        var r = ps(),
          i = Cl.suspense;
        ((i = Sl((r = fs(r, e, i)), i)).tag = 1),
          (i.payload = t),
          null != n && (i.callback = n),
          xl(e, i),
          ms(e, r);
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternalFiber;
        var n = ps(),
          r = Cl.suspense;
        ((r = Sl((n = fs(n, e, r)), r)).tag = 2),
          null != t && (r.callback = t),
          xl(e, r),
          ms(e, n);
      },
    };
    function Nl(e, t, n, r, i, l, o) {
      return "function" == typeof (e = e.stateNode).shouldComponentUpdate
        ? e.shouldComponentUpdate(r, l, o)
        : !t.prototype ||
            !t.prototype.isPureReactComponent ||
            !ti(n, r) ||
            !ti(i, l);
    }
    function Rl(e, t, n) {
      var r = !1,
        i = Ti,
        l = t.contextType;
      return (
        "object" == typeof l && null !== l
          ? (l = bl(l))
          : ((i = Li(t) ? Ii : _i.current),
            (l = (r = null != (r = t.contextTypes)) ? Mi(e, i) : Ti)),
        (t = new t(n, l)),
        (e.memoizedState =
          null !== t.state && void 0 !== t.state ? t.state : null),
        (t.updater = Ll),
        (e.stateNode = t),
        (t._reactInternalFiber = e),
        r &&
          (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = i),
          (e.__reactInternalMemoizedMaskedChildContext = l)),
        t
      );
    }
    function Ol(e, t, n, r) {
      (e = t.state),
        "function" == typeof t.componentWillReceiveProps &&
          t.componentWillReceiveProps(n, r),
        "function" == typeof t.UNSAFE_componentWillReceiveProps &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Ll.enqueueReplaceState(t, t.state, null);
    }
    function Al(e, t, n, r) {
      var i = e.stateNode;
      (i.props = n), (i.state = e.memoizedState), (i.refs = Il), El(e);
      var l = t.contextType;
      "object" == typeof l && null !== l
        ? (i.context = bl(l))
        : ((l = Li(t) ? Ii : _i.current), (i.context = Mi(e, l))),
        Tl(e, n, i, r),
        (i.state = e.memoizedState),
        "function" == typeof (l = t.getDerivedStateFromProps) &&
          (Ml(e, t, l, n), (i.state = e.memoizedState)),
        "function" == typeof t.getDerivedStateFromProps ||
          "function" == typeof i.getSnapshotBeforeUpdate ||
          ("function" != typeof i.UNSAFE_componentWillMount &&
            "function" != typeof i.componentWillMount) ||
          ((t = i.state),
          "function" == typeof i.componentWillMount && i.componentWillMount(),
          "function" == typeof i.UNSAFE_componentWillMount &&
            i.UNSAFE_componentWillMount(),
          t !== i.state && Ll.enqueueReplaceState(i, i.state, null),
          Tl(e, n, i, r),
          (i.state = e.memoizedState)),
        "function" == typeof i.componentDidMount && (e.effectTag |= 4);
    }
    var Fl = Array.isArray;
    function zl(e, t, n) {
      if (
        null !== (e = n.ref) &&
        "function" != typeof e &&
        "object" != typeof e
      ) {
        if (n._owner) {
          if ((n = n._owner)) {
            if (1 !== n.tag) throw Error(v(309));
            var r = n.stateNode;
          }
          if (!r) throw Error(v(147, e));
          var i = "" + e;
          return null !== t &&
            null !== t.ref &&
            "function" == typeof t.ref &&
            t.ref._stringRef === i
            ? t.ref
            : ((t = function (e) {
                var t = r.refs;
                t === Il && (t = r.refs = {}),
                  null === e ? delete t[i] : (t[i] = e);
              }),
              (t._stringRef = i),
              t);
        }
        if ("string" != typeof e) throw Error(v(284));
        if (!n._owner) throw Error(v(290, e));
      }
      return e;
    }
    function Dl(e, t) {
      if ("textarea" !== e.type)
        throw Error(
          v(
            31,
            "[object Object]" === Object.prototype.toString.call(t)
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : t,
            ""
          )
        );
    }
    function Kl(e) {
      function t(t, n) {
        if (e) {
          var r = t.lastEffect;
          null !== r
            ? ((r.nextEffect = n), (t.lastEffect = n))
            : (t.firstEffect = t.lastEffect = n),
            (n.nextEffect = null),
            (n.effectTag = 8);
        }
      }
      function n(n, r) {
        if (!e) return null;
        for (; null !== r; ) t(n, r), (r = r.sibling);
        return null;
      }
      function r(e, t) {
        for (e = new Map(); null !== t; )
          null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
        return e;
      }
      function i(e, t) {
        return ((e = Ws(e, t)).index = 0), (e.sibling = null), e;
      }
      function l(t, n, r) {
        return (
          (t.index = r),
          e
            ? null !== (r = t.alternate)
              ? (r = r.index) < n
                ? ((t.effectTag = 2), n)
                : r
              : ((t.effectTag = 2), n)
            : n
        );
      }
      function o(t) {
        return e && null === t.alternate && (t.effectTag = 2), t;
      }
      function a(e, t, n, r) {
        return null === t || 6 !== t.tag
          ? (((t = Qs(n, e.mode, r)).return = e), t)
          : (((t = i(t, n)).return = e), t);
      }
      function s(e, t, n, r) {
        return null !== t && t.elementType === n.type
          ? (((r = i(t, n.props)).ref = zl(e, t, n)), (r.return = e), r)
          : (((r = qs(n.type, n.key, n.props, null, e.mode, r)).ref = zl(
              e,
              t,
              n
            )),
            (r.return = e),
            r);
      }
      function u(e, t, n, r) {
        return null === t ||
          4 !== t.tag ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? (((t = Ys(n, e.mode, r)).return = e), t)
          : (((t = i(t, n.children || [])).return = e), t);
      }
      function c(e, t, n, r, l) {
        return null === t || 7 !== t.tag
          ? (((t = Gs(n, e.mode, r, l)).return = e), t)
          : (((t = i(t, n)).return = e), t);
      }
      function d(e, t, n) {
        if ("string" == typeof t || "number" == typeof t)
          return ((t = Qs("" + t, e.mode, n)).return = e), t;
        if ("object" == typeof t && null !== t) {
          switch (t.$$typeof) {
            case pe:
              return (
                ((n = qs(t.type, t.key, t.props, null, e.mode, n)).ref = zl(
                  e,
                  null,
                  t
                )),
                (n.return = e),
                n
              );
            case fe:
              return ((t = Ys(t, e.mode, n)).return = e), t;
          }
          if (Fl(t) || _e(t))
            return ((t = Gs(t, e.mode, n, null)).return = e), t;
          Dl(e, t);
        }
        return null;
      }
      function p(e, t, n, r) {
        var i = null !== t ? t.key : null;
        if ("string" == typeof n || "number" == typeof n)
          return null !== i ? null : a(e, t, "" + n, r);
        if ("object" == typeof n && null !== n) {
          switch (n.$$typeof) {
            case pe:
              return n.key === i
                ? n.type === me
                  ? c(e, t, n.props.children, r, i)
                  : s(e, t, n, r)
                : null;
            case fe:
              return n.key === i ? u(e, t, n, r) : null;
          }
          if (Fl(n) || _e(n)) return null !== i ? null : c(e, t, n, r, null);
          Dl(e, n);
        }
        return null;
      }
      function f(e, t, n, r, i) {
        if ("string" == typeof r || "number" == typeof r)
          return a(t, (e = e.get(n) || null), "" + r, i);
        if ("object" == typeof r && null !== r) {
          switch (r.$$typeof) {
            case pe:
              return (
                (e = e.get(null === r.key ? n : r.key) || null),
                r.type === me
                  ? c(t, e, r.props.children, i, r.key)
                  : s(t, e, r, i)
              );
            case fe:
              return u(
                t,
                (e = e.get(null === r.key ? n : r.key) || null),
                r,
                i
              );
          }
          if (Fl(r) || _e(r)) return c(t, (e = e.get(n) || null), r, i, null);
          Dl(t, r);
        }
        return null;
      }
      function m(i, o, a, s) {
        for (
          var u = null, c = null, m = o, h = (o = 0), g = null;
          null !== m && h < a.length;
          h++
        ) {
          m.index > h ? ((g = m), (m = null)) : (g = m.sibling);
          var y = p(i, m, a[h], s);
          if (null === y) {
            null === m && (m = g);
            break;
          }
          e && m && null === y.alternate && t(i, m),
            (o = l(y, o, h)),
            null === c ? (u = y) : (c.sibling = y),
            (c = y),
            (m = g);
        }
        if (h === a.length) return n(i, m), u;
        if (null === m) {
          for (; h < a.length; h++)
            null !== (m = d(i, a[h], s)) &&
              ((o = l(m, o, h)),
              null === c ? (u = m) : (c.sibling = m),
              (c = m));
          return u;
        }
        for (m = r(i, m); h < a.length; h++)
          null !== (g = f(m, i, h, a[h], s)) &&
            (e && null !== g.alternate && m.delete(null === g.key ? h : g.key),
            (o = l(g, o, h)),
            null === c ? (u = g) : (c.sibling = g),
            (c = g));
        return (
          e &&
            m.forEach(function (e) {
              return t(i, e);
            }),
          u
        );
      }
      function h(i, o, a, s) {
        var u = _e(a);
        if ("function" != typeof u) throw Error(v(150));
        if (null == (a = u.call(a))) throw Error(v(151));
        for (
          var c = (u = null), m = o, h = (o = 0), g = null, y = a.next();
          null !== m && !y.done;
          h++, y = a.next()
        ) {
          m.index > h ? ((g = m), (m = null)) : (g = m.sibling);
          var b = p(i, m, y.value, s);
          if (null === b) {
            null === m && (m = g);
            break;
          }
          e && m && null === b.alternate && t(i, m),
            (o = l(b, o, h)),
            null === c ? (u = b) : (c.sibling = b),
            (c = b),
            (m = g);
        }
        if (y.done) return n(i, m), u;
        if (null === m) {
          for (; !y.done; h++, y = a.next())
            null !== (y = d(i, y.value, s)) &&
              ((o = l(y, o, h)),
              null === c ? (u = y) : (c.sibling = y),
              (c = y));
          return u;
        }
        for (m = r(i, m); !y.done; h++, y = a.next())
          null !== (y = f(m, i, h, y.value, s)) &&
            (e && null !== y.alternate && m.delete(null === y.key ? h : y.key),
            (o = l(y, o, h)),
            null === c ? (u = y) : (c.sibling = y),
            (c = y));
        return (
          e &&
            m.forEach(function (e) {
              return t(i, e);
            }),
          u
        );
      }
      return function (e, r, l, a) {
        var s =
          "object" == typeof l && null !== l && l.type === me && null === l.key;
        s && (l = l.props.children);
        var u = "object" == typeof l && null !== l;
        if (u)
          switch (l.$$typeof) {
            case pe:
              e: {
                for (u = l.key, s = r; null !== s; ) {
                  if (s.key === u) {
                    if (7 === s.tag) {
                      if (l.type === me) {
                        n(e, s.sibling),
                          ((r = i(s, l.props.children)).return = e),
                          (e = r);
                        break e;
                      }
                    } else if (s.elementType === l.type) {
                      n(e, s.sibling),
                        ((r = i(s, l.props)).ref = zl(e, s, l)),
                        (r.return = e),
                        (e = r);
                      break e;
                    }
                    n(e, s);
                    break;
                  }
                  t(e, s), (s = s.sibling);
                }
                l.type === me
                  ? (((r = Gs(l.props.children, e.mode, a, l.key)).return = e),
                    (e = r))
                  : (((a = qs(l.type, l.key, l.props, null, e.mode, a)).ref =
                      zl(e, r, l)),
                    (a.return = e),
                    (e = a));
              }
              return o(e);
            case fe:
              e: {
                for (s = l.key; null !== r; ) {
                  if (r.key === s) {
                    if (
                      4 === r.tag &&
                      r.stateNode.containerInfo === l.containerInfo &&
                      r.stateNode.implementation === l.implementation
                    ) {
                      n(e, r.sibling),
                        ((r = i(r, l.children || [])).return = e),
                        (e = r);
                      break e;
                    }
                    n(e, r);
                    break;
                  }
                  t(e, r), (r = r.sibling);
                }
                ((r = Ys(l, e.mode, a)).return = e), (e = r);
              }
              return o(e);
          }
        if ("string" == typeof l || "number" == typeof l)
          return (
            (l = "" + l),
            null !== r && 6 === r.tag
              ? (n(e, r.sibling), ((r = i(r, l)).return = e), (e = r))
              : (n(e, r), ((r = Qs(l, e.mode, a)).return = e), (e = r)),
            o(e)
          );
        if (Fl(l)) return m(e, r, l, a);
        if (_e(l)) return h(e, r, l, a);
        if ((u && Dl(e, l), void 0 === l && !s))
          switch (e.tag) {
            case 1:
            case 0:
              throw (
                ((e = e.type),
                Error(v(152, e.displayName || e.name || "Component")))
              );
          }
        return n(e, r);
      };
    }
    var Vl = Kl(!0),
      Ul = Kl(!1),
      Bl = {},
      jl = { current: Bl },
      $l = { current: Bl },
      Hl = { current: Bl };
    function Wl(e) {
      if (e === Bl) throw Error(v(174));
      return e;
    }
    function ql(e, t) {
      switch ((Pi(Hl, t), Pi($l, e), Pi(jl, Bl), (e = t.nodeType))) {
        case 9:
        case 11:
          t = (t = t.documentElement) ? t.namespaceURI : Qe(null, "");
          break;
        default:
          t = Qe(
            (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
            (e = e.tagName)
          );
      }
      xi(jl), Pi(jl, t);
    }
    function Gl() {
      xi(jl), xi($l), xi(Hl);
    }
    function Ql(e) {
      Wl(Hl.current);
      var t = Wl(jl.current),
        n = Qe(t, e.type);
      t !== n && (Pi($l, e), Pi(jl, n));
    }
    function Yl(e) {
      $l.current === e && (xi(jl), xi($l));
    }
    var Xl = { current: 0 };
    function Zl(e) {
      for (var t = e; null !== t; ) {
        if (13 === t.tag) {
          var n = t.memoizedState;
          if (
            null !== n &&
            (null === (n = n.dehydrated) || n.data === In || n.data === Mn)
          )
            return t;
        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
          if (0 != (64 & t.effectTag)) return t;
        } else if (null !== t.child) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break;
        for (; null === t.sibling; ) {
          if (null === t.return || t.return === e) return null;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
      return null;
    }
    function Jl(e, t) {
      return { responder: e, props: t };
    }
    var eo = se.ReactCurrentDispatcher,
      to = se.ReactCurrentBatchConfig,
      no = 0,
      ro = null,
      io = null,
      lo = null,
      oo = !1;
    function ao() {
      throw Error(v(321));
    }
    function so(e, t) {
      if (null === t) return !1;
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!Jr(e[n], t[n])) return !1;
      return !0;
    }
    function uo(e, t, n, r, i, l) {
      if (
        ((no = l),
        (ro = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.expirationTime = 0),
        (eo.current = null === e || null === e.memoizedState ? Ro : Oo),
        (e = n(r, i)),
        t.expirationTime === no)
      ) {
        l = 0;
        do {
          if (((t.expirationTime = 0), !(25 > l))) throw Error(v(301));
          (l += 1),
            (lo = io = null),
            (t.updateQueue = null),
            (eo.current = Ao),
            (e = n(r, i));
        } while (t.expirationTime === no);
      }
      if (
        ((eo.current = No),
        (t = null !== io && null !== io.next),
        (no = 0),
        (lo = io = ro = null),
        (oo = !1),
        t)
      )
        throw Error(v(300));
      return e;
    }
    function co() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return null === lo ? (ro.memoizedState = lo = e) : (lo = lo.next = e), lo;
    }
    function po() {
      if (null === io) {
        var e = ro.alternate;
        e = null !== e ? e.memoizedState : null;
      } else e = io.next;
      var t = null === lo ? ro.memoizedState : lo.next;
      if (null !== t) (lo = t), (io = e);
      else {
        if (null === e) throw Error(v(310));
        (e = {
          memoizedState: (io = e).memoizedState,
          baseState: io.baseState,
          baseQueue: io.baseQueue,
          queue: io.queue,
          next: null,
        }),
          null === lo ? (ro.memoizedState = lo = e) : (lo = lo.next = e);
      }
      return lo;
    }
    function fo(e, t) {
      return "function" == typeof t ? t(e) : t;
    }
    function mo(e) {
      var t = po(),
        n = t.queue;
      if (null === n) throw Error(v(311));
      n.lastRenderedReducer = e;
      var r = io,
        i = r.baseQueue,
        l = n.pending;
      if (null !== l) {
        if (null !== i) {
          var o = i.next;
          (i.next = l.next), (l.next = o);
        }
        (r.baseQueue = i = l), (n.pending = null);
      }
      if (null !== i) {
        (i = i.next), (r = r.baseState);
        var a = (o = l = null),
          s = i;
        do {
          var u = s.expirationTime;
          if (u < no) {
            var c = {
              expirationTime: s.expirationTime,
              suspenseConfig: s.suspenseConfig,
              action: s.action,
              eagerReducer: s.eagerReducer,
              eagerState: s.eagerState,
              next: null,
            };
            null === a ? ((o = a = c), (l = r)) : (a = a.next = c),
              u > ro.expirationTime && ((ro.expirationTime = u), Ts(u));
          } else
            null !== a &&
              (a = a.next =
                {
                  expirationTime: 1073741823,
                  suspenseConfig: s.suspenseConfig,
                  action: s.action,
                  eagerReducer: s.eagerReducer,
                  eagerState: s.eagerState,
                  next: null,
                }),
              Ps(u, s.suspenseConfig),
              (r = s.eagerReducer === e ? s.eagerState : e(r, s.action));
          s = s.next;
        } while (null !== s && s !== i);
        null === a ? (l = r) : (a.next = o),
          Jr(r, t.memoizedState) || (Wo = !0),
          (t.memoizedState = r),
          (t.baseState = l),
          (t.baseQueue = a),
          (n.lastRenderedState = r);
      }
      return [t.memoizedState, n.dispatch];
    }
    function ho(e) {
      var t = po(),
        n = t.queue;
      if (null === n) throw Error(v(311));
      n.lastRenderedReducer = e;
      var r = n.dispatch,
        i = n.pending,
        l = t.memoizedState;
      if (null !== i) {
        n.pending = null;
        var o = (i = i.next);
        do {
          (l = e(l, o.action)), (o = o.next);
        } while (o !== i);
        Jr(l, t.memoizedState) || (Wo = !0),
          (t.memoizedState = l),
          null === t.baseQueue && (t.baseState = l),
          (n.lastRenderedState = l);
      }
      return [l, r];
    }
    function go(e) {
      var t = co();
      return (
        "function" == typeof e && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = (e = t.queue =
          {
            pending: null,
            dispatch: null,
            lastRenderedReducer: fo,
            lastRenderedState: e,
          }).dispatch =
          Lo.bind(null, ro, e)),
        [t.memoizedState, e]
      );
    }
    function yo(e, t, n, r) {
      return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        null === (t = ro.updateQueue)
          ? ((t = { lastEffect: null }),
            (ro.updateQueue = t),
            (t.lastEffect = e.next = e))
          : null === (n = t.lastEffect)
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
      );
    }
    function vo() {
      return po().memoizedState;
    }
    function bo(e, t, n, r) {
      var i = co();
      (ro.effectTag |= e),
        (i.memoizedState = yo(1 | t, n, void 0, void 0 === r ? null : r));
    }
    function wo(e, t, n, r) {
      var i = po();
      r = void 0 === r ? null : r;
      var l = void 0;
      if (null !== io) {
        var o = io.memoizedState;
        if (((l = o.destroy), null !== r && so(r, o.deps)))
          return void yo(t, n, l, r);
      }
      (ro.effectTag |= e), (i.memoizedState = yo(1 | t, n, l, r));
    }
    function Eo(e, t) {
      return bo(516, 4, e, t);
    }
    function ko(e, t) {
      return wo(516, 4, e, t);
    }
    function So(e, t) {
      return wo(4, 2, e, t);
    }
    function xo(e, t) {
      return "function" == typeof t
        ? ((e = e()),
          t(e),
          function () {
            t(null);
          })
        : null != t
        ? ((e = e()),
          (t.current = e),
          function () {
            t.current = null;
          })
        : void 0;
    }
    function Po(e, t, n) {
      return (
        (n = null != n ? n.concat([e]) : null), wo(4, 2, xo.bind(null, t, e), n)
      );
    }
    function To() {}
    function _o(e, t) {
      return (co().memoizedState = [e, void 0 === t ? null : t]), e;
    }
    function Co(e, t) {
      var n = po();
      t = void 0 === t ? null : t;
      var r = n.memoizedState;
      return null !== r && null !== t && so(t, r[1])
        ? r[0]
        : ((n.memoizedState = [e, t]), e);
    }
    function Io(e, t) {
      var n = po();
      t = void 0 === t ? null : t;
      var r = n.memoizedState;
      return null !== r && null !== t && so(t, r[1])
        ? r[0]
        : ((e = e()), (n.memoizedState = [e, t]), e);
    }
    function Mo(e, t, n) {
      var r = nl();
      il(98 > r ? 98 : r, function () {
        e(!0);
      }),
        il(97 < r ? 97 : r, function () {
          var r = to.suspense;
          to.suspense = void 0 === t ? null : t;
          try {
            e(!1), n();
          } finally {
            to.suspense = r;
          }
        });
    }
    function Lo(e, t, n) {
      var r = ps(),
        i = Cl.suspense;
      i = {
        expirationTime: (r = fs(r, e, i)),
        suspenseConfig: i,
        action: n,
        eagerReducer: null,
        eagerState: null,
        next: null,
      };
      var l = t.pending;
      if (
        (null === l ? (i.next = i) : ((i.next = l.next), (l.next = i)),
        (t.pending = i),
        (l = e.alternate),
        e === ro || (null !== l && l === ro))
      )
        (oo = !0), (i.expirationTime = no), (ro.expirationTime = no);
      else {
        if (
          0 === e.expirationTime &&
          (null === l || 0 === l.expirationTime) &&
          null !== (l = t.lastRenderedReducer)
        )
          try {
            var o = t.lastRenderedState,
              a = l(o, n);
            if (((i.eagerReducer = l), (i.eagerState = a), Jr(a, o))) return;
          } catch (e) {}
        ms(e, r);
      }
    }
    var No = {
        readContext: bl,
        useCallback: ao,
        useContext: ao,
        useEffect: ao,
        useImperativeHandle: ao,
        useLayoutEffect: ao,
        useMemo: ao,
        useReducer: ao,
        useRef: ao,
        useState: ao,
        useDebugValue: ao,
        useResponder: ao,
        useDeferredValue: ao,
        useTransition: ao,
      },
      Ro = {
        readContext: bl,
        useCallback: _o,
        useContext: bl,
        useEffect: Eo,
        useImperativeHandle: function (e, t, n) {
          return (
            (n = null != n ? n.concat([e]) : null),
            bo(4, 2, xo.bind(null, t, e), n)
          );
        },
        useLayoutEffect: function (e, t) {
          return bo(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = co();
          return (
            (t = void 0 === t ? null : t),
            (e = e()),
            (n.memoizedState = [e, t]),
            e
          );
        },
        useReducer: function (e, t, n) {
          var r = co();
          return (
            (t = void 0 !== n ? n(t) : t),
            (r.memoizedState = r.baseState = t),
            (e = (e = r.queue =
              {
                pending: null,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t,
              }).dispatch =
              Lo.bind(null, ro, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          return (e = { current: e }), (co().memoizedState = e);
        },
        useState: go,
        useDebugValue: To,
        useResponder: Jl,
        useDeferredValue: function (e, t) {
          var n = go(e),
            r = n[0],
            i = n[1];
          return (
            Eo(
              function () {
                var n = to.suspense;
                to.suspense = void 0 === t ? null : t;
                try {
                  i(e);
                } finally {
                  to.suspense = n;
                }
              },
              [e, t]
            ),
            r
          );
        },
        useTransition: function (e) {
          var t = go(!1),
            n = t[0];
          return (t = t[1]), [_o(Mo.bind(null, t, e), [t, e]), n];
        },
      },
      Oo = {
        readContext: bl,
        useCallback: Co,
        useContext: bl,
        useEffect: ko,
        useImperativeHandle: Po,
        useLayoutEffect: So,
        useMemo: Io,
        useReducer: mo,
        useRef: vo,
        useState: function () {
          return mo(fo);
        },
        useDebugValue: To,
        useResponder: Jl,
        useDeferredValue: function (e, t) {
          var n = mo(fo),
            r = n[0],
            i = n[1];
          return (
            ko(
              function () {
                var n = to.suspense;
                to.suspense = void 0 === t ? null : t;
                try {
                  i(e);
                } finally {
                  to.suspense = n;
                }
              },
              [e, t]
            ),
            r
          );
        },
        useTransition: function (e) {
          var t = mo(fo),
            n = t[0];
          return (t = t[1]), [Co(Mo.bind(null, t, e), [t, e]), n];
        },
      },
      Ao = {
        readContext: bl,
        useCallback: Co,
        useContext: bl,
        useEffect: ko,
        useImperativeHandle: Po,
        useLayoutEffect: So,
        useMemo: Io,
        useReducer: ho,
        useRef: vo,
        useState: function () {
          return ho(fo);
        },
        useDebugValue: To,
        useResponder: Jl,
        useDeferredValue: function (e, t) {
          var n = ho(fo),
            r = n[0],
            i = n[1];
          return (
            ko(
              function () {
                var n = to.suspense;
                to.suspense = void 0 === t ? null : t;
                try {
                  i(e);
                } finally {
                  to.suspense = n;
                }
              },
              [e, t]
            ),
            r
          );
        },
        useTransition: function (e) {
          var t = ho(fo),
            n = t[0];
          return (t = t[1]), [Co(Mo.bind(null, t, e), [t, e]), n];
        },
      },
      Fo = null,
      zo = null,
      Do = !1;
    function Ko(e, t) {
      var n = $s(5, null, null, 0);
      (n.elementType = "DELETED"),
        (n.type = "DELETED"),
        (n.stateNode = t),
        (n.return = e),
        (n.effectTag = 8),
        null !== e.lastEffect
          ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
          : (e.firstEffect = e.lastEffect = n);
    }
    function Vo(e, t) {
      switch (e.tag) {
        case 5:
          var n = e.type;
          return (
            null !==
              (t =
                1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase()
                  ? null
                  : t) && ((e.stateNode = t), !0)
          );
        case 6:
          return (
            null !==
              (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
            ((e.stateNode = t), !0)
          );
        default:
          return !1;
      }
    }
    function Uo(e) {
      if (Do) {
        var t = zo;
        if (t) {
          var n = t;
          if (!Vo(e, t)) {
            if (!(t = zn(n.nextSibling)) || !Vo(e, t))
              return (
                (e.effectTag = (-1025 & e.effectTag) | 2),
                (Do = !1),
                void (Fo = e)
              );
            Ko(Fo, n);
          }
          (Fo = e), (zo = zn(t.firstChild));
        } else (e.effectTag = (-1025 & e.effectTag) | 2), (Do = !1), (Fo = e);
      }
    }
    function Bo(e) {
      for (
        e = e.return;
        null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

      )
        e = e.return;
      Fo = e;
    }
    function jo(e) {
      if (e !== Fo) return !1;
      if (!Do) return Bo(e), (Do = !0), !1;
      var t = e.type;
      if (
        5 !== e.tag ||
        ("head" !== t && "body" !== t && !On(t, e.memoizedProps))
      )
        for (t = zo; t; ) Ko(e, t), (t = zn(t.nextSibling));
      if ((Bo(e), 13 === e.tag)) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
          throw Error(v(317));
        e: {
          for (e = e.nextSibling, t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("/$" === n) {
                if (0 === t) {
                  zo = zn(e.nextSibling);
                  break e;
                }
                t--;
              } else ("$" !== n && n !== Mn && n !== In) || t++;
            }
            e = e.nextSibling;
          }
          zo = null;
        }
      } else zo = Fo ? zn(e.stateNode.nextSibling) : null;
      return !0;
    }
    function $o() {
      (zo = Fo = null), (Do = !1);
    }
    var Ho = se.ReactCurrentOwner,
      Wo = !1;
    function qo(e, t, n, r) {
      t.child = null === e ? Ul(t, null, n, r) : Vl(t, e.child, n, r);
    }
    function Go(e, t, n, r, i) {
      n = n.render;
      var l = t.ref;
      return (
        vl(t, i),
        (r = uo(e, t, n, r, l, i)),
        null === e || Wo
          ? ((t.effectTag |= 1), qo(e, t, r, i), t.child)
          : ((t.updateQueue = e.updateQueue),
            (t.effectTag &= -517),
            e.expirationTime <= i && (e.expirationTime = 0),
            ca(e, t, i))
      );
    }
    function Qo(e, t, n, r, i, l) {
      if (null === e) {
        var o = n.type;
        return "function" != typeof o ||
          Hs(o) ||
          void 0 !== o.defaultProps ||
          null !== n.compare ||
          void 0 !== n.defaultProps
          ? (((e = qs(n.type, null, r, null, t.mode, l)).ref = t.ref),
            (e.return = t),
            (t.child = e))
          : ((t.tag = 15), (t.type = o), Yo(e, t, o, r, i, l));
      }
      return (
        (o = e.child),
        i < l &&
        ((i = o.memoizedProps),
        (n = null !== (n = n.compare) ? n : ti)(i, r) && e.ref === t.ref)
          ? ca(e, t, l)
          : ((t.effectTag |= 1),
            ((e = Ws(o, r)).ref = t.ref),
            (e.return = t),
            (t.child = e))
      );
    }
    function Yo(e, t, n, r, i, l) {
      return null !== e &&
        ti(e.memoizedProps, r) &&
        e.ref === t.ref &&
        ((Wo = !1), i < l)
        ? ((t.expirationTime = e.expirationTime), ca(e, t, l))
        : Zo(e, t, n, r, l);
    }
    function Xo(e, t) {
      var n = t.ref;
      ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
        (t.effectTag |= 128);
    }
    function Zo(e, t, n, r, i) {
      var l = Li(n) ? Ii : _i.current;
      return (
        (l = Mi(t, l)),
        vl(t, i),
        (n = uo(e, t, n, r, l, i)),
        null === e || Wo
          ? ((t.effectTag |= 1), qo(e, t, n, i), t.child)
          : ((t.updateQueue = e.updateQueue),
            (t.effectTag &= -517),
            e.expirationTime <= i && (e.expirationTime = 0),
            ca(e, t, i))
      );
    }
    function Jo(e, t, n, r, i) {
      if (Li(n)) {
        var l = !0;
        Ai(t);
      } else l = !1;
      if ((vl(t, i), null === t.stateNode))
        null !== e &&
          ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
          Rl(t, n, r),
          Al(t, n, r, i),
          (r = !0);
      else if (null === e) {
        var o = t.stateNode,
          a = t.memoizedProps;
        o.props = a;
        var s = o.context,
          u = n.contextType;
        "object" == typeof u && null !== u
          ? (u = bl(u))
          : (u = Mi(t, (u = Li(n) ? Ii : _i.current)));
        var c = n.getDerivedStateFromProps,
          d =
            "function" == typeof c ||
            "function" == typeof o.getSnapshotBeforeUpdate;
        d ||
          ("function" != typeof o.UNSAFE_componentWillReceiveProps &&
            "function" != typeof o.componentWillReceiveProps) ||
          ((a !== r || s !== u) && Ol(t, o, r, u)),
          (wl = !1);
        var p = t.memoizedState;
        (o.state = p),
          Tl(t, r, o, i),
          (s = t.memoizedState),
          a !== r || p !== s || Ci.current || wl
            ? ("function" == typeof c &&
                (Ml(t, n, c, r), (s = t.memoizedState)),
              (a = wl || Nl(t, n, a, r, p, s, u))
                ? (d ||
                    ("function" != typeof o.UNSAFE_componentWillMount &&
                      "function" != typeof o.componentWillMount) ||
                    ("function" == typeof o.componentWillMount &&
                      o.componentWillMount(),
                    "function" == typeof o.UNSAFE_componentWillMount &&
                      o.UNSAFE_componentWillMount()),
                  "function" == typeof o.componentDidMount &&
                    (t.effectTag |= 4))
                : ("function" == typeof o.componentDidMount &&
                    (t.effectTag |= 4),
                  (t.memoizedProps = r),
                  (t.memoizedState = s)),
              (o.props = r),
              (o.state = s),
              (o.context = u),
              (r = a))
            : ("function" == typeof o.componentDidMount && (t.effectTag |= 4),
              (r = !1));
      } else
        (o = t.stateNode),
          kl(e, t),
          (a = t.memoizedProps),
          (o.props = t.type === t.elementType ? a : cl(t.type, a)),
          (s = o.context),
          "object" == typeof (u = n.contextType) && null !== u
            ? (u = bl(u))
            : (u = Mi(t, (u = Li(n) ? Ii : _i.current))),
          (d =
            "function" == typeof (c = n.getDerivedStateFromProps) ||
            "function" == typeof o.getSnapshotBeforeUpdate) ||
            ("function" != typeof o.UNSAFE_componentWillReceiveProps &&
              "function" != typeof o.componentWillReceiveProps) ||
            ((a !== r || s !== u) && Ol(t, o, r, u)),
          (wl = !1),
          (s = t.memoizedState),
          (o.state = s),
          Tl(t, r, o, i),
          (p = t.memoizedState),
          a !== r || s !== p || Ci.current || wl
            ? ("function" == typeof c &&
                (Ml(t, n, c, r), (p = t.memoizedState)),
              (c = wl || Nl(t, n, a, r, s, p, u))
                ? (d ||
                    ("function" != typeof o.UNSAFE_componentWillUpdate &&
                      "function" != typeof o.componentWillUpdate) ||
                    ("function" == typeof o.componentWillUpdate &&
                      o.componentWillUpdate(r, p, u),
                    "function" == typeof o.UNSAFE_componentWillUpdate &&
                      o.UNSAFE_componentWillUpdate(r, p, u)),
                  "function" == typeof o.componentDidUpdate &&
                    (t.effectTag |= 4),
                  "function" == typeof o.getSnapshotBeforeUpdate &&
                    (t.effectTag |= 256))
                : ("function" != typeof o.componentDidUpdate ||
                    (a === e.memoizedProps && s === e.memoizedState) ||
                    (t.effectTag |= 4),
                  "function" != typeof o.getSnapshotBeforeUpdate ||
                    (a === e.memoizedProps && s === e.memoizedState) ||
                    (t.effectTag |= 256),
                  (t.memoizedProps = r),
                  (t.memoizedState = p)),
              (o.props = r),
              (o.state = p),
              (o.context = u),
              (r = c))
            : ("function" != typeof o.componentDidUpdate ||
                (a === e.memoizedProps && s === e.memoizedState) ||
                (t.effectTag |= 4),
              "function" != typeof o.getSnapshotBeforeUpdate ||
                (a === e.memoizedProps && s === e.memoizedState) ||
                (t.effectTag |= 256),
              (r = !1));
      return ea(e, t, n, r, l, i);
    }
    function ea(e, t, n, r, i, l) {
      Xo(e, t);
      var o = 0 != (64 & t.effectTag);
      if (!r && !o) return i && Fi(t, n, !1), ca(e, t, l);
      (r = t.stateNode), (Ho.current = t);
      var a =
        o && "function" != typeof n.getDerivedStateFromError
          ? null
          : r.render();
      return (
        (t.effectTag |= 1),
        null !== e && o
          ? ((t.child = Vl(t, e.child, null, l)), (t.child = Vl(t, null, a, l)))
          : qo(e, t, a, l),
        (t.memoizedState = r.state),
        i && Fi(t, n, !0),
        t.child
      );
    }
    function ta(e) {
      var t = e.stateNode;
      t.pendingContext
        ? Ri(0, t.pendingContext, t.pendingContext !== t.context)
        : t.context && Ri(0, t.context, !1),
        ql(e, t.containerInfo);
    }
    var na,
      ra,
      ia,
      la = { dehydrated: null, retryTime: 0 };
    function oa(e, t, n) {
      var r,
        i = t.mode,
        l = t.pendingProps,
        o = Xl.current,
        a = !1;
      if (
        ((r = 0 != (64 & t.effectTag)) ||
          (r = 0 != (2 & o) && (null === e || null !== e.memoizedState)),
        r
          ? ((a = !0), (t.effectTag &= -65))
          : (null !== e && null === e.memoizedState) ||
            void 0 === l.fallback ||
            !0 === l.unstable_avoidThisFallback ||
            (o |= 1),
        Pi(Xl, 1 & o),
        null === e)
      ) {
        if ((void 0 !== l.fallback && Uo(t), a)) {
          if (
            ((a = l.fallback),
            ((l = Gs(null, i, 0, null)).return = t),
            0 == (2 & t.mode))
          )
            for (
              e = null !== t.memoizedState ? t.child.child : t.child,
                l.child = e;
              null !== e;

            )
              (e.return = l), (e = e.sibling);
          return (
            ((n = Gs(a, i, n, null)).return = t),
            (l.sibling = n),
            (t.memoizedState = la),
            (t.child = l),
            n
          );
        }
        return (
          (i = l.children),
          (t.memoizedState = null),
          (t.child = Ul(t, null, i, n))
        );
      }
      if (null !== e.memoizedState) {
        if (((i = (e = e.child).sibling), a)) {
          if (
            ((l = l.fallback),
            ((n = Ws(e, e.pendingProps)).return = t),
            0 == (2 & t.mode) &&
              (a = null !== t.memoizedState ? t.child.child : t.child) !==
                e.child)
          )
            for (n.child = a; null !== a; ) (a.return = n), (a = a.sibling);
          return (
            ((i = Ws(i, l)).return = t),
            (n.sibling = i),
            (n.childExpirationTime = 0),
            (t.memoizedState = la),
            (t.child = n),
            i
          );
        }
        return (
          (n = Vl(t, e.child, l.children, n)),
          (t.memoizedState = null),
          (t.child = n)
        );
      }
      if (((e = e.child), a)) {
        if (
          ((a = l.fallback),
          ((l = Gs(null, i, 0, null)).return = t),
          (l.child = e),
          null !== e && (e.return = l),
          0 == (2 & t.mode))
        )
          for (
            e = null !== t.memoizedState ? t.child.child : t.child, l.child = e;
            null !== e;

          )
            (e.return = l), (e = e.sibling);
        return (
          ((n = Gs(a, i, n, null)).return = t),
          (l.sibling = n),
          (n.effectTag |= 2),
          (l.childExpirationTime = 0),
          (t.memoizedState = la),
          (t.child = l),
          n
        );
      }
      return (t.memoizedState = null), (t.child = Vl(t, e, l.children, n));
    }
    function aa(e, t) {
      e.expirationTime < t && (e.expirationTime = t);
      var n = e.alternate;
      null !== n && n.expirationTime < t && (n.expirationTime = t),
        yl(e.return, t);
    }
    function sa(e, t, n, r, i, l) {
      var o = e.memoizedState;
      null === o
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailExpiration: 0,
            tailMode: i,
            lastEffect: l,
          })
        : ((o.isBackwards = t),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = r),
          (o.tail = n),
          (o.tailExpiration = 0),
          (o.tailMode = i),
          (o.lastEffect = l));
    }
    function ua(e, t, n) {
      var r = t.pendingProps,
        i = r.revealOrder,
        l = r.tail;
      if ((qo(e, t, r.children, n), 0 != (2 & (r = Xl.current))))
        (r = (1 & r) | 2), (t.effectTag |= 64);
      else {
        if (null !== e && 0 != (64 & e.effectTag))
          e: for (e = t.child; null !== e; ) {
            if (13 === e.tag) null !== e.memoizedState && aa(e, n);
            else if (19 === e.tag) aa(e, n);
            else if (null !== e.child) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break e;
            for (; null === e.sibling; ) {
              if (null === e.return || e.return === t) break e;
              e = e.return;
            }
            (e.sibling.return = e.return), (e = e.sibling);
          }
        r &= 1;
      }
      if ((Pi(Xl, r), 0 == (2 & t.mode))) t.memoizedState = null;
      else
        switch (i) {
          case "forwards":
            for (n = t.child, i = null; null !== n; )
              null !== (e = n.alternate) && null === Zl(e) && (i = n),
                (n = n.sibling);
            null === (n = i)
              ? ((i = t.child), (t.child = null))
              : ((i = n.sibling), (n.sibling = null)),
              sa(t, !1, i, n, l, t.lastEffect);
            break;
          case "backwards":
            for (n = null, i = t.child, t.child = null; null !== i; ) {
              if (null !== (e = i.alternate) && null === Zl(e)) {
                t.child = i;
                break;
              }
              (e = i.sibling), (i.sibling = n), (n = i), (i = e);
            }
            sa(t, !0, n, null, l, t.lastEffect);
            break;
          case "together":
            sa(t, !1, null, null, void 0, t.lastEffect);
            break;
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function ca(e, t, n) {
      null !== e && (t.dependencies = e.dependencies);
      var r = t.expirationTime;
      if ((0 !== r && Ts(r), t.childExpirationTime < n)) return null;
      if (null !== e && t.child !== e.child) throw Error(v(153));
      if (null !== t.child) {
        for (
          n = Ws((e = t.child), e.pendingProps), t.child = n, n.return = t;
          null !== e.sibling;

        )
          (e = e.sibling), ((n = n.sibling = Ws(e, e.pendingProps)).return = t);
        n.sibling = null;
      }
      return t.child;
    }
    function da(e, t) {
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; null !== t; )
            null !== t.alternate && (n = t), (t = t.sibling);
          null === n ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; null !== n; )
            null !== n.alternate && (r = n), (n = n.sibling);
          null === r
            ? t || null === e.tail
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
    }
    function pa(e, t, n) {
      var r = t.pendingProps;
      switch (t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return null;
        case 1:
        case 17:
          return Li(t.type) && Ni(), null;
        case 3:
          return (
            Gl(),
            xi(Ci),
            xi(_i),
            (n = t.stateNode).pendingContext &&
              ((n.context = n.pendingContext), (n.pendingContext = null)),
            (null !== e && null !== e.child) || !jo(t) || (t.effectTag |= 4),
            null
          );
        case 5:
          Yl(t), (n = Wl(Hl.current));
          var i = t.type;
          if (null !== e && null != t.stateNode)
            ra(e, t, i, r, n), e.ref !== t.ref && (t.effectTag |= 128);
          else {
            if (!r) {
              if (null === t.stateNode) throw Error(v(166));
              return null;
            }
            if (((e = Wl(jl.current)), jo(t))) {
              (r = t.stateNode), (i = t.type);
              var l = t.memoizedProps;
              switch (((r[Vn] = t), (r[Un] = l), i)) {
                case "iframe":
                case "object":
                case "embed":
                  an("load", r);
                  break;
                case "video":
                case "audio":
                  for (e = 0; e < ut.length; e++) an(ut[e], r);
                  break;
                case "source":
                  an("error", r);
                  break;
                case "img":
                case "image":
                case "link":
                  an("error", r), an("load", r);
                  break;
                case "form":
                  an("reset", r), an("submit", r);
                  break;
                case "details":
                  an("toggle", r);
                  break;
                case "input":
                  Ae(r, l), an("invalid", r), En(n, "onChange");
                  break;
                case "select":
                  (r._wrapperState = { wasMultiple: !!l.multiple }),
                    an("invalid", r),
                    En(n, "onChange");
                  break;
                case "textarea":
                  je(r, l), an("invalid", r), En(n, "onChange");
              }
              for (var o in (vn(i, l), (e = null), l))
                if (l.hasOwnProperty(o)) {
                  var a = l[o];
                  "children" === o
                    ? "string" == typeof a
                      ? r.textContent !== a && (e = ["children", a])
                      : "number" == typeof a &&
                        r.textContent !== "" + a &&
                        (e = ["children", "" + a])
                    : F.hasOwnProperty(o) && null != a && En(n, o);
                }
              switch (i) {
                case "input":
                  Ne(r), De(r, l, !0);
                  break;
                case "textarea":
                  Ne(r), He(r);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  "function" == typeof l.onClick && (r.onclick = kn);
              }
              (n = e), (t.updateQueue = n), null !== n && (t.effectTag |= 4);
            } else {
              switch (
                ((o = 9 === n.nodeType ? n : n.ownerDocument),
                e === wn && (e = Ge(i)),
                e === wn
                  ? "script" === i
                    ? (((e = o.createElement("div")).innerHTML =
                        "<script></script>"),
                      (e = e.removeChild(e.firstChild)))
                    : "string" == typeof r.is
                    ? (e = o.createElement(i, { is: r.is }))
                    : ((e = o.createElement(i)),
                      "select" === i &&
                        ((o = e),
                        r.multiple
                          ? (o.multiple = !0)
                          : r.size && (o.size = r.size)))
                  : (e = o.createElementNS(e, i)),
                (e[Vn] = t),
                (e[Un] = r),
                na(e, t),
                (t.stateNode = e),
                (o = bn(i, r)),
                i)
              ) {
                case "iframe":
                case "object":
                case "embed":
                  an("load", e), (a = r);
                  break;
                case "video":
                case "audio":
                  for (a = 0; a < ut.length; a++) an(ut[a], e);
                  a = r;
                  break;
                case "source":
                  an("error", e), (a = r);
                  break;
                case "img":
                case "image":
                case "link":
                  an("error", e), an("load", e), (a = r);
                  break;
                case "form":
                  an("reset", e), an("submit", e), (a = r);
                  break;
                case "details":
                  an("toggle", e), (a = r);
                  break;
                case "input":
                  Ae(e, r), (a = Oe(e, r)), an("invalid", e), En(n, "onChange");
                  break;
                case "option":
                  a = Ve(e, r);
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (a = g({}, r, { value: void 0 })),
                    an("invalid", e),
                    En(n, "onChange");
                  break;
                case "textarea":
                  je(e, r), (a = Be(e, r)), an("invalid", e), En(n, "onChange");
                  break;
                default:
                  a = r;
              }
              vn(i, a);
              var s = a;
              for (l in s)
                if (s.hasOwnProperty(l)) {
                  var u = s[l];
                  "style" === l
                    ? gn(e, u)
                    : "dangerouslySetInnerHTML" === l
                    ? null != (u = u ? u.__html : void 0) && Ze(e, u)
                    : "children" === l
                    ? "string" == typeof u
                      ? ("textarea" !== i || "" !== u) && Je(e, u)
                      : "number" == typeof u && Je(e, "" + u)
                    : "suppressContentEditableWarning" !== l &&
                      "suppressHydrationWarning" !== l &&
                      "autoFocus" !== l &&
                      (F.hasOwnProperty(l)
                        ? null != u && En(n, l)
                        : null != u && ue(e, l, u, o));
                }
              switch (i) {
                case "input":
                  Ne(e), De(e, r, !1);
                  break;
                case "textarea":
                  Ne(e), He(e);
                  break;
                case "option":
                  null != r.value && e.setAttribute("value", "" + Me(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    null != (n = r.value)
                      ? Ue(e, !!r.multiple, n, !1)
                      : null != r.defaultValue &&
                        Ue(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  "function" == typeof a.onClick && (e.onclick = kn);
              }
              Rn(i, r) && (t.effectTag |= 4);
            }
            null !== t.ref && (t.effectTag |= 128);
          }
          return null;
        case 6:
          if (e && null != t.stateNode) ia(0, t, e.memoizedProps, r);
          else {
            if ("string" != typeof r && null === t.stateNode)
              throw Error(v(166));
            (n = Wl(Hl.current)),
              Wl(jl.current),
              jo(t)
                ? ((n = t.stateNode),
                  (r = t.memoizedProps),
                  (n[Vn] = t),
                  n.nodeValue !== r && (t.effectTag |= 4))
                : (((n = (
                    9 === n.nodeType ? n : n.ownerDocument
                  ).createTextNode(r))[Vn] = t),
                  (t.stateNode = n));
          }
          return null;
        case 13:
          return (
            xi(Xl),
            (r = t.memoizedState),
            0 != (64 & t.effectTag)
              ? ((t.expirationTime = n), t)
              : ((n = null !== r),
                (r = !1),
                null === e
                  ? void 0 !== t.memoizedProps.fallback && jo(t)
                  : ((r = null !== (i = e.memoizedState)),
                    n ||
                      null === i ||
                      (null !== (i = e.child.sibling) &&
                        (null !== (l = t.firstEffect)
                          ? ((t.firstEffect = i), (i.nextEffect = l))
                          : ((t.firstEffect = t.lastEffect = i),
                            (i.nextEffect = null)),
                        (i.effectTag = 8)))),
                n &&
                  !r &&
                  0 != (2 & t.mode) &&
                  ((null === e &&
                    !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
                  0 != (1 & Xl.current)
                    ? qa === Va && (qa = Ua)
                    : ((qa !== Va && qa !== Ua) || (qa = Ba),
                      0 !== Za && null !== $a && (Js($a, Wa), eu($a, Za)))),
                (n || r) && (t.effectTag |= 4),
                null)
          );
        case 4:
          return Gl(), null;
        case 10:
          return gl(t), null;
        case 19:
          if ((xi(Xl), null === (r = t.memoizedState))) return null;
          if (((i = 0 != (64 & t.effectTag)), null === (l = r.rendering))) {
            if (i) da(r, !1);
            else if (qa !== Va || (null !== e && 0 != (64 & e.effectTag)))
              for (l = t.child; null !== l; ) {
                if (null !== (e = Zl(l))) {
                  for (
                    t.effectTag |= 64,
                      da(r, !1),
                      null !== (i = e.updateQueue) &&
                        ((t.updateQueue = i), (t.effectTag |= 4)),
                      null === r.lastEffect && (t.firstEffect = null),
                      t.lastEffect = r.lastEffect,
                      r = t.child;
                    null !== r;

                  )
                    (l = n),
                      ((i = r).effectTag &= 2),
                      (i.nextEffect = null),
                      (i.firstEffect = null),
                      (i.lastEffect = null),
                      null === (e = i.alternate)
                        ? ((i.childExpirationTime = 0),
                          (i.expirationTime = l),
                          (i.child = null),
                          (i.memoizedProps = null),
                          (i.memoizedState = null),
                          (i.updateQueue = null),
                          (i.dependencies = null))
                        : ((i.childExpirationTime = e.childExpirationTime),
                          (i.expirationTime = e.expirationTime),
                          (i.child = e.child),
                          (i.memoizedProps = e.memoizedProps),
                          (i.memoizedState = e.memoizedState),
                          (i.updateQueue = e.updateQueue),
                          (l = e.dependencies),
                          (i.dependencies =
                            null === l
                              ? null
                              : {
                                  expirationTime: l.expirationTime,
                                  firstContext: l.firstContext,
                                  responders: l.responders,
                                })),
                      (r = r.sibling);
                  return Pi(Xl, (1 & Xl.current) | 2), t.child;
                }
                l = l.sibling;
              }
          } else {
            if (!i)
              if (null !== (e = Zl(l))) {
                if (
                  ((t.effectTag |= 64),
                  (i = !0),
                  null !== (n = e.updateQueue) &&
                    ((t.updateQueue = n), (t.effectTag |= 4)),
                  da(r, !0),
                  null === r.tail && "hidden" === r.tailMode && !l.alternate)
                )
                  return (
                    null !== (t = t.lastEffect = r.lastEffect) &&
                      (t.nextEffect = null),
                    null
                  );
              } else
                2 * tl() - r.renderingStartTime > r.tailExpiration &&
                  1 < n &&
                  ((t.effectTag |= 64),
                  (i = !0),
                  da(r, !1),
                  (t.expirationTime = t.childExpirationTime = n - 1));
            r.isBackwards
              ? ((l.sibling = t.child), (t.child = l))
              : (null !== (n = r.last) ? (n.sibling = l) : (t.child = l),
                (r.last = l));
          }
          return null !== r.tail
            ? (0 === r.tailExpiration && (r.tailExpiration = tl() + 500),
              (n = r.tail),
              (r.rendering = n),
              (r.tail = n.sibling),
              (r.lastEffect = t.lastEffect),
              (r.renderingStartTime = tl()),
              (n.sibling = null),
              (t = Xl.current),
              Pi(Xl, i ? (1 & t) | 2 : 1 & t),
              n)
            : null;
      }
      throw Error(v(156, t.tag));
    }
    function fa(e) {
      switch (e.tag) {
        case 1:
          Li(e.type) && Ni();
          var t = e.effectTag;
          return 4096 & t ? ((e.effectTag = (-4097 & t) | 64), e) : null;
        case 3:
          if ((Gl(), xi(Ci), xi(_i), 0 != (64 & (t = e.effectTag))))
            throw Error(v(285));
          return (e.effectTag = (-4097 & t) | 64), e;
        case 5:
          return Yl(e), null;
        case 13:
          return (
            xi(Xl),
            4096 & (t = e.effectTag)
              ? ((e.effectTag = (-4097 & t) | 64), e)
              : null
          );
        case 19:
          return xi(Xl), null;
        case 4:
          return Gl(), null;
        case 10:
          return gl(e), null;
        default:
          return null;
      }
    }
    function ma(e, t) {
      return { value: e, source: t, stack: Ie(t) };
    }
    (na = function (e, t) {
      for (var n = t.child; null !== n; ) {
        if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
        else if (4 !== n.tag && null !== n.child) {
          (n.child.return = n), (n = n.child);
          continue;
        }
        if (n === t) break;
        for (; null === n.sibling; ) {
          if (null === n.return || n.return === t) return;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
    }),
      (ra = function (e, t, n, r, i) {
        var l = e.memoizedProps;
        if (l !== r) {
          var o,
            a,
            s = t.stateNode;
          switch ((Wl(jl.current), (e = null), n)) {
            case "input":
              (l = Oe(s, l)), (r = Oe(s, r)), (e = []);
              break;
            case "option":
              (l = Ve(s, l)), (r = Ve(s, r)), (e = []);
              break;
            case "select":
              (l = g({}, l, { value: void 0 })),
                (r = g({}, r, { value: void 0 })),
                (e = []);
              break;
            case "textarea":
              (l = Be(s, l)), (r = Be(s, r)), (e = []);
              break;
            default:
              "function" != typeof l.onClick &&
                "function" == typeof r.onClick &&
                (s.onclick = kn);
          }
          for (o in (vn(n, r), (n = null), l))
            if (!r.hasOwnProperty(o) && l.hasOwnProperty(o) && null != l[o])
              if ("style" === o)
                for (a in (s = l[o]))
                  s.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
              else
                "dangerouslySetInnerHTML" !== o &&
                  "children" !== o &&
                  "suppressContentEditableWarning" !== o &&
                  "suppressHydrationWarning" !== o &&
                  "autoFocus" !== o &&
                  (F.hasOwnProperty(o)
                    ? e || (e = [])
                    : (e = e || []).push(o, null));
          for (o in r) {
            var u = r[o];
            if (
              ((s = null != l ? l[o] : void 0),
              r.hasOwnProperty(o) && u !== s && (null != u || null != s))
            )
              if ("style" === o)
                if (s) {
                  for (a in s)
                    !s.hasOwnProperty(a) ||
                      (u && u.hasOwnProperty(a)) ||
                      (n || (n = {}), (n[a] = ""));
                  for (a in u)
                    u.hasOwnProperty(a) &&
                      s[a] !== u[a] &&
                      (n || (n = {}), (n[a] = u[a]));
                } else n || (e || (e = []), e.push(o, n)), (n = u);
              else
                "dangerouslySetInnerHTML" === o
                  ? ((u = u ? u.__html : void 0),
                    (s = s ? s.__html : void 0),
                    null != u && s !== u && (e = e || []).push(o, u))
                  : "children" === o
                  ? s === u ||
                    ("string" != typeof u && "number" != typeof u) ||
                    (e = e || []).push(o, "" + u)
                  : "suppressContentEditableWarning" !== o &&
                    "suppressHydrationWarning" !== o &&
                    (F.hasOwnProperty(o)
                      ? (null != u && En(i, o), e || s === u || (e = []))
                      : (e = e || []).push(o, u));
          }
          n && (e = e || []).push("style", n),
            (i = e),
            (t.updateQueue = i) && (t.effectTag |= 4);
        }
      }),
      (ia = function (e, t, n, r) {
        n !== r && (t.effectTag |= 4);
      });
    var ha = "function" == typeof WeakSet ? WeakSet : Set;
    function ga(e, t) {
      var n = t.source,
        r = t.stack;
      null === r && null !== n && (r = Ie(n)),
        null !== n && Ce(n.type),
        (t = t.value),
        null !== e && 1 === e.tag && Ce(e.type);
      try {
        console.error(t);
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function ya(e) {
      var t = e.ref;
      if (null !== t)
        if ("function" == typeof t)
          try {
            t(null);
          } catch (t) {
            Ds(e, t);
          }
        else t.current = null;
    }
    function va(e, t) {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
        case 3:
        case 5:
        case 6:
        case 4:
        case 17:
          return;
        case 1:
          if (256 & t.effectTag && null !== e) {
            var n = e.memoizedProps,
              r = e.memoizedState;
            (t = (e = t.stateNode).getSnapshotBeforeUpdate(
              t.elementType === t.type ? n : cl(t.type, n),
              r
            )),
              (e.__reactInternalSnapshotBeforeUpdate = t);
          }
          return;
      }
      throw Error(v(163));
    }
    function ba(e, t) {
      if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
        var n = (t = t.next);
        do {
          if ((n.tag & e) === e) {
            var r = n.destroy;
            (n.destroy = void 0), void 0 !== r && r();
          }
          n = n.next;
        } while (n !== t);
      }
    }
    function wa(e, t) {
      if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
        var n = (t = t.next);
        do {
          if ((n.tag & e) === e) {
            var r = n.create;
            n.destroy = r();
          }
          n = n.next;
        } while (n !== t);
      }
    }
    function Ea(e, t, n) {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
          return void wa(3, n);
        case 1:
          if (((e = n.stateNode), 4 & n.effectTag))
            if (null === t) e.componentDidMount();
            else {
              var r =
                n.elementType === n.type
                  ? t.memoizedProps
                  : cl(n.type, t.memoizedProps);
              e.componentDidUpdate(
                r,
                t.memoizedState,
                e.__reactInternalSnapshotBeforeUpdate
              );
            }
          return void (null !== (t = n.updateQueue) && _l(n, t, e));
        case 3:
          if (null !== (t = n.updateQueue)) {
            if (((e = null), null !== n.child))
              switch (n.child.tag) {
                case 5:
                case 1:
                  e = n.child.stateNode;
              }
            _l(n, t, e);
          }
          return;
        case 5:
          return (
            (e = n.stateNode),
            void (
              null === t &&
              4 & n.effectTag &&
              Rn(n.type, n.memoizedProps) &&
              e.focus()
            )
          );
        case 6:
        case 4:
        case 12:
        case 19:
        case 17:
        case 20:
        case 21:
          return;
        case 13:
          return void (
            null === n.memoizedState &&
            ((n = n.alternate),
            null !== n &&
              ((n = n.memoizedState),
              null !== n && ((n = n.dehydrated), null !== n && Qt(n))))
          );
      }
      throw Error(v(163));
    }
    function ka(e, t, n) {
      switch (("function" == typeof Bs && Bs(t), t.tag)) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
          if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
            var r = e.next;
            il(97 < n ? 97 : n, function () {
              var e = r;
              do {
                var n = e.destroy;
                if (void 0 !== n) {
                  var i = t;
                  try {
                    n();
                  } catch (e) {
                    Ds(i, e);
                  }
                }
                e = e.next;
              } while (e !== r);
            });
          }
          break;
        case 1:
          ya(t),
            "function" == typeof (n = t.stateNode).componentWillUnmount &&
              (function (e, t) {
                try {
                  (t.props = e.memoizedProps),
                    (t.state = e.memoizedState),
                    t.componentWillUnmount();
                } catch (t) {
                  Ds(e, t);
                }
              })(t, n);
          break;
        case 5:
          ya(t);
          break;
        case 4:
          Ca(e, t, n);
      }
    }
    function Sa(e) {
      var t = e.alternate;
      (e.return = null),
        (e.child = null),
        (e.memoizedState = null),
        (e.updateQueue = null),
        (e.dependencies = null),
        (e.alternate = null),
        (e.firstEffect = null),
        (e.lastEffect = null),
        (e.pendingProps = null),
        (e.memoizedProps = null),
        (e.stateNode = null),
        null !== t && Sa(t);
    }
    function xa(e) {
      return 5 === e.tag || 3 === e.tag || 4 === e.tag;
    }
    function Pa(e) {
      e: {
        for (var t = e.return; null !== t; ) {
          if (xa(t)) {
            var n = t;
            break e;
          }
          t = t.return;
        }
        throw Error(v(160));
      }
      switch (((t = n.stateNode), n.tag)) {
        case 5:
          var r = !1;
          break;
        case 3:
        case 4:
          (t = t.containerInfo), (r = !0);
          break;
        default:
          throw Error(v(161));
      }
      16 & n.effectTag && (Je(t, ""), (n.effectTag &= -17));
      e: t: for (n = e; ; ) {
        for (; null === n.sibling; ) {
          if (null === n.return || xa(n.return)) {
            n = null;
            break e;
          }
          n = n.return;
        }
        for (
          n.sibling.return = n.return, n = n.sibling;
          5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

        ) {
          if (2 & n.effectTag) continue t;
          if (null === n.child || 4 === n.tag) continue t;
          (n.child.return = n), (n = n.child);
        }
        if (!(2 & n.effectTag)) {
          n = n.stateNode;
          break e;
        }
      }
      r ? Ta(e, n, t) : _a(e, n, t);
    }
    function Ta(e, t, n) {
      var r = e.tag,
        i = 5 === r || 6 === r;
      if (i)
        (e = i ? e.stateNode : e.stateNode.instance),
          t
            ? 8 === n.nodeType
              ? n.parentNode.insertBefore(e, t)
              : n.insertBefore(e, t)
            : (8 === n.nodeType
                ? (t = n.parentNode).insertBefore(e, n)
                : (t = n).appendChild(e),
              null != (n = n._reactRootContainer) ||
                null !== t.onclick ||
                (t.onclick = kn));
      else if (4 !== r && null !== (e = e.child))
        for (Ta(e, t, n), e = e.sibling; null !== e; )
          Ta(e, t, n), (e = e.sibling);
    }
    function _a(e, t, n) {
      var r = e.tag,
        i = 5 === r || 6 === r;
      if (i)
        (e = i ? e.stateNode : e.stateNode.instance),
          t ? n.insertBefore(e, t) : n.appendChild(e);
      else if (4 !== r && null !== (e = e.child))
        for (_a(e, t, n), e = e.sibling; null !== e; )
          _a(e, t, n), (e = e.sibling);
    }
    function Ca(e, t, n) {
      for (var r, i, l = t, o = !1; ; ) {
        if (!o) {
          o = l.return;
          e: for (;;) {
            if (null === o) throw Error(v(160));
            switch (((r = o.stateNode), o.tag)) {
              case 5:
                i = !1;
                break e;
              case 3:
              case 4:
                (r = r.containerInfo), (i = !0);
                break e;
            }
            o = o.return;
          }
          o = !0;
        }
        if (5 === l.tag || 6 === l.tag) {
          e: for (var a = e, s = l, u = n, c = s; ; )
            if ((ka(a, c, u), null !== c.child && 4 !== c.tag))
              (c.child.return = c), (c = c.child);
            else {
              if (c === s) break e;
              for (; null === c.sibling; ) {
                if (null === c.return || c.return === s) break e;
                c = c.return;
              }
              (c.sibling.return = c.return), (c = c.sibling);
            }
          i
            ? ((a = r),
              (s = l.stateNode),
              8 === a.nodeType ? a.parentNode.removeChild(s) : a.removeChild(s))
            : r.removeChild(l.stateNode);
        } else if (4 === l.tag) {
          if (null !== l.child) {
            (r = l.stateNode.containerInfo),
              (i = !0),
              (l.child.return = l),
              (l = l.child);
            continue;
          }
        } else if ((ka(e, l, n), null !== l.child)) {
          (l.child.return = l), (l = l.child);
          continue;
        }
        if (l === t) break;
        for (; null === l.sibling; ) {
          if (null === l.return || l.return === t) return;
          4 === (l = l.return).tag && (o = !1);
        }
        (l.sibling.return = l.return), (l = l.sibling);
      }
    }
    function Ia(e, t) {
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
          return void ba(3, t);
        case 1:
        case 12:
        case 17:
          return;
        case 5:
          var n = t.stateNode;
          if (null != n) {
            var r = t.memoizedProps,
              i = null !== e ? e.memoizedProps : r;
            e = t.type;
            var l = t.updateQueue;
            if (((t.updateQueue = null), null !== l)) {
              for (
                n[Un] = r,
                  "input" === e &&
                    "radio" === r.type &&
                    null != r.name &&
                    Fe(n, r),
                  bn(e, i),
                  t = bn(e, r),
                  i = 0;
                i < l.length;
                i += 2
              ) {
                var o = l[i],
                  a = l[i + 1];
                "style" === o
                  ? gn(n, a)
                  : "dangerouslySetInnerHTML" === o
                  ? Ze(n, a)
                  : "children" === o
                  ? Je(n, a)
                  : ue(n, o, a, t);
              }
              switch (e) {
                case "input":
                  ze(n, r);
                  break;
                case "textarea":
                  $e(n, r);
                  break;
                case "select":
                  (t = n._wrapperState.wasMultiple),
                    (n._wrapperState.wasMultiple = !!r.multiple),
                    null != (e = r.value)
                      ? Ue(n, !!r.multiple, e, !1)
                      : t !== !!r.multiple &&
                        (null != r.defaultValue
                          ? Ue(n, !!r.multiple, r.defaultValue, !0)
                          : Ue(n, !!r.multiple, r.multiple ? [] : "", !1));
              }
            }
          }
          return;
        case 6:
          if (null === t.stateNode) throw Error(v(162));
          return void (t.stateNode.nodeValue = t.memoizedProps);
        case 3:
          return void (
            (t = t.stateNode).hydrate && ((t.hydrate = !1), Qt(t.containerInfo))
          );
        case 13:
          if (
            ((n = t),
            null === t.memoizedState
              ? (r = !1)
              : ((r = !0), (n = t.child), (es = tl())),
            null !== n)
          )
            e: for (e = n; ; ) {
              if (5 === e.tag)
                (l = e.stateNode),
                  r
                    ? "function" == typeof (l = l.style).setProperty
                      ? l.setProperty("display", "none", "important")
                      : (l.display = "none")
                    : ((l = e.stateNode),
                      (i =
                        null != (i = e.memoizedProps.style) &&
                        i.hasOwnProperty("display")
                          ? i.display
                          : null),
                      (l.style.display = hn("display", i)));
              else if (6 === e.tag)
                e.stateNode.nodeValue = r ? "" : e.memoizedProps;
              else {
                if (
                  13 === e.tag &&
                  null !== e.memoizedState &&
                  null === e.memoizedState.dehydrated
                ) {
                  ((l = e.child.sibling).return = e), (e = l);
                  continue;
                }
                if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
              }
              if (e === n) break;
              for (; null === e.sibling; ) {
                if (null === e.return || e.return === n) break e;
                e = e.return;
              }
              (e.sibling.return = e.return), (e = e.sibling);
            }
          return void Ma(t);
        case 19:
          return void Ma(t);
      }
      throw Error(v(163));
    }
    function Ma(e) {
      var t = e.updateQueue;
      if (null !== t) {
        e.updateQueue = null;
        var n = e.stateNode;
        null === n && (n = e.stateNode = new ha()),
          t.forEach(function (t) {
            var r = Vs.bind(null, e, t);
            n.has(t) || (n.add(t), t.then(r, r));
          });
      }
    }
    var La = "function" == typeof WeakMap ? WeakMap : Map;
    function Na(e, t, n) {
      ((n = Sl(n, null)).tag = 3), (n.payload = { element: null });
      var r = t.value;
      return (
        (n.callback = function () {
          ns || ((ns = !0), (rs = r)), ga(e, t);
        }),
        n
      );
    }
    function Ra(e, t, n) {
      (n = Sl(n, null)).tag = 3;
      var r = e.type.getDerivedStateFromError;
      if ("function" == typeof r) {
        var i = t.value;
        n.payload = function () {
          return ga(e, t), r(i);
        };
      }
      var l = e.stateNode;
      return (
        null !== l &&
          "function" == typeof l.componentDidCatch &&
          (n.callback = function () {
            "function" != typeof r &&
              (null === is ? (is = new Set([this])) : is.add(this), ga(e, t));
            var n = t.stack;
            this.componentDidCatch(t.value, {
              componentStack: null !== n ? n : "",
            });
          }),
        n
      );
    }
    var Oa,
      Aa = Math.ceil,
      Fa = se.ReactCurrentDispatcher,
      za = se.ReactCurrentOwner,
      Da = 16,
      Ka = 32,
      Va = 0,
      Ua = 3,
      Ba = 4,
      ja = 0,
      $a = null,
      Ha = null,
      Wa = 0,
      qa = Va,
      Ga = null,
      Qa = 1073741823,
      Ya = 1073741823,
      Xa = null,
      Za = 0,
      Ja = !1,
      es = 0,
      ts = null,
      ns = !1,
      rs = null,
      is = null,
      ls = !1,
      os = null,
      as = 90,
      ss = null,
      us = 0,
      cs = null,
      ds = 0;
    function ps() {
      return 0 != (48 & ja)
        ? 1073741821 - ((tl() / 10) | 0)
        : 0 !== ds
        ? ds
        : (ds = 1073741821 - ((tl() / 10) | 0));
    }
    function fs(e, t, n) {
      if (0 == (2 & (t = t.mode))) return 1073741823;
      var r = nl();
      if (0 == (4 & t)) return 99 === r ? 1073741823 : 1073741822;
      if (0 != (ja & Da)) return Wa;
      if (null !== n) e = ul(e, 0 | n.timeoutMs || 5e3, 250);
      else
        switch (r) {
          case 99:
            e = 1073741823;
            break;
          case 98:
            e = ul(e, 150, 100);
            break;
          case 97:
          case 96:
            e = ul(e, 5e3, 250);
            break;
          case 95:
            e = 2;
            break;
          default:
            throw Error(v(326));
        }
      return null !== $a && e === Wa && --e, e;
    }
    function ms(e, t) {
      if (50 < us) throw ((us = 0), (cs = null), Error(v(185)));
      if (null !== (e = hs(e, t))) {
        var n = nl();
        1073741823 === t
          ? 0 != (8 & ja) && 0 == (48 & ja)
            ? bs(e)
            : (ys(e), 0 === ja && al())
          : ys(e),
          0 == (4 & ja) ||
            (98 !== n && 99 !== n) ||
            (null === ss
              ? (ss = new Map([[e, t]]))
              : (void 0 === (n = ss.get(e)) || n > t) && ss.set(e, t));
      }
    }
    function hs(e, t) {
      e.expirationTime < t && (e.expirationTime = t);
      var n = e.alternate;
      null !== n && n.expirationTime < t && (n.expirationTime = t);
      var r = e.return,
        i = null;
      if (null === r && 3 === e.tag) i = e.stateNode;
      else
        for (; null !== r; ) {
          if (
            ((n = r.alternate),
            r.childExpirationTime < t && (r.childExpirationTime = t),
            null !== n &&
              n.childExpirationTime < t &&
              (n.childExpirationTime = t),
            null === r.return && 3 === r.tag)
          ) {
            i = r.stateNode;
            break;
          }
          r = r.return;
        }
      return (
        null !== i && ($a === i && (Ts(t), qa === Ba && Js(i, Wa)), eu(i, t)), i
      );
    }
    function gs(e) {
      var t = e.lastExpiredTime;
      if (0 !== t) return t;
      if (!Zs(e, (t = e.firstPendingTime))) return t;
      var n = e.lastPingedTime;
      return 2 >= (e = n > (e = e.nextKnownPendingLevel) ? n : e) && t !== e
        ? 0
        : e;
    }
    function ys(e) {
      if (0 !== e.lastExpiredTime)
        (e.callbackExpirationTime = 1073741823),
          (e.callbackPriority = 99),
          (e.callbackNode = ol(bs.bind(null, e)));
      else {
        var t = gs(e),
          n = e.callbackNode;
        if (0 === t)
          null !== n &&
            ((e.callbackNode = null),
            (e.callbackExpirationTime = 0),
            (e.callbackPriority = 90));
        else {
          var r = ps();
          if (
            (1073741823 === t
              ? (r = 99)
              : 1 === t || 2 === t
              ? (r = 95)
              : (r =
                  0 >= (r = 10 * (1073741821 - t) - 10 * (1073741821 - r))
                    ? 99
                    : 250 >= r
                    ? 98
                    : 5250 >= r
                    ? 97
                    : 95),
            null !== n)
          ) {
            var i = e.callbackPriority;
            if (e.callbackExpirationTime === t && i >= r) return;
            n !== Gi && Ki(n);
          }
          (e.callbackExpirationTime = t),
            (e.callbackPriority = r),
            (t =
              1073741823 === t
                ? ol(bs.bind(null, e))
                : ll(r, vs.bind(null, e), {
                    timeout: 10 * (1073741821 - t) - tl(),
                  })),
            (e.callbackNode = t);
        }
      }
    }
    function vs(e, t) {
      if (((ds = 0), t)) return tu(e, (t = ps())), ys(e), null;
      var n = gs(e);
      if (0 !== n) {
        if (((t = e.callbackNode), 0 != (48 & ja))) throw Error(v(327));
        if ((As(), (e === $a && n === Wa) || ks(e, n), null !== Ha)) {
          var r = ja;
          ja |= Da;
          for (var i = xs(); ; )
            try {
              Cs();
              break;
            } catch (t) {
              Ss(e, t);
            }
          if ((hl(), (ja = r), (Fa.current = i), 1 === qa))
            throw ((t = Ga), ks(e, n), Js(e, n), ys(e), t);
          if (null === Ha)
            switch (
              ((i = e.finishedWork = e.current.alternate),
              (e.finishedExpirationTime = n),
              (r = qa),
              ($a = null),
              r)
            ) {
              case Va:
              case 1:
                throw Error(v(345));
              case 2:
                tu(e, 2 < n ? 2 : n);
                break;
              case Ua:
                if (
                  (Js(e, n),
                  n === (r = e.lastSuspendedTime) &&
                    (e.nextKnownPendingLevel = Ls(i)),
                  1073741823 === Qa && 10 < (i = es + 500 - tl()))
                ) {
                  if (Ja) {
                    var l = e.lastPingedTime;
                    if (0 === l || l >= n) {
                      (e.lastPingedTime = n), ks(e, n);
                      break;
                    }
                  }
                  if (0 !== (l = gs(e)) && l !== n) break;
                  if (0 !== r && r !== n) {
                    e.lastPingedTime = r;
                    break;
                  }
                  e.timeoutHandle = An(Ns.bind(null, e), i);
                  break;
                }
                Ns(e);
                break;
              case Ba:
                if (
                  (Js(e, n),
                  n === (r = e.lastSuspendedTime) &&
                    (e.nextKnownPendingLevel = Ls(i)),
                  Ja && (0 === (i = e.lastPingedTime) || i >= n))
                ) {
                  (e.lastPingedTime = n), ks(e, n);
                  break;
                }
                if (0 !== (i = gs(e)) && i !== n) break;
                if (0 !== r && r !== n) {
                  e.lastPingedTime = r;
                  break;
                }
                if (
                  (1073741823 !== Ya
                    ? (r = 10 * (1073741821 - Ya) - tl())
                    : 1073741823 === Qa
                    ? (r = 0)
                    : ((r = 10 * (1073741821 - Qa) - 5e3),
                      0 > (r = (i = tl()) - r) && (r = 0),
                      (n = 10 * (1073741821 - n) - i) <
                        (r =
                          (120 > r
                            ? 120
                            : 480 > r
                            ? 480
                            : 1080 > r
                            ? 1080
                            : 1920 > r
                            ? 1920
                            : 3e3 > r
                            ? 3e3
                            : 4320 > r
                            ? 4320
                            : 1960 * Aa(r / 1960)) - r) && (r = n)),
                  10 < r)
                ) {
                  e.timeoutHandle = An(Ns.bind(null, e), r);
                  break;
                }
                Ns(e);
                break;
              case 5:
                if (1073741823 !== Qa && null !== Xa) {
                  l = Qa;
                  var o = Xa;
                  if (
                    (0 >= (r = 0 | o.busyMinDurationMs)
                      ? (r = 0)
                      : ((i = 0 | o.busyDelayMs),
                        (r =
                          (l =
                            tl() -
                            (10 * (1073741821 - l) -
                              (0 | o.timeoutMs || 5e3))) <= i
                            ? 0
                            : i + r - l)),
                    10 < r)
                  ) {
                    Js(e, n), (e.timeoutHandle = An(Ns.bind(null, e), r));
                    break;
                  }
                }
                Ns(e);
                break;
              default:
                throw Error(v(329));
            }
          if ((ys(e), e.callbackNode === t)) return vs.bind(null, e);
        }
      }
      return null;
    }
    function bs(e) {
      var t = e.lastExpiredTime;
      if (((t = 0 !== t ? t : 1073741823), 0 != (48 & ja))) throw Error(v(327));
      if ((As(), (e === $a && t === Wa) || ks(e, t), null !== Ha)) {
        var n = ja;
        ja |= Da;
        for (var r = xs(); ; )
          try {
            _s();
            break;
          } catch (t) {
            Ss(e, t);
          }
        if ((hl(), (ja = n), (Fa.current = r), 1 === qa))
          throw ((n = Ga), ks(e, t), Js(e, t), ys(e), n);
        if (null !== Ha) throw Error(v(261));
        (e.finishedWork = e.current.alternate),
          (e.finishedExpirationTime = t),
          ($a = null),
          Ns(e),
          ys(e);
      }
      return null;
    }
    function ws(e, t) {
      var n = ja;
      ja |= 1;
      try {
        return e(t);
      } finally {
        0 === (ja = n) && al();
      }
    }
    function Es(e, t) {
      var n = ja;
      (ja &= -2), (ja |= 8);
      try {
        return e(t);
      } finally {
        0 === (ja = n) && al();
      }
    }
    function ks(e, t) {
      (e.finishedWork = null), (e.finishedExpirationTime = 0);
      var n = e.timeoutHandle;
      if ((-1 !== n && ((e.timeoutHandle = -1), Fn(n)), null !== Ha))
        for (n = Ha.return; null !== n; ) {
          var r = n;
          switch (r.tag) {
            case 1:
              null != (r = r.type.childContextTypes) && Ni();
              break;
            case 3:
              Gl(), xi(Ci), xi(_i);
              break;
            case 5:
              Yl(r);
              break;
            case 4:
              Gl();
              break;
            case 13:
            case 19:
              xi(Xl);
              break;
            case 10:
              gl(r);
          }
          n = n.return;
        }
      ($a = e),
        (Ha = Ws(e.current, null)),
        (Wa = t),
        (qa = Va),
        (Ga = null),
        (Ya = Qa = 1073741823),
        (Xa = null),
        (Za = 0),
        (Ja = !1);
    }
    function Ss(e, t) {
      for (;;) {
        try {
          if ((hl(), (eo.current = No), oo))
            for (var n = ro.memoizedState; null !== n; ) {
              var r = n.queue;
              null !== r && (r.pending = null), (n = n.next);
            }
          if (
            ((no = 0),
            (lo = io = ro = null),
            (oo = !1),
            null === Ha || null === Ha.return)
          )
            return (qa = 1), (Ga = t), (Ha = null);
          e: {
            var i = e,
              l = Ha.return,
              o = Ha,
              a = t;
            if (
              ((t = Wa),
              (o.effectTag |= 2048),
              (o.firstEffect = o.lastEffect = null),
              null !== a && "object" == typeof a && "function" == typeof a.then)
            ) {
              var s = a;
              if (0 == (2 & o.mode)) {
                var u = o.alternate;
                u
                  ? ((o.updateQueue = u.updateQueue),
                    (o.memoizedState = u.memoizedState),
                    (o.expirationTime = u.expirationTime))
                  : ((o.updateQueue = null), (o.memoizedState = null));
              }
              var c = 0 != (1 & Xl.current),
                d = l;
              do {
                var p;
                if ((p = 13 === d.tag)) {
                  var f = d.memoizedState;
                  if (null !== f) p = null !== f.dehydrated;
                  else {
                    var m = d.memoizedProps;
                    p =
                      void 0 !== m.fallback &&
                      (!0 !== m.unstable_avoidThisFallback || !c);
                  }
                }
                if (p) {
                  var h = d.updateQueue;
                  if (null === h) {
                    var g = new Set();
                    g.add(s), (d.updateQueue = g);
                  } else h.add(s);
                  if (0 == (2 & d.mode)) {
                    if (
                      ((d.effectTag |= 64), (o.effectTag &= -2981), 1 === o.tag)
                    )
                      if (null === o.alternate) o.tag = 17;
                      else {
                        var y = Sl(1073741823, null);
                        (y.tag = 2), xl(o, y);
                      }
                    o.expirationTime = 1073741823;
                    break e;
                  }
                  (a = void 0), (o = t);
                  var v = i.pingCache;
                  if (
                    (null === v
                      ? ((v = i.pingCache = new La()),
                        (a = new Set()),
                        v.set(s, a))
                      : void 0 === (a = v.get(s)) &&
                        ((a = new Set()), v.set(s, a)),
                    !a.has(o))
                  ) {
                    a.add(o);
                    var b = Ks.bind(null, i, s, o);
                    s.then(b, b);
                  }
                  (d.effectTag |= 4096), (d.expirationTime = t);
                  break e;
                }
                d = d.return;
              } while (null !== d);
              a = Error(
                (Ce(o.type) || "A React component") +
                  " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." +
                  Ie(o)
              );
            }
            5 !== qa && (qa = 2), (a = ma(a, o)), (d = l);
            do {
              switch (d.tag) {
                case 3:
                  (s = a),
                    (d.effectTag |= 4096),
                    (d.expirationTime = t),
                    Pl(d, Na(d, s, t));
                  break e;
                case 1:
                  s = a;
                  var w = d.type,
                    E = d.stateNode;
                  if (
                    0 == (64 & d.effectTag) &&
                    ("function" == typeof w.getDerivedStateFromError ||
                      (null !== E &&
                        "function" == typeof E.componentDidCatch &&
                        (null === is || !is.has(E))))
                  ) {
                    (d.effectTag |= 4096),
                      (d.expirationTime = t),
                      Pl(d, Ra(d, s, t));
                    break e;
                  }
              }
              d = d.return;
            } while (null !== d);
          }
          Ha = Ms(Ha);
        } catch (e) {
          t = e;
          continue;
        }
        break;
      }
    }
    function xs() {
      var e = Fa.current;
      return (Fa.current = No), null === e ? No : e;
    }
    function Ps(e, t) {
      e < Qa && 2 < e && (Qa = e),
        null !== t && e < Ya && 2 < e && ((Ya = e), (Xa = t));
    }
    function Ts(e) {
      e > Za && (Za = e);
    }
    function _s() {
      for (; null !== Ha; ) Ha = Is(Ha);
    }
    function Cs() {
      for (; null !== Ha && !Qi(); ) Ha = Is(Ha);
    }
    function Is(e) {
      var t = Oa(e.alternate, e, Wa);
      return (
        (e.memoizedProps = e.pendingProps),
        null === t && (t = Ms(e)),
        (za.current = null),
        t
      );
    }
    function Ms(e) {
      Ha = e;
      do {
        var t = Ha.alternate;
        if (((e = Ha.return), 0 == (2048 & Ha.effectTag))) {
          if (((t = pa(t, Ha, Wa)), 1 === Wa || 1 !== Ha.childExpirationTime)) {
            for (var n = 0, r = Ha.child; null !== r; ) {
              var i = r.expirationTime,
                l = r.childExpirationTime;
              i > n && (n = i), l > n && (n = l), (r = r.sibling);
            }
            Ha.childExpirationTime = n;
          }
          if (null !== t) return t;
          null !== e &&
            0 == (2048 & e.effectTag) &&
            (null === e.firstEffect && (e.firstEffect = Ha.firstEffect),
            null !== Ha.lastEffect &&
              (null !== e.lastEffect &&
                (e.lastEffect.nextEffect = Ha.firstEffect),
              (e.lastEffect = Ha.lastEffect)),
            1 < Ha.effectTag &&
              (null !== e.lastEffect
                ? (e.lastEffect.nextEffect = Ha)
                : (e.firstEffect = Ha),
              (e.lastEffect = Ha)));
        } else {
          if (null !== (t = fa(Ha))) return (t.effectTag &= 2047), t;
          null !== e &&
            ((e.firstEffect = e.lastEffect = null), (e.effectTag |= 2048));
        }
        if (null !== (t = Ha.sibling)) return t;
        Ha = e;
      } while (null !== Ha);
      return qa === Va && (qa = 5), null;
    }
    function Ls(e) {
      var t = e.expirationTime;
      return t > (e = e.childExpirationTime) ? t : e;
    }
    function Ns(e) {
      var t = nl();
      return il(99, Rs.bind(null, e, t)), null;
    }
    function Rs(e, t) {
      do {
        As();
      } while (null !== os);
      if (0 != (48 & ja)) throw Error(v(327));
      var n = e.finishedWork,
        r = e.finishedExpirationTime;
      if (null === n) return null;
      if (
        ((e.finishedWork = null),
        (e.finishedExpirationTime = 0),
        n === e.current)
      )
        throw Error(v(177));
      (e.callbackNode = null),
        (e.callbackExpirationTime = 0),
        (e.callbackPriority = 90),
        (e.nextKnownPendingLevel = 0);
      var i = Ls(n);
      if (
        ((e.firstPendingTime = i),
        r <= e.lastSuspendedTime
          ? (e.firstSuspendedTime =
              e.lastSuspendedTime =
              e.nextKnownPendingLevel =
                0)
          : r <= e.firstSuspendedTime && (e.firstSuspendedTime = r - 1),
        r <= e.lastPingedTime && (e.lastPingedTime = 0),
        r <= e.lastExpiredTime && (e.lastExpiredTime = 0),
        e === $a && ((Ha = $a = null), (Wa = 0)),
        1 < n.effectTag
          ? null !== n.lastEffect
            ? ((n.lastEffect.nextEffect = n), (i = n.firstEffect))
            : (i = n)
          : (i = n.firstEffect),
        null !== i)
      ) {
        var l = ja;
        (ja |= Ka), (za.current = null), (Ln = on);
        var o = _n();
        if (Cn(o)) {
          if ("selectionStart" in o)
            var a = { start: o.selectionStart, end: o.selectionEnd };
          else
            e: {
              var s =
                (a = ((a = o.ownerDocument) && a.defaultView) || window)
                  .getSelection && a.getSelection();
              if (s && 0 !== s.rangeCount) {
                a = s.anchorNode;
                var u = s.anchorOffset,
                  c = s.focusNode;
                s = s.focusOffset;
                try {
                  a.nodeType, c.nodeType;
                } catch (e) {
                  a = null;
                  break e;
                }
                var d = 0,
                  p = -1,
                  f = -1,
                  m = 0,
                  h = 0,
                  g = o,
                  y = null;
                t: for (;;) {
                  for (
                    var b;
                    g !== a || (0 !== u && 3 !== g.nodeType) || (p = d + u),
                      g !== c || (0 !== s && 3 !== g.nodeType) || (f = d + s),
                      3 === g.nodeType && (d += g.nodeValue.length),
                      null !== (b = g.firstChild);

                  )
                    (y = g), (g = b);
                  for (;;) {
                    if (g === o) break t;
                    if (
                      (y === a && ++m === u && (p = d),
                      y === c && ++h === s && (f = d),
                      null !== (b = g.nextSibling))
                    )
                      break;
                    y = (g = y).parentNode;
                  }
                  g = b;
                }
                a = -1 === p || -1 === f ? null : { start: p, end: f };
              } else a = null;
            }
          a = a || { start: 0, end: 0 };
        } else a = null;
        (Nn = {
          activeElementDetached: null,
          focusedElem: o,
          selectionRange: a,
        }),
          (on = !1),
          (ts = i);
        do {
          try {
            Os();
          } catch (e) {
            if (null === ts) throw Error(v(330));
            Ds(ts, e), (ts = ts.nextEffect);
          }
        } while (null !== ts);
        ts = i;
        do {
          try {
            for (o = e, a = t; null !== ts; ) {
              var w = ts.effectTag;
              if ((16 & w && Je(ts.stateNode, ""), 128 & w)) {
                var E = ts.alternate;
                if (null !== E) {
                  var k = E.ref;
                  null !== k &&
                    ("function" == typeof k ? k(null) : (k.current = null));
                }
              }
              switch (1038 & w) {
                case 2:
                  Pa(ts), (ts.effectTag &= -3);
                  break;
                case 6:
                  Pa(ts), (ts.effectTag &= -3), Ia(ts.alternate, ts);
                  break;
                case 1024:
                  ts.effectTag &= -1025;
                  break;
                case 1028:
                  (ts.effectTag &= -1025), Ia(ts.alternate, ts);
                  break;
                case 4:
                  Ia(ts.alternate, ts);
                  break;
                case 8:
                  Ca(o, (u = ts), a), Sa(u);
              }
              ts = ts.nextEffect;
            }
          } catch (e) {
            if (null === ts) throw Error(v(330));
            Ds(ts, e), (ts = ts.nextEffect);
          }
        } while (null !== ts);
        if (
          ((k = Nn),
          (E = _n()),
          (w = k.focusedElem),
          (a = k.selectionRange),
          E !== w &&
            w &&
            w.ownerDocument &&
            Tn(w.ownerDocument.documentElement, w))
        ) {
          null !== a &&
            Cn(w) &&
            ((E = a.start),
            void 0 === (k = a.end) && (k = E),
            "selectionStart" in w
              ? ((w.selectionStart = E),
                (w.selectionEnd = Math.min(k, w.value.length)))
              : (k =
                  ((E = w.ownerDocument || document) && E.defaultView) ||
                  window).getSelection &&
                ((k = k.getSelection()),
                (u = w.textContent.length),
                (o = Math.min(a.start, u)),
                (a = void 0 === a.end ? o : Math.min(a.end, u)),
                !k.extend && o > a && ((u = a), (a = o), (o = u)),
                (u = Pn(w, o)),
                (c = Pn(w, a)),
                u &&
                  c &&
                  (1 !== k.rangeCount ||
                    k.anchorNode !== u.node ||
                    k.anchorOffset !== u.offset ||
                    k.focusNode !== c.node ||
                    k.focusOffset !== c.offset) &&
                  ((E = E.createRange()).setStart(u.node, u.offset),
                  k.removeAllRanges(),
                  o > a
                    ? (k.addRange(E), k.extend(c.node, c.offset))
                    : (E.setEnd(c.node, c.offset), k.addRange(E))))),
            (E = []);
          for (k = w; (k = k.parentNode); )
            1 === k.nodeType &&
              E.push({ element: k, left: k.scrollLeft, top: k.scrollTop });
          for (
            "function" == typeof w.focus && w.focus(), w = 0;
            w < E.length;
            w++
          )
            ((k = E[w]).element.scrollLeft = k.left),
              (k.element.scrollTop = k.top);
        }
        (on = !!Ln), (Nn = Ln = null), (e.current = n), (ts = i);
        do {
          try {
            for (w = e; null !== ts; ) {
              var S = ts.effectTag;
              if ((36 & S && Ea(w, ts.alternate, ts), 128 & S)) {
                E = void 0;
                var x = ts.ref;
                if (null !== x) {
                  var P = ts.stateNode;
                  ts.tag,
                    (E = P),
                    "function" == typeof x ? x(E) : (x.current = E);
                }
              }
              ts = ts.nextEffect;
            }
          } catch (e) {
            if (null === ts) throw Error(v(330));
            Ds(ts, e), (ts = ts.nextEffect);
          }
        } while (null !== ts);
        (ts = null), Yi(), (ja = l);
      } else e.current = n;
      if (ls) (ls = !1), (os = e), (as = t);
      else
        for (ts = i; null !== ts; )
          (t = ts.nextEffect), (ts.nextEffect = null), (ts = t);
      if (
        (0 === (t = e.firstPendingTime) && (is = null),
        1073741823 === t ? (e === cs ? us++ : ((us = 0), (cs = e))) : (us = 0),
        "function" == typeof Us && Us(n.stateNode, r),
        ys(e),
        ns)
      )
        throw ((ns = !1), (e = rs), (rs = null), e);
      return 0 != (8 & ja) || al(), null;
    }
    function Os() {
      for (; null !== ts; ) {
        var e = ts.effectTag;
        0 != (256 & e) && va(ts.alternate, ts),
          0 == (512 & e) ||
            ls ||
            ((ls = !0),
            ll(97, function () {
              return As(), null;
            })),
          (ts = ts.nextEffect);
      }
    }
    function As() {
      if (90 !== as) {
        var e = 97 < as ? 97 : as;
        return (as = 90), il(e, Fs);
      }
    }
    function Fs() {
      if (null === os) return !1;
      var e = os;
      if (((os = null), 0 != (48 & ja))) throw Error(v(331));
      var t = ja;
      for (ja |= Ka, e = e.current.firstEffect; null !== e; ) {
        try {
          var n = e;
          if (0 != (512 & n.effectTag))
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
              case 22:
                ba(5, n), wa(5, n);
            }
        } catch (t) {
          if (null === e) throw Error(v(330));
          Ds(e, t);
        }
        (n = e.nextEffect), (e.nextEffect = null), (e = n);
      }
      return (ja = t), al(), !0;
    }
    function zs(e, t, n) {
      xl(e, (t = Na(e, (t = ma(n, t)), 1073741823))),
        null !== (e = hs(e, 1073741823)) && ys(e);
    }
    function Ds(e, t) {
      if (3 === e.tag) zs(e, e, t);
      else
        for (var n = e.return; null !== n; ) {
          if (3 === n.tag) {
            zs(n, e, t);
            break;
          }
          if (1 === n.tag) {
            var r = n.stateNode;
            if (
              "function" == typeof n.type.getDerivedStateFromError ||
              ("function" == typeof r.componentDidCatch &&
                (null === is || !is.has(r)))
            ) {
              xl(n, (e = Ra(n, (e = ma(t, e)), 1073741823))),
                null !== (n = hs(n, 1073741823)) && ys(n);
              break;
            }
          }
          n = n.return;
        }
    }
    function Ks(e, t, n) {
      var r = e.pingCache;
      null !== r && r.delete(t),
        $a === e && Wa === n
          ? qa === Ba || (qa === Ua && 1073741823 === Qa && tl() - es < 500)
            ? ks(e, Wa)
            : (Ja = !0)
          : Zs(e, n) &&
            ((0 !== (t = e.lastPingedTime) && t < n) ||
              ((e.lastPingedTime = n), ys(e)));
    }
    function Vs(e, t) {
      var n = e.stateNode;
      null !== n && n.delete(t),
        0 === (t = 0) && (t = fs((t = ps()), e, null)),
        null !== (e = hs(e, t)) && ys(e);
    }
    Oa = function (e, t, n) {
      var r = t.expirationTime;
      if (null !== e) {
        var i = t.pendingProps;
        if (e.memoizedProps !== i || Ci.current) Wo = !0;
        else {
          if (r < n) {
            switch (((Wo = !1), t.tag)) {
              case 3:
                ta(t), $o();
                break;
              case 5:
                if ((Ql(t), 4 & t.mode && 1 !== n && i.hidden))
                  return (t.expirationTime = t.childExpirationTime = 1), null;
                break;
              case 1:
                Li(t.type) && Ai(t);
                break;
              case 4:
                ql(t, t.stateNode.containerInfo);
                break;
              case 10:
                (r = t.memoizedProps.value),
                  (i = t.type._context),
                  Pi(dl, i._currentValue),
                  (i._currentValue = r);
                break;
              case 13:
                if (null !== t.memoizedState)
                  return 0 !== (r = t.child.childExpirationTime) && r >= n
                    ? oa(e, t, n)
                    : (Pi(Xl, 1 & Xl.current),
                      null !== (t = ca(e, t, n)) ? t.sibling : null);
                Pi(Xl, 1 & Xl.current);
                break;
              case 19:
                if (
                  ((r = t.childExpirationTime >= n), 0 != (64 & e.effectTag))
                ) {
                  if (r) return ua(e, t, n);
                  t.effectTag |= 64;
                }
                if (
                  (null !== (i = t.memoizedState) &&
                    ((i.rendering = null), (i.tail = null)),
                  Pi(Xl, Xl.current),
                  !r)
                )
                  return null;
            }
            return ca(e, t, n);
          }
          Wo = !1;
        }
      } else Wo = !1;
      switch (((t.expirationTime = 0), t.tag)) {
        case 2:
          if (
            ((r = t.type),
            null !== e &&
              ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
            (e = t.pendingProps),
            (i = Mi(t, _i.current)),
            vl(t, n),
            (i = uo(null, t, r, e, i, n)),
            (t.effectTag |= 1),
            "object" == typeof i &&
              null !== i &&
              "function" == typeof i.render &&
              void 0 === i.$$typeof)
          ) {
            if (
              ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Li(r))
            ) {
              var l = !0;
              Ai(t);
            } else l = !1;
            (t.memoizedState =
              null !== i.state && void 0 !== i.state ? i.state : null),
              El(t);
            var o = r.getDerivedStateFromProps;
            "function" == typeof o && Ml(t, r, o, e),
              (i.updater = Ll),
              (t.stateNode = i),
              (i._reactInternalFiber = t),
              Al(t, r, e, n),
              (t = ea(null, t, r, !0, l, n));
          } else (t.tag = 0), qo(null, t, i, n), (t = t.child);
          return t;
        case 16:
          e: {
            if (
              ((i = t.elementType),
              null !== e &&
                ((e.alternate = null),
                (t.alternate = null),
                (t.effectTag |= 2)),
              (e = t.pendingProps),
              (function (e) {
                if (-1 === e._status) {
                  e._status = 0;
                  var t = e._ctor;
                  (t = t()),
                    (e._result = t),
                    t.then(
                      function (t) {
                        0 === e._status &&
                          ((t = t.default), (e._status = 1), (e._result = t));
                      },
                      function (t) {
                        0 === e._status && ((e._status = 2), (e._result = t));
                      }
                    );
                }
              })(i),
              1 !== i._status)
            )
              throw i._result;
            switch (
              ((i = i._result),
              (t.type = i),
              (l = t.tag =
                (function (e) {
                  if ("function" == typeof e) return Hs(e) ? 1 : 0;
                  if (null != e) {
                    if ((e = e.$$typeof) === we) return 11;
                    if (e === Se) return 14;
                  }
                  return 2;
                })(i)),
              (e = cl(i, e)),
              l)
            ) {
              case 0:
                t = Zo(null, t, i, e, n);
                break e;
              case 1:
                t = Jo(null, t, i, e, n);
                break e;
              case 11:
                t = Go(null, t, i, e, n);
                break e;
              case 14:
                t = Qo(null, t, i, cl(i.type, e), r, n);
                break e;
            }
            throw Error(v(306, i, ""));
          }
          return t;
        case 0:
          return (
            (r = t.type),
            (i = t.pendingProps),
            Zo(e, t, r, (i = t.elementType === r ? i : cl(r, i)), n)
          );
        case 1:
          return (
            (r = t.type),
            (i = t.pendingProps),
            Jo(e, t, r, (i = t.elementType === r ? i : cl(r, i)), n)
          );
        case 3:
          if ((ta(t), (r = t.updateQueue), null === e || null === r))
            throw Error(v(282));
          if (
            ((r = t.pendingProps),
            (i = null !== (i = t.memoizedState) ? i.element : null),
            kl(e, t),
            Tl(t, r, null, n),
            (r = t.memoizedState.element) === i)
          )
            $o(), (t = ca(e, t, n));
          else {
            if (
              ((i = t.stateNode.hydrate) &&
                ((zo = zn(t.stateNode.containerInfo.firstChild)),
                (Fo = t),
                (i = Do = !0)),
              i)
            )
              for (n = Ul(t, null, r, n), t.child = n; n; )
                (n.effectTag = (-3 & n.effectTag) | 1024), (n = n.sibling);
            else qo(e, t, r, n), $o();
            t = t.child;
          }
          return t;
        case 5:
          return (
            Ql(t),
            null === e && Uo(t),
            (r = t.type),
            (i = t.pendingProps),
            (l = null !== e ? e.memoizedProps : null),
            (o = i.children),
            On(r, i)
              ? (o = null)
              : null !== l && On(r, l) && (t.effectTag |= 16),
            Xo(e, t),
            4 & t.mode && 1 !== n && i.hidden
              ? ((t.expirationTime = t.childExpirationTime = 1), (t = null))
              : (qo(e, t, o, n), (t = t.child)),
            t
          );
        case 6:
          return null === e && Uo(t), null;
        case 13:
          return oa(e, t, n);
        case 4:
          return (
            ql(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            null === e ? (t.child = Vl(t, null, r, n)) : qo(e, t, r, n),
            t.child
          );
        case 11:
          return (
            (r = t.type),
            (i = t.pendingProps),
            Go(e, t, r, (i = t.elementType === r ? i : cl(r, i)), n)
          );
        case 7:
          return qo(e, t, t.pendingProps, n), t.child;
        case 8:
        case 12:
          return qo(e, t, t.pendingProps.children, n), t.child;
        case 10:
          e: {
            (r = t.type._context),
              (i = t.pendingProps),
              (o = t.memoizedProps),
              (l = i.value);
            var a = t.type._context;
            if ((Pi(dl, a._currentValue), (a._currentValue = l), null !== o))
              if (
                ((a = o.value),
                0 ===
                  (l = Jr(a, l)
                    ? 0
                    : 0 |
                      ("function" == typeof r._calculateChangedBits
                        ? r._calculateChangedBits(a, l)
                        : 1073741823)))
              ) {
                if (o.children === i.children && !Ci.current) {
                  t = ca(e, t, n);
                  break e;
                }
              } else
                for (null !== (a = t.child) && (a.return = t); null !== a; ) {
                  var s = a.dependencies;
                  if (null !== s) {
                    o = a.child;
                    for (var u = s.firstContext; null !== u; ) {
                      if (u.context === r && 0 != (u.observedBits & l)) {
                        1 === a.tag && (((u = Sl(n, null)).tag = 2), xl(a, u)),
                          a.expirationTime < n && (a.expirationTime = n),
                          null !== (u = a.alternate) &&
                            u.expirationTime < n &&
                            (u.expirationTime = n),
                          yl(a.return, n),
                          s.expirationTime < n && (s.expirationTime = n);
                        break;
                      }
                      u = u.next;
                    }
                  } else o = 10 === a.tag && a.type === t.type ? null : a.child;
                  if (null !== o) o.return = a;
                  else
                    for (o = a; null !== o; ) {
                      if (o === t) {
                        o = null;
                        break;
                      }
                      if (null !== (a = o.sibling)) {
                        (a.return = o.return), (o = a);
                        break;
                      }
                      o = o.return;
                    }
                  a = o;
                }
            qo(e, t, i.children, n), (t = t.child);
          }
          return t;
        case 9:
          return (
            (i = t.type),
            (r = (l = t.pendingProps).children),
            vl(t, n),
            (r = r((i = bl(i, l.unstable_observedBits)))),
            (t.effectTag |= 1),
            qo(e, t, r, n),
            t.child
          );
        case 14:
          return (
            (l = cl((i = t.type), t.pendingProps)),
            Qo(e, t, i, (l = cl(i.type, l)), r, n)
          );
        case 15:
          return Yo(e, t, t.type, t.pendingProps, r, n);
        case 17:
          return (
            (r = t.type),
            (i = t.pendingProps),
            (i = t.elementType === r ? i : cl(r, i)),
            null !== e &&
              ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
            (t.tag = 1),
            Li(r) ? ((e = !0), Ai(t)) : (e = !1),
            vl(t, n),
            Rl(t, r, i),
            Al(t, r, i, n),
            ea(null, t, r, !0, e, n)
          );
        case 19:
          return ua(e, t, n);
      }
      throw Error(v(156, t.tag));
    };
    var Us = null,
      Bs = null;
    function js(e, t, n, r) {
      (this.tag = e),
        (this.key = n),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = r),
        (this.effectTag = 0),
        (this.lastEffect = this.firstEffect = this.nextEffect = null),
        (this.childExpirationTime = this.expirationTime = 0),
        (this.alternate = null);
    }
    function $s(e, t, n, r) {
      return new js(e, t, n, r);
    }
    function Hs(e) {
      return !(!(e = e.prototype) || !e.isReactComponent);
    }
    function Ws(e, t) {
      var n = e.alternate;
      return (
        null === n
          ? (((n = $s(e.tag, t, e.key, e.mode)).elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.effectTag = 0),
            (n.nextEffect = null),
            (n.firstEffect = null),
            (n.lastEffect = null)),
        (n.childExpirationTime = e.childExpirationTime),
        (n.expirationTime = e.expirationTime),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
          null === t
            ? null
            : {
                expirationTime: t.expirationTime,
                firstContext: t.firstContext,
                responders: t.responders,
              }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
      );
    }
    function qs(e, t, n, r, i, l) {
      var o = 2;
      if (((r = e), "function" == typeof e)) Hs(e) && (o = 1);
      else if ("string" == typeof e) o = 5;
      else
        e: switch (e) {
          case me:
            return Gs(n.children, i, l, t);
          case be:
            (o = 8), (i |= 7);
            break;
          case he:
            (o = 8), (i |= 1);
            break;
          case ge:
            return (
              ((e = $s(12, n, t, 8 | i)).elementType = ge),
              (e.type = ge),
              (e.expirationTime = l),
              e
            );
          case Ee:
            return (
              ((e = $s(13, n, t, i)).type = Ee),
              (e.elementType = Ee),
              (e.expirationTime = l),
              e
            );
          case ke:
            return (
              ((e = $s(19, n, t, i)).elementType = ke),
              (e.expirationTime = l),
              e
            );
          default:
            if ("object" == typeof e && null !== e)
              switch (e.$$typeof) {
                case ye:
                  o = 10;
                  break e;
                case ve:
                  o = 9;
                  break e;
                case we:
                  o = 11;
                  break e;
                case Se:
                  o = 14;
                  break e;
                case xe:
                  (o = 16), (r = null);
                  break e;
                case Pe:
                  o = 22;
                  break e;
              }
            throw Error(v(130, null == e ? e : typeof e, ""));
        }
      return (
        ((t = $s(o, n, t, i)).elementType = e),
        (t.type = r),
        (t.expirationTime = l),
        t
      );
    }
    function Gs(e, t, n, r) {
      return ((e = $s(7, e, r, t)).expirationTime = n), e;
    }
    function Qs(e, t, n) {
      return ((e = $s(6, e, null, t)).expirationTime = n), e;
    }
    function Ys(e, t, n) {
      return (
        ((t = $s(
          4,
          null !== e.children ? e.children : [],
          e.key,
          t
        )).expirationTime = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    function Xs(e, t, n) {
      (this.tag = t),
        (this.current = null),
        (this.containerInfo = e),
        (this.pingCache = this.pendingChildren = null),
        (this.finishedExpirationTime = 0),
        (this.finishedWork = null),
        (this.timeoutHandle = -1),
        (this.pendingContext = this.context = null),
        (this.hydrate = n),
        (this.callbackNode = null),
        (this.callbackPriority = 90),
        (this.lastExpiredTime =
          this.lastPingedTime =
          this.nextKnownPendingLevel =
          this.lastSuspendedTime =
          this.firstSuspendedTime =
          this.firstPendingTime =
            0);
    }
    function Zs(e, t) {
      var n = e.firstSuspendedTime;
      return (e = e.lastSuspendedTime), 0 !== n && n >= t && e <= t;
    }
    function Js(e, t) {
      var n = e.firstSuspendedTime,
        r = e.lastSuspendedTime;
      n < t && (e.firstSuspendedTime = t),
        (r > t || 0 === n) && (e.lastSuspendedTime = t),
        t <= e.lastPingedTime && (e.lastPingedTime = 0),
        t <= e.lastExpiredTime && (e.lastExpiredTime = 0);
    }
    function eu(e, t) {
      t > e.firstPendingTime && (e.firstPendingTime = t);
      var n = e.firstSuspendedTime;
      0 !== n &&
        (t >= n
          ? (e.firstSuspendedTime =
              e.lastSuspendedTime =
              e.nextKnownPendingLevel =
                0)
          : t >= e.lastSuspendedTime && (e.lastSuspendedTime = t + 1),
        t > e.nextKnownPendingLevel && (e.nextKnownPendingLevel = t));
    }
    function tu(e, t) {
      var n = e.lastExpiredTime;
      (0 === n || n > t) && (e.lastExpiredTime = t);
    }
    function nu(e, t, n, r) {
      var i = t.current,
        l = ps(),
        o = Cl.suspense;
      l = fs(l, i, o);
      e: if (n) {
        t: {
          if (pt((n = n._reactInternalFiber)) !== n || 1 !== n.tag)
            throw Error(v(170));
          var a = n;
          do {
            switch (a.tag) {
              case 3:
                a = a.stateNode.context;
                break t;
              case 1:
                if (Li(a.type)) {
                  a = a.stateNode.__reactInternalMemoizedMergedChildContext;
                  break t;
                }
            }
            a = a.return;
          } while (null !== a);
          throw Error(v(171));
        }
        if (1 === n.tag) {
          var s = n.type;
          if (Li(s)) {
            n = Oi(n, s, a);
            break e;
          }
        }
        n = a;
      } else n = Ti;
      return (
        null === t.context ? (t.context = n) : (t.pendingContext = n),
        ((t = Sl(l, o)).payload = { element: e }),
        null !== (r = void 0 === r ? null : r) && (t.callback = r),
        xl(i, t),
        ms(i, l),
        l
      );
    }
    function ru(e) {
      return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
    }
    function iu(e, t) {
      null !== (e = e.memoizedState) &&
        null !== e.dehydrated &&
        e.retryTime < t &&
        (e.retryTime = t);
    }
    function lu(e, t) {
      iu(e, t), (e = e.alternate) && iu(e, t);
    }
    function ou(e, t, n) {
      var r = new Xs(e, t, (n = null != n && !0 === n.hydrate)),
        i = $s(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0);
      (r.current = i),
        (i.stateNode = r),
        El(i),
        (e[Bn] = r.current),
        n &&
          0 !== t &&
          (function (e, t) {
            var n = dt(t);
            Kt.forEach(function (e) {
              _t(e, t, n);
            }),
              Vt.forEach(function (e) {
                _t(e, t, n);
              });
          })(0, 9 === e.nodeType ? e : e.ownerDocument),
        (this._internalRoot = r);
    }
    function au(e) {
      return !(
        !e ||
        (1 !== e.nodeType &&
          9 !== e.nodeType &&
          11 !== e.nodeType &&
          (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
      );
    }
    function su(e, t, n, r, i) {
      var l = n._reactRootContainer;
      if (l) {
        var o = l._internalRoot;
        if ("function" == typeof i) {
          var a = i;
          i = function () {
            var e = ru(o);
            a.call(e);
          };
        }
        nu(t, o, e, i);
      } else {
        if (
          ((l = n._reactRootContainer =
            (function (e, t) {
              if (
                (t ||
                  (t = !(
                    !(t = e
                      ? 9 === e.nodeType
                        ? e.documentElement
                        : e.firstChild
                      : null) ||
                    1 !== t.nodeType ||
                    !t.hasAttribute("data-reactroot")
                  )),
                !t)
              )
                for (var n; (n = e.lastChild); ) e.removeChild(n);
              return new ou(e, 0, t ? { hydrate: !0 } : void 0);
            })(n, r)),
          (o = l._internalRoot),
          "function" == typeof i)
        ) {
          var s = i;
          i = function () {
            var e = ru(o);
            s.call(e);
          };
        }
        Es(function () {
          nu(t, o, e, i);
        });
      }
      return ru(o);
    }
    function uu(e, t, n) {
      var r =
        3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return {
        $$typeof: fe,
        key: null == r ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n,
      };
    }
    function cu(e, t) {
      var n =
        2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (!au(t)) throw Error(v(200));
      return uu(e, t, null, n);
    }
    (ou.prototype.render = function (e) {
      nu(e, this._internalRoot, null, null);
    }),
      (ou.prototype.unmount = function () {
        var e = this._internalRoot,
          t = e.containerInfo;
        nu(null, e, null, function () {
          t[Bn] = null;
        });
      }),
      (Ct = function (e) {
        if (13 === e.tag) {
          var t = ul(ps(), 150, 100);
          ms(e, t), lu(e, t);
        }
      }),
      (It = function (e) {
        13 === e.tag && (ms(e, 3), lu(e, 3));
      }),
      (Mt = function (e) {
        if (13 === e.tag) {
          var t = ps();
          ms(e, (t = fs(t, e, null))), lu(e, t);
        }
      }),
      (V = function (e, t, n) {
        switch (t) {
          case "input":
            if ((ze(e, n), (t = n.name), "radio" === n.type && null != t)) {
              for (n = e; n.parentNode; ) n = n.parentNode;
              for (
                n = n.querySelectorAll(
                  "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                ),
                  t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var i = Wn(r);
                  if (!i) throw Error(v(90));
                  Re(r), ze(r, i);
                }
              }
            }
            break;
          case "textarea":
            $e(e, n);
            break;
          case "select":
            null != (t = n.value) && Ue(e, !!n.multiple, t, !1);
        }
      }),
      (W = ws),
      (q = function (e, t, n, r, i) {
        var l = ja;
        ja |= 4;
        try {
          return il(98, e.bind(null, t, n, r, i));
        } finally {
          0 === (ja = l) && al();
        }
      }),
      (G = function () {
        0 == (49 & ja) &&
          ((function () {
            if (null !== ss) {
              var e = ss;
              (ss = null),
                e.forEach(function (e, t) {
                  tu(t, e), ys(t);
                }),
                al();
            }
          })(),
          As());
      }),
      (Q = function (e, t) {
        var n = ja;
        ja |= 2;
        try {
          return e(t);
        } finally {
          0 === (ja = n) && al();
        }
      });
    var du = {
      Events: [
        $n,
        Hn,
        Wn,
        D,
        A,
        Jn,
        function (e) {
          yt(e, Zn);
        },
        $,
        H,
        dn,
        wt,
        As,
        { current: !1 },
      ],
    };
    !(function (e) {
      var t = e.findFiberByHostInstance;
      (function (e) {
        if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
        var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (t.isDisabled || !t.supportsFiber) return !0;
        try {
          var n = t.inject(e);
          (Us = function (e) {
            try {
              t.onCommitFiberRoot(
                n,
                e,
                void 0,
                64 == (64 & e.current.effectTag)
              );
            } catch (e) {}
          }),
            (Bs = function (e) {
              try {
                t.onCommitFiberUnmount(n, e);
              } catch (e) {}
            });
        } catch (e) {}
      })(
        g({}, e, {
          overrideHookState: null,
          overrideProps: null,
          setSuspenseHandler: null,
          scheduleUpdate: null,
          currentDispatcherRef: se.ReactCurrentDispatcher,
          findHostInstanceByFiber: function (e) {
            return null === (e = ht(e)) ? null : e.stateNode;
          },
          findFiberByHostInstance: function (e) {
            return t ? t(e) : null;
          },
          findHostInstancesForRefresh: null,
          scheduleRefresh: null,
          scheduleRoot: null,
          setRefreshHandler: null,
          getCurrentFiber: null,
        })
      );
    })({
      findFiberByHostInstance: jn,
      bundleType: 0,
      version: "16.14.0",
      rendererPackageName: "react-dom",
    }),
      (r = du),
      (i = cu),
      (o = function (e) {
        if (null == e) return null;
        if (1 === e.nodeType) return e;
        var t = e._reactInternalFiber;
        if (void 0 === t) {
          if ("function" == typeof e.render) throw Error(v(188));
          throw Error(v(268, Object.keys(e)));
        }
        return (e = null === (e = ht(t)) ? null : e.stateNode);
      }),
      (a = function (e, t) {
        if (0 != (48 & ja)) throw Error(v(187));
        var n = ja;
        ja |= 1;
        try {
          return il(99, e.bind(null, t));
        } finally {
          (ja = n), al();
        }
      }),
      (s = function (e, t, n) {
        if (!au(t)) throw Error(v(200));
        return su(null, e, t, !0, n);
      }),
      (u = function (e, t, n) {
        if (!au(t)) throw Error(v(200));
        return su(null, e, t, !1, n);
      }),
      (c = function (e) {
        if (!au(e)) throw Error(v(40));
        return (
          !!e._reactRootContainer &&
          (Es(function () {
            su(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Bn] = null);
            });
          }),
          !0)
        );
      }),
      (d = ws),
      (p = function (e, t) {
        return cu(
          e,
          t,
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null
        );
      }),
      (f = function (e, t, n, r) {
        if (!au(n)) throw Error(v(200));
        if (null == e || void 0 === e._reactInternalFiber) throw Error(v(38));
        return su(e, t, n, !1, r);
      }),
      (m = "16.14.0");
  }),
  l.register("fO90s", function (e, t) {
    e.exports = l("gcnCG");
  }),
  l.register("gcnCG", function (t, n) {
    /** @license React v0.19.1
     * scheduler.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var r, i, l, o, a, s, u, c, d, p, f, m, h, g, y, v, b, w, E, k, S, x, P, T;
    if (
      (e(
        t.exports,
        "unstable_now",
        () => r,
        (e) => (r = e)
      ),
      e(
        t.exports,
        "unstable_forceFrameRate",
        () => i,
        (e) => (i = e)
      ),
      e(
        t.exports,
        "unstable_IdlePriority",
        () => l,
        (e) => (l = e)
      ),
      e(
        t.exports,
        "unstable_ImmediatePriority",
        () => o,
        (e) => (o = e)
      ),
      e(
        t.exports,
        "unstable_LowPriority",
        () => a,
        (e) => (a = e)
      ),
      e(
        t.exports,
        "unstable_NormalPriority",
        () => s,
        (e) => (s = e)
      ),
      e(
        t.exports,
        "unstable_Profiling",
        () => u,
        (e) => (u = e)
      ),
      e(
        t.exports,
        "unstable_UserBlockingPriority",
        () => c,
        (e) => (c = e)
      ),
      e(
        t.exports,
        "unstable_cancelCallback",
        () => d,
        (e) => (d = e)
      ),
      e(
        t.exports,
        "unstable_continueExecution",
        () => p,
        (e) => (p = e)
      ),
      e(
        t.exports,
        "unstable_getCurrentPriorityLevel",
        () => f,
        (e) => (f = e)
      ),
      e(
        t.exports,
        "unstable_getFirstCallbackNode",
        () => m,
        (e) => (m = e)
      ),
      e(
        t.exports,
        "unstable_next",
        () => h,
        (e) => (h = e)
      ),
      e(
        t.exports,
        "unstable_pauseExecution",
        () => g,
        (e) => (g = e)
      ),
      e(
        t.exports,
        "unstable_requestPaint",
        () => y,
        (e) => (y = e)
      ),
      e(
        t.exports,
        "unstable_runWithPriority",
        () => v,
        (e) => (v = e)
      ),
      e(
        t.exports,
        "unstable_scheduleCallback",
        () => b,
        (e) => (b = e)
      ),
      e(
        t.exports,
        "unstable_shouldYield",
        () => w,
        (e) => (w = e)
      ),
      e(
        t.exports,
        "unstable_wrapCallback",
        () => E,
        (e) => (E = e)
      ),
      "undefined" == typeof window || "function" != typeof MessageChannel)
    ) {
      var _ = null,
        C = null,
        I = function () {
          if (null !== _)
            try {
              var e = r();
              _(!0, e), (_ = null);
            } catch (e) {
              throw (setTimeout(I, 0), e);
            }
        },
        M = Date.now();
      (r = function () {
        return Date.now() - M;
      }),
        (k = function (e) {
          null !== _ ? setTimeout(k, 0, e) : ((_ = e), setTimeout(I, 0));
        }),
        (S = function (e, t) {
          C = setTimeout(e, t);
        }),
        (x = function () {
          clearTimeout(C);
        }),
        (P = function () {
          return !1;
        }),
        (T = i = function () {});
    } else {
      var L = window.performance,
        N = window.Date,
        R = window.setTimeout,
        O = window.clearTimeout;
      if ("undefined" != typeof console) {
        var A = window.cancelAnimationFrame;
        "function" != typeof window.requestAnimationFrame &&
          console.error(
            "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
          ),
          "function" != typeof A &&
            console.error(
              "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
            );
      }
      if ("object" == typeof L && "function" == typeof L.now)
        r = function () {
          return L.now();
        };
      else {
        var F = N.now();
        r = function () {
          return N.now() - F;
        };
      }
      var z = !1,
        D = null,
        K = -1,
        V = 5,
        U = 0;
      (P = function () {
        return r() >= U;
      }),
        (T = function () {}),
        (i = function (e) {
          0 > e || 125 < e
            ? console.error(
                "forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"
              )
            : (V = 0 < e ? Math.floor(1e3 / e) : 5);
        });
      var B = new MessageChannel(),
        j = B.port2;
      (B.port1.onmessage = function () {
        if (null !== D) {
          var e = r();
          U = e + V;
          try {
            D(!0, e) ? j.postMessage(null) : ((z = !1), (D = null));
          } catch (e) {
            throw (j.postMessage(null), e);
          }
        } else z = !1;
      }),
        (k = function (e) {
          (D = e), z || ((z = !0), j.postMessage(null));
        }),
        (S = function (e, t) {
          K = R(function () {
            e(r());
          }, t);
        }),
        (x = function () {
          O(K), (K = -1);
        });
    }
    function $(e, t) {
      var n = e.length;
      e.push(t);
      e: for (;;) {
        var r = (n - 1) >>> 1,
          i = e[r];
        if (!(void 0 !== i && 0 < q(i, t))) break e;
        (e[r] = t), (e[n] = i), (n = r);
      }
    }
    function H(e) {
      return void 0 === (e = e[0]) ? null : e;
    }
    function W(e) {
      var t = e[0];
      if (void 0 !== t) {
        var n = e.pop();
        if (n !== t) {
          e[0] = n;
          e: for (var r = 0, i = e.length; r < i; ) {
            var l = 2 * (r + 1) - 1,
              o = e[l],
              a = l + 1,
              s = e[a];
            if (void 0 !== o && 0 > q(o, n))
              void 0 !== s && 0 > q(s, o)
                ? ((e[r] = s), (e[a] = n), (r = a))
                : ((e[r] = o), (e[l] = n), (r = l));
            else {
              if (!(void 0 !== s && 0 > q(s, n))) break e;
              (e[r] = s), (e[a] = n), (r = a);
            }
          }
        }
        return t;
      }
      return null;
    }
    function q(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return 0 !== n ? n : e.id - t.id;
    }
    var G = [],
      Q = [],
      Y = 1,
      X = null,
      Z = 3,
      J = !1,
      ee = !1,
      te = !1;
    function ne(e) {
      for (var t = H(Q); null !== t; ) {
        if (null === t.callback) W(Q);
        else {
          if (!(t.startTime <= e)) break;
          W(Q), (t.sortIndex = t.expirationTime), $(G, t);
        }
        t = H(Q);
      }
    }
    function re(e) {
      if (((te = !1), ne(e), !ee))
        if (null !== H(G)) (ee = !0), k(ie);
        else {
          var t = H(Q);
          null !== t && S(re, t.startTime - e);
        }
    }
    function ie(e, t) {
      (ee = !1), te && ((te = !1), x()), (J = !0);
      var n = Z;
      try {
        for (
          ne(t), X = H(G);
          null !== X && (!(X.expirationTime > t) || (e && !P()));

        ) {
          var i = X.callback;
          if (null !== i) {
            (X.callback = null), (Z = X.priorityLevel);
            var l = i(X.expirationTime <= t);
            (t = r()),
              "function" == typeof l ? (X.callback = l) : X === H(G) && W(G),
              ne(t);
          } else W(G);
          X = H(G);
        }
        if (null !== X) var o = !0;
        else {
          var a = H(Q);
          null !== a && S(re, a.startTime - t), (o = !1);
        }
        return o;
      } finally {
        (X = null), (Z = n), (J = !1);
      }
    }
    function le(e) {
      switch (e) {
        case 1:
          return -1;
        case 2:
          return 250;
        case 5:
          return 1073741823;
        case 4:
          return 1e4;
        default:
          return 5e3;
      }
    }
    (l = 5),
      (o = 1),
      (a = 4),
      (s = 3),
      (u = null),
      (c = 2),
      (d = function (e) {
        e.callback = null;
      }),
      (p = function () {
        ee || J || ((ee = !0), k(ie));
      }),
      (f = function () {
        return Z;
      }),
      (m = function () {
        return H(G);
      }),
      (h = function (e) {
        switch (Z) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = Z;
        }
        var n = Z;
        Z = t;
        try {
          return e();
        } finally {
          Z = n;
        }
      }),
      (g = function () {}),
      (y = T),
      (v = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = Z;
        Z = e;
        try {
          return t();
        } finally {
          Z = n;
        }
      }),
      (b = function (e, t, n) {
        var i = r();
        if ("object" == typeof n && null !== n) {
          var l = n.delay;
          (l = "number" == typeof l && 0 < l ? i + l : i),
            (n = "number" == typeof n.timeout ? n.timeout : le(e));
        } else (n = le(e)), (l = i);
        return (
          (e = {
            id: Y++,
            callback: t,
            priorityLevel: e,
            startTime: l,
            expirationTime: (n = l + n),
            sortIndex: -1,
          }),
          l > i
            ? ((e.sortIndex = l),
              $(Q, e),
              null === H(G) &&
                e === H(Q) &&
                (te ? x() : (te = !0), S(re, l - i)))
            : ((e.sortIndex = n), $(G, e), ee || J || ((ee = !0), k(ie))),
          e
        );
      }),
      (w = function () {
        var e = r();
        ne(e);
        var t = H(G);
        return (
          (t !== X &&
            null !== X &&
            null !== t &&
            null !== t.callback &&
            t.startTime <= e &&
            t.expirationTime < X.expirationTime) ||
          P()
        );
      }),
      (E = function (e) {
        var t = Z;
        return function () {
          var n = Z;
          Z = t;
          try {
            return e.apply(this, arguments);
          } finally {
            Z = n;
          }
        };
      });
  }),
  l.register("3p9rK", function (e, t) {
    function n() {
      return (
        (e.exports = n =
          Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports),
        n.apply(this, arguments)
      );
    }
    (e.exports = n),
      (e.exports.__esModule = !0),
      (e.exports.default = e.exports);
  });
var o = l("acw62"),
  a = {};
!(function e() {
  if (
    "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
    "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
    } catch (e) {
      console.error(e);
    }
})(),
  (a = l("Xw6Mv"));
(o = l("acw62")), (o = l("acw62"));
function s(e, t, n) {
  let [r, i] = (0, o.useState)(e || t),
    l = (0, o.useRef)(void 0 !== e),
    a = l.current,
    s = void 0 !== e,
    u = (0, o.useRef)(r);
  a !== s &&
    console.warn(
      `WARN: A component changed from ${a ? "controlled" : "uncontrolled"} to ${
        s ? "controlled" : "uncontrolled"
      }.`
    ),
    (l.current = s);
  let c = (0, o.useCallback)(
    (e, ...t) => {
      let r = (e, ...t) => {
        n && (Object.is(u.current, e) || n(e, ...t)), s || (u.current = e);
      };
      if ("function" == typeof e) {
        console.warn(
          "We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"
        ),
          i((n, ...i) => {
            let l = e(s ? u.current : n, ...i);
            return r(l, ...t), s ? n : l;
          });
      } else s || i(e), r(e, ...t);
    },
    [s, n]
  );
  return s ? (u.current = e) : (e = r), [e, c];
}
function u(e, t = -1 / 0, n = 1 / 0) {
  return Math.min(Math.max(e, t), n);
}
(o = l("acw62")), (o = l("acw62"));
const c = { prefix: String(Math.round(1e10 * Math.random())), current: 0 },
  d = t(o).createContext(c);
let p = Boolean(
  "undefined" != typeof window &&
    window.document &&
    window.document.createElement
);
function f(e) {
  let t = (0, o.useContext)(d);
  return (
    t !== c ||
      p ||
      console.warn(
        "When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."
      ),
    (0, o.useMemo)(() => e || `react-aria${t.prefix}-${++t.current}`, [e])
  );
}
function m() {
  let e = (0, o.useContext)(d) !== c,
    [t, n] = (0, o.useState)(e);
  return (
    "undefined" != typeof window &&
      e &&
      (0, o.useLayoutEffect)(() => {
        n(!1);
      }, []),
    t
  );
}
function h(e) {
  var t,
    n,
    r = "";
  if ("string" == typeof e || "number" == typeof e) r += e;
  else if ("object" == typeof e)
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = h(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
var g = function () {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = h(e)) && (r && (r += " "), (r += t));
  return r;
};
const y = "undefined" != typeof window ? t(o).useLayoutEffect : () => {};
function v(e) {
  let [t, n] = (0, o.useState)(e),
    r = (0, o.useRef)(t),
    i = (0, o.useRef)(null);
  r.current = t;
  let l = (0, o.useRef)(null);
  (l.current = () => {
    let e = i.current.next();
    e.done ? (i.current = null) : t === e.value ? l.current() : n(e.value);
  }),
    y(() => {
      i.current && l.current();
    });
  let a = (0, o.useCallback)(
    (e) => {
      (i.current = e(r.current)), l.current();
    },
    [i, l]
  );
  return [t, a];
}
let b = new Map();
function w(e) {
  let [t, n] = (0, o.useState)(e),
    r = (0, o.useRef)(null),
    i = f(t),
    l = (0, o.useCallback)((e) => {
      r.current = e;
    }, []);
  return (
    b.set(i, l),
    y(() => {
      let e = i;
      return () => {
        b.delete(e);
      };
    }, [i]),
    (0, o.useEffect)(() => {
      let e = r.current;
      e && ((r.current = null), n(e));
    }),
    i
  );
}
function E(e, t) {
  if (e === t) return e;
  let n = b.get(e);
  if (n) return n(t), t;
  let r = b.get(t);
  return r ? (r(e), e) : t;
}
function k(e = []) {
  let t = w(),
    [n, r] = v(t),
    i = (0, o.useCallback)(() => {
      r(function* () {
        yield t, yield document.getElementById(t) ? t : void 0;
      });
    }, [t, r]);
  return y(i, [t, i, ...e]), n;
}
function S(...e) {
  return (...t) => {
    for (let n of e) "function" == typeof n && n(...t);
  };
}
function x(...e) {
  let t = { ...e[0] };
  for (let n = 1; n < e.length; n++) {
    let r = e[n];
    for (let e in r) {
      let n = t[e],
        i = r[e];
      "function" == typeof n &&
      "function" == typeof i &&
      "o" === e[0] &&
      "n" === e[1] &&
      e.charCodeAt(2) >= 65 &&
      e.charCodeAt(2) <= 90
        ? (t[e] = S(n, i))
        : ("className" !== e && "UNSAFE_className" !== e) ||
          "string" != typeof n ||
          "string" != typeof i
        ? "id" === e && n && i
          ? (t.id = E(n, i))
          : (t[e] = void 0 !== i ? i : n)
        : (t[e] = g(n, i));
    }
  }
  return t;
}
const P = new Set(["id"]),
  T = new Set([
    "aria-label",
    "aria-labelledby",
    "aria-describedby",
    "aria-details",
  ]),
  _ = /^(data-.*)$/;
function C(e, t = {}) {
  let { labelable: n, propNames: r } = t,
    i = {};
  for (const t in e)
    Object.prototype.hasOwnProperty.call(e, t) &&
      (P.has(t) ||
        (n && T.has(t)) ||
        (null == r ? void 0 : r.has(t)) ||
        _.test(t)) &&
      (i[t] = e[t]);
  return i;
}
function I(e) {
  if (
    (function () {
      if (null == M) {
        M = !1;
        try {
          document.createElement("div").focus({
            get preventScroll() {
              return (M = !0), !0;
            },
          });
        } catch (e) {}
      }
      return M;
    })()
  )
    e.focus({ preventScroll: !0 });
  else {
    let t = (function (e) {
      var t = e.parentNode,
        n = [],
        r = document.scrollingElement || document.documentElement;
      for (; t instanceof HTMLElement && t !== r; )
        (t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) &&
          n.push({
            element: t,
            scrollTop: t.scrollTop,
            scrollLeft: t.scrollLeft,
          }),
          (t = t.parentNode);
      r instanceof HTMLElement &&
        n.push({
          element: r,
          scrollTop: r.scrollTop,
          scrollLeft: r.scrollLeft,
        });
      return n;
    })(e);
    e.focus(),
      (function (e) {
        for (let { element: t, scrollTop: n, scrollLeft: r } of e)
          (t.scrollTop = n), (t.scrollLeft = r);
      })(t);
  }
}
let M = null;
let L = new Map(),
  N = new Set();
function R() {
  if ("undefined" == typeof window) return;
  let e = (t) => {
    let n = L.get(t.target);
    if (
      n &&
      (n.delete(t.propertyName),
      0 === n.size &&
        (t.target.removeEventListener("transitioncancel", e),
        L.delete(t.target)),
      0 === L.size)
    ) {
      for (let e of N) e();
      N.clear();
    }
  };
  document.body.addEventListener("transitionrun", (t) => {
    let n = L.get(t.target);
    n ||
      ((n = new Set()),
      L.set(t.target, n),
      t.target.addEventListener("transitioncancel", e)),
      n.add(t.propertyName);
  }),
    document.body.addEventListener("transitionend", e);
}
function O(e) {
  requestAnimationFrame(() => {
    0 === L.size ? e() : N.add(e);
  });
}
"undefined" != typeof document &&
  ("loading" !== document.readyState
    ? R()
    : document.addEventListener("DOMContentLoaded", R));
function A() {
  let e = (0, o.useRef)(new Map()),
    t = (0, o.useCallback)((t, n, r, i) => {
      let l = (null == i ? void 0 : i.once)
        ? (...t) => {
            e.current.delete(r), r(...t);
          }
        : r;
      e.current.set(r, { type: n, eventTarget: t, fn: l, options: i }),
        t.addEventListener(n, r, i);
    }, []),
    n = (0, o.useCallback)((t, n, r, i) => {
      var l;
      let o =
        (null === (l = e.current.get(r)) || void 0 === l ? void 0 : l.fn) || r;
      t.removeEventListener(n, o, i), e.current.delete(r);
    }, []),
    r = (0, o.useCallback)(() => {
      e.current.forEach((e, t) => {
        n(e.eventTarget, e.type, t, e.options);
      });
    }, [n]);
  return (
    (0, o.useEffect)(() => r, [r]),
    {
      addGlobalListener: t,
      removeGlobalListener: n,
      removeAllGlobalListeners: r,
    }
  );
}
function F(e, t) {
  let { id: n, "aria-label": r, "aria-labelledby": i } = e;
  if (((n = w(n)), i && r)) {
    let e = new Set([...i.trim().split(/\s+/), n]);
    i = [...e].join(" ");
  } else i && (i = i.trim().split(/\s+/).join(" "));
  return (
    r || i || !t || (r = t), { id: n, "aria-label": r, "aria-labelledby": i }
  );
}
function z(e, t) {
  const n = (0, o.useRef)(!0);
  (0, o.useEffect)(() => {
    n.current ? (n.current = !1) : e();
  }, t);
}
function D(e) {
  const { ref: t, onResize: n } = e;
  (0, o.useEffect)(() => {
    let e = null == t ? void 0 : t.current;
    if (e) {
      if (void 0 === window.ResizeObserver)
        return (
          window.addEventListener("resize", n, !1),
          () => {
            window.removeEventListener("resize", n, !1);
          }
        );
      {
        const t = new window.ResizeObserver((e) => {
          e.length && n();
        });
        return (
          t.observe(e),
          () => {
            e && t.unobserve(e);
          }
        );
      }
    }
  }, [n, t]);
}
function K(e, t) {
  y(() => {
    if (e && e.ref && t)
      return (
        (e.ref.current = t.current),
        () => {
          e.ref.current = null;
        }
      );
  }, [e, t]);
}
function V(e) {
  for (; e && !U(e); ) e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
function U(e) {
  let t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
let B = "undefined" != typeof window && window.visualViewport;
function j() {
  let [e, t] = (0, o.useState)(() => $());
  return (
    (0, o.useEffect)(() => {
      let e = () => {
        t((e) => {
          let t = $();
          return t.width === e.width && t.height === e.height ? e : t;
        });
      };
      return (
        B
          ? B.addEventListener("resize", e)
          : window.addEventListener("resize", e),
        () => {
          B
            ? B.removeEventListener("resize", e)
            : window.removeEventListener("resize", e);
        }
      );
    }, []),
    e
  );
}
function $() {
  return {
    width: (null == B ? void 0 : B.width) || window.innerWidth,
    height: (null == B ? void 0 : B.height) || window.innerHeight,
  };
}
let H = 0;
const W = new Map();
function q(e) {
  let [t, n] = (0, o.useState)(void 0);
  return (
    y(() => {
      if (!e) return;
      let t = W.get(e);
      if (t) n(t.element.id);
      else {
        let r = "react-aria-description-" + H++;
        n(r);
        let i = document.createElement("div");
        (i.id = r),
          (i.style.display = "none"),
          (i.textContent = e),
          document.body.appendChild(i),
          (t = { refCount: 0, element: i }),
          W.set(e, t);
      }
      return (
        t.refCount++,
        () => {
          0 == --t.refCount && (t.element.remove(), W.delete(e));
        }
      );
    }, [e]),
    { "aria-describedby": e ? t : void 0 }
  );
}
function G(e) {
  var t;
  return (
    "undefined" != typeof window &&
    null != window.navigator &&
    ((null === (t = window.navigator.userAgentData) || void 0 === t
      ? void 0
      : t.brands.some((t) => e.test(t.brand))) ||
      e.test(window.navigator.userAgent))
  );
}
function Q(e) {
  var t;
  return (
    "undefined" != typeof window &&
    null != window.navigator &&
    e.test(
      (null === (t = window.navigator.userAgentData) || void 0 === t
        ? void 0
        : t.platform) || window.navigator.platform
    )
  );
}
function Y() {
  return Q(/^Mac/i);
}
function X() {
  return Q(/^iPhone/i) || Q(/^iPad/i) || (Y() && navigator.maxTouchPoints > 1);
}
function Z() {
  return G(/AppleWebKit/i) && !G(/Chrome/i);
}
function J(e, t, n, r) {
  let i = (0, o.useRef)(n);
  i.current = n;
  let l = null == n;
  (0, o.useEffect)(() => {
    if (l) return;
    let n = e.current,
      o = (e) => i.current.call(this, e);
    return (
      n.addEventListener(t, o, r),
      () => {
        n.removeEventListener(t, o, r);
      }
    );
  }, [e, t, r, l]);
}
function ee(e, t) {
  let n = te(e, t, "left"),
    r = te(e, t, "top"),
    i = t.offsetWidth,
    l = t.offsetHeight,
    o = e.scrollLeft,
    a = e.scrollTop,
    s = o + e.offsetWidth,
    u = a + e.offsetHeight;
  n <= o ? (o = n) : n + i > s && (o += n + i - s),
    r <= a ? (a = r) : r + l > u && (a += r + l - u),
    (e.scrollLeft = o),
    (e.scrollTop = a);
}
function te(e, t, n) {
  const r = "left" === n ? "offsetLeft" : "offsetTop";
  let i = 0;
  for (; t.offsetParent && ((i += t[r]), t.offsetParent !== e); ) {
    if (t.offsetParent.contains(e)) {
      i -= e[r];
      break;
    }
    t = t.offsetParent;
  }
  return i;
}
function ne(e) {
  return (
    !(0 !== e.mozInputSource || !e.isTrusted) ||
    (G(/Android/i) && e.pointerType
      ? "click" === e.type && 1 === e.buttons
      : 0 === e.detail && !e.pointerType)
  );
}
(o = l("acw62")), (o = l("acw62"));
class re {
  getStringForLocale(e, t) {
    let n = this.strings[t];
    n ||
      ((n = (function (e, t, n = "en-US") {
        if (t[e]) return t[e];
        let r = (function (e) {
          return Intl.Locale ? new Intl.Locale(e).language : e.split("-")[0];
        })(e);
        if (t[r]) return t[r];
        for (let e in t) if (e.startsWith(r + "-")) return t[e];
        return t[n];
      })(t, this.strings, this.defaultLocale)),
      (this.strings[t] = n));
    let r = n[e];
    if (!r) throw new Error(`Could not find intl message ${e} in ${t} locale`);
    return r;
  }
  constructor(e, t = "en-US") {
    (this.strings = { ...e }), (this.defaultLocale = t);
  }
}
const ie = new Map(),
  le = new Map();
class oe {
  format(e, t) {
    let n = this.strings.getStringForLocale(e, this.locale);
    return "function" == typeof n ? n(t, this) : n;
  }
  plural(e, t, n = "cardinal") {
    let r = t["=" + e];
    if (r) return "function" == typeof r ? r() : r;
    let i = this.locale + ":" + n,
      l = ie.get(i);
    return (
      l || ((l = new Intl.PluralRules(this.locale, { type: n })), ie.set(i, l)),
      (r = t[l.select(e)] || t.other),
      "function" == typeof r ? r() : r
    );
  }
  number(e) {
    let t = le.get(this.locale);
    return (
      t || ((t = new Intl.NumberFormat(this.locale)), le.set(this.locale, t)),
      t.format(e)
    );
  }
  select(e, t) {
    let n = e[t] || e.other;
    return "function" == typeof n ? n() : n;
  }
  constructor(e, t) {
    (this.locale = e), (this.strings = t);
  }
}
function ae(e, t, n) {
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
new Map();
new Map();
new Map();
let se = new Map(),
  ue = !1;
try {
  ue =
    "exceptZero" ===
    new Intl.NumberFormat("de-DE", {
      signDisplay: "exceptZero",
    }).resolvedOptions().signDisplay;
} catch (Wu) {}
let ce = !1;
try {
  ce =
    "unit" ===
    new Intl.NumberFormat("de-DE", {
      style: "unit",
      unit: "degree",
    }).resolvedOptions().style;
} catch (e) {}
const de = {
  degree: {
    narrow: { default: "°", "ja-JP": " 度", "zh-TW": "度", "sl-SI": " °" },
  },
};
class pe {
  format(e) {
    let t = "";
    if (
      ((t =
        ue || null == this.options.signDisplay
          ? this.numberFormatter.format(e)
          : (function (e, t, n) {
              if ("auto" === t) return e.format(n);
              if ("never" === t) return e.format(Math.abs(n));
              {
                let r = !1;
                if (
                  ("always" === t
                    ? (r = n > 0 || Object.is(n, 0))
                    : "exceptZero" === t &&
                      (Object.is(n, -0) || Object.is(n, 0)
                        ? (n = Math.abs(n))
                        : (r = n > 0)),
                  r)
                ) {
                  let t = e.format(-n),
                    r = e.format(n),
                    i = t.replace(r, "").replace(/\u200e|\u061C/, "");
                  return (
                    1 !== [...i].length &&
                      console.warn(
                        "@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case"
                      ),
                    t.replace(r, "!!!").replace(i, "+").replace("!!!", r)
                  );
                }
                return e.format(n);
              }
            })(this.numberFormatter, this.options.signDisplay, e)),
      "unit" === this.options.style && !ce)
    ) {
      var n;
      let {
          unit: e,
          unitDisplay: r = "short",
          locale: i,
        } = this.resolvedOptions(),
        l = null === (n = de[e]) || void 0 === n ? void 0 : n[r];
      t += l[i] || l.default;
    }
    return t;
  }
  formatToParts(e) {
    return this.numberFormatter.formatToParts(e);
  }
  formatRange(e, t) {
    if ("function" == typeof this.numberFormatter.formatRange)
      return this.numberFormatter.formatRange(e, t);
    if (t < e) throw new RangeError("End date must be >= start date");
    return `${this.format(e)} – ${this.format(t)}`;
  }
  formatRangeToParts(e, t) {
    if ("function" == typeof this.numberFormatter.formatRangeToParts)
      return this.numberFormatter.formatRangeToParts(e, t);
    if (t < e) throw new RangeError("End date must be >= start date");
    let n = this.numberFormatter.formatToParts(e),
      r = this.numberFormatter.formatToParts(t);
    return [
      ...n.map((e) => ({ ...e, source: "startRange" })),
      { type: "literal", value: " – ", source: "shared" },
      ...r.map((e) => ({ ...e, source: "endRange" })),
    ];
  }
  resolvedOptions() {
    let e = this.numberFormatter.resolvedOptions();
    return (
      ue ||
        null == this.options.signDisplay ||
        (e = { ...e, signDisplay: this.options.signDisplay }),
      ce ||
        "unit" !== this.options.style ||
        (e = {
          ...e,
          style: "unit",
          unit: this.options.unit,
          unitDisplay: this.options.unitDisplay,
        }),
      e
    );
  }
  constructor(e, t = {}) {
    (this.numberFormatter = (function (e, t = {}) {
      let { numberingSystem: n } = t;
      n && -1 === e.indexOf("-u-nu-") && (e = `${e}-u-nu-${n}`);
      if ("unit" === t.style && !ce) {
        var r;
        let { unit: e, unitDisplay: n = "short" } = t;
        if (!e)
          throw new Error('unit option must be provided with style: "unit"');
        if (!(null === (r = de[e]) || void 0 === r ? void 0 : r[n]))
          throw new Error(`Unsupported unit ${e} with unitDisplay = ${n}`);
        t = { ...t, style: "decimal" };
      }
      let i =
        e +
        (t
          ? Object.entries(t)
              .sort((e, t) => (e[0] < t[0] ? -1 : 1))
              .join()
          : "");
      if (se.has(i)) return se.get(i);
      let l = new Intl.NumberFormat(e, t);
      return se.set(i, l), l;
    })(e, t)),
      (this.options = t);
  }
}
new RegExp("^.*\\(.*\\).*$");
new Map();
new Set(["decimal", "fraction", "integer", "minusSign", "plusSign", "group"]);
const fe = new Set([
    "Arab",
    "Syrc",
    "Samr",
    "Mand",
    "Thaa",
    "Mend",
    "Nkoo",
    "Adlm",
    "Rohg",
    "Hebr",
  ]),
  me = new Set([
    "ae",
    "ar",
    "arc",
    "bcc",
    "bqi",
    "ckb",
    "dv",
    "fa",
    "glk",
    "he",
    "ku",
    "mzn",
    "nqo",
    "pnb",
    "ps",
    "sd",
    "ug",
    "ur",
    "yi",
  ]);
function he(e) {
  if (Intl.Locale) {
    let t = new Intl.Locale(e).maximize().script;
    return fe.has(t);
  }
  let t = e.split("-")[0];
  return me.has(t);
}
function ge() {
  let e =
    ("undefined" != typeof navigator &&
      (navigator.language || navigator.userLanguage)) ||
    "en-US";
  try {
    Intl.DateTimeFormat.supportedLocalesOf([e]);
  } catch (t) {
    e = "en-US";
  }
  return { locale: e, direction: he(e) ? "rtl" : "ltr" };
}
let ye = ge(),
  ve = new Set();
function be() {
  ye = ge();
  for (let e of ve) e(ye);
}
function we() {
  let e = m(),
    [t, n] = (0, o.useState)(ye);
  return (
    (0, o.useEffect)(
      () => (
        0 === ve.size && window.addEventListener("languagechange", be),
        ve.add(n),
        () => {
          ve.delete(n),
            0 === ve.size && window.removeEventListener("languagechange", be);
        }
      ),
      []
    ),
    e ? { locale: "en-US", direction: "ltr" } : t
  );
}
const Ee = t(o).createContext(null);
function ke(e) {
  let { locale: n, children: r } = e,
    i = we(),
    l = n ? { locale: n, direction: he(n) ? "rtl" : "ltr" } : i;
  return t(o).createElement(Ee.Provider, { value: l }, r);
}
function Se() {
  let e = we();
  return (0, o.useContext)(Ee) || e;
}
const xe = new WeakMap();
function Pe(e) {
  let { locale: t } = Se(),
    n = (0, o.useMemo)(
      () =>
        (function (e) {
          let t = xe.get(e);
          return t || ((t = new re(e)), xe.set(e, t)), t;
        })(e),
      [e]
    );
  return (0, o.useMemo)(() => new oe(t, n), [t, n]);
}
function Te(e = {}) {
  let { locale: t } = Se();
  return (0, o.useMemo)(() => new pe(t, e), [t, e]);
}
let _e = new Map();
function Ce(e) {
  let { locale: t } = Se(),
    n =
      t +
      (e
        ? Object.entries(e)
            .sort((e, t) => (e[0] < t[0] ? -1 : 1))
            .join()
        : "");
  if (_e.has(n)) return _e.get(n);
  let r = new Intl.Collator(t, e);
  return _e.set(n, r), r;
}
let Ie = !1;
function Me(e, ...t) {
  let n = [];
  for (let r of t)
    if ("object" == typeof r && r) {
      let t = {};
      for (let n in r) e[n] && (t[e[n]] = r[n]), (!Ie && e[n]) || (t[n] = r[n]);
      n.push(t);
    } else
      "string" == typeof r
        ? (e[r] && n.push(e[r]), (!Ie && e[r]) || n.push(r))
        : n.push(r);
  return g(...n);
}
function Le(e) {
  let n;
  return (
    (n =
      "string" == typeof e
        ? t(o).createElement("span", null, e)
        : t(o).Children.only(e)),
    n
  );
}
function Ne(e) {
  let t =
      "undefined" != typeof window && "function" == typeof window.matchMedia,
    [n, r] = (0, o.useState)(() => !!t && window.matchMedia(e).matches);
  return (
    (0, o.useEffect)(() => {
      if (!t) return;
      let n = window.matchMedia(e),
        i = (e) => {
          r(e.matches);
        };
      return (
        n.addListener(i),
        () => {
          n.removeListener(i);
        }
      );
    }, [t, e]),
    !m() && n
  );
}
function Re(e) {
  return { UNSAFE_getDOMNode: () => e.current };
}
function Oe(e) {
  let t = (0, o.useRef)(null);
  return (0, o.useImperativeHandle)(e, () => Re(t)), t;
}
function Ae(e, t) {
  let n = (0, o.useRef)(null);
  return (
    (0, o.useImperativeHandle)(e, () =>
      (function (e, t = e) {
        return {
          ...Re(e),
          focus() {
            t.current && t.current.focus();
          },
        };
      })(n, t)
    ),
    n
  );
}
function Fe(e) {
  return (0, o.useMemo)(
    () =>
      (function (e) {
        return {
          get current() {
            return e.current && e.current.UNSAFE_getDOMNode();
          },
        };
      })(e),
    [e]
  );
}
const ze = t(o).createContext(null);
function De(e) {
  let { children: n, matchedBreakpoints: r } = e;
  return t(o).createElement(
    ze.Provider,
    { value: { matchedBreakpoints: r } },
    n
  );
}
function Ke(e) {
  let t = Object.entries(e).sort(([, e], [, t]) => t - e),
    n = t.map(([, e]) => `(min-width: ${e}px)`),
    r = "undefined" != typeof window && "function" == typeof window.matchMedia,
    i = () => {
      let e = [];
      for (let r in n) {
        let i = n[r];
        window.matchMedia(i).matches && e.push(t[r][0]);
      }
      return e.push("base"), e;
    },
    [l, a] = (0, o.useState)(() => (r ? i() : ["base"]));
  return (
    (0, o.useEffect)(() => {
      if (!r) return;
      let e = () => {
        const e = i();
        a((t) =>
          t.length !== e.length || t.some((t, n) => t !== e[n]) ? [...e] : t
        );
      };
      return (
        window.addEventListener("resize", e),
        () => {
          window.removeEventListener("resize", e);
        }
      );
    }, [r]),
    m() ? ["base"] : l
  );
}
function Ve() {
  return (0, o.useContext)(ze);
}
ze.displayName = "BreakpointContext";
const Ue = {
    margin: ["margin", Ge],
    marginStart: [$e("marginLeft", "marginRight"), Ge],
    marginEnd: [$e("marginRight", "marginLeft"), Ge],
    marginTop: ["marginTop", Ge],
    marginBottom: ["marginBottom", Ge],
    marginX: [["marginLeft", "marginRight"], Ge],
    marginY: [["marginTop", "marginBottom"], Ge],
    width: ["width", Ge],
    height: ["height", Ge],
    minWidth: ["minWidth", Ge],
    minHeight: ["minHeight", Ge],
    maxWidth: ["maxWidth", Ge],
    maxHeight: ["maxHeight", Ge],
    isHidden: [
      "display",
      function (e) {
        return e ? "none" : void 0;
      },
    ],
    alignSelf: ["alignSelf", nt],
    justifySelf: ["justifySelf", nt],
    position: ["position", et],
    zIndex: ["zIndex", et],
    top: ["top", Ge],
    bottom: ["bottom", Ge],
    start: [$e("left", "right"), Ge],
    end: [$e("right", "left"), Ge],
    left: ["left", Ge],
    right: ["right", Ge],
    order: ["order", et],
    flex: [
      "flex",
      function (e) {
        return "boolean" == typeof e ? (e ? "1" : void 0) : "" + e;
      },
    ],
    flexGrow: ["flexGrow", nt],
    flexShrink: ["flexShrink", nt],
    flexBasis: ["flexBasis", nt],
    gridArea: ["gridArea", nt],
    gridColumn: ["gridColumn", nt],
    gridColumnEnd: ["gridColumnEnd", nt],
    gridColumnStart: ["gridColumnStart", nt],
    gridRow: ["gridRow", nt],
    gridRowEnd: ["gridRowEnd", nt],
    gridRowStart: ["gridRowStart", nt],
  },
  Be = {
    ...Ue,
    backgroundColor: [
      "backgroundColor",
      function (e, t = 5) {
        return `var(--spectrum-alias-background-color-${e}, ${Ye(
          e,
          "background",
          t
        )})`;
      },
    ],
    borderWidth: ["borderWidth", Ze],
    borderStartWidth: [$e("borderLeftWidth", "borderRightWidth"), Ze],
    borderEndWidth: [$e("borderRightWidth", "borderLeftWidth"), Ze],
    borderLeftWidth: ["borderLeftWidth", Ze],
    borderRightWidth: ["borderRightWidth", Ze],
    borderTopWidth: ["borderTopWidth", Ze],
    borderBottomWidth: ["borderBottomWidth", Ze],
    borderXWidth: [["borderLeftWidth", "borderRightWidth"], Ze],
    borderYWidth: [["borderTopWidth", "borderBottomWidth"], Ze],
    borderColor: ["borderColor", Xe],
    borderStartColor: [$e("borderLeftColor", "borderRightColor"), Xe],
    borderEndColor: [$e("borderRightColor", "borderLeftColor"), Xe],
    borderLeftColor: ["borderLeftColor", Xe],
    borderRightColor: ["borderRightColor", Xe],
    borderTopColor: ["borderTopColor", Xe],
    borderBottomColor: ["borderBottomColor", Xe],
    borderXColor: [["borderLeftColor", "borderRightColor"], Xe],
    borderYColor: [["borderTopColor", "borderBottomColor"], Xe],
    borderRadius: ["borderRadius", Je],
    borderTopStartRadius: [
      $e("borderTopLeftRadius", "borderTopRightRadius"),
      Je,
    ],
    borderTopEndRadius: [$e("borderTopRightRadius", "borderTopLeftRadius"), Je],
    borderBottomStartRadius: [
      $e("borderBottomLeftRadius", "borderBottomRightRadius"),
      Je,
    ],
    borderBottomEndRadius: [
      $e("borderBottomRightRadius", "borderBottomLeftRadius"),
      Je,
    ],
    borderTopLeftRadius: ["borderTopLeftRadius", Je],
    borderTopRightRadius: ["borderTopRightRadius", Je],
    borderBottomLeftRadius: ["borderBottomLeftRadius", Je],
    borderBottomRightRadius: ["borderBottomRightRadius", Je],
    padding: ["padding", Ge],
    paddingStart: [$e("paddingLeft", "paddingRight"), Ge],
    paddingEnd: [$e("paddingRight", "paddingLeft"), Ge],
    paddingLeft: ["paddingLeft", Ge],
    paddingRight: ["paddingRight", Ge],
    paddingTop: ["paddingTop", Ge],
    paddingBottom: ["paddingBottom", Ge],
    paddingX: [["paddingLeft", "paddingRight"], Ge],
    paddingY: [["paddingTop", "paddingBottom"], Ge],
    overflow: ["overflow", nt],
  },
  je = {
    borderWidth: "borderStyle",
    borderLeftWidth: "borderLeftStyle",
    borderRightWidth: "borderRightStyle",
    borderTopWidth: "borderTopStyle",
    borderBottomWidth: "borderBottomStyle",
  };
function $e(e, t) {
  return (n) => ("rtl" === n ? t : e);
}
const He = /(%|px|em|rem|vw|vh|auto|cm|mm|in|pt|pc|ex|ch|rem|vmin|vmax|fr)$/,
  We = /^\s*\w+\(/,
  qe = /(static-)?size-\d+|single-line-(height|width)/g;
function Ge(e) {
  return "number" == typeof e
    ? e + "px"
    : He.test(e)
    ? e
    : We.test(e)
    ? e.replace(
        qe,
        "var(--spectrum-global-dimension-$&, var(--spectrum-alias-$&))"
      )
    : `var(--spectrum-global-dimension-${e}, var(--spectrum-alias-${e}))`;
}
function Qe(e, t) {
  return Ge((e = rt(e, t)));
}
function Ye(e, t = "default", n = 5) {
  return n > 5
    ? `var(--spectrum-${e}, var(--spectrum-semantic-${e}-color-${t}))`
    : `var(--spectrum-legacy-color-${e}, var(--spectrum-global-color-${e}, var(--spectrum-semantic-${e}-color-${t})))`;
}
function Xe(e, t = 5) {
  return "default" === e
    ? "var(--spectrum-alias-border-color)"
    : `var(--spectrum-alias-border-color-${e}, ${Ye(e, "border", t)})`;
}
function Ze(e) {
  return `var(--spectrum-alias-border-size-${e})`;
}
function Je(e) {
  return `var(--spectrum-alias-border-radius-${e})`;
}
function et(e) {
  return e;
}
function tt(e, t = Ue, n = {}) {
  let { UNSAFE_className: r, UNSAFE_style: i, ...l } = e,
    o = Ve(),
    { direction: a } = Se(),
    {
      matchedBreakpoints: s = (null == o ? void 0 : o.matchedBreakpoints) || [
        "base",
      ],
    } = n,
    u = (function (e, t, n, r) {
      let i = {};
      for (let l in e) {
        let o = t[l];
        if (!o || null == e[l]) continue;
        let [a, s] = o;
        "function" == typeof a && (a = a(n));
        let u = s(rt(e[l], r), e.colorVersion);
        if (Array.isArray(a)) for (let e of a) i[e] = u;
        else i[a] = u;
      }
      for (let e in je)
        i[e] && ((i[je[e]] = "solid"), (i.boxSizing = "border-box"));
      return i;
    })(e, t, a, s),
    c = { ...i, ...u };
  l.className &&
    console.warn(
      "The className prop is unsafe and is unsupported in React Spectrum v3. Please use style props with Spectrum variables, or UNSAFE_className if you absolutely must do something custom. Note that this may break in future versions due to DOM structure changes."
    ),
    l.style &&
      console.warn(
        "The style prop is unsafe and is unsupported in React Spectrum v3. Please use style props with Spectrum variables, or UNSAFE_style if you absolutely must do something custom. Note that this may break in future versions due to DOM structure changes."
      );
  let d = { style: c, className: r };
  return rt(e.isHidden, s) && (d.hidden = !0), { styleProps: d };
}
function nt(e) {
  return e;
}
function rt(e, t) {
  if (e && "object" == typeof e && !Array.isArray(e)) {
    for (let n = 0; n < t.length; n++) {
      let r = t[n];
      if (null != e[r]) return e[r];
    }
    return e.base;
  }
  return e;
}
let it = t(o).createContext(null);
function lt(e, t) {
  let n = e.slot || t,
    { [n]: r = {} } = (0, o.useContext)(it) || {};
  return x(e, x(r, { id: e.id }));
}
function ot(e) {
  let n = (0, o.useContext)(it) || {},
    { slots: r = {}, children: i } = e,
    l = (0, o.useMemo)(
      () =>
        Object.keys(n)
          .concat(Object.keys(r))
          .reduce((e, t) => ({ ...e, [t]: x(n[t] || {}, r[t] || {}) }), {}),
      [n, r]
    );
  return t(o).createElement(it.Provider, { value: l }, i);
}
function at(e) {
  let { children: n, ...r } = e,
    i = n;
  return (
    t(o).Children.toArray(n).length <= 1 &&
      "function" == typeof n &&
      (i = t(o).cloneElement(t(o).Children.only(n), r)),
    t(o).createElement(it.Provider, { value: {} }, i)
  );
}
function st(e, t) {
  let [n, r] = (0, o.useState)(!0);
  return (
    y(() => {
      r(!(!t.current || !t.current.querySelector(e)));
    }, [r, e, t]),
    n
  );
}
function ut() {
  return !m() && "undefined" != typeof window && window.screen.width <= 700;
}
(o = l("acw62")), (o = l("acw62"));
let ct = "default",
  dt = "",
  pt = new WeakMap();
function ft(e) {
  X()
    ? ("default" === ct &&
        ((dt = document.documentElement.style.webkitUserSelect),
        (document.documentElement.style.webkitUserSelect = "none")),
      (ct = "disabled"))
    : (e instanceof HTMLElement || e instanceof SVGElement) &&
      (pt.set(e, e.style.userSelect), (e.style.userSelect = "none"));
}
function mt(e) {
  if (X()) {
    if ("disabled" !== ct) return;
    (ct = "restoring"),
      setTimeout(() => {
        O(() => {
          "restoring" === ct &&
            ("none" === document.documentElement.style.webkitUserSelect &&
              (document.documentElement.style.webkitUserSelect = dt || ""),
            (dt = ""),
            (ct = "default"));
        });
      }, 300);
  } else if (
    (e instanceof HTMLElement || e instanceof SVGElement) &&
    e &&
    pt.has(e)
  ) {
    let t = pt.get(e);
    "none" === e.style.userSelect && (e.style.userSelect = t),
      "" === e.getAttribute("style") && e.removeAttribute("style"),
      pt.delete(e);
  }
}
const ht = t(o).createContext(null);
function gt(e) {
  let {
      onPress: t,
      onPressChange: n,
      onPressStart: r,
      onPressEnd: i,
      onPressUp: l,
      isDisabled: a,
      isPressed: s,
      preventFocusOnPress: u,
      shouldCancelOnPointerExit: c,
      allowTextSelectionOnPress: d,
      ref: p,
      ...f
    } = (function (e) {
      let t = (0, o.useContext)(ht);
      if (t) {
        let { register: n, ...r } = t;
        (e = x(r, e)), n();
      }
      return K(t, e.ref), e;
    })(e),
    m = (0, o.useRef)(null);
  m.current = {
    onPress: t,
    onPressChange: n,
    onPressStart: r,
    onPressEnd: i,
    onPressUp: l,
    isDisabled: a,
    shouldCancelOnPointerExit: c,
  };
  let [h, g] = (0, o.useState)(!1),
    y = (0, o.useRef)({
      isPressed: !1,
      ignoreEmulatedMouseEvents: !1,
      ignoreClickAfterPress: !1,
      didFirePressStart: !1,
      activePointerId: null,
      target: null,
      isOverTarget: !1,
      pointerType: null,
    }),
    { addGlobalListener: v, removeAllGlobalListeners: b } = A(),
    w = (0, o.useMemo)(() => {
      let e = y.current,
        t = (t, n) => {
          let { onPressStart: r, onPressChange: i, isDisabled: l } = m.current;
          l ||
            e.didFirePressStart ||
            (r &&
              r({
                type: "pressstart",
                pointerType: n,
                target: t.currentTarget,
                shiftKey: t.shiftKey,
                metaKey: t.metaKey,
                ctrlKey: t.ctrlKey,
                altKey: t.altKey,
              }),
            i && i(!0),
            (e.didFirePressStart = !0),
            g(!0));
        },
        n = (t, n, r = !0) => {
          let {
            onPressEnd: i,
            onPressChange: l,
            onPress: o,
            isDisabled: a,
          } = m.current;
          e.didFirePressStart &&
            ((e.ignoreClickAfterPress = !0),
            (e.didFirePressStart = !1),
            i &&
              i({
                type: "pressend",
                pointerType: n,
                target: t.currentTarget,
                shiftKey: t.shiftKey,
                metaKey: t.metaKey,
                ctrlKey: t.ctrlKey,
                altKey: t.altKey,
              }),
            l && l(!1),
            g(!1),
            o &&
              r &&
              !a &&
              o({
                type: "press",
                pointerType: n,
                target: t.currentTarget,
                shiftKey: t.shiftKey,
                metaKey: t.metaKey,
                ctrlKey: t.ctrlKey,
                altKey: t.altKey,
              }));
        },
        r = (e, t) => {
          let { onPressUp: n, isDisabled: r } = m.current;
          r ||
            (n &&
              n({
                type: "pressup",
                pointerType: t,
                target: e.currentTarget,
                shiftKey: e.shiftKey,
                metaKey: e.metaKey,
                ctrlKey: e.ctrlKey,
                altKey: e.altKey,
              }));
        },
        i = (t) => {
          e.isPressed &&
            (e.isOverTarget && n(wt(e.target, t), e.pointerType, !1),
            (e.isPressed = !1),
            (e.isOverTarget = !1),
            (e.activePointerId = null),
            (e.pointerType = null),
            b(),
            d || mt(e.target));
        },
        l = {
          onKeyDown(n) {
            vt(n.nativeEvent, n.currentTarget) &&
            n.currentTarget.contains(n.target)
              ? (St(n.target, n.key) && n.preventDefault(),
                n.stopPropagation(),
                e.isPressed ||
                  n.repeat ||
                  ((e.target = n.currentTarget),
                  (e.isPressed = !0),
                  t(n, "keyboard"),
                  v(document, "keyup", o, !1)))
              : "Enter" === n.key && yt(n.currentTarget) && n.stopPropagation();
          },
          onKeyUp(t) {
            vt(t.nativeEvent, t.currentTarget) &&
              !t.repeat &&
              t.currentTarget.contains(t.target) &&
              r(wt(e.target, t), "keyboard");
          },
          onClick(i) {
            (i && !i.currentTarget.contains(i.target)) ||
              (i &&
                0 === i.button &&
                (i.stopPropagation(),
                a && i.preventDefault(),
                e.ignoreClickAfterPress ||
                  e.ignoreEmulatedMouseEvents ||
                  ("virtual" !== e.pointerType && !ne(i.nativeEvent)) ||
                  (a || u || I(i.currentTarget),
                  t(i, "virtual"),
                  r(i, "virtual"),
                  n(i, "virtual")),
                (e.ignoreEmulatedMouseEvents = !1),
                (e.ignoreClickAfterPress = !1)));
          },
        },
        o = (t) => {
          if (e.isPressed && vt(t, e.target)) {
            St(t.target, t.key) && t.preventDefault(),
              t.stopPropagation(),
              (e.isPressed = !1);
            let r = t.target;
            n(wt(e.target, t), "keyboard", e.target.contains(r)),
              b(),
              e.target instanceof HTMLElement &&
                e.target.contains(r) &&
                (yt(e.target) || "link" === e.target.getAttribute("role")) &&
                e.target.click();
          }
        };
      if ("undefined" != typeof PointerEvent) {
        (l.onPointerDown = (n) => {
          var r;
          0 === n.button &&
            n.currentTarget.contains(n.target) &&
            ((0 === (r = n.nativeEvent).width && 0 === r.height) ||
            (1 === r.width &&
              1 === r.height &&
              0 === r.pressure &&
              0 === r.detail &&
              "mouse" === r.pointerType)
              ? (e.pointerType = "virtual")
              : (kt(n.currentTarget) && n.preventDefault(),
                (e.pointerType = n.pointerType),
                n.stopPropagation(),
                e.isPressed ||
                  ((e.isPressed = !0),
                  (e.isOverTarget = !0),
                  (e.activePointerId = n.pointerId),
                  (e.target = n.currentTarget),
                  a || u || I(n.currentTarget),
                  d || ft(e.target),
                  t(n, e.pointerType),
                  v(document, "pointermove", o, !1),
                  v(document, "pointerup", s, !1),
                  v(document, "pointercancel", c, !1))));
        }),
          (l.onMouseDown = (e) => {
            e.currentTarget.contains(e.target) &&
              0 === e.button &&
              (kt(e.currentTarget) && e.preventDefault(), e.stopPropagation());
          }),
          (l.onPointerUp = (t) => {
            t.currentTarget.contains(t.target) &&
              "virtual" !== e.pointerType &&
              0 === t.button &&
              Et(t, t.currentTarget) &&
              r(t, e.pointerType || t.pointerType);
          });
        let o = (r) => {
            r.pointerId === e.activePointerId &&
              (Et(r, e.target)
                ? e.isOverTarget ||
                  ((e.isOverTarget = !0), t(wt(e.target, r), e.pointerType))
                : e.isOverTarget &&
                  ((e.isOverTarget = !1),
                  n(wt(e.target, r), e.pointerType, !1),
                  m.current.shouldCancelOnPointerExit && i(r)));
          },
          s = (t) => {
            t.pointerId === e.activePointerId &&
              e.isPressed &&
              0 === t.button &&
              (Et(t, e.target)
                ? n(wt(e.target, t), e.pointerType)
                : e.isOverTarget && n(wt(e.target, t), e.pointerType, !1),
              (e.isPressed = !1),
              (e.isOverTarget = !1),
              (e.activePointerId = null),
              (e.pointerType = null),
              b(),
              d || mt(e.target));
          },
          c = (e) => {
            i(e);
          };
        l.onDragStart = (e) => {
          e.currentTarget.contains(e.target) && i(e);
        };
      } else {
        (l.onMouseDown = (n) => {
          0 === n.button &&
            n.currentTarget.contains(n.target) &&
            (kt(n.currentTarget) && n.preventDefault(),
            n.stopPropagation(),
            e.ignoreEmulatedMouseEvents ||
              ((e.isPressed = !0),
              (e.isOverTarget = !0),
              (e.target = n.currentTarget),
              (e.pointerType = ne(n.nativeEvent) ? "virtual" : "mouse"),
              a || u || I(n.currentTarget),
              t(n, e.pointerType),
              v(document, "mouseup", o, !1)));
        }),
          (l.onMouseEnter = (n) => {
            n.currentTarget.contains(n.target) &&
              (n.stopPropagation(),
              e.isPressed &&
                !e.ignoreEmulatedMouseEvents &&
                ((e.isOverTarget = !0), t(n, e.pointerType)));
          }),
          (l.onMouseLeave = (t) => {
            t.currentTarget.contains(t.target) &&
              (t.stopPropagation(),
              e.isPressed &&
                !e.ignoreEmulatedMouseEvents &&
                ((e.isOverTarget = !1),
                n(t, e.pointerType, !1),
                m.current.shouldCancelOnPointerExit && i(t)));
          }),
          (l.onMouseUp = (t) => {
            t.currentTarget.contains(t.target) &&
              (e.ignoreEmulatedMouseEvents ||
                0 !== t.button ||
                r(t, e.pointerType));
          });
        let o = (t) => {
          0 === t.button &&
            ((e.isPressed = !1),
            b(),
            e.ignoreEmulatedMouseEvents
              ? (e.ignoreEmulatedMouseEvents = !1)
              : (Et(t, e.target)
                  ? n(wt(e.target, t), e.pointerType)
                  : e.isOverTarget && n(wt(e.target, t), e.pointerType, !1),
                (e.isOverTarget = !1)));
        };
        (l.onTouchStart = (n) => {
          if (!n.currentTarget.contains(n.target)) return;
          n.stopPropagation();
          let r = (function (e) {
            const { targetTouches: t } = e;
            return t.length > 0 ? t[0] : null;
          })(n.nativeEvent);
          r &&
            ((e.activePointerId = r.identifier),
            (e.ignoreEmulatedMouseEvents = !0),
            (e.isOverTarget = !0),
            (e.isPressed = !0),
            (e.target = n.currentTarget),
            (e.pointerType = "touch"),
            a || u || I(n.currentTarget),
            d || ft(e.target),
            t(n, e.pointerType),
            v(window, "scroll", s, !0));
        }),
          (l.onTouchMove = (r) => {
            if (!r.currentTarget.contains(r.target)) return;
            if ((r.stopPropagation(), !e.isPressed)) return;
            let l = bt(r.nativeEvent, e.activePointerId);
            l && Et(l, r.currentTarget)
              ? e.isOverTarget || ((e.isOverTarget = !0), t(r, e.pointerType))
              : e.isOverTarget &&
                ((e.isOverTarget = !1),
                n(r, e.pointerType, !1),
                m.current.shouldCancelOnPointerExit && i(r));
          }),
          (l.onTouchEnd = (t) => {
            if (!t.currentTarget.contains(t.target)) return;
            if ((t.stopPropagation(), !e.isPressed)) return;
            let i = bt(t.nativeEvent, e.activePointerId);
            i && Et(i, t.currentTarget)
              ? (r(t, e.pointerType), n(t, e.pointerType))
              : e.isOverTarget && n(t, e.pointerType, !1),
              (e.isPressed = !1),
              (e.activePointerId = null),
              (e.isOverTarget = !1),
              (e.ignoreEmulatedMouseEvents = !0),
              d || mt(e.target),
              b();
          }),
          (l.onTouchCancel = (t) => {
            t.currentTarget.contains(t.target) &&
              (t.stopPropagation(), e.isPressed && i(t));
          });
        let s = (t) => {
          e.isPressed &&
            t.target.contains(e.target) &&
            i({
              currentTarget: e.target,
              shiftKey: !1,
              ctrlKey: !1,
              metaKey: !1,
              altKey: !1,
            });
        };
        l.onDragStart = (e) => {
          e.currentTarget.contains(e.target) && i(e);
        };
      }
      return l;
    }, [v, a, u, b, d]);
  return (
    (0, o.useEffect)(
      () => () => {
        d || mt(y.current.target);
      },
      [d]
    ),
    { isPressed: s || h, pressProps: x(f, w) }
  );
}
function yt(e) {
  return "A" === e.tagName && e.hasAttribute("href");
}
function vt(e, t) {
  const { key: n, code: r } = e,
    i = t,
    l = i.getAttribute("role");
  return !(
    ("Enter" !== n && " " !== n && "Spacebar" !== n && "Space" !== r) ||
    (i instanceof HTMLInputElement && !Pt(i, n)) ||
    i instanceof HTMLTextAreaElement ||
    i.isContentEditable ||
    (yt(i) && ("button" !== l || "Enter" === n)) ||
    ("link" === l && "Enter" !== n)
  );
}
function bt(e, t) {
  const n = e.changedTouches;
  for (let e = 0; e < n.length; e++) {
    const r = n[e];
    if (r.identifier === t) return r;
  }
  return null;
}
function wt(e, t) {
  return {
    currentTarget: e,
    shiftKey: t.shiftKey,
    ctrlKey: t.ctrlKey,
    metaKey: t.metaKey,
    altKey: t.altKey,
  };
}
function Et(e, t) {
  let n = t.getBoundingClientRect(),
    r = (function (e) {
      let t = e.width / 2 || e.radiusX || 0,
        n = e.height / 2 || e.radiusY || 0;
      return {
        top: e.clientY - n,
        right: e.clientX + t,
        bottom: e.clientY + n,
        left: e.clientX - t,
      };
    })(e);
  return (
    (l = r),
    !(
      (i = n).left > l.right ||
      l.left > i.right ||
      i.top > l.bottom ||
      l.top > i.bottom
    )
  );
  var i, l;
}
function kt(e) {
  return !(e instanceof HTMLElement && e.draggable);
}
function St(e, t) {
  return e instanceof HTMLInputElement
    ? !Pt(e, t)
    : !(e instanceof HTMLButtonElement) || "submit" !== e.type;
}
ht.displayName = "PressResponderContext";
const xt = new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset",
]);
function Pt(e, t) {
  return "checkbox" === e.type || "radio" === e.type
    ? " " === t
    : xt.has(e.type);
}
t(o).forwardRef(({ children: e, ...n }, r) => {
  let i = (0, o.useRef)();
  r = null != r ? r : i;
  let { pressProps: l } = gt({ ...n, ref: r }),
    a = t(o).Children.only(e);
  return t(o).cloneElement(a, { ref: r, ...x(a.props, l) });
});
const Tt = t(o).forwardRef(({ children: e, ...n }, r) => {
  let i = (0, o.useRef)(!1),
    l = (0, o.useContext)(ht),
    a = x(l || {}, {
      ...n,
      ref: r || (null == l ? void 0 : l.ref),
      register() {
        (i.current = !0), l && l.register();
      },
    });
  return (
    K(l, r),
    (0, o.useEffect)(() => {
      i.current ||
        console.warn(
          "A PressResponder was rendered without a pressable child. Either call the usePress hook, or wrap your DOM node with <Pressable> component."
        );
    }, []),
    t(o).createElement(ht.Provider, { value: a }, e)
  );
});
class _t {
  isDefaultPrevented() {
    return this.nativeEvent.defaultPrevented;
  }
  preventDefault() {
    (this.defaultPrevented = !0), this.nativeEvent.preventDefault();
  }
  stopPropagation() {
    this.nativeEvent.stopPropagation(), (this.isPropagationStopped = () => !0);
  }
  isPropagationStopped() {
    return !1;
  }
  persist() {}
  constructor(e, t) {
    (this.nativeEvent = t),
      (this.target = t.target),
      (this.currentTarget = t.currentTarget),
      (this.relatedTarget = t.relatedTarget),
      (this.bubbles = t.bubbles),
      (this.cancelable = t.cancelable),
      (this.defaultPrevented = t.defaultPrevented),
      (this.eventPhase = t.eventPhase),
      (this.isTrusted = t.isTrusted),
      (this.timeStamp = t.timeStamp),
      (this.type = e);
  }
}
function Ct(e) {
  let t = (0, o.useRef)({ isFocused: !1, onBlur: e, observer: null });
  return (
    (t.current.onBlur = e),
    y(() => {
      const e = t.current;
      return () => {
        e.observer && (e.observer.disconnect(), (e.observer = null));
      };
    }, []),
    (0, o.useCallback)((e) => {
      if (
        e.target instanceof HTMLButtonElement ||
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        e.target instanceof HTMLSelectElement
      ) {
        t.current.isFocused = !0;
        let n = e.target,
          r = (e) => {
            var r, i;
            (t.current.isFocused = !1),
              n.disabled &&
                (null === (i = (r = t.current).onBlur) ||
                  void 0 === i ||
                  i.call(r, new _t("blur", e))),
              t.current.observer &&
                (t.current.observer.disconnect(), (t.current.observer = null));
          };
        n.addEventListener("focusout", r, { once: !0 }),
          (t.current.observer = new MutationObserver(() => {
            t.current.isFocused &&
              n.disabled &&
              (t.current.observer.disconnect(),
              n.dispatchEvent(new FocusEvent("blur")),
              n.dispatchEvent(new FocusEvent("focusout", { bubbles: !0 })));
          })),
          t.current.observer.observe(n, {
            attributes: !0,
            attributeFilter: ["disabled"],
          });
      }
    }, [])
  );
}
function It(e) {
  let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: i } = e;
  const l = (0, o.useCallback)(
      (e) => {
        if (e.target === e.currentTarget) return r && r(e), i && i(!1), !0;
      },
      [r, i]
    ),
    a = Ct(l),
    s = (0, o.useCallback)(
      (e) => {
        e.target === e.currentTarget && (n && n(e), i && i(!0), a(e));
      },
      [i, n, a]
    );
  return {
    focusProps: {
      onFocus: !t && (n || i || r) ? s : void 0,
      onBlur: t || (!r && !i) ? null : l,
    },
  };
}
let Mt = null,
  Lt = new Set(),
  Nt = !1,
  Rt = !1,
  Ot = !1;
const At = { Tab: !0, Escape: !0 };
function Ft(e, t) {
  for (let n of Lt) n(e, t);
}
function zt(e) {
  (Rt = !0),
    (function (e) {
      return !(
        e.metaKey ||
        (!Y() && e.altKey) ||
        e.ctrlKey ||
        "Control" === e.key ||
        "Shift" === e.key ||
        "Meta" === e.key
      );
    })(e) && ((Mt = "keyboard"), Ft("keyboard", e));
}
function Dt(e) {
  (Mt = "pointer"),
    ("mousedown" !== e.type && "pointerdown" !== e.type) ||
      ((Rt = !0), Ft("pointer", e));
}
function Kt(e) {
  ne(e) && ((Rt = !0), (Mt = "virtual"));
}
function Vt(e) {
  e.target !== window &&
    e.target !== document &&
    (Rt || Ot || ((Mt = "virtual"), Ft("virtual", e)), (Rt = !1), (Ot = !1));
}
function Ut() {
  (Rt = !1), (Ot = !0);
}
function Bt() {
  if ("undefined" == typeof window || Nt) return;
  let e = HTMLElement.prototype.focus;
  (HTMLElement.prototype.focus = function () {
    (Rt = !0), e.apply(this, arguments);
  }),
    document.addEventListener("keydown", zt, !0),
    document.addEventListener("keyup", zt, !0),
    document.addEventListener("click", Kt, !0),
    window.addEventListener("focus", Vt, !0),
    window.addEventListener("blur", Ut, !1),
    "undefined" != typeof PointerEvent
      ? (document.addEventListener("pointerdown", Dt, !0),
        document.addEventListener("pointermove", Dt, !0),
        document.addEventListener("pointerup", Dt, !0))
      : (document.addEventListener("mousedown", Dt, !0),
        document.addEventListener("mousemove", Dt, !0),
        document.addEventListener("mouseup", Dt, !0)),
    (Nt = !0);
}
function jt() {
  return "pointer" !== Mt;
}
function $t() {
  return Mt;
}
function Ht() {
  Bt();
  let [e, t] = (0, o.useState)(Mt);
  return (
    (0, o.useEffect)(() => {
      let e = () => {
        t(Mt);
      };
      return (
        Lt.add(e),
        () => {
          Lt.delete(e);
        }
      );
    }, []),
    e
  );
}
function Wt(e, t, n) {
  Bt(),
    (0, o.useEffect)(() => {
      let t = (t, r) => {
        (function (e, t, n) {
          return !(
            e &&
            "keyboard" === t &&
            n instanceof KeyboardEvent &&
            !At[n.key]
          );
        })(null == n ? void 0 : n.isTextInput, t, r) && e(jt());
      };
      return (
        Lt.add(t),
        () => {
          Lt.delete(t);
        }
      );
    }, t);
}
function qt(e) {
  let {
      isDisabled: t,
      onBlurWithin: n,
      onFocusWithin: r,
      onFocusWithinChange: i,
    } = e,
    l = (0, o.useRef)({ isFocusWithin: !1 }),
    a = (0, o.useCallback)(
      (e) => {
        l.current.isFocusWithin &&
          !e.currentTarget.contains(e.relatedTarget) &&
          ((l.current.isFocusWithin = !1), n && n(e), i && i(!1));
      },
      [n, i, l]
    ),
    s = Ct(a),
    u = (0, o.useCallback)(
      (e) => {
        l.current.isFocusWithin ||
          (r && r(e), i && i(!0), (l.current.isFocusWithin = !0), s(e));
      },
      [r, i, s]
    );
  return t
    ? { focusWithinProps: { onFocus: null, onBlur: null } }
    : { focusWithinProps: { onFocus: u, onBlur: a } };
}
"undefined" != typeof document &&
  ("loading" !== document.readyState
    ? Bt()
    : document.addEventListener("DOMContentLoaded", Bt));
let Gt = !1,
  Qt = 0;
function Yt() {
  (Gt = !0),
    setTimeout(() => {
      Gt = !1;
    }, 50);
}
function Xt(e) {
  "touch" === e.pointerType && Yt();
}
function Zt() {
  if ("undefined" != typeof document)
    return (
      "undefined" != typeof PointerEvent
        ? document.addEventListener("pointerup", Xt)
        : document.addEventListener("touchend", Yt),
      Qt++,
      () => {
        Qt--,
          Qt > 0 ||
            ("undefined" != typeof PointerEvent
              ? document.removeEventListener("pointerup", Xt)
              : document.removeEventListener("touchend", Yt));
      }
    );
}
function Jt(e) {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: i } = e,
    [l, a] = (0, o.useState)(!1),
    s = (0, o.useRef)({
      isHovered: !1,
      ignoreEmulatedMouseEvents: !1,
      pointerType: "",
      target: null,
    }).current;
  (0, o.useEffect)(Zt, []);
  let { hoverProps: u, triggerHoverEnd: c } = (0, o.useMemo)(() => {
    let e = (e, r) => {
        if (
          ((s.pointerType = r),
          i ||
            "touch" === r ||
            s.isHovered ||
            !e.currentTarget.contains(e.target))
        )
          return;
        s.isHovered = !0;
        let l = e.currentTarget;
        (s.target = l),
          t && t({ type: "hoverstart", target: l, pointerType: r }),
          n && n(!0),
          a(!0);
      },
      l = (e, t) => {
        if (
          ((s.pointerType = ""),
          (s.target = null),
          "touch" === t || !s.isHovered)
        )
          return;
        s.isHovered = !1;
        let i = e.currentTarget;
        r && r({ type: "hoverend", target: i, pointerType: t }),
          n && n(!1),
          a(!1);
      },
      o = {};
    return (
      "undefined" != typeof PointerEvent
        ? ((o.onPointerEnter = (t) => {
            (Gt && "mouse" === t.pointerType) || e(t, t.pointerType);
          }),
          (o.onPointerLeave = (e) => {
            !i && e.currentTarget.contains(e.target) && l(e, e.pointerType);
          }))
        : ((o.onTouchStart = () => {
            s.ignoreEmulatedMouseEvents = !0;
          }),
          (o.onMouseEnter = (t) => {
            s.ignoreEmulatedMouseEvents || Gt || e(t, "mouse"),
              (s.ignoreEmulatedMouseEvents = !1);
          }),
          (o.onMouseLeave = (e) => {
            !i && e.currentTarget.contains(e.target) && l(e, "mouse");
          })),
      { hoverProps: o, triggerHoverEnd: l }
    );
  }, [t, n, r, i, s]);
  return (
    (0, o.useEffect)(() => {
      i && c({ currentTarget: s.target }, s.pointerType);
    }, [i]),
    { hoverProps: u, isHovered: l }
  );
}
function en(e) {
  let {
      ref: t,
      onInteractOutside: n,
      isDisabled: r,
      onInteractOutsideStart: i,
    } = e,
    l = (0, o.useRef)({
      isPointerDown: !1,
      ignoreEmulatedMouseEvents: !1,
      onInteractOutside: n,
      onInteractOutsideStart: i,
    }).current;
  (l.onInteractOutside = n),
    (l.onInteractOutsideStart = i),
    (0, o.useEffect)(() => {
      if (r) return;
      let e = (e) => {
        tn(e, t) &&
          l.onInteractOutside &&
          (l.onInteractOutsideStart && l.onInteractOutsideStart(e),
          (l.isPointerDown = !0));
      };
      if ("undefined" != typeof PointerEvent) {
        let n = (e) => {
          l.isPointerDown &&
            l.onInteractOutside &&
            tn(e, t) &&
            ((l.isPointerDown = !1), l.onInteractOutside(e));
        };
        return (
          document.addEventListener("pointerdown", e, !0),
          document.addEventListener("pointerup", n, !0),
          () => {
            document.removeEventListener("pointerdown", e, !0),
              document.removeEventListener("pointerup", n, !0);
          }
        );
      }
      {
        let n = (e) => {
            l.ignoreEmulatedMouseEvents
              ? (l.ignoreEmulatedMouseEvents = !1)
              : l.isPointerDown &&
                l.onInteractOutside &&
                tn(e, t) &&
                ((l.isPointerDown = !1), l.onInteractOutside(e));
          },
          r = (e) => {
            (l.ignoreEmulatedMouseEvents = !0),
              l.onInteractOutside &&
                l.isPointerDown &&
                tn(e, t) &&
                ((l.isPointerDown = !1), l.onInteractOutside(e));
          };
        return (
          document.addEventListener("mousedown", e, !0),
          document.addEventListener("mouseup", n, !0),
          document.addEventListener("touchstart", e, !0),
          document.addEventListener("touchend", r, !0),
          () => {
            document.removeEventListener("mousedown", e, !0),
              document.removeEventListener("mouseup", n, !0),
              document.removeEventListener("touchstart", e, !0),
              document.removeEventListener("touchend", r, !0);
          }
        );
      }
    }, [t, l, r]);
}
function tn(e, t) {
  if (e.button > 0) return !1;
  if (e.target) {
    const t = e.target.ownerDocument;
    if (!t || !t.documentElement.contains(e.target)) return !1;
  }
  return t.current && !t.current.contains(e.target);
}
function nn(e) {
  if (!e) return;
  let t = !0;
  return (n) => {
    let r = {
      ...n,
      preventDefault() {
        n.preventDefault();
      },
      isDefaultPrevented: () => n.isDefaultPrevented(),
      stopPropagation() {
        console.error(
          "stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior."
        );
      },
      continuePropagation() {
        t = !1;
      },
    };
    e(r), t && n.stopPropagation();
  };
}
function rn(e) {
  return {
    keyboardProps: e.isDisabled
      ? {}
      : { onKeyDown: nn(e.onKeyDown), onKeyUp: nn(e.onKeyUp) },
  };
}
const ln = 500;
function on(e) {
  let {
    isDisabled: t,
    onLongPressStart: n,
    onLongPressEnd: r,
    onLongPress: i,
    threshold: l = ln,
    accessibilityDescription: a,
  } = e;
  const s = (0, o.useRef)(null);
  let { addGlobalListener: u, removeGlobalListener: c } = A(),
    { pressProps: d } = gt({
      isDisabled: t,
      onPressStart(e) {
        if (
          ("mouse" === e.pointerType || "touch" === e.pointerType) &&
          (n && n({ ...e, type: "longpressstart" }),
          (s.current = setTimeout(() => {
            e.target.dispatchEvent(
              new PointerEvent("pointercancel", { bubbles: !0 })
            ),
              i && i({ ...e, type: "longpress" }),
              (s.current = null);
          }, l)),
          "touch" === e.pointerType)
        ) {
          let t = (e) => {
            e.preventDefault();
          };
          u(e.target, "contextmenu", t, { once: !0 }),
            u(
              window,
              "pointerup",
              () => {
                setTimeout(() => {
                  c(e.target, "contextmenu", t);
                }, 30);
              },
              { once: !0 }
            );
        }
      },
      onPressEnd(e) {
        s.current && clearTimeout(s.current),
          !r ||
            ("mouse" !== e.pointerType && "touch" !== e.pointerType) ||
            r({ ...e, type: "longpressend" });
      },
    });
  return { longPressProps: x(d, q(i && !t ? a : null)) };
}
function an(e) {
  if ("virtual" === $t()) {
    let t = document.activeElement;
    O(() => {
      document.activeElement === t && document.contains(e) && I(e);
    });
  } else I(e);
}
function sn(e, t) {
  return (
    "#comment" !== e.nodeName &&
    (function (e) {
      if (!(e instanceof HTMLElement || e instanceof SVGElement)) return !1;
      let { display: t, visibility: n } = e.style,
        r = "none" !== t && "hidden" !== n && "collapse" !== n;
      if (r) {
        const { getComputedStyle: t } = e.ownerDocument.defaultView;
        let { display: n, visibility: i } = t(e);
        r = "none" !== n && "hidden" !== i && "collapse" !== i;
      }
      return r;
    })(e) &&
    (function (e, t) {
      return (
        !e.hasAttribute("hidden") &&
        ("DETAILS" !== e.nodeName ||
          !t ||
          "SUMMARY" === t.nodeName ||
          e.hasAttribute("open"))
      );
    })(e, t) &&
    (!e.parentElement || sn(e.parentElement, e))
  );
}
const un = t(o).createContext(null);
let cn = null;
function dn(e) {
  let { children: n, contain: r, restoreFocus: i, autoFocus: l } = e,
    a = (0, o.useRef)(),
    s = (0, o.useRef)(),
    u = (0, o.useRef)([]),
    c = (0, o.useContext)(un);
  var d;
  let p =
      null !== (d = null == c ? void 0 : c.scopeRef) && void 0 !== d ? d : null,
    f = (0, o.useMemo)(
      () => (cn && Tn.getTreeNode(cn) && !wn(cn, p) ? cn : p),
      [p]
    );
  y(() => {
    let e = a.current.nextSibling,
      t = [];
    for (; e && e !== s.current; ) t.push(e), (e = e.nextSibling);
    u.current = t;
  }, [n, f]),
    Tn.getTreeNode(f) && !Tn.getTreeNode(u) && Tn.addTreeNode(u, f),
    (Tn.getTreeNode(u).contain = r),
    (function (e, t, n) {
      y(() => {
        if (t || n) return;
        let r = e.current,
          i = (t) => {
            let n = t.target;
            vn(n, e.current) ? (cn = e) : yn(n) || (cn = null);
          };
        return (
          document.addEventListener("focusin", i, !1),
          r.forEach((e) => e.addEventListener("focusin", i, !1)),
          () => {
            document.removeEventListener("focusin", i, !1),
              r.forEach((e) => e.removeEventListener("focusin", i, !1));
          }
        );
      }, [e, t, n]);
    })(u, i, r),
    (function (e, t) {
      let n = (0, o.useRef)(),
        r = (0, o.useRef)(null);
      y(() => {
        let i = e.current;
        if (!t)
          return void (
            r.current && (cancelAnimationFrame(r.current), (r.current = null))
          );
        let l = (t) => {
            if ("Tab" !== t.key || t.altKey || t.ctrlKey || t.metaKey || !gn(e))
              return;
            let n = document.activeElement,
              r = e.current;
            if (!vn(n, r)) return;
            let i = Sn(hn(r), { tabbable: !0 }, r);
            i.currentNode = n;
            let l = t.shiftKey ? i.previousNode() : i.nextNode();
            l ||
              ((i.currentNode = t.shiftKey
                ? r[r.length - 1].nextElementSibling
                : r[0].previousElementSibling),
              (l = t.shiftKey ? i.previousNode() : i.nextNode())),
              t.preventDefault(),
              l && En(l, !0);
          },
          o = (t) => {
            (cn && !wn(cn, e)) || !vn(t.target, e.current)
              ? gn(e) && !bn(t.target, e)
                ? n.current
                  ? n.current.focus()
                  : cn && kn(cn.current)
                : gn(e) && (n.current = t.target)
              : ((cn = e), (n.current = t.target));
          },
          a = (t) => {
            r.current = requestAnimationFrame(() => {
              gn(e) &&
                !bn(document.activeElement, e) &&
                ((cn = e),
                document.body.contains(t.target)
                  ? ((n.current = t.target), n.current.focus())
                  : cn && kn(cn.current));
            });
          };
        return (
          document.addEventListener("keydown", l, !1),
          document.addEventListener("focusin", o, !1),
          i.forEach((e) => e.addEventListener("focusin", o, !1)),
          i.forEach((e) => e.addEventListener("focusout", a, !1)),
          () => {
            document.removeEventListener("keydown", l, !1),
              document.removeEventListener("focusin", o, !1),
              i.forEach((e) => e.removeEventListener("focusin", o, !1)),
              i.forEach((e) => e.removeEventListener("focusout", a, !1));
          }
        );
      }, [e, t]),
        (0, o.useEffect)(
          () => () => {
            r.current && cancelAnimationFrame(r.current);
          },
          [r]
        );
    })(u, r),
    (function (e, t, n) {
      const r = (0, o.useRef)(
        "undefined" != typeof document ? document.activeElement : null
      );
      y(() => {
        let r = e.current;
        if (!t || n) return;
        let i = () => {
          (cn && !wn(cn, e)) || (cn = e);
        };
        return (
          document.addEventListener("focusin", i, !1),
          r.forEach((e) => e.addEventListener("focusin", i, !1)),
          () => {
            document.removeEventListener("focusin", i, !1),
              r.forEach((e) => e.removeEventListener("focusin", i, !1));
          }
        );
      }, [e, n]),
        y(() => {
          if (!t) return;
          Tn.getTreeNode(e).nodeToRestore = r.current;
          let i = (t) => {
            if ("Tab" !== t.key || t.altKey || t.ctrlKey || t.metaKey) return;
            let n = document.activeElement;
            if (!vn(n, e.current)) return;
            let r = Tn.getTreeNode(e).nodeToRestore,
              i = Sn(document.body, { tabbable: !0 });
            i.currentNode = n;
            let l = t.shiftKey ? i.previousNode() : i.nextNode();
            if (
              ((document.body.contains(r) && r !== document.body) ||
                ((r = null), (Tn.getTreeNode(e).nodeToRestore = null)),
              (!l || !vn(l, e.current)) && r)
            ) {
              i.currentNode = r;
              do {
                l = t.shiftKey ? i.previousNode() : i.nextNode();
              } while (vn(l, e.current));
              t.preventDefault(),
                t.stopPropagation(),
                l ? En(l, !0) : yn(r) ? En(r, !0) : n.blur();
            }
          };
          return (
            n || document.addEventListener("keydown", i, !0),
            () => {
              n || document.removeEventListener("keydown", i, !0);
              let r = Tn.getTreeNode(e).nodeToRestore;
              if (
                t &&
                r &&
                (vn(document.activeElement, e.current) ||
                  (document.activeElement === document.body &&
                    (function (e) {
                      let t = Tn.getTreeNode(cn);
                      for (; t && t.scopeRef !== e; ) {
                        if (t.nodeToRestore) return !1;
                        t = t.parent;
                      }
                      return (null == t ? void 0 : t.scopeRef) === e;
                    })(e)))
              ) {
                let t = Tn.clone();
                requestAnimationFrame(() => {
                  if (document.activeElement === document.body) {
                    let n = t.getTreeNode(e);
                    for (; n; ) {
                      if (
                        n.nodeToRestore &&
                        document.body.contains(n.nodeToRestore)
                      )
                        return void En(n.nodeToRestore);
                      n = n.parent;
                    }
                    for (n = t.getTreeNode(e); n; ) {
                      if (n.scopeRef && Tn.getTreeNode(n.scopeRef))
                        return void kn(n.scopeRef.current, !0);
                      n = n.parent;
                    }
                  }
                });
              }
            }
          );
        }, [e, t, n]);
    })(u, i, r),
    (function (e, n) {
      const r = t(o).useRef(n);
      (0, o.useEffect)(() => {
        r.current &&
          ((cn = e), vn(document.activeElement, cn.current) || kn(e.current)),
          (r.current = !1);
      }, [e]);
    })(u, l),
    y(() => {
      if (u)
        return () => {
          let e = Tn.getTreeNode(u).parent.scopeRef;
          (u !== cn && !wn(u, cn)) || (e && !Tn.getTreeNode(e)) || (cn = e),
            Tn.removeTreeNode(u);
        };
    }, [u, f]);
  let m = (function (e) {
    return {
      focusNext(t = {}) {
        let n = e.current,
          { from: r, tabbable: i, wrap: l, accept: o } = t,
          a = r || document.activeElement,
          s = n[0].previousElementSibling,
          u = Sn(hn(n), { tabbable: i, accept: o }, n);
        u.currentNode = vn(a, n) ? a : s;
        let c = u.nextNode();
        return (
          !c && l && ((u.currentNode = s), (c = u.nextNode())),
          c && En(c, !0),
          c
        );
      },
      focusPrevious(t = {}) {
        let n = e.current,
          { from: r, tabbable: i, wrap: l, accept: o } = t,
          a = r || document.activeElement,
          s = n[n.length - 1].nextElementSibling,
          u = Sn(hn(n), { tabbable: i, accept: o }, n);
        u.currentNode = vn(a, n) ? a : s;
        let c = u.previousNode();
        return (
          !c && l && ((u.currentNode = s), (c = u.previousNode())),
          c && En(c, !0),
          c
        );
      },
      focusFirst(t = {}) {
        let n = e.current,
          { tabbable: r, accept: i } = t,
          l = Sn(hn(n), { tabbable: r, accept: i }, n);
        l.currentNode = n[0].previousElementSibling;
        let o = l.nextNode();
        return o && En(o, !0), o;
      },
      focusLast(t = {}) {
        let n = e.current,
          { tabbable: r, accept: i } = t,
          l = Sn(hn(n), { tabbable: r, accept: i }, n);
        l.currentNode = n[n.length - 1].nextElementSibling;
        let o = l.previousNode();
        return o && En(o, !0), o;
      },
    };
  })(u);
  return t(o).createElement(
    un.Provider,
    { value: { scopeRef: u, focusManager: m } },
    t(o).createElement("span", {
      "data-focus-scope-start": !0,
      hidden: !0,
      ref: a,
    }),
    n,
    t(o).createElement("span", {
      "data-focus-scope-end": !0,
      hidden: !0,
      ref: s,
    })
  );
}
const pn = [
    "input:not([disabled]):not([type=hidden])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "button:not([disabled])",
    "a[href]",
    "area[href]",
    "summary",
    "iframe",
    "object",
    "embed",
    "audio[controls]",
    "video[controls]",
    "[contenteditable]",
  ],
  fn = pn.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
pn.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const mn = pn.join(':not([hidden]):not([tabindex="-1"]),');
function hn(e) {
  return e[0].parentElement;
}
function gn(e) {
  let t = Tn.getTreeNode(cn);
  for (; t && t.scopeRef !== e; ) {
    if (t.contain) return !1;
    t = t.parent;
  }
  return !0;
}
function yn(e) {
  return bn(e);
}
function vn(e, t) {
  return t.some((t) => t.contains(e));
}
function bn(e, t = null) {
  for (let { scopeRef: n } of Tn.traverse(Tn.getTreeNode(t)))
    if (vn(e, n.current)) return !0;
  return !1;
}
function wn(e, t) {
  var n;
  let r = null === (n = Tn.getTreeNode(t)) || void 0 === n ? void 0 : n.parent;
  for (; r; ) {
    if (r.scopeRef === e) return !0;
    r = r.parent;
  }
  return !1;
}
function En(e, t = !1) {
  if (null == e || t) {
    if (null != e)
      try {
        e.focus();
      } catch (e) {}
  } else
    try {
      an(e);
    } catch (e) {}
}
function kn(e, t = !0) {
  let n = e[0].previousElementSibling,
    r = Sn(hn(e), { tabbable: t }, e);
  r.currentNode = n;
  let i = r.nextNode();
  t &&
    !i &&
    ((r = Sn(hn(e), { tabbable: !1 }, e)),
    (r.currentNode = n),
    (i = r.nextNode())),
    En(i);
}
function Sn(e, t, n) {
  let r = (null == t ? void 0 : t.tabbable) ? mn : fn,
    i = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode(e) {
        var i;
        return (
          null == t || null === (i = t.from) || void 0 === i
            ? void 0
            : i.contains(e)
        )
          ? NodeFilter.FILTER_REJECT
          : !e.matches(r) ||
            !sn(e) ||
            (n && !vn(e, n)) ||
            ((null == t ? void 0 : t.accept) && !t.accept(e))
          ? NodeFilter.FILTER_SKIP
          : NodeFilter.FILTER_ACCEPT;
      },
    });
  return (null == t ? void 0 : t.from) && (i.currentNode = t.from), i;
}
class xn {
  get size() {
    return this.fastMap.size;
  }
  getTreeNode(e) {
    return this.fastMap.get(e);
  }
  addTreeNode(e, t, n) {
    let r = this.fastMap.get(null != t ? t : null),
      i = new Pn({ scopeRef: e });
    r.addChild(i),
      (i.parent = r),
      this.fastMap.set(e, i),
      n && (i.nodeToRestore = n);
  }
  removeTreeNode(e) {
    if (null === e) return;
    let t = this.fastMap.get(e),
      n = t.parent;
    for (let e of this.traverse())
      e !== t &&
        t.nodeToRestore &&
        e.nodeToRestore &&
        t.scopeRef.current &&
        vn(e.nodeToRestore, t.scopeRef.current) &&
        (e.nodeToRestore = t.nodeToRestore);
    let r = t.children;
    n.removeChild(t),
      r.length > 0 && r.forEach((e) => n.addChild(e)),
      this.fastMap.delete(t.scopeRef);
  }
  *traverse(e = this.root) {
    if ((null != e.scopeRef && (yield e), e.children.length > 0))
      for (let t of e.children) yield* this.traverse(t);
  }
  clone() {
    let e = new xn();
    for (let t of this.traverse())
      e.addTreeNode(t.scopeRef, t.parent.scopeRef, t.nodeToRestore);
    return e;
  }
  constructor() {
    ae(this, "fastMap", new Map()),
      (this.root = new Pn({ scopeRef: null })),
      this.fastMap.set(null, this.root);
  }
}
class Pn {
  addChild(e) {
    this.children.push(e), (e.parent = this);
  }
  removeChild(e) {
    this.children.splice(this.children.indexOf(e), 1), (e.parent = void 0);
  }
  constructor(e) {
    ae(this, "children", []),
      ae(this, "contain", !1),
      (this.scopeRef = e.scopeRef);
  }
}
let Tn = new xn();
function _n(e = {}) {
  let { autoFocus: t = !1, isTextInput: n, within: r } = e,
    i = (0, o.useRef)({ isFocused: !1, isFocusVisible: t || jt() }),
    [l, a] = (0, o.useState)(!1),
    [s, u] = (0, o.useState)(
      () => i.current.isFocused && i.current.isFocusVisible
    ),
    c = (0, o.useCallback)(
      () => u(i.current.isFocused && i.current.isFocusVisible),
      []
    ),
    d = (0, o.useCallback)(
      (e) => {
        (i.current.isFocused = e), a(e), c();
      },
      [c]
    );
  Wt(
    (e) => {
      (i.current.isFocusVisible = e), c();
    },
    [],
    { isTextInput: n }
  );
  let { focusProps: p } = It({ isDisabled: r, onFocusChange: d }),
    { focusWithinProps: f } = qt({ isDisabled: !r, onFocusWithinChange: d });
  return {
    isFocused: l,
    isFocusVisible: i.current.isFocused && s,
    focusProps: r ? f : p,
  };
}
function Cn(e) {
  let { children: n, focusClass: r, focusRingClass: i } = e,
    { isFocused: l, isFocusVisible: a, focusProps: s } = _n(e),
    u = t(o).Children.only(n);
  return t(o).cloneElement(
    u,
    x(u.props, { ...s, className: g({ [r || ""]: l, [i || ""]: a }) })
  );
}
let In = t(o).createContext(null);
t(o).forwardRef(function (e, n) {
  let { children: r, ...i } = e,
    l = { ...i, ref: n };
  return t(o).createElement(In.Provider, { value: l }, r);
});
function Mn(e, t) {
  let { focusProps: n } = It(e),
    { keyboardProps: r } = rn(e),
    i = x(n, r),
    l = (function (e) {
      let t = (0, o.useContext)(In) || {};
      K(t, e);
      let { ref: n, ...r } = t;
      return r;
    })(t),
    a = e.isDisabled ? {} : l,
    s = (0, o.useRef)(e.autoFocus);
  return (
    (0, o.useEffect)(() => {
      s.current && t.current && an(t.current), (s.current = !1);
    }, [t]),
    {
      focusableProps: x(
        {
          ...i,
          tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0,
        },
        a
      ),
    }
  );
}
o = l("acw62");
const Ln = (0, (o = l("acw62")).forwardRef)(function (e, n) {
  e = lt(e, "text");
  let { children: r, ...i } = e,
    { styleProps: l } = tt(i),
    a = Oe(n);
  return t(o).createElement("span", { ...C(i), ...l, ref: a }, r);
});
(0, o.forwardRef)(function (e, n) {
  e = lt(e, "heading");
  let { children: r, level: i = 3, ...l } = e,
    { styleProps: a } = tt(l),
    s = Oe(n),
    u = `h${i}`;
  return t(o).createElement(u, { ...C(l), ...a, ref: s }, r);
});
(0, o.forwardRef)(function (e, n) {
  e = lt(e, "keyboard");
  let { children: r, ...i } = e,
    { styleProps: l } = tt(i),
    a = Oe(n);
  return t(o).createElement("kbd", { ...C(i), ...l, dir: "ltr", ref: a }, r);
});
function Nn(e, t) {
  let n,
    {
      elementType: r = "button",
      isDisabled: i,
      onPress: l,
      onPressStart: o,
      onPressEnd: a,
      onPressChange: s,
      preventFocusOnPress: u,
      allowFocusWhenDisabled: c,
      onClick: d,
      href: p,
      target: f,
      rel: m,
      type: h = "button",
    } = e;
  n =
    "button" === r
      ? { type: h, disabled: i }
      : {
          role: "button",
          tabIndex: i ? void 0 : 0,
          href: "a" === r && i ? void 0 : p,
          target: "a" === r ? f : void 0,
          type: "input" === r ? h : void 0,
          disabled: "input" === r ? i : void 0,
          "aria-disabled": i && "input" !== r ? i : void 0,
          rel: "a" === r ? m : void 0,
        };
  let { pressProps: g, isPressed: y } = gt({
      onPressStart: o,
      onPressEnd: a,
      onPressChange: s,
      onPress: l,
      isDisabled: i,
      preventFocusOnPress: u,
      ref: t,
    }),
    { focusableProps: v } = Mn(e, t);
  c && (v.tabIndex = i ? -1 : v.tabIndex);
  let b = x(v, g, C(e, { labelable: !0 }));
  return {
    isPressed: y,
    buttonProps: x(n, b, {
      "aria-haspopup": e["aria-haspopup"],
      "aria-expanded": e["aria-expanded"],
      "aria-controls": e["aria-controls"],
      "aria-pressed": e["aria-pressed"],
      onClick: (e) => {
        d && (d(e), console.warn("onClick is deprecated, please use onPress"));
      },
    }),
  };
}
function Rn(e, t, n) {
  const { isSelected: r } = t,
    { isPressed: i, buttonProps: l } = Nn(
      { ...e, onPress: S(t.toggle, e.onPress) },
      n
    );
  return { isPressed: i, buttonProps: x(l, { "aria-pressed": r }) };
}
(o = l("acw62")), (o = l("acw62"));
const On = {
  border: 0,
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  margin: "0 -1px -1px 0",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  width: 1,
  whiteSpace: "nowrap",
};
function An(e = {}) {
  let { style: t, isFocusable: n } = e,
    [r, i] = (0, o.useState)(!1),
    { focusWithinProps: l } = qt({
      isDisabled: !n,
      onFocusWithinChange: (e) => i(e),
    });
  return {
    visuallyHiddenProps: {
      ...l,
      style: (0, o.useMemo)(() => (r ? t : t ? { ...On, ...t } : On), [r]),
    },
  };
}
function Fn(e) {
  let {
      children: n,
      elementType: r = "div",
      isFocusable: i,
      style: l,
      ...a
    } = e,
    { visuallyHiddenProps: s } = An(e);
  return t(o).createElement(r, x(a, s), n);
}
function zn(e) {
  return e && e.__esModule ? e.default : e;
}
const Dn = { top: "top", bottom: "top", left: "left", right: "left" },
  Kn = { top: "bottom", bottom: "top", left: "right", right: "left" },
  Vn = { top: "left", left: "top" },
  Un = { top: "height", left: "width" },
  Bn = {};
let jn = "undefined" != typeof window && window.visualViewport;
function $n(e, t, n, r, i) {
  let l = r.scroll[e],
    o = r[Un[e]],
    a = t - i - l,
    s = t + i - l + n;
  return a < 0 ? -a : s > o ? Math.max(o - s, -a) : 0;
}
function Hn(e) {
  if (Bn[e]) return Bn[e];
  let [t, n] = e.split(" "),
    r = Dn[t] || "right",
    i = Vn[r];
  Dn[n] || (n = "center");
  let l = Un[r],
    o = Un[i];
  return (
    (Bn[e] = {
      placement: t,
      crossPlacement: n,
      axis: r,
      crossAxis: i,
      size: l,
      crossSize: o,
    }),
    Bn[e]
  );
}
function Wn(e, t, n, r, i, l, o, a) {
  let {
      placement: s,
      crossPlacement: u,
      axis: c,
      crossAxis: d,
      size: p,
      crossSize: f,
    } = r,
    m = {};
  (m[d] = e[d]),
    "center" === u
      ? (m[d] += (e[f] - n[f]) / 2)
      : u !== d && (m[d] += e[f] - n[f]),
    (m[d] += l);
  let h = e[d] + e[f] / 2 - n[f],
    g = e[d] + e[f] / 2;
  if (((m[d] = Math.min(Math.max(h, m[d]), g)), s === c)) {
    const n = a ? o[p] : t[p];
    m[Kn[c]] = Math.floor(n - e[c] + i);
  } else m[c] = Math.floor(e[c] + e[p] + i);
  return m;
}
function qn(e, t, n, r, i, l) {
  let { placement: o, axis: a, size: s } = l;
  return o === a
    ? Math.max(0, n[a] - e[a] - e.scroll[a] + t[a] - r[a] - r[Kn[a]] - i)
    : Math.max(
        0,
        e[s] + e[a] + e.scroll[a] - t[a] - n[a] - n[s] - r[a] - r[Kn[a]] - i
      );
}
function Gn(e, t, n, r, i, l, o, a, s, u, c, d, p) {
  let f = Hn(e),
    {
      size: m,
      crossAxis: h,
      crossSize: g,
      placement: y,
      crossPlacement: v,
    } = f,
    b = Wn(t, a, n, f, u, c, s, d),
    w = u,
    E = qn(a, s, t, i, l + u, f);
  if (o && r[m] > E) {
    let e = Hn(`${Kn[y]} ${v}`),
      r = Wn(t, a, n, e, u, c, s, d);
    qn(a, s, t, i, l + u, e) > E && ((f = e), (b = r), (w = u));
  }
  let k = $n(h, b[h], n[g], a, l);
  b[h] += k;
  let S = (function (e, t, n, r, i, l) {
    return null != e.top
      ? Math.max(
          0,
          t.height +
            t.top +
            t.scroll.top -
            (n.top + e.top) -
            (i.top + i.bottom + l)
        )
      : Math.max(
          0,
          r.top + n.top - (t.top + t.scroll.top) - (i.top + i.bottom + l)
        );
  })(b, a, s, t, i, l);
  p && p < S && (S = p),
    (n.height = Math.min(n.height, S)),
    (b = Wn(t, a, n, f, w, c, s, d)),
    (k = $n(h, b[h], n[g], a, l)),
    (b[h] += k);
  let x = {};
  return (
    (x[h] = t[h] - b[h] + t[g] / 2),
    {
      position: b,
      maxHeight: S,
      arrowOffsetLeft: x.left,
      arrowOffsetTop: x.top,
      placement: f.placement,
    }
  );
}
function Qn(e) {
  let {
      placement: t,
      targetNode: n,
      overlayNode: r,
      scrollNode: i,
      padding: l,
      shouldFlip: o,
      boundaryElement: a,
      offset: s,
      crossOffset: u,
      maxHeight: c,
    } = e,
    d = (r instanceof HTMLElement && r.offsetParent) || document.body,
    p = "BODY" === d.tagName;
  const f = window.getComputedStyle(d).position;
  let m = !!f && "static" !== f,
    h = p ? Yn(n) : Xn(n, d);
  if (!p) {
    let { marginTop: e, marginLeft: t } = window.getComputedStyle(n);
    (h.top += parseInt(e, 10) || 0), (h.left += parseInt(t, 10) || 0);
  }
  let g = Yn(r),
    y = (function (e) {
      let t = window.getComputedStyle(e);
      return {
        top: parseInt(t.marginTop, 10) || 0,
        bottom: parseInt(t.marginBottom, 10) || 0,
        left: parseInt(t.marginLeft, 10) || 0,
        right: parseInt(t.marginRight, 10) || 0,
      };
    })(r);
  var v;
  return (
    (g.width += y.left + y.right),
    (g.height += y.top + y.bottom),
    Gn(
      t,
      h,
      g,
      {
        top: (v = i).scrollTop,
        left: v.scrollLeft,
        width: v.scrollWidth,
        height: v.scrollHeight,
      },
      y,
      l,
      o,
      (function (e) {
        let t = 0,
          n = 0,
          r = 0,
          i = 0,
          l = {};
        if ("BODY" === e.tagName) {
          let r = document.documentElement;
          var o, a;
          (t =
            null !== (o = null == jn ? void 0 : jn.width) && void 0 !== o
              ? o
              : r.clientWidth),
            (n =
              null !== (a = null == jn ? void 0 : jn.height) && void 0 !== a
                ? a
                : r.clientHeight),
            (l.top = r.scrollTop || e.scrollTop),
            (l.left = r.scrollLeft || e.scrollLeft);
        } else
          ({ width: t, height: n, top: r, left: i } = Yn(e)),
            (l.top = e.scrollTop),
            (l.left = e.scrollLeft);
        return { width: t, height: n, scroll: l, top: r, left: i };
      })(a),
      "BODY" === a.tagName ? Yn(d) : Xn(d, a),
      s,
      u,
      m,
      c
    )
  );
}
function Yn(e) {
  let { top: t, left: n, width: r, height: i } = e.getBoundingClientRect(),
    {
      scrollTop: l,
      scrollLeft: o,
      clientTop: a,
      clientLeft: s,
    } = document.documentElement;
  return { top: t + l - a, left: n + o - s, width: r, height: i };
}
function Xn(e, t) {
  let n,
    r = window.getComputedStyle(e);
  if ("fixed" === r.position) {
    let { top: t, left: r, width: i, height: l } = e.getBoundingClientRect();
    n = { top: t, left: r, width: i, height: l };
  } else {
    n = Yn(e);
    let r = Yn(t),
      i = window.getComputedStyle(t);
    (r.top += (parseInt(i.borderTopWidth, 10) || 0) - t.scrollTop),
      (r.left += (parseInt(i.borderLeftWidth, 10) || 0) - t.scrollLeft),
      (n.top -= r.top),
      (n.left -= r.left);
  }
  return (
    (n.top -= parseInt(r.marginTop, 10) || 0),
    (n.left -= parseInt(r.marginLeft, 10) || 0),
    n
  );
}
const Zn = new WeakMap();
let Jn = "undefined" != typeof window && window.visualViewport;
function er(e) {
  let { direction: t } = Se(),
    {
      targetRef: n,
      overlayRef: r,
      scrollRef: i = r,
      placement: l = "bottom",
      containerPadding: a = 12,
      shouldFlip: s = !0,
      boundaryElement: u = "undefined" != typeof document
        ? document.body
        : null,
      offset: c = 0,
      crossOffset: d = 0,
      shouldUpdatePosition: p = !0,
      isOpen: f = !0,
      onClose: m,
      maxHeight: h,
    } = e,
    [g, v] = (0, o.useState)({
      position: {},
      arrowOffsetLeft: void 0,
      arrowOffsetTop: void 0,
      maxHeight: void 0,
      placement: void 0,
    }),
    b = [p, l, r.current, n.current, i.current, a, s, u, c, d, f, t, h],
    w = (0, o.useCallback)(() => {
      !1 !== p &&
        f &&
        r.current &&
        n.current &&
        i.current &&
        u &&
        v(
          Qn({
            placement: tr(l, t),
            overlayNode: r.current,
            targetNode: n.current,
            scrollNode: i.current,
            padding: a,
            shouldFlip: s,
            boundaryElement: u,
            offset: c,
            crossOffset: d,
            maxHeight: h,
          })
        );
    }, b);
  var E;
  y(w, b),
    y(
      () => (
        window.addEventListener("resize", E, !1),
        () => {
          window.removeEventListener("resize", E, !1);
        }
      ),
      [(E = w)]
    ),
    D({ ref: r, onResize: w });
  let k = (0, o.useRef)(!1);
  y(() => {
    let e,
      t = () => {
        (k.current = !0),
          clearTimeout(e),
          (e = setTimeout(() => {
            k.current = !1;
          }, 500)),
          w();
      };
    return (
      null == Jn || Jn.addEventListener("resize", t),
      () => {
        null == Jn || Jn.removeEventListener("resize", t);
      }
    );
  }, [w]);
  let S = (0, o.useCallback)(() => {
    k.current || m();
  }, [m, k]);
  return (
    (function (e) {
      let { triggerRef: t, isOpen: n, onClose: r } = e;
      (0, o.useEffect)(() => {
        if (!n || null === r) return;
        let e = (e) => {
          let n = e.target;
          if (!t.current || (n instanceof Node && !n.contains(t.current)))
            return;
          let i = r || Zn.get(t.current);
          i && i();
        };
        return (
          window.addEventListener("scroll", e, !0),
          () => {
            window.removeEventListener("scroll", e, !0);
          }
        );
      }, [n, r, t]);
    })({ triggerRef: n, isOpen: f, onClose: m && S }),
    {
      overlayProps: {
        style: {
          position: "absolute",
          zIndex: 1e5,
          ...g.position,
          maxHeight: g.maxHeight,
        },
      },
      placement: g.placement,
      arrowProps: { style: { left: g.arrowOffsetLeft, top: g.arrowOffsetTop } },
      updatePosition: w,
    }
  );
}
function tr(e, t) {
  return "rtl" === t
    ? e.replace("start", "right").replace("end", "left")
    : e.replace("start", "left").replace("end", "right");
}
const nr = [];
function rr(e, t) {
  let {
    onClose: n,
    shouldCloseOnBlur: r,
    isOpen: i,
    isDismissable: l = !1,
    isKeyboardDismissDisabled: a = !1,
    shouldCloseOnInteractOutside: s,
  } = e;
  (0, o.useEffect)(
    () => (
      i && nr.push(t),
      () => {
        let e = nr.indexOf(t);
        e >= 0 && nr.splice(e, 1);
      }
    ),
    [i, t]
  );
  let u = () => {
    nr[nr.length - 1] === t && n && n();
  };
  en({
    ref: t,
    onInteractOutside: l
      ? (e) => {
          (s && !s(e.target)) ||
            (nr[nr.length - 1] === t &&
              (e.stopPropagation(), e.preventDefault()),
            u());
        }
      : null,
    onInteractOutsideStart: (e) => {
      (s && !s(e.target)) ||
        (nr[nr.length - 1] === t && (e.stopPropagation(), e.preventDefault()));
    },
  });
  let { focusWithinProps: c } = qt({
    isDisabled: !r,
    onBlurWithin: (e) => {
      (e.relatedTarget && bn(e.relatedTarget, cn)) ||
        (s && !s(e.relatedTarget)) ||
        n();
    },
  });
  return {
    overlayProps: {
      onKeyDown: (e) => {
        "Escape" !== e.key ||
          a ||
          (e.stopPropagation(), e.preventDefault(), u());
      },
      ...c,
    },
    underlayProps: {
      onPointerDown: (e) => {
        e.target === e.currentTarget && e.preventDefault();
      },
    },
  };
}
function ir(e, t, n) {
  let r,
    { type: i } = e,
    { isOpen: l } = t;
  (0, o.useEffect)(() => {
    n && n.current && Zn.set(n.current, t.close);
  }),
    "menu" === i ? (r = !0) : "listbox" === i && (r = "listbox");
  let a = w();
  return {
    triggerProps: {
      "aria-haspopup": r,
      "aria-expanded": l,
      "aria-controls": l ? a : null,
      onPress: t.toggle,
    },
    overlayProps: { id: a },
  };
}
const lr = "undefined" != typeof window && window.visualViewport,
  or = new Set([
    "checkbox",
    "radio",
    "range",
    "color",
    "file",
    "image",
    "button",
    "submit",
    "reset",
  ]);
let ar,
  sr = 0;
function ur(e = {}) {
  let { isDisabled: t } = e;
  y(() => {
    if (!t)
      return (
        sr++,
        1 === sr &&
          (ar = X()
            ? (function () {
                let e,
                  t = 0,
                  n = (n) => {
                    (e = V(n.target)),
                      (e === document.documentElement && e === document.body) ||
                        (t = n.changedTouches[0].pageY);
                  },
                  r = (n) => {
                    if (e === document.documentElement || e === document.body)
                      return void n.preventDefault();
                    let r = n.changedTouches[0].pageY,
                      i = e.scrollTop,
                      l = e.scrollHeight - e.clientHeight;
                    ((i <= 0 && r > t) || (i >= l && r < t)) &&
                      n.preventDefault(),
                      (t = r);
                  },
                  i = (e) => {
                    let t = e.target;
                    fr(t) &&
                      t !== document.activeElement &&
                      (e.preventDefault(),
                      (t.style.transform = "translateY(-2000px)"),
                      t.focus(),
                      requestAnimationFrame(() => {
                        t.style.transform = "";
                      }));
                  },
                  l = (e) => {
                    let t = e.target;
                    fr(t) &&
                      ((t.style.transform = "translateY(-2000px)"),
                      requestAnimationFrame(() => {
                        (t.style.transform = ""),
                          lr &&
                            (lr.height < window.innerHeight
                              ? requestAnimationFrame(() => {
                                  pr(t);
                                })
                              : lr.addEventListener("resize", () => pr(t), {
                                  once: !0,
                                }));
                      }));
                  },
                  o = () => {
                    window.scrollTo(0, 0);
                  },
                  a = window.pageXOffset,
                  s = window.pageYOffset,
                  u = S(
                    cr(
                      document.documentElement,
                      "paddingRight",
                      window.innerWidth -
                        document.documentElement.clientWidth +
                        "px"
                    ),
                    cr(document.documentElement, "overflow", "hidden"),
                    cr(document.body, "marginTop", `-${s}px`)
                  );
                window.scrollTo(0, 0);
                let c = S(
                  dr(document, "touchstart", n, { passive: !1, capture: !0 }),
                  dr(document, "touchmove", r, { passive: !1, capture: !0 }),
                  dr(document, "touchend", i, { passive: !1, capture: !0 }),
                  dr(document, "focus", l, !0),
                  dr(window, "scroll", o)
                );
                return () => {
                  u(), c(), window.scrollTo(a, s);
                };
              })()
            : S(
                cr(
                  document.documentElement,
                  "paddingRight",
                  window.innerWidth -
                    document.documentElement.clientWidth +
                    "px"
                ),
                cr(document.documentElement, "overflow", "hidden")
              )),
        () => {
          sr--, 0 === sr && ar();
        }
      );
  }, [t]);
}
function cr(e, t, n) {
  let r = e.style[t];
  return (
    (e.style[t] = n),
    () => {
      e.style[t] = r;
    }
  );
}
function dr(e, t, n, r) {
  return (
    e.addEventListener(t, n, r),
    () => {
      e.removeEventListener(t, n, r);
    }
  );
}
function pr(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    let t = V(e);
    if (t !== document.documentElement && t !== document.body && t !== e) {
      let n = t.getBoundingClientRect().top,
        r = e.getBoundingClientRect().top;
      r > n + e.clientHeight && (t.scrollTop += r - n);
    }
    e = t.parentElement;
  }
}
function fr(e) {
  return (
    (e instanceof HTMLInputElement && !or.has(e.type)) ||
    e instanceof HTMLTextAreaElement ||
    (e instanceof HTMLElement && e.isContentEditable)
  );
}
const mr = t(o).createContext(null);
function hr(e) {
  let { children: n } = e,
    r = (0, o.useContext)(mr),
    [i, l] = (0, o.useState)(0),
    a = (0, o.useMemo)(
      () => ({
        parent: r,
        modalCount: i,
        addModal() {
          l((e) => e + 1), r && r.addModal();
        },
        removeModal() {
          l((e) => e - 1), r && r.removeModal();
        },
      }),
      [r, i]
    );
  return t(o).createElement(mr.Provider, { value: a }, n);
}
function gr() {
  let e = (0, o.useContext)(mr);
  return {
    modalProviderProps: { "aria-hidden": !!(e && e.modalCount > 0) || null },
  };
}
var yr;
function vr(e) {
  let { onDismiss: n, ...r } = e,
    i = F(r, Pe(zn(yr)).format("dismiss"));
  return t(o).createElement(
    Fn,
    null,
    t(o).createElement("button", {
      ...i,
      tabIndex: -1,
      onClick: () => {
        n && n();
      },
    })
  );
}
yr = {
  "ar-AE": { dismiss: "تجاهل" },
  "bg-BG": { dismiss: "Отхвърляне" },
  "cs-CZ": { dismiss: "Odstranit" },
  "da-DK": { dismiss: "Luk" },
  "de-DE": { dismiss: "Schließen" },
  "el-GR": { dismiss: "Απόρριψη" },
  "en-US": { dismiss: "Dismiss" },
  "es-ES": { dismiss: "Descartar" },
  "et-EE": { dismiss: "Lõpeta" },
  "fi-FI": { dismiss: "Hylkää" },
  "fr-FR": { dismiss: "Rejeter" },
  "he-IL": { dismiss: "התעלם" },
  "hr-HR": { dismiss: "Odbaci" },
  "hu-HU": { dismiss: "Elutasítás" },
  "it-IT": { dismiss: "Ignora" },
  "ja-JP": { dismiss: "閉じる" },
  "ko-KR": { dismiss: "무시" },
  "lt-LT": { dismiss: "Atmesti" },
  "lv-LV": { dismiss: "Nerādīt" },
  "nb-NO": { dismiss: "Lukk" },
  "nl-NL": { dismiss: "Negeren" },
  "pl-PL": { dismiss: "Zignoruj" },
  "pt-BR": { dismiss: "Descartar" },
  "pt-PT": { dismiss: "Dispensar" },
  "ro-RO": { dismiss: "Revocare" },
  "ru-RU": { dismiss: "Пропустить" },
  "sk-SK": { dismiss: "Zrušiť" },
  "sl-SI": { dismiss: "Opusti" },
  "sr-SP": { dismiss: "Odbaci" },
  "sv-SE": { dismiss: "Avvisa" },
  "tr-TR": { dismiss: "Kapat" },
  "uk-UA": { dismiss: "Скасувати" },
  "zh-CN": { dismiss: "取消" },
  "zh-TW": { dismiss: "關閉" },
};
let br = new WeakMap(),
  wr = [];
function Er(e, t = document.body) {
  let n = new Set(e),
    r = new Set(),
    i = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (t) => (
        (t instanceof HTMLElement || t instanceof SVGElement) &&
          "true" === t.dataset.liveAnnouncer &&
          n.add(t),
        n.has(t) ||
        (r.has(t.parentElement) &&
          "row" !== t.parentElement.getAttribute("role"))
          ? NodeFilter.FILTER_REJECT
          : e.some((e) => t.contains(e))
          ? NodeFilter.FILTER_SKIP
          : NodeFilter.FILTER_ACCEPT
      ),
    }),
    l = (e) => {
      var t;
      let n = null !== (t = br.get(e)) && void 0 !== t ? t : 0;
      ("true" === e.getAttribute("aria-hidden") && 0 === n) ||
        (0 === n && e.setAttribute("aria-hidden", "true"),
        r.add(e),
        br.set(e, n + 1));
    };
  wr.length && wr[wr.length - 1].disconnect();
  let o = i.nextNode();
  for (; null != o; ) l(o), (o = i.nextNode());
  let a = new MutationObserver((e) => {
    for (let t of e)
      if (
        "childList" === t.type &&
        0 !== t.addedNodes.length &&
        ![...n, ...r].some((e) => e.contains(t.target))
      )
        for (let e of t.addedNodes)
          (e instanceof HTMLElement || e instanceof SVGElement) &&
          "true" === e.dataset.liveAnnouncer
            ? n.add(e)
            : e instanceof Element && l(e);
  });
  a.observe(t, { childList: !0, subtree: !0 });
  let s = {
    observe() {
      a.observe(t, { childList: !0, subtree: !0 });
    },
    disconnect() {
      a.disconnect();
    },
  };
  return (
    wr.push(s),
    () => {
      a.disconnect();
      for (let e of r) {
        let t = br.get(e);
        1 === t
          ? (e.removeAttribute("aria-hidden"), br.delete(e))
          : br.set(e, t - 1);
      }
      s === wr[wr.length - 1]
        ? (wr.pop(), wr.length && wr[wr.length - 1].observe())
        : wr.splice(wr.indexOf(s), 1);
    }
  );
}
function kr(e, t) {
  let {
      triggerRef: n,
      popoverRef: r,
      isNonModal: i,
      isKeyboardDismissDisabled: l,
      ...a
    } = e,
    { overlayProps: s, underlayProps: u } = rr(
      {
        isOpen: t.isOpen,
        onClose: t.close,
        shouldCloseOnBlur: !0,
        isDismissable: !i,
        isKeyboardDismissDisabled: l,
      },
      r
    ),
    {
      overlayProps: c,
      arrowProps: d,
      placement: p,
    } = er({
      ...a,
      targetRef: n,
      overlayRef: r,
      isOpen: t.isOpen,
      onClose: null,
    }),
    [f, m] = (0, o.useState)(!1);
  return (
    y(() => {
      !i && p && m(!0);
    }, [i, p]),
    ur({ isDisabled: i || !f }),
    y(() => {
      if (t.isOpen && !i && r.current) return Er([r.current]);
    }, [i, t.isOpen, r]),
    { popoverProps: x(s, c), arrowProps: d, underlayProps: u, placement: p }
  );
}
const Sr = t(o).createContext(null);
function xr(e) {
  let n = m(),
    { portalContainer: r = n ? null : document.body } = e,
    [i, l] = (0, o.useState)(!1),
    s = (0, o.useMemo)(() => ({ contain: i, setContain: l }), [i, l]);
  if (!r) return null;
  let u = t(o).createElement(
    Sr.Provider,
    { value: s },
    t(o).createElement(dn, { restoreFocus: !0, contain: i }, e.children)
  );
  return t(a).createPortal(u, r);
}
function Pr(e, t, n) {
  let { overlayProps: r, underlayProps: i } = rr(
    { ...e, isOpen: t.isOpen, onClose: t.close },
    n
  );
  return (
    ur({ isDisabled: !t.isOpen }),
    (function () {
      let e = (0, o.useContext)(Sr),
        t = null == e ? void 0 : e.setContain;
      y(() => {
        null == t || t(!0);
      }, [t]);
    })(),
    (0, o.useEffect)(() => {
      if (t.isOpen) return Er([n.current]);
    }, [t.isOpen, n]),
    { modalProps: x(r), underlayProps: i }
  );
}
o = l("acw62");
function Tr(e) {
  return e && e.__esModule ? e.default : e;
}
function _r(e, t, n, r) {
  Object.defineProperty(e, t, {
    get: n,
    set: r,
    enumerable: !0,
    configurable: !0,
  });
}
var Cr,
  Ir = {};
_r(
  Ir,
  "spectrum",
  () => Cr,
  (e) => (Cr = e)
),
  (Cr = "spectrum_b37d53");
var Mr,
  Lr,
  Nr,
  Rr = {};
_r(
  Rr,
  "spectrum",
  () => Mr,
  (e) => (Mr = e)
),
  _r(
    Rr,
    "spectrum-Body",
    () => Lr,
    (e) => (Lr = e)
  ),
  _r(
    Rr,
    "spectrum-Body--italic",
    () => Nr,
    (e) => (Nr = e)
  ),
  (Mr = "spectrum_2a241c"),
  (Lr = "spectrum-Body_2a241c"),
  (Nr = "spectrum-Body--italic_2a241c");
var Or;
Or = JSON.parse(
  '{"name":"@react-spectrum/provider","version":"3.6.1","description":"Spectrum UI components in React","license":"Apache-2.0","main":"dist/main.js","module":"dist/module.js","types":"dist/types.d.ts","source":"src/index.ts","files":["dist","src"],"sideEffects":["*.css"],"targets":{"main":{"includeNodeModules":["@adobe/spectrum-css-temp"]},"module":{"includeNodeModules":["@adobe/spectrum-css-temp"]}},"repository":{"type":"git","url":"https://github.com/adobe/react-spectrum"},"dependencies":{"@react-aria/i18n":"^3.6.3","@react-aria/overlays":"^3.12.1","@react-aria/utils":"^3.14.2","@react-spectrum/utils":"^3.8.1","@react-types/provider":"^3.5.5","@react-types/shared":"^3.16.0","@swc/helpers":"^0.4.14","clsx":"^1.1.1"},"devDependencies":{"@adobe/spectrum-css-temp":"3.0.0-alpha.1"},"peerDependencies":{"react":"^16.8.0 || ^17.0.0-rc.1 || ^18.0.0","react-dom":"^16.8.0 || ^17.0.0-rc.1 || ^18.0.0"},"publishConfig":{"access":"public"}}'
);
const Ar = t(o).createContext(null);
Ar.displayName = "ProviderContext";
const Fr = { S: 640, M: 768, L: 1024, XL: 1280, XXL: 1536 };
let zr = t(o).forwardRef(function (e, n) {
  let r = Kr(),
    i = r && r.colorScheme,
    l = r && r.breakpoints,
    { theme: a = r && r.theme, defaultColorScheme: s } = e;
  if (!a)
    throw new Error(
      "theme not found, the parent provider must have a theme provided"
    );
  let u = (function (e, t) {
      let n = Ne("(prefers-color-scheme: dark)"),
        r = Ne("(prefers-color-scheme: light)");
      return e.dark && n
        ? "dark"
        : e.light && r
        ? "light"
        : e.dark && "dark" === t
        ? "dark"
        : e.light && "light" === t
        ? "light"
        : e.dark
        ? e.light
          ? "light"
          : "dark"
        : "light";
    })(a, s),
    c = (function (e) {
      return Ne("(any-pointer: fine)") && e.medium
        ? "medium"
        : e.large
        ? "large"
        : "medium";
    })(a),
    { locale: d } = Se(),
    p = !!a[i],
    {
      colorScheme: f = p ? i : u,
      scale: m = r ? r.scale : c,
      locale: h = r ? d : null,
      breakpoints: g = r ? l : Fr,
      children: y,
      isQuiet: v,
      isEmphasized: b,
      isDisabled: w,
      isRequired: E,
      isReadOnly: k,
      validationState: S,
      ...x
    } = e,
    P = {
      version: Or.version,
      theme: a,
      breakpoints: g,
      colorScheme: f,
      scale: m,
      isQuiet: v,
      isEmphasized: b,
      isDisabled: w,
      isRequired: E,
      isReadOnly: k,
      validationState: S,
    },
    T = Ke(g),
    _ = {};
  Object.entries(P).forEach(([e, t]) => void 0 !== t && (_[e] = t));
  let I = Object.assign({}, r, _),
    M = y,
    L = C(x),
    { styleProps: N } = tt(x, void 0, { matchedBreakpoints: T });
  return (
    (!r ||
      e.locale ||
      a !== r.theme ||
      f !== r.colorScheme ||
      m !== r.scale ||
      Object.keys(L).length > 0 ||
      x.UNSAFE_className ||
      Object.keys(N.style).length > 0) &&
      (M = t(o).createElement(
        Dr,
        {
          ...e,
          UNSAFE_style: { isolation: r ? void 0 : "isolate", ...N.style },
          ref: n,
        },
        M
      )),
    t(o).createElement(
      Ar.Provider,
      { value: I },
      t(o).createElement(
        ke,
        { locale: h },
        t(o).createElement(
          De,
          { matchedBreakpoints: T },
          t(o).createElement(hr, null, M)
        )
      )
    )
  );
});
const Dr = t(o).forwardRef(function (e, n) {
  let { children: r, ...i } = e,
    { locale: l, direction: a } = Se(),
    { theme: s, colorScheme: u, scale: c } = Kr(),
    { modalProviderProps: d } = gr(),
    { styleProps: p } = tt(i),
    f = Oe(n),
    m = Object.keys(s[u])[0],
    h = Object.keys(s[c])[0],
    y = g(
      p.className,
      Tr(Ir).spectrum,
      Tr(Rr).spectrum,
      Object.values(s[u]),
      Object.values(s[c]),
      s.global ? Object.values(s.global) : null,
      { "react-spectrum-provider": Ie, spectrum: Ie, [m]: Ie, [h]: Ie }
    );
  var v, b;
  let w = {
      ...p.style,
      colorScheme:
        null !== (b = null !== (v = e.colorScheme) && void 0 !== v ? v : u) &&
        void 0 !== b
          ? b
          : Object.keys(s)
              .filter((e) => "light" === e || "dark" === e)
              .join(" "),
    },
    E = (0, o.useRef)(!1);
  return (
    (0, o.useEffect)(() => {
      if (a && f.current) {
        let e = f.current.parentElement.closest("[dir]"),
          t = e && e.getAttribute("dir");
        t &&
          t !== a &&
          !E.current &&
          (console.warn(
            `Language directions cannot be nested. ${a} inside ${t}.`
          ),
          (E.current = !0));
      }
    }, [a, f, E]),
    t(o).createElement(
      "div",
      { ...C(i), ...p, ...d, className: y, style: w, lang: l, dir: a, ref: f },
      r
    )
  );
});
function Kr() {
  return (0, o.useContext)(Ar);
}
function Vr(e) {
  let t = Kr();
  return t
    ? Object.assign(
        {},
        {
          isQuiet: t.isQuiet,
          isEmphasized: t.isEmphasized,
          isDisabled: t.isDisabled,
          isRequired: t.isRequired,
          isReadOnly: t.isReadOnly,
          validationState: t.validationState,
        },
        e
      )
    : e;
}
var Ur,
  Br = {};
(Br = function (e) {
  return e && e.__esModule ? e : { default: e };
}),
  (Br.__esModule = !0),
  (Br.default = Br),
  (Ur = function (e) {
    return Xi.default.createElement(
      Gi,
      e,
      Xi.default.createElement(jr.CornerTriangle, null)
    );
  });
var jr = {};
Object.defineProperty(jr, "__esModule", { value: !0 }),
  (jr.CornerTriangle = Gr);
var $r,
  Hr = ($r = l("acw62")) && $r.__esModule ? $r : { default: $r };
function Wr() {
  return (
    (Wr =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Wr.apply(this, arguments)
  );
}
function qr(e, t) {
  if (null == e) return {};
  var n,
    r,
    i = (function (e, t) {
      if (null == e) return {};
      var n,
        r,
        i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++)
        (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (r = 0; r < l.length; r++)
      (n = l[r]),
        t.indexOf(n) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
  }
  return i;
}
function Gr(e) {
  var t = e.scale,
    n = void 0 === t ? "M" : t,
    r = qr(e, ["scale"]);
  return Hr.default.createElement(
    "svg",
    Wr({}, r, r),
    "L" === n &&
      Hr.default.createElement("path", {
        d: "M5.74.01a.25.25 0 0 0-.177.073l-5.48 5.48a.25.25 0 0 0 .177.427h5.48a.25.25 0 0 0 .25-.25V.26a.25.25 0 0 0-.25-.25z",
      }),
    "M" === n &&
      Hr.default.createElement("path", {
        d: "M4.74.01a.25.25 0 0 0-.177.073l-4.48 4.48a.25.25 0 0 0 .177.427h4.48a.25.25 0 0 0 .25-.25V.26a.25.25 0 0 0-.25-.25z",
      })
  );
}
Gr.displayName = "CornerTriangle";
o = l("acw62");
function Qr(e) {
  return e && e.__esModule ? e.default : e;
}
function Yr(e, t, n, r) {
  Object.defineProperty(e, t, {
    get: n,
    set: r,
    enumerable: !0,
    configurable: !0,
  });
}
var Xr,
  Zr,
  Jr,
  ei,
  ti,
  ni,
  ri,
  ii,
  li,
  oi,
  ai,
  si,
  ui,
  ci,
  di,
  pi,
  fi,
  mi,
  hi,
  gi,
  yi,
  vi,
  bi,
  wi,
  Ei,
  ki,
  Si,
  xi,
  Pi,
  Ti,
  _i,
  Ci,
  Ii,
  Mi,
  Li,
  Ni,
  Ri,
  Oi,
  Ai,
  Fi,
  zi,
  Di,
  Ki,
  Vi,
  Ui,
  Bi,
  ji,
  $i,
  Hi = {};
Yr(
  Hi,
  "spectrum-Icon",
  () => Xr,
  (e) => (Xr = e)
),
  Yr(
    Hi,
    "spectrum-UIIcon",
    () => Zr,
    (e) => (Zr = e)
  ),
  Yr(
    Hi,
    "spectrum-Icon--sizeXXS",
    () => Jr,
    (e) => (Jr = e)
  ),
  Yr(
    Hi,
    "spectrum-Icon--sizeXS",
    () => ei,
    (e) => (ei = e)
  ),
  Yr(
    Hi,
    "spectrum-Icon--sizeS",
    () => ti,
    (e) => (ti = e)
  ),
  Yr(
    Hi,
    "spectrum-Icon--sizeM",
    () => ni,
    (e) => (ni = e)
  ),
  Yr(
    Hi,
    "spectrum-Icon--sizeL",
    () => ri,
    (e) => (ri = e)
  ),
  Yr(
    Hi,
    "spectrum-Icon--sizeXL",
    () => ii,
    (e) => (ii = e)
  ),
  Yr(
    Hi,
    "spectrum-Icon--sizeXXL",
    () => li,
    (e) => (li = e)
  ),
  Yr(
    Hi,
    "spectrum--medium",
    () => oi,
    (e) => (oi = e)
  ),
  Yr(
    Hi,
    "spectrum-UIIcon--large",
    () => ai,
    (e) => (ai = e)
  ),
  Yr(
    Hi,
    "spectrum-UIIcon--medium",
    () => si,
    (e) => (si = e)
  ),
  Yr(
    Hi,
    "spectrum--large",
    () => ui,
    (e) => (ui = e)
  ),
  Yr(
    Hi,
    "spectrum-UIIcon-AlertMedium",
    () => ci,
    (e) => (ci = e)
  ),
  Yr(
    Hi,
    "spectrum-UIIcon-AlertSmall",
    () => di,
    (e) => (di = e)
  ),
  Yr(
    Hi,
    "spectrum-UIIcon-ArrowDownSmall",
    () => pi,
    (e) => (pi = e)
  ),
  Yr(
    Hi,
    "spectrum-UIIcon-ArrowLeftMedium",
    () => fi,
    (e) => (fi = e)
  ),
  Yr(
    Hi,
    "spectrum-UIIcon-Asterisk",
    () => mi,
    (e) => (mi = e)
  ),
  Yr(
    Hi,
    "spectrum-UIIcon-CheckmarkMedium",
    () => hi,
    (e) => (hi = e)
  ),
  Yr(
    Hi,
    "spectrum-UIIcon-CheckmarkSmall",
    () => gi,
    (e) => (gi = e)
  ),
  Yr(
    Hi,
    "spectrum-UIIcon-ChevronDownMedium",
    () => yi,
    (e) => (yi = e)
  ),
  Yr(
    Hi,
    "spectrum-UIIcon-ChevronDownSmall",
    () => vi,
    (e) => (vi = e)
  ),
  Yr(
    Hi,
    "spectrum-UIIcon-ChevronLeftLarge",
    () => bi,
    (e) => (bi = e)
  ),
  Yr(
    Hi,
    "spectrum-UIIcon-ChevronLeftMedium",
    () => wi,
    (e) => (wi = e)
  ),
  Yr(
    Hi,
    "spectrum-UIIcon-ChevronRightLarge",
    () => Ei,
    (e) => (Ei = e)
  ),
  Yr(
    Hi,
    "spectrum-UIIcon-ChevronRightMedium",
    () => ki,
    (e) => (ki = e)
  ),
  Yr(
    Hi,
    "spectrum-UIIcon-ChevronRightSmall",
    () => Si,
    (e) => (Si = e)
  ),
  Yr(
    Hi,
    "spectrum-UIIcon-ChevronUpSmall",
    () => xi,
    (e) => (xi = e)
  ),
  Yr(
    Hi,
    "spectrum-UIIcon-CornerTriangle",
    () => Pi,
    (e) => (Pi = e)
  ),
  Yr(
    Hi,
    "spectrum-UIIcon-CrossLarge",
    () => Ti,
    (e) => (Ti = e)
  ),
  Yr(
    Hi,
    "spectrum-UIIcon-CrossMedium",
    () => _i,
    (e) => (_i = e)
  ),
  Yr(
    Hi,
    "spectrum-UIIcon-CrossSmall",
    () => Ci,
    (e) => (Ci = e)
  ),
  Yr(
    Hi,
    "spectrum-UIIcon-DashSmall",
    () => Ii,
    (e) => (Ii = e)
  ),
  Yr(
    Hi,
    "spectrum-UIIcon-DoubleGripper",
    () => Mi,
    (e) => (Mi = e)
  ),
  Yr(
    Hi,
    "spectrum-UIIcon-FolderBreadcrumb",
    () => Li,
    (e) => (Li = e)
  ),
  Yr(
    Hi,
    "spectrum-UIIcon-HelpMedium",
    () => Ni,
    (e) => (Ni = e)
  ),
  Yr(
    Hi,
    "spectrum-UIIcon-HelpSmall",
    () => Ri,
    (e) => (Ri = e)
  ),
  Yr(
    Hi,
    "spectrum-UIIcon-InfoMedium",
    () => Oi,
    (e) => (Oi = e)
  ),
  Yr(
    Hi,
    "spectrum-UIIcon-InfoSmall",
    () => Ai,
    (e) => (Ai = e)
  ),
  Yr(
    Hi,
    "spectrum-UIIcon-ListGripper",
    () => Fi,
    (e) => (Fi = e)
  ),
  Yr(
    Hi,
    "spectrum-UIIcon-Magnifier",
    () => zi,
    (e) => (zi = e)
  ),
  Yr(
    Hi,
    "spectrum-UIIcon-SkipLeft",
    () => Di,
    (e) => (Di = e)
  ),
  Yr(
    Hi,
    "spectrum-UIIcon-SkipRight",
    () => Ki,
    (e) => (Ki = e)
  ),
  Yr(
    Hi,
    "spectrum-UIIcon-Star",
    () => Vi,
    (e) => (Vi = e)
  ),
  Yr(
    Hi,
    "spectrum-UIIcon-StarOutline",
    () => Ui,
    (e) => (Ui = e)
  ),
  Yr(
    Hi,
    "spectrum-UIIcon-SuccessMedium",
    () => Bi,
    (e) => (Bi = e)
  ),
  Yr(
    Hi,
    "spectrum-UIIcon-SuccessSmall",
    () => ji,
    (e) => (ji = e)
  ),
  Yr(
    Hi,
    "spectrum-UIIcon-TripleGripper",
    () => $i,
    (e) => ($i = e)
  ),
  (Xr = "spectrum-Icon_368b34"),
  (Zr = "spectrum-UIIcon_368b34"),
  (Jr = "spectrum-Icon--sizeXXS_368b34"),
  (ei = "spectrum-Icon--sizeXS_368b34"),
  (ti = "spectrum-Icon--sizeS_368b34"),
  (ni = "spectrum-Icon--sizeM_368b34"),
  (ri = "spectrum-Icon--sizeL_368b34"),
  (ii = "spectrum-Icon--sizeXL_368b34"),
  (li = "spectrum-Icon--sizeXXL_368b34"),
  (oi = "spectrum--medium_368b34"),
  (ai = "spectrum-UIIcon--large_368b34"),
  (si = "spectrum-UIIcon--medium_368b34"),
  (ui = "spectrum--large_368b34"),
  (ci = "spectrum-UIIcon-AlertMedium_368b34"),
  (di = "spectrum-UIIcon-AlertSmall_368b34"),
  (pi = "spectrum-UIIcon-ArrowDownSmall_368b34"),
  (fi = "spectrum-UIIcon-ArrowLeftMedium_368b34"),
  (mi = "spectrum-UIIcon-Asterisk_368b34"),
  (hi = "spectrum-UIIcon-CheckmarkMedium_368b34"),
  (gi = "spectrum-UIIcon-CheckmarkSmall_368b34"),
  (yi = "spectrum-UIIcon-ChevronDownMedium_368b34"),
  (vi = "spectrum-UIIcon-ChevronDownSmall_368b34"),
  (bi = "spectrum-UIIcon-ChevronLeftLarge_368b34"),
  (wi = "spectrum-UIIcon-ChevronLeftMedium_368b34"),
  (Ei = "spectrum-UIIcon-ChevronRightLarge_368b34"),
  (ki = "spectrum-UIIcon-ChevronRightMedium_368b34"),
  (Si = "spectrum-UIIcon-ChevronRightSmall_368b34"),
  (xi = "spectrum-UIIcon-ChevronUpSmall_368b34"),
  (Pi = "spectrum-UIIcon-CornerTriangle_368b34"),
  (Ti = "spectrum-UIIcon-CrossLarge_368b34"),
  (_i = "spectrum-UIIcon-CrossMedium_368b34"),
  (Ci = "spectrum-UIIcon-CrossSmall_368b34"),
  (Ii = "spectrum-UIIcon-DashSmall_368b34"),
  (Mi = "spectrum-UIIcon-DoubleGripper_368b34"),
  (Li = "spectrum-UIIcon-FolderBreadcrumb_368b34"),
  (Ni = "spectrum-UIIcon-HelpMedium_368b34"),
  (Ri = "spectrum-UIIcon-HelpSmall_368b34"),
  (Oi = "spectrum-UIIcon-InfoMedium_368b34"),
  (Ai = "spectrum-UIIcon-InfoSmall_368b34"),
  (Fi = "spectrum-UIIcon-ListGripper_368b34"),
  (zi = "spectrum-UIIcon-Magnifier_368b34"),
  (Di = "spectrum-UIIcon-SkipLeft_368b34"),
  (Ki = "spectrum-UIIcon-SkipRight_368b34"),
  (Vi = "spectrum-UIIcon-Star_368b34"),
  (Ui = "spectrum-UIIcon-StarOutline_368b34"),
  (Bi = "spectrum-UIIcon-SuccessMedium_368b34"),
  (ji = "spectrum-UIIcon-SuccessSmall_368b34"),
  ($i = "spectrum-UIIcon-TripleGripper_368b34");
const Wi = {
  ...Ue,
  color: [
    "color",
    function (e) {
      return `var(--spectrum-semantic-${e}-color-icon)`;
    },
  ],
};
function qi(e) {
  e = lt(e, "icon");
  let { children: n, size: r, "aria-label": i, "aria-hidden": l, ...a } = e,
    { styleProps: s } = tt(a, Wi),
    u = Kr(),
    c = "M";
  null !== u && (c = "large" === u.scale ? "L" : "M"), l || (l = void 0);
  let d = r || c;
  return t(o).cloneElement(n, {
    ...C(a),
    ...s,
    focusable: "false",
    "aria-label": i,
    "aria-hidden": !i || l || void 0,
    role: "img",
    className: Me(
      Qr(Hi),
      n.props.className,
      "spectrum-Icon",
      `spectrum-Icon--size${d}`,
      s.className
    ),
  });
}
function Gi(e) {
  e = lt(e, "icon");
  let { children: n, "aria-label": r, "aria-hidden": i, ...l } = e,
    { styleProps: a } = tt(l),
    s = Kr(),
    u = "M";
  return (
    null !== s && (u = "large" === s.scale ? "L" : "M"),
    i || (i = void 0),
    t(o).cloneElement(n, {
      ...C(l),
      ...a,
      scale: u,
      focusable: "false",
      "aria-label": r,
      "aria-hidden": !r || i || void 0,
      role: "img",
      className: Me(
        Qr(Hi),
        n.props.className,
        "spectrum-Icon",
        { [`spectrum-UIIcon-${n.type.displayName}`]: n.type.displayName },
        a.className
      ),
    })
  );
}
function Qi(e) {
  e = lt(e, "illustration");
  let {
      children: n,
      "aria-label": r,
      "aria-labelledby": i,
      "aria-hidden": l,
      ...a
    } = e,
    { styleProps: s } = tt(a),
    u = r || i;
  return (
    l || (l = void 0),
    t(o).cloneElement(n, {
      ...C(a),
      ...s,
      focusable: "false",
      "aria-label": r,
      "aria-labelledby": i,
      "aria-hidden": l,
      role: u ? "img" : void 0,
    })
  );
}
var Yi,
  Xi = Br(l("acw62"));
Yi = function (e) {
  return rl.default.createElement(
    Gi,
    e,
    rl.default.createElement(Zi.CrossSmall, null)
  );
};
var Zi = {};
Object.defineProperty(Zi, "__esModule", { value: !0 }), (Zi.CrossSmall = nl);
var Ji = (function (e) {
  return e && e.__esModule ? e : { default: e };
})(l("acw62"));
function el() {
  return (
    (el =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    el.apply(this, arguments)
  );
}
function tl(e, t) {
  if (null == e) return {};
  var n,
    r,
    i = (function (e, t) {
      if (null == e) return {};
      var n,
        r,
        i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++)
        (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (r = 0; r < l.length; r++)
      (n = l[r]),
        t.indexOf(n) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
  }
  return i;
}
function nl(e) {
  var t = e.scale,
    n = void 0 === t ? "M" : t,
    r = tl(e, ["scale"]);
  return Ji.default.createElement(
    "svg",
    el({}, r, r),
    "L" === n &&
      Ji.default.createElement("path", {
        d: "M9.317 8.433L5.884 5l3.433-3.433a.625.625 0 1 0-.884-.884L5 4.116 1.567.683a.625.625 0 1 0-.884.884C.83 1.713 2.77 3.657 4.116 5L.683 8.433a.625.625 0 1 0 .884.884L5 5.884l3.433 3.433a.625.625 0 0 0 .884-.884z",
      }),
    "M" === n &&
      Ji.default.createElement("path", {
        d: "M7.317 6.433L4.884 4l2.433-2.433a.625.625 0 1 0-.884-.884L4 3.116 1.567.683a.625.625 0 1 0-.884.884L3.116 4 .683 6.433a.625.625 0 1 0 .884.884L4 4.884l2.433 2.433a.625.625 0 0 0 .884-.884z",
      })
  );
}
nl.displayName = "CrossSmall";
var rl = Br(l("acw62"));
function il(e = {}) {
  let { isReadOnly: t } = e,
    [n, r] = s(e.isSelected, e.defaultSelected || !1, e.onChange);
  return {
    isSelected: n,
    setSelected: function (e) {
      t || r(e);
    },
    toggle: function () {
      t || r(!n);
    },
  };
}
function ll(e) {
  return e && e.__esModule ? e.default : e;
}
function ol(e, t, n, r) {
  Object.defineProperty(e, t, {
    get: n,
    set: r,
    enumerable: !0,
    configurable: !0,
  });
}
var al,
  sl,
  ul,
  cl,
  dl,
  pl,
  fl,
  ml,
  hl,
  gl,
  yl,
  vl,
  bl,
  wl,
  El,
  kl,
  Sl,
  xl,
  Pl,
  Tl,
  _l,
  Cl,
  Il,
  Ml,
  Ll,
  Nl,
  Rl,
  Ol,
  Al,
  Fl = {};
ol(
  Fl,
  "spectrum-Button",
  () => al,
  (e) => (al = e)
),
  ol(
    Fl,
    "spectrum-ActionButton",
    () => sl,
    (e) => (sl = e)
  ),
  ol(
    Fl,
    "spectrum-LogicButton",
    () => ul,
    (e) => (ul = e)
  ),
  ol(
    Fl,
    "spectrum-FieldButton",
    () => cl,
    (e) => (cl = e)
  ),
  ol(
    Fl,
    "spectrum-ClearButton",
    () => dl,
    (e) => (dl = e)
  ),
  ol(
    Fl,
    "focus-ring",
    () => pl,
    (e) => (pl = e)
  ),
  ol(
    Fl,
    "spectrum-FieldButton--quiet",
    () => fl,
    (e) => (fl = e)
  ),
  ol(
    Fl,
    "spectrum-Icon",
    () => ml,
    (e) => (ml = e)
  ),
  ol(
    Fl,
    "is-hovered",
    () => hl,
    (e) => (hl = e)
  ),
  ol(
    Fl,
    "spectrum-Button-label",
    () => gl,
    (e) => (gl = e)
  ),
  ol(
    Fl,
    "spectrum-Button--iconOnly",
    () => yl,
    (e) => (yl = e)
  ),
  ol(
    Fl,
    "spectrum-ActionButton-label",
    () => vl,
    (e) => (vl = e)
  ),
  ol(
    Fl,
    "spectrum-ActionButton-hold",
    () => bl,
    (e) => (bl = e)
  ),
  ol(
    Fl,
    "spectrum-ActionButton--quiet",
    () => wl,
    (e) => (wl = e)
  ),
  ol(
    Fl,
    "is-disabled",
    () => El,
    (e) => (El = e)
  ),
  ol(
    Fl,
    "is-open",
    () => kl,
    (e) => (kl = e)
  ),
  ol(
    Fl,
    "spectrum-ClearButton--small",
    () => Sl,
    (e) => (Sl = e)
  ),
  ol(
    Fl,
    "is-active",
    () => xl,
    (e) => (xl = e)
  ),
  ol(
    Fl,
    "is-selected",
    () => Pl,
    (e) => (Pl = e)
  ),
  ol(
    Fl,
    "spectrum-ActionButton--emphasized",
    () => Tl,
    (e) => (Tl = e)
  ),
  ol(
    Fl,
    "spectrum-ActionButton--staticWhite",
    () => _l,
    (e) => (_l = e)
  ),
  ol(
    Fl,
    "spectrum-ActionButton--staticBlack",
    () => Cl,
    (e) => (Cl = e)
  ),
  ol(
    Fl,
    "spectrum-ActionButton--staticColor",
    () => Il,
    (e) => (Il = e)
  ),
  ol(
    Fl,
    "spectrum-LogicButton--and",
    () => Ml,
    (e) => (Ml = e)
  ),
  ol(
    Fl,
    "spectrum-LogicButton--or",
    () => Ll,
    (e) => (Ll = e)
  ),
  ol(
    Fl,
    "is-focused",
    () => Nl,
    (e) => (Nl = e)
  ),
  ol(
    Fl,
    "is-placeholder",
    () => Rl,
    (e) => (Rl = e)
  ),
  ol(
    Fl,
    "spectrum-FieldButton--invalid",
    () => Ol,
    (e) => (Ol = e)
  ),
  ol(
    Fl,
    "spectrum-Button--overBackground",
    () => Al,
    (e) => (Al = e)
  ),
  (al = "spectrum-Button_e2d99e"),
  (sl = "spectrum-ActionButton_e2d99e"),
  (ul = "spectrum-LogicButton_e2d99e"),
  (cl = "spectrum-FieldButton_e2d99e"),
  (dl = "spectrum-ClearButton_e2d99e"),
  (pl = "focus-ring_e2d99e"),
  (fl = "spectrum-FieldButton--quiet_e2d99e"),
  (ml = "spectrum-Icon_e2d99e"),
  (hl = "is-hovered_e2d99e"),
  (gl = "spectrum-Button-label_e2d99e"),
  (yl = "spectrum-Button--iconOnly_e2d99e"),
  (vl = "spectrum-ActionButton-label_e2d99e"),
  (bl = "spectrum-ActionButton-hold_e2d99e"),
  (wl = "spectrum-ActionButton--quiet_e2d99e"),
  (El = "is-disabled_e2d99e"),
  (kl = "is-open_e2d99e"),
  (Sl = "spectrum-ClearButton--small_e2d99e"),
  (xl = "is-active_e2d99e"),
  (Pl = "is-selected_e2d99e"),
  (Tl = "spectrum-ActionButton--emphasized_e2d99e"),
  (_l = "spectrum-ActionButton--staticWhite_e2d99e"),
  (Cl = "spectrum-ActionButton--staticBlack_e2d99e"),
  (Il = "spectrum-ActionButton--staticColor_e2d99e"),
  (Ml = "spectrum-LogicButton--and_e2d99e"),
  (Ll = "spectrum-LogicButton--or_e2d99e"),
  (Nl = "is-focused_e2d99e"),
  (Rl = "is-placeholder_e2d99e"),
  (Ol = "spectrum-FieldButton--invalid_e2d99e"),
  (Al = "spectrum-Button--overBackground_e2d99e");
t(o).forwardRef(function (e, n) {
  e = lt((e = Vr(e)), "button");
  let {
      elementType: r = "button",
      children: i,
      variant: l,
      style: a = "accent" === l || "cta" === l ? "fill" : "outline",
      staticColor: s,
      isDisabled: u,
      autoFocus: c,
      ...d
    } = e,
    p = Ae(n),
    { buttonProps: f, isPressed: m } = Nn(e, p),
    { hoverProps: h, isHovered: g } = Jt({ isDisabled: u }),
    { styleProps: y } = tt(d),
    v = st(`.${ll(Fl)["spectrum-Button-label"]}`, p),
    b = st(`.${ll(Fl)["spectrum-Icon"]}`, p);
  return (
    "cta" === l
      ? (l = "accent")
      : "overBackground" === l && ((l = "primary"), (s = "white")),
    t(o).createElement(
      Cn,
      { focusRingClass: Me(ll(Fl), "focus-ring"), autoFocus: c },
      t(o).createElement(
        r,
        {
          ...y,
          ...x(f, h),
          ref: p,
          "data-variant": l,
          "data-style": a,
          "data-static-color": s || void 0,
          className: Me(
            ll(Fl),
            "spectrum-Button",
            {
              "spectrum-Button--iconOnly": b && !v,
              "is-disabled": u,
              "is-active": m,
              "is-hovered": g,
            },
            y.className
          ),
        },
        t(o).createElement(
          ot,
          {
            slots: {
              icon: {
                size: "S",
                UNSAFE_className: Me(ll(Fl), "spectrum-Icon"),
              },
              text: { UNSAFE_className: Me(ll(Fl), "spectrum-Button-label") },
            },
          },
          "string" == typeof i ? t(o).createElement(Ln, null, i) : i
        )
      )
    )
  );
});
let zl = t(o).forwardRef(function (e, n) {
  e = lt((e = Vr(e)), "actionButton");
  let {
      isQuiet: r,
      isDisabled: i,
      staticColor: l,
      children: a,
      autoFocus: s,
      holdAffordance: u,
      ...c
    } = e,
    d = Ae(n),
    { buttonProps: p, isPressed: f } = Nn(e, d),
    { hoverProps: m, isHovered: h } = Jt({ isDisabled: i }),
    { styleProps: g } = tt(c),
    y = t(o)
      .Children.toArray(e.children)
      .every((e) => !t(o).isValidElement(e));
  return t(o).createElement(
    Cn,
    { focusRingClass: Me(ll(Fl), "focus-ring"), autoFocus: s },
    t(o).createElement(
      "button",
      {
        ...g,
        ...x(p, m),
        ref: d,
        className: Me(
          ll(Fl),
          "spectrum-ActionButton",
          {
            "spectrum-ActionButton--quiet": r,
            "spectrum-ActionButton--staticColor": !!l,
            "spectrum-ActionButton--staticWhite": "white" === l,
            "spectrum-ActionButton--staticBlack": "black" === l,
            "is-active": f,
            "is-disabled": i,
            "is-hovered": h,
          },
          g.className
        ),
      },
      u &&
        t(o).createElement(Ur, {
          UNSAFE_className: Me(ll(Fl), "spectrum-ActionButton-hold"),
        }),
      t(o).createElement(
        ot,
        {
          slots: {
            icon: { size: "S", UNSAFE_className: Me(ll(Fl), "spectrum-Icon") },
            text: {
              UNSAFE_className: Me(ll(Fl), "spectrum-ActionButton-label"),
            },
          },
        },
        "string" == typeof a || y ? t(o).createElement(Ln, null, a) : a
      )
    )
  );
});
let Dl = t(o).forwardRef(function (e, n) {
  e = lt(e, "button");
  let {
      isQuiet: r,
      isDisabled: i,
      validationState: l,
      children: a,
      autoFocus: s,
      isActive: u,
      focusRingClass: c,
      ...d
    } = e,
    p = Ae(n),
    { buttonProps: f, isPressed: m } = Nn(e, p),
    { hoverProps: h, isHovered: g } = Jt({ isDisabled: i }),
    { styleProps: y } = tt(d);
  return t(o).createElement(
    Cn,
    { focusRingClass: Me(ll(Fl), "focus-ring", c), autoFocus: s },
    t(o).createElement(
      "button",
      {
        ...x(f, h),
        ref: p,
        className: Me(
          ll(Fl),
          "spectrum-FieldButton",
          {
            "spectrum-FieldButton--quiet": r,
            "is-active": u || m,
            "is-disabled": i,
            "spectrum-FieldButton--invalid": "invalid" === l,
            "is-hovered": g,
          },
          y.className
        ),
      },
      t(o).createElement(
        ot,
        {
          slots: {
            icon: { size: "S", UNSAFE_className: Me(ll(Fl), "spectrum-Icon") },
          },
        },
        a
      )
    )
  );
});
t(o).forwardRef(function (e, n) {
  e = Vr(e);
  let { variant: r, children: i, isDisabled: l, autoFocus: a, ...s } = e,
    u = Ae(n),
    { buttonProps: c, isPressed: d } = Nn(e, u),
    { hoverProps: p, isHovered: f } = Jt({ isDisabled: l }),
    { styleProps: m } = tt(s);
  return t(o).createElement(
    Cn,
    { focusRingClass: Me(ll(Fl), "focus-ring"), autoFocus: a },
    t(o).createElement(
      "button",
      {
        ...m,
        ...x(c, p),
        ref: u,
        className: Me(
          ll(Fl),
          "spectrum-LogicButton",
          {
            [`spectrum-LogicButton--${r}`]: r,
            "is-disabled": l,
            "is-active": d,
            "is-hovered": f,
          },
          m.className
        ),
      },
      t(o).createElement(
        "span",
        { className: Me(ll(Fl), "spectrum-Button-label") },
        i
      )
    )
  );
});
t(o).forwardRef(function (e, n) {
  let {
      children: r = t(o).createElement(Yi, {
        UNSAFE_className: ll(Fl)["spectrum-Icon"],
      }),
      focusClassName: i,
      variant: l,
      autoFocus: a,
      isDisabled: s,
      preventFocus: u,
      elementType: c = u ? "div" : "button",
      ...d
    } = e,
    p = Ae(n),
    { buttonProps: f, isPressed: m } = Nn({ ...e, elementType: c }, p),
    { hoverProps: h, isHovered: g } = Jt({ isDisabled: s }),
    { styleProps: y } = tt(d);
  u && delete f.tabIndex;
  let v = c;
  return t(o).createElement(
    Cn,
    { focusRingClass: Me(ll(Fl), "focus-ring", i), autoFocus: a },
    t(o).createElement(
      v,
      {
        ...y,
        ...x(f, h),
        ref: p,
        className: Me(
          ll(Fl),
          "spectrum-ClearButton",
          {
            [`spectrum-ClearButton--${l}`]: l,
            "is-disabled": s,
            "is-active": m,
            "is-hovered": g,
          },
          y.className
        ),
      },
      r
    )
  );
});
t(o).forwardRef(function (e, n) {
  e = Vr(e);
  let {
      isQuiet: r,
      isDisabled: i,
      isEmphasized: l,
      staticColor: a,
      children: s,
      autoFocus: u,
      ...c
    } = e,
    d = Ae(n),
    p = il(e),
    { buttonProps: f, isPressed: m } = Rn(e, p, d),
    { hoverProps: h, isHovered: g } = Jt({ isDisabled: i }),
    { styleProps: y } = tt(c),
    v = t(o)
      .Children.toArray(e.children)
      .every((e) => !t(o).isValidElement(e));
  return t(o).createElement(
    Cn,
    { focusRingClass: Me(ll(Fl), "focus-ring"), autoFocus: u },
    t(o).createElement(
      "button",
      {
        ...y,
        ...x(f, h),
        ref: d,
        className: Me(
          ll(Fl),
          "spectrum-ActionButton",
          {
            "spectrum-ActionButton--quiet": r,
            "spectrum-ActionButton--emphasized": l,
            "spectrum-ActionButton--staticColor": !!a,
            "spectrum-ActionButton--staticWhite": "white" === a,
            "spectrum-ActionButton--staticBlack": "black" === a,
            "is-active": m,
            "is-disabled": i,
            "is-hovered": g,
            "is-selected": p.isSelected,
          },
          y.className
        ),
      },
      t(o).createElement(
        ot,
        {
          slots: {
            icon: { size: "S", UNSAFE_className: Me(ll(Fl), "spectrum-Icon") },
            text: {
              UNSAFE_className: Me(ll(Fl), "spectrum-ActionButton-label"),
            },
          },
        },
        "string" == typeof s || v ? t(o).createElement(Ln, null, s) : s
      )
    )
  );
});
var Kl;
Kl = function (e) {
  return Hl.default.createElement(
    Gi,
    e,
    Hl.default.createElement(Vl.FolderBreadcrumb, null)
  );
};
var Vl = {};
Object.defineProperty(Vl, "__esModule", { value: !0 }),
  (Vl.FolderBreadcrumb = $l);
var Ul = (function (e) {
  return e && e.__esModule ? e : { default: e };
})(l("acw62"));
function Bl() {
  return (
    (Bl =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Bl.apply(this, arguments)
  );
}
function jl(e, t) {
  if (null == e) return {};
  var n,
    r,
    i = (function (e, t) {
      if (null == e) return {};
      var n,
        r,
        i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++)
        (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (r = 0; r < l.length; r++)
      (n = l[r]),
        t.indexOf(n) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
  }
  return i;
}
function $l(e) {
  var t = e.scale,
    n = void 0 === t ? "M" : t,
    r = jl(e, ["scale"]);
  return Ul.default.createElement(
    "svg",
    Bl({}, r, r),
    "L" === n &&
      Ul.default.createElement("path", {
        d: "M19.5 6l-9.166.004-1.668-1.7A.998.998 0 0 0 7.946 4H3a1 1 0 0 0-1 1v13a.5.5 0 0 0 .5.5h17a.5.5 0 0 0 .5-.5V6.5a.5.5 0 0 0-.5-.5zm-16-.5h4.237l1.964 2H3.5zm11.544 6.044l-3.5 3.5a.77.77 0 0 1-1.088 0l-3.5-3.5a.77.77 0 0 1 1.088-1.088L11 13.41l2.956-2.955a.77.77 0 0 1 1.088 1.088z",
      }),
    "M" === n &&
      Ul.default.createElement("path", {
        d: "M16.5 4l-7.166.004-1.652-1.7A1 1 0 0 0 6.965 2H2a1 1 0 0 0-1 1v11.5a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5zM2 3h4.965l1.943 2H2zm10.354 5.854l-3 3a.5.5 0 0 1-.707 0l-3-3a.5.5 0 0 1 .707-.707L9 10.793l2.646-2.646a.5.5 0 0 1 .707.707z",
      })
  );
}
$l.displayName = "FolderBreadcrumb";
var Hl = Br(l("acw62"));
o = l("acw62");
function Wl(e, t) {
  if (null == e) return {};
  var n,
    r,
    i = {},
    l = Object.keys(e);
  for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i;
}
function ql(e, t) {
  return (
    (ql = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return (e.__proto__ = t), e;
        }),
    ql(e, t)
  );
}
function Gl(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    ql(e, t);
}
o = l("acw62");
var Ql = { disabled: !1 },
  Yl = t((o = l("acw62"))).createContext(null),
  Xl = function (e) {
    return e.scrollTop;
  },
  Zl = "unmounted",
  Jl = "exited",
  eo = "entering",
  to = "entered",
  no = "exiting",
  ro = (function (e) {
    function n(t, n) {
      var r;
      r = e.call(this, t, n) || this;
      var i,
        l = n && !n.isMounting ? t.enter : t.appear;
      return (
        (r.appearStatus = null),
        t.in
          ? l
            ? ((i = Jl), (r.appearStatus = eo))
            : (i = to)
          : (i = t.unmountOnExit || t.mountOnEnter ? Zl : Jl),
        (r.state = { status: i }),
        (r.nextCallback = null),
        r
      );
    }
    Gl(n, e),
      (n.getDerivedStateFromProps = function (e, t) {
        return e.in && t.status === Zl ? { status: Jl } : null;
      });
    var r = n.prototype;
    return (
      (r.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (r.componentDidUpdate = function (e) {
        var t = null;
        if (e !== this.props) {
          var n = this.state.status;
          this.props.in
            ? n !== eo && n !== to && (t = eo)
            : (n !== eo && n !== to) || (t = no);
        }
        this.updateStatus(!1, t);
      }),
      (r.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (r.getTimeouts = function () {
        var e,
          t,
          n,
          r = this.props.timeout;
        return (
          (e = t = n = r),
          null != r &&
            "number" != typeof r &&
            ((e = r.exit),
            (t = r.enter),
            (n = void 0 !== r.appear ? r.appear : t)),
          { exit: e, enter: t, appear: n }
        );
      }),
      (r.updateStatus = function (e, n) {
        if ((void 0 === e && (e = !1), null !== n))
          if ((this.cancelNextCallback(), n === eo)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var r = this.props.nodeRef
                ? this.props.nodeRef.current
                : t(a).findDOMNode(this);
              r && Xl(r);
            }
            this.performEnter(e);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === Jl &&
            this.setState({ status: Zl });
      }),
      (r.performEnter = function (e) {
        var n = this,
          r = this.props.enter,
          i = this.context ? this.context.isMounting : e,
          l = this.props.nodeRef ? [i] : [t(a).findDOMNode(this), i],
          o = l[0],
          s = l[1],
          u = this.getTimeouts(),
          c = i ? u.appear : u.enter;
        (!e && !r) || Ql.disabled
          ? this.safeSetState({ status: to }, function () {
              n.props.onEntered(o);
            })
          : (this.props.onEnter(o, s),
            this.safeSetState({ status: eo }, function () {
              n.props.onEntering(o, s),
                n.onTransitionEnd(c, function () {
                  n.safeSetState({ status: to }, function () {
                    n.props.onEntered(o, s);
                  });
                });
            }));
      }),
      (r.performExit = function () {
        var e = this,
          n = this.props.exit,
          r = this.getTimeouts(),
          i = this.props.nodeRef ? void 0 : t(a).findDOMNode(this);
        n && !Ql.disabled
          ? (this.props.onExit(i),
            this.safeSetState({ status: no }, function () {
              e.props.onExiting(i),
                e.onTransitionEnd(r.exit, function () {
                  e.safeSetState({ status: Jl }, function () {
                    e.props.onExited(i);
                  });
                });
            }))
          : this.safeSetState({ status: Jl }, function () {
              e.props.onExited(i);
            });
      }),
      (r.cancelNextCallback = function () {
        null !== this.nextCallback &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (r.safeSetState = function (e, t) {
        (t = this.setNextCallback(t)), this.setState(e, t);
      }),
      (r.setNextCallback = function (e) {
        var t = this,
          n = !0;
        return (
          (this.nextCallback = function (r) {
            n && ((n = !1), (t.nextCallback = null), e(r));
          }),
          (this.nextCallback.cancel = function () {
            n = !1;
          }),
          this.nextCallback
        );
      }),
      (r.onTransitionEnd = function (e, n) {
        this.setNextCallback(n);
        var r = this.props.nodeRef
            ? this.props.nodeRef.current
            : t(a).findDOMNode(this),
          i = null == e && !this.props.addEndListener;
        if (r && !i) {
          if (this.props.addEndListener) {
            var l = this.props.nodeRef
                ? [this.nextCallback]
                : [r, this.nextCallback],
              o = l[0],
              s = l[1];
            this.props.addEndListener(o, s);
          }
          null != e && setTimeout(this.nextCallback, e);
        } else setTimeout(this.nextCallback, 0);
      }),
      (r.render = function () {
        var e = this.state.status;
        if (e === Zl) return null;
        var n = this.props,
          r = n.children,
          i =
            (n.in,
            n.mountOnEnter,
            n.unmountOnExit,
            n.appear,
            n.enter,
            n.exit,
            n.timeout,
            n.addEndListener,
            n.onEnter,
            n.onEntering,
            n.onEntered,
            n.onExit,
            n.onExiting,
            n.onExited,
            n.nodeRef,
            Wl(n, [
              "children",
              "in",
              "mountOnEnter",
              "unmountOnExit",
              "appear",
              "enter",
              "exit",
              "timeout",
              "addEndListener",
              "onEnter",
              "onEntering",
              "onEntered",
              "onExit",
              "onExiting",
              "onExited",
              "nodeRef",
            ]));
        return t(o).createElement(
          Yl.Provider,
          { value: null },
          "function" == typeof r
            ? r(e, i)
            : t(o).cloneElement(t(o).Children.only(r), i)
        );
      }),
      n
    );
  })(t(o).Component);
function io() {}
(ro.contextType = Yl),
  (ro.propTypes = {}),
  (ro.defaultProps = {
    in: !1,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    enter: !0,
    exit: !0,
    onEnter: io,
    onEntering: io,
    onEntered: io,
    onExit: io,
    onExiting: io,
    onExited: io,
  }),
  (ro.UNMOUNTED = Zl),
  (ro.EXITED = Jl),
  (ro.ENTERING = eo),
  (ro.ENTERED = to),
  (ro.EXITING = no);
var lo = ro;
function oo(e) {
  return e && e.__esModule ? e.default : e;
}
function ao(e, t, n, r) {
  Object.defineProperty(e, t, {
    get: n,
    set: r,
    enumerable: !0,
    configurable: !0,
  });
}
const so = { entering: !1, entered: !0 };
function uo(e) {
  return t(o).createElement(
    lo,
    { timeout: { enter: 0, exit: 350 }, ...e },
    (n) =>
      t(o).Children.map(
        e.children,
        (e) => e && t(o).cloneElement(e, { isOpen: !!so[n] })
      )
  );
}
let co = t(o).forwardRef(function (e, n) {
  let {
      children: r,
      isOpen: i,
      container: l,
      onEnter: a,
      onEntering: s,
      onEntered: u,
      onExit: c,
      onExiting: d,
      onExited: p,
    } = e,
    [f, m] = (0, o.useState)(!i),
    h = (0, o.useCallback)(() => {
      m(!1), u && u();
    }, [u]),
    g = (0, o.useCallback)(() => {
      m(!0), p && p();
    }, [p]);
  return i || !f
    ? t(o).createElement(
        xr,
        { portalContainer: l },
        t(o).createElement(
          zr,
          {
            ref: n,
            UNSAFE_style: { background: "transparent", isolation: "isolate" },
            isDisabled: !1,
          },
          t(o).createElement(
            uo,
            {
              in: i,
              appear: !0,
              onExit: c,
              onExiting: d,
              onExited: g,
              onEnter: a,
              onEntering: s,
              onEntered: h,
            },
            r
          )
        )
      )
    : null;
});
var po,
  fo,
  mo,
  ho,
  go,
  yo,
  vo,
  bo,
  wo,
  Eo = {};
ao(
  Eo,
  "spectrum-Popover",
  () => po,
  (e) => (po = e)
),
  ao(
    Eo,
    "react-spectrum-Popover",
    () => fo,
    (e) => (fo = e)
  ),
  ao(
    Eo,
    "spectrum-Dialog-content",
    () => mo,
    (e) => (mo = e)
  ),
  ao(
    Eo,
    "spectrum-Modal-wrapper",
    () => ho,
    (e) => (ho = e)
  ),
  ao(
    Eo,
    "react-spectrum-Modal-wrapper",
    () => go,
    (e) => (go = e)
  ),
  ao(
    Eo,
    "spectrum-Modal",
    () => yo,
    (e) => (yo = e)
  ),
  ao(
    Eo,
    "react-spectrum-Modal",
    () => vo,
    (e) => (vo = e)
  ),
  ao(
    Eo,
    "spectrum-Tray",
    () => bo,
    (e) => (bo = e)
  ),
  ao(
    Eo,
    "react-spectrum-Tray",
    () => wo,
    (e) => (wo = e)
  ),
  (po = "spectrum-Popover_38efea"),
  (fo = "react-spectrum-Popover_38efea"),
  (mo = "spectrum-Dialog-content_38efea"),
  (ho = "spectrum-Modal-wrapper_38efea"),
  (go = "react-spectrum-Modal-wrapper_38efea"),
  (yo = "spectrum-Modal_38efea"),
  (vo = "react-spectrum-Modal_38efea"),
  (bo = "spectrum-Tray_38efea"),
  (wo = "react-spectrum-Tray_38efea");
var ko,
  So,
  xo,
  Po,
  To,
  _o,
  Co,
  Io,
  Mo,
  Lo,
  No = {};
ao(
  No,
  "spectrum-Popover",
  () => ko,
  (e) => (ko = e)
),
  ao(
    No,
    "is-open",
    () => So,
    (e) => (So = e)
  ),
  ao(
    No,
    "spectrum-Popover--bottom",
    () => xo,
    (e) => (xo = e)
  ),
  ao(
    No,
    "spectrum-Popover--top",
    () => Po,
    (e) => (Po = e)
  ),
  ao(
    No,
    "spectrum-Popover--right",
    () => To,
    (e) => (To = e)
  ),
  ao(
    No,
    "spectrum-Popover--left",
    () => _o,
    (e) => (_o = e)
  ),
  ao(
    No,
    "spectrum-Popover-tip",
    () => Co,
    (e) => (Co = e)
  ),
  ao(
    No,
    "spectrum-Popover-tip-triangle",
    () => Io,
    (e) => (Io = e)
  ),
  ao(
    No,
    "spectrum-Popover--dialog",
    () => Mo,
    (e) => (Mo = e)
  ),
  ao(
    No,
    "spectrum-Popover--withTip",
    () => Lo,
    (e) => (Lo = e)
  ),
  (ko = "spectrum-Popover_6115b8"),
  (So = "is-open_6115b8"),
  (xo = "spectrum-Popover--bottom_6115b8"),
  (Po = "spectrum-Popover--top_6115b8"),
  (To = "spectrum-Popover--right_6115b8"),
  (_o = "spectrum-Popover--left_6115b8"),
  (Co = "spectrum-Popover-tip_6115b8"),
  (Io = "spectrum-Popover-tip-triangle_6115b8"),
  (Mo = "spectrum-Popover--dialog_6115b8"),
  (Lo = "spectrum-Popover--withTip_6115b8");
var Ro,
  Oo,
  Ao,
  Fo = {};
function zo({ isOpen: e, isTransparent: n }) {
  return t(o).createElement("div", {
    className: Me(oo(Fo), "spectrum-Underlay", {
      "is-open": e,
      "spectrum-Underlay--transparent": n,
    }),
  });
}
ao(
  Fo,
  "spectrum-Underlay",
  () => Ro,
  (e) => (Ro = e)
),
  ao(
    Fo,
    "is-open",
    () => Oo,
    (e) => (Oo = e)
  ),
  ao(
    Fo,
    "spectrum-Underlay--transparent",
    () => Ao,
    (e) => (Ao = e)
  ),
  (Ro = "spectrum-Underlay_eb7615"),
  (Oo = "is-open_eb7615"),
  (Ao = "spectrum-Underlay--transparent_eb7615");
let Do = { left: "right", right: "right", top: "bottom", bottom: "bottom" };
const Ko = (0, o.forwardRef)((e, n) => {
  let { children: r, isOpen: i, hideArrow: l, isNonModal: a, state: s } = e,
    { styleProps: u } = tt(e),
    {
      popoverProps: c,
      arrowProps: d,
      underlayProps: p,
      placement: f,
    } = kr({ ...e, popoverRef: n, maxHeight: null }, s);
  return t(o).createElement(
    t(o).Fragment,
    null,
    !a && t(o).createElement(zo, { isTransparent: !0, ...p, isOpen: i }),
    t(o).createElement(
      "div",
      {
        ...u,
        ...c,
        style: { ...u.style, ...c.style },
        ref: n,
        className: Me(
          oo(No),
          "spectrum-Popover",
          `spectrum-Popover--${f}`,
          { "spectrum-Popover--withTip": !l, "is-open": i },
          Me(oo(Eo), "spectrum-Popover", "react-spectrum-Popover"),
          u.className
        ),
        role: "presentation",
        "data-testid": "popover",
      },
      !a && t(o).createElement(vr, { onDismiss: s.close }),
      r,
      l ? null : t(o).createElement(Uo, { arrowProps: d, direction: Do[f] }),
      t(o).createElement(vr, { onDismiss: s.close })
    )
  );
});
let Vo = Math.sqrt(2);
function Uo(e) {
  let [n, r] = (0, o.useState)(20),
    [i, l] = (0, o.useState)(1),
    a = (0, o.useRef)();
  y(() => {
    if (a.current) {
      let e = window
        .getComputedStyle(a.current)
        .getPropertyValue("--spectrum-popover-tip-size");
      "" !== e && r(parseInt(e, 10) / 2);
      let t = window
        .getComputedStyle(a.current)
        .getPropertyValue("--spectrum-popover-tip-borderWidth");
      "" !== t && l(parseInt(t, 10));
    }
  }, [a]);
  let s = "top" === e.direction || "bottom" === e.direction,
    u = "left" === e.direction || "top" === e.direction,
    c = i * Vo,
    d = c / 2,
    p = 2 * n + 2 * c,
    f = n + c,
    m = u ? f : 0,
    h = u ? d : f - d,
    g = p / 2,
    v = p - d,
    b = s
      ? ["M", d, m, "L", g, h, "L", v, m]
      : ["M", m, d, "L", h, g, "L", m, v],
    w = e.arrowProps;
  return t(o).createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/svg/2000",
      width: Math.ceil(s ? p : f),
      height: Math.ceil(s ? f : p),
      style: e.style,
      className: Me(oo(No), "spectrum-Popover-tip"),
      ref: a,
      ...w,
    },
    t(o).createElement("path", {
      className: Me(oo(No), "spectrum-Popover-tip-triangle"),
      d: b.join(" "),
    })
  );
}
let Bo = (0, o.forwardRef)(function (e, n) {
  let { children: r, state: i, ...l } = e,
    a = Oe(n);
  return t(o).createElement(
    co,
    { ...l, isOpen: i.isOpen },
    t(o).createElement(Ko, { ref: a, ...e }, r)
  );
});
var jo,
  $o,
  Ho,
  Wo,
  qo,
  Go,
  Qo = {};
ao(
  Qo,
  "spectrum-Modal",
  () => jo,
  (e) => (jo = e)
),
  ao(
    Qo,
    "is-open",
    () => $o,
    (e) => ($o = e)
  ),
  ao(
    Qo,
    "spectrum-Modal-wrapper",
    () => Ho,
    (e) => (Ho = e)
  ),
  ao(
    Qo,
    "spectrum-Modal--responsive",
    () => Wo,
    (e) => (Wo = e)
  ),
  ao(
    Qo,
    "spectrum-Modal--fullscreen",
    () => qo,
    (e) => (qo = e)
  ),
  ao(
    Qo,
    "spectrum-Modal--fullscreenTakeover",
    () => Go,
    (e) => (Go = e)
  ),
  (jo = "spectrum-Modal_f81956"),
  ($o = "is-open_f81956"),
  (Ho = "spectrum-Modal-wrapper_f81956"),
  (Wo = "spectrum-Modal--responsive_f81956"),
  (qo = "spectrum-Modal--fullscreen_f81956"),
  (Go = "spectrum-Modal--fullscreenTakeover_f81956");
let Yo = { fullscreen: "fullscreen", fullscreenTakeover: "fullscreenTakeover" },
  Xo = (0, o.forwardRef)(function (e, n) {
    let { type: r, children: i, state: l, isOpen: a } = e,
      s = Yo[r],
      { styleProps: u } = tt(e),
      { modalProps: c, underlayProps: d } = Pr(e, l, n),
      p = Me(
        oo(Qo),
        "spectrum-Modal-wrapper",
        Me(oo(Eo), "spectrum-Modal-wrapper", "react-spectrum-Modal-wrapper")
      ),
      f = Me(
        oo(Qo),
        "spectrum-Modal",
        { "is-open": a },
        Me(oo(Eo), "spectrum-Modal", "react-spectrum-Modal"),
        { [`spectrum-Modal--${s}`]: s },
        u.className
      ),
      m = { "--spectrum-visual-viewport-height": j().height + "px" };
    return t(o).createElement(
      t(o).Fragment,
      null,
      t(o).createElement(zo, { ...d, isOpen: a }),
      t(o).createElement(
        "div",
        { className: p, style: m },
        t(o).createElement(
          "div",
          { ...u, ...c, ref: n, className: f, "data-testid": "modal" },
          i
        )
      )
    );
  });
(0, o.forwardRef)(function (e, n) {
  let { children: r, state: i, ...l } = e,
    a = Oe(n);
  return t(o).createElement(
    co,
    { ...l, isOpen: i.isOpen },
    t(o).createElement(Xo, { ...e, ref: a }, r)
  );
});
var Zo,
  Jo,
  ea,
  ta,
  na = {};
ao(
  na,
  "spectrum-Tray",
  () => Zo,
  (e) => (Zo = e)
),
  ao(
    na,
    "is-open",
    () => Jo,
    (e) => (Jo = e)
  ),
  ao(
    na,
    "spectrum-Tray-wrapper",
    () => ea,
    (e) => (ea = e)
  ),
  ao(
    na,
    "spectrum-Tray--fixedHeight",
    () => ta,
    (e) => (ta = e)
  ),
  (Zo = "spectrum-Tray_23bf66"),
  (Jo = "is-open_23bf66"),
  (ea = "spectrum-Tray-wrapper_23bf66"),
  (ta = "spectrum-Tray--fixedHeight_23bf66");
let ra = (0, o.forwardRef)(function (e, n) {
    let { children: r, isOpen: i, isFixedHeight: l, state: a } = e,
      { styleProps: s } = tt(e),
      { modalProps: u, underlayProps: c } = Pr(
        { ...e, isDismissable: !0 },
        a,
        n
      ),
      d = { "--spectrum-visual-viewport-height": j().height + "px" },
      p = Me(oo(na), "spectrum-Tray-wrapper"),
      f = Me(
        oo(na),
        "spectrum-Tray",
        { "is-open": i, "spectrum-Tray--fixedHeight": l },
        Me(oo(Eo), "spectrum-Tray", "react-spectrum-Tray"),
        s.className
      );
    return t(o).createElement(
      t(o).Fragment,
      null,
      t(o).createElement(zo, { ...c, isOpen: i }),
      t(o).createElement(
        "div",
        { className: p, style: d },
        t(o).createElement(
          "div",
          { ...s, ...u, className: f, ref: n, "data-testid": "tray" },
          t(o).createElement(vr, { onDismiss: a.close }),
          r,
          t(o).createElement(vr, { onDismiss: a.close })
        )
      )
    );
  }),
  ia = (0, o.forwardRef)(function (e, n) {
    let { children: r, state: i, ...l } = e,
      a = Oe(n);
    return t(o).createElement(
      co,
      { ...l, isOpen: i.isOpen },
      t(o).createElement(ra, { ...e, ref: a }, r)
    );
  });
(o = l("acw62")), (o = l("acw62"));
function la(e) {
  return Y() || X() ? e.altKey : e.ctrlKey;
}
function oa(e) {
  return Y() ? e.metaKey : e.ctrlKey;
}
function aa(e) {
  let { keyboardDelegate: t, selectionManager: n, onTypeSelect: r } = e,
    i = (0, o.useRef)({ search: "", timeout: null }).current;
  return {
    typeSelectProps: {
      onKeyDownCapture: t.getKeyForSearch
        ? (e) => {
            let l = (function (e) {
              return 1 !== e.length && /^[A-Z]/i.test(e) ? "" : e;
            })(e.key);
            if (!l || e.ctrlKey || e.metaKey) return;
            " " === l &&
              i.search.trim().length > 0 &&
              (e.preventDefault(),
              "continuePropagation" in e || e.stopPropagation()),
              (i.search += l);
            let o = t.getKeyForSearch(i.search, n.focusedKey);
            null == o && (o = t.getKeyForSearch(i.search)),
              null != o && (n.setFocusedKey(o), r && r(o)),
              clearTimeout(i.timeout),
              (i.timeout = setTimeout(() => {
                i.search = "";
              }, 1e3));
          }
        : null,
    },
  };
}
function sa(e) {
  let {
      selectionManager: t,
      keyboardDelegate: n,
      ref: r,
      autoFocus: i = !1,
      shouldFocusWrap: l = !1,
      disallowEmptySelection: a = !1,
      disallowSelectAll: s = !1,
      selectOnFocus: u = "replace" === t.selectionBehavior,
      disallowTypeAhead: c = !1,
      shouldUseVirtualFocus: d,
      allowsTabNavigation: p = !1,
      isVirtualized: f,
      scrollRef: m = r,
    } = e,
    { direction: h } = Se(),
    g = (0, o.useRef)({ top: 0, left: 0 });
  J(
    m,
    "scroll",
    f
      ? null
      : () => {
          g.current = { top: m.current.scrollTop, left: m.current.scrollLeft };
        }
  );
  const y = (0, o.useRef)(i);
  (0, o.useEffect)(() => {
    if (y.current) {
      let e = null;
      "first" === i && (e = n.getFirstKey()),
        "last" === i && (e = n.getLastKey());
      let l = t.selectedKeys;
      l.size && (e = l.values().next().value),
        t.setFocused(!0),
        t.setFocusedKey(e),
        null != e || d || an(r.current);
    }
    y.current = !1;
  }, []),
    (0, o.useEffect)(() => {
      if (!f && t.focusedKey && (null == m ? void 0 : m.current)) {
        let e = m.current.querySelector(`[data-key="${t.focusedKey}"]`);
        e && ee(m.current, e);
      }
    }, [f, m, t.focusedKey]);
  let v,
    b = {
      onKeyDown: (e) => {
        if (
          (e.altKey && "Tab" === e.key && e.preventDefault(),
          !r.current.contains(e.target))
        )
          return;
        const i = (n, r) => {
          null != n &&
            (t.setFocusedKey(n, r),
            e.shiftKey && "multiple" === t.selectionMode
              ? t.extendSelection(n)
              : u && !la(e) && t.replaceSelection(n));
        };
        switch (e.key) {
          case "ArrowDown":
            if (n.getKeyBelow) {
              var o, c;
              e.preventDefault();
              let r =
                null != t.focusedKey
                  ? n.getKeyBelow(t.focusedKey)
                  : null === (o = n.getFirstKey) || void 0 === o
                  ? void 0
                  : o.call(n);
              null == r &&
                l &&
                (r =
                  null === (c = n.getFirstKey) || void 0 === c
                    ? void 0
                    : c.call(n, t.focusedKey)),
                i(r);
            }
            break;
          case "ArrowUp":
            if (n.getKeyAbove) {
              var d, f;
              e.preventDefault();
              let r =
                null != t.focusedKey
                  ? n.getKeyAbove(t.focusedKey)
                  : null === (d = n.getLastKey) || void 0 === d
                  ? void 0
                  : d.call(n);
              null == r &&
                l &&
                (r =
                  null === (f = n.getLastKey) || void 0 === f
                    ? void 0
                    : f.call(n, t.focusedKey)),
                i(r);
            }
            break;
          case "ArrowLeft":
            if (n.getKeyLeftOf) {
              e.preventDefault(),
                i(n.getKeyLeftOf(t.focusedKey), "rtl" === h ? "first" : "last");
            }
            break;
          case "ArrowRight":
            if (n.getKeyRightOf) {
              e.preventDefault(),
                i(
                  n.getKeyRightOf(t.focusedKey),
                  "rtl" === h ? "last" : "first"
                );
            }
            break;
          case "Home":
            if (n.getFirstKey) {
              e.preventDefault();
              let r = n.getFirstKey(t.focusedKey, oa(e));
              t.setFocusedKey(r),
                oa(e) && e.shiftKey && "multiple" === t.selectionMode
                  ? t.extendSelection(r)
                  : u && t.replaceSelection(r);
            }
            break;
          case "End":
            if (n.getLastKey) {
              e.preventDefault();
              let r = n.getLastKey(t.focusedKey, oa(e));
              t.setFocusedKey(r),
                oa(e) && e.shiftKey && "multiple" === t.selectionMode
                  ? t.extendSelection(r)
                  : u && t.replaceSelection(r);
            }
            break;
          case "PageDown":
            if (n.getKeyPageBelow) {
              e.preventDefault(), i(n.getKeyPageBelow(t.focusedKey));
            }
            break;
          case "PageUp":
            if (n.getKeyPageAbove) {
              e.preventDefault(), i(n.getKeyPageAbove(t.focusedKey));
            }
            break;
          case "a":
            oa(e) &&
              "multiple" === t.selectionMode &&
              !0 !== s &&
              (e.preventDefault(), t.selectAll());
            break;
          case "Escape":
            e.preventDefault(), a || t.clearSelection();
            break;
          case "Tab":
            if (!p) {
              if (e.shiftKey) r.current.focus();
              else {
                let e,
                  t,
                  n = Sn(r.current, { tabbable: !0 });
                do {
                  (t = n.lastChild()), t && (e = t);
                } while (t);
                e && !e.contains(document.activeElement) && I(e);
              }
              break;
            }
        }
      },
      onFocus: (e) => {
        if (t.isFocused) e.currentTarget.contains(e.target) || t.setFocused(!1);
        else if (e.currentTarget.contains(e.target))
          if ((t.setFocused(!0), null == t.focusedKey)) {
            let l = (e) => {
                null != e && (t.setFocusedKey(e), u && t.replaceSelection(e));
              },
              o = e.relatedTarget;
            var r, i;
            o &&
            e.currentTarget.compareDocumentPosition(o) &
              Node.DOCUMENT_POSITION_FOLLOWING
              ? l(
                  null !== (r = t.lastSelectedKey) && void 0 !== r
                    ? r
                    : n.getLastKey()
                )
              : l(
                  null !== (i = t.firstSelectedKey) && void 0 !== i
                    ? i
                    : n.getFirstKey()
                );
          } else if (!f) {
            (m.current.scrollTop = g.current.top),
              (m.current.scrollLeft = g.current.left);
            let e = m.current.querySelector(`[data-key="${t.focusedKey}"]`);
            e && (I(e), ee(m.current, e));
          }
      },
      onBlur: (e) => {
        e.currentTarget.contains(e.relatedTarget) || t.setFocused(!1);
      },
      onMouseDown(e) {
        m.current === e.target && e.preventDefault();
      },
    },
    { typeSelectProps: w } = aa({ keyboardDelegate: n, selectionManager: t });
  return (
    c || (b = x(w, b)),
    d || (v = null == t.focusedKey ? 0 : -1),
    { collectionProps: { ...b, tabIndex: v } }
  );
}
function ua(e) {
  let {
      selectionManager: t,
      key: n,
      ref: r,
      shouldSelectOnPressUp: i,
      isVirtualized: l,
      shouldUseVirtualFocus: a,
      focus: s,
      isDisabled: u,
      onAction: c,
      allowsDifferentPressOrigin: d,
    } = e,
    p = (e) => {
      if ("keyboard" === e.pointerType && la(e)) t.toggleSelection(n);
      else {
        if ("none" === t.selectionMode) return;
        "single" === t.selectionMode
          ? t.isSelected(n) && !t.disallowEmptySelection
            ? t.toggleSelection(n)
            : t.replaceSelection(n)
          : e && e.shiftKey
          ? t.extendSelection(n)
          : "toggle" === t.selectionBehavior ||
            (e &&
              (oa(e) ||
                "touch" === e.pointerType ||
                "virtual" === e.pointerType))
          ? t.toggleSelection(n)
          : t.replaceSelection(n);
      }
    };
  (0, o.useEffect)(() => {
    n === t.focusedKey &&
      t.isFocused &&
      !a &&
      document.activeElement !== r.current &&
      (s ? s() : an(r.current));
  }, [r, n, t.focusedKey, t.childFocusStrategy, t.isFocused, a]),
    (u = u || t.isDisabled(n));
  let f = {};
  a || u
    ? u &&
      (f.onMouseDown = (e) => {
        e.preventDefault();
      })
    : (f = {
        tabIndex: n === t.focusedKey ? 0 : -1,
        onFocus(e) {
          e.target === r.current && t.setFocusedKey(n);
        },
      });
  let m = !u && t.canSelectItem(n),
    h = c && !u,
    g = h && ("replace" === t.selectionBehavior ? !m : t.isEmpty),
    y = h && m && "replace" === t.selectionBehavior,
    v = g || y,
    b = (0, o.useRef)(null),
    w = v && m,
    E = (0, o.useRef)(!1),
    k = (0, o.useRef)(!1),
    S = {};
  i
    ? ((S.onPressStart = (e) => {
        (b.current = e.pointerType),
          (E.current = w),
          "keyboard" !== e.pointerType || (v && !da()) || p(e);
      }),
      d
        ? ((S.onPressUp = (e) => {
            "keyboard" !== e.pointerType && p(e);
          }),
          (S.onPress = g ? () => c() : null))
        : (S.onPress = (e) => {
            if (g || (y && "mouse" !== e.pointerType)) {
              if ("keyboard" === e.pointerType && !ca()) return;
              c();
            } else "keyboard" !== e.pointerType && p(e);
          }))
    : ((S.onPressStart = (e) => {
        (b.current = e.pointerType),
          (E.current = w),
          (k.current = g),
          (("mouse" === e.pointerType && !g) ||
            ("keyboard" === e.pointerType && (!c || da()))) &&
            p(e);
      }),
      (S.onPress = (e) => {
        ("touch" === e.pointerType ||
          "pen" === e.pointerType ||
          "virtual" === e.pointerType ||
          ("keyboard" === e.pointerType && v && ca()) ||
          ("mouse" === e.pointerType && k.current)) &&
          (v ? c() : p(e));
      })),
    l || (f["data-key"] = n),
    (S.preventFocusOnPress = a);
  let { pressProps: P, isPressed: T } = gt(S),
    _ = y
      ? (e) => {
          "mouse" === b.current &&
            (e.stopPropagation(), e.preventDefault(), c());
        }
      : void 0,
    { longPressProps: C } = on({
      isDisabled: !w,
      onLongPress(e) {
        "touch" === e.pointerType && (p(e), t.setSelectionBehavior("toggle"));
      },
    });
  return {
    itemProps: x(f, m || g ? P : {}, w ? C : {}, {
      onDoubleClick: _,
      onDragStartCapture: (e) => {
        "touch" === b.current && E.current && e.preventDefault();
      },
    }),
    isPressed: T,
    isSelected: t.isSelected(n),
    isDisabled: u,
    allowsSelection: m,
    hasAction: v,
  };
}
function ca() {
  let e = window.event;
  return "Enter" === (null == e ? void 0 : e.key);
}
function da() {
  let e = window.event;
  return (
    " " === (null == e ? void 0 : e.key) ||
    "Space" === (null == e ? void 0 : e.code)
  );
}
class pa {
  getKeyBelow(e) {
    for (e = this.collection.getKeyAfter(e); null != e; ) {
      if (
        "item" === this.collection.getItem(e).type &&
        !this.disabledKeys.has(e)
      )
        return e;
      e = this.collection.getKeyAfter(e);
    }
  }
  getKeyAbove(e) {
    for (e = this.collection.getKeyBefore(e); null != e; ) {
      if (
        "item" === this.collection.getItem(e).type &&
        !this.disabledKeys.has(e)
      )
        return e;
      e = this.collection.getKeyBefore(e);
    }
  }
  getFirstKey() {
    let e = this.collection.getFirstKey();
    for (; null != e; ) {
      if (
        "item" === this.collection.getItem(e).type &&
        !this.disabledKeys.has(e)
      )
        return e;
      e = this.collection.getKeyAfter(e);
    }
  }
  getLastKey() {
    let e = this.collection.getLastKey();
    for (; null != e; ) {
      if (
        "item" === this.collection.getItem(e).type &&
        !this.disabledKeys.has(e)
      )
        return e;
      e = this.collection.getKeyBefore(e);
    }
  }
  getItem(e) {
    return this.ref.current.querySelector(`[data-key="${e}"]`);
  }
  getKeyPageAbove(e) {
    let t = this.ref.current,
      n = this.getItem(e);
    if (!n) return null;
    let r = Math.max(0, n.offsetTop + n.offsetHeight - t.offsetHeight);
    for (; n && n.offsetTop > r; )
      (e = this.getKeyAbove(e)), (n = this.getItem(e));
    return e;
  }
  getKeyPageBelow(e) {
    let t = this.ref.current,
      n = this.getItem(e);
    if (!n) return null;
    let r = Math.min(
      t.scrollHeight,
      n.offsetTop - n.offsetHeight + t.offsetHeight
    );
    for (; n && n.offsetTop < r; )
      (e = this.getKeyBelow(e)), (n = this.getItem(e));
    return e;
  }
  getKeyForSearch(e, t) {
    if (!this.collator) return null;
    let n = this.collection,
      r = t || this.getFirstKey();
    for (; null != r; ) {
      let t = n.getItem(r),
        i = t.textValue.slice(0, e.length);
      if (t.textValue && 0 === this.collator.compare(i, e)) return r;
      r = this.getKeyBelow(r);
    }
    return null;
  }
  constructor(e, t, n, r) {
    (this.collection = e),
      (this.disabledKeys = t),
      (this.ref = n),
      (this.collator = r);
  }
}
function fa(e) {
  let {
      selectionManager: t,
      collection: n,
      disabledKeys: r,
      ref: i,
      keyboardDelegate: l,
      autoFocus: a,
      shouldFocusWrap: s,
      isVirtualized: u,
      disallowEmptySelection: c,
      selectOnFocus: d = "replace" === t.selectionBehavior,
      disallowTypeAhead: p,
      shouldUseVirtualFocus: f,
      allowsTabNavigation: m,
    } = e,
    h = Ce({ usage: "search", sensitivity: "base" }),
    g = t.disabledBehavior,
    y = (0, o.useMemo)(
      () => l || new pa(n, "selection" === g ? new Set() : r, i, h),
      [l, n, r, i, h, g]
    ),
    { collectionProps: v } = sa({
      ref: i,
      selectionManager: t,
      keyboardDelegate: y,
      autoFocus: a,
      shouldFocusWrap: s,
      disallowEmptySelection: c,
      selectOnFocus: d,
      disallowTypeAhead: p,
      shouldUseVirtualFocus: f,
      allowsTabNavigation: m,
      isVirtualized: u,
      scrollRef: i,
    });
  return { listProps: v };
}
o = l("acw62");
function ma(e) {
  return null;
}
function ha(e) {
  return null != e.hasChildItems
    ? e.hasChildItems
    : !!e.childItems || !!(e.title && t(o).Children.count(e.children) > 0);
}
ma.getCollectionNode = function* (e, n) {
  let { childItems: r, title: i, children: l } = e,
    a = e.title || e.children,
    s = e.textValue || ("string" == typeof a ? a : "") || e["aria-label"] || "";
  s ||
    (null == n ? void 0 : n.suppressTextValueWarning) ||
    console.warn(
      "<Item> with non-plain text contents is unsupported by type to select for accessibility. Please add a `textValue` prop."
    ),
    yield {
      type: "item",
      props: e,
      rendered: a,
      textValue: s,
      "aria-label": e["aria-label"],
      hasChildNodes: ha(e),
      *childNodes() {
        if (r) for (let e of r) yield { type: "item", value: e };
        else if (i) {
          let e = [];
          t(o).Children.forEach(l, (t) => {
            e.push({ type: "item", element: t });
          }),
            yield* e;
        }
      },
    };
};
let ga = ma;
function ya(e) {
  return null;
}
ya.getCollectionNode = function* (e) {
  let { children: n, title: r, items: i } = e;
  yield {
    type: "section",
    props: e,
    hasChildNodes: !0,
    rendered: r,
    "aria-label": e["aria-label"],
    *childNodes() {
      if ("function" == typeof n) {
        if (!i)
          throw new Error(
            "props.children was a function but props.items is missing"
          );
        for (let e of i) yield { type: "item", value: e, renderer: n };
      } else {
        let e = [];
        t(o).Children.forEach(n, (t) => {
          e.push({ type: "item", element: t });
        }),
          yield* e;
      }
    },
  };
};
class va {
  build(e, t) {
    return (this.context = t), ba(() => this.iterateCollection(e));
  }
  *iterateCollection(e) {
    let { children: n, items: r } = e;
    if ("function" == typeof n) {
      if (!r)
        throw new Error(
          "props.children was a function but props.items is missing"
        );
      for (let t of e.items)
        yield* this.getFullNode({ value: t }, { renderer: n });
    } else {
      let e = [];
      t(o).Children.forEach(n, (t) => {
        e.push(t);
      });
      let r = 0;
      for (let t of e) {
        let e = this.getFullNode({ element: t, index: r }, {});
        for (let t of e) r++, yield t;
      }
    }
  }
  getKey(e, t, n, r) {
    if (null != e.key) return e.key;
    if ("cell" === t.type && null != t.key) return `${r}${t.key}`;
    let i = t.value;
    if (null != i) {
      var l;
      let e = null !== (l = i.key) && void 0 !== l ? l : i.id;
      if (null == e) throw new Error("No key found for item");
      return e;
    }
    return r ? `${r}.${t.index}` : `$.${t.index}`;
  }
  getChildState(e, t) {
    return { renderer: t.renderer || e.renderer };
  }
  *getFullNode(e, n, r, i) {
    let l = e.element;
    if (!l && e.value && n && n.renderer) {
      let t = this.cache.get(e.value);
      if (t && (!t.shouldInvalidate || !t.shouldInvalidate(this.context)))
        return (
          (t.index = e.index), (t.parentKey = i ? i.key : null), void (yield t)
        );
      l = n.renderer(e.value);
    }
    if (t(o).isValidElement(l)) {
      let t = l.type;
      if ("function" != typeof t && "function" != typeof t.getCollectionNode) {
        let e = "function" == typeof l.type ? l.type.name : l.type;
        throw new Error(`Unknown element <${e}> in collection.`);
      }
      let o = t.getCollectionNode(l.props, this.context),
        a = e.index,
        s = o.next();
      for (; !s.done && s.value; ) {
        let t = s.value;
        e.index = a;
        let u = t.key;
        u || (u = t.element ? null : this.getKey(l, e, n, r));
        let c = [
          ...this.getFullNode(
            { ...t, key: u, index: a, wrapper: wa(e.wrapper, t.wrapper) },
            this.getChildState(n, t),
            r ? `${r}${l.key}` : l.key,
            i
          ),
        ];
        for (let n of c) {
          if (
            ((n.value = t.value || e.value),
            n.value && this.cache.set(n.value, n),
            e.type && n.type !== e.type)
          )
            throw new Error(
              `Unsupported type <${Ea(n.type)}> in <${Ea(i.type)}>. Only <${Ea(
                e.type
              )}> is supported.`
            );
          a++, yield n;
        }
        s = o.next(c);
      }
      return;
    }
    if (null == e.key) return;
    let a = this,
      s = {
        type: e.type,
        props: e.props,
        key: e.key,
        parentKey: i ? i.key : null,
        value: e.value,
        level: i ? i.level + 1 : 0,
        index: e.index,
        rendered: e.rendered,
        textValue: e.textValue,
        "aria-label": e["aria-label"],
        wrapper: e.wrapper,
        shouldInvalidate: e.shouldInvalidate,
        hasChildNodes: e.hasChildNodes,
        childNodes: ba(function* () {
          if (!e.hasChildNodes) return;
          let t = 0;
          for (let r of e.childNodes()) {
            null != r.key && (r.key = `${s.key}${r.key}`), (r.index = t);
            let e = a.getFullNode(r, a.getChildState(n, r), s.key, s);
            for (let n of e) t++, yield n;
          }
        }),
      };
    yield s;
  }
  constructor() {
    ae(this, "cache", new WeakMap());
  }
}
function ba(e) {
  let t = [],
    n = null;
  return {
    *[Symbol.iterator]() {
      for (let e of t) yield e;
      n || (n = e());
      for (let e of n) t.push(e), yield e;
    },
  };
}
function wa(e, t) {
  return e && t ? (n) => e(t(n)) : e || t || void 0;
}
function Ea(e) {
  return e[0].toUpperCase() + e.slice(1);
}
function ka(e, t, n, r = []) {
  let i = (0, o.useMemo)(() => new va(), []),
    l = (0, o.useRef)(null);
  return (0, o.useMemo)(() => {
    let r = i.build(e, n);
    return (l.current = t(r, l.current)), l.current;
  }, [i, e.children, e.items, n, ...r]);
}
const Sa = new WeakMap();
function xa(e) {
  let t = Sa.get(e);
  if (null != t) return t;
  t = 0;
  for (let n of e) "section" === n.type ? (t += xa(n.childNodes)) : t++;
  return Sa.set(e, t), t;
}
function Pa(e) {
  return e && e.__esModule ? e.default : e;
}
var Ta;
function _a(e, t, n) {
  let { type: r = "menu", isDisabled: i, trigger: l = "press" } = e,
    o = w(),
    { triggerProps: a, overlayProps: s } = ir({ type: r }, t, n),
    u = Pe(Pa(Ta)),
    { longPressProps: c } = on({
      isDisabled: i || "longPress" !== l,
      accessibilityDescription: u.format("longPressMessage"),
      onLongPressStart() {
        t.close();
      },
      onLongPress() {
        t.open("first");
      },
    }),
    d = {
      onPressStart(e) {
        "touch" === e.pointerType ||
          "keyboard" === e.pointerType ||
          i ||
          t.toggle("virtual" === e.pointerType ? "first" : null);
      },
      onPress(e) {
        "touch" !== e.pointerType || i || t.toggle();
      },
    };
  return (
    delete a.onPress,
    {
      menuTriggerProps: {
        ...a,
        ...("press" === l ? d : c),
        id: o,
        onKeyDown: (e) => {
          if (!i && ("longPress" !== l || e.altKey) && n && n.current)
            switch (e.key) {
              case "Enter":
              case " ":
                if ("longPress" === l) return;
              case "ArrowDown":
                "continuePropagation" in e || e.stopPropagation(),
                  e.preventDefault(),
                  t.toggle("first");
                break;
              case "ArrowUp":
                "continuePropagation" in e || e.stopPropagation(),
                  e.preventDefault(),
                  t.toggle("last");
            }
        },
      },
      menuProps: {
        ...s,
        "aria-labelledby": o,
        autoFocus: t.focusStrategy || !0,
        onClose: t.close,
      },
    }
  );
}
Ta = {
  "ar-AE": {
    longPressMessage: "اضغط مطولاً أو اضغط على Alt + السهم لأسفل لفتح القائمة",
  },
  "bg-BG": {
    longPressMessage:
      "Натиснете продължително или натиснете Alt+ стрелка надолу, за да отворите менюто",
  },
  "cs-CZ": {
    longPressMessage:
      "Dlouhým stiskem nebo stisknutím kláves Alt + šipka dolů otevřete nabídku",
  },
  "da-DK": {
    longPressMessage:
      "Langt tryk eller tryk på Alt + pil ned for at åbne menuen",
  },
  "de-DE": {
    longPressMessage:
      "Drücken Sie lange oder drücken Sie Alt + Nach-unten, um das Menü zu öffnen",
  },
  "el-GR": {
    longPressMessage:
      "Πιέστε παρατεταμένα ή πατήστε Alt + κάτω βέλος για να ανοίξετε το μενού",
  },
  "en-US": {
    longPressMessage: "Long press or press Alt + ArrowDown to open menu",
  },
  "es-ES": {
    longPressMessage:
      "Mantenga pulsado o pulse Alt + flecha abajo para abrir el menú",
  },
  "et-EE": {
    longPressMessage:
      "Menüü avamiseks vajutage pikalt või vajutage klahve Alt + allanool",
  },
  "fi-FI": {
    longPressMessage:
      "Avaa valikko painamalla pohjassa tai näppäinyhdistelmällä Alt + Alanuoli",
  },
  "fr-FR": {
    longPressMessage:
      "Appuyez de manière prolongée ou appuyez sur Alt + Flèche vers le bas pour ouvrir le menu.",
  },
  "he-IL": {
    longPressMessage:
      "לחץ לחיצה ארוכה או הקש Alt + ArrowDown כדי לפתוח את התפריט",
  },
  "hr-HR": {
    longPressMessage:
      "Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika",
  },
  "hu-HU": {
    longPressMessage:
      "Nyomja meg hosszan, vagy nyomja meg az Alt + lefele nyíl gombot a menü megnyitásához",
  },
  "it-IT": {
    longPressMessage:
      "Premere a lungo o premere Alt + Freccia giù per aprire il menu",
  },
  "ja-JP": { longPressMessage: "長押しまたは Alt+下矢印キーでメニューを開く" },
  "ko-KR": {
    longPressMessage: "길게 누르거나 Alt + 아래쪽 화살표를 눌러 메뉴 열기",
  },
  "lt-LT": {
    longPressMessage:
      "Norėdami atidaryti meniu, nuspaudę palaikykite arba paspauskite „Alt + ArrowDown“.",
  },
  "lv-LV": {
    longPressMessage:
      "Lai atvērtu izvēlni, turiet nospiestu vai nospiediet taustiņu kombināciju Alt + lejupvērstā bultiņa",
  },
  "nb-NO": {
    longPressMessage: "Langt trykk eller trykk Alt + PilNed for å åpne menyen",
  },
  "nl-NL": {
    longPressMessage:
      "Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen",
  },
  "pl-PL": {
    longPressMessage:
      "Naciśnij i przytrzymaj lub naciśnij klawisze Alt + Strzałka w dół, aby otworzyć menu",
  },
  "pt-BR": {
    longPressMessage:
      "Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu",
  },
  "pt-PT": {
    longPressMessage:
      "Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu",
  },
  "ro-RO": {
    longPressMessage:
      "Apăsați lung sau apăsați pe Alt + săgeată în jos pentru a deschide meniul",
  },
  "ru-RU": {
    longPressMessage:
      "Нажмите и удерживайте или нажмите Alt + Стрелка вниз, чтобы открыть меню",
  },
  "sk-SK": {
    longPressMessage:
      "Ponuku otvoríte dlhým stlačením alebo stlačením klávesu Alt + klávesu so šípkou nadol",
  },
  "sl-SI": {
    longPressMessage:
      "Za odprtje menija pritisnite in držite gumb ali pritisnite Alt+puščica navzdol",
  },
  "sr-SP": {
    longPressMessage:
      "Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni",
  },
  "sv-SE": {
    longPressMessage:
      "Håll nedtryckt eller tryck på Alt + pil nedåt för att öppna menyn",
  },
  "tr-TR": {
    longPressMessage:
      "Menüyü açmak için uzun basın veya Alt + Aşağı Ok tuşuna basın",
  },
  "uk-UA": {
    longPressMessage:
      "Довго або звичайно натисніть комбінацію клавіш Alt і стрілка вниз, щоб відкрити меню",
  },
  "zh-CN": { longPressMessage: "长按或按 Alt + 向下方向键以打开菜单" },
  "zh-TW": { longPressMessage: "長按或按 Alt+向下鍵以開啟功能表" },
};
const Ca = new WeakMap();
function Ia(e, t, n) {
  let { shouldFocusWrap: r = !0, ...i } = e;
  e["aria-label"] ||
    e["aria-labelledby"] ||
    console.warn(
      "An aria-label or aria-labelledby prop is required for accessibility."
    );
  let l = C(e, { labelable: !0 }),
    { listProps: o } = fa({
      ...i,
      ref: n,
      selectionManager: t.selectionManager,
      collection: t.collection,
      disabledKeys: t.disabledKeys,
      shouldFocusWrap: r,
    });
  return (
    Ca.set(t, { onClose: e.onClose, onAction: e.onAction }),
    { menuProps: x(l, { role: "menu", ...o }) }
  );
}
function Ma(e, t, n) {
  let { key: r, closeOnSelect: i, isVirtualized: l } = e;
  var o;
  let a =
    null !== (o = e.isDisabled) && void 0 !== o ? o : t.disabledKeys.has(r);
  var s;
  let u =
      null !== (s = e.isSelected) && void 0 !== s
        ? s
        : t.selectionManager.isSelected(r),
    c = t.selectionManager.focusedKey === r,
    d = Ca.get(t),
    p = e.onClose || d.onClose,
    f = e.onAction || d.onAction,
    m = "menuitem";
  "single" === t.selectionManager.selectionMode
    ? (m = "menuitemradio")
    : "multiple" === t.selectionManager.selectionMode &&
      (m = "menuitemcheckbox");
  let h = k(),
    g = k(),
    y = k(),
    v = {
      "aria-disabled": a,
      role: m,
      "aria-label": e["aria-label"],
      "aria-labelledby": h,
      "aria-describedby": [g, y].filter(Boolean).join(" ") || void 0,
    };
  "none" !== t.selectionManager.selectionMode && (v["aria-checked"] = u),
    l &&
      ((v["aria-posinset"] = t.collection.getItem(r).index),
      (v["aria-setsize"] = xa(t.collection)));
  let { itemProps: b } = ua({
      selectionManager: t.selectionManager,
      key: r,
      ref: n,
      shouldSelectOnPressUp: !0,
      allowsDifferentPressOrigin: !0,
    }),
    { pressProps: w, isPressed: E } = gt({
      onPressStart: (e) => {
        "keyboard" === e.pointerType && f && f(r);
      },
      onPressUp: (e) => {
        "keyboard" !== e.pointerType &&
          (f && f(r),
          p &&
            (null != i ? i : "multiple" !== t.selectionManager.selectionMode) &&
            p());
      },
      isDisabled: a,
    }),
    { hoverProps: S } = Jt({
      isDisabled: a,
      onHoverStart() {
        jt() ||
          (t.selectionManager.setFocused(!0),
          t.selectionManager.setFocusedKey(r));
      },
    });
  return {
    menuItemProps: {
      ...v,
      ...x(b, w, S, {
        onKeyDown: (e) => {
          if (!e.repeat)
            switch (e.key) {
              case " ":
                !a &&
                  "none" === t.selectionManager.selectionMode &&
                  !1 !== i &&
                  p &&
                  p();
                break;
              case "Enter":
                !a && !1 !== i && p && p();
            }
        },
      }),
    },
    labelProps: { id: h },
    descriptionProps: { id: g },
    keyboardShortcutProps: { id: y },
    isFocused: c,
    isSelected: u,
    isPressed: E,
    isDisabled: a,
  };
}
function La(e) {
  let { heading: t, "aria-label": n } = e,
    r = w();
  return {
    itemProps: { role: "presentation" },
    headingProps: t ? { id: r, "aria-hidden": !0 } : {},
    groupProps: {
      role: "group",
      "aria-label": n,
      "aria-labelledby": t ? r : void 0,
    },
  };
}
function Na(e) {
  let [t, n] = s(e.isOpen, e.defaultOpen || !1, e.onOpenChange);
  return {
    isOpen: t,
    setOpen: n,
    open() {
      n(!0);
    },
    close() {
      n(!1);
    },
    toggle() {
      n(!t);
    },
  };
}
o = l("acw62");
function Ra(e) {
  let t = Na(e),
    [n, r] = (0, o.useState)(null);
  return {
    focusStrategy: n,
    ...t,
    open(e = null) {
      r(e), t.open();
    },
    toggle(e = null) {
      r(e), t.toggle();
    },
  };
}
(o = l("acw62")), (o = l("acw62"));
class Oa extends Set {
  constructor(e, t, n) {
    super(e),
      e instanceof Oa
        ? ((this.anchorKey = t || e.anchorKey),
          (this.currentKey = n || e.currentKey))
        : ((this.anchorKey = t), (this.currentKey = n));
  }
}
function Aa(e) {
  let {
      selectionMode: t = "none",
      disallowEmptySelection: n,
      allowDuplicateSelectionEvents: r,
      selectionBehavior: i = "toggle",
      disabledBehavior: l = "all",
    } = e,
    a = (0, o.useRef)(!1),
    [, u] = (0, o.useState)(!1),
    c = (0, o.useRef)(null),
    d = (0, o.useRef)(null),
    [, p] = (0, o.useState)(null),
    f = (0, o.useMemo)(() => Fa(e.selectedKeys), [e.selectedKeys]),
    m = (0, o.useMemo)(
      () => Fa(e.defaultSelectedKeys, new Oa()),
      [e.defaultSelectedKeys]
    ),
    [h, g] = s(f, m, e.onSelectionChange),
    y = (0, o.useMemo)(
      () => (e.disabledKeys ? new Set(e.disabledKeys) : new Set()),
      [e.disabledKeys]
    ),
    [v, b] = (0, o.useState)(i);
  "replace" === i &&
    "toggle" === v &&
    "object" == typeof h &&
    0 === h.size &&
    b("replace");
  let w = (0, o.useRef)(i);
  return (
    (0, o.useEffect)(() => {
      i !== w.current && (b(i), (w.current = i));
    }, [i]),
    {
      selectionMode: t,
      disallowEmptySelection: n,
      selectionBehavior: v,
      setSelectionBehavior: b,
      get isFocused() {
        return a.current;
      },
      setFocused(e) {
        (a.current = e), u(e);
      },
      get focusedKey() {
        return c.current;
      },
      get childFocusStrategy() {
        return d.current;
      },
      setFocusedKey(e, t = "first") {
        (c.current = e), (d.current = t), p(e);
      },
      selectedKeys: h,
      setSelectedKeys(e) {
        (!r &&
          (function (e, t) {
            if (e.size !== t.size) return !1;
            for (let n of e) if (!t.has(n)) return !1;
            return !0;
          })(e, h)) ||
          g(e);
      },
      disabledKeys: y,
      disabledBehavior: l,
    }
  );
}
function Fa(e, t) {
  return e ? ("all" === e ? "all" : new Oa(e)) : t;
}
class za {
  get selectionMode() {
    return this.state.selectionMode;
  }
  get disallowEmptySelection() {
    return this.state.disallowEmptySelection;
  }
  get selectionBehavior() {
    return this.state.selectionBehavior;
  }
  setSelectionBehavior(e) {
    this.state.setSelectionBehavior(e);
  }
  get isFocused() {
    return this.state.isFocused;
  }
  setFocused(e) {
    this.state.setFocused(e);
  }
  get focusedKey() {
    return this.state.focusedKey;
  }
  get childFocusStrategy() {
    return this.state.childFocusStrategy;
  }
  setFocusedKey(e, t) {
    (null == e || this.collection.getItem(e)) && this.state.setFocusedKey(e, t);
  }
  get selectedKeys() {
    return "all" === this.state.selectedKeys
      ? new Set(this.getSelectAllKeys())
      : this.state.selectedKeys;
  }
  get rawSelection() {
    return this.state.selectedKeys;
  }
  isSelected(e) {
    return (
      "none" !== this.state.selectionMode &&
      ((e = this.getKey(e)),
      "all" === this.state.selectedKeys
        ? this.canSelectItem(e)
        : this.state.selectedKeys.has(e))
    );
  }
  get isEmpty() {
    return (
      "all" !== this.state.selectedKeys && 0 === this.state.selectedKeys.size
    );
  }
  get isSelectAll() {
    if (this.isEmpty) return !1;
    if ("all" === this.state.selectedKeys) return !0;
    if (null != this._isSelectAll) return this._isSelectAll;
    let e = this.getSelectAllKeys(),
      t = this.state.selectedKeys;
    return (this._isSelectAll = e.every((e) => t.has(e))), this._isSelectAll;
  }
  get firstSelectedKey() {
    let e = null;
    for (let t of this.state.selectedKeys) {
      let n = this.collection.getItem(t);
      (!e || (null == n ? void 0 : n.index) < e.index) && (e = n);
    }
    return null == e ? void 0 : e.key;
  }
  get lastSelectedKey() {
    let e = null;
    for (let t of this.state.selectedKeys) {
      let n = this.collection.getItem(t);
      (!e || (null == n ? void 0 : n.index) > e.index) && (e = n);
    }
    return null == e ? void 0 : e.key;
  }
  get disabledKeys() {
    return this.state.disabledKeys;
  }
  get disabledBehavior() {
    return this.state.disabledBehavior;
  }
  extendSelection(e) {
    if ("none" === this.selectionMode) return;
    if ("single" === this.selectionMode) return void this.replaceSelection(e);
    let t;
    if (((e = this.getKey(e)), "all" === this.state.selectedKeys))
      t = new Oa([e], e, e);
    else {
      let n = this.state.selectedKeys,
        r = n.anchorKey || e;
      t = new Oa(n, r, e);
      for (let i of this.getKeyRange(r, n.currentKey || e)) t.delete(i);
      for (let n of this.getKeyRange(e, r)) this.canSelectItem(n) && t.add(n);
    }
    this.state.setSelectedKeys(t);
  }
  getKeyRange(e, t) {
    let n = this.collection.getItem(e),
      r = this.collection.getItem(t);
    return n && r
      ? n.index <= r.index
        ? this.getKeyRangeInternal(e, t)
        : this.getKeyRangeInternal(t, e)
      : [];
  }
  getKeyRangeInternal(e, t) {
    let n = [],
      r = e;
    for (; r; ) {
      let e = this.collection.getItem(r);
      if (
        (((e && "item" === e.type) ||
          ("cell" === e.type && this.allowsCellSelection)) &&
          n.push(r),
        r === t)
      )
        return n;
      r = this.collection.getKeyAfter(r);
    }
    return [];
  }
  getKey(e) {
    let t = this.collection.getItem(e);
    if (!t) return e;
    if ("cell" === t.type && this.allowsCellSelection) return e;
    for (; "item" !== t.type && null != t.parentKey; )
      t = this.collection.getItem(t.parentKey);
    return t && "item" === t.type ? t.key : null;
  }
  toggleSelection(e) {
    if ("none" === this.selectionMode) return;
    if ("single" === this.selectionMode && !this.isSelected(e))
      return void this.replaceSelection(e);
    if (null == (e = this.getKey(e))) return;
    let t = new Oa(
      "all" === this.state.selectedKeys
        ? this.getSelectAllKeys()
        : this.state.selectedKeys
    );
    t.has(e)
      ? t.delete(e)
      : this.canSelectItem(e) &&
        (t.add(e), (t.anchorKey = e), (t.currentKey = e)),
      (this.disallowEmptySelection && 0 === t.size) ||
        this.state.setSelectedKeys(t);
  }
  replaceSelection(e) {
    if ("none" === this.selectionMode) return;
    if (null == (e = this.getKey(e))) return;
    let t = this.canSelectItem(e) ? new Oa([e], e, e) : new Oa();
    this.state.setSelectedKeys(t);
  }
  setSelectedKeys(e) {
    if ("none" === this.selectionMode) return;
    let t = new Oa();
    for (let n of e)
      if (
        ((n = this.getKey(n)),
        null != n && (t.add(n), "single" === this.selectionMode))
      )
        break;
    this.state.setSelectedKeys(t);
  }
  getSelectAllKeys() {
    let e = [],
      t = (n) => {
        for (; n; ) {
          if (this.canSelectItem(n)) {
            let r = this.collection.getItem(n);
            "item" === r.type && e.push(n),
              r.hasChildNodes &&
                (this.allowsCellSelection || "item" !== r.type) &&
                t([...r.childNodes][0].key);
          }
          n = this.collection.getKeyAfter(n);
        }
      };
    return t(this.collection.getFirstKey()), e;
  }
  selectAll() {
    "multiple" === this.selectionMode && this.state.setSelectedKeys("all");
  }
  clearSelection() {
    !this.disallowEmptySelection &&
      ("all" === this.state.selectedKeys || this.state.selectedKeys.size > 0) &&
      this.state.setSelectedKeys(new Oa());
  }
  toggleSelectAll() {
    this.isSelectAll ? this.clearSelection() : this.selectAll();
  }
  select(e, t) {
    "none" !== this.selectionMode &&
      ("single" === this.selectionMode
        ? this.isSelected(e) && !this.disallowEmptySelection
          ? this.toggleSelection(e)
          : this.replaceSelection(e)
        : "toggle" === this.selectionBehavior ||
          (t && ("touch" === t.pointerType || "virtual" === t.pointerType))
        ? this.toggleSelection(e)
        : this.replaceSelection(e));
  }
  isSelectionEqual(e) {
    if (e === this.state.selectedKeys) return !0;
    let t = this.selectedKeys;
    if (e.size !== t.size) return !1;
    for (let n of e) if (!t.has(n)) return !1;
    for (let n of t) if (!e.has(n)) return !1;
    return !0;
  }
  canSelectItem(e) {
    if ("none" === this.state.selectionMode || this.state.disabledKeys.has(e))
      return !1;
    let t = this.collection.getItem(e);
    return !(!t || ("cell" === t.type && !this.allowsCellSelection));
  }
  isDisabled(e) {
    return (
      this.state.disabledKeys.has(e) && "all" === this.state.disabledBehavior
    );
  }
  constructor(e, t, n) {
    var r;
    (this.collection = e),
      (this.state = t),
      (this.allowsCellSelection =
        null !== (r = null == n ? void 0 : n.allowsCellSelection) &&
        void 0 !== r &&
        r),
      (this._isSelectAll = null);
  }
}
let Da = Symbol.iterator;
class Ka {
  *[Da]() {
    yield* this.iterable;
  }
  get size() {
    return this.keyMap.size;
  }
  getKeys() {
    return this.keyMap.keys();
  }
  getKeyBefore(e) {
    let t = this.keyMap.get(e);
    return t ? t.prevKey : null;
  }
  getKeyAfter(e) {
    let t = this.keyMap.get(e);
    return t ? t.nextKey : null;
  }
  getFirstKey() {
    return this.firstKey;
  }
  getLastKey() {
    return this.lastKey;
  }
  getItem(e) {
    return this.keyMap.get(e);
  }
  at(e) {
    const t = [...this.getKeys()];
    return this.getItem(t[e]);
  }
  constructor(e, { expandedKeys: t } = {}) {
    ae(this, "keyMap", new Map()), (this.iterable = e), (t = t || new Set());
    let n,
      r = (e) => {
        if (
          (this.keyMap.set(e.key, e),
          e.childNodes && ("section" === e.type || t.has(e.key)))
        )
          for (let t of e.childNodes) r(t);
      };
    for (let t of e) r(t);
    let i = 0;
    for (let [e, t] of this.keyMap)
      n
        ? ((n.nextKey = e), (t.prevKey = n.key))
        : ((this.firstKey = e), (t.prevKey = void 0)),
        "item" === t.type && (t.index = i++),
        (n = t),
        (n.nextKey = void 0);
    this.lastKey = null == n ? void 0 : n.key;
  }
}
function Va(e) {
  let [t, n] = s(
      e.expandedKeys ? new Set(e.expandedKeys) : void 0,
      e.defaultExpandedKeys ? new Set(e.defaultExpandedKeys) : new Set(),
      e.onExpandedChange
    ),
    r = Aa(e),
    i = (0, o.useMemo)(
      () => (e.disabledKeys ? new Set(e.disabledKeys) : new Set()),
      [e.disabledKeys]
    ),
    l = ka(e, (e) => new Ka(e, { expandedKeys: t }), null, [t]);
  (0, o.useEffect)(() => {
    null == r.focusedKey || l.getItem(r.focusedKey) || r.setFocusedKey(null);
  }, [l, r.focusedKey]);
  return {
    collection: l,
    expandedKeys: t,
    disabledKeys: i,
    toggleKey: (e) => {
      n(
        (function (e, t) {
          let n = new Set(e);
          n.has(t) ? n.delete(t) : n.add(t);
          return n;
        })(t, e)
      );
    },
    selectionManager: new za(l, r),
  };
}
var Ua;
Ua = function (e) {
  return qa.default.createElement(
    Gi,
    e,
    qa.default.createElement(Ba.CheckmarkMedium, null)
  );
};
var Ba = {};
Object.defineProperty(Ba, "__esModule", { value: !0 }),
  (Ba.CheckmarkMedium = Wa);
var ja = (function (e) {
  return e && e.__esModule ? e : { default: e };
})(l("acw62"));
function $a() {
  return (
    ($a =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    $a.apply(this, arguments)
  );
}
function Ha(e, t) {
  if (null == e) return {};
  var n,
    r,
    i = (function (e, t) {
      if (null == e) return {};
      var n,
        r,
        i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++)
        (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (r = 0; r < l.length; r++)
      (n = l[r]),
        t.indexOf(n) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
  }
  return i;
}
function Wa(e) {
  var t = e.scale,
    n = void 0 === t ? "M" : t,
    r = Ha(e, ["scale"]);
  return ja.default.createElement(
    "svg",
    $a({}, r, r),
    "L" === n &&
      ja.default.createElement("path", {
        d: "M6 14a1 1 0 0 1-.789-.385l-4-5a1 1 0 1 1 1.577-1.23L6 11.376l7.213-8.99a1 1 0 1 1 1.576 1.23l-8 10a1 1 0 0 1-.789.384z",
      }),
    "M" === n &&
      ja.default.createElement("path", {
        d: "M4.5 10a1.022 1.022 0 0 1-.799-.384l-2.488-3a1 1 0 0 1 1.576-1.233L4.5 7.376l4.712-5.991a1 1 0 1 1 1.576 1.23l-5.51 7A.978.978 0 0 1 4.5 10z",
      })
  );
}
Wa.displayName = "CheckmarkMedium";
var qa = Br(l("acw62"));
o = l("acw62");
function Ga(e) {
  return e && e.__esModule ? e.default : e;
}
function Qa(e, t, n, r) {
  Object.defineProperty(e, t, {
    get: n,
    set: r,
    enumerable: !0,
    configurable: !0,
  });
}
const Ya = {
  ...Ue,
  autoFlow: ["gridAutoFlow", nt],
  autoColumns: ["gridAutoColumns", Xa],
  autoRows: ["gridAutoRows", Xa],
  areas: [
    "gridTemplateAreas",
    function (e) {
      return e.map((e) => `"${e}"`).join("\n");
    },
  ],
  columns: ["gridTemplateColumns", Za],
  rows: ["gridTemplateRows", Za],
  gap: ["gap", Ge],
  rowGap: ["rowGap", Ge],
  columnGap: ["columnGap", Ge],
  justifyItems: ["justifyItems", nt],
  justifyContent: ["justifyContent", nt],
  alignItems: ["alignItems", nt],
  alignContent: ["alignContent", nt],
};
function Xa(e) {
  return /^max-content|min-content|minmax|auto|fit-content|repeat|subgrid/.test(
    e
  )
    ? e
    : Ge(e);
}
function Za(e) {
  return Array.isArray(e) ? e.map(Xa).join(" ") : Xa(e);
}
const Ja = (0, o.forwardRef)(function (e, n) {
  let { children: r, ...i } = e,
    { styleProps: l } = tt(i, Ya);
  l.style.display = "grid";
  let a = Oe(n);
  return t(o).createElement("div", { ...C(i), ...l, ref: a }, r);
});
var es,
  ts,
  ns,
  rs = {};
Qa(
  rs,
  "flex-container",
  () => es,
  (e) => (es = e)
),
  Qa(
    rs,
    "flex",
    () => ts,
    (e) => (ts = e)
  ),
  Qa(
    rs,
    "flex-gap",
    () => ns,
    (e) => (ns = e)
  ),
  (es = "flex-container_e15493"),
  (ts = "flex_e15493"),
  (ns = "flex-gap_e15493");
const is = {
  direction: ["flexDirection", nt],
  wrap: [
    "flexWrap",
    function (e) {
      return "boolean" == typeof e ? (e ? "wrap" : "nowrap") : e;
    },
  ],
  justifyContent: ["justifyContent", ls],
  alignItems: ["alignItems", ls],
  alignContent: ["alignContent", ls],
};
function ls(e) {
  return "start" === e ? "flex-start" : "end" === e ? "flex-end" : e;
}
let os = null;
const as = (0, o.forwardRef)(function (e, n) {
  let { children: r, ...i } = e,
    l = Ve(),
    a = (null == l ? void 0 : l.matchedBreakpoints) || ["base"],
    { styleProps: s } = tt(i),
    { styleProps: u } = tt(i, is),
    c = Oe(n),
    d = m();
  if (
    (e.gap || e.rowGap || e.columnGap) &&
    (d ||
      !(function () {
        if (null != os) return os;
        if ("undefined" == typeof document) return !1;
        var e = document.createElement("div");
        return (
          (e.style.display = "flex"),
          (e.style.flexDirection = "column"),
          (e.style.rowGap = "1px"),
          e.appendChild(document.createElement("div")),
          e.appendChild(document.createElement("div")),
          document.body.appendChild(e),
          (os = 1 === e.scrollHeight),
          e.parentNode.removeChild(e),
          os
        );
      })())
  ) {
    let n = {
      ...u.style,
      "--column-gap": null != e.columnGap ? Qe(e.columnGap, a) : void 0,
      "--row-gap": null != e.rowGap ? Qe(e.rowGap, a) : void 0,
      "--gap": null != e.gap ? Qe(e.gap, a) : void 0,
    };
    return t(o).createElement(
      "div",
      {
        ...C(i),
        ...s,
        className: Me(Ga(rs), "flex-container", s.className),
        ref: c,
      },
      t(o).createElement(
        "div",
        { className: Me(Ga(rs), "flex", "flex-gap"), style: n },
        r
      )
    );
  }
  let p = { ...s.style, ...u.style };
  return (
    null != e.gap && (p.gap = Qe(e.gap, a)),
    null != e.columnGap && (p.columnGap = Qe(e.columnGap, a)),
    null != e.rowGap && (p.rowGap = Qe(e.rowGap, a)),
    t(o).createElement(
      "div",
      { ...C(i), className: Me(Ga(rs), "flex", s.className), style: p, ref: c },
      r
    )
  );
});
function ss(e) {
  let t,
    n = C(e, { labelable: !0 });
  return (
    "vertical" === e.orientation && (t = "vertical"),
    "hr" !== e.elementType
      ? { separatorProps: { ...n, role: "separator", "aria-orientation": t } }
      : { separatorProps: n }
  );
}
var us;
us = function (e) {
  return fs.default.createElement(
    qi,
    e,
    fs.default.createElement(cs.A4uMore, null)
  );
};
var cs = {};
Object.defineProperty(cs, "__esModule", { value: !0 }),
  (cs.A4uMore = function (e) {
    var t = ps({}, e);
    return ds.default.createElement(
      "svg",
      ps({ viewBox: "0 0 36 36" }, t, t),
      ds.default.createElement("circle", {
        fillRule: "evenodd",
        cx: "17.8",
        cy: "18.2",
        r: "3.4",
      }),
      ds.default.createElement("circle", {
        fillRule: "evenodd",
        cx: "29.5",
        cy: "18.2",
        r: "3.4",
      }),
      ds.default.createElement("circle", {
        fillRule: "evenodd",
        cx: "6.1",
        cy: "18.2",
        r: "3.4",
      })
    );
  });
var ds = (function (e) {
  return e && e.__esModule ? e : { default: e };
})(l("acw62"));
function ps() {
  return (
    (ps =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    ps.apply(this, arguments)
  );
}
var fs = Br(l("acw62"));
function ms(e) {
  return e && e.__esModule ? e.default : e;
}
function hs(e, t, n, r) {
  Object.defineProperty(e, t, {
    get: n,
    set: r,
    enumerable: !0,
    configurable: !0,
  });
}
const gs = t(o).createContext({});
var ys,
  vs,
  bs,
  ws,
  Es,
  ks,
  Ss,
  xs,
  Ps,
  Ts,
  _s,
  Cs,
  Is,
  Ms,
  Ls,
  Ns,
  Rs,
  Os,
  As,
  Fs,
  zs,
  Ds,
  Ks,
  Vs,
  Us = {};
hs(
  Us,
  "spectrum-Menu-popover",
  () => ys,
  (e) => (ys = e)
),
  hs(
    Us,
    "spectrum-Menu",
    () => vs,
    (e) => (vs = e)
  ),
  hs(
    Us,
    "spectrum-Menu-sectionHeading",
    () => bs,
    (e) => (bs = e)
  ),
  hs(
    Us,
    "spectrum-Menu-checkmark",
    () => ws,
    (e) => (ws = e)
  ),
  hs(
    Us,
    "spectrum-Menu-item",
    () => Es,
    (e) => (Es = e)
  ),
  hs(
    Us,
    "is-selected",
    () => ks,
    (e) => (ks = e)
  ),
  hs(
    Us,
    "spectrum-Icon",
    () => Ss,
    (e) => (Ss = e)
  ),
  hs(
    Us,
    "spectrum-Menu-itemLabel",
    () => xs,
    (e) => (xs = e)
  ),
  hs(
    Us,
    "spectrum-Menu-itemIcon",
    () => Ps,
    (e) => (Ps = e)
  ),
  hs(
    Us,
    "spectrum-Menu-itemLabel--wrapping",
    () => Ts,
    (e) => (Ts = e)
  ),
  hs(
    Us,
    "spectrum-Menu-divider",
    () => _s,
    (e) => (_s = e)
  ),
  hs(
    Us,
    "spectrum-Menu-itemGrid",
    () => Cs,
    (e) => (Cs = e)
  ),
  hs(
    Us,
    "is-selectable",
    () => Is,
    (e) => (Is = e)
  ),
  hs(
    Us,
    "spectrum-Menu-end",
    () => Ms,
    (e) => (Ms = e)
  ),
  hs(
    Us,
    "spectrum-Menu-icon",
    () => Ls,
    (e) => (Ls = e)
  ),
  hs(
    Us,
    "spectrum-Menu-description",
    () => Ns,
    (e) => (Ns = e)
  ),
  hs(
    Us,
    "spectrum-Menu-keyboard",
    () => Rs,
    (e) => (Rs = e)
  ),
  hs(
    Us,
    "focus-ring",
    () => Os,
    (e) => (Os = e)
  ),
  hs(
    Us,
    "is-focused",
    () => As,
    (e) => (As = e)
  ),
  hs(
    Us,
    "is-hovered",
    () => Fs,
    (e) => (Fs = e)
  ),
  hs(
    Us,
    "is-highlighted",
    () => zs,
    (e) => (zs = e)
  ),
  hs(
    Us,
    "is-open",
    () => Ds,
    (e) => (Ds = e)
  ),
  hs(
    Us,
    "is-active",
    () => Ks,
    (e) => (Ks = e)
  ),
  hs(
    Us,
    "is-disabled",
    () => Vs,
    (e) => (Vs = e)
  ),
  (ys = "spectrum-Menu-popover_7ea47c"),
  (vs = "spectrum-Menu_7ea47c"),
  (bs = "spectrum-Menu-sectionHeading_7ea47c"),
  (ws = "spectrum-Menu-checkmark_7ea47c"),
  (Es = "spectrum-Menu-item_7ea47c"),
  (ks = "is-selected_7ea47c"),
  (Ss = "spectrum-Icon_7ea47c"),
  (xs = "spectrum-Menu-itemLabel_7ea47c"),
  (Ps = "spectrum-Menu-itemIcon_7ea47c"),
  (Ts = "spectrum-Menu-itemLabel--wrapping_7ea47c"),
  (_s = "spectrum-Menu-divider_7ea47c"),
  (Cs = "spectrum-Menu-itemGrid_7ea47c"),
  (Is = "is-selectable_7ea47c"),
  (Ms = "spectrum-Menu-end_7ea47c"),
  (Ls = "spectrum-Menu-icon_7ea47c"),
  (Ns = "spectrum-Menu-description_7ea47c"),
  (Rs = "spectrum-Menu-keyboard_7ea47c"),
  (Os = "focus-ring_7ea47c"),
  (As = "is-focused_7ea47c"),
  (Fs = "is-hovered_7ea47c"),
  (zs = "is-highlighted_7ea47c"),
  (Ds = "is-open_7ea47c"),
  (Ks = "is-active_7ea47c"),
  (Vs = "is-disabled_7ea47c");
let Bs = (0, o.forwardRef)(function (e, n) {
  let r,
    i = (0, o.useRef)(),
    l = Oe(n) || i,
    a = (0, o.useRef)(),
    {
      children: s,
      align: u = "start",
      shouldFlip: c = !0,
      direction: d = "bottom",
      closeOnSelect: p,
      trigger: f = "press",
    } = e,
    [m, h] = t(o).Children.toArray(s),
    g = Ra(e),
    { menuTriggerProps: y, menuProps: v } = _a({ trigger: f }, g, l);
  switch (d) {
    case "left":
    case "right":
    case "start":
    case "end":
      r = `${d} ${"end" === u ? "bottom" : "top"}`;
      break;
    default:
      r = `${d} ${u}`;
  }
  let b,
    w = ut(),
    E = {
      ...v,
      ref: a,
      onClose: g.close,
      closeOnSelect: p,
      autoFocus: g.focusStrategy || !0,
      UNSAFE_style: w ? { width: "100%", maxHeight: "inherit" } : void 0,
      UNSAFE_className: Me(ms(Us), { "spectrum-Menu-popover": !w }),
    };
  return (
    (b = w
      ? t(o).createElement(ia, { state: g }, h)
      : t(o).createElement(
          Bo,
          {
            state: g,
            triggerRef: l,
            scrollRef: a,
            placement: r,
            hideArrow: !0,
            shouldFlip: c,
          },
          h
        )),
    t(o).createElement(
      o.Fragment,
      null,
      t(o).createElement(
        ot,
        { slots: { actionButton: { holdAffordance: "longPress" === f } } },
        t(o).createElement(Tt, { ...y, ref: l, isPressed: g.isOpen }, m)
      ),
      t(o).createElement(gs.Provider, { value: E }, b)
    )
  );
});
function js(e) {
  let { item: n, state: r, isVirtualized: i, onAction: l } = e,
    { onClose: a, closeOnSelect: s } = (0, o.useContext)(gs),
    { rendered: u, key: c } = n,
    d = r.selectionManager.isSelected(c),
    p = r.disabledKeys.has(c),
    f = (0, o.useRef)(),
    {
      menuItemProps: m,
      labelProps: h,
      descriptionProps: g,
      keyboardShortcutProps: y,
    } = Ma(
      {
        isSelected: d,
        isDisabled: p,
        "aria-label": n["aria-label"],
        key: c,
        onClose: a,
        closeOnSelect: s,
        isVirtualized: i,
        onAction: l,
      },
      r,
      f
    ),
    { hoverProps: v, isHovered: b } = Jt({ isDisabled: p }),
    w = "string" == typeof u ? t(o).createElement(Ln, null, u) : u;
  return t(o).createElement(
    Cn,
    { focusRingClass: Me(ms(Us), "focus-ring") },
    t(o).createElement(
      "li",
      {
        ...x(m, v),
        ref: f,
        className: Me(ms(Us), "spectrum-Menu-item", {
          "is-disabled": p,
          "is-selected": d,
          "is-selectable": "none" !== r.selectionManager.selectionMode,
          "is-hovered": b,
        }),
      },
      t(o).createElement(
        Ja,
        { UNSAFE_className: Me(ms(Us), "spectrum-Menu-itemGrid") },
        t(o).createElement(
          at,
          null,
          t(o).createElement(
            ot,
            {
              slots: {
                text: {
                  UNSAFE_className: ms(Us)["spectrum-Menu-itemLabel"],
                  ...h,
                },
                end: { UNSAFE_className: ms(Us)["spectrum-Menu-end"], ...g },
                icon: {
                  UNSAFE_className: ms(Us)["spectrum-Menu-icon"],
                  size: "S",
                },
                description: {
                  UNSAFE_className: ms(Us)["spectrum-Menu-description"],
                  ...g,
                },
                keyboard: {
                  UNSAFE_className: ms(Us)["spectrum-Menu-keyboard"],
                  ...y,
                },
              },
            },
            w,
            d &&
              t(o).createElement(Ua, {
                slot: "checkmark",
                UNSAFE_className: Me(ms(Us), "spectrum-Menu-checkmark"),
              })
          )
        )
      )
    )
  );
}
function $s(e) {
  let { item: n, state: r, onAction: i } = e,
    {
      itemProps: l,
      headingProps: a,
      groupProps: s,
    } = La({ heading: n.rendered, "aria-label": n["aria-label"] }),
    { separatorProps: u } = ss({ elementType: "li" });
  return t(o).createElement(
    o.Fragment,
    null,
    n.key !== r.collection.getFirstKey() &&
      t(o).createElement("li", {
        ...u,
        className: Me(ms(Us), "spectrum-Menu-divider"),
      }),
    t(o).createElement(
      "li",
      l,
      n.rendered &&
        t(o).createElement(
          "span",
          { ...a, className: Me(ms(Us), "spectrum-Menu-sectionHeading") },
          n.rendered
        ),
      t(o).createElement(
        "ul",
        { ...s, className: Me(ms(Us), "spectrum-Menu") },
        [...n.childNodes].map((e) => {
          let n = t(o).createElement(js, {
            key: e.key,
            item: e,
            state: r,
            onAction: i,
          });
          return e.wrapper && (n = e.wrapper(n)), n;
        })
      )
    )
  );
}
const Hs = t(o).forwardRef(function (e, n) {
  let r = (0, o.useContext)(gs),
    i = { ...x(r, e) },
    l = Oe(n),
    a = Va(i),
    { menuProps: s } = Ia(i, a, l),
    { styleProps: u } = tt(i);
  return (
    K(r, l),
    t(o).createElement(
      "ul",
      {
        ...s,
        ...u,
        ref: l,
        className: Me(ms(Us), "spectrum-Menu", u.className),
      },
      [...a.collection].map((e) => {
        if ("section" === e.type)
          return t(o).createElement($s, {
            key: e.key,
            item: e,
            state: a,
            onAction: i.onAction,
          });
        let n = t(o).createElement(js, {
          key: e.key,
          item: e,
          state: a,
          onAction: i.onAction,
        });
        return e.wrapper && (n = e.wrapper(n)), n;
      })
    )
  );
});
var Ws;
Ws = {
  "ar-AE": { moreActions: "المزيد من الإجراءات" },
  "bg-BG": { moreActions: "Повече действия" },
  "cs-CZ": { moreActions: "Další akce" },
  "da-DK": { moreActions: "Flere handlinger" },
  "de-DE": { moreActions: "Mehr Aktionen" },
  "el-GR": { moreActions: "Περισσότερες ενέργειες" },
  "en-US": { moreActions: "More actions" },
  "es-ES": { moreActions: "Más acciones" },
  "et-EE": { moreActions: "Veel toiminguid" },
  "fi-FI": { moreActions: "Lisää toimintoja" },
  "fr-FR": { moreActions: "Autres actions" },
  "he-IL": { moreActions: "פעולות נוספות" },
  "hr-HR": { moreActions: "Dodatne radnje" },
  "hu-HU": { moreActions: "További lehetőségek" },
  "it-IT": { moreActions: "Altre azioni" },
  "ja-JP": { moreActions: "その他のアクション" },
  "ko-KR": { moreActions: "기타 작업" },
  "lt-LT": { moreActions: "Daugiau veiksmų" },
  "lv-LV": { moreActions: "Citas darbības" },
  "nb-NO": { moreActions: "Flere handlinger" },
  "nl-NL": { moreActions: "Meer handelingen" },
  "pl-PL": { moreActions: "Więcej akcji" },
  "pt-BR": { moreActions: "Mais ações" },
  "pt-PT": { moreActions: "Mais ações" },
  "ro-RO": { moreActions: "Mai multe acțiuni" },
  "ru-RU": { moreActions: "Дополнительные действия" },
  "sk-SK": { moreActions: "Ďalšie akcie" },
  "sl-SI": { moreActions: "Več možnosti" },
  "sr-SP": { moreActions: "Dodatne radnje" },
  "sv-SE": { moreActions: "Fler åtgärder" },
  "tr-TR": { moreActions: "Daha fazla eylem" },
  "uk-UA": { moreActions: "Більше дій" },
  "zh-CN": { moreActions: "更多操作" },
  "zh-TW": { moreActions: "更多動作" },
};
(0, o.forwardRef)(function (e, n) {
  e = lt(e, "actionMenu");
  let r = Pe(ms(Ws)),
    i = C(e, { labelable: !0 });
  return (
    void 0 === i["aria-label"] && (i["aria-label"] = r.format("moreActions")),
    t(o).createElement(
      Bs,
      {
        isOpen: e.isOpen,
        defaultOpen: e.defaultOpen,
        onOpenChange: e.onOpenChange,
        align: e.align,
        direction: e.direction,
        shouldFlip: e.shouldFlip,
      },
      t(o).createElement(
        zl,
        { ref: n, ...e, ...i },
        t(o).createElement(us, null)
      ),
      t(o).createElement(Hs, {
        children: e.children,
        items: e.items,
        disabledKeys: e.disabledKeys,
        onAction: e.onAction,
      })
    )
  );
});
o = l("acw62");
function qs(e, t) {
  let n,
    {
      elementType: r = "a",
      onPress: i,
      onPressStart: l,
      onPressEnd: o,
      onClick: a,
      isDisabled: s,
      ...u
    } = e;
  "a" !== r && (n = { role: "link", tabIndex: s ? void 0 : 0 });
  let { focusableProps: c } = Mn(e, t),
    { pressProps: d, isPressed: p } = gt({
      onPress: i,
      onPressStart: l,
      onPressEnd: o,
      isDisabled: s,
      ref: t,
    }),
    f = C(u, { labelable: !0 }),
    m = x(c, d);
  return {
    isPressed: p,
    linkProps: x(f, {
      ...m,
      ...n,
      "aria-disabled": s || void 0,
      onClick: (e) => {
        d.onClick(e),
          a &&
            (a(e), console.warn("onClick is deprecated, please use onPress"));
      },
    }),
  };
}
function Gs(e) {
  return e && e.__esModule ? e.default : e;
}
function Qs(e, t) {
  let {
      isCurrent: n,
      isDisabled: r,
      "aria-current": i,
      elementType: l = "a",
      ...o
    } = e,
    { linkProps: a } = qs({ isDisabled: r || n, elementType: l, ...o }, t),
    s = {};
  return (
    /^h[1-6]$/.test(l) || (s = a),
    n &&
      ((s["aria-current"] = i || "page"),
      (s.tabIndex = e.autoFocus ? -1 : void 0)),
    { itemProps: { "aria-disabled": r, ...s } }
  );
}
var Ys, Xs;
function Zs(e) {
  let { "aria-label": t, ...n } = e,
    r = Pe(Gs(Ys));
  return {
    navProps: {
      ...C(n, { labelable: !0 }),
      "aria-label": t || r.format("breadcrumbs"),
    },
  };
}
(Ys = {
  "ar-AE": { breadcrumbs: "عناصر الواجهة" },
  "bg-BG": { breadcrumbs: "Трохи хляб" },
  "cs-CZ": { breadcrumbs: "Popis cesty" },
  "da-DK": { breadcrumbs: "Brødkrummer" },
  "de-DE": { breadcrumbs: "Breadcrumbs" },
  "el-GR": { breadcrumbs: "Πλοηγήσεις breadcrumb" },
  "en-US": { breadcrumbs: "Breadcrumbs" },
  "es-ES": { breadcrumbs: "Migas de pan" },
  "et-EE": { breadcrumbs: "Lingiread" },
  "fi-FI": { breadcrumbs: "Navigointilinkit" },
  "fr-FR": { breadcrumbs: "Chemin de navigation" },
  "he-IL": { breadcrumbs: "שבילי ניווט" },
  "hr-HR": { breadcrumbs: "Navigacijski putovi" },
  "hu-HU": { breadcrumbs: "Morzsamenü" },
  "it-IT": { breadcrumbs: "Breadcrumb" },
  "ja-JP": { breadcrumbs: "パンくずリスト" },
  "ko-KR": { breadcrumbs: "탐색 표시" },
  "lt-LT": { breadcrumbs: "Naršymo kelias" },
  "lv-LV": { breadcrumbs: "Atpakaļceļi" },
  "nb-NO": { breadcrumbs: "Navigasjonsstier" },
  "nl-NL": { breadcrumbs: "Broodkruimels" },
  "pl-PL": { breadcrumbs: "Struktura nawigacyjna" },
  "pt-BR": { breadcrumbs: "Caminho detalhado" },
  "pt-PT": { breadcrumbs: "Categorias" },
  "ro-RO": { breadcrumbs: "Miez de pâine" },
  "ru-RU": { breadcrumbs: "Навигация" },
  "sk-SK": { breadcrumbs: "Navigačné prvky Breadcrumbs" },
  "sl-SI": { breadcrumbs: "Drobtine" },
  "sr-SP": { breadcrumbs: "Putanje navigacije" },
  "sv-SE": { breadcrumbs: "Sökvägar" },
  "tr-TR": { breadcrumbs: "İçerik haritaları" },
  "uk-UA": { breadcrumbs: "Навігаційна стежка" },
  "zh-CN": { breadcrumbs: "导航栏" },
  "zh-TW": { breadcrumbs: "導覽列" },
}),
  (Xs = function (e) {
    return iu.default.createElement(
      Gi,
      e,
      iu.default.createElement(Js.ChevronRightSmall, null)
    );
  });
var Js = {};
Object.defineProperty(Js, "__esModule", { value: !0 }),
  (Js.ChevronRightSmall = ru);
var eu = (function (e) {
  return e && e.__esModule ? e : { default: e };
})(l("acw62"));
function tu() {
  return (
    (tu =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    tu.apply(this, arguments)
  );
}
function nu(e, t) {
  if (null == e) return {};
  var n,
    r,
    i = (function (e, t) {
      if (null == e) return {};
      var n,
        r,
        i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++)
        (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (r = 0; r < l.length; r++)
      (n = l[r]),
        t.indexOf(n) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
  }
  return i;
}
function ru(e) {
  var t = e.scale,
    n = void 0 === t ? "M" : t,
    r = nu(e, ["scale"]);
  return eu.default.createElement(
    "svg",
    tu({}, r, r),
    "L" === n &&
      eu.default.createElement("path", {
        d: "M7 5a.747.747 0 0 0-.22-.53L2.54.23a.75.75 0 1 0-1.06 1.06L5.19 5 1.48 8.71a.75.75 0 1 0 1.06 1.06l4.24-4.24A.747.747 0 0 0 7 5z",
      }),
    "M" === n &&
      eu.default.createElement("path", {
        d: "M5.5 4a.747.747 0 0 0-.22-.53C4.703 2.862 3.242 1.5 2.04.23A.75.75 0 1 0 .98 1.29L3.69 4 .98 6.71a.75.75 0 1 0 1.06 1.06l3.24-3.24A.747.747 0 0 0 5.5 4z",
      })
  );
}
ru.displayName = "ChevronRightSmall";
var iu = Br(l("acw62"));
function lu(e) {
  return e && e.__esModule ? e.default : e;
}
function ou(e, t, n, r) {
  Object.defineProperty(e, t, {
    get: n,
    set: r,
    enumerable: !0,
    configurable: !0,
  });
}
var au,
  su,
  uu,
  cu,
  du,
  pu,
  fu,
  mu,
  hu,
  gu,
  yu,
  vu,
  bu,
  wu,
  Eu,
  ku,
  Su = {};
function xu(e) {
  let { children: n, isCurrent: r, isDisabled: i } = e,
    { direction: l } = Se(),
    a = (0, o.useRef)(),
    { itemProps: s } = Qs(
      { ...e, elementType: "string" == typeof n ? "span" : "a" },
      a
    ),
    { hoverProps: u, isHovered: c } = Jt(e),
    d = t(o).cloneElement(Le(n), {
      ...x(s, u),
      ref: a,
      className: Me(lu(Su), "spectrum-Breadcrumbs-itemLink", {
        "is-disabled": !r && i,
        "is-hovered": c,
      }),
    });
  return t(o).createElement(
    o.Fragment,
    null,
    t(o).createElement(Cn, { focusRingClass: Me(lu(Su), "focus-ring") }, d),
    !1 === r &&
      t(o).createElement(Xs, {
        UNSAFE_className: Me(lu(Su), "spectrum-Breadcrumbs-itemSeparator", {
          "is-reversed": "rtl" === l,
        }),
      })
  );
}
ou(
  Su,
  "spectrum-Breadcrumbs",
  () => au,
  (e) => (au = e)
),
  ou(
    Su,
    "spectrum-Breadcrumbs-itemSeparator",
    () => su,
    (e) => (su = e)
  ),
  ou(
    Su,
    "is-reversed",
    () => uu,
    (e) => (uu = e)
  ),
  ou(
    Su,
    "spectrum-Breadcrumbs-item",
    () => cu,
    (e) => (cu = e)
  ),
  ou(
    Su,
    "spectrum-ActionButton",
    () => du,
    (e) => (du = e)
  ),
  ou(
    Su,
    "spectrum-Breadcrumbs-itemLink",
    () => pu,
    (e) => (pu = e)
  ),
  ou(
    Su,
    "is-hovered",
    () => fu,
    (e) => (fu = e)
  ),
  ou(
    Su,
    "focus-ring",
    () => mu,
    (e) => (mu = e)
  ),
  ou(
    Su,
    "is-dragged",
    () => hu,
    (e) => (hu = e)
  ),
  ou(
    Su,
    "spectrum-Breadcrumbs--small",
    () => gu,
    (e) => (gu = e)
  ),
  ou(
    Su,
    "spectrum-Breadcrumbs--medium",
    () => yu,
    (e) => (yu = e)
  ),
  ou(
    Su,
    "spectrum-Breadcrumbs--multiline",
    () => vu,
    (e) => (vu = e)
  ),
  ou(
    Su,
    "spectrum-Heading--pageTitle",
    () => bu,
    (e) => (bu = e)
  ),
  ou(
    Su,
    "is-disabled",
    () => wu,
    (e) => (wu = e)
  ),
  ou(
    Su,
    "is-selected",
    () => Eu,
    (e) => (Eu = e)
  ),
  ou(
    Su,
    "spectrum-Breadcrumb",
    () => ku,
    (e) => (ku = e)
  ),
  (au = "spectrum-Breadcrumbs_3fe6e8"),
  (su = "spectrum-Breadcrumbs-itemSeparator_3fe6e8"),
  (uu = "is-reversed_3fe6e8"),
  (cu = "spectrum-Breadcrumbs-item_3fe6e8"),
  (du = "spectrum-ActionButton_3fe6e8"),
  (pu = "spectrum-Breadcrumbs-itemLink_3fe6e8"),
  (fu = "is-hovered_3fe6e8"),
  (mu = "focus-ring_3fe6e8"),
  (hu = "is-dragged_3fe6e8"),
  (gu = "spectrum-Breadcrumbs--small_3fe6e8"),
  (yu = "spectrum-Breadcrumbs--medium_3fe6e8"),
  (vu = "spectrum-Breadcrumbs--multiline_3fe6e8"),
  (bu = "spectrum-Heading--pageTitle_3fe6e8"),
  (wu = "is-disabled_3fe6e8"),
  (Eu = "is-selected_3fe6e8"),
  (ku = "spectrum-Breadcrumb_3fe6e8");
let Pu = t(o).forwardRef(function (e, n) {
  e = Vr(e);
  let {
      size: r = "L",
      isMultiline: i,
      children: l,
      showRoot: a,
      isDisabled: s,
      onAction: u,
      autoFocusCurrent: c,
      ...d
    } = e,
    p = [];
  t(o).Children.forEach(l, (e) => {
    t(o).isValidElement(e) && p.push(e);
  });
  let f = Oe(n),
    m = (0, o.useRef)(null),
    [h, g] = v(p.length),
    { navProps: b } = Zs(e),
    { styleProps: w } = tt(d),
    E = (0, o.useCallback)(() => {
      let e = (e) => {
        let t = m.current;
        if (!t) return;
        let n = Array.from(t.children),
          r = t.offsetWidth,
          l = p.length > e,
          o = 0,
          s = 0,
          u = 4;
        if (
          (a && ((o += n.shift().offsetWidth), s++),
          l && ((o += n.shift().offsetWidth), u--),
          a && o >= r && s--,
          i)
        )
          n.pop(), s++;
        else if (n.length > 0) {
          let e = n.pop();
          (e.style.overflow = "visible"),
            (o += e.offsetWidth),
            o < r && s++,
            (e.style.overflow = "");
        }
        for (let e of n.reverse()) (o += e.offsetWidth), o < r && s++;
        return Math.max(1, Math.min(u, s));
      };
      g(function* () {
        yield p.length;
        let t = e(p.length);
        yield t, t < p.length && t > 1 && (yield e(t));
      });
    }, [p.length, g, a, i]);
  D({ ref: f, onResize: E }), y(E, [l]);
  let k = p;
  if (p.length > h) {
    var S;
    let e =
        null !== (S = p[p.length - 1].key) && void 0 !== S ? S : p.length - 1,
      n = (t) => {
        t !== e && u && u(t);
      };
    k = [
      t(o).createElement(
        xu,
        { key: "menu" },
        t(o).createElement(
          Bs,
          null,
          t(o).createElement(
            zl,
            { "aria-label": "…", isQuiet: !0, isDisabled: s },
            t(o).createElement(Kl, null)
          ),
          t(o).createElement(
            Hs,
            { selectionMode: "single", selectedKeys: [e], onAction: n },
            p
          )
        )
      ),
    ];
    let r = [...p],
      i = h;
    a && h > 1 && (k.unshift(r.shift()), i--), k.push(...r.slice(-i));
  }
  let x = k.length - 1,
    P = k.map((e, n) => {
      let r = n === x;
      var i;
      let l = null !== (i = e.key) && void 0 !== i ? i : n;
      return t(o).createElement(
        "li",
        { key: n, className: Me(lu(Su), "spectrum-Breadcrumbs-item") },
        t(o).createElement(
          xu,
          {
            key: l,
            isCurrent: r,
            isDisabled: s,
            onPress: () => {
              u && u(l);
            },
            autoFocus: r && c,
          },
          e.props.children
        )
      );
    });
  return t(o).createElement(
    "nav",
    { ...w, ...b, ref: f },
    t(o).createElement(
      "ul",
      {
        ref: m,
        className: Me(
          lu(Su),
          "spectrum-Breadcrumbs",
          {
            "spectrum-Breadcrumbs--small": "S" === r,
            "spectrum-Breadcrumbs--medium": "M" === r,
            "spectrum-Breadcrumbs--multiline": i,
            "spectrum-Breadcrumbs--showRoot": a,
            "is-disabled": s,
          },
          w.className
        ),
      },
      P
    )
  );
});
function Tu(e) {
  return e && e.__esModule ? e.default : e;
}
function _u(e, t, n, r) {
  Object.defineProperty(e, t, {
    get: n,
    set: r,
    enumerable: !0,
    configurable: !0,
  });
}
var Cu,
  Iu = {};
_u(
  Iu,
  "spectrum--darkest",
  () => Cu,
  (e) => (Cu = e)
),
  (Cu = "spectrum--darkest_256eeb");
var Mu,
  Lu,
  Nu,
  Ru,
  Ou,
  Au,
  Fu,
  zu = {};
_u(
  zu,
  "spectrum",
  () => Mu,
  (e) => (Mu = e)
),
  _u(
    zu,
    "spectrum--medium",
    () => Lu,
    (e) => (Lu = e)
  ),
  _u(
    zu,
    "spectrum--large",
    () => Nu,
    (e) => (Nu = e)
  ),
  _u(
    zu,
    "spectrum--darkest",
    () => Ru,
    (e) => (Ru = e)
  ),
  _u(
    zu,
    "spectrum--dark",
    () => Ou,
    (e) => (Ou = e)
  ),
  _u(
    zu,
    "spectrum--light",
    () => Au,
    (e) => (Au = e)
  ),
  _u(
    zu,
    "spectrum--lightest",
    () => Fu,
    (e) => (Fu = e)
  ),
  (Mu = "spectrum_9e130c"),
  (Lu = "spectrum--medium_9e130c"),
  (Nu = "spectrum--large_9e130c"),
  (Ru = "spectrum--darkest_9e130c"),
  (Ou = "spectrum--dark_9e130c"),
  (Au = "spectrum--light_9e130c"),
  (Fu = "spectrum--lightest_9e130c");
var Du,
  Ku = {};
_u(
  Ku,
  "spectrum--large",
  () => Du,
  (e) => (Du = e)
),
  (Du = "spectrum--large_c40598");
var Vu,
  Uu = {};
_u(
  Uu,
  "spectrum--light",
  () => Vu,
  (e) => (Vu = e)
),
  (Vu = "spectrum--light_a40724");
var Bu,
  ju = {};
_u(
  ju,
  "spectrum--medium",
  () => Bu,
  (e) => (Bu = e)
),
  (Bu = "spectrum--medium_4b172c");
let $u = {
  global: Tu(zu),
  light: Tu(Uu),
  dark: Tu(Iu),
  medium: Tu(ju),
  large: Tu(Ku),
};
o = l("acw62");
function Hu(e) {
  return e && e.__esModule ? e.default : e;
}
var Wu,
  qu,
  Gu,
  Qu,
  Yu,
  Xu = {};
(Wu = Xu),
  (qu = "spectrum-Image-img"),
  (Gu = () => Yu),
  (Qu = (e) => (Yu = e)),
  Object.defineProperty(Wu, qu, {
    get: Gu,
    set: Qu,
    enumerable: !0,
    configurable: !0,
  }),
  (Yu = "spectrum-Image-img_fdc794");
const Zu = t(o).forwardRef(function (e, n) {
  let r = e.alt;
  e = Vr((e = lt(e, "image")));
  let { objectFit: i, src: l, alt: a, ...s } = e,
    { styleProps: u } = tt(s),
    c = Oe(n);
  return (
    null == a &&
      console.warn(
        'The `alt` prop was not provided to an image. Add `alt` text for screen readers, or set `alt=""` prop to indicate that the image is decorative or redundant with displayed text and should not be announced by screen readers.'
      ),
    t(o).createElement(
      "div",
      {
        ...C(e),
        ...u,
        className: Me(Hu(Xu), u.className),
        style: { ...u.style, overflow: "hidden" },
        ref: c,
      },
      t(o).createElement("img", {
        src: l,
        alt: r || a,
        style: { objectFit: i },
        className: Me(Hu(Xu), "spectrum-Image-img"),
      })
    )
  );
});
o = l("acw62");
class Ju {
  shouldInvalidate(e, t) {
    return e.width !== t.width || e.height !== t.height;
  }
  validate(e) {}
  getInitialLayoutInfo(e) {
    return e;
  }
  getFinalLayoutInfo(e) {
    return e;
  }
}
class ec {
  copy() {
    let e = new ec(this.type, this.key, this.rect.copy());
    return (
      (e.estimatedSize = this.estimatedSize),
      (e.opacity = this.opacity),
      (e.transform = this.transform),
      (e.parentKey = this.parentKey),
      (e.isSticky = this.isSticky),
      (e.zIndex = this.zIndex),
      (e.allowOverflow = this.allowOverflow),
      e
    );
  }
  constructor(e, t, n) {
    (this.type = e),
      (this.key = t),
      (this.parentKey = null),
      (this.rect = n),
      (this.estimatedSize = !1),
      (this.isSticky = !1),
      (this.opacity = 1),
      (this.transform = null),
      (this.zIndex = 0),
      (this.allowOverflow = !1);
  }
}
class tc {
  copy() {
    return new tc(this.x, this.y);
  }
  equals(e) {
    return this.x === e.x && this.y === e.y;
  }
  isOrigin() {
    return 0 === this.x && 0 === this.y;
  }
  constructor(e = 0, t = 0) {
    (this.x = e), (this.y = t);
  }
}
class nc {
  get maxX() {
    return this.x + this.width;
  }
  get maxY() {
    return this.y + this.height;
  }
  get area() {
    return this.width * this.height;
  }
  get topLeft() {
    return new tc(this.x, this.y);
  }
  get topRight() {
    return new tc(this.maxX, this.y);
  }
  get bottomLeft() {
    return new tc(this.x, this.maxY);
  }
  get bottomRight() {
    return new tc(this.maxX, this.maxY);
  }
  intersects(e) {
    return (
      this.x <= e.x + e.width &&
      e.x <= this.x + this.width &&
      this.y <= e.y + e.height &&
      e.y <= this.y + this.height
    );
  }
  containsRect(e) {
    return (
      this.x <= e.x &&
      this.y <= e.y &&
      this.maxX >= e.maxX &&
      this.maxY >= e.maxY
    );
  }
  containsPoint(e) {
    return (
      this.x <= e.x && this.y <= e.y && this.maxX >= e.x && this.maxY >= e.y
    );
  }
  getCornerInRect(e) {
    for (let t of ["topLeft", "topRight", "bottomLeft", "bottomRight"])
      if (e.containsPoint(this[t])) return t;
    return null;
  }
  equals(e) {
    return (
      e.x === this.x &&
      e.y === this.y &&
      e.width === this.width &&
      e.height === this.height
    );
  }
  pointEquals(e) {
    return this.x === e.x && this.y === e.y;
  }
  sizeEquals(e) {
    return this.width === e.width && this.height === e.height;
  }
  union(e) {
    let t = Math.min(this.x, e.x),
      n = Math.min(this.y, e.y),
      r = Math.max(this.maxX, e.maxX) - t,
      i = Math.max(this.maxY, e.maxY) - n;
    return new nc(t, n, r, i);
  }
  intersection(e) {
    if (!this.intersects(e)) return new nc(0, 0, 0, 0);
    let t = Math.max(this.x, e.x),
      n = Math.max(this.y, e.y);
    return new nc(
      t,
      n,
      Math.min(this.maxX, e.maxX) - t,
      Math.min(this.maxY, e.maxY) - n
    );
  }
  copy() {
    return new nc(this.x, this.y, this.width, this.height);
  }
  constructor(e = 0, t = 0, n = 0, r = 0) {
    (this.x = e), (this.y = t), (this.width = n), (this.height = r);
  }
}
class rc {
  copy() {
    return new rc(this.width, this.height);
  }
  equals(e) {
    return this.width === e.width && this.height === e.height;
  }
  get area() {
    return this.width * this.height;
  }
  constructor(e = 0, t = 0) {
    (this.width = e), (this.height = t);
  }
}
let ic = 0;
class lc {
  prepareForReuse() {
    (this.content = null), (this.rendered = null), (this.layoutInfo = null);
  }
  constructor(e) {
    (this.virtualizer = e), (this.key = ++ic);
  }
}
let oc,
  ac = "undefined" != typeof window ? window.performance : null,
  sc = ac && (ac.now || ac.webkitNow || ac.msNow || ac.mozNow),
  uc = sc
    ? sc.bind(ac)
    : function () {
        return Date.now ? Date.now() : new Date().getTime();
      };
function cc(e) {
  return Math.sin((e * Math.PI) / 2);
}
function dc(e, t) {
  let n = new Set();
  for (let r of e.keys()) t.has(r) || n.add(r);
  return n;
}
class pc {
  addSample(e) {
    this.count++, (this.value += (e - this.value) / this.count);
  }
  constructor() {
    ae(this, "count", 0), ae(this, "value", 0);
  }
}
class fc {
  setVisibleRect(e) {
    let t = performance.now() - this.startTime;
    t < 500 &&
      (this.averageTime.addSample(t),
      e.x !== this.visibleRect.x &&
        t > 0 &&
        (this.velocity.x = (e.x - this.visibleRect.x) / t),
      e.y !== this.visibleRect.y &&
        t > 0 &&
        (this.velocity.y = (e.y - this.visibleRect.y) / t)),
      (this.startTime = performance.now()),
      (this.visibleRect = e);
  }
  collectMetrics() {
    let e = performance.now() - this.startTime;
    if (
      (e < 500 && this.averagePerf.addSample(e), this.visibleRect.height > 0)
    ) {
      let e = Math.abs(
        this.velocity.y * (this.averageTime.value + this.averagePerf.value)
      );
      this.overscanY.addSample(e);
    }
    if (this.visibleRect.width > 0) {
      let e = Math.abs(
        this.velocity.x * (this.averageTime.value + this.averagePerf.value)
      );
      this.overscanX.addSample(e);
    }
  }
  getOverscannedRect() {
    let e = this.visibleRect.copy(),
      t =
        100 *
        Math.round(
          Math.min(2 * this.visibleRect.height, this.overscanY.value) / 100
        );
    this.velocity.y > 0
      ? ((e.y -= 0.2 * t), (e.height += t + 0.2 * t))
      : ((e.y -= t), (e.height += t + 0.2 * t));
    let n =
      100 *
      Math.round(
        Math.min(2 * this.visibleRect.width, this.overscanX.value) / 100
      );
    return (
      this.velocity.x > 0
        ? ((e.x -= 0.2 * n), (e.width += n + 0.2 * n))
        : ((e.x -= n), (e.width += n + 0.2 * n)),
      e
    );
  }
  constructor() {
    ae(this, "startTime", 0),
      ae(this, "averagePerf", new pc()),
      ae(this, "averageTime", new pc()),
      ae(this, "velocity", new tc(5, 5)),
      ae(this, "overscanX", new pc()),
      ae(this, "overscanY", new pc()),
      ae(this, "visibleRect", new nc());
  }
}
class mc {
  constructor() {
    ae(this, "level", 0),
      ae(this, "actions", []),
      ae(this, "animated", !0),
      ae(this, "initialMap", new Map()),
      ae(this, "finalMap", new Map()),
      ae(this, "initialLayoutInfo", new Map()),
      ae(this, "finalLayoutInfo", new Map()),
      ae(this, "removed", new Map()),
      ae(this, "toRemove", new Map());
  }
}
class hc {
  _setContentSize(e) {
    (this._contentSize = e), this.delegate.setContentSize(e);
  }
  _setContentOffset(e) {
    let t = new nc(e.x, e.y, this._visibleRect.width, this._visibleRect.height);
    this.delegate.setVisibleRect(t);
  }
  get contentSize() {
    return this._contentSize;
  }
  get visibleRect() {
    return this._visibleRect;
  }
  set visibleRect(e) {
    this._setVisibleRect(e);
  }
  _setVisibleRect(e, t = !1) {
    let n = this._visibleRect;
    if (e.equals(n)) return;
    this.shouldOverscan && this._overscanManager.setVisibleRect(e);
    let r = this.layout && this.layout.shouldInvalidate(e, this._visibleRect);
    this._resetAnimatedContentOffset(),
      (this._visibleRect = e),
      r
        ? this.relayout({
            offsetChanged: !e.pointEquals(n),
            sizeChanged: !e.sizeEquals(n),
          })
        : this.updateSubviews(t);
  }
  get collection() {
    return this._collection;
  }
  set collection(e) {
    this._setData(e);
  }
  _setData(e) {
    e !== this._collection &&
      (this._collection
        ? this._runTransaction(() => {
            this._collection = e;
          }, this.transitionDuration > 0)
        : ((this._collection = e), this.reloadData()));
  }
  reloadData() {
    this.relayout({ contentChanged: !0 });
  }
  getItem(e) {
    return this._collection ? this._collection.getItem(e) : null;
  }
  get persistedKeys() {
    return this._persistedKeys;
  }
  set persistedKeys(e) {
    (function (e, t) {
      if (e === t) return !0;
      if (e.size !== t.size) return !1;
      for (let n of e) if (!t.has(n)) return !1;
      return !0;
    })(e, this._persistedKeys) ||
      ((this._persistedKeys = e), this.updateSubviews());
  }
  isPersistedKey(e) {
    if (this._persistedKeys.has(e)) return !0;
    for (let t of this._persistedKeys)
      for (; null != t; ) {
        let n = this.layout.getLayoutInfo(t);
        if (!n) break;
        if (((t = n.parentKey), t === e)) return !0;
      }
    return !1;
  }
  get layout() {
    return this._layout;
  }
  set layout(e) {
    this.setLayout(e);
  }
  setLayout(e, t = !1) {
    if (e === this._layout) return;
    let n = () => {
      this._layout && (this._layout.virtualizer = null),
        (e.virtualizer = this),
        (this._layout = e);
    };
    t ? this._runTransaction(n) : (n(), this.relayout());
  }
  _getReuseType(e, t) {
    if ("item" === e.type && t) {
      let n = this.delegate.getType ? this.delegate.getType(t) : "item";
      return { type: n, reuseType: "item" === n ? "item" : e.type + "_" + n };
    }
    return { type: e.type, reuseType: e.type };
  }
  getReusableView(e) {
    let t = this.getItem(e.key),
      { reuseType: n } = this._getReuseType(e, t);
    this._reusableViews[n] || (this._reusableViews[n] = []);
    let r = this._reusableViews[n],
      i = r.length > 0 ? r.pop() : new lc(this);
    return (
      (i.viewType = n),
      this._animatedContentOffset.isOrigin() ||
        (((e = e.copy()).rect.x += this._animatedContentOffset.x),
        (e.rect.y += this._animatedContentOffset.y)),
      (i.layoutInfo = e),
      this._renderView(i),
      i
    );
  }
  _renderView(e) {
    let { type: t, key: n } = e.layoutInfo;
    (e.content = this.getItem(n)),
      (e.rendered = this._renderContent(t, e.content));
  }
  _renderContent(e, t) {
    let n = this._renderedContent.get(t);
    if (null != n) return n;
    let r = this.delegate.renderView(e, t);
    return t && this._renderedContent.set(t, r), r;
  }
  get visibleViews() {
    return Array.from(this._visibleViews.values());
  }
  getView(e) {
    return this._visibleViews.get(e) || null;
  }
  getViewsOfType(e) {
    return this.visibleViews.filter(
      (t) => t.layoutInfo && t.layoutInfo.type === e
    );
  }
  keyForView(e) {
    return e && e.layoutInfo ? e.layoutInfo.key : null;
  }
  keyAtPoint(e) {
    let t = new nc(e.x, e.y, 1, 1),
      n = this.layout.getVisibleLayoutInfos(t);
    for (let e of n) if (e.rect.intersects(t)) return e.key;
    return null;
  }
  willUnmount() {
    cancelAnimationFrame(this._relayoutRaf);
  }
  relayout(e = {}) {
    this._scrollAnimation ||
      "undefined" == typeof requestAnimationFrame ||
      (this._invalidationContext
        ? Object.assign(this._invalidationContext, e)
        : ((this._invalidationContext = e),
          (this._relayoutRaf = requestAnimationFrame(() => {
            (this._relayoutRaf = null), this.relayoutNow();
          }))));
  }
  relayoutNow(e = this._invalidationContext || {}) {
    if (
      (this._relayoutRaf &&
        (cancelAnimationFrame(this._relayoutRaf),
        (this._relayoutRaf = null),
        (e = { ...this._invalidationContext, ...e })),
      (this._invalidationContext = null),
      !this.layout || !this._collection || this._scrollAnimation)
    )
      return;
    let t = this._getScrollAnchor();
    "function" == typeof e.beforeLayout && e.beforeLayout(),
      this.layout.validate(e),
      this._setContentSize(this.layout.getContentSize()),
      "function" == typeof e.afterLayout && e.afterLayout();
    let n = this.getVisibleRect(),
      r = this._restoreScrollAnchor(t, e),
      i = e.contentChanged ? 0 : r.x,
      l = e.contentChanged ? 0 : r.y;
    (i = Math.max(0, Math.min(this.contentSize.width - n.width, i))),
      (l = Math.max(0, Math.min(this.contentSize.height - n.height, l)));
    let o = !1;
    if (
      (i !== n.x || l !== n.y
        ? e.animated || !this._animatedContentOffset.isOrigin()
          ? ((this._animatedContentOffset.x += n.x - i),
            (this._animatedContentOffset.y += n.y - l),
            (o = this.updateSubviews(e.contentChanged)))
          : this._setContentOffset(new tc(i, l))
        : (o = this.updateSubviews(e.contentChanged)),
      (e.transaction && e.animated) || this._applyLayoutInfos(),
      e.animated && o)
    ) {
      return (
        this._enableTransitions(),
        void setTimeout(() => {
          if (
            (this._disableTransitions(),
            !this._animatedContentOffset.isOrigin())
          ) {
            let { x: e, y: t } = this.getVisibleRect();
            this._resetAnimatedContentOffset(),
              this._setContentOffset(new tc(e, t));
          }
          "function" == typeof e.afterAnimation && e.afterAnimation();
        }, this.transitionDuration + 100)
      );
    }
    "function" == typeof e.afterAnimation && e.afterAnimation();
  }
  _correctItemOrder() {
    if (!this._isScrolling && !this._transaction)
      for (let e of this._visibleLayoutInfos.keys()) {
        let t = this._visibleViews.get(e);
        this._children.delete(t), this._children.add(t);
      }
  }
  _enableTransitions() {
    this.delegate.beginAnimations();
  }
  _disableTransitions() {
    this.delegate.endAnimations();
  }
  _getScrollAnchor() {
    if (!this.anchorScrollPosition) return null;
    let e = this.getVisibleRect();
    if (this.delegate.getScrollAnchor) {
      let t = this.delegate.getScrollAnchor(e);
      if (null != t) {
        let n = this.layout.getLayoutInfo(t),
          r = n.rect.getCornerInRect(e);
        if (r) {
          return {
            key: n.key,
            layoutInfo: n,
            corner: r,
            offset: n.rect[r].y - e.y,
          };
        }
      }
    }
    if (0 === e.y && !this.anchorScrollPositionAtTop) return null;
    let t = null;
    for (let [n, r] of this._visibleViews) {
      let i = r.layoutInfo;
      if (i && i.rect.area > 0) {
        let r = i.rect.getCornerInRect(e);
        if (r) {
          let l = i.rect[r].y - e.y;
          (!t || l < t.offset) &&
            (t = { key: n, layoutInfo: i, corner: r, offset: l });
        }
      }
    }
    return t;
  }
  _restoreScrollAnchor(e, t) {
    let n = this.getVisibleRect();
    if (e) {
      var r;
      let i = (
        null === (r = t.transaction) || void 0 === r ? void 0 : r.animated
      )
        ? t.transaction.finalMap.get(e.key)
        : this.layout.getLayoutInfo(e.layoutInfo.key);
      if (i) {
        let t = i.rect[e.corner].y - n.y - e.offset;
        n.y += t;
      }
    }
    return n;
  }
  getVisibleRect() {
    let e = this.visibleRect,
      t = e.x - this._animatedContentOffset.x,
      n = e.y - this._animatedContentOffset.y;
    return new nc(t, n, e.width, e.height);
  }
  getVisibleLayoutInfos() {
    let e = this.shouldOverscan
      ? this._overscanManager.getOverscannedRect()
      : this.getVisibleRect();
    return (
      (this._visibleLayoutInfos = this._getLayoutInfoMap(e)),
      this._visibleLayoutInfos
    );
  }
  _getLayoutInfoMap(e, t = !1) {
    let n = this.layout.getVisibleLayoutInfos(e),
      r = new Map();
    for (let e of n) t && (e = e.copy()), r.set(e.key, e);
    return r;
  }
  updateSubviews(e = !1) {
    if (!this._collection) return;
    let t,
      n,
      r,
      i = this.getVisibleLayoutInfos(),
      l = this._visibleViews;
    if (e) (t = i), (n = l), (r = new Set());
    else {
      ({
        toAdd: t,
        toRemove: n,
        toUpdate: r,
      } = (function (e, t) {
        let n = dc(e, t),
          r = dc(t, e),
          i = new Set();
        for (let n of e.keys()) t.has(n) && i.add(n);
        return { toRemove: n, toAdd: r, toUpdate: i };
      })(l, i));
      for (let e of r) {
        let o = l.get(e);
        if (!o || !o.layoutInfo) continue;
        let a = this.getItem(i.get(e).key);
        if (o.content === a) r.delete(e);
        else {
          let { reuseType: i } = this._getReuseType(o.layoutInfo, a);
          o.viewType !== i && (r.delete(e), t.add(e), n.add(e));
        }
      }
      if (0 === t.size && 0 === n.size && 0 === r.size)
        return void (this._transaction && this._applyLayoutInfos());
    }
    let o = new Set();
    for (let e of n.keys()) {
      let t = this._visibleViews.get(e);
      t &&
        (o.add(t),
        this._visibleViews.delete(e),
        this._transaction
          ? this._transaction.toRemove.set(e, t)
          : this.reuseView(t));
    }
    for (let e of t.keys()) {
      let t,
        n = i.get(e);
      this._transaction &&
        (this._transaction.initialLayoutInfo.has(e) &&
          (n = this._transaction.initialLayoutInfo.get(e)),
        (t = this._transaction.toRemove.get(e)),
        t &&
          (this._transaction.toRemove.delete(e), this._applyLayoutInfo(t, n))),
        t || ((t = this.getReusableView(n)), o.has(t) || this._children.add(t)),
        this._visibleViews.set(e, t),
        o.delete(t);
    }
    for (let e of r) {
      let t = l.get(e);
      this._renderedContent.delete(e), this._renderView(t);
    }
    this._transaction || this.removeViews(o),
      this._correctItemOrder(),
      this._flushVisibleViews();
    let a =
      this._transaction &&
      (t.size > 0 || n.size > 0 || this._hasLayoutUpdates());
    return (
      a &&
        requestAnimationFrame(() => {
          this._transaction &&
            requestAnimationFrame(() => this._applyLayoutInfos());
        }),
      a
    );
  }
  afterRender() {
    this.shouldOverscan && this._overscanManager.collectMetrics();
  }
  _flushVisibleViews() {
    let e = new Map([[null, []]]);
    for (let o of this._children) {
      var t, n, r, i, l;
      null ==
        (null === (t = o.layoutInfo) || void 0 === t ? void 0 : t.parentKey) ||
        e.has(o.layoutInfo.parentKey) ||
        e.set(o.layoutInfo.parentKey, []),
        null ===
          (n = e.get(
            null === (r = o.layoutInfo) || void 0 === r ? void 0 : r.parentKey
          )) ||
          void 0 === n ||
          n.push(o),
        e.has(null === (i = o.layoutInfo) || void 0 === i ? void 0 : i.key) ||
          e.set(
            null === (l = o.layoutInfo) || void 0 === l ? void 0 : l.key,
            []
          );
    }
    let o = (t, n) =>
        n.map((n) => {
          let r = e.get(n.layoutInfo.key);
          return this.delegate.renderWrapper(t, n, r, (e) => o(n, e));
        }),
      a = o(null, e.get(null));
    this.delegate.setVisibleViews(a);
  }
  _applyLayoutInfo(e, t) {
    return e.layoutInfo !== t && ((e.layoutInfo = t), !0);
  }
  _applyLayoutInfos() {
    let e = !1;
    for (let t of this._visibleViews.values()) {
      let n = t.layoutInfo;
      if (null != (null == n ? void 0 : n.key)) {
        let r = this.layout.getLayoutInfo(n.key);
        this._applyLayoutInfo(t, r) && (e = !0);
      }
    }
    if (this._transaction) {
      for (let t of this._transaction.toRemove.values()) {
        let n = t.layoutInfo;
        if (null != (null == n ? void 0 : n.key)) {
          let r = this.layout.getLayoutInfo(n.key);
          this._applyLayoutInfo(t, r) && (e = !0);
        }
      }
      for (let t of this._transaction.removed.values()) {
        let n = t.layoutInfo,
          r = this._transaction.finalLayoutInfo.get(n.key) || n;
        (r = this.layout.getFinalLayoutInfo(r.copy())),
          this._applyLayoutInfo(t, r) && (e = !0);
      }
    }
    e && this._flushVisibleViews();
  }
  _hasLayoutUpdates() {
    if (!this._transaction) return !1;
    for (let e of this._visibleViews.values()) {
      let t = e.layoutInfo;
      if (!t) return !0;
      let n = this.layout.getLayoutInfo(t.key);
      if (
        !t.rect.equals(n.rect) ||
        t.opacity !== n.opacity ||
        t.transform !== n.transform
      )
        return !0;
    }
    return !1;
  }
  reuseView(e) {
    e.prepareForReuse(), this._reusableViews[e.viewType].push(e);
  }
  removeViews(e) {
    for (let t of e) this._children.delete(t);
  }
  updateItemSize(e, t) {
    if (!this.layout.updateItemSize) return;
    if (this._scrollAnimation) return void this._sizeUpdateQueue.set(e, t);
    this.layout.updateItemSize(e, t) && this.relayout();
  }
  startScrolling() {
    this._isScrolling = !0;
  }
  endScrolling() {
    (this._isScrolling = !1),
      this._correctItemOrder(),
      this._flushVisibleViews();
  }
  _resetAnimatedContentOffset() {
    this._animatedContentOffset.isOrigin() ||
      ((this._animatedContentOffset = new tc(0, 0)), this._applyLayoutInfos());
  }
  scrollToItem(e, t) {
    if (null == e) return;
    let n = this.layout.getLayoutInfo(e);
    if (!n) return;
    let {
        duration: r = 300,
        shouldScrollX: i = !0,
        shouldScrollY: l = !0,
        offsetX: o = 0,
        offsetY: a = 0,
      } = t,
      s = this.visibleRect.x,
      u = this.visibleRect.y,
      c = n.rect.x - o,
      d = n.rect.y - a,
      p = s + this.visibleRect.width,
      f = u + this.visibleRect.height;
    return (
      i &&
        (c <= s || 0 === p
          ? (s = c)
          : n.rect.maxX > p && (s += n.rect.maxX - p)),
      l &&
        (d <= u || 0 === f
          ? (u = d)
          : n.rect.maxY > f && (u += n.rect.maxY - f)),
      this.scrollTo(new tc(s, u), r)
    );
  }
  scrollTo(e, t = 300) {
    return (
      this._scrollAnimation &&
        (this._scrollAnimation.cancel(), (this._scrollAnimation = null)),
      t <= 0 || this.visibleRect.pointEquals(e)
        ? (this._setContentOffset(e), Promise.resolve())
        : (this.startScrolling(),
          (this._scrollAnimation = (function (e, t, n, r, i) {
            let l,
              o = !1,
              a = new Promise((a) => {
                let s = uc(),
                  u = t.x - e.x,
                  c = t.y - e.y;
                l = requestAnimationFrame(function d(p) {
                  null == oc && (oc = p > 1e12 != uc() > 1e12),
                    oc && (p = uc());
                  let f = p - s;
                  f > n
                    ? (i(t), a())
                    : !1 ===
                        i(new tc(e.x + u * r(f / n), e.y + c * r(f / n))) ||
                      o ||
                      (l = requestAnimationFrame(d));
                });
              });
            return (
              (a.cancel = function () {
                (o = !0), cancelAnimationFrame(l);
              }),
              a
            );
          })(this.visibleRect, e, t, cc, (e) => {
            this._setContentOffset(e);
          })),
          this._scrollAnimation.then(() => {
            this._scrollAnimation = null;
            for (let [e, t] of this._sizeUpdateQueue) this.updateItemSize(e, t);
            this._sizeUpdateQueue.clear(),
              this.relayout(),
              this._processTransactionQueue(),
              this.endScrolling();
          }),
          this._scrollAnimation)
    );
  }
  _runTransaction(e, t) {
    this._startTransaction(),
      this._nextTransaction && this._nextTransaction.actions.push(e),
      this._endTransaction(t);
  }
  _startTransaction() {
    this._nextTransaction || (this._nextTransaction = new mc()),
      this._nextTransaction.level++;
  }
  _endTransaction(e) {
    return (
      !!this._nextTransaction &&
      (null != e && (this._nextTransaction.animated = e),
      !(--this._nextTransaction.level > 0) &&
        (0 === this._nextTransaction.actions.length
          ? ((this._nextTransaction = null), !1)
          : (null == this._nextTransaction.animated &&
              (this._nextTransaction.animated = !0),
            this._transactionQueue.push(this._nextTransaction),
            (this._nextTransaction = null),
            this._processTransactionQueue(),
            !0)))
    );
  }
  _processTransactionQueue() {
    if (this._transaction || this._scrollAnimation) return;
    let e = this._transactionQueue.shift();
    e && this._performTransaction(e);
  }
  _getContentRect() {
    return new nc(0, 0, this.contentSize.width, this.contentSize.height);
  }
  _performTransaction(e) {
    (this._transaction = e),
      this.relayoutNow({
        transaction: e,
        animated: e.animated,
        beforeLayout: () => {
          e.animated &&
            (e.initialMap = this._getLayoutInfoMap(this._getContentRect(), !0));
          for (let t of e.actions) t();
        },
        afterLayout: () => {
          e.animated
            ? ((e.finalMap = this._getLayoutInfoMap(this._getContentRect())),
              this._setupTransactionAnimations(e))
            : (this._transaction = null);
        },
        afterAnimation: () => {
          if (e.toRemove.size > 0 || e.removed.size > 0)
            for (let t of (function* (...e) {
              for (let t of e) yield* t;
            })(e.toRemove.values(), e.removed.values()))
              this._children.delete(t), this.reuseView(t);
          (this._transaction = null),
            this._correctItemOrder(),
            this._flushVisibleViews(),
            this._processTransactionQueue();
        },
      });
  }
  _setupTransactionAnimations(e) {
    let { initialMap: t, finalMap: n } = e;
    for (let [r, i] of t)
      n.has(r)
        ? e.initialLayoutInfo.set(r, i)
        : e.finalLayoutInfo.set(i.key, i);
    for (let [r, i] of n)
      if (!t.has(r)) {
        let t = this.layout.getInitialLayoutInfo(i.copy());
        e.initialLayoutInfo.set(r, t);
      }
    for (let [t, r] of this._visibleViews)
      !n.has(t) &&
        r.layoutInfo.rect.width > 0 &&
        (e.removed.set(t, r),
        this._visibleViews.delete(t),
        r.layoutInfo &&
          (e.finalLayoutInfo.has(r.layoutInfo.key) ||
            e.finalLayoutInfo.set(r.layoutInfo.key, r.layoutInfo)));
  }
  constructor(e = {}) {
    var t;
    (this._contentSize = new rc()),
      (this._visibleRect = new nc()),
      (this._reusableViews = {}),
      (this._visibleLayoutInfos = new Map()),
      (this._visibleViews = new Map()),
      (this._renderedContent = new WeakMap()),
      (this._children = new Set()),
      (this._invalidationContext = null),
      (this._overscanManager = new fc()),
      (this._persistedKeys = new Set()),
      (this._scrollAnimation = null),
      (this._isScrolling = !1),
      (this._sizeUpdateQueue = new Map()),
      (this._animatedContentOffset = new tc(0, 0)),
      (this._transaction = null),
      (this._nextTransaction = null),
      (this._transactionQueue = []),
      (this.transitionDuration =
        null !== (t = e.transitionDuration) && void 0 !== t ? t : 500),
      (this.anchorScrollPosition = e.anchorScrollPosition || !1),
      (this.anchorScrollPositionAtTop = e.anchorScrollPositionAtTop || !1),
      (this.shouldOverscan = !1 !== e.shouldOverscan);
    for (let t of ["delegate", "size", "layout", "collection"])
      e[t] && (this[t] = e[t]);
  }
}
function gc(e) {
  let [t, n] = (0, o.useState)([]),
    [r, i] = (0, o.useState)(new rc()),
    [l, a] = (0, o.useState)(!1),
    [s, u] = (0, o.useState)(!1),
    c = (0, o.useMemo)(() => new hc(), []);
  (c.delegate = {
    setVisibleViews: n,
    setVisibleRect(t) {
      (c.visibleRect = t), e.onVisibleRectChange(t);
    },
    setContentSize: i,
    renderView: e.renderView,
    renderWrapper: e.renderWrapper,
    beginAnimations: () => a(!0),
    endAnimations: () => a(!1),
    getScrollAnchor: e.getScrollAnchor,
  }),
    (c.layout = e.layout),
    (c.collection = e.collection),
    (c.transitionDuration = e.transitionDuration),
    y(() => {
      c.afterRender();
    }),
    (0, o.useEffect)(() => () => c.willUnmount(), []);
  let d = (0, o.useCallback)(
      (e) => {
        c.visibleRect = e;
      },
      [c]
    ),
    p = (0, o.useCallback)(() => {
      c.startScrolling(), u(!0);
    }, [c]),
    f = (0, o.useCallback)(() => {
      c.endScrolling(), u(!1);
    }, [c]);
  return (0, o.useMemo)(
    () => ({
      virtualizer: c,
      visibleViews: t,
      setVisibleRect: d,
      contentSize: r,
      isAnimating: l,
      isScrolling: s,
      startScrolling: p,
      endScrolling: f,
    }),
    [c, t, d, r, l, s, p, f]
  );
}
o = l("acw62");
let yc = null;
function vc(e, t = "assertive", n = 7e3) {
  yc || (yc = new bc()), yc.announce(e, t, n);
}
class bc {
  createLog(e) {
    let t = document.createElement("div");
    return (
      t.setAttribute("role", "log"),
      t.setAttribute("aria-live", e),
      t.setAttribute("aria-relevant", "additions"),
      t
    );
  }
  destroy() {
    this.node && (document.body.removeChild(this.node), (this.node = null));
  }
  announce(e, t = "assertive", n = 7e3) {
    if (!this.node) return;
    let r = document.createElement("div");
    (r.textContent = e),
      "assertive" === t
        ? this.assertiveLog.appendChild(r)
        : this.politeLog.appendChild(r),
      "" !== e &&
        setTimeout(() => {
          r.remove();
        }, n);
  }
  clear(e) {
    this.node &&
      ((e && "assertive" !== e) || (this.assertiveLog.innerHTML = ""),
      (e && "polite" !== e) || (this.politeLog.innerHTML = ""));
  }
  constructor() {
    (this.node = document.createElement("div")),
      (this.node.dataset.liveAnnouncer = "true"),
      Object.assign(this.node.style, {
        border: 0,
        clip: "rect(0 0 0 0)",
        clipPath: "inset(50%)",
        height: 1,
        margin: "0 -1px -1px 0",
        overflow: "hidden",
        padding: 0,
        position: "absolute",
        width: 1,
        whiteSpace: "nowrap",
      }),
      (this.assertiveLog = this.createLog("assertive")),
      this.node.appendChild(this.assertiveLog),
      (this.politeLog = this.createLog("polite")),
      this.node.appendChild(this.politeLog),
      document.body.prepend(this.node);
  }
}
function wc(e) {
  return e && e.__esModule ? e.default : e;
}
new WeakMap();
var Ec;
function kc(e, t) {
  let {
      getRowText: n = (e) => {
        var n;
        return null === (n = t.collection.getItem(e)) || void 0 === n
          ? void 0
          : n.textValue;
      },
    } = e,
    r = Pe(wc(Ec)),
    i = t.selectionManager.rawSelection,
    l = (0, o.useRef)(i);
  z(() => {
    var e;
    if (!t.selectionManager.isFocused) return void (l.current = i);
    let o = Sc(i, l.current),
      a = Sc(l.current, i),
      s = "replace" === t.selectionManager.selectionBehavior,
      u = [];
    if (1 === t.selectionManager.selectedKeys.size && s) {
      if (
        t.collection.getItem(
          t.selectionManager.selectedKeys.keys().next().value
        )
      ) {
        let e = n(t.selectionManager.selectedKeys.keys().next().value);
        e && u.push(r.format("selectedItem", { item: e }));
      }
    } else if (1 === o.size && 0 === a.size) {
      let e = n(o.keys().next().value);
      e && u.push(r.format("selectedItem", { item: e }));
    } else if (
      1 === a.size &&
      0 === o.size &&
      t.collection.getItem(a.keys().next().value)
    ) {
      let e = n(a.keys().next().value);
      e && u.push(r.format("deselectedItem", { item: e }));
    }
    "multiple" === t.selectionManager.selectionMode &&
      (0 === u.length ||
        "all" === i ||
        i.size > 1 ||
        "all" === l.current ||
        (null === (e = l.current) || void 0 === e ? void 0 : e.size) > 1) &&
      u.push(
        "all" === i
          ? r.format("selectedAll")
          : r.format("selectedCount", { count: i.size })
      ),
      u.length > 0 && vc(u.join(" ")),
      (l.current = i);
  }, [i]);
}
function Sc(e, t) {
  let n = new Set();
  if ("all" === e || "all" === t) return n;
  for (let r of e.keys()) t.has(r) || n.add(r);
  return n;
}
function xc(e) {
  let t = Pe(wc(Ec)),
    n = Ht(),
    r =
      ("pointer" === n || "virtual" === n || null == n) &&
      "undefined" != typeof window &&
      "ontouchstart" in window;
  return q(
    (0, o.useMemo)(() => {
      let n,
        i = e.selectionManager.selectionMode,
        l = e.selectionManager.selectionBehavior;
      return (
        r && (n = t.format("longPressToSelect")),
        "replace" === l && "none" !== i && e.hasItemActions ? n : void 0
      );
    }, [
      e.selectionManager.selectionMode,
      e.selectionManager.selectionBehavior,
      e.hasItemActions,
      t,
      r,
    ])
  );
}
function Pc(e, t) {
  let { key: n } = e,
    r = t.selectionManager,
    i = w(),
    l = !t.selectionManager.canSelectItem(n),
    o = t.selectionManager.isSelected(n);
  return {
    checkboxProps: {
      id: i,
      "aria-label": Pe(wc(Ec)).format("select"),
      isSelected: o,
      isDisabled: l,
      onChange: () => r.select(n),
    },
  };
}
Ec = {
  "ar-AE": {
    deselectedItem: (e) => `${e.item} غير المحدد`,
    longPressToSelect: "اضغط مطولًا للدخول إلى وضع التحديد.",
    select: "تحديد",
    selectedAll: "جميع العناصر المحددة.",
    selectedCount: (e, t) =>
      `${t.plural(e.count, {
        "=0": "لم يتم تحديد عناصر",
        one: () => `${t.number(e.count)} عنصر محدد`,
        other: () => `${t.number(e.count)} عنصر محدد`,
      })}.`,
    selectedItem: (e) => `${e.item} المحدد`,
  },
  "bg-BG": {
    deselectedItem: (e) => `${e.item} не е избран.`,
    longPressToSelect:
      "Натиснете и задръжте за да влезете в избирателен режим.",
    select: "Изберете",
    selectedAll: "Всички елементи са избрани.",
    selectedCount: (e, t) =>
      `${t.plural(e.count, {
        "=0": "Няма избрани елементи",
        one: () => `${t.number(e.count)} избран елемент`,
        other: () => `${t.number(e.count)} избрани елементи`,
      })}.`,
    selectedItem: (e) => `${e.item} избран.`,
  },
  "cs-CZ": {
    deselectedItem: (e) => `Položka ${e.item} není vybrána.`,
    longPressToSelect: "Dlouhým stisknutím přejdete do režimu výběru.",
    select: "Vybrat",
    selectedAll: "Vybrány všechny položky.",
    selectedCount: (e, t) =>
      `${t.plural(e.count, {
        "=0": "Nevybrány žádné položky",
        one: () => `Vybrána ${t.number(e.count)} položka`,
        other: () => `Vybráno ${t.number(e.count)} položek`,
      })}.`,
    selectedItem: (e) => `Vybrána položka ${e.item}.`,
  },
  "da-DK": {
    deselectedItem: (e) => `${e.item} ikke valgt.`,
    longPressToSelect: "Lav et langt tryk for at aktivere valgtilstand.",
    select: "Vælg",
    selectedAll: "Alle elementer valgt.",
    selectedCount: (e, t) =>
      `${t.plural(e.count, {
        "=0": "Ingen elementer valgt",
        one: () => `${t.number(e.count)} element valgt`,
        other: () => `${t.number(e.count)} elementer valgt`,
      })}.`,
    selectedItem: (e) => `${e.item} valgt.`,
  },
  "de-DE": {
    deselectedItem: (e) => `${e.item} nicht ausgewählt.`,
    longPressToSelect: "Gedrückt halten, um Auswahlmodus zu öffnen.",
    select: "Auswählen",
    selectedAll: "Alle Elemente ausgewählt.",
    selectedCount: (e, t) =>
      `${t.plural(e.count, {
        "=0": "Keine Elemente ausgewählt",
        one: () => `${t.number(e.count)} Element ausgewählt`,
        other: () => `${t.number(e.count)} Elemente ausgewählt`,
      })}.`,
    selectedItem: (e) => `${e.item} ausgewählt.`,
  },
  "el-GR": {
    deselectedItem: (e) => `Δεν επιλέχθηκε το στοιχείο ${e.item}.`,
    longPressToSelect:
      "Πατήστε παρατεταμένα για να μπείτε σε λειτουργία επιλογής.",
    select: "Επιλογή",
    selectedAll: "Επιλέχθηκαν όλα τα στοιχεία.",
    selectedCount: (e, t) =>
      `${t.plural(e.count, {
        "=0": "Δεν επιλέχθηκαν στοιχεία",
        one: () => `Επιλέχθηκε ${t.number(e.count)} στοιχείο`,
        other: () => `Επιλέχθηκαν ${t.number(e.count)} στοιχεία`,
      })}.`,
    selectedItem: (e) => `Επιλέχθηκε το στοιχείο ${e.item}.`,
  },
  "en-US": {
    deselectedItem: (e) => `${e.item} not selected.`,
    select: "Select",
    selectedCount: (e, t) =>
      `${t.plural(e.count, {
        "=0": "No items selected",
        one: () => `${t.number(e.count)} item selected`,
        other: () => `${t.number(e.count)} items selected`,
      })}.`,
    selectedAll: "All items selected.",
    selectedItem: (e) => `${e.item} selected.`,
    longPressToSelect: "Long press to enter selection mode.",
  },
  "es-ES": {
    deselectedItem: (e) => `${e.item} no seleccionado.`,
    longPressToSelect: "Mantenga pulsado para abrir el modo de selección.",
    select: "Seleccionar",
    selectedAll: "Todos los elementos seleccionados.",
    selectedCount: (e, t) =>
      `${t.plural(e.count, {
        "=0": "Ningún elemento seleccionado",
        one: () => `${t.number(e.count)} elemento seleccionado`,
        other: () => `${t.number(e.count)} elementos seleccionados`,
      })}.`,
    selectedItem: (e) => `${e.item} seleccionado.`,
  },
  "et-EE": {
    deselectedItem: (e) => `${e.item} pole valitud.`,
    longPressToSelect: "Valikurežiimi sisenemiseks vajutage pikalt.",
    select: "Vali",
    selectedAll: "Kõik üksused valitud.",
    selectedCount: (e, t) =>
      `${t.plural(e.count, {
        "=0": "Üksusi pole valitud",
        one: () => `${t.number(e.count)} üksus valitud`,
        other: () => `${t.number(e.count)} üksust valitud`,
      })}.`,
    selectedItem: (e) => `${e.item} valitud.`,
  },
  "fi-FI": {
    deselectedItem: (e) => `Kohdetta ${e.item} ei valittu.`,
    longPressToSelect: "Siirry valintatilaan painamalla pitkään.",
    select: "Valitse",
    selectedAll: "Kaikki kohteet valittu.",
    selectedCount: (e, t) =>
      `${t.plural(e.count, {
        "=0": "Ei yhtään kohdetta valittu",
        one: () => `${t.number(e.count)} kohde valittu`,
        other: () => `${t.number(e.count)} kohdetta valittu`,
      })}.`,
    selectedItem: (e) => `${e.item} valittu.`,
  },
  "fr-FR": {
    deselectedItem: (e) => `${e.item} non sélectionné.`,
    longPressToSelect:
      "Appuyez de manière prolongée pour passer en mode de sélection.",
    select: "Sélectionner",
    selectedAll: "Tous les éléments sélectionnés.",
    selectedCount: (e, t) =>
      `${t.plural(e.count, {
        "=0": "Aucun élément sélectionné",
        one: () => `${t.number(e.count)} élément sélectionné`,
        other: () => `${t.number(e.count)} éléments sélectionnés`,
      })}.`,
    selectedItem: (e) => `${e.item} sélectionné.`,
  },
  "he-IL": {
    deselectedItem: (e) => `${e.item} לא נבחר.`,
    longPressToSelect: "הקשה ארוכה לכניסה למצב בחירה.",
    select: "בחר",
    selectedAll: "כל הפריטים נבחרו.",
    selectedCount: (e, t) =>
      `${t.plural(e.count, {
        "=0": "לא נבחרו פריטים",
        one: () => `פריט ${t.number(e.count)} נבחר`,
        other: () => `${t.number(e.count)} פריטים נבחרו`,
      })}.`,
    selectedItem: (e) => `${e.item} נבחר.`,
  },
  "hr-HR": {
    deselectedItem: (e) => `Stavka ${e.item} nije odabrana.`,
    longPressToSelect: "Dugo pritisnite za ulazak u način odabira.",
    select: "Odaberite",
    selectedAll: "Odabrane su sve stavke.",
    selectedCount: (e, t) =>
      `${t.plural(e.count, {
        "=0": "Nije odabrana nijedna stavka",
        one: () => `Odabrana je ${t.number(e.count)} stavka`,
        other: () => `Odabrano je ${t.number(e.count)} stavki`,
      })}.`,
    selectedItem: (e) => `Stavka ${e.item} je odabrana.`,
  },
  "hu-HU": {
    deselectedItem: (e) => `${e.item} nincs kijelölve.`,
    longPressToSelect: "Nyomja hosszan a kijelöléshez.",
    select: "Kijelölés",
    selectedAll: "Az összes elem kijelölve.",
    selectedCount: (e, t) =>
      `${t.plural(e.count, {
        "=0": "Egy elem sincs kijelölve",
        one: () => `${t.number(e.count)} elem kijelölve`,
        other: () => `${t.number(e.count)} elem kijelölve`,
      })}.`,
    selectedItem: (e) => `${e.item} kijelölve.`,
  },
  "it-IT": {
    deselectedItem: (e) => `${e.item} non selezionato.`,
    longPressToSelect: "Premi a lungo per passare alla modalità di selezione.",
    select: "Seleziona",
    selectedAll: "Tutti gli elementi selezionati.",
    selectedCount: (e, t) =>
      `${t.plural(e.count, {
        "=0": "Nessun elemento selezionato",
        one: () => `${t.number(e.count)} elemento selezionato`,
        other: () => `${t.number(e.count)} elementi selezionati`,
      })}.`,
    selectedItem: (e) => `${e.item} selezionato.`,
  },
  "ja-JP": {
    deselectedItem: (e) => `${e.item} が選択されていません。`,
    longPressToSelect: "長押しして選択モードを開きます。",
    select: "選択",
    selectedAll: "すべての項目を選択しました。",
    selectedCount: (e, t) =>
      `${t.plural(e.count, {
        "=0": "項目が選択されていません",
        one: () => `${t.number(e.count)} 項目を選択しました`,
        other: () => `${t.number(e.count)} 項目を選択しました`,
      })}。`,
    selectedItem: (e) => `${e.item} を選択しました。`,
  },
  "ko-KR": {
    deselectedItem: (e) => `${e.item}이(가) 선택되지 않았습니다.`,
    longPressToSelect: "선택 모드로 들어가려면 길게 누르십시오.",
    select: "선택",
    selectedAll: "모든 항목이 선택되었습니다.",
    selectedCount: (e, t) =>
      `${t.plural(e.count, {
        "=0": "선택된 항목이 없습니다",
        one: () => `${t.number(e.count)}개 항목이 선택되었습니다`,
        other: () => `${t.number(e.count)}개 항목이 선택되었습니다`,
      })}.`,
    selectedItem: (e) => `${e.item}이(가) 선택되었습니다.`,
  },
  "lt-LT": {
    deselectedItem: (e) => `${e.item} nepasirinkta.`,
    longPressToSelect:
      "Norėdami įjungti pasirinkimo režimą, paspauskite ir palaikykite.",
    select: "Pasirinkti",
    selectedAll: "Pasirinkti visi elementai.",
    selectedCount: (e, t) =>
      `${t.plural(e.count, {
        "=0": "Nepasirinktas nė vienas elementas",
        one: () => `Pasirinktas ${t.number(e.count)} elementas`,
        other: () => `Pasirinkta elementų: ${t.number(e.count)}`,
      })}.`,
    selectedItem: (e) => `Pasirinkta: ${e.item}.`,
  },
  "lv-LV": {
    deselectedItem: (e) => `Vienums ${e.item} nav atlasīts.`,
    longPressToSelect: "Ilgi turiet nospiestu. lai ieslēgtu atlases režīmu.",
    select: "Atlasīt",
    selectedAll: "Atlasīti visi vienumi.",
    selectedCount: (e, t) =>
      `${t.plural(e.count, {
        "=0": "Nav atlasīts neviens vienums",
        one: () => `Atlasīto vienumu skaits: ${t.number(e.count)}`,
        other: () => `Atlasīto vienumu skaits: ${t.number(e.count)}`,
      })}.`,
    selectedItem: (e) => `Atlasīts vienums ${e.item}.`,
  },
  "nb-NO": {
    deselectedItem: (e) => `${e.item} er ikke valgt.`,
    longPressToSelect: "Bruk et langt trykk for å gå inn i valgmodus.",
    select: "Velg",
    selectedAll: "Alle elementer er valgt.",
    selectedCount: (e, t) =>
      `${t.plural(e.count, {
        "=0": "Ingen elementer er valgt",
        one: () => `${t.number(e.count)} element er valgt`,
        other: () => `${t.number(e.count)} elementer er valgt`,
      })}.`,
    selectedItem: (e) => `${e.item} er valgt.`,
  },
  "nl-NL": {
    deselectedItem: (e) => `${e.item} niet geselecteerd.`,
    longPressToSelect: "Druk lang om de selectiemodus te openen.",
    select: "Selecteren",
    selectedAll: "Alle items geselecteerd.",
    selectedCount: (e, t) =>
      `${t.plural(e.count, {
        "=0": "Geen items geselecteerd",
        one: () => `${t.number(e.count)} item geselecteerd`,
        other: () => `${t.number(e.count)} items geselecteerd`,
      })}.`,
    selectedItem: (e) => `${e.item} geselecteerd.`,
  },
  "pl-PL": {
    deselectedItem: (e) => `Nie zaznaczono ${e.item}.`,
    longPressToSelect: "Naciśnij i przytrzymaj, aby wejść do trybu wyboru.",
    select: "Zaznacz",
    selectedAll: "Wszystkie zaznaczone elementy.",
    selectedCount: (e, t) =>
      `${t.plural(e.count, {
        "=0": "Nie zaznaczono żadnych elementów",
        one: () => `${t.number(e.count)} zaznaczony element`,
        other: () => `${t.number(e.count)} zaznaczonych elementów`,
      })}.`,
    selectedItem: (e) => `Zaznaczono ${e.item}.`,
  },
  "pt-BR": {
    deselectedItem: (e) => `${e.item} não selecionado.`,
    longPressToSelect: "Mantenha pressionado para entrar no modo de seleção.",
    select: "Selecionar",
    selectedAll: "Todos os itens selecionados.",
    selectedCount: (e, t) =>
      `${t.plural(e.count, {
        "=0": "Nenhum item selecionado",
        one: () => `${t.number(e.count)} item selecionado`,
        other: () => `${t.number(e.count)} itens selecionados`,
      })}.`,
    selectedItem: (e) => `${e.item} selecionado.`,
  },
  "pt-PT": {
    deselectedItem: (e) => `${e.item} não selecionado.`,
    longPressToSelect: "Prima continuamente para entrar no modo de seleção.",
    select: "Selecionar",
    selectedAll: "Todos os itens selecionados.",
    selectedCount: (e, t) =>
      `${t.plural(e.count, {
        "=0": "Nenhum item selecionado",
        one: () => `${t.number(e.count)} item selecionado`,
        other: () => `${t.number(e.count)} itens selecionados`,
      })}.`,
    selectedItem: (e) => `${e.item} selecionado.`,
  },
  "ro-RO": {
    deselectedItem: (e) => `${e.item} neselectat.`,
    longPressToSelect: "Apăsați lung pentru a intra în modul de selectare.",
    select: "Selectare",
    selectedAll: "Toate elementele selectate.",
    selectedCount: (e, t) =>
      `${t.plural(e.count, {
        "=0": "Niciun element selectat",
        one: () => `${t.number(e.count)} element selectat`,
        other: () => `${t.number(e.count)} elemente selectate`,
      })}.`,
    selectedItem: (e) => `${e.item} selectat.`,
  },
  "ru-RU": {
    deselectedItem: (e) => `${e.item} не выбрано.`,
    longPressToSelect: "Нажмите и удерживайте для входа в режим выбора.",
    select: "Выбрать",
    selectedAll: "Выбраны все элементы.",
    selectedCount: (e, t) =>
      `${t.plural(e.count, {
        "=0": "Нет выбранных элементов",
        one: () => `${t.number(e.count)} элемент выбран`,
        other: () => `${t.number(e.count)} элементов выбрано`,
      })}.`,
    selectedItem: (e) => `${e.item} выбрано.`,
  },
  "sk-SK": {
    deselectedItem: (e) => `Nevybraté položky: ${e.item}.`,
    longPressToSelect: "Dlhším stlačením prejdite do režimu výberu.",
    select: "Vybrať",
    selectedAll: "Všetky vybraté položky.",
    selectedCount: (e, t) =>
      `${t.plural(e.count, {
        "=0": "Žiadne vybraté položky",
        one: () => `${t.number(e.count)} vybratá položka`,
        other: () => `Počet vybratých položiek:${t.number(e.count)}`,
      })}.`,
    selectedItem: (e) => `Vybraté položky: ${e.item}.`,
  },
  "sl-SI": {
    deselectedItem: (e) => `Element ${e.item} ni izbran.`,
    longPressToSelect: "Za izbirni način pritisnite in dlje časa držite.",
    select: "Izberite",
    selectedAll: "Vsi elementi so izbrani.",
    selectedCount: (e, t) =>
      `${t.plural(e.count, {
        "=0": "Noben element ni izbran",
        one: () => `${t.number(e.count)} element je izbran`,
        other: () => `${t.number(e.count)} elementov je izbranih`,
      })}.`,
    selectedItem: (e) => `Element ${e.item} je izbran.`,
  },
  "sr-SP": {
    deselectedItem: (e) => `${e.item} nije izabrano.`,
    longPressToSelect: "Dugo pritisnite za ulazak u režim biranja.",
    select: "Izaberite",
    selectedAll: "Izabrane su sve stavke.",
    selectedCount: (e, t) =>
      `${t.plural(e.count, {
        "=0": "Nije izabrana nijedna stavka",
        one: () => `Izabrana je ${t.number(e.count)} stavka`,
        other: () => `Izabrano je ${t.number(e.count)} stavki`,
      })}.`,
    selectedItem: (e) => `${e.item} je izabrano.`,
  },
  "sv-SE": {
    deselectedItem: (e) => `${e.item} ej markerat.`,
    longPressToSelect: "Tryck länge när du vill öppna väljarläge.",
    select: "Markera",
    selectedAll: "Alla markerade objekt.",
    selectedCount: (e, t) =>
      `${t.plural(e.count, {
        "=0": "Inga markerade objekt",
        one: () => `${t.number(e.count)} markerat objekt`,
        other: () => `${t.number(e.count)} markerade objekt`,
      })}.`,
    selectedItem: (e) => `${e.item} markerat.`,
  },
  "tr-TR": {
    deselectedItem: (e) => `${e.item} seçilmedi.`,
    longPressToSelect: "Seçim moduna girmek için uzun basın.",
    select: "Seç",
    selectedAll: "Tüm ögeler seçildi.",
    selectedCount: (e, t) =>
      `${t.plural(e.count, {
        "=0": "Hiçbir öge seçilmedi",
        one: () => `${t.number(e.count)} öge seçildi`,
        other: () => `${t.number(e.count)} öge seçildi`,
      })}.`,
    selectedItem: (e) => `${e.item} seçildi.`,
  },
  "uk-UA": {
    deselectedItem: (e) => `${e.item} не вибрано.`,
    longPressToSelect:
      "Виконайте довге натиснення, щоб перейти в режим вибору.",
    select: "Вибрати",
    selectedAll: "Усі елементи вибрано.",
    selectedCount: (e, t) =>
      `${t.plural(e.count, {
        "=0": "Жодних елементів не вибрано",
        one: () => `${t.number(e.count)} елемент вибрано`,
        other: () => `Вибрано елементів: ${t.number(e.count)}`,
      })}.`,
    selectedItem: (e) => `${e.item} вибрано.`,
  },
  "zh-CN": {
    deselectedItem: (e) => `未选择 ${e.item}。`,
    longPressToSelect: "长按以进入选择模式。",
    select: "选择",
    selectedAll: "已选择所有项目。",
    selectedCount: (e, t) =>
      `${t.plural(e.count, {
        "=0": "未选择项目",
        one: () => `已选择 ${t.number(e.count)} 个项目`,
        other: () => `已选择 ${t.number(e.count)} 个项目`,
      })}。`,
    selectedItem: (e) => `已选择 ${e.item}。`,
  },
  "zh-TW": {
    deselectedItem: (e) => `未選取「${e.item}」。`,
    longPressToSelect: "長按以進入選擇模式。",
    select: "選取",
    selectedAll: "已選取所有項目。",
    selectedCount: (e, t) =>
      `${t.plural(e.count, {
        "=0": "未選取任何項目",
        one: () => `已選取 ${t.number(e.count)} 個項目`,
        other: () => `已選取 ${t.number(e.count)} 個項目`,
      })}。`,
    selectedItem: (e) => `已選取「${e.item}」。`,
  },
};
const Tc = new WeakMap();
function _c(e, t) {
  let { id: n } = Tc.get(e);
  if (!n) throw new Error("Unknown list");
  return `${n}-${(function (e) {
    return "string" == typeof e ? e.replace(/\s*/g, "") : "" + e;
  })(t)}`;
}
function Cc(e, t, n) {
  let { isVirtualized: r, keyboardDelegate: i, onAction: l } = e;
  e["aria-label"] ||
    e["aria-labelledby"] ||
    console.warn(
      "An aria-label or aria-labelledby prop is required for accessibility."
    );
  let { listProps: o } = fa({
      selectionManager: t.selectionManager,
      collection: t.collection,
      disabledKeys: t.disabledKeys,
      ref: n,
      keyboardDelegate: i,
      isVirtualized: r,
      selectOnFocus: "replace" === t.selectionManager.selectionBehavior,
    }),
    a = w();
  Tc.set(t, { id: a, onAction: l });
  let s = xc({ selectionManager: t.selectionManager, hasItemActions: !!l }),
    u = x(
      C(e, { labelable: !0 }),
      {
        role: "grid",
        id: a,
        "aria-multiselectable":
          "multiple" === t.selectionManager.selectionMode ? "true" : void 0,
      },
      0 === t.collection.size ? {} : o,
      s
    );
  return (
    r && ((u["aria-rowcount"] = t.collection.size), (u["aria-colcount"] = 1)),
    kc({}, t),
    { gridProps: u }
  );
}
function Ic(e, t, n) {
  let { node: r, isVirtualized: i, shouldSelectOnPressUp: l } = e,
    { direction: o } = Se(),
    { onAction: a } = Tc.get(t),
    s = k(),
    { itemProps: u, ...c } = ua({
      selectionManager: t.selectionManager,
      key: r.key,
      ref: n,
      isVirtualized: i,
      shouldSelectOnPressUp: l,
      onAction: a ? () => a(r.key) : void 0,
      focus: () => {
        n.current.contains(document.activeElement) || an(n.current);
      },
    }),
    d = x(u, {
      role: "row",
      onKeyDownCapture: (e) => {
        if (!e.currentTarget.contains(e.target)) return;
        let t = Sn(n.current);
        switch (((t.currentNode = document.activeElement), e.key)) {
          case "ArrowLeft": {
            let r = "rtl" === o ? t.nextNode() : t.previousNode();
            if (r) e.preventDefault(), e.stopPropagation(), an(r);
            else if ((e.preventDefault(), e.stopPropagation(), "rtl" === o))
              an(n.current);
            else {
              t.currentNode = n.current;
              let e = Mc(t);
              e && an(e);
            }
            break;
          }
          case "ArrowRight": {
            let r = "rtl" === o ? t.previousNode() : t.nextNode();
            if (r) e.preventDefault(), e.stopPropagation(), an(r);
            else if ((e.preventDefault(), e.stopPropagation(), "ltr" === o))
              an(n.current);
            else {
              t.currentNode = n.current;
              let e = Mc(t);
              e && an(e);
            }
            break;
          }
          case "ArrowUp":
          case "ArrowDown":
            !e.altKey &&
              n.current.contains(e.target) &&
              (e.stopPropagation(),
              e.preventDefault(),
              n.current.parentElement.dispatchEvent(
                new KeyboardEvent(e.nativeEvent.type, e.nativeEvent)
              ));
        }
      },
      onFocus: (e) => {
        e.target === n.current ||
          jt() ||
          t.selectionManager.setFocusedKey(r.key);
      },
      "aria-label": r.textValue || void 0,
      "aria-selected": t.selectionManager.canSelectItem(r.key)
        ? t.selectionManager.isSelected(r.key)
        : void 0,
      "aria-disabled": t.selectionManager.isDisabled(r.key) || void 0,
      "aria-labelledby": s && r.textValue ? `${_c(t, r.key)} ${s}` : void 0,
      id: _c(t, r.key),
    });
  i && (d["aria-rowindex"] = r.index + 1);
  return {
    rowProps: d,
    gridCellProps: { role: "gridcell", "aria-colindex": 1 },
    descriptionProps: { id: s },
    ...c,
  };
}
function Mc(e) {
  let t, n;
  do {
    (n = e.lastChild()), n && (t = n);
  } while (n);
  return t;
}
function Lc(e, t) {
  let { key: n } = e;
  const { checkboxProps: r } = Pc(e, t);
  return { checkboxProps: { ...r, "aria-labelledby": `${r.id} ${_c(t, n)}` } };
}
class Nc extends Ju {
  getLayoutInfo(e) {
    let t = this.layoutInfos.get(e);
    return (
      !t &&
        this.validRect.area < this.contentSize.area &&
        this.lastCollection &&
        ((this.lastValidRect = this.validRect),
        (this.validRect = new nc(0, 0, 1 / 0, 1 / 0)),
        (this.rootNodes = this.buildCollection()),
        (this.validRect = new nc(
          0,
          0,
          this.contentSize.width,
          this.contentSize.height
        )),
        (t = this.layoutInfos.get(e))),
      t
    );
  }
  getVisibleLayoutInfos(e) {
    !this.validRect.containsRect(e) &&
      this.lastCollection &&
      ((this.lastValidRect = this.validRect),
      (this.validRect = this.validRect.union(e)),
      (this.rootNodes = this.buildCollection()));
    let t = [],
      n = (r) => {
        for (let i of r)
          this.isVisible(i, e) &&
            (t.push(i.layoutInfo),
            i.header && t.push(i.header),
            i.children && n(i.children));
      };
    return n(this.rootNodes), t;
  }
  isVisible(e, t) {
    return (
      e.layoutInfo.rect.intersects(t) ||
      e.layoutInfo.isSticky ||
      this.virtualizer.isPersistedKey(e.layoutInfo.key)
    );
  }
  shouldInvalidateEverything(e) {
    return e.sizeChanged;
  }
  validate(e) {
    if (
      ((this.collection = this.virtualizer.collection),
      (this.invalidateEverything = this.shouldInvalidateEverything(e)),
      this.invalidateEverything &&
        ((this.lastValidRect = this.validRect),
        (this.validRect = this.virtualizer.getVisibleRect())),
      (this.rootNodes = this.buildCollection()),
      this.lastCollection && this.collection !== this.lastCollection)
    )
      for (let e of this.lastCollection.getKeys())
        if (!this.collection.getItem(e)) {
          let n = this.layoutNodes.get(e);
          var t;
          if (n)
            this.layoutInfos.delete(n.layoutInfo.key),
              this.layoutInfos.delete(
                null === (t = n.header) || void 0 === t ? void 0 : t.key
              ),
              this.layoutNodes.delete(e);
        }
    (this.lastWidth = this.virtualizer.visibleRect.width),
      (this.lastCollection = this.collection),
      (this.invalidateEverything = !1);
  }
  buildCollection() {
    let e = this.padding,
      t = 0,
      n = [];
    for (let i of this.collection) {
      var r;
      let l =
        null !== (r = this.rowHeight) && void 0 !== r
          ? r
          : this.estimatedRowHeight;
      if (
        "item" === i.type &&
        e + l < this.validRect.y &&
        !this.isValid(i, e)
      ) {
        (e += l), t++;
        continue;
      }
      let o = this.buildChild(i, 0, e);
      if (
        ((e = o.layoutInfo.rect.maxY),
        n.push(o),
        "item" === i.type && e > this.validRect.maxY)
      ) {
        e += (this.collection.size - (n.length + t)) * l;
        break;
      }
    }
    if (this.isLoading) {
      var i;
      let t = new nc(
          0,
          e,
          this.virtualizer.visibleRect.width,
          null !== (i = this.loaderHeight) && void 0 !== i
            ? i
            : this.virtualizer.visibleRect.height
        ),
        r = new ec("loader", "loader", t);
      this.layoutInfos.set("loader", r),
        n.push({ layoutInfo: r }),
        (e = r.rect.maxY);
    }
    if (0 === n.length) {
      var l;
      let t = new nc(
          0,
          e,
          this.virtualizer.visibleRect.width,
          null !== (l = this.placeholderHeight) && void 0 !== l
            ? l
            : this.virtualizer.visibleRect.height
        ),
        r = new ec("placeholder", "placeholder", t);
      this.layoutInfos.set("placeholder", r),
        n.push({ layoutInfo: r }),
        (e = r.rect.maxY);
    }
    return (
      (this.contentSize = new rc(
        this.virtualizer.visibleRect.width,
        e + this.padding
      )),
      n
    );
  }
  isValid(e, t) {
    let n = this.layoutNodes.get(e.key);
    return (
      !this.invalidateEverything &&
      n &&
      n.node === e &&
      t === (n.header || n.layoutInfo).rect.y &&
      n.layoutInfo.rect.intersects(this.lastValidRect) &&
      n.validRect.containsRect(n.layoutInfo.rect.intersection(this.validRect))
    );
  }
  buildChild(e, t, n) {
    if (this.isValid(e, n)) return this.layoutNodes.get(e.key);
    let r = this.buildNode(e, t, n);
    var i;
    return (
      (r.node = e),
      (r.layoutInfo.parentKey =
        null !== (i = e.parentKey) && void 0 !== i ? i : null),
      this.layoutInfos.set(r.layoutInfo.key, r.layoutInfo),
      r.header && this.layoutInfos.set(r.header.key, r.header),
      this.layoutNodes.set(e.key, r),
      r
    );
  }
  buildNode(e, t, n) {
    switch (e.type) {
      case "section":
        return this.buildSection(e, t, n);
      case "item":
        return this.buildItem(e, t, n);
    }
  }
  buildSection(e, t, n) {
    let r = this.virtualizer.visibleRect.width,
      i = this.headingHeight,
      l = !1;
    if (null == i) {
      let t = this.layoutNodes.get(e.key);
      if (t && t.header) {
        let n = this.collection.getItem(e.key),
          o = this.lastCollection ? this.lastCollection.getItem(e.key) : null;
        (i = t.header.rect.height),
          (l = r !== this.lastWidth || n !== o || t.header.estimatedSize);
      } else (i = e.rendered ? this.estimatedHeadingHeight : 0), (l = !0);
    }
    null == i && (i = 48);
    let o = new nc(0, n, r, i),
      a = new ec("header", e.key + ":header", o);
    (a.estimatedSize = l), (a.parentKey = e.key), (n += a.rect.height);
    let s = new nc(0, n, r, 0),
      u = new ec(e.type, e.key, s),
      c = n,
      d = 0,
      p = [];
    for (let r of e.childNodes) {
      var f;
      let i =
        null !== (f = this.rowHeight) && void 0 !== f
          ? f
          : this.estimatedRowHeight;
      if (n + i < this.validRect.y && !this.isValid(e, n)) {
        (n += i), d++;
        continue;
      }
      let l = this.buildChild(r, t, n);
      if (((n = l.layoutInfo.rect.maxY), p.push(l), n > this.validRect.maxY)) {
        n += ([...e.childNodes].length - (p.length + d)) * i;
        break;
      }
    }
    return (
      (s.height = n - c),
      {
        header: a,
        layoutInfo: u,
        children: p,
        validRect: u.rect.intersection(this.validRect),
      }
    );
  }
  buildItem(e, t, n) {
    let r = this.virtualizer.visibleRect.width,
      i = this.rowHeight,
      l = !1;
    if (null == i) {
      let t = this.layoutNodes.get(e.key);
      t
        ? ((i = t.layoutInfo.rect.height),
          (l =
            r !== this.lastWidth || e !== t.node || t.layoutInfo.estimatedSize))
        : ((i = this.estimatedRowHeight), (l = !0));
    }
    null == i && (i = 48),
      "function" == typeof this.indentationForItem &&
        (t += this.indentationForItem(this.collection, e.key) || 0);
    let o = new nc(t, n, r - t, i),
      a = new ec(e.type, e.key, o);
    return (
      (a.allowOverflow = !0),
      (a.estimatedSize = l),
      { layoutInfo: a, validRect: a.rect }
    );
  }
  updateItemSize(e, t) {
    let n = this.layoutInfos.get(e);
    if (!n) return !1;
    if (((n.estimatedSize = !1), n.rect.height !== t.height)) {
      let r = n.copy();
      (r.rect.height = t.height),
        this.layoutInfos.set(e, r),
        this.updateLayoutNode(e, n, r);
      let i = this.collection.getItem(n.parentKey);
      for (; i; )
        this.updateLayoutNode(i.key, n, r),
          (i = this.collection.getItem(i.parentKey));
      return !0;
    }
    return !1;
  }
  updateLayoutNode(e, t, n) {
    let r = this.layoutNodes.get(e);
    r &&
      ((r.validRect = new nc()),
      r.header === t
        ? (r.header = n)
        : r.layoutInfo === t && (r.layoutInfo = n));
  }
  getContentSize() {
    return this.contentSize;
  }
  getKeyAbove(e) {
    let t = this.collection;
    for (e = t.getKeyBefore(e); null != e; ) {
      let n = t.getItem(e);
      if (
        "item" === n.type &&
        (this.allowDisabledKeyFocus || !this.disabledKeys.has(n.key))
      )
        return e;
      e = t.getKeyBefore(e);
    }
  }
  getKeyBelow(e) {
    let t = this.collection;
    for (e = t.getKeyAfter(e); null != e; ) {
      let n = t.getItem(e);
      if (
        "item" === n.type &&
        (this.allowDisabledKeyFocus || !this.disabledKeys.has(n.key))
      )
        return e;
      e = t.getKeyAfter(e);
    }
  }
  getKeyPageAbove(e) {
    let t = this.getLayoutInfo(e);
    if (t) {
      let e = Math.max(
        0,
        t.rect.y + t.rect.height - this.virtualizer.visibleRect.height
      );
      for (; t && t.rect.y > e; ) {
        let e = this.getKeyAbove(t.key);
        t = this.getLayoutInfo(e);
      }
      if (t) return t.key;
    }
    return this.getFirstKey();
  }
  getKeyPageBelow(e) {
    let t = this.getLayoutInfo(null != e ? e : this.getFirstKey());
    if (t) {
      let e = Math.min(
        this.virtualizer.contentSize.height,
        t.rect.y - t.rect.height + this.virtualizer.visibleRect.height
      );
      for (; t && t.rect.y < e; ) {
        let e = this.getKeyBelow(t.key);
        t = this.getLayoutInfo(e);
      }
      if (t) return t.key;
    }
    return this.getLastKey();
  }
  getFirstKey() {
    let e = this.collection,
      t = e.getFirstKey();
    for (; null != t; ) {
      let n = e.getItem(t);
      if (
        "item" === n.type &&
        (this.allowDisabledKeyFocus || !this.disabledKeys.has(n.key))
      )
        return t;
      t = e.getKeyAfter(t);
    }
  }
  getLastKey() {
    let e = this.collection,
      t = e.getLastKey();
    for (; null != t; ) {
      let n = e.getItem(t);
      if (
        "item" === n.type &&
        (this.allowDisabledKeyFocus || !this.disabledKeys.has(n.key))
      )
        return t;
      t = e.getKeyBefore(t);
    }
  }
  getKeyForSearch(e, t) {
    if (!this.collator) return null;
    let n = this.collection,
      r = t || this.getFirstKey();
    for (; null != r; ) {
      let t = n.getItem(r),
        i = t.textValue.slice(0, e.length);
      if (t.textValue && 0 === this.collator.compare(i, e)) return r;
      r = this.getKeyBelow(r);
    }
    return null;
  }
  getInitialLayoutInfo(e) {
    return (e.opacity = 0), (e.transform = "scale3d(0.8, 0.8, 0.8)"), e;
  }
  getFinalLayoutInfo(e) {
    return (e.opacity = 0), (e.transform = "scale3d(0.8, 0.8, 0.8)"), e;
  }
  getDropTargetFromPoint(e, t, n) {
    (e += this.virtualizer.visibleRect.x),
      (t += this.virtualizer.visibleRect.y);
    let r = this.virtualizer.keyAtPoint(new tc(e, t));
    if (null == r || 0 === this.collection.size) return { type: "root" };
    let i = this.getLayoutInfo(r),
      l = i.rect,
      o = { type: "item", key: i.key, dropPosition: "on" };
    return (
      n(o)
        ? t <= l.y + 10 && n({ ...o, dropPosition: "before" })
          ? (o.dropPosition = "before")
          : t >= l.maxY - 10 &&
            n({ ...o, dropPosition: "after" }) &&
            (o.dropPosition = "after")
        : t <= l.y + l.height / 2 && n({ ...o, dropPosition: "before" })
        ? (o.dropPosition = "before")
        : n({ ...o, dropPosition: "after" }) && (o.dropPosition = "after"),
      o
    );
  }
  constructor(e = {}) {
    super(),
      ae(this, "disabledKeys", new Set()),
      ae(this, "allowDisabledKeyFocus", !1),
      (this.rowHeight = e.rowHeight),
      (this.estimatedRowHeight = e.estimatedRowHeight),
      (this.headingHeight = e.headingHeight),
      (this.estimatedHeadingHeight = e.estimatedHeadingHeight),
      (this.padding = e.padding || 0),
      (this.indentationForItem = e.indentationForItem),
      (this.collator = e.collator),
      (this.loaderHeight = e.loaderHeight),
      (this.placeholderHeight = e.placeholderHeight),
      (this.layoutInfos = new Map()),
      (this.layoutNodes = new Map()),
      (this.rootNodes = []),
      (this.lastWidth = 0),
      (this.lastCollection = null),
      (this.allowDisabledKeyFocus = e.allowDisabledKeyFocus),
      (this.lastValidRect = new nc()),
      (this.validRect = new nc()),
      (this.contentSize = new rc());
  }
}
o = l("acw62");
let Rc = Symbol.iterator;
class Oc {
  *[Rc]() {
    yield* this.iterable;
  }
  get size() {
    return this.keyMap.size;
  }
  getKeys() {
    return this.keyMap.keys();
  }
  getKeyBefore(e) {
    let t = this.keyMap.get(e);
    return t ? t.prevKey : null;
  }
  getKeyAfter(e) {
    let t = this.keyMap.get(e);
    return t ? t.nextKey : null;
  }
  getFirstKey() {
    return this.firstKey;
  }
  getLastKey() {
    return this.lastKey;
  }
  getItem(e) {
    return this.keyMap.get(e);
  }
  at(e) {
    const t = [...this.getKeys()];
    return this.getItem(t[e]);
  }
  constructor(e) {
    ae(this, "keyMap", new Map()), (this.iterable = e);
    let t,
      n = (e) => {
        if ((this.keyMap.set(e.key, e), e.childNodes && "section" === e.type))
          for (let t of e.childNodes) n(t);
      };
    for (let t of e) n(t);
    let r = 0;
    for (let [e, n] of this.keyMap)
      t
        ? ((t.nextKey = e), (n.prevKey = t.key))
        : ((this.firstKey = e), (n.prevKey = void 0)),
        "item" === n.type && (n.index = r++),
        (t = n),
        (t.nextKey = void 0);
    this.lastKey = null == t ? void 0 : t.key;
  }
}
function Ac(e) {
  let { filter: t } = e,
    n = Aa(e),
    r = (0, o.useMemo)(
      () => (e.disabledKeys ? new Set(e.disabledKeys) : new Set()),
      [e.disabledKeys]
    ),
    i = (0, o.useMemo)(
      () => ({ suppressTextValueWarning: e.suppressTextValueWarning }),
      [e.suppressTextValueWarning]
    ),
    l = ka(e, (e) => new Oc(t ? t(e) : e), i, [t]);
  return (
    (0, o.useEffect)(() => {
      null == n.focusedKey || l.getItem(n.focusedKey) || n.setFocusedKey(null);
    }, [l, n.focusedKey]),
    { collection: l, disabledKeys: r, selectionManager: new za(l, n) }
  );
}
function Fc(e) {
  var t;
  let [n, r] = s(
      e.selectedKey,
      null !== (t = e.defaultSelectedKey) && void 0 !== t ? t : null,
      e.onSelectionChange
    ),
    i = (0, o.useMemo)(() => (null != n ? [n] : []), [n]),
    {
      collection: l,
      disabledKeys: a,
      selectionManager: u,
    } = Ac({
      ...e,
      selectionMode: "single",
      disallowEmptySelection: !0,
      allowDuplicateSelectionEvents: !0,
      selectedKeys: i,
      onSelectionChange: (t) => {
        let i = t.values().next().value;
        i === n && e.onSelectionChange && e.onSelectionChange(i), r(i);
      },
    }),
    c = null != n ? l.getItem(n) : null;
  return {
    collection: l,
    disabledKeys: a,
    selectionManager: u,
    selectedKey: n,
    setSelectedKey: r,
    selectedItem: c,
  };
}
o = l("acw62");
function zc(e) {
  let {
    id: t,
    label: n,
    "aria-labelledby": r,
    "aria-label": i,
    labelElementType: l = "label",
  } = e;
  t = w(t);
  let o = w(),
    a = {};
  return (
    n
      ? ((r = r ? `${r} ${o}` : o),
        (a = { id: o, htmlFor: "label" === l ? t : void 0 }))
      : r ||
        i ||
        console.warn(
          "If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility"
        ),
    {
      labelProps: a,
      fieldProps: F({ id: t, "aria-label": i, "aria-labelledby": r }),
    }
  );
}
function Dc(e) {
  let { description: t, errorMessage: n, validationState: r } = e,
    { labelProps: i, fieldProps: l } = zc(e),
    o = k([Boolean(t), Boolean(n), r]),
    a = k([Boolean(t), Boolean(n), r]);
  return (
    (l = x(l, {
      "aria-describedby":
        [o, a, e["aria-describedby"]].filter(Boolean).join(" ") || void 0,
    })),
    {
      labelProps: i,
      fieldProps: l,
      descriptionProps: { id: o },
      errorMessageProps: { id: a },
    }
  );
}
function Kc(e) {
  let {
      value: t = 0,
      minValue: n = 0,
      maxValue: r = 100,
      valueLabel: i,
      isIndeterminate: l,
      formatOptions: o = { style: "percent" },
    } = e,
    a = C(e, { labelable: !0 }),
    { labelProps: s, fieldProps: c } = zc({ ...e, labelElementType: "span" });
  t = u(t, n, r);
  let d = (t - n) / (r - n),
    p = Te(o);
  if (!l && !i) {
    let e = "percent" === o.style ? d : t;
    i = p.format(e);
  }
  return {
    progressBarProps: x(a, {
      ...c,
      "aria-valuenow": l ? void 0 : t,
      "aria-valuemin": n,
      "aria-valuemax": r,
      "aria-valuetext": l ? void 0 : i,
      role: "progressbar",
    }),
    labelProps: s,
  };
}
function Vc(e) {
  return e && e.__esModule ? e.default : e;
}
function Uc(e, t, n, r) {
  Object.defineProperty(e, t, {
    get: n,
    set: r,
    enumerable: !0,
    configurable: !0,
  });
}
var Bc,
  jc,
  $c,
  Hc,
  Wc,
  qc,
  Gc,
  Qc,
  Yc,
  Xc,
  Zc,
  Jc,
  ed,
  td,
  nd = {};
Uc(
  nd,
  "spectrum-BarLoader",
  () => Bc,
  (e) => (Bc = e)
),
  Uc(
    nd,
    "spectrum-BarLoader--indeterminate",
    () => jc,
    (e) => (jc = e)
  ),
  Uc(
    nd,
    "spectrum-BarLoader--sideLabel",
    () => $c,
    (e) => ($c = e)
  ),
  Uc(
    nd,
    "spectrum-BarLoader-track",
    () => Hc,
    (e) => (Hc = e)
  ),
  Uc(
    nd,
    "spectrum-BarLoader-fill",
    () => Wc,
    (e) => (Wc = e)
  ),
  Uc(
    nd,
    "spectrum-BarLoader-label",
    () => qc,
    (e) => (qc = e)
  ),
  Uc(
    nd,
    "spectrum-BarLoader-percentage",
    () => Gc,
    (e) => (Gc = e)
  ),
  Uc(
    nd,
    "spectrum-BarLoader--small",
    () => Qc,
    (e) => (Qc = e)
  ),
  Uc(
    nd,
    "indeterminate-loop-ltr",
    () => Yc,
    (e) => (Yc = e)
  ),
  Uc(
    nd,
    "indeterminate-loop-rtl",
    () => Xc,
    (e) => (Xc = e)
  ),
  Uc(
    nd,
    "spectrum-BarLoader--overBackground",
    () => Zc,
    (e) => (Zc = e)
  ),
  Uc(
    nd,
    "is-positive",
    () => Jc,
    (e) => (Jc = e)
  ),
  Uc(
    nd,
    "is-warning",
    () => ed,
    (e) => (ed = e)
  ),
  Uc(
    nd,
    "is-critical",
    () => td,
    (e) => (td = e)
  ),
  (Bc = "spectrum-BarLoader_48541f"),
  (jc = "spectrum-BarLoader--indeterminate_48541f"),
  ($c = "spectrum-BarLoader--sideLabel_48541f"),
  (Hc = "spectrum-BarLoader-track_48541f"),
  (Wc = "spectrum-BarLoader-fill_48541f"),
  (qc = "spectrum-BarLoader-label_48541f"),
  (Gc = "spectrum-BarLoader-percentage_48541f"),
  (Qc = "spectrum-BarLoader--small_48541f"),
  (Yc = "indeterminate-loop-ltr_48541f"),
  (Xc = "indeterminate-loop-rtl_48541f"),
  (Zc = "spectrum-BarLoader--overBackground_48541f"),
  (Jc = "is-positive_48541f"),
  (ed = "is-warning_48541f"),
  (td = "is-critical_48541f");
let rd = t(o).forwardRef(function (e, n) {
  let {
      value: r = 0,
      minValue: i = 0,
      maxValue: l = 100,
      size: a = "L",
      label: s,
      barClassName: c,
      showValueLabel: d = !!s,
      labelPosition: p = "top",
      isIndeterminate: f = !1,
      barProps: m,
      labelProps: h,
      "aria-label": g,
      "aria-labelledby": y,
      ...v
    } = e,
    b = Oe(n),
    { styleProps: w } = tt(v);
  r = u(r, i, l);
  let E = {};
  if (!f) {
    let e = (r - i) / (l - i);
    E.width = `${Math.round(100 * e)}%`;
  }
  return (
    s ||
      g ||
      y ||
      console.warn(
        "If you do not provide a visible label via children, you must specify an aria-label or aria-labelledby attribute for accessibility"
      ),
    t(o).createElement(
      "div",
      {
        ...m,
        ref: b,
        className: Me(
          Vc(nd),
          "spectrum-BarLoader",
          {
            "spectrum-BarLoader--small": "S" === a,
            "spectrum-BarLoader--large": "L" === a,
            "spectrum-BarLoader--indeterminate": f,
            "spectrum-BarLoader--sideLabel": "side" === p,
          },
          c,
          w.className
        ),
        style: { minWidth: "-moz-fit-content", ...w.style },
      },
      s &&
        t(o).createElement(
          "span",
          { ...h, className: Me(Vc(nd), "spectrum-BarLoader-label") },
          s
        ),
      d &&
        t(o).createElement(
          "div",
          { className: Me(Vc(nd), "spectrum-BarLoader-percentage") },
          m["aria-valuetext"]
        ),
      t(o).createElement(
        "div",
        { className: Me(Vc(nd), "spectrum-BarLoader-track") },
        t(o).createElement("div", {
          className: Me(Vc(nd), "spectrum-BarLoader-fill"),
          style: E,
        })
      )
    )
  );
});
t(o).forwardRef(function (e, n) {
  let { variant: r, ...i } = e;
  const { progressBarProps: l, labelProps: a } = Kc(e);
  return t(o).createElement(rd, {
    ...i,
    ref: n,
    barProps: l,
    labelProps: a,
    barClassName: Me(Vc(nd), {
      "spectrum-BarLoader--overBackground": "overBackground" === r,
    }),
  });
});
var id,
  ld,
  od,
  ad,
  sd,
  ud,
  cd,
  dd,
  pd,
  fd,
  md,
  hd,
  gd,
  yd,
  vd,
  bd,
  wd = {};
Uc(
  wd,
  "spectrum-CircleLoader--indeterminate-fill-submask-2",
  () => id,
  (e) => (id = e)
),
  Uc(
    wd,
    "spectrum-fill-mask-2",
    () => ld,
    (e) => (ld = e)
  ),
  Uc(
    wd,
    "spectrum-CircleLoader",
    () => od,
    (e) => (od = e)
  ),
  Uc(
    wd,
    "spectrum-CircleLoader-track",
    () => ad,
    (e) => (ad = e)
  ),
  Uc(
    wd,
    "spectrum-CircleLoader-fills",
    () => sd,
    (e) => (sd = e)
  ),
  Uc(
    wd,
    "spectrum-CircleLoader-fill",
    () => ud,
    (e) => (ud = e)
  ),
  Uc(
    wd,
    "spectrum-CircleLoader-fillMask1",
    () => cd,
    (e) => (cd = e)
  ),
  Uc(
    wd,
    "spectrum-CircleLoader-fillMask2",
    () => dd,
    (e) => (dd = e)
  ),
  Uc(
    wd,
    "spectrum-CircleLoader-fillSubMask1",
    () => pd,
    (e) => (pd = e)
  ),
  Uc(
    wd,
    "spectrum-CircleLoader-fillSubMask2",
    () => fd,
    (e) => (fd = e)
  ),
  Uc(
    wd,
    "spectrum-CircleLoader--small",
    () => md,
    (e) => (md = e)
  ),
  Uc(
    wd,
    "spectrum-CircleLoader--large",
    () => hd,
    (e) => (hd = e)
  ),
  Uc(
    wd,
    "spectrum-CircleLoader--indeterminate",
    () => gd,
    (e) => (gd = e)
  ),
  Uc(
    wd,
    "spectrum-fills-rotate",
    () => yd,
    (e) => (yd = e)
  ),
  Uc(
    wd,
    "spectrum-fill-mask-1",
    () => vd,
    (e) => (vd = e)
  ),
  Uc(
    wd,
    "spectrum-CircleLoader--overBackground",
    () => bd,
    (e) => (bd = e)
  ),
  (id = "spectrum-CircleLoader--indeterminate-fill-submask-2_7c1153"),
  (ld = "spectrum-fill-mask-2_7c1153"),
  (od = "spectrum-CircleLoader_7c1153"),
  (ad = "spectrum-CircleLoader-track_7c1153"),
  (sd = "spectrum-CircleLoader-fills_7c1153"),
  (ud = "spectrum-CircleLoader-fill_7c1153"),
  (cd = "spectrum-CircleLoader-fillMask1_7c1153"),
  (dd = "spectrum-CircleLoader-fillMask2_7c1153"),
  (pd = "spectrum-CircleLoader-fillSubMask1_7c1153"),
  (fd = "spectrum-CircleLoader-fillSubMask2_7c1153"),
  (md = "spectrum-CircleLoader--small_7c1153"),
  (hd = "spectrum-CircleLoader--large_7c1153"),
  (gd = "spectrum-CircleLoader--indeterminate_7c1153"),
  (yd = "spectrum-fills-rotate_7c1153"),
  (vd = "spectrum-fill-mask-1_7c1153"),
  (bd = "spectrum-CircleLoader--overBackground_7c1153");
let Ed = t(o).forwardRef(function (e, n) {
  let {
      value: r = 0,
      minValue: i = 0,
      maxValue: l = 100,
      size: a = "M",
      variant: s,
      isIndeterminate: c = !1,
      "aria-label": d,
      "aria-labelledby": p,
      ...f
    } = e,
    m = Oe(n),
    { styleProps: h } = tt(f);
  r = u(r, i, l);
  let { progressBarProps: g } = Kc({ ...e, value: r }),
    y = {},
    v = {};
  if (!c) {
    let e,
      t = ((r - i) / (l - i)) * 100;
    t > 0 && t <= 50
      ? ((e = (t / 50) * 180 - 180),
        (y.transform = `rotate(${e}deg)`),
        (v.transform = "rotate(-180deg)"))
      : t > 50 &&
        ((e = ((t - 50) / 50) * 180 - 180),
        (y.transform = "rotate(0deg)"),
        (v.transform = `rotate(${e}deg)`));
  }
  return (
    d ||
      p ||
      console.warn(
        "ProgressCircle requires an aria-label or aria-labelledby attribute for accessibility"
      ),
    t(o).createElement(
      "div",
      {
        ...h,
        ...g,
        ref: m,
        className: Me(
          Vc(wd),
          "spectrum-CircleLoader",
          {
            "spectrum-CircleLoader--indeterminate": c,
            "spectrum-CircleLoader--small": "S" === a,
            "spectrum-CircleLoader--large": "L" === a,
            "spectrum-CircleLoader--overBackground": "overBackground" === s,
          },
          h.className
        ),
      },
      t(o).createElement("div", {
        className: Me(Vc(wd), "spectrum-CircleLoader-track"),
      }),
      t(o).createElement(
        "div",
        { className: Me(Vc(wd), "spectrum-CircleLoader-fills") },
        t(o).createElement(
          "div",
          { className: Me(Vc(wd), "spectrum-CircleLoader-fillMask1") },
          t(o).createElement(
            "div",
            {
              className: Me(Vc(wd), "spectrum-CircleLoader-fillSubMask1"),
              "data-testid": "fillSubMask1",
              style: y,
            },
            t(o).createElement("div", {
              className: Me(Vc(wd), "spectrum-CircleLoader-fill"),
            })
          )
        ),
        t(o).createElement(
          "div",
          { className: Me(Vc(wd), "spectrum-CircleLoader-fillMask2") },
          t(o).createElement(
            "div",
            {
              className: Me(Vc(wd), "spectrum-CircleLoader-fillSubMask2"),
              "data-testid": "fillSubMask2",
              style: v,
            },
            t(o).createElement("div", {
              className: Me(Vc(wd), "spectrum-CircleLoader-fill"),
            })
          )
        )
      )
    )
  );
});
(o = l("acw62")), (o = l("acw62"));
let kd = null;
function Sd(e = !1) {
  if (null === kd || e) {
    const e = document.createElement("div"),
      t = e.style;
    (t.width = "50px"),
      (t.height = "50px"),
      (t.overflow = "scroll"),
      (t.direction = "rtl");
    const n = document.createElement("div"),
      r = n.style;
    return (
      (r.width = "100px"),
      (r.height = "100px"),
      e.appendChild(n),
      document.body.appendChild(e),
      e.scrollLeft > 0
        ? (kd = "positive-descending")
        : ((e.scrollLeft = 1),
          (kd = 0 === e.scrollLeft ? "negative" : "positive-ascending")),
      document.body.removeChild(e),
      kd
    );
  }
  return kd;
}
const xd = t(o).forwardRef(function (e, n) {
  let {
      contentSize: r,
      onVisibleRectChange: i,
      children: l,
      innerStyle: s,
      sizeToFit: u,
      onScrollStart: c,
      onScrollEnd: d,
      scrollDirection: p = "both",
      ...f
    } = e,
    m = (0, o.useRef)();
  n = n || m;
  let h = (0, o.useRef)({
      scrollTop: 0,
      scrollLeft: 0,
      scrollEndTime: 0,
      scrollTimeout: null,
      width: 0,
      height: 0,
      isScrolling: !1,
    }).current,
    { direction: g } = Se(),
    [v, b] = (0, o.useState)(!1),
    w = (0, o.useCallback)(
      (t) => {
        t.target === t.currentTarget &&
          (e.onScroll && e.onScroll(t),
          (0, a.flushSync)(() => {
            let e = t.currentTarget.scrollTop,
              n = (function (e, t) {
                let { scrollLeft: n } = e;
                if ("rtl" === t) {
                  let { scrollWidth: t, clientWidth: r } = e;
                  switch (Sd()) {
                    case "negative":
                      n = -n;
                      break;
                    case "positive-descending":
                      n = t - r - n;
                  }
                }
                return n;
              })(t.currentTarget, g);
            (h.scrollTop = Math.max(0, Math.min(e, r.height - h.height))),
              (h.scrollLeft = Math.max(0, Math.min(n, r.width - h.width))),
              i(new nc(h.scrollLeft, h.scrollTop, h.width, h.height)),
              h.isScrolling || ((h.isScrolling = !0), b(!0), c && c());
            let l = Date.now();
            h.scrollEndTime <= l + 50 &&
              ((h.scrollEndTime = l + 300),
              clearTimeout(h.scrollTimeout),
              (h.scrollTimeout = setTimeout(() => {
                (h.isScrolling = !1), b(!1), (h.scrollTimeout = null), d && d();
              }, 300)));
          }));
      },
      [e, g, h, r, i, c, d]
    );
  (0, o.useEffect)(
    () => () => {
      clearTimeout(h.scrollTimeout);
    },
    []
  );
  let E = (0, o.useCallback)(() => {
    let e = n.current;
    if (!e) return;
    let t = e.clientWidth,
      l = e.clientHeight;
    u &&
      r.width > 0 &&
      r.height > 0 &&
      ("width" === u
        ? (t = Math.min(t, r.width))
        : "height" === u && (l = Math.min(l, r.height))),
      (h.width === t && h.height === l) ||
        ((h.width = t),
        (h.height = l),
        i(new nc(h.scrollLeft, h.scrollTop, t, l)));
  }, [i, n, h, u, r]);
  y(() => {
    E();
  }, [E]),
    D({ ref: n, onResize: E });
  let k = { padding: 0, ...f.style };
  return (
    "horizontal" === p
      ? ((k.overflowX = "auto"), (k.overflowY = "hidden"))
      : "vertical" === p
      ? ((k.overflowY = "auto"), (k.overflowX = "hidden"))
      : (k.overflow = "auto"),
    t(o).createElement(
      "div",
      { ...f, style: k, ref: n, onScroll: w },
      t(o).createElement(
        "div",
        {
          role: "presentation",
          style: {
            width: r.width,
            height: r.height,
            pointerEvents: v ? "none" : "auto",
            position: "relative",
            ...s,
          },
        },
        l
      )
    )
  );
});
function Pd(e) {
  let {
      reusableView: { layoutInfo: t, virtualizer: n },
      ref: r,
    } = e,
    i = (0, o.useCallback)(() => {
      let e = (function (e) {
        let t = e.style.height;
        e.style.height = "";
        let n = new rc(e.scrollWidth, e.scrollHeight);
        return (e.style.height = t), n;
      })(r.current);
      n.updateItemSize(t.key, e);
    }, [n, t.key, r]);
  return (
    y(() => {
      t.estimatedSize && i();
    }),
    { updateSize: i }
  );
}
function Td(e) {
  let { className: n, reusableView: r, parent: i } = e,
    { direction: l } = Se(),
    a = (0, o.useRef)();
  return (
    Pd({ reusableView: r, ref: a }),
    t(o).createElement(
      "div",
      {
        role: "presentation",
        ref: a,
        className: n,
        style: Cd(r.layoutInfo, l, i && i.layoutInfo),
      },
      r.rendered
    )
  );
}
let _d = new WeakMap();
function Cd(e, t, n) {
  let r = "rtl" === t ? "right" : "left",
    i = _d.get(e);
  if (i && null != i[r]) {
    if (!n) return i;
    let t = e.rect.y - n.rect.y,
      l = e.rect.x - n.rect.x;
    if (i.top === t && i[r] === l) return i;
  }
  let l = {
    position: e.isSticky ? "sticky" : "absolute",
    overflow: e.allowOverflow ? "visible" : "hidden",
    top: e.rect.y - (n ? n.rect.y : 0),
    [r]: e.rect.x - (n ? n.rect.x : 0),
    transition: "all",
    WebkitTransition: "all",
    WebkitTransitionDuration: "inherit",
    transitionDuration: "inherit",
    width: e.rect.width,
    height: e.rect.height,
    opacity: e.opacity,
    zIndex: e.zIndex,
    transform: e.transform,
    contain: "size layout style",
  };
  return _d.set(e, l), l;
}
const Id = t(o).forwardRef(function (e, n) {
  let {
      children: r,
      renderWrapper: i,
      layout: l,
      collection: a,
      sizeToFit: s,
      scrollDirection: u,
      transitionDuration: c,
      isLoading: d,
      onLoadMore: p,
      focusedKey: f,
      shouldUseVirtualFocus: m,
      scrollToItem: h,
      ...g
    } = e,
    v = (0, o.useRef)();
  n = n || v;
  let b = gc({
      transitionDuration: c,
      layout: l,
      collection: a,
      renderView: r,
      renderWrapper: i || Md,
      onVisibleRectChange(e) {
        (n.current.scrollLeft = e.x), (n.current.scrollTop = e.y);
      },
    }),
    { virtualizerProps: w } = (function (e, t, n) {
      let { focusedKey: r, scrollToItem: i, shouldUseVirtualFocus: l } = e,
        { virtualizer: a } = t,
        s = (0, o.useRef)(null),
        u = (0, o.useRef)(!1);
      (0, o.useEffect)(() => {
        if (0 === a.visibleRect.height) return;
        let e = $t();
        r === s.current ||
          ("pointer" === e && u.current) ||
          (i ? i(r) : a.scrollToItem(r, { duration: 0 })),
          (s.current = r);
      }, [r, a.visibleRect.height, a, s, i]),
        (a.persistedKeys = (0, o.useMemo)(
          () => (r ? new Set([r]) : new Set()),
          [r]
        ));
      let c = (0, o.useCallback)(
          (e) => {
            let t = $t();
            !u.current &&
              n.current.contains(e.target) &&
              "pointer" !== t &&
              (i ? i(r) : a.scrollToItem(r, { duration: 0 })),
              (u.current = e.target !== n.current);
          },
          [n, a, r, i]
        ),
        d = (0, o.useCallback)(
          (e) => {
            u.current = n.current.contains(e.relatedTarget);
          },
          [n]
        ),
        p = a.getView(r);
      (0, o.useEffect)(() => {
        r &&
          !p &&
          u.current &&
          document.activeElement !== n.current &&
          I(n.current);
      });
      let f,
        m = (function ({ isEmpty: e, hasRenderedAnything: t }, n) {
          let [r, i] = (0, o.useState)(!1);
          return (
            (0, o.useEffect)(() => {
              if ((null == n ? void 0 : n.current) && e && t) {
                let e = Sn(n.current, { tabbable: !0 });
                i(!!e.nextNode());
              }
            }, [n, e, t]),
            r
          );
        })(
          {
            isEmpty: 0 === a.collection.size,
            hasRenderedAnything:
              a.contentSize.height > 0 || a.contentSize.width > 0,
          },
          n
        );
      l || (f = p || m ? -1 : 0);
      return { virtualizerProps: { tabIndex: f, onFocus: c, onBlur: d } };
    })(e, b, n),
    E = (0, o.useCallback)(
      (e) => {
        if ((b.setVisibleRect(e), !d && p)) {
          let t = b.virtualizer.contentSize.height - 2 * e.height;
          e.y > t && p();
        }
      },
      [d, p, b]
    );
  return (
    y(() => {
      d ||
        !p ||
        b.isAnimating ||
        (b.contentSize.height > 0 &&
          b.contentSize.height <= b.virtualizer.visibleRect.height &&
          p());
    }, [b.contentSize, b.isAnimating, b.virtualizer, p, d]),
    t(o).createElement(
      xd,
      {
        ...x(g, w),
        ref: n,
        innerStyle: b.isAnimating
          ? { transition: `none ${b.virtualizer.transitionDuration}ms` }
          : void 0,
        contentSize: b.contentSize,
        onVisibleRectChange: E,
        onScrollStart: b.startScrolling,
        onScrollEnd: b.endScrolling,
        sizeToFit: s,
        scrollDirection: u,
      },
      b.visibleViews
    )
  );
});
function Md(e, n) {
  return t(o).createElement(Td, { key: n.key, reusableView: n, parent: e });
}
var Ld;
Ld = function (e) {
  return Dd.default.createElement(
    Gi,
    e,
    Dd.default.createElement(Nd.CheckmarkSmall, null)
  );
};
var Nd = {};
Object.defineProperty(Nd, "__esModule", { value: !0 }),
  (Nd.CheckmarkSmall = Fd);
var Rd = (function (e) {
  return e && e.__esModule ? e : { default: e };
})(l("acw62"));
function Od() {
  return (
    (Od =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Od.apply(this, arguments)
  );
}
function Ad(e, t) {
  if (null == e) return {};
  var n,
    r,
    i = (function (e, t) {
      if (null == e) return {};
      var n,
        r,
        i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++)
        (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (r = 0; r < l.length; r++)
      (n = l[r]),
        t.indexOf(n) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
  }
  return i;
}
function Fd(e) {
  var t = e.scale,
    n = void 0 === t ? "M" : t,
    r = Ad(e, ["scale"]);
  return Rd.default.createElement(
    "svg",
    Od({}, r, r),
    "L" === n &&
      Rd.default.createElement("path", {
        d: "M4.5 11a.999.999 0 0 1-.788-.385l-3-4a1 1 0 1 1 1.576-1.23L4.5 8.376l5.212-6.99a1 1 0 1 1 1.576 1.23l-6 8A.999.999 0 0 1 4.5 11z",
      }),
    "M" === n &&
      Rd.default.createElement("path", {
        d: "M3.788 9A.999.999 0 0 1 3 8.615l-2.288-3a1 1 0 1 1 1.576-1.23l1.5 1.991 3.924-4.991a1 1 0 1 1 1.576 1.23l-4.712 6A.999.999 0 0 1 3.788 9z",
      })
  );
}
Fd.displayName = "CheckmarkSmall";
var zd,
  Dd = Br(l("acw62"));
zd = function (e) {
  return $d.default.createElement(
    Gi,
    e,
    $d.default.createElement(Kd.DashSmall, null)
  );
};
var Kd = {};
Object.defineProperty(Kd, "__esModule", { value: !0 }), (Kd.DashSmall = jd);
var Vd = (function (e) {
  return e && e.__esModule ? e : { default: e };
})(l("acw62"));
function Ud() {
  return (
    (Ud =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Ud.apply(this, arguments)
  );
}
function Bd(e, t) {
  if (null == e) return {};
  var n,
    r,
    i = (function (e, t) {
      if (null == e) return {};
      var n,
        r,
        i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++)
        (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (r = 0; r < l.length; r++)
      (n = l[r]),
        t.indexOf(n) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
  }
  return i;
}
function jd(e) {
  var t = e.scale,
    n = void 0 === t ? "M" : t,
    r = Bd(e, ["scale"]);
  return Vd.default.createElement(
    "svg",
    Ud({}, r, r),
    "L" === n &&
      Vd.default.createElement("path", {
        d: "M10.99 5H1.01a1 1 0 0 0 0 2h9.98a1 1 0 1 0 0-2z",
      }),
    "M" === n &&
      Vd.default.createElement("path", {
        d: "M8 4H2a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2z",
      })
  );
}
jd.displayName = "DashSmall";
var $d = Br(l("acw62"));
(o = l("acw62")), (o = l("acw62"));
function Hd(e, t, n) {
  let {
    isDisabled: r = !1,
    isRequired: i,
    isReadOnly: l,
    value: o,
    name: a,
    children: s,
    "aria-label": u,
    "aria-labelledby": c,
    validationState: d = "valid",
  } = e;
  null != s ||
    null != u ||
    null != c ||
    console.warn(
      "If you do not provide children, you must specify an aria-label for accessibility"
    );
  let { pressProps: p } = gt({ isDisabled: r }),
    { focusableProps: f } = Mn(e, n),
    m = x(p, f);
  return {
    inputProps: x(C(e, { labelable: !0 }), {
      "aria-invalid": "invalid" === d || void 0,
      "aria-errormessage": e["aria-errormessage"],
      "aria-controls": e["aria-controls"],
      "aria-readonly": l || void 0,
      "aria-required": i || void 0,
      onChange: (e) => {
        e.stopPropagation(), t.setSelected(e.target.checked);
      },
      disabled: r,
      ...(null == o ? {} : { value: o }),
      name: a,
      type: "checkbox",
      ...m,
    }),
  };
}
function Wd(e, t, n) {
  let { inputProps: r } = Hd(e, t, n),
    { isSelected: i } = t,
    { isIndeterminate: l } = e;
  return (
    (0, o.useEffect)(() => {
      n.current && (n.current.indeterminate = l);
    }),
    { inputProps: { ...r, checked: i } }
  );
}
const qd = new WeakMap(),
  Gd = new WeakMap(),
  Qd = new WeakMap();
function Yd(e, t) {
  let { isDisabled: n, name: r } = e,
    {
      labelProps: i,
      fieldProps: l,
      descriptionProps: o,
      errorMessageProps: a,
    } = Dc({ ...e, labelElementType: "span" });
  Gd.set(t, o.id), Qd.set(t, a.id);
  let s = C(e, { labelable: !0 });
  return (
    qd.set(t, r),
    {
      groupProps: x(s, { role: "group", "aria-disabled": n || void 0, ...l }),
      labelProps: i,
      descriptionProps: o,
      errorMessageProps: a,
    }
  );
}
function Xd(e, t, n) {
  const r = il({
    isReadOnly: e.isReadOnly || t.isReadOnly,
    isSelected: t.isSelected(e.value),
    onChange(n) {
      n ? t.addValue(e.value) : t.removeValue(e.value),
        e.onChange && e.onChange(n);
    },
  });
  let { inputProps: i } = Wd(
    {
      ...e,
      isReadOnly: e.isReadOnly || t.isReadOnly,
      isDisabled: e.isDisabled || t.isDisabled,
      name: e.name || qd.get(t),
    },
    r,
    n
  );
  return {
    inputProps: {
      ...i,
      "aria-describedby":
        ["invalid" === t.validationState ? Qd.get(t) : null, Gd.get(t)]
          .filter(Boolean)
          .join(" ") || void 0,
    },
  };
}
(o = l("acw62")), (o = l("acw62"));
function Zd(e) {
  return e && e.__esModule ? e.default : e;
}
function Jd(e, t, n, r) {
  Object.defineProperty(e, t, {
    get: n,
    set: r,
    enumerable: !0,
    configurable: !0,
  });
}
var ep,
  tp,
  np,
  rp,
  ip,
  lp,
  op,
  ap,
  sp,
  up,
  cp,
  dp,
  pp,
  fp,
  mp,
  hp,
  gp,
  yp,
  vp,
  bp,
  wp = {};
Jd(
  wp,
  "spectrum-FieldLabel",
  () => ep,
  (e) => (ep = e)
),
  Jd(
    wp,
    "spectrum-FieldLabel--positionSide",
    () => tp,
    (e) => (tp = e)
  ),
  Jd(
    wp,
    "spectrum-FieldLabel-requiredIcon",
    () => np,
    (e) => (np = e)
  ),
  Jd(
    wp,
    "spectrum-FieldLabel--alignEnd",
    () => rp,
    (e) => (rp = e)
  ),
  Jd(
    wp,
    "spectrum-Field",
    () => ip,
    (e) => (ip = e)
  ),
  Jd(
    wp,
    "spectrum-Field-contextualHelp",
    () => lp,
    (e) => (lp = e)
  ),
  Jd(
    wp,
    "spectrum-Field--positionTop",
    () => op,
    (e) => (op = e)
  ),
  Jd(
    wp,
    "spectrum-Field-field",
    () => ap,
    (e) => (ap = e)
  ),
  Jd(
    wp,
    "spectrum-Field--alignEnd",
    () => sp,
    (e) => (sp = e)
  ),
  Jd(
    wp,
    "spectrum-Field--positionSide",
    () => up,
    (e) => (up = e)
  ),
  Jd(
    wp,
    "spectrum-Field-wrapper",
    () => cp,
    (e) => (cp = e)
  ),
  Jd(
    wp,
    "spectrum-Field--hasContextualHelp",
    () => dp,
    (e) => (dp = e)
  ),
  Jd(
    wp,
    "spectrum-Form",
    () => pp,
    (e) => (pp = e)
  ),
  Jd(
    wp,
    "spectrum-Form--positionSide",
    () => fp,
    (e) => (fp = e)
  ),
  Jd(
    wp,
    "spectrum-Field-labelCell",
    () => mp,
    (e) => (mp = e)
  ),
  Jd(
    wp,
    "spectrum-Field-labelWrapper",
    () => hp,
    (e) => (hp = e)
  ),
  Jd(
    wp,
    "spectrum-Form--positionTop",
    () => gp,
    (e) => (gp = e)
  ),
  Jd(
    wp,
    "spectrum-LabeledValue",
    () => yp,
    (e) => (yp = e)
  ),
  Jd(
    wp,
    "spectrum-Form-itemLabel",
    () => vp,
    (e) => (vp = e)
  ),
  Jd(
    wp,
    "is-disabled",
    () => bp,
    (e) => (bp = e)
  ),
  (ep = "spectrum-FieldLabel_d2db1f"),
  (tp = "spectrum-FieldLabel--positionSide_d2db1f"),
  (np = "spectrum-FieldLabel-requiredIcon_d2db1f"),
  (rp = "spectrum-FieldLabel--alignEnd_d2db1f"),
  (ip = "spectrum-Field_d2db1f"),
  (lp = "spectrum-Field-contextualHelp_d2db1f"),
  (op = "spectrum-Field--positionTop_d2db1f"),
  (ap = "spectrum-Field-field_d2db1f"),
  (sp = "spectrum-Field--alignEnd_d2db1f"),
  (up = "spectrum-Field--positionSide_d2db1f"),
  (cp = "spectrum-Field-wrapper_d2db1f"),
  (dp = "spectrum-Field--hasContextualHelp_d2db1f"),
  (pp = "spectrum-Form_d2db1f"),
  (fp = "spectrum-Form--positionSide_d2db1f"),
  (mp = "spectrum-Field-labelCell_d2db1f"),
  (hp = "spectrum-Field-labelWrapper_d2db1f"),
  (gp = "spectrum-Form--positionTop_d2db1f"),
  (yp = "spectrum-LabeledValue_d2db1f"),
  (vp = "spectrum-Form-itemLabel_d2db1f"),
  (bp = "is-disabled_d2db1f");
let Ep = t(o).createContext(null);
function kp(e) {
  let t = (0, o.useContext)(Ep);
  return t ? { ...t, ...e } : e;
}
const Sp = new Set([
  "action",
  "autoComplete",
  "encType",
  "method",
  "target",
  "onSubmit",
]);
t(o).forwardRef(function (e, n) {
  e = Vr(e);
  let {
      children: r,
      labelPosition: i = "top",
      labelAlign: l = "start",
      isRequired: a,
      necessityIndicator: s,
      isQuiet: u,
      isEmphasized: c,
      isDisabled: d,
      isReadOnly: p,
      validationState: f,
      ...m
    } = e,
    { styleProps: h } = tt(m),
    g = Oe(n),
    y = { labelPosition: i, labelAlign: l, necessityIndicator: s };
  return t(o).createElement(
    "form",
    {
      ...C(m, { labelable: !0, propNames: Sp }),
      ...h,
      noValidate: !0,
      ref: g,
      className: Me(
        Zd(wp),
        "spectrum-Form",
        {
          "spectrum-Form--positionSide": "side" === i,
          "spectrum-Form--positionTop": "top" === i,
        },
        h.className
      ),
    },
    t(o).createElement(
      Ep.Provider,
      { value: y },
      t(o).createElement(
        zr,
        {
          isQuiet: u,
          isEmphasized: c,
          isDisabled: d,
          isReadOnly: p,
          isRequired: a,
          validationState: f,
        },
        r
      )
    )
  );
});
var xp;
xp = function (e) {
  var t, n;
  let r = Kr();
  return Lp.default.createElement(
    Gi,
    e,
    null != r && null != (t = r.theme) && null != (n = t.global) && n.express
      ? Lp.default.createElement(Np, null)
      : Lp.default.createElement(Tp.AlertMedium, null)
  );
};
var Pp = Br(l("3p9rK")),
  Tp = {};
Object.defineProperty(Tp, "__esModule", { value: !0 }), (Tp.AlertMedium = Mp);
var _p = (function (e) {
  return e && e.__esModule ? e : { default: e };
})(l("acw62"));
function Cp() {
  return (
    (Cp =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Cp.apply(this, arguments)
  );
}
function Ip(e, t) {
  if (null == e) return {};
  var n,
    r,
    i = (function (e, t) {
      if (null == e) return {};
      var n,
        r,
        i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++)
        (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (r = 0; r < l.length; r++)
      (n = l[r]),
        t.indexOf(n) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
  }
  return i;
}
function Mp(e) {
  var t = e.scale,
    n = void 0 === t ? "M" : t,
    r = Ip(e, ["scale"]);
  return _p.default.createElement(
    "svg",
    Cp({}, r, r),
    "L" === n &&
      _p.default.createElement("path", {
        d: "M10.563 2.206l-9.249 16.55a.5.5 0 0 0 .436.744h18.5a.5.5 0 0 0 .436-.744l-9.251-16.55a.5.5 0 0 0-.872 0zm1.436 15.044a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25v-1.5a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25zm0-3.5a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25v-6a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25z",
      }),
    "M" === n &&
      _p.default.createElement("path", {
        d: "M8.564 1.289L.2 16.256A.5.5 0 0 0 .636 17h16.728a.5.5 0 0 0 .436-.744L9.436 1.289a.5.5 0 0 0-.872 0zM10 14.75a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25v-1.5a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25zm0-3a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25v-6a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25z",
      })
  );
}
Mp.displayName = "AlertMedium";
var Lp = Br(l("acw62"));
const Np = (e) =>
  Lp.default.createElement(
    "svg",
    (0, Pp.default)({ viewBox: "0 0 18 18" }, e),
    Lp.default.createElement("path", {
      d: "M9 10.5a1 1 0 0 1-1-1V5a1 1 0 1 1 2 0v4.5a1 1 0 0 1-1 1Zm0 1.25A1.25 1.25 0 1 0 10.25 13 1.25 1.25 0 0 0 9 11.75Zm8.497 3.589a3.49 3.49 0 0 0 .079-3.474L12 1.815a3.385 3.385 0 0 0-5.994-.007L.416 11.88a3.485 3.485 0 0 0 .089 3.459A3.375 3.375 0 0 0 3.416 17h11.169a3.375 3.375 0 0 0 2.912-1.661ZM10.244 2.77l5.575 10.05a1.497 1.497 0 0 1-.037 1.489 1.374 1.374 0 0 1-1.197.69H3.416a1.374 1.374 0 0 1-1.197-.69 1.493 1.493 0 0 1-.046-1.474l5.593-10.08a1.386 1.386 0 0 1 2.478.015Z",
    })
  );
var Rp;
(Np.displayName = Tp.AlertMedium.displayName),
  (Rp = function (e) {
    return Kp.default.createElement(
      Gi,
      e,
      Kp.default.createElement(Op.Asterisk, null)
    );
  });
var Op = {};
Object.defineProperty(Op, "__esModule", { value: !0 }), (Op.Asterisk = Dp);
var Ap = (function (e) {
  return e && e.__esModule ? e : { default: e };
})(l("acw62"));
function Fp() {
  return (
    (Fp =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Fp.apply(this, arguments)
  );
}
function zp(e, t) {
  if (null == e) return {};
  var n,
    r,
    i = (function (e, t) {
      if (null == e) return {};
      var n,
        r,
        i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++)
        (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (r = 0; r < l.length; r++)
      (n = l[r]),
        t.indexOf(n) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
  }
  return i;
}
function Dp(e) {
  var t = e.scale,
    n = void 0 === t ? "M" : t,
    r = zp(e, ["scale"]);
  return Ap.default.createElement(
    "svg",
    Fp({}, r, r),
    "L" === n &&
      Ap.default.createElement("path", {
        d: "M7.867 7.872c.061.062.103.145 0 .228l-1.283.827c-.104.061-.145.02-.186-.083L4.804 6.07l-2.09 2.297c-.021.042-.083.083-.145 0l-.994-1.035c-.103-.062-.082-.124 0-.186l2.36-1.966-2.691-1.014c-.042 0-.104-.083-.062-.186l.703-1.41a.11.11 0 0 1 .187-.04L4.43 4.06l.145-3.02A.109.109 0 0 1 4.7.917l1.718.227c.104 0 .124.042.104.145l-.808 2.96 2.734-.828c.061-.042.124-.042.165.082l.27 1.532c.02.103 0 .145-.084.145l-2.856.227z",
      }),
    "M" === n &&
      Ap.default.createElement("path", {
        d: "M6.573 6.558c.056.055.092.13 0 .204l-1.148.74c-.093.056-.13.02-.167-.073L3.832 4.947l-1.87 2.055c-.02.037-.075.074-.13 0l-.889-.926c-.092-.055-.074-.111 0-.167l2.111-1.76-2.408-.906c-.037 0-.092-.074-.055-.167l.63-1.259a.097.097 0 0 1 .166-.036l2.111 1.37.13-2.704a.097.097 0 0 1 .111-.11L5.277.54c.092 0 .11.037.092.13l-.722 2.647 2.444-.74c.056-.038.111-.038.148.073l.241 1.37c.019.093 0 .13-.074.13l-2.556.204z",
      })
  );
}
Dp.displayName = "Asterisk";
var Kp = Br(l("acw62"));
function Vp(e) {
  return e && e.__esModule ? e.default : e;
}
function Up(e, t, n, r) {
  Object.defineProperty(e, t, {
    get: n,
    set: r,
    enumerable: !0,
    configurable: !0,
  });
}
var Bp,
  jp,
  $p,
  Hp,
  Wp,
  qp,
  Gp = {};
Up(
  Gp,
  "spectrum-HelpText",
  () => Bp,
  (e) => (Bp = e)
),
  Up(
    Gp,
    "spectrum-HelpText-validationIcon",
    () => jp,
    (e) => (jp = e)
  ),
  Up(
    Gp,
    "spectrum-HelpText-text",
    () => $p,
    (e) => ($p = e)
  ),
  Up(
    Gp,
    "spectrum-HelpText--neutral",
    () => Hp,
    (e) => (Hp = e)
  ),
  Up(
    Gp,
    "is-disabled",
    () => Wp,
    (e) => (Wp = e)
  ),
  Up(
    Gp,
    "spectrum-HelpText--negative",
    () => qp,
    (e) => (qp = e)
  ),
  (Bp = "spectrum-HelpText_f395de"),
  (jp = "spectrum-HelpText-validationIcon_f395de"),
  ($p = "spectrum-HelpText-text_f395de"),
  (Hp = "spectrum-HelpText--neutral_f395de"),
  (Wp = "is-disabled_f395de"),
  (qp = "spectrum-HelpText--negative_f395de");
const Qp = t(o).forwardRef(function (e, n) {
  let {
      description: r,
      errorMessage: i,
      validationState: l,
      isDisabled: a,
      showErrorIcon: s,
      descriptionProps: u,
      errorMessageProps: c,
    } = e,
    d = Oe(n),
    p = i && "invalid" === l,
    { styleProps: f } = tt(e);
  return t(o).createElement(
    "div",
    {
      ...f,
      className: Me(
        Vp(Gp),
        "spectrum-HelpText",
        "spectrum-HelpText--" + (p ? "negative" : "neutral"),
        { "is-disabled": a },
        f.className
      ),
      ref: d,
    },
    p
      ? t(o).createElement(
          t(o).Fragment,
          null,
          s &&
            t(o).createElement(xp, {
              UNSAFE_className: Me(Vp(Gp), "spectrum-HelpText-validationIcon"),
            }),
          t(o).createElement(
            "div",
            { ...c, className: Me(Vp(Gp), "spectrum-HelpText-text") },
            i
          )
        )
      : t(o).createElement(
          "div",
          { ...u, className: Me(Vp(Gp), "spectrum-HelpText-text") },
          r
        )
  );
});
var Yp;
Yp = {
  "ar-AE": { "(optional)": "(اختياري)", "(required)": "(مطلوب)" },
  "bg-BG": { "(optional)": "(незадължително)", "(required)": "(задължително)" },
  "cs-CZ": { "(optional)": "(volitelně)", "(required)": "(požadováno)" },
  "da-DK": { "(optional)": "(valgfrit)", "(required)": "(obligatorisk)" },
  "de-DE": { "(optional)": "(optional)", "(required)": "(erforderlich)" },
  "el-GR": { "(optional)": "(προαιρετικό)", "(required)": "(απαιτείται)" },
  "en-US": { "(required)": "(required)", "(optional)": "(optional)" },
  "es-ES": { "(optional)": "(opcional)", "(required)": "(necesario)" },
  "et-EE": { "(optional)": "(valikuline)", "(required)": "(nõutav)" },
  "fi-FI": { "(optional)": "(valinnainen)", "(required)": "(pakollinen)" },
  "fr-FR": { "(optional)": "(facultatif)", "(required)": "(requis)" },
  "he-IL": { "(optional)": "(אופציונלי)", "(required)": "(נדרש)" },
  "hr-HR": { "(optional)": "(opcionalno)", "(required)": "(obvezno)" },
  "hu-HU": { "(optional)": "(opcionális)", "(required)": "(kötelező)" },
  "it-IT": { "(optional)": "(facoltativo)", "(required)": "(obbligatorio)" },
  "ja-JP": { "(optional)": "（オプション）", "(required)": "（必須）" },
  "ko-KR": { "(optional)": "(선택 사항)", "(required)": "(필수 사항)" },
  "lt-LT": { "(optional)": "(pasirenkama)", "(required)": "(privaloma)" },
  "lv-LV": { "(optional)": "(neobligāti)", "(required)": "(obligāti)" },
  "nb-NO": { "(optional)": "(valgfritt)", "(required)": "(obligatorisk)" },
  "nl-NL": { "(optional)": "(optioneel)", "(required)": "(vereist)" },
  "pl-PL": { "(optional)": "(opcjonalne)", "(required)": "(wymagane)" },
  "pt-BR": { "(optional)": "(opcional)", "(required)": "(obrigatório)" },
  "pt-PT": { "(optional)": "(opcional)", "(required)": "(obrigatório)" },
  "ro-RO": { "(optional)": "(opţional)", "(required)": "(obligatoriu)" },
  "ru-RU": { "(optional)": "(дополнительно)", "(required)": "(обязательно)" },
  "sk-SK": { "(optional)": "(nepovinné)", "(required)": "(povinné)" },
  "sl-SI": { "(optional)": "(opcijsko)", "(required)": "(obvezno)" },
  "sr-SP": { "(optional)": "(opciono)", "(required)": "(obavezno)" },
  "sv-SE": { "(optional)": "(valfritt)", "(required)": "(krävs)" },
  "tr-TR": { "(optional)": "(isteğe bağlı)", "(required)": "(gerekli)" },
  "uk-UA": { "(optional)": "(необов’язково)", "(required)": "(обов’язково)" },
  "zh-CN": { "(optional)": "（可选）", "(required)": "（必填）" },
  "zh-TW": { "(optional)": "(選填)", "(required)": "(必填)" },
};
var Xp,
  Zp,
  Jp,
  ef,
  tf,
  nf,
  rf,
  lf,
  of,
  af,
  sf,
  uf,
  cf,
  df,
  pf,
  ff,
  mf,
  hf,
  gf,
  yf,
  vf = {};
Up(
  vf,
  "spectrum-FieldLabel",
  () => Xp,
  (e) => (Xp = e)
),
  Up(
    vf,
    "spectrum-FieldLabel--positionSide",
    () => Zp,
    (e) => (Zp = e)
  ),
  Up(
    vf,
    "spectrum-FieldLabel-requiredIcon",
    () => Jp,
    (e) => (Jp = e)
  ),
  Up(
    vf,
    "spectrum-FieldLabel--alignEnd",
    () => ef,
    (e) => (ef = e)
  ),
  Up(
    vf,
    "spectrum-Field",
    () => tf,
    (e) => (tf = e)
  ),
  Up(
    vf,
    "spectrum-Field-contextualHelp",
    () => nf,
    (e) => (nf = e)
  ),
  Up(
    vf,
    "spectrum-Field--positionTop",
    () => rf,
    (e) => (rf = e)
  ),
  Up(
    vf,
    "spectrum-Field-field",
    () => lf,
    (e) => (lf = e)
  ),
  Up(
    vf,
    "spectrum-Field--alignEnd",
    () => of,
    (e) => (of = e)
  ),
  Up(
    vf,
    "spectrum-Field--positionSide",
    () => af,
    (e) => (af = e)
  ),
  Up(
    vf,
    "spectrum-Field-wrapper",
    () => sf,
    (e) => (sf = e)
  ),
  Up(
    vf,
    "spectrum-Field--hasContextualHelp",
    () => uf,
    (e) => (uf = e)
  ),
  Up(
    vf,
    "spectrum-Form",
    () => cf,
    (e) => (cf = e)
  ),
  Up(
    vf,
    "spectrum-Form--positionSide",
    () => df,
    (e) => (df = e)
  ),
  Up(
    vf,
    "spectrum-Field-labelCell",
    () => pf,
    (e) => (pf = e)
  ),
  Up(
    vf,
    "spectrum-Field-labelWrapper",
    () => ff,
    (e) => (ff = e)
  ),
  Up(
    vf,
    "spectrum-Form--positionTop",
    () => mf,
    (e) => (mf = e)
  ),
  Up(
    vf,
    "spectrum-LabeledValue",
    () => hf,
    (e) => (hf = e)
  ),
  Up(
    vf,
    "spectrum-Form-itemLabel",
    () => gf,
    (e) => (gf = e)
  ),
  Up(
    vf,
    "is-disabled",
    () => yf,
    (e) => (yf = e)
  ),
  (Xp = "spectrum-FieldLabel_d2db1f"),
  (Zp = "spectrum-FieldLabel--positionSide_d2db1f"),
  (Jp = "spectrum-FieldLabel-requiredIcon_d2db1f"),
  (ef = "spectrum-FieldLabel--alignEnd_d2db1f"),
  (tf = "spectrum-Field_d2db1f"),
  (nf = "spectrum-Field-contextualHelp_d2db1f"),
  (rf = "spectrum-Field--positionTop_d2db1f"),
  (lf = "spectrum-Field-field_d2db1f"),
  (of = "spectrum-Field--alignEnd_d2db1f"),
  (af = "spectrum-Field--positionSide_d2db1f"),
  (sf = "spectrum-Field-wrapper_d2db1f"),
  (uf = "spectrum-Field--hasContextualHelp_d2db1f"),
  (cf = "spectrum-Form_d2db1f"),
  (df = "spectrum-Form--positionSide_d2db1f"),
  (pf = "spectrum-Field-labelCell_d2db1f"),
  (ff = "spectrum-Field-labelWrapper_d2db1f"),
  (mf = "spectrum-Form--positionTop_d2db1f"),
  (hf = "spectrum-LabeledValue_d2db1f"),
  (gf = "spectrum-Form-itemLabel_d2db1f"),
  (yf = "is-disabled_d2db1f");
let bf = t(o).forwardRef(function (e, n) {
  e = Vr(e);
  let {
      children: r,
      labelPosition: i = "top",
      labelAlign: l = "side" === i ? "start" : null,
      isRequired: a,
      necessityIndicator: s = null != a ? "icon" : null,
      includeNecessityIndicatorInAccessibilityName: u = !1,
      htmlFor: c,
      for: d,
      elementType: p = "label",
      onClick: f,
      ...m
    } = e,
    h = Oe(n),
    { styleProps: g } = tt(m),
    y = Pe(Vp(Yp)),
    v = a ? y.format("(required)") : y.format("(optional)"),
    b = t(o).createElement(Rp, {
      UNSAFE_className: Me(Vp(vf), "spectrum-FieldLabel-requiredIcon"),
      "aria-label": u ? y.format("(required)") : void 0,
    }),
    w = Me(
      Vp(vf),
      "spectrum-FieldLabel",
      {
        "spectrum-FieldLabel--positionSide": "side" === i,
        "spectrum-FieldLabel--alignEnd": "end" === l,
      },
      g.className
    );
  return t(o).createElement(
    p,
    {
      ...C(m),
      ...g,
      onClick: f,
      ref: h,
      className: w,
      htmlFor: "label" === p ? d || c : void 0,
    },
    r,
    ("label" === s || ("icon" === s && a)) && " ​",
    "label" === s &&
      t(o).createElement("span", { "aria-hidden": u ? void 0 : a }, v),
    "icon" === s && a && b
  );
});
let wf = t(o).forwardRef(function (e, n) {
  let r = kp(e),
    i = r !== e;
  e = r;
  let {
      label: l,
      labelPosition: a = "top",
      labelAlign: s,
      isRequired: u,
      necessityIndicator: c,
      includeNecessityIndicatorInAccessibilityName: d,
      validationState: p,
      description: f,
      errorMessage: m,
      isDisabled: h,
      showErrorIcon: g,
      contextualHelp: y,
      children: v,
      labelProps: b,
      descriptionProps: E = {},
      errorMessageProps: k = {},
      elementType: S,
      wrapperClassName: P,
      wrapperProps: T = {},
      ..._
    } = e,
    { styleProps: C } = tt(_),
    I = !!f || (m && "invalid" === p),
    M = w(),
    L = Me(
      Vp(vf),
      "spectrum-Field",
      {
        "spectrum-Field--positionTop": "top" === a,
        "spectrum-Field--positionSide": "side" === a,
        "spectrum-Field--alignEnd": "end" === s,
        "spectrum-Field--hasContextualHelp": !!e.contextualHelp,
      },
      C.className,
      P
    );
  v = t(o).cloneElement(
    v,
    x(v.props, { className: Me(Vp(vf), "spectrum-Field-field") })
  );
  let N = () =>
      t(o).createElement(Qp, {
        descriptionProps: E,
        errorMessageProps: k,
        description: f,
        errorMessage: m,
        validationState: p,
        isDisabled: h,
        showErrorIcon: g,
        gridArea: "helpText",
      }),
    R = t(o).createElement(
      t(o).Fragment,
      null,
      l &&
        t(o).createElement(
          bf,
          {
            ...b,
            labelPosition: a,
            labelAlign: s,
            isRequired: u,
            necessityIndicator: c,
            includeNecessityIndicatorInAccessibilityName: d,
            elementType: S,
          },
          l
        ),
      l &&
        y &&
        t(o).createElement(
          ot,
          {
            slots: {
              actionButton: {
                UNSAFE_className: Me(Vp(vf), "spectrum-Field-contextualHelp"),
                id: M,
                "aria-labelledby": (null == b ? void 0 : b.id)
                  ? `${b.id} ${M}`
                  : void 0,
              },
            },
          },
          y
        )
    );
  return (
    i &&
      "side" === a &&
      l &&
      y &&
      (R = t(o).createElement(
        "div",
        { className: Me(Vp(vf), "spectrum-Field-labelCell") },
        t(o).createElement(
          "div",
          { className: Me(Vp(vf), "spectrum-Field-labelWrapper") },
          R
        )
      )),
    t(o).createElement(
      "div",
      { ...C, ...T, ref: n, className: L },
      R,
      "side" === a
        ? t(o).createElement(
            as,
            {
              direction: "column",
              UNSAFE_className: Me(Vp(vf), "spectrum-Field-wrapper"),
            },
            v,
            I && N()
          )
        : t(o).createElement(t(o).Fragment, null, v, I && N())
    )
  );
});
function Ef(e = {}) {
  let [t, n] = s(e.value, e.defaultValue || [], e.onChange);
  return {
    value: t,
    setValue(t) {
      e.isReadOnly || e.isDisabled || n(t);
    },
    isDisabled: e.isDisabled || !1,
    isReadOnly: e.isReadOnly || !1,
    isSelected: (e) => t.includes(e),
    addValue(r) {
      e.isReadOnly || e.isDisabled || t.includes(r) || n(t.concat(r));
    },
    removeValue(r) {
      e.isReadOnly ||
        e.isDisabled ||
        (t.includes(r) && n(t.filter((e) => e !== r)));
    },
    toggleValue(r) {
      e.isReadOnly ||
        e.isDisabled ||
        (t.includes(r) ? n(t.filter((e) => e !== r)) : n(t.concat(r)));
    },
    validationState: e.validationState,
  };
}
function kf(e) {
  return e && e.__esModule ? e.default : e;
}
function Sf(e, t, n, r) {
  Object.defineProperty(e, t, {
    get: n,
    set: r,
    enumerable: !0,
    configurable: !0,
  });
}
const xf = t(o).createContext(null);
var Pf,
  Tf,
  _f,
  Cf,
  If,
  Mf,
  Lf,
  Nf,
  Rf,
  Of,
  Af,
  Ff,
  zf,
  Df = {};
Sf(
  Df,
  "spectrum-Checkbox",
  () => Pf,
  (e) => (Pf = e)
),
  Sf(
    Df,
    "spectrum-Checkbox-input",
    () => Tf,
    (e) => (Tf = e)
  ),
  Sf(
    Df,
    "focus-ring",
    () => _f,
    (e) => (_f = e)
  ),
  Sf(
    Df,
    "spectrum-Checkbox-box",
    () => Cf,
    (e) => (Cf = e)
  ),
  Sf(
    Df,
    "is-indeterminate",
    () => If,
    (e) => (If = e)
  ),
  Sf(
    Df,
    "spectrum-Checkbox-checkmark",
    () => Mf,
    (e) => (Mf = e)
  ),
  Sf(
    Df,
    "spectrum-Checkbox-partialCheckmark",
    () => Lf,
    (e) => (Lf = e)
  ),
  Sf(
    Df,
    "is-checked",
    () => Nf,
    (e) => (Nf = e)
  ),
  Sf(
    Df,
    "spectrum-Checkbox-label",
    () => Rf,
    (e) => (Rf = e)
  ),
  Sf(
    Df,
    "is-hovered",
    () => Of,
    (e) => (Of = e)
  ),
  Sf(
    Df,
    "spectrum-Checkbox--quiet",
    () => Af,
    (e) => (Af = e)
  ),
  Sf(
    Df,
    "is-invalid",
    () => Ff,
    (e) => (Ff = e)
  ),
  Sf(
    Df,
    "is-disabled",
    () => zf,
    (e) => (zf = e)
  ),
  (Pf = "spectrum-Checkbox_4870fc"),
  (Tf = "spectrum-Checkbox-input_4870fc"),
  (_f = "focus-ring_4870fc"),
  (Cf = "spectrum-Checkbox-box_4870fc"),
  (If = "is-indeterminate_4870fc"),
  (Mf = "spectrum-Checkbox-checkmark_4870fc"),
  (Lf = "spectrum-Checkbox-partialCheckmark_4870fc"),
  (Nf = "is-checked_4870fc"),
  (Rf = "spectrum-Checkbox-label_4870fc"),
  (Of = "is-hovered_4870fc"),
  (Af = "spectrum-Checkbox--quiet_4870fc"),
  (Ff = "is-invalid_4870fc"),
  (zf = "is-disabled_4870fc");
let Kf = (0, o.forwardRef)(function (e, n) {
  let r = e;
  e = Vr(e);
  let {
      isIndeterminate: i = !1,
      isEmphasized: l = !1,
      isDisabled: a = !1,
      autoFocus: s,
      children: u,
      validationState: c,
      ...d
    } = e,
    { styleProps: p } = tt(d),
    { hoverProps: f, isHovered: m } = Jt({ isDisabled: a }),
    h = (0, o.useRef)(null),
    g = Ae(n, h),
    y = (0, o.useContext)(xf),
    { inputProps: v } = y
      ? Xd(
          {
            ...e,
            value: e.value,
            isRequired: r.isRequired,
            validationState: r.validationState,
          },
          y,
          h
        )
      : Wd(e, il(e), h),
    b = i
      ? t(o).createElement(zd, {
          UNSAFE_className: Me(kf(Df), "spectrum-Checkbox-partialCheckmark"),
        })
      : t(o).createElement(Ld, {
          UNSAFE_className: Me(kf(Df), "spectrum-Checkbox-checkmark"),
        });
  if (y) {
    for (let e of ["isSelected", "defaultSelected", "isEmphasized"])
      null != r[e] &&
        console.warn(
          `${e} is unsupported on individual <Checkbox> elements within a <CheckboxGroup>. Please apply these props to the group instead.`
        );
    null == e.value &&
      console.warn(
        "A <Checkbox> element within a <CheckboxGroup> requires a `value` property."
      );
  }
  return t(o).createElement(
    "label",
    {
      ...p,
      ...f,
      ref: g,
      className: Me(
        kf(Df),
        "spectrum-Checkbox",
        {
          "is-checked": v.checked,
          "is-indeterminate": i,
          "spectrum-Checkbox--quiet": !l,
          "is-invalid": "invalid" === c,
          "is-disabled": a,
          "is-hovered": m,
        },
        p.className
      ),
    },
    t(o).createElement(
      Cn,
      { focusRingClass: Me(kf(Df), "focus-ring"), autoFocus: s },
      t(o).createElement("input", {
        ...v,
        ref: h,
        className: Me(kf(Df), "spectrum-Checkbox-input"),
      })
    ),
    t(o).createElement(
      "span",
      { className: Me(kf(Df), "spectrum-Checkbox-box") },
      b
    ),
    u &&
      t(o).createElement(
        "span",
        { className: Me(kf(Df), "spectrum-Checkbox-label") },
        u
      )
  );
});
var Vf,
  Uf,
  Bf,
  jf = {};
Sf(
  jf,
  "spectrum-FieldGroup",
  () => Vf,
  (e) => (Vf = e)
),
  Sf(
    jf,
    "spectrum-FieldGroup-group",
    () => Uf,
    (e) => (Uf = e)
  ),
  Sf(
    jf,
    "spectrum-FieldGroup-group--horizontal",
    () => Bf,
    (e) => (Bf = e)
  ),
  (Vf = "spectrum-FieldGroup_41d350"),
  (Uf = "spectrum-FieldGroup-group_41d350"),
  (Bf = "spectrum-FieldGroup-group--horizontal_41d350");
t(o).forwardRef(function (e, n) {
  e = kp((e = Vr(e)));
  let {
      isEmphasized: r,
      children: i,
      orientation: l = "vertical",
      validationState: a,
    } = e,
    s = Oe(n),
    u = Ef(e),
    {
      labelProps: c,
      groupProps: d,
      descriptionProps: p,
      errorMessageProps: f,
    } = Yd(e, u);
  return t(o).createElement(
    wf,
    {
      ...e,
      ref: s,
      wrapperClassName: Me(kf(jf), "spectrum-FieldGroup"),
      labelProps: c,
      descriptionProps: p,
      errorMessageProps: f,
      elementType: "span",
      includeNecessityIndicatorInAccessibilityName: !0,
    },
    t(o).createElement(
      "div",
      {
        ...d,
        className: Me(kf(jf), "spectrum-FieldGroup-group", {
          "spectrum-FieldGroup-group--horizontal": "horizontal" === l,
        }),
      },
      t(o).createElement(
        zr,
        { isEmphasized: r, validationState: a },
        t(o).createElement(xf.Provider, { value: u }, i)
      )
    )
  );
});
var $f;
$f = function (e) {
  return Xf.default.createElement(
    Gi,
    e,
    Xf.default.createElement(Hf.ChevronLeftMedium, null)
  );
};
var Hf = {};
Object.defineProperty(Hf, "__esModule", { value: !0 }),
  (Hf.ChevronLeftMedium = Qf);
var Wf = (function (e) {
  return e && e.__esModule ? e : { default: e };
})(l("acw62"));
function qf() {
  return (
    (qf =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    qf.apply(this, arguments)
  );
}
function Gf(e, t) {
  if (null == e) return {};
  var n,
    r,
    i = (function (e, t) {
      if (null == e) return {};
      var n,
        r,
        i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++)
        (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (r = 0; r < l.length; r++)
      (n = l[r]),
        t.indexOf(n) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
  }
  return i;
}
function Qf(e) {
  var t = e.scale,
    n = void 0 === t ? "M" : t,
    r = Gf(e, ["scale"]);
  return Wf.default.createElement(
    "svg",
    qf({}, r, r),
    "L" === n &&
      Wf.default.createElement("path", {
        d: "M7.197 10.283L2.914 6l4.283-4.283A1 1 0 1 0 5.783.303l-4.99 4.99a1 1 0 0 0 0 1.414l4.99 4.99a1 1 0 1 0 1.414-1.414z",
      }),
    "M" === n &&
      Wf.default.createElement("path", {
        d: "M5.697 8.283L2.414 5l3.283-3.283A1 1 0 1 0 4.283.303l-3.98 3.99a1 1 0 0 0 0 1.414l3.98 3.99a1 1 0 1 0 1.414-1.414z",
      })
  );
}
Qf.displayName = "ChevronLeftMedium";
var Yf,
  Xf = Br(l("acw62"));
Yf = function (e) {
  return rm.default.createElement(
    Gi,
    e,
    rm.default.createElement(Zf.ChevronRightMedium, null)
  );
};
var Zf = {};
Object.defineProperty(Zf, "__esModule", { value: !0 }),
  (Zf.ChevronRightMedium = nm);
var Jf = (function (e) {
  return e && e.__esModule ? e : { default: e };
})(l("acw62"));
function em() {
  return (
    (em =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    em.apply(this, arguments)
  );
}
function tm(e, t) {
  if (null == e) return {};
  var n,
    r,
    i = (function (e, t) {
      if (null == e) return {};
      var n,
        r,
        i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++)
        (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (r = 0; r < l.length; r++)
      (n = l[r]),
        t.indexOf(n) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
  }
  return i;
}
function nm(e) {
  var t = e.scale,
    n = void 0 === t ? "M" : t,
    r = tm(e, ["scale"]);
  return Jf.default.createElement(
    "svg",
    em({}, r, r),
    "L" === n &&
      Jf.default.createElement("path", {
        d: "M7.5 6a.997.997 0 0 0-.293-.707L2.217.303A1 1 0 1 0 .803 1.717L5.086 6 .803 10.283a1 1 0 1 0 1.414 1.414l4.99-4.99A.997.997 0 0 0 7.5 6z",
      }),
    "M" === n &&
      Jf.default.createElement("path", {
        d: "M5.99 5a.997.997 0 0 0-.293-.707L1.717.303A1 1 0 1 0 .303 1.717L3.586 5 .303 8.283a1 1 0 1 0 1.414 1.414l3.98-3.99A.997.997 0 0 0 5.99 5z",
      })
  );
}
nm.displayName = "ChevronRightMedium";
var rm = Br(l("acw62"));
function im() {
  return (
    (im = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    im.apply(this, arguments)
  );
}
function lm(e, t) {
  return e
    .replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
    .replace(/\s+/g, " ")
    .replace(/^\s*|\s*$/g, "");
}
o = l("acw62");
var om = function (e, t) {
    return (
      e &&
      t &&
      t.split(" ").forEach(function (t) {
        return (
          (r = t),
          void ((n = e).classList
            ? n.classList.add(r)
            : (function (e, t) {
                return e.classList
                  ? !!t && e.classList.contains(t)
                  : -1 !==
                      (
                        " " +
                        (e.className.baseVal || e.className) +
                        " "
                      ).indexOf(" " + t + " ");
              })(n, r) ||
              ("string" == typeof n.className
                ? (n.className = n.className + " " + r)
                : n.setAttribute(
                    "class",
                    ((n.className && n.className.baseVal) || "") + " " + r
                  )))
        );
        var n, r;
      })
    );
  },
  am = function (e, t) {
    return (
      e &&
      t &&
      t.split(" ").forEach(function (t) {
        return (
          (r = t),
          void ((n = e).classList
            ? n.classList.remove(r)
            : "string" == typeof n.className
            ? (n.className = lm(n.className, r))
            : n.setAttribute(
                "class",
                lm((n.className && n.className.baseVal) || "", r)
              ))
        );
        var n, r;
      })
    );
  },
  sm = (function (e) {
    function n() {
      for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return (
        ((t = e.call.apply(e, [this].concat(r)) || this).appliedClasses = {
          appear: {},
          enter: {},
          exit: {},
        }),
        (t.onEnter = function (e, n) {
          var r = t.resolveArguments(e, n),
            i = r[0],
            l = r[1];
          t.removeClasses(i, "exit"),
            t.addClass(i, l ? "appear" : "enter", "base"),
            t.props.onEnter && t.props.onEnter(e, n);
        }),
        (t.onEntering = function (e, n) {
          var r = t.resolveArguments(e, n),
            i = r[0],
            l = r[1] ? "appear" : "enter";
          t.addClass(i, l, "active"),
            t.props.onEntering && t.props.onEntering(e, n);
        }),
        (t.onEntered = function (e, n) {
          var r = t.resolveArguments(e, n),
            i = r[0],
            l = r[1] ? "appear" : "enter";
          t.removeClasses(i, l),
            t.addClass(i, l, "done"),
            t.props.onEntered && t.props.onEntered(e, n);
        }),
        (t.onExit = function (e) {
          var n = t.resolveArguments(e)[0];
          t.removeClasses(n, "appear"),
            t.removeClasses(n, "enter"),
            t.addClass(n, "exit", "base"),
            t.props.onExit && t.props.onExit(e);
        }),
        (t.onExiting = function (e) {
          var n = t.resolveArguments(e)[0];
          t.addClass(n, "exit", "active"),
            t.props.onExiting && t.props.onExiting(e);
        }),
        (t.onExited = function (e) {
          var n = t.resolveArguments(e)[0];
          t.removeClasses(n, "exit"),
            t.addClass(n, "exit", "done"),
            t.props.onExited && t.props.onExited(e);
        }),
        (t.resolveArguments = function (e, n) {
          return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, n];
        }),
        (t.getClassNames = function (e) {
          var n = t.props.classNames,
            r = "string" == typeof n,
            i = r ? "" + (r && n ? n + "-" : "") + e : n[e];
          return {
            baseClassName: i,
            activeClassName: r ? i + "-active" : n[e + "Active"],
            doneClassName: r ? i + "-done" : n[e + "Done"],
          };
        }),
        t
      );
    }
    Gl(n, e);
    var r = n.prototype;
    return (
      (r.addClass = function (e, t, n) {
        var r = this.getClassNames(t)[n + "ClassName"],
          i = this.getClassNames("enter").doneClassName;
        "appear" === t && "done" === n && i && (r += " " + i),
          "active" === n && e && Xl(e),
          r && ((this.appliedClasses[t][n] = r), om(e, r));
      }),
      (r.removeClasses = function (e, t) {
        var n = this.appliedClasses[t],
          r = n.base,
          i = n.active,
          l = n.done;
        (this.appliedClasses[t] = {}),
          r && am(e, r),
          i && am(e, i),
          l && am(e, l);
      }),
      (r.render = function () {
        var e = this.props,
          n = (e.classNames, Wl(e, ["classNames"]));
        return t(o).createElement(
          lo,
          im({}, n, {
            onEnter: this.onEnter,
            onEntered: this.onEntered,
            onEntering: this.onEntering,
            onExit: this.onExit,
            onExiting: this.onExiting,
            onExited: this.onExited,
          })
        );
      }),
      n
    );
  })(t(o).Component);
(sm.defaultProps = { classNames: "" }), (sm.propTypes = {});
var um,
  cm = sm;
um = function (e) {
  return mm.default.createElement(
    Gi,
    e,
    mm.default.createElement(dm.ListGripper, null)
  );
};
var dm = {};
Object.defineProperty(dm, "__esModule", { value: !0 }), (dm.ListGripper = fm);
var pm = (function (e) {
  return e && e.__esModule ? e : { default: e };
})(l("acw62"));
function fm({ scale: e = "M", ...t }) {
  return pm.default.createElement(
    "svg",
    t,
    "L" === e &&
      pm.default.createElement(
        pm.default.Fragment,
        null,
        pm.default.createElement("circle", {
          cx: "5.375",
          cy: "12.625",
          r: "1.25",
        }),
        pm.default.createElement("circle", {
          cx: "1.625",
          cy: "12.625",
          r: "1.25",
        }),
        pm.default.createElement("circle", {
          cx: "5.375",
          cy: "8.875",
          r: "1.25",
        }),
        pm.default.createElement("circle", {
          cx: "1.625",
          cy: "8.875",
          r: "1.25",
        }),
        pm.default.createElement("circle", {
          cx: "5.375",
          cy: "5.125",
          r: "1.25",
        }),
        pm.default.createElement("circle", {
          cx: "1.625",
          cy: "5.125",
          r: "1.25",
        }),
        pm.default.createElement("circle", {
          cx: "5.375",
          cy: "1.375",
          r: "1.25",
        }),
        pm.default.createElement("circle", {
          cx: "1.625",
          cy: "1.375",
          r: "1.25",
        })
      ),
    "M" === e &&
      pm.default.createElement(
        pm.default.Fragment,
        null,
        pm.default.createElement("circle", { cx: "4", cy: "10.5", r: "1" }),
        pm.default.createElement("circle", { cx: "1", cy: "10.5", r: "1" }),
        pm.default.createElement("circle", { cx: "4", cy: "7.5", r: "1" }),
        pm.default.createElement("circle", { cx: "1", cy: "7.5", r: "1" }),
        pm.default.createElement("circle", { cx: "4", cy: "4.5", r: "1" }),
        pm.default.createElement("circle", { cx: "1", cy: "4.5", r: "1" }),
        pm.default.createElement("circle", { cx: "4", cy: "1.5", r: "1" }),
        pm.default.createElement("circle", { cx: "1", cy: "1.5", r: "1" })
      )
  );
}
fm.displayName = "ListGripper";
var mm = Br(l("acw62"));
function hm(e) {
  return e && e.__esModule ? e.default : e;
}
function gm(e, t, n, r) {
  Object.defineProperty(e, t, {
    get: n,
    set: r,
    enumerable: !0,
    configurable: !0,
  });
}
var ym,
  vm,
  bm,
  wm,
  Em,
  km,
  Sm,
  xm,
  Pm,
  Tm,
  _m,
  Cm,
  Im,
  Mm,
  Lm,
  Nm,
  Rm,
  Om,
  Am,
  Fm,
  zm,
  Dm,
  Km,
  Vm,
  Um,
  Bm,
  jm,
  $m,
  Hm,
  Wm,
  qm,
  Gm,
  Qm,
  Ym,
  Xm,
  Zm,
  Jm,
  eh,
  th,
  nh,
  rh,
  ih,
  lh,
  oh,
  ah,
  sh,
  uh,
  ch,
  dh,
  ph,
  fh,
  mh,
  hh,
  gh,
  yh = {};
function vh(e) {
  let { dropState: n, dragAndDropHooks: r } = (0, o.useContext)(Sh);
  const { target: i, isPresentationOnly: l } = e;
  let a = (0, o.useRef)(),
    { dropIndicatorProps: s } = r.useDropIndicator(e, n, a),
    { visuallyHiddenProps: u } = An(),
    c = n.isDropTarget(i);
  return !c && s["aria-hidden"]
    ? null
    : t(o).createElement(
        "div",
        { role: "row", "aria-hidden": s["aria-hidden"] },
        t(o).createElement(
          "div",
          {
            role: "gridcell",
            "aria-selected": "false",
            className: Me(hm(yh), "react-spectrum-ListViewInsertionIndicator", {
              "react-spectrum-ListViewInsertionIndicator--dropTarget": c,
            }),
          },
          !l &&
            t(o).createElement("div", { ...u, role: "button", ...s, ref: a })
        )
      );
}
gm(
  yh,
  "react-spectrum-ListView",
  () => ym,
  (e) => (ym = e)
),
  gm(
    yh,
    "react-spectrum-ListView-row",
    () => vm,
    (e) => (vm = e)
  ),
  gm(
    yh,
    "react-spectrum-ListView--emphasized",
    () => bm,
    (e) => (bm = e)
  ),
  gm(
    yh,
    "react-spectrum-ListView--dropTarget",
    () => wm,
    (e) => (wm = e)
  ),
  gm(
    yh,
    "react-spectrum-ListViewItem",
    () => Em,
    (e) => (Em = e)
  ),
  gm(
    yh,
    "is-selected",
    () => km,
    (e) => (km = e)
  ),
  gm(
    yh,
    "is-hovered",
    () => Sm,
    (e) => (Sm = e)
  ),
  gm(
    yh,
    "is-active",
    () => xm,
    (e) => (xm = e)
  ),
  gm(
    yh,
    "focus-ring",
    () => Pm,
    (e) => (Pm = e)
  ),
  gm(
    yh,
    "react-spectrum-ListViewItem--firstRow",
    () => Tm,
    (e) => (Tm = e)
  ),
  gm(
    yh,
    "react-spectrum-ListView--quiet",
    () => _m,
    (e) => (_m = e)
  ),
  gm(
    yh,
    "is-next-selected",
    () => Cm,
    (e) => (Cm = e)
  ),
  gm(
    yh,
    "react-spectrum-ListViewItem--isFlushBottom",
    () => Im,
    (e) => (Im = e)
  ),
  gm(
    yh,
    "react-spectrum-ListView--loadingMore",
    () => Mm,
    (e) => (Mm = e)
  ),
  gm(
    yh,
    "react-spectrum-ListViewItem--lastRow",
    () => Lm,
    (e) => (Lm = e)
  ),
  gm(
    yh,
    "react-spectrum-ListView--isVerticalScrollbarVisible",
    () => Nm,
    (e) => (Nm = e)
  ),
  gm(
    yh,
    "react-spectrum-ListView--isHorizontalScrollbarVisible",
    () => Rm,
    (e) => (Rm = e)
  ),
  gm(
    yh,
    "react-spectrum-ListView--wrap",
    () => Om,
    (e) => (Om = e)
  ),
  gm(
    yh,
    "react-spectrum-ListViewItem-content",
    () => Am,
    (e) => (Am = e)
  ),
  gm(
    yh,
    "react-spectrum-ListViewItem-description",
    () => Fm,
    (e) => (Fm = e)
  ),
  gm(
    yh,
    "round-tops",
    () => zm,
    (e) => (zm = e)
  ),
  gm(
    yh,
    "round-bottoms",
    () => Dm,
    (e) => (Dm = e)
  ),
  gm(
    yh,
    "is-focused",
    () => Km,
    (e) => (Km = e)
  ),
  gm(
    yh,
    "is-disabled",
    () => Vm,
    (e) => (Vm = e)
  ),
  gm(
    yh,
    "has-checkbox",
    () => Um,
    (e) => (Um = e)
  ),
  gm(
    yh,
    "react-spectrum-ListViewItem-grid",
    () => Bm,
    (e) => (Bm = e)
  ),
  gm(
    yh,
    "react-spectrum-ListViewItem-draghandle-container",
    () => jm,
    (e) => (jm = e)
  ),
  gm(
    yh,
    "react-spectrum-ListViewItem-draghandle-button",
    () => $m,
    (e) => ($m = e)
  ),
  gm(
    yh,
    "react-spectrum-ListViewItem-checkboxWrapper",
    () => Hm,
    (e) => (Hm = e)
  ),
  gm(
    yh,
    "react-spectrum-ListViewItem-checkbox",
    () => Wm,
    (e) => (Wm = e)
  ),
  gm(
    yh,
    "react-spectrum-ListViewItem-thumbnail",
    () => qm,
    (e) => (qm = e)
  ),
  gm(
    yh,
    "react-spectrum-ListView--hasDescription",
    () => Gm,
    (e) => (Gm = e)
  ),
  gm(
    yh,
    "react-spectrum-ListViewItem-actions",
    () => Qm,
    (e) => (Qm = e)
  ),
  gm(
    yh,
    "react-spectrum-ListViewItem-actionmenu",
    () => Ym,
    (e) => (Ym = e)
  ),
  gm(
    yh,
    "react-spectrum-ListViewItem-parentIndicator",
    () => Xm,
    (e) => (Xm = e)
  ),
  gm(
    yh,
    "react-spectrum-ListViewItem-dragPreview",
    () => Zm,
    (e) => (Zm = e)
  ),
  gm(
    yh,
    "react-spectrum-ListViewItem-dragPreview--compact",
    () => Jm,
    (e) => (Jm = e)
  ),
  gm(
    yh,
    "react-spectrum-ListViewItem-dragPreview--spacious",
    () => eh,
    (e) => (eh = e)
  ),
  gm(
    yh,
    "react-spectrum-ListViewItem-badge",
    () => th,
    (e) => (th = e)
  ),
  gm(
    yh,
    "react-spectrum-ListViewItem-dragPreview--multiple",
    () => nh,
    (e) => (nh = e)
  ),
  gm(
    yh,
    "react-spectrum-ListView--hasAnyChildren",
    () => rh,
    (e) => (rh = e)
  ),
  gm(
    yh,
    "react-spectrum-ListViewItem-parentIndicator--hasChildItems",
    () => ih,
    (e) => (ih = e)
  ),
  gm(
    yh,
    "react-spectrum-ListView--compact",
    () => lh,
    (e) => (lh = e)
  ),
  gm(
    yh,
    "react-spectrum-ListView--spacious",
    () => oh,
    (e) => (oh = e)
  ),
  gm(
    yh,
    "react-spectrum-ListView--draggable",
    () => ah,
    (e) => (ah = e)
  ),
  gm(
    yh,
    "react-spectrum-ListViewItem--dropTarget",
    () => sh,
    (e) => (sh = e)
  ),
  gm(
    yh,
    "react-spectrum-ListView-centeredWrapper",
    () => uh,
    (e) => (uh = e)
  ),
  gm(
    yh,
    "react-spectrum-ListView-centeredWrapper--loadingMore",
    () => ch,
    (e) => (ch = e)
  ),
  gm(
    yh,
    "react-spectrum-ListViewInsertionIndicator",
    () => dh,
    (e) => (dh = e)
  ),
  gm(
    yh,
    "react-spectrum-ListViewInsertionIndicator--dropTarget",
    () => ph,
    (e) => (ph = e)
  ),
  gm(
    yh,
    "react-spectrum-ListViewItem-checkbox--enter",
    () => fh,
    (e) => (fh = e)
  ),
  gm(
    yh,
    "react-spectrum-ListViewItem-checkbox--enterActive",
    () => mh,
    (e) => (mh = e)
  ),
  gm(
    yh,
    "react-spectrum-ListViewItem-checkbox--exit",
    () => hh,
    (e) => (hh = e)
  ),
  gm(
    yh,
    "react-spectrum-ListViewItem-checkbox--exitActive",
    () => gh,
    (e) => (gh = e)
  ),
  (ym = "react-spectrum-ListView_dd5487"),
  (vm = "react-spectrum-ListView-row_dd5487"),
  (bm = "react-spectrum-ListView--emphasized_dd5487"),
  (wm = "react-spectrum-ListView--dropTarget_dd5487"),
  (Em = "react-spectrum-ListViewItem_dd5487"),
  (km = "is-selected_dd5487"),
  (Sm = "is-hovered_dd5487"),
  (xm = "is-active_dd5487"),
  (Pm = "focus-ring_dd5487"),
  (Tm = "react-spectrum-ListViewItem--firstRow_dd5487"),
  (_m = "react-spectrum-ListView--quiet_dd5487"),
  (Cm = "is-next-selected_dd5487"),
  (Im = "react-spectrum-ListViewItem--isFlushBottom_dd5487"),
  (Mm = "react-spectrum-ListView--loadingMore_dd5487"),
  (Lm = "react-spectrum-ListViewItem--lastRow_dd5487"),
  (Nm = "react-spectrum-ListView--isVerticalScrollbarVisible_dd5487"),
  (Rm = "react-spectrum-ListView--isHorizontalScrollbarVisible_dd5487"),
  (Om = "react-spectrum-ListView--wrap_dd5487"),
  (Am = "react-spectrum-ListViewItem-content_dd5487"),
  (Fm = "react-spectrum-ListViewItem-description_dd5487"),
  (zm = "round-tops_dd5487"),
  (Dm = "round-bottoms_dd5487"),
  (Km = "is-focused_dd5487"),
  (Vm = "is-disabled_dd5487"),
  (Um = "has-checkbox_dd5487"),
  (Bm = "react-spectrum-ListViewItem-grid_dd5487"),
  (jm = "react-spectrum-ListViewItem-draghandle-container_dd5487"),
  ($m = "react-spectrum-ListViewItem-draghandle-button_dd5487"),
  (Hm = "react-spectrum-ListViewItem-checkboxWrapper_dd5487"),
  (Wm = "react-spectrum-ListViewItem-checkbox_dd5487"),
  (qm = "react-spectrum-ListViewItem-thumbnail_dd5487"),
  (Gm = "react-spectrum-ListView--hasDescription_dd5487"),
  (Qm = "react-spectrum-ListViewItem-actions_dd5487"),
  (Ym = "react-spectrum-ListViewItem-actionmenu_dd5487"),
  (Xm = "react-spectrum-ListViewItem-parentIndicator_dd5487"),
  (Zm = "react-spectrum-ListViewItem-dragPreview_dd5487"),
  (Jm = "react-spectrum-ListViewItem-dragPreview--compact_dd5487"),
  (eh = "react-spectrum-ListViewItem-dragPreview--spacious_dd5487"),
  (th = "react-spectrum-ListViewItem-badge_dd5487"),
  (nh = "react-spectrum-ListViewItem-dragPreview--multiple_dd5487"),
  (rh = "react-spectrum-ListView--hasAnyChildren_dd5487"),
  (ih = "react-spectrum-ListViewItem-parentIndicator--hasChildItems_dd5487"),
  (lh = "react-spectrum-ListView--compact_dd5487"),
  (oh = "react-spectrum-ListView--spacious_dd5487"),
  (ah = "react-spectrum-ListView--draggable_dd5487"),
  (sh = "react-spectrum-ListViewItem--dropTarget_dd5487"),
  (uh = "react-spectrum-ListView-centeredWrapper_dd5487"),
  (ch = "react-spectrum-ListView-centeredWrapper--loadingMore_dd5487"),
  (dh = "react-spectrum-ListViewInsertionIndicator_dd5487"),
  (ph = "react-spectrum-ListViewInsertionIndicator--dropTarget_dd5487"),
  (fh = "react-spectrum-ListViewItem-checkbox--enter_dd5487"),
  (mh = "react-spectrum-ListViewItem-checkbox--enterActive_dd5487"),
  (hh = "react-spectrum-ListViewItem-checkbox--exit_dd5487"),
  (gh = "react-spectrum-ListViewItem-checkbox--exitActive_dd5487");
var bh;
function wh(e) {
  var n, r;
  let i,
    l,
    a,
    { item: s, isEmphasized: u } = e,
    {
      state: c,
      dragState: d,
      dropState: p,
      isListDraggable: f,
      isListDroppable: m,
      layout: h,
      dragAndDropHooks: g,
      loadingState: y,
    } = (0, o.useContext)(Sh),
    { direction: v } = Se(),
    b = (0, o.useRef)(),
    { isFocusVisible: w, focusProps: E } = _n({ within: !0 }),
    { isFocusVisible: k, focusProps: S } = _n(),
    {
      rowProps: P,
      gridCellProps: T,
      isPressed: _,
      descriptionProps: C,
      isSelected: I,
      isDisabled: M,
      allowsSelection: L,
      hasAction: N,
    } = Ic({ node: s, isVirtualized: !0, shouldSelectOnPressUp: f }, c, b),
    R = m && !M,
    { hoverProps: O, isHovered: A } = Jt({ isDisabled: !L && !N }),
    { checkboxProps: F } = Lc({ key: s.key }, c),
    z = st(`.${hm(yh)["react-spectrum-ListViewItem-description"]}`, b);
  f &&
    ((i = g.useDraggableItem({ key: s.key, hasDragButton: !0 }, d)),
    M && (i = null));
  let D = (0, o.useRef)();
  if (m) {
    let e = { type: "item", key: s.key, dropPosition: "on" };
    (l = p.isDropTarget(e)), (a = g.useDropIndicator({ target: e }, p, D));
  }
  let K = t(o).useRef(),
    { buttonProps: V } = Nn(
      { ...(null == i ? void 0 : i.dragButtonProps), elementType: "div" },
      K
    ),
    U =
      "ltr" === v
        ? t(o).createElement(Yf, {
            "aria-hidden": "true",
            UNSAFE_className: Me(
              hm(yh),
              "react-spectrum-ListViewItem-parentIndicator",
              {
                "react-spectrum-ListViewItem-parentIndicator--hasChildItems":
                  s.props.hasChildItems,
                "is-disabled": !N,
              }
            ),
          })
        : t(o).createElement($f, {
            "aria-hidden": "true",
            UNSAFE_className: Me(
              hm(yh),
              "react-spectrum-ListViewItem-parentIndicator",
              {
                "react-spectrum-ListViewItem-parentIndicator--hasChildItems":
                  s.props.hasChildItems,
                "is-disabled": !N,
              }
            ),
          }),
    B =
      "none" !== c.selectionManager.selectionMode &&
      "toggle" === c.selectionManager.selectionBehavior,
    { visuallyHiddenProps: j } = An(),
    $ = R ? void 0 : { "aria-hidden": void 0 };
  const H = x(
    P,
    null == i ? void 0 : i.dragProps,
    $,
    O,
    E,
    S,
    (null == g ? void 0 : g.isVirtualDragging()) && { tabIndex: null }
  );
  let W = null == s.prevKey,
    q = null == s.nextKey,
    G = !1;
  q &&
    "loadingMore" !== y &&
    (null === (n = h.getContentSize()) || void 0 === n ? void 0 : n.height) >=
      (null === (r = h.virtualizer) || void 0 === r
        ? void 0
        : r.getVisibleRect().height) &&
    (G = !0);
  let Q = !(
      c.selectionManager.isSelected(s.prevKey) ||
      (c.selectionManager.focusedKey === s.prevKey &&
        jt() &&
        c.selectionManager.isFocused)
    ),
    Y = !(
      c.selectionManager.isSelected(s.nextKey) ||
      (c.selectionManager.focusedKey === s.nextKey &&
        jt() &&
        c.selectionManager.isFocused)
    ),
    X =
      "string" == typeof s.rendered
        ? t(o).createElement(Ln, null, s.rendered)
        : s.rendered;
  return (
    M && (X = t(o).createElement(zr, { isDisabled: !0 }, X)),
    t(o).createElement(
      "div",
      {
        ...H,
        className: Me(hm(yh), "react-spectrum-ListView-row", {
          "focus-ring": k,
          "round-tops":
            Q || (A && !I && c.selectionManager.focusedKey !== s.key),
          "round-bottoms":
            Y || (A && !I && c.selectionManager.focusedKey !== s.key),
        }),
        ref: b,
      },
      t(o).createElement(
        "div",
        {
          className: Me(hm(yh), "react-spectrum-ListViewItem", {
            "is-active": _,
            "is-focused": w,
            "focus-ring": k,
            "is-hovered": A,
            "is-selected": I,
            "is-disabled": M,
            "is-prev-selected": c.selectionManager.isSelected(s.prevKey),
            "is-next-selected": c.selectionManager.isSelected(s.nextKey),
            "react-spectrum-ListViewItem--highlightSelection":
              "replace" === c.selectionManager.selectionBehavior &&
              (I || c.selectionManager.isSelected(s.nextKey)),
            "react-spectrum-ListViewItem--dropTarget": !!l,
            "react-spectrum-ListViewItem--firstRow": W,
            "react-spectrum-ListViewItem--lastRow": q,
            "react-spectrum-ListViewItem--isFlushBottom": G,
            "react-spectrum-ListViewItem--hasDescription": z,
          }),
          ...T,
        },
        t(o).createElement(
          Ja,
          { UNSAFE_className: hm(yh)["react-spectrum-ListViewItem-grid"] },
          f &&
            t(o).createElement(
              "div",
              {
                className:
                  hm(yh)["react-spectrum-ListViewItem-draghandle-container"],
              },
              !M &&
                t(o).createElement(
                  Cn,
                  { focusRingClass: Me(hm(yh), "focus-ring") },
                  t(o).createElement(
                    "div",
                    {
                      ...V,
                      className: Me(
                        hm(yh),
                        "react-spectrum-ListViewItem-draghandle-button"
                      ),
                      style: w ? {} : { ...j.style },
                      ref: K,
                      draggable: "true",
                    },
                    t(o).createElement(um, null)
                  )
                )
            ),
          m &&
            !(null == a ? void 0 : a.isHidden) &&
            t(o).createElement("div", {
              role: "button",
              ...j,
              ...(null == a ? void 0 : a.dropIndicatorProps),
              ref: D,
            }),
          t(o).createElement(
            cm,
            {
              in: B,
              unmountOnExit: !0,
              classNames: {
                enter: hm(yh)["react-spectrum-ListViewItem-checkbox--enter"],
                enterActive:
                  hm(yh)["react-spectrum-ListViewItem-checkbox--enterActive"],
                exit: hm(yh)["react-spectrum-ListViewItem-checkbox--exit"],
                exitActive:
                  hm(yh)["react-spectrum-ListViewItem-checkbox--exitActive"],
              },
              timeout: 160,
            },
            t(o).createElement(
              "div",
              {
                className:
                  hm(yh)["react-spectrum-ListViewItem-checkboxWrapper"],
              },
              t(o).createElement(Kf, {
                ...F,
                UNSAFE_className:
                  hm(yh)["react-spectrum-ListViewItem-checkbox"],
                isEmphasized: u,
              })
            )
          ),
          t(o).createElement(
            ot,
            {
              slots: {
                text: {
                  UNSAFE_className:
                    hm(yh)["react-spectrum-ListViewItem-content"],
                },
                description: {
                  UNSAFE_className:
                    hm(yh)["react-spectrum-ListViewItem-description"],
                  ...C,
                },
                illustration: {
                  UNSAFE_className:
                    hm(yh)["react-spectrum-ListViewItem-thumbnail"],
                },
                image: {
                  UNSAFE_className:
                    hm(yh)["react-spectrum-ListViewItem-thumbnail"],
                },
                actionButton: {
                  UNSAFE_className:
                    hm(yh)["react-spectrum-ListViewItem-actions"],
                  isQuiet: !0,
                },
                actionGroup: {
                  UNSAFE_className:
                    hm(yh)["react-spectrum-ListViewItem-actions"],
                  isQuiet: !0,
                  density: "compact",
                },
                actionMenu: {
                  UNSAFE_className:
                    hm(yh)["react-spectrum-ListViewItem-actionmenu"],
                  isQuiet: !0,
                },
              },
            },
            X,
            t(o).createElement(at, null, U)
          )
        )
      )
    )
  );
}
function Eh() {
  let { dropState: e, dragAndDropHooks: n } = (0, o.useContext)(Sh),
    r = (0, o.useRef)(),
    { dropIndicatorProps: i } = n.useDropIndicator(
      { target: { type: "root" } },
      e,
      r
    ),
    l = e.isDropTarget({ type: "root" }),
    { visuallyHiddenProps: a } = An();
  return !l && i["aria-hidden"]
    ? null
    : t(o).createElement(
        "div",
        { role: "row", "aria-hidden": i["aria-hidden"] },
        t(o).createElement(
          "div",
          { role: "gridcell", "aria-selected": "false" },
          t(o).createElement("div", { role: "button", ...a, ...i, ref: r })
        )
      );
}
function kh(e) {
  let { item: n, itemCount: r, itemHeight: i, density: l } = e,
    a = r > 1;
  return t(o).createElement(
    "div",
    {
      style: { height: i },
      className: Me(
        hm(yh),
        "react-spectrum-ListViewItem",
        "react-spectrum-ListViewItem-dragPreview",
        { "react-spectrum-ListViewItem-dragPreview--multiple": a },
        `react-spectrum-ListViewItem-dragPreview--${l}`
      ),
    },
    t(o).createElement(
      Ja,
      { UNSAFE_className: hm(yh)["react-spectrum-ListViewItem-grid"] },
      t(o).createElement(
        ot,
        {
          slots: {
            text: {
              UNSAFE_className: hm(yh)["react-spectrum-ListViewItem-content"],
            },
            description: {
              UNSAFE_className:
                hm(yh)["react-spectrum-ListViewItem-description"],
            },
            illustration: {
              UNSAFE_className: hm(yh)["react-spectrum-ListViewItem-thumbnail"],
            },
            image: {
              UNSAFE_className: hm(yh)["react-spectrum-ListViewItem-thumbnail"],
            },
            actionButton: {
              UNSAFE_className: hm(yh)["react-spectrum-ListViewItem-actions"],
              isQuiet: !0,
            },
            actionGroup: {
              UNSAFE_className: hm(yh)["react-spectrum-ListViewItem-actions"],
              isQuiet: !0,
              density: "compact",
            },
            actionMenu: {
              UNSAFE_className:
                hm(yh)["react-spectrum-ListViewItem-actionmenu"],
              isQuiet: !0,
            },
          },
        },
        "string" == typeof n.rendered
          ? t(o).createElement(Ln, null, n.rendered)
          : n.rendered,
        a &&
          t(o).createElement(
            "div",
            { className: Me(hm(yh), "react-spectrum-ListViewItem-badge") },
            r
          )
      )
    )
  );
}
bh = {
  "ar-AE": { loading: "جارٍ التحميل...", loadingMore: "جارٍ تحميل المزيد..." },
  "bg-BG": { loading: "Зареждане...", loadingMore: "Зареждане на още..." },
  "cs-CZ": { loading: "Načítání...", loadingMore: "Načítání dalších..." },
  "da-DK": { loading: "Indlæser...", loadingMore: "Indlæser flere..." },
  "de-DE": { loading: "Laden...", loadingMore: "Mehr laden ..." },
  "el-GR": { loading: "Φόρτωση...", loadingMore: "Φόρτωση περισσότερων..." },
  "en-US": { loading: "Loading…", loadingMore: "Loading more…" },
  "es-ES": { loading: "Cargando…", loadingMore: "Cargando más…" },
  "et-EE": { loading: "Laadimine...", loadingMore: "Laadi rohkem..." },
  "fi-FI": { loading: "Ladataan…", loadingMore: "Ladataan lisää…" },
  "fr-FR": {
    loading: "Chargement...",
    loadingMore: "Chargement supplémentaire...",
  },
  "he-IL": { loading: "טוען...", loadingMore: "טוען עוד..." },
  "hr-HR": { loading: "Učitavam...", loadingMore: "Učitavam još..." },
  "hu-HU": {
    loading: "Betöltés folyamatban…",
    loadingMore: "Továbbiak betöltése folyamatban…",
  },
  "it-IT": { loading: "Caricamento...", loadingMore: "Caricamento altri..." },
  "ja-JP": { loading: "読み込み中...", loadingMore: "さらに読み込み中..." },
  "ko-KR": { loading: "로드 중…", loadingMore: "추가 로드 중…" },
  "lt-LT": { loading: "Įkeliama...", loadingMore: "Įkeliama daugiau..." },
  "lv-LV": { loading: "Notiek ielāde...", loadingMore: "Tiek ielādēts vēl..." },
  "nb-NO": { loading: "Laster inn ...", loadingMore: "Laster inn flere ..." },
  "nl-NL": { loading: "Laden...", loadingMore: "Meer laden..." },
  "pl-PL": {
    loading: "Ładowanie...",
    loadingMore: "Wczytywanie większej liczby...",
  },
  "pt-BR": { loading: "Carregando...", loadingMore: "Carregando mais..." },
  "pt-PT": { loading: "A carregar...", loadingMore: "A carregar mais..." },
  "ro-RO": { loading: "Se încarcă...", loadingMore: "Se încarcă mai multe..." },
  "ru-RU": {
    loading: "Загрузка...",
    loadingMore: "Дополнительная загрузка...",
  },
  "sk-SK": { loading: "Načítava sa...", loadingMore: "Načítava sa viac..." },
  "sl-SI": {
    loading: "Nalaganje ...",
    loadingMore: "Nalaganje več vsebine ...",
  },
  "sr-SP": { loading: "Učitavam...", loadingMore: "Učitavam još..." },
  "sv-SE": { loading: "Läser in...", loadingMore: "Läser in mer..." },
  "tr-TR": {
    loading: "Yükleniyor...",
    loadingMore: "Daha fazla yükleniyor...",
  },
  "uk-UA": {
    loading: "Завантаження…",
    loadingMore: "Завантаження інших об’єктів...",
  },
  "zh-CN": { loading: "正在加载...", loadingMore: "正在加载更多..." },
  "zh-TW": { loading: "載入中…", loadingMore: "正在載入更多…" },
};
const Sh = t(o).createContext(null),
  xh = {
    compact: { medium: 32, large: 40 },
    regular: { medium: 40, large: 50 },
    spacious: { medium: 48, large: 60 },
  };
function Ph({ children: e }) {
  let { state: n } = (0, o.useContext)(Sh);
  return t(o).createElement(
    "div",
    {
      role: "row",
      "aria-rowindex": n.collection.size + 1,
      className: Me(hm(yh), "react-spectrum-ListView-centeredWrapper", {
        "react-spectrum-ListView-centeredWrapper--loadingMore":
          n.collection.size > 0,
      }),
    },
    t(o).createElement("div", { role: "gridcell" }, e)
  );
}
const Th = t(o).forwardRef(function (e, n) {
  var r;
  let {
      density: i = "regular",
      loadingState: l,
      onLoadMore: a,
      isQuiet: s,
      overflowMode: u = "truncate",
      onAction: c,
      dragAndDropHooks: d,
      ...p
    } = e,
    f = !!(null == d ? void 0 : d.useDraggableCollectionState),
    m = !!(null == d ? void 0 : d.useDroppableCollectionState),
    h = (0, o.useRef)(f),
    g = (0, o.useRef)(m);
  h.current !== f &&
    console.warn(
      "Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."
    ),
    g.current !== m &&
      console.warn(
        "Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."
      );
  let v,
    b = Oe(n),
    w = Ac({
      ...e,
      selectionBehavior:
        "highlight" === e.selectionStyle ? "replace" : "toggle",
    }),
    { collection: E, selectionManager: k } = w,
    S = Pe(hm(bh)),
    P = "loading" === l || "loadingMore" === l,
    { styleProps: T } = tt(e),
    _ = (0, o.useRef)(null);
  f &&
    ((v = d.useDraggableCollectionState({
      collection: E,
      selectionManager: k,
      preview: _,
    })),
    d.useDraggableCollection({}, v, b));
  let I = (function (e, t, n) {
    let { scale: r } = Kr(),
      i = Ce({ usage: "search", sensitivity: "base" }),
      l = 0 === e.collection.size,
      a = (0, o.useMemo)(
        () =>
          new Nc({
            estimatedRowHeight: xh[t][r],
            padding: 0,
            collator: i,
            loaderHeight: l ? null : xh[t][r],
          }),
        [i, r, t, l, n]
      );
    return (a.collection = e.collection), (a.disabledKeys = e.disabledKeys), a;
  })(w, e.density || "regular", u);
  I.allowDisabledKeyFocus =
    "selection" === w.selectionManager.disabledBehavior ||
    !!(null == v ? void 0 : v.draggingKeys.size);
  let M,
    L,
    N,
    R = null == d ? void 0 : d.DragPreview;
  m &&
    ((M = d.useDroppableCollectionState({
      collection: E,
      selectionManager: k,
    })),
    (L = d.useDroppableCollection(
      { keyboardDelegate: I, dropTargetDelegate: I },
      M,
      b
    )),
    (N = M.isDropTarget({ type: "root" })));
  let { gridProps: O } = Cc(
    { ...e, isVirtualized: !0, keyboardDelegate: I, onAction: c },
    w,
    b
  );
  I.isLoading = P;
  let A = k.focusedKey;
  "item" ===
    (null == M || null === (r = M.target) || void 0 === r ? void 0 : r.type) &&
    (A = M.target.key);
  let [F, z] = (0, o.useState)(!1),
    [D, K] = (0, o.useState)(!1);
  y(() => {
    b.current &&
      (z(b.current.clientWidth + 2 < b.current.offsetWidth),
      K(b.current.clientHeight + 2 < b.current.offsetHeight));
  });
  let V = (0, o.useMemo)(() => [...E].some((e) => e.hasChildNodes), [E]);
  return t(o).createElement(
    Sh.Provider,
    {
      value: {
        state: w,
        dragState: v,
        dropState: M,
        dragAndDropHooks: d,
        onAction: c,
        isListDraggable: f,
        isListDroppable: m,
        layout: I,
        loadingState: l,
      },
    },
    t(o).createElement(
      dn,
      null,
      t(o).createElement(
        Cn,
        { focusRingClass: Me(hm(yh), "focus-ring") },
        t(o).createElement(
          Id,
          {
            ...x(m && (null == L ? void 0 : L.collectionProps), O),
            ...C(p),
            ...O,
            ...T,
            isLoading: P,
            onLoadMore: a,
            ref: b,
            focusedKey: A,
            scrollDirection: "vertical",
            className: Me(
              hm(yh),
              "react-spectrum-ListView",
              `react-spectrum-ListView--${i}`,
              "react-spectrum-ListView--emphasized",
              {
                "react-spectrum-ListView--quiet": s,
                "react-spectrum-ListView--loadingMore": "loadingMore" === l,
                "react-spectrum-ListView--draggable": !!f,
                "react-spectrum-ListView--dropTarget": !!N,
                "react-spectrum-ListView--isVerticalScrollbarVisible": F,
                "react-spectrum-ListView--isHorizontalScrollbarVisible": D,
                "react-spectrum-ListView--hasAnyChildren": V,
                "react-spectrum-ListView--wrap": "wrap" === u,
              },
              T.className
            ),
            layout: I,
            collection: E,
            transitionDuration: P ? 160 : 220,
          },
          (n, r) => {
            if ("item" === n)
              return t(o).createElement(
                t(o).Fragment,
                null,
                m &&
                  null == E.getKeyBefore(r.key) &&
                  t(o).createElement(Eh, { key: "root" }),
                m &&
                  t(o).createElement(vh, {
                    key: `${r.key}-before`,
                    target: {
                      key: r.key,
                      type: "item",
                      dropPosition: "before",
                    },
                  }),
                t(o).createElement(wh, {
                  item: r,
                  isEmphasized: !0,
                  hasActions: !!c,
                }),
                m &&
                  t(o).createElement(vh, {
                    key: `${r.key}-after`,
                    target: { key: r.key, type: "item", dropPosition: "after" },
                    isPresentationOnly: null != E.getKeyAfter(r.key),
                  })
              );
            if ("loader" === n)
              return t(o).createElement(
                Ph,
                null,
                t(o).createElement(Ed, {
                  isIndeterminate: !0,
                  "aria-label":
                    E.size > 0 ? S.format("loadingMore") : S.format("loading"),
                })
              );
            if ("placeholder" === n) {
              let n = e.renderEmptyState ? e.renderEmptyState() : null;
              return null == n ? null : t(o).createElement(Ph, null, n);
            }
          }
        )
      )
    ),
    R &&
      f &&
      t(o).createElement(R, { ref: _ }, () => {
        let e = w.collection.getItem(v.draggedKey),
          n = v.draggingKeys.size,
          r = I.getLayoutInfo(v.draggedKey).rect.height;
        return t(o).createElement(kh, {
          item: e,
          itemCount: n,
          itemHeight: r,
          density: i,
        });
      })
  );
});
var _h;
_h = function (e) {
  return Rh.default.createElement(
    Gi,
    e,
    Rh.default.createElement(Ch.ChevronDownMedium, null)
  );
};
var Ch = {};
Object.defineProperty(Ch, "__esModule", { value: !0 }),
  (Ch.ChevronDownMedium = Nh);
var Ih = (function (e) {
  return e && e.__esModule ? e : { default: e };
})(l("acw62"));
function Mh() {
  return (
    (Mh =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Mh.apply(this, arguments)
  );
}
function Lh(e, t) {
  if (null == e) return {};
  var n,
    r,
    i = (function (e, t) {
      if (null == e) return {};
      var n,
        r,
        i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++)
        (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (r = 0; r < l.length; r++)
      (n = l[r]),
        t.indexOf(n) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
  }
  return i;
}
function Nh(e) {
  var t = e.scale,
    n = void 0 === t ? "M" : t,
    r = Lh(e, ["scale"]);
  return Ih.default.createElement(
    "svg",
    Mh({}, r, r),
    "L" === n &&
      Ih.default.createElement("path", {
        d: "M11.99 1.51a1 1 0 0 0-1.707-.707L6 5.086 1.717.803A1 1 0 1 0 .303 2.217l4.99 4.99a1 1 0 0 0 1.414 0l4.99-4.99a.997.997 0 0 0 .293-.707z",
      }),
    "M" === n &&
      Ih.default.createElement("path", {
        d: "M9.99 1.01A1 1 0 0 0 8.283.303L5 3.586 1.717.303A1 1 0 1 0 .303 1.717l3.99 3.98a1 1 0 0 0 1.414 0l3.99-3.98a.997.997 0 0 0 .293-.707z",
      })
  );
}
Nh.displayName = "ChevronDownMedium";
var Rh = Br(l("acw62"));
o = l("acw62");
function Oh(e, t, n) {
  let { keyboardDelegate: r, isDisabled: i } = e,
    l = Ce({ usage: "search", sensitivity: "base" }),
    a = (0, o.useMemo)(
      () => r || new pa(t.collection, t.disabledKeys, null, l),
      [r, t.collection, t.disabledKeys, l]
    ),
    { menuTriggerProps: s, menuProps: u } = _a(
      { isDisabled: i, type: "listbox" },
      t,
      n
    ),
    { typeSelectProps: c } = aa({
      keyboardDelegate: a,
      selectionManager: t.selectionManager,
      onTypeSelect(e) {
        t.setSelectedKey(e);
      },
    }),
    {
      labelProps: d,
      fieldProps: p,
      descriptionProps: f,
      errorMessageProps: m,
    } = Dc({ ...e, labelElementType: "span" });
  (c.onKeyDown = c.onKeyDownCapture), delete c.onKeyDownCapture;
  let h = C(e, { labelable: !0 }),
    g = x(c, s, p),
    y = w();
  return {
    labelProps: {
      ...d,
      onClick: () => {
        var t;
        e.isDisabled || (n.current.focus(), (Mt = t = "keyboard"), Ft(t, null));
      },
    },
    triggerProps: x(h, {
      ...g,
      isDisabled: i,
      onKeyDown: S(
        g.onKeyDown,
        (e) => {
          switch (e.key) {
            case "ArrowLeft": {
              e.preventDefault();
              let n =
                null != t.selectedKey
                  ? a.getKeyAbove(t.selectedKey)
                  : a.getFirstKey();
              n && t.setSelectedKey(n);
              break;
            }
            case "ArrowRight": {
              e.preventDefault();
              let n =
                null != t.selectedKey
                  ? a.getKeyBelow(t.selectedKey)
                  : a.getFirstKey();
              n && t.setSelectedKey(n);
              break;
            }
          }
        },
        e.onKeyDown
      ),
      onKeyUp: e.onKeyUp,
      "aria-labelledby": [
        g["aria-labelledby"],
        g["aria-label"] && !g["aria-labelledby"] ? g.id : null,
        y,
      ]
        .filter(Boolean)
        .join(" "),
      onFocus(n) {
        t.isFocused ||
          (e.onFocus && e.onFocus(n),
          e.onFocusChange && e.onFocusChange(!0),
          t.setFocused(!0));
      },
      onBlur(n) {
        t.isOpen ||
          (e.onBlur && e.onBlur(n),
          e.onFocusChange && e.onFocusChange(!1),
          t.setFocused(!1));
      },
    }),
    valueProps: { id: y },
    menuProps: {
      ...u,
      autoFocus: t.focusStrategy || !0,
      shouldSelectOnPressUp: !0,
      shouldFocusOnHover: !0,
      disallowEmptySelection: !0,
      onBlur: (n) => {
        n.currentTarget.contains(n.relatedTarget) ||
          (e.onBlur && e.onBlur(n),
          e.onFocusChange && e.onFocusChange(!1),
          t.setFocused(!1));
      },
      "aria-labelledby": [
        p["aria-labelledby"],
        g["aria-label"] && !p["aria-labelledby"] ? g.id : null,
      ]
        .filter(Boolean)
        .join(" "),
    },
    descriptionProps: f,
    errorMessageProps: m,
  };
}
function Ah(e) {
  let { state: n, triggerRef: r, label: i, name: l, isDisabled: a } = e,
    {
      containerProps: s,
      inputProps: u,
      selectProps: c,
    } = (function (e, t, n) {
      let { autoComplete: r, name: i, isDisabled: l } = e,
        o = Ht(),
        { visuallyHiddenProps: a } = An();
      var s;
      return {
        containerProps: { ...a, "aria-hidden": !0 },
        inputProps: {
          type: "text",
          tabIndex: null == o || t.isFocused || t.isOpen ? -1 : 0,
          style: { fontSize: 16 },
          onFocus: () => n.current.focus(),
          disabled: l,
        },
        selectProps: {
          tabIndex: -1,
          autoComplete: r,
          disabled: l,
          name: i,
          size: t.collection.size,
          value: null !== (s = t.selectedKey) && void 0 !== s ? s : "",
          onChange: (e) => t.setSelectedKey(e.target.value),
        },
      };
    })(e, n, r);
  return n.collection.size <= 300
    ? t(o).createElement(
        "div",
        s,
        t(o).createElement("input", u),
        t(o).createElement(
          "label",
          null,
          i,
          t(o).createElement(
            "select",
            c,
            t(o).createElement("option", null),
            [...n.collection.getKeys()].map((e) => {
              let r = n.collection.getItem(e);
              if ("item" === r.type)
                return t(o).createElement(
                  "option",
                  { key: r.key, value: r.key },
                  r.textValue
                );
            })
          )
        )
      )
    : l
    ? t(o).createElement("input", {
        type: "hidden",
        autoComplete: c.autoComplete,
        name: l,
        disabled: a,
        value: n.selectedKey,
      })
    : null;
}
o = l("acw62");
const Fh = new WeakMap();
function zh(e, t) {
  let n = Fh.get(e);
  if (!n) throw new Error("Unknown list");
  return `${n.id}-option-${
    ((r = t), "string" == typeof r ? r.replace(/\s*/g, "") : "" + r)
  }`;
  var r;
}
function Dh(e, t, n) {
  let r = C(e, { labelable: !0 }),
    { listProps: i } = fa({
      ...e,
      ref: n,
      selectionManager: t.selectionManager,
      collection: t.collection,
      disabledKeys: t.disabledKeys,
    }),
    { focusWithinProps: l } = qt({
      onFocusWithin: e.onFocus,
      onBlurWithin: e.onBlur,
      onFocusWithinChange: e.onFocusChange,
    }),
    o = w(e.id);
  Fh.set(t, {
    id: o,
    shouldUseVirtualFocus: e.shouldUseVirtualFocus,
    shouldSelectOnPressUp: e.shouldSelectOnPressUp,
    shouldFocusOnHover: e.shouldFocusOnHover,
    isVirtualized: e.isVirtualized,
    onAction: e.onAction,
  });
  let { labelProps: a, fieldProps: s } = zc({
    ...e,
    id: o,
    labelElementType: "span",
  });
  return {
    labelProps: a,
    listBoxProps: x(
      r,
      l,
      "multiple" === t.selectionManager.selectionMode
        ? { "aria-multiselectable": "true" }
        : {},
      { role: "listbox", ...x(s, i) }
    ),
  };
}
function Kh(e, t, n) {
  let { key: r } = e,
    i = Fh.get(t);
  var l;
  let o =
    null !== (l = e.isDisabled) && void 0 !== l ? l : t.disabledKeys.has(r);
  var a;
  let s =
      null !== (a = e.isSelected) && void 0 !== a
        ? a
        : t.selectionManager.isSelected(r),
    u = t.selectionManager.focusedKey === r;
  var c;
  let d =
    null !== (c = e.shouldSelectOnPressUp) && void 0 !== c
      ? c
      : i.shouldSelectOnPressUp;
  var p;
  let f =
    null !== (p = e.shouldFocusOnHover) && void 0 !== p
      ? p
      : i.shouldFocusOnHover;
  var m;
  let h =
    null !== (m = e.shouldUseVirtualFocus) && void 0 !== m
      ? m
      : i.shouldUseVirtualFocus;
  var g;
  let y = null !== (g = e.isVirtualized) && void 0 !== g ? g : i.isVirtualized,
    v = k(),
    b = k(),
    w = {
      role: "option",
      "aria-disabled": o,
      "aria-selected": "none" !== t.selectionManager.selectionMode ? s : void 0,
    };
  (Y() && Z()) ||
    ((w["aria-label"] = e["aria-label"]),
    (w["aria-labelledby"] = v),
    (w["aria-describedby"] = b)),
    y &&
      ((w["aria-posinset"] = t.collection.getItem(r).index + 1),
      (w["aria-setsize"] = xa(t.collection)));
  let {
      itemProps: E,
      isPressed: S,
      hasAction: P,
      allowsSelection: T,
    } = ua({
      selectionManager: t.selectionManager,
      key: r,
      ref: n,
      shouldSelectOnPressUp: d,
      allowsDifferentPressOrigin: d && f,
      isVirtualized: y,
      shouldUseVirtualFocus: h,
      isDisabled: o,
      onAction: i.onAction ? () => i.onAction(r) : void 0,
    }),
    { hoverProps: _ } = Jt({
      isDisabled: o || !f,
      onHoverStart() {
        jt() ||
          (t.selectionManager.setFocused(!0),
          t.selectionManager.setFocusedKey(r));
      },
    });
  return {
    optionProps: { ...w, ...x(E, _), id: zh(t, r) },
    labelProps: { id: v },
    descriptionProps: { id: b },
    isFocused: u,
    isSelected: s,
    isDisabled: o,
    isPressed: S,
    allowsSelection: T,
    hasAction: P,
  };
}
function Vh(e) {
  let { heading: t, "aria-label": n } = e,
    r = w();
  return {
    itemProps: { role: "presentation" },
    headingProps: t ? { id: r, "aria-hidden": !0 } : {},
    groupProps: {
      role: "group",
      "aria-label": n,
      "aria-labelledby": t ? r : void 0,
    },
  };
}
function Uh(e) {
  return e && e.__esModule ? e.default : e;
}
function Bh(e, t, n, r) {
  Object.defineProperty(e, t, {
    get: n,
    set: r,
    enumerable: !0,
    configurable: !0,
  });
}
var jh;
jh = {
  "ar-AE": { loading: "جارٍ التحميل...", loadingMore: "جارٍ تحميل المزيد..." },
  "bg-BG": { loading: "Зареждане...", loadingMore: "Зареждане на още..." },
  "cs-CZ": { loading: "Načítání...", loadingMore: "Načítání dalších..." },
  "da-DK": { loading: "Indlæser ...", loadingMore: "Indlæser flere ..." },
  "de-DE": { loading: "Laden...", loadingMore: "Mehr laden ..." },
  "el-GR": { loading: "Φόρτωση...", loadingMore: "Φόρτωση περισσότερων..." },
  "en-US": { loading: "Loading…", loadingMore: "Loading more…" },
  "es-ES": { loading: "Cargando…", loadingMore: "Cargando más…" },
  "et-EE": { loading: "Laadimine...", loadingMore: "Laadi rohkem..." },
  "fi-FI": { loading: "Ladataan…", loadingMore: "Ladataan lisää…" },
  "fr-FR": {
    loading: "Chargement...",
    loadingMore: "Chargement supplémentaire...",
  },
  "he-IL": { loading: "טוען...", loadingMore: "טוען עוד..." },
  "hr-HR": { loading: "Učitavam...", loadingMore: "Učitavam još..." },
  "hu-HU": {
    loading: "Betöltés folyamatban…",
    loadingMore: "Továbbiak betöltése folyamatban…",
  },
  "it-IT": { loading: "Caricamento...", loadingMore: "Caricamento altri..." },
  "ja-JP": { loading: "読み込み中...", loadingMore: "さらに読み込み中..." },
  "ko-KR": { loading: "로드 중", loadingMore: "추가 로드 중" },
  "lt-LT": { loading: "Įkeliama...", loadingMore: "Įkeliama daugiau..." },
  "lv-LV": { loading: "Notiek ielāde...", loadingMore: "Tiek ielādēts vēl..." },
  "nb-NO": { loading: "Laster inn ...", loadingMore: "Laster inn flere ..." },
  "nl-NL": { loading: "Laden...", loadingMore: "Meer laden..." },
  "pl-PL": {
    loading: "Ładowanie...",
    loadingMore: "Wczytywanie większej liczby...",
  },
  "pt-BR": { loading: "Carregando...", loadingMore: "Carregando mais..." },
  "pt-PT": { loading: "A carregar...", loadingMore: "A carregar mais..." },
  "ro-RO": { loading: "Se încarcă...", loadingMore: "Se încarcă mai multe..." },
  "ru-RU": {
    loading: "Загрузка...",
    loadingMore: "Дополнительная загрузка...",
  },
  "sk-SK": { loading: "Načítava sa...", loadingMore: "Načítava sa viac..." },
  "sl-SI": { loading: "Nalaganje...", loadingMore: "Nalaganje več vsebine..." },
  "sr-SP": { loading: "Učitavam...", loadingMore: "Učitavam još..." },
  "sv-SE": { loading: "Läser in...", loadingMore: "Läser in mer..." },
  "tr-TR": {
    loading: "Yükleniyor...",
    loadingMore: "Daha fazla yükleniyor...",
  },
  "uk-UA": {
    loading: "Завантаження…",
    loadingMore: "Завантаження інших об’єктів...",
  },
  "zh-CN": { loading: "正在加载...", loadingMore: "正在加载更多..." },
  "zh-TW": { loading: "正在載入", loadingMore: "正在載入更多…" },
};
const $h = t(o).createContext(null);
var Hh,
  Wh,
  qh,
  Gh,
  Qh,
  Yh,
  Xh,
  Zh,
  Jh,
  eg,
  tg,
  ng,
  rg,
  ig,
  lg,
  og,
  ag,
  sg,
  ug,
  cg,
  dg,
  pg,
  fg,
  mg,
  hg = {};
function gg(e) {
  let {
      item: n,
      shouldSelectOnPressUp: r,
      shouldFocusOnHover: i,
      shouldUseVirtualFocus: l,
    } = e,
    { rendered: a, key: s } = n,
    u = (0, o.useContext)($h),
    c = (0, o.useRef)(),
    {
      optionProps: d,
      labelProps: p,
      descriptionProps: f,
      isSelected: m,
      isDisabled: h,
      isFocused: g,
    } = Kh(
      {
        "aria-label": n["aria-label"],
        key: s,
        shouldSelectOnPressUp: r,
        shouldFocusOnHover: i,
        isVirtualized: !0,
        shouldUseVirtualFocus: l,
      },
      u,
      c
    ),
    { hoverProps: y, isHovered: v } = Jt({ ...e, isDisabled: h }),
    b = "string" == typeof a ? t(o).createElement(Ln, null, a) : a,
    w = jt();
  return t(o).createElement(
    Cn,
    { focusRingClass: Me(Uh(hg), "focus-ring") },
    t(o).createElement(
      "div",
      {
        ...x(d, i ? {} : y),
        ref: c,
        className: Me(Uh(hg), "spectrum-Menu-item", {
          "is-focused": l && g && w,
          "is-disabled": h,
          "is-selected": m,
          "is-selectable": "none" !== u.selectionManager.selectionMode,
          "is-hovered": (v && !i) || (g && !w),
        }),
      },
      t(o).createElement(
        Ja,
        { UNSAFE_className: Me(Uh(hg), "spectrum-Menu-itemGrid") },
        t(o).createElement(
          at,
          null,
          t(o).createElement(
            ot,
            {
              slots: {
                text: {
                  UNSAFE_className: Uh(hg)["spectrum-Menu-itemLabel"],
                  ...p,
                },
                icon: {
                  size: "S",
                  UNSAFE_className: Uh(hg)["spectrum-Menu-icon"],
                },
                description: {
                  UNSAFE_className: Uh(hg)["spectrum-Menu-description"],
                  ...f,
                },
              },
            },
            b,
            m &&
              t(o).createElement(Ua, {
                slot: "checkmark",
                UNSAFE_className: Me(Uh(hg), "spectrum-Menu-checkmark"),
              })
          )
        )
      )
    )
  );
}
function yg(e) {
  let { children: n, reusableView: r, header: i } = e,
    l = r.content,
    { headingProps: a, groupProps: s } = Vh({
      heading: l.rendered,
      "aria-label": l["aria-label"],
    }),
    { separatorProps: u } = ss({ elementType: "li" }),
    c = (0, o.useRef)();
  Pd({ reusableView: i, ref: c });
  let { direction: d } = Se(),
    p = (0, o.useContext)($h);
  return t(o).createElement(
    o.Fragment,
    null,
    t(o).createElement(
      "div",
      { role: "presentation", ref: c, style: Cd(i.layoutInfo, d) },
      l.key !== p.collection.getFirstKey() &&
        t(o).createElement("div", {
          ...u,
          className: Me(Uh(hg), "spectrum-Menu-divider"),
        }),
      l.rendered &&
        t(o).createElement(
          "div",
          { ...a, className: Me(Uh(hg), "spectrum-Menu-sectionHeading") },
          l.rendered
        )
    ),
    t(o).createElement(
      "div",
      {
        ...s,
        style: Cd(r.layoutInfo, d),
        className: Me(Uh(hg), "spectrum-Menu"),
      },
      n
    )
  );
}
function vg(e) {
  let { scale: t } = Kr(),
    n = Ce({ usage: "search", sensitivity: "base" }),
    r = (0, o.useMemo)(
      () =>
        new Nc({
          estimatedRowHeight: "large" === t ? 48 : 32,
          estimatedHeadingHeight: "large" === t ? 33 : 26,
          padding: "large" === t ? 5 : 4,
          loaderHeight: 40,
          placeholderHeight: "large" === t ? 48 : 32,
          collator: n,
        }),
      [n, t]
    );
  return (r.collection = e.collection), (r.disabledKeys = e.disabledKeys), r;
}
Bh(
  hg,
  "spectrum-Menu-popover",
  () => Hh,
  (e) => (Hh = e)
),
  Bh(
    hg,
    "spectrum-Menu",
    () => Wh,
    (e) => (Wh = e)
  ),
  Bh(
    hg,
    "spectrum-Menu-sectionHeading",
    () => qh,
    (e) => (qh = e)
  ),
  Bh(
    hg,
    "spectrum-Menu-checkmark",
    () => Gh,
    (e) => (Gh = e)
  ),
  Bh(
    hg,
    "spectrum-Menu-item",
    () => Qh,
    (e) => (Qh = e)
  ),
  Bh(
    hg,
    "is-selected",
    () => Yh,
    (e) => (Yh = e)
  ),
  Bh(
    hg,
    "spectrum-Icon",
    () => Xh,
    (e) => (Xh = e)
  ),
  Bh(
    hg,
    "spectrum-Menu-itemLabel",
    () => Zh,
    (e) => (Zh = e)
  ),
  Bh(
    hg,
    "spectrum-Menu-itemIcon",
    () => Jh,
    (e) => (Jh = e)
  ),
  Bh(
    hg,
    "spectrum-Menu-itemLabel--wrapping",
    () => eg,
    (e) => (eg = e)
  ),
  Bh(
    hg,
    "spectrum-Menu-divider",
    () => tg,
    (e) => (tg = e)
  ),
  Bh(
    hg,
    "spectrum-Menu-itemGrid",
    () => ng,
    (e) => (ng = e)
  ),
  Bh(
    hg,
    "is-selectable",
    () => rg,
    (e) => (rg = e)
  ),
  Bh(
    hg,
    "spectrum-Menu-end",
    () => ig,
    (e) => (ig = e)
  ),
  Bh(
    hg,
    "spectrum-Menu-icon",
    () => lg,
    (e) => (lg = e)
  ),
  Bh(
    hg,
    "spectrum-Menu-description",
    () => og,
    (e) => (og = e)
  ),
  Bh(
    hg,
    "spectrum-Menu-keyboard",
    () => ag,
    (e) => (ag = e)
  ),
  Bh(
    hg,
    "focus-ring",
    () => sg,
    (e) => (sg = e)
  ),
  Bh(
    hg,
    "is-focused",
    () => ug,
    (e) => (ug = e)
  ),
  Bh(
    hg,
    "is-hovered",
    () => cg,
    (e) => (cg = e)
  ),
  Bh(
    hg,
    "is-highlighted",
    () => dg,
    (e) => (dg = e)
  ),
  Bh(
    hg,
    "is-open",
    () => pg,
    (e) => (pg = e)
  ),
  Bh(
    hg,
    "is-active",
    () => fg,
    (e) => (fg = e)
  ),
  Bh(
    hg,
    "is-disabled",
    () => mg,
    (e) => (mg = e)
  ),
  (Hh = "spectrum-Menu-popover_7ea47c"),
  (Wh = "spectrum-Menu_7ea47c"),
  (qh = "spectrum-Menu-sectionHeading_7ea47c"),
  (Gh = "spectrum-Menu-checkmark_7ea47c"),
  (Qh = "spectrum-Menu-item_7ea47c"),
  (Yh = "is-selected_7ea47c"),
  (Xh = "spectrum-Icon_7ea47c"),
  (Zh = "spectrum-Menu-itemLabel_7ea47c"),
  (Jh = "spectrum-Menu-itemIcon_7ea47c"),
  (eg = "spectrum-Menu-itemLabel--wrapping_7ea47c"),
  (tg = "spectrum-Menu-divider_7ea47c"),
  (ng = "spectrum-Menu-itemGrid_7ea47c"),
  (rg = "is-selectable_7ea47c"),
  (ig = "spectrum-Menu-end_7ea47c"),
  (lg = "spectrum-Menu-icon_7ea47c"),
  (og = "spectrum-Menu-description_7ea47c"),
  (ag = "spectrum-Menu-keyboard_7ea47c"),
  (sg = "focus-ring_7ea47c"),
  (ug = "is-focused_7ea47c"),
  (cg = "is-hovered_7ea47c"),
  (dg = "is-highlighted_7ea47c"),
  (pg = "is-open_7ea47c"),
  (fg = "is-active_7ea47c"),
  (mg = "is-disabled_7ea47c");
const bg = t(o).forwardRef(function (e, n) {
  let {
      layout: r,
      state: i,
      shouldSelectOnPressUp: l,
      focusOnPointerEnter: a,
      shouldUseVirtualFocus: s,
      domProps: u = {},
      transitionDuration: c = 0,
      onScroll: d,
    } = e,
    { listBoxProps: p } = Dh(
      { ...e, keyboardDelegate: r, isVirtualized: !0 },
      i,
      n
    ),
    { styleProps: f } = tt(e),
    m = Pe(Uh(jh));
  return (
    (r.isLoading = e.isLoading),
    t(o).createElement(
      $h.Provider,
      { value: i },
      t(o).createElement(
        dn,
        null,
        t(o).createElement(
          Id,
          {
            ...f,
            ...x(p, u),
            ref: n,
            focusedKey: i.selectionManager.focusedKey,
            sizeToFit: "height",
            scrollDirection: "vertical",
            className: Me(Uh(hg), "spectrum-Menu", f.className),
            layout: r,
            collection: i.collection,
            renderWrapper: (e, n, r, i) =>
              "section" === n.viewType
                ? t(o).createElement(
                    yg,
                    {
                      key: n.key,
                      reusableView: n,
                      header: r.find((e) => "header" === e.viewType),
                    },
                    i(r.filter((e) => "item" === e.viewType))
                  )
                : t(o).createElement(Td, {
                    key: n.key,
                    reusableView: n,
                    parent: e,
                  }),
            transitionDuration: c,
            isLoading: e.isLoading,
            onLoadMore: e.onLoadMore,
            shouldUseVirtualFocus: s,
            onScroll: d,
          },
          (n, r) => {
            if ("item" === n)
              return t(o).createElement(gg, {
                item: r,
                shouldSelectOnPressUp: l,
                shouldFocusOnHover: a,
                shouldUseVirtualFocus: s,
              });
            if ("loader" === n)
              return t(o).createElement(
                "div",
                {
                  role: "option",
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                  },
                },
                t(o).createElement(Ed, {
                  isIndeterminate: !0,
                  size: "S",
                  "aria-label":
                    i.collection.size > 0
                      ? m.format("loadingMore")
                      : m.format("loading"),
                  UNSAFE_className: Me(
                    Uh(hg),
                    "spectrum-Dropdown-progressCircle"
                  ),
                })
              );
            if ("placeholder" === n) {
              let n = e.renderEmptyState ? e.renderEmptyState() : null;
              return null == n
                ? null
                : t(o).createElement("div", { role: "option" }, n);
            }
          }
        )
      )
    )
  );
});
t(o).forwardRef(function (e, n) {
  let r = Ac(e),
    i = vg(r),
    l = Oe(n);
  return t(o).createElement(bg, { ...e, ref: l, state: r, layout: i });
});
(o = l("acw62")), (o = l("acw62"));
function wg(e) {
  let t = Ra(e),
    n = Fc({
      ...e,
      onSelectionChange: (n) => {
        null != e.onSelectionChange && e.onSelectionChange(n), t.close();
      },
    }),
    [r, i] = (0, o.useState)(!1);
  return {
    ...n,
    ...t,
    open() {
      0 !== n.collection.size && t.open();
    },
    toggle(e) {
      0 !== n.collection.size && t.toggle(e);
    },
    isFocused: r,
    setFocused: i,
  };
}
function Eg(e) {
  return e && e.__esModule ? e.default : e;
}
function kg(e, t, n, r) {
  Object.defineProperty(e, t, {
    get: n,
    set: r,
    enumerable: !0,
    configurable: !0,
  });
}
var Sg;
Sg = {
  "ar-AE": { loading: "جارٍ التحميل...", placeholder: "حدد خيارًا..." },
  "bg-BG": { loading: "Зареждане...", placeholder: "Изберете опция" },
  "cs-CZ": {
    loading: "Načítání...",
    placeholder: "Vyberte vhodnou možnost...",
  },
  "da-DK": { loading: "Indlæser ...", placeholder: "Vælg en mulighed ..." },
  "de-DE": { loading: "Laden...", placeholder: "Option auswählen..." },
  "el-GR": { loading: "Φόρτωση...", placeholder: "Επιλέξτε…" },
  "en-US": { placeholder: "Select an option…", loading: "Loading…" },
  "es-ES": {
    loading: "Cargando…",
    placeholder: "Selecciona una de estas opciones...",
  },
  "et-EE": { loading: "Laadimine...", placeholder: "Valige valikuline..." },
  "fi-FI": { loading: "Ladataan…", placeholder: "Valitse vaihtoehto..." },
  "fr-FR": {
    loading: "Chargement...",
    placeholder: "Sélectionnez une option...",
  },
  "he-IL": { loading: "טוען...", placeholder: "בחר אפשרות..." },
  "hr-HR": { loading: "Učitavam...", placeholder: "Odaberite opciju" },
  "hu-HU": {
    loading: "Betöltés folyamatban…",
    placeholder: "Válasszon egy opciót…",
  },
  "it-IT": {
    loading: "Caricamento...",
    placeholder: "Seleziona un’opzione...",
  },
  "ja-JP": { loading: "読み込み中...", placeholder: "オプションを選択..." },
  "ko-KR": { loading: "로드 중", placeholder: "선택 사항 선택" },
  "lt-LT": { loading: "Įkeliama...", placeholder: "Pasirinkite parinktį..." },
  "lv-LV": { loading: "Notiek ielāde...", placeholder: "Atlasiet opciju..." },
  "nb-NO": { loading: "Laster inn ...", placeholder: "Velg et alternativ..." },
  "nl-NL": { loading: "Laden...", placeholder: "Optie selecteren..." },
  "pl-PL": { loading: "Ładowanie...", placeholder: "Wybierz opcję..." },
  "pt-BR": { loading: "Carregando...", placeholder: "Selecione uma opção..." },
  "pt-PT": { loading: "A carregar...", placeholder: "Selecionar uma opção..." },
  "ro-RO": { loading: "Se încarcă...", placeholder: "Selectați o opțiune" },
  "ru-RU": { loading: "Загрузка...", placeholder: "Выбрать параметр..." },
  "sk-SK": { loading: "Načítava sa...", placeholder: "Vyberte možnosť..." },
  "sl-SI": { loading: "Nalaganje...", placeholder: "Izberite možnost" },
  "sr-SP": { loading: "Učitavam...", placeholder: "Izaberite opciju" },
  "sv-SE": { loading: "Läser in...", placeholder: "Välj ett alternativ..." },
  "tr-TR": { loading: "Yükleniyor...", placeholder: "Bir seçim yapın…" },
  "uk-UA": { loading: "Завантаження…", placeholder: "Виберіть опцію..." },
  "zh-CN": { loading: "正在加载...", placeholder: "选择一个选项..." },
  "zh-TW": { loading: "正在載入", placeholder: "選取一個選項" },
};
var xg,
  Pg,
  Tg,
  _g,
  Cg,
  Ig,
  Mg,
  Lg,
  Ng,
  Rg,
  Og,
  Ag,
  Fg,
  zg,
  Dg,
  Kg,
  Vg,
  Ug,
  Bg = {};
kg(
  Bg,
  "spectrum-Dropdown",
  () => xg,
  (e) => (xg = e)
),
  kg(
    Bg,
    "spectrum-Dropdown-chevron",
    () => Pg,
    (e) => (Pg = e)
  ),
  kg(
    Bg,
    "spectrum-Dropdown-trigger",
    () => Tg,
    (e) => (Tg = e)
  ),
  kg(
    Bg,
    "spectrum-Dropdown-label",
    () => _g,
    (e) => (_g = e)
  ),
  kg(
    Bg,
    "is-placeholder",
    () => Cg,
    (e) => (Cg = e)
  ),
  kg(
    Bg,
    "spectrum-Icon",
    () => Ig,
    (e) => (Ig = e)
  ),
  kg(
    Bg,
    "spectrum-Dropdown-invalidIcon",
    () => Mg,
    (e) => (Mg = e)
  ),
  kg(
    Bg,
    "spectrum-Dropdown-progressCircle",
    () => Lg,
    (e) => (Lg = e)
  ),
  kg(
    Bg,
    "spectrum-Dropdown--quiet",
    () => Ng,
    (e) => (Ng = e)
  ),
  kg(
    Bg,
    "spectrum-Dropdown-popover--quiet",
    () => Rg,
    (e) => (Rg = e)
  ),
  kg(
    Bg,
    "spectrum-Field",
    () => Og,
    (e) => (Og = e)
  ),
  kg(
    Bg,
    "spectrum-Dropdown-fieldWrapper--quiet",
    () => Ag,
    (e) => (Ag = e)
  ),
  kg(
    Bg,
    "spectrum-Dropdown-fieldWrapper--positionSide",
    () => Fg,
    (e) => (Fg = e)
  ),
  kg(
    Bg,
    "is-selected",
    () => zg,
    (e) => (zg = e)
  ),
  kg(
    Bg,
    "is-invalid",
    () => Dg,
    (e) => (Dg = e)
  ),
  kg(
    Bg,
    "is-disabled",
    () => Kg,
    (e) => (Kg = e)
  ),
  kg(
    Bg,
    "is-hovered",
    () => Vg,
    (e) => (Vg = e)
  ),
  kg(
    Bg,
    "focus-ring",
    () => Ug,
    (e) => (Ug = e)
  ),
  (xg = "spectrum-Dropdown_6d8ec0"),
  (Pg = "spectrum-Dropdown-chevron_6d8ec0"),
  (Tg = "spectrum-Dropdown-trigger_6d8ec0"),
  (_g = "spectrum-Dropdown-label_6d8ec0"),
  (Cg = "is-placeholder_6d8ec0"),
  (Ig = "spectrum-Icon_6d8ec0"),
  (Mg = "spectrum-Dropdown-invalidIcon_6d8ec0"),
  (Lg = "spectrum-Dropdown-progressCircle_6d8ec0"),
  (Ng = "spectrum-Dropdown--quiet_6d8ec0"),
  (Rg = "spectrum-Dropdown-popover--quiet_6d8ec0"),
  (Og = "spectrum-Field_6d8ec0"),
  (Ag = "spectrum-Dropdown-fieldWrapper--quiet_6d8ec0"),
  (Fg = "spectrum-Dropdown-fieldWrapper--positionSide_6d8ec0"),
  (zg = "is-selected_6d8ec0"),
  (Dg = "is-invalid_6d8ec0"),
  (Kg = "is-disabled_6d8ec0"),
  (Vg = "is-hovered_6d8ec0"),
  (Ug = "focus-ring_6d8ec0");
const jg = t(o).forwardRef(function (e, n) {
  e = Vr((e = lt(e, "picker")));
  let r,
    i = Pe(Eg(Sg)),
    {
      autoComplete: l,
      isDisabled: a,
      direction: s = "bottom",
      align: u = "start",
      shouldFlip: c = !0,
      placeholder: d = i.format("placeholder"),
      validationState: p,
      isQuiet: f,
      label: m,
      labelPosition: h = "top",
      menuWidth: g,
      name: v,
      autoFocus: b,
    } = e,
    w = wg(e),
    E = Oe(n),
    k = (0, o.useRef)(),
    S = (0, o.useRef)(),
    P = Fe(S),
    T = (0, o.useRef)(),
    _ = vg(w),
    {
      labelProps: C,
      triggerProps: I,
      valueProps: M,
      menuProps: L,
      descriptionProps: N,
      errorMessageProps: R,
    } = Oh({ ...e, keyboardDelegate: _ }, w, P),
    O = ut(),
    { hoverProps: A, isHovered: F } = Jt({ isDisabled: a }),
    z = e.isLoading && 0 === w.collection.size,
    K = e.isLoading && w.collection.size > 0,
    V = t(o).createElement(bg, {
      ...L,
      ref: T,
      disallowEmptySelection: !0,
      autoFocus: w.focusStrategy || !0,
      shouldSelectOnPressUp: !0,
      focusOnPointerEnter: !0,
      layout: _,
      state: w,
      width: O ? "100%" : void 0,
      UNSAFE_style: { maxHeight: "inherit" },
      isLoading: K,
      onLoadMore: e.onLoadMore,
    }),
    [U, B] = (0, o.useState)(null),
    { scale: j } = Kr(),
    $ = (0, o.useCallback)(() => {
      if (!O && P.current) {
        let e = P.current.offsetWidth;
        B(e);
      }
    }, [P, B, O]);
  if ((D({ ref: P, onResize: $ }), y($, [j, w.selectedKey, $]), O))
    r = t(o).createElement(ia, { state: w }, V);
  else {
    let e = f ? null : U,
      n = {
        width: g ? Ge(g) : e,
        minWidth: f
          ? `calc(${U}px + calc(2 * var(--spectrum-dropdown-quiet-offset)))`
          : U,
      };
    r = t(o).createElement(
      Bo,
      {
        UNSAFE_style: n,
        UNSAFE_className: Me(Eg(Bg), "spectrum-Dropdown-popover", {
          "spectrum-Dropdown-popover--quiet": f,
        }),
        ref: k,
        placement: `${s} ${u}`,
        shouldFlip: c,
        hideArrow: !0,
        state: w,
        triggerRef: P,
        scrollRef: T,
      },
      V
    );
  }
  let H = w.selectedItem ? w.selectedItem.rendered : d;
  "string" == typeof H && (H = t(o).createElement(Ln, null, H));
  let W = t(o).createElement(
      "div",
      {
        className: Me(Eg(Bg), "spectrum-Dropdown", {
          "is-invalid": "invalid" === p && !a,
          "is-disabled": a,
          "spectrum-Dropdown--quiet": f,
        }),
      },
      t(o).createElement(Ah, {
        autoComplete: l,
        isDisabled: a,
        state: w,
        triggerRef: P,
        label: m,
        name: v,
      }),
      t(o).createElement(
        Tt,
        x(A, I),
        t(o).createElement(
          Dl,
          {
            ref: S,
            isActive: w.isOpen,
            isQuiet: f,
            isDisabled: a,
            validationState: p,
            autoFocus: b,
            UNSAFE_className: Me(Eg(Bg), "spectrum-Dropdown-trigger", {
              "is-hovered": F,
            }),
          },
          t(o).createElement(
            ot,
            {
              slots: {
                icon: {
                  UNSAFE_className: Me(Eg(Bg), "spectrum-Icon"),
                  size: "S",
                },
                text: {
                  ...M,
                  UNSAFE_className: Me(Eg(Bg), "spectrum-Dropdown-label", {
                    "is-placeholder": !w.selectedItem,
                  }),
                },
                description: { isHidden: !0 },
              },
            },
            H
          ),
          z &&
            t(o).createElement(Ed, {
              isIndeterminate: !0,
              size: "S",
              "aria-label": i.format("loading"),
              UNSAFE_className: Me(Eg(Bg), "spectrum-Dropdown-progressCircle"),
            }),
          "invalid" === p &&
            !z &&
            !a &&
            t(o).createElement(xp, {
              UNSAFE_className: Me(Eg(Bg), "spectrum-Dropdown-invalidIcon"),
            }),
          t(o).createElement(_h, {
            UNSAFE_className: Me(Eg(Bg), "spectrum-Dropdown-chevron"),
          })
        )
      ),
      0 === w.collection.size ? null : r
    ),
    q = m
      ? Me(Eg(Bg), "spectrum-Field", {
          "spectrum-Dropdown-fieldWrapper--quiet": f,
          "spectrum-Dropdown-fieldWrapper--positionSide": "side" === h,
        })
      : "";
  return t(o).createElement(
    wf,
    {
      ...e,
      ref: E,
      wrapperClassName: q,
      labelProps: C,
      descriptionProps: N,
      errorMessageProps: R,
      showErrorIcon: !1,
      includeNecessityIndicatorInAccessibilityName: !0,
      elementType: "span",
    },
    W
  );
});
const $g = (0, (o = l("acw62")).forwardRef)(function (e, n) {
  e = lt(e);
  let { elementType: r = "div", children: i, ...l } = e,
    { styleProps: a } = tt(e, Be),
    s = Oe(n);
  return t(o).createElement(
    r,
    { ...C(l), ...a, ref: s },
    t(o).createElement(at, null, i)
  );
});
(0, o.forwardRef)(function (e, n) {
  e = lt(e, "content");
  let { children: r, ...i } = e,
    { styleProps: l } = tt(i),
    a = Oe(n);
  return t(o).createElement(
    "section",
    { ...C(i), ...l, ref: a },
    t(o).createElement(at, null, r)
  );
});
(0, o.forwardRef)(function (e, n) {
  e = lt(e, "footer");
  let { children: r, ...i } = e,
    { styleProps: l } = tt(i),
    a = Oe(n);
  return t(o).createElement(
    "footer",
    { ...C(i), ...l, ref: a },
    t(o).createElement(at, null, r)
  );
});
(0, o.forwardRef)(function (e, n) {
  e = lt(e, "header");
  let { children: r, ...i } = e,
    { styleProps: l } = tt(i),
    a = Oe(n);
  return t(o).createElement(
    "header",
    { ...C(i), ...l, ref: a },
    t(o).createElement(at, null, r)
  );
});
var Hg;
Hg = function (e) {
  return qg.default.createElement(
    Qi,
    e,
    qg.default.createElement(
      "svg",
      { viewBox: "0 0 32 32", height: "32", width: "32" },
      qg.default.createElement("path", {
        fill: "var(--spectrum-global-color-gray-300)",
        d: "M3 29.5C1.6 29.5.5 28.4.5 27V5C.5 3.6 1.6 2.5 3 2.5h10.1c.5 0 1 .2 1.4.6l3.1 3.1c.2.2.4.3.7.3H29c1.4 0 2.5 1.1 2.5 2.5v18c0 1.4-1.1 2.5-2.5 2.5H3z",
      }),
      qg.default.createElement("path", {
        fill: "var(--spectrum-global-color-gray-500)",
        d: "M29 6H18.3c-.1 0-.2 0-.4-.2l-3.1-3.1c-.4-.4-1-.7-1.7-.7H3C1.3 2 0 3.3 0 5v22c0 1.6 1.3 3 3 3h26c1.7 0 3-1.4 3-3V9c0-1.7-1.3-3-3-3zm2 21c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V7h28c1.1 0 2 .9 2 2v18z",
      })
    )
  );
};
var Wg,
  qg = Br(l("acw62"));
Wg = function (e) {
  return Xg.default.createElement(
    qi,
    e,
    Xg.default.createElement(Gg.A4uCopy, null)
  );
};
var Gg = {};
Object.defineProperty(Gg, "__esModule", { value: !0 }),
  (Gg.A4uCopy = function (e) {
    var t = Yg({}, e);
    return Qg.default.createElement(
      "svg",
      Yg({ viewBox: "0 0 36 36" }, t, t),
      Qg.default.createElement("rect", {
        fillRule: "evenodd",
        height: "2",
        rx: "0.5",
        ry: "0.5",
        width: "2",
        x: "32",
        y: "22",
      }),
      Qg.default.createElement("rect", {
        fillRule: "evenodd",
        height: "2",
        rx: "0.5",
        ry: "0.5",
        width: "2",
        x: "32",
        y: "18",
      }),
      Qg.default.createElement("rect", {
        fillRule: "evenodd",
        height: "2",
        rx: "0.5",
        ry: "0.5",
        width: "2",
        x: "32",
        y: "14",
      }),
      Qg.default.createElement("rect", {
        fillRule: "evenodd",
        height: "2",
        rx: "0.5",
        ry: "0.5",
        width: "2",
        x: "32",
        y: "10",
      }),
      Qg.default.createElement("rect", {
        fillRule: "evenodd",
        height: "2",
        rx: "0.5",
        ry: "0.5",
        width: "2",
        x: "32",
        y: "6",
      }),
      Qg.default.createElement("rect", {
        fillRule: "evenodd",
        height: "2",
        rx: "0.5",
        ry: "0.5",
        width: "2",
        x: "32",
        y: "2",
      }),
      Qg.default.createElement("rect", {
        fillRule: "evenodd",
        height: "2",
        rx: "0.5",
        ry: "0.5",
        width: "2",
        x: "28",
        y: "2",
      }),
      Qg.default.createElement("rect", {
        fillRule: "evenodd",
        height: "2",
        rx: "0.5",
        ry: "0.5",
        width: "2",
        x: "24",
        y: "2",
      }),
      Qg.default.createElement("rect", {
        fillRule: "evenodd",
        height: "2",
        rx: "0.5",
        ry: "0.5",
        width: "2",
        x: "20",
        y: "2",
      }),
      Qg.default.createElement("rect", {
        fillRule: "evenodd",
        height: "2",
        rx: "0.5",
        ry: "0.5",
        width: "2",
        x: "16",
        y: "2",
      }),
      Qg.default.createElement("rect", {
        fillRule: "evenodd",
        height: "2",
        rx: "0.5",
        ry: "0.5",
        width: "2",
        x: "12",
        y: "2",
      }),
      Qg.default.createElement("rect", {
        fillRule: "evenodd",
        height: "2",
        rx: "0.5",
        ry: "0.5",
        width: "2",
        x: "12",
        y: "6",
      }),
      Qg.default.createElement("rect", {
        fillRule: "evenodd",
        height: "2",
        rx: "0.5",
        ry: "0.5",
        width: "2",
        x: "12",
        y: "10",
      }),
      Qg.default.createElement("rect", {
        fillRule: "evenodd",
        height: "2",
        rx: "0.5",
        ry: "0.5",
        width: "2",
        x: "12",
        y: "14",
      }),
      Qg.default.createElement("rect", {
        fillRule: "evenodd",
        height: "2",
        rx: "0.5",
        ry: "0.5",
        width: "2",
        x: "12",
        y: "18",
      }),
      Qg.default.createElement("rect", {
        fillRule: "evenodd",
        height: "2",
        rx: "0.5",
        ry: "0.5",
        width: "2",
        x: "12",
        y: "22",
      }),
      Qg.default.createElement("rect", {
        fillRule: "evenodd",
        height: "2",
        rx: "0.5",
        ry: "0.5",
        width: "2",
        x: "16",
        y: "22",
      }),
      Qg.default.createElement("rect", {
        fillRule: "evenodd",
        height: "2",
        rx: "0.5",
        ry: "0.5",
        width: "2",
        x: "20",
        y: "22",
      }),
      Qg.default.createElement("rect", {
        fillRule: "evenodd",
        height: "2",
        rx: "0.5",
        ry: "0.5",
        width: "2",
        x: "24",
        y: "22",
      }),
      Qg.default.createElement("rect", {
        fillRule: "evenodd",
        height: "2",
        rx: "0.5",
        ry: "0.5",
        width: "2",
        x: "28",
        y: "22",
      }),
      Qg.default.createElement("path", {
        fillRule: "evenodd",
        d: "M10,12H3a1,1,0,0,0-1,1V33a1,1,0,0,0,1,1H23a1,1,0,0,0,1-1V26H11a1,1,0,0,1-1-1Z",
      })
    );
  });
var Qg = (function (e) {
  return e && e.__esModule ? e : { default: e };
})(l("acw62"));
function Yg() {
  return (
    (Yg =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Yg.apply(this, arguments)
  );
}
var Xg = Br(l("acw62"));
var Zg = (e) => {
  const { blocks: n, getPath: r, getItems: i, rootCategoryKey: l } = e,
    [a, s] = (0, o.useState)({
      items: {},
      folder: l,
      path: [],
      loadingState: "loading",
      block: null,
      disabledKeys: new Set(),
      selectedItems: new Set(),
    }),
    u = (e) => {
      s((t) => ({ ...t, items: {}, folder: e, loadingState: "loading" }));
    },
    c = (e) => {
      if (!a.block) return;
      let t = null;
      t = e instanceof Set ? [...e].map((e) => a.items[e]) : a.items[e];
      const r = n[a.block].output(t);
      navigator.clipboard.write([
        new ClipboardItem({
          "text/plain": new Blob([r], { type: "text/plain" }),
          "text/html": new Blob([r], { type: "text/html" }),
        }),
      ]);
    },
    d = (e, t) => {
      const n = new Set();
      return (
        "item" === e.type && "multiple" === e.selection
          ? Object.values(t)
              .filter((e) => e.isFolder)
              .forEach((e) => n.add(e.uid))
          : "folder" === e.type &&
            "multiple" === e.selection &&
            Object.values(t)
              .filter((e) => !e.isFolder)
              .forEach((e) => n.add(e.sku)),
        n
      );
    };
  (0, o.useEffect)(() => {
    (async () => {
      let e = await i(a.folder),
        t = await r(a.folder, l);
      s((r) => {
        const i = r.block ? n[r.block] : {},
          l = d(i, e);
        return {
          ...r,
          items: e,
          path: t,
          disabledKeys: l,
          loadingState: "idle",
        };
      });
    })();
  }, [a.folder]);
  const p = n[a.block] || {};
  return t(o).createElement(
    zr,
    { theme: $u, height: "100%" },
    t(o).createElement(
      as,
      { direction: "column", height: "100%" },
      t(o).createElement(
        $g,
        { padding: "size-100" },
        t(o).createElement(
          as,
          { direction: "row", gap: "size-100" },
          t(o).createElement(
            jg,
            {
              width: "100%",
              items: Object.values(n),
              "aria-label": "Select a block",
              placeholder: "Select a block",
              selectedKey: a.block,
              onSelectionChange: (e) => {
                s((t) => {
                  const r = n[e],
                    i = d(r, t.items);
                  return {
                    ...t,
                    items: structuredClone(t.items),
                    block: e,
                    disabledKeys: i,
                    selectedItems: new Set(),
                  };
                });
              },
            },
            (e) => t(o).createElement(ga, { key: e.key }, e.name)
          ),
          "multiple" === p.selection &&
            t(o).createElement(
              zl,
              {
                isDisabled: 0 === a.selectedItems.size,
                "aria-label": "Copy",
                onPress: () => c(a.selectedItems),
              },
              t(o).createElement(Wg, null)
            )
        )
      ),
      t(o).createElement(
        Pu,
        { onAction: u },
        a.path.map((e) => t(o).createElement(ga, { key: e.key }, e.name))
      ),
      t(o).createElement(
        Th,
        {
          "aria-label": "List of Items",
          items: Object.values(a.items),
          loadingState: a.loadingState,
          width: "100%",
          height: "100%",
          density: "spacious",
          selectionMode: "multiple" === p.selection ? "multiple" : "none",
          onAction: (e) => {
            a.items[e].isFolder && u(e);
          },
          selectedKeys: a.selectedItems,
          onSelectionChange: (e) => {
            s((t) => ({ ...t, selectedItems: e }));
          },
          disabledKeys: a.disabledKeys,
        },
        (e) =>
          e.isFolder
            ? t(o).createElement(
                ga,
                { key: e.key, textValue: e.name, hasChildItems: !0 },
                t(o).createElement(Hg, null),
                t(o).createElement(Ln, null, e.name),
                e.childCount > 0 &&
                  t(o).createElement(
                    Ln,
                    { slot: "description" },
                    e.childCount,
                    " items"
                  ),
                "single" === p.selection &&
                  ("any" === p.type || "folder" === p.type) &&
                  t(o).createElement(
                    zl,
                    { "aria-label": "Copy", onPress: () => c(e.key) },
                    t(o).createElement(Wg, null)
                  )
              )
            : t(o).createElement(
                ga,
                { key: e.key, textValue: e.name },
                e.thumbnail &&
                  t(o).createElement(Zu, {
                    src: e.thumbnail.url,
                    alt: e.thumbnail.label,
                  }),
                t(o).createElement(Ln, null, e.name),
                "single" === p.selection &&
                  ("any" === p.type || "item" === p.type) &&
                  t(o).createElement(
                    zl,
                    { "aria-label": "Copy", onPress: () => c(e.key) },
                    t(o).createElement(Wg, null)
                  )
              )
      )
    )
  );
};
var Jg =
  "query getCategory($uid: String!) {\n    categories(filters: { category_uid: { eq: $uid } }) {\n        items {\n            name\n            uid\n            id\n            breadcrumbs {\n                category_name\n                category_uid\n            }\n        }\n    }\n}".replaceAll(
    /(?:\r\n|\r|\n|\t|[\s]{4})/g,
    " "
  );
var ey =
  "query getCategoriesInCategory($uid: String!) {\n    categories(\n        filters: { parent_category_uid: { eq: $uid } }\n        pageSize: 20\n        currentPage: 1\n    ) {\n        items {\n            uid\n            id\n            name\n            product_count\n            children_count\n          __typename\n        }\n        page_info {\n            current_page\n            page_size\n            total_pages\n        }\n        total_count\n    }\n}".replaceAll(
    /(?:\r\n|\r|\n|\t|[\s]{4})/g,
    " "
  );
var ty =
  "query getProductsInCategory($uid: String!) {\n    products(\n        filter: { category_uid: { eq: $uid } }\n        pageSize: 20\n        currentPage: 1\n    ) {\n        items {\n            name\n            sku\n            thumbnail {\n                url\n                label\n            }\n            ... on ConfigurableProduct {\n                variants {\n                    product {\n                        thumbnail {\n                            url\n                            label\n                        }\n                    }\n                }\n            }\n            url_key\n            __typename\n        }\n        page_info {\n            current_page\n            page_size\n            total_pages\n        }\n        total_count\n    }\n}".replaceAll(
    /(?:\r\n|\r|\n|\t|[\s]{4})/g,
    " "
  );
const ny = "https://franklin.maidenform.com/graphql",
  ry = "maidenform_store_view",
  iy = async (e, t, n, r) => {
    const i = new URL(e);
    return (
      i.searchParams.append("query", n),
      i.searchParams.append("variables", JSON.stringify(r)),
      await fetch(i, {
        method: "GET",
        headers: { "Content-Type": "application/json", Store: t },
      }).then((e) => e.json())
    );
  },
  ly = document.getElementById("app");
ly &&
  a.render(
    t(o).createElement(Zg, {
      blocks: {
        identifier: {
          key: "identifier",
          name: "Identifier only",
          output: (e) => (e.isFolder ? e.id : e.url_key),
          selection: "single",
          type: "any",
        },
        "product-list-page": {
          key: "product-list-page",
          name: "Product List Page",
          output: (e) =>
            `<table width="100%" style="border: 1px solid black;">\n    <tr>\n        <th colspan="2" style="border: 1px solid black; background: lightgray;">Product List Page</th>\n    </tr>\n    <tr>\n        <td style="border: 1px solid black">category</td>\n        <td style="border: 1px solid black">${e.id}</td>\n    </tr>\n</table>`,
          selection: "single",
          type: "folder",
        },
      },
      getPath: async (e, t) => {
        const n = [{ key: t, name: "Root Category" }];
        if (e === t) return n;
        let r;
        try {
          r = await iy(ny, ry, Jg, { uid: e });
        } catch (e) {
          return console.error("Could not retrieve current category", e), [];
        }
        const i = r.data?.categories?.items?.[0];
        return (
          (i?.breadcrumbs || []).forEach((e) => {
            n.push({ key: e.category_uid, name: e.category_name });
          }),
          n.push({ key: i.uid, name: i.name }),
          n
        );
      },
      getItems: async (e) => {
        let t = {};
        try {
          (await iy(ny, ry, ey, { uid: e }))?.data?.categories?.items.forEach(
            (e) => {
              t[e.uid] = {
                ...e,
                isFolder: !0,
                key: e.uid,
                childCount:
                  parseInt(e.children_count) + parseInt(e.product_count),
              };
            }
          );
        } catch (e) {
          console.error("Could not retrieve categories", e);
        }
        try {
          (await iy(ny, ry, ty, { uid: e }))?.data?.products?.items.forEach(
            (e) => {
              let n;
              try {
                n =
                  "ConfigurableProduct" === e.__typename
                    ? e?.variants?.[0].product.thumbnail
                    : e.thumbnail;
                const t = new URL(n.url);
                t.searchParams.set("width", 40),
                  t.searchParams.set("height", 40),
                  (n.url = t.toString());
              } catch {}
              t[e.sku] = { ...e, thumbnail: n, isFolder: !1, key: e.sku };
            }
          );
        } catch (e) {
          console.error("Could not retrieve products", e);
        }
        return t;
      },
      rootCategoryKey: "MTI4OQ==",
    }),
    ly
  );
//# sourceMappingURL=index.fce879da.js.map
