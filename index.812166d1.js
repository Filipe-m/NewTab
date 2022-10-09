;(function () {
  const e = document.createElement('link').relList
  if (e && e.supports && e.supports('modulepreload')) return
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i)
  new MutationObserver(i => {
    for (const s of i)
      if (s.type === 'childList')
        for (const o of s.addedNodes)
          o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(i) {
    const s = {}
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerpolicy && (s.referrerPolicy = i.referrerpolicy),
      i.crossorigin === 'use-credentials'
        ? (s.credentials = 'include')
        : i.crossorigin === 'anonymous'
        ? (s.credentials = 'omit')
        : (s.credentials = 'same-origin'),
      s
    )
  }
  function r(i) {
    if (i.ep) return
    i.ep = !0
    const s = n(i)
    fetch(i.href, s)
  }
})()
function b() {}
const _e = t => t
function ge(t) {
  return t()
}
function re() {
  return Object.create(null)
}
function N(t) {
  t.forEach(ge)
}
function ye(t) {
  return typeof t == 'function'
}
function H(t, e) {
  return t != t
    ? e == e
    : t !== e || (t && typeof t == 'object') || typeof t == 'function'
}
let M
function Z(t, e) {
  return M || (M = document.createElement('a')), (M.href = e), t === M.href
}
function Ce(t) {
  return Object.keys(t).length === 0
}
const $e = typeof window < 'u'
let Se = $e ? () => window.performance.now() : () => Date.now(),
  ne = $e ? t => requestAnimationFrame(t) : b
const T = new Set()
function ve(t) {
  T.forEach(e => {
    e.c(t) || (T.delete(e), e.f())
  }),
    T.size !== 0 && ne(ve)
}
function Te(t) {
  let e
  return (
    T.size === 0 && ne(ve),
    {
      promise: new Promise(n => {
        T.add((e = { c: t, f: n }))
      }),
      abort() {
        T.delete(e)
      }
    }
  )
}
function g(t, e) {
  t.appendChild(e)
}
function be(t) {
  if (!t) return document
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument
  return e && e.host ? e : t.ownerDocument
}
function Fe(t) {
  const e = y('style')
  return Ne(be(t), e), e.sheet
}
function Ne(t, e) {
  return g(t.head || t, e), e.sheet
}
function C(t, e, n) {
  t.insertBefore(e, n || null)
}
function w(t) {
  t.parentNode.removeChild(t)
}
function Oe(t, e) {
  for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e)
}
function y(t) {
  return document.createElement(t)
}
function P(t) {
  return document.createTextNode(t)
}
function S() {
  return P(' ')
}
function we(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r)
}
function _(t, e, n) {
  n == null
    ? t.removeAttribute(e)
    : t.getAttribute(e) !== n && t.setAttribute(e, n)
}
function Ae(t) {
  return Array.from(t.childNodes)
}
function ke(t, e) {
  ;(e = '' + e), t.wholeText !== e && (t.data = e)
}
function Le(t, e, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  const i = document.createEvent('CustomEvent')
  return i.initCustomEvent(t, n, r, e), i
}
const W = new Map()
let D = 0
function je(t) {
  let e = 5381,
    n = t.length
  for (; n--; ) e = ((e << 5) - e) ^ t.charCodeAt(n)
  return e >>> 0
}
function Me(t, e) {
  const n = { stylesheet: Fe(e), rules: {} }
  return W.set(t, n), n
}
function oe(t, e, n, r, i, s, o, u = 0) {
  const m = 16.666 / r
  let f = `{
`
  for (let h = 0; h <= 1; h += m) {
    const k = e + (n - e) * s(h)
    f +=
      h * 100 +
      `%{${o(k, 1 - k)}}
`
  }
  const p =
      f +
      `100% {${o(n, 1 - n)}}
}`,
    d = `__svelte_${je(p)}_${u}`,
    c = be(t),
    { stylesheet: l, rules: a } = W.get(c) || Me(c, t)
  a[d] || ((a[d] = !0), l.insertRule(`@keyframes ${d} ${p}`, l.cssRules.length))
  const $ = t.style.animation || ''
  return (
    (t.style.animation = `${
      $ ? `${$}, ` : ''
    }${d} ${r}ms linear ${i}ms 1 both`),
    (D += 1),
    d
  )
}
function qe(t, e) {
  const n = (t.style.animation || '').split(', '),
    r = n.filter(e ? s => s.indexOf(e) < 0 : s => s.indexOf('__svelte') === -1),
    i = n.length - r.length
  i && ((t.style.animation = r.join(', ')), (D -= i), D || ze())
}
function ze() {
  ne(() => {
    D ||
      (W.forEach(t => {
        const { ownerNode: e } = t.stylesheet
        e && w(e)
      }),
      W.clear())
  })
}
let ie
function L(t) {
  ie = t
}
const A = [],
  se = [],
  z = [],
  le = [],
  Be = Promise.resolve()
let ee = !1
function Pe() {
  ee || ((ee = !0), Be.then(xe))
}
function F(t) {
  z.push(t)
}
const Q = new Set()
let q = 0
function xe() {
  const t = ie
  do {
    for (; q < A.length; ) {
      const e = A[q]
      q++, L(e), We(e.$$)
    }
    for (L(null), A.length = 0, q = 0; se.length; ) se.pop()()
    for (let e = 0; e < z.length; e += 1) {
      const n = z[e]
      Q.has(n) || (Q.add(n), n())
    }
    z.length = 0
  } while (A.length)
  for (; le.length; ) le.pop()()
  ;(ee = !1), Q.clear(), L(t)
}
function We(t) {
  if (t.fragment !== null) {
    t.update(), N(t.before_update)
    const e = t.dirty
    ;(t.dirty = [-1]),
      t.fragment && t.fragment.p(t.ctx, e),
      t.after_update.forEach(F)
  }
}
let O
function De() {
  return (
    O ||
      ((O = Promise.resolve()),
      O.then(() => {
        O = null
      })),
    O
  )
}
function U(t, e, n) {
  t.dispatchEvent(Le(`${e ? 'intro' : 'outro'}${n}`))
}
const B = new Set()
let E
function V() {
  E = { r: 0, c: [], p: E }
}
function X() {
  E.r || N(E.c), (E = E.p)
}
function v(t, e) {
  t && t.i && (B.delete(t), t.i(e))
}
function x(t, e, n, r) {
  if (t && t.o) {
    if (B.has(t)) return
    B.add(t),
      E.c.push(() => {
        B.delete(t), r && (n && t.d(1), r())
      }),
      t.o(e)
  } else r && r()
}
const Re = { duration: 0 }
function R(t, e, n, r) {
  let i = e(t, n),
    s = r ? 0 : 1,
    o = null,
    u = null,
    m = null
  function f() {
    m && qe(t, m)
  }
  function p(c, l) {
    const a = c.b - s
    return (
      (l *= Math.abs(a)),
      {
        a: s,
        b: c.b,
        d: a,
        duration: l,
        start: c.start,
        end: c.start + l,
        group: c.group
      }
    )
  }
  function d(c) {
    const {
        delay: l = 0,
        duration: a = 300,
        easing: $ = _e,
        tick: h = b,
        css: k
      } = i || Re,
      J = { start: Se() + l, b: c }
    c || ((J.group = E), (E.r += 1)),
      o || u
        ? (u = J)
        : (k && (f(), (m = oe(t, s, c, a, l, $, k))),
          c && h(0, 1),
          (o = p(J, a)),
          F(() => U(t, c, 'start')),
          Te(j => {
            if (
              (u &&
                j > u.start &&
                ((o = p(u, a)),
                (u = null),
                U(t, o.b, 'start'),
                k && (f(), (m = oe(t, s, o.b, o.duration, 0, $, i.css)))),
              o)
            ) {
              if (j >= o.end)
                h((s = o.b), 1 - s),
                  U(t, o.b, 'end'),
                  u || (o.b ? f() : --o.group.r || N(o.group.c)),
                  (o = null)
              else if (j >= o.start) {
                const Ee = j - o.start
                ;(s = o.a + o.d * $(Ee / o.duration)), h(s, 1 - s)
              }
            }
            return !!(o || u)
          }))
  }
  return {
    run(c) {
      ye(i)
        ? De().then(() => {
            ;(i = i()), d(c)
          })
        : d(c)
    },
    end() {
      f(), (o = u = null)
    }
  }
}
function te(t) {
  t && t.c()
}
function G(t, e, n, r) {
  const { fragment: i, on_mount: s, on_destroy: o, after_update: u } = t.$$
  i && i.m(e, n),
    r ||
      F(() => {
        const m = s.map(ge).filter(ye)
        o ? o.push(...m) : N(m), (t.$$.on_mount = [])
      }),
    u.forEach(F)
}
function I(t, e) {
  const n = t.$$
  n.fragment !== null &&
    (N(n.on_destroy),
    n.fragment && n.fragment.d(e),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []))
}
function Ge(t, e) {
  t.$$.dirty[0] === -1 && (A.push(t), Pe(), t.$$.dirty.fill(0)),
    (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31)
}
function K(t, e, n, r, i, s, o, u = [-1]) {
  const m = ie
  L(t)
  const f = (t.$$ = {
    fragment: null,
    ctx: null,
    props: s,
    update: b,
    not_equal: i,
    bound: re(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (m ? m.$$.context : [])),
    callbacks: re(),
    dirty: u,
    skip_bound: !1,
    root: e.target || m.$$.root
  })
  o && o(f.root)
  let p = !1
  if (
    ((f.ctx = n
      ? n(t, e.props || {}, (d, c, ...l) => {
          const a = l.length ? l[0] : c
          return (
            f.ctx &&
              i(f.ctx[d], (f.ctx[d] = a)) &&
              (!f.skip_bound && f.bound[d] && f.bound[d](a), p && Ge(t, d)),
            c
          )
        })
      : []),
    f.update(),
    (p = !0),
    N(f.before_update),
    (f.fragment = r ? r(f.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      const d = Ae(e.target)
      f.fragment && f.fragment.l(d), d.forEach(w)
    } else f.fragment && f.fragment.c()
    e.intro && v(t.$$.fragment), G(t, e.target, e.anchor, e.customElement), xe()
  }
  L(m)
}
class Y {
  $destroy() {
    I(this, 1), (this.$destroy = b)
  }
  $on(e, n) {
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = [])
    return (
      r.push(n),
      () => {
        const i = r.indexOf(n)
        i !== -1 && r.splice(i, 1)
      }
    )
  }
  $set(e) {
    this.$$set &&
      !Ce(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1))
  }
}
function Ie(t) {
  let e, n, r
  return {
    c() {
      ;(e = y('div')),
        (n = y('h1')),
        (r = P(t[0])),
        _(n, 'class', 'svelte-vjdkpw'),
        _(e, 'class', 'time svelte-vjdkpw')
    },
    m(i, s) {
      C(i, e, s), g(e, n), g(n, r)
    },
    p(i, [s]) {
      s & 1 && ke(r, i[0])
    },
    i: b,
    o: b,
    d(i) {
      i && w(e)
    }
  }
}
function He(t, e, n) {
  let r
  function i() {
    let s = new Date(),
      o = s.getHours(),
      u = s.getMinutes(),
      m = s.getSeconds()
    ;(o = o < 10 ? '0' + o : o),
      (u = u < 10 ? '0' + u : u),
      (m = m < 10 ? '0' + m : m),
      n(0, (r = o + ' : ' + u + ' : ' + m + ' ')),
      setTimeout(function () {
        i()
      }, 1e3)
  }
  return i(), [r]
}
class Ke extends Y {
  constructor(e) {
    super(), K(this, e, He, Ie, H, {})
  }
}
function Ye(t) {
  let e, n, r, i, s, o, u, m
  return {
    c() {
      ;(e = y('div')),
        (n = y('h1')),
        (r = P(t[0])),
        (i = P('\xB0C')),
        (s = S()),
        (o = y('img')),
        _(n, 'class', 'svelte-hvs9su'),
        Z(o.src, (u = t[2])) || _(o, 'src', u),
        _(o, 'alt', (m = t[1] + ' ')),
        _(o, 'class', 'svelte-hvs9su'),
        _(e, 'class', 'svelte-hvs9su')
    },
    m(f, p) {
      C(f, e, p), g(e, n), g(n, r), g(n, i), g(e, s), g(e, o)
    },
    p(f, [p]) {
      p & 1 && ke(r, f[0]),
        p & 4 && !Z(o.src, (u = f[2])) && _(o, 'src', u),
        p & 2 && m !== (m = f[1] + ' ') && _(o, 'alt', m)
    },
    i: b,
    o: b,
    d(f) {
      f && w(e)
    }
  }
}
function Je(t, e, n) {
  let r = 0,
    i = 0,
    s = null
  return (
    (() => {
      fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=Goi\xE2nia&units=metric&appid=38eb46c466d07fbb7b72aea0e547dd34'
      )
        .then(p => p.json())
        .then(p => {
          let d = p.main.temp
          n(0, (r = Math.round(d))), n(1, (i = p.weather[0].description))
          let c = p.weather[0].icon
          n(2, (s = `http://openweathermap.org/img/wn/${c}@2x.png`))
        })
    })(),
    [r, i, s]
  )
}
class Qe extends Y {
  constructor(e) {
    super(), K(this, e, Je, Ye, H, {})
  }
}
function Ue(t) {
  let e
  return {
    c() {
      ;(e = y('div')),
        (e.innerHTML = `<img src="Search.svg" alt=""/> 
  <form action="https://google.com/search" autocomplete="off" type="GET"><input type="hidden" name=" " class="svelte-1kyihkz"/> 
    <input type="text" name="q" placeholder="Search..." class="svelte-1kyihkz"/></form>`),
        _(e, 'class', 'svelte-1kyihkz')
    },
    m(n, r) {
      C(n, e, r)
    },
    p: b,
    i: b,
    o: b,
    d(n) {
      n && w(e)
    }
  }
}
class Ve extends Y {
  constructor(e) {
    super(), K(this, e, null, Ue, H, {})
  }
}
function Xe(t) {
  const e = t - 1
  return e * e * e + 1
}
function ce(t) {
  return --t * t * t * t * t + 1
}
function ae(t, { delay: e = 0, duration: n = 400, easing: r = _e } = {}) {
  const i = +getComputedStyle(t).opacity
  return { delay: e, duration: n, easing: r, css: s => `opacity: ${s * i}` }
}
function ue(t, { delay: e = 0, duration: n = 400, easing: r = Xe } = {}) {
  const i = getComputedStyle(t),
    s = +i.opacity,
    o = parseFloat(i.height),
    u = parseFloat(i.paddingTop),
    m = parseFloat(i.paddingBottom),
    f = parseFloat(i.marginTop),
    p = parseFloat(i.marginBottom),
    d = parseFloat(i.borderTopWidth),
    c = parseFloat(i.borderBottomWidth)
  return {
    delay: e,
    duration: n,
    easing: r,
    css: l =>
      `overflow: hidden;opacity: ${Math.min(l * 20, 1) * s};height: ${
        l * o
      }px;padding-top: ${l * u}px;padding-bottom: ${l * m}px;margin-top: ${
        l * f
      }px;margin-bottom: ${l * p}px;border-top-width: ${
        l * d
      }px;border-bottom-width: ${l * c}px;`
  }
}
function fe(t, e, n) {
  const r = t.slice()
  return (r[6] = e[n]), r
}
function de(t) {
  let e, n, r
  return (
    (n = new Qe({})),
    {
      c() {
        ;(e = y('div')), te(n.$$.fragment), _(e, 'class', 'temp svelte-1kyyi53')
      },
      m(i, s) {
        C(i, e, s), G(n, e, null), (r = !0)
      },
      i(i) {
        r || (v(n.$$.fragment, i), (r = !0))
      },
      o(i) {
        x(n.$$.fragment, i), (r = !1)
      },
      d(i) {
        i && w(e), I(n)
      }
    }
  )
}
function me(t) {
  let e,
    n,
    r,
    i,
    s,
    o,
    u,
    m,
    f,
    p,
    d,
    c = t[2],
    l = []
  for (let a = 0; a < c.length; a += 1) l[a] = pe(fe(t, c, a))
  return {
    c() {
      ;(e = y('div')),
        (n = y('div')),
        (r = y('div')),
        (i = y('button')),
        (i.textContent = '\u2715'),
        (s = S()),
        (o = y('div')),
        (u = y('div'))
      for (let a = 0; a < l.length; a += 1) l[a].c()
      _(i, 'class', 'btn'),
        _(r, 'class', 'close-btn'),
        _(u, 'class', 'apps'),
        _(o, 'class', 'links'),
        _(n, 'class', 'bar'),
        _(e, 'class', 'sidebar svelte-1kyyi53')
    },
    m(a, $) {
      C(a, e, $), g(e, n), g(n, r), g(r, i), g(n, s), g(n, o), g(o, u)
      for (let h = 0; h < l.length; h += 1) l[h].m(u, null)
      ;(f = !0), p || ((d = we(i, 'click', t[3])), (p = !0))
    },
    p(a, $) {
      if (((t = a), $ & 4)) {
        c = t[2]
        let h
        for (h = 0; h < c.length; h += 1) {
          const k = fe(t, c, h)
          l[h] ? l[h].p(k, $) : ((l[h] = pe(k)), l[h].c(), l[h].m(u, null))
        }
        for (; h < l.length; h += 1) l[h].d(1)
        l.length = c.length
      }
    },
    i(a) {
      f ||
        (F(() => {
          m || (m = R(e, ue, { delay: 50, duration: 500, easing: ce }, !0)),
            m.run(1)
        }),
        (f = !0))
    },
    o(a) {
      m || (m = R(e, ue, { delay: 50, duration: 500, easing: ce }, !1)),
        m.run(0),
        (f = !1)
    },
    d(a) {
      a && w(e), Oe(l, a), a && m && m.end(), (p = !1), d()
    }
  }
}
function pe(t) {
  let e, n, r
  return {
    c() {
      ;(e = y('a')),
        (n = y('img')),
        _(n, 'class', 'img'),
        Z(n.src, (r = 'https://icon.horse/icon/' + t[6].img)) || _(n, 'src', r),
        _(n, 'alt', t[6].name),
        _(e, 'class', 'app'),
        _(e, 'href', t[6].link)
    },
    m(i, s) {
      C(i, e, s), g(e, n)
    },
    p: b,
    d(i) {
      i && w(e)
    }
  }
}
function he(t) {
  let e, n, r, i, s
  return {
    c() {
      ;(e = y('button')),
        (e.textContent = '\u2630'),
        _(e, 'class', 'sidebar-btn svelte-1kyyi53')
    },
    m(o, u) {
      C(o, e, u), (r = !0), i || ((s = we(e, 'click', t[4])), (i = !0))
    },
    p: b,
    i(o) {
      r ||
        (F(() => {
          n || (n = R(e, ae, { delay: 0, duration: 200 }, !0)), n.run(1)
        }),
        (r = !0))
    },
    o(o) {
      n || (n = R(e, ae, { delay: 0, duration: 200 }, !1)), n.run(0), (r = !1)
    },
    d(o) {
      o && w(e), o && n && n.end(), (i = !1), s()
    }
  }
}
function Ze(t) {
  let e, n, r, i, s, o, u, m, f, p
  r = new Ke({})
  let d = t[1] && de()
  u = new Ve({})
  let c = t[0] && me(t),
    l = t[0] == !1 && he(t)
  return {
    c() {
      ;(e = y('main')),
        (n = y('div')),
        te(r.$$.fragment),
        (i = S()),
        d && d.c(),
        (s = S()),
        (o = y('div')),
        te(u.$$.fragment),
        (m = S()),
        c && c.c(),
        (f = S()),
        l && l.c(),
        _(n, 'class', 'clock svelte-1kyyi53'),
        _(o, 'class', 'search svelte-1kyyi53')
    },
    m(a, $) {
      C(a, e, $),
        g(e, n),
        G(r, n, null),
        g(e, i),
        d && d.m(e, null),
        g(e, s),
        g(e, o),
        G(u, o, null),
        g(e, m),
        c && c.m(e, null),
        g(e, f),
        l && l.m(e, null),
        (p = !0)
    },
    p(a, [$]) {
      a[1]
        ? d
          ? $ & 2 && v(d, 1)
          : ((d = de()), d.c(), v(d, 1), d.m(e, s))
        : d &&
          (V(),
          x(d, 1, 1, () => {
            d = null
          }),
          X()),
        a[0]
          ? c
            ? (c.p(a, $), $ & 1 && v(c, 1))
            : ((c = me(a)), c.c(), v(c, 1), c.m(e, f))
          : c &&
            (V(),
            x(c, 1, 1, () => {
              c = null
            }),
            X()),
        a[0] == !1
          ? l
            ? (l.p(a, $), $ & 1 && v(l, 1))
            : ((l = he(a)), l.c(), v(l, 1), l.m(e, null))
          : l &&
            (V(),
            x(l, 1, 1, () => {
              l = null
            }),
            X())
    },
    i(a) {
      p ||
        (v(r.$$.fragment, a), v(d), v(u.$$.fragment, a), v(c), v(l), (p = !0))
    },
    o(a) {
      x(r.$$.fragment, a), x(d), x(u.$$.fragment, a), x(c), x(l), (p = !1)
    },
    d(a) {
      a && w(e), I(r), d && d.d(), I(u), c && c.d(), l && l.d()
    }
  }
}
function et(t, e, n) {
  let r = !1,
    i = [
      {
        name: 'Youtube',
        img: 'www.youtube.com',
        link: 'https://www.youtube.com/'
      },
      {
        name: 'Whatsapp',
        img: 'web.whatsapp.com',
        link: 'https://web.whatsapp.com/'
      },
      {
        name: 'Github',
        img: 'github.com/Filipe-m?tab=repositories',
        link: 'https://github.com/Filipe-m?tab=repositories'
      },
      { name: 'Twitter', img: 'twitter.com', link: 'https://twitter.com/home' },
      {
        name: 'Instagram',
        img: 'instagram.com',
        link: 'https://www.instagram.com/'
      }
    ],
    s = !1
  return (
    (() => {
      navigator.onLine && n(1, (s = !0))
    })(),
    [r, s, i, () => n(0, (r = !1)), () => n(0, (r = !0))]
  )
}
class tt extends Y {
  constructor(e) {
    super(), K(this, e, et, Ze, H, {})
  }
}
new tt({ target: document.getElementById('app') })
