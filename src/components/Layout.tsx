import { Link, Outlet, useLocation } from "react-router-dom";
import { BookOpen } from "lucide-react";
import { courses } from "../data/courses";

export function Layout() {
  const location = useLocation();

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "256px 1fr",
      height: "100vh",
      background: "#D7CCC8",
      fontFamily: "Helvetica Neue, Arial, sans-serif",
      overflow: "hidden",
    }}>
      {/* ── SIDEBAR ─────────────────────────────────────────── */}
      <aside style={{
        background: "#3E2723",
        color: "#FDF8F6",
        display: "flex",
        flexDirection: "column",
        borderRight: "3px solid #1B1B1B",
        overflowY: "auto",
      }}>
        {/* Logo / brand */}
        <div style={{
          padding: "1.1rem 1rem 1rem",
          borderBottom: "2px solid rgba(215,204,200,0.2)",
          marginBottom: "0.5rem",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.35rem" }}>
            <div style={{
              background: "#795548",
              padding: "4px",
              border: "1px solid rgba(215,204,200,0.3)",
            }}>
              <BookOpen size={16} color="#FDF8F6" />
            </div>
            <span style={{
              fontSize: "0.72rem",
              fontWeight: 900,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#D7CCC8",
            }}>
              Semi-Oussalah
            </span>
          </div>
          <div style={{
            fontSize: "0.65rem",
            color: "rgba(215,204,200,0.5)",
            fontFamily: "Courier New, monospace",
            letterSpacing: "0.5px",
          }}>
            Biri3ayat Layali Ra3d ◆ ENSNN
          </div>
        </div>

        {/* Chapter label */}
        <div style={{
          padding: "0.3rem 1rem 0.2rem",
          fontSize: "0.6rem",
          fontFamily: "Courier New, monospace",
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          color: "rgba(215,204,200,0.45)",
        }}>
          Chapters
        </div>

        {/* Nav links */}
        <nav style={{ flex: 1, padding: "0 0.4rem" }}>
          {courses.map((course) => {
            const isActive = location.pathname === `/course/${course.id}`;
            return (
              <Link
                key={course.id}
                to={`/course/${course.id}`}
                className={`sidebar-link${isActive ? " active" : ""}`}
              >
                {course.title}
              </Link>
            );
          })}
        </nav>

      </aside>

      {/* ── MAIN CONTENT ────────────────────────────────────── */}
      <main style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
        background: "#D7CCC8",
      }}>
        <Outlet />
      </main>
    </div>
  );
}
