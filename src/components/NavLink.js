import m from "mithril"

var NavLink = {
  scrollToTop() {
    window.scrollTo(0, 0)
  },

  oncreate(vnode) {
    vnode.dom.addEventListener("click", this.scrollToTop)
  },

  view(vnode) {
    let attrs = vnode.attrs

    attrs.href = vnode.attrs.to
    attrs.to = undefined

    attrs.oncreate = m.route.link

    attrs.className = "nav-link"

    return (
      <li className={"nav-item" + (m.route.get() === attrs.href ? " active" : "")}>
        <a {...attrs}>{vnode.children}</a>
      </li>
    )
  }
}

export default NavLink
