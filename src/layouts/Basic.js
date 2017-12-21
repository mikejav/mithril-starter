import m from "mithril"
import NavLink from "components/NavLink";
import Link from "components/Link";

window.onscroll = () => {
  if (window.pageYOffset === 0) {
    document.body.classList.remove('scrolled')
  } else {
    document.body.classList.add("scrolled")
  }
}

var menuCollapsed = 0

export var Basic = {
  collapseMenu() {
    menuCollapsed = !menuCollapsed
  },

  view(vnode) {
    return (
      <div>
        <div className="navbar navbar-expand-md navbar-dark fixed-top bg-success" key={"navbar"}>
          <div className="container">
            <Link href="/" className="navbar-brand">Logo</Link>

            <button className="navbar-toggler" onclick={this.collapseMenu}>
              <span className="navbar-toggler-icon"> </span>
            </button>

            <div className={"collapse navbar-collapse" + (menuCollapsed ? " show" : "")}>
              <ul className="navbar-nav ml-auto">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/lorem-ipsum">Lorem</NavLink>
              </ul>
            </div>
          </div>
        </div>
        <main id="main">{vnode.children}</main>
      </div>
    )
  }
}
