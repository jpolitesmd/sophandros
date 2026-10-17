/**
 * Chicago notes-bibliography entries for the course.
 * Source: the master bibliography of 16 Oct 2026 (Parts A and B) and, for the
 * prologue’s extra note, that lesson’s own References section.
 * Do not add a work that is not in that bibliography.
 *
 * Part B names authors, and sometimes the same author more than once.
 * Those repeats are resolved only as follows, and only to entries in Part A:
 * - “Homer” three times on an Iliad lesson: Murray, Lattimore, Butler, Iliad.
 * - “Homer” twice on an Odyssey lesson: Lattimore and Butler, Odyssey.
 * - “Plato; Plato”: Cooper, then Jowett. One “Plato” (lesson 35) is both,
 *   because Part B does not choose an edition.
 * - “Aristotle; Aristotle” on the Politics lesson: Jowett, then Rackham.
 * - “Aristotle ⚑” is the flagged work the lesson names: the Athenian
 *   Constitution, or Parts of Animals where the lesson names that book.
 * - Lesson 44 names both Politics and Parts of Animals, so both Politics
 *   translations are listed with Peck.
 * - An unflagged “Aristotle” on the Sparta lesson is the Politics, both
 *   translations. The flagged Athenian Constitution is not used there.
 * - Plutarch is the volume whose title names the life: Lycurgus, Numa, or
 *   Solon in Loeb 46; Alexander in Loeb 99; Gracchi, Marius, Sulla, Cato
 *   the Elder, or Aemilius Paullus in the Parallel Lives entry.
 * - Xenophon ⚑ is Scripta Minora (Constitution of the Lacedaemonians).
 *   The unflagged Xenophon on the trial lesson is Hellenica.
 * - Machiavelli follows the lesson title: The Prince, the Discourses, or
 *   the Florentine Histories.
 * - One “Richard, Carl J.” is *The Founders and the Classics*. Two are that
 *   book and *Greeks and Romans Bearing Gifts*, in Part IV’s order (Gifts,
 *   then Founders and the Classics).
 * - One “United States” on the Declaration lesson is the Declaration. Two on
 *   the failure lesson are the Articles of Confederation and the Constitution,
 *   the first two United States entries in Part IV.
 * - “Aristotle” in Part IV is Rackham’s *Politics*, the only Aristotle entry
 *   in that part. “Cicero” there is *On the Republic* and *On the Laws*.
 * - “Plutarch” in Part IV is the Solon and Publicola volume as that part
 *   cites it, not the longer Greece entry.
 * A ⚑ in the bibliography is `unverified: true`. The local Ascham path is
 * omitted; it is not part of the published citation.
 */

export type BibEntry = {
  id: string;
  chicago: string;
  unverified?: boolean;
};

export type CourseLesson = {
  n: number;
  slug: string;
  title: string;
  refs: string[];
  href?: string;
  note?: string;
};

export type LessonModule = {
  id: string;
  heading: string;
  lessons: CourseLesson[];
};

export type LessonPhase = {
  id: string;
  heading: string;
  modules: LessonModule[];
};

const e = (id: string, chicago: string, unverified = false): BibEntry => ({
  id,
  chicago,
  ...(unverified ? { unverified: true } : {}),
});

export const bibliography: BibEntry[] = [
  e("ascham", "Ascham, Roger. *The Scholemaster*. London: John Daye, 1570."),
  e("castleden", "Castleden, Rodney. *Minoans: Life in Bronze Age Crete*. London: Routledge, 1990."),
  e("chadwick", "Chadwick, John. *The Decipherment of Linear B*. Cambridge: Cambridge University Press, 1958."),
  e("cline", "Cline, Eric H. *1177 B.C.: The Year Civilization Collapsed*. Princeton, NJ: Princeton University Press, 2014. Rev. ed. 2021."),
  e("evans", "Evans, Arthur. *The Palace of Minos at Knossos*. 4 vols. London: Macmillan, 1921–35."),
  e("hodder", "Hodder, Ian. *The Leopard's Tale: Revealing the Mysteries of Çatalhöyük*. London: Thames & Hudson, 2006."),
  e("lazaridis", 'Lazaridis, Iosif, et al. "Genetic Origins of the Minoans and Mycenaeans." *Nature* 548 (2017): 214–18.', true),
  e("ramelli", "Ramelli, Ilaria. *Hierocles the Stoic: Elements of Ethics, Fragments, and Excerpts*. Translated by David Konstan. Atlanta: Society of Biblical Literature, 2009.", true),
  e("richard", "Richard, Carl J. *The Founders and the Classics: Greece, Rome, and the American Enlightenment*. Cambridge, MA: Harvard University Press, 1994."),
  e("schmidt", "Schmidt, Klaus. *Göbekli Tepe: A Stone Age Sanctuary in South-Eastern Anatolia*. Berlin: ex oriente, 2012.", true),
  e("shelmerdine", "Shelmerdine, Cynthia W., ed. *The Cambridge Companion to the Aegean Bronze Age*. Cambridge: Cambridge University Press, 2008."),
  e("aeschylus", "Aeschylus. *Oresteia*. Translated by Richmond Lattimore. In *The Complete Greek Tragedies*, edited by David Grene and Richmond Lattimore. Chicago: University of Chicago Press, 1953."),
  e("aristotle-ethics", "Aristotle. *Nicomachean Ethics*. Translated by W. D. Ross. Oxford: Clarendon Press, 1908. Public domain."),
  e("aristotle-parts", "Aristotle. *Parts of Animals*. Translated by A. L. Peck. Loeb Classical Library 323. Cambridge, MA: Harvard University Press, 1937.", true),
  e("aristotle-politics-jowett", "Aristotle. *Politics*. Translated by Benjamin Jowett. Oxford: Clarendon Press, 1885. Public domain."),
  e("aristotle-politics-rackham", "Aristotle. *Politics*. Translated by H. Rackham. Loeb Classical Library 264. Cambridge, MA: Harvard University Press, 1932."),
  e("aristotle-athpol", "Aristotle. *The Athenian Constitution*. Translated by H. Rackham. Loeb Classical Library 285. Cambridge, MA: Harvard University Press, 1935.", true),
  e("cartledge", "Cartledge, Paul. *Sparta and Lakonia: A Regional History, 1300–362 BC*. London: Routledge & Kegan Paul, 1979."),
  e("euclid", "Euclid. *The Thirteen Books of Euclid's Elements*. Translated by Thomas L. Heath. 3 vols. Cambridge: Cambridge University Press, 1908. Public domain."),
  e("euripides", "Euripides. *Medea*. Translated by Rex Warner. In *The Complete Greek Tragedies*, edited by David Grene and Richmond Lattimore. Chicago: University of Chicago Press, 1955.", true),
  e("finley", "Finley, M. I. *The World of Odysseus*. New York: Viking, 1954."),
  e("herodotus", "Herodotus. *The Histories*. Translated by A. D. Godley. 4 vols. Loeb Classical Library. Cambridge, MA: Harvard University Press, 1920–25."),
  e("hesiod", "Hesiod. *The Homeric Hymns and Homerica*. Translated by Hugh G. Evelyn-White. Loeb Classical Library 57. London: Heinemann, 1914. Includes *Works and Days*. Public domain."),
  e("holland", "Holland, Tom. *Persian Fire: The First World Empire and the Battle for the West*. London: Little, Brown, 2005."),
  e("homer-iliad-murray", "Homer. *Iliad*. Translated by A. T. Murray. 2 vols. Loeb Classical Library 170–171. Cambridge, MA: Harvard University Press, 1924–25. Text on Perseus Digital Library."),
  e("homer-iliad-lattimore", "Homer. *The Iliad of Homer*. Translated by Richmond Lattimore. Chicago: University of Chicago Press, 1951."),
  e("homer-iliad-butler", "Homer. *The Iliad*. Translated by Samuel Butler. London: Longmans, Green, 1898. Public domain."),
  e("homer-odyssey-lattimore", "Homer. *The Odyssey of Homer*. Translated by Richmond Lattimore. New York: Harper & Row, 1965."),
  e("homer-odyssey-butler", "Homer. *The Odyssey*. Translated by Samuel Butler. London: Longmans, Green, 1900. Public domain."),
  e("hurwit", "Hurwit, Jeffrey M. *The Athenian Acropolis*. Cambridge: Cambridge University Press, 1999."),
  e("kagan", "Kagan, Donald. *The Peloponnesian War*. New York: Viking, 2003."),
  e("knox", "Knox, Bernard. *Oedipus at Thebes*. New Haven, CT: Yale University Press, 1957."),
  e("lane-fox", "Lane Fox, Robin. *Alexander the Great*. London: Allen Lane, 1973."),
  e("lord", "Lord, Albert B. *The Singer of Tales*. Cambridge, MA: Harvard University Press, 1960."),
  e("plato-cooper", "Plato. *Complete Works*. Edited by John M. Cooper. Indianapolis: Hackett, 1997."),
  e("plato-jowett", "Plato. *The Dialogues of Plato*. Translated by Benjamin Jowett. 3rd ed. 5 vols. Oxford: Clarendon Press, 1892. Public domain."),
  e("plutarch-lycurgus", "Plutarch. *Lives*, vol. 1: *Theseus and Romulus; Lycurgus and Numa; Solon and Publicola*. Translated by Bernadotte Perrin. Loeb Classical Library 46. Cambridge, MA: Harvard University Press, 1914."),
  e("plutarch-alexander", "Plutarch. *Lives*, vol. 7: *Demosthenes and Cicero; Alexander and Caesar*. Translated by Bernadotte Perrin. Loeb Classical Library 99. Cambridge, MA: Harvard University Press, 1919."),
  e("plutarch-republic", "Plutarch. *Parallel Lives* (Gracchi, Marius, Sulla, Cato the Elder, Aemilius Paullus). Translated by Bernadotte Perrin. Loeb Classical Library. Cambridge, MA: Harvard University Press, 1914–26."),
  e("polybius", "Polybius. *The Histories*. Translated by W. R. Paton. 6 vols. Loeb Classical Library. Cambridge, MA: Harvard University Press, 1922–27."),
  e("sophocles", "Sophocles. *The Plays and Fragments*. Edited and translated by Richard C. Jebb. Cambridge: Cambridge University Press, 1883–96. Public domain."),
  e("stone", "Stone, I. F. *The Trial of Socrates*. Boston: Little, Brown, 1988."),
  e("landmark-herodotus", "Strassler, Robert B., ed. *The Landmark Herodotus: The Histories*. Translated by Andrea L. Purvis. New York: Pantheon, 2007."),
  e("landmark-thucydides", "Strassler, Robert B., ed. *The Landmark Thucydides*. Revised Crawley translation. New York: Free Press, 1996."),
  e("thucydides", "Thucydides. *History of the Peloponnesian War*. Translated by Richard Crawley. London: Longmans, Green, 1874. Public domain."),
  e("vitruvius", "Vitruvius. *The Ten Books on Architecture*. Translated by Morris Hicky Morgan. Cambridge, MA: Harvard University Press, 1914. Public domain."),
  e("waterfield", "Waterfield, Robin. *Why Socrates Died: Dispelling the Myths*. New York: W. W. Norton, 2009."),
  e("xenophon-hellenica", "Xenophon. *Hellenica*. Translated by Carleton L. Brownson. 2 vols. Loeb Classical Library. Cambridge, MA: Harvard University Press, 1918–21."),
  e("xenophon-scripta", "Xenophon. *Scripta Minora*. Translated by E. C. Marchant and G. W. Bowersock. Loeb Classical Library 183. Cambridge, MA: Harvard University Press, 1925. Includes *Constitution of the Lacedaemonians*.", true),
  e("augustine", "Augustine. *The City of God against the Pagans*. Edited and translated by R. W. Dyson. Cambridge: Cambridge University Press, 1998."),
  e("augustus", "Augustus. *Res Gestae Divi Augusti*. Translated by Frederick W. Shipley. Loeb Classical Library 152. Cambridge, MA: Harvard University Press, 1924."),
  e("beard", "Beard, Mary. *SPQR: A History of Ancient Rome*. London: Profile Books, 2015."),
  e("brown", "Brown, Peter. *Augustine of Hippo: A Biography*. Berkeley: University of California Press, 1967."),
  e("caesar", "Caesar. *The Gallic War*. Translated by H. J. Edwards. Loeb Classical Library 72. Cambridge, MA: Harvard University Press, 1917."),
  e("cicero-duties", "Cicero. *On Duties* (*De Officiis*). Translated by Walter Miller. Loeb Classical Library 30. Cambridge, MA: Harvard University Press, 1913."),
  e("cicero-orator", "Cicero. *On the Orator* (*De Oratore*), Books I–II. Translated by E. W. Sutton and H. Rackham. Loeb Classical Library 348. Cambridge, MA: Harvard University Press, 1942.", true),
  e("epictetus", "Epictetus. *Discourses and Enchiridion*. Translated by W. A. Oldfather. 2 vols. Loeb Classical Library. Cambridge, MA: Harvard University Press, 1925–28."),
  e("eusebius", "Eusebius. *Life of Constantine*. Translated by Averil Cameron and Stuart G. Hall. Oxford: Clarendon Press, 1999."),
  e("gibbon", "Gibbon, Edward. *The History of the Decline and Fall of the Roman Empire*. 6 vols. London: Strahan & Cadell, 1776–89."),
  e("goldsworthy", "Goldsworthy, Adrian. *The Punic Wars*. London: Cassell, 2000."),
  e("heather", "Heather, Peter. *The Fall of the Roman Empire: A New History*. London: Macmillan, 2005."),
  e("horace", "Horace. *Satires, Epistles, and Ars Poetica*. Translated by H. Rushton Fairclough. Loeb Classical Library 194. Cambridge, MA: Harvard University Press, 1926."),
  e("justinian", "Justinian. *The Institutes of Justinian*. Translated by J. B. Moyle. 5th ed. Oxford: Clarendon Press, 1913. Public domain."),
  e("livy", "Livy. *History of Rome*. Translated by B. O. Foster et al. 14 vols. Loeb Classical Library. Cambridge, MA: Harvard University Press, 1919–59."),
  e("marcus", "Marcus Aurelius. *Meditations*. Translated by George Long. London, 1862. Public domain."),
  e("pliny", "Pliny the Younger. *Letters and Panegyricus*. Translated by Betty Radice. 2 vols. Loeb Classical Library. Cambridge, MA: Harvard University Press, 1969."),
  e("sallust", "Sallust. *The War with Catiline*. Translated by J. C. Rolfe. Loeb Classical Library 116. Cambridge, MA: Harvard University Press, 1921."),
  e("seneca", "Seneca. *Epistles*. Translated by Richard M. Gummere. 3 vols. Loeb Classical Library. Cambridge, MA: Harvard University Press, 1917–25."),
  e("suetonius", "Suetonius. *Lives of the Caesars*. Translated by J. C. Rolfe. 2 vols. Loeb Classical Library. Cambridge, MA: Harvard University Press, 1914."),
  e("syme", "Syme, Ronald. *The Roman Revolution*. Oxford: Clarendon Press, 1939."),
  e("virgil", "Virgil. *The Aeneid*. Translated by Robert Fitzgerald. New York: Random House, 1983."),
  e("ward-perkins", "Ward-Perkins, Bryan. *The Fall of Rome and the End of Civilization*. Oxford: Oxford University Press, 2005."),
  e("warmington", "Warmington, E. H., ed. and trans. *Remains of Old Latin*, vol. 3: *Lucilius; The Twelve Tables*. Loeb Classical Library 329. Cambridge, MA: Harvard University Press, 1938.", true),
  e("alberti-painting", "Alberti, Leon Battista. *On Painting*. Translated by John R. Spencer. New Haven, CT: Yale University Press, 1956."),
  e("alberti-building", "Alberti, Leon Battista. *On the Art of Building in Ten Books*. Translated by Joseph Rykwert, Neil Leach, and Robert Tavernor. Cambridge, MA: MIT Press, 1988."),
  e("bacon", "Bacon, Francis. *The New Organon*. Edited by Lisa Jardine and Michael Silverthorne. Cambridge: Cambridge University Press, 2000."),
  e("baron", "Baron, Hans. *The Crisis of the Early Italian Renaissance*. Princeton, NJ: Princeton University Press, 1955."),
  e("boethius", "Boethius. *The Consolation of Philosophy*. Translated by H. R. James. London: Elliot Stock, 1897. Public domain."),
  e("bruni", "Bruni, Leonardo. *Panegyric to the City of Florence*. In *The Earthly Republic: Italian Humanists on Government and Society*, edited by Benjamin G. Kohl and Ronald G. Witt. Philadelphia: University of Pennsylvania Press, 1978.", true),
  e("burckhardt", "Burckhardt, Jacob. *The Civilization of the Renaissance in Italy*. Translated by S. G. C. Middlemore. London, 1878. Public domain."),
  e("castiglione", "Castiglione, Baldassare. *The Book of the Courtier*. Translated by Charles S. Singleton. Garden City, NY: Doubleday Anchor, 1959."),
  e("contarini", "Contarini, Gasparo. *The Commonwealth and Government of Venice*. Translated by Lewes Lewkenor. London, 1599.", true),
  e("copernicus", "Copernicus, Nicolaus. *On the Revolutions of the Heavenly Spheres*. Translated by Edward Rosen. Baltimore: Johns Hopkins University Press, 1978.", true),
  e("eisenstein", "Eisenstein, Elizabeth L. *The Printing Press as an Agent of Change*. 2 vols. Cambridge: Cambridge University Press, 1979."),
  e("elyot", "Elyot, Thomas. *The Book Named the Governor*. London, 1531. Modern ed. S. E. Lehmberg. London: Dent (Everyman), 1962."),
  e("erasmus", "Erasmus, Desiderius. *The Education of a Christian Prince*. Translated by Lester K. Born. New York: Columbia University Press, 1936."),
  e("galileo", "Galileo Galilei. *Discoveries and Opinions of Galileo*. Translated by Stillman Drake. Garden City, NY: Doubleday Anchor, 1957."),
  e("grafton", "Grafton, Anthony, and Lisa Jardine. *From Humanism to the Humanities*. Cambridge, MA: Harvard University Press, 1986."),
  e("greenblatt", "Greenblatt, Stephen. *The Swerve: How the World Became Modern*. New York: W. W. Norton, 2011."),
  e("guicciardini", "Guicciardini, Francesco. *The History of Italy*. Translated by Sidney Alexander. New York: Macmillan, 1969."),
  e("gutas", "Gutas, Dimitri. *Greek Thought, Arabic Culture*. London: Routledge, 1998."),
  e("hale", "Hale, J. R. *Florence and the Medici: The Pattern of Control*. London: Thames & Hudson, 1977."),
  e("kallendorf", "Kallendorf, Craig W., ed. and trans. *Humanist Educational Treatises*. I Tatti Renaissance Library 5. Cambridge, MA: Harvard University Press, 2002. Includes Vergerio and Piccolomini.", true),
  e("king", "King, Ross. *Brunelleschi's Dome*. New York: Walker, 2000."),
  e("kohl", "Kohl, Benjamin G., and Ronald G. Witt, eds. *The Earthly Republic: Italian Humanists on Government and Society*. Philadelphia: University of Pennsylvania Press, 1978."),
  e("leonardo", "Leonardo da Vinci. *The Notebooks of Leonardo da Vinci*. Edited by Jean Paul Richter. 2 vols. London, 1883. Public domain."),
  e("machiavelli-discourses", "Machiavelli, Niccolò. *Discourses on Livy*. Translated by Harvey C. Mansfield and Nathan Tarcov. Chicago: University of Chicago Press, 1996."),
  e("machiavelli-histories", "Machiavelli, Niccolò. *Florentine Histories*. Translated by Laura F. Banfield and Harvey C. Mansfield. Princeton, NJ: Princeton University Press, 1988."),
  e("machiavelli-prince", "Machiavelli, Niccolò. *The Prince*. Translated by Harvey C. Mansfield. 2nd ed. Chicago: University of Chicago Press, 1998."),
  e("montaigne", "Montaigne, Michel de. *The Complete Essays of Montaigne*. Translated by Donald M. Frame. Stanford, CA: Stanford University Press, 1958."),
  e("more", "More, Thomas. *Utopia*. Edited by George M. Logan and Robert M. Adams. Cambridge: Cambridge University Press, 1989."),
  e("petrarch", "Petrarch. *Letters on Familiar Matters* (*Rerum familiarium libri*). Translated by Aldo S. Bernardo. 3 vols. Albany: SUNY Press / Baltimore: Johns Hopkins University Press, 1975–85.", true),
  e("reynolds", "Reynolds, L. D., and N. G. Wilson. *Scribes and Scholars: A Guide to the Transmission of Greek and Latin Literature*. Oxford: Clarendon Press, 1968."),
  e("skinner", "Skinner, Quentin. *Machiavelli*. Oxford: Oxford University Press, 1981."),
  e("vasari", "Vasari, Giorgio. *Lives of the Most Excellent Painters, Sculptors, and Architects*. Translated by Gaston du C. de Vere. 10 vols. London: Medici Society, 1912–15. Public domain."),
  e("vesalius", "Vesalius, Andreas. *On the Fabric of the Human Body*. Translated by William Frank Richardson and John Burd Carman. San Francisco: Norman Publishing, 1998–2009.", true),
  e("weinstein", "Weinstein, Donald. *Savonarola: The Rise and Fall of a Renaissance Prophet*. New Haven, CT: Yale University Press, 2011."),
  e("wilson", "Wilson, N. G. *From Byzantium to Italy: Greek Studies in the Italian Renaissance*. London: Duckworth, 1992."),
  e("adams", "Adams, John. *A Defence of the Constitutions of Government of the United States of America*. 3 vols. London: C. Dilly, 1787–88. Also in *The Works of John Adams*, edited by Charles Francis Adams, vols. 4–6. Boston: Little, Brown, 1851.", true),
  e("addison", "Addison, Joseph. *Cato: A Tragedy*. London: J. Tonson, 1713. Modern ed. in *Cato: A Tragedy, and Selected Essays*, edited by Christine Dunn Henderson and Mark E. Yellin. Indianapolis: Liberty Fund, 2004.", true),
  e("bailyn", "Bailyn, Bernard. *The Ideological Origins of the American Revolution*. Cambridge, MA: Belknap Press of Harvard University Press, 1967."),
  e("cicero-republic", "Cicero. *On the Republic; On the Laws*. Translated by Clinton W. Keyes. Loeb Classical Library 213. Cambridge, MA: Harvard University Press, 1928."),
  e("federalist", "Hamilton, Alexander, James Madison, and John Jay. *The Federalist*. Edited by Jacob E. Cooke. Middletown, CT: Wesleyan University Press, 1961."),
  e("jefferson-lee", "Jefferson, Thomas. Letter to Henry Lee, May 8, 1825. Founders Online, National Archives. https://founders.archives.gov.", true),
  e("locke", "Locke, John. *Two Treatises of Government*. Edited by Peter Laslett. Cambridge: Cambridge University Press, 1988."),
  e("montesquieu", "Montesquieu. *The Spirit of the Laws*. Translated and edited by Anne M. Cohler, Basia Carolyn Miller, and Harold Samuel Stone. Cambridge: Cambridge University Press, 1989."),
  e("plutarch-publicola", "Plutarch. *Lives*, vol. 1 (Solon and Publicola). Translated by Bernadotte Perrin. Loeb Classical Library 46. Cambridge, MA: Harvard University Press, 1914."),
  e("richard-gifts", "Richard, Carl J. *Greeks and Romans Bearing Gifts: How the Ancients Inspired the Founding Fathers*. Lanham, MD: Rowman & Littlefield, 2008."),
  e("trenchard", "Trenchard, John, and Thomas Gordon. *Cato's Letters*. Edited by Ronald Hamowy. 2 vols. Indianapolis: Liberty Fund, 1995."),
  e("articles", "United States. *Articles of Confederation*. 1777; ratified 1781. National Archives."),
  e("constitution", "United States. *Constitution of the United States*. 1787. National Archives. https://www.archives.gov/founding-docs/constitution-transcript."),
  e("declaration", "United States. *Declaration of Independence*. July 4, 1776. National Archives. https://www.archives.gov/founding-docs/declaration-transcript."),
  e("washington", "Washington, George. *Farewell Address*. September 19, 1796. Founders Online, National Archives.", true),
  e("wills", "Wills, Garry. *Cincinnatus: George Washington and the Enlightenment*. Garden City, NY: Doubleday, 1984."),
  e("wood", "Wood, Gordon S. *The Creation of the American Republic, 1776–1787*. Chapel Hill: University of North Carolina Press, 1969."),
  e("rubio", 'Rubio, Marco. "Secretary of State Marco Rubio Remarks." Speech, the Pnyx, Athens, Greece, October 7, 2026. U.S. Department of State. https://www.state.gov/releases/office-of-the-spokesman/2026/10/secretary-of-state-marco-rubio-remarks/ (accessed October 16, 2026).'),
];

const byId = new Map(bibliography.map((entry) => [entry.id, entry]));

export function bibEntry(id: string): BibEntry {
  const entry = byId.get(id);
  if (!entry) throw new Error(`Unknown bibliography id: ${id}`);
  return entry;
}

const ILIAD = ["homer-iliad-murray", "homer-iliad-lattimore", "homer-iliad-butler"];
const ODYSSEY = ["homer-odyssey-lattimore", "homer-odyssey-butler"];
const PLATO = ["plato-cooper", "plato-jowett"];
const POLITICS = ["aristotle-politics-jowett", "aristotle-politics-rackham"];
const THUC = ["kagan", "landmark-thucydides", "thucydides"];

function lesson(
  n: number,
  slug: string,
  title: string,
  refs: string[],
  href?: string,
  note?: string,
): CourseLesson {
  for (const id of refs) bibEntry(id);
  return { n, slug, title, refs, ...(href ? { href } : {}), ...(note ? { note } : {}) };
}

export const lessonPhases: LessonPhase[] = [
  {
    id: "opening",
    heading: "Orientation and Prologue",
    modules: [
      {
        id: "opening",
        heading: "Before the modules",
        lessons: [
          lesson(1, "how-sophandros-works", "Orientation: How Sophandros works", ["ascham", "ramelli", "richard"]),
          lesson(
            2,
            "the-birth-of-civilization",
            "Prologue: The Birth of Civilization",
            ["castleden", "chadwick", "cline", "evans", "hodder", "lazaridis", "schmidt", "shelmerdine"],
            "/lessons/the-birth-of-civilization",
            "Primary text named, not quoted: Homer, *Odyssey* 19 (Crete’s “ninety cities”). Verify the line before quoting. See the Lattimore and Butler *Odyssey* translations listed under Module I.2. Optional: the Shelmerdine chapters on Crete, then Cline’s first chapters on the interconnected Bronze Age world.",
          ),
        ],
      },
    ],
  },
  {
    id: "greece",
    heading: "Phase I · Greece",
    modules: [
      {
        id: "i1",
        heading: "I.1 · Honor — the warrior",
        lessons: [
          lesson(3, "the-world-of-homer", "History: The World of Homer", ["chadwick", "cline", "finley", "lord", "shelmerdine"], "/lessons/the-world-of-homer"),
          lesson(4, "the-wrath", "Laying the first stone: honor and glory", ILIAD, "/lessons/the-wrath"),
          lesson(5, "kings-and-spectators", "Honor in a society of chieftains", ILIAD, "/lessons/kings-and-spectators"),
          lesson(6, "honor-and-home", "Honor tied to home and duty", ILIAD, "/lessons/honor-and-home"),
          lesson(7, "loyalty-and-the-world", "Loyalty and the whole world of men", ILIAD, "/lessons/loyalty-and-the-world"),
          lesson(8, "the-limits-of-honor", "The limits of honor", ILIAD, "/lessons/the-limits-of-honor"),
          lesson(9, "honor-and-compassion", "Honor completed by compassion", ILIAD, "/lessons/honor-and-compassion"),
        ],
      },
      {
        id: "i2",
        heading: "I.2 · Mind and home — the householder",
        lessons: [
          lesson(10, "the-archaic-age", "History: The World Rebuilds: the Archaic Age", ["finley", "herodotus", "shelmerdine"]),
          lesson(11, "a-household-without-its-master", "A household without its master", ["finley", ...ODYSSEY]),
          lesson(12, "guest-friendship", "Guest-friendship: the law of the stranger", ["finley", ...ODYSSEY]),
          lesson(13, "adding-mind-to-strength", "Adding mind to strength", ODYSSEY),
          lesson(14, "what-is-fame-worth", "What is fame worth?", ODYSSEY),
          lesson(15, "restoring-the-house", "Restoring the house", ODYSSEY),
          lesson(16, "work-and-the-farmers-year", "Work, justice and the farmer’s year", ["hesiod"]),
        ],
      },
      {
        id: "i3",
        heading: "I.3 · Citizen and soldier",
        lessons: [
          lesson(17, "democracy-and-empire", "History: From Household to City: Democracy and Empire", ["aristotle-athpol", "herodotus", "holland"]),
          lesson(18, "hubris-and-fortune", "Why history begins: hubris and fortune", ["herodotus", "landmark-herodotus"]),
          lesson(19, "marathon", "Free men in the line: Marathon", ["herodotus", "holland", "landmark-herodotus"]),
          lesson(20, "thermopylae-and-salamis", "Sacrifice and strategy: Thermopylae and Salamis", ["herodotus", "holland", "landmark-herodotus"]),
          lesson(21, "the-spartan-counterpoint", "The Spartan counterpoint: why Sparta’s constitution worked, and why it failed", [
            ...POLITICS,
            "cartledge",
            "herodotus",
            "plutarch-lycurgus",
            "polybius",
            "richard",
            "thucydides",
            "xenophon-scripta",
          ]),
          lesson(22, "thucydides-method", "Seeing clearly: Thucydides’ method", THUC),
          lesson(23, "pericles-plague-civil-war", "The city tested: Pericles, plague, civil war", THUC),
          lesson(24, "melos-and-sicily", "Power without justice: Melos and Sicily", THUC),
        ],
      },
      {
        id: "i4",
        heading: "I.4 · Conscience and law — the moral man",
        lessons: [
          lesson(25, "theater-and-court", "History: The Theater and the Court: Athens at its Height", ["aristotle-athpol", "hurwit", "plutarch-lycurgus"]),
          lesson(26, "agamemnon", "The inherited curse: Agamemnon", ["aeschylus"]),
          lesson(27, "libation-bearers", "Revenge as duty: Libation Bearers", ["aeschylus"]),
          lesson(28, "eumenides", "The court replaces the feud: Eumenides", ["aeschylus", "aristotle-athpol"]),
          lesson(29, "antigone", "Law against conscience: Antigone", ["sophocles"]),
          lesson(30, "oedipus", "Knowing oneself: Oedipus the King", ["knox", "sophocles"]),
          lesson(31, "medea", "Passion and the outsider: Medea", ["euripides"]),
        ],
      },
      {
        id: "i5",
        heading: "I.5 · The examined mind — the thinker",
        lessons: [
          lesson(32, "trial-of-socrates", "History: Defeat, Tyranny and the Trial of Socrates", ["stone", "waterfield", "xenophon-hellenica"]),
          lesson(33, "euthyphro-apology", "Questioning piety: Socrates on trial", PLATO),
          lesson(34, "crito-phaedo", "Reason and the laws: Crito, Phaedo", PLATO),
          lesson(35, "meno-and-euclid", "How we learn: Meno and Euclid I", ["euclid", ...PLATO]),
          lesson(36, "what-is-justice", "What is justice?", PLATO),
          lesson(37, "the-ordered-soul", "The ordered soul", PLATO),
          lesson(38, "the-cave", "Toward the Good: the Cave", PLATO),
        ],
      },
      {
        id: "i6",
        heading: "I.6 · Practical wisdom — the complete man",
        lessons: [
          lesson(39, "macedon-and-alexander", "History: Macedon, Alexander and the Wider World", ["lane-fox", "plutarch-alexander"]),
          lesson(40, "eudaimonia", "The goal of the whole man: eudaimonia", ["aristotle-ethics"]),
          lesson(41, "the-mean", "Virtue by habit: the mean", ["aristotle-ethics"]),
          lesson(42, "practical-wisdom", "Practical wisdom and the highest life", ["aristotle-ethics"]),
          lesson(43, "the-political-animal", "The political animal", POLITICS),
          lesson(44, "balance", "Balance in the city and in nature", ["aristotle-parts", ...POLITICS]),
          lesson(45, "the-parthenon", "Proportion in stone: the Parthenon", ["hurwit", "vitruvius"]),
        ],
      },
    ],
  },
  {
    id: "rome",
    heading: "Phase II · Rome",
    modules: [
      {
        id: "bridge-rome",
        heading: "Bridge",
        lessons: [
          lesson(46, "polis-to-rome", "Bridge: from polis to Hellenistic kingdoms to Rome", ["plutarch-alexander", "polybius"]),
        ],
      },
      {
        id: "ii1",
        heading: "II.1 · Duty — pietas",
        lessons: [
          lesson(47, "rome-from-village", "History: Rome from Village to Republic", ["beard", "livy"], "/lessons/rome-from-village"),
          lesson(48, "aeneas-and-pietas", "Aeneas carries his father: the Aeneid and pietas", ["virgil"]),
          lesson(49, "aeneas-and-dido", "Aeneas and Dido: duty against love", ["virgil"]),
          lesson(50, "livys-romans", "Livy’s exemplary Romans", ["livy"]),
          lesson(51, "the-roman-family", "The Roman family and the custom of the ancestors", ["beard", "plutarch-lycurgus"]),
          lesson(52, "religion-and-the-state", "Religion and the state", ["beard"]),
          lesson(53, "duty-completes-honor", "Review: duty completes honor", ["livy", "virgil"]),
        ],
      },
      {
        id: "ii2",
        heading: "II.2 · Law and the res publica",
        lessons: [
          lesson(54, "the-republics-machinery", "History: The Republic’s Machinery", ["beard", "polybius"]),
          lesson(55, "the-twelve-tables", "The Twelve Tables", ["warmington"]),
          lesson(56, "struggle-of-the-orders", "The Struggle of the Orders", ["livy"]),
          lesson(57, "polybius-mixed", "Polybius and the mixed constitution", ["polybius"]),
          lesson(58, "citizenship-that-grows", "Citizenship that grows", ["beard", "livy"], "/lessons/rome-from-village"),
          lesson(59, "law-as-a-profession", "Law as a profession", ["justinian"]),
          lesson(60, "law-steadies-duty", "Review: law steadies duty", ["polybius"]),
        ],
      },
      {
        id: "ii3",
        heading: "II.3 · Gravitas and the soldier-state",
        lessons: [
          lesson(61, "rome-conquers", "History: Rome Conquers the Mediterranean", ["goldsworthy", "polybius"]),
          lesson(62, "the-legion", "The legion", ["goldsworthy", "polybius"]),
          lesson(63, "hannibal-and-cannae", "Hannibal and Cannae", ["goldsworthy", "livy", "polybius"]),
          lesson(64, "scipio-and-zama", "Scipio and Zama", ["livy", "polybius"]),
          lesson(65, "captive-greece", "Captive Greece", ["horace", "plutarch-republic"]),
          lesson(66, "cato-the-elder", "Cato the Elder and the fear of luxury", ["plutarch-republic"]),
          lesson(67, "the-cost-of-victory", "Review: the cost of victory", ["beard"]),
        ],
      },
      {
        id: "ii4",
        heading: "II.4 · Rhetoric and public service",
        lessons: [
          lesson(68, "republic-in-crisis", "History: The Republic in Crisis, 133–43 BC", ["beard", "plutarch-republic", "syme"]),
          lesson(69, "the-gracchi", "The Gracchi", ["plutarch-republic"]),
          lesson(70, "marius-and-sulla", "Marius, Sulla and armies loyal to generals", ["plutarch-republic"]),
          lesson(71, "cicero-the-orator", "Cicero the orator", ["cicero-orator"]),
          lesson(72, "cicero-on-duty", "Cicero on duty", ["cicero-duties"]),
          lesson(73, "caesar", "Caesar", ["caesar", "suetonius"]),
          lesson(74, "why-the-republic-fell", "Review: why the Republic fell", ["sallust", "syme"]),
        ],
      },
      {
        id: "ii5",
        heading: "II.5 · Stoic self-command",
        lessons: [
          lesson(75, "augustus-and-the-principate", "History: Augustus and the Principate", ["augustus", "syme"]),
          lesson(76, "augustus", "Augustus", ["augustus", "syme"]),
          lesson(77, "seneca", "Seneca", ["seneca"]),
          lesson(78, "epictetus", "Epictetus", ["epictetus"]),
          lesson(79, "marcus-aurelius", "Marcus Aurelius", ["marcus"]),
          lesson(80, "stoicism-and-duty", "Stoicism and duty in one’s station", ["cicero-duties", "epictetus"]),
          lesson(81, "virtue-is-not-succession", "Review: virtue is not succession", ["marcus", "suetonius"]),
        ],
      },
      {
        id: "ii6",
        heading: "II.6 · Administering an empire, and its fall",
        lessons: [
          lesson(82, "rome-at-scale", "History: Rome at Scale", ["beard"]),
          lesson(83, "roman-engineering", "Roman engineering and Vitruvius", ["vitruvius"]),
          lesson(84, "governing-the-provinces", "Governing the provinces", ["pliny"]),
          lesson(85, "crisis-of-the-third-century", "The crisis of the third century", ["heather"]),
          lesson(86, "constantine", "Constantine and Christianity", ["eusebius"]),
          lesson(87, "the-fall-in-the-west", "The fall in the West", ["augustine", "brown", "gibbon", "heather", "ward-perkins"]),
          lesson(88, "what-survived", "Review: what survived", ["justinian"]),
        ],
      },
    ],
  },
  {
    id: "renaissance",
    heading: "Phase III · Renaissance",
    modules: [
      {
        id: "bridge-renaissance",
        heading: "Bridge",
        lessons: [
          lesson(89, "rome-to-the-renaissance", "Bridge: Rome to the Middle Ages to the Renaissance", ["boethius", "gutas", "reynolds", "wilson"]),
        ],
      },
      {
        id: "iii1",
        heading: "III.1 · Recovering the classics",
        lessons: [
          lesson(90, "why-a-rebirth", "History: Why a ‘Rebirth’?", ["burckhardt", "grafton"], "/lessons/why-a-rebirth"),
          lesson(91, "petrarch", "Petrarch", ["petrarch"]),
          lesson(92, "finding-lost-books", "Finding lost books", ["greenblatt", "reynolds"]),
          lesson(93, "byzantine-scholars", "Byzantine scholars and Greek in the West", ["wilson"]),
          lesson(94, "studia-humanitatis", "The studia humanitatis", ["grafton", "kallendorf"]),
          lesson(95, "humanist-schools", "Humanist schools", ["grafton", "kallendorf"]),
          lesson(96, "imitation-versus-judgment", "Review: imitation versus judgment", ["ascham", "grafton"]),
        ],
      },
      {
        id: "iii2",
        heading: "III.2 · Civic humanism",
        lessons: [
          lesson(97, "florence-and-venice", "History: Florence and Venice", ["baron", "kohl"]),
          lesson(98, "bruni", "Bruni and Florence as new Rome", ["baron", "bruni"]),
          lesson(99, "venice", "Venice’s lasting republic", ["contarini"]),
          lesson(100, "the-medici", "The Medici", ["hale", "machiavelli-histories"]),
          lesson(101, "savonarola", "Savonarola", ["weinstein"]),
          lesson(102, "learning-for-public-life", "Learning for public life", ["baron", "kohl"]),
          lesson(103, "ideals-need-checks", "Review: ideals need checks", ["augustus", "hale"]),
        ],
      },
      {
        id: "iii3",
        heading: "III.3 · Art, architecture and proportion",
        lessons: [
          lesson(104, "patrons-and-workshops", "History: Patrons and Workshops", ["vasari"]),
          lesson(105, "brunelleschi", "Brunelleschi", ["king", "vasari"]),
          lesson(106, "alberti", "Alberti", ["alberti-painting", "alberti-building"]),
          lesson(107, "leonardo", "Leonardo", ["leonardo"]),
          lesson(108, "michelangelo", "Michelangelo", ["vasari"]),
          lesson(109, "school-of-athens", "Raphael’s School of Athens", ["vasari"]),
          lesson(110, "beauty-and-its-cost", "Review: beauty and its cost", ["vasari"]),
        ],
      },
      {
        id: "iii4",
        heading: "III.4 · The new science",
        lessons: [
          lesson(111, "print-and-knowledge", "History: Print and Knowledge", ["eisenstein"]),
          lesson(112, "the-printing-press", "The printing press", ["eisenstein"]),
          lesson(113, "copernicus", "Copernicus", ["copernicus"]),
          lesson(114, "vesalius", "Vesalius", ["vesalius"]),
          lesson(115, "galileo", "Galileo", ["galileo"]),
          lesson(116, "francis-bacon", "Francis Bacon and method", ["bacon"]),
          lesson(117, "reverence-and-evidence", "Review: reverence and evidence", ["aristotle-parts"]),
        ],
      },
      {
        id: "iii5",
        heading: "III.5 · The prince and political realism",
        lessons: [
          lesson(118, "italy-at-war", "History: Italy at War, 1494–1530", ["guicciardini"]),
          lesson(119, "the-prince", "Machiavelli’s The Prince", ["machiavelli-prince", "skinner"]),
          lesson(120, "discourses-on-livy", "Discourses on Livy", ["machiavelli-discourses"]),
          lesson(121, "virtu-and-fortuna", "Virtù and fortuna", ["machiavelli-prince"]),
          lesson(122, "thucydides-revisited", "Thucydides revisited", ["machiavelli-prince", "thucydides"]),
          lesson(123, "why-italy-fell", "Why Italy fell", ["guicciardini", "machiavelli-histories"]),
          lesson(124, "realism-needs-virtue", "Review: realism needs virtue", ["skinner"]),
        ],
      },
      {
        id: "iii6",
        heading: "III.6 · The courtier and statesman",
        lessons: [
          lesson(125, "courts-and-the-north", "History: Courts and the Northern Renaissance", ["castiglione"]),
          lesson(126, "the-courtier", "Castiglione’s Courtier", ["castiglione"]),
          lesson(127, "erasmus", "Erasmus", ["erasmus"]),
          lesson(128, "thomas-more", "Thomas More", ["more"]),
          lesson(129, "elyot-and-ascham", "Elyot and Ascham", ["ascham", "elyot"]),
          lesson(130, "montaigne", "Montaigne", ["montaigne"]),
          lesson(131, "the-complete-professional", "Review: the complete professional", ["castiglione", "richard"]),
        ],
      },
    ],
  },
  {
    id: "founding",
    heading: "Part IV · The Founding",
    modules: [
      {
        id: "iv",
        heading: "IV · The Founding — the culmination",
        lessons: [
          lesson(132, "world-of-the-founders", "History: The World of the Founders", ["bailyn", "richard-gifts", "richard"]),
          lesson(133, "founders-classical-education", "The Founders' classical education", ["richard-gifts", "richard"]),
          lesson(134, "cato-and-roman-virtue", "Cato and Roman virtue", ["addison", "bailyn", "richard", "trenchard"]),
          lesson(135, "mixed-constitution", "The mixed constitution and checks: Polybius, Montesquieu, Adams", ["adams", "federalist", "montesquieu", "polybius"]),
          lesson(136, "federalist-confederacies", "Learning from failure: The Federalist on ancient confederacies", ["federalist", "richard"]),
          lesson(137, "declaration-and-natural-law", "The Declaration and natural law", ["aristotle-politics-rackham", "cicero-republic", "jefferson-lee", "locke", "declaration"]),
          lesson(138, "cincinnatus", "Cincinnatus: Washington gives up power", ["livy", "plutarch-publicola", "washington", "wills"]),
          lesson(139, "what-the-founding-learned", "What failed and what was learned", ["bailyn", "federalist", "articles", "constitution", "wood"]),
        ],
      },
    ],
  },
  {
    id: "capstone",
    heading: "Capstone",
    modules: [
      {
        id: "capstone",
        heading: "The modern professional",
        lessons: [
          lesson(140, "the-modern-professional", "Capstone: the making of a modern professional", ["castiglione", "richard", "rubio"]),
        ],
      },
    ],
  },
];

export const courseLessons: CourseLesson[] = lessonPhases.flatMap((phase) =>
  phase.modules.flatMap((module) => module.lessons),
);

if (courseLessons.length !== 140) {
  throw new Error(`The course lists ${courseLessons.length} lessons; the sequence requires 140.`);
}

courseLessons.forEach((item, index) => {
  if (item.n !== index + 1) {
    throw new Error(`Lesson ${item.n} is out of order at position ${index + 1}.`);
  }
});

const bySlug = new Map(courseLessons.map((item) => [item.slug, item]));

export function lessonBySlug(slug: string): CourseLesson {
  const item = bySlug.get(slug);
  if (!item) throw new Error(`No lesson in the sequence for slug: ${slug}`);
  return item;
}

export function entriesForLesson(slug: string): BibEntry[] {
  return lessonBySlug(slug).refs.map((id) => bibEntry(id));
}

/** Part A, in the bibliography’s own section order. Repeated works stay where Part A repeats them. */
export const generalBibliography: { heading: string; ids: string[] }[] = [
  {
    heading: "Orientation and Prologue",
    ids: ["ascham", "castleden", "chadwick", "cline", "evans", "hodder", "lazaridis", "ramelli", "richard", "schmidt", "shelmerdine"],
  },
  {
    heading: "Phase I: Greece",
    ids: [
      "aeschylus", "aristotle-ethics", "aristotle-parts", "aristotle-politics-jowett", "aristotle-politics-rackham", "aristotle-athpol",
      "cartledge", "chadwick", "cline", "euclid", "euripides", "finley", "herodotus", "hesiod", "holland",
      "homer-iliad-murray", "homer-iliad-lattimore", "homer-iliad-butler", "homer-odyssey-lattimore", "homer-odyssey-butler",
      "hurwit", "kagan", "knox", "lane-fox", "lord", "plato-cooper", "plato-jowett",
      "plutarch-lycurgus", "plutarch-alexander", "plutarch-republic", "polybius", "richard", "shelmerdine", "sophocles", "stone",
      "landmark-herodotus", "landmark-thucydides", "thucydides", "vitruvius", "waterfield", "xenophon-hellenica", "xenophon-scripta",
    ],
  },
  {
    heading: "Bridge and Phase II: Rome",
    ids: [
      "augustine", "augustus", "beard", "brown", "caesar", "cicero-duties", "cicero-orator", "epictetus", "eusebius", "gibbon",
      "goldsworthy", "heather", "horace", "justinian", "livy", "marcus", "pliny", "plutarch-republic", "polybius", "sallust",
      "seneca", "suetonius", "syme", "virgil", "vitruvius", "ward-perkins", "warmington",
    ],
  },
  {
    heading: "Bridge and Phase III: Renaissance",
    ids: [
      "alberti-painting", "alberti-building", "aristotle-parts", "ascham", "augustus", "bacon", "baron", "boethius", "bruni",
      "burckhardt", "castiglione", "contarini", "copernicus", "eisenstein", "elyot", "erasmus", "galileo", "grafton", "greenblatt",
      "guicciardini", "gutas", "hale", "kallendorf", "king", "kohl", "leonardo", "machiavelli-discourses", "machiavelli-histories",
      "machiavelli-prince", "montaigne", "more", "petrarch", "reynolds", "richard", "skinner", "thucydides", "vasari", "vesalius",
      "weinstein", "wilson",
    ],
  },
  {
    heading: "Part IV: The Founding",
    ids: [
      "adams", "addison", "aristotle-politics-rackham", "bailyn", "cicero-republic", "federalist", "jefferson-lee",
      "livy", "locke", "montesquieu", "plutarch-publicola", "polybius", "richard-gifts", "richard", "trenchard",
      "articles", "constitution", "declaration", "washington", "wills", "wood",
    ],
  },
  {
    heading: "Capstone",
    ids: ["castiglione", "richard", "rubio"],
  },
];

for (const section of generalBibliography) {
  for (const id of section.ids) bibEntry(id);
}
