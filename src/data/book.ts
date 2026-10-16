/**
 * Textbook order for the 140-lesson course.
 * Lessons come from the sequence in references.ts. Chapter names and rings
 * are the lesson-sequence labels (16 Oct 2026). A lesson with an href is
 * written; the rest are still to come.
 */

import { lessonPhases, type CourseLesson } from "./references";

export type BookLesson = CourseLesson & {
  /** “Chapter 1 · Lesson 2”, or “Prologue”, “Bridge”, “Capstone”. */
  kicker: string;
  lessonNo: number | null;
  chapterNo: number | null;
  chapterTitle: string | null;
  chapterId: string | null;
  partId: string | null;
  partLabel: string | null;
  partTitle: string | null;
};

export type BookChapter = {
  id: string;
  kind: "chapter" | "bridge";
  /** 1-based within the part. Bridges are unnumbered. */
  number: number | null;
  title: string;
  /** Layer or ring, set in small caps on the contents page. */
  ring: string;
  heading: string;
  lessons: BookLesson[];
};

export type BookPart = {
  id: string;
  label: string;
  title: string;
  /** Part-level ring, from the lesson sequence. */
  ring: string;
  chapters: BookChapter[];
};

type ChapterMeta = { title: string; ring: string; kind: "chapter" | "bridge" };

const chapterMeta: Record<string, ChapterMeta> = {
  i1: { title: "Honor — the warrior", ring: "Ring 1 · Self", kind: "chapter" },
  i2: { title: "Mind and home — the householder", ring: "Ring 2 · Household", kind: "chapter" },
  i3: { title: "Citizen and soldier", ring: "Ring 3 · City", kind: "chapter" },
  i4: { title: "Conscience and law — the moral man", ring: "Ring 3 · Law and the courts", kind: "chapter" },
  i5: { title: "The examined mind — the thinker", ring: "Rings 1 and 3 · Self and city", kind: "chapter" },
  i6: { title: "Practical wisdom — the complete man", ring: "Ring 3 to 4 · City to a wider world", kind: "chapter" },
  "bridge-rome": { title: "From the polis to Rome", ring: "Ring 3 to 5 · Polis to the Roman world", kind: "bridge" },
  ii1: { title: "Duty — pietas", ring: "Rings 2–4 · Family to country", kind: "chapter" },
  ii2: { title: "Law and the res publica", ring: "Ring 4 · Country", kind: "chapter" },
  ii3: { title: "Gravitas and the soldier-state", ring: "Rings 4–5 · Italy to the Mediterranean", kind: "chapter" },
  ii4: { title: "Rhetoric and public service", ring: "Ring 4 · The republic in crisis", kind: "chapter" },
  ii5: { title: "Stoic self-command", ring: "Ring 5 · Empire", kind: "chapter" },
  ii6: { title: "Administering an empire, and its fall", ring: "Ring 5 · Empire", kind: "chapter" },
  "bridge-renaissance": { title: "From Rome to the Renaissance", ring: "Ring 5 to 3 · Empire to revived cities", kind: "bridge" },
  iii1: { title: "Recovering the classics", ring: "Rings 5–6 · A republic of letters", kind: "chapter" },
  iii2: { title: "Civic humanism", ring: "Ring 3 · City-republics", kind: "chapter" },
  iii3: { title: "Art, architecture and proportion", ring: "Ring 3 · Patrons and workshops", kind: "chapter" },
  iii4: { title: "The new science", ring: "Ring 6 · A print-connected world", kind: "chapter" },
  iii5: { title: "The prince and political realism", ring: "Ring 4 · Nation-states", kind: "chapter" },
  iii6: { title: "The courtier and statesman", ring: "Rings 4–6 · Court and a wider world", kind: "chapter" },
  iv: { title: "The Founding — the culmination", ring: "Rings 4–6 · The nation, looking to the world", kind: "chapter" },
};

const partPlan: { id: string; label: string; title: string; ring: string; phaseId: string }[] = [
  { id: "greece", label: "Part I", title: "Greece", ring: "Rings 1–3 · Self, household, city", phaseId: "greece" },
  { id: "rome", label: "Part II", title: "Rome", ring: "Rings 4–5 · Country to empire", phaseId: "rome" },
  { id: "renaissance", label: "Part III", title: "Renaissance", ring: "Rings 3–6 · City-republics to a wider world", phaseId: "renaissance" },
  { id: "founding", label: "Part IV", title: "The Founding", ring: "Rings 4–6 · The nation, looking to the world", phaseId: "founding" },
];

function phaseById(id: string) {
  const phase = lessonPhases.find((item) => item.id === id);
  if (!phase) throw new Error(`Missing phase: ${id}`);
  return phase;
}

function kickerFor(part: { label: string } | null, chapter: BookChapter | null, lessonNo: number | null, slug: string): string {
  if (slug === "how-sophandros-works") return "Orientation";
  if (slug === "the-birth-of-civilization") return "Prologue";
  if (slug === "the-modern-professional") return "Capstone";
  if (chapter?.kind === "bridge" && part) return `${part.label} · Bridge`;
  if (part && chapter?.number && lessonNo) {
    return `${part.label} · Chapter ${chapter.number} · Lesson ${lessonNo}`;
  }
  return part?.label ?? "Lesson";
}

function lessonsOf(moduleLessons: CourseLesson[], part: BookPart, chapter: BookChapter): BookLesson[] {
  return moduleLessons.map((lesson, index) => {
    const lessonNo = index + 1;
    return {
      ...lesson,
      lessonNo,
      chapterNo: chapter.number,
      chapterTitle: chapter.title,
      chapterId: chapter.id,
      partId: part.id,
      partLabel: part.label,
      partTitle: part.title,
      kicker: kickerFor(part, chapter, lessonNo, lesson.slug),
    };
  });
}

export const parts: BookPart[] = partPlan.map((plan) => {
  const phase = phaseById(plan.phaseId);
  const part: BookPart = { id: plan.id, label: plan.label, title: plan.title, ring: plan.ring, chapters: [] };
  let chapterNo = 0;
  for (const module of phase.modules) {
    const meta = chapterMeta[module.id];
    if (!meta) throw new Error(`No chapter label for module ${module.id}`);
    if (meta.kind === "chapter") chapterNo += 1;
    const chapter: BookChapter = {
      id: module.id,
      kind: meta.kind,
      number: meta.kind === "chapter" ? chapterNo : null,
      title: meta.title,
      ring: meta.ring,
      heading: meta.kind === "bridge" ? "Bridge" : `Chapter ${chapterNo}`,
      lessons: [],
    };
    chapter.lessons = lessonsOf(module.lessons, part, chapter);
    part.chapters.push(chapter);
  }
  return part;
});

const opening = phaseById("opening");
export const frontMatter: BookLesson[] = opening.modules.flatMap((module) =>
  module.lessons.map((lesson) => ({
    ...lesson,
    lessonNo: null,
    chapterNo: null,
    chapterTitle: null,
    chapterId: null,
    partId: null,
    partLabel: null,
    partTitle: null,
    kicker: kickerFor(null, null, null, lesson.slug),
  })),
);

const capstonePhase = phaseById("capstone");
const capstoneSource = capstonePhase.modules[0]?.lessons[0];
if (!capstoneSource) throw new Error("Capstone lesson is missing.");
export const capstone: BookLesson = {
  ...capstoneSource,
  lessonNo: null,
  chapterNo: null,
  chapterTitle: null,
  chapterId: null,
  partId: null,
  partLabel: null,
  partTitle: null,
  kicker: "Capstone",
};

/** A row on the curriculum and references pages. Prologue and capstone list lessons directly. */
export type CurriculumSection = {
  id: string;
  title: string;
  ring: string;
  lessons: BookLesson[] | null;
  chapters: BookChapter[] | null;
};

export const curriculumSections: CurriculumSection[] = [
  {
    id: "prologue",
    title: "Prologue",
    ring: "Rings 2–4 · Household, clan, town, palace-state",
    lessons: frontMatter,
    chapters: null,
  },
  ...parts.map((part) => ({
    id: part.id,
    title: part.title,
    ring: part.ring,
    lessons: null,
    chapters: part.chapters,
  })),
  {
    id: "capstone",
    title: "Capstone",
    ring: "Ring 6 · The modern professional",
    lessons: [capstone],
    chapters: null,
  },
];

export function sectionLessonCount(section: CurriculumSection): number {
  if (section.lessons) return section.lessons.length;
  return section.chapters?.reduce((sum, chapter) => sum + chapter.lessons.length, 0) ?? 0;
}

export function lessonCountLabel(count: number): string {
  return `${count} ${count === 1 ? "lesson" : "lessons"}`;
}

export function chapterLabel(chapter: BookChapter): string {
  return `${chapter.heading} · ${chapter.title}`;
}

export function plainLessonTitle(title: string): string {
  return title.replace(/^(History|Prologue|Orientation|Capstone|Bridge): /, "");
}

export const bookLessons: BookLesson[] = [
  ...frontMatter,
  ...parts.flatMap((part) => part.chapters.flatMap((chapter) => chapter.lessons)),
  capstone,
];

if (bookLessons.length !== 140) {
  throw new Error(`The book lists ${bookLessons.length} lessons; the sequence requires 140.`);
}

const bySlug = new Map(bookLessons.map((lesson) => [lesson.slug, lesson]));

export function lessonPlace(slug: string): BookLesson {
  const lesson = bySlug.get(slug);
  if (!lesson) throw new Error(`No place in the book for ${slug}`);
  return lesson;
}

export function lessonNeighbors(slug: string): { prev?: BookLesson; next?: BookLesson } {
  const index = bookLessons.findIndex((lesson) => lesson.slug === slug);
  if (index < 0) return {};
  return {
    prev: index > 0 ? bookLessons[index - 1] : undefined,
    next: index < bookLessons.length - 1 ? bookLessons[index + 1] : undefined,
  };
}

export function partById(id: string): BookPart {
  const part = parts.find((item) => item.id === id);
  if (!part) throw new Error(`No part ${id}`);
  return part;
}

/** Sidebar for a written lesson: its part, with the prologue or capstone attached when that is the page. */
export function sidebarFor(slug: string): { part: BookPart; before: BookLesson[]; after: BookLesson[] } {
  if (slug === "the-birth-of-civilization") {
    return { part: partById("greece"), before: frontMatter.filter((item) => item.slug === slug), after: [] };
  }
  if (slug === "the-modern-professional") {
    return { part: partById("founding"), before: [], after: [capstone] };
  }
  const place = lessonPlace(slug);
  if (!place.partId) throw new Error(`No sidebar part for ${slug}`);
  return { part: partById(place.partId), before: [], after: [] };
}
