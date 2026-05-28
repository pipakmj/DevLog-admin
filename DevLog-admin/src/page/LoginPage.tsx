import type { FormEvent } from "react"
import { useNavigate } from "react-router-dom"

function LoginPage() {
  const navigate = useNavigate()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    localStorage.setItem("admin-accessToken", "demo-admin-token")
    navigate("/dashboard")
  }

  return (
    <main className="login-page">
      <section className="login-panel" aria-labelledby="login-title">
        <div className="login-copy">
          <span className="brand-mark">D</span>
          <span className="eyebrow">DevLog Admin</span>
          <h1 id="login-title">Sign in to manage DevLog</h1>
          <p>Review posts, members, comments, and publishing status from one console.</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <label>
            Email
            <input type="email" placeholder="admin@devlog.com" required />
          </label>
          <label>
            Password
            <input type="password" placeholder="Enter password" required />
          </label>
          <div className="form-row">
            <label className="checkbox-label">
              <input type="checkbox" />
              Remember me
            </label>
            <button className="text-button" type="button">Reset password</button>
          </div>
          <button className="primary-button full-width" type="submit">
            Sign in
          </button>
        </form>
      </section>
    </main>
  )
}

export default LoginPage
