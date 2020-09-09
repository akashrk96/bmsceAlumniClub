;(window.webpackJsonp = window.webpackJsonp || []).push([
  [23],
  {
    '4VqO': function (e, t, o) {
      'use strict'
      var n = o('pneb'),
        i = o('ERkP'),
        a = o.n(i),
        r = o('l54f'),
        l = o('4Af6'),
        c = o('bHe8'),
        p = o('KFN4'),
        s = o('b4OD'),
        d = o('sOBS'),
        m = o('H3JQ'),
        f = o('j/s1'),
        g = f.d.section.withConfig({
          displayName: 'teamSectionstyle__TeamSectionWrapper',
          componentId: 'sftqbi-0'
        })([
          'padding:80px 0;overflow:hidden;@media (max-width:990px){padding:60px 0;}.team__member{.icon__wrapper{}}'
        ]),
        b = f.d.div.withConfig({
          displayName: 'teamSectionstyle__SocialLinks',
          componentId: 'sftqbi-1'
        })([
          'margin-top:12px;> button,a{margin:3px;cursor:pointer;width:30px;height:24px;line-height:20px;background-color:transparent;border-radius:3px;border:1px solid rgba(15,33,55,0.26);color:#0f2137;padding:1px 6px;font-size:13px;display:inline-block;transition:all 0.2s ease;&:hover,&:focus{outline:none;&.flaticon-facebook-logo{color:#ffffff;border-color:#3c5a99;background-color:#3c5a99;}&.flaticon-twitter-logo-silhouette{color:#ffffff;border-color:#1da1f2;background-color:#1da1f2;}&.flaticon-instagram{color:#ffffff;border-color:#fb3958;background-color:#fb3958;}&.flaticon-dribble-logo{color:#ffffff;border-color:#ea4c89;background-color:#ea4c89;}}}'
        ]),
        x = g,
        u = a.a.createElement,
        h = function (e) {
          var t = e.row,
            o = e.col,
            a = e.sectionHeader,
            f = e.sectionTitle,
            g = e.sectionSubTitle,
            h = e.memberName,
            w = e.designation,
            A = e.contentStyle
          return u(
            x,
            { id: 'teamSection' },
            u(
              m.a,
              null,
              u(
                r.a,
                a,
                u(l.a, Object(n.a)({ content: 'TEAM MEMBER' }, g)),
                u(
                  c.a,
                  Object(n.a)(
                    { content: 'Meet with team member behind scense' },
                    f
                  )
                )
              ),
              u(
                r.a,
                Object(n.a)({ className: 'row' }, t),
                d.a.teamMember.map(function (e, t) {
                  return u(
                    r.a,
                    Object(n.a)({ className: 'col' }, o, {
                      key: 'team_key-'.concat(t)
                    }),
                    u(s.a, {
                      id: 'member-'.concat(e.id),
                      className: 'team__member',
                      icon: u(p.a, {
                        src: e.thumbnail_url,
                        alt: 'Team member photo '.concat(e.id),
                        className: 'member__photo'
                      }),
                      contentStyle: A,
                      title: u(c.a, Object(n.a)({ content: e.name }, h)),
                      description: u(
                        i.Fragment,
                        null,
                        u(l.a, Object(n.a)({ content: e.designation }, w)),
                        u(
                          b,
                          null,
                          e.social_links.map(function (e, t) {
                            return u('a', {
                              href: e.url,
                              key: 'profile_id-'.concat(t),
                              className: e.icon,
                              'aria-label': e.icon
                            })
                          })
                        )
                      )
                    })
                  )
                })
              )
            )
          )
        }
      h.defaultProps = {
        sectionHeader: { mb: ['40px', '56px'] },
        sectionSubTitle: {
          as: 'span',
          display: 'block',
          textAlign: 'center',
          fontSize: '14px',
          letterSpacing: '0.15em',
          fontWeight: '700',
          color: '#10ac84',
          mb: '10px'
        },
        sectionTitle: {
          textAlign: 'center',
          fontSize: ['20px', '24px'],
          fontWeight: '400',
          color: '#0f2137',
          letterSpacing: '-0.025em',
          mb: '0'
        },
        row: { flexBox: !0, flexWrap: 'wrap', ml: '-15px', mr: '-15px' },
        col: {
          width: [1, 0.5, 1 / 3, 1 / 3],
          pl: '15px',
          pr: '15px',
          mb: '30px'
        },
        contentStyle: { textAlign: 'center', mt: '25px' },
        memberName: {
          fontSize: ['18px', '18px', '16px', '20px'],
          fontWeight: '400',
          color: '#0f2137',
          lineHeight: '1.5',
          mb: '8px',
          letterSpacing: '-0.020em'
        },
        designation: {
          fontSize: ['15px', '16px', '14px', '17px'],
          lineHeight: '1',
          color: 'rgba(15, 33, 55, 0.6)',
          mb: 0
        }
      }
      t.a = h
    },
    '4gB6': function (e, t, o) {
      'use strict'
      o.d(t, 'b', function () {
        return l
      }),
        o.d(t, 'a', function () {
          return c
        })
      var n = o('2ewA'),
        i = o('j/s1'),
        a = o('GkOb')
      function r () {
        var e = Object(n.a)([
          "\n  body {\n    font-family: 'Roboto', sans-serif;\n  }\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-family: 'Roboto', sans-serif;\n  }\n  section {\n    position: relative;\n  }\n  /* Drawer menu style */\n  .drawer {\n    .drawer-content-wrapper {\n      @media only screen and (max-width: 480px) {\n        width: 320px !important;\n      }\n      .reusecore-drawer__close {\n        position: absolute;\n        top: 20px;\n        right: 30px;\n        > button {\n          box-shadow: 0px 8px 38px 0px rgba(16, 172, 132, 0.5);\n          transition: all 0.3s ease;\n          svg {\n            width: 22px;\n            height: 22px;\n          }\n          &:hover {\n            opacity: 0.9;\n          }\n        }\n      }\n      .scrollspy__menu {\n        padding: 60px 71px;\n        max-height: 505px;\n        overflow-x: auto;\n        @media only screen and (max-width: 320px) {\n          max-height: 380px;\n        }\n        li {\n          margin: 35px 0;\n          &:first-child {\n            margin-top: 0;\n          }\n          &:last-child {\n            margin-bottom: 0;\n          }\n          a {\n            display: block;\n            color: #20201d;\n            font-size: 22px;\n            font-weight: 400;\n            transition: all 0.3s ease;\n            &:hover {\n              color: ",
          ';\n            }\n          }\n          &.is-current {\n            a {\n              color: ',
          ";\n              position: relative;\n              &:before {\n                content: '';\n                display: block;\n                width: 8px;\n                height: 8px;\n                border-radius: 50%;\n                background-color: ",
          ';\n                position: absolute;\n                top: calc(50% - 8px / 2);\n                left: -20px;\n              }\n            }\n          }\n        }\n      }\n      .copyright_section {\n        width: 100%;\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        padding-left: 71px;\n        padding-bottom: 56px;\n        background-color: ',
          ';\n      }\n    }\n  }\n  /* Modal default style */\n  button.modalCloseBtn {\n    color: ',
          ' !important;\n    &.alt {\n      background-color: ',
          ' !important;\n      box-shadow: 0 8px 38px rgba(16, 172, 132, 0.5) !important;\n    }\n  }\n  .reuseModalHolder {\n    border: 0 !important;\n    background-color: transparent !important;\n    &.search-modal,\n    &.video-modal {\n      background-color: rgba(255, 255, 255, 0.96) !important;\n      overflow-y: auto !important;\n      .innerRndComponent {\n        display: flex !important;\n        align-items: center !important;\n        justify-content: center !important;\n        iframe {\n          max-width: 700px !important;\n          max-height: 380px !important;\n          width: 100% !important;\n          height: 100% !important;\n          border-radius: 5px !important;\n        }\n      }\n    }\n    &.demo_switcher_modal {\n      /* border: 0 !important;\n      background-color: rgba(16, 30, 77, 0.8) !important;\n      .innerRndComponent {\n        border-radius: 8px !important;\n      } */\n    }\n    &.video-modal {\n      background-color: transparent !important;\n    }\n    .innerRndComponent {\n      padding-right: 0 !important;\n    }\n  }\n  .reuseModalCloseBtn {\n    cursor: pointer !important;\n  }\n\n  .reuseModalOverlay,\n  .reuseModalParentWrapper{\n    z-index: 99999!important;\n  }\n\n    .reuseModalHolder.login-modal{\n      @media (min-width: 768px) {\n        top: 0!important;\n        left: 0!important;\n        max-width: 100%!important;\n        max-height: 100%!important;\n      }\n    }\n\n    .reuseModalHolder.search-modal{\n      top: 0!important;\n      left: 0!important;\n      max-width: 100%!important;\n      max-height: 100%!important;\n      width: 100%;\n      height: 100%;\n    }\n\n    .reuseModalHolder.login-modal .innerRndComponent{\n      overflow-y: auto;\n    }\n'
        ])
        return (
          (r = function () {
            return e
          }),
          e
        )
      }
      var l = Object(i.b)(
          r(),
          Object(a.L)('colors.primary', '#10ac84'),
          Object(a.L)('colors.primary', '#10ac84'),
          Object(a.L)('colors.primary', '#10ac84'),
          Object(a.L)('colors.white', '#ffffff'),
          Object(a.L)('colors.white', '#ffffff'),
          Object(a.L)('colors.primary', '#10ac84')
        ),
        c = i.d.div.withConfig({
          displayName: 'agencystyle__AgencyWrapper',
          componentId: 'sc-1a7lsl8-0'
        })(
          [
            'overflow:hidden;.reusecore__navbar{width:100%;position:fixed;left:0;top:0;transition:all 0.3s ease;.reusecore__button{color:',
            ';font-size:18px;@media only screen and (max-width:480px){color:',
            ';}}.hamburgMenu__bar{margin-left:8px;> span{background-color:',
            ';@media only screen and (max-width:480px){background-color:',
            ';}}}}.sticky-nav-active{.reusecore__navbar{background-color:',
            ';box-shadow:0 0 20px rgba(0,0,0,0.1);padding:15px auto;.reusecore__button{color:',
            ';}.hamburgMenu__bar > span{background-color:',
            ';}}}',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            ''
          ],
          Object(a.L)('colors.white', '#ffffff'),
          Object(a.L)('colors.primary', '#10ac84'),
          Object(a.L)('colors.white', '#ffffff'),
          Object(a.L)('colors.primary', '#10ac84'),
          Object(a.L)('colors.white', '#ffffff'),
          Object(a.L)('colors.primary', '#10ac84'),
          Object(a.L)('colors.primary', '#10ac84'),
          a.O,
          a.v,
          a.m,
          a.J,
          a.l,
          a.i
        )
      ;(l.displayName = 'GlobalStyle'), (c.displayName = 'AgencyWrapper')
    },
    '9Zkp': function (e, t) {
      e.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAMAAADX9CSSAAAAhFBMVEX7Lo/////7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo9mO0NAAAAALHRSTlMAAAIFBgoNDg8QEhcaHyAhIyosNTdASUtSVVteX2dobm9xcnR1dnh6fH5/gGXWhEoAAADvSURBVCjPVdHLYoJAAEPRDNSqQCnvp1alIg73//+vC6Q4WZ5dEkmSFJ+eQx1IklmycGoB5jZy3b/zSp+8ew63z7ibAX4yb3XvAoWksLEA19xfPIPRlyQdqwngnhpJOkOpV3blCNgvSQlMu9Vl/OIGvaQeKm1uzBEeUgT24HgMg9RCI8c7qBXMzKHj4cwcqIZOjjfQGg0QO36wEBk9YO94Bb0x6mEoPjbfTZAYo9gCY/lfrISzMUZKfwGm6rhMPkK27OnnVwDbhJIKuHjr/l52Bpi77/0N8u1HKenXy+7+u0tRawFsalyXgnp4nuLl3z/9Tx6XLetSNAAAAABJRU5ErkJggg=='
    },
    '9rnr': function (e, t, o) {
      'use strict'
      var n = o('pneb'),
        i = o('ERkP'),
        a = o.n(i),
        r = o('l54f'),
        l = o('4Af6'),
        c = o('bHe8'),
        p = o('D7Vo'),
        s = o('b4OD'),
        d = o('H3JQ'),
        m = o('kO2b'),
        f = o('j/s1'),
        g = o('GkOb'),
        b = o('oHnV'),
        x = o.n(b),
        u = f.d.section.withConfig({
          displayName: 'bannerSectionstyle__BannerWrapper',
          componentId: 'ug7fag-0'
        })(
          [
            'padding-top:210px;padding-bottom:160px;background-image:url(',
            ');background-size:cover;background-position:center;background-repeat:no-repeat;overflow:hidden;@media only screen and (min-width:1367px){min-height:100vh;}@media (max-width:990px){padding-top:150px;padding-bottom:100px;}@media only screen and (max-width:480px){background:none;padding-top:130px;padding-bottom:60px;}.particle{position:absolute;width:50%;height:100%;top:0;left:0;overflow:hidden;@media (max-width:990px){display:none;}@media only screen and (max-width:480px){width:100%;}}.row{position:relative;z-index:1;}.button__wrapper{margin-top:40px;.reusecore__button{&:first-child{transition:all 0.3s ease;&:hover{box-shadow:0px 9px 20px -5px rgba(16,172,132,0.57);}}}}'
          ],
          x.a
        ),
        h = f.d.div.withConfig({
          displayName: 'bannerSectionstyle__DiscountLabel',
          componentId: 'ug7fag-1'
        })(
          [
            'display:inline-block;border-radius:4em;padding:7px 25px;box-shadow:0px 4px 50px 0px rgba(22,53,76,0.08);margin-bottom:30px;background-color:',
            ';@media (max-width:767px){padding:7px 10px;}'
          ],
          Object(g.L)('colors.white', '#ffffff')
        ),
        w = u,
        A = a.a.createElement,
        y = function (e) {
          var t = e.row,
            o = e.col,
            a = e.title,
            f = e.btnStyle,
            g = e.description,
            b = e.discountText,
            x = e.discountAmount,
            u = e.outlineBtnStyle
          return A(
            w,
            null,
            A(m.a, null),
            A(
              d.a,
              null,
              A(
                r.a,
                Object(n.a)({ className: 'row' }, t),
                A(
                  r.a,
                  Object(n.a)({ className: 'col' }, o),
                  A(
                    h,
                    null,
                    A(l.a, Object(n.a)({ content: '25% Discount' }, x)),
                    A(
                      l.a,
                      Object(n.a)(
                        { content: 'on every first project budget' },
                        b
                      )
                    )
                  ),
                  A(s.a, {
                    title: A(
                      c.a,
                      Object(n.a)(
                        { content: 'With Knowledge, Passion, Heart & Souls' },
                        a
                      )
                    ),
                    description: A(
                      l.a,
                      Object(n.a)(
                        {
                          content:
                            'Agencies around the world are moving to the digital agencies. So, It is high time to introduce your agency digitaly .'
                        },
                        g
                      )
                    ),
                    // button: A(function () {
                    //   return A(
                    //     i.Fragment,
                    //     null,
                    //     A(p.a, Object(n.a)({ 'a',title: 'LEARN MORE' }, f)),
                    //     A(
                    //       p.a,
                    //       Object(n.a)(
                    //         {
                    //           title: 'WATCH WORKS',
                    //           variant: 'textButton',
                    //           icon: A('i', { className: 'flaticon-next' })
                    //         },
                    //         u
                    //       )
                    //     )
                    //   )
                    // }, null)
                  })
                )
              )
            )
          )
        }
      y.defaultProps = {
        row: {
          flexBox: !0,
          flexWrap: 'wrap',
          ml: '-15px',
          mr: '-15px',
          alignItems: 'center'
        },
        col: { pr: '15px', pl: '15px', width: ['100%', '70%', '60%', '50%'] },
        title: {
          fontSize: ['26px', '34px', '42px', '55px'],
          fontWeight: '300',
          color: '#0f2137',
          letterSpacing: '-0.025em',
          mb: ['20px', '25px'],
          lineHeight: '1.31'
        },
        description: {
          fontSize: '16px',
          color: '#343d48cc',
          lineHeight: '2.1',
          mb: '0'
        },
        btnStyle: {
          minWidth: ['120px', '156px'],
          fontSize: '14px',
          fontWeight: '500'
        },
        outlineBtnStyle: {
          minWidth: ['130px', '156px'],
          fontSize: '14px',
          fontWeight: '500',
          color: '#0f2137',
          p: '5px 10px'
        },
        discountAmount: {
          fontSize: '14px',
          color: '#10AC84',
          mb: 0,
          as: 'span',
          mr: '0.4em'
        },
        discountText: { fontSize: '14px', color: '#0f2137', mb: 0, as: 'span' }
      }
      t.a = y
    },
    Aw9B: function (e, t) {
      e.exports =
        '/_next/static/images/blog-img3-a0834b29c2f9140b39f88d2a983cc18c.png'
    },
    Bsug: function (e, t, o) {
      'use strict'
      var n = o('pneb'),
        i = o('ERkP'),
        a = o.n(i),
        r = o('l54f'),
        l = o('4Af6'),
        c = o('bHe8'),
        p = o('D7Vo'),
        s = o('KFN4'),
        d = o('sOBS'),
        m = o('H3JQ'),
        f = o('mnHf'),
        g = o('9NE4'),
        b = o('j/s1'),
        x = o('GkOb'),
        u = b.d.section.withConfig({
          displayName: 'testimonialSectionstyle__TestimonialSectionWrapper',
          componentId: 'vy0g42-0'
        })(
          [
            'margin:80px 0 0;background-color:#f6f7fb;background:linear-gradient(transparent 50%,#f6f7fb);overflow:hidden;@media (max-width:990px){margin:0px 0 0;}.glide{.glide__slides{align-items:flex-end;}max-width:999px;margin-left:auto;.glide__slide{display:flex;align-items:center;justify-content:flex-end;@media only screen and (max-width:991px){padding-top:30px;}}.glide__controls{.reusecore__button{&:hover{color:',
            ';}}}}.glide__controls{@media (max-width:767px){width:100%;left:0;text-align:center;}}'
          ],
          Object(x.L)('colors.quoteText', '#343d48')
        ),
        h = b.d.div.withConfig({
          displayName: 'testimonialSectionstyle__TextWrapper',
          componentId: 'vy0g42-1'
        })([
          'max-width:504px;margin-right:auto;align-self:flex-end;margin-bottom:120px;position:relative;padding-left:12px;@media (max-width:767px){text-align:center;}@media (max-width:990px) and (min-width:768px){max-width:300px;}i{color:rgba(52,61,72,0.07);font-size:70px;position:absolute;top:-40px;left:0;z-index:-1;}'
        ]),
        w = b.d.div.withConfig({
          displayName: 'testimonialSectionstyle__ImageWrapper',
          componentId: 'vy0g42-2'
        })([
          'flex-grow:1;@media only screen and (max-width:767px){display:none;}'
        ]),
        A = u,
        y = a.a.createElement,
        v = function (e) {
          var t = e.sectionHeader,
            o = e.sectionTitle,
            a = e.sectionSubTitle,
            b = e.btnWrapperStyle,
            x = e.commentStyle,
            u = e.nameStyle,
            v = e.btnStyle,
            S = e.designationStyle
          return y(
            A,
            { id: 'testimonialSection' },
            y(
              m.a,
              null,
              y(
                r.a,
                t,
                y(l.a, Object(n.a)({ content: 'TESTIMONIALS' }, a)),
                y(
                  c.a,
                  Object(n.a)({ content: 'What our community members has to say about us' }, o)
                )
              ),
              y(
                f.a,
                {
                  options: {
                    type: 'carousel',
                    autoplay: 5e3,
                    perView: 1,
                    animationDuration: 700
                  },
                  buttonWrapperStyle: b,
                  nextButton: y(
                    p.a,
                    Object(n.a)(
                      {
                        icon: y('i', { className: 'flaticon-next' }),
                        'aria-label': 'Next',
                        variant: 'textButton'
                      },
                      v
                    )
                  ),
                  prevButton: y(
                    p.a,
                    Object(n.a)(
                      {
                        icon: y('i', { className: 'flaticon-left-arrow' }),
                        'aria-label': 'Prev',
                        variant: 'textButton'
                      },
                      v
                    )
                  )
                },
                y(
                  i.Fragment,
                  null,
                  d.a.testimonial.map(function (e, t) {
                    return y(
                      g.a,
                      { key: t },
                      y(
                        i.Fragment,
                        null,
                        y(
                          h,
                          null,
                          y('i', { className: 'flaticon-quotes' }),
                          y(l.a, Object(n.a)({ content: e.comment }, x)),
                          y(c.a, Object(n.a)({ content: e.name }, u)),
                          y(c.a, Object(n.a)({ content: e.designation }, S))
                        ),
                        y(
                          w,
                          null,
                          y(s.a, { src: e.avatar_url, alt: 'Client Image' })
                        )
                      )
                    )
                  })
                )
              )
            )
          )
        }
      v.defaultProps = {
        sectionHeader: { pt: '30px', mb: '56px' },
        sectionSubTitle: {
          as: 'span',
          display: 'block',
          textAlign: 'center',
          fontSize: '14px',
          letterSpacing: '0.15em',
          fontWeight: '700',
          color: '#10ac84',
          mb: '10px'
        },
        sectionTitle: {
          textAlign: 'center',
          fontSize: ['20px', '24px'],
          fontWeight: '400',
          color: '#0f2137',
          letterSpacing: '-0.025em',
          mb: '0'
        },
        commentStyle: {
          color: '#343d48',
          fontWeight: '300',
          fontSize: ['20px', '24px'],
          lineHeight: '1.67',
          mb: '47px'
        },
        nameStyle: {
          as: 'h3',
          color: '#343d48',
          fontWeight: '500',
          fontSize: '18px',
          lineHeight: '30px',
          mb: 0
        },
        designationStyle: {
          as: 'h5',
          color: 'rgba(52, 61, 72, 0.8)',
          fontWeight: '400',
          fontSize: '16px',
          lineHeight: '30px',
          mb: 0
        },
        btnWrapperStyle: { position: 'absolute', bottom: '62px', left: '12px' },
        btnStyle: {
          minWidth: 'auto',
          minHeight: 'auto',
          mr: '13px',
          fontSize: '16px',
          color: '#343d484d'
        }
      }
      t.a = v
    },
    CzWp: function (e, t) {
      e.exports =
        '/_next/static/images/menny-c94efb92112692376083326c7da99e1e.png'
    },
    DEAh: function (e, t) {
      e.exports =
        '/_next/static/images/logo-bfece249803f3d440ef27a70c60f54f1.png'
    },
    Dlp7: function (e, t, o) {
      'use strict'
      var n = o('ysci'),
        i = o.n(n)
      var a = o('IVrg'),
        r = o.n(a),
        l = o('5A7e'),
        c = o.n(l)
      function p (e, t) {
        return (
          (function (e) {
            if (i()(e)) return e
          })(e) ||
          (function (e, t) {
            if (
              c()(Object(e)) ||
              '[object Arguments]' === Object.prototype.toString.call(e)
            ) {
              var o = [],
                n = !0,
                i = !1,
                a = void 0
              try {
                for (
                  var l, p = r()(e);
                  !(n = (l = p.next()).done) &&
                  (o.push(l.value), !t || o.length !== t);
                  n = !0
                );
              } catch (s) {
                ;(i = !0), (a = s)
              } finally {
                try {
                  n || null == p.return || p.return()
                } finally {
                  if (i) throw a
                }
              }
              return o
            }
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance'
            )
          })()
        )
      }
      o.d(t, 'a', function () {
        return p
      })
    },
    EW4T: function (e, t, o) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.plus = void 0)
      t.plus = {
        viewBox: '0 0 20 20',
        children: [
          {
            name: 'path',
            attribs: {
              d:
                'M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601\r\n\tC4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399\r\n\tC15.952,9,16,9.447,16,10z'
            }
          }
        ]
      }
    },
    EeN0: function (e, t, o) {
      'use strict'
      var n = o('pneb'),
        i = o('ERkP'),
        a = o.n(i),
        r = o('l54f'),
        l = o('4Af6'),
        c = o('bHe8'),
        p = o('E+gT'),
        s = o('KFN4'),
        d = o('b4OD'),
        m = o('sOBS'),
        f = o('H3JQ'),
        g = o('j/s1').d.section.withConfig({
          displayName: 'blogSectionstyle__BlogSectionWrapper',
          componentId: 'sc-17t0oh5-0'
        })([
          'padding:80px 0;overflow:hidden;@media (max-width:990px){padding:60px 0;}@media (max-width:767px){padding:40px 0;}.feature__block{&.blog__post{border-radius:5px;overflow:hidden;position:relative;width:calc(100% / 3 - 24px);height:450px;margin:0 12px;transition:all 0.3s ease;@media only screen and (max-width:1200px){height:400px;}@media only screen and (max-width:991px){width:calc(100% / 2 - 24px);margin-bottom:24px;&:first-child{width:100%;}}@media only screen and (max-width:767px){width:calc(100% - 24px);}.icon__wrapper{position:absolute;bottom:0;left:0;width:100%;height:100%;&.gatsby-image-wrapper{height:100%;}img{width:100%;height:100%;object-fit:cover;}}.content__wrapper{opacity:0;visibility:hidden;position:absolute;bottom:0;left:0;width:100%;height:100%;padding:25px;display:flex;flex-direction:column;justify-content:flex-end;background-color:rgba(0,0,0,0.9);background:linear-gradient(transparent,rgba(0,0,0,0.5));transition:all 0.3s ease;a{transform:translateY(50px);transition:all 0.3s ease;}p{transform:translateY(50px);transition:all 0.35s ease;}}&:hover{.content__wrapper{opacity:1;visibility:visible;a{transform:translateY(0);}p{transform:translateY(0);}}}&:first-child{.content__wrapper{@media (max-width:990px){opacity:1;visibility:visible;a{transform:translateY(0);}p{transform:translateY(0);}}}}}}'
        ]),
        b = a.a.createElement,
        x = function (e) {
          var t = e.row,
            o = e.sectionHeader,
            i = e.sectionTitle,
            a = e.sectionSubTitle,
            x = e.blogTitle,
            u = e.blogMeta
          return b(
            g,
            { id: 'blogSection' },
            b(
              f.a,
              null,
              b(
                r.a,
                o,
                b(l.a, Object(n.a)({ content: 'EVENTS COMING UP' }, a)),
                b(
                  c.a,
                  Object(n.a)(
                    { content: 'Stay tuned' },
                    i
                  )
                )
              ),
              b(
                r.a,
                Object(n.a)({ className: 'row' }, t),
                m.a.blog.map(function (e, t) {
                  return b(d.a, {
                    key: 'post_key-'.concat(t),
                    id: 'post_id-'.concat(e.id),
                    className: 'blog__post',
                    icon: b(s.a, {
                      src: e.thumbnail_url,
                      alt: 'Blog Image '.concat(e.id),
                      className: 'blog__image'
                    }),
                    title: b(
                      p.a,
                      Object(n.a)({ href: e.postLink }, x),
                      e.title
                    ),
                    description: b(l.a, Object(n.a)({ content: e.date }, u))
                  })
                })
              )
            )
          )
        }
      x.defaultProps = {
        sectionHeader: { mb: ['40px', '56px'] },
        sectionSubTitle: {
          as: 'span',
          display: 'block',
          textAlign: 'center',
          fontSize: '14px',
          letterSpacing: '0.15em',
          fontWeight: '700',
          color: '#10ac84',
          mb: '10px'
        },
        sectionTitle: {
          textAlign: 'center',
          fontSize: ['20px', '24px'],
          fontWeight: '400',
          color: '#0f2137',
          letterSpacing: '-0.025em',
          mb: '0'
        },
        row: { flexBox: !0, flexWrap: 'wrap', ml: '-12px', mr: '-12px' },
        blogTitle: {
          fontSize: ['20px', '24px'],
          fontWeight: '400',
          color: '#ffffff',
          lineHeight: '1.5',
          mb: '10px',
          letterSpacing: '-0.020em'
        },
        blogMeta: {
          fontSize: '16px',
          lineHeight: '1',
          color: 'rgba(255, 255, 255, 0.5)',
          mb: 0
        }
      }
      t.a = x
    },
    GFhP: function (e, t) {
      e.exports =
        '/_next/static/images/denny-46992fa2603b3da7082eca689dcb1423.png'
    },
    HZTQ: function (e, t) {
      e.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAbCAYAAABvCO8sAAACW0lEQVRIibWWPWgUQRTHf6uXRAwSPaM4YBFOMWcT41cq104sLLRVrLSTNNoE1CCBoJWVIIiNhY2NCLZWjlZGRRQuCeK3LIgOnkcIAbmzmFnu3Xq7c3uXPFh485+Z92PnzZuZYMfTX2TYIDDp/DvA7+SAKCxmzf/PCp7+E8AR5+8ELgO1XISErfP0HxT+CHAN2LhWwE1AOaGNAleAgbUAjov+GtBw/hgwhT8duYFyOR8B90T7MHDJMz8XMEgAXwIPgQdCC4FJpU2wGsASsNn5Bvjg/PvAYzHuGHB+NYCHhP+aZv4A7gJPRPuk0uZMr8ADwp9L9DWAW8AzoZ1W2pzqFijLoQ68aTOmDtzE5ja2c0qb490A9wl9nvST5S9wA3jn2gFwQWlzNC8wmb8sWwFmgUUR76LSZqJTYEBr/l54gERhcQmYAT45qQBMKW3GOgGWgC3Or9IsBx/0D/acjZzUD0wrbUZ9QFnsc7SWgw9qgKvATydtAGaUNiOdAl91ChPQHw5addIgMKu0Ue2AyXLwbZg06HdgGlhy0hBwXWkznATKcligh4s2CosfsTldcdKwgw7JK0aWQ+7lBFDabMeuUhnYS+sVpoCzsRAA+0WnPEHSrA/YrbSJg5dp7vA0q8XAEhC/hqrA+zaDt4rAZTenzwOoA1+BCvAWeB4Dk3ffemCXC7zHgbZ5goPdKPPiW4jC4rIc0A44jr1o+z3BG8A3F7iCPd6+RGExs3YL2FqRj6W0h+Yydvcuij+odfMuHcBumqRFInAF+IzNSU9WwD4hbgMTLmgMqWbM69r+AexPlS0Ld8GYAAAAAElFTkSuQmCC'
    },
    I6BJ: function (e, t) {
      e.exports =
        '/_next/static/images/group-image3-7e5651bcaa7a1620152ded2888426247.jpg'
    },
    Jcsy: function (e, t, o) {
      'use strict'
      var n = o('pneb'),
        i = o('ERkP'),
        a = o.n(i),
        r = o('MFEH'),
        l = o.n(r),
        c = o('l54f'),
        p = o('4Af6'),
        s = o('bHe8'),
        d = o('rZdf'),
        m = o('KFN4'),
        f = o('b4OD'),
        g = o('H3JQ'),
        b = o('j/s1').d.section.withConfig({
          displayName: 'qualitySectionstyle__QualitySectionWrapper',
          componentId: 'yvxz9u-0'
        })([
          "padding:110px 0 60px;min-height:600px;overflow:hidden;@media (max-width:990px){padding:0 0 30px;}@media only screen and (min-width:1366px){min-height:895px;}.info-sec-container{width:100%;max-width:100%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:-1;@media only screen and (max-width:991px){display:none;}}.feature__block{margin:15px 0;.icon__wrapper{flex-shrink:0;position:relative;background:linear-gradient( -60deg,rgba(241,39,17,0.8),rgba(245,175,25,0.8) );.flaticon-flask{&:before{margin-left:6px;}}&:before,&:after{content:'';width:24px;height:100%;position:absolute;}&:before{transform:rotate(45deg);background-color:rgba(255,255,255,0.15);}&:after{transform:rotate(-45deg);background-color:rgba(0,0,0,0.05);}}}.row{> .col{&:nth-child(2){.feature__block{.icon__wrapper{background:linear-gradient( -60deg,rgba(50,207,167,0.9),rgba(150,201,61,0.9) );}}}&:nth-child(3){.feature__block{.icon__wrapper{background:linear-gradient( -60deg,rgba(236,0,140,0.85),rgba(255,103,103,0.85) );}}}&:nth-child(4){.feature__block{.icon__wrapper{background-color:linear-gradient( -60deg,rgba(47,128,237,0.85),rgba(86,204,242,0.85) );}}}&:nth-child(5){.feature__block{.icon__wrapper{background:linear-gradient( -60deg,rgba(0,57,115,0.85),rgba(299,299,199,0.85) );}}}&:last-child{.feature__block{.icon__wrapper{background:linear-gradient( -60deg,rgba(110,72,170,0.85),rgba(192,91,210,0.85) );}}}}}"
        ]),
        x = o('sOBS'),
        u = o('m/a5'),
        h = o.n(u),
        w = a.a.createElement,
        A = function (e) {
          var t = e.row,
            o = e.col,
            i = e.title,
            a = e.featureCol,
            r = e.description,
            u = e.textArea,
            A = e.imageArea,
            y = e.imageAreaRow,
            v = e.imageWrapper,
            S = e.featureTitle,
            k = e.featureDescription,
            O = e.iconStyle
          return w(
            b,
            { id: 'qualitySection' },
            w(
              g.a,
              null,
              w(
                c.a,
                Object(n.a)({ className: 'row' }, t),
                w(
                  c.a,
                  Object(n.a)({ className: 'col' }, o, u),
                  w(f.a, {
                    title: w(
                      s.a,
                      Object(n.a)(
                        {
                          content:
                            'How we are different?'
                        },
                        i
                      )
                    ),
                    description: w(
                      p.a,
                      Object(n.a)(
                        {
                          content:
                            "Customers are our first priority and we provide some exceptional features that our customer prefers . That's why our customers never leave us ."
                        },
                        r
                      )
                    )
                  })
                )
              ),
              w(
                c.a,
                Object(n.a)({ className: 'row' }, t, u),
                x.a.qualityFeature.map(function (e, t) {
                  return w(
                    c.a,
                    Object(n.a)({ className: 'col' }, a, {
                      key: 'quality_feature-'.concat(t)
                    }),
                    w(f.a, {
                      icon: w('i', { className: e.icon }),
                      iconPosition: 'left',
                      iconStyle: O,
                      title: w(s.a, Object(n.a)({ content: e.title }, S)),
                      description: w(
                        p.a,
                        Object(n.a)({ content: e.description }, k)
                      )
                    })
                  )
                })
              )
            ),
            w(
              g.a,
              { fluid: !0, noGutter: !0, className: 'info-sec-container' },
              w(
                c.a,
                Object(n.a)({ className: 'row' }, t, y),
                w(
                  c.a,
                  Object(n.a)({ className: 'col' }, o, A),
                  w(
                    d.a,
                    v,
                    w(
                      l.a,
                      { right: !0, delay: 90 },
                      w(m.a, { src: h.a, alt: 'Feature Image' })
                    )
                  )
                )
              )
            )
          )
        }
      A.defaultProps = {
        row: { flexBox: !0, flexWrap: 'wrap', ml: '-15px', mr: '-15px' },
        imageAreaRow: { flexDirection: 'row-reverse' },
        col: { pr: '15px', pl: '15px' },
        featureCol: { width: [1, 1, 0.5], pr: '15px', pl: '15px' },
        textArea: { width: [1, '100%', '100%', '70%', '64%'] },
        imageArea: {
          width: [1, '100%', '100%', '30%', '38%'],
          flexBox: !0,
          flexDirection: 'row-reverse'
        },
        imageWrapper: { boxShadow: 'none' },
        title: {
          fontSize: ['26px', '26px', '32px', '40px'],
          lineHeight: '1.5',
          fontWeight: '300',
          color: '#0f2137',
          letterSpacing: '-0.025em',
          mb: '20px'
        },
        description: {
          fontSize: '16px',
          color: '#343d48cc',
          lineHeight: '2.1',
          mb: '33px'
        },
        iconStyle: {
          width: '54px',
          height: '54px',
          borderRadius: '50%',
          bg: '#93d26e',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          color: '#ffffff',
          overflow: 'hidden',
          mt: '6px',
          mr: '22px',
          flexShrink: 0
        },
        featureTitle: {
          fontSize: ['18px', '20px'],
          fontWeight: '400',
          color: '#0f2137',
          lineHeight: '1.5',
          mb: '8px',
          letterSpacing: '-0.020em'
        },
        featureDescription: {
          fontSize: '15px',
          lineHeight: '1.84',
          color: '#343d48cc'
        }
      }
      t.a = A
    },
    M5Cx: function (e, t, o) {
      'use strict'
      var n = o('pneb'),
        i = o('ERkP'),
        a = o.n(i),
        r = o('VU+f'),
        l = o('l54f'),
        c = o('4Af6'),
        p = o('bHe8'),
        s = o('D7Vo'),
        d = o('KFN4'),
        m = o('H3JQ'),
        f = o('j/s1'),
        g = o('GkOb'),
        b = f.d.section.withConfig({
          displayName: 'videoSectionstyle__VideoSectionWrapper',
          componentId: 'sc-8qqp08-0'
        })(
          [
            'padding:80px 0;overflow:hidden;@media (max-width:990px){padding:60px 0;}@media (max-width:767px){padding:30px 0 60px 0;}.figure{display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;img{border-radius:4px;}.fig__caption{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;z-index:2;.reusecore__button{.btn-icon{background-color:',
            ';line-height:0.4;}}}}'
          ],
          Object(g.L)('colors.white', '#ffffff')
        ),
        x = o('vSXM'),
        u = o.n(x),
        h = a.a.createElement,
        w = function () {
          return h('iframe', {
            title: 'NammaUtsava',
            width: '560',
            height: '315',
            src:
              'https://www.youtube.com/embed/SA5BcZ852Zo?controls=0&showinfo=0',
            frameBorder: '0',
            allow:
              'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
            allowFullScreen: !0
          })
        },
        A = function () {
          return h(s.a, {
            className: 'modalCloseBtn',
            variant: 'fab',
            onClick: function () {
              return Object(r.b)()
            },
            icon: h('i', { className: 'flaticon-plus-symbol' })
          })
        },
        y = function (e) {
          var t = e.sectionHeader,
            o = e.sectionTitle,
            i = e.buttonStyle,
            a = e.sectionSubTitle
          return h(
            b,
            { id: 'videoSection' },
            h(
              m.a,
              null,
              h(
                l.a,
                t,
                h(c.a, Object(n.a)({ content: 'Miss the Utsavaaaa?' }, a)),
                h(
                  p.a,
                  Object(n.a)({ content: 'Take a look how we enjoy work' }, o)
                )
              ),
              h(
                l.a,
                { className: 'figure' },
                h(d.a, { src: u.a, alt: 'Video Preview Image' }),
                h(
                  l.a,
                  { className: 'fig__caption' },
                  h(
                    s.a,
                    Object(n.a)({}, i, {
                      icon: h('i', { className: 'flaticon-youtube' }),
                      onClick: function () {
                        Object(r.c)({
                          config: {
                            className: 'video-modal',
                            disableDragging: !0,
                            default: {
                              width: '100%',
                              height: '100%',
                              x: 0,
                              y: 0
                            }
                          },
                          component: w,
                          componentProps: {},
                          closeComponent: A,
                          closeOnClickOutside: !1
                        })
                      },
                      'aria-label': 'Play'
                    })
                  )
                )
              )
            )
          )
        }
      y.defaultProps = {
        sectionHeader: { mb: ['40px', '56px'] },
        sectionSubTitle: {
          as: 'span',
          display: 'block',
          textAlign: 'center',
          fontSize: '14px',
          letterSpacing: '0.15em',
          fontWeight: '700',
          color: '#10ac84',
          mb: '10px'
        },
        sectionTitle: {
          textAlign: 'center',
          fontSize: ['20px', '24px'],
          fontWeight: '400',
          color: '#0f2137',
          letterSpacing: '-0.025em',
          mb: '0'
        },
        buttonStyle: {
          variant: 'textButton',
          p: 0,
          color: '#ec4444',
          fontSize: '71px'
        }
      }
      t.a = y
    },
    MvUT: function (e, t) {
      e.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAflBMVEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEV6T+lUAAAAKXRSTlMAAQYHCwwoKS4vMDE4P0JDREZHj5GSk5maor/H19jb3N3k5fDy9Pj5+lX9F+4AAAChSURBVBgZPcELVsIwFEXRG6ARaqpUsBSi/Br7PPOfoF1ZMXsreztdza6nd/3zF4qLV9YlqtRp4SewY2iaMBhMXnIRnq/K2idEpz3MrYrdDHuNcFB1gFE3CKoC3GSwUrUGU4KVqgZM3xBUBbjrDJ+qBjjrA+adiu0MvVyER6usfUB0kp/AjmGzCYPB9KJFl6hSp8xHiuhVuH68//58jb3T4g/whBZlWtKt6AAAAABJRU5ErkJggg=='
    },
    OdzX: function (e, t) {
      e.exports =
        '/_next/static/images/footer-bg-6c398a2ed748b326cdce58b311f7b91b.png'
    },
    PvyY: function (e, t, o) {
      'use strict'
      var n = o('pneb'),
        i = o('ERkP'),
        a = o.n(i),
        r = o('jvFD'),
        l = o.n(r),
        c = o('iN3x'),
        p = o.n(c),
        s = o('l54f'),
        d = o('rZdf'),
        m = o('4Af6'),
        f = o('bHe8'),
        g = o('D7Vo'),
        b = o('b4OD'),
        x = o('H3JQ'),
        u = o('j/s1'),
        h = o('GkOb'),
        w = u.d.section.withConfig({
          displayName: 'workHistorystyle__WorkHistoryWrapper',
          componentId: 'sc-1nzs21q-0'
        })([
          'padding:70px 0 80px;overflow:hidden;@media (max-width:990px){padding:50px 0 60px 0;}.feature__block{padding-right:132px;@media only screen and (max-width:1200px){padding-right:32px;}@media only screen and (max-width:991px){padding-right:0;margin-bottom:0;}@media only screen and (max-width:767px){padding-right:0;margin-bottom:40px;}.reusecore__button{transition:all 0.3s ease;&:hover{box-shadow:0px 9px 20px -5px rgba(16,172,132,0.57);}}}'
        ]),
        A = u.d.div.withConfig({
          displayName: 'workHistorystyle__CounterUpArea',
          componentId: 'sc-1nzs21q-1'
        })(
          [
            'display:flex;flex-wrap:wrap;padding-left:20px;@media only screen and (max-width:1200px){padding-left:0;}@media only screen and (max-width:991px){padding-right:0;margin-left:-25px;}@media only screen and (max-width:480px){margin-left:0;}.card{width:calc(50% - 25px);margin-left:25px;margin-bottom:27px;display:flex;flex-direction:column;justify-content:center;align-items:center;transition:box-shadow 0.3s ease-in-out;@media (max-width:767px){width:calc(50% - 13px);&:nth-child(2n + 1){margin-left:0;}}&:hover{box-shadow:0px 16px 35px 0px rgba(16,66,97,0.1);}h3{font-size:60px;font-weight:300;margin:0 0 20px;color:',
            ';@media (max-width:990px){font-size:40px;}@media (max-width:767px){margin-bottom:10px;}}p{color:',
            ';font-size:16px;font-weight:500;margin-bottom:7px;@media (max-width:990px){font-size:14px;text-align:center;}}a{color:',
            ';font-weight:500;font-size:15px;text-decoration:underline;margin-top:7px;@media (max-width:1190px){font-size:14px;text-align:center;}}&:nth-child(even){position:relative;top:22px;}&:last-child{box-shadow:none;border-radius:5px;border:2px dashed ',
            ';}}'
          ],
          Object(h.L)('colors.headingColor', '#0f2137'),
          Object(h.L)('colors.headingColor', '#0f2137'),
          Object(h.L)('colors.linkColor', '#2b9eff'),
          Object(h.L)('colors.inactiveIcon', '#ebebeb')
        ),
        y = w,
        v = a.a.createElement,
        S = function (e) {
          var t = e.row,
            o = e.col,
            i = e.cardStyle,
            a = e.title,
            r = e.description,
            c = e.btnStyle
          return v(
            y,
            { id: 'workHistorySection' },
            v(
              x.a,
              null,
              v(
                s.a,
                Object(n.a)({ className: 'row' }, t),
                v(
                  s.a,
                  Object(n.a)({ className: 'col' }, o),
                  v(b.a, {
                    title: v(
                      f.a,
                      Object(n.a)(
                        {
                          content:
                            'Working With Knowledge, Passion, Heart & Soul '
                        },
                        a
                      )
                    ),
                    description: v(
                      m.a,
                      Object(n.a)(
                        {
                          content:
                            'We have worked with some leading agencies around the globe and their appreciation is our main strength .'
                        },
                        r
                      )
                    ),
                    button: v(
                      d.a,
                      Object(n.a)({ className: 'card' }, i),
                      v(l.a, { href: 'https://www.linkedin.com/groups/13910153/' }, v('a', null, 'Join the community'))
                    )
                  })
                ),
                v(
                  s.a,
                  Object(n.a)({ className: 'col' }, o),
                  v(
                    A,
                    null,
                    v(
                      d.a,
                      Object(n.a)({ className: 'card' }, i),
                      v('h3', null, v(p.a, { start: 0, end: 1000 }), '+'),
                      v(m.a, { content: 'In the Community already' })
                    ),
                    v(
                      d.a,
                      Object(n.a)({ className: 'card' }, i),
                      v(
                        'h3',
                        null,
                        v(p.a, { start: 0, end: 100, duration: 5 })
                      ),
                      v(m.a, { content: 'Happy Customers' })
                    ),
                    v(
                      d.a,
                      Object(n.a)({ className: 'card' }, i),
                      v(
                        'h3',
                        null,
                        v(p.a, { start: 0, end: 20, duration: 5 }),
                        '+'
                      ),
                      v(m.a, { content: '' })
                    ),
                    v(
                      d.a,
                      Object(n.a)({ className: 'card' }, i),
                      v(m.a, { content: '& Much More' }),
                      v(l.a, { href: 'https://www.linkedin.com/groups/13910153/' }, v('a', null, 'Join the community'))
                    )
                  )
                )
              )
            )
          )
        }
      S.defaultProps = {
        row: { flexBox: !0, flexWrap: 'wrap', ml: '-15px', mr: '-15px' },
        col: {
          pr: '15px',
          pl: '15px',
          width: [1, 1, 0.5, 0.5],
          flexBox: !0,
          alignSelf: 'center'
        },
        cardStyle: {
          p: ['20px 20px', '30px 20px', '30px 20px', '53px 40px'],
          borderRadius: '10px',
          boxShadow: '0px 8px 20px 0px rgba(16, 66, 97, 0.07)'
        },
        title: {
          fontSize: ['26px', '26px', '30px', '40px'],
          lineHeight: '1.5',
          fontWeight: '300',
          color: '#0f2137',
          letterSpacing: '-0.025em',
          mb: '20px'
        },
        description: {
          fontSize: '16px',
          color: '#343d48cc',
          lineHeight: '1.75',
          mb: '33px'
        },
        btnStyle: { minWidth: '156px', fontSize: '14px', fontWeight: '500' }
      }
      t.a = S
    },
    SbaX: function (e, t) {
      e.exports =
        '/_next/static/images/blog-img2-62708dd8552d7f6198d8e41933e07555.png'
    },
    Uag0: function (e, t, o) {},
    'Vi/G': function (e, t) {
      e.exports =
        '/_next/static/images/member-2-131ec49dccd224227821049fa1e47a37.jpg'
    },
    WCjH: function (e, t, o) {
      'use strict'
      var n = o('ERkP'),
        i = o.n(n),
        a = o('VU+f'),
        r = o('HqwP'),
        l = o('KfK3'),
        c = o('D7Vo'),
        p = o('cIfr'),
        s = o('dB7M'),
        d = o('8obO'),
        m = o('j/s1'),
        f = m.d.div.withConfig({
          displayName: 'navbarstyle__Container',
          componentId: 'sc-4u9tia-0'
        })([
          'margin-left:auto;margin-right:auto;padding-left:25px;padding-right:25px;display:flex;width:100%;align-items:center;justify-content:space-between;@media (min-width:320px){padding-left:25px;padding-right:23px;}@media (min-width:768px){max-width:750px;}@media (min-width:992px){max-width:970px;}@media (min-width:1200px){max-width:1170px;}'
        ]),
        g = o('pneb'),
        b = o('4Af6'),
        x = o('bHe8'),
        u = o('olOc'),
        h = o('2xV5'),
        w = o('cnyG'),
        A = m.d.div.withConfig({
          displayName: 'searchPanelstyle__SearchPanelWrapper',
          componentId: 'd73o7r-0'
        })([
          'max-width:600px;width:100%;margin:0 auto;padding:0 15px;.reusecore__input{.field-wrapper{input{border:0;border-radius:5px;height:70px;box-shadow:0 3px 20px rgba(35,49,90,0.08);color:#20201d;font-size:16px;font-weight:400;padding-left:39px;padding-right:80px;&:placholder{color:rgba(32,32,29,0.5);}}.input-icon{width:80px;height:100%;> div{svg{width:28px;height:28px;path{fill:#20201d;}}}}}}'
        ]),
        y = i.a.createElement,
        v = function (e) {
          var t = e.titleStyle,
            o = e.hintStyle
          return y(
            A,
            null,
            y(x.a, Object(g.a)({ content: 'Search Panel' }, t)),
            y(u.a, {
              inputType: 'email',
              iconPosition: 'right',
              placeholder: 'Type what you want',
              icon: y(h.Icon, { icon: w.iosSearchStrong })
            }),
            y(
              b.a,
              Object(g.a)(
                {
                  content:
                    'Example: \u201cApp Template\u201d \u201cApplication\u201d'
                },
                o
              )
            )
          )
        }
      v.defaultProps = {
        titleStyle: {
          fontSize: ['24px', '30px'],
          fontWeight: '400',
          color: '#20201D',
          letterSpacing: '-0.025em',
          mb: '30px'
        },
        hintStyle: {
          fontSize: '15px',
          fontWeight: '400',
          color: 'rgba(32, 32, 29, 0.55)',
          letterSpacing: '-0.025em',
          mt: '17px',
          ml: ['15px', '30px'],
          mb: '0'
        }
      }
      var S = v,
        k = o('V8Cu'),
        O = o('koHG'),
        _ = o.n(O),
        j = o('wjXj'),
        C = o.n(j),
        E = o('l54f'),
        B = o('iynF'),
        W = o('KFN4'),
        N = o('GkOb'),
        H = m.d.div.withConfig({
          displayName: 'loginModalstyle__LoginModalWrapper',
          componentId: 'ekhpfv-0'
        })(
          [
            'width:80%;margin:71px auto;border-radius:5px;overflow:hidden;background-color:',
            ';@media only screen and (min-width:1201px){max-width:1170px;width:100%;}@media only screen and (max-width:667px){width:100%;}.col{position:relative;.patternImage{position:absolute;width:100%;height:100%;object-fit:cover;}@media only screen and (max-width:991px){width:100%;&.imageCol{display:none;}}}.reusecore__button{background-color:transparent;&.default{background-color:',
            ';transition:all 0.3s ease;&:hover{box-shadow:0px 9px 20px -5px rgba(16,172,132,0.57);}}}.rc-tabs{border:0;max-width:360px;margin:30px 0 0;@media only screen and (max-width:991px){max-width:100%;}.rc-tabs-bar{margin-left:15px;}.rc-tabs-nav-container{padding:0;.rc-tabs-tab-prev,.rc-tabs-tab-next{display:none;}.rc-tabs-nav-scroll,.rc-tabs-nav{width:100%;.rc-tabs-tab{width:50%;margin-right:0;padding:13px 0;text-align:center;}}}.rc-tabs-tabpane{padding-left:15px;padding-bottom:15px;padding-right:15px;@media (min-width:1200px){min-height:560px;}}.google-login__btn{width:100%;font-size:15px;font-weight:700;margin-bottom:45px;box-shadow:0 4px 15px rgba(0,0,0,0.1);.btn-icon{position:relative;left:-22px;img{width:21px;height:auto;}}}.reusecore__input{margin-bottom:30px;&.is-material{&.is-focus{label{color:',
            ';top:-12px;}.highlight{background-color:',
            ';}}}label{font-weight:400;font-size:14px;color:rgba(0,0,0,0.6);top:15px;}}.reusecore__checkbox{margin:0 0 35px;label{.reusecore__field-label{font-size:13px;font-weight:400;}}}}'
          ],
          Object(N.L)('colors.white', '#ffffff'),
          Object(N.L)('colors.primary', '#10ac84'),
          Object(N.L)('colors.primary', '#10ac84'),
          Object(N.L)('colors.primary', '#10ac84')
        ),
        z = (o('Uag0'), o('DEAh')),
        T = o.n(z),
        I = o('tdLR'),
        L = o.n(I),
        P = o('YbYX'),
        M = o.n(P),
        R = i.a.createElement,
        F = function (e) {
          var t = e.row,
            o = e.col,
            i = e.btnStyle,
            a = e.logoStyle,
            r = e.titleStyle,
            l = e.contentWrapper,
            p = e.outlineBtnStyle,
            s = e.descriptionStyle,
            d = e.googleButtonStyle
          return R(
            H,
            null,
            R(
              E.a,
              Object(g.a)({ className: 'row' }, t),
              R(
                E.a,
                Object(g.a)({ className: 'col imageCol' }, o),
                R(W.a, {
                  className: 'patternImage',
                  src: L.a,
                  alt: 'Login Banner'
                })
              ),
              R(
                E.a,
                Object(g.a)({ className: 'col tabCol' }, o),
                R(
                  E.a,
                  l,
                  R(W.a, Object(g.a)({ src: T.a }, a, { alt: 'Logo' })),
                  R(
                    k.b,
                    {
                      defaultActiveKey: 'loginForm',
                      renderTabBar: function () {
                        return R(C.a, null)
                      },
                      renderTabContent: function () {
                        return R(_.a, null)
                      }
                    },
                    R(
                      k.a,
                      { tab: 'LOGIN', key: 'loginForm' },
                      R(x.a, Object(g.a)({ content: 'Welcome Folk' }, r)),
                      R(
                        b.a,
                        Object(g.a)(
                          {
                            content:
                              'Welcome to Mate Family. Please login with your personal account information letter.'
                          },
                          s
                        )
                      ),
                      R(
                        c.a,
                        Object(g.a)(
                          {
                            icon: R(W.a, { src: M.a, alt: 'Google Icon' }),
                            title: 'Sign in with Google',
                            iconPosition: 'left',
                            className: 'google-login__btn'
                          },
                          d
                        )
                      ),
                      R(u.a, {
                        inputType: 'email',
                        isMaterial: !0,
                        label: 'Email Address'
                      }),
                      R(u.a, {
                        inputType: 'password',
                        isMaterial: !0,
                        label: 'Password'
                      }),
                      R(B.a, {
                        id: 'remember',
                        htmlFor: 'remember',
                        labelText: 'Remember Me'
                      }),
                      R(
                        'div',
                        null,
                        R(function () {
                          return R(
                            n.Fragment,
                            null,
                            R(
                              c.a,
                              Object(g.a)(
                                { className: 'default', title: 'LOGIN' },
                                i
                              )
                            ),
                            R(
                              c.a,
                              Object(g.a)(
                                {
                                  title: 'Forget Password',
                                  variant: 'textButton'
                                },
                                p
                              )
                            )
                          )
                        }, null)
                      )
                    ),
                    R(
                      k.a,
                      { tab: 'REGISTER', key: 'registerForm' },
                      R(x.a, Object(g.a)({ content: 'Welcome Folk' }, r)),
                      R(
                        b.a,
                        Object(g.a)(
                          {
                            content:
                              'Welcome to Mate Family. Please login with your personal account information letter.'
                          },
                          s
                        )
                      ),
                      R(
                        c.a,
                        Object(g.a)(
                          {
                            icon: R(W.a, { src: M.a, alt: 'Google Icon' }),
                            title: 'Sign up with Google',
                            iconPosition: 'left',
                            className: 'google-login__btn'
                          },
                          d
                        )
                      ),
                      R(u.a, { isMaterial: !0, label: 'Full Name' }),
                      R(u.a, {
                        inputType: 'email',
                        isMaterial: !0,
                        label: 'Email Address'
                      }),
                      R(u.a, {
                        inputType: 'password',
                        isMaterial: !0,
                        label: 'Password'
                      }),
                      R(
                        'div',
                        null,
                        R(function () {
                          return R(
                            n.Fragment,
                            null,
                            R(
                              c.a,
                              Object(g.a)(
                                { className: 'default', title: 'REGISTER' },
                                i
                              )
                            )
                          )
                        }, null)
                      )
                    )
                  )
                )
              )
            )
          )
        }
      F.defaultProps = {
        row: { flexBox: !0, flexWrap: 'wrap' },
        col: { width: [1, 0.5] },
        logoStyle: { width: '128px', height: 'auto', ml: '15px' },
        titleStyle: {
          fontSize: ['22px', '36px', '50px'],
          fontWeight: '400',
          color: '#20201D',
          letterSpacing: '-0.025em',
          mt: '35px',
          mb: '10px'
        },
        descriptionStyle: {
          color: 'rgba(52, 61, 72, 0.8)',
          fontSize: '15px',
          lineHeight: '26px',
          letterSpacing: '-0.025em',
          mb: '23px',
          ml: '1px'
        },
        contentWrapper: {
          pt: ['32px', '56px'],
          pl: ['17px', '32px', '38px', '40px', '56px'],
          pr: '32px',
          pb: ['32px', '56px']
        },
        btnStyle: { minWidth: '156px', fontSize: '14px', fontWeight: '500' },
        outlineBtnStyle: {
          minWidth: '156px',
          fontSize: '14px',
          fontWeight: '500',
          color: '#10ac84'
        },
        googleButtonStyle: { bg: '#ffffff', color: '#343D48' }
      }
      var D = F,
        U = o('jvFD'),
        X = o.n(U),
        G = m.d.div.withConfig({
          displayName: 'copyrightSectionstyle__CopyrightWrapper',
          componentId: 'sc-13qkmti-0'
        })([
          'ul{display:flex;align-items:center;li{margin:0 12px;&:first-child{margin-left:0;}&:last-child{margin-right:0;}a{color:#20201d;}}&:hover{li{a{&:not(:hover){opacity:0.4;}}}}}p{color:#20201d;font-size:16px;margin:30px 0 0;}'
        ]),
        Q = o('sOBS'),
        V = i.a.createElement,
        Y = function () {
          return V(
            G,
            { className: 'copyright_section' },
            V(
              'ul',
              null,
              Q.a.social_profile.map(function (e, t) {
                return V(
                  'li',
                  { key: 'profile_key_'.concat(t) },
                  V(
                    X.a,
                    { href: '#1' },
                    V('a', null, V('i', { className: e.icon }))
                  )
                )
              })
            ),
            V(b.a, { content: 'Copyrights 2020 @bmsAlumniClub' })
          )
        },
        q = o('8qGZ'),
        K = i.a.createElement,
        J = function () {
          return K(c.a, {
            className: 'modalCloseBtn',
            variant: 'fab',
            onClick: function () {
              return Object(a.b)()
            },
            icon: K('i', { className: 'flaticon-plus-symbol' })
          })
        },
        Z = function () {
          return K(c.a, {
            className: 'modalCloseBtn alt',
            variant: 'fab',
            onClick: function () {
              return Object(a.b)()
            },
            icon: K('i', { className: 'flaticon-plus-symbol' })
          })
        },
        $ = function (e) {
          var t = e.navbarStyle,
            o = e.logoStyle,
            i = Object(n.useContext)(q.a),
            m = i.state,
            g = i.dispatch
          return K(
            r.a,
            t,
            K(
              f,
              null,
              K(p.a, {
                href: '#',
                logoSrc: T.a,
                title: 'Agency',
                logoStyle: o
              }),
              K(
                'div',
                { style: { display: 'flex', alignItems: 'center' } },
                K(
                  l.a,
                  {
                    width: '420px',
                    placement: 'right',
                    drawerHandler: K(s.a, null),
                    open: m.isOpen,
                    toggleHandler: function () {
                      g({ type: 'TOGGLE' })
                    }
                  },
                  K(d.a, {
                    menuItems: Q.a.menuItems,
                    drawerClose: !0,
                    offset: -100
                  }),
                  K(Y, null)
                )
              )
            )
          )
        }
      $.defaultProps = {
        navbarStyle: { minHeight: '70px' },
        logoStyle: { width: '128px', height: 'auto' }
      }
      t.a = $
    },
    YbYX: function (e, t) {
      e.exports =
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QBARXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAFaADAAQAAAABAAAAFgAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/9sAhAADAwMDAwMEBAQEBQUFBQUHBwYGBwcLCAkICQgLEQsMCwsMCxEPEg8ODxIPGxUTExUbHxoZGh8mIiImMC0wPj5UAQMDAwMDAwQEBAQFBQUFBQcHBgYHBwsICQgJCAsRCwwLCwwLEQ8SDw4PEg8bFRMTFRsfGhkaHyYiIiYwLTA+PlT/wgARCAAWABUDAREAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAACAcCBf/aAAgBAQAAAABMc9dxjZlRUGYn/8QAGAEAAwEBAAAAAAAAAAAAAAAABgcIAwT/2gAIAQIQAAAABdi9CV+zZb4Tv//EABcBAQEBAQAAAAAAAAAAAAAAAAcGBAX/2gAIAQMQAAAAc9gZ3i2NpZJN/8QAKBAAAQQBBAEDBAMAAAAAAAAAAgEDBAUGAAcREzEyQVEIEhQiQ1Jx/9oACAEBAAE/ANxstz3Oc2PC8Y74kYFUTMTVrvQfW6bieGk059Oef0nVOp8hjnPQx+7rccjkPyqHqmjWkKohRbCd+dKaYEX5Kggdpp5LhNbcXNTAzOZTynm0snGDEBX1cgXJBz8r541uZg+491fHYUWRJW17cMEMCnPx0Qg5UjVG0VNU9tuXcuShrr+4kJHIUMhlvEn7c8KnK+F41uvs+l1NfyehmBBnt8OyRJSETIP5AIOVE9Qp+5Wdyxxx3I3XAI0AheePrLj+6iKqSf7rbjb6uwGlWM0fdIfJHJUjjjsJPCInsI+2v//EACYRAAIBBAEDAwUAAAAAAAAAAAECAwAEBRESBiFBBxMxFCNCUaH/2gAIAQIBAT8AmzMmduntsZOrxJI0bMjfkh02yPgCj07fwakhuF578Er/AGoEkjhRZH5uFHJta2a9G8Tk8Zksw97C8Yk+0rP25PG55aFdM5vpuxsBb3+NNzcNMSGEEchIPwNsd1e2fTFksRucfZx+4CVBhQHtV/jvcYzxNxcdzVrdZT6mMw3TxyRuCjhiCCPOxWVzuTzZga+lV3hiCDivEE+W1+zX/8QAKBEAAQQBAwMCBwAAAAAAAAAAAQIDBBEFAAYSEyExByIUMkFCYWJx/9oACAEDAQE/ANq4TbW29vpz+Y6b7yqISRz6d/KhKT5WdJ9U9s5DnGn4twRuJrklDoP4KdZF6LJnPuxY4jsrcJbZsq4J+gs63duPESH4eLZmIU/XVU0k2AK9t/tR8azGNy8mV1YssMtBsWC6pHjye2oz+ZklYZlSF8KshxR1uHbXxTqp0RwNPD3LBsAkfcCPB0y9nMs6IRmqIJr3KNH+0O+sRim8VG6YPNau7i6qzr//2Q=='
    },
    cnyG: function (e, t, o) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.iosSearchStrong = void 0)
      t.iosSearchStrong = {
        viewBox: '0 0 512 512',
        children: [
          {
            name: 'path',
            attribs: {
              d:
                'M344.5,298c15-23.6,23.8-51.6,23.8-81.7c0-84.1-68.1-152.3-152.1-152.3C132.1,64,64,132.2,64,216.3\r\n\tc0,84.1,68.1,152.3,152.1,152.3c30.5,0,58.9-9,82.7-24.4l6.9-4.8L414.3,448l33.7-34.3L339.5,305.1L344.5,298z M301.4,131.2\r\n\tc22.7,22.7,35.2,52.9,35.2,85c0,32.1-12.5,62.3-35.2,85c-22.7,22.7-52.9,35.2-85,35.2c-32.1,0-62.3-12.5-85-35.2\r\n\tc-22.7-22.7-35.2-52.9-35.2-85c0-32.1,12.5-62.3,35.2-85c22.7-22.7,52.9-35.2,85-35.2C248.5,96,278.7,108.5,301.4,131.2z'
            },
            children: []
          }
        ]
      }
    },
    dUlh: function (e, t) {
      e.exports =
        '/_next/static/images/group-image1-ad8558057fc7b67e6be19bbb87259e40.jpg'
    },
    iiux: function (e, t, o) {
      'use strict'
      var n = o('pneb'),
        i = o('ERkP'),
        a = o.n(i),
        r = o('MFEH'),
        l = o.n(r),
        c = o('l54f'),
        p = o('4Af6'),
        s = o('bHe8'),
        d = o('rZdf'),
        m = o('KFN4'),
        f = o('D7Vo'),
        g = o('b4OD'),
        b = o('j/s1'),
        x = o('GkOb'),
        u = b.d.section.withConfig({
          displayName: 'aboutUsSectionstyle__AboutUsSectionWrapper',
          componentId: 'sc-6e8cut-0'
        })(
          [
            'padding:80px 0 50px;overflow:hidden;@media (max-width:990px){padding:60px 0 40px 0;}.col{align-self:center;}.group-gallery{box-shadow:none;display:flex;flex-wrap:wrap;.col1{width:calc(60% - 30px);margin-right:30px;}.col2{width:calc(40% - 30px);align-self:center;margin-right:30px;}img{max-width:100%;height:auto;margin-bottom:30px;object-fit:contain;box-shadow:0px 0px 250px 0px rgba(39,79,117,0.1);}}.feature__block{align-items:center;margin-bottom:14px;.icon__wrapper{color:',
            ';margin-right:10px;}.content__wrapper{h2{margin-bottom:0;}}}.reusecore__button{margin-top:36px;transition:all 0.3s ease;&:hover{box-shadow:0px 9px 20px -5px rgba(16,172,132,0.57);}}'
          ],
          Object(x.L)('colors.primary', '#10ac84')
        ),
        h = o('sOBS'),
        w = o('dUlh'),
        A = o.n(w),
        y = o('vejf'),
        v = o.n(y),
        S = o('I6BJ'),
        k = o.n(S),
        O = a.a.createElement,
        _ = function (e) {
          var t = e.row,
            o = e.col,
            i = e.title,
            a = e.description,
            r = e.textArea,
            b = e.featureTitle,
            x = e.btnStyle
          return O(
            u,
            { id: 'AboutUsSection' },
            O(
              c.a,
              Object(n.a)({ className: 'row' }, t),
              O(
                c.a,
                Object(n.a)({ className: 'col' }, o),
                O(
                  d.a,
                  { className: 'group-gallery' },
                  O(
                    c.a,
                    { className: 'col1' },
                    O(
                      l.a,
                      { top: !0, delay: 30 },
                      O(m.a, { src: A.a, alt: 'Feature Image' })
                    ),
                    O(
                      l.a,
                      { left: !0, delay: 60 },
                      O(m.a, { src: k.a, alt: 'Feature Image' })
                    )
                  ),
                  O(
                    c.a,
                    { className: 'col2' },
                    O(
                      l.a,
                      { bottom: !0, delay: 90 },
                      O(m.a, { src: v.a, alt: 'Feature Image' })
                    )
                  )
                )
              ),
              O(
                c.a,
                Object(n.a)({ className: 'col' }, o),
                O(
                  c.a,
                  r,
                  O(g.a, {
                    title: O(
                      s.a,
                      Object(n.a)(
                        {
                          content:
                            'What is this about?'
                        },
                        i
                      )
                    ),
                    description: O(
                      p.a,
                      Object(n.a)(
                        {
                          content:
                            'Today, you might be far ahead in this journey. But someone can learn from your experience. This is your chance to give back to your alma mater and close the loop.'
                        },
                        a
                      )
                    )
                  })
                ),
                O(
                  c.a,
                  r,
                  h.a.aboutus.map(function (e, t) {
                    return O(g.a, {
                      key: 'feature_point-'.concat(t),
                      icon: O('i', { className: e.icon }),
                      iconPosition: 'left',
                      title: O(s.a, Object(n.a)({ content: e.title }, b))
                    })
                  }),
                  // O(f.a, Object(n.a)({ title: 'DISCOVER ITEM' }, x))             
                )
              )
            )
          )
        }
      _.defaultProps = {
        row: { flexBox: !0, flexWrap: 'wrap' },
        col: { width: [1, '100%', '50%'] },
        textArea: { maxWidth: '490px', pl: '40px' },
        title: {
          fontSize: ['26px', '26px', '30px', '40px'],
          lineHeight: '1.5',
          fontWeight: '300',
          color: '#0f2137',
          letterSpacing: '-0.025em',
          mb: '30px'
        },
        description: {
          fontSize: '16px',
          color: '#343d48cc',
          lineHeight: '1.75',
          mb: '33px'
        },
        featureTitle: {
          fontSize: '16px',
          fontWeight: '400',
          color: '#343d48',
          lineHeight: '1.5',
          mb: '8px',
          letterSpacing: '-0.020em'
        },
        btnStyle: { minWidth: '156px', fontSize: '14px', fontWeight: '500' }
      }
      t.a = _
    },
    iynF: function (e, t, o) {
      'use strict'
      var n = o('pneb'),
        i = o('Dlp7'),
        a = o('wk2l'),
        r = o('ERkP'),
        l = o.n(r),
        c = o('sZWo'),
        p = o('j/s1'),
        s = o('GkOb'),
        d = o('/Q04'),
        m = p.d.div.withConfig({
          displayName: 'checkboxstyle__CheckBoxStyle',
          componentId: 'sc-19b553d-0'
        })(
          [
            'display:inline-flex;.reusecore__field-label{color:',
            ';font-size:',
            'px;font-weight:',
            ';}&.label_left{label{display:flex;align-items:center;.reusecore__field-label{margin-right:',
            'px;}}}&.label_right{label{display:flex;flex-direction:row-reverse;align-items:center;.reusecore__field-label{margin-left:',
            "px;}}}input[type='checkbox']{&.checkbox{opacity:0;position:absolute;margin:0;z-index:-1;width:0;height:0;overflow:hidden;pointer-events:none;&:checked + div{border-color:",
            ';background-color:',
            ';&::after{opacity:1;visibility:visible;transform:rotate(45deg) scale(1);}}}+ div{display:inline-flex;align-items:center;justify-content:center;width:16px;height:16px;border-radius:3px;border:1px solid ',
            ";position:relative;transition:all 0.3s ease;&::after{content:'';width:4px;height:10px;transform:rotate(45deg) scale(0.8);border-bottom:2px solid ",
            ';border-right:2px solid ',
            ';position:absolute;top:0;opacity:0;visibility:hidden;transition-property:opacity,visibility;transition-duration:0.3s;}}}',
            ''
          ],
          Object(s.L)('colors.textColor', '#484848'),
          Object(s.L)('fontSizes.4', '16'),
          Object(s.L)('fontWeights.4', '500'),
          Object(s.L)('space.3', '10'),
          Object(s.L)('space.3', '10'),
          Object(s.L)('colors.primary', '#028489'),
          Object(s.L)('colors.primary', '#028489'),
          Object(s.L)('colors.borderColor', '#dadada'),
          Object(s.L)('colors.white', '#ffffff'),
          Object(s.L)('colors.white', '#ffffff'),
          d.a
        )
      ;(m.propTypes = {}), (m.displayName = 'CheckBoxStyle')
      var f = m,
        g = l.a.createElement,
        b = function (e) {
          var t = e.className,
            o = e.isChecked,
            r = e.labelText,
            l = e.value,
            p = e.id,
            s = e.htmlFor,
            d = e.labelPosition,
            m = e.isMaterial,
            b = e.disabled,
            x = Object(a.a)(e, [
              'className',
              'isChecked',
              'labelText',
              'value',
              'id',
              'htmlFor',
              'labelPosition',
              'isMaterial',
              'disabled'
            ]),
            u = Object(c.a)(o),
            h = Object(i.a)(u, 2),
            w = h[0],
            A = h[1],
            y = ['reusecore__checkbox']
          d && y.push('label_'.concat(d)),
            m && y.push('is-material'),
            t && y.push(t)
          var v = r && g('span', { className: 'reusecore__field-label' }, r),
            S = d || 'right'
          return g(
            f,
            Object(n.a)({ className: y.join(' ') }, x),
            g(
              'label',
              { htmlFor: s },
              'left' === S || 'right' === S ? v : '',
              g(
                'input',
                Object(n.a)(
                  {
                    type: 'checkbox',
                    className: 'checkbox',
                    id: p,
                    value: l,
                    checked: w,
                    onChange: A,
                    disabled: b
                  },
                  x
                )
              ),
              g('div', null)
            )
          )
        }
      b.defaultProps = {
        isChecked: !1,
        labelText: 'Checkbox label',
        labelPosition: 'right',
        disabled: !1
      }
      t.a = b
    },
    jYDh: function (e, t, o) {
      'use strict'
      var n = o('pneb'),
        i = o('ERkP'),
        a = o.n(i),
        r = o('l54f'),
        l = o('4Af6'),
        c = o('bHe8'),
        p = o('H3JQ'),
        s = o('aVK5'),
        d = o('2xV5'),
        m = o('EW4T'),
        f = o('vzpy'),
        g = o('j/s1'),
        b = o('GkOb'),
        x = g.d.section.withConfig({
          displayName: 'faqSectionstyle__FaqSectionWrapper',
          componentId: 'sc-901h8h-0'
        })(
          [
            'padding:80px 0;overflow:hidden;@media (max-width:990px){padding:40px 0 60px 0;}@media (max-width:767px){padding:20px 0 40px 0;}.reusecore__accordion{max-width:820px;margin:0 auto;border:1px solid ',
            ';border-radius:5px;box-shadow:0px 0px 30px 0px rgba(25,61,101,0.05);.accordion__item{border-top:0;border-bottom:1px solid ',
            ';&:last-child{border-bottom:0;}.accordion__header{padding:20px 30px;}.accordion__body{padding:5px 30px 20px;}}}'
          ],
          Object(b.L)('colors.inactiveIcon', '#ebebeb'),
          Object(b.L)('colors.inactiveIcon', '#ebebeb')
        ),
        u = o('sOBS'),
        h = a.a.createElement,
        w = function (e) {
          var t = e.sectionHeader,
            o = e.sectionTitle,
            a = e.sectionSubTitle,
            g = e.titleStyle,
            b = e.descriptionStyle
          return h(
            x,
            { id: 'faqSection' },
            h(
              p.a,
              null,
              h(
                r.a,
                t,
                h(l.a, Object(n.a)({ content: 'FAQ' }, a)),
                h(c.a, Object(n.a)({ content: 'Frequently Ask Question' }, o))
              ),
              h(
                r.a,
                { className: 'row' },
                h(
                  s.a,
                  null,
                  h(
                    i.Fragment,
                    null,
                    u.a.faq.map(function (e, t) {
                      return h(
                        s.c,
                        { key: 'accordion_key-'.concat(t) },
                        h(
                          i.Fragment,
                          null,
                          h(
                            s.d,
                            null,
                            h(
                              i.Fragment,
                              null,
                              h(c.a, Object(n.a)({ content: e.title }, g)),
                              h(
                                s.f,
                                null,
                                h(
                                  s.g,
                                  null,
                                  h(d.Icon, { icon: f.minus, size: 18 })
                                ),
                                h(
                                  s.e,
                                  null,
                                  h(d.Icon, { icon: m.plus, size: 18 })
                                )
                              )
                            )
                          ),
                          h(
                            s.b,
                            null,
                            h(l.a, Object(n.a)({ content: e.description }, b))
                          )
                        )
                      )
                    })
                  )
                )
              )
            )
          )
        }
      w.defaultProps = {
        sectionHeader: { mb: ['40px', '56px'] },
        sectionSubTitle: {
          as: 'span',
          display: 'block',
          textAlign: 'center',
          fontSize: '14px',
          letterSpacing: '0.15em',
          fontWeight: '700',
          color: '#10ac84',
          mb: '10px'
        },
        sectionTitle: {
          textAlign: 'center',
          fontSize: ['20px', '24px'],
          fontWeight: '400',
          color: '#0f2137',
          letterSpacing: '-0.025em',
          mb: '0'
        },
        titleStyle: {
          fontSize: ['16px', '19px'],
          fontWeight: '400',
          color: '#0f2137',
          letterSpacing: '-0.025em',
          mb: '0'
        },
        descriptionStyle: {
          fontSize: '15px',
          color: '#343d48cc',
          lineHeight: '1.75',
          mb: '0'
        }
      }
      t.a = w
    },
    jpsa: function (e, t, o) {
      'use strict'
      var n = o('pneb'),
        i = o('ERkP'),
        a = o.n(i),
        r = o('l54f'),
        l = o('4Af6'),
        c = o('bHe8'),
        p = o('b4OD'),
        s = o('sOBS'),
        d = o('H3JQ'),
        m = o('j/s1'),
        f = o('GkOb'),
        g = m.d.section.withConfig({
          displayName: 'featureSectionstyle__FeatureSectionWrapper',
          componentId: 'sc-13s4iqj-0'
        })(
          [
            "padding:80px 0;overflow:hidden;@media (max-width:990px){padding:60px 0 30px 0;}@media (max-width:767px){padding:40px 0 30px 0;}.feature__block{position:relative;height:100%;transition:box-shadow 0.3s ease;.icon__wrapper{position:relative;background:linear-gradient( -60deg,rgba(241,39,17,0.7),rgba(245,175,25,0.7) );.flaticon-flask{&:before{margin-left:8px;}}&:before,&:after{content:'';width:28px;height:100%;position:absolute;}&:before{transform:rotate(45deg);background-color:rgba(255,255,255,0.15);}&:after{transform:rotate(-45deg);background-color:rgba(0,0,0,0.05);}}&:hover{box-shadow:0 40px 90px -30px rgba(39,79,117,0.2);}}.row{> .col{&:nth-child(-n + 3){border-top:1px solid ",
            ';}&:nth-child(3n + 3),&:last-child{border-right:1px solid ',
            ';}@media only screen and (max-width:991px){&:nth-child(-n + 3){border-top:0;}&:nth-child(3n + 3){border-right:0;}&:nth-child(-n + 2){border-top:1px solid ',
            ';}&:nth-child(2n + 2){border-right:1px solid ',
            ';}}@media only screen and (max-width:480px){&:nth-child(-n + 2){border-top:0;}&:nth-child(2n + 2){border-right:0;}&:nth-child(-n + 1){border-top:1px solid ',
            ';}&:nth-child(1n + 1){border-right:1px solid ',
            ';}}&:nth-child(2){.feature__block{.icon__wrapper{background:linear-gradient( -60deg,rgba(50,207,167,0.75),rgba(150,201,61,0.75) );}}}&:nth-child(3){.feature__block{.icon__wrapper{background:linear-gradient( -60deg,rgba(236,0,140,0.75),rgba(255,103,103,0.75) );}}}&:nth-child(4){.feature__block{.icon__wrapper{background:linear-gradient( -60deg,rgba(47,128,237,0.75),rgba(86,204,242,0.75) );}}}&:nth-child(5){.feature__block{.icon__wrapper{background:linear-gradient( -60deg,rgba(110,72,170,0.75),rgba(192,91,210,0.75) );}}}&:last-child{.feature__block{.icon__wrapper{background:linear-gradient( -60deg,rgba(0,57,115,0.75),rgba(299,299,199,0.75) );}}}}}'
          ],
          Object(f.L)('colors.lightBorder', '#f1f4f6'),
          Object(f.L)('colors.lightBorder', '#f1f4f6'),
          Object(f.L)('colors.lightBorder', '#f1f4f6'),
          Object(f.L)('colors.lightBorder', '#f1f4f6'),
          Object(f.L)('colors.lightBorder', '#f1f4f6'),
          Object(f.L)('colors.lightBorder', '#f1f4f6')
        ),
        b = a.a.createElement,
        x = function (e) {
          var t = e.row,
            o = e.col,
            i = e.sectionHeader,
            a = e.sectionTitle,
            m = e.sectionSubTitle,
            f = e.featureTitle,
            x = e.featureDescription,
            u = e.iconStyle,
            h = e.contentStyle,
            w = e.blockWrapperStyle
          return b(
            g,
            { id: 'featureSection' },
            b(
              d.a,
              null,
              b(
                r.a,
                i,
                b(l.a, Object(n.a)({ content: '' }, m)),
                b(
                  c.a,
                  Object(n.a)(
                    { content: 'What we are trying to do?' },
                    a
                  )
                )
              ),
              b(
                r.a,
                Object(n.a)({ className: 'row' }, t),
                s.a.features.map(function (e, t) {
                  return b(
                    r.a,
                    Object(n.a)({ className: 'col' }, o, {
                      key: 'feature-'.concat(t)
                    }),
                    b(p.a, {
                      icon: b('i', { className: e.icon }),
                      wrapperStyle: w,
                      iconStyle: u,
                      contentStyle: h,
                      title: b(c.a, Object(n.a)({ content: e.title }, f)),
                      description: b(
                        l.a,
                        Object(n.a)({ content: e.description }, x)
                      )
                    })
                  )
                })
              )
            )
          )
        }
      x.defaultProps = {
        sectionHeader: { mb: ['40px', '56px'] },
        sectionSubTitle: {
          as: 'span',
          display: 'block',
          textAlign: 'center',
          fontSize: '14px',
          letterSpacing: '0.15em',
          fontWeight: '700',
          color: '#10ac84',
          mb: '10px'
        },
        sectionTitle: {
          textAlign: 'center',
          fontSize: ['20px', '24px'],
          fontWeight: '400',
          color: '#0f2137',
          letterSpacing: '-0.025em',
          mb: '0'
        },
        row: { flexBox: !0, flexWrap: 'wrap' },
        col: {
          width: [1, 0.5, 0.5, 1 / 3],
          borderLeft: '1px solid #f1f4f6',
          borderBottom: '1px solid #f1f4f6'
        },
        blockWrapperStyle: { p: ['30px', '20px', '30px', '40px'] },
        iconStyle: {
          width: '84px',
          height: '84px',
          m: '0 auto',
          borderRadius: '50%',
          bg: '#93d26e',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '36px',
          color: '#ffffff',
          overflow: 'hidden',
          mb: '30px'
        },
        contentStyle: { textAlign: 'center' },
        featureTitle: {
          fontSize: ['18px', '20px'],
          fontWeight: '400',
          color: '#0f2137',
          lineHeight: '1.5',
          mb: ['10px', '10px', '10px', '20px'],
          letterSpacing: '-0.020em'
        },
        featureDescription: {
          fontSize: '15px',
          lineHeight: '1.75',
          color: '#343d48cc'
        }
      }
      t.a = x
    },
    kO2b: function (e, t, o) {
      'use strict'
      var n = o('ERkP'),
        i = o.n(n),
        a = o('wPIG'),
        r = o.n(a),
        l = o('HZTQ'),
        c = o.n(l),
        p = o('pVBZ'),
        s = o.n(p),
        d = o('9Zkp'),
        m = o.n(d),
        f = o('oWDX'),
        g = o.n(f),
        b = o('MvUT'),
        x = o.n(b),
        u = i.a.createElement
      t.a = function () {
        return u(
          i.a.Fragment,
          null,
          u(r.a, {
            className: 'particle',
            params: {
              particles: {
                number: { value: 7, density: { enable: !0, value_area: 800 } },
                shape: {
                  type: ['images'],
                  images: [
                    { src: ''.concat(c.a), width: 25, height: 25 },
                    { src: ''.concat(s.a), width: 18, height: 18 },
                    { src: ''.concat(m.a), width: 32, height: 32 },
                    { src: ''.concat(g.a), width: 41, height: 41 },
                    { src: ''.concat(x.a), width: 22, height: 22 },
                    { src: ''.concat(s.a), width: 22, height: 22 },
                    { src: ''.concat(g.a), width: 22, height: 22 }
                  ]
                },
                opacity: {
                  value: 0.17626369048095938,
                  random: !0,
                  anim: { enable: !1, speed: 1, opacity_min: 0.1, sync: !1 }
                },
                size: { value: 10, random: !1 },
                line_linked: { enable: !1 },
                move: {
                  enable: !0,
                  speed: 1.5,
                  direction: 'none',
                  random: !1,
                  straight: !1,
                  bounce: !0,
                  attract: { enable: !0, rotateX: 100, rotateY: 400 }
                }
              },
              retina_detect: !0
            }
          })
        )
      }
    },
    lAGf: function (e, t, o) {
      'use strict'
      var n = o('pneb'),
        i = o('ERkP'),
        a = o.n(i),
        r = o('l54f'),
        l = o('bHe8'),
        c = o('olOc'),
        p = o('D7Vo'),
        s = o('H3JQ'),
        d = o('j/s1'),
        m = d.d.section.withConfig({
          displayName: 'newsletterSectionstyle__NewsletterSectionWrapper',
          componentId: 'sc-3lt5xm-0'
        })([
          'padding:80px 0;overflow:hidden;@media (max-width:990px){padding:40px 0 60px 0;}'
        ]),
        f = d.d.div.withConfig({
          displayName: 'newsletterSectionstyle__NewsletterForm',
          componentId: 'sc-3lt5xm-1'
        })([
          'display:flex;align-items:center;justify-content:space-between;max-width:488px;margin:0 auto;@media (max-width:575px){flex-direction:column;max-width:100%;}.reusecore__input{flex:1;margin-right:20px;@media (max-width:575px){margin:0 0 20px 0;width:100%;}.field-wrapper{input{min-height:45px;}}&.is-material{label{font-size:14px;top:14px;font-weight:500;color:rgba(51,61,72,0.4);}&.is-focus{label{top:-12px;}}}}.reusecore__button{flex-shrink:0;transition:all 0.3s ease;@media (max-width:575px){width:100%;}&:hover{box-shadow:0px 9px 20px -5px rgba(16,172,132,0.57);}}'
        ]),
        g = m,
        b = a.a.createElement,
        x = function (e) {
          var t = e.sectionHeader
          return b(
            g,
              b(
                r.a,
                t,
              )
          )
        }
      x.defaultProps = {
        sectionHeader: { mb: '56px' },
        sectionTitle: {
          textAlign: 'center',
          fontSize: ['20px', '24px'],
          fontWeight: '400',
          color: '#0f2137',
          letterSpacing: '-0.025em',
          mb: '0'
        },
        btnStyle: {
          minWidth: '152px',
          minHeight: '45px',
          fontSize: '14px',
          fontWeight: '500'
        }
      }
      t.a = x
    },
    'm/a5': function (e, t) {
      e.exports =
        '/_next/static/images/surface-studio-d976cd5750272b053dae2daba348f4d2.png'
    },
    oHnV: function (e, t) {
      e.exports =
        '/_next/static/images/agency-banner-786e83ef0f7f5cd78b599e53dd9b0a0f.png'
    },
    oWDX: function (e, t) {
      e.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAllBMVEUwfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv9w6jhqAAAAMnRSTlMAAgMEBQoLDxASExcYHR8gISIjJSsyMz0+Q0RGTFJbX3t8fX5/gIaHioyOj5CRk5SVmV23O/AAAADkSURBVCjPfZLdWoJQEEU3P5UVppiYIEmBgacO6nr/l+tCKBB0X5515puZvUc6y1tuc4vNt0tPXTlve1qZpMOec7rKgxbMvoEyXUy8yet7CfzMzyCwcEzc5pubHMEGkuTmYKadplMDhStpA6ewN094go3kG0jUVwLGVwSVe0GcClbKINWlUshUwGJAQtjJwsOA3IMV4A2IANVXamrtrvT5ujHbCipndJ8xD2Iw/phv87NvN7xWYOEQ/+UTH9p8pBcDlGl45zSZmllb//jRu4PPp86Y6//b2a/7S/hRVtTURRb5zcsvDoEoKiBacYsAAAAASUVORK5CYII='
    },
    pVBZ: function (e, t) {
      e.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAASCAYAAAC0EpUuAAABTElEQVQ4ja3TPUscURTG8V/GVUujWGgKG8EE7GwsFLSSWE9nl88xrZ/FylqLRf0AorAkTWwUERGbgYCLbLGbwjN4HfbFhT3Vc87z3D+Xe2a+fD0+PMCaydXfDEsTBMJyhvMJQ88baGEDKzG8wdEYkPT57tHK0MMJumGs+fwbf0+yXZyUedHLYvCEqyT8E40RwEbkqroq8+IJsmR4gXboBWyNgG5hPnQ7zqtD2zhL+m3MDQDOhV/VWZkX1YU+QOEaj6GnsTcAuh++yF+nZh1aLa0X/TpWa5lV/EjzZV700kAdCg/ePrP0VlOhp6KvqlXmxUMd0A8KTbyGXsRm6M3ohd/sd3gQ9EWyTezgG3aT2UXkPg2FSzyHnsUvzET/HH7fGgbt+ri06cQ79f4HjgWFO/ypzX7jdtihUVDeltEJ3TFgOeNC/3n/GprRD63/4qlNWYiwMj4AAAAASUVORK5CYII='
    },
    rGol: function (e, t, o) {
      'use strict'
      var n = o('pneb'),
        i = o('ERkP'),
        a = o.n(i),
        r = o('jvFD'),
        l = o.n(r),
        c = o('l54f'),
        p = o('4Af6'),
        s = o('bHe8'),
        d = o('cIfr'),
        m = o('H3JQ'),
        f = o('j/s1'),
        g = o('GkOb'),
        b = o('OdzX'),
        x = o.n(b),
        u = f.d.section.withConfig({
          displayName: 'footerstyle__FooterWrapper',
          componentId: 'sc-1cbe9r-0'
        })(
          [
            'padding:80px 0;margin-top:40px;background-image:url(',
            ');background-repeat:no-repeat;background-position:center 50px;border-top:1px solid #efefef;overflow:hidden;@media (max-width:990px){padding-bottom:30px;}@media (max-width:767px){padding-bottom:10px;}'
          ],
          x.a
        ),
        h = f.d.ul.withConfig({
          displayName: 'footerstyle__List',
          componentId: 'sc-1cbe9r-1'
        })(['']),
        w = f.d.li.withConfig({
          displayName: 'footerstyle__ListItem',
          componentId: 'sc-1cbe9r-2'
        })(
          [
            'a{color:',
            ';font-size:14px;line-height:36px;transition:all 0.2s ease;&:hover,&:focus{outline:0;text-decoration:none;color:',
            ';}}'
          ],
          Object(g.L)('colors.textColor', 'rgba(52, 61, 72, 0.8)'),
          Object(g.L)('colors.quoteText', '#343d48')
        ),
        A = u,
        y = o('DEAh'),
        v = o.n(y),
        S = o('sOBS'),
        k = a.a.createElement,
        O = function (e) {
          var t = e.row,
            o = e.col,
            i = e.colOne,
            a = e.colTwo,
            r = e.titleStyle,
            f = e.logoStyle,
            g = e.textStyle
          return k(
            A,
            { id: 'footerSection' },
            k(
              m.a,
              null,
              k(
                c.a,
                Object(n.a)({ className: 'row' }, t),
                k(
                  c.a,
                  i,
                  k(d.a, {
                    href: '#',
                    logoSrc: v.a,
                    title: 'Agency',
                    logoStyle: f
                  }),
                  k(p.a, Object(n.a)({ content: 'hello@redq.io' }, g)),
                  k(p.a, Object(n.a)({ content: '+479-443-9334' }, g))
                ),
                k(
                  c.a,
                  a,
                  S.a.menuWidget.map(function (e) {
                    return k(
                      c.a,
                      Object(n.a)({ className: 'col' }, o, { key: e.id }),
                      k(s.a, Object(n.a)({ content: e.title }, r)),
                      k(
                        h,
                        null,
                        e.menuItems.map(function (e) {
                          return k(
                            w,
                            { key: 'list__item-'.concat(e.id) },
                            k(
                              l.a,
                              { href: e.url },
                              k('a', { className: 'ListItem' }, e.text)
                            )
                          )
                        })
                      )
                    )
                  })
                )
              )
            )
          )
        }
      O.defaultProps = {
        row: { flexBox: !0, flexWrap: 'wrap', ml: '-4px', mr: '-4px' },
        colOne: {
          width: ['100%', '30%', '35%', '23%'],
          mt: [0, '13px'],
          mb: ['30px', 0],
          pl: ['15px', 0],
          pr: ['15px', '15px', 0]
        },
        colTwo: {
          width: ['100%', '70%', '65%', '77%'],
          flexBox: !0,
          flexWrap: 'wrap'
        },
        col: {
          width: ['100%', '50%', '50%', '25%'],
          pl: '15px',
          pr: '15px',
          mb: '30px'
        },
        titleStyle: { color: '#343d48', fontSize: '16px', fontWeight: '700' },
        logoStyle: { width: '128px', mb: '15px' },
        textStyle: { color: '#0f2137', fontSize: '16px', mb: '10px' }
      }
      t.a = O
    },
    sOBS: function (e, t, o) {
      'use strict'
      var n = o('wFEO'),
        i = o.n(n),
        a = o('SbaX'),
        r = o.n(a),
        l = o('Aw9B'),
        c = o.n(l),
        p = o('svf+'),
        s = o.n(p),
        d = o('Vi/G'),
        m = o.n(d),
        f = o('w3+i'),
        g = o.n(f),
        b = o('GFhP'),
        x = o.n(b),
        u = o('CzWp'),
        h = o.n(u),
        w = {
          menuItems: [
            { label: 'Feature', path: '#featureSection', offset: '80' },
            {
              label: 'What we are trying to do?',
              path: '#workHistorySection',
              offset: '67'
            },
            { label: 'What is this about?', path: '#blogSection', offset: '67' },
            { label: 'Numbers', path: '#qualitySection', offset: '67' },
            {
              label: 'Testimonial',
              path: '#testimonialSection',
              offset: '100'
            },
            { label: 'Team Member', path: '#teamSection', offset: '67' },
            { label: 'FAQ', path: '#faqSection', offset: '67' }
          ],
          aboutus: [
            {
              id: 1,
              title: '34,837 - the number of BMS alum on LinkedIn as of today. On an average, one will be connected to around 600 members out of this. That’s <2% of the entire network.',
              icon: 'flaticon-next'
            },
            {
              id: 2,
              title: 'How does it benefit you? Imagine you’ve picked up a new project at work or a new side hustle and need to reach out to someone in that domain.',
              icon: 'flaticon-next'
            },
            {
              id: 3,
              title: 'Who better than someone who has had an identical journey as you years ago? Someone who has spent 4 of their prime years on the same campus as you, with similar ideologies and thought process.',
              icon: 'flaticon-next'
            },
            { id: 4, title: 'Folks from different industries, geographies, career paths, etc. are being put under a single umbrella. This initiative is to build access between the hundreds of innovators/hustlers/leaders who were once just another teenager in college figuring out her/his life.', icon: 'flaticon-next' }
          ],
          features: [
            {
              id: 1,
              icon: 'flaticon-flask',
              title: 'Connect',
              description:
                'Find fellow BMS graduates, see what they have been up to, identify areas of common interest where collaboration makes sense.'
            },
            {
              id: 2,
              icon: 'flaticon-pencil-case',
              title: 'Give back',
              description:
                'Introduce, employ and offer to act as a friend/mentor to the rest of the alumni members.'
            },
            {
              id: 3,
              icon: 'flaticon-ruler',
              title: 'Expand',
              description:
                'Build and leverage your professional network to get introductions to people sharing similar journeys.'
            },
            {
              id: 4,
              icon: 'flaticon-startup',
              title: 'Network',
              description:
                'Browse the directory and find alumni who share your service, education and career goals'
            },
            {
              id: 5,
              icon: 'Support',
              title: 'Support',
              description:
                ' Share your expertise with other alumni – or find someone who can help your cause.'
            },
            {
              id: 6,
              icon: 'flaticon-creative',
              title: 'Reconnect',
              description:
                'Stay in touch with other honorees from your trip to D.C'
            }
          ],
          qualityFeature: [
            {
              id: 1,
              icon: 'flaticon-flask',
              description:
                'Unlike the official (and pretty much inactive) portal, we want this to be a handpicked and highly valuable community for all members.'
            },
            {
              id: 2,
              icon: 'flaticon-pencil-case',
              description:
                'Strictly no spam. Will be gently moderated.'
            },
            {
              id: 3,
              icon: 'flaticon-ruler',
              description:
                'Bunch of us coming together to kick it off, but will be driven mostly by what the community wants.'
            }
          ],
          blog: [
            {
              id: 1,
              title: 'Real home corporation',
              thumbnail_url: i.a,
              date: 'November 02, 2018',
              postLink: '#1'
            },
            {
              id: 2,
              title: 'Sheltech developer ltd.',
              thumbnail_url: r.a,
              date: 'November 12, 2018',
              postLink: '#2'
            },
            {
              id: 3,
              title: 'Alt architecture co.',
              thumbnail_url: c.a,
              date: 'December 09, 2018',
              postLink: '#3'
            }
          ],
          teamMember: [
            {
              id: 1,
              name: 'Suhas Motwani',
              thumbnail_url: s.a,
              designation: 'Co Founder',
              social_links: [
                { id: 1, icon: 'flaticon-facebook-logo', url: 'https://www.facebook.com/suhas.motwani' },
                { id: 1, icon: 'flaticon-twitter-logo-silhouette', url: 'https://twitter.com/MotwaniSuhas' },
                { id: 1, icon: 'flaticon-instagram', url: 'https://www.instagram.com/motwanisuhas/?hl=en' },
                { id: 1, icon: 'flaticon-link-logo', url: '#' }
              ]
            },
            {
              id: 2,
              name: 'Karan Prasad',
              thumbnail_url: m.a,
              designation: 'Co Founder',
              social_links: [
                { id: 1, icon: 'flaticon-facebook-logo', url: 'https://www.facebook.com/karanprasad22' },
                { id: 1, icon: 'flaticon-twitter-logo-silhouette', url: 'https://twitter.com/karanprasad22' },
                { id: 1, icon: 'flaticon-instagram', url: 'https://www.instagram.com/karan.prasad/?hl=en' },
                { id: 1, icon: 'flaticon-dribble-logo', url: '#' }
              ]
            },
            {
              id: 3,
              name: 'Akash R Kathavate',
              thumbnail_url: g.a,
              designation: 'Article Writer',
              social_links: [
                { id: 1, icon: 'flaticon-facebook-logo', url: 'https://www.facebook.com/akash.kathavate' },
                { id: 1, icon: 'flaticon-twitter-logo-silhouette', url: '#' },
                { id: 1, icon: 'flaticon-instagram', url: '#' },
                { id: 1, icon: 'flaticon-dribble-logo', url: '#' }
              ]
            },
            {
              id: 4,
              name: 'Sai Prashanth',
              thumbnail_url: '_next/static/images/member-1-15a63375cbc272d327cc6bd612dd8086.jpg',
              designation: 'Article Writer',
              social_links: [
                { id: 1, icon: 'flaticon-facebook-logo', url: '#' },
                { id: 1, icon: 'flaticon-twitter-logo-silhouette', url: '#' },
                { id: 1, icon: 'flaticon-instagram', url: '#' },
                { id: 1, icon: 'flaticon-dribble-logo', url: '#' }
              ]
            }
          ],
          testimonial: [
            {
              id: 1,
              name: 'Jon Doe',
              designation: 'CEO of Denish Co.',
              comment:
                'Best working experience  with this amazing team & in future, we want to work together',
              avatar_url: x.a
            },
            {
              id: 2,
              name: 'Roman Ul Oman',
              designation: 'Co-founder of QatarDiaries',
              comment:
                'Impressed with master class support of the team and really look forward for the future.',
              avatar_url: h.a
            },
            {
              id: 3,
              name: 'Jone Doe',
              designation: 'Director of Beauty-queen',
              comment:
                'I have bought more than 10 themes on ThemeForest, and this is the first one I review. Wow! Amazing React Theme',
              avatar_url: x.a
            },
            {
              id: 4,
              name: 'Roman Ul Oman',
              designation: 'Co-founder of QatarDiaries',
              comment:
                'Impressed with master class support of the team and really look forward for the future.',
              avatar_url: h.a
            }
          ],
          faq: [
            {
              id: 1,
              expend: !0,
              title: 'How to contact with Customer Service?',
              description:
                'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!. '
            },
            {
              id: 2,
              title:
                'App installation failed, how to update system information?',
              description:
                'Please read the documentation carefully . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum . '
            },
            {
              id: 3,
              title: 'Website reponse taking time, how to improve?',
              description:
                'At first, Please check your internet connection . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .'
            },
            {
              id: 4,
              title: 'New update fixed all bug and issues?',
              description:
                'We are giving the update of this theme continuously . You will receive an email Notification when we push an update. Always try to be updated with us .'
            }
          ],
          menuWidget: [
            {
              id: 1,
              title: 'About Us',
              menuItems: [
                { id: 1, url: '#1', text: 'Support Center' },
                { id: 2, url: '#2', text: 'Customer Support' },
                { id: 3, url: '#3', text: 'About Us' },
                { id: 4, url: '#4', text: 'Copyright' },
                { id: 5, url: '#5', text: 'Popular Campaign' }
              ]
            },
            {
              id: 2,
              title: 'Our Information',
              menuItems: [
                { id: 1, url: '#1', text: 'Return Policy' },
                { id: 2, url: '#2', text: 'Privacy Policy' },
                { id: 3, url: '#2', text: 'Terms & Conditions' },
                { id: 4, url: '#4', text: 'Site Map' },
                { id: 5, url: '#5', text: 'Store Hours' }
              ]
            },
            {
              id: 3,
              title: 'My Account',
              menuItems: [
                { id: 1, url: '#1', text: 'Press inquiries' },
                { id: 2, url: '#2', text: 'Social media directories' },
                { id: 3, url: '#3', text: 'Images & B-roll' },
                { id: 4, url: '#4', text: 'Permissions' },
                { id: 5, url: '#5', text: 'Speaker requests' }
              ]
            },
            {
              id: 4,
              title: 'Policy',
              menuItems: [
                { id: 1, url: '#1', text: 'Application security' },
                { id: 2, url: '#2', text: 'Software principles' },
                { id: 3, url: '#3', text: 'Unwanted software policy' },
                { id: 4, url: '#4', text: 'Responsible supply chain' }
              ]
            }
          ],
          social_profile: [
            { id: 1, icon: 'flaticon-facebook-logo', link: '#1' },
            { id: 2, icon: 'flaticon-twitter-logo-silhouette', link: '#2' },
            { id: 3, icon: 'flaticon-instagram', link: '#3' },
            { id: 4, icon: 'flaticon-tumblr-logo', link: '#4' },
            { id: 5, icon: 'flaticon-dribble-logo', link: '#5' }
          ]
        }
      t.a = w
    },
    sZWo: function (e, t, o) {
      'use strict'
      var n = o('ERkP')
      t.a = function (e) {
        var t = Object(n.useState)(e),
          o = t[0],
          i = t[1]
        return [
          o,
          Object(n.useCallback)(function () {
            return i(function (e) {
              return !e
            })
          }, [])
        ]
      }
    },
    'svf+': function (e, t) {
      e.exports =
        '/_next/static/images/member-1-15a63375cbc272d327cc6bd612dd8086.jpg'
    },
    tdLR: function (e, t) {
      e.exports =
        '/_next/static/images/login-bg-64531be4bb6786aa0368d7f31f6ba7b8.jpg'
    },
    vSXM: function (e, t) {
      e.exports =
        '/_next/static/images/preview-image-d23fb941deda180f782b9545bce79468.jpg'
    },
    vejf: function (e, t) {
      e.exports =
        '/_next/static/images/group-image2-55420cc9af3addcdcc7bbe8f6115c84b.jpg'
    },
    vzpy: function (e, t, o) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.minus = void 0)
      t.minus = {
        viewBox: '0 0 20 20',
        children: [
          {
            name: 'path',
            attribs: {
              d:
                'M16,10c0,0.553-0.048,1-0.601,1H4.601C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1h10.799C15.952,9,16,9.447,16,10z'
            }
          }
        ]
      }
    },
    'w3+i': function (e, t) {
      e.exports =
        '/_next/static/images/member-3-7cef42878641378e076596c67a7f433b.jpg'
    },
    wFEO: function (e, t) {
      e.exports =
        '/_next/static/images/blog-img1-96f39ddc55539e70f5b76d0dd474f6eb.png'
    },
    'yxf+': function (e, t, o) {
      'use strict'
      var n = {
        transparent: 'transparent',
        labelColor: '#767676',
        lightBorder: '#f1f4f6',
        inactiveField: '#f2f2f2',
        inactiveButton: '#b7dbdd',
        inactiveIcon: '#EBEBEB',
        primaryHover: '#006b70',
        secondary: '#ff5b60',
        secondaryHover: '#FF282F',
        yellow: '#fdb32a',
        yellowHover: '#F29E02',
        borderColor: '#dadada',
        black: '#000000',
        white: '#ffffff',
        primary: '#10ac84',
        headingColor: '#0f2137',
        quoteText: '#343d48',
        textColor: 'rgba(52, 61, 72, 0.8)',
        linkColor: '#2b9eff'
      }
      o.d(t, 'a', function () {
        return i
      })
      var i = {
        breakpoints: [480, 768, 990, 1220],
        space: [0, 5, 10, 15, 20, 25, 30, 40, 56, 71, 91],
        fontSizes: [10, 12, 14, 15, 16, 20, 24, 36, 48, 55, 60, 81],
        fontWeights: [300, 400, 500, 600, 700, 800, 900],
        lineHeights: { solid: 1, title: 1.25, copy: 1.5 },
        letterSpacings: {
          normal: 'normal',
          tracked: '0.1em',
          tight: '-0.05em',
          mega: '0.25em'
        },
        fonts: { roboto: '"Roboto", sans-serif' },
        borders: [0, '1px solid', '2px solid', '4px solid'],
        radius: [0, 3, 5, 10, 15, 20, 25, 50, 60, '50%'],
        colors: n,
        colorStyles: {
          primary: {
            color: n.primary,
            borderColor: n.primary,
            '&:hover': { color: n.primaryHover, borderColor: n.primaryHover }
          },
          secondary: {
            color: n.secondary,
            borderColor: n.secondary,
            '&:hover': {
              color: n.secondaryHover,
              borderColor: n.secondaryHover
            }
          },
          warning: {
            color: n.yellow,
            borderColor: n.yellow,
            '&:hover': { color: n.yellowHover, borderColor: n.yellowHover }
          },
          error: {
            color: n.secondaryHover,
            borderColor: n.secondaryHover,
            '&:hover': { color: n.secondary, borderColor: n.secondary }
          },
          primaryWithBg: {
            color: n.white,
            backgroundColor: n.primary,
            borderColor: n.primary,
            '&:hover': {
              backgroundColor: n.primaryHover,
              borderColor: n.primaryHover
            }
          },
          secondaryWithBg: {
            color: n.white,
            backgroundColor: n.secondary,
            borderColor: n.secondary,
            '&:hover': {
              backgroundColor: n.secondaryHover,
              borderColor: n.secondaryHover
            }
          },
          warningWithBg: {
            color: n.white,
            backgroundColor: n.yellow,
            borderColor: n.yellow,
            '&:hover': {
              backgroundColor: n.yellowHover,
              borderColor: n.yellowHover
            }
          },
          errorWithBg: {
            color: n.white,
            backgroundColor: n.secondaryHover,
            borderColor: n.secondaryHover,
            '&:hover': {
              backgroundColor: n.secondary,
              borderColor: n.secondary
            }
          }
        },
        buttonStyles: {
          textButton: {
            border: 0,
            color: n.primary,
            padding: 0,
            height: 'auto',
            backgroundColor: ''.concat(n.transparent)
          },
          outlined: {
            borderWidth: '1px',
            borderStyle: 'solid',
            backgroundColor: n.transparent
          },
          fab: {
            border: '0',
            width: '40px',
            height: '40px',
            padding: 0,
            borderRadius: '50%',
            justifyContent: 'center',
            'span.btn-icon': { paddingLeft: 0 }
          },
          extendedFab: {
            border: '0',
            minWidth: '50px',
            height: '40px',
            borderRadius: '50px',
            justifyContent: 'center'
          }
        }
      }
    }
  }
])
