export const mosfetContent = `
# The MOSFET: The Switch That Powers the World

## What is a MOSFET?

**MOSFET** = Metal–Oxide–Semiconductor Field-Effect Transistor.

A transistor is, at its core, a **voltage-controlled switch**. The MOSFET is built directly on top of the MOS Capacitor concept.

---

## 1. The Architecture: Adding Source and Drain

Start with the MOS Capacitor: a metal gate, a thin oxide layer, and a P-type silicon body.

Now we add two **heavily-doped N-type regions** embedded into the P-type body, one on each side of the gate:

- **Source (S):** Where electrons enter the channel. In an NMOS, it's the N-type region with lower potential. Usually connected to ground.
- **Drain (D):** Where electrons exit the channel. Connected to the positive supply voltage.
- **Gate (G):** The control electrode. Applying voltage here opens or closes the channel.
- **Body/Bulk (B):** The P-type substrate. Usually connected to the most negative voltage in the circuit.

\`\`\`
MOSFET Cross-Section (N-channel MOSFET, NMOS):

      Gate (V_GS)
         ↓
  ┌──────────────────────┐
  │   Metal Gate         │
  ├──────────────────────┤
  │   Oxide (SiO₂)       │  ← insulating barrier (t_ox)
  ├──────────────────────┤
  │ N⁺ │  P-type body   │ N⁺ │
  │ Source│ ← Channel → │ Drain│
  │(S)    │ (under gate) │ (D)  │
  └───────┴──────────────┴──────┘
      ↑                      ↑
  V_S = 0                  V_D = V_DS > 0

  Current I_D flows from Drain to Source (conventional)
  Electrons flow from Source to Drain (actual electron flow)
\`\`\`

**Why doesn't current flow by default?**

Look at the path from Source (N⁺) through Body (P) to Drain (N⁺). This is an N-P-N structure — two PN junctions back to back. One of them is always **reverse-biased**:
- Source-to-Body junction: zero or forward bias
- Body-to-Drain junction: reverse bias

A reverse-biased PN junction blocks current. So with no gate voltage, the MOSFET is **OFF** — the switch is open, virtually no current flows.

---

## 2. Turning it ON: The Gate Voltage Creates a Channel

Apply a positive voltage $V_{GS}$ between Gate and Source (= Gate relative to the grounded source).

From the MOS Capacitor chapter: positive gate voltage repels holes from the P-type surface and, once $V_{GS} > V_{TH}$, creates an inversion layer of electrons right under the gate oxide.

This thin layer of electrons forms a **conductive N-type channel** connecting the N⁺ Source to the N⁺ Drain!

\`\`\`
MOSFET with V_GS > V_TH (Channel Formed):

  Gate
  ┌──────────────────────┐
  │   Metal Gate         │
  ├──────────────────────┤
  │   Oxide (SiO₂)       │
  ├──────────────────────┤
  │ N⁺ │≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡│ N⁺ │
  │ Source│← N-channel →│ Drain│
  │       │ (inversion  │      │
  │       │  layer)     │      │
  └───────┴──────────────┴──────┘
              ↑
        Electrons in inversion
        layer = the channel!
\`\`\`

Now the path Source → Channel → Drain is all N-type. Electrons can flow freely! The transistor is **ON**.

**Summary:** $V_{GS} < V_{TH}$ → OFF (switch open). $V_{GS} > V_{TH}$ → ON (channel exists, switch closed).

---

## 3. The Three Operating Regimes

Once the channel is formed ($V_{GS} > V_{TH}$), the drain voltage $V_{DS}$ determines the amount of current that flows. There are three distinct regimes:

---

### Regime 1: Cut-Off (OFF State)

**Condition:** $V_{GS} < V_{TH}$

No inversion layer forms. The N-P-N path remains blocked. Almost no current flows.

$$\\boxed{I_D \\approx 0}$$

*(In reality, a tiny "subthreshold leakage current" exists, but it's exponentially small below $V_{TH}$.)*

---

### Regime 2: Linear (Triode) Regime — The Variable Resistor

**Condition:** $V_{GS} > V_{TH}$ **AND** $V_{DS} < (V_{GS} - V_{TH})$

The channel is open, and the drain voltage is small. The channel looks like a simple **resistor** from Source to Drain.

**Physics:** The charge in the channel at any point $x$ along the channel depends on the local gate-to-channel voltage. At the source end, the gate-to-channel voltage is $V_{GS} - V_{TH}$ (maximum channel charge). At the drain end, it's $(V_{GS} - V_{TH} - V_{DS})$ (less charge because the local potential is higher).

The charge per unit area in the channel:
$$Q_{ch}(x) = C_{OX}(V_{GS} - V_{TH} - V(x))$$

Where $V(x)$ is the local channel potential ($0$ at source, $V_{DS}$ at drain).

Integrating the current along the channel (Gradual Channel Approximation):

$$\\boxed{I_D = \\mu_n C_{OX} \\frac{W}{L}\\left[(V_{GS} - V_{TH})V_{DS} - \\frac{V_{DS}^2}{2}\\right]}$$

**Every symbol:**
- $\\mu_n$ = electron mobility in the channel (cm²/V·s) — typically ~200-500 cm²/V·s in actual devices (lower than bulk due to surface scattering)
- $C_{OX} = \\varepsilon_{ox}/t_{ox}$ = oxide capacitance per unit area (F/cm²)
- $W$ = channel **Width** (the dimension perpendicular to the current flow, in μm) — wider → more current
- $L$ = channel **Length** (the distance from Source to Drain, in nm for modern chips) — shorter → more current (key to miniaturization!)
- $(V_{GS} - V_{TH})$ = **Gate overdrive** — how far above threshold we are

The factor $\\mu_n C_{OX} W/L$ is called the **transconductance parameter** $k_n'$:
$$k_n = \\mu_n C_{OX} \\frac{W}{L} \\quad \\text{(A/V}^2\\text{)}$$

So in the linear regime: $I_D = k_n[(V_{GS}-V_{TH})V_{DS} - V_{DS}^2/2]$

**For small $V_{DS}$** (so $V_{DS}^2/2 \\ll (V_{GS}-V_{TH})V_{DS}$):
$$I_D \\approx k_n(V_{GS} - V_{TH})V_{DS}$$

This is Ohm's law! The MOSFET acts like a resistor with:
$$R_{DS} = \\frac{V_{DS}}{I_D} \\approx \\frac{1}{k_n(V_{GS}-V_{TH})}$$

The resistance is controlled by the gate voltage. This is how MOSFETs are used as voltage-controlled resistors in analog circuits.

---

### Regime 3: Saturation (Pinch-Off) — The Current Source

**Condition:** $V_{GS} > V_{TH}$ **AND** $V_{DS} \\geq (V_{GS} - V_{TH})$

As we increase $V_{DS}$, the channel charge at the drain end $(V_{GS} - V_{TH} - V_{DS})$ decreases. When $V_{DS} = V_{GS} - V_{TH}$, the charge at the drain end becomes **zero**. The channel has been "pinched off" at the drain!

\`\`\`
Channel Pinch-Off:

V_GS > V_TH, V_DS < V_GS-V_TH:    V_GS > V_TH, V_DS = V_GS-V_TH:
  Gate                              Gate
  ──────────────                    ──────────────
  ════ Oxide ════                   ════ Oxide ════
  ███████████████  N⁺               ███████████  ●  N⁺
  Source  ← full →  Drain           Source  ← → ×  Drain
         channel                           pinch-off
                                           point!

The channel narrows to a point at the Drain end.
\`\`\`

Does current stop? **No!** Think of it like a garden hose pinched at one end — water still squirts out of the pinched tip! The electrons are shot across the tiny depletion region that forms at the pinch-off point, swept by the strong electric field there, and collected by the Drain.

**The crucial observation:** Once pinched off, increasing $V_{DS}$ further doesn't change the current significantly. The pinch-off point just moves slightly toward the Source, but the current is determined by the conditions at the Source end (where the channel is still intact). The current is now **independent of $V_{DS}$** and depends only on $V_{GS}$.

Substitute $V_{DS} = V_{GS} - V_{TH}$ into the linear formula to get the saturation current:

$$\\boxed{I_{D,sat} = \\frac{1}{2}\\mu_n C_{OX}\\frac{W}{L}(V_{GS} - V_{TH})^2 = \\frac{k_n}{2}(V_{GS} - V_{TH})^2}$$

This is one of the most important equations in electronics. The current depends on $(V_{GS} - V_{TH})^2$ — **quadratically** on the gate overdrive.

\`\`\`
I_D vs V_DS curves (Output Characteristics):

I_D ↑
    │                   ← Saturation (I_D ≈ const, just controlled by V_GS)
    │         V_GS4    ────────────────────────
    │        ////      (I increases with V_GS²)
    │       // V_GS3  ──────────────────────
    │      //   //
    │     // V_GS2   ─────────────────────
    │    //   //
    │   // V_GS1  ─────────────────────
    │  //   //
    │ //  //
    │//  (Linear/Triode region:
    │    I_D rises with V_DS)
    └───────────────────────────────→ V_DS
        ↑
       V_GS-V_TH boundary (where pinch-off occurs)
       shifts right for higher V_GS
\`\`\`

---

\`\`\`chart
{"type":"mosfet-iv","title":"MOSFET Output Characteristics — ID vs VDS (VTH=1V, kn=2 mA/V²)","VTH":1.0,"kn":2.0,"VGS_list":[1.5,2.0,2.5,3.0,3.5,4.0]}
\`\`\`

## 4. Channel Length Modulation (Reality Check)

In the ideal model above, saturation current is perfectly constant (flat lines in the $I_D$-$V_{DS}$ plot). In reality, as $V_{DS}$ increases past pinch-off:

- The pinch-off point moves slightly toward the Source
- The **effective channel length** decreases: $L_{eff} = L - \\Delta L$
- Since $I_D \\propto 1/L$, a shorter channel means slightly higher current

This **channel length modulation** effect is modeled with a correction factor:

$$I_{D,sat} = \\frac{1}{2}\\mu_n C_{OX}\\frac{W}{L}(V_{GS} - V_{TH})^2 \\cdot (1 + \\lambda V_{DS})$$

Where $\\lambda$ (lambda) is the **channel length modulation parameter** (typically 0.01–0.1 V$^{-1}$). It causes the saturation curves to have a slight positive slope instead of being perfectly flat.

The output resistance in saturation:
$$r_o = \\frac{1}{\\lambda I_D}$$

---

## 📋 Complete Law Summary — The MOSFET

| Law / Formula | Expression | Description |
|---|---|---|
| Threshold voltage | $V_{TH} = V_{FB} + 2\\Phi_F - Q_D/C_{OX}$ | Onset of inversion |
| Transconductance parameter | $k_n = \\mu_n C_{OX} W/L$ | MOSFET strength |
| Cut-off condition | $V_{GS} < V_{TH}$ | OFF state |
| Linear condition | $V_{GS} > V_{TH}$ AND $V_{DS} < V_{GS}-V_{TH}$ | Acts as resistor |
| Saturation condition | $V_{GS} > V_{TH}$ AND $V_{DS} \\geq V_{GS}-V_{TH}$ | Acts as current source |
| Current (linear) | $I_D = k_n[(V_{GS}-V_{TH})V_{DS} - V_{DS}^2/2]$ | Linear regime current |
| Current (saturation) | $I_D = \\frac{k_n}{2}(V_{GS}-V_{TH})^2$ | Saturation regime current |
| With channel length mod. | $I_D = \\frac{k_n}{2}(V_{GS}-V_{TH})^2(1+\\lambda V_{DS})$ | Real device |
| Pinch-off voltage | $V_{DS,sat} = V_{GS} - V_{TH}$ | Boundary linear/saturation |
| On-resistance (linear) | $R_{ON} = 1/[k_n(V_{GS}-V_{TH})]$ | For small $V_{DS}$ |
`;
