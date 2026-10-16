import { greeceArc, type OutlineLesson } from "./arc";

export type LessonStatus = "available" | "soon";

export type PlannedLesson = {
  slug: string;
  title: string;
  /** On-site length aimed at by the lesson template, not the syllabus’s longer week. */
  minutes: number;
  status: LessonStatus;
  href: string;
  reading: string;
};

export function lessonsForModule(moduleSlug: string): PlannedLesson[] {
  const module = greeceArc.find((item) => item.slug === moduleSlug);
  if (!module) return [];
  return module.lessons.map((lesson) => ({
    slug: lesson.slug,
    title: lesson.title,
    minutes: lesson.minutes,
    status: lesson.status,
    href: lesson.href,
    reading: lesson.adds,
  }));
}

export const module1Lessons = lessonsForModule("the-heroic-code");

/** Sits before Module I.1. Not one of that module’s weeks. */
export const prologueLesson: PlannedLesson = {
  slug: "the-birth-of-civilization",
  title: "The Birth of Civilization",
  minutes: 30,
  status: "available",
  href: "/lessons/the-birth-of-civilization",
  reading: "the ground beneath the foundation",
};

export function lessonNeighbors(slug: string) {
  if (slug === prologueLesson.slug) {
    return { index: -1, prev: undefined, next: module1Lessons[0] };
  }
  const index = module1Lessons.findIndex((item) => item.slug === slug);
  return {
    index,
    prev: index === 0 ? prologueLesson : index > 0 ? module1Lessons[index - 1] : undefined,
    next: index >= 0 && index < module1Lessons.length - 1 ? module1Lessons[index + 1] : undefined,
  };
}

export type { OutlineLesson };
