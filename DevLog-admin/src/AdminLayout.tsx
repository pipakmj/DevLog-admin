import { NavLink, Outlet } from "react-router-dom"

const menuItems = [
  { to: "/dashboard", label: "Dashboard" },
  { to: "/dashboard", label: "Posts" },
  { to: "/dashboard", label: "Members" },
  { to: "/dashboard", label: "Comments" },
]

function AdminLayout() {
  return (
    <div className="admin-shell">
      <aside className="admin-sidebar" aria-label="Admin navigation">
        <div className="brand">
          <span className="brand-mark">D</span>
          <div>
            <strong>DevLog</strong>
            <span>Admin</span>
          </div>
        </div>

        <nav className="side-nav">
          {menuItems.map((item) => (
            <NavLink key={item.label} to={item.to} end={item.label === "Dashboard"}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="admin-frame">
        <header className="admin-topbar">
          <div>
            <span className="eyebrow">Admin Console</span>
            <h1>DevLog Management</h1>
          </div>
          <button className="ghost-button" type="button">
            Preview site
          </button>
        </header>

        <main className="admin-content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
