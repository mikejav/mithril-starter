import m from "mithril"

window.onscroll = () => {
    if (window.pageYOffset == 0) {
        document.body.classList.remove('scrolled')
    } else {
        document.body.classList.add("scrolled")
    }
}

var menuCollapsed = 0

export var main = {

    scrollToTop() {
        window.scrollTo(0, 0)
    },

    collapseMenu() {
        menuCollapsed = !menuCollapsed
    },

    view(vnode) {
        return [
            m("nav.navbar.navbar-expand-md.navbar-dark.fixed-top.bg-success", { key: "navbar" },
                m(".container",
                    m("a.navbar-brand", { href: "/", oncreate: m.route.link }, "Logo"),
                    m("button.navbar-toggler",
                        { onclick: this.collapseMenu },
                        m("span.navbar-toggler-icon")
                    ),
                    m("div.collapse.navbar-collapse", { class: menuCollapsed ? "show" : "" },
                        m("ul.navbar-nav.ml-auto",
                            m("li.nav-item", { class: m.route.get() == "/" ? "active" : "" },
                                m("a.nav-link", { href: "/", oncreate: m.route.link }, "Home")
                            ),
                            m("li.nav-item", { class: m.route.get() == "/lorem-ipsum" ? "active" : "" },
                                m("a.nav-link", { href: "/lorem-ipsum", oncreate: m.route.link }, "Lorem")
                            ),
                        )
                    )
                )
            ),

            // router outlet
            m("main#main", { onupdate: this.scrollToTop },
                vnode.children
            )
        ]
    }
}
