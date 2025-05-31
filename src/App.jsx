import React, { useState, useEffect, useRef } from "react";
import TopicList from "./components/TopicList";
import { Button } from "@/components/ui/button";

import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
const topicsData = [
  {
    id: "phase1",
    title:
      "Phase 1: Pre-Nursing Foundations & Getting into Nursing School (0-1 year)",
    children: [
      {
        id: "highSchool",
        title: "1. High School & Pre-Requisite Courses",
        children: [
          {
            id: "biology",
            title: "Biology",
            children: [
              {
                id: "cellBiology",
                title: "Cell Biology",
                children: [
                  {
                    id: "cellTheory",
                    title: "Cell theory",
                    content:
                      "All living things are composed of cells, cells are the basic units of structure and function in living things, and all cells come from pre-existing cells.",
                  },
                  {
                    id: "prokaryoticEukaryotic",
                    title: "Prokaryotic vs. eukaryotic cells",
                    content:
                      "Understanding the fundamental differences in their structure (e.g., nucleus, membrane-bound organelles).",
                  },
                  {
                    id: "organelles",
                    title: "Detailed structure and function of organelles",
                    children: [
                      {
                        id: "nucleus",
                        title: "Nucleus",
                        content:
                          "Contains genetic material (DNA), controls cell activities.",
                      },
                      {
                        id: "mitochondria",
                        title: "Mitochondria",
                        content:
                          "Powerhouse of the cell, generates ATP through cellular respiration.",
                      },
                      {
                        id: "er",
                        title: "Endoplasmic Reticulum (ER)",
                        children: [
                          {
                            id: "roughER",
                            title: "Rough ER",
                            content:
                              "Protein synthesis and modification due to ribosomes.",
                          },
                          {
                            id: "smoothER",
                            title: "Smooth ER",
                            content:
                              "Lipid synthesis, detoxification, calcium storage.",
                          },
                        ],
                      },
                      {
                        id: "ribosomes",
                        title: "Ribosomes",
                        content: "Site of protein synthesis.",
                      },
                      {
                        id: "golgi",
                        title: "Golgi Apparatus",
                        content:
                          "Modifies, sorts, and packages proteins and lipids for secretion or delivery to other organelles.",
                      },
                      {
                        id: "lysosomes",
                        title: "Lysosomes",
                        content:
                          "Contain digestive enzymes to break down waste and cellular debris.",
                      },
                      {
                        id: "peroxisomes",
                        title: "Peroxisomes",
                        content:
                          "Involved in detoxification and metabolism of fatty acids.",
                      },
                      {
                        id: "cellMembrane",
                        title: "Cell Membrane",
                        content:
                          "Selectively permeable barrier, composed of a lipid bilayer with embedded proteins.",
                      },
                    ],
                  },
                  {
                    id: "cellularTransport",
                    title: "Cellular Transport",
                    children: [
                      {
                        id: "passiveTransport",
                        title: "Passive Transport",
                        content:
                          "Movement of substances across the membrane without requiring energy.",
                      },
                      {
                        id: "diffusion",
                        title: "Diffusion",
                        content:
                          "Movement of molecules from an area of high concentration to low concentration.",
                      },
                      {
                        id: "osmosis",
                        title: "Osmosis",
                        content:
                          "Movement of water across a semipermeable membrane from an area of high water concentration (low solute) to low water concentration (high solute).",
                      },
                      {
                        id: "facilitatedDiffusion",
                        title: "Facilitated Diffusion",
                        content:
                          "Movement of molecules across the membrane with the help of transport proteins.",
                      },
                      {
                        id: "activeTransport",
                        title: "Active Transport",
                        content:
                          "Movement of substances across the membrane requiring energy (ATP).",
                      },
                      {
                        id: "primaryActiveTransport",
                        title: "Primary Active Transport",
                        content:
                          "Energy directly used to move substances against their concentration gradient (e.g., Na+/K+ pump).",
                      },
                      {
                        id: "secondaryActiveTransport",
                        title: "Secondary Active Transport",
                        content:
                          "Energy stored in an ionic gradient (created by primary active transport) is used to move another substance against its concentration gradient (symport/antiport).",
                      },
                      {
                        id: "bulkTransport",
                        title: "Bulk Transport",
                        content:
                          "Movement of large particles or large amounts of substances across the membrane.",
                      },
                      {
                        id: "endocytosis",
                        title: "Endocytosis",
                        content:
                          "Cell engulfs substances from the outside (phagocytosis - solids, pinocytosis - liquids, receptor-mediated).",
                      },
                      {
                        id: "exocytosis",
                        title: "Exocytosis",
                        content:
                          "Cell releases substances to the outside by fusion of vesicles with the plasma membrane.",
                      },
                      {
                        id: "fluidBalance",
                        title: "Critical for fluid balance",
                        content:
                          "Regulates water movement and solute concentrations in the body.",
                      },
                      {
                        id: "drugMovement",
                        title: "Drug movement",
                        content:
                          "Impacts how drugs are absorbed, distributed, and eliminated in the body.",
                      },
                    ],
                  },
                  {
                    id: "basicBiochemistry",
                    title: "Basic Biochemistry",
                    children: [
                      {
                        id: "macromolecules",
                        title: "Macromolecules",
                        content:
                          "Large biological molecules essential for life.",
                        children: [
                          {
                            id: "carbohydrates",
                            title: "Carbohydrates",
                            content:
                              "Primary source of energy, structural components (sugars, starches, cellulose).",
                          },
                          {
                            id: "lipids",
                            title: "Lipids",
                            content:
                              "Energy storage, structural components of membranes, hormones (fats, oils, phospholipids, steroids).",
                          },
                          {
                            id: "proteins",
                            title: "Proteins",
                            content:
                              "Diverse functions including enzymes, structural support, transport, signaling (amino acid building blocks).",
                          },
                          {
                            id: "nucleicAcids",
                            title: "Nucleic Acids",
                            content:
                              "Store and transmit genetic information (DNA, RNA).",
                          },
                        ],
                      },
                      {
                        id: "enzymes",
                        title: "Enzymes",
                        content:
                          "Biological catalysts that speed up chemical reactions.",
                        children: [
                          {
                            id: "enzymeFunction",
                            title: "Function",
                            content: "Lower activation energy of reactions.",
                          },
                          {
                            id: "enzymeFactors",
                            title: "Factors affecting activity",
                            content:
                              "Temperature, pH, substrate concentration, inhibitors.",
                          },
                        ],
                      },
                      {
                        id: "phScale",
                        title: "pH Scale",
                        content:
                          "Measures the acidity or alkalinity of a solution (0-14).",
                      },
                      {
                        id: "buffers",
                        title: "Buffers",
                        content: "Solutions that resist changes in pH.",
                      },
                      {
                        id: "metabolicProcesses",
                        title: "Fundamental for metabolic processes",
                        content:
                          "Underpins all biochemical reactions in the body.",
                      },
                      {
                        id: "drugActionsBiochem",
                        title: "Drug actions",
                        content:
                          "Many drugs interact with enzymes or other biomolecules.",
                      },
                      {
                        id: "acidBaseBalanceBiochem",
                        title: "Acid-base balance",
                        content: "Buffers in the blood maintain a stable pH.",
                      },
                    ],
                  },
                  {
                    id: "cellularRespiration",
                    title: "Cellular Respiration",
                    content: "Process by which cells generate ATP (energy).",
                    children: [
                      {
                        id: "glycolysis",
                        title: "Glycolysis",
                        content:
                          "Breakdown of glucose into pyruvate (occurs in the cytoplasm).",
                      },
                      {
                        id: "krebsCycle",
                        title: "Krebs Cycle (Citric Acid Cycle)",
                        content:
                          "Oxidation of pyruvate to produce electron carriers (NADH, FADH2) and some ATP (occurs in the mitochondrial matrix).",
                      },
                      {
                        id: "etc",
                        title: "Electron Transport Chain (ETC)",
                        content:
                          "Transfer of electrons to generate a large amount of ATP (oxidative phosphorylation, occurs in the inner mitochondrial membrane).",
                      },
                      {
                        id: "atpGeneration",
                        title: "Basic understanding of ATP generation",
                        content: "Primary energy currency of the cell.",
                      },
                      {
                        id: "aerobicPathways",
                        title: "Aerobic pathways",
                        content: "Require oxygen (Krebs cycle, ETC).",
                      },
                      {
                        id: "anaerobicPathways",
                        title: "Anaerobic pathways",
                        content:
                          "Do not require oxygen (glycolysis, fermentation).",
                      },
                      {
                        id: "energyDemands",
                        title: "Key for understanding energy demands",
                        content: "Different tissues have varying energy needs.",
                      },
                      {
                        id: "hypoxia",
                        title: "Hypoxia",
                        content: "Lack of oxygen impacts ATP production.",
                      },
                      {
                        id: "shock",
                        title: "Shock",
                        content: "Can lead to impaired cellular respiration.",
                      },
                    ],
                  },
                  {
                    id: "basicGenetics",
                    title: "Basic Genetics",
                    content: "Study of heredity and genes.",
                    children: [
                      {
                        id: "dnaRnaStructure",
                        title: "DNA/RNA structure",
                        content:
                          "Double helix of DNA, single strand of RNA, nitrogenous bases (A, T/U, C, G).",
                      },
                      {
                        id: "replication",
                        title: "Replication",
                        content: "Process of copying DNA.",
                      },
                      {
                        id: "proteinSynthesis",
                        title: "Protein synthesis",
                        children: [
                          {
                            id: "transcription",
                            title: "Transcription",
                            content: "DNA is transcribed into mRNA.",
                          },
                          {
                            id: "translation",
                            title: "Translation",
                            content:
                              "mRNA is translated into a protein sequence at the ribosome.",
                          },
                        ],
                      },
                      {
                        id: "mitosisMeiosis",
                        title: "Mitosis/Meiosis",
                        content:
                          "Cell division processes (mitosis for somatic cells, meiosis for gametes).",
                      },
                      {
                        id: "mendelianGenetics",
                        title: "Mendelian genetics",
                        content:
                          "Basic principles of inheritance (dominant/recessive alleles, Punnett squares).",
                      },
                      {
                        id: "pharmacogenetics",
                        title: "Relevant for pharmacogenetics",
                        content:
                          "How genetic variations influence drug response.",
                      },
                      {
                        id: "geneticPredispositions",
                        title: "Genetic predispositions",
                        content:
                          "Understanding inherited risks for certain conditions.",
                      },
                    ],
                  },
                  {
                    id: "introBodySystems",
                    title: "Introduction to Body Systems",
                    children: [
                      {
                        id: "majorOrganSystems",
                        title: "Overview of major organ systems",
                        content:
                          "Integumentary, skeletal, muscular, nervous, endocrine, cardiovascular, lymphatic, respiratory, digestive, urinary, reproductive.",
                      },
                      {
                        id: "primaryFunctions",
                        title: "Primary functions",
                        content:
                          "Basic understanding of what each system does.",
                      },
                      {
                        id: "homeostasis",
                        title: "Homeostasis",
                        children: [
                          {
                            id: "centralConcept",
                            title:
                              "The central concept of maintaining internal stability",
                            content:
                              "Regulation of temperature, pH, blood glucose, etc.",
                          },
                          {
                            id: "physiologicalRegulation",
                            title: "Underpins all physiological regulation",
                            content: "Essential for normal body function.",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                id: "chemistry",
                title: "Chemistry",
                children: [
                  {
                    id: "generalChemistry",
                    title: "General Chemistry",
                    children: [
                      {
                        id: "atomicStructure",
                        title: "Atomic Structure",
                        children: [
                          {
                            id: "protons",
                            title: "Protons",
                            content:
                              "Positively charged particles in the nucleus.",
                          },
                          {
                            id: "neutrons",
                            title: "Neutrons",
                            content:
                              "Neutrally charged particles in the nucleus.",
                          },
                          {
                            id: "electrons",
                            title: "Electrons",
                            content:
                              "Negatively charged particles orbiting the nucleus.",
                          },
                          {
                            id: "isotopes",
                            title: "Isotopes",
                            content:
                              "Atoms of the same element with different numbers of neutrons.",
                          },
                          {
                            id: "atomicNumber",
                            title: "Atomic number",
                            content:
                              "Number of protons in the nucleus (defines the element).",
                          },
                          {
                            id: "massNumber",
                            title: "Mass number",
                            content:
                              "Total number of protons and neutrons in the nucleus.",
                          },
                        ],
                      },
                      {
                        id: "periodicTable",
                        title: "Periodic Table",
                        children: [
                          {
                            id: "basicOrganization",
                            title: "Basic organization",
                            content:
                              "Elements arranged by increasing atomic number, grouped by similar properties.",
                          },
                          {
                            id: "trends",
                            title: "Trends",
                            content:
                              "Electronegativity, ionization energy, atomic radius.",
                          },
                          {
                            id: "propertiesOfElements",
                            title: "Properties of elements",
                            content: "Metals, nonmetals, metalloids.",
                          },
                        ],
                      },
                      {
                        id: "chemicalBonding",
                        title: "Chemical Bonding",
                        content: "Forces that hold atoms together.",
                        children: [
                          {
                            id: "ionicBonds",
                            title: "Ionic bonds",
                            content:
                              "Transfer of electrons between atoms with large electronegativity differences.",
                          },
                          {
                            id: "covalentBonds",
                            title: "Covalent bonds",
                            content: "Sharing of electrons between atoms.",
                          },
                          {
                            id: "polarCovalent",
                            title: "Polar covalent",
                            content: "Unequal sharing of electrons.",
                          },
                          {
                            id: "nonpolarCovalent",
                            title: "Nonpolar covalent",
                            content: "Equal sharing of electrons.",
                          },
                          {
                            id: "metallicBonds",
                            title: "Metallic bonds",
                            content:
                              "Sharing of electrons in a 'sea' of electrons (in metals).",
                          },
                          {
                            id: "electronegativity",
                            title: "Electronegativity",
                            content:
                              "Ability of an atom to attract electrons in a chemical bond.",
                          },
                        ],
                      },
                      {
                        id: "chemicalReactions",
                        title: "Chemical Reactions",
                        content:
                          "Processes involving the rearrangement of atoms and molecules.",
                        children: [
                          {
                            id: "reactionTypes",
                            title: "Types",
                            children: [
                              {
                                id: "synthesis",
                                title: "Synthesis",
                                content:
                                  "Two or more reactants combine to form a single product.",
                              },
                              {
                                id: "decomposition",
                                title: "Decomposition",
                                content:
                                  "A single reactant breaks down into two or more products.",
                              },
                              {
                                id: "singleReplacement",
                                title: "Single replacement",
                                content:
                                  "One element replaces another in a compound.",
                              },
                              {
                                id: "doubleReplacement",
                                title: "Double replacement",
                                content:
                                  "Ions in two compounds exchange places.",
                              },
                            ],
                          },
                          {
                            id: "balancingEquations",
                            title: "Balancing equations",
                            content:
                              "Ensuring the number of atoms of each element is the same on both sides of the equation.",
                          },
                          {
                            id: "stoichiometry",
                            title: "Stoichiometry",
                            content:
                              "Quantitative relationships between reactants and products in chemical reactions.",
                          },
                          {
                            id: "moleConcept",
                            title: "Mole concept",
                            content: "Avogadro's number, molar mass.",
                          },
                        ],
                      },
                      {
                        id: "statesOfMatter",
                        title: "States of Matter",
                        content: "Physical forms of substances.",
                        children: [
                          {
                            id: "solids",
                            title: "Solids",
                            content: "Definite shape and volume.",
                          },
                          {
                            id: "liquids",
                            title: "Liquids",
                            content: "Definite volume but no definite shape.",
                          },
                          {
                            id: "gases",
                            title: "Gases",
                            content: "No definite shape or volume.",
                          },
                        ],
                      },
                      {
                        id: "gasLaws",
                        title: "Gas Laws",
                        content:
                          "Relationships between pressure, volume, temperature, and amount of gas.",
                        children: [
                          {
                            id: "boylesLaw",
                            title: "Boyle's Law",
                            content:
                              "Pressure and volume are inversely proportional at constant temperature.",
                          },
                          {
                            id: "charlesLaw",
                            title: "Charles' Law",
                            content:
                              "Volume and temperature are directly proportional at constant pressure.",
                          },
                          {
                            id: "idealGasLaw",
                            title: "Ideal Gas Law",
                            content:
                              "PV = nRT (CRITICAL for anesthesia equipment, gas delivery).",
                          },
                        ],
                      },
                      {
                        id: "solutions",
                        title: "Solutions",
                        content: "Homogeneous mixtures.",
                        children: [
                          {
                            id: "molarity",
                            title: "Molarity",
                            content: "Moles of solute per liter of solution.",
                          },
                          {
                            id: "dilutions",
                            title: "Dilutions",
                            content:
                              "Reducing the concentration of a solution.",
                          },
                          {
                            id: "solubility",
                            title: "Solubility",
                            content:
                              "Ability of a solute to dissolve in a solvent.",
                          },
                          {
                            id: "colligativeProperties",
                            title: "Colligative properties",
                            content:
                              "Properties of solutions that depend on the number of solute particles, not their identity.",
                          },
                          {
                            id: "osmoticPressure",
                            title: "Osmotic pressure",
                            content:
                              "Pressure required to prevent the flow of water across a semipermeable membrane (fundamental for IV fluids, cellular integrity).",
                          },
                        ],
                      },
                      {
                        id: "acidsAndBases",
                        title: "Acids and Bases",
                        content:
                          "Substances that donate or accept protons (H+).",
                        children: [
                          {
                            id: "definitions",
                            title: "Definitions",
                            children: [
                              {
                                id: "arrhenius",
                                title: "Arrhenius",
                                content:
                                  "Acids produce H+ in water, bases produce OH- in water.",
                              },
                              {
                                id: "bronstedLowry",
                                title: "Brønsted-Lowry",
                                content:
                                  "Acids are proton donors, bases are proton acceptors.",
                              },
                            ],
                          },
                          {
                            id: "phCalculations",
                            title: "pH calculations",
                            content:
                              "Determining the acidity or alkalinity of a solution.",
                          },
                          {
                            id: "strongWeakAcidsBases",
                            title: "Strong vs. weak acids/bases",
                            content: "Degree of ionization in water.",
                          },
                          {
                            id: "titration",
                            title: "Titration",
                            content:
                              "Determining the concentration of a solution using a reaction with a solution of known concentration.",
                          },
                          {
                            id: "acidBaseBalanceChem",
                            title: "Essential for acid-base balance",
                            content:
                              "Understanding physiological pH regulation.",
                          },
                          {
                            id: "drugPreparation",
                            title: "Drug preparation",
                            content:
                              "Many drugs are salts of weak acids or bases.",
                          },
                        ],
                      },
                      {
                        id: "thermodynamicsBasic",
                        title: "Thermodynamics (Basic)",
                        content:
                          "Study of energy changes in chemical and physical processes.",
                        children: [
                          {
                            id: "energyChanges",
                            title: "Energy changes in reactions",
                            content:
                              "Exothermic (release heat) and endothermic (absorb heat) reactions.",
                          },
                          {
                            id: "spontaneity",
                            title: "Spontaneity",
                            content:
                              "Whether a reaction will occur without external input.",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "organicChemistryIntro",
                    title: "Organic Chemistry (Introductory)",
                    content: "Study of carbon-containing compounds.",
                    children: [
                      {
                        id: "hydrocarbons",
                        title: "Hydrocarbons",
                        content:
                          "Compounds containing only carbon and hydrogen.",
                        children: [
                          {
                            id: "alkanes",
                            title: "Alkanes",
                            content: "Single bonds.",
                          },
                          {
                            id: "alkenes",
                            title: "Alkenes",
                            content: "Double bonds.",
                          },
                          {
                            id: "alkynes",
                            title: "Alkynes",
                            content: "Triple bonds.",
                          },
                          {
                            id: "aromaticCompounds",
                            title: "Aromatic compounds",
                            content: "Contain benzene rings.",
                          },
                        ],
                      },
                      {
                        id: "functionalGroups",
                        title: "Functional Groups",
                        content:
                          "Specific groups of atoms within molecules that have characteristic properties.",
                        children: [
                          {
                            id: "alcohols",
                            title: "Alcohols",
                            content: "-OH.",
                          },
                          { id: "ethers", title: "Ethers", content: "R-O-R'." },
                          {
                            id: "aldehydes",
                            title: "Aldehydes",
                            content: "-CHO.",
                          },
                          {
                            id: "ketones",
                            title: "Ketones",
                            content: "R-CO-R'.",
                          },
                          {
                            id: "carboxylicAcids",
                            title: "Carboxylic acids",
                            content: "-COOH.",
                          },
                          { id: "esters", title: "Esters", content: "-COOR'." },
                          {
                            id: "amines",
                            title: "Amines",
                            content: "-NH2, -NHR, -NR2.",
                          },
                          {
                            id: "amids",
                            title: "Amides",
                            content: "-CONH2, -CONHR, -CONR2.",
                          },
                        ],
                      },
                      {
                        id: "drugStructures",
                        title: "Crucial for understanding drug structures",
                        content: "Many drugs contain these functional groups.",
                      },
                      {
                        id: "drugMetabolism",
                        title: "Drug metabolism",
                        content:
                          "Enzymes often modify these functional groups.",
                      },
                      {
                        id: "drugActionsOrganic",
                        title: "Drug actions",
                        content:
                          "Interactions with biological molecules often involve functional groups.",
                      },
                      {
                        id: "isomerism",
                        title: "Isomerism",
                        content:
                          "Molecules with the same molecular formula but different structural arrangements.",
                        children: [
                          {
                            id: "structuralIsomers",
                            title: "Structural isomers",
                            content: "Different connectivity of atoms.",
                          },
                          {
                            id: "geometricIsomers",
                            title: "Geometric isomers (cis/trans)",
                            content:
                              "Different spatial arrangement around a double bond or ring.",
                          },
                          {
                            id: "stereoisomers",
                            title: "Stereoisomers (enantiomers)",
                            content:
                              "Non-superimposable mirror images (think chiral drugs).",
                          },
                        ],
                      },
                      {
                        id: "biomolecules",
                        title: "Biomolecules",
                        content: "Organic molecules essential for life.",
                        children: [
                          {
                            id: "biomoleculeStructure",
                            title:
                              "Basic structure of carbohydrates, lipids, proteins, nucleic acids",
                            content:
                              "Linking to their chemical components (e.g., monosaccharides in carbohydrates, fatty acids in lipids, amino acids in proteins, nucleotides in nucleic acids).",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "biochemistryAdvanced",
                    title: "Biochemistry (Advanced within Chemistry Context)",
                    children: [
                      {
                        id: "enzymeKinetics",
                        title: "Enzyme Kinetics",
                        content:
                          "Study of the rates of enzyme-catalyzed reactions.",
                      },
                      {
                        id: "michaelisMenten",
                        title: "Michaelis-Menten (basic)",
                        content:
                          "Relationship between enzyme velocity and substrate concentration.",
                      },
                      {
                        id: "metabolicPathwaysOverview",
                        title: "Metabolic Pathways (Overview)",
                        content:
                          "Series of interconnected biochemical reactions.",
                      },
                      {
                        id: "pathwayExamples",
                        title: "Examples",
                        content:
                          "Glycolysis, gluconeogenesis, fatty acid oxidation/synthesis, urea cycle: Basic understanding of interconnections.",
                      },
                      {
                        id: "proteinStructureFunction",
                        title: "Protein Structure & Function",
                        children: [
                          {
                            id: "folding",
                            title: "More detailed on folding",
                            content:
                              "Primary, secondary, tertiary, quaternary structures.",
                          },
                          {
                            id: "denaturation",
                            title: "Denaturation",
                            content:
                              "Loss of protein's native structure and function.",
                          },
                        ],
                      },
                      {
                        id: "dnaRnaReplicationTranscriptionTranslation",
                        title: "DNA Replication, Transcription, Translation",
                        content:
                          "Molecular mechanisms: Basic understanding of the steps involved.",
                      },
                    ],
                  },
                  {
                    id: "whyChemCritical",
                    title: "Why Chemistry is CRITICAL",
                    children: [
                      {
                        id: "anesthesiaAppliedChem",
                        title: "Anesthesia is fundamentally applied chemistry",
                        content:
                          "Understanding the chemical properties and interactions of anesthetic drugs.",
                      },
                      {
                        id: "drugInteractionsChem",
                        title: "Understanding drug interactions",
                        content:
                          "How different drugs react with each other in the body.",
                      },
                      {
                        id: "acidBaseImbalancesChem",
                        title: "Acid-base imbalances",
                        content:
                          "Chemical principles underlying pH regulation.",
                      },
                      {
                        id: "gasPropertiesChem",
                        title: "Gas properties",
                        content:
                          "Behavior of inhaled anesthetics and respiratory gases.",
                      },
                      {
                        id: "metabolicProcessesChem",
                        title: "Metabolic processes",
                        content: "How the body processes and eliminates drugs.",
                      },
                    ],
                  },
                ],
              },
              {
                id: "physics",
                title:
                  "Physics (Helpful, often required for CRNA school or specific pre-reqs)",
                children: [
                  {
                    id: "mechanics",
                    title: "Mechanics",
                    content: "Study of motion and forces.",
                    children: [
                      {
                        id: "forces",
                        title: "Forces",
                        content:
                          "Interactions that can change an object's motion.",
                      },
                      {
                        id: "motion",
                        title: "Motion",
                        content: "Displacement, velocity, acceleration.",
                      },
                      {
                        id: "newtonsLaws",
                        title: "Newton's laws",
                        content: "Laws governing motion.",
                      },
                      {
                        id: "work",
                        title: "Work",
                        content:
                          "Energy transferred by a force acting over a distance.",
                      },
                      {
                        id: "energy",
                        title: "Energy",
                        content: "Ability to do work (kinetic, potential).",
                      },
                      {
                        id: "power",
                        title: "Power",
                        content: "Rate at which work is done.",
                      },
                    ],
                  },
                  {
                    id: "fluidDynamics",
                    title: "Fluid Dynamics",
                    content: "Study of fluids (liquids and gases) in motion.",
                    children: [
                      {
                        id: "pressure",
                        title: "Pressure",
                        content: "Force per unit area.",
                      },
                      {
                        id: "flow",
                        title: "Flow",
                        content:
                          "Volume of fluid passing a point per unit time.",
                      },
                      {
                        id: "viscosity",
                        title: "Viscosity",
                        content: "Resistance to flow.",
                      },
                      {
                        id: "bernoullisPrinciple",
                        title: "Bernoulli's principle",
                        content:
                          "Relationship between fluid speed, pressure, and height.",
                      },
                      {
                        id: "poiseuillesLaw",
                        title: "Poiseuille's Law",
                        content:
                          "Factors affecting laminar flow in a tube (crucial for IV flow, airway resistance, blood flow).",
                      },
                    ],
                  },
                  {
                    id: "thermodynamicsPhysics",
                    title: "Thermodynamics",
                    content:
                      "Study of heat and its relation to other forms of energy.",
                    children: [
                      {
                        id: "heatTransfer",
                        title: "Heat transfer",
                        content: "Conduction, convection, radiation.",
                      },
                      {
                        id: "specificHeat",
                        title: "Specific heat",
                        content:
                          "Amount of heat required to raise the temperature of a substance.",
                      },
                      {
                        id: "phaseChanges",
                        title: "Phase changes",
                        content: "Solid to liquid to gas and vice versa.",
                      },
                    ],
                  },
                  {
                    id: "gasLawsPhysics",
                    title: "Gas Laws (Reiterated for emphasis)",
                    children: [
                      {
                        id: "boylesCharlesGayLussacsAvogadros",
                        title:
                          "Boyle's, Charles', Gay-Lussac's, Avogadro's, Ideal Gas Law",
                        content: "PV = nRT.",
                      },
                      {
                        id: "daltonsLaw",
                        title: "Dalton's Law of Partial Pressures",
                        content:
                          "Total pressure of a gas mixture is the sum of the partial pressures of each gas.",
                      },
                      {
                        id: "henrysLaw",
                        title: "Henry's Law",
                        content:
                          "Solubility of a gas in a liquid is directly proportional to the partial pressure of the gas above the liquid (Absolutely essential for inhaled anesthetics, gas tanks, oxygen delivery, understanding embolisms).",
                      },
                    ],
                  },
                  {
                    id: "electricityMagnetism",
                    title: "Electricity and Magnetism (Basic)",
                    content: "Study of electric charge and magnetic forces.",
                    children: [
                      {
                        id: "circuits",
                        title: "Circuits",
                        content: "Pathways for electric current.",
                      },
                      {
                        id: "resistors",
                        title: "Resistors",
                        content: "Components that oppose current flow.",
                      },
                      {
                        id: "ohmsLaw",
                        title: "Ohm's Law",
                        content:
                          "Relationship between voltage, current, and resistance (relevant for patient monitoring equipment).",
                      },
                    ],
                  },
                  {
                    id: "wavePhenomena",
                    title: "Wave Phenomena (Basic)",
                    content: "Study of waves, including sound and light.",
                    children: [
                      {
                        id: "sound",
                        title: "Sound",
                        content: "Pressure waves.",
                      },
                      {
                        id: "light",
                        title: "Light",
                        content: "Electromagnetic waves.",
                      },
                    ],
                  },
                  {
                    id: "whyPhysicsCritical",
                    title: "Why Physics is CRITICAL",
                    children: [
                      {
                        id: "anesthesiaMachines",
                        title:
                          "Anesthesia machines, ventilators, monitoring equipment",
                        content: "Function based on physical principles.",
                      },
                      {
                        id: "gasDeliveryPhysics",
                        title: "Gas delivery",
                        content: "Understanding flow rates, pressures.",
                      },
                      {
                        id: "patientPhysiologicalResponses",
                        title: "Patient physiological responses",
                        content:
                          "Blood flow, airway dynamics are governed by physical laws.",
                      },
                    ],
                  },
                ],
              },
              {
                id: "mathematics",
                title:
                  "Mathematics (Algebra, Pre-Calculus, potentially Calculus, Statistics)",
                children: [
                  {
                    id: "algebra",
                    title: "Algebra",
                    children: [
                      {
                        id: "solvingEquations",
                        title: "Solving equations",
                        content: "Finding the value of unknown variables.",
                      },
                      {
                        id: "inequalities",
                        title: "Inequalities",
                        content: "Comparing values.",
                      },
                      {
                        id: "functions",
                        title: "Functions",
                        content: "Relationships between variables.",
                      },
                      {
                        id: "graphing",
                        title: "Graphing",
                        content:
                          "Visual representation of mathematical relationships.",
                      },
                    ],
                  },
                  {
                    id: "preCalculus",
                    title: "Pre-Calculus",
                    children: [
                      {
                        id: "trigonometry",
                        title: "Trigonometry",
                        content:
                          "Study of triangles and trigonometric functions.",
                      },
                      {
                        id: "logarithms",
                        title: "Logarithms",
                        content:
                          "Inverse of exponential functions (especially for pH, drug concentrations).",
                      },
                      {
                        id: "exponentialFunctions",
                        title: "Exponential functions",
                        content:
                          "Modeling growth and decay (drug elimination).",
                      },
                    ],
                  },
                  {
                    id: "calculus",
                    title: "Calculus (Differential & Integral)",
                    children: [
                      {
                        id: "ratesOfChange",
                        title: "Rates of change",
                        content: "Derivatives.",
                      },
                      {
                        id: "areasUnderCurves",
                        title: "Areas under curves",
                        content: "Integrals.",
                      },
                      {
                        id: "physiologicalModels",
                        title:
                          "Beneficial for understanding physiological models, drug kinetics",
                        content:
                          "More in-depth analysis of biological processes.",
                      },
                      {
                        id: "nursingSchoolEntry",
                        title:
                          "Often not explicitly required for nursing school entry.",
                        content: "",
                      },
                    ],
                  },
                  {
                    id: "statistics",
                    title: "Statistics",
                    content:
                      "Collection, analysis, interpretation, and presentation of data.",
                    children: [
                      {
                        id: "descriptiveStatistics",
                        title: "Descriptive statistics",
                        content:
                          "Summarizing data (mean, median, mode, standard deviation).",
                      },
                      {
                        id: "inferentialStatistics",
                        title: "Inferential statistics",
                        content:
                          "Making inferences about populations based on samples (hypothesis testing, t-tests, ANOVA, correlation, regression).",
                      },
                      {
                        id: "probability",
                        title: "Probability",
                        content: "Likelihood of events occurring.",
                      },
                      {
                        id: "understandingResearch",
                        title:
                          "Absolutely essential for understanding research",
                        content: "Interpreting study findings.",
                      },
                      {
                        id: "evidenceBasedPractice",
                        title: "Evidence-based practice",
                        content: "Applying research to clinical decisions.",
                      },
                      {
                        id: "dnpProjects",
                        title: "DNP projects",
                        content: "Often involve statistical analysis.",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "volunteerExperience",
        title: "2. Volunteer/Healthcare Experience",
        children: [
          {
            id: "volunteeringInHospitals",
            title: "Volunteering in hospitals",
            content: "Exposure to the healthcare environment.",
          },
          {
            id: "variousUnits",
            title: "Various units, especially ICU/ED if possible",
            content: "Observing critical care settings.",
          },
          {
            id: "nursingHomesFreeClinics",
            title: "Nursing homes, free clinics",
            content: "Interacting with different patient populations.",
          },
        ],
      },
    ],
  },
  {
    id: "phase2",
    title: "Phase 2: Core Nursing Knowledge (1-2 years)",
    children: [
      {
        id: "nursingFundamentals",
        title: "1. Nursing Fundamentals",
        children: [
          {
            id: "basicNursingCare",
            title: "Basic Nursing Care",
            content: "Hygiene, comfort, mobility, safety.",
          },
          {
            id: "vitalSigns",
            title: "Vital Signs",
            content: "Temperature, pulse, respiration, blood pressure, pain.",
          },
          {
            id: "assessmentSkills",
            title: "Assessment Skills",
            content: "Physical assessment techniques.",
          },
          {
            id: "documentation",
            title: "Documentation",
            content: "Accurate and timely record-keeping.",
          },
          {
            id: "medicationAdministration",
            title: "Medication Administration",
            content: "Routes, dosages, safety principles.",
          },
          {
            id: "infectionControl",
            title: "Infection Control",
            content: "Standard precautions, transmission-based precautions.",
          },
          {
            id: "woundCare",
            title: "Wound Care",
            content: "Types of wounds, dressing changes.",
          },
          {
            id: "nutritionHydration",
            title: "Nutrition and Hydration",
            content: "Basic nutritional needs, fluid balance.",
          },
          {
            id: "elimination",
            title: "Elimination",
            content: "Bowel and bladder management.",
          },
          {
            id: "perioperativeCare",
            title: "Perioperative Care",
            content:
              "Pre-operative, intra-operative, and post-operative nursing.",
          },
        ],
      },
      {
        id: "pharmacology",
        title: "2. Pharmacology",
        children: [
          {
            id: "pharmacokinetics",
            title: "Pharmacokinetics",
            content:
              "Absorption, distribution, metabolism, excretion of drugs.",
          },
          {
            id: "pharmacodynamics",
            title: "Pharmacodynamics",
            content: "How drugs exert their effects on the body.",
          },
          {
            id: "drugClassifications",
            title: "Drug Classifications",
            content:
              "Categorizing drugs by therapeutic use and mechanism of action.",
          },
          {
            id: "commonMedications",
            title: "Common Medications",
            content:
              "Understanding frequently used drugs in various patient populations.",
          },
          {
            id: "adverseEffects",
            title: "Adverse Effects",
            content: "Recognizing and managing side effects and toxicities.",
          },
          {
            id: "drugInteractionsPharm",
            title: "Drug Interactions",
            content: "How multiple drugs can affect each other.",
          },
          {
            id: "routesOfAdministration",
            title: "Routes of Administration",
            content: "Oral, intravenous, intramuscular, subcutaneous, etc.",
          },
          {
            id: "dosageCalculations",
            title: "Dosage Calculations",
            content: "Accurate calculation of medication doses.",
          },
          {
            id: "patientEducationPharm",
            title: "Patient Education",
            content: "Educating patients about their medications.",
          },
        ],
      },
      {
        id: "pathophysiology",
        title: "3. Pathophysiology",
        children: [
          {
            id: "cellularInjury",
            title: "Cellular Injury",
            content: "Causes and mechanisms of cell damage.",
          },
          {
            id: "inflammationRepair",
            title: "Inflammation and Repair",
            content: "Body's response to injury.",
          },
          {
            id: "fluidElectrolyteImbalances",
            title: "Fluid and Electrolyte Imbalances",
            content: "Causes and consequences of imbalances.",
          },
          {
            id: "acidBaseImbalancesPatho",
            title: "Acid-Base Imbalances",
            content: "Metabolic and respiratory acidosis/alkalosis.",
          },
          {
            id: "geneticsDisease",
            title: "Genetics and Disease",
            content: "Inherited conditions and genetic predispositions.",
          },
          {
            id: "immunology",
            title: "Immunology",
            content: "Immune system function and disorders.",
          },
          {
            id: "cancerPatho",
            title: "Cancer Pathophysiology",
            content: "Cellular changes and metastasis.",
          },
          {
            id: "infectiousDiseasesPatho",
            title: "Infectious Diseases",
            content: "Mechanisms of infection and disease processes.",
          },
          {
            id: "chronicDiseasesPatho",
            title: "Chronic Diseases",
            content: "Pathophysiology of common chronic conditions.",
          },
          {
            id: "multisystemEffects",
            title: "Multisystem Effects",
            content: "How diseases in one system can affect others.",
          },
        ],
      },
      {
        id: "healthAssessment",
        title: "4. Health Assessment",
        children: [
          {
            id: "interviewingTechniques",
            title: "Interviewing Techniques",
            content: "Gathering patient history.",
          },
          {
            id: "physicalExamSkills",
            title: "Physical Exam Skills",
            content: "Head-to-toe assessment.",
          },
          {
            id: "systemSpecificAssessments",
            title: "System-Specific Assessments",
            content: "Cardiovascular, respiratory, neurological, etc.",
          },
          {
            id: "documentationAssessment",
            title: "Documentation of Findings",
            content: "Accurate recording of assessment data.",
          },
          {
            id: "interpretationOfFindings",
            title: "Interpretation of Findings",
            content: "Analyzing assessment data to identify problems.",
          },
          {
            id: "developmentalConsiderations",
            title: "Developmental Considerations",
            content: "Assessment variations across the lifespan.",
          },
          {
            id: "culturalConsiderations",
            title: "Cultural Considerations",
            content: "Impact of culture on health assessment.",
          },
          {
            id: "focusedAssessments",
            title: "Focused Assessments",
            content: "Assessing specific problems or systems.",
          },
          {
            id: "useOfDiagnosticTools",
            title: "Use of Diagnostic Tools (Basic)",
            content: "Understanding basic principles of common tools.",
          },
        ],
      },
      {
        id: "nursingCareConcepts",
        title: "5. Core Nursing Care Concepts",
        children: [
          {
            id: "patientCenteredCare",
            title: "Patient-Centered Care",
            content: "Respecting patient preferences and values.",
          },
          {
            id: "therapeuticCommunication",
            title: "Therapeutic Communication",
            content: "Effective communication with patients and families.",
          },
          {
            id: "ethicalLegalConsiderations",
            title: "Ethical and Legal Considerations",
            content: "Nursing ethics, legal responsibilities.",
          },
          {
            id: "culturalCompetence",
            title: "Cultural Competence",
            content: "Providing care that respects diverse cultures.",
          },
          {
            id: "evidenceBasedPracticeConcepts",
            title: "Evidence-Based Practice (Concepts)",
            content: "Using research to guide practice.",
          },
          {
            id: "qualityImprovement",
            title: "Quality Improvement",
            content: "Improving patient care outcomes.",
          },
          {
            id: "safetyInNursingCare",
            title: "Safety in Nursing Care",
            content: "Preventing errors and ensuring a safe environment.",
          },
          {
            id: "teachingLearningPrinciples",
            title: "Teaching and Learning Principles",
            content: "Educating patients and families.",
          },
          {
            id: "stressAdaptation",
            title: "Stress and Adaptation",
            content: "Understanding patient responses to stress.",
          },
          {
            id: "lossGrief",
            title: "Loss and Grief",
            content:
              "Providing support to patients and families experiencing loss.",
          },
        ],
      },
    ],
  },
  {
    id: "phase3",
    title: "Phase 3: Clinical Rotations & Advanced Concepts (2-3 years)",
    children: [
      {
        id: "medicalSurgicalNursing",
        title: "1. Medical-Surgical Nursing",
        children: [
          {
            id: "cardiovascular",
            title: "Cardiovascular",
            children: [
              {
                id: "heartFailure",
                title: "Heart Failure",
                content: "Pathophysiology, management.",
              },
              {
                id: "myocardialInfarction",
                title: "Myocardial Infarction",
                content: "Diagnosis, treatment.",
              },
              {
                id: "dysrhythmias",
                title: "Dysrhythmias",
                content: "Types, interpretation, interventions.",
              },
              {
                id: "hypertension",
                title: "Hypertension",
                content: "Management and complications.",
              },
              {
                id: "peripheralVascularDisease",
                title: "Peripheral Vascular Disease",
                content: "Arterial and venous disorders.",
              },
            ],
          },
          {
            id: "respiratory",
            title: "Respiratory",
            children: [
              {
                id: "copd",
                title: "COPD",
                content: "Emphysema, chronic bronchitis.",
              },
              {
                id: "asthma",
                title: "Asthma",
                content: "Acute and chronic management.",
              },
              {
                id: "pneumonia",
                title: "Pneumonia",
                content: "Types, treatment.",
              },
              {
                id: "acuteRespiratoryFailure",
                title: "Acute Respiratory Failure",
                content: "Causes, interventions.",
              },
              {
                id: "mechanicalVentilation",
                title: "Mechanical Ventilation",
                content: "Modes, settings, weaning.",
              },
            ],
          },
          {
            id: "neurology",
            title: "Neurology",
            children: [
              {
                id: "stroke",
                title: "Stroke",
                content: "Ischemic, hemorrhagic.",
              },
              {
                id: "seizures",
                title: "Seizures",
                content: "Types, management.",
              },
              {
                id: "traumaticBrainInjury",
                title: "Traumatic Brain Injury",
                content: "Assessment, interventions.",
              },
              {
                id: "spinalCordInjury",
                title: "Spinal Cord Injury",
                content: "Levels, complications.",
              },
              {
                id: "neurodegenerativeDisorders",
                title: "Neurodegenerative Disorders",
                content: "Parkinson's, Alzheimer's.",
              },
            ],
          },
          {
            id: "gastrointestinal",
            title: "Gastrointestinal",
            children: [
              {
                id: "pepticUlcerDisease",
                title: "Peptic Ulcer Disease",
                content: "Causes, treatment.",
              },
              {
                id: "inflammatoryBowelDisease",
                title: "Inflammatory Bowel Disease",
                content: "Crohn's, ulcerative colitis.",
              },
              {
                id: "liverFailure",
                title: "Liver Failure",
                content: "Cirrhosis, hepatitis.",
              },
              {
                id: "pancreatitis",
                title: "Pancreatitis",
                content: "Acute and chronic.",
              },
              {
                id: "bowelObstruction",
                title: "Bowel Obstruction",
                content: "Types, management.",
              },
            ],
          },
          {
            id: "endocrine",
            title: "Endocrine",
            children: [
              {
                id: "diabetesMellitus",
                title: "Diabetes Mellitus",
                content: "Types, complications.",
              },
              {
                id: "thyroidDisorders",
                title: "Thyroid Disorders",
                content: "Hyperthyroidism, hypothyroidism.",
              },
              {
                id: "adrenalDisorders",
                title: "Adrenal Disorders",
                content: "Cushing's, Addison's.",
              },
              {
                id: "pituitaryDisorders",
                title: "Pituitary Disorders",
                content: "Growth hormone, ADH.",
              },
            ],
          },
          {
            id: "renal",
            title: "Renal",
            children: [
              {
                id: "acuteKidneyInjury",
                title: "Acute Kidney Injury",
                content: "Causes, stages.",
              },
              {
                id: "chronicKidneyDisease",
                title: "Chronic Kidney Disease",
                content: "Stages, management.",
              },
              {
                id: "dialysis",
                title: "Dialysis",
                content: "Hemodialysis, peritoneal dialysis.",
              },
              {
                id: "renalCalculi",
                title: "Renal Calculi",
                content: "Nephrolithiasis.",
              },
            ],
          },
          {
            id: "hematology",
            title: "Hematology",
            children: [
              { id: "anemia", title: "Anemia", content: "Types, causes." },
              {
                id: "leukemia",
                title: "Leukemia",
                content: "Types, treatment.",
              },
              {
                id: "lymphoma",
                title: "Lymphoma",
                content: "Hodgkin's, non-Hodgkin's.",
              },
              {
                id: "coagulationDisorders",
                title: "Coagulation Disorders",
                content: "DIC, hemophilia.",
              },
            ],
          },
          {
            id: "oncology",
            title: "Oncology",
            children: [
              {
                id: "cancerPathophysiology",
                title: "Cancer Pathophysiology",
                content: "Cellular changes, metastasis.",
              },
              {
                id: "cancerTreatment",
                title: "Cancer Treatment",
                content: "Chemotherapy, radiation, surgery.",
              },
              {
                id: "painManagementOncology",
                title: "Pain Management",
                content: "Cancer-related pain.",
              },
              {
                id: "palliativeCare",
                title: "Palliative Care",
                content: "End-of-life care.",
              },
            ],
          },
        ],
      },
      {
        id: "maternalNewbornNursing",
        title: "2. Maternal-Newborn Nursing",
        children: [
          {
            id: "antepartumCare",
            title: "Antepartum Care",
            content: "Prenatal care, complications of pregnancy.",
          },
          {
            id: "intrapartumCare",
            title: "Intrapartum Care",
            content: "Labor and delivery.",
          },
          {
            id: "postpartumCare",
            title: "Postpartum Care",
            content: "Maternal recovery, complications.",
          },
          {
            id: "newbornCare",
            title: "Newborn Care",
            content: "Assessment, common issues.",
          },
        ],
      },
      {
        id: "pediatricNursing",
        title: "3. Pediatric Nursing",
        children: [
          {
            id: "growthDevelopmentPeds",
            title: "Growth and Development",
            content: "Stages, milestones.",
          },
          {
            id: "commonChildhoodIllnesses",
            title: "Common Childhood Illnesses",
            content: "Respiratory, GI, etc.",
          },
          {
            id: "pediatricAssessment",
            title: "Pediatric Assessment",
            content: "Age-specific techniques.",
          },
          {
            id: "pediatricEmergencies",
            title: "Pediatric Emergencies",
            content: "Resuscitation, trauma.",
          },
        ],
      },
      {
        id: "mentalHealthNursing",
        title: "4. Mental Health Nursing",
        children: [
          {
            id: "mentalHealthAssessment",
            title: "Mental Health Assessment",
            content: "Techniques, tools.",
          },
          {
            id: "therapeuticCommunicationMH",
            title: "Therapeutic Communication",
            content: "Specific to mental health.",
          },
          {
            id: "mentalHealthDisorders",
            title: "Mental Health Disorders",
            content: "Depression, anxiety, psychosis.",
          },
          {
            id: "crisisIntervention",
            title: "Crisis Intervention",
            content: "Suicide prevention, etc.",
          },
          {
            id: "psychopharmacology",
            title: "Psychopharmacology",
            content: "Common medications.",
          },
        ],
      },
      {
        id: "communityPublicHealthNursing",
        title: "5. Community/Public Health Nursing",
        children: [
          {
            id: "communityHealthConcepts",
            title: "Community Health Concepts",
            content: "Population health, epidemiology.",
          },
          {
            id: "healthPromotionPrevention",
            title: "Health Promotion and Prevention",
            content: "Strategies, interventions.",
          },
          {
            id: "vulnerablePopulations",
            title: "Vulnerable Populations",
            content: "Homeless, elderly, etc.",
          },
          {
            id: "disasterManagement",
            title: "Disaster Management",
            content: "Preparedness, response.",
          },
        ],
      },
      {
        id: "leadershipManagement",
        title: "6. Leadership & Management",
        children: [
          {
            id: "nursingLeadership",
            title: "Nursing Leadership",
            content: "Roles, styles.",
          },
          {
            id: "managementPrinciples",
            title: "Management Principles",
            content: "Planning, organizing, staffing.",
          },
          {
            id: "delegationSupervision",
            title: "Delegation and Supervision",
            content: "Assigning tasks, overseeing staff.",
          },
          {
            id: "conflictResolution",
            title: "Conflict Resolution",
            content: "Strategies, techniques.",
          },
        ],
      },
    ],
  },
  {
    id: "phase4",
    title: "Phase 4: Transition to Practice (4th year/Final Year)",
    children: [
      {
        id: "advancedConcepts",
        title: "1. Advanced Concepts",
        children: [
          {
            id: "complexPathophysiology",
            title: "Complex Pathophysiology",
            children: [
              {
                id: "sepsis",
                title: "Sepsis",
                content: "Systemic inflammatory response.",
              },
              {
                id: "shockStates",
                title: "Shock States",
                content: "Hypovolemic, cardiogenic, distributive.",
              },
              {
                id: "multipleOrganDysfunctionSyndrome",
                title: "Multiple Organ Dysfunction Syndrome (MODS)",
                content: "Progressive failure of multiple organs.",
              },
              {
                id: "acuteRespiratoryDistressSyndrome",
                title: "Acute Respiratory Distress Syndrome (ARDS)",
                content: "Severe form of respiratory failure.",
              },
            ],
          },
          {
            id: "criticalCareNursing",
            title: "Critical Care Nursing",
            children: [
              {
                id: "hemodynamicMonitoring",
                title: "Hemodynamic Monitoring",
                content: "Arterial lines, central lines.",
              },
              {
                id: "ventilatorManagementAdvanced",
                title: "Ventilator Management (Advanced)",
                content: "Complex modes, troubleshooting.",
              },
              {
                id: "icudrugs",
                title: "ICU Drugs",
                content: "Vasopressors, inotropes, sedatives.",
              },
              {
                id: "traumaCareAdvanced",
                title: "Trauma Care (Advanced)",
                content: "ATLS principles.",
              },
            ],
          },
          {
            id: "pharmacologyAdvanced",
            title: "Pharmacology (Advanced)",
            children: [
              {
                id: "pharmacodynamicsAdvanced",
                title: "Pharmacodynamics",
                content: "Receptor theory, drug interactions.",
              },
              {
                id: "pharmacokineticsAdvanced",
                title: "Pharmacokinetics",
                content: "Compartment models, clearance.",
              },
              {
                id: "anestheticAgents",
                title: "Anesthetic Agents",
                content: "Inhalation, intravenous.",
              },
              {
                id: "painManagementAdvanced",
                title: "Pain Management",
                content: "Regional anesthesia, chronic pain.",
              },
            ],
          },
          {
            id: "researchEvidenceBasedPracticeAdvanced",
            title: "Research & Evidence-Based Practice (Advanced)",
            children: [
              {
                id: "researchMethodology",
                title: "Research Methodology",
                content: "Study designs, data analysis.",
              },
              {
                id: "evidenceSynthesis",
                title: "Evidence Synthesis",
                content: "Systematic reviews, meta-analysis.",
              },
              {
                id: "qualityImprovementProjects",
                title: "Quality Improvement Projects",
                content: "Designing and implementing QI initiatives.",
              },
              {
                id: "nursingResearchEthics",
                title: "Nursing Research Ethics",
                content: "IRB, informed consent.",
              },
            ],
          },
        ],
      },
      {
        id: "professionalDevelopment",
        title: "2. Professional Development",
        children: [
          {
            id: "leadershipManagementAdvanced",
            title: "Leadership & Management (Advanced)",
            content: "Systems thinking, change management.",
          },
          {
            id: "healthcarePolicy",
            title: "Healthcare Policy",
            content: "Healthcare systems, legislation.",
          },
          {
            id: "professionalEthics",
            title: "Professional Ethics",
            content: "Ethical dilemmas, advocacy.",
          },
          {
            id: "careerPlanning",
            title: "Career Planning",
            content: "Resumes, interviews, continuing education.",
          },
        ],
      },
      {
        id: "clinicalSpecialties",
        title: "3. Clinical Specialties (Examples)",
        children: [
          {
            id: "cardiacCare",
            title: "Cardiac Care",
            content: "Advanced cardiac assessment, interventions.",
          },
          {
            id: "criticalCareSpecialty",
            title: "Critical Care",
            content: "Advanced life support, organ support.",
          },
          {
            id: "emergencyNursing",
            title: "Emergency Nursing",
            content: "Triage, trauma management.",
          },
          {
            id: "operatingRoomNursing",
            title: "Operating Room Nursing",
            content: "Surgical procedures, sterile technique.",
          },
        ],
      },
      {
        id: "nclexPreparation",
        title: "4. NCLEX Preparation",
        children: [
          {
            id: "nclexReviewStrategies",
            title: "NCLEX Review Strategies",
            content: "Test-taking techniques, content review.",
          },
          {
            id: "practiceQuestions",
            title: "Practice Questions",
            content: "Simulations, question banks.",
          },
          {
            id: "nclexStudyPlan",
            title: "NCLEX Study Plan",
            content: "Time management, self-assessment.",
          },
        ],
      },
    ],
  },
];

// Helper function to find a topic by ID in the nested structure
const findTopicById = (topics, id) => {
  for (const topic of topics) {
    if (topic.id === id) {
      return topic;
    }
    if (topic.children) {
      const found = findTopicById(topic.children, id);
      if (found) {
        return found;
      }
    }
  }
  return null;
};

// Helper function to find the parent ID of a topic
const findParentId = (topics, targetId, parentId = null) => {
  for (const topic of topics) {
    if (topic.id === targetId) {
      return parentId;
    }
    if (topic.children) {
      const foundParentId = findParentId(topic.children, targetId, topic.id);
      if (foundParentId) {
        return foundParentId;
      }
    }
  }
  return null;
};
export default function App() {
  const [completedTopics, setCompletedTopics] = useState(() => {
    try {
      const storedCompleted = localStorage.getItem("completedTopics");
      return storedCompleted ? JSON.parse(storedCompleted) : [];
    } catch (error) {
      console.error("Failed to parse completedTopics:", error);
      return [];
    }
  });

  const [activeTopicId, setActiveTopicId] = useState(null);
  const [activeTopicContent, setActiveTopicContent] = useState(
    "Select a topic to view its content."
  );
  const [topicNotes, setTopicNotes] = useState(() => {
    try {
      const storedNotes = localStorage.getItem("topicNotes");
      return storedNotes ? JSON.parse(storedNotes) : {};
    } catch (error) {
      console.error("Failed to parse topicNotes:", error);
      return {};
    }
  });

  const notesChanged = useRef(false); // Track if notes have changed

  useEffect(() => {
    try {
      localStorage.setItem("completedTopics", JSON.stringify(completedTopics));
    } catch (error) {
      console.error("Failed to save completedTopics to localStorage:", error);
    }
  }, [completedTopics]);

  useEffect(() => {
    if (notesChanged.current) {
      try {
        localStorage.setItem("topicNotes", JSON.stringify(topicNotes));
      } catch (error) {
        console.error("Failed to save topicNotes to localStorage:", error);
      }
    }
    notesChanged.current = false; // Reset the flag
  }, [topicNotes]);

  useEffect(() => {
    if (activeTopicId) {
      const topic = findTopicById(topicsData, activeTopicId);
      setActiveTopicContent(
        topic?.content || "No content available for this topic."
      );
      setTopicNotes((prevNotes) => prevNotes[activeTopicId] || "");
    } else {
      setActiveTopicContent("Select a topic to view its content.");
      // setTopicNotes({});  // Consider if you want to clear notes when no topic is selected
    }
  }, [activeTopicId]);

  const handleCompleteTopic = (topicId) => {
    if (!completedTopics.includes(topicId)) {
      setCompletedTopics((prev) => [...prev, topicId]);
    }
  };

  const handleSelectTopic = (topicId) => {
    setActiveTopicId(topicId);
  };

  const handleNotesChange = (event) => {
    const newNotes = event.target.value;
    setTopicNotes((prevNotes) => ({
      ...prevNotes,
      [activeTopicId]: newNotes,
    }));
    notesChanged.current = true; // Set the flag
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-sans text-gray-900 p-4 flex flex-col lg:flex-row gap-4">
      {/* Topic List Section */}
      <div className="w-full lg:w-1/2 p-4 bg-white rounded-lg shadow-lg overflow-y-auto h-[calc(100vh-4rem)]">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Topics</h2>
        <Accordion type="single" collapsible className="w-full">
          {topicsData.map((phase) => (
            <AccordionItem
              key={phase.id}
              value={phase.id}
              className="border-b last:border-b-0"
            >
              <AccordionTrigger className="text-xl font-semibold text-gray-700 py-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                {phase.title}
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <TopicList
                  topics={phase.children.map((child) => ({
                    ...child,
                    depth: 0,
                  }))}
                  completedTopics={completedTopics}
                  onCompleteTopic={handleCompleteTopic}
                  activeTopicId={activeTopicId}
                  onSelectTopic={handleSelectTopic}
                  depth={1}
                  findParentId={findParentId}
                  topicsData={topicsData}
                />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Topic Detail Section */}
      <div className="w-full lg:w-1/2 p-6 bg-white rounded-lg shadow-lg flex flex-col h-[calc(100vh-4rem)] border border-gray-200">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">
          {activeTopicId
            ? findTopicById(topicsData, activeTopicId)?.title
            : "Topic Details"}
        </h2>
        <div className="flex-grow overflow-y-auto text-gray-700 leading-relaxed">
          {activeTopicContent}
        </div>
        <div className="mt-6 border-t pt-4 border-gray-200 flex flex-col gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Notes</h3>
            {activeTopicId ? (
              <Textarea
                value={topicNotes[activeTopicId] || ""}
                onChange={handleNotesChange}
                placeholder="Add your notes here..."
                className="w-full h-32 rounded-md border border-gray-300 focus-visible:ring-2 focus-visible:ring-ring shadow-sm"
              />
            ) : (
              <p className="text-gray-500">Select a topic to add notes.</p>
            )}
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Future Features:
            </h3>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" disabled>
                Quiz Yourself
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
