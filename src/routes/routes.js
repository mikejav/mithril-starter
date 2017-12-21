import m from "mithril"

import { Basic } from "layouts/Basic"
import Home from "controllers/home"
import Lorem from "controllers/lorem"

export { generate } from "routes/generate"

export var routes = {
    'index': {
        path: '/',
        render: () => {
            return m(Basic, m(Home))
        }
    },
    'lorem': {
        path: '/lorem-ipsum',
        render: () => {
            return m(Basic, m(Lorem))
        }
    }
}
