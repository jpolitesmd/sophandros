/**
 * Owner’s organizing principle, October 2026: the course builds a well-rounded
 * ancient Greek man layer by layer, as Greek society grows more complex.
 *
 * FLAG: the virtue names, the period labels (Bronze Age, Archaic age), and the
 * phrase “the complete man” are that frame. They are not titles in the drafted
 * syllabi. Module titles, week titles, and readings stay the syllabi.
 * FLAG: a detailed per-week “today we add” outline was not attached yet. Only
 * Lesson 1’s addition is fixed: honor itself, as the foundation.
 * FLAG: the syllabi do not date a historical Trojan War. Do not add one.
 * The mask date below is the syllabus date (Grave Circle A, c. 1550–1500 BC).
 */

export interface Layer {
  n: number;
  slug: string;
  code: string;
  /** Existing syllabus title. */
  moduleTitle: string;
  /** Owner’s name for the layer. */
  virtue: string;
  /** Who the layer is forming, in the owner’s words. */
  who: string;
  /** Owner’s period label. */
  age: string;
  href: string;
  /** Short teacher-voice scene for the module page. Facts are from the syllabus. */
  scene: string;
}

export const layers: Layer[] = [
  {
    n: 1,
    slug: "the-heroic-code",
    code: "I.1",
    moduleTitle: "The Heroic Code",
    virtue: "Honor",
    who: "The warrior",
    age: "Bronze Age",
    href: "/curriculum/the-heroic-code",
    scene:
      "This module is the warrior, before the course has a household, a city, or a court. The reading is the Iliad. Worth, in that camp, is public: a prize the army can see, and a song that can outlive the man. Mycenae is the citadel the later tradition gave to Agamemnon. The Lion Gate is part of the UNESCO listing “Archaeological Sites of Mycenae and Tiryns.” The gold mask Schliemann called Agamemnon’s is from Grave Circle A, about 1550–1500 BC, centuries older than the Trojan War as that later tradition told it. The name is his. The poem is the lesson, not the mask.",
  },
  {
    n: 2,
    slug: "homecoming",
    code: "I.2",
    moduleTitle: "Homecoming",
    virtue: "Mind and home",
    who: "The householder",
    age: "Archaic age",
    href: "/curriculum/homecoming",
    scene:
      "The second layer is the householder. The Iliad left a fighter on a field. The Odyssey asks whether that man can come home, and whether a stranger is safe in a house. Hesiod’s Works and Days puts the same person in a farmer’s year, under justice and work. Cunning and guest-friendship stand on the honor of Module 1. They do not replace it.",
  },
  {
    n: 3,
    slug: "inquiry-and-war",
    code: "I.3",
    moduleTitle: "Inquiry and War",
    virtue: "Citizen and soldier",
    who: "The citizen who fights",
    age: "Persian and Peloponnesian Wars",
    href: "/curriculum/inquiry-and-war",
    scene:
      "The third layer is a citizen who is also a soldier. Herodotus carries the Persian wars from Croesus and Solon through Marathon, Thermopylae, and Salamis. Thucydides carries the war Athens fought with Sparta: Pericles, the plague, Melos, and Sicily. The man still has the honor and the household of the first two layers. What is new is a city that decides, and a war fought in that city’s name.",
  },
  {
    n: 4,
    slug: "tragedy-and-the-city",
    code: "I.4",
    moduleTitle: "Tragedy and the City",
    virtue: "Conscience and law",
    who: "The person before a court",
    age: "Tragedy and the courts",
    href: "/curriculum/tragedy-and-the-city",
    scene:
      "The fourth layer is conscience, and a law that can answer it. The syllabus week on the Eumenides is titled “the birth of the court.” Antigone sets a burial against a ruler’s order. Oedipus the King and Medea are in the same module. Honor told a warrior what his prize was worth. A court asks what he owes when the prize and the house and the city disagree.",
  },
  {
    n: 5,
    slug: "the-examined-life",
    code: "I.5",
    moduleTitle: "The Examined Life",
    virtue: "The examined mind",
    who: "Socrates, and a mind that can prove",
    age: "Socrates, Plato, Euclid",
    href: "/curriculum/the-examined-life",
    scene:
      "The fifth layer is a mind that examines itself. The syllabus puts the line from the Apology here: the unexamined life is not worth living. The readings are Euthyphro, Apology, Crito, Phaedo, Meno, and the Republic, with Euclid’s Elements, Book I, as the discipline of proof. The earlier layers gave the man a prize, a house, a city, and a court. This one asks him to say what he knows.",
  },
  {
    n: 6,
    slug: "virtue-and-polity",
    code: "I.6",
    moduleTitle: "Virtue and Polity",
    virtue: "Practical wisdom",
    who: "The complete man",
    age: "Aristotle and the Parthenon",
    href: "/curriculum/virtue-and-polity",
    scene:
      "The sixth layer is practical wisdom, and it is meant to finish the Greek figure. Aristotle’s Ethics treats happiness as an activity of the soul in accordance with virtue, and virtue as a mean formed by habit. The Politics calls the human being a political animal. The same module looks at the Parthenon, which the syllabus dates 447–432 BC, as a civic statement in stone. Honor, home, the citizen, the court, and the examined mind are supposed to be in him already.",
  },
];

export function layerFor(slug: string): Layer | undefined {
  return layers.find((layer) => layer.slug === slug);
}

/** After the six Greek layers. Not drawn as extra courses. */
export const afterGreece =
  "Rome continues the same person into duty and law. The Renaissance continues him into the courtier, and into the modern professional.";
