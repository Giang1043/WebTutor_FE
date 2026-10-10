import { Link, Route, Routes } from "react-router-dom";
import { AdminPage, ClassesPage, HomePage, LoginPage, RegisterPage, TutorsPage } from "./pages";

const App = () => (
  <div className="app-shell">
    <header className="site-header">
      <Link className="brand" to="/">WebTutorCenter</Link>
      <nav aria-label="Main navigation">
        <Link to="/classes">Lớp học</Link>
        <Link to="/tutors">Gia sư</Link>
        <Link to="/login">Đăng nhập</Link>
        <Link className="button button-small" to="/register">Đăng ký</Link>
      </nav>
    </header>
    <main className="page-container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="/tutors" element={<TutorsPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </main>
  </div>
);

export default App;
