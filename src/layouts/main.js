import m from "mithril"

window.onscroll = function () {
    if (window.pageYOffset == 0) {
        document.body.classList.remove('scrolled')
    } else {
        document.body.classList.add("scrolled")
    }
}

export var main = {
    view: function (vnode) {
        return [
            m("header#header", { key: "header" },
                m(".container",
                    m("a.logo", { href: "/", oncreate: m.route.link }, "LOGO"),
                    m("nav.navlinks",
                        m("ul",
                            m("li", { class: m.route.get() == "/" ? "active" : "" },
                                m("a", { href: "/", oncreate: m.route.link }, "INDEX")
                            ),
                            m("li", { class: m.route.get() == "/about" ? "active" : "" },
                                m("a", { href: "/about", oncreate: m.route.link }, "ABOUT")
                            ),
                        )
                    )
                )
            ),

            // router outlet
            m("main#main",
                m(".container", vnode.children)
            )
        ]
    }
}
