import { routes } from "routes/routes"

// generate routes from given routeName and optional parameters
export function generate(routeName, args) {
    var generated = routes[routeName].path

    // code inside this if statement is development only
    // and will not be generated in production bundle
    if (process.env.NODE_ENV === 'development') {
        if (typeof args === 'undefined') {
            if (generated.indexOf(":") > 0)
                throw Error('generate fo route "' + routeName + '" require parameters')
        }

        if (typeof args !== 'undefined'
            && typeof Object.keys(args).length !== 'undefined'
            && Object.keys(args).length != (generated.match(/\:/g) || []).length
        ) {
            throw Error('Different number of arguments. Route "' + routeName + '" require ' + ((generated.match(/\:/g) || []).length) + ' parameners. Given ' + (Object.keys(args).length || 0))
        }
    }

    for (var key in args) {
        generated = generated.replace(":" + key, args[key])
    }

    return generated
}
