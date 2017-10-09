import m from "mithril"
import { routes, generate } from "routes/routes"

// Syles will be extracted to external .css file automatically
import "styles/main.scss"


var routes_values = Object.values(routes)
var r = {}

for (var i = 0; i < routes_values.length; i++) {
    r[routes_values[i].path] = {render: routes_values[i].render}
}

m.route.prefix("")
m.route(document.getElementById("app"), "/", r)
