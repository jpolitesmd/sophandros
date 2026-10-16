import { lessonBySlug } from "./references";

/**
 * Approved week-by-week outline, “The Making of a Man,” 16 Oct 2026.
 * Lesson titles, the “today we add” lines, and the failure notes below are
 * that outline. They do not add readings the Greece syllabi did not name.
 *
 * FLAG: items the outline marks as debated stay debated in the lessons:
 * the writing-down of the epics (8th–7th century BC); legendary Roman dates;
 * interpretive claims about moral decline; the Seventh Letter; the indulgence
 * story as a simplified cause of the Reformation; the causes of the fall of
 * the West. Do not teach a flagged date as settled.
 */

export type LessonStatus = "available" | "soon";

export interface OutlineLesson {
  slug: string;
  title: string;
  /** Completes the sentence “Today we add ___ to the foundation.” */
  adds: string;
  status: LessonStatus;
  href: string;
  minutes: number;
}

export interface OutlineModule {
  code: string;
  /** Greece syllabus slug, when a module page exists. */
  slug?: string;
  /** Name on the earlier draft, kept so the syllabus pages still match. */
  syllabusTitle?: string;
  title: string;
  layer: string;
  who: string;
  era: string;
  lessons: OutlineLesson[];
  failed: string;
  carried: string;
}

function soon(moduleSlug: string, index: number, title: string, adds: string): OutlineLesson {
  const slug = `${moduleSlug}-w${index}`;
  return {
    slug,
    title,
    adds,
    status: "soon",
    href: `/curriculum/${moduleSlug}#${slug}`,
    minutes: 30,
  };
}

const m1 = (slug: string, title: string, adds: string): OutlineLesson => ({
  slug,
  title,
  adds,
  status: "available",
  href: `/lessons/${slug}`,
  minutes: 30,
});

export const greeceArc: OutlineModule[] = [
  {
    code: "I.1",
    slug: "the-heroic-code",
    syllabusTitle: "The Heroic Code",
    title: "Honor — the warrior",
    layer: "Honor",
    who: "The warrior",
    era: "The Bronze Age and Mycenae, about 1600–1200 BC; the palace collapse around 1200 BC; the Dark Age; Homer’s epics probably written down in the 8th–7th century BC. That last date is debated.",
    lessons: [
      m1("the-world-of-homer", "The World of Homer", "the world this honor stands in"),
      m1("the-wrath", "Laying the first stone: honor and glory", "honor"),
      m1("kings-and-spectators", "Honor in a society of chieftains", "rank and reputation"),
      m1("honor-and-home", "Honor tied to home and duty", "duty to the people a man protects"),
      m1("loyalty-and-the-world", "Loyalty and the whole world of men", "loyalty"),
      m1("the-limits-of-honor", "The limits of honor", "a limit honor does not know"),
      m1("honor-and-compassion", "Honor completed by compassion", "compassion"),
    ],
    failed:
      "Heroic wrath. Homeric honor depended on other men’s opinion and on personal revenge. Achilles’ wrath cost the Greeks many lives and led him to abuse Hector’s body. A code built only on reputation could not settle quarrels or set limits.",
    carried: "Courage needs self-command and judgment, which the Odyssey adds.",
  },
  {
    code: "I.2",
    slug: "homecoming",
    syllabusTitle: "Homecoming",
    title: "Mind and home — the householder",
    layer: "Mind and home",
    who: "The householder",
    era: "The Archaic age, about 800–500 BC: the household, colonies, trade, the alphabet adapted from Phoenician script, and the first poleis.",
    lessons: [
      soon("homecoming", 0, "The World Rebuilds: the Archaic Age", "the age of the household"),
      soon("homecoming", 1, "A household without its master", "the household as the daily test of character"),
      soon("homecoming", 2, "Guest-friendship: the law of the stranger", "guest-friendship"),
      soon("homecoming", 3, "Adding mind to strength", "mind, set beside strength"),
      soon("homecoming", 4, "What is fame worth?", "self-mastery"),
      soon("homecoming", 5, "Restoring the house", "patience and justice at home"),
      soon("homecoming", 6, "Work, justice and the farmer’s year", "work and justice"),
    ],
    failed:
      "The household alone. Odysseus’ household nearly falls while he is away, and his boast to the Cyclops brings Poseidon’s anger. The Odyssey ends its cycle of revenge only because the gods step in, and Hesiod complains of crooked judgments by the powerful. A good household cannot protect itself from bad public justice.",
    carried: "Households need a shared city and fair public law.",
  },
  {
    code: "I.3",
    slug: "inquiry-and-war",
    syllabusTitle: "Inquiry and War",
    title: "Citizen and soldier",
    layer: "Citizen and soldier",
    who: "The citizen who fights",
    era: "The Persian Empire; Cleisthenes’ reforms (508/507 BC); the Persian Wars (490–479 BC); the Athenian empire; the Peloponnesian War (431–404 BC).",
    lessons: [
      soon("inquiry-and-war", 0, "From Household to City: Democracy and Empire", "the city"),
      soon("inquiry-and-war", 1, "Why history begins: hubris and fortune", "a view past one’s own success"),
      soon("inquiry-and-war", 2, "Free men in the line: Marathon", "courage held in common"),
      soon("inquiry-and-war", 3, "Sacrifice and strategy: Thermopylae and Salamis", "sacrifice and intelligence together"),
      {
        slug: "the-spartan-counterpoint",
        title: lessonBySlug("the-spartan-counterpoint").title,
        adds: "Sparta’s mixed constitution, and the limit of a closed citizen body",
        status: "soon",
        href: "/curriculum/inquiry-and-war#the-spartan-counterpoint",
        minutes: 30,
      },
      soon("inquiry-and-war", 5, "Seeing clearly: Thucydides’ method", "the habit of judging causes"),
      soon("inquiry-and-war", 6, "The city tested: Pericles, plague, civil war", "how fragile civic virtue is"),
      soon("inquiry-and-war", 7, "Power without justice: Melos and Sicily", "the demand that power be checked"),
    ],
    failed:
      "Hubris and imperial overreach. Persia’s invasion failed through overconfidence. Athens then turned a defensive alliance into an empire, treated Melos brutally in 416 BC, launched the Sicilian Expedition (415–413 BC), and lost the war in 404 BC. Democracy could be carried away by ambition and demagogues.",
    carried: "Civic courage and voice need inner law and conscience.",
  },
  {
    code: "I.4",
    slug: "tragedy-and-the-city",
    syllabusTitle: "Tragedy and the City",
    title: "Conscience and law — the moral man",
    layer: "Conscience and law",
    who: "The moral man",
    era: "Periclean Athens, about 460–429 BC; the City Dionysia; the law courts and the Areopagus.",
    lessons: [
      soon("tragedy-and-the-city", 0, "The Theater and the Court: Athens at its Height", "the court and the theater"),
      soon("tragedy-and-the-city", 1, "The inherited curse: Agamemnon", "the sight of revenge that does not end"),
      soon("tragedy-and-the-city", 2, "Revenge as duty: Libation Bearers", "the trap of a duty that is also a crime"),
      soon("tragedy-and-the-city", 3, "The court replaces the feud: Eumenides", "law in place of the feud"),
      soon("tragedy-and-the-city", 4, "Law against conscience: Antigone", "the weighing of law and conscience"),
      soon("tragedy-and-the-city", 5, "Knowing oneself: Oedipus the King", "knowledge of one’s own limits"),
      soon("tragedy-and-the-city", 6, "Passion and the outsider: Medea", "the warning that passion can overpower reason"),
    ],
    failed:
      "Unresolved conflict. Tragedy staged the collisions of law, family, and conscience, but Athens’ courts and assembly still made grave errors, such as the execution of the generals after Arginusae in 406 BC. Showing a problem on stage did not supply a reasoned standard of justice.",
    carried: "Conscience needs examined reasons, which Socrates demands.",
  },
  {
    code: "I.5",
    slug: "the-examined-life",
    syllabusTitle: "The Examined Life",
    title: "The examined mind — the thinker",
    layer: "The examined mind",
    who: "The thinker",
    era: "Athens after defeat in 404 BC; the Thirty Tyrants (404–403 BC); the trial of Socrates (399 BC). Plato’s Academy is placed about 387 BC; that date is approximate.",
    lessons: [
      soon("the-examined-life", 0, "Defeat, Tyranny and the Trial of Socrates", "the school, after the city’s defeat"),
      soon("the-examined-life", 1, "Questioning piety: Socrates on trial", "the admission of ignorance"),
      soon("the-examined-life", 2, "Reason and the laws: Crito, Phaedo", "a life and a death held to reasons"),
      soon("the-examined-life", 3, "How we learn: Meno and Euclid I", "proof"),
      soon("the-examined-life", 4, "What is justice?", "a defense of justice by reason"),
      soon("the-examined-life", 5, "The ordered soul", "the earlier layers set under reason"),
      soon("the-examined-life", 6, "Toward the Good: the Cave", "the habit of inquiry"),
    ],
    failed:
      "The city kills its philosopher. Athens executed Socrates in 399 BC, and the Thirty Tyrants included men linked to his circle, such as Critias. Inquiry could unsettle citizens without making them better. Plato’s ideal city was never achieved. The traditional account of his attempts to advise Syracuse rests partly on the Seventh Letter, whose authenticity is disputed.",
    carried: "Reason must become practical wisdom, fitted to real men and cities.",
  },
  {
    code: "I.6",
    slug: "virtue-and-polity",
    syllabusTitle: "Virtue and Polity",
    title: "Practical wisdom — the complete man",
    layer: "Practical wisdom",
    who: "The complete man",
    era: "Philip II of Macedon; Chaeronea (338 BC); Aristotle tutors Alexander; the conquests (334–323 BC); the Lyceum; the Hellenistic kingdoms.",
    lessons: [
      soon("virtue-and-polity", 0, "Macedon, Alexander and the Wider World", "a world wider than the city"),
      soon("virtue-and-polity", 1, "The goal of the whole man: eudaimonia", "one aim for all the layers"),
      soon("virtue-and-polity", 2, "Virtue by habit: the mean", "character built by practice"),
      soon("virtue-and-polity", 3, "Practical wisdom and the highest life", "judgment in particular cases"),
      soon("virtue-and-polity", 4, "The political animal", "the city as the place a man flourishes"),
      soon("virtue-and-polity", 5, "Balance in the city and in nature", "balance and curiosity"),
      soon("virtue-and-polity", 6, "Proportion in stone: the Parthenon", "the complete man, ready for Rome"),
    ],
    failed:
      "The polis falls. The Greek cities kept fighting one another and could not unite. Philip defeated Athens and Thebes at Chaeronea in 338 BC, and after Alexander’s death in 323 BC his generals split the empire. Aristotle described the polis as the natural home of the good life just as it lost its independence.",
    carried: "Virtue in persons and small cities was not enough without durable institutions, law, and unity across a large state, which Rome attempted.",
  },
];

export const romeArc: OutlineModule[] = [
  {
    code: "II.1",
    title: "Duty — pietas",
    layer: "Pietas",
    who: "Duty to gods, family, and country, placed above personal glory",
    era: "Founding legends and the early Republic. The traditional founding is 753 BC and the Republic 509 BC; both are legendary dates, not documented history.",
    lessons: [],
    failed:
      "Duty to family and ancestors could be harsh and rigid, and the legends glorify violence done in its name.",
    carried: "Duty must be bound by law.",
  },
  {
    code: "II.2",
    title: "Law and the res publica",
    layer: "Written law and the commonwealth",
    who: "The mixed constitution and the idea of a shared state",
    era: "The Republic, about 509–133 BC. The Twelve Tables are traditionally dated about 450 BC.",
    lessons: [],
    failed:
      "The constitution depended on custom and a narrow aristocracy, and it failed to share the gains of conquest.",
    carried: "Institutions must adapt or break.",
  },
  {
    code: "II.3",
    title: "Gravitas and the soldier-state",
    layer: "Gravitas",
    who: "Discipline and endurance; the citizen-soldier at scale",
    era: "The Punic Wars (264–146 BC) and the conquest of the Greek East. Corinth was sacked in 146 BC.",
    lessons: [],
    failed:
      "Conquest brought wealth, slaves, and inequality. Cato and Polybius saw moral decline set in. That reading is interpretive.",
    carried: "Victory abroad can corrupt at home, as it had at Athens.",
  },
  {
    code: "II.4",
    title: "Rhetoric and public service",
    layer: "Eloquence in the service of the state",
    who: "The statesman",
    era: "The late Republic, 133–43 BC: the Gracchi, Marius and Sulla, Cicero. Caesar crosses the Rubicon in 49 BC and is killed in 44 BC.",
    lessons: [],
    failed:
      "The Republic decayed into civil wars. Eloquence could not stop armies loyal to generals. Cicero was killed in 43 BC.",
    carried: "Speech and law need institutions strong enough to restrain ambition.",
  },
  {
    code: "II.5",
    title: "Stoic self-command",
    layer: "Inner freedom",
    who: "Self-government under any regime",
    era: "The Principate, from Augustus (sole ruler from 31 BC) to the Antonines (to AD 180).",
    lessons: [],
    failed:
      "Stoicism made good men but not good successors. Marcus chose his son Commodus. Seneca served Nero.",
    carried: "Personal virtue cannot replace a sound way of choosing rulers.",
  },
  {
    code: "II.6",
    title: "Administration of empire — and its fall",
    layer: "Government at scale",
    who: "Roads, law, cities, and a shared citizenship",
    era: "The Pax Romana to the fall in the West (AD 476) and Justinian’s Code (AD 529–534).",
    lessons: [],
    failed:
      "Rome fell in the West through civil wars, fiscal strain, overstretch, and pressure on its frontiers. Historians weigh these causes differently.",
    carried:
      "The Renaissance inherited Rome’s law, language, and ideals, and took the fall as a warning about corruption and the loss of civic virtue.",
  },
];

export const renaissanceArc: OutlineModule[] = [
  {
    code: "III.1",
    title: "Recovery of the classics",
    layer: "Humanist learning",
    who: "The scholar who reads the ancients in their own words",
    era: "Italy, about 1340–1450. Manuel Chrysoloras taught Greek in Florence from 1397.",
    lessons: [],
    failed: "Humanists often despised medieval learning unfairly, and could be pedantic imitators of Cicero.",
    carried: "Imitation must become judgment.",
  },
  {
    code: "III.2",
    title: "Civic humanism",
    layer: "Active citizenship guided by classical learning",
    who: "The citizen of the republic",
    era: "Florence and Venice, about 1400–1494.",
    lessons: [],
    failed:
      "Florence’s republic gave way to Medici dominance, and Savonarola’s rule (1494–1498) ended in his execution.",
    carried: "Civic ideals without real checks repeat Rome’s slide to one-man rule.",
  },
  {
    code: "III.3",
    title: "Art, architecture and proportion",
    layer: "Beauty as ordered proportion",
    who: "The universal man",
    era: "Florence and Rome, about 1420–1520.",
    lessons: [],
    failed:
      "Patronage depended on wealth from bankers and popes. Grand projects such as the rebuilding of St. Peter’s helped fuel the indulgence sales that provoked the Reformation. That chain of cause is a simplification.",
    carried: "Magnificence needs moral and financial limits.",
  },
  {
    code: "III.4",
    title: "The new science",
    layer: "Observation and mathematics testing inherited authority",
    who: "The inquirer who will test the ancients",
    era: "About 1450–1640. Gutenberg’s press is placed in the 1450s. Copernicus and Vesalius publish in 1543. Galileo is tried in 1633.",
    lessons: [],
    failed:
      "Authorities tried Galileo and condemned his views in 1633. Humanists sometimes revered ancient texts even when they were wrong.",
    carried: "Reverence for the classics must not block evidence.",
  },
  {
    code: "III.5",
    title: "The prince and political realism",
    layer: "A clear-eyed understanding of power",
    who: "The student of virtù and fortuna",
    era: "Italy at war, 1494–1530. Rome was sacked in 1527.",
    lessons: [],
    failed:
      "Italy’s states repeated Greek disunity and were overrun by France and Spain. Rome was sacked in 1527.",
    carried: "Realism without unity or virtue fails, as the Greeks had found.",
  },
  {
    code: "III.6",
    title: "The courtier and statesman",
    layer: "Grace, competence, learning, and service in one person",
    who: "The modern professional",
    era: "The courts of Urbino and beyond, in the 1500s, then north to Erasmus, More, Elyot, and Ascham. More was executed in 1535.",
    lessons: [],
    failed:
      "Courtly ideals could become mere polish and flattery. More was executed in 1535 for refusing his king.",
    carried:
      "The professional must keep conscience and courage beneath his skill, which brings the course back to its first layer, honor.",
  },
];

export function arcFor(slug: string): OutlineModule | undefined {
  return greeceArc.find((module) => module.slug === slug);
}
