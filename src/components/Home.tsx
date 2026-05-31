import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../data/courses";
import { FlaskConical, BookMarked, Menu } from "lucide-react";
import { useSidebar } from "./Layout";

export function Home() {
  const { isMobile, toggle } = useSidebar();

  return (
    <>
      {/* ── PAGE HEADER ───────────────────────────────────────── */}
      <div style={{
        padding: isMobile ? "0.7rem 1rem" : "1rem 1.5rem 0.85rem",
        borderBottom: "2px solid #1B1B1B",
        background: "#FEFEFE",
        flexShrink: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "0.6rem",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          {isMobile && (
            <button
              onClick={toggle}
              style={{
                background: "#3E2723",
                border: "2px solid #1B1B1B",
                color: "#D7CCC8",
                cursor: "pointer",
                padding: "0.3rem",
                display: "flex",
                alignItems: "center",
                flexShrink: 0,
              }}
              aria-label="Open menu"
            >
              <Menu size={16} />
            </button>
          )}
          <div>
            <div style={{
              fontSize: "0.62rem",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              color: "#795548",
              fontWeight: 800,
              marginBottom: "0.15rem",
              fontFamily: "Courier New, monospace",
            }}>
              ENSNN · Semiconductor Physics
            </div>
            <h2 style={{
              fontSize: isMobile ? "1.05rem" : "1.3rem",
              fontWeight: 900,
              color: "#1B1B1B",
              margin: 0,
              letterSpacing: "-0.3px",
            }}>
              Course Overview
            </h2>
          </div>
        </div>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "0.4rem",
          background: "#3E2723",
          color: "#D7CCC8",
          padding: "0.35rem 0.75rem",
          fontSize: "0.7rem",
          fontFamily: "Courier New, monospace",
          fontWeight: 700,
          letterSpacing: "0.5px",
          border: "2px solid #1B1B1B",
        }}>
          <FlaskConical size={13} />
          7 Modules
        </div>
      </div>

      {/* ── SCROLLABLE BODY ───────────────────────────────────── */}
      <div style={{ flex: 1, overflowY: "auto", padding: isMobile ? "0.75rem" : "1.2rem 1.5rem" }}>

        {/* Welcome card */}
        <div className="home-welcome-card" style={{
          background: "#3E2723",
          border: "2px solid #1B1B1B",
          boxShadow: "5px 5px 0 #1B1B1B",
          padding: "1.2rem 1.4rem",
          marginBottom: "1.4rem",
          display: "flex",
          gap: "1rem",
          alignItems: "flex-start",
        }}>
          <div style={{
            background: "#795548",
            padding: "0.6rem",
            border: "1px solid rgba(215,204,200,0.3)",
            flexShrink: 0,
          }}>
            <BookMarked size={22} color="#FDF8F6" />
          </div>
          <div>
            <div style={{
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              fontSize: "0.95rem",
              fontWeight: 700,
              color: "#FDF8F6",
              marginBottom: "0.5rem",
              borderBottom: "1px solid rgba(215,204,200,0.2)",
              paddingBottom: "0.4rem",
            }}>
              Biri3ayat Layali Ra3d — Feynman Method
            </div>
            <p style={{
              fontSize: "0.82rem",
              lineHeight: 1.75,
              color: "rgba(215,204,200,0.85)",
              margin: 0,
            }}>
              Every concept explained from <strong style={{ color: "#FDF8F6" }}>absolute zero</strong> — no prior knowledge assumed.
              Includes band diagrams, interactive graphs, a complete law-summary table, and every
              TD exercise solved step-by-step from the actual problem sheets.
              Click any chapter to dive in.
            </p>
          </div>
        </div>

        {/* Course grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "1rem",
        }}>
          {courses.map((course, idx) => {
            const num = String(idx + 1).padStart(2, "0");
            return (
              <Link key={course.id} to={`/course/${course.id}`} className="course-card">
                <div className="course-card-title">
                  <span className="course-card-num">{num}</span>
                  {course.title.replace(/^\d+\.\s*/, "")}
                </div>
                <p className="course-card-desc">{course.description}</p>
              </Link>
            );
          })}
        </div>

        {/* Bottom note */}
        <div style={{
          marginTop: "1.4rem",
          padding: "0.7rem 1rem",
          background: "#FEFEFE",
          border: "1px solid #D7CCC8",
          borderLeft: "3px solid #795548",
          fontSize: "0.72rem",
          color: "#795548",
          fontFamily: "Courier New, monospace",
          lineHeight: 1.6,
        }}>
          <strong>Tip:</strong> Each chapter contains interactive Recharts graphs, energy band SVG diagrams,
          complete law-summary tables, and fully worked TD exercises — all in one place.
        </div>
      </div>
    </>
  );
}
