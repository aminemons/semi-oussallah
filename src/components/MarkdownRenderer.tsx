import React from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import { ChartRenderer } from "./ChartRenderer";

interface Props { content: string }

// Custom renderers for code blocks
const codeBlock = ({ className, children }: any) => {
  const lang = (className ?? "").replace("language-", "").trim();
  const raw = String(children).replace(/\n$/, "");

  // ── Chart blocks ──────────────────────────────
  if (lang === "chart") {
    return <ChartRenderer raw={raw} />;
  }

  // ── Diagram / ASCII art blocks ─────────────────
  if (lang === "diagram" || lang === "ascii" || lang === "") {
    return (
      <pre className="ascii-diagram">
        <code>{raw}</code>
      </pre>
    );
  }

  // ── Regular code blocks ────────────────────────
  return (
    <pre className="code-block">
      {lang && <div className="code-lang-badge">{lang}</div>}
      <code>{raw}</code>
    </pre>
  );
};

// Better blockquote — styled as "insight box"
const blockquote = ({ children }: any) => (
  <blockquote className="insight-box">{children}</blockquote>
);

// Better table
const table = ({ children }: any) => (
  <div className="table-wrap">
    <table>{children}</table>
  </div>
);

// Better inline code
const InlineCode = ({ children }: any) => (
  <code className="inline-code">{children}</code>
);

// Horizontal rule → styled section divider
const hr = () => <div className="section-divider" />;

const components: any = {
  code: ({ node, inline, className, children, ...props }: any) => {
    if (inline) return <InlineCode>{children}</InlineCode>;
    return codeBlock({ className, children });
  },
  blockquote,
  table,
  hr,
};

export function MarkdownRenderer({ content }: Props) {
  return (
    <div className="markdown-body">
      <ReactMarkdown
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeKatex]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
