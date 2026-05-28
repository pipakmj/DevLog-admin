import { Outlet } from "react-router-dom"

function AdminLayout() {
  return (
      <div>
          <aside>사이드바</aside>
          <main>
              <Outlet />
          </main>
    </div>
  )
}

export default AdminLayout