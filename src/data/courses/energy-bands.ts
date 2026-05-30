export const energyBandsContent = `
# Energy Bands in Semiconductors

## Starting Point: The Isolated Atom

In the previous chapter, we learned that electrons in an atom can only have specific, discrete energy levels — like the rungs of a ladder. For silicon (Si), which has 14 electrons, the outer electrons (valence electrons) sit in the 3s and 3p orbitals.

Now, the question is: **what happens when you bring $10^{23}$ silicon atoms close together to form a crystal?**

---

## 1. How Energy Bands Form — From Atoms to Crystal

### The Splitting of Energy Levels

Imagine first just two atoms brought close together. Their electrons begin to "feel" each other's presence. The Pauli Exclusion Principle says no two electrons can be in exactly the same quantum state. So the originally identical energy level of the two atoms must **split into two slightly different levels** — one slightly above, one slightly below the original.

Now bring $N$ atoms together. Each original level splits into $N$ slightly different levels. With $N = 10^{23}$ (the number of atoms in a typical crystal), these $10^{23}$ levels are packed so closely that they form what we call a **continuous energy band**.

\`\`\`
Splitting of Energy Levels as Atoms Come Together:

1 atom:     2 atoms:    5 atoms:    10²³ atoms:
   ─            ─           ─────      ═══════  ← BAND
               ─           ─────
                           ─────      (gap, forbidden)
   ─            ─           ─────      ═══════  ← BAND
               ─           ─────
                           ─────

Increasing number of atoms →
\`\`\`

### The Three Key Bands

From this process, in a semiconductor, three energy regions emerge:

**1. Valence Band (top energy: $E_V$)**
This is the highest energy band that is **completely filled** with electrons at absolute zero (0 Kelvin). These electrons are the ones participating in covalent bonds between silicon atoms. They are "tied up" and cannot move freely. No current flows.

**2. Conduction Band (bottom energy: $E_C$)**
This is the next band above the valence band. It is completely **empty at 0 K**. If an electron can reach this band, it moves freely through the crystal and can carry electrical current.

**3. Bandgap ($E_g = E_C - E_V$)**
This is the **forbidden zone** between the two bands. No allowed quantum states exist here. No electron can have an energy in this range. The size of the bandgap is the most important characteristic of a semiconductor.

\`\`\`
Energy Band Diagram — The Standard Picture:

Energy
  ↑
  │   ════════════════════════════  ← E_C (bottom of conduction band)
  │
  │    ← Bandgap E_g (FORBIDDEN, no electrons allowed here)
  │
  │   ════════════════════════════  ← E_V (top of valence band)
  │
  │   (deeper filled bands below, not important for semiconductors)
\`\`\`

### The Golden Classification Rule

The size of $E_g$ completely determines what kind of material you have:

| Material type | Bandgap $E_g$ | Example | Behavior |
|---|---|---|---|
| Metal | 0 (bands overlap) | Copper | Always conducts |
| Semiconductor | ~0.1 to ~3 eV | Si (1.12 eV), GaAs (1.42 eV), Ge (0.66 eV) | Controlled conduction |
| Insulator | > 5 eV | SiO₂ (9 eV), Diamond (5.5 eV) | Barely conducts |

Silicon is the king of semiconductors: its 1.12 eV gap is small enough that thermal energy at room temperature can occasionally pop an electron across, but large enough that this doesn't happen too often and we have good control.

---

## 2. Holes — The Second Type of Carrier

When an electron absorbs enough energy (from heat, light, etc.) and jumps from the valence band to the conduction band, it leaves behind an **empty state** in the valence band. This empty state is called a **hole**.

\`\`\`
Electron-Hole Pair Creation:

Before:                          After:
Conduction band:  empty          Conduction band:  e⁻  ← free electron!
                                                   ↑
                                           (absorbed energy = E_g)
                                                   |
Valence band:     full           Valence band:  ○  ← hole (empty state)
\`\`\`

### Why Do We Treat Holes as Particles?

Imagine a theater with 1000 seats. All seats are filled. One person (electron) leaves seat 47 (leaving hole 47). Now the person in seat 46 can move to 47, person in 45 moves to 46... The "hole" effectively moves in the opposite direction from the electrons.

This is enormously useful: instead of tracking $10^{23}$ electrons shifting slightly, we track just one hole moving freely. A **hole behaves exactly like a real particle with:**
- **Positive charge** $+q$ (because removing a negative electron leaves a net positive)
- A specific effective mass $m_h^*$
- Its own mobility $\\mu_p$

In summary: in a semiconductor, we have **two types of charge carriers:**
- **Electrons ($n$):** negative charge, in the conduction band, move freely
- **Holes ($p$):** positive charge, in the valence band, move freely

---

## 3. Effective Mass — Moving Through a Crystal is Not Like Moving in Vacuum

An electron moving through the silicon crystal is not moving in free space. It constantly interacts with the periodic electric field created by all the silicon atoms (positive ion cores). These interactions modify how the electron responds to external forces.

Instead of tracking all these complex interactions, we use a brilliant shortcut: we pretend the electron moves in a **vacuum**, but give it a fake "adjusted" mass called the **Effective Mass** ($m^*$). This effective mass absorbs all the crystal interaction effects.

The effective mass is defined by the curvature of the energy band:
$$m^* = \\frac{\\hbar^2}{d^2E/dk^2}$$

Where $k$ is the **wave vector** (the quantum mechanical equivalent of momentum for an electron in a crystal). The sharper the curvature of the $E$ vs $k$ band diagram, the lighter the effective mass, meaning the electron responds more easily to forces (more mobile).

**For Silicon:**
- Effective mass of electrons: $m_e^* = 1.08 \\, m_0$ (slightly heavier than free electron)
- Effective mass of holes: $m_h^* = 0.56 \\, m_0$ (lighter than free electron!)

Where $m_0 = 9.11 \\times 10^{-31}$ kg is the actual free electron mass.

\`\`\`
E vs k Diagram (simplified — very important concept!):

Energy E
  ↑         ·      Conduction Band
  │        ·  ·      (electrons sit near the minimum — bottom of curve)
  │       ·    ·
  │     ──────────── E_C
  │            Bandgap
  │     ──────────── E_V
  │       ·    ·
  │        ·  ·      Valence Band
  │         ·       (holes sit near the maximum — top of curve)
  └──────────────────────────→ k (wave vector)
             0

The curvature at the band minimum/maximum gives the effective mass.
Sharp curvature = small m* = light, mobile carrier.
\`\`\`

---

## 4. Density of States — How Many Energy Levels Are Available?

Knowing that bands exist is not enough. We need to know **how many available quantum states (energy levels) exist per unit volume per unit energy** in each band. This is the **Density of States (DOS)**, written as $N(E)$.

The result from quantum mechanics for the conduction band (near $E_C$):
$$N_C(E) \\propto \\sqrt{E - E_C} \\quad \\text{for } E > E_C$$

And for the valence band (near $E_V$):
$$N_V(E) \\propto \\sqrt{E_V - E} \\quad \\text{for } E < E_V$$

The key numbers for silicon at 300K are the **Effective Density of States**:
- **$N_C = 2.8 \\times 10^{19}$ cm$^{-3}$** (total "seats" in conduction band per unit volume, near $E_C$)
- **$N_V = 1.04 \\times 10^{19}$ cm$^{-3}$** (total "seats" in valence band per unit volume, near $E_V$)

These come from integrating the DOS over the band, and are given by:
$$N_C = 2 \\left( \\frac{2\\pi m_e^* kT}{h^2} \\right)^{3/2}$$
$$N_V = 2 \\left( \\frac{2\\pi m_h^* kT}{h^2} \\right)^{3/2}$$

Note that $N_C > N_V$ for silicon because $m_e^* > m_h^*$ (electrons are heavier → more available states near $E_C$).

---

## 5. Fermi-Dirac Distribution — What is the Probability of Occupation?

\`\`\`chart
{"type":"fermi-dirac","title":"Fermi-Dirac Distribution f(E) at Different Temperatures","EF":0,"temps":[0,300,600,1000]}
\`\`\`

The Density of States tells us how many chairs exist. But not every chair is occupied! We need to know the **probability that an electron actually sits in a chair at energy $E$** given the temperature $T$.

This probability is given by the **Fermi-Dirac distribution:**

$$f(E) = \\frac{1}{1 + \\exp\\left(\\frac{E - E_F}{kT}\\right)}$$

**Every term explained:**
- $f(E)$ = probability that a state at energy $E$ is occupied by an electron (ranges from 0 to 1)
- $E_F$ = the **Fermi Level** (or Fermi energy) — the most important single concept in semiconductor physics
- $k = 8.617 \\times 10^{-5}$ eV/K = Boltzmann's constant
- $T$ = absolute temperature in Kelvin

### The Fermi Level $E_F$ — The Most Important Concept

The Fermi level is the energy at which the probability of finding an electron is exactly **50%**. It's like a "chemical potential" that balances the electron population.

$$f(E_F) = \\frac{1}{1 + e^0} = \\frac{1}{2} = 50\\%$$

\`\`\`
Fermi-Dirac Distribution at Different Temperatures:

f(E)
1.0 ─────────────\\
                  \\     At T = 0K: Sharp step at E_F
0.5 ─ ─ ─ ─ ─ ─ ─X─ ─ ─ ─ ─ ─ ─ ← always 50% at E_F
                    \\ ← gets softer as T rises
0.0 ─────────────────\\──────────→ E
                     E_F

At T = 0K: ALL states below E_F are filled (f=1), ALL states above are empty (f=0)
At T > 0K: A smooth "smearing" of a few kT wide appears around E_F.
           Some electrons above E_F, some holes below E_F.
\`\`\`

**Key property:** At room temperature ($T = 300K$), $kT = 0.026$ eV. For energies more than a few $kT$ above $E_F$, the Fermi-Dirac function can be approximated by the **Boltzmann approximation:**
$$f(E) \\approx \\exp\\left(-\\frac{E - E_F}{kT}\\right) \\quad \\text{for } E \\gg E_F$$

This approximation is valid when the Fermi level is well within the bandgap (which it is for non-degenerate semiconductors), and it makes calculations much easier.

---

## 6. Carrier Concentrations — Combining DOS and Fermi-Dirac

The **electron concentration** $n$ in the conduction band = (number of available states) × (probability each is occupied):

$$n = \\int_{E_C}^{\\infty} N_C(E) \\cdot f(E) \\, dE = N_C \\exp\\left(-\\frac{E_C - E_F}{kT}\\right)$$

The **hole concentration** $p$ in the valence band = (number of available states) × (probability state is EMPTY = 1-f):

$$p = \\int_{-\\infty}^{E_V} N_V(E) \\cdot [1 - f(E)] \\, dE = N_V \\exp\\left(-\\frac{E_F - E_V}{kT}\\right)$$

These are the two most fundamental equations of semiconductor physics. The Fermi level $E_F$ appears in both: it couples the electron and hole populations.

---

## 7. The Law of Mass Action — $n \\cdot p = n_i^2$

Multiply $n$ and $p$ together:
$$n \\cdot p = N_C \\exp\\left(-\\frac{E_C - E_F}{kT}\\right) \\cdot N_V \\exp\\left(-\\frac{E_F - E_V}{kT}\\right)$$

The $E_F$ terms cancel:
$$n \\cdot p = N_C N_V \\exp\\left(-\\frac{E_C - E_V}{kT}\\right) = N_C N_V \\exp\\left(-\\frac{E_g}{kT}\\right)$$

This product is **independent of $E_F$** (independent of doping!). It is a constant determined only by temperature and material. We define:

$$\\boxed{n \\cdot p = n_i^2}$$

Where $n_i$ is the **intrinsic carrier concentration**.

**This is the Law of Mass Action** — one of the most powerful laws in semiconductor physics. It means: if you add more electrons (by doping), you must have fewer holes, such that their product stays constant at $n_i^2$.

---

\`\`\`chart
{"type":"band-diagram","title":"Energy Band Diagram — Intrinsic Silicon (n = p = nᵢ)","subtype":"intrinsic"}
\`\`\`

## 8. Intrinsic Semiconductors — Pure Silicon

An **intrinsic semiconductor** is a perfectly pure crystal with no impurities. The ONLY source of free carriers is thermal generation: some electrons occasionally gain enough thermal energy to jump the bandgap, leaving holes behind.

Since every electron that jumps creates exactly one hole:
$$n = p = n_i$$

(intrinsic condition)

From the Law of Mass Action:
$$n_i^2 = N_C N_V \\exp\\left(-\\frac{E_g}{kT}\\right)$$

Taking the square root:
$$\\boxed{n_i = \\sqrt{N_C N_V} \\, \\exp\\left(-\\frac{E_g}{2kT}\\right)}$$

This is a crucial formula. It shows that $n_i$ depends exponentially on temperature and bandgap. **Silicon at 300K: $n_i \\approx 10^{10}$ cm$^{-3}$**, meaning only about 1 in $5 \\times 10^{12}$ silicon atoms has a free electron at room temperature. Silicon is indeed almost an insulator when pure!

---

## 9. The Intrinsic Fermi Level $E_i$

For an intrinsic semiconductor, the Fermi level is called $E_i$ (intrinsic Fermi level). Setting $n = p$ and solving for the Fermi level position:

$$E_i = \\frac{E_C + E_V}{2} + \\frac{3}{4}kT \\ln\\left(\\frac{m_h^*}{m_e^*}\\right) = E_{mid} + \\frac{3}{4}kT \\ln\\left(\\frac{m_h^*}{m_e^*}\\right)$$

where $E_{mid} = (E_C + E_V)/2$ is the exact center of the bandgap.

**Physical intuition:** If $m_e^* = m_h^*$ (equal masses), $E_i$ would sit exactly at the center. But in silicon, holes are lighter ($m_h^* = 0.56 m_0 < m_e^* = 1.08 m_0$). Lighter holes → fewer available states in valence band ($N_V < N_C$). To keep $n = p$ in steady state, the Fermi level must move slightly toward the valence band to increase the probability of hole creation. So $E_i$ sits **slightly below the midgap**.

---

## 📋 Complete Law Summary — Energy Bands

| Law / Formula | Expression | Description |
|---|---|---|
| Electron concentration | $n = N_C \\exp\\left(-\\frac{E_C - E_F}{kT}\\right)$ | Electrons in conduction band |
| Hole concentration | $p = N_V \\exp\\left(-\\frac{E_F - E_V}{kT}\\right)$ | Holes in valence band |
| Effective density (conduction) | $N_C = 2\\left(\\frac{2\\pi m_e^* kT}{h^2}\\right)^{3/2}$ | Available states near $E_C$ |
| Effective density (valence) | $N_V = 2\\left(\\frac{2\\pi m_h^* kT}{h^2}\\right)^{3/2}$ | Available states near $E_V$ |
| Bandgap | $E_g = E_C - E_V$ | Forbidden energy range |
| Intrinsic concentration | $n_i = \\sqrt{N_C N_V}\\,\\exp\\left(-\\frac{E_g}{2kT}\\right)$ | Intrinsic carriers at temp T |
| Law of Mass Action | $n \\cdot p = n_i^2$ | Always valid at equilibrium |
| Intrinsic condition | $n = p = n_i$ | Only for pure semiconductor |
| Intrinsic Fermi level | $E_i = E_{mid} + \\frac{3}{4}kT\\ln\\left(\\frac{m_h^*}{m_e^*}\\right)$ | Position of $E_F$ in pure SC |
| Midgap energy | $E_{mid} = (E_C + E_V)/2$ | Geometric center of gap |
| Fermi-Dirac distribution | $f(E) = \\frac{1}{1+\\exp((E-E_F)/kT)}$ | Probability of occupation |

**Silicon data at T = 300K:**
- $E_g = 1.12$ eV, $N_C = 2.8 \\times 10^{19}$ cm$^{-3}$, $N_V = 1.04 \\times 10^{19}$ cm$^{-3}$
- $m_e^* = 1.08\\,m_0$, $m_h^* = 0.56\\,m_0$, $kT = 0.026$ eV
- $n_i \\approx 10^{10}$ cm$^{-3}$

---

# TD 08 — Intrinsic Semiconductors: Complete Solutions

*Given data (from the problem sheet):*
- Pure Silicon at $T = 300K$
- $E_g = 1.12$ eV
- $N_C = 2.8 \\times 10^{19}$ cm$^{-3}$
- $N_V = 1.04 \\times 10^{19}$ cm$^{-3}$
- $m_e^* = 1.08\\,m_0$, $m_h^* = 0.56\\,m_0$
- $k = 8.617 \\times 10^{-5}$ eV/K, at $T=300K$: $kT = 0.026$ eV

$$n = N_C\\exp\\!\\left[-\\frac{E_C-E_F}{kT}\\right] \\qquad p = N_V\\exp\\!\\left[-\\frac{E_F-E_V}{kT}\\right]$$

---

## Exercise 1: Pure Silicon at T = 300K

### Question 1 — Find the relation between $n_i$ and $E_g$

**Starting point:** The material is intrinsic (pure), so $n = p = n_i$.

**Step 1:** Write out the formulas for $n$ and $p$:
$$n = N_C \\exp\\left(-\\frac{E_C - E_F}{kT}\\right)$$
$$p = N_V \\exp\\left(-\\frac{E_F - E_V}{kT}\\right)$$

**Step 2:** Multiply $n$ and $p$ together:
$$n \\cdot p = N_C N_V \\exp\\left(-\\frac{E_C - E_F}{kT}\\right) \\exp\\left(-\\frac{E_F - E_V}{kT}\\right)$$

**Step 3:** Combine the exponents:
$$n \\cdot p = N_C N_V \\exp\\left(-\\frac{(E_C - E_F) + (E_F - E_V)}{kT}\\right) = N_C N_V \\exp\\left(-\\frac{E_C - E_V}{kT}\\right)$$

**Step 4:** Since $E_C - E_V = E_g$ (definition of bandgap), and since $n = p = n_i$:
$$n_i^2 = N_C N_V \\exp\\left(-\\frac{E_g}{kT}\\right)$$

**Taking the square root:**
$$\\boxed{n_i = \\sqrt{N_C N_V} \\, \\exp\\left(-\\frac{E_g}{2kT}\\right)}$$

*Note the factor of 2 in the denominator of the exponent — this comes from taking the square root.*

---

### Question 2 — Calculate $n_i$ numerically

**Step 1 — Compute the prefactor $\\sqrt{N_C N_V}$:**
$$N_C \\times N_V = (2.8 \\times 10^{19}) \\times (1.04 \\times 10^{19})$$
$$= (2.8 \\times 1.04) \\times 10^{38} = 2.912 \\times 10^{38} \\text{ cm}^{-6}$$
$$\\sqrt{2.912 \\times 10^{38}} = \\sqrt{2.912} \\times 10^{19} = 1.706 \\times 10^{19} \\text{ cm}^{-3}$$

*Quick check: $\\sqrt{2.912} \\approx 1.71$ because $1.71^2 = 2.924 \\approx 2.912$ ✓*

**Step 2 — Compute the exponent $\\frac{E_g}{2kT}$:**
$$2kT = 2 \\times 0.026 = 0.052 \\text{ eV}$$
$$\\frac{E_g}{2kT} = \\frac{1.12}{0.052} = 21.54$$

**Step 3 — Compute the exponential:**
$$\\exp(-21.54) = e^{-21.54}$$

To compute this: $e^{-21.54} = e^{-21} \\times e^{-0.54}$

We know $e^{-21} \\approx 7.58 \\times 10^{-10}$ and $e^{-0.54} \\approx 0.583$

$$\\exp(-21.54) \\approx 7.58 \\times 10^{-10} \\times 0.583 \\approx 4.42 \\times 10^{-10}$$

**Step 4 — Final answer:**
$$n_i = 1.706 \\times 10^{19} \\times 4.42 \\times 10^{-10}$$
$$\\boxed{n_i \\approx 7.5 \\times 10^9 \\text{ cm}^{-3}}$$

*This is consistent with the standard reference value of $n_i \\approx 10^{10}$ cm$^{-3}$ for silicon at 300K. The slight difference comes from the exact values of constants used.*

**Physical interpretation:** There are about $7.5 \\times 10^9$ free electrons (and the same number of holes) per cubic centimeter in pure silicon at room temperature. Silicon has about $5 \\times 10^{22}$ atoms/cm³, so only about 1 in $6 \\times 10^{12}$ silicon atoms contributes a free electron. This is why pure silicon is nearly an insulator!

---

### Question 3 — Find $n_0$ and $p_0$

**This is straightforward.** The crystal is intrinsic (perfectly pure), so by definition:
$$n_0 = p_0 = n_i$$

$$\\boxed{n_0 = p_0 \\approx 7.5 \\times 10^9 \\text{ cm}^{-3}}$$

*The subscript "0" means "at equilibrium" (no external disturbance). The equal sign holds ONLY for intrinsic (pure) semiconductors. The moment you add impurities (doping), $n_0 \\neq p_0$, but their product $n_0 \\cdot p_0 = n_i^2$ always holds.*

---

## Exercise 2: The Position of the Intrinsic Fermi Level

Recall: In a pure semiconductor, the Fermi level is called $E_i$ (intrinsic level). The question asks where exactly it sits relative to the middle of the bandgap $E_{mid} = (E_C + E_V)/2$.

### Question 1 — Derive the formula for $E_i$

**Starting point:** For an intrinsic semiconductor, $n = p$.

**Step 1:** Set the formulas for $n$ and $p$ equal:
$$N_C \\exp\\left(-\\frac{E_C - E_i}{kT}\\right) = N_V \\exp\\left(-\\frac{E_i - E_V}{kT}\\right)$$

**Step 2:** Take the natural logarithm of both sides:
$$\\ln(N_C) - \\frac{E_C - E_i}{kT} = \\ln(N_V) - \\frac{E_i - E_V}{kT}$$

**Step 3:** Rearrange to isolate $E_i$:
$$\\frac{E_i - E_V}{kT} - \\frac{E_C - E_i}{kT} = \\ln(N_V) - \\ln(N_C)$$
$$\\frac{2E_i - E_V - E_C}{kT} = \\ln\\left(\\frac{N_V}{N_C}\\right)$$
$$2E_i = E_C + E_V + kT \\ln\\left(\\frac{N_V}{N_C}\\right)$$
$$E_i = \\frac{E_C + E_V}{2} + \\frac{kT}{2}\\ln\\left(\\frac{N_V}{N_C}\\right)$$

**Step 4:** Now, since $N_C \\propto (m_e^*)^{3/2}$ and $N_V \\propto (m_h^*)^{3/2}$:
$$\\frac{N_V}{N_C} = \\left(\\frac{m_h^*}{m_e^*}\\right)^{3/2}$$

So:
$$\\frac{kT}{2}\\ln\\left(\\frac{N_V}{N_C}\\right) = \\frac{kT}{2} \\cdot \\frac{3}{2}\\ln\\left(\\frac{m_h^*}{m_e^*}\\right) = \\frac{3}{4}kT\\ln\\left(\\frac{m_h^*}{m_e^*}\\right)$$

**Final formula:**
$$\\boxed{E_i = E_{mid} + \\frac{3}{4}kT\\ln\\left(\\frac{m_h^*}{m_e^*}\\right)}$$

So the deviation from the midgap center is:
$$E_i - E_{mid} = \\frac{3}{4}kT\\ln\\left(\\frac{m_h^*}{m_e^*}\\right)$$

---

### Question 2 — Calculate $E_i - E_{mid}$ numerically

**Step 1:** Plug in values:
$$E_i - E_{mid} = \\frac{3}{4} \\times (0.026 \\text{ eV}) \\times \\ln\\left(\\frac{0.56}{1.08}\\right)$$

**Step 2:** Compute the ratio:
$$\\frac{m_h^*}{m_e^*} = \\frac{0.56}{1.08} = 0.5185$$

**Step 3:** Compute the natural log:
$$\\ln(0.5185) = -0.656$$

*(Recall: $\\ln(0.5) = -0.693$, $\\ln(0.5185)$ is slightly less negative ✓)*

**Step 4:** Multiply everything:
$$E_i - E_{mid} = \\frac{3}{4} \\times 0.026 \\times (-0.656)$$
$$= 0.0195 \\times (-0.656)$$
$$\\boxed{E_i - E_{mid} = -0.0128 \\text{ eV} \\approx -12.8 \\text{ meV}}$$

The result is **negative**, meaning $E_i$ is **below** the midgap center.

---

### Question 3 — Which band does $E_i$ approach, and why?

**Answer:** $E_i$ shifts toward the **Valence Band** (since $E_i - E_{mid} < 0$, it is below the midpoint, i.e., closer to $E_V$).

**Physical Reasoning (step by step):**

1. The effective mass of holes ($m_h^* = 0.56\\,m_0$) is **less** than the effective mass of electrons ($m_e^* = 1.08\\,m_0$).

2. The effective density of states is proportional to $(m^*)^{3/2}$. Therefore:
   - More available states in the conduction band: $N_C > N_V$
   - Fewer available states in the valence band: $N_V < N_C$

3. For an intrinsic semiconductor, we need exactly as many electrons as holes: $n = p$.

4. Since the conduction band has MORE available chairs ($N_C > N_V$), a given Fermi level position near midgap would put more electrons in the CB than holes in VB.

5. To restore balance ($n = p$), the Fermi level must shift **downward** (closer to VB). This increases the probability of holes forming (more of the VB states become "almost empty") while slightly decreasing the probability of electrons in the CB. Equilibrium is restored.

**Energy diagram:**
\`\`\`
E_C ════════════════════
         ↕ 0.56 eV     (upper half of gap)

E_mid ─ ─ ─ ─ ─ ─ ─ ─
         ↕ 0.013 eV   ← this tiny shift
E_i  ─ ─ ─ ─ ─ ─ ─ ─  ← intrinsic Fermi level (12.8 meV below midgap)
         ↕ 0.547 eV    (lower half of gap)

E_V ════════════════════
\`\`\`

The shift of 12.8 meV is very small compared to the total gap of 1.12 eV (only about 1.1%), so the intrinsic Fermi level is approximately at midgap for most purposes.
`;
