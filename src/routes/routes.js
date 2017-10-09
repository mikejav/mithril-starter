import m from "mithril"

import { main } from "layouts/main"
import Home from "controllers/home"
import Lorem from "controllers/lorem"

export { generate } from "routes/generate"

export var routes = {
    'index': {
        path: '/',
        render: () => {
            return m(main, m(Home))
        }
    },
    'lorem': {
        path: '/lorem-ipsum',
        render: () => {
            return m(main, m(Lorem))
        }
    }
}
