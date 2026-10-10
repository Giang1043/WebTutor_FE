import { Link } from "react-router-dom";

const PageTitle = ({ eyebrow, title, description }) => (
  <div className="page-title">
    <p className="eyebrow">{eyebrow}</p>
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
);

export const HomePage = () => (
  <section className="hero">
    <div>
      <p className="eyebrow">Nền tảng kết nối gia sư</p>
      <h1>Tìm đúng gia sư cho mục tiêu học tập của bạn.</h1>
      <p className="hero-copy">Wireframe tuần 1: người học tìm gia sư, gia sư tìm lớp và trung tâm quản lý mọi kết nối.</p>
      <div className="actions">
        <Link className="button" to="/tutors">Tìm gia sư</Link>
        <Link className="button button-secondary" to="/classes">Xem lớp đang tuyển</Link>
      </div>
    </div>
    <div className="hero-card">
      <span className="status-dot" />
      <strong>Tuần 1 — Foundation</strong>
      <p>Frontend scaffold đã sẵn sàng để kết nối API từ tuần 3.</p>
    </div>
  </section>
);

export const LoginPage = () => (
  <section className="form-card">
    <PageTitle eyebrow="Authentication" title="Đăng nhập" description="Wireframe cho màn hình đăng nhập sẽ được nối API ở tuần 4." />
    <label>Email<input type="email" placeholder="you@example.com" /></label>
    <label>Mật khẩu<input type="password" placeholder="••••••••" /></label>
    <button className="button" type="button">Đăng nhập</button>
  </section>
);

export const RegisterPage = () => (
  <section className="form-card">
    <PageTitle eyebrow="Authentication" title="Tạo tài khoản" description="Form này sẽ nối POST /api/auth/register ở tuần 3." />
    <label>Họ và tên<input placeholder="Nguyễn Văn A" /></label>
    <label>Email<input type="email" placeholder="you@example.com" /></label>
    <label>Mật khẩu<input type="password" placeholder="Tối thiểu 10 ký tự" /></label>
    <button className="button" type="button">Tiếp tục xác thực email</button>
  </section>
);

export const ClassesPage = () => (
  <section>
    <PageTitle eyebrow="Class marketplace" title="Lớp học đang tuyển" description="Wireframe danh sách lớp; API classes sẽ triển khai từ tuần 7." />
    <div className="card-grid">
      {["Toán lớp 9 — Quận 1", "Tiếng Anh giao tiếp — Bình Thạnh", "Lập trình cơ bản — Thủ Đức"].map((item) => (
        <article className="card" key={item}><span className="tag">Đang tuyển</span><h2>{item}</h2><p>Thông tin ngân sách, lịch học và yêu cầu tutor sẽ hiển thị ở đây.</p></article>
      ))}
    </div>
  </section>
);

export const TutorsPage = () => (
  <section>
    <PageTitle eyebrow="Tutor marketplace" title="Tìm gia sư" description="Wireframe danh sách gia sư; API tutors sẽ triển khai từ tuần 5." />
    <div className="card-grid">
      {["Gia sư Toán", "Gia sư Tiếng Anh", "Gia sư Lập trình"].map((item) => (
        <article className="card" key={item}><div className="avatar">WT</div><h2>{item}</h2><p>Môn học, trình độ, khu vực và lịch dạy sẽ hiển thị ở đây.</p></article>
      ))}
    </div>
  </section>
);

export const AdminPage = () => (
  <section>
    <PageTitle eyebrow="Administration" title="Bảng điều khiển quản trị" description="Wireframe admin; API và phân quyền sẽ triển khai sau khi domain chính ổn định." />
    <div className="stats-grid"><div className="stat"><strong>—</strong><span>Người dùng</span></div><div className="stat"><strong>—</strong><span>Gia sư chờ duyệt</span></div><div className="stat"><strong>—</strong><span>Lớp đang tuyển</span></div></div>
  </section>
);
