import { useState, useEffect, createContext, useContext } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { BookOpen, Menu, X } from "lucide-react";
import { courses } from "../data/courses";

/* ── Context so CoursePage / Home can render the hamburger ──────── */
interface SidebarCtx { isMobile: boolean; open: boolean; toggle: () => void; }
export const SidebarContext = createContext<SidebarCtx>({ isMobile: false, open: true, toggle: () => {} });
export function useSidebar() { return useContext(SidebarContext); }

export function Layout() {
  const location  = useLocation();
  const [open,      setOpen]      = useState(false);
  const [isMobile,  setIsMobile]  = useState(() => window.matchMedia("(max-width: 767px)").matches);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handler = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
      if (!e.matches) setOpen(false); // close drawer when going to desktop
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // close drawer on route change (mobile)
  useEffect(() => { if (isMobile) setOpen(false); }, [location.pathname]);

  const toggle = () => setOpen(v => !v);

  return (
    <SidebarContext.Provider value={{ isMobile, open, toggle }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "256px 1fr",
        height: "100vh",
        background: "#D7CCC8",
        fontFamily: "Helvetica Neue, Arial, sans-serif",
        overflow: "hidden",
      }}>

        {/* ── BACKDROP (mobile only) ──────────────────────── */}
        {isMobile && open && (
          <div
            onClick={toggle}
            style={{
              position: "fixed", inset: 0,
              background: "rgba(0,0,0,0.45)",
              zIndex: 40,
            }}
          />
        )}

        {/* ── SIDEBAR ─────────────────────────────────────── */}
        <aside style={{
          background: "#3E2723",
          color: "#FDF8F6",
          display: "flex",
          flexDirection: "column",
          borderRight: "3px solid #1B1B1B",
          overflowY: "auto",
          /* mobile: slide-in drawer */
          ...(isMobile ? {
            position: "fixed",
            top: 0, left: 0,
            height: "100vh",
            width: "260px",
            zIndex: 50,
            transform: open ? "translateX(0)" : "translateX(-100%)",
            transition: "transform 0.24s cubic-bezier(.4,0,.2,1)",
          } : {}),
        }}>
          {/* Logo / brand */}
          <div style={{
            padding: "1.1rem 1rem 1rem",
            borderBottom: "2px solid rgba(215,204,200,0.2)",
            marginBottom: "0.5rem",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}>
            <div>
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

            {/* Close button — mobile only */}
            {isMobile && (
              <button
                onClick={toggle}
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: "rgba(215,204,200,0.7)",
                  padding: "2px",
                  marginTop: "2px",
                  flexShrink: 0,
                }}
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            )}
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

        {/* ── MAIN CONTENT ────────────────────────────────── */}
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
    </SidebarContext.Provider>
  );
}
