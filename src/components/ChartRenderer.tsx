import React, { useMemo } from "react";
import {
  LineChart, Line, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, ReferenceLine, Label
} from "recharts";

// ─────────────────────────────────────────────
// Colour palette (earthy / dark-academic)
// ─────────────────────────────────────────────
const C = {
  primary:   "#795548",   // brown-medium
  secondary: "#3E2723",   // brown-dark
  accent:    "#BF360C",   // deep orange
  green:     "#2E7D32",
  blue:      "#1565C0",
  purple:    "#6A1B9A",
  gold:      "#F57F17",
  text:      "#1B1B1B",
  gridLine:  "#D7CCC8",
  bg:        "#FDF8F6",
};

// ─────────────────────────────────────────────
// Tooltip styles
// ─────────────────────────────────────────────
const tooltipStyle = {
  backgroundColor: "#3E2723",
  border: "2px solid #1B1B1B",
  borderRadius: 0,
  color: "#FFFFFF",
  fontSize: 12,
  fontFamily: "Courier New, monospace",
};

// ─────────────────────────────────────────────
// Axis label style
// ─────────────────────────────────────────────
const axisStyle = { fontSize: 11, fontFamily: "Courier New, monospace", fill: "#3E2723" };

// ─────────────────────────────────────────────
// Shared wrapper
// ─────────────────────────────────────────────
function ChartWrap({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="chart-wrap">
      {title && <div className="chart-title">{title}</div>}
      <div className="chart-inner">
        {children}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// 1. FERMI-DIRAC DISTRIBUTION
// ─────────────────────────────────────────────
function FermiDiracChart({ cfg }: { cfg: any }) {
  const k = 8.617e-5; // eV/K
  const EF = cfg.EF ?? 0;
  const temps: number[] = cfg.temps ?? [0, 300, 600];
  const colors = [C.secondary, C.primary, C.accent, C.blue];

  const data = useMemo(() => {
    const pts = [];
    for (let E = EF - 0.3; E <= EF + 0.3; E += 0.006) {
      const row: any = { E: parseFloat(E.toFixed(4)) };
      temps.forEach((T, i) => {
        if (T === 0) {
          row[`T${i}`] = E < EF ? 1 : E === EF ? 0.5 : 0;
        } else {
          row[`T${i}`] = 1 / (1 + Math.exp((E - EF) / (k * T)));
        }
      });
      pts.push(row);
    }
    return pts;
  }, [temps, EF]);

  return (
    <ChartWrap title={cfg.title ?? "Fermi-Dirac Distribution f(E)"}>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data} margin={{ top: 10, right: 20, left: 20, bottom: 30 }}>
          <CartesianGrid stroke={C.gridLine} strokeDasharray="3 3" />
          <XAxis dataKey="E" tickFormatter={(v) => v.toFixed(2)} tick={axisStyle}>
            <Label value="Energy E (eV, relative to EF)" offset={-10} position="insideBottom" style={{ ...axisStyle, fontSize: 10 }} />
          </XAxis>
          <YAxis domain={[0, 1.05]} tick={axisStyle}>
            <Label value="f(E)" angle={-90} position="insideLeft" style={{ ...axisStyle, fontSize: 11 }} />
          </YAxis>
          <Tooltip contentStyle={tooltipStyle} formatter={(v: any) => parseFloat(v).toFixed(3)} />
          <Legend wrapperStyle={{ fontSize: 11, fontFamily: "Courier New, monospace" }} />
          <ReferenceLine x={EF} stroke={C.green} strokeDasharray="4 3" label={{ value: "EF", position: "top", style: { ...axisStyle, fill: C.green } }} />
          {temps.map((T, i) => (
            <Line key={i} type="monotone" dataKey={`T${i}`} name={T === 0 ? "T = 0 K" : `T = ${T} K`}
              stroke={colors[i % colors.length]} dot={false} strokeWidth={2} />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </ChartWrap>
  );
}

// ─────────────────────────────────────────────
// 2. CARRIER DECAY (exponential)
// ─────────────────────────────────────────────
function CarrierDecayChart({ cfg }: { cfg: any }) {
  const tau = cfg.tau ?? 1;       // µs
  const delta0 = cfg.delta0 ?? 1e13;
  const p0 = cfg.p0 ?? 1e5;
  const tMax = cfg.tMax ?? 8;     // multiples of tau

  const data = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 100; i++) {
      const t = (i / 100) * tMax * tau;
      const delta = delta0 * Math.exp(-t / tau);
      pts.push({ t: parseFloat(t.toFixed(3)), p: p0 + delta, delta });
    }
    return pts;
  }, [tau, delta0, p0, tMax]);

  const fmt = (v: number) => {
    if (v >= 1e12) return `${(v / 1e12).toFixed(2)}×10¹²`;
    if (v >= 1e9)  return `${(v / 1e9).toFixed(2)}×10⁹`;
    if (v >= 1e6)  return `${(v / 1e6).toFixed(2)}×10⁶`;
    return v.toFixed(0);
  };

  return (
    <ChartWrap title={cfg.title ?? "Minority Carrier Decay After Light Switch-Off"}>
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={data} margin={{ top: 10, right: 20, left: 60, bottom: 30 }}>
          <defs>
            <linearGradient id="decayGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={C.primary} stopOpacity={0.4} />
              <stop offset="95%" stopColor={C.primary} stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke={C.gridLine} strokeDasharray="3 3" />
          <XAxis dataKey="t" tickFormatter={(v) => `${v.toFixed(1)}µs`} tick={axisStyle}>
            <Label value={`Time t (µs)   [τ = ${tau} µs]`} offset={-10} position="insideBottom" style={{ ...axisStyle, fontSize: 10 }} />
          </XAxis>
          <YAxis tickFormatter={fmt} tick={axisStyle} width={55}>
            <Label value="p(t) (cm⁻³)" angle={-90} position="insideLeft" dx={-10} style={{ ...axisStyle, fontSize: 10 }} />
          </YAxis>
          <Tooltip contentStyle={tooltipStyle} formatter={(v: any) => fmt(v)} labelFormatter={(l) => `t = ${l} µs`} />
          <ReferenceLine y={p0} stroke={C.green} strokeDasharray="4 3"
            label={{ value: `p₀=${fmt(p0)}`, position: "right", style: { ...axisStyle, fill: C.green, fontSize: 10 } }} />
          <Area type="monotone" dataKey="p" name="p(t)" stroke={C.primary} fill="url(#decayGrad)" strokeWidth={2.5} dot={false} />
        </AreaChart>
      </ResponsiveContainer>
    </ChartWrap>
  );
}

// ─────────────────────────────────────────────
// 3. PN JUNCTION ELECTRIC FIELD PROFILE
// ─────────────────────────────────────────────
function PNFieldChart({ cfg }: { cfg: any }) {
  const xp = cfg.xp ?? 2.57;   // µm
  const xn = cfg.xn ?? 0.26;   // µm
  const Emax = cfg.Emax ?? 12400; // V/cm

  const data = useMemo(() => {
    const pts = [];
    const total = xp + xn;
    for (let i = 0; i <= 120; i++) {
      const x = -xp + (i / 120) * total;
      let E = 0;
      if (x >= -xp && x <= 0)      E = Emax * (x / xp + 1);       // ramps up (negative side)
      else if (x > 0 && x <= xn)   E = Emax * (1 - x / xn);       // ramps down (positive side)
      pts.push({ x: parseFloat(x.toFixed(3)), E: parseFloat(E.toFixed(1)) });
    }
    return pts;
  }, [xp, xn, Emax]);

  return (
    <ChartWrap title={cfg.title ?? "Electric Field Profile in Depletion Zone"}>
      <ResponsiveContainer width="100%" height={260}>
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 50, bottom: 30 }}>
          <defs>
            <linearGradient id="fieldGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={C.accent} stopOpacity={0.5} />
              <stop offset="95%" stopColor={C.accent} stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke={C.gridLine} strokeDasharray="3 3" />
          <XAxis dataKey="x" tickFormatter={(v) => `${v.toFixed(1)}`} tick={axisStyle}>
            <Label value="Position x (µm)" offset={-10} position="insideBottom" style={{ ...axisStyle, fontSize: 10 }} />
          </XAxis>
          <YAxis tick={axisStyle} width={50}>
            <Label value="|ℰ| (V/cm)" angle={-90} position="insideLeft" dx={-10} style={{ ...axisStyle, fontSize: 10 }} />
          </YAxis>
          <Tooltip contentStyle={tooltipStyle} formatter={(v: any) => `${parseFloat(v).toFixed(0)} V/cm`} />
          <ReferenceLine x={0} stroke={C.secondary} strokeDasharray="4 3"
            label={{ value: "Junction", position: "top", style: { ...axisStyle, fontSize: 10 } }} />
          <ReferenceLine x={-xp} stroke={C.blue} strokeWidth={1.5}
            label={{ value: `−xp`, position: "top", style: { ...axisStyle, fontSize: 9, fill: C.blue } }} />
          <ReferenceLine x={xn} stroke={C.blue} strokeWidth={1.5}
            label={{ value: `+xn`, position: "top", style: { ...axisStyle, fontSize: 9, fill: C.blue } }} />
          <Area type="monotone" dataKey="E" name="ℰ(x)" stroke={C.accent} fill="url(#fieldGrad)" strokeWidth={2.5} dot={false} />
        </AreaChart>
      </ResponsiveContainer>
    </ChartWrap>
  );
}

// ─────────────────────────────────────────────
// 4. MOS CAPACITOR C-V CURVE
// ─────────────────────────────────────────────
function MOSCVChart({ cfg }: { cfg: any }) {
  const COX = cfg.COX ?? 1.0;   // normalised
  const Cmin = cfg.Cmin ?? 0.30;
  const VFB = cfg.VFB ?? -0.8;
  const VTH = cfg.VTH ?? 2.0;

  const data = useMemo(() => {
    const pts = [];
    for (let V = -3; V <= 4; V += 0.06) {
      let C;
      if (V < VFB)              C = COX;
      else if (V < VTH)         C = Cmin + (COX - Cmin) * Math.pow(1 - (V - VFB) / (VTH - VFB), 1.5);
      else                      C = Cmin;
      pts.push({ V: parseFloat(V.toFixed(2)), C: parseFloat(C.toFixed(4)) });
    }
    return pts;
  }, [COX, Cmin, VFB, VTH]);

  return (
    <ChartWrap title={cfg.title ?? "MOS Capacitor C-V Curve"}>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data} margin={{ top: 10, right: 30, left: 50, bottom: 30 }}>
          <CartesianGrid stroke={C.gridLine} strokeDasharray="3 3" />
          <XAxis dataKey="V" tickFormatter={(v) => `${v}V`} tick={axisStyle}>
            <Label value="Gate Voltage VG (V)" offset={-10} position="insideBottom" style={{ ...axisStyle, fontSize: 10 }} />
          </XAxis>
          <YAxis domain={[0, COX * 1.15]} tick={axisStyle} width={50}
            tickFormatter={(v) => `${(v / COX * 100).toFixed(0)}%`}>
            <Label value="C / COX" angle={-90} position="insideLeft" dx={-10} style={{ ...axisStyle, fontSize: 10 }} />
          </YAxis>
          <Tooltip contentStyle={tooltipStyle}
            formatter={(v: any) => [`${(parseFloat(v) / COX * 100).toFixed(1)}% of COX`, "C"]}
            labelFormatter={(l) => `VG = ${l} V`} />
          <ReferenceLine x={VFB} stroke={C.green} strokeDasharray="4 3"
            label={{ value: "VFB", position: "top", style: { ...axisStyle, fill: C.green, fontSize: 10 } }} />
          <ReferenceLine x={VTH} stroke={C.accent} strokeDasharray="4 3"
            label={{ value: "VTH", position: "top", style: { ...axisStyle, fill: C.accent, fontSize: 10 } }} />
          <ReferenceLine y={COX} stroke={C.primary} strokeDasharray="4 3"
            label={{ value: "COX", position: "right", style: { ...axisStyle, fill: C.primary, fontSize: 10 } }} />
          <ReferenceLine y={Cmin} stroke={C.purple} strokeDasharray="4 3"
            label={{ value: "Cmin", position: "right", style: { ...axisStyle, fill: C.purple, fontSize: 10 } }} />
          <Line type="monotone" dataKey="C" name="C(VG)" stroke={C.secondary} dot={false} strokeWidth={2.5} />
        </LineChart>
      </ResponsiveContainer>
    </ChartWrap>
  );
}

// ─────────────────────────────────────────────
// 5. MOSFET ID–VDS CURVES
// ─────────────────────────────────────────────
function MOSFETIVChart({ cfg }: { cfg: any }) {
  const VTH = cfg.VTH ?? 1.0;
  const kn = cfg.kn ?? 2.0;    // mA/V²
  const VGS_list: number[] = cfg.VGS_list ?? [1.5, 2, 2.5, 3, 3.5];
  const colors = [C.gold, C.accent, C.primary, C.secondary, C.purple, C.blue];

  const data = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 80; i++) {
      const VDS = (i / 80) * 4;
      const row: any = { VDS: parseFloat(VDS.toFixed(2)) };
      VGS_list.forEach((VGS, j) => {
        if (VGS <= VTH) { row[`VGS${j}`] = 0; return; }
        const Vov = VGS - VTH;
        const VDS_sat = Vov;
        let ID;
        if (VDS < VDS_sat) {
          ID = kn * (Vov * VDS - VDS * VDS / 2);
        } else {
          ID = kn / 2 * Vov * Vov;
        }
        row[`VGS${j}`] = parseFloat(Math.max(0, ID).toFixed(4));
      });
      pts.push(row);
    }
    return pts;
  }, [VTH, kn, VGS_list]);

  // Saturation boundary
  const satBoundary = useMemo(() => {
    const pts = [];
    for (let VDS = 0; VDS <= 3; VDS += 0.05) {
      const ID = kn / 2 * VDS * VDS;
      pts.push({ VDS: parseFloat(VDS.toFixed(2)), IDsat: parseFloat(ID.toFixed(4)) });
    }
    return pts;
  }, [kn]);

  return (
    <ChartWrap title={cfg.title ?? "MOSFET Output Characteristics ID vs VDS"}>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 10, right: 30, left: 50, bottom: 30 }}>
          <CartesianGrid stroke={C.gridLine} strokeDasharray="3 3" />
          <XAxis dataKey="VDS" tickFormatter={(v) => `${v}V`} tick={axisStyle}>
            <Label value="Drain-Source Voltage VDS (V)" offset={-10} position="insideBottom" style={{ ...axisStyle, fontSize: 10 }} />
          </XAxis>
          <YAxis tick={axisStyle} width={50} tickFormatter={(v) => `${v}mA`}>
            <Label value="Drain Current ID (mA)" angle={-90} position="insideLeft" dx={-10} style={{ ...axisStyle, fontSize: 10 }} />
          </YAxis>
          <Tooltip contentStyle={tooltipStyle}
            formatter={(v: any, name: string) => [`${parseFloat(v).toFixed(2)} mA`, name]}
            labelFormatter={(l) => `VDS = ${l} V`} />
          <Legend wrapperStyle={{ fontSize: 11, fontFamily: "Courier New, monospace" }} />
          {VGS_list.map((VGS, j) => (
            <Line key={j} type="monotone" dataKey={`VGS${j}`} name={`VGS = ${VGS}V`}
              stroke={colors[j % colors.length]} dot={false} strokeWidth={2} />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </ChartWrap>
  );
}

// ─────────────────────────────────────────────
// 6. ENERGY BAND DIAGRAM (CSS/SVG)
// ─────────────────────────────────────────────
function BandDiagramChart({ cfg }: { cfg: any }) {
  const type = cfg.subtype ?? "intrinsic"; // intrinsic | ntype | ptype | pn

  const materials: Record<string, { label: string; Eg: number; EF_pos: number; color: string }> = {
    intrinsic: { label: "Intrinsic Si", Eg: 1.12, EF_pos: 0.5, color: C.primary },
    ntype:     { label: "N-type Si",  Eg: 1.12, EF_pos: 0.78, color: C.blue },
    ptype:     { label: "P-type Si",  Eg: 1.12, EF_pos: 0.22, color: C.accent },
  };

  const m = materials[type] ?? materials.intrinsic;
  const EV = 0, EC = m.Eg, EF = m.EF_pos * m.Eg, Ei = 0.5 * m.Eg;

  const h = 220; // svg height
  const toY = (E: number) => h - 20 - (E / (EC + 0.3)) * (h - 40);

  return (
    <ChartWrap title={cfg.title ?? `Energy Band Diagram — ${m.label}`}>
      <div style={{ overflowX: "auto" }}>
        <svg width="100%" viewBox="0 0 520 240" style={{ fontFamily: "Courier New, monospace" }}>
          {/* Conduction Band */}
          <rect x={60} y={toY(EC + 0.15)} width={400} height={20} fill={C.primary} opacity={0.15} rx={2} />
          <line x1={60} y1={toY(EC)} x2={460} y2={toY(EC)} stroke={C.secondary} strokeWidth={2.5} />
          <text x={468} y={toY(EC) + 4} fontSize={12} fill={C.secondary} fontWeight="bold">EC</text>
          <text x={468} y={toY(EC) + 16} fontSize={9} fill={C.secondary}>{EC.toFixed(2)} eV</text>

          {/* Valence Band */}
          <rect x={60} y={toY(EV)} width={400} height={20} fill={C.primary} opacity={0.15} rx={2} />
          <line x1={60} y1={toY(EV)} x2={460} y2={toY(EV)} stroke={C.secondary} strokeWidth={2.5} />
          <text x={468} y={toY(EV) + 4} fontSize={12} fill={C.secondary} fontWeight="bold">EV</text>

          {/* Bandgap label */}
          <line x1={35} y1={toY(EV)} x2={35} y2={toY(EC)} stroke={C.gridLine} strokeWidth={1} />
          <line x1={30} y1={toY(EV)} x2={40} y2={toY(EV)} stroke={C.gridLine} strokeWidth={1} />
          <line x1={30} y1={toY(EC)} x2={40} y2={toY(EC)} stroke={C.gridLine} strokeWidth={1} />
          <text x={10} y={(toY(EV) + toY(EC)) / 2 + 4} fontSize={9} fill={C.primary} textAnchor="middle"
            transform={`rotate(-90,10,${(toY(EV) + toY(EC)) / 2})`}>Eg={EC.toFixed(2)}eV</text>

          {/* Intrinsic level Ei */}
          <line x1={60} y1={toY(Ei)} x2={460} y2={toY(Ei)} stroke={C.green} strokeWidth={1.5} strokeDasharray="6 4" />
          <text x={468} y={toY(Ei) + 4} fontSize={11} fill={C.green} fontWeight="bold">Ei</text>

          {/* Fermi level EF */}
          <line x1={60} y1={toY(EF)} x2={460} y2={toY(EF)} stroke={C.accent} strokeWidth={2} strokeDasharray="4 3" />
          <text x={468} y={toY(EF) + 4} fontSize={11} fill={C.accent} fontWeight="bold">EF</text>

          {/* Electrons in CB (if n-type) */}
          {type === "ntype" && Array.from({ length: 6 }).map((_, i) => (
            <circle key={i} cx={100 + i * 55} cy={toY(EC) - 14} r={5} fill={C.blue} opacity={0.8} />
          ))}
          {/* Holes in VB (if p-type) */}
          {type === "ptype" && Array.from({ length: 6 }).map((_, i) => (
            <circle key={i} cx={100 + i * 55} cy={toY(EV) + 14} r={5} fill="none" stroke={C.accent} strokeWidth={2} />
          ))}

          {/* Legend */}
          <g transform={`translate(70, ${h + 5})`}>
            <line x1={0} y1={8} x2={18} y2={8} stroke={C.accent} strokeWidth={2} strokeDasharray="4 3" />
            <text x={22} y={12} fontSize={10} fill={C.accent}>Fermi Level EF</text>
            <line x1={140} y1={8} x2={158} y2={8} stroke={C.green} strokeWidth={1.5} strokeDasharray="6 4" />
            <text x={162} y={12} fontSize={10} fill={C.green}>Intrinsic Level Ei</text>
            <rect x={310} y={2} width={12} height={10} fill={C.primary} opacity={0.4} rx={2} />
            <text x={326} y={12} fontSize={10} fill={C.primary}>Energy Band</text>
          </g>
        </svg>
      </div>
    </ChartWrap>
  );
}

// ─────────────────────────────────────────────
// 7. DEPLETION WIDTH vs VOLTAGE (PN junction)
// ─────────────────────────────────────────────
function DepletionChart({ cfg }: { cfg: any }) {
  const Vbi = cfg.Vbi ?? 0.56;
  const W0 = cfg.W0 ?? 2.83;   // µm at V=0

  const data = useMemo(() => {
    const pts = [];
    for (let VR = 0; VR <= 20; VR += 0.25) {
      const W = W0 * Math.sqrt((Vbi + VR) / Vbi);
      pts.push({ VR: parseFloat(VR.toFixed(2)), W: parseFloat(W.toFixed(3)) });
    }
    return pts;
  }, [Vbi, W0]);

  return (
    <ChartWrap title={cfg.title ?? "Depletion Width W vs Reverse Bias"}>
      <ResponsiveContainer width="100%" height={260}>
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 50, bottom: 30 }}>
          <defs>
            <linearGradient id="deplGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={C.blue} stopOpacity={0.4} />
              <stop offset="95%" stopColor={C.blue} stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke={C.gridLine} strokeDasharray="3 3" />
          <XAxis dataKey="VR" tickFormatter={(v) => `${v}V`} tick={axisStyle}>
            <Label value="Reverse Bias VR (V)" offset={-10} position="insideBottom" style={{ ...axisStyle, fontSize: 10 }} />
          </XAxis>
          <YAxis tick={axisStyle} width={50} tickFormatter={(v) => `${v}µm`}>
            <Label value="W (µm)" angle={-90} position="insideLeft" dx={-10} style={{ ...axisStyle, fontSize: 10 }} />
          </YAxis>
          <Tooltip contentStyle={tooltipStyle}
            formatter={(v: any) => [`${parseFloat(v).toFixed(2)} µm`, "W"]}
            labelFormatter={(l) => `VR = ${l} V`} />
          <Area type="monotone" dataKey="W" name="W(VR)" stroke={C.blue} fill="url(#deplGrad)" strokeWidth={2.5} dot={false} />
        </AreaChart>
      </ResponsiveContainer>
    </ChartWrap>
  );
}

// ─────────────────────────────────────────────
// MAIN DISPATCHER
// ─────────────────────────────────────────────
interface ChartRendererProps { raw: string }

export function ChartRenderer({ raw }: ChartRendererProps) {
  let cfg: any;
  try { cfg = JSON.parse(raw); }
  catch { return <div className="chart-error">⚠ Invalid chart JSON: {raw.slice(0, 60)}</div>; }

  switch (cfg.type) {
    case "fermi-dirac":  return <FermiDiracChart cfg={cfg} />;
    case "decay":        return <CarrierDecayChart cfg={cfg} />;
    case "pn-field":     return <PNFieldChart cfg={cfg} />;
    case "mos-cv":       return <MOSCVChart cfg={cfg} />;
    case "mosfet-iv":    return <MOSFETIVChart cfg={cfg} />;
    case "band-diagram": return <BandDiagramChart cfg={cfg} />;
    case "depletion":    return <DepletionChart cfg={cfg} />;
    default: return <div className="chart-error">⚠ Unknown chart type: "{cfg.type}"</div>;
  }
}
