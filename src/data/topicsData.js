const topicsData = [
    {
        id: "phase1",
        title: "Phase 1: Pre-Nursing Foundations & Getting into Nursing School (0-1 year)",
        children: [
          {
            id: "high-school-pre-requisite-courses",
            title: "1. High School & Pre-Requisite Courses",
            children: [
              {
                id: "biology",
                title: "Biology",
                children: [
                  {
                    id: "cell-biology",
                    title: "Cell Biology",
                    children: [
                      {
                        id: "cell-theory",
                        title: "Cell theory",
                        content: "All living things are composed of cells, cells are the basic units of structure and function in living things, and all cells come from pre-existing cells."
                      },
                      {
                        id: "prokaryotic-vs-eukaryotic",
                        title: "Prokaryotic vs. eukaryotic cells",
                        content: "Understanding the fundamental differences in their structure (e.g., nucleus, membrane-bound organelles)."
                      },
                      {
                        id: "organelles",
                        title: "Detailed structure and function of organelles",
                        children: [
                          {
                            id: "nucleus",
                            title: "Nucleus",
                            content: "Contains genetic material (DNA), controls cell activities."
                          },
                          {
                            id: "mitochondria",
                            title: "Mitochondria",
                            content: "Powerhouse of the cell, generates ATP through cellular respiration."
                          },
                          {
                            id: "endoplasmic-reticulum",
                            title: "Endoplasmic Reticulum (ER)",
                            children: [
                              {
                                id: "rough-er",
                                title: "Rough ER",
                                content: "Protein synthesis and modification due to ribosomes."
                              },
                              {
                                id: "smooth-er",
                                title: "Smooth ER",
                                content: "Lipid synthesis, detoxification, calcium storage."
                              }
                            ]
                          },
                          {
                            id: "ribosomes",
                            title: "Ribosomes",
                            content: "Site of protein synthesis."
                          },
                          {
                            id: "golgi-apparatus",
                            title: "Golgi Apparatus",
                            content: "Modifies, sorts, and packages proteins and lipids for secretion or delivery to other organelles."
                          },
                          {
                            id: "lysosomes",
                            title: "Lysosomes",
                            content: "Contain digestive enzymes to break down waste and cellular debris."
                          },
                          {
                            id: "peroxisomes",
                            title: "Peroxisomes",
                            content: "Involved in detoxification and metabolism of fatty acids."
                          },
                          {
                            id: "cell-membrane",
                            title: "Cell Membrane",
                            content: "Selectively permeable barrier, composed of a lipid bilayer with embedded proteins."
                          }
                        ]
                      },
                      {
                        id: "cellular-transport",
                        title: "Cellular Transport",
                        children: [
                          {
                            id: "passive-transport",
                            title: "Passive Transport",
                            content: "Movement of substances across the membrane without requiring energy.",
                            children: [
                              {
                                id: "diffusion",
                                title: "Diffusion",
                                content: "Movement of molecules from an area of high concentration to low concentration."
                              },
                              {
                                id: "osmosis",
                                title: "Osmosis",
                                content: "Movement of water across a semipermeable membrane from an area of high water concentration to low water concentration."
                              },
                              {
                                id: "facilitated-diffusion",
                                title: "Facilitated Diffusion",
                                content: "Movement of molecules across the membrane with the help of membrane proteins (channels or carriers) without energy expenditure."
                              }
                            ]
                          },
                          {
                            id: "active-transport",
                            title: "Active Transport",
                            content: "Movement of substances across the membrane against their concentration gradient, requiring energy (usually ATP) and membrane proteins (pumps)."
                          },
                          {
                            id: "vesicular-transport",
                            title: "Vesicular Transport",
                            content: "Movement of large particles or bulk substances across the membrane by vesicles (small membrane-bound sacs).",
                            children: [
                              {
                                id: "endocytosis",
                                title: "Endocytosis",
                                content: "Process by which cells engulf substances from outside by forming vesicles.",
                                children: [
                                  {
                                    id: "phagocytosis",
                                    title: "Phagocytosis",
                                    content: 'Cellular "eating" of large particles or cells.'
                                  },
                                  {
                                    id: "pinocytosis",
                                    title: "Pinocytosis",
                                    content: 'Cellular "drinking" of extracellular fluid containing dissolved solutes.'
                                  },
                                  {
                                    id: "receptor-mediated-endocytosis",
                                    title: "Receptor-Mediated Endocytosis",
                                    content: "Specific molecules bind to receptors on the cell surface, triggering vesicle formation."
                                  }
                                ]
                              },
                              {
                                id: "exocytosis",
                                title: "Exocytosis",
                                content: "Process by which cells release substances to the outside by the fusion of vesicles with the plasma membrane."
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                id: "chemistry",
                title: "Chemistry",
                content: "Basic principles of general and organic chemistry (atomic structure, bonding, reactions, functional groups)."
              },
              {
                id: "anatomy-physiology",
                title: "Anatomy & Physiology",
                content: "Basic understanding of human body structure and function."
              },
              {
                id: "microbiology",
                title: "Microbiology",
                content: "Introduction to microorganisms (bacteria, viruses, fungi, parasites) and their role in health and disease."
              },
              {
                id: "math",
                title: "Mathematics",
                children: [
                  {
                    id: "algebra",
                    title: "Algebra",
                    content: "Solving equations, manipulating expressions, understanding the value of unknown variables."
                  },
                  {
                    id: "inequalities",
                    title: "Inequalities",
                    content: "Comparing values."
                  },
                  {
                    id: "functions",
                    title: "Functions",
                    content: "Relationships between variables."
                  },
                  {
                    id: "graphing",
                    title: "Graphing",
                    content: "Visual representation of mathematical relationships."
                  }
                ]
              },
              {
                id: "pre-calculus",
                title: "Pre-Calculus",
                children: [
                  {
                    id: "trigonometry",
                    title: "Trigonometry",
                    content: "Study of triangles and trigonometric functions."
                  },
                  {
                    id: "logarithms",
                    title: "Logarithms",
                    content: "Inverse of exponential functions (especially for pH, drug concentrations)."
                  },
                  {
                    id: "exponential-functions",
                    title: "Exponential functions",
                    content: "Modeling growth and decay (drug elimination)."
                  }
                ]
              },
              {
                id: "calculus",
                title: "Calculus (Differential & Integral)",
                content: "Rates of change (derivatives), areas under curves (integrals). Beneficial for understanding physiological models, drug kinetics (more in-depth analysis of biological processes). Often not explicitly required for nursing school entry."
              },
              {
                id: "statistics",
                title: "Statistics",
                children: [
                  {
                    id: "descriptive-statistics",
                    title: "Descriptive statistics",
                    content: "Summarizing data (mean, median, mode, standard deviation)."
                  },
                  {
                    id: "inferential-statistics",
                    title: "Inferential statistics",
                    content: "Making inferences about populations based on samples (hypothesis testing, t-tests, ANOVA, correlation, regression). Absolutely essential for understanding research (interpreting study findings), evidence-based practice (applying research to clinical decisions), and DNP projects (often involve statistical analysis)."
                  },
                  {
                    id: "probability",
                    title: "Probability",
                    content: "Likelihood of events occurring."
                  }
                ]
              }
            ]
          },
          {
            id: "volunteer-healthcare-experience",
            title: "2. Volunteer/Healthcare Experience",
            children: [
              {
                id: "activities",
                title: "Activities",
                children: [
                  {
                    id: "volunteering-in-hospitals",
                    title: "Volunteering in hospitals",
                    content: "Exposure to the healthcare environment."
                  },
                  {
                    id: "volunteering-icu-ed",
                    title: "Various units, especially ICU/ED if possible",
                    content: "Observing critical care settings."
                  },
                  {
                    id: "nursing-homes-free-clinics",
                    title: "Nursing homes, free clinics",
                    content: "Interacting with different patient populations."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "phase2",
        title: "Phase 2: Bachelor of Science in Nursing (BSN) Degree (3-4 years)",
        children: [
          {
            id: "core-nursing-curriculum",
            title: "Core Nursing Curriculum",
            children: [
              {
                id: "anatomy-physiology-i-ii",
                title: "Anatomy & Physiology (A&P) I & II (Advanced Level)",
                children: [
                  {
                    id: "all-body-systems",
                    title: "All Body Systems",
                    content: "Detailed structure and function of each system."
                  },
                  {
                    id: "cellular-and-tissue-level",
                    title: "Cellular and Tissue Level",
                    children: [
                      {
                        id: "histology",
                        title: "Histology",
                        content: "Study of tissues."
                      },
                      {
                        id: "specialized-cell-types",
                        title: "Specialized cell types",
                        content: "Differentiation and roles of specialized cells."
                      }
                    ]
                  },
                  {
                    id: "neurological-system",
                    title: "Neurological System",
                    children: [
                      {
                        id: "central",
                        title: "Central",
                        children: [
                          {
                            id: "brain",
                            title: "Brain",
                            content: "Structure and function of the brain."
                          },
                          {
                            id: "spinal-cord",
                            title: "Spinal cord",
                            content: "Transmission of signals between the brain and body."
                          },
                          {
                            id: "meninges",
                            title: "Meninges",
                            content: "Protective layers surrounding the brain and spinal cord."
                          },
                          {
                            id: "csf",
                            title: "CSF",
                            content: "Cerebrospinal fluid composition and function."
                          }
                        ]
                      },
                      {
                        id: "peripheral",
                        title: "Peripheral",
                        children: [
                          {
                            id: "cranial-nerves",
                            title: "Cranial nerves",
                            content: "Overview of cranial nerve functions."
                          },
                          {
                            id: "spinal-nerves",
                            title: "Spinal nerves",
                            content: "Structure and function of spinal nerves."
                          },
                          {
                            id: "dermatomes",
                            title: "Dermatomes",
                            content: "Areas of skin innervated by specific spinal nerves."
                          }
                        ]
                      },
                      {
                        id: "autonomic-nervous-system",
                        title: "Autonomic Nervous System",
                        children: [
                          {
                            id: "sympathetic",
                            title: "Sympathetic",
                            content: "Fight-or-flight response mechanisms."
                          },
                          {
                            id: "parasympathetic",
                            title: "Parasympathetic",
                            content: "Rest-and-digest functions."
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: "cardiovascular-system",
                    title: "Cardiovascular System",
                    children: [
                      {
                        id: "heart-anatomy",
                        title: "Heart anatomy",
                        content: "Structure of the heart chambers, valves, and blood flow."
                      },
                      {
                        id: "cardiac-cycle",
                        title: "Cardiac cycle",
                        content: "Mechanics of heart contraction and relaxation."
                      },
                      {
                        id: "ecg-interpretation-basic",
                        title: "ECG interpretation (basic)",
                        content: "Reading and understanding electrocardiograms."
                      },
                      {
                        id: "blood-vessels",
                        title: "Blood vessels",
                        content: "Arteries, veins, and capillaries structure and function."
                      },
                      {
                        id: "hemodynamics",
                        title: "Hemodynamics",
                        content: "Study of blood flow dynamics."
                      },
                      {
                        id: "blood-composition",
                        title: "Blood composition",
                        content: "Components of blood (plasma, red blood cells, white blood cells, platelets)."
                      }
                    ]
                  },
                  {
                    id: "respiratory-system",
                    title: "Respiratory System",
                    children: [
                      {
                        id: "airway-anatomy",
                        title: "Airway anatomy",
                        content: "Structure of the respiratory tract."
                      },
                      {
                        id: "lung-volumes-capacities",
                        title: "Lung volumes/capacities",
                        content: "Measurements of lung capacity."
                      },
                      {
                        id: "gas-exchange",
                        title: "Gas exchange",
                        children: [
                          {
                            id: "diffusion",
                            title: "Diffusion",
                            content: "Exchange of oxygen and carbon dioxide at the alveoli."
                          },
                          {
                            id: "partial-pressures",
                            title: "Partial pressures",
                            content: "Role of partial pressure gradients in gas exchange."
                          }
                        ]
                      },
                      {
                        id: "mechanics-of-breathing",
                        title: "Mechanics of breathing",
                        content: "Inhalation and exhalation processes."
                      },
                      {
                        id: "control-of-respiration",
                        title: "Control of respiration",
                        content: "Neural regulation of breathing."
                      },
                      {
                        id: "absolutely-central-to-anesthesia",
                        title: "Absolutely central to anesthesia",
                        content: "Critical for managing airways and ventilation during procedures."
                      }
                    ]
                  },
                  {
                    id: "renal-system",
                    title: "Renal System",
                    children: [
                      {
                        id: "kidney-anatomy",
                        title: "Kidney anatomy",
                        content: "Structure of nephrons and renal vasculature."
                      },
                      {
                        id: "nephron-function",
                        title: "Nephron function",
                        content: "Filtration, reabsorption, and secretion processes."
                      },
                      {
                        id: "urine-formation",
                        title: "Urine formation",
                        content: "Steps involved in urine production."
                      },
                      {
                        id: "fluid-electrolyte-balance",
                        title: "Fluid/electrolyte balance",
                        content: "Regulation of body fluids and electrolytes."
                      },
                      {
                        id: "acid-base-regulation",
                        title: "Acid-base regulation",
                        content: "Maintaining pH balance through kidney function."
                      },
                      {
                        id: "crucial-for-iv-fluid-management-drug-excretion",
                        title: "Crucial for IV fluid management, drug excretion",
                        content: "Important for medication dosing and hydration strategies."
                      }
                    ]
                  },
                  {
                    id: "endocrine-system",
                    title: "Endocrine System",
                    children: [
                      {
                        id: "glands",
                        title: "Glands",
                        content: "Overview of major endocrine glands."
                      },
                      {
                        id: "hormones",
                        title: "Hormones",
                        content: "Types and functions of key hormones."
                      },
                      {
                        id: "feedback-loops",
                        title: "Feedback loops",
                        content: "Regulation via positive/negative feedback mechanisms."
                      },
                      {
                        id: "regulation-of-metabolism",
                        title: "Regulation of metabolism",
                        content: "Role of hormones in metabolic processes."
                      },
                      {
                        id: "stress-response",
                        title: "Stress response",
                        content: "Adrenal hormones and stress adaptation."
                      },
                      {
                        id: "impacts-anesthesia-significantly",
                        title: "Impacts anesthesia significantly",
                        content: "Influence on patient responses to surgical stress."
                      }
                    ]
                  },
                  {
                    id: "musculoskeletal-system",
                    title: "Musculoskeletal System",
                    children: [
                      {
                        id: "muscle-contraction",
                        title: "Muscle contraction",
                        content: "Physiology of muscle movement."
                      },
                      {
                        id: "skeletal-anatomy",
                        title: "Skeletal anatomy",
                        content: "Structure and function of bones."
                      },
                      {
                        id: "joint-types",
                        title: "Joint types",
                        content: "Classification and mobility of joints."
                      },
                      {
                        id: "relevant-for-neuromuscular-blockers",
                        title: "Relevant for neuromuscular blockers",
                        content: "Application in anesthesia practice."
                      }
                    ]
                  },
                  {
                    id: "integumentary-lymphatic-immune-digestive-reproductive-systems",
                    title: "Integumentary, Lymphatic, Immune, Digestive, and Reproductive Systems",
                    children: [
                      {
                        id: "integumentary-system",
                        title: "Integumentary System",
                        children: [
                          {
                            id: "skin-layers-and-functions",
                            title: "Skin layers and functions",
                            content: "Epidermis, dermis, hypodermis roles."
                          },
                          {
                            id: "hair-and-nails",
                            title: "Hair and nails",
                            content: "Structure and growth cycles."
                          },
                          {
                            id: "wound-healing-and-common-pathologies",
                            title: "Wound healing and common pathologies",
                            content: "Infections, burns, dermatitis."
                          }
                        ]
                      },
                      {
                        id: "lymphatic-system",
                        title: "Lymphatic System",
                        children: [
                          {
                            id: "lymph-nodes-and-vessels",
                            title: "Lymph nodes and vessels",
                            content: "Structure and circulation of lymph."
                          },
                          {
                            id: "lymph-flow-and-drainage",
                            title: "Lymph flow and drainage",
                            content: "Immune defense and fluid balance."
                          }
                        ]
                      },
                      {
                        id: "immune-system",
                        title: "Immune System",
                        children: [
                          {
                            id: "innate-and-adaptive-immunity-overview",
                            title: "Innate and adaptive immunity overview",
                            content: "First-line defenses and antigen-specific responses."
                          },
                          {
                            id: "key-immune-cells-and-organs",
                            title: "Key immune cells and organs",
                            content: "Spleen, thymus, bone marrow, and immune cells."
                          },
                          {
                            id: "immune-responses-and-common-disorders",
                            title: "Immune responses and common disorders",
                            content: "Allergies, autoimmune diseases."
                          }
                        ]
                      },
                      {
                        id: "digestive-system",
                        title: "Digestive System",
                        children: [
                          {
                            id: "anatomy-of-the-gi-tract",
                            title: "Anatomy of the GI tract",
                            content: "From mouth to anus."
                          },
                          {
                            id: "digestive-processes-and-enzyme-functions",
                            title: "Digestive processes and enzyme functions",
                            content: "Breakdown and absorption of nutrients."
                          },
                          {
                            id: "absorption-of-nutrients-and-common-diseases",
                            title: "Absorption of nutrients and common diseases",
                            content: "GERD, IBS, liver disease."
                          }
                        ]
                      },
                      {
                        id: "reproductive-system",
                        title: "Reproductive System",
                        children: [
                          {
                            id: "male-and-female-anatomy",
                            title: "Male and female anatomy",
                            content: "Structure and function of reproductive organs."
                          },
                          {
                            id: "hormonal-regulation-and-menstrual-cycle",
                            title: "Hormonal regulation and menstrual cycle",
                            content: "Endocrine control of reproduction."
                          },
                          {
                            id: "pregnancy-childbirth-basics-and-common-pathologies",
                            title: "Pregnancy, childbirth basics, and common pathologies",
                            content: "Maternal and fetal physiology."
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: "interrelationships",
                    title: "Interrelationships",
                    content: "How these systems interact and influence overall health."
                  },
                  {
                    id: "homeostatic-feedback-loops",
                    title: "Homeostatic Feedback Loops",
                    children: [
                      {
                        id: "positive-and-negative-feedback-mechanisms",
                        title: "Positive and negative feedback mechanisms",
                        content: "Relevance to maintaining equilibrium in body systems."
                      }
                    ]
                  },
                  {
                    id: "neurotransmitters-receptors",
                    title: "Neurotransmitters & Receptors",
                    children: [
                      {
                        id: "acetylcholine-ach",
                        title: "Acetylcholine (ACh)"
                      },
                      {
                        id: "norepinephrine-ne",
                        title: "Norepinephrine (NE)"
                      },
                      {
                        id: "gaba",
                        title: "GABA"
                      },
                      {
                        id: "serotonin",
                        title: "Serotonin"
                      },
                      {
                        id: "dopamine",
                        title: "Dopamine"
                      },
                      {
                        id: "basic-understanding-of-their-receptors",
                        title: "Basic understanding of their receptors",
                        content: "Relevance to anesthetic drug actions."
                      }
                    ]
                  },
                  {
                    id: "microbiology",
                    title: "Microbiology",
                    children: [
                      {
                        id: "types-of-microorganisms",
                        title: "Types of Microorganisms",
                        children: [
                          {
                            id: "bacteria",
                            title: "Bacteria"
                          },
                          {
                            id: "viruses",
                            title: "Viruses"
                          },
                          {
                            id: "fungi",
                            title: "Fungi"
                          },
                          {
                            id: "parasites",
                            title: "Parasites"
                          }
                        ]
                      },
                      {
                        id: "pathogenesis",
                        title: "Pathogenesis",
                        content: "How microbes cause disease."
                      },
                      {
                        id: "infection-control",
                        title: "Infection Control",
                        children: [
                          {
                            id: "aseptic-technique",
                            title: "Aseptic technique"
                          },
                          {
                            id: "hand-hygiene",
                            title: "Hand hygiene"
                          },
                          {
                            id: "sterilization",
                            title: "Sterilization"
                          },
                          {
                            id: "disinfection",
                            title: "Disinfection"
                          }
                        ]
                      },
                      {
                        id: "antimicrobial-agents",
                        title: "Antimicrobial Agents",
                        children: [
                          {
                            id: "antibiotics",
                            title: "Antibiotics"
                          },
                          {
                            id: "antivirals",
                            title: "Antivirals"
                          },
                          {
                            id: "antifungals",
                            title: "Antifungals"
                          },
                          {
                            id: "mechanisms-of-action",
                            title: "Mechanisms of action"
                          },
                          {
                            id: "resistance",
                            title: "Resistance"
                          }
                        ]
                      },
                      {
                        id: "immune-system",
                        title: "Immune System",
                        children: [
                          {
                            id: "innate-immunity",
                            title: "Innate immunity"
                          },
                          {
                            id: "adaptive-immunity",
                            title: "Adaptive immunity"
                          },
                          {
                            id: "inflammatory-response",
                            title: "Inflammatory response"
                          }
                        ],
                        content: "Important for preventing surgical site infections, managing sepsis."
                      }
                    ]
                  },
                  {
                    id: "pharmacology",
                    title: "Pharmacology (This is a major focus area for CRNAs)",
                    children: [
                      {
                        id: "pharmacokinetics",
                        title: "Pharmacokinetics",
                        children: [
                          {
                            id: "absorption",
                            title: "Absorption",
                            children: [
                              {
                                id: "routes",
                                title: "Routes"
                              },
                              {
                                id: "factors-affecting-absorption",
                                title: "Factors affecting absorption"
                              }
                            ]
                          },
                          {
                            id: "distribution",
                            title: "Distribution",
                            children: [
                              {
                                id: "volume-of-distribution",
                                title: "Volume of distribution"
                              },
                              {
                                id: "protein-binding-especially-albumin",
                                title: "Protein binding (especially albumin)"
                              },
                              {
                                id: "blood-brain-barrier",
                                title: "Blood-brain barrier"
                              }
                            ]
                          },
                          {
                            id: "metabolism-biotransformation",
                            title: "Metabolism (Biotransformation)",
                            children: [
                              {
                                id: "hepatic-metabolism",
                                title: "Hepatic metabolism",
                                children: [
                                  {
                                    id: "phase-i-ii-reactions",
                                    title: "Phase I & II reactions"
                                  },
                                  {
                                    id: "cyp450-system",
                                    title: "CYP450 system – CRITICAL for drug interactions, elimination"
                                  },
                                  {
                                    id: "first-pass-effect",
                                    title: "First-pass effect"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            id: "excretion",
                            title: "Excretion",
                            children: [
                              {
                                id: "renal",
                                title: "Renal",
                                children: [
                                  {
                                    id: "glomerular-filtration",
                                    title: "Glomerular filtration"
                                  },
                                  {
                                    id: "tubular-secretion-reabsorption",
                                    title: "Tubular secretion/reabsorption"
                                  }
                                ]
                              },
                              {
                                id: "biliary",
                                title: "Biliary"
                              },
                              {
                                id: "pulmonary",
                                title: "Pulmonary"
                              }
                            ]
                          },
                          {
                            id: "half-life-understanding-drug-duration",
                            title: "Half-life: Understanding drug duration"
                          }
                        ]
                      },
                      {
                        id: "pharmacodynamics",
                        title: "Pharmacodynamics",
                        children: [
                          {
                            id: "drug-receptor-interactions",
                            title: "Drug-Receptor Interactions",
                            children: [
                              {
                                id: "agonists",
                                title: "Agonists"
                              },
                              {
                                id: "antagonists",
                                title: "Antagonists"
                              },
                              {
                                id: "partial-agonists",
                                title: "Partial agonists"
                              },
                              {
                                id: "inverse-agonists",
                                title: "Inverse agonists"
                              },
                              {
                                id: "receptor-types",
                                title: "Receptor types"
                              }
                            ]
                          },
                          {
                            id: "dose-response-relationships",
                            title: "Dose-Response Relationships",
                            children: [
                              {
                                id: "potency",
                                title: "Potency"
                              },
                              {
                                id: "efficacy",
                                title: "Efficacy"
                              },
                              {
                                id: "therapeutic-index",
                                title: "Therapeutic index"
                              },
                              {
                                id: "tolerance",
                                title: "Tolerance"
                              },
                              {
                                id: "dependence",
                                title: "Dependence"
                              },
                              {
                                id: "addiction",
                                title: "Addiction"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        id: "drug-classifications-detailed-for-nursing-foundational-for-anesthesia",
                        title: "Drug Classifications (detailed for nursing, foundational for anesthesia)",
                        children: [
                          {
                            id: "cardiovascular-drugs",
                            title: "Cardiovascular Drugs",
                            children: [
                              {
                                id: "antihypertensives",
                                title: "Antihypertensives",
                                children: [
                                  {
                                    id: "beta-blockers",
                                    title: "Beta-blockers"
                                  },
                                  {
                                    id: "aceis",
                                    title: "ACEIs"
                                  },
                                  {
                                    id: "arbs",
                                    title: "ARBs"
                                  },
                                  {
                                    id: "ccbs",
                                    title: "CCBs"
                                  },
                                  {
                                    id: "vasodilators",
                                    title: "Vasodilators"
                                  }
                                ]
                              },
                              {
                                id: "antiarrhythmics",
                                title: "Antiarrhythmics"
                              },
                              {
                                id: "diuretics",
                                title: "Diuretics"
                              },
                              {
                                id: "inotropes",
                                title: "Inotropes"
                              }
                            ]
                          },
                          {
                            id: "respiratory-drugs",
                            title: "Respiratory Drugs",
                            children: [
                              {
                                id: "bronchodilators",
                                title: "Bronchodilators"
                              },
                              {
                                id: "corticosteroids",
                                title: "Corticosteroids"
                              }
                            ]
                          },
                          {
                            id: "neurological-drugs",
                            title: "Neurological Drugs",
                            children: [
                              {
                                id: "anticonvulsants",
                                title: "Anticonvulsants"
                              },
                              {
                                id: "anxiolytics",
                                title: "Anxiolytics"
                              },
                              {
                                id: "sedatives",
                                title: "Sedatives"
                              },
                              {
                                id: "hypnotics",
                                title: "Hypnotics"
                              }
                            ]
                          },
                          {
                            id: "pain-medications",
                            title: "Pain Medications",
                            children: [
                              {
                                id: "opioids",
                                title: "Opioids"
                              },
                              {
                                id: "nsaids",
                                title: "NSAIDs"
                              },
                              {
                                id: "acetaminophen",
                                title: "Acetaminophen"
                              }
                            ]
                          },
                          {
                            id: "endocrine-drugs",
                            title: "Endocrine Drugs",
                            children: [
                              {
                                id: "insulin",
                                title: "Insulin"
                              },
                              {
                                id: "oral-hypoglycemics",
                                title: "Oral hypoglycemics"
                              },
                              {
                                id: "thyroid-medications",
                                title: "Thyroid medications"
                              }
                            ]
                          },
                          {
                            id: "gastrointestinal-drugs",
                            title: "Gastrointestinal Drugs",
                            children: [
                              {
                                id: "antiemetics",
                                title: "Antiemetics"
                              },
                              {
                                id: "antacids",
                                title: "Antacids"
                              }
                            ]
                          },
                          {
                            id: "antibiotics-broad-classes",
                            title: "Antibiotics: Broad classes"
                          }
                        ]
                      },
                      {
                        id: "fluids-electrolytes",
                        title: "Fluids & Electrolytes",
                        children: [
                          {
                            id: "iv-fluid-types",
                            title: "IV fluid types",
                            children: [
                              {
                                id: "crystalloids",
                                title: "Crystalloids"
                              },
                              {
                                id: "colloids",
                                title: "Colloids"
                              }
                            ]
                          },
                          {
                            id: "electrolyte-imbalances-and-correction",
                            title: "Electrolyte imbalances and correction"
                          }
                        ]
                      },
                      {
                        id: "adverse-drug-reactions",
                        title: "Adverse Drug Reactions"
                      },
                      {
                        id: "drug-interactions",
                        title: "Drug Interactions"
                      },
                      {
                        id: "contraindications",
                        title: "Contraindications"
                      },
                      {
                        id: "patient-education",
                        title: "Patient Education",
                        children: [
                          {
                            id: "safe-medication-administration",
                            title: "Safe medication administration"
                          },
                          {
                            id: "common-side-effects",
                            title: "Common side effects"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: "pathophysiology",
                    title: "Pathophysiology",
                    children: [
                      {
                        id: "general-concepts",
                        title: "General Concepts",
                        children: [
                          {
                            id: "inflammation",
                            title: "Inflammation"
                          },
                          {
                            id: "cellular-injury-adaptation-death",
                            title: "Cellular injury/adaptation/death"
                          },
                          {
                            id: "fluid-electrolyte-imbalances",
                            title: "Fluid/electrolyte imbalances"
                          },
                          {
                            id: "acid-base-disorders",
                            title: "Acid-base disorders",
                            children: [
                              {
                                id: "respiratory-acidosis-alkalosis",
                                title: "Respiratory acidosis/alkalosis"
                              },
                              {
                                id: "metabolic-acidosis-alkalosis",
                                title: "Metabolic acidosis/alkalosis – CRITICAL"
                              }
                            ]
                          },
                          {
                            id: "shock-states",
                            title: "Shock states",
                            children: [
                              {
                                id: "hypovolemic",
                                title: "Hypovolemic"
                              },
                              {
                                id: "cardiogenic",
                                title: "Cardiogenic"
                              },
                              {
                                id: "distributive",
                                title: "Distributive"
                              },
                              {
                                id: "obstructive",
                                title: "Obstructive"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        id: "systemic-pathologies",
                        title: "Systemic Pathologies",
                        children: [
                          {
                            id: "heart-failure",
                            title: "Heart failure"
                          },
                          {
                            id: "myocardial-infarction",
                            title: "Myocardial infarction"
                          },
                          {
                            id: "arrhythmias",
                            title: "Arrhythmias"
                          },
                          {
                            id: "copd",
                            title: "COPD"
                          },
                          {
                            id: "asthma",
                            title: "Asthma"
                          },
                          {
                            id: "pneumonia",
                            title: "Pneumonia"
                          },
                          {
                            id: "stroke",
                            title: "Stroke"
                          },
                          {
                            id: "diabetes",
                            title: "Diabetes"
                          },
                          {
                            id: "renal-failure",
                            title: "Renal failure"
                          },
                          {
                            id: "liver-disease",
                            title: "Liver disease"
                          },
                          {
                            id: "neurological-disorders",
                            title: "Neurological disorders"
                          },
                          {
                            id: "thyroid-disorders",
                            title: "Thyroid disorders"
                          }
                        ]
                      },
                      {
                        id: "surgical-implications",
                        title: "Surgical Implications",
                        content: "How diseases impact surgical risk and anesthetic management."
                      }
                    ]
                  },
                  {
                    id: "statistics",
                    title: "Statistics",
                    children: [
                      {
                        id: "review-apply-all-concepts-from-prerequisite",
                        title: "Review/Apply: All concepts from prerequisite"
                      },
                      {
                        id: "interpretation-of-research",
                        title: "Interpretation of Research",
                        children: [
                          {
                            id: "statistical-significance",
                            title: "Statistical significance"
                          },
                          {
                            id: "confidence-intervals",
                            title: "Confidence intervals"
                          },
                          {
                            id: "p-values",
                            title: "P-values"
                          },
                          {
                            id: "study-design",
                            title: "Study design",
                            children: [
                              {
                                id: "rcts",
                                title: "RCTs"
                              },
                              {
                                id: "cohort-studies",
                                title: "Cohort studies"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        id: "evidence-based-practice",
                        title: "Evidence-Based Practice",
                        content: "Applying research findings to clinical practice."
                      }
                    ]
                  },
                  {
                    id: "health-assessment",
                    title: "Health Assessment",
                    children: [
                      {
                        id: "comprehensive-head-to-toe-assessment",
                        title: "Comprehensive Head-to-Toe Assessment",
                        children: [
                          {
                            id: "physical-examination-techniques",
                            title: "Physical examination techniques",
                            children: [
                              {
                                id: "inspection",
                                title: "Inspection"
                              },
                              {
                                id: "palpation",
                                title: "Palpation"
                              },
                              {
                                id: "percussion",
                                title: "Percussion"
                              },
                              {
                                id: "auscultation",
                                title: "Auscultation"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        id: "system-specific-assessments",
                        title: "System-Specific Assessments",
                        children: [
                          {
                            id: "cardiovascular",
                            title: "Cardiovascular"
                          },
                          {
                            id: "pulmonary",
                            title: "Pulmonary"
                          },
                          {
                            id: "neurological",
                            title: "Neurological"
                          },
                          {
                            id: "abdominal",
                            title: "Abdominal"
                          },
                          {
                            id: "musculoskeletal",
                            title: "Musculoskeletal"
                          },
                          {
                            id: "psychosocial-assessment",
                            title: "Psychosocial Assessment"
                          },
                          {
                            id: "pain-assessment",
                            title: "Pain Assessment"
                          }
                        ]
                      },
                      {
                        id: "documentation",
                        title: "Documentation",
                        content: "Accurate and concise charting."
                      },
                      {
                        id: "interpretation-of-findings",
                        title: "Interpretation of Findings",
                        content: "Link to diagnoses and nursing interventions."
                      }
                    ]
                  },
                  {
                    id: "nursing-fundamentals-skills",
                    title: "Nursing Fundamentals & Skills",
                    children: [
                      {
                        id: "patient-safety",
                        title: "Patient Safety",
                        children: [
                          {
                            id: "medication-safety",
                            title: "Medication safety"
                          },
                          {
                            id: "fall-prevention",
                            title: "Fall prevention"
                          },
                          {
                            id: "infection-control",
                            title: "Infection control"
                          }
                        ]
                      },
                      {
                        id: "communication",
                        title: "Communication",
                        children: [
                          {
                            id: "therapeutic-communication",
                            title: "Therapeutic communication"
                          },
                          {
                            id: "interprofessional-communication",
                            title: "Interprofessional communication"
                          }
                        ]
                      },
                      {
                        id: "nursing-process",
                        title: "Nursing Process",
                        children: [
                          {
                            id: "assessment",
                            title: "Assessment"
                          },
                          {
                            id: "diagnosis",
                            title: "Diagnosis"
                          },
                          {
                            id: "planning",
                            title: "Planning"
                          },
                          {
                            id: "implementation",
                            title: "Implementation"
                          },
                          {
                            id: "evaluation",
                            title: "Evaluation"
                          }
                        ]
                      },
                      {
                        id: "medication-administration",
                        title: "Medication Administration",
                        children: [
                          {
                            id: "all-routes",
                            title: "All routes",
                            children: [
                              {
                                id: "po",
                                title: "PO"
                              },
                              {
                                id: "im",
                                title: "IM"
                              },
                              {
                                id: "sc",
                                title: "SC"
                              },
                              {
                                id: "iv",
                                title: "IV"
                              }
                            ]
                          },
                          {
                            id: "dosage-calculations",
                            title: "Dosage calculations – CRITICAL for CRNA practice"
                          }
                        ]
                      },
                      {
                        id: "iv-therapy",
                        title: "IV Therapy",
                        children: [
                          {
                            id: "iv-insertion",
                            title: "IV insertion"
                          },
                          {
                            id: "fluid-administration",
                            title: "Fluid administration"
                          },
                          {
                            id: "central-line-care",
                            title: "Central line care"
                          }
                        ]
                      },
                      {
                        id: "wound-care",
                        title: "Wound Care"
                      },
                      {
                        id: "basic-life-support-bls",
                        title: "Basic Life Support (BLS)",
                        content: "Competency in CPR."
                      }
                    ]
                  },
                  {
                    id: "medical-surgical-nursing-extensive",
                    title: "Medical-Surgical Nursing (Extensive)",
                    children: [
                      {
                        id: "adult-patient-care",
                        title: "Adult Patient Care",
                        content: "Management of common medical and surgical conditions across all body systems."
                      },
                      {
                        id: "perioperative-nursing",
                        title: "Perioperative Nursing",
                        children: [
                          {
                            id: "pre-operative-assessment",
                            title: "Pre-operative assessment"
                          },
                          {
                            id: "intraoperative-roles",
                            title: "Intraoperative roles",
                            children: [
                              {
                                id: "circulating",
                                title: "Circulating"
                              },
                              {
                                id: "scrub",
                                title: "Scrub"
                              }
                            ]
                          },
                          {
                            id: "post-operative-care",
                            title: "Post-operative care"
                          }
                        ],
                        content: "Foundational knowledge for surgical environment."
                      },
                      {
                        id: "common-procedures",
                        title: "Common Procedures",
                        content: "Purpose and nursing care."
                      },
                      {
                        id: "priority-setting",
                        title: "Priority Setting"
                      },
                      {
                        id: "delegation",
                        title: "Delegation"
                      },
                      {
                        id: "ethical-decision-making",
                        title: "Ethical Decision-Making"
                      }
                    ]
                  },
                  {
                    id: "critical-care-nursing-if-elective-focus",
                    title: "Critical Care Nursing (If Elective/Focus)",
                    children: [
                      {
                        id: "advanced-hemodynamic-monitoring",
                        title: "Advanced Hemodynamic Monitoring",
                        children: [
                          {
                            id: "arterial-lines",
                            title: "Arterial lines"
                          },
                          {
                            id: "cvp",
                            title: "CVP"
                          },
                          {
                            id: "pa-catheters-basic-understanding",
                            title: "PA catheters (basic understanding)"
                          }
                        ]
                      },
                      {
                        id: "ventilator-management-basic",
                        title: "Ventilator Management (Basic)",
                        children: [
                          {
                            id: "modes",
                            title: "Modes"
                          },
                          {
                            id: "settings",
                            title: "Settings"
                          },
                          {
                            id: "troubleshooting",
                            title: "Troubleshooting"
                          }
                        ]
                      },
                      {
                        id: "vasoactive-medications",
                        title: "Vasoactive Medications",
                        children: [
                          {
                            id: "titration",
                            title: "Titration"
                          },
                          {
                            id: "effects",
                            title: "Effects"
                          }
                        ]
                      },
                      {
                        id: "management-of-sepsis",
                        title: "Management of Sepsis"
                      },
                      {
                        id: "ards",
                        title: "ARDS"
                      },
                      {
                        id: "dka",
                        title: "DKA"
                      },
                      {
                        id: "acute-renal-failure",
                        title: "Acute Renal Failure"
                      },
                      {
                        id: "advanced-rhythm-interpretation",
                        title: "Advanced Rhythm Interpretation"
                      }
                    ]
                  }
                ]
              },
              {
                id: "clinical-rotations",
                title: "Clinical Rotations",
                children: [
                  {
                    id: "active-engagement",
                    title: "Active Engagement",
                    children: [
                      {
                        id: "ask-questions",
                        title: "Ask questions"
                      },
                      {
                        id: "understand-the-why-behind-interventions",
                        title: "Understand the \"why\" behind interventions"
                      },
                      {
                        id: "observe-critically-ill-patients",
                        title: "Observe critically ill patients"
                      }
                    ]
                  },
                  {
                    id: "nursing-skills",
                    title: "Nursing Skills",
                    children: [
                      {
                        id: "master-iv-starts",
                        title: "Master IV starts"
                      },
                      {
                        id: "foley-insertions",
                        title: "Foley insertions"
                      },
                      {
                        id: "medication-administration",
                        title: "Medication administration"
                      },
                      {
                        id: "physical-assessments",
                        title: "Physical assessments"
                      }
                    ]
                  },
                  {
                    id: "documentation",
                    title: "Documentation",
                    content: "Practice thorough and accurate charting."
                  },
                  {
                    id: "preceptorships",
                    title: "Preceptorships",
                    content: "Seek opportunities in critical care or surgical units."
                  }
                ]
              },
              {
                id: "nclex-rn-examination",
                title: "NCLEX-RN Examination",
                children: [
                  {
                    id: "comprehensive-review",
                    title: "Comprehensive Review",
                    children: [
                      {
                        id: "uworld",
                        title: "UWorld"
                      },
                      {
                        id: "kaplan",
                        title: "Kaplan"
                      },
                      {
                        id: "hurst",
                        title: "Hurst"
                      },
                      {
                        id: "saunders",
                        title: "Saunders"
                      }
                    ]
                  },
                  {
                    id: "practice-questions",
                    title: "Practice Questions",
                    content: "Do thousands to build critical thinking and endurance."
                  },
                  {
                    id: "content-mastery",
                    title: "Content Mastery",
                    children: [
                      {
                        id: "safe-and-effective-care",
                        title: "Safe and effective care"
                      },
                      {
                        id: "health-promotion-maintenance",
                        title: "Health promotion/maintenance"
                      },
                      {
                        id: "psychosocial-integrity",
                        title: "Psychosocial integrity"
                      },
                      {
                        id: "physiological-integrity",
                        title: "Physiological integrity"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
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
  
export default topicsData;