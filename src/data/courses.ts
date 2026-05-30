import { quantumContent } from "./courses/quantum";
import { energyBandsContent } from "./courses/energy-bands";
import { electricalConductionContent } from "./courses/electrical-conduction";
import { generationRecombinationContent } from "./courses/generation-recombination";
import { pnJunctionContent } from "./courses/pn-junction";
import { mosCapacitorContent } from "./courses/mos-capacitor";
import { mosfetContent } from "./courses/mosfet";

export interface Course {
  id: string;
  title: string;
  description: string;
  content: string;
}

export const courses: Course[] = [
  {
    id: "quantum",
    title: "1. Quantum Physics",
    description: "Wave-particle duality, atomic models, and the mysterious Schrödinger equation.",
    content: quantumContent,
  },
  {
    id: "energy-bands",
    title: "2. Energy Bands",
    description: "From isolated atoms to continuous bands, effective mass, and intrinsic silicon (TD 08).",
    content: energyBandsContent,
  },
  {
    id: "electrical-conduction",
    title: "3. Electrical Conduction",
    description: "Drift, diffusion, Einstein's relation, and the Hall Effect (TD 12).",
    content: electricalConductionContent,
  },
  {
    id: "generation-recombination",
    title: "4. Generation & Recombination",
    description: "Creating and destroying carriers, direct vs indirect gaps, and carrier decay (TD 13).",
    content: generationRecombinationContent,
  },
  {
    id: "pn-junction",
    title: "5. The PN Junction",
    description: "Depletion zones, built-in potentials, and the bedrock of the diode (TD 16 & TD 14).",
    content: pnJunctionContent,
  },
  {
    id: "mos-capacitor",
    title: "6. The MOS Capacitor",
    description: "Accumulation, depletion, strong inversion, and mastering the Threshold Voltage.",
    content: mosCapacitorContent,
  },
  {
    id: "mosfet",
    title: "7. The MOSFET",
    description: "Turning the MOS capacitor into a switch. Cut-off, Triode, and Saturation regimes.",
    content: mosfetContent,
  }
];
