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

## 7. The Accumulation Regime — Detailed Analysis

### What Happens Physically Under Accumulation

Recall: we have a P-type silicon substrate. We apply a **negative** gate voltage ($V_G < V_{FB}$). The negative gate attracts the majority holes toward the oxide interface. They pile up in a thin layer right against the SiO₂.

\`\`\`
Accumulation charge profile:

Gate oxide  │  Silicon
            │
  ─ ─ ─ ─ ─│─ ─ ─ ─ ─  E_C
            │↑ bands bent upward at surface
  ─ ─ ─ ─ ─│─ ─ ─ ─ ─  E_i
  ─ ─ ─ E_F│─ ─ ─ ─ ─  (E_F above E_i at surface → hole rich!)
  ═ ═ ═ ═ ═│═ ═ ═ ═ ═  E_V

Hole density profile (not to scale):

p(x)
  ↑
p_s ────┐          ← very high at surface
        │
        │
        └──────── (decays into bulk, → N_A)
  └───────────────→ x
  0 (surface)    bulk

\`\`\`

The accumulation layer is very thin — its characteristic thickness is set by the **Debye length**:

$$L_D = \\sqrt{\\frac{\\varepsilon_s k T}{q^2 N_A}}$$

**What is the Debye length?** It is the distance over which an electric field is screened in a semiconductor (or any medium with mobile charges). Beyond $L_D$, the excess charge is neutralised by the surrounding bulk carriers. It has the same mathematical origin as the screening length in plasma physics.

For silicon at 300 K with $N_A = 10^{17}$ cm$^{-3}$:

$$L_D = \\sqrt{\\frac{1.04 \\times 10^{-12} \\times 0.026}{(1.6 \\times 10^{-19}) \\times 10^{17}}} = \\sqrt{\\frac{2.7 \\times 10^{-14}}{1.6 \\times 10^{-2}}} \\approx 4 \\text{ nm}$$

The accumulation layer is only **a few nanometres thick**. All that charge is concentrated in an incredibly thin sheet against the oxide.

### Accumulation Capacitance

Because the accumulation charge is so close to the oxide surface, the hole layer acts as the bottom plate of a capacitor, with the oxide as the dielectric. The structure is simply a parallel-plate capacitor:

$$C_{acc} = C_{OX} = \\frac{\\varepsilon_{ox}}{t_{ox}} \\quad \\text{(maximum capacitance)}$$

**Why maximum?** In accumulation, the charge sheet is as close as it can possibly be — right against the oxide. The "gap" between the two plates is just $t_{ox}$. In any other regime, the charge moves further away (into the depletion layer), increasing the effective plate separation and reducing the capacitance.

**AC response:** At the measurement frequency used in C-V measurements (typically 1 MHz), majority holes can respond in nanoseconds. Their response time $\\sim C/G$ is much faster than $1/f_{AC}$. So the accumulation charge fully tracks the AC signal → full $C_{OX}$ is measured.

---

## 8. The Depletion Regime — Full Electrostatic Treatment

### Poisson's Equation in the Depletion Approximation

When $V_G > V_{FB}$ (for P-type substrate), holes are repelled from the surface. We make the **depletion approximation**: within the depletion zone ($0 < x < x_d$), all holes are gone and only the fixed negative charge of the ionised boron acceptors ($B^-$) remains:

$$\\rho(x) = \\begin{cases} -qN_A & 0 < x < x_d \\quad (\\text{depletion zone: only B}^- \\text{ ions}) \\\\ 0 & x > x_d \\quad (\\text{bulk: neutral}) \\end{cases}$$

**Poisson's equation** relates the electric potential $\\phi$ to the charge density $\\rho$:

$$\\frac{d^2\\phi}{dx^2} = -\\frac{\\rho}{\\varepsilon_s} = \\frac{qN_A}{\\varepsilon_s} \\quad (\\text{for } 0 < x < x_d)$$

Wait — let's be careful with signs. The charge density is $\\rho = -qN_A$ (negative, because boron acceptors are $B^-$ ions carrying charge $-q$). Poisson's equation is $d^2\\phi/dx^2 = -\\rho/\\varepsilon_s = -(-qN_A)/\\varepsilon_s = +qN_A/\\varepsilon_s$. Positive on the right side. ✓

### Solving Poisson's Equation

**Boundary conditions:**
1. At the edge of the depletion zone, $x = x_d$: the electric field must be zero (there is no charge in the neutral bulk, so no field). $d\\phi/dx|_{x=x_d} = 0$.
2. At the edge of the depletion zone, $x = x_d$: define the bulk potential as zero. $\\phi(x_d) = 0$.
3. At the surface, $x = 0$: the potential equals the **surface potential** $\\phi_s$. $\\phi(0) = \\phi_s$.

**Step 1:** Integrate once to get the electric field $\\mathcal{E} = -d\\phi/dx$:

$$\\frac{d\\phi}{dx} = \\frac{qN_A}{\\varepsilon_s}(x - x_d)$$

*(The integration constant is fixed by boundary condition 1: at $x = x_d$, $d\\phi/dx = 0$.)*

The electric field $\\mathcal{E}(x) = -d\\phi/dx$:

$$\\mathcal{E}(x) = -\\frac{qN_A}{\\varepsilon_s}(x - x_d) = \\frac{qN_A}{\\varepsilon_s}(x_d - x)$$

\`\`\`
Electric field profile in depletion (triangular):

ε(x)
  ↑
ε_max ─────┐             ← maximum at surface (x=0)
            \\
             \\
              \\
               \\
                └─────────→ x
                0        x_d

ε(x) = (qN_A/εs)·(xd - x)   [V/cm]
ε_max = qN_A·xd/εs           [V/cm at x=0]
\`\`\`

The field profile is **triangular**: maximum at the surface ($x = 0$) and zero at the depletion edge ($x = x_d$). This is the same profile as in a PN junction depletion region.

**Step 2:** Integrate again to get the potential $\\phi(x)$:

$$\\phi(x) = \\frac{qN_A}{2\\varepsilon_s}(x - x_d)^2$$

*(Integration constant fixed by boundary condition 2: $\\phi(x_d) = 0$.)*

Check boundary condition 3: $\\phi(0) = \\phi_s = \\frac{qN_A}{2\\varepsilon_s} x_d^2$.

Solving for $x_d$:

$$\\boxed{x_d = \\sqrt{\\frac{2\\varepsilon_s \\phi_s}{qN_A}}}$$

**Reading this formula:** The depletion width grows as the square root of the surface potential (band bending). Doubling $\\phi_s$ (doubling the gate voltage above flat-band) increases $x_d$ by $\\sqrt{2} \\approx 1.41\\times$, not $2\\times$. This is exactly like the PN junction depletion width formula.

---

### The Depletion Charge

The total charge per unit area in the depletion zone is just the charge density times the width:

$$Q_d = -qN_A \\cdot x_d = -qN_A \\sqrt{\\frac{2\\varepsilon_s \\phi_s}{qN_A}} = -\\sqrt{2q\\varepsilon_s N_A \\phi_s}$$

The sign is negative because the depletion charge consists of $B^-$ acceptor ions.

$$\\boxed{Q_d = -\\sqrt{2q\\varepsilon_s N_A \\phi_s}} \\quad \\text{[C/cm}^2\\text{]}$$

**Note:** $Q_d$ becomes more negative as $\\phi_s$ increases (more band bending = deeper depletion = more negative charge). This is the charge that the gate voltage must balance.

---

### Maximum Depletion Width at Threshold

The depletion zone **stops growing** once strong inversion sets in. Why? As soon as a significant inversion charge (electrons) forms at the surface, any additional gate voltage goes into increasing the inversion charge rather than widening the depletion zone. (The inversion charge can respond much faster to gate voltage changes than extending the depletion zone further into the bulk.)

The condition for strong inversion is $\\phi_s = 2\\Phi_F$. Substituting into $x_d$:

$$\\boxed{x_{d,max} = \\sqrt{\\frac{4\\varepsilon_s \\Phi_F}{qN_A}}}$$

At threshold, the depletion charge reaches its maximum value:

$$Q_{d,max} = -\\sqrt{4q\\varepsilon_s N_A \\Phi_F} = -qN_A x_{d,max}$$

**Example calculation:** For $N_A = 10^{17}$ cm$^{-3}$, $\\Phi_F = 0.42$ V, $\\varepsilon_s = 1.04 \\times 10^{-12}$ F/cm:

$$x_{d,max} = \\sqrt{\\frac{4 \\times 1.04 \\times 10^{-12} \\times 0.42}{1.6 \\times 10^{-19} \\times 10^{17}}} = \\sqrt{\\frac{1.75 \\times 10^{-12}}{1.6 \\times 10^{-2}}} = \\sqrt{1.09 \\times 10^{-10}} \\approx 10.5 \\text{ nm}$$

Only about 10 nm of silicon is depleted at threshold for this doping level. Compare this to a PN junction where depletion widths can be microns — the MOS depletion zone is extremely thin because of the large gate field and high doping.

---

### Capacitance in the Depletion Regime

The depletion charge layer at depth $x_d$ is separated from the metal gate by the oxide ($t_{ox}$) plus the depletion layer ($x_d$). Electrically, this is **two capacitors in series:**

\`\`\`
Equivalent circuit in depletion:

Metal gate
    │
   ─┴─
   C_OX = εox/tox      ← oxide capacitance
   ─┬─
    │
   ─┴─
   C_dep = εs/xd        ← depletion layer capacitance
   ─┬─
    │
  Bulk (ground)
\`\`\`

The total capacitance per unit area:

$$\\frac{1}{C} = \\frac{1}{C_{OX}} + \\frac{1}{C_{dep}} \\implies C = \\frac{C_{OX} C_{dep}}{C_{OX} + C_{dep}}$$

where $C_{dep} = \\varepsilon_s / x_d$.

As $V_G$ increases, $x_d$ increases → $C_{dep} = \\varepsilon_s / x_d$ **decreases** → total $C$ decreases. This is the falling portion of the C-V curve.

**Minimum capacitance** at threshold ($x_d = x_{d,max}$):

$$C_{min} = \\frac{C_{OX} \\cdot C_{dep,min}}{C_{OX} + C_{dep,min}}, \\quad C_{dep,min} = \\frac{\\varepsilon_s}{x_{d,max}}$$

---

## 9. The Inversion Layer — Charge, Capacitance, and Frequency Dependence

### Weak Inversion ($\\Phi_F < \\phi_s < 2\\Phi_F$)

As the surface potential increases beyond $\\Phi_F$, the electron concentration at the surface starts to exceed $n_i$ (the surface is becoming intrinsic, then slightly N-type). However, the electron concentration is still much less than $N_A$. This regime is called **weak inversion**.

Recall: the electron concentration at any point where the potential is $\\phi$ is:

$$n(x) = n_i \\exp\\left(\\frac{q\\phi(x)}{kT}\\right) \\cdot \\exp\\left(\\frac{E_F - E_i}{kT}\\right) = n_i \\exp\\left(\\frac{\\phi(x) - \\phi_F}{V_T}\\right)$$

Wait, let's be careful. In the bulk (far from surface), $n = N_A/10^{10}$ for P-type... actually in terms of surface potential, at the surface where $\\phi = \\phi_s$:

$$n_s = n_i \\exp\\left(\\frac{\\phi_s - 2\\Phi_F + 2\\Phi_F}{V_T}\\right)$$

The key condition: **at $\\phi_s = 2\\Phi_F$, the electron concentration at the surface equals $N_A$** (the hole concentration in the bulk). At this point, the surface has "inverted" — it has become as N-type as the bulk is P-type.

\`\`\`
Surface carrier concentrations vs surface potential:

Carrier density at surface
  ↑   (log scale)
N_A ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─✦  ← strong inversion onset (n_s = N_A)
                              ↗ electrons (n_s)
n_i ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─/─ ─ ─ ─  ← weak inversion begins
                         ↗
                      /
  ╲                 /
   ╲ holes (p_s)  /
    ╲          /
     ╲      /
      ╲   /
       └──────────────────────→ φ_s
       0   Φ_F        2Φ_F

Holes decrease exponentially as bands bend down.
Electrons increase exponentially (n_s = ni·exp(φs/VT)).
\`\`\`

### Strong Inversion ($\\phi_s \\geq 2\\Phi_F$) and the Inversion Charge

Once strong inversion is reached, a conducting **electron channel** exists at the surface. The inversion charge per unit area $Q_{inv}$ (electrons cm$^{-2}$, negative) can be written as:

$$Q_{inv} = -C_{OX}(V_G - V_{TH}) \\quad \\text{for } V_G > V_{TH}$$

**Reading this:** Every volt of gate voltage above threshold creates $C_{OX}$ coulombs of inversion charge per cm². This is **the charge that forms the conducting channel of the MOSFET.** Without strong inversion, the transistor is off. With $V_G > V_{TH}$, a conducting N-type sheet of electrons exists at the surface, connecting source to drain.

The depletion charge $Q_d$ stays fixed at $Q_{d,max}$ because the depletion width saturates at $x_{d,max}$. All additional gate-induced charge goes into the inversion layer.

Gate voltage balance above threshold:

$$V_G = V_{FB} + 2\\Phi_F + \\frac{-Q_{d,max}}{C_{OX}} + \\frac{-Q_{inv}}{C_{OX}}$$

The first three terms are exactly $V_{TH}$, so:

$$V_G - V_{TH} = \\frac{-Q_{inv}}{C_{OX}} \\implies Q_{inv} = -C_{OX}(V_G - V_{TH}) \\checkmark$$

---

### High-Frequency vs Low-Frequency C-V in Inversion — The Key Distinction

This is the most important subtlety of the MOS C-V measurement.

**The question:** Can the inversion layer charge (minority electrons in P-type Si) respond to the AC measurement signal?

Minority carriers (electrons in P-type) are generated by thermal generation — a slow process characterised by the generation lifetime $\\tau_g \\sim \\mu$s to ms.

**At high frequency (≥ 1 kHz typically):**

The AC signal oscillates faster than minority carriers can be generated or recombined. The inversion charge **cannot keep up with the AC signal**. So only the depletion charge edge (at $x_{d,max}$) can respond to the AC signal — it jiggles back and forth by tiny amounts.

The capacitance is frozen at the **minimum capacitance** $C_{min}$:

$$C_{HF} = C_{min} = \\frac{C_{OX} \\cdot \\varepsilon_s/x_{d,max}}{C_{OX} + \\varepsilon_s/x_{d,max}}$$

This is a series combination of $C_{OX}$ and $C_{dep,min}$. **$C$ stays at $C_{min}$ even for $V_G \\gg V_{TH}$** at high frequency — the C-V curve is flat in inversion on the high-frequency plot.

**At low frequency (< 1 Hz typically, or quasi-static):**

The AC signal is slow enough for minority carriers to be generated and recombined thermally. The inversion charge **can fully respond** to the AC signal.

The inversion charge now acts as the bottom plate of the capacitor, and it is right against the oxide (the inversion layer is only ~1 nm thick). The capacitance recovers to $C_{OX}$:

$$C_{LF} = C_{OX}$$

\`\`\`
C-V curves: high frequency vs low frequency

C/C_OX
  ↑
1.0 ────────────────────\\               ← C = C_OX (accumulation, both)
                         \\
                          \\              ← LF: C returns to C_OX (inversion charge responds)
C_min/C_OX ─ ─ ─ ─ ─ ─ ─ \\─────────── ← HF: C stays at C_min
                            \\
                             └──────────→ V_G
               V_FB        V_TH

── HF (high frequency, ≥ 1 kHz):   C stays at C_min in inversion
── LF (low frequency, quasi-static): C returns to C_OX in inversion
\`\`\`

**Practical implication:** The shape of the C-V curve tells you immediately whether you're doing a HF or LF measurement. If C stays flat at $C_{min}$ for large $V_G$, it's HF. If C recovers to $C_{OX}$, it's LF (or quasi-static).

---

### Deep Depletion — When Sweep Rate Exceeds Generation Rate

There is a third regime beyond HF: **deep depletion**. If you ramp the gate voltage faster than minority carriers can be generated (e.g., a fast voltage ramp), the inversion layer never forms and the depletion zone keeps widening beyond $x_{d,max}$.

$$x_d > x_{d,max} \\implies C < C_{min}$$

The C-V curve dips below $C_{min}$ — a signature of deep depletion. This occurs in CCD (charge-coupled device) image sensors during readout: charge packets are manipulated in deep depletion pockets.

---

### C-V Curve as a Diagnostic Tool

The C-V curve is so information-rich that it serves as the primary characterisation technique for MOS structures. Here is what you can extract:

**From $C_{max} = C_{OX}$:** Oxide thickness $t_{ox} = \\varepsilon_{ox}/C_{OX}$. (The most directly measured oxide property in process control.)

**From $C_{min}$:** Combined with $C_{OX}$, gives $C_{dep,min} = \\varepsilon_s/x_{d,max}$, from which $x_{d,max}$, and then from $x_{d,max} = \\sqrt{4\\varepsilon_s \\Phi_F/(qN_A)}$, extract $N_A$.

**From the flat-band voltage $V_{FB}$ (voltage at which $C = C_{FB}$):** Gives work function difference $\\phi_{ms}$ and oxide charge $Q_{fix}$.

**From the threshold voltage $V_{TH}$ (onset of strong inversion on the C-V curve):** Full device characterisation.

\`\`\`
Full C-V curve with labeled extraction points:

C
  ↑
C_OX─────────────────────\\          /─────
                          \\        /  ↑ LF (low freq)
C_FB ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ \\      /   │
                            \\    /    │
C_min─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ \\──/────  HF (flat here)
                             └─────────────→ V_G
      Accumulation  Depletion │ Inversion
                              V_TH

Extraction:
  C_OX → t_ox = εox/C_OX
  C_min → x_d_max = εs/C_dep_min → N_A
  V_FB  → φ_ms and Q_fix/C_OX
  V_TH  → full device specification
\`\`\`

---

## 📋 Complete Law Summary — MOS Capacitor

| Law / Formula | Expression | Description |
|---|---|---|
| Oxide capacitance | $C_{OX} = \\varepsilon_{ox}/t_{ox}$ | Per unit area (F/cm²) |
| Oxide permittivity | $\\varepsilon_{ox} = 3.9\\varepsilon_0 = 3.45 \\times 10^{-13}$ F/cm | SiO₂ permittivity |
| Si permittivity | $\\varepsilon_s = 11.7\\varepsilon_0 = 1.04 \\times 10^{-12}$ F/cm | Silicon permittivity |
| Debye length | $L_D = \\sqrt{\\varepsilon_s kT/(q^2 N_A)}$ | Accumulation layer thickness scale |
| Poisson (depletion) | $d^2\\phi/dx^2 = qN_A/\\varepsilon_s$ | In depletion zone ($0 < x < x_d$) |
| Potential profile | $\\phi(x) = (qN_A/2\\varepsilon_s)(x - x_d)^2$ | Parabolic in depletion |
| Electric field | $\\mathcal{E}(x) = (qN_A/\\varepsilon_s)(x_d - x)$ | Triangular, max at surface |
| Max surface field | $\\mathcal{E}_{max} = qN_A x_d / \\varepsilon_s$ | At $x = 0$ |
| Depletion width | $x_d = \\sqrt{2\\varepsilon_s \\phi_s/(qN_A)}$ | Grows with band bending |
| Depletion charge | $Q_d = -\\sqrt{2q\\varepsilon_s N_A \\phi_s}$ | Negative (B⁻ ions) |
| Fermi potential | $\\Phi_F = (kT/q)\\ln(N_A/n_i)$ | Bulk Fermi potential |
| Strong inversion | $\\phi_s = 2\\Phi_F$ | Inversion onset condition |
| Max depletion charge | $Q_{d,max} = -\\sqrt{4q\\varepsilon_s N_A \\Phi_F}$ | At threshold |
| Max depletion width | $x_{d,max} = \\sqrt{4\\varepsilon_s \\Phi_F/(qN_A)}$ | At threshold |
| Flat-band voltage | $V_{FB} = \\phi_{ms} - Q_{fix}/C_{OX}$ | Corrects material non-ideality |
| Threshold voltage | $V_{TH} = V_{FB} + 2\\Phi_F - Q_{d,max}/C_{OX}$ | Onset of inversion |
| Inversion charge | $Q_{inv} = -C_{OX}(V_G - V_{TH})$ | For $V_G > V_{TH}$ |
| Depletion capacitance | $C_{dep} = \\varepsilon_s/x_d$ | Series with $C_{OX}$ |
| Total C (depletion) | $C = C_{OX}C_{dep}/(C_{OX}+C_{dep})$ | Series combination |
| Min capacitance (HF) | $C_{min} = C_{OX}(\\varepsilon_s/x_{d,max}) / (C_{OX} + \\varepsilon_s/x_{d,max})$ | HF inversion |

**Physical interpretation checklist:**
- $V_G < V_{FB}$: Accumulation (holes attracted, $C = C_{OX}$, layer thickness $\\sim L_D$)
- $V_{FB} < V_G < V_{TH}$: Depletion (holes repelled, B⁻ ions uncovered, $C$ drops, $x_d$ grows as $\\sqrt{\\phi_s}$)
- $V_G > V_{TH}$: Inversion (electrons at surface, N-type channel formed, $x_d$ saturates at $x_{d,max}$)
- High frequency: $C$ stays at $C_{min}$ in inversion (minority carriers too slow)
- Low frequency: $C$ returns to $C_{OX}$ in inversion (inversion charge responds)
- Deep depletion: $C < C_{min}$ (fast sweep, inversion layer not yet formed)
- $V_{TH}$ increases with: higher $N_A$ (more doping), thicker oxide (larger $t_{ox}$)
- $V_{TH}$ decreases with: thinner oxide (more field control), positive oxide charge $Q_{fix}$
`;
