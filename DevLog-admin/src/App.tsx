function App() {
  return (
    <section className="dashboard-page">
      <div className="page-heading">
        <div>
          <span className="eyebrow">Overview</span>
          <h2>Dashboard</h2>
        </div>
        <button className="primary-button" type="button">
          New post
        </button>
      </div>

      <div className="metric-grid">
        <article className="metric-card">
          <span>Total posts</span>
          <strong>128</strong>
          <small>12 drafts waiting</small>
        </article>
        <article className="metric-card">
          <span>Members</span>
          <strong>2,418</strong>
          <small>36 joined this week</small>
        </article>
        <article className="metric-card">
          <span>Comments</span>
          <strong>842</strong>
          <small>18 need review</small>
        </article>
        <article className="metric-card">
          <span>Views</span>
          <strong>74.3k</strong>
          <small>8.2% from last week</small>
        </article>
      </div>

      <div className="dashboard-grid">
        <section className="panel">
          <div className="panel-header">
            <h3>Recent posts</h3>
            <button className="text-button" type="button">View all</button>
          </div>
          <div className="table-list">
            {["React Router setup", "Admin auth flow", "Vite deployment guide"].map((title, index) => (
              <div className="table-row" key={title}>
                <div>
                  <strong>{title}</strong>
                  <span>{index === 0 ? "Published" : "Draft"}</span>
                </div>
                <time>{index + 2}h ago</time>
              </div>
            ))}
          </div>
        </section>

        <section className="panel">
          <div className="panel-header">
            <h3>Review queue</h3>
            <span className="status-pill">18 pending</span>
          </div>
          <div className="queue-list">
            <label>
              <input type="checkbox" />
              Spam comments
            </label>
            <label>
              <input type="checkbox" />
              Pending member reports
            </label>
            <label>
              <input type="checkbox" />
              Broken image links
            </label>
          </div>
        </section>
      </div>
    </section>
  )
}

export default App
