import React, { useRef, useState } from "react";
import { useParams, Navigate, Link, useNavigate } from "react-router-dom";
import { courses } from "../data/courses";
import { MarkdownRenderer } from "./MarkdownRenderer";
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";

export function CoursePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement>(null);

  const idx = courses.findIndex((c) => c.id === id);
  if (idx === -1) return <Navigate to="/" replace />;

  const course  = courses[idx];
  const prev    = idx > 0 ? courses[idx - 1] : null;
  const next    = idx < courses.length - 1 ? courses[idx + 1] : null;

  return (
    <>
      {/* ── HEADER ──────────────────────────────────────────── */}
      <div style={{
        padding: "0.85rem 1.5rem",
        borderBottom: "2px solid #1B1B1B",
        background: "#FEFEFE",
        flexShrink: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "1rem",
      }}>
        {/* Left: back + title */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", minWidth: 0 }}>
          <Link to="/" style={{
            display: "flex",
            alignItems: "center",
            gap: "0.3rem",
            background: "#3E2723",
            color: "#D7CCC8",
            padding: "0.3rem 0.65rem",
            fontSize: "0.68rem",
            fontFamily: "Courier New, monospace",
            fontWeight: 700,
            letterSpacing: "0.5px",
            border: "2px solid #1B1B1B",
            textDecoration: "none",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}>
            <ArrowLeft size={11} />
            HOME
          </Link>
          <div style={{ minWidth: 0 }}>
            <div style={{
              fontSize: "0.6rem",
              textTransform: "uppercase",
              letterSpacing: "1.2px",
              color: "#795548",
              fontWeight: 800,
              fontFamily: "Courier New, monospace",
              marginBottom: "0.1rem",
            }}>
              Chapter {idx + 1} of {courses.length}
            </div>
            <h2 style={{
              fontSize: "1.05rem",
              fontWeight: 900,
              color: "#1B1B1B",
              margin: 0,
              letterSpacing: "-0.2px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}>
              {course.title}
            </h2>
          </div>
        </div>

        {/* Right: prev / next */}
        <div style={{ display: "flex", gap: "0.4rem", flexShrink: 0 }}>
          <button
            onClick={() => prev && navigate(`/course/${prev.id}`)}
            disabled={!prev}
            title={prev ? `← ${prev.title}` : undefined}
            style={{
              display: "flex", alignItems: "center", gap: "0.3rem",
              padding: "0.3rem 0.6rem",
              fontSize: "0.68rem",
              fontFamily: "Courier New, monospace",
              fontWeight: 700,
              background: prev ? "#D7CCC8" : "#F0EBE8",
              color: prev ? "#3E2723" : "#B0A09A",
              border: "2px solid #1B1B1B",
              cursor: prev ? "pointer" : "not-allowed",
              letterSpacing: "0.3px",
            }}
          >
            <ChevronLeft size={12} /> PREV
          </button>
          <button
            onClick={() => next && navigate(`/course/${next.id}`)}
            disabled={!next}
            title={next ? `→ ${next.title}` : undefined}
            style={{
              display: "flex", alignItems: "center", gap: "0.3rem",
              padding: "0.3rem 0.6rem",
              fontSize: "0.68rem",
              fontFamily: "Courier New, monospace",
              fontWeight: 700,
              background: next ? "#3E2723" : "#F0EBE8",
              color: next ? "#FDF8F6" : "#B0A09A",
              border: "2px solid #1B1B1B",
              cursor: next ? "pointer" : "not-allowed",
              letterSpacing: "0.3px",
            }}
          >
            NEXT <ChevronRight size={12} />
          </button>
        </div>
      </div>

      {/* ── DESCRIPTION STRIP ───────────────────────────────── */}
      <div style={{
        padding: "0.55rem 1.5rem",
        background: "#F5F0EE",
        borderBottom: "1px solid #D7CCC8",
        flexShrink: 0,
        fontSize: "0.78rem",
        fontStyle: "italic",
        color: "#795548",
        lineHeight: 1.5,
      }}>
        {course.description}
      </div>

      {/* ── CONTENT ─────────────────────────────────────────── */}
      <div
        ref={contentRef}
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "1.5rem",
        }}
      >
        <div style={{
          background: "#FEFEFE",
          border: "2px solid #1B1B1B",
          boxShadow: "5px 5px 0 #1B1B1B",
          padding: "1.8rem 2rem",
          maxWidth: "860px",
          margin: "0 auto",
        }}>
          <MarkdownRenderer content={course.content} />
        </div>

        {/* ── BOTTOM NAVIGATION ──────────────────────────────── */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "1rem",
          marginTop: "1.2rem",
          maxWidth: "860px",
          margin: "1.2rem auto 0",
        }}>
          {prev ? (
            <Link to={`/course/${prev.id}`} style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "0.7rem 1rem",
              background: "#FEFEFE",
              border: "2px solid #1B1B1B",
              textDecoration: "none",
              color: "#3E2723",
              fontSize: "0.75rem",
              fontWeight: 700,
              transition: "transform 0.1s, box-shadow 0.1s",
              boxShadow: "3px 3px 0 #1B1B1B",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translate(-1px,-1px)"; (e.currentTarget as HTMLElement).style.boxShadow = "4px 4px 0 #1B1B1B"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = "3px 3px 0 #1B1B1B"; }}
            >
              <ChevronLeft size={14} />
              <div>
                <div style={{ fontSize: "0.6rem", color: "#795548", textTransform: "uppercase", letterSpacing: "0.8px", fontFamily: "Courier New, monospace" }}>Previous</div>
                <div>{prev.title}</div>
              </div>
            </Link>
          ) : <div style={{ flex: 1 }} />}

          {next ? (
            <Link to={`/course/${next.id}`} style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "0.6rem",
              padding: "0.7rem 1rem",
              background: "#3E2723",
              border: "2px solid #1B1B1B",
              textDecoration: "none",
              color: "#FDF8F6",
              fontSize: "0.75rem",
              fontWeight: 700,
              textAlign: "right",
              transition: "transform 0.1s, box-shadow 0.1s",
              boxShadow: "3px 3px 0 #1B1B1B",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translate(-1px,-1px)"; (e.currentTarget as HTMLElement).style.boxShadow = "4px 4px 0 #1B1B1B"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = "3px 3px 0 #1B1B1B"; }}
            >
              <div>
                <div style={{ fontSize: "0.6rem", color: "rgba(215,204,200,0.6)", textTransform: "uppercase", letterSpacing: "0.8px", fontFamily: "Courier New, monospace" }}>Next</div>
                <div>{next.title}</div>
              </div>
              <ChevronRight size={14} />
            </Link>
          ) : <div style={{ flex: 1 }} />}
        </div>
      </div>
    </>
  );
}
