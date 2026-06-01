import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { logIn } from "../api/authApi";

const ACCESS_TOKEN_KEY = "admin-accessToken";
const ROLE_KEY = "admin-role";
const ADMIN_ROLE = "ROLE_ADMIN";

const getErrorStatus = (error: unknown) => {
  if (error && typeof error === "object" && "response" in error) {
    return (error as { response?: { status?: number } }).response?.status;
  }

  return undefined;
}

function LoginPage() {
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate()

  const clearAdminAuth = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(ROLE_KEY);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true);
    setErrorMsg("");

    try {
      const res = await logIn({
        email: adminEmail,
        password: adminPassword
      })
      const accessToken = res.data?.data?.accessToken;
      const role = res.data?.data?.role;

      if (!accessToken || !role) {
        setErrorMsg("로그인 응답이 올바르지 않습니다. 다시 시도해 주세요.");
        clearAdminAuth();
        return;
      }

      if (role === ADMIN_ROLE) {
        localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
        localStorage.setItem(ROLE_KEY, role);
        navigate("/dashboard")
      } else {
        setErrorMsg("관리자 권한이 없습니다.");
        clearAdminAuth();
      }
    } catch (error) {
      console.error(error);
      const status = getErrorStatus(error);
      setErrorMsg(status === 403 ? "관리자 권한이 없습니다." : "로그인 중 오류가 발생했습니다.");
      clearAdminAuth();
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="login-page">
      <section className="login-panel" aria-labelledby="login-title">
        <div className="login-copy">
          <span className="brand-mark">D</span>
          <span className="eyebrow">DevLog Admin</span>
          <h1 id="login-title">DevLog <br /> 관리자 로그인</h1>
          <p>Review posts, members, comments, and publishing status from one console.</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <label>
            Email
            <input type="email" placeholder="admin@devlog.com" onChange={(e) => setAdminEmail(e.target.value)} required />
          </label>
          <label>
            Password
            <input type="password" placeholder="Enter password" onChange={(e) => setAdminPassword(e.target.value)} required />
          </label>
          {errorMsg && <p className="error-message" style={{ color: '#ef4444', fontSize: '14px', fontWeight: 'bold' }}>{errorMsg}</p>}
          <button className="primary-button full-width" type="submit" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </section>
    </main>
  )
}

export default LoginPage
