import m from "mithril"

var Home = {
  view() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid text-center">
          <div className="container fancy">
            <h1 className="display-4">Single Page App is the future</h1>
            <p className="lead text-muted">
              Create web apps using Mithril and Twitter Bootstrap easily
            </p>
            <p>
              <a
                target="_blank"
                href="https://github.com/mikejav/mithril-starter#readme"
                className="btn btn-outline-success btn-lg"
              >
                See readme
              </a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
