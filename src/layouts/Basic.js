import m from "mithril"
import NavLink from "components/NavLink";
import Link from "components/Link";

export class Basic {
  constructor() {
    this.isScrolled = false
    this.menuCollapsed = false

    this.view = this.view.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
    this.collapseMenu = this.collapseMenu.bind(this)

    window.onscroll = this.handleScroll
  }

  handleScroll() {
    if (window.pageYOffset === 0) {
      if (this.isScrolled === true) {
        this.isScrolled = false
        m.redraw()
      }
    } else {
      if (this.isScrolled === false) {
        this.isScrolled = true
        m.redraw()
      }
    }
  }

  collapseMenu() {
    this.menuCollapsed = !this.menuCollapsed
  }

  view(vnode) {
    return (
      <div>
        <div className={"navbar navbar-expand-md navbar-dark fixed-top bg-success" + (this.isScrolled ? " scrolled" : "")} key={"navbar"}>
          <div className="container">
            <Link to="/" className="navbar-brand">Logo</Link>

            <button className="navbar-toggler" onclick={this.collapseMenu}>
              <span className="navbar-toggler-icon"> </span>
            </button>

            <div className={"collapse navbar-collapse" + (this.menuCollapsed ? " show" : "")}>
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
