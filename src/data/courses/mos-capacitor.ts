export const mosCapacitorContent = `
# The MOS Capacitor

## Introduction: The Gatekeeper of Digital Computation

The MOS capacitor is the fundamental building block of the **MOSFET transistor**, which is the fundamental building block of every digital circuit ever made. Your CPU has billions of them. Understanding it deeply means understanding what makes modern computation possible.

**MOS** stands for **Metal–Oxide–Semiconductor**, describing its three-layer sandwich structure.

---

## 1. The Physical Structure

\`\`\`
MOS Capacitor — Cross-Section View:

          ┌──────────────────────────────────┐
          │     Metal Gate (Al or poly-Si)   │  ← Top electrode (V_G applied here)
          └──────────────────────────────────┘
          ┌──────────────────────────────────┐
          │  Oxide (SiO₂) — t_ox thick       │  ← Perfect insulator (~2-10 nm)
          │  (like a pane of glass!)          │
          └──────────────────────────────────┘
          ┌──────────────────────────────────┐
          │                                  │
          │  Semiconductor (P-type Si)        │  ← The "magic" layer
          │  (bulk substrate)                 │
          │                                  │
          └──────────────────────────────────┘
          ═══════════════════════════════════
              Ground contact (back contact)
\`\`\`

**Each layer explained:**

**Metal Gate:** The control electrode. We apply voltage $V_G$ here. In modern chips, this is often doped polycrystalline silicon (poly-Si) rather than a real metal, but the physics is the same.

**Oxide ($SiO_2$):** Grown by heating silicon in an oxygen atmosphere. Silicon dioxide is an almost perfect insulator — no DC current flows through it. This is the glass layer separating the metal from the semiconductor.

Its capacitance per unit area:
$$C_{OX} = \\frac{\\varepsilon_{ox}}{t_{ox}}$$

Where $\\varepsilon_{ox} = 3.9 \\varepsilon_0 = 3.45 \\times 10^{-13}$ F/cm is the permittivity of $SiO_2$ (dielectric constant = 3.9).

**Semiconductor (P-type Si):** The body. Its properties change dramatically depending on the gate voltage applied. This is the magic layer.

---

## 2. Why a Gate Voltage Controls the Surface

When you apply a voltage $V_G$ to the metal gate, an electric field penetrates through the (insulating) oxide into the semiconductor. This field cannot be screened by the oxide (it's an insulator with no free charges). So the field reaches the top surface of the silicon and rearranges the free carriers there.

The key insight: **the gate voltage directly controls the concentration of free carriers at the silicon surface** — without any DC current flowing through the oxide.

This is the essence of the "field effect" in the MOSFET name: control by electric field, not by current.

---

## 3. The Three Operating Regimes

We take P-type silicon as our substrate (majority carriers = holes). The three regimes depend entirely on the sign and magnitude of $V_G$:

---

### Regime 1: Accumulation ($V_G < 0$ or $V_G < V_{FB}$)

**Apply a negative gate voltage:** $V_G < 0$

\`\`\`
Accumulation Band Diagram:

Energy
  ↑
E_C ─ ─ ─ ─ ─ ─ ─ ─┐  (bends UP at surface)
E_i ─ ─ ─ ─ ─ ─ ─ ─ │  (bands curve upward toward gate)
E_F ──────────────── │
E_V ═══════════════ ─┘← surface (gate/oxide interface)

Metal | Oxide |  P-Silicon →
       Accumulation layer of holes forms at surface
\`\`\`

The negative gate attracts the positive holes (majority carriers in P-type) toward the oxide surface. A dense layer of holes accumulates right against the oxide.

**Electrically:** The structure looks like a simple parallel-plate capacitor. The metal gate is one plate, the accumulated holes form the other plate, and the oxide is the dielectric in between.

$$C = C_{OX} = \\frac{\\varepsilon_{ox}}{t_{ox}} \\quad \\text{(maximum capacitance)}$$

No interesting physics here — it acts like a normal capacitor.

---

### Regime 2: Depletion ($V_{FB} < V_G < V_{TH}$)

**Apply a slightly positive gate voltage:** $V_G > 0$ (above flat-band voltage)

\`\`\`
Depletion Band Diagram:

Energy
  ↑
 ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┐  E_C (bends DOWN at surface)
                         │  (bands curve downward)
─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─│  E_i
E_F ────────────── ─ ─ ─ │  (still below E_i → P-type character)
═══════════════════ ─ ─ ─┘  E_V (surface)

Metal | Oxide |  P-Silicon →
       Depletion zone of negatively charged acceptors (B⁻)
\`\`\`

The positive gate voltage now repels the holes away from the surface. As the holes flee into the bulk, they leave behind the naked, immobile, negatively charged boron acceptor ions ($B^-$). A **depletion zone** forms, just like in a PN junction!

This depletion zone acts as a second capacitor (the silicon "capacitor") in **series** with the oxide capacitor. The total capacitance drops:

$$C = \\frac{C_{OX} \\cdot C_{dep}}{C_{OX} + C_{dep}} < C_{OX}$$

Where $C_{dep} = \\varepsilon_s / W_{dep}$ decreases as the depletion width $W_{dep}$ grows.

**The depletion width:**
$$W_{dep} = \\sqrt{\\frac{2\\varepsilon_s |\\phi_s|}{qN_A}}$$

Where $\\phi_s$ is the **surface potential** (how much the bands bend at the surface).

---

### Regime 3: Inversion / Strong Inversion ($V_G > V_{TH}$)

**Apply a large positive voltage beyond a critical threshold:** $V_G > V_{TH}$

This is where the magic happens!

As we increase $V_G$ further, the bands bend more and more. The surface potential $\\phi_s$ increases. At some critical point, the surface starts to look not like P-type, but like... N-type!

\`\`\`
Strong Inversion Band Diagram:

Energy
  ↑
 ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┐  E_C
                                  │
 ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ │  E_i (passes BELOW E_F at surface!)
E_F ─────────────────────── ─ ─ ─│← surface
 ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ │  E_V
                                  │
 ═══════════════════════════ ─ ─ ─┘  deep in bulk

At the surface: E_i < E_F → ELECTRON-RICH surface!
(Compare: in bulk, E_F < E_i → hole-rich = P-type)
\`\`\`

When $E_i$ at the surface drops **below** $E_F$:
- In the bulk: $E_F < E_i$ → P-type (holes dominate)
- At the surface: $E_F > E_i$ → **N-type** (electrons dominate)

A layer of electrons has formed at the surface of the P-type silicon! This is called the **Inversion Layer** or **Channel**.

### The Strong Inversion Condition

Strong inversion is defined as when the surface potential equals twice the Fermi potential:
$$\\phi_s = 2\\Phi_F$$

Where $\\Phi_F$ is the **Fermi potential** (how far $E_F$ is from $E_i$ in the bulk):
$$\\Phi_F = \\frac{kT}{q} \\ln\\left(\\frac{N_A}{n_i}\\right)$$

For silicon at 300K with $N_A = 10^{17}$ cm$^{-3}$: $\\Phi_F = 0.026 \\times \\ln(10^7) = 0.026 \\times 16.1 = 0.418$ V.

So strong inversion requires the surface potential to be $2 \\times 0.418 = 0.836$ V of band bending!

---

## 4. The Flat-Band Voltage $V_{FB}$

Before applying any voltage, the band structure is not "flat" across the device. There are differences due to:
1. **Work function difference** between metal and silicon ($\\phi_{ms}$)
2. **Fixed charges** in the oxide ($Q_{fix}$) from manufacturing defects

The **flat-band voltage** $V_{FB}$ is the gate voltage needed to make the bands flat across the device (no band bending, no field in the silicon):

$$V_{FB} = \\phi_{ms} - \\frac{Q_{fix}}{C_{OX}}$$

All subsequent voltage thresholds are measured relative to $V_{FB}$.

---

## 5. The Threshold Voltage $V_{TH}$ — The Most Critical Parameter

$V_{TH}$ is the gate voltage at which strong inversion begins. It marks the boundary between "transistor OFF" and "transistor ON."

**To reach strong inversion, the gate voltage must do three things:**

1. **Cancel the flat-band shift:** Requires $V_{FB}$ volts
2. **Bend the bands to $2\\Phi_F$:** Requires $2\\Phi_F$ volts applied to the silicon surface
3. **Compensate the depletion charge:** The exposed $B^-$ ions create a negative charge $Q_D$ that the gate voltage must overcome

$$Q_D = -qN_A W_{dep,max} = -\\sqrt{4q\\varepsilon_s N_A \\Phi_F}$$

*(negative because it's negative charge)*

The gate voltage needed to overcome this depletion charge: $-Q_D/C_{OX}$ (positive, since $Q_D$ is negative).

**The Threshold Voltage formula:**

$$\\boxed{V_{TH} = V_{FB} + 2\\Phi_F + \\frac{\\sqrt{4q\\varepsilon_s N_A \\Phi_F}}{C_{OX}}}$$

$$= V_{FB} + 2\\Phi_F - \\frac{Q_D}{C_{OX}}$$

**Let's understand each term:**
- $V_{FB}$: corrects for material work function differences and oxide charges (can be positive or negative)
- $2\\Phi_F$: the band bending needed to reach inversion (always positive for P-type substrate)
- $\\frac{-Q_D}{C_{OX}} = \\frac{\\sqrt{4q\\varepsilon_s N_A \\Phi_F}}{C_{OX}}$: compensates the negative depletion charge (always positive)

For a typical P-type NMOS: $V_{TH}$ is typically between 0.3 V and 1 V.

---

## 6. The C-V Curve — The Experimental Signature of the MOS Capacitor

The **Capacitance-Voltage (C-V) curve** is the most important characterization tool for MOS capacitors. By measuring capacitance vs gate voltage, you can extract $V_{FB}$, $V_{TH}$, $N_A$, $t_{ox}$, and oxide charge density.

\`\`\`
C-V Curve of NMOS MOS Capacitor (P-type substrate):

Capacitance C
    ↑
C_OX ───────────────────\\
(max)   (Accumulation)    \\  (Depletion begins)
                           \\
                            \\
C_min ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─\\─────────────── (HF: high frequency)
                               \\  (Inversion)  (LF: low frequency ↗ back to C_OX)
                                └─────────────→ V_G
         V_G < 0     V_FB      V_TH    V_G >> 0

Accumulation: C = C_OX (maximum, bands bent up, holes pile up)
Depletion: C drops (series combination of C_OX and C_dep)
Inversion (high freq): C stays at C_min (inversion layer can't respond fast enough to AC)
Inversion (low freq): C → C_OX again (inversion electrons fully respond)
\`\`\`

---

\`\`\`chart
{"type":"mos-cv","title":"MOS Capacitor C-V Curve (P-type substrate, NMOS)","COX":1.0,"Cmin":0.28,"VFB":-0.8,"VTH":2.0}
\`\`\`

## 📋 Complete Law Summary — MOS Capacitor

| Law / Formula | Expression | Description |
|---|---|---|
| Oxide capacitance | $C_{OX} = \\varepsilon_{ox}/t_{ox}$ | Per unit area (F/cm²) |
| Oxide permittivity | $\\varepsilon_{ox} = 3.9\\varepsilon_0 = 3.45 \\times 10^{-13}$ F/cm | SiO₂ permittivity |
| Si permittivity | $\\varepsilon_s = 11.7\\varepsilon_0 = 1.04 \\times 10^{-12}$ F/cm | Silicon permittivity |
| Fermi potential | $\\Phi_F = (kT/q)\\ln(N_A/n_i)$ | Bulk Fermi potential |
| Strong inversion | $\\phi_s = 2\\Phi_F$ | Inversion onset condition |
| Max depletion charge | $Q_D = -\\sqrt{4q\\varepsilon_s N_A \\Phi_F}$ | At threshold |
| Max depletion width | $W_{max} = \\sqrt{4\\varepsilon_s \\Phi_F/(qN_A)}$ | At threshold |
| Flat-band voltage | $V_{FB} = \\phi_{ms} - Q_{fix}/C_{OX}$ | Corrects material non-ideality |
| Threshold voltage | $V_{TH} = V_{FB} + 2\\Phi_F - Q_D/C_{OX}$ | Onset of inversion |
| Depletion capacitance | $C_{dep} = \\varepsilon_s/W_{dep}$ | Series with $C_{OX}$ |
| Total C (depletion) | $C = C_{OX}C_{dep}/(C_{OX}+C_{dep})$ | Series combination |

**Physical interpretation checklist:**
- $V_G < V_{FB}$: Accumulation (holes attracted, C = C_OX)
- $V_{FB} < V_G < V_{TH}$: Depletion (holes repelled, ions uncovered, C drops)
- $V_G > V_{TH}$: Inversion (electrons at surface, N-type channel formed!)
- $V_{TH}$ increases with: higher $N_A$ (more doping), thicker oxide (larger $t_{ox}$)
- $V_{TH}$ decreases with: thinner oxide (more field control), positive oxide charge
`;
