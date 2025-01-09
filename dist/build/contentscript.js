var contentscript;contentscript =
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@aurelia/kernel/dist/esm/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@aurelia/kernel/dist/esm/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Metadata": () => /* reexport safe */ _aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.Metadata,
/* harmony export */   "applyMetadataPolyfill": () => /* reexport safe */ _aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.applyMetadataPolyfill,
/* harmony export */   "isNullOrUndefined": () => /* reexport safe */ _aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndefined,
/* harmony export */   "isObject": () => /* reexport safe */ _aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.isObject,
/* harmony export */   "metadata": () => /* reexport safe */ _aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata,
/* harmony export */   "Platform": () => /* reexport safe */ _aurelia_platform__WEBPACK_IMPORTED_MODULE_1__.Platform,
/* harmony export */   "Task": () => /* reexport safe */ _aurelia_platform__WEBPACK_IMPORTED_MODULE_1__.Task,
/* harmony export */   "TaskAbortError": () => /* reexport safe */ _aurelia_platform__WEBPACK_IMPORTED_MODULE_1__.TaskAbortError,
/* harmony export */   "TaskQueue": () => /* reexport safe */ _aurelia_platform__WEBPACK_IMPORTED_MODULE_1__.TaskQueue,
/* harmony export */   "TaskQueuePriority": () => /* reexport safe */ _aurelia_platform__WEBPACK_IMPORTED_MODULE_1__.TaskQueuePriority,
/* harmony export */   "TaskStatus": () => /* reexport safe */ _aurelia_platform__WEBPACK_IMPORTED_MODULE_1__.TaskStatus,
/* harmony export */   "AnalyzedModule": () => /* binding */ AnalyzedModule,
/* harmony export */   "ColorOptions": () => /* binding */ Lt,
/* harmony export */   "ConsoleSink": () => /* binding */ Ht,
/* harmony export */   "ContainerConfiguration": () => /* binding */ ContainerConfiguration,
/* harmony export */   "DI": () => /* binding */ G,
/* harmony export */   "DefaultLogEvent": () => /* binding */ DefaultLogEvent,
/* harmony export */   "DefaultLogEventFactory": () => /* binding */ _t,
/* harmony export */   "DefaultLogger": () => /* binding */ Vt,
/* harmony export */   "DefaultResolver": () => /* binding */ z,
/* harmony export */   "EventAggregator": () => /* binding */ EventAggregator,
/* harmony export */   "IContainer": () => /* binding */ H,
/* harmony export */   "IEventAggregator": () => /* binding */ Yt,
/* harmony export */   "ILogConfig": () => /* binding */ Pt,
/* harmony export */   "ILogEventFactory": () => /* binding */ St,
/* harmony export */   "ILogger": () => /* binding */ Nt,
/* harmony export */   "IModuleLoader": () => /* binding */ Jt,
/* harmony export */   "IPlatform": () => /* binding */ Mt,
/* harmony export */   "IServiceLocator": () => /* binding */ V,
/* harmony export */   "ISink": () => /* binding */ Dt,
/* harmony export */   "InstanceProvider": () => /* binding */ InstanceProvider,
/* harmony export */   "LogConfig": () => /* binding */ LogConfig,
/* harmony export */   "LogLevel": () => /* binding */ Ut,
/* harmony export */   "LoggerConfiguration": () => /* binding */ qt,
/* harmony export */   "ModuleItem": () => /* binding */ ModuleItem,
/* harmony export */   "Protocol": () => /* binding */ S,
/* harmony export */   "Registration": () => /* binding */ $t,
/* harmony export */   "all": () => /* binding */ nt,
/* harmony export */   "bound": () => /* binding */ m,
/* harmony export */   "camelCase": () => /* binding */ l,
/* harmony export */   "compareNumber": () => /* binding */ w,
/* harmony export */   "emptyArray": () => /* binding */ Ot,
/* harmony export */   "emptyObject": () => /* binding */ kt,
/* harmony export */   "factory": () => /* binding */ ot,
/* harmony export */   "firstDefined": () => /* binding */ R,
/* harmony export */   "format": () => /* binding */ xt,
/* harmony export */   "fromAnnotationOrDefinitionOrTypeOrDefault": () => /* binding */ W,
/* harmony export */   "fromAnnotationOrTypeOrDefault": () => /* binding */ B,
/* harmony export */   "fromDefinitionOrDefault": () => /* binding */ Q,
/* harmony export */   "getPrototypeChain": () => /* binding */ b,
/* harmony export */   "ignore": () => /* binding */ st,
/* harmony export */   "inject": () => /* binding */ J,
/* harmony export */   "isArrayIndex": () => /* binding */ i,
/* harmony export */   "isNativeFunction": () => /* binding */ $,
/* harmony export */   "isNumberOrBigInt": () => /* binding */ s,
/* harmony export */   "isStringOrDate": () => /* binding */ o,
/* harmony export */   "kebabCase": () => /* binding */ f,
/* harmony export */   "lazy": () => /* binding */ rt,
/* harmony export */   "mergeArrays": () => /* binding */ p,
/* harmony export */   "mergeDistinct": () => /* binding */ g,
/* harmony export */   "mergeObjects": () => /* binding */ y,
/* harmony export */   "newInstanceForScope": () => /* binding */ ut,
/* harmony export */   "newInstanceOf": () => /* binding */ lt,
/* harmony export */   "nextId": () => /* binding */ d,
/* harmony export */   "noop": () => /* binding */ It,
/* harmony export */   "onResolve": () => /* binding */ E,
/* harmony export */   "optional": () => /* binding */ it,
/* harmony export */   "pascalCase": () => /* binding */ c,
/* harmony export */   "resetId": () => /* binding */ v,
/* harmony export */   "resolveAll": () => /* binding */ A,
/* harmony export */   "singleton": () => /* binding */ tt,
/* harmony export */   "sink": () => /* binding */ Qt,
/* harmony export */   "toArray": () => /* binding */ a,
/* harmony export */   "transient": () => /* binding */ Y
/* harmony export */ });
/* harmony import */ var _aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aurelia/metadata */ "./node_modules/@aurelia/metadata/dist/esm/index.js");
/* harmony import */ var _aurelia_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aurelia/platform */ "./node_modules/@aurelia/platform/dist/esm/index.js");






const r = {};

function i(t) {
    switch (typeof t) {
      case "number":
        return t >= 0 && (0 | t) === t;

      case "string":
        {
            const e = r[t];
            if (void 0 !== e) return e;
            const n = t.length;
            if (0 === n) return r[t] = false;
            let i = 0;
            let s = 0;
            for (;s < n; ++s) {
                i = t.charCodeAt(s);
                if (0 === s && 48 === i && n > 1 || i < 48 || i > 57) return r[t] = false;
            }
            return r[t] = true;
        }

      default:
        return false;
    }
}

function s(t) {
    switch (typeof t) {
      case "number":
      case "bigint":
        return true;

      default:
        return false;
    }
}

function o(t) {
    switch (typeof t) {
      case "string":
        return true;

      case "object":
        return t instanceof Date;

      default:
        return false;
    }
}

const u = function() {
    let t;
    (function(t) {
        t[t["none"] = 0] = "none";
        t[t["digit"] = 1] = "digit";
        t[t["upper"] = 2] = "upper";
        t[t["lower"] = 3] = "lower";
    })(t || (t = {}));
    const e = Object.assign(Object.create(null), {
        0: true,
        1: true,
        2: true,
        3: true,
        4: true,
        5: true,
        6: true,
        7: true,
        8: true,
        9: true
    });
    function n(t) {
        if ("" === t) return 0;
        if (t !== t.toUpperCase()) return 3;
        if (t !== t.toLowerCase()) return 2;
        if (true === e[t]) return 1;
        return 0;
    }
    return function(t, e) {
        const r = t.length;
        if (0 === r) return t;
        let i = false;
        let s = "";
        let o;
        let u = "";
        let l = 0;
        let c = t.charAt(0);
        let f = n(c);
        let a = 0;
        for (;a < r; ++a) {
            o = l;
            u = c;
            l = f;
            c = t.charAt(a + 1);
            f = n(c);
            if (0 === l) {
                if (s.length > 0) i = true;
            } else {
                if (!i && s.length > 0 && 2 === l) i = 3 === o || 3 === f;
                s += e(u, i);
                i = false;
            }
        }
        return s;
    };
}();

const l = function() {
    const t = Object.create(null);
    function e(t, e) {
        return e ? t.toUpperCase() : t.toLowerCase();
    }
    return function(n) {
        let r = t[n];
        if (void 0 === r) r = t[n] = u(n, e);
        return r;
    };
}();

const c = function() {
    const t = Object.create(null);
    return function(e) {
        let n = t[e];
        if (void 0 === n) {
            n = l(e);
            if (n.length > 0) n = n[0].toUpperCase() + n.slice(1);
            t[e] = n;
        }
        return n;
    };
}();

const f = function() {
    const t = Object.create(null);
    function e(t, e) {
        return e ? `-${t.toLowerCase()}` : t.toLowerCase();
    }
    return function(n) {
        let r = t[n];
        if (void 0 === r) r = t[n] = u(n, e);
        return r;
    };
}();

function a(t) {
    const {length: e} = t;
    const n = Array(e);
    let r = 0;
    for (;r < e; ++r) n[r] = t[r];
    return n;
}

const h = {};

function d(t) {
    if (void 0 === h[t]) h[t] = 0;
    return ++h[t];
}

function v(t) {
    h[t] = 0;
}

function w(t, e) {
    return t - e;
}

function g(t, e, n) {
    if (void 0 === t || null === t || t === Ot) if (void 0 === e || null === e || e === Ot) return Ot; else return n ? e.slice(0) : e; else if (void 0 === e || null === e || e === Ot) return n ? t.slice(0) : t;
    const r = {};
    const i = n ? t.slice(0) : t;
    let s = t.length;
    let o = e.length;
    while (s-- > 0) r[t[s]] = true;
    let u;
    while (o-- > 0) {
        u = e[o];
        if (void 0 === r[u]) {
            i.push(u);
            r[u] = true;
        }
    }
    return i;
}

function m(t, e, n) {
    return {
        configurable: true,
        enumerable: n.enumerable,
        get() {
            const t = n.value.bind(this);
            Reflect.defineProperty(this, e, {
                value: t,
                writable: true,
                configurable: true,
                enumerable: n.enumerable
            });
            return t;
        }
    };
}

function p(...t) {
    const e = [];
    let n = 0;
    const r = t.length;
    let i = 0;
    let s;
    let o = 0;
    for (;o < r; ++o) {
        s = t[o];
        if (void 0 !== s) {
            i = s.length;
            let t = 0;
            for (;t < i; ++t) e[n++] = s[t];
        }
    }
    return e;
}

function y(...t) {
    const e = {};
    const n = t.length;
    let r;
    let i;
    let s = 0;
    for (;n > s; ++s) {
        r = t[s];
        if (void 0 !== r) for (i in r) e[i] = r[i];
    }
    return e;
}

function R(...t) {
    const e = t.length;
    let n;
    let r = 0;
    for (;e > r; ++r) {
        n = t[r];
        if (void 0 !== n) return n;
    }
    throw new Error(`No default value found`);
}

const b = function() {
    const t = Function.prototype;
    const e = Object.getPrototypeOf;
    const n = new WeakMap;
    let r = t;
    let i = 0;
    let s;
    return function(o) {
        s = n.get(o);
        if (void 0 === s) {
            n.set(o, s = [ r = o ]);
            i = 0;
            while ((r = e(r)) !== t) s[++i] = r;
        }
        return s;
    };
}();

function C(...t) {
    return Object.assign(Object.create(null), ...t);
}

const $ = function() {
    const t = new WeakMap;
    let e = false;
    let n = "";
    let r = 0;
    return function(i) {
        e = t.get(i);
        if (void 0 === e) {
            n = i.toString();
            r = n.length;
            e = r >= 29 && r <= 100 && 125 === n.charCodeAt(r - 1) && n.charCodeAt(r - 2) <= 32 && 93 === n.charCodeAt(r - 3) && 101 === n.charCodeAt(r - 4) && 100 === n.charCodeAt(r - 5) && 111 === n.charCodeAt(r - 6) && 99 === n.charCodeAt(r - 7) && 32 === n.charCodeAt(r - 8) && 101 === n.charCodeAt(r - 9) && 118 === n.charCodeAt(r - 10) && 105 === n.charCodeAt(r - 11) && 116 === n.charCodeAt(r - 12) && 97 === n.charCodeAt(r - 13) && 110 === n.charCodeAt(r - 14) && 88 === n.charCodeAt(r - 15);
            t.set(i, e);
        }
        return e;
    };
}();

function E(t, e) {
    if (t instanceof Promise) return t.then(e);
    return e(t);
}

function A(...t) {
    let e;
    let n;
    let r;
    let i = 0;
    let s = t.length;
    for (;i < s; ++i) {
        e = t[i];
        if ((e = t[i]) instanceof Promise) if (void 0 === n) n = e; else if (void 0 === r) r = [ n, e ]; else r.push(e);
    }
    if (void 0 === r) return n;
    return Promise.all(r);
}

const j = _aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.Metadata.getOwn;

const O = _aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.Metadata.hasOwn;

const k = _aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.Metadata.define;

const I = t => "function" === typeof t;

const M = t => "string" === typeof t;

const T = "au:annotation";

const F = (t, e) => {
    if (void 0 === e) return `${T}:${t}`;
    return `${T}:${t}:${e}`;
};

const U = (t, e) => {
    const n = j(T, t);
    if (void 0 === n) k(T, [ e ], t); else n.push(e);
};

const L = Object.freeze({
    name: "au:annotation",
    appendTo: U,
    set(t, e, n) {
        k(F(e), n, t);
    },
    get: (t, e) => j(F(e), t),
    getKeys(t) {
        let e = j(T, t);
        if (void 0 === e) k(T, e = [], t);
        return e;
    },
    isKey: t => t.startsWith(T),
    keyFor: F
});

const P = "au:resource";

const D = Object.freeze({
    name: P,
    appendTo(t, e) {
        const n = j(P, t);
        if (void 0 === n) k(P, [ e ], t); else n.push(e);
    },
    has: t => O(P, t),
    getAll(t) {
        const e = j(P, t);
        if (void 0 === e) return Ot; else return e.map((e => j(e, t)));
    },
    getKeys(t) {
        let e = j(P, t);
        if (void 0 === e) k(P, e = [], t);
        return e;
    },
    isKey: t => t.startsWith(P),
    keyFor(t, e) {
        if (void 0 === e) return `${P}:${t}`;
        return `${P}:${t}:${e}`;
    }
});

const S = {
    annotation: L,
    resource: D
};

const N = Object.prototype.hasOwnProperty;

function W(t, e, n, r) {
    let i = j(F(t), n);
    if (void 0 === i) {
        i = e[t];
        if (void 0 === i) {
            i = n[t];
            if (void 0 === i || !N.call(n, t)) return r();
            return i;
        }
        return i;
    }
    return i;
}

function B(t, e, n) {
    let r = j(F(t), e);
    if (void 0 === r) {
        r = e[t];
        if (void 0 === r || !N.call(e, t)) return n();
        return r;
    }
    return r;
}

function Q(t, e, n) {
    const r = e[t];
    if (void 0 === r) return n();
    return r;
}

(0,_aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.applyMetadataPolyfill)(Reflect, false, false);

class ResolverBuilder {
    constructor(t, e) {
        this.container = t;
        this.key = e;
    }
    instance(t) {
        return this.registerResolver(0, t);
    }
    singleton(t) {
        return this.registerResolver(1, t);
    }
    transient(t) {
        return this.registerResolver(2, t);
    }
    callback(t) {
        return this.registerResolver(3, t);
    }
    cachedCallback(t) {
        return this.registerResolver(3, Ct(t));
    }
    aliasTo(t) {
        return this.registerResolver(5, t);
    }
    registerResolver(t, e) {
        const {container: n, key: r} = this;
        this.container = this.key = void 0;
        return n.registerResolver(r, new Resolver(r, t, e));
    }
}

function x(t) {
    const e = t.slice();
    const n = Object.keys(t);
    const r = n.length;
    let s;
    for (let o = 0; o < r; ++o) {
        s = n[o];
        if (!i(s)) e[s] = t[s];
    }
    return e;
}

const z = {
    none(t) {
        throw Error(`AUR0002:${t.toString()}`);
    },
    singleton(t) {
        return new Resolver(t, 1, t);
    },
    transient(t) {
        return new Resolver(t, 2, t);
    }
};

class ContainerConfiguration {
    constructor(t, e) {
        this.inheritParentResources = t;
        this.defaultResolver = e;
    }
    static from(t) {
        var e, n;
        if (void 0 === t || t === ContainerConfiguration.DEFAULT) return ContainerConfiguration.DEFAULT;
        return new ContainerConfiguration(null !== (e = t.inheritParentResources) && void 0 !== e ? e : false, null !== (n = t.defaultResolver) && void 0 !== n ? n : z.singleton);
    }
}

ContainerConfiguration.DEFAULT = ContainerConfiguration.from({});

const G = {
    createContainer(t) {
        return new Container(null, ContainerConfiguration.from(t));
    },
    getDesignParamtypes(t) {
        return j("design:paramtypes", t);
    },
    getAnnotationParamtypes(t) {
        const e = F("di:paramtypes");
        return j(e, t);
    },
    getOrCreateAnnotationParamTypes: _,
    getDependencies: K,
    createInterface(t, e) {
        const n = I(t) ? t : e;
        const r = M(t) ? t : void 0;
        const i = function(t, e, n) {
            if (null == t || void 0 !== new.target) throw new Error(`AUR0001:${i.friendlyName}`);
            const r = _(t);
            r[n] = i;
        };
        i.$isInterface = true;
        i.friendlyName = null == r ? "(anonymous)" : r;
        if (null != n) i.register = function(t, e) {
            return n(new ResolverBuilder(t, null !== e && void 0 !== e ? e : i));
        };
        i.toString = function t() {
            return `InterfaceSymbol<${i.friendlyName}>`;
        };
        return i;
    },
    inject(...t) {
        return function(e, n, r) {
            if ("number" === typeof r) {
                const n = _(e);
                const i = t[0];
                if (void 0 !== i) n[r] = i;
            } else if (n) {
                const r = _(e.constructor);
                const i = t[0];
                if (void 0 !== i) r[n] = i;
            } else if (r) {
                const e = r.value;
                const n = _(e);
                let i;
                for (let e = 0; e < t.length; ++e) {
                    i = t[e];
                    if (void 0 !== i) n[e] = i;
                }
            } else {
                const n = _(e);
                let r;
                for (let e = 0; e < t.length; ++e) {
                    r = t[e];
                    if (void 0 !== r) n[e] = r;
                }
            }
        };
    },
    transient(t) {
        t.register = function e(n) {
            const r = $t.transient(t, t);
            return r.register(n, t);
        };
        t.registerInRequestor = false;
        return t;
    },
    singleton(t, e = Z) {
        t.register = function e(n) {
            const r = $t.singleton(t, t);
            return r.register(n, t);
        };
        t.registerInRequestor = e.scoped;
        return t;
    }
};

function K(t) {
    const e = F("di:dependencies");
    let n = j(e, t);
    if (void 0 === n) {
        const r = t.inject;
        if (void 0 === r) {
            const e = G.getDesignParamtypes(t);
            const r = G.getAnnotationParamtypes(t);
            if (void 0 === e) if (void 0 === r) {
                const e = Object.getPrototypeOf(t);
                if (I(e) && e !== Function.prototype) n = x(K(e)); else n = [];
            } else n = x(r); else if (void 0 === r) n = x(e); else {
                n = x(e);
                let t = r.length;
                let s;
                let o = 0;
                for (;o < t; ++o) {
                    s = r[o];
                    if (void 0 !== s) n[o] = s;
                }
                const u = Object.keys(r);
                let l;
                o = 0;
                t = u.length;
                for (o = 0; o < t; ++o) {
                    l = u[o];
                    if (!i(l)) n[l] = r[l];
                }
            }
        } else n = x(r);
        k(e, n, t);
        U(t, e);
    }
    return n;
}

function _(t) {
    const e = F("di:paramtypes");
    let n = j(e, t);
    if (void 0 === n) {
        k(e, n = [], t);
        U(t, e);
    }
    return n;
}

const H = G.createInterface("IContainer");

const V = H;

function q(t) {
    return function(e) {
        const n = function(t, e, r) {
            G.inject(n)(t, e, r);
        };
        n.$isResolver = true;
        n.resolve = function(n, r) {
            return t(e, n, r);
        };
        return n;
    };
}

const J = G.inject;

function X(t) {
    return G.transient(t);
}

function Y(t) {
    return null == t ? X : X(t);
}

const Z = {
    scoped: false
};

function tt(t) {
    if (I(t)) return G.singleton(t);
    return function(e) {
        return G.singleton(e, t);
    };
}

function et(t) {
    return function(e, n) {
        n = !!n;
        const r = function(t, e, n) {
            G.inject(r)(t, e, n);
        };
        r.$isResolver = true;
        r.resolve = function(r, i) {
            return t(e, r, i, n);
        };
        return r;
    };
}

const nt = et(((t, e, n, r) => n.getAll(t, r)));

const rt = q(((t, e, n) => () => n.get(t)));

const it = q(((t, e, n) => {
    if (n.has(t, true)) return n.get(t); else return;
}));

function st(t, e, n) {
    G.inject(st)(t, e, n);
}

st.$isResolver = true;

st.resolve = () => {};

const ot = q(((t, e, n) => (...r) => e.getFactory(t).construct(n, r)));

const ut = q(((t, e, n) => {
    const r = ct(t, e, n);
    const i = new InstanceProvider(String(t), r);
    n.registerResolver(t, i, true);
    return r;
}));

const lt = q(((t, e, n) => ct(t, e, n)));

function ct(t, e, n) {
    return e.getFactory(t).construct(n);
}

var ft;

(function(t) {
    t[t["instance"] = 0] = "instance";
    t[t["singleton"] = 1] = "singleton";
    t[t["transient"] = 2] = "transient";
    t[t["callback"] = 3] = "callback";
    t[t["array"] = 4] = "array";
    t[t["alias"] = 5] = "alias";
})(ft || (ft = {}));

class Resolver {
    constructor(t, e, n) {
        this.key = t;
        this.strategy = e;
        this.state = n;
        this.resolving = false;
    }
    get $isResolver() {
        return true;
    }
    register(t, e) {
        return t.registerResolver(e || this.key, this);
    }
    resolve(t, e) {
        switch (this.strategy) {
          case 0:
            return this.state;

          case 1:
            if (this.resolving) throw new Error(`AUR0003:${this.state.name}`);
            this.resolving = true;
            this.state = t.getFactory(this.state).construct(e);
            this.strategy = 0;
            this.resolving = false;
            return this.state;

          case 2:
            {
                const n = t.getFactory(this.state);
                if (null === n) throw new Error(`AUR0004:${String(this.key)}`);
                return n.construct(e);
            }

          case 3:
            return this.state(t, e, this);

          case 4:
            return this.state[0].resolve(t, e);

          case 5:
            return e.get(this.state);

          default:
            throw new Error(`AUR0005:${this.strategy}`);
        }
    }
    getFactory(t) {
        var e, n, r;
        switch (this.strategy) {
          case 1:
          case 2:
            return t.getFactory(this.state);

          case 5:
            return null !== (r = null === (n = null === (e = t.getResolver(this.state)) || void 0 === e ? void 0 : e.getFactory) || void 0 === n ? void 0 : n.call(e, t)) && void 0 !== r ? r : null;

          default:
            return null;
        }
    }
}

function at(t) {
    return this.get(t);
}

function ht(t, e) {
    return e(t);
}

class Factory {
    constructor(t, e) {
        this.Type = t;
        this.dependencies = e;
        this.transformers = null;
    }
    construct(t, e) {
        let n;
        if (void 0 === e) n = new this.Type(...this.dependencies.map(at, t)); else n = new this.Type(...this.dependencies.map(at, t), ...e);
        if (null == this.transformers) return n;
        return this.transformers.reduce(ht, n);
    }
    registerTransformer(t) {
        var e;
        (null !== (e = this.transformers) && void 0 !== e ? e : this.transformers = []).push(t);
    }
}

const dt = {
    $isResolver: true,
    resolve(t, e) {
        return e;
    }
};

function vt(t) {
    return I(t.register);
}

function wt(t) {
    return vt(t) && "boolean" === typeof t.registerInRequestor;
}

function gt(t) {
    return wt(t) && t.registerInRequestor;
}

function mt(t) {
    return void 0 !== t.prototype;
}

function pt(t) {
    return M(t) && t.indexOf(":") > 0;
}

const yt = new Set([ "Array", "ArrayBuffer", "Boolean", "DataView", "Date", "Error", "EvalError", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Number", "Object", "Promise", "RangeError", "ReferenceError", "RegExp", "Set", "SharedArrayBuffer", "String", "SyntaxError", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "URIError", "WeakMap", "WeakSet" ]);

let Rt = 0;

class Container {
    constructor(t, e) {
        this.parent = t;
        this.config = e;
        this.id = ++Rt;
        this.t = 0;
        this.i = new Map;
        if (null === t) {
            this.root = this;
            this.u = new Map;
            this.h = new Map;
            this.res = Object.create(null);
        } else {
            this.root = t.root;
            this.u = new Map;
            this.h = t.h;
            if (e.inheritParentResources) this.res = Object.assign(Object.create(null), t.res, this.root.res); else this.res = Object.create(null);
        }
        this.u.set(H, dt);
    }
    get depth() {
        return null === this.parent ? 0 : this.parent.depth + 1;
    }
    register(...t) {
        if (100 === ++this.t) throw new Error(`AUR0006:${t.map(String)}`);
        let e;
        let r;
        let i;
        let s;
        let o;
        let u = 0;
        let l = t.length;
        for (;u < l; ++u) {
            e = t[u];
            if (!(0,_aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.isObject)(e)) continue;
            if (vt(e)) e.register(this); else if (S.resource.has(e)) {
                const t = S.resource.getAll(e);
                if (1 === t.length) t[0].register(this); else {
                    s = 0;
                    o = t.length;
                    while (o > s) {
                        t[s].register(this);
                        ++s;
                    }
                }
            } else if (mt(e)) $t.singleton(e, e).register(this); else {
                r = Object.keys(e);
                s = 0;
                o = r.length;
                for (;s < o; ++s) {
                    i = e[r[s]];
                    if (!(0,_aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.isObject)(i)) continue;
                    if (vt(i)) i.register(this); else this.register(i);
                }
            }
        }
        --this.t;
        return this;
    }
    registerResolver(t, e, n = false) {
        Et(t);
        const r = this.u;
        const i = r.get(t);
        if (null == i) {
            r.set(t, e);
            if (pt(t)) {
                if (void 0 !== this.res[t]) throw new Error(`AUR0007:${t}`);
                this.res[t] = e;
            }
        } else if (i instanceof Resolver && 4 === i.strategy) i.state.push(e); else r.set(t, new Resolver(t, 4, [ i, e ]));
        if (n) this.i.set(t, e);
        return e;
    }
    registerTransformer(t, e) {
        const n = this.getResolver(t);
        if (null == n) return false;
        if (n.getFactory) {
            const t = n.getFactory(this);
            if (null == t) return false;
            t.registerTransformer(e);
            return true;
        }
        return false;
    }
    getResolver(t, e = true) {
        Et(t);
        if (void 0 !== t.resolve) return t;
        let n = this;
        let r;
        while (null != n) {
            r = n.u.get(t);
            if (null == r) {
                if (null == n.parent) {
                    const r = gt(t) ? this : n;
                    return e ? this.R(t, r) : null;
                }
                n = n.parent;
            } else return r;
        }
        return null;
    }
    has(t, e = false) {
        return this.u.has(t) ? true : e && null != this.parent ? this.parent.has(t, true) : false;
    }
    get(t) {
        Et(t);
        if (t.$isResolver) return t.resolve(this, this);
        let e = this;
        let n;
        while (null != e) {
            n = e.u.get(t);
            if (null == n) {
                if (null == e.parent) {
                    const r = gt(t) ? this : e;
                    n = this.R(t, r);
                    return n.resolve(e, this);
                }
                e = e.parent;
            } else return n.resolve(e, this);
        }
        throw new Error(`AUR0008:${t}`);
    }
    getAll(t, e = false) {
        Et(t);
        const n = this;
        let r = n;
        let i;
        if (e) {
            let e = Ot;
            while (null != r) {
                i = r.u.get(t);
                if (null != i) e = e.concat(At(i, r, n));
                r = r.parent;
            }
            return e;
        } else while (null != r) {
            i = r.u.get(t);
            if (null == i) {
                r = r.parent;
                if (null == r) return Ot;
            } else return At(i, r, n);
        }
        return Ot;
    }
    invoke(t, e) {
        if ($(t)) throw jt(t);
        if (void 0 === e) return new t(...K(t).map(at, this)); else return new t(...K(t).map(at, this), ...e);
    }
    getFactory(t) {
        let e = this.h.get(t);
        if (void 0 === e) {
            if ($(t)) throw jt(t);
            this.h.set(t, e = new Factory(t, K(t)));
        }
        return e;
    }
    registerFactory(t, e) {
        this.h.set(t, e);
    }
    createChild(t) {
        if (void 0 === t && this.config.inheritParentResources) {
            if (this.config === ContainerConfiguration.DEFAULT) return new Container(this, this.config);
            return new Container(this, ContainerConfiguration.from({
                ...this.config,
                inheritParentResources: false
            }));
        }
        return new Container(this, ContainerConfiguration.from(null !== t && void 0 !== t ? t : this.config));
    }
    disposeResolvers() {
        const t = this.u;
        const e = this.i;
        let n;
        let r;
        for ([r, n] of e.entries()) {
            n.dispose();
            t.delete(r);
        }
        e.clear();
    }
    find(t, e) {
        const n = t.keyFrom(e);
        let r = this.res[n];
        if (void 0 === r) {
            r = this.root.res[n];
            if (void 0 === r) return null;
        }
        if (null === r) return null;
        if (I(r.getFactory)) {
            const e = r.getFactory(this);
            if (null === e || void 0 === e) return null;
            const n = j(t.name, e.Type);
            if (void 0 === n) return null;
            return n;
        }
        return null;
    }
    create(t, e) {
        var n, r;
        const i = t.keyFrom(e);
        let s = this.res[i];
        if (void 0 === s) {
            s = this.root.res[i];
            if (void 0 === s) return null;
            return null !== (n = s.resolve(this.root, this)) && void 0 !== n ? n : null;
        }
        return null !== (r = s.resolve(this, this)) && void 0 !== r ? r : null;
    }
    dispose() {
        if (this.i.size > 0) this.disposeResolvers();
        this.u.clear();
    }
    R(t, e) {
        if (!I(t)) throw new Error(`AUR0009:${t}`);
        if (yt.has(t.name)) throw new Error(`AUR0010:${t.name}`);
        if (vt(t)) {
            const n = t.register(e, t);
            if (!(n instanceof Object) || null == n.resolve) {
                const n = e.u.get(t);
                if (void 0 != n) return n;
                throw new Error(`AUR0011`);
            }
            return n;
        } else if (S.resource.has(t)) {
            const n = S.resource.getAll(t);
            if (1 === n.length) n[0].register(e); else {
                const t = n.length;
                for (let r = 0; r < t; ++r) n[r].register(e);
            }
            const r = e.u.get(t);
            if (void 0 != r) return r;
            throw new Error(`AUR0011`);
        } else if (t.$isInterface) throw new Error(`AUR0012:${t.friendlyName}`); else {
            const n = this.config.defaultResolver(t, e);
            e.u.set(t, n);
            return n;
        }
    }
}

class ParameterizedRegistry {
    constructor(t, e) {
        this.key = t;
        this.params = e;
    }
    register(t) {
        if (t.has(this.key, true)) {
            const e = t.get(this.key);
            e.register(t, ...this.params);
        } else t.register(...this.params.filter((t => "object" === typeof t)));
    }
}

const bt = new WeakMap;

function Ct(t) {
    return function(e, n, r) {
        let i = bt.get(e);
        if (void 0 === i) bt.set(e, i = new WeakMap);
        if (i.has(r)) return i.get(r);
        const s = t(e, n, r);
        i.set(r, s);
        return s;
    };
}

const $t = {
    instance(t, e) {
        return new Resolver(t, 0, e);
    },
    singleton(t, e) {
        return new Resolver(t, 1, e);
    },
    transient(t, e) {
        return new Resolver(t, 2, e);
    },
    callback(t, e) {
        return new Resolver(t, 3, e);
    },
    cachedCallback(t, e) {
        return new Resolver(t, 3, Ct(e));
    },
    aliasTo(t, e) {
        return new Resolver(e, 5, t);
    },
    defer(t, ...e) {
        return new ParameterizedRegistry(t, e);
    }
};

class InstanceProvider {
    constructor(t, e) {
        this.C = null;
        this.$ = t;
        if (void 0 !== e) this.C = e;
    }
    get friendlyName() {
        return this.$;
    }
    prepare(t) {
        this.C = t;
    }
    get $isResolver() {
        return true;
    }
    resolve() {
        if (null == this.C) throw new Error(`AUR0013:${this.$}`);
        return this.C;
    }
    dispose() {
        this.C = null;
    }
}

function Et(t) {
    if (null === t || void 0 === t) throw new Error(`AUR0014`);
}

function At(t, e, n) {
    if (t instanceof Resolver && 4 === t.strategy) {
        const r = t.state;
        let i = r.length;
        const s = new Array(i);
        while (i--) s[i] = r[i].resolve(e, n);
        return s;
    }
    return [ t.resolve(e, n) ];
}

function jt(t) {
    return new Error(`AUR0015:${t.name}`);
}

const Ot = Object.freeze([]);

const kt = Object.freeze({});

function It() {}

const Mt = G.createInterface("IPlatform");

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function Tt(t, e, n, r) {
    var i = arguments.length, s = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r, o;
    if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) s = Reflect.decorate(t, e, n, r); else for (var u = t.length - 1; u >= 0; u--) if (o = t[u]) s = (i < 3 ? o(s) : i > 3 ? o(e, n, s) : o(e, n)) || s;
    return i > 3 && s && Object.defineProperty(e, n, s), s;
}

function Ft(t, e) {
    return function(n, r) {
        e(n, r, t);
    };
}

var Ut;

(function(t) {
    t[t["trace"] = 0] = "trace";
    t[t["debug"] = 1] = "debug";
    t[t["info"] = 2] = "info";
    t[t["warn"] = 3] = "warn";
    t[t["error"] = 4] = "error";
    t[t["fatal"] = 5] = "fatal";
    t[t["none"] = 6] = "none";
})(Ut || (Ut = {}));

var Lt;

(function(t) {
    t[t["noColors"] = 0] = "noColors";
    t[t["colors"] = 1] = "colors";
})(Lt || (Lt = {}));

const Pt = G.createInterface("ILogConfig", (t => t.instance(new LogConfig(0, 3))));

const Dt = G.createInterface("ISink");

const St = G.createInterface("ILogEventFactory", (t => t.singleton(_t)));

const Nt = G.createInterface("ILogger", (t => t.singleton(Vt)));

const Wt = G.createInterface("ILogScope");

const Bt = Object.freeze({
    key: F("logger-sink-handles"),
    define(t, e) {
        k(this.key, e.handles, t.prototype);
        return t;
    },
    getHandles(e) {
        return _aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.Metadata.get(this.key, e);
    }
});

function Qt(t) {
    return function(e) {
        return Bt.define(e, t);
    };
}

const xt = C({
    red(t) {
        return `[31m${t}[39m`;
    },
    green(t) {
        return `[32m${t}[39m`;
    },
    yellow(t) {
        return `[33m${t}[39m`;
    },
    blue(t) {
        return `[34m${t}[39m`;
    },
    magenta(t) {
        return `[35m${t}[39m`;
    },
    cyan(t) {
        return `[36m${t}[39m`;
    },
    white(t) {
        return `[37m${t}[39m`;
    },
    grey(t) {
        return `[90m${t}[39m`;
    }
});

class LogConfig {
    constructor(t, e) {
        this.colorOptions = t;
        this.level = e;
    }
}

const zt = function() {
    const t = [ C({
        TRC: "TRC",
        DBG: "DBG",
        INF: "INF",
        WRN: "WRN",
        ERR: "ERR",
        FTL: "FTL",
        QQQ: "???"
    }), C({
        TRC: xt.grey("TRC"),
        DBG: xt.grey("DBG"),
        INF: xt.white("INF"),
        WRN: xt.yellow("WRN"),
        ERR: xt.red("ERR"),
        FTL: xt.red("FTL"),
        QQQ: xt.grey("???")
    }) ];
    return function(e, n) {
        if (e <= 0) return t[n].TRC;
        if (e <= 1) return t[n].DBG;
        if (e <= 2) return t[n].INF;
        if (e <= 3) return t[n].WRN;
        if (e <= 4) return t[n].ERR;
        if (e <= 5) return t[n].FTL;
        return t[n].QQQ;
    };
}();

function Gt(t, e) {
    if (0 === e) return t.join(".");
    return t.map(xt.cyan).join(".");
}

function Kt(t, e) {
    if (0 === e) return new Date(t).toISOString();
    return xt.grey(new Date(t).toISOString());
}

class DefaultLogEvent {
    constructor(t, e, n, r, i, s) {
        this.severity = t;
        this.message = e;
        this.optionalParams = n;
        this.scope = r;
        this.colorOptions = i;
        this.timestamp = s;
    }
    toString() {
        const {severity: t, message: e, scope: n, colorOptions: r, timestamp: i} = this;
        if (0 === n.length) return `${Kt(i, r)} [${zt(t, r)}] ${e}`;
        return `${Kt(i, r)} [${zt(t, r)} ${Gt(n, r)}] ${e}`;
    }
}

let _t = class DefaultLogEventFactory {
    constructor(t) {
        this.config = t;
    }
    createLogEvent(t, e, n, r) {
        return new DefaultLogEvent(e, n, r, t.scope, this.config.colorOptions, Date.now());
    }
};

_t = Tt([ Ft(0, Pt) ], _t);

let Ht = class ConsoleSink {
    constructor(t) {
        const e = t.console;
        this.handleEvent = function t(n) {
            const r = n.optionalParams;
            if (void 0 === r || 0 === r.length) {
                const t = n.toString();
                switch (n.severity) {
                  case 0:
                  case 1:
                    return e.debug(t);

                  case 2:
                    return e.info(t);

                  case 3:
                    return e.warn(t);

                  case 4:
                  case 5:
                    return e.error(t);
                }
            } else {
                let t = n.toString();
                let i = 0;
                while (t.includes("%s")) t = t.replace("%s", String(r[i++]));
                switch (n.severity) {
                  case 0:
                  case 1:
                    return e.debug(t, ...r.slice(i));

                  case 2:
                    return e.info(t, ...r.slice(i));

                  case 3:
                    return e.warn(t, ...r.slice(i));

                  case 4:
                  case 5:
                    return e.error(t, ...r.slice(i));
                }
            }
        };
    }
    static register(t) {
        $t.singleton(Dt, ConsoleSink).register(t);
    }
};

Ht = Tt([ Ft(0, Mt) ], Ht);

let Vt = class DefaultLogger {
    constructor(t, e, n, r = [], i = null) {
        var s, o, u, l, c, f;
        this.config = t;
        this.factory = e;
        this.scope = r;
        this.scopedLoggers = Object.create(null);
        let a;
        let h;
        let d;
        let v;
        let w;
        let g;
        if (null === i) {
            this.root = this;
            this.parent = this;
            a = this.traceSinks = [];
            h = this.debugSinks = [];
            d = this.infoSinks = [];
            v = this.warnSinks = [];
            w = this.errorSinks = [];
            g = this.fatalSinks = [];
            for (const t of n) {
                const e = Bt.getHandles(t);
                if (null !== (s = null === e || void 0 === e ? void 0 : e.includes(0)) && void 0 !== s ? s : true) a.push(t);
                if (null !== (o = null === e || void 0 === e ? void 0 : e.includes(1)) && void 0 !== o ? o : true) h.push(t);
                if (null !== (u = null === e || void 0 === e ? void 0 : e.includes(2)) && void 0 !== u ? u : true) d.push(t);
                if (null !== (l = null === e || void 0 === e ? void 0 : e.includes(3)) && void 0 !== l ? l : true) v.push(t);
                if (null !== (c = null === e || void 0 === e ? void 0 : e.includes(4)) && void 0 !== c ? c : true) w.push(t);
                if (null !== (f = null === e || void 0 === e ? void 0 : e.includes(5)) && void 0 !== f ? f : true) g.push(t);
            }
        } else {
            this.root = i.root;
            this.parent = i;
            a = this.traceSinks = i.traceSinks;
            h = this.debugSinks = i.debugSinks;
            d = this.infoSinks = i.infoSinks;
            v = this.warnSinks = i.warnSinks;
            w = this.errorSinks = i.errorSinks;
            g = this.fatalSinks = i.fatalSinks;
        }
    }
    trace(t, ...e) {
        if (this.config.level <= 0) this.emit(this.traceSinks, 0, t, e);
    }
    debug(t, ...e) {
        if (this.config.level <= 1) this.emit(this.debugSinks, 1, t, e);
    }
    info(t, ...e) {
        if (this.config.level <= 2) this.emit(this.infoSinks, 2, t, e);
    }
    warn(t, ...e) {
        if (this.config.level <= 3) this.emit(this.warnSinks, 3, t, e);
    }
    error(t, ...e) {
        if (this.config.level <= 4) this.emit(this.errorSinks, 4, t, e);
    }
    fatal(t, ...e) {
        if (this.config.level <= 5) this.emit(this.fatalSinks, 5, t, e);
    }
    scopeTo(t) {
        const e = this.scopedLoggers;
        let n = e[t];
        if (void 0 === n) n = e[t] = new DefaultLogger(this.config, this.factory, void 0, this.scope.concat(t), this);
        return n;
    }
    emit(t, e, n, r) {
        const i = I(n) ? n() : n;
        const s = this.factory.createLogEvent(this, e, i, r);
        for (let e = 0, n = t.length; e < n; ++e) t[e].handleEvent(s);
    }
};

Tt([ m ], Vt.prototype, "trace", null);

Tt([ m ], Vt.prototype, "debug", null);

Tt([ m ], Vt.prototype, "info", null);

Tt([ m ], Vt.prototype, "warn", null);

Tt([ m ], Vt.prototype, "error", null);

Tt([ m ], Vt.prototype, "fatal", null);

Vt = Tt([ Ft(0, Pt), Ft(1, St), Ft(2, nt(Dt)), Ft(3, it(Wt)), Ft(4, st) ], Vt);

const qt = C({
    create({level: t = 3, colorOptions: e = 0, sinks: n = []} = {}) {
        return C({
            register(r) {
                r.register($t.instance(Pt, new LogConfig(e, t)));
                for (const t of n) if (I(t)) r.register($t.singleton(Dt, t)); else r.register(t);
                return r;
            }
        });
    }
});

const Jt = G.createInterface((t => t.singleton(ModuleLoader)));

function Xt(t) {
    return t;
}

class ModuleTransformer {
    constructor(t) {
        this.$transform = t;
        this.A = new Map;
        this.j = new Map;
    }
    transform(t) {
        if (t instanceof Promise) return this.O(t); else if ("object" === typeof t && null !== t) return this.I(t); else throw new Error(`Invalid input: ${String(t)}. Expected Promise or Object.`);
    }
    O(t) {
        if (this.A.has(t)) return this.A.get(t);
        const e = t.then((t => this.I(t)));
        this.A.set(t, e);
        void e.then((e => {
            this.A.set(t, e);
        }));
        return e;
    }
    I(t) {
        if (this.j.has(t)) return this.j.get(t);
        const e = this.$transform(this.M(t));
        this.j.set(t, e);
        if (e instanceof Promise) void e.then((e => {
            this.j.set(t, e);
        }));
        return e;
    }
    M(t) {
        let e;
        let n;
        let r;
        let i;
        const s = [];
        for (const o in t) {
            switch (typeof (e = t[o])) {
              case "object":
                if (null === e) continue;
                n = I(e.register);
                r = false;
                i = Ot;
                break;

              case "function":
                n = I(e.register);
                r = void 0 !== e.prototype;
                i = S.resource.getAll(e);
                break;

              default:
                continue;
            }
            s.push(new ModuleItem(o, e, n, r, i));
        }
        return new AnalyzedModule(t, s);
    }
}

class ModuleLoader {
    constructor() {
        this.transformers = new Map;
    }
    load(t, e = Xt) {
        const n = this.transformers;
        let r = n.get(e);
        if (void 0 === r) n.set(e, r = new ModuleTransformer(e));
        return r.transform(t);
    }
    dispose() {
        this.transformers.clear();
    }
}

class AnalyzedModule {
    constructor(t, e) {
        this.raw = t;
        this.items = e;
    }
}

class ModuleItem {
    constructor(t, e, n, r, i) {
        this.key = t;
        this.value = e;
        this.isRegistry = n;
        this.isConstructable = r;
        this.definitions = i;
    }
}

class Handler {
    constructor(t, e) {
        this.messageType = t;
        this.callback = e;
    }
    handle(t) {
        if (t instanceof this.messageType) this.callback.call(null, t);
    }
}

const Yt = G.createInterface("IEventAggregator", (t => t.singleton(EventAggregator)));

class EventAggregator {
    constructor() {
        this.eventLookup = {};
        this.messageHandlers = [];
    }
    publish(t, e) {
        if (!t) throw new Error(`Invalid channel name or instance: ${t}.`);
        if (M(t)) {
            let n = this.eventLookup[t];
            if (void 0 !== n) {
                n = n.slice();
                let r = n.length;
                while (r-- > 0) n[r](e, t);
            }
        } else {
            const e = this.messageHandlers.slice();
            let n = e.length;
            while (n-- > 0) e[n].handle(t);
        }
    }
    subscribe(t, e) {
        if (!t) throw new Error(`Invalid channel name or type: ${t}.`);
        let n;
        let r;
        if (M(t)) {
            if (void 0 === this.eventLookup[t]) this.eventLookup[t] = [];
            n = e;
            r = this.eventLookup[t];
        } else {
            n = new Handler(t, e);
            r = this.messageHandlers;
        }
        r.push(n);
        return {
            dispose() {
                const t = r.indexOf(n);
                if (-1 !== t) r.splice(t, 1);
            }
        };
    }
    subscribeOnce(t, e) {
        const n = this.subscribe(t, (function(t, r) {
            n.dispose();
            e(t, r);
        }));
        return n;
    }
}


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/@aurelia/metadata/dist/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@aurelia/metadata/dist/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Metadata": () => /* binding */ A,
/* harmony export */   "applyMetadataPolyfill": () => /* binding */ S,
/* harmony export */   "isNullOrUndefined": () => /* binding */ e,
/* harmony export */   "isObject": () => /* binding */ t,
/* harmony export */   "metadata": () => /* binding */ g
/* harmony export */ });
function t(t) {
    return "object" === typeof t && null !== t || "function" === typeof t;
}

function e(t) {
    return null === t || void 0 === t;
}

const n = new WeakMap;

function r(t, e, n, r, a) {
    return new TypeError(`${t}(${e.map(String).join(",")}) - Expected '${n}' to be of type ${a}, but got: ${Object.prototype.toString.call(r)} (${String(r)})`);
}

function a(t) {
    switch (typeof t) {
      case "undefined":
      case "string":
      case "symbol":
        return t;

      default:
        return `${t}`;
    }
}

function o(t) {
    switch (typeof t) {
      case "string":
      case "symbol":
        return t;

      default:
        return `${t}`;
    }
}

function i(t) {
    switch (typeof t) {
      case "undefined":
      case "string":
      case "symbol":
        return t;

      default:
        throw new TypeError(`Invalid metadata propertyKey: ${t}.`);
    }
}

function u(t, e, r) {
    let a = n.get(t);
    if (void 0 === a) {
        if (!r) return;
        a = new Map;
        n.set(t, a);
    }
    let o = a.get(e);
    if (void 0 === o) {
        if (!r) return;
        o = new Map;
        a.set(e, o);
    }
    return o;
}

function c(t, e, n) {
    const r = u(e, n, false);
    if (void 0 === r) return false;
    return r.has(t);
}

function f(t, e, n) {
    if (c(t, e, n)) return true;
    const r = Object.getPrototypeOf(e);
    if (null !== r) return f(t, r, n);
    return false;
}

function s(t, e, n) {
    const r = u(e, n, false);
    if (void 0 === r) return;
    return r.get(t);
}

function l(t, e, n) {
    if (c(t, e, n)) return s(t, e, n);
    const r = Object.getPrototypeOf(e);
    if (null !== r) return l(t, r, n);
    return;
}

function d(t, e, n, r) {
    const a = u(n, r, true);
    a.set(t, e);
}

function w(t, e) {
    const n = [];
    const r = u(t, e, false);
    if (void 0 === r) return n;
    const a = r.keys();
    let o = 0;
    for (const t of a) {
        n[o] = t;
        ++o;
    }
    return n;
}

function y(t, e) {
    const n = w(t, e);
    const r = Object.getPrototypeOf(t);
    if (null === r) return n;
    const a = y(r, e);
    const o = n.length;
    if (0 === o) return a;
    const i = a.length;
    if (0 === i) return n;
    const u = new Set;
    const c = [];
    let f = 0;
    let s;
    for (let t = 0; t < o; ++t) {
        s = n[t];
        if (!u.has(s)) {
            u.add(s);
            c[f] = s;
            ++f;
        }
    }
    for (let t = 0; t < i; ++t) {
        s = a[t];
        if (!u.has(s)) {
            u.add(s);
            c[f] = s;
            ++f;
        }
    }
    return c;
}

function h(t, e, n) {
    const r = u(t, n, false);
    if (void 0 === r) return false;
    return r.delete(e);
}

function g(e, n) {
    function a(a, o) {
        if (!t(a)) throw r("@metadata", [ e, n, a, o ], "target", a, "Object or Function");
        d(e, n, a, i(o));
    }
    return a;
}

function p(n, a, i, u) {
    if (void 0 !== i) {
        if (!Array.isArray(n)) throw r("Metadata.decorate", [ n, a, i, u ], "decorators", n, "Array");
        if (!t(a)) throw r("Metadata.decorate", [ n, a, i, u ], "target", a, "Object or Function");
        if (!t(u) && !e(u)) throw r("Metadata.decorate", [ n, a, i, u ], "attributes", u, "Object, Function, null, or undefined");
        if (null === u) u = void 0;
        i = o(i);
        return b(n, a, i, u);
    } else {
        if (!Array.isArray(n)) throw r("Metadata.decorate", [ n, a, i, u ], "decorators", n, "Array");
        if ("function" !== typeof a) throw r("Metadata.decorate", [ n, a, i, u ], "target", a, "Function");
        return M(n, a);
    }
}

function M(t, n) {
    for (let a = t.length - 1; a >= 0; --a) {
        const o = t[a];
        const i = o(n);
        if (!e(i)) {
            if ("function" !== typeof i) throw r("DecorateConstructor", [ t, n ], "decorated", i, "Function, null, or undefined");
            n = i;
        }
    }
    return n;
}

function b(n, a, o, i) {
    for (let u = n.length - 1; u >= 0; --u) {
        const c = n[u];
        const f = c(a, o, i);
        if (!e(f)) {
            if (!t(f)) throw r("DecorateProperty", [ n, a, o, i ], "decorated", f, "Object, Function, null, or undefined");
            i = f;
        }
    }
    return i;
}

function O(e, n, o, i) {
    if (!t(o)) throw r("Metadata.define", [ e, n, o, i ], "target", o, "Object or Function");
    return d(e, n, o, a(i));
}

function m(e, n, o) {
    if (!t(n)) throw r("Metadata.has", [ e, n, o ], "target", n, "Object or Function");
    return f(e, n, a(o));
}

function j(e, n, o) {
    if (!t(n)) throw r("Metadata.hasOwn", [ e, n, o ], "target", n, "Object or Function");
    return c(e, n, a(o));
}

function v(e, n, o) {
    if (!t(n)) throw r("Metadata.get", [ e, n, o ], "target", n, "Object or Function");
    return l(e, n, a(o));
}

function $(e, n, o) {
    if (!t(n)) throw r("Metadata.getOwn", [ e, n, o ], "target", n, "Object or Function");
    return s(e, n, a(o));
}

function F(e, n) {
    if (!t(e)) throw r("Metadata.getKeys", [ e, n ], "target", e, "Object or Function");
    return y(e, a(n));
}

function K(e, n) {
    if (!t(e)) throw r("Metadata.getOwnKeys", [ e, n ], "target", e, "Object or Function");
    return w(e, a(n));
}

function E(e, n, o) {
    if (!t(n)) throw r("Metadata.delete", [ e, n, o ], "target", n, "Object or Function");
    return h(n, e, a(o));
}

const A = {
    define: O,
    has: m,
    hasOwn: j,
    get: v,
    getOwn: $,
    getKeys: F,
    getOwnKeys: K,
    delete: E
};

function k(t, e, n, r, a) {
    if (!Reflect.defineProperty(t, e, {
        writable: r,
        enumerable: false,
        configurable: a,
        value: n
    })) throw new Error(`Unable to apply metadata polyfill: could not add property '${e}' to the global Reflect object`);
}

const R = "[[$au]]";

function C(t) {
    return R in t;
}

function I(t, e, r) {
    k(t, R, n, e, r);
    k(t, "metadata", g, e, r);
    k(t, "decorate", p, e, r);
    k(t, "defineMetadata", O, e, r);
    k(t, "hasMetadata", m, e, r);
    k(t, "hasOwnMetadata", j, e, r);
    k(t, "getMetadata", v, e, r);
    k(t, "getOwnMetadata", $, e, r);
    k(t, "getMetadataKeys", F, e, r);
    k(t, "getOwnMetadataKeys", K, e, r);
    k(t, "deleteMetadata", E, e, r);
}

function S(t, e = true, r = false, a = true, o = true) {
    if (C(t)) {
        if (t[R] === n) return;
        throw new Error(`Conflicting @aurelia/metadata module import detected. Please make sure you have the same version of all Aurelia packages in your dependency tree.`);
    }
    const i = [ "metadata", "decorate", "defineMetadata", "hasMetadata", "hasOwnMetadata", "getMetadata", "getOwnMetadata", "getMetadataKeys", "getOwnMetadataKeys", "deleteMetadata" ].filter((function(t) {
        return t in Reflect;
    }));
    if (i.length > 0) {
        if (e) {
            const t = i.map((function(t) {
                const e = `${Reflect[t].toString().slice(0, 100)}...`;
                return `${t}:\n${e}`;
            })).join("\n\n");
            throw new Error(`Conflicting reflect.metadata polyfill found. If you have 'reflect-metadata' or any other reflect polyfill imported, please remove it, if not (or if you must use a specific polyfill) please file an issue at https://github.com/aurelia/aurelia/issues so that we can look into compatibility options for this scenario. Implementation summary:\n\n${t}`);
        } else if (r) I(t, a, o);
    } else I(t, a, o);
}


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/@aurelia/platform-browser/dist/esm/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@aurelia/platform-browser/dist/esm/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserPlatform": () => /* binding */ BrowserPlatform
/* harmony export */ });
/* harmony import */ var _aurelia_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aurelia/platform */ "./node_modules/@aurelia/platform/dist/esm/index.js");


const s = new Map;

function e(t) {
    return function i() {
        throw new Error(`The PLATFORM did not receive a valid reference to the global function '${t}'.`);
    };
}

class BrowserPlatform extends _aurelia_platform__WEBPACK_IMPORTED_MODULE_0__.Platform {
    constructor(t, s = {}) {
        super(t, s);
        this.t = false;
        this.i = -1;
        this.h = false;
        this.u = -1;
        ("Node,Element,HTMLElement,CustomEvent,CSSStyleSheet,ShadowRoot,MutationObserver," + "window,document,location,history,navigator,customElements").split(",").forEach((i => {
            this[i] = i in s ? s[i] : t[i];
        }));
        "fetch,requestAnimationFrame,cancelAnimationFrame".split(",").forEach((i => {
            var h, r;
            this[i] = i in s ? s[i] : null !== (r = null === (h = t[i]) || void 0 === h ? void 0 : h.bind(t)) && void 0 !== r ? r : e(i);
        }));
        this.flushDomRead = this.flushDomRead.bind(this);
        this.flushDomWrite = this.flushDomWrite.bind(this);
        this.domReadQueue = new _aurelia_platform__WEBPACK_IMPORTED_MODULE_0__.TaskQueue(this, this.requestDomRead.bind(this), this.cancelDomRead.bind(this));
        this.domWriteQueue = new _aurelia_platform__WEBPACK_IMPORTED_MODULE_0__.TaskQueue(this, this.requestDomWrite.bind(this), this.cancelDomWrite.bind(this));
    }
    static getOrCreate(t, i = {}) {
        let e = s.get(t);
        if (void 0 === e) s.set(t, e = new BrowserPlatform(t, i));
        return e;
    }
    static set(t, i) {
        s.set(t, i);
    }
    requestDomRead() {
        this.t = true;
        if (-1 === this.u) this.u = this.requestAnimationFrame(this.flushDomWrite);
    }
    cancelDomRead() {
        this.t = false;
        if (this.i > -1) {
            this.clearTimeout(this.i);
            this.i = -1;
        }
        if (false === this.h && this.u > -1) {
            this.cancelAnimationFrame(this.u);
            this.u = -1;
        }
    }
    flushDomRead() {
        this.i = -1;
        if (true === this.t) {
            this.t = false;
            this.domReadQueue.flush();
        }
    }
    requestDomWrite() {
        this.h = true;
        if (-1 === this.u) this.u = this.requestAnimationFrame(this.flushDomWrite);
    }
    cancelDomWrite() {
        this.h = false;
        if (this.u > -1 && (false === this.t || this.i > -1)) {
            this.cancelAnimationFrame(this.u);
            this.u = -1;
        }
    }
    flushDomWrite() {
        this.u = -1;
        if (true === this.h) {
            this.h = false;
            this.domWriteQueue.flush();
        }
        if (true === this.t && -1 === this.i) this.i = this.setTimeout(this.flushDomRead, 0);
    }
}


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/@aurelia/platform/dist/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@aurelia/platform/dist/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Platform": () => /* binding */ Platform,
/* harmony export */   "Task": () => /* binding */ Task,
/* harmony export */   "TaskAbortError": () => /* binding */ TaskAbortError,
/* harmony export */   "TaskQueue": () => /* binding */ TaskQueue,
/* harmony export */   "TaskQueuePriority": () => /* binding */ n,
/* harmony export */   "TaskStatus": () => /* binding */ h
/* harmony export */ });
const t = new Map;

function s(t) {
    return function s() {
        throw new Error(`The PLATFORM did not receive a valid reference to the global function '${t}'.`);
    };
}

class Platform {
    constructor(t, i = {}) {
        var e, h, r, n, o, a, l, c, u, f, d, v, w;
        this.macroTaskRequested = false;
        this.macroTaskHandle = -1;
        this.globalThis = t;
        this.decodeURI = "decodeURI" in i ? i.decodeURI : t.decodeURI;
        this.decodeURIComponent = "decodeURIComponent" in i ? i.decodeURIComponent : t.decodeURIComponent;
        this.encodeURI = "encodeURI" in i ? i.encodeURI : t.encodeURI;
        this.encodeURIComponent = "encodeURIComponent" in i ? i.encodeURIComponent : t.encodeURIComponent;
        this.Date = "Date" in i ? i.Date : t.Date;
        this.Reflect = "Reflect" in i ? i.Reflect : t.Reflect;
        this.clearInterval = "clearInterval" in i ? i.clearInterval : null !== (h = null === (e = t.clearInterval) || void 0 === e ? void 0 : e.bind(t)) && void 0 !== h ? h : s("clearInterval");
        this.clearTimeout = "clearTimeout" in i ? i.clearTimeout : null !== (n = null === (r = t.clearTimeout) || void 0 === r ? void 0 : r.bind(t)) && void 0 !== n ? n : s("clearTimeout");
        this.queueMicrotask = "queueMicrotask" in i ? i.queueMicrotask : null !== (a = null === (o = t.queueMicrotask) || void 0 === o ? void 0 : o.bind(t)) && void 0 !== a ? a : s("queueMicrotask");
        this.setInterval = "setInterval" in i ? i.setInterval : null !== (c = null === (l = t.setInterval) || void 0 === l ? void 0 : l.bind(t)) && void 0 !== c ? c : s("setInterval");
        this.setTimeout = "setTimeout" in i ? i.setTimeout : null !== (f = null === (u = t.setTimeout) || void 0 === u ? void 0 : u.bind(t)) && void 0 !== f ? f : s("setTimeout");
        this.console = "console" in i ? i.console : t.console;
        this.performanceNow = "performanceNow" in i ? i.performanceNow : null !== (w = null === (v = null === (d = t.performance) || void 0 === d ? void 0 : d.now) || void 0 === v ? void 0 : v.bind(t.performance)) && void 0 !== w ? w : s("performance.now");
        this.flushMacroTask = this.flushMacroTask.bind(this);
        this.taskQueue = new TaskQueue(this, this.requestMacroTask.bind(this), this.cancelMacroTask.bind(this));
    }
    static getOrCreate(s, i = {}) {
        let e = t.get(s);
        if (void 0 === e) t.set(s, e = new Platform(s, i));
        return e;
    }
    static set(s, i) {
        t.set(s, i);
    }
    requestMacroTask() {
        this.macroTaskRequested = true;
        if (-1 === this.macroTaskHandle) this.macroTaskHandle = this.setTimeout(this.flushMacroTask, 0);
    }
    cancelMacroTask() {
        this.macroTaskRequested = false;
        if (this.macroTaskHandle > -1) {
            this.clearTimeout(this.macroTaskHandle);
            this.macroTaskHandle = -1;
        }
    }
    flushMacroTask() {
        this.macroTaskHandle = -1;
        if (true === this.macroTaskRequested) {
            this.macroTaskRequested = false;
            this.taskQueue.flush();
        }
    }
}

function i(t) {
    return t.persistent;
}

class TaskQueue {
    constructor(t, s, i) {
        this.platform = t;
        this.$request = s;
        this.$cancel = i;
        this.t = void 0;
        this.i = 0;
        this.processing = [];
        this.pending = [];
        this.delayed = [];
        this.flushRequested = false;
        this.h = void 0;
        this.taskPool = [];
        this.u = 0;
        this.T = 0;
        this.$ = 0;
        this.I = () => {
            if (!this.flushRequested) {
                this.flushRequested = true;
                this.T = this.platform.performanceNow();
                this.$request();
            }
        };
        this.M = new Tracer(t.console);
    }
    get isEmpty() {
        return 0 === this.i && 0 === this.processing.length && 0 === this.pending.length && 0 === this.delayed.length;
    }
    get P() {
        return 0 === this.i && this.processing.every(i) && this.pending.every(i) && this.delayed.every(i);
    }
    flush(t = this.platform.performanceNow()) {
        this.flushRequested = false;
        this.$ = t;
        if (void 0 === this.t) {
            if (this.pending.length > 0) {
                this.processing.push(...this.pending);
                this.pending.length = 0;
            }
            if (this.delayed.length > 0) {
                let s = -1;
                while (++s < this.delayed.length && this.delayed[s].queueTime <= t) ;
                this.processing.push(...this.delayed.splice(0, s));
            }
            let s;
            while (this.processing.length > 0) {
                (s = this.processing.shift()).run();
                if (1 === s.status) if (true === s.suspend) {
                    this.t = s;
                    this.I();
                    return;
                } else ++this.i;
            }
            if (this.pending.length > 0) {
                this.processing.push(...this.pending);
                this.pending.length = 0;
            }
            if (this.delayed.length > 0) {
                let s = -1;
                while (++s < this.delayed.length && this.delayed[s].queueTime <= t) ;
                this.processing.push(...this.delayed.splice(0, s));
            }
            if (this.processing.length > 0 || this.delayed.length > 0 || this.i > 0) this.I();
            if (void 0 !== this.h && this.P) {
                const t = this.h;
                this.h = void 0;
                t.resolve();
            }
        } else this.I();
    }
    cancel() {
        if (this.flushRequested) {
            this.$cancel();
            this.flushRequested = false;
        }
    }
    async yield() {
        if (this.isEmpty) ; else {
            if (void 0 === this.h) this.h = u();
            await this.h;
        }
    }
    queueTask(t, s) {
        const {delay: i, preempt: e, persistent: h, reusable: r, suspend: n} = {
            ...o,
            ...s
        };
        if (e) {
            if (i > 0) throw new Error(`Invalid arguments: preempt cannot be combined with a greater-than-zero delay`);
            if (h) throw new Error(`Invalid arguments: preempt cannot be combined with persistent`);
        }
        if (0 === this.processing.length) this.I();
        const a = this.platform.performanceNow();
        let l;
        if (r) {
            const s = this.taskPool;
            const o = this.u - 1;
            if (o >= 0) {
                l = s[o];
                s[o] = void 0;
                this.u = o;
                l.reuse(a, i, e, h, n, t);
            } else l = new Task(this.M, this, a, a + i, e, h, n, r, t);
        } else l = new Task(this.M, this, a, a + i, e, h, n, r, t);
        if (e) this.processing[this.processing.length] = l; else if (0 === i) this.pending[this.pending.length] = l; else this.delayed[this.delayed.length] = l;
        return l;
    }
    remove(t) {
        let s = this.processing.indexOf(t);
        if (s > -1) {
            this.processing.splice(s, 1);
            return;
        }
        s = this.pending.indexOf(t);
        if (s > -1) {
            this.pending.splice(s, 1);
            return;
        }
        s = this.delayed.indexOf(t);
        if (s > -1) {
            this.delayed.splice(s, 1);
            return;
        }
        throw new Error(`Task #${t.id} could not be found`);
    }
    returnToPool(t) {
        this.taskPool[this.u++] = t;
    }
    resetPersistentTask(t) {
        t.reset(this.platform.performanceNow());
        if (t.createdTime === t.queueTime) this.pending[this.pending.length] = t; else this.delayed[this.delayed.length] = t;
    }
    completeAsyncTask(t) {
        var s;
        if (true === t.suspend) {
            if (this.t !== t) throw new Error(`Async task completion mismatch: suspenderTask=${null === (s = this.t) || void 0 === s ? void 0 : s.id}, task=${t.id}`);
            this.t = void 0;
        } else --this.i;
        if (void 0 !== this.h && this.P) {
            const t = this.h;
            this.h = void 0;
            t.resolve();
        }
        if (this.isEmpty) this.cancel();
    }
}

class TaskAbortError extends Error {
    constructor(t) {
        super("Task was canceled.");
        this.task = t;
    }
}

let e = 0;

var h;

(function(t) {
    t[t["pending"] = 0] = "pending";
    t[t["running"] = 1] = "running";
    t[t["completed"] = 2] = "completed";
    t[t["canceled"] = 3] = "canceled";
})(h || (h = {}));

class Task {
    constructor(t, s, i, h, r, n, o, a, l) {
        this.taskQueue = s;
        this.createdTime = i;
        this.queueTime = h;
        this.preempt = r;
        this.persistent = n;
        this.suspend = o;
        this.reusable = a;
        this.callback = l;
        this.id = ++e;
        this.R = void 0;
        this.A = void 0;
        this.q = void 0;
        this.C = 0;
        this.M = t;
    }
    get result() {
        const t = this.q;
        if (void 0 === t) switch (this.C) {
          case 0:
            {
                const t = this.q = u();
                this.R = t.resolve;
                this.A = t.reject;
                return t;
            }

          case 1:
            throw new Error("Trying to await task from within task will cause a deadlock.");

          case 2:
            return this.q = Promise.resolve();

          case 3:
            return this.q = Promise.reject(new TaskAbortError(this));
        }
        return t;
    }
    get status() {
        return this.C;
    }
    run(t = this.taskQueue.platform.performanceNow()) {
        if (0 !== this.C) throw new Error(`Cannot run task in ${this.C} state`);
        const {persistent: s, reusable: i, taskQueue: e, callback: h, R: r, A: n, createdTime: o} = this;
        let a;
        this.C = 1;
        try {
            a = h(t - o);
            if (a instanceof Promise) a.then((t => {
                if (this.persistent) e["resetPersistentTask"](this); else {
                    if (s) this.C = 3; else this.C = 2;
                    this.dispose();
                }
                e["completeAsyncTask"](this);
                if (false) {}
                if (void 0 !== r) r(t);
                if (!this.persistent && i) e["returnToPool"](this);
            })).catch((t => {
                if (!this.persistent) this.dispose();
                e["completeAsyncTask"](this);
                if (false) {}
                if (void 0 !== n) n(t); else throw t;
            })); else {
                if (this.persistent) e["resetPersistentTask"](this); else {
                    if (s) this.C = 3; else this.C = 2;
                    this.dispose();
                }
                if (false) {}
                if (void 0 !== r) r(a);
                if (!this.persistent && i) e["returnToPool"](this);
            }
        } catch (t) {
            if (!this.persistent) this.dispose();
            if (void 0 !== n) n(t); else throw t;
        }
    }
    cancel() {
        if (0 === this.C) {
            const t = this.taskQueue;
            const s = this.reusable;
            const i = this.A;
            t.remove(this);
            if (t.isEmpty) t.cancel();
            this.C = 3;
            this.dispose();
            if (s) t["returnToPool"](this);
            if (void 0 !== i) i(new TaskAbortError(this));
            return true;
        } else if (1 === this.C && this.persistent) {
            this.persistent = false;
            return true;
        }
        return false;
    }
    reset(t) {
        const s = this.queueTime - this.createdTime;
        this.createdTime = t;
        this.queueTime = t + s;
        this.C = 0;
        this.R = void 0;
        this.A = void 0;
        this.q = void 0;
    }
    reuse(t, s, i, e, h, r) {
        this.createdTime = t;
        this.queueTime = t + s;
        this.preempt = i;
        this.persistent = e;
        this.suspend = h;
        this.callback = r;
        this.C = 0;
    }
    dispose() {
        this.callback = void 0;
        this.R = void 0;
        this.A = void 0;
        this.q = void 0;
    }
}

function r(t) {
    switch (t) {
      case 0:
        return "pending";

      case 1:
        return "running";

      case 3:
        return "canceled";

      case 2:
        return "completed";
    }
}

class Tracer {
    constructor(t) {
        this.console = t;
        this.enabled = false;
        this.depth = 0;
    }
    enter(t, s) {
        this.log(`${"  ".repeat(this.depth++)}> `, t, s);
    }
    leave(t, s) {
        this.log(`${"  ".repeat(--this.depth)}< `, t, s);
    }
    trace(t, s) {
        this.log(`${"  ".repeat(this.depth)}- `, t, s);
    }
    log(t, s, i) {
        if (s instanceof TaskQueue) {
            const e = s["processing"].length;
            const h = s["pending"].length;
            const r = s["delayed"].length;
            const n = s["flushRequested"];
            const o = !!s.t;
            const a = `processing=${e} pending=${h} delayed=${r} flushReq=${n} susTask=${o}`;
            this.console.log(`${t}[Q.${i}] ${a}`);
        } else {
            const e = s["id"];
            const h = Math.round(10 * s["createdTime"]) / 10;
            const n = Math.round(10 * s["queueTime"]) / 10;
            const o = s["preempt"];
            const a = s["reusable"];
            const l = s["persistent"];
            const c = s["suspend"];
            const u = r(s["C"]);
            const f = `id=${e} created=${h} queue=${n} preempt=${o} persistent=${l} reusable=${a} status=${u} suspend=${c}`;
            this.console.log(`${t}[T.${i}] ${f}`);
        }
    }
}

var n;

(function(t) {
    t[t["render"] = 0] = "render";
    t[t["macroTask"] = 1] = "macroTask";
    t[t["postRender"] = 2] = "postRender";
})(n || (n = {}));

const o = {
    delay: 0,
    preempt: false,
    persistent: false,
    reusable: true,
    suspend: false
};

let a;

let l;

function c(t, s) {
    a = t;
    l = s;
}

function u() {
    const t = new Promise(c);
    t.resolve = a;
    t.reject = l;
    return t;
}


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/@aurelia/runtime-html/dist/esm/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@aurelia/runtime-html/dist/esm/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Platform": () => /* reexport safe */ _aurelia_platform__WEBPACK_IMPORTED_MODULE_0__.Platform,
/* harmony export */   "Task": () => /* reexport safe */ _aurelia_platform__WEBPACK_IMPORTED_MODULE_0__.Task,
/* harmony export */   "TaskAbortError": () => /* reexport safe */ _aurelia_platform__WEBPACK_IMPORTED_MODULE_0__.TaskAbortError,
/* harmony export */   "TaskQueue": () => /* reexport safe */ _aurelia_platform__WEBPACK_IMPORTED_MODULE_0__.TaskQueue,
/* harmony export */   "TaskQueuePriority": () => /* reexport safe */ _aurelia_platform__WEBPACK_IMPORTED_MODULE_0__.TaskQueuePriority,
/* harmony export */   "TaskStatus": () => /* reexport safe */ _aurelia_platform__WEBPACK_IMPORTED_MODULE_0__.TaskStatus,
/* harmony export */   "BrowserPlatform": () => /* reexport safe */ _aurelia_platform_browser__WEBPACK_IMPORTED_MODULE_1__.BrowserPlatform,
/* harmony export */   "Access": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.Access,
/* harmony export */   "AccessKeyedExpression": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.AccessKeyedExpression,
/* harmony export */   "AccessMemberExpression": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.AccessMemberExpression,
/* harmony export */   "AccessScopeExpression": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.AccessScopeExpression,
/* harmony export */   "AccessThisExpression": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.AccessThisExpression,
/* harmony export */   "AccessorType": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.AccessorType,
/* harmony export */   "ArrayBindingPattern": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.ArrayBindingPattern,
/* harmony export */   "ArrayIndexObserver": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.ArrayIndexObserver,
/* harmony export */   "ArrayLiteralExpression": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.ArrayLiteralExpression,
/* harmony export */   "ArrayObserver": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.ArrayObserver,
/* harmony export */   "AssignExpression": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.AssignExpression,
/* harmony export */   "BinaryExpression": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BinaryExpression,
/* harmony export */   "BindingBehavior": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingBehavior,
/* harmony export */   "BindingBehaviorDefinition": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingBehaviorDefinition,
/* harmony export */   "BindingBehaviorExpression": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingBehaviorExpression,
/* harmony export */   "BindingBehaviorFactory": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingBehaviorFactory,
/* harmony export */   "BindingBehaviorStrategy": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingBehaviorStrategy,
/* harmony export */   "BindingContext": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingContext,
/* harmony export */   "BindingIdentifier": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingIdentifier,
/* harmony export */   "BindingInterceptor": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingInterceptor,
/* harmony export */   "BindingMediator": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingMediator,
/* harmony export */   "BindingMode": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingMode,
/* harmony export */   "CallFunctionExpression": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.CallFunctionExpression,
/* harmony export */   "CallMemberExpression": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.CallMemberExpression,
/* harmony export */   "CallScopeExpression": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.CallScopeExpression,
/* harmony export */   "Char": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.Char,
/* harmony export */   "CollectionKind": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.CollectionKind,
/* harmony export */   "CollectionLengthObserver": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.CollectionLengthObserver,
/* harmony export */   "CollectionSizeObserver": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.CollectionSizeObserver,
/* harmony export */   "ComputedObserver": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.ComputedObserver,
/* harmony export */   "ConditionalExpression": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.ConditionalExpression,
/* harmony export */   "CustomExpression": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.CustomExpression,
/* harmony export */   "DelegationStrategy": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.DelegationStrategy,
/* harmony export */   "DirtyCheckProperty": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.DirtyCheckProperty,
/* harmony export */   "DirtyCheckSettings": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.DirtyCheckSettings,
/* harmony export */   "ExpressionKind": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.ExpressionKind,
/* harmony export */   "ExpressionType": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.ExpressionType,
/* harmony export */   "ForOfStatement": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.ForOfStatement,
/* harmony export */   "HtmlLiteralExpression": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.HtmlLiteralExpression,
/* harmony export */   "IDirtyChecker": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.IDirtyChecker,
/* harmony export */   "IExpressionParser": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.IExpressionParser,
/* harmony export */   "INodeObserverLocator": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.INodeObserverLocator,
/* harmony export */   "IObserverLocator": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.IObserverLocator,
/* harmony export */   "ISignaler": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.ISignaler,
/* harmony export */   "Interpolation": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.Interpolation,
/* harmony export */   "LifecycleFlags": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.LifecycleFlags,
/* harmony export */   "MapObserver": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.MapObserver,
/* harmony export */   "ObjectBindingPattern": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.ObjectBindingPattern,
/* harmony export */   "ObjectLiteralExpression": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.ObjectLiteralExpression,
/* harmony export */   "ObserverLocator": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.ObserverLocator,
/* harmony export */   "OverrideContext": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.OverrideContext,
/* harmony export */   "Precedence": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.Precedence,
/* harmony export */   "PrimitiveLiteralExpression": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.PrimitiveLiteralExpression,
/* harmony export */   "PrimitiveObserver": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.PrimitiveObserver,
/* harmony export */   "PropertyAccessor": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.PropertyAccessor,
/* harmony export */   "Scope": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.Scope,
/* harmony export */   "SetObserver": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.SetObserver,
/* harmony export */   "SetterObserver": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.SetterObserver,
/* harmony export */   "TaggedTemplateExpression": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.TaggedTemplateExpression,
/* harmony export */   "TemplateExpression": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.TemplateExpression,
/* harmony export */   "UnaryExpression": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.UnaryExpression,
/* harmony export */   "ValueConverter": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.ValueConverter,
/* harmony export */   "ValueConverterDefinition": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.ValueConverterDefinition,
/* harmony export */   "ValueConverterExpression": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.ValueConverterExpression,
/* harmony export */   "alias": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.alias,
/* harmony export */   "applyMutationsToIndices": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.applyMutationsToIndices,
/* harmony export */   "bindingBehavior": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.bindingBehavior,
/* harmony export */   "cloneIndexMap": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.cloneIndexMap,
/* harmony export */   "connectable": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.connectable,
/* harmony export */   "copyIndexMap": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.copyIndexMap,
/* harmony export */   "createIndexMap": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.createIndexMap,
/* harmony export */   "disableArrayObservation": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.disableArrayObservation,
/* harmony export */   "disableMapObservation": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.disableMapObservation,
/* harmony export */   "disableSetObservation": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.disableSetObservation,
/* harmony export */   "enableArrayObservation": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.enableArrayObservation,
/* harmony export */   "enableMapObservation": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.enableMapObservation,
/* harmony export */   "enableSetObservation": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.enableSetObservation,
/* harmony export */   "getCollectionObserver": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.getCollectionObserver,
/* harmony export */   "isIndexMap": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.isIndexMap,
/* harmony export */   "observable": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.observable,
/* harmony export */   "parseExpression": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.parseExpression,
/* harmony export */   "registerAliases": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.registerAliases,
/* harmony export */   "subscriberCollection": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.subscriberCollection,
/* harmony export */   "synchronizeIndices": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.synchronizeIndices,
/* harmony export */   "valueConverter": () => /* reexport safe */ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.valueConverter,
/* harmony export */   "AdoptedStyleSheetsStyles": () => /* binding */ AdoptedStyleSheetsStyles,
/* harmony export */   "AppRoot": () => /* binding */ AppRoot,
/* harmony export */   "AppTask": () => /* binding */ xe,
/* harmony export */   "AtPrefixedTriggerAttributePattern": () => /* binding */ Gt,
/* harmony export */   "AtPrefixedTriggerAttributePatternRegistration": () => /* binding */ ro,
/* harmony export */   "AttrBindingBehavior": () => /* binding */ AttrBindingBehavior,
/* harmony export */   "AttrBindingBehaviorRegistration": () => /* binding */ Go,
/* harmony export */   "AttrBindingCommand": () => /* binding */ Sn,
/* harmony export */   "AttrBindingCommandRegistration": () => /* binding */ Ao,
/* harmony export */   "AttrSyntax": () => /* binding */ AttrSyntax,
/* harmony export */   "AttributeBinding": () => /* binding */ AttributeBinding,
/* harmony export */   "AttributeBindingInstruction": () => /* binding */ AttributeBindingInstruction,
/* harmony export */   "AttributeBindingRendererRegistration": () => /* binding */ dl,
/* harmony export */   "AttributeNSAccessor": () => /* binding */ AttributeNSAccessor,
/* harmony export */   "AttributePattern": () => /* binding */ Nt,
/* harmony export */   "AuCompose": () => /* binding */ AuCompose,
/* harmony export */   "AuRender": () => /* binding */ AuRender,
/* harmony export */   "AuRenderRegistration": () => /* binding */ Yo,
/* harmony export */   "AuSlot": () => /* binding */ AuSlot,
/* harmony export */   "AuSlotsInfo": () => /* binding */ AuSlotsInfo,
/* harmony export */   "Aurelia": () => /* binding */ Aurelia,
/* harmony export */   "Bindable": () => /* binding */ Bt,
/* harmony export */   "BindableDefinition": () => /* binding */ BindableDefinition,
/* harmony export */   "BindableObserver": () => /* binding */ BindableObserver,
/* harmony export */   "BindablesInfo": () => /* binding */ BindablesInfo,
/* harmony export */   "BindingCommand": () => /* binding */ mn,
/* harmony export */   "BindingCommandDefinition": () => /* binding */ BindingCommandDefinition,
/* harmony export */   "BindingModeBehavior": () => /* binding */ BindingModeBehavior,
/* harmony export */   "CSSModulesProcessorRegistry": () => /* binding */ CSSModulesProcessorRegistry,
/* harmony export */   "CallBinding": () => /* binding */ CallBinding,
/* harmony export */   "CallBindingCommand": () => /* binding */ xn,
/* harmony export */   "CallBindingCommandRegistration": () => /* binding */ fo,
/* harmony export */   "CallBindingInstruction": () => /* binding */ CallBindingInstruction,
/* harmony export */   "CallBindingRendererRegistration": () => /* binding */ il,
/* harmony export */   "CaptureBindingCommand": () => /* binding */ An,
/* harmony export */   "CaptureBindingCommandRegistration": () => /* binding */ Co,
/* harmony export */   "Case": () => /* binding */ Br,
/* harmony export */   "CheckedObserver": () => /* binding */ CheckedObserver,
/* harmony export */   "Children": () => /* binding */ Se,
/* harmony export */   "ChildrenDefinition": () => /* binding */ ChildrenDefinition,
/* harmony export */   "ChildrenObserver": () => /* binding */ ChildrenObserver,
/* harmony export */   "ClassAttributeAccessor": () => /* binding */ ClassAttributeAccessor,
/* harmony export */   "ClassBindingCommand": () => /* binding */ En,
/* harmony export */   "ClassBindingCommandRegistration": () => /* binding */ So,
/* harmony export */   "ColonPrefixedBindAttributePattern": () => /* binding */ zt,
/* harmony export */   "ColonPrefixedBindAttributePatternRegistration": () => /* binding */ oo,
/* harmony export */   "CommandType": () => /* binding */ an,
/* harmony export */   "ComputedWatcher": () => /* binding */ ComputedWatcher,
/* harmony export */   "Controller": () => /* binding */ Controller,
/* harmony export */   "CustomAttribute": () => /* binding */ Me,
/* harmony export */   "CustomAttributeDefinition": () => /* binding */ CustomAttributeDefinition,
/* harmony export */   "CustomAttributeRendererRegistration": () => /* binding */ sl,
/* harmony export */   "CustomElement": () => /* binding */ si,
/* harmony export */   "CustomElementDefinition": () => /* binding */ CustomElementDefinition,
/* harmony export */   "CustomElementRendererRegistration": () => /* binding */ nl,
/* harmony export */   "DataAttributeAccessor": () => /* binding */ DataAttributeAccessor,
/* harmony export */   "DebounceBindingBehavior": () => /* binding */ DebounceBindingBehavior,
/* harmony export */   "DebounceBindingBehaviorRegistration": () => /* binding */ Xr,
/* harmony export */   "DefaultBindingCommand": () => /* binding */ bn,
/* harmony export */   "DefaultBindingCommandRegistration": () => /* binding */ mo,
/* harmony export */   "DefaultBindingLanguage": () => /* binding */ Bo,
/* harmony export */   "DefaultBindingSyntax": () => /* binding */ co,
/* harmony export */   "DefaultCase": () => /* binding */ Ir,
/* harmony export */   "DefaultComponents": () => /* binding */ so,
/* harmony export */   "DefaultDialogDom": () => /* binding */ DefaultDialogDom,
/* harmony export */   "DefaultDialogDomRenderer": () => /* binding */ DefaultDialogDomRenderer,
/* harmony export */   "DefaultDialogGlobalSettings": () => /* binding */ DefaultDialogGlobalSettings,
/* harmony export */   "DefaultRenderers": () => /* binding */ xl,
/* harmony export */   "DefaultResources": () => /* binding */ el,
/* harmony export */   "DefinitionType": () => /* binding */ Al,
/* harmony export */   "DelegateBindingCommand": () => /* binding */ Cn,
/* harmony export */   "DelegateBindingCommandRegistration": () => /* binding */ ko,
/* harmony export */   "DialogCloseResult": () => /* binding */ DialogCloseResult,
/* harmony export */   "DialogConfiguration": () => /* binding */ Ul,
/* harmony export */   "DialogController": () => /* binding */ DialogController,
/* harmony export */   "DialogDeactivationStatuses": () => /* binding */ Tl,
/* harmony export */   "DialogDefaultConfiguration": () => /* binding */ Fl,
/* harmony export */   "DialogOpenResult": () => /* binding */ DialogOpenResult,
/* harmony export */   "DialogService": () => /* binding */ DialogService,
/* harmony export */   "DotSeparatedAttributePattern": () => /* binding */ Wt,
/* harmony export */   "DotSeparatedAttributePatternRegistration": () => /* binding */ ho,
/* harmony export */   "Else": () => /* binding */ Else,
/* harmony export */   "ElseRegistration": () => /* binding */ $o,
/* harmony export */   "EventDelegator": () => /* binding */ EventDelegator,
/* harmony export */   "EventSubscriber": () => /* binding */ EventSubscriber,
/* harmony export */   "ExpressionWatcher": () => /* binding */ ExpressionWatcher,
/* harmony export */   "Focus": () => /* binding */ Focus,
/* harmony export */   "ForBindingCommand": () => /* binding */ yn,
/* harmony export */   "ForBindingCommandRegistration": () => /* binding */ vo,
/* harmony export */   "FragmentNodeSequence": () => /* binding */ FragmentNodeSequence,
/* harmony export */   "FrequentMutations": () => /* binding */ FrequentMutations,
/* harmony export */   "FromViewBindingBehavior": () => /* binding */ FromViewBindingBehavior,
/* harmony export */   "FromViewBindingBehaviorRegistration": () => /* binding */ Qr,
/* harmony export */   "FromViewBindingCommand": () => /* binding */ gn,
/* harmony export */   "FromViewBindingCommandRegistration": () => /* binding */ po,
/* harmony export */   "FulfilledTemplateController": () => /* binding */ Pr,
/* harmony export */   "HydrateAttributeInstruction": () => /* binding */ HydrateAttributeInstruction,
/* harmony export */   "HydrateElementInstruction": () => /* binding */ HydrateElementInstruction,
/* harmony export */   "HydrateLetElementInstruction": () => /* binding */ HydrateLetElementInstruction,
/* harmony export */   "HydrateTemplateController": () => /* binding */ HydrateTemplateController,
/* harmony export */   "IAppRoot": () => /* binding */ ts,
/* harmony export */   "IAppTask": () => /* binding */ be,
/* harmony export */   "IAttrMapper": () => /* binding */ Zt,
/* harmony export */   "IAttributeParser": () => /* binding */ Ut,
/* harmony export */   "IAttributePattern": () => /* binding */ Mt,
/* harmony export */   "IAuSlotsInfo": () => /* binding */ xs,
/* harmony export */   "IAurelia": () => /* binding */ Cl,
/* harmony export */   "IController": () => /* binding */ Xi,
/* harmony export */   "IDialogController": () => /* binding */ Rl,
/* harmony export */   "IDialogDom": () => /* binding */ Bl,
/* harmony export */   "IDialogDomRenderer": () => /* binding */ El,
/* harmony export */   "IDialogGlobalSettings": () => /* binding */ Il,
/* harmony export */   "IDialogService": () => /* binding */ Sl,
/* harmony export */   "IEventDelegator": () => /* binding */ ws,
/* harmony export */   "IEventTarget": () => /* binding */ rs,
/* harmony export */   "IHistory": () => /* binding */ vs,
/* harmony export */   "IHydrationContext": () => /* binding */ Ki,
/* harmony export */   "IInstruction": () => /* binding */ ks,
/* harmony export */   "ILifecycleHooks": () => /* binding */ bi,
/* harmony export */   "ILocation": () => /* binding */ ms,
/* harmony export */   "INode": () => /* binding */ ns,
/* harmony export */   "INodeObserverLocatorRegistration": () => /* binding */ io,
/* harmony export */   "IPlatform": () => /* binding */ Kt,
/* harmony export */   "IProjections": () => /* binding */ bs,
/* harmony export */   "IRenderLocation": () => /* binding */ os,
/* harmony export */   "IRenderer": () => /* binding */ Ss,
/* harmony export */   "IRendering": () => /* binding */ Pi,
/* harmony export */   "ISVGAnalyzer": () => /* binding */ Yt,
/* harmony export */   "ISanitizer": () => /* binding */ Hr,
/* harmony export */   "IShadowDOMGlobalStyles": () => /* binding */ di,
/* harmony export */   "IShadowDOMStyleFactory": () => /* binding */ ui,
/* harmony export */   "IShadowDOMStyles": () => /* binding */ fi,
/* harmony export */   "ISyntaxInterpreter": () => /* binding */ $t,
/* harmony export */   "ITemplateCompiler": () => /* binding */ As,
/* harmony export */   "ITemplateCompilerHooks": () => /* binding */ zn,
/* harmony export */   "ITemplateCompilerRegistration": () => /* binding */ eo,
/* harmony export */   "ITemplateElementFactory": () => /* binding */ Tn,
/* harmony export */   "IViewFactory": () => /* binding */ Ai,
/* harmony export */   "IViewLocator": () => /* binding */ Di,
/* harmony export */   "IWcElementRegistry": () => /* binding */ Vl,
/* harmony export */   "IWindow": () => /* binding */ ds,
/* harmony export */   "IWorkTracker": () => /* binding */ es,
/* harmony export */   "If": () => /* binding */ If,
/* harmony export */   "IfRegistration": () => /* binding */ Oo,
/* harmony export */   "InstructionType": () => /* binding */ ys,
/* harmony export */   "InterpolationBinding": () => /* binding */ InterpolationBinding,
/* harmony export */   "InterpolationBindingRendererRegistration": () => /* binding */ rl,
/* harmony export */   "InterpolationInstruction": () => /* binding */ InterpolationInstruction,
/* harmony export */   "Interpretation": () => /* binding */ Interpretation,
/* harmony export */   "IteratorBindingInstruction": () => /* binding */ IteratorBindingInstruction,
/* harmony export */   "IteratorBindingRendererRegistration": () => /* binding */ ol,
/* harmony export */   "LetBinding": () => /* binding */ LetBinding,
/* harmony export */   "LetBindingInstruction": () => /* binding */ LetBindingInstruction,
/* harmony export */   "LetElementRendererRegistration": () => /* binding */ ll,
/* harmony export */   "LifecycleHooks": () => /* binding */ ki,
/* harmony export */   "LifecycleHooksDefinition": () => /* binding */ LifecycleHooksDefinition,
/* harmony export */   "LifecycleHooksEntry": () => /* binding */ LifecycleHooksEntry,
/* harmony export */   "Listener": () => /* binding */ Listener,
/* harmony export */   "ListenerBindingInstruction": () => /* binding */ ListenerBindingInstruction,
/* harmony export */   "ListenerBindingRendererRegistration": () => /* binding */ fl,
/* harmony export */   "NodeObserverConfig": () => /* binding */ NodeObserverConfig,
/* harmony export */   "NodeObserverLocator": () => /* binding */ NodeObserverLocator,
/* harmony export */   "NodeType": () => /* binding */ ls,
/* harmony export */   "NoopSVGAnalyzer": () => /* binding */ NoopSVGAnalyzer,
/* harmony export */   "ObserveShallow": () => /* binding */ ObserveShallow,
/* harmony export */   "OneTimeBindingBehavior": () => /* binding */ OneTimeBindingBehavior,
/* harmony export */   "OneTimeBindingBehaviorRegistration": () => /* binding */ Kr,
/* harmony export */   "OneTimeBindingCommand": () => /* binding */ vn,
/* harmony export */   "OneTimeBindingCommandRegistration": () => /* binding */ go,
/* harmony export */   "PendingTemplateController": () => /* binding */ Dr,
/* harmony export */   "Portal": () => /* binding */ Portal,
/* harmony export */   "PromiseTemplateController": () => /* binding */ Tr,
/* harmony export */   "PropertyBinding": () => /* binding */ PropertyBinding,
/* harmony export */   "PropertyBindingInstruction": () => /* binding */ PropertyBindingInstruction,
/* harmony export */   "PropertyBindingRendererRegistration": () => /* binding */ hl,
/* harmony export */   "RefAttributePattern": () => /* binding */ Ht,
/* harmony export */   "RefAttributePatternRegistration": () => /* binding */ lo,
/* harmony export */   "RefBinding": () => /* binding */ RefBinding,
/* harmony export */   "RefBindingCommandRegistration": () => /* binding */ xo,
/* harmony export */   "RefBindingInstruction": () => /* binding */ RefBindingInstruction,
/* harmony export */   "RefBindingRendererRegistration": () => /* binding */ al,
/* harmony export */   "RejectedTemplateController": () => /* binding */ Or,
/* harmony export */   "RenderPlan": () => /* binding */ RenderPlan,
/* harmony export */   "Rendering": () => /* binding */ Rendering,
/* harmony export */   "Repeat": () => /* binding */ Repeat,
/* harmony export */   "RepeatRegistration": () => /* binding */ Lo,
/* harmony export */   "SVGAnalyzer": () => /* binding */ SVGAnalyzer,
/* harmony export */   "SVGAnalyzerRegistration": () => /* binding */ no,
/* harmony export */   "SanitizeValueConverter": () => /* binding */ zr,
/* harmony export */   "SanitizeValueConverterRegistration": () => /* binding */ Io,
/* harmony export */   "SelectValueObserver": () => /* binding */ SelectValueObserver,
/* harmony export */   "SelfBindingBehavior": () => /* binding */ SelfBindingBehavior,
/* harmony export */   "SelfBindingBehaviorRegistration": () => /* binding */ Xo,
/* harmony export */   "SetAttributeInstruction": () => /* binding */ SetAttributeInstruction,
/* harmony export */   "SetAttributeRendererRegistration": () => /* binding */ ml,
/* harmony export */   "SetClassAttributeInstruction": () => /* binding */ SetClassAttributeInstruction,
/* harmony export */   "SetClassAttributeRendererRegistration": () => /* binding */ vl,
/* harmony export */   "SetPropertyInstruction": () => /* binding */ SetPropertyInstruction,
/* harmony export */   "SetPropertyRendererRegistration": () => /* binding */ cl,
/* harmony export */   "SetStyleAttributeInstruction": () => /* binding */ SetStyleAttributeInstruction,
/* harmony export */   "SetStyleAttributeRendererRegistration": () => /* binding */ pl,
/* harmony export */   "ShadowDOMRegistry": () => /* binding */ ShadowDOMRegistry,
/* harmony export */   "ShortHandBindingSyntax": () => /* binding */ uo,
/* harmony export */   "SignalBindingBehavior": () => /* binding */ SignalBindingBehavior,
/* harmony export */   "SignalBindingBehaviorRegistration": () => /* binding */ Zr,
/* harmony export */   "StandardConfiguration": () => /* binding */ yl,
/* harmony export */   "StyleAttributeAccessor": () => /* binding */ StyleAttributeAccessor,
/* harmony export */   "StyleBindingCommand": () => /* binding */ Rn,
/* harmony export */   "StyleBindingCommandRegistration": () => /* binding */ Ro,
/* harmony export */   "StyleConfiguration": () => /* binding */ mi,
/* harmony export */   "StyleElementStyles": () => /* binding */ StyleElementStyles,
/* harmony export */   "StylePropertyBindingInstruction": () => /* binding */ StylePropertyBindingInstruction,
/* harmony export */   "StylePropertyBindingRendererRegistration": () => /* binding */ gl,
/* harmony export */   "Switch": () => /* binding */ Er,
/* harmony export */   "TemplateCompiler": () => /* binding */ TemplateCompiler,
/* harmony export */   "TemplateCompilerHooks": () => /* binding */ Kn,
/* harmony export */   "TemplateControllerRendererRegistration": () => /* binding */ ul,
/* harmony export */   "TextBindingInstruction": () => /* binding */ TextBindingInstruction,
/* harmony export */   "TextBindingRendererRegistration": () => /* binding */ wl,
/* harmony export */   "ThrottleBindingBehavior": () => /* binding */ ThrottleBindingBehavior,
/* harmony export */   "ThrottleBindingBehaviorRegistration": () => /* binding */ Jr,
/* harmony export */   "ToViewBindingBehavior": () => /* binding */ ToViewBindingBehavior,
/* harmony export */   "ToViewBindingBehaviorRegistration": () => /* binding */ Yr,
/* harmony export */   "ToViewBindingCommand": () => /* binding */ pn,
/* harmony export */   "ToViewBindingCommandRegistration": () => /* binding */ wo,
/* harmony export */   "TriggerBindingCommand": () => /* binding */ kn,
/* harmony export */   "TriggerBindingCommandRegistration": () => /* binding */ yo,
/* harmony export */   "TwoWayBindingBehavior": () => /* binding */ TwoWayBindingBehavior,
/* harmony export */   "TwoWayBindingBehaviorRegistration": () => /* binding */ to,
/* harmony export */   "TwoWayBindingCommand": () => /* binding */ wn,
/* harmony export */   "TwoWayBindingCommandRegistration": () => /* binding */ bo,
/* harmony export */   "UpdateTriggerBindingBehavior": () => /* binding */ UpdateTriggerBindingBehavior,
/* harmony export */   "UpdateTriggerBindingBehaviorRegistration": () => /* binding */ Ko,
/* harmony export */   "ValueAttributeObserver": () => /* binding */ ValueAttributeObserver,
/* harmony export */   "ViewFactory": () => /* binding */ ViewFactory,
/* harmony export */   "ViewLocator": () => /* binding */ ViewLocator,
/* harmony export */   "ViewModelKind": () => /* binding */ Hi,
/* harmony export */   "ViewValueConverter": () => /* binding */ Gr,
/* harmony export */   "ViewValueConverterRegistration": () => /* binding */ To,
/* harmony export */   "Views": () => /* binding */ Ii,
/* harmony export */   "Watch": () => /* binding */ _e,
/* harmony export */   "WcCustomElementRegistry": () => /* binding */ WcCustomElementRegistry,
/* harmony export */   "With": () => /* binding */ With,
/* harmony export */   "WithRegistration": () => /* binding */ qo,
/* harmony export */   "allResources": () => /* binding */ Pn,
/* harmony export */   "attributePattern": () => /* binding */ Ft,
/* harmony export */   "bindable": () => /* binding */ St,
/* harmony export */   "bindingCommand": () => /* binding */ cn,
/* harmony export */   "children": () => /* binding */ ke,
/* harmony export */   "coercer": () => /* binding */ It,
/* harmony export */   "containerless": () => /* binding */ We,
/* harmony export */   "convertToRenderLocation": () => /* binding */ us,
/* harmony export */   "createElement": () => /* binding */ Ur,
/* harmony export */   "cssModules": () => /* binding */ ai,
/* harmony export */   "customAttribute": () => /* binding */ Pe,
/* harmony export */   "customElement": () => /* binding */ je,
/* harmony export */   "getEffectiveParentNode": () => /* binding */ as,
/* harmony export */   "getRef": () => /* binding */ is,
/* harmony export */   "isCustomElementController": () => /* binding */ ji,
/* harmony export */   "isCustomElementViewModel": () => /* binding */ Ni,
/* harmony export */   "isInstruction": () => /* binding */ Cs,
/* harmony export */   "isRenderLocation": () => /* binding */ fs,
/* harmony export */   "lifecycleHooks": () => /* binding */ Ci,
/* harmony export */   "processContent": () => /* binding */ ri,
/* harmony export */   "renderer": () => /* binding */ Rs,
/* harmony export */   "setEffectiveParentNode": () => /* binding */ cs,
/* harmony export */   "setRef": () => /* binding */ ss,
/* harmony export */   "shadowCSS": () => /* binding */ ci,
/* harmony export */   "templateCompilerHooks": () => /* binding */ Yn,
/* harmony export */   "templateController": () => /* binding */ Oe,
/* harmony export */   "useShadowDOM": () => /* binding */ Ne,
/* harmony export */   "view": () => /* binding */ Ti,
/* harmony export */   "watch": () => /* binding */ Ue
/* harmony export */ });
/* harmony import */ var _aurelia_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aurelia/platform */ "./node_modules/@aurelia/platform/dist/esm/index.js");
/* harmony import */ var _aurelia_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aurelia/platform-browser */ "./node_modules/@aurelia/platform-browser/dist/esm/index.js");
/* harmony import */ var _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aurelia/kernel */ "./node_modules/@aurelia/kernel/dist/esm/index.js");
/* harmony import */ var _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aurelia/runtime */ "./node_modules/@aurelia/runtime/dist/esm/index.js");












/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function ot(t, e, i, s) {
    var n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s, o;
    if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var l = t.length - 1; l >= 0; l--) if (o = t[l]) r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r;
    return n > 3 && r && Object.defineProperty(e, i, r), r;
}

function lt(t, e) {
    return function(i, s) {
        e(i, s, t);
    };
}

const ht = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.Metadata.getOwn;

const at = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.Metadata.hasOwn;

const ct = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.Metadata.define;

const {annotation: ut, resource: ft} = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.Protocol;

const dt = ut.keyFor;

const mt = ft.keyFor;

const vt = ft.appendTo;

const pt = ut.appendTo;

const gt = ut.getKeys;

const wt = () => Object.create(null);

const bt = Object.prototype.hasOwnProperty;

const xt = wt();

const yt = (t, e, i) => {
    if (true === xt[e]) return true;
    if (!At(e)) return false;
    const s = e.slice(0, 5);
    return xt[e] = "aria-" === s || "data-" === s || i.isStandardSvgAttribute(t, e);
};

const kt = t => t instanceof Promise;

const Ct = t => "function" === typeof t;

const At = t => "string" === typeof t;

function St(t, e) {
    let i;
    function s(t, e) {
        if (arguments.length > 1) i.property = e;
        ct(Et, BindableDefinition.create(e, t, i), t.constructor, e);
        pt(t.constructor, Bt.keyFrom(e));
    }
    if (arguments.length > 1) {
        i = {};
        s(t, e);
        return;
    } else if (At(t)) {
        i = {};
        return s;
    }
    i = void 0 === t ? {} : t;
    return s;
}

function Rt(t) {
    return t.startsWith(Et);
}

const Et = dt("bindable");

const Bt = Object.freeze({
    name: Et,
    keyFrom: t => `${Et}:${t}`,
    from(t, ...e) {
        const i = {};
        const s = Array.isArray;
        function n(e) {
            i[e] = BindableDefinition.create(e, t);
        }
        function r(e, s) {
            i[e] = s instanceof BindableDefinition ? s : BindableDefinition.create(e, t, s);
        }
        function o(t) {
            if (s(t)) t.forEach(n); else if (t instanceof BindableDefinition) i[t.property] = t; else if (void 0 !== t) Object.keys(t).forEach((e => r(e, t[e])));
        }
        e.forEach(o);
        return i;
    },
    for(t) {
        let e;
        const i = {
            add(s) {
                let n;
                let r;
                if (At(s)) {
                    n = s;
                    r = {
                        property: n
                    };
                } else {
                    n = s.property;
                    r = s;
                }
                e = BindableDefinition.create(n, t, r);
                if (!at(Et, t, n)) pt(t, Bt.keyFrom(n));
                ct(Et, e, t, n);
                return i;
            },
            mode(t) {
                e.mode = t;
                return i;
            },
            callback(t) {
                e.callback = t;
                return i;
            },
            attribute(t) {
                e.attribute = t;
                return i;
            },
            primary() {
                e.primary = true;
                return i;
            },
            set(t) {
                e.set = t;
                return i;
            }
        };
        return i;
    },
    getAll(t) {
        const e = Et.length + 1;
        const i = [];
        const n = (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.getPrototypeChain)(t);
        let r = n.length;
        let o = 0;
        let l;
        let h;
        let a;
        let c;
        while (--r >= 0) {
            a = n[r];
            l = gt(a).filter(Rt);
            h = l.length;
            for (c = 0; c < h; ++c) i[o++] = ht(Et, a, l[c].slice(e));
        }
        return i;
    }
});

class BindableDefinition {
    constructor(t, e, i, s, n, r) {
        this.attribute = t;
        this.callback = e;
        this.mode = i;
        this.primary = s;
        this.property = n;
        this.set = r;
    }
    static create(t, e, i = {}) {
        return new BindableDefinition((0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.firstDefined)(i.attribute, (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.kebabCase)(t)), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.firstDefined)(i.callback, `${t}Changed`), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.firstDefined)(i.mode, _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingMode.toView), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.firstDefined)(i.primary, false), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.firstDefined)(i.property, t), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.firstDefined)(i.set, Dt(t, e, i)));
    }
}

function It(t, e, i) {
    Tt.define(t, e);
}

const Tt = {
    key: dt("coercer"),
    define(t, e) {
        ct(Tt.key, t[e].bind(t), t);
    },
    for(t) {
        return ht(Tt.key, t);
    }
};

function Dt(t, e, i = {}) {
    var s, n, r;
    const l = null !== (n = null !== (s = i.type) && void 0 !== s ? s : Reflect.getMetadata("design:type", e, t)) && void 0 !== n ? n : null;
    if (null == l) return _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.noop;
    let h;
    switch (l) {
      case Number:
      case Boolean:
      case String:
      case BigInt:
        h = l;
        break;

      default:
        {
            const t = l.coerce;
            h = "function" === typeof t ? t.bind(l) : null !== (r = Tt.for(l)) && void 0 !== r ? r : _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.noop;
            break;
        }
    }
    return h === _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.noop ? h : Pt(h, i.nullable);
}

function Pt(t, e) {
    return function(i, s) {
        var n;
        if (!(null === s || void 0 === s ? void 0 : s.enableCoercion)) return i;
        return (null !== e && void 0 !== e ? e : (null !== (n = null === s || void 0 === s ? void 0 : s.coerceNullish) && void 0 !== n ? n : false) ? false : true) && null == i ? i : t(i, s);
    };
}

class BindableObserver {
    constructor(t, e, i, s, n, r) {
        this.set = s;
        this.$controller = n;
        this.t = r;
        this.v = void 0;
        this.ov = void 0;
        this.f = 0;
        const l = t[i];
        const h = t.propertyChanged;
        const a = this.i = Ct(l);
        const c = this.u = Ct(h);
        const u = this.hs = s !== _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.noop;
        let f;
        this.o = t;
        this.k = e;
        this.cb = a ? l : _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.noop;
        this.C = c ? h : _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.noop;
        if (void 0 === this.cb && !c && !u) this.iO = false; else {
            this.iO = true;
            f = t[e];
            this.v = u && void 0 !== f ? s(f, this.t) : f;
            this.A();
        }
    }
    get type() {
        return 1;
    }
    getValue() {
        return this.v;
    }
    setValue(t, e) {
        if (this.hs) t = this.set(t, this.t);
        const i = this.v;
        if (this.iO) {
            if (Object.is(t, i)) return;
            this.v = t;
            this.ov = i;
            this.f = e;
            if (null == this.$controller || this.$controller.isBound) {
                if (this.i) this.cb.call(this.o, t, i, e);
                if (this.u) this.C.call(this.o, this.k, t, i, e);
            }
            this.queue.add(this);
        } else this.o[this.k] = t;
    }
    subscribe(t) {
        if (false === !this.iO) {
            this.iO = true;
            this.v = this.hs ? this.set(this.o[this.k], this.t) : this.o[this.k];
            this.A();
        }
        this.subs.add(t);
    }
    flush() {
        Ot = this.ov;
        this.ov = this.v;
        this.subs.notify(this.v, Ot, this.f);
    }
    A() {
        Reflect.defineProperty(this.o, this.k, {
            enumerable: true,
            configurable: true,
            get: () => this.v,
            set: t => {
                this.setValue(t, 0);
            }
        });
    }
}

(0,_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.subscriberCollection)(BindableObserver);

(0,_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.withFlushQueue)(BindableObserver);

let Ot;

class CharSpec {
    constructor(t, e, i, s) {
        this.chars = t;
        this.repeat = e;
        this.isSymbol = i;
        this.isInverted = s;
        if (s) switch (t.length) {
          case 0:
            this.has = this.R;
            break;

          case 1:
            this.has = this.B;
            break;

          default:
            this.has = this.I;
        } else switch (t.length) {
          case 0:
            this.has = this.T;
            break;

          case 1:
            this.has = this.P;
            break;

          default:
            this.has = this.O;
        }
    }
    equals(t) {
        return this.chars === t.chars && this.repeat === t.repeat && this.isSymbol === t.isSymbol && this.isInverted === t.isInverted;
    }
    O(t) {
        return this.chars.includes(t);
    }
    P(t) {
        return this.chars === t;
    }
    T(t) {
        return false;
    }
    I(t) {
        return !this.chars.includes(t);
    }
    B(t) {
        return this.chars !== t;
    }
    R(t) {
        return true;
    }
}

class Interpretation {
    constructor() {
        this.parts = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.emptyArray;
        this.$ = "";
        this.L = {};
        this.q = {};
    }
    get pattern() {
        const t = this.$;
        if ("" === t) return null; else return t;
    }
    set pattern(t) {
        if (null == t) {
            this.$ = "";
            this.parts = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.emptyArray;
        } else {
            this.$ = t;
            this.parts = this.q[t];
        }
    }
    append(t, e) {
        const i = this.L;
        if (void 0 === i[t]) i[t] = e; else i[t] += e;
    }
    next(t) {
        const e = this.L;
        let i;
        if (void 0 !== e[t]) {
            i = this.q;
            if (void 0 === i[t]) i[t] = [ e[t] ]; else i[t].push(e[t]);
            e[t] = void 0;
        }
    }
}

class State$1 {
    constructor(t, ...e) {
        this.charSpec = t;
        this.nextStates = [];
        this.types = null;
        this.isEndpoint = false;
        this.patterns = e;
    }
    get pattern() {
        return this.isEndpoint ? this.patterns[0] : null;
    }
    findChild(t) {
        const e = this.nextStates;
        const i = e.length;
        let s = null;
        let n = 0;
        for (;n < i; ++n) {
            s = e[n];
            if (t.equals(s.charSpec)) return s;
        }
        return null;
    }
    append(t, e) {
        const i = this.patterns;
        if (!i.includes(e)) i.push(e);
        let s = this.findChild(t);
        if (null == s) {
            s = new State$1(t, e);
            this.nextStates.push(s);
            if (t.repeat) s.nextStates.push(s);
        }
        return s;
    }
    findMatches(t, e) {
        const i = [];
        const s = this.nextStates;
        const n = s.length;
        let r = 0;
        let o = null;
        let l = 0;
        let h = 0;
        for (;l < n; ++l) {
            o = s[l];
            if (o.charSpec.has(t)) {
                i.push(o);
                r = o.patterns.length;
                h = 0;
                if (o.charSpec.isSymbol) for (;h < r; ++h) e.next(o.patterns[h]); else for (;h < r; ++h) e.append(o.patterns[h], t);
            }
        }
        return i;
    }
}

class StaticSegment {
    constructor(t) {
        this.text = t;
        const e = this.len = t.length;
        const i = this.specs = [];
        let s = 0;
        for (;e > s; ++s) i.push(new CharSpec(t[s], false, false, false));
    }
    eachChar(t) {
        const e = this.len;
        const i = this.specs;
        let s = 0;
        for (;e > s; ++s) t(i[s]);
    }
}

class DynamicSegment {
    constructor(t) {
        this.text = "PART";
        this.spec = new CharSpec(t, true, false, true);
    }
    eachChar(t) {
        t(this.spec);
    }
}

class SymbolSegment {
    constructor(t) {
        this.text = t;
        this.spec = new CharSpec(t, false, true, false);
    }
    eachChar(t) {
        t(this.spec);
    }
}

class SegmentTypes {
    constructor() {
        this.statics = 0;
        this.dynamics = 0;
        this.symbols = 0;
    }
}

const $t = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.DI.createInterface("ISyntaxInterpreter", (t => t.singleton(SyntaxInterpreter)));

class SyntaxInterpreter {
    constructor() {
        this.rootState = new State$1(null);
        this.initialStates = [ this.rootState ];
    }
    add(t) {
        t = t.slice(0).sort(((t, e) => t.pattern > e.pattern ? 1 : -1));
        const e = t.length;
        let i;
        let s;
        let n;
        let r;
        let o;
        let l;
        let h;
        let a = 0;
        let c;
        while (e > a) {
            i = this.rootState;
            s = t[a];
            n = s.pattern;
            r = new SegmentTypes;
            o = this.parse(s, r);
            l = o.length;
            h = t => {
                i = i.append(t, n);
            };
            for (c = 0; l > c; ++c) o[c].eachChar(h);
            i.types = r;
            i.isEndpoint = true;
            ++a;
        }
    }
    interpret(t) {
        const e = new Interpretation;
        const i = t.length;
        let s = this.initialStates;
        let n = 0;
        let r;
        for (;n < i; ++n) {
            s = this.getNextStates(s, t.charAt(n), e);
            if (0 === s.length) break;
        }
        s = s.filter(Lt);
        if (s.length > 0) {
            s.sort(qt);
            r = s[0];
            if (!r.charSpec.isSymbol) e.next(r.pattern);
            e.pattern = r.pattern;
        }
        return e;
    }
    getNextStates(t, e, i) {
        const s = [];
        let n = null;
        const r = t.length;
        let o = 0;
        for (;o < r; ++o) {
            n = t[o];
            s.push(...n.findMatches(e, i));
        }
        return s;
    }
    parse(t, e) {
        const i = [];
        const s = t.pattern;
        const n = s.length;
        const r = t.symbols;
        let o = 0;
        let l = 0;
        let h = "";
        while (o < n) {
            h = s.charAt(o);
            if (0 === r.length || !r.includes(h)) if (o === l) if ("P" === h && "PART" === s.slice(o, o + 4)) {
                l = o += 4;
                i.push(new DynamicSegment(r));
                ++e.dynamics;
            } else ++o; else ++o; else if (o !== l) {
                i.push(new StaticSegment(s.slice(l, o)));
                ++e.statics;
                l = o;
            } else {
                i.push(new SymbolSegment(s.slice(l, o + 1)));
                ++e.symbols;
                l = ++o;
            }
        }
        if (l !== o) {
            i.push(new StaticSegment(s.slice(l, o)));
            ++e.statics;
        }
        return i;
    }
}

function Lt(t) {
    return t.isEndpoint;
}

function qt(t, e) {
    const i = t.types;
    const s = e.types;
    if (i.statics !== s.statics) return s.statics - i.statics;
    if (i.dynamics !== s.dynamics) return s.dynamics - i.dynamics;
    if (i.symbols !== s.symbols) return s.symbols - i.symbols;
    return 0;
}

class AttrSyntax {
    constructor(t, e, i, s) {
        this.rawName = t;
        this.rawValue = e;
        this.target = i;
        this.command = s;
    }
}

const Mt = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.DI.createInterface("IAttributePattern");

const Ut = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.DI.createInterface("IAttributeParser", (t => t.singleton(AttributeParser)));

class AttributeParser {
    constructor(t, e) {
        this.M = {};
        this.U = t;
        const i = this.F = {};
        const s = e.reduce(((t, e) => {
            const s = jt(e.constructor);
            s.forEach((t => i[t.pattern] = e));
            return t.concat(s);
        }), _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.emptyArray);
        t.add(s);
    }
    parse(t, e) {
        let i = this.M[t];
        if (null == i) i = this.M[t] = this.U.interpret(t);
        const s = i.pattern;
        if (null == s) return new AttrSyntax(t, e, t, null); else return this.F[s][s](t, e, i.parts);
    }
}

AttributeParser.inject = [ $t, (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.all)(Mt) ];

function Ft(...t) {
    return function e(i) {
        return Nt.define(t, i);
    };
}

class AttributePatternResourceDefinition {
    constructor(t) {
        this.Type = t;
        this.name = void 0;
    }
    register(t) {
        _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.Registration.singleton(Mt, this.Type).register(t);
    }
}

const Vt = mt("attribute-pattern");

const _t = "attribute-pattern-definitions";

const jt = t => _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.Protocol.annotation.get(t, _t);

const Nt = Object.freeze({
    name: Vt,
    definitionAnnotationKey: _t,
    define(t, e) {
        const s = new AttributePatternResourceDefinition(e);
        ct(Vt, s, e);
        vt(e, Vt);
        _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.Protocol.annotation.set(e, _t, t);
        pt(e, _t);
        return e;
    },
    getPatternDefinitions: jt
});

let Wt = class DotSeparatedAttributePattern {
    "PART.PART"(t, e, i) {
        return new AttrSyntax(t, e, i[0], i[1]);
    }
    "PART.PART.PART"(t, e, i) {
        return new AttrSyntax(t, e, i[0], i[2]);
    }
};

Wt = ot([ Ft({
    pattern: "PART.PART",
    symbols: "."
}, {
    pattern: "PART.PART.PART",
    symbols: "."
}) ], Wt);

let Ht = class RefAttributePattern {
    ref(t, e, i) {
        return new AttrSyntax(t, e, "element", "ref");
    }
    "PART.ref"(t, e, i) {
        return new AttrSyntax(t, e, i[0], "ref");
    }
};

Ht = ot([ Ft({
    pattern: "ref",
    symbols: ""
}, {
    pattern: "PART.ref",
    symbols: "."
}) ], Ht);

let zt = class ColonPrefixedBindAttributePattern {
    ":PART"(t, e, i) {
        return new AttrSyntax(t, e, i[0], "bind");
    }
};

zt = ot([ Ft({
    pattern: ":PART",
    symbols: ":"
}) ], zt);

let Gt = class AtPrefixedTriggerAttributePattern {
    "@PART"(t, e, i) {
        return new AttrSyntax(t, e, i[0], "trigger");
    }
};

Gt = ot([ Ft({
    pattern: "@PART",
    symbols: "@"
}) ], Gt);

let Xt = class SpreadAttributePattern {
    "...$attrs"(t, e, i) {
        return new AttrSyntax(t, e, "", "...$attrs");
    }
};

Xt = ot([ Ft({
    pattern: "...$attrs",
    symbols: ""
}) ], Xt);

const Kt = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.IPlatform;

const Yt = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.DI.createInterface("ISVGAnalyzer", (t => t.singleton(NoopSVGAnalyzer)));

class NoopSVGAnalyzer {
    isStandardSvgAttribute(t, e) {
        return false;
    }
}

function Qt(t) {
    const e = wt();
    let i;
    for (i of t) e[i] = true;
    return e;
}

class SVGAnalyzer {
    constructor(t) {
        this.V = Object.assign(wt(), {
            a: Qt([ "class", "externalResourcesRequired", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "target", "transform", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space" ]),
            altGlyph: Qt([ "class", "dx", "dy", "externalResourcesRequired", "format", "glyphRef", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "rotate", "style", "systemLanguage", "x", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space", "y" ]),
            altglyph: wt(),
            altGlyphDef: Qt([ "id", "xml:base", "xml:lang", "xml:space" ]),
            altglyphdef: wt(),
            altGlyphItem: Qt([ "id", "xml:base", "xml:lang", "xml:space" ]),
            altglyphitem: wt(),
            animate: Qt([ "accumulate", "additive", "attributeName", "attributeType", "begin", "by", "calcMode", "dur", "end", "externalResourcesRequired", "fill", "from", "id", "keySplines", "keyTimes", "max", "min", "onbegin", "onend", "onload", "onrepeat", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "systemLanguage", "to", "values", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space" ]),
            animateColor: Qt([ "accumulate", "additive", "attributeName", "attributeType", "begin", "by", "calcMode", "dur", "end", "externalResourcesRequired", "fill", "from", "id", "keySplines", "keyTimes", "max", "min", "onbegin", "onend", "onload", "onrepeat", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "systemLanguage", "to", "values", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space" ]),
            animateMotion: Qt([ "accumulate", "additive", "begin", "by", "calcMode", "dur", "end", "externalResourcesRequired", "fill", "from", "id", "keyPoints", "keySplines", "keyTimes", "max", "min", "onbegin", "onend", "onload", "onrepeat", "origin", "path", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "rotate", "systemLanguage", "to", "values", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space" ]),
            animateTransform: Qt([ "accumulate", "additive", "attributeName", "attributeType", "begin", "by", "calcMode", "dur", "end", "externalResourcesRequired", "fill", "from", "id", "keySplines", "keyTimes", "max", "min", "onbegin", "onend", "onload", "onrepeat", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "systemLanguage", "to", "type", "values", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space" ]),
            circle: Qt([ "class", "cx", "cy", "externalResourcesRequired", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "r", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "transform", "xml:base", "xml:lang", "xml:space" ]),
            clipPath: Qt([ "class", "clipPathUnits", "externalResourcesRequired", "id", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "transform", "xml:base", "xml:lang", "xml:space" ]),
            "color-profile": Qt([ "id", "local", "name", "rendering-intent", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space" ]),
            cursor: Qt([ "externalResourcesRequired", "id", "requiredExtensions", "requiredFeatures", "systemLanguage", "x", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space", "y" ]),
            defs: Qt([ "class", "externalResourcesRequired", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "transform", "xml:base", "xml:lang", "xml:space" ]),
            desc: Qt([ "class", "id", "style", "xml:base", "xml:lang", "xml:space" ]),
            ellipse: Qt([ "class", "cx", "cy", "externalResourcesRequired", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "rx", "ry", "style", "systemLanguage", "transform", "xml:base", "xml:lang", "xml:space" ]),
            feBlend: Qt([ "class", "height", "id", "in", "in2", "mode", "result", "style", "width", "x", "xml:base", "xml:lang", "xml:space", "y" ]),
            feColorMatrix: Qt([ "class", "height", "id", "in", "result", "style", "type", "values", "width", "x", "xml:base", "xml:lang", "xml:space", "y" ]),
            feComponentTransfer: Qt([ "class", "height", "id", "in", "result", "style", "width", "x", "xml:base", "xml:lang", "xml:space", "y" ]),
            feComposite: Qt([ "class", "height", "id", "in", "in2", "k1", "k2", "k3", "k4", "operator", "result", "style", "width", "x", "xml:base", "xml:lang", "xml:space", "y" ]),
            feConvolveMatrix: Qt([ "bias", "class", "divisor", "edgeMode", "height", "id", "in", "kernelMatrix", "kernelUnitLength", "order", "preserveAlpha", "result", "style", "targetX", "targetY", "width", "x", "xml:base", "xml:lang", "xml:space", "y" ]),
            feDiffuseLighting: Qt([ "class", "diffuseConstant", "height", "id", "in", "kernelUnitLength", "result", "style", "surfaceScale", "width", "x", "xml:base", "xml:lang", "xml:space", "y" ]),
            feDisplacementMap: Qt([ "class", "height", "id", "in", "in2", "result", "scale", "style", "width", "x", "xChannelSelector", "xml:base", "xml:lang", "xml:space", "y", "yChannelSelector" ]),
            feDistantLight: Qt([ "azimuth", "elevation", "id", "xml:base", "xml:lang", "xml:space" ]),
            feFlood: Qt([ "class", "height", "id", "result", "style", "width", "x", "xml:base", "xml:lang", "xml:space", "y" ]),
            feFuncA: Qt([ "amplitude", "exponent", "id", "intercept", "offset", "slope", "tableValues", "type", "xml:base", "xml:lang", "xml:space" ]),
            feFuncB: Qt([ "amplitude", "exponent", "id", "intercept", "offset", "slope", "tableValues", "type", "xml:base", "xml:lang", "xml:space" ]),
            feFuncG: Qt([ "amplitude", "exponent", "id", "intercept", "offset", "slope", "tableValues", "type", "xml:base", "xml:lang", "xml:space" ]),
            feFuncR: Qt([ "amplitude", "exponent", "id", "intercept", "offset", "slope", "tableValues", "type", "xml:base", "xml:lang", "xml:space" ]),
            feGaussianBlur: Qt([ "class", "height", "id", "in", "result", "stdDeviation", "style", "width", "x", "xml:base", "xml:lang", "xml:space", "y" ]),
            feImage: Qt([ "class", "externalResourcesRequired", "height", "id", "preserveAspectRatio", "result", "style", "width", "x", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space", "y" ]),
            feMerge: Qt([ "class", "height", "id", "result", "style", "width", "x", "xml:base", "xml:lang", "xml:space", "y" ]),
            feMergeNode: Qt([ "id", "xml:base", "xml:lang", "xml:space" ]),
            feMorphology: Qt([ "class", "height", "id", "in", "operator", "radius", "result", "style", "width", "x", "xml:base", "xml:lang", "xml:space", "y" ]),
            feOffset: Qt([ "class", "dx", "dy", "height", "id", "in", "result", "style", "width", "x", "xml:base", "xml:lang", "xml:space", "y" ]),
            fePointLight: Qt([ "id", "x", "xml:base", "xml:lang", "xml:space", "y", "z" ]),
            feSpecularLighting: Qt([ "class", "height", "id", "in", "kernelUnitLength", "result", "specularConstant", "specularExponent", "style", "surfaceScale", "width", "x", "xml:base", "xml:lang", "xml:space", "y" ]),
            feSpotLight: Qt([ "id", "limitingConeAngle", "pointsAtX", "pointsAtY", "pointsAtZ", "specularExponent", "x", "xml:base", "xml:lang", "xml:space", "y", "z" ]),
            feTile: Qt([ "class", "height", "id", "in", "result", "style", "width", "x", "xml:base", "xml:lang", "xml:space", "y" ]),
            feTurbulence: Qt([ "baseFrequency", "class", "height", "id", "numOctaves", "result", "seed", "stitchTiles", "style", "type", "width", "x", "xml:base", "xml:lang", "xml:space", "y" ]),
            filter: Qt([ "class", "externalResourcesRequired", "filterRes", "filterUnits", "height", "id", "primitiveUnits", "style", "width", "x", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space", "y" ]),
            font: Qt([ "class", "externalResourcesRequired", "horiz-adv-x", "horiz-origin-x", "horiz-origin-y", "id", "style", "vert-adv-y", "vert-origin-x", "vert-origin-y", "xml:base", "xml:lang", "xml:space" ]),
            "font-face": Qt([ "accent-height", "alphabetic", "ascent", "bbox", "cap-height", "descent", "font-family", "font-size", "font-stretch", "font-style", "font-variant", "font-weight", "hanging", "id", "ideographic", "mathematical", "overline-position", "overline-thickness", "panose-1", "slope", "stemh", "stemv", "strikethrough-position", "strikethrough-thickness", "underline-position", "underline-thickness", "unicode-range", "units-per-em", "v-alphabetic", "v-hanging", "v-ideographic", "v-mathematical", "widths", "x-height", "xml:base", "xml:lang", "xml:space" ]),
            "font-face-format": Qt([ "id", "string", "xml:base", "xml:lang", "xml:space" ]),
            "font-face-name": Qt([ "id", "name", "xml:base", "xml:lang", "xml:space" ]),
            "font-face-src": Qt([ "id", "xml:base", "xml:lang", "xml:space" ]),
            "font-face-uri": Qt([ "id", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space" ]),
            foreignObject: Qt([ "class", "externalResourcesRequired", "height", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "transform", "width", "x", "xml:base", "xml:lang", "xml:space", "y" ]),
            g: Qt([ "class", "externalResourcesRequired", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "transform", "xml:base", "xml:lang", "xml:space" ]),
            glyph: Qt([ "arabic-form", "class", "d", "glyph-name", "horiz-adv-x", "id", "lang", "orientation", "style", "unicode", "vert-adv-y", "vert-origin-x", "vert-origin-y", "xml:base", "xml:lang", "xml:space" ]),
            glyphRef: Qt([ "class", "dx", "dy", "format", "glyphRef", "id", "style", "x", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space", "y" ]),
            glyphref: wt(),
            hkern: Qt([ "g1", "g2", "id", "k", "u1", "u2", "xml:base", "xml:lang", "xml:space" ]),
            image: Qt([ "class", "externalResourcesRequired", "height", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "preserveAspectRatio", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "transform", "width", "x", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space", "y" ]),
            line: Qt([ "class", "externalResourcesRequired", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "transform", "x1", "x2", "xml:base", "xml:lang", "xml:space", "y1", "y2" ]),
            linearGradient: Qt([ "class", "externalResourcesRequired", "gradientTransform", "gradientUnits", "id", "spreadMethod", "style", "x1", "x2", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space", "y1", "y2" ]),
            marker: Qt([ "class", "externalResourcesRequired", "id", "markerHeight", "markerUnits", "markerWidth", "orient", "preserveAspectRatio", "refX", "refY", "style", "viewBox", "xml:base", "xml:lang", "xml:space" ]),
            mask: Qt([ "class", "externalResourcesRequired", "height", "id", "maskContentUnits", "maskUnits", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "width", "x", "xml:base", "xml:lang", "xml:space", "y" ]),
            metadata: Qt([ "id", "xml:base", "xml:lang", "xml:space" ]),
            "missing-glyph": Qt([ "class", "d", "horiz-adv-x", "id", "style", "vert-adv-y", "vert-origin-x", "vert-origin-y", "xml:base", "xml:lang", "xml:space" ]),
            mpath: Qt([ "externalResourcesRequired", "id", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space" ]),
            path: Qt([ "class", "d", "externalResourcesRequired", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "pathLength", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "transform", "xml:base", "xml:lang", "xml:space" ]),
            pattern: Qt([ "class", "externalResourcesRequired", "height", "id", "patternContentUnits", "patternTransform", "patternUnits", "preserveAspectRatio", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "viewBox", "width", "x", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space", "y" ]),
            polygon: Qt([ "class", "externalResourcesRequired", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "points", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "transform", "xml:base", "xml:lang", "xml:space" ]),
            polyline: Qt([ "class", "externalResourcesRequired", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "points", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "transform", "xml:base", "xml:lang", "xml:space" ]),
            radialGradient: Qt([ "class", "cx", "cy", "externalResourcesRequired", "fx", "fy", "gradientTransform", "gradientUnits", "id", "r", "spreadMethod", "style", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space" ]),
            rect: Qt([ "class", "externalResourcesRequired", "height", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "rx", "ry", "style", "systemLanguage", "transform", "width", "x", "xml:base", "xml:lang", "xml:space", "y" ]),
            script: Qt([ "externalResourcesRequired", "id", "type", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space" ]),
            set: Qt([ "attributeName", "attributeType", "begin", "dur", "end", "externalResourcesRequired", "fill", "id", "max", "min", "onbegin", "onend", "onload", "onrepeat", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "systemLanguage", "to", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space" ]),
            stop: Qt([ "class", "id", "offset", "style", "xml:base", "xml:lang", "xml:space" ]),
            style: Qt([ "id", "media", "title", "type", "xml:base", "xml:lang", "xml:space" ]),
            svg: Qt([ "baseProfile", "class", "contentScriptType", "contentStyleType", "externalResourcesRequired", "height", "id", "onabort", "onactivate", "onclick", "onerror", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onresize", "onscroll", "onunload", "onzoom", "preserveAspectRatio", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "version", "viewBox", "width", "x", "xml:base", "xml:lang", "xml:space", "y", "zoomAndPan" ]),
            switch: Qt([ "class", "externalResourcesRequired", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "transform", "xml:base", "xml:lang", "xml:space" ]),
            symbol: Qt([ "class", "externalResourcesRequired", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "preserveAspectRatio", "style", "viewBox", "xml:base", "xml:lang", "xml:space" ]),
            text: Qt([ "class", "dx", "dy", "externalResourcesRequired", "id", "lengthAdjust", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "rotate", "style", "systemLanguage", "textLength", "transform", "x", "xml:base", "xml:lang", "xml:space", "y" ]),
            textPath: Qt([ "class", "externalResourcesRequired", "id", "lengthAdjust", "method", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "spacing", "startOffset", "style", "systemLanguage", "textLength", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space" ]),
            title: Qt([ "class", "id", "style", "xml:base", "xml:lang", "xml:space" ]),
            tref: Qt([ "class", "dx", "dy", "externalResourcesRequired", "id", "lengthAdjust", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "rotate", "style", "systemLanguage", "textLength", "x", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space", "y" ]),
            tspan: Qt([ "class", "dx", "dy", "externalResourcesRequired", "id", "lengthAdjust", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "rotate", "style", "systemLanguage", "textLength", "x", "xml:base", "xml:lang", "xml:space", "y" ]),
            use: Qt([ "class", "externalResourcesRequired", "height", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "transform", "width", "x", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space", "y" ]),
            view: Qt([ "externalResourcesRequired", "id", "preserveAspectRatio", "viewBox", "viewTarget", "xml:base", "xml:lang", "xml:space", "zoomAndPan" ]),
            vkern: Qt([ "g1", "g2", "id", "k", "u1", "u2", "xml:base", "xml:lang", "xml:space" ])
        });
        this._ = Qt([ "a", "altGlyph", "animate", "animateColor", "circle", "clipPath", "defs", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feFlood", "feGaussianBlur", "feImage", "feMerge", "feMorphology", "feOffset", "feSpecularLighting", "feTile", "feTurbulence", "filter", "font", "foreignObject", "g", "glyph", "glyphRef", "image", "line", "linearGradient", "marker", "mask", "missing-glyph", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "switch", "symbol", "text", "textPath", "tref", "tspan", "use" ]);
        this.j = Qt([ "alignment-baseline", "baseline-shift", "clip-path", "clip-rule", "clip", "color-interpolation-filters", "color-interpolation", "color-profile", "color-rendering", "color", "cursor", "direction", "display", "dominant-baseline", "enable-background", "fill-opacity", "fill-rule", "fill", "filter", "flood-color", "flood-opacity", "font-family", "font-size-adjust", "font-size", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "image-rendering", "kerning", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "mask", "opacity", "overflow", "pointer-events", "shape-rendering", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "stroke", "text-anchor", "text-decoration", "text-rendering", "unicode-bidi", "visibility", "word-spacing", "writing-mode" ]);
        this.SVGElement = t.globalThis.SVGElement;
        const e = t.document.createElement("div");
        e.innerHTML = "<svg><altGlyph /></svg>";
        if ("altglyph" === e.firstElementChild.nodeName) {
            const t = this.V;
            let e = t.altGlyph;
            t.altGlyph = t.altglyph;
            t.altglyph = e;
            e = t.altGlyphDef;
            t.altGlyphDef = t.altglyphdef;
            t.altglyphdef = e;
            e = t.altGlyphItem;
            t.altGlyphItem = t.altglyphitem;
            t.altglyphitem = e;
            e = t.glyphRef;
            t.glyphRef = t.glyphref;
            t.glyphref = e;
        }
    }
    static register(t) {
        return _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.Registration.singleton(Yt, this).register(t);
    }
    isStandardSvgAttribute(t, e) {
        var i;
        if (!(t instanceof this.SVGElement)) return false;
        return true === this._[t.nodeName] && true === this.j[e] || true === (null === (i = this.V[t.nodeName]) || void 0 === i ? void 0 : i[e]);
    }
}

SVGAnalyzer.inject = [ Kt ];

const Zt = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.DI.createInterface("IAttrMapper", (t => t.singleton(AttrMapper)));

class AttrMapper {
    constructor(t) {
        this.svg = t;
        this.fns = [];
        this.N = wt();
        this.W = wt();
        this.useMapping({
            LABEL: {
                for: "htmlFor"
            },
            IMG: {
                usemap: "useMap"
            },
            INPUT: {
                maxlength: "maxLength",
                minlength: "minLength",
                formaction: "formAction",
                formenctype: "formEncType",
                formmethod: "formMethod",
                formnovalidate: "formNoValidate",
                formtarget: "formTarget",
                inputmode: "inputMode"
            },
            TEXTAREA: {
                maxlength: "maxLength"
            },
            TD: {
                rowspan: "rowSpan",
                colspan: "colSpan"
            },
            TH: {
                rowspan: "rowSpan",
                colspan: "colSpan"
            }
        });
        this.useGlobalMapping({
            accesskey: "accessKey",
            contenteditable: "contentEditable",
            tabindex: "tabIndex",
            textcontent: "textContent",
            innerhtml: "innerHTML",
            scrolltop: "scrollTop",
            scrollleft: "scrollLeft",
            readonly: "readOnly"
        });
    }
    static get inject() {
        return [ Yt ];
    }
    useMapping(t) {
        var e;
        var i;
        let s;
        let n;
        let r;
        let o;
        for (r in t) {
            s = t[r];
            n = null !== (e = (i = this.N)[r]) && void 0 !== e ? e : i[r] = wt();
            for (o in s) {
                if (void 0 !== n[o]) throw te(o, r);
                n[o] = s[o];
            }
        }
    }
    useGlobalMapping(t) {
        const e = this.W;
        for (const i in t) {
            if (void 0 !== e[i]) throw te(i, "*");
            e[i] = t[i];
        }
    }
    useTwoWay(t) {
        this.fns.push(t);
    }
    isTwoWay(t, e) {
        return Jt(t, e) || this.fns.length > 0 && this.fns.some((i => i(t, e)));
    }
    map(t, e) {
        var i, s, n;
        return null !== (n = null !== (s = null === (i = this.N[t.nodeName]) || void 0 === i ? void 0 : i[e]) && void 0 !== s ? s : this.W[e]) && void 0 !== n ? n : yt(t, e, this.svg) ? e : null;
    }
}

function Jt(t, e) {
    switch (t.nodeName) {
      case "INPUT":
        switch (t.type) {
          case "checkbox":
          case "radio":
            return "checked" === e;

          default:
            return "value" === e || "files" === e || "value-as-number" === e || "value-as-date" === e;
        }

      case "TEXTAREA":
      case "SELECT":
        return "value" === e;

      default:
        switch (e) {
          case "textcontent":
          case "innerhtml":
            return t.hasAttribute("contenteditable");

          case "scrolltop":
          case "scrollleft":
            return true;

          default:
            return false;
        }
    }
}

function te(t, e) {
    return new Error(`Attribute ${t} has been already registered for ${"*" === e ? "all elements" : `<${e}/>`}`);
}

class CallBinding {
    constructor(t, e, i, s, n) {
        this.sourceExpression = t;
        this.target = e;
        this.targetProperty = i;
        this.locator = n;
        this.interceptor = this;
        this.isBound = false;
        this.targetObserver = s.getAccessor(e, i);
    }
    callSource(t) {
        const e = this.$scope.overrideContext;
        e.$event = t;
        const i = this.sourceExpression.evaluate(8, this.$scope, this.locator, null);
        Reflect.deleteProperty(e, "$event");
        return i;
    }
    $bind(t, e) {
        if (this.isBound) {
            if (this.$scope === e) return;
            this.interceptor.$unbind(2 | t);
        }
        this.$scope = e;
        if (this.sourceExpression.hasBind) this.sourceExpression.bind(t, e, this.interceptor);
        this.targetObserver.setValue((t => this.interceptor.callSource(t)), t, this.target, this.targetProperty);
        this.isBound = true;
    }
    $unbind(t) {
        if (!this.isBound) return;
        if (this.sourceExpression.hasUnbind) this.sourceExpression.unbind(t, this.$scope, this.interceptor);
        this.$scope = void 0;
        this.targetObserver.setValue(null, t, this.target, this.targetProperty);
        this.isBound = false;
    }
    observe(t, e) {
        return;
    }
    handleChange(t, e, i) {
        return;
    }
}

class AttributeObserver {
    constructor(t, e, i) {
        this.type = 2 | 1 | 4;
        this.v = null;
        this.ov = null;
        this.H = false;
        this.f = 0;
        this.o = t;
        this.G = e;
        this.X = i;
    }
    getValue() {
        return this.v;
    }
    setValue(t, e) {
        this.v = t;
        this.H = t !== this.ov;
        if (0 === (256 & e)) this.K();
    }
    K() {
        if (this.H) {
            this.H = false;
            this.ov = this.v;
            switch (this.X) {
              case "class":
                this.o.classList.toggle(this.G, !!this.v);
                break;

              case "style":
                {
                    let t = "";
                    let e = this.v;
                    if (At(e) && e.includes("!important")) {
                        t = "important";
                        e = e.replace("!important", "");
                    }
                    this.o.style.setProperty(this.G, e, t);
                    break;
                }

              default:
                if (null == this.v) this.o.removeAttribute(this.X); else this.o.setAttribute(this.X, String(this.v));
            }
        }
    }
    handleMutation(t) {
        let e = false;
        for (let i = 0, s = t.length; s > i; ++i) {
            const s = t[i];
            if ("attributes" === s.type && s.attributeName === this.G) {
                e = true;
                break;
            }
        }
        if (e) {
            let t;
            switch (this.X) {
              case "class":
                t = this.o.classList.contains(this.G);
                break;

              case "style":
                t = this.o.style.getPropertyValue(this.G);
                break;

              default:
                throw new Error(`AUR0651:${this.X}`);
            }
            if (t !== this.v) {
                this.ov = this.v;
                this.v = t;
                this.H = false;
                this.f = 0;
                this.queue.add(this);
            }
        }
    }
    subscribe(t) {
        if (this.subs.add(t) && 1 === this.subs.count) {
            this.v = this.ov = this.o.getAttribute(this.G);
            ee(this.o.ownerDocument.defaultView.MutationObserver, this.o, this);
        }
    }
    unsubscribe(t) {
        if (this.subs.remove(t) && 0 === this.subs.count) ie(this.o, this);
    }
    flush() {
        re = this.ov;
        this.ov = this.v;
        this.subs.notify(this.v, re, this.f);
    }
}

(0,_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.subscriberCollection)(AttributeObserver);

(0,_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.withFlushQueue)(AttributeObserver);

const ee = (t, e, i) => {
    if (void 0 === e.$eMObs) e.$eMObs = new Set;
    if (void 0 === e.$mObs) (e.$mObs = new t(se)).observe(e, {
        attributes: true
    });
    e.$eMObs.add(i);
};

const ie = (t, e) => {
    const i = t.$eMObs;
    if (i && i.delete(e)) {
        if (0 === i.size) {
            t.$mObs.disconnect();
            t.$mObs = void 0;
        }
        return true;
    }
    return false;
};

const se = t => {
    t[0].target.$eMObs.forEach(ne, t);
};

function ne(t) {
    t.handleMutation(this);
}

let re;

class BindingTargetSubscriber {
    constructor(t) {
        this.b = t;
    }
    handleChange(t, e, i) {
        const s = this.b;
        if (t !== s.sourceExpression.evaluate(i, s.$scope, s.locator, null)) s.updateSource(t, i);
    }
}

const {oneTime: oe, toView: le, fromView: he} = _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingMode;

const ae = le | oe;

const ce = {
    reusable: false,
    preempt: true
};

class AttributeBinding {
    constructor(t, e, i, s, n, r, o) {
        this.sourceExpression = t;
        this.targetAttribute = i;
        this.targetProperty = s;
        this.mode = n;
        this.locator = o;
        this.interceptor = this;
        this.isBound = false;
        this.$scope = null;
        this.task = null;
        this.targetSubscriber = null;
        this.persistentFlags = 0;
        this.value = void 0;
        this.target = e;
        this.p = o.get(Kt);
        this.oL = r;
    }
    updateTarget(t, e) {
        e |= this.persistentFlags;
        this.targetObserver.setValue(t, e, this.target, this.targetProperty);
    }
    updateSource(t, e) {
        e |= this.persistentFlags;
        this.sourceExpression.assign(e, this.$scope, this.locator, t);
    }
    handleChange(t, e, i) {
        if (!this.isBound) return;
        i |= this.persistentFlags;
        const s = this.mode;
        const n = this.interceptor;
        const r = this.sourceExpression;
        const o = this.$scope;
        const l = this.locator;
        const h = this.targetObserver;
        const a = 0 === (2 & i) && (4 & h.type) > 0;
        let c = false;
        let u;
        if (10082 !== r.$kind || this.obs.count > 1) {
            c = 0 === (s & oe);
            if (c) this.obs.version++;
            t = r.evaluate(i, o, l, n);
            if (c) this.obs.clear();
        }
        if (t !== this.value) {
            this.value = t;
            if (a) {
                u = this.task;
                this.task = this.p.domWriteQueue.queueTask((() => {
                    this.task = null;
                    n.updateTarget(t, i);
                }), ce);
                null === u || void 0 === u ? void 0 : u.cancel();
            } else n.updateTarget(t, i);
        }
    }
    $bind(t, e) {
        var i;
        if (this.isBound) {
            if (this.$scope === e) return;
            this.interceptor.$unbind(2 | t);
        }
        this.persistentFlags = 961 & t;
        this.$scope = e;
        let s = this.sourceExpression;
        if (s.hasBind) s.bind(t, e, this.interceptor);
        let n = this.targetObserver;
        if (!n) n = this.targetObserver = new AttributeObserver(this.target, this.targetProperty, this.targetAttribute);
        s = this.sourceExpression;
        const r = this.mode;
        const o = this.interceptor;
        let l = false;
        if (r & ae) {
            l = (r & le) > 0;
            o.updateTarget(this.value = s.evaluate(t, e, this.locator, l ? o : null), t);
        }
        if (r & he) n.subscribe(null !== (i = this.targetSubscriber) && void 0 !== i ? i : this.targetSubscriber = new BindingTargetSubscriber(o));
        this.isBound = true;
    }
    $unbind(t) {
        var e;
        if (!this.isBound) return;
        this.persistentFlags = 0;
        if (this.sourceExpression.hasUnbind) this.sourceExpression.unbind(t, this.$scope, this.interceptor);
        this.$scope = null;
        this.value = void 0;
        if (this.targetSubscriber) this.targetObserver.unsubscribe(this.targetSubscriber);
        null === (e = this.task) || void 0 === e ? void 0 : e.cancel();
        this.task = null;
        this.obs.clearAll();
        this.isBound = false;
    }
}

(0,_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.connectable)(AttributeBinding);

const {toView: ue} = _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingMode;

const fe = {
    reusable: false,
    preempt: true
};

class InterpolationBinding {
    constructor(t, e, i, s, n, r, o) {
        this.interpolation = e;
        this.target = i;
        this.targetProperty = s;
        this.mode = n;
        this.locator = r;
        this.taskQueue = o;
        this.interceptor = this;
        this.isBound = false;
        this.$scope = void 0;
        this.task = null;
        this.oL = t;
        this.targetObserver = t.getAccessor(i, s);
        const l = e.expressions;
        const h = this.partBindings = Array(l.length);
        const a = l.length;
        let c = 0;
        for (;a > c; ++c) h[c] = new InterpolationPartBinding(l[c], i, s, r, t, this);
    }
    updateTarget(t, e) {
        const i = this.partBindings;
        const s = this.interpolation.parts;
        const n = i.length;
        let r = "";
        let o = 0;
        if (1 === n) r = s[0] + i[0].value + s[1]; else {
            r = s[0];
            for (;n > o; ++o) r += i[o].value + s[o + 1];
        }
        const l = this.targetObserver;
        const h = 0 === (2 & e) && (4 & l.type) > 0;
        let a;
        if (h) {
            a = this.task;
            this.task = this.taskQueue.queueTask((() => {
                this.task = null;
                l.setValue(r, e, this.target, this.targetProperty);
            }), fe);
            null === a || void 0 === a ? void 0 : a.cancel();
            a = null;
        } else l.setValue(r, e, this.target, this.targetProperty);
    }
    $bind(t, e) {
        if (this.isBound) {
            if (this.$scope === e) return;
            this.interceptor.$unbind(t);
        }
        this.isBound = true;
        this.$scope = e;
        const i = this.partBindings;
        const s = i.length;
        let n = 0;
        for (;s > n; ++n) i[n].$bind(t, e);
        this.updateTarget(void 0, t);
    }
    $unbind(t) {
        var e;
        if (!this.isBound) return;
        this.isBound = false;
        this.$scope = void 0;
        const i = this.partBindings;
        const s = i.length;
        let n = 0;
        for (;s > n; ++n) i[n].interceptor.$unbind(t);
        null === (e = this.task) || void 0 === e ? void 0 : e.cancel();
        this.task = null;
    }
}

class InterpolationPartBinding {
    constructor(t, e, i, s, n, r) {
        this.sourceExpression = t;
        this.target = e;
        this.targetProperty = i;
        this.locator = s;
        this.owner = r;
        this.interceptor = this;
        this.mode = _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingMode.toView;
        this.value = "";
        this.task = null;
        this.isBound = false;
        this.oL = n;
    }
    handleChange(t, e, i) {
        if (!this.isBound) return;
        const s = this.sourceExpression;
        const n = this.obs;
        const r = 10082 === s.$kind && 1 === n.count;
        let o = false;
        if (!r) {
            o = (this.mode & ue) > 0;
            if (o) n.version++;
            t = s.evaluate(i, this.$scope, this.locator, o ? this.interceptor : null);
            if (o) n.clear();
        }
        if (t != this.value) {
            this.value = t;
            if (t instanceof Array) this.observeCollection(t);
            this.owner.updateTarget(t, i);
        }
    }
    handleCollectionChange(t, e) {
        this.owner.updateTarget(void 0, e);
    }
    $bind(t, e) {
        if (this.isBound) {
            if (this.$scope === e) return;
            this.interceptor.$unbind(t);
        }
        this.isBound = true;
        this.$scope = e;
        if (this.sourceExpression.hasBind) this.sourceExpression.bind(t, e, this.interceptor);
        this.value = this.sourceExpression.evaluate(t, e, this.locator, (this.mode & ue) > 0 ? this.interceptor : null);
        if (this.value instanceof Array) this.observeCollection(this.value);
    }
    $unbind(t) {
        if (!this.isBound) return;
        this.isBound = false;
        if (this.sourceExpression.hasUnbind) this.sourceExpression.unbind(t, this.$scope, this.interceptor);
        this.$scope = void 0;
        this.obs.clearAll();
    }
}

(0,_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.connectable)(InterpolationPartBinding);

class ContentBinding {
    constructor(t, e, i, s, n, r) {
        this.sourceExpression = t;
        this.target = e;
        this.locator = i;
        this.p = n;
        this.strict = r;
        this.interceptor = this;
        this.mode = _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingMode.toView;
        this.value = "";
        this.task = null;
        this.isBound = false;
        this.oL = s;
    }
    updateTarget(t, e) {
        var i, s;
        const n = this.target;
        const r = this.p.Node;
        const o = this.value;
        this.value = t;
        if (o instanceof r) null === (i = o.parentNode) || void 0 === i ? void 0 : i.removeChild(o);
        if (t instanceof r) {
            n.textContent = "";
            null === (s = n.parentNode) || void 0 === s ? void 0 : s.insertBefore(t, n);
        } else n.textContent = String(t);
    }
    handleChange(t, e, i) {
        var s;
        if (!this.isBound) return;
        const n = this.sourceExpression;
        const r = this.obs;
        const o = 10082 === n.$kind && 1 === r.count;
        let l = false;
        if (!o) {
            l = (this.mode & ue) > 0;
            if (l) r.version++;
            i |= this.strict ? 1 : 0;
            t = n.evaluate(i, this.$scope, this.locator, l ? this.interceptor : null);
            if (l) r.clear();
        }
        if (t === this.value) {
            null === (s = this.task) || void 0 === s ? void 0 : s.cancel();
            this.task = null;
            return;
        }
        const h = 0 === (2 & i);
        if (h) this.queueUpdate(t, i); else this.updateTarget(t, i);
    }
    handleCollectionChange() {
        this.queueUpdate(this.value, 0);
    }
    $bind(t, e) {
        if (this.isBound) {
            if (this.$scope === e) return;
            this.interceptor.$unbind(t);
        }
        this.isBound = true;
        this.$scope = e;
        if (this.sourceExpression.hasBind) this.sourceExpression.bind(t, e, this.interceptor);
        t |= this.strict ? 1 : 0;
        const i = this.value = this.sourceExpression.evaluate(t, e, this.locator, (this.mode & ue) > 0 ? this.interceptor : null);
        if (i instanceof Array) this.observeCollection(i);
        this.updateTarget(i, t);
    }
    $unbind(t) {
        var e;
        if (!this.isBound) return;
        this.isBound = false;
        if (this.sourceExpression.hasUnbind) this.sourceExpression.unbind(t, this.$scope, this.interceptor);
        this.$scope = void 0;
        this.obs.clearAll();
        null === (e = this.task) || void 0 === e ? void 0 : e.cancel();
        this.task = null;
    }
    queueUpdate(t, e) {
        const i = this.task;
        this.task = this.p.domWriteQueue.queueTask((() => {
            this.task = null;
            this.updateTarget(t, e);
        }), fe);
        null === i || void 0 === i ? void 0 : i.cancel();
    }
}

(0,_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.connectable)(ContentBinding);

class LetBinding {
    constructor(t, e, i, s, n = false) {
        this.sourceExpression = t;
        this.targetProperty = e;
        this.locator = s;
        this.interceptor = this;
        this.isBound = false;
        this.$scope = void 0;
        this.task = null;
        this.target = null;
        this.oL = i;
        this.Y = n;
    }
    handleChange(t, e, i) {
        if (!this.isBound) return;
        const s = this.target;
        const n = this.targetProperty;
        const r = s[n];
        this.obs.version++;
        t = this.sourceExpression.evaluate(i, this.$scope, this.locator, this.interceptor);
        this.obs.clear();
        if (t !== r) s[n] = t;
    }
    $bind(t, e) {
        if (this.isBound) {
            if (this.$scope === e) return;
            this.interceptor.$unbind(2 | t);
        }
        this.$scope = e;
        this.target = this.Y ? e.bindingContext : e.overrideContext;
        const i = this.sourceExpression;
        if (i.hasBind) i.bind(t, e, this.interceptor);
        this.target[this.targetProperty] = this.sourceExpression.evaluate(2 | t, e, this.locator, this.interceptor);
        this.isBound = true;
    }
    $unbind(t) {
        if (!this.isBound) return;
        const e = this.sourceExpression;
        if (e.hasUnbind) e.unbind(t, this.$scope, this.interceptor);
        this.$scope = void 0;
        this.obs.clearAll();
        this.isBound = false;
    }
}

(0,_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.connectable)(LetBinding);

const {oneTime: de, toView: me, fromView: ve} = _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingMode;

const pe = me | de;

const ge = {
    reusable: false,
    preempt: true
};

class PropertyBinding {
    constructor(t, e, i, s, n, r, o) {
        this.sourceExpression = t;
        this.target = e;
        this.targetProperty = i;
        this.mode = s;
        this.locator = r;
        this.taskQueue = o;
        this.interceptor = this;
        this.isBound = false;
        this.$scope = void 0;
        this.targetObserver = void 0;
        this.persistentFlags = 0;
        this.task = null;
        this.targetSubscriber = null;
        this.oL = n;
    }
    updateTarget(t, e) {
        e |= this.persistentFlags;
        this.targetObserver.setValue(t, e, this.target, this.targetProperty);
    }
    updateSource(t, e) {
        e |= this.persistentFlags;
        this.sourceExpression.assign(e, this.$scope, this.locator, t);
    }
    handleChange(t, e, i) {
        if (!this.isBound) return;
        i |= this.persistentFlags;
        const s = 0 === (2 & i) && (4 & this.targetObserver.type) > 0;
        const n = this.obs;
        let r = false;
        if (10082 !== this.sourceExpression.$kind || n.count > 1) {
            r = this.mode > de;
            if (r) n.version++;
            t = this.sourceExpression.evaluate(i, this.$scope, this.locator, this.interceptor);
            if (r) n.clear();
        }
        if (s) {
            we = this.task;
            this.task = this.taskQueue.queueTask((() => {
                this.interceptor.updateTarget(t, i);
                this.task = null;
            }), ge);
            null === we || void 0 === we ? void 0 : we.cancel();
            we = null;
        } else this.interceptor.updateTarget(t, i);
    }
    $bind(t, e) {
        var i;
        if (this.isBound) {
            if (this.$scope === e) return;
            this.interceptor.$unbind(2 | t);
        }
        t |= 1;
        this.persistentFlags = 961 & t;
        this.$scope = e;
        let s = this.sourceExpression;
        if (s.hasBind) s.bind(t, e, this.interceptor);
        const n = this.oL;
        const r = this.mode;
        let o = this.targetObserver;
        if (!o) {
            if (r & ve) o = n.getObserver(this.target, this.targetProperty); else o = n.getAccessor(this.target, this.targetProperty);
            this.targetObserver = o;
        }
        s = this.sourceExpression;
        const l = this.interceptor;
        const h = (r & me) > 0;
        if (r & pe) l.updateTarget(s.evaluate(t, e, this.locator, h ? l : null), t);
        if (r & ve) {
            o.subscribe(null !== (i = this.targetSubscriber) && void 0 !== i ? i : this.targetSubscriber = new BindingTargetSubscriber(l));
            if (!h) l.updateSource(o.getValue(this.target, this.targetProperty), t);
        }
        this.isBound = true;
    }
    $unbind(t) {
        if (!this.isBound) return;
        this.persistentFlags = 0;
        if (this.sourceExpression.hasUnbind) this.sourceExpression.unbind(t, this.$scope, this.interceptor);
        this.$scope = void 0;
        we = this.task;
        if (this.targetSubscriber) this.targetObserver.unsubscribe(this.targetSubscriber);
        if (null != we) {
            we.cancel();
            we = this.task = null;
        }
        this.obs.clearAll();
        this.isBound = false;
    }
}

(0,_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.connectable)(PropertyBinding);

let we = null;

class RefBinding {
    constructor(t, e, i) {
        this.sourceExpression = t;
        this.target = e;
        this.locator = i;
        this.interceptor = this;
        this.isBound = false;
        this.$scope = void 0;
    }
    $bind(t, e) {
        if (this.isBound) {
            if (this.$scope === e) return;
            this.interceptor.$unbind(2 | t);
        }
        this.$scope = e;
        if (this.sourceExpression.hasBind) this.sourceExpression.bind(t, e, this);
        this.sourceExpression.assign(t, this.$scope, this.locator, this.target);
        this.isBound = true;
    }
    $unbind(t) {
        if (!this.isBound) return;
        let e = this.sourceExpression;
        if (e.evaluate(t, this.$scope, this.locator, null) === this.target) e.assign(t, this.$scope, this.locator, null);
        e = this.sourceExpression;
        if (e.hasUnbind) e.unbind(t, this.$scope, this.interceptor);
        this.$scope = void 0;
        this.isBound = false;
    }
    observe(t, e) {
        return;
    }
    handleChange(t, e, i) {
        return;
    }
}

const be = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.DI.createInterface("IAppTask");

class $AppTask {
    constructor(t, e, i) {
        this.c = void 0;
        this.slot = t;
        this.k = e;
        this.cb = i;
    }
    register(t) {
        return this.c = t.register(_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.Registration.instance(be, this));
    }
    run() {
        const t = this.k;
        const e = this.cb;
        return null === t ? e() : e(this.c.get(t));
    }
}

const xe = Object.freeze({
    beforeCreate: ye("beforeCreate"),
    hydrating: ye("hydrating"),
    hydrated: ye("hydrated"),
    beforeActivate: ye("beforeActivate"),
    afterActivate: ye("afterActivate"),
    beforeDeactivate: ye("beforeDeactivate"),
    afterDeactivate: ye("afterDeactivate")
});

function ye(t) {
    function e(e, i) {
        if (Ct(i)) return new $AppTask(t, e, i);
        return new $AppTask(t, null, e);
    }
    return e;
}

function ke(t, e) {
    let i;
    function s(t, e) {
        if (arguments.length > 1) i.property = e;
        ct(Ae, ChildrenDefinition.create(e, i), t.constructor, e);
        pt(t.constructor, Se.keyFrom(e));
    }
    if (arguments.length > 1) {
        i = {};
        s(t, e);
        return;
    } else if (At(t)) {
        i = {};
        return s;
    }
    i = void 0 === t ? {} : t;
    return s;
}

function Ce(t) {
    return t.startsWith(Ae);
}

const Ae = dt("children-observer");

const Se = Object.freeze({
    name: Ae,
    keyFrom: t => `${Ae}:${t}`,
    from(...t) {
        const e = {};
        const i = Array.isArray;
        function s(t) {
            e[t] = ChildrenDefinition.create(t);
        }
        function n(t, i) {
            e[t] = ChildrenDefinition.create(t, i);
        }
        function r(t) {
            if (i(t)) t.forEach(s); else if (t instanceof ChildrenDefinition) e[t.property] = t; else if (void 0 !== t) Object.keys(t).forEach((e => n(e, t)));
        }
        t.forEach(r);
        return e;
    },
    getAll(t) {
        const e = Ae.length + 1;
        const i = [];
        const n = (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.getPrototypeChain)(t);
        let r = n.length;
        let o = 0;
        let l;
        let h;
        let a;
        while (--r >= 0) {
            a = n[r];
            l = gt(a).filter(Ce);
            h = l.length;
            for (let t = 0; t < h; ++t) i[o++] = ht(Ae, a, l[t].slice(e));
        }
        return i;
    }
});

const Re = {
    childList: true
};

class ChildrenDefinition {
    constructor(t, e, i, s, n, r) {
        this.callback = t;
        this.property = e;
        this.options = i;
        this.query = s;
        this.filter = n;
        this.map = r;
    }
    static create(t, e = {}) {
        var i;
        return new ChildrenDefinition((0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.firstDefined)(e.callback, `${t}Changed`), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.firstDefined)(e.property, t), null !== (i = e.options) && void 0 !== i ? i : Re, e.query, e.filter, e.map);
    }
}

class ChildrenObserver {
    constructor(t, e, i, s, n = Ee, r = Be, o = Ie, l) {
        this.controller = t;
        this.obj = e;
        this.propertyKey = i;
        this.query = n;
        this.filter = r;
        this.map = o;
        this.options = l;
        this.observing = false;
        this.children = void 0;
        this.observer = void 0;
        this.callback = e[s];
        Reflect.defineProperty(this.obj, this.propertyKey, {
            enumerable: true,
            configurable: true,
            get: () => this.getValue(),
            set: () => {}
        });
    }
    getValue() {
        return this.observing ? this.children : this.get();
    }
    setValue(t) {}
    start() {
        var t;
        if (!this.observing) {
            this.observing = true;
            this.children = this.get();
            (null !== (t = this.observer) && void 0 !== t ? t : this.observer = new this.controller.host.ownerDocument.defaultView.MutationObserver((() => {
                this.Z();
            }))).observe(this.controller.host, this.options);
        }
    }
    stop() {
        if (this.observing) {
            this.observing = false;
            this.observer.disconnect();
            this.children = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.emptyArray;
        }
    }
    Z() {
        this.children = this.get();
        if (void 0 !== this.callback) this.callback.call(this.obj);
        this.subs.notify(this.children, void 0, 0);
    }
    get() {
        return De(this.controller, this.query, this.filter, this.map);
    }
}

(0,_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.subscriberCollection)()(ChildrenObserver);

function Ee(t) {
    return t.host.childNodes;
}

function Be(t, e, i) {
    return !!i;
}

function Ie(t, e, i) {
    return i;
}

const Te = {
    optional: true
};

function De(t, e, i, s) {
    var n;
    const r = e(t);
    const o = r.length;
    const l = [];
    let h;
    let a;
    let c;
    let u = 0;
    for (;u < o; ++u) {
        h = r[u];
        a = si.for(h, Te);
        c = null !== (n = null === a || void 0 === a ? void 0 : a.viewModel) && void 0 !== n ? n : null;
        if (i(h, a, c)) l.push(s(h, a, c));
    }
    return l;
}

function Pe(t) {
    return function(e) {
        return Me.define(t, e);
    };
}

function Oe(t) {
    return function(e) {
        return Me.define(At(t) ? {
            isTemplateController: true,
            name: t
        } : {
            isTemplateController: true,
            ...t
        }, e);
    };
}

class CustomAttributeDefinition {
    constructor(t, e, i, s, n, r, o, l, h) {
        this.Type = t;
        this.name = e;
        this.aliases = i;
        this.key = s;
        this.defaultBindingMode = n;
        this.isTemplateController = r;
        this.bindables = o;
        this.noMultiBindings = l;
        this.watches = h;
    }
    get type() {
        return 2;
    }
    static create(t, e) {
        let i;
        let s;
        if (At(t)) {
            i = t;
            s = {
                name: i
            };
        } else {
            i = t.name;
            s = t;
        }
        return new CustomAttributeDefinition(e, (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.firstDefined)(qe(e, "name"), i), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.mergeArrays)(qe(e, "aliases"), s.aliases, e.aliases), Me.keyFrom(i), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.firstDefined)(qe(e, "defaultBindingMode"), s.defaultBindingMode, e.defaultBindingMode, _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingMode.toView), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.firstDefined)(qe(e, "isTemplateController"), s.isTemplateController, e.isTemplateController, false), Bt.from(e, ...Bt.getAll(e), qe(e, "bindables"), e.bindables, s.bindables), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.firstDefined)(qe(e, "noMultiBindings"), s.noMultiBindings, e.noMultiBindings, false), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.mergeArrays)(_e.getAnnotation(e), e.watches));
    }
    register(t) {
        const {Type: e, key: i, aliases: s} = this;
        _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.Registration.transient(i, e).register(t);
        _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.Registration.aliasTo(i, e).register(t);
        (0,_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.registerAliases)(s, Me, i, t);
    }
}

const $e = mt("custom-attribute");

const Le = t => `${$e}:${t}`;

const qe = (t, e) => ht(dt(e), t);

const Me = Object.freeze({
    name: $e,
    keyFrom: Le,
    isType(t) {
        return Ct(t) && at($e, t);
    },
    for(t, e) {
        var i;
        return null !== (i = is(t, Le(e))) && void 0 !== i ? i : void 0;
    },
    define(t, e) {
        const i = CustomAttributeDefinition.create(t, e);
        ct($e, i, i.Type);
        ct($e, i, i);
        vt(e, $e);
        return i.Type;
    },
    getDefinition(t) {
        const e = ht($e, t);
        if (void 0 === e) throw new Error(`AUR0759:${t.name}`);
        return e;
    },
    annotate(t, e, i) {
        ct(dt(e), i, t);
    },
    getAnnotation: qe
});

function Ue(t, e) {
    if (!t) throw new Error("AUR0772");
    return function i(s, n, r) {
        const o = null == n;
        const l = o ? s : s.constructor;
        const h = new WatchDefinition(t, o ? e : r.value);
        if (o) {
            if (!Ct(e) && (null == e || !(e in l.prototype))) throw new Error(`AUR0773:${String(e)}@${l.name}}`);
        } else if (!Ct(null === r || void 0 === r ? void 0 : r.value)) throw new Error(`AUR0774:${String(n)}`);
        _e.add(l, h);
        if (Me.isType(l)) Me.getDefinition(l).watches.push(h);
        if (si.isType(l)) si.getDefinition(l).watches.push(h);
    };
}

class WatchDefinition {
    constructor(t, e) {
        this.expression = t;
        this.callback = e;
    }
}

const Fe = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.emptyArray;

const Ve = dt("watch");

const _e = Object.freeze({
    name: Ve,
    add(t, e) {
        let i = ht(Ve, t);
        if (null == i) ct(Ve, i = [], t);
        i.push(e);
    },
    getAnnotation(t) {
        var e;
        return null !== (e = ht(Ve, t)) && void 0 !== e ? e : Fe;
    }
});

function je(t) {
    return function(e) {
        return si.define(t, e);
    };
}

function Ne(t) {
    if (void 0 === t) return function(t) {
        ei(t, "shadowOptions", {
            mode: "open"
        });
    };
    if (!Ct(t)) return function(e) {
        ei(e, "shadowOptions", t);
    };
    ei(t, "shadowOptions", {
        mode: "open"
    });
}

function We(t) {
    if (void 0 === t) return function(t) {
        ei(t, "containerless", true);
    };
    ei(t, "containerless", true);
}

const He = new WeakMap;

class CustomElementDefinition {
    constructor(t, e, i, s, n, r, o, l, h, a, c, u, f, d, m, v, p, g, w, b, x) {
        this.Type = t;
        this.name = e;
        this.aliases = i;
        this.key = s;
        this.cache = n;
        this.capture = r;
        this.template = o;
        this.instructions = l;
        this.dependencies = h;
        this.injectable = a;
        this.needsCompile = c;
        this.surrogates = u;
        this.bindables = f;
        this.childrenObservers = d;
        this.containerless = m;
        this.isStrictBinding = v;
        this.shadowOptions = p;
        this.hasSlots = g;
        this.enhance = w;
        this.watches = b;
        this.processContent = x;
    }
    get type() {
        return 1;
    }
    static create(t, e = null) {
        if (null === e) {
            const i = t;
            if (At(i)) throw new Error(`AUR0761:${t}`);
            const s = (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.fromDefinitionOrDefault)("name", i, ti);
            if (Ct(i.Type)) e = i.Type; else e = si.generateType((0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.pascalCase)(s));
            return new CustomElementDefinition(e, s, (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.mergeArrays)(i.aliases), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.fromDefinitionOrDefault)("key", i, (() => si.keyFrom(s))), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.fromDefinitionOrDefault)("cache", i, Ge), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.fromDefinitionOrDefault)("capture", i, Ke), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.fromDefinitionOrDefault)("template", i, Xe), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.mergeArrays)(i.instructions), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.mergeArrays)(i.dependencies), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.fromDefinitionOrDefault)("injectable", i, Xe), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.fromDefinitionOrDefault)("needsCompile", i, Ye), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.mergeArrays)(i.surrogates), Bt.from(e, i.bindables), Se.from(i.childrenObservers), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.fromDefinitionOrDefault)("containerless", i, Ke), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.fromDefinitionOrDefault)("isStrictBinding", i, Ke), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.fromDefinitionOrDefault)("shadowOptions", i, Xe), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.fromDefinitionOrDefault)("hasSlots", i, Ke), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.fromDefinitionOrDefault)("enhance", i, Ke), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.fromDefinitionOrDefault)("watches", i, Qe), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.fromAnnotationOrTypeOrDefault)("processContent", e, Xe));
        }
        if (At(t)) return new CustomElementDefinition(e, t, (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.mergeArrays)(ii(e, "aliases"), e.aliases), si.keyFrom(t), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.fromAnnotationOrTypeOrDefault)("cache", e, Ge), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.fromAnnotationOrTypeOrDefault)("capture", e, Ke), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.fromAnnotationOrTypeOrDefault)("template", e, Xe), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.mergeArrays)(ii(e, "instructions"), e.instructions), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.mergeArrays)(ii(e, "dependencies"), e.dependencies), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.fromAnnotationOrTypeOrDefault)("injectable", e, Xe), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.fromAnnotationOrTypeOrDefault)("needsCompile", e, Ye), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.mergeArrays)(ii(e, "surrogates"), e.surrogates), Bt.from(e, ...Bt.getAll(e), ii(e, "bindables"), e.bindables), Se.from(...Se.getAll(e), ii(e, "childrenObservers"), e.childrenObservers), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.fromAnnotationOrTypeOrDefault)("containerless", e, Ke), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.fromAnnotationOrTypeOrDefault)("isStrictBinding", e, Ke), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.fromAnnotationOrTypeOrDefault)("shadowOptions", e, Xe), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.fromAnnotationOrTypeOrDefault)("hasSlots", e, Ke), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.fromAnnotationOrTypeOrDefault)("enhance", e, Ke), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.mergeArrays)(_e.getAnnotation(e), e.watches), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.fromAnnotationOrTypeOrDefault)("processContent", e, Xe));
        const i = (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.fromDefinitionOrDefault)("name", t, ti);
        return new CustomElementDefinition(e, i, (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.mergeArrays)(ii(e, "aliases"), t.aliases, e.aliases), si.keyFrom(i), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.fromAnnotationOrDefinitionOrTypeOrDefault)("cache", t, e, Ge), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.fromAnnotationOrDefinitionOrTypeOrDefault)("capture", t, e, Ke), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.fromAnnotationOrDefinitionOrTypeOrDefault)("template", t, e, Xe), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.mergeArrays)(ii(e, "instructions"), t.instructions, e.instructions), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.mergeArrays)(ii(e, "dependencies"), t.dependencies, e.dependencies), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.fromAnnotationOrDefinitionOrTypeOrDefault)("injectable", t, e, Xe), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.fromAnnotationOrDefinitionOrTypeOrDefault)("needsCompile", t, e, Ye), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.mergeArrays)(ii(e, "surrogates"), t.surrogates, e.surrogates), Bt.from(e, ...Bt.getAll(e), ii(e, "bindables"), e.bindables, t.bindables), Se.from(...Se.getAll(e), ii(e, "childrenObservers"), e.childrenObservers, t.childrenObservers), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.fromAnnotationOrDefinitionOrTypeOrDefault)("containerless", t, e, Ke), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.fromAnnotationOrDefinitionOrTypeOrDefault)("isStrictBinding", t, e, Ke), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.fromAnnotationOrDefinitionOrTypeOrDefault)("shadowOptions", t, e, Xe), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.fromAnnotationOrDefinitionOrTypeOrDefault)("hasSlots", t, e, Ke), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.fromAnnotationOrDefinitionOrTypeOrDefault)("enhance", t, e, Ke), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.mergeArrays)(t.watches, _e.getAnnotation(e), e.watches), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.fromAnnotationOrDefinitionOrTypeOrDefault)("processContent", t, e, Xe));
    }
    static getOrCreate(t) {
        if (t instanceof CustomElementDefinition) return t;
        if (He.has(t)) return He.get(t);
        const e = CustomElementDefinition.create(t);
        He.set(t, e);
        ct(Ze, e, e.Type);
        return e;
    }
    register(t) {
        const {Type: e, key: i, aliases: s} = this;
        if (!t.has(i, false)) {
            _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.Registration.transient(i, e).register(t);
            _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.Registration.aliasTo(i, e).register(t);
            (0,_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.registerAliases)(s, si, i, t);
        }
    }
}

const ze = {
    name: void 0,
    searchParents: false,
    optional: false
};

const Ge = () => 0;

const Xe = () => null;

const Ke = () => false;

const Ye = () => true;

const Qe = () => _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.emptyArray;

const Ze = mt("custom-element");

const Je = t => `${Ze}:${t}`;

const ti = (() => {
    let t = 0;
    return () => `unnamed-${++t}`;
})();

const ei = (t, e, i) => {
    ct(dt(e), i, t);
};

const ii = (t, e) => ht(dt(e), t);

const si = Object.freeze({
    name: Ze,
    keyFrom: Je,
    isType(t) {
        return Ct(t) && at(Ze, t);
    },
    for(t, e = ze) {
        if (void 0 === e.name && true !== e.searchParents) {
            const i = is(t, Ze);
            if (null === i) {
                if (true === e.optional) return null;
                throw new Error("AUR0762");
            }
            return i;
        }
        if (void 0 !== e.name) {
            if (true !== e.searchParents) {
                const i = is(t, Ze);
                if (null === i) throw new Error("AUR0763");
                if (i.is(e.name)) return i;
                return;
            }
            let i = t;
            let s = false;
            while (null !== i) {
                const t = is(i, Ze);
                if (null !== t) {
                    s = true;
                    if (t.is(e.name)) return t;
                }
                i = as(i);
            }
            if (s) return;
            throw new Error("AUR0764");
        }
        let i = t;
        while (null !== i) {
            const t = is(i, Ze);
            if (null !== t) return t;
            i = as(i);
        }
        throw new Error("AUR0765");
    },
    define(t, e) {
        const i = CustomElementDefinition.create(t, e);
        ct(Ze, i, i.Type);
        ct(Ze, i, i);
        vt(i.Type, Ze);
        return i.Type;
    },
    getDefinition(t) {
        const e = ht(Ze, t);
        if (void 0 === e) throw new Error(`AUR0760:${t.name}`);
        return e;
    },
    annotate: ei,
    getAnnotation: ii,
    generateName: ti,
    createInjectable() {
        const t = function(e, i, s) {
            const n = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.DI.getOrCreateAnnotationParamTypes(e);
            n[s] = t;
            return e;
        };
        t.register = function(e) {
            return {
                resolve(e, i) {
                    if (i.has(t, true)) return i.get(t); else return null;
                }
            };
        };
        return t;
    },
    generateType: function() {
        const t = {
            value: "",
            writable: false,
            enumerable: false,
            configurable: true
        };
        const e = {};
        return function(i, s = e) {
            const n = class {};
            t.value = i;
            Reflect.defineProperty(n, "name", t);
            if (s !== e) Object.assign(n.prototype, s);
            return n;
        };
    }()
});

const ni = dt("processContent");

function ri(t) {
    return void 0 === t ? function(t, e, i) {
        ct(ni, oi(t, e), t);
    } : function(e) {
        t = oi(e, t);
        const i = ht(Ze, e);
        if (void 0 !== i) i.processContent = t; else ct(ni, t, e);
        return e;
    };
}

function oi(t, e) {
    if (At(e)) e = t[e];
    if (!Ct(e)) throw new Error(`AUR0766:${typeof e}`);
    return e;
}

class ClassAttributeAccessor {
    constructor(t) {
        this.obj = t;
        this.type = 2 | 4;
        this.value = "";
        this.ov = "";
        this.J = {};
        this.tt = 0;
        this.H = false;
    }
    get doNotCache() {
        return true;
    }
    getValue() {
        return this.value;
    }
    setValue(t, e) {
        this.value = t;
        this.H = t !== this.ov;
        if (0 === (256 & e)) this.K();
    }
    K() {
        if (this.H) {
            this.H = false;
            const t = this.value;
            const e = this.J;
            const i = li(t);
            let s = this.tt;
            this.ov = t;
            if (i.length > 0) this.et(i);
            this.tt += 1;
            if (0 === s) return;
            s -= 1;
            for (const t in e) {
                if (!Object.prototype.hasOwnProperty.call(e, t) || e[t] !== s) continue;
                this.obj.classList.remove(t);
            }
        }
    }
    et(t) {
        const e = this.obj;
        const i = t.length;
        let s = 0;
        let n;
        for (;s < i; s++) {
            n = t[s];
            if (0 === n.length) continue;
            this.J[n] = this.tt;
            e.classList.add(n);
        }
    }
}

function li(t) {
    if (At(t)) return hi(t);
    if ("object" !== typeof t) return _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.emptyArray;
    if (t instanceof Array) {
        const e = t.length;
        if (e > 0) {
            const i = [];
            let s = 0;
            for (;e > s; ++s) i.push(...li(t[s]));
            return i;
        } else return _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.emptyArray;
    }
    const e = [];
    let i;
    for (i in t) if (Boolean(t[i])) if (i.includes(" ")) e.push(...hi(i)); else e.push(i);
    return e;
}

function hi(t) {
    const e = t.match(/\S+/g);
    if (null === e) return _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.emptyArray;
    return e;
}

function ai(...t) {
    return new CSSModulesProcessorRegistry(t);
}

class CSSModulesProcessorRegistry {
    constructor(t) {
        this.modules = t;
    }
    register(t) {
        var e;
        const i = Object.assign({}, ...this.modules);
        const s = Me.define({
            name: "class",
            bindables: [ "value" ]
        }, (e = class CustomAttributeClass {
            constructor(t) {
                this.element = t;
            }
            binding() {
                this.valueChanged();
            }
            valueChanged() {
                if (!this.value) {
                    this.element.className = "";
                    return;
                }
                this.element.className = li(this.value).map((t => i[t] || t)).join(" ");
            }
        }, e.inject = [ ns ], e));
        t.register(s);
    }
}

function ci(...t) {
    return new ShadowDOMRegistry(t);
}

const ui = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.DI.createInterface("IShadowDOMStyleFactory", (t => t.cachedCallback((t => {
    if (AdoptedStyleSheetsStyles.supported(t.get(Kt))) return t.get(AdoptedStyleSheetsStylesFactory);
    return t.get(StyleElementStylesFactory);
}))));

class ShadowDOMRegistry {
    constructor(t) {
        this.css = t;
    }
    register(t) {
        const e = t.get(di);
        const i = t.get(ui);
        t.register(_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.Registration.instance(fi, i.createStyles(this.css, e)));
    }
}

class AdoptedStyleSheetsStylesFactory {
    constructor(t) {
        this.p = t;
        this.cache = new Map;
    }
    createStyles(t, e) {
        return new AdoptedStyleSheetsStyles(this.p, t, this.cache, e);
    }
}

AdoptedStyleSheetsStylesFactory.inject = [ Kt ];

class StyleElementStylesFactory {
    constructor(t) {
        this.p = t;
    }
    createStyles(t, e) {
        return new StyleElementStyles(this.p, t, e);
    }
}

StyleElementStylesFactory.inject = [ Kt ];

const fi = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.DI.createInterface("IShadowDOMStyles");

const di = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.DI.createInterface("IShadowDOMGlobalStyles", (t => t.instance({
    applyTo: _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.noop
})));

class AdoptedStyleSheetsStyles {
    constructor(t, e, i, s = null) {
        this.sharedStyles = s;
        this.styleSheets = e.map((e => {
            let s;
            if (e instanceof t.CSSStyleSheet) s = e; else {
                s = i.get(e);
                if (void 0 === s) {
                    s = new t.CSSStyleSheet;
                    s.replaceSync(e);
                    i.set(e, s);
                }
            }
            return s;
        }));
    }
    static supported(t) {
        return "adoptedStyleSheets" in t.ShadowRoot.prototype;
    }
    applyTo(t) {
        if (null !== this.sharedStyles) this.sharedStyles.applyTo(t);
        t.adoptedStyleSheets = [ ...t.adoptedStyleSheets, ...this.styleSheets ];
    }
}

class StyleElementStyles {
    constructor(t, e, i = null) {
        this.p = t;
        this.localStyles = e;
        this.sharedStyles = i;
    }
    applyTo(t) {
        const e = this.localStyles;
        const i = this.p;
        for (let s = e.length - 1; s > -1; --s) {
            const n = i.document.createElement("style");
            n.innerHTML = e[s];
            t.prepend(n);
        }
        if (null !== this.sharedStyles) this.sharedStyles.applyTo(t);
    }
}

const mi = {
    shadowDOM(t) {
        return xe.beforeCreate(_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.IContainer, (e => {
            if (null != t.sharedStyles) {
                const i = e.get(ui);
                e.register(_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.Registration.instance(di, i.createStyles(t.sharedStyles, null)));
            }
        }));
    }
};

const {enter: vi, exit: pi} = _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.ConnectableSwitcher;

const {wrap: gi, unwrap: wi} = _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.ProxyObservable;

class ComputedWatcher {
    constructor(t, e, i, s, n) {
        this.obj = t;
        this.get = i;
        this.cb = s;
        this.useProxy = n;
        this.interceptor = this;
        this.value = void 0;
        this.isBound = false;
        this.running = false;
        this.oL = e;
    }
    handleChange() {
        this.run();
    }
    handleCollectionChange() {
        this.run();
    }
    $bind() {
        if (this.isBound) return;
        this.isBound = true;
        this.compute();
    }
    $unbind() {
        if (!this.isBound) return;
        this.isBound = false;
        this.obs.clearAll();
    }
    run() {
        if (!this.isBound || this.running) return;
        const t = this.obj;
        const e = this.value;
        const i = this.compute();
        if (!Object.is(i, e)) this.cb.call(t, i, e, t);
    }
    compute() {
        this.running = true;
        this.obs.version++;
        try {
            vi(this);
            return this.value = wi(this.get.call(void 0, this.useProxy ? gi(this.obj) : this.obj, this));
        } finally {
            this.obs.clear();
            this.running = false;
            pi(this);
        }
    }
}

class ExpressionWatcher {
    constructor(t, e, i, s, n) {
        this.scope = t;
        this.locator = e;
        this.oL = i;
        this.expression = s;
        this.callback = n;
        this.interceptor = this;
        this.isBound = false;
        this.obj = t.bindingContext;
    }
    handleChange(t) {
        const e = this.expression;
        const i = this.obj;
        const s = this.value;
        const n = 10082 === e.$kind && 1 === this.obs.count;
        if (!n) {
            this.obs.version++;
            t = e.evaluate(0, this.scope, this.locator, this);
            this.obs.clear();
        }
        if (!Object.is(t, s)) {
            this.value = t;
            this.callback.call(i, t, s, i);
        }
    }
    $bind() {
        if (this.isBound) return;
        this.isBound = true;
        this.obs.version++;
        this.value = this.expression.evaluate(0, this.scope, this.locator, this);
        this.obs.clear();
    }
    $unbind() {
        if (!this.isBound) return;
        this.isBound = false;
        this.obs.clearAll();
        this.value = void 0;
    }
}

(0,_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.connectable)(ComputedWatcher);

(0,_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.connectable)(ExpressionWatcher);

const bi = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.DI.createInterface("ILifecycleHooks");

class LifecycleHooksEntry {
    constructor(t, e) {
        this.definition = t;
        this.instance = e;
    }
}

class LifecycleHooksDefinition {
    constructor(t, e) {
        this.Type = t;
        this.propertyNames = e;
    }
    static create(t, e) {
        const i = new Set;
        let s = e.prototype;
        while (s !== Object.prototype) {
            for (const t of Object.getOwnPropertyNames(s)) if ("constructor" !== t) i.add(t);
            s = Object.getPrototypeOf(s);
        }
        return new LifecycleHooksDefinition(e, i);
    }
    register(t) {
        _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.Registration.singleton(bi, this.Type).register(t);
    }
}

const xi = new WeakMap;

const yi = dt("lifecycle-hooks");

const ki = Object.freeze({
    name: yi,
    define(t, e) {
        const i = LifecycleHooksDefinition.create(t, e);
        ct(yi, i, e);
        vt(e, yi);
        return i.Type;
    },
    resolve(t) {
        let e = xi.get(t);
        if (void 0 === e) {
            e = new LifecycleHooksLookupImpl;
            const i = t.root;
            const s = i.id === t.id ? t.getAll(bi) : t.has(bi, false) ? [ ...i.getAll(bi), ...t.getAll(bi) ] : i.getAll(bi);
            let n;
            let r;
            let o;
            let l;
            let h;
            for (n of s) {
                r = ht(yi, n.constructor);
                o = new LifecycleHooksEntry(r, n);
                for (l of r.propertyNames) {
                    h = e[l];
                    if (void 0 === h) e[l] = [ o ]; else h.push(o);
                }
            }
        }
        return e;
    }
});

class LifecycleHooksLookupImpl {}

function Ci() {
    return function t(e) {
        return ki.define({}, e);
    };
}

const Ai = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.DI.createInterface("IViewFactory");

class ViewFactory {
    constructor(t, e) {
        this.isCaching = false;
        this.cache = null;
        this.cacheSize = -1;
        this.name = e.name;
        this.container = t;
        this.def = e;
    }
    setCacheSize(t, e) {
        if (t) {
            if ("*" === t) t = ViewFactory.maxCacheSize; else if (At(t)) t = parseInt(t, 10);
            if (-1 === this.cacheSize || !e) this.cacheSize = t;
        }
        if (this.cacheSize > 0) this.cache = []; else this.cache = null;
        this.isCaching = this.cacheSize > 0;
    }
    canReturnToCache(t) {
        return null != this.cache && this.cache.length < this.cacheSize;
    }
    tryReturnToCache(t) {
        if (this.canReturnToCache(t)) {
            this.cache.push(t);
            return true;
        }
        return false;
    }
    create(t) {
        const e = this.cache;
        let i;
        if (null != e && e.length > 0) {
            i = e.pop();
            return i;
        }
        i = Controller.$view(this, t);
        return i;
    }
}

ViewFactory.maxCacheSize = 65535;

const Si = new WeakSet;

function Ri(t) {
    return !Si.has(t);
}

function Ei(t) {
    Si.add(t);
    return CustomElementDefinition.create(t);
}

const Bi = mt("views");

const Ii = Object.freeze({
    name: Bi,
    has(t) {
        return Ct(t) && (at(Bi, t) || "$views" in t);
    },
    get(t) {
        if (Ct(t) && "$views" in t) {
            const e = t.$views;
            const i = e.filter(Ri).map(Ei);
            for (const e of i) Ii.add(t, e);
        }
        let e = ht(Bi, t);
        if (void 0 === e) ct(Bi, e = [], t);
        return e;
    },
    add(t, e) {
        const i = CustomElementDefinition.create(e);
        let s = ht(Bi, t);
        if (void 0 === s) ct(Bi, s = [ i ], t); else s.push(i);
        return s;
    }
});

function Ti(t) {
    return function(e) {
        Ii.add(e, t);
    };
}

const Di = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.DI.createInterface("IViewLocator", (t => t.singleton(ViewLocator)));

class ViewLocator {
    constructor() {
        this.it = new WeakMap;
        this.st = new Map;
    }
    getViewComponentForObject(t, e) {
        if (t) {
            const i = Ii.has(t.constructor) ? Ii.get(t.constructor) : [];
            const s = Ct(e) ? e(t, i) : this.nt(i, e);
            return this.rt(t, i, s);
        }
        return null;
    }
    rt(t, e, i) {
        let s = this.it.get(t);
        let n;
        if (void 0 === s) {
            s = {};
            this.it.set(t, s);
        } else n = s[i];
        if (void 0 === n) {
            const r = this.ot(t, e, i);
            n = si.define(si.getDefinition(r), class extends r {
                constructor() {
                    super(t);
                }
            });
            s[i] = n;
        }
        return n;
    }
    ot(t, e, i) {
        let s = this.st.get(t.constructor);
        let n;
        if (void 0 === s) {
            s = {};
            this.st.set(t.constructor, s);
        } else n = s[i];
        if (void 0 === n) {
            n = si.define(this.lt(e, i), class {
                constructor(t) {
                    this.viewModel = t;
                }
                define(t, e, i) {
                    const s = this.viewModel;
                    t.scope = _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.Scope.fromParent(t.scope, s);
                    if (void 0 !== s.define) return s.define(t, e, i);
                }
            });
            const r = n.prototype;
            if ("hydrating" in t) r.hydrating = function t(e) {
                this.viewModel.hydrating(e);
            };
            if ("hydrated" in t) r.hydrated = function t(e) {
                this.viewModel.hydrated(e);
            };
            if ("created" in t) r.created = function t(e) {
                this.viewModel.created(e);
            };
            if ("binding" in t) r.binding = function t(e, i, s) {
                return this.viewModel.binding(e, i, s);
            };
            if ("bound" in t) r.bound = function t(e, i, s) {
                return this.viewModel.bound(e, i, s);
            };
            if ("attaching" in t) r.attaching = function t(e, i, s) {
                return this.viewModel.attaching(e, i, s);
            };
            if ("attached" in t) r.attached = function t(e, i) {
                return this.viewModel.attached(e, i);
            };
            if ("detaching" in t) r.detaching = function t(e, i, s) {
                return this.viewModel.detaching(e, i, s);
            };
            if ("unbinding" in t) r.unbinding = function t(e, i, s) {
                return this.viewModel.unbinding(e, i, s);
            };
            if ("dispose" in t) r.dispose = function t() {
                this.viewModel.dispose();
            };
            s[i] = n;
        }
        return n;
    }
    nt(t, e) {
        if (e) return e;
        if (1 === t.length) return t[0].name;
        return "default-view";
    }
    lt(t, e) {
        const i = t.find((t => t.name === e));
        if (void 0 === i) throw new Error(`Could not find view: ${e}`);
        return i;
    }
}

const Pi = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.DI.createInterface("IRendering", (t => t.singleton(Rendering)));

class Rendering {
    constructor(t) {
        this.ht = new WeakMap;
        this.at = new WeakMap;
        this.ct = (this.ut = t.root).get(Kt);
        this.ft = new FragmentNodeSequence(this.ct, this.ct.document.createDocumentFragment());
    }
    get renderers() {
        return null == this.rs ? this.rs = this.ut.getAll(Ss, false).reduce(((t, e) => {
            t[e.instructionType] = e;
            return t;
        }), wt()) : this.rs;
    }
    compile(t, e, i) {
        if (false !== t.needsCompile) {
            const s = this.ht;
            const n = e.get(As);
            let r = s.get(t);
            if (null == r) s.set(t, r = n.compile(t, e, i)); else e.register(...r.dependencies);
            return r;
        }
        return t;
    }
    getViewFactory(t, e) {
        return new ViewFactory(e, CustomElementDefinition.getOrCreate(t));
    }
    createNodes(t) {
        if (true === t.enhance) return new FragmentNodeSequence(this.ct, t.template);
        let e;
        const i = this.at;
        if (i.has(t)) e = i.get(t); else {
            const s = this.ct;
            const n = s.document;
            const r = t.template;
            let o;
            if (null === r) e = null; else if (r instanceof s.Node) if ("TEMPLATE" === r.nodeName) e = n.adoptNode(r.content); else (e = n.adoptNode(n.createDocumentFragment())).appendChild(r.cloneNode(true)); else {
                o = n.createElement("template");
                if (At(r)) o.innerHTML = r;
                n.adoptNode(e = o.content);
            }
            i.set(t, e);
        }
        return null == e ? this.ft : new FragmentNodeSequence(this.ct, e.cloneNode(true));
    }
    render(t, e, i, s) {
        const n = i.instructions;
        const r = this.renderers;
        const o = e.length;
        if (e.length !== n.length) throw new Error(`AUR0757:${o}<>${n.length}`);
        let l = 0;
        let h = 0;
        let a = 0;
        let c;
        let u;
        let f;
        if (o > 0) while (o > l) {
            c = n[l];
            f = e[l];
            h = 0;
            a = c.length;
            while (a > h) {
                u = c[h];
                r[u.type].render(t, f, u);
                ++h;
            }
            ++l;
        }
        if (void 0 !== s && null !== s) {
            c = i.surrogates;
            if ((a = c.length) > 0) {
                h = 0;
                while (a > h) {
                    u = c[h];
                    r[u.type].render(t, s, u);
                    ++h;
                }
            }
        }
    }
}

Rendering.inject = [ _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.IContainer ];

var Oi;

(function(t) {
    t[t["none"] = 0] = "none";
    t[t["host"] = 1] = "host";
    t[t["shadowRoot"] = 2] = "shadowRoot";
    t[t["location"] = 3] = "location";
})(Oi || (Oi = {}));

const $i = {
    optional: true
};

const Li = new WeakMap;

class Controller {
    constructor(t, e, i, s, n, r) {
        this.container = t;
        this.vmKind = e;
        this.definition = i;
        this.viewFactory = s;
        this.viewModel = n;
        this.host = r;
        this.id = (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.nextId)("au$component");
        this.head = null;
        this.tail = null;
        this.next = null;
        this.parent = null;
        this.bindings = null;
        this.children = null;
        this.hasLockedScope = false;
        this.isStrictBinding = false;
        this.scope = null;
        this.isBound = false;
        this.hostController = null;
        this.mountTarget = 0;
        this.shadowRoot = null;
        this.nodes = null;
        this.location = null;
        this.lifecycleHooks = null;
        this.state = 0;
        this.dt = false;
        this.vt = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.emptyArray;
        this.flags = 0;
        this.$initiator = null;
        this.$flags = 0;
        this.$resolve = void 0;
        this.$reject = void 0;
        this.$promise = void 0;
        this.gt = 0;
        this.wt = 0;
        this.bt = 0;
        this.r = t.root.get(Pi);
        switch (e) {
          case 1:
          case 0:
            this.hooks = new HooksDefinition(n);
            break;

          case 2:
            this.hooks = HooksDefinition.none;
            break;
        }
    }
    get isActive() {
        return (this.state & (1 | 2)) > 0 && 0 === (4 & this.state);
    }
    get name() {
        var t;
        if (null === this.parent) switch (this.vmKind) {
          case 1:
            return `[${this.definition.name}]`;

          case 0:
            return this.definition.name;

          case 2:
            return this.viewFactory.name;
        }
        switch (this.vmKind) {
          case 1:
            return `${this.parent.name}>[${this.definition.name}]`;

          case 0:
            return `${this.parent.name}>${this.definition.name}`;

          case 2:
            return this.viewFactory.name === (null === (t = this.parent.definition) || void 0 === t ? void 0 : t.name) ? `${this.parent.name}[view]` : `${this.parent.name}[view:${this.viewFactory.name}]`;
        }
    }
    static getCached(t) {
        return Li.get(t);
    }
    static getCachedOrThrow(t) {
        const e = Controller.getCached(t);
        if (void 0 === e) throw new Error(`AUR0500:${t}`);
        return e;
    }
    static $el(t, e, i, s, n = void 0) {
        if (Li.has(e)) return Li.get(e);
        n = null !== n && void 0 !== n ? n : si.getDefinition(e.constructor);
        const r = new Controller(t, 0, n, null, e, i);
        const o = t.get((0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.optional)(Ki));
        if (n.dependencies.length > 0) t.register(...n.dependencies);
        t.registerResolver(Ki, new _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.InstanceProvider("IHydrationContext", new HydrationContext(r, s, o)));
        Li.set(e, r);
        if (null == s || false !== s.hydrate) r.xt(s, o);
        return r;
    }
    static $attr(t, e, i, s) {
        if (Li.has(e)) return Li.get(e);
        s = null !== s && void 0 !== s ? s : Me.getDefinition(e.constructor);
        const n = new Controller(t, 1, s, null, e, i);
        Li.set(e, n);
        n.yt();
        return n;
    }
    static $view(t, e = void 0) {
        const i = new Controller(t.container, 2, null, t, null, null);
        i.parent = null !== e && void 0 !== e ? e : null;
        i.kt();
        return i;
    }
    xt(t, e) {
        const i = this.container;
        const s = this.flags;
        const n = this.viewModel;
        let r = this.definition;
        this.scope = _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.Scope.create(n, null, true);
        if (r.watches.length > 0) _i(this, i, r, n);
        Mi(this, r, s, n);
        this.vt = Ui(this, r, n);
        if (this.hooks.hasDefine) {
            const t = n.define(this, e, r);
            if (void 0 !== t && t !== r) r = CustomElementDefinition.getOrCreate(t);
        }
        this.lifecycleHooks = ki.resolve(i);
        r.register(i);
        if (null !== r.injectable) i.registerResolver(r.injectable, new _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.InstanceProvider("definition.injectable", n));
        if (null == t || false !== t.hydrate) {
            this.Ct(t);
            this.At();
        }
    }
    Ct(t) {
        if (this.hooks.hasHydrating) this.viewModel.hydrating(this);
        const e = this.St = this.r.compile(this.definition, this.container, t);
        const {shadowOptions: i, isStrictBinding: s, hasSlots: n, containerless: r} = e;
        this.isStrictBinding = s;
        if (null !== (this.hostController = si.for(this.host, $i))) this.host = this.container.root.get(Kt).document.createElement(this.definition.name);
        ss(this.host, si.name, this);
        ss(this.host, this.definition.key, this);
        if (null !== i || n) {
            if (r) throw new Error("AUR0501");
            ss(this.shadowRoot = this.host.attachShadow(null !== i && void 0 !== i ? i : Wi), si.name, this);
            ss(this.shadowRoot, this.definition.key, this);
            this.mountTarget = 2;
        } else if (r) {
            ss(this.location = us(this.host), si.name, this);
            ss(this.location, this.definition.key, this);
            this.mountTarget = 3;
        } else this.mountTarget = 1;
        this.viewModel.$controller = this;
        this.nodes = this.r.createNodes(e);
        if (this.hooks.hasHydrated) this.viewModel.hydrated(this);
    }
    At() {
        this.r.render(this, this.nodes.findTargets(), this.St, this.host);
        if (this.hooks.hasCreated) this.viewModel.created(this);
    }
    yt() {
        const t = this.definition;
        const e = this.viewModel;
        if (t.watches.length > 0) _i(this, this.container, t, e);
        Mi(this, t, this.flags, e);
        e.$controller = this;
        this.lifecycleHooks = ki.resolve(this.container);
        if (this.hooks.hasCreated) this.viewModel.created(this);
    }
    kt() {
        this.St = this.r.compile(this.viewFactory.def, this.container, null);
        this.isStrictBinding = this.St.isStrictBinding;
        this.r.render(this, (this.nodes = this.r.createNodes(this.St)).findTargets(), this.St, void 0);
    }
    activate(t, e, i, s) {
        switch (this.state) {
          case 0:
          case 8:
            if (!(null === e || e.isActive)) return;
            this.state = 1;
            break;

          case 2:
            return;

          case 32:
            throw new Error(`AUR0502:${this.name}`);

          default:
            throw new Error(`AUR0503:${this.name} ${Gi(this.state)}`);
        }
        this.parent = e;
        i |= 2;
        switch (this.vmKind) {
          case 0:
            this.scope.parentScope = null !== s && void 0 !== s ? s : null;
            break;

          case 1:
            this.scope = null !== s && void 0 !== s ? s : null;
            break;

          case 2:
            if (void 0 === s || null === s) throw new Error("AUR0504");
            if (!this.hasLockedScope) this.scope = s;
            break;
        }
        if (this.isStrictBinding) i |= 1;
        this.$initiator = t;
        this.$flags = i;
        this.Rt();
        if (this.hooks.hasBinding) {
            const t = this.viewModel.binding(this.$initiator, this.parent, this.$flags);
            if (t instanceof Promise) {
                this.Et();
                t.then((() => {
                    this.bind();
                })).catch((t => {
                    this.Bt(t);
                }));
                return this.$promise;
            }
        }
        this.bind();
        return this.$promise;
    }
    bind() {
        let t = 0;
        let e = this.vt.length;
        let i;
        if (e > 0) while (e > t) {
            this.vt[t].start();
            ++t;
        }
        if (null !== this.bindings) {
            t = 0;
            e = this.bindings.length;
            while (e > t) {
                this.bindings[t].$bind(this.$flags, this.scope);
                ++t;
            }
        }
        if (this.hooks.hasBound) {
            i = this.viewModel.bound(this.$initiator, this.parent, this.$flags);
            if (i instanceof Promise) {
                this.Et();
                i.then((() => {
                    this.isBound = true;
                    this.It();
                })).catch((t => {
                    this.Bt(t);
                }));
                return;
            }
        }
        this.isBound = true;
        this.It();
    }
    Tt(...t) {
        switch (this.mountTarget) {
          case 1:
            this.host.append(...t);
            break;

          case 2:
            this.shadowRoot.append(...t);
            break;

          case 3:
            {
                let e = 0;
                for (;e < t.length; ++e) this.location.parentNode.insertBefore(t[e], this.location);
                break;
            }
        }
    }
    It() {
        if (null !== this.hostController) switch (this.mountTarget) {
          case 1:
          case 2:
            this.hostController.Tt(this.host);
            break;

          case 3:
            this.hostController.Tt(this.location.$start, this.location);
            break;
        }
        switch (this.mountTarget) {
          case 1:
            this.nodes.appendTo(this.host, null != this.definition && this.definition.enhance);
            break;

          case 2:
            {
                const t = this.container;
                const e = t.has(fi, false) ? t.get(fi) : t.get(di);
                e.applyTo(this.shadowRoot);
                this.nodes.appendTo(this.shadowRoot);
                break;
            }

          case 3:
            this.nodes.insertBefore(this.location);
            break;
        }
        if (this.hooks.hasAttaching) {
            const t = this.viewModel.attaching(this.$initiator, this.parent, this.$flags);
            if (t instanceof Promise) {
                this.Et();
                this.Rt();
                t.then((() => {
                    this.Dt();
                })).catch((t => {
                    this.Bt(t);
                }));
            }
        }
        if (null !== this.children) {
            let t = 0;
            for (;t < this.children.length; ++t) void this.children[t].activate(this.$initiator, this, this.$flags, this.scope);
        }
        this.Dt();
    }
    deactivate(t, e, i) {
        switch (~16 & this.state) {
          case 2:
            this.state = 4;
            break;

          case 0:
          case 8:
          case 32:
          case 8 | 32:
            return;

          default:
            throw new Error(`AUR0505:${this.name} ${Gi(this.state)}`);
        }
        this.$initiator = t;
        this.$flags = i;
        if (t === this) this.Pt();
        let s = 0;
        if (this.vt.length) for (;s < this.vt.length; ++s) this.vt[s].stop();
        if (null !== this.children) for (s = 0; s < this.children.length; ++s) void this.children[s].deactivate(t, this, i);
        if (this.hooks.hasDetaching) {
            const e = this.viewModel.detaching(this.$initiator, this.parent, this.$flags);
            if (e instanceof Promise) {
                this.Et();
                t.Pt();
                e.then((() => {
                    t.Ot();
                })).catch((e => {
                    t.Bt(e);
                }));
            }
        }
        if (null === t.head) t.head = this; else t.tail.next = this;
        t.tail = this;
        if (t !== this) return;
        this.Ot();
        return this.$promise;
    }
    removeNodes() {
        switch (this.vmKind) {
          case 0:
          case 2:
            this.nodes.remove();
            this.nodes.unlink();
        }
        if (null !== this.hostController) switch (this.mountTarget) {
          case 1:
          case 2:
            this.host.remove();
            break;

          case 3:
            this.location.$start.remove();
            this.location.remove();
            break;
        }
    }
    unbind() {
        const t = 4 | this.$flags;
        let e = 0;
        if (null !== this.bindings) for (;e < this.bindings.length; ++e) this.bindings[e].$unbind(t);
        this.parent = null;
        switch (this.vmKind) {
          case 1:
            this.scope = null;
            break;

          case 2:
            if (!this.hasLockedScope) this.scope = null;
            if (16 === (16 & this.state) && !this.viewFactory.tryReturnToCache(this) && this.$initiator === this) this.dispose();
            break;

          case 0:
            this.scope.parentScope = null;
            break;
        }
        if (32 === (32 & t) && this.$initiator === this) this.dispose();
        this.state = 32 & this.state | 8;
        this.$initiator = null;
        this.$t();
    }
    Et() {
        if (void 0 === this.$promise) {
            this.$promise = new Promise(((t, e) => {
                this.$resolve = t;
                this.$reject = e;
            }));
            if (this.$initiator !== this) this.parent.Et();
        }
    }
    $t() {
        if (void 0 !== this.$promise) {
            Qi = this.$resolve;
            this.$resolve = this.$reject = this.$promise = void 0;
            Qi();
            Qi = void 0;
        }
    }
    Bt(t) {
        if (void 0 !== this.$promise) {
            Zi = this.$reject;
            this.$resolve = this.$reject = this.$promise = void 0;
            Zi(t);
            Zi = void 0;
        }
        if (this.$initiator !== this) this.parent.Bt(t);
    }
    Rt() {
        ++this.gt;
        if (this.$initiator !== this) this.parent.Rt();
    }
    Dt() {
        if (0 === --this.gt) {
            if (this.hooks.hasAttached) {
                Ji = this.viewModel.attached(this.$initiator, this.$flags);
                if (Ji instanceof Promise) {
                    this.Et();
                    Ji.then((() => {
                        this.state = 2;
                        this.$t();
                        if (this.$initiator !== this) this.parent.Dt();
                    })).catch((t => {
                        this.Bt(t);
                    }));
                    Ji = void 0;
                    return;
                }
                Ji = void 0;
            }
            this.state = 2;
            this.$t();
        }
        if (this.$initiator !== this) this.parent.Dt();
    }
    Pt() {
        ++this.wt;
    }
    Ot() {
        if (0 === --this.wt) {
            this.Lt();
            this.removeNodes();
            let t = this.$initiator.head;
            while (null !== t) {
                if (t !== this) {
                    if (t.debug) t.logger.trace(`detach()`);
                    t.removeNodes();
                }
                if (t.hooks.hasUnbinding) {
                    if (t.debug) t.logger.trace("unbinding()");
                    Ji = t.viewModel.unbinding(t.$initiator, t.parent, t.$flags);
                    if (Ji instanceof Promise) {
                        this.Et();
                        this.Lt();
                        Ji.then((() => {
                            this.qt();
                        })).catch((t => {
                            this.Bt(t);
                        }));
                    }
                    Ji = void 0;
                }
                t = t.next;
            }
            this.qt();
        }
    }
    Lt() {
        ++this.bt;
    }
    qt() {
        if (0 === --this.bt) {
            let t = this.$initiator.head;
            let e = null;
            while (null !== t) {
                if (t !== this) {
                    t.isBound = false;
                    t.unbind();
                }
                e = t.next;
                t.next = null;
                t = e;
            }
            this.head = this.tail = null;
            this.isBound = false;
            this.unbind();
        }
    }
    addBinding(t) {
        if (null === this.bindings) this.bindings = [ t ]; else this.bindings[this.bindings.length] = t;
    }
    addChild(t) {
        if (null === this.children) this.children = [ t ]; else this.children[this.children.length] = t;
    }
    is(t) {
        switch (this.vmKind) {
          case 1:
            return Me.getDefinition(this.viewModel.constructor).name === t;

          case 0:
            return si.getDefinition(this.viewModel.constructor).name === t;

          case 2:
            return this.viewFactory.name === t;
        }
    }
    lockScope(t) {
        this.scope = t;
        this.hasLockedScope = true;
    }
    setHost(t) {
        if (0 === this.vmKind) {
            ss(t, si.name, this);
            ss(t, this.definition.key, this);
        }
        this.host = t;
        this.mountTarget = 1;
        return this;
    }
    setShadowRoot(t) {
        if (0 === this.vmKind) {
            ss(t, si.name, this);
            ss(t, this.definition.key, this);
        }
        this.shadowRoot = t;
        this.mountTarget = 2;
        return this;
    }
    setLocation(t) {
        if (0 === this.vmKind) {
            ss(t, si.name, this);
            ss(t, this.definition.key, this);
        }
        this.location = t;
        this.mountTarget = 3;
        return this;
    }
    release() {
        this.state |= 16;
    }
    dispose() {
        if (32 === (32 & this.state)) return;
        this.state |= 32;
        if (this.hooks.hasDispose) this.viewModel.dispose();
        if (null !== this.children) {
            this.children.forEach(Yi);
            this.children = null;
        }
        this.hostController = null;
        this.scope = null;
        this.nodes = null;
        this.location = null;
        this.viewFactory = null;
        if (null !== this.viewModel) {
            Li.delete(this.viewModel);
            this.viewModel = null;
        }
        this.viewModel = null;
        this.host = null;
        this.shadowRoot = null;
        this.container.disposeResolvers();
    }
    accept(t) {
        if (true === t(this)) return true;
        if (this.hooks.hasAccept && true === this.viewModel.accept(t)) return true;
        if (null !== this.children) {
            const {children: e} = this;
            for (let i = 0, s = e.length; i < s; ++i) if (true === e[i].accept(t)) return true;
        }
    }
}

function qi(t) {
    let e = t.$observers;
    if (void 0 === e) Reflect.defineProperty(t, "$observers", {
        enumerable: false,
        value: e = {}
    });
    return e;
}

function Mi(t, e, i, s) {
    const n = e.bindables;
    const r = Object.getOwnPropertyNames(n);
    const o = r.length;
    if (o > 0) {
        let e;
        let i;
        let l = 0;
        const h = qi(s);
        const a = t.container;
        const c = a.has(_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.ICoercionConfiguration, true) ? a.get(_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.ICoercionConfiguration) : null;
        for (;l < o; ++l) {
            e = r[l];
            if (void 0 === h[e]) {
                i = n[e];
                h[e] = new BindableObserver(s, e, i.callback, i.set, t, c);
            }
        }
    }
}

function Ui(t, e, i) {
    const s = e.childrenObservers;
    const n = Object.getOwnPropertyNames(s);
    const r = n.length;
    if (r > 0) {
        const e = qi(i);
        const o = [];
        let l;
        let h = 0;
        let a;
        for (;h < r; ++h) {
            l = n[h];
            if (void 0 == e[l]) {
                a = s[l];
                o[o.length] = e[l] = new ChildrenObserver(t, i, l, a.callback, a.query, a.filter, a.map, a.options);
            }
        }
        return o;
    }
    return _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.emptyArray;
}

const Fi = new Map;

const Vi = t => {
    let e = Fi.get(t);
    if (null == e) {
        e = new _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.AccessScopeExpression(t, 0);
        Fi.set(t, e);
    }
    return e;
};

function _i(t, e, i, s) {
    const n = e.get(_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.IObserverLocator);
    const r = e.get(_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.IExpressionParser);
    const o = i.watches;
    const l = 0 === t.vmKind ? t.scope : _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.Scope.create(s, null, true);
    const h = o.length;
    let a;
    let c;
    let u;
    let f = 0;
    for (;h > f; ++f) {
        ({expression: a, callback: c} = o[f]);
        c = Ct(c) ? c : Reflect.get(s, c);
        if (!Ct(c)) throw new Error(`AUR0506:${String(c)}`);
        if (Ct(a)) t.addBinding(new ComputedWatcher(s, n, a, c, true)); else {
            u = At(a) ? r.parse(a, 8) : Vi(a);
            t.addBinding(new ExpressionWatcher(l, e, n, u, c));
        }
    }
}

function ji(t) {
    return t instanceof Controller && 0 === t.vmKind;
}

function Ni(t) {
    return (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.isObject)(t) && si.isType(t.constructor);
}

class HooksDefinition {
    constructor(t) {
        this.hasDefine = "define" in t;
        this.hasHydrating = "hydrating" in t;
        this.hasHydrated = "hydrated" in t;
        this.hasCreated = "created" in t;
        this.hasBinding = "binding" in t;
        this.hasBound = "bound" in t;
        this.hasAttaching = "attaching" in t;
        this.hasAttached = "attached" in t;
        this.hasDetaching = "detaching" in t;
        this.hasUnbinding = "unbinding" in t;
        this.hasDispose = "dispose" in t;
        this.hasAccept = "accept" in t;
    }
}

HooksDefinition.none = new HooksDefinition({});

const Wi = {
    mode: "open"
};

var Hi;

(function(t) {
    t[t["customElement"] = 0] = "customElement";
    t[t["customAttribute"] = 1] = "customAttribute";
    t[t["synthetic"] = 2] = "synthetic";
})(Hi || (Hi = {}));

var zi;

(function(t) {
    t[t["none"] = 0] = "none";
    t[t["activating"] = 1] = "activating";
    t[t["activated"] = 2] = "activated";
    t[t["deactivating"] = 4] = "deactivating";
    t[t["deactivated"] = 8] = "deactivated";
    t[t["released"] = 16] = "released";
    t[t["disposed"] = 32] = "disposed";
})(zi || (zi = {}));

function Gi(t) {
    const e = [];
    if (1 === (1 & t)) e.push("activating");
    if (2 === (2 & t)) e.push("activated");
    if (4 === (4 & t)) e.push("deactivating");
    if (8 === (8 & t)) e.push("deactivated");
    if (16 === (16 & t)) e.push("released");
    if (32 === (32 & t)) e.push("disposed");
    return 0 === e.length ? "none" : e.join("|");
}

const Xi = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.DI.createInterface("IController");

const Ki = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.DI.createInterface("IHydrationContext");

class HydrationContext {
    constructor(t, e, i) {
        this.instruction = e;
        this.parent = i;
        this.controller = t;
    }
}

function Yi(t) {
    t.dispose();
}

let Qi;

let Zi;

let Ji;

const ts = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.DI.createInterface("IAppRoot");

const es = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.DI.createInterface("IWorkTracker", (t => t.singleton(WorkTracker)));

class WorkTracker {
    constructor(t) {
        this.Mt = 0;
        this.Ut = null;
        this.$t = null;
        this.Ft = t.scopeTo("WorkTracker");
    }
    start() {
        this.Ft.trace(`start(stack:${this.Mt})`);
        ++this.Mt;
    }
    finish() {
        this.Ft.trace(`finish(stack:${this.Mt})`);
        if (0 === --this.Mt) {
            const t = this.$t;
            if (null !== t) {
                this.$t = this.Ut = null;
                t();
            }
        }
    }
    wait() {
        this.Ft.trace(`wait(stack:${this.Mt})`);
        if (null === this.Ut) {
            if (0 === this.Mt) return Promise.resolve();
            this.Ut = new Promise((t => {
                this.$t = t;
            }));
        }
        return this.Ut;
    }
}

WorkTracker.inject = [ _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.ILogger ];

class AppRoot {
    constructor(t, e, i, s) {
        this.config = t;
        this.platform = e;
        this.container = i;
        this.controller = void 0;
        this.Vt = void 0;
        this.host = t.host;
        this.work = i.get(es);
        s.prepare(this);
        i.registerResolver(e.HTMLElement, i.registerResolver(e.Element, i.registerResolver(ns, new _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.InstanceProvider("ElementResolver", t.host))));
        this.Vt = (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(this._t("beforeCreate"), (() => {
            const e = t.component;
            const s = i.createChild();
            let n;
            if (si.isType(e)) n = this.container.get(e); else n = t.component;
            const r = {
                hydrate: false,
                projections: null
            };
            const o = this.controller = Controller.$el(s, n, this.host, r);
            o.xt(r, null);
            return (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(this._t("hydrating"), (() => {
                o.Ct(null);
                return (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(this._t("hydrated"), (() => {
                    o.At();
                    this.Vt = void 0;
                }));
            }));
        }));
    }
    activate() {
        return (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(this.Vt, (() => (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(this._t("beforeActivate"), (() => (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(this.controller.activate(this.controller, null, 2, void 0), (() => this._t("afterActivate")))))));
    }
    deactivate() {
        return (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(this._t("beforeDeactivate"), (() => (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(this.controller.deactivate(this.controller, null, 0), (() => this._t("afterDeactivate")))));
    }
    _t(t) {
        return (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.resolveAll)(...this.container.getAll(be).reduce(((e, i) => {
            if (i.slot === t) e.push(i.run());
            return e;
        }), []));
    }
    dispose() {
        var t;
        null === (t = this.controller) || void 0 === t ? void 0 : t.dispose();
    }
}

class Refs {}

function is(t, e) {
    var i, s;
    return null !== (s = null === (i = t.$au) || void 0 === i ? void 0 : i[e]) && void 0 !== s ? s : null;
}

function ss(t, e, i) {
    var s;
    var n;
    (null !== (s = (n = t).$au) && void 0 !== s ? s : n.$au = new Refs)[e] = i;
}

const ns = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.DI.createInterface("INode");

const rs = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.DI.createInterface("IEventTarget", (t => t.cachedCallback((t => {
    if (t.has(ts, true)) return t.get(ts).host;
    return t.get(Kt).document;
}))));

const os = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.DI.createInterface("IRenderLocation");

var ls;

(function(t) {
    t[t["Element"] = 1] = "Element";
    t[t["Attr"] = 2] = "Attr";
    t[t["Text"] = 3] = "Text";
    t[t["CDATASection"] = 4] = "CDATASection";
    t[t["EntityReference"] = 5] = "EntityReference";
    t[t["Entity"] = 6] = "Entity";
    t[t["ProcessingInstruction"] = 7] = "ProcessingInstruction";
    t[t["Comment"] = 8] = "Comment";
    t[t["Document"] = 9] = "Document";
    t[t["DocumentType"] = 10] = "DocumentType";
    t[t["DocumentFragment"] = 11] = "DocumentFragment";
    t[t["Notation"] = 12] = "Notation";
})(ls || (ls = {}));

const hs = new WeakMap;

function as(t) {
    if (hs.has(t)) return hs.get(t);
    let e = 0;
    let i = t.nextSibling;
    while (null !== i) {
        if (8 === i.nodeType) switch (i.textContent) {
          case "au-start":
            ++e;
            break;

          case "au-end":
            if (0 === e--) return i;
        }
        i = i.nextSibling;
    }
    if (null === t.parentNode && 11 === t.nodeType) {
        const e = si.for(t);
        if (void 0 === e) return null;
        if (2 === e.mountTarget) return as(e.host);
    }
    return t.parentNode;
}

function cs(t, e) {
    if (void 0 !== t.platform && !(t instanceof t.platform.Node)) {
        const i = t.childNodes;
        for (let t = 0, s = i.length; t < s; ++t) hs.set(i[t], e);
    } else hs.set(t, e);
}

function us(t) {
    if (fs(t)) return t;
    const e = t.ownerDocument.createComment("au-end");
    const i = t.ownerDocument.createComment("au-start");
    if (null !== t.parentNode) {
        t.parentNode.replaceChild(e, t);
        e.parentNode.insertBefore(i, e);
    }
    e.$start = i;
    return e;
}

function fs(t) {
    return "au-end" === t.textContent;
}

class FragmentNodeSequence {
    constructor(t, e) {
        this.platform = t;
        this.fragment = e;
        this.isMounted = false;
        this.isLinked = false;
        this.next = void 0;
        this.refNode = void 0;
        const i = e.querySelectorAll(".au");
        let s = 0;
        let n = i.length;
        let r;
        let o = this.targets = Array(n);
        while (n > s) {
            r = i[s];
            if ("AU-M" === r.nodeName) o[s] = us(r); else o[s] = r;
            ++s;
        }
        const l = e.childNodes;
        const h = this.childNodes = Array(n = l.length);
        s = 0;
        while (n > s) {
            h[s] = l[s];
            ++s;
        }
        this.firstChild = e.firstChild;
        this.lastChild = e.lastChild;
    }
    findTargets() {
        return this.targets;
    }
    insertBefore(t) {
        if (this.isLinked && !!this.refNode) this.addToLinked(); else {
            const e = t.parentNode;
            if (this.isMounted) {
                let i = this.firstChild;
                let s;
                const n = this.lastChild;
                while (null != i) {
                    s = i.nextSibling;
                    e.insertBefore(i, t);
                    if (i === n) break;
                    i = s;
                }
            } else {
                this.isMounted = true;
                t.parentNode.insertBefore(this.fragment, t);
            }
        }
    }
    appendTo(t, e = false) {
        if (this.isMounted) {
            let e = this.firstChild;
            let i;
            const s = this.lastChild;
            while (null != e) {
                i = e.nextSibling;
                t.appendChild(e);
                if (e === s) break;
                e = i;
            }
        } else {
            this.isMounted = true;
            if (!e) t.appendChild(this.fragment);
        }
    }
    remove() {
        if (this.isMounted) {
            this.isMounted = false;
            const t = this.fragment;
            const e = this.lastChild;
            let i;
            let s = this.firstChild;
            while (null !== s) {
                i = s.nextSibling;
                t.appendChild(s);
                if (s === e) break;
                s = i;
            }
        }
    }
    addToLinked() {
        const t = this.refNode;
        const e = t.parentNode;
        if (this.isMounted) {
            let i = this.firstChild;
            let s;
            const n = this.lastChild;
            while (null != i) {
                s = i.nextSibling;
                e.insertBefore(i, t);
                if (i === n) break;
                i = s;
            }
        } else {
            this.isMounted = true;
            e.insertBefore(this.fragment, t);
        }
    }
    unlink() {
        this.isLinked = false;
        this.next = void 0;
        this.refNode = void 0;
    }
    link(t) {
        this.isLinked = true;
        if (fs(t)) this.refNode = t; else {
            this.next = t;
            this.obtainRefNode();
        }
    }
    obtainRefNode() {
        if (void 0 !== this.next) this.refNode = this.next.firstChild; else this.refNode = void 0;
    }
}

const ds = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.DI.createInterface("IWindow", (t => t.callback((t => t.get(Kt).window))));

const ms = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.DI.createInterface("ILocation", (t => t.callback((t => t.get(ds).location))));

const vs = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.DI.createInterface("IHistory", (t => t.callback((t => t.get(ds).history))));

const ps = {
    [_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.DelegationStrategy.capturing]: {
        capture: true
    },
    [_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.DelegationStrategy.bubbling]: {
        capture: false
    }
};

class Listener {
    constructor(t, e, i, s, n, r, o, l) {
        this.platform = t;
        this.targetEvent = e;
        this.delegationStrategy = i;
        this.sourceExpression = s;
        this.target = n;
        this.preventDefault = r;
        this.eventDelegator = o;
        this.locator = l;
        this.interceptor = this;
        this.isBound = false;
        this.handler = null;
    }
    callSource(t) {
        const e = this.$scope.overrideContext;
        e.$event = t;
        const i = this.sourceExpression.evaluate(8, this.$scope, this.locator, null);
        Reflect.deleteProperty(e, "$event");
        if (true !== i && this.preventDefault) t.preventDefault();
        return i;
    }
    handleEvent(t) {
        this.interceptor.callSource(t);
    }
    $bind(t, e) {
        if (this.isBound) {
            if (this.$scope === e) return;
            this.interceptor.$unbind(2 | t);
        }
        this.$scope = e;
        const i = this.sourceExpression;
        if (i.hasBind) i.bind(t, e, this.interceptor);
        if (this.delegationStrategy === _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.DelegationStrategy.none) this.target.addEventListener(this.targetEvent, this); else this.handler = this.eventDelegator.addEventListener(this.locator.get(rs), this.target, this.targetEvent, this, ps[this.delegationStrategy]);
        this.isBound = true;
    }
    $unbind(t) {
        if (!this.isBound) return;
        const e = this.sourceExpression;
        if (e.hasUnbind) e.unbind(t, this.$scope, this.interceptor);
        this.$scope = null;
        if (this.delegationStrategy === _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.DelegationStrategy.none) this.target.removeEventListener(this.targetEvent, this); else {
            this.handler.dispose();
            this.handler = null;
        }
        this.isBound = false;
    }
    observe(t, e) {
        return;
    }
    handleChange(t, e, i) {
        return;
    }
}

const gs = {
    capture: false
};

class ListenerTracker {
    constructor(t, e, i = gs) {
        this.jt = t;
        this.Nt = e;
        this.Wt = i;
        this.Ht = 0;
        this.zt = new Map;
        this.Gt = new Map;
    }
    Xt() {
        if (1 === ++this.Ht) this.jt.addEventListener(this.Nt, this, this.Wt);
    }
    Kt() {
        if (0 === --this.Ht) this.jt.removeEventListener(this.Nt, this, this.Wt);
    }
    dispose() {
        if (this.Ht > 0) {
            this.Ht = 0;
            this.jt.removeEventListener(this.Nt, this, this.Wt);
        }
        this.zt.clear();
        this.Gt.clear();
    }
    Yt(t) {
        const e = true === this.Wt.capture ? this.zt : this.Gt;
        let i = e.get(t);
        if (void 0 === i) e.set(t, i = wt());
        return i;
    }
    handleEvent(t) {
        const e = true === this.Wt.capture ? this.zt : this.Gt;
        const i = t.composedPath();
        if (true === this.Wt.capture) i.reverse();
        for (const s of i) {
            const i = e.get(s);
            if (void 0 === i) continue;
            const n = i[this.Nt];
            if (void 0 === n) continue;
            if (Ct(n)) n(t); else n.handleEvent(t);
            if (true === t.cancelBubble) return;
        }
    }
}

class DelegateSubscription {
    constructor(t, e, i, s) {
        this.Qt = t;
        this.Zt = e;
        this.Nt = i;
        t.Xt();
        e[i] = s;
    }
    dispose() {
        this.Qt.Kt();
        this.Zt[this.Nt] = void 0;
    }
}

class EventSubscriber {
    constructor(t) {
        this.config = t;
        this.target = null;
        this.handler = null;
    }
    subscribe(t, e) {
        this.target = t;
        this.handler = e;
        let i;
        for (i of this.config.events) t.addEventListener(i, e);
    }
    dispose() {
        const {target: t, handler: e} = this;
        let i;
        if (null !== t && null !== e) for (i of this.config.events) t.removeEventListener(i, e);
        this.target = this.handler = null;
    }
}

const ws = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.DI.createInterface("IEventDelegator", (t => t.singleton(EventDelegator)));

class EventDelegator {
    constructor() {
        this.Jt = wt();
    }
    addEventListener(t, e, i, s, n) {
        var r;
        var o;
        const l = null !== (r = (o = this.Jt)[i]) && void 0 !== r ? r : o[i] = new Map;
        let h = l.get(t);
        if (void 0 === h) l.set(t, h = new ListenerTracker(t, i, n));
        return new DelegateSubscription(h, h.Yt(e), i, s);
    }
    dispose() {
        for (const t in this.Jt) {
            const e = this.Jt[t];
            for (const t of e.values()) t.dispose();
            e.clear();
        }
    }
}

const bs = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.DI.createInterface("IProjections");

const xs = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.DI.createInterface("IAuSlotsInfo");

class AuSlotsInfo {
    constructor(t) {
        this.projectedSlots = t;
    }
}

var ys;

(function(t) {
    t["hydrateElement"] = "ra";
    t["hydrateAttribute"] = "rb";
    t["hydrateTemplateController"] = "rc";
    t["hydrateLetElement"] = "rd";
    t["setProperty"] = "re";
    t["interpolation"] = "rf";
    t["propertyBinding"] = "rg";
    t["callBinding"] = "rh";
    t["letBinding"] = "ri";
    t["refBinding"] = "rj";
    t["iteratorBinding"] = "rk";
    t["textBinding"] = "ha";
    t["listenerBinding"] = "hb";
    t["attributeBinding"] = "hc";
    t["stylePropertyBinding"] = "hd";
    t["setAttribute"] = "he";
    t["setClassAttribute"] = "hf";
    t["setStyleAttribute"] = "hg";
    t["spreadBinding"] = "hs";
    t["spreadElementProp"] = "hp";
})(ys || (ys = {}));

const ks = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.DI.createInterface("Instruction");

function Cs(t) {
    const e = t.type;
    return At(e) && 2 === e.length;
}

class InterpolationInstruction {
    constructor(t, e) {
        this.from = t;
        this.to = e;
    }
    get type() {
        return "rf";
    }
}

class PropertyBindingInstruction {
    constructor(t, e, i) {
        this.from = t;
        this.to = e;
        this.mode = i;
    }
    get type() {
        return "rg";
    }
}

class IteratorBindingInstruction {
    constructor(t, e) {
        this.from = t;
        this.to = e;
    }
    get type() {
        return "rk";
    }
}

class CallBindingInstruction {
    constructor(t, e) {
        this.from = t;
        this.to = e;
    }
    get type() {
        return "rh";
    }
}

class RefBindingInstruction {
    constructor(t, e) {
        this.from = t;
        this.to = e;
    }
    get type() {
        return "rj";
    }
}

class SetPropertyInstruction {
    constructor(t, e) {
        this.value = t;
        this.to = e;
    }
    get type() {
        return "re";
    }
}

class HydrateElementInstruction {
    constructor(t, e, i, s, n, r) {
        this.res = t;
        this.alias = e;
        this.props = i;
        this.projections = s;
        this.containerless = n;
        this.captures = r;
        this.auSlot = null;
    }
    get type() {
        return "ra";
    }
}

class HydrateAttributeInstruction {
    constructor(t, e, i) {
        this.res = t;
        this.alias = e;
        this.props = i;
    }
    get type() {
        return "rb";
    }
}

class HydrateTemplateController {
    constructor(t, e, i, s) {
        this.def = t;
        this.res = e;
        this.alias = i;
        this.props = s;
    }
    get type() {
        return "rc";
    }
}

class HydrateLetElementInstruction {
    constructor(t, e) {
        this.instructions = t;
        this.toBindingContext = e;
    }
    get type() {
        return "rd";
    }
}

class LetBindingInstruction {
    constructor(t, e) {
        this.from = t;
        this.to = e;
    }
    get type() {
        return "ri";
    }
}

class TextBindingInstruction {
    constructor(t, e) {
        this.from = t;
        this.strict = e;
    }
    get type() {
        return "ha";
    }
}

class ListenerBindingInstruction {
    constructor(t, e, i, s) {
        this.from = t;
        this.to = e;
        this.preventDefault = i;
        this.strategy = s;
    }
    get type() {
        return "hb";
    }
}

class StylePropertyBindingInstruction {
    constructor(t, e) {
        this.from = t;
        this.to = e;
    }
    get type() {
        return "hd";
    }
}

class SetAttributeInstruction {
    constructor(t, e) {
        this.value = t;
        this.to = e;
    }
    get type() {
        return "he";
    }
}

class SetClassAttributeInstruction {
    constructor(t) {
        this.value = t;
        this.type = "hf";
    }
}

class SetStyleAttributeInstruction {
    constructor(t) {
        this.value = t;
        this.type = "hg";
    }
}

class AttributeBindingInstruction {
    constructor(t, e, i) {
        this.attr = t;
        this.from = e;
        this.to = i;
    }
    get type() {
        return "hc";
    }
}

class SpreadBindingInstruction {
    get type() {
        return "hs";
    }
}

class SpreadElementPropBindingInstruction {
    constructor(t) {
        this.instructions = t;
    }
    get type() {
        return "hp";
    }
}

const As = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.DI.createInterface("ITemplateCompiler");

const Ss = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.DI.createInterface("IRenderer");

function Rs(t) {
    return function i(s) {
        const n = function(...e) {
            const i = new s(...e);
            i.instructionType = t;
            return i;
        };
        n.register = function t(e) {
            _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.Registration.singleton(Ss, n).register(e);
        };
        const r = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.Metadata.getOwnKeys(s);
        for (const t of r) ct(t, ht(t, s), n);
        const o = Object.getOwnPropertyDescriptors(s);
        Object.keys(o).filter((t => "prototype" !== t)).forEach((t => {
            Reflect.defineProperty(n, t, o[t]);
        }));
        return n;
    };
}

function Es(t, e, i) {
    if (At(e)) return t.parse(e, i);
    return e;
}

function Bs(t) {
    if (null != t.viewModel) return t.viewModel;
    return t;
}

function Is(t, e) {
    if ("element" === e) return t;
    switch (e) {
      case "controller":
        return si.for(t);

      case "view":
        throw new Error("AUR0750");

      case "view-model":
        return si.for(t).viewModel;

      default:
        {
            const i = Me.for(t, e);
            if (void 0 !== i) return i.viewModel;
            const s = si.for(t, {
                name: e
            });
            if (void 0 === s) throw new Error(`AUR0751:${e}`);
            return s.viewModel;
        }
    }
}

let Ts = class SetPropertyRenderer {
    render(t, e, i) {
        const s = Bs(e);
        if (void 0 !== s.$observers && void 0 !== s.$observers[i.to]) s.$observers[i.to].setValue(i.value, 2); else s[i.to] = i.value;
    }
};

Ts = ot([ Rs("re") ], Ts);

let Ds = class CustomElementRenderer {
    constructor(t, e) {
        this.r = t;
        this.p = e;
    }
    static get inject() {
        return [ Pi, Kt ];
    }
    render(t, e, i) {
        let s;
        let n;
        let r;
        let o;
        const l = i.res;
        const h = i.projections;
        const a = t.container;
        const c = nn(this.p, t, e, i, e, null == h ? void 0 : new AuSlotsInfo(Object.keys(h)));
        switch (typeof l) {
          case "string":
            s = a.find(si, l);
            if (null == s) throw new Error(`AUR0752:${l}@${t["name"]}`);
            break;

          default:
            s = l;
        }
        n = s.Type;
        r = c.invoke(n);
        c.registerResolver(n, new _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.InstanceProvider(s.key, r));
        o = Controller.$el(c, r, e, i, s);
        ss(e, s.key, o);
        const u = this.r.renderers;
        const f = i.props;
        const d = f.length;
        let m = 0;
        let v;
        while (d > m) {
            v = f[m];
            u[v.type].render(t, o, v);
            ++m;
        }
        t.addChild(o);
    }
};

Ds = ot([ Rs("ra") ], Ds);

let Ps = class CustomAttributeRenderer {
    constructor(t, e) {
        this.r = t;
        this.p = e;
    }
    static get inject() {
        return [ Pi, Kt ];
    }
    render(t, e, i) {
        let s = t.container;
        let n;
        switch (typeof i.res) {
          case "string":
            n = s.find(Me, i.res);
            if (null == n) throw new Error(`AUR0753:${i.res}@${t["name"]}`);
            break;

          default:
            n = i.res;
        }
        const r = rn(this.p, n, t, e, i, void 0, void 0);
        const o = Controller.$attr(t.container, r, e, n);
        ss(e, n.key, o);
        const l = this.r.renderers;
        const h = i.props;
        const a = h.length;
        let c = 0;
        let u;
        while (a > c) {
            u = h[c];
            l[u.type].render(t, o, u);
            ++c;
        }
        t.addChild(o);
    }
};

Ps = ot([ Rs("rb") ], Ps);

let Os = class TemplateControllerRenderer {
    constructor(t, e) {
        this.r = t;
        this.p = e;
    }
    static get inject() {
        return [ Pi, Kt ];
    }
    render(t, e, i) {
        var s;
        let n = t.container;
        let r;
        switch (typeof i.res) {
          case "string":
            r = n.find(Me, i.res);
            if (null == r) throw new Error(`AUR0754:${i.res}@${t["name"]}`);
            break;

          default:
            r = i.res;
        }
        const o = this.r.getViewFactory(i.def, n);
        const l = us(e);
        const h = rn(this.p, r, t, e, i, o, l);
        const a = Controller.$attr(t.container, h, e, r);
        ss(l, r.key, a);
        null === (s = h.link) || void 0 === s ? void 0 : s.call(h, t, a, e, i);
        const c = this.r.renderers;
        const u = i.props;
        const f = u.length;
        let d = 0;
        let m;
        while (f > d) {
            m = u[d];
            c[m.type].render(t, a, m);
            ++d;
        }
        t.addChild(a);
    }
};

Os = ot([ Rs("rc") ], Os);

let $s = class LetElementRenderer {
    constructor(t, e) {
        this.ep = t;
        this.oL = e;
    }
    render(t, e, i) {
        e.remove();
        const s = i.instructions;
        const n = i.toBindingContext;
        const r = t.container;
        const o = s.length;
        let l;
        let h;
        let a;
        let c = 0;
        while (o > c) {
            l = s[c];
            h = Es(this.ep, l.from, 8);
            a = new LetBinding(h, l.to, this.oL, r, n);
            t.addBinding(38962 === h.$kind ? js(a, h, r) : a);
            ++c;
        }
    }
};

$s.inject = [ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.IExpressionParser, _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.IObserverLocator ];

$s = ot([ Rs("rd") ], $s);

let Ls = class CallBindingRenderer {
    constructor(t, e) {
        this.ep = t;
        this.oL = e;
    }
    render(t, e, i) {
        const s = Es(this.ep, i.from, 8 | 4);
        const n = new CallBinding(s, Bs(e), i.to, this.oL, t.container);
        t.addBinding(38962 === s.$kind ? js(n, s, t.container) : n);
    }
};

Ls.inject = [ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.IExpressionParser, _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.IObserverLocator ];

Ls = ot([ Rs("rh") ], Ls);

let qs = class RefBindingRenderer {
    constructor(t) {
        this.ep = t;
    }
    render(t, e, i) {
        const s = Es(this.ep, i.from, 8);
        const n = new RefBinding(s, Is(e, i.to), t.container);
        t.addBinding(38962 === s.$kind ? js(n, s, t.container) : n);
    }
};

qs.inject = [ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.IExpressionParser ];

qs = ot([ Rs("rj") ], qs);

let Ms = class InterpolationBindingRenderer {
    constructor(t, e, i) {
        this.ep = t;
        this.oL = e;
        this.p = i;
    }
    render(t, e, i) {
        const s = t.container;
        const n = Es(this.ep, i.from, 1);
        const r = new InterpolationBinding(this.oL, n, Bs(e), i.to, _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingMode.toView, s, this.p.domWriteQueue);
        const o = r.partBindings;
        const l = o.length;
        let h = 0;
        let a;
        for (;l > h; ++h) {
            a = o[h];
            if (38962 === a.sourceExpression.$kind) o[h] = js(a, a.sourceExpression, s);
        }
        t.addBinding(r);
    }
};

Ms.inject = [ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.IExpressionParser, _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.IObserverLocator, Kt ];

Ms = ot([ Rs("rf") ], Ms);

let Us = class PropertyBindingRenderer {
    constructor(t, e, i) {
        this.ep = t;
        this.oL = e;
        this.p = i;
    }
    render(t, e, i) {
        const s = Es(this.ep, i.from, 8);
        const n = new PropertyBinding(s, Bs(e), i.to, i.mode, this.oL, t.container, this.p.domWriteQueue);
        t.addBinding(38962 === s.$kind ? js(n, s, t.container) : n);
    }
};

Us.inject = [ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.IExpressionParser, _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.IObserverLocator, Kt ];

Us = ot([ Rs("rg") ], Us);

let Fs = class IteratorBindingRenderer {
    constructor(t, e, i) {
        this.ep = t;
        this.oL = e;
        this.p = i;
    }
    render(t, e, i) {
        const s = Es(this.ep, i.from, 2);
        const n = new PropertyBinding(s, Bs(e), i.to, _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingMode.toView, this.oL, t.container, this.p.domWriteQueue);
        t.addBinding(38962 === s.iterable.$kind ? js(n, s.iterable, t.container) : n);
    }
};

Fs.inject = [ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.IExpressionParser, _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.IObserverLocator, Kt ];

Fs = ot([ Rs("rk") ], Fs);

let Vs = 0;

const _s = [];

function js(t, e, i) {
    while (e instanceof _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingBehaviorExpression) {
        _s[Vs++] = e;
        e = e.expression;
    }
    while (Vs > 0) {
        const e = _s[--Vs];
        const s = i.get(e.behaviorKey);
        if (s instanceof _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingBehaviorFactory) t = s.construct(t, e);
    }
    _s.length = 0;
    return t;
}

let Ns = class TextBindingRenderer {
    constructor(t, e, i) {
        this.ep = t;
        this.oL = e;
        this.p = i;
    }
    render(t, e, i) {
        const s = t.container;
        const n = e.nextSibling;
        const r = e.parentNode;
        const o = this.p.document;
        const l = Es(this.ep, i.from, 1);
        const h = l.parts;
        const a = l.expressions;
        const c = a.length;
        let u = 0;
        let f = h[0];
        let d;
        let m;
        if ("" !== f) r.insertBefore(o.createTextNode(f), n);
        for (;c > u; ++u) {
            m = a[u];
            d = new ContentBinding(m, r.insertBefore(o.createTextNode(""), n), s, this.oL, this.p, i.strict);
            t.addBinding(38962 === m.$kind ? js(d, m, s) : d);
            f = h[u + 1];
            if ("" !== f) r.insertBefore(o.createTextNode(f), n);
        }
        if ("AU-M" === e.nodeName) e.remove();
    }
};

Ns.inject = [ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.IExpressionParser, _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.IObserverLocator, Kt ];

Ns = ot([ Rs("ha") ], Ns);

let Ws = class ListenerBindingRenderer {
    constructor(t, e, i) {
        this.ep = t;
        this.te = e;
        this.p = i;
    }
    render(t, e, i) {
        const s = Es(this.ep, i.from, 4);
        const n = new Listener(this.p, i.to, i.strategy, s, e, i.preventDefault, this.te, t.container);
        t.addBinding(38962 === s.$kind ? js(n, s, t.container) : n);
    }
};

Ws.inject = [ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.IExpressionParser, ws, Kt ];

Ws = ot([ Rs("hb") ], Ws);

let Hs = class SetAttributeRenderer {
    render(t, e, i) {
        e.setAttribute(i.to, i.value);
    }
};

Hs = ot([ Rs("he") ], Hs);

let zs = class SetClassAttributeRenderer {
    render(t, e, i) {
        Qs(e.classList, i.value);
    }
};

zs = ot([ Rs("hf") ], zs);

let Gs = class SetStyleAttributeRenderer {
    render(t, e, i) {
        e.style.cssText += i.value;
    }
};

Gs = ot([ Rs("hg") ], Gs);

let Xs = class StylePropertyBindingRenderer {
    constructor(t, e, i) {
        this.ep = t;
        this.oL = e;
        this.p = i;
    }
    render(t, e, i) {
        const s = Es(this.ep, i.from, 8);
        const n = new PropertyBinding(s, e.style, i.to, _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingMode.toView, this.oL, t.container, this.p.domWriteQueue);
        t.addBinding(38962 === s.$kind ? js(n, s, t.container) : n);
    }
};

Xs.inject = [ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.IExpressionParser, _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.IObserverLocator, Kt ];

Xs = ot([ Rs("hd") ], Xs);

let Ks = class AttributeBindingRenderer {
    constructor(t, e) {
        this.ep = t;
        this.oL = e;
    }
    render(t, e, i) {
        const s = Es(this.ep, i.from, 8);
        const n = new AttributeBinding(s, e, i.attr, i.to, _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingMode.toView, this.oL, t.container);
        t.addBinding(38962 === s.$kind ? js(n, s, t.container) : n);
    }
};

Ks.inject = [ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.IExpressionParser, _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.IObserverLocator ];

Ks = ot([ Rs("hc") ], Ks);

let Ys = class SpreadRenderer {
    constructor(t, e) {
        this.ee = t;
        this.r = e;
    }
    static get inject() {
        return [ As, Pi ];
    }
    render(t, e, i) {
        const s = t.container;
        const n = s.get(Ki);
        const r = this.r.renderers;
        const o = t => {
            let e = t;
            let i = n;
            while (null != i && e > 0) {
                i = i.parent;
                --e;
            }
            if (null == i) throw new Error("No scope context for spread binding.");
            return i;
        };
        const l = i => {
            var s, n;
            const a = o(i);
            const c = Zs(a);
            const u = this.ee.compileSpread(a.controller.definition, null !== (n = null === (s = a.instruction) || void 0 === s ? void 0 : s.captures) && void 0 !== n ? n : _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.emptyArray, a.controller.container, e);
            let f;
            for (f of u) switch (f.type) {
              case "hs":
                l(i + 1);
                break;

              case "hp":
                r[f.instructions.type].render(c, si.for(e), f.instructions);
                break;

              default:
                r[f.type].render(c, e, f);
            }
            t.addBinding(c);
        };
        l(0);
    }
};

Ys = ot([ Rs("hs") ], Ys);

class SpreadBinding {
    constructor(t, e) {
        this.ie = t;
        this.se = e;
        this.interceptor = this;
        this.isBound = false;
        this.ctrl = e.controller;
        this.locator = this.ctrl.container;
    }
    get container() {
        return this.locator;
    }
    get definition() {
        return this.ctrl.definition;
    }
    get isStrictBinding() {
        return this.ctrl.isStrictBinding;
    }
    $bind(t, e) {
        var i;
        if (this.isBound) return;
        this.isBound = true;
        const s = this.$scope = null !== (i = this.se.controller.scope.parentScope) && void 0 !== i ? i : void 0;
        if (null == s) throw new Error("Invalid spreading. Context scope is null/undefined");
        this.ie.forEach((e => e.$bind(t, s)));
    }
    $unbind(t) {
        this.ie.forEach((e => e.$unbind(t)));
        this.isBound = false;
    }
    addBinding(t) {
        this.ie.push(t);
    }
    addChild(t) {
        if (1 !== t.vmKind) throw new Error("Spread binding does not support spreading custom attributes/template controllers");
        this.ctrl.addChild(t);
    }
}

function Qs(t, e) {
    const i = e.length;
    let s = 0;
    for (let n = 0; n < i; ++n) if (32 === e.charCodeAt(n)) {
        if (n !== s) t.add(e.slice(s, n));
        s = n + 1;
    } else if (n + 1 === i) t.add(e.slice(s));
}

const Zs = t => new SpreadBinding([], t);

const Js = "IController";

const tn = "IInstruction";

const en = "IRenderLocation";

const sn = "IAuSlotsInfo";

function nn(t, e, i, s, n, r) {
    const o = e.container.createChild();
    o.registerResolver(t.HTMLElement, o.registerResolver(t.Element, o.registerResolver(ns, new _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.InstanceProvider("ElementResolver", i))));
    o.registerResolver(Xi, new _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.InstanceProvider(Js, e));
    o.registerResolver(ks, new _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.InstanceProvider(tn, s));
    o.registerResolver(os, null == n ? on : new _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.InstanceProvider(en, n));
    o.registerResolver(Ai, ln);
    o.registerResolver(xs, null == r ? hn : new _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.InstanceProvider(sn, r));
    return o;
}

class ViewFactoryProvider {
    constructor(t) {
        this.f = t;
    }
    get $isResolver() {
        return true;
    }
    resolve() {
        const t = this.f;
        if (null === t) throw new Error("AUR7055");
        if (!At(t.name) || 0 === t.name.length) throw new Error("AUR0756");
        return t;
    }
}

function rn(t, e, i, s, n, r, o, l) {
    const h = i.container.createChild();
    h.registerResolver(t.HTMLElement, h.registerResolver(t.Element, h.registerResolver(ns, new _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.InstanceProvider("ElementResolver", s))));
    i = i instanceof Controller ? i : i.ctrl;
    h.registerResolver(Xi, new _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.InstanceProvider(Js, i));
    h.registerResolver(ks, new _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.InstanceProvider(tn, n));
    h.registerResolver(os, null == o ? on : new _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.InstanceProvider(en, o));
    h.registerResolver(Ai, null == r ? ln : new ViewFactoryProvider(r));
    h.registerResolver(xs, null == l ? hn : new _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.InstanceProvider(sn, l));
    return h.invoke(e.Type);
}

const on = new _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.InstanceProvider(en);

const ln = new ViewFactoryProvider(null);

const hn = new _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.InstanceProvider(sn, new AuSlotsInfo(_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.emptyArray));

var an;

(function(t) {
    t[t["None"] = 0] = "None";
    t[t["IgnoreAttr"] = 1] = "IgnoreAttr";
})(an || (an = {}));

function cn(t) {
    return function(e) {
        return mn.define(t, e);
    };
}

class BindingCommandDefinition {
    constructor(t, e, i, s, n) {
        this.Type = t;
        this.name = e;
        this.aliases = i;
        this.key = s;
        this.type = n;
    }
    static create(t, e) {
        let i;
        let s;
        if (At(t)) {
            i = t;
            s = {
                name: i
            };
        } else {
            i = t.name;
            s = t;
        }
        return new BindingCommandDefinition(e, (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.firstDefined)(dn(e, "name"), i), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.mergeArrays)(dn(e, "aliases"), s.aliases, e.aliases), fn(i), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.firstDefined)(dn(e, "type"), s.type, e.type, null));
    }
    register(t) {
        const {Type: e, key: i, aliases: s} = this;
        _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.Registration.singleton(i, e).register(t);
        _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.Registration.aliasTo(i, e).register(t);
        (0,_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.registerAliases)(s, mn, i, t);
    }
}

const un = mt("binding-command");

const fn = t => `${un}:${t}`;

const dn = (t, e) => ht(dt(e), t);

const mn = Object.freeze({
    name: un,
    keyFrom: fn,
    define(t, e) {
        const i = BindingCommandDefinition.create(t, e);
        ct(un, i, i.Type);
        ct(un, i, i);
        vt(e, un);
        return i.Type;
    },
    getAnnotation: dn
});

let vn = class OneTimeBindingCommand {
    constructor(t, e) {
        this.type = 0;
        this.m = t;
        this.ep = e;
    }
    get name() {
        return "one-time";
    }
    build(t) {
        var e;
        const i = t.attr;
        let s = i.target;
        let n = t.attr.rawValue;
        if (null == t.bindable) s = null !== (e = this.m.map(t.node, s)) && void 0 !== e ? e : (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.camelCase)(s); else {
            if ("" === n && 1 === t.def.type) n = (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.camelCase)(s);
            s = t.bindable.property;
        }
        return new PropertyBindingInstruction(this.ep.parse(n, 8), s, _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingMode.oneTime);
    }
};

vn.inject = [ Zt, _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.IExpressionParser ];

vn = ot([ cn("one-time") ], vn);

let pn = class ToViewBindingCommand {
    constructor(t, e) {
        this.type = 0;
        this.m = t;
        this.ep = e;
    }
    get name() {
        return "to-view";
    }
    build(t) {
        var e;
        const i = t.attr;
        let s = i.target;
        let n = t.attr.rawValue;
        if (null == t.bindable) s = null !== (e = this.m.map(t.node, s)) && void 0 !== e ? e : (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.camelCase)(s); else {
            if ("" === n && 1 === t.def.type) n = (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.camelCase)(s);
            s = t.bindable.property;
        }
        return new PropertyBindingInstruction(this.ep.parse(n, 8), s, _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingMode.toView);
    }
};

pn.inject = [ Zt, _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.IExpressionParser ];

pn = ot([ cn("to-view") ], pn);

let gn = class FromViewBindingCommand {
    constructor(t, e) {
        this.type = 0;
        this.m = t;
        this.ep = e;
    }
    get name() {
        return "from-view";
    }
    build(t) {
        var e;
        const i = t.attr;
        let s = i.target;
        let n = i.rawValue;
        if (null == t.bindable) s = null !== (e = this.m.map(t.node, s)) && void 0 !== e ? e : (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.camelCase)(s); else {
            if ("" === n && 1 === t.def.type) n = (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.camelCase)(s);
            s = t.bindable.property;
        }
        return new PropertyBindingInstruction(this.ep.parse(n, 8), s, _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingMode.fromView);
    }
};

gn.inject = [ Zt, _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.IExpressionParser ];

gn = ot([ cn("from-view") ], gn);

let wn = class TwoWayBindingCommand {
    constructor(t, e) {
        this.type = 0;
        this.m = t;
        this.ep = e;
    }
    get name() {
        return "two-way";
    }
    build(t) {
        var e;
        const i = t.attr;
        let s = i.target;
        let n = i.rawValue;
        if (null == t.bindable) s = null !== (e = this.m.map(t.node, s)) && void 0 !== e ? e : (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.camelCase)(s); else {
            if ("" === n && 1 === t.def.type) n = (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.camelCase)(s);
            s = t.bindable.property;
        }
        return new PropertyBindingInstruction(this.ep.parse(n, 8), s, _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingMode.twoWay);
    }
};

wn.inject = [ Zt, _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.IExpressionParser ];

wn = ot([ cn("two-way") ], wn);

let bn = class DefaultBindingCommand {
    constructor(t, e) {
        this.type = 0;
        this.m = t;
        this.ep = e;
    }
    get name() {
        return "bind";
    }
    build(t) {
        var e;
        const i = t.attr;
        const s = t.bindable;
        let n;
        let r;
        let o = i.target;
        let l = i.rawValue;
        if (null == s) {
            r = this.m.isTwoWay(t.node, o) ? _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingMode.twoWay : _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingMode.toView;
            o = null !== (e = this.m.map(t.node, o)) && void 0 !== e ? e : (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.camelCase)(o);
        } else {
            if ("" === l && 1 === t.def.type) l = (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.camelCase)(o);
            n = t.def.defaultBindingMode;
            r = s.mode === _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingMode.default || null == s.mode ? null == n || n === _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingMode.default ? _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingMode.toView : n : s.mode;
            o = s.property;
        }
        return new PropertyBindingInstruction(this.ep.parse(l, 8), o, r);
    }
};

bn.inject = [ Zt, _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.IExpressionParser ];

bn = ot([ cn("bind") ], bn);

let xn = class CallBindingCommand {
    constructor(t) {
        this.type = 0;
        this.ep = t;
    }
    get name() {
        return "call";
    }
    build(t) {
        const e = null === t.bindable ? (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.camelCase)(t.attr.target) : t.bindable.property;
        return new CallBindingInstruction(this.ep.parse(t.attr.rawValue, 8 | 4), e);
    }
};

xn.inject = [ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.IExpressionParser ];

xn = ot([ cn("call") ], xn);

let yn = class ForBindingCommand {
    constructor(t) {
        this.type = 0;
        this.ep = t;
    }
    get name() {
        return "for";
    }
    build(t) {
        const e = null === t.bindable ? (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.camelCase)(t.attr.target) : t.bindable.property;
        return new IteratorBindingInstruction(this.ep.parse(t.attr.rawValue, 2), e);
    }
};

yn.inject = [ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.IExpressionParser ];

yn = ot([ cn("for") ], yn);

let kn = class TriggerBindingCommand {
    constructor(t) {
        this.type = 1;
        this.ep = t;
    }
    get name() {
        return "trigger";
    }
    build(t) {
        return new ListenerBindingInstruction(this.ep.parse(t.attr.rawValue, 4), t.attr.target, true, _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.DelegationStrategy.none);
    }
};

kn.inject = [ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.IExpressionParser ];

kn = ot([ cn("trigger") ], kn);

let Cn = class DelegateBindingCommand {
    constructor(t) {
        this.type = 1;
        this.ep = t;
    }
    get name() {
        return "delegate";
    }
    build(t) {
        return new ListenerBindingInstruction(this.ep.parse(t.attr.rawValue, 4), t.attr.target, false, _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.DelegationStrategy.bubbling);
    }
};

Cn.inject = [ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.IExpressionParser ];

Cn = ot([ cn("delegate") ], Cn);

let An = class CaptureBindingCommand {
    constructor(t) {
        this.type = 1;
        this.ep = t;
    }
    get name() {
        return "capture";
    }
    build(t) {
        return new ListenerBindingInstruction(this.ep.parse(t.attr.rawValue, 4), t.attr.target, false, _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.DelegationStrategy.capturing);
    }
};

An.inject = [ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.IExpressionParser ];

An = ot([ cn("capture") ], An);

let Sn = class AttrBindingCommand {
    constructor(t) {
        this.type = 1;
        this.ep = t;
    }
    get name() {
        return "attr";
    }
    build(t) {
        return new AttributeBindingInstruction(t.attr.target, this.ep.parse(t.attr.rawValue, 8), t.attr.target);
    }
};

Sn.inject = [ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.IExpressionParser ];

Sn = ot([ cn("attr") ], Sn);

let Rn = class StyleBindingCommand {
    constructor(t) {
        this.type = 1;
        this.ep = t;
    }
    get name() {
        return "style";
    }
    build(t) {
        return new AttributeBindingInstruction("style", this.ep.parse(t.attr.rawValue, 8), t.attr.target);
    }
};

Rn.inject = [ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.IExpressionParser ];

Rn = ot([ cn("style") ], Rn);

let En = class ClassBindingCommand {
    constructor(t) {
        this.type = 1;
        this.ep = t;
    }
    get name() {
        return "class";
    }
    build(t) {
        return new AttributeBindingInstruction("class", this.ep.parse(t.attr.rawValue, 8), t.attr.target);
    }
};

En.inject = [ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.IExpressionParser ];

En = ot([ cn("class") ], En);

let Bn = class RefBindingCommand {
    constructor(t) {
        this.type = 1;
        this.ep = t;
    }
    get name() {
        return "ref";
    }
    build(t) {
        return new RefBindingInstruction(this.ep.parse(t.attr.rawValue, 8), t.attr.target);
    }
};

Bn.inject = [ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.IExpressionParser ];

Bn = ot([ cn("ref") ], Bn);

let In = class SpreadBindingCommand {
    constructor() {
        this.type = 1;
    }
    get name() {
        return "...$attrs";
    }
    build(t) {
        return new SpreadBindingInstruction;
    }
};

In = ot([ cn("...$attrs") ], In);

const Tn = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.DI.createInterface("ITemplateElementFactory", (t => t.singleton(TemplateElementFactory)));

const Dn = {};

class TemplateElementFactory {
    constructor(t) {
        this.p = t;
        this.ne = t.document.createElement("template");
    }
    createTemplate(t) {
        var e;
        if (At(t)) {
            let e = Dn[t];
            if (void 0 === e) {
                const i = this.ne;
                i.innerHTML = t;
                const s = i.content.firstElementChild;
                if (null == s || "TEMPLATE" !== s.nodeName || null != s.nextElementSibling) {
                    this.ne = this.p.document.createElement("template");
                    e = i;
                } else {
                    i.content.removeChild(s);
                    e = s;
                }
                Dn[t] = e;
            }
            return e.cloneNode(true);
        }
        if ("TEMPLATE" !== t.nodeName) {
            const e = this.p.document.createElement("template");
            e.content.appendChild(t);
            return e;
        }
        null === (e = t.parentNode) || void 0 === e ? void 0 : e.removeChild(t);
        return t.cloneNode(true);
    }
}

TemplateElementFactory.inject = [ Kt ];

const Pn = function(t) {
    function e(t, i, s) {
        _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.DI.inject(e)(t, i, s);
    }
    e.$isResolver = true;
    e.resolve = function(e, i) {
        if (i.root === i) return i.getAll(t, false);
        return i.has(t, false) ? i.getAll(t, false).concat(i.root.getAll(t, false)) : i.root.getAll(t, false);
    };
    return e;
};

class TemplateCompiler {
    constructor() {
        this.debug = false;
        this.resolveResources = true;
    }
    static register(t) {
        return _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.Registration.singleton(As, this).register(t);
    }
    compile(t, e, i) {
        var s, n, r, o;
        const l = CustomElementDefinition.getOrCreate(t);
        if (null === l.template || void 0 === l.template) return l;
        if (false === l.needsCompile) return l;
        null !== i && void 0 !== i ? i : i = Ln;
        const a = new CompilationContext(t, e, i, null, null, void 0);
        const c = At(l.template) || !t.enhance ? a.re.createTemplate(l.template) : l.template;
        const u = "TEMPLATE" === c.nodeName && null != c.content;
        const f = u ? c.content : c;
        const d = e.get(Pn(zn));
        const m = d.length;
        let v = 0;
        if (m > 0) while (m > v) {
            null === (n = (s = d[v]).compiling) || void 0 === n ? void 0 : n.call(s, c);
            ++v;
        }
        if (c.hasAttribute(Nn)) throw new Error("AUR0701");
        this.oe(f, a);
        this.le(f, a);
        return CustomElementDefinition.create({
            ...t,
            name: t.name || Qn(),
            dependencies: (null !== (r = t.dependencies) && void 0 !== r ? r : _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.emptyArray).concat(null !== (o = a.deps) && void 0 !== o ? o : _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.emptyArray),
            instructions: a.rows,
            surrogates: u ? this.he(c, a) : _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.emptyArray,
            template: c,
            hasSlots: a.hasSlot,
            needsCompile: false
        });
    }
    compileSpread(t, e, i, s) {
        var n;
        const r = new CompilationContext(t, i, Ln, null, null, void 0);
        const o = [];
        const l = r.ae(s.nodeName.toLowerCase());
        const h = r.ep;
        const a = e.length;
        let c = 0;
        let u;
        let f = null;
        let d;
        let m;
        let v;
        let p;
        let g;
        let w = null;
        let b;
        let x;
        let y;
        let k;
        for (;a > c; ++c) {
            u = e[c];
            y = u.target;
            k = u.rawValue;
            w = r.ce(u);
            if (null !== w && (1 & w.type) > 0) {
                Mn.node = s;
                Mn.attr = u;
                Mn.bindable = null;
                Mn.def = null;
                o.push(w.build(Mn));
                continue;
            }
            f = r.ue(y);
            if (null !== f) {
                if (f.isTemplateController) throw new Error(`AUR0703:${y}`);
                v = BindablesInfo.from(f, true);
                x = false === f.noMultiBindings && null === w && On(k);
                if (x) m = this.fe(s, k, f, r); else {
                    g = v.primary;
                    if (null === w) {
                        b = h.parse(k, 1);
                        m = [ null === b ? new SetPropertyInstruction(k, g.property) : new InterpolationInstruction(b, g.property) ];
                    } else {
                        Mn.node = s;
                        Mn.attr = u;
                        Mn.bindable = g;
                        Mn.def = f;
                        m = [ w.build(Mn) ];
                    }
                }
                (null !== d && void 0 !== d ? d : d = []).push(new HydrateAttributeInstruction(this.resolveResources ? f : f.name, null != f.aliases && f.aliases.includes(y) ? y : void 0, m));
                continue;
            }
            if (null === w) {
                b = h.parse(k, 1);
                if (null !== l) {
                    v = BindablesInfo.from(l, false);
                    p = v.attrs[y];
                    if (void 0 !== p) {
                        b = h.parse(k, 1);
                        o.push(new SpreadElementPropBindingInstruction(null == b ? new SetPropertyInstruction(k, p.property) : new InterpolationInstruction(b, p.property)));
                        continue;
                    }
                }
                if (null != b) o.push(new InterpolationInstruction(b, null !== (n = r.m.map(s, y)) && void 0 !== n ? n : (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.camelCase)(y))); else switch (y) {
                  case "class":
                    o.push(new SetClassAttributeInstruction(k));
                    break;

                  case "style":
                    o.push(new SetStyleAttributeInstruction(k));
                    break;

                  default:
                    o.push(new SetAttributeInstruction(k, y));
                }
            } else {
                if (null !== l) {
                    v = BindablesInfo.from(l, false);
                    p = v.attrs[y];
                    if (void 0 !== p) {
                        Mn.node = s;
                        Mn.attr = u;
                        Mn.bindable = p;
                        Mn.def = l;
                        o.push(new SpreadElementPropBindingInstruction(w.build(Mn)));
                        continue;
                    }
                }
                Mn.node = s;
                Mn.attr = u;
                Mn.bindable = null;
                Mn.def = null;
                o.push(w.build(Mn));
            }
        }
        $n();
        if (null != d) return d.concat(o);
        return o;
    }
    he(t, e) {
        var i;
        const s = [];
        const n = t.attributes;
        const r = e.ep;
        let o = n.length;
        let l = 0;
        let h;
        let a;
        let c;
        let u;
        let f = null;
        let d;
        let m;
        let v;
        let p;
        let g = null;
        let w;
        let b;
        let x;
        let y;
        for (;o > l; ++l) {
            h = n[l];
            a = h.name;
            c = h.value;
            u = e.de.parse(a, c);
            x = u.target;
            y = u.rawValue;
            if (Un[x]) throw new Error(`AUR0702:${a}`);
            g = e.ce(u);
            if (null !== g && (1 & g.type) > 0) {
                Mn.node = t;
                Mn.attr = u;
                Mn.bindable = null;
                Mn.def = null;
                s.push(g.build(Mn));
                continue;
            }
            f = e.ue(x);
            if (null !== f) {
                if (f.isTemplateController) throw new Error(`AUR0703:${x}`);
                v = BindablesInfo.from(f, true);
                b = false === f.noMultiBindings && null === g && On(y);
                if (b) m = this.fe(t, y, f, e); else {
                    p = v.primary;
                    if (null === g) {
                        w = r.parse(y, 1);
                        m = [ null === w ? new SetPropertyInstruction(y, p.property) : new InterpolationInstruction(w, p.property) ];
                    } else {
                        Mn.node = t;
                        Mn.attr = u;
                        Mn.bindable = p;
                        Mn.def = f;
                        m = [ g.build(Mn) ];
                    }
                }
                t.removeAttribute(a);
                --l;
                --o;
                (null !== d && void 0 !== d ? d : d = []).push(new HydrateAttributeInstruction(this.resolveResources ? f : f.name, null != f.aliases && f.aliases.includes(x) ? x : void 0, m));
                continue;
            }
            if (null === g) {
                w = r.parse(y, 1);
                if (null != w) {
                    t.removeAttribute(a);
                    --l;
                    --o;
                    s.push(new InterpolationInstruction(w, null !== (i = e.m.map(t, x)) && void 0 !== i ? i : (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.camelCase)(x)));
                } else switch (a) {
                  case "class":
                    s.push(new SetClassAttributeInstruction(y));
                    break;

                  case "style":
                    s.push(new SetStyleAttributeInstruction(y));
                    break;

                  default:
                    s.push(new SetAttributeInstruction(y, a));
                }
            } else {
                Mn.node = t;
                Mn.attr = u;
                Mn.bindable = null;
                Mn.def = null;
                s.push(g.build(Mn));
            }
        }
        $n();
        if (null != d) return d.concat(s);
        return s;
    }
    le(t, e) {
        switch (t.nodeType) {
          case 1:
            switch (t.nodeName) {
              case "LET":
                return this.me(t, e);

              default:
                return this.ve(t, e);
            }

          case 3:
            return this.pe(t, e);

          case 11:
            {
                let i = t.firstChild;
                while (null !== i) i = this.le(i, e);
                break;
            }
        }
        return t.nextSibling;
    }
    me(t, e) {
        const i = t.attributes;
        const s = i.length;
        const n = [];
        const r = e.ep;
        let o = false;
        let l = 0;
        let h;
        let a;
        let c;
        let u;
        let f;
        let d;
        let m;
        let v;
        for (;s > l; ++l) {
            h = i[l];
            c = h.name;
            u = h.value;
            if ("to-binding-context" === c) {
                o = true;
                continue;
            }
            a = e.de.parse(c, u);
            d = a.target;
            m = a.rawValue;
            f = e.ce(a);
            if (null !== f) switch (f.name) {
              case "to-view":
              case "bind":
                n.push(new LetBindingInstruction(r.parse(m, 8), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.camelCase)(d)));
                continue;

              default:
                throw new Error(`AUR0704:${a.command}`);
            }
            v = r.parse(m, 1);
            n.push(new LetBindingInstruction(null === v ? new _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.PrimitiveLiteralExpression(m) : v, (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.camelCase)(d)));
        }
        e.rows.push([ new HydrateLetElementInstruction(n, o) ]);
        return this.ge(t).nextSibling;
    }
    ve(t, e) {
        var i, s, n, r, l, a;
        var c, u;
        const f = t.nextSibling;
        const d = (null !== (i = t.getAttribute("as-element")) && void 0 !== i ? i : t.nodeName).toLowerCase();
        const m = e.ae(d);
        const v = !!(null === m || void 0 === m ? void 0 : m.capture);
        const p = v ? [] : _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.emptyArray;
        const g = e.ep;
        const w = this.debug ? _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.noop : () => {
            t.removeAttribute(A);
            --k;
            --y;
        };
        let b = t.attributes;
        let x;
        let y = b.length;
        let k = 0;
        let C;
        let A;
        let R;
        let E;
        let B;
        let I;
        let T = null;
        let D = false;
        let P;
        let O;
        let $;
        let L;
        let q;
        let M;
        let U;
        let F = null;
        let V;
        let _;
        let j;
        let N;
        let W = true;
        let H = false;
        if ("slot" === d) e.root.hasSlot = true;
        if (null !== m) {
            W = null === (s = m.processContent) || void 0 === s ? void 0 : s.call(m.Type, t, e.p);
            b = t.attributes;
            y = b.length;
        }
        if (e.root.def.enhance && t.classList.contains("au")) throw new Error(`AUR0705`);
        for (;y > k; ++k) {
            C = b[k];
            A = C.name;
            R = C.value;
            switch (A) {
              case "as-element":
              case "containerless":
                w();
                if (!H) H = "containerless" === A;
                continue;
            }
            E = e.de.parse(A, R);
            F = e.ce(E);
            j = E.target;
            N = E.rawValue;
            if (v) {
                if (null != F && 1 & F.type) {
                    w();
                    p.push(E);
                    continue;
                }
                if ("au-slot" !== j) {
                    V = BindablesInfo.from(m, false);
                    if (null == V.attrs[j] && !(null === (n = e.ue(j)) || void 0 === n ? void 0 : n.isTemplateController)) {
                        w();
                        p.push(E);
                        continue;
                    }
                }
            }
            if (null !== F && 1 & F.type) {
                Mn.node = t;
                Mn.attr = E;
                Mn.bindable = null;
                Mn.def = null;
                (null !== B && void 0 !== B ? B : B = []).push(F.build(Mn));
                w();
                continue;
            }
            T = e.ue(j);
            if (null !== T) {
                V = BindablesInfo.from(T, true);
                D = false === T.noMultiBindings && null === F && On(R);
                if (D) $ = this.fe(t, R, T, e); else {
                    _ = V.primary;
                    if (null === F) {
                        M = g.parse(R, 1);
                        $ = [ null === M ? new SetPropertyInstruction(R, _.property) : new InterpolationInstruction(M, _.property) ];
                    } else {
                        Mn.node = t;
                        Mn.attr = E;
                        Mn.bindable = _;
                        Mn.def = T;
                        $ = [ F.build(Mn) ];
                    }
                }
                w();
                if (T.isTemplateController) (null !== L && void 0 !== L ? L : L = []).push(new HydrateTemplateController(qn, this.resolveResources ? T : T.name, void 0, $)); else (null !== O && void 0 !== O ? O : O = []).push(new HydrateAttributeInstruction(this.resolveResources ? T : T.name, null != T.aliases && T.aliases.includes(j) ? j : void 0, $));
                continue;
            }
            if (null === F) {
                if (null !== m) {
                    V = BindablesInfo.from(m, false);
                    P = V.attrs[j];
                    if (void 0 !== P) {
                        M = g.parse(N, 1);
                        (null !== I && void 0 !== I ? I : I = []).push(null == M ? new SetPropertyInstruction(N, P.property) : new InterpolationInstruction(M, P.property));
                        w();
                        continue;
                    }
                }
                M = g.parse(N, 1);
                if (null != M) {
                    w();
                    (null !== B && void 0 !== B ? B : B = []).push(new InterpolationInstruction(M, null !== (r = e.m.map(t, j)) && void 0 !== r ? r : (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.camelCase)(j)));
                }
                continue;
            }
            w();
            if (null !== m) {
                V = BindablesInfo.from(m, false);
                P = V.attrs[j];
                if (void 0 !== P) {
                    Mn.node = t;
                    Mn.attr = E;
                    Mn.bindable = P;
                    Mn.def = m;
                    (null !== I && void 0 !== I ? I : I = []).push(F.build(Mn));
                    continue;
                }
            }
            Mn.node = t;
            Mn.attr = E;
            Mn.bindable = null;
            Mn.def = null;
            (null !== B && void 0 !== B ? B : B = []).push(F.build(Mn));
        }
        $n();
        if (this.we(t) && null != B && B.length > 1) this.be(t, B);
        if (null !== m) {
            U = new HydrateElementInstruction(this.resolveResources ? m : m.name, void 0, null !== I && void 0 !== I ? I : _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.emptyArray, null, H, p);
            if ("au-slot" === d) {
                const i = t.getAttribute("name") || "default";
                const s = e.h("template");
                const n = e.xe();
                let r = t.firstChild;
                while (null !== r) {
                    if (1 === r.nodeType && r.hasAttribute("au-slot")) t.removeChild(r); else s.content.appendChild(r);
                    r = t.firstChild;
                }
                this.le(s.content, n);
                U.auSlot = {
                    name: i,
                    fallback: CustomElementDefinition.create({
                        name: Qn(),
                        template: s,
                        instructions: n.rows,
                        needsCompile: false
                    })
                };
                t = this.ye(t, e);
            }
        }
        if (null != B || null != U || null != O) {
            x = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.emptyArray.concat(null !== U && void 0 !== U ? U : _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.emptyArray, null !== O && void 0 !== O ? O : _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.emptyArray, null !== B && void 0 !== B ? B : _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.emptyArray);
            this.ge(t);
        }
        let z;
        if (null != L) {
            y = L.length - 1;
            k = y;
            q = L[k];
            let i;
            this.ye(t, e);
            if ("TEMPLATE" === t.nodeName) i = t; else {
                i = e.h("template");
                i.content.appendChild(t);
            }
            const s = i;
            const n = e.xe(null == x ? [] : [ x ]);
            let r;
            let o;
            let h;
            let a;
            let u;
            let f;
            let v;
            let p;
            let g = 0, w = 0;
            let b = t.firstChild;
            if (false !== W) while (null !== b) if (1 === b.nodeType) {
                r = b;
                b = b.nextSibling;
                o = r.getAttribute("au-slot");
                if (null !== o) {
                    if (null === m) throw new Error(`AUR0706:${d}[${o}]`);
                    if ("" === o) o = "default";
                    r.removeAttribute("au-slot");
                    t.removeChild(r);
                    (null !== (l = (c = null !== a && void 0 !== a ? a : a = {})[o]) && void 0 !== l ? l : c[o] = []).push(r);
                }
            } else b = b.nextSibling;
            if (null != a) {
                h = {};
                for (o in a) {
                    i = e.h("template");
                    u = a[o];
                    for (g = 0, w = u.length; w > g; ++g) {
                        f = u[g];
                        if ("TEMPLATE" === f.nodeName) if (f.attributes.length > 0) i.content.appendChild(f); else i.content.appendChild(f.content); else i.content.appendChild(f);
                    }
                    p = e.xe();
                    this.le(i.content, p);
                    h[o] = CustomElementDefinition.create({
                        name: Qn(),
                        template: i,
                        instructions: p.rows,
                        needsCompile: false,
                        isStrictBinding: e.root.def.isStrictBinding
                    });
                }
                U.projections = h;
            }
            if (null !== m && m.containerless) this.ye(t, e);
            z = null === m || !m.containerless && !H && false !== W;
            if (z) if ("TEMPLATE" === t.nodeName) this.le(t.content, n); else {
                b = t.firstChild;
                while (null !== b) b = this.le(b, n);
            }
            q.def = CustomElementDefinition.create({
                name: Qn(),
                template: s,
                instructions: n.rows,
                needsCompile: false,
                isStrictBinding: e.root.def.isStrictBinding
            });
            while (k-- > 0) {
                q = L[k];
                i = e.h("template");
                v = e.h("au-m");
                v.classList.add("au");
                i.content.appendChild(v);
                q.def = CustomElementDefinition.create({
                    name: Qn(),
                    template: i,
                    needsCompile: false,
                    instructions: [ [ L[k + 1] ] ],
                    isStrictBinding: e.root.def.isStrictBinding
                });
            }
            e.rows.push([ q ]);
        } else {
            if (null != x) e.rows.push(x);
            let i = t.firstChild;
            let s;
            let n;
            let r = null;
            let o;
            let l;
            let h;
            let c;
            let f;
            let d = 0, v = 0;
            if (false !== W) while (null !== i) if (1 === i.nodeType) {
                s = i;
                i = i.nextSibling;
                n = s.getAttribute("au-slot");
                if (null !== n) {
                    if (null === m) throw new Error(`AUR0706:${t.nodeName}[${n}]`);
                    if ("" === n) n = "default";
                    t.removeChild(s);
                    s.removeAttribute("au-slot");
                    (null !== (a = (u = null !== o && void 0 !== o ? o : o = {})[n]) && void 0 !== a ? a : u[n] = []).push(s);
                }
            } else i = i.nextSibling;
            if (null != o) {
                r = {};
                for (n in o) {
                    c = e.h("template");
                    l = o[n];
                    for (d = 0, v = l.length; v > d; ++d) {
                        h = l[d];
                        if ("TEMPLATE" === h.nodeName) if (h.attributes.length > 0) c.content.appendChild(h); else c.content.appendChild(h.content); else c.content.appendChild(h);
                    }
                    f = e.xe();
                    this.le(c.content, f);
                    r[n] = CustomElementDefinition.create({
                        name: Qn(),
                        template: c,
                        instructions: f.rows,
                        needsCompile: false,
                        isStrictBinding: e.root.def.isStrictBinding
                    });
                }
                U.projections = r;
            }
            if (null !== m && m.containerless) this.ye(t, e);
            z = null === m || !m.containerless && !H && false !== W;
            if (z && t.childNodes.length > 0) {
                i = t.firstChild;
                while (null !== i) i = this.le(i, e);
            }
        }
        return f;
    }
    pe(t, e) {
        let i = "";
        let s = t;
        while (null !== s && 3 === s.nodeType) {
            i += s.textContent;
            s = s.nextSibling;
        }
        const n = e.ep.parse(i, 1);
        if (null === n) return s;
        const r = t.parentNode;
        r.insertBefore(this.ge(e.h("au-m")), t);
        e.rows.push([ new TextBindingInstruction(n, !!e.def.isStrictBinding) ]);
        t.textContent = "";
        s = t.nextSibling;
        while (null !== s && 3 === s.nodeType) {
            r.removeChild(s);
            s = t.nextSibling;
        }
        return t.nextSibling;
    }
    fe(t, e, i, s) {
        const n = BindablesInfo.from(i, true);
        const r = e.length;
        const o = [];
        let l;
        let h;
        let a = 0;
        let c = 0;
        let u;
        let f;
        let d;
        let m;
        for (let v = 0; v < r; ++v) {
            c = e.charCodeAt(v);
            if (92 === c) ++v; else if (58 === c) {
                l = e.slice(a, v);
                while (e.charCodeAt(++v) <= 32) ;
                a = v;
                for (;v < r; ++v) {
                    c = e.charCodeAt(v);
                    if (92 === c) ++v; else if (59 === c) {
                        h = e.slice(a, v);
                        break;
                    }
                }
                if (void 0 === h) h = e.slice(a);
                f = s.de.parse(l, h);
                d = s.ce(f);
                m = n.attrs[f.target];
                if (null == m) throw new Error(`AUR0707:${i.name}.${f.target}`);
                if (null === d) {
                    u = s.ep.parse(h, 1);
                    o.push(null === u ? new SetPropertyInstruction(h, m.property) : new InterpolationInstruction(u, m.property));
                } else {
                    Mn.node = t;
                    Mn.attr = f;
                    Mn.bindable = m;
                    Mn.def = i;
                    o.push(d.build(Mn));
                }
                while (v < r && e.charCodeAt(++v) <= 32) ;
                a = v;
                l = void 0;
                h = void 0;
            }
        }
        $n();
        return o;
    }
    oe(t, e) {
        const i = t;
        const s = (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.toArray)(i.querySelectorAll("template[as-custom-element]"));
        const n = s.length;
        if (0 === n) return;
        if (n === i.childElementCount) throw new Error("AUR0708");
        const r = new Set;
        for (const t of s) {
            if (t.parentNode !== i) throw new Error("AUR0709");
            const s = Wn(t, r);
            const n = class LocalTemplate {};
            const o = t.content;
            const l = (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.toArray)(o.querySelectorAll("bindable"));
            const h = Bt.for(n);
            const a = new Set;
            const c = new Set;
            for (const t of l) {
                if (t.parentNode !== o) throw new Error("AUR0710");
                const e = t.getAttribute("property");
                if (null === e) throw new Error("AUR0711");
                const i = t.getAttribute("attribute");
                if (null !== i && c.has(i) || a.has(e)) throw new Error(`AUR0712:${e}+${i}`); else {
                    if (null !== i) c.add(i);
                    a.add(e);
                }
                h.add({
                    property: e,
                    attribute: null !== i && void 0 !== i ? i : void 0,
                    mode: Hn(t)
                });
                const s = t.getAttributeNames().filter((t => !jn.includes(t)));
                if (s.length > 0) ;
                o.removeChild(t);
            }
            e.ke(si.define({
                name: s,
                template: t
            }, n));
            i.removeChild(t);
        }
    }
    we(t) {
        return "INPUT" === t.nodeName && 1 === Fn[t.type];
    }
    be(t, e) {
        switch (t.nodeName) {
          case "INPUT":
            {
                const t = e;
                let i;
                let s;
                let n = 0;
                let r;
                for (let e = 0; e < t.length && n < 3; e++) {
                    r = t[e];
                    switch (r.to) {
                      case "model":
                      case "value":
                      case "matcher":
                        i = e;
                        n++;
                        break;

                      case "checked":
                        s = e;
                        n++;
                        break;
                    }
                }
                if (void 0 !== s && void 0 !== i && s < i) [t[i], t[s]] = [ t[s], t[i] ];
            }
        }
    }
    ge(t) {
        t.classList.add("au");
        return t;
    }
    ye(t, e) {
        const i = t.parentNode;
        const s = e.h("au-m");
        this.ge(i.insertBefore(s, t));
        i.removeChild(t);
        return s;
    }
}

class CompilationContext {
    constructor(t, e, i, s, n, r) {
        this.hasSlot = false;
        this.Ce = wt();
        const o = null !== s;
        this.c = e;
        this.root = null === n ? this : n;
        this.def = t;
        this.ci = i;
        this.parent = s;
        this.re = o ? s.re : e.get(Tn);
        this.de = o ? s.de : e.get(Ut);
        this.ep = o ? s.ep : e.get(_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.IExpressionParser);
        this.m = o ? s.m : e.get(Zt);
        this.Ft = o ? s.Ft : e.get(_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.ILogger);
        this.p = o ? s.p : e.get(Kt);
        this.localEls = o ? s.localEls : new Set;
        this.rows = null !== r && void 0 !== r ? r : [];
    }
    ke(t) {
        var e;
        var i;
        (null !== (e = (i = this.root).deps) && void 0 !== e ? e : i.deps = []).push(t);
        this.root.c.register(t);
    }
    h(t) {
        const e = this.p.document.createElement(t);
        if ("template" === t) this.p.document.adoptNode(e.content);
        return e;
    }
    ae(t) {
        return this.c.find(si, t);
    }
    ue(t) {
        return this.c.find(Me, t);
    }
    xe(t) {
        return new CompilationContext(this.def, this.c, this.ci, this, this.root, t);
    }
    ce(t) {
        if (this.root !== this) return this.root.ce(t);
        const e = t.command;
        if (null === e) return null;
        let i = this.Ce[e];
        if (void 0 === i) {
            i = this.c.create(mn, e);
            if (null === i) throw new Error(`AUR0713:${e}`);
            this.Ce[e] = i;
        }
        return i;
    }
}

function On(t) {
    const e = t.length;
    let i = 0;
    let s = 0;
    while (e > s) {
        i = t.charCodeAt(s);
        if (92 === i) ++s; else if (58 === i) return true; else if (36 === i && 123 === t.charCodeAt(s + 1)) return false;
        ++s;
    }
    return false;
}

function $n() {
    Mn.node = Mn.attr = Mn.bindable = Mn.def = null;
}

const Ln = {
    projections: null
};

const qn = {
    name: "unnamed"
};

const Mn = {
    node: null,
    attr: null,
    bindable: null,
    def: null
};

const Un = Object.assign(wt(), {
    id: true,
    name: true,
    "au-slot": true,
    "as-element": true
});

const Fn = {
    checkbox: 1,
    radio: 1
};

const Vn = new WeakMap;

class BindablesInfo {
    constructor(t, e, i) {
        this.attrs = t;
        this.bindables = e;
        this.primary = i;
    }
    static from(t, e) {
        let i = Vn.get(t);
        if (null == i) {
            const s = t.bindables;
            const n = wt();
            const r = e ? void 0 === t.defaultBindingMode ? _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingMode.default : t.defaultBindingMode : _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingMode.default;
            let o;
            let l;
            let h = false;
            let a;
            let c;
            for (l in s) {
                o = s[l];
                c = o.attribute;
                if (true === o.primary) {
                    if (h) throw new Error(`AUR0714:${t.name}`);
                    h = true;
                    a = o;
                } else if (!h && null == a) a = o;
                n[c] = BindableDefinition.create(l, t.Type, o);
            }
            if (null == o && e) a = n.value = BindableDefinition.create("value", t.Type, {
                mode: r
            });
            Vn.set(t, i = new BindablesInfo(n, s, a));
        }
        return i;
    }
}

var _n;

(function(t) {
    t["property"] = "property";
    t["attribute"] = "attribute";
    t["mode"] = "mode";
})(_n || (_n = {}));

const jn = Object.freeze([ "property", "attribute", "mode" ]);

const Nn = "as-custom-element";

function Wn(t, e) {
    const i = t.getAttribute(Nn);
    if (null === i || "" === i) throw new Error("AUR0715");
    if (e.has(i)) throw new Error(`AUR0716:${i}`); else {
        e.add(i);
        t.removeAttribute(Nn);
    }
    return i;
}

function Hn(t) {
    switch (t.getAttribute("mode")) {
      case "oneTime":
        return _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingMode.oneTime;

      case "toView":
        return _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingMode.toView;

      case "fromView":
        return _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingMode.fromView;

      case "twoWay":
        return _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingMode.twoWay;

      case "default":
      default:
        return _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingMode.default;
    }
}

const zn = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.DI.createInterface("ITemplateCompilerHooks");

const Gn = new WeakMap;

const Xn = mt("compiler-hooks");

const Kn = Object.freeze({
    name: Xn,
    define(t) {
        let e = Gn.get(t);
        if (void 0 === e) {
            Gn.set(t, e = new TemplateCompilerHooksDefinition(t));
            ct(Xn, e, t);
            vt(t, Xn);
        }
        return t;
    }
});

class TemplateCompilerHooksDefinition {
    constructor(t) {
        this.Type = t;
    }
    get name() {
        return "";
    }
    register(t) {
        t.register(_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.Registration.singleton(zn, this.Type));
    }
}

const Yn = t => {
    return void 0 === t ? e : e(t);
    function e(t) {
        return Kn.define(t);
    }
};

const Qn = si.generateName;

class BindingModeBehavior {
    constructor(t) {
        this.mode = t;
        this.Ae = new Map;
    }
    bind(t, e, i) {
        this.Ae.set(i, i.mode);
        i.mode = this.mode;
    }
    unbind(t, e, i) {
        i.mode = this.Ae.get(i);
        this.Ae.delete(i);
    }
}

class OneTimeBindingBehavior extends BindingModeBehavior {
    constructor() {
        super(_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingMode.oneTime);
    }
}

class ToViewBindingBehavior extends BindingModeBehavior {
    constructor() {
        super(_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingMode.toView);
    }
}

class FromViewBindingBehavior extends BindingModeBehavior {
    constructor() {
        super(_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingMode.fromView);
    }
}

class TwoWayBindingBehavior extends BindingModeBehavior {
    constructor() {
        super(_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingMode.twoWay);
    }
}

(0,_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.bindingBehavior)("oneTime")(OneTimeBindingBehavior);

(0,_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.bindingBehavior)("toView")(ToViewBindingBehavior);

(0,_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.bindingBehavior)("fromView")(FromViewBindingBehavior);

(0,_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.bindingBehavior)("twoWay")(TwoWayBindingBehavior);

const Zn = 200;

class DebounceBindingBehavior extends _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingInterceptor {
    constructor(t, e) {
        super(t, e);
        this.opts = {
            delay: Zn
        };
        this.firstArg = null;
        this.task = null;
        this.taskQueue = t.locator.get(_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.IPlatform).taskQueue;
        if (e.args.length > 0) this.firstArg = e.args[0];
    }
    callSource(t) {
        this.queueTask((() => this.binding.callSource(t)));
        return;
    }
    handleChange(t, e, i) {
        if (null !== this.task) {
            this.task.cancel();
            this.task = null;
        }
        this.binding.handleChange(t, e, i);
    }
    updateSource(t, e) {
        this.queueTask((() => this.binding.updateSource(t, e)));
    }
    queueTask(t) {
        const e = this.task;
        this.task = this.taskQueue.queueTask((() => {
            this.task = null;
            return t();
        }), this.opts);
        null === e || void 0 === e ? void 0 : e.cancel();
    }
    $bind(t, e) {
        if (null !== this.firstArg) {
            const i = Number(this.firstArg.evaluate(t, e, this.locator, null));
            this.opts.delay = isNaN(i) ? Zn : i;
        }
        this.binding.$bind(t, e);
    }
    $unbind(t) {
        var e;
        null === (e = this.task) || void 0 === e ? void 0 : e.cancel();
        this.task = null;
        this.binding.$unbind(t);
    }
}

(0,_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.bindingBehavior)("debounce")(DebounceBindingBehavior);

class SignalBindingBehavior {
    constructor(t) {
        this.Zt = new Map;
        this.Se = t;
    }
    bind(t, e, i, ...s) {
        if (!("handleChange" in i)) throw new Error("AUR0817");
        if (0 === s.length) throw new Error("AUR0818");
        this.Zt.set(i, s);
        let n;
        for (n of s) this.Se.addSignalListener(n, i);
    }
    unbind(t, e, i) {
        const s = this.Zt.get(i);
        this.Zt.delete(i);
        let n;
        for (n of s) this.Se.removeSignalListener(n, i);
    }
}

SignalBindingBehavior.inject = [ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.ISignaler ];

(0,_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.bindingBehavior)("signal")(SignalBindingBehavior);

const Jn = 200;

class ThrottleBindingBehavior extends _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingInterceptor {
    constructor(t, e) {
        super(t, e);
        this.opts = {
            delay: Jn
        };
        this.firstArg = null;
        this.task = null;
        this.lastCall = 0;
        this.delay = 0;
        this.p = t.locator.get(_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.IPlatform);
        this.Re = this.p.taskQueue;
        if (e.args.length > 0) this.firstArg = e.args[0];
    }
    callSource(t) {
        this.Ee((() => this.binding.callSource(t)));
        return;
    }
    handleChange(t, e, i) {
        if (null !== this.task) {
            this.task.cancel();
            this.task = null;
            this.lastCall = this.p.performanceNow();
        }
        this.binding.handleChange(t, e, i);
    }
    updateSource(t, e) {
        this.Ee((() => this.binding.updateSource(t, e)));
    }
    Ee(t) {
        const e = this.opts;
        const i = this.p;
        const s = this.lastCall + e.delay - i.performanceNow();
        if (s > 0) {
            const n = this.task;
            e.delay = s;
            this.task = this.Re.queueTask((() => {
                this.lastCall = i.performanceNow();
                this.task = null;
                e.delay = this.delay;
                t();
            }), e);
            null === n || void 0 === n ? void 0 : n.cancel();
        } else {
            this.lastCall = i.performanceNow();
            t();
        }
    }
    $bind(t, e) {
        if (null !== this.firstArg) {
            const i = Number(this.firstArg.evaluate(t, e, this.locator, null));
            this.opts.delay = this.delay = isNaN(i) ? Jn : i;
        }
        this.binding.$bind(t, e);
    }
    $unbind(t) {
        var e;
        null === (e = this.task) || void 0 === e ? void 0 : e.cancel();
        this.task = null;
        super.$unbind(t);
    }
}

(0,_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.bindingBehavior)("throttle")(ThrottleBindingBehavior);

class DataAttributeAccessor {
    constructor() {
        this.type = 2 | 4;
    }
    getValue(t, e) {
        return t.getAttribute(e);
    }
    setValue(t, e, i, s) {
        if (void 0 == t) i.removeAttribute(s); else i.setAttribute(s, t);
    }
}

const tr = new DataAttributeAccessor;

class AttrBindingBehavior {
    bind(t, e, i) {
        i.targetObserver = tr;
    }
    unbind(t, e, i) {
        return;
    }
}

(0,_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.bindingBehavior)("attr")(AttrBindingBehavior);

function er(t) {
    const e = t.composedPath()[0];
    if (this.target !== e) return;
    return this.selfEventCallSource(t);
}

class SelfBindingBehavior {
    bind(t, e, i) {
        if (!i.callSource || !i.targetEvent) throw new Error("AUR0801");
        i.selfEventCallSource = i.callSource;
        i.callSource = er;
    }
    unbind(t, e, i) {
        i.callSource = i.selfEventCallSource;
        i.selfEventCallSource = null;
    }
}

(0,_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.bindingBehavior)("self")(SelfBindingBehavior);

const ir = wt();

class AttributeNSAccessor {
    constructor(t) {
        this.ns = t;
        this.type = 2 | 4;
    }
    static forNs(t) {
        var e;
        return null !== (e = ir[t]) && void 0 !== e ? e : ir[t] = new AttributeNSAccessor(t);
    }
    getValue(t, e) {
        return t.getAttributeNS(this.ns, e);
    }
    setValue(t, e, i, s) {
        if (void 0 == t) i.removeAttributeNS(this.ns, s); else i.setAttributeNS(this.ns, s, t);
    }
}

function sr(t, e) {
    return t === e;
}

class CheckedObserver {
    constructor(t, e, i, s) {
        this.handler = i;
        this.type = 2 | 1 | 4;
        this.v = void 0;
        this.ov = void 0;
        this.Be = void 0;
        this.Ie = void 0;
        this.f = 0;
        this.o = t;
        this.oL = s;
    }
    getValue() {
        return this.v;
    }
    setValue(t, e) {
        const i = this.v;
        if (t === i) return;
        this.v = t;
        this.ov = i;
        this.f = e;
        this.Te();
        this.De();
        this.queue.add(this);
    }
    handleCollectionChange(t, e) {
        this.De();
    }
    handleChange(t, e, i) {
        this.De();
    }
    De() {
        const t = this.v;
        const e = this.o;
        const i = bt.call(e, "model") ? e.model : e.value;
        const s = "radio" === e.type;
        const n = void 0 !== e.matcher ? e.matcher : sr;
        if (s) e.checked = !!n(t, i); else if (true === t) e.checked = true; else {
            let s = false;
            if (t instanceof Array) s = -1 !== t.findIndex((t => !!n(t, i))); else if (t instanceof Set) {
                for (const e of t) if (n(e, i)) {
                    s = true;
                    break;
                }
            } else if (t instanceof Map) for (const e of t) {
                const t = e[0];
                const r = e[1];
                if (n(t, i) && true === r) {
                    s = true;
                    break;
                }
            }
            e.checked = s;
        }
    }
    handleEvent() {
        let t = this.ov = this.v;
        const e = this.o;
        const i = bt.call(e, "model") ? e.model : e.value;
        const s = e.checked;
        const n = void 0 !== e.matcher ? e.matcher : sr;
        if ("checkbox" === e.type) {
            if (t instanceof Array) {
                const e = t.findIndex((t => !!n(t, i)));
                if (s && -1 === e) t.push(i); else if (!s && -1 !== e) t.splice(e, 1);
                return;
            } else if (t instanceof Set) {
                const e = {};
                let r = e;
                for (const e of t) if (true === n(e, i)) {
                    r = e;
                    break;
                }
                if (s && r === e) t.add(i); else if (!s && r !== e) t.delete(r);
                return;
            } else if (t instanceof Map) {
                let e;
                for (const s of t) {
                    const t = s[0];
                    if (true === n(t, i)) {
                        e = t;
                        break;
                    }
                }
                t.set(e, s);
                return;
            }
            t = s;
        } else if (s) t = i; else return;
        this.v = t;
        this.queue.add(this);
    }
    start() {
        this.handler.subscribe(this.o, this);
        this.Te();
    }
    stop() {
        var t, e;
        this.handler.dispose();
        null === (t = this.Be) || void 0 === t ? void 0 : t.unsubscribe(this);
        this.Be = void 0;
        null === (e = this.Ie) || void 0 === e ? void 0 : e.unsubscribe(this);
    }
    subscribe(t) {
        if (this.subs.add(t) && 1 === this.subs.count) this.start();
    }
    unsubscribe(t) {
        if (this.subs.remove(t) && 0 === this.subs.count) this.stop();
    }
    flush() {
        nr = this.ov;
        this.ov = this.v;
        this.subs.notify(this.v, nr, this.f);
    }
    Te() {
        var t, e, i, s, n, r, o;
        const l = this.o;
        null === (n = null !== (t = this.Ie) && void 0 !== t ? t : this.Ie = null !== (i = null === (e = l.$observers) || void 0 === e ? void 0 : e.model) && void 0 !== i ? i : null === (s = l.$observers) || void 0 === s ? void 0 : s.value) || void 0 === n ? void 0 : n.subscribe(this);
        null === (r = this.Be) || void 0 === r ? void 0 : r.unsubscribe(this);
        this.Be = void 0;
        if ("checkbox" === l.type) null === (o = this.Be = gr(this.v, this.oL)) || void 0 === o ? void 0 : o.subscribe(this);
    }
}

(0,_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.subscriberCollection)(CheckedObserver);

(0,_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.withFlushQueue)(CheckedObserver);

let nr;

const rr = Object.prototype.hasOwnProperty;

const or = {
    childList: true,
    subtree: true,
    characterData: true
};

function lr(t, e) {
    return t === e;
}

class SelectValueObserver {
    constructor(t, e, i, s) {
        this.type = 2 | 1 | 4;
        this.v = void 0;
        this.ov = void 0;
        this.H = false;
        this.Pe = void 0;
        this.Oe = void 0;
        this.iO = false;
        this.o = t;
        this.oL = s;
        this.handler = i;
    }
    getValue() {
        return this.iO ? this.v : this.o.multiple ? hr(this.o.options) : this.o.value;
    }
    setValue(t, e) {
        this.ov = this.v;
        this.v = t;
        this.H = t !== this.ov;
        this.$e(t instanceof Array ? t : null);
        if (0 === (256 & e)) this.K();
    }
    K() {
        if (this.H) {
            this.H = false;
            this.syncOptions();
        }
    }
    handleCollectionChange() {
        this.syncOptions();
    }
    syncOptions() {
        var t;
        const e = this.v;
        const i = this.o;
        const s = Array.isArray(e);
        const n = null !== (t = i.matcher) && void 0 !== t ? t : lr;
        const r = i.options;
        let o = r.length;
        while (o-- > 0) {
            const t = r[o];
            const i = rr.call(t, "model") ? t.model : t.value;
            if (s) {
                t.selected = -1 !== e.findIndex((t => !!n(i, t)));
                continue;
            }
            t.selected = !!n(i, e);
        }
    }
    syncValue() {
        const t = this.o;
        const e = t.options;
        const i = e.length;
        const s = this.v;
        let n = 0;
        if (t.multiple) {
            if (!(s instanceof Array)) return true;
            let r;
            const o = t.matcher || lr;
            const l = [];
            while (n < i) {
                r = e[n];
                if (r.selected) l.push(rr.call(r, "model") ? r.model : r.value);
                ++n;
            }
            let h;
            n = 0;
            while (n < s.length) {
                h = s[n];
                if (-1 === l.findIndex((t => !!o(h, t)))) s.splice(n, 1); else ++n;
            }
            n = 0;
            while (n < l.length) {
                h = l[n];
                if (-1 === s.findIndex((t => !!o(h, t)))) s.push(h);
                ++n;
            }
            return false;
        }
        let r = null;
        let o;
        while (n < i) {
            o = e[n];
            if (o.selected) {
                r = rr.call(o, "model") ? o.model : o.value;
                break;
            }
            ++n;
        }
        this.ov = this.v;
        this.v = r;
        return true;
    }
    Le() {
        (this.Oe = new this.o.ownerDocument.defaultView.MutationObserver(this.qe.bind(this))).observe(this.o, or);
        this.$e(this.v instanceof Array ? this.v : null);
        this.iO = true;
    }
    Me() {
        var t;
        this.Oe.disconnect();
        null === (t = this.Pe) || void 0 === t ? void 0 : t.unsubscribe(this);
        this.Oe = this.Pe = void 0;
        this.iO = false;
    }
    $e(t) {
        var e;
        null === (e = this.Pe) || void 0 === e ? void 0 : e.unsubscribe(this);
        this.Pe = void 0;
        if (null != t) {
            if (!this.o.multiple) throw new Error("AUR0654");
            (this.Pe = this.oL.getArrayObserver(t)).subscribe(this);
        }
    }
    handleEvent() {
        const t = this.syncValue();
        if (t) this.queue.add(this);
    }
    qe(t) {
        this.syncOptions();
        const e = this.syncValue();
        if (e) this.queue.add(this);
    }
    subscribe(t) {
        if (this.subs.add(t) && 1 === this.subs.count) {
            this.handler.subscribe(this.o, this);
            this.Le();
        }
    }
    unsubscribe(t) {
        if (this.subs.remove(t) && 0 === this.subs.count) {
            this.handler.dispose();
            this.Me();
        }
    }
    flush() {
        ar = this.ov;
        this.ov = this.v;
        this.subs.notify(this.v, ar, 0);
    }
}

(0,_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.subscriberCollection)(SelectValueObserver);

(0,_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.withFlushQueue)(SelectValueObserver);

function hr(t) {
    const e = [];
    if (0 === t.length) return e;
    const i = t.length;
    let s = 0;
    let n;
    while (i > s) {
        n = t[s];
        if (n.selected) e[e.length] = rr.call(n, "model") ? n.model : n.value;
        ++s;
    }
    return e;
}

let ar;

const cr = "--";

class StyleAttributeAccessor {
    constructor(t) {
        this.obj = t;
        this.type = 2 | 4;
        this.value = "";
        this.ov = "";
        this.styles = {};
        this.version = 0;
        this.H = false;
    }
    getValue() {
        return this.obj.style.cssText;
    }
    setValue(t, e) {
        this.value = t;
        this.H = t !== this.ov;
        if (0 === (256 & e)) this.K();
    }
    Ue(t) {
        const e = [];
        const i = /url\([^)]+$/;
        let s = 0;
        let n = "";
        let r;
        let o;
        let l;
        let h;
        while (s < t.length) {
            r = t.indexOf(";", s);
            if (-1 === r) r = t.length;
            n += t.substring(s, r);
            s = r + 1;
            if (i.test(n)) {
                n += ";";
                continue;
            }
            o = n.indexOf(":");
            l = n.substring(0, o).trim();
            h = n.substring(o + 1).trim();
            e.push([ l, h ]);
            n = "";
        }
        return e;
    }
    Fe(t) {
        let e;
        let i;
        const s = [];
        for (i in t) {
            e = t[i];
            if (null == e) continue;
            if (At(e)) {
                if (i.startsWith(cr)) {
                    s.push([ i, e ]);
                    continue;
                }
                s.push([ (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.kebabCase)(i), e ]);
                continue;
            }
            s.push(...this.Ve(e));
        }
        return s;
    }
    _e(t) {
        const e = t.length;
        if (e > 0) {
            const i = [];
            let s = 0;
            for (;e > s; ++s) i.push(...this.Ve(t[s]));
            return i;
        }
        return _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.emptyArray;
    }
    Ve(t) {
        if (At(t)) return this.Ue(t);
        if (t instanceof Array) return this._e(t);
        if (t instanceof Object) return this.Fe(t);
        return _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.emptyArray;
    }
    K() {
        if (this.H) {
            this.H = false;
            const t = this.value;
            const e = this.styles;
            const i = this.Ve(t);
            let s;
            let n = this.version;
            this.ov = t;
            let r;
            let o;
            let l;
            let h = 0;
            const a = i.length;
            for (;h < a; ++h) {
                r = i[h];
                o = r[0];
                l = r[1];
                this.setProperty(o, l);
                e[o] = n;
            }
            this.styles = e;
            this.version += 1;
            if (0 === n) return;
            n -= 1;
            for (s in e) {
                if (!Object.prototype.hasOwnProperty.call(e, s) || e[s] !== n) continue;
                this.obj.style.removeProperty(s);
            }
        }
    }
    setProperty(t, e) {
        let i = "";
        if (null != e && Ct(e.indexOf) && e.includes("!important")) {
            i = "important";
            e = e.replace("!important", "");
        }
        this.obj.style.setProperty(t, e, i);
    }
    bind(t) {
        this.value = this.ov = this.obj.style.cssText;
    }
}

class ValueAttributeObserver {
    constructor(t, e, i) {
        this.handler = i;
        this.type = 2 | 1 | 4;
        this.v = "";
        this.ov = "";
        this.H = false;
        this.o = t;
        this.k = e;
    }
    getValue() {
        return this.v;
    }
    setValue(t, e) {
        if (Object.is(t, this.v)) return;
        this.ov = this.v;
        this.v = t;
        this.H = true;
        if (!this.handler.config.readonly && 0 === (256 & e)) this.K(e);
    }
    K(t) {
        var e;
        if (this.H) {
            this.H = false;
            this.o[this.k] = null !== (e = this.v) && void 0 !== e ? e : this.handler.config.default;
            if (0 === (2 & t)) this.queue.add(this);
        }
    }
    handleEvent() {
        this.ov = this.v;
        this.v = this.o[this.k];
        if (this.ov !== this.v) {
            this.H = false;
            this.queue.add(this);
        }
    }
    subscribe(t) {
        if (this.subs.add(t) && 1 === this.subs.count) {
            this.handler.subscribe(this.o, this);
            this.v = this.ov = this.o[this.k];
        }
    }
    unsubscribe(t) {
        if (this.subs.remove(t) && 0 === this.subs.count) this.handler.dispose();
    }
    flush() {
        ur = this.ov;
        this.ov = this.v;
        this.subs.notify(this.v, ur, 0);
    }
}

(0,_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.subscriberCollection)(ValueAttributeObserver);

(0,_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.withFlushQueue)(ValueAttributeObserver);

let ur;

const fr = "http://www.w3.org/1999/xlink";

const dr = "http://www.w3.org/XML/1998/namespace";

const mr = "http://www.w3.org/2000/xmlns/";

const vr = Object.assign(wt(), {
    "xlink:actuate": [ "actuate", fr ],
    "xlink:arcrole": [ "arcrole", fr ],
    "xlink:href": [ "href", fr ],
    "xlink:role": [ "role", fr ],
    "xlink:show": [ "show", fr ],
    "xlink:title": [ "title", fr ],
    "xlink:type": [ "type", fr ],
    "xml:lang": [ "lang", dr ],
    "xml:space": [ "space", dr ],
    xmlns: [ "xmlns", mr ],
    "xmlns:xlink": [ "xlink", mr ]
});

const pr = new _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.PropertyAccessor;

pr.type = 2 | 4;

class NodeObserverConfig {
    constructor(t) {
        var e;
        this.type = null !== (e = t.type) && void 0 !== e ? e : ValueAttributeObserver;
        this.events = t.events;
        this.readonly = t.readonly;
        this.default = t.default;
    }
}

class NodeObserverLocator {
    constructor(t, e, i, s) {
        this.locator = t;
        this.platform = e;
        this.dirtyChecker = i;
        this.svgAnalyzer = s;
        this.allowDirtyCheck = true;
        this.je = wt();
        this.Ne = wt();
        this.We = wt();
        this.He = wt();
        const n = [ "change", "input" ];
        const r = {
            events: n,
            default: ""
        };
        this.useConfig({
            INPUT: {
                value: r,
                valueAsNumber: {
                    events: n,
                    default: 0
                },
                checked: {
                    type: CheckedObserver,
                    events: n
                },
                files: {
                    events: n,
                    readonly: true
                }
            },
            SELECT: {
                value: {
                    type: SelectValueObserver,
                    events: [ "change" ],
                    default: ""
                }
            },
            TEXTAREA: {
                value: r
            }
        });
        const o = {
            events: [ "change", "input", "blur", "keyup", "paste" ],
            default: ""
        };
        const l = {
            events: [ "scroll" ],
            default: 0
        };
        this.useConfigGlobal({
            scrollTop: l,
            scrollLeft: l,
            textContent: o,
            innerHTML: o
        });
        this.overrideAccessorGlobal("css", "style", "class");
        this.overrideAccessor({
            INPUT: [ "value", "checked", "model" ],
            SELECT: [ "value" ],
            TEXTAREA: [ "value" ]
        });
    }
    static register(t) {
        _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.Registration.aliasTo(_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.INodeObserverLocator, NodeObserverLocator).register(t);
        _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.Registration.singleton(_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.INodeObserverLocator, NodeObserverLocator).register(t);
    }
    handles(t, e) {
        return t instanceof this.platform.Node;
    }
    useConfig(t, e, i) {
        var s, n;
        const r = this.je;
        let o;
        if (At(t)) {
            o = null !== (s = r[t]) && void 0 !== s ? s : r[t] = wt();
            if (null == o[e]) o[e] = new NodeObserverConfig(i); else wr(t, e);
        } else for (const i in t) {
            o = null !== (n = r[i]) && void 0 !== n ? n : r[i] = wt();
            const s = t[i];
            for (e in s) if (null == o[e]) o[e] = new NodeObserverConfig(s[e]); else wr(i, e);
        }
    }
    useConfigGlobal(t, e) {
        const i = this.Ne;
        if ("object" === typeof t) for (const e in t) if (null == i[e]) i[e] = new NodeObserverConfig(t[e]); else wr("*", e); else if (null == i[t]) i[t] = new NodeObserverConfig(e); else wr("*", t);
    }
    getAccessor(t, e, i) {
        var s;
        if (e in this.He || e in (null !== (s = this.We[t.tagName]) && void 0 !== s ? s : _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.emptyObject)) return this.getObserver(t, e, i);
        switch (e) {
          case "src":
          case "href":
          case "role":
            return tr;

          default:
            {
                const i = vr[e];
                if (void 0 !== i) return AttributeNSAccessor.forNs(i[1]);
                if (yt(t, e, this.svgAnalyzer)) return tr;
                return pr;
            }
        }
    }
    overrideAccessor(t, e) {
        var i, s;
        var n, r;
        let o;
        if (At(t)) {
            o = null !== (i = (n = this.We)[t]) && void 0 !== i ? i : n[t] = wt();
            o[e] = true;
        } else for (const e in t) for (const i of t[e]) {
            o = null !== (s = (r = this.We)[e]) && void 0 !== s ? s : r[e] = wt();
            o[i] = true;
        }
    }
    overrideAccessorGlobal(...t) {
        for (const e of t) this.He[e] = true;
    }
    getObserver(t, e, i) {
        var s, n;
        switch (e) {
          case "role":
            return tr;

          case "class":
            return new ClassAttributeAccessor(t);

          case "css":
          case "style":
            return new StyleAttributeAccessor(t);
        }
        const r = null !== (n = null === (s = this.je[t.tagName]) || void 0 === s ? void 0 : s[e]) && void 0 !== n ? n : this.Ne[e];
        if (null != r) return new r.type(t, e, new EventSubscriber(r), i, this.locator);
        const o = vr[e];
        if (void 0 !== o) return AttributeNSAccessor.forNs(o[1]);
        if (yt(t, e, this.svgAnalyzer)) return tr;
        if (e in t.constructor.prototype) {
            if (this.allowDirtyCheck) return this.dirtyChecker.createProperty(t, e);
            throw new Error(`AUR0652:${String(e)}`);
        } else return new _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.SetterObserver(t, e);
    }
}

NodeObserverLocator.inject = [ _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.IServiceLocator, Kt, _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.IDirtyChecker, Yt ];

function gr(t, e) {
    if (t instanceof Array) return e.getArrayObserver(t);
    if (t instanceof Map) return e.getMapObserver(t);
    if (t instanceof Set) return e.getSetObserver(t);
}

function wr(t, e) {
    throw new Error(`AUR0653:${String(e)}@${t}`);
}

class UpdateTriggerBindingBehavior {
    constructor(t) {
        this.oL = t;
    }
    bind(t, e, i, ...s) {
        if (0 === s.length) throw new Error(`AUR0802`);
        if (i.mode !== _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingMode.twoWay && i.mode !== _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingMode.fromView) throw new Error("AUR0803");
        const n = this.oL.getObserver(i.target, i.targetProperty);
        if (!n.handler) throw new Error("AUR0804");
        i.targetObserver = n;
        const r = n.handler;
        n.originalHandler = r;
        n.handler = new EventSubscriber(new NodeObserverConfig({
            default: r.config.default,
            events: s,
            readonly: r.config.readonly
        }));
    }
    unbind(t, e, i) {
        i.targetObserver.handler.dispose();
        i.targetObserver.handler = i.targetObserver.originalHandler;
        i.targetObserver.originalHandler = null;
    }
}

UpdateTriggerBindingBehavior.inject = [ _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.IObserverLocator ];

(0,_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.bindingBehavior)("updateTrigger")(UpdateTriggerBindingBehavior);

class Focus {
    constructor(t, e) {
        this.ze = t;
        this.p = e;
        this.Ge = false;
    }
    binding() {
        this.valueChanged();
    }
    valueChanged() {
        if (this.$controller.isActive) this.Xe(); else this.Ge = true;
    }
    attached() {
        if (this.Ge) {
            this.Ge = false;
            this.Xe();
        }
        this.ze.addEventListener("focus", this);
        this.ze.addEventListener("blur", this);
    }
    afterDetachChildren() {
        const t = this.ze;
        t.removeEventListener("focus", this);
        t.removeEventListener("blur", this);
    }
    handleEvent(t) {
        if ("focus" === t.type) this.value = true; else if (!this.Ke) this.value = false;
    }
    Xe() {
        const t = this.ze;
        const e = this.Ke;
        const i = this.value;
        if (i && !e) t.focus(); else if (!i && e) t.blur();
    }
    get Ke() {
        return this.ze === this.p.document.activeElement;
    }
}

Focus.inject = [ ns, Kt ];

ot([ St({
    mode: _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingMode.twoWay
}) ], Focus.prototype, "value", void 0);

Pe("focus")(Focus);

let br = class Show {
    constructor(t, e, i) {
        this.el = t;
        this.p = e;
        this.Ye = false;
        this.Qe = null;
        this.$val = "";
        this.$prio = "";
        this.update = () => {
            this.Qe = null;
            if (Boolean(this.value) !== this.Ze) if (this.Ze === this.Je) {
                this.Ze = !this.Je;
                this.$val = this.el.style.getPropertyValue("display");
                this.$prio = this.el.style.getPropertyPriority("display");
                this.el.style.setProperty("display", "none", "important");
            } else {
                this.Ze = this.Je;
                this.el.style.setProperty("display", this.$val, this.$prio);
                if ("" === this.el.getAttribute("style")) this.el.removeAttribute("style");
            }
        };
        this.Ze = this.Je = "hide" !== i.alias;
    }
    binding() {
        this.Ye = true;
        this.update();
    }
    detaching() {
        var t;
        this.Ye = false;
        null === (t = this.Qe) || void 0 === t ? void 0 : t.cancel();
        this.Qe = null;
    }
    valueChanged() {
        if (this.Ye && null === this.Qe) this.Qe = this.p.domWriteQueue.queueTask(this.update);
    }
};

ot([ St ], br.prototype, "value", void 0);

br = ot([ lt(0, ns), lt(1, Kt), lt(2, ks) ], br);

(0,_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.alias)("hide")(br);

Pe("show")(br);

class Portal {
    constructor(t, e, i) {
        this.id = (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.nextId)("au$component");
        this.strict = false;
        this.p = i;
        this.ti = i.document.createElement("div");
        this.view = t.create();
        cs(this.view.nodes, e);
    }
    attaching(t, e, i) {
        if (null == this.callbackContext) this.callbackContext = this.$controller.scope.bindingContext;
        const s = this.ti = this.ei();
        this.view.setHost(s);
        return this.ii(t, s, i);
    }
    detaching(t, e, i) {
        return this.si(t, this.ti, i);
    }
    targetChanged() {
        const {$controller: t} = this;
        if (!t.isActive) return;
        const e = this.ti;
        const i = this.ti = this.ei();
        if (e === i) return;
        this.view.setHost(i);
        const s = (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(this.si(null, i, t.flags), (() => this.ii(null, i, t.flags)));
        if (s instanceof Promise) s.catch((t => {
            throw t;
        }));
    }
    ii(t, e, i) {
        const {activating: s, callbackContext: n, view: r} = this;
        r.setHost(e);
        return (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(null === s || void 0 === s ? void 0 : s.call(n, e, r), (() => this.ni(t, e, i)));
    }
    ni(t, e, i) {
        const {$controller: s, view: n} = this;
        if (null === t) n.nodes.appendTo(e); else return (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(n.activate(null !== t && void 0 !== t ? t : n, s, i, s.scope), (() => this.ri(e)));
        return this.ri(e);
    }
    ri(t) {
        const {activated: e, callbackContext: i, view: s} = this;
        return null === e || void 0 === e ? void 0 : e.call(i, t, s);
    }
    si(t, e, i) {
        const {deactivating: s, callbackContext: n, view: r} = this;
        return (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(null === s || void 0 === s ? void 0 : s.call(n, e, r), (() => this.oi(t, e, i)));
    }
    oi(t, e, i) {
        const {$controller: s, view: n} = this;
        if (null === t) n.nodes.remove(); else return (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(n.deactivate(t, s, i), (() => this.li(e)));
        return this.li(e);
    }
    li(t) {
        const {deactivated: e, callbackContext: i, view: s} = this;
        return null === e || void 0 === e ? void 0 : e.call(i, t, s);
    }
    ei() {
        const t = this.p;
        const e = t.document;
        let i = this.target;
        let s = this.renderContext;
        if ("" === i) {
            if (this.strict) throw new Error("AUR0811");
            return e.body;
        }
        if (At(i)) {
            let n = e;
            if (At(s)) s = e.querySelector(s);
            if (s instanceof t.Node) n = s;
            i = n.querySelector(i);
        }
        if (i instanceof t.Node) return i;
        if (null == i) {
            if (this.strict) throw new Error("AUR0812");
            return e.body;
        }
        return i;
    }
    dispose() {
        this.view.dispose();
        this.view = void 0;
        this.callbackContext = null;
    }
    accept(t) {
        var e;
        if (true === (null === (e = this.view) || void 0 === e ? void 0 : e.accept(t))) return true;
    }
}

Portal.inject = [ Ai, os, Kt ];

ot([ St({
    primary: true
}) ], Portal.prototype, "target", void 0);

ot([ St({
    callback: "targetChanged"
}) ], Portal.prototype, "renderContext", void 0);

ot([ St() ], Portal.prototype, "strict", void 0);

ot([ St() ], Portal.prototype, "deactivating", void 0);

ot([ St() ], Portal.prototype, "activating", void 0);

ot([ St() ], Portal.prototype, "deactivated", void 0);

ot([ St() ], Portal.prototype, "activated", void 0);

ot([ St() ], Portal.prototype, "callbackContext", void 0);

Oe("portal")(Portal);

class FlagsTemplateController {
    constructor(t, e, i) {
        this.fs = i;
        this.id = (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.nextId)("au$component");
        this.view = t.create().setLocation(e);
    }
    attaching(t, e, i) {
        const {$controller: s} = this;
        return this.view.activate(t, s, i | this.fs, s.scope);
    }
    detaching(t, e, i) {
        return this.view.deactivate(t, this.$controller, i);
    }
    dispose() {
        this.view.dispose();
        this.view = void 0;
    }
    accept(t) {
        var e;
        if (true === (null === (e = this.view) || void 0 === e ? void 0 : e.accept(t))) return true;
    }
}

class FrequentMutations extends FlagsTemplateController {
    constructor(t, e) {
        super(t, e, 512);
    }
}

FrequentMutations.inject = [ Ai, os ];

class ObserveShallow extends FlagsTemplateController {
    constructor(t, e) {
        super(t, e, 128);
    }
}

ObserveShallow.inject = [ Ai, os ];

Oe("frequent-mutations")(FrequentMutations);

Oe("observe-shallow")(ObserveShallow);

class If {
    constructor(t, e, i) {
        this.ifFactory = t;
        this.location = e;
        this.work = i;
        this.id = (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.nextId)("au$component");
        this.elseFactory = void 0;
        this.elseView = void 0;
        this.ifView = void 0;
        this.view = void 0;
        this.value = false;
        this.cache = true;
        this.pending = void 0;
        this.hi = false;
        this.ai = 0;
    }
    attaching(t, e, i) {
        let s;
        const n = this.$controller;
        const r = this.ai++;
        const o = () => !this.hi && this.ai === r + 1;
        return (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(this.pending, (() => {
            var e;
            if (!o()) return;
            this.pending = void 0;
            if (this.value) s = this.view = this.ifView = this.cache && null != this.ifView ? this.ifView : this.ifFactory.create(); else s = this.view = this.elseView = this.cache && null != this.elseView ? this.elseView : null === (e = this.elseFactory) || void 0 === e ? void 0 : e.create();
            if (null == s) return;
            s.setLocation(this.location);
            this.pending = (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(s.activate(t, n, i, n.scope), (() => {
                if (o()) this.pending = void 0;
            }));
        }));
    }
    detaching(t, e, i) {
        this.hi = true;
        return (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(this.pending, (() => {
            var e;
            this.hi = false;
            this.pending = void 0;
            void (null === (e = this.view) || void 0 === e ? void 0 : e.deactivate(t, this.$controller, i));
        }));
    }
    valueChanged(t, e, i) {
        if (!this.$controller.isActive) return;
        t = !!t;
        e = !!e;
        if (t === e) return;
        this.work.start();
        const s = this.view;
        const n = this.$controller;
        const r = this.ai++;
        const o = () => !this.hi && this.ai === r + 1;
        let l;
        return (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)((0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(this.pending, (() => this.pending = (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(null === s || void 0 === s ? void 0 : s.deactivate(s, n, i), (() => {
            var e;
            if (!o()) return;
            if (t) l = this.view = this.ifView = this.cache && null != this.ifView ? this.ifView : this.ifFactory.create(); else l = this.view = this.elseView = this.cache && null != this.elseView ? this.elseView : null === (e = this.elseFactory) || void 0 === e ? void 0 : e.create();
            if (null == l) return;
            l.setLocation(this.location);
            return (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(l.activate(l, n, i, n.scope), (() => {
                if (o()) this.pending = void 0;
            }));
        })))), (() => this.work.finish()));
    }
    dispose() {
        var t, e;
        null === (t = this.ifView) || void 0 === t ? void 0 : t.dispose();
        null === (e = this.elseView) || void 0 === e ? void 0 : e.dispose();
        this.ifView = this.elseView = this.view = void 0;
    }
    accept(t) {
        var e;
        if (true === (null === (e = this.view) || void 0 === e ? void 0 : e.accept(t))) return true;
    }
}

If.inject = [ Ai, os, es ];

ot([ St ], If.prototype, "value", void 0);

ot([ St({
    set: t => "" === t || !!t && "false" !== t
}) ], If.prototype, "cache", void 0);

Oe("if")(If);

class Else {
    constructor(t) {
        this.factory = t;
        this.id = (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.nextId)("au$component");
    }
    link(t, e, i, s) {
        const n = t.children;
        const r = n[n.length - 1];
        if (r instanceof If) r.elseFactory = this.factory; else if (r.viewModel instanceof If) r.viewModel.elseFactory = this.factory; else throw new Error("AUR0810");
    }
}

Else.inject = [ Ai ];

Oe({
    name: "else"
})(Else);

function xr(t) {
    t.dispose();
}

const yr = [ 38962, 36913 ];

class Repeat {
    constructor(t, e, i) {
        this.l = t;
        this.ui = e;
        this.f = i;
        this.id = (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.nextId)("au$component");
        this.views = [];
        this.key = void 0;
        this.fi = void 0;
        this.di = false;
        this.mi = false;
        this.vi = null;
        this.pi = void 0;
        this.gi = false;
    }
    binding(t, e, i) {
        const s = this.ui.bindings;
        const n = s.length;
        let r;
        let o;
        let l = 0;
        for (;n > l; ++l) {
            r = s[l];
            if (r.target === this && "items" === r.targetProperty) {
                o = this.forOf = r.sourceExpression;
                this.wi = r;
                let t = o.iterable;
                while (null != t && yr.includes(t.$kind)) {
                    t = t.expression;
                    this.di = true;
                }
                this.vi = t;
                break;
            }
        }
        this.bi(i);
        const h = o.declaration;
        if (!(this.gi = 90137 === h.$kind || 106521 === h.$kind)) this.local = h.evaluate(i, this.$controller.scope, r.locator, null);
    }
    attaching(t, e, i) {
        this.xi(i);
        return this.yi(t, i);
    }
    detaching(t, e, i) {
        this.bi(i);
        return this.ki(t, i);
    }
    itemsChanged(t) {
        const {$controller: e} = this;
        if (!e.isActive) return;
        t |= e.flags;
        this.bi(t);
        this.xi(t);
        const i = (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(this.ki(null, t), (() => this.yi(null, t)));
        if (i instanceof Promise) i.catch((t => {
            throw t;
        }));
    }
    handleCollectionChange(t, e) {
        const {$controller: i} = this;
        if (!i.isActive) return;
        if (this.di) {
            if (this.mi) return;
            this.mi = true;
            this.items = this.forOf.iterable.evaluate(e, i.scope, this.wi.locator, null);
            this.mi = false;
            return;
        }
        e |= i.flags;
        this.xi(e);
        if (void 0 === t) {
            const t = (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(this.ki(null, e), (() => this.yi(null, e)));
            if (t instanceof Promise) t.catch((t => {
                throw t;
            }));
        } else {
            const i = this.views.length;
            (0,_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.applyMutationsToIndices)(t);
            if (t.deletedItems.length > 0) {
                t.deletedItems.sort(_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.compareNumber);
                const s = (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(this.Ci(t, e), (() => this.Ai(i, t, e)));
                if (s instanceof Promise) s.catch((t => {
                    throw t;
                }));
            } else this.Ai(i, t, e);
        }
    }
    bi(t) {
        var e;
        const i = this.$controller.scope;
        let s = this.Si;
        let n = this.di;
        if (n) {
            s = this.Si = null !== (e = this.vi.evaluate(t, i, this.wi.locator, null)) && void 0 !== e ? e : null;
            n = this.di = !Object.is(this.items, s);
        }
        const r = this.fi;
        if (4 & t) {
            if (void 0 !== r) r.unsubscribe(this);
        } else if (this.$controller.isActive) {
            const t = this.fi = (0,_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.getCollectionObserver)(n ? s : this.items);
            if (r !== t && r) r.unsubscribe(this);
            if (t) t.subscribe(this);
        }
    }
    xi(t) {
        const e = this.items;
        if (e instanceof Array) {
            this.pi = e;
            return;
        }
        const i = this.forOf;
        if (void 0 === i) return;
        const s = [];
        this.forOf.iterate(t, e, ((t, e, i) => {
            s[e] = i;
        }));
        this.pi = s;
    }
    yi(t, e) {
        let i;
        let s;
        let n;
        let r;
        const {$controller: o, f: l, local: h, l: a, items: c} = this;
        const u = o.scope;
        const f = this.forOf;
        const d = f.count(e, c);
        const m = this.views = Array(d);
        f.iterate(e, c, ((c, v, p) => {
            n = m[v] = l.create().setLocation(a);
            n.nodes.unlink();
            if (this.gi) f.declaration.assign(e, r = _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.Scope.fromParent(u, _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingContext.create()), this.wi.locator, p); else r = _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.Scope.fromParent(u, _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingContext.create(h, p));
            Rr(r.overrideContext, v, d);
            s = n.activate(null !== t && void 0 !== t ? t : n, o, e, r);
            if (s instanceof Promise) (null !== i && void 0 !== i ? i : i = []).push(s);
        }));
        if (void 0 !== i) return 1 === i.length ? i[0] : Promise.all(i);
    }
    ki(t, e) {
        let i;
        let s;
        let n;
        let r = 0;
        const {views: o, $controller: l} = this;
        const h = o.length;
        for (;h > r; ++r) {
            n = o[r];
            n.release();
            s = n.deactivate(null !== t && void 0 !== t ? t : n, l, e);
            if (s instanceof Promise) (null !== i && void 0 !== i ? i : i = []).push(s);
        }
        if (void 0 !== i) return 1 === i.length ? i[0] : Promise.all(i);
    }
    Ci(t, e) {
        let i;
        let s;
        let n;
        const {$controller: r, views: o} = this;
        const l = t.deletedItems;
        const h = l.length;
        let a = 0;
        for (;h > a; ++a) {
            n = o[l[a]];
            n.release();
            s = n.deactivate(n, r, e);
            if (s instanceof Promise) (null !== i && void 0 !== i ? i : i = []).push(s);
        }
        a = 0;
        let c = 0;
        for (;h > a; ++a) {
            c = l[a] - a;
            o.splice(c, 1);
        }
        if (void 0 !== i) return 1 === i.length ? i[0] : Promise.all(i);
    }
    Ai(t, e, i) {
        var s;
        let n;
        let r;
        let o;
        let l;
        let h = 0;
        const {$controller: a, f: c, local: u, pi: f, l: d, views: m} = this;
        const v = e.length;
        for (;v > h; ++h) if (-2 === e[h]) {
            o = c.create();
            m.splice(h, 0, o);
        }
        if (m.length !== v) throw new Error(`AUR0814:${m.length}!=${v}`);
        const p = a.scope;
        const g = e.length;
        (0,_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.synchronizeIndices)(m, e);
        const w = Sr(e);
        const b = w.length;
        let x;
        let y = b - 1;
        h = g - 1;
        for (;h >= 0; --h) {
            o = m[h];
            x = m[h + 1];
            o.nodes.link(null !== (s = null === x || void 0 === x ? void 0 : x.nodes) && void 0 !== s ? s : d);
            if (-2 === e[h]) {
                if (this.gi) this.forOf.declaration.assign(i, l = _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.Scope.fromParent(p, _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingContext.create()), this.wi.locator, f[h]); else l = _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.Scope.fromParent(p, _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingContext.create(u, f[h]));
                Rr(l.overrideContext, h, g);
                o.setLocation(d);
                r = o.activate(o, a, i, l);
                if (r instanceof Promise) (null !== n && void 0 !== n ? n : n = []).push(r);
            } else if (y < 0 || 1 === b || h !== w[y]) {
                Rr(o.scope.overrideContext, h, g);
                o.nodes.insertBefore(o.location);
            } else {
                if (t !== g) Rr(o.scope.overrideContext, h, g);
                --y;
            }
        }
        if (void 0 !== n) return 1 === n.length ? n[0] : Promise.all(n);
    }
    dispose() {
        this.views.forEach(xr);
        this.views = void 0;
    }
    accept(t) {
        const {views: e} = this;
        if (void 0 !== e) for (let i = 0, s = e.length; i < s; ++i) if (true === e[i].accept(t)) return true;
    }
}

Repeat.inject = [ os, Xi, Ai ];

ot([ St ], Repeat.prototype, "items", void 0);

Oe("repeat")(Repeat);

let kr = 16;

let Cr = new Int32Array(kr);

let Ar = new Int32Array(kr);

function Sr(t) {
    const e = t.length;
    if (e > kr) {
        kr = e;
        Cr = new Int32Array(e);
        Ar = new Int32Array(e);
    }
    let i = 0;
    let s = 0;
    let n = 0;
    let r = 0;
    let o = 0;
    let l = 0;
    let h = 0;
    let a = 0;
    for (;r < e; r++) {
        s = t[r];
        if (-2 !== s) {
            o = Cr[i];
            n = t[o];
            if (-2 !== n && n < s) {
                Ar[r] = o;
                Cr[++i] = r;
                continue;
            }
            l = 0;
            h = i;
            while (l < h) {
                a = l + h >> 1;
                n = t[Cr[a]];
                if (-2 !== n && n < s) l = a + 1; else h = a;
            }
            n = t[Cr[l]];
            if (s < n || -2 === n) {
                if (l > 0) Ar[r] = Cr[l - 1];
                Cr[l] = r;
            }
        }
    }
    r = ++i;
    const c = new Int32Array(r);
    s = Cr[i - 1];
    while (i-- > 0) {
        c[i] = s;
        s = Ar[s];
    }
    while (r-- > 0) Cr[r] = 0;
    return c;
}

function Rr(t, e, i) {
    const s = 0 === e;
    const n = e === i - 1;
    const r = e % 2 === 0;
    t.$index = e;
    t.$first = s;
    t.$last = n;
    t.$middle = !s && !n;
    t.$even = r;
    t.$odd = !r;
    t.$length = i;
}

class With {
    constructor(t, e) {
        this.id = (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.nextId)("au$component");
        this.id = (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.nextId)("au$component");
        this.view = t.create().setLocation(e);
    }
    valueChanged(t, e, i) {
        const s = this.$controller;
        const n = this.view.bindings;
        let r;
        let o = 0, l = 0;
        if (s.isActive && null != n) {
            r = _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.Scope.fromParent(s.scope, void 0 === t ? {} : t);
            for (l = n.length; l > o; ++o) n[o].$bind(2, r);
        }
    }
    attaching(t, e, i) {
        const {$controller: s, value: n} = this;
        const r = _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.Scope.fromParent(s.scope, void 0 === n ? {} : n);
        return this.view.activate(t, s, i, r);
    }
    detaching(t, e, i) {
        return this.view.deactivate(t, this.$controller, i);
    }
    dispose() {
        this.view.dispose();
        this.view = void 0;
    }
    accept(t) {
        var e;
        if (true === (null === (e = this.view) || void 0 === e ? void 0 : e.accept(t))) return true;
    }
}

With.inject = [ Ai, os ];

ot([ St ], With.prototype, "value", void 0);

Oe("with")(With);

let Er = class Switch {
    constructor(t, e) {
        this.f = t;
        this.l = e;
        this.id = (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.nextId)("au$component");
        this.cases = [];
        this.activeCases = [];
        this.promise = void 0;
    }
    link(t, e, i, s) {
        this.view = this.f.create(this.$controller).setLocation(this.l);
    }
    attaching(t, e, i) {
        const s = this.view;
        const n = this.$controller;
        this.queue((() => s.activate(t, n, i, n.scope)));
        this.queue((() => this.swap(t, i, this.value)));
        return this.promise;
    }
    detaching(t, e, i) {
        this.queue((() => {
            const e = this.view;
            return e.deactivate(t, this.$controller, i);
        }));
        return this.promise;
    }
    dispose() {
        var t;
        null === (t = this.view) || void 0 === t ? void 0 : t.dispose();
        this.view = void 0;
    }
    valueChanged(t, e, i) {
        if (!this.$controller.isActive) return;
        this.queue((() => this.swap(null, i, this.value)));
    }
    caseChanged(t, e) {
        this.queue((() => this.Ri(t, e)));
    }
    Ri(t, e) {
        const i = t.isMatch(this.value, e);
        const s = this.activeCases;
        const n = s.length;
        if (!i) {
            if (n > 0 && s[0].id === t.id) return this.Ei(null, e);
            return;
        }
        if (n > 0 && s[0].id < t.id) return;
        const r = [];
        let o = t.fallThrough;
        if (!o) r.push(t); else {
            const e = this.cases;
            const i = e.indexOf(t);
            for (let t = i, s = e.length; t < s && o; t++) {
                const i = e[t];
                r.push(i);
                o = i.fallThrough;
            }
        }
        return (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(this.Ei(null, e, r), (() => {
            this.activeCases = r;
            return this.Bi(null, e);
        }));
    }
    swap(t, e, i) {
        const s = [];
        let n = false;
        for (const t of this.cases) {
            if (n || t.isMatch(i, e)) {
                s.push(t);
                n = t.fallThrough;
            }
            if (s.length > 0 && !n) break;
        }
        const r = this.defaultCase;
        if (0 === s.length && void 0 !== r) s.push(r);
        return (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(this.activeCases.length > 0 ? this.Ei(t, e, s) : void 0, (() => {
            this.activeCases = s;
            if (0 === s.length) return;
            return this.Bi(t, e);
        }));
    }
    Bi(t, e) {
        const i = this.$controller;
        if (!i.isActive) return;
        const s = this.activeCases;
        const n = s.length;
        if (0 === n) return;
        const r = i.scope;
        if (1 === n) return s[0].activate(t, e, r);
        return (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.resolveAll)(...s.map((i => i.activate(t, e, r))));
    }
    Ei(t, e, i = []) {
        const s = this.activeCases;
        const n = s.length;
        if (0 === n) return;
        if (1 === n) {
            const n = s[0];
            if (!i.includes(n)) {
                s.length = 0;
                return n.deactivate(t, e);
            }
            return;
        }
        return (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)((0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.resolveAll)(...s.reduce(((s, n) => {
            if (!i.includes(n)) s.push(n.deactivate(t, e));
            return s;
        }), [])), (() => {
            s.length = 0;
        }));
    }
    queue(t) {
        const e = this.promise;
        let i;
        i = this.promise = (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)((0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(e, t), (() => {
            if (this.promise === i) this.promise = void 0;
        }));
    }
    accept(t) {
        if (true === this.$controller.accept(t)) return true;
        if (this.activeCases.some((e => e.accept(t)))) return true;
    }
};

ot([ St ], Er.prototype, "value", void 0);

Er = ot([ Oe("switch"), lt(0, Ai), lt(1, os) ], Er);

let Br = class Case {
    constructor(t, e, i, s) {
        this.Ii = e;
        this.id = (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.nextId)("au$component");
        this.fallThrough = false;
        this.Ti = s.config.level <= 1;
        this.Ft = s.scopeTo(`${this.constructor.name}-#${this.id}`);
        this.view = t.create().setLocation(i);
    }
    link(t, e, i, s) {
        const n = t.parent;
        const r = null === n || void 0 === n ? void 0 : n.viewModel;
        if (r instanceof Er) {
            this.$switch = r;
            this.linkToSwitch(r);
        } else throw new Error("AUR0815");
    }
    detaching(t, e, i) {
        return this.deactivate(t, i);
    }
    isMatch(t, e) {
        this.Ft.debug("isMatch()");
        const i = this.value;
        if (Array.isArray(i)) {
            if (void 0 === this.fi) this.fi = this.Di(e, i);
            return i.includes(t);
        }
        return i === t;
    }
    valueChanged(t, e, i) {
        var s;
        if (Array.isArray(t)) {
            null === (s = this.fi) || void 0 === s ? void 0 : s.unsubscribe(this);
            this.fi = this.Di(i, t);
        } else if (void 0 !== this.fi) this.fi.unsubscribe(this);
        this.$switch.caseChanged(this, i);
    }
    handleCollectionChange(t, e) {
        this.$switch.caseChanged(this, e);
    }
    activate(t, e, i) {
        const s = this.view;
        if (s.isActive) return;
        return s.activate(null !== t && void 0 !== t ? t : s, this.$controller, e, i);
    }
    deactivate(t, e) {
        const i = this.view;
        if (!i.isActive) return;
        return i.deactivate(null !== t && void 0 !== t ? t : i, this.$controller, e);
    }
    dispose() {
        var t, e;
        null === (t = this.fi) || void 0 === t ? void 0 : t.unsubscribe(this);
        null === (e = this.view) || void 0 === e ? void 0 : e.dispose();
        this.view = void 0;
    }
    linkToSwitch(t) {
        t.cases.push(this);
    }
    Di(t, e) {
        const i = this.Ii.getArrayObserver(e);
        i.subscribe(this);
        return i;
    }
    accept(t) {
        var e;
        if (true === this.$controller.accept(t)) return true;
        return null === (e = this.view) || void 0 === e ? void 0 : e.accept(t);
    }
};

Br.inject = [ Ai, _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.IObserverLocator, os, _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.ILogger ];

ot([ St ], Br.prototype, "value", void 0);

ot([ St({
    set: t => {
        switch (t) {
          case "true":
            return true;

          case "false":
            return false;

          default:
            return !!t;
        }
    },
    mode: _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingMode.oneTime
}) ], Br.prototype, "fallThrough", void 0);

Br = ot([ Oe("case") ], Br);

let Ir = class DefaultCase extends Br {
    linkToSwitch(t) {
        if (void 0 !== t.defaultCase) throw new Error("AUR0816");
        t.defaultCase = this;
    }
};

Ir = ot([ Oe("default-case") ], Ir);

let Tr = class PromiseTemplateController {
    constructor(t, e, i, s) {
        this.f = t;
        this.l = e;
        this.p = i;
        this.id = (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.nextId)("au$component");
        this.preSettledTask = null;
        this.postSettledTask = null;
        this.logger = s.scopeTo("promise.resolve");
    }
    link(t, e, i, s) {
        this.view = this.f.create(this.$controller).setLocation(this.l);
    }
    attaching(t, e, i) {
        const s = this.view;
        const n = this.$controller;
        return (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(s.activate(t, n, i, this.viewScope = _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.Scope.fromParent(n.scope, {})), (() => this.swap(t, i)));
    }
    valueChanged(t, e, i) {
        if (!this.$controller.isActive) return;
        this.swap(null, i);
    }
    swap(t, e) {
        var i, s;
        const n = this.value;
        if (!(n instanceof Promise)) {
            this.logger.warn(`The value '${String(n)}' is not a promise. No change will be done.`);
            return;
        }
        const r = this.p.domWriteQueue;
        const o = this.fulfilled;
        const l = this.rejected;
        const h = this.pending;
        const a = this.viewScope;
        let c;
        const u = {
            reusable: false
        };
        const f = () => {
            void (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.resolveAll)(c = (this.preSettledTask = r.queueTask((() => (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.resolveAll)(null === o || void 0 === o ? void 0 : o.deactivate(t, e), null === l || void 0 === l ? void 0 : l.deactivate(t, e), null === h || void 0 === h ? void 0 : h.activate(t, e, a))), u)).result, n.then((i => {
                if (this.value !== n) return;
                const s = () => {
                    this.postSettlePromise = (this.postSettledTask = r.queueTask((() => (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.resolveAll)(null === h || void 0 === h ? void 0 : h.deactivate(t, e), null === l || void 0 === l ? void 0 : l.deactivate(t, e), null === o || void 0 === o ? void 0 : o.activate(t, e, a, i))), u)).result;
                };
                if (1 === this.preSettledTask.status) void c.then(s); else {
                    this.preSettledTask.cancel();
                    s();
                }
            }), (i => {
                if (this.value !== n) return;
                const s = () => {
                    this.postSettlePromise = (this.postSettledTask = r.queueTask((() => (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.resolveAll)(null === h || void 0 === h ? void 0 : h.deactivate(t, e), null === o || void 0 === o ? void 0 : o.deactivate(t, e), null === l || void 0 === l ? void 0 : l.activate(t, e, a, i))), u)).result;
                };
                if (1 === this.preSettledTask.status) void c.then(s); else {
                    this.preSettledTask.cancel();
                    s();
                }
            })));
        };
        if (1 === (null === (i = this.postSettledTask) || void 0 === i ? void 0 : i.status)) void this.postSettlePromise.then(f); else {
            null === (s = this.postSettledTask) || void 0 === s ? void 0 : s.cancel();
            f();
        }
    }
    detaching(t, e, i) {
        var s, n;
        null === (s = this.preSettledTask) || void 0 === s ? void 0 : s.cancel();
        null === (n = this.postSettledTask) || void 0 === n ? void 0 : n.cancel();
        this.preSettledTask = this.postSettledTask = null;
        return this.view.deactivate(t, this.$controller, i);
    }
    dispose() {
        var t;
        null === (t = this.view) || void 0 === t ? void 0 : t.dispose();
        this.view = void 0;
    }
};

ot([ St ], Tr.prototype, "value", void 0);

Tr = ot([ Oe("promise"), lt(0, Ai), lt(1, os), lt(2, Kt), lt(3, _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.ILogger) ], Tr);

let Dr = class PendingTemplateController {
    constructor(t, e) {
        this.factory = t;
        this.id = (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.nextId)("au$component");
        this.view = this.factory.create().setLocation(e);
    }
    link(t, e, i, s) {
        $r(t).pending = this;
    }
    activate(t, e, i) {
        const s = this.view;
        if (s.isActive) return;
        return s.activate(s, this.$controller, e, i);
    }
    deactivate(t, e) {
        const i = this.view;
        if (!i.isActive) return;
        return i.deactivate(i, this.$controller, e);
    }
    detaching(t, e, i) {
        return this.deactivate(t, i);
    }
    dispose() {
        var t;
        null === (t = this.view) || void 0 === t ? void 0 : t.dispose();
        this.view = void 0;
    }
};

ot([ St({
    mode: _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingMode.toView
}) ], Dr.prototype, "value", void 0);

Dr = ot([ Oe("pending"), lt(0, Ai), lt(1, os) ], Dr);

let Pr = class FulfilledTemplateController {
    constructor(t, e) {
        this.factory = t;
        this.id = (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.nextId)("au$component");
        this.view = this.factory.create().setLocation(e);
    }
    link(t, e, i, s) {
        $r(t).fulfilled = this;
    }
    activate(t, e, i, s) {
        this.value = s;
        const n = this.view;
        if (n.isActive) return;
        return n.activate(n, this.$controller, e, i);
    }
    deactivate(t, e) {
        const i = this.view;
        if (!i.isActive) return;
        return i.deactivate(i, this.$controller, e);
    }
    detaching(t, e, i) {
        return this.deactivate(t, i);
    }
    dispose() {
        var t;
        null === (t = this.view) || void 0 === t ? void 0 : t.dispose();
        this.view = void 0;
    }
};

ot([ St({
    mode: _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingMode.fromView
}) ], Pr.prototype, "value", void 0);

Pr = ot([ Oe("then"), lt(0, Ai), lt(1, os) ], Pr);

let Or = class RejectedTemplateController {
    constructor(t, e) {
        this.factory = t;
        this.id = (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.nextId)("au$component");
        this.view = this.factory.create().setLocation(e);
    }
    link(t, e, i, s) {
        $r(t).rejected = this;
    }
    activate(t, e, i, s) {
        this.value = s;
        const n = this.view;
        if (n.isActive) return;
        return n.activate(n, this.$controller, e, i);
    }
    deactivate(t, e) {
        const i = this.view;
        if (!i.isActive) return;
        return i.deactivate(i, this.$controller, e);
    }
    detaching(t, e, i) {
        return this.deactivate(t, i);
    }
    dispose() {
        var t;
        null === (t = this.view) || void 0 === t ? void 0 : t.dispose();
        this.view = void 0;
    }
};

ot([ St({
    mode: _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingMode.fromView
}) ], Or.prototype, "value", void 0);

Or = ot([ Oe("catch"), lt(0, Ai), lt(1, os) ], Or);

function $r(t) {
    const e = t.parent;
    const i = null === e || void 0 === e ? void 0 : e.viewModel;
    if (i instanceof Tr) return i;
    throw new Error("AUR0813");
}

let Lr = class PromiseAttributePattern {
    "promise.resolve"(t, e, i) {
        return new AttrSyntax(t, e, "promise", "bind");
    }
};

Lr = ot([ Ft({
    pattern: "promise.resolve",
    symbols: ""
}) ], Lr);

let qr = class FulfilledAttributePattern {
    then(t, e, i) {
        return new AttrSyntax(t, e, "then", "from-view");
    }
};

qr = ot([ Ft({
    pattern: "then",
    symbols: ""
}) ], qr);

let Mr = class RejectedAttributePattern {
    catch(t, e, i) {
        return new AttrSyntax(t, e, "catch", "from-view");
    }
};

Mr = ot([ Ft({
    pattern: "catch",
    symbols: ""
}) ], Mr);

function Ur(t, e, i, s) {
    if (At(e)) return Fr(t, e, i, s);
    if (si.isType(e)) return Vr(t, e, i, s);
    throw new Error(`Invalid Tag or Type.`);
}

class RenderPlan {
    constructor(t, e, i) {
        this.node = t;
        this.instructions = e;
        this.Pi = i;
        this.Oi = void 0;
    }
    get definition() {
        if (void 0 === this.Oi) this.Oi = CustomElementDefinition.create({
            name: si.generateName(),
            template: this.node,
            needsCompile: At(this.node),
            instructions: this.instructions,
            dependencies: this.Pi
        });
        return this.Oi;
    }
    createView(t) {
        return this.getViewFactory(t).create();
    }
    getViewFactory(t) {
        return t.root.get(Pi).getViewFactory(this.definition, t.createChild().register(...this.Pi));
    }
    mergeInto(t, e, i) {
        t.appendChild(this.node);
        e.push(...this.instructions);
        i.push(...this.Pi);
    }
}

function Fr(t, e, i, s) {
    const n = [];
    const r = [];
    const o = [];
    const l = t.document.createElement(e);
    let h = false;
    if (i) Object.keys(i).forEach((t => {
        const e = i[t];
        if (Cs(e)) {
            h = true;
            n.push(e);
        } else l.setAttribute(t, e);
    }));
    if (h) {
        l.className = "au";
        r.push(n);
    }
    if (s) _r(t, l, s, r, o);
    return new RenderPlan(l, r, o);
}

function Vr(t, e, i, s) {
    const n = si.getDefinition(e);
    const r = [];
    const o = [ r ];
    const l = [];
    const h = [];
    const a = n.bindables;
    const c = t.document.createElement(n.name);
    c.className = "au";
    if (!l.includes(e)) l.push(e);
    r.push(new HydrateElementInstruction(n, void 0, h, null, false, void 0));
    if (i) Object.keys(i).forEach((t => {
        const e = i[t];
        if (Cs(e)) h.push(e); else if (void 0 === a[t]) h.push(new SetAttributeInstruction(e, t)); else h.push(new SetPropertyInstruction(e, t));
    }));
    if (s) _r(t, c, s, o, l);
    return new RenderPlan(c, o, l);
}

function _r(t, e, i, s, n) {
    for (let r = 0, o = i.length; r < o; ++r) {
        const o = i[r];
        switch (typeof o) {
          case "string":
            e.appendChild(t.document.createTextNode(o));
            break;

          case "object":
            if (o instanceof t.Node) e.appendChild(o); else if ("mergeInto" in o) o.mergeInto(e, s, n);
        }
    }
}

function jr(t, e) {
    const i = e.to;
    if (void 0 !== i && "subject" !== i && "composing" !== i) t[i] = e;
    return t;
}

class AuRender {
    constructor(t, e, i, s) {
        this.p = t;
        this.$i = e;
        this.Li = i;
        this.r = s;
        this.id = (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.nextId)("au$component");
        this.component = void 0;
        this.composing = false;
        this.view = void 0;
        this.qi = void 0;
        this.Mi = e.props.reduce(jr, {});
    }
    attaching(t, e, i) {
        const {component: s, view: n} = this;
        if (void 0 === n || this.qi !== s) {
            this.qi = s;
            this.composing = true;
            return this.compose(void 0, s, t, i);
        }
        return this.compose(n, s, t, i);
    }
    detaching(t, e, i) {
        return this.oi(this.view, t, i);
    }
    componentChanged(t, e, i) {
        const {$controller: s} = this;
        if (!s.isActive) return;
        if (this.qi === t) return;
        this.qi = t;
        this.composing = true;
        i |= s.flags;
        const n = (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(this.oi(this.view, null, i), (() => this.compose(void 0, t, null, i)));
        if (n instanceof Promise) n.catch((t => {
            throw t;
        }));
    }
    compose(t, e, i, s) {
        return (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(void 0 === t ? (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(e, (t => this.Ui(t, s))) : t, (t => this.ni(this.view = t, i, s)));
    }
    oi(t, e, i) {
        return null === t || void 0 === t ? void 0 : t.deactivate(null !== e && void 0 !== e ? e : t, this.$controller, i);
    }
    ni(t, e, i) {
        const {$controller: s} = this;
        return (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(null === t || void 0 === t ? void 0 : t.activate(null !== e && void 0 !== e ? e : t, s, i, s.scope), (() => {
            this.composing = false;
        }));
    }
    Ui(t, e) {
        const i = this.Fi(t, e);
        if (i) {
            i.setLocation(this.$controller.location);
            i.lockScope(this.$controller.scope);
            return i;
        }
        return;
    }
    Fi(t, e) {
        if (!t) return;
        const i = this.Li.controller.container;
        if ("object" === typeof t) {
            if (Nr(t)) return t;
            if ("createView" in t) return t.createView(i);
            if ("create" in t) return t.create();
            if ("template" in t) return this.r.getViewFactory(CustomElementDefinition.getOrCreate(t), i).create();
        }
        if (At(t)) {
            const e = i.find(si, t);
            if (null == e) throw new Error(`AUR0809:${t}`);
            t = e.Type;
        }
        return Ur(this.p, t, this.Mi, this.$controller.host.childNodes).createView(i);
    }
    dispose() {
        var t;
        null === (t = this.view) || void 0 === t ? void 0 : t.dispose();
        this.view = void 0;
    }
    accept(t) {
        var e;
        if (true === (null === (e = this.view) || void 0 === e ? void 0 : e.accept(t))) return true;
    }
}

AuRender.inject = [ Kt, ks, Ki, Pi ];

ot([ St ], AuRender.prototype, "component", void 0);

ot([ St({
    mode: _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.BindingMode.fromView
}) ], AuRender.prototype, "composing", void 0);

je({
    name: "au-render",
    template: null,
    containerless: true,
    capture: true
})(AuRender);

function Nr(t) {
    return "lockScope" in t;
}

class AuCompose {
    constructor(t, e, i, s, n, r) {
        this.c = t;
        this.parent = e;
        this.host = i;
        this.p = s;
        this.scopeBehavior = "auto";
        this.Vi = void 0;
        this.l = n.containerless ? us(this.host) : void 0;
        this.r = t.get(Pi);
        this.$i = n;
        this._i = r;
    }
    static get inject() {
        return [ _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.IContainer, Xi, ns, Kt, ks, (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.transient)(CompositionContextFactory) ];
    }
    get pending() {
        return this.ji;
    }
    get composition() {
        return this.Vi;
    }
    attaching(t, e, i) {
        return this.ji = (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(this.queue(new ChangeInfo(this.view, this.viewModel, this.model, void 0), t), (t => {
            if (this._i.isCurrent(t)) this.ji = void 0;
        }));
    }
    detaching(t) {
        const e = this.Vi;
        const i = this.ji;
        this._i.invalidate();
        this.Vi = this.ji = void 0;
        return (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(i, (() => null === e || void 0 === e ? void 0 : e.deactivate(t)));
    }
    propertyChanged(t) {
        if ("model" === t && null != this.Vi) {
            this.Vi.update(this.model);
            return;
        }
        this.ji = (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(this.ji, (() => (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(this.queue(new ChangeInfo(this.view, this.viewModel, this.model, t), void 0), (t => {
            if (this._i.isCurrent(t)) this.ji = void 0;
        }))));
    }
    queue(t, e) {
        const i = this._i;
        const s = this.Vi;
        return (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(i.create(t), (t => {
            if (i.isCurrent(t)) return (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(this.compose(t), (n => {
                if (i.isCurrent(t)) return (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(n.activate(e), (() => {
                    if (i.isCurrent(t)) {
                        this.Vi = n;
                        return (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(null === s || void 0 === s ? void 0 : s.deactivate(e), (() => t));
                    } else return (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(n.controller.deactivate(n.controller, this.$controller, 4), (() => {
                        n.controller.dispose();
                        return t;
                    }));
                }));
                n.controller.dispose();
                return t;
            }));
            return t;
        }));
    }
    compose(t) {
        let e;
        let i;
        let s;
        const {view: n, viewModel: r, model: o} = t.change;
        const {c: l, host: h, $controller: a, l: c} = this;
        const u = this.getDef(r);
        const f = l.createChild();
        const d = null == c ? h.parentNode : c.parentNode;
        if (null !== u) {
            if (u.containerless) throw new Error("AUR0806");
            if (null == c) {
                i = h;
                s = () => {};
            } else {
                i = d.insertBefore(this.p.document.createElement(u.name), c);
                s = () => {
                    i.remove();
                };
            }
            e = this.getVm(f, r, i);
        } else {
            i = null == c ? h : c;
            e = this.getVm(f, r, i);
        }
        const m = () => {
            if (null !== u) {
                const n = Controller.$el(f, e, i, {
                    projections: this.$i.projections
                }, u);
                return new CompositionController(n, (t => n.activate(null !== t && void 0 !== t ? t : n, a, 2, a.scope.parentScope)), (t => (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(n.deactivate(null !== t && void 0 !== t ? t : n, a, 4), s)), (t => {
                    var i;
                    return null === (i = e.activate) || void 0 === i ? void 0 : i.call(e, t);
                }), t);
            } else {
                const s = CustomElementDefinition.create({
                    name: si.generateName(),
                    template: n
                });
                const r = this.r.getViewFactory(s, f);
                const o = Controller.$view(r, a);
                const l = "auto" === this.scopeBehavior ? _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.Scope.fromParent(this.parent.scope, e) : _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.Scope.create(e);
                if (fs(i)) o.setLocation(i); else o.setHost(i);
                return new CompositionController(o, (t => o.activate(null !== t && void 0 !== t ? t : o, a, 2, l)), (t => o.deactivate(null !== t && void 0 !== t ? t : o, a, 4)), (t => {
                    var i;
                    return null === (i = e.activate) || void 0 === i ? void 0 : i.call(e, t);
                }), t);
            }
        };
        if ("activate" in e) return (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(e.activate(o), (() => m())); else return m();
    }
    getVm(t, e, i) {
        if (null == e) return new EmptyComponent$1;
        if ("object" === typeof e) return e;
        const s = this.p;
        const n = fs(i);
        t.registerResolver(s.Element, t.registerResolver(ns, new _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.InstanceProvider("ElementResolver", n ? null : i)));
        t.registerResolver(os, new _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.InstanceProvider("IRenderLocation", n ? i : null));
        const r = t.invoke(e);
        t.registerResolver(e, new _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.InstanceProvider("au-compose.viewModel", r));
        return r;
    }
    getDef(t) {
        const e = Ct(t) ? t : null === t || void 0 === t ? void 0 : t.constructor;
        return si.isType(e) ? si.getDefinition(e) : null;
    }
}

ot([ St ], AuCompose.prototype, "view", void 0);

ot([ St ], AuCompose.prototype, "viewModel", void 0);

ot([ St ], AuCompose.prototype, "model", void 0);

ot([ St({
    set: t => {
        if ("scoped" === t || "auto" === t) return t;
        throw new Error("AUR0805");
    }
}) ], AuCompose.prototype, "scopeBehavior", void 0);

je("au-compose")(AuCompose);

class EmptyComponent$1 {}

class CompositionContextFactory {
    constructor() {
        this.id = 0;
    }
    isCurrent(t) {
        return t.id === this.id;
    }
    create(t) {
        return (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(t.load(), (t => new CompositionContext(++this.id, t)));
    }
    invalidate() {
        this.id++;
    }
}

class ChangeInfo {
    constructor(t, e, i, s) {
        this.view = t;
        this.viewModel = e;
        this.model = i;
        this.src = s;
    }
    load() {
        if (kt(this.view) || kt(this.viewModel)) return Promise.all([ this.view, this.viewModel ]).then((([t, e]) => new LoadedChangeInfo(t, e, this.model, this.src))); else return new LoadedChangeInfo(this.view, this.viewModel, this.model, this.src);
    }
}

class LoadedChangeInfo {
    constructor(t, e, i, s) {
        this.view = t;
        this.viewModel = e;
        this.model = i;
        this.src = s;
    }
}

class CompositionContext {
    constructor(t, e) {
        this.id = t;
        this.change = e;
    }
}

class CompositionController {
    constructor(t, e, i, s, n) {
        this.controller = t;
        this.start = e;
        this.stop = i;
        this.update = s;
        this.context = n;
        this.state = 0;
    }
    activate(t) {
        if (0 !== this.state) throw new Error(`AUR0807:${this.controller.name}`);
        this.state = 1;
        return this.start(t);
    }
    deactivate(t) {
        switch (this.state) {
          case 1:
            this.state = -1;
            return this.stop(t);

          case -1:
            throw new Error("AUR0808");

          default:
            this.state = -1;
        }
    }
}

class AuSlot {
    constructor(t, e, i, s) {
        var n, r;
        this.Ni = null;
        this.Wi = null;
        let o;
        const l = e.auSlot;
        const h = null === (r = null === (n = i.instruction) || void 0 === n ? void 0 : n.projections) || void 0 === r ? void 0 : r[l.name];
        if (null == h) {
            o = s.getViewFactory(l.fallback, i.controller.container);
            this.Hi = false;
        } else {
            o = s.getViewFactory(h, i.parent.controller.container);
            this.Hi = true;
        }
        this.Li = i;
        this.view = o.create().setLocation(t);
    }
    static get inject() {
        return [ os, ks, Ki, Pi ];
    }
    binding(t, e, i) {
        var s;
        this.Ni = this.$controller.scope.parentScope;
        let n;
        if (this.Hi) {
            n = this.Li.controller.scope.parentScope;
            (this.Wi = _aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.Scope.fromParent(n, n.bindingContext)).overrideContext.$host = null !== (s = this.expose) && void 0 !== s ? s : this.Ni.bindingContext;
        }
    }
    attaching(t, e, i) {
        return this.view.activate(t, this.$controller, i, this.Hi ? this.Wi : this.Ni);
    }
    detaching(t, e, i) {
        return this.view.deactivate(t, this.$controller, i);
    }
    exposeChanged(t) {
        if (this.Hi && null != this.Wi) this.Wi.overrideContext.$host = t;
    }
    dispose() {
        this.view.dispose();
        this.view = void 0;
    }
    accept(t) {
        var e;
        if (true === (null === (e = this.view) || void 0 === e ? void 0 : e.accept(t))) return true;
    }
}

ot([ St ], AuSlot.prototype, "expose", void 0);

je({
    name: "au-slot",
    template: null,
    containerless: true
})(AuSlot);

const Wr = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

const Hr = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.DI.createInterface("ISanitizer", (t => t.singleton(class {
    sanitize(t) {
        return t.replace(Wr, "");
    }
})));

let zr = class SanitizeValueConverter {
    constructor(t) {
        this.zi = t;
    }
    toView(t) {
        if (null == t) return null;
        return this.zi.sanitize(t);
    }
};

zr = ot([ lt(0, Hr) ], zr);

(0,_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.valueConverter)("sanitize")(zr);

let Gr = class ViewValueConverter {
    constructor(t) {
        this.Gi = t;
    }
    toView(t, e) {
        return this.Gi.getViewComponentForObject(t, e);
    }
};

Gr = ot([ lt(0, Di) ], Gr);

(0,_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.valueConverter)("view")(Gr);

const Xr = DebounceBindingBehavior;

const Kr = OneTimeBindingBehavior;

const Yr = ToViewBindingBehavior;

const Qr = FromViewBindingBehavior;

const Zr = SignalBindingBehavior;

const Jr = ThrottleBindingBehavior;

const to = TwoWayBindingBehavior;

const eo = TemplateCompiler;

const io = NodeObserverLocator;

const so = [ eo, io ];

const no = SVGAnalyzer;

const ro = Gt;

const oo = zt;

const lo = Ht;

const ho = Wt;

const ao = Xt;

const co = [ lo, ho, ao ];

const uo = [ ro, oo ];

const fo = xn;

const mo = bn;

const vo = yn;

const po = gn;

const go = vn;

const wo = pn;

const bo = wn;

const xo = Bn;

const yo = kn;

const ko = Cn;

const Co = An;

const Ao = Sn;

const So = En;

const Ro = Rn;

const Eo = In;

const Bo = [ mo, go, po, wo, bo, fo, vo, xo, yo, ko, Co, So, Ro, Ao, Eo ];

const Io = zr;

const To = Gr;

const Do = FrequentMutations;

const Po = ObserveShallow;

const Oo = If;

const $o = Else;

const Lo = Repeat;

const qo = With;

const Mo = Er;

const Uo = Br;

const Fo = Ir;

const Vo = Tr;

const _o = Dr;

const jo = Pr;

const No = Or;

const Wo = Lr;

const Ho = qr;

const zo = Mr;

const Go = AttrBindingBehavior;

const Xo = SelfBindingBehavior;

const Ko = UpdateTriggerBindingBehavior;

const Yo = AuRender;

const Qo = AuCompose;

const Zo = Portal;

const Jo = Focus;

const tl = br;

const el = [ Xr, Kr, Yr, Qr, Zr, Jr, to, Io, To, Do, Po, Oo, $o, Lo, qo, Mo, Uo, Fo, Vo, _o, jo, No, Wo, Ho, zo, Go, Xo, Ko, Yo, Qo, Zo, Jo, tl, AuSlot ];

const il = Ls;

const sl = Ps;

const nl = Ds;

const rl = Ms;

const ol = Fs;

const ll = $s;

const hl = Us;

const al = qs;

const cl = Ts;

const ul = Os;

const fl = Ws;

const dl = Ks;

const ml = Hs;

const vl = zs;

const pl = Gs;

const gl = Xs;

const wl = Ns;

const bl = Ys;

const xl = [ hl, ol, il, al, rl, cl, nl, sl, ul, ll, fl, dl, ml, vl, pl, gl, wl, bl ];

const yl = kl(_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.noop);

function kl(t) {
    return {
        optionsProvider: t,
        register(e) {
            const i = {
                coercingOptions: {
                    enableCoercion: false,
                    coerceNullish: false
                }
            };
            t(i);
            return e.register(_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.Registration.instance(_aurelia_runtime__WEBPACK_IMPORTED_MODULE_3__.ICoercionConfiguration, i.coercingOptions), ...so, ...el, ...co, ...Bo, ...xl);
        },
        customize(e) {
            return kl(null !== e && void 0 !== e ? e : t);
        }
    };
}

const Cl = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.DI.createInterface("IAurelia");

class Aurelia {
    constructor(t = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.DI.createContainer()) {
        this.container = t;
        this.ir = false;
        this.Xi = false;
        this.Ki = false;
        this.Yi = void 0;
        this.next = void 0;
        this.Qi = void 0;
        this.Zi = void 0;
        if (t.has(Cl, true)) throw new Error("AUR0768");
        t.registerResolver(Cl, new _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.InstanceProvider("IAurelia", this));
        t.registerResolver(ts, this.Ji = new _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.InstanceProvider("IAppRoot"));
    }
    get isRunning() {
        return this.ir;
    }
    get isStarting() {
        return this.Xi;
    }
    get isStopping() {
        return this.Ki;
    }
    get root() {
        if (null == this.Yi) {
            if (null == this.next) throw new Error("AUR0767");
            return this.next;
        }
        return this.Yi;
    }
    register(...t) {
        this.container.register(...t);
        return this;
    }
    app(t) {
        this.next = new AppRoot(t, this.ts(t.host), this.container, this.Ji);
        return this;
    }
    enhance(t, e) {
        var i;
        const s = null !== (i = t.container) && void 0 !== i ? i : this.container.createChild();
        const n = t.host;
        const r = this.ts(n);
        const o = t.component;
        let l;
        if (Ct(o)) {
            s.registerResolver(r.HTMLElement, s.registerResolver(r.Element, s.registerResolver(ns, new _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.InstanceProvider("ElementResolver", n))));
            l = s.invoke(o);
        } else l = o;
        s.registerResolver(rs, new _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.InstanceProvider("IEventTarget", n));
        e = null !== e && void 0 !== e ? e : null;
        const h = Controller.$el(s, l, n, null, CustomElementDefinition.create({
            name: si.generateName(),
            template: n,
            enhance: true
        }));
        return (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(h.activate(h, e, 2), (() => h));
    }
    async waitForIdle() {
        const t = this.root.platform;
        await t.domWriteQueue.yield();
        await t.domReadQueue.yield();
        await t.taskQueue.yield();
    }
    ts(e) {
        let i;
        if (!this.container.has(Kt, false)) {
            if (null === e.ownerDocument.defaultView) throw new Error("AUR0769");
            i = new _aurelia_platform_browser__WEBPACK_IMPORTED_MODULE_1__.BrowserPlatform(e.ownerDocument.defaultView);
            this.container.register(_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.Registration.instance(Kt, i));
        } else i = this.container.get(Kt);
        return i;
    }
    start(t = this.next) {
        if (null == t) throw new Error("AUR0770");
        if (this.Qi instanceof Promise) return this.Qi;
        return this.Qi = (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(this.stop(), (() => {
            Reflect.set(t.host, "$aurelia", this);
            this.Ji.prepare(this.Yi = t);
            this.Xi = true;
            return (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(t.activate(), (() => {
                this.ir = true;
                this.Xi = false;
                this.Qi = void 0;
                this.es(t, "au-started", t.host);
            }));
        }));
    }
    stop(t = false) {
        if (this.Zi instanceof Promise) return this.Zi;
        if (true === this.ir) {
            const e = this.Yi;
            this.ir = false;
            this.Ki = true;
            return this.Zi = (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(e.deactivate(), (() => {
                Reflect.deleteProperty(e.host, "$aurelia");
                if (t) e.dispose();
                this.Yi = void 0;
                this.Ji.dispose();
                this.Ki = false;
                this.es(e, "au-stopped", e.host);
            }));
        }
    }
    dispose() {
        if (this.ir || this.Ki) throw new Error("AUR0771");
        this.container.dispose();
    }
    es(t, e, i) {
        const s = new t.platform.window.CustomEvent(e, {
            detail: this,
            bubbles: true,
            cancelable: true
        });
        i.dispatchEvent(s);
    }
}

var Al;

(function(t) {
    t[t["Element"] = 1] = "Element";
    t[t["Attribute"] = 2] = "Attribute";
})(Al || (Al = {}));

const Sl = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.DI.createInterface("IDialogService");

const Rl = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.DI.createInterface("IDialogController");

const El = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.DI.createInterface("IDialogDomRenderer");

const Bl = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.DI.createInterface("IDialogDom");

const Il = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.DI.createInterface("IDialogGlobalSettings");

class DialogOpenResult {
    constructor(t, e) {
        this.wasCancelled = t;
        this.dialog = e;
    }
    static create(t, e) {
        return new DialogOpenResult(t, e);
    }
}

class DialogCloseResult {
    constructor(t, e) {
        this.status = t;
        this.value = e;
    }
    static create(t, e) {
        return new DialogCloseResult(t, e);
    }
}

var Tl;

(function(t) {
    t["Ok"] = "ok";
    t["Error"] = "error";
    t["Cancel"] = "cancel";
    t["Abort"] = "abort";
})(Tl || (Tl = {}));

class DialogController {
    constructor(t, e) {
        this.p = t;
        this.ctn = e;
        this.closed = new Promise(((t, e) => {
            this.$t = t;
            this.Bt = e;
        }));
    }
    static get inject() {
        return [ Kt, _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.IContainer ];
    }
    activate(t) {
        var e;
        const i = this.ctn.createChild();
        const {model: s, template: n, rejectOnCancel: r} = t;
        const o = i.get(El);
        const l = null !== (e = t.host) && void 0 !== e ? e : this.p.document.body;
        const h = this.dom = o.render(l, t);
        const a = i.has(rs, true) ? i.get(rs) : null;
        const u = h.contentHost;
        this.settings = t;
        if (null == a || !a.contains(l)) i.register(_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.Registration.instance(rs, l));
        i.register(_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.Registration.instance(ns, u), _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.Registration.instance(Bl, h));
        return new Promise((e => {
            var n, r;
            const o = Object.assign(this.cmp = this.getOrCreateVm(i, t, u), {
                $dialog: this
            });
            e(null !== (r = null === (n = o.canActivate) || void 0 === n ? void 0 : n.call(o, s)) && void 0 !== r ? r : true);
        })).then((e => {
            var o;
            if (true !== e) {
                h.dispose();
                if (r) throw Dl(null, "Dialog activation rejected");
                return DialogOpenResult.create(true, this);
            }
            const l = this.cmp;
            return (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(null === (o = l.activate) || void 0 === o ? void 0 : o.call(l, s), (() => {
                var e;
                const s = this.controller = Controller.$el(i, l, u, null, CustomElementDefinition.create(null !== (e = this.getDefinition(l)) && void 0 !== e ? e : {
                    name: si.generateName(),
                    template: n
                }));
                return (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(s.activate(s, null, 2), (() => {
                    var e;
                    h.overlay.addEventListener(null !== (e = t.mouseEvent) && void 0 !== e ? e : "click", this);
                    return DialogOpenResult.create(false, this);
                }));
            }));
        }), (t => {
            h.dispose();
            throw t;
        }));
    }
    deactivate(t, e) {
        if (this.ss) return this.ss;
        let i = true;
        const {controller: s, dom: n, cmp: r, settings: {mouseEvent: o, rejectOnCancel: l}} = this;
        const h = DialogCloseResult.create(t, e);
        const a = new Promise((a => {
            var c, u;
            a((0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(null !== (u = null === (c = r.canDeactivate) || void 0 === c ? void 0 : c.call(r, h)) && void 0 !== u ? u : true, (a => {
                var c;
                if (true !== a) {
                    i = false;
                    this.ss = void 0;
                    if (l) throw Dl(null, "Dialog cancellation rejected");
                    return DialogCloseResult.create("abort");
                }
                return (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(null === (c = r.deactivate) || void 0 === c ? void 0 : c.call(r, h), (() => (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(s.deactivate(s, null, 4), (() => {
                    n.dispose();
                    n.overlay.removeEventListener(null !== o && void 0 !== o ? o : "click", this);
                    if (!l && "error" !== t) this.$t(h); else this.Bt(Dl(e, "Dialog cancelled with a rejection on cancel"));
                    return h;
                }))));
            })));
        })).catch((t => {
            this.ss = void 0;
            throw t;
        }));
        this.ss = i ? a : void 0;
        return a;
    }
    ok(t) {
        return this.deactivate("ok", t);
    }
    cancel(t) {
        return this.deactivate("cancel", t);
    }
    error(t) {
        const e = Pl(t);
        return new Promise((t => {
            var i, s;
            return t((0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(null === (s = (i = this.cmp).deactivate) || void 0 === s ? void 0 : s.call(i, DialogCloseResult.create("error", e)), (() => (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(this.controller.deactivate(this.controller, null, 4), (() => {
                this.dom.dispose();
                this.Bt(e);
            })))));
        }));
    }
    handleEvent(t) {
        if (this.settings.overlayDismiss && !this.dom.contentHost.contains(t.target)) this.cancel();
    }
    getOrCreateVm(t, e, i) {
        const s = e.component;
        if (null == s) return new EmptyComponent;
        if ("object" === typeof s) return s;
        const n = this.p;
        t.registerResolver(n.HTMLElement, t.registerResolver(n.Element, t.registerResolver(ns, new _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.InstanceProvider("ElementResolver", i))));
        return t.invoke(s);
    }
    getDefinition(t) {
        const e = Ct(t) ? t : null === t || void 0 === t ? void 0 : t.constructor;
        return si.isType(e) ? si.getDefinition(e) : null;
    }
}

class EmptyComponent {}

function Dl(t, e) {
    const i = new Error(e);
    i.wasCancelled = true;
    i.value = t;
    return i;
}

function Pl(t) {
    const e = new Error;
    e.wasCancelled = false;
    e.value = t;
    return e;
}

class DialogService {
    constructor(t, e, i) {
        this.ut = t;
        this.p = e;
        this.os = i;
        this.dlgs = [];
    }
    get controllers() {
        return this.dlgs.slice(0);
    }
    get top() {
        const t = this.dlgs;
        return t.length > 0 ? t[t.length - 1] : null;
    }
    static get inject() {
        return [ _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.IContainer, Kt, Il ];
    }
    static register(t) {
        t.register(_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.Registration.singleton(Sl, this), xe.beforeDeactivate(Sl, (t => (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(t.closeAll(), (t => {
            if (t.length > 0) throw new Error(`AUR0901:${t.length}`);
        })))));
    }
    open(t) {
        return $l(new Promise((e => {
            var i;
            const s = DialogSettings.from(this.os, t);
            const n = null !== (i = s.container) && void 0 !== i ? i : this.ut.createChild();
            e((0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(s.load(), (t => {
                const e = n.invoke(DialogController);
                n.register(_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.Registration.instance(Rl, e));
                n.register(_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.Registration.callback(DialogController, (() => {
                    throw new Error("AUR0902");
                })));
                return (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(e.activate(t), (t => {
                    if (!t.wasCancelled) {
                        if (1 === this.dlgs.push(e)) this.p.window.addEventListener("keydown", this);
                        const t = () => this.remove(e);
                        e.closed.then(t, t);
                    }
                    return t;
                }));
            })));
        })));
    }
    closeAll() {
        return Promise.all(Array.from(this.dlgs).map((t => {
            if (t.settings.rejectOnCancel) return t.cancel().then((() => null));
            return t.cancel().then((e => "cancel" === e.status ? null : t));
        }))).then((t => t.filter((t => !!t))));
    }
    remove(t) {
        const e = this.dlgs;
        const i = e.indexOf(t);
        if (i > -1) this.dlgs.splice(i, 1);
        if (0 === e.length) this.p.window.removeEventListener("keydown", this);
    }
    handleEvent(t) {
        const e = t;
        const i = Ll(e);
        if (null == i) return;
        const s = this.top;
        if (null === s || 0 === s.settings.keyboard.length) return;
        const n = s.settings.keyboard;
        if ("Escape" === i && n.includes(i)) void s.cancel(); else if ("Enter" === i && n.includes(i)) void s.ok();
    }
}

class DialogSettings {
    static from(...t) {
        return Object.assign(new DialogSettings, ...t).cs().ls();
    }
    load() {
        const t = this;
        const e = this.component;
        const i = this.template;
        const s = (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.resolveAll)(null == e ? void 0 : (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(e(), (e => {
            t.component = e;
        })), Ct(i) ? (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.onResolve)(i(), (e => {
            t.template = e;
        })) : void 0);
        return s instanceof Promise ? s.then((() => t)) : t;
    }
    cs() {
        if (null == this.component && null == this.template) throw new Error("AUR0903");
        return this;
    }
    ls() {
        if (null == this.keyboard) this.keyboard = this.lock ? [] : [ "Enter", "Escape" ];
        if ("boolean" !== typeof this.overlayDismiss) this.overlayDismiss = !this.lock;
        return this;
    }
}

function Ol(t, e) {
    return this.then((i => i.dialog.closed.then(t, e)), e);
}

function $l(t) {
    t.whenClosed = Ol;
    return t;
}

function Ll(t) {
    if ("Escape" === (t.code || t.key) || 27 === t.keyCode) return "Escape";
    if ("Enter" === (t.code || t.key) || 13 === t.keyCode) return "Enter";
    return;
}

class DefaultDialogGlobalSettings {
    constructor() {
        this.lock = true;
        this.startingZIndex = 1e3;
        this.rejectOnCancel = false;
    }
    static register(t) {
        _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.Registration.singleton(Il, this).register(t);
    }
}

const ql = "position:absolute;width:100%;height:100%;top:0;left:0;";

class DefaultDialogDomRenderer {
    constructor(t) {
        this.p = t;
        this.wrapperCss = `${ql} display:flex;`;
        this.overlayCss = ql;
        this.hostCss = "position:relative;margin:auto;";
    }
    static register(t) {
        _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.Registration.singleton(El, this).register(t);
    }
    render(t) {
        const e = this.p.document;
        const i = (t, i) => {
            const s = e.createElement(t);
            s.style.cssText = i;
            return s;
        };
        const s = t.appendChild(i("au-dialog-container", this.wrapperCss));
        const n = s.appendChild(i("au-dialog-overlay", this.overlayCss));
        const r = s.appendChild(i("div", this.hostCss));
        return new DefaultDialogDom(s, n, r);
    }
}

DefaultDialogDomRenderer.inject = [ Kt ];

class DefaultDialogDom {
    constructor(t, e, i) {
        this.wrapper = t;
        this.overlay = e;
        this.contentHost = i;
    }
    dispose() {
        this.wrapper.remove();
    }
}

function Ml(t, e) {
    return {
        settingsProvider: t,
        register: i => i.register(...e, xe.beforeCreate((() => t(i.get(Il))))),
        customize(t, i) {
            return Ml(t, null !== i && void 0 !== i ? i : e);
        }
    };
}

const Ul = Ml((() => {
    throw new Error("AUR0904");
}), [ class NoopDialogGlobalSettings {
    static register(t) {
        t.register(_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.Registration.singleton(Il, this));
    }
} ]);

const Fl = Ml(_aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.noop, [ DialogService, DefaultDialogGlobalSettings, DefaultDialogDomRenderer ]);

const Vl = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.DI.createInterface((t => t.singleton(WcCustomElementRegistry)));

class WcCustomElementRegistry {
    constructor(t, e, i) {
        this.ctn = t;
        this.p = e;
        this.r = i;
    }
    define(t, e, i) {
        if (!t.includes("-")) throw new Error('Invalid web-components custom element name. It must include a "-"');
        let s;
        if (null == e) throw new Error("Invalid custom element definition");
        switch (typeof e) {
          case "function":
            s = si.isType(e) ? si.getDefinition(e) : CustomElementDefinition.create(si.generateName(), e);
            break;

          default:
            s = CustomElementDefinition.getOrCreate(e);
            break;
        }
        if (s.containerless) throw new Error("Containerless custom element is not supported. Consider using buitl-in extends instead");
        const n = !(null === i || void 0 === i ? void 0 : i.extends) ? HTMLElement : this.p.document.createElement(i.extends).constructor;
        const r = this.ctn;
        const o = this.r;
        const l = s.bindables;
        const h = this.p;
        class CustomElementClass extends n {
            auInit() {
                if (this.auInited) return;
                this.auInited = true;
                const t = r.createChild();
                t.registerResolver(h.HTMLElement, t.registerResolver(h.Element, t.registerResolver(ns, new _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.InstanceProvider("ElementProvider", this))));
                const e = o.compile(s, t, {
                    projections: null
                });
                const i = t.invoke(e.Type);
                const n = this.auCtrl = Controller.$el(t, i, this, null, e);
                ss(this, e.key, n);
            }
            connectedCallback() {
                this.auInit();
                this.auCtrl.activate(this.auCtrl, null, 0);
            }
            disconnectedCallback() {
                this.auCtrl.deactivate(this.auCtrl, null, 0);
            }
            adoptedCallback() {
                this.auInit();
            }
            attributeChangedCallback(t, e, i) {
                this.auInit();
                this.auCtrl.viewModel[t] = i;
            }
        }
        CustomElementClass.observedAttributes = Object.keys(l);
        for (const t in l) Object.defineProperty(CustomElementClass.prototype, t, {
            configurable: true,
            enumerable: false,
            get() {
                return this["auCtrl"].viewModel[t];
            },
            set(e) {
                if (!this["auInited"]) this["auInit"]();
                this["auCtrl"].viewModel[t] = e;
            }
        });
        this.p.customElements.define(t, CustomElementClass, i);
        return CustomElementClass;
    }
}

WcCustomElementRegistry.inject = [ _aurelia_kernel__WEBPACK_IMPORTED_MODULE_2__.IContainer, Kt, Pi ];


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/@aurelia/runtime/dist/esm/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@aurelia/runtime/dist/esm/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IPlatform": () => /* reexport safe */ _aurelia_kernel__WEBPACK_IMPORTED_MODULE_0__.IPlatform,
/* harmony export */   "Platform": () => /* reexport safe */ _aurelia_platform__WEBPACK_IMPORTED_MODULE_1__.Platform,
/* harmony export */   "Task": () => /* reexport safe */ _aurelia_platform__WEBPACK_IMPORTED_MODULE_1__.Task,
/* harmony export */   "TaskAbortError": () => /* reexport safe */ _aurelia_platform__WEBPACK_IMPORTED_MODULE_1__.TaskAbortError,
/* harmony export */   "TaskQueue": () => /* reexport safe */ _aurelia_platform__WEBPACK_IMPORTED_MODULE_1__.TaskQueue,
/* harmony export */   "TaskQueuePriority": () => /* reexport safe */ _aurelia_platform__WEBPACK_IMPORTED_MODULE_1__.TaskQueuePriority,
/* harmony export */   "TaskStatus": () => /* reexport safe */ _aurelia_platform__WEBPACK_IMPORTED_MODULE_1__.TaskStatus,
/* harmony export */   "Access": () => /* binding */ Ue,
/* harmony export */   "AccessKeyedExpression": () => /* binding */ AccessKeyedExpression,
/* harmony export */   "AccessMemberExpression": () => /* binding */ AccessMemberExpression,
/* harmony export */   "AccessScopeExpression": () => /* binding */ AccessScopeExpression,
/* harmony export */   "AccessThisExpression": () => /* binding */ AccessThisExpression,
/* harmony export */   "AccessorType": () => /* binding */ X,
/* harmony export */   "ArrayBindingPattern": () => /* binding */ ArrayBindingPattern,
/* harmony export */   "ArrayIndexObserver": () => /* binding */ ArrayIndexObserver,
/* harmony export */   "ArrayLiteralExpression": () => /* binding */ ArrayLiteralExpression,
/* harmony export */   "ArrayObserver": () => /* binding */ ArrayObserver,
/* harmony export */   "AssignExpression": () => /* binding */ AssignExpression,
/* harmony export */   "BinaryExpression": () => /* binding */ BinaryExpression,
/* harmony export */   "BindingBehavior": () => /* binding */ T,
/* harmony export */   "BindingBehaviorDefinition": () => /* binding */ BindingBehaviorDefinition,
/* harmony export */   "BindingBehaviorExpression": () => /* binding */ BindingBehaviorExpression,
/* harmony export */   "BindingBehaviorFactory": () => /* binding */ BindingBehaviorFactory,
/* harmony export */   "BindingBehaviorStrategy": () => /* binding */ $,
/* harmony export */   "BindingContext": () => /* binding */ BindingContext,
/* harmony export */   "BindingIdentifier": () => /* binding */ BindingIdentifier,
/* harmony export */   "BindingInterceptor": () => /* binding */ BindingInterceptor,
/* harmony export */   "BindingMediator": () => /* binding */ BindingMediator,
/* harmony export */   "BindingMode": () => /* binding */ z,
/* harmony export */   "BindingObserverRecord": () => /* binding */ BindingObserverRecord,
/* harmony export */   "CallFunctionExpression": () => /* binding */ CallFunctionExpression,
/* harmony export */   "CallMemberExpression": () => /* binding */ CallMemberExpression,
/* harmony export */   "CallScopeExpression": () => /* binding */ CallScopeExpression,
/* harmony export */   "Char": () => /* binding */ ye,
/* harmony export */   "CollectionKind": () => /* binding */ J,
/* harmony export */   "CollectionLengthObserver": () => /* binding */ CollectionLengthObserver,
/* harmony export */   "CollectionSizeObserver": () => /* binding */ CollectionSizeObserver,
/* harmony export */   "ComputedObserver": () => /* binding */ ComputedObserver,
/* harmony export */   "ConditionalExpression": () => /* binding */ ConditionalExpression,
/* harmony export */   "ConnectableSwitcher": () => /* binding */ vs,
/* harmony export */   "CustomExpression": () => /* binding */ CustomExpression,
/* harmony export */   "DelegationStrategy": () => /* binding */ Z,
/* harmony export */   "DestructuringAssignmentExpression": () => /* binding */ DestructuringAssignmentExpression,
/* harmony export */   "DestructuringAssignmentRestExpression": () => /* binding */ DestructuringAssignmentRestExpression,
/* harmony export */   "DestructuringAssignmentSingleExpression": () => /* binding */ DestructuringAssignmentSingleExpression,
/* harmony export */   "DirtyCheckProperty": () => /* binding */ DirtyCheckProperty,
/* harmony export */   "DirtyCheckSettings": () => /* binding */ ar,
/* harmony export */   "ExpressionKind": () => /* binding */ F,
/* harmony export */   "ExpressionType": () => /* binding */ Re,
/* harmony export */   "FlushQueue": () => /* binding */ FlushQueue,
/* harmony export */   "ForOfStatement": () => /* binding */ ForOfStatement,
/* harmony export */   "HtmlLiteralExpression": () => /* binding */ HtmlLiteralExpression,
/* harmony export */   "ICoercionConfiguration": () => /* binding */ _,
/* harmony export */   "IDirtyChecker": () => /* binding */ ur,
/* harmony export */   "IExpressionParser": () => /* binding */ Ae,
/* harmony export */   "INodeObserverLocator": () => /* binding */ pr,
/* harmony export */   "IObservation": () => /* binding */ Er,
/* harmony export */   "IObserverLocator": () => /* binding */ vr,
/* harmony export */   "ISignaler": () => /* binding */ B,
/* harmony export */   "Interpolation": () => /* binding */ Interpolation,
/* harmony export */   "LifecycleFlags": () => /* binding */ W,
/* harmony export */   "MapObserver": () => /* binding */ MapObserver,
/* harmony export */   "ObjectBindingPattern": () => /* binding */ ObjectBindingPattern,
/* harmony export */   "ObjectLiteralExpression": () => /* binding */ ObjectLiteralExpression,
/* harmony export */   "Observation": () => /* binding */ Observation,
/* harmony export */   "ObserverLocator": () => /* binding */ ObserverLocator,
/* harmony export */   "OverrideContext": () => /* binding */ OverrideContext,
/* harmony export */   "ParserState": () => /* binding */ ParserState,
/* harmony export */   "Precedence": () => /* binding */ xe,
/* harmony export */   "PrimitiveLiteralExpression": () => /* binding */ PrimitiveLiteralExpression,
/* harmony export */   "PrimitiveObserver": () => /* binding */ PrimitiveObserver,
/* harmony export */   "PropertyAccessor": () => /* binding */ PropertyAccessor,
/* harmony export */   "ProxyObservable": () => /* binding */ hr,
/* harmony export */   "Scope": () => /* binding */ Scope,
/* harmony export */   "SetObserver": () => /* binding */ SetObserver,
/* harmony export */   "SetterObserver": () => /* binding */ SetterObserver,
/* harmony export */   "SubscriberRecord": () => /* binding */ SubscriberRecord,
/* harmony export */   "TaggedTemplateExpression": () => /* binding */ TaggedTemplateExpression,
/* harmony export */   "TemplateExpression": () => /* binding */ TemplateExpression,
/* harmony export */   "UnaryExpression": () => /* binding */ UnaryExpression,
/* harmony export */   "ValueConverter": () => /* binding */ D,
/* harmony export */   "ValueConverterDefinition": () => /* binding */ ValueConverterDefinition,
/* harmony export */   "ValueConverterExpression": () => /* binding */ ValueConverterExpression,
/* harmony export */   "alias": () => /* binding */ O,
/* harmony export */   "applyMutationsToIndices": () => /* binding */ It,
/* harmony export */   "bindingBehavior": () => /* binding */ L,
/* harmony export */   "cloneIndexMap": () => /* binding */ et,
/* harmony export */   "connectable": () => /* binding */ Ee,
/* harmony export */   "copyIndexMap": () => /* binding */ Y,
/* harmony export */   "createIndexMap": () => /* binding */ tt,
/* harmony export */   "disableArrayObservation": () => /* binding */ Tt,
/* harmony export */   "disableMapObservation": () => /* binding */ ce,
/* harmony export */   "disableSetObservation": () => /* binding */ Gt,
/* harmony export */   "enableArrayObservation": () => /* binding */ Pt,
/* harmony export */   "enableMapObservation": () => /* binding */ he,
/* harmony export */   "enableSetObservation": () => /* binding */ Wt,
/* harmony export */   "getCollectionObserver": () => /* binding */ gr,
/* harmony export */   "isIndexMap": () => /* binding */ st,
/* harmony export */   "observable": () => /* binding */ mr,
/* harmony export */   "parse": () => /* binding */ je,
/* harmony export */   "parseExpression": () => /* binding */ Te,
/* harmony export */   "registerAliases": () => /* binding */ C,
/* harmony export */   "subscriberCollection": () => /* binding */ rt,
/* harmony export */   "synchronizeIndices": () => /* binding */ Mt,
/* harmony export */   "valueConverter": () => /* binding */ j,
/* harmony export */   "withFlushQueue": () => /* binding */ ct
/* harmony export */ });
/* harmony import */ var _aurelia_kernel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aurelia/kernel */ "./node_modules/@aurelia/kernel/dist/esm/index.js");
/* harmony import */ var _aurelia_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aurelia/platform */ "./node_modules/@aurelia/platform/dist/esm/index.js");






const d = Object.prototype.hasOwnProperty;

const v = Reflect.defineProperty;

const p = t => "function" === typeof t;

const g = t => "string" === typeof t;

function w(t, e, s) {
    v(t, e, {
        enumerable: false,
        configurable: true,
        writable: true,
        value: s
    });
    return s;
}

function b(t, e, s, r = false) {
    if (r || !d.call(t, e)) w(t, e, s);
}

const E = () => Object.create(null);

const A = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_0__.Metadata.getOwn;

const y = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_0__.Metadata.hasOwn;

const m = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_0__.Metadata.define;

const U = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_0__.Protocol.annotation.keyFor;

const x = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_0__.Protocol.resource.keyFor;

const S = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_0__.Protocol.resource.appendTo;

function O(...t) {
    return function(e) {
        const s = U("aliases");
        const r = A(s, e);
        if (void 0 === r) m(s, t, e); else r.push(...t);
    };
}

function C(t, e, r, i) {
    for (let n = 0, o = t.length; n < o; ++n) _aurelia_kernel__WEBPACK_IMPORTED_MODULE_0__.Registration.aliasTo(r, e.keyFrom(t[n])).register(i);
}

const k = Object.freeze({});

class BindingContext {
    constructor(t, e) {
        if (void 0 !== t) if (void 0 !== e) this[t] = e; else for (const e in t) if (Object.prototype.hasOwnProperty.call(t, e)) this[e] = t[e];
    }
    static create(t, e) {
        return new BindingContext(t, e);
    }
    static get(t, e, s, r) {
        var i, n;
        if (null == t) throw new Error(`AUR0203:${t}`);
        let o = t.overrideContext;
        let h = t;
        if (s > 0) {
            while (s > 0) {
                s--;
                h = h.parentScope;
                if (null == (null === h || void 0 === h ? void 0 : h.overrideContext)) return;
            }
            o = h.overrideContext;
            return e in o ? o : o.bindingContext;
        }
        while (!(null === h || void 0 === h ? void 0 : h.isBoundary) && null != o && !(e in o) && !(o.bindingContext && e in o.bindingContext)) {
            h = null !== (i = h.parentScope) && void 0 !== i ? i : null;
            o = null !== (n = null === h || void 0 === h ? void 0 : h.overrideContext) && void 0 !== n ? n : null;
        }
        if (o) return e in o ? o : o.bindingContext;
        if (16 & r) return k;
        return t.bindingContext || t.overrideContext;
    }
}

class Scope {
    constructor(t, e, s, r) {
        this.parentScope = t;
        this.bindingContext = e;
        this.overrideContext = s;
        this.isBoundary = r;
    }
    static create(t, e, s) {
        return new Scope(null, t, null == e ? OverrideContext.create(t) : e, null !== s && void 0 !== s ? s : false);
    }
    static fromOverride(t) {
        if (null == t) throw new Error(`AUR0204:${t}`);
        return new Scope(null, t.bindingContext, t, false);
    }
    static fromParent(t, e) {
        if (null == t) throw new Error(`AUR0205:${t}`);
        return new Scope(t, e, OverrideContext.create(e), false);
    }
}

class OverrideContext {
    constructor(t) {
        this.bindingContext = t;
    }
    static create(t) {
        return new OverrideContext(t);
    }
}

const B = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_0__.DI.createInterface("ISignaler", (t => t.singleton(Signaler)));

class Signaler {
    constructor() {
        this.signals = E();
    }
    dispatchSignal(t, e) {
        const s = this.signals[t];
        if (void 0 === s) return;
        let r;
        for (r of s.keys()) r.handleChange(void 0, void 0, e);
    }
    addSignalListener(t, e) {
        const s = this.signals;
        const r = s[t];
        if (void 0 === r) s[t] = new Set([ e ]); else r.add(e);
    }
    removeSignalListener(t, e) {
        const s = this.signals[t];
        if (s) s.delete(e);
    }
}

var $;

(function(t) {
    t[t["singleton"] = 1] = "singleton";
    t[t["interceptor"] = 2] = "interceptor";
})($ || ($ = {}));

function L(t) {
    return function(e) {
        return T.define(t, e);
    };
}

class BindingBehaviorDefinition {
    constructor(t, e, s, r, i) {
        this.Type = t;
        this.name = e;
        this.aliases = s;
        this.key = r;
        this.strategy = i;
    }
    static create(t, e) {
        let s;
        let r;
        if (g(t)) {
            s = t;
            r = {
                name: s
            };
        } else {
            s = t.name;
            r = t;
        }
        const h = Object.getPrototypeOf(e) === BindingInterceptor;
        return new BindingBehaviorDefinition(e, (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_0__.firstDefined)(P(e, "name"), s), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_0__.mergeArrays)(P(e, "aliases"), r.aliases, e.aliases), T.keyFrom(s), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_0__.fromAnnotationOrDefinitionOrTypeOrDefault)("strategy", r, e, (() => h ? 2 : 1)));
    }
    register(t) {
        const {Type: e, key: r, aliases: i, strategy: n} = this;
        switch (n) {
          case 1:
            _aurelia_kernel__WEBPACK_IMPORTED_MODULE_0__.Registration.singleton(r, e).register(t);
            break;

          case 2:
            _aurelia_kernel__WEBPACK_IMPORTED_MODULE_0__.Registration.instance(r, new BindingBehaviorFactory(t, e)).register(t);
            break;
        }
        _aurelia_kernel__WEBPACK_IMPORTED_MODULE_0__.Registration.aliasTo(r, e).register(t);
        C(i, T, r, t);
    }
}

class BindingBehaviorFactory {
    constructor(t, e) {
        this.ctn = t;
        this.Type = e;
        this.deps = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_0__.DI.getDependencies(e);
    }
    construct(t, e) {
        const s = this.ctn;
        const r = this.deps;
        switch (r.length) {
          case 0:
            return new this.Type(t, e);

          case 1:
            return new this.Type(s.get(r[0]), t, e);

          case 2:
            return new this.Type(s.get(r[0]), s.get(r[1]), t, e);

          default:
            return new this.Type(...r.map((t => s.get(t))), t, e);
        }
    }
}

class BindingInterceptor {
    constructor(t, e) {
        this.binding = t;
        this.expr = e;
        this.interceptor = this;
        let s;
        while (t.interceptor !== this) {
            s = t.interceptor;
            t.interceptor = this;
            t = s;
        }
    }
    get oL() {
        return this.binding.oL;
    }
    get locator() {
        return this.binding.locator;
    }
    get $scope() {
        return this.binding.$scope;
    }
    get isBound() {
        return this.binding.isBound;
    }
    get obs() {
        return this.binding.obs;
    }
    get sourceExpression() {
        return this.binding.sourceExpression;
    }
    updateTarget(t, e) {
        this.binding.updateTarget(t, e);
    }
    updateSource(t, e) {
        this.binding.updateSource(t, e);
    }
    callSource(t) {
        return this.binding.callSource(t);
    }
    handleChange(t, e, s) {
        this.binding.handleChange(t, e, s);
    }
    handleCollectionChange(t, e) {
        this.binding.handleCollectionChange(t, e);
    }
    observe(t, e) {
        this.binding.observe(t, e);
    }
    observeCollection(t) {
        this.binding.observeCollection(t);
    }
    $bind(t, e) {
        this.binding.$bind(t, e);
    }
    $unbind(t) {
        this.binding.$unbind(t);
    }
}

const R = x("binding-behavior");

const P = (t, e) => A(U(e), t);

const T = Object.freeze({
    name: R,
    keyFrom(t) {
        return `${R}:${t}`;
    },
    isType(t) {
        return p(t) && y(R, t);
    },
    define(t, e) {
        const s = BindingBehaviorDefinition.create(t, e);
        m(R, s, s.Type);
        m(R, s, s);
        S(e, R);
        return s.Type;
    },
    getDefinition(t) {
        const e = A(R, t);
        if (void 0 === e) throw new Error(`AUR0151:${t.name}`);
        return e;
    },
    annotate(t, e, s) {
        m(U(e), s, t);
    },
    getAnnotation: P
});

function j(t) {
    return function(e) {
        return D.define(t, e);
    };
}

class ValueConverterDefinition {
    constructor(t, e, s, r) {
        this.Type = t;
        this.name = e;
        this.aliases = s;
        this.key = r;
    }
    static create(t, e) {
        let s;
        let r;
        if (g(t)) {
            s = t;
            r = {
                name: s
            };
        } else {
            s = t.name;
            r = t;
        }
        return new ValueConverterDefinition(e, (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_0__.firstDefined)(M(e, "name"), s), (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_0__.mergeArrays)(M(e, "aliases"), r.aliases, e.aliases), D.keyFrom(s));
    }
    register(t) {
        const {Type: e, key: r, aliases: i} = this;
        _aurelia_kernel__WEBPACK_IMPORTED_MODULE_0__.Registration.singleton(r, e).register(t);
        _aurelia_kernel__WEBPACK_IMPORTED_MODULE_0__.Registration.aliasTo(r, e).register(t);
        C(i, D, r, t);
    }
}

const I = x("value-converter");

const M = (t, e) => A(U(e), t);

const D = Object.freeze({
    name: I,
    keyFrom: t => `${I}:${t}`,
    isType(t) {
        return p(t) && y(I, t);
    },
    define(t, e) {
        const s = ValueConverterDefinition.create(t, e);
        m(I, s, s.Type);
        m(I, s, s);
        S(e, I);
        return s.Type;
    },
    getDefinition(t) {
        const e = A(I, t);
        if (void 0 === e) throw new Error(`AUR0152:${t.name}`);
        return e;
    },
    annotate(t, e, s) {
        m(U(e), s, t);
    },
    getAnnotation: M
});

var F;

(function(t) {
    t[t["CallsFunction"] = 128] = "CallsFunction";
    t[t["HasAncestor"] = 256] = "HasAncestor";
    t[t["IsPrimary"] = 512] = "IsPrimary";
    t[t["IsLeftHandSide"] = 1024] = "IsLeftHandSide";
    t[t["HasBind"] = 2048] = "HasBind";
    t[t["HasUnbind"] = 4096] = "HasUnbind";
    t[t["IsAssignable"] = 8192] = "IsAssignable";
    t[t["IsLiteral"] = 16384] = "IsLiteral";
    t[t["IsResource"] = 32768] = "IsResource";
    t[t["IsForDeclaration"] = 65536] = "IsForDeclaration";
    t[t["Type"] = 31] = "Type";
    t[t["AccessThis"] = 1793] = "AccessThis";
    t[t["AccessScope"] = 10082] = "AccessScope";
    t[t["ArrayLiteral"] = 17955] = "ArrayLiteral";
    t[t["ObjectLiteral"] = 17956] = "ObjectLiteral";
    t[t["PrimitiveLiteral"] = 17925] = "PrimitiveLiteral";
    t[t["Template"] = 17958] = "Template";
    t[t["Unary"] = 39] = "Unary";
    t[t["CallScope"] = 1448] = "CallScope";
    t[t["CallMember"] = 1161] = "CallMember";
    t[t["CallFunction"] = 1162] = "CallFunction";
    t[t["AccessMember"] = 9323] = "AccessMember";
    t[t["AccessKeyed"] = 9324] = "AccessKeyed";
    t[t["TaggedTemplate"] = 1197] = "TaggedTemplate";
    t[t["Binary"] = 46] = "Binary";
    t[t["Conditional"] = 63] = "Conditional";
    t[t["Assign"] = 8208] = "Assign";
    t[t["ValueConverter"] = 36913] = "ValueConverter";
    t[t["BindingBehavior"] = 38962] = "BindingBehavior";
    t[t["HtmlLiteral"] = 51] = "HtmlLiteral";
    t[t["ArrayBindingPattern"] = 65556] = "ArrayBindingPattern";
    t[t["ObjectBindingPattern"] = 65557] = "ObjectBindingPattern";
    t[t["BindingIdentifier"] = 65558] = "BindingIdentifier";
    t[t["ForOfStatement"] = 6199] = "ForOfStatement";
    t[t["Interpolation"] = 24] = "Interpolation";
    t[t["ArrayDestructuring"] = 90137] = "ArrayDestructuring";
    t[t["ObjectDestructuring"] = 106521] = "ObjectDestructuring";
    t[t["DestructuringAssignmentLeaf"] = 139289] = "DestructuringAssignmentLeaf";
})(F || (F = {}));

class Unparser {
    constructor() {
        this.text = "";
    }
    static unparse(t) {
        const e = new Unparser;
        t.accept(e);
        return e.text;
    }
    visitAccessMember(t) {
        t.object.accept(this);
        this.text += `.${t.name}`;
    }
    visitAccessKeyed(t) {
        t.object.accept(this);
        this.text += "[";
        t.key.accept(this);
        this.text += "]";
    }
    visitAccessThis(t) {
        if (0 === t.ancestor) {
            this.text += "$this";
            return;
        }
        this.text += "$parent";
        let e = t.ancestor - 1;
        while (e--) this.text += ".$parent";
    }
    visitAccessScope(t) {
        let e = t.ancestor;
        while (e--) this.text += "$parent.";
        this.text += t.name;
    }
    visitArrayLiteral(t) {
        const e = t.elements;
        this.text += "[";
        for (let t = 0, s = e.length; t < s; ++t) {
            if (0 !== t) this.text += ",";
            e[t].accept(this);
        }
        this.text += "]";
    }
    visitObjectLiteral(t) {
        const e = t.keys;
        const s = t.values;
        this.text += "{";
        for (let t = 0, r = e.length; t < r; ++t) {
            if (0 !== t) this.text += ",";
            this.text += `'${e[t]}':`;
            s[t].accept(this);
        }
        this.text += "}";
    }
    visitPrimitiveLiteral(t) {
        this.text += "(";
        if (g(t.value)) {
            const e = t.value.replace(/'/g, "\\'");
            this.text += `'${e}'`;
        } else this.text += `${t.value}`;
        this.text += ")";
    }
    visitCallFunction(t) {
        this.text += "(";
        t.func.accept(this);
        this.writeArgs(t.args);
        this.text += ")";
    }
    visitCallMember(t) {
        this.text += "(";
        t.object.accept(this);
        this.text += `.${t.name}`;
        this.writeArgs(t.args);
        this.text += ")";
    }
    visitCallScope(t) {
        this.text += "(";
        let e = t.ancestor;
        while (e--) this.text += "$parent.";
        this.text += t.name;
        this.writeArgs(t.args);
        this.text += ")";
    }
    visitTemplate(t) {
        const {cooked: e, expressions: s} = t;
        const r = s.length;
        this.text += "`";
        this.text += e[0];
        for (let t = 0; t < r; t++) {
            s[t].accept(this);
            this.text += e[t + 1];
        }
        this.text += "`";
    }
    visitTaggedTemplate(t) {
        const {cooked: e, expressions: s} = t;
        const r = s.length;
        t.func.accept(this);
        this.text += "`";
        this.text += e[0];
        for (let t = 0; t < r; t++) {
            s[t].accept(this);
            this.text += e[t + 1];
        }
        this.text += "`";
    }
    visitUnary(t) {
        this.text += `(${t.operation}`;
        if (t.operation.charCodeAt(0) >= 97) this.text += " ";
        t.expression.accept(this);
        this.text += ")";
    }
    visitBinary(t) {
        this.text += "(";
        t.left.accept(this);
        if (105 === t.operation.charCodeAt(0)) this.text += ` ${t.operation} `; else this.text += t.operation;
        t.right.accept(this);
        this.text += ")";
    }
    visitConditional(t) {
        this.text += "(";
        t.condition.accept(this);
        this.text += "?";
        t.yes.accept(this);
        this.text += ":";
        t.no.accept(this);
        this.text += ")";
    }
    visitAssign(t) {
        this.text += "(";
        t.target.accept(this);
        this.text += "=";
        t.value.accept(this);
        this.text += ")";
    }
    visitValueConverter(t) {
        const e = t.args;
        t.expression.accept(this);
        this.text += `|${t.name}`;
        for (let t = 0, s = e.length; t < s; ++t) {
            this.text += ":";
            e[t].accept(this);
        }
    }
    visitBindingBehavior(t) {
        const e = t.args;
        t.expression.accept(this);
        this.text += `&${t.name}`;
        for (let t = 0, s = e.length; t < s; ++t) {
            this.text += ":";
            e[t].accept(this);
        }
    }
    visitArrayBindingPattern(t) {
        const e = t.elements;
        this.text += "[";
        for (let t = 0, s = e.length; t < s; ++t) {
            if (0 !== t) this.text += ",";
            e[t].accept(this);
        }
        this.text += "]";
    }
    visitObjectBindingPattern(t) {
        const e = t.keys;
        const s = t.values;
        this.text += "{";
        for (let t = 0, r = e.length; t < r; ++t) {
            if (0 !== t) this.text += ",";
            this.text += `'${e[t]}':`;
            s[t].accept(this);
        }
        this.text += "}";
    }
    visitBindingIdentifier(t) {
        this.text += t.name;
    }
    visitHtmlLiteral(t) {
        throw new Error("visitHtmlLiteral");
    }
    visitForOfStatement(t) {
        t.declaration.accept(this);
        this.text += " of ";
        t.iterable.accept(this);
    }
    visitInterpolation(t) {
        const {parts: e, expressions: s} = t;
        const r = s.length;
        this.text += "${";
        this.text += e[0];
        for (let t = 0; t < r; t++) {
            s[t].accept(this);
            this.text += e[t + 1];
        }
        this.text += "}";
    }
    visitDestructuringAssignmentExpression(t) {
        const e = t.$kind;
        const s = 106521 === e;
        this.text += s ? "{" : "[";
        const r = t.list;
        const i = r.length;
        let n;
        let o;
        for (n = 0; n < i; n++) {
            o = r[n];
            switch (o.$kind) {
              case 139289:
                o.accept(this);
                break;

              case 90137:
              case 106521:
                {
                    const t = o.source;
                    if (t) {
                        t.accept(this);
                        this.text += ":";
                    }
                    o.accept(this);
                    break;
                }
            }
        }
        this.text += s ? "}" : "]";
    }
    visitDestructuringAssignmentSingleExpression(t) {
        t.source.accept(this);
        this.text += ":";
        t.target.accept(this);
        const e = t.initializer;
        if (void 0 !== e) {
            this.text += "=";
            e.accept(this);
        }
    }
    visitDestructuringAssignmentRestExpression(t) {
        this.text += "...";
        t.accept(this);
    }
    writeArgs(t) {
        this.text += "(";
        for (let e = 0, s = t.length; e < s; ++e) {
            if (0 !== e) this.text += ",";
            t[e].accept(this);
        }
        this.text += ")";
    }
}

class CustomExpression {
    constructor(t) {
        this.value = t;
    }
    evaluate(t, e, s, r) {
        return this.value;
    }
}

class BindingBehaviorExpression {
    constructor(t, e, s) {
        this.expression = t;
        this.name = e;
        this.args = s;
        this.behaviorKey = T.keyFrom(e);
    }
    get $kind() {
        return 38962;
    }
    get hasBind() {
        return true;
    }
    get hasUnbind() {
        return true;
    }
    evaluate(t, e, s, r) {
        return this.expression.evaluate(t, e, s, r);
    }
    assign(t, e, s, r) {
        return this.expression.assign(t, e, s, r);
    }
    bind(t, e, s) {
        if (this.expression.hasBind) this.expression.bind(t, e, s);
        const r = s.locator.get(this.behaviorKey);
        if (null == r) throw new Error(`AUR0101:${this.name}`);
        if (!(r instanceof BindingBehaviorFactory)) if (void 0 === s[this.behaviorKey]) {
            s[this.behaviorKey] = r;
            r.bind.call(r, t, e, s, ...this.args.map((r => r.evaluate(t, e, s.locator, null))));
        } else throw new Error(`AUR0102:${this.name}`);
    }
    unbind(t, e, s) {
        const r = this.behaviorKey;
        const i = s;
        if (void 0 !== i[r]) {
            if (p(i[r].unbind)) i[r].unbind(t, e, s);
            i[r] = void 0;
        }
        if (this.expression.hasUnbind) this.expression.unbind(t, e, s);
    }
    accept(t) {
        return t.visitBindingBehavior(this);
    }
    toString() {
        return Unparser.unparse(this);
    }
}

class ValueConverterExpression {
    constructor(t, e, s) {
        this.expression = t;
        this.name = e;
        this.args = s;
        this.converterKey = D.keyFrom(e);
    }
    get $kind() {
        return 36913;
    }
    get hasBind() {
        return false;
    }
    get hasUnbind() {
        return true;
    }
    evaluate(t, e, s, r) {
        const i = s.get(this.converterKey);
        if (null == i) throw new Error(`AUR0103:${this.name}`);
        if (null !== r && "handleChange" in r) {
            const t = i.signals;
            if (null != t) {
                const e = s.get(B);
                for (let s = 0, i = t.length; s < i; ++s) e.addSignalListener(t[s], r);
            }
        }
        if ("toView" in i) return i.toView(this.expression.evaluate(t, e, s, r), ...this.args.map((i => i.evaluate(t, e, s, r))));
        return this.expression.evaluate(t, e, s, r);
    }
    assign(t, e, s, r) {
        const i = s.get(this.converterKey);
        if (null == i) throw new Error(`AUR0104:${this.name}`);
        if ("fromView" in i) r = i.fromView(r, ...this.args.map((r => r.evaluate(t, e, s, null))));
        return this.expression.assign(t, e, s, r);
    }
    unbind(t, e, s) {
        const r = s.locator.get(this.converterKey);
        if (void 0 === r.signals) return;
        const i = s.locator.get(B);
        for (let t = 0; t < r.signals.length; ++t) i.removeSignalListener(r.signals[t], s);
    }
    accept(t) {
        return t.visitValueConverter(this);
    }
    toString() {
        return Unparser.unparse(this);
    }
}

class AssignExpression {
    constructor(t, e) {
        this.target = t;
        this.value = e;
    }
    get $kind() {
        return 8208;
    }
    get hasBind() {
        return false;
    }
    get hasUnbind() {
        return false;
    }
    evaluate(t, e, s, r) {
        return this.target.assign(t, e, s, this.value.evaluate(t, e, s, r));
    }
    assign(t, e, s, r) {
        this.value.assign(t, e, s, r);
        return this.target.assign(t, e, s, r);
    }
    accept(t) {
        return t.visitAssign(this);
    }
    toString() {
        return Unparser.unparse(this);
    }
}

class ConditionalExpression {
    constructor(t, e, s) {
        this.condition = t;
        this.yes = e;
        this.no = s;
    }
    get $kind() {
        return 63;
    }
    get hasBind() {
        return false;
    }
    get hasUnbind() {
        return false;
    }
    evaluate(t, e, s, r) {
        return this.condition.evaluate(t, e, s, r) ? this.yes.evaluate(t, e, s, r) : this.no.evaluate(t, e, s, r);
    }
    assign(t, e, s, r) {
        return;
    }
    accept(t) {
        return t.visitConditional(this);
    }
    toString() {
        return Unparser.unparse(this);
    }
}

class AccessThisExpression {
    constructor(t = 0) {
        this.ancestor = t;
    }
    get $kind() {
        return 1793;
    }
    get hasBind() {
        return false;
    }
    get hasUnbind() {
        return false;
    }
    evaluate(t, e, s, r) {
        var i;
        let n = e.overrideContext;
        let o = e;
        let h = this.ancestor;
        while (h-- && n) {
            o = o.parentScope;
            n = null !== (i = null === o || void 0 === o ? void 0 : o.overrideContext) && void 0 !== i ? i : null;
        }
        return h < 1 && n ? n.bindingContext : void 0;
    }
    assign(t, e, s, r) {
        return;
    }
    accept(t) {
        return t.visitAccessThis(this);
    }
    toString() {
        return Unparser.unparse(this);
    }
}

AccessThisExpression.$this = new AccessThisExpression(0);

AccessThisExpression.$parent = new AccessThisExpression(1);

class AccessScopeExpression {
    constructor(t, e = 0) {
        this.name = t;
        this.ancestor = e;
    }
    get $kind() {
        return 10082;
    }
    get hasBind() {
        return false;
    }
    get hasUnbind() {
        return false;
    }
    evaluate(t, e, s, r) {
        const i = BindingContext.get(e, this.name, this.ancestor, t);
        if (null !== r) r.observe(i, this.name);
        const n = i[this.name];
        if (null == n && "$host" === this.name) throw new Error("AUR0105");
        if (1 & t) return n;
        return null == n ? "" : n;
    }
    assign(t, e, s, r) {
        var i;
        if ("$host" === this.name) throw new Error("AUR0106");
        const n = BindingContext.get(e, this.name, this.ancestor, t);
        if (n instanceof Object) if (void 0 !== (null === (i = n.$observers) || void 0 === i ? void 0 : i[this.name])) {
            n.$observers[this.name].setValue(r, t);
            return r;
        } else return n[this.name] = r;
        return;
    }
    accept(t) {
        return t.visitAccessScope(this);
    }
    toString() {
        return Unparser.unparse(this);
    }
}

class AccessMemberExpression {
    constructor(t, e) {
        this.object = t;
        this.name = e;
    }
    get $kind() {
        return 9323;
    }
    get hasBind() {
        return false;
    }
    get hasUnbind() {
        return false;
    }
    evaluate(t, e, s, r) {
        const i = this.object.evaluate(t, e, s, (128 & t) > 0 ? null : r);
        if (1 & t) {
            if (null == i) return i;
            if (null !== r) r.observe(i, this.name);
            return i[this.name];
        }
        if (null !== r && i instanceof Object) r.observe(i, this.name);
        return i ? i[this.name] : "";
    }
    assign(t, e, s, r) {
        const i = this.object.evaluate(t, e, s, null);
        if (i instanceof Object) if (void 0 !== i.$observers && void 0 !== i.$observers[this.name]) i.$observers[this.name].setValue(r, t); else i[this.name] = r; else this.object.assign(t, e, s, {
            [this.name]: r
        });
        return r;
    }
    accept(t) {
        return t.visitAccessMember(this);
    }
    toString() {
        return Unparser.unparse(this);
    }
}

class AccessKeyedExpression {
    constructor(t, e) {
        this.object = t;
        this.key = e;
    }
    get $kind() {
        return 9324;
    }
    get hasBind() {
        return false;
    }
    get hasUnbind() {
        return false;
    }
    evaluate(t, e, s, r) {
        const i = this.object.evaluate(t, e, s, (128 & t) > 0 ? null : r);
        if (i instanceof Object) {
            const n = this.key.evaluate(t, e, s, (128 & t) > 0 ? null : r);
            if (null !== r) r.observe(i, n);
            return i[n];
        }
        return;
    }
    assign(t, e, s, r) {
        const i = this.object.evaluate(t, e, s, null);
        const n = this.key.evaluate(t, e, s, null);
        return i[n] = r;
    }
    accept(t) {
        return t.visitAccessKeyed(this);
    }
    toString() {
        return Unparser.unparse(this);
    }
}

class CallScopeExpression {
    constructor(t, e, s = 0) {
        this.name = t;
        this.args = e;
        this.ancestor = s;
    }
    get $kind() {
        return 1448;
    }
    get hasBind() {
        return false;
    }
    get hasUnbind() {
        return false;
    }
    evaluate(t, e, s, r) {
        const i = this.args.map((i => i.evaluate(t, e, s, r)));
        const n = BindingContext.get(e, this.name, this.ancestor, t);
        const o = N(t, n, this.name);
        if (o) return o.apply(n, i);
        return;
    }
    assign(t, e, s, r) {
        return;
    }
    accept(t) {
        return t.visitCallScope(this);
    }
    toString() {
        return Unparser.unparse(this);
    }
}

class CallMemberExpression {
    constructor(t, e, s) {
        this.object = t;
        this.name = e;
        this.args = s;
    }
    get $kind() {
        return 1161;
    }
    get hasBind() {
        return false;
    }
    get hasUnbind() {
        return false;
    }
    evaluate(t, e, s, r) {
        const i = this.object.evaluate(t, e, s, (128 & t) > 0 ? null : r);
        const n = this.args.map((i => i.evaluate(t, e, s, r)));
        const o = N(t, i, this.name);
        if (o) return o.apply(i, n);
        return;
    }
    assign(t, e, s, r) {
        return;
    }
    accept(t) {
        return t.visitCallMember(this);
    }
    toString() {
        return Unparser.unparse(this);
    }
}

class CallFunctionExpression {
    constructor(t, e) {
        this.func = t;
        this.args = e;
    }
    get $kind() {
        return 1162;
    }
    get hasBind() {
        return false;
    }
    get hasUnbind() {
        return false;
    }
    evaluate(t, e, s, r) {
        const i = this.func.evaluate(t, e, s, r);
        if (p(i)) return i(...this.args.map((i => i.evaluate(t, e, s, r))));
        if (!(8 & t) && null == i) return;
        throw new Error("AUR0107");
    }
    assign(t, e, s, r) {
        return;
    }
    accept(t) {
        return t.visitCallFunction(this);
    }
    toString() {
        return Unparser.unparse(this);
    }
}

class BinaryExpression {
    constructor(t, e, s) {
        this.operation = t;
        this.left = e;
        this.right = s;
    }
    get $kind() {
        return 46;
    }
    get hasBind() {
        return false;
    }
    get hasUnbind() {
        return false;
    }
    evaluate(t, e, s, r) {
        switch (this.operation) {
          case "&&":
            return this.left.evaluate(t, e, s, r) && this.right.evaluate(t, e, s, r);

          case "||":
            return this.left.evaluate(t, e, s, r) || this.right.evaluate(t, e, s, r);

          case "==":
            return this.left.evaluate(t, e, s, r) == this.right.evaluate(t, e, s, r);

          case "===":
            return this.left.evaluate(t, e, s, r) === this.right.evaluate(t, e, s, r);

          case "!=":
            return this.left.evaluate(t, e, s, r) != this.right.evaluate(t, e, s, r);

          case "!==":
            return this.left.evaluate(t, e, s, r) !== this.right.evaluate(t, e, s, r);

          case "instanceof":
            {
                const i = this.right.evaluate(t, e, s, r);
                if (p(i)) return this.left.evaluate(t, e, s, r) instanceof i;
                return false;
            }

          case "in":
            {
                const i = this.right.evaluate(t, e, s, r);
                if (i instanceof Object) return this.left.evaluate(t, e, s, r) in i;
                return false;
            }

          case "+":
            {
                const i = this.left.evaluate(t, e, s, r);
                const n = this.right.evaluate(t, e, s, r);
                if ((1 & t) > 0) return i + n;
                if (!i || !n) {
                    if ((0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_0__.isNumberOrBigInt)(i) || (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_0__.isNumberOrBigInt)(n)) return (i || 0) + (n || 0);
                    if ((0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_0__.isStringOrDate)(i) || (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_0__.isStringOrDate)(n)) return (i || "") + (n || "");
                }
                return i + n;
            }

          case "-":
            return this.left.evaluate(t, e, s, r) - this.right.evaluate(t, e, s, r);

          case "*":
            return this.left.evaluate(t, e, s, r) * this.right.evaluate(t, e, s, r);

          case "/":
            return this.left.evaluate(t, e, s, r) / this.right.evaluate(t, e, s, r);

          case "%":
            return this.left.evaluate(t, e, s, r) % this.right.evaluate(t, e, s, r);

          case "<":
            return this.left.evaluate(t, e, s, r) < this.right.evaluate(t, e, s, r);

          case ">":
            return this.left.evaluate(t, e, s, r) > this.right.evaluate(t, e, s, r);

          case "<=":
            return this.left.evaluate(t, e, s, r) <= this.right.evaluate(t, e, s, r);

          case ">=":
            return this.left.evaluate(t, e, s, r) >= this.right.evaluate(t, e, s, r);

          default:
            throw new Error(`AUR0108:${this.operation}`);
        }
    }
    assign(t, e, s, r) {
        return;
    }
    accept(t) {
        return t.visitBinary(this);
    }
    toString() {
        return Unparser.unparse(this);
    }
}

class UnaryExpression {
    constructor(t, e) {
        this.operation = t;
        this.expression = e;
    }
    get $kind() {
        return 39;
    }
    get hasBind() {
        return false;
    }
    get hasUnbind() {
        return false;
    }
    evaluate(t, e, s, r) {
        switch (this.operation) {
          case "void":
            return void this.expression.evaluate(t, e, s, r);

          case "typeof":
            return typeof this.expression.evaluate(1 | t, e, s, r);

          case "!":
            return !this.expression.evaluate(t, e, s, r);

          case "-":
            return -this.expression.evaluate(t, e, s, r);

          case "+":
            return +this.expression.evaluate(t, e, s, r);

          default:
            throw new Error(`AUR0109:${this.operation}`);
        }
    }
    assign(t, e, s, r) {
        return;
    }
    accept(t) {
        return t.visitUnary(this);
    }
    toString() {
        return Unparser.unparse(this);
    }
}

class PrimitiveLiteralExpression {
    constructor(t) {
        this.value = t;
    }
    get $kind() {
        return 17925;
    }
    get hasBind() {
        return false;
    }
    get hasUnbind() {
        return false;
    }
    evaluate(t, e, s, r) {
        return this.value;
    }
    assign(t, e, s, r) {
        return;
    }
    accept(t) {
        return t.visitPrimitiveLiteral(this);
    }
    toString() {
        return Unparser.unparse(this);
    }
}

PrimitiveLiteralExpression.$undefined = new PrimitiveLiteralExpression(void 0);

PrimitiveLiteralExpression.$null = new PrimitiveLiteralExpression(null);

PrimitiveLiteralExpression.$true = new PrimitiveLiteralExpression(true);

PrimitiveLiteralExpression.$false = new PrimitiveLiteralExpression(false);

PrimitiveLiteralExpression.$empty = new PrimitiveLiteralExpression("");

class HtmlLiteralExpression {
    constructor(t) {
        this.parts = t;
    }
    get $kind() {
        return 51;
    }
    get hasBind() {
        return false;
    }
    get hasUnbind() {
        return false;
    }
    evaluate(t, e, s, r) {
        let i = "";
        for (let n = 0; n < this.parts.length; ++n) {
            const o = this.parts[n].evaluate(t, e, s, r);
            if (null == o) continue;
            i += o;
        }
        return i;
    }
    assign(t, e, s, r, i) {
        return;
    }
    accept(t) {
        return t.visitHtmlLiteral(this);
    }
    toString() {
        return Unparser.unparse(this);
    }
}

class ArrayLiteralExpression {
    constructor(t) {
        this.elements = t;
    }
    get $kind() {
        return 17955;
    }
    get hasBind() {
        return false;
    }
    get hasUnbind() {
        return false;
    }
    evaluate(t, e, s, r) {
        return this.elements.map((i => i.evaluate(t, e, s, r)));
    }
    assign(t, e, s, r) {
        return;
    }
    accept(t) {
        return t.visitArrayLiteral(this);
    }
    toString() {
        return Unparser.unparse(this);
    }
}

ArrayLiteralExpression.$empty = new ArrayLiteralExpression(_aurelia_kernel__WEBPACK_IMPORTED_MODULE_0__.emptyArray);

class ObjectLiteralExpression {
    constructor(t, e) {
        this.keys = t;
        this.values = e;
    }
    get $kind() {
        return 17956;
    }
    get hasBind() {
        return false;
    }
    get hasUnbind() {
        return false;
    }
    evaluate(t, e, s, r) {
        const i = {};
        for (let n = 0; n < this.keys.length; ++n) i[this.keys[n]] = this.values[n].evaluate(t, e, s, r);
        return i;
    }
    assign(t, e, s, r) {
        return;
    }
    accept(t) {
        return t.visitObjectLiteral(this);
    }
    toString() {
        return Unparser.unparse(this);
    }
}

ObjectLiteralExpression.$empty = new ObjectLiteralExpression(_aurelia_kernel__WEBPACK_IMPORTED_MODULE_0__.emptyArray, _aurelia_kernel__WEBPACK_IMPORTED_MODULE_0__.emptyArray);

class TemplateExpression {
    constructor(t, e = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_0__.emptyArray) {
        this.cooked = t;
        this.expressions = e;
    }
    get $kind() {
        return 17958;
    }
    get hasBind() {
        return false;
    }
    get hasUnbind() {
        return false;
    }
    evaluate(t, e, s, r) {
        let i = this.cooked[0];
        for (let n = 0; n < this.expressions.length; ++n) {
            i += String(this.expressions[n].evaluate(t, e, s, r));
            i += this.cooked[n + 1];
        }
        return i;
    }
    assign(t, e, s, r) {
        return;
    }
    accept(t) {
        return t.visitTemplate(this);
    }
    toString() {
        return Unparser.unparse(this);
    }
}

TemplateExpression.$empty = new TemplateExpression([ "" ]);

class TaggedTemplateExpression {
    constructor(t, e, s, r = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_0__.emptyArray) {
        this.cooked = t;
        this.func = s;
        this.expressions = r;
        t.raw = e;
    }
    get $kind() {
        return 1197;
    }
    get hasBind() {
        return false;
    }
    get hasUnbind() {
        return false;
    }
    evaluate(t, e, s, r) {
        const i = this.expressions.map((i => i.evaluate(t, e, s, r)));
        const n = this.func.evaluate(t, e, s, r);
        if (!p(n)) throw new Error(`AUR0110`);
        return n(this.cooked, ...i);
    }
    assign(t, e, s, r) {
        return;
    }
    accept(t) {
        return t.visitTaggedTemplate(this);
    }
    toString() {
        return Unparser.unparse(this);
    }
}

class ArrayBindingPattern {
    constructor(t) {
        this.elements = t;
    }
    get $kind() {
        return 65556;
    }
    get hasBind() {
        return false;
    }
    get hasUnbind() {
        return false;
    }
    evaluate(t, e, s, r) {
        return;
    }
    assign(t, e, s, r) {
        return;
    }
    accept(t) {
        return t.visitArrayBindingPattern(this);
    }
    toString() {
        return Unparser.unparse(this);
    }
}

class ObjectBindingPattern {
    constructor(t, e) {
        this.keys = t;
        this.values = e;
    }
    get $kind() {
        return 65557;
    }
    get hasBind() {
        return false;
    }
    get hasUnbind() {
        return false;
    }
    evaluate(t, e, s, r) {
        return;
    }
    assign(t, e, s, r) {
        return;
    }
    accept(t) {
        return t.visitObjectBindingPattern(this);
    }
    toString() {
        return Unparser.unparse(this);
    }
}

class BindingIdentifier {
    constructor(t) {
        this.name = t;
    }
    get $kind() {
        return 65558;
    }
    get hasBind() {
        return false;
    }
    get hasUnbind() {
        return false;
    }
    evaluate(t, e, s, r) {
        return this.name;
    }
    accept(t) {
        return t.visitBindingIdentifier(this);
    }
    toString() {
        return Unparser.unparse(this);
    }
}

const V = Object.prototype.toString;

class ForOfStatement {
    constructor(t, e) {
        this.declaration = t;
        this.iterable = e;
    }
    get $kind() {
        return 6199;
    }
    get hasBind() {
        return false;
    }
    get hasUnbind() {
        return false;
    }
    evaluate(t, e, s, r) {
        return this.iterable.evaluate(t, e, s, r);
    }
    assign(t, e, s, r) {
        return;
    }
    count(t, e) {
        switch (V.call(e)) {
          case "[object Array]":
            return e.length;

          case "[object Map]":
            return e.size;

          case "[object Set]":
            return e.size;

          case "[object Number]":
            return e;

          case "[object Null]":
            return 0;

          case "[object Undefined]":
            return 0;

          default:
            throw new Error(`Cannot count ${V.call(e)}`);
        }
    }
    iterate(t, e, s) {
        switch (V.call(e)) {
          case "[object Array]":
            return K(e, s);

          case "[object Map]":
            return q(e, s);

          case "[object Set]":
            return H(e, s);

          case "[object Number]":
            return Q(e, s);

          case "[object Null]":
            return;

          case "[object Undefined]":
            return;

          default:
            throw new Error(`Cannot iterate over ${V.call(e)}`);
        }
    }
    bind(t, e, s) {
        if (this.iterable.hasBind) this.iterable.bind(t, e, s);
    }
    unbind(t, e, s) {
        if (this.iterable.hasUnbind) this.iterable.unbind(t, e, s);
    }
    accept(t) {
        return t.visitForOfStatement(this);
    }
    toString() {
        return Unparser.unparse(this);
    }
}

class Interpolation {
    constructor(t, e = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_0__.emptyArray) {
        this.parts = t;
        this.expressions = e;
        this.isMulti = e.length > 1;
        this.firstExpression = e[0];
    }
    get $kind() {
        return 24;
    }
    get hasBind() {
        return false;
    }
    get hasUnbind() {
        return false;
    }
    evaluate(t, e, s, r) {
        if (this.isMulti) {
            let i = this.parts[0];
            for (let n = 0; n < this.expressions.length; ++n) {
                i += String(this.expressions[n].evaluate(t, e, s, r));
                i += this.parts[n + 1];
            }
            return i;
        } else return `${this.parts[0]}${this.firstExpression.evaluate(t, e, s, r)}${this.parts[1]}`;
    }
    assign(t, e, s, r) {
        return;
    }
    accept(t) {
        return t.visitInterpolation(this);
    }
    toString() {
        return Unparser.unparse(this);
    }
}

class DestructuringAssignmentExpression {
    constructor(t, e, s, r) {
        this.$kind = t;
        this.list = e;
        this.source = s;
        this.initializer = r;
    }
    get hasBind() {
        return false;
    }
    get hasUnbind() {
        return false;
    }
    evaluate(t, e, s, r) {
        return;
    }
    assign(t, e, s, r) {
        var i;
        const n = this.list;
        const o = n.length;
        let h;
        let c;
        for (h = 0; h < o; h++) {
            c = n[h];
            switch (c.$kind) {
              case 139289:
                c.assign(t, e, s, r);
                break;

              case 90137:
              case 106521:
                {
                    if ("object" !== typeof r || null === r) throw new Error("AUR0112");
                    let n = c.source.evaluate(t, Scope.create(r), s, null);
                    if (void 0 === n) n = null === (i = c.initializer) || void 0 === i ? void 0 : i.evaluate(t, e, s, null);
                    c.assign(t, e, s, n);
                    break;
                }
            }
        }
    }
    accept(t) {
        return t.visitDestructuringAssignmentExpression(this);
    }
    toString() {
        return Unparser.unparse(this);
    }
}

class DestructuringAssignmentSingleExpression {
    constructor(t, e, s) {
        this.target = t;
        this.source = e;
        this.initializer = s;
    }
    get $kind() {
        return 139289;
    }
    evaluate(t, e, s, r) {
        return;
    }
    assign(t, e, s, r) {
        var i;
        if (null == r) return;
        if ("object" !== typeof r) throw new Error("AUR0112");
        let n = this.source.evaluate(t, Scope.create(r), s, null);
        if (void 0 === n) n = null === (i = this.initializer) || void 0 === i ? void 0 : i.evaluate(t, e, s, null);
        this.target.assign(t, e, s, n);
    }
    accept(t) {
        return t.visitDestructuringAssignmentSingleExpression(this);
    }
    toString() {
        return Unparser.unparse(this);
    }
}

class DestructuringAssignmentRestExpression {
    constructor(t, e) {
        this.target = t;
        this.indexOrProperties = e;
    }
    get $kind() {
        return 139289;
    }
    evaluate(t, e, s, r) {
        return;
    }
    assign(t, e, s, r) {
        if (null == r) return;
        if ("object" !== typeof r) throw new Error("AUR0112");
        const i = this.indexOrProperties;
        let n;
        if ((0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_0__.isArrayIndex)(i)) {
            if (!Array.isArray(r)) throw new Error("AUR0112");
            n = r.slice(i);
        } else n = Object.entries(r).reduce(((t, [e, s]) => {
            if (!i.includes(e)) t[e] = s;
            return t;
        }), {});
        this.target.assign(t, e, s, n);
    }
    accept(t) {
        return t.visitDestructuringAssignmentRestExpression(this);
    }
    toString() {
        return Unparser.unparse(this);
    }
}

function N(t, e, s) {
    const r = null == e ? null : e[s];
    if (p(r)) return r;
    if (!(8 & t) && null == r) return null;
    throw new Error(`AUR0111:${s}`);
}

function K(t, e) {
    for (let s = 0, r = t.length; s < r; ++s) e(t, s, t[s]);
}

function q(t, e) {
    const s = Array(t.size);
    let r = -1;
    for (const e of t.entries()) s[++r] = e;
    K(s, e);
}

function H(t, e) {
    const s = Array(t.size);
    let r = -1;
    for (const e of t.keys()) s[++r] = e;
    K(s, e);
}

function Q(t, e) {
    const s = Array(t);
    for (let e = 0; e < t; ++e) s[e] = e;
    K(s, e);
}

const _ = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_0__.DI.createInterface("ICoercionConfiguration");

var z;

(function(t) {
    t[t["oneTime"] = 1] = "oneTime";
    t[t["toView"] = 2] = "toView";
    t[t["fromView"] = 4] = "fromView";
    t[t["twoWay"] = 6] = "twoWay";
    t[t["default"] = 8] = "default";
})(z || (z = {}));

var W;

(function(t) {
    t[t["none"] = 0] = "none";
    t[t["persistentBindingFlags"] = 961] = "persistentBindingFlags";
    t[t["allowParentScopeTraversal"] = 64] = "allowParentScopeTraversal";
    t[t["observeLeafPropertiesOnly"] = 128] = "observeLeafPropertiesOnly";
    t[t["targetObserverFlags"] = 769] = "targetObserverFlags";
    t[t["noFlush"] = 256] = "noFlush";
    t[t["persistentTargetObserverQueue"] = 512] = "persistentTargetObserverQueue";
    t[t["bindingStrategy"] = 1] = "bindingStrategy";
    t[t["isStrictBindingStrategy"] = 1] = "isStrictBindingStrategy";
    t[t["fromBind"] = 2] = "fromBind";
    t[t["fromUnbind"] = 4] = "fromUnbind";
    t[t["mustEvaluate"] = 8] = "mustEvaluate";
    t[t["isTraversingParentScope"] = 16] = "isTraversingParentScope";
    t[t["dispose"] = 32] = "dispose";
})(W || (W = {}));

var G;

(function(t) {
    t[t["None"] = 0] = "None";
    t[t["Subscriber0"] = 1] = "Subscriber0";
    t[t["Subscriber1"] = 2] = "Subscriber1";
    t[t["Subscriber2"] = 4] = "Subscriber2";
    t[t["SubscribersRest"] = 8] = "SubscribersRest";
    t[t["Any"] = 15] = "Any";
})(G || (G = {}));

var Z;

(function(t) {
    t[t["none"] = 0] = "none";
    t[t["capturing"] = 1] = "capturing";
    t[t["bubbling"] = 2] = "bubbling";
})(Z || (Z = {}));

var J;

(function(t) {
    t[t["indexed"] = 8] = "indexed";
    t[t["keyed"] = 4] = "keyed";
    t[t["array"] = 9] = "array";
    t[t["map"] = 6] = "map";
    t[t["set"] = 7] = "set";
})(J || (J = {}));

var X;

(function(t) {
    t[t["None"] = 0] = "None";
    t[t["Observer"] = 1] = "Observer";
    t[t["Node"] = 2] = "Node";
    t[t["Layout"] = 4] = "Layout";
    t[t["Primtive"] = 8] = "Primtive";
    t[t["Array"] = 18] = "Array";
    t[t["Set"] = 34] = "Set";
    t[t["Map"] = 66] = "Map";
})(X || (X = {}));

function Y(t, e) {
    const {length: s} = t;
    const r = Array(s);
    let i = 0;
    while (i < s) {
        r[i] = t[i];
        ++i;
    }
    if (void 0 !== e) r.deletedItems = e.slice(0); else if (void 0 !== t.deletedItems) r.deletedItems = t.deletedItems.slice(0); else r.deletedItems = [];
    r.isIndexMap = true;
    return r;
}

function tt(t = 0) {
    const e = Array(t);
    let s = 0;
    while (s < t) e[s] = s++;
    e.deletedItems = [];
    e.isIndexMap = true;
    return e;
}

function et(t) {
    const e = t.slice();
    e.deletedItems = t.deletedItems.slice();
    e.isIndexMap = true;
    return e;
}

function st(t) {
    return t instanceof Array && true === t.isIndexMap;
}

function rt(t) {
    return null == t ? it : it(t);
}

function it(t) {
    const e = t.prototype;
    v(e, "subs", {
        get: nt
    });
    b(e, "subscribe", ot);
    b(e, "unsubscribe", ht);
}

class SubscriberRecord {
    constructor() {
        this.sf = 0;
        this.count = 0;
    }
    add(t) {
        if (this.has(t)) return false;
        const e = this.sf;
        if (0 === (1 & e)) {
            this.s0 = t;
            this.sf |= 1;
        } else if (0 === (2 & e)) {
            this.s1 = t;
            this.sf |= 2;
        } else if (0 === (4 & e)) {
            this.s2 = t;
            this.sf |= 4;
        } else if (0 === (8 & e)) {
            this.sr = [ t ];
            this.sf |= 8;
        } else this.sr.push(t);
        ++this.count;
        return true;
    }
    has(t) {
        const e = this.sf;
        if ((1 & e) > 0 && this.s0 === t) return true;
        if ((2 & e) > 0 && this.s1 === t) return true;
        if ((4 & e) > 0 && this.s2 === t) return true;
        if ((8 & e) > 0) {
            const e = this.sr;
            const s = e.length;
            let r = 0;
            for (;r < s; ++r) if (e[r] === t) return true;
        }
        return false;
    }
    any() {
        return 0 !== this.sf;
    }
    remove(t) {
        const e = this.sf;
        if ((1 & e) > 0 && this.s0 === t) {
            this.s0 = void 0;
            this.sf = 1 ^ (1 | this.sf);
            --this.count;
            return true;
        } else if ((2 & e) > 0 && this.s1 === t) {
            this.s1 = void 0;
            this.sf = 2 ^ (2 | this.sf);
            --this.count;
            return true;
        } else if ((4 & e) > 0 && this.s2 === t) {
            this.s2 = void 0;
            this.sf = 4 ^ (4 | this.sf);
            --this.count;
            return true;
        } else if ((8 & e) > 0) {
            const e = this.sr;
            const s = e.length;
            let r = 0;
            for (;r < s; ++r) if (e[r] === t) {
                e.splice(r, 1);
                if (1 === s) this.sf = 8 ^ (8 | this.sf);
                --this.count;
                return true;
            }
        }
        return false;
    }
    notify(t, e, s) {
        const r = this.s0;
        const i = this.s1;
        const n = this.s2;
        let o = this.sr;
        if (void 0 !== o) o = o.slice();
        if (void 0 !== r) r.handleChange(t, e, s);
        if (void 0 !== i) i.handleChange(t, e, s);
        if (void 0 !== n) n.handleChange(t, e, s);
        if (void 0 !== o) {
            const r = o.length;
            let i;
            let n = 0;
            for (;n < r; ++n) {
                i = o[n];
                if (void 0 !== i) i.handleChange(t, e, s);
            }
        }
    }
    notifyCollection(t, e) {
        const s = this.s0;
        const r = this.s1;
        const i = this.s2;
        let n = this.sr;
        if (void 0 !== n) n = n.slice();
        if (void 0 !== s) s.handleCollectionChange(t, e);
        if (void 0 !== r) r.handleCollectionChange(t, e);
        if (void 0 !== i) i.handleCollectionChange(t, e);
        if (void 0 !== n) {
            const s = n.length;
            let r;
            let i = 0;
            for (;i < s; ++i) {
                r = n[i];
                if (void 0 !== r) r.handleCollectionChange(t, e);
            }
        }
    }
}

function nt() {
    return w(this, "subs", new SubscriberRecord);
}

function ot(t) {
    return this.subs.add(t);
}

function ht(t) {
    return this.subs.remove(t);
}

function ct(t) {
    return null == t ? ut : ut(t);
}

function ut(t) {
    const e = t.prototype;
    v(e, "queue", {
        get: at
    });
}

class FlushQueue {
    constructor() {
        this.t = false;
        this.i = new Set;
    }
    get count() {
        return this.i.size;
    }
    add(t) {
        this.i.add(t);
        if (this.t) return;
        this.t = true;
        try {
            this.i.forEach(lt);
        } finally {
            this.t = false;
        }
    }
    clear() {
        this.i.clear();
        this.t = false;
    }
}

FlushQueue.instance = new FlushQueue;

function at() {
    return FlushQueue.instance;
}

function lt(t, e, s) {
    s.delete(t);
    t.flush();
}

class CollectionLengthObserver {
    constructor(t) {
        this.owner = t;
        this.type = 18;
        this.f = 0;
        this.v = this.h = (this.o = t.collection).length;
    }
    getValue() {
        return this.o.length;
    }
    setValue(t, e) {
        const s = this.v;
        if (t !== s && (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_0__.isArrayIndex)(t)) {
            if (0 === (256 & e)) this.o.length = t;
            this.v = t;
            this.h = s;
            this.f = e;
            this.queue.add(this);
        }
    }
    handleCollectionChange(t, e) {
        const s = this.v;
        const r = this.o.length;
        if ((this.v = r) !== s) {
            this.h = s;
            this.f = e;
            this.queue.add(this);
        }
    }
    flush() {
        pt = this.h;
        this.h = this.v;
        this.subs.notify(this.v, pt, this.f);
    }
}

class CollectionSizeObserver {
    constructor(t) {
        this.owner = t;
        this.f = 0;
        this.v = this.h = (this.o = t.collection).size;
        this.type = this.o instanceof Map ? 66 : 34;
    }
    getValue() {
        return this.o.size;
    }
    setValue() {
        throw new Error("AUR02");
    }
    handleCollectionChange(t, e) {
        const s = this.v;
        const r = this.o.size;
        if ((this.v = r) !== s) {
            this.h = s;
            this.f = e;
            this.queue.add(this);
        }
    }
    flush() {
        pt = this.h;
        this.h = this.v;
        this.subs.notify(this.v, pt, this.f);
    }
}

function ft(t) {
    const e = t.prototype;
    b(e, "subscribe", dt, true);
    b(e, "unsubscribe", vt, true);
    ct(t);
    rt(t);
}

function dt(t) {
    if (this.subs.add(t) && 1 === this.subs.count) this.owner.subscribe(this);
}

function vt(t) {
    if (this.subs.remove(t) && 0 === this.subs.count) this.owner.subscribe(this);
}

ft(CollectionLengthObserver);

ft(CollectionSizeObserver);

let pt;

const gt = new WeakMap;

function wt(t, e) {
    if (t === e) return 0;
    t = null === t ? "null" : t.toString();
    e = null === e ? "null" : e.toString();
    return t < e ? -1 : 1;
}

function bt(t, e) {
    if (void 0 === t) if (void 0 === e) return 0; else return 1;
    if (void 0 === e) return -1;
    return 0;
}

function Et(t, e, s, r, i) {
    let n, o, h, c, u;
    let a, l;
    for (a = s + 1; a < r; a++) {
        n = t[a];
        o = e[a];
        for (l = a - 1; l >= s; l--) {
            h = t[l];
            c = e[l];
            u = i(h, n);
            if (u > 0) {
                t[l + 1] = h;
                e[l + 1] = c;
            } else break;
        }
        t[l + 1] = n;
        e[l + 1] = o;
    }
}

function At(t, e, s, r, i) {
    let n = 0, o = 0;
    let h, c, u;
    let a, l, f;
    let d, v, p;
    let g, w;
    let b, E, A, y;
    let m, U, x, S;
    while (true) {
        if (r - s <= 10) {
            Et(t, e, s, r, i);
            return;
        }
        n = s + (r - s >> 1);
        h = t[s];
        a = e[s];
        c = t[r - 1];
        l = e[r - 1];
        u = t[n];
        f = e[n];
        d = i(h, c);
        if (d > 0) {
            g = h;
            w = a;
            h = c;
            a = l;
            c = g;
            l = w;
        }
        v = i(h, u);
        if (v >= 0) {
            g = h;
            w = a;
            h = u;
            a = f;
            u = c;
            f = l;
            c = g;
            l = w;
        } else {
            p = i(c, u);
            if (p > 0) {
                g = c;
                w = l;
                c = u;
                l = f;
                u = g;
                f = w;
            }
        }
        t[s] = h;
        e[s] = a;
        t[r - 1] = u;
        e[r - 1] = f;
        b = c;
        E = l;
        A = s + 1;
        y = r - 1;
        t[n] = t[A];
        e[n] = e[A];
        t[A] = b;
        e[A] = E;
        t: for (o = A + 1; o < y; o++) {
            m = t[o];
            U = e[o];
            x = i(m, b);
            if (x < 0) {
                t[o] = t[A];
                e[o] = e[A];
                t[A] = m;
                e[A] = U;
                A++;
            } else if (x > 0) {
                do {
                    y--;
                    if (y == o) break t;
                    S = t[y];
                    x = i(S, b);
                } while (x > 0);
                t[o] = t[y];
                e[o] = e[y];
                t[y] = m;
                e[y] = U;
                if (x < 0) {
                    m = t[o];
                    U = e[o];
                    t[o] = t[A];
                    e[o] = e[A];
                    t[A] = m;
                    e[A] = U;
                    A++;
                }
            }
        }
        if (r - y < A - s) {
            At(t, e, y, r, i);
            r = A;
        } else {
            At(t, e, s, A, i);
            s = y;
        }
    }
}

const yt = Array.prototype;

const mt = yt.push;

const Ut = yt.unshift;

const xt = yt.pop;

const St = yt.shift;

const Ot = yt.splice;

const Ct = yt.reverse;

const kt = yt.sort;

const Bt = {
    push: mt,
    unshift: Ut,
    pop: xt,
    shift: St,
    splice: Ot,
    reverse: Ct,
    sort: kt
};

const $t = [ "push", "unshift", "pop", "shift", "splice", "reverse", "sort" ];

const Lt = {
    push: function(...t) {
        const e = gt.get(this);
        if (void 0 === e) return mt.apply(this, t);
        const s = this.length;
        const r = t.length;
        if (0 === r) return s;
        this.length = e.indexMap.length = s + r;
        let i = s;
        while (i < this.length) {
            this[i] = t[i - s];
            e.indexMap[i] = -2;
            i++;
        }
        e.notify();
        return this.length;
    },
    unshift: function(...t) {
        const e = gt.get(this);
        if (void 0 === e) return Ut.apply(this, t);
        const s = t.length;
        const r = new Array(s);
        let i = 0;
        while (i < s) r[i++] = -2;
        Ut.apply(e.indexMap, r);
        const n = Ut.apply(this, t);
        e.notify();
        return n;
    },
    pop: function() {
        const t = gt.get(this);
        if (void 0 === t) return xt.call(this);
        const e = t.indexMap;
        const s = xt.call(this);
        const r = e.length - 1;
        if (e[r] > -1) e.deletedItems.push(e[r]);
        xt.call(e);
        t.notify();
        return s;
    },
    shift: function() {
        const t = gt.get(this);
        if (void 0 === t) return St.call(this);
        const e = t.indexMap;
        const s = St.call(this);
        if (e[0] > -1) e.deletedItems.push(e[0]);
        St.call(e);
        t.notify();
        return s;
    },
    splice: function(...t) {
        const e = t[0];
        const s = t[1];
        const r = gt.get(this);
        if (void 0 === r) return Ot.apply(this, t);
        const i = this.length;
        const n = 0 | e;
        const o = n < 0 ? Math.max(i + n, 0) : Math.min(n, i);
        const h = r.indexMap;
        const c = t.length;
        const u = 0 === c ? 0 : 1 === c ? i - o : s;
        if (u > 0) {
            let t = o;
            const e = t + u;
            while (t < e) {
                if (h[t] > -1) h.deletedItems.push(h[t]);
                t++;
            }
        }
        if (c > 2) {
            const t = c - 2;
            const r = new Array(t);
            let i = 0;
            while (i < t) r[i++] = -2;
            Ot.call(h, e, s, ...r);
        } else Ot.apply(h, t);
        const a = Ot.apply(this, t);
        r.notify();
        return a;
    },
    reverse: function() {
        const t = gt.get(this);
        if (void 0 === t) {
            Ct.call(this);
            return this;
        }
        const e = this.length;
        const s = e / 2 | 0;
        let r = 0;
        while (r !== s) {
            const s = e - r - 1;
            const i = this[r];
            const n = t.indexMap[r];
            const o = this[s];
            const h = t.indexMap[s];
            this[r] = o;
            t.indexMap[r] = h;
            this[s] = i;
            t.indexMap[s] = n;
            r++;
        }
        t.notify();
        return this;
    },
    sort: function(t) {
        const e = gt.get(this);
        if (void 0 === e) {
            kt.call(this, t);
            return this;
        }
        const s = this.length;
        if (s < 2) return this;
        At(this, e.indexMap, 0, s, bt);
        let r = 0;
        while (r < s) {
            if (void 0 === this[r]) break;
            r++;
        }
        if (void 0 === t || !p(t)) t = wt;
        At(this, e.indexMap, 0, r, t);
        e.notify();
        return this;
    }
};

for (const t of $t) v(Lt[t], "observing", {
    value: true,
    writable: false,
    configurable: false,
    enumerable: false
});

let Rt = false;

function Pt() {
    for (const t of $t) if (true !== yt[t].observing) w(yt, t, Lt[t]);
}

function Tt() {
    for (const t of $t) if (true === yt[t].observing) w(yt, t, Bt[t]);
}

class ArrayObserver {
    constructor(t) {
        this.type = 18;
        if (!Rt) {
            Rt = true;
            Pt();
        }
        this.indexObservers = {};
        this.collection = t;
        this.indexMap = tt(t.length);
        this.lenObs = void 0;
        gt.set(t, this);
    }
    notify() {
        const t = this.indexMap;
        const e = this.collection.length;
        this.indexMap = tt(e);
        this.subs.notifyCollection(t, 0);
    }
    getLengthObserver() {
        var t;
        return null !== (t = this.lenObs) && void 0 !== t ? t : this.lenObs = new CollectionLengthObserver(this);
    }
    getIndexObserver(t) {
        var e;
        var s;
        return null !== (e = (s = this.indexObservers)[t]) && void 0 !== e ? e : s[t] = new ArrayIndexObserver(this, t);
    }
}

class ArrayIndexObserver {
    constructor(t, e) {
        this.owner = t;
        this.index = e;
        this.doNotCache = true;
        this.value = this.getValue();
    }
    getValue() {
        return this.owner.collection[this.index];
    }
    setValue(t, e) {
        if (t === this.getValue()) return;
        const s = this.owner;
        const r = this.index;
        const i = s.indexMap;
        if (i[r] > -1) i.deletedItems.push(i[r]);
        i[r] = -2;
        s.collection[r] = t;
        s.notify();
    }
    handleCollectionChange(t, e) {
        const s = this.index;
        const r = t[s] === s;
        if (r) return;
        const i = this.value;
        const n = this.value = this.getValue();
        if (i !== n) this.subs.notify(n, i, e);
    }
    subscribe(t) {
        if (this.subs.add(t) && 1 === this.subs.count) this.owner.subscribe(this);
    }
    unsubscribe(t) {
        if (this.subs.remove(t) && 0 === this.subs.count) this.owner.unsubscribe(this);
    }
}

rt(ArrayObserver);

rt(ArrayIndexObserver);

function jt(t) {
    let e = gt.get(t);
    if (void 0 === e) e = new ArrayObserver(t);
    return e;
}

function It(t) {
    let e = 0;
    let s = 0;
    const r = t.length;
    for (let i = 0; i < r; ++i) {
        while (t.deletedItems[s] <= i - e) {
            ++s;
            --e;
        }
        if (-2 === t[i]) ++e; else t[i] += e;
    }
}

function Mt(t, e) {
    const s = t.slice();
    const r = e.length;
    let i = 0;
    let n = 0;
    while (i < r) {
        n = e[i];
        if (-2 !== n) t[i] = s[n];
        ++i;
    }
}

const Dt = new WeakMap;

const Ft = Set.prototype;

const Vt = Ft.add;

const Nt = Ft.clear;

const Kt = Ft.delete;

const qt = {
    add: Vt,
    clear: Nt,
    delete: Kt
};

const Ht = [ "add", "clear", "delete" ];

const Qt = {
    add: function(t) {
        const e = Dt.get(this);
        if (void 0 === e) {
            Vt.call(this, t);
            return this;
        }
        const s = this.size;
        Vt.call(this, t);
        const r = this.size;
        if (r === s) return this;
        e.indexMap[s] = -2;
        e.notify();
        return this;
    },
    clear: function() {
        const t = Dt.get(this);
        if (void 0 === t) return Nt.call(this);
        const e = this.size;
        if (e > 0) {
            const e = t.indexMap;
            let s = 0;
            for (const t of this.keys()) {
                if (e[s] > -1) e.deletedItems.push(e[s]);
                s++;
            }
            Nt.call(this);
            e.length = 0;
            t.notify();
        }
        return;
    },
    delete: function(t) {
        const e = Dt.get(this);
        if (void 0 === e) return Kt.call(this, t);
        const s = this.size;
        if (0 === s) return false;
        let r = 0;
        const i = e.indexMap;
        for (const s of this.keys()) {
            if (s === t) {
                if (i[r] > -1) i.deletedItems.push(i[r]);
                i.splice(r, 1);
                const s = Kt.call(this, t);
                if (true === s) e.notify();
                return s;
            }
            r++;
        }
        return false;
    }
};

const _t = {
    writable: true,
    enumerable: false,
    configurable: true
};

for (const t of Ht) v(Qt[t], "observing", {
    value: true,
    writable: false,
    configurable: false,
    enumerable: false
});

let zt = false;

function Wt() {
    for (const t of Ht) if (true !== Ft[t].observing) v(Ft, t, {
        ..._t,
        value: Qt[t]
    });
}

function Gt() {
    for (const t of Ht) if (true === Ft[t].observing) v(Ft, t, {
        ..._t,
        value: qt[t]
    });
}

class SetObserver {
    constructor(t) {
        this.type = 34;
        if (!zt) {
            zt = true;
            Wt();
        }
        this.collection = t;
        this.indexMap = tt(t.size);
        this.lenObs = void 0;
        Dt.set(t, this);
    }
    notify() {
        const t = this.indexMap;
        const e = this.collection.size;
        this.indexMap = tt(e);
        this.subs.notifyCollection(t, 0);
    }
    getLengthObserver() {
        var t;
        return null !== (t = this.lenObs) && void 0 !== t ? t : this.lenObs = new CollectionSizeObserver(this);
    }
}

rt(SetObserver);

function Zt(t) {
    let e = Dt.get(t);
    if (void 0 === e) e = new SetObserver(t);
    return e;
}

const Jt = new WeakMap;

const Xt = Map.prototype;

const Yt = Xt.set;

const te = Xt.clear;

const ee = Xt.delete;

const se = {
    set: Yt,
    clear: te,
    delete: ee
};

const re = [ "set", "clear", "delete" ];

const ie = {
    set: function(t, e) {
        const s = Jt.get(this);
        if (void 0 === s) {
            Yt.call(this, t, e);
            return this;
        }
        const r = this.get(t);
        const i = this.size;
        Yt.call(this, t, e);
        const n = this.size;
        if (n === i) {
            let e = 0;
            for (const i of this.entries()) {
                if (i[0] === t) {
                    if (i[1] !== r) {
                        s.indexMap.deletedItems.push(s.indexMap[e]);
                        s.indexMap[e] = -2;
                        s.notify();
                    }
                    return this;
                }
                e++;
            }
            return this;
        }
        s.indexMap[i] = -2;
        s.notify();
        return this;
    },
    clear: function() {
        const t = Jt.get(this);
        if (void 0 === t) return te.call(this);
        const e = this.size;
        if (e > 0) {
            const e = t.indexMap;
            let s = 0;
            for (const t of this.keys()) {
                if (e[s] > -1) e.deletedItems.push(e[s]);
                s++;
            }
            te.call(this);
            e.length = 0;
            t.notify();
        }
        return;
    },
    delete: function(t) {
        const e = Jt.get(this);
        if (void 0 === e) return ee.call(this, t);
        const s = this.size;
        if (0 === s) return false;
        let r = 0;
        const i = e.indexMap;
        for (const s of this.keys()) {
            if (s === t) {
                if (i[r] > -1) i.deletedItems.push(i[r]);
                i.splice(r, 1);
                const s = ee.call(this, t);
                if (true === s) e.notify();
                return s;
            }
            ++r;
        }
        return false;
    }
};

const ne = {
    writable: true,
    enumerable: false,
    configurable: true
};

for (const t of re) v(ie[t], "observing", {
    value: true,
    writable: false,
    configurable: false,
    enumerable: false
});

let oe = false;

function he() {
    for (const t of re) if (true !== Xt[t].observing) v(Xt, t, {
        ...ne,
        value: ie[t]
    });
}

function ce() {
    for (const t of re) if (true === Xt[t].observing) v(Xt, t, {
        ...ne,
        value: se[t]
    });
}

class MapObserver {
    constructor(t) {
        this.type = 66;
        if (!oe) {
            oe = true;
            he();
        }
        this.collection = t;
        this.indexMap = tt(t.size);
        this.lenObs = void 0;
        Jt.set(t, this);
    }
    notify() {
        const t = this.indexMap;
        const e = this.collection.size;
        this.indexMap = tt(e);
        this.subs.notifyCollection(t, 0);
    }
    getLengthObserver() {
        var t;
        return null !== (t = this.lenObs) && void 0 !== t ? t : this.lenObs = new CollectionSizeObserver(this);
    }
}

rt(MapObserver);

function ue(t) {
    let e = Jt.get(t);
    if (void 0 === e) e = new MapObserver(t);
    return e;
}

function ae(t, e) {
    const s = this.oL.getObserver(t, e);
    this.obs.add(s);
}

function le() {
    return w(this, "obs", new BindingObserverRecord(this));
}

function fe(t) {
    let e;
    if (t instanceof Array) e = jt(t); else if (t instanceof Set) e = Zt(t); else if (t instanceof Map) e = ue(t); else throw new Error("AUR0210");
    this.obs.add(e);
}

function de(t) {
    this.obs.add(t);
}

function ve() {
    throw new Error(`AUR2011:handleChange`);
}

function pe() {
    throw new Error("AUR2012:handleCollectionChange");
}

class BindingObserverRecord {
    constructor(t) {
        this.version = 0;
        this.count = 0;
        this.o = new Map;
        this.b = t;
    }
    handleChange(t, e, s) {
        return this.b.interceptor.handleChange(t, e, s);
    }
    handleCollectionChange(t, e) {
        this.b.interceptor.handleCollectionChange(t, e);
    }
    add(t) {
        if (!this.o.has(t)) {
            t.subscribe(this);
            ++this.count;
        }
        this.o.set(t, this.version);
    }
    clear() {
        this.o.forEach(we, this);
        this.count = this.o.size;
    }
    clearAll() {
        this.o.forEach(ge, this);
        this.o.clear();
        this.count = 0;
    }
}

function ge(t, e) {
    e.unsubscribe(this);
}

function we(t, e) {
    if (this.version !== t) {
        e.unsubscribe(this);
        this.o.delete(e);
    }
}

function be(t) {
    const e = t.prototype;
    b(e, "observe", ae, true);
    b(e, "observeCollection", fe, true);
    b(e, "subscribeTo", de, true);
    v(e, "obs", {
        get: le
    });
    b(e, "handleChange", ve);
    b(e, "handleCollectionChange", pe);
    return t;
}

function Ee(t) {
    return null == t ? be : be(t);
}

class BindingMediator {
    constructor(t, e, s, r) {
        this.key = t;
        this.binding = e;
        this.oL = s;
        this.locator = r;
        this.interceptor = this;
    }
    $bind() {
        throw new Error("AUR0213:$bind");
    }
    $unbind() {
        throw new Error("AUR0214:$unbind");
    }
    handleChange(t, e, s) {
        this.binding[this.key](t, e, s);
    }
}

be(BindingMediator);

const Ae = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_0__.DI.createInterface("IExpressionParser", (t => t.singleton(ExpressionParser)));

class ExpressionParser {
    constructor() {
        this.u = E();
        this.A = E();
        this.U = E();
    }
    parse(t, e) {
        let s;
        switch (e) {
          case 16:
            return new CustomExpression(t);

          case 1:
            s = this.U[t];
            if (void 0 === s) s = this.U[t] = this.$parse(t, e);
            return s;

          case 2:
            s = this.A[t];
            if (void 0 === s) s = this.A[t] = this.$parse(t, e);
            return s;

          default:
            if (0 === t.length) {
                if ((e & (4 | 8)) > 0) return PrimitiveLiteralExpression.$empty;
                throw new Error("AUR0169");
            }
            s = this.u[t];
            if (void 0 === s) s = this.u[t] = this.$parse(t, e);
            return s;
        }
    }
    $parse(t, e) {
        Pe.ip = t;
        Pe.length = t.length;
        Pe.index = 0;
        Pe.O = t.charCodeAt(0);
        return je(Pe, 0, 61, void 0 === e ? 8 : e);
    }
}

var ye;

(function(t) {
    t[t["Null"] = 0] = "Null";
    t[t["Backspace"] = 8] = "Backspace";
    t[t["Tab"] = 9] = "Tab";
    t[t["LineFeed"] = 10] = "LineFeed";
    t[t["VerticalTab"] = 11] = "VerticalTab";
    t[t["FormFeed"] = 12] = "FormFeed";
    t[t["CarriageReturn"] = 13] = "CarriageReturn";
    t[t["Space"] = 32] = "Space";
    t[t["Exclamation"] = 33] = "Exclamation";
    t[t["DoubleQuote"] = 34] = "DoubleQuote";
    t[t["Dollar"] = 36] = "Dollar";
    t[t["Percent"] = 37] = "Percent";
    t[t["Ampersand"] = 38] = "Ampersand";
    t[t["SingleQuote"] = 39] = "SingleQuote";
    t[t["OpenParen"] = 40] = "OpenParen";
    t[t["CloseParen"] = 41] = "CloseParen";
    t[t["Asterisk"] = 42] = "Asterisk";
    t[t["Plus"] = 43] = "Plus";
    t[t["Comma"] = 44] = "Comma";
    t[t["Minus"] = 45] = "Minus";
    t[t["Dot"] = 46] = "Dot";
    t[t["Slash"] = 47] = "Slash";
    t[t["Semicolon"] = 59] = "Semicolon";
    t[t["Backtick"] = 96] = "Backtick";
    t[t["OpenBracket"] = 91] = "OpenBracket";
    t[t["Backslash"] = 92] = "Backslash";
    t[t["CloseBracket"] = 93] = "CloseBracket";
    t[t["Caret"] = 94] = "Caret";
    t[t["Underscore"] = 95] = "Underscore";
    t[t["OpenBrace"] = 123] = "OpenBrace";
    t[t["Bar"] = 124] = "Bar";
    t[t["CloseBrace"] = 125] = "CloseBrace";
    t[t["Colon"] = 58] = "Colon";
    t[t["LessThan"] = 60] = "LessThan";
    t[t["Equals"] = 61] = "Equals";
    t[t["GreaterThan"] = 62] = "GreaterThan";
    t[t["Question"] = 63] = "Question";
    t[t["Zero"] = 48] = "Zero";
    t[t["One"] = 49] = "One";
    t[t["Two"] = 50] = "Two";
    t[t["Three"] = 51] = "Three";
    t[t["Four"] = 52] = "Four";
    t[t["Five"] = 53] = "Five";
    t[t["Six"] = 54] = "Six";
    t[t["Seven"] = 55] = "Seven";
    t[t["Eight"] = 56] = "Eight";
    t[t["Nine"] = 57] = "Nine";
    t[t["UpperA"] = 65] = "UpperA";
    t[t["UpperB"] = 66] = "UpperB";
    t[t["UpperC"] = 67] = "UpperC";
    t[t["UpperD"] = 68] = "UpperD";
    t[t["UpperE"] = 69] = "UpperE";
    t[t["UpperF"] = 70] = "UpperF";
    t[t["UpperG"] = 71] = "UpperG";
    t[t["UpperH"] = 72] = "UpperH";
    t[t["UpperI"] = 73] = "UpperI";
    t[t["UpperJ"] = 74] = "UpperJ";
    t[t["UpperK"] = 75] = "UpperK";
    t[t["UpperL"] = 76] = "UpperL";
    t[t["UpperM"] = 77] = "UpperM";
    t[t["UpperN"] = 78] = "UpperN";
    t[t["UpperO"] = 79] = "UpperO";
    t[t["UpperP"] = 80] = "UpperP";
    t[t["UpperQ"] = 81] = "UpperQ";
    t[t["UpperR"] = 82] = "UpperR";
    t[t["UpperS"] = 83] = "UpperS";
    t[t["UpperT"] = 84] = "UpperT";
    t[t["UpperU"] = 85] = "UpperU";
    t[t["UpperV"] = 86] = "UpperV";
    t[t["UpperW"] = 87] = "UpperW";
    t[t["UpperX"] = 88] = "UpperX";
    t[t["UpperY"] = 89] = "UpperY";
    t[t["UpperZ"] = 90] = "UpperZ";
    t[t["LowerA"] = 97] = "LowerA";
    t[t["LowerB"] = 98] = "LowerB";
    t[t["LowerC"] = 99] = "LowerC";
    t[t["LowerD"] = 100] = "LowerD";
    t[t["LowerE"] = 101] = "LowerE";
    t[t["LowerF"] = 102] = "LowerF";
    t[t["LowerG"] = 103] = "LowerG";
    t[t["LowerH"] = 104] = "LowerH";
    t[t["LowerI"] = 105] = "LowerI";
    t[t["LowerJ"] = 106] = "LowerJ";
    t[t["LowerK"] = 107] = "LowerK";
    t[t["LowerL"] = 108] = "LowerL";
    t[t["LowerM"] = 109] = "LowerM";
    t[t["LowerN"] = 110] = "LowerN";
    t[t["LowerO"] = 111] = "LowerO";
    t[t["LowerP"] = 112] = "LowerP";
    t[t["LowerQ"] = 113] = "LowerQ";
    t[t["LowerR"] = 114] = "LowerR";
    t[t["LowerS"] = 115] = "LowerS";
    t[t["LowerT"] = 116] = "LowerT";
    t[t["LowerU"] = 117] = "LowerU";
    t[t["LowerV"] = 118] = "LowerV";
    t[t["LowerW"] = 119] = "LowerW";
    t[t["LowerX"] = 120] = "LowerX";
    t[t["LowerY"] = 121] = "LowerY";
    t[t["LowerZ"] = 122] = "LowerZ";
})(ye || (ye = {}));

function me(t) {
    switch (t) {
      case 98:
        return 8;

      case 116:
        return 9;

      case 110:
        return 10;

      case 118:
        return 11;

      case 102:
        return 12;

      case 114:
        return 13;

      case 34:
        return 34;

      case 39:
        return 39;

      case 92:
        return 92;

      default:
        return t;
    }
}

var Ue;

(function(t) {
    t[t["Reset"] = 0] = "Reset";
    t[t["Ancestor"] = 511] = "Ancestor";
    t[t["This"] = 512] = "This";
    t[t["Scope"] = 1024] = "Scope";
    t[t["Member"] = 2048] = "Member";
    t[t["Keyed"] = 4096] = "Keyed";
})(Ue || (Ue = {}));

var xe;

(function(t) {
    t[t["Variadic"] = 61] = "Variadic";
    t[t["Assign"] = 62] = "Assign";
    t[t["Conditional"] = 63] = "Conditional";
    t[t["LogicalOR"] = 64] = "LogicalOR";
    t[t["LogicalAND"] = 128] = "LogicalAND";
    t[t["Equality"] = 192] = "Equality";
    t[t["Relational"] = 256] = "Relational";
    t[t["Additive"] = 320] = "Additive";
    t[t["Multiplicative"] = 384] = "Multiplicative";
    t[t["Binary"] = 448] = "Binary";
    t[t["LeftHandSide"] = 449] = "LeftHandSide";
    t[t["Primary"] = 450] = "Primary";
    t[t["Unary"] = 451] = "Unary";
})(xe || (xe = {}));

var Se;

(function(t) {
    t[t["EOF"] = 1572864] = "EOF";
    t[t["ExpressionTerminal"] = 1048576] = "ExpressionTerminal";
    t[t["AccessScopeTerminal"] = 524288] = "AccessScopeTerminal";
    t[t["ClosingToken"] = 262144] = "ClosingToken";
    t[t["OpeningToken"] = 131072] = "OpeningToken";
    t[t["BinaryOp"] = 65536] = "BinaryOp";
    t[t["UnaryOp"] = 32768] = "UnaryOp";
    t[t["LeftHandSide"] = 16384] = "LeftHandSide";
    t[t["StringOrNumericLiteral"] = 12288] = "StringOrNumericLiteral";
    t[t["NumericLiteral"] = 8192] = "NumericLiteral";
    t[t["StringLiteral"] = 4096] = "StringLiteral";
    t[t["IdentifierName"] = 3072] = "IdentifierName";
    t[t["Keyword"] = 2048] = "Keyword";
    t[t["Identifier"] = 1024] = "Identifier";
    t[t["Contextual"] = 512] = "Contextual";
    t[t["Precedence"] = 448] = "Precedence";
    t[t["Type"] = 63] = "Type";
    t[t["FalseKeyword"] = 2048] = "FalseKeyword";
    t[t["TrueKeyword"] = 2049] = "TrueKeyword";
    t[t["NullKeyword"] = 2050] = "NullKeyword";
    t[t["UndefinedKeyword"] = 2051] = "UndefinedKeyword";
    t[t["ThisScope"] = 3076] = "ThisScope";
    t[t["ParentScope"] = 3078] = "ParentScope";
    t[t["OpenParen"] = 671751] = "OpenParen";
    t[t["OpenBrace"] = 131080] = "OpenBrace";
    t[t["Dot"] = 16393] = "Dot";
    t[t["CloseBrace"] = 1835018] = "CloseBrace";
    t[t["CloseParen"] = 1835019] = "CloseParen";
    t[t["Comma"] = 1572876] = "Comma";
    t[t["OpenBracket"] = 671757] = "OpenBracket";
    t[t["CloseBracket"] = 1835022] = "CloseBracket";
    t[t["Colon"] = 1572879] = "Colon";
    t[t["Question"] = 1572880] = "Question";
    t[t["Ampersand"] = 1572883] = "Ampersand";
    t[t["Bar"] = 1572884] = "Bar";
    t[t["BarBar"] = 1638549] = "BarBar";
    t[t["AmpersandAmpersand"] = 1638614] = "AmpersandAmpersand";
    t[t["EqualsEquals"] = 1638679] = "EqualsEquals";
    t[t["ExclamationEquals"] = 1638680] = "ExclamationEquals";
    t[t["EqualsEqualsEquals"] = 1638681] = "EqualsEqualsEquals";
    t[t["ExclamationEqualsEquals"] = 1638682] = "ExclamationEqualsEquals";
    t[t["LessThan"] = 1638747] = "LessThan";
    t[t["GreaterThan"] = 1638748] = "GreaterThan";
    t[t["LessThanEquals"] = 1638749] = "LessThanEquals";
    t[t["GreaterThanEquals"] = 1638750] = "GreaterThanEquals";
    t[t["InKeyword"] = 1640799] = "InKeyword";
    t[t["InstanceOfKeyword"] = 1640800] = "InstanceOfKeyword";
    t[t["Plus"] = 623009] = "Plus";
    t[t["Minus"] = 623010] = "Minus";
    t[t["TypeofKeyword"] = 34851] = "TypeofKeyword";
    t[t["VoidKeyword"] = 34852] = "VoidKeyword";
    t[t["Asterisk"] = 1638885] = "Asterisk";
    t[t["Percent"] = 1638886] = "Percent";
    t[t["Slash"] = 1638887] = "Slash";
    t[t["Equals"] = 1048616] = "Equals";
    t[t["Exclamation"] = 32809] = "Exclamation";
    t[t["TemplateTail"] = 540714] = "TemplateTail";
    t[t["TemplateContinuation"] = 540715] = "TemplateContinuation";
    t[t["OfKeyword"] = 1051180] = "OfKeyword";
})(Se || (Se = {}));

const Oe = PrimitiveLiteralExpression.$false;

const Ce = PrimitiveLiteralExpression.$true;

const ke = PrimitiveLiteralExpression.$null;

const Be = PrimitiveLiteralExpression.$undefined;

const $e = AccessThisExpression.$this;

const Le = AccessThisExpression.$parent;

var Re;

(function(t) {
    t[t["None"] = 0] = "None";
    t[t["Interpolation"] = 1] = "Interpolation";
    t[t["IsIterator"] = 2] = "IsIterator";
    t[t["IsFunction"] = 4] = "IsFunction";
    t[t["IsProperty"] = 8] = "IsProperty";
    t[t["IsCustom"] = 16] = "IsCustom";
})(Re || (Re = {}));

class ParserState {
    constructor(t) {
        this.ip = t;
        this.index = 0;
        this.C = 0;
        this.B = 0;
        this.$ = 1572864;
        this.L = "";
        this.R = true;
        this.length = t.length;
        this.O = t.charCodeAt(0);
    }
    get P() {
        return this.ip.slice(this.C, this.index);
    }
}

const Pe = new ParserState("");

function Te(t, e) {
    Pe.ip = t;
    Pe.length = t.length;
    Pe.index = 0;
    Pe.O = t.charCodeAt(0);
    return je(Pe, 0, 61, void 0 === e ? 8 : e);
}

function je(t, e, s, r) {
    if (16 === r) return new CustomExpression(t.ip);
    if (0 === t.index) {
        if (1 & r) return Ve(t);
        Ke(t);
        if (1048576 & t.$) throw new Error(`AUR0151:${t.ip}`);
    }
    t.R = 448 > s;
    let i;
    if (32768 & t.$) {
        const s = Je[63 & t.$];
        Ke(t);
        i = new UnaryExpression(s, je(t, e, 449, r));
        t.R = false;
    } else {
        t: switch (t.$) {
          case 3078:
            t.R = false;
            do {
                Ke(t);
                e++;
                if (Ge(t, 16393)) {
                    if (16393 === t.$) throw new Error(`AUR0152:${t.ip}`); else if (1572864 === t.$) throw new Error(`AUR0153:${t.ip}`);
                } else if (524288 & t.$) {
                    const t = 511 & e;
                    i = 0 === t ? $e : 1 === t ? Le : new AccessThisExpression(t);
                    e = 512;
                    break t;
                } else throw new Error(`AUR0154:${t.ip}`);
            } while (3078 === t.$);

          case 1024:
            if (2 & r) i = new BindingIdentifier(t.L); else {
                i = new AccessScopeExpression(t.L, 511 & e);
                e = 1024;
            }
            t.R = true;
            Ke(t);
            break;

          case 3076:
            t.R = false;
            Ke(t);
            i = $e;
            e = 512;
            break;

          case 671751:
            Ke(t);
            i = je(t, 0, 62, r);
            Ze(t, 1835019);
            e = 0;
            break;

          case 671757:
            i = t.ip.search(/\s+of\s+/) > t.index ? Ie(t) : Me(t, e, r);
            e = 0;
            break;

          case 131080:
            i = Fe(t, r);
            e = 0;
            break;

          case 540714:
            i = new TemplateExpression([ t.L ]);
            t.R = false;
            Ke(t);
            e = 0;
            break;

          case 540715:
            i = Ne(t, e, r, i, false);
            e = 0;
            break;

          case 4096:
          case 8192:
            i = new PrimitiveLiteralExpression(t.L);
            t.R = false;
            Ke(t);
            e = 0;
            break;

          case 2050:
          case 2051:
          case 2049:
          case 2048:
            i = Je[63 & t.$];
            t.R = false;
            Ke(t);
            e = 0;
            break;

          default:
            if (t.index >= t.length) throw new Error(`AUR0155:${t.ip}`); else throw new Error(`AUR0156:${t.ip}`);
        }
        if (2 & r) return De(t, i);
        if (449 < s) return i;
        let n = t.L;
        while ((16384 & t.$) > 0) {
            const s = [];
            let o;
            switch (t.$) {
              case 16393:
                t.R = true;
                Ke(t);
                if (0 === (3072 & t.$)) throw new Error(`AUR0153:${t.ip}`);
                n = t.L;
                Ke(t);
                e = (e & (512 | 1024)) << 1 | 2048 & e | (4096 & e) >> 1;
                if (671751 === t.$) {
                    if (0 === e) e = 2048;
                    continue;
                }
                if (1024 & e) i = new AccessScopeExpression(n, i.ancestor); else i = new AccessMemberExpression(i, n);
                continue;

              case 671757:
                t.R = true;
                Ke(t);
                e = 4096;
                i = new AccessKeyedExpression(i, je(t, 0, 62, r));
                Ze(t, 1835022);
                break;

              case 671751:
                t.R = false;
                Ke(t);
                while (1835019 !== t.$) {
                    s.push(je(t, 0, 62, r));
                    if (!Ge(t, 1572876)) break;
                }
                Ze(t, 1835019);
                if (1024 & e) i = new CallScopeExpression(n, s, i.ancestor); else if (2048 & e) i = new CallMemberExpression(i, n, s); else i = new CallFunctionExpression(i, s);
                e = 0;
                break;

              case 540714:
                t.R = false;
                o = [ t.L ];
                i = new TaggedTemplateExpression(o, o, i);
                Ke(t);
                break;

              case 540715:
                i = Ne(t, e, r, i, true);
            }
        }
    }
    if (448 < s) return i;
    while ((65536 & t.$) > 0) {
        const n = t.$;
        if ((448 & n) <= s) break;
        Ke(t);
        i = new BinaryExpression(Je[63 & n], i, je(t, e, 448 & n, r));
        t.R = false;
    }
    if (63 < s) return i;
    if (Ge(t, 1572880)) {
        const s = je(t, e, 62, r);
        Ze(t, 1572879);
        i = new ConditionalExpression(i, s, je(t, e, 62, r));
        t.R = false;
    }
    if (62 < s) return i;
    if (Ge(t, 1048616)) {
        if (!t.R) throw new Error(`AUR0158:${t.ip}`);
        i = new AssignExpression(i, je(t, e, 62, r));
    }
    if (61 < s) return i;
    while (Ge(t, 1572884)) {
        if (1572864 === t.$) throw new Error(`AUR0159:${t.ip}`);
        const s = t.L;
        Ke(t);
        const n = new Array;
        while (Ge(t, 1572879)) n.push(je(t, e, 62, r));
        i = new ValueConverterExpression(i, s, n);
    }
    while (Ge(t, 1572883)) {
        if (1572864 === t.$) throw new Error(`AUR0160:${t.ip}`);
        const s = t.L;
        Ke(t);
        const n = new Array;
        while (Ge(t, 1572879)) n.push(je(t, e, 62, r));
        i = new BindingBehaviorExpression(i, s, n);
    }
    if (1572864 !== t.$) {
        if (1 & r) return i;
        if ("of" === t.P) throw new Error(`AUR0161:${t.ip}`);
        throw new Error(`AUR0162:${t.ip}`);
    }
    return i;
}

function Ie(t) {
    const e = [];
    const s = new DestructuringAssignmentExpression(90137, e, void 0, void 0);
    let r = "";
    let i = true;
    let n = 0;
    while (i) {
        Ke(t);
        switch (t.$) {
          case 1835022:
            i = false;
            o();
            break;

          case 1572876:
            o();
            break;

          case 1024:
            r = t.P;
            break;

          default:
            throw new Error(`AUR0170:${t.ip}`);
        }
    }
    Ze(t, 1835022);
    return s;
    function o() {
        if ("" !== r) {
            e.push(new DestructuringAssignmentSingleExpression(new AccessMemberExpression($e, r), new AccessKeyedExpression($e, new PrimitiveLiteralExpression(n++)), void 0));
            r = "";
        } else n++;
    }
}

function Me(t, e, s) {
    Ke(t);
    const r = new Array;
    while (1835022 !== t.$) if (Ge(t, 1572876)) {
        r.push(Be);
        if (1835022 === t.$) break;
    } else {
        r.push(je(t, e, 62, ~2 & s));
        if (Ge(t, 1572876)) {
            if (1835022 === t.$) break;
        } else break;
    }
    Ze(t, 1835022);
    if (2 & s) return new ArrayBindingPattern(r); else {
        t.R = false;
        return new ArrayLiteralExpression(r);
    }
}

function De(t, e) {
    if (0 === (65536 & e.$kind)) throw new Error(`AUR0163:${t.ip}`);
    if (1051180 !== t.$) throw new Error(`AUR0163:${t.ip}`);
    Ke(t);
    const s = e;
    const r = je(t, 0, 61, 0);
    return new ForOfStatement(s, r);
}

function Fe(t, e) {
    const s = new Array;
    const r = new Array;
    Ke(t);
    while (1835018 !== t.$) {
        s.push(t.L);
        if (12288 & t.$) {
            Ke(t);
            Ze(t, 1572879);
            r.push(je(t, 0, 62, ~2 & e));
        } else if (3072 & t.$) {
            const {O: s, $: i, index: n} = t;
            Ke(t);
            if (Ge(t, 1572879)) r.push(je(t, 0, 62, ~2 & e)); else {
                t.O = s;
                t.$ = i;
                t.index = n;
                r.push(je(t, 0, 450, ~2 & e));
            }
        } else throw new Error(`AUR0164:${t.ip}`);
        if (1835018 !== t.$) Ze(t, 1572876);
    }
    Ze(t, 1835018);
    if (2 & e) return new ObjectBindingPattern(s, r); else {
        t.R = false;
        return new ObjectLiteralExpression(s, r);
    }
}

function Ve(t) {
    const e = [];
    const s = [];
    const r = t.length;
    let i = "";
    while (t.index < r) {
        switch (t.O) {
          case 36:
            if (123 === t.ip.charCodeAt(t.index + 1)) {
                e.push(i);
                i = "";
                t.index += 2;
                t.O = t.ip.charCodeAt(t.index);
                Ke(t);
                const r = je(t, 0, 61, 1);
                s.push(r);
                continue;
            } else i += "$";
            break;

          case 92:
            i += String.fromCharCode(me(qe(t)));
            break;

          default:
            i += String.fromCharCode(t.O);
        }
        qe(t);
    }
    if (s.length) {
        e.push(i);
        return new Interpolation(e, s);
    }
    return null;
}

function Ne(t, e, s, r, i) {
    const n = [ t.L ];
    Ze(t, 540715);
    const o = [ je(t, e, 62, s) ];
    while (540714 !== (t.$ = We(t))) {
        n.push(t.L);
        Ze(t, 540715);
        o.push(je(t, e, 62, s));
    }
    n.push(t.L);
    t.R = false;
    if (i) {
        Ke(t);
        return new TaggedTemplateExpression(n, n, r, o);
    } else {
        Ke(t);
        return new TemplateExpression(n, o);
    }
}

function Ke(t) {
    while (t.index < t.length) {
        t.C = t.index;
        if (null != (t.$ = ns[t.O](t))) return;
    }
    t.$ = 1572864;
}

function qe(t) {
    return t.O = t.ip.charCodeAt(++t.index);
}

function He(t) {
    while (is[qe(t)]) ;
    const e = Xe[t.L = t.P];
    return void 0 === e ? 1024 : e;
}

function Qe(t, e) {
    let s = t.O;
    if (false === e) {
        do {
            s = qe(t);
        } while (s <= 57 && s >= 48);
        if (46 !== s) {
            t.L = parseInt(t.P, 10);
            return 8192;
        }
        s = qe(t);
        if (t.index >= t.length) {
            t.L = parseInt(t.P.slice(0, -1), 10);
            return 8192;
        }
    }
    if (s <= 57 && s >= 48) do {
        s = qe(t);
    } while (s <= 57 && s >= 48); else t.O = t.ip.charCodeAt(--t.index);
    t.L = parseFloat(t.P);
    return 8192;
}

function _e(t) {
    const e = t.O;
    qe(t);
    let s = 0;
    const r = new Array;
    let i = t.index;
    while (t.O !== e) if (92 === t.O) {
        r.push(t.ip.slice(i, t.index));
        qe(t);
        s = me(t.O);
        qe(t);
        r.push(String.fromCharCode(s));
        i = t.index;
    } else if (t.index >= t.length) throw new Error(`AUR0165:${t.ip}`); else qe(t);
    const n = t.ip.slice(i, t.index);
    qe(t);
    r.push(n);
    const o = r.join("");
    t.L = o;
    return 4096;
}

function ze(t) {
    let e = true;
    let s = "";
    while (96 !== qe(t)) if (36 === t.O) if (t.index + 1 < t.length && 123 === t.ip.charCodeAt(t.index + 1)) {
        t.index++;
        e = false;
        break;
    } else s += "$"; else if (92 === t.O) s += String.fromCharCode(me(qe(t))); else {
        if (t.index >= t.length) throw new Error(`AUR0166:${t.ip}`);
        s += String.fromCharCode(t.O);
    }
    qe(t);
    t.L = s;
    if (e) return 540714;
    return 540715;
}

function We(t) {
    if (t.index >= t.length) throw new Error(`AUR0166:${t.ip}`);
    t.index--;
    return ze(t);
}

function Ge(t, e) {
    if (t.$ === e) {
        Ke(t);
        return true;
    }
    return false;
}

function Ze(t, e) {
    if (t.$ === e) Ke(t); else throw new Error(`AUR0167:${t.ip}<${e}`);
}

const Je = [ Oe, Ce, ke, Be, "$this", null, "$parent", "(", "{", ".", "}", ")", ",", "[", "]", ":", "?", "'", '"', "&", "|", "||", "&&", "==", "!=", "===", "!==", "<", ">", "<=", ">=", "in", "instanceof", "+", "-", "typeof", "void", "*", "%", "/", "=", "!", 540714, 540715, "of" ];

const Xe = E();

Xe.true = 2049;

Xe.null = 2050;

Xe.false = 2048;

Xe.undefined = 2051;

Xe.$this = 3076;

Xe.$parent = 3078;

Xe.in = 1640799;

Xe.instanceof = 1640800;

Xe.typeof = 34851;

Xe.void = 34852;

Xe.of = 1051180;

const Ye = {
    AsciiIdPart: [ 36, 0, 48, 58, 65, 91, 95, 0, 97, 123 ],
    IdStart: [ 36, 0, 65, 91, 95, 0, 97, 123, 170, 0, 186, 0, 192, 215, 216, 247, 248, 697, 736, 741, 7424, 7462, 7468, 7517, 7522, 7526, 7531, 7544, 7545, 7615, 7680, 7936, 8305, 0, 8319, 0, 8336, 8349, 8490, 8492, 8498, 0, 8526, 0, 8544, 8585, 11360, 11392, 42786, 42888, 42891, 42927, 42928, 42936, 42999, 43008, 43824, 43867, 43868, 43877, 64256, 64263, 65313, 65339, 65345, 65371 ],
    Digit: [ 48, 58 ],
    Skip: [ 0, 33, 127, 161 ]
};

function ts(t, e, s, r) {
    const i = s.length;
    for (let n = 0; n < i; n += 2) {
        const i = s[n];
        let o = s[n + 1];
        o = o > 0 ? o : i + 1;
        if (t) t.fill(r, i, o);
        if (e) for (let t = i; t < o; t++) e.add(t);
    }
}

function es(t) {
    return e => {
        qe(e);
        return t;
    };
}

const ss = t => {
    throw new Error(`AUR0168:${t.ip}`);
};

ss.notMapped = true;

const rs = new Set;

ts(null, rs, Ye.AsciiIdPart, true);

const is = new Uint8Array(65535);

ts(is, null, Ye.IdStart, 1);

ts(is, null, Ye.Digit, 1);

const ns = new Array(65535);

ns.fill(ss, 0, 65535);

ts(ns, null, Ye.Skip, (t => {
    qe(t);
    return null;
}));

ts(ns, null, Ye.IdStart, He);

ts(ns, null, Ye.Digit, (t => Qe(t, false)));

ns[34] = ns[39] = t => _e(t);

ns[96] = t => ze(t);

ns[33] = t => {
    if (61 !== qe(t)) return 32809;
    if (61 !== qe(t)) return 1638680;
    qe(t);
    return 1638682;
};

ns[61] = t => {
    if (61 !== qe(t)) return 1048616;
    if (61 !== qe(t)) return 1638679;
    qe(t);
    return 1638681;
};

ns[38] = t => {
    if (38 !== qe(t)) return 1572883;
    qe(t);
    return 1638614;
};

ns[124] = t => {
    if (124 !== qe(t)) return 1572884;
    qe(t);
    return 1638549;
};

ns[46] = t => {
    if (qe(t) <= 57 && t.O >= 48) return Qe(t, true);
    return 16393;
};

ns[60] = t => {
    if (61 !== qe(t)) return 1638747;
    qe(t);
    return 1638749;
};

ns[62] = t => {
    if (61 !== qe(t)) return 1638748;
    qe(t);
    return 1638750;
};

ns[37] = es(1638886);

ns[40] = es(671751);

ns[41] = es(1835019);

ns[42] = es(1638885);

ns[43] = es(623009);

ns[44] = es(1572876);

ns[45] = es(623010);

ns[47] = es(1638887);

ns[58] = es(1572879);

ns[63] = es(1572880);

ns[91] = es(671757);

ns[93] = es(1835022);

ns[123] = es(131080);

ns[125] = es(1835018);

let os = null;

const hs = [];

let cs = false;

function us() {
    cs = false;
}

function as() {
    cs = true;
}

function ls() {
    return os;
}

function fs(t) {
    if (null == t) throw new Error("AUR0206");
    if (null == os) {
        os = t;
        hs[0] = os;
        cs = true;
        return;
    }
    if (os === t) throw new Error("AUR0207");
    hs.push(os);
    os = t;
    cs = true;
}

function ds(t) {
    if (null == t) throw new Error("AUR0208");
    if (os !== t) throw new Error("AUR0209");
    hs.pop();
    os = hs.length > 0 ? hs[hs.length - 1] : null;
    cs = null != os;
}

const vs = Object.freeze({
    get current() {
        return os;
    },
    get connecting() {
        return cs;
    },
    enter: fs,
    exit: ds,
    pause: us,
    resume: as
});

const ps = Reflect.get;

const gs = Object.prototype.toString;

const ws = new WeakMap;

function bs(t) {
    switch (gs.call(t)) {
      case "[object Object]":
      case "[object Array]":
      case "[object Map]":
      case "[object Set]":
        return true;

      default:
        return false;
    }
}

const Es = "__raw__";

function As(t) {
    return bs(t) ? ys(t) : t;
}

function ys(t) {
    var e;
    return null !== (e = ws.get(t)) && void 0 !== e ? e : Ss(t);
}

function ms(t) {
    var e;
    return null !== (e = t[Es]) && void 0 !== e ? e : t;
}

function Us(t) {
    return bs(t) && t[Es] || t;
}

function xs(t) {
    return "constructor" === t || "__proto__" === t || "$observers" === t || t === Symbol.toPrimitive || t === Symbol.toStringTag;
}

function Ss(t) {
    const e = t instanceof Array ? Cs : t instanceof Map || t instanceof Set ? Zs : Os;
    const s = new Proxy(t, e);
    ws.set(t, s);
    return s;
}

const Os = {
    get(t, e, s) {
        if (e === Es) return t;
        const r = ls();
        if (!cs || xs(e) || null == r) return ps(t, e, s);
        r.observe(t, e);
        return As(ps(t, e, s));
    }
};

const Cs = {
    get(t, e, s) {
        if (e === Es) return t;
        const r = ls();
        if (!cs || xs(e) || null == r) return ps(t, e, s);
        switch (e) {
          case "length":
            r.observe(t, "length");
            return t.length;

          case "map":
            return ks;

          case "includes":
            return Ls;

          case "indexOf":
            return Rs;

          case "lastIndexOf":
            return Ps;

          case "every":
            return Bs;

          case "filter":
            return $s;

          case "find":
            return js;

          case "findIndex":
            return Ts;

          case "flat":
            return Is;

          case "flatMap":
            return Ms;

          case "join":
            return Ds;

          case "push":
            return Vs;

          case "pop":
            return Fs;

          case "reduce":
            return Ws;

          case "reduceRight":
            return Gs;

          case "reverse":
            return Hs;

          case "shift":
            return Ns;

          case "unshift":
            return Ks;

          case "slice":
            return zs;

          case "splice":
            return qs;

          case "some":
            return Qs;

          case "sort":
            return _s;

          case "keys":
            return ir;

          case "values":
          case Symbol.iterator:
            return nr;

          case "entries":
            return or;
        }
        r.observe(t, e);
        return As(ps(t, e, s));
    },
    ownKeys(t) {
        var e;
        null === (e = ls()) || void 0 === e ? void 0 : e.observe(t, "length");
        return Reflect.ownKeys(t);
    }
};

function ks(t, e) {
    var s;
    const r = ms(this);
    const i = r.map(((s, r) => Us(t.call(e, As(s), r, this))));
    null === (s = ls()) || void 0 === s ? void 0 : s.observeCollection(r);
    return As(i);
}

function Bs(t, e) {
    var s;
    const r = ms(this);
    const i = r.every(((s, r) => t.call(e, As(s), r, this)));
    null === (s = ls()) || void 0 === s ? void 0 : s.observeCollection(r);
    return i;
}

function $s(t, e) {
    var s;
    const r = ms(this);
    const i = r.filter(((s, r) => Us(t.call(e, As(s), r, this))));
    null === (s = ls()) || void 0 === s ? void 0 : s.observeCollection(r);
    return As(i);
}

function Ls(t) {
    var e;
    const s = ms(this);
    const r = s.includes(Us(t));
    null === (e = ls()) || void 0 === e ? void 0 : e.observeCollection(s);
    return r;
}

function Rs(t) {
    var e;
    const s = ms(this);
    const r = s.indexOf(Us(t));
    null === (e = ls()) || void 0 === e ? void 0 : e.observeCollection(s);
    return r;
}

function Ps(t) {
    var e;
    const s = ms(this);
    const r = s.lastIndexOf(Us(t));
    null === (e = ls()) || void 0 === e ? void 0 : e.observeCollection(s);
    return r;
}

function Ts(t, e) {
    var s;
    const r = ms(this);
    const i = r.findIndex(((s, r) => Us(t.call(e, As(s), r, this))));
    null === (s = ls()) || void 0 === s ? void 0 : s.observeCollection(r);
    return i;
}

function js(t, e) {
    var s;
    const r = ms(this);
    const i = r.find(((e, s) => t(As(e), s, this)), e);
    null === (s = ls()) || void 0 === s ? void 0 : s.observeCollection(r);
    return As(i);
}

function Is() {
    var t;
    const e = ms(this);
    null === (t = ls()) || void 0 === t ? void 0 : t.observeCollection(e);
    return As(e.flat());
}

function Ms(t, e) {
    var s;
    const r = ms(this);
    null === (s = ls()) || void 0 === s ? void 0 : s.observeCollection(r);
    return ys(r.flatMap(((s, r) => As(t.call(e, As(s), r, this)))));
}

function Ds(t) {
    var e;
    const s = ms(this);
    null === (e = ls()) || void 0 === e ? void 0 : e.observeCollection(s);
    return s.join(t);
}

function Fs() {
    return As(ms(this).pop());
}

function Vs(...t) {
    return ms(this).push(...t);
}

function Ns() {
    return As(ms(this).shift());
}

function Ks(...t) {
    return ms(this).unshift(...t);
}

function qs(...t) {
    return As(ms(this).splice(...t));
}

function Hs(...t) {
    var e;
    const s = ms(this);
    const r = s.reverse();
    null === (e = ls()) || void 0 === e ? void 0 : e.observeCollection(s);
    return As(r);
}

function Qs(t, e) {
    var s;
    const r = ms(this);
    const i = r.some(((s, r) => Us(t.call(e, As(s), r, this))));
    null === (s = ls()) || void 0 === s ? void 0 : s.observeCollection(r);
    return i;
}

function _s(t) {
    var e;
    const s = ms(this);
    const r = s.sort(t);
    null === (e = ls()) || void 0 === e ? void 0 : e.observeCollection(s);
    return As(r);
}

function zs(t, e) {
    var s;
    const r = ms(this);
    null === (s = ls()) || void 0 === s ? void 0 : s.observeCollection(r);
    return ys(r.slice(t, e));
}

function Ws(t, e) {
    var s;
    const r = ms(this);
    const i = r.reduce(((e, s, r) => t(e, As(s), r, this)), e);
    null === (s = ls()) || void 0 === s ? void 0 : s.observeCollection(r);
    return As(i);
}

function Gs(t, e) {
    var s;
    const r = ms(this);
    const i = r.reduceRight(((e, s, r) => t(e, As(s), r, this)), e);
    null === (s = ls()) || void 0 === s ? void 0 : s.observeCollection(r);
    return As(i);
}

const Zs = {
    get(t, e, s) {
        if (e === Es) return t;
        const r = ls();
        if (!cs || xs(e) || null == r) return ps(t, e, s);
        switch (e) {
          case "size":
            r.observe(t, "size");
            return t.size;

          case "clear":
            return sr;

          case "delete":
            return rr;

          case "forEach":
            return Js;

          case "add":
            if (t instanceof Set) return er;
            break;

          case "get":
            if (t instanceof Map) return Ys;
            break;

          case "set":
            if (t instanceof Map) return tr;
            break;

          case "has":
            return Xs;

          case "keys":
            return ir;

          case "values":
            return nr;

          case "entries":
            return or;

          case Symbol.iterator:
            return t instanceof Map ? or : nr;
        }
        return As(ps(t, e, s));
    }
};

function Js(t, e) {
    var s;
    const r = ms(this);
    null === (s = ls()) || void 0 === s ? void 0 : s.observeCollection(r);
    return r.forEach(((s, r) => {
        t.call(e, As(s), As(r), this);
    }));
}

function Xs(t) {
    var e;
    const s = ms(this);
    null === (e = ls()) || void 0 === e ? void 0 : e.observeCollection(s);
    return s.has(Us(t));
}

function Ys(t) {
    var e;
    const s = ms(this);
    null === (e = ls()) || void 0 === e ? void 0 : e.observeCollection(s);
    return As(s.get(Us(t)));
}

function tr(t, e) {
    return As(ms(this).set(Us(t), Us(e)));
}

function er(t) {
    return As(ms(this).add(Us(t)));
}

function sr() {
    return As(ms(this).clear());
}

function rr(t) {
    return As(ms(this).delete(Us(t)));
}

function ir() {
    var t;
    const e = ms(this);
    null === (t = ls()) || void 0 === t ? void 0 : t.observeCollection(e);
    const s = e.keys();
    return {
        next() {
            const t = s.next();
            const e = t.value;
            const r = t.done;
            return r ? {
                value: void 0,
                done: r
            } : {
                value: As(e),
                done: r
            };
        },
        [Symbol.iterator]() {
            return this;
        }
    };
}

function nr() {
    var t;
    const e = ms(this);
    null === (t = ls()) || void 0 === t ? void 0 : t.observeCollection(e);
    const s = e.values();
    return {
        next() {
            const t = s.next();
            const e = t.value;
            const r = t.done;
            return r ? {
                value: void 0,
                done: r
            } : {
                value: As(e),
                done: r
            };
        },
        [Symbol.iterator]() {
            return this;
        }
    };
}

function or() {
    var t;
    const e = ms(this);
    null === (t = ls()) || void 0 === t ? void 0 : t.observeCollection(e);
    const s = e.entries();
    return {
        next() {
            const t = s.next();
            const e = t.value;
            const r = t.done;
            return r ? {
                value: void 0,
                done: r
            } : {
                value: [ As(e[0]), As(e[1]) ],
                done: r
            };
        },
        [Symbol.iterator]() {
            return this;
        }
    };
}

const hr = Object.freeze({
    getProxy: ys,
    getRaw: ms,
    wrap: As,
    unwrap: Us,
    rawKey: Es
});

class ComputedObserver {
    constructor(t, e, s, r, i) {
        this.interceptor = this;
        this.type = 1;
        this.v = void 0;
        this.ov = void 0;
        this.ir = false;
        this.D = false;
        this.o = t;
        this.get = e;
        this.set = s;
        this.up = r;
        this.oL = i;
    }
    static create(t, e, s, r, i) {
        const n = s.get;
        const o = s.set;
        const h = new ComputedObserver(t, n, o, i, r);
        const c = () => h.getValue();
        c.getObserver = () => h;
        v(t, e, {
            enumerable: s.enumerable,
            configurable: true,
            get: c,
            set: t => {
                h.setValue(t, 0);
            }
        });
        return h;
    }
    getValue() {
        if (0 === this.subs.count) return this.get.call(this.o, this);
        if (this.D) {
            this.compute();
            this.D = false;
        }
        return this.v;
    }
    setValue(t, e) {
        if (p(this.set)) {
            if (t !== this.v) {
                this.ir = true;
                this.set.call(this.o, t);
                this.ir = false;
                this.run();
            }
        } else throw new Error("AUR0221");
    }
    handleChange() {
        this.D = true;
        if (this.subs.count > 0) this.run();
    }
    handleCollectionChange() {
        this.D = true;
        if (this.subs.count > 0) this.run();
    }
    subscribe(t) {
        if (this.subs.add(t) && 1 === this.subs.count) {
            this.compute();
            this.D = false;
        }
    }
    unsubscribe(t) {
        if (this.subs.remove(t) && 0 === this.subs.count) {
            this.D = true;
            this.obs.clearAll();
        }
    }
    flush() {
        cr = this.ov;
        this.ov = this.v;
        this.subs.notify(this.v, cr, 0);
    }
    run() {
        if (this.ir) return;
        const t = this.v;
        const e = this.compute();
        this.D = false;
        if (!Object.is(e, t)) {
            this.ov = t;
            this.queue.add(this);
        }
    }
    compute() {
        this.ir = true;
        this.obs.version++;
        try {
            fs(this);
            return this.v = Us(this.get.call(this.up ? As(this.o) : this.o, this));
        } finally {
            this.obs.clear();
            this.ir = false;
            ds(this);
        }
    }
}

Ee(ComputedObserver);

rt(ComputedObserver);

ct(ComputedObserver);

let cr;

const ur = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_0__.DI.createInterface("IDirtyChecker", (t => t.singleton(DirtyChecker)));

const ar = {
    timeoutsPerCheck: 25,
    disabled: false,
    throw: false,
    resetToDefault() {
        this.timeoutsPerCheck = 6;
        this.disabled = false;
        this.throw = false;
    }
};

const lr = {
    persistent: true
};

class DirtyChecker {
    constructor(t) {
        this.p = t;
        this.tracked = [];
        this.T = null;
        this.j = 0;
        this.check = () => {
            if (ar.disabled) return;
            if (++this.j < ar.timeoutsPerCheck) return;
            this.j = 0;
            const t = this.tracked;
            const e = t.length;
            let s;
            let r = 0;
            for (;r < e; ++r) {
                s = t[r];
                if (s.isDirty()) this.queue.add(s);
            }
        };
    }
    createProperty(t, e) {
        if (ar.throw) throw new Error(`AUR0222:${e}`);
        return new DirtyCheckProperty(this, t, e);
    }
    addProperty(t) {
        this.tracked.push(t);
        if (1 === this.tracked.length) this.T = this.p.taskQueue.queueTask(this.check, lr);
    }
    removeProperty(t) {
        this.tracked.splice(this.tracked.indexOf(t), 1);
        if (0 === this.tracked.length) {
            this.T.cancel();
            this.T = null;
        }
    }
}

DirtyChecker.inject = [ _aurelia_kernel__WEBPACK_IMPORTED_MODULE_0__.IPlatform ];

ct(DirtyChecker);

class DirtyCheckProperty {
    constructor(t, e, s) {
        this.obj = e;
        this.key = s;
        this.type = 0;
        this.ov = void 0;
        this.I = t;
    }
    getValue() {
        return this.obj[this.key];
    }
    setValue(t, e) {
        throw new Error(`Trying to set value for property ${this.key} in dirty checker`);
    }
    isDirty() {
        return this.ov !== this.obj[this.key];
    }
    flush() {
        const t = this.ov;
        const e = this.getValue();
        this.ov = e;
        this.subs.notify(e, t, 0);
    }
    subscribe(t) {
        if (this.subs.add(t) && 1 === this.subs.count) {
            this.ov = this.obj[this.key];
            this.I.addProperty(this);
        }
    }
    unsubscribe(t) {
        if (this.subs.remove(t) && 0 === this.subs.count) this.I.removeProperty(this);
    }
}

rt(DirtyCheckProperty);

class PrimitiveObserver {
    constructor(t, e) {
        this.type = 0;
        this.o = t;
        this.k = e;
    }
    get doNotCache() {
        return true;
    }
    getValue() {
        return this.o[this.k];
    }
    setValue() {}
    subscribe() {}
    unsubscribe() {}
}

class PropertyAccessor {
    constructor() {
        this.type = 0;
    }
    getValue(t, e) {
        return t[e];
    }
    setValue(t, e, s, r) {
        s[r] = t;
    }
}

let fr;

class SetterObserver {
    constructor(t, e) {
        this.type = 1;
        this.v = void 0;
        this.ov = void 0;
        this.iO = false;
        this.f = 0;
        this.o = t;
        this.k = e;
    }
    getValue() {
        return this.v;
    }
    setValue(t, e) {
        if (this.iO) {
            if (Object.is(t, this.v)) return;
            this.ov = this.v;
            this.v = t;
            this.f = e;
            this.queue.add(this);
        } else this.o[this.k] = t;
    }
    subscribe(t) {
        if (false === this.iO) this.start();
        this.subs.add(t);
    }
    flush() {
        fr = this.ov;
        this.ov = this.v;
        this.subs.notify(this.v, fr, this.f);
    }
    start() {
        if (false === this.iO) {
            this.iO = true;
            this.v = this.o[this.k];
            v(this.o, this.k, {
                enumerable: true,
                configurable: true,
                get: () => this.getValue(),
                set: t => {
                    this.setValue(t, 0);
                }
            });
        }
        return this;
    }
    stop() {
        if (this.iO) {
            v(this.o, this.k, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: this.v
            });
            this.iO = false;
        }
        return this;
    }
}

class SetterNotifier {
    constructor(t, e, s, r) {
        this.type = 1;
        this.v = void 0;
        this.ov = void 0;
        this.f = 0;
        this.o = t;
        this.S = s;
        this.hs = p(s);
        const i = t[e];
        this.cb = p(i) ? i : void 0;
        this.v = r;
    }
    getValue() {
        return this.v;
    }
    setValue(t, e) {
        var s;
        if (this.hs) t = this.S(t, null);
        if (!Object.is(t, this.v)) {
            this.ov = this.v;
            this.v = t;
            this.f = e;
            null === (s = this.cb) || void 0 === s ? void 0 : s.call(this.o, this.v, this.ov, e);
            this.queue.add(this);
        }
    }
    flush() {
        fr = this.ov;
        this.ov = this.v;
        this.subs.notify(this.v, fr, this.f);
    }
}

rt(SetterObserver);

rt(SetterNotifier);

ct(SetterObserver);

ct(SetterNotifier);

const dr = new PropertyAccessor;

const vr = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_0__.DI.createInterface("IObserverLocator", (t => t.singleton(ObserverLocator)));

const pr = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_0__.DI.createInterface("INodeObserverLocator", (t => t.cachedCallback((t => {
    t.getAll(_aurelia_kernel__WEBPACK_IMPORTED_MODULE_0__.ILogger).forEach((t => {
        t.error("Using default INodeObserverLocator implementation. Will not be able to observe nodes (HTML etc...).");
    }));
    return new DefaultNodeObserverLocator;
}))));

class DefaultNodeObserverLocator {
    handles() {
        return false;
    }
    getObserver() {
        return dr;
    }
    getAccessor() {
        return dr;
    }
}

class ObserverLocator {
    constructor(t, e) {
        this.I = t;
        this.M = e;
        this.F = [];
    }
    addAdapter(t) {
        this.F.push(t);
    }
    getObserver(t, e) {
        var s, r;
        return null !== (r = null === (s = t.$observers) || void 0 === s ? void 0 : s[e]) && void 0 !== r ? r : this.V(t, e, this.createObserver(t, e));
    }
    getAccessor(t, e) {
        var s;
        const r = null === (s = t.$observers) || void 0 === s ? void 0 : s[e];
        if (void 0 !== r) return r;
        if (this.M.handles(t, e, this)) return this.M.getAccessor(t, e, this);
        return dr;
    }
    getArrayObserver(t) {
        return jt(t);
    }
    getMapObserver(t) {
        return ue(t);
    }
    getSetObserver(t) {
        return Zt(t);
    }
    createObserver(t, e) {
        var s, r, i, n;
        if (!(t instanceof Object)) return new PrimitiveObserver(t, e);
        if (this.M.handles(t, e, this)) return this.M.getObserver(t, e, this);
        switch (e) {
          case "length":
            if (t instanceof Array) return jt(t).getLengthObserver();
            break;

          case "size":
            if (t instanceof Map) return ue(t).getLengthObserver(); else if (t instanceof Set) return Zt(t).getLengthObserver();
            break;

          default:
            if (t instanceof Array && (0,_aurelia_kernel__WEBPACK_IMPORTED_MODULE_0__.isArrayIndex)(e)) return jt(t).getIndexObserver(Number(e));
            break;
        }
        let o = br(t, e);
        if (void 0 === o) {
            let s = wr(t);
            while (null !== s) {
                o = br(s, e);
                if (void 0 === o) s = wr(s); else break;
            }
        }
        if (void 0 !== o && !d.call(o, "value")) {
            let h = this.N(t, e, o);
            if (null == h) h = null === (n = null !== (r = null === (s = o.get) || void 0 === s ? void 0 : s.getObserver) && void 0 !== r ? r : null === (i = o.set) || void 0 === i ? void 0 : i.getObserver) || void 0 === n ? void 0 : n(t, this);
            return null == h ? o.configurable ? ComputedObserver.create(t, e, o, this, true) : this.I.createProperty(t, e) : h;
        }
        return new SetterObserver(t, e);
    }
    N(t, e, s) {
        if (this.F.length > 0) for (const r of this.F) {
            const i = r.getObserver(t, e, s, this);
            if (null != i) return i;
        }
        return null;
    }
    V(t, e, s) {
        if (true === s.doNotCache) return s;
        if (void 0 === t.$observers) {
            v(t, "$observers", {
                value: {
                    [e]: s
                }
            });
            return s;
        }
        return t.$observers[e] = s;
    }
}

ObserverLocator.inject = [ ur, pr ];

function gr(t) {
    let e;
    if (t instanceof Array) e = jt(t); else if (t instanceof Map) e = ue(t); else if (t instanceof Set) e = Zt(t);
    return e;
}

const wr = Object.getPrototypeOf;

const br = Object.getOwnPropertyDescriptor;

const Er = _aurelia_kernel__WEBPACK_IMPORTED_MODULE_0__.DI.createInterface("IObservation", (t => t.singleton(Observation)));

class Observation {
    constructor(t) {
        this.oL = t;
    }
    static get inject() {
        return [ vr ];
    }
    run(t) {
        const e = new Effect(this.oL, t);
        e.run();
        return e;
    }
}

class Effect {
    constructor(t, e) {
        this.oL = t;
        this.fn = e;
        this.interceptor = this;
        this.maxRunCount = 10;
        this.queued = false;
        this.running = false;
        this.runCount = 0;
        this.stopped = false;
    }
    handleChange() {
        this.queued = true;
        this.run();
    }
    handleCollectionChange() {
        this.queued = true;
        this.run();
    }
    run() {
        if (this.stopped) throw new Error("AUR0225");
        if (this.running) return;
        ++this.runCount;
        this.running = true;
        this.queued = false;
        ++this.obs.version;
        try {
            fs(this);
            this.fn(this);
        } finally {
            this.obs.clear();
            this.running = false;
            ds(this);
        }
        if (this.queued) {
            if (this.runCount > this.maxRunCount) {
                this.runCount = 0;
                throw new Error(`AUR0226`);
            }
            this.run();
        } else this.runCount = 0;
    }
    stop() {
        this.stopped = true;
        this.obs.clearAll();
    }
}

Ee(Effect);

function Ar(t) {
    if (void 0 === t.$observers) v(t, "$observers", {
        value: {}
    });
    return t.$observers;
}

const yr = {};

function mr(t, e, s) {
    if (null == e) return (e, s, i) => r(e, s, i, t);
    return r(t, e, s);
    function r(t, e, s, r) {
        var i;
        const n = void 0 === e;
        r = "object" !== typeof r ? {
            name: r
        } : r || {};
        if (n) e = r.name;
        if (null == e || "" === e) throw new Error("AUR0224");
        const o = r.callback || `${String(e)}Changed`;
        let h = yr;
        if (s) {
            delete s.value;
            delete s.writable;
            h = null === (i = s.initializer) || void 0 === i ? void 0 : i.call(s);
            delete s.initializer;
        } else s = {
            configurable: true
        };
        if (!("enumerable" in s)) s.enumerable = true;
        const c = r.set;
        s.get = function t() {
            var s;
            const r = Ur(this, e, o, h, c);
            null === (s = ls()) || void 0 === s ? void 0 : s.subscribeTo(r);
            return r.getValue();
        };
        s.set = function t(s) {
            Ur(this, e, o, h, c).setValue(s, 0);
        };
        s.get.getObserver = function t(s) {
            return Ur(s, e, o, h, c);
        };
        if (n) v(t.prototype, e, s); else return s;
    }
}

function Ur(t, e, s, r, i) {
    const n = Ar(t);
    let o = n[e];
    if (null == o) {
        o = new SetterNotifier(t, s, i, r === yr ? void 0 : r);
        n[e] = o;
    }
    return o;
}


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./src/contentscript/contentscript.ts":
/*!********************************************!*\
  !*** ./src/contentscript/contentscript.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "installScript": () => /* binding */ installScript,
/* harmony export */   "getAureliaInstance": () => /* binding */ getAureliaInstance,
/* harmony export */   "getCustomElementInfo": () => /* binding */ getCustomElementInfo,
/* harmony export */   "install": () => /* binding */ install
/* harmony export */ });
/* harmony import */ var aurelia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia */ "./node_modules/@aurelia/runtime-html/dist/esm/index.js");
/* harmony import */ var _shared_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/env */ "./src/shared/env.ts");


function installScript(fn) {
    const source = ';(' + fn.toString() + ')(window, )';
    if (_shared_env__WEBPACK_IMPORTED_MODULE_0__.isFirefox) {
        // eslint-disable-next-line no-eval
        window.eval(source); // in Firefox, this evaluates on the content window
    }
    else {
        const script = document.createElement('script');
        script.textContent = source;
        document.documentElement.appendChild(script);
        script.parentNode.removeChild(script);
    }
}
function getAureliaInstance(win) {
    const all = document.querySelectorAll('*');
    for (let i = 0; i < all.length; i++) {
        const aurelia = all[i].$aurelia;
        if (aurelia) {
            return aurelia;
        }
    }
}
function getCustomElementInfo(element) {
    return aurelia__WEBPACK_IMPORTED_MODULE_1__.CustomElement.for(element);
}
function install(win) {
    let nextDebugId = 0;
    let debugValueLookup = {};
    const hooks = {
        Aurelia: undefined,
        currentElement: undefined,
        currentAttributes: [],
        getAllInfo: (root) => {
            root = root ?? document.body;
            return [hooks.getCustomElementInfo(root, false), ...Array.from(root.children).flatMap(y => hooks.getAllInfo(y))].filter(x => x);
        },
        updateValues: (info, property) => {
            if (!hooks.currentElement && !hooks.currentAttributes.length)
                return;
            const currentInfo = hooks.currentElement?.definition.key === info.key ? hooks.currentElement : hooks.currentAttributes.find(y => y.definition.key === info.key);
            info.bindables.forEach(x => currentInfo.viewModel[x.name] = x.value);
            info.properties.forEach(x => {
                // HMM: Not sure if we need the .value check
                const isObject = x.value === 'Object' && x.type === 'object';
                if (isObject) {
                    let targetProp = currentInfo.viewModel[x.name][property.name];
                    if (!targetProp)
                        return;
                    currentInfo.viewModel[x.name][property.name] = property.value;
                    return;
                }
                ;
                currentInfo.viewModel[x.name] = x.value;
            });
            return undefined;
        },
        getCustomElementInfo: (element, traverse = true) => {
            let customElement;
            let customAttributes;
            try {
                while (!customElement && element !== document.body) {
                    const au = element['$au'];
                    if (au) {
                        customElement = element['$au']['au:resource:custom-element'];
                        const customAttributeKeys = Object.getOwnPropertyNames(au).filter(y => y.includes('custom-attribute'));
                        customAttributes = customAttributeKeys.map(x => au[x]);
                    }
                    element = element.parentElement;
                    if (!traverse)
                        break;
                }
            }
            catch (e) {
                console.log(e);
            }
            if (!customElement && !customAttributes)
                return;
            hooks.currentElement = customElement;
            hooks.currentAttributes = customAttributes;
            const customElementInfo = extractControllerInfo(customElement);
            const customAttributesInfo = customAttributes && customAttributes.map(extractControllerInfo).filter(x => x);
            return {
                customElementInfo,
                customAttributesInfo
            };
        },
        getExpandedDebugValueForId(id) {
            let value = debugValueLookup[id].expandableValue;
            if (Array.isArray(value)) {
                let newValue = {};
                value.forEach((value, index) => {
                    newValue[index] = value;
                });
                value = newValue;
            }
            else if (isMap(value)) {
                let mapToArr = [];
                value = value.forEach((value, key) => {
                    mapToArr.push([value, key]);
                });
                value = mapToArr;
            }
            else if (isSet(value)) {
                value = Array.from(value);
            }
            return convertObjectToDebugInfo(value);
            // https://stackoverflow.com/questions/29924932/how-to-reliably-check-an-object-is-an-ecmascript-6-map-set
            function isMap(o) {
                try {
                    Map.prototype.has.call(o); // throws if o is not an object or has no [[MapData]]
                    return true;
                }
                catch (e) {
                    return false;
                }
            }
            function isSet(o) {
                try {
                    Set.prototype.has.call(o); // throws if o is not an object or has no [[SetData]]
                    return true;
                }
                catch (e) {
                    return false;
                }
            }
        }
    };
    window.addEventListener('au-started', (customEvent) => {
        hooks.Aurelia = customEvent.detail;
    }, { once: true });
    Object.defineProperty(win, '__AURELIA_DEVTOOLS_GLOBAL_HOOK__', {
        get() {
            return hooks;
        }
    });
    function extractControllerInfo(customElement) {
        if (!customElement)
            return;
        const bindableKeys = Object.keys(customElement.definition.bindables);
        const returnVal = {
            bindables: bindableKeys.map(y => {
                return setValueOnDebugInfo({
                    name: y
                }, customElement.viewModel[y], customElement.viewModel);
                // return {
                //   bindable: customElement.definition.bindables[y],
                //   type: typeof (customElement.viewModel[y]),
                //   name: y, value: customElement.viewModel[y]
                // }
            }),
            properties: Object.keys(customElement.viewModel).filter(x => !bindableKeys.some(y => y === x)).
                filter(x => !x.startsWith('$')).map(y => {
                return setValueOnDebugInfo({
                    name: y
                }, customElement.viewModel[y], customElement.viewModel);
                // return {
                //   type: typeof (customElement.viewModel[y]),
                //   name: y,
                //   value: getValueFor(customElement.viewModel[y])
                // }
            }),
            name: customElement.definition.name,
            aliases: customElement.definition.aliases,
            key: customElement.definition.key
        };
        return returnVal;
    }
    function getValueFor(value) {
        if (value instanceof Node) {
            return value.constructor.name;
        }
        else if (Array.isArray(value)) {
            return `Array[${value.length}]`;
        }
        else if (typeof (value) === 'object') {
            if (value.constructor) {
                return value.constructor.name;
            }
            else {
                return 'Object';
            }
        }
        else {
            return value;
        }
    }
    function setValueOnDebugInfo(debugInfo, value, instance) {
        try {
            let expandableValue;
            if (value instanceof Node) {
                debugInfo.canExpand = true;
                debugInfo.type = 'node';
                debugInfo.value = value.constructor.name;
                expandableValue = value;
            }
            else if (Array.isArray(value)) {
                debugInfo.canExpand = true;
                debugInfo.type = 'array';
                debugInfo.value = `Array[${value.length}]`;
                expandableValue = value;
            }
            else {
                debugInfo.type = typeof value;
                debugInfo.value = value;
            }
            if (value === null) {
                debugInfo.type = 'null';
                debugInfo.value = 'null';
            }
            else if (value === undefined) {
                debugInfo.type = 'undefined';
                debugInfo.value = 'undefined';
            }
            else if (debugInfo.type === 'object') {
                debugInfo.canExpand = true;
                expandableValue = value;
                if (value.constructor) {
                    debugInfo.value = value.constructor.name;
                }
                else {
                    debugInfo.value = 'Object';
                }
            }
            if (debugInfo.type === 'string' || debugInfo.type === 'number' || debugInfo.type === 'boolean') {
                debugInfo.canEdit = true;
            }
            debugInfo.debugId = debugInfo.debugId || getNextDebugId();
            debugValueLookup[debugInfo.debugId] = Object.assign({
                instance: instance,
                expandableValue: expandableValue
            }, debugInfo);
            return debugInfo;
        }
        catch (e) {
            return createErrorObject(e);
        }
    }
    function createControllerDebugInfo(controller) {
        try {
            let controllerDebugInfo = {
                name: controller.behavior.elementName || controller.behavior.attributeName
            };
            let viewModel = controller.viewModel;
            let bindableKeys = {};
            controllerDebugInfo.bindables = controller.behavior.properties.map(x => {
                bindableKeys[x.name] = true;
                return setValueOnDebugInfo({
                    name: x.name,
                    attribute: x.attribute,
                }, viewModel[x.name], viewModel);
            });
            controllerDebugInfo.properties = getDebugPropertyKeys(viewModel)
                .filter(x => !(x in bindableKeys))
                .map(x => {
                return setValueOnDebugInfo({
                    name: x
                }, viewModel[x], viewModel);
            });
            return controllerDebugInfo;
        }
        catch (e) {
            return createErrorObject(e);
        }
    }
    function convertObjectToDebugInfo(obj, blackList) {
        blackList = blackList || {};
        return {
            properties: getDebugPropertyKeys(obj)
                .filter(x => !(x in blackList))
                .map(x => {
                return setValueOnDebugInfo({
                    name: x
                }, obj[x], obj);
            })
        };
    }
    function getDebugInfoForNode(selectedNode) {
        try {
            var debugInfo = {};
            nextDebugId = 0;
            if (selectedNode.au) {
                var au = selectedNode.au;
                if (au.controller) {
                    debugInfo.customElement = createControllerDebugInfo(au.controller);
                }
                var tagName = selectedNode.tagName ? selectedNode.tagName.toLowerCase() : null;
                var customAttributeNames = getDebugPropertyKeys(au)
                    .filter(function (key) {
                    return key !== 'controller' && key !== tagName;
                });
                if (customAttributeNames.length) {
                    debugInfo.customAttributes = customAttributeNames.map(x => createControllerDebugInfo(au[x]));
                }
            }
            let owningView = findOwningViewOfNode(selectedNode);
            if (owningView) {
                if (owningView.bindingContext) {
                    debugInfo.bindingContext = convertObjectToDebugInfo(owningView.bindingContext);
                }
                if (owningView.overrideContext) {
                    debugInfo.overrideContext = convertObjectToDebugInfo(owningView.overrideContext, { bindingContext: true, parentOverrideContext: true });
                }
            }
            return debugInfo;
        }
        catch (e) {
            return createErrorObject(e);
        }
    }
    function findOwningViewOfNode(node) {
        function moveUp(n) {
            let current = n.parentNode;
            if (current) {
                return findComposingView(current) || findSiblingRepeaterView(current) || findImmediateControllerOwningView(current) || moveUp(current);
            }
            return null;
        }
        return attachedOwner(node) || findSiblingRepeaterView(node) || findImmediateControllerOwningView(node) || moveUp(node);
    }
    function updateValueForId(id, value) {
        let debugInfo = debugValueLookup[id];
        debugInfo.instance[debugInfo.name] = value;
        setValueOnDebugInfo(debugInfo, value, debugInfo.instance);
    }
    function getNextDebugId() {
        return ++nextDebugId;
    }
    function createErrorObject(e) {
        return [{
                // bindingContext: {
                // properties: [
                // {
                name: 'Debugger Error',
                value: e.message,
                type: 'string',
                canEdit: false
                // }
                // ]
                // }
            }];
    }
    function attachedOwner(node) {
        let ownerView = node.auOwnerView;
        if (ownerView && ownerView.viewFactory) {
            return ownerView;
        }
        return null;
    }
    function nodeIsImmediateChildOfView(view, node) {
        let currentChild = view.firstChild;
        let lastChild = view.lastChild;
        let nextChild;
        while (currentChild) {
            nextChild = currentChild.nextSibling;
            if (currentChild === node) {
                return true;
            }
            if (currentChild === lastChild) {
                break;
            }
            currentChild = nextChild;
        }
        return false;
    }
    function findSiblingRepeaterView(node) {
        if (!node) {
            return null;
        }
        let current = node.nextSibling;
        while (current) {
            if (current.nodeType === 8 && current.viewSlot && current.data === 'anchor') {
                let children = current.viewSlot.children;
                for (let i = 0, ii = children.length; i < ii; ++i) {
                    let view = children[i];
                    if (nodeIsImmediateChildOfView(view, node)) {
                        return view;
                    }
                }
            }
            current = current.nextSibling;
        }
        return null;
    }
    function findImmediateControllerOwningView(node) {
        let parent = node.parentNode;
        if (parent && parent.au && parent.au.controller
            && parent.au.controller.view && nodeIsImmediateChildOfView(parent.au.controller.view, node)) {
            return parent.au.controller.view;
        }
        return null;
    }
    function findComposingView(node) {
        if (!node) {
            return null;
        }
        if (node.aurelia) {
            return node.aurelia.root.view;
        }
        else if (attachedOwner(node)) {
            return attachedOwner(node);
        }
        else if (node.au) {
            var au = node.au;
            if (au.controller) { //custom element
                var controller = au.controller;
                var tagName = node.tagName ? node.tagName.toLowerCase() : null;
                if (tagName === 'router-view') {
                    return controller.viewModel.view;
                }
                else if (tagName === 'compose') {
                    return controller.viewModel.currentController.view;
                }
                else if (controller['with']) {
                    return controller['with'].viewModel.view;
                }
            }
        }
        return null;
    }
    function getDebugPropertyKeys(obj) {
        let props = [];
        const keys = [...Object.keys(obj), ...Object.getOwnPropertyNames(obj)];
        const uniqueKeys = keys.filter((value, i, arr) => arr.indexOf(value) === i);
        for (const key of uniqueKeys) {
            if (key && !key.startsWith('_') && typeof obj[key] !== 'function') {
                props.push(key);
            }
        }
        return props;
    }
}
Object.defineProperty(window, '__AURELIA_DEVTOOLS_HOOK__', {
    get() {
        return {
            getCustomElementInfo: (element) => {
            }
        };
    }
});
// inject the hook
if (document instanceof HTMLDocument) {
    installScript(install);
}


/***/ }),

/***/ "./src/shared/env.ts":
/*!***************************!*\
  !*** ./src/shared/env.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isBrowser": () => /* binding */ isBrowser,
/* harmony export */   "target": () => /* binding */ target,
/* harmony export */   "isChrome": () => /* binding */ isChrome,
/* harmony export */   "isFirefox": () => /* binding */ isFirefox,
/* harmony export */   "isWindows": () => /* binding */ isWindows,
/* harmony export */   "isMac": () => /* binding */ isMac,
/* harmony export */   "isLinux": () => /* binding */ isLinux
/* harmony export */ });
const isBrowser = typeof navigator !== 'undefined';
const target = isBrowser ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : {};
const isChrome = typeof chrome !== 'undefined' && !!chrome.devtools;
const isFirefox = isBrowser && navigator.userAgent.includes('Firefox');
const isWindows = isBrowser && navigator.platform.startsWith('Win');
const isMac = isBrowser && navigator.platform === 'MacIntel';
const isLinux = isBrowser && navigator.platform.startsWith('Linux');


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/contentscript/contentscript.ts");
/******/ })()
;