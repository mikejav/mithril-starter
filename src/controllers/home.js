import m from "mithril"

var Home = {
    view() {
        return m(".jumbotron.jumbotron-fluid.text-center",
            m(".container.fancy",
                m("h1.display-4", "Single Page Apps is the future"),
                m("p.lead.text-muted", "Create web apps using Mithril and Twitter Bootstrap easily"),
                m("p",
                    m("a.btn.btn-outline-success.btn-lg[href=https://github.com/mikejav/mithril-starter#readme][target=_blank]", "See readme"),
                )
            )
        )
    }
}

export default Home
