import m from "mithril"

var Link = {
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

    attrs.onclick = this.scrollToTop
    attrs.oncreate = m.route.link

    return <a {...attrs}>{vnode.children}</a>
  }
}

export default Link
