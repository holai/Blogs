/**
 * Minified by jsDelivr using Terser v3.14.1.
 * Original file: /npm/live2d-vue@0.2.5/dist/live2d-vue.common.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
export  var live2dVue =  function (t) {
	var e = {};
	function r(i) {
		if (e[i]) return e[i].exports;
		var s = e[i] = {
			i: i,
			l: !1,
			exports: {}
		};
		return t[i].call(s.exports, s, s.exports, r),
		s.l = !0,
		s.exports
	}
	return r.m = t,
	r.c = e,
	r.d = function(t, e, i) {
		r.o(t, e) || Object.defineProperty(t, e, {
			enumerable: !0,
			get: i
		})
	},
	r.r = function(t) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
			value: "Module"
		}),
		Object.defineProperty(t, "__esModule", {
			value: !0
		})
	},
	r.t = function(t, e) {
		if (1 & e && (t = r(t)), 8 & e) return t;
		if (4 & e && "object" == typeof t && t && t.__esModule) return t;
		var i = Object.create(null);
		if (r.r(i), Object.defineProperty(i, "default", {
			enumerable: !0,
			value: t
		}), 2 & e && "string" != typeof t) for (var s in t) r.d(i, s,
		function(e) {
			return t[e]
		}.bind(null, s));
		return i
	},
	r.n = function(t) {
		var e = t && t.__esModule ?
		function() {
			return t.
		default
		}:
		function() {
			return t
		};
		return r.d(e, "a", e),
		e
	},
	r.o = function(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	},
	r.p = "",
	r(r.s = "fb15")
} ({
	"018f": function(t, e, r) { (t.exports = r("2350")(!1)).push([t.i, ".live2d-tools[data-v-591ddaa6]{margin:2px 0;-webkit-writing-mode:vertical-lr;-ms-writing-mode:tb-lr;writing-mode:vertical-lr;cursor:pointer;text-align:center;min-height:50px;line-height:35px;padding:3px 2px;height:auto;-webkit-box-shadow:1px 2px 5px rgba(0,0,0,.3);box-shadow:1px 2px 5px rgba(0,0,0,.3);background-color:#fff;-webkit-transition:all .2s;transition:all .2s;border-top-right-radius:8px;border-bottom-right-radius:8px}.right-msg[data-v-591ddaa6]{display:inline-block;-webkit-transform:rotate(180deg);transform:rotate(180deg)}", ""])
	},
	"20b4": function(t, e, r) {
		var i = r("018f");
		"string" == typeof i && (i = [[t.i, i, ""]]),
		i.locals && (t.exports = i.locals); (0, r("499e").
	default)("fad3a6f8", i, !0, {
			sourceMap: !1,
			shadowMode: !1
		})
	},
	2350 : function(t, e) {
		t.exports = function(t) {
			var e = [];
			return e.toString = function() {
				return this.map(function(e) {
					var r = function(t, e) {
						var r = t[1] || "",
						i = t[3];
						if (!i) return r;
						if (e && "function" == typeof btoa) {
							var s = (n = i, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */"),
							o = i.sources.map(function(t) {
								return "/*# sourceURL=" + i.sourceRoot + t + " */"
							});
							return [r].concat(o).concat([s]).join("\n")
						}
						var n;
						return [r].join("\n")
					} (e, t);
					return e[2] ? "@media " + e[2] + "{" + r + "}": r
				}).join("")
			},
			e.i = function(t, r) {
				"string" == typeof t && (t = [[null, t, ""]]);
				for (var i = {},
				s = 0; s < this.length; s++) {
					var o = this[s][0];
					"number" == typeof o && (i[o] = !0)
				}
				for (s = 0; s < t.length; s++) {
					var n = t[s];
					"number" == typeof n[0] && i[n[0]] || (r && !n[2] ? n[2] = r: r && (n[2] = "(" + n[2] + ") and (" + r + ")"), e.push(n))
				}
			},
			e
		}
	},
	"499e": function(t, e, r) {
		"use strict";
		function i(t, e) {
			for (var r = [], i = {},
			s = 0; s < e.length; s++) {
				var o = e[s],
				n = o[0],
				a = {
					id: t + ":" + s,
					css: o[1],
					media: o[2],
					sourceMap: o[3]
				};
				i[n] ? i[n].parts.push(a) : r.push(i[n] = {
					id: n,
					parts: [a]
				})
			}
			return r
		}
		r.r(e),
		r.d(e, "default",
		function() {
			return f
		});
		var s = "undefined" != typeof document;
		if ("undefined" != typeof DEBUG && DEBUG && !s) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
		var o = {},
		n = s && (document.head || document.getElementsByTagName("head")[0]),
		a = null,
		_ = 0,
		h = !1,
		l = function() {},
		$ = null,
		u = "data-vue-ssr-id",
		p = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
		function f(t, e, r, s) {
			h = r,
			$ = s || {};
			var n = i(t, e);
			return c(n),
			function(e) {
				for (var r = [], s = 0; s < n.length; s++) {
					var a = n[s]; (_ = o[a.id]).refs--,
					r.push(_)
				}
				e ? c(n = i(t, e)) : n = [];
				for (s = 0; s < r.length; s++) {
					var _;
					if (0 === (_ = r[s]).refs) {
						for (var h = 0; h < _.parts.length; h++) _.parts[h]();
						delete o[_.id]
					}
				}
			}
		}
		function c(t) {
			for (var e = 0; e < t.length; e++) {
				var r = t[e],
				i = o[r.id];
				if (i) {
					i.refs++;
					for (var s = 0; s < i.parts.length; s++) i.parts[s](r.parts[s]);
					for (; s < r.parts.length; s++) i.parts.push(g(r.parts[s]));
					i.parts.length > r.parts.length && (i.parts.length = r.parts.length)
				} else {
					var n = [];
					for (s = 0; s < r.parts.length; s++) n.push(g(r.parts[s]));
					o[r.id] = {
						id: r.id,
						refs: 1,
						parts: n
					}
				}
			}
		}
		function d() {
			var t = document.createElement("style");
			return t.type = "text/css",
			n.appendChild(t),
			t
		}
		function g(t) {
			var e, r, i = document.querySelector("style[" + u + '~="' + t.id + '"]');
			if (i) {
				if (h) return l;
				i.parentNode.removeChild(i)
			}
			if (p) {
				var s = _++;
				i = a || (a = d()),
				e = x.bind(null, i, s, !1),
				r = x.bind(null, i, s, !0)
			} else i = d(),
			e = function(t, e) {
				var r = e.css,
				i = e.media,
				s = e.sourceMap;
				i && t.setAttribute("media", i);
				$.ssrId && t.setAttribute(u, e.id);
				s && (r += "\n/*# sourceURL=" + s.sources[0] + " */", r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(s)))) + " */");
				if (t.styleSheet) t.styleSheet.cssText = r;
				else {
					for (; t.firstChild;) t.removeChild(t.firstChild);
					t.appendChild(document.createTextNode(r))
				}
			}.bind(null, i),
			r = function() {
				i.parentNode.removeChild(i)
			};
			return e(t),
			function(i) {
				if (i) {
					if (i.css === t.css && i.media === t.media && i.sourceMap === t.sourceMap) return;
					e(t = i)
				} else r()
			}
		}
		var m, y = (m = [],
		function(t, e) {
			return m[t] = e,
			m.filter(Boolean).join("\n")
		});
		function x(t, e, r, i) {
			var s = r ? "": i.css;
			if (t.styleSheet) t.styleSheet.cssText = y(e, s);
			else {
				var o = document.createTextNode(s),
				n = t.childNodes;
				n[e] && t.removeChild(n[e]),
				n.length ? t.insertBefore(o, n[e]) : t.appendChild(o)
			}
		}
	},
	5521 : function(t, e, r) {
		"use strict";
		var i = r("20b4");
		r.n(i).a
	},
	"6cdd": function(t, e, r) { (t.exports = r("2350")(!1)).push([t.i, ".dialogue-live2d[data-v-5fcdaf8c]{opacity:0;width:250px;height:auto;min-height:60px;margin:0 0 -25px 20px;padding:5px 10px;border-radius:12px;-webkit-box-shadow:0 0 2px 0 rgba(0,0,0,.12),0 2px 2px 0 rgba(0,0,0,.24);box-shadow:0 0 2px 0 rgba(0,0,0,.12),0 2px 2px 0 rgba(0,0,0,.24);font-size:13px;color:#212121;text-overflow:ellipsis;background-color:#fff;overflow:hidden;-webkit-animation:common-animation-data-v-5fcdaf8c 50s ease-in-out 5s infinite;animation:common-animation-data-v-5fcdaf8c 50s ease-in-out 5s infinite}@-webkit-keyframes common-animation-data-v-5fcdaf8c{2%{-webkit-transform:translate(.5px,-1.5px) rotate(-.5deg);transform:translate(.5px,-1.5px) rotate(-.5deg)}4%{-webkit-transform:translate(.5px,1.5px) rotate(1.5deg);transform:translate(.5px,1.5px) rotate(1.5deg)}6%{-webkit-transform:translate(1.5px,1.5px) rotate(1.5deg);transform:translate(1.5px,1.5px) rotate(1.5deg)}8%{-webkit-transform:translate(2.5px,1.5px) rotate(.5deg);transform:translate(2.5px,1.5px) rotate(.5deg)}10%{-webkit-transform:translate(.5px,2.5px) rotate(.5deg);transform:translate(.5px,2.5px) rotate(.5deg)}12%{-webkit-transform:translate(1.5px,1.5px) rotate(.5deg);transform:translate(1.5px,1.5px) rotate(.5deg)}14%{-webkit-transform:translate(.5px,.5px) rotate(.5deg);transform:translate(.5px,.5px) rotate(.5deg)}16%{-webkit-transform:translate(-1.5px,-.5px) rotate(1.5deg);transform:translate(-1.5px,-.5px) rotate(1.5deg)}18%{-webkit-transform:translate(.5px,.5px) rotate(1.5deg);transform:translate(.5px,.5px) rotate(1.5deg)}20%{-webkit-transform:translate(2.5px,2.5px) rotate(1.5deg);transform:translate(2.5px,2.5px) rotate(1.5deg)}22%{-webkit-transform:translate(.5px,-1.5px) rotate(1.5deg);transform:translate(.5px,-1.5px) rotate(1.5deg)}24%{-webkit-transform:translate(-1.5px,1.5px) rotate(-.5deg);transform:translate(-1.5px,1.5px) rotate(-.5deg)}26%{-webkit-transform:translate(1.5px,.5px) rotate(1.5deg);transform:translate(1.5px,.5px) rotate(1.5deg)}28%{-webkit-transform:translate(-.5px,-.5px) rotate(-.5deg);transform:translate(-.5px,-.5px) rotate(-.5deg)}30%{-webkit-transform:translate(1.5px,-.5px) rotate(-.5deg);transform:translate(1.5px,-.5px) rotate(-.5deg)}32%{-webkit-transform:translate(2.5px,-1.5px) rotate(1.5deg);transform:translate(2.5px,-1.5px) rotate(1.5deg)}34%{-webkit-transform:translate(2.5px,2.5px) rotate(-.5deg);transform:translate(2.5px,2.5px) rotate(-.5deg)}36%{-webkit-transform:translate(.5px,-1.5px) rotate(.5deg);transform:translate(.5px,-1.5px) rotate(.5deg)}38%{-webkit-transform:translate(2.5px,-.5px) rotate(-.5deg);transform:translate(2.5px,-.5px) rotate(-.5deg)}40%{-webkit-transform:translate(-.5px,2.5px) rotate(.5deg);transform:translate(-.5px,2.5px) rotate(.5deg)}42%{-webkit-transform:translate(-1.5px,2.5px) rotate(.5deg);transform:translate(-1.5px,2.5px) rotate(.5deg)}44%{-webkit-transform:translate(-1.5px,1.5px) rotate(.5deg);transform:translate(-1.5px,1.5px) rotate(.5deg)}46%{-webkit-transform:translate(1.5px,-.5px) rotate(-.5deg);transform:translate(1.5px,-.5px) rotate(-.5deg)}48%{-webkit-transform:translate(2.5px,-.5px) rotate(.5deg);transform:translate(2.5px,-.5px) rotate(.5deg)}50%{-webkit-transform:translate(-1.5px,1.5px) rotate(.5deg);transform:translate(-1.5px,1.5px) rotate(.5deg)}52%{-webkit-transform:translate(-.5px,1.5px) rotate(.5deg);transform:translate(-.5px,1.5px) rotate(.5deg)}54%{-webkit-transform:translate(-1.5px,1.5px) rotate(.5deg);transform:translate(-1.5px,1.5px) rotate(.5deg)}56%{-webkit-transform:translate(.5px,2.5px) rotate(1.5deg);transform:translate(.5px,2.5px) rotate(1.5deg)}58%{-webkit-transform:translate(2.5px,2.5px) rotate(.5deg);transform:translate(2.5px,2.5px) rotate(.5deg)}60%{-webkit-transform:translate(2.5px,-1.5px) rotate(1.5deg);transform:translate(2.5px,-1.5px) rotate(1.5deg)}62%{-webkit-transform:translate(-1.5px,.5px) rotate(1.5deg);transform:translate(-1.5px,.5px) rotate(1.5deg)}64%{-webkit-transform:translate(-1.5px,1.5px) rotate(1.5deg);transform:translate(-1.5px,1.5px) rotate(1.5deg)}66%{-webkit-transform:translate(.5px,2.5px) rotate(1.5deg);transform:translate(.5px,2.5px) rotate(1.5deg)}68%{-webkit-transform:translate(2.5px,-1.5px) rotate(1.5deg);transform:translate(2.5px,-1.5px) rotate(1.5deg)}70%{-webkit-transform:translate(2.5px,2.5px) rotate(.5deg);transform:translate(2.5px,2.5px) rotate(.5deg)}72%{-webkit-transform:translate(-.5px,-1.5px) rotate(1.5deg);transform:translate(-.5px,-1.5px) rotate(1.5deg)}74%{-webkit-transform:translate(-1.5px,2.5px) rotate(1.5deg);transform:translate(-1.5px,2.5px) rotate(1.5deg)}76%{-webkit-transform:translate(-1.5px,2.5px) rotate(1.5deg);transform:translate(-1.5px,2.5px) rotate(1.5deg)}78%{-webkit-transform:translate(-1.5px,2.5px) rotate(.5deg);transform:translate(-1.5px,2.5px) rotate(.5deg)}80%{-webkit-transform:translate(-1.5px,.5px) rotate(-.5deg);transform:translate(-1.5px,.5px) rotate(-.5deg)}82%{-webkit-transform:translate(-1.5px,.5px) rotate(-.5deg);transform:translate(-1.5px,.5px) rotate(-.5deg)}84%{-webkit-transform:translate(-.5px,.5px) rotate(1.5deg);transform:translate(-.5px,.5px) rotate(1.5deg)}86%{-webkit-transform:translate(2.5px,1.5px) rotate(.5deg);transform:translate(2.5px,1.5px) rotate(.5deg)}88%{-webkit-transform:translate(-1.5px,.5px) rotate(1.5deg);transform:translate(-1.5px,.5px) rotate(1.5deg)}90%{-webkit-transform:translate(-1.5px,-.5px) rotate(-.5deg);transform:translate(-1.5px,-.5px) rotate(-.5deg)}92%{-webkit-transform:translate(-1.5px,-1.5px) rotate(1.5deg);transform:translate(-1.5px,-1.5px) rotate(1.5deg)}94%{-webkit-transform:translate(.5px,.5px) rotate(-.5deg);transform:translate(.5px,.5px) rotate(-.5deg)}96%{-webkit-transform:translate(2.5px,-.5px) rotate(-.5deg);transform:translate(2.5px,-.5px) rotate(-.5deg)}98%{-webkit-transform:translate(-1.5px,-1.5px) rotate(-.5deg);transform:translate(-1.5px,-1.5px) rotate(-.5deg)}0%,to{-webkit-transform:translate(0) rotate(0);transform:translate(0) rotate(0)}}@keyframes common-animation-data-v-5fcdaf8c{2%{-webkit-transform:translate(.5px,-1.5px) rotate(-.5deg);transform:translate(.5px,-1.5px) rotate(-.5deg)}4%{-webkit-transform:translate(.5px,1.5px) rotate(1.5deg);transform:translate(.5px,1.5px) rotate(1.5deg)}6%{-webkit-transform:translate(1.5px,1.5px) rotate(1.5deg);transform:translate(1.5px,1.5px) rotate(1.5deg)}8%{-webkit-transform:translate(2.5px,1.5px) rotate(.5deg);transform:translate(2.5px,1.5px) rotate(.5deg)}10%{-webkit-transform:translate(.5px,2.5px) rotate(.5deg);transform:translate(.5px,2.5px) rotate(.5deg)}12%{-webkit-transform:translate(1.5px,1.5px) rotate(.5deg);transform:translate(1.5px,1.5px) rotate(.5deg)}14%{-webkit-transform:translate(.5px,.5px) rotate(.5deg);transform:translate(.5px,.5px) rotate(.5deg)}16%{-webkit-transform:translate(-1.5px,-.5px) rotate(1.5deg);transform:translate(-1.5px,-.5px) rotate(1.5deg)}18%{-webkit-transform:translate(.5px,.5px) rotate(1.5deg);transform:translate(.5px,.5px) rotate(1.5deg)}20%{-webkit-transform:translate(2.5px,2.5px) rotate(1.5deg);transform:translate(2.5px,2.5px) rotate(1.5deg)}22%{-webkit-transform:translate(.5px,-1.5px) rotate(1.5deg);transform:translate(.5px,-1.5px) rotate(1.5deg)}24%{-webkit-transform:translate(-1.5px,1.5px) rotate(-.5deg);transform:translate(-1.5px,1.5px) rotate(-.5deg)}26%{-webkit-transform:translate(1.5px,.5px) rotate(1.5deg);transform:translate(1.5px,.5px) rotate(1.5deg)}28%{-webkit-transform:translate(-.5px,-.5px) rotate(-.5deg);transform:translate(-.5px,-.5px) rotate(-.5deg)}30%{-webkit-transform:translate(1.5px,-.5px) rotate(-.5deg);transform:translate(1.5px,-.5px) rotate(-.5deg)}32%{-webkit-transform:translate(2.5px,-1.5px) rotate(1.5deg);transform:translate(2.5px,-1.5px) rotate(1.5deg)}34%{-webkit-transform:translate(2.5px,2.5px) rotate(-.5deg);transform:translate(2.5px,2.5px) rotate(-.5deg)}36%{-webkit-transform:translate(.5px,-1.5px) rotate(.5deg);transform:translate(.5px,-1.5px) rotate(.5deg)}38%{-webkit-transform:translate(2.5px,-.5px) rotate(-.5deg);transform:translate(2.5px,-.5px) rotate(-.5deg)}40%{-webkit-transform:translate(-.5px,2.5px) rotate(.5deg);transform:translate(-.5px,2.5px) rotate(.5deg)}42%{-webkit-transform:translate(-1.5px,2.5px) rotate(.5deg);transform:translate(-1.5px,2.5px) rotate(.5deg)}44%{-webkit-transform:translate(-1.5px,1.5px) rotate(.5deg);transform:translate(-1.5px,1.5px) rotate(.5deg)}46%{-webkit-transform:translate(1.5px,-.5px) rotate(-.5deg);transform:translate(1.5px,-.5px) rotate(-.5deg)}48%{-webkit-transform:translate(2.5px,-.5px) rotate(.5deg);transform:translate(2.5px,-.5px) rotate(.5deg)}50%{-webkit-transform:translate(-1.5px,1.5px) rotate(.5deg);transform:translate(-1.5px,1.5px) rotate(.5deg)}52%{-webkit-transform:translate(-.5px,1.5px) rotate(.5deg);transform:translate(-.5px,1.5px) rotate(.5deg)}54%{-webkit-transform:translate(-1.5px,1.5px) rotate(.5deg);transform:translate(-1.5px,1.5px) rotate(.5deg)}56%{-webkit-transform:translate(.5px,2.5px) rotate(1.5deg);transform:translate(.5px,2.5px) rotate(1.5deg)}58%{-webkit-transform:translate(2.5px,2.5px) rotate(.5deg);transform:translate(2.5px,2.5px) rotate(.5deg)}60%{-webkit-transform:translate(2.5px,-1.5px) rotate(1.5deg);transform:translate(2.5px,-1.5px) rotate(1.5deg)}62%{-webkit-transform:translate(-1.5px,.5px) rotate(1.5deg);transform:translate(-1.5px,.5px) rotate(1.5deg)}64%{-webkit-transform:translate(-1.5px,1.5px) rotate(1.5deg);transform:translate(-1.5px,1.5px) rotate(1.5deg)}66%{-webkit-transform:translate(.5px,2.5px) rotate(1.5deg);transform:translate(.5px,2.5px) rotate(1.5deg)}68%{-webkit-transform:translate(2.5px,-1.5px) rotate(1.5deg);transform:translate(2.5px,-1.5px) rotate(1.5deg)}70%{-webkit-transform:translate(2.5px,2.5px) rotate(.5deg);transform:translate(2.5px,2.5px) rotate(.5deg)}72%{-webkit-transform:translate(-.5px,-1.5px) rotate(1.5deg);transform:translate(-.5px,-1.5px) rotate(1.5deg)}74%{-webkit-transform:translate(-1.5px,2.5px) rotate(1.5deg);transform:translate(-1.5px,2.5px) rotate(1.5deg)}76%{-webkit-transform:translate(-1.5px,2.5px) rotate(1.5deg);transform:translate(-1.5px,2.5px) rotate(1.5deg)}78%{-webkit-transform:translate(-1.5px,2.5px) rotate(.5deg);transform:translate(-1.5px,2.5px) rotate(.5deg)}80%{-webkit-transform:translate(-1.5px,.5px) rotate(-.5deg);transform:translate(-1.5px,.5px) rotate(-.5deg)}82%{-webkit-transform:translate(-1.5px,.5px) rotate(-.5deg);transform:translate(-1.5px,.5px) rotate(-.5deg)}84%{-webkit-transform:translate(-.5px,.5px) rotate(1.5deg);transform:translate(-.5px,.5px) rotate(1.5deg)}86%{-webkit-transform:translate(2.5px,1.5px) rotate(.5deg);transform:translate(2.5px,1.5px) rotate(.5deg)}88%{-webkit-transform:translate(-1.5px,.5px) rotate(1.5deg);transform:translate(-1.5px,.5px) rotate(1.5deg)}90%{-webkit-transform:translate(-1.5px,-.5px) rotate(-.5deg);transform:translate(-1.5px,-.5px) rotate(-.5deg)}92%{-webkit-transform:translate(-1.5px,-1.5px) rotate(1.5deg);transform:translate(-1.5px,-1.5px) rotate(1.5deg)}94%{-webkit-transform:translate(.5px,.5px) rotate(-.5deg);transform:translate(.5px,.5px) rotate(-.5deg)}96%{-webkit-transform:translate(2.5px,-.5px) rotate(-.5deg);transform:translate(2.5px,-.5px) rotate(-.5deg)}98%{-webkit-transform:translate(-1.5px,-1.5px) rotate(-.5deg);transform:translate(-1.5px,-1.5px) rotate(-.5deg)}0%,to{-webkit-transform:translate(0) rotate(0);transform:translate(0) rotate(0)}}", ""])
	},
	"703f": function(t, e, r) {
		"use strict";
		var i = r("d8bf");
		r.n(i).a
	},
	"8bbf": function(t, e) {
		t.exports = require("vue")
	},
	bd60: function(t, e, r) { (function(t) { !
			function() {
				var e = !0;
				function r() {
					e || (this._$MT = null, this._$5S = null, this._$NP = 0, r._$42++, this._$5S = new Y(this))
				}
				function i(t) {
					if (!e) {
						this.clipContextList = new Array,
						this.glcontext = t.gl,
						this.dp_webgl = t,
						this.curFrameNo = 0,
						this.firstError_clipInNotUpdate = !0,
						this.colorBuffer = 0,
						this.isInitGLFBFunc = !1,
						this.tmpBoundsOnModel = new S,
						ht.glContext.length > ht.frameBuffers.length && (this.curFrameNo = this.getMaskRenderTexture()),
						this.tmpModelToViewMatrix = new R,
						this.tmpMatrix2 = new R,
						this.tmpMatrixForMask = new R,
						this.tmpMatrixForDraw = new R,
						this.CHANNEL_COLORS = new Array;
						var r = new E; (r = new E).r = 0,
						r.g = 0,
						r.b = 0,
						r.a = 1,
						this.CHANNEL_COLORS.push(r),
						(r = new E).r = 1,
						r.g = 0,
						r.b = 0,
						r.a = 0,
						this.CHANNEL_COLORS.push(r),
						(r = new E).r = 0,
						r.g = 1,
						r.b = 0,
						r.a = 0,
						this.CHANNEL_COLORS.push(r),
						(r = new E).r = 0,
						r.g = 0,
						r.b = 1,
						r.a = 0,
						this.CHANNEL_COLORS.push(r);
						for (var i = 0; i < this.CHANNEL_COLORS.length; i++) this.dp_webgl.setChannelFlagAsColor(i, this.CHANNEL_COLORS[i])
					}
				}
				function s(t, e, r) {
					this.clipIDList = new Array,
					this.clipIDList = r,
					this.clippingMaskDrawIndexList = new Array;
					for (var i = 0; i < r.length; i++) this.clippingMaskDrawIndexList.push(e.getDrawDataIndex(r[i]));
					this.clippedDrawContextList = new Array,
					this.isUsing = !0,
					this.layoutChannelNo = 0,
					this.layoutBounds = new S,
					this.allClippedDrawRect = new S,
					this.matrixForMask = new Float32Array(16),
					this.matrixForDraw = new Float32Array(16),
					this.owner = t
				}
				function o(t, e) {
					this._$gP = t,
					this.drawDataIndex = e
				}
				function n() {
					e || (this.color = null)
				}
				function a() {
					e || (this._$dP = null, this._$eo = null, this._$V0 = null, this._$dP = 1e3, this._$eo = 1e3, this._$V0 = 1, this._$a0())
				}
				function _() {}
				function h() {
					this._$r = null,
					this._$0S = null
				}
				function l() {
					e || (this.x = null, this.y = null, this.width = null, this.height = null)
				}
				function $(t) {
					e || st.prototype.constructor.call(this, t)
				}
				function u(t) {
					e || st.prototype.constructor.call(this, t)
				}
				function p() {
					e || (this._$vo = null, this._$F2 = null, this._$ao = 400, this._$1S = 400, p._$42++)
				}
				function f() {
					e || (this.p1 = new c, this.p2 = new c, this._$Fo = 0, this._$Db = 0, this._$L2 = 0, this._$M2 = 0, this._$ks = 0, this._$9b = 0, this._$iP = 0, this._$iT = 0, this._$lL = new Array, this._$qP = new Array, this.setup(.3, .5, .1))
				}
				function c() {
					this._$p = 1,
					this.x = 0,
					this.y = 0,
					this.vx = 0,
					this.vy = 0,
					this.ax = 0,
					this.ay = 0,
					this.fx = 0,
					this.fy = 0,
					this._$s0 = 0,
					this._$70 = 0,
					this._$7L = 0,
					this._$HL = 0
				}
				function d(t, e, r) {
					this._$wL = null,
					this.scale = null,
					this._$V0 = null,
					this._$wL = t,
					this.scale = e,
					this._$V0 = r
				}
				function g(t, e, r, i) {
					d.prototype.constructor.call(this, e, r, i),
					this._$tL = null,
					this._$tL = t
				}
				function y(t, e, r) {
					this._$wL = null,
					this.scale = null,
					this._$V0 = null,
					this._$wL = t,
					this.scale = e,
					this._$V0 = r
				}
				function x(t, e, r, i) {
					y.prototype.constructor.call(this, e, r, i),
					this._$YP = null,
					this._$YP = t
				}
				function T() {
					e || (this._$fL = 0, this._$gL = 0, this._$B0 = 1, this._$z0 = 1, this._$qT = 0, this.reflectX = !1, this.reflectY = !1)
				}
				r._$0s = 1,
				r._$4s = 2,
				r._$42 = 0,
				r._$62 = function(t, e) {
					try {
						if (e instanceof ArrayBuffer && (e = new DataView(e)), !(e instanceof DataView)) throw new $t("_$SS#loadModel(b) / b _$x be DataView or ArrayBuffer");
						var i, s = new St(e),
						o = s._$ST(),
						n = s._$ST(),
						a = s._$ST();
						if (109 != o || 111 != n || 99 != a) throw new $t("_$gi _$C _$li , _$Q0 _$P0.");
						if (i = s._$ST(), s._$gr(i), i > G._$T7) throw t._$NP |= r._$4s,
						new $t("_$gi _$C _$li , _$n0 _$_ version _$li ( SDK : " + G._$T7 + " < _$f0 : " + i + " )@_$SS#loadModel()\n");
						var h = s._$nP();
						if (i >= G._$s7) {
							var l = s._$9T(),
							$ = s._$9T();
							if ( - 30584 != l || -30584 != $) throw t._$NP |= r._$0s,
							new $t("_$gi _$C _$li , _$0 _$6 _$Ui.")
						}
						t._$KS(h);
						var u = t.getModelContext();
						u.setDrawParam(t.getDrawParam()),
						u.init()
					} catch(t) {
						_._$Rb(t)
					}
				},
				r.prototype._$KS = function(t) {
					this._$MT = t
				},
				r.prototype.getModelImpl = function() {
					return null == this._$MT && (this._$MT = new p, this._$MT._$zP()),
					this._$MT
				},
				r.prototype.getCanvasWidth = function() {
					return null == this._$MT ? 0 : this._$MT.getCanvasWidth()
				},
				r.prototype.getCanvasHeight = function() {
					return null == this._$MT ? 0 : this._$MT.getCanvasHeight()
				},
				r.prototype.getParamFloat = function(t) {
					return "number" != typeof t && (t = this._$5S.getParamIndex(u.getID(t))),
					this._$5S.getParamFloat(t)
				},
				r.prototype.setParamFloat = function(t, e, r) {
					"number" != typeof t && (t = this._$5S.getParamIndex(u.getID(t))),
					arguments.length < 3 && (r = 1),
					this._$5S.setParamFloat(t, this._$5S.getParamFloat(t) * (1 - r) + e * r)
				},
				r.prototype.addToParamFloat = function(t, e, r) {
					"number" != typeof t && (t = this._$5S.getParamIndex(u.getID(t))),
					arguments.length < 3 && (r = 1),
					this._$5S.setParamFloat(t, this._$5S.getParamFloat(t) + e * r)
				},
				r.prototype.multParamFloat = function(t, e, r) {
					"number" != typeof t && (t = this._$5S.getParamIndex(u.getID(t))),
					arguments.length < 3 && (r = 1),
					this._$5S.setParamFloat(t, this._$5S.getParamFloat(t) * (1 + (e - 1) * r))
				},
				r.prototype.getParamIndex = function(t) {
					return this._$5S.getParamIndex(u.getID(t))
				},
				r.prototype.loadParam = function() {
					this._$5S.loadParam()
				},
				r.prototype.saveParam = function() {
					this._$5S.saveParam()
				},
				r.prototype.init = function() {
					this._$5S.init()
				},
				r.prototype.update = function() {
					this._$5S.update()
				},
				r.prototype._$Rs = function() {
					return _._$li("_$60 _$PT _$Rs()"),
					-1
				},
				r.prototype._$Ds = function(t) {
					_._$li("_$60 _$PT _$SS#_$Ds() \n")
				},
				r.prototype._$K2 = function() {},
				r.prototype.draw = function() {},
				r.prototype.getModelContext = function() {
					return this._$5S
				},
				r.prototype._$s2 = function() {
					return this._$NP
				},
				r.prototype._$P7 = function(t, e, r, i) {
					var s = -1,
					o = 0,
					n = this;
					if (0 != r) if (1 == t.length) {
						p = t[0];
						var a = 0 != n.getParamFloat(p),
						_ = (f = e[0], n.getPartsOpacity(f)),
						h = r / i;
						a ? (_ += h) > 1 && (_ = 1) : (_ -= h) < 0 && (_ = 0),
						n.setPartsOpacity(f, _)
					} else {
						for (u = 0; u < t.length; u++) {
							p = t[u];
							if (c = 0 != n.getParamFloat(p)) {
								if (s >= 0) break;
								s = u;
								f = e[u];
								o = n.getPartsOpacity(f),
								(o += r / i) > 1 && (o = 1)
							}
						}
						s < 0 && (console.log("No _$wi _$q0/ _$U default[%s]", t[0]), s = 0, o = 1, n.loadParam(), n.setParamFloat(t[s], o), n.saveParam());
						for (u = 0; u < t.length; u++) {
							f = e[u];
							if (s == u) n.setPartsOpacity(f, o);
							else {
								var l, $ = n.getPartsOpacity(f); (1 - (l = o < .5 ? -.5 * o / .5 + 1 : .5 * (1 - o) / .5)) * (1 - o) > .15 && (l = 1 - .15 / (1 - o)),
								$ > l && ($ = l),
								n.setPartsOpacity(f, $)
							}
						}
					} else for (var u = 0; u < t.length; u++) {
						var p = t[u],
						f = e[u],
						c = 0 != n.getParamFloat(p);
						n.setPartsOpacity(f, c ? 1 : 0)
					}
				},
				r.prototype.setPartsOpacity = function(t, e) {
					"number" != typeof t && (t = this._$5S.getPartsDataIndex($.getID(t))),
					this._$5S.setPartsOpacity(t, e)
				},
				r.prototype.getPartsDataIndex = function(t) {
					return t instanceof $ || (t = $.getID(t)),
					this._$5S.getPartsDataIndex(t)
				},
				r.prototype.getPartsOpacity = function(t) {
					return "number" != typeof t && (t = this._$5S.getPartsDataIndex($.getID(t))),
					t < 0 ? 0 : this._$5S.getPartsOpacity(t)
				},
				r.prototype.getDrawParam = function() {},
				r.prototype.getDrawDataIndex = function(t) {
					return this._$5S.getDrawDataIndex(C.getID(t))
				},
				r.prototype.getDrawData = function(t) {
					return this._$5S.getDrawData(t)
				},
				r.prototype.getTransformedPoints = function(t) {
					var e = this._$5S._$C2(t);
					return e instanceof pt ? e.getTransformedPoints() : null
				},
				r.prototype.getIndexArray = function(t) {
					if (t < 0 || t >= this._$5S._$aS.length) return null;
					var e = this._$5S._$aS[t];
					return null != e && e.getType() == q._$wb && e instanceof ut ? e.getIndexArray() : null
				},
				i.CHANNEL_COUNT = 4,
				i.RENDER_TEXTURE_USE_MIPMAP = !1,
				i.NOT_USED_FRAME = -100,
				i.prototype._$L7 = function() {
					if (this.tmpModelToViewMatrix && (this.tmpModelToViewMatrix = null), this.tmpMatrix2 && (this.tmpMatrix2 = null), this.tmpMatrixForMask && (this.tmpMatrixForMask = null), this.tmpMatrixForDraw && (this.tmpMatrixForDraw = null), this.tmpBoundsOnModel && (this.tmpBoundsOnModel = null), this.CHANNEL_COLORS) {
						for (var t = this.CHANNEL_COLORS.length - 1; t >= 0; --t) this.CHANNEL_COLORS.splice(t, 1);
						this.CHANNEL_COLORS = []
					}
					this.releaseShader()
				},
				i.prototype.releaseShader = function() {
					for (var t = ht.frameBuffers.length,
					e = 0; e < t; e++) this.gl.deleteFramebuffer(ht.frameBuffers[e].framebuffer);
					ht.frameBuffers = [],
					ht.glContext = []
				},
				i.prototype.init = function(t, e, r) {
					for (var i = 0; i < e.length; i++) {
						var o = e[i].getClipIDList();
						if (null != o) {
							var n = this.findSameClip(o);
							null == n && (n = new s(this, t, o), this.clipContextList.push(n));
							var a = e[i].getDrawDataID(),
							_ = t.getDrawDataIndex(a);
							n.addClippedDrawData(a, _),
							r[i].clipBufPre_clipContext = n
						}
					}
				},
				i.prototype.getMaskRenderTexture = function() {
					var t;
					return t = this.dp_webgl.createFramebuffer(),
					ht.frameBuffers[this.dp_webgl.glno] = t,
					this.dp_webgl.glno
				},
				i.prototype.setupClip = function(t, e) {
					for (var r = 0,
					i = 0; i < this.clipContextList.length; i++) {
						var s = this.clipContextList[i];
						this.calcClippedDrawTotalBounds(t, s),
						s.isUsing && r++
					}
					if (r > 0) {
						var o = e.gl.getParameter(e.gl.FRAMEBUFFER_BINDING),
						n = new Array(4);
						n[0] = 0,
						n[1] = 0,
						n[2] = e.gl.canvas.width,
						n[3] = e.gl.canvas.height,
						e.gl.viewport(0, 0, ht.clippingMaskBufferSize, ht.clippingMaskBufferSize),
						this.setupLayoutBounds(r),
						e.gl.bindFramebuffer(e.gl.FRAMEBUFFER, ht.frameBuffers[this.curFrameNo].framebuffer),
						e.gl.clearColor(0, 0, 0, 0),
						e.gl.clear(e.gl.COLOR_BUFFER_BIT);
						for (i = 0; i < this.clipContextList.length; i++) {
							var a = (s = this.clipContextList[i]).allClippedDrawRect,
							_ = (s.layoutChannelNo, s.layoutBounds);
							this.tmpBoundsOnModel._$jL(a),
							this.tmpBoundsOnModel.expand(.05 * a.width, .05 * a.height);
							var h = _.width / this.tmpBoundsOnModel.width,
							l = _.height / this.tmpBoundsOnModel.height;
							this.tmpMatrix2.identity(),
							this.tmpMatrix2.translate( - 1, -1, 0),
							this.tmpMatrix2.scale(2, 2, 1),
							this.tmpMatrix2.translate(_.x, _.y, 0),
							this.tmpMatrix2.scale(h, l, 1),
							this.tmpMatrix2.translate( - this.tmpBoundsOnModel.x, -this.tmpBoundsOnModel.y, 0),
							this.tmpMatrixForMask.setMatrix(this.tmpMatrix2.m),
							this.tmpMatrix2.identity(),
							this.tmpMatrix2.translate(_.x, _.y, 0),
							this.tmpMatrix2.scale(h, l, 1),
							this.tmpMatrix2.translate( - this.tmpBoundsOnModel.x, -this.tmpBoundsOnModel.y, 0),
							this.tmpMatrixForDraw.setMatrix(this.tmpMatrix2.m);
							for (var $ = this.tmpMatrixForMask.getArray(), u = 0; u < 16; u++) s.matrixForMask[u] = $[u];
							var p = this.tmpMatrixForDraw.getArray();
							for (u = 0; u < 16; u++) s.matrixForDraw[u] = p[u];
							for (var f = s.clippingMaskDrawIndexList.length,
							c = 0; c < f; c++) {
								var d = s.clippingMaskDrawIndexList[c],
								g = t.getDrawData(d),
								m = t._$C2(d);
								e.setClipBufPre_clipContextForMask(s),
								g.draw(e, t, m)
							}
						}
						e.gl.bindFramebuffer(e.gl.FRAMEBUFFER, o),
						e.setClipBufPre_clipContextForMask(null),
						e.gl.viewport(n[0], n[1], n[2], n[3])
					}
				},
				i.prototype.getColorBuffer = function() {
					return this.colorBuffer
				},
				i.prototype.findSameClip = function(t) {
					for (var e = 0; e < this.clipContextList.length; e++) {
						var r = this.clipContextList[e],
						i = r.clipIDList.length;
						if (i == t.length) {
							for (var s = 0,
							o = 0; o < i; o++) for (var n = r.clipIDList[o], a = 0; a < i; a++) if (t[a] == n) {
								s++;
								break
							}
							if (s == i) return r
						}
					}
					return null
				},
				i.prototype.calcClippedDrawTotalBounds = function(t, e) {
					for (var r = t._$Ri.getModelImpl().getCanvasWidth(), i = t._$Ri.getModelImpl().getCanvasHeight(), s = r > i ? r: i, o = s, n = s, a = 0, _ = 0, h = e.clippedDrawContextList.length, l = 0; l < h; l++) {
						var $ = e.clippedDrawContextList[l].drawDataIndex,
						u = t._$C2($);
						if (u._$yo()) {
							for (var p = u.getTransformedPoints(), f = p.length, c = [], d = [], g = 0, m = U._$i2; m < f; m += U._$No) c[g] = p[m],
							d[g] = p[m + 1],
							g++;
							var y = Math.min.apply(null, c),
							x = Math.min.apply(null, d),
							T = Math.max.apply(null, c),
							P = Math.max.apply(null, d);
							y < o && (o = y),
							x < n && (n = x),
							T > a && (a = T),
							P > _ && (_ = P)
						}
					}
					if (o == s) e.allClippedDrawRect.x = 0,
					e.allClippedDrawRect.y = 0,
					e.allClippedDrawRect.width = 0,
					e.allClippedDrawRect.height = 0,
					e.isUsing = !1;
					else {
						var S = a - o,
						v = _ - n;
						e.allClippedDrawRect.x = o,
						e.allClippedDrawRect.y = n,
						e.allClippedDrawRect.width = S,
						e.allClippedDrawRect.height = v,
						e.isUsing = !0
					}
				},
				i.prototype.setupLayoutBounds = function(t) {
					var e = t / i.CHANNEL_COUNT,
					r = t % i.CHANNEL_COUNT;
					e = ~~e,
					r = ~~r;
					for (var s = 0,
					o = 0; o < i.CHANNEL_COUNT; o++) {
						var n = e + (o < r ? 1 : 0);
						if (0 == n);
						else if (1 == n)($ = this.clipContextList[s++]).layoutChannelNo = o,
						$.layoutBounds.x = 0,
						$.layoutBounds.y = 0,
						$.layoutBounds.width = 1,
						$.layoutBounds.height = 1;
						else if (2 == n) for (var a = 0; a < n; a++) {
							var h = 0;
							l = ~~ (l = a % 2),
							($ = this.clipContextList[s++]).layoutChannelNo = o,
							$.layoutBounds.x = .5 * l,
							$.layoutBounds.y = 0,
							$.layoutBounds.width = .5,
							$.layoutBounds.height = 1
						} else if (n <= 4) for (a = 0; a < n; a++) {
							l = ~~ (l = a % 2),
							h = ~~ (h = a / 2),
							($ = this.clipContextList[s++]).layoutChannelNo = o,
							$.layoutBounds.x = .5 * l,
							$.layoutBounds.y = .5 * h,
							$.layoutBounds.width = .5,
							$.layoutBounds.height = .5
						} else if (n <= 9) for (a = 0; a < n; a++) {
							var l, $;
							l = ~~ (l = a % 3),
							h = ~~ (h = a / 3),
							($ = this.clipContextList[s++]).layoutChannelNo = o,
							$.layoutBounds.x = l / 3,
							$.layoutBounds.y = h / 3,
							$.layoutBounds.width = 1 / 3,
							$.layoutBounds.height = 1 / 3
						} else _._$li("_$6 _$0P mask count : %d", n)
					}
				},
				s.prototype.addClippedDrawData = function(t, e) {
					var r = new o(t, e);
					this.clippedDrawContextList.push(r)
				},
				a._$JT = function(t, e, r) {
					var i = t / e,
					s = r / e,
					o = 1 - (1 - s) * (1 - s),
					n = 1 - (1 - s) * (1 - s),
					a = 1 / 3 * (1 - s) * o + (s * (2 / 3) + 1 / 3 * (1 - s)) * (1 - o),
					_ = (s + 2 / 3 * (1 - s)) * n + (s * (1 / 3) + 2 / 3 * (1 - s)) * (1 - n);
					if (i <= 0) return 0;
					if (i >= 1) return 1;
					var h = i * i;
					return (1 - 3 * _ + 3 * a - 0) * (i * h) + (3 * _ - 6 * a + 0) * h + (3 * a - 0) * i + 0
				},
				a.prototype._$a0 = function() {},
				a.prototype.setFadeIn = function(t) {
					this._$dP = t
				},
				a.prototype.setFadeOut = function(t) {
					this._$eo = t
				},
				a.prototype._$pT = function(t) {
					this._$V0 = t
				},
				a.prototype.getFadeOut = function() {
					return this._$eo
				},
				a.prototype._$4T = function() {
					return this._$eo
				},
				a.prototype._$mT = function() {
					return this._$V0
				},
				a.prototype.getDurationMSec = function() {
					return - 1
				},
				a.prototype.getLoopDurationMSec = function() {
					return - 1
				},
				a.prototype.updateParam = function(t, e) {
					if (e._$AT && !e._$9L) {
						var r = I.getUserTimeMSec();
						if (e._$z2 < 0) {
							e._$z2 = r,
							e._$bs = r;
							var i = this.getDurationMSec();
							e._$Do < 0 && (e._$Do = i <= 0 ? -1 : e._$z2 + i)
						}
						var s = this._$V0;
						0 <= (s = s * (0 == this._$dP ? 1 : lt._$r2((r - e._$bs) / this._$dP)) * (0 == this._$eo || e._$Do < 0 ? 1 : lt._$r2((e._$Do - r) / this._$eo))) && s <= 1 || console.log("### assert!! ### "),
						this.updateParamExe(t, r, s, e),
						e._$Do > 0 && e._$Do < r && (e._$9L = !0)
					}
				},
				a.prototype.updateParamExe = function(t, e, r, i) {},
				_._$8s = 0,
				_._$fT = new Object,
				_.start = function(t) {
					var e = _._$fT[t];
					null == e && ((e = new h)._$r = t, _._$fT[t] = e),
					e._$0S = I.getSystemTimeMSec()
				},
				_.dump = function(t) {
					var e = _._$fT[t];
					if (null != e) {
						var r = I.getSystemTimeMSec() - e._$0S;
						return console.log(t + " : " + r + "ms"),
						r
					}
					return - 1
				},
				_.end = function(t) {
					var e = _._$fT[t];
					return null != e ? I.getSystemTimeMSec() - e._$0S: -1
				},
				_._$li = function(t, e) {
					console.log("_$li : " + t + "\n", e)
				},
				_._$Ji = function(t, e) {
					console.log(t, e)
				},
				_._$dL = function(t, e) {
					console.log(t, e),
					console.log("\n")
				},
				_._$KL = function(t, e) {
					for (var r = 0; r < e; r++) r % 16 == 0 && r > 0 ? console.log("\n") : r % 8 == 0 && r > 0 && console.log("  "),
					console.log("%02X ", 255 & t[r]);
					console.log("\n")
				},
				_._$nr = function(t, e, r) {
					console.log("%s\n", t);
					for (var i = e.length,
					s = 0; s < i; ++s) console.log("%5d", e[s]),
					console.log("%s\n", r),
					console.log(",");
					console.log("\n")
				},
				_._$Rb = function(t) {
					console.log("dump exception : " + t),
					console.log("stack :: " + t.stack)
				},
				l.prototype._$8P = function() {
					return.5 * (this.x + this.x + this.width)
				},
				l.prototype._$6P = function() {
					return.5 * (this.y + this.y + this.height)
				},
				l.prototype._$EL = function() {
					return this.x + this.width
				},
				l.prototype._$5T = function() {
					return this.y + this.height
				},
				l.prototype._$jL = function(t, e, r, i) {
					this.x = t,
					this.y = e,
					this.width = r,
					this.height = i
				},
				l.prototype._$jL = function(t) {
					this.x = t.x,
					this.y = t.y,
					this.width = t.width,
					this.height = t.height
				},
				$.prototype = new st,
				$._$tP = new Object,
				$._$27 = function() {
					$._$tP.clear()
				},
				$.getID = function(t) {
					var e = $._$tP[t];
					return null == e && (e = new $(t), $._$tP[t] = e),
					e
				},
				$.prototype._$3s = function() {
					return new $
				},
				u.prototype = new st,
				u._$tP = new Object,
				u._$27 = function() {
					u._$tP.clear()
				},
				u.getID = function(t) {
					var e = u._$tP[t];
					return null == e && (e = new u(t), u._$tP[t] = e),
					e
				},
				u.prototype._$3s = function() {
					return new u
				},
				p._$42 = 0,
				p.prototype._$zP = function() {
					null == this._$vo && (this._$vo = new ot),
					null == this._$F2 && (this._$F2 = new Array)
				},
				p.prototype.getCanvasWidth = function() {
					return this._$ao
				},
				p.prototype.getCanvasHeight = function() {
					return this._$1S
				},
				p.prototype._$F0 = function(t) {
					this._$vo = t._$nP(),
					this._$F2 = t._$nP(),
					this._$ao = t._$6L(),
					this._$1S = t._$6L()
				},
				p.prototype._$6S = function(t) {
					this._$F2.push(t)
				},
				p.prototype._$Xr = function() {
					return this._$F2
				},
				p.prototype._$E2 = function() {
					return this._$vo
				},
				f.prototype.setup = function(t, e, r) {
					this._$ks = this._$Yb(),
					this.p2._$xT(),
					3 == arguments.length && (this._$Fo = t, this._$L2 = e, this.p1._$p = r, this.p2._$p = r, this.p2.y = t, this.setup())
				},
				f.prototype.getPhysicsPoint1 = function() {
					return this.p1
				},
				f.prototype.getPhysicsPoint2 = function() {
					return this.p2
				},
				f.prototype._$qr = function() {
					return this._$Db
				},
				f.prototype._$pr = function(t) {
					this._$Db = t
				},
				f.prototype._$5r = function() {
					return this._$M2
				},
				f.prototype._$Cs = function() {
					return this._$9b
				},
				f.prototype._$Yb = function() {
					return - 180 * Math.atan2(this.p1.x - this.p2.x, -(this.p1.y - this.p2.y)) / Math.PI
				},
				f.prototype.addSrcParam = function(t, e, r, i) {
					var s = new g(t, e, r, i);
					this._$lL.push(s)
				},
				f.prototype.addTargetParam = function(t, e, r, i) {
					var s = new x(t, e, r, i);
					this._$qP.push(s)
				},
				f.prototype.update = function(t, e) {
					if (0 == this._$iP) return this._$iP = this._$iT = e,
					void(this._$Fo = Math.sqrt((this.p1.x - this.p2.x) * (this.p1.x - this.p2.x) + (this.p1.y - this.p2.y) * (this.p1.y - this.p2.y)));
					var r = (e - this._$iT) / 1e3;
					if (0 != r) {
						for (var i = this._$lL.length - 1; i >= 0; --i) {
							this._$lL[i]._$oP(t, this)
						}
						this._$oo(t, r),
						this._$M2 = this._$Yb(),
						this._$9b = (this._$M2 - this._$ks) / r,
						this._$ks = this._$M2
					}
					for (i = this._$qP.length - 1; i >= 0; --i) {
						this._$qP[i]._$YS(t, this)
					}
					this._$iT = e
				},
				f.prototype._$oo = function(t, e) {
					e < .033 && (e = .033);
					var r = 1 / e;
					this.p1.vx = (this.p1.x - this.p1._$s0) * r,
					this.p1.vy = (this.p1.y - this.p1._$70) * r,
					this.p1.ax = (this.p1.vx - this.p1._$7L) * r,
					this.p1.ay = (this.p1.vy - this.p1._$HL) * r,
					this.p1.fx = this.p1.ax * this.p1._$p,
					this.p1.fy = this.p1.ay * this.p1._$p,
					this.p1._$xT();
					var i, s, o = -Math.atan2(this.p1.y - this.p2.y, this.p1.x - this.p2.x),
					n = Math.cos(o),
					a = Math.sin(o),
					_ = 9.8 * this.p2._$p,
					h = this._$Db * Lt._$bS,
					l = _ * Math.cos(o - h);
					i = l * a,
					s = l * n;
					var $ = -this.p1.fx * a * a,
					u = -this.p1.fy * a * n,
					p = -this.p2.vx * this._$L2,
					f = -this.p2.vy * this._$L2;
					this.p2.fx = i + $ + p,
					this.p2.fy = s + u + f,
					this.p2.ax = this.p2.fx / this.p2._$p,
					this.p2.ay = this.p2.fy / this.p2._$p,
					this.p2.vx += this.p2.ax * e,
					this.p2.vy += this.p2.ay * e,
					this.p2.x += this.p2.vx * e,
					this.p2.y += this.p2.vy * e;
					var c = Math.sqrt((this.p1.x - this.p2.x) * (this.p1.x - this.p2.x) + (this.p1.y - this.p2.y) * (this.p1.y - this.p2.y));
					this.p2.x = this.p1.x + this._$Fo * (this.p2.x - this.p1.x) / c,
					this.p2.y = this.p1.y + this._$Fo * (this.p2.y - this.p1.y) / c,
					this.p2.vx = (this.p2.x - this.p2._$s0) * r,
					this.p2.vy = (this.p2.y - this.p2._$70) * r,
					this.p2._$xT()
				},
				c.prototype._$xT = function() {
					this._$s0 = this.x,
					this._$70 = this.y,
					this._$7L = this.vx,
					this._$HL = this.vy
				},
				d.prototype._$oP = function(t, e) {},
				g.prototype = new d,
				g.prototype._$oP = function(t, e) {
					var r = this.scale * t.getParamFloat(this._$wL),
					i = e.getPhysicsPoint1();
					switch (this._$tL) {
					default:
					case f.Src.SRC_TO_X:
						i.x = i.x + (r - i.x) * this._$V0;
						break;
					case f.Src.SRC_TO_Y:
						i.y = i.y + (r - i.y) * this._$V0;
						break;
					case f.Src.SRC_TO_G_ANGLE:
						var s = e._$qr();
						s += (r - s) * this._$V0,
						e._$pr(s)
					}
				},
				y.prototype._$YS = function(t, e) {},
				x.prototype = new y,
				x.prototype._$YS = function(t, e) {
					switch (this._$YP) {
					default:
					case f.Target.TARGET_FROM_ANGLE:
						t.setParamFloat(this._$wL, this.scale * e._$5r(), this._$V0);
						break;
					case f.Target.TARGET_FROM_ANGLE_V:
						t.setParamFloat(this._$wL, this.scale * e._$Cs(), this._$V0)
					}
				},
				f.Src = function() {},
				f.Src.SRC_TO_X = "SRC_TO_X",
				f.Src.SRC_TO_Y = "SRC_TO_Y",
				f.Src.SRC_TO_G_ANGLE = "SRC_TO_G_ANGLE",
				f.Target = function() {},
				f.Target.TARGET_FROM_ANGLE = "TARGET_FROM_ANGLE",
				f.Target.TARGET_FROM_ANGLE_V = "TARGET_FROM_ANGLE_V",
				T.prototype.init = function(t) {
					this._$fL = t._$fL,
					this._$gL = t._$gL,
					this._$B0 = t._$B0,
					this._$z0 = t._$z0,
					this._$qT = t._$qT,
					this.reflectX = t.reflectX,
					this.reflectY = t.reflectY
				},
				T.prototype._$F0 = function(t) {
					this._$fL = t._$_T(),
					this._$gL = t._$_T(),
					this._$B0 = t._$_T(),
					this._$z0 = t._$_T(),
					this._$qT = t._$_T(),
					t.getFormatVersion() >= G.LIVE2D_FORMAT_VERSION_V2_10_SDK2 && (this.reflectX = t._$po(), this.reflectY = t._$po())
				},
				T.prototype._$e = function() {};
				var P = function() {};
				function S() {
					e || (this.x = null, this.y = null, this.width = null, this.height = null)
				}
				function v() {}
				function L() {
					e || (this.x = null, this.y = null)
				}
				function w() {
					e || (this._$gP = null, this._$dr = null, this._$GS = null, this._$qb = null, this._$Lb = null, this._$mS = null, this.clipID = null, this.clipIDList = new Array)
				}
				function M() {
					e || (this._$Eb = M._$ps, this._$lT = 1, this._$C0 = 1, this._$tT = 1, this._$WL = 1, this.culling = !1, this.matrix4x4 = new Float32Array(16), this.premultipliedAlpha = !1, this.anisotropy = 0, this.clippingProcess = M.CLIPPING_PROCESS_NONE, this.clipBufPre_clipContextMask = null, this.clipBufPre_clipContextDraw = null, this.CHANNEL_COLORS = new Array)
				}
				function E() {
					e || (this.a = 1, this.r = 1, this.g = 1, this.b = 1, this.scale = 1, this._$ho = 1, this.blendMode = ht.L2D_COLOR_BLEND_MODE_MULT)
				}
				function b() {
					e || (this._$kP = null, this._$dr = null, this._$Ai = !0, this._$mS = null)
				}
				function I() {}
				function A() {
					e || (this._$VP = 0, this._$wL = null, this._$GP = null, this._$8o = A._$ds, this._$2r = -1, this._$O2 = 0, this._$ri = 0)
				}
				function O() {}
				function D() {
					e || (this._$Ob = null)
				}
				function R() {
					this.m = new Float32Array(16),
					this.identity()
				}
				function C(t) {
					e || st.prototype.constructor.call(this, t)
				}
				function F() {
					e || (this._$7 = 1, this._$f = 0, this._$H = 0, this._$g = 1, this._$k = 0, this._$w = 0, this._$hi = STATE_IDENTITY, this._$Z = _$pS)
				}
				function N() {
					e || (a.prototype.constructor.call(this), this.motions = new Array, this._$7r = null, this._$7r = N._$Co++, this._$D0 = 30, this._$yT = 0, this._$E = !0, this.loopFadeIn = !0, this._$AS = -1, _$a0())
				}
				function B() {
					this._$P = new Float32Array(100),
					this.size = 0
				}
				function k() {
					this._$4P = null,
					this._$I0 = null,
					this._$RP = null
				}
				function U() {}
				function G() {}
				function Y(t) {
					e || (this._$QT = !0, this._$co = -1, this._$qo = 0, this._$pb = new Array(Y._$is), this._$_2 = new Float32Array(Y._$is), this._$vr = new Float32Array(Y._$is), this._$Rr = new Float32Array(Y._$is), this._$Or = new Float32Array(Y._$is), this._$fs = new Float32Array(Y._$is), this._$Js = new Array(Y._$is), this._$3S = new Array, this._$aS = new Array, this._$Bo = null, this._$F2 = new Array, this._$db = new Array, this._$8b = new Array, this._$Hr = new Array, this._$Ws = null, this._$Vs = null, this._$Er = null, this._$Es = new Int16Array(U._$Qb), this._$ZP = new Float32Array(2 * U._$1r), this._$Ri = t, this._$b0 = Y._$HP++, this.clipManager = null, this.dp_webgl = null)
				}
				function V() {}
				function X() {
					e || (this._$12 = null, this._$bb = null, this._$_L = null, this._$jo = null, this._$iL = null, this._$0L = null, this._$Br = null, this._$Dr = null, this._$Cb = null, this._$mr = null, this._$_L = H.STATE_FIRST, this._$Br = 4e3, this._$Dr = 100, this._$Cb = 50, this._$mr = 150, this._$jo = !0, this._$iL = "PARAM_EYE_L_OPEN", this._$0L = "PARAM_EYE_R_OPEN")
				}
				P._$ni = function(t, e, r, i, s, o, n, a, _) {
					var h = n * o - a * s;
					if (0 == h) return null;
					var l, $ = ((t - r) * o - (e - i) * s) / h;
					return l = 0 != s ? (t - r - $ * n) / s: (e - i - $ * a) / o,
					isNaN(l) && (l = (t - r - $ * n) / s, isNaN(l) && (l = (e - i - $ * a) / o), isNaN(l) && (console.log("a is NaN @UtVector#_$ni() "), console.log("v1x : " + s), console.log("v1x != 0 ? " + (0 != s)))),
					null == _ ? new Array(l, $) : (_[0] = l, _[1] = $, _)
				},
				S.prototype._$8P = function() {
					return this.x + .5 * this.width
				},
				S.prototype._$6P = function() {
					return this.y + .5 * this.height
				},
				S.prototype._$EL = function() {
					return this.x + this.width
				},
				S.prototype._$5T = function() {
					return this.y + this.height
				},
				S.prototype._$jL = function(t, e, r, i) {
					this.x = t,
					this.y = e,
					this.width = r,
					this.height = i
				},
				S.prototype._$jL = function(t) {
					this.x = t.x,
					this.y = t.y,
					this.width = t.width,
					this.height = t.height
				},
				S.prototype.contains = function(t, e) {
					return this.x <= this.x && this.y <= this.y && this.x <= this.x + this.width && this.y <= this.y + this.height
				},
				S.prototype.expand = function(t, e) {
					this.x -= t,
					this.y -= e,
					this.width += 2 * t,
					this.height += 2 * e
				},
				v._$Z2 = function(t, e, r, i) {
					var s = e._$Q2(t, r),
					o = t._$vs(),
					n = t._$Tr();
					if (e._$zr(o, n, s), s <= 0) return i[o[0]];
					if (1 == s) return (a = i[o[0]]) + ((_ = i[o[1]]) - a) * (y = n[0]) | 0;
					if (2 == s) {
						var a = i[o[0]],
						_ = i[o[1]],
						h = i[o[2]],
						l = i[o[3]];
						return (P = a + (_ - a) * (y = n[0]) | 0) + ((h + (l - h) * y | 0) - P) * (x = n[1]) | 0
					}
					if (3 == s) {
						var $ = i[o[0]],
						u = i[o[1]],
						p = i[o[2]],
						f = i[o[3]],
						c = i[o[4]],
						d = i[o[5]],
						g = i[o[6]],
						m = i[o[7]];
						return (P = (a = $ + (u - $) * (y = n[0]) | 0) + ((_ = p + (f - p) * y | 0) - a) * (x = n[1]) | 0) + (((h = c + (d - c) * y | 0) + ((l = g + (m - g) * y | 0) - h) * x | 0) - P) * (T = n[2]) | 0
					}
					if (4 == s) {
						var y, x, T, P, S = i[o[0]],
						v = i[o[1]],
						L = i[o[2]],
						w = i[o[3]],
						M = i[o[4]],
						E = i[o[5]],
						b = i[o[6]],
						I = i[o[7]],
						A = i[o[8]],
						O = i[o[9]],
						D = i[o[10]],
						R = i[o[11]],
						C = i[o[12]],
						F = i[o[13]],
						N = i[o[14]],
						B = i[o[15]];
						return (P = (a = ($ = S + (v - S) * (y = n[0]) | 0) + ((u = L + (w - L) * y | 0) - $) * (x = n[1]) | 0) + ((_ = (p = M + (E - M) * y | 0) + ((f = b + (I - b) * y | 0) - p) * x | 0) - a) * (T = n[2]) | 0) + (((h = (c = A + (O - A) * y | 0) + ((d = D + (R - D) * y | 0) - c) * x | 0) + ((l = (g = C + (F - C) * y | 0) + ((m = N + (B - N) * y | 0) - g) * x | 0) - h) * T | 0) - P) * n[3] | 0
					}
					for (var k = 1 << s,
					U = new Float32Array(k), G = 0; G < k; G++) {
						for (var Y = G,
						V = 1,
						X = 0; X < s; X++) V *= Y % 2 == 0 ? 1 - n[X] : n[X],
						Y /= 2;
						U[G] = V
					}
					for (var H = new Float32Array(k), z = 0; z < k; z++) H[z] = i[o[z]];
					var W = 0;
					for (z = 0; z < k; z++) W += U[z] * H[z];
					return W + .5 | 0
				},
				v._$br = function(t, e, r, i) {
					var s = e._$Q2(t, r),
					o = t._$vs(),
					n = t._$Tr();
					if (e._$zr(o, n, s), s <= 0) return i[o[0]];
					if (1 == s) return (a = i[o[0]]) + ((_ = i[o[1]]) - a) * ($ = n[0]);
					if (2 == s) {
						var a = i[o[0]],
						_ = i[o[1]],
						h = i[o[2]],
						l = i[o[3]],
						$ = n[0];
						return (1 - (x = n[1])) * (a + (_ - a) * $) + x * (h + (l - h) * $)
					}
					if (3 == s) {
						var u = i[o[0]],
						p = i[o[1]],
						f = i[o[2]],
						c = i[o[3]],
						d = i[o[4]],
						g = i[o[5]],
						m = i[o[6]],
						y = i[o[7]],
						x = ($ = n[0], n[1]);
						return (1 - (N = n[2])) * ((1 - x) * (u + (p - u) * $) + x * (f + (c - f) * $)) + N * ((1 - x) * (d + (g - d) * $) + x * (m + (y - m) * $))
					}
					if (4 == s) {
						var T = i[o[0]],
						P = i[o[1]],
						S = i[o[2]],
						v = i[o[3]],
						L = i[o[4]],
						w = i[o[5]],
						M = i[o[6]],
						E = i[o[7]],
						b = i[o[8]],
						I = i[o[9]],
						A = i[o[10]],
						O = i[o[11]],
						D = i[o[12]],
						R = i[o[13]],
						C = i[o[14]],
						F = i[o[15]],
						N = ($ = n[0], x = n[1], n[2]),
						B = n[3];
						return (1 - B) * ((1 - N) * ((1 - x) * (T + (P - T) * $) + x * (S + (v - S) * $)) + N * ((1 - x) * (L + (w - L) * $) + x * (M + (E - M) * $))) + B * ((1 - N) * ((1 - x) * (b + (I - b) * $) + x * (A + (O - A) * $)) + N * ((1 - x) * (D + (R - D) * $) + x * (C + (F - C) * $)))
					}
					for (var k = 1 << s,
					U = new Float32Array(k), G = 0; G < k; G++) {
						for (var Y = G,
						V = 1,
						X = 0; X < s; X++) V *= Y % 2 == 0 ? 1 - n[X] : n[X],
						Y /= 2;
						U[G] = V
					}
					for (var H = new Float32Array(k), z = 0; z < k; z++) H[z] = i[o[z]];
					var W = 0;
					for (z = 0; z < k; z++) W += U[z] * H[z];
					return W
				},
				v._$Vr = function(t, e, r, i, s, o, n, a) {
					var _ = e._$Q2(t, r),
					h = t._$vs(),
					l = t._$Tr();
					e._$zr(h, l, _);
					var $ = 2 * i,
					u = n;
					if (_ <= 0) {
						var p = s[h[0]];
						if (2 == a && 0 == n) I._$jT(p, 0, o, 0, $);
						else for (var f = 0; f < $;) o[u] = p[f++],
						o[u + 1] = p[f++],
						u += a
					} else if (1 == _) {
						p = s[h[0]];
						var c = s[h[1]],
						d = 1 - (y = l[0]);
						for (f = 0; f < $;) o[u] = p[f] * d + c[f] * y,
						++f,
						o[u + 1] = p[f] * d + c[f] * y,
						++f,
						u += a
					} else if (2 == _) {
						p = s[h[0]],
						c = s[h[1]];
						var g = s[h[2]],
						m = s[h[3]],
						y = l[0],
						x = (Y = 1 - (D = l[1])) * (d = 1 - y),
						T = Y * y,
						P = D * d,
						S = D * y;
						for (f = 0; f < $;) o[u] = x * p[f] + T * c[f] + P * g[f] + S * m[f],
						++f,
						o[u + 1] = x * p[f] + T * c[f] + P * g[f] + S * m[f],
						++f,
						u += a
					} else if (3 == _) {
						var v = s[h[0]],
						L = s[h[1]],
						w = s[h[2]],
						M = s[h[3]],
						E = s[h[4]],
						b = s[h[5]],
						A = s[h[6]],
						O = s[h[7]],
						D = (y = l[0], l[1]),
						R = (V = 1 - (nt = l[2])) * (Y = 1 - D) * (d = 1 - y),
						C = V * Y * y,
						F = V * D * d,
						N = V * D * y,
						B = nt * Y * d,
						k = nt * Y * y,
						U = nt * D * d,
						G = nt * D * y;
						for (f = 0; f < $;) o[u] = R * v[f] + C * L[f] + F * w[f] + N * M[f] + B * E[f] + k * b[f] + U * A[f] + G * O[f],
						++f,
						o[u + 1] = R * v[f] + C * L[f] + F * w[f] + N * M[f] + B * E[f] + k * b[f] + U * A[f] + G * O[f],
						++f,
						u += a
					} else if (4 == _) {
						var Y, V, X = s[h[0]],
						H = s[h[1]],
						z = s[h[2]],
						W = s[h[3]],
						j = s[h[4]],
						q = s[h[5]],
						J = s[h[6]],
						Q = s[h[7]],
						Z = s[h[8]],
						K = s[h[9]],
						tt = s[h[10]],
						et = s[h[11]],
						rt = s[h[12]],
						it = s[h[13]],
						st = s[h[14]],
						ot = s[h[15]],
						nt = (y = l[0], D = l[1], l[2]),
						at = l[3],
						_t = 1 - at,
						ht = _t * (V = 1 - nt) * (Y = 1 - D) * (d = 1 - y),
						lt = _t * V * Y * y,
						$t = _t * V * D * d,
						ut = _t * V * D * y,
						pt = _t * nt * Y * d,
						ft = _t * nt * Y * y,
						ct = _t * nt * D * d,
						dt = _t * nt * D * y,
						gt = at * V * Y * d,
						mt = at * V * Y * y,
						yt = at * V * D * d,
						xt = at * V * D * y,
						Tt = at * nt * Y * d,
						Pt = at * nt * Y * y,
						St = at * nt * D * d,
						vt = at * nt * D * y;
						for (f = 0; f < $;) o[u] = ht * X[f] + lt * H[f] + $t * z[f] + ut * W[f] + pt * j[f] + ft * q[f] + ct * J[f] + dt * Q[f] + gt * Z[f] + mt * K[f] + yt * tt[f] + xt * et[f] + Tt * rt[f] + Pt * it[f] + St * st[f] + vt * ot[f],
						++f,
						o[u + 1] = ht * X[f] + lt * H[f] + $t * z[f] + ut * W[f] + pt * j[f] + ft * q[f] + ct * J[f] + dt * Q[f] + gt * Z[f] + mt * K[f] + yt * tt[f] + xt * et[f] + Tt * rt[f] + Pt * it[f] + St * st[f] + vt * ot[f],
						++f,
						u += a
					} else {
						for (var Lt = 1 << _,
						wt = new Float32Array(Lt), Mt = 0; Mt < Lt; Mt++) {
							for (var Et = Mt,
							bt = 1,
							It = 0; It < _; It++) bt *= Et % 2 == 0 ? 1 - l[It] : l[It],
							Et /= 2;
							wt[Mt] = bt
						}
						for (var At = new Float32Array(Lt), Ot = 0; Ot < Lt; Ot++) At[Ot] = s[h[Ot]];
						for (f = 0; f < $;) {
							var Dt = 0,
							Rt = 0,
							Ct = f + 1;
							for (Ot = 0; Ot < Lt; Ot++) Dt += wt[Ot] * At[Ot][f],
							Rt += wt[Ot] * At[Ot][Ct];
							f += 2,
							o[u] = Dt,
							o[u + 1] = Rt,
							u += a
						}
					}
				},
				L.prototype._$HT = function(t, e) {
					this.x = t,
					this.y = e
				},
				L.prototype._$HT = function(t) {
					this.x = t.x,
					this.y = t.y
				},
				w._$ur = -2,
				w._$ES = 500,
				w._$wb = 2,
				w._$8S = 3,
				w._$52 = w._$ES,
				w._$R2 = w._$ES,
				w._$or = function() {
					return w._$52
				},
				w._$Pr = function() {
					return w._$R2
				},
				w.prototype.convertClipIDForV2_11 = function(t) {
					var e = [];
					return null == t ? null: 0 == t.length ? null: /,/.test(t) ? e = t.id.split(",") : (e.push(t.id), e)
				},
				w.prototype._$F0 = function(t) {
					this._$gP = t._$nP(),
					this._$dr = t._$nP(),
					this._$GS = t._$nP(),
					this._$qb = t._$6L(),
					this._$Lb = t._$cS(),
					this._$mS = t._$Tb(),
					t.getFormatVersion() >= G._$T7 ? (this.clipID = t._$nP(), this.clipIDList = this.convertClipIDForV2_11(this.clipID)) : this.clipIDList = [],
					this._$MS(this._$Lb)
				},
				w.prototype.getClipIDList = function() {
					return this.clipIDList
				},
				w.prototype.init = function(t) {},
				w.prototype._$Nr = function(t, e) {
					if (e._$IS[0] = !1, e._$Us = v._$Z2(t, this._$GS, e._$IS, this._$Lb), ht._$Zs);
					else if (e._$IS[0]) return;
					e._$7s = v._$br(t, this._$GS, e._$IS, this._$mS)
				},
				w.prototype._$2b = function(t, e) {},
				w.prototype.getDrawDataID = function() {
					return this._$gP
				},
				w.prototype._$j2 = function(t) {
					this._$gP = t
				},
				w.prototype.getOpacity = function(t, e) {
					return e._$7s
				},
				w.prototype._$zS = function(t, e) {
					return e._$Us
				},
				w.prototype._$MS = function(t) {
					for (var e = t.length - 1; e >= 0; --e) {
						var r = t[e];
						r < w._$52 ? w._$52 = r: r > w._$R2 && (w._$R2 = r)
					}
				},
				w.prototype.getTargetBaseDataID = function() {
					return this._$dr
				},
				w.prototype._$gs = function(t) {
					this._$dr = t
				},
				w.prototype._$32 = function() {
					return null != this._$dr && this._$dr != yt._$2o()
				},
				w.prototype.preDraw = function(t, e, r) {},
				w.prototype.draw = function(t, e, r) {},
				w.prototype.getType = function() {},
				w.prototype._$B2 = function(t, e, r) {},
				M._$ps = 32,
				M.CLIPPING_PROCESS_NONE = 0,
				M.CLIPPING_PROCESS_OVERWRITE_ALPHA = 1,
				M.CLIPPING_PROCESS_MULTIPLY_ALPHA = 2,
				M.CLIPPING_PROCESS_DRAW = 3,
				M.CLIPPING_PROCESS_CLEAR_ALPHA = 4,
				M.prototype.setChannelFlagAsColor = function(t, e) {
					this.CHANNEL_COLORS[t] = e
				},
				M.prototype.getChannelFlagAsColor = function(t) {
					return this.CHANNEL_COLORS[t]
				},
				M.prototype._$ZT = function() {},
				M.prototype._$Uo = function(t, e, r, i, s, o, n) {},
				M.prototype._$Rs = function() {
					return - 1
				},
				M.prototype._$Ds = function(t) {},
				M.prototype.setBaseColor = function(t, e, r, i) {
					t < 0 ? t = 0 : t > 1 && (t = 1),
					e < 0 ? e = 0 : e > 1 && (e = 1),
					r < 0 ? r = 0 : r > 1 && (r = 1),
					i < 0 ? i = 0 : i > 1 && (i = 1),
					this._$lT = t,
					this._$C0 = e,
					this._$tT = r,
					this._$WL = i
				},
				M.prototype._$WP = function(t) {
					this.culling = t
				},
				M.prototype.setMatrix = function(t) {
					for (var e = 0; e < 16; e++) this.matrix4x4[e] = t[e]
				},
				M.prototype._$IT = function() {
					return this.matrix4x4
				},
				M.prototype.setPremultipliedAlpha = function(t) {
					this.premultipliedAlpha = t
				},
				M.prototype.isPremultipliedAlpha = function() {
					return this.premultipliedAlpha
				},
				M.prototype.setAnisotropy = function(t) {
					this.anisotropy = t
				},
				M.prototype.getAnisotropy = function() {
					return this.anisotropy
				},
				M.prototype.getClippingProcess = function() {
					return this.clippingProcess
				},
				M.prototype.setClippingProcess = function(t) {
					this.clippingProcess = t
				},
				M.prototype.setClipBufPre_clipContextForMask = function(t) {
					this.clipBufPre_clipContextMask = t
				},
				M.prototype.getClipBufPre_clipContextMask = function() {
					return this.clipBufPre_clipContextMask
				},
				M.prototype.setClipBufPre_clipContextForDraw = function(t) {
					this.clipBufPre_clipContextDraw = t
				},
				M.prototype.getClipBufPre_clipContextDraw = function() {
					return this.clipBufPre_clipContextDraw
				},
				b._$ur = -2,
				b._$c2 = 1,
				b._$_b = 2,
				b.prototype._$F0 = function(t) {
					this._$kP = t._$nP(),
					this._$dr = t._$nP()
				},
				b.prototype.readV2_opacity = function(t) {
					t.getFormatVersion() >= G.LIVE2D_FORMAT_VERSION_V2_10_SDK2 && (this._$mS = t._$Tb())
				},
				b.prototype.init = function(t) {},
				b.prototype._$Nr = function(t, e) {},
				b.prototype.interpolateOpacity = function(t, e, r, i) {
					null == this._$mS ? r.setInterpolatedOpacity(1) : r.setInterpolatedOpacity(v._$br(t, e, i, this._$mS))
				},
				b.prototype._$2b = function(t, e) {},
				b.prototype._$nb = function(t, e, r, i, s, o, n) {},
				b.prototype.getType = function() {},
				b.prototype._$gs = function(t) {
					this._$dr = t
				},
				b.prototype._$a2 = function(t) {
					this._$kP = t
				},
				b.prototype.getTargetBaseDataID = function() {
					return this._$dr
				},
				b.prototype.getBaseDataID = function() {
					return this._$kP
				},
				b.prototype._$32 = function() {
					return null != this._$dr && this._$dr != yt._$2o()
				},
				I._$W2 = 0,
				I._$CS = I._$W2,
				I._$Mo = function() {
					return ! 0
				},
				I._$XP = function(t) {
					try {
						for (var e = getTimeMSec(); getTimeMSec() - e < t;);
					} catch(t) {
						t._$Rb()
					}
				},
				I.getUserTimeMSec = function() {
					return I._$CS == I._$W2 ? I.getSystemTimeMSec() : I._$CS
				},
				I.setUserTimeMSec = function(t) {
					I._$CS = t
				},
				I.updateUserTimeMSec = function() {
					return I._$CS = I.getSystemTimeMSec()
				},
				I.getTimeMSec = function() {
					return (new Date).getTime()
				},
				I.getSystemTimeMSec = function() {
					return (new Date).getTime()
				},
				I._$Q = function(t) {},
				I._$jT = function(t, e, r, i, s) {
					for (var o = 0; o < s; o++) r[i + o] = t[e + o]
				},
				A._$ds = -2,
				A.prototype._$F0 = function(t) {
					this._$wL = t._$nP(),
					this._$VP = t._$6L(),
					this._$GP = t._$nP()
				},
				A.prototype.getParamIndex = function(t) {
					return this._$2r != t && (this._$8o = A._$ds),
					this._$8o
				},
				A.prototype._$Pb = function(t, e) {
					this._$8o = t,
					this._$2r = e
				},
				A.prototype.getParamID = function() {
					return this._$wL
				},
				A.prototype._$yP = function(t) {
					this._$wL = t
				},
				A.prototype._$N2 = function() {
					return this._$VP
				},
				A.prototype._$d2 = function() {
					return this._$GP
				},
				A.prototype._$t2 = function(t, e) {
					this._$VP = t,
					this._$GP = e
				},
				A.prototype._$Lr = function() {
					return this._$O2
				},
				A.prototype._$wr = function(t) {
					this._$O2 = t
				},
				A.prototype._$SL = function() {
					return this._$ri
				},
				A.prototype._$AL = function(t) {
					this._$ri = t
				},
				O.startsWith = function(t, e, r) {
					var i = e + r.length;
					if (i >= t.length) return ! 1;
					for (var s = e; s < i; s++) if (O.getChar(t, s) != r.charAt(s - e)) return ! 1;
					return ! 0
				},
				O.getChar = function(t, e) {
					return String.fromCharCode(t.getUint8(e))
				},
				O.createString = function(t, e, r) {
					for (var i = new ArrayBuffer(2 * r), s = new Uint16Array(i), o = 0; o < r; o++) s[o] = t.getUint8(e + o);
					return String.fromCharCode.apply(null, s)
				},
				O._$LS = function(t, e, r, i) {
					t instanceof ArrayBuffer && (t = new DataView(t));
					var s = r,
					o = !1,
					n = !1,
					a = 0,
					_ = O.getChar(t, s);
					"-" == _ && (o = !0, s++);
					for (var h = !1; s < e; s++) {
						switch (_ = O.getChar(t, s)) {
						case "0":
							a *= 10;
							break;
						case "1":
							a = 10 * a + 1;
							break;
						case "2":
							a = 10 * a + 2;
							break;
						case "3":
							a = 10 * a + 3;
							break;
						case "4":
							a = 10 * a + 4;
							break;
						case "5":
							a = 10 * a + 5;
							break;
						case "6":
							a = 10 * a + 6;
							break;
						case "7":
							a = 10 * a + 7;
							break;
						case "8":
							a = 10 * a + 8;
							break;
						case "9":
							a = 10 * a + 9;
							break;
						case ".":
							n = !0,
							s++,
							h = !0;
							break;
						default:
							h = !0
						}
						if (h) break
					}
					if (n) for (var l = .1,
					$ = !1; s < e; s++) {
						switch (_ = O.getChar(t, s)) {
						case "0":
							break;
						case "1":
							a += 1 * l;
							break;
						case "2":
							a += 2 * l;
							break;
						case "3":
							a += 3 * l;
							break;
						case "4":
							a += 4 * l;
							break;
						case "5":
							a += 5 * l;
							break;
						case "6":
							a += 6 * l;
							break;
						case "7":
							a += 7 * l;
							break;
						case "8":
							a += 8 * l;
							break;
						case "9":
							a += 9 * l;
							break;
						default:
							$ = !0
						}
						if (l *= .1, $) break
					}
					return o && (a = -a),
					i[0] = s,
					a
				},
				D.prototype._$zP = function() {
					this._$Ob = new Array
				},
				D.prototype._$F0 = function(t) {
					this._$Ob = t._$nP()
				},
				D.prototype._$Ur = function(t) {
					if (t._$WS()) return ! 0;
					for (var e = t._$v2(), r = this._$Ob.length - 1; r >= 0; --r) {
						var i = this._$Ob[r].getParamIndex(e);
						if (i == A._$ds && (i = t.getParamIndex(this._$Ob[r].getParamID())), t._$Xb(i)) return ! 0
					}
					return ! 1
				},
				D.prototype._$Q2 = function(t, e) {
					for (var r, i, s = this._$Ob.length,
					o = t._$v2(), n = 0, a = 0; a < s; a++) {
						var _ = this._$Ob[a];
						if ((r = _.getParamIndex(o)) == A._$ds && (r = t.getParamIndex(_.getParamID()), _._$Pb(r, o)), r < 0) throw new Exception("err 23242 : " + _.getParamID());
						var h = r < 0 ? 0 : t.getParamFloat(r);
						i = _._$N2();
						var l, $, u = _._$d2(),
						p = -1,
						f = 0;
						if (i < 1);
						else if (1 == i)(l = u[0]) - U._$J < h && h < l + U._$J ? (p = 0, f = 0) : (p = 0, e[0] = !0);
						else if (h < (l = u[0]) - U._$J) p = 0,
						e[0] = !0;
						else if (h < l + U._$J) p = 0;
						else {
							for (var c = !1,
							d = 1; d < i; ++d) {
								if (h < ($ = u[d]) + U._$J) {
									$ - U._$J < h ? p = d: (p = d - 1, f = (h - l) / ($ - l), n++),
									c = !0;
									break
								}
								l = $
							}
							c || (p = i - 1, f = 0, e[0] = !0)
						}
						_._$wr(p),
						_._$AL(f)
					}
					return n
				},
				D.prototype._$zr = function(t, e, r) {
					var i = 1 << r;
					i + 1 > U._$Qb && console.log("err 23245\n");
					for (var s = this._$Ob.length,
					o = 1,
					n = 1,
					a = 0,
					_ = 0; _ < i; ++_) t[_] = 0;
					for (var h = 0; h < s; ++h) {
						var l = this._$Ob[h];
						if (0 == l._$SL()) {
							if (($ = l._$Lr() * o) < 0 && ht._$3T) throw new Exception("err 23246");
							for (_ = 0; _ < i; ++_) t[_] += $
						} else {
							var $ = o * l._$Lr(),
							u = o * (l._$Lr() + 1);
							for (_ = 0; _ < i; ++_) t[_] += (_ / n | 0) % 2 == 0 ? $: u;
							e[a++] = l._$SL(),
							n *= 2
						}
						o *= l._$N2()
					}
					t[i] = 65535,
					e[a] = -1
				},
				D.prototype._$h2 = function(t, e, r) {
					for (var i = new Float32Array(e), s = 0; s < e; ++s) i[s] = r[s];
					var o = new A;
					o._$yP(t),
					o._$t2(e, i),
					this._$Ob.push(o)
				},
				D.prototype._$J2 = function(t) {
					for (var e = t,
					r = this._$Ob.length,
					i = 0; i < r; ++i) {
						var s = this._$Ob[i],
						o = s._$N2(),
						n = e % s._$N2(),
						a = s._$d2()[n];
						console.log("%s[%d]=%7.2f / ", s.getParamID(), n, a),
						e /= o
					}
					console.log("\n")
				},
				D.prototype.getParamCount = function() {
					return this._$Ob.length
				},
				D.prototype._$zs = function() {
					return this._$Ob
				},
				R.prototype.identity = function() {
					for (var t = 0; t < 16; t++) this.m[t] = t % 5 == 0 ? 1 : 0
				},
				R.prototype.getArray = function() {
					return this.m
				},
				R.prototype.getCopyMatrix = function() {
					return new Float32Array(this.m)
				},
				R.prototype.setMatrix = function(t) {
					if (null != t && 16 == t.length) for (var e = 0; e < 16; e++) this.m[e] = t[e]
				},
				R.prototype.mult = function(t, e, r) {
					return null == e ? null: (this == e ? this.mult_safe(this.m, t.m, e.m, r) : this.mult_fast(this.m, t.m, e.m, r), e)
				},
				R.prototype.mult_safe = function(t, e, r, i) {
					if (t == r) {
						var s = new Array(16);
						this.mult_fast(t, e, s, i);
						for (var o = 15; o >= 0; --o) r[o] = s[o]
					} else this.mult_fast(t, e, r, i)
				},
				R.prototype.mult_fast = function(t, e, r, i) {
					i ? (r[0] = t[0] * e[0] + t[4] * e[1] + t[8] * e[2], r[4] = t[0] * e[4] + t[4] * e[5] + t[8] * e[6], r[8] = t[0] * e[8] + t[4] * e[9] + t[8] * e[10], r[12] = t[0] * e[12] + t[4] * e[13] + t[8] * e[14] + t[12], r[1] = t[1] * e[0] + t[5] * e[1] + t[9] * e[2], r[5] = t[1] * e[4] + t[5] * e[5] + t[9] * e[6], r[9] = t[1] * e[8] + t[5] * e[9] + t[9] * e[10], r[13] = t[1] * e[12] + t[5] * e[13] + t[9] * e[14] + t[13], r[2] = t[2] * e[0] + t[6] * e[1] + t[10] * e[2], r[6] = t[2] * e[4] + t[6] * e[5] + t[10] * e[6], r[10] = t[2] * e[8] + t[6] * e[9] + t[10] * e[10], r[14] = t[2] * e[12] + t[6] * e[13] + t[10] * e[14] + t[14], r[3] = r[7] = r[11] = 0, r[15] = 1) : (r[0] = t[0] * e[0] + t[4] * e[1] + t[8] * e[2] + t[12] * e[3], r[4] = t[0] * e[4] + t[4] * e[5] + t[8] * e[6] + t[12] * e[7], r[8] = t[0] * e[8] + t[4] * e[9] + t[8] * e[10] + t[12] * e[11], r[12] = t[0] * e[12] + t[4] * e[13] + t[8] * e[14] + t[12] * e[15], r[1] = t[1] * e[0] + t[5] * e[1] + t[9] * e[2] + t[13] * e[3], r[5] = t[1] * e[4] + t[5] * e[5] + t[9] * e[6] + t[13] * e[7], r[9] = t[1] * e[8] + t[5] * e[9] + t[9] * e[10] + t[13] * e[11], r[13] = t[1] * e[12] + t[5] * e[13] + t[9] * e[14] + t[13] * e[15], r[2] = t[2] * e[0] + t[6] * e[1] + t[10] * e[2] + t[14] * e[3], r[6] = t[2] * e[4] + t[6] * e[5] + t[10] * e[6] + t[14] * e[7], r[10] = t[2] * e[8] + t[6] * e[9] + t[10] * e[10] + t[14] * e[11], r[14] = t[2] * e[12] + t[6] * e[13] + t[10] * e[14] + t[14] * e[15], r[3] = t[3] * e[0] + t[7] * e[1] + t[11] * e[2] + t[15] * e[3], r[7] = t[3] * e[4] + t[7] * e[5] + t[11] * e[6] + t[15] * e[7], r[11] = t[3] * e[8] + t[7] * e[9] + t[11] * e[10] + t[15] * e[11], r[15] = t[3] * e[12] + t[7] * e[13] + t[11] * e[14] + t[15] * e[15])
				},
				R.prototype.translate = function(t, e, r) {
					this.m[12] = this.m[0] * t + this.m[4] * e + this.m[8] * r + this.m[12],
					this.m[13] = this.m[1] * t + this.m[5] * e + this.m[9] * r + this.m[13],
					this.m[14] = this.m[2] * t + this.m[6] * e + this.m[10] * r + this.m[14],
					this.m[15] = this.m[3] * t + this.m[7] * e + this.m[11] * r + this.m[15]
				},
				R.prototype.scale = function(t, e, r) {
					this.m[0] *= t,
					this.m[4] *= e,
					this.m[8] *= r,
					this.m[1] *= t,
					this.m[5] *= e,
					this.m[9] *= r,
					this.m[2] *= t,
					this.m[6] *= e,
					this.m[10] *= r,
					this.m[3] *= t,
					this.m[7] *= e,
					this.m[11] *= r
				},
				R.prototype.rotateX = function(t) {
					var e = Lt.fcos(t),
					r = Lt._$9(t),
					i = this.m[4];
					this.m[4] = i * e + this.m[8] * r,
					this.m[8] = i * -r + this.m[8] * e,
					i = this.m[5],
					this.m[5] = i * e + this.m[9] * r,
					this.m[9] = i * -r + this.m[9] * e,
					i = this.m[6],
					this.m[6] = i * e + this.m[10] * r,
					this.m[10] = i * -r + this.m[10] * e,
					i = this.m[7],
					this.m[7] = i * e + this.m[11] * r,
					this.m[11] = i * -r + this.m[11] * e
				},
				R.prototype.rotateY = function(t) {
					var e = Lt.fcos(t),
					r = Lt._$9(t),
					i = this.m[0];
					this.m[0] = i * e + this.m[8] * -r,
					this.m[8] = i * r + this.m[8] * e,
					i = this.m[1],
					this.m[1] = i * e + this.m[9] * -r,
					this.m[9] = i * r + this.m[9] * e,
					i = m[2],
					this.m[2] = i * e + this.m[10] * -r,
					this.m[10] = i * r + this.m[10] * e,
					i = m[3],
					this.m[3] = i * e + this.m[11] * -r,
					this.m[11] = i * r + this.m[11] * e
				},
				R.prototype.rotateZ = function(t) {
					var e = Lt.fcos(t),
					r = Lt._$9(t),
					i = this.m[0];
					this.m[0] = i * e + this.m[4] * r,
					this.m[4] = i * -r + this.m[4] * e,
					i = this.m[1],
					this.m[1] = i * e + this.m[5] * r,
					this.m[5] = i * -r + this.m[5] * e,
					i = this.m[2],
					this.m[2] = i * e + this.m[6] * r,
					this.m[6] = i * -r + this.m[6] * e,
					i = this.m[3],
					this.m[3] = i * e + this.m[7] * r,
					this.m[7] = i * -r + this.m[7] * e
				},
				C.prototype = new st,
				C._$tP = new Object,
				C._$27 = function() {
					C._$tP.clear()
				},
				C.getID = function(t) {
					var e = C._$tP[t];
					return null == e && (e = new C(t), C._$tP[t] = e),
					e
				},
				C.prototype._$3s = function() {
					return new C
				},
				F._$kS = -1,
				F._$pS = 0,
				F._$hb = 1,
				F.STATE_IDENTITY = 0,
				F._$gb = 1,
				F._$fo = 2,
				F._$go = 4,
				F.prototype.transform = function(t, e, r) {
					var i, s, o, n, a, _, h = 0,
					l = 0;
					switch (this._$hi) {
					default:
						return;
					case F._$go | F._$fo | F._$gb: for (i = this._$7, s = this._$H, o = this._$k, n = this._$f, a = this._$g, _ = this._$w; --r >= 0;) {
							var $ = t[h++],
							u = t[h++];
							e[l++] = i * $ + s * u + o,
							e[l++] = n * $ + a * u + _
						}
						return;
					case F._$go | F._$fo: for (i = this._$7, s = this._$H, n = this._$f, a = this._$g; --r >= 0;) {
							$ = t[h++],
							u = t[h++];
							e[l++] = i * $ + s * u,
							e[l++] = n * $ + a * u
						}
						return;
					case F._$go | F._$gb: for (s = this._$H, o = this._$k, n = this._$f, _ = this._$w; --r >= 0;) {
							$ = t[h++];
							e[l++] = s * t[h++] + o,
							e[l++] = n * $ + _
						}
						return;
					case F._$go:
						for (s = this._$H, n = this._$f; --r >= 0;) {
							$ = t[h++];
							e[l++] = s * t[h++],
							e[l++] = n * $
						}
						return;
					case F._$fo | F._$gb: for (i = this._$7, o = this._$k, a = this._$g, _ = this._$w; --r >= 0;) e[l++] = i * t[h++] + o,
						e[l++] = a * t[h++] + _;
						return;
					case F._$fo:
						for (i = this._$7, a = this._$g; --r >= 0;) e[l++] = i * t[h++],
						e[l++] = a * t[h++];
						return;
					case F._$gb:
						for (o = this._$k, _ = this._$w; --r >= 0;) e[l++] = t[h++] + o,
						e[l++] = t[h++] + _;
						return;
					case F.STATE_IDENTITY:
						return void(t == e && h == l || I._$jT(t, h, e, l, 2 * r))
					}
				},
				F.prototype.update = function() {
					0 == this._$H && 0 == this._$f ? 1 == this._$7 && 1 == this._$g ? 0 == this._$k && 0 == this._$w ? (this._$hi = F.STATE_IDENTITY, this._$Z = F._$pS) : (this._$hi = F._$gb, this._$Z = F._$hb) : 0 == this._$k && 0 == this._$w ? (this._$hi = F._$fo, this._$Z = F._$kS) : (this._$hi = F._$fo | F._$gb, this._$Z = F._$kS) : 0 == this._$7 && 0 == this._$g ? 0 == this._$k && 0 == this._$w ? (this._$hi = F._$go, this._$Z = F._$kS) : (this._$hi = F._$go | F._$gb, this._$Z = F._$kS) : 0 == this._$k && 0 == this._$w ? (this._$hi = F._$go | F._$fo, this._$Z = F._$kS) : (this._$hi = F._$go | F._$fo | F._$gb, this._$Z = F._$kS)
				},
				F.prototype._$RT = function(t) {
					this._$IT(t);
					var e = t[0],
					r = t[2],
					i = t[1],
					s = t[3],
					o = Math.sqrt(e * e + i * i),
					n = e * s - r * i;
					0 == o ? ht._$so && console.log("affine._$RT() / rt==0") : (t[0] = o, t[1] = n / o, t[2] = (i * s + e * r) / n, t[3] = Math.atan2(i, e))
				},
				F.prototype._$ho = function(t, e, r, i) {
					var s = new Float32Array(6),
					o = new Float32Array(6);
					t._$RT(s),
					e._$RT(o);
					var n = new Float32Array(6);
					n[0] = s[0] + (o[0] - s[0]) * r,
					n[1] = s[1] + (o[1] - s[1]) * r,
					n[2] = s[2] + (o[2] - s[2]) * r,
					n[3] = s[3] + (o[3] - s[3]) * r,
					n[4] = s[4] + (o[4] - s[4]) * r,
					n[5] = s[5] + (o[5] - s[5]) * r,
					i._$CT(n)
				},
				F.prototype._$CT = function(t) {
					var e = Math.cos(t[3]),
					r = Math.sin(t[3]);
					this._$7 = t[0] * e,
					this._$f = t[0] * r,
					this._$H = t[1] * (t[2] * e - r),
					this._$g = t[1] * (t[2] * r + e),
					this._$k = t[4],
					this._$w = t[5],
					this.update()
				},
				F.prototype._$IT = function(t) {
					t[0] = this._$7,
					t[1] = this._$f,
					t[2] = this._$H,
					t[3] = this._$g,
					t[4] = this._$k,
					t[5] = this._$w
				},
				N.prototype = new a,
				N._$cs = "VISIBLE:",
				N._$ar = "LAYOUT:",
				N._$Co = 0,
				N._$D2 = [],
				N._$1T = 1,
				N.loadMotion = function(t) {
					var e = new N,
					r = [0],
					i = t.length;
					e._$yT = 0;
					for (var s = 0; s < i; ++s) {
						var o = 255 & t[s];
						if ("\n" != o && "\r" != o) if ("#" != o) if ("$" != o) {
							if ("a" <= o && o <= "z" || "A" <= o && o <= "Z" || "_" == o) {
								for (h = s, l = -1; s < i && ("\r" != (o = 255 & t[s]) && "\n" != o); ++s) if ("=" == o) {
									l = s;
									break
								}
								if (l >= 0) {
									var n = new k;
									O.startsWith(t, h, N._$cs) ? (n._$RP = k._$hs, n._$4P = new String(t, h, l - h)) : O.startsWith(t, h, N._$ar) ? (n._$4P = new String(t, h + 7, l - h - 7), O.startsWith(t, h + 7, "ANCHOR_X") ? n._$RP = k._$xs: O.startsWith(t, h + 7, "ANCHOR_Y") ? n._$RP = k._$us: O.startsWith(t, h + 7, "SCALE_X") ? n._$RP = k._$qs: O.startsWith(t, h + 7, "SCALE_Y") ? n._$RP = k._$Ys: O.startsWith(t, h + 7, "X") ? n._$RP = k._$ws: O.startsWith(t, h + 7, "Y") && (n._$RP = k._$Ns)) : (n._$RP = k._$Fr, n._$4P = new String(t, h, l - h)),
									e.motions.push(n);
									var a = 0;
									for (N._$D2.clear(), s = l + 1; s < i && ("\r" != (o = 255 & t[s]) && "\n" != o); ++s) if ("," != o && " " != o && "\t" != o) {
										u = O._$LS(t, i, s, r);
										if (r[0] > 0) {
											N._$D2.push(u),
											a++;
											var _ = r[0];
											if (_ < s) {
												console.log("_$n0 _$hi . @Live2DMotion loadMotion()\n");
												break
											}
											s = _
										}
									}
									n._$I0 = N._$D2._$BL(),
									a > e._$yT && (e._$yT = a)
								}
							}
						} else {
							for (var h = s,
							l = -1; s < i && ("\r" != (o = 255 & t[s]) && "\n" != o); ++s) if ("=" == o) {
								l = s;
								break
							}
							var $ = !1;
							if (l >= 0) for (l == h + 4 && "f" == t[h + 1] && "p" == t[h + 2] && "s" == t[h + 3] && ($ = !0), s = l + 1; s < i && ("\r" != (o = 255 & t[s]) && "\n" != o); ++s) if ("," != o && " " != o && "\t" != o) {
								var u = O._$LS(t, i, s, r);
								r[0] > 0 && $ && 5 < u && u < 121 && (e._$D0 = u),
								s = r[0]
							}
							for (; s < i && ("\n" != t[s] && "\r" != t[s]); ++s);
						} else for (; s < i && ("\n" != t[s] && "\r" != t[s]); ++s);
					}
					return e._$AS = 1e3 * e._$yT / e._$D0 | 0,
					e
				},
				N.prototype.getDurationMSec = function() {
					return this._$AS
				},
				N.prototype.dump = function() {
					for (var t = 0; t < this.motions.length; t++) {
						var e = this.motions[t];
						console.log("_$wL[%s] [%d]. ", e._$4P, e._$I0.length);
						for (var r = 0; r < e._$I0.length && r < 10; r++) console.log("%5.2f ,", e._$I0[r]);
						console.log("\n")
					}
				},
				N.prototype.updateParamExe = function(t, e, r, i) {
					for (var s = (e - i._$z2) * this._$D0 / 1e3, o = 0 | s, n = s - o, a = 0; a < this.motions.length; a++) {
						var _ = this.motions[a],
						h = _._$I0.length,
						l = _._$4P;
						if (_._$RP == k._$hs) {
							var $ = _._$I0[o >= h ? h - 1 : o];
							t.setParamFloat(l, $)
						} else if (k._$ws <= _._$RP && _._$RP <= k._$Ys);
						else {
							var u = t.getParamFloat(l),
							p = _._$I0[o >= h ? h - 1 : o],
							f = u + (p + (_._$I0[o + 1 >= h ? h - 1 : o + 1] - p) * n - u) * r;
							t.setParamFloat(l, f)
						}
					}
					o >= this._$yT && (this._$E ? (i._$z2 = e, this.loopFadeIn && (i._$bs = e)) : i._$9L = !0)
				},
				N.prototype._$r0 = function() {
					return this._$E
				},
				N.prototype._$aL = function(t) {
					this._$E = t
				},
				N.prototype.isLoopFadeIn = function() {
					return this.loopFadeIn
				},
				N.prototype.setLoopFadeIn = function(t) {
					this.loopFadeIn = t
				},
				B.prototype.clear = function() {
					this.size = 0
				},
				B.prototype.add = function(t) {
					if (this._$P.length <= this.size) {
						var e = new Float32Array(2 * this.size);
						I._$jT(this._$P, 0, e, 0, this.size),
						this._$P = e
					}
					this._$P[this.size++] = t
				},
				B.prototype._$BL = function() {
					var t = new Float32Array(this.size);
					return I._$jT(this._$P, 0, t, 0, this.size),
					t
				},
				k._$Fr = 0,
				k._$hs = 1,
				k._$ws = 100,
				k._$Ns = 101,
				k._$xs = 102,
				k._$us = 103,
				k._$qs = 104,
				k._$Ys = 105,
				U._$Ms = 1,
				U._$Qs = 2,
				U._$i2 = 0,
				U._$No = 2,
				U._$do = U._$Ms,
				U._$Ls = !0,
				U._$1r = 5,
				U._$Qb = 65,
				U._$J = 1e-4,
				U._$FT = .001,
				U._$Ss = 3,
				G._$o7 = 6,
				G._$S7 = 7,
				G._$s7 = 8,
				G._$77 = 9,
				G.LIVE2D_FORMAT_VERSION_V2_10_SDK2 = 10,
				G.LIVE2D_FORMAT_VERSION_V2_11_SDK2_1 = 11,
				G._$T7 = G.LIVE2D_FORMAT_VERSION_V2_11_SDK2_1,
				G._$Is = -2004318072,
				G._$h0 = 0,
				G._$4L = 23,
				G._$7P = 33,
				G._$uT = function(t) {
					console.log("_$bo :: _$6 _$mo _$E0 : %d\n", t)
				},
				G._$9o = function(t) {
					if (t < 40) return G._$uT(t),
					null;
					if (t < 50) return G._$uT(t),
					null;
					if (t < 60) return G._$uT(t),
					null;
					if (t < 100) switch (t) {
					case 65:
						return new tt;
					case 66:
						return new D;
					case 67:
						return new A;
					case 68:
						return new W;
					case 69:
						return new T;
					case 70:
						return new ut;
					default:
						return G._$uT(t),
						null
					} else if (t < 150) switch (t) {
					case 131:
						return new at;
					case 133:
						return new rt;
					case 136:
						return new p;
					case 137:
						return new ot;
					case 142:
						return new J
					}
					return G._$uT(t),
					null
				},
				Y._$HP = 0,
				Y._$_0 = !0,
				Y._$V2 = -1,
				Y._$W0 = -1,
				Y._$jr = !1,
				Y._$ZS = !0,
				Y._$tr = -1e6,
				Y._$lr = 1e6,
				Y._$is = 32,
				Y._$e = !1,
				Y.prototype.getDrawDataIndex = function(t) {
					for (var e = this._$aS.length - 1; e >= 0; --e) if (null != this._$aS[e] && this._$aS[e].getDrawDataID() == t) return e;
					return - 1
				},
				Y.prototype.getDrawData = function(t) {
					if (t instanceof C) {
						if (null == this._$Bo) {
							this._$Bo = new Object;
							for (var e = this._$aS.length,
							r = 0; r < e; r++) {
								var i = this._$aS[r],
								s = i.getDrawDataID();
								null != s && (this._$Bo[s] = i)
							}
						}
						return this._$Bo[id]
					}
					return t < this._$aS.length ? this._$aS[t] : null
				},
				Y.prototype.release = function() {
					this._$3S.clear(),
					this._$aS.clear(),
					this._$F2.clear(),
					null != this._$Bo && this._$Bo.clear(),
					this._$db.clear(),
					this._$8b.clear(),
					this._$Hr.clear()
				},
				Y.prototype.init = function() {
					this._$co++,
					this._$F2.length > 0 && this.release();
					for (var t = this._$Ri.getModelImpl(), e = t._$Xr(), r = e.length, s = new Array, o = new Array, n = 0; n < r; ++n) {
						var a = e[n];
						this._$F2.push(a),
						this._$Hr.push(a.init(this));
						for (var _ = a.getBaseData(), h = _.length, l = 0; l < h; ++l) s.push(_[l]);
						for (l = 0; l < h; ++l) {
							var $ = _[l].init(this);
							$._$l2(n),
							o.push($)
						}
						var u = a.getDrawData(),
						p = u.length;
						for (l = 0; l < p; ++l) {
							var f = u[l],
							c = f.init(this);
							c._$IP = n,
							this._$aS.push(f),
							this._$8b.push(c)
						}
					}
					for (var d = s.length,
					g = yt._$2o();;) {
						var m = !1;
						for (n = 0; n < d; ++n) {
							var y = s[n];
							if (null != y) {
								var x = y.getTargetBaseDataID(); (null == x || x == g || this.getBaseDataIndex(x) >= 0) && (this._$3S.push(y), this._$db.push(o[n]), s[n] = null, m = !0)
							}
						}
						if (!m) break
					}
					var T = t._$E2();
					if (null != T) {
						var P = T._$1s();
						if (null != P) {
							var S = P.length;
							for (n = 0; n < S; ++n) {
								var v = P[n];
								null != v && this._$02(v.getParamID(), v.getDefaultValue(), v.getMinValue(), v.getMaxValue())
							}
						}
					}
					this.clipManager = new i(this.dp_webgl),
					this.clipManager.init(this, this._$aS, this._$8b),
					this._$QT = !0
				},
				Y.prototype.update = function() {
					Y._$e && _.start("_$zL");
					for (var t = this._$_2.length,
					e = 0; e < t; e++) this._$_2[e] != this._$vr[e] && (this._$Js[e] = Y._$ZS, this._$vr[e] = this._$_2[e]);
					var r = this._$3S.length,
					i = this._$aS.length,
					s = q._$or(),
					o = q._$Pr() - s + 1; (null == this._$Ws || this._$Ws.length < o) && (this._$Ws = new Int16Array(o), this._$Vs = new Int16Array(o));
					for (e = 0; e < o; e++) this._$Ws[e] = Y._$V2,
					this._$Vs[e] = Y._$V2; (null == this._$Er || this._$Er.length < i) && (this._$Er = new Int16Array(i));
					for (e = 0; e < i; e++) this._$Er[e] = Y._$W0;
					Y._$e && _.dump("_$zL"),
					Y._$e && _.start("_$UL");
					for (var n = null,
					a = 0; a < r; ++a) {
						var h = this._$3S[a],
						l = this._$db[a];
						try {
							h._$Nr(this, l),
							h._$2b(this, l)
						} catch(t) {
							null == n && (n = t)
						}
					}
					null != n && Y._$_0 && _._$Rb(n),
					Y._$e && _.dump("_$UL"),
					Y._$e && _.start("_$DL");
					for (var $ = null,
					u = 0; u < i; ++u) {
						var p = this._$aS[u],
						f = this._$8b[u];
						try {
							if (p._$Nr(this, f), f._$u2()) continue;
							p._$2b(this, f);
							var c, d = Math.floor(p._$zS(this, f) - s);
							try {
								c = this._$Vs[d]
							} catch(t) {
								console.log("_$li :: %s / %s \t\t\t\t@@_$fS\n", t.toString(), p.getDrawDataID().toString()),
								d = Math.floor(p._$zS(this, f) - s);
								continue
							}
							c == Y._$V2 ? this._$Ws[d] = u: this._$Er[c] = u,
							this._$Vs[d] = u
						} catch(t) {
							null == $ && ($ = t, ht._$sT(ht._$H7))
						}
					}
					null != $ && Y._$_0 && _._$Rb($),
					Y._$e && _.dump("_$DL"),
					Y._$e && _.start("_$eL");
					for (e = this._$Js.length - 1; e >= 0; e--) this._$Js[e] = Y._$jr;
					return this._$QT = !1,
					Y._$e && _.dump("_$eL"),
					!1
				},
				Y.prototype.preDraw = function(t) {
					null != this.clipManager && (t._$ZT(), this.clipManager.setupClip(this, t))
				},
				Y.prototype.draw = function(t) {
					if (null != this._$Ws) {
						var e = this._$Ws.length;
						t._$ZT();
						for (var r = 0; r < e; ++r) {
							var i = this._$Ws[r];
							if (i != Y._$V2) for (;;) {
								var s = this._$aS[i],
								o = this._$8b[i];
								if (o._$yo()) {
									var n = o._$IP,
									a = this._$Hr[n];
									o._$VS = a.getPartsOpacity(),
									s.draw(t, this, o)
								}
								var h = this._$Er[i];
								if (h <= i || h == Y._$W0) break;
								i = h
							}
						}
					} else _._$li("call _$Ri.update() before _$Ri.draw() ")
				},
				Y.prototype.getParamIndex = function(t) {
					for (var e = this._$pb.length - 1; e >= 0; --e) if (this._$pb[e] == t) return e;
					return this._$02(t, 0, Y._$tr, Y._$lr)
				},
				Y.prototype._$BS = function(t) {
					return this.getBaseDataIndex(t)
				},
				Y.prototype.getBaseDataIndex = function(t) {
					for (var e = this._$3S.length - 1; e >= 0; --e) if (null != this._$3S[e] && this._$3S[e].getBaseDataID() == t) return e;
					return - 1
				},
				Y.prototype._$UT = function(t, e) {
					var r = new Float32Array(e);
					return I._$jT(t, 0, r, 0, t.length),
					r
				},
				Y.prototype._$02 = function(t, e, r, i) {
					if (this._$qo >= this._$pb.length) {
						var s = this._$pb.length,
						o = new Array(2 * s);
						I._$jT(this._$pb, 0, o, 0, s),
						this._$pb = o,
						this._$_2 = this._$UT(this._$_2, 2 * s),
						this._$vr = this._$UT(this._$vr, 2 * s),
						this._$Rr = this._$UT(this._$Rr, 2 * s),
						this._$Or = this._$UT(this._$Or, 2 * s);
						var n = new Array;
						I._$jT(this._$Js, 0, n, 0, s),
						this._$Js = n
					}
					return this._$pb[this._$qo] = t,
					this._$_2[this._$qo] = e,
					this._$vr[this._$qo] = e,
					this._$Rr[this._$qo] = r,
					this._$Or[this._$qo] = i,
					this._$Js[this._$qo] = Y._$ZS,
					this._$qo++
				},
				Y.prototype._$Zo = function(t, e) {
					this._$3S[t] = e
				},
				Y.prototype.setParamFloat = function(t, e) {
					e < this._$Rr[t] && (e = this._$Rr[t]),
					e > this._$Or[t] && (e = this._$Or[t]),
					this._$_2[t] = e
				},
				Y.prototype.loadParam = function() {
					var t = this._$_2.length;
					t > this._$fs.length && (t = this._$fs.length),
					I._$jT(this._$fs, 0, this._$_2, 0, t)
				},
				Y.prototype.saveParam = function() {
					var t = this._$_2.length;
					t > this._$fs.length && (this._$fs = new Float32Array(t)),
					I._$jT(this._$_2, 0, this._$fs, 0, t)
				},
				Y.prototype._$v2 = function() {
					return this._$co
				},
				Y.prototype._$WS = function() {
					return this._$QT
				},
				Y.prototype._$Xb = function(t) {
					return this._$Js[t] == Y._$ZS
				},
				Y.prototype._$vs = function() {
					return this._$Es
				},
				Y.prototype._$Tr = function() {
					return this._$ZP
				},
				Y.prototype.getBaseData = function(t) {
					return this._$3S[t]
				},
				Y.prototype.getParamFloat = function(t) {
					return this._$_2[t]
				},
				Y.prototype.getParamMax = function(t) {
					return this._$Or[t]
				},
				Y.prototype.getParamMin = function(t) {
					return this._$Rr[t]
				},
				Y.prototype.setPartsOpacity = function(t, e) {
					this._$Hr[t].setPartsOpacity(e)
				},
				Y.prototype.getPartsOpacity = function(t) {
					return this._$Hr[t].getPartsOpacity()
				},
				Y.prototype.getPartsDataIndex = function(t) {
					for (var e = this._$F2.length - 1; e >= 0; --e) if (null != this._$F2[e] && this._$F2[e]._$p2() == t) return e;
					return - 1
				},
				Y.prototype._$q2 = function(t) {
					return this._$db[t]
				},
				Y.prototype._$C2 = function(t) {
					return this._$8b[t]
				},
				Y.prototype._$Bb = function(t) {
					return this._$Hr[t]
				},
				Y.prototype._$5s = function(t, e) {
					for (var r = this._$Ws.length,
					i = t,
					s = 0; s < r; ++s) {
						var o = this._$Ws[s];
						if (o != Y._$V2) for (;;) {
							var n = this._$8b[o];
							n._$yo() && (n._$GT()._$B2(this, n, i), i += e);
							var a = this._$Er[o];
							if (a <= o || a == Y._$W0) break;
							o = a
						}
					}
				},
				Y.prototype.setDrawParam = function(t) {
					this.dp_webgl = t
				},
				Y.prototype.getDrawParam = function() {
					return this.dp_webgl
				},
				V._$0T = function(t) {
					return V._$0T(new _$5(t))
				},
				V._$0T = function(t) {
					if (!t.exists()) throw new _$ls(t._$3b());
					for (var e, r = t.length(), i = new Int8Array(r), s = new _$Xs(new _$kb(t), 8192), o = 0; (e = s.read(i, o, r - o)) > 0;) o += e;
					return i
				},
				V._$C = function(t) {
					var e = null,
					r = null;
					try {
						e = t instanceof Array ? t: new _$Xs(t, 8192),
						r = new _$js;
						for (var i, s = new Int8Array(1e3); (i = e.read(s)) > 0;) r.write(s, 0, i);
						return r._$TS()
					} finally {
						null != t && t.close(),
						null != r && (r.flush(), r.close())
					}
				},
				X.prototype._$T2 = function() {
					return I.getUserTimeMSec() + Math._$10() * (2 * this._$Br - 1)
				},
				X.prototype._$uo = function(t) {
					this._$Br = t
				},
				X.prototype._$QS = function(t, e, r) {
					this._$Dr = t,
					this._$Cb = e,
					this._$mr = r
				},
				X.prototype._$7T = function(t) {
					var e, r = I.getUserTimeMSec(),
					i = 0;
					switch (this._$_L) {
					case STATE_CLOSING:
						(i = (r - this._$bb) / this._$Dr) >= 1 && (i = 1, this._$_L = H.STATE_CLOSED, this._$bb = r),
						e = 1 - i;
						break;
					case STATE_CLOSED:
						(i = (r - this._$bb) / this._$Cb) >= 1 && (this._$_L = H.STATE_OPENING, this._$bb = r),
						e = 0;
						break;
					case STATE_OPENING:
						(i = (r - this._$bb) / this._$mr) >= 1 && (i = 1, this._$_L = H.STATE_INTERVAL, this._$12 = this._$T2()),
						e = i;
						break;
					case STATE_INTERVAL:
						this._$12 < r && (this._$_L = H.STATE_CLOSING, this._$bb = r),
						e = 1;
						break;
					case STATE_FIRST:
					default:
						this._$_L = H.STATE_INTERVAL,
						this._$12 = this._$T2(),
						e = 1
					}
					this._$jo || (e = -e),
					t.setParamFloat(this._$iL, e),
					t.setParamFloat(this._$0L, e)
				};
				var H = function() {};
				function z() {
					e || (M.prototype.constructor.call(this), this._$sb = new Int32Array(z._$As), this._$U2 = new Array, this.transform = null, this.gl = null, null == z._$NT && (z._$NT = z._$9r(256), z._$vS = z._$9r(256), z._$no = z._$vb(256)))
				}
				function W() {
					e || (b.prototype.constructor.call(this), this._$GS = null, this._$Y0 = null)
				}
				function j(t) {
					_t.prototype.constructor.call(this, t),
					this._$8r = b._$ur,
					this._$Yr = null,
					this._$Wr = null
				}
				function q() {
					e || (w.prototype.constructor.call(this), this._$gP = null, this._$dr = null, this._$GS = null, this._$qb = null, this._$Lb = null, this._$mS = null)
				}
				function J() {
					e || (this._$NL = null, this._$3S = null, this._$aS = null, J._$42++)
				}
				function Q() {
					e || (r.prototype.constructor.call(this), this._$zo = new z)
				}
				function Z() {
					e || (a.prototype.constructor.call(this), this.motions = new Array, this._$o2 = null, this._$7r = Z._$Co++, this._$D0 = 30, this._$yT = 0, this._$E = !1, this.loopFadeIn = !0, this._$rr = -1, this._$eP = 0)
				}
				function K(t, e) {
					return String.fromCharCode(t.getUint8(e))
				}
				function B() {
					this._$P = new Float32Array(100),
					this.size = 0
				}
				function k() {
					this._$4P = null,
					this._$I0 = null,
					this._$RP = null
				}
				function tt() {
					e || (b.prototype.constructor.call(this), this._$o = 0, this._$A = 0, this._$GS = null, this._$Eo = null)
				}
				function et(t) {
					_t.prototype.constructor.call(this, t),
					this._$8r = b._$ur,
					this._$Cr = null,
					this._$hr = null
				}
				function rt() {
					e || (this.visible = !0, this._$g0 = !1, this._$NL = null, this._$3S = null, this._$aS = null, rt._$42++)
				}
				function it(t) {
					this._$VS = null,
					this._$e0 = null,
					this._$e0 = t
				}
				function st(t) {
					e || (this.id = t)
				}
				function ot() {
					e || (this._$4S = null)
				}
				function nt(t, e) {
					this.canvas = t,
					this.context = e,
					this.viewport = new Array(0, 0, t.width, t.height),
					this._$6r = 1,
					this._$xP = 0,
					this._$3r = 1,
					this._$uP = 0,
					this._$Qo = -1,
					this.cacheImages = {}
				}
				function at() {
					e || (this._$TT = null, this._$LT = null, this._$FS = null, this._$wL = null)
				}
				function _t(t) {
					e || (this._$e0 = null, this._$IP = null, this._$JS = !1, this._$AT = !0, this._$e0 = t, this.totalScale = 1, this._$7s = 1, this.totalOpacity = 1)
				}
				function ht() {}
				function lt() {}
				function $t(t) {
					e || (this._$ib = t)
				}
				function ut() {
					e || (q.prototype.constructor.call(this), this._$LP = -1, this._$d0 = 0, this._$Yo = 0, this._$JP = null, this._$5P = null, this._$BP = null, this._$Eo = null, this._$Qi = null, this._$6s = ut._$ms, this.culling = !0, this.gl_cacheImage = null, this.instanceNo = ut._$42++)
				}
				function pt(t) {
					wt.prototype.constructor.call(this, t),
					this._$8r = q._$ur,
					this._$Cr = null,
					this._$hr = null
				}
				function ft() {
					e || (this.x = null, this.y = null)
				}
				function ct(t) {
					e || (r.prototype.constructor.call(this), this.drawParamWebGL = new xt(t), this.drawParamWebGL.setGL(ht.getGL(t)))
				}
				function dt() {
					e || (this.motions = null, this._$eb = !1, this.motions = new Array)
				}
				function gt() {
					this._$w0 = null,
					this._$AT = !0,
					this._$9L = !1,
					this._$z2 = -1,
					this._$bs = -1,
					this._$Do = -1,
					this._$sr = null,
					this._$sr = gt._$Gs++
				}
				function mt() {
					this.m = new Array(1, 0, 0, 0, 1, 0, 0, 0, 1)
				}
				function yt(t) {
					e || st.prototype.constructor.call(this, t)
				}
				function xt(t) {
					e || (M.prototype.constructor.call(this), this.textures = new Array, this.transform = null, this.gl = null, this.glno = t, this.firstDraw = !0, this.anisotropyExt = null, this.maxAnisotropy = 0, this._$As = 32, this._$Gr = !1, this._$NT = null, this._$vS = null, this._$no = null, this.vertShader = null, this.fragShader = null, this.vertShaderOff = null, this.fragShaderOff = null)
				}
				function Tt(t, e, r) {
					return null == e && (e = t.createBuffer()),
					t.bindBuffer(t.ARRAY_BUFFER, e),
					t.bufferData(t.ARRAY_BUFFER, r, t.DYNAMIC_DRAW),
					e
				}
				function Pt(t, e, r) {
					return null == e && (e = t.createBuffer()),
					t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, e),
					t.bufferData(t.ELEMENT_ARRAY_BUFFER, r, t.DYNAMIC_DRAW),
					e
				}
				function St(t) {
					e || (this._$P = new Int8Array(8), this._$R0 = new DataView(this._$P.buffer), this._$3i = new Int8Array(1e3), this._$hL = 0, this._$v0 = 0, this._$S2 = 0, this._$Ko = new Array, this._$T = t, this._$F = 0)
				}
				H.STATE_FIRST = "STATE_FIRST",
				H.STATE_INTERVAL = "STATE_INTERVAL",
				H.STATE_CLOSING = "STATE_CLOSING",
				H.STATE_CLOSED = "STATE_CLOSED",
				H.STATE_OPENING = "STATE_OPENING",
				z.prototype = new M,
				z._$As = 32,
				z._$Gr = !1,
				z._$NT = null,
				z._$vS = null,
				z._$no = null,
				z._$9r = function(t) {
					return new Float32Array(t)
				},
				z._$vb = function(t) {
					return new Int16Array(t)
				},
				z._$cr = function(t, e) {
					return null == t || t._$yL() < e.length ? ((t = z._$9r(2 * e.length)).put(e), t._$oT(0)) : (t.clear(), t.put(e), t._$oT(0)),
					t
				},
				z._$mb = function(t, e) {
					return null == t || t._$yL() < e.length ? ((t = z._$vb(2 * e.length)).put(e), t._$oT(0)) : (t.clear(), t.put(e), t._$oT(0)),
					t
				},
				z._$Hs = function() {
					return z._$Gr
				},
				z._$as = function(t) {
					z._$Gr = t
				},
				z.prototype.setGL = function(t) {
					this.gl = t
				},
				z.prototype.setTransform = function(t) {
					this.transform = t
				},
				z.prototype._$ZT = function() {},
				z.prototype._$Uo = function(t, e, r, i, s, o, n, a) {
					if (! (o < .01)) {
						var _ = this._$U2[t],
						h = o > .9 ? ht.EXPAND_W: 0;
						this.gl.drawElements(_, r, i, s, o, h, this.transform, a)
					}
				},
				z.prototype._$Rs = function() {
					throw new Error("_$Rs")
				},
				z.prototype._$Ds = function(t) {
					throw new Error("_$Ds")
				},
				z.prototype._$K2 = function() {
					for (var t = 0; t < this._$sb.length; t++) {
						0 != this._$sb[t] && (this.gl._$Sr(1, this._$sb, t), this._$sb[t] = 0)
					}
				},
				z.prototype.setTexture = function(t, e) {
					this._$sb.length < t + 1 && this._$nS(t),
					this._$sb[t] = e
				},
				z.prototype.setTexture = function(t, e) {
					this._$sb.length < t + 1 && this._$nS(t),
					this._$U2[t] = e
				},
				z.prototype._$nS = function(t) {
					var e = Math.max(2 * this._$sb.length, t + 1 + 10),
					r = new Int32Array(e);
					I._$jT(this._$sb, 0, r, 0, this._$sb.length),
					this._$sb = r;
					var i = new Array;
					I._$jT(this._$U2, 0, i, 0, this._$U2.length),
					this._$U2 = i
				},
				W.prototype = new b,
				W._$Xo = new Float32Array(2),
				W._$io = new Float32Array(2),
				W._$0o = new Float32Array(2),
				W._$Lo = new Float32Array(2),
				W._$To = new Float32Array(2),
				W._$Po = new Float32Array(2),
				W._$gT = new Array,
				W.prototype._$zP = function() {
					this._$GS = new D,
					this._$GS._$zP(),
					this._$Y0 = new Array
				},
				W.prototype.getType = function() {
					return b._$c2
				},
				W.prototype._$F0 = function(t) {
					b.prototype._$F0.call(this, t),
					this._$GS = t._$nP(),
					this._$Y0 = t._$nP(),
					b.prototype.readV2_opacity.call(this, t)
				},
				W.prototype.init = function(t) {
					var e = new j(this);
					return e._$Yr = new T,
					this._$32() && (e._$Wr = new T),
					e
				},
				W.prototype._$Nr = function(t, e) {
					this != e._$GT() && console.log("### assert!! ### ");
					var r = e;
					if (this._$GS._$Ur(t)) {
						var i = W._$gT;
						i[0] = !1;
						var s = this._$GS._$Q2(t, i);
						e._$Ib(i[0]),
						this.interpolateOpacity(t, this._$GS, e, i);
						var o = t._$vs(),
						n = t._$Tr();
						if (this._$GS._$zr(o, n, s), s <= 0) {
							var a = this._$Y0[o[0]];
							r._$Yr.init(a)
						} else if (1 == s) {
							a = this._$Y0[o[0]];
							var _ = this._$Y0[o[1]],
							h = n[0];
							r._$Yr._$fL = a._$fL + (_._$fL - a._$fL) * h,
							r._$Yr._$gL = a._$gL + (_._$gL - a._$gL) * h,
							r._$Yr._$B0 = a._$B0 + (_._$B0 - a._$B0) * h,
							r._$Yr._$z0 = a._$z0 + (_._$z0 - a._$z0) * h,
							r._$Yr._$qT = a._$qT + (_._$qT - a._$qT) * h
						} else if (2 == s) {
							a = this._$Y0[o[0]],
							_ = this._$Y0[o[1]];
							var l = this._$Y0[o[2]],
							$ = this._$Y0[o[3]],
							u = (h = n[0], n[1]),
							p = a._$fL + (_._$fL - a._$fL) * h,
							f = l._$fL + ($._$fL - l._$fL) * h;
							r._$Yr._$fL = p + (f - p) * u,
							p = a._$gL + (_._$gL - a._$gL) * h,
							f = l._$gL + ($._$gL - l._$gL) * h,
							r._$Yr._$gL = p + (f - p) * u,
							p = a._$B0 + (_._$B0 - a._$B0) * h,
							f = l._$B0 + ($._$B0 - l._$B0) * h,
							r._$Yr._$B0 = p + (f - p) * u,
							p = a._$z0 + (_._$z0 - a._$z0) * h,
							f = l._$z0 + ($._$z0 - l._$z0) * h,
							r._$Yr._$z0 = p + (f - p) * u,
							p = a._$qT + (_._$qT - a._$qT) * h,
							f = l._$qT + ($._$qT - l._$qT) * h,
							r._$Yr._$qT = p + (f - p) * u
						} else if (3 == s) {
							var c = this._$Y0[o[0]],
							d = this._$Y0[o[1]],
							g = this._$Y0[o[2]],
							m = this._$Y0[o[3]],
							y = this._$Y0[o[4]],
							x = this._$Y0[o[5]],
							T = this._$Y0[o[6]],
							P = this._$Y0[o[7]],
							S = (h = n[0], u = n[1], n[2]),
							v = (p = c._$fL + (d._$fL - c._$fL) * h, f = g._$fL + (m._$fL - g._$fL) * h, y._$fL + (x._$fL - y._$fL) * h),
							L = T._$fL + (P._$fL - T._$fL) * h;
							r._$Yr._$fL = (1 - S) * (p + (f - p) * u) + S * (v + (L - v) * u),
							p = c._$gL + (d._$gL - c._$gL) * h,
							f = g._$gL + (m._$gL - g._$gL) * h,
							v = y._$gL + (x._$gL - y._$gL) * h,
							L = T._$gL + (P._$gL - T._$gL) * h,
							r._$Yr._$gL = (1 - S) * (p + (f - p) * u) + S * (v + (L - v) * u),
							p = c._$B0 + (d._$B0 - c._$B0) * h,
							f = g._$B0 + (m._$B0 - g._$B0) * h,
							v = y._$B0 + (x._$B0 - y._$B0) * h,
							L = T._$B0 + (P._$B0 - T._$B0) * h,
							r._$Yr._$B0 = (1 - S) * (p + (f - p) * u) + S * (v + (L - v) * u),
							p = c._$z0 + (d._$z0 - c._$z0) * h,
							f = g._$z0 + (m._$z0 - g._$z0) * h,
							v = y._$z0 + (x._$z0 - y._$z0) * h,
							L = T._$z0 + (P._$z0 - T._$z0) * h,
							r._$Yr._$z0 = (1 - S) * (p + (f - p) * u) + S * (v + (L - v) * u),
							p = c._$qT + (d._$qT - c._$qT) * h,
							f = g._$qT + (m._$qT - g._$qT) * h,
							v = y._$qT + (x._$qT - y._$qT) * h,
							L = T._$qT + (P._$qT - T._$qT) * h,
							r._$Yr._$qT = (1 - S) * (p + (f - p) * u) + S * (v + (L - v) * u)
						} else if (4 == s) {
							var w = this._$Y0[o[0]],
							M = this._$Y0[o[1]],
							E = this._$Y0[o[2]],
							b = this._$Y0[o[3]],
							I = this._$Y0[o[4]],
							A = this._$Y0[o[5]],
							O = this._$Y0[o[6]],
							D = this._$Y0[o[7]],
							R = this._$Y0[o[8]],
							C = this._$Y0[o[9]],
							F = this._$Y0[o[10]],
							N = this._$Y0[o[11]],
							B = this._$Y0[o[12]],
							k = this._$Y0[o[13]],
							U = this._$Y0[o[14]],
							G = this._$Y0[o[15]],
							Y = (h = n[0], u = n[1], S = n[2], n[3]),
							V = (p = w._$fL + (M._$fL - w._$fL) * h, f = E._$fL + (b._$fL - E._$fL) * h, v = I._$fL + (A._$fL - I._$fL) * h, L = O._$fL + (D._$fL - O._$fL) * h, R._$fL + (C._$fL - R._$fL) * h),
							X = F._$fL + (N._$fL - F._$fL) * h,
							H = B._$fL + (k._$fL - B._$fL) * h,
							z = U._$fL + (G._$fL - U._$fL) * h;
							r._$Yr._$fL = (1 - Y) * ((1 - S) * (p + (f - p) * u) + S * (v + (L - v) * u)) + Y * ((1 - S) * (V + (X - V) * u) + S * (H + (z - H) * u)),
							p = w._$gL + (M._$gL - w._$gL) * h,
							f = E._$gL + (b._$gL - E._$gL) * h,
							v = I._$gL + (A._$gL - I._$gL) * h,
							L = O._$gL + (D._$gL - O._$gL) * h,
							V = R._$gL + (C._$gL - R._$gL) * h,
							X = F._$gL + (N._$gL - F._$gL) * h,
							H = B._$gL + (k._$gL - B._$gL) * h,
							z = U._$gL + (G._$gL - U._$gL) * h,
							r._$Yr._$gL = (1 - Y) * ((1 - S) * (p + (f - p) * u) + S * (v + (L - v) * u)) + Y * ((1 - S) * (V + (X - V) * u) + S * (H + (z - H) * u)),
							p = w._$B0 + (M._$B0 - w._$B0) * h,
							f = E._$B0 + (b._$B0 - E._$B0) * h,
							v = I._$B0 + (A._$B0 - I._$B0) * h,
							L = O._$B0 + (D._$B0 - O._$B0) * h,
							V = R._$B0 + (C._$B0 - R._$B0) * h,
							X = F._$B0 + (N._$B0 - F._$B0) * h,
							H = B._$B0 + (k._$B0 - B._$B0) * h,
							z = U._$B0 + (G._$B0 - U._$B0) * h,
							r._$Yr._$B0 = (1 - Y) * ((1 - S) * (p + (f - p) * u) + S * (v + (L - v) * u)) + Y * ((1 - S) * (V + (X - V) * u) + S * (H + (z - H) * u)),
							p = w._$z0 + (M._$z0 - w._$z0) * h,
							f = E._$z0 + (b._$z0 - E._$z0) * h,
							v = I._$z0 + (A._$z0 - I._$z0) * h,
							L = O._$z0 + (D._$z0 - O._$z0) * h,
							V = R._$z0 + (C._$z0 - R._$z0) * h,
							X = F._$z0 + (N._$z0 - F._$z0) * h,
							H = B._$z0 + (k._$z0 - B._$z0) * h,
							z = U._$z0 + (G._$z0 - U._$z0) * h,
							r._$Yr._$z0 = (1 - Y) * ((1 - S) * (p + (f - p) * u) + S * (v + (L - v) * u)) + Y * ((1 - S) * (V + (X - V) * u) + S * (H + (z - H) * u)),
							p = w._$qT + (M._$qT - w._$qT) * h,
							f = E._$qT + (b._$qT - E._$qT) * h,
							v = I._$qT + (A._$qT - I._$qT) * h,
							L = O._$qT + (D._$qT - O._$qT) * h,
							V = R._$qT + (C._$qT - R._$qT) * h,
							X = F._$qT + (N._$qT - F._$qT) * h,
							H = B._$qT + (k._$qT - B._$qT) * h,
							z = U._$qT + (G._$qT - U._$qT) * h,
							r._$Yr._$qT = (1 - Y) * ((1 - S) * (p + (f - p) * u) + S * (v + (L - v) * u)) + Y * ((1 - S) * (V + (X - V) * u) + S * (H + (z - H) * u))
						} else {
							for (var j = 0 | Math.pow(2, s), q = new Float32Array(j), J = 0; J < j; J++) {
								for (var Q = J,
								Z = 1,
								K = 0; K < s; K++) Z *= Q % 2 == 0 ? 1 - n[K] : n[K],
								Q /= 2;
								q[J] = Z
							}
							for (var tt = new Array,
							et = 0; et < j; et++) tt[et] = this._$Y0[o[et]];
							var rt = 0,
							it = 0,
							st = 0,
							ot = 0,
							nt = 0;
							for (et = 0; et < j; et++) rt += q[et] * tt[et]._$fL,
							it += q[et] * tt[et]._$gL,
							st += q[et] * tt[et]._$B0,
							ot += q[et] * tt[et]._$z0,
							nt += q[et] * tt[et]._$qT;
							r._$Yr._$fL = rt,
							r._$Yr._$gL = it,
							r._$Yr._$B0 = st,
							r._$Yr._$z0 = ot,
							r._$Yr._$qT = nt
						}
						a = this._$Y0[o[0]];
						r._$Yr.reflectX = a.reflectX,
						r._$Yr.reflectY = a.reflectY
					}
				},
				W.prototype._$2b = function(t, e) {
					this != e._$GT() && console.log("### assert!! ### ");
					var r = e;
					if (r._$hS(!0), this._$32()) {
						var i = this.getTargetBaseDataID();
						if (r._$8r == b._$ur && (r._$8r = t.getBaseDataIndex(i)), r._$8r < 0) ht._$so && _._$li("_$L _$0P _$G :: %s", i),
						r._$hS(!1);
						else {
							var s = t.getBaseData(r._$8r);
							if (null != s) {
								var o = t._$q2(r._$8r),
								n = W._$Xo;
								n[0] = r._$Yr._$fL,
								n[1] = r._$Yr._$gL;
								var a = W._$io;
								a[0] = 0,
								a[1] = -.1,
								o._$GT().getType() == b._$c2 ? a[1] = -10 : a[1] = -.1;
								var h = W._$0o;
								this._$Jr(t, s, o, n, a, h);
								var l = Lt._$92(a, h);
								s._$nb(t, o, n, n, 1, 0, 2),
								r._$Wr._$fL = n[0],
								r._$Wr._$gL = n[1],
								r._$Wr._$B0 = r._$Yr._$B0,
								r._$Wr._$z0 = r._$Yr._$z0,
								r._$Wr._$qT = r._$Yr._$qT - l * Lt._$NS;
								var $ = o.getTotalScale();
								r.setTotalScale_notForClient($ * r._$Wr._$B0);
								var u = o.getTotalOpacity();
								r.setTotalOpacity(u * r.getInterpolatedOpacity()),
								r._$Wr.reflectX = r._$Yr.reflectX,
								r._$Wr.reflectY = r._$Yr.reflectY,
								r._$hS(o._$yo())
							} else r._$hS(!1)
						}
					} else r.setTotalScale_notForClient(r._$Yr._$B0),
					r.setTotalOpacity(r.getInterpolatedOpacity())
				},
				W.prototype._$nb = function(t, e, r, i, s, o, n) {
					this != e._$GT() && console.log("### assert!! ### ");
					for (var a, _, h = e,
					l = null != h._$Wr ? h._$Wr: h._$Yr, $ = Math.sin(Lt._$bS * l._$qT), u = Math.cos(Lt._$bS * l._$qT), p = h.getTotalScale(), f = l.reflectX ? -1 : 1, c = l.reflectY ? -1 : 1, d = u * p * f, g = -$ * p * c, m = $ * p * f, y = u * p * c, x = l._$fL, T = l._$gL, P = s * n, S = o; S < P; S += n) a = r[S],
					_ = r[S + 1],
					i[S] = d * a + g * _ + x,
					i[S + 1] = m * a + y * _ + T
				},
				W.prototype._$Jr = function(t, e, r, i, s, o) {
					e != r._$GT() && console.log("### assert!! ### ");
					var n = W._$Lo;
					W._$Lo[0] = i[0],
					W._$Lo[1] = i[1],
					e._$nb(t, r, n, n, 1, 0, 2);
					for (var a = W._$To,
					_ = W._$Po,
					h = 1,
					l = 0; l < 10; l++) {
						if (_[0] = i[0] + h * s[0], _[1] = i[1] + h * s[1], e._$nb(t, r, _, a, 1, 0, 2), a[0] -= n[0], a[1] -= n[1], 0 != a[0] || 0 != a[1]) return o[0] = a[0],
						void(o[1] = a[1]);
						if (_[0] = i[0] - h * s[0], _[1] = i[1] - h * s[1], e._$nb(t, r, _, a, 1, 0, 2), a[0] -= n[0], a[1] -= n[1], 0 != a[0] || 0 != a[1]) return a[0] = -a[0],
						a[0] = -a[0],
						o[0] = a[0],
						void(o[1] = a[1]);
						h *= .1
					}
					ht._$so && console.log("_$L0 to transform _$SP\n")
				},
				j.prototype = new _t,
				q.prototype = new w,
				q._$ur = -2,
				q._$ES = 500,
				q._$wb = 2,
				q._$8S = 3,
				q._$os = 4,
				q._$52 = q._$ES,
				q._$R2 = q._$ES,
				q._$Sb = function(t) {
					for (var e = t.length - 1; e >= 0; --e) {
						var r = t[e];
						r < q._$52 ? q._$52 = r: r > q._$R2 && (q._$R2 = r)
					}
				},
				q._$or = function() {
					return q._$52
				},
				q._$Pr = function() {
					return q._$R2
				},
				q.prototype._$F0 = function(t) {
					this._$gP = t._$nP(),
					this._$dr = t._$nP(),
					this._$GS = t._$nP(),
					this._$qb = t._$6L(),
					this._$Lb = t._$cS(),
					this._$mS = t._$Tb(),
					t.getFormatVersion() >= G._$T7 ? (this.clipID = t._$nP(), this.clipIDList = this.convertClipIDForV2_11(this.clipID)) : this.clipIDList = null,
					q._$Sb(this._$Lb)
				},
				q.prototype.getClipIDList = function() {
					return this.clipIDList
				},
				q.prototype._$Nr = function(t, e) {
					if (e._$IS[0] = !1, e._$Us = v._$Z2(t, this._$GS, e._$IS, this._$Lb), ht._$Zs);
					else if (e._$IS[0]) return;
					e._$7s = v._$br(t, this._$GS, e._$IS, this._$mS)
				},
				q.prototype._$2b = function(t) {},
				q.prototype.getDrawDataID = function() {
					return this._$gP
				},
				q.prototype._$j2 = function(t) {
					this._$gP = t
				},
				q.prototype.getOpacity = function(t, e) {
					return e._$7s
				},
				q.prototype._$zS = function(t, e) {
					return e._$Us
				},
				q.prototype.getTargetBaseDataID = function() {
					return this._$dr
				},
				q.prototype._$gs = function(t) {
					this._$dr = t
				},
				q.prototype._$32 = function() {
					return null != this._$dr && this._$dr != yt._$2o()
				},
				q.prototype.getType = function() {},
				J._$42 = 0,
				J.prototype._$1b = function() {
					return this._$3S
				},
				J.prototype.getDrawDataList = function() {
					return this._$aS
				},
				J.prototype._$F0 = function(t) {
					this._$NL = t._$nP(),
					this._$aS = t._$nP(),
					this._$3S = t._$nP()
				},
				J.prototype._$kr = function(t) {
					t._$Zo(this._$3S),
					t._$xo(this._$aS),
					this._$3S = null,
					this._$aS = null
				},
				Q.prototype = new r,
				Q.loadModel = function(t) {
					var e = new Q;
					return r._$62(e, t),
					e
				},
				Q.loadModel = function(t) {
					var e = new Q;
					return r._$62(e, t),
					e
				},
				Q._$to = function() {
					return new Q
				},
				Q._$er = function(t) {
					var e = new _$5("../_$_r/_$t0/_$Ri/_$_P._$d");
					if (0 == e.exists()) throw new _$ls("_$t0 _$_ _$6 _$Ui :: " + e._$PL());
					for (var r = ["../_$_r/_$t0/_$Ri/_$_P.512/_$CP._$1", "../_$_r/_$t0/_$Ri/_$_P.512/_$vP._$1", "../_$_r/_$t0/_$Ri/_$_P.512/_$EP._$1", "../_$_r/_$t0/_$Ri/_$_P.512/_$pP._$1"], i = Q.loadModel(e._$3b()), s = 0; s < r.length; s++) {
						var o = new _$5(r[s]);
						if (0 == o.exists()) throw new _$ls("_$t0 _$_ _$6 _$Ui :: " + o._$PL());
						i.setTexture(s, _$nL._$_o(t, o._$3b()))
					}
					return i
				},
				Q.prototype.setGL = function(t) {
					this._$zo.setGL(t)
				},
				Q.prototype.setTransform = function(t) {
					this._$zo.setTransform(t)
				},
				Q.prototype.draw = function() {
					this._$5S.draw(this._$zo)
				},
				Q.prototype._$K2 = function() {
					this._$zo._$K2()
				},
				Q.prototype.setTexture = function(t, e) {
					null == this._$zo && _._$li("_$Yi for QT _$ki / _$XS() is _$6 _$ui!!"),
					this._$zo.setTexture(t, e)
				},
				Q.prototype.setTexture = function(t, e) {
					null == this._$zo && _._$li("_$Yi for QT _$ki / _$XS() is _$6 _$ui!!"),
					this._$zo.setTexture(t, e)
				},
				Q.prototype._$Rs = function() {
					return this._$zo._$Rs()
				},
				Q.prototype._$Ds = function(t) {
					this._$zo._$Ds(t)
				},
				Q.prototype.getDrawParam = function() {
					return this._$zo
				},
				Z.prototype = new a,
				Z._$cs = "VISIBLE:",
				Z._$ar = "LAYOUT:",
				Z.MTN_PREFIX_FADEIN = "FADEIN:",
				Z.MTN_PREFIX_FADEOUT = "FADEOUT:",
				Z._$Co = 0,
				Z._$1T = 1,
				Z.loadMotion = function(t) {
					var e = V._$C(t);
					return Z.loadMotion(e)
				},
				Z.loadMotion = function(t) {
					t instanceof ArrayBuffer && (t = new DataView(t));
					var e = new Z,
					r = [0],
					i = t.byteLength;
					e._$yT = 0;
					for (var s = 0; s < i; ++s) {
						var o = K(t, s),
						n = o.charCodeAt(0);
						if ("\n" != o && "\r" != o) if ("#" != o) if ("$" != o) {
							if (97 <= n && n <= 122 || 65 <= n && n <= 90 || "_" == o) {
								for ($ = s, u = -1; s < i && ("\r" != (o = K(t, s)) && "\n" != o); ++s) if ("=" == o) {
									u = s;
									break
								}
								if (u >= 0) {
									var a = new k;
									O.startsWith(t, $, Z._$cs) ? (a._$RP = k._$hs, a._$4P = O.createString(t, $, u - $)) : O.startsWith(t, $, Z._$ar) ? (a._$4P = O.createString(t, $ + 7, u - $ - 7), O.startsWith(t, $ + 7, "ANCHOR_X") ? a._$RP = k._$xs: O.startsWith(t, $ + 7, "ANCHOR_Y") ? a._$RP = k._$us: O.startsWith(t, $ + 7, "SCALE_X") ? a._$RP = k._$qs: O.startsWith(t, $ + 7, "SCALE_Y") ? a._$RP = k._$Ys: O.startsWith(t, $ + 7, "X") ? a._$RP = k._$ws: O.startsWith(t, $ + 7, "Y") && (a._$RP = k._$Ns)) : (a._$RP = k._$Fr, a._$4P = O.createString(t, $, u - $)),
									e.motions.push(a);
									var _ = 0,
									h = [];
									for (s = u + 1; s < i && ("\r" != (o = K(t, s)) && "\n" != o); ++s) if ("," != o && " " != o && "\t" != o) {
										f = O._$LS(t, i, s, r);
										if (r[0] > 0) {
											h.push(f),
											_++;
											var l = r[0];
											if (l < s) {
												console.log("_$n0 _$hi . @Live2DMotion loadMotion()\n");
												break
											}
											s = l - 1
										}
									}
									a._$I0 = new Float32Array(h),
									_ > e._$yT && (e._$yT = _)
								}
							}
						} else {
							for (var $ = s,
							u = -1; s < i && ("\r" != (o = K(t, s)) && "\n" != o); ++s) if ("=" == o) {
								u = s;
								break
							}
							var p = !1;
							if (u >= 0) for (u == $ + 4 && "f" == K(t, $ + 1) && "p" == K(t, $ + 2) && "s" == K(t, $ + 3) && (p = !0), s = u + 1; s < i && ("\r" != (o = K(t, s)) && "\n" != o); ++s) if ("," != o && " " != o && "\t" != o) {
								var f = O._$LS(t, i, s, r);
								r[0] > 0 && p && 5 < f && f < 121 && (e._$D0 = f),
								s = r[0]
							}
							for (; s < i && ("\n" != K(t, s) && "\r" != K(t, s)); ++s);
						} else for (; s < i && ("\n" != K(t, s) && "\r" != K(t, s)); ++s);
					}
					return e._$rr = 1e3 * e._$yT / e._$D0 | 0,
					e
				},
				Z.prototype.getDurationMSec = function() {
					return this._$E ? -1 : this._$rr
				},
				Z.prototype.getLoopDurationMSec = function() {
					return this._$rr
				},
				Z.prototype.dump = function() {
					for (var t = 0; t < this.motions.length; t++) {
						var e = this.motions[t];
						console.log("_$wL[%s] [%d]. ", e._$4P, e._$I0.length);
						for (var r = 0; r < e._$I0.length && r < 10; r++) console.log("%5.2f ,", e._$I0[r]);
						console.log("\n")
					}
				},
				Z.prototype.updateParamExe = function(t, e, r, i) {
					for (var s = (e - i._$z2) * this._$D0 / 1e3, o = 0 | s, n = s - o, a = 0; a < this.motions.length; a++) {
						var _ = this.motions[a],
						h = _._$I0.length,
						l = _._$4P;
						if (_._$RP == k._$hs) {
							var $ = _._$I0[o >= h ? h - 1 : o];
							t.setParamFloat(l, $)
						} else if (k._$ws <= _._$RP && _._$RP <= k._$Ys);
						else {
							var u = t.getParamIndex(l),
							p = t.getModelContext(),
							f = .4 * (p.getParamMax(u) - p.getParamMin(u)),
							c = p.getParamFloat(u),
							d = _._$I0[o >= h ? h - 1 : o],
							g = _._$I0[o + 1 >= h ? h - 1 : o + 1],
							m = c + ((d < g && g - d > f || d > g && d - g > f ? d: d + (g - d) * n) - c) * r;
							t.setParamFloat(l, m)
						}
					}
					o >= this._$yT && (this._$E ? (i._$z2 = e, this.loopFadeIn && (i._$bs = e)) : i._$9L = !0),
					this._$eP = r
				},
				Z.prototype._$r0 = function() {
					return this._$E
				},
				Z.prototype._$aL = function(t) {
					this._$E = t
				},
				Z.prototype._$S0 = function() {
					return this._$D0
				},
				Z.prototype._$U0 = function(t) {
					this._$D0 = t
				},
				Z.prototype.isLoopFadeIn = function() {
					return this.loopFadeIn
				},
				Z.prototype.setLoopFadeIn = function(t) {
					this.loopFadeIn = t
				},
				B.prototype.clear = function() {
					this.size = 0
				},
				B.prototype.add = function(t) {
					if (this._$P.length <= this.size) {
						var e = new Float32Array(2 * this.size);
						I._$jT(this._$P, 0, e, 0, this.size),
						this._$P = e
					}
					this._$P[this.size++] = t
				},
				B.prototype._$BL = function() {
					var t = new Float32Array(this.size);
					return I._$jT(this._$P, 0, t, 0, this.size),
					t
				},
				k._$Fr = 0,
				k._$hs = 1,
				k._$ws = 100,
				k._$Ns = 101,
				k._$xs = 102,
				k._$us = 103,
				k._$qs = 104,
				k._$Ys = 105,
				tt.prototype = new b,
				tt._$gT = new Array,
				tt.prototype._$zP = function() {
					this._$GS = new D,
					this._$GS._$zP()
				},
				tt.prototype._$F0 = function(t) {
					b.prototype._$F0.call(this, t),
					this._$A = t._$6L(),
					this._$o = t._$6L(),
					this._$GS = t._$nP(),
					this._$Eo = t._$nP(),
					b.prototype.readV2_opacity.call(this, t)
				},
				tt.prototype.init = function(t) {
					var e = new et(this),
					r = (this._$o + 1) * (this._$A + 1);
					return null != e._$Cr && (e._$Cr = null),
					e._$Cr = new Float32Array(2 * r),
					null != e._$hr && (e._$hr = null),
					this._$32() ? e._$hr = new Float32Array(2 * r) : e._$hr = null,
					e
				},
				tt.prototype._$Nr = function(t, e) {
					var r = e;
					if (this._$GS._$Ur(t)) {
						var i = this._$VT(),
						s = tt._$gT;
						s[0] = !1,
						v._$Vr(t, this._$GS, s, i, this._$Eo, r._$Cr, 0, 2),
						e._$Ib(s[0]),
						this.interpolateOpacity(t, this._$GS, e, s)
					}
				},
				tt.prototype._$2b = function(t, e) {
					var r = e;
					if (r._$hS(!0), this._$32()) {
						var i = this.getTargetBaseDataID();
						if (r._$8r == b._$ur && (r._$8r = t.getBaseDataIndex(i)), r._$8r < 0) ht._$so && _._$li("_$L _$0P _$G :: %s", i),
						r._$hS(!1);
						else {
							var s = t.getBaseData(r._$8r),
							o = t._$q2(r._$8r);
							if (null != s && o._$yo()) {
								var n = o.getTotalScale();
								r.setTotalScale_notForClient(n);
								var a = o.getTotalOpacity();
								r.setTotalOpacity(a * r.getInterpolatedOpacity()),
								s._$nb(t, o, r._$Cr, r._$hr, this._$VT(), 0, 2),
								r._$hS(!0)
							} else r._$hS(!1)
						}
					} else r.setTotalOpacity(r.getInterpolatedOpacity())
				},
				tt.prototype._$nb = function(t, e, r, i, s, o, n) {
					var a = e,
					_ = null != a._$hr ? a._$hr: a._$Cr;
					tt.transformPoints_sdk2(r, i, s, o, n, _, this._$o, this._$A)
				},
				tt.transformPoints_sdk2 = function(e, r, i, s, o, n, a, _) {
					for (var h, l, $, u = i * o,
					p = 0,
					f = 0,
					c = 0,
					d = 0,
					g = 0,
					m = 0,
					y = !1,
					x = s; x < u; x += o) {
						var T, P, S, v;
						if (S = e[x], P = (v = e[x + 1]) * _, (T = S * a) < 0 || P < 0 || a <= T || _ <= P) {
							var L = a + 1;
							if (!y) {
								y = !0,
								p = .25 * (n[2 * (0 + 0 * L)] + n[2 * (a + 0 * L)] + n[2 * (0 + _ * L)] + n[2 * (a + _ * L)]),
								f = .25 * (n[2 * (0 + 0 * L) + 1] + n[2 * (a + 0 * L) + 1] + n[2 * (0 + _ * L) + 1] + n[2 * (a + _ * L) + 1]);
								var w = n[2 * (a + _ * L)] - n[2 * (0 + 0 * L)],
								M = n[2 * (a + _ * L) + 1] - n[2 * (0 + 0 * L) + 1],
								E = n[2 * (a + 0 * L)] - n[2 * (0 + _ * L)],
								b = n[2 * (a + 0 * L) + 1] - n[2 * (0 + _ * L) + 1];
								p -= .5 * ((c = .5 * (w + E)) + (g = .5 * (w - E))),
								f -= .5 * ((d = .5 * (M + b)) + (m = .5 * (M - b)))
							}
							if ( - 2 < S && S < 3 && -2 < v && v < 3) if (S <= 0) if (v <= 0) {
								var I = n[2 * (0 + 0 * L)],
								A = n[2 * (0 + 0 * L) + 1],
								O = p - 2 * c,
								D = f - 2 * d,
								R = p - 2 * g,
								C = f - 2 * m,
								F = p - 2 * c - 2 * g,
								N = f - 2 * d - 2 * m; (B = .5 * (S - -2)) + (k = .5 * (v - -2)) <= 1 ? (r[x] = F + (R - F) * B + (O - F) * k, r[x + 1] = N + (C - N) * B + (D - N) * k) : (r[x] = I + (O - I) * (1 - B) + (R - I) * (1 - k), r[x + 1] = A + (D - A) * (1 - B) + (C - A) * (1 - k))
							} else if (v >= 1) {
								R = n[2 * (0 + _ * L)],
								C = n[2 * (0 + _ * L) + 1],
								F = p - 2 * c + 1 * g,
								N = f - 2 * d + 1 * m,
								I = p + 3 * g,
								A = f + 3 * m,
								O = p - 2 * c + 3 * g,
								D = f - 2 * d + 3 * m; (B = .5 * (S - -2)) + (k = .5 * (v - 1)) <= 1 ? (r[x] = F + (R - F) * B + (O - F) * k, r[x + 1] = N + (C - N) * B + (D - N) * k) : (r[x] = I + (O - I) * (1 - B) + (R - I) * (1 - k), r[x + 1] = A + (D - A) * (1 - B) + (C - A) * (1 - k))
							} else { (Y = 0 | P) == _ && (Y = _ - 1);
								var B = .5 * (S - -2),
								k = P - Y,
								U = Y / _,
								G = (Y + 1) / _;
								R = n[2 * (0 + Y * L)],
								C = n[2 * (0 + Y * L) + 1],
								I = n[2 * (0 + (Y + 1) * L)],
								A = n[2 * (0 + (Y + 1) * L) + 1],
								F = p - 2 * c + U * g,
								N = f - 2 * d + U * m,
								O = p - 2 * c + G * g,
								D = f - 2 * d + G * m;
								B + k <= 1 ? (r[x] = F + (R - F) * B + (O - F) * k, r[x + 1] = N + (C - N) * B + (D - N) * k) : (r[x] = I + (O - I) * (1 - B) + (R - I) * (1 - k), r[x + 1] = A + (D - A) * (1 - B) + (C - A) * (1 - k))
							} else if (1 <= S) if (v <= 0) {
								O = n[2 * (a + 0 * L)],
								D = n[2 * (a + 0 * L) + 1],
								I = p + 3 * c,
								A = f + 3 * d,
								F = p + 1 * c - 2 * g,
								N = f + 1 * d - 2 * m,
								R = p + 3 * c - 2 * g,
								C = f + 3 * d - 2 * m; (B = .5 * (S - 1)) + (k = .5 * (v - -2)) <= 1 ? (r[x] = F + (R - F) * B + (O - F) * k, r[x + 1] = N + (C - N) * B + (D - N) * k) : (r[x] = I + (O - I) * (1 - B) + (R - I) * (1 - k), r[x + 1] = A + (D - A) * (1 - B) + (C - A) * (1 - k))
							} else if (v >= 1) {
								F = n[2 * (a + _ * L)],
								N = n[2 * (a + _ * L) + 1],
								R = p + 3 * c + 1 * g,
								C = f + 3 * d + 1 * m,
								O = p + 1 * c + 3 * g,
								D = f + 1 * d + 3 * m,
								I = p + 3 * c + 3 * g,
								A = f + 3 * d + 3 * m; (B = .5 * (S - 1)) + (k = .5 * (v - 1)) <= 1 ? (r[x] = F + (R - F) * B + (O - F) * k, r[x + 1] = N + (C - N) * B + (D - N) * k) : (r[x] = I + (O - I) * (1 - B) + (R - I) * (1 - k), r[x + 1] = A + (D - A) * (1 - B) + (C - A) * (1 - k))
							} else {
								var Y; (Y = 0 | P) == _ && (Y = _ - 1);
								B = .5 * (S - 1),
								k = P - Y,
								U = Y / _,
								G = (Y + 1) / _,
								F = n[2 * (a + Y * L)],
								N = n[2 * (a + Y * L) + 1],
								O = n[2 * (a + (Y + 1) * L)],
								D = n[2 * (a + (Y + 1) * L) + 1],
								R = p + 3 * c + U * g,
								C = f + 3 * d + U * m,
								I = p + 3 * c + G * g,
								A = f + 3 * d + G * m;
								B + k <= 1 ? (r[x] = F + (R - F) * B + (O - F) * k, r[x + 1] = N + (C - N) * B + (D - N) * k) : (r[x] = I + (O - I) * (1 - B) + (R - I) * (1 - k), r[x + 1] = A + (D - A) * (1 - B) + (C - A) * (1 - k))
							} else if (v <= 0) { (H = 0 | T) == a && (H = a - 1);
								B = T - H,
								k = .5 * (v - -2);
								var V = H / a,
								X = (H + 1) / a;
								O = n[2 * (H + 0 * L)],
								D = n[2 * (H + 0 * L) + 1],
								I = n[2 * (H + 1 + 0 * L)],
								A = n[2 * (H + 1 + 0 * L) + 1],
								F = p + V * c - 2 * g,
								N = f + V * d - 2 * m,
								R = p + X * c - 2 * g,
								C = f + X * d - 2 * m;
								B + k <= 1 ? (r[x] = F + (R - F) * B + (O - F) * k, r[x + 1] = N + (C - N) * B + (D - N) * k) : (r[x] = I + (O - I) * (1 - B) + (R - I) * (1 - k), r[x + 1] = A + (D - A) * (1 - B) + (C - A) * (1 - k))
							} else if (v >= 1) {
								var H; (H = 0 | T) == a && (H = a - 1);
								B = T - H,
								k = .5 * (v - 1),
								V = H / a,
								X = (H + 1) / a,
								F = n[2 * (H + _ * L)],
								N = n[2 * (H + _ * L) + 1],
								R = n[2 * (H + 1 + _ * L)],
								C = n[2 * (H + 1 + _ * L) + 1],
								O = p + V * c + 3 * g,
								D = f + V * d + 3 * m,
								I = p + X * c + 3 * g,
								A = f + X * d + 3 * m;
								B + k <= 1 ? (r[x] = F + (R - F) * B + (O - F) * k, r[x + 1] = N + (C - N) * B + (D - N) * k) : (r[x] = I + (O - I) * (1 - B) + (R - I) * (1 - k), r[x + 1] = A + (D - A) * (1 - B) + (C - A) * (1 - k))
							} else t.err.printf("_$li calc : %.4f , %.4f\t\t\t\t\t@@BDBoxGrid\n", S, v);
							else r[x] = p + S * c + v * g,
							r[x + 1] = f + S * d + v * m
						} else h = 2 * ((0 | T) + (0 | P) * (a + 1)),
						(l = T - (0 | T)) + ($ = P - (0 | P)) < 1 ? (r[x] = n[h] * (1 - l - $) + n[h + 2] * l + n[h + 2 * (a + 1)] * $, r[x + 1] = n[h + 1] * (1 - l - $) + n[h + 3] * l + n[h + 2 * (a + 1) + 1] * $) : (r[x] = n[h + 2 * (a + 1) + 2] * (l - 1 + $) + n[h + 2 * (a + 1)] * (1 - l) + n[h + 2] * (1 - $), r[x + 1] = n[h + 2 * (a + 1) + 3] * (l - 1 + $) + n[h + 2 * (a + 1) + 1] * (1 - l) + n[h + 3] * (1 - $))
					}
				},
				tt.prototype.transformPoints_sdk1 = function(t, e, r, i, s, o, n) {
					for (var a, _, h, l, $, u, p, f = e,
					c = this._$o,
					d = this._$A,
					g = s * n,
					m = null != f._$hr ? f._$hr: f._$Cr, y = o; y < g; y += n) ht._$ts ? ((a = r[y]) < 0 ? a = 0 : a > 1 && (a = 1), (_ = r[y + 1]) < 0 ? _ = 0 : _ > 1 && (_ = 1), (h = 0 | (a *= c)) > c - 1 && (h = c - 1), (l = 0 | (_ *= d)) > d - 1 && (l = d - 1), u = a - h, p = _ - l, $ = 2 * (h + l * (c + 1))) : (u = (a = r[y] * c) - (0 | a), p = (_ = r[y + 1] * d) - (0 | _), $ = 2 * ((0 | a) + (0 | _) * (c + 1))),
					u + p < 1 ? (i[y] = m[$] * (1 - u - p) + m[$ + 2] * u + m[$ + 2 * (c + 1)] * p, i[y + 1] = m[$ + 1] * (1 - u - p) + m[$ + 3] * u + m[$ + 2 * (c + 1) + 1] * p) : (i[y] = m[$ + 2 * (c + 1) + 2] * (u - 1 + p) + m[$ + 2 * (c + 1)] * (1 - u) + m[$ + 2] * (1 - p), i[y + 1] = m[$ + 2 * (c + 1) + 3] * (u - 1 + p) + m[$ + 2 * (c + 1) + 1] * (1 - u) + m[$ + 3] * (1 - p))
				},
				tt.prototype._$VT = function() {
					return (this._$o + 1) * (this._$A + 1)
				},
				tt.prototype.getType = function() {
					return b._$_b
				},
				et.prototype = new _t,
				rt._$42 = 0,
				rt.prototype._$zP = function() {
					this._$3S = new Array,
					this._$aS = new Array
				},
				rt.prototype._$F0 = function(t) {
					this._$g0 = t._$8L(),
					this.visible = t._$8L(),
					this._$NL = t._$nP(),
					this._$3S = t._$nP(),
					this._$aS = t._$nP()
				},
				rt.prototype.init = function(t) {
					var e = new it(this);
					return e.setPartsOpacity(this.isVisible() ? 1 : 0),
					e
				},
				rt.prototype._$6o = function(t) {
					if (null == this._$3S) throw new Error("_$3S _$6 _$Wo@_$6o");
					this._$3S.push(t)
				},
				rt.prototype._$3o = function(t) {
					if (null == this._$aS) throw new Error("_$aS _$6 _$Wo@_$3o");
					this._$aS.push(t)
				},
				rt.prototype._$Zo = function(t) {
					this._$3S = t
				},
				rt.prototype._$xo = function(t) {
					this._$aS = t
				},
				rt.prototype.isVisible = function() {
					return this.visible
				},
				rt.prototype._$uL = function() {
					return this._$g0
				},
				rt.prototype._$KP = function(t) {
					this.visible = t
				},
				rt.prototype._$ET = function(t) {
					this._$g0 = t
				},
				rt.prototype.getBaseData = function() {
					return this._$3S
				},
				rt.prototype.getDrawData = function() {
					return this._$aS
				},
				rt.prototype._$p2 = function() {
					return this._$NL
				},
				rt.prototype._$ob = function(t) {
					this._$NL = t
				},
				rt.prototype.getPartsID = function() {
					return this._$NL
				},
				rt.prototype._$MP = function(t) {
					this._$NL = t
				},
				it.prototype = new
				function() {},
				it.prototype.getPartsOpacity = function() {
					return this._$VS
				},
				it.prototype.setPartsOpacity = function(t) {
					this._$VS = t
				},
				st._$L7 = function() {
					u._$27(),
					yt._$27(),
					C._$27(),
					$._$27()
				},
				st.prototype.toString = function() {
					return this.id
				},
				ot.prototype._$1s = function() {
					return this._$4S
				},
				ot.prototype._$zP = function() {
					this._$4S = new Array
				},
				ot.prototype._$F0 = function(t) {
					this._$4S = t._$nP()
				},
				ot.prototype._$Ks = function(t) {
					this._$4S.push(t)
				},
				nt.tr = new mt,
				nt._$50 = new mt,
				nt._$Ti = new Array(0, 0),
				nt._$Pi = new Array(0, 0),
				nt._$B = new Array(0, 0),
				nt.prototype._$lP = function(t, e, r, i) {
					this.viewport = new Array(t, e, r, i)
				},
				nt.prototype._$bL = function() {
					this.context.save();
					var t = this.viewport;
					null != t && (this.context.beginPath(), this.context._$Li(t[0], t[1], t[2], t[3]), this.context.clip())
				},
				nt.prototype._$ei = function() {
					this.context.restore()
				},
				nt.prototype.drawElements = function(t, e, r, i, s, o, n, a) {
					try {
						s != this._$Qo && (this._$Qo = s, this.context.globalAlpha = s);
						for (var h = e.length,
						l = t.width,
						$ = t.height,
						u = this.context,
						p = this._$xP,
						f = this._$uP,
						c = this._$6r,
						d = this._$3r,
						g = nt.tr,
						m = nt._$Ti,
						y = nt._$Pi,
						x = nt._$B,
						T = 0; T < h; T += 3) {
							u.save();
							var S = e[T],
							v = e[T + 1],
							L = e[T + 2],
							w = p + c * r[2 * S],
							M = f + d * r[2 * S + 1],
							E = p + c * r[2 * v],
							b = f + d * r[2 * v + 1],
							I = p + c * r[2 * L],
							A = f + d * r[2 * L + 1];
							n && (n._$PS(w, M, x), w = x[0], M = x[1], n._$PS(E, b, x), E = x[0], b = x[1], n._$PS(I, A, x), I = x[0], A = x[1]);
							var O = l * i[2 * S],
							D = $ - $ * i[2 * S + 1],
							R = l * i[2 * v],
							C = $ - $ * i[2 * v + 1],
							F = l * i[2 * L],
							N = $ - $ * i[2 * L + 1],
							B = Math.atan2(C - D, R - O),
							k = Math.atan2(b - M, E - w),
							U = E - w,
							G = b - M,
							Y = Math.sqrt(U * U + G * G),
							V = R - O,
							X = C - D,
							H = Y / Math.sqrt(V * V + X * X);
							P._$ni(F, N, O, D, R - O, C - D, -(C - D), R - O, m),
							P._$ni(I, A, w, M, E - w, b - M, -(b - M), E - w, y);
							var z = (y[0] - m[0]) / m[1],
							W = Math.min(O, R, F),
							j = Math.max(O, R, F),
							q = Math.min(D, C, N),
							J = Math.max(D, C, N),
							Q = Math.floor(W),
							Z = Math.floor(q),
							K = Math.ceil(j),
							tt = Math.ceil(J);
							g.identity(),
							g.translate(w, M),
							g.rotate(k),
							g.scale(1, y[1] / m[1]),
							g.shear(z, 0),
							g.scale(H, H),
							g.rotate( - B),
							g.translate( - O, -D),
							g.setContext(u);
							if (o || (o = 1.2), ht.IGNORE_EXPAND && (o = 0), ht.USE_CACHED_POLYGON_IMAGE) {
								var et = a._$e0;
								if (et.gl_cacheImage = et.gl_cacheImage || {},
								!et.gl_cacheImage[T]) {
									var rt = nt.createCanvas(K - Q, tt - Z);
									ht.DEBUG_DATA.LDGL_CANVAS_MB = ht.DEBUG_DATA.LDGL_CANVAS_MB || 0,
									ht.DEBUG_DATA.LDGL_CANVAS_MB += (K - Q) * (tt - Z) * 4;
									var it = rt.getContext("2d");
									it.translate( - Q, -Z),
									nt.clip(it, g, o, Y, O, D, R, C, F, N, w, M, E, b, I, A),
									it.drawImage(t, 0, 0),
									et.gl_cacheImage[T] = {
										cacheCanvas: rt,
										cacheContext: it
									}
								}
								u.drawImage(et.gl_cacheImage[T].cacheCanvas, Q, Z)
							} else ht.IGNORE_CLIP || nt.clip(u, g, o, Y, O, D, R, C, F, N, w, M, E, b, I, A),
							ht.USE_ADJUST_TRANSLATION && (W = 0, j = l, q = 0, J = $),
							u.drawImage(t, W, q, j - W, J - q, W, q, j - W, J - q);
							u.restore()
						}
					} catch(t) {
						_._$Rb(t)
					}
				},
				nt.clip = function(t, e, r, i, s, o, n, a, _, h, l, $, u, p, f, c) {
					r > .02 ? nt.expandClip(t, e, r, i, l, $, u, p, f, c) : nt.clipWithTransform(t, null, s, o, n, a, _, h)
				},
				nt.expandClip = function(t, e, r, i, s, o, n, a, _, h) {
					var l = n - s,
					$ = a - o,
					u = _ - s,
					p = h - o,
					f = l * p - $ * u > 0 ? r: -r,
					c = -$,
					d = l,
					g = _ - n,
					m = h - a,
					y = -m,
					x = g,
					T = Math.sqrt(g * g + m * m),
					P = -p,
					S = u,
					v = Math.sqrt(u * u + p * p),
					L = s - f * c / i,
					w = o - f * d / i,
					M = n - f * c / i,
					E = a - f * d / i,
					b = n - f * y / T,
					I = a - f * x / T,
					A = _ - f * y / T,
					O = h - f * x / T,
					D = s + f * P / v,
					R = o + f * S / v,
					C = _ + f * P / v,
					F = h + f * S / v,
					N = nt._$50;
					return null != e._$P2(N) && (nt.clipWithTransform(t, N, L, w, M, E, b, I, A, O, C, F, D, R), !0)
				},
				nt.clipWithTransform = function(t, e, r, i, s, o, n, a) {
					if (arguments.length < 7) _._$li("err : @LDGL.clip()");
					else if (arguments[1] instanceof mt) {
						var h = nt._$B,
						l = e,
						$ = arguments;
						if (t.beginPath(), l) {
							l._$PS($[2], $[3], h),
							t.moveTo(h[0], h[1]);
							for (var u = 4; u < $.length; u += 2) l._$PS($[u], $[u + 1], h),
							t.lineTo(h[0], h[1])
						} else {
							t.moveTo($[2], $[3]);
							for (u = 4; u < $.length; u += 2) t.lineTo($[u], $[u + 1])
						}
						t.clip()
					} else _._$li("err : a[0] is _$6 LDTransform @LDGL.clip()")
				},
				nt.createCanvas = function(t, e) {
					var r = document.createElement("canvas");
					return r.setAttribute("width", t),
					r.setAttribute("height", e),
					r || _._$li("err : " + r),
					r
				},
				nt.dumpValues = function() {
					for (var t = "",
					e = 0; e < arguments.length; e++) t += "[" + e + "]= " + arguments[e].toFixed(3) + " , ";
					console.log(t)
				},
				at.prototype._$F0 = function(t) {
					this._$TT = t._$_T(),
					this._$LT = t._$_T(),
					this._$FS = t._$_T(),
					this._$wL = t._$nP()
				},
				at.prototype.getMinValue = function() {
					return this._$TT
				},
				at.prototype.getMaxValue = function() {
					return this._$LT
				},
				at.prototype.getDefaultValue = function() {
					return this._$FS
				},
				at.prototype.getParamID = function() {
					return this._$wL
				},
				_t.prototype._$yo = function() {
					return this._$AT && !this._$JS
				},
				_t.prototype._$hS = function(t) {
					this._$AT = t
				},
				_t.prototype._$GT = function() {
					return this._$e0
				},
				_t.prototype._$l2 = function(t) {
					this._$IP = t
				},
				_t.prototype.getPartsIndex = function() {
					return this._$IP
				},
				_t.prototype._$x2 = function() {
					return this._$JS
				},
				_t.prototype._$Ib = function(t) {
					this._$JS = t
				},
				_t.prototype.getTotalScale = function() {
					return this.totalScale
				},
				_t.prototype.setTotalScale_notForClient = function(t) {
					this.totalScale = t
				},
				_t.prototype.getInterpolatedOpacity = function() {
					return this._$7s
				},
				_t.prototype.setInterpolatedOpacity = function(t) {
					this._$7s = t
				},
				_t.prototype.getTotalOpacity = function(t) {
					return this.totalOpacity
				},
				_t.prototype.setTotalOpacity = function(t) {
					this.totalOpacity = t
				},
				ht._$2s = "2.1.00_1",
				ht._$Kr = 201001e3,
				ht._$sP = !0,
				ht._$so = !0,
				ht._$cb = !1,
				ht._$3T = !0,
				ht._$Ts = !0,
				ht._$fb = !0,
				ht._$ts = !0,
				ht.L2D_DEFORMER_EXTEND = !0,
				ht._$Wb = !1,
				ht._$yr = !1,
				ht._$Zs = !1,
				ht.L2D_NO_ERROR = 0,
				ht._$i7 = 1e3,
				ht._$9s = 1001,
				ht._$es = 1100,
				ht._$r7 = 2e3,
				ht._$07 = 2001,
				ht._$b7 = 2002,
				ht._$H7 = 4e3,
				ht.L2D_COLOR_BLEND_MODE_MULT = 0,
				ht.L2D_COLOR_BLEND_MODE_ADD = 1,
				ht.L2D_COLOR_BLEND_MODE_INTERPOLATE = 2,
				ht._$6b = !0,
				ht._$cT = 0,
				ht.clippingMaskBufferSize = 256,
				ht.glContext = new Array,
				ht.frameBuffers = new Array,
				ht.fTexture = new Array,
				ht.IGNORE_CLIP = !1,
				ht.IGNORE_EXPAND = !1,
				ht.EXPAND_W = 2,
				ht.USE_ADJUST_TRANSLATION = !0,
				ht.USE_CANVAS_TRANSFORM = !0,
				ht.USE_CACHED_POLYGON_IMAGE = !1,
				ht.DEBUG_DATA = {},
				ht.PROFILE_IOS_SPEED = {
					PROFILE_NAME: "iOS Speed",
					USE_ADJUST_TRANSLATION: !0,
					USE_CACHED_POLYGON_IMAGE: !0,
					EXPAND_W: 4
				},
				ht.PROFILE_IOS_QUALITY = {
					PROFILE_NAME: "iOS HiQ",
					USE_ADJUST_TRANSLATION: !0,
					USE_CACHED_POLYGON_IMAGE: !1,
					EXPAND_W: 2
				},
				ht.PROFILE_IOS_DEFAULT = ht.PROFILE_IOS_QUALITY,
				ht.PROFILE_ANDROID = {
					PROFILE_NAME: "Android",
					USE_ADJUST_TRANSLATION: !1,
					USE_CACHED_POLYGON_IMAGE: !1,
					EXPAND_W: 2
				},
				ht.PROFILE_DESKTOP = {
					PROFILE_NAME: "Desktop",
					USE_ADJUST_TRANSLATION: !1,
					USE_CACHED_POLYGON_IMAGE: !1,
					EXPAND_W: 2
				},
				ht.initProfile = function() {
					Mt.isIOS() ? ht.setupProfile(ht.PROFILE_IOS_DEFAULT) : Mt.isAndroid() ? ht.setupProfile(ht.PROFILE_ANDROID) : ht.setupProfile(ht.PROFILE_DESKTOP)
				},
				ht.setupProfile = function(t, e) {
					if ("number" == typeof t) switch (t) {
					case 9901:
						t = ht.PROFILE_IOS_SPEED;
						break;
					case 9902:
						t = ht.PROFILE_IOS_QUALITY;
						break;
					case 9903:
						t = ht.PROFILE_IOS_DEFAULT;
						break;
					case 9904:
						t = ht.PROFILE_ANDROID;
						break;
					case 9905:
						t = ht.PROFILE_DESKTOP;
						break;
					default:
						alert("profile _$6 _$Ui : " + t)
					}
					for (var r in arguments.length < 2 && (e = !0), e && console.log("profile : " + t.PROFILE_NAME), t) ht[r] = t[r],
					e && console.log("  [" + r + "] = " + t[r])
				},
				ht.init = function() {
					if (ht._$6b) {
						console.log("Live2D %s", ht._$2s),
						ht._$6b = !1; ! 0,
						ht.initProfile()
					}
				},
				ht.getVersionStr = function() {
					return ht._$2s
				},
				ht.getVersionNo = function() {
					return ht._$Kr
				},
				ht._$sT = function(t) {
					ht._$cT = t
				},
				ht.getError = function() {
					var t = ht._$cT;
					return ht._$cT = 0,
					t
				},
				ht.dispose = function() {
					ht.glContext = [],
					ht.frameBuffers = [],
					ht.fTexture = []
				},
				ht.setGL = function(t, e) {
					var r = e || 0;
					ht.glContext[r] = t
				},
				ht.getGL = function(t) {
					return ht.glContext[t]
				},
				ht.setClippingMaskBufferSize = function(t) {
					ht.clippingMaskBufferSize = t
				},
				ht.getClippingMaskBufferSize = function() {
					return ht.clippingMaskBufferSize
				},
				ht.deleteBuffer = function(t) {
					ht.getGL(t).deleteFramebuffer(ht.frameBuffers[t].framebuffer),
					delete ht.frameBuffers[t],
					delete ht.glContext[t]
				},
				lt._$r2 = function(t) {
					return t < 0 ? 0 : t > 1 ? 1 : .5 - .5 * Math.cos(t * Lt.PI_F)
				},
				$t._$fr = -1,
				$t.prototype.toString = function() {
					return this._$ib
				},
				ut.prototype = new q,
				ut._$42 = 0,
				ut._$Os = 30,
				ut._$ms = 0,
				ut._$ns = 1,
				ut._$_s = 2,
				ut._$gT = new Array,
				ut.prototype._$_S = function(t) {
					this._$LP = t
				},
				ut.prototype.getTextureNo = function() {
					return this._$LP
				},
				ut.prototype._$ZL = function() {
					return this._$Qi
				},
				ut.prototype._$H2 = function() {
					return this._$JP
				},
				ut.prototype.getNumPoints = function() {
					return this._$d0
				},
				ut.prototype.getType = function() {
					return q._$wb
				},
				ut.prototype._$B2 = function(t, e, r) {
					var i = e,
					s = null != i._$hr ? i._$hr: i._$Cr;
					switch (U._$do) {
					default:
					case U._$Ms:
						throw new Error("_$L _$ro ");
					case U._$Qs:
						for (var o = this._$d0 - 1; o >= 0; --o) {
							s[o * U._$No + 4] = r
						}
					}
				},
				ut.prototype._$zP = function() {
					this._$GS = new D,
					this._$GS._$zP()
				},
				ut.prototype._$F0 = function(t) {
					q.prototype._$F0.call(this, t),
					this._$LP = t._$6L(),
					this._$d0 = t._$6L(),
					this._$Yo = t._$6L();
					var e = t._$nP();
					this._$BP = new Int16Array(3 * this._$Yo);
					for (var r = 3 * this._$Yo - 1; r >= 0; --r) this._$BP[r] = e[r];
					if (this._$Eo = t._$nP(), this._$Qi = t._$nP(), t.getFormatVersion() >= G._$s7) {
						if (this._$JP = t._$6L(), 0 != this._$JP) {
							if (0 != (1 & this._$JP)) {
								var i = t._$6L();
								null == this._$5P && (this._$5P = new Object),
								this._$5P._$Hb = parseInt(i)
							}
							0 != (this._$JP & ut._$Os) ? this._$6s = (this._$JP & ut._$Os) >> 1 : this._$6s = ut._$ms,
							0 != (32 & this._$JP) && (this.culling = !1)
						}
					} else this._$JP = 0
				},
				ut.prototype.init = function(t) {
					var e = new pt(this),
					r = this._$d0 * U._$No,
					i = this._$32();
					switch (null != e._$Cr && (e._$Cr = null), e._$Cr = new Float32Array(r), null != e._$hr && (e._$hr = null), e._$hr = i ? new Float32Array(r) : null, U._$do) {
					default:
					case U._$Ms:
						if (U._$Ls) for (var s = this._$d0 - 1; s >= 0; --s) {
							var o = s << 1;
							this._$Qi[o + 1] = 1 - this._$Qi[o + 1]
						}
						break;
					case U._$Qs:
						for (s = this._$d0 - 1; s >= 0; --s) {
							o = s << 1;
							var n = s * U._$No,
							a = this._$Qi[o],
							_ = this._$Qi[o + 1];
							e._$Cr[n] = a,
							e._$Cr[n + 1] = _,
							e._$Cr[n + 4] = 0,
							i && (e._$hr[n] = a, e._$hr[n + 1] = _, e._$hr[n + 4] = 0)
						}
					}
					return e
				},
				ut.prototype._$Nr = function(t, e) {
					var r = e;
					if (this != r._$GT() && console.log("### assert!! ### "), this._$GS._$Ur(t) && (q.prototype._$Nr.call(this, t, r), !r._$IS[0])) {
						var i = ut._$gT;
						i[0] = !1,
						v._$Vr(t, this._$GS, i, this._$d0, this._$Eo, r._$Cr, U._$i2, U._$No)
					}
				},
				ut.prototype._$2b = function(t, e) {
					try {
						this != e._$GT() && console.log("### assert!! ### ");
						var r = !1;
						e._$IS[0] && (r = !0);
						var i = e;
						if (!r && (q.prototype._$2b.call(this, t), this._$32())) {
							var s = this.getTargetBaseDataID();
							if (i._$8r == q._$ur && (i._$8r = t.getBaseDataIndex(s)), i._$8r < 0) ht._$so && _._$li("_$L _$0P _$G :: %s", s);
							else {
								var o = t.getBaseData(i._$8r),
								n = t._$q2(i._$8r);
								null == o || n._$x2() ? i._$AT = !1 : (o._$nb(t, n, i._$Cr, i._$hr, this._$d0, U._$i2, U._$No), i._$AT = !0),
								i.baseOpacity = n.getTotalOpacity()
							}
						}
					} catch(t) {
						throw t
					}
				},
				ut.prototype.draw = function(t, e, r) {
					if (this != r._$GT() && console.log("### assert!! ### "), !r._$IS[0]) {
						var i = r,
						s = this._$LP;
						s < 0 && (s = 1);
						var o = this.getOpacity(e, i) * r._$VS * r.baseOpacity,
						n = null != i._$hr ? i._$hr: i._$Cr;
						t.setClipBufPre_clipContextForDraw(r.clipBufPre_clipContext),
						t._$WP(this.culling),
						t._$Uo(s, 3 * this._$Yo, this._$BP, n, this._$Qi, o, this._$6s, i)
					}
				},
				ut.prototype.dump = function() {
					console.log("  _$yi( %d ) , _$d0( %d ) , _$Yo( %d ) \n", this._$LP, this._$d0, this._$Yo),
					console.log("  _$Oi _$di = { ");
					for (var t = 0; t < this._$BP.length; t++) console.log("%5d ,", this._$BP[t]);
					console.log("\n  _$5i _$30");
					for (t = 0; t < this._$Eo.length; t++) {
						console.log("\n    _$30[%d] = ", t);
						for (var e = this._$Eo[t], r = 0; r < e.length; r++) console.log("%6.2f, ", e[r])
					}
					console.log("\n")
				},
				ut.prototype._$72 = function(t) {
					return null == this._$5P ? null: this._$5P[t]
				},
				ut.prototype.getIndexArray = function() {
					return this._$BP
				},
				pt.prototype = new wt,
				pt.prototype.getTransformedPoints = function() {
					return null != this._$hr ? this._$hr: this._$Cr
				},
				ft.prototype._$HT = function(t) {
					this.x = t.x,
					this.y = t.y
				},
				ft.prototype._$HT = function(t, e) {
					this.x = t,
					this.y = e
				},
				ct.prototype = new r,
				ct.loadModel = function(t) {
					var e = new ct;
					return r._$62(e, t),
					e
				},
				ct.loadModel = function(t, e) {
					var i = new ct(e || 0);
					return r._$62(i, t),
					i
				},
				ct._$to = function() {
					return new ct
				},
				ct._$er = function(t) {
					var e = new _$5("../_$_r/_$t0/_$Ri/_$_P._$d");
					if (0 == e.exists()) throw new _$ls("_$t0 _$_ _$6 _$Ui :: " + e._$PL());
					for (var r = ["../_$_r/_$t0/_$Ri/_$_P.512/_$CP._$1", "../_$_r/_$t0/_$Ri/_$_P.512/_$vP._$1", "../_$_r/_$t0/_$Ri/_$_P.512/_$EP._$1", "../_$_r/_$t0/_$Ri/_$_P.512/_$pP._$1"], i = ct.loadModel(e._$3b()), s = 0; s < r.length; s++) {
						var o = new _$5(r[s]);
						if (0 == o.exists()) throw new _$ls("_$t0 _$_ _$6 _$Ui :: " + o._$PL());
						i.setTexture(s, _$nL._$_o(t, o._$3b()))
					}
					return i
				},
				ct.prototype.setGL = function(t) {
					ht.setGL(t)
				},
				ct.prototype.setTransform = function(t) {
					this.drawParamWebGL.setTransform(t)
				},
				ct.prototype.update = function() {
					this._$5S.update(),
					this._$5S.preDraw(this.drawParamWebGL)
				},
				ct.prototype.draw = function() {
					this._$5S.draw(this.drawParamWebGL)
				},
				ct.prototype._$K2 = function() {
					this.drawParamWebGL._$K2()
				},
				ct.prototype.setTexture = function(t, e) {
					null == this.drawParamWebGL && _._$li("_$Yi for QT _$ki / _$XS() is _$6 _$ui!!"),
					this.drawParamWebGL.setTexture(t, e)
				},
				ct.prototype.setTexture = function(t, e) {
					null == this.drawParamWebGL && _._$li("_$Yi for QT _$ki / _$XS() is _$6 _$ui!!"),
					this.drawParamWebGL.setTexture(t, e)
				},
				ct.prototype._$Rs = function() {
					return this.drawParamWebGL._$Rs()
				},
				ct.prototype._$Ds = function(t) {
					this.drawParamWebGL._$Ds(t)
				},
				ct.prototype.getDrawParam = function() {
					return this.drawParamWebGL
				},
				ct.prototype.setMatrix = function(t) {
					this.drawParamWebGL.setMatrix(t)
				},
				ct.prototype.setPremultipliedAlpha = function(t) {
					this.drawParamWebGL.setPremultipliedAlpha(t)
				},
				ct.prototype.isPremultipliedAlpha = function() {
					return this.drawParamWebGL.isPremultipliedAlpha()
				},
				ct.prototype.setAnisotropy = function(t) {
					this.drawParamWebGL.setAnisotropy(t)
				},
				ct.prototype.getAnisotropy = function() {
					return this.drawParamWebGL.getAnisotropy()
				},
				dt.prototype._$tb = function() {
					return this.motions
				},
				dt.prototype.startMotion = function(t, e) {
					for (var r = null,
					i = this.motions.length,
					s = 0; s < i; ++s) null != (r = this.motions[s]) && (r._$qS(r._$w0.getFadeOut()), this._$eb && _._$Ji("MotionQueueManager[size:%2d]->startMotion() / start _$K _$3 (m%d)\n", i, r._$sr));
					if (null == t) return - 1; (r = new gt)._$w0 = t,
					this.motions.push(r);
					var o = r._$sr;
					return this._$eb && _._$Ji("MotionQueueManager[size:%2d]->startMotion() / new _$w0 (m%d)\n", i, o),
					o
				},
				dt.prototype.updateParam = function(t) {
					try {
						for (var e = !1,
						r = 0; r < this.motions.length; r++) {
							var i = this.motions[r];
							if (null != i) {
								var s = i._$w0;
								null != s ? (s.updateParam(t, i), e = !0, i.isFinished() && (this._$eb && _._$Ji("MotionQueueManager[size:%2d]->updateParam() / _$T0 _$w0 (m%d)\n", this.motions.length - 1, i._$sr), this.motions.splice(r, 1), r--)) : (this.motions = this.motions.splice(r, 1), r--)
							} else this.motions.splice(r, 1),
							r--
						}
						return e
					} catch(t) {
						return _._$li(t),
						!0
					}
				},
				dt.prototype.isFinished = function(t) {
					if (arguments.length >= 1) {
						for (var e = 0; e < this.motions.length; e++) {
							if (null != (r = this.motions[e]) && (r._$sr == t && !r.isFinished())) return ! 1
						}
						return ! 0
					}
					for (e = 0; e < this.motions.length; e++) {
						var r;
						if (null != (r = this.motions[e])) if (null != r._$w0) {
							if (!r.isFinished()) return ! 1
						} else this.motions.splice(e, 1),
						e--;
						else this.motions.splice(e, 1),
						e--
					}
					return ! 0
				},
				dt.prototype.stopAllMotions = function() {
					for (var t = 0; t < this.motions.length; t++) {
						var e = this.motions[t];
						if (null != e) {
							e._$w0;
							this.motions.splice(t, 1),
							t--
						} else this.motions.splice(t, 1),
						t--
					}
				},
				dt.prototype._$Zr = function(t) {
					this._$eb = t
				},
				dt.prototype._$e = function() {
					console.log("-- _$R --\n");
					for (var t = 0; t < this.motions.length; t++) {
						var e = this.motions[t]._$w0;
						console.log("MotionQueueEnt[%d] :: %s\n", this.motions.length, e.toString())
					}
				},
				gt._$Gs = 0,
				gt.prototype.isFinished = function() {
					return this._$9L
				},
				gt.prototype._$qS = function(t) {
					var e = I.getUserTimeMSec() + t; (this._$Do < 0 || e < this._$Do) && (this._$Do = e)
				},
				gt.prototype._$Bs = function() {
					return this._$sr
				},
				mt.prototype.setContext = function(t) {
					var e = this.m;
					t.transform(e[0], e[1], e[3], e[4], e[6], e[7])
				},
				mt.prototype.toString = function() {
					for (var t = "LDTransform { ",
					e = 0; e < 9; e++) t += this.m[e].toFixed(2) + " ,";
					return t += " }"
				},
				mt.prototype.identity = function() {
					var t = this.m;
					t[0] = t[4] = t[8] = 1,
					t[1] = t[2] = t[3] = t[5] = t[6] = t[7] = 0
				},
				mt.prototype._$PS = function(t, e, r) {
					null == r && (r = new Array(0, 0));
					var i = this.m;
					return r[0] = i[0] * t + i[3] * e + i[6],
					r[1] = i[1] * t + i[4] * e + i[7],
					r
				},
				mt.prototype._$P2 = function(t) {
					t || (t = new mt);
					var e = this.m,
					r = e[0],
					i = e[1],
					s = e[2],
					o = e[3],
					n = e[4],
					a = e[5],
					_ = e[6],
					h = e[7],
					l = e[8],
					$ = r * n * l + i * a * _ + s * o * h - r * a * h - s * n * _ - i * o * l;
					if (0 == $) return null;
					var u = 1 / $;
					return t.m[0] = u * (n * l - h * a),
					t.m[1] = u * (h * s - i * l),
					t.m[2] = u * (i * a - n * s),
					t.m[3] = u * (_ * a - o * l),
					t.m[4] = u * (r * l - _ * s),
					t.m[5] = u * (o * s - r * a),
					t.m[6] = u * (o * h - _ * n),
					t.m[7] = u * (_ * i - r * h),
					t.m[8] = u * (r * n - o * i),
					t
				},
				mt.prototype.transform = function(t, e, r) {
					null == r && (r = new Array(0, 0));
					var i = this.m;
					return r[0] = i[0] * t + i[3] * e + i[6],
					r[1] = i[1] * t + i[4] * e + i[7],
					r
				},
				mt.prototype.translate = function(t, e) {
					var r = this.m;
					r[6] = r[0] * t + r[3] * e + r[6],
					r[7] = r[1] * t + r[4] * e + r[7],
					r[8] = r[2] * t + r[5] * e + r[8]
				},
				mt.prototype.scale = function(t, e) {
					var r = this.m;
					r[0] *= t,
					r[1] *= t,
					r[2] *= t,
					r[3] *= e,
					r[4] *= e,
					r[5] *= e
				},
				mt.prototype.shear = function(t, e) {
					var r = this.m,
					i = r[0] + r[3] * e,
					s = r[1] + r[4] * e,
					o = r[2] + r[5] * e;
					r[3] = r[0] * t + r[3],
					r[4] = r[1] * t + r[4],
					r[5] = r[2] * t + r[5],
					r[0] = i,
					r[1] = s,
					r[2] = o
				},
				mt.prototype.rotate = function(t) {
					var e = this.m,
					r = Math.cos(t),
					i = Math.sin(t),
					s = e[0] * r + e[3] * i,
					o = e[1] * r + e[4] * i,
					n = e[2] * r + e[5] * i;
					e[3] = -e[0] * i + e[3] * r,
					e[4] = -e[1] * i + e[4] * r,
					e[5] = -e[2] * i + e[5] * r,
					e[0] = s,
					e[1] = o,
					e[2] = n
				},
				mt.prototype.concatenate = function(t) {
					var e = this.m,
					r = t.m,
					i = e[0] * r[0] + e[3] * r[1] + e[6] * r[2],
					s = e[1] * r[0] + e[4] * r[1] + e[7] * r[2],
					o = e[2] * r[0] + e[5] * r[1] + e[8] * r[2],
					n = e[0] * r[3] + e[3] * r[4] + e[6] * r[5],
					a = e[1] * r[3] + e[4] * r[4] + e[7] * r[5],
					_ = e[2] * r[3] + e[5] * r[4] + e[8] * r[5],
					h = e[0] * r[6] + e[3] * r[7] + e[6] * r[8],
					l = e[1] * r[6] + e[4] * r[7] + e[7] * r[8],
					$ = e[2] * r[6] + e[5] * r[7] + e[8] * r[8];
					m[0] = i,
					m[1] = s,
					m[2] = o,
					m[3] = n,
					m[4] = a,
					m[5] = _,
					m[6] = h,
					m[7] = l,
					m[8] = $
				},
				yt.prototype = new st,
				yt._$eT = null,
				yt._$tP = new Object,
				yt._$2o = function() {
					return null == yt._$eT && (yt._$eT = yt.getID("DST_BASE")),
					yt._$eT
				},
				yt._$27 = function() {
					yt._$tP.clear(),
					yt._$eT = null
				},
				yt.getID = function(t) {
					var e = yt._$tP[t];
					return null == e && (e = new yt(t), yt._$tP[t] = e),
					e
				},
				yt.prototype._$3s = function() {
					return new yt
				},
				xt.prototype = new M,
				xt._$9r = function(t) {
					return new Float32Array(t)
				},
				xt._$vb = function(t) {
					return new Int16Array(t)
				},
				xt._$cr = function(t, e) {
					return null == t || t._$yL() < e.length ? ((t = xt._$9r(2 * e.length)).put(e), t._$oT(0)) : (t.clear(), t.put(e), t._$oT(0)),
					t
				},
				xt._$mb = function(t, e) {
					return null == t || t._$yL() < e.length ? ((t = xt._$vb(2 * e.length)).put(e), t._$oT(0)) : (t.clear(), t.put(e), t._$oT(0)),
					t
				},
				xt._$Hs = function() {
					return this._$Gr
				},
				xt._$as = function(t) {
					this._$Gr = t
				},
				xt.prototype.getGL = function() {
					return this.gl
				},
				xt.prototype.setGL = function(t) {
					this.gl = t
				},
				xt.prototype.setTransform = function(t) {
					this.transform = t
				},
				xt.prototype._$ZT = function() {
					var t = this.gl;
					this.firstDraw && (this.initShader(), this.firstDraw = !1, this.anisotropyExt = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic"), this.anisotropyExt && (this.maxAnisotropy = t.getParameter(this.anisotropyExt.MAX_TEXTURE_MAX_ANISOTROPY_EXT))),
					t.disable(t.SCISSOR_TEST),
					t.disable(t.STENCIL_TEST),
					t.disable(t.DEPTH_TEST),
					t.frontFace(t.CW),
					t.enable(t.BLEND),
					t.colorMask(1, 1, 1, 1),
					t.bindBuffer(t.ARRAY_BUFFER, null),
					t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, null)
				},
				xt.prototype._$Uo = function(t, e, r, i, s, o, n, a) {
					if (! (o < .01 && null == this.clipBufPre_clipContextMask)) {
						o > .9 && ht.EXPAND_W;
						var _ = this.gl;
						if (null == this.gl) throw new Error("gl is null");
						var h, l, $, u, p = 1 * this._$C0 * o,
						f = 1 * this._$tT * o,
						c = 1 * this._$WL * o,
						d = this._$lT * o;
						if (null != this.clipBufPre_clipContextMask) {
							_.frontFace(_.CCW),
							_.useProgram(this.shaderProgram),
							this._$vS = Tt(_, this._$vS, i),
							this._$no = Pt(_, this._$no, r),
							_.enableVertexAttribArray(this.a_position_Loc),
							_.vertexAttribPointer(this.a_position_Loc, 2, _.FLOAT, !1, 0, 0),
							this._$NT = Tt(_, this._$NT, s),
							_.activeTexture(_.TEXTURE1),
							_.bindTexture(_.TEXTURE_2D, this.textures[t]),
							_.uniform1i(this.s_texture0_Loc, 1),
							_.enableVertexAttribArray(this.a_texCoord_Loc),
							_.vertexAttribPointer(this.a_texCoord_Loc, 2, _.FLOAT, !1, 0, 0),
							_.uniformMatrix4fv(this.u_matrix_Loc, !1, this.getClipBufPre_clipContextMask().matrixForMask);
							var g = this.getClipBufPre_clipContextMask().layoutChannelNo,
							m = this.getChannelFlagAsColor(g);
							_.uniform4f(this.u_channelFlag, m.r, m.g, m.b, m.a);
							var y = this.getClipBufPre_clipContextMask().layoutBounds;
							_.uniform4f(this.u_baseColor_Loc, 2 * y.x - 1, 2 * y.y - 1, 2 * y._$EL() - 1, 2 * y._$5T() - 1),
							_.uniform1i(this.u_maskFlag_Loc, !0)
						} else if (null != this.getClipBufPre_clipContextDraw()) {
							_.useProgram(this.shaderProgramOff),
							this._$vS = Tt(_, this._$vS, i),
							this._$no = Pt(_, this._$no, r),
							_.enableVertexAttribArray(this.a_position_Loc_Off),
							_.vertexAttribPointer(this.a_position_Loc_Off, 2, _.FLOAT, !1, 0, 0),
							this._$NT = Tt(_, this._$NT, s),
							_.activeTexture(_.TEXTURE1),
							_.bindTexture(_.TEXTURE_2D, this.textures[t]),
							_.uniform1i(this.s_texture0_Loc_Off, 1),
							_.enableVertexAttribArray(this.a_texCoord_Loc_Off),
							_.vertexAttribPointer(this.a_texCoord_Loc_Off, 2, _.FLOAT, !1, 0, 0),
							_.uniformMatrix4fv(this.u_clipMatrix_Loc_Off, !1, this.getClipBufPre_clipContextDraw().matrixForDraw),
							_.uniformMatrix4fv(this.u_matrix_Loc_Off, !1, this.matrix4x4),
							_.activeTexture(_.TEXTURE2),
							_.bindTexture(_.TEXTURE_2D, ht.fTexture[this.glno]),
							_.uniform1i(this.s_texture1_Loc_Off, 2);
							g = this.getClipBufPre_clipContextDraw().layoutChannelNo,
							m = this.getChannelFlagAsColor(g);
							_.uniform4f(this.u_channelFlag_Loc_Off, m.r, m.g, m.b, m.a),
							_.uniform4f(this.u_baseColor_Loc_Off, p, f, c, d)
						} else _.useProgram(this.shaderProgram),
						this._$vS = Tt(_, this._$vS, i),
						this._$no = Pt(_, this._$no, r),
						_.enableVertexAttribArray(this.a_position_Loc),
						_.vertexAttribPointer(this.a_position_Loc, 2, _.FLOAT, !1, 0, 0),
						this._$NT = Tt(_, this._$NT, s),
						_.activeTexture(_.TEXTURE1),
						_.bindTexture(_.TEXTURE_2D, this.textures[t]),
						_.uniform1i(this.s_texture0_Loc, 1),
						_.enableVertexAttribArray(this.a_texCoord_Loc),
						_.vertexAttribPointer(this.a_texCoord_Loc, 2, _.FLOAT, !1, 0, 0),
						_.uniformMatrix4fv(this.u_matrix_Loc, !1, this.matrix4x4),
						_.uniform4f(this.u_baseColor_Loc, p, f, c, d),
						_.uniform1i(this.u_maskFlag_Loc, !1);
						if (this.culling ? this.gl.enable(_.CULL_FACE) : this.gl.disable(_.CULL_FACE), this.gl.enable(_.BLEND), null != this.clipBufPre_clipContextMask) h = _.ONE,
						l = _.ONE_MINUS_SRC_ALPHA,
						$ = _.ONE,
						u = _.ONE_MINUS_SRC_ALPHA;
						else switch (n) {
						case ut._$ms:
							h = _.ONE,
							l = _.ONE_MINUS_SRC_ALPHA,
							$ = _.ONE,
							u = _.ONE_MINUS_SRC_ALPHA;
							break;
						case ut._$ns:
							h = _.ONE,
							l = _.ONE,
							$ = _.ZERO,
							u = _.ONE;
							break;
						case ut._$_s:
							h = _.DST_COLOR,
							l = _.ONE_MINUS_SRC_ALPHA,
							$ = _.ZERO,
							u = _.ONE
						}
						_.blendEquationSeparate(_.FUNC_ADD, _.FUNC_ADD),
						_.blendFuncSeparate(h, l, $, u),
						this.anisotropyExt && _.texParameteri(_.TEXTURE_2D, this.anisotropyExt.TEXTURE_MAX_ANISOTROPY_EXT, this.maxAnisotropy);
						var x = r.length;
						_.drawElements(_.TRIANGLES, x, _.UNSIGNED_SHORT, 0),
						_.bindTexture(_.TEXTURE_2D, null)
					}
				},
				xt.prototype._$Rs = function() {
					throw new Error("_$Rs")
				},
				xt.prototype._$Ds = function(t) {
					throw new Error("_$Ds")
				},
				xt.prototype._$K2 = function() {
					for (var t = 0; t < this.textures.length; t++) {
						0 != this.textures[t] && (this.gl._$K2(1, this.textures, t), this.textures[t] = null)
					}
				},
				xt.prototype.setTexture = function(t, e) {
					this.textures[t] = e
				},
				xt.prototype.initShader = function() {
					var t = this.gl;
					this.loadShaders2(),
					this.a_position_Loc = t.getAttribLocation(this.shaderProgram, "a_position"),
					this.a_texCoord_Loc = t.getAttribLocation(this.shaderProgram, "a_texCoord"),
					this.u_matrix_Loc = t.getUniformLocation(this.shaderProgram, "u_mvpMatrix"),
					this.s_texture0_Loc = t.getUniformLocation(this.shaderProgram, "s_texture0"),
					this.u_channelFlag = t.getUniformLocation(this.shaderProgram, "u_channelFlag"),
					this.u_baseColor_Loc = t.getUniformLocation(this.shaderProgram, "u_baseColor"),
					this.u_maskFlag_Loc = t.getUniformLocation(this.shaderProgram, "u_maskFlag"),
					this.a_position_Loc_Off = t.getAttribLocation(this.shaderProgramOff, "a_position"),
					this.a_texCoord_Loc_Off = t.getAttribLocation(this.shaderProgramOff, "a_texCoord"),
					this.u_matrix_Loc_Off = t.getUniformLocation(this.shaderProgramOff, "u_mvpMatrix"),
					this.u_clipMatrix_Loc_Off = t.getUniformLocation(this.shaderProgramOff, "u_ClipMatrix"),
					this.s_texture0_Loc_Off = t.getUniformLocation(this.shaderProgramOff, "s_texture0"),
					this.s_texture1_Loc_Off = t.getUniformLocation(this.shaderProgramOff, "s_texture1"),
					this.u_channelFlag_Loc_Off = t.getUniformLocation(this.shaderProgramOff, "u_channelFlag"),
					this.u_baseColor_Loc_Off = t.getUniformLocation(this.shaderProgramOff, "u_baseColor")
				},
				xt.prototype.disposeShader = function() {
					var t = this.gl;
					this.shaderProgram && (t.deleteProgram(this.shaderProgram), this.shaderProgram = null),
					this.shaderProgramOff && (t.deleteProgram(this.shaderProgramOff), this.shaderProgramOff = null)
				},
				xt.prototype.compileShader = function(t, e) {
					var r = this.gl,
					i = e,
					s = r.createShader(t);
					if (null == s) return _._$Ji("_$L0 to create shader"),
					null;
					if (r.shaderSource(s, i), r.compileShader(s), !r.getShaderParameter(s, r.COMPILE_STATUS)) {
						var o = r.getShaderInfoLog(s);
						return _._$Ji("_$L0 to compile shader : " + o),
						r.deleteShader(s),
						null
					}
					return s
				},
				xt.prototype.loadShaders2 = function() {
					var t = this.gl;
					if (this.shaderProgram = t.createProgram(), !this.shaderProgram) return ! 1;
					if (this.shaderProgramOff = t.createProgram(), !this.shaderProgramOff) return ! 1;
					if (this.vertShader = this.compileShader(t.VERTEX_SHADER, "attribute vec4     a_position;attribute vec2     a_texCoord;varying vec2       v_texCoord;varying vec4       v_ClipPos;uniform mat4       u_mvpMatrix;void main(){    gl_Position = u_mvpMatrix * a_position;    v_ClipPos = u_mvpMatrix * a_position;    v_texCoord = a_texCoord;}"), !this.vertShader) return _._$Ji("Vertex shader compile _$li!"),
					!1;
					if (this.vertShaderOff = this.compileShader(t.VERTEX_SHADER, "attribute vec4     a_position;attribute vec2     a_texCoord;varying vec2       v_texCoord;varying vec4       v_ClipPos;uniform mat4       u_mvpMatrix;uniform mat4       u_ClipMatrix;void main(){    gl_Position = u_mvpMatrix * a_position;    v_ClipPos = u_ClipMatrix * a_position;    v_texCoord = a_texCoord ;}"), !this.vertShaderOff) return _._$Ji("OffVertex shader compile _$li!"),
					!1;
					if (this.fragShader = this.compileShader(t.FRAGMENT_SHADER, "precision mediump float;varying vec2       v_texCoord;varying vec4       v_ClipPos;uniform sampler2D  s_texture0;uniform vec4       u_channelFlag;uniform vec4       u_baseColor;uniform bool       u_maskFlag;void main(){    vec4 smpColor;     if(u_maskFlag){        float isInside =             step(u_baseColor.x, v_ClipPos.x/v_ClipPos.w)          * step(u_baseColor.y, v_ClipPos.y/v_ClipPos.w)          * step(v_ClipPos.x/v_ClipPos.w, u_baseColor.z)          * step(v_ClipPos.y/v_ClipPos.w, u_baseColor.w);        smpColor = u_channelFlag * texture2D(s_texture0 , v_texCoord).a * isInside;    }else{        smpColor = texture2D(s_texture0 , v_texCoord) * u_baseColor;    }    gl_FragColor = smpColor;}"), !this.fragShader) return _._$Ji("Fragment shader compile _$li!"),
					!1;
					if (this.fragShaderOff = this.compileShader(t.FRAGMENT_SHADER, "precision mediump float ;varying vec2       v_texCoord;varying vec4       v_ClipPos;uniform sampler2D  s_texture0;uniform sampler2D  s_texture1;uniform vec4       u_channelFlag;uniform vec4       u_baseColor ;void main(){    vec4 col_formask = texture2D(s_texture0, v_texCoord) * u_baseColor;    vec4 clipMask = texture2D(s_texture1, v_ClipPos.xy / v_ClipPos.w) * u_channelFlag;    float maskVal = clipMask.r + clipMask.g + clipMask.b + clipMask.a;    col_formask = col_formask * maskVal;    gl_FragColor = col_formask;}"), !this.fragShaderOff) return _._$Ji("OffFragment shader compile _$li!"),
					!1;
					if (t.attachShader(this.shaderProgram, this.vertShader), t.attachShader(this.shaderProgram, this.fragShader), t.attachShader(this.shaderProgramOff, this.vertShaderOff), t.attachShader(this.shaderProgramOff, this.fragShaderOff), t.linkProgram(this.shaderProgram), t.linkProgram(this.shaderProgramOff), !t.getProgramParameter(this.shaderProgram, t.LINK_STATUS)) {
						var e = t.getProgramInfoLog(this.shaderProgram);
						return _._$Ji("_$L0 to link program: " + e),
						this.vertShader && (t.deleteShader(this.vertShader), this.vertShader = 0),
						this.fragShader && (t.deleteShader(this.fragShader), this.fragShader = 0),
						this.shaderProgram && (t.deleteProgram(this.shaderProgram), this.shaderProgram = 0),
						this.vertShaderOff && (t.deleteShader(this.vertShaderOff), this.vertShaderOff = 0),
						this.fragShaderOff && (t.deleteShader(this.fragShaderOff), this.fragShaderOff = 0),
						this.shaderProgramOff && (t.deleteProgram(this.shaderProgramOff), this.shaderProgramOff = 0),
						!1
					}
					return ! 0
				},
				xt.prototype.createFramebuffer = function() {
					var t = this.gl,
					e = ht.clippingMaskBufferSize,
					r = t.createFramebuffer();
					t.bindFramebuffer(t.FRAMEBUFFER, r);
					var i = t.createRenderbuffer();
					t.bindRenderbuffer(t.RENDERBUFFER, i),
					t.renderbufferStorage(t.RENDERBUFFER, t.RGBA4, e, e),
					t.framebufferRenderbuffer(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.RENDERBUFFER, i);
					var s = t.createTexture();
					return t.bindTexture(t.TEXTURE_2D, s),
					t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, e, e, 0, t.RGBA, t.UNSIGNED_BYTE, null),
					t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR),
					t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR),
					t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE),
					t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE),
					t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, s, 0),
					t.bindTexture(t.TEXTURE_2D, null),
					t.bindRenderbuffer(t.RENDERBUFFER, null),
					t.bindFramebuffer(t.FRAMEBUFFER, null),
					ht.fTexture[this.glno] = s,
					{
						framebuffer: r,
						renderbuffer: i,
						texture: ht.fTexture[this.glno]
					}
				},
				St.prototype._$fP = function() {
					var t, e, r, i = this._$ST();
					if (0 == (128 & i)) return 255 & i;
					if (0 == (128 & (t = this._$ST()))) return (127 & i) << 7 | 127 & t;
					if (0 == (128 & (e = this._$ST()))) return (127 & i) << 14 | (127 & t) << 7 | 255 & e;
					if (0 == (128 & (r = this._$ST()))) return (127 & i) << 21 | (127 & t) << 14 | (127 & e) << 7 | 255 & r;
					throw new $t("_$L _$0P  _")
				},
				St.prototype.getFormatVersion = function() {
					return this._$S2
				},
				St.prototype._$gr = function(t) {
					this._$S2 = t
				},
				St.prototype._$3L = function() {
					return this._$fP()
				},
				St.prototype._$mP = function() {
					return this._$zT(),
					this._$F += 8,
					this._$T.getFloat64(this._$F - 8)
				},
				St.prototype._$_T = function() {
					return this._$zT(),
					this._$F += 4,
					this._$T.getFloat32(this._$F - 4)
				},
				St.prototype._$6L = function() {
					return this._$zT(),
					this._$F += 4,
					this._$T.getInt32(this._$F - 4)
				},
				St.prototype._$ST = function() {
					return this._$zT(),
					this._$T.getInt8(this._$F++)
				},
				St.prototype._$9T = function() {
					return this._$zT(),
					this._$F += 2,
					this._$T.getInt16(this._$F - 2)
				},
				St.prototype._$2T = function() {
					throw this._$zT(),
					this._$F += 8,
					new $t("_$L _$q read long")
				},
				St.prototype._$po = function() {
					return this._$zT(),
					0 != this._$T.getInt8(this._$F++)
				};
				var vt = !0;
				function Lt() {}
				function wt(t) {
					e || (this._$e0 = null, this._$IP = null, this._$Us = null, this._$7s = null, this._$IS = [!1], this._$VS = null, this._$AT = !0, this.baseOpacity = 1, this.clipBufPre_clipContext = null, this._$e0 = t)
				}
				function Mt() {}
				St.prototype._$bT = function() {
					this._$zT();
					var t = this._$3L(),
					e = null;
					if (vt) try {
						var r = new ArrayBuffer(2 * t);
						e = new Uint16Array(r);
						for (var i = 0; i < t; ++i) e[i] = this._$T.getUint8(this._$F++);
						return String.fromCharCode.apply(null, e)
					} catch(t) {
						vt = !1
					}
					try {
						var s = new Array;
						if (null == e) for (i = 0; i < t; ++i) s[i] = this._$T.getUint8(this._$F++);
						else for (i = 0; i < t; ++i) s[i] = e[i];
						return String.fromCharCode.apply(null, s)
					} catch(t) {
						console.log("read utf8 / _$rT _$L0 !! : " + t)
					}
				},
				St.prototype._$cS = function() {
					this._$zT();
					for (var t = this._$3L(), e = new Int32Array(t), r = 0; r < t; r++) e[r] = this._$T.getInt32(this._$F),
					this._$F += 4;
					return e
				},
				St.prototype._$Tb = function() {
					this._$zT();
					for (var t = this._$3L(), e = new Float32Array(t), r = 0; r < t; r++) e[r] = this._$T.getFloat32(this._$F),
					this._$F += 4;
					return e
				},
				St.prototype._$5b = function() {
					this._$zT();
					for (var t = this._$3L(), e = new Float64Array(t), r = 0; r < t; r++) e[r] = this._$T.getFloat64(this._$F),
					this._$F += 8;
					return e
				},
				St.prototype._$nP = function() {
					return this._$Jb( - 1)
				},
				St.prototype._$Jb = function(t) {
					if (this._$zT(), t < 0 && (t = this._$3L()), t == G._$7P) {
						var e = this._$6L();
						if (0 <= e && e < this._$Ko.length) return this._$Ko[e];
						throw new $t("_$sL _$4i @_$m0")
					}
					var r = this._$4b(t);
					return this._$Ko.push(r),
					r
				},
				St.prototype._$4b = function(t) {
					if (0 == t) return null;
					if (50 == t) {
						var e = this._$bT();
						return s = C.getID(e)
					}
					if (51 == t) {
						e = this._$bT();
						return s = yt.getID(e)
					}
					if (134 == t) {
						e = this._$bT();
						return s = $.getID(e)
					}
					if (60 == t) {
						e = this._$bT();
						return s = u.getID(e)
					}
					if (t >= 48) {
						var r = G._$9o(t);
						return null != r ? (r._$F0(this), r) : null
					}
					switch (t) {
					case 1:
						return this._$bT();
					case 10:
						return new n(this._$6L(), !0);
					case 11:
						return new S(this._$mP(), this._$mP(), this._$mP(), this._$mP());
					case 12:
						return new S(this._$_T(), this._$_T(), this._$_T(), this._$_T());
					case 13:
						return new L(this._$mP(), this._$mP());
					case 14:
						return new L(this._$_T(), this._$_T());
					case 15:
						for (var i = this._$3L(), s = new Array(i), o = 0; o < i; o++) s[o] = this._$nP();
						return s;
					case 17:
						return s = new F(this._$mP(), this._$mP(), this._$mP(), this._$mP(), this._$mP(), this._$mP());
					case 21:
						return new l(this._$6L(), this._$6L(), this._$6L(), this._$6L());
					case 22:
						return new ft(this._$6L(), this._$6L());
					case 23:
						throw new Error("_$L _$ro ");
					case 16:
					case 25:
						return this._$cS();
					case 26:
						return this._$5b();
					case 27:
						return this._$Tb();
					case 2:
					case 3:
					case 4:
					case 5:
					case 6:
					case 7:
					case 8:
					case 9:
					case 18:
					case 19:
					case 20:
					case 24:
					case 28:
						throw new $t("_$6 _$q : _$nP() of 2-9 ,18,19,20,24,28 : " + t);
					default:
						throw new $t("_$6 _$q : _$nP() NO _$i : " + t)
					}
				},
				St.prototype._$8L = function() {
					return 0 == this._$hL ? this._$v0 = this._$ST() : 8 == this._$hL && (this._$v0 = this._$ST(), this._$hL = 0),
					1 == (this._$v0 >> 7 - this._$hL++&1)
				},
				St.prototype._$zT = function() {
					0 != this._$hL && (this._$hL = 0)
				},
				Lt._$2S = Math.PI / 180,
				Lt._$bS = Math.PI / 180,
				Lt._$wS = 180 / Math.PI,
				Lt._$NS = 180 / Math.PI,
				Lt.PI_F = Math.PI,
				Lt._$kT = [0, .012368, .024734, .037097, .049454, .061803, .074143, .086471, .098786, .111087, .12337, .135634, .147877, .160098, .172295, .184465, .196606, .208718, .220798, .232844, .244854, .256827, .268761, .280654, .292503, .304308, .316066, .327776, .339436, .351044, .362598, .374097, .385538, .396921, .408243, .419502, .430697, .441826, .452888, .463881, .474802, .485651, .496425, .507124, .517745, .528287, .538748, .549126, .559421, .56963, .579752, .589785, .599728, .609579, .619337, .629, .638567, .648036, .657406, .666676, .675843, .684908, .693867, .70272, .711466, .720103, .72863, .737045, .745348, .753536, .76161, .769566, .777405, .785125, .792725, .800204, .807561, .814793, .821901, .828884, .835739, .842467, .849066, .855535, .861873, .868079, .874153, .880093, .885898, .891567, .897101, .902497, .907754, .912873, .917853, .922692, .92739, .931946, .936359, .940629, .944755, .948737, .952574, .956265, .959809, .963207, .966457, .96956, .972514, .97532, .977976, .980482, .982839, .985045, .987101, .989006, .990759, .992361, .993811, .995109, .996254, .997248, .998088, .998776, .999312, .999694, .999924, 1],
				Lt._$92 = function(t, e) {
					var r = Math.atan2(t[1], t[0]),
					i = Math.atan2(e[1], e[0]);
					return Lt._$tS(r, i)
				},
				Lt._$tS = function(t, e) {
					for (var r = t - e; r < -Math.PI;) r += 2 * Math.PI;
					for (; r > Math.PI;) r -= 2 * Math.PI;
					return r
				},
				Lt._$9 = function(t) {
					return Math.sin(t)
				},
				Lt.fcos = function(t) {
					return Math.cos(t)
				},
				wt.prototype._$u2 = function() {
					return this._$IS[0]
				},
				wt.prototype._$yo = function() {
					return this._$AT && !this._$IS[0]
				},
				wt.prototype._$GT = function() {
					return this._$e0
				},
				Mt._$W2 = 0,
				Mt.SYSTEM_INFO = null,
				Mt.USER_AGENT = navigator.userAgent,
				Mt.isIPhone = function() {
					return Mt.SYSTEM_INFO || Mt.setup(),
					Mt.SYSTEM_INFO._isIPhone
				},
				Mt.isIOS = function() {
					return Mt.SYSTEM_INFO || Mt.setup(),
					Mt.SYSTEM_INFO._isIPhone || Mt.SYSTEM_INFO._isIPad
				},
				Mt.isAndroid = function() {
					return Mt.SYSTEM_INFO || Mt.setup(),
					Mt.SYSTEM_INFO._isAndroid
				},
				Mt.getOSVersion = function() {
					return Mt.SYSTEM_INFO || Mt.setup(),
					Mt.SYSTEM_INFO.version
				},
				Mt.getOS = function() {
					return Mt.SYSTEM_INFO || Mt.setup(),
					Mt.SYSTEM_INFO._isIPhone || Mt.SYSTEM_INFO._isIPad ? "iOS": Mt.SYSTEM_INFO._isAndroid ? "Android": "_$Q0 OS"
				},
				Mt.setup = function() {
					var t, e = Mt.USER_AGENT;
					function r(t, e) {
						for (var r = t.substring(e).split(/[ _,;\.]/), i = 0, s = 0; s <= 2 && !isNaN(r[s]); s++) {
							var o = parseInt(r[s]);
							if (o < 0 || o > 999) {
								_._$li("err : " + o + " @UtHtml5.setup()"),
								i = 0;
								break
							}
							i += o * Math.pow(1e3, 2 - s)
						}
						return i
					}
					var i = Mt.SYSTEM_INFO = {
						userAgent: e
					};
					if ((t = e.indexOf("iPhone OS ")) >= 0) i.os = "iPhone",
					i._isIPhone = !0,
					i.version = r(e, t + "iPhone OS ".length);
					else if ((t = e.indexOf("iPad")) >= 0) {
						if ((t = e.indexOf("CPU OS")) < 0) return void _._$li(" err : " + e + " @UtHtml5.setup()");
						i.os = "iPad",
						i._isIPad = !0,
						i.version = r(e, t + "CPU OS ".length)
					} else(t = e.indexOf("Android")) >= 0 ? (i.os = "Android", i._isAndroid = !0, i.version = r(e, t + "Android ".length)) : (i.os = "-", i.version = -1)
				},
				window.UtSystem = I,
				window.UtDebug = _,
				window.LDTransform = mt,
				window.LDGL = nt,
				window.Live2D = ht,
				window.Live2DModelWebGL = ct,
				window.Live2DModelJS = Q,
				window.Live2DMotion = Z,
				window.MotionQueueManager = dt,
				window.PhysicsHair = f,
				window.AMotion = a,
				window.PartsDataID = $,
				window.DrawDataID = C,
				window.BaseDataID = yt,
				window.ParamID = u,
				ht.init();
				e = !1
			} ()
		}).call(this, r("df82"))
	},
	d8bf: function(t, e, r) {
		var i = r("6cdd");
		"string" == typeof i && (i = [[t.i, i, ""]]),
		i.locals && (t.exports = i.locals); (0, r("499e").
	default)("f75b58e6", i, !0, {
			sourceMap: !1,
			shadowMode: !1
		})
	},
	df82: function(t, e) {
		t.exports = {
			import: function() {
				throw new Error("System.import cannot be used indirectly")
			}
		}
	},
	fb15: function(t, e, r) {
		"use strict";
		var i; (r.r(e), "undefined" != typeof window) && ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/] + \.js(\ ? . * ) ? $ / )) && (r.p = i[1]));
		var s = r("8bbf"),
		o = r.n(s);
		r("bd60");
		const n = (...t) = >{},
		a = (...t) = >{
			console.error(...t)
		},
		_ = (...t) = >{};
		var h = class {
			loadBytes(t, e) {
				const r = new XMLHttpRequest;
				r.open("GET", t, !0),
				r.responseType = "arraybuffer",
				r.onload = (() = >{
					switch (r.status) {
					case 200:
						e(r.response);
						break;
					default:
						a(`Failed to load($ {
							r.status
						}):
						$ {
							t
						}`)
					}
				}),
				r.send(null)
			}
			loadString(t) {
				this.loadBytes(t, t = >t)
			}
			loadLive2DModel(t, e, r) {
				let i = null;
				this.loadBytes(t, t = >{
					i = Live2DModelWebGL.loadModel(t, Number(e.canvas.getAttribute("data-hook"))),
					r(i)
				})
			}
			loadTexture(t, e, r, i, s) {
				let o = new Image;
				o.crossOrigin = "Anonymous";
				const n = i.canvas.getAttribute("data-path");
				o.src = n || r,
				o.onload = (() = >{
					let r = i.createTexture();
					if (!r) return a("Failed to generate gl texture name."),
					-1; ! 1 === t.isPremultipliedAlpha() && i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1),
					i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, 1),
					i.activeTexture(i.TEXTURE0),
					i.bindTexture(i.TEXTURE_2D, r),
					i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, i.RGBA, i.UNSIGNED_BYTE, o),
					i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MAG_FILTER, i.LINEAR),
					i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, i.LINEAR_MIPMAP_NEAREST),
					i.generateMipmap(i.TEXTURE_2D),
					t.setTexture(e, r),
					r = null,
					"function" == typeof s && s()
				}),
				o.onerror = (() = >{
					a(`Failed to load image: $ {
						r
					}`)
				})
			}
			jsonParseFromBytes(t) {
				let e,
				r = new Uint8Array(t, 0, 3);
				return e = 239 === r[0] && 187 === r[1] && 191 === r[2] ? String.fromCharCode.apply(null, new Uint8Array(t, 3)) : String.fromCharCode.apply(null, new Uint8Array(t)),
				JSON.parse(e)
			}
		};
		let l = 0;
		class $ {
			constructor() {
				this.live2DModel = null,
				this.modelMatrix = null,
				this.eyeBlink = null,
				this.physics = null,
				this.pose = null,
				this.debugMode = !1,
				this.initialized = !1,
				this.updating = !1,
				this.alpha = 1,
				this.accAlpha = 0,
				this.lipSync = !1,
				this.lipSyncValue = 0,
				this.accelX = 0,
				this.accelY = 0,
				this.accelZ = 0,
				this.dragX = 0,
				this.dragY = 0,
				this.startTimeMSec = null,
				this.mainMotionManager = new d,
				this.expressionManager = new d,
				this.motions = {},
				this.expressions = {},
				this.isTexLoaded = !1
			}
			getModelMatrix() {
				return this.modelMatrix
			}
			setAlpha(t) {
				t > .999 && (t = 1),
				t < .001 && (t = 0),
				this.alpha = t
			}
			getAlpha() {
				return this.alpha
			}
			isInitialized() {
				return this.initialized
			}
			setInitialized(t) {
				this.initialized = t
			}
			isUpdating() {
				return this.updating
			}
			setUpdating(t) {
				this.updating = t
			}
			getLive2DModel() {
				return this.live2DModel
			}
			setLipSync(t) {
				this.lipSync = t
			}
			setLipSyncValue(t) {
				this.lipSyncValue = t
			}
			setAccel(t, e, r) {
				this.accelX = t,
				this.accelY = e,
				this.accelZ = r
			}
			setDrag(t, e) {
				this.dragX = t,
				this.dragY = e
			}
			getMainMotionManager() {
				return this.mainMotionManager
			}
			getExpressionManager() {
				return this.expressionManager
			}
			loadModelData(t, e, r) {
				let i = P.getInstance().getPlatformManager(Number(e.canvas.getAttribute("data-hook")));
				this.debugMode && i.log(`Load model: $ {
					t
				}`),
				i.loadLive2DModel(t, e, t = >{
					this.live2DModel = t,
					this.live2DModel.saveParam(),
					0 === Live2D.getError() ? (this.modelMatrix = new c(this.live2DModel.getCanvasWidth(), this.live2DModel.getCanvasHeight()), this.modelMatrix.setWidth(2), this.modelMatrix.setCenterPosition(0, 0), r(this.live2DModel)) : a("Error : Failed to loadModelData().")
				})
			}
			loadTexture(t, e, r, i) {
				l++;
				let s = P.getInstance().getPlatformManager(Number(r.canvas.getAttribute("data-hook")));
				this.debugMode && s.log(`Load Texture: $ {
					e
				}`),
				s.loadTexture(this.live2DModel, t, e, r, () = >{
					0 === --l && (this.isTexLoaded = !0),
					"function" == typeof i && i()
				})
			}
			loadMotion(t, e, r, i) {
				const s = Number(r.canvas.getAttribute("data-hook"));
				let o = P.getInstance().getPlatformManager(s);
				this.debugMode && o.log(`Load Motion: $ {
					e
				}`);
				let n = null;
				o.loadBytes(e, e = >{
					n = Live2DMotion.loadMotion(e),
					null != t && (this.motions[t] = n),
					i(n)
				})
			}
			loadExpression(t, e, r, i) {
				let s = P.getInstance().getPlatformManager(Number(r.canvas.getAttribute("data-hook")));
				this.debugMode && s.log(`Load Expression: $ {
					e
				}`),
				s.loadBytes(e, e = >{
					null != t && (this.expressions[t] = u.loadJson(e, r)),
					"function" == typeof i && i()
				})
			}
			loadPose(t, e, r) {
				let i = P.getInstance().getPlatformManager(Number(e.canvas.getAttribute("data-hook")));
				this.debugMode && i.log(`Load Pose: $ {
					t
				}`);
				try {
					i.loadBytes(t, t = >{
						this.pose = m.load(t),
						"function" == typeof r && r()
					})
				} catch(t) {
					_(t)
				}
			}
			loadPhysics(t, e) {
				let r = P.getInstance().getPlatformManager(Number(e.canvas.getAttribute("data-hook")));
				this.debugMode && r.log(`Load Physics: $ {
					t
				}`);
				try {
					r.loadBytes(t, t = >{
						this.physics = g.load(t, e)
					})
				} catch(t) {
					_(t)
				}
			}
			hitTestSimple(t, e, r) {
				if (null === this.live2DModel) return ! 1;
				let i = this.live2DModel.getDrawDataIndex(t);
				if (i < 0) return ! 1;
				let[s, o, n, a, _] = [this.live2DModel.getTransformedPoints(i), this.live2DModel.getCanvasWidth(), 0, this.live2DModel.getCanvasHeight(), 0];
				for (let t = 0; t < s.length; t += 2) {
					let e = s[t],
					r = s[t + 1];
					e < o && (o = e),
					e > n && (n = e),
					r < a && (a = r),
					r > _ && (_ = r)
				}
				let[h, l] = [this.modelMatrix.invertTransformX(e), this.modelMatrix.invertTransformY(r)];
				return o <= h && h <= n && a <= l && l <= _
			}
			hitTestSimpleCustom(t, e, r, i) {
				return null !== this.live2DModel && (!(!t || !e) && (r >= t[0] && r <= e[0] && i <= t[1] && i >= e[1]))
			}
		}
		class u extends AMotion {
			constructor() {
				super(),
				this.paramList = []
			}
			updateParamExe(t, e, r, i) {
				for (let e = this.paramList.length - 1; e >= 0; --e) {
					let i = this.paramList[e];
					i.type === u.TYPE_ADD ? t.addToParamFloat(i.id, i.value, r) : i.type === u.TYPE_MULT ? t.multParamFloat(i.id, i.value, r) : i.type === u.TYPE_SET && t.setParamFloat(i.id, i.value, r)
				}
			}
		}
		u.EXPRESSION_DEFAULT = "DEFAULT",
		u.TYPE_SET = 0,
		u.TYPE_ADD = 1,
		u.TYPE_MULT = 2,
		u.loadJson = ((t, e) = >{
			let r = new u,
			i = P.getInstance().getPlatformManager(Number(e.canvas.getAttribute("data-hook"))).jsonParseFromBytes(t);
			if (r.setFadeIn(parseInt(i.fade_in) > 0 ? parseInt(i.fade_in) : 1e3), r.setFadeOut(parseInt(i.fade_out) > 0 ? parseInt(i.fade_out) : 1e3), null == i.params) return r;
			let s = i.params,
			o = s.length;
			r.paramList = [];
			for (let t = 0; t < o; t++) {
				let e = s[t],
				i = e.id.toString(),
				o = parseFloat(e.val),
				n = u.TYPE_ADD,
				a = null != e.calc ? e.calc.toString() : "add";
				if ((n = "add" === a ? u.TYPE_ADD: "mult" === a ? u.TYPE_MULT: "set" === a ? u.TYPE_SET: u.TYPE_ADD) === u.TYPE_ADD) {
					o -= null == e.def ? 0 : parseFloat(e.def)
				} else if (n === u.TYPE_MULT) {
					let t = null == e.def ? 1 : parseFloat(e.def);
					0 === t && (t = 1),
					o /= t
				}
				let _ = new p;
				_.id = i,
				_.type = n,
				_.value = o,
				r.paramList.push(_)
			}
			return r
		});
		class p {
			constructor() {
				this.id = "",
				this.type = -1,
				this.value = null
			}
		}
		class f {
			constructor() {
				this.tr = new Float32Array(16),
				this.identity()
			}
			identity() {
				for (let t = 0; t < 16; t++) this.tr[t] = t % 5 == 0 ? 1 : 0
			}
			getArray() {
				return this.tr
			}
			getCopyMatrix() {
				return new Float32Array(this.tr)
			}
			setMatrix(t) {
				if (null != this.tr && this.tr.length == this.tr.length) for (let e = 0; e < 16; e++) this.tr[e] = t[e]
			}
			getScaleX() {
				return this.tr[0]
			}
			getScaleY() {
				return this.tr[5]
			}
			transformX(t) {
				return this.tr[0] * t + this.tr[12]
			}
			transformY(t) {
				return this.tr[5] * t + this.tr[13]
			}
			invertTransformX(t) {
				return (t - this.tr[12]) / this.tr[0]
			}
			invertTransformY(t) {
				return (t - this.tr[13]) / this.tr[5]
			}
			multTranslate(t, e) {
				let r = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, 0, 1];
				f.mul(r, this.tr, this.tr)
			}
			translate(t, e) {
				this.tr[12] = t,
				this.tr[13] = e
			}
			translateX(t) {
				this.tr[12] = t
			}
			translateY(t) {
				this.tr[13] = t
			}
			multScale(t, e) {
				let r = [t, 0, 0, 0, 0, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
				f.mul(r, this.tr, this.tr)
			}
			scale(t, e) {
				this.tr[0] = t,
				this.tr[5] = e
			}
		}
		f.mul = ((t, e, r) = >{
			let i,
			s,
			o,
			n = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			for (i = 0; i < 4; i++) for (s = 0; s < 4; s++) for (o = 0; o < 4; o++) n[i + 4 * s] += t[i + 4 * o] * e[o + 4 * s];
			for (i = 0; i < 16; i++) r[i] = n[i]
		});
		class c extends f {
			constructor(t, e) {
				super(),
				this.width = t,
				this.height = e
			}
			setPosition(t, e) {
				let r = this.width * this.getScaleX(),
				i = this.height * this.getScaleY();
				this.translate(t - r / 2, e - i / 2)
			}
			setCenterPosition(t, e) {
				let r = this.width * this.getScaleX(),
				i = this.height * this.getScaleY();
				this.translate(t - r / 2, e - i / 2)
			}
			top(t) {
				this.setY(t)
			}
			bottom(t) {
				let e = this.height * this.getScaleY();
				this.translateY(t - e)
			}
			left(t) {
				this.setX(t)
			}
			right(t) {
				let e = this.width * this.getScaleX();
				this.translateX(t - e)
			}
			centerX(t) {
				let e = this.width * this.getScaleX();
				this.translateX(t - e / 2)
			}
			centerY(t) {
				let e = this.height * this.getScaleY();
				this.translateY(t - e / 2)
			}
			setX(t) {
				this.translateX(t)
			}
			setY(t) {
				this.translateY(t)
			}
			setHeight(t) {
				let e = t / this.height,
				r = -e;
				this.scale(e, r)
			}
			setWidth(t) {
				let e = t / this.width,
				r = -e;
				this.scale(e, r)
			}
		}
		class d extends MotionQueueManager {
			constructor() {
				super(),
				this.currentPriority = null,
				this.reservePriority = null,
				this.super = MotionQueueManager.prototype
			}
			getCurrentPriority() {
				return this.currentPriority
			}
			getReservePriority() {
				return this.reservePriority
			}
			reserveMotion(t) {
				return ! (this.reservePriority >= t) && (!(this.currentPriority >= t) && (this.reservePriority = t, !0))
			}
			setReservePriority(t) {
				this.reservePriority = t
			}
			updateParam(t) {
				let e = MotionQueueManager.prototype.updateParam.call(this, t);
				return this.isFinished() && (this.currentPriority = 0),
				e
			}
			startMotionPrio(t, e) {
				return e === this.reservePriority && (this.reservePriority = 0),
				this.currentPriority = e,
				this.startMotion(t, !1)
			}
		}
		class g {
			constructor() {
				this.physicsList = [],
				this.startTimeMSec = UtSystem.getUserTimeMSec()
			}
			updateParam(t) {
				let e = UtSystem.getUserTimeMSec() - this.startTimeMSec;
				for (let r = 0; r < this.physicsList.length; r++) this.physicsList[r].update(t, e)
			}
		}
		g.load = ((t, e) = >{
			let r = new g,
			i = P.getInstance().getPlatformManager(Number(e.canvas.getAttribute("data-hook"))).jsonParseFromBytes(t).physics_hair,
			s = i.length;
			for (let t = 0; t < s; t++) {
				let e = i[t],
				s = new PhysicsHair,
				o = e.setup,
				n = parseFloat(o.length),
				_ = parseFloat(o.regist),
				h = parseFloat(o.mass);
				s.setup(n, _, h);
				let l = e.src,
				$ = l.length;
				for (let t = 0; t < $; t++) {
					let e = l[t],
					r = e.id,
					i = PhysicsHair.Src.SRC_TO_X,
					o = e.ptype;
					"x" === o ? i = PhysicsHair.Src.SRC_TO_X: "y" === o ? i = PhysicsHair.Src.SRC_TO_Y: "angle" === o ? i = PhysicsHair.Src.SRC_TO_G_ANGLE: a("live2d", "Invalid parameter:PhysicsHair.Src");
					let n = parseFloat(e.scale),
					_ = parseFloat(e.weight);
					s.addSrcParam(i, r, n, _)
				}
				let u = e.targets,
				p = u.length;
				for (let t = 0; t < p; t++) {
					let e = u[t],
					r = e.id,
					i = PhysicsHair.Target.TARGET_FROM_ANGLE,
					o = e.ptype;
					"angle" === o ? i = PhysicsHair.Target.TARGET_FROM_ANGLE: "angle_v" === o ? i = PhysicsHair.Target.TARGET_FROM_ANGLE_V: a("live2d", "Invalid parameter:PhysicsHair.Target");
					let n = parseFloat(e.scale),
					_ = parseFloat(e.weight);
					s.addTargetParam(i, r, n, _)
				}
				r.physicsList.push(s)
			}
			return r
		});
		class m {
			constructor() {
				this.lastTime = 0,
				this.lastModel = null,
				this.partsGroups = []
			}
			updateParam(t) {
				if (null == t) return;
				t !== this.lastModel && this.initParam(t),
				this.lastModel = t;
				let e = UtSystem.getUserTimeMSec(),
				r = 0 === this.lastTime ? 0 : (e - this.lastTime) / 1e3;
				this.lastTime = e,
				r < 0 && (r = 0);
				for (let e = 0; e < this.partsGroups.length; e++) this.normalizePartsOpacityGroup(t, this.partsGroups[e], r),
				this.copyOpacityOtherParts(t, this.partsGroups[e])
			}
			initParam(t) {
				if (null != t) for (let e = 0; e < this.partsGroups.length; e++) {
					let r = this.partsGroups[e];
					for (let e = 0; e < r.length; e++) {
						r[e].initIndex(t);
						let i = r[e].partsIndex,
						s = r[e].paramIndex;
						if (i < 0) continue;
						let o = 0 !== t.getParamFloat(s);
						if (t.setPartsOpacity(i, o ? 1 : 0), t.setParamFloat(s, o ? 1 : 0), null != r[e].link) for (let i = 0; i < r[e].link.length; i++) r[e].link[i].initIndex(t)
					}
				}
			}
			normalizePartsOpacityGroup(t, e, r) {
				let[i, s, o, n, a] = [ - 1, 1, .5, .5, .15];
				for (let n = 0; n < e.length; n++) {
					let a = e[n].partsIndex,
					_ = e[n].paramIndex;
					if (! (a < 0) && 0 !== t.getParamFloat(_)) {
						if (i >= 0) break;
						i = n,
						s = t.getPartsOpacity(a),
						(s += r / o) > 1 && (s = 1)
					}
				}
				i < 0 && (i = 0, s = 1);
				for (let r = 0; r < e.length; r++) {
					let o = e[r].partsIndex;
					if (! (o < 0)) if (i === r) t.setPartsOpacity(o, s);
					else {
						let e,
						r = t.getPartsOpacity(o); (1 - (e = s < n ? s * (n - 1) / n + 1 : (1 - s) * n / (1 - n))) * (1 - s) > a && (e = 1 - a / (1 - s)),
						r > e && (r = e),
						t.setPartsOpacity(o, r)
					}
				}
			}
			copyOpacityOtherParts(t, e) {
				for (let r = 0; r < e.length; r++) {
					let i = e[r];
					if (null == i.link) continue;
					if (i.partsIndex < 0) continue;
					let s = t.getPartsOpacity(i.partsIndex);
					for (let e = 0; e < i.link.length; e++) {
						let r = i.link[e];
						r.partsIndex < 0 || t.setPartsOpacity(r.partsIndex, s)
					}
				}
			}
		}
		m.load = (t = >{
			let e = new m,
			r = P.getPlatformManager().jsonParseFromBytes(t).parts_visible,
			i = r.length;
			for (let t = 0; t < i; t++) {
				let i = r[t].group,
				s = i.length,
				o = [];
				for (let t = 0; t < s; t++) {
					let e = i[t],
					r = new y(e.id);
					if (o[t] = r, null == e.link) continue;
					let s = e.link,
					n = s.length;
					r.link = [];
					for (let t = 0; t < n; t++) {
						let e = new y(s[t]);
						r.link.push(e)
					}
				}
				e.partsGroups.push(o)
			}
			return e
		});
		class y {
			constructor(t) {
				this.paramIndex = -1,
				this.partsIndex = -1,
				this.link = null,
				this.id = t
			}
			initIndex(t) {
				this.paramIndex = t.getParamIndex(`VISIBLE: $ {
					this.id
				}`),
				this.partsIndex = t.getPartsDataIndex(PartsDataID.getID(this.id)),
				t.setParamFloat(this.paramIndex, 1)
			}
		}
		class x {
			constructor() {
				this.EPSILON = .01,
				this.faceTargetX = 0,
				this.faceTargetY = 0,
				this.faceX = 0,
				this.faceY = 0,
				this.faceVX = 0,
				this.faceVY = 0,
				this.lastTimeSec = 0
			}
			setPoint(t, e) {
				this.faceTargetX = t,
				this.faceTargetY = e
			}
			getX() {
				return this.faceX
			}
			getY() {
				return this.faceY
			}
			update() {
				const t = 40 / 7.5 / x.FRAME_RATE;
				if (0 === this.lastTimeSec) return void(this.lastTimeSec = UtSystem.getUserTimeMSec());
				let e = UtSystem.getUserTimeMSec(),
				r = (e - this.lastTimeSec) * x.FRAME_RATE / 1e3;
				this.lastTimeSec = e;
				const i = r * t / (.15 * x.FRAME_RATE);
				let s = this.faceTargetX - this.faceX,
				o = this.faceTargetY - this.faceY;
				if (Math.abs(s) <= this.EPSILON && Math.abs(o) <= this.EPSILON) return;
				let n = Math.sqrt(s * s + o * o),
				a = t * o / n,
				_ = t * s / n - this.faceVX,
				h = a - this.faceVY,
				l = Math.sqrt(_ * _ + h * h); (l < -i || l > i) && (_ *= i / l, h *= i / l, l = i),
				this.faceVX += _,
				this.faceVY += h; {
					let t = .5 * (Math.sqrt(i * i + 16 * i * n - 8 * i * n) - i),
					e = Math.sqrt(this.faceVX * this.faceVX + this.faceVY * this.faceVY);
					e > t && (this.faceVX *= t / e, this.faceVY *= t / e)
				}
				this.faceX += this.faceVX,
				this.faceY += this.faceVY
			}
		}
		x.FRAME_RATE = 30;
		class T extends f {
			constructor() {
				super(),
				this.screenLeft = null,
				this.screenRight = null,
				this.screenTop = null,
				this.screenBottom = null,
				this.maxLeft = null,
				this.maxRight = null,
				this.maxTop = null,
				this.maxBottom = null,
				this.max = Number.MAX_VALUE,
				this.min = 0
			}
			getMaxScale() {
				return this.max
			}
			getMinScale() {
				return this.min
			}
			setMaxScale(t) {
				this.max = t
			}
			setMinScale(t) {
				this.min = t
			}
			isMaxScale() {
				return this.getScaleX() === this.max
			}
			isMinScale() {
				return this.getScaleX() === this.min
			}
			adjustTranslate(t, e) {
				this.tr[0] * this.maxLeft + (this.tr[12] + t) > this.screenLeft && (t = this.screenLeft - this.tr[0] * this.maxLeft - this.tr[12]),
				this.tr[0] * this.maxRight + (this.tr[12] + t) < this.screenRight && (t = this.screenRight - this.tr[0] * this.maxRight - this.tr[12]),
				this.tr[5] * this.maxTop + (this.tr[13] + e) < this.screenTop && (e = this.screenTop - this.tr[5] * this.maxTop - this.tr[13]),
				this.tr[5] * this.maxBottom + (this.tr[13] + e) > this.screenBottom && (e = this.screenBottom - this.tr[5] * this.maxBottom - this.tr[13]);
				let r = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, 0, 1];
				f.mul(r, this.tr, this.tr)
			}
			adjustScale(t, e, r) {
				let i = r * this.tr[0];
				i < this.min ? this.tr[0] > 0 && (r = this.min / this.tr[0]) : i > this.max && this.tr[0] > 0 && (r = this.max / this.tr[0]);
				let s = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, 0, 1],
				o = [r, 0, 0, 0, 0, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
				n = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -t, -e, 0, 1];
				f.mul(n, this.tr, this.tr),
				f.mul(o, this.tr, this.tr),
				f.mul(s, this.tr, this.tr)
			}
			setScreenRect(t, e, r, i) {
				this.screenLeft = t,
				this.screenRight = e,
				this.screenTop = i,
				this.screenBottom = r
			}
			setMaxScreenRect(t, e, r, i) {
				this.maxLeft = t,
				this.maxRight = e,
				this.maxTop = i,
				this.maxBottom = r
			}
			getScreenLeft() {
				return this.screenLeft
			}
			getScreenRight() {
				return this.screenRight
			}
			getScreenBottom() {
				return this.screenBottom
			}
			getScreenTop() {
				return this.screenTop
			}
			getMaxLeft() {
				return this.maxLeft
			}
			getMaxRight() {
				return this.maxRight
			}
			getMaxBottom() {
				return this.maxBottom
			}
			getMaxTop() {
				return this.maxTop
			}
		}
		class P {
			static getInstance() {
				return this.instance || (this.instance = new P),
				this.instance
			}
			constructor() {
				this.allPlatformManager = []
			}
			setPlatformManager(t, e) {
				this.allPlatformManager[e] = t
			}
			getPlatformManager(t) {
				return this.allPlatformManager[t]
			}
			getAllPlatformManager() {
				return this.allPlatformManager
			}
		}
		var S = class {
			constructor(t) {
				this.NAME = "name",
				this.ID = "id",
				this.MODEL = "model",
				this.TEXTURES = "textures",
				this.HIT_AREAS = "hit_areas",
				this.PHYSICS = "physics",
				this.POSE = "pose",
				this.EXPRESSIONS = "expressions",
				this.MOTION_GROUPS = "motions",
				this.SOUND = "sound",
				this.FADE_IN = "fade_in",
				this.FADE_OUT = "fade_out",
				this.LAYOUT = "layout",
				this.HIT_AREAS_CUSTOM = "hit_areas_custom",
				this.INIT_PARAM = "init_param",
				this.INIT_PARTS_VISIBLE = "init_parts_visible",
				this.VALUE = "val",
				this.FILE = "file",
				this.live2DNumder = t,
				this.json = {}
			}
			loadModelSetting(t, e) {
				P.getInstance().getPlatformManager(this.live2DNumder).loadBytes(t, t = >{
					let r = String.fromCharCode.apply(null, new Uint8Array(t));
					this.json = JSON.parse(r),
					e()
				})
			}
			getTextureFile(t) {
				return null == this.json[this.TEXTURES] || null == this.json[this.TEXTURES][t] ? null: this.json[this.TEXTURES][t]
			}
			getModelFile() {
				return this.json[this.MODEL]
			}
			getTextureNum() {
				return null == this.json[this.TEXTURES] ? 0 : this.json[this.TEXTURES].length
			}
			getHitAreaNum() {
				return null == this.json[this.HIT_AREAS] ? 0 : this.json[this.HIT_AREAS].length
			}
			getHitAreaID(t) {
				return null == this.json[this.HIT_AREAS] || null == this.json[this.HIT_AREAS][t] ? null: this.json[this.HIT_AREAS][t][this.ID]
			}
			getHitAreaName(t) {
				return null == this.json[this.HIT_AREAS] || null == this.json[this.HIT_AREAS][t] ? null: this.json[this.HIT_AREAS][t][this.NAME]
			}
			getPhysicsFile() {
				return this.json[this.PHYSICS]
			}
			getPoseFile() {
				return this.json[this.POSE]
			}
			getExpressionNum() {
				return null == this.json[this.EXPRESSIONS] ? 0 : this.json[this.EXPRESSIONS].length
			}
			getExpressionFile(t) {
				return null == this.json[this.EXPRESSIONS] ? null: this.json[this.EXPRESSIONS][t][this.FILE]
			}
			getExpressionName(t) {
				return null == this.json[this.EXPRESSIONS] ? null: this.json[this.EXPRESSIONS][t][this.NAME]
			}
			getLayout() {
				return this.json[this.LAYOUT]
			}
			getHitAreasCustom() {
				return this.json[this.HIT_AREAS_CUSTOM]
			}
			getInitParamNum() {
				return null == this.json[this.INIT_PARAM] ? 0 : this.json[this.INIT_PARAM].length
			}
			getMotionNum(t) {
				return null == this.json[this.MOTION_GROUPS] || null == this.json[this.MOTION_GROUPS][t] ? 0 : this.json[this.MOTION_GROUPS][t].length
			}
			getMotionFile(t, e) {
				return null == this.json[this.MOTION_GROUPS] || null == this.json[this.MOTION_GROUPS][t] || null == this.json[this.MOTION_GROUPS][t][e] ? null: this.json[this.MOTION_GROUPS][t][e][this.FILE]
			}
			getMotionSound(t, e) {
				return null == this.json[this.MOTION_GROUPS] || null == this.json[this.MOTION_GROUPS][t] || null == this.json[this.MOTION_GROUPS][t][e] || null == this.json[this.MOTION_GROUPS][t][e][this.SOUND] ? null: this.json[this.MOTION_GROUPS][t][e][this.SOUND]
			}
			getMotionFadeIn(t, e) {
				return null == this.json[this.MOTION_GROUPS] || null == this.json[this.MOTION_GROUPS][t] || null == this.json[this.MOTION_GROUPS][t][e] || null == this.json[this.MOTION_GROUPS][t][e][this.FADE_IN] ? 1e3: this.json[this.MOTION_GROUPS][t][e][this.FADE_IN]
			}
			getMotionFadeOut(t, e) {
				return null == this.json[this.MOTION_GROUPS] || null == this.json[this.MOTION_GROUPS][t] || null == this.json[this.MOTION_GROUPS][t][e] || null == this.json[this.MOTION_GROUPS][t][e][this.FADE_OUT] ? 1e3: this.json[this.MOTION_GROUPS][t][e][this.FADE_OUT]
			}
			getInitParamID(t) {
				return null == this.json[this.INIT_PARAM] || null == this.json[this.INIT_PARAM][t] ? null: this.json[this.INIT_PARAM][t][this.ID]
			}
			getInitParamValue(t) {
				return null == this.json[this.INIT_PARAM] || null == this.json[this.INIT_PARAM][t] ? NaN: this.json[this.INIT_PARAM][t][this.VALUE]
			}
			getInitPartsVisibleNum() {
				return null == this.json[this.INIT_PARTS_VISIBLE] ? 0 : this.json[this.INIT_PARTS_VISIBLE].length
			}
			getInitPartsVisibleID(t) {
				return null == this.json[this.INIT_PARTS_VISIBLE] || null == this.json[this.INIT_PARTS_VISIBLE][t] ? null: this.json[this.INIT_PARTS_VISIBLE][t][this.ID]
			}
			getInitPartsVisibleValue(t) {
				return null == this.json[this.INIT_PARTS_VISIBLE] || null == this.json[this.INIT_PARTS_VISIBLE][t] ? NaN: this.json[this.INIT_PARTS_VISIBLE][t][this.VALUE]
			}
		};
		var v = {
			DEBUG_LOG: !1,
			DEBUG_MOUSE_LOG: !1,
			DEBUG_DRAW_HIT_AREA: !1,
			DEBUG_DRAW_ALPHA_MODEL: !1,
			VIEW_MAX_SCALE: 2,
			VIEW_MIN_SCALE: .8,
			VIEW_LOGICAL_LEFT: -1,
			VIEW_LOGICAL_RIGHT: 1,
			VIEW_LOGICAL_MAX_LEFT: -2,
			VIEW_LOGICAL_MAX_RIGHT: 2,
			VIEW_LOGICAL_MAX_BOTTOM: -2,
			VIEW_LOGICAL_MAX_TOP: 2,
			PRIORITY_NONE: 0,
			PRIORITY_IDLE: 1,
			PRIORITY_SLEEPY: 2,
			PRIORITY_NORMAL: 3,
			PRIORITY_FORCE: 4,
			MOTION_GROUP_IDLE: "idle",
			MOTION_GROUP_SLEEPY: "sleepy",
			MOTION_GROUP_TAP_BODY: "tap_body",
			MOTION_GROUP_FLICK_HEAD: "flick_head",
			MOTION_GROUP_PINCH_IN: "pinch_in",
			MOTION_GROUP_PINCH_OUT: "pinch_out",
			MOTION_GROUP_SHAKE: "shake",
			HIT_AREA_HEAD: "head",
			HIT_AREA_BODY: "body"
		};
		class L {}
		let w = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
		M = 0,
		E = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
		b = new Array(16);
		L.reset = (() = >{
			M = 0
		}),
		L.loadIdentity = (() = >{
			for (let t = 0; t < 16; t++) E[t] = t % 5 == 0 ? 1 : 0
		}),
		L.push = (() = >{
			let t = 16 * (M + 1);
			w.length < t + 16 && (w.length = t + 16);
			for (let e = 0; e < 16; e++) w[t + e] = E[e];
			M++
		}),
		L.pop = (() = >{--M < 0 && (a("Invalid matrix stack."), M = 0);
			let t = 16 * M;
			for (let e = 0; e < 16; e++) E[e] = w[t + e]
		}),
		L.getMatrix = (() = >E),
		L.multMatrix = (t = >{
			let e,
			r,
			i;
			for (e = 0; e < 16; e++) b[e] = 0;
			for (e = 0; e < 4; e++) for (r = 0; r < 4; r++) for (i = 0; i < 4; i++) b[e + 4 * r] += E[e + 4 * i] * t[i + 4 * r];
			for (e = 0; e < 16; e++) E[e] = b[e]
		});
		var I = L;
		var A = class extends $ {
			constructor() {
				super(),
				this.modelHomeDir = "",
				this.modelSetting = null,
				this.tmpMatrix = []
			}
			load(t, e, r) {
				n(t),
				this.setUpdating(!0),
				this.setInitialized(!1),
				this.modelHomeDir = e.substring(0, e.lastIndexOf("/") + 1),
				this.modelSetting = new S(Number(t.canvas.getAttribute("data-hook"))),
				this.modelSetting.loadModelSetting(e, () = >{
					let e = this.modelHomeDir + this.modelSetting.getModelFile();
					this.loadModelData(e, t, () = >{
						for (let e = 0; e < this.modelSetting.getTextureNum(); e++) {
							let i;
							i = /^https?:\/\/|^\/\//i.test(this.modelSetting.getTextureFile(e)) ? this.modelSetting.getTextureFile(e) : this.modelHomeDir + this.modelSetting.getTextureFile(e),
							this.loadTexture(e, i, t, () = >{
								if (this.isTexLoaded) {
									if (this.modelSetting.getExpressionNum() > 0) {
										this.expressions = {};
										for (let e = 0; e < this.modelSetting.getExpressionNum(); e++) {
											let r = this.modelSetting.getExpressionName(e),
											i = this.modelHomeDir + this.modelSetting.getExpressionFile(e);
											this.loadExpression(r, i, t)
										}
									} else this.expressionManager = null,
									this.expressions = {};
									if (null != this.modelSetting.getPhysicsFile() ? this.loadPhysics(this.modelHomeDir + this.modelSetting.getPhysicsFile(), t) : this.physics = null, null != this.modelSetting.getPoseFile() ? this.loadPose(this.modelHomeDir + this.modelSetting.getPoseFile(), t, () = >{
										this.pose.updateParam(this.live2DModel)
									}) : this.pose = null, null != this.modelSetting.getLayout()) {
										let t = this.modelSetting.getLayout();
										null != t.width && this.modelMatrix.setWidth(t.width),
										null != t.height && this.modelMatrix.setHeight(t.height),
										null != t.x && this.modelMatrix.setX(t.x),
										null != t.y && this.modelMatrix.setY(t.y),
										null != t.center_x && this.modelMatrix.centerX(t.center_x),
										null != t.center_y && this.modelMatrix.centerY(t.center_y),
										null != t.top && this.modelMatrix.top(t.top),
										null != t.bottom && this.modelMatrix.bottom(t.bottom),
										null != t.left && this.modelMatrix.left(t.left),
										null != t.right && this.modelMatrix.right(t.right)
									}
									if (null != this.modelSetting.getHitAreasCustom()) {
										let t = this.modelSetting.getHitAreasCustom();
										null != t.head_x && (v.hit_areas_custom_head_x = t.head_x),
										null != t.head_y && (v.hit_areas_custom_head_y = t.head_y),
										null != t.body_x && (v.hit_areas_custom_body_x = t.body_x),
										null != t.body_y && (v.hit_areas_custom_body_y = t.body_y)
									}
									for (let t = 0; t < this.modelSetting.getInitParamNum(); t++) this.live2DModel.setParamFloat(this.modelSetting.getInitParamID(t), this.modelSetting.getInitParamValue(t));
									for (let t = 0; t < this.modelSetting.getInitPartsVisibleNum(); t++) this.live2DModel.setPartsOpacity(this.modelSetting.getInitPartsVisibleID(t), this.modelSetting.getInitPartsVisibleValue(t));
									this.live2DModel.saveParam(),
									this.preloadMotionGroup(v.MOTION_GROUP_IDLE, t),
									this.preloadMotionGroup(v.MOTION_GROUP_SLEEPY, t),
									this.mainMotionManager.stopAllMotions(),
									this.setUpdating(!1),
									this.setInitialized(!0),
									"function" == typeof r && r()
								}
							})
						}
					})
				})
			}
			release(t) {
				let e = P.getInstance().getPlatformManager(Number(t.canvas.getAttribute("data-hook")));
				t.deleteTexture(e.texture)
			}
			preloadMotionGroup(t, e) {
				for (let r = 0; r < this.modelSetting.getMotionNum(t); r++) {
					let i = this.modelSetting.getMotionFile(t, r);
					this.loadMotion(i, this.modelHomeDir + i, e, e = >{
						e.setFadeIn(this.modelSetting.getMotionFadeIn(t, r)),
						e.setFadeOut(this.modelSetting.getMotionFadeOut(t, r))
					})
				}
			}
			update(t) {
				if (null == this.live2DModel) return void(v.DEBUG_LOG && a("Failed to update."));
				let e = (UtSystem.getUserTimeMSec() - this.startTimeMSec) / 1e3 * 2 * Math.PI;
				this.mainMotionManager.isFinished() && ("1" === sessionStorage.getItem("Sleepy") ? this.startRandomMotion(v.MOTION_GROUP_SLEEPY, v.PRIORITY_SLEEPY, t) : this.startRandomMotion(v.MOTION_GROUP_IDLE, v.PRIORITY_IDLE, t)),
				this.live2DModel.loadParam(),
				this.mainMotionManager.updateParam(this.live2DModel) || null != this.eyeBlink && this.eyeBlink.updateParam(this.live2DModel),
				this.live2DModel.saveParam(),
				null == this.expressionManager || null == this.expressions || this.expressionManager.isFinished() || this.expressionManager.updateParam(this.live2DModel),
				this.live2DModel.addToParamFloat("PARAM_ANGLE_X", 30 * this.dragX, 1),
				this.live2DModel.addToParamFloat("PARAM_ANGLE_Y", 30 * this.dragY, 1),
				this.live2DModel.addToParamFloat("PARAM_ANGLE_Z", this.dragX * this.dragY * -30, 1),
				this.live2DModel.addToParamFloat("PARAM_BODY_ANGLE_X", 10 * this.dragX, 1),
				this.live2DModel.addToParamFloat("PARAM_EYE_BALL_X", this.dragX, 1),
				this.live2DModel.addToParamFloat("PARAM_EYE_BALL_Y", this.dragY, 1),
				this.live2DModel.addToParamFloat("PARAM_ANGLE_X", Number(15 * Math.sin(e / 6.5345)), .5),
				this.live2DModel.addToParamFloat("PARAM_ANGLE_Y", Number(8 * Math.sin(e / 3.5345)), .5),
				this.live2DModel.addToParamFloat("PARAM_ANGLE_Z", Number(10 * Math.sin(e / 5.5345)), .5),
				this.live2DModel.addToParamFloat("PARAM_BODY_ANGLE_X", Number(4 * Math.sin(e / 15.5345)), .5),
				this.live2DModel.setParamFloat("PARAM_BREATH", Number(.5 + .5 * Math.sin(e / 3.2345)), 1),
				null != this.physics && this.physics.updateParam(this.live2DModel),
				null == this.lipSync && this.live2DModel.setParamFloat("PARAM_MOUTH_OPEN_Y", this.lipSyncValue),
				null != this.pose && this.pose.updateParam(this.live2DModel),
				this.live2DModel.update()
			}
			setRandomExpression() {
				let t = [];
				for (let e in this.expressions) t.push(e);
				let e = parseInt(Math.random() * t.length);
				this.setExpression(t[e])
			}
			startRandomMotion(t, e, r) {
				let i = this.modelSetting.getMotionNum(t),
				s = parseInt(Math.random() * i);
				this.startMotion(t, s, e, r)
			}
			startMotion(t, e, r, i) {
				let s,
				o = this.modelSetting.getMotionFile(t, e);
				if (null !== o && "" !== o) {
					if (r === v.PRIORITY_FORCE) this.mainMotionManager.setReservePriority(r);
					else if (!this.mainMotionManager.reserveMotion(r)) return void(v.DEBUG_LOG && n("Motion is running."));
					null == this.motions[t] ? this.loadMotion(null, this.modelHomeDir + o, i, i = >{
						s = i,
						this.setFadeInFadeOut(t, e, r, s)
					}) : (s = this.motions[t], this.setFadeInFadeOut(t, e, r, s))
				} else v.DEBUG_LOG && a("Failed to motion.")
			}
			setFadeInFadeOut(t, e, r, i) {
				let s = this.modelSetting.getMotionFile(t, e);
				if (i.setFadeIn(this.modelSetting.getMotionFadeIn(t, e)), i.setFadeOut(this.modelSetting.getMotionFadeOut(t, e)), v.DEBUG_LOG && n(`Start motion: $ {
					s
				}`), null == this.modelSetting.getMotionSound(t, e)) this.mainMotionManager.startMotionPrio(i, r);
				else {
					let s = this.modelSetting.getMotionSound(t, e),
					o = document.createElement("audio");
					o.src = this.modelHomeDir + s,
					v.DEBUG_LOG && n(`Start sound: $ {
						s
					}`),
					o.play(),
					this.mainMotionManager.startMotionPrio(i, r)
				}
			}
			setExpression(t) {
				let e = this.expressions[t];
				v.DEBUG_LOG && n(`Expression: $ {
					t
				}`),
				this.expressionManager.startMotion(e, !1)
			}
			draw() {
				null != this.live2DModel && (I.push(), I.multMatrix(this.modelMatrix.getArray()), this.tmpMatrix = I.getMatrix(), this.live2DModel.setMatrix(this.tmpMatrix), this.live2DModel.draw(), I.pop())
			}
			hitTest(t, e, r) {
				let i = this.modelSetting.getHitAreaNum();
				for (let s = 0; s < i; s++) if (t === this.modelSetting.getHitAreaName(s)) {
					let t = this.modelSetting.getHitAreaID(s);
					return this.hitTestSimple(t, e, r)
				}
				return ! 1
			}
			hitTestCustom(t, e, r) {
				return "head" === t ? this.hitTestSimpleCustom(v.hit_areas_custom_head_x, v.hit_areas_custom_head_y, e, r) : "body" === t && this.hitTestSimpleCustom(v.hit_areas_custom_body_x, v.hit_areas_custom_body_y, e, r)
			}
		};
		var O = class {
			constructor() {
				this.models = [],
				this.count = -1,
				this.reloadFlg = !1
			}
			createModel() {
				let t = new A;
				return this.models.push(t),
				t
			}
			changeModel(t, e) {
				this.reloadFlg && (this.reloadFlg = !1, this.releaseModel(0, t), this.createModel(), this.models[0].load(t, e))
			}
			getModel(t) {
				return t >= this.models.length ? null: this.models[t]
			}
			releaseModel(t, e) {
				this.models.length <= t || (this.models[t].release(e), delete this.models[t], this.models.splice(t, 1))
			}
			numModels() {
				return this.models.length
			}
			setDrag(t, e) {
				for (let r = 0; r < this.models.length; r++) this.models[r].setDrag(t, e)
			}
			maxScaleEvent() {
				v.DEBUG_LOG && n("Max scale event.");
				for (let t = 0; t < this.models.length; t++) this.models[t].startRandomMotion(v.MOTION_GROUP_PINCH_IN, v.PRIORITY_NORMAL)
			}
			minScaleEvent() {
				v.DEBUG_LOG && n("Min scale event.");
				for (let t = 0; t < this.models.length; t++) this.models[t].startRandomMotion(v.MOTION_GROUP_PINCH_OUT, v.PRIORITY_NORMAL)
			}
			tapEvent(t, e) {
				v.DEBUG_LOG && n("tapEvent view x:" + t + " y:" + e);
				for (let r = 0; r < this.models.length; r++) this.models[r].hitTest(v.HIT_AREA_HEAD, t, e) ? (v.DEBUG_LOG && n("Tap face."), this.models[r].setRandomExpression()) : this.models[r].hitTest(v.HIT_AREA_BODY, t, e) ? (v.DEBUG_LOG && n("Tap body. models[" + r + "]"), this.models[r].startRandomMotion(v.MOTION_GROUP_TAP_BODY, v.PRIORITY_NORMAL)) : this.models[r].hitTestCustom("head", t, e) ? (v.DEBUG_LOG && n("Tap face."), this.models[r].startRandomMotion(v.MOTION_GROUP_FLICK_HEAD, v.PRIORITY_NORMAL)) : this.models[r].hitTestCustom("body", t, e) && (v.DEBUG_LOG && n("Tap body. models[" + r + "]"), this.models[r].startRandomMotion(v.MOTION_GROUP_TAP_BODY, v.PRIORITY_NORMAL));
				return ! 0
			}
		};
		var D = class {
			constructor(t, e) {
				this.captureName = "live2d.png",
				this.captureFrame = !1,
				this.drag = !1,
				this.isInit = !1,
				this.isDrawStart = !1,
				this.head_pos = .5,
				this.canvas = t,
				this.live2DNumder = Number(this.canvas.getAttribute("data-hook")),
				this.gl = this.getWebGLContext(),
				this.dragMgr = new x,
				this.viewMatrix = new T,
				this.projMatrix = new f,
				this.deviceToScreen = new f,
				this.live2DMgr = new O,
				this.Live2DFramework = P.getInstance(),
				this.Live2DFramework.setPlatformManager(new h, this.live2DNumder),
				this.initL2dCanvas(),
				this.init(e)
			}
			revise(t) {
				this.isInit ? this.changeModel(t) : this.init(t)
			}
			save(t) {
				this.captureName = t,
				this.captureFrame = !0
			}
			initL2dCanvas() {
				this.canvas.addEventListener && (window.addEventListener("click", t = >this.mouseEvent(t)), window.addEventListener("mousedown", t = >this.mouseEvent(t)), window.addEventListener("mousemove", t = >this.mouseEvent(t)), window.addEventListener("mouseup", t = >this.mouseEvent(t)), window.addEventListener("mouseout", t = >this.mouseEvent(t)), window.addEventListener("touchstart", t = >this.touchEvent(t)), window.addEventListener("touchend", t = >this.touchEvent(t)), window.addEventListener("touchmove", t = >this.touchEvent(t)))
			}
			init(t) {
				if (!t) return;
				let e = this.canvas.width,
				r = this.canvas.height,
				i = r / e,
				s = v.VIEW_LOGICAL_LEFT,
				o = v.VIEW_LOGICAL_RIGHT,
				n = -i,
				_ = i;
				if (this.viewMatrix.setScreenRect(s, o, n, _), this.viewMatrix.setMaxScreenRect(v.VIEW_LOGICAL_MAX_LEFT, v.VIEW_LOGICAL_MAX_RIGHT, v.VIEW_LOGICAL_MAX_BOTTOM, v.VIEW_LOGICAL_MAX_TOP), this.viewMatrix.setMaxScale(v.VIEW_MAX_SCALE), this.viewMatrix.setMinScale(v.VIEW_MIN_SCALE), this.projMatrix.multScale(1, e / r), this.deviceToScreen.multTranslate( - e / 2, -r / 2), this.deviceToScreen.multScale(2 / e, -2 / e), !this.gl) return a("Failed to create WebGL context."),
				void(window.WebGLRenderingContext || a("Your browser don't support WebGL, check https://get.webgl.org/ for futher information."));
				window.Live2D.setGL(this.gl, this.live2DNumder),
				this.gl.clearColor(0, 0, 0, 0),
				this.changeModel(t),
				this.startDraw(),
				this.isInit = !0
			}
			getWebGLContext() {
				let t = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];
				for (let e = 0; e < t.length; e++) try {
					let r = this.canvas.getContext(t[e], {
						premultipliedAlpha: !0
					});
					if (r) return r
				} catch(t) {
					a(`getWebGLContext: $ {
						t
					}`)
				}
				return null
			}
			startDraw() {
				this.isDrawStart || (this.isDrawStart = !0, this.tick())
			}
			draw() {
				I.reset(),
				I.loadIdentity(),
				this.dragMgr.update(),
				this.live2DMgr.setDrag(this.dragMgr.getX(), this.dragMgr.getY()),
				this.gl.clear(this.gl.COLOR_BUFFER_BIT),
				I.multMatrix(this.projMatrix.getArray()),
				I.multMatrix(this.viewMatrix.getArray()),
				I.push();
				for (let t = 0; t < this.live2DMgr.numModels(); t++) {
					let e = this.live2DMgr.getModel(t);
					if (null == e) return;
					e.initialized && !e.updating && (e.update(this.gl), e.draw(this.gl))
				}
				I.pop()
			}
			tick() {
				this.draw();
				const t = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
				if (this.captureFrame) {
					this.captureFrame = !1;
					let t = document.createElement("a");
					document.body.appendChild(t),
					t.setAttribute("type", "hidden"),
					t.href = this.canvas.toDataURL(),
					t.download = this.captureName,
					t.click()
				}
				t(() = >this.tick())
			}
			changeModel(t) {
				this.live2DMgr.reloadFlg = !0,
				this.live2DMgr.count++,
				this.live2DMgr.changeModel(this.gl, t)
			}
			dot(t, e) {
				return t.x * e.x + t.y * e.y
			}
			normalize(t, e) {
				let r = Math.sqrt(t * t + e * e);
				return {
					x: t / r,
					y: e / r
				}
			}
			angle(t, e) {
				return 180 * Math.acos(this.dot({
					x: 0,
					y: 1
				},
				this.normalize(t, e))) / Math.PI
			}
			transformRect(t, e, r) {
				if (e.x < r.left + r.width && e.y < r.top + r.height && e.x > r.left && e.y > r.top) return e;
				let i = t.x - e.x,
				s = t.y - e.y,
				o = this.angle(i, s);
				e.x < t.x && (o = 360 - o);
				let n = 360 - this.angle(r.left - t.x, -1 * (r.top - t.y)),
				a = 360 - this.angle(r.left - t.x, -1 * (r.top + r.height - t.y)),
				_ = this.angle(r.left + r.width - t.x, -1 * (r.top - t.y)),
				h = this.angle(r.left + r.width - t.x, -1 * (r.top + r.height - t.y)),
				l = s / i,
				$ = {};
				if (o < _) {
					let e = r.top - t.y,
					i = e / l;
					$ = {
						y: t.y + e,
						x: t.x + i
					}
				} else if (o < h) {
					let e = r.left + r.width - t.x,
					i = e * l;
					$ = {
						y: t.y + i,
						x: t.x + e
					}
				} else if (o < a) {
					let e = r.top + r.height - t.y,
					i = e / l;
					$ = {
						y: t.y + e,
						x: t.x + i
					}
				} else if (o < n) {
					let e = t.x - r.left,
					i = e * l;
					$ = {
						y: t.y - i,
						x: t.x - e
					}
				} else {
					let e = r.top - t.y,
					i = e / l;
					$ = {
						y: t.y + e,
						x: t.x + i
					}
				}
				return $
			}
			modelTurnHead(t) {
				this.drag = !0;
				let e = this.canvas.getBoundingClientRect(),
				r = this.transformRect({
					x: e.left + e.width / 2,
					y: e.top + e.height * this.head_pos
				},
				{
					x: t.clientX,
					y: t.clientY
				},
				e),
				i = this.transformViewX(r.x - e.left),
				s = this.transformViewY(r.y - e.top);
				v.DEBUG_MOUSE_LOG && n(`onMouseMove device(x: $ {
					t.clientX
				}
				y: $ {
					t.clientY
				}) view(x: $ {
					i
				}
				y: $ {
					s
				})`),
				this.dragMgr.setPoint(i, s)
			}
			modelTapEvent(t) {
				this.drag = !0;
				let e = this.canvas.getBoundingClientRect(),
				r = this.transformRect({
					x: e.left + e.width / 2,
					y: e.top + e.height * this.head_pos
				},
				{
					x: t.clientX,
					y: t.clientY
				},
				e),
				i = this.transformViewX(r.x - e.left),
				s = this.transformViewY(r.y - e.top);
				v.DEBUG_MOUSE_LOG && n(`onMouseDown device(x: $ {
					t.clientX
				}
				y: $ {
					t.clientY
				}) view(x: $ {
					i
				}
				y: $ {
					s
				})`),
				this.live2DMgr.tapEvent(i, s)
			}
			followPointer(t) {
				let e = this.canvas.getBoundingClientRect(),
				r = this.transformRect({
					x: e.left + e.width / 2,
					y: e.top + e.height * this.head_pos
				},
				{
					x: t.clientX,
					y: t.clientY
				},
				e),
				i = this.transformViewX(r.x - e.left),
				s = this.transformViewY(r.y - e.top);
				v.DEBUG_MOUSE_LOG && n(`onMouseDown device(x: $ {
					t.clientX
				}
				y: $ {
					t.clientY
				}) view(x: $ {
					i
				}
				y: $ {
					s
				})`),
				this.drag && this.dragMgr.setPoint(i, s)
			}
			lookFront() {
				this.drag && (this.drag = !1),
				this.dragMgr.setPoint(0, 0)
			}
			sleepy() {
				v.DEBUG_LOG && n("Set Session Storage."),
				sessionStorage.setItem("Sleepy", "1")
			}
			mouseEvent(t) {
				let e = sessionStorage.getItem("Sleepy"),
				r = sessionStorage.getItem("SleepyTimer");
				switch (t.type) {
				case "mousedown":
					this.modelTapEvent(t);
					break;
				case "mousemove":
					"1" === e && sessionStorage.setItem("Sleepy", "0"),
					this.modelTurnHead(t);
					break;
				case "mouseup":
					if ("button" in t && 0 !== t.button) return "";
					break;
				case "mouseout":
					v.DEBUG_LOG && n("Mouse out Window."),
					this.lookFront(),
					window.clearTimeout(r),
					r = window.setTimeout(this.sleepy, 5e4),
					sessionStorage.setItem("SleepyTimer", r)
				}
			}
			touchEvent(t) {
				let e = t.touches[0];
				switch (t.type) {
				case "touchstart":
					1 === t.touches.length && this.modelTurnHead(e);
					break;
				case "touchmove":
					this.followPointer(e);
					break;
				case "touchend":
					this.lookFront()
				}
			}
			transformViewX(t) {
				let e = this.deviceToScreen.transformX(t);
				return this.viewMatrix.invertTransformX(e)
			}
			transformViewY(t) {
				let e = this.deviceToScreen.transformY(t);
				return this.viewMatrix.invertTransformY(e)
			}
		};
		let R = -1;
		var C = o.a.extend({
			name: "live2d",
			data: () = >({
				L2dManage: "",
				imgPath: ""
			}),
			render: function(t) {
				return R++,
				t("canvas", {
					attrs: {
						id: this.canvasID,
						width: this.width,
						height: this.height,
						class: "live2d",
						"data-hook": R,
						"data-path": this.imgPath
					},
					style: this.canvasStyle,
					ref: "live2dCanvas"
				})
			},
			props: {
				canvasID: {
					type: String,
				default:
					""
				},
				modelPath: {
					type: String,
				default:
					""
				},
				width: {
					type: Number,
				default:
					290
				},
				height: {
					type: Number,
				default:
					240
				},
				canvasStyle: {
					type: Object,
				default:
					() = >({
						position: "relative",
						"z-index": 99
					})
				}
			},
			mounted() {
				this.L2dManage = new D(this.$refs.live2dCanvas, this.modelPath)
			},
			methods: {
				initL2dMange(t) {
					this.L2dManage.revise(t)
				},
				save(t) {
					this.L2dManage.save(t)
				},
				setImgPath(t) {
					this.imgPath = t
				}
			},
			beforeUpdate() {
				this.L2dManage = null
			},
			updated() {
				this.L2dManage = new D(this.$refs.live2dCanvas, this.modelPath)
			},
			watch: {
				modelPath(t) {
					this.initL2dMange(t)
				}
			}
		});
		var F = class {
			constructor(t) {
				this.customDialogue = t
			}
			defaultMesssage() {
				let t;
				if ("" !== document.referrer) {
					let e = new URL(document.referrer);
					switch (t = `Hello ! 来自 < span style = "color:#0099CC" > $ {
						e.hostname
					} < /span> 朋友`,e.hostname.split(".")[1]){case"google":t+=`Hello! 来自 谷歌 的朋友 <br/ > 你是搜索 < span style = "color:#0099CC" > $ {
						e.searchParams.get("q")
					} < /span> 找到我的么 ?`;break;case"baidu":t=`Hello! 来自 百度 的朋友 <br/ > 你是搜索 < span style = "color:#0099CC" > $ {
						e.searchParams.get("wd")
					} < /span> 找到我的么 ?`;break;case"so":t=`Hello! 来自 360 的朋友 <br/ > 你是搜索 < span style = "color:#0099CC" > $ {
						e.searchParams.get("q")
					} < /span> 找到我的么 ?`;break;case"bing":t=`Hello! 来自 必应 的朋友 <br/ > 你是搜索 < span style = "color:#0099CC" > $ {
						e.searchParams.get("q")
					} < /span> 找到我的么 ?`;break;case"sogou":t=`Hello! 来自 搜狗 的朋友 <br/ > 你是搜索 < span style = "color:#0099CC" > $ {
						e.searchParams.get("query")
					} < /span> 找到我的么 ?`}}else{let e=(new Date).getHours();t=e>23||e<=5?"这么晚了还不睡么?  明天再来嘛! 愿你有个好梦!":e>5&&e<=7?"早安朋友！一日之计在于晨,新的一天开始了":e>7&&e<=12?"上午好呀! 工作顺利么? 不要久坐,多活动活动":e>12&&e<=14?"中午了,现在是午餐时间! 饭要好好吃哟":e>14&&e<=16?"午后容易犯困,打起精神来！我的朋友":e>17&&e<=19?"傍晚了！ 窗外夕阳的依旧柔红,再多看一眼,在多保存一份美丽":e>19&&e<=21?"晚上好! 今天过的怎么样啊? 未留下悔恨么?":e>21&&e<=23?"已经这么晚了呀，早点休息吧，晚安~":`欢迎阅读<span style="color:#0099cc;">『${document.title}』</span > `
				}
				return t
			}
			monitor(t, e) {
				let r = this.customDialogue.mouseover,
				i = this.customDialogue.click;
				for (let i of r) for (let r = 0, s = i.selector.length; r < s; r++) {
					let s = document.querySelectorAll(i.selector[r]);
					if (! (s.length <= 0)) for (const r of s) r.removeEventListener("mouseenter", () = >t(i.message)),
					r.addEventListener("mouseenter", () = >t(i.message)),
					r.removeEventListener("mouseleave", () = >e()),
					r.addEventListener("mouseleave", () = >e())
				}
				for (let r of i) for (let i = 0, s = r.selector.length; i < s; i++) {
					let s = document.querySelectorAll(r.selector[i]);
					if (! (s.length <= 0)) for (const i of s) i.removeEventListener("click", () = >t(r.message)),
					i.addEventListener("click", () = >t(r.message)),
					i.removeEventListener("mouseleave", () = >e()),
					i.addEventListener("mouseleave", () = >e())
				}
			}
			randomInteger(t, e = 0) {
				return Math.round(Math.random() * (t - e) + e)
			}
		};
		var N = class {
			constructor(t, e) {
				this.el = t,
				this.speed = 500,
				this.control = "",
				this.controlTwo = "",
				this.message = new F(e),
				this.defaultMessage(),
				this.monitor()
			}
			defaultMessage() {
				this.showMessage(this.message.defaultMesssage()).then(() = >this.hideMessage())
			}
			monitor() {
				this.message.monitor(t = >this.showMessage(t), () = >this.hideMessage())
			}
			showMessage(t, e = 5e3) {
				return Array.isArray(t) && (t = t[this.message.randomInteger(t.length - 1)]),
				this.el.innerHTML = t,
				this.fadeIn(e)
			}
			hideMessage(t = 5e3) {
				return this.fadeOut(t)
			}
			fadeIn(t) {
				return new Promise(e = >{
					if (Number(this.el.style.opacity) < 1) {
						this.clearTimer();
						let r = 0;
						this.control = setInterval(() = >{
							r += this.speed,
							this.el.style.opacity = r / t,
							this.el.style.opacity >= 1 && (this.clearTimer(), e())
						},
						30)
					}
				})
			}
			fadeOut(t) {
				return new Promise(e = >{
					Number(this.el.style.opacity) >= 1 && (this.clearTimer("controlTwo"), this.controlTwo = setTimeout(() = >{
						this.clearTimer();
						let r = t;
						this.control = setInterval(() = >{
							t -= this.speed,
							this.el.style.opacity = t / r,
							this.el.style.opacity <= 0 && (this.clearTimer(), e())
						},
						30)
					},
					t))
				})
			}
			clearTimer(t = "control") {
				"control" === t && this.control && (clearInterval(this.control), this.control = ""),
				"control" !== t && this.controlTwo && (clearTimeout(this.controlTwo), this.controlTwo = "")
			}
		},
		B = {
			name: "dialogue",
			data: () = >({
				dialogueModul: ""
			}),
			props: {
				dialogueID: String,
				dialogueStyle: Object,
				customDialogue: Object
			},
			mounted() {
				this.dialogueModul = new N(this.$refs.live2dDialogue, this.customDialogue)
			},
			methods: {
				showMessage(t, e = 5e3) {
					this.dialogueModul.showMessage(t, e).then(() = >this.dialogueModul.hideMessage(e))
				}
			}
		};
		r("703f");
		function k(t, e, r, i, s, o, n, a) {
			var _, h = "function" == typeof t ? t.options: t;
			if (e && (h.render = e, h.staticRenderFns = r, h._compiled = !0), i && (h.functional = !0), o && (h._scopeId = "data-v-" + o), n ? (_ = function(t) { (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__),
				s && s.call(this, t),
				t && t._registeredComponents && t._registeredComponents.add(n)
			},
			h._ssrRegister = _) : s && (_ = a ?
			function() {
				s.call(this, this.$root.$options.shadowRoot)
			}: s), _) if (h.functional) {
				h._injectStyles = _;
				var l = h.render;
				h.render = function(t, e) {
					return _.call(e),
					l(t, e)
				}
			} else {
				var $ = h.beforeCreate;
				h.beforeCreate = $ ? [].concat($, _) : [_]
			}
			return {
				exports: t,
				options: h
			}
		}
		var U = k(B,
		function() {
			var t = this.$createElement;
			return (this._self._c || t)("div", {
				ref: "live2dDialogue",
				staticClass: "dialogue-live2d",
				style: this.dialogueStyle,
				attrs: {
					id: this.dialogueID
				}
			})
		},
		[], !1, null, "5fcdaf8c", null);
		U.options.__file = "dialogue.vue";
		var G = U.exports;
		var Y = class {
			constructor(t, e, r, i, s, o, n) {
				this.parent = t,
				this.control = "",
				this.width = r,
				this.minWidth = e,
				this.position = i,
				this.dialogueRightLevelPosition = n,
				this.parent.style.width = `$ {
					r
				}
				px`,
				this.parent.style.backgroundColor = s,
				o ? (this.customDialogue = o, this.message = new F(o), this.init(), this.defaultMessage(), this.monitor()) : (this.init(), this.hover())
			}
			init() {
				switch (this.position) {
				case "left":
					this.parent.style.transform = `translateX($ { - Math.abs(this.minWidth - this.width)
					}
					px)`;
					break;
				case "right":
					this.parent.style.transform = `translateX($ {
						this.customDialogue ? this.dialogueRightLevelPosition: Math.abs(this.minWidth - this.width)
					}
					px) rotate(180deg)`
				}
				this.customDialogue && (this.parent.innerHTML = "", this.parent.style.fontSize = "13px", this.parent.style.writingMode = "initial", this.parent.style.lineHeight = "20px", this.parent.style.display = "right" === this.position ? "inline-flex": "inline-block", this.parent.style.justifyContent = "right" === this.position ? "center": "flex-start")
			}
			hover() {
				this.parent.removeEventListener("mouseenter", () = >this.showHover()),
				this.parent.addEventListener("mouseenter", () = >this.showHover()),
				this.parent.removeEventListener("mouseleave", () = >this.hideHover()),
				this.parent.addEventListener("mouseleave", () = >this.hideHover())
			}
			showHover() {
				switch (this.position) {
				case "left":
					this.parent.style.transform = "translateX(0)";
					break;
				case "right":
					this.parent.style.transform = `translateX($ {
						this.customDialogue ? -Math.abs(this.minWidth - this.width) + this.dialogueRightLevelPosition: "0"
					}
					px) rotate(180deg)`
				}
			}
			hideHover() {
				this.init()
			}
			defaultMessage() {
				this.showMessage(this.message.defaultMesssage()),
				this.hideMessage()
			}
			monitor() {
				this.message.monitor(t = >this.showMessage(t), () = >this.hideMessage())
			}
			showMessage(t) {
				this.clearTimer(),
				Array.isArray(t) && (t = t[this.message.randomInteger(t.length - 1)]),
				this.parent.style.fontSize && (this.parent.innerHTML = this.createElementStr(t)),
				this.showHover()
			}
			hideMessage(t = 5e3) {
				this.clearTimer(),
				this.control = setTimeout(() = >this.hideHover(), t)
			}
			clearTimer() {
				this.control && (clearTimeout(this.control), this.control = "")
			}
			createElementStr(t) {
				return` < div style = "text-align: left;display: inline-block; ${"right "===this.position?"transform: rotate(180deg);
				":""}" > $ {
					t
				} < /div>`}},V={name:"tools",data:()=>({live2dTools:""}),props:{width:{type:Number,default:28},minWidth:{type:Number,default:18},dialogueRightLevelPosition:{type:Number,default:10},position:{type:String,default:"left"},customDialogue:Object,toolsID:String,backgroundColor:{type:String,default:"#FFFFFF"},toolsStyle:Object,tabMsg:String},mounted(){this.live2dTools=new Y(this.$refs.live2dTools,this.minWidth,this.width,this.position,this.backgroundColor,this.customDialogue,this.dialogueRightLevelPosition)},methods:{showMessage(t,e=5e3){this.live2dTools.showMessage(t),this.live2dTools.hideMessage(e)}},computed:{toolsListeners(){let t=this;return Object.assign({},this.$listeners,{click(e){t.$emit("click",e)}})}}},X=(r("5521"),k(V,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",[r("div",t._g({ref:"live2dTools",staticClass:"live2d-tools",style:t.toolsStyle,attrs:{id:t.toolsID}},t.toolsListeners),[t._t("default",[r("span",{class:{"right-msg":"right"===t.position}},[t._v(t._s(t.tabMsg))])])],2)])},[],!1,null,"591ddaa6",null));X.options.__file="live2dTools.vue";var H=X.exports;var z={install(t){t.component("live2d",C),t.component("dialogue",G),t.component("live2dTools",H)}};e.default=z}});
/ / #sourceMappingURL = /sm/bf59ef7ba24639d188c1a9861eabf465642aca1e9f4d1ab4435f05df5b72f9a5.map
