import m from "mithril"

// TODO: move this to oninit lifecycle method
var dataStore = {
    scrolled: false
}

export var main = {
    onscrollEvent(e) {
        if (e.srcElement.scrollTop > 0) {
            this.scrolled = true
            dataStore.scrolled = true
        } else {
            this.scrolled = false
            dataStore.scrolled = false
        }
    },

    onRemoveEvent() {
        dataStore.scrolled = false
    },

    view: function (vnode) {
        return [
            m("header#header", { class: dataStore.scrolled ? "shadow" : "", key: "header" },
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
                {
                    onscroll: this.onscrollEvent,
                    onremove: this.onRemoveEvent
                },
                m(".container", vnode.children)
            )
        ]
    }
}
