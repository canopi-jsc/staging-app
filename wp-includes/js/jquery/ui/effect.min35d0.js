/*!
 * jQuery UI Effects 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!(function (t) {
  'function' == typeof define && define.amd ? define(['jquery'], t) : t(jQuery);
})(function (u) {
  (u.ui = u.ui || {}), (u.ui.version = '1.12.1');
  var l,
    d,
    a,
    p,
    t,
    h,
    g,
    m,
    s,
    e,
    b,
    o,
    i,
    c,
    f,
    v,
    n,
    r,
    y,
    x,
    C,
    w = 'ui-effects-',
    k = 'ui-effects-style',
    _ = 'ui-effects-animated',
    S = u;
  function M(t, e, n) {
    var r = m[e.type] || {};
    return null == t
      ? n || !e.def
        ? null
        : e.def
      : ((t = r.floor ? ~~t : parseFloat(t)),
        isNaN(t)
          ? e.def
          : r.mod
          ? (t + r.mod) % r.mod
          : t < 0
          ? 0
          : r.max < t
          ? r.max
          : t);
  }
  function B(r) {
    var i = h(),
      o = (i._rgba = []);
    return (
      (r = r.toLowerCase()),
      b(t, function (t, e) {
        var n = e.re.exec(r),
          n = n && e.parse(n),
          e = e.space || 'rgba';
        if (n)
          return (
            (n = i[e](n)),
            (i[g[e].cache] = n[g[e].cache]),
            (o = i._rgba = n._rgba),
            !1
          );
      }),
      o.length
        ? ('0,0,0,0' === o.join() && l.extend(o, a.transparent), i)
        : a[r]
    );
  }
  function H(t, e, n) {
    return 6 * (n = (n + 1) % 1) < 1
      ? t + (e - t) * n * 6
      : 2 * n < 1
      ? e
      : 3 * n < 2
      ? t + (e - t) * (2 / 3 - n) * 6
      : t;
  }
  function I(t) {
    var e,
      n,
      r = t.ownerDocument.defaultView
        ? t.ownerDocument.defaultView.getComputedStyle(t, null)
        : t.currentStyle,
      i = {};
    if (r && r.length && r[0] && r[r[0]])
      for (n = r.length; n--; )
        'string' == typeof r[(e = r[n])] && (i[u.camelCase(e)] = r[e]);
    else for (e in r) 'string' == typeof r[e] && (i[e] = r[e]);
    return i;
  }
  function T(t, e, n, r) {
    return (
      (t = { effect: (t = u.isPlainObject(t) ? (e = t).effect : t) }),
      u.isFunction((e = null == e ? {} : e)) && ((r = e), (n = null), (e = {})),
      ('number' != typeof e && !u.fx.speeds[e]) || ((r = n), (n = e), (e = {})),
      u.isFunction(n) && ((r = n), (n = null)),
      e && u.extend(t, e),
      (n = n || e.duration),
      (t.duration = u.fx.off
        ? 0
        : 'number' == typeof n
        ? n
        : n in u.fx.speeds
        ? u.fx.speeds[n]
        : u.fx.speeds._default),
      (t.complete = r || e.complete),
      t
    );
  }
  function F(t) {
    return (
      !t ||
      'number' == typeof t ||
      u.fx.speeds[t] ||
      ('string' == typeof t && !u.effects.effect[t]) ||
      u.isFunction(t) ||
      ('object' == typeof t && !t.effect)
    );
  }
  function W(t, e) {
    var n = e.outerWidth(),
      e = e.outerHeight(),
      t =
        /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(
          t
        ) || ['', 0, n, e, 0];
    return {
      top: parseFloat(t[1]) || 0,
      right: 'auto' === t[2] ? n : parseFloat(t[2]),
      bottom: 'auto' === t[3] ? e : parseFloat(t[3]),
      left: parseFloat(t[4]) || 0,
    };
  }
  return (
    (u.effects = { effect: {} }),
    /*!
     * jQuery Color Animations v2.1.2
     * https://github.com/jquery/jquery-color
     *
     * Copyright 2014 jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * Date: Wed Jan 16 08:47:09 2013 -0600
     */
    (p = /^([\-+])=\s*(\d+\.?\d*)/),
    (t = [
      {
        re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        parse: function (t) {
          return [t[1], t[2], t[3], t[4]];
        },
      },
      {
        re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        parse: function (t) {
          return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]];
        },
      },
      {
        re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
        parse: function (t) {
          return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)];
        },
      },
      {
        re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
        parse: function (t) {
          return [
            parseInt(t[1] + t[1], 16),
            parseInt(t[2] + t[2], 16),
            parseInt(t[3] + t[3], 16),
          ];
        },
      },
      {
        re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        space: 'hsla',
        parse: function (t) {
          return [t[1], t[2] / 100, t[3] / 100, t[4]];
        },
      },
    ]),
    (h = (l = S).Color =
      function (t, e, n, r) {
        return new l.Color.fn.parse(t, e, n, r);
      }),
    (g = {
      rgba: {
        props: {
          red: { idx: 0, type: 'byte' },
          green: { idx: 1, type: 'byte' },
          blue: { idx: 2, type: 'byte' },
        },
      },
      hsla: {
        props: {
          hue: { idx: 0, type: 'degrees' },
          saturation: { idx: 1, type: 'percent' },
          lightness: { idx: 2, type: 'percent' },
        },
      },
    }),
    (m = {
      byte: { floor: !0, max: 255 },
      percent: { max: 1 },
      degrees: { mod: 360, floor: !0 },
    }),
    (s = h.support = {}),
    (e = l('<p>')[0]),
    (b = l.each),
    (e.style.cssText = 'background-color:rgba(1,1,1,.5)'),
    (s.rgba = -1 < e.style.backgroundColor.indexOf('rgba')),
    b(g, function (t, e) {
      (e.cache = '_' + t),
        (e.props.alpha = { idx: 3, type: 'percent', def: 1 });
    }),
    (h.fn = l.extend(h.prototype, {
      parse: function (i, t, e, n) {
        if (i === d) return (this._rgba = [null, null, null, null]), this;
        (i.jquery || i.nodeType) && ((i = l(i).css(t)), (t = d));
        var o = this,
          r = l.type(i),
          s = (this._rgba = []);
        return (
          t !== d && ((i = [i, t, e, n]), (r = 'array')),
          'string' === r
            ? this.parse(B(i) || a._default)
            : 'array' === r
            ? (b(g.rgba.props, function (t, e) {
                s[e.idx] = M(i[e.idx], e);
              }),
              this)
            : 'object' === r
            ? (b(
                g,
                i instanceof h
                  ? function (t, e) {
                      i[e.cache] && (o[e.cache] = i[e.cache].slice());
                    }
                  : function (t, n) {
                      var r = n.cache;
                      b(n.props, function (t, e) {
                        if (!o[r] && n.to) {
                          if ('alpha' === t || null == i[t]) return;
                          o[r] = n.to(o._rgba);
                        }
                        o[r][e.idx] = M(i[t], e, !0);
                      }),
                        o[r] &&
                          l.inArray(null, o[r].slice(0, 3)) < 0 &&
                          ((o[r][3] = 1), n.from && (o._rgba = n.from(o[r])));
                    }
              ),
              this)
            : void 0
        );
      },
      is: function (t) {
        var i = h(t),
          o = !0,
          s = this;
        return (
          b(g, function (t, e) {
            var n,
              r = i[e.cache];
            return (
              r &&
                ((n = s[e.cache] || (e.to && e.to(s._rgba)) || []),
                b(e.props, function (t, e) {
                  if (null != r[e.idx]) return (o = r[e.idx] === n[e.idx]);
                })),
              o
            );
          }),
          o
        );
      },
      _space: function () {
        var n = [],
          r = this;
        return (
          b(g, function (t, e) {
            r[e.cache] && n.push(t);
          }),
          n.pop()
        );
      },
      transition: function (t, s) {
        var e = (f = h(t))._space(),
          n = g[e],
          t = 0 === this.alpha() ? h('transparent') : this,
          a = t[n.cache] || n.to(t._rgba),
          c = a.slice(),
          f = f[n.cache];
        return (
          b(n.props, function (t, e) {
            var n = e.idx,
              r = a[n],
              i = f[n],
              o = m[e.type] || {};
            null !== i &&
              (null === r
                ? (c[n] = i)
                : (o.mod &&
                    (i - r > o.mod / 2
                      ? (r += o.mod)
                      : r - i > o.mod / 2 && (r -= o.mod)),
                  (c[n] = M((i - r) * s + r, e))));
          }),
          this[e](c)
        );
      },
      blend: function (t) {
        if (1 === this._rgba[3]) return this;
        var e = this._rgba.slice(),
          n = e.pop(),
          r = h(t)._rgba;
        return h(
          l.map(e, function (t, e) {
            return (1 - n) * r[e] + n * t;
          })
        );
      },
      toRgbaString: function () {
        var t = 'rgba(',
          e = l.map(this._rgba, function (t, e) {
            return null == t ? (2 < e ? 1 : 0) : t;
          });
        return 1 === e[3] && (e.pop(), (t = 'rgb(')), t + e.join() + ')';
      },
      toHslaString: function () {
        var t = 'hsla(',
          e = l.map(this.hsla(), function (t, e) {
            return (
              null == t && (t = 2 < e ? 1 : 0),
              (t = e && e < 3 ? Math.round(100 * t) + '%' : t)
            );
          });
        return 1 === e[3] && (e.pop(), (t = 'hsl(')), t + e.join() + ')';
      },
      toHexString: function (t) {
        var e = this._rgba.slice(),
          n = e.pop();
        return (
          t && e.push(~~(255 * n)),
          '#' +
            l
              .map(e, function (t) {
                return 1 === (t = (t || 0).toString(16)).length ? '0' + t : t;
              })
              .join('')
        );
      },
      toString: function () {
        return 0 === this._rgba[3] ? 'transparent' : this.toRgbaString();
      },
    })),
    (h.fn.parse.prototype = h.fn),
    (g.hsla.to = function (t) {
      if (null == t[0] || null == t[1] || null == t[2])
        return [null, null, null, t[3]];
      var e = t[0] / 255,
        n = t[1] / 255,
        r = t[2] / 255,
        i = t[3],
        o = Math.max(e, n, r),
        s = Math.min(e, n, r),
        a = o - s,
        c = o + s,
        t = 0.5 * c,
        n =
          s === o
            ? 0
            : e === o
            ? (60 * (n - r)) / a + 360
            : n === o
            ? (60 * (r - e)) / a + 120
            : (60 * (e - n)) / a + 240,
        c = 0 == a ? 0 : t <= 0.5 ? a / c : a / (2 - c);
      return [Math.round(n) % 360, c, t, null == i ? 1 : i];
    }),
    (g.hsla.from = function (t) {
      if (null == t[0] || null == t[1] || null == t[2])
        return [null, null, null, t[3]];
      var e = t[0] / 360,
        n = t[1],
        r = t[2],
        t = t[3],
        n = r <= 0.5 ? r * (1 + n) : r + n - r * n,
        r = 2 * r - n;
      return [
        Math.round(255 * H(r, n, e + 1 / 3)),
        Math.round(255 * H(r, n, e)),
        Math.round(255 * H(r, n, e - 1 / 3)),
        t,
      ];
    }),
    b(g, function (c, t) {
      var o = t.props,
        s = t.cache,
        a = t.to,
        f = t.from;
      (h.fn[c] = function (t) {
        if ((a && !this[s] && (this[s] = a(this._rgba)), t === d))
          return this[s].slice();
        var e,
          n = l.type(t),
          r = 'array' === n || 'object' === n ? t : arguments,
          i = this[s].slice();
        return (
          b(o, function (t, e) {
            t = r['object' === n ? t : e.idx];
            null == t && (t = i[e.idx]), (i[e.idx] = M(t, e));
          }),
          f ? (((e = h(f(i)))[s] = i), e) : h(i)
        );
      }),
        b(o, function (s, a) {
          h.fn[s] ||
            (h.fn[s] = function (t) {
              var e,
                n = l.type(t),
                r = 'alpha' === s ? (this._hsla ? 'hsla' : 'rgba') : c,
                i = this[r](),
                o = i[a.idx];
              return 'undefined' === n
                ? o
                : ('function' === n && ((t = t.call(this, o)), (n = l.type(t))),
                  null == t && a.empty
                    ? this
                    : ('string' === n &&
                        (e = p.exec(t)) &&
                        (t = o + parseFloat(e[2]) * ('+' === e[1] ? 1 : -1)),
                      (i[a.idx] = t),
                      this[r](i)));
            });
        });
    }),
    (h.hook = function (t) {
      t = t.split(' ');
      b(t, function (t, o) {
        (l.cssHooks[o] = {
          set: function (t, e) {
            var n,
              r,
              i = '';
            if ('transparent' !== e && ('string' !== l.type(e) || (n = B(e)))) {
              if (((e = h(n || e)), !s.rgba && 1 !== e._rgba[3])) {
                for (
                  r = 'backgroundColor' === o ? t.parentNode : t;
                  ('' === i || 'transparent' === i) && r && r.style;

                )
                  try {
                    (i = l.css(r, 'backgroundColor')), (r = r.parentNode);
                  } catch (t) {}
                e = e.blend(i && 'transparent' !== i ? i : '_default');
              }
              e = e.toRgbaString();
            }
            try {
              t.style[o] = e;
            } catch (t) {}
          },
        }),
          (l.fx.step[o] = function (t) {
            t.colorInit ||
              ((t.start = h(t.elem, o)),
              (t.end = h(t.end)),
              (t.colorInit = !0)),
              l.cssHooks[o].set(t.elem, t.start.transition(t.end, t.pos));
          });
      });
    }),
    h.hook(
      'backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor'
    ),
    (l.cssHooks.borderColor = {
      expand: function (n) {
        var r = {};
        return (
          b(['Top', 'Right', 'Bottom', 'Left'], function (t, e) {
            r['border' + e + 'Color'] = n;
          }),
          r
        );
      },
    }),
    (a = l.Color.names =
      {
        aqua: '#00ffff',
        black: '#000000',
        blue: '#0000ff',
        fuchsia: '#ff00ff',
        gray: '#808080',
        green: '#008000',
        lime: '#00ff00',
        maroon: '#800000',
        navy: '#000080',
        olive: '#808000',
        purple: '#800080',
        red: '#ff0000',
        silver: '#c0c0c0',
        teal: '#008080',
        white: '#ffffff',
        yellow: '#ffff00',
        transparent: [null, null, null, 0],
        _default: '#ffffff',
      }),
    (f = ['add', 'remove', 'toggle']),
    (v = {
      border: 1,
      borderBottom: 1,
      borderColor: 1,
      borderLeft: 1,
      borderRight: 1,
      borderTop: 1,
      borderWidth: 1,
      margin: 1,
      padding: 1,
    }),
    u.each(
      [
        'borderLeftStyle',
        'borderRightStyle',
        'borderBottomStyle',
        'borderTopStyle',
      ],
      function (t, e) {
        u.fx.step[e] = function (t) {
          (('none' !== t.end && !t.setAttr) || (1 === t.pos && !t.setAttr)) &&
            (S.style(t.elem, e, t.end), (t.setAttr = !0));
        };
      }
    ),
    u.fn.addBack ||
      (u.fn.addBack = function (t) {
        return this.add(
          null == t ? this.prevObject : this.prevObject.filter(t)
        );
      }),
    (u.effects.animateClass = function (i, t, e, n) {
      var o = u.speed(t, e, n);
      return this.queue(function () {
        var n = u(this),
          t = n.attr('class') || '',
          e = (e = o.children ? n.find('*').addBack() : n).map(function () {
            return { el: u(this), start: I(this) };
          }),
          r = function () {
            u.each(f, function (t, e) {
              i[e] && n[e + 'Class'](i[e]);
            });
          };
        r(),
          (e = e.map(function () {
            return (
              (this.end = I(this.el[0])),
              (this.diff = (function (t, e) {
                var n,
                  r,
                  i = {};
                for (n in e)
                  (r = e[n]),
                    t[n] !== r &&
                      (v[n] ||
                        (!u.fx.step[n] && isNaN(parseFloat(r))) ||
                        (i[n] = r));
                return i;
              })(this.start, this.end)),
              this
            );
          })),
          n.attr('class', t),
          (e = e.map(function () {
            var t = this,
              e = u.Deferred(),
              n = u.extend({}, o, {
                queue: !1,
                complete: function () {
                  e.resolve(t);
                },
              });
            return this.el.animate(this.diff, n), e.promise();
          })),
          u.when.apply(u, e.get()).done(function () {
            r(),
              u.each(arguments, function () {
                var e = this.el;
                u.each(this.diff, function (t) {
                  e.css(t, '');
                });
              }),
              o.complete.call(n[0]);
          });
      });
    }),
    u.fn.extend({
      addClass:
        ((c = u.fn.addClass),
        function (t, e, n, r) {
          return e
            ? u.effects.animateClass.call(this, { add: t }, e, n, r)
            : c.apply(this, arguments);
        }),
      removeClass:
        ((i = u.fn.removeClass),
        function (t, e, n, r) {
          return 1 < arguments.length
            ? u.effects.animateClass.call(this, { remove: t }, e, n, r)
            : i.apply(this, arguments);
        }),
      toggleClass:
        ((o = u.fn.toggleClass),
        function (t, e, n, r, i) {
          return 'boolean' == typeof e || void 0 === e
            ? n
              ? u.effects.animateClass.call(
                  this,
                  e ? { add: t } : { remove: t },
                  n,
                  r,
                  i
                )
              : o.apply(this, arguments)
            : u.effects.animateClass.call(this, { toggle: t }, e, n, r);
        }),
      switchClass: function (t, e, n, r, i) {
        return u.effects.animateClass.call(
          this,
          { add: e, remove: t },
          n,
          r,
          i
        );
      },
    }),
    u.expr &&
      u.expr.filters &&
      u.expr.filters.animated &&
      (u.expr.filters.animated =
        ((n = u.expr.filters.animated),
        function (t) {
          return !!u(t).data(_) || n(t);
        })),
    !1 !== u.uiBackCompat &&
      u.extend(u.effects, {
        save: function (t, e) {
          for (var n = 0, r = e.length; n < r; n++)
            null !== e[n] && t.data(w + e[n], t[0].style[e[n]]);
        },
        restore: function (t, e) {
          for (var n, r = 0, i = e.length; r < i; r++)
            null !== e[r] && ((n = t.data(w + e[r])), t.css(e[r], n));
        },
        setMode: function (t, e) {
          return (e = 'toggle' === e ? (t.is(':hidden') ? 'show' : 'hide') : e);
        },
        createWrapper: function (n) {
          if (n.parent().is('.ui-effects-wrapper')) return n.parent();
          var r = {
              width: n.outerWidth(!0),
              height: n.outerHeight(!0),
              float: n.css('float'),
            },
            t = u('<div></div>')
              .addClass('ui-effects-wrapper')
              .css({
                fontSize: '100%',
                background: 'transparent',
                border: 'none',
                margin: 0,
                padding: 0,
              }),
            e = { width: n.width(), height: n.height() },
            i = document.activeElement;
          try {
            i.id;
          } catch (t) {
            i = document.body;
          }
          return (
            n.wrap(t),
            (n[0] !== i && !u.contains(n[0], i)) || u(i).trigger('focus'),
            (t = n.parent()),
            'static' === n.css('position')
              ? (t.css({ position: 'relative' }),
                n.css({ position: 'relative' }))
              : (u.extend(r, {
                  position: n.css('position'),
                  zIndex: n.css('z-index'),
                }),
                u.each(['top', 'left', 'bottom', 'right'], function (t, e) {
                  (r[e] = n.css(e)),
                    isNaN(parseInt(r[e], 10)) && (r[e] = 'auto');
                }),
                n.css({
                  position: 'relative',
                  top: 0,
                  left: 0,
                  right: 'auto',
                  bottom: 'auto',
                })),
            n.css(e),
            t.css(r).show()
          );
        },
        removeWrapper: function (t) {
          var e = document.activeElement;
          return (
            t.parent().is('.ui-effects-wrapper') &&
              (t.parent().replaceWith(t),
              (t[0] !== e && !u.contains(t[0], e)) || u(e).trigger('focus')),
            t
          );
        },
      }),
    u.extend(u.effects, {
      version: '1.12.1',
      define: function (t, e, n) {
        return (
          n || ((n = e), (e = 'effect')),
          (u.effects.effect[t] = n),
          (u.effects.effect[t].mode = e),
          n
        );
      },
      scaledDimensions: function (t, e, n) {
        if (0 === e)
          return { height: 0, width: 0, outerHeight: 0, outerWidth: 0 };
        var r = 'horizontal' !== n ? (e || 100) / 100 : 1,
          e = 'vertical' !== n ? (e || 100) / 100 : 1;
        return {
          height: t.height() * e,
          width: t.width() * r,
          outerHeight: t.outerHeight() * e,
          outerWidth: t.outerWidth() * r,
        };
      },
      clipToBox: function (t) {
        return {
          width: t.clip.right - t.clip.left,
          height: t.clip.bottom - t.clip.top,
          left: t.clip.left,
          top: t.clip.top,
        };
      },
      unshift: function (t, e, n) {
        var r = t.queue();
        1 < e && r.splice.apply(r, [1, 0].concat(r.splice(e, n))), t.dequeue();
      },
      saveStyle: function (t) {
        t.data(k, t[0].style.cssText);
      },
      restoreStyle: function (t) {
        (t[0].style.cssText = t.data(k) || ''), t.removeData(k);
      },
      mode: function (t, e) {
        t = t.is(':hidden');
        return (
          'toggle' === e && (e = t ? 'show' : 'hide'),
          (e = (t ? 'hide' === e : 'show' === e) ? 'none' : e)
        );
      },
      getBaseline: function (t, e) {
        var n, r;
        switch (t[0]) {
          case 'top':
            n = 0;
            break;
          case 'middle':
            n = 0.5;
            break;
          case 'bottom':
            n = 1;
            break;
          default:
            n = t[0] / e.height;
        }
        switch (t[1]) {
          case 'left':
            r = 0;
            break;
          case 'center':
            r = 0.5;
            break;
          case 'right':
            r = 1;
            break;
          default:
            r = t[1] / e.width;
        }
        return { x: r, y: n };
      },
      createPlaceholder: function (t) {
        var e,
          n = t.css('position'),
          r = t.position();
        return (
          t
            .css({
              marginTop: t.css('marginTop'),
              marginBottom: t.css('marginBottom'),
              marginLeft: t.css('marginLeft'),
              marginRight: t.css('marginRight'),
            })
            .outerWidth(t.outerWidth())
            .outerHeight(t.outerHeight()),
          /^(static|relative)/.test(n) &&
            ((n = 'absolute'),
            (e = u('<' + t[0].nodeName + '>')
              .insertAfter(t)
              .css({
                display: /^(inline|ruby)/.test(t.css('display'))
                  ? 'inline-block'
                  : 'block',
                visibility: 'hidden',
                marginTop: t.css('marginTop'),
                marginBottom: t.css('marginBottom'),
                marginLeft: t.css('marginLeft'),
                marginRight: t.css('marginRight'),
                float: t.css('float'),
              })
              .outerWidth(t.outerWidth())
              .outerHeight(t.outerHeight())
              .addClass('ui-effects-placeholder')),
            t.data(w + 'placeholder', e)),
          t.css({ position: n, left: r.left, top: r.top }),
          e
        );
      },
      removePlaceholder: function (t) {
        var e = w + 'placeholder',
          n = t.data(e);
        n && (n.remove(), t.removeData(e));
      },
      cleanUp: function (t) {
        u.effects.restoreStyle(t), u.effects.removePlaceholder(t);
      },
      setTransition: function (r, t, i, o) {
        return (
          (o = o || {}),
          u.each(t, function (t, e) {
            var n = r.cssUnit(e);
            0 < n[0] && (o[e] = n[0] * i + n[1]);
          }),
          o
        );
      },
    }),
    u.fn.extend({
      effect: function () {
        function t(t) {
          var e = u(this),
            n = u.effects.mode(e, a) || o;
          e.data(_, !0),
            c.push(n),
            o && ('show' === n || (n === o && 'hide' === n)) && e.show(),
            (o && 'none' === n) || u.effects.saveStyle(e),
            u.isFunction(t) && t();
        }
        var r = T.apply(this, arguments),
          i = u.effects.effect[r.effect],
          o = i.mode,
          e = r.queue,
          n = e || 'fx',
          s = r.complete,
          a = r.mode,
          c = [];
        return u.fx.off || !i
          ? a
            ? this[a](r.duration, s)
            : this.each(function () {
                s && s.call(this);
              })
          : !1 === e
          ? this.each(t).each(f)
          : this.queue(n, t).queue(n, f);
        function f(t) {
          var e = u(this);
          function n() {
            u.isFunction(s) && s.call(e[0]), u.isFunction(t) && t();
          }
          (r.mode = c.shift()),
            !1 === u.uiBackCompat || o
              ? 'none' === r.mode
                ? (e[a](), n())
                : i.call(e[0], r, function () {
                    e.removeData(_),
                      u.effects.cleanUp(e),
                      'hide' === r.mode && e.hide(),
                      n();
                  })
              : (e.is(':hidden') ? 'hide' === a : 'show' === a)
              ? (e[a](), n())
              : i.call(e[0], r, n);
        }
      },
      show:
        ((x = u.fn.show),
        function (t) {
          if (F(t)) return x.apply(this, arguments);
          var e = T.apply(this, arguments);
          return (e.mode = 'show'), this.effect.call(this, e);
        }),
      hide:
        ((y = u.fn.hide),
        function (t) {
          if (F(t)) return y.apply(this, arguments);
          var e = T.apply(this, arguments);
          return (e.mode = 'hide'), this.effect.call(this, e);
        }),
      toggle:
        ((r = u.fn.toggle),
        function (t) {
          if (F(t) || 'boolean' == typeof t) return r.apply(this, arguments);
          var e = T.apply(this, arguments);
          return (e.mode = 'toggle'), this.effect.call(this, e);
        }),
      cssUnit: function (t) {
        var n = this.css(t),
          r = [];
        return (
          u.each(['em', 'px', '%', 'pt'], function (t, e) {
            0 < n.indexOf(e) && (r = [parseFloat(n), e]);
          }),
          r
        );
      },
      cssClip: function (t) {
        return t
          ? this.css(
              'clip',
              'rect(' +
                t.top +
                'px ' +
                t.right +
                'px ' +
                t.bottom +
                'px ' +
                t.left +
                'px)'
            )
          : W(this.css('clip'), this);
      },
      transfer: function (t, e) {
        var n = u(this),
          r = u(t.to),
          i = 'fixed' === r.css('position'),
          o = u('body'),
          s = i ? o.scrollTop() : 0,
          a = i ? o.scrollLeft() : 0,
          o = r.offset(),
          o = {
            top: o.top - s,
            left: o.left - a,
            height: r.innerHeight(),
            width: r.innerWidth(),
          },
          r = n.offset(),
          c = u("<div class='ui-effects-transfer'></div>")
            .appendTo('body')
            .addClass(t.className)
            .css({
              top: r.top - s,
              left: r.left - a,
              height: n.innerHeight(),
              width: n.innerWidth(),
              position: i ? 'fixed' : 'absolute',
            })
            .animate(o, t.duration, t.easing, function () {
              c.remove(), u.isFunction(e) && e();
            });
      },
    }),
    (u.fx.step.clip = function (t) {
      t.clipInit ||
        ((t.start = u(t.elem).cssClip()),
        'string' == typeof t.end && (t.end = W(t.end, t.elem)),
        (t.clipInit = !0)),
        u(t.elem).cssClip({
          top: t.pos * (t.end.top - t.start.top) + t.start.top,
          right: t.pos * (t.end.right - t.start.right) + t.start.right,
          bottom: t.pos * (t.end.bottom - t.start.bottom) + t.start.bottom,
          left: t.pos * (t.end.left - t.start.left) + t.start.left,
        });
    }),
    (C = {}),
    u.each(['Quad', 'Cubic', 'Quart', 'Quint', 'Expo'], function (e, t) {
      C[t] = function (t) {
        return Math.pow(t, e + 2);
      };
    }),
    u.extend(C, {
      Sine: function (t) {
        return 1 - Math.cos((t * Math.PI) / 2);
      },
      Circ: function (t) {
        return 1 - Math.sqrt(1 - t * t);
      },
      Elastic: function (t) {
        return 0 === t || 1 === t
          ? t
          : -Math.pow(2, 8 * (t - 1)) *
              Math.sin(((80 * (t - 1) - 7.5) * Math.PI) / 15);
      },
      Back: function (t) {
        return t * t * (3 * t - 2);
      },
      Bounce: function (t) {
        for (var e, n = 4; t < ((e = Math.pow(2, --n)) - 1) / 11; );
        return (
          1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
        );
      },
    }),
    u.each(C, function (t, e) {
      (u.easing['easeIn' + t] = e),
        (u.easing['easeOut' + t] = function (t) {
          return 1 - e(1 - t);
        }),
        (u.easing['easeInOut' + t] = function (t) {
          return t < 0.5 ? e(2 * t) / 2 : 1 - e(-2 * t + 2) / 2;
        });
    }),
    u.effects
  );
});
