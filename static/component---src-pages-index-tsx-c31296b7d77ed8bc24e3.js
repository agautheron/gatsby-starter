(window.webpackJsonp = window.webpackJsonp || []).push([[8], {524(e, t, a) {
  'use strict'; a.r(t); let i = a(0),
    n = a.n(i),
    r = a(117),
    c = a(277),
    l = a(511),
    o = a(532),
    s = a(529),
    u = a(533),
    d = (a(309), a(29), a(216), a(3)),
    m = a.n(d),
    p = a(11),
    b = a.n(p),
    v = a(12),
    h = a.n(v),
    f = a(13),
    O = a.n(f),
    j = a(10),
    E = a.n(j),
    g = a(2),
    y = a.n(g),
    N = a(14),
    q = a.n(N),
    k = a(1),
    w = a.n(k),
    x = a(6),
    C = a.n(x),
    P = a(15),
    L = a.n(P),
    A = a(530),
    I = a(4),
    T = a.n(I),
    z = (a(7), a(5)),
    R = a(42),
    D = a(196),
    G = a(197),
    J = a(269),
    K = a(162),
    V = a(278); function B(e) {
      let t = e.children,
        a = e.className,
        i = e.content,
        r = e.hidden,
        c = e.visible,
        l = T()(Object(R.a)(c, 'visible'), Object(R.a)(r, 'hidden'), 'content', a),
        o = Object(D.a)(B, e),
        s = Object(G.a)(B, e); return n.a.createElement(s, m()({}, o, {className: l}), z.a.isNil(t) ? i : t);
    }B.handledProps = ['as', 'children', 'className', 'content', 'hidden', 'visible'], B.propTypes = {}; let S = B,
      U = a(80),
      F = a.n(U); function H(e) {
        let t = e.attached,
          a = e.basic,
          i = e.buttons,
          r = e.children,
          c = e.className,
          l = e.color,
          o = e.compact,
          s = e.content,
          u = e.floated,
          d = e.fluid,
          p = e.icon,
          b = e.inverted,
          v = e.labeled,
          h = e.negative,
          f = e.positive,
          O = e.primary,
          j = e.secondary,
          E = e.size,
          g = e.toggle,
          y = e.vertical,
          N = e.widths,
          q = T()('ui', l, E, Object(R.a)(a, 'basic'), Object(R.a)(o, 'compact'), Object(R.a)(d, 'fluid'), Object(R.a)(p, 'icon'), Object(R.a)(b, 'inverted'), Object(R.a)(v, 'labeled'), Object(R.a)(h, 'negative'), Object(R.a)(f, 'positive'), Object(R.a)(O, 'primary'), Object(R.a)(j, 'secondary'), Object(R.a)(g, 'toggle'), Object(R.a)(y, 'vertical'), Object(R.b)(t, 'attached'), Object(R.e)(u, 'floated'), Object(R.g)(N), 'buttons', c),
          k = Object(D.a)(H, e),
          w = Object(G.a)(H, e); return L()(i) ? n.a.createElement(w, m()({}, k, {className: q}), z.a.isNil(r) ? s : r) : n.a.createElement(w, m()({}, k, {className: q}), F()(i, (e => {
            return Y.create(e);
          })));
      }H.handledProps = ['as', 'attached', 'basic', 'buttons', 'children', 'className', 'color', 'compact', 'content', 'floated', 'fluid', 'icon', 'inverted', 'labeled', 'negative', 'positive', 'primary', 'secondary', 'size', 'toggle', 'vertical', 'widths'], H.propTypes = {}; const M = H; function Q(e) {
        let t = e.className,
          a = e.text,
          i = T()('or', t),
          r = Object(D.a)(Q, e),
          c = Object(G.a)(Q, e); return n.a.createElement(c, m()({}, r, {className: i, 'data-text': a}));
      }Q.handledProps = ['as', 'className', 'text'], Q.propTypes = {}; let W = Q,
        X = (function (e) {
          function t() {
            let e, a; b()(this, t); for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++) {
              r[c] = arguments[c];
            } return a = O()(this, (e = E()(t)).call.apply(e, [this].concat(r))), w()(y()(a), 'ref', Object(i.createRef)()), w()(y()(a), 'computeElementType', (() => {
              let e = a.props,
                t = e.attached,
                i = e.label; if (!L()(t) || !L()(i)) {
                  return 'div';
                }
            })), w()(y()(a), 'computeTabIndex', (e => {
              let t = a.props,
                i = t.disabled,
                n = t.tabIndex; return L()(n) ? i ? -1 : e === 'div' ? 0 : void 0 : n;
            })), w()(y()(a), 'focus', (() => {
              return C()(a.ref.current, 'focus');
            })), w()(y()(a), 'handleClick', (e => {
              a.props.disabled ? e.preventDefault() : C()(a.props, 'onClick', e, a.props);
            })), w()(y()(a), 'hasIconClass', (() => {
              let e = a.props,
                t = e.labelPosition,
                i = e.children,
                n = e.content,
                r = e.icon; return !0 === r || r && (t || z.a.isNil(i) && L()(n));
            })), a;
          } return q()(t, e), h()(t, [{key: 'computeButtonAriaRole', value(e) {
            const t = this.props.role; return L()(t) ? e !== 'button' ? 'button' : void 0 : t;
          }}, {key: 'render', value() {
            let e = this.props,
              a = e.active,
              i = e.animated,
              r = e.attached,
              c = e.basic,
              l = e.children,
              o = e.circular,
              s = e.className,
              u = e.color,
              d = e.compact,
              p = e.content,
              b = e.disabled,
              v = e.floated,
              h = e.fluid,
              f = e.icon,
              O = e.inverted,
              j = e.label,
              E = e.labelPosition,
              g = e.loading,
              y = e.negative,
              N = e.positive,
              q = e.primary,
              k = e.secondary,
              w = e.size,
              x = e.toggle,
              C = T()(u, w, Object(R.a)(a, 'active'), Object(R.a)(c, 'basic'), Object(R.a)(o, 'circular'), Object(R.a)(d, 'compact'), Object(R.a)(h, 'fluid'), Object(R.a)(this.hasIconClass(), 'icon'), Object(R.a)(O, 'inverted'), Object(R.a)(g, 'loading'), Object(R.a)(y, 'negative'), Object(R.a)(N, 'positive'), Object(R.a)(q, 'primary'), Object(R.a)(k, 'secondary'), Object(R.a)(x, 'toggle'), Object(R.b)(i, 'animated'), Object(R.b)(r, 'attached')),
              P = T()(Object(R.b)(E || Boolean(j), 'labeled')),
              I = T()(Object(R.a)(b, 'disabled'), Object(R.e)(v, 'floated')),
              J = Object(D.a)(t, this.props),
              B = Object(G.a)(t, this.props, this.computeElementType),
              S = this.computeTabIndex(B); if (!L()(j)) {
                let U = T()('ui', C, 'button', s),
                  F = T()('ui', P, 'button', s, I),
                  H = V.a.create(j, {defaultProps: {basic: !0, pointing: E === 'left' ? 'right' : 'left'}, autoGenerateKey: !1}); return n.a.createElement(B, m()({}, J, {className: F, onClick: this.handleClick}), E === 'left' && H, n.a.createElement(A.a, {innerRef: this.ref}, n.a.createElement('button', {className: U, 'aria-pressed': x ? Boolean(a) : void 0, disabled: b, tabIndex: S}, K.a.create(f, {autoGenerateKey: !1}), ' ', p)), (E === 'right' || !E) && H);
              } let M = T()('ui', C, I, P, 'button', s),
                Q = !z.a.isNil(l),
                W = this.computeButtonAriaRole(B); return n.a.createElement(A.a, {innerRef: this.ref}, n.a.createElement(B, m()({}, J, {className: M, 'aria-pressed': x ? Boolean(a) : void 0, disabled: b && B === 'button' || void 0, onClick: this.handleClick, role: W, tabIndex: S}), Q && l, !Q && K.a.create(f, {autoGenerateKey: !1}), !Q && p));
          }}]), t;
        })(i.Component); w()(X, 'defaultProps', {as: 'button'}), w()(X, 'Content', S), w()(X, 'Group', M), w()(X, 'Or', W), w()(X, 'handledProps', ['active', 'animated', 'as', 'attached', 'basic', 'children', 'circular', 'className', 'color', 'compact', 'content', 'disabled', 'floated', 'fluid', 'icon', 'inverted', 'label', 'labelPosition', 'loading', 'negative', 'onClick', 'positive', 'primary', 'role', 'secondary', 'size', 'tabIndex', 'toggle']), X.propTypes = {}, X.create = Object(J.c)(X, (e => {
          return {content: e};
        })); var Y = X,
          Z = a(534); t.default = Object(l.b)((e => {
            return i.createElement('div', null, i.createElement(o.a, {vertical: !0, inverted: !0, textAlign: 'center', className: 'masthead'}, i.createElement(c.a, {Link: r.Link, pathname: e.location.pathname, items: l.a, inverted: !0}), i.createElement(s.a, {text: !0}, i.createElement(u.a, {inverted: !0, as: 'h1'}, 'Gatsby 2.0 - Starter kit'), i.createElement(u.a, {inverted: !0, as: 'h2'}, 'Typescript - Jest - Semantic UI'), i.createElement(Y, {primary: !0, size: 'huge'}, 'Get started!'))), i.createElement(o.a, {vertical: !0, className: 'stripe'}, i.createElement(Z.a, {stackable: !0, verticalAlign: 'middle', className: 'container'}, i.createElement(Z.a.Row, null, i.createElement(Z.a.Column, {width: '8'}, i.createElement(u.a, null, 'Lorem ipsum'), i.createElement('p', null, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium ad, quae, perspiciatis ipsa distinctio.'), i.createElement(u.a, null, 'Dolor sit amet'), i.createElement('p', null, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium ad, quae, perspiciatis ipsa distinctio.')), i.createElement(Z.a.Column, {width: '6', floated: 'right'}, i.createElement(u.a, null, 'Lorem ipsum'), i.createElement('p', null, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium ad, quae, perspiciatis ipsa distinctio.'), i.createElement(u.a, null, 'Dolor sit amet'), i.createElement('p', null, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium ad, quae, perspiciatis ipsa distinctio.'))))), i.createElement(o.a, {vertical: !0, className: 'stripe alternate feature'}, i.createElement(Z.a, {columns: '3', textAlign: 'center', divided: !0, relaxed: !0, stackable: !0, className: 'container'}, i.createElement(Z.a.Row, null, i.createElement(Z.a.Column, null, i.createElement(u.a, {icon: !0}, i.createElement(K.a, {name: 'wizard'}), 'A kind of magic!'), i.createElement('p', null, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eaque at quae cupiditate aspernatur quibusdam! Distinctio quod non, harum dolorum earum molestias, beatae expedita aliquam dolorem asperiores nemo amet quaerat.')), i.createElement(Z.a.Column, null, i.createElement(u.a, {icon: !0}, i.createElement(K.a, {name: 'wizard'}), 'A kind of magic!'), i.createElement('p', null, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eaque at quae cupiditate aspernatur quibusdam! Distinctio quod non, harum dolorum earum molestias, beatae expedita aliquam dolorem asperiores nemo amet quaerat.')), i.createElement(Z.a.Column, null, i.createElement(u.a, {icon: !0}, i.createElement(K.a, {name: 'wizard'}), 'A kind of magic!'), i.createElement('p', null, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eaque at quae cupiditate aspernatur quibusdam! Distinctio quod non, harum dolorum earum molestias, beatae expedita aliquam dolorem asperiores nemo amet quaerat.'))))));
          }));
}}]);
// # sourceMappingURL=component---src-pages-index-tsx-c31296b7d77ed8bc24e3.js.map
